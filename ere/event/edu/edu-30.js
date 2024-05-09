const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
  sys_love_uma,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

const RiceEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-30');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { race_enum } = require('#/data/race/race-const');
const { attr_enum, attr_names, fumble_result } = require('#/data/train-const');

const rice = get_chara_talk(30);

/** @type {Record<string,function(HookArg,*,EventObject):Promise<boolean|void>>} */
const handlers = {};

handlers[event_hooks.week_start] = async () => {
  const me = get_chara_talk(0),
    chara13_talk = get_chara_talk(13), // 目白麦昆
    chara26_talk = get_chara_talk(26), // 美浦波旁
    chara47_talk = get_chara_talk(47), // 荒漠英雄
    chara52_talk = get_chara_talk(52), // 春乌拉拉
    chara41_talk = get_chara_talk(41), // 樱花进王
    chara302_talk = get_chara_talk(302), // 北方风味
    chara301_talk = get_chara_talk(301), // 丰收时刻
    edu_weeks = era.get('cflag:30:育成回合计时');
  if (edu_weeks === 22) {
    await print_event_name('湖泊中绽放的花朵', rice);
    await rice.say_and_wait(`哇……！观众…好多……！而且大家的眼神都闪闪发光。`);
    await era.printAndWait(
      `这天，${me.actual_name}和 ${rice.name}一起来到天皇赏春的比赛场地来观摩学习，这是因为……`,
    );
    era.drawLine({ content: `1周前，对 ${rice.name}进行训练的中途。` });
    await era.printAndWait(
      `托着脸颊正用一种近乎让人感到危险的眼神，欣赏着这一切的——。`,
    );
    await era.printAndWait(
      `元气赛${rice.get_uma_sex_title()}A：「呵啊…哈啊…」`,
      {
        color: chara41_talk.color,
      },
    );
    await era.printAndWait(
      `元气赛${rice.get_uma_sex_title()}A「${rice.name}同~学…请等一下……。」`,
      {
        color: chara41_talk.color,
      },
    );
    await rice.say_and_wait(`欸？怎、怎么了？`);
    await era.printAndWait(
      `元气赛${rice.get_uma_sex_title()}A：「不，其实我从刚才开始就为了完成学级委员长的使命而擅自在跟着跑。」`,
      {
        color: chara41_talk.color,
      },
    );
    await chara41_talk.say_and_wait(
      ` ${rice.name}同学的耐力实在是太棒了！所以、我有一个提案！`,
    );
    await chara41_talk.say_and_wait(`一起，去天皇赏春观摩学习怎么样？`);
    await chara41_talk.say_and_wait(
      `拥有着能够制霸长距离的速度的赛${rice.get_uma_sex_title()}们都在那里！`,
    );
    await rice.say_and_wait(`一起？天皇……赏？`);
    await chara41_talk.say_and_wait(`嗯，一起去！`);
    await chara41_talk.say_and_wait(
      `帮助朋友发掘出隐藏的力量，这也是委员长的职责！`,
    );
    await era.printAndWait(`正如樱花进王所说。`);
    await era.printAndWait(` ${rice.name}的长距离……的确有着钢铁般的素质。`);
    await era.printAndWait(
      `天皇赏春也迟早会成为${rice.sex}目标里舞台的一部分吧。`,
    );
    era.printButton(`去京都参观学习吧。`, 1);
    await era.input();
    await chara41_talk.say_and_wait(`太好了！只有一个人去的话就太寂寞了！`);
    await chara41_talk.say_and_wait(`顺带一提，那里的点心只卖300円哦！`);
    await rice.say_and_wait(`……总觉得，有点像郊游呢。`);
    await rice.say_and_wait(`诶嘿嘿，好期待啊！`);
    await era.printAndWait(`回到现在。`);
    await chara41_talk.say_and_wait(`啊~！多么激烈的追逐！`);
    await chara41_talk.say_and_wait(`我，要到更前面去看看！！`);
    get_attr_and_print_in_event(30, [0, 5, 0, 0, 0], 0);
    await era.waitAnyKey();
  } else if (edu_weeks === 47 + 1) {
    await print_event_name('新年的抱负', rice);
    await era.printAndWait(
      `今年就要开始挑战经典赛了。当${me.name}为了收集情报而正在收看电视节目的时候——`,
    );
    await say_by_passer_by(
      `电视`,
      `哎呀，这次的经典赛，有趣的面孔正在齐聚呢。`,
    );
    await say_by_passer_by(
      `电视`,
      `在短距离上没有敌手的樱花进王，${rice.name} 也在出赛名单上，不过果然——`,
    );
    await say_by_passer_by(
      `电视`,
      `美浦波旁，绝对不能错过。因为${
        rice.sex
      }可是未来三冠赛${rice.get_uma_sex_title()}候补！`,
    );
    await rice.say_and_wait(
      `……${me.name}新年好，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`,
    );
    era.printButton(` ${rice.name}！？`, 1);
    await era.input();
    await rice.say_and_wait(`嗯。是 ${rice.name}哦。`);
    await rice.say_and_wait(`嘿嘿，是来恭贺新年的，给${me.name}添麻烦了吗？`);
    era.printButton(`没什么麻烦的哦。`, 1);
    await era.input();
    await rice.say_and_wait(`啊……太好了。`);
    await rice.say_and_wait(`欸嘿嘿，听我说哦。今天早上，乌拉拉酱对我说了。`);
    era.drawLine({ content: '早上' });
    await chara52_talk.say_and_wait(`因为是新年所以来吃泡芙吧！`);
    await chara52_talk.say_and_wait(`……泡芙好吃吗？`);
    era.drawLine({ content: '现在' });
    era.printButton(`难道不好吃吗？`, 1);
    await era.input();
    await rice.say_and_wait(`呼呼哈哈哈、是的呢。${rice.name}也说了同样的话。`);
    await rice.say_and_wait(`然后，那个…`);
    await rice.say_and_wait(
      ` ${rice.name}想和${
        me.sex_code - 1 ? '姐姐' : '哥哥'
      }大人一起讨论新年的抱负，想讨论今年的目标……`,
    );
    await rice.say_and_wait(`不行、吗？`);
    era.printButton(`好啊。`, 1);
    await era.input();
    await rice.say_and_wait(`嘿嘿，太棒了！要订什么目标好呢？`);
    await rice.say_and_wait(
      `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人，想要立下怎样的目标呢？`,
    );
    era.printButton(`一定要让 ${rice.name}拿下经典赛的优胜。`, 1);
    await era.input();
    await rice.say_and_wait(`${me.sex_code - 1 ? '姐姐' : '哥哥'}大人……！`);
    await rice.say_and_wait(`……${rice.name}也一样，可以立下今年的目标吗？`);
    era.printButton(`当然。`, 1);
    await era.input();
    await rice.say_and_wait(
      ` ${rice.name}，为了实现自己和${
        me.sex_code - 1 ? '姐姐' : '哥哥'
      }大人的目标，会努力的！`,
    );
    era.printButton(`就是这种感觉！`, 1);
    era.printButton(`同时要保重身体哦。`, 2);
    era.printButton(`努力学习吧。`, 3);
    const ret = await era.input();
    if (ret === 1) {
      await rice.say_and_wait(`嗯！虽然可能没办法立刻实现。`);
      await rice.say_and_wait(`但是 ${rice.name}，绝对不会放弃的。`);
      await era.printAndWait(` ${rice.name}就这样下定了新的决心。`);
      get_attr_and_print_in_event(30, [0, 0, 0, 10, 0], 0);
      await era.waitAnyKey();
    } else if (ret === 2) {
      await rice.say_and_wait(`啊哇……要是在比赛前感冒，那就糟了呢。`);
      await rice.say_and_wait(
        `而且要是 ${rice.name}请假，${
          me.sex_code - 1 ? '姐姐' : '哥哥'
        }大人的训练计划就——`,
      );
      await rice.say_and_wait(`啊呜呜呜，得要随时都维持健康才行！`);
      await era.printAndWait(
        `${me.name}一边慌张地安慰独自烦恼的 ${rice.name}，一边开始制定往后的计划。`,
      );
      get_attr_and_print_in_event(
        30,
        [0, 0, 0, 0, 0],
        0,
        JSON.parse('{"体力":200}'),
      );
      await era.waitAnyKey();
    } else {
      await rice.say_and_wait(`是！`);
      await rice.say_and_wait(
        `总觉得${me.sex_code - 1 ? '姐姐' : '哥哥'}大人好像老师一样。`,
      );
      await rice.say_and_wait(`呼呼……今天的授业也请多多指教……老师。`);
      await era.printAndWait(
        `之后${me.name}便和 ${rice.name}一起观看比赛录像进行研究。`,
      );
      get_attr_and_print_in_event(30, [0, 0, 0, 0, 0], 20);
      await era.waitAnyKey();
    }
    era.set('cflag:30:节日事件标记', 0);
  } else if (edu_weeks === 47 + 29) {
    const chara26_talk = get_chara_talk(26);
    chara26_talk.name = '某赛博格马娘';
    if (era.get('flag:当前位置') === location_enum.beach) {
      await print_event_name('夏季合宿开始', rice);
      await era.printAndWait(`为了进一步提升实力，强化训练也开始了。`);
      await rice.say_and_wait(`…哇，怎么办啊。`);
      await rice.say_and_wait(` ${rice.name}也，跟着来合宿了。`);
      await rice.say_and_wait(
        `很多其他的赛${rice.get_uma_sex_title()}也在这里啊。要是 ${
          rice.name
        }招来不幸的话——`,
      );
      era.printButton(`现在该考虑的事情不是这个吧？`, 1);
      await era.input();
      await rice.say_and_wait(`……咿！是！那个……`);
      await rice.say_and_wait(`呼呼，好……合宿也会加油的。`);
      await rice.say_and_wait(` ${rice.name}，加油……！`);
      await rice.say_and_wait(`A!A!O!`);
      await era.printAndWait(
        `就这样，${me.name}和 ${rice.name}一起的夏合宿开始了！！`,
      );
      era.drawLine();
      await era.printAndWait(
        `${me.name}和 ${rice.name}训练结束后正打算吃饭的时候——`,
      );
      await chara26_talk.say_and_wait(`哈啊……哈啊……！`);
      await chara26_talk.say_and_wait(`记录更新，距离理想用时还有5秒。`);
      await chara26_talk.say_and_wait(`——训练，继续进行。`);
      await rice.say_and_wait(
        `……拜托了${me.sex_code - 1 ? '姐姐' : '哥哥'}大人，再来一次吧。`,
      );
      era.printButton(`…只能一次哦。`, 1);
      await era.input();
      await rice.say_and_wait(`嗯！`);
      await era.printAndWait(`${me.name}就这样看着 ${rice.name}再次跑了出去。`);
      await chara52_talk.say_and_wait(`啊！${rice.name}酱，跑走了！`);
      await chara52_talk.say_and_wait(`怎么会！我还以为终于可以说得上话了呢！`);
      await era.printAndWait(` ${rice.name}跑完一圈回来了。`);
      await rice.say_and_wait(`……欸？乌拉拉……酱？`);
      await chara52_talk.say_and_wait(`怎么会！我还以为终于可以说得上话了呢！`);
      await me.say_and_wait(`出发！`);
      await rice.say_and_wait(`欸！？两个人都……！？`);
      era.drawLine();
      await rice.say_and_wait(
        `哇！烤胡萝卜的炒面，耐力盖饭，还有特大苹果糖……！`,
      );
      await chara52_talk.say_and_wait(
        ` ${rice.name}酱想从哪个开始吃呢？我的话，最先是胡萝卜冰淇淋哦。`,
      );
      await rice.say_and_wait(
        `那个，${rice.name}要……呜呜。怎样才好啊……${
          me.sex_code - 1 ? '姐姐' : '哥哥'
        }大人……`,
      );
      await era.printAndWait(`\n你的选择：`);
      era.printButton(`能量满满的精力盖饭！`, 1);
      era.printButton(`用毅力吃完！特大苹果糖！`, 2);
      const ret = await era.input();
      if (ret === 1) {
        rice.print(`咕噜……`);
        await rice.say_and_wait(`…呀啊！？啊唔唔唔……`);
        await rice.say_and_wait(
          `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人为什么会知道，${
            rice.name
          }的肚子饿扁扁了呢？`,
        );
        await me.say_and_wait(`因为${me.name}今天非常努力。`);
        await rice.say_and_wait(
          `嘿嘿，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人有一直看着 ${
            rice.name
          }呢。`,
        );
        await era.printAndWait(
          `于是，${me.name}们三人一起开心吃饭，转眼便度过了一段可贵的时光。`,
        );
        get_attr_and_print_in_event(30, [0, 0, 10, 0, 0], 0);
        await era.waitAnyKey();
      } else {
        await rice.say_and_wait(`哇…苹果糖！真的可以吃吗？`);
        await rice.say_and_wait(
          `对 ${rice.name}来说，苹果糖可是最好的奖励哦。`,
        );
        await rice.say_and_wait(
          `参加赛跑的时候，考试结束的时候，母亲都会说「今天也很优秀呢」。`,
        );
        era.printButton(`那今天 ${rice.name}也可以吃哦。`, 1);
        era.printButton(` ${rice.name}一直是个优秀的孩子。`, 2);
        await era.input();
        await chara52_talk.say_and_wait(
          `嗯嗯，${rice.name}酱的话，吃掉100个也没有问题！`,
        );
        await rice.say_and_wait(`是那样吗？`);
        await chara52_talk.say_and_wait(
          `对对！因为 ${rice.name}非常非——常努力了呢！`,
        );
        await rice.say_and_wait(
          `……嘿嘿，谢谢。${me.sex_code - 1 ? '姐姐' : '哥哥'}大人，乌拉拉酱。`,
        );
        await era.printAndWait(
          `${me.name}们三个人就这样愉快地吃着饭，度过了短暂的休憩时光。`,
        );
        get_attr_and_print_in_event(30, [0, 0, 0, 10, 0], 0);
        await era.waitAnyKey();
      }
    }
  } else if (edu_weeks === 95 + 6) {
    await print_event_name('情人节', rice);
    await era.printAndWait(
      `今天${me.name}也和平日一样，在训练室里进行着工作……`,
    );
    await rice.say_and_wait(`…那、那个，这个……`);
    await rice.say_and_wait(
      `${
        me.sex_code - 1 ? '姐姐' : '哥哥'
      }大人，喜欢巧克力吗？收到的话会开心吗？`,
    );
    await era.printAndWait(`听到「巧克力」这个词就会想起来。`);
    await era.printAndWait(`……今天好像是情人节来着。`);
    await me.say_and_wait(`应该会高兴吧。`);
    await rice.say_and_wait(`是吗！那么……`);
    await era.printAndWait(`说完这话的 ${rice.name}跑了出去。`);
    era.drawLine({ content: '过了一会儿' });
    await era.printAndWait(`咚！！`, { fontSize: '1.875rem' });
    await era.printAndWait(`……桌子上如山般堆放着 ${rice.name}带来的巧克力。`);
    await rice.say_and_wait(
      `……我准备了很多，甜的也好苦的也好，放坚果的也好放草莓的也好。`,
    );
    await rice.say_and_wait(
      `——所以，选一个吧，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人！`,
    );
    await me.say_and_wait(`选？`);
    await rice.say_and_wait(`嗯。因为不想吃到自己不喜欢的味道吧？`);
    await rice.say_and_wait(`所以做了很多种出来。想着……`);
    await rice.say_and_wait(
      `总有一种是${me.sex_code - 1 ? '姐姐' : '哥哥'}大人喜欢的口味。`,
    );
    await era.printAndWait(
      `看来 ${rice.name}为了迎合${me.name}的口味，亲手制作了好几种巧克力。`,
    );
    await rice.say_and_wait(`欸……怎么了吗？`);
    await rice.say_and_wait(`难道这里面没有喜欢的？`);
    await me.say_and_wait(`不能全部收下吗？`);
    await rice.say_and_wait(`欸！？会撑坏肚子的哦！？`);
    await me.say_and_wait(`没关系。`);
    await rice.say_and_wait(`真的……没关系……？`);
    await era.printAndWait(` ${rice.name}很担心地看着${me.name}。`);
    await me.say_and_wait(`因为想全部收下 ${rice.name}的心意。`);
    await rice.say_and_wait(`…唔！`);
    await rice.say_and_wait(`感觉、好开心…`);
    await rice.say_and_wait(`不过，那样的话，还是多做一些比较好吧。`);
    await rice.say_and_wait(
      `对${me.sex_code - 1 ? '姐姐' : '哥哥'}大人的感情，只有这样是不够的。`,
    );
    await era.printAndWait(
      `之后${me.name}和 ${rice.name}一起度过了甜蜜的情人节。`,
    );
    era.set('cflag:30:节日事件标记', 0);
  } else if (edu_weeks === 95 + 14) {
    await print_event_name('粉丝感谢祭', rice);
    await era.printAndWait(`练习场上`);
    await era.printAndWait(
      `这一天，学园也会向一般人开放，举办各种各样的活动。`,
    );
    await rice.say_and_wait(`呜……没想到还会参加马拉松！`);
    await chara52_talk.say_and_wait(
      `没关系的！如果是 ${rice.name}的话，肯定能嘿咻嘿咻地跑完啦。`,
    );
    await chara47_talk.say_and_wait(
      `嗯。要是 ${rice.name}的话，绝对绝对能够跑完的！`,
    );
    await rice.say_and_wait(`不、不是。那个、不是这回事啊……！`);
    await era.printAndWait(`结果是，麦昆漂亮地第一名冲线。`);
    await era.printAndWait(
      `期待着的 ${rice.name}则是……死死跟在后面拿到了第二名。`,
    );
    await chara47_talk.say_and_wait(` ${rice.name}，辛苦了！`);
    await chara52_talk.say_and_wait(
      `嗯嗯，${rice.name}酱好厉害呢！拿了第二，一起去庆祝吧！`,
    );
    await rice.say_and_wait(`谢、谢谢……但是……`);
    await rice.say_and_wait(`现在的 ${rice.name}，完全……`);
    await chara26_talk.say_and_wait(`……`);
    await rice.say_and_wait(`……对不起，庆祝就算了吧。`);
    await rice.say_and_wait(`下次一定不会辜负大家的期望的……！`);
    await chara52_talk.say_and_wait(`欸、等一下，${rice.name}酱！`);
    await chara26_talk.say_and_wait(`……`);
    era.drawLine({ content: '入夜' });
    await era.printAndWait(` ${rice.name}独自一人在训练场上自主练习着。`);
    await rice.say_and_wait(`…不再加油的话。`);
    era.set('cflag:30:节日事件标记', 0);
  } else if (edu_weeks === 95 + 15) {
    await print_event_name('正因无法独自盛开', rice);
    await era.printAndWait(`训练员室内`);
    await era.printAndWait(`…咚咚`);
    await era.printAndWait(`传来轻轻的敲门声。`);
    await chara47_talk.say_and_wait(`失礼了……那个，是荒漠英雄的说。`);
    await chara47_talk.say_and_wait(`有看见过 ${rice.name}去哪儿了吗？`);
    await chara47_talk.say_and_wait(
      `其实${rice.sex}现在还没有回宿舍，明明要到点名的时间了…`,
    );
    await me.say_and_wait(`——难道`, true);
    era.drawLine({ content: '训练场上' });
    await rice.say_and_wait(`哈啊…哈啊……哈啊……！`);
    await me.say_and_wait(` ${rice.name}！`);
    await rice.say_and_wait(
      `欸。${me.sex_code - 1 ? '姐姐' : '哥哥'}大人，和……荒漠英雄？`,
    );
    await rice.say_and_wait(`……`);
    await me.say_and_wait(`…不再加油的话。`);
    await rice.say_and_wait(`努力过头了哦。。`);
    await rice.say_and_wait(`对不起，但是……`);
    await rice.say_and_wait(`……`);
    await rice.say_and_wait(`嗯，对不起。会好好休息的。`);
    await chara47_talk.say_and_wait(`……`);
    await chara47_talk.say_and_wait(`那个，${rice.name}！`);
    await chara47_talk.say_and_wait(
      `对 ${rice.name}来说，${
        me.sex_code - 1 ? '姐姐' : '哥哥'
      }大人意味着什么呢？`,
    );
    await chara47_talk.say_and_wait(
      `那个……一直都是这么温柔，就像是从绘本里走出来的那个命中注定的人。`,
    );
    await rice.say_and_wait(`呀啊啊啊！？荒漠英雄同学？安……安……`);
    await chara47_talk.say_and_wait(
      `还不能安静。而且我也是在为${me.name}加油。`,
    );
    await rice.say_and_wait(`荒漠英雄……`);
    await chara47_talk.say_and_wait(
      `要是有什么困扰的话……我觉得就应该大家好好谈谈。`,
    );
    await rice.say_and_wait(`……`);
    await me.say_and_wait(`${me.name}觉得呢，${rice.name}？`);
    await rice.say_and_wait(`…但是，很害怕啊……`);
    await rice.say_and_wait(`可以依赖的某个人，我也是知道的啊……`);
    await rice.say_and_wait(
      `好不容易对 ${rice.name}抱有期待，${rice.name}却有可能做不到。`,
    );
    await rice.say_and_wait(
      ` ${rice.name}，明明已经不想让${
        me.sex_code - 1 ? '姐姐' : '哥哥'
      }大人失望了…`,
    );
    await era.printAndWait(`说完，少女小声地抽泣起来。`);
    await me.say_and_wait(`不要想那种事情。`);
    await chara47_talk.say_and_wait(
      `没错！我也是！不会对 ${rice.name}失望的！`,
    );
    await chara47_talk.say_and_wait(
      `支持着 ${rice.name}的大家，一定也是这样的。`,
    );
    await me.say_and_wait(`所以不要再一个人勉强自己了。`);
    await rice.say_and_wait(
      `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人……唔……呜……`,
    );
    await rice.say_and_wait(`呜啊~~~~！`);
    await era.printAndWait(
      `从 ${rice.name}的眼睛里，大颗的泪珠决堤似地掉下来。`,
    );
    era.drawLine({ content: '第二天' });
    await chara47_talk.say_and_wait(`啊，${rice.name}！要加油哦。`);
    await rice.say_and_wait(`……呜、呜呜……真的没问题吗？`);
    await chara47_talk.say_and_wait(`没、没问题的！`);
    await chara47_talk.say_and_wait(
      `看，训练员先生也来给 ${rice.name}加油了哦。`,
    );
    await rice.say_and_wait(`嗯。`);
    await chara26_talk.say_and_wait(`那么，我可以开始进行移动了吗？`);
    await rice.say_and_wait(`啊！抱歉！波旁同学……这个、那个……！`);
    await rice.say_and_wait(`请，一定要帮帮 ${rice.name}！`);
    await chara26_talk.say_and_wait(`……？在意识的沟通上发生了误解吗？`);
    await rice.say_and_wait(`没有发生哦！因为，波旁同学肯定能帮上忙的！`);
    await rice.say_and_wait(`虽然听到了可能会很失望……`);
    await rice.say_and_wait(` ${rice.name}现在，没有波旁的帮助是不行的！`);
    await rice.say_and_wait(`因为现在的 ${rice.name}还很弱，再这样下去……`);
    await rice.say_and_wait(`根本跑赢不了！`);
    await rice.say_and_wait(`所以希望波旁同学来教 ${rice.name}跑步！`);
    await rice.say_and_wait(`把我没有的东西，全部都教给 ${rice.name}！`);
    await chara26_talk.say_and_wait(`……`);
    await me.say_and_wait(`相信 ${rice.name}会创造奇迹吧。`);
    await chara26_talk.say_and_wait(`我知道了。`);
    await chara26_talk.say_and_wait(
      `如果这是创造史上最高的比赛所必要的过程的话。`,
    );
    await chara26_talk.say_and_wait(`申请受理，开始改变预定。`);
    await chara26_talk.say_and_wait(
      `从下午开始，作为第一阶段，开始参加 ${rice.name}的10组坡道练习。`,
    );
    await chara26_talk.say_and_wait(`目的，提高肌肉力量和速度。`);
    await chara26_talk.say_and_wait(
      `在需要负荷的情况下，可以借出特制的负重袋。`,
    );
    await chara26_talk.say_and_wait(`啊，有人称我的训练是「魔鬼」——`);
    await chara26_talk.say_and_wait(`准备好要来吗？${rice.name}。`);
    await rice.say_and_wait(`…是的！`);
    await era.printAndWait(
      `然后${rice.sex}们便开始了奔跑，向着即将到来的天皇赏春——！`,
    );
    get_attr_and_print_in_event(30, [0, 0, 0, 10, 0], 0);
    await era.waitAnyKey();
  } else if (edu_weeks === 95 + 23) {
    await print_event_name('不会折断的蔷薇', rice);
    await era.printAndWait(`宝塚纪念的举行几乎是不能了——`);
    await era.printAndWait(`这样的气氛在到处弥漫着。`);
    await rice.say_and_wait(`……`);
    await rice.say_and_wait(
      `没事的，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`,
    );
    await rice.say_and_wait(` ${rice.name}，没事的。`);
    await era.printAndWait(`……话虽如此，${rice.sex}的笑容却没有力量。`);
    await era.printAndWait(`果然还是因为那件事——`);
    await rice.say_and_wait(
      `抱、抱歉，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人！`,
    );
    await era.printAndWait(
      ` ${rice.name}在收到一则信息后急匆匆地跑出了训练员室。`,
    );
    await era.printAndWait(`${me.name}尝试跟上，急忙跑上楼梯。`);
    await era.printAndWait(`终于，到了 ${rice.name}声音传来的地方。`);
    await chara302_talk.say_and_wait(`冷静！一件事一件事地慢慢来讲……`);
    await rice.say_and_wait(
      ` ${rice.name}，阪神的工作人员也！还有京都的工作人员都想要拜托！`,
    );
    await rice.say_and_wait(`所以——希望可以举行宝塚纪念！`);
    await me.say_and_wait(` ${rice.name}！？`);
    await chara302_talk.say_and_wait(
      `惊讶！？${me.actual_name}训练员也来了吗！！`,
    );
    await rice.say_and_wait(`欸！？${me.sex_code - 1 ? '姐姐' : '哥哥'}大人？`);
    await me.say_and_wait(`这到底是？`);
    await rice.say_and_wait(`……${rice.name}，想来拜托理事长。`);
    await rice.say_and_wait(`……希望宝塚纪念可以在京都赛马场举办……`);
    await chara302_talk.say_and_wait(`再三！不止是今天，昨天晚上也来过了。`);
    await chara302_talk.say_and_wait(`各处！都有着要做的事情。`);
    await chara302_talk.say_and_wait(`冷静下来，首先要确保连携——`);
    await rice.say_and_wait(
      `我知道的！所以 ${rice.name}，和阪神的人与京都的人都联系了！`,
    );
    await rice.say_and_wait(`也许会添麻烦，也许会很困难，但请一定要帮帮我！`);
    await rice.say_and_wait(`为了支持着我的大家，能做到的事情一定尽我所能。`);
    await chara301_talk.say_and_wait(`啊，让您久等了！终于批准下来了！`);
    await chara302_talk.say_and_wait(`手纲！！！期待~`);
    await chara301_talk.say_and_wait(
      `嗯嗯！这次的宝塚纪念，决定要在京都赛马场举办了！`,
    );
    await rice.say_and_wait(`……那么！`);
    await chara301_talk.say_and_wait(
      `没错，阪神和京都，两个会场的工作人员紧密地保持着联系。`,
    );
    await chara301_talk.say_and_wait(`才让举办变得可能的！`);
    await chara301_talk.say_and_wait(
      `无论哪一方的工作人员，都表示一定要尽全力。`,
    );
    await chara301_talk.say_and_wait(`…也是为了 ${rice.name}。`);
    await rice.say_and_wait(`……！！`);
    era.drawLine({ content: '回到训练室后' });
    await rice.say_and_wait(`呜……太好了……`);
    await rice.say_and_wait(`能够、举办了呢……`);
    await me.say_and_wait(`为了大家有在努力呢。`);
    await rice.say_and_wait(`嗯……嗯……！`);
    await rice.say_and_wait(`为了在这次事件里出了力的人们。`);
    await rice.say_and_wait(`为了支持 ${rice.name}的大家……！`);
    await rice.say_and_wait(` ${rice.name}，想让大家……露出笑容……！`);
    get_attr_and_print_in_event(30, [0, 10, 0, 0, 0], 0);
    await era.waitAnyKey();
  } else if (edu_weeks === 95 + 29) {
    if (era.get('flag:当前位置') === location_enum.beach) {
      await print_event_name('夏季合宿开始', rice);
      await era.printAndWait(`从今天起，夏季合宿再次开始了。`);
      await rice.say_and_wait(`欸嘿嘿…热热闹闹的呢。`);
      await rice.say_and_wait(`这种感觉…好久没有过了。`);
      await rice.say_and_wait(`从那个时候起，已经过去一年了呢……`);
      await era.printAndWait(`依旧是一次严格的夏季合宿。`);
    }
  } else if (edu_weeks === 95 + 41) {
    await print_event_name(' 粉丝来信', rice);
    await rice.say_and_wait(` ${rice.name}有，粉丝来信……`);
    await me.say_and_wait(`太好了呢。`);
    await rice.say_and_wait(`嗯……！`);
    await rice.say_and_wait(`但是……」`);
    await era.printAndWait(`看起来很开心的 ${rice.name}的表情。`);
    await era.printAndWait(`不知为什么变得有些不安。`);
    await me.say_and_wait(`怎么了吗？`);
    await rice.say_and_wait(`……有时候 ${rice.name}也在想。`);
    await rice.say_and_wait(`因为给 ${rice.name}应援。`);
    await rice.say_and_wait(`这些人会不会变得不幸什么的——`);
    await rice.say_and_wait(` ${rice.name}，不想那样……`);
    await rice.say_and_wait(`明明不想去想，却总是……`);
    await rice.say_and_wait(
      `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人，${rice.name}该怎么办才好呢？`,
    );
    await me.say_and_wait(`看一看粉丝信的内容吧。`);
    await rice.say_and_wait(`内容……嗯。`);
    era.drawLine({ content: '第一封信' });
    await era.printAndWait(
      `在赛场上 ${rice.name}努力的样子，给了我很多的勇气......`,
    );
    era.drawLine({ content: '又一封信' });
    await era.printAndWait(`......看见 ${rice.name}酱的笑容的话......`);
    era.drawLine({ content: '还有一封' });
    await era.printAndWait(`......无论何时都能感受到温暖`);
    era.println();
    await rice.say_and_wait(` ${rice.name}，努力的样子……`);
    await rice.say_and_wait(` ${rice.name}的，笑容……`);
    await rice.say_and_wait(`……这样啊。`);
    await rice.say_and_wait(`会有人为此感到高兴啊。`);
    await rice.say_and_wait(`${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`);
    await rice.say_and_wait(` ${rice.name}会，一直、一直努力的……！`);
    await rice.say_and_wait(`为了让为 ${rice.name}应援的人们，能够感到喜悦！`);
    await era.printAndWait(` ${rice.name}的眼睛里，似乎亮起了干劲的火焰！`);
    get_attr_and_print_in_event(30, [0, 0, 0, 0, 0], 30);
    sys_change_motivation(30, 1) && (await era.waitAnyKey());
  } else if (edu_weeks === 95 + 48) {
    await print_event_name('记者见面会', rice);
    await era.printAndWait(`有马纪念即将到来的这一天。`);
    await era.printAndWait(`${me.name}和 ${rice.name}前去参加了联合采访。`);
    await rice.say_and_wait(`诶、诶诶……！？`);
    await rice.say_and_wait(` ${rice.name}在中间吗？`);
    await say_by_passer_by(
      `工作人员A`,
      `是啊！因为是人气投票第一的${rice.get_uma_sex_title()}`,
    );
    await say_by_passer_by(`工作人员A`, `中间可是主角的位置哦！`);
    await rice.say_and_wait(`但是……这个，今天—`);
    await chara26_talk.say_and_wait(` ${rice.name}，请迅速且堂堂正正地回应。`);
    await chara26_talk.say_and_wait(`拍摄之后还有采访。`);
    await chara13_talk.say_and_wait(`呵呵，是啊。`);
    await chara13_talk.say_and_wait(`没有主角的话就开始不了啊。`);
    await chara26_talk.say_and_wait(
      `嗯。然后${me.name}就会宣布【见证史上最棒的比赛】的，对吧？`,
    );
    await chara13_talk.say_and_wait(`啊！到这种程度吗？`);
    await chara13_talk.say_and_wait(`呼呼……那还真是，期待啊。`);
    await rice.say_and_wait(`呜~~~~大家，眼神好恐怖啊……`);
    await me.say_and_wait(`当主角可真不容易啊。`);
    await rice.say_and_wait(
      `唔……连${me.sex_code - 1 ? '姐姐' : '哥哥'}大人也是这样……`,
    );
    await era.printAndWait(
      `见面会结束了……为了休息和奖励努力了一天的 ${rice.name}，`,
    );
    await era.printAndWait(`决定到街上去逛逛。`);
    await rice.say_and_wait(`唔诶……紧张死了。`);
    await me.say_and_wait(`很努力了呢。`);
    await rice.say_and_wait(`嗯…没想到会被那两个人给夹在了中间。`);
    await rice.say_and_wait(`呐，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`);
    await rice.say_and_wait(`想要怎么样的礼物呢？`);
    await rice.say_and_wait(
      ` ${rice.name}，想要回报${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`,
    );
    await rice.say_and_wait(`所以，送出怎么样的礼物才好呢？`);
    await rice.say_and_wait(`……虽然，${rice.name}能做到的事很少。`);
    await me.say_and_wait(`想看到${me.name}努力的样子。`);
    await rice.say_and_wait(`这样…就行了吗？`);
    await me.say_and_wait(`当然！`);
    await rice.say_and_wait(`……${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`);
    await rice.say_and_wait(`不行哦。`);
    await rice.say_and_wait(`只有那样的话，${rice.name}才不要！`);
    await rice.say_and_wait(`因为努力是理所当然的。`);
    await rice.say_and_wait(
      `——所以，绝对要把有马纪念的第一名，作为送给${
        me.sex_code - 1 ? '姐姐' : '哥哥'
      }大人的礼物！`,
    );
    await rice.say_and_wait(
      `我想这一定是，只有 ${rice.name}才能送出来的礼物。`,
    );
    await era.printAndWait(`结果，别说是休息了。`);
    await era.printAndWait(`这个圣诞夜反倒让精神激昂了起来。`);
    await rice.say_and_wait(
      `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人，今天也谢谢${me.name}！`,
    );
    await rice.say_and_wait(
      `到了有马纪念，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人还有大家。`,
    );
    await rice.say_and_wait(`一定会因为 ${rice.name}的奔跑而感到幸福的！`);
    await era.printAndWait(`然后，${rice.name}迈着轻快的步伐向前走去。`);
    await era.printAndWait(
      `比刚见面时更加坚强的背影，现在轮到${me.name}去追逐了。`,
    );
  } else if (edu_weeks === 143 + 1) {
    const me = get_chara_talk(0),
      chara_talk = get_chara_talk(30);
    await print_event_name('从前从前，在某个地方……', chara_talk);
    await era.printAndWait(
      `「最初的三年」对赛${chara_talk.get_uma_sex_title()}来说非常重要，${
        chara_talk.name
      }顺利地在这段时间拿下了极为亮眼的成绩。`,
    );
    await era.printAndWait(`${chara_talk.sex}也因此受到了世人的肯定。`);
    await chara_talk.say_and_wait(`颁奖仪式…？`);
    await me.say_and_wait(`去见大家吧。`);
    await chara_talk.say_and_wait(
      `…嗯。${chara_talk.name}也想，亲口对大家说声谢谢。`,
    );
    await era.printAndWait(
      `——于是隔天，${me.actual_name}和 ${chara_talk.name}一起来到了阪神赛场。`,
    );
    await chara_talk.say_and_wait(`好多人…明明今天没有比赛的。`);
    await say_by_passer_by(
      `观众A`,
      `哇啊！${chara_talk.name}来了！呀啊啊~好可爱~！`,
    );
    await say_by_passer_by(
      `观众B`,
      `辛苦了～${chara_talk.name}！今天拜托${me.name}咯～！`,
    );
    await chara_talk.say_and_wait(`咦……咦？`);
    await say_by_passer_by(`工作人员A`, `两位，好久不见。`);
    await chara_talk.say_and_wait(`好久不见。请问…这到底是？`);
    await say_by_passer_by(`工作人员A`, `哦，其实原本我们打算只有工作人员。`);
    await say_by_passer_by(`工作人员A`, `简单办个庆祝会，结果……`);
    await say_by_passer_by(`观众C`, `${chara_talk.name}~！看这边~！`);
    await say_by_passer_by(
      `工作人员A`,
      `如${me.name}们所看到的，很多观众都表示想要见到 ${chara_talk.name}。`,
    );
    era.printButton(`因为大家都最喜欢 ${chara_talk.name}了。`, 1);
    await era.input();
    await chara_talk.say_and_wait(`呜欸欸？最、最喜欢…`);
    await say_by_passer_by(`工作人员A`, `啊哈哈，说的没错。`);
    await say_by_passer_by(
      `工作人员A`,
      `于是我们改变了原定计划，拜托各界的相关人士协助…`,
    );
    await say_by_passer_by(
      `工作人员A`,
      `颁奖仪式就这样，变成一般观众也可以参加的典礼了。`,
    );
    await chara_talk.say_and_wait(`所以这些人，都是为了 ${chara_talk.name}才…`);
    await say_by_passer_by(`工作人员A`, `嗯，是的。`);
    await say_by_passer_by(
      `工作人员A`,
      `可以拜托${me.name}完成那天无法完成的事吗？`,
    );
    era.drawLine();
    await chara_talk.say_and_wait(`那个，大家好。`);
    await chara_talk.say_and_wait(
      `真的很感谢今天有这么多人，愿意为了 ${chara_talk.name}来这里。`,
    );
    await chara_talk.say_and_wait(
      ` ${chara_talk.name}从来没看到过这么幸福的景色。`,
    );
    await chara_talk.say_and_wait(`我现在，觉得真的很幸福。`);
    await chara_talk.say_and_wait(` ${chara_talk.name}不会再哭了。`);
    await chara_talk.say_and_wait(
      `因为 ${chara_talk.name}今天想看着大家的眼睛说话。`,
    );
    await chara_talk.say_and_wait(
      `如果只是一个人吗，${chara_talk.name}现在应该也不会有什么进步。`,
    );
    await chara_talk.say_and_wait(`只能蜷缩在自己的黑暗世界里。`);
    await chara_talk.say_and_wait(
      `但是，${chara_talk.name}现在已经不是一个人了。`,
    );
    await chara_talk.say_and_wait(
      ` ${chara_talk.name}现在能站在这里，也是因为${me.actual_name}的关系`,
    );
    await chara_talk.say_and_wait(
      `给了 ${chara_talk.name}光亮，给了 ${chara_talk.name}容身之处…`,
    );
    await chara_talk.say_and_wait(`大家，真的非常感谢${me.name}们！`);
    await chara_talk.say_and_wait(
      `所以还请大家，继续支持 ${chara_talk.name}……！！`,
    );
    await era.printAndWait(`哇啊啊啊啊啊啊啊——`);
    era.drawLine({ content: '回程的巴士上' });
    await chara_talk.say_and_wait(
      `谢谢${me.name}，${
        me.sex_code - 1 ? '姐姐' : '哥哥'
      }大人。都是多亏有${me.name}。`,
    );
    await me.say_and_wait(`${me.name}真的很努力了，${chara_talk.name}。`);
    await era.printAndWait(
      `于是，一直都觉得自己很没用的女孩，成为了某人的蓝蔷薇。`,
    );
    await era.printAndWait(`虽然和绘本不同，虽然偶有不幸的发生…`);
    await era.printAndWait(
      `但${chara_talk.sex}，会带着带给大家幸福的希望，让自己美丽地盛开。`,
    );
    await era.printAndWait(
      ` ${chara_talk.name}，在全世界最喜欢的人身边，如此祈祷着。`,
    );
    return true;
  }
};

handlers[event_hooks.week_end] = async (_, __, event_object) => {
  const chara52_talk = get_chara_talk(52),
    me = get_chara_talk(0),
    edu_weeks = era.get('cflag:30:育成回合计时');
  if (event_object.arg === 'beginning') {
    await print_event_name(`育成开始`, rice);
    era.drawLine({ content: '训练场' });
    await rice.say_and_wait(`离训练的时间还有一点点…`);
    await rice.say_and_wait(`…稍微跑一下吧。`);
    await rice.say_and_wait(
      `哎嘿嘿……${rice.name}选手，在欢呼声中，走进了赛场——`,
    );
    await say_by_passer_by(`赛${rice.get_uma_sex_title()}A`, `哇！！！`);
    await rice.say_and_wait(`哎！？`);
    await say_by_passer_by(
      `实力强劲的赛${rice.get_uma_sex_title()}A`,
      `哈啊……哈啊……！`,
    );
    await say_by_passer_by(`赛${rice.get_uma_sex_title()}A`, `又刷新了记录！`);
    await era.printAndWait(`这下已经能确定是来年的经典赛主役了呢！`);
    await say_by_passer_by(
      `赛${rice.get_uma_sex_title()}B`,
      `是啊…跑得真是太棒了。呐，那个，请一定……`,
    );
    await say_by_passer_by(
      `赛${rice.get_uma_sex_title()}A`,
      `……还有预定的安排等待执行。失礼了。`,
    );
    await era.printAndWait(`实力强劲的${rice.get_uma_sex_title()}A跑开了。`);
    await say_by_passer_by(
      `赛${rice.get_uma_sex_title()}们`,
      `啊~~~~等等~~~！`,
    );
    await rice.say_and_wait(`……好厉害。赛场边上也挤满了来旁观的人……`);
    await rice.say_and_wait(
      `…………现在，${rice.name}去那里跑的话也只会碍事……的吧。`,
    );
    await era.printAndWait(
      `${me.name}和 ${rice.name}一起向闪耀系列发起的挑战开始了！`,
    );
  } else if (edu_weeks === 47 + 32) {
    if (era.get('flag:当前位置') !== location_enum.beach) {
      await print_event_name('夏季合宿结束', rice);
      await era.printAndWait(
        `合宿的最后一天，在 ${rice.name}的希望下，直到最后为止都在进行着训练。`,
      );
      await rice.say_and_wait(`哈啊…哈啊…抱歉，我来晚了。`);
      await chara52_talk.say_and_wait(
        `快点快点，${rice.name}酱！巴士和大家都在等着哦！`,
      );
      await rice.say_and_wait(`呜…呜！马上就来！`);
      await rice.say_and_wait(`太好了，赶上了。`);
      await me.say_and_wait(`多亏了大家的等待呢。`);
      await rice.say_and_wait(`嗯！不和大家说声谢谢的话——`);
      const changed_attrs = {};
      gacha(Object.values(attr_enum), 3).forEach(
        (e) => (changed_attrs[e] = true),
      );
      const change_list = new Array(5).fill(0);
      gacha(Object.values(attr_enum), 3).forEach((e) => (change_list[e] = 5));
      get_attr_and_print_in_event(30, change_list, 0) &&
        (await era.waitAnyKey());
    }
  } else if (edu_weeks === 95 + 32) {
    if (era.get('flag:当前位置') !== location_enum.beach) {
      await print_event_name('夏季合宿结束', rice);
      await era.printAndWait(
        `夏合宿的最后一天，${me.name}坐在长椅上等待着准备回家的 ${rice.name}的时候……`,
      );
      await rice.say_and_wait(
        `啊啊啊啊啊~${me.sex_code - 1 ? '姐姐' : '哥哥'}大人！`,
      );
      await rice.say_and_wait(`让${me.name}久等了，真是不好意思……！`);
      await rice.say_and_wait(`呼……去帮了很多忙，结果这么晚才回来。`);
      await me.say_and_wait(`去帮忙？`);
      await rice.say_and_wait(`嗯，也受到了这里合宿所的很多照顾吧？`);
      await rice.say_and_wait(
        ` ${rice.name}就去给花浇水啦…重新粉刷长椅的油漆啦——`,
      );
      await me.say_and_wait(`长椅的油漆？`);
      await rice.say_and_wait(
        `嗯！就是，${
          me.sex_code - 1 ? '姐姐' : '哥哥'
        }大人现在正在休息的长椅——`,
      );
      await me.say_and_wait(`……`);
      await rice.say_and_wait(`${me.sex_code - 1 ? '姐姐' : '哥哥'}大人？`);
      await era.printAndWait(`啪啦啪啦！！`);
      await era.printAndWait(
        `虽然${me.name}慌慌张张地站了起来，但已经沾满了黏糊糊的油漆。`,
      );
      await rice.say_and_wait(`对、对不起！都是因为 ${rice.name}没写上提醒`);
      await rice.say_and_wait(
        `哇啊啊啊……怎么办、${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。呜啊~~~~`,
      );
      await me.say_and_wait(`重新刷一遍油漆吧。`);
      await rice.say_and_wait(`呜……真的对不起。`);
      await rice.say_and_wait(`还要去和管理人道歉才行啊。`);
      await rice.say_and_wait(`还有，也要去借油漆。`);
      await era.printAndWait(`和 ${rice.name}一起给管理人员帮了忙。`);
      const changed_attrs = {};
      gacha(Object.values(attr_enum), 3).forEach(
        (e) => (changed_attrs[e] = true),
      );
      const change_list = new Array(5).fill(0);
      gacha(Object.values(attr_enum), 3).forEach((e) => (change_list[e] = 5));
      get_attr_and_print_in_event(30, change_list, 0) &&
        (await era.waitAnyKey());
    }
  } else {
    throw new Error('unsupported');
  }
};

handlers[event_hooks.race_end] = async (hook, extra_flag) => {
  const me = get_chara_talk(0),
    mcqueen = get_chara_talk(13),
    zob_zoy = get_chara_talk(47),
    bourbon = get_chara_talk(26),
    urara = get_chara_talk(52),
    edu_weeks = era.get('cflag:30:育成回合计时'),
    callname = sys_get_callname(30, 0),
    self_name = sys_get_callname(30, 30);
  if (
    extra_flag.race === race_enum.begin_race &&
    edu_weeks < 48 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('迈出改变的第一步', rice);
    await rice.say_and_wait(`${rice.name}……跑完了哦！赢下来出道战了哦！`);
    era.printButton(`${rice.name}很努力了呢。`, 1);
    era.printButton(`摸摸${rice.name}的脑袋。`, 2);
    const ret = await era.input();
    if (ret === 1) {
      sys_like_chara(30, 0, 5);
    } else {
      sys_love_uma(30, 1);
    }
    await rice.say_and_wait(`哇……谢谢！哥、哥……`);
    await rice.say_and_wait(`${me.sex_code - 1 ? '姐姐' : '哥哥'}、大人……`);
    await rice.say_and_wait(`诶……嘿嘿。之后也，请、多多指教${rice.name}！`);
    await rice.say_and_wait(
      `——就这样，${me.actual_name}和${rice.name}一起，迈出了最开始的一步！`,
    );
    era.drawLine({ content: '在那之后过了数天……' });
    await era.printAndWait(
      `这一天，${me.actual_name}再次和${rice.name}来到了赛场。`,
    );
    await rice.say_and_wait(`哇……人好多啊。简直就像G1一样。`);
    await rice.say_and_wait(`……咦？但是今天应该，既不是G2也不是G3才对啊……？`);
    await era.printAndWait(
      `实况：登场了，美浦波旁！来到了【Make Debut】的赛场！！`,
    );
    await rice.say_and_wait(`……波旁、同学。`);
    await era.printAndWait(`不断缩小差距，一口气冲到最前面！`);
    await era.printAndWait(`速度丝毫不减，继续向前冲刺！`);
    await era.printAndWait(`美浦波旁以这个势头保持着第一！冲过了——终点！`);
    await era.printAndWait(`啊~来年的经典赛，很期待哦。`);
    await era.printAndWait(`我，绝对会为波旁应援的！`);
    await era.printAndWait(`嗯嗯！未来的三冠赛${rice.get_uma_sex_title()}！`);
    await era.printAndWait(`波旁的比赛，肯定会去看的！`);
    await rice.say_and_wait(`……看到波旁同学的奔跑，大家都露出了笑容吧。`);
    await rice.say_and_wait(`${rice.name}也，能做到这个样子吗？`);
    era.printButton(`能做到的！`, 1);
    await era.input();
    await rice.say_and_wait(`欸？${me.sex_code - 1 ? '姐姐' : '哥哥'}大人！？`);
    era.printButton(`${rice.name}肯定能做到的！`, 1);
    await era.input();
    await rice.say_and_wait(`！`);
    await rice.say_and_wait(
      `…欸嘿嘿。${me.sex_code - 1 ? '姐姐' : '哥哥'}大人的声音简直像魔法一样。`,
    );
    await rice.say_and_wait(
      `即使是绝对做不到的事情。这样想着，好像也能够办得到。`,
    );
    era.printButton(`${rice.name}也去参加经典赛怎么样？`, 1);
    await era.input();
    await rice.say_and_wait(`……经典赛。`);
    await era.printAndWait(
      `——前去参加经典赛，就意味着要和同年出道的赛${rice.get_uma_sex_title()}们竞争。`,
    );
    await era.printAndWait(`${rice.name}和美浦波旁，在同一个舞台上——`);
    await rice.say_and_wait(`！`);
    era.printButton(`是${rice.name}的话，肯定能。`, 1);
    await era.input();
    await rice.say_and_wait(`……！`);
    await rice.say_and_wait(
      `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人一直都是这么相信着${
        rice.name
      }啊。……`,
    );
    await rice.say_and_wait(`我知道了。就这么做吧。`);
    await rice.say_and_wait(
      `虽然有点害怕，但已经不想再做一个无法改变的坏孩子了。`,
    );
    await rice.say_and_wait(`${rice.name}……会努力的，会追上…追上波旁同学！`);
    await era.printAndWait(`${me.name}和${rice.name}约好了要去参加经典赛。`);
    await era.printAndWait(`首先是【春季锦标】。`);
    await era.printAndWait(`作为三冠路线上的前哨站，决定朝向那个方向而努力。`);
    const change_list = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (change_list[e] = 3));
    get_attr_and_print_in_event(30, change_list, 30) &&
      (await era.waitAnyKey());
  } else if (
    extra_flag.race === race_enum.sprg_sta &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('迈向未来不停下脚步(胜利)', rice);
    await rice.say_and_wait(`哈啊……哈啊……！`);
    era.printButton(`辛苦了。`, 1);
    await era.input();
    await rice.say_and_wait(`谢谢，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`);
    await rice.say_and_wait(`但是，暴露出的问题也很多呢。`);
    await rice.say_and_wait(`${rice.name}，要更努力一点才行！`);
    const change_list = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (change_list[e] = 3));
    get_attr_and_print_in_event(30, change_list, 35) &&
      (await era.waitAnyKey());
  } else if (
    extra_flag.race === race_enum.sprg_sta &&
    edu_weeks < 95 &&
    extra_flag.rank <= 5 &&
    extra_flag.rank > 1
  ) {
    await print_event_name('迈向未来不停下脚步(入着)', rice);
    await rice.say_and_wait(`哈啊……哈啊……！`);
    era.printButton(`辛苦了。`, 1);
    await era.input();
    await rice.say_and_wait(`谢谢，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`);
    await rice.say_and_wait(`但是，暴露出的问题也很多呢。`);
    await rice.say_and_wait(`${rice.name}，要更努力一点才行！`);
    era.drawLine({ content: '此时在地下通道的另一处' });
    await era.printAndWait(`记者A：「波旁选手！波旁选手！！」`);
    await bourbon.say_and_wait(`……有什么事吗？`);
    await era.printAndWait(
      `记者A：「不愧是【栗毛的超特急】！这次的比赛也展示出那个称号的一角呢！」`,
    );
    await era.printAndWait(
      `记者A：「大家都在期待着呢！波旁选手达成三冠的那个辉煌瞬间！」`,
    );
    await bourbon.say_and_wait(`应援，十分感谢。那就告辞了。`);
    await era.printAndWait(`记者A：「啊，等等，等一下！至少再多一句！」`);
    await era.printAndWait(`记者A：「请允许我再问一个问题！」`);
    await era.printAndWait(
      `记者A：「就是说……这次的比赛里。波旁的劲敌会是哪一位呢？」`,
    );
    await bourbon.say_and_wait(`劲敌？`);
    await bourbon.say_and_wait(`判断并不需要那样的存在。`);
    await bourbon.say_and_wait(
      `要达成第一，对手肯定会在那里的。没有当成是劲敌的必要。`,
    );
    await rice.say_and_wait(`……好厉害。`);
    await rice.say_and_wait(`既自信还很有实力，在自己的道路上前进……`);
    era.printButton(`${rice.name}也要加油啊。`, 1);
    await era.input();
    await rice.say_and_wait(`谢谢，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`);
    await era.printAndWait(`嗯！`);
    const change_list = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (change_list[e] = 3));
    get_attr_and_print_in_event(30, change_list, 35) &&
      (await era.waitAnyKey());
  } else if (
    extra_flag.race === race_enum.toky_yus &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('追上了', rice);
    await rice.say_and_wait(`哈啊…哈啊……！！`);
    era.printButton(`没事吧！？`, 1);
    await era.input();
    await rice.say_and_wait(`没问题，没问题的。`);
    await rice.say_and_wait(
      `比起这个，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人，看到了吗？`,
    );
    await rice.say_and_wait(`${rice.name}，追上了哦！`);
    await rice.say_and_wait(`欸嘿嘿，做、到了——……`);
    await era.printAndWait(`${rice.name}倒下了。`);
    await rice.say_and_wait(`呼……呼……`);
    await era.printAndWait(`看来是之前用尽全力，一直紧绷的弦突然放松了下来。`);
    await era.printAndWait(
      `……${me.name}稍微让${rice.sex}靠着肩膀，让${rice.name}好好休息。这么想着开始迈步的时候…`,
    );
    await bourbon.say_and_wait(`——${rice.sex}的发言，无法理解。`);
    await bourbon.say_and_wait(`如果是这次的比赛内容的话。`);
    await bourbon.say_and_wait(`${rice.sex}应该说「战胜了波旁」才对。`);
    await bourbon.say_and_wait(`对于这孩子来说，这个更重要吧。`);
    era.printButton(`${rice.name}也要加油啊。`, 1);
    await era.input();
    await bourbon.say_and_wait(`应援，十分感谢。那就告辞了。`);
    await rice.say_and_wait(`……理解不能。`);
    era.drawLine();
    await rice.say_and_wait(
      `对、对不起！${rice.name}又，给${
        me.sex_code - 1 ? '姐姐' : '哥哥'
      }大人添麻烦了……！`,
    );
    era.printButton(`因为累了所以没办法吧。`, 1);
    await era.input();
    await rice.say_and_wait(`但是……`);
    era.printButton(`不如来考虑下一场比赛吧。`, 1);
    await era.input();
    await rice.say_and_wait(`欸？……下一场？`);
    era.printButton(`经典赛还没有结束哦。`, 1);
    await era.input();
    await rice.say_and_wait(
      `……说的是呢，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`,
    );
    await rice.say_and_wait(
      `只是侥幸赢下这次的比赛而已，这样就满足了的话，可不行呢。`,
    );
    await era.printAndWait(
      `三冠路线上最后的比赛，草地3000米长距离的【菊花赏】。`,
    );
    await era.printAndWait(
      `对于作为Stayer的${rice.name}而言，这是迄今为止最关键的决胜所！`,
    );
    const change_list = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (change_list[e] = 3));
    get_attr_and_print_in_event(30, change_list, 45) &&
      (await era.waitAnyKey());
  } else if (
    extra_flag.race === race_enum.toky_yus &&
    edu_weeks < 95 &&
    extra_flag.rank <= 5 &&
    extra_flag.rank > 1
  ) {
    await print_event_name('遥远的背影', rice);
    await rice.say_and_wait(`${rice.name}，还是太没用了…`);
    await rice.say_and_wait(`要，更、努力…`);
    await era.printAndWait(`（啪嗒……）`);
    await era.printAndWait(
      `${me.name}撑着${rice.name}，为了带${rice.sex}回去稍作休息而踏出步伐。`,
    );
    await era.printAndWait(`（啪嗒……）`);
    await rice.say_and_wait(`${rice.name}真是太没用了…`);
    await rice.say_and_wait(`下一次，一定会比现在更努力。`);
    const change_list = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (change_list[e] = 2));
    get_attr_and_print_in_event(30, change_list, 45) &&
      (await era.waitAnyKey());
  } else if (
    extra_flag.race === race_enum.kiku_sho &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('平静的宣言', rice);
    await rice.say_and_wait(
      `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。${rice.name}、${
        rice.name
      }……！`,
    );
    await me.say_and_wait(`${rice.name}做到了。`);
    await rice.say_and_wait(`呜……嗯……！`);
    await rice.say_and_wait(
      `${rice.name}、做到了……！${rice.name}也能够做到呢……！`,
    );
    await bourbon.say_and_wait(`…${rice.name}同学。`);
    await rice.say_and_wait(`哇啊啊！波旁同学！？`);
    await rice.say_and_wait(`啊、啊啊。这个、这次的比赛…`);
    await bourbon.say_and_wait(`——嗯、「追上了」呢。`);
    await rice.say_and_wait(`……唔。`);
    await bourbon.say_and_wait(`其实，我无法理解。`);
    await bourbon.say_and_wait(`每次都在说「追上」的${rice.name}同学。`);
    await bourbon.say_and_wait(`比赛中存在的要么是胜利，要么是失败。`);
    await bourbon.say_and_wait(`不存在「追上」这种概念。但是——`);
    await bourbon.say_and_wait(
      `现在，我感到很不甘心。没有拿下这次的【菊花赏】之类的，没能赢之类的。`,
    );
    await bourbon.say_and_wait(`……被${me.name}给追上了呢。`);
    await bourbon.say_and_wait(`${rice.name}同学，听见了吗？`);
    await rice.say_and_wait(`……嗯。`);
    await era.printAndWait(`观众A：「真是精彩的比赛啊！${rice.name}！」`);
    await era.printAndWait(
      `观众B：「${me.name}才是今年的主角！明年我也很期待！！」`,
    );
    await rice.say_and_wait(`……不会吧……`);
    await rice.say_and_wait(`在为${rice.name}鼓掌、吗？`);
    await rice.say_and_wait(`但是，${rice.name}只是…`);
    await bourbon.say_and_wait(`不对。观众们是认可的。`);
    await bourbon.say_and_wait(
      `${rice.name}是今年的经典赛中名副其实的胜利者。`,
    );
    await bourbon.say_and_wait(`我也认同他们的观点。`);
    await bourbon.say_and_wait(`下一次，我一定不会再输给${me.name}。`);
    await bourbon.say_and_wait(`——作为「对手」。`);
    await rice.say_and_wait(`……对，手。`);
    await bourbon.say_and_wait(
      `${rice.name}同学，${me.name}要接下我对${me.name}的挑战吗？`,
    );
    await rice.say_and_wait(`……！${rice.name}……！`);
    await rice.say_and_wait(`${rice.name}也不想输！下一次也要……战胜所有人！`);
    await era.printAndWait(`——${rice.name}的声音是能传递出去的。`);
    await era.printAndWait(`这是在隔壁、甚至在整个会场都能听见的。`);
    await era.printAndWait(`大声的、响亮的宣言。`);
    const change_list = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (change_list[e] = 3));
    get_attr_and_print_in_event(30, change_list, 45) &&
      (await era.waitAnyKey());
  } else if (
    extra_flag.race === race_enum.kiku_sho &&
    edu_weeks < 95 &&
    extra_flag.rank <= 5 &&
    extra_flag.rank > 1
  ) {
    await print_event_name('燃烧的心', rice);
    await rice.say_and_wait(`只差一点了呢。`);
    await rice.say_and_wait(`只差一点就可以追上了，但还是不够！`);
    await rice.say_and_wait(`${rice.name}，不想输！下次一定会赢的。`);
    const change_list = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (change_list[e] = 2));
    get_attr_and_print_in_event(30, change_list, 45) &&
      (await era.waitAnyKey());
  } else if (
    extra_flag.race === race_enum.nikk_sho &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('花瓣、纷飞', rice);
    await rice.say_and_wait(
      `欸嘿嘿……怎么样，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`,
    );
    await rice.say_and_wait(`${rice.name}的奔跑，有好好地在成长吗？`);
    await me.say_and_wait(`嗯，跑得很棒哦！`);
    await rice.say_and_wait(`嗯！那下次也……`);
    await zob_zoy.say_and_wait(`……辛、辛苦了！`);
    await rice.say_and_wait(`！`);
    await zob_zoy.say_and_wait(
      `今、今天只有……我一个人，到这里给${rice.name}应援来了。`,
    );
    await rice.say_and_wait(`啊！谢谢！那个、今天……`);
    await zob_zoy.say_and_wait(`跑得太棒了！`);
    await zob_zoy.say_and_wait(
      `朝着一个目标不断迈进……那个姿态就像是引导民众的女主角一样！`,
    );
    await zob_zoy.say_and_wait(`总有一天会被后世写上书本来讲述的吧……！`);
    await rice.say_and_wait(`呜啊啊啊……夸得太过分了啊……`);
    await zob_zoy.say_and_wait(`啊，对不起……不知不觉就……`);
    await rice.say_and_wait(`没有哦，抱歉。但是，谢谢${me.name}。`);
    await rice.say_and_wait(`虽然有点不好意思……${rice.name}，很高兴哦。`);
    const change_list = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 4).forEach((e) => (change_list[e] = 3));
    get_attr_and_print_in_event(45, change_list, 30) &&
      (await era.waitAnyKey());
  } else if (
    extra_flag.race === race_enum.tenn_spr &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('沐浴在光芒中', rice);
    await rice.say_and_wait(`哈……啊、哈啊……！！`);
    await me.say_and_wait(`很努力了呢！`);
    await rice.say_and_wait(`嗯！做到了哦！${rice.name}——`);
    await urara.say_and_wait(`${rice.name}——酱！好——厉害！！`);
    await rice.say_and_wait(`乌拉拉酱！？`);
    await urara.say_and_wait(`欸嘿嘿~来咯~`);
    await zob_zoy.say_and_wait(`不对！快回来！这里才是哦！`);
    await zob_zoy.say_and_wait(`虽然作为冠军的关系者过来了……`);
    await bourbon.say_and_wait(
      `那我也没关系的吧？我们就是${rice.name}的相关人员。`,
    );
    await bourbon.say_and_wait(`跑得很棒，${rice.name}。首先恭喜${me.name}。`);
    await bourbon.say_and_wait(
      `比赛中的${me.name}，和荒漠英雄起的二名称号「执念之鬼」很相称呢。`,
    );
    await rice.say_and_wait(`……执念之鬼？`);
    await zob_zoy.say_and_wait(`哇、哇！波旁同学！！`);
    await zob_zoy.say_and_wait(`这个称号要保密才行的啊，我不是说过了吗！`);
    await rice.say_and_wait(`…呼呼。`);
    await rice.say_and_wait(
      `欸嘿嘿……${rice.name}，好好地回应了大家呢，在比赛里。`,
    );
    await me.say_and_wait(`让大家都露出了笑容呢。`);
    await rice.say_and_wait(`嗯！`);
    await urara.say_and_wait(`啊哈哈哈，${rice.name}酱也笑眯眯的！`);
    await urara.say_and_wait(`下一次的比赛也要有笑容哦！`);
    await urara.say_and_wait(`我们也会用力地挥手，来给${rice.name}酱应援的！`);
    await rice.say_and_wait(`……是啊，乌拉拉酱。`);
    await rice.say_and_wait(`我也会向着大家……挥手的哦。`);
    await rice.say_and_wait(`大大的……让大家都能看到！`);
    era.drawLine({ content: '胜者舞台幕后' });
    await rice.say_and_wait(`……话是这么说，果然，还是会紧张的啊…`);
    await rice.say_and_wait(`在【天皇赏（春）】的胜者舞台上是中心什么的…`);
    await me.say_and_wait(`挺起胸膛。`);
    await mcqueen.say_and_wait(
      `说的没错。${rice.name}可是战胜了我啊，所以要更自信一点。`,
    );
    await rice.say_and_wait(`啊、麦昆同学！！`);
    await mcqueen.say_and_wait(`的确这个舞台很特别。`);
    await mcqueen.say_and_wait(`所以站在这个舞台上的我们就得专业才是。`);
    await mcqueen.say_and_wait(`不该向那些期待现场演出的人们表达感激之情吗？`);
    await rice.say_and_wait(`没错。`);
    await mcqueen.say_and_wait(`所以，不要害怕舞台。`);
    await mcqueen.say_and_wait(`回应那些期待和想法，在舞台上闪耀。`);
    await mcqueen.say_and_wait(`这是在赛场上奔跑的我们的义务啊。`);
    await era.printAndWait(`之后目白麦昆优雅而高贵地走向舞台。`);
    await me.say_and_wait(`学到了很多呢。`);
    await rice.say_and_wait(`嗯，果然是位很棒的人呢。`);
    await rice.say_and_wait(`${rice.name}也必须回应那些期待和想法。`);
    await rice.say_and_wait(`怀着对大家的感谢之情。`);
    await rice.say_and_wait(`……好！${rice.name}，出发了！！`);
    await era.printAndWait(
      `${rice.name}向着闪耀着光辉的舞台，迈出了${rice.sex}前进的脚步。`,
    );
    era.drawLine({ content: '当天晚上' });
    await rice.say_and_wait(`那个……一回来就这样说的话，虽然有点奇怪……`);
    await rice.say_and_wait(
      `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人！${
        rice.name
      }还有下一个想做的事情。`,
    );
    await rice.say_and_wait(`${rice.name}，想更好地回应期待着自己的人们。`);
    await rice.say_and_wait(`所以，下一次想要参加【宝塚纪念】。`);
    await rice.say_and_wait(`如果，大家都说${rice.name}可以去的话……！`);
    await era.printAndWait(
      `——【宝塚纪念】，那是只有受到粉丝喜爱的赛${rice.get_uma_sex_title()}才能登场的舞台。`,
    );
    await era.printAndWait(`……最开始在学校外面独自哭泣的${rice.sex}。`);
    await era.printAndWait(`现在也拥有这个资格了呢。`);
    await me.say_and_wait(`下次就去参加【宝塚纪念】吧！`);
    await rice.say_and_wait(`嗯！${rice.name}会继续加油的。`);
    await rice.say_and_wait(`然后告诉大家——`);
    await rice.say_and_wait(`非常感谢。`);
    const change_list = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (change_list[e] = 3));
    get_attr_and_print_in_event(30, change_list, 45) &&
      (await era.waitAnyKey());
  } else if (
    extra_flag.race === race_enum.takz_kin &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('盛开的、蓝', rice);
    await rice.say_and_wait(`嗯！${rice.name}会继续加油的。`);
    await me.say_and_wait(`恭喜！`);
    await rice.say_and_wait(
      `…欸嘿嘿。谢谢，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`,
    );
    await rice.say_and_wait(`那个，${rice.name}，在跑的时候也听见了。`);
    await rice.say_and_wait(`大家的声音。`);
    await rice.say_and_wait(
      `……嘿嘿，不行啊。${rice.name}明明说好了要让大家露出笑容的。`,
    );
    await rice.say_and_wait(`只有${rice.name}感到高兴什么的。`);
    await rice.say_and_wait(`真的觉得好幸福…`);
    await rice.say_and_wait(`能够跑宝塚纪念真是太好了。`);
    await me.say_and_wait(`大家也是同样地想法。`);
    await rice.say_and_wait(`大家？`);
    await era.printAndWait(`观众A：「${rice.name}——！！谢谢——！！」`);
    await era.printAndWait(`观众A：今「年的宝塚纪念，简直是最棒的哦——！！」`);
    await rice.say_and_wait(`好厉害……笑容，有好多。`);
    await me.say_and_wait(`是${me.name}守护了大家的笑容呢。`);
    await rice.say_and_wait(`是${rice.name}，吗？`);
    await rice.say_and_wait(`是这样吗？${rice.name}也……做到了。`);
    await rice.say_and_wait(`带给大家幸福，做到了呢！！`);
    await me.say_and_wait(`谢谢${me.name}，${rice.name}。`);
    await rice.say_and_wait(`呜哇啊啊啊——`);
    await era.printAndWait(
      `一边颤抖着肩膀一边哭起来的${rice.sex}，得到了观众们温暖的掌声。`,
    );
    era.drawLine({ content: '到了夜晚' });
    await rice.say_and_wait(`嘶……哈……`);
    await me.say_and_wait(`已经不再哭了呢。`);
    await rice.say_and_wait(`嘿嘿，不能一直哭啊。`);
    await rice.say_and_wait(`因为要在这个舞台上，好好地将笑容传递给大家。`);
    await rice.say_and_wait(`那${rice.name}要去登台了。到大家那里去。`);
    await rice.say_and_wait(`一路顺风。`);
    await rice.say_and_wait(`嗯！`);
    await era.printAndWait(`这一天，${rice.name}将最好的live献给了观众。`);
    await era.printAndWait(`第二天，报纸的头条刊登了${rice.sex}的特写。`);
    await era.printAndWait(
      `——在坡道的草地上绽放的主角，美丽的蔷薇：${rice.name}。`,
    );
    era.drawLine({ content: '那之后' });
    await rice.say_and_wait(
      `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人！${
        rice.name
      }想去参加【有马纪念】！！`,
    );
    await me.say_and_wait(`已经定好了新的目标吗？`);
    await rice.say_and_wait(`嗯！因为，那个！下一次的有马纪念。`);
    await rice.say_and_wait(`波旁同学和麦昆同学都会参加哦！！`);
    await rice.say_and_wait(`所以，${rice.name}也要参赛！`);
    await rice.say_and_wait(`想要进行「最棒的比赛」！！`);
    await me.say_and_wait(`我知道了。`);
    await rice.say_and_wait(
      `哇！谢谢，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人！`,
    );
    await era.printAndWait(`有马纪念和宝塚纪念一样。`);
    await era.printAndWait(
      `都是在粉丝中获得人气的赛${rice.get_uma_sex_title()}才能参加的比赛。`,
    );
    await era.printAndWait(
      `没有在意那参赛条件，${rice.sex}就这么说出来「想要参赛」。`,
    );
    await era.printAndWait(`这也就是说——`);
    era.printButton(`长大了呢。`, 1);
    await era.input();
    await rice.say_and_wait(`欸？${rice.name}的身高，没有长高啊？`);
    await me.say_and_wait(`并不是这个意思。`);
    await rice.say_and_wait(`那是什么意思呢？`);
    await rice.say_and_wait(
      `啊！告诉我嘛~${me.sex_code - 1 ? '姐姐' : '哥哥'}大人——！！`,
    );
    await era.printAndWait(`这一整天，${rice.name}都缠在${me.name}的身边。`); //TODO【京都赛马场】lv+1
    get_attr_and_print_in_event(30, [2, 2, 2, 2, 2], 45);
    await era.waitAnyKey();
  } else if (
    extra_flag.race === race_enum.takz_kin &&
    edu_weeks > 95 &&
    extra_flag.rank <= 5 &&
    extra_flag.rank > 1
  ) {
    await print_event_name('小小的蓝蔷薇', rice);
    await rice.say_and_wait(`那个，${rice.name}啊，在奔跑的时候。`);
    await rice.say_and_wait(`也有听到哦，听到大家的声音。`);
    await rice.say_and_wait(
      `听见大家喊着‘加油——’‘${rice.name}~’，一直鼓励着${rice.name}前进。`,
    );
    await rice.say_and_wait(`嘿嘿，这样不行呢。`);
    await rice.say_and_wait(`明明是${rice.name}要带给大家欢笑的。`);
    await rice.say_and_wait(`结果反而是大家让${rice.name}变得开心。`);
    await rice.say_and_wait(`真的，好幸福。`);
    await era.printAndWait(
      `${rice.name}颤抖着肩膀哭泣，观众们则为${rice.sex}送上温暖的掌声。`,
    );
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('每个人的心中都有那么一朵…', rice);
    await rice.say_and_wait(`好厉害，这声音。`);
    await rice.say_and_wait(`大家，在看着这边。`);
    await rice.say_and_wait(`大家开心的样子，我都能看到哦……！`);
    await me.say_and_wait(`真的很努力了呢。`);
    await rice.say_and_wait(`唔……嗯。${rice.name}，努力了哦……`);
    await rice.say_and_wait(`因为有大家在，${rice.name}努力过了。`);
    await rice.say_and_wait(`真的、真的……非常感谢…大家……！`);
    await era.printAndWait(`这一天，${rice.sex}作为「主角」，`, {
      color: rice.color,
    });
    await era.printAndWait(`给大家带来了，`, {
      color: rice.color,
    });
    await era.printAndWait(`绽放笑容的最棒的比赛。`, {
      color: rice.color,
    });
    get_attr_and_print_in_event(30, [3, 3, 3, 3, 3], 45);
    await era.waitAnyKey();
    //TODO 隐藏事件（要求京都场地比赛3胜及以上）
    // 心中萌发的名为「你」的故事(无文本)效果：速度+10，耐力+10，根性+10；【京都赛马场】lv+2，【良马场】lv+2
  } else if (extra_flag.rank === 1) {
    const edu_marks = new RiceEduMarks();
    if (!edu_marks.girl_friend && era.get('love:30') >= 75) {
      edu_marks.girl_friend = 1;
      await print_event_name('热恋', rice);
      await era.printAndWait([
        rice.get_colored_name(),
        ' 结束了C位的LIVE后， ',
        me.get_colored_name(),
        ' 和她的心情都十分愉悦。',
      ]);
      await era.printAndWait([
        '但是，现在的 ',
        rice.get_colored_name(),
        ' ，正带着妖艳的目光，迈出可爱又急促的小步伐向 ',
        me.get_colored_name(),
        ' 奔来。',
      ]);
      await me.say_and_wait('嗯…');
      await era.printAndWait([
        '身着胜负服的 ',
        rice.get_colored_name(),
        ' 兴奋地双手抱住 ',
        me.get_colored_name(),
        ' 两侧的腹部。',
      ]);
      await era.printAndWait([
        '她带着不可思议的表情抬头仰望 ',
        me.get_colored_name(),
        '，眼中的艳丽满溢而出。',
      ]);
      await rice.say_and_wait([callname, '，', self_name, ' 做了什么坏事吗？']);
      await rice.say_and_wait(['为什么……不抱着 ', self_name, ' 呢？']);
      await era.printAndWait([
        '敌不过 ',
        rice.get_colored_name(),
        ' 湿润起来的眼神，',
        me.get_colored_name(),
        ' 紧紧抱住了少女娇小的身躯。',
      ]);
      await era.printAndWait([
        '时间流逝，觉得差不多该换衣服解散的 ',
        me.get_colored_name(),
        '，抓住了 ',
        rice.get_colored_name(),
        ' 的肩膀。',
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        ' 恋恋不舍地摩挲了下 ',
        me.get_colored_name(),
        ' 的手指，说了声回头见便走向更衣室。',
      ]);
      await era.printAndWait([
        '以前无论做什么都小心翼翼，战战兢兢的 ',
        rice.get_colored_name(),
        ' ，现在却像小恶魔一样和 ',
        me.get_colored_name(),
        ' 亲昵。',
      ]);
      await era.printAndWait([
        'LIVE之后的一次训练后， ',
        rice.get_colored_name(),
        ' 穿着体操服向 ',
        me.get_colored_name(),
        ' 走来。',
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        ' 把体操服号码牌的部分压在 ',
        me.get_colored_name(),
        ' 身上，享受着 ',
        me.get_colored_name(),
        ' 的气味。',
      ]);
      await era.printAndWait(
        '心想有女儿的父亲大概是这种心情吧？更用力地回抱住她。',
      );
      await me.say_and_wait([
        '很痒哦，',
        sys_get_colored_callname(0, 30),
        '。',
      ]);
      await rice.say_and_wait('诶？');
      await era.printAndWait([
        me.get_colored_name(),
        ' 催促 ',
        rice.get_colored_name(),
        ' 去换衣服。',
      ]);
      await era.printAndWait([
        '目送她步履蹒跚的身影， ',
        me.get_colored_name(),
        ' 深切认识到 ',
        me.get_colored_name(),
        ' 们之间的关系产生了某种变化。',
      ]);
      await era.printAndWait([
        '最近， ',
        rice.get_colored_name(),
        ' 对 ',
        me.get_colored_name(),
        ' 的亲昵之举逐渐过激。',
      ]);
      await era.printAndWait([
        '搂抱、亲吻、拉着 ',
        me.get_colored_name(),
        ' 的手不小心摸了摸胸部，这些甚至不会让 ',
        me.get_colored_name(),
        ' 觉得有问题了。',
      ]);
      await sys_love_uma_in_event(30);
    } else {
      await print_event_name('竞赛获胜', rice);
      await rice.say_and_wait(
        `太棒、太棒了，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。${
          rice.name
        }赢了呢…`,
      );
      await me.say_and_wait(`再抬头挺胸一点吧。`);
      await rice.say_and_wait(`抬头挺胸？那个……`);
      await rice.say_and_wait(`而且，还拿到了第一！真的要满含感激地收下！`);
      await rice.say_and_wait(
        `哼、哼哼！像这样吗？${rice.name}有抬头挺胸了吗？`,
      );
      era.printButton(`我对${me.name}感到骄傲哦。`, 1);
      era.printButton(`下次也要赢哦。`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await rice.say_and_wait(
          `对${rice.name}感到骄傲？总、总觉得有点难为情…`,
        );
        await rice.say_and_wait(
          `不过，能够让${me.sex_code - 1 ? '姐姐' : '哥哥'}大人觉得骄傲，${
            rice.name
          }也觉得很高兴…`,
        );
        await rice.say_and_wait(`虽然很高兴，又觉得难为情…`);
        await rice.say_and_wait(`唔唔，${rice.name}有点，搞不清楚了~`);
      } else {
        await rice.say_and_wait(
          `嗯、嗯！下次的比赛也要赢，这样才能让大家感到高兴。`,
        );
        await rice.say_and_wait(
          `所以，${
            me.sex_code - 1 ? '姐姐' : '哥哥'
          }大人。再麻烦${me.name}多指教${rice.name}训练了！`,
        );
      }
    }
  } else if (extra_flag.rank <= 5) {
    //通用比赛入着
    await print_event_name('竞赛上榜', rice);
    await rice.say_and_wait(`呼…太好了。${rice.name}，有好好努力了哦…`);
    await rice.say_and_wait(`下次，想拿到第一名呢…开、开玩笑的，呵呵。`);
    era.printButton(`${me.name}很努力呢。`, 1);
    era.printButton(`下次要拿第一名！`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await rice.say_and_wait(
        `嗯、嗯！谢谢${me.name}，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人！`,
      );
      await rice.say_and_wait(
        `不过${rice.name}觉得，是因为和${
          me.sex_code - 1 ? '姐姐' : '哥哥'
        }在一起，才能这么努力。`,
      );
      await rice.say_and_wait(
        '虽然${chara_talk.name}自己一个人很没用，但只要在一起就能更努力…',
      );
    } else {
      await rice.say_and_wait('那、那个…嗯、嗯……下次会努力的！');
      await rice.say_and_wait('果、果然，还是要以第一名为目标呢…');
      await rice.say_and_wait('得要更加努力才行！');
    }
  } else {
    await print_event_name('竞赛败北', rice);
    await rice.say_and_wait(`呜呜…${rice.name}输了…`);
    await rice.say_and_wait(
      `对不起，${rice.name}让${me.sex_code - 1 ? '姐姐' : '哥哥'}大人失望了吧…`,
    );
    era.printButton(`${me.name}很努力呢。`, 1);
    era.printButton(`下次要拿第一名！`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await rice.say_and_wait(
        `那个……嗯。${me.sex_code - 1 ? '姐姐' : '哥哥'}大人说的没错。`,
      );
      await rice.say_and_wait(
        `${rice.name}下次一定会赢的。${
          me.sex_code - 1 ? '姐姐' : '哥哥'
        }大人，要好好看着${rice.name}哦。`,
      );
    } else {
      await rice.say_and_wait('原因…也对，只是一股劲地努力，还是会再输掉。');
      await rice.say_and_wait('找出输掉的原因，活用在下一次的比赛。');
      await rice.say_and_wait(
        '就算再怎么没用，一直沮丧下去的话，只会一直都这么没用。',
      );
      await rice.say_and_wait(
        `${rice.name}要找到这次输掉的原因。然后，下一次想要赢！`,
      );
      await era.printAndWait(`后来${me.name}们重新检讨这次比赛落败的因素。。`);
      await era.printAndWait(`${rice.name}不可思议地情绪高涨。`);
    }
  }
};

handlers[event_hooks.school_atrium] = async (_, __, event_object) => {
  if (era.get('flag:当前互动角色') !== 30) {
    add_event(event_hooks.school_atrium, event_object);
    return;
  }
  const chara26_talk = get_chara_talk(26),
    me = get_chara_talk(0),
    edu_weeks = era.get('cflag:30:育成回合计时');
  if (edu_weeks === 47 + 46) {
    await print_event_name('劲敌的不幸', rice);
    await era.printAndWait(`经过菊花赏后，${rice.name}的身边出现了某些变化。`);
    await era.printAndWait(
      `赛${rice.sex_code - 1 ? '马娘' : '马郎'}A：「啊、是${rice.name}酱！」`,
    );
    await rice.say_and_wait(`咦……咦！？在叫、${rice.name}吗？`);
    await era.printAndWait(
      `赛${
        rice.sex_code - 1 ? '马娘' : '马郎'
      }B：「不用那么紧张的！呼呼，上次的菊花赏真精彩啊！」`,
    );
    await era.printAndWait(
      `赛${
        rice.sex_code - 1 ? '马娘' : '马郎'
      }A：「嗯嗯！真的有种被感动到了的感觉！」`,
    );
    await era.printAndWait(
      `赛${rice.sex_code - 1 ? '马娘' : '马郎'}B：「真的真的！那个时候的${
        rice.name
      }同学。咕……超认真的样子太帅了！」`,
    );
    await rice.say_and_wait(`欸欸欸？说${rice.name}帅气什么的…`);
    await era.printAndWait(
      `所以今后，也要加油哦！我们也会应援${rice.name}酱的。`,
    );
    await rice.say_and_wait(`欸！？嗯……嗯！！`);
    await me.say_and_wait(`能够有应援真的是太高兴了。`);
    await rice.say_and_wait(`啊，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人？`);
    await rice.say_and_wait(
      `哪、哪里…是波旁同学实在是太厉害了所以才来跟${rice.name}打招呼而已。`,
    );
    await rice.say_and_wait(`菊花赏上的掌声也是，因为有波旁同学在——`);
    await me.say_and_wait(`因为你是${rice.sex}的对手嘛。`);
    await rice.say_and_wait(
      `呜呜……啊，连${me.sex_code - 1 ? '姐姐' : '哥哥'}大人都抬举过头了啦……`,
    );
    await rice.say_and_wait(`不过，帅气吗？欸嘿嘿…`);
    await era.printAndWait(`——但是第二天，状况发生了转变。`);
    await me.say_and_wait(`${rice.name}？`);
    await rice.say_and_wait(`……不要靠近啦！`);
    await era.printAndWait(
      `赛${rice.sex_code - 1 ? '马娘' : '马郎'}A：「……${
        rice.name
      }同学，果然……会在意的吧。」`,
    );
    await era.printAndWait(
      `赛${
        rice.sex_code - 1 ? '马娘' : '马郎'
      }B：「呀~…那是肯定的吧。换做是我的话也会觉得讨厌的。」`,
    );
    era.drawLine({ content: '教学楼旁的阴影下。' });
    await rice.say_and_wait(`……唔……为什么，${rice.name}一直，都是这样？`);
    await rice.say_and_wait(`总是给周围人带来不幸，给别人带来麻烦！`);
    await me.say_and_wait(`……${rice.name}。`);
    await rice.say_and_wait(`${me.sex_code - 1 ? '姐姐' : '哥哥'}大人……！`);
    await rice.say_and_wait(`……不行啊！靠近${rice.name}的话，会变得不幸的。`);
    await rice.say_and_wait(
      `波旁同学，一直以来无论再怎么艰苦的训练都……没有受过伤啊？`,
    );
    await rice.say_and_wait(
      `但是都是因为${rice.name}…因为${rice.name}成了${rice.sex}的对手……`,
    );
    await rice.say_and_wait(`3年里最重要的时期就这么被毁了……`);
    await me.say_and_wait(`这是从本人那里听说的吗？`);
    await rice.say_and_wait(`…就算没有听见，${rice.name}也知道的。`);
    await rice.say_and_wait(`因为……${rice.name}是……`);
    await me.say_and_wait(`原来没有听说啊。`);
    await rice.say_and_wait(
      `欸！？哥……${me.sex_code - 1 ? '姐姐' : '哥哥'}大人？`,
    );
    await era.printAndWait(`你带着${rice.name}去医务室找到了美浦波旁。`);
    await chara26_talk.say_and_wait(`……。`);
    await rice.say_and_wait(`……。`);
    await me.say_and_wait(`这么突然，真是抱歉。`);
    await chara26_talk.say_and_wait(`不会，这一天里他人探望的行为已经习惯了。`);
    await chara26_talk.say_and_wait(`所以来这里是干什么呢？`);
    await rice.say_and_wait(`！……对、对不起。对不起……对不起……！`);
    await rice.say_and_wait(
      `都是${rice.name}的关系…让你受伤了，浪费掉了这么重要的时期。`,
    );
    await chara26_talk.say_and_wait(`不好意思。`);
    await chara26_talk.say_and_wait(
      `为什么要道歉？无法推测出我的受伤和${rice.name}之间有什么因果关系。`,
    );
    await rice.say_and_wait(
      `但是……在${rice.name}成为你的对手之前都没有受伤过的啊！`,
    );
    await chara26_talk.say_and_wait(
      `理解不能。受伤的发生率是一定的，因此认为那个理论没有物理根据。`,
    );
    await chara26_talk.say_and_wait(
      `倒不如说，如果你主张你会招来不幸，那就应该由我来验证。`,
    );
    await rice.say_and_wait(`让、波旁同学来？`);
    await chara26_talk.say_and_wait(`嗯，我把你当成了竞争对手。`);
    await chara26_talk.say_and_wait(
      `那是因为我很期待，在菊花赏中感受到了成长的可能性。`,
    );
    await chara26_talk.say_and_wait(
      `如果有了你这个竞争对手，我可以预见更大的成长。`,
    );
    await chara26_talk.say_and_wait(
      `并且和你一起的话，存在达成史上最高的比赛—「奇迹」的可能性。`,
    );
    await chara26_talk.say_and_wait(`我的不幸和${rice.name}无关。`);
    await rice.say_and_wait(`……`);
    await chara26_talk.say_and_wait(
      `${rice.name}是让我不幸的存在吗？还是说是呼唤奇迹的存在？`,
    );
    await rice.say_and_wait(`……那个……`);
    await era.printAndWait(
      `———很长的一段时间，${rice.name}都在默默地接受着美浦波旁的视线。`,
    );
    get_attr_and_print_in_event(30, [0, 0, 0, 5, 0], 0);
    await era.waitAnyKey();
  }
  return true;
};

/**
 * @param {HookArg} hook
 * @param {TrainFailParams} extra_flag
 */
handlers[event_hooks.train_fail] = async (hook, extra_flag) => {
  extra_flag['args'] = extra_flag.fumble
    ? fumble_result.fumble
    : fumble_result.fail;
  if (extra_flag.fumble) {
    await era.printAndWait('严禁逞强！', {
      color: rice.color,
      fontSize: '1.5rem',
    });
    era.println();
    await rice.say_and_wait(`唔唔……`);
    era.printButton('「要好好休息！」', 1);
    era.printButton('「用毅力克服！」', 2);
    await era.input();
  } else {
    await print_event_name('保重身体！', rice);
    await rice.say_and_wait(`唔……？`);
  }
};

handlers[event_hooks.out_church] = async (_, __, event_object) => {
  if (era.get('flag:当前互动角色') !== 30) {
    add_event(event_hooks.out_church, event_object);
    return;
  }
  const me = get_chara_talk(0),
    edu_weeks = era.get('cflag:30:育成回合计时');
  if (edu_weeks === 95 + 1) {
    await print_event_name('新年参拜', rice);
    await era.printAndWait(
      `新年的第一天，你收到${rice.name}的邀请，一起前往新年参拜。`,
    );
    await rice.say_and_wait(
      `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人，${
        rice.name
      }，想好了一个愿望哦。`,
    );
    await rice.say_and_wait(
      `所以想让${me.sex_code - 1 ? '姐姐' : '哥哥'}大人听一听，可以吗？`,
    );
    await me.say_and_wait(`不去和神明许愿，而是告诉我吗？`);
    await rice.say_and_wait(
      `嗯！这个愿望，不和${me.sex_code - 1 ? '姐姐' : '哥哥'}大人说是不行的。`,
    );
    await rice.say_and_wait(`${rice.name}，想参加下次的春季天皇赏。`);
    await me.say_and_wait(`为什么？`);
    await rice.say_and_wait(`…因为，想要变得更强。`);
    await rice.say_and_wait(`不继续向前迈进的话是不行的。`);
    await rice.say_and_wait(`已经说过……不能再害怕了。`);
    await me.say_and_wait(`你做好了觉悟呢。`);
    await rice.say_and_wait(`${rice.name}发现了，光只有想是不行的。`);
    await rice.say_and_wait(
      `为了不让…眼前的人感到悲伤，得要先付出行动…才可以。`,
    );
    await era.printAndWait(`${rice.name}从新年开始，就制定了新的目标，`);
    await era.printAndWait(
      `为了不辜负${rice.sex}的这股干劲，${me.actual_name}和${rice.name}把新年的抱负写上了绘马。`,
    );
    await rice.say_and_wait(`神明大人，${rice.name}会加油的。`);
    await rice.say_and_wait(
      `能和${me.sex_code - 1 ? '姐姐' : '哥哥'}大人一起来参拜真是太好了！`,
    );
    await rice.say_and_wait(
      `呼呼，接下来轮到${me.sex_code - 1 ? '姐姐' : '哥哥'}大人了呢。`,
    );
    await rice.say_and_wait(
      `${rice.name}也会一起祈求的，希望神明能帮忙实现愿望…`,
    );
    await era.printAndWait(`你的愿望是……`);
    era.printButton(`希望${rice.name}永远健健康康的。`, 1);
    era.printButton(`希望能一直支持${rice.name}跑下去。`, 2);
    era.printButton(`我想要力量…！`, 3);
    const ret = await era.input();
    if (ret === 1) {
      await rice.say_and_wait(`！`);
      await rice.say_and_wait(
        `嘿嘿，好的。${rice.name}会注意，不让${
          me.sex_code - 1 ? '姐姐' : '哥哥'
        }大人担心。`,
      );
      await era.printAndWait(
        `在新年参拜的摊贩补充了营养后，${me.actual_name}和${rice.name}便开始进行训练。`,
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
      await rice.say_and_wait(
        `呵呵，说这么温柔的话，${rice.name}会很伤脑浆的。`,
      );
      await rice.say_and_wait(
        `真的是，没有时间哭泣了。${rice.name}得好好加油才行…`,
      );
      await era.printAndWait(
        `你和${rice.name}静静地对视了一阵子，便开始着手训练。`,
      );
      get_attr_and_print_in_event(30, [5, 5, 5, 5, 5], 0);
      sys_love_uma(30, 5);
      await era.waitAnyKey();
    } else {
      await rice.say_and_wait(`力量……这个、那个啊…`);
      await rice.say_and_wait(`${rice.name}也可以来帮忙吗？`);
      await rice.say_and_wait(`那个，肌肉锻炼啦、并跑啦……`);
      await me.say_and_wait(`并不是那个意思来着。`);
      await rice.say_and_wait(`呜欸？`);
      await rice.say_and_wait(
        `但是，如果真的有什么${rice.name}可以帮忙的事，请告诉我。`,
      );
      await rice.say_and_wait(
        `${rice.name}，为了${
          me.sex_code - 1 ? '姐姐' : '哥哥'
        }大人的话，什么事情都可以……会来帮忙的。`,
      );
      await era.printAndWait(
        `……你感受到了${rice.name}体贴的心意，回到了学校。`,
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
    edu_weeks = era.get('cflag:30:育成回合计时');
  if (edu_weeks === 95 + 21) {
    await print_event_name('万有一失', rice);
    await era.printAndWait(`把参加宝塚纪念定为目标后……`);
    await era.printAndWait(
      `路人B：「我把我的粉丝投票，投给了你哦！绝对要拿第一啊！」`,
    );
    await rice.say_and_wait(`哇！？谢……谢谢你的支持！`);
    await era.printAndWait(
      `商店街的老板：「啊，你难不成是……${rice.name}吗？」`,
    );
    await rice.say_and_wait(`是！那个、是的没错……`);
    await era.printAndWait(`商店街的老板：「嘛！一定要在我家吃炸肉饼！」`);
    await era.printAndWait(`商店街的老板：「我家的孩子是你的粉丝呢。」`);
    await rice.say_and_wait(`欸！？这样可以吗？`);
    era.drawLine();
    await rice.say_and_wait(`欸嘿嘿……令人开心的事情竟然有这么多，真的好吗？`);
    await me.say_and_wait(`要连带着这份一起努力呢。`);
    await rice.say_and_wait(`说的是啊…`);
    await chara301_talk.say_and_wait(`啊，两位都找到了！`);
    await me.say_and_wait(`是有什么事吗？`);
    await chara301_talk.say_and_wait(`其实是这样的！`);
    await chara301_talk.say_and_wait(`刚才阪神赛马场传来了消息……！！`);
    await chara301_talk.say_and_wait(
      `在【粉丝人气投票】中，${rice.name}可是遥遥领先的第一哦！`,
    );
    await chara301_talk.say_and_wait(`希望能来参加开幕仪式！`);
    await rice.say_and_wait(`欸欸欸欸欸？`);
    await chara301_talk.say_and_wait(`所以，要在明天进行彩排。`);
    await rice.say_and_wait(`……哇。${rice.name}是……人气第一？开幕、仪式？`);
    await chara301_talk.say_and_wait(`啊哈哈…抱歉。我好像也有点太兴奋了。`);
    await chara301_talk.say_and_wait(
      `详细内容已经整理成了文件，请稍后确认，讨论一下吧。`,
    );
    await chara301_talk.say_and_wait(`那，我告辞了。`);
    await era.printAndWait(`骏川手纲离开后…`);
    await rice.say_and_wait(`……好棒，${rice.name}是，大家的……`);
    await me.say_and_wait(`去参加彩排吧。`);
    await rice.say_and_wait(`嗯！`);
    await era.printAndWait(`第二天，你和${rice.name}一起，去到了阪神赛马场。`);
    await era.printAndWait(
      `工作人员A：「${rice.name}选手！接下来是献上花束时站的位置——」`,
    );
    await rice.say_and_wait(`是、是的！`);
    await era.printAndWait(
      `工作人员B：「啊，那个结束之后，我们也想拜托你一件事——」`,
    );
    await rice.say_and_wait(`呜哇……我知道了~！`);
    await era.printAndWait(`各种各样的彩排告一段落后…`);
    await rice.say_and_wait(`呼啊……`);
    await me.say_and_wait(`稍微休息一下吧。`);
    await rice.say_and_wait(`欸嘿嘿，没问题的，因为……`);
    await era.printAndWait(
      `工作人员C：「抱歉，${rice.name}选手！想拜托你再调整一次麦克风…」`,
    );
    await rice.say_and_wait(`好的！来、来了！`);
    await rice.say_and_wait(`…我想要坚持到最后。想要让大家都能露出笑容。`);
    era.drawLine({ content: '登场舞台上' });
    await rice.say_and_wait(`那么，大家……还请大家多多支持${rice.name}！！`);
    await era.printAndWait(`工作人员A：「当然、没问题！！」`);
    await era.printAndWait(`那今天的彩排就到此为止了！`);
    await rice.say_and_wait(`呼……终于，结束了……呢。`);
    await me.say_and_wait(`没事吧？`);
    await rice.say_and_wait(`嗯，没事的哦。`);
    await rice.say_and_wait(`虽然第一次还是有很多不熟练。`);
    await rice.say_and_wait(`真正开幕的时候，大家都聚到这里的时候。`);
    await rice.say_and_wait(`我想那时候我就可以做到了。`);
    await rice.say_and_wait(`一点也不觉得累哦。`);
    await rice.say_and_wait(`更多、更多……想要更加努力。`);
    await era.printAndWait(
      `工作人员B：「啊，${rice.name}选手！好像落下东西了哦——」`,
    );
    await rice.say_and_wait(`欸！？抱歉！现在就去拿！`);
    await rice.say_and_wait(`呀啊！？`);
    await era.printAndWait(`吧啦……吧啦吧啦……哐——！`);
    await era.printAndWait(
      `工作人员C：「怎么回事！？门倒下来了——${rice.name}，危——」`,
    );
    await era.printAndWait(`千钧一发之际，你只来得及抱住${rice.name}。`);
    await me.say_and_wait(`没事吧？`);
    await era.printAndWait(`咚！`, { fontSize: '2.5rem' });
    await rice.say_and_wait(`哥、${me.sex_code - 1 ? '姐姐' : '哥哥'}大人！？`);
    era.drawLine();
    await rice.say_and_wait(
      `呼……呜……${me.sex_code - 1 ? '姐姐' : '哥哥'}大人……`,
    );
    await me.say_and_wait(`这里。`);
    await rice.say_and_wait(
      `啊、${me.sex_code - 1 ? '姐姐' : '哥哥'}大人！${
        me.sex_code - 1 ? '姐姐' : '哥哥'
      }大人！！没事吗！？有哪里痛吗？`,
    );
    await era.printAndWait(`……看样子你是在保护${rice.name}的时候，撞到了头。`);
    await me.say_and_wait(`好像没事了。`);
    await rice.say_and_wait(`真、真的吗？但……但是还是去医院——`);
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
    await rice.say_and_wait(`但……但是大家，都已经足够……`);
    await era.printAndWait(`工作人员A：「——这次的仪式，还有宝塚纪念。」`);
    await era.printAndWait(`工作人员A：「有消息说阪神的举办会被推迟。」`);
    await rice.say_and_wait(`……！`);
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
    await rice.say_and_wait(`那样的话，就赶不上【宝塚纪念】了……`);
    await era.printAndWait(
      `工作人员A：「嗯。为了不发生这样的事情，我们每天都在努力……」`,
    );
    await era.printAndWait(`工作人员A：「目前为止都还没有过的事例……」`);
    await era.printAndWait(
      `工作人员A：「对二位和期待着宝塚纪念的大家，实在是非常抱歉！」`,
    );
    await rice.say_and_wait(`以前都还有没有，${rice.name}来了，突然…`);
    await rice.say_and_wait(`……`);
    await era.printAndWait(`难道是，${rice.name}的…缘故？`, {
      color: rice.color,
      fontSize: '0.75rem',
    });
    await era.printAndWait(`那个微小的声音，不知为何却回响得特别巨大——`);
    get_attr_and_print_in_event(30, [0, 0, 0, 5, 0], 0);
    await era.waitAnyKey();
  }
  return true;
};

handlers[event_hooks.train_success] = async (hook, extra_flag) => {
  era.print(`${rice.name} 的 ${attr_names[extra_flag.train]} 训练顺利成功了……`);
  if (Math.random() < 0.2 * extra_flag.stamina_ratio) {
    const me = get_chara_talk(0);
    await print_event_name('额外自主训练', rice);
    await era.printAndWait(`和${rice.name}一起完成训练之后——`);
    await rice.say_and_wait(
      `咦？${me.sex_code - 1 ? '姐姐' : '哥哥'}大人还不回去吗？`,
    );
    era.printButton(`得为明天的训练做准备。`, 1);
    era.printButton(`看${rice.name}看入迷了。`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await rice.say_and_wait(
        `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人…为了${
          rice.name
        }，还要继续工作吗？`,
      );
    } else {
      await rice.say_and_wait(
        `呜啊啊啊，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人！`,
      );
    }
    await me.say_and_wait(`${rice.name}先回去休息吧。`);
    await rice.say_and_wait('……嗯，我知道了。');
    await rice.say_and_wait(`再见，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`);
    era.drawLine();
    await era.printAndWait(`当你完成了明天训练的准备工作，踏上归途的时候。`);
    await era.printAndWait(
      `在训练场上，你看到了还在奔跑的${rice.name}的身影。`,
    );
    await rice.say_and_wait('哈啊……哈啊……还、还能……');
    await rice.say_and_wait(`${rice.name}还可以继续，不努力的话……`);
    await me.say_and_wait(`自主训练？`);
    await rice.say_and_wait(`啊…${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`);
    await rice.say_and_wait(`被你看见了呢……`);
    await rice.say_and_wait(
      `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人为了${
        rice.name
      }而在努力。这样的话，${rice.name}也得加把劲才行！`,
    );
    era.printButton(`那就陪你再稍微训练一下吧。`, 1);
    era.printButton(`有这份心意就很高兴了。`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await rice.say_and_wait(
        `嗯，谢谢你，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人！`,
      );
    } else {
      await rice.say_and_wait(`有这份心意就很高兴了。`);
      await rice.say_and_wait(
        `唔……但是，${rice.name}也想帮上${
          me.sex_code - 1 ? '姐姐' : '哥哥'
        }大人的忙。`,
      );
    }
    await era.printAndWait(`之后，你在一旁看着${rice.name}进行额外的训练。`);
    era.drawLine({ content: '训练结束后' });
    era.printButton(`一个人回去真寂寞呢——`, 1);
    await era.input();
    await rice.say_and_wait(`欸？`);
    await rice.say_and_wait(`这是说……要和${rice.name}一起吗？`);
    await rice.say_and_wait(`米、${rice.name}这就去换衣服！请稍微，等一下。`);
    await era.printAndWait(
      `之后，你和换好了衣服的${rice.name}一起踏上了回家的路。`,
    );
  }
};

handlers[event_hooks.race_start] = async () => {
  const me = get_chara_talk(0);
  await print_event_name('武者的颤抖', rice);
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      await rice.say_and_wait(`唔唔…唔唔……`);
      await me.say_and_wait(`状况不好吗？`);
      await rice.say_and_wait(`咦？不、不是的。只是，有点紧张而已…`);
      await rice.say_and_wait(`不过，已经不要紧了。`);
      await rice.say_and_wait(
        `像这样和${me.sex_code - 1 ? '姐姐' : '哥哥'}大人说话，就觉得很安心。`,
      );
      await rice.say_and_wait(
        `${rice.name}会加油的，要好好看着${rice.name}哦，${
          me.sex_code - 1 ? '姐姐' : '哥哥'
        }大人！`,
      );
      break;
    case 1:
      await rice.say_and_wait(`再来就只要尽力奔跑，没错吧？哥哥大人！`);
      break;
    case 2:
      await rice.say_and_wait(`米浴努力跑完全程的！要加油——喔！`);
      break;
    case 3:
      await rice.say_and_wait(`米浴努力跑完全程的！要加油——喔！`);
      break;
    case 4:
      await rice.say_and_wait(
        `都还没开始跑，米浴就预感会是一场好比赛。米浴今天，特别地期待！`,
      );
      break;
    case 5:
      await rice.say_and_wait(`呼，好……！还没到开始时间吗？`);
      break;
    case 6:
      await rice.say_and_wait(
        `开、开始发抖了……那个，哥哥大人。米浴可以，稍微握一下你的手吗？`,
      );
      break;
    case 7:
      await rice.say_and_wait(`因为想带给大家幸福……米浴会全力奔跑的！`);
      break;
  }
};

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
    event_marks = new RiceEduMarks();
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
    `之后，${chara_talk.name}不断说着${me.actual_name}有多好，讲了好一阵子。`,
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
    event_marks = new RiceEduMarks();
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
    `——于是隔天，${me.actual_name}和${chara_talk.name}一起来到了阪神赛场。`,
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
    event_marks = new RiceEduMarks();
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
 * @param extra_flag
 * @param {EventObject} event_object
 * @returns {Promise<*>}
 */
module.exports = async (hook, extra_flag, event_object) => {
  if (!handlers[hook.hook]) {
    throw new Error();
  }
  return await handlers[hook.hook](hook, extra_flag, event_object);
};
