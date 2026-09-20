const era = require('#/era-electron');

const CustomizedEdu = require('#/event/edu/edu-common');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const AcuteEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-100');
const AcuteLifeMarks = require('#/data/event/life-event-marks/life-event-marks-100');
const { get_trainer_title } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
const { attr_enum, base_attr_list } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().kojo[this.id].edu;
  }

  async race_end(acute, me, callname, hook, extra) {
    if (
      extra.race !== race_enum.begin_race ||
      era.get('cflag:100:育成回合计时') >= 48
    ) {
      return await super.race_end(acute, me, callname, hook, extra);
    }
    await (
      extra.rank === 1 ? this.#kojo.begin_race_win : this.#kojo.begin_race_lose
    )(acute, me, callname);
  }

  async race_start(acute, me, callname, hook, extra) {
    if (
      extra.race !== race_enum.begin_race ||
      era.get('cflag:100:育成回合计时') >= 48
    ) {
      return await super.race_start(acute, me, callname, hook, extra);
    }
    await print_title_with_kojo(
      this.#kojo,
      'before_begin_race',
      acute,
      me,
      callname,
    );
  }

  async train_success(acute, me, callname, hook, extra) {
    if (extra.train === attr_enum.intelligence) {
      return await super.train_success(acute, me, callname, hook, extra);
    }
    i18n().timon.edu.ts_info(acute);
    era.println();
    if (
      !era.get('status:100:摸鱼') &&
      Math.random() < extra.stamina_ratio * 0.2
    ) {
      await era.waitAnyKey();
      hook.arg =
        (
          await print_title_with_kojo(this.#kojo, 'ts_add', acute, me, callname)
        )[0] === 1;
    }
    if (era.get('item:斗魂注入鞭（S用）') > 0) {
      extra.attr = 2;
      extra.stamina = -2 - (2 - era.get('cflag:100:干劲')) * 2;
    }
  }

  async week_start(acute, me, callname, hook, extra, ebj) {
    let wait;
    let temp;
    switch (ebj?.arg) {
      case 5:
        era.set('cflag:100:节日事件标记', 0);
        await print_title_with_kojo(
          this.#kojo,
          'ws_5',
          acute,
          get_chara_talk(301),
          get_chara_talk(302),
          me,
          callname,
        );
        wait = all_reward_in_event(this.id, {
          attr: { [attr_enum.strength]: 10 },
          motivation: 1,
        });
        wait =
          all_reward_in_event(0, {
            attr: { [attr_enum.intelligence]: 10 },
          }) || wait;
        break;
      case 47:
        era.set('cflag:100:节日事件标记', 0);
        await print_title_with_kojo(
          this.#kojo,
          'ws_47',
          acute,
          get_chara_talk(301),
          me,
          callname,
          sys_get_colored_callname(this.id, 301),
          sys_get_colored_callname(301, 302),
          sys_get_colored_callname(0, 301),
        );
        wait = all_reward_in_event(0, {
          attr: { [attr_enum.intelligence]: 10 },
        });
        break;
      case 47 + 1:
        era.set('cflag:100:节日事件标记', 0);
        switch (
          (
            await print_title_with_kojo(
              this.#kojo,
              'ws_47_1',
              acute,
              me,
              callname,
            )
          )[0]
        ) {
          case 1:
            wait = all_reward_in_event(this.id, {
              attr: { [attr_enum.toughness]: 25 },
            });
            break;
          case 2:
            wait = all_reward_in_event(this.id, {
              attr: { [attr_enum.endurance]: 25 },
            });
            break;
          case 3:
            wait = all_reward_in_event(this.id, { pt: 20 });
        }
        break;
      case 47 + 6:
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_6',
          acute,
          get_chara_talk(48),
          get_chara_talk(301),
          get_chara_talk(302),
          me,
          callname,
          sys_get_colored_callname(this.id, 48),
          sys_get_colored_callname(48, this.id),
        );
        wait = all_reward_in_event(this.id, {
          attr: { [attr_enum.strength]: 10 },
          pt: 30,
        });
        wait =
          all_reward_in_event(0, {
            attr: { [attr_enum.intelligence]: 10 },
          }) || wait;
        break;
      case 95 + 1:
        era.set('cflag:100:节日事件标记', 0);
        switch (
          (
            await print_title_with_kojo(
              this.#kojo,
              'ws_95_1',
              acute,
              me,
              callname,
            )
          )[0]
        ) {
          case 1:
            wait = all_reward_in_event(this.id, {
              attr: base_attr_list.map(() => 5),
            });
            break;
          case 2:
            wait = all_reward_in_event(this.id, { pt: 35 });
            break;
          case 3:
            wait = all_reward_in_event(this.id, { attr: [0, 30] });
        }
        break;
      case 95 + 6:
        era.set('cflag:100:节日事件标记', 0);
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_6',
          acute,
          get_chara_talk(19),
          get_chara_talk(48),
          get_chara_talk(49),
          get_chara_talk(301),
          me,
          callname,
          sys_get_colored_callname(this.id, 19),
          sys_get_colored_callname(this.id, 48),
          sys_get_colored_callname(this.id, 49),
          sys_get_colored_callname(19, this.id),
          sys_get_colored_callname(48, this.id),
          sys_get_colored_callname(49, 0),
          sys_get_colored_callname(49, this.id),
          sys_get_colored_callname(0, 301),
        );
        break;
      case 95 + 14:
        era.set('cflag:100:节日事件标记', 0);
        temp = RaceHistory.get(100)
          .get_values()
          .filter((e) => e.rank === 1).length;
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_14',
          acute,
          get_chara_talk(39),
          get_chara_talk(40),
          get_chara_talk(70),
          get_chara_talk(72),
          me,
          callname,
          sys_get_colored_callname(this.id, 72),
          sys_get_colored_callname(72, this.id),
          temp,
        );
        if (temp >= 5) {
          new AcuteEduMarks().ending++;
        } else {
          wait = all_reward_in_event(this.id, { pt: 25 });
          wait = all_reward_in_event(0, { attr: [0, 0, 5, 10] }) || wait;
        }
        break;
      case 'palace':
        await CustomizedEdu.common_palace(acute, me);
        if (era.get('cflag:100:殿堂') === 2) {
          era.set('flag:当前位置', location_enum.gate);
          if (new AcuteEduMarks().ending > 9) {
            await print_title_with_kojo(
              this.#kojo,
              'ws_palace_ge',
              acute,
              me,
              callname,
            );
          } else {
            await print_title_with_kojo(
              this.#kojo,
              'ws_palace_ne',
              acute,
              get_chara_talk(301),
              get_chara_talk(302),
              me,
              callname,
              sys_get_colored_callname(0, 301),
              sys_get_colored_callname(0, 302),
            );
          }
          era.set('flag:当前位置', location_enum.office);
        } else {
          await CustomizedEdu.common_palace_relation(acute, me);
        }
        break;
      case 'leg':
        new AcuteLifeMarks().leg = get_random_value(6, 10);
        await print_title_with_kojo(this.#kojo, 'ws_leg', acute, me, callname);
        wait = all_reward_in_event(this.id, {
          attr: { [attr_enum.toughness]: 10 },
        });
        break;
      default:
        return await super.week_start(acute, me, callname, hook, extra, ebj);
    }
    wait && (await era.waitAnyKey());
  }

  async crazy_fan_end() {
    await print_title_with_kojo.ending(
      this.#kojo,
      'crazy_fan_end',
      get_chara_talk(this.id),
      get_chara_talk(0),
      get_trainer_title().prefix(),
    );
  }
};
