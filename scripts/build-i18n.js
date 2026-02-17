const fs = require('node:fs');
const path = require('node:path');

const rootDir = path.resolve(__dirname, '..');
const templatePath = path.join(rootDir, 'templates', 'index.tpl.html');
const localesDir = path.join(rootDir, 'locales');

const defaultLocale = 'en';

function getByPath(obj, dottedPath) {
  return dottedPath.split('.').reduce((acc, key) => {
    if (acc && Object.prototype.hasOwnProperty.call(acc, key)) {
      return acc[key];
    }
    return undefined;
  }, obj);
}

function renderTemplate(template, localeData, localeCode) {
  return template.replace(/{{\s*([\w.-]+)\s*}}/g, (_match, key) => {
    const value = getByPath(localeData, key);

    if (value === undefined) {
      throw new Error(`Missing translation key "${key}" in locale "${localeCode}"`);
    }

    return String(value);
  });
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function main() {
  const template = fs.readFileSync(templatePath, 'utf8');
  const localeDirs = fs
    .readdirSync(localesDir)
    .filter((entry) => {
      const fullPath = path.join(localesDir, entry);
      return fs.statSync(fullPath).isDirectory();
    })
    .sort();

  if (localeDirs.length === 0) {
    throw new Error('No locale directories found in locales/.');
  }

  for (const localeCode of localeDirs) {
    const localePath = path.join(localesDir, localeCode, 'index.json');
    if (!fs.existsSync(localePath)) {
      throw new Error(`Missing locale file: locales/${localeCode}/index.json`);
    }

    const localeData = JSON.parse(fs.readFileSync(localePath, 'utf8'));
    const html = renderTemplate(template, localeData, localeCode);

    const outDir = localeCode === defaultLocale ? rootDir : path.join(rootDir, localeCode);
    ensureDir(outDir);
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
  }

  const legacyDefaultPath = path.join(rootDir, defaultLocale, 'index.html');
  if (fs.existsSync(legacyDefaultPath)) {
    fs.unlinkSync(legacyDefaultPath);
    const legacyDefaultDir = path.dirname(legacyDefaultPath);
    if (fs.existsSync(legacyDefaultDir) && fs.readdirSync(legacyDefaultDir).length === 0) {
      fs.rmdirSync(legacyDefaultDir);
    }
  }

  console.log(`Built ${localeDirs.length} locale(s). Default locale: ${defaultLocale}`);
}

main();
