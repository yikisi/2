const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');
const { get_inner_urara } = require('#/event/snippets/105200');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const UraraLifeMarks = require('#/data/event/life-event-marks/life-event-marks-52');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    const life_marks = new UraraLifeMarks();
    const me = get_chara_talk(0);
    const callname = sys_get_callname(this.id, 0);
    const urara = get_chara_talk(this.id);
    const kojo = i18n().kojo[this.id].recruit;
    era.set('callname:0:52', '105202');
    const ret = await kojo.recruit(
      urara,
      get_inner_urara(),
      me,
      callname,
      life_marks.rec,
    );
    life_marks.rec = 1;
    if (ret['rec'] === 2) {
      all_reward_in_event(0, { attr: [0, 1] }) && (await era.waitAnyKey());
      return true;
    }
    if (ret['reward'] === 1) {
      sys_like_chara(52, 0, 5, false);
    } else {
      sys_love_uma(52, 1, false);
    }
    if (ret['love'] === 3) {
      sys_love_uma(52, 1, false);
    }
    era.set('cflag:52:招募状态', recruit_flags.yes);
    era.set('callname:52:0', 'trainer');
    era.set('callname:0:52', '105211');
    era.set('flag:当前互动角色', 52);
    add_event(
      event_hooks.week_end,
      new EventObject(52, cb_enum.edu).set_arg('after_begin'),
    );
  }
};
