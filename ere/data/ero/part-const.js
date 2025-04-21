const part_enum = {
  mouth: 0,
  breast: 0,
  hand: 0,
  foot: 0,
  body: 0,
  clitoris: 0,
  virgin: 0,
  anal: 0,
  penis: 0,
  abuse: 0,
  hit: 0,
  item: 0,
  sadism: 0,
  masochism: 0,
};
Object.keys(part_enum).forEach((k, i) => (part_enum[k] = i));
part_enum.keys = Object.keys(part_enum);

/** @type {string[]} */
const part_names = [];
part_names[part_enum.mouth] = '口腔';
part_names[part_enum.breast] = '胸部';
part_names[part_enum.hand] = '身体';
part_names[part_enum.foot] = '身体';
part_names[part_enum.body] = '身体';
part_names[part_enum.clitoris] = '外阴';
part_names[part_enum.virgin] = '阴道';
part_names[part_enum.anal] = '肛门';
part_names[part_enum.penis] = '阴茎';
part_names[part_enum.abuse] = '施虐';
part_names[part_enum.hit] = '施虐';
part_names[part_enum.item] = '施虐';
part_names[part_enum.sadism] = '施虐';
part_names[part_enum.masochism] = '受虐';

/** @type {string[]} */
const part_touch = [];
part_touch[part_enum.mouth] = '口腔';
part_touch[part_enum.breast] = '胸部';
part_touch[part_enum.hand] = '手部';
part_touch[part_enum.foot] = '脚部';
part_touch[part_enum.body] = '身体';
part_touch[part_enum.clitoris] = '外阴';
part_touch[part_enum.virgin] = '阴道';
part_touch[part_enum.anal] = '肛门';
part_touch[part_enum.penis] = '阴茎';
part_touch[part_enum.abuse] = '施虐';
part_touch[part_enum.hit] = '施虐';
part_touch[part_enum.item] = '施虐';
part_touch[part_enum.sadism] = '施虐';
part_touch[part_enum.masochism] = '受虐';

/** @type {string[]} */
const part_skills = [];
part_skills[part_enum.mouth] = '口交';
part_skills[part_enum.breast] = '乳交';
part_skills[part_enum.hand] = '手交';
part_skills[part_enum.foot] = '足交';
part_skills[part_enum.body] = '身体';
part_skills[part_enum.clitoris] = '性交';
part_skills[part_enum.virgin] = '性交';
part_skills[part_enum.anal] = '肛交';
part_skills[part_enum.penis] = '插入';
part_skills[part_enum.abuse] = '施虐';
part_skills[part_enum.hit] = '施虐';
part_skills[part_enum.item] = '施虐';
part_skills[part_enum.sadism] = '施虐';

/** @type {string[]} */
const part_talents = [];
part_talents[part_enum.mouth] = '淫口';
part_talents[part_enum.breast] = '淫乳';
part_talents[part_enum.body] = '淫身';
part_talents[part_enum.penis] = '早泄';
part_talents[part_enum.clitoris] = '淫核';
part_talents[part_enum.virgin] = '淫壶';
part_talents[part_enum.anal] = '淫臀';

/** @type {Record<string,string>} */
const part_gifts = {};
part_gifts[part_enum.mouth] = '荡唇';
part_gifts[part_enum.breast] = '妖乳';
part_gifts[part_enum.hand] = '神之手';
part_gifts[part_enum.foot] = '神之足';
part_gifts[part_enum.penis] = '凶器';
part_gifts[part_enum.virgin] = '名穴';
part_gifts[part_enum.anal] = '魔尻';

const part_names4item = {};
part_names4item[part_enum.breast] = '乳头';
part_names4item[part_enum.clitoris] = '阴蒂';

module.exports = {
  /** 身体部位的枚举类型 */
  get_skill_list: (sex) => [
    '甜言蜜语',
    '接吻技巧',
    ...Object.entries(part_skills)
      .map((e) => [Number(e), e[1]])
      .filter((e) => {
        switch (sex) {
          case 0:
            return e[0] !== part_enum.penis;
          case 1:
            return e[0] !== part_enum.clitoris && e[1] !== part_enum.virgin;
          case 10:
            return e[0] !== part_enum.clitoris;
        }
      })
      .map((e) => e[1])
      .filter((e, i, l) => i === l.indexOf(e)),
  ],
  /** 身体部位对应的快感名称 */
  part_enum,
  part_gifts,
  part_names,
  part_names4item,
  /** 身体部位对应的部位名称 */
  part_skills,
  part_talents,
  part_touch /** 快感条名称数组 */,
  pleasure_list: [
    part_enum.mouth,
    part_enum.breast,
    part_enum.body,
    part_enum.penis,
    part_enum.clitoris,
    part_enum.virgin,
    part_enum.anal,
    part_enum.sadism,
    part_enum.masochism,
  ],
  /** 接触部位名称数组 */
  touch_list: [
    part_enum.mouth,
    part_enum.breast,
    part_enum.body,
    part_enum.hand,
    part_enum.penis,
    part_enum.clitoris,
    part_enum.virgin,
    part_enum.anal,
    part_enum.foot,
    part_enum.sadism,
    part_enum.masochism,
  ],
};
