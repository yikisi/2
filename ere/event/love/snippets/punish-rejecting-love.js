const era = require('#/era-electron');

const { sys_change_pressure } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const { get_random_value } = require('#/utils/value-utils');

const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');

/** @param {number} cid */
async function punish_rejecting_love(cid) {
  era.println();
  if (
    sys_like_chara(
      cid,
      0,
      -get_random_value(100, 200 + 100 * era.get(`talent:${cid}:病娇`)),
    )
  ) {
    await era.waitAnyKey();
  }
  sys_change_pressure(
    cid,
    get_random_value(1000, 2500 - 1000 * era.get(`talent:${cid}:病娇`)),
  );
  const my_marks = new MyEduMarks();
  (my_marks.pity ||= []).push(cid);
}

module.exports = punish_rejecting_love;
