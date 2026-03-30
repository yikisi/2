const era = require('#/era-electron');

const {
  sys_change_lust,
  sys_change_motivation,
} = require('#/system/sys-calc-base-cflag');
const { sys_change_fame, sys_change_money } = require('#/system/sys-calc-flag');
const sys_filter_chara = require('#/system/sys-filter-chara');

const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_abbr_number, get_random_value } = require('#/utils/value-utils');

const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const recruit_flags = require('#/data/event/recruit-flags');
const { gene_type_colors } = require('#/data/race/model/uma-gene');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[0].daily;
  }

  async office_cook() {
    await this.#kojo.office_cook(get_chara_talk(0));
  }

  async office_game() {
    await this.#kojo.office_game(get_chara_talk(0));
  }

  async office_rest() {
    await this.#kojo.office_rest(get_chara_talk(0));
  }

  async o_c_pray(chara, me, dice) {
    await this.#kojo.o_c_pray(me, dice);
  }

  async out_river(hook, extra_flag) {
    const me = get_chara_talk(0);
    hook.arg = (await select_action_around_river()) > 0;
    if (hook.arg) {
      await this.#kojo.o_r_walking(me);
    } else {
      const my_marks = new MyEduMarks();
      if (my_marks.fishing) {
        if (era.get('cflag:20:招募状态') === recruit_flags.yes) {
          my_marks.fishing = 0;
        } else if (Math.random() < 0.2) {
          my_marks.fishing = 0;
          const sky = get_chara_talk(20);
          if (
            (
              await print_title_with_kojo(
                i18n().timon.random_events,
                'fishing',
                sky,
                me,
              )
            )[0] === 1
          ) {
            extra_flag.jpy = 5 + get_random_value(1, 5);
          } else {
            era.println();
            era.add('jewel:0:22', 20);
            await era.printAndWait(
              i18n().sex.get_got_jewel_info_oot(
                me,
                i18n().tb_param.jewel22,
                get_abbr_number(era.get('jewel:0:22')),
                get_abbr_number(20),
                {
                  ...get_abbr_number(era.add('jewel:0:22', 20)),
                  color: gene_type_colors[2],
                },
              ),
            );
            extra_flag.jpy = 1;
          }
          return;
        }
      }
      await this.#kojo.o_r_fishing(me);
    }
  }

  async out_station(hook) {
    hook.arg = await select_action_in_station();
    switch (hook.arg) {
      case 0:
        await this.#kojo.o_s_restaurant(get_chara_talk(0));
        break;
      case 2:
        await this.#kojo.o_s_shopping(get_chara_talk(0));
    }
  }

  async out_shopping(hook) {
    const me = get_chara_talk(0);
    const my_marks = new MyEduMarks();
    if (my_marks.kamen_rider === 1 && Math.random() < 0.05) {
      my_marks.kamen_rider = 0;
      const ret = await print_title_with_kojo(
        i18n().timon.random_events,
        'kamen_rider',
        me,
        new Array(14)
          .fill(0)
          .map((_, i) => 70 + i)
          .every((e) => era.get(`item:${e}`) === 0),
      );
      if (ret[0] === 1) {
        switch (ret[1]) {
          case 1:
            sys_change_fame(15);
            break;
          case 2:
            sys_change_money(25);
            break;
          case 3:
            sys_change_fame(20);
            sys_filter_chara('cflag', '招募状态', recruit_flags.yes).reduce(
              (p, c) => {
                if (
                  c > 0 &&
                  era.get(`cflag:${c}:种族`) > 0 &&
                  era.get(`love:${c}`) >= 50
                ) {
                  sys_change_lust(c, 1000);
                  return p || sys_change_motivation(c, 1);
                }
                return p;
              },
              false,
            ) && (await era.waitAnyKey());
        }
      }
      return;
    }
    const temp = await select_action_in_shopping_street();
    hook.arg = temp <= 1;
    switch (temp) {
      case 0:
        await this.#kojo.o_s_arcade(me);
        break;
      case 1:
        await this.#kojo.o_s_drawing(me);
        break;
      case 2:
        await this.#kojo.o_s_ktv(me);
        break;
      case 3:
        await this.#kojo.o_s_movie(me);
        break;
      case 4:
        hook.arg = 2;
        await this.#kojo.o_s_ero_item(me);
    }
  }

  async school_atrium(hook) {
    hook.arg = false;
    await this.#kojo.school_atrium(get_chara_talk(0));
  }

  async school_rooftop(hook) {
    await this.#kojo.school_rooftop(get_chara_talk(0));
  }
};
