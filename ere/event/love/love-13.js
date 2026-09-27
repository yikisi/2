const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const check_aim_race = require('#/event/snippets/check-aim-race');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const McqueenEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-13');
const event_hooks = require('#/data/event/event-hooks');
const McqueenLifeMarks = require('#/data/event/life-event-marks/life-event-marks-13');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  get #dict() {
    return generate_dictionary(this.id, {
      call: !0,
      child: !0,
      teen: !0,
      uma: !0,
      your_sex: !0,
    });
  }

  /** @param {CharaTalk} mcqueen */
  async movie(mcqueen) {
    await print_title_with_kojo(this.#kojo, '20', mcqueen, {
      ...this.#dict,
      YOUNG_LADY:
        mcqueen.sex_code === 1
          ? i18n().name.young_master
          : i18n().name.young_lady,
    });
    new McqueenLifeMarks().love_20 = 2;
  }

  /** @param {CharaTalk} mcqueen */
  async baseball(mcqueen) {
    await print_title_with_kojo(this.#kojo, '40', mcqueen, {
      ...this.#dict,
      YOUNG_LADY:
        mcqueen.sex_code === 1
          ? i18n().name.young_master
          : i18n().name.young_lady,
    });
    new McqueenLifeMarks().love_40 = 2;
  }

  async 49(mcqueen) {
    const ardan = get_chara_talk(71);
    await print_title_with_kojo(this.#kojo, '49', mcqueen, {
      ...this.#dict,
      '71_CALL': sys_get_callname(71, this.id),
      CALL_71: sys_get_callname(this.id, 71),
      COLOR_71: ardan.color,
      ELDER_SISTER: ardan.elder_sibling_sex_title,
      ARDAN: ardan.name,
    });
    await sys_love_uma_in_event(this.id);
  }

  async 74(mcqueen) {
    const m_life = new McqueenLifeMarks();
    if (
      era.get(`cflag:${this.id}:育成回合计时`) >=
        95 + race_infos[race_enum.tenn_spr].date ||
      m_life.reject_74 > 0
    ) {
      await print_title_with_kojo(this.#kojo, '74-2', mcqueen, this.#dict);
      await sys_love_uma_in_event(this.id);
    } else {
      if (
        (
          await print_title_with_kojo(this.#kojo, '74-1', mcqueen, {
            ...this.#dict,
            YOUNG_LADY:
              mcqueen.sex_code === 1
                ? i18n().name.young_master
                : i18n().name.young_lady,
          })
        )['update'] === 1
      ) {
        await sys_love_uma_in_event(this.id);
      } else {
        era.set(`cflag:${this.id}:爱慕暂拒`, 74);
        await punish_rejecting_love(this.id);
        m_life.reject_74 = 1;
      }
    }
  }

  async 89(mcqueen, me, callname, stage, extra_flag, event_object) {
    const tenn_spr_check = check_aim_race(
      RaceHistory.get(this.id).get(),
      race_enum.tenn_spr,
      2,
      1,
    );
    if (!new McqueenEduMarks().love_89) {
      this.#kojo['pre-89']({ ...this.#dict, check: tenn_spr_check });
      era.set(`cflag:${this.id}:爱慕暂拒`, 89);
    } else if (tenn_spr_check && stage === event_hooks.week_end) {
      const ret = await print_title_with_kojo(this.#kojo, '89', mcqueen, {
        ...this.#dict,
        CHARA_FULL: mcqueen.actual_name_with_title,
        KISEKI: get_chara_talk(5).name,
      });
      if (ret['update'] === 1) {
        if (ret['sex'] === 1) {
          await quick_into_sex(this.id);
        }
        await sys_love_uma_in_event(this.id);
      } else {
        era.set(`cflag:${this.id}:爱慕暂拒`, 89);
        await punish_rejecting_love(this.id);
      }
    } else {
      return await super[89](
        mcqueen,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
  }

  async 99(mcqueen) {
    await print_title_with_kojo(this.#kojo, '99', mcqueen, {
      ...this.#dict,
      YOUNG_LADY:
        mcqueen.sex_code === 1
          ? i18n().name.young_master
          : i18n().name.young_lady,
    });
    await sys_love_uma_in_event(this.id);
  }
};
