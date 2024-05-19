const { get, input, printMultiColumns } = require('#/era-electron');

const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const god_love_common = require('#/event/love/snippets/love-god-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { pregnant_stage_enum } = require('#/data/ero/status-const');
const GodolphinLifeMarks = require('#/data/event/life-event-marks/life-event-marks-341');

/** @type {Record<string,function(CharaTalk,CharaTalk,string):Promise<boolean|void>>} */
const handlers = {};

handlers[49] = async (god) => {
  await print_event_name('爱欲', god);
  new GodolphinLifeMarks().love = 1;
  if (get('love:341') === 49) {
    await sys_love_uma_in_event(341);
  }
};

handlers[50] = async (god, me, callname) => {
  await print_event_name('受肉', god);
  printMultiColumns(
    [
      { content: '占有（让祂怀上神胎）', type: 'button' },
      {
        config: { disabled: me.sex_code === 1 },
        content:
          get('cflag:0:妊娠阶段') >> pregnant_stage_enum.embryo
            ? '献上（将腹中胎儿变成神胎）'
            : '投怀（自己怀上神胎）',
        type: 'button',
      },
      { content: '避开目光', type: 'button' },
    ].map((e, i) => {
      e.accelerator = i;
      e.config ||= {};
      e.config.width = 12;
      return e;
    }),
  );
  await god_love_common(
    await input(),
    god,
    me,
    callname,
    () => {},
    () => {},
    () => {},
    () => {},
  );
};

/**
 * 高多芬柏布 - 爱慕
 *
 * @author 黑奴队长（临时）
 *
 * @param _
 * @param __
 * @param {EventObject} event_object
 */
module.exports = async (_, __, event_object) => {
  if (!handlers[event_object.arg]) {
    throw new Error();
  }
  return await handlers[event_object.arg](
    get_chara_talk(341),
    get_chara_talk(0),
    sys_get_callname(341, 0),
    event_object,
  );
};
