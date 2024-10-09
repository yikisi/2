const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const skills = [];

async function task() {
  const skill_id_list = [];
  for (const name of skills) {
    const ret = await prisma.text_data.findMany({
      where: { text: { contains: name }, id: 47 },
    });
    if (ret.length === 0) {
      throw new Error(name);
    } else if (ret.length === 1) {
      skill_id_list.push(ret[0].index);
    } else {
      skill_id_list.push(ret.map((e) => `${e.index}(${e.text})`).join(' OR '));
    }
  }
  console.log(skill_id_list);
}

task().then().catch(console.log);
