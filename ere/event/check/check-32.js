const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');
const { sys_reg_race } = require('#/system/sys-calc-base-cflag');

const { add_event, cb_enum } = require('#/event/queue');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @type {Record<string,number>[]} */
const aim_races = [{}, {}];

// planA:
aim_races[0][race_enum.begin_race] = 3;
aim_races[0][get_aim_race_index(race_enum.hope_sta, 0)] = 3;
aim_races[0][get_aim_race_index(race_enum.hoch_sho, 1)] = 3;
aim_races[0][get_aim_race_index(race_enum.sats_sho, 1)] = 3;
aim_races[0][get_aim_race_index(race_enum.toky_yus, 1)] = 3;

aim_races[0][get_aim_race_index(race_enum.kiku_sho, 1)] = 3;
aim_races[0][get_aim_race_index(race_enum.sank_hai, 2)] = 3;
aim_races[0][get_aim_race_index(race_enum.takz_kin, 2)] = 3;
aim_races[0][get_aim_race_index(race_enum.arim_kin, 2)] = 3;

aim_races[1][race_enum.begin_race] = 3;
aim_races[1][get_aim_race_index(race_enum.hope_sta, 0)] = 3;
aim_races[1][get_aim_race_index(race_enum.hoch_sho, 1)] = 3;
aim_races[1][get_aim_race_index(race_enum.sats_sho, 1)] = 3;
aim_races[1][get_aim_race_index(race_enum.toky_yus, 1)] = 3;

aim_races[1][get_aim_race_index(race_enum.tenn_spr, 2)] = 2;
aim_races[1][get_aim_race_index(race_enum.takz_kin, 2)] = 3;
aim_races[1][get_aim_race_index(race_enum.prix_lat, 2)] = 2;

function get_coffee_aim_entry(coffee, entry) {
  entry.desc = `${coffee} ${entry.desc}`;
  return entry;
}

module.exports = class extends CustomizedCheck {
  check_after_betrayed(partners, ia) {
    if (
      new TachyonEduMarks().plan_b > 0 &&
      partners.includes(25) &&
      era.get('cflag:0:性别') > 0 &&
      era.get('cflag:32:性别') !== 1
    ) {
      const life_marks = new TachyonLifeMarks();
      if (life_marks.ntr_mark < 3) {
        life_marks.betrayed++;
        if (life_marks.ntr_mark === 0 && life_marks.betrayed >= 3) {
          life_marks.ntr_mark = 1;
        } else if (life_marks.ntr_mark === 2 && life_marks.betrayed >= 6) {
          life_marks.ntr_mark = 3;
          life_marks.betrayed = 0;
        }
      }
    }
  }

  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(32).get(),
      titles = [];
    if (
      !new TachyonEduMarks().title_check &&
      check_aim_race(races, race_enum.hope_sta, 0, 1) &&
      check_aim_race(races, race_enum.hoch_sho, 1, 1) &&
      check_aim_race(races, race_enum.sats_sho, 1, 1) &&
      era.get('base:32:速度') >= 1200
    ) {
      titles.push({
        c: get_chara_color(32),
        n: this.get_personal_titles()[0],
      });
      aim_check && sys_personal_achievement.set(32, 1);
    }
    return titles;
  }

  check_after_punish(level) {
    add_event(
      event_hooks.week_start,
      new EventObject(32, cb_enum.daily).set_arg(`p${level}`),
    );
  }

  check_after_race(extra) {
    const edu_marks = new TachyonEduMarks();
    if (
      extra.edu_weeks <= 47 + race_infos[race_enum.sats_sho].date &&
      extra.rank !== 1
    ) {
      edu_marks.title_check = 1;
    }
    const race_history = RaceHistory.get(32).get();
    if (
      check_aim_race(race_history, race_enum.sats_sho, 1, 1) &&
      check_aim_race(race_history, race_enum.toky_yus, 1, 1) &&
      extra.race === race_enum.kiku_sho &&
      extra.rank === 1
    ) {
      add_event(
        event_hooks.week_end,
        new EventObject(32, cb_enum.edu).set_arg('triple_crowns'),
      );
    }
    if (edu_marks.plan_b && extra.race === race_enum.tenn_spr) {
      edu_marks.tenn_spr = 1;
    }
    if (
      extra.contestants.find((e) => e.index_chara === 25)?.rank?.curr <
      extra.rank
    ) {
      edu_marks.beat_c = 1;
    }
  }

  check_love_events() {
    const love = era.get('love:32'),
      love_event = new EventObject(32, cb_enum.love).set_arg([love]);
    if (love === 74) {
      add_event(event_hooks.week_start, love_event);
    } else {
      add_event(event_hooks.week_end, love_event);
    }
  }

  check_next_week() {
    const cur_round = era.get('flag:当前回合数'),
      edu_marks = new TachyonEduMarks(),
      life_marks = new TachyonLifeMarks();
    if (era.get('cflag:32:招募状态') === recruit_flags.yes) {
      const ebj_d = new EventObject(32, cb_enum.daily);
      const relation = era.get('relation:32:0');
      let temp;
      if (
        era.get('mark:32:反抗') === 3 &&
        !life_marks.hate &&
        Math.random() < 0.2
      ) {
        life_marks.hate = 1;
        add_event(event_hooks.week_start, ebj_d.set_arg('hate'));
      }
      life_marks.talk = 0;
      // 做饭检查
      if (
        life_marks.cook > 0 &&
        era.get('cflag:32:位置') === location_enum.office &&
        era.get('cflag:0:位置') === era.get('cflag:32:位置')
      ) {
        if (relation <= 225) {
          (temp = cur_round - life_marks.l_cook) > 1 &&
            temp <= 4 &&
            add_event(
              event_hooks.week_start,
              ebj_d
                .copy()
                .set_arg(`cook${Number(life_marks.cook >= 5)}${temp - 1}`),
            );
        } else if (life_marks.cook >= 10) {
          (temp = cur_round - life_marks.l_cook) > 1 &&
            add_event(
              event_hooks.week_start,
              ebj_d.copy().set_arg(`cook2${temp - 1}`),
            );
        }
      }
      const love = era.get('love:32');
      if (
        love >= 25 &&
        love < 50 &&
        life_marks.cook >= 10 &&
        !life_marks.ambiguous
      ) {
        life_marks.ambiguous = 1;
        add_event(
          event_hooks.week_start,
          new EventObject(32, cb_enum.love).set_arg(25),
        );
      }
    }
    if (life_marks.drug_notice > 0 && --life_marks.drug_notice === 0) {
      if (era.get('cflag:0:位置') === 0 && era.get('cflag:32:位置') === 0) {
        add_event(
          event_hooks.week_start,
          new EventObject(32, cb_enum.edu).set_arg('drug_notice'),
        );
      } else {
        life_marks.drug_notice++;
      }
    }
    const edu_weeks = era.get('cflag:32:育成回合计时');
    if (edu_weeks < 3 * 48) {
      edu_marks.train_stop = 0;
      edu_marks.train_fail = Math.min(edu_marks.train_fail, 2);
      const ebj = new EventObject(32, cb_enum.edu);
      const ebj_s = new EventObject(32, cb_enum.edu, true).set_arg(edu_weeks);
      const year_begin = cur_round - (cur_round % 48);
      if (
        Math.random() < 0.2 &&
        era.get('cflag:32:位置') === 0 &&
        era.get('cflag:0:位置') === era.get('cflag:32:位置')
      ) {
        add_event(event_hooks.week_start, ebj.copy().set_arg('try_drug'));
      }
      switch (edu_weeks) {
        case 15: // 实验课题拟定
        case 36: // 年度研究计划制定
        case 47 + 1: // 中期检查
        case 47 + 5: // 中期报告提交
        case 47 + 25: // A or B
        case 47 + 31: // 夏日的数据采集 or 月光
        case 95 + 6: // 情人节
        case 95 + 14: // 粉丝感谢祭
        case 95 + 31: // 他人的可能性 or 再度闪耀的光子
        case 95 + 39: // 最终因素的寻求 or 超越极限……？
          add_event(event_hooks.week_start, ebj_s);
          break;
        case 95 + 35:
          if (edu_marks.plan_b) {
            // 法国（？）
            add_event(event_hooks.week_start, ebj_s);
          } else {
            // 因素 · 旁观者设置
            add_event(event_hooks.week_end, ebj_s);
          }
          break;
        case 47 + 15:
          if (sys_reg_race(32).curr.race === race_enum.sats_sho) {
            edu_marks.uma_limit = 1;
          }
          break;
        case 47 + 23: // 最速？最强？
          add_event(event_hooks.week_end, ebj_s);
          break;
        case 47 + 40: // 不同的可能性
          if (
            edu_marks.plan_b &&
            era
              .getAddedCharacters()
              .some(
                (cid) =>
                  era.get(`cflag:${cid}:招募状态`) === recruit_flags.yes &&
                  sys_reg_race(cid).curr.race === race_enum.kiku_sho,
              )
          ) {
            add_event(event_hooks.week_start, ebj_s);
          }
          break;
        case 47 + 29: // 媒体应对办法
        case 47 + 41: // 第二次年度考核
          if (!edu_marks.plan_b) {
            add_event(event_hooks.week_start, ebj_s);
          }
          break;
        case 47 + 47: // 黯淡的光辉
        case 95 + 15: // 闪烁的光子
          if (edu_marks.plan_b) {
            add_event(event_hooks.week_end, ebj_s);
          }
          break;
        case 95 + 1: // 第二次年度审核报告 or 下定决心的新年
          add_event(event_hooks.week_start, ebj_s);
          if (edu_marks.plan_b) {
            sys_reg_race(32).curr = {
              race: race_enum.tenn_spr,
              week: year_begin + race_infos[race_enum.tenn_spr].date,
            };
          }
          break;
        case 95 + 3: // 抽奖与代偿剂效应
          add_event(event_hooks.out_shopping, ebj_s);
          break;
        case 95 + 5:
          if (edu_marks.plan_b) {
            sys_reg_race(32).curr = {
              race: race_enum.tenn_spr,
              week: year_begin + race_infos[race_enum.tenn_spr].date,
            };
          }
          break;
        case 95 + race_infos[race_enum.tenn_spr].date:
          if (edu_marks.plan_b) {
            sys_reg_race(32).curr = {
              race: race_enum.tenn_spr,
              week: year_begin + race_infos[race_enum.tenn_spr].date,
            };
          }
          break;
        case 95 + 18: // 重新绽放的光子
          if (edu_marks.tenn_spr) {
            add_event(event_hooks.week_end, ebj_s);
          }
          break;
        case 95 + 19:
        case 95 + race_infos[race_enum.takz_kin].date:
          if (edu_marks.plan_b) {
            sys_reg_race(32).curr = {
              race: race_enum.takz_kin,
              week: year_begin + race_infos[race_enum.takz_kin].date,
            };
          }
          break;
        case 95 + race_infos[race_enum.takz_kin].date + 1:
          if (edu_marks.plan_b) {
            sys_reg_race(32).curr = {
              race: race_enum.prix_lat,
              week: year_begin + race_infos[race_enum.prix_lat].date,
            };
          }
          break;
        case 95 + 29: // 短暂歇息
          if (edu_marks.plan_b) {
            sys_reg_race(32).curr = {
              race: race_enum.prix_lat,
              week: year_begin + race_infos[race_enum.prix_lat].date,
            };
          }
          add_event(event_hooks.week_start, ebj_s);
          break;
        case 95 + 32: // 换位实验
        case 95 + 43: // 完全燃起的胜负心
          if (!edu_marks.plan_b) {
            add_event(event_hooks.week_end, ebj_s);
          }
          break;
        case 95 + 36: // 决心
          if (
            edu_marks.plan_b &&
            era.get('cflag:25:位置') !== location_enum.paris
          ) {
            add_event(event_hooks.week_end, ebj_s);
          }
          break;
        case 95 + 37: // 极限的标准
          if (
            edu_marks.plan_b &&
            era.get('cflag:25:位置') !== location_enum.paris
          ) {
            add_event(event_hooks.week_start, ebj_s);
          }
          break;
        case 95 + 38:
          if (edu_marks.plan_b) {
            edu_marks.glass_leg = 1;
          }
          break;
        case 95 + 47: // 被超越的极限
          if (
            edu_marks.plan_b &&
            check_aim_race(RaceHistory.get(25).get(), race_enum.japa_cup, 2, 3)
          ) {
            add_event(event_hooks.week_start, ebj_s);
          }
          break;
        case 95 + 48: // 临夜的圣诞老人 or 圣夜的诺言
          if (
            !edu_marks.plan_b ||
            (check_aim_race(
              RaceHistory.get(25).get(),
              race_enum.japa_cup,
              2,
              3,
            ) &&
              sys_reg_race(25).curr.race === race_enum.arim_kin &&
              check_aim_race(RaceHistory.get(32).get(), race_enum.prix_lat, 2))
          ) {
            add_event(event_hooks.week_start, ebj_s);
          }
      }
      check_and_register_aim_race(32, aim_races[edu_marks.plan_b]);
    } else if (edu_weeks === 143 + 9) {
      // 极限的彼方 or PlanB 的未来
      add_event(
        event_hooks.week_start,
        new EventObject(32, cb_enum.edu).set_arg('palace'),
      );
    }
  }

  check_palace_and_get_aims() {
    const aim_check = this.get_edu_aims();
    if (aim_check.every((e) => e.check === 1)) {
      // 薛定鄂的超光速粒子 or 其他的可能性
      add_event(
        event_hooks.out_start,
        new EventObject(32, cb_enum.edu).set_arg('hot_spring'),
      );
    }
    new TachyonEduMarks().limited = 0;
    return super.check_palace_and_get_aims();
  }

  check_second_chance() {
    add_event(
      event_hooks.week_start,
      new EventObject(this.id, cb_enum.edu).set_arg('second_chance'),
    );
  }

  get_edu_aims() {
    const { plan_b } = new TachyonEduMarks();
    const buffer = [];
    const races = RaceHistory.get(this.id).get();
    if (plan_b) {
      const coffee = get_chara_talk(25).name;
      const coffee_races = RaceHistory.get(25).get();
      buffer.push(
        get_coffee_aim_entry(
          coffee,
          check_aim_and_get_entry(coffee_races, race_enum.stli_kin, 1, 3),
        ),
      );
      buffer.push(
        get_coffee_aim_entry(
          coffee,
          check_aim_and_get_entry(coffee_races, race_enum.kiku_sho, 1, 3),
        ),
      );
      buffer.push(
        get_coffee_aim_entry(
          coffee,
          check_aim_and_get_entry(coffee_races, race_enum.arim_kin, 1, 3),
        ),
      );
      buffer.push(
        get_coffee_aim_entry(
          coffee,
          check_aim_and_get_entry(coffee_races, race_enum.tenn_spr, 2, 3),
        ),
      );
      buffer.push(
        get_coffee_aim_entry(
          coffee,
          check_aim_and_get_entry(coffee_races, race_enum.takz_kin, 2, 3),
        ),
      );
      buffer.push(
        get_coffee_aim_entry(
          coffee,
          check_aim_and_get_entry(coffee_races, race_enum.japa_cup, 2, 3),
        ),
      );
      buffer.push(
        get_coffee_aim_entry(
          coffee,
          check_aim_and_get_entry(coffee_races, race_enum.arim_kin, 2, 1),
        ),
      );
    }
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.hope_sta, 0, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.hoch_sho, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 1));
    if (plan_b > 0) {
      const edu_weeks = era.get('cflag:32:育成回合计时');
      if (edu_weeks >= 95 + 1) {
        buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
      }
      if (edu_weeks >= 95 + 19) {
        buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 1));
        buffer.push(check_aim_and_get_entry(races, race_enum.prix_lat, 2, 1));
      }
    } else {
      buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 3));
      buffer.push(check_aim_and_get_entry(races, race_enum.sank_hai, 2, 2));
      buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
      buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
    }
    return buffer;
  }

  get_aim_races() {
    return aim_races[new TachyonEduMarks().plan_b];
  }
};
