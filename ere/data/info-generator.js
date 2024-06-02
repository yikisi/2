const era = require('#/era-electron');

const sys_get_item_status = require('#/system/chara/sys-get-item-status');
const {
  check_erect,
  check_lubrication,
  get_bust_size,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');
const {
  sys_check_hide_relation_and_love,
  sys_check_limit_relation_and_love,
} = require('#/system/sys-calc-chara-param');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const attr_score_table = require('#/data/attr-score-table.json');
const { buff_colors } = require('#/data/color-const');
const status_desc = require('#/data/desc/status-desc.json');
const talent_desc = require('#/data/desc/talent-desc.json');
const { lust_border } = require('#/data/ero/orgasm-const');
const { part_enum } = require('#/data/ero/part-const');
const {
  penis_state,
  pregnant_stage_enum,
  skin_desc,
  trained_talent_names,
  virgin_state,
} = require('#/data/ero/status-const');
const recruit_flags = require('#/data/event/recruit-flags');
const { attr_names } = require('#/data/train-const');

const level_and_desc = {
  love: {
    border: [1, 25, 50, 75, 90, 100],
    mark: ['平常', '朦胧', '暧昧', '爱欲', '热恋', '佳偶', '依存'],
  },
  honour: {
    border: [500, 1000, 2000, 5000],
    mark: ['新手', '老练', '中坚', '精英', '传奇'],
    buff: [0, 1, 2, 3, 5, 10, 15],
  },
  attr_score: [
    'G',
    'G+',
    'F',
    'F+',
    'E',
    'E+',
    'D',
    'D+',
    'C',
    'C',
    'C+',
    'C+',
    'B',
    'B',
    'B+',
    'B+',
    'A',
    'A',
    'A+',
    'A+',
    'S',
    'S',
    'SS',
    'SS',
    'SS',
    'UG',
    'UG',
    'UF',
    'UF',
    'UE',
    'UE',
    'UD',
    'UD',
    'UC',
    'UC',
    'UB',
    'UB',
    'UA',
    'UA',
  ],
  chara_score: require('#/data/chara-score-table.json'),
  relation: {
    border: [-100, 0, 75, 150, 225, 375, 525],
    mark: ['失望', '怀疑', '冷淡', '融洽', '热忱', '喜爱', '亲密', '不渝'],
  },
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

const title_desc = ['训练员', '马娘', '性奴', '孕袋'];

/**
 * @param {number} attr
 * @returns {number}
 */
function get_attr_score(attr) {
  if (attr < 0) {
    return 0;
  }
  if (attr > 1200) {
    return attr_score_table[1200];
  }
  return attr_score_table[attr];
}

/**
 *
 * @param {number} chara_id
 * @param {boolean} [show_true_bust]
 * @returns {string}
 */
function get_breast_cup(chara_id, show_true_bust) {
  const delta =
    get_bust_size(chara_id, show_true_bust) -
    era.get(`cflag:${chara_id}:下胸围`);
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
  return Math.min(cup_char - 45 && Math.floor((cup_char - 66) / 2), 2);
}

/**
 * @param {number} sex
 * @param {number} begin_talent_id
 * @returns {number[]}
 */
function get_filtered_talents(sex, begin_talent_id) {
  switch (begin_talent_id) {
    case 1000:
      // 调教完成系
      return new Array(7)
        .fill(0)
        .map((_, i) => 1000 + i)
        .filter(
          (talent_id) =>
            (talent_id !== 1001 || sex - 1) &&
            (talent_id !== 1003 || !sex) &&
            (talent_id !== 1004 || sex - 1) &&
            (talent_id !== 1006 || sex),
        );
    case 1010:
      // 名器系
      return new Array(7)
        .fill(0)
        .map((_, i) => i + 1010)
        .filter(
          (talent_id) =>
            (talent_id !== 1011 || sex - 1) &&
            (talent_id !== 1014 || sex) &&
            (talent_id !== 1015 || sex - 1),
        );
  }
}

/**
 * @param {number} love
 * @param {number} chara_id
 * @returns {string}
 */
function get_love_mark(love, chara_id) {
  if (sys_check_hide_relation_and_love(chara_id)) {
    return '？';
  }
  let level = 0;
  while (love >= level_and_desc.love.border[level]) {
    level++;
  }
  if (sys_check_limit_relation_and_love(chara_id)) {
    level = Math.min(level, 1);
  }
  return level_and_desc.love.mark[level];
}

/**
 * @param {number} relation
 * @param {number} chara_id
 * @returns {string}
 */
function get_relation_mark(relation, chara_id) {
  if (sys_check_hide_relation_and_love(chara_id)) {
    return '？';
  }
  const val =
    relation !== undefined ? relation : era.get(`relation:${chara_id}:0`);
  let level = 0;
  while (val > level_and_desc.relation.border[level]) {
    level++;
  }
  return level_and_desc.relation.mark[level];
}

function get_trainer_level() {
  const honour = era.get('flag:当前声望');
  if (honour <= 0) {
    return -1;
  }
  let level = 0;
  while (honour >= level_and_desc.honour.border[level]) {
    level++;
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
    return level_and_desc.attr_score[Math.floor(attr / 50)] || 'US';
  },
  get_breast_cup,
  /** @param {number} [_weeks] */
  get_celebration(_weeks) {
    const weeks = ((_weeks || era.get('flag:当前回合数')) - 1) % 48;
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
  /**
   * @param {number} chara_id
   * @param {boolean} [is_number]
   * @returns {number|string}
   */
  get_chara_score(chara_id, is_number) {
    let score = era.get(`exp:${chara_id}:技能评价分`);
    score += attr_names.reduce(
      (s, e) => s + get_attr_score(era.get(`base:${chara_id}:${e}`)),
      0,
    );
    if (is_number) {
      return score;
    }
    let scoreLevel = 0;
    while (score >= level_and_desc.chara_score.border[scoreLevel]) {
      scoreLevel++;
    }
    return level_and_desc.chara_score.mark[scoreLevel];
  },
  /**
   * @param {number} chara_id
   * @returns {{content:string,[color]:string,display:string,[opacity]:number}[]}
   */
  get_ero_status(chara_id) {
    const status_list = [];
    const sex_state = chara_id
      ? [penis_state.chara, virgin_state.chara]
      : [penis_state.player, virgin_state.player];
    if (era.get('tflag:主导权') === chara_id) {
      status_list.push({ color: buff_colors[1], content: '主导' });
    }
    if (get_penis_size(chara_id) && era.get(`talent:${chara_id}:童贞`)) {
      status_list.push({
        color: buff_colors[2],
        content: sex_state[0][era.get(`talent:${chara_id}:童贞`)],
      });
    }
    if (
      era.get(`cflag:${chara_id}:阴道尺寸`) &&
      era.get(`talent:${chara_id}:处女`)
    ) {
      status_list.push({
        color: buff_colors[2],
        content: sex_state[1][era.get(`talent:${chara_id}:处女`)],
      });
    }
    if (era.get(`tcvar:${chara_id}:发情`)) {
      status_list.push({
        color: buff_colors[2],
        content: '发情！',
        key: '发情',
      });
    }
    if (era.get(`base:${chara_id}:性欲`) >= lust_border.want_sex) {
      status_list.push({
        color: buff_colors[2],
        content: '焦躁！',
        key: '焦躁',
      });
    }
    if (
      era.get(`status:${chara_id}:马跳S`) ||
      era.get(`status:${chara_id}:沉睡`)
    ) {
      status_list.push({
        color: buff_colors[2],
        content: '沉睡！',
        key: '沉睡',
      });
    } else if (era.get(`tcvar:${chara_id}:脱力`)) {
      status_list.push({
        color: buff_colors[2],
        content: '脱力！',
        key: '脱力',
      });
    }
    if (
      era.get(`cflag:${chara_id}:阴道尺寸`) &&
      era.get(`ex:${chara_id}:阴道撕裂`)
    ) {
      status_list.push({
        color: buff_colors[3],
        content: '膣撕裂！',
        key: '膣撕裂',
      });
    }
    if (era.get(`ex:${chara_id}:肛门撕裂`)) {
      status_list.push({
        color: buff_colors[3],
        content: '肛撕裂！',
        key: '肛撕裂',
      });
    }
    if (check_erect(chara_id)) {
      status_list.push({
        color: buff_colors[2],
        content: '勃起！',
        key: '勃起',
      });
    }
    if (check_lubrication(chara_id, part_enum.breast)) {
      status_list.push({ color: buff_colors[2], content: '胸润滑' });
    }
    if (
      era.get(`cflag:${chara_id}:阴道尺寸`) &&
      check_lubrication(chara_id, part_enum.virgin)
    ) {
      status_list.push({ color: buff_colors[2], content: '膣润滑' });
    }
    if (check_lubrication(chara_id, part_enum.anal)) {
      status_list.push({ color: buff_colors[2], content: '肛润滑' });
    }
    if (era.get(`tcvar:${chara_id}:乳突`)) {
      status_list.push({
        color: buff_colors[2],
        content: '乳突！',
        key: '乳突',
      });
    }
    const mark_level = chara_id ? era.get(`mark:${chara_id}:淫纹`) : 3;
    if (mark_level >= 2 && era.get(`status:${chara_id}:排卵期`)) {
      status_list.push({ color: buff_colors[2], content: '危险期' });
    }
    sys_get_item_status(chara_id, status_list);
    if (era.get(`talent:${chara_id}:泌乳`)) {
      status_list.push({ color: buff_colors[2], content: '泌乳' });
    }
    if (era.get(`tequip:${chara_id}:眼罩`) !== -1) {
      status_list.push({ color: buff_colors[0], content: '眼罩' });
    }
    if (era.get(`tequip:${chara_id}:项圈`) !== -1) {
      status_list.push({ color: buff_colors[0], content: '项圈' });
    }
    if (era.get(`tcvar:${chara_id}:避孕套`)) {
      status_list.push({ color: buff_colors[0], content: '避孕套' });
    }
    if (
      era.get(`status:${chara_id}:反避孕套`) &&
      era.get(`cflag:${chara_id}:子宫内精液`)
    ) {
      status_list.push({
        color: buff_colors[2],
        content: '避孕套溶解剂！',
        key: '避孕套溶解剂',
      });
    }
    if (era.get(`status:${chara_id}:短效避孕药`)) {
      status_list.push({ color: buff_colors[0], content: '避孕' });
    }
    const orgasm_denial = era.get(`ex:${chara_id}:寸止`);
    if (orgasm_denial) {
      status_list.push({
        color: buff_colors[2],
        content: `寸止(${orgasm_denial})`,
        key: '寸止',
      });
    }
    const orgasm_stop = era.get(`tcvar:${chara_id}:高潮阻碍`);
    if (orgasm_stop) {
      status_list.push({
        color: buff_colors[2],
        content: '绝顶控制！',
        key: '绝顶控制',
        opacity: orgasm_stop > 1 ? 1 : 0.5,
      });
    }
    if (
      era.get(`cflag:${chara_id}:妊娠阶段`) >> pregnant_stage_enum.embryo &&
      (era.get(`cflag:${chara_id}:妊娠回合计时`) ||
        (chara_id && mark_level >= 2))
    ) {
      status_list.push({
        color: buff_colors[0],
        content: '有孕',
      });
    } else if (era.get(`status:${chara_id}:经期`)) {
      status_list.push({ color: buff_colors[2], content: '经期' });
    }
    const lost_mind = era.get(`tcvar:${chara_id}:失神`);
    if (lost_mind) {
      status_list.push({
        color: buff_colors[2],
        content: '失神！',
        key: '失神',
        opacity: lost_mind > 1 ? 1 : 0.5,
      });
    }
    const last = era.get(`tcvar:${chara_id}:余韵`);
    if (last) {
      status_list.push({
        color: buff_colors[2],
        content: '余韵！',
        key: '余韵',
        opacity: last > 1 ? 1 : 0.5,
      });
    }
    if (era.get(`tcvar:${chara_id}:阴道扩张`)) {
      status_list.push({
        color: buff_colors[2],
        content: '膣扩张',
        opacity: 0.5,
      });
    }
    if (era.get(`tcvar:${chara_id}:肛门扩张`)) {
      status_list.push({
        color: buff_colors[2],
        content: '肛扩张',
        opacity: 0.5,
      });
    }
    const penis_disabled = era.get(`tcvar:${chara_id}:不应期`);
    if (penis_disabled) {
      status_list.push({
        color: buff_colors[0],
        content: '贤者',
        opacity: penis_disabled > 1 ? 1 : 0.5,
      });
    }
    return status_list.map((e) => {
      let temp;
      if ((temp = status_desc[e.key || e.content])) {
        e.title = `[${e.key || e.content}]：${temp}`;
      }
      e.display = 'inline-block';
      e.content = `[${e.content}]`;
      delete e.key;
      return e;
    });
  },
  get_filtered_talents,
  /** @param {number} chara_id */
  get_love_border(chara_id) {
    const love = era.get(`love:${chara_id}`) || 0;
    let level = 0;
    while (love >= level_and_desc.love.border[level]) {
      level++;
    }
    return level_and_desc.love.border[level];
  },
  /**
   * @param {number} chara_id
   * @returns {string[]}
   */
  get_love_info(chara_id) {
    if (!chara_id) {
      return ['-'];
    }
    if (sys_check_hide_relation_and_love(chara_id)) {
      return ['？', '(?)'];
    }
    if (sys_check_limit_relation_and_love(chara_id)) {
      const love = Math.min(era.get(`love:${chara_id}`), 24);
      return [get_love_mark(love, chara_id), `(${love})`];
    }
    const love = era.get(`love:${chara_id}`);
    return [get_love_mark(love, chara_id), `(${love})`];
  },
  get_love_mark,
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
   * @param {number} chara_id
   * @param {number} [_target]
   * @returns {string[]}
   */
  get_relation_info(chara_id, _target) {
    let target = _target;
    if (!chara_id) {
      return ['-'];
    }
    if (!target) {
      target = 0;
    }
    if (sys_check_hide_relation_and_love(chara_id)) {
      return ['？', '(?)'];
    }
    const relation = era.get(`relation:${chara_id}:${target}`);
    return [get_relation_mark(relation, chara_id), `(${relation})`];
  },
  get_relation_mark,
  /** @param {number} chara_id */
  get_skin(chara_id) {
    return skin_desc[era.get(`cflag:${chara_id}:肤色深度`) + 1];
  },
  get_talent: (chara_id) =>
    [
      ...get_custom_mec(chara_id).get_talents(),
      ...(era.get(`cflag:${chara_id}:父方角色`) === 308 ||
      era.get(`cflag:${chara_id}:母方角色`) === 308
        ? [
            {
              color: buff_colors[1],
              content: '[梦之继承者]',
              key: '梦之继承者',
            },
          ]
        : []),
      ...new Array(2)
        .fill(0)
        .map((_, i) => {
          return {
            id: i,
            val: era.get(`talent:${chara_id}:${i + 1090}`),
          };
        })
        .filter((e) => e.val)
        .map((e) => era.get(`talentname:${e.id + 1090}`)),
      ...new Array(18)
        .fill(0)
        .map((_, i) => {
          return {
            id: i,
            val: era.get(`talent:${chara_id}:${i + 1070}`),
          };
        })
        .filter((e) => e.val)
        .map((e) => talent_names[e.id][(e.val + 1) / 2]),
    ].map((e) => {
      const { print_obj, key } =
        e instanceof Object
          ? { print_obj: e, key: e.key }
          : {
              print_obj: {
                content: `[${e}]`,
                display: 'inline-block',
              },
              key: e,
            };
      if (talent_desc[key]) {
        print_obj.title = `[${key}]：${talent_desc[key]}`;
      }
      return print_obj;
    }),
  get_talent_bust_size,
  /** @param {number} chara_id */
  get_train_time(chara_id) {
    if (!chara_id) {
      return '-';
    }
    const time = era.get(`cflag:${chara_id}:育成回合计时`);
    return `${['新秀', '经典', '资深'][Math.floor(time / 48)]}年 ${
      (Math.floor(time / 4) % 12) + 1
    } 月 第 ${(time % 4) + 1} 周`;
  },
  get_trainer_level,
  get_trainer_title() {
    const level = get_trainer_level();
    let title_level = level < 0 ? '失格' : level_and_desc.honour.mark[level];
    return `${title_level}${title_desc[era.get('flag:惩戒力度')]}`;
  },
  get_trainer_train_buff(chara_id) {
    const relation = chara_id ? era.get(`relation:${chara_id}:0`) : 225;
    if (relation <= -100) {
      return -5;
    } else if (relation < 0) {
      return -2.5;
    }
    let level = get_trainer_level(),
      ret = 0;
    ret +=
      level_and_desc.honour.buff[
        level +
          [304, 306].reduce(
            (p, a) =>
              p + (era.get(`cflag:${a}:招募状态`) === recruit_flags.yes),
            0,
          )
      ];
    if (relation > 525) {
      ret += 2.5;
    } else if (relation > 375) {
      ret += 1;
    } else if (relation < 225) {
      ret *= relation / 225;
    }
    return ret;
  },
  get_xp(chara_id) {
    if (era.get(`cflag:${chara_id}:成长阶段`) < 2) {
      return ['……'];
    }
    const show_all_body =
        !chara_id || era.get('status:0:马语者') || era.get('status:0:透视镜片'),
      breast_talent = get_talent_bust_size(
        get_breast_cup(chara_id, show_all_body),
      ),
      talent_list = [];
    if (breast_talent) {
      talent_list.push(breast_talent_names[breast_talent + 1]);
    }
    if (
      chara_id &&
      era.get(`exp:${chara_id}:性爱次数`) ===
        era.get(`exp:${chara_id}:睡奸次数`) &&
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
    const sex = era.get(`cflag:${chara_id}:性别`);
    if (sex - 1) {
      if (era.get(`talent:${chara_id}:泌乳`) === 3) {
        talent_list.push('母乳体质');
      }
      if (era.get(`talent:${chara_id}:乳头类型`) === 2) {
        talent_list.push('凹陷乳头');
      }
      if (era.get(`talent:${chara_id}:隐形巨乳`) && breast_talent > 0) {
        talent_list.push('隐形巨乳');
      }
    }
    talent_list.push(
      ...get_filtered_talents(sex, 1010),
      ...get_filtered_talents(sex, 1000)
        .map((id) => {
          return {
            id,
            level: era.get(`talent:${chara_id}:${id}`),
          };
        })
        .filter((e) => e.level)
        .map(
          (e) => trained_talent_names[era.get(`talentname:${e.id}`)][e.level],
        ),
      ...new Array(3).fill(0).map((_, i) => 1050 + i),
    );
    const ero = era.get(`talent:${chara_id}:工口意愿`);
    if (ero) {
      talent_list.push(ero > 0 ? '好色' : '性保守');
    }
    talent_list.push(
      ...new Array(4).fill(0).map((_, i) => 1054 + i),
      ...new Array(8).fill(0).map((_, i) => 1060 + i),
    );
    return talent_list
      .map((e) => {
        if (typeof e === 'number') {
          return era.get(`talent:${chara_id}:${e}`)
            ? era.get(`talentname:${e}`).toUpperCase()
            : '';
        }
        return e;
      })
      .filter((e) => e)
      .map((e) => {
        const print_obj = {
          color: buff_colors[2],
          content: `[${e}]`,
          display: 'inline-block',
        };
        if (talent_desc[e]) {
          print_obj.title = `[${e}]：${talent_desc[e]}`;
        }
        return print_obj;
      });
  },
};
