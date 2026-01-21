const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, ebj) {
    const kojo = i18n().kojo[this.id].recruit;
    const dict = generate_dictionary(this.id, {
      call: !0,
      teen: !0,
      uma: !0,
      your_sex: !0,
    });
    let temp;
    // CFLAGNAME:66 = 招募状态
    switch (era.get(`cflag:${this.id}:66`)) {
      case recruit_flags.no:
        dict.Y_CALL_301 = sys_get_callname(0, 301);
        temp = (await kojo['rec1'](dict))['relation'];
        era.println();
        if (temp === 1) {
          if (sys_like_chara(this.id, 0, 5)) {
            await era.waitAnyKey();
          }
        } else if (sys_love_uma(this.id, 1)) {
          await era.waitAnyKey();
        }
        // CFLAGNAME:67 = 随机招募
        era.set(`cflag:${this.id}:67`, 0);
        era.set(`cflag:${this.id}:66`, -1);
        EventMarks.get(0).add(event_hooks.school_atrium);
        add_event(
          event_hooks.school_atrium,
          new EventObject(this.id, cb_enum.recruit),
        );
        // FLAGNAME:33 = 物色对象
        era.set('flag:33', this.id);
        return true;
      case -1:
        // FLAGNAME:5 = 当前互动角色
        if (era.get('flag:5') > 0) {
          add_event(stage, ebj);
          return false;
        }
        dict.C_NAME = get_chara_talk(83).name;
        await kojo['rec2'](dict);
        era.set(`cflag:${this.id}:66`, -2);
        add_event(stage, ebj);
        return true;
      case -2:
        if (era.get('flag:5') > 0) {
          add_event(stage, ebj);
          return false;
        }
        await kojo['rec3'](dict);
        era.set(`cflag:${this.id}:67`, 1);
        era.set(`cflag:${this.id}:66`, -3);
        EventMarks.get(0).sub(event_hooks.school_atrium);
        era.set('flag:33', 0);
        return true;
      case -3:
        if (await this.check_before_rec()) {
          return false;
        } else {
          const chris = get_chara_talk(83);
          dict.C_NAME = chris.name;
          dict.C_COLOR = chris.color;
        }
        temp = await kojo['rec4'](dict);
        if (temp[3] === 1) {
          if (sys_like_chara(this.id, 0, 5, true, 1)) {
            await era.waitAnyKey();
          }
        } else {
          sys_change_fame(-5);
          if (sys_love_uma(this.id, 2)) {
            await era.waitAnyKey();
          }
        }
        era.set(`cflag:${this.id}:66`, recruit_flags.yes);
    }
  }
};
