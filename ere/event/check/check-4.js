const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const MaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-4');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 3;
//2=10，3=11，最高位的1代表存在赛后事件，最低位的1代表存在赛前事件
aim_races[get_aim_race_index(race_enum.asah_sta, 0)] = 0b11;
aim_races[get_aim_race_index(race_enum.sprg_sta, 1)] = 0b11;
aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = 0b11;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 0b11;
aim_races[get_aim_race_index(race_enum.radi_shi, 1)] = 0b11;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 0b11;

aim_races[get_aim_race_index(race_enum.sank_hai, 2)] = 0b11;
aim_races[get_aim_race_index(race_enum.yasu_kin, 2)] = 0b11;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 0b11;

module.exports = class extends CustomizedCheck {
  check_and_get_titles(aim_check) {
    const titles = [];
    let max = 0,
      win = 0;
    RaceHistory.get(4)
      .get_values()
      .forEach((e) => {
        if (e.rank === 1) {
          win++;
        } else {
          win = 0;
        }
        if (win > max) {
          max = win;
        }
      });
    if (max >= 8) {
      titles.push({
        c: get_chara_color(this.id),
        n: this.get_personal_titles()[0],
      });
      aim_check && sys_personal_achievement.set(this.id, 1);
    }
    return titles;
  }

  check_next_week() {
    const edu_weeks = era.get('cflag:4:育成回合计时');
    const edu_marks = new MaEduMarks(4);
    const ebj = new EventObject(4, cb_enum.edu);
    const ebj_s = new EventObject(4, cb_enum.edu, true).set_arg(edu_weeks);
    if (edu_weeks < 3 * 48) {
      if (edu_weeks >= 20) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'current_trend',
          event_hooks.school_atrium,
          ebj,
        );
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'feel_speed',
          event_hooks.out_start,
          ebj,
        );
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'favourite_things',
          event_hooks.back_school,
          ebj,
        );
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'beautiful_winner',
          event_hooks.school_rooftop,
          ebj,
        );
      }
      era.get('love:4') >= 49 &&
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'memory',
          event_hooks.week_start,
          ebj,
        );
      era.get('love:4') >= 50 &&
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'teacher_sister',
          event_hooks.week_start,
          ebj,
        );
      era.get('love:4') >= 75 &&
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'find_love',
          event_hooks.back_school,
          ebj,
        );
      era.get('love:4') === 100 &&
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'dream',
          event_hooks.week_end,
          ebj,
        );
      switch (edu_weeks) {
        //  暂时先删除丸善斯基登场处的wind标记 从礼物开始为1
        case 5: //来自姐姐的礼物 (已完成) wind = 1
          add_event(event_hooks.week_start, ebj_s);
          break;
        case 24: //训练结束的普通一天 (已完成) wind = 2
          add_event(event_hooks.week_start, ebj_s);
          break;
        case 30: //三女神的孩子们(已完成) wind = 3
          add_event(event_hooks.week_start, ebj_s);
          break;
        case 34: //礼物 (已完成)  wind = 4
          add_event(event_hooks.week_start, ebj_s);
          break;
        case 39: //万圣节 (已完成)
          add_event(event_hooks.week_end, ebj_s);
          break;
        case 41: //训练员与担当马娘 (已完成) wind = 5
          add_event(event_hooks.week_end, ebj_s);
          break;
        case 47: //圣诞节与心跳的回忆 (已完成)
          add_event(event_hooks.week_start, ebj_s);
          break;
        // 经典年1月第一周 新年 (已完成)
        //第二年德比之后wind开始减少
        case 47 + 1:
          add_event(event_hooks.week_start, ebj_s);
          break;
        // 2月1日 春冬之交 (已完成) wind +- 6
        case 47 + 5:
          add_event(event_hooks.week_start, ebj_s);
          break;
        // 1月第三周 情人节 (已完成)
        case 47 + 6:
          add_event(event_hooks.week_start, ebj_s);
          break;
        // 1月第三周 偶像 (已完成) wind +- 7
        case 47 + 7:
          add_event(event_hooks.week_start, ebj_s);
          break;
        // 3月第一周 殿堂周
        case 47 + 9:
          add_event(event_hooks.week_start, ebj_s);
          break;
        // 5月第二周 晚上好，是丸善斯基哦(已完成) wind +- 7
        case 47 + 16:
          add_event(event_hooks.week_end, ebj_s);
          break;
        // 5月第三周 憧憬 (已完成) wind +- 7
        case 47 + 17:
          add_event(event_hooks.week_start, ebj_s);
          break;
        // 8月第一周 夏季合宿开始 (已完成) wind = 8
        case 47 + 29:
          add_event(event_hooks.week_start, ebj_s);
          break;
        // 8月第二周 庙会 (已完成) wind = 9
        case 47 + 30:
          add_event(event_hooks.week_start, ebj_s);
          break;
        //8月第三周 抉择 (已完成) wind = 10
        case 47 + 31:
          add_event(event_hooks.week_start, ebj_s);
          break;
        //8月第四周 夏季合宿结束 (已完成) wind = 11
        case 47 + 32:
          add_event(event_hooks.week_end, ebj_s);
          break;
        //9月第一周 水与沙 (已完成)
        case 47 + 33:
          add_event(event_hooks.week_end, ebj_s);
          break;
        //9月第二周 无风带（已完成）
        case 47 + 34:
          add_event(event_hooks.week_end, ebj_s);
          break;
        //10月第一周 思绪 (已完成) wind = 12
        case 47 + 37:
          add_event(event_hooks.week_end, ebj_s);
          break;
        //10月第一周 无风 (已完成) wind = 13
        case 47 + 38:
          add_event(event_hooks.week_end, ebj_s);
          break;
        //10月第四周 万圣节 (已完成) wind = 14
        case 47 + 40:
          add_event(event_hooks.week_start, ebj_s);
          break;
        // 12月第四周 圣诞节 (已完成)
        case 47 + 48:
          add_event(event_hooks.week_start, ebj_s);
          break;
        // 资深年1月第一周 新年 (已完成)
        case 95 + 1:
          add_event(event_hooks.out_church, ebj_s);
          break;
        // 2月第二周 情人节(已完成)
        case 95 + 6:
          add_event(event_hooks.week_start, ebj_s);
          break;
        //2月第四周 焱炎 (已完成) wind =15
        case 95 + 9:
          add_event(event_hooks.week_end, ebj_s);
          break;
        // 4月第二周 粉丝感谢祭(已完成)
        case 95 + 14:
          add_event(event_hooks.week_start, ebj_s);
          break;
        // 8月第一周 夏季合宿开始(已完成) wind = 16
        case 95 + 29:
          add_event(event_hooks.week_start, ebj_s);
          break;
        // 8月第二周 庙会 (已完成) wind = 17
        case 95 + 30:
          add_event(event_hooks.week_start, ebj_s);
          break;
        // 8月第四周 夏季合宿结束 (已完成) wind = 18
        case 95 + 32:
          add_event(event_hooks.week_end, ebj_s);
          break;
        //10月第四周 不给糖就捣蛋！ (已完成)
        case 95 + 40:
          add_event(event_hooks.week_start, ebj_s);
          break;
        //10月第三周 温柔的风 (已完成) wind = 19
        case 95 + 43:
          add_event(event_hooks.week_end, ebj_s);
          break;
        // 12月第四周 圣诞节(已完成)
        case 95 + 48:
          add_event(event_hooks.week_start, ebj_s);
          break;
        // 3月第四周 粉丝感谢祭&姐姐的烦恼 wind =6
        case 47 + 12:
          if (
            check_aim_race(
              era.get('cflag:4:育成成绩'),
              race_enum.sprg_sta,
              1,
              1,
            )
          ) {
            edu_marks.sister_annoyance = 1;
            add_event(
              event_hooks.week_end,
              ebj_s.copy().set_arg('sister_annoyance'),
            );
          }
          break;
        // 6月第三周 少女的忧郁（上）
        case 47 + 21:
          if (
            check_aim_race(
              era.get('cflag:4:育成成绩'),
              race_enum.toky_yus,
              1,
              1,
            )
          ) {
            add_event(event_hooks.week_end, ebj_s.copy().set_arg('girls_blue'));
          }
          break;
        // 6月第四周 少女的忧郁（下）wind = 8
        case 47 + 22:
          if (
            check_aim_race(
              era.get('cflag:4:育成成绩'),
              race_enum.toky_yus,
              1,
              1,
            )
          ) {
            add_event(
              event_hooks.school_rooftop,
              ebj_s.copy().set_arg('girls_blue'),
            );
          }
      }
      check_and_register_aim_race(this.id, this.get_aim_races(), edu_weeks);
    } else if (
      edu_weeks === 143 + 5 &&
      (edu_marks.girls_dream > 0 ||
        edu_marks.gentle_wind > 0 ||
        edu_marks.fall_heaven > 0)
    ) {
      add_event(event_hooks.week_start, ebj);
    } else {
      super.check_next_week();
    }
  }

  check_palace_and_get_aims() {
    const races = new RaceHistory(4).get();
    const event_marks = new MaEduMarks(4);
    if (
      check_aim_race(races, race_enum.toky_yus, 1, 1) &&
      check_aim_race(races, race_enum.sank_hai, 2, 1) &&
      check_aim_race(races, race_enum.tenn_sho, 2, 1) &&
      event_marks.wind === 19
    ) {
      new MaEduMarks().fall_heaven = 1;
    } else if (
      check_aim_race(races, race_enum.toky_yus, 1, 1) &&
      check_aim_race(races, race_enum.sank_hai, 2, 1) &&
      check_aim_race(races, race_enum.tenn_sho, 2, 1) &&
      event_marks.wind >= 14 &&
      event_marks.wind <= 18
    ) {
      new MaEduMarks().gentle_wind = 1;
    } else {
      new MaEduMarks().girls_dream = 1;
    }
    return super.check_palace_and_get_aims();
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [],
      races = new RaceHistory(this.id).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.asah_sta, 0, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.sprg_sta, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 1, 16));
    buffer.push(check_aim_and_get_entry(races, race_enum.sank_hai, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.yasu_kin, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 1));
    return buffer;
  }
};
