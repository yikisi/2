const era = require('#/era-electron');

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
const { sys_get_callname } = require('#/system/sys-calc-chara-others');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, ebj) {
    const grand = get_chara_talk(this.id);
    const kojo = i18n().kojo[this.id].recruit;
    let temp;
    switch (stage) {
      case event_hooks.recruit:
        if (
          // CFLAGNAME:66 = 招募状态
          sys_filter_chara('cflag', '66', recruit_flags.yes).length === 1 &&
          // FLAGNAME:15 = 当前声望
          era.get('flag:15') < 500
        ) {
          if (
            (
              await print_title_with_kojo(
                kojo,
                'rec0',
                grand,
                generate_dictionary(this.id, { child: !0, teen: !0, uma: !0 }),
              )
            )['rec'] === 1
          ) {
            // FLAGNAME:33 = 物色对象
            era.set('flag:33', this.id);
            add_event(
              event_hooks.school_atrium,
              new EventObject(this.id, cb_enum.recruit),
            );
            new EventMarks(0).add(event_hooks.school_atrium);
            // CFLAGNAME:67 = 随机招募
            era.set(`cflag:${this.id}:67`, 0);
          }
        } else {
          const dict = {
            ...generate_dictionary(this.id, {
              call: !0,
              child: !0,
              teen: !0,
              uma: !0,
              title: !0,
            }),
            YOURPHY: get_chara_talk(0).phy_sex_title,
          };
          if (
            (await print_title_with_kojo(kojo, 'beginning', grand, dict))[
              'rec'
            ] <= 2
          ) {
            await kojo['beginning2'](dict);
            era.set(`cflag:${this.id}:66`, recruit_flags.yes);
          }
        }
        break;
      case event_hooks.school_atrium:
        // FLAGNAME:5 = 当前互动角色
        if (era.get('flag:5') > 0) {
          add_event(stage, ebj);
          return;
        }
        new EventMarks(0).sub(event_hooks.school_atrium);
        if (
          (
            await print_title_with_kojo(
              kojo,
              'rec1',
              grand,
              generate_dictionary(this.id, { uma: !0 }),
            )
          )['rec'] === 2
        ) {
          add_event(event_hooks.recruit_start, ebj);
          new EventMarks(0).add(event_hooks.recruit_start);
          return true;
        } else {
          era.set('flag:33', 0);
          era.set(`cflag:${this.id}:67`, 1);
        }
        break;
      case event_hooks.recruit_start:
        new EventMarks(0).sub(event_hooks.recruit_start);
        temp = [get_chara_talk(90), get_chara_talk(91)];
        if (
          (
            await print_title_with_kojo(kojo, 'rec2', grand, {
              ...generate_dictionary(this.id, {
                call: !0,
                teen: !0,
                uma: !0,
                your_name: !0,
                your_sex: !0,
              }),
              '91_CALL_90': sys_get_callname(91, 90),
              CALL_90: sys_get_callname(this.id, 90),
              COLOR_90: temp[0].color,
              COLOR_91: temp[1].color,
              VERXINA: temp[0].name,
              VIVLOS: temp[1].name,
              YOUNGER_SISTER: i18n().name.younger_sister,
              YOURPHY: get_chara_talk(0).phy_sex_title,
            })
          )['rec'] === 1
        ) {
          era.set(`cflag:${this.id}:66`, recruit_flags.yes);
        } else {
          era.set(`cflag:${this.id}:67`, 1);
        }
        era.set('flag:33', 0);
    }
    if (era.get(`cflag:${this.id}:66`) === recruit_flags.yes) {
      await this.recruit_end();
      if (stage !== event_hooks.recruit) {
        return true;
      }
    }
  }
};
