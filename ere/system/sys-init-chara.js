const era = require('#/era-electron');

const sys_change_hair = require('#/system/chara/sys-change-hair');
const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');
const sys_call_mec = require('#/system/script/sys-call-mec');
const { sys_fix_chara_base } = require('#/system/sys-calc-base-cflag');

const script_dict = require('#/event/script-dict.json');

const { get_random_value } = require('#/utils/value-utils');

const { buff_colors } = require('#/data/color-const');
const { pleasure_list, part_names } = require('#/data/ero/part-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const check_stages = require('#/data/event/check-stages');
const {
  get_breast_cup,
  get_talent_bust_size,
} = require('#/data/info-generator');
const { attr_names } = require('#/data/train-const');

/**
 * 重置角色状态
 * 只重置属性和技能点数，不重置性能力和性经历
 *
 * @param chara_id
 */
function reset_chara(chara_id) {
  Object.values(attr_names).forEach((v) => {
    era.set(`base:${chara_id}:${v}`, era.get(`cflag:${chara_id}:初始${v}`));
    era.set(`abl:${chara_id}:${v}训练等级`, 1);
    era.set(`exp:${chara_id}:${v}训练经验`, 0);
  });
  era.set(`exp:${chara_id}:技能点数`, 0);

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

  era.set(`cflag:${chara_id}:育成用变量`, {});
  era.set(`cflag:${chara_id}:育成成绩`, {});
}

module.exports = {
  init_chara(chara_id, src_chara_id) {
    const current = new Date().getTime();
    if (era.addCharacter(src_chara_id ? [chara_id, src_chara_id] : chara_id)) {
      if (src_chara_id) {
        era.set(`cflag:${chara_id}:模版角色`, src_chara_id);
        era.set(`cflag:${chara_id}:种族`, 1);
      } else {
        era.set(`cflag:${chara_id}:模版角色`, -1);
      }
      const sex = era.get('flag:角色性别');
      era.set(`cflag:${chara_id}:性别`, sex);
      era.set(`cflag:${chara_id}:育成回合计时`, -201);
      switch (sex) {
        case 0:
          era.set(`cflag:${chara_id}:阴茎尺寸`, 0);
          era.set(`cflag:${chara_id}:阴道尺寸`, 1);
          break;
        case 1:
          era.set(`cflag:${chara_id}:下胸围`, 200);
          era.set(`cflag:${chara_id}:阴茎尺寸`, get_random_value(1, 4));
          era.set(`cflag:${chara_id}:阴道尺寸`, 0);
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
      era.set(`cflag:${chara_id}:孩子父亲`, -1);

      const auto_talent = chara_id ? era.get('flag:自带特性') : 0;
      switch (auto_talent) {
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
          break;
        default:
          break;
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

      era.set(`cstr:${chara_id}:称号`, []);
      era.set(`cstr:${chara_id}:决胜服`, -1);
      if (
        era.get(`abl:${chara_id}:粤语`) === 5 &&
        era.get(`abl:${chara_id}:英语`) === 5 &&
        era.get(`abl:${chara_id}:法语`) === 5
      ) {
        era
          .get(`cstr:${chara_id}:称号`)
          .push({ n: 'Hello world!', c: buff_colors[1] });
      }

      try {
        const script_name =
          chara_id >= era.get('flag:新生儿初始ID')
            ? era.get(`callname:${chara_id}:-2`)
            : chara_id;
        require(`#/event/init/init-${
          script_dict[script_name] || script_name
        }`)();
      } catch (_) {
        // eslint-disable-next-line no-empty
      }
      sys_call_mec(chara_id, check_stages.mec_callname_customize);
      if (
        era.get(`callname:${chara_id}:${chara_id}`) ===
        era.get(`callname:${chara_id}:-2`)
      ) {
        era.set(`callname:${chara_id}:${chara_id}`, '我');
      }
      era.set(`relation:${chara_id}:0`, era.get('flag:马娘初始好感'));
      era.set(`love:${chara_id}`, era.get('flag:马娘初始爱慕'));
      reset_chara(chara_id);
      era.set(`base:${chara_id}:体力`, era.get(`maxbase:${chara_id}:体力`));
      era.set(`base:${chara_id}:精力`, era.get(`maxbase:${chara_id}:精力`));

      let temp;
      switch (era.get('flag:彩蛋机制')) {
        case 179:
          temp = era.get(`cflag:${chara_id}:身高`);
          temp = [135 + Math.floor(((temp - 135) * 10) / 45), temp];
          era.set(
            `cflag:${chara_id}:胸围`,
            Math.floor((era.get(`cflag:${chara_id}:胸围`) * temp[0]) / temp[1]),
          );
          era.set(
            `cflag:${chara_id}:下胸围`,
            Math.floor(
              (era.get(`cflag:${chara_id}:下胸围`) * temp[0]) / temp[1],
            ),
          );
          era.set(
            `cflag:${chara_id}:腰围`,
            Math.floor((era.get(`cflag:${chara_id}:腰围`) * temp[0]) / temp[1]),
          );
          era.set(
            `cflag:${chara_id}:臀围`,
            Math.floor((era.get(`cflag:${chara_id}:臀围`) * temp[0]) / temp[1]),
          );
          era.set(`cflag:${chara_id}:身高`, temp[0]);
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
      }

      sys_change_hair(chara_id);

      era.logger.debug(
        `${chara_id} 号角色 ${era.get(
          `callname:${chara_id}:-1`,
        )} 初始化完成 (${(new Date().getTime() - current).toLocaleString()}ms)`,
      );
    }
  },
  recruit_chara(chara_id) {
    era.get(`cflag:${chara_id}:种族`) &&
      era.set(
        `cflag:${chara_id}:育成回合计时`,
        Math.floor((era.get('flag:当前回合数') - 1) / 48) * 48 + 1,
      );
    era.set(`cflag:${chara_id}:自主训练`, 1);
    era.set(`cflag:${chara_id}:腋毛`, 0);
    const honor = era.get('flag:当前声望');
    // 先结算声望奖励
    let relation = honor > 500 ? Math.floor((honor - 500) / 12) : 0;
    if (relation > 125) {
      relation = 125;
    }
    era.add(
      `relation:${chara_id}:0`,
      relation + 300 * sys_personal_achievement.get(chara_id),
    );
    era.set(
      `love:${chara_id}`,
      era.get(`love:${chara_id}`) || era.get('flag:马娘初始爱慕'),
    );
  },
  reset_chara,
};
