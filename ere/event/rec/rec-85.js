const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const RubyLifeMarks = require('#/data/event/life-event-marks/life-event-marks-85');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_breast_cup } = require('#/data/info-generator');

const { i18n } = require('#/i18n/selector');

/** @type {Record<string,function(extra_flag:*,event_object:EventObject):Promise<boolean>>} */
const handlers = {};

handlers[event_hooks.recruit] = async () => {
  const ret = await i18n().kojo[85].recruit.rec_start(
    get_chara_talk(85),
    get_chara_talk(0),
  );
  if (ret['hentai2'] === 1 || ret['select'] === 1) {
    return false;
  }
  era.set('cflag:85:随机招募', 0);
  era.set('flag:物色对象', 85);
  era.set('cflag:85:招募状态', {
    round: era.get('flag:当前回合数'),
    flag: 0,
    special: (ret['hentai1'] === 2) + (ret['hentai2'] === 3),
  });
  EventMarks.get(0).add(event_hooks.out_start);
  add_event(event_hooks.out_start, new EventObject(85, cb_enum.recruit));
  return true;
};

handlers[event_hooks.out_start] = async (event_object) => {
  if (era.get('flag:当前互动角色')) {
    add_event(event_hooks.out_start, event_object);
    return false;
  }
  const ruby = get_chara_talk(85);
  const me = get_chara_talk(0);
  let ret = era.get('cflag:85:招募状态');
  ret.flag++;
  switch (ret.flag) {
    case 1:
      await i18n().kojo[85].recruit.rec_out1(ruby, me);
      add_event(event_hooks.out_start, event_object);
      break;
    case 2:
      await i18n().kojo[85].recruit.rec_out2(ruby, me);
      add_event(event_hooks.out_start, event_object);
      break;
    case 3:
      if ((await i18n().kojo[85].recruit.rec_out3(ruby, me))['select'] === 1) {
        // 招募失败，状态复位
        era.set('cflag:85:随机招募', 1);
        era.set('cflag:85:招募状态', 0);
        era.set('flag:物色对象', 0);
        return true;
      }
      add_event(event_hooks.out_start, event_object);
      break;
    case 4:
      await i18n().kojo[85].recruit.rec_out4(ruby, me);
      add_event(event_hooks.out_start, event_object);
      break;
    case 5:
      await i18n().kojo[85].recruit.rec_out5(ruby, me, get_breast_cup(85));
      EventMarks.get(0).sub(event_hooks.out_start);
  }
  return true;
};

handlers[event_hooks.week_end] = async (ebj) => {
  await i18n().kojo[85].recruit.rec_week_end(
    get_chara_talk(85),
    get_chara_talk(0),
  );
  add_event(event_hooks.week_start, ebj);
};

handlers[event_hooks.week_start] = async () => {
  await i18n().kojo[85].recruit.rec_final(
    get_chara_talk(85),
    get_chara_talk(0),
  );
  era.set('callname:0:85', '108511');
  new RubyLifeMarks().after_recruit = 1;
  era.set('cflag:85:招募状态', recruit_flags.yes);
  era.set('flag:物色对象', 0);
};

module.exports = class extends CustomizedRecruit {
  async recruit(stage, event_object) {
    if (handlers[stage]) {
      return await handlers[stage](event_object);
    }
    return false;
  }
};
