const allLocales = [
  'af',
  'af-NA',
  'af-ZA',
  'agq',
  'agq-CM',
  'ak',
  'ak-GH',
  'am',
  'am-ET',
  'ar',
  'ar-001',
  'ar-AE',
  'ar-BH',
  'ar-DJ',
  'ar-DZ',
  'ar-EG',
  'ar-EH',
  'ar-ER',
  'ar-IL',
  'ar-IQ',
  'ar-JO',
  'ar-KM',
  'ar-KW',
  'ar-LB',
  'ar-LY',
  'ar-MA',
  'ar-MR',
  'ar-OM',
  'ar-PS',
  'ar-QA',
  'ar-SA',
  'ar-SD',
  'ar-SO',
  'ar-SS',
  'ar-SY',
  'ar-TD',
  'ar-TN',
  'ar-YE',
  'as',
  'as-IN',
  'asa',
  'asa-TZ',
  'ast',
  'ast-ES',
  'az',
  'az-Cyrl',
  'az-Cyrl-AZ',
  'az-Latn',
  'az-Latn-AZ',
  'ba',
  'ba-RU',
  'bas',
  'bas-CM',
  'be',
  'be-BY',
  'bem',
  'bem-ZM',
  'bez',
  'bez-TZ',
  'bg',
  'bg-BG',
  'bm',
  'bm-ML',
  'bn',
  'bn-BD',
  'bn-IN',
  'bo',
  'bo-CN',
  'bo-IN',
  'br',
  'br-FR',
  'brx',
  'brx-IN',
  'bs',
  'bs-Cyrl',
  'bs-Cyrl-BA',
  'bs-Latn',
  'bs-Latn-BA',
  'byn',
  'byn-ER',
  'ca',
  'ca-AD',
  'ca-ES',
  'ca-ES-VALENCIA',
  'ca-FR',
  'ca-IT',
  'cgg',
  'cgg-UG',
  'chr',
  'chr-US',
  'ckb',
  'ckb-IQ',
  'co',
  'co-FR',
  'cs',
  'cs-CZ',
  'cu',
  'cu-RU',
  'cy',
  'cy-GB',
  'da',
  'da-DK',
  'da-GL',
  'dav',
  'dav-KE',
  'de',
  'de-AT',
  'de-BE',
  'de-CH',
  'de-DE',
  'de-IT',
  'de-LI',
  'de-LU',
  'dje',
  'dje-NE',
  'dsb',
  'dsb-DE',
  'dua',
  'dua-CM',
  'dyo',
  'dyo-SN',
  'dz',
  'dz-BT',
  'ebu',
  'ebu-KE',
  'ee',
  'ee-GH',
  'ee-TG',
  'el',
  'el-CY',
  'el-GR',
  'en',
  'en-001',
  'en-150',
  'en-AE',
  'en-AG',
  'en-AI',
  'en-AS',
  'en-AT',
  'en-AU',
  'en-BB',
  'en-BE',
  'en-BI',
  'en-BM',
  'en-BS',
  'en-BW',
  'en-BZ',
  'en-CA',
  'en-CC',
  'en-CH',
  'en-CK',
  'en-CM',
  'en-CX',
  'en-CY',
  'en-DE',
  'en-DG',
  'en-DK',
  'en-DM',
  'en-ER',
  'en-FI',
  'en-FJ',
  'en-FK',
  'en-FM',
  'en-GB',
  'en-GD',
  'en-GG',
  'en-GH',
  'en-GI',
  'en-GM',
  'en-GU',
  'en-GY',
  'en-HK',
  'en-IE',
  'en-IL',
  'en-IM',
  'en-IN',
  'en-IO',
  'en-JE',
  'en-JM',
  'en-KE',
  'en-KI',
  'en-KN',
  'en-KY',
  'en-LC',
  'en-LR',
  'en-LS',
  'en-MG',
  'en-MH',
  'en-MO',
  'en-MP',
  'en-MS',
  'en-MT',
  'en-MU',
  'en-MW',
  'en-MY',
  'en-NA',
  'en-NF',
  'en-NG',
  'en-NL',
  'en-NR',
  'en-NU',
  'en-NZ',
  'en-PG',
  'en-PH',
  'en-PK',
  'en-PN',
  'en-PR',
  'en-PW',
  'en-RW',
  'en-SB',
  'en-SC',
  'en-SD',
  'en-SE',
  'en-SG',
  'en-SH',
  'en-SI',
  'en-SL',
  'en-SS',
  'en-SX',
  'en-SZ',
  'en-TC',
  'en-TK',
  'en-TO',
  'en-TT',
  'en-TV',
  'en-TZ',
  'en-UG',
  'en-UM',
  'en-US',
  'en-US-POSIX',
  'en-VC',
  'en-VG',
  'en-VI',
  'en-VU',
  'en-WS',
  'en-ZA',
  'en-ZM',
  'en-ZW',
  'eo',
  'eo-001',
  'es',
  'es-419',
  'es-AR',
  'es-BO',
  'es-BR',
  'es-BZ',
  'es-CL',
  'es-CO',
  'es-CR',
  'es-CU',
  'es-DO',
  'es-EA',
  'es-EC',
  'es-ES',
  'es-GQ',
  'es-GT',
  'es-HN',
  'es-IC',
  'es-MX',
  'es-NI',
  'es-PA',
  'es-PE',
  'es-PH',
  'es-PR',
  'es-PY',
  'es-SV',
  'es-US',
  'es-UY',
  'es-VE',
  'et',
  'et-EE',
  'eu',
  'eu-ES',
  'ewo',
  'ewo-CM',
  'fa',
  'fa-AF',
  'fa-IR',
  'ff',
  'ff-CM',
  'ff-GN',
  'ff-MR',
  'ff-SN',
  'fi',
  'fi-FI',
  'fil',
  'fil-PH',
  'fo',
  'fo-DK',
  'fo-FO',
  'fr',
  'fr-BE',
  'fr-BF',
  'fr-BI',
  'fr-BJ',
  'fr-BL',
  'fr-CA',
  'fr-CD',
  'fr-CF',
  'fr-CG',
  'fr-CH',
  'fr-CI',
  'fr-CM',
  'fr-DJ',
  'fr-DZ',
  'fr-FR',
  'fr-GA',
  'fr-GF',
  'fr-GN',
  'fr-GP',
  'fr-GQ',
  'fr-HT',
  'fr-KM',
  'fr-LU',
  'fr-MA',
  'fr-MC',
  'fr-MF',
  'fr-MG',
  'fr-ML',
  'fr-MQ',
  'fr-MR',
  'fr-MU',
  'fr-NC',
  'fr-NE',
  'fr-PF',
  'fr-PM',
  'fr-RE',
  'fr-RW',
  'fr-SC',
  'fr-SN',
  'fr-SY',
  'fr-TD',
  'fr-TG',
  'fr-TN',
  'fr-VU',
  'fr-WF',
  'fr-YT',
  'fur',
  'fur-IT',
  'fy',
  'fy-NL',
  'ga',
  'ga-GB',
  'ga-IE',
  'gd',
  'gd-GB',
  'gl',
  'gl-ES',
  'gsw',
  'gsw-CH',
  'gsw-FR',
  'gsw-LI',
  'gu',
  'gu-IN',
  'guz',
  'guz-KE',
  'gv',
  'gv-IM',
  'ha',
  'ha-GH',
  'ha-NE',
  'ha-NG',
  'haw',
  'haw-US',
  'he',
  'he-IL',
  'hi',
  'hi-IN',
  'hr',
  'hr-BA',
  'hr-HR',
  'hsb',
  'hsb-DE',
  'hu',
  'hu-HU',
  'hy',
  'hy-AM',
  'ia',
  'ia-001',
  'ia-FR',
  'ibb',
  'ibb-NG',
  'id',
  'id-ID',
  'ig',
  'ig-NG',
  'ii',
  'ii-CN',
  'is',
  'is-IS',
  'it',
  'it-CH',
  'it-IT',
  'it-SM',
  'it-VA',
  'ja',
  'ja-JP',
  'jgo',
  'jgo-CM',
  'jmc',
  'jmc-TZ',
  'ka',
  'ka-GE',
  'kab',
  'kab-DZ',
  'kam',
  'kam-KE',
  'kde',
  'kde-TZ',
  'kea',
  'kea-CV',
  'khq',
  'khq-ML',
  'ki',
  'ki-KE',
  'kk',
  'kk-KZ',
  'kkj',
  'kkj-CM',
  'kl',
  'kl-GL',
  'kln',
  'kln-KE',
  'km',
  'km-KH',
  'kn',
  'kn-IN',
  'ko',
  'ko-KP',
  'ko-KR',
  'kok',
  'kok-IN',
  'ks',
  'ks-IN',
  'ksb',
  'ksb-TZ',
  'ksf',
  'ksf-CM',
  'ksh',
  'ksh-DE',
  'kw',
  'kw-GB',
  'ky',
  'ky-KG',
  'lag',
  'lag-TZ',
  'lb',
  'lb-LU',
  'lg',
  'lg-UG',
  'lkt',
  'lkt-US',
  'ln',
  'ln-AO',
  'ln-CD',
  'ln-CF',
  'ln-CG',
  'lo',
  'lo-LA',
  'lrc',
  'lrc-IQ',
  'lrc-IR',
  'lt',
  'lt-LT',
  'lu',
  'lu-CD',
  'luo',
  'luo-KE',
  'luy',
  'luy-KE',
  'lv',
  'lv-LV',
  'mas',
  'mas-KE',
  'mas-TZ',
  'mer',
  'mer-KE',
  'mfe',
  'mfe-MU',
  'mg',
  'mg-MG',
  'mgh',
  'mgh-MZ',
  'mgo',
  'mgo-CM',
  'mk',
  'mk-MK',
  'ml',
  'ml-IN',
  'mn',
  'mn-Cyrl',
  'mn-MN',
  'mn-Mong',
  'mn-Mong-CN',
  'moh',
  'moh-CA',
  'mr',
  'mr-IN',
  'ms',
  'ms-BN',
  'ms-MY',
  'ms-SG',
  'mt',
  'mt-MT',
  'mua',
  'mua-CM',
  'my',
  'my-MM',
  'mzn',
  'mzn-IR',
  'naq',
  'naq-NA',
  'nb',
  'nb-NO',
  'nb-SJ',
  'nd',
  'nd-ZW',
  'nds',
  'nds-DE',
  'nds-NL',
  'ne',
  'ne-IN',
  'ne-NP',
  'nl',
  'nl-AW',
  'nl-BE',
  'nl-BQ',
  'nl-CW',
  'nl-NL',
  'nl-SR',
  'nl-SX',
  'nmg',
  'nmg-CM',
  'nn',
  'nn-NO',
  'nnh',
  'nnh-CM',
  'nus',
  'nus-SS',
  'nyn',
  'nyn-UG',
  'om',
  'om-ET',
  'om-KE',
  'or',
  'or-IN',
  'os',
  'os-GE',
  'os-RU',
  'pa',
  'pa-Arab',
  'pa-Arab-PK',
  'pa-Guru',
  'pa-Guru-IN',
  'pl',
  'pl-PL',
  'prg',
  'prg-001',
  'ps',
  'ps-AF',
  'pt',
  'pt-AO',
  'pt-BR',
  'pt-CH',
  'pt-CV',
  'pt-GQ',
  'pt-GW',
  'pt-LU',
  'pt-MO',
  'pt-MZ',
  'pt-PT',
  'pt-ST',
  'pt-TL',
  'qu',
  'qu-BO',
  'qu-EC',
  'qu-PE',
  'rm',
  'rm-CH',
  'rn',
  'rn-BI',
  'ro',
  'ro-MD',
  'ro-RO',
  'rof',
  'rof-TZ',
  'ru',
  'ru-BY',
  'ru-KG',
  'ru-KZ',
  'ru-MD',
  'ru-RU',
  'ru-UA',
  'rw',
  'rw-RW',
  'rwk',
  'rwk-TZ',
  'sa',
  'sa-IN',
  'sah',
  'sah-RU',
  'saq',
  'saq-KE',
  'sbp',
  'sbp-TZ',
  'sd',
  'sd-PK',
  'se',
  'se-FI',
  'se-NO',
  'se-SE',
  'seh',
  'seh-MZ',
  'ses',
  'ses-ML',
  'sg',
  'sg-CF',
  'shi',
  'shi-Latn',
  'shi-Latn-MA',
  'shi-Tfng',
  'shi-Tfng-MA',
  'si',
  'si-LK',
  'sk',
  'sk-SK',
  'sl',
  'sl-SI',
  'smn',
  'smn-FI',
  'sn',
  'sn-ZW',
  'so',
  'so-DJ',
  'so-ET',
  'so-KE',
  'so-SO',
  'sq',
  'sq-AL',
  'sq-MK',
  'sq-XK',
  'sr',
  'sr-Cyrl',
  'sr-Cyrl-BA',
  'sr-Cyrl-ME',
  'sr-Cyrl-RS',
  'sr-Latn',
  'sr-Latn-BA',
  'sr-Latn-ME',
  'sr-Latn-RS',
  'sv',
  'sv-AX',
  'sv-FI',
  'sv-SE',
  'sw',
  'sw-CD',
  'sw-KE',
  'sw-TZ',
  'sw-UG',
  'syr',
  'syr-SY',
  'ta',
  'ta-IN',
  'ta-LK',
  'ta-MY',
  'ta-SG',
  'te',
  'te-IN',
  'teo',
  'teo-KE',
  'teo-UG',
  'tg',
  'tg-TJ',
  'th',
  'th-TH',
  'ti',
  'ti-ER',
  'ti-ET',
  'tig',
  'tig-ER',
  'tk',
  'tk-TM',
  'tn',
  'tn-BW',
  'tn-ZA',
  'to',
  'to-TO',
  'tr',
  'tr-CY',
  'tr-TR',
  'tt',
  'tt-RU',
  'twq',
  'twq-NE',
  'tzm',
  'tzm-MA',
  'ug',
  'ug-CN',
  'uk',
  'uk-UA',
  'ur',
  'ur-IN',
  'ur-PK',
  'uz',
  'uz-Arab',
  'uz-Arab-AF',
  'uz-Cyrl',
  'uz-Cyrl-UZ',
  'uz-Latn',
  'uz-Latn-UZ',
  'vai',
  'vai-Latn',
  'vai-Latn-LR',
  'vai-Vaii',
  'vai-Vaii-LR',
  'vi',
  'vi-VN',
  'vo',
  'vo-001',
  'vun',
  'vun-TZ',
  'wae',
  'wae-CH',
  'wal',
  'wal-ET',
  'wo',
  'wo-SN',
  'xh',
  'xh-ZA',
  'xog',
  'xog-UG',
  'yav',
  'yav-CM',
  'yi',
  'yi-001',
  'yo',
  'yo-BJ',
  'yo-NG',
  'zgh',
  'zgh-MA',
  'zh',
  'zh-CN',
  'zh-Hans',
  'zh-Hans-CN',
  'zh-Hans-HK',
  'zh-Hans-MO',
  'zh-Hans-SG',
  'zh-Hant',
  'zh-Hant-HK',
  'zh-Hant-MO',
  'zh-Hant-TW',
  'zu',
  'zu-ZA',
];

const aaaa = {
  a: 1,
  b: 2,
  c: 3,
};

console.log('%c ||||| aaaa', 'color:yellowgreen', aaaa);

console.table(aaaa);

console.groupCollapsed('base');
const now = new Date();
console.log('%c ||||| now', 'color:yellowgreen', now);

const input1 = new Date('2023-06-02 09:54:58');
console.log('%c ||||| input1', 'color:yellowgreen', input1);

let input2 = new Date(2023, 6, 8, 10, 15, 12);
input2.setFullYear(2024);
// місяці почиаються з 0. тут 10 це листопад
input2.setMonth(10);
console.log('%c ||||| input2', 'color:yellowgreen', input2);
console.log(
  '%c ||||| input2.getFullYear()',
  'color:yellowgreen',
  input2.getFullYear()
);
console.log(
  '%c ||||| input2.getMonth() + 1',
  'color:yellowgreen',
  input2.getMonth() + 1
);

console.groupEnd();
console.log('------------------------------');

///
///
///
///
///
///
///
///
///

console.groupCollapsed('toLocaleString');

const timeZone5 = new Date('2023-06-02 09:54:58 +2');
console.log('%c ||||| timeZone5', 'color:yellowgreen', timeZone5);

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  era: 'long',
};

console.log(
  '%c ||||| timeZone5',
  'color:yellowgreen',
  timeZone5.toLocaleString('uk-UA')
);
console.log(
  '%c ||||| timeZone5',
  'color:yellowgreen',
  timeZone5.toLocaleString('uk-UA', options)
);
console.log(
  '%c ||||| timeZone5',
  'color:yellowgreen',
  timeZone5.toLocaleString('en-En', options)
);
console.log(
  '%c ||||| timeZone5',
  'color:yellowgreen',
  timeZone5.toLocaleString('hi-IN', options)
);
console.log(
  '%c ||||| timeZone5',
  'color:yellowgreen',
  timeZone5.toLocaleString('ar-EG', options)
);

console.groupEnd();
console.log('------------------------------');

////
////
////
////
////
////
////
////
////
////
////
console.groupCollapsed('getTime');

const getTestTime = new Date('2023-10-03T14:09:44Z');
console.log(
  '%c ||||| 2023-06-02 09:54:58 getTestTime',
  'color:yellowgreen',
  getTestTime
);

console.log('%c ||||| getTestTime', 'color:yellowgreen', getTestTime.getTime());
const start = new Date(0);
console.log('%c ||||| start', 'color:yellowgreen', start);

console.log(
  '%c ||||| start.toISOString()',
  'color:yellowgreen',
  start.toISOString()
);

const a = new Date('1970-12-13T00:00:00+03:00');

console.log('%c ||||| a', 'color:yellowgreen', a);

const dateNow = Date.now();
const dateNowString = new Date(dateNow);
console.log('%c ||||| dateNow', 'color:yellowgreen', dateNow);
console.log('%c ||||| dateNowString', 'color:yellowgreen', dateNowString);

// зсув в минутах -180 відносно UTC
console.log(
  '%c ||||| start.getTimezoneOffset()',
  'color:yellowgreen',
  start.getTimezoneOffset()
);

const customStart = new Date('01 Jan 1970');
const customStartUTC = new Date('01 Jan 1970 UTC');
const utcYear = customStart.getUTCFullYear();
const customStartUTCTime = customStartUTC.getTime();

console.log('%c ||||| customStart', 'color:yellowgreen', customStart);
console.log('%c ||||| customStartUTC', 'color:yellowgreen', customStartUTC);
console.log(
  '%c ||||| customStartUTCTime',
  'color:yellowgreen',
  customStartUTCTime
);
console.log(
  '%c ||||| utcYear - відняло - 3години',
  'color:yellowgreen',
  utcYear
);

console.groupEnd();
console.log('----');

///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////

console.groupCollapsed('toISOString');

console.log('%c ||||| now', 'color:yellowgreen', now);

const nowISO = now.toISOString();

console.log(
  '%c ||||| JSON.stringify(now)',
  'color:yellowgreen',
  JSON.stringify(now)
);

console.log('%c ||||| now.toISOString()', 'color:yellowgreen', nowISO);

const currentNowIso = new Date(nowISO);

console.log('%c ||||| currentNowIso', 'color:yellowgreen', currentNowIso);

// Створюємо новий об'єкт Date для потрібної дати
const date = new Date();

// Отримуємо зміщення годин для поточної дати (у хвилинах)
const offset = date.getTimezoneOffset();

var january = new Date(now.getFullYear(), 0, 1);
var july = new Date(now.getFullYear(), 6, 1);

console.log(
  '%c ||||| Отримуємо зміщення годин для поточної дати (у хвилинах)',
  'color:yellowgreen',
  offset
);

var currentTimeZoneOffsetInHours = offset / 60;

console.log(
  '%c ||||| зміщення в годинах',
  'color:yellowgreen',
  currentTimeZoneOffsetInHours
);
function isDaylightSavingTime() {
  const today = new Date();
  const month = today.getMonth() + 1; // Місяці в JavaScript нумеруються з 0 до 11, тому додаємо 1
  const day = today.getDate();
  const year = today.getFullYear();

  // Перевіряємо, чи є активна літній час за поточну дату
  if (month > 3 && month < 10) {
    // Літній час активний з квітня по вересень
    return true;
  } else if (month === 3 && day > 31 - new Date(year, 2, 31).getDay()) {
    // Літній час активний з останньої неділі березня
    return true;
  } else if (month === 10 && day < 31 - new Date(year, 9, 31).getDay()) {
    // Літній час активний до останньої неділі жовтня
    return true;
  } else {
    // Літній час неактивний
    return false;
  }
}

// Приклад виклику функції
if (isDaylightSavingTime()) {
  console.log('Зараз використовується літній час.');
} else {
  console.log('Зараз не використовується літній час.');
}

console.groupEnd();
console.log('----');

///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////

console.groupCollapsed('intl');

const optionsIntl = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
};
const date1 = new Date('2023-11-27');

/*
Locale: nl-BQ, Formatted Date: 27-11-2023
date.js:946 Locale: nl-CW, Formatted Date: 27-11-2023
date.js:946 Locale: nl-NL, Formatted Date: 27-11-2023
date.js:946 Locale: nl-SR, Formatted Date: 27-11-2023
date.js:946 Locale: nl-SX, Formatted Date: 27-11-2023*/

console.log(
  '%c ||||| nl-NL',
  'color:yellowgreen',
  new Intl.DateTimeFormat('nl-NL', optionsIntl).format(date1)
);

// allLocales.forEach((locale) => {
//   const dateFormatter = new Intl.DateTimeFormat(locale);
//   const formattedDate = dateFormatter.format(date1);
//   console.log(`Locale: ${locale}, Formatted Date: ${formattedDate}`);
// });

console.groupEnd();
console.log('----');
