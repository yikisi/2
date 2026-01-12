/**
 * @file 梦之旅 - 招募
 * @author 幽白書
 */
const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const kojo = require('#/event/rec/rec-119.kojo');
const CustomizedRecruit = require('#/event/rec/rec-common');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    const dict = {};
    const dj = get_chara_talk(this.id);
    dict['代表色'] = dj.color;
    dict['她'] = dj.sex;
    dict['马娘'] = dj.get_uma_sex_title();
    dict['称呼'] = sys_get_callname(this.id, 0);
    const me = get_chara_talk(0);
    dict['你'] = me.name;
    dict['舍妹'] = dj.sex_code === 1 ? '舍弟' : '舍妹';
    if (era.get(`cflag:${this.id}:招募状态`) === recruit_flags.no) {
      await print_name_and_show_kojo('不运的招募', dj, kojo, dict);
      era.set('flag:物色对象', this.id);
      era.set(`cflag:${this.id}:招募状态`, -1);
      era.set(`cflag:${this.id}:随机招募`, 0);
      return true;
    } else {
      await print_name_and_show_kojo('命定的安排？', dj, kojo, dict);
      era.set('flag:物色对象', 0);
      era.set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
    }
  }
};
