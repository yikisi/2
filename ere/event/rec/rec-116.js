const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  /** @param {CharaTalk} donna */
  async footprint(donna) {
    // CFLAGNAME:66 - 67 = 招募状态 - 随机招募
    if (era.get(`cflag:${this.id}:66`) === -1) {
      if (await this.check_before_rec()) {
        return;
      }
      era.set(`cflag:${this.id}:66`, recruit_flags.no);
      era.set(`cflag:${this.id}:67`, 0);
      add_event(
        event_hooks.week_end,
        new EventObject(this.id, cb_enum.recruit).set_arg('good_news'),
      );
      // FLAGNAME:33 = 物色对象
      era.set('flag:33', 116);
      new EventMarks(0).add(event_hooks.week_end);
      return;
    }
    const verxina = get_chara_talk(90);
    if (
      (
        await print_title_with_kojo(
          i18n().kojo[this.id].recruit,
          'footprint',
          donna,
          {
            ...generate_dictionary(this.id, {
              sir: !0,
              uma: !0,
              teen: !0,
              your_name: !0,
            }),
            CALL_90: sys_get_callname(this.id, 90),
            V_COLOR: verxina.color,
            V_NAME: verxina.name,
            team: sys_filter_chara('cflag', '66', recruit_flags.yes).length,
          },
        )
      )['rec'] === 1
    ) {
      era.set(`cflag:${this.id}:66`, -1);
    } else {
      era.set('flag:33', 116);
      new EventMarks(0).add(event_hooks.week_end);
      era.set(`cflag:${this.id}:67`, 0);
      add_event(
        event_hooks.week_end,
        new EventObject(this.id, cb_enum.recruit).set_arg('good_news'),
      );
    }
  }

  /** @param {CharaTalk} donna */
  async good_news(donna) {
    await print_title_with_kojo(
      i18n().kojo[this.id].recruit,
      'good_news',
      donna,
      {
        ...generate_dictionary(this.id, { uma: !0, your_name: !0 }),
        T_NAME: get_chara_talk(301).name,
      },
    );
    add_event(
      event_hooks.week_end,
      new EventObject(this.id, cb_enum.recruit).set_arg('know_me'),
    );
  }

  /** @param {CharaTalk} donna */
  async know_me(donna) {
    const in_team_list = sys_filter_chara(
      'cflag',
      '招募状态',
      recruit_flags.yes,
    ).filter((cid) => cid > 0 && era.get(`cflag:${cid}:种族`) > 0);
    const has_palace = in_team_list.some(
      (cid) =>
        era.get(`cflag:${cid}:育成回合计时`) >= 3 * 48 &&
        era.get(`cflag:${cid}:殿堂`) > 1,
    );
    const has_in_edu = in_team_list.some(
      (cid) => era.get(`cflag:${cid}:育成回合计时`) < 3 * 48,
    );
    const bv = get_chara_talk(114);
    await print_title_with_kojo(
      i18n().kojo[this.id].recruit,
      'know_me',
      donna,
      {
        ...generate_dictionary(this.id, {
          sir: !0,
          uma: !0,
          your_name: !0,
          your_sex: !0,
        }),
        B_COLOR: bv.color,
        B_NAME: bv.name,
        has_in_edu,
        has_palace,
      },
    );
    await this.recruit_end();
    new EventMarks(0).sub(event_hooks.week_end);
    era.set(`cflag:${this.id}:66`, recruit_flags.yes);
    era.set('flag:33', 0);
  }

  async recruit(stage, ebj) {
    const donna = get_chara_talk(this.id);
    if (stage === event_hooks.recruit) {
      await this.footprint(donna);
    } else if (ebj && this[ebj.arg]) {
      await this[ebj.arg].call(this, donna);
    }
  }
};
