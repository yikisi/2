const era = require('#/era-electron');

const sys_change_tired = require('#/system/chara/sys-change-tired');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_check_remote } = require('#/system/sys-calc-chara-param');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const check_aim_race = require('#/event/snippets/check-aim-race');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_event_name = require('#/event/snippets/print-event-name');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

const TamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-21');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
const { attr_enum, base_attr_list } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().kojo[this.id].edu;
  }

  get #dict() {
    return generate_dictionary(this.id, { uma: !0, your_sex: !0 });
  }

  /** @param {CharaTalk} tama */
  async misfortune(tama) {
    new TamaEduMarks().lightning = 1;
    const ret = await print_title_with_kojo(
      this.#kojo,
      'misfortune',
      tama,
      this.#dict,
    );
    let relation = 0,
      love = 0;
    if (ret['select'] === 1) {
      love = 2;
      sys_change_tired(this.id, 1);
    } else if (ret[6] === 2) {
      relation = 10;
    }
    if (all_reward_in_event(this.id, { relation, love })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} tama */
  async cloudy1(tama) {
    const edu_marks = new TamaEduMarks();
    if (
      (
        await print_title_with_kojo(this.#kojo, 'cloudy1', tama, this.#dict)
      )[0] === 1
    ) {
      edu_marks.heal = 1;
    } else {
      edu_marks.heal = -1;
    }
  }

  /** @param {CharaTalk} tama */
  async cloudy2(tama) {
    sys_change_tired(
      this.id,
      (await print_title_with_kojo(this.#kojo, 'cloudy2', tama, this.#dict))[
        'select'
      ] === 1
        ? 2
        : 1,
    );
  }

  /** @param {CharaTalk} tama */
  async cloudy3(tama) {
    let relation = 0,
      love = 0;
    if (
      (await print_title_with_kojo(this.#kojo, 'cloudy3', tama, this.#dict))[
        'select'
      ] === 1
    ) {
      relation = 10;
    } else {
      love = 1;
    }
    if (
      all_reward_in_event(this.id, {
        attr: new Array(5).fill(3),
        pt: 45,
        relation,
        love,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} tama */
  async new_year(tama) {
    era.set(`cflag:${this.id}:节日事件标记`, 0);
    let wait_flag = false;
    switch (
      (
        await print_title_with_kojo(
          this.#kojo,
          'classical_new_year',
          tama,
          this.#dict,
        )
      )['select']
    ) {
      case 1:
        wait_flag = all_reward_in_event(this.id, { attr: [0, 10] });
        break;
      case 2:
        wait_flag = all_reward_in_event(this.id, {
          base: [era.get(`maxbase:${this.id}:0`) * 0.1],
        });
        break;
      case 3:
        wait_flag = all_reward_in_event(this.id, { pt: 20 });
    }
    if (wait_flag) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} tama */
  async seems(tama) {
    await print_title_with_kojo(this.#kojo, 'seems', tama, this.#dict);
    if (
      all_reward_in_event(this.id, {
        attr: new Array(5).fill(3),
        pt: 45,
        love: 5,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} tama */
  async lightning_heart1(tama) {
    let relation = 0,
      love = 0;
    const ret = await print_title_with_kojo(
      this.#kojo,
      'lightning_heart1',
      tama,
      this.#dict,
    );
    if (ret['select'] === 1) {
      love = 2;
    } else {
      relation = 10;
    }
    if (
      all_reward_in_event(this.id, {
        love,
        relation,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} tama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async summer(tama, me, callname, hook, extra_flag, event_object) {
    if (sys_check_remote(this.id)) {
      add_event(hook.hook, event_object);
      return;
    }

    await print_title_with_kojo(
      this.#kojo,
      era.get(`cflag:${this.id}:育成回合计时`) > 96
        ? 'senior_summer'
        : 'classical_summer',
      tama,
      this.#dict,
    );
    if (
      all_reward_in_event(this.id, {
        attr: gacha(base_attr_list, 3).reduce((p, c) => {
          p[c] += 5;
          return p;
        }, new Array(5).fill(3)),
        pt: 45,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} tama */
  async spring_thunder(tama) {
    await print_title_with_kojo(this.#kojo, 'spring_thunder', tama, this.#dict);
  }

  /** @param {CharaTalk} tama */
  async threaten(tama) {
    await print_title_with_kojo(this.#kojo, 'threaten', tama, this.#dict);
  }

  /** @param {CharaTalk} tama */
  async whats_adult(tama) {
    let wait_flag = false;
    const ret = await print_title_with_kojo(
      this.#kojo,
      'whats_adult',
      tama,
      this.#dict,
    );
    switch (ret[2]) {
      case 1:
        wait_flag = all_reward_in_event(this.id, { attr: [5, 0, 10] });
        break;
      case 2:
        wait_flag = all_reward_in_event(this.id, { pt: 20 });
        break;
      case 3:
        wait_flag = all_reward_in_event(this.id, { love: 5 });
    }
    if (wait_flag) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} tama */
  async gymnastics(tama) {
    await print_title_with_kojo(this.#kojo, 'gymnastics', tama, this.#dict);
    if (
      all_reward_in_event(this.id, {
        attr: new Array(5).fill(5),
        pt: 30,
        love: 2,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} tama */
  async clothe(tama) {
    const ret = await print_title_with_kojo(this.#kojo, 'my_clothe', tama, {
      ...this.#dict,
      COLOR_3: get_chara_talk(3).color,
      COLOR_24: get_chara_talk(24).color,
      COLOR_302: get_chara_talk(302).color,
    });
    const attr = new Array(5).fill(0);
    let relation = 0,
      love = 0;
    if (ret['select1'] === 1) {
      relation = 10;
    } else {
      love = 2;
    }
    if (ret['select2'] === 1) {
      attr[attr_enum.speed] = 20;
      if (era.get(`cstr:${this.id}:决胜服`) !== -1) {
        era.set(`cstr:${this.id}:决胜服`, '_江户');
      }
    } else {
      attr[attr_enum.strength] = attr[attr_enum.toughness] = 10;
      if (era.get(`cstr:${this.id}:决胜服`) !== -1) {
        era.set(`cstr:${this.id}:决胜服`, '');
      }
    }
    if (
      all_reward_in_event(this.id, {
        attr,
        relation,
        love,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  async race_start(tama, me, callname, hook, extra_flag) {
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    const history = RaceHistory.get(this.id).get();
    let key;
    switch (extra_flag.race) {
      case race_enum.toky_yus:
        if (check_aim_race(history, race_enum.sats_sho, 1, 1)) {
          key = 'uma_girl1';
          await print_event_name(
            this.#kojo[key].title.replace('%TEEN%', tama.teen_sex_title),
            tama,
          );
          if ((await this.#kojo[key](this.#dict))[0] === 1) {
            extra_flag.love_change = 2;
            extra_flag.motivation_change = 1;
          } else {
            extra_flag.relation_change = 10;
            extra_flag.base_change = [
              era.get(`maxbase:${this.id}:0`) * 0.2,
              era.get(`maxbase:${this.id}:1`) * 0.2,
            ];
          }
        }
        break;
      case race_enum.kiku_sho:
        if (
          check_aim_race(history, race_enum.sats_sho, 1, 1) &&
          check_aim_race(history, race_enum.toky_yus, 1, 1)
        ) {
          key = 'become_legend1';
          await print_title_with_kojo(this.#kojo, key, tama, this.#dict);
        }
        break;
      case race_enum.takz_kin:
        if (edu_weeks > 96) {
          key = 'white_lightning1';
          await print_title_with_kojo(this.#kojo, key, tama, this.#dict);
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96) {
          key = 'tenn_sho';
          await print_title_with_kojo(this.#kojo, key, tama, this.#dict);
        }
    }
    if (key === undefined) {
      await super.race_start(tama, me, callname, hook, extra_flag);
    }
  }

  async race_end(tama, me, callname, hook, extra_flag) {
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    const history = RaceHistory.get(this.id).get();
    let key;
    switch (extra_flag.race) {
      case race_enum.begin_race:
        if (extra_flag.rank === 1) {
          key = 'begin_race';
          await print_title_with_kojo(this.#kojo, key, tama, this.#dict);
        }
        break;
      case race_enum.sats_sho:
        if (extra_flag.rank === 1) {
          key = 'lightning_heart2';
          await print_title_with_kojo(this.#kojo, key, tama, this.#dict);
          if (
            all_reward_in_event(this.id, {
              attr: new Array(5).fill(3),
              pt: 45,
            })
          ) {
            await era.waitAnyKey();
          }
        }
        break;
      case race_enum.toky_yus:
        if (
          extra_flag.rank === 1 &&
          check_aim_race(history, race_enum.sats_sho, 1, 1)
        ) {
          key = 'uma_girl2';
          await print_event_name(
            this.#kojo[key].title.replace('%TEEN%', tama.teen_sex_title),
            tama,
          );
          await this.#kojo[key](this.#dict);
          if (
            all_reward_in_event(this.id, {
              attr: new Array(5).fill(3),
              pt: 45,
            })
          ) {
            await era.waitAnyKey();
          }
        }
        break;
      case race_enum.kiku_sho:
        if (
          extra_flag.rank === 1 &&
          check_aim_race(history, race_enum.sats_sho, 1, 1) &&
          check_aim_race(history, race_enum.toky_yus, 1, 1)
        ) {
          key = 'become_legend2';
          await print_title_with_kojo(this.#kojo, key, tama, this.#dict);
          if (
            all_reward_in_event(this.id, {
              attr: new Array(5).fill(3),
              pt: 45,
            })
          ) {
            await era.waitAnyKey();
          }
        }
        break;
      case race_enum.hans_dai:
        if (extra_flag.rank === 1) {
          key = 'hans_dai';
          if (
            (await print_title_with_kojo(this.#kojo, key, tama, this.#dict))[
              'select'
            ] === 1
          ) {
            extra_flag.relation_change = 10;
          } else {
            extra_flag.love_change = 2;
          }
        }
        break;
      case race_enum.tenn_spr:
        if (extra_flag.rank === 1) {
          key = 'tenn_spr';
          await print_title_with_kojo(this.#kojo, key, tama, {
            ...this.#dict,
            sank_hai: +check_aim_race(
              RaceHistory.get(this.id).get(),
              race_enum.sank_hai,
              2,
              1,
            ),
          });
        }
        break;
      case race_enum.takz_kin:
        if (edu_weeks > 96 && extra_flag.rank === 1) {
          key = 'white_lightning2';
          await print_title_with_kojo(this.#kojo, key, tama, this.#dict);
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96 && extra_flag.rank === 1) {
          key = 'tenn_sho_win';
          const etsuko = get_chara_talk(303);
          await print_title_with_kojo(this.#kojo, key, tama, {
            ...this.#dict,
            ETSUKO: etsuko.name,
            COLOR_303: etsuko.color,
          });
          if (sys_like_chara(303, 0, 10)) {
            await era.waitAnyKey();
          }
        }
        break;
      case race_enum.arim_kin:
        if (edu_weeks > 96 && extra_flag.rank === 1) {
          key = 'arim_kin';
          if (
            (await print_title_with_kojo(this.#kojo, key, tama, this.#dict))[
              'sex'
            ] === 1
          ) {
            extra_flag.relation_change = 10;
            extra_flag.love_change = 2;
          } else {
            await quick_into_sex(this.id);
          }
        }
    }
    if (key === undefined) {
      await super.race_end(tama, me, callname, hook, extra_flag);
    }
  }
};
