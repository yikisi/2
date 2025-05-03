const era = require('#/era-electron');

const kojo = require('#/event/rec/rec-71.kojo');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_color } = require('#/data/chara-colors');
const recruit_flags = require('#/data/event/recruit-flags');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    const dict = {};
    dict['代表色'] = get_chara_color(this.id);
    dict['你'] = era.get('callname:0:-2');
    if (era.get(`cflag:${this.id}:性别`) === 1) {
      dict['她'] = '他';
      dict['马娘'] = '马郎';
    } else {
      dict['她'] = '她';
      dict['马娘'] = '马娘';
    }
    dict['称呼'] = sys_get_callname(this.id, 0);
    switch (era.get(`cflag:${this.id}:招募状态`)) {
      case recruit_flags.no:
        if ((await kojo['recruit_1'](dict))[2] === 1) {
          era.set('flag:物色对象', this.id);
          era.set(`cflag:${this.id}:招募状态`, -2);
        } else {
          era.set(`cflag:${this.id}:招募状态`, -1);
        }
        break;
      case -1:
        if ((await kojo['recruit_2'](dict))[0] === 1) {
          era.set('flag:物色对象', this.id);
          era.set(`cflag:${this.id}:招募状态`, -2);
        }
        break;
      case -2:
        await kojo['recruit_3'](dict);
        era.set('flag:物色对象', 0);
        era.set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
        await this.recruit_end();
    }
    return true;
  }
};
