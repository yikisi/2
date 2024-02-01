const era = require('#/era-electron');

const sys_call_check = require('#/system/script/sys-call-check');
const call_ero_script = require('#/system/script/sys-call-ero-script');
const sys_call_mec = require('#/system/script/sys-call-mec');
const {
  sys_like_chara,
  sys_add_title,
  sys_punish_unfaithful,
} = require('#/system/sys-calc-chara-others');
const { init_chara } = require('#/system/sys-init-chara');

const add_juel_out_of_train = require('#/event/snippets/add-juel-out-of-train');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const check_stages = require('#/data/event/check-stages');
const { ero_hooks } = require('#/data/event/ero-hooks');
const { get_filtered_talents } = require('#/data/info-generator');
const { adaptability_names } = require('#/data/train-const');
const { buff_colors } = require('#/data/color-const');

/** @param {number} mother_id */
async function sys_have_baby(mother_id) {
  const father_id = era.get(`cflag:${mother_id}:孩子父亲`),
    child_id = era.add('flag:新生儿ID', 1) - 1;
  let src_chara_id;
  if (mother_id) {
    src_chara_id = era.get(`cflag:${mother_id}:模版角色`);
    src_chara_id = src_chara_id !== -1 ? src_chara_id : mother_id;
  } else {
    src_chara_id = era.get(`cflag:${father_id}:模版角色`);
    src_chara_id = src_chara_id !== -1 ? src_chara_id : father_id;
  }

  init_chara(child_id, src_chara_id);
  /**
   * 随机赋予3项性格特质
   * @type {number[]}
   */
  const chara_talents = [
    ...new Array(18).fill(0).map((_, i) => i + 1070),
    1090,
  ];
  chara_talents.forEach((talent_id) =>
    era.set(`talent:${child_id}:${talent_id}`, 0),
  );
  let mother_counts = get_random_value(0, 1),
    father_counts = get_random_value(0, 1),
    tmp_list = [];
  mother_counts &&
    (tmp_list = gacha(
      chara_talents
        .map((talent_id) => {
          return {
            id: talent_id,
            val: era.get(`talent:${mother_id}:${talent_id}`),
          };
        })
        .filter((talent) => talent.val),
      mother_counts,
    ));
  (mother_counts = tmp_list.length) &&
    tmp_list.forEach((talent) =>
      era.set(`talent:${child_id}:${talent.id}`, talent.val),
    );
  father_counts &&
    (tmp_list = gacha(
      chara_talents
        .map((talent_id) => {
          return {
            id: talent_id,
            val: era.get(`talent:${father_id}:${talent_id}`),
          };
        })
        .filter((talent) => talent.val),
      father_counts,
    ));
  (father_counts = tmp_list.length) &&
    tmp_list.forEach((talent) =>
      era.set(`talent:${child_id}:${talent.id}`, talent.val),
    );
  gacha(
    chara_talents.filter(
      (talent_id) => !era.get(`talent:${child_id}:${talent_id}`),
    ),
    3 - father_counts - mother_counts,
  ).forEach((talent_id) =>
    era.set(`talent:${child_id}:${talent_id}`, 2 * get_random_value(0, 1) - 1),
  );
  era.set(
    `talent:${child_id}:捉摸不透`,
    Number(era.get(`talent:${child_id}:捉摸不透`) > 0),
  );
  const sex = era.get(`cflag:${child_id}:性别`);

  // 随机赋予1项名器特质
  const part_talent_count = get_random_value(0, 1);
  const part_talents = get_filtered_talents(sex, 1010);
  part_talents.forEach((talent_id) =>
    era.set(`talent:${child_id}:${talent_id}`, 0),
  );
  part_talent_count &&
    gacha(part_talents, part_talent_count).forEach((talent_id) =>
      era.set(`talent:${child_id}:${talent_id}`, 1),
    );

  const xp_talent_count = get_random_value(0, 1),
    xp_extended_count = get_random_value(0, 1);
  const talent_arr = [
    // 淫乱系
    ...get_filtered_talents(sex, 1000),
    // xp系
    ...new Array(8).fill(0).map((_, i) => i + 1050),
  ];
  talent_arr.forEach((talent_id) =>
    era.set(`talent:${child_id}:${talent_id}`, 0),
  );
  // 随机继承一项xp特质
  xp_extended_count &&
    gacha(
      talent_arr.filter(
        (talent_id) =>
          era.get(`talent:${mother_id}:${talent_id}`) ||
          era.get(`talent:${father_id}:${talent_id}`),
      ),
      xp_extended_count,
    ).forEach((talent_id) =>
      era.set(
        `talent:${child_id}:${talent_id}`,
        Math.min(
          1,
          era.get(`talent:${mother_id}:${talent_id}`) ||
            era.get(`talent:${father_id}:${talent_id}`),
        ),
      ),
    );
  // 随机赋予一项xp特质
  xp_talent_count &&
    gacha(
      talent_arr.filter(
        (talent_id) => !era.get(`talent:${child_id}:${talent_id}`),
      ),
      xp_talent_count,
    ).forEach((talent_id) =>
      era.set(
        `talent:${child_id}:${talent_id}`,
        talent_id <= 1006 ? (Math.random() > 0.5) * 5 - 4 : 1,
      ),
    );

  const semen_talent_count = get_random_value(0, 1);
  /**
   * 随机获得一项中毒特质
   * @type {number[]}
   */
  const semen_talents = new Array(8)
    .fill(0)
    .map((_, i) => i + 1060)
    .filter((talent_id) => talent_id !== 1061 || talent_id !== 1065 || sex - 1);
  semen_talents.forEach((talent_id) =>
    era.set(`talent:${child_id}:${talent_id}`, 0),
  );
  semen_talent_count &&
    gacha(semen_talents, semen_talent_count).forEach((talent_id) =>
      era.set(`talent:${child_id}:${talent_id}`, 1),
    );

  if (sex - 1) {
    if (era.get(`talent:${mother_id}:泌乳`) > 1) {
      era.set(
        `talent:${child_id}:泌乳`,
        Math.random() < 0.25 * (era.get(`talent:${mother_id}:泌乳`) - 1)
          ? 3
          : 0,
      );
    }
    era.set(
      `talent:${child_id}:乳头类型`,
      get_random_value(0, era.get(`talent:${mother_id}:乳头类型`)),
    );
  }

  let random_val = Math.random();
  adaptability_names.forEach((e) => {
    let val = era.get(`cflag:${child_id}:${e}适性`);
    if (random_val < 0.1) {
      val += random_val < 0.05 ? 1 : -1;
      if (val > 7) {
        val = 7;
      } else if (val < 0) {
        val = 0;
      }
      era.set(`cflag:${child_id}:${e}适性`, val);
    }
  });

  // 身高三围的突变
  Math.random() < 0.1 &&
    era.add(
      `cflag:${child_id}:身高`,
      2 *
        (era.get(`cflag:${father_id}:身高`) >
          era.get(`cflag:${child_id}:身高`)) -
        1,
    );
  sex - 1 &&
    (random_val = Math.random()) < 0.1 &&
    era.add(`cflag:${child_id}:胸围`, random_val < 0.5 ? 1 : -1);
  (random_val = Math.random()) < 0.1 &&
    era.add(`cflag:${child_id}:腰围`, random_val < 0.5 ? 1 : -1);
  (random_val = Math.random()) < 0.1 &&
    era.add(`cflag:${child_id}:臀围`, random_val < 0.5 ? 1 : -1);

  era.set(`cflag:${child_id}:气性`, get_random_value(-3, 3));
  era.set(`cflag:${child_id}:成长阶段`, 0);

  const cur_month = era.get('flag:当前月'),
    cur_week = era.get('flag:当前周'),
    birth_day = 7 * cur_week + Math.floor(7 * Math.random()) - 6,
    date = `${era.get('flag:当前年')} 年 ${cur_month} 月 ${birth_day} 日`;

  const parent_key =
    (Math.min(father_id, mother_id) << 10) + Math.max(father_id, mother_id);
  era.getAddedCharacters().forEach((chara_id) => {
    const f_id = era.get(`cflag:${chara_id}:父方角色`),
      m_id = era.get(`cflag:${chara_id}:母方角色`);
    if (
      f_id >= 0 &&
      m_id >= 0 &&
      (Math.min(f_id, m_id) << 10) + Math.max(f_id, m_id) === parent_key
    ) {
      era.set(`relation:${child_id}:${chara_id}`, 200);
      era.set(
        `callname:${child_id}:${chara_id}`,
        era.get(`cflag:${chara_id}:性别`) - 1 ? '姐姐' : '哥哥',
      );
      era.set(`relation:${chara_id}:${child_id}`, 200);
      era.set(
        `callname:${chara_id}:${child_id}`,
        era.get(`cflag:${child_id}:性别`) - 1 ? '妹妹' : '弟弟',
      );
    }
  });
  era.set(`cflag:${child_id}:父方角色`, father_id);
  era.set(`cflag:${child_id}:母方角色`, mother_id);
  era.set(`cflag:${child_id}:出生月份`, cur_month);
  era.set(`cflag:${child_id}:出生日期`, birth_day);
  era.set(`cflag:${child_id}:育成回合计时`, -200);
  // 和玩家相关的新生儿自动进队
  era.set(`cflag:${child_id}:招募状态`, Number(!(father_id && mother_id)));
  // 无关的会在招募池子里
  era.set(`cflag:${child_id}:随机招募`, Number(father_id && mother_id));

  era.set(
    `relation:${child_id}:${mother_id}`,
    era.set(`relation:${child_id}:${father_id}`, 400),
  );
  era.set(
    `relation:${mother_id}:${child_id}`,
    era.set(`relation:${father_id}:${child_id}`, 400),
  );
  era.set(`callname:${child_id}:${father_id}`, '爸爸');
  era.set(`callname:${child_id}:${mother_id}`, '妈妈');
  era.set(
    `callname:${father_id}:${child_id}`,
    era.set(
      `callname:${mother_id}:${child_id}`,
      era.get(`cflag:${child_id}:性别`) - 1 ? '女儿' : '儿子',
    ),
  );
  era.set(
    `love:${child_id}`,
    era.get('flag:后代爱慕限制') ? era.get('flag:初始爱慕') : 0,
  );
  era.set(`cstr:${child_id}:出生经历`, `出生于 ${date}`);
  const father_check = era.add(`exp:${father_id}:孩子数量`, 1),
    mother_check = era.add(`exp:${mother_id}:生产次数`, 1);
  era.set(`cflag:${mother_id}:孩子父亲`, -1);
  if (father_check >= 8) {
    sys_add_title(father_id, { c: buff_colors[2], n: '大种马' }) &&
      (await era.waitAnyKey());
  }
  if (mother_check >= 8) {
    sys_add_title(mother_id, { c: buff_colors[2], n: '英雄母亲' }) &&
      (await era.waitAnyKey());
  }

  sys_call_check(child_id, check_stages.birth);
  era.print([
    get_chara_talk(mother_id).get_colored_name(),
    ' 生下了一个依稀有着 ',
    get_chara_talk(father_id).get_colored_name(),
    ' 外貌的健康的孩子！',
  ]);
  await call_ero_script(
    // 如果是玩家生孩子，调用角色的口上
    mother_id || father_id,
    ero_hooks.have_baby,
    { child_id },
  );

  sys_call_mec(child_id, check_stages.mec_callname_customize);
  const child = get_chara_talk(child_id),
    child_sex = child.sex_code === 1 ? '长子' : '长女';
  if (!era.get(`cstr:${father_id}:长子女经历`)) {
    era.set(`cstr:${father_id}:长子女经历`, [
      `${child_sex} `,
      child.get_colored_name(),
      ` 出生于 ${date}`,
    ]);
  }
  if (!era.get(`cstr:${mother_id}:长子女经历`)) {
    era.set(`cstr:${mother_id}:长子女经历`, [
      `在 ${date} 生下了 ${child_sex} `,
      child.get_colored_name(),
    ]);
  }

  era.set(`cflag:${child_id}:意外之子`, era.get(`cflag:${mother_id}:意外怀孕`));
  era.set(`cflag:${mother_id}:意外怀孕`, 0);

  if (!father_id && era.get(`love:${mother_id}`) < 90) {
    if (era.get(`mark:${mother_id}:同心`) >= 2) {
      sys_like_chara(mother_id, 0, 50);
      await add_juel_out_of_train(mother_id, '顺从', 200);
    } else {
      await add_juel_out_of_train(mother_id, '顺从', 50);
    }
  } else if (!father_id || !mother_id) {
    sys_like_chara(mother_id || father_id, 0, 100);
    await add_juel_out_of_train(mother_id || father_id, '顺从', 300);
  }
  await sys_punish_unfaithful(
    mother_id || father_id,
    era.get(`love:${mother_id || father_id}`),
  );
}

module.exports = sys_have_baby;
