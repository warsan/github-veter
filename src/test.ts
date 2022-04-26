// Этот файл требуется karma.conf.js и рекурсивно загружает все файлы .spec и framework

import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// К сожалению, для переменной `__karma__` не существует типизации. Просто объявите его любым.
declare const __karma__: any;
declare const require: any;

// Предотвратите преждевременное завершение работы Karma.
__karma__.loaded = function () {};

// Сначала инициализируйте среду тестирования Angular.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Затем мы находим все тесты.
const context = require.context('./', true, /\.spec\.ts$/);
// И загрузите модули.
context.keys().map(context);
// Наконец, запустите Karma для выполнения тестов.
__karma__.start();
