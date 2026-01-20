const era = require('#/era-electron');

const { sys_check_cuckold } = require('#/system/chara/sys-calc-cheat');
const sys_get_item_status = require('#/system/chara/sys-get-item-status');
const {
  check_erect,
  check_lubrication,
  get_bust_delta,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');
const {
  sys_check_hide_relation_and_love,
  sys_check_limit_relation_and_love,
} = require('#/system/sys-calc-chara-param');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const get_display_name = require('#/utils/calc-display-name');

const { calc_attr_score } = require('#/data/calc-attr-score');
const chara_score = require('#/data/chara-score-table.json');
const {
  buff_colors,
  el_success_color,
  skin_colors,
} = require('#/data/color-const');
const { hair_colors } = require('#/data/const.json');
const { get_date } = require('#/data/date-indicator');
const talent_desc = require('#/data/desc/talents.json');
const CharaInmon = require('#/data/ero/chara-inmon');
const { mark_colors, mark_enum } = require('#/data/ero/mark-const');
const { lust_border } = require('#/data/ero/orgasm-const');
const { part_enum } = require('#/data/ero/part-const');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const {
  pregnant_stage_enum,
  trained_talent_names,
  vp_status_enum,
} = require('#/data/ero/status-const');
const recruit_flags = require('#/data/event/recruit-flags');

const di18n = require('#/i18n/extended-def');
const { i18n, lan } = require('#/i18n/selector');

const levels = {
  attr_score: [
    'G',
    'G+', // 100
    'F',
    'F+', // 200
    'E',
    'E+', // 300
    'D',
    'D+', // 400
    'C',
    'C', // 500
    'C+',
    'C+', // 600
    'B',
    'B', // 700
    'B+',
    'B+', // 800
    'A',
    'A', // 900
    'A+',
    'A+', // 1000
    'S',
    'S', // 1100
    'SS',
    'SS', // 1200
    'SS',
    'UG', // 1300
    'UG',
    'UF', // 1400
    'UF',
    'UE', // 1500
    'UE',
    'UD', // 1600
    'UD',
    'UC', // 1700
    'UC',
    'UB', // 1800
    'UB',
    'UA', // 1900
    'UA',
  ],
  chara_score,
  honour: {
    border: [500, 1000, 2000, 5000],
    buff: [0, 1, 2, 3, 5, 10, 15],
  },
  love: [1, 25, 50, 75, 90, 100],
  relation: [-100, 0, 75, 150, 225, 375, 525],
};

const talent_names = [
  ['粗神经', '感性'],
  ['自大', '自卑'],
  ['坚强', '怕痛'],
  ['开朗', '阴郁'],
  ['外向', '内向'],
  ['温柔', '叛逆'],
  ['懦弱', '强势'],
  ['傲娇', '坦率'],
  ['乐观', '悲观'],
  ['猎奇', '无关心'],
  ['贞操无定', '贞洁'],
  ['社牛', '社恐'],
  ['爱净', '不修边幅'],
  ['守时', '夜猫子'],
  ['有节制', '爱吃'],
  ['勤劳', '懒惰'],
  ['精明', '铺张'],
  ['体弱多病', '身强体健'],
];

const breast_talent_names = ['贫乳', '', '巨乳', '爆乳'];

/** @type {{chara:Record<string,()=>string>,player:Record<string,()=>string>}} */
const penis_state = {
  /** 训练员视角角色的童贞情况 */
  chara: {},
  /** 训练员视角自己的童贞情况 */
  player: {},
};
penis_state.chara[vp_status_enum.i_think] =
  penis_state.chara[vp_status_enum.virgin] =
  penis_state.player[vp_status_enum.dont_know] =
  penis_state.player[vp_status_enum.virgin] =
    'v_penis_v';
penis_state.chara[vp_status_enum.dont_know] = 'v_penis_d';

/** @type {{chara:Record<string,()=>string>,player:Record<string,()=>string>}} */
const virgin_state = {
  /** 训练员视角角色的处女情况 */
  chara: {},
  /** 训练员视角自己的处女情况 */
  player: {},
};
virgin_state.chara[vp_status_enum.i_think] =
  virgin_state.chara[vp_status_enum.virgin] =
  virgin_state.player[vp_status_enum.dont_know] =
  virgin_state.player[vp_status_enum.virgin] =
    'v_vagina_v';
virgin_state.chara[vp_status_enum.dont_know] = 'v_vagina_d';
virgin_state.chara[vp_status_enum.reborn] = virgin_state.player[
  vp_status_enum.reborn
] = 'v_vagina_r';

/**
 * @param {number} cid
 * @param {boolean} [show_true_bust=false]
 * @returns {string}
 */
function get_breast_cup(cid, show_true_bust = false) {
  const delta = get_bust_delta(cid, show_true_bust);
  if (delta < 0) {
    return '-';
  }
  if (delta < 10) {
    return 'AA';
  }
  return String.fromCharCode(65 + Math.floor(delta / 2.5) - 4);
}

/** @param {string} cup */
function get_talent_bust_size(cup) {
  const cup_char = cup.charCodeAt(0);
  return Math.min(cup_char > 45 && Math.floor((cup_char - 66) / 2), 2);
}

/**
 * @param {number} score
 * @returns {string}
 */
function get_chara_rank(score) {
  let score_level = 0;
  while (score >= levels.chara_score.border[score_level]) {
    score_level++;
  }
  return levels.chara_score.mark[score_level];
}

/**
 * @param {number} sex
 * @param {number} start_tid
 * @returns {number[]}
 */
function get_filtered_talents(sex, start_tid) {
  switch (start_tid) {
    case 50:
      // 名器系
      return new Array(7)
        .fill(0)
        .map((_, i) => 50 + i)
        .filter(
          (tid) =>
            (tid !== 51 || sex !== 1) &&
            (tid !== 54 || sex > 0) &&
            (tid !== 55 || sex !== 1),
        );
    case 60:
      // 调教完成系
      return new Array(7)
        .fill(0)
        .map((_, i) => 60 + i)
        .filter(
          (tid) =>
            (tid !== 61 || sex !== 1) &&
            (tid !== 63 || sex === 0) &&
            (tid !== 64 || sex !== 1) &&
            (tid !== 66 || sex > 0),
        );
  }
}

function get_trainer_level() {
  let level = 0;
  // FLAGNAME:15 = 当前声望
  const honour = era.get('flag:15');
  if (honour <= 0) {
    level = -1;
  } else {
    while (honour >= levels.honour.border[level]) {
      level++;
    }
  }
  return level;
}

module.exports = {
  /** @param {number} adaptability */
  get_adaptability_rank(adaptability) {
    if (adaptability >= 7) {
      return 'S';
    }
    return String.fromCharCode(71 - adaptability);
  },
  /** @param {number} attr */
  get_attr_rank(attr) {
    return levels.attr_score[Math.floor(attr / 50)] || 'US';
  },
  get_breast_cup,
  /**
   * FLAGNAME:0 = 当前回合数
   * @param {number} [_weeks]
   */
  get_celebration(_weeks = era.get('flag:0')) {
    const weeks = (_weeks - 1) % 48;
    switch (weeks) {
      case 0: // 一月第一周
        return '新年';
      case 5: //二月第二周
        return '情人节';
      case 8: //三月第一周
        return '殿堂周';
      case 13: //四月第二周
        return '粉丝感谢祭';
      case 29: //八月第二周
        return '庙会';
      case 39: // 十月第四周
        return '万圣节';
      case 47: //十二月第四周
        return '圣诞节';
      default:
        return '';
    }
  },
  get_chara_rank,
  /**
   * @param {number} cid
   * @param {boolean} [is_number]
   * @returns {number|string}
   */
  get_chara_score(cid, is_number) {
    // EXPNAME:0 = 技能评价分
    let score = era.get(`exp:${cid}:0`);
    score += new Array(5).fill(0).reduce(
      // BASENAME:5 - 9 = 速度 - 智力
      (s, _, i) => s + calc_attr_score(era.get(`base:${cid}:${5 + i}`)),
      0,
    );
    if (is_number) {
      return score;
    }
    return get_chara_rank(score);
  },
  /**
   * @param {number} cid
   * @returns {{content:string,[color]:string,display:string,[opacity]:number}[]}
   */
  get_ero_status(cid) {
    const ret = [];
    const has_penis = get_penis_size(cid) > 0;
    // TFLAGNAME:7 = 主导权
    if (era.get('tflag:7') === cid) {
      ret.push({
        ...di18n.tb_status.get_titled_status('tr_leader'),
        color: buff_colors[1],
      });
    }
    // 主要状态
    // STATUSNAME:10 = 沉睡
    // STATUSNAME:39 = 马跳S
    if (era.get(`status:${cid}:10`) > 0 || era.get(`status:${cid}:39`) > 0) {
      ret.push({
        ...di18n.tb_status.get_titled_status(10),
        color: buff_colors[2],
      });
      // TCVAR:40 = 脱力
    } else if (era.get(`tcvar:${cid}:40`) > 0) {
      ret.push({
        ...di18n.tb_status.get_titled_status('tr_tc_40'),
        color: buff_colors[2],
      });
    }
    // TCVARNAME:41 = 失神
    const lost_mind = era.get(`tcvar:${cid}:41`);
    if (lost_mind) {
      ret.push({
        ...di18n.tb_status.get_titled_status('tr_tc_41'),
        color: buff_colors[2],
        opacity: lost_mind > 1 ? 1 : 0.5,
      });
    }
    // TCVARNAME:45 = 余韵
    const last = era.get(`tcvar:${cid}:45`);
    if (last) {
      ret.push({
        ...di18n.tb_status.get_titled_status('tr_tc_45', has_penis),
        color: buff_colors[2],
        opacity: last > 1 ? 1 : 0.5,
      });
    }
    // TCVARNAME:44 = 发情
    if (era.get(`tcvar:${cid}:44`) > 0) {
      ret.push({
        ...di18n.tb_status.get_titled_status('tr_tc_44'),
        color: buff_colors[2],
      });
    }
    // TCVARNAME:57 = 高潮抑制
    const orgasm_stop = era.get(`tcvar:${cid}:57`);
    if (orgasm_stop) {
      ret.push({
        ...di18n.tb_status.get_titled_status('tr_tc_57'),
        color: buff_colors[2],
        opacity: orgasm_stop > 1 ? 1 : 0.5,
      });
    }
    // 主要部位 - 茎
    if (has_penis) {
      if (check_erect(cid)) {
        ret.push({
          ...di18n.tb_status.get_titled_status('tr_erect'),
          color: buff_colors[2],
        });
      }
      // TCVARNAME:47 = 避孕套
      if (era.get(`tcvar:${cid}:47`) > 0) {
        ret.push({
          ...di18n.tb_status.get_titled_status('tr_tc_47'),
          color: buff_colors[0],
        });
      }
      // TCVARNAME:46 = 不应期
      const penis_disabled = era.get(`tcvar:${cid}:46`);
      if (penis_disabled > 0) {
        ret.push({
          ...di18n.tb_status.get_titled_status('tr_tc_46', penis_disabled),
          color: buff_colors[0],
          opacity: penis_disabled > 1 ? 1 : 0.5,
        });
      }
      // EXNAME:55 = 寸止
      const orgasm_denial = era.get(`ex:${cid}:55`);
      if (orgasm_denial) {
        ret.push({
          ...di18n.tb_status.get_titled_status('tr_ex_55'),
          color: buff_colors[2],
        });
      }
    }
    // 主要部位 - 膣
    // CFLAGNAME:5 = 阴道尺寸
    if (era.get(`cflag:${cid}:5`) > 0) {
      if (
        // STATUSNAME:40 = 反避孕套
        era.get(`status:${cid}:40`) > 0 &&
        // EXNAME:40 = 膣内精液
        era.get(`ex:${cid}:40`) > 0
      ) {
        ret.push({
          ...di18n.tb_status.get_titled_status(40),
          color: buff_colors[2],
        });
      }
      if (check_lubrication(cid, part_enum.virgin)) {
        ret.push({
          ...di18n.tb_status.get_titled_status('tr_lb_vagina'),
          color: buff_colors[2],
        });
      }
      // TCVARNAME:48 = 阴道扩张
      if (era.get(`tcvar:${cid}:48`) > 0) {
        ret.push({
          ...di18n.tb_status.get_titled_status(`tr_tc_48`),
          color: buff_colors[2],
          opacity: 0.5,
        });
      }
      // EXNAME:45 = 阴道撕裂
      if (era.get(`ex:${cid}:45`) > 0) {
        ret.push({
          ...di18n.tb_status.get_titled_status('tr_ex_45'),
          color: buff_colors[3],
        });
      }
      // STATUSNAME:41 - 42 = 短效避孕药 - 长效避孕药
      if (era.get(`status:${cid}:41`) > 0 || era.get(`status:${cid}:42`) > 0) {
        ret.push({
          ...di18n.tb_status.get_titled_status(41),
          color: buff_colors[0],
        });
      }
    }
    // 次要部位 - 胸
    // TCVARNAME:50 = 乳突
    if (era.get(`tcvar:${cid}:50`) > 0) {
      ret.push({
        ...di18n.tb_status.get_titled_status('tr_br_erect'),
        color: buff_colors[2],
      });
    }
    if (check_lubrication(cid, part_enum.breast)) {
      ret.push({
        ...di18n.tb_status.get_titled_status('tr_lb_breast'),
        color: buff_colors[2],
      });
    }
    // 次要部位 - 菊
    if (check_lubrication(cid, part_enum.anal)) {
      ret.push({
        ...di18n.tb_status.get_titled_status('tr_lb_anal'),
        color: buff_colors[2],
      });
    }
    // TCVARNAME:49 = 肛门扩张
    if (era.get(`tcvar:${cid}:49`) > 0) {
      ret.push({
        ...di18n.tb_status.get_titled_status(`tr_tc_49`),
        color: buff_colors[2],
        opacity: 0.5,
      });
    }
    // EXNAME:46 = 肛门撕裂
    if (era.get(`ex:${cid}:46`) > 0) {
      ret.push({
        ...di18n.tb_status.get_titled_status('tr_ex_46'),
        color: buff_colors[3],
      });
    }
    // TEQUIPNAME:6 - 7 = 项圈 - 眼罩
    for (let teid = 6; teid <= 7; ++teid) {
      if (era.get(`tequip:${cid}:${teid}`) !== -1) {
        ret.push({
          ...di18n.tb_status.get_titled_status(`tr_te_${teid}`),
          color: buff_colors[0],
        });
      }
    }
    // 与调教外共享的状态
    if (era.get(`mark:${cid}:${mark_enum.ero}`) === 3) {
      const { slave } = CharaInmon.get(cid);
      const obj = {
        color: buff_colors[2],
        content: di18n.tb_mark.s_titles[slave],
        fontWeight: 'bold',
      };
      if (cid > 0 && slave > 0) {
        obj.title = di18n.tb_mark.s_descriptions[slave];
      }
      ret.push(obj);
    }
    // BASENAME:10 = 性欲
    if (era.get(`base:${cid}:10`) >= lust_border.want_sex) {
      ret.push({
        ...di18n.tb_status.get_titled_status('eo_4'),
        color: buff_colors[2],
      });
    }
    const sex_state =
      cid > 0
        ? [penis_state.chara, virgin_state.chara]
        : [penis_state.player, virgin_state.player];
    // TALENTNAME:30 = 童贞
    if (has_penis && era.get(`talent:${cid}:30`) !== 0) {
      ret.push({
        ...di18n.tb_status.get_titled_status(
          sex_state[0][era.get(`talent:${cid}:30`)],
        ),
        color: buff_colors[2],
      });
    }
    // CFLAGNAME:5 = 阴道尺寸
    // TALENTNAME:31 = 处女
    if (era.get(`cflag:${cid}:5`) > 0 && era.get(`talent:${cid}:31`) !== 0) {
      ret.push({
        ...di18n.tb_status.get_titled_status(
          sex_state[1][era.get(`talent:${cid}:31`)],
        ),
        color: buff_colors[2],
      });
    }
    sys_get_item_status(cid, ret);
    // TALENTNAME:32 = 泌乳
    if (era.get(`talent:${cid}:32`) > 0) {
      ret.push({
        ...di18n.tb_status.get_titled_status('milk'),
        color: buff_colors[2],
      });
    }
    const mark_level = cid > 0 ? era.get(`mark:${cid}:${mark_enum.ero}`) : 3;
    if (
      // CFLAGNAME:81 - 82 = 妊娠阶段 - 妊娠回合计时
      era.get(`cflag:${cid}:81`) >> pregnant_stage_enum.embryo &&
      (era.get(`cflag:${cid}:82`) >= 4 || (cid && mark_level >= 2))
    ) {
      ret.push({
        ...di18n.tb_status.get_titled_status('pg_normal'),
        color: buff_colors[0],
      });
    } else if (era.get(`status:${cid}:30`) > 0) {
      ret.push({
        ...di18n.tb_status.get_titled_status(30),
        color: buff_colors[2],
      });
    } else if (mark_level >= 2 && era.get(`status:${cid}:31`) > 0) {
      ret.push({
        ...di18n.tb_status.get_titled_status(31),
        color: buff_colors[2],
      });
    }
    return ret.map((s) => {
      if (s.title !== void 0) {
        s.title = i18n()
          .status_desc.template.replace('%NAME%', s.content)
          .replace('%DESC%', s.title);
      }
      s.content = i18n().tb_status.template.replace('%NAME%', s.content);
      s.display = 'inline-block';
      return s;
    });
  },
  get_filtered_talents,
  /** @param {string} hair_color */
  get_hair_color(hair_color) {
    const colors = hair_colors[hair_color];
    if (!colors) {
      return undefined;
    }
    return colors[3] || `hsl(${colors[0]}deg ${colors[1]}% ${colors[2]}%)`;
  },
  /** @param {number} cid */
  get_love_border(cid) {
    const love = era.get(`love:${cid}`) || 0;
    let level = 0;
    while (love >= levels.love[level]) {
      level++;
    }
    return levels.love[level];
  },
  /**
   * @param {number} cid
   * @param {number} [love]
   * @returns {{full:()=>string,level:number,mark:()=>string,[val]:()=>string}}
   */
  get_love_info(cid, love = era.get(`love:${cid}`)) {
    if (!cid) {
      return { full: () => '-', level: -1, mark: () => '-' };
    }
    if ((sys_check_hide_relation_and_love(cid) & 0b1) > 0) {
      return {
        full: () => '？ (?)',
        level: -1,
        mark: () => '？',
        val: () => '?',
      };
    }
    if (sys_check_limit_relation_and_love(cid)) {
      love = Math.min(era.get(`love:${cid}`), 24);
    }
    let level = 0;
    while (love >= levels.love[level]) {
      level++;
    }
    const mark = () => di18n.m_love[level];
    const val = () => love.toString();
    return {
      full: () => `${mark()} (${val()})`,
      level,
      mark,
      val,
    };
  },
  /** @param {string} rank */
  get_rank_level(rank) {
    switch (rank.charAt(0)) {
      case 'U':
        return 8;
      case 'S':
        return 7;
      default:
        return 71 - rank.charCodeAt(0);
    }
  },
  /**
   * @param {number} cid
   * @param {number} [target]
   * @param {number} [relation]
   * @returns {{full:()=>string,level:number,mark:()=>string,[val]:()=>string}}
   */
  get_relation_info(
    cid,
    target = 0,
    relation = era.get(`relation:${cid}:${target}`),
  ) {
    if (!cid) {
      return { full: () => '-', level: -1, mark: () => '-' };
    }
    if (sys_check_hide_relation_and_love(cid) > 0) {
      return {
        full: () => '？ (?)',
        level: -1,
        mark: () => '？',
        val: () => '?',
      };
    }
    let level = 0;
    while (relation > levels.relation[level]) {
      level++;
    }
    const mark = () => di18n.m_relation[level];
    const val = () => relation.toString();
    return { full: () => `${mark()} (${val()})`, level, mark, val };
  },
  get_save_name() {
    // FLAGNAME:65 = 存档名
    const prefix =
      era.get('flag:65') ||
      `${get_display_name(era.get('callname:0:-1'))} - ${get_date()}`;
    return `${prefix} (${new Date().toLocaleString(lan())})`;
  },
  /** @param {number} cid */
  get_skin(cid) {
    // CFLAGNAME:10 = 肤色深度
    return di18n.n_skin[era.get(`cflag:${cid}:10`) + 1];
  },
  /** @param {number} cid */
  get_skin_color(cid) {
    // CFLAGNAME:10 = 肤色深度
    return skin_colors[era.get(`cflag:${cid}:10`) + 1];
  },
  get_talent(cid) {
    const yandere = era.get(`talent:${cid}:病娇`),
      ret = get_custom_mec(cid).get_talents();
    if (yandere === 2 || (yandere > 0 && era.get('status:0:马语者') > 0)) {
      const temp = {
        color: buff_colors[3],
        content: '病娇',
        opacity: yandere / 2,
      };
      const inmon = CharaInmon.get(cid);
      if (inmon.on(plugin_enum.no_yand)) {
        delete temp.color;
        delete temp.opacity;
        temp.title = '已缓和。';
      } else if (inmon.on(plugin_enum.ntr)) {
        temp.color = el_success_color;
        delete temp.opacity;
        temp.title = '已扭曲。';
      }
      ret.push(temp);
    }
    if (era.get(`talent:${cid}:捉摸不透`)) {
      ret.push({ content: '捉摸不透' });
    }
    ret.push(
      ...new Array(18)
        .fill(0)
        .map((_, i) => {
          return {
            id: i,
            val: era.get(`talent:${cid}:${i}`),
          };
        })
        .filter((e) => e.val)
        .map((e) => ({
          content: talent_names[e.id][(e.val + 1) / 2],
        })),
    );
    return ret.map((e) => {
      if (e.title === undefined) {
        e.title = talent_desc[e.content];
      }
      e.content = `[${e.content}]`;
      if (e.title !== undefined) {
        e.title = `${e.content}：${e.title}`;
      }
      e.display = 'inline-block';
      return e;
    });
  },
  get_talent_bust_size,
  /** @param {number} cid */
  get_train_year(cid) {
    if (!cid) {
      return '-';
    }
    // CFLAGNAME:48 = 育成回合计时
    return di18n.n_edu[Math.floor(era.get(`cflag:${cid}:48`) / 48)];
  },
  get_trainer_level,
  /** @returns {{full:()=>string,level:number,prefix:()=>string,title:()=>string}} */
  get_trainer_title() {
    let level = get_trainer_level();
    const prefix = () => (level < 0 ? i18n().honour_m : di18n.m_honour[level]);
    // FLAGNAME:35 = 惩戒力度
    const title = () => di18n.n_title[era.get('flag:35')];
    return {
      full: () => prefix() + title(),
      level,
      prefix,
      title,
    };
  },
  get_trainer_train_buff(cid, level = get_trainer_level()) {
    const relation = cid > 0 ? era.get(`relation:${cid}:0`) : 225;
    if (cid > 0) {
      if (relation <= -100) {
        return -5;
      } else if (relation < 0) {
        return -2.5;
      }
    }
    let ret = 0;
    ret +=
      levels.honour.buff[
        level +
          (era.get('cflag:304:招募状态') === recruit_flags.yes) +
          (era.get('cflag:306:招募状态') === recruit_flags.yes)
      ] ?? 0;
    if (cid > 0) {
      if (relation > 525) {
        ret += 2.5;
      } else if (relation > 375) {
        ret += 1;
      } else if (relation < 225) {
        ret *= relation / 225;
      }
    }
    return ret;
  },
  get_xp(cid) {
    if (era.get(`cflag:${cid}:成长阶段`) < 2) {
      return ['……'];
    }
    const show_all_body =
        !cid || era.get('status:0:马语者') || era.get('status:0:透视镜片'),
      breast_talent = get_talent_bust_size(get_breast_cup(cid, show_all_body)),
      talent_list = [];
    if (breast_talent_names[breast_talent + 1]) {
      talent_list.push(breast_talent_names[breast_talent + 1]);
    }
    if (
      cid > 0 &&
      era.get(`exp:${cid}:性爱次数`) === era.get(`exp:${cid}:睡奸次数`) &&
      era.get('status:0:马语者') === 0 &&
      era.get('status:0:马跳次数镜片') === 0
    ) {
      return [
        ...talent_list.map((e) => {
          const print_obj = {
            color: buff_colors[2],
            content: `[${e}]`,
            display: 'inline-block',
          };
          if (talent_desc[e]) {
            print_obj.title = `[${e}]：${talent_desc[e]}`;
          }
          return print_obj;
        }),
        '……',
      ];
    }
    const sex = era.get(`cflag:${cid}:性别`);
    if (sex - 1) {
      if (era.get(`talent:${cid}:泌乳`) === 3) {
        talent_list.push('母乳体质');
      }
      if (era.get(`talent:${cid}:乳头类型`) === 2) {
        talent_list.push('凹陷乳头');
      }
      if (era.get(`talent:${cid}:隐形巨乳`) && breast_talent > 0) {
        talent_list.push('隐形巨乳');
      }
    }
    if (sys_check_cuckold(cid)) {
      talent_list.push({
        color: el_success_color,
        content: '[绿帽癖]',
        title: `[绿帽癖]：${talent_desc['绿帽癖']}`,
      });
    }
    if (era.get(`talent:${cid}:钢之意志`)) {
      talent_list.push({
        color: mark_colors.iron,
        content: '[钢之意志]',
        title: `[钢之意志]：${talent_desc['钢之意志']}`,
      });
    }
    talent_list.push(...new Array(3).fill(0).map((_, i) => i + 40));
    const ero = era.get(`talent:${cid}:工口意愿`);
    if (ero) {
      talent_list.push(ero > 0 ? '好色' : '性保守');
    }
    talent_list.push(
      ...new Array(4).fill(0).map((_, i) => i + 44),
      ...get_filtered_talents(sex, 50),
      ...get_filtered_talents(sex, 60)
        .map((t) => {
          return {
            id: t,
            level: era.get(`talent:${cid}:${t}`),
          };
        })
        .filter((e) => e.level)
        .map(
          (e) => trained_talent_names[era.get(`talentname:${e.id}`)][e.level],
        ),
      ...new Array(8).fill(0).map((_, i) => i + 70),
    );
    return talent_list
      .map((e) => {
        if (typeof e === 'number') {
          return era.get(`talent:${cid}:${e}`)
            ? era.get(`talentname:${e}`).toUpperCase()
            : '';
        }
        return e;
      })
      .filter((e) => e)
      .map((e) => {
        const print_obj =
          typeof e === 'object'
            ? e
            : {
                color: buff_colors[2],
                content: `[${e}]`,
              };
        print_obj.display = 'inline-block';
        if (talent_desc[e]) {
          print_obj.title = `[${e}]：${talent_desc[e]}`;
        }
        return print_obj;
      });
  },
};
