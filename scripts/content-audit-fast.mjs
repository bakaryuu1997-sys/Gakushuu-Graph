import fs from 'node:fs';

const files = [
  ['AI Passport', 'src/courses/ai-passport/index.ts'],
  ['Fundamental Info', 'src/courses/fundamental-info/catalog.ts'],
  ['Python', 'src/courses/python/catalog.ts'],
];
const failures = [];
for (const [name, file] of files) {
  if (!fs.existsSync(file)) failures.push(`${name}: missing ${file}`);
  const text = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}
const pythonCatalog = fs.readFileSync('src/courses/python/catalog.ts','utf8');
const pythonCount = (pythonCatalog.match(/"id":/g) ?? []).length;
if (pythonCount < 100) failures.push(`Python: expected >=100 nodes, got ${pythonCount}`);
const fundamentalCatalog = fs.readFileSync('src/courses/fundamental-info/catalog.ts','utf8');
const feCount = (fundamentalCatalog.match(/id:/g) ?? []).length;
if (feCount < 150) failures.push(`Fundamental Info: expected deep catalog, got ${feCount}`);
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`Fast content audit passed: Python ${pythonCount}+ nodes, Fundamental Info deep catalog, AI source present.`);
