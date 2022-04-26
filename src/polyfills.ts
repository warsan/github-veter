/**
 * Этот файл включает полифиллы, необходимые Angular, и загружается перед началом работы приложения.
 * Вы можете добавить свои собственные дополнительные полифиллы в этот файл.
 *
 * Этот файл разделён на 2 части:
 *   1. Полифиллы для браузеров. Они применяются перед загрузкой ZoneJS и сортируются по браузерам.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main file.
 *     
 * Нынешняя установка предназначена для так называемых "вечнозелёных" браузеров; 
 * последние версии браузеров, которые автоматически обновляются.
 * К ним относятся Safari >= 10, Chrome >= 55 (включая Opera),
 * Edge >= 13 на настольном компьютере, а также iOS 10 и Chrome на мобильных устройствах.
 *
 * Узнайте больше в https://angular.io/guide/browser-support
 */

/***************************************************************************************************
* BROWSER POLYFILLS
*/


/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.

/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';

/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.
import 'core-js/es7/reflect';

/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.

/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
import 'zone.js/dist/zone'; // Included with Angular CLI.

/***************************************************************************************************
 * APPLICATION IMPORTS
 */
