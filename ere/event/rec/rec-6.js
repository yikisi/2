const era = require('#/era-electron');

const {
  sys_change_attr_and_print,
  sys_change_motivation,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const CharaAvailableSkills = require('#/data/chara-available-skills');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, ebj) {
    if (await this.check_before_rec()) {
      return;
    }
    const minoru = get_chara_talk(301);
    const dict = {
      ...generate_dictionary(this.id, {
        sir: !0,
        title: !0,
        uma: !0,
        your_name: !0,
      }),
      T_COLOR: minoru.color,
      T_NAME: minoru.name,
    };
    // CFLAGNAME:66 = 招募状态
    era.set(`cflag:${this.id}:66`, recruit_flags.yes);
    const ret = await i18n().kojo[this.id].recruit['rec'](dict);
    await this.recruit_end();
    era.println();
    // CFLAGNAME:48 = 育成回合计时
    era.set('cflag:6:48', 0);
    let wait_flag = false,
      motivation_change = 0;
    if (ret[1] === 1) {
      motivation_change++;
    } else {
      wait_flag = sys_like_chara(301, 0, -20) || wait_flag;
      wait_flag = sys_love_uma(301, 2) || wait_flag;
    }
    if (ret[2] === 1) {
      motivation_change++;
    } else {
      sys_change_attr_and_print(
        0,
        attr_enum.hp,
        -era.get('maxbase:0:体力') * 0.1,
      );
    }
    wait_flag = sys_change_motivation(6, motivation_change) || wait_flag;
    if (wait_flag) {
      await era.waitAnyKey();
    }
    add_event(
      event_hooks.week_end,
      new EventObject(this.id, cb_enum.edu).set_arg('beginning'),
    );
  }

  async recruit_result() {
    await super.recruit_result();
    RaceHistory.get(this.id).add_result(
      23,
      new RaceHistory.RaceResult(
        1,
        race_enum.begin_race,
        1,
        1,
        // FLAGNAME:1 = 当前年
        era.get('flag:1') - 1,
      ),
    );
    era.add(`cflag:${this.id}:48`, 48);
    for (let i = 0; i < 5; ++i) {
      // ABLNAME:0 - 4 = 速度训练等级 - 智力训练等级
      era.add(`abl:${this.id}:${i}`, 2);
      // BASENAME:5 - 9 = 速度 - 智力
      era.add(`base:${this.id}:${5 + i}`, get_random_value(300, 400));
    }
    // EXPNAME:1 = 技能点数
    era.add(`exp:${this.id}:1`, 600);
    const available_skills = CharaAvailableSkills.get(this.id);
    const got_skills = available_skills.get().splice(0, 2);
    get_skills_and_print_in_event(this.id, got_skills);
    await era.waitAnyKey();
  }
};
