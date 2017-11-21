// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  config: {
    'API_URL': 'http://localhost:3000/api/v1', // process.env.API_URL,
    'VAPID_PUBLIC_KEY': 'BIv-PyKTfAjYWvOmTmavspW57h-qB1ZyDkxK24YQmha-1L-yY75Yct75LpY1ZlN951smdhGnSpR6e8oWN9fYv4Y' // process.env.VAPID_PUBLIC_KEY
  }
};
