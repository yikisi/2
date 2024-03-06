const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');
const { race_enum } = require('#/data/race/race-const');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');

const spe = get_chara_talk(1);
const me = get_chara_talk(0);

/**
 * @param {HookArg} hook
 * @param {{race:number,rank:number,relation_change:number}} extra_flag
 */
module.exports = async (hook, extra_flag) => {
  let edu_weeks = era.get('cflag:1:育成回合计时');
  if (
    extra_flag.race === race_enum.begin_race &&
    edu_weeks < 48 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('出道战后：向着日本第一！', 1);
    await spe.say_and_wait('训练员，训练员！我赢了！');
    await me.say_and_wait('干得漂亮！');
    await spe.say_and_wait(
      '现在可以准备规划未来要参加的经典赛了吧？我已经迫不及待了！',
    );
    await me.say_and_wait('小特今天兴致很高呢。');
    await spe.say_and_wait(
      '没错，我感觉到，那个梦想，成为日本第一的梦想，正在逐渐实现！',
    );
  } else if (
    extra_flag.race === race_enum.toky_yus &&
    edu_weeks < 48 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('日本德比后：“确实呢”', 1);
    //todo
  } else if (
    extra_flag.race === race_enum.toky_yus &&
    edu_weeks < 48 &&
    extra_flag.rank > 1 &&
    extra_flag.rank <= 5
  ) {
    await print_event_name('日本德比后：化今日为动力', 1);
    await spe.say_and_wait('……输掉了……');
    await era.printAndWait(
      '在东京2400的赛场上，特别周没有能坚持到最后，与胜利失之交臂。',
    );
    await spe.say_and_wait('……好不甘心啊，明明感觉只差一点……');
    await me.say_and_wait('记住这个不甘心的感觉，之后的训练中要努力了。');
    await spe.say_and_wait('好……下次一定要赢！');
  } else if (
    extra_flag.race === race_enum.tenn_spr &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('天皇赏（春）后：一定要再次', 1);
    //todo
  } else if (
    extra_flag.race === race_enum.tenn_spr &&
    edu_weeks < 95 &&
    extra_flag.rank > 1 &&
    extra_flag.rank <= 3
  ) {
    await print_event_name('天皇赏（春）后：向那个背影学习', 1);
    //todo
  } else if (
    extra_flag.race === race_enum.japa_cup &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('日本杯后：日本的总大将', 1);
    await spe.say_and_wait('哈啊……哈啊……');
    await era.printAndWait(
      '即使已经精疲力竭，但她仍然牢牢的守住了第一的位置，直到冲线。',
    );
    await era.printAndWait('今年的有马纪念冠军是————特别周。');
    era.printButton('干得漂亮，小特！', 1);
    era.printButton('去跟现场支持你的观众打个招呼吧！', 2);
    await era.input();
    await spe.say_and_wait('嗯！');
    await era.printAndWait('\n');
    await spe.say_and_wait('呼啊……真的好累，感觉全身上下都像散了架一样……');
    await spe.say_and_wait(
      '日本杯，和其他的比赛都不一样呢……感觉有无数的人都以我的胜利为荣。',
    );
    era.printButton('我也是哦。', 1);
    era.printButton('辛苦了，晚上去大吃一顿庆祝下吧。', 2);
    await era.input();
    await spe.say_and_wait('嗯！……那个，晚饭的烧肉套餐我想要大份的！');
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('有马纪念后：引以为傲的赛马娘', 1);
    await spe.say_and_wait('第一名！训练员，我是冠军！');
    await era.printAndWait(
      '在响彻全场的欢呼声中，特别周向你飞奔而来，紧紧地抱住你。',
    );
    await me.say_and_wait('棒极了。');
    await spe.say_and_wait(
      '即使是这样的我也能拿下冠军……真的很谢谢你，训练员！',
    );
    await spe.say_and_wait(
      '呜呜……太激动一下子哭出来了……我没有给训练员丢脸吧？',
    );
    era.printButton('怎么会呢。', 1);
    era.printButton('你可是最令我引以为傲的赛马娘。', 2);
    await era.input();
    await era.printAndWait(
      '听到你的回答，缩在你怀里的特别周哭得更厉害了，也笑得更开心了。',
    );
  } else {
    throw new Error();
  }
};
