const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, ebj) {
    const maya = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    const kojo = i18n().kojo[this.id].recruit;
    const event_marks = EventMarks.get(0);
    switch (stage) {
      case event_hooks.recruit:
        if (era.get(`cflag:24:招募状态`) === recruit_flags.no) {
          if (await this.check_before_rec()) {
            return false;
          }
          const ret = await kojo.rec_start(maya, me);
          if (ret['down'] === true) {
            era.set('cflag:24:随机招募', 0);
            event_marks.add(event_hooks.recruit_start);
            add_event(
              event_hooks.recruit_start,
              new EventObject(24, cb_enum.recruit),
            );
            return true;
          } else if (ret['down'] === false) {
            all_reward_in_event(0, { attr: [0, 0, 10], relation: 0 }) &&
              (await era.waitAnyKey());
          }
          era.set('cflag:24:随机招募', 0);
          event_marks.add(event_hooks.recruit_start);
          add_event(
            event_hooks.recruit_start,
            new EventObject(24, cb_enum.recruit),
          );
          return true;
        } else {
          era.set(`cflag:24:随机招募`, 0); //三阶段把随机招募设为0
          if (era.get(`cflag:24:招募状态`) === -3) {
            if ((await kojo.rec_3(maya, me)) === 1) {
              era.set(`cflag:24:招募状态`, -2);
            }
          } else {
            await kojo.rec_try_skip_station(maya);
            era.set('flag:物色对象', this.id);
          }
          event_marks.add(event_hooks.out_station);
          add_event(
            event_hooks.out_station,
            new EventObject(24, cb_enum.recruit),
          ); //鸽了以后增加4阶段事件
        }
        break;
      case event_hooks.recruit_start:
        await kojo.rec_after(maya, me);
        event_marks.sub(event_hooks.recruit_start);
        era.set('cflag:24:随机招募', 1);
        era.set('cflag:24:招募状态', -3);
        era.set('flag:物色对象', 24);
        return true;
      case event_hooks.out_station:
        if (era.get('flag:当前互动角色')) {
          // 如果身边带着其他马娘，不触发
          // 把事件再塞回去，不然下次不触发了
          add_event(
            event_hooks.out_station,
            new EventObject(24, cb_enum.recruit),
          );
          return false;
        }
        switch (await kojo.rec_station(maya, me)) {
          case 1:
            event_marks.sub(event_hooks.out_station);
            era.set('flag:物色对象', 0);
            era.set(`cflag:24:招募状态`, recruit_flags.yes);
            await this.recruit_end();
            return true;
          case 2:
            // 鸽了跳过事件，并把事件再塞回去，不然下次不触发了
            add_event(
              event_hooks.out_station,
              new EventObject(24, cb_enum.recruit),
            );
            break;
          case 3:
            // 选3重置招募事件链
            era.set('cflag:24:随机招募', 1);
            era.set('cflag:24:招募状态', -4);
            event_marks.sub(event_hooks.out_station);
            era.set('flag:物色对象', 0);
        }
    }
    return false;
  }
};
