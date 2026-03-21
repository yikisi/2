const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const MaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-4');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, ebj) {
    const maru = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    const kojo = i18n().kojo[this.id].recruit;
    switch (stage) {
      case event_hooks.recruit:
        if (await this.check_before_rec()) {
          return;
        }
        // 否则表示是在训练场直接招募的场合，招募会失败
        await kojo.rec_start(maru, me);
        era.set('cflag:4:招募状态', recruit_flags.success_on_leave);
        break;
      case event_hooks.recruit_end:
        // extra_flag是success的时候，表示是在训练场直接离开的场合，会被丸善斯基搭话，招募成功
        await kojo.rec_leave_playground(maru, me);
        // 把招募事件注册在天台的随机事件队列里，不然去天台不会触发事件
        add_event(
          event_hooks.school_rooftop,
          new EventObject(4, cb_enum.recruit),
        );
        new EventMarks(0).add(event_hooks.school_rooftop);
        // 把姥爷从随机招募列表里去掉，不然以后再来训练场还能看见她
        era.set('cflag:4:随机招募', 0);
        // 设置变量，以禁止玩家进入其他招募事件链
        era.set('flag:物色对象', 4);
        // 本身已经是离开训练场的时候触发的事件，所以就跳过后续的离开训练场事件
        return true;
      case event_hooks.school_rooftop:
        // 这里是从天台的随机事件进来的
        // FLAGNAME:5 = 当前互动角色
        if (era.get('flag:5') > 0) {
          // 如果身边带着其他马娘，不触发
          // 把事件再塞回去，不然下次不触发了
          add_event(event_hooks.school_rooftop, ebj);
          return false;
        }
        // 触发事件并招募成功
        await kojo.rec_rooftop(maru, me, sys_get_colored_callname(this.id, 0));
        new EventMarks(0).sub(event_hooks.school_rooftop);
        new MaEduMarks().after_recruit++;
        // 设置招募状态为成功，同时也是在队伍里的标记
        // CFLAGNAME:66 = 招募状态
        era.set('cflag:4:66', recruit_flags.yes);
        // 结束招募事件链
        add_event(
          event_hooks.week_end,
          new EventObject(4, cb_enum.edu).set_arg('beginning'),
        );
        era.set('flag:物色对象', 0);
        await this.recruit_end();
        // 返回true，表示跳过后面的天台事件流程
        return true;
    }
  }
};
