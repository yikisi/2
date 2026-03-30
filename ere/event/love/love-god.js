const { add, get, set } = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  set_palam_to_max,
  update_ero_status,
} = require('#/system/ero/sys-prepare-ero');
const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const print_ero_page = require('#/page/page-ero');

const CustomizedLove = require('#/event/love/love-common');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');

class LoveGod extends CustomizedLove {
  /** @param {CharaTalk} god */
  async 49(god) {
    LifeEventMarks.get_marks(this.id).set('love', 1);
    if (get(`love:${this.id}`) === 49) {
      await sys_love_uma_in_event(this.id);
    }
  }

  /**
   * @param {CharaTalk} god
   * @param {CharaTalk} me
   * @param {number} selected
   */
  async handle50(god, me, selected) {
    const cur_week = (get('flag:当前周') % 4) + 1;
    const cur_month = ((get('flag:当前月') + (cur_week === 1) - 1) % 12) + 1;
    const cur_year =
      get('flag:当前年') +
      (get('flag:当前月') === 1 && get('flag:当前周') === 1);
    const birth_day = 7 * cur_week + Math.floor(7 * Math.random()) - 6;
    const date = {
      y: cur_year.toString(),
      m: cur_month.toString(),
      w: cur_week.toString(),
    };
    let temp;
    switch (selected) {
      case 1:
        if (me.sex_code === 0) {
          set('cflag:0:阴茎尺寸', 3);
        }
        set(`status:${god.id}:危险期`, 1);
        set(`status:${god.id}:经期`, 0);
        set(`status:${god.id}:反避孕套`, 1);
        begin_and_init_ero(0, god.id);
        set('tcvar:0:发情', 1);
        set(`tcvar:${god.id}:发情`, 1);
        update_ero_status(0, god.id);
        await print_ero_page(god.id, true);
        set_palam_to_max(0, part_enum.penis);
        set_palam_to_max(god.id, part_enum.virgin);
        set('tcvar:0:避孕套', 0);
        await quick_make_love(
          new EroParticipant(0, part_enum.penis),
          new EroParticipant(god.id, part_enum.virgin),
          false,
        );
        await end_ero_and_show_result();
        if (me.sex_code === 0) {
          set('cflag:0:阴茎尺寸', 0);
        }
        set(`cflag:${god.id}:招募状态`, recruit_flags.yes);
        set(`cflag:${god.id}:父方角色`, 0);
        set(`cflag:${god.id}:母方角色`, god.id);
        set(`cflag:${god.id}:妊娠阶段`, 1 << pregnant_stage_enum.no);
        add('exp:0:孩子数量', 1);
        add(`exp:${god.id}:生产次数`, 1);
        if (!get('cstr:0:长子女经历')) {
          set('cstr:0:长子女经历', { ...date, c: god.id });
        }
        set(`cstr:${god.id}:长子女经历`, { ...date, c: god.id, im: true });
        LifeEventMarks.get_marks(god.id).add('love');
        break;
      case 2:
        if (!get(`cflag:${god.id}:性别`)) {
          set(`cflag:${god.id}:阴茎尺寸`, 1);
        }
        begin_and_init_ero(0, god.id);
        set('tcvar:0:发情', 1);
        set(`tcvar:${god.id}:发情`, 1);
        update_ero_status(0, god.id);
        update_ero_status(0, god.id);
        await print_ero_page(god.id, true);
        set_palam_to_max(god.id, part_enum.penis);
        set_palam_to_max(0, part_enum.virgin);
        set(`tcvar:${god.id}:避孕套`, 0);
        await quick_make_love(
          new EroParticipant(god.id, part_enum.penis),
          new EroParticipant(0, part_enum.virgin),
          false,
        );
        await end_ero_and_show_result();
        if (!get(`cflag:${god.id}:性别`)) {
          set(`cflag:${god.id}:阴茎尺寸`, 0);
        }
        set(`cflag:${god.id}:招募状态`, recruit_flags.yes);
        LifeEventMarks.get_marks(god.id).add('love');
        set(`cflag:${god.id}:父方角色`, god.id);
        set(`cflag:${god.id}:母方角色`, 0);
        add(`exp:${god.id}:孩子数量`, 1);
        add('exp:0:生产次数', 1);
        set(`cstr:${god.id}:长子女经历`, { ...date, c: god.id });
        if (!get('cstr:0:长子女经历')) {
          set('cstr:0:长子女经历', { ...date, c: god.id, im: true });
        }
        temp = LifeEventMarks.get_marks(0);
        temp.waist_buff = 8;
        set('cflag:0:妊娠阶段', 1 << pregnant_stage_enum.resume);
        set('cflag:0:妊娠回合计时', 4 + 1);
        add('talent:0:泌乳', !get('talent:0:泌乳'));
        if (get('talent:0:泌乳') === 1) {
          set('cflag:0:泌乳回合计时', 48 + 1);
          temp.breast_buff = 5;
        }
        add('base:0:体重偏差', -400);
        break;
      case 3:
        LifeEventMarks.get_marks(god.id).sub('love');
    }
    if (selected < 2) {
      await this.after_sex_50(god, me);
      set(`cflag:${god.id}:出生月份`, cur_month);
      set(`cflag:${god.id}:出生日期`, birth_day);
      set(`cflag:${god.id}:月经周`, 0);
      set(`cflag:${god.id}:招募状态`, -24);
      set(`cstr:${god.id}:出生经历`, cur_year.toString());
    }
  }

  /**
   * @param {CharaTalk} god
   * @param {CharaTalk} me
   */
  async after_sex_50(god, me) {}
}

module.exports = LoveGod;
