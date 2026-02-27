const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

const { i18n } = require('#/i18n/selector');

class DailyChild extends CustomizedDaily {
  select() {
    if (!sys_check_awake(this.id)) {
      return super.select();
    }
    const growth = era.get(`cflag:${this.id}:成长阶段`);
    let h;
    if (growth === 0) {
      h = i18n().timon.daily_child.select_0;
    } else if (growth === 1) {
      h = i18n().timon.daily_child.select_1;
    } else if (
      growth === 2 &&
      era.get(`cflag:${this.id}:育成回合计时`) === 'x' &&
      Math.random() < 1 / 3
    ) {
      h = i18n().timon.daily_child.select_2;
    }
    if (h) {
      h(
        get_chara_talk(this.id),
        get_chara_talk(0),
        get_chara_talk(
          era.get(`cflag:${this.id}:父方角色`) ||
            era.get(`cflag:${this.id}:母方角色`),
        ),
      );
    } else {
      super.select();
    }
  }

  async talk() {
    let h;
    if (sys_check_awake(this.id)) {
      const fid = era.get(`cflag:${this.id}:父方角色`);
      const growth = era.get(`cflag:${this.id}:成长阶段`);
      if (growth === 0) {
        return await i18n().timon.daily_child.talk_0(
          get_chara_talk(this.id),
          get_chara_talk(0),
          {
            color: get_chara_color(0),
            content: fid === 0 ? i18n().name.dad_baby : i18n().name.mom_baby,
            fontWeight: 'bold',
          },
        );
      } else if (growth === 1) {
        h = i18n().timon.daily_child.talk_1;
      } else if (growth === 2) {
        h = i18n().timon.daily_child.talk_2;
      } else if (
        era.get(`status:${this.id}:发情`) &&
        (fid === 0 || era.get(`cflag:${this.id}:母方角色`) === 0)
      ) {
        h = i18n().timon.daily_child.talk_estrus;
      }
    }
    if (h) {
      await h(
        get_chara_talk(this.id),
        get_chara_talk(0),
        sys_get_colored_callname(this.id, 0),
      );
    } else {
      await super.talk();
    }
  }

  async growth(stage) {
    const child = get_chara_talk(this.id);
    const father = get_chara_talk(era.get(`cflag:${this.id}:父方角色`));
    const mother = get_chara_talk(era.get(`cflag:${this.id}:母方角色`));
    era.drawLine();
    let k;
    switch (stage) {
      case 0:
        k = 'growth_0';
        break;
      case 1:
        k = 'growth_1';
        LifeEventMarks.get_marks(this.id).unexpected_child = 0;
        LifeEventMarks.get_marks(this.id).rape_child = 0;
        break;
      case 2:
        k = 'growth_2';
    }
    if (k) {
      await print_title_with_kojo(
        i18n().timon.daily_child,
        k,
        child,
        father,
        mother,
      );
    }
  }

  async load_talk() {
    let callname;
    if (era.get(`cflag:${this.id}:65`) === 0) {
      callname = {
        color: get_chara_color(0),
        content: !era.get(`cflag:${this.id}:父方角色`)
          ? i18n().name.dad_baby
          : i18n().name.mom_baby,
        fontWeight: 'bold',
      };
    } else {
      callname = sys_get_colored_callname(this.id, 0);
    }
    await i18n().timon.daily_child.load_talk(
      get_chara_talk(this.id),
      callname,
      sys_get_colored_callname(0, this.id),
    );
  }
}

module.exports = DailyChild;
