const era = require('#/era-electron');

const sys_change_hair = require('#/system/chara/sys-change-hair');
const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');
const get_aim_function = require('#/system/script/get-aim-function');
const { sys_fix_chara_base } = require('#/system/sys-calc-base-cflag');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_random_value } = require('#/utils/value-utils');

const CharaAvailableGenes = require('#/data/chara-available-genes');
const CharaAvailableSkills = require('#/data/chara-available-skills');
const CharaGenes = require('#/data/chara-genes');
const CharaSkills = require('#/data/chara-skills');
const CharaTitles = require('#/data/chara-titles');
const { buff_colors } = require('#/data/color-const');
const { part_names, pleasure_list } = require('#/data/ero/part-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const { yes } = require('#/data/event/recruit-flags');
const YandereList = require('#/data/event/yandere-list');
const {
  get_breast_cup,
  get_talent_bust_size,
} = require('#/data/info-generator');
const RaceHistory = require('#/data/race/model/race-history');
const { chara_skill_dict } = require('#/data/race/skill/skill-const');
const { attr_names } = require('#/data/train-const');

/**
 * 重置角色状态
 * 只重置属性和技能点数，不重置性能力和性经历
 *
 * @param {number} chara_id
 */
function reset_chara(chara_id) {
  if (era.get(`cflag:${chara_id}:种族`)) {
    if (era.get(`cflag:${chara_id}:招募状态`) === yes) {
      if (
        era.get('flag:当前月') <= 3 &&
        (era.get(`cflag:${chara_id}:育成回合计时`) === 'x' ||
          era.get(`cflag:${chara_id}:成长阶段`) < 5)
      ) {
        era.set(
          `cflag:${chara_id}:育成回合计时`,
          (era.get('flag:当前回合数') - 1) % 48,
        );
        era.set(`cflag:${chara_id}:继承方1`, 0);
        era.set(`cflag:${chara_id}:继承方2`, 0);
        era.set(`cflag:${chara_id}:可再次育成`, 0);
      }
      era.set(`cflag:${chara_id}:腋毛`, 0);
      era.set(
        `juel:${chara_id}:粉`,
        era.set(`juel:${chara_id}:蓝`, era.set(`juel:${chara_id}:白`, 0)),
      );
    }
    attr_names.forEach((v) =>
      era.set(`base:${chara_id}:${v}`, era.get(`cflag:${chara_id}:初始${v}`)),
    );
    attr_names.forEach((v) => {
      era.set(`abl:${chara_id}:${v}训练等级`, 1);
      era.set(`exp:${chara_id}:${v}训练经验`, 0);
    });
    const src_chara = era.get(`cflag:${chara_id}:模版角色`),
      skill_set = chara_skill_dict[src_chara > 0 ? src_chara : chara_id] || [];
    era.set(`cflag:${chara_id}:殿堂`, 0);
    new CharaSkills(chara_id).clear().add(...skill_set.slice(0, 4));
    new CharaAvailableSkills(chara_id).clear().add(...skill_set.slice(4));
    era.set(`exp:${chara_id}:技能点数`, 120 + 680 * (skill_set.length === 0));
    era.set(`cflag:${chara_id}:育成用变量`, {});
    new RaceHistory(chara_id).reset();
    new CharaGenes(chara_id).clear();
    new CharaAvailableGenes(chara_id).clear();
  } else {
    attr_names.forEach((v) => {
      era.set(
        `base:${chara_id}:${v}`,
        era.set(`cflag:${chara_id}:${v}`, get_random_value(25, 75)),
      );
      era.set(`cflag:${chara_id}:${v}加成`, 0);
    });
    era.set(`skill:${chara_id}:习得技能`, []);
    era.set(`skill:${chara_id}:可习得技能`, []);
  }

  sys_fix_chara_base(chara_id);
  const stamina = era.get(`base:${chara_id}:体力`),
    max_stamina = era.get(`maxbase:${chara_id}:体力`),
    time = era.get(`base:${chara_id}:精力`),
    max_time = era.get(`maxbase:${chara_id}:精力`);
  if (stamina > max_stamina) {
    era.set(`base:${chara_id}:体力`, max_stamina);
  }
  if (time > max_time) {
    era.set(`base:${chara_id}:精力`, max_time);
  }

  try {
    get_aim_function('init', chara_id, {}).func(true);
  } catch (e) {
    if (e.message && !e.message.startsWith('unsupported')) {
      console.log(e.stack);
    }
  }
}

module.exports = {
  /**
   * @param {number} chara_id
   * @param {number} [src_chara_id]
   */
  init_chara(chara_id, src_chara_id) {
    const current = new Date().getTime();
    if (
      (era.get(`base:${chara_id}:速度`) === undefined || !chara_id) &&
      era.addCharacter(src_chara_id ? [chara_id, src_chara_id] : chara_id)
    ) {
      if (src_chara_id) {
        era.set(`cflag:${chara_id}:模版角色`, src_chara_id);
        era.set(`cflag:${chara_id}:种族`, 1);
        era.set(`maxbase:${chara_id}:速度`, 1200);
        era.set(`maxbase:${chara_id}:耐力`, 1200);
        era.set(`maxbase:${chara_id}:力量`, 1200);
      } else {
        era.set(`cflag:${chara_id}:模版角色`, -1);
      }
      const sex = get_custom_mec(chara_id).set_my_sex();
      era.set(`cflag:${chara_id}:育成回合计时`, 4800);
      let temp;
      switch (sex) {
        case 0:
          era.set(`cflag:${chara_id}:阴茎尺寸`, 0);
          era.set(`cflag:${chara_id}:阴道尺寸`, 1);
          break;
        case 1:
          era.set(`cflag:${chara_id}:下胸围`, 200);
          era.set(`cflag:${chara_id}:阴茎尺寸`, get_random_value(1, 4));
          era.set(`cflag:${chara_id}:阴道尺寸`, 0);
          temp = era.get(`cflag:${chara_id}:身高`);
          era.set(`cflag:${chara_id}:胸围`, Math.floor(temp * 0.48));
          era.set(`cflag:${chara_id}:腰围`, Math.floor(temp * 0.47));
          era.set(`cflag:${chara_id}:臀围`, Math.floor(temp * 0.51));
          break;
        case 10:
          era.set(`cflag:${chara_id}:阴茎尺寸`, get_random_value(1, 4));
          era.set(`cflag:${chara_id}:阴道尺寸`, 1);
          break;
      }
      era.set(`talent:${chara_id}:童贞`, 1);
      era.set(`talent:${chara_id}:处女`, 1);
      era.set(`cflag:${chara_id}:妊娠阶段`, 1 << pregnant_stage_enum.no);
      era.set(`base:${chara_id}:性欲`, 0);
      era.set(`base:${chara_id}:压力`, 0);
      era.set(`base:${chara_id}:体重偏差`, 0);
      era.set(`base:${chara_id}:药物残留`, 0);

      const auto_talent = chara_id ? era.get('flag:自带特性') : 0;
      switch (auto_talent) {
        case -4:
          era.set(`talent:${chara_id}:淫口`, -4);
          era.set(`talent:${chara_id}:淫乳`, -4);
          era.set(`talent:${chara_id}:淫身`, -4);
          era.set(`talent:${chara_id}:淫核`, -4);
          era.set(`talent:${chara_id}:淫壶`, -4);
          era.set(`talent:${chara_id}:淫臀`, -4);
          era.set(`talent:${chara_id}:早泄`, -4);
          era.set(`talent:${chara_id}:抖S`, 0);
          era.set(`talent:${chara_id}:喜欢责骂`, 0);
          era.set(`talent:${chara_id}:喜欢痛苦`, 0);
          break;
        case -1:
          era.set(`talent:${chara_id}:淫口`, 0);
          era.set(`talent:${chara_id}:淫乳`, 0);
          era.set(`talent:${chara_id}:淫身`, 0);
          era.set(`talent:${chara_id}:淫核`, 0);
          era.set(`talent:${chara_id}:淫壶`, 0);
          era.set(`talent:${chara_id}:淫臀`, 0);
          era.set(`talent:${chara_id}:早泄`, 0);
          era.set(`talent:${chara_id}:抖S`, 0);
          era.set(`talent:${chara_id}:喜欢责骂`, 0);
          era.set(`talent:${chara_id}:喜欢痛苦`, 0);
          break;
        case 1:
          era.set(`talent:${chara_id}:淫口`, 1);
          era.set(`talent:${chara_id}:淫乳`, 1);
          era.set(`talent:${chara_id}:淫身`, 1);
          era.set(`talent:${chara_id}:淫核`, 1);
          era.set(`talent:${chara_id}:淫壶`, 1);
          era.set(`talent:${chara_id}:淫臀`, 1);
          era.set(`talent:${chara_id}:早泄`, 1);
          era.set(`talent:${chara_id}:抖S`, 1);
          era.set(`talent:${chara_id}:喜欢责骂`, 1);
          era.set(`talent:${chara_id}:喜欢痛苦`, 1);
      }

      if (chara_id && era.get('flag:自带钝感')) {
        pleasure_list.forEach((part) => {
          era.set(`talent:${chara_id}:${part_names[part]}钝感`, 1);
        });
      }

      era.set(
        `talent:${chara_id}:乳房尺寸`,
        get_talent_bust_size(get_breast_cup(chara_id, true)),
      );

      era.set(`cstr:${chara_id}:决胜服`, -1);
      if (
        era.get(`abl:${chara_id}:粤语`) === 5 &&
        era.get(`abl:${chara_id}:英语`) === 5 &&
        era.get(`abl:${chara_id}:法语`) === 5
      ) {
        new CharaTitles(chara_id).push({
          n: 'Hello world!',
          c: buff_colors[1],
        });
      }
      reset_chara(chara_id);

      try {
        get_aim_function('init', chara_id, {}).func();
      } catch (e) {
        if (e.message && !e.message.startsWith('unsupported')) {
          console.log(e.stack);
        }
      }
      get_custom_mec(chara_id).set_callname();
      get_custom_mec(chara_id).set_my_name();
      get_custom_mec(chara_id).init_love();
      era.set(`base:${chara_id}:体力`, era.get(`maxbase:${chara_id}:体力`));
      era.set(`base:${chara_id}:精力`, era.get(`maxbase:${chara_id}:精力`));

      if (chara_id > 0) {
        if (era.get(`relation:${chara_id}:0`) === undefined) {
          era.set(`relation:${chara_id}:0`, era.get('flag:马娘初始好感'));
        } else {
          era.add(`relation:${chara_id}:0`, era.get('flag:马娘初始好感') - 75);
        }

        if (era.get(`cflag:${chara_id}:种族`)) {
          switch (era.get('flag:马娘身高')) {
            case 0:
              temp = era.get(`cflag:${chara_id}:身高`);
              temp = [
                135 + Math.floor(((temp - 135) * (150 - 135)) / (180 - 135)),
                temp,
              ];
              temp[2] =
                era.get(`cflag:${chara_id}:胸围`) -
                era.get(`cflag:${chara_id}:下胸围`);
              era.set(
                `cflag:${chara_id}:下胸围`,
                Math.floor(
                  (era.get(`cflag:${chara_id}:下胸围`) * temp[0]) / temp[1],
                ),
              );
              era.set(
                `cflag:${chara_id}:胸围`,
                era.get(`cflag:${chara_id}:胸围`) + temp[2],
              );
              era.set(
                `cflag:${chara_id}:腰围`,
                Math.floor(
                  (era.get(`cflag:${chara_id}:腰围`) * temp[0]) / temp[1],
                ),
              );
              era.set(
                `cflag:${chara_id}:臀围`,
                Math.floor(
                  (era.get(`cflag:${chara_id}:臀围`) * temp[0]) / temp[1],
                ),
              );
              era.set(`cflag:${chara_id}:身高`, temp[0]);
              break;
            case 2:
              temp = era.get(`cflag:${chara_id}:身高`);
              temp = [
                175 + Math.floor(((temp - 135) * (224 - 175)) / (180 - 135)),
                temp,
              ];
              era.set(
                `cflag:${chara_id}:胸围`,
                Math.floor(
                  (era.get(`cflag:${chara_id}:胸围`) * temp[0]) / temp[1],
                ),
              );
              era.set(
                `cflag:${chara_id}:下胸围`,
                Math.floor(
                  (era.get(`cflag:${chara_id}:下胸围`) * temp[0]) / temp[1],
                ),
              );
              era.set(
                `cflag:${chara_id}:腰围`,
                Math.floor(
                  (era.get(`cflag:${chara_id}:腰围`) * temp[0]) / temp[1],
                ),
              );
              era.set(
                `cflag:${chara_id}:臀围`,
                Math.floor(
                  (era.get(`cflag:${chara_id}:臀围`) * temp[0]) / temp[1],
                ),
              );
              era.set(`cflag:${chara_id}:身高`, temp[0]);
          }

          switch (era.get('flag:彩蛋机制')) {
            case 3:
              if (auto_talent !== 1) {
                era.set(
                  `talent:${chara_id}:神之足`,
                  era.set(
                    `talent:${chara_id}:淫身`,
                    era.set(`talent:${chara_id}:淫臀`, 1),
                  ),
                );
              }
              break;
            case 179:
            case 621:
              if (
                era.get(`cflag:${chara_id}:胸围`) -
                  era.get(`cflag:${chara_id}:下胸围`) <
                17.5
              ) {
                era.set(
                  `cflag:${chara_id}:胸围`,
                  era.get(`cflag:${chara_id}:下胸围`) +
                    18 +
                    (era.get(`talent:${chara_id}:乳头类型`) === 2),
                );
              }
              era.set(`talent:${chara_id}:病娇`, 1);
          }
        }
        const my_src_chara = era.get('cflag:0:模版角色');
        if (era.get(`relation:${chara_id}`)[my_src_chara]) {
          era.set(
            `relation:${chara_id}:0`,
            era.get(`relation:${chara_id}:${my_src_chara}`),
          );
        }
        if (era.get(`callname:${my_src_chara}`)[chara_id]) {
          era.set(
            `callname:0:${chara_id}`,
            era.get(`callname:${my_src_chara}:${chara_id}`),
          );
        }
        era.set(
          `cflag:${chara_id}:可再次育成`,
          Number(
            era.get(`cflag:${chara_id}:可再次育成`) > 0 && my_src_chara <= 0,
          ),
        );
      } else {
        era.set(`talent:${chara_id}:病娇`, 0);
      }

      sys_change_hair(chara_id);

      era.logger.debug(
        `${chara_id} 号角色 ${era.get(
          `callname:${chara_id}:-1`,
        )} 初始化完成 (${(new Date().getTime() - current).toLocaleString()}ms)`,
      );
    }
  },
  /** @param {number} chara_id */
  recruit_chara(chara_id) {
    reset_chara(chara_id);
    era.set(`cflag:${chara_id}:自主训练`, 1);
    const honor = era.get('flag:当前声望');
    // 先结算声望奖励
    let relation = honor > 500 ? Math.floor((honor - 500) / 12) : 0;
    if (relation > 125) {
      relation = 125;
    }
    relation +=
      era.get(`relation:${chara_id}:0`) +
      300 * sys_personal_achievement.get(chara_id);
    era.set(`relation:${chara_id}:0`, Math.min(relation, 600));
    if (
      era.get(`cflag:${chara_id}:种族`) &&
      era.get(`talent:${chara_id}:病娇`)
    ) {
      new YandereList().push(chara_id, true);
    }
  },
  reset_chara,
};
