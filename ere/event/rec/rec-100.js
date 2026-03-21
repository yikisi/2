const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, ebj) {
    const acute = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    const kojo = i18n().kojo[this.id].recruit;
    if (stage === event_hooks.recruit) {
      if (await this.check_before_rec()) {
        return false;
      }
      function get_ct_cl(cid) {
        return (
          era.get(`cflag:${cid}:招募状态`) === recruit_flags.yes && {
            ct: get_chara_talk(cid),
            cl: sys_get_colored_callname(cid, 0),
          }
        );
      }
      await kojo.rec_start(acute, me, {
        nn: get_ct_cl(60),
        tannhauser: get_ct_cl(61),
        mcqueen: get_ct_cl(13),
        gs: get_ct_cl(7),
        ardan: get_ct_cl(71),
        halo: get_ct_cl(61),
        oguri: get_ct_cl(6),
        tama: get_ct_cl(21),
        grass: get_ct_cl(11),
        tachyon: get_ct_cl(32),
        coffee: get_ct_cl(25),
      });
      era.set('cflag:100:随机招募', 0);
      era.set('flag:物色对象', 100);
      EventMarks.get(0).add(event_hooks.school_rooftop);
      add_event(
        event_hooks.school_rooftop,
        new EventObject(100, cb_enum.recruit),
      );
    } else {
      if (era.get('flag:当前互动角色') > 0) {
        add_event(event_hooks.school_rooftop, ebj);
        return;
      }
      await kojo.rec_rooftop(
        acute,
        get_chara_talk(302),
        get_chara_talk(301),
        me,
      );
      era.set('flag:物色对象', 0);
      EventMarks.get(0).sub(event_hooks.school_rooftop);
      era.set(`cflag:100:招募状态`, recruit_flags.yes);
      return true;
    }
  }
};
