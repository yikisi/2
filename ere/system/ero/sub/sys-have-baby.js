const era = require('#/era-electron');

const sys_add_titles = require('#/system/chara/sys-add-titles');
const global_achievement = require('#/system/global/sys-calc-achievement');
const {
  sys_like_chara,
  sys_punish_unfaithful,
} = require('#/system/sys-calc-chara-others');
const { init_chara } = require('#/system/sys-init-chara');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_custom_check } = require('#/event/check/check-factory');
const { get_custom_ero } = require('#/event/ero/ero-factory');
const { get_custom_mec } = require('#/event/mec/mec-factory');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');

const get_display_name = require('#/utils/calc-display-name');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');
const get_child_name = require('#/utils/naming');
const {
  get_abbr_number,
  get_display_width,
  get_random_value,
} = require('#/utils/value-utils');

const { buff_colors } = require('#/data/color-const');
const { get_date_obj } = require('#/data/date-indicator');
const { unexpected_pregnant_enum } = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const { get_filtered_talents } = require('#/data/info-generator');
const { gene_type_colors } = require('#/data/race/model/uma-gene');

const di18n = require('#/i18n/extended-def');
const { __, i18n, lans } = require('#/i18n/selector');

function check_duplicate(name) {
  const a = lans().find((l) =>
    Object.values(i18n(l).name).some((n) => n === name),
  );
  if (a !== void 0) {
    return a;
  }
  return (
    era
      .getAddedCharacters()
      .some((cid) => era.get(`callname:${cid}:-1`) === name) ||
    era.getAllCharacters().some((cid) => era.get(`static:${cid}:name`) === name)
  );
}

/**
 * 随机赋予3项性格特质
 * @type {number[]}
 */
const inherited_talents = [...new Array(18).fill(0).map((_, i) => i), 20];

async function rename() {
  let w_length = false;
  let w_duplicate = false;
  let flag = true;
  let ret = '';
  while (flag) {
    if (w_length) {
      era.print(di18n.get_too_long(8));
    }
    if (w_duplicate) {
      era.print(di18n.name.check_duplicate(ret, w_duplicate));
    }
    ret = (await era.input()).toString();
    w_length = get_display_width(ret) > 8;
    w_duplicate = check_duplicate(ret);
    if (!w_length && !w_duplicate) {
      return ret;
    }
  }
}

/**
 * @param {number} cid child id
 * @param {number} fid father id
 * @param {number} mid mother id
 */
async function name_baby(cid, fid, mid) {
  let ret, rand_param;
  // 虽然不是很情愿，但是还是留一下吧，只有玩家是孩子父亲或者母亲的情况下才拥有命名决定权
  if (mid > 0 && fid > 0) {
    // 如果和玩家没关系，直接用母亲来命名
    rand_param = mid;
  } else if (era.get('flag:惩戒力度') >= 2) {
    // 性奴和孕袋没有命名权
    rand_param = mid || fid;
  } else {
    if (
      await select_yes_or_no(
        '',
        mid > 0
          ? i18n().timon.it_hb_let_mom_name
          : i18n().timon.it_hb_let_dad_name,
        i18n().timon.it_hb_you_name,
      )
    ) {
      rand_param = mid || fid;
    } else {
      era.print(i18n().timon.it_hb_name_tip);
      ret = await rename();
    }
  }
  if (rand_param > 0) {
    ret = get_child_name(rand_param);
  }
  const mother = get_chara_talk(mid);
  const child = get_chara_talk(cid);
  const check = check_duplicate(ret);
  era.set(`callname:${cid}:-2`, era.set(`callname:${cid}:-1`, ret));
  if (check !== false) {
    era.print(di18n.name.check_duplicate(ret, check));
    ret = await rename();
  } else if (
    (!mid || !fid) &&
    rand_param > 0 &&
    get_display_name(ret).replace(/\d+$/, '').length !==
      get_display_name(ret).length &&
    (await select_yes_or_no([
      ...i18n().timon.get_it_name_result(mother, child),
      { isBr: true },
      i18n().timon.it_hb_rename,
    ]))
  ) {
    ret = await rename();
  }
  era.set(`callname:${cid}:-2`, era.set(`callname:${cid}:-1`, ret));
  await era.printAndWait(i18n().timon.get_it_name_result(mother, child));
}

/** @param {number} mid */
async function sys_have_baby(mid) {
  const m_life_marks = LifeEventMarks.get_marks(mid);
  const fid = m_life_marks.sperm;
  const ch_id = era.add('flag:新生儿ID', 1) - 1;
  let src_id = era.get(`cflag:${mid}:模版角色`);
  if (src_id === -1) {
    if (mid > 0) {
      src_id = mid;
    } else {
      src_id = era.get(`cflag:${fid}:模版角色`);
      src_id = src_id !== -1 ? src_id : fid;
    }
  }

  init_chara(ch_id, src_id);
  inherited_talents.forEach((tid) => era.set(`talent:${ch_id}:${tid}`, 0));
  let m_count = get_random_value(0, 1);
  let f_count = get_random_value(0, 1);
  /** @type {{id:number,val:number}[]} */
  let tmp_list = [];
  if (m_count > 0) {
    tmp_list = gacha(
      inherited_talents
        .map((tid) => {
          return {
            id: tid,
            val: era.get(`talent:${mid}:${tid}`),
          };
        })
        .filter((talent) => talent.val > 0),
      m_count,
    );
  }
  if ((m_count = tmp_list.length) > 0) {
    tmp_list.forEach((talent) =>
      era.set(`talent:${ch_id}:${talent.id}`, talent.val),
    );
  }
  if (f_count > 0) {
    tmp_list = gacha(
      inherited_talents
        .map((tid) => {
          return {
            id: tid,
            val: era.get(`talent:${fid}:${tid}`),
          };
        })
        .filter((talent) => talent.val > 0),
      f_count,
    );
  }
  if ((f_count = tmp_list.length) > 0) {
    tmp_list.forEach((talent) =>
      era.set(`talent:${ch_id}:${talent.id}`, talent.val),
    );
  }
  gacha(
    inherited_talents.filter((tid) => !era.get(`talent:${ch_id}:${tid}`)),
    3 - f_count - m_count,
  ).forEach((tid) =>
    era.set(`talent:${ch_id}:${tid}`, 2 * get_random_value(0, 1) - 1),
  );
  era.set(
    `talent:${ch_id}:捉摸不透`,
    Number(era.get(`talent:${ch_id}:捉摸不透`) > 0),
  );
  const c_sex = era.get(`cflag:${ch_id}:性别`);

  // 随机赋予1项名器特质
  const p_talent_count = get_random_value(0, 1);
  const p_talents = get_filtered_talents(c_sex, 50);
  p_talents.forEach((tid) => era.set(`talent:${ch_id}:${tid}`, 0));
  if (p_talent_count > 0) {
    gacha(p_talents, p_talent_count).forEach((tid) =>
      era.set(`talent:${ch_id}:${tid}`, 1),
    );
  }

  const xp_talent_count = get_random_value(0, 1);
  const xp_extended_count = get_random_value(0, 1);
  const talent_arr = [
    // 淫乱系
    ...get_filtered_talents(c_sex, 60),
    // xp系
    ...new Array(8).fill(0).map((_, i) => i + 40),
  ];
  talent_arr.forEach((tid) => era.set(`talent:${ch_id}:${tid}`, 0));
  // 随机继承一项xp特质
  if (xp_extended_count > 0) {
    gacha(
      talent_arr.filter(
        (tid) =>
          era.get(`talent:${mid}:${tid}`) || era.get(`talent:${fid}:${tid}`),
      ),
      xp_extended_count,
    ).forEach((tid) =>
      era.set(
        `talent:${ch_id}:${tid}`,
        Math.min(
          1,
          era.get(`talent:${mid}:${tid}`) || era.get(`talent:${fid}:${tid}`),
        ),
      ),
    );
  }
  // 随机赋予一项xp特质
  if (xp_talent_count > 0) {
    gacha(
      talent_arr.filter((tid) => !era.get(`talent:${ch_id}:${tid}`)),
      xp_talent_count,
    ).forEach((tid) =>
      era.set(
        `talent:${ch_id}:${tid}`,
        tid >= 60 ? (Math.random() > 0.5) * 5 - 4 : 1,
      ),
    );
  }

  const s_talent_count = get_random_value(0, 1);
  /**
   * 随机获得一项中毒特质
   * @type {number[]}
   */
  const semen_talents = new Array(8)
    .fill(0)
    .map((_, i) => i + 70)
    .filter((talent_id) => talent_id !== 71 || talent_id !== 75 || c_sex !== 1);
  semen_talents.forEach((tid) => era.set(`talent:${ch_id}:${tid}`, 0));
  if (s_talent_count > 0) {
    gacha(semen_talents, s_talent_count).forEach((tid) =>
      era.set(`talent:${ch_id}:${tid}`, 1),
    );
  }

  era.set(`talent:${ch_id}:泌乳`, 0);
  era.set(`talent:${ch_id}:乳头类型`, 0);
  if (c_sex !== 1) {
    if (era.get(`talent:${mid}:泌乳`) > 1) {
      era.set(
        `talent:${ch_id}:泌乳`,
        Math.random() < 0.25 * (era.get(`talent:${mid}:泌乳`) - 1) ? 3 : 0,
      );
    }
    era.set(
      `talent:${ch_id}:乳头类型`,
      get_random_value(0, era.get(`talent:${mid}:乳头类型`)),
    );
  }

  let random_val;
  new Array(10).fill(0).forEach((_, i) => {
    const cfid = 30 + i;
    let val = era.get(`cflag:${ch_id}:${cfid}`);
    random_val = Math.random();
    if (random_val < 0.1) {
      val += random_val < 0.05 ? 1 : -1;
      if (val > 7) {
        val = 7;
      } else if (val < 0) {
        val = 0;
      }
      era.set(`cflag:${ch_id}:${cfid}`, val);
    }
  });

  // 身高三围的突变
  if (Math.random() < 0.1) {
    era.add(
      `cflag:${ch_id}:身高`,
      2 * (era.get(`cflag:${fid}:身高`) > era.get(`cflag:${ch_id}:身高`)) - 1,
    );
  }
  if (c_sex !== 1) {
    (random_val = Math.random()) < 0.1 &&
      era.add(`cflag:${ch_id}:胸围`, random_val < 0.05 ? 1 : -1);
  }
  if ((random_val = Math.random()) < 0.1) {
    era.add(`cflag:${ch_id}:腰围`, random_val < 0.05 ? 1 : -1);
  }
  if ((random_val = Math.random()) < 0.1) {
    era.add(`cflag:${ch_id}:臀围`, random_val < 0.05 ? 1 : -1);
  }

  era.set(`cflag:${ch_id}:气性`, get_random_value(-3, 3));
  era.set(`cflag:${ch_id}:成长阶段`, 0);

  const cur_month = era.get('flag:当前月');
  const cur_week = era.get('flag:当前周');
  const birth_day = 7 * cur_week + Math.floor(7 * Math.random()) - 6;

  era
    .getAddedCharacters()
    .filter(
      (cid) =>
        cid !== ch_id &&
        (era.get(`cflag:${cid}:母方角色`) ||
          era.get(`cflag:${cid}:父方角色`)) === (mid || fid),
    )
    .forEach((cid) => {
      era.set(`relation:${ch_id}:${cid}`, 300);
      era.set(`relation:${cid}:${ch_id}`, 300);
      era.set(
        `callname:${ch_id}:${cid}`,
        era.get(`cflag:${cid}:0`) === 1 ? 'elder_brother' : 'elder_sister',
      );
      era.set(
        `callname:${cid}:${ch_id}`,
        c_sex === 1 ? 'younger_brother' : 'younger_sister',
      );
    });
  era.set(`cflag:${ch_id}:父方角色`, fid);
  era.set(`cflag:${ch_id}:母方角色`, mid);
  era.set(`cflag:${ch_id}:出生月份`, cur_month);
  era.set(`cflag:${ch_id}:出生日期`, birth_day);
  era.set(`cflag:${ch_id}:育成回合计时`, 'x');
  era.set(`cflag:${ch_id}:可再次育成`, 0);
  era.set(`abl:${ch_id}:粤语`, 0);
  era.set(`abl:${ch_id}:英语`, 0);
  era.set(`abl:${ch_id}:法语`, 0);
  const rand_lan = get_random_value(5, 7);
  era.set(
    `abl:${ch_id}:${rand_lan}`,
    Math.min(era.get(`abl:${mid}:${rand_lan}`), 3),
  );
  era.set(`jewel:${ch_id}:粉`, 0);
  era.set(`jewel:${ch_id}:蓝`, 0);
  era.set(`jewel:${ch_id}:白`, 0);
  // 和玩家相关的新生儿自动进队
  // 无关的会在招募池子里
  era.set(
    `cflag:${ch_id}:招募状态`,
    1 - era.set(`cflag:${ch_id}:随机招募`, Number(fid > 0 && mid > 0)),
  );
  era.set(`relation:${ch_id}:${mid}`, era.set(`relation:${ch_id}:${fid}`, 400));
  era.set(`relation:${mid}:${ch_id}`, era.set(`relation:${fid}:${ch_id}`, 400));
  era.set(`callname:${ch_id}:${fid}`, 'dad');
  era.set(`callname:${ch_id}:${mid}`, 'mom');
  era.set(
    `callname:${fid}:${ch_id}`,
    era.set(`callname:${mid}:${ch_id}`, c_sex === 1 ? 'son' : 'daughter'),
  );
  era.set(
    `love:${ch_id}`,
    era.get('flag:后代爱慕限制') > 0 ? era.get('flag:初始爱慕') : 0,
  );
  era.set(`cstr:${ch_id}:出生经历`, era.get('flag:当前年').toString());
  const f_check = era.add(`exp:${fid}:孩子数量`, 1);
  const m_check = era.add(`exp:${mid}:生产次数`, 1);
  m_life_marks.sperm = 0;
  if (f_check >= 8) {
    if (!fid) {
      global_achievement.father = 1;
      if (global_achievement.mother > 0) {
        global_achievement.famother = 1;
      }
    }
    if (sys_add_titles(fid, { c: buff_colors[2], n: 's_father' })) {
      await era.waitAnyKey();
    }
  }
  if (m_check >= 8) {
    if (!mid) {
      global_achievement.mother = 1;
      if (global_achievement.father > 0) {
        global_achievement.famother = 1;
      }
    }
    if (sys_add_titles(mid, { c: buff_colors[2], n: 's_mother' })) {
      await era.waitAnyKey();
    }
  }

  const father = get_chara_talk(fid);
  const mother = get_chara_talk(mid);
  get_custom_check(ch_id).check_birth();
  era.print(i18n().timon.get_it_hb_info(mother, father));
  era.set(
    `maxbase:${mid}:体力`,
    Math.max(era.get(`maxbase:${mid}:体力`) - 400, 200),
  );
  era.add(`base:${mid}:体力`, 0);
  era.set(
    `maxbase:${mid}:精力`,
    Math.max(era.get(`maxbase:${mid}:精力`) - 400, 200),
  );
  era.add(`base:${mid}:精力`, 0);
  if (!fid && era.get(`cflag:${mid}:父方角色`) === 0) {
    global_achievement.ck_m = 1;
  }
  if (!mid && era.get(`cflag:${fid}:母方角色`) === 0) {
    global_achievement.ck_f = 1;
  }
  if (
    (!fid && era.get(`cflag:${mid}:母方角色`) === 0) ||
    (!mid && era.get(`cflag:${fid}:父方角色`) === 0)
  ) {
    global_achievement.ck_d = 1;
  }
  if (
    !!global_achievement.ck_m +
      !!global_achievement.ck_f +
      !!global_achievement.ck_d >=
    2
  ) {
    global_achievement.ck = 1;
  }
  await get_custom_ero(mid || fid).have_baby(father, mother, ch_id);
  await name_baby(ch_id, fid, mid);

  get_custom_mec(ch_id).set_callname();
  const exp_obj = {
    ...get_date_obj(),
    c: ch_id,
  };
  if (!era.get(`cstr:${fid}:长子女经历`)) {
    era.set(`cstr:${fid}:长子女经历`, exp_obj);
  }
  if (!era.get(`cstr:${mid}:长子女经历`)) {
    era.set(`cstr:${mid}:长子女经历`, { ...exp_obj, im: true });
  }
  if (!era.get(`cstr:${ch_id}:毛色`)) {
    era.set(
      `cstr:${ch_id}:毛色`,
      era.get(`cstr:${mid}:毛色`) || era.get(`cstr:${fid}:毛色`),
    );
  }
  const c_life_marks = LifeEventMarks.get_marks(ch_id);
  c_life_marks.unexpected_child = m_life_marks.unexpected_pregnant;
  c_life_marks.rape_child = m_life_marks.rape_child;
  m_life_marks.unexpected_pregnant = 0;
  m_life_marks.rape_child = 0;
  m_life_marks.report = 0;

  if (!fid && era.get(`love:${mid}`) < 90 && (mid < 340 || mid > 342)) {
    if (era.get(`mark:${mid}:同心`) >= 2) {
      sys_like_chara(mid, 0, 50);
      add_jewel_reward(mid, 10, 200);
    } else {
      add_jewel_reward(mid, 10, 50);
    }
  } else if (!fid || !mid) {
    if (
      !mid &&
      c_life_marks.unexpected_child === unexpected_pregnant_enum.mother_sleep
    ) {
      sys_like_chara(mid || fid, 0, 200);
      add_jewel_reward(mid || fid, 10, 400);
    } else {
      sys_like_chara(mid || fid, 0, 100);
      add_jewel_reward(mid || fid, 10, 200);
    }
  }
  const jid = get_random_value(20, 22);
  let j_num = 0;
  if (!fid) {
    j_num = get_random_value(25, 75);
  } else if (!mid) {
    j_num = get_random_value(75, 125);
  }
  if (j_num > 0) {
    era.print(
      i18n().sex.get_got_jewel_info_oot(
        get_chara_talk(0).get_colored_name(),
        __(`tb_param.jewel${jid}`),
        get_abbr_number(era.get(`jewel:0:${jid}`)),
        get_abbr_number(j_num),
        {
          ...get_abbr_number(era.add(`jewel:0:${jid}`, j_num)),
          color: gene_type_colors[jid - 20],
        },
      ),
    );
  }
  if (
    new Array(3)
      .fill(0)
      .map((_, i) => 340 + i)
      .filter((e) => e !== fid && e !== mid)
      .reduce((p, c) => sys_like_chara(c, 0, 50 * (1 + !mid)) || p, false)
  ) {
    await era.waitAnyKey();
  }
  await sys_punish_unfaithful(mid || fid, era.get(`love:${mid || fid}`));
}

module.exports = sys_have_baby;
