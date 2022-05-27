// Содержимое файлов для текущего окружения будет перезаписано во время сборки.
// Система сборки по умолчанию использует среду dev,
// которая использует `environment.ts`, но если вы сделаете `ng build --env=prod`,
// то вместо этого будет использоваться `environment.prod.ts`.
// Список того, какой env сопоставлен с каким файлом,
// можно найти в файле `angular-cli.json`.

export const environment = {
  production: false,
  api_url: 'https://conduit.productionready.io/api'
};
