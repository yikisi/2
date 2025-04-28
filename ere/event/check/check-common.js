const era = require('#/era-electron');

const { sys_check_yandere } = require('#/system/chara/sys-calc-cheat');
const {
  check_pregnant_unprotect,
  check_want_to_escape,
} = require('#/system/ero/sys-calc-ero-status');
const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const MejiroCity = require('#/page/mejiro/mejiro-common');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_action_debuff = require('#/event/check/snippets/get-action-debuff');
const { add_event, cb_enum } = require('#/event/queue');

const { log_600m4 } = require('#/utils/value-utils');

const { get_chara_color } = require('#/data/chara-colors');
const { attr_change_colors } = require('#/data/color-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const { lust_border } = require('#/data/ero/orgasm-const');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const CrazyFans = require('#/data/event/crazy-fans');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const RaceInfo = require('#/data/race/model/race-info');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { pressure_border } = require('#/data/train-const');

const aim_races = { [race_enum.begin_race]: 4 };

function common_no_action_check(chara_id) {
  return (
    era.get(`cflag:${chara_id}:成长阶段`) < 2 ||
    !era.get(`base:${chara_id}:精力`) ||
    !sys_check_awake(chara_id) ||
    !check_pregnant_unprotect(chara_id) ||
    !check_pregnant_unprotect(0) ||
    era.get(`cflag:${chara_id}:位置`) !== era.get('cflag:0:位置')
  );
}

class CustomizedCheck {
  static like_chara;
  static love_uma;
  static common_no_action_check = common_no_action_check;

  constructor(chara_id) {
    this.id = chara_id;
  }

  get_this() {
    return this;
  }

  /** @param {number[]} partners */
  // eslint-disable-next-line no-unused-vars
  check_after_betrayed(partners) {}

  /** @param {number} level */
  // eslint-disable-next-line no-unused-vars
  check_after_punish(level) {}

  /** @param {AfterRaceParams} extra_flag */
  // eslint-disable-next-line no-unused-vars
  check_after_race(extra_flag) {}

  /**
   * @param {boolean} aim_check
   * @returns {{c:string,n:string}[]}
   */
  check_and_get_titles(aim_check) {
    const ret = [];
    if (
      era.get(`cflag:${this.id}:模版角色`) === -1 &&
      new RaceHistory(this.id)
        .get_values()
        .filter(
          (e) =>
            e.rank === 1 && race_infos[e.race].race_class === class_enum.G1,
        ).length >= 6
    ) {
      ret.push({
        c: get_chara_color(this.id),
        n: this.get_personal_titles()[0],
      });
      aim_check && sys_personal_achievement.set(this.id, 1);
    }
    return ret;
  }

  check_birth() {}

  check_love_events() {
    add_event(
      event_hooks.week_end,
      new EventObject(this.id, cb_enum.love).set_arg([
        era.get(`love:${this.id}`),
      ]),
    );
  }

  check_next_week() {
    if (this.id > 0 && era.get(`cflag:${this.id}:种族`) > 0) {
      const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
      if (edu_weeks < 3 * 48) {
        if (edu_weeks === 47 + 29 || edu_weeks === 95 + 29) {
          add_event(
            event_hooks.week_start,
            new EventObject(this.id, cb_enum.edu, true).set_arg(edu_weeks),
          );
        }
        check_and_register_aim_race(this.id, this.get_aim_races(), edu_weeks);
      } else if (edu_weeks === 143 + 9) {
        add_event(
          event_hooks.week_start,
          new EventObject(this.id, cb_enum.edu).set_arg('palace'),
        );
      }
    }
  }

  /** @returns {{check:number,color:string,content:string}[]} */
  check_palace_and_get_aims() {
    if (era.get(`relation:${this.id}:0`) <= 0) {
      new CrazyFans().push(this.id);
    } else {
      let g1_count = 0,
        g2_count = 0,
        other_count = 0;
      new RaceHistory(this.id).get_values().forEach((e) => {
        const info = race_infos[e.race];
        if (info.race_class === RaceInfo.class_enum.G1) {
          g1_count += e.rank <= 5;
        } else if (info.race_class === RaceInfo.class_enum.G2) {
          g2_count += e.rank <= 3;
        } else if (e.race !== race_enum.begin_race) {
          other_count += e.rank === 1;
        }
      });
      if (!g1_count && g2_count < 3 && other_count < 5) {
        new CrazyFans().push(this.id);
      }
    }
    return this.get_edu_aims();
  }

  check_second_chance() {}

  /** @returns {Record<string,number>} */
  get_aim_races() {
    return aim_races;
  }

  /** @returns {{check:number,color:string,content:string}[]} */
  get_edu_aims() {
    const buffer = [];
    const races = new RaceHistory(this.id);
    buffer.push(check_aim_and_get_entry(races.get(), race_enum.begin_race));
    let g1_count = 0,
      g2_count = 0,
      other_count = 0;
    races.get_values().forEach((e) => {
      const info = race_infos[e.race];
      if (info.race_class === class_enum.G1) {
        g1_count += e.rank <= 5;
      }
      if (info.race_class <= class_enum.G2) {
        g2_count += e.rank <= 3;
      }
      if (e.race !== race_enum.begin_race) {
        other_count += e.rank === 1;
      }
    });
    buffer.push({
      check: Math.min(g1_count, 1),
      color: g1_count > 0 ? attr_change_colors.up : attr_change_colors.down,
      content: `一场G1比赛 入着 ${g1_count}/1 ${g1_count > 0 ? '✔' : '✘'}`,
    });
    buffer.push({
      check: Math.min(g2_count, 3) - 2,
      color: g2_count >= 3 ? attr_change_colors.up : attr_change_colors.down,
      content: `三场G2以上比赛 前三名 ${g2_count}/3 ${g2_count >= 3 ? '✔' : '✘'}`,
    });
    buffer.push({
      check: Math.min(other_count, 5) - 4,
      color: other_count >= 5 ? attr_change_colors.up : attr_change_colors.down,
      content: `五场比赛 1着 ${other_count}/5 ${other_count >= 5 ? '✔' : '✘'}`,
    });
    return buffer;
  }

  /** @returns {{name:string,handle:function():Promise}|{}} */
  get_personal_action() {
    return {};
  }

  /** @returns {string[]} */
  get_personal_titles() {
    return [era.get(`staticcstr:${this.id}:称号`)].filter((e) => e);
  }

  /**
   * @param {number} race
   * @param {number} edu_weeks
   * @param {number} [rank]
   * @returns {number}
   */
  // eslint-disable-next-line no-unused-vars
  is_aim_race(race, edu_weeks, rank) {
    return (
      this.get_aim_races()[`${edu_weeks}_${race}`] || this.get_aim_races()[race]
    );
  }

  /** @returns {boolean} */
  is_prison() {
    if (
      common_no_action_check(this.id) ||
      era.get('flag:当前位置') === location_enum.basement ||
      era.get('cflag:0:位置') !== 0 ||
      !era.get(`cflag:${this.id}:种族`) ||
      era.get(`mark:${this.id}:淫纹`) === 3
    ) {
      return false;
    }
    const love = era.get(`love:${this.id}`),
      prison_limit = era.get('flag:极端行为限制'),
      relation = era.get(`relation:${this.id}:0`);
    let delta = love * prison_limit - relation;
    if (!prison_limit || love < 50 || delta < 0) {
      return false;
    }
    let percentage;
    if (relation < 0) {
      // 好感在0以下必然地下室
      percentage = 1;
    } else {
      percentage =
        (delta > 0) *
        (0.05 +
          // 地下室限制最大倍率3倍，3*100-0=300
          (delta >= 300 ? 1 : Math.pow(2, delta / 30 - 10)) +
          0.1 * era.get(`status:${this.id}:爱意克制`) -
          0.25 * get_action_debuff(this.id));
    }
    switch (era.get('flag:惩戒力度')) {
      case 2:
        percentage /= 10;
        break;
      case 3:
        percentage /= 20;
    }
    const dice = Math.random();
    if (relation < 0) {
      era.logger.debug(
        `角色 ${this.id} 地下室：${(percentage * 100).toFixed(2)}% 掷骰：${dice} 计算：1=(好感低于0)`,
      );
    } else {
      era.logger.debug(
        `角色 ${this.id} 地下室：${(percentage * 100).toFixed(2)}% 掷骰：${dice} 计算：${
          percentage
        }=${delta > 0}(开关)*(0.05(基础)+${
          delta >= 300 ? 1 : Math.pow(2, delta / 30 - 10)
        }(好感爱慕)+${
          0.1 * era.get(`status:${this.id}:爱意克制`)
        }(爱意克制)-${0.25 * get_action_debuff(this.id)}(行动debuff))`,
      );
    }
    return percentage >= 1 || dice < percentage;
  }

  /** @returns {boolean} */
  is_rape_in_sleeping() {
    const inmon = CharaInmon.get(this.id);
    if (
      common_no_action_check(this.id) ||
      check_want_to_escape(this.id) ||
      inmon.slave > 0 ||
      inmon.on(plugin_enum.meek)
    ) {
      return false;
    }
    const love = era.get(`love:${this.id}`),
      raping_limit = era.get('flag:极端行为限制') * 2,
      punish_level = era.get('flag:惩戒力度'),
      relation = era.get(`relation:${this.id}:0`) || 0,
      rape_buff =
        0.5 * era.get('item:透明棉被') +
        MejiroCity.instance().get_rape_buff(this.id);
    let delta = love * raping_limit - relation;
    if (
      punish_level <= 1 &&
      !era.get(`status:${this.id}:爱意克制`) &&
      (era.get('flag:当前位置') === location_enum.basement ||
        love < 50 ||
        (!rape_buff && (!raping_limit || delta < 0)))
    ) {
      return false;
    }
    if (delta < 0) {
      delta = 0;
    }
    let ratio =
      Math.pow(2, Math.min(delta / 6 - 100, 0)) * 0.3 +
      Math.pow(2, era.get(`base:${this.id}:性欲`) / 2000 - 5) *
        (0.7 + 0.1 * era.get(`mark:${this.id}:欢愉`)) +
      0.05 * era.get(`talent:${this.id}:工口意愿`) +
      rape_buff +
      0.2 * era.get(`status:${this.id}:爱意克制`) -
      0.5 * get_action_debuff(this.id);
    if (punish_level >= 2) {
      ratio += 0.3;
    }
    const dice = Math.random();
    era.logger.debug(
      `角色 ${this.id} 睡奸：${(ratio * 100).toFixed(2)}%；掷骰：${dice} 计算：
    ${ratio}=${
      Math.pow(2, Math.min(delta / 6 - 100, 0)) * 0.3
    }(好感爱慕)+${Math.pow(
      2,
      era.get(`base:${this.id}:性欲`) / 2000 - 5,
    )}(性欲)*(0.7+${0.1 * era.get(`mark:${this.id}:欢愉`)}(欢愉))+${
      0.05 * era.get(`talent:${this.id}:工口意愿`)
    }(好色)+${0.5 * era.get('item:透明棉被')}(透明棉被)+${MejiroCity.instance().get_rape_buff(
      this.id,
    )}(目白城)+${0.2 * era.get(`status:${this.id}:爱意克制`)}(爱意克制)-${
      0.5 * get_action_debuff(this.id)
    }(行动debuff)`,
    );
    return ratio >= 1 || dice < ratio;
  }

  /** @returns {0|1|2} */
  is_want_make_love() {
    const inmon = CharaInmon.get(this.id);
    if (
      common_no_action_check(this.id) ||
      check_want_to_escape(this.id) ||
      inmon.on(plugin_enum.meek)
    ) {
      return 0;
    }
    const love = era.get(`love:${this.id}`);
    let ratio = 0;
    if (love >= 50) {
      ratio =
        Math.log(Math.max(6 * love - era.get(`relation:${this.id}:0`), 1)) /
          log_600m4 +
        Math.pow(2, era.get(`base:${this.id}:性欲`) / 1250 - 8) *
          (0.7 + 0.1 * era.get(`mark:${this.id}:欢愉`)) +
        0.05 * era.get(`talent:${this.id}:工口意愿`) -
        0.5 * get_action_debuff(this.id);
      ratio *= (3 - era.get(`mark:${this.id}:反抗`)) / 3;
    }
    const dice = Math.random();
    era.logger.debug(
      `角色 ${this.id} 求爱：${(ratio * 100).toFixed(2)}%；掷骰：${dice} 计算：${
        ratio
      }=${
        Math.log(Math.max(6 * love - era.get(`relation:${this.id}:0`), 1)) /
        log_600m4
      }(好感爱慕)+${Math.pow(
        2,
        era.get(`base:${this.id}:性欲`) / 1250 - 8,
      )}(性欲)*(0.7+${0.1 * era.get(`mark:${this.id}:欢愉`)}(欢愉))+${
        0.05 * era.get(`talent:${this.id}:工口意愿`)
      }(好色)-${0.5 * get_action_debuff(this.id)}(行动debuff)`,
    );
    if (ratio >= 1 || dice < ratio) {
      if (inmon.slave > 0) {
        return 1;
      }
      const great_success =
        MejiroCity.instance().get_want_sex_buff() ||
        (era.get(`talent:${this.id}:反抗意愿`) >= 0 &&
          (dice < 0.05 ||
            era.get('flag:惩戒力度') >= 2 ||
            era.get(`base:${this.id}:性欲`) >= lust_border.want_sex ||
            era.get(`base:${this.id}:压力`) >= pressure_border.apprehension ||
            sys_check_yandere(this.id, (e) => e === 2, inmon)));
      if (era.get(`status:${this.id}:爱意克制`) > 0) {
        if (!great_success) {
          return 0;
        }
        era.set(`status:${this.id}:爱意克制`, 0);
        return 2;
      }
      return 1 + great_success;
    }
    return 0;
  }
}

module.exports = CustomizedCheck;
