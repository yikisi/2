const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_aim_race = require('#/event/snippets/check-aim-race');
const common_palace_check = require('#/event/check/snippets/common-palace-check');
const { add_event, cb_enum } = require('#/event/queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { attr_change_colors } = require('#/data/color-const');
const check_stages = require('#/data/event/check-stages');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_breast_cup } = require('#/data/info-generator');
const RaceInfo = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');

/** @type {Record<string,function(Record<string,*>)>} */
const handlers = {};

const race2fans_reward = [];
race2fans_reward[race_enum.oka_sho] = 10500;
race2fans_reward[race_enum.sats_sho] = 11000;
race2fans_reward[race_enum.toky_yus] = 20000;
race2fans_reward[race_enum.yush_him] = 11000;
race2fans_reward[race_enum.nhk_cup] = 10500;
race2fans_reward[race_enum.takz_kin] = 15000;
race2fans_reward[race_enum.yasu_kin] = 13000;
race2fans_reward[race_enum.japa_dir] = 6500;
race2fans_reward[race_enum.sprt_sta] = 13000;
race2fans_reward[race_enum.shuk_sho] = 10000;
race2fans_reward[race_enum.kiku_sho] = 12000;
race2fans_reward[race_enum.tenn_sho] = 15000;
race2fans_reward[race_enum.mile_cha] = 11000;
race2fans_reward[race_enum.japa_cup] = 30000;
race2fans_reward[race_enum.eliz_cup] = 10500;
race2fans_reward[race_enum.jbc_cls] = 8000;
race2fans_reward[race_enum.jbc_spr] = 7000;
race2fans_reward[race_enum.arim_kin] = 30000;
race2fans_reward[race_enum.toky_dai] = 8000;
race2fans_reward[race_enum.cham_cup] = 10000;
race2fans_reward[race_enum.febr_sta] = 10000;
race2fans_reward[race_enum.kawa_kin] = 7000;
race2fans_reward[race_enum.takm_kin] = 13000;
race2fans_reward[race_enum.sank_hai] = 13500;
race2fans_reward[race_enum.tenn_spr] = 15000;
race2fans_reward[race_enum.vict_mile] = 10500;
race2fans_reward[race_enum.kash_kin] = 8000;
race2fans_reward[race_enum.teio_sho] = 7000;
race2fans_reward[race_enum.hope_sta] = 7000;
race2fans_reward[race_enum.hans_fil] = 6500;
race2fans_reward[race_enum.asah_sta] = 7000;

race2fans_reward[race_enum.prix_dia] = 28000;
race2fans_reward[race_enum.prix_lat] = 32000;
race2fans_reward[race_enum.chn_frt] = 30000;
race2fans_reward[race_enum.hk_spr] = 20000;
race2fans_reward[race_enum.hk_mil] = 25000;
race2fans_reward[race_enum.hk_cup] = 30000;
race2fans_reward[race_enum.hk_vas] = 25000;

/**
 * @param {number} fans
 * @param {number} rank
 * @returns {number}
 */
function get_fans_reward(fans, rank) {
  if (rank === 1) {
    return fans;
  } else if (rank <= 5) {
    return (fans * (6 - rank)) / 10;
  } else if (rank <= 10) {
    return 500;
  } else {
    return 100;
  }
}

/** @param {{aim_race:boolean,edu_weeks:number,race:number,rank:number}} extra_flag */
handlers[check_stages.after_race] = (extra_flag) => {
  const urara_edu_marks = new UraraEduMarks();
  switch (race_infos[extra_flag.race]) {
    case RaceInfo.class_enum.G1:
      urara_edu_marks.fans += get_fans_reward(
        race2fans_reward[extra_flag.race],
        extra_flag.rank,
      );
      break;
    case RaceInfo.class_enum.G2:
      urara_edu_marks.fans += get_fans_reward(6000, extra_flag.rank);
      break;
    case RaceInfo.class_enum.G3:
      urara_edu_marks.fans += get_fans_reward(4000, extra_flag.rank);
      break;
    case RaceInfo.class_enum.OP:
      urara_edu_marks.fans += get_fans_reward(2500, extra_flag.rank);
      break;
    case RaceInfo.class_enum['Pre-OP']:
      urara_edu_marks.fans += get_fans_reward(1000, extra_flag.rank);
      break;
    case RaceInfo.class_enum.Spe:
      if (extra_flag.rank === 1) {
        urara_edu_marks.fans += 1000;
      }
  }
};

const aim_races = {};
aim_races[race_enum.begin_race] = 2;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = -4;
aim_races[get_aim_race_index(race_enum.negi_sta, 2)] = 2;
aim_races[get_aim_race_index(race_enum.febr_sta, 2)] = 2;
aim_races[get_aim_race_index(race_enum.elm_sta, 2)] = 2;
aim_races[get_aim_race_index(race_enum.jbc_spr, 2)] = 2;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 2;

/** @param {{edu_weeks:number,race:number}} extra_flag */
handlers[check_stages.aim_race] = (extra_flag) =>
  aim_races[`${extra_flag.edu_weeks}_${extra_flag.race}`] ||
  aim_races[extra_flag.race];

handlers[check_stages.love_event] = function () {
  era.get('love:52') === 49 &&
    add_event(event_hooks.week_end, new EventObject(52, cb_enum.love));
};

handlers[check_stages.next_week] = () => {
  const cup_size = get_breast_cup(60);
  if (!era.get('talent:60:泌乳') && cup_size >= 'E') {
    era.set('talent:60:泌乳', 3);
  }
  check_and_register_aim_race(52, aim_races);
};

handlers[check_stages.aim_check] = () => {
  const buffer = [],
    /** @type {Record<string,{race:number,rank:number}>} */
    races = era.get('cflag:52:育成成绩');
  buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
  buffer.push(check_aim_and_get_entry(races, race_enum.negi_sta, 2, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.febr_sta, 2, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.elm_sta, 2, 5));
  buffer.push(check_aim_and_get_entry(races, race_enum.jbc_spr, 2, 1));
  buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 16));
  const edu_marks = new UraraEduMarks();
  buffer.push({
    check: edu_marks.fans >= 25000,
    color:
      edu_marks.fans >= 25000 ? attr_change_colors.up : attr_change_colors.down,
    content: `粉丝数 ${edu_marks.fans}/25000 ${
      edu_marks.fans >= 25000 ? '✔' : '✘'
    }`,
  });
  return buffer;
};

handlers[check_stages.palace_check] = () => {
  common_palace_check(52);
  return handlers[check_stages.aim_check]();
};

/** @param {{aim_check:boolean,titles:{n:string,c:string}[]}} extra_flag */
handlers[check_stages.title_check] = (extra_flag) => {
  const c = get_chara_talk(52).color;
  /** @type {Record<string,{race:number,rank:number}>} */
  const races = era.get('cflag:52:育成成绩');
  if (new UraraEduMarks().fans >= 550000) {
    extra_flag.titles.push({
      c,
      n: '乌拉拉加油',
    });
  }
  if (check_aim_race(races, race_enum.arim_kin, 2, 1)) {
    extra_flag.titles.push({
      c,
      n: '中山之樱',
    });
    if (check_aim_race(races, race_enum.arim_kin, 1, 1)) {
      extra_flag.titles.push({
        c,
        n: '跨越世界',
      });
    }
    extra_flag.aim_check && sys_personal_achievement.set(52, 1);
  }
};

handlers[check_stages.personal_titles] = () => [
  '乌拉拉加油',
  '中山之樱',
  '跨越世界',
];

/**
 * @param {number} stage_id
 * @param extra_flag
 */
module.exports = (stage_id, extra_flag) => {
  if (!handlers[stage_id]) {
    throw new Error('unsupported stage!');
  }
  return handlers[stage_id](extra_flag);
};
