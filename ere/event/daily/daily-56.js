/**
 * @file 待兼福来 - 日常
 * @author ALEX
 */
const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');
const kitaru_good_morning = require('#/event/daily/daily-events-56/good-morning');
const kitaru_good_night = require('#/event/daily/daily-events-56/good-night');
const kitaru_load_talk = require('#/event/daily/daily-events-56/load-talk');
const kitaru_office_cook = require('#/event/daily/daily-events-56/office-cook');
const kitaru_office_game = require('#/event/daily/daily-events-56/office-game');
const kitaru_office_gift = require('#/event/daily/daily-events-56/office-gift');
const kitaru_office_prepare = require('#/event/daily/daily-events-56/office-prepare');
const kitaru_office_rest = require('#/event/daily/daily-events-56/office-rest');
const kitaru_office_study = require('#/event/daily/daily-events-56/office-study');
const kitaru_out_church = require('#/event/daily/daily-events-56/out-church');
const kitaru_out_river = require('#/event/daily/daily-events-56/out-river');
const kitaru_out_shopping = require('#/event/daily/daily-events-56/out-shopping');
const kitaru_out_station = require('#/event/daily/daily-events-56/out-station');
const kitaru_school_atrium = require('#/event/daily/daily-events-56/school-atrium');
const kitaru_school_rooftop = require('#/event/daily/daily-events-56/school-rooftop');
const kitaru_select = require('#/event/daily/daily-events-56/select');
const kitaru_talk = require('#/event/daily/daily-events-56/talk');
const kitaru_week_start = require('#/event/daily/daily-events-56/week-start');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

/** @type {Record<string,function(CharaTalk,CharaTalk,string):Promise>} */
const celebration_handlers = {};

require('#/event/daily/daily-events-56/celebration')(celebration_handlers);

module.exports = class extends CustomizedDaily {
  select = kitaru_select;

  good_morning = kitaru_good_morning;

  async good_night(hook) {
    if (!sys_check_awake(0) || !sys_check_awake(56)) {
      return await super.good_night(hook);
    }
    await kitaru_good_night(hook);
  }

  async talk() {
    if (!sys_check_awake(56)) {
      return await super.talk();
    }
    await kitaru_talk();
  }

  office_gift = kitaru_office_gift;

  office_cook = kitaru_office_cook;

  office_study = kitaru_office_study;

  office_rest = kitaru_office_rest;

  office_prepare = kitaru_office_prepare;

  office_game = kitaru_office_game;

  school_atrium = kitaru_school_atrium;

  school_rooftop = kitaru_school_rooftop;

  out_river = kitaru_out_river;

  out_shopping = kitaru_out_shopping;

  out_church = kitaru_out_church;

  out_station = kitaru_out_station;

  week_start = kitaru_week_start;

  load_talk = kitaru_load_talk;

  async celebration(hook) {
    const callname = sys_get_callname(56, 0),
      kitaru = get_chara_talk(56),
      me = get_chara_talk(0),
      date = era.get('cflag:56:育成回合计时') % 48;
    if (kitaru.sex_code === 1 || !celebration_handlers[date]) {
      return await super.celebration(hook);
    }
    await celebration_handlers[date](kitaru, me, callname);
  }
};
