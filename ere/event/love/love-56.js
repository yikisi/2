const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { add_event } = require('#/event/queue');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const masturbate = require('#/event/snippets/masturbate');
const print_event_name = require('#/event/snippets/print-event-name');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  /**
   * @param {CharaTalk} kitaru
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async 25(kitaru, me, callname, stage, extra_flag, event_object) {
    const cur_chara = era.get('flag:当前互动角色');
    if (cur_chara > 0 && cur_chara !== this.id) {
      add_event(stage, event_object);
      return;
    }
    await print_title_with_kojo(this.#kojo, '25', kitaru, me, callname);
    return true;
  }

  async 49(kitaru, me, callname) {
    const h = this.#kojo[49];
    await print_event_name(h.title, kitaru);
    if (kitaru.sex_code === 1) {
      await sys_love_uma_in_event(56);
      return;
    }
    if ((await h(kitaru, me, callname)) === 1) {
      await sys_love_uma_in_event(56);
    } else {
      era.println();
      era.set('cflag:56:爱慕暂拒', 49);
      sys_change_motivation(56, -1);
    }
    begin_and_init_ero(56);
    await masturbate(56);
    end_ero_and_train();
  }

  async 74(kitaru, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      const h = this.#kojo['74-1'];
      await print_event_name(h.title, kitaru);
      if (kitaru.sex_code === 1 || me.sex_code !== 1) {
        return await super.common_result();
      }
      if ((await h(kitaru, me, callname)) === 1) {
        sys_change_motivation(56, 1);
        add_event(event_hooks.week_start, event_object);
      } else {
        era.set('cflag:56:爱慕暂拒', 74);
      }
    } else if (stage === event_hooks.week_start) {
      if (era.get('cflag:0:位置') > 0 || era.get('cflag:56:位置') > 0) {
        add_event(stage, event_object);
        return;
      }
      if (
        (
          await print_title_with_kojo(this.#kojo, '74-2', kitaru, me, callname)
        )[0] === 1
      ) {
        era.set('flag:当前位置', location_enum.home);
        await quick_into_sex(56);
        await sys_love_uma_in_event(56);
      } else {
        sys_change_motivation(56, -2);
        await punish_rejecting_love(56);
        era.set('cflag:56:爱慕暂拒', 74);
      }
    }
  }

  async 89(kitaru, me, callname) {
    if (kitaru.sex_code === 1) {
      await sys_love_uma_in_event(56);
      return;
    }
    await print_title_with_kojo(this.#kojo, '89', kitaru, me, callname);
    era.println();
    add_jewel_reward(56, 10, 100);
    if (era.get('talent:56:淫身') !== 2) {
      era.set('talent:56:淫身', 2);
    }
    await sys_love_uma_in_event(this.id);
  }

  async 99(kitaru, me, callname) {
    const h = this.#kojo[99];
    await print_event_name(h.title, kitaru);
    if (kitaru.sex_code === 1 || me.sex_code === 0) {
      await sys_love_uma_in_event(56);
      return;
    }
    await h(kitaru, me, callname);
    begin_and_init_ero(0, 56);
    set_palam_to_max(
      56,
      part_enum.penis,
      part_enum.virgin,
      part_enum.masochism,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.hit),
      new EroParticipant(56, part_enum.body),
      false,
    );
    set_palam_to_max(0, part_enum.penis);
    set_palam_to_max(56, part_enum.penis, part_enum.virgin);
    await quick_make_love(
      new EroParticipant(0, part_enum.penis),
      new EroParticipant(56, part_enum.virgin),
      false,
    );
    end_ero_and_train();

    era.println();
    add_jewel_reward(56, [10, 13], [100, 50]);
    await sys_love_uma_in_event(56);
  }
};
