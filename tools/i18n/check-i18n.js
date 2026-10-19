const { parseSync } = require('@babel/core');
const { readFileSync, readdirSync } = require('fs');
const { join, relative } = require('path');

const i18nPath = join(__dirname, '../../ere/i18n');
const baseLocale = 'zh-CN';

const args = process.argv.slice(2);
const localeArg = args.find((arg) => arg.startsWith('--locale='));
const targetLocale = localeArg ? localeArg.substring('--locale='.length) : null;
const summary = args.includes('--summary');
const verbose = args.includes('--verbose');

function list_files(dir) {
  const result = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.DS_Store') {
      continue;
    }
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      result.push(...list_files(path));
    } else if (entry.isFile() && entry.name.endsWith('.js')) {
      result.push(path);
    }
  }
  return result;
}

function property_name(key) {
  if (key.type === 'Identifier') {
    return key.name;
  }
  if (key.type === 'StringLiteral' || key.type === 'NumericLiteral') {
    return String(key.value);
  }
  return null;
}

function class_entries(classNode) {
  const keys = new Set();
  for (const member of classNode.body.body) {
    if (
      member.type !== 'ClassProperty' &&
      member.type !== 'ClassMethod' &&
      member.type !== 'ClassAccessorProperty'
    ) {
      continue;
    }
    if (member.static || member.kind === 'constructor') {
      continue;
    }
    const name = property_name(member.key);
    if (name !== null && name !== '_') {
      keys.add(name);
    }
  }
  return keys;
}

function object_entries(objectNode) {
  const keys = new Set();
  for (const property of objectNode.properties) {
    if (property.type === 'SpreadElement') {
      continue;
    }
    const name = property_name(property.key);
    if (name !== null) {
      keys.add(name);
    }
  }
  return keys;
}

function find_class(program, name) {
  for (const node of program.body) {
    if (node.type === 'ClassDeclaration' && (!name || node.id.name === name)) {
      return node;
    }
  }
  return null;
}

const entryCache = new Map();

function get_entries(file) {
  if (entryCache.has(file)) {
    return entryCache.get(file);
  }
  const keys = new Set();
  const ast = parseSync(readFileSync(file, 'utf-8'), {
    babelrc: false,
    configFile: false,
    filename: file,
    sourceType: 'unambiguous',
  });
  let exportedClass = null;
  let hasExport = false;
  for (const node of ast.program.body) {
    if (
      node.type === 'ExpressionStatement' &&
      node.expression.type === 'AssignmentExpression' &&
      node.expression.left.type === 'MemberExpression' &&
      node.expression.left.object.type === 'Identifier' &&
      node.expression.left.object.name === 'module' &&
      node.expression.left.property.type === 'Identifier' &&
      node.expression.left.property.name === 'exports'
    ) {
      hasExport = true;
      const value = node.expression.right;
      if (value.type === 'ClassExpression') {
        exportedClass = value;
      } else if (value.type === 'ObjectExpression') {
        for (const key of object_entries(value)) {
          keys.add(key);
        }
      } else if (value.type === 'Identifier') {
        exportedClass = find_class(ast.program, value.name);
      }
    }
  }
  if (!hasExport) {
    exportedClass = find_class(ast.program);
  }
  if (exportedClass) {
    for (const key of class_entries(exportedClass)) {
      keys.add(key);
    }
  }
  entryCache.set(file, keys);
  return keys;
}

function list_locales() {
  return readdirSync(i18nPath, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        entry.name !== baseLocale &&
        /^[a-z]{2}-[A-Z]{2}$/.test(entry.name),
    )
    .map((entry) => entry.name)
    .filter((locale) => !targetLocale || locale === targetLocale)
    .sort();
}

if (targetLocale && !/^[a-z]{2}-[A-Z]{2}$/.test(targetLocale)) {
  console.error(`Invalid locale: ${targetLocale}`);
  // eslint-disable-next-line n/no-process-exit
  process.exit(1);
}

const locales = list_locales();
if (targetLocale && locales.length === 0) {
  console.error(`Locale not found: ${targetLocale}`);
  // eslint-disable-next-line n/no-process-exit
  process.exit(1);
}

const basePath = join(i18nPath, baseLocale);
const baseEntries = new Map(
  list_files(basePath)
    .map((file) => [relative(basePath, file), get_entries(file)])
    .sort((a, b) => a[0].localeCompare(b[0])),
);

let missingEntryCount = 0;

for (const locale of locales) {
  const localePath = join(i18nPath, locale);
  const localeFiles = new Set(
    list_files(localePath).map((file) => relative(localePath, file)),
  );
  let localeMissingEntryCount = 0;
  let localeMissingFileCount = 0;
  const lines = [];

  for (const [file, entries] of baseEntries) {
    if (!localeFiles.has(file)) {
      localeMissingFileCount += 1;
      localeMissingEntryCount += entries.size;
      lines.push(`  ${file}: ${entries.size} missing (file missing)`);
      if (verbose) {
        for (const entry of entries) {
          lines.push(`    ${entry}`);
        }
      }
      continue;
    }
    const localEntries = get_entries(join(localePath, file));
    const missing = [...entries]
      .filter((entry) => !localEntries.has(entry))
      .sort();
    if (missing.length) {
      localeMissingEntryCount += missing.length;
      lines.push(`  ${file}: ${missing.length} missing`);
      if (!summary) {
        for (const entry of missing) {
          lines.push(`    ${entry}`);
        }
      }
    }
  }

  missingEntryCount += localeMissingEntryCount;
  console.log(
    `\n${locale}: ${localeMissingEntryCount} missing entries in ${localeMissingFileCount} missing file(s)`,
  );
  for (const line of lines) {
    console.log(line);
  }
}

console.log(
  `\nChecked ${locales.length} locale(s) against ${baseLocale}, ${missingEntryCount} missing entries.`,
);

if (missingEntryCount) {
  // eslint-disable-next-line n/no-process-exit
  process.exit(1);
}
