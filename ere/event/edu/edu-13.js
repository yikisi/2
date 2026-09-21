const era = require('#/era-electron');

const {
  sys_change_attr_and_print,
  sys_change_weight,
} = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event, cb_enum } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_event_name = require('#/event/snippets/print-event-name');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const McqueenEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-13');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { race_enum } = require('#/data/race/race-const');
const { attr_enum, fumble_result } = require('#/data/train-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().kojo[this.id].edu;
  }

  get #dict() {
    return generate_dictionary(this.id, { call: !0, teen: !0, uma: !0 });
  }

  async train(attr) {
    await super.train(attr);
    await this.#kojo['train'](this.#dict);
  }

  async train_fail(mcqueen, me, callname, hook, extra_flag) {
    await CustomizedEdu.print_fail_info_in_train(
      mcqueen,
      extra_flag.train,
      extra_flag.fumble,
    );
    era.println();
    extra_flag.args = extra_flag.fumble
      ? fumble_result.fumble
      : fumble_result.fail;
    if (extra_flag.train !== attr_enum.intelligence) {
      const [select] = await print_title_with_kojo(
        this.#kojo,
        'train_fail',
        mcqueen,
        this.#dict,
      );
      if (select === 1) {
        hook.arg = 0;
      } else if (Math.random() < extra_flag.args.ratio.fail_again) {
        hook.arg = -1;
      } else {
        hook.arg = 1;
      }
    }
  }

  train_success_content() {
    this.#kojo['train_success'](this.#dict);
  }

  async train_success_add(mcqueen) {
    return (
      (
        await print_title_with_kojo(
          this.#kojo,
          'train_add',
          mcqueen,
          this.#dict,
        )
      )['select'] === 1
    );
  }

  async train_success_sex() {
    return (await this.#kojo['train_success_sex'](this.#dict))['sex'] === 1;
  }

  async race_start(mcqueen, me, callname, hook, extra_flag) {
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    const ryan = get_chara_talk(27);
    const dict = { ...this.#dict, RYAN: ryan.name, COLOR_27: ryan.color };
    let key;
    switch (extra_flag.race) {
      case race_enum.begin_race:
        if (edu_weeks === 23) {
          key = 'begin_race';
        }
        break;
      case race_enum.kiku_sho:
        key = 'kiku_sho';
        dict.SIBLINGS = mcqueen.siblings_sex_title;
        break;
      case race_enum.tenn_spr:
        key = 'tenn_spr';
        break;
      case race_enum.takz_kin:
        if (edu_weeks > 96) {
          key = 'takz_kin';
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96) {
          key = 'tenn_sho';
        }
    }
    await print_title_with_kojo(this.#kojo, key || 'race_start', mcqueen, dict);
  }

  /**
   * @param {CharaTalk} mcqueen
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async mejiro_family(mcqueen, me, callname, hook, extra_flag, event_object) {
    await print_title_with_kojo(
      this.#kojo,
      'mejiro_family',
      mcqueen,
      this.#dict,
    );
    add_event(event_hooks.out_start, event_object.set_arg('mejiro_party'));
  }

  /**
   * @param {CharaTalk} mcqueen
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async mejiro_party(mcqueen, me, callname, hook, extra_flag, event_object) {
    const curr = era.get('flag:当前互动角色');
    if (curr > 0 && curr !== this.id) {
      add_event(hook.hook, event_object);
      return;
    }
    const ryan = get_chara_talk(27);
    await print_title_with_kojo(this.#kojo, 'mejiro_party', mcqueen, {
      ...this.#dict,
      COLOR_27: ryan.color,
      RYAN: ryan.name,
      SIBLINGS: mcqueen.siblings_sex_title,
    });
    new McqueenEduMarks().love_89 = 1;
    return true;
  }

  async race_end(mcqueen, me, callname, hook, extra) {
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    const ryan = get_chara_talk(27);
    const dict = { ...this.#dict, RYAN: ryan.name, COLOR_27: ryan.color };
    let key;
    if (extra.rank === 1) {
      switch (extra.race) {
        case race_enum.begin_race:
          key = 'begin_race_win';
          dict.YOUNG_LADY =
            mcqueen.sex_code === 1
              ? i18n().name.young_master
              : i18n().name.young_lady;
          break;
        case race_enum.kiku_sho:
          key = 'kiku_sho_win';
          break;
        case race_enum.tenn_spr:
          key = 'tenn_spr_win';
          dict.SIBLINGS = mcqueen.siblings_sex_title;
          add_event(
            event_hooks.back_school,
            new EventObject(this.id, cb_enum.edu).set_arg('mejiro_family'),
          );
          break;
        case race_enum.takz_kin:
          if (edu_weeks > 96) {
            key = 'takz_kin_win';
          }
          break;
        case race_enum.tenn_sho:
          if (edu_weeks > 96) {
            key = 'tenn_sho_win';
          }
      }
    }
    if (key !== undefined) {
      await print_title_with_kojo(this.#kojo, key, mcqueen, dict);
    } else {
      if (extra.rank === 1) {
        key = 'race_win';
      } else if (extra.rank <= 5) {
        key = 'race_5';
      } else {
        key = 'race_lose';
      }
      await print_title_with_kojo(this.#kojo, key, mcqueen, dict);
    }
  }

  async week_start(mcqueen, me, callname, hook, extra_flag, event_object) {
    if (era.get(`cflag:${this.id}:位置`) !== era.get('cflag:0:位置')) {
      add_event(hook.hook, event_object);
      return;
    }
    const ryan = get_chara_talk(27);
    let wait = false;
    switch (event_object.arg) {
      case 12:
        await print_event_name(
          this.#kojo['meet_mejiro'].title.replace(
            '%SIBLINGS%',
            mcqueen.siblings_sex_title,
          ),
          mcqueen,
        );
        await this.#kojo['meet_mejiro']({
          ...this.#dict,
          COLOR_27: ryan.color,
          RYAN: ryan.name,
        });
        break;
      case 47 + 1:
        await print_title_with_kojo(
          this.#kojo,
          'new_year',
          mcqueen,
          this.#dict,
        );
        break;
      case 47 + 6:
        if (
          (
            await print_title_with_kojo(
              this.#kojo,
              'valentine',
              mcqueen,
              this.#dict,
            )
          )['select'] === 1
        ) {
          era.println();
          // ITEMNAME:100 = 情人节巧克力
          era.print(di18n.tb_item.notify(100));
          era.add('item:100', 1);
        } else {
          sys_change_attr_and_print(0, attr_enum.hp, 200);
        }
        break;
      case 47 + 40:
        await print_title_with_kojo(this.#kojo, 'halloween', mcqueen, {
          ...this.#dict,
          YOUNG_LADY:
            mcqueen.sex_code === 1
              ? i18n().name.young_master
              : i18n().name.young_lady,
        });
        break;
      case 'palace':
        return await super.week_start(
          mcqueen,
          me,
          callname,
          hook,
          extra_flag,
          event_object,
        );
    }
    era.set(`cflag:${this.id}:节日事件标记`, 0);
    era.println();
    wait = sys_like_chara(this.id, 0, get_random_value(0, 25)) || wait;
    if (wait) {
      await era.waitAnyKey();
    }
  }

  async out_shopping(mcqueen, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(hook.hook, event_object);
      return;
    }
    let wait;
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          'want_dessert',
          mcqueen,
          this.#dict,
        )
      )['select'] === 1
    ) {
      wait = all_reward_in_event(this.id, { motivation: 1, relation: 10 });
      sys_change_weight(this.id, get_random_value(80, 120));
    } else {
      wait = all_reward_in_event(this.id, { attr: [0, 0, 0, 10] });
    }
    if (wait) {
      await era.waitAnyKey();
    }
    return true;
  }
};
