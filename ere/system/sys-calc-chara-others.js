const era = require('#/era-electron');

const { sys_check_yandere } = require('#/system/chara/sys-calc-cheat');
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

const get_display_name = require('#/utils/calc-display-name');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { attr_change_colors, palam_colors } = require('#/data/color-const');
const { love_colors, relation_colors } = require('#/data/color-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const recruit_flags = require('#/data/event/recruit-flags');
const {
  get_love_border,
  get_love_info,
  get_relation_info,
} = require('#/data/info-generator');
const LoveLimitStatus = require('#/data/love-limit-status');

const { i18n } = require('#/i18n/selector');

/**
 * @param {number} lover
 * @param {number} new_love
 */
async function punish_unfaithful(lover, new_love) {
  const punish_option = era.get('flag:不忠惩罚') === 1;
  const me = get_chara_talk(0);
  const c_list = sys_filter_chara(
    'cflag',
    '招募状态',
    recruit_flags.yes,
  ).filter(
    (cid) =>
      cid > 0 &&
      cid !== lover &&
      era.get(`love:${cid}`) >= 75 &&
      era.get(`cflag:${cid}:成长阶段`) >= 2,
  );
  for (const cid of c_list) {
    const is_aware =
      era.get(`cflag:${cid}:位置`) === era.get('cflag:0:位置') &&
      get_custom_mec(cid).is_anger_for_unfaithful([lover]) &&
      sys_check_yandere(cid, (y) => punish_option || y > 0);
    get_custom_check(cid).check_after_betrayed([lover], is_aware);
    if (is_aware) {
      era.print(
        i18n().get_ui_find_betrayed(
          get_chara_talk(cid).get_colored_name(),
          me.get_colored_name(),
        ),
      );
      sys_change_pressure(cid, get_random_value(1000, 2000));
      like_chara(
        cid,
        0,
        -get_random_value(
          100,
          200 +
            8 * (new_love - 75) +
            8 * (era.get(`love:${cid}`) - 75) +
            100 * era.get(`talent:${cid}:病娇`),
        ),
      );
    }
  }
  if (c_list.length > 0) {
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
  if (relation === void 0) {
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
          shield *= 1 + (love - 50) / 50;
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
          era.set(`cflag:${target}:好感盾`, 0);
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
    const _new = era.set(`relation:${target}:${aim}`, relation + val);
    if (shown) {
      const r_info = get_relation_info(target, aim, _new);
      ret = true;
      era.print(
        i18n().get_ui_change_relation(
          get_chara_talk(target).get_colored_name(),
          get_chara_talk(aim).get_colored_name(),
          val > 0
            ? {
                color: attr_change_colors.up,
                content: i18n().ui_increase,
              }
            : {
                color: attr_change_colors.down,
                content: i18n().ui_decrease,
              },
          r_info.level === -1 ? i18n().ui_unknown_value : val > 0 ? val : -val,
          {
            content: r_info.full(),
            color: relation_colors[r_info.level],
          },
        ),
      );
    }
  }
  if (extra_love >= 0 && love > 0 && love_uma(target, love, shown)) {
    ret = true;
  }
  return ret;
}

/**
 * @param {number} cid
 * @param {number} val
 * @param {boolean} [shown=true]
 * @returns {boolean}
 */
function love_uma(cid, val, shown = true) {
  const love = era.get(`love:${cid}`);
  if (
    cid === 0 ||
    val === 0 ||
    (love === 0 &&
      !era.get('flag:后代爱慕限制') &&
      era.get(`cflag:${cid}:父方角色`) >= 0) ||
    era.get(`status:${cid}:讨厌药`) > 0 ||
    !LoveLimitStatus.get(cid).is_empty()
  ) {
    return false;
  }
  const inmon = CharaInmon.get(cid);
  const coff =
    100 +
    era.get('flag:爱慕上升加成') +
    50 * era.get(`status:${cid}:爱意克制`) +
    get_custom_mec(cid).get_love_buff() +
    100 * inmon.on(plugin_enum.love_up) -
    80 * inmon.on(plugin_enum.love_d1) -
    100 * inmon.on(plugin_enum.love_d2);
  if (isNaN(val)) {
    era.logger.error(`角色 ${cid} 非有效爱慕值！`);
    return false;
  }
  val = Math.floor((val * coff) / 100);
  if (val > 6) {
    val = 6;
  }
  const force_limit = get_custom_mec(cid).get_love_limit();
  const border = force_limit || Math.max(get_love_border(cid), 50);
  const love_limit = !era.get('flag:回合爱慕惩罚');
  if ((love_limit || force_limit) && love + val >= border) {
    val = border - 1 - love;
  }
  if (love + val > 100) {
    val = 100 - love;
  }
  if (val === 0) {
    return false;
  }
  let new_val = era.add(`love:${cid}`, val);
  let printed_new_val = new_val;
  let hide = sys_check_limit_relation_and_love(cid);
  if (hide && love < 24) {
    hide = false;
    printed_new_val = Math.min(printed_new_val, 24);
  }
  shown &&= !hide;
  print_change(cid, love, printed_new_val, shown);
  if (
    love < 50 &&
    new_val >= 50 &&
    era.get(`cflag:${cid}:种族`) > 0 &&
    sys_check_yandere(cid, (y) => y === 1, inmon)
  ) {
    era.set(`status:${cid}:爱意克制`, 1);
  }
  if (
    love_limit &&
    (new_val === 49 || new_val === 74 || new_val === 89 || new_val === 99) &&
    era.get(`cflag:${cid}:爱慕暂拒`) !== new_val
  ) {
    if ((sys_check_hide_relation_and_love(cid) & 0b1) === 0 && shown) {
      era.print(
        i18n().get_trigger_love_event(get_chara_talk(cid).get_colored_name()),
      );
    }
    get_custom_check(cid).check_love_events();
  }
  return shown;
}

/**
 * @param {number} _from
 * @param {number} _to
 * @returns {string}
 */
function get_callname(_from, _to) {
  if (_to > 0) {
    get_chara_talk(_to);
  }
  let callname = era.get(`callname:${_from}:${_to}`);
  if (callname === '-') {
    return get_display_name(era.get(`static:${_to}:callname`));
  }
  if (Array.isArray(callname)) {
    callname = get_random_entry(callname);
  }
  return get_display_name(callname);
}

/**
 * @param {number} cid
 * @param {number} old_val
 * @param {number} new_val
 * @param {boolean} [shown=true]
 * @returns {boolean|undefined}
 */
function print_change(cid, old_val, new_val, shown = true) {
  if (shown && old_val !== new_val) {
    const love = [get_love_info(cid, old_val), get_love_info(cid, new_val)];
    era.print(
      i18n().get_ui_change_love(
        get_chara_talk(cid).get_colored_name(),
        get_chara_talk(0).get_colored_name(),
        { content: i18n().ui_increase, color: love_colors[love[0].level] },
        {
          content: love[1].level === -1 ? '?' : new_val - old_val,
          color: palam_colors.notifications[1],
        },
        {
          content: love[1].full(),
          color: love_colors[love[1].level],
        },
      ),
    );
    return true;
  }
}

CustomizedCheck.like_chara = like_chara;
CustomizedCheck.love_uma = love_uma;

module.exports = {
  sys_get_callname: get_callname,
  /**
   * @param {number} _from
   * @param {number} _to
   * @return {{color:string,content:string,fontWeight:'bold'}}
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
      content = i18n().name.self;
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
   * @param {number} cid
   * @returns {Promise<boolean>}
   */
  async sys_love_uma_in_event(cid) {
    if (era.get('flag:回合爱慕惩罚') > 0 || cid === 0) {
      return false;
    }
    const new_val = era.add(`love:${cid}`, 1);
    if (
      typeof era.get(`callname:${cid}:0`) === 'string' &&
      (era.get(`callname:${cid}:0`) === 'trainer_m' ||
        era.get(`callname:${cid}:0`) === 'trainer_f')
    ) {
      get_custom_mec(cid).set_callname();
    }
    if (
      new_val === 50 &&
      era.get(`cflag:${cid}:种族`) &&
      sys_check_yandere(cid, (y) => y === 1)
    ) {
      era.set(`status:${cid}:爱意克制`, 1);
    }
    if (era.get(`status:${cid}:爱意克制`) > 0 && new_val >= 75) {
      era.set(`status:${cid}:爱意克制`, 0);
    }
    if (
      sys_check_hide_relation_and_love(cid) ||
      sys_check_limit_relation_and_love(cid)
    ) {
      return false;
    }
    era.println();
    print_change(cid, new_val - 1, new_val);
    era.set(`cflag:${cid}:爱慕暂拒`, 0);
    const my_marks = new MyEduMarks();
    my_marks.pity = (my_marks.pity || []).filter((e) => e !== cid);
    await get_chara_talk(0).say_and_wait(i18n().ui_love_level_up, true);
    new_val >= 75 && (await punish_unfaithful(cid, new_val));
    return true;
  },
  sys_punish_unfaithful: punish_unfaithful,
};
