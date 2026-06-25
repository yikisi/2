const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_random_entry } = require('#/utils/list-utils');

const { get_chara_color } = require('#/data/chara-colors');
const KitaruEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-56');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { base_attr_list } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');

const aim_races = {};
aim_races[race_enum.begin_race] = 3;
aim_races[get_aim_race_index(race_enum.aoba_sho, 1)] = 0b11;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 0b11;
aim_races[get_aim_race_index(race_enum.kobe_hai, 1)] = 0b11;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 0b11;
aim_races[get_aim_race_index(race_enum.kink_sho, 2)] = 0b11;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 0b11;
//aim_races[get_aim_race_index(race_enum.tenn_sho, 1)] = 3; 暂时先不跑。
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 0b11;

module.exports = class extends CustomizedCheck {
  check_after_punish(level) {
    add_event(
      event_hooks.week_start,
      new EventObject(56, cb_enum.daily).set_arg(`p${level}`),
    );
  }

  check_after_race(extra) {
    const edu_marks = new KitaruEduMarks();
    const edu_weeks = era.get('cflag:56:育成回合计时');
    if (
      extra.contestants.find((e) => e.index_chara === 56).motivation === 2 &&
      race_infos[extra.race].race_class <= class_enum.G2
    ) {
      edu_marks.best_g2_count++;
    }
    switch (extra.race) {
      case race_enum.kiku_sho:
        if (extra.rank !== 1) {
          era.set('flag:强制BE', this.id);
        }
        break;
      case race_enum.takz_kin:
        if (edu_weeks > 96 && extra.rank !== 1) {
          era.set('flag:强制BE', this.id);
        }
        break;
      case race_enum.arim_kin:
        if (edu_weeks > 96 && extra.rank !== 1) {
          era.set('flag:强制BE', this.id);
        }
    }
    if (extra.rank === 1) {
      switch (extra.race) {
        case race_enum.begin_race:
          edu_marks.begin_race_end = 1;
          break;
        case race_enum.aoba_sho:
          edu_marks.begin_race_end = 2;
          break;
        case race_enum.toky_yus:
          edu_marks.begin_race_end = 3;
          break;
        case race_enum.kobe_hai:
          edu_marks.begin_race_end = 4;
          break;
        case race_enum.kiku_sho:
          edu_marks.begin_race_end = 5;
          break;
        case race_enum.kink_sho:
          edu_marks.begin_race_end = 6;
          break;
        case race_enum.takz_kin:
          if (edu_weeks > 96) {
            edu_marks.begin_race_end = 8;
          }
          break;
        case race_enum.arim_kin:
          if (edu_weeks > 96) {
            edu_marks.begin_race_end = 10;
          }
      }
    }
  }

  check_and_get_titles(aim_check) {
    const ret = [],
      race_list = RaceHistory.get(56).get_values(),
      kiku_sho_index = race_list.findIndex(
        (e) => e.race === race_enum.kiku_sho,
      );
    if (kiku_sho_index >= 0 && race_list[kiku_sho_index].rank === 1) {
      let count = 1;
      for (let i = kiku_sho_index - 1; i >= 0; --i) {
        if (race_infos[race_list[i].race].race_class <= class_enum.G2) {
          if (race_list[i].rank === 1) {
            count++;
          } else {
            break;
          }
        }
      }
      for (let i = kiku_sho_index + 1; i < race_list.length; ++i) {
        if (race_infos[race_list[i].race].race_class <= class_enum.G2) {
          if (race_list[i].rank === 1) {
            count++;
          } else {
            break;
          }
        }
      }
      if (new KitaruEduMarks().best_g2_count >= 15 && count >= 3) {
        ret.push({
          c: get_chara_color(this.id),
          n: this.get_personal_titles()[0],
        });
        aim_check && sys_personal_achievement.set(this.id, 1);
      }
    }
    return ret;
  }

  check_next_week() {
    if (era.get('cflag:56:招募状态') !== recruit_flags.yes) {
      return;
    }
    const edu_weeks = era.get('cflag:56:育成回合计时');
    const ebj_s = new EventObject(56, cb_enum.edu, true).set_arg(edu_weeks);
    const ebj = new EventObject(56, cb_enum.edu);
    const edu_marks = new KitaruEduMarks();
    const love = era.get('love:56');
    if (!edu_marks.love25 && love >= 25) {
      edu_marks.love25 = 1;
      add_event(
        event_hooks.out_start,
        new EventObject(56, cb_enum.love).set_arg(25),
      );
    }
    if (edu_weeks < 3 * 48) {
      if (love >= 25) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'hot_line',
          event_hooks.out_start,
          ebj,
        );
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'god_study',
          event_hooks.office_study,
          ebj,
        );
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'luck_name',
          event_hooks.office_study,
          ebj,
        );
      }
      if (love > 49) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'miso_fortune',
          event_hooks.office_cook,
          ebj,
        );
      }
      if (
        edu_marks.game_times === 5 &&
        era.get(`exp:56:性交次数`) - era.get('exp:56:睡奸次数') > 3 &&
        era.get('love:56') >= 75
      ) {
        edu_marks.game_times = 6;
        add_event(
          event_hooks.office_game,
          ebj.copy().set_arg('fortune_game_duel_2'),
        );
      }
      edu_marks.luck_train = get_random_entry(base_attr_list) + 1;
      switch (edu_weeks) {
        case 14: // 入局
          add_event(event_hooks.week_start, ebj_s);
          break;
        // 出道战前后剧情
        case 28: // 橱窗里的既视感
        case 35: // 旋风扫净
        case 38: // 收容！开运物品
        case 42: // 所谓白兴大人
        case 47 + 1: // 选召之人
        case 47 + 5: // 仪式理论 -> 这里解锁有关待兼福来上buff系统
          add_event(event_hooks.week_start, ebj_s);
          break;
        // 青叶赏前后剧情
        case 47 + 18: // 门槛前
          add_event(event_hooks.week_start, ebj_s);
          break;
        // 日本德比前后剧情
        case 47 + 21: //开运投射
        case 47 + 29: // 夏季合宿（经典年）
        case 47 + 32: // 坠入凡间的星
          add_event(event_hooks.week_start, ebj_s);
          break;
        // 神户新闻杯前后剧情
        case 47 + 39: // 两世之间
          add_event(event_hooks.week_start, ebj_s);
          break;
        // 菊花赏前后剧情
        case 47 + 41: // 神化
          if (
            check_aim_race(RaceHistory.get(56).get(), race_enum.kiku_sho, 1, 1)
          ) {
            add_event(event_hooks.week_start, ebj_s);
          }
          break;
        case 95 + 1: // 神乐
        case 95 + 6: // 圣瓦伦汀的局外人
          add_event(event_hooks.week_start, ebj_s);
          break;
        // 金鯱赏前后剧情
        case 95 + 11: // 不稳定星等
        case 95 + 12: // 落入鲸鱼之腹
        case 95 + 14: // 背负众人愿望的少女
          add_event(event_hooks.week_start, ebj_s);
          break;
        // 宝冢纪念前后剧情
        case 95 + 25: // 无愿之愿
        case 95 + 29: // 第二次夏季合宿
          add_event(event_hooks.week_start, ebj_s);
          break;
        case 95 + 31: // 林中参拜
        case 95 + 37: // 每个人的天命
          if (
            check_aim_race(RaceHistory.get(56).get(), race_enum.kiku_sho, 1, 1)
          ) {
            add_event(event_hooks.week_start, ebj_s);
          }
          break;
        case 95 + 48: // 摘下胜利之星 or 名叫待兼福来的星星
          add_event(event_hooks.celebration, ebj_s);
      }
      check_and_register_aim_race(56, aim_races, edu_weeks);
      if (era.get('status:56:运势依赖')) {
        add_event(event_hooks.week_start, ebj.copy().set_arg('fortune_week'));
      }
    } else if (edu_weeks === 143 + 1) {
      // Farewell Matikane……
      add_event(event_hooks.week_start, ebj_s);
      // 了局
      add_event(event_hooks.week_end, ebj_s);
    } else if (edu_weeks === 143 + 9) {
      // 两个世界的主人
      add_event(event_hooks.week_start, ebj_s.copy().set_arg('palace'));
    }
  }

  check_palace_and_get_aims() {
    const edu_marks = new KitaruEduMarks(),
      races = RaceHistory.get(this.id).get();
    if (
      check_aim_race(races, race_enum.takz_kin, 2, 1) &&
      check_aim_race(races, race_enum.arim_kin, 2, 1) &&
      check_aim_race(races, race_enum.kiku_sho, 1, 1)
    ) {
      // 两个世界的主人
      edu_marks.good_end = 1;
    }
    edu_marks.luck_train = 0;
    return super.check_palace_and_get_aims();
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [],
      races = RaceHistory.get(56).get();
    buffer.push({
      content: i18n().kojo[this.id].achieve_track_aim_template.replace(
        '%COUNT%',
        new KitaruEduMarks().best_g2_count.toString(),
      ),
    });
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.aoba_sho, 1, 20)); // 入着即可
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.kobe_hai, 1, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.kink_sho, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
    return buffer;
  }
};
