const era = require('#/era-electron');

const { update_kiss_exp } = require('#/system/ero/sys-calc-ero-exp');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const masturbate = require('#/event/snippets/masturbate');
const print_event_name = require('#/event/snippets/print-event-name');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const CharaTitles = require('#/data/chara-titles');
const { get_date_obj } = require('#/data/date-indicator');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  async 49(silence, me, callname) {
    await print_event_name(this.#kojo[49].title, silence);
    await print_title_with_kojo(this.#kojo, '49', silence, me, callname);
    begin_and_init_ero(400);
    await masturbate(400);
    end_ero_and_train();
    await sys_love_uma_in_event(400);
  }

  async 74(silence, me, callname) {
    await print_event_name(this.#kojo['74-title'](silence), silence);
    const key = CharaTitles.get(400)
      .get()
      .some((t) => t.n === 'r_3crown_a')
      ? '74-3crown-a'
      : '74';
    if ((await this.#kojo[key](silence, me, callname)) === 1) {
      update_kiss_exp(get_date_obj(), this.id, 0);
      await sys_love_uma_in_event(400);
    } else {
      era.set('cflag:400:爱慕暂拒', 74);
      await punish_rejecting_love(this.id);
    }
  }
};
