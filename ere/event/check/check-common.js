const era = require('#/era-electron');

const {
  sys_check_cuckold,
  sys_check_yandere,
} = require('#/system/chara/sys-calc-cheat');
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
const CustomizedEvent = require('#/event/event-common');
const { add_event, cb_enum } = require('#/event/queue');

const { log_600m4 } = require('#/utils/value-utils');

const { get_chara_color } = require('#/data/chara-colors');
const { attr_change_colors } = require('#/data/color-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const { lust_border } = require('#/data/ero/orgasm-const');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const crazy_fans = require('#/data/event/crazy-fans');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const RaceInfo = require('#/data/race/model/race-info');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { pressure_border } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');

const aim_races = { [race_enum.begin_race]: 4 };

function common_no_action_check(cid) {
  return (
    era.get(`cflag:${cid}:成长阶段`) < 2 ||
    !era.get(`base:${cid}:精力`) ||
    !sys_check_awake(cid) ||
    !check_pregnant_unprotect(cid) ||
    !check_pregnant_unprotect(0) ||
    era.get(`cflag:${cid}:位置`) !== era.get('cflag:0:位置')
  );
}

/**
 * @typedef EduTrackerAim
 * @property {string} content
 */

/**
 * @typedef EduNormalAim
 * @property {number} check
 * @property {string} color
 * @property {string} current
 * @property {string} desc
 * @property {string} mark
 * @property {string} require
 * @property {boolean} [champion]
 * @property {boolean} [g1]
 */

/** @typedef {EduTrackerAim|EduNormalAim} EduAim */

/**
 * 定制化检查脚本，一般用于生成判定值、在各个判定节点进行事件判定（将事件对象 EventObject 添加到事件队列）
 */
class CustomizedCheck extends CustomizedEvent {
  static like_chara;
  static love_uma;
  static common_no_action_check = common_no_action_check;
  static get_custom_check;

  /**
   * 玩家出轨后进行检查
   * @param {number[]} partners 玩家的出轨对象列表
   * @param {boolean} is_aware 是否发现玩家出轨
   */
  check_after_betrayed(partners, is_aware) {}

  /**
   * 玩家被惩戒（黑暗交易）后进行检查
   * @param {number} level 惩戒等级，1-比赛用母马，2-泄欲用母马，3-繁殖用母马
   */
  check_after_punish(level) {}

  /**
   * 角色参赛后进行检查
   * @param {AfterRaceParams} extra_flag 赛后检查参数
   */
  check_after_race(extra_flag) {}

  /**
   * 角色育成结束后进行检查，主要用于检查称号条件完成情况
   * @param {boolean} aim_check 角色是否完成所有育成目标，一般用于成就检查
   * @returns {{c:string,n:string}[]} 角色获得的称号列表
   */
  check_and_get_titles(aim_check) {
    const ret = [];
    if (
      // CFLAGNAME:90 = 模版角色
      era.get(`cflag:${this.id}:90`) === -1 &&
      RaceHistory.get(this.id)
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

  /**
   * 角色出生后进行检查
   */
  check_birth() {}

  /**
   * 通过三女神祈祷或者月亮井吃圣疗完全恢复的时候进行检查
   * 可以清除专属状态并触发事件
   */
  check_lay_on_hands() {}

  /**
   * 角色爱慕达到升级门槛（49、74、89、99）时进行检查
   */
  check_love_events() {
    add_event(
      event_hooks.week_end,
      new EventObject(this.id, cb_enum.love).set_arg([
        era.get(`love:${this.id}`),
      ]),
    );
  }

  /**
   * 回合开始时进行检查
   */
  check_next_week() {
    // CFLAGNAME:1 = 种族
    if (this.id > 0 && era.get(`cflag:${this.id}:1`) > 0) {
      // CFLAGNAME:48 = 育成回合计时
      const edu_weeks = era.get(`cflag:${this.id}:48`);
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

  /**
   * 角色结束育成时进行检查，主要用于检查粉丝袭击结局的触发<br>
   * 返回角色的育成目标完成情况
   * @returns {EduAim[]} 角色的育成目标完成情况数组
   */
  check_palace_and_get_aims() {
    if (era.get(`relation:${this.id}:0`) <= 0) {
      crazy_fans.push(this.id);
    } else {
      let g1_count = 0;
      let g2_count = 0;
      let other_count = 0;
      RaceHistory.get(this.id)
        .get_values()
        .forEach((e) => {
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
        crazy_fans.push(this.id);
      }
    }
    return this.get_edu_aims();
  }

  /**
   * 重复育成时进行检查
   */
  check_second_chance() {}

  /**
   * 获取目标赛事字典<br>
   * 字典 key 是带有育成回合计时的赛事 ID（用 get_aim_race_index 生成）<br>
   * 字典值是一个二进制数
   * 二进制数的最低位表示是否有赛前事件，第二位表示是否有赛后事件
   * 该二进制数大于 0 时会自动注册
   * @returns {Record<string,number>} 目标赛事字典
   */
  get_aim_races() {
    return aim_races;
  }

  /**
   * 获取育成目标完成情况
   * @returns {EduAim[]}  角色的育成目标完成情况数组<br>
   * check 等于 1 时表示该项目标已完成，小于 1 时表示未完成，用与 1 的差值表示未完成的程度（用于育成结束时的好感惩罚）
   */
  get_edu_aims() {
    const buffer = [];
    const races = RaceHistory.get(this.id);
    buffer.push(check_aim_and_get_entry(races.get(), race_enum.begin_race));
    let g1_count = 0;
    let g2_count = 0;
    let other_count = 0;
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
      current: g1_count.toString(),
      desc: i18n().detail.edu_aim_common_desc_1,
      g1: true,
      mark:
        g1_count > 0
          ? i18n().detail.edu_aim_mark_done
          : i18n().detail.edu_aim_mark_no,
      require: '1',
    });
    buffer.push({
      check: Math.min(g2_count, 3) - 2,
      color: g2_count >= 3 ? attr_change_colors.up : attr_change_colors.down,
      current: g2_count.toString(),
      desc: i18n().detail.edu_aim_common_desc_2,
      mark:
        g2_count >= 3
          ? i18n().detail.edu_aim_mark_done
          : i18n().detail.edu_aim_mark_no,
      require: '3',
    });
    buffer.push({
      champion: true,
      check: Math.min(other_count, 5) - 4,
      color: other_count >= 5 ? attr_change_colors.up : attr_change_colors.down,
      current: other_count.toString(),
      desc: i18n().detail.edu_aim_common_desc_3,
      mark:
        other_count >= 5
          ? i18n().detail.edu_aim_mark_done
          : i18n().detail.edu_aim_mark_no,
      require: '5',
    });
    return buffer;
  }

  /**
   * 获取角色成就名
   * 在 i18n 下应该是一个成就ID
   * @returns {string} 角色成就名或角色成就ID
   */
  get_personal_achieve() {
    return this.get_personal_titles()[0];
  }

  /**
   * 获取角色专属动作，例如露娜的日月交替、三女神的随身祈祷
   * @returns {{name:string,handle:function():Promise}|{}}
   */
  get_personal_action() {
    return {};
  }

  /**
   * 获取角色专属称号列表
   * @returns {string[]} 角色专属称号列表
   */
  get_personal_titles() {
    // CSTRNAME:11 = 称号
    return [era.get(`staticcstr:${this.id}:11`)].filter((tid) => tid);
  }

  /**
   * 检查该赛事是否为目标赛事
   * @param {number} race 比赛 ID
   * @param {number} edu_weeks 参与该赛事的育成回合计时
   * @param {number} [rank] 在该赛事中的名次，仅在赛后事件检查可用
   * @returns {number}
   */
  is_aim_race(race, edu_weeks, rank) {
    return (
      this.get_aim_races()[`${edu_weeks}_${race}`] ||
      this.get_aim_races()[race] ||
      0
    );
  }

  /**
   * 检查是否发现玩家的出轨行为
   * @param {number[]} partners 玩家的出轨对象列表
   * @returns {boolean}
   */
  is_aware_unfaithful(partners) {
    const is_yandere = sys_check_yandere(this.id, (y) => y > 0);
    if (era.get('flag:不忠惩罚') === 0 && !is_yandere) {
      return false;
    }
    let ratio = 0.75 - 0.25 * era.get(`talent:${this.id}:洁净重视`);
    if (!sys_check_awake(this.id)) {
      ratio /= 2;
    }
    if (era.get(`cflag:${this.id}:位置`) !== era.get('cflag:0:位置')) {
      ratio /= 2;
    }
    if (is_yandere) {
      ratio *= 1 + era.get(`talent:${this.id}:病娇`);
    }
    return ratio >= 1 || Math.random() < ratio;
  }

  /**
   * 检查是否进行绑架与监禁（地下室）行为
   * @returns {boolean}
   */
  is_prison() {
    if (
      !era.get(`cflag:${this.id}:种族`) ||
      common_no_action_check(this.id) ||
      era.get('flag:当前位置') === location_enum.basement ||
      era.get('cflag:0:位置') !== 0 ||
      !era.get(`cflag:${this.id}:种族`) ||
      era.get(`mark:${this.id}:淫纹`) === 3
    ) {
      return false;
    }
    const love = era.get(`love:${this.id}`);
    const prison_limit = era.get('flag:极端行为限制');
    const relation = era.get(`relation:${this.id}:0`);
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

  /**
   * 检查是否进行睡奸行为
   * @returns {boolean}
   */
  is_rape_in_sleeping() {
    const inmon = CharaInmon.get(this.id);
    if (
      !era.get(`cflag:${this.id}:种族`) ||
      common_no_action_check(this.id) ||
      check_want_to_escape(this.id) ||
      inmon.slave > 0 ||
      inmon.on(plugin_enum.meek)
    ) {
      return false;
    }
    const love = era.get(`love:${this.id}`);
    const raping_limit = era.get('flag:极端行为限制') * 2;
    const punish_level = era.get('flag:惩戒力度');
    const relation = era.get(`relation:${this.id}:0`) || 0;
    const rape_buff =
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

  /**
   * 检查是否求爱
   * @returns {0|1|2} 0-不进行，1-进行，2-大成功（在玩家拒绝时会强奸玩家）
   */
  is_want_make_love() {
    const inmon = CharaInmon.get(this.id);
    const love = era.get(`love:${this.id}`);
    if (
      common_no_action_check(this.id) ||
      check_want_to_escape(this.id) ||
      inmon.on(plugin_enum.meek) ||
      love < 50
    ) {
      return 0;
    }
    let ratio =
      Math.log(Math.max(6 * love - era.get(`relation:${this.id}:0`), 1)) /
        log_600m4 +
      Math.pow(2, era.get(`base:${this.id}:性欲`) / 1250 - 8) *
        (0.7 + 0.1 * era.get(`mark:${this.id}:欢愉`)) +
      0.05 * era.get(`talent:${this.id}:工口意愿`) -
      0.5 * get_action_debuff(this.id);
    let is_cuckold = 0;
    if (era.get('flag:床伴') > 0 && sys_check_cuckold(this.id, inmon)) {
      ratio += is_cuckold = 0.5;
    }
    ratio *= (3 - era.get(`mark:${this.id}:反抗`)) / 3;
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
      }(好色)+${is_cuckold}(绿帽癖)-${0.5 * get_action_debuff(this.id)}(行动debuff)`,
    );
    if (ratio >= 1 || dice < ratio) {
      if (inmon.slave > 0) {
        return 1;
      }
      const great_success =
        MejiroCity.instance().get_want_sex_buff(this.id) ||
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
