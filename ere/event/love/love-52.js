const era = require('#/era-electron');

const { update_kiss_exp } = require('#/system/ero/sys-calc-ero-exp');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const Love52AfterWife = require('#/event/love/love-events-52/after-wife');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { add_event } = require('#/event/queue');
const masturbate = require('#/event/snippets/masturbate');
const print_event_name = require('#/event/snippets/print-event-name');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { chara_colors } = require('#/data/chara-colors');
const { get_date_obj } = require('#/data/date-indicator');
const { lust_from_palam } = require('#/data/ero/orgasm-const');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');
const event_hooks = require('#/data/event/event-hooks');
const UraraLifeMarks = require('#/data/event/life-event-marks/life-event-marks-52');
const recruit_flags = require('#/data/event/recruit-flags');
const { max_chara_id } = require('#/data/other-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends Love52AfterWife {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  #get_event_vars() {
    return {
      self_name: sys_get_callname(52, 52),
      inner_urara: get_chara_talk(52, chara_colors[52][1]),
      relation: new UraraEduMarks().loop === 2 ? 150 : era.get('relation:52:0'),
    };
  }

  async 49(urara, me, callname) {
    const { self_name, inner_urara } = this.#get_event_vars();
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          '49',
          urara,
          inner_urara,
          me,
          callname,
          self_name,
          sys_get_colored_callname(this.id, 64),
        )
      )[0] === 1
    ) {
      begin_and_init_ero(52);
      await masturbate(52);
      end_ero_and_train();
      await sys_love_uma_in_event(52);
    } else {
      era.set('status:52:熬夜', 1);
      era.set('cflag:52:爱慕暂拒', 49);
    }
    era.set('talent:52:工口意愿', 1);
  }

  /**
   * @param {CharaTalk} urara
   * @param {CharaTalk} me
   * @param {string} callname
   */
  async 50(urara, me, callname) {
    const { inner_urara, relation } = this.#get_event_vars();
    new UraraLifeMarks().fuck_buddy = 1;
    await print_title_with_kojo(
      this.#kojo,
      '50',
      urara,
      inner_urara,
      me,
      callname,
      relation,
    );
    sys_change_lust(0, lust_from_palam * 2);
    sys_change_lust(52, lust_from_palam * 4);
    begin_and_init_ero(52);
    await masturbate(52);
    end_ero_and_train();
    era.set('flag:当前互动角色', 52);
  }

  async 74(urara, me, callname, stage, extra_flag, event_object) {
    const { inner_urara, relation, self_name } = this.#get_event_vars();
    const life_marks = new UraraLifeMarks();
    const has_lover = sys_filter_chara(
      'cflag',
      '招募状态',
      recruit_flags.yes,
    ).some(
      (cid) =>
        cid > 0 &&
        cid < max_chara_id &&
        cid !== 52 &&
        era.get(`love:${cid}`) >= 75,
    );
    if (stage === event_hooks.week_end) {
      if (life_marks.active_74 === 0) {
        if (
          (
            await print_title_with_kojo(
              this.#kojo,
              '74-1',
              urara,
              inner_urara,
              me,
              callname,
              self_name,
              sys_get_colored_callname(this.id, 61),
              relation,
              has_lover,
            )
          )[0] === 1
        ) {
          add_event(event_hooks.week_start, event_object);
        } else {
          begin_and_init_ero(52);
          await masturbate(52);
          end_ero_and_train();
          era.set('status:52:熬夜', 1);
          era.set('cflag:52:爱慕暂拒', 74);
        }
      } else {
        const h = this.#kojo['74-2'];
        await print_event_name(h.title(urara), urara);
        await h(urara, inner_urara, me, relation, has_lover);
        await sys_love_uma_in_event(52);
      }
    } else if (stage === event_hooks.week_start) {
      if (
        (
          await print_title_with_kojo(
            this.#kojo,
            '74-3',
            urara,
            inner_urara,
            me,
            callname,
            relation,
            has_lover,
          )
        )[0] === 1
      ) {
        await sys_love_uma_in_event(52);
      } else {
        new UraraLifeMarks().active_74 = 1;
        era.set('cflag:52:爱慕暂拒', 74);
        await punish_rejecting_love(52);
      }
    }
  }

  /**
   * @param {CharaTalk} urara
   * @param {CharaTalk} me
   */
  async 75(urara, me) {
    const { inner_urara, relation } = this.#get_event_vars();
    new UraraLifeMarks().girl_friend = 1;
    await print_title_with_kojo(
      this.#kojo,
      '75',
      urara,
      inner_urara,
      me,
      relation,
      (era.get('cflag:30:招募状态') === recruit_flags.yes &&
        era.get('love:30')) >= 75 && sys_get_colored_callname(this.id, 30),
      (era.get('cflag:61:招募状态') === recruit_flags.yes &&
        era.get('love:61')) >= 75 && sys_get_colored_callname(this.id, 61),
    );
  }

  async 89(urara, me, callname, stage, extra, ebj) {
    const { inner_urara, relation } = this.#get_event_vars();
    const life_marks = new UraraLifeMarks();
    const has_lover = sys_filter_chara(
      'cflag',
      '招募状态',
      recruit_flags.yes,
    ).some(
      (cid) =>
        cid > 0 &&
        cid < max_chara_id &&
        cid !== 52 &&
        era.get(`love:${cid}`) >= 75,
    );
    if (stage === event_hooks.week_end) {
      if (life_marks.active_89 === 0) {
        if (
          (
            await print_title_with_kojo(
              this.#kojo,
              '89-1',
              urara,
              inner_urara,
              me,
              callname,
              sys_get_colored_callname(this.id, 61),
              relation,
              has_lover,
            )
          )[0] === 1
        ) {
          add_event(event_hooks.week_start, ebj);
        } else {
          begin_and_init_ero(52);
          await masturbate(52);
          end_ero_and_train();
          era.set('status:52:熬夜', 1);
          era.set('cflag:52:爱慕暂拒', 89);
        }
      } else {
        await print_title_with_kojo(
          this.#kojo,
          '89-2',
          urara,
          inner_urara,
          me,
          callname,
          relation,
          has_lover,
        );
        await sys_love_uma_in_event(52);
      }
    } else if (stage === event_hooks.week_start) {
      const h = this.#kojo['89-3'];
      await print_event_name(h.title(urara), urara);
      if (
        (await h(urara, inner_urara, me, callname, relation, has_lover))[0] ===
        1
      ) {
        await sys_love_uma_in_event(52);
      } else {
        era.set('cflag:52:爱慕暂拒', 89);
        new UraraLifeMarks().active_89 = 1;
        await punish_rejecting_love(52);
      }
    }
  }

  /**
   * @param {CharaTalk} urara
   * @param {CharaTalk} me
   * @param {string} callname
   */
  async 90(urara, me, callname) {
    const { inner_urara } = this.#get_event_vars();
    await print_title_with_kojo(
      this.#kojo,
      '90',
      urara,
      inner_urara,
      me,
      callname,
      (era.get('cflag:30:招募状态') === recruit_flags.yes &&
        era.get('love:30')) >= 75 && sys_get_colored_callname(this.id, 30),
      (era.get('cflag:61:招募状态') === recruit_flags.yes &&
        era.get('love:61')) >= 75 && sys_get_colored_callname(this.id, 61),
    );
    new UraraLifeMarks().infidelity = 1;
    update_kiss_exp(get_date_obj(), 52, 0);
    era.set('abl:52:接吻技巧', Math.min(era.get('abl:52:接吻技巧') + 1, 5));
    era.set('abl:52:口腔掌握', Math.min(era.get('abl:52:口腔掌握') + 1, 5));
    era.set('abl:52:口腔耐性', Math.min(era.get('abl:52:口腔耐性') + 1, 5));
    era.set('abl:52:甜言蜜语', Math.min(era.get('abl:52:甜言蜜语') + 1, 5));
    era.set('flag:当前互动角色', 52);
  }

  async 99(urara, me, callname) {
    const { relation, inner_urara } = this.#get_event_vars();
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          '99',
          urara,
          inner_urara,
          me,
          callname,
          relation,
        )
      )[0] === 1
    ) {
      await sys_love_uma_in_event(52);
      sys_like_chara(52, 0, 10) && (await era.waitAnyKey());
    } else {
      await sys_love_uma_in_event(52);
    }
    update_kiss_exp(get_date_obj(), 52, 0);
  }

  async 101(urara, me, callname) {
    const { self_name, inner_urara } = this.#get_event_vars();
    await print_title_with_kojo(
      this.#kojo,
      '101',
      urara,
      inner_urara,
      me,
      callname,
      self_name,
    );
    new UraraLifeMarks().want_you = 1;
  }
};
