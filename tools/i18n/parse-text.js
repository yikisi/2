const { writeFileSync } = require('fs');
const { join } = require('path');

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const text_data = {};

async function task() {
  const categories = [14, 47, 48, 59];

  const data = await prisma.text_data.findMany({
    where: {
      category: { in: categories },
    },
  });
  for (const t of data) {
    (text_data[t.category] ||= {})[t.index] = t.text.replace(
      /(\\n)?＜.*＞$/,
      '',
    );
  }

  writeFileSync(
    join(__dirname, '../../common/i18n/ja-JP/text_data.json'),
    JSON.stringify(text_data, null, 2),
  );
}

task().then();
