const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const FukukitaruEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-56');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 3;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 3;
aim_races[get_aim_race_index(race_enum.aoba_sho, 1)] = 3;
aim_races[get_aim_race_index(race_enum.kobe_hai, 1)] = 3;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 3;
aim_races[get_aim_race_index(race_enum.kink_sho, 2)] = 3;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 3;
//aim_races[get_aim_race_index(race_enum.tenn_sho, 1)] = 3; 暂时先不跑。
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 3;

module.exports = class extends CustomizedCheck {
  check_after_punish(level) {
    add_event(
      event_hooks.week_start,
      new EventObject(56, cb_enum.daily).set_arg(`p${level}`),
    );
  }

  check_after_race(extra_flag) {
    const edu_marks = new FukukitaruEduMarks();
    const edu_weeks = era.get('cflag:56:育成回合计时');
    if (
      extra_flag.contestants.find((e) => e.index_chara === 56).motivation ===
        2 &&
      race_infos[extra_flag.race].race_class <= class_enum.G2
    ) {
      new FukukitaruEduMarks().best_g2_count++;
    }

    if (
      (extra_flag.race === race_enum.kiku_sho && extra_flag.rank !== 1) ||
      (extra_flag.race === race_enum.takz_kin &&
        edu_weeks > 96 &&
        extra_flag.rank !== 1) ||
      (extra_flag.race === race_enum.arim_kin &&
        edu_weeks > 96 &&
        extra_flag.rank !== 1)
    ) {
      // 直接坏结局
      edu_marks.be_end_1 = 1;
      era.set('flag:强制BE', 56);
    }
  }

  check_and_get_titles(aim_check) {
    const ret = [],
      race_list = new RaceHistory(56).get_values(),
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
      if (new FukukitaruEduMarks().best_g2_count >= 15 && count >= 3) {
        ret.push({
          c: get_chara_talk(this.id),
          n: this.get_personal_titles()[0],
        });
        aim_check && sys_personal_achievement.set(this.id, 1);
      }
    }
    return ret;
  }

  check_next_week() {
    const edu_weeks = era.get('cflag:56:育成回合计时');
    const event_obj_special = new EventObject(56, cb_enum.edu, true);
    const event_obj = new EventObject(56, cb_enum.edu);
    const edu_marks = new FukukitaruEduMarks();
    const love = era.get('love:56');

    if (edu_marks.fans_thank < 1) {
      edu_marks.fortune_week = 0;
      add_event(event_hooks.week_start, event_obj_special);
    }

    if (edu_marks.last_edu !== edu_weeks) {
      edu_marks.luck_train = Math.floor(Math.random() * 5) + 1; // 我计划是在这里做一个随即的运势训练相关，之后可能会改成类狩猎笛或者可能的仪式系统也不一定。
      edu_marks.last_edu = edu_weeks;
    }

    if (edu_marks.RECTIME === 0) {
      edu_marks.RECTIME = era.get('cflag:56:育成回合计时') + 1;
    }

    if (edu_weeks < 3 * 48) {
      switch (edu_weeks) {
        case edu_marks.RECTIME: //窥视命运的少女 (已完成)
          add_event(event_hooks.week_start, event_obj_special);
          break;
        case 14:
          add_event(event_hooks.week_start, event_obj_special);
          break;
        // 出道战前后剧情
        case 28: //橱窗里的既视感 (已完成)
          add_event(event_hooks.week_start, event_obj_special);

          break;
        case 35: // 旋风扫净 (已完成)
          add_event(event_hooks.week_start, event_obj_special);
          break;
        case 38: // 收容！开运物品
          add_event(event_hooks.week_start, event_obj_special);
          break;
        case 42: //所谓白兴大人 (已完成)
          add_event(event_hooks.week_start, event_obj_special);
          break;
        case 52: // 仪式理论 - > 这里解锁有关待兼福来上buff系统
          add_event(event_hooks.week_start, event_obj_special);
          break;
        // 青叶赏前后剧情
        case 65: //门槛前(已完成) // 现用名
          add_event(event_hooks.week_start, event_obj_special);
          break;
        // 日本德比前后剧情
        case 68: //开运投射 (已完成)
          add_event(event_hooks.week_start, event_obj_special);
          break;
        case 76: // 76 第一次夏季合宿 (还没写) // 我觉得不太需要
          add_event(event_hooks.week_start, event_obj_special);
          break;
        case 79: // 坠入凡间的星星 (已完成)
          add_event(event_hooks.week_start, event_obj_special);
          break; // 神户新闻杯前后剧情
        case 86: // 两世之间 (已完成)
          add_event(event_hooks.week_start, event_obj_special);
          break;
        // 菊花赏前后剧情

        case 88: // 神化 (已完成)
          add_event(event_hooks.week_start, event_obj_special);
          break;

        // 金鯱赏前后剧情
        case 106: // 不稳定星等 (已完成)
          add_event(event_hooks.week_start, event_obj_special);
          break;
        case 107: //落入鲸鱼之腹 (已完成)
          add_event(event_hooks.week_start, event_obj_special);
          break;

        // 宝冢纪念前后剧情
        case 120: // 无愿之愿 已完成)
          add_event(event_hooks.week_start, event_obj_special);
          break;
        case 95 + 29: // 第二次夏季合宿(还没写) 夏季合宿 资深年
          add_event(event_hooks.week_start, event_obj_special);
          break;
        case 126: // 林间参拜
          add_event(event_hooks.week_start, event_obj_special);
          break;

        case 132: // 每个人的天命 (已完成)
          add_event(event_hooks.week_start, event_obj_special);
          break;
      }
      check_and_register_aim_race(56, aim_races, edu_weeks);
    } else if (edu_weeks === 144) {
      add_event(event_hooks.week_end, event_obj_special);
    } else if (edu_weeks === 143 + 9) {
      add_event(event_hooks.week_start, event_obj_special);
    }
    if (love > 25) {
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'hot_line',
        event_hooks.out_start,
        event_obj,
      );
    }

    if (love > 25) {
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'god_study',
        event_hooks.office_study,
        event_obj,
      );
    }

    if (love > 25) {
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'luck_name',
        event_hooks.office_study,
        event_obj,
      );
    }
    if (love > 49) {
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'miso_fortune',
        event_hooks.office_cook,
        event_obj,
      );
    }

    if (love >= 25 && edu_marks.love25 === 0) {
      /*
          check_and_add_event(
            FUKU,
            edu_weeks,
            'love25',
            event_hooks.out_start,
            event_obj ,
          );*/
      edu_marks.love25 = 1;
      add_event(event_hooks.out_start, event_obj_special);
    }

    if (era.get('mark:56:淫纹') > 0 && edu_marks.tattoo === 0) {
      /* check_and_add_event(
            FUKU,
            edu_weeks,
            'tattoo',
            event_hooks.race_start,
            event_obj ,
          );*/
      edu_marks.tattoo = 1;
      add_event(event_hooks.race_start, event_obj_special);
    }

    if (edu_marks.GAME_TIMES === 3) {
      edu_marks.fortune_game_duel = 1;
      add_event(event_hooks.office_game, event_obj_special);
    }

    if (
      edu_marks.fortune_game_duel === 2 &&
      era.get(`exp:56:性交次数`) > 3 &&
      era.get('love:56') >= 75
    ) {
      edu_marks.fortune_game_duel1 = 1;

      add_event(event_hooks.office_game, event_obj_special);
    }

    /*console.log('tattoo', FUKU.tattoo);
        console.log('love25', FUKU.love25);
        console.log('luck_name', FUKU.luck_name);
        console.log('god_study', FUKU.god_study);
        console.log('hot_line', FUKU.hot_line);
        console.log('miso_fortune', FUKU.miso_fortune);*/
  }

  check_palace_and_get_aims() {
    const FUKU = new FukukitaruEduMarks();
    const races = new RaceHistory(56).get();

    if (
      check_aim_race(races, race_enum.takz_kin, 2, 1) &&
      check_aim_race(races, race_enum.arim_kin, 2, 1) &&
      check_aim_race(races, race_enum.kiku_sho, 1, 1)
    ) {
      FUKU.good_end = 1; // 触发两个世界的主人
    } else {
      // 坏结局
      /*   FUKU.be_end_1 = 1;
            era.set('flag:强制BE', 56);*/
    }

    return super.check_palace_and_get_aims();
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [],
      races = new RaceHistory(56).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.aoba_sho, 1, 20)); // 入着即可
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 3));

    buffer.push(check_aim_and_get_entry(races, race_enum.kobe_hai, 1, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.kink_sho, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
    return buffer;
  }
};
