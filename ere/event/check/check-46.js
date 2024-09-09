const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const FalconEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-46');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 3;
//2=10，3=11，最高位的1代表存在赛后事件，最低位的1代表存在赛前事件
aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = 3;
aim_races[get_aim_race_index(race_enum.japa_dir, 1)] = 3;
aim_races[get_aim_race_index(race_enum.jbc_cls, 1)] = 3;
aim_races[get_aim_race_index(race_enum.toky_dai, 1)] = 3;
aim_races[get_aim_race_index(race_enum.febr_sta, 2)] = 3;
aim_races[get_aim_race_index(race_enum.teio_sho, 2)] = 3;
aim_races[get_aim_race_index(race_enum.jbc_cls, 2)] = 3;
aim_races[get_aim_race_index(race_enum.cham_cup, 2)] = 3;
aim_races[get_aim_race_index(race_enum.toky_dai, 2)] = 3;

module.exports = class extends CustomizedCheck {
  check_after_race(extra_flag) {
    const info = race_infos[extra_flag.race];
    if (
      (info.race_class === class_enum.G1 ||
        info.race_class === class_enum.G2 ||
        info.race_class === class_enum.G3 ||
        info.race_class === class_enum.OP ||
        info.race_class === class_enum['Pre-OP']) &&
      extra_flag.rank === 1
    ) {
      new FalconEduMarks().race_count++;
    }
  }

  check_and_get_titles(aim_check) {
    const races = new RaceHistory(this.id).get(),
      titles = [];
    if (
      check_aim_race(races, race_enum.japa_dir, 1, 1) &&
      check_aim_race(races, race_enum.jbc_cls, 1, 1) &&
      check_aim_race(races, race_enum.toky_dai, 1, 1) &&
      check_aim_race(races, race_enum.febr_sta, 2, 1) &&
      check_aim_race(races, race_enum.teio_sho, 2, 1) &&
      check_aim_race(races, race_enum.jbc_cls, 2, 1) &&
      check_aim_race(races, race_enum.cham_cup, 2, 1) &&
      check_aim_race(races, race_enum.toky_dai, 2, 1)
    ) {
      titles.push({
        c: get_chara_talk(46).color,
        n: 'Top Idol',
      });
      aim_check && sys_personal_achievement.set(46, 1);
    } else {
      titles.push({
        c: get_chara_talk(46).color,
        n: '沙之飞隼',
      });
    }
    return titles;
  }

  check_love_events() {
    const love = era.get('love:46'),
      event_obj = new EventObject(46, cb_enum.love);
    if (love === 49) {
      add_event(event_hooks.week_end, event_obj);
    } else if (love === 74) {
      add_event(event_hooks.week_end, event_obj);
    } else if (love === 89) {
      add_event(event_hooks.week_end, event_obj);
    } else if (love === 99) {
      add_event(event_hooks.week_end, event_obj);
    } else if (love === 100) {
      add_event(event_hooks.week_end, event_obj);
    }
  }

  check_next_week() {
    const edu_weeks = era.get('cflag:46:育成回合计时');
    if (edu_weeks < 3 * 48) {
      const love = era.get('love:46');
      const event_marks = new FalconEduMarks(46);
      const event_obj = new EventObject(46, cb_enum.edu);
      const event_obj_special = new EventObject(46, cb_enum.edu, true);
      // 思路
      // 第一高潮幕(前期) 薰衣草(夏季)——为了摆脱某种“我已经过时、即将被埋葬”的恐惧。大量追赶新潮头试图击退自己的生存恐惧。
      // 第一高潮幕(中期) 水仙(冬季)——粉丝袭击事件 偶像崇拜必要素材已经足够
      // 第一高潮幕(第三年后半 后期) 山茶花(高贵和纯洁、坚韧不拔 冬季)——虽以偶像之名行动，但更多是以践行爱的标准，所作的真正努力与付出
      // 第一高潮幕(第三年前半 后期) 雏菊(春季)——粉丝袭击事件后继影响处理
      // 第二高潮幕（前期过渡）夜来香(夏季到秋季)——与自身恐惧作战，粉丝袭击事件埋下伏笔
      // 第三高潮幕（中期过渡）萱草(忘忧草)——如何提高自己的影响力，又不成为偶像？
      // 第四高潮幕——（后期到结局之间不至于无聊）向日葵 学会有足够的勇气去接受事实，学会中性的看待事实。不因为正面的事实“骄傲”，也不因为负面的事实“气馁”。与第一高潮幕之间共鸣
      check_and_add_event(
        event_marks,
        edu_weeks,
        'deadline_fight',
        event_hooks.office_study,
        event_obj,
      );
      check_and_add_event(
        event_marks,
        edu_weeks,
        'idol_ice_cream',
        event_hooks.out_start,
        event_obj,
      );
      check_and_add_event(
        event_marks,
        edu_weeks,
        'loneliness_girl',
        event_hooks.out_river,
        event_obj,
      );
      check_and_add_event(
        event_marks,
        edu_weeks,
        'shine_girl',
        event_hooks.out_station,
        event_obj,
      );
      check_and_add_event(
        event_marks,
        edu_weeks,
        'curiosity_girl',
        event_hooks.out_shopping,
        event_obj,
      );
      check_and_add_event(
        event_marks,
        edu_weeks,
        'rooftop_idol',
        event_hooks.school_rooftop,
        event_obj,
      );
      check_and_add_event(
        event_marks,
        edu_weeks,
        'petrichor_girl',
        event_hooks.school_atrium,
        event_obj,
      );
      if (love === 100) {
        check_and_add_event(
          event_marks,
          edu_weeks,
          'lucky_girl',
          event_hooks.week_start,
          event_obj,
        );
      }
      switch (edu_weeks) {
        // 前期 压力 马币不足 艰难的初期 资源匮乏造成的恐慌
        // 1-24周 三个事件  高架桥捡垃圾 资源匮乏 压力过大
        // 3月第一周 接下来也请多多指教⭐
        case 9:
          add_event(event_hooks.week_start, event_obj_special);
          break;
        // 5月第二周 醒目飞鹰大危机！？
        case 18:
          add_event(event_hooks.week_start, event_obj_special);
          break;
        // 6月第四周 薰衣草
        case 24:
          add_event(event_hooks.week_start, event_obj_special);
          break;
        // 24-48周 恐慌 害怕被抛弃的恐慌 在全国各地参与比赛

        // 9月第二周 努力减肥的飞鹰子！
        case 34:
          add_event(event_hooks.week_end, event_obj_special);
          break;
        // 十月第四周 夜来香
        case 40:
          add_event(event_hooks.week_start, event_obj_special);
          break;
        // 中期 忙碌 事业的继续发展，因为形势一片大好而放松了警惕 最终导致的粉丝袭击
        // 经典年1月第一周 新年
        case 47 + 1:
          add_event(event_hooks.week_start, event_obj_special);
          break;
        // 1月第三周 情人节
        case 47 + 6:
          add_event(event_hooks.week_start, event_obj_special);
          break;
        // 3月第四周 目标！皋月赏！
        case 47 + 12:
          add_event(event_hooks.week_start, event_obj_special);
          break;
        // 6月第一周 训练室的花
        case 47 + 21:
          add_event(event_hooks.week_end, event_obj_special);
          break;
        // 8月第一周 夏季合宿 开始
        case 47 + 29:
          add_event(event_hooks.week_start, event_obj_special);
          break;
        // 8月第四周 夏季合宿 结束
        case 47 + 32:
          add_event(event_hooks.week_end, event_obj_special);
          break;
        // 10月第三周 萱草
        case 47 + 39:
          add_event(event_hooks.week_end, event_obj_special);
          break;
        // 10月第四周 飞鹰子
        case 47 + 40:
          add_event(event_hooks.week_start, event_obj_special);
          break;
        // 11月第一周 醒目飞鹰
        case 47 + 41:
          add_event(event_hooks.week_start, event_obj_special);
          break;
        // 11月第二周 水仙
        case 47 + 42:
          add_event(event_hooks.week_start, event_obj_special);
          break;
        // 12月第四周 圣诞节
        case 47 + 48:
          add_event(event_hooks.week_start, event_obj_special);
          break;
        // 资深年1月第一周 新年
        case 95 + 1:
          add_event(event_hooks.week_start, event_obj_special);
          break;
        // 1月第二周 山茶花
        case 95 + 2:
          add_event(event_hooks.week_start, event_obj_special);
          break;
        // 2月第二周 情人节
        case 95 + 6:
          add_event(event_hooks.week_start, event_obj_special);
          break;
        // 4月第二周 粉丝感谢祭
        case 95 + 14:
          add_event(event_hooks.week_start, event_obj_special);
          break;
        // 5月第四周 前辈与后辈
        case 95 + 20:
          add_event(event_hooks.week_end, event_obj_special);
          break;
        // 8月第一周 夏季合宿开始
        case 95 + 29:
          add_event(event_hooks.week_start, event_obj_special);
          break;
        // 8月第四周 夏季合宿结束
        case 95 + 32:
          add_event(event_hooks.week_end, event_obj_special);
          break;
        // 9月第一周 向日葵
        case 95 + 33:
          add_event(event_hooks.week_end, event_obj_special);
          break;
        // 10月第一周 顶级偶像之路
        case 95 + 37:
          add_event(event_hooks.week_end, event_obj_special);
          break;
        // 橡树
        case 95 + 38:
          add_event(event_hooks.week_end, event_obj_special);
          break;
        // 12月第三周 紧张
        case 95 + 40:
          add_event(event_hooks.week_end, event_obj_special);
          break;
        // 10月第四周 天空、大地以及生活在这里的我们
        case 95 + 47:
          add_event(event_hooks.week_end, event_obj_special);
          break;
        // 12月第四周 圣诞节
        case 95 + 48:
          add_event(event_hooks.week_start, event_obj_special);
          break;
        // 1月第2周 目标达成！
        case 47 + 2:
          if (new FalconEduMarks().race_count >= 2 && edu_weeks < 95) {
            event_marks.target_finish++;
            add_event(event_hooks.week_start, event_obj_special);
          }
      }
    }
  }

  check_palace_and_get_aims() {
    const races = new RaceHistory(this.id).get();
    if (
      check_aim_race(races, race_enum.jbc_cls, 2, 1) &&
      check_aim_race(races, race_enum.cham_cup, 2, 1) &&
      check_aim_race(races, race_enum.toky_dai, 2, 1)
    ) {
      new FalconEduMarks().sweet_dream++;
      add_event(event_hooks.week_start, new EventObject(46, cb_enum.edu));
    } else {
      new FalconEduMarks().idol_road++;
      add_event(event_hooks.week_start, new EventObject(46, cb_enum.edu));
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
    buffer.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 16)); //皋月赏出走
    buffer.push(check_aim_and_get_entry(races, race_enum.japa_dir, 1, 1)); //泥地德比5着以内
    buffer.push(check_aim_and_get_entry(races, race_enum.jbc_cls, 1, 1)); //日本育马场经典赛3着以内
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_dai, 1, 1)); //东京大赏典三着以内
    buffer.push(check_aim_and_get_entry(races, race_enum.febr_sta, 2, 1)); //二月锦标1着
    buffer.push(check_aim_and_get_entry(races, race_enum.teio_sho, 2, 1)); //帝王赏1着
    buffer.push(check_aim_and_get_entry(races, race_enum.jbc_cls, 2, 1)); //日本育马场经典赛1着
    buffer.push(check_aim_and_get_entry(races, race_enum.cham_cup, 2, 1)); //冠军杯1着
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_dai, 2, 1)); //东京大赏典1着
    return buffer;
  }

  // TODO 记得更新title-desc.json
  get_personal_titles() {
    return ['Top Idol⭐', '沙之飞隼'];
  }
};
