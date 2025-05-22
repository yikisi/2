/**
 * @file 目白麦昆 - 爱慕
 * @author 伊兰
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const lines = require('#/event/love/love-13.kojo');
const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const McqueenEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-13');
const event_hooks = require('#/data/event/event-hooks');
const McqueenLifeMarks = require('#/data/event/life-event-marks/life-event-marks-13');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

module.exports = class extends CustomizedLove {
  get #dict() {
    const dict = {};
    const mcqueen = get_chara_talk(this.id),
      me = get_chara_talk(0);
    dict['代表色'] = mcqueen.color;
    dict['训练员'] = me.name;
    dict['麦昆'] = mcqueen.name;
    if (mcqueen.sex_code === 1) {
      dict['马娘'] = '马郎';
      dict['大小姐'] = '大少爷';
      dict['她'] = '他';
      dict['姐姐'] = '哥哥';
      dict['小姐'] = '先生';
      dict['女士'] = '男士';
      dict['淑女'] = '绅士';
      dict['女孩'] = '男孩';
      dict['少女'] = '少年';
    } else {
      dict['马娘'] = '马娘';
      dict['大小姐'] = '大小姐';
      dict['她'] = '她';
      dict['姐姐'] = '姐姐';
      dict['小姐'] = '小姐';
      dict['女士'] = '女士';
      dict['淑女'] = '淑女';
      dict['女孩'] = '女孩';
      dict['少女'] = '少女';
    }
    if (me.sex_code === 1) {
      dict['称呼'] = '训练员' + '先生';
      dict['他'] = '他';
    } else {
      dict['称呼'] = '训练员' + '小姐';
      dict['他'] = '她';
    }
    const ardan = get_chara_talk(71);
    dict['阿尔丹代表色'] = ardan.color;
    dict['阿尔丹'] = ardan.name;
    dict['富士'] = get_chara_talk(5).name;
    dict['麦昆称呼阿尔丹'] = sys_get_callname(this.id, 71);
    dict['阿尔丹称呼麦昆'] = sys_get_callname(71, this.id);
    return dict;
  }

  /** @param {CharaTalk} mcqueen */
  async movie(mcqueen) {
    const name = '银幕前的两人';
    await print_event_name(name, mcqueen);
    await lines[name](this.#dict);
    new McqueenLifeMarks().love_20 = 2;
  }

  /** @param {CharaTalk} mcqueen */
  async baseball(mcqueen) {
    await print_event_name('棒球与' + this.#dict['大小姐'], mcqueen);
    await lines['棒球与大小姐'](this.#dict);
    new McqueenLifeMarks().love_40 = 2;
  }

  async 49(mcqueen) {
    const name = '心动';
    await print_event_name(name, mcqueen);
    await lines[name](this.#dict);
    await sys_love_uma_in_event(this.id);
  }

  async 74(mcqueen, me, callname, stage, extra_flag, event_object) {
    if (
      era.get(`cflag:${this.id}:育成回合计时`) >=
      95 + race_infos[race_enum.tenn_spr].date
    ) {
      return await super[74](
        mcqueen,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
    const name = '深夜时分的交心';
    await print_event_name(name, mcqueen);
    if ((await lines[name](this.#dict)).at(-1) === 1) {
      await sys_love_uma_in_event(this.id);
    } else {
      await punish_rejecting_love(this.id);
    }
  }

  async 89(mcqueen, me, callname, stage, extra_flag, event_object) {
    const tenn_spr_check = check_aim_race(
      RaceHistory.get(this.id).get(),
      race_enum.tenn_spr,
      2,
      1,
    );
    if (!new McqueenEduMarks().love_89) {
      if (tenn_spr_check) {
        await era.printAndWait([
          '在目白家没有认可之前，',
          mcqueen.get_colored_name(),
          ' 无法进一步回应 ',
          me.get_colored_name(),
          '……',
        ]);
      } else {
        await era.printAndWait([
          '在 ',
          race_infos[race_enum.tenn_spr].get_colored_name(),
          ' 没有结果之前，',
          mcqueen.get_colored_name(),
          ' 无法进一步回应 ',
          me.get_colored_name(),
          '……',
        ]);
      }
      era.set(`cflag:${this.id}:爱慕暂拒`, 89);
    } else if (tenn_spr_check && stage === event_hooks.week_end) {
      const name = '甜蜜期';
      await print_event_name(name, mcqueen);
      const ret = await lines[name](this.#dict);
      if (ret[0] === 1) {
        if (ret[2] === 1) {
          await quick_into_sex(this.id);
        }
        await sys_love_uma_in_event(this.id);
      } else {
        await punish_rejecting_love(this.id);
      }
    } else {
      return await super[89](
        mcqueen,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
  }

  async 99(mcqueen) {
    const name = '新的明天';
    await print_event_name(name, mcqueen);
    await lines[name](this.#dict);
    await sys_love_uma_in_event(this.id);
  }
};
