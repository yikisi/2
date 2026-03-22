const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const { akuochi, buff_colors } = require('#/data/color-const');
const ElfieLifeMarks = require('#/data/event/life-event-marks/life-event-marks-207');
const TokinoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-301');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');

const di18n = require('#/i18n/extended-def');

module.exports = class extends CustomizedMec {
  get_action_debuff() {
    // CFLAGNAME:66 = 招募状态
    if (era.get('cflag:301:66') === recruit_flags.yes) {
      return -0.1 * (new TokinoLifeMarks().buff + 1);
    }
    return 0;
  }

  get_status() {
    const ret = [];
    // FLAGNAME:35 = 惩戒力度
    const punishment = era.get('flag:35');
    if (punishment > 0) {
      ret.push({
        color: punishment === 1 ? buff_colors[1] : buff_colors[2],
        content: di18n.kojo.punishment[punishment - 1],
        title: di18n.kojo.punish_desc[punishment - 1],
      });
    }
    // FLAGNAME:122 = 强奸抵抗
    if (era.get('flag:122') === '') {
      ret.push({
        ...di18n.kojo.get_titled_content(0, 'rape'),
        color: buff_colors[2],
      });
    }
    // FLAGNAME:4 = 当前位置
    if (era.get('flag:4') === location_enum.basement) {
      // BASENAME:0 - 1 = 体力 - 精力
      if (era.get('base:0:1') < 100) {
        ret.push({
          ...di18n.kojo.get_titled_content(0, 'b_l_time'),
          color: buff_colors[3],
        });
      }
      if (era.get('base:0:0') < 100) {
        ret.push({
          ...di18n.kojo.get_titled_content(0, 'b_l_stamina'),
          color: buff_colors[0],
        });
      }
    }
    // STATUSNAME:23 - 26 = 马语者 - 透视镜片
    for (let sid = 23; sid <= 26; ++sid) {
      const t = era.get(`status:0:${sid}`);
      if (t > 0) {
        ret.push({
          ...di18n.tb_status.get_titled_status(sid, t),
          color: buff_colors[2],
        });
      }
    }
    for (const cid of [301, 303]) {
      // CFLAGNAME:66 = 招募状态
      if (era.get(`cflag:${cid}:66`) > 0) {
        const { buff } = LifeEventMarks.get_marks(cid);
        ret.push({
          ...di18n.tb_status.get_titled_status(`buff${cid}`, (buff + 1) * 10),
          color: get_chara_color(cid),
        });
      }
    }
    return ret;
  }

  get_talents() {
    const ret = [];
    if (era.get('flag:恶堕') === 2) {
      ret.push({
        ...di18n.kojo.get_titled_content(0, 'akuochi'),
        color: akuochi[1],
      });
    }
    return ret;
  }

  get_maxbase_buff() {
    if (new ElfieLifeMarks().buff > 0) {
      return 200;
    }
    return super.get_maxbase_buff();
  }

  init_love() {}

  set_callname() {}

  set_my_name() {}

  set_my_sex() {}
};
