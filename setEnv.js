import {appendFile, stat} from 'node:fs/promises';

(async function () {
  const path = './src/environments/environment.ts';
  if (await stat(path).catch(() => false)) {
    console.info(`File ${path} already exists`);
    return;
  }
  const {apiKey, baseUrl} = process.env;
  if (!apiKey || !baseUrl) {
    console.error('apiKey or baseUrl variable not found');
    return;
  }
  const envFile = `export const environment = {
  apiKey: '${apiKey}',
  baseUrl: '${baseUrl}',
};`
  console.info('Creating env file...');
  await appendFile(path, envFile)
    .then(() => console.info('Env file created'))
    .catch(err => console.error(`Could not create env file ${err}`));
})()
