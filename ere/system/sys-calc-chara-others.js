const era = require('#/era-electron');

const {
  sys_check_cuckold,
  sys_check_yandere,
} = require('#/system/chara/sys-calc-cheat');
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
const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const recruit_flags = require('#/data/event/recruit-flags');
const {
  get_love_border,
  get_love_mark,
  get_relation_mark,
} = require('#/data/info-generator');
const LoveLimitStatus = require('#/data/love-limit-status');

/**
 * @param {number} id
 * @param {number} new_love
 */
async function punish_unfaithful(id, new_love) {
  const punish_option = era.get('flag:不忠惩罚') === 1,
    me = get_chara_talk(0),
    temp_chara_list = sys_filter_chara(
      'cflag',
      '招募状态',
      recruit_flags.yes,
    ).filter((e) => {
      return (
        e > 0 &&
        e !== id &&
        era.get(`cflag:${e}:位置`) === era.get('cflag:0:位置') &&
        era.get(`love:${e}`) >= 75 &&
        get_custom_mec(e).is_anger_for_unfaithful([id]) &&
        sys_check_yandere(e, (y) => punish_option || y > 0) &&
        !sys_check_cuckold(e)
      );
    });
  for (const c_id of temp_chara_list) {
    get_custom_check(c_id).check_after_betrayed([id]);
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
  if (temp_chara_list.length > 0) {
    await era.waitAnyKey();
  }
}

/**
 * @param {number} target the id of the character whose relation will be changed
 * @param {number} aim the id of the character that the target will change the relation between them
 * @param {number} val change value of relation
 * @param {boolean} [shown=true] if shown
 * @param {number} [extra_love=0]
 * @returns {boolean} if any output
 */
function like_chara(target, aim, val, shown = true, extra_love = 0) {
  if (!target) {
    // 玩家对所有马娘好感默认最大
    return false;
  }
  const inmon = CharaInmon.get(target);
  let relation = era.get(`relation:${target}:${aim}`);
  let love = 0;
  let coff = 100;
  if (relation === undefined) {
    relation = 75;
  }
  if (val > 0) {
    coff +=
      100 * inmon.on(plugin_enum.rel_gu) - 50 * inmon.on(plugin_enum.rel_gd);
    if (era.get(`status:${target}:生日`) > 0) {
      coff *= 2;
    }
  } else if (val < 0) {
    coff +=
      100 * inmon.on(plugin_enum.rel_lu) - 50 * inmon.on(plugin_enum.rel_ld);
  }
  if (!aim) {
    if (val > 0) {
      coff +=
        era.get('flag:好感上升加成') -
        25 * sys_check_remote(target) -
        50 * (era.get(`status:${target}:讨厌药`) > 0) +
        get_custom_mec(target).get_relation_buff();
    } else if (val < 0) {
      coff +=
        -era.get('flag:好感上升加成') +
        50 * sys_check_remote(target) +
        50 * (era.get(`status:${target}:讨厌药`) > 0);
    }
  }
  if (coff >= 0) {
    val *= coff / 100;
  }
  if (val > 0) {
    val = Math.floor(
      Math.max(val + 3 * era.get(`talent:${target}:自信程度`), 1),
    );
    let shield = 0;
    if (!aim) {
      if (relation > 525) {
        love = Math.floor(val / 10);
      } else if (relation > 375) {
        love = Math.floor(val / 15);
      } else if (relation > 225) {
        love = Math.floor(val / 20);
      }
    }
    if (relation + val > 600) {
      shield = relation + val - 600;
      val = 600 - relation;
    }
    if (!aim) {
      let temp = Math.floor(era.get(`cflag:${target}:好感盾`));
      if (shield > 0) {
        const love = era.get(`love:${target}`);
        if (love > 50) {
          shield *= (love - 50) / 50;
        }
        while (shield >= temp) {
          shield -= temp;
          temp = Math.floor(era.add(`cflag:${target}:好感盾`, 1));
        }
        era.add(`cflag:${target}:好感盾`, shield / temp);
      } else if (val < 0) {
        temp += val;
        if (temp >= 0) {
          era.set(`cflag:${target}:好感盾`, temp);
        } else {
          val = Math.ceil(temp);
        }
      }
    }
  } else if (val < 0) {
    val = Math.floor(Math.min(val, -1));
    if (relation + val < -200) {
      val = -200 - relation;
    }
  }
  love = Math.max(love, extra_love);
  let ret = false;
  if (val !== 0) {
    const new_relation = era.set(`relation:${target}:${aim}`, relation + val);
    const mark = get_relation_mark(new_relation, target);
    if (shown) {
      ret = true;
      era.print([
        get_chara_talk(target).get_colored_name(),
        ' 对 ',
        get_chara_talk(aim).get_colored_name(),
        ' 的好感',
        val > 0
          ? {
              color: attr_change_colors.up,
              content: ' 提高 ',
            }
          : {
              color: attr_change_colors.down,
              content: ' 降低 ',
            },
        {
          content: `了 ${mark === '？' ? '?' : val > 0 ? val : -val}！现在为：`,
        },
        {
          content: `${mark} (${mark === '？' ? '?' : new_relation})`,
          color: relation_colors[mark],
        },
      ]);
    }
  }
  if (love > 0 && love_uma(target, love, shown)) {
    ret = true;
  }
  return ret;
}

/**
 * @param {number} id
 * @param {number} val
 * @param {boolean} [shown=true]
 * @returns {boolean}
 */
function love_uma(id, val, shown = true) {
  const love = era.get(`love:${id}`);
  if (
    id === 0 ||
    val === 0 ||
    (love === 0 &&
      !era.get('flag:后代爱慕限制') &&
      era.get(`cflag:${id}:父方角色`) >= 0) ||
    era.get(`status:${id}:讨厌药`) > 0 ||
    !LoveLimitStatus.get(id).is_empty()
  ) {
    return false;
  }
  const inmon = CharaInmon.get(id);
  const coff =
    100 +
    era.get('flag:爱慕上升加成') +
    50 * era.get(`status:${id}:爱意克制`) +
    get_custom_mec(id).get_love_buff() +
    100 * inmon.on(plugin_enum.love_up) -
    50 * inmon.on(plugin_enum.love_d1) -
    100 * inmon.on(plugin_enum.love_d2);
  val = Math.floor((val * coff) / 100);
  if (val > 6) {
    val = 6;
  }
  const force_limit = get_custom_mec(id).get_love_limit(),
    border = force_limit || Math.max(get_love_border(id), 50),
    love_limit = !era.get('flag:回合爱慕惩罚');
  if ((love_limit || force_limit) && love + val >= border) {
    val = border - 1 - love;
  }
  if (love + val > 100) {
    val = 100 - love;
  }
  if (val === 0) {
    return false;
  }
  let new_val = era.add(`love:${id}`, val);
  let printed_new_val = new_val;
  let hide = sys_check_limit_relation_and_love(id);
  if (hide && love < 24) {
    hide = false;
    printed_new_val = Math.min(printed_new_val, 24);
  }
  shown &&= !hide;
  print_change(id, love, printed_new_val, shown);
  if (
    love < 50 &&
    new_val >= 50 &&
    era.get(`cflag:${id}:种族`) &&
    sys_check_yandere(id, (y) => y === 1, inmon)
  ) {
    era.set(`status:${id}:爱意克制`, 1);
  }
  if (
    love_limit &&
    (new_val === 49 || new_val === 74 || new_val === 89 || new_val === 99) &&
    era.get(`cflag:${id}:爱慕暂拒`) !== new_val
  ) {
    if ((sys_check_hide_relation_and_love(id) & 0b1) === 0 && shown) {
      era.print([
        '和 ',
        get_chara_talk(id).get_colored_name(),
        ' 的关系似乎可以更进一步了……',
      ]);
    }
    get_custom_check(id).check_love_events();
  }
  return shown;
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
 * @param {boolean} [shown=true]
 * @returns {boolean|undefined}
 */
function print_change(chara_id, old_val, new_val, shown = true) {
  if (shown && old_val !== new_val) {
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
   * @param {number} id
   * @returns {Promise<boolean>}
   */
  async sys_love_uma_in_event(id) {
    if (era.get('flag:回合爱慕惩罚') || id === 0) {
      return false;
    }
    const new_val = era.add(`love:${id}`, 1);
    if (
      typeof era.get(`callname:${id}:0`) === 'string' &&
      era.get(`callname:${id}:0`).startsWith('训练员')
    ) {
      get_custom_mec(id).set_callname();
    }
    if (
      new_val === 50 &&
      era.get(`cflag:${id}:种族`) &&
      sys_check_yandere(id, (y) => y === 1)
    ) {
      era.set(`status:${id}:爱意克制`, 1);
    }
    if (
      sys_check_hide_relation_and_love(id) ||
      sys_check_limit_relation_and_love(id)
    ) {
      return false;
    }
    era.println();
    print_change(id, new_val - 1, new_val);
    era.set(`cflag:${id}:爱慕暂拒`, 0);
    await get_chara_talk(0).say_and_wait('已经不能回头了……', true);
    new_val >= 75 && (await punish_unfaithful(id, new_val));
    return true;
  },
  sys_punish_unfaithful: punish_unfaithful,
};
