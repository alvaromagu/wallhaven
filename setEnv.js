import {stat, writeFile} from 'node:fs/promises';

(async function () {
  const path = './src/environments/environment.ts';
  if (await stat(path).catch(() => false)) {
    console.info(`File ${path} already exists`);
    return;
  }
  const envFile = `export const environment = {
  apiKey: ${process.env['apiKey']},
  baseUrl: ${process.env['baseUrl']},
};`
  console.log(envFile);
  console.info('Creating env file...');
  await writeFile(path, envFile).then(() => console.info('Env file created')).catch(err => console.error(`Could not create env file ${err}`));
})()
