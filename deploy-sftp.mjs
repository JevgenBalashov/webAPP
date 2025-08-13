import Client from 'ssh2-sftp-client';
import dotenv from 'dotenv';

dotenv.config({ path: './.env.local' });
const LOCAL_PATH = 'out';
const FTP_SERVER_PATH = '/var/www/html';

async function sftpDeploy(localFolderPath, remoteFolderPath) {
  const client = new Client('sftp-client');

  try {
    await client.connect({
      host: process.env.NEXT_PUBLIC_HOST,
      username: process.env.NEXT_PUBLIC_USER,
      password: process.env.NEXT_PUBLIC_PASSWORD,
      port: 22,
    });

    client.on('upload', (info) => {
      // eslint-disable-next-line no-console
      console.log(`Listener: Uploaded ${info.source}`);
    });

    if (await client.exists(remoteFolderPath)) {
      await client.rmdir(remoteFolderPath, true);
    }

    await client.uploadDir(localFolderPath, remoteFolderPath);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    client.end();
  }
}

sftpDeploy(LOCAL_PATH, FTP_SERVER_PATH);
