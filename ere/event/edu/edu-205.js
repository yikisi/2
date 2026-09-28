const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const {
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');
const { sys_check_race_ready } = require('#/system/sys-calc-chara-param');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const TreveEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-205');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().kojo[this.id].edu;
  }

  async crazy_fan_end() {
    await print_title_with_kojo(
      this.#kojo,
      'crazy_fan_end',
      get_chara_talk(this.id),
      get_chara_talk(204),
      get_chara_talk(0),
    );
  }

  async foreign_travel(treve, me, callname, hook, extra_flag, event_object) {
    if (event_object?.arg !== 47 + 36) {
      return await super.foreign_travel(
        treve,
        me,
        callname,
        hook,
        extra_flag,
        event_object,
      );
    }
    await print_title_with_kojo(
      this.#kojo,
      'foreign_travel',
      treve,
      get_chara_talk(204),
      get_chara_talk(0),
    );
    return true;
  }

  async out_start(treve, me, callname, hook, extra_flag, event_object) {
    if (event_object?.arg !== 95 + 25) {
      return;
    }
    if (era.get('flag:当前互动角色') !== 0) {
      add_event(hook.hook, event_object);
      return false;
    }
    await print_title_with_kojo(this.#kojo, 'o_s_95_25', treve, me);
    new TreveEduMarks().tea = 0;
    EventMarks.get(0).sub(event_hooks.out_start);
    return true;
  }

  async race_end(treve, me, callname, hook, extra) {
    const edu_weeks = era.get('cflag:205:育成回合计时');
    if (
      extra.race === race_enum.prix_lat &&
      edu_weeks < 96 &&
      extra.rank === 1
    ) {
      await print_title_with_kojo(
        this.#kojo,
        'prix_lat_win_classical',
        treve,
        get_chara_talk(204),
        me,
      );
      extra.relation_change = 30;
      extra.love_change = 3;
    } else if (
      extra.race === race_enum.prix_lat &&
      edu_weeks >= 96 &&
      extra.rank === 1 &&
      check_aim_race(RaceHistory.get(205).get(), race_enum.prix_lat, 1, 1)
    ) {
      await print_title_with_kojo(
        this.#kojo,
        'prix_lat_win_senior',
        treve,
        get_chara_talk(204),
        me,
      );
      extra.relation_change = 50;
      extra.love_change = Math.max(50 - era.get('love:205'), 0);
    } else if (extra.rank === 1) {
      await print_title_with_kojo(this.#kojo, 'race_win', treve);
      extra.love_change = get_random_value(1, 3);
    } else {
      return await super.race_end(treve, me, callname, hook, extra);
    }
  }

  async race_start(treve, me, callname, hook, extra) {
    const edu_weeks = era.get('cflag:205:育成回合计时');
    if (extra.race === race_enum.prix_lat && edu_weeks < 96) {
      extra.relation_change =
        (
          await print_title_with_kojo(
            this.#kojo,
            'before_prix_lat_classical',
            treve,
            me,
            callname,
          )
        )[0] === 1
          ? 5
          : 15;
    } else {
      await print_title_with_kojo(this.#kojo, 'race_start', treve, me);
      extra.relation_change = 10;
    }
  }

  async week_end(treve, me, callname, hook, extra, ebj) {
    let wait = false;
    switch (ebj?.arg) {
      case 47 + 33:
        await print_title_with_kojo(
          this.#kojo,
          'we_47_33',
          treve,
          me,
          callname,
        );
        era.println();
        wait = sys_like_chara(this.id, 0, 5);
        break;
      case 95 + 28:
        await print_title_with_kojo(
          this.#kojo,
          'we_95_28',
          treve,
          get_chara_talk(204),
          me,
        );
        era.set('cflag:205:招募状态', recruit_flags.temporary_leave);
        break;
      case 95 + 33:
        if (
          (
            await print_title_with_kojo(
              this.#kojo,
              'we_95_33',
              treve,
              get_chara_talk(204),
              me,
              callname,
            )
          )[0] === 1
        ) {
          era.set('flag:强制BE', 205);
        } else {
          era.println();
          era.set('cflag:205:招募状态', recruit_flags.yes);
          wait = sys_love_uma(205, 5);
          if (sys_check_race_ready(205)) {
            sys_reg_race(205).curr = {
              race: race_enum.prix_lat,
              week:
                era.get('flag:当前回合数') +
                race_infos[race_enum.prix_lat].date -
                33,
            };
          }
        }
        break;
      case 95 + 42:
        {
          let relation = 0;
          let love = 0;
          const ret = await print_title_with_kojo(
            this.#kojo,
            'we_95_42',
            treve,
            me,
            callname,
          );
          if (ret[0] === 2) {
            relation -= 10;
            love += 1;
          }
          if (ret[1] === 2) {
            relation -= 10;
            love += 1;
          }
          if (ret[2] === 1) {
            era.println();
            wait = sys_like_chara(this.id, 0, relation - 600, true, love);
          } else {
            await this.#kojo.we_95_42_end(treve, me);
            new TreveEduMarks().japa_cup = 4;
            if (ret[3] === 1) {
              relation += 10;
              love += 1;
            }
            await quick_into_sex(205);
            era.println();
            wait = sys_like_chara(this.id, 0, relation, true, love);
          }
        }
        break;
      default:
        return await super.week_end(treve, me, callname, hook, extra, ebj);
    }
    wait && (await era.waitAnyKey());
  }

  async week_start(treve, me, callname, hook, extra, ebj) {
    let wait = false;
    switch (ebj?.arg) {
      case 47 + 24:
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_24',
          treve,
          me,
          race_infos[race_enum.prix_prb].get_colored_name(),
          race_infos[race_enum.prix_dia].get_colored_name(),
        );
        break;
      case 47 + 33:
        if (
          (
            await print_title_with_kojo(this.#kojo, 'ws_47_33', treve, me)
          )[0] === 1
        ) {
          era.println();
          wait = sys_love_uma(this.id, 1);
        } else {
          era.println();
          wait = sys_like_chara(this.id, 0, 5);
        }
        break;
      case 95 + 25:
        await print_title_with_kojo(this.#kojo, 'ws_95_25', treve, me);
        era.set('cflag:205:招募状态', recruit_flags.temporary_leave);
        if (era.get('flag:当前互动角色') === 205) {
          era.set('flag:当前互动角色', 0);
        }
        EventMarks.get(0).add(event_hooks.out_start);
        new TreveEduMarks().tea = 1;
        break;
      case 95 + 29:
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_29',
          treve,
          get_chara_talk(204),
          me,
        );
        break;
      case 143 + 9:
        await CustomizedEdu.common_palace(treve, me);
        if (era.get('love:205') < 50) {
          await CustomizedEdu.common_palace_relation(treve, me);
        } else {
          const h = this.#kojo.palace;
          era.drawLine();
          era.set('flag:当前位置', location_enum.gate);
          await print_event_name(h.title(treve), treve);
          era.set('flag:当前位置', location_enum.office);
          const ret = await h(treve, me, callname);
          era.println();
          wait = ret === 2 && sys_love_uma(this.id, 1);
        }
        break;
      default:
        return await super.week_start(treve, me, callname, hook, extra, ebj);
    }
    wait && (await era.waitAnyKey());
  }
};
