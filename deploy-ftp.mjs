/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import * as fs from 'fs';
import * as ftp from 'basic-ftp';
import * as path from 'path';
import dotenv from 'dotenv';

dotenv.config();
const LOCAL_PATH = 'out';
const FTP_SERVER_PATH = '/';

async function uploadFiles(client, localFolderPath, remoteFolderPath) {
  const files = fs.readdirSync(localFolderPath);

  for (const file of files) {
    const localFilePath = path.join(localFolderPath, file);
    const remoteFilePath = path.join(remoteFolderPath, file);

    if (fs.statSync(localFilePath).isDirectory()) {
      await client.ensureDir(remoteFilePath);
      await uploadFiles(client, localFilePath, remoteFilePath);
    } else {
      await client.uploadFrom(localFilePath, remoteFilePath);
    }
  }
}

async function ftpDeploy(localFolderPath, remoteFolderPath) {
  const client = new ftp.Client();

  try {
    await client.access({
      host: process.env.NEXT_PUBLIC_HOST,
      user: process.env.NEXT_PUBLIC_USER,
      password: process.env.NEXT_PUBLIC_PASSWORD,
      secure: false,
    });

    await client.clearWorkingDir();
    await uploadFiles(client, localFolderPath, remoteFolderPath);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    client.close();
  }
}

ftpDeploy(LOCAL_PATH, FTP_SERVER_PATH);
