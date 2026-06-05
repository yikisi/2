const era = require('#/era-electron');

const {
  sys_get_colored_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const print_event_name = require('#/event/snippets/print-event-name');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  async 25(tachyon, me, callname) {
    const h = this.#kojo[25];
    await print_event_name(h.title(tachyon), tachyon);
    await h(
      tachyon,
      get_chara_talk(25),
      me,
      callname,
      sys_get_colored_callname(25, this.id),
      sys_get_colored_callname(this.id, 25),
      sys_get_colored_callname(25, this.id),
    );
  }

  async 49(tachyon, me, callname) {
    if ((await this.#kojo[49](tachyon, me, callname)) === 1) {
      await sys_love_uma_in_event(this.id);
    } else {
      era.set('cflag:32:爱慕暂拒', 49);
    }
  }

  async 74(tachyon, me, callname) {
    if (era.get(`love:${this.id}`) === 75) {
      return;
    }
    let h;
    switch (
      (await print_title_with_kojo(this.#kojo, '74', tachyon, me, callname))[0]
    ) {
      case 1:
        h = this.#kojo['74-accept'];
        await h(tachyon, me, callname);
        await print_event_name(h.title, tachyon);
        await sys_love_uma_in_event(this.id);
        break;
      case 2:
        h = this.#kojo['74-reject-1'];
        await h(tachyon, me, callname);
        await print_event_name(h.title, tachyon);
        era.set('relation:32:0', 225);
        era.set('love:32', 25);
        new TachyonLifeMarks().reset();

        era.drawLine();

        await print_title_with_kojo(
          this.#kojo,
          '74-reject-2',
          tachyon,
          get_chara_talk(302),
          get_chara_talk(301),
          me,
        );
        callname = i18n().name[era.set('callname:32:0', 'trainer32')];

        era.drawLine();

        await print_title_with_kojo(
          this.#kojo,
          '74-reject-3',
          tachyon,
          me,
          callname,
        );
        break;
      case 3:
        h = this.#kojo['74-betray'];
        await h(tachyon, me, callname);
        await print_event_name(h.title, tachyon);
        era.set('relation:32:0', 0);
        era.set('love:32', 0);
        new TachyonLifeMarks().reset();
        era.set(
          'callname:32:0',
          i18n().name.kun_template.replace('%NAME%', i18n().name.trainer),
        );
        if (era.get('flag:声望不足替换')) {
          era.set('flag:当前声望', 0);
        } else {
          era.set('flag:强制BE', this.id);
        }
    }
  }

  async 89(tachyon, me, callname) {
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          '89',
          tachyon,
          get_chara_talk(9),
          get_chara_talk(19),
          get_chara_talk(25),
          get_chara_talk(36),
          get_chara_talk(94),
          me,
          callname,
          sys_get_colored_callname(this.id, 25),
          sys_get_colored_callname(this.id, 36),
          sys_get_colored_callname(this.id, 94),
        )
      )[0] === 1
    ) {
      await sys_love_uma_in_event(32);
    } else {
      era.set('cflag:32:爱慕暂拒', 89);
    }
  }

  async 99(tachyon, me, callname) {
    if (
      (
        await print_title_with_kojo(this.#kojo, '99', tachyon, me, callname)
      )[0] === 1
    ) {
      await sys_love_uma_in_event(32);
    } else {
      era.set('cflag:32:爱慕暂拒', 99);
    }
  }
};
