/* eslint-disable no-underscore-dangle */
import Asana from 'asana';
import archiver from 'archiver';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

// Обробка аргументів командного рядка
const { parentTaskId, subtaskName } = yargs(hideBin(process.argv))
  .option('parentTaskId', {
    description: 'ID батьківської задачі',
    type: 'string',
    demandOption: true,
  })
  .option('subtaskName', {
    description: 'Назва підзавдання',
    type: 'string',
    demandOption: true,
  }).argv;

// Конфігурація Asana API
const client = Asana.ApiClient.instance;
const { token } = client.authentications;
token.accessToken = '2/1206441831030606/1209233641303454:f8b912ffd7da917449dd9ef3d112b3c8';

// Шлях до папки 'out' та архіву
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderPath = path.join(__dirname, 'out');
const archivePath = path.join(__dirname, 'out.zip');

// Створення архіву з папки 'out'
const createArchive = async () =>
  new Promise((resolve, reject) => {
    const output = fs.createWriteStream(archivePath);
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', () => resolve());
    archive.on('error', (err) => reject(err));

    archive.pipe(output);
    archive.directory(folderPath, false);
    archive.finalize();
  });

// Перевірка, чи існує батьківська задача
const checkParentTaskExists = async () => {
  const tasksApiInstance = new Asana.TasksApi();
  const opts = {
    opt_fields: 'name,parent',
  };

  try {
    const result = await tasksApiInstance.getTask(parentTaskId, opts);
    if (result && result.data) {
      console.log('Parent task found:', result.data.name);
      return true;
    }
    console.log('No parent task found.');
    return false;
  } catch (error) {
    console.error('Error fetching task:', error.response ? error.response.body : error.message);
    return false;
  }
};

// Створення підзавдання
const createSubtask = async () => {
  const tasksApi = new Asana.TasksApi();
  const body = {
    data: {
      name: `setting ${subtaskName}`,
      assignee: 'dmytro.h@offer-wall.com',
    },
  };

  return tasksApi.createSubtaskForTask(body, parentTaskId);
};

// Завантаження архіву
const uploadFileToAsana = async (subTaskId) => {
  const attachmentsApiInstance = new Asana.AttachmentsApi();

  const opts = {
    file: fs.createReadStream(archivePath),
    parent: subTaskId,
    name: path.basename(subtaskName),
    connect_to_app: true,
  };

  return attachmentsApiInstance.createAttachmentForObject(opts);
};

// Основна функція
const main = async () => {
  try {
    // Перевірка наявності батьківської задачі
    const isParentTaskExist = await checkParentTaskExists();
    if (!isParentTaskExist) {
      console.log(`Батьківська задача з ID ${parentTaskId} не знайдена.`);
      return;
    }

    // Створення архіву
    await createArchive();
    console.log('Archive created successfully.');

    // Створення підзавдання в Asana
    const subtask = await createSubtask();
    console.log('Subtask created successfully.');

    // Завантаження файлу в створену підзадачу
    await uploadFileToAsana(subtask.data.gid);
    console.log('File uploaded successfully.');
  } catch (error) {
    console.error('Error:', error);
  }
};

// Виклик основної функції
main();
