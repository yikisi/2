const era = require('#/era-electron');

const {
  sys_check_awake,
  sys_check_remote,
  sys_check_train_enabled,
} = require('#/system/sys-calc-chara-param');

const goto_sex = require('#/page/components/goto-sex');
const {
  common_handle,
  generate_celebration_buttons,
  generate_common_activities,
  generate_common_info_buttons,
  generate_common_save_buttons,
  generate_talk_button,
} = require('#/page/homepage/snippets');
const print_train_page = require('#/page/page-train');

const { get_custom_check } = require('#/event/check/check-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EventMarks = require('#/data/event/event-marks');
const { location_enum } = require('#/data/locations');

/**
 * @param {number} cid
 * @param {function(number,number,number):Promise} save_and_next_week
 * @param {{after_select:boolean,homepage:boolean,week_start:boolean}} flags
 */
module.exports = async function (cid, save_and_next_week, flags) {
  const marks = {
    c: EventMarks.get(cid),
    m: EventMarks.get(0),
  };
  const awake = { c: sys_check_awake(cid), m: sys_check_awake(0) };
  const chara = get_chara_talk(cid);
  /** @type {{[acc],[config]:Record<string,any>,content:string,h:function():Promise}[][]} */
  const buttons = [];
  buttons.push(
    ...generate_common_activities(
      cid,
      flags,
      marks,
      awake,
      sys_check_train_enabled(cid),
      era.get(`cflag:${cid}:成长阶段`),
      // CFLAGNAME:45 = 位置
      era.get(`cflag:${cid}:45`) !== era.get('cflag:0:45'),
      async () => {
        era.set('flag:当前位置', location_enum.beach_train);
        await print_train_page();
        era.set('flag:当前位置', location_enum.beach);
      },
      async () => {
        if (await goto_sex(cid, location_enum.summer_home)) {
          flags.week_start = true;
        }
        era.set('flag:当前位置', location_enum.beach);
      },
    ),
  );
  const group = [];
  group.push(generate_talk_button(chara, awake.m));
  group.push(
    ...generate_celebration_buttons(
      chara,
      marks.c,
      awake,
      sys_check_remote(cid),
      get_custom_check(cid).get_personal_action(),
    ),
  );
  buttons.push(group);
  buttons.push([
    ...generate_common_info_buttons(awake.m),
    ...generate_common_save_buttons(),
  ]);
  await common_handle(buttons);
  if (flags.week_start) {
    await save_and_next_week(
      cid,
      location_enum.beach,
      location_enum.summer_home,
    );
  }
};
