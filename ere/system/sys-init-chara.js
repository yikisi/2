const era = require('#/era-electron');

const sys_change_hair = require('#/system/chara/sys-change-hair');
const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');
const { sys_fix_chara_base } = require('#/system/sys-calc-base-cflag');

const CustomizedInit = require('#/event/init/customized-init');
const { get_custom_init } = require('#/event/init/init-factory');
const { get_custom_mec } = require('#/event/mec/mec-factory');

const CharaTalk = require('#/utils/chara-talk');
const { get_random_value } = require('#/utils/value-utils');

const CharaAvailableGenes = require('#/data/chara-available-genes');
const CharaAvailableSkills = require('#/data/chara-available-skills');
const CharaGenes = require('#/data/chara-genes');
const CharaSkills = require('#/data/chara-skills');
const CharaTitles = require('#/data/chara-titles');
const { buff_colors } = require('#/data/color-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const recruit_flags = require('#/data/event/recruit-flags');
const yandere_list = require('#/data/event/yandere-list');
const {
  get_breast_cup,
  get_talent_bust_size,
} = require('#/data/info-generator');
const RaceHistory = require('#/data/race/model/race-history');
const { chara_skill_dict } = require('#/data/race/skill/skill-const');

/**
 * @param {number} cid
 * @param {number} [src=0]
 */
function init_chara(cid, src = 0) {
  const current = new Date().getTime();
  if (
    (era.getAddedCharacters().includes(cid) && cid > 0) ||
    !era.addCharacter(src > 0 ? [cid, src] : cid)
  ) {
    return;
  }
  if (src === 0) {
    era.set(`cstr:${cid}:头像T`, era.get(`cstr:${cid}:头像`));
  }
  if (src > 0) {
    era.set(`cflag:${cid}:模版角色`, src);
    era.set(`cflag:${cid}:种族`, 1);
    era.set(`maxbase:${cid}:速度`, 1200);
    era.set(`maxbase:${cid}:耐力`, 1200);
    era.set(`maxbase:${cid}:力量`, 1200);
  } else {
    era.set(`cflag:${cid}:模版角色`, -1);
  }
  const sex = get_custom_mec(cid).set_my_sex();
  era.set(`cflag:${cid}:育成回合计时`, 4800);
  let temp;
  switch (sex) {
    case 0:
      era.set(`cflag:${cid}:阴茎尺寸`, 0);
      era.set(`cflag:${cid}:阴道尺寸`, 1);
      break;
    case 1:
      era.set(`cflag:${cid}:下胸围`, 200);
      era.set(`cflag:${cid}:阴茎尺寸`, get_random_value(1, 4));
      era.set(`cflag:${cid}:阴道尺寸`, 0);
      temp = era.get(`cflag:${cid}:身高`);
      era.set(`cflag:${cid}:胸围`, Math.floor(temp * 0.48));
      era.set(`cflag:${cid}:腰围`, Math.floor(temp * 0.47));
      era.set(`cflag:${cid}:臀围`, Math.floor(temp * 0.51));
      break;
    case 10:
      era.set(`cflag:${cid}:阴茎尺寸`, get_random_value(1, 4));
      era.set(`cflag:${cid}:阴道尺寸`, 1);
  }
  era.set(`talent:${cid}:童贞`, 1);
  era.set(`talent:${cid}:处女`, 1);
  era.set(`talent:${cid}:调教度`, 1);
  era.set(`cflag:${cid}:妊娠阶段`, 1 << pregnant_stage_enum.no);
  era.set(`base:${cid}:性欲`, 0);
  era.set(`base:${cid}:压力`, 0);
  era.set(`base:${cid}:体重偏差`, 0);
  era.set(`base:${cid}:药物残留`, 0);
  if (cid > 0) {
    switch (era.get('flag:自带特性')) {
      case -4:
        era.set(`talent:${cid}:淫口`, -4);
        era.set(`talent:${cid}:淫乳`, -4);
        era.set(`talent:${cid}:淫身`, -4);
        era.set(`talent:${cid}:淫核`, -4);
        era.set(`talent:${cid}:淫壶`, -4);
        era.set(`talent:${cid}:淫臀`, -4);
        era.set(`talent:${cid}:早泄`, -4);
        era.set(`talent:${cid}:抖S`, 0);
        era.set(`talent:${cid}:喜欢责骂`, 0);
        era.set(`talent:${cid}:喜欢痛苦`, 0);
        era.set(`talent:${cid}:调教度`, 0);
        break;
      case -1:
        era.set(`talent:${cid}:淫口`, 0);
        era.set(`talent:${cid}:淫乳`, 0);
        era.set(`talent:${cid}:淫身`, 0);
        era.set(`talent:${cid}:淫核`, 0);
        era.set(`talent:${cid}:淫壶`, 0);
        era.set(`talent:${cid}:淫臀`, 0);
        era.set(`talent:${cid}:早泄`, 0);
        era.set(`talent:${cid}:抖S`, 0);
        era.set(`talent:${cid}:喜欢责骂`, 0);
        era.set(`talent:${cid}:喜欢痛苦`, 0);
        break;
      case 1:
        era.set(`talent:${cid}:淫口`, 1);
        era.set(`talent:${cid}:淫乳`, 1);
        era.set(`talent:${cid}:淫身`, 1);
        era.set(`talent:${cid}:淫核`, 1);
        era.set(`talent:${cid}:淫壶`, 1);
        era.set(`talent:${cid}:淫臀`, 1);
        era.set(`talent:${cid}:早泄`, 1);
        era.set(`talent:${cid}:抖S`, 1);
        era.set(`talent:${cid}:喜欢责骂`, 1);
        era.set(`talent:${cid}:喜欢痛苦`, 1);
        era.set(`talent:${cid}:调教度`, 3);
    }
  }
  era.set(
    `talent:${cid}:乳房尺寸`,
    get_talent_bust_size(get_breast_cup(cid, true)),
  );
  era.set(`cstr:${cid}:决胜服`, -1);
  if (
    src === 0 &&
    era.get(`abl:${cid}:粤语`) === 5 &&
    era.get(`abl:${cid}:英语`) === 5 &&
    era.get(`abl:${cid}:法语`) === 5
  ) {
    CharaTitles.get(cid).push({
      n: 'l_hello_world',
      c: buff_colors[1],
    });
  }
  reset_chara(cid, true);
  get_custom_mec(cid).set_callname();
  get_custom_mec(cid).set_my_name();
  get_custom_mec(cid).init_love();
  era.set(`base:${cid}:0`, era.get(`maxbase:${cid}:0`));
  era.set(`base:${cid}:1`, era.get(`maxbase:${cid}:1`));
  if (cid > 0) {
    if (era.get(`relation:${cid}:0`) === undefined) {
      era.set(`relation:${cid}:0`, era.get('flag:马娘初始好感'));
    } else {
      era.add(`relation:${cid}:0`, era.get('flag:马娘初始好感') - 75);
    }
    if (era.get(`cflag:${cid}:种族`) > 0) {
      switch (era.get('flag:马娘身高')) {
        case 0:
          temp = era.get(`cflag:${cid}:身高`);
          temp = [
            135 + Math.floor(((temp - 135) * (150 - 135)) / (180 - 135)),
            temp,
          ];
          temp[2] =
            era.get(`cflag:${cid}:胸围`) - era.get(`cflag:${cid}:下胸围`);
          era.set(
            `cflag:${cid}:下胸围`,
            Math.floor((era.get(`cflag:${cid}:下胸围`) * temp[0]) / temp[1]),
          );
          era.set(
            `cflag:${cid}:胸围`,
            era.get(`cflag:${cid}:下胸围`) + temp[2],
          );
          era.set(
            `cflag:${cid}:腰围`,
            Math.floor((era.get(`cflag:${cid}:腰围`) * temp[0]) / temp[1]),
          );
          era.set(
            `cflag:${cid}:臀围`,
            Math.floor((era.get(`cflag:${cid}:臀围`) * temp[0]) / temp[1]),
          );
          era.set(`cflag:${cid}:身高`, temp[0]);
          break;
        case 2:
          temp = era.get(`cflag:${cid}:身高`);
          temp = [
            175 + Math.floor(((temp - 135) * (224 - 175)) / (180 - 135)),
            temp,
          ];
          era.set(
            `cflag:${cid}:下胸围`,
            Math.floor((era.get(`cflag:${cid}:下胸围`) * temp[0]) / temp[1]),
          );
          era.set(
            `cflag:${cid}:胸围`,
            Math.max(
              Math.floor((era.get(`cflag:${cid}:胸围`) * temp[0]) / temp[1]),
              era.get(`cflag:${cid}:下胸围`) +
                1 +
                (era.get(`talent:${cid}:乳头类型`) === 2),
            ),
          );
          era.set(
            `cflag:${cid}:腰围`,
            Math.floor((era.get(`cflag:${cid}:腰围`) * temp[0]) / temp[1]),
          );
          era.set(
            `cflag:${cid}:臀围`,
            Math.floor((era.get(`cflag:${cid}:臀围`) * temp[0]) / temp[1]),
          );
          era.set(`cflag:${cid}:身高`, temp[0]);
      }

      switch (era.get('flag:彩蛋机制')) {
        case 3:
          if (era.get('flag:自带特性') !== 1) {
            era.set(
              `talent:${cid}:神之足`,
              era.set(`talent:${cid}:淫身`, era.set(`talent:${cid}:淫臀`, 1)),
            );
          }
          break;
        case 179:
        case 621:
          if (
            era.get(`cflag:${cid}:胸围`) - era.get(`cflag:${cid}:下胸围`) <
            17.5
          ) {
            era.set(
              `cflag:${cid}:胸围`,
              era.get(`cflag:${cid}:下胸围`) +
                18 +
                (era.get(`talent:${cid}:乳头类型`) === 2),
            );
          }
          era.set(`talent:${cid}:病娇`, 1);
      }
    }
    const my_src_chara = era.get('cflag:0:模版角色');
    if ((temp = era.get(`relation:${cid}`)[my_src_chara]) !== undefined) {
      era.set(`relation:${cid}:0`, temp);
    }
    if ((temp = era.get(`callname:${my_src_chara}`)[cid]) !== undefined) {
      era.set(`callname:0:${cid}`, temp);
    }
  } else {
    era.set(`talent:${cid}:病娇`, 0);
  }
  sys_change_hair(cid);
  era.logger.debug(
    `${cid} 号角色 ${era.get(
      `callname:${cid}:-1`,
    )} 初始化完成 (${(new Date().getTime() - current).toLocaleString()}ms)`,
  );
}

CharaTalk.init_chara = init_chara;
CustomizedInit.init_chara = init_chara;

/**
 * 重置角色状态
 * 只重置属性和技能点数，不重置性能力和性经历
 * @param {number} cid
 * @param {boolean} [from_init]
 */
function reset_chara(cid, from_init) {
  if (era.get(`cflag:${cid}:种族`) > 0) {
    if (era.get(`cflag:${cid}:招募状态`) === recruit_flags.yes) {
      if (
        era.get('flag:当前月') <= 3 &&
        (era.get(`cflag:${cid}:育成回合计时`) === 'x' ||
          era.get(`cflag:${cid}:成长阶段`) < 5)
      ) {
        era.set(
          `cflag:${cid}:育成回合计时`,
          (era.get('flag:当前回合数') - 1) % 48,
        );
        era.set(`cflag:${cid}:继承方1`, 0);
        era.set(`cflag:${cid}:继承方2`, 0);
        era.set(`cflag:${cid}:可再次育成`, 0);
        const teach_chara = era.get(`cflag:${cid}:照看`);
        if (teach_chara > 0) {
          era.set(`cflag:${teach_chara}:照看`, 0);
          era.set(`cflag:${cid}:照看`, 0);
        }
      }
      era.set(`cflag:${cid}:腋毛`, 0);
      era.set(
        `juel:${cid}:粉`,
        era.set(`juel:${cid}:蓝`, era.set(`juel:${cid}:白`, 0)),
      );
    } else if (!from_init) {
      era.set(`cflag:${cid}:育成回合计时`, 4800);
    }
    new Array(5).fill(0).forEach((_, i) => {
      // BASENAME:5 - 9 = 速度 - 智力
      // CFLAGNAME:20-24 = 初始速度 - 初始智力
      era.set(`base:${cid}:${5 + i}`, era.get(`cflag:${cid}:${20 + i}`));
      // ABLNAME:0 - 4 = 速度训练等级 - 智力训练等级
      era.set(`abl:${cid}:${i}`, 1);
      // EXPNAME:5 - 9 = 速度训练经验 - 智力训练经验
      era.set(`exp:${cid}:${5 + i}`, 0);
    });
    const src_id = era.get(`cflag:${cid}:模版角色`);
    const skill_set = chara_skill_dict[src_id > 0 ? src_id : cid] || [];
    era.set(`cflag:${cid}:殿堂`, 0);
    CharaSkills.get(cid)
      .clear()
      .add(...skill_set.slice(0, 4));
    CharaAvailableSkills.get(cid)
      .clear()
      .add(...skill_set.slice(4));
    era.set(`exp:${cid}:技能点数`, 120 + 680 * (skill_set.length === 0));
    era.set(`cflag:${cid}:育成用变量`, {});
    RaceHistory.get(cid).reset();
    new CharaGenes(cid).clear();
    new CharaAvailableGenes(cid).clear();
  } else {
    new Array(5).fill(0).forEach((_, i) => {
      era.set(
        `base:${cid}:${5 + i}`,
        era.set(`cflag:${cid}:${20 + i}`, get_random_value(25, 75)),
      );
      era.set(`cflag:${cid}:${25 + i}`, 0);
    });
    era.set(`skill:${cid}:0`, []);
    era.set(`skill:${cid}:1`, []);
  }

  sys_fix_chara_base(cid);
  const stamina = era.get(`base:${cid}:体力`);
  const max_stamina = era.get(`maxbase:${cid}:体力`);
  const time = era.get(`base:${cid}:精力`);
  const max_time = era.get(`maxbase:${cid}:精力`);
  if (stamina > max_stamina) {
    era.set(`base:${cid}:体力`, max_stamina);
  }
  if (time > max_time) {
    era.set(`base:${cid}:精力`, max_time);
  }

  get_custom_init(cid)(!from_init);
}

module.exports = {
  init_chara,
  /** @param {number} cid */
  recruit_chara(cid) {
    reset_chara(cid);
    era.set(`cflag:${cid}:自主训练`, 1);
    const honor = era.get('flag:当前声望');
    // 先结算声望奖励
    let relation = honor > 500 ? Math.floor((honor - 500) / 12) : 0;
    if (relation > 125) {
      relation = 125;
    }
    relation +=
      era.get(`relation:${cid}:0`) +
      (sys_personal_achievement.get(cid) > 0) * 300;
    era.set(`relation:${cid}:0`, Math.min(relation, 600));
    if (era.get(`cflag:${cid}:种族`) > 0 && era.get(`talent:${cid}:病娇`) > 0) {
      yandere_list.push(cid);
    }
  },
  reset_chara,
};
