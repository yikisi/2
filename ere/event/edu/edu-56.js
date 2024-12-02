/**
 * @file 待兼福来 - 育成
 *
 * @author ALEX
 */
const era = require('#/era-electron');

const CustomizedEdu = require('#/event/edu/edu-common');
const kitaru_celebration = require('#/event/edu/edu-events-56/celebration');
const kitaru_crazy_fan_end = require('#/event/edu/edu-events-56/crazy-fan-end');
const kitaru_office_cook = require('#/event/edu/edu-events-56/office-cook');
const kitaru_office_game = require('#/event/edu/edu-events-56/office-game');
const kitaru_office_study = require('#/event/edu/edu-events-56/office-study');
const kitaru_out_start = require('#/event/edu/edu-events-56/out-start');
const kitaru_race_end = require('#/event/edu/edu-events-56/race-end');
const kitaru_race_start = require('#/event/edu/edu-events-56/race-start');
const kitaru_train_fail = require('#/event/edu/edu-events-56/train-fail');
const kitaru_train_success = require('#/event/edu/edu-events-56/train-success');
const kitaru_week_end = require('#/event/edu/edu-events-56/week-end');

const FukukitaruEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-56');
const { attr_enum } = require('#/data/train-const');

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FukukitaruEduMarks,EventObject):Promise>} */
const week_start_handlers = {};

[
  require('#/event/edu/edu-events-56/week-start-handlers/week-start-1'),
  require('#/event/edu/edu-events-56/week-start-handlers/week-start-2'),
  require('#/event/edu/edu-events-56/week-start-handlers/week-start-3'),
  require('#/event/edu/edu-events-56/week-start-handlers/week-start-4'),
  require('#/event/edu/edu-events-56/week-start-handlers/week-start-5'),
  require('#/event/edu/edu-events-56/week-start-handlers/week-start-6'),
].forEach((f) => f(week_start_handlers));

module.exports = class extends CustomizedEdu {
  async celebration(kitaru, me, callname, hook, extra_flag, event_object) {
    return await kitaru_celebration(kitaru, me, callname, hook, event_object);
  }

  async crazy_fan_end() {
    if (era.get('flag:强制BE') !== 56) {
      return await super.crazy_fan_end();
    }
    await kitaru_crazy_fan_end();
  }

  async office_cook(kitaru, me, callname, hook, extra_flag, event_object) {
    return await kitaru_office_cook(kitaru, me, callname, hook, event_object);
  }

  async office_game(kitaru, me, callname, hook, extra_flag, event_object) {
    return await kitaru_office_game(kitaru, me, callname, hook, event_object);
  }

  async office_study(kitaru, me, callname, hook, extra_flag, event_object) {
    return await kitaru_office_study(kitaru, me, callname, hook, event_object);
  }

  async out_start(kitaru, me, callname, hook, extra_flag, event_object) {
    return await kitaru_out_start(kitaru, me, callname, hook, event_object);
  }

  async race_end(kitaru, me, callname, hook, extra_flag) {
    await kitaru_race_end(kitaru, me, callname, extra_flag);
  }

  async race_start(kitaru, me, callname, hook, extra_flag) {
    await kitaru_race_start(kitaru, me, callname, extra_flag);
  }

  async train_fail(kitaru, me, callname, hook, extra_flag) {
    if (extra_flag.train === attr_enum.intelligence) {
      return await super.train_fail(kitaru, me, callname, hook, extra_flag);
    }
    await kitaru_train_fail(kitaru, me, callname, hook, extra_flag);
  }

  async train_success(kitaru, me, callname, hook, extra_flag) {
    await kitaru_train_success(kitaru, extra_flag);
  }

  async week_end(kitaru, me, callname, hook, extra_flag, event_object) {
    return await kitaru_week_end(kitaru, me, callname, event_object);
  }

  async week_start(kitaru, me, callname, hook, extra_flag, event_object) {
    if (week_start_handlers[event_object.arg]) {
      const flags = { wait_flag: false };
      const ret = await week_start_handlers[event_object.arg].call(
        this,
        kitaru,
        me,
        callname,
        flags,
        new FukukitaruEduMarks(),
        event_object,
      );
      flags.wait_flag && (await era.waitAnyKey());
      return ret;
    }
  }
};
