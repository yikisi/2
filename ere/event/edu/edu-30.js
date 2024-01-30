const era = require('#/era-electron');

const CharaTalk = require('#/utils/chara-talk');

const event_hooks = require('#/data/event/event-hooks');
const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { attr_names, fumble_result } = require('#/data/train-const');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const {
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');
const riceEventMarks = require('#/data/event/edu-event-marks-extended/edu-event-marks-30');
const chara_talk = new CharaTalk(30);
const handlers = {};

handlers[
  event_hooks.week_start
] = require('#/event/edu/edu-events-30/week-start');

handlers[event_hooks.week_end] = require('#/event/edu/edu-events-30/week-end');

handlers[event_hooks.race_end] = require('#/event/edu/edu-events-30/race-end');

handlers[event_hooks.school_atrium] = async (_, __, event_object) => {
  if (era.get('flag:当前互动角色') !== 30) {
    add_event(event_hooks.school_atrium, event_object);
    return;
  }
  const chara26_talk = get_chara_talk(26),
    me = get_chara_talk(0),
    edu_weeks = era.get('flag:当前回合数') - era.get('cflag:30:育成回合计时');
  if (edu_weeks === 47 + 46) {
    await print_event_name('劲敌的不幸', chara_talk);
    await era.printAndWait(
      `经过【菊花赏】后，${chara_talk.name}的身边出现了某些变化。`,
    );
    await era.printAndWait(
      `赛${chara_talk.sex_code - 1 ? '马娘' : '马郎'}A：「啊、是${
        chara_talk.name
      }酱！」`,
    );
    await chara_talk.say_and_wait(`咦……咦！？在叫、${chara_talk.name}吗？`);
    await era.printAndWait(
      `赛${
        chara_talk.sex_code - 1 ? '马娘' : '马郎'
      }B：「不用那么紧张的！呼呼，上次的【菊花赏】真精彩啊！」`,
    );
    await era.printAndWait(
      `赛${
        chara_talk.sex_code - 1 ? '马娘' : '马郎'
      }A：「嗯嗯！真的有种被感动到了的感觉！」`,
    );
    await era.printAndWait(
      `赛${chara_talk.sex_code - 1 ? '马娘' : '马郎'}B：「真的真的！那个时候的${
        chara_talk.name
      }同学。咕……超认真的样子太帅了！」`,
    );
    await chara_talk.say_and_wait(`欸欸欸？说${chara_talk.name}帅气什么的…`);
    await era.printAndWait(
      `所以今后，也要加油哦！我们也会应援${chara_talk.name}酱的。`,
    );
    await chara_talk.say_and_wait(`欸！？嗯……嗯！！`);
    await me.say_and_wait(`能够有应援真的是太高兴了。`);
    await chara_talk.say_and_wait(
      `啊，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人？`,
    );
    await chara_talk.say_and_wait(
      `哪、哪里…是波旁同学实在是太厉害了所以才来跟${chara_talk.name}打招呼而已。`,
    );
    await chara_talk.say_and_wait(`【菊花赏】上的掌声也是，因为有波旁同学在——`);
    await me.say_and_wait(`因为你是${chara_talk.sex}的对手嘛。`);
    await chara_talk.say_and_wait(
      `呜呜……啊，连${me.sex_code - 1 ? '姐姐' : '哥哥'}大人都抬举过头了啦……`,
    );
    await chara_talk.say_and_wait(`不过，帅气吗？欸嘿嘿…`);
    await era.printAndWait(`——但是第二天，状况发生了转变。`);
    await me.say_and_wait(`${chara_talk.name}？`);
    await chara_talk.say_and_wait(`……不要靠近啦！`);
    await era.printAndWait(
      `赛${chara_talk.sex_code - 1 ? '马娘' : '马郎'}A：「……${
        chara_talk.name
      }同学，果然……会在意的吧。」`,
    );
    await era.printAndWait(
      `赛${
        chara_talk.sex_code - 1 ? '马娘' : '马郎'
      }B：「呀~…那是肯定的吧。换做是我的话也会觉得讨厌的。」`,
    );
    era.drawLine({ content: '教学楼旁的阴影下。' });
    await chara_talk.say_and_wait(
      `……唔……为什么，${chara_talk.name}一直，都是这样？`,
    );
    await chara_talk.say_and_wait(`总是给周围人带来不幸，给别人带来麻烦！`);
    await me.say_and_wait(`……${chara_talk.name}。`);
    await chara_talk.say_and_wait(
      `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人……！`,
    );
    await chara_talk.say_and_wait(
      `……不行啊！靠近${chara_talk.name}的话，会变得不幸的。`,
    );
    await chara_talk.say_and_wait(
      `波旁同学，一直以来无论再怎么艰苦的训练都……没有受过伤啊？`,
    );
    await chara_talk.say_and_wait(
      `但是都是因为${chara_talk.name}…因为${chara_talk.name}成了${chara_talk.sex}的对手……`,
    );
    await chara_talk.say_and_wait(`3年里最重要的时期就这么被毁了……`);
    await me.say_and_wait(`这是从本人那里听说的吗？`);
    await chara_talk.say_and_wait(
      `…就算没有听见，${chara_talk.name}也知道的。`,
    );
    await chara_talk.say_and_wait(`因为……${chara_talk.name}是……`);
    await me.say_and_wait(`原来没有听说啊。`);
    await chara_talk.say_and_wait(
      `欸！？哥……${me.sex_code - 1 ? '姐姐' : '哥哥'}大人？`,
    );
    await era.printAndWait(`你带着${chara_talk.name}去医务室找到了美浦波旁。`);
    await chara26_talk.say_and_wait(`……。`);
    await chara_talk.say_and_wait(`……。`);
    await me.say_and_wait(`这么突然，真是抱歉。`);
    await chara26_talk.say_and_wait(`不会，这一天里他人探望的行为已经习惯了。`);
    await chara26_talk.say_and_wait(`所以来这里是干什么呢？`);
    await chara_talk.say_and_wait(`！……对、对不起。对不起……对不起……！`);
    await chara_talk.say_and_wait(
      `都是${chara_talk.name}的关系…让你受伤了，浪费掉了这么重要的时期。`,
    );
    await chara26_talk.say_and_wait(`不好意思。`);
    await chara26_talk.say_and_wait(
      `为什么要道歉？无法推测出我的受伤和${chara_talk.name}之间有什么因果关系。`,
    );
    await chara_talk.say_and_wait(
      `但是……在${chara_talk.name}成为你的对手之前都没有受伤过的啊！`,
    );
    await chara26_talk.say_and_wait(
      `理解不能。受伤的发生率是一定的，因此认为那个理论没有物理根据。`,
    );
    await chara26_talk.say_and_wait(
      `倒不如说，如果你主张你会招来不幸，那就应该由我来验证。`,
    );
    await chara_talk.say_and_wait(`让、波旁同学来？`);
    await chara26_talk.say_and_wait(`嗯，我把你当成了竞争对手。`);
    await chara26_talk.say_and_wait(
      `那是因为我很期待，在【菊花赏】中感受到了成长的可能性。`,
    );
    await chara26_talk.say_and_wait(
      `如果有了你这个竞争对手，我可以预见更大的成长。`,
    );
    await chara26_talk.say_and_wait(
      `并且和你一起的话，存在达成史上最高的比赛—「奇迹」的可能性。`,
    );
    await chara26_talk.say_and_wait(`我的不幸和${chara_talk.name}无关。`);
    await chara_talk.say_and_wait(`……`);
    await chara26_talk.say_and_wait(
      `${chara_talk.name}是让我不幸的存在吗？还是说是呼唤奇迹的存在？`,
    );
    await chara_talk.say_and_wait(`……那个……`);
    await era.printAndWait(
      `———很长的一段时间，${chara_talk.name}都在默默地接受着美浦波旁的视线。`,
    );
    get_attr_and_print_in_event(30, [0, 0, 0, 5, 0], 0);
    await era.waitAnyKey();
  }
  return true;
};

handlers[event_hooks.train_fail] =
  /**
   * @param {HookArg} hook
   * @param {{train:number,stamina_ratio:number}} extra_flag
   */
  async (hook, extra_flag) => {
    extra_flag['args'] = extra_flag.fumble
      ? fumble_result.fumble
      : fumble_result.fail;
    if (extra_flag.fumble) {
      await era.printAndWait('严禁逞强！', {
        color: chara_talk.color,
        fontSize: '24px',
      });
      era.println();
      await chara_talk.say_and_wait(`唔唔……`);
      era.printButton('「要好好休息！」', 1);
      era.printButton('「用毅力克服！」', 2);
      const ret = await era.input();
      if (ret === 1) {
      } else {
        if (Math.random() < 0.2 * extra_flag.stamina_ratio) {
        } else {
        }
      }
    } else {
      await print_event_name('保重身体！', chara_talk);
      await chara_talk.say_and_wait(`唔……？`);
    }
  };

handlers[event_hooks.out_church] = async (_, __, event_object) => {
  if (era.get('flag:当前互动角色') !== 30) {
    add_event(event_hooks.out_church, event_object);
    return;
  }
  const me = get_chara_talk(0),
    edu_weeks = era.get('flag:当前回合数') - era.get('cflag:30:育成回合计时');
  if (edu_weeks === 95 + 1) {
    await print_event_name('新年参拜', chara_talk);
    await era.printAndWait(
      `新年的第一天，你收到${chara_talk.name}的邀请，一起前往新年参拜。`,
    );
    await chara_talk.say_and_wait(
      `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人，${
        chara_talk.name
      }，想好了一个愿望哦。`,
    );
    await chara_talk.say_and_wait(
      `所以想让${me.sex_code - 1 ? '姐姐' : '哥哥'}大人听一听，可以吗？`,
    );
    await me.say_and_wait(`不去和神明许愿，而是告诉我吗？`);
    await chara_talk.say_and_wait(
      `嗯！这个愿望，不和${me.sex_code - 1 ? '姐姐' : '哥哥'}大人说是不行的。`,
    );
    await chara_talk.say_and_wait(
      `${chara_talk.name}，想参加下次的春季天皇赏。`,
    );
    await me.say_and_wait(`为什么？`);
    await chara_talk.say_and_wait(`…因为，想要变得更强。`);
    await chara_talk.say_and_wait(`不继续向前迈进的话是不行的。`);
    await chara_talk.say_and_wait(`已经说过……不能再害怕了。`);
    await me.say_and_wait(`你做好了觉悟呢。`);
    await chara_talk.say_and_wait(
      `${chara_talk.name}发现了，光只有想是不行的。`,
    );
    await chara_talk.say_and_wait(
      `为了不让…眼前的人感到悲伤，得要先付出行动…才可以。`,
    );
    await era.printAndWait(`${chara_talk.name}从新年开始，就制定了新的目标，`);
    await era.printAndWait(
      `为了不辜负${chara_talk.sex}的这股干劲，${CharaTalk.me.actual_name}和${chara_talk.name}把新年的抱负写上了绘马。`,
    );
    await chara_talk.say_and_wait(`神明大人，${chara_talk.name}会加油的。`);
    await chara_talk.say_and_wait(
      `能和${me.sex_code - 1 ? '姐姐' : '哥哥'}大人一起来参拜真是太好了！`,
    );
    await chara_talk.say_and_wait(
      `呼呼，接下来轮到${me.sex_code - 1 ? '姐姐' : '哥哥'}大人了呢。`,
    );
    await chara_talk.say_and_wait(
      `${chara_talk.name}也会一起祈求的，希望神明能帮忙实现愿望…`,
    );
    await era.printAndWait(`你的愿望是……`);
    era.printButton(`希望${chara_talk.name}永远健健康康的。`, 1);
    era.printButton(`希望能一直支持${chara_talk.name}跑下去。`, 2);
    era.printButton(`我想要力量…！`, 3);
    const ret = await era.input();
    if (ret === 1) {
      await chara_talk.say_and_wait(`！`);
      await chara_talk.say_and_wait(
        `嘿嘿，好的。${chara_talk.name}会注意，不让${
          me.sex_code - 1 ? '姐姐' : '哥哥'
        }大人担心。`,
      );
      await era.printAndWait(
        `在新年参拜的摊贩补充了营养后，${CharaTalk.me.actual_name}和${chara_talk.name}便开始进行训练。`,
      );
      get_attr_and_print_in_event(
        30,
        [0, 0, 0, 0, 0],
        0,
        JSON.parse('{"体力":300}'),
      );
      sys_like_chara(30, 0, 5);
      await era.waitAnyKey();
    } else if (ret === 2) {
      await chara_talk.say_and_wait(
        `呵呵，说这么温柔的话，${chara_talk.name}会很伤脑浆的。`,
      );
      await chara_talk.say_and_wait(
        `真的是，没有时间哭泣了。${chara_talk.name}得好好加油才行…`,
      );
      await era.printAndWait(
        `你和${chara_talk.name}静静地对视了一阵子，便开始着手训练。`,
      );
      get_attr_and_print_in_event(30, [5, 5, 5, 5, 5], 0);
      sys_love_uma(30, 5);
      await era.waitAnyKey();
    } else {
      await chara_talk.say_and_wait(`力量……这个、那个啊…`);
      await chara_talk.say_and_wait(`${chara_talk.name}也可以来帮忙吗？`);
      await chara_talk.say_and_wait(`那个，肌肉锻炼啦、并跑啦……`);
      await me.say_and_wait(`并不是那个意思来着。`);
      await chara_talk.say_and_wait(`呜欸？`);
      await chara_talk.say_and_wait(
        `但是，如果真的有什么${chara_talk.name}可以帮忙的事，请告诉我。`,
      );
      await chara_talk.say_and_wait(
        `${chara_talk.name}，为了${
          me.sex_code - 1 ? '姐姐' : '哥哥'
        }大人的话，什么事情都可以……会来帮忙的。`,
      );
      await era.printAndWait(
        `……你感受到了${chara_talk.name}体贴的心意，回到了学校。`,
      );
      get_attr_and_print_in_event(30, [0, 0, 0, 0, 0], 30);
      await era.waitAnyKey();
    }
  }
  return true;
};
handlers[event_hooks.out_shopping] = async (_, __, event_object) => {
  if (era.get('flag:当前互动角色') !== 30) {
    add_event(event_hooks.out_shopping, event_object);
    return;
  }
  const chara301_talk = get_chara_talk(301),
    me = get_chara_talk(0),
    edu_weeks = era.get('flag:当前回合数') - era.get('cflag:30:育成回合计时');
  if (edu_weeks === 95 + 21) {
    await print_event_name('万有一失', chara_talk);
    await era.printAndWait(`把参加宝塚纪念定为目标后……`);
    await era.printAndWait(
      `路人B：「我把我的粉丝投票，投给了你哦！绝对要拿第一啊！」`,
    );
    await chara_talk.say_and_wait(`哇！？谢……谢谢你的支持！`);
    await era.printAndWait(
      `商店街的老板：「啊，你难不成是……${chara_talk.name}吗？」`,
    );
    await chara_talk.say_and_wait(`是！那个、是的没错……`);
    await era.printAndWait(`商店街的老板：「嘛！一定要在我家吃炸肉饼！」`);
    await era.printAndWait(`商店街的老板：「我家的孩子是你的粉丝呢。」`);
    await chara_talk.say_and_wait(`欸！？这样可以吗？`);
    era.drawLine();
    await chara_talk.say_and_wait(
      `欸嘿嘿……令人开心的事情竟然有这么多，真的好吗？`,
    );
    await me.say_and_wait(`要连带着这份一起努力呢。`);
    await chara_talk.say_and_wait(`说的是啊…`);
    await chara301_talk.say_and_wait(`啊，两位都找到了！`);
    await me.say_and_wait(`是有什么事吗？`);
    await chara301_talk.say_and_wait(`其实是这样的！`);
    await chara301_talk.say_and_wait(`刚才阪神赛马场传来了消息……！！`);
    await chara301_talk.say_and_wait(
      `在【粉丝人气投票】中，${chara_talk.name}可是遥遥领先的第一哦！`,
    );
    await chara301_talk.say_and_wait(`希望能来参加开幕仪式！`);
    await chara_talk.say_and_wait(`欸欸欸欸欸？`);
    await chara301_talk.say_and_wait(`所以，要在明天进行彩排。`);
    await chara_talk.say_and_wait(
      `……哇。${chara_talk.name}是……人气第一？开幕、仪式？`,
    );
    await chara301_talk.say_and_wait(`啊哈哈…抱歉。我好像也有点太兴奋了。`);
    await chara301_talk.say_and_wait(
      `详细内容已经整理成了文件，请稍后确认，讨论一下吧。`,
    );
    await chara301_talk.say_and_wait(`那，我告辞了。`);
    await era.printAndWait(`骏川手纲离开后…`);
    await chara_talk.say_and_wait(`……好棒，${chara_talk.name}是，大家的……`);
    await me.say_and_wait(`去参加彩排吧。`);
    await chara_talk.say_and_wait(`嗯！`);
    await era.printAndWait(
      `第二天，你和${chara_talk.name}一起，去到了阪神赛马场。`,
    );
    await era.printAndWait(
      `工作人员A：「${chara_talk.name}选手！接下来是献上花束时站的位置——」`,
    );
    await chara_talk.say_and_wait(`是、是的！`);
    await era.printAndWait(
      `工作人员B：「啊，那个结束之后，我们也想拜托你一件事——」`,
    );
    await chara_talk.say_and_wait(`呜哇……我知道了~！`);
    await era.printAndWait(`各种各样的彩排告一段落后…`);
    await chara_talk.say_and_wait(`呼啊……`);
    await me.say_and_wait(`稍微休息一下吧。`);
    await chara_talk.say_and_wait(`欸嘿嘿，没问题的，因为……`);
    await era.printAndWait(
      `工作人员C：「抱歉，${chara_talk.name}选手！想拜托你再调整一次麦克风…」`,
    );
    await chara_talk.say_and_wait(`好的！来、来了！`);
    await chara_talk.say_and_wait(
      `…我想要坚持到最后。想要让大家都能露出笑容。`,
    );
    era.drawLine({ content: '登场舞台上' });
    await chara_talk.say_and_wait(
      `那么，大家……还请大家多多支持${chara_talk.name}！！`,
    );
    await era.printAndWait(`工作人员A：「当然、没问题！！」`);
    await era.printAndWait(`那今天的彩排就到此为止了！`);
    await chara_talk.say_and_wait(`呼……终于，结束了……呢。`);
    await me.say_and_wait(`没事吧？`);
    await chara_talk.say_and_wait(`嗯，没事的哦。`);
    await chara_talk.say_and_wait(`虽然第一次还是有很多不熟练。`);
    await chara_talk.say_and_wait(`真正开幕的时候，大家都聚到这里的时候。`);
    await chara_talk.say_and_wait(`我想那时候我就可以做到了。`);
    await chara_talk.say_and_wait(`一点也不觉得累哦。`);
    await chara_talk.say_and_wait(`更多、更多……想要更加努力。`);
    await era.printAndWait(
      `工作人员B：「啊，${chara_talk.name}选手！好像落下东西了哦——」`,
    );
    await chara_talk.say_and_wait(`欸！？抱歉！现在就去拿！`);
    await chara_talk.say_and_wait(`呀啊！？`);
    await era.printAndWait(`吧啦……吧啦吧啦……哐——！`);
    await era.printAndWait(
      `工作人员C：「怎么回事！？门倒下来了——${chara_talk.name}，危——」`,
    );
    await era.printAndWait(`千钧一发之际，你只来得及抱住${chara_talk.name}。`);
    await me.say_and_wait(`没事吧？`);
    await era.printAndWait(`咚！`, { fontSize: '40px' });
    await chara_talk.say_and_wait(
      `哥、${me.sex_code - 1 ? '姐姐' : '哥哥'}大人！？`,
    );
    era.drawLine();
    await chara_talk.say_and_wait(
      `呼……呜……${me.sex_code - 1 ? '姐姐' : '哥哥'}大人……`,
    );
    await me.say_and_wait(`这里。`);
    await chara_talk.say_and_wait(
      `啊、${me.sex_code - 1 ? '姐姐' : '哥哥'}大人！${
        me.sex_code - 1 ? '姐姐' : '哥哥'
      }大人！！没事吗！？有哪里痛吗？`,
    );
    await era.printAndWait(
      `……看样子你是在保护${chara_talk.name}的时候，撞到了头。`,
    );
    await me.say_and_wait(`好像没事了。`);
    await chara_talk.say_and_wait(`真、真的吗？但……但是还是去医院——`);
    await era.printAndWait(`工作人员A：「啊，太好了，已经醒过来了！」`);
    await era.printAndWait(`工作人员A：「很快救护车也会来的。」`);
    await me.say_and_wait(`谢谢。`);
    await era.printAndWait(
      `工作人员A：「哪里哪里！我们也很抱歉。突然间就开始变得糟糕起来…」`,
    );
    await era.printAndWait(`工作人员A：「真是非常抱歉，让我们送你去医院吧。」`);
    era.drawLine({ content: '医院检查后' });
    await era.printAndWait(
      `工作人员A：「……是吗。经过检查后，没有发现异常吗——」`,
    );
    await me.say_and_wait(`让你们担心了，真是抱歉。`);
    await era.printAndWait(`工作人员A：「哪里！这是我们的失误……」`);
    await era.printAndWait(
      `工作人员A：「而且……我们还有必须向你们道歉的事啊。」`,
    );
    await chara_talk.say_and_wait(`但……但是大家，都已经足够……`);
    await era.printAndWait(`工作人员A：「——这次的仪式，还有宝塚纪念。」`);
    await era.printAndWait(`工作人员A：「有消息说阪神的举办会被推迟。」`);
    await chara_talk.say_and_wait(`……！`);
    await me.say_and_wait(`这是怎么一回事？`);
    await era.printAndWait(
      `工作人员A：「其实……这次在赛马场里的事故，原因现在还不清楚。」`,
    );
    await era.printAndWait(
      `工作人员A：「而且还出现了伤者。这样的话就有必要对赛场进行全面的检查。」`,
    );
    await era.printAndWait(
      `工作人员A：「包括检查和维修在内，估计要花上3周以上的时间。」`,
    );
    await chara_talk.say_and_wait(`那样的话，就赶不上【宝塚纪念】了……`);
    await era.printAndWait(
      `工作人员A：「嗯。为了不发生这样的事情，我们每天都在努力……」`,
    );
    await era.printAndWait(`工作人员A：「目前为止都还没有过的事例……」`);
    await era.printAndWait(
      `工作人员A：「对二位和期待着宝塚纪念的大家，实在是非常抱歉！」`,
    );
    await chara_talk.say_and_wait(
      `以前都还有没有，${chara_talk.name}来了，突然…`,
    );
    await chara_talk.say_and_wait(`……`);
    await era.printAndWait(`难道是，${chara_talk.name}的…缘故？`, {
      color: chara_talk.color,
      fontSize: '12px',
    });
    await era.printAndWait(`那个微小的声音，不知为何却回响得特别巨大——`);
    get_attr_and_print_in_event(30, [0, 0, 0, 5, 0], 0);
    await era.waitAnyKey();
  }
  return true;
};

handlers[event_hooks.train_success] = async (hook, extra_flag) => {
  era.print(
    `${chara_talk.name} 的 ${attr_names[extra_flag.train]} 训练顺利成功了……`,
  );
  if (Math.random() < 0.2 * extra_flag.stamina_ratio) {
    const me = get_chara_talk(0);
    await print_event_name('额外自主训练', chara_talk);
    await era.printAndWait(`和${chara_talk.name}一起完成训练之后——`);
    await chara_talk.say_and_wait(
      `咦？${me.sex_code - 1 ? '姐姐' : '哥哥'}大人还不回去吗？`,
    );
    era.printButton(`得为明天的训练做准备。`, 1);
    era.printButton(`看${chara_talk.name}看入迷了。`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await chara_talk.say_and_wait(
        `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人…为了${
          chara_talk.name
        }，还要继续工作吗？`,
      );
    } else {
      await chara_talk.say_and_wait(
        `呜啊啊啊，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人！`,
      );
    }
    await me.say_and_wait(`${chara_talk.name}先回去休息吧。`);
    await chara_talk.say_and_wait('……嗯，我知道了。');
    await chara_talk.say_and_wait(
      `再见，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`,
    );
    era.drawLine();
    await era.printAndWait(`当你完成了明天训练的准备工作，踏上归途的时候。`);
    await era.printAndWait(
      `在训练场上，你看到了还在奔跑的${chara_talk.name}的身影。`,
    );
    await chara_talk.say_and_wait('哈啊……哈啊……还、还能……');
    await chara_talk.say_and_wait(`${chara_talk.name}还可以继续，不努力的话……`);
    await me.say_and_wait(`自主训练？`);
    await chara_talk.say_and_wait(
      `啊…${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`,
    );
    await chara_talk.say_and_wait(`被你看见了呢……`);
    await chara_talk.say_and_wait(
      `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人为了${
        chara_talk.name
      }而在努力。这样的话，${chara_talk.name}也得加把劲才行！`,
    );
    era.printButton(`那就陪你再稍微训练一下吧。`, 1);
    era.printButton(`有这份心意就很高兴了。`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await chara_talk.say_and_wait(
        `嗯，谢谢你，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人！`,
      );
    } else {
      await chara_talk.say_and_wait(`有这份心意就很高兴了。`);
      await chara_talk.say_and_wait(
        `唔……但是，${chara_talk.name}也想帮上${
          me.sex_code - 1 ? '姐姐' : '哥哥'
        }大人的忙。`,
      );
    }
    await era.printAndWait(
      `之后，你在一旁看着${chara_talk.name}进行额外的训练。`,
    );
    era.drawLine({ content: '训练结束后' });
    era.printButton(`一个人回去真寂寞呢——`, 1);
    await era.input();
    await chara_talk.say_and_wait(`欸？`);
    await chara_talk.say_and_wait(`这是说……要和${chara_talk.name}一起吗？`);
    await chara_talk.say_and_wait(
      `米、${chara_talk.name}这就去换衣服！请稍微，等一下。`,
    );
    await era.printAndWait(
      `之后，你和换好了衣服的${chara_talk.name}一起踏上了回家的路。`,
    );
  }
};

handlers[event_hooks.race_start] = async () => {
  const me = get_chara_talk(0);
  await print_event_name('武者的颤抖', chara_talk);
  await chara_talk.say_and_wait(`唔唔…唔唔……`);
  await me.say_and_wait(`状况不好吗？`);
  await chara_talk.say_and_wait(`咦？不、不是的。只是，有点紧张而已…`);
  await chara_talk.say_and_wait(`不过，已经不要紧了。`);
  await chara_talk.say_and_wait(
    `像这样和${me.sex_code - 1 ? '姐姐' : '哥哥'}大人说话，就觉得很安心。`,
  );
  await chara_talk.say_and_wait(
    `${chara_talk.name}会加油的，要好好看着${chara_talk.name}哦，${
      me.sex_code - 1 ? '姐姐' : '哥哥'
    }大人！`,
  );
};
//TODO 群童佬这个米浴参加比赛随机口上作为事件就一句话太短，姑且先放着了
//await chara_talk.say_and_wait(`再来就只要尽力奔跑，没错吧？哥哥大人！`);
//await chara_talk.say_and_wait(`米浴努力跑完全程的！要加油——喔！`);
//await chara_talk.say_and_wait(
//  `都还没开始跑，米浴就预感会是一场好比赛。米浴今天，特别地期待！`,
//);
//await chara_talk.say_and_wait(`呼，好……！还没到开始时间吗？`);
//await chara_talk.say_and_wait(
//  `开、开始发抖了……那个，哥哥大人。米浴可以，稍微握一下你的手吗？`,
//);
//await chara_talk.say_and_wait(`因为想带给大家幸福……米浴会全力奔跑的！`);

handlers[event_hooks.school_atrium] = async (
  hook,
  extra_flag,
  event_object,
) => {
  if (era.get('flag:当前互动角色') !== 30) {
    add_event(event_hooks.school_atrium, event_object);
    return;
  }
  const me = get_chara_talk(0),
    chara47_talk = get_chara_talk(47),
    chara_talk = get_chara_talk(30),
    event_marks = new riceEventMarks();
  if (event_marks.famous_educate === 1) {
    event_marks.famous_educate++;
  }
  await print_event_name(`名指导`, chara_talk);
  await chara_talk.say_and_wait(`哼……哼、哼……♪`);
  await chara47_talk.say_and_wait(`${chara_talk.name}好像很高兴的样子呢。`);
  await chara47_talk.say_and_wait(`有发生什么好事吗？`);
  await chara_talk.say_and_wait(
    `嗯……和你说哦，${chara_talk.name}在课堂上跑赛道。`,
  );
  await chara_talk.say_and_wait(`跑出比之前更好的成绩了！`);
  await chara_talk.say_and_wait(`因为昨天学到了新的跑法，所以，这也是——`);
  await chara47_talk.say_and_wait(
    `多亏了…${me.sex_code - 1 ? '姐姐' : '哥哥'}吗？`,
  );
  await chara_talk.say_and_wait(`咦…咦咦，为什么会知道！？`);
  await chara47_talk.say_and_wait(`呵呵，抱歉。`);
  await chara47_talk.say_and_wait(`因为我在半夜看书的时候，偶尔…`);
  await chara47_talk.say_and_wait(
    `会听到你一脸幸福地讲梦话，说：‘谢谢你，${
      me.sex_code - 1 ? '姐姐' : '哥哥'
    }大人…`,
  );
  await chara_talk.say_and_wait(`呜、呜啊、哇啊啊，好丢脸！`);
  await chara47_talk.say_and_wait(`对不起，我没有取笑你的意思。`);
  await chara47_talk.say_and_wait(
    `我只是觉得能让你如此感激，一定是个很棒的训练员。`,
  );
  await chara_talk.say_and_wait(
    `唔、嗯！${me.sex_code - 1 ? '姐姐' : '哥哥'}大人，是最棒的训练员哦！`,
  );
  await era.printAndWait(
    `之后，${chara_talk.name}不断说着${CharaTalk.me.actual_name}有多好，讲了好一阵子。`,
  );

  return true;
};

handlers[event_hooks.office_study] = async (hook, extra_flag, event_object) => {
  if (era.get('flag:当前互动角色') !== 30) {
    add_event(event_hooks.office_study, event_object);
    return;
  }
  const me = get_chara_talk(0),
    chara_talk = get_chara_talk(30),
    event_marks = new riceEventMarks();
  if (event_marks.dance_study === 1) {
    event_marks.dance_study++;
  }
  await print_event_name(`舞蹈课`, chara_talk);
  await chara_talk.say_and_wait(`一、二，一、二，这里要将脚——`);
  await chara_talk.say_and_wait(`呀啊！`);
  await chara_talk.say_and_wait(`啊呜呜，又失败了…得再多练习才行…`);
  await me.say_and_wait(`你很努力呢。`);
  await chara_talk.say_and_wait(
    `呜啊！？${me.sex_code - 1 ? '姐姐' : '哥哥'}大人！？被、被你看到了…`,
  );
  await chara_talk.say_and_wait(
    `对不起，那个…${chara_talk.name}本来想趁没人在的时候练习。`,
  );
  await me.say_and_wait(`为什么一个人练习？`);
  await chara_talk.say_and_wait(`因为，之前全班一起上课的时候，舞蹈室……停电了`);
  await chara_talk.say_and_wait(
    `大家的课就此中断。大概，是因为${chara_talk.name}害的…`,
  );
  await chara_talk.say_and_wait(
    `${chara_talk.name}不想再给大家添麻烦，所以正在自己一个人练习。`,
  );
  await chara_talk.say_and_wait(
    `${
      me.sex_code - 1 ? '姐姐' : '哥哥'
    }大人也是，现在待在这里，说不定会给你添什么麻烦…`,
  );
  era.printButton(`我在会让你觉得困扰吗？`, 1);
  era.printButton(`尽管添麻烦吧！`, 2);
  const ret = await era.input();
  if (ret === 1) {
    await me.say_and_wait(`我在会让你觉得困扰吗？`);
    await chara_talk.say_and_wait(
      `怎、怎么会！${
        me.sex_code - 1 ? '姐姐' : '哥哥'
      }大人不会让我觉得困扰的！`,
    );
    await me.say_and_wait(`那就让我帮你的忙吧。`);
    await chara_talk.say_and_wait(`${me.sex_code - 1 ? '姐姐' : '哥哥'}大人…`);
    await chara_talk.say_and_wait(`谢谢。`);
    await chara_talk.say_and_wait(
      `${chara_talk.name}如果有跳不好的地方，希望${
        me.sex_code - 1 ? '姐姐' : '哥哥'
      }大人可以说出来。`,
    );
    await me.say_and_wait(`一起加油吧。`);
    await chara_talk.say_and_wait(`嗯！`);
    await era.printAndWait(
      `之后，你和${chara_talk.name}一起，彻底将${chara_talk.sex}不拿手的舞步练习了一番。`,
    );
  } else {
    await chara_talk.say_and_wait(
      `呜欸！？怎么能这样，我不想造成${
        me.sex_code - 1 ? '姐姐' : '哥哥'
      }大人的困扰！`,
    );
    await me.say_and_wait(`${chara_talk.name}一个人烦恼才会让我觉得困扰。`);
    await chara_talk.say_and_wait(`${me.sex_code - 1 ? '姐姐' : '哥哥'}…`);
    await chara_talk.say_and_wait(`可以陪我一起，讨论练习中的问题吗？`);
    await me.say_and_wait(`当然可以！`);
    await chara_talk.say_and_wait(`谢谢你！其实，有一个很困难的舞步…`);
    await era.printAndWait(
      `之后直到很晚，你都在陪${chara_talk.name}讨论舞蹈练习的问题。`,
    );
  }
};

handlers[event_hooks.edu_end] = async (hook, extra_flag, event_object) => {
  if (era.get('flag:当前互动角色') !== 30) {
    add_event(event_hooks.out_start, event_object);
    return;
  }
  const me = get_chara_talk(0),
    chara_talk = get_chara_talk(30);
  await print_event_name('结局·从前从前，在某个地方……', chara_talk);
  await era.printAndWait(
    `「最初的三年」对赛${
      chara_talk.sex_code - 1 ? '马娘' : '马郎'
    }来说非常重要，${chara_talk.name}顺利地在这段时间拿下了极为亮眼的成绩。`,
  );
  await era.printAndWait(`${chara_talk.sex}也因此受到了世人的肯定。`);
  await chara_talk.say_and_wait(`颁奖仪式…？`);
  await me.say_and_wait(`去见大家吧。`);
  await chara_talk.say_and_wait(
    `…嗯。${chara_talk.name}也想，亲口对大家说声谢谢。`,
  );
  await era.printAndWait(
    `——于是隔天，${CharaTalk.me.actual_name}和${chara_talk.name}一起来到了阪神赛场。`,
  );
  await chara_talk.say_and_wait(`好多人…明明今天没有比赛的。`);
  await era.printAndWait(
    `观众A：「哇啊！${chara_talk.name}来了！呀啊啊~好可爱~！」`,
  );
  await era.printAndWait(
    `观众B：「辛苦了~${chara_talk.name}！今天拜托你咯~！」`,
  );
  await chara_talk.say_and_wait(`咦……咦？`);
  await era.printAndWait(`工作人员A：「两位，好久不见。」`);
  await chara_talk.say_and_wait(`好久不见。请问…这到底是？`);
  await era.printAndWait(`工作人员A：「哦，其实原本我们打算只有工作人员。」`);
  await era.printAndWait(`工作人员A：「简单办个庆祝会，结果……」`);
  await era.printAndWait(`观众C：「${chara_talk.name}~！看这边~！」`);
  await era.printAndWait(
    `工作人员A：「如你们所看到的，很多观众都表示想要见到${chara_talk.name}。」`,
  );
  era.printButton(`因为大家都最喜欢${chara_talk.name}了。`, 1);
  await era.input();
  await chara_talk.say_and_wait(`呜欸欸？最、最喜欢…`);
  await era.printAndWait(`工作人员A：「啊哈哈，说的没错。」`);
  await era.printAndWait(
    `工作人员A：「于是我们改变了原定计划，拜托各界的相关人士协助…」`,
  );
  await era.printAndWait(
    `工作人员A：「颁奖仪式就这样，变成一般观众也可以参加的典礼了。」`,
  );
  await chara_talk.say_and_wait(`所以这些人，都是为了${chara_talk.name}才…`);
  await era.printAndWait(`工作人员A：「嗯，是的。」`);
  await era.printAndWait(`工作人员A：「可以拜托你完成那天无法完成的事吗？」`);
  await era.printAndWait(`工作人员A：「在等待着你的所有人面前。」`);
  era.drawLine();
  await chara_talk.say_and_wait(`那个，大家好。`);
  await chara_talk.say_and_wait(
    `真的很感谢今天有这么多人，愿意为了${chara_talk.name}来这里。`,
  );
  await chara_talk.say_and_wait(
    `${chara_talk.name}从来没看到过这么幸福的景色。`,
  );
  await chara_talk.say_and_wait(`我现在，觉得真的很幸福。`);
  await chara_talk.say_and_wait(`${chara_talk.name}不会再哭了。`);
  await chara_talk.say_and_wait(
    `因为${chara_talk.name}今天想看着大家的眼睛说话。`,
  );
  await chara_talk.say_and_wait(
    `如果只是一个人吗，${chara_talk.name}现在应该也不会有什么进步。`,
  );
  await chara_talk.say_and_wait(`只能蜷缩在自己的黑暗世界里。`);
  await chara_talk.say_and_wait(
    `但是，${chara_talk.name}现在已经不是一个人了。`,
  );
  await chara_talk.say_and_wait(
    `${chara_talk.name}现在能站在这里，也是因为他的关系`,
  );
  await chara_talk.say_and_wait(
    `给了${chara_talk.name}光亮，给了${chara_talk.name}容身之处…`,
  );
  await chara_talk.say_and_wait(`大家，真的非常感谢你们！`);
  await chara_talk.say_and_wait(
    `所以还请大家，继续支持${chara_talk.name}……！！`,
  );
  await era.printAndWait(`哇啊啊啊啊啊啊啊——`);
  era.drawLine({ content: '回程的巴士上' });
  await chara_talk.say_and_wait(
    `谢谢你，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。都是多亏有你。`,
  );
  await me.say_and_wait(`你真的很努力了，${chara_talk.name}。`);
  await era.printAndWait(
    `于是，一直都觉得自己很没用的女孩，成为了某人的蓝蔷薇。`,
  );
  await era.printAndWait(`虽然和绘本不同，虽然偶有不幸的发生…`);
  await era.printAndWait(
    `但${chara_talk.sex}，会带着带给大家幸福的希望，让自己美丽地盛开。`,
  );
  await era.printAndWait(
    `${chara_talk.name}，在全世界最喜欢的人身边，如此祈祷着。`,
  );
};

handlers[event_hooks.back_school] = async (hook, extra_flag, event_object) => {
  if (era.get('flag:当前互动角色') !== 30) {
    add_event(event_hooks.back_school, event_object);
    return;
  }
  const me = get_chara_talk(0),
    chara_talk = get_chara_talk(30),
    event_marks = new riceEventMarks();
  if (event_marks.fans_letter === 1) {
    event_marks.fans_letter++;
    await print_event_name(`粉丝信`, chara_talk);
    await era.printAndWait(`某天，${chara_talk.name}收到了粉丝信。`);
    await chara_talk.say_and_wait(`给${chara_talk.name}的，粉丝信…`);
    await me.say_and_wait(`太好了呢。`);
    await chara_talk.say_and_wait(`嗯、嗯！`);
    await chara_talk.say_and_wait(`不过……`);
    await era.printAndWait(`${chara_talk.name}看似开心的表情，变得有些不安。`);
    await me.say_and_wait(`怎么了？`);
    await chara_talk.say_and_wait(`${chara_talk.name}偶尔会忍不住想。`);
    await chara_talk.say_and_wait(
      `支持${chara_talk.name}的人，会不会因此变得不幸。`,
    );
    await chara_talk.say_and_wait(
      `${chara_talk.name}不想要这样，明明不愿意这么想，却还是…`,
    );
    await chara_talk.say_and_wait(
      `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人，${
        chara_talk.name
      }该怎么做才好？`,
    );
    await me.say_and_wait(`看看粉丝信的内容吧。`);
    await chara_talk.say_and_wait(`内容，嗯…`);
    await era.printAndWait(
      `「${chara_talk.name}在比赛中努力的样子，带给了我许多勇气。」`,
    );
    await era.printAndWait(
      `「只要看着${chara_talk.name}的笑容，每次都会感觉到内心变得温暖。」`,
    );
    await era.printAndWait(
      `「${chara_talk.name}努力的样子…${chara_talk.name}的笑容…」`,
    );
    await chara_talk.say_and_wait(`这样啊，原来有人，会因此感到高兴呢。`);
    await chara_talk.say_and_wait(
      `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人，我会更加、更加努力的！`,
    );
    await chara_talk.say_and_wait(
      `努力让支持${chara_talk.name}的人，都能感到开心。`,
    );
    await era.printAndWait(
      `「${chara_talk.name}的眼中彷佛燃起了充满干劲的火焰！」`,
    );
    sys_change_motivation(30, 1) && (await era.waitAnyKey());
  }
};

/**
 * 米浴的育成事件
 *
 * @author 梦露
 *
 * @param {HookArg} hook
 * @param {*} extra_flag
 * @param {EventObject} event_object
 * @returns {Promise<*>}
 */
module.exports = async (hook, extra_flag, event_object) => {
  if (!handlers[hook.hook]) {
    throw new Error('unsupported stage!');
  }
  return await handlers[hook.hook](hook, extra_flag, event_object);
};
