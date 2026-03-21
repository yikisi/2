const era = require('#/era-electron');

const {
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const CustomizedRecruit = require('#/event/rec/rec-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const TamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-21');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    if (await this.check_before_rec()) {
      return;
    }
    const kojo = i18n().kojo[this.id].recruit;
    const dict = generate_dictionary(this.id, { uma: !0 });
    const ret = await kojo.rec(dict);
    let relation = 0,
      love = 0,
      honour = 0;
    if (ret['nipple'] === 1) {
      relation += 10;
      love += 1;
    } else {
      relation += 5;
      love += 2;
    }
    if (ret['lolicon'] === 1) {
      relation += 10;
      love += 1;
    } else {
      relation += 5;
      love += 2;
    }
    if (ret['business'] === 1) {
      relation += 5;
      love += 2;
    } else {
      relation -= 10;
      love += 3;
      honour -= 20;
    }
    era.println();
    sys_change_fame(honour);
    if (relation !== 0) {
      if (sys_like_chara(this.id, 0, relation, true, love)) {
        await era.waitAnyKey();
      }
    } else if (love !== 0) {
      if (sys_love_uma(this.id, love)) {
        await era.waitAnyKey();
      }
    }
    era.set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
    await this.recruit_end();
  }

  async recruit_result() {
    await super.recruit_result();
    new TamaEduMarks().lightning = 2;
  }
};
