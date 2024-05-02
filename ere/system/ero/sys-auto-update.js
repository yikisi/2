const era = require('#/era-electron');

const { get_skill_price } = require('#/system/ero/sys-get-juel-price');

const { get_random_entry } = require('#/utils/list-utils');

const skill_names = require('#/data/ero/shop-desc.json').skill_desc.map((e) =>
  e.substring(0, 4),
);
const { part_names, pleasure_list } = require('#/data/ero/part-const');

/** @param {number} chara_id */
module.exports = (chara_id) => {
  if (!chara_id) {
    return;
  }
  const sex = era.get(`cflag:${chara_id}:性别`);
  const my_sex = era.get('cflag:0:性别');
  let skill_list;
  const skill_price_dict = {};
  skill_names.forEach((skill) => {
    const level = era.get(`abl:${chara_id}:${skill}`);
    if (level === 5) {
      skill_price_dict[skill] = undefined;
    } else {
      skill_price_dict[skill] = get_skill_price(
        chara_id,
        skill,
        level + 1,
        true,
      );
    }
  });
  do {
    const juel_dict = {};
    pleasure_list.forEach((part) => {
      const key = `${part_names[part]}快感`;
      juel_dict[key] = era.get(`juel:${chara_id}:${key}`);
    });

    skill_list = [];
    const skill_dict = {};
    if (
      era.get(`talent:${chara_id}:工口意愿`) === 1 ||
      era.get(`talent:${chara_id}:淫乱`) ||
      era.get(`talent:${chara_id}:羞耻忍耐`) === -1 ||
      era.get(`talent:${chara_id}:社交态度`) === -1 ||
      era.get(`love:${chara_id}`) >= 75
    ) {
      skill_dict['甜言蜜语'] = true;
    }
    if (era.get(`talent:${chara_id}:荡唇`)) {
      skill_dict['接吻技巧'] = true;
      skill_dict['口交技巧'] = true;
    }
    if (era.get(`talent:${chara_id}:饮精成瘾`)) {
      skill_dict['口交技巧'] = true;
      skill_dict['阴茎掌握'] = true;
    }
    era.get('talent:0:淫口') > 0 && (skill_dict['口腔掌握'] = true);
    if (
      era.get(`talent:${chara_id}:淫口`) > 0 ||
      era.get(`talent:${chara_id}:喉咙敏感`)
    ) {
      skill_dict['口腔耐性'] = true;
    }
    era.get(`talent:${chara_id}:妖乳`) && (skill_dict['乳交技巧'] = true);
    era.get('talent:0:淫乳') > 0 && (skill_dict['胸部掌握'] = true);
    era.get(`talent:${chara_id}:淫乳`) > 0 && (skill_dict['胸部耐性'] = true);
    era.get(`talent:${chara_id}:神之手`) && (skill_dict['手交技巧'] = true);
    era.get(`talent:${chara_id}:神之足`) && (skill_dict['足交技巧'] = true);
    era.get('talent:0:淫身') > 0 && (skill_dict['身体掌握'] = true);
    era.get(`talent:${chara_id}:淫身`) > 0 && (skill_dict['身体耐性'] = true);
    if (era.get(`talent:${chara_id}:浴精成瘾`)) {
      skill_dict['乳交技巧'] = true;
      skill_dict['手交技巧'] = true;
      skill_dict['足交技巧'] = true;
      skill_dict['身体技巧'] = true;
    }
    if (era.get(`talent:${chara_id}:气味敏感`)) {
      skill_dict['胸部耐性'] = true;
      skill_dict['身体耐性'] = true;
      !sex && (skill_dict['外阴耐性'] = true);
    }
    if (sex) {
      era.get(`talent:${chara_id}:凶器`) && (skill_dict['插入技巧'] = true);
      era.get(`talent:${chara_id}:早泄`) > 0 && (skill_dict['阴茎耐性'] = true);
    }
    my_sex && era.get('talent:0:早泄') > 0 && (skill_dict['阴茎掌握'] = true);
    if (sex - 1) {
      if (era.get(`talent:${chara_id}:名穴`)) {
        skill_dict['性交技巧'] = true;
      }
      if (era.get(`talent:${chara_id}:榨精成瘾`)) {
        skill_dict['性交技巧'] = true;
        skill_dict['阴茎掌握'] = true;
      }
    }
    !my_sex && era.get('talent:0:淫核') > 0 && (skill_dict['外阴掌握'] = true);
    my_sex - 1 &&
      era.get('talent:0:淫壶') > 0 &&
      (skill_dict['阴道掌握'] = true);
    !sex &&
      era.get(`talent:${chara_id}:淫核`) > 0 &&
      (skill_dict['外阴耐性'] = true);
    if (
      sex - 1 &&
      (era.get(`talent:${chara_id}:淫壶`) > 0 ||
        era.get(`talent:${chara_id}:子宫敏感`))
    ) {
      skill_dict['阴道耐性'] = true;
    }
    era.get(`talent:${chara_id}:魔尻`) && (skill_dict['肛交技巧'] = true);
    if (era.get(`talent:${chara_id}:精液灌肠`)) {
      skill_dict['肛交技巧'] = true;
      skill_dict['阴茎掌握'] = true;
    }
    era.get('talent:0:淫臀') > 0 && (skill_dict['肛门掌握'] = true);
    if (
      era.get(`talent:${chara_id}:淫臀`) > 0 ||
      era.get(`talent:${chara_id}:肠道敏感`)
    ) {
      skill_dict['肛门耐性'] = true;
    }
    if (
      era.get(`talent:${chara_id}:抖S`) ||
      era.get(`talent:${chara_id}:小恶魔`) ||
      era.get(`talent:${chara_id}:变态`)
    ) {
      skill_dict['施虐技巧'] = true;
      skill_dict['受虐掌握'] = true;
    }
    if (
      era.get(`talent:${chara_id}:喜欢责骂`) ||
      era.get(`talent:${chara_id}:喜欢痛苦`)
    ) {
      skill_dict['受虐耐性'] = true;
    }

    skill_list = Object.keys(skill_dict).filter(
      (skill) =>
        skill_price_dict[skill] instanceof Object &&
        Object.entries(skill_price_dict[skill]).filter(
          (e) => e[1] > juel_dict[e[0]],
        ).length === 0,
    );

    if (!skill_list.length) {
      skill_list.push(
        '甜言蜜语',
        '接吻技巧',
        '口交技巧',
        '口腔掌握',
        '口腔耐性',
        '乳交技巧',
        '胸部掌握',
        '胸部耐性',
        '手交技巧',
        '足交技巧',
        '身体技巧',
        '身体掌握',
        '身体耐性',
        '阴茎掌握',
        '外阴掌握',
        '阴道掌握',
        '肛交技巧',
        '肛门掌握',
        '肛门耐性',
        '施虐技巧',
        '受虐掌握',
        '受虐耐性',
      );
      if (sex) {
        skill_list.push('插入技巧', '阴茎耐性');
      }
      if (!sex) {
        skill_list.push('外阴耐性');
      }
      if (sex - 1) {
        skill_list.push('性交技巧', '阴道耐性');
      }
      skill_list = skill_list.filter(
        (skill) =>
          skill_price_dict[skill] instanceof Object &&
          Object.entries(skill_price_dict[skill]).filter(
            (e) => e[1] > juel_dict[e[0]],
          ).length === 0,
      );
    }
    const updated_skill = get_random_entry(skill_list);
    if (updated_skill) {
      era.logger.debug(`角色 ${chara_id} 的 ${updated_skill} +1`);
      Object.entries(skill_price_dict[updated_skill]).forEach((e) =>
        era.add(`juel:${chara_id}:${e[0]}`, -e[1]),
      );
      const level = era.add(`abl:${chara_id}:${updated_skill}`, 1);
      if (level === 5) {
        delete skill_price_dict[updated_skill];
      } else {
        skill_price_dict[updated_skill] = get_skill_price(
          chara_id,
          updated_skill,
          level + 1,
          true,
        );
      }
    }
  } while (skill_list.length > 0);
};
