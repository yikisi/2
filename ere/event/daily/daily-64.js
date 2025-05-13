/**
 * @file 目白善信 - 日常
 * @author KUN
 */
const era = require('#/era-electron');

const next_turn = require('#/system/ero/calc-sex/next-turn');
const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const sys_do_sex = require('#/system/ero/sys-calc-ero');
const { remove_item } = require('#/system/ero/sys-calc-ero-item');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const { get_custom_check } = require('#/event/check/check-factory');
const kojo = require('#/event/daily/daily-64.kojo');
const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EroParticipant = require('#/data/ero/ero-participant');
const { item_enum } = require('#/data/ero/item-const');
const { part_enum } = require('#/data/ero/part-const');
const PamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-64');
const PamaLifeMarks = require('#/data/event/life-event-marks/life-event-marks-64');

module.exports = class extends CustomizedDaily {
  get #dict() {
    const dict = {};
    const pama = get_chara_talk(this.id);
    dict['善信'] = pama.name;
    dict['称呼'] = sys_get_callname(this.id, 0);
    dict['代表色'] = pama.color;
    dict['小姐'] = pama.adult_sex_title;
    dict['她'] = pama.sex;
    dict['姐妹'] = pama.siblings_sex_title;
    dict['马娘'] = pama.uma_sex_title;
    const me = get_chara_talk(0);
    dict['T'] = me.name;
    dict['T称呼善信'] = sys_get_callname(0, this.id);
    dict.half_life = new PamaEduMarks().half_life;
    return dict;
  }

  good_morning() {
    this.select();
  }

  select() {
    const life_marks = new PamaEduMarks();
    const dict = this.#dict;
    if (life_marks.b_escape > 0) {
      life_marks.b_escape = 0;
      kojo['地下室逃脱'](dict);
    } else {
      get_chara_talk(65);
      dict['善信称呼太阳神'] = sys_get_callname(this.id, 65);
      kojo['主界面'](dict);
    }
  }

  async office_study() {
    await kojo['指导学习'](this.#dict);
  }

  async office_cook() {
    await kojo['加餐'](this.#dict);
  }

  async office_prepare() {
    await kojo['赛前准备'](this.#dict);
  }

  async office_rest() {
    await kojo['小憩'](this.#dict);
  }

  async talk() {
    const dict = this.#dict;
    get_chara_talk(59);
    dict['善信称呼多伯'] = sys_get_callname(this.id, 59);
    get_chara_talk(65);
    dict['善信称呼太阳神'] = sys_get_callname(this.id, 65);
    get_chara_talk(71);
    dict['善信称呼阿尔丹'] = sys_get_callname(this.id, 71);
    get_chara_talk(74);
    dict['善信称呼光明'] = sys_get_callname(this.id, 74);
    get_chara_talk(86);
    dict['善信称呼高峰'] = sys_get_callname(this.id, 86);
    await kojo['聊天'](dict);
  }

  async office_game() {
    const dict = this.#dict;
    get_chara_talk(27);
    dict['善信称呼莱恩'] = sys_get_callname(this.id, 27);
    await kojo['玩游戏'](dict);
  }

  async office_gift() {
    await kojo['送礼物'](this.#dict);
  }

  async school_atrium(hook) {
    const edu_marks = new PamaEduMarks();
    if (
      era.get(`love:${this.id}`) >= 50 &&
      era.get('item:肛塞') > 0 &&
      era.get(`cflag:${this.id}:肠道内精液`) > 0 &&
      !edu_marks.snails
    ) {
      edu_marks.snails = 1;
      const pama = get_chara_talk(this.id);
      const ret = await print_name_and_show_kojo(
        '要变成蜗牛了///',
        get_chara_talk(this.id),
        kojo,
        {
          代表色: pama.color,
          你: era.get(`callname:${this.id}:-2`),
          她: pama.sex,
          少女: pama.teen_sex_title,
          称呼: sys_get_callname(this.id, 0),
        },
      );
      begin_and_init_ero(0, this.id);
      sys_do_sex(
        new EroParticipant(0, part_enum.item),
        new EroParticipant(this.id, part_enum.anal),
        item_enum.butt_plug,
      );
      await next_turn(false);
      if (ret[0] === 2) {
        await quick_make_love(
          new EroParticipant(0, part_enum.hand),
          new EroParticipant(this.id, part_enum.virgin),
          false,
        );
      }
      set_palam_to_max(this.id, part_enum.virgin);
      remove_item(this.id, part_enum.anal);
      await quick_make_love(
        new EroParticipant(0, part_enum.hand, -0.5),
        new EroParticipant(this.id, part_enum.anal),
        false,
      );
      end_ero_and_train();
      hook.override = true;
      return;
    }
    if ((hook.arg = !(await select_action_in_atrium()))) {
      await kojo['枯树洞'](this.#dict);
    } else {
      await kojo['中庭约会'](this.#dict);
    }
  }

  async school_rooftop() {
    const dict = this.#dict;
    const life_marks = new PamaLifeMarks();
    if (era.get(`love:${this.id}`) >= 50 && !life_marks.love_rooftop) {
      life_marks.love_rooftop = 1;
      dict.check = 1;
    }
    if ((await kojo['天台'](dict))[0] === 2 && sys_love_uma(this.id, 1)) {
      await era.waitAnyKey();
    }
  }

  async out_river(hook) {
    if ((hook.arg = await select_action_around_river()) > 0) {
      await kojo['散步'](this.#dict);
    } else {
      await kojo['钓鱼'](this.#dict);
    }
  }

  async out_shopping(hook) {
    const temp = await select_action_in_shopping_street();
    hook.arg = temp <= 1;
    switch (temp) {
      case 0:
        await kojo['街机厅'](this.#dict);
        break;
      case 1:
        await kojo['抽奖'](this.#dict);
        break;
      case 2:
        await kojo['卡拉OK'](this.#dict);
        break;
      case 3:
        await kojo['电影'](this.#dict);
    }
  }

  async out_church() {
    const dict = this.#dict;
    dict.dice = Math.random() < 0.5;
    await kojo['神社'](dict);
  }

  async out_station(hook) {
    switch ((hook.arg = await select_action_in_station(this.id))) {
      case 0:
        await kojo['车站吃饭'](this.#dict);
        break;
      case 1:
        await kojo['车站约会'](this.#dict);
        break;
      case 2:
        await kojo['商店'](this.#dict);
    }
  }

  async good_night(hook) {
    const dict = {
      ...this.#dict,
      check: get_custom_check(this.id).is_want_make_love(),
    };
    const ret = await kojo['晚安'](dict);
    if (ret[0] === 1) {
      hook.arg = 1;
    } else if (ret[0] === 2) {
      if (dict.check === 2) {
        hook.arg = 2;
      } else {
        hook.arg = 0;
      }
    }
  }

  async load_talk() {
    await kojo['读档对话'](this.#dict);
  }
};
