const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');

const check_stages = require('#/data/event/check-stages');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_infos } = require('#/data/race/race-const');
const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

/**
 * @param {Record<string,function(Record<string,any>):*>} handlers
 * @param {number} god_id
 */
module.exports = (handlers, god_id) => {
  handlers[check_stages.love_event] = () => {
    const love = era.get(`love:${god_id}`);
    if (
      love === 49 ||
      era.get(`cflag:${god_id}:招募状态`) === recruit_flags.yes
    ) {
      add_event(
        event_hooks.week_end,
        new EventObject(god_id, cb_enum.love).set_arg(love),
      );
    } else {
      era.set(`cflag:${god_id}:爱慕暂拒`, love);
    }
  };

  handlers[check_stages.next_week] = () => {
    const life_marks = new LifeEventMarks(god_id);
    if (era.get(`love:${god_id}`) >= 50 && !life_marks.get('love')) {
      add_event(
        event_hooks.week_end,
        new EventObject(god_id, cb_enum.love).set_arg(49),
      );
    }
    if (era.get(`cflag:${god_id}:招募状态`) < 0) {
      if (!era.add(`cflag:${god_id}:招募状态`, 1)) {
        era.set(`cflag:${god_id}:育成回合计时`, 'x');
        add_event(
          event_hooks.week_start,
          new EventObject(god_id, cb_enum.recruit),
        );
      }
    }
    throw new Error();
  };

  handlers[check_stages.prison] = handlers[check_stages.rape_in_sleeping] =
    () => {
      if (era.get(`cflag:${god_id}:招募状态`) !== recruit_flags.yes) {
        return false;
      }
      throw new Error();
    };

  /** @param {{aim_check:boolean,titles:{c:string,n:string}[]}} extra_flag */
  handlers[check_stages.title_check] = ({ aim_check, titles }) => {
    if (
      new RaceHistory(god_id)
        .get_values()
        .filter(
          (e) =>
            e.rank === 1 && race_infos[e.race].race_class === class_enum.G1,
        ).length >= 6
    ) {
      titles.push({
        c: get_chara_talk(god_id).color,
        n: era.get(`staticcstr:${god_id}:称号`),
      });
      if (aim_check) {
        sys_personal_achievement.set(god_id, 1);
        new LifeEventMarks(god_id).set('buff', 1);
      }
    }
  };
};
