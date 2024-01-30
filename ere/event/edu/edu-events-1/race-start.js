const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { race_enum } = require('#/data/race/race-const');

const spe = get_chara_talk(1);
const me = get_chara_talk(0);

/**
 * @param {HookArg} hook
 * @param {{race:number,rank:number,relation_change:number}} extra_flag
 */
module.exports = async (hook, extra_flag) => {
  let edu_weeks = era.get('flag:当前回合数') - era.get('cflag:1:育成回合计时');
  if (extra_flag.race === race_enum.begin_race && edu_weeks < 48) {
    await print_event_name('冲向出道赛', 1);
    await era.printAndWait(
      '\n' +
        '今天就是特别周的出道赛。你进入赛前准备室想要鼓励鼓励特别周，却看到她在屋里心神不宁地绕来绕去。',
    );
    await spe.say_and_wait('…………');
    await me.say_and_wait('小特？不要紧吧？');
    await spe.say_and_wait(
      '呜哇！对，对不起！只是第一次来到这样的会场里，有点紧张……',
    );
    era.printButton('试试在手上写”马娘“两个字然后咽下去？', 1);
    era.printButton('放轻松，想象一下赛后大餐。', 2);
    await era.input();
    await spe.say_and_wait('我试试……嗯，似乎有点效果……');
    await spe.say_and_wait(
      '那么我要准备上场了，训练员要好好看着我迈出成为日本第一马娘的第一步！',
    );
  } else if (extra_flag.race === race_enum.toky_yus && edu_weeks < 48) {
    await print_event_name('冲向日本德比', 1);
    await me.say_and_wait('小特。');
    await spe.say_and_wait('我，我在！');
    await me.say_and_wait('紧张吗？');
    await spe.say_and_wait('有点，毕竟是一生只有一次的经典赛……');
    await me.say_and_wait('不要担心，你的实力是够的。');
    await me.say_and_wait('到出场的时候了，去吧，拿下德比冠军！');
    await spe.say_and_wait('嗯！');
  } else if (extra_flag.race === race_enum.tenn_spr && edu_weeks < 95) {
    await print_event_name('冲向天皇赏（春）', 1);
    await spe.say_and_wait('长距离的比赛要开始了……');
    await spe.say_and_wait('好的，我要上了！');
  } else if (extra_flag.race === race_enum.japa_cup && edu_weeks < 95) {
    await print_event_name('冲向日本杯', 1);
    await spe.say_and_wait('…………');
    await spe.say_and_wait('哪怕是在这里也能听到外面的欢呼声，真的很震撼……');
    await me.say_and_wait('这就是日本杯。');
    await era.printAndWait(
      '这就是日本杯——来自世界各地的最强马娘在全球观众的注视之下，展开的终极对决。',
    );
    await era.printAndWait(
      '已经在其他比赛中证明过自己的特别周，将向着日本杯舞台的最高点，发起冲击。',
    );
    await me.say_and_wait('紧张吗，小特？');
    await spe.say_and_wait(
      '实话说的话……紧张，就好像出道战那时一样，我记得那时训练员还教了我缓解紧张的方法来着。',
    );
    await me.say_and_wait('还要再试试吗？');
    await spe.say_and_wait('不用了！现在的我已经完全不怕紧张了！');
    await spe.say_and_wait(
      '训练员，妈妈们，好朋友们……有这么多人陪在我的身边为我加油打气，我一定能做得到的！',
    );
    era.printButton('就是这个感觉，上吧！', 1);
    await spe.say_and_wait('好！');
  } else if (extra_flag.race === race_enum.arim_kin && edu_weeks < 95) {
    await print_event_name('冲向有马纪念', 1);
    //todo
  }
};
