const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const print_ero_page = require('#/page/page-ero');

const CustomizedLove = require('#/event/love/love-common');
const { add_event } = require('#/event/queue');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const masturbate = require('#/event/snippets/masturbate');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const event_hooks = require('#/data/event/event-hooks');

const { i18n } = require('#/i18n/selector');

async function common_love_kita() {
  begin_and_init_ero(68);
  await masturbate(68);
  end_ero_and_train();
  await sys_love_uma_in_event(68);
}

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  async 49(kita) {
    await print_title_with_kojo(this.#kojo, '49', kita);
    await common_love_kita();
  }

  async 74(kita, me, callname) {
    await print_title_with_kojo(this.#kojo, '74', kita, me, callname);
    await common_love_kita();
  }

  async 89(kita, me, callname, stage, extra_flag, event_object) {
    await print_title_with_kojo(this.#kojo, '89', kita, callname);
    if (kita.sex_code !== 1) {
      add_event(event_hooks.out_shopping, event_object.set_arg('m_kita'));
      add_event(
        event_hooks.out_station,
        event_object.copy().set_arg('nyotaimori'),
      );
    }
    await common_love_kita();
  }

  /**
   * @param {CharaTalk} kita
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async m_kita(kita, me, callname, stage, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 68) {
      add_event(stage, event_object);
      return false;
    } else if (
      !era.get('status:68:发情') ||
      era.get('exp:68:受虐高潮次数') < 10
    ) {
      await me.say_as_unknown_and_wait(this.#kojo.m_kita_notify(kita));
      await era.clear(1);
      add_event(stage, event_object);
      return false;
    }
    await print_title_with_kojo(this.#kojo, 'm_kita', kita, me);
    begin_and_init_ero(0, 68);
    const part = kita.sex_code - 1 ? '阴道' : '阴茎';
    era.set(`palam:68:${part}快感`, era.get(`tcvar:68:${part}快感上限`));
    era.set('palam:68:受虐快感', era.get('tcvar:68:受虐快感上限'));
    await quick_make_love(
      new EroParticipant(0, part_enum.hit),
      new EroParticipant(68, part_enum.body),
      false,
    );
    await print_ero_page(68, true);
    await end_ero_and_show_result(true);
    await this.#kojo.m_kita_end(me);
    era.println();
    add_jewel_reward(68, 10, 100);
    await era.waitAnyKey();
    return true;
  }

  /**
   * @param {CharaTalk} kita
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async nyotaimori(kita, me, callname, stage, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 68) {
      add_event(stage, event_object);
      return false;
    } else if (era.get('exp:68:受虐高潮次数') < 10) {
      await me.say_as_unknown_and_wait(this.#kojo.nyotaimori_notify(kita));
      await era.clear(1);
      add_event(stage, event_object);
      return false;
    }
    await print_title_with_kojo(this.#kojo, 'nyotaimori', kita, me);
    era.println();
    add_jewel_reward(68, [8, 10, 13], [100, 100, 50]);
    await era.waitAnyKey();
    return true;
  }
};
