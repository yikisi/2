/**
 * @file 玉藻十字 - 育成
 * @author 雞雞
 */
const era = require('#/era-electron');

const {
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const kojo = require('#/event/rec/rec-21.kojo');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_color } = require('#/data/chara-colors');
const TamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-21');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    if (await this.check_before_rec()) {
      return;
    }
    const dict = {};
    dict['代表色'] = get_chara_color(this.id);
    dict['玩家名'] = era.get('callname:0:-2');
    if (era.get(`cflag:${this.id}:性别`) === 1) {
      dict['她'] = '他';
      dict['马娘'] = '马郎';
    } else {
      dict['她'] = '她';
      dict['马娘'] = '马娘';
    }
    const ret = await kojo['招募'](dict);
    let relation = 0,
      love = 0,
      honour = 0;
    if (ret[1] === 1) {
      relation += 10;
      love += 1;
    } else {
      relation += 5;
      love += 2;
    }
    if (ret[2] === 1) {
      relation += 10;
      love += 1;
    } else {
      relation += 5;
      love += 2;
    }
    if (ret[4] === 1) {
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
