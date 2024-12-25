const era = require('#/era-electron');

const { sys_change_pressure } = require('#/system/sys-calc-base-cflag');
const {
  sys_check_hide_relation_and_love,
  sys_check_limit_relation_and_love,
  sys_check_remote,
} = require('#/system/sys-calc-chara-param');
const sys_filter_chara = require('#/system/sys-filter-chara');

const CustomizedCheck = require('#/event/check/check-common');
const { get_custom_check } = require('#/event/check/check-factory');
const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { attr_change_colors, palam_colors } = require('#/data/color-const');
const { love_colors, relation_colors } = require('#/data/const.json');
const recruit_flags = require('#/data/event/recruit-flags');
const {
  get_love_border,
  get_love_mark,
  get_relation_mark,
} = require('#/data/info-generator');
const LimitLoveStatus = require('#/data/love-limit-status');

/**
 * @param {number} chara_id
 * @param {number} new_love
 */
async function punish_unfaithful(chara_id, new_love) {
  const punish_option = era.get('flag:不忠惩罚'),
    me = get_chara_talk(0),
    temp_chara_list = sys_filter_chara(
      'cflag',
      '招募状态',
      recruit_flags.yes,
    ).filter(
      (e) =>
        e > 0 &&
        e !== chara_id &&
        era.get(`cflag:${e}:位置`) === era.get('cflag:0:位置') &&
        era.get(`love:${e}`) >= 75 &&
        !era.get(`talent:${e}:绿帽癖`) &&
        get_custom_mec(e).is_anger_for_unfaithful([chara_id]) &&
        (punish_option || era.get(`talent:${chara_id}:病娇`)),
    );
  for (const c_id of temp_chara_list) {
    get_custom_check(c_id).check_after_betrayed([chara_id]);
    era.print([
      me.get_colored_name(),
      ' 的不忠让 ',
      get_chara_talk(c_id).get_colored_name(),
      ' 无比愤怒……',
    ]);
    sys_change_pressure(c_id, get_random_value(1000, 2000));
    like_chara(
      c_id,
      0,
      -get_random_value(
        100,
        200 +
          8 * (new_love - 75) +
          8 * (era.get(`love:${c_id}`) - 75) +
          100 * era.get(`talent:${c_id}:病娇`),
      ),
    );
  }
  temp_chara_list.length && (await era.waitAnyKey());
}

/**
 * @param {number} target the id of the character whose relation will be changed
 * @param {number} aim the id of the character that the target will change the relation between them
 * @param {number} val change value of relation
 * @param {boolean} [to_be_shown] if shown
 * @param {number} [extra_love]
 * @returns {boolean} if any output
 */
function like_chara(target, aim, val, to_be_shown, extra_love) {
  if (!target) {
    // 玩家对所有马娘好感默认最大
    return false;
  }
  let relation = era.get(`relation:${target}:${aim}`);
  relation = relation === undefined ? 75 : relation;
  let _val = val;
  let love_flag = 0;
  if (!aim) {
    if (_val > 0) {
      _val = Math.floor(
        Math.max(
          (_val *
            (10 + era.get(`talent:${target}:好感`)) *
            (100 +
              era.get('flag:好感上升加成') -
              25 * sys_check_remote(target) -
              50 * (era.get(`status:${target}:讨厌药`) > 0) +
              get_custom_mec(target).get_relation_buff())) /
            1000 +
            3 * era.get(`talent:${target}:自信程度`),
          1,
        ),
      );
      if (relation > 525) {
        love_flag = Math.floor(_val / 10);
      } else if (relation > 375) {
        love_flag = Math.floor(_val / 15);
      } else if (relation > 225) {
        love_flag = Math.floor(_val / 20);
      }
    } else if (_val < 0) {
      _val = Math.floor(
        Math.min(
          (_val *
            (100 -
              era.get('flag:好感上升加成') +
              50 * sys_check_remote(target) +
              50 * (era.get(`status:${target}:讨厌药`) > 0))) /
            100 +
            3 * era.get(`talent:${target}:自信程度`),
          -1,
        ),
      );
    }
  }
  if (era.get(`status:${target}:生日`)) {
    _val *= 2;
  }
  if (relation + _val > 600) {
    _val = 600 - relation;
  }
  if (relation + _val < -200) {
    _val = -200 - relation;
  }
  love_flag = Math.max(love_flag, extra_love || 0);
  let print_flag = false;
  if (_val !== 0) {
    const new_relation = era.set(`relation:${target}:${aim}`, relation + _val);
    const mark = get_relation_mark(new_relation, target);
    print_flag ||= to_be_shown !== false;
    print_flag &&
      era.print([
        get_chara_talk(target).get_colored_name(),
        ' 对 ',
        get_chara_talk(aim).get_colored_name(),
        ' 的好感',
        _val > 0
          ? {
              color: attr_change_colors.up,
              content: ' 提高 ',
            }
          : {
              color: attr_change_colors.down,
              content: ' 降低 ',
            },
        {
          content: `了 ${
            mark === '？' ? '?' : _val > 0 ? _val : -_val
          }！现在为：`,
        },
        {
          content: `${mark} (${mark === '？' ? '?' : new_relation})`,
          color: relation_colors[mark],
        },
      ]);
  }
  if (love_flag) {
    print_flag = love_uma(target, love_flag, to_be_shown) || print_flag;
  }
  return print_flag;
}

/**
 * @param {number} chara_id
 * @param {number} val
 * @param {boolean} [to_be_shown]
 * @returns {boolean}
 */
function love_uma(chara_id, val, to_be_shown) {
  const love = era.get(`love:${chara_id}`);
  if (
    chara_id === 0 ||
    val === 0 ||
    (love === 0 &&
      !era.get('flag:后代爱慕限制') &&
      era.get(`cflag:${chara_id}:父方角色`) >= 0) ||
    era.get(`status:${chara_id}:讨厌药`) > 0 ||
    !new LimitLoveStatus(chara_id).is_empty()
  ) {
    return false;
  }
  let _val = Math.floor(
    (val *
      (100 +
        era.get('flag:爱慕上升加成') +
        50 * era.get(`status:${chara_id}:爱意克制`) +
        get_custom_mec(chara_id).get_love_buff())) /
      100,
  );
  const force_limit = get_custom_mec(chara_id).get_love_limit(),
    border = force_limit || Math.max(get_love_border(chara_id), 50),
    love_limit = !era.get('flag:回合爱慕惩罚');
  if ((love_limit || force_limit) && love + _val >= border) {
    _val = border - 1 - love;
  }
  if (love + _val > 100) {
    _val = 100 - love;
  }
  if (_val === 0) {
    return false;
  }
  let new_val = era.add(`love:${chara_id}`, _val);
  let printed_new_val = new_val;
  let hide = sys_check_limit_relation_and_love(chara_id);
  if (hide && love < 24) {
    hide = false;
    printed_new_val = Math.min(printed_new_val, 24);
  }
  print_change(chara_id, love, printed_new_val, !hide && to_be_shown);
  if (
    love < 50 &&
    new_val >= 50 &&
    era.get(`cflag:${chara_id}:种族`) &&
    era.get(`talent:${chara_id}:病娇`) === 1
  ) {
    era.set(`status:${chara_id}:爱意克制`, 1);
  }
  if (
    !era.get(`cflag:${chara_id}:爱慕暂拒`) &&
    love_limit &&
    (new_val === 49 || new_val === 74 || new_val === 89 || new_val === 99)
  ) {
    (sys_check_hide_relation_and_love(chara_id) & 0b1) > 0 ||
      hide ||
      era.print([
        '和 ',
        get_chara_talk(chara_id).get_colored_name(),
        ' 的关系似乎可以更进一步了……',
      ]);
    get_custom_check(chara_id).check_love_events();
  }
  return true;
}

/**
 * @param {number} _from
 * @param {number} _to
 * @returns {string}
 */
function get_callname(_from, _to) {
  const callname = era.get(`callname:${_from}:${_to}`);
  if (callname instanceof Array) {
    return get_random_entry(callname);
  }
  if (callname === '-') {
    return era.get(`static:${_to}:callname`);
  }
  return callname;
}

/**
 * @param {number} chara_id
 * @param {number} old_val
 * @param {number} new_val
 * @param {boolean} [to_be_shown]
 * @returns {boolean|undefined}
 */
function print_change(chara_id, old_val, new_val, to_be_shown) {
  if (to_be_shown !== false && old_val !== new_val) {
    const mark = [
      get_love_mark(old_val, chara_id),
      get_love_mark(new_val, chara_id),
    ];
    era.print([
      get_chara_talk(chara_id).get_colored_name(),
      ' 对 ',
      get_chara_talk(0).get_colored_name(),
      ' 的爱慕',
      { content: ' 提高 ', color: love_colors[mark[0]] },
      '了 ',
      {
        content: mark[1] === '？' ? '?' : new_val - old_val,
        color: palam_colors.notifications[1],
      },
      '！现在为：',
      {
        content: `${mark[1]} (${mark[1] === '？' ? '?' : new_val})`,
        color: love_colors[mark[1]],
      },
    ]);
    return true;
  }
}

CustomizedCheck.like_chara = like_chara;
CustomizedCheck.love_uma = love_uma;

module.exports = {
  sys_change_status_by_base(chara_id) {
    !era.get(`base:${chara_id}:体力`) && era.set(`status:${chara_id}:沉睡`, 1);
  },
  sys_get_callname: get_callname,
  /**
   * @param {number} _from
   * @param {number} _to
   */
  sys_get_colored_callname(_from, _to) {
    return {
      color: get_chara_talk(_to < 0 ? _from : _to).color,
      content: get_callname(_from, _to),
      fontWeight: 'bold',
    };
  },
  sys_get_colored_full_callname(_from, _to) {
    const chara = get_chara_talk(_to < 0 ? _from : _to);
    let content;
    if (_from === _to) {
      content = '自己';
    } else {
      content = get_callname(_from, _to);
      if (content !== chara.actual_name) {
        content = `${content} (${chara.actual_name})`;
      }
    }
    return {
      color: chara.color,
      content,
      fontWeight: 'bold',
    };
  },
  sys_like_chara: like_chara,
  sys_love_uma: love_uma,
  /**
   * @param {number} chara_id
   * @returns {Promise<boolean>}
   */
  async sys_love_uma_in_event(chara_id) {
    if (era.get('flag:回合爱慕惩罚') || chara_id === 0) {
      return false;
    }
    const new_val = era.add(`love:${chara_id}`, 1);
    if (
      typeof era.get(`callname:${chara_id}:0`) === 'string' &&
      era.get(`callname:${chara_id}:0`).startsWith('训练员')
    ) {
      get_custom_mec(chara_id).set_callname();
    }
    if (
      new_val === 50 &&
      era.get(`cflag:${chara_id}:种族`) &&
      era.get(`talent:${chara_id}:病娇`) === 1
    ) {
      era.set(`status:${chara_id}:爱意克制`, 1);
    }
    if (
      sys_check_hide_relation_and_love(chara_id) ||
      sys_check_limit_relation_and_love(chara_id)
    ) {
      return false;
    }
    era.println();
    print_change(chara_id, new_val - 1, new_val);
    era.set(`cflag:${chara_id}:爱慕暂拒`, 0);
    await get_chara_talk(0).say_and_wait('已经不能回头了……', true);
    new_val >= 75 && (await punish_unfaithful(chara_id, new_val));
    return true;
  },
  sys_punish_unfaithful: punish_unfaithful,
};
