const data = require('./SkillParams.json');

const skills = [];

data.forEach((skill) =>
  skills.push({
    buff: {
      type: skill[11].split('、'),
      value: skill[12].split('、').map(Number),
      time: Number(skill[13]),
    },
    color: skill[7],
    condition: skill[10],
    filter: skill[6],
    id: Number(skill[17]),
    name_jp: skill[1],
    name_zh: skill[4],
    pt: Number(skill[19]),
    score: Number(skill[18]),
    type: skill[5],
  }),
);

console.log(skills[0]);
