const era = require('#/era-electron');

const { update_kiss_exp } = require('#/system/ero/sys-calc-ero-exp');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const { add_event } = require('#/event/queue');
const masturbate = require('#/event/snippets/masturbate');

const { get_date_obj } = require('#/data/date-indicator');
const CoffeeEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-25');
const event_hooks = require('#/data/event/event-hooks');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  async 49(coffee, me) {
    await this.#kojo[49](coffee, me);
    begin_and_init_ero(25);
    await masturbate(25);
    end_ero_and_train();
    await sys_love_uma_in_event(25);
  }

  async 74(coffee, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      const edu_marks = new CoffeeEduMarks();
      edu_marks.our_taste += edu_marks.our_taste === 1;
      if ((await this.#kojo['74-1'](coffee, me, callname)) === 1) {
        if (era.get('cflag:25:育成回合计时') < 96) {
          era.set('cflag:25:爱慕暂拒', 74);
        } else {
          add_event(event_hooks.back_school, event_object);
        }
      } else {
        era.set('cflag:25:爱慕暂拒', 74);
      }
    } else if (stage === event_hooks.back_school) {
      const cur_chara = era.get('flag:当前互动角色');
      if (cur_chara > 0 && cur_chara !== this.id) {
        add_event(stage, event_object);
        return;
      }
      if ((await this.#kojo['74-2'](coffee, me, callname)) === 1) {
        update_kiss_exp(get_date_obj(), 0, this.id);
        await sys_love_uma_in_event(25);
      } else {
        era.set('cflag:25:爱慕暂拒', 74);
      }
    }
  }

  async 89(coffee, me, callname) {
    if ((await this.#kojo[89](coffee, me, callname)) === 1) {
      update_kiss_exp(get_date_obj(), 0, this.id);
      await sys_love_uma_in_event(25);
    } else {
      era.set('cflag:25:爱慕暂拒', 89);
    }
  }

  async 99(coffee, me, callname) {
    await this.#kojo[99](coffee, callname);
    await sys_love_uma_in_event(25);
  }
};
