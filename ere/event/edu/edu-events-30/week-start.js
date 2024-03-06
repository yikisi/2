const era = require('#/era-electron');

const CharaTalk = require('#/utils/chara-talk');

const chara_talk = new CharaTalk(30);

const print_event_name = require('#/event/snippets/print-event-name');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { location_enum } = require('#/data/locations');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const your_name = era.get('callname:0:-2');
const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');

module.exports = async function () {
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
    await print_event_name('湖泊中绽放的花朵', chara_talk);
    await chara_talk.say_and_wait(
      `哇……！观众…好多……！而且大家的眼神都闪闪发光。`,
    );
    await era.printAndWait(
      `这天，${CharaTalk.me.actual_name}和 ${chara_talk.name}一起来到【天皇赏（春）】的比赛场地来观摩学习，这是因为……`,
    );
    era.drawLine({ content: '1周前，对 ${chara_talk.name}进行训练的中途。' });
    await era.printAndWait(
      `托着脸颊正用一种近乎让人感到危险的眼神，欣赏着这一切的——。`,
    );
    await era.printAndWait(
      `元气赛${chara_talk.get_uma_sex_title()}A：「呵啊…哈啊…」`,
      {
        color: chara41_talk.color,
      },
    );
    await era.printAndWait(
      `元气赛${chara_talk.get_uma_sex_title()}A：「 ${
        chara_talk.name
      }同~学…请等一下……。」`,
      {
        color: chara41_talk.color,
      },
    );
    await chara_talk.say_and_wait(`欸？怎、怎么了？`);
    await era.printAndWait(
      `元气赛${chara_talk.get_uma_sex_title()}A：「不，其实我从刚才开始就为了完成学级委员长的使命而擅自在跟着跑。」`,
      {
        color: chara41_talk.color,
      },
    );
    await chara41_talk.say_and_wait(
      ` ${chara_talk.name}同学的耐力实在是太棒了！所以、我有一个提案！`,
    );
    await chara41_talk.say_and_wait(`一起，去天皇赏（春）观摩学习怎么样？`);
    await chara41_talk.say_and_wait(
      `拥有着能够制霸长距离的速度的赛${chara_talk.get_uma_sex_title()}们都在那里！`,
    );
    await chara_talk.say_and_wait(`一起？天皇……赏？`);
    await chara41_talk.say_and_wait(`嗯，一起去！`);
    await chara41_talk.say_and_wait(
      `帮助朋友发掘出隐藏的力量，这也是委员长的职责！`,
    );
    await era.printAndWait(`正如樱花进王所说。`);
    await era.printAndWait(
      ` ${chara_talk.name}的长距离……的确有着钢铁般的素质。`,
    );
    await era.printAndWait(
      `【天皇赏（春）】也迟早会成为${chara_talk.sex}目标里舞台的一部分吧。`,
    );
    era.printButton(`去京都参观学习吧。`, 1);
    await era.input();
    await chara41_talk.say_and_wait(`太好了！只有一个人去的话就太寂寞了！`);
    await chara41_talk.say_and_wait(`顺带一提，那里的点心只卖300円哦！`);
    await chara_talk.say_and_wait(`……总觉得，有点像郊游呢。`);
    await chara_talk.say_and_wait(`诶嘿嘿，好期待啊！`);
    await era.printAndWait(`回到现在。`);
    await chara41_talk.say_and_wait(`啊~！多么激烈的追逐！`);
    await chara41_talk.say_and_wait(`我，要到更前面去看看！！`);
    get_attr_and_print_in_event(30, [0, 5, 0, 0, 0], 0);
    await era.waitAnyKey();
  } else if (edu_weeks === 47 + 1) {
    await print_event_name('新年的抱负', chara_talk);
    await era.printAndWait(
      `今年就要开始挑战经典赛了。当${your_name}为了收集情报而正在收看电视节目的时候——`,
    );
    await era.printAndWait(`电视：哎呀，这次的经典赛，有趣的面孔正在齐聚呢。`);
    await era.printAndWait(
      `电视：在短距离上没有敌手的樱花进王， ${chara_talk.name}也在出赛名单上，不过果然——`,
    );
    await era.printAndWait(
      `电视：美浦波旁，绝对不能错过。因为${
        chara_talk.sex
      }可是未来三冠赛${chara_talk.get_uma_sex_title()}候补！`,
    );
    await chara_talk.say_and_wait(
      `……${your_name}好，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`,
    );
    era.printButton(` ${chara_talk.name}！？`, 1);
    await era.input();
    await chara_talk.say_and_wait(`嗯。是 ${chara_talk.name}哦。`);
    await chara_talk.say_and_wait(
      `嘿嘿，是来恭贺新年的，给${your_name}添麻烦了吗？`,
    );
    era.printButton(`没什么麻烦的哦。`, 1);
    await era.input();
    await chara_talk.say_and_wait(`啊……太好了。`);
    await chara_talk.say_and_wait(
      `欸嘿嘿，听我说哦。今天早上，乌拉拉酱对我说了。`,
    );
    era.drawLine({ content: '早上' });
    await chara52_talk.say_and_wait(`因为是新年所以来吃泡芙吧！`);
    await chara52_talk.say_and_wait(`……泡芙好吃吗？`);
    era.drawLine({ content: '回到现在' });
    era.printButton(`难道不好吃吗？`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `呼呼哈哈哈、是的呢。 ${chara_talk.name}也说了同样的话。`,
    );
    await chara_talk.say_and_wait(`然后，那个…`);
    await chara_talk.say_and_wait(
      ` ${chara_talk.name}想和${
        me.sex_code - 1 ? '姐姐' : '哥哥'
      }大人一起讨论新年的抱负，想讨论今年的目标……`,
    );
    await chara_talk.say_and_wait(`不行、吗？`);
    era.printButton(`好啊。`, 1);
    await era.input();
    await chara_talk.say_and_wait(`嘿嘿，太棒了！要订什么目标好呢？`);
    await chara_talk.say_and_wait(
      `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人，想要立下怎样的目标呢？`,
    );
    era.printButton(`一定要让 ${chara_talk.name}拿下经典赛的优胜。`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人……！`,
    );
    await chara_talk.say_and_wait(
      `…… ${chara_talk.name}也一样，可以立下今年的目标吗？`,
    );
    era.printButton(`当然。`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      ` ${chara_talk.name}，为了实现自己和${
        me.sex_code - 1 ? '姐姐' : '哥哥'
      }大人的目标，会努力的！`,
    );
    era.printButton(`就是这种感觉！`, 1);
    era.printButton(`同时要保重身体哦。`, 2);
    era.printButton(`努力学习吧。`, 3);
    const ret = await era.input();
    if (ret === 1) {
      await chara_talk.say_and_wait(`嗯！虽然可能没办法立刻实现。`);
      await chara_talk.say_and_wait(
        `但是 ${chara_talk.name}，绝对不会放弃的。`,
      );
      await era.printAndWait(` ${chara_talk.name}就这样下定了新的决心。`);
      get_attr_and_print_in_event(30, [0, 0, 0, 10, 0], 0);
      await era.waitAnyKey();
    } else if (ret === 2) {
      await chara_talk.say_and_wait(`啊哇……要是在比赛前感冒，那就糟了呢。`);
      await chara_talk.say_and_wait(
        `而且要是 ${chara_talk.name}请假，${
          me.sex_code - 1 ? '姐姐' : '哥哥'
        }大人的训练计划就——`,
      );
      await chara_talk.say_and_wait(`啊呜呜呜，得要随时都维持健康才行！`);
      await era.printAndWait(
        `${your_name}一边慌张地安慰独自烦恼的 ${chara_talk.name}，一边开始制定往后的计划。`,
      );
      get_attr_and_print_in_event(
        30,
        [0, 0, 0, 0, 0],
        0,
        JSON.parse('{"体力":200}'),
      );
      await era.waitAnyKey();
    } else {
      await chara_talk.say_and_wait(`是！`);
      await chara_talk.say_and_wait(
        `总觉得${me.sex_code - 1 ? '姐姐' : '哥哥'}大人好像老师一样。`,
      );
      await chara_talk.say_and_wait(`呼呼……今天的授业也请多多指教……老师。`);
      await era.printAndWait(
        `之后${your_name}便和 ${chara_talk.name}一起观看比赛录像进行研究。`,
      );
      get_attr_and_print_in_event(30, [0, 0, 0, 0, 0], 20);
      await era.waitAnyKey();
    }
  } else if (edu_weeks === 47 + 29) {
    const chara26_talk = get_chara_talk(26);
    chara26_talk.name = '某赛博格马娘';
    if (era.get('flag:当前位置') === location_enum.beach) {
      await print_event_name('夏季合宿开始', chara_talk);
      await era.printAndWait(`为了进一步提升实力，强化训练也开始了。`);
      await chara_talk.say_and_wait(`…哇，怎么办啊。`);
      await chara_talk.say_and_wait(` ${chara_talk.name}也，跟着来合宿了。`);
      await chara_talk.say_and_wait(
        `很多其他的赛${chara_talk.get_uma_sex_title()}也在这里啊。要是 ${
          chara_talk.name
        }招来不幸的话——`,
      );
      era.printButton(`现在该考虑的事情不是这个吧？`, 1);
      await era.input();
      await chara_talk.say_and_wait(`……咿！是！那个……`);
      await chara_talk.say_and_wait(`呼呼，好……合宿也会加油的。`);
      await chara_talk.say_and_wait(` ${chara_talk.name}，加油……！`);
      await chara_talk.say_and_wait(`A!A!O!`);
      await era.printAndWait(
        `就这样，${your_name}和 ${chara_talk.name}一起的夏合宿开始了！！`,
      );
      era.drawLine();
      await era.printAndWait(
        `${your_name}和 ${chara_talk.name}训练结束后正打算吃饭的时候——`,
      );
      await chara26_talk.say_and_wait(`哈啊……哈啊……！`);
      await chara26_talk.say_and_wait(`记录更新，距离理想用时还有5秒。`);
      await chara26_talk.say_and_wait(`——训练，继续进行。`);
      await chara_talk.say_and_wait(
        `……拜托了${me.sex_code - 1 ? '姐姐' : '哥哥'}大人，再来一次吧。`,
      );
      era.printButton(`…只能一次哦。`, 1);
      await era.input();
      await chara_talk.say_and_wait(`嗯！`);
      await era.printAndWait(
        `${your_name}就这样看着 ${chara_talk.name}再次跑了出去。`,
      );
      await chara52_talk.say_and_wait(`啊！ ${chara_talk.name}酱，跑走了！`);
      await chara52_talk.say_and_wait(`怎么会！我还以为终于可以说得上话了呢！`);
      await era.printAndWait(` ${chara_talk.name}跑完一圈回来了。`);
      await chara_talk.say_and_wait(`……欸？乌拉拉……酱？`);
      await chara52_talk.say_and_wait(`怎么会！我还以为终于可以说得上话了呢！`);
      await me.say_and_wait(`出发！`);
      await chara_talk.say_and_wait(`欸！？两个人都……！？`);
      era.drawLine();
      await chara_talk.say_and_wait(
        `哇！烤胡萝卜的炒面，耐力盖饭，还有特大苹果糖……！`,
      );
      await chara52_talk.say_and_wait(
        ` ${chara_talk.name}酱想从哪个开始吃呢？我的话，最先是胡萝卜冰淇淋哦。`,
      );
      await chara_talk.say_and_wait(
        `那个， ${chara_talk.name}要……呜呜。怎样才好啊……${
          me.sex_code - 1 ? '姐姐' : '哥哥'
        }大人……`,
      );
      era.printButton(`能量满满的精力盖饭！`, 1);
      era.printButton(`用毅力吃完！特大苹果糖！`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(`(咕噜……)`, {
          color: chara_talk.color,
        });
        await chara_talk.say_and_wait(`…呀啊！？啊唔唔唔……`);
        await chara_talk.say_and_wait(
          `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人为什么会知道， ${
            chara_talk.name
          }的肚子饿扁扁了呢？`,
        );
        await me.say_and_wait(`因为${your_name}今天非常努力。`);
        await chara_talk.say_and_wait(
          `嘿嘿，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人有一直看着 ${
            chara_talk.name
          }呢。`,
        );
        await era.printAndWait(
          `于是，${your_name}们三人一起开心吃饭，转眼便度过了一段可贵的时光。`,
        );
        get_attr_and_print_in_event(30, [0, 0, 10, 0, 0], 0);
        await era.waitAnyKey();
      } else {
        await chara_talk.say_and_wait(`哇…苹果糖！真的可以吃吗？`);
        await chara_talk.say_and_wait(
          `对 ${chara_talk.name}来说，苹果糖可是最好的奖励哦。`,
        );
        await chara_talk.say_and_wait(
          `参加赛跑的时候，考试结束的时候，母亲都会说「今天也很优秀呢」。`,
        );
        era.printButton(`那今天 ${chara_talk.name}也可以吃哦。`, 1);
        era.printButton(` ${chara_talk.name}一直是个优秀的孩子。`, 2);
        await era.input();
        await chara52_talk.say_and_wait(
          `嗯嗯， ${chara_talk.name}酱的话，吃掉100个也没有问题！`,
        );
        await chara_talk.say_and_wait(`是那样吗？`);
        await chara52_talk.say_and_wait(
          `对对！因为 ${chara_talk.name}非常非——常努力了呢！`,
        );
        await chara_talk.say_and_wait(
          `……嘿嘿，谢谢。${me.sex_code - 1 ? '姐姐' : '哥哥'}大人，乌拉拉酱。`,
        );
        await era.printAndWait(
          `${your_name}们三个人就这样愉快地吃着饭，度过了短暂的休憩时光。`,
        );
        get_attr_and_print_in_event(30, [0, 0, 0, 10, 0], 0);
        await era.waitAnyKey();
      }
    }
  } else if (edu_weeks === 95 + 6) {
    await print_event_name('情人节', chara_talk);
    await era.printAndWait(
      `今天${your_name}也和平日一样，在训练室里进行着工作……`,
    );
    await chara_talk.say_and_wait(`…那、那个，这个……`);
    await chara_talk.say_and_wait(
      `${
        me.sex_code - 1 ? '姐姐' : '哥哥'
      }大人，喜欢巧克力吗？收到的话会开心吗？`,
    );
    await era.printAndWait(`听到「巧克力」这个词就会想起来。`);
    await era.printAndWait(`……今天好像是情人节来着。`);
    await me.say_and_wait(`应该会高兴吧。`);
    await chara_talk.say_and_wait(`是吗！那么……`);
    await era.printAndWait(`说完这话的 ${chara_talk.name}跑了出去。`);
    era.drawLine({ content: '过了一会儿' });
    await era.printAndWait(`咚！！`, { fontSize: '30px' });
    await era.printAndWait(
      `……桌子上如山般堆放着 ${chara_talk.name}带来的巧克力。`,
    );
    await chara_talk.say_and_wait(
      `……我准备了很多，甜的也好苦的也好，放坚果的也好放草莓的也好。`,
    );
    await chara_talk.say_and_wait(
      `——所以，选一个吧，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人！`,
    );
    await me.say_and_wait(`选？`);
    await chara_talk.say_and_wait(`嗯。因为不想吃到自己不喜欢的味道吧？`);
    await chara_talk.say_and_wait(`所以做了很多种出来。想着……`);
    await chara_talk.say_and_wait(
      `总有一种是${me.sex_code - 1 ? '姐姐' : '哥哥'}大人喜欢的口味。`,
    );
    await era.printAndWait(
      `看来 ${chara_talk.name}为了迎合${your_name}的口味，亲手制作了好几种巧克力。`,
    );
    await chara_talk.say_and_wait(`欸……怎么了吗？`);
    await chara_talk.say_and_wait(`难道这里面没有喜欢的？`);
    await me.say_and_wait(`不能全部收下吗？`);
    await chara_talk.say_and_wait(`欸！？会撑坏肚子的哦！？`);
    await me.say_and_wait(`没关系。`);
    await chara_talk.say_and_wait(`真的……没关系……？`);
    await era.printAndWait(` ${chara_talk.name}很担心地看着${your_name}。`);
    await me.say_and_wait(`因为想全部收下 ${chara_talk.name}的心意。`);
    await chara_talk.say_and_wait(`…唔！`);
    await chara_talk.say_and_wait(`感觉、好开心…`);
    await chara_talk.say_and_wait(`不过，那样的话，还是多做一些比较好吧。`);
    await chara_talk.say_and_wait(
      `对${me.sex_code - 1 ? '姐姐' : '哥哥'}大人的感情，只有这样是不够的。`,
    );
    await era.printAndWait(
      `之后${your_name}和 ${chara_talk.name}一起度过了甜蜜的情人节。`,
    );
  } else if (edu_weeks === 95 + 14) {
    await print_event_name('粉丝感谢祭', chara_talk);
    await era.printAndWait(`练习场上`);
    await era.printAndWait(
      `这一天，学园也会向一般人开放，举办各种各样的活动。`,
    );
    await chara_talk.say_and_wait(`呜……没想到还会参加马拉松！`);
    await chara52_talk.say_and_wait(
      `没关系的！如果是 ${chara_talk.name}的话，肯定能嘿咻嘿咻地跑完啦。`,
    );
    await chara47_talk.say_and_wait(
      `嗯。要是 ${chara_talk.name}的话，绝对绝对能够跑完的！`,
    );
    await chara_talk.say_and_wait(`不、不是。那个、不是这回事啊……！`);
    await era.printAndWait(`结果是，麦昆漂亮地第一名冲线。`);
    await era.printAndWait(
      `期待着的 ${chara_talk.name}则是……死死跟在后面拿到了第二名。`,
    );
    await chara47_talk.say_and_wait(` ${chara_talk.name}，辛苦了！`);
    await chara52_talk.say_and_wait(
      `嗯嗯， ${chara_talk.name}酱好厉害呢！拿了第二，一起去庆祝吧！`,
    );
    await chara_talk.say_and_wait(`谢、谢谢……但是……`);
    await chara_talk.say_and_wait(`现在的 ${chara_talk.name}，完全……`);
    await chara26_talk.say_and_wait(`……`);
    await chara_talk.say_and_wait(`……对不起，庆祝就算了吧。`);
    await chara_talk.say_and_wait(`下次一定不会辜负大家的期望的……！`);
    await chara52_talk.say_and_wait(`欸、等一下， ${chara_talk.name}酱！`);
    await chara26_talk.say_and_wait(`……`);
    era.drawLine({ content: '入夜' });
    await era.printAndWait(` ${chara_talk.name}独自一人在训练场上自主练习着。`);
    await chara_talk.say_and_wait(`…不再加油的话。`);
  } else if (edu_weeks === 95 + 15) {
    await print_event_name('正因无法独自盛开', chara_talk);
    await era.printAndWait(`训练员室内`);
    await era.printAndWait(`（…咚咚）`);
    await era.printAndWait(`传来轻轻的敲门声。`);
    await chara47_talk.say_and_wait(`失礼了……那个，是荒漠英雄的说。`);
    await chara47_talk.say_and_wait(`有看见过 ${chara_talk.name}去哪儿了吗？`);
    await chara47_talk.say_and_wait(
      `其实${chara_talk.sex}现在还没有回宿舍，明明要到点名的时间了…`,
    );
    await me.say_and_wait(`（——难道）`);
    era.drawLine({ content: '训练场上' });
    await chara_talk.say_and_wait(`哈啊…哈啊……哈啊……！`);
    await me.say_and_wait(` ${chara_talk.name}！`);
    await chara_talk.say_and_wait(
      `欸。${me.sex_code - 1 ? '姐姐' : '哥哥'}大人，和……荒漠英雄？`,
    );
    await chara_talk.say_and_wait(`……`);
    await me.say_and_wait(`…不再加油的话。`);
    await chara_talk.say_and_wait(`努力过头了哦。。`);
    await chara_talk.say_and_wait(`对不起，但是……`);
    await chara_talk.say_and_wait(`……`);
    await chara_talk.say_and_wait(`嗯，对不起。会好好休息的。`);
    await chara47_talk.say_and_wait(`……`);
    await chara47_talk.say_and_wait(`那个， ${chara_talk.name}！`);
    await chara47_talk.say_and_wait(
      `对 ${chara_talk.name}来说，${
        me.sex_code - 1 ? '姐姐' : '哥哥'
      }大人意味着什么呢？`,
    );
    await chara47_talk.say_and_wait(
      `那个……一直都是这么温柔，就像是从绘本里走出来的那个命中注定的人。`,
    );
    await chara_talk.say_and_wait(`呀啊啊啊！？荒漠英雄同学？安……安……`);
    await chara47_talk.say_and_wait(
      `还不能安静。而且我也是在为${your_name}加油。`,
    );
    await chara_talk.say_and_wait(`荒漠英雄……`);
    await chara47_talk.say_and_wait(
      `要是有什么困扰的话……我觉得就应该大家好好谈谈。`,
    );
    await chara_talk.say_and_wait(`……`);
    await me.say_and_wait(`${your_name}觉得呢， ${chara_talk.name}？`);
    await chara_talk.say_and_wait(`…但是，很害怕啊……`);
    await chara_talk.say_and_wait(`可以依赖的某个人，我也是知道的啊……`);
    await chara_talk.say_and_wait(
      `好不容易对 ${chara_talk.name}抱有期待， ${chara_talk.name}却有可能做不到。`,
    );
    await chara_talk.say_and_wait(
      ` ${chara_talk.name}，明明已经不想让${
        me.sex_code - 1 ? '姐姐' : '哥哥'
      }大人失望了…`,
    );
    await era.printAndWait(`说完，少女小声地抽泣起来。`);
    await me.say_and_wait(`不要想那种事情。`);
    await chara47_talk.say_and_wait(
      `没错！我也是！不会对 ${chara_talk.name}失望的！`,
    );
    await chara47_talk.say_and_wait(
      `支持着 ${chara_talk.name}的大家，一定也是这样的。`,
    );
    await me.say_and_wait(`所以不要再一个人勉强自己了。`);
    await chara_talk.say_and_wait(
      `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人……唔……呜……`,
    );
    await chara_talk.say_and_wait(`呜啊~~~~！`);
    await era.printAndWait(
      `从 ${chara_talk.name}的眼睛里，大颗的泪珠决堤似地掉下来。`,
    );
    era.drawLine({ content: '第二天' });
    await chara47_talk.say_and_wait(`啊， ${chara_talk.name}！要加油哦。`);
    await chara_talk.say_and_wait(`……呜、呜呜……真的没问题吗？`);
    await chara47_talk.say_and_wait(`没、没问题的！`);
    await chara47_talk.say_and_wait(
      `看，训练员先生也来给 ${chara_talk.name}加油了哦。`,
    );
    await chara_talk.say_and_wait(`嗯。`);
    await chara26_talk.say_and_wait(`那么，我可以开始进行移动了吗？`);
    await chara_talk.say_and_wait(`啊！抱歉！波旁同学……这个、那个……！`);
    await chara_talk.say_and_wait(`请，一定要帮帮 ${chara_talk.name}！`);
    await chara26_talk.say_and_wait(`……？在意识的沟通上发生了误解吗？`);
    await chara_talk.say_and_wait(`没有发生哦！因为，波旁同学肯定能帮上忙的！`);
    await chara_talk.say_and_wait(`虽然听到了可能会很失望……`);
    await chara_talk.say_and_wait(
      ` ${chara_talk.name}现在，没有波旁的帮助是不行的！`,
    );
    await chara_talk.say_and_wait(
      `因为现在的 ${chara_talk.name}还很弱，再这样下去……`,
    );
    await chara_talk.say_and_wait(`根本跑赢不了！`);
    await chara_talk.say_and_wait(
      `所以希望波旁同学来教 ${chara_talk.name}跑步！`,
    );
    await chara_talk.say_and_wait(
      `把我没有的东西，全部都教给 ${chara_talk.name}！`,
    );
    await chara26_talk.say_and_wait(`……`);
    await me.say_and_wait(`相信 ${chara_talk.name}会创造奇迹吧。`);
    await chara26_talk.say_and_wait(`我知道了。`);
    await chara26_talk.say_and_wait(
      `如果这是创造史上最高的比赛所必要的过程的话。`,
    );
    await chara26_talk.say_and_wait(`申请受理，开始改变预定。`);
    await chara26_talk.say_and_wait(
      `从下午开始，作为第一阶段，开始参加 ${chara_talk.name}的10组坡道练习。`,
    );
    await chara26_talk.say_and_wait(`目的，提高肌肉力量和速度。`);
    await chara26_talk.say_and_wait(
      `在需要负荷的情况下，可以借出特制的负重袋。`,
    );
    await chara26_talk.say_and_wait(`啊，有人称我的训练是「魔鬼」——`);
    await chara26_talk.say_and_wait(`准备好要来吗？ ${chara_talk.name}。`);
    await chara_talk.say_and_wait(`…是的！`);
    await era.printAndWait(
      `然后${chara_talk.sex}们便开始了奔跑，向着即将到来的【天皇赏（春）】——！`,
    );
    get_attr_and_print_in_event(30, [0, 0, 0, 10, 0], 0);
    await era.waitAnyKey();
  } else if (edu_weeks === 95 + 23) {
    await print_event_name('不会折断的蔷薇', chara_talk);
    await era.printAndWait(`【宝塚纪念】的举行几乎是不能了——`);
    await era.printAndWait(`这样的气氛在到处弥漫着。`);
    await chara_talk.say_and_wait(`……`);
    await chara_talk.say_and_wait(
      `没事的，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`,
    );
    await chara_talk.say_and_wait(` ${chara_talk.name}，没事的。`);
    await era.printAndWait(`……话虽如此，${chara_talk.sex}的笑容却没有力量。`);
    await era.printAndWait(`果然还是因为那件事——`);
    await chara_talk.say_and_wait(
      `抱、抱歉，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人！`,
    );
    await era.printAndWait(
      ` ${chara_talk.name}在收到一则信息后急匆匆地跑出了训练员室。`,
    );
    await era.printAndWait(`${your_name}尝试跟上，急忙跑上楼梯。`);
    await era.printAndWait(`终于，到了 ${chara_talk.name}声音传来的地方。`);
    await chara302_talk.say_and_wait(`冷静！一件事一件事地慢慢来讲……`);
    await chara_talk.say_and_wait(
      ` ${chara_talk.name}，阪神的工作人员也！还有京都的工作人员都想要拜托！`,
    );
    await chara_talk.say_and_wait(`所以——希望可以举行宝塚纪念！`);
    await me.say_and_wait(` ${chara_talk.name}！？`);
    await chara302_talk.say_and_wait(
      `惊讶！？${CharaTalk.me.actual_name}训练员也来了吗！！`,
    );
    await chara_talk.say_and_wait(
      `欸！？${me.sex_code - 1 ? '姐姐' : '哥哥'}大人？`,
    );
    await me.say_and_wait(`这到底是？`);
    await chara_talk.say_and_wait(`…… ${chara_talk.name}，想来拜托理事长。`);
    await chara_talk.say_and_wait(`……希望【宝塚纪念】可以在京都赛马场举办……`);
    await chara302_talk.say_and_wait(`再三！不止是今天，昨天晚上也来过了。`);
    await chara302_talk.say_and_wait(`各处！都有着要做的事情。`);
    await chara302_talk.say_and_wait(`冷静下来，首先要确保连携——`);
    await chara_talk.say_and_wait(
      `我知道的！所以 ${chara_talk.name}，和阪神的人与京都的人都联系了！`,
    );
    await chara_talk.say_and_wait(
      `也许会添麻烦，也许会很困难，但请一定要帮帮我！`,
    );
    await chara_talk.say_and_wait(
      `为了支持着我的大家，能做到的事情一定尽我所能。`,
    );
    await chara301_talk.say_and_wait(`啊，让您久等了！终于批准下来了！`);
    await chara302_talk.say_and_wait(`手纲！！！期待~`);
    await chara301_talk.say_and_wait(
      `嗯嗯！这次的【宝塚纪念】，决定要在京都赛马场举办了！`,
    );
    await chara_talk.say_and_wait(`……那么！`);
    await chara301_talk.say_and_wait(
      `没错，阪神和京都，两个会场的工作人员紧密地保持着联系。`,
    );
    await chara301_talk.say_and_wait(`才让举办变得可能的！`);
    await chara301_talk.say_and_wait(
      `无论哪一方的工作人员，都表示一定要尽全力。`,
    );
    await chara301_talk.say_and_wait(`…也是为了 ${chara_talk.name}。`);
    await chara_talk.say_and_wait(`……！！`);
    era.drawLine({ content: '回到训练室后' });
    await chara_talk.say_and_wait(`呜……太好了……`);
    await chara_talk.say_and_wait(`能够、举办了呢……`);
    await me.say_and_wait(`为了大家有在努力呢。`);
    await chara_talk.say_and_wait(`嗯……嗯……！`);
    await chara_talk.say_and_wait(`为了在这次事件里出了力的人们。`);
    await chara_talk.say_and_wait(`为了支持 ${chara_talk.name}的大家……！`);
    await chara_talk.say_and_wait(
      ` ${chara_talk.name}，想让大家……露出笑容……！`,
    );
    get_attr_and_print_in_event(30, [0, 10, 0, 0, 0], 0);
    await era.waitAnyKey();
  } else if (edu_weeks === 95 + 29) {
    if (era.get('flag:当前位置') === location_enum.beach) {
      await print_event_name('夏季合宿开始', chara_talk);
      await era.printAndWait(`从今天起，夏季合宿再次开始了。`);
      await chara_talk.say_and_wait(`欸嘿嘿…热热闹闹的呢。`);
      await chara_talk.say_and_wait(`这种感觉…好久没有过了。`);
      await chara_talk.say_and_wait(`从那个时候起，已经过去一年了呢……`);
      await era.printAndWait(`依旧是一次严格的夏季合宿。`);
    }
  } else if (edu_weeks === 95 + 41) {
    await print_event_name(' 粉丝来信', chara_talk);
    await chara_talk.say_and_wait(` ${chara_talk.name}有，粉丝来信……`);
    await me.say_and_wait(`太好了呢。`);
    await chara_talk.say_and_wait(`嗯……！`);
    await chara_talk.say_and_wait(`但是……」`);
    await era.printAndWait(`看起来很开心的 ${chara_talk.name}的表情。`);
    await era.printAndWait(`不知为什么变得有些不安。`);
    await me.say_and_wait(`怎么了吗？`);
    await chara_talk.say_and_wait(`……有时候 ${chara_talk.name}也在想。`);
    await chara_talk.say_and_wait(`因为给 ${chara_talk.name}应援。`);
    await chara_talk.say_and_wait(`这些人会不会变得不幸什么的——`);
    await chara_talk.say_and_wait(` ${chara_talk.name}，不想那样……`);
    await chara_talk.say_and_wait(`明明不想去想，却总是……`);
    await chara_talk.say_and_wait(
      `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人， ${
        chara_talk.name
      }该怎么办才好呢？`,
    );
    await me.say_and_wait(`看一看粉丝信的内容吧。`);
    await chara_talk.say_and_wait(`内容……嗯。`);
    era.drawLine({ content: '第一封信' });
    await era.printAndWait(
      `在赛场上 ${chara_talk.name}努力的样子，给了我很多的勇气......`,
    );
    era.drawLine({ content: '又一封信' });
    await era.printAndWait(`......看见 ${chara_talk.name}酱的笑容的话......`);
    era.drawLine({ content: '还有一封' });
    await era.printAndWait(`......无论何时都能感受到温暖`);
    era.println();
    await chara_talk.say_and_wait(` ${chara_talk.name}，努力的样子……`);
    await chara_talk.say_and_wait(` ${chara_talk.name}的，笑容……`);
    await chara_talk.say_and_wait(`……这样啊。`);
    await chara_talk.say_and_wait(`会有人为此感到高兴啊。`);
    await chara_talk.say_and_wait(`${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`);
    await chara_talk.say_and_wait(
      ` ${chara_talk.name}会，一直、一直努力的……！`,
    );
    await chara_talk.say_and_wait(
      `为了让为 ${chara_talk.name}应援的人们，能够感到喜悦！`,
    );
    await era.printAndWait(
      ` ${chara_talk.name}的眼睛里，似乎亮起了干劲的火焰！`,
    );
    get_attr_and_print_in_event(30, [0, 0, 0, 0, 0], 30);
    sys_change_motivation(30, 1) && (await era.waitAnyKey());
  } else if (edu_weeks === 95 + 48) {
    await print_event_name('记者见面会', chara_talk);
    await era.printAndWait(`【有马纪念】即将到来的这一天。`);
    await era.printAndWait(
      `${your_name}和 ${chara_talk.name}前去参加了联合采访。`,
    );
    await chara_talk.say_and_wait(`诶、诶诶……！？`);
    await chara_talk.say_and_wait(` ${chara_talk.name}在中间吗？`);
    await era.printAndWait(
      `工作人员A：「是啊！因为是人气投票第一的${chara_talk.get_uma_sex_title()}。」`,
    );
    await era.printAndWait(`工作人员A：「中间可是主角的位置哦！」`);
    await chara_talk.say_and_wait(`但是……这个，今天—`);
    await chara26_talk.say_and_wait(
      ` ${chara_talk.name}，请迅速且堂堂正正地回应。`,
    );
    await chara26_talk.say_and_wait(`拍摄之后还有采访。`);
    await chara13_talk.say_and_wait(`呵呵，是啊。`);
    await chara13_talk.say_and_wait(`没有主角的话就开始不了啊。`);
    await chara26_talk.say_and_wait(
      `嗯。然后${your_name}就会宣布【见证史上最棒的比赛】的，对吧？`,
    );
    await chara13_talk.say_and_wait(`啊！到这种程度吗？`);
    await chara13_talk.say_and_wait(`呼呼……那还真是，期待啊。`);
    await chara_talk.say_and_wait(`呜~~~~大家，眼神好恐怖啊……`);
    await me.say_and_wait(`当主角可真不容易啊。`);
    await chara_talk.say_and_wait(
      `唔……连${me.sex_code - 1 ? '姐姐' : '哥哥'}大人也是这样……`,
    );
    await era.printAndWait(
      `见面会结束了……为了休息和奖励努力了一天的 ${chara_talk.name}，`,
    );
    await era.printAndWait(`决定到街上去逛逛。`);
    await chara_talk.say_and_wait(`唔诶……紧张死了。`);
    await me.say_and_wait(`很努力了呢。`);
    await chara_talk.say_and_wait(`嗯…没想到会被那两个人给夹在了中间。`);
    await chara_talk.say_and_wait(
      `呐，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`,
    );
    await chara_talk.say_and_wait(`想要怎么样的礼物呢？`);
    await chara_talk.say_and_wait(
      ` ${chara_talk.name}，想要回报${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`,
    );
    await chara_talk.say_and_wait(`所以，送出怎么样的礼物才好呢？`);
    await chara_talk.say_and_wait(
      `……虽然， ${chara_talk.name}能做到的事很少。`,
    );
    await me.say_and_wait(`想看到${your_name}努力的样子。`);
    await chara_talk.say_and_wait(`这样…就行了吗？`);
    await me.say_and_wait(`当然！`);
    await chara_talk.say_and_wait(
      `……${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`,
    );
    await chara_talk.say_and_wait(`不行哦。`);
    await chara_talk.say_and_wait(`只有那样的话， ${chara_talk.name}才不要！`);
    await chara_talk.say_and_wait(`因为努力是理所当然的。`);
    await chara_talk.say_and_wait(
      `——所以，绝对要把有马纪念的第一名，作为送给${
        me.sex_code - 1 ? '姐姐' : '哥哥'
      }大人的礼物！`,
    );
    await chara_talk.say_and_wait(
      `我想这一定是，只有 ${chara_talk.name}才能送出来的礼物。`,
    );
    await era.printAndWait(`结果，别说是休息了。`);
    await era.printAndWait(`这个圣诞夜反倒让精神激昂了起来。`);
    await chara_talk.say_and_wait(
      `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人，今天也谢谢${your_name}！`,
    );
    await chara_talk.say_and_wait(
      `到了有马纪念，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人还有大家。`,
    );
    await chara_talk.say_and_wait(
      `一定会因为 ${chara_talk.name}的奔跑而感到幸福的！`,
    );
    await era.printAndWait(`然后， ${chara_talk.name}迈着轻快的步伐向前走去。`);
    await era.printAndWait(
      `比刚见面时更加坚强的背影，现在轮到${your_name}去追逐了。`,
    );
  } else if (edu_weeks === 143 + 1) {
    const me = get_chara_talk(0),
      chara_talk = get_chara_talk(30);
    await print_event_name('从前从前，在某个地方……', chara_talk);
    await era.printAndWait(
      `「最初的三年」对赛${chara_talk.get_uma_sex_title()}来说非常重要， ${
        chara_talk.name
      }顺利地在这段时间拿下了极为亮眼的成绩。`,
    );
    await era.printAndWait(`${chara_talk.sex}也因此受到了世人的肯定。`);
    await chara_talk.say_and_wait(`颁奖仪式…？`);
    await me.say_and_wait(`去见大家吧。`);
    await chara_talk.say_and_wait(
      `…嗯。 ${chara_talk.name}也想，亲口对大家说声谢谢。`,
    );
    await era.printAndWait(
      `——于是隔天，${CharaTalk.me.actual_name}和 ${chara_talk.name}一起来到了阪神赛场。`,
    );
    await chara_talk.say_and_wait(`好多人…明明今天没有比赛的。`);
    await era.printAndWait(
      `观众A：「哇啊！ ${chara_talk.name}来了！呀啊啊~好可爱~！」`,
    );
    await era.printAndWait(
      `观众B：「辛苦了~ ${chara_talk.name}！今天拜托${your_name}咯~！」`,
    );
    await chara_talk.say_and_wait(`咦……咦？`);
    await era.printAndWait(`工作人员A：「两位，好久不见。」`);
    await chara_talk.say_and_wait(`好久不见。请问…这到底是？`);
    await era.printAndWait(`工作人员A：「哦，其实原本我们打算只有工作人员。」`);
    await era.printAndWait(`工作人员A：「简单办个庆祝会，结果……」`);
    await era.printAndWait(`观众C：「 ${chara_talk.name}~！看这边~！」`);
    await era.printAndWait(
      `工作人员A：「如${your_name}们所看到的，很多观众都表示想要见到 ${chara_talk.name}。」`,
    );
    era.printButton(`因为大家都最喜欢 ${chara_talk.name}了。`, 1);
    await era.input();
    await chara_talk.say_and_wait(`呜欸欸？最、最喜欢…`);
    await era.printAndWait(`工作人员A：「啊哈哈，说的没错。」`);
    await era.printAndWait(
      `工作人员A：「于是我们改变了原定计划，拜托各界的相关人士协助…」`,
    );
    await era.printAndWait(
      `工作人员A：「颁奖仪式就这样，变成一般观众也可以参加的典礼了。」`,
    );
    await chara_talk.say_and_wait(`所以这些人，都是为了 ${chara_talk.name}才…`);
    await era.printAndWait(`工作人员A：「嗯，是的。」`);
    await era.printAndWait(
      `工作人员A：「可以拜托${your_name}完成那天无法完成的事吗？」`,
    );
    await era.printAndWait(`工作人员A：「在等待着${your_name}的所有人面前。」`);
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
      `如果只是一个人吗， ${chara_talk.name}现在应该也不会有什么进步。`,
    );
    await chara_talk.say_and_wait(`只能蜷缩在自己的黑暗世界里。`);
    await chara_talk.say_and_wait(
      `但是， ${chara_talk.name}现在已经不是一个人了。`,
    );
    await chara_talk.say_and_wait(
      ` ${chara_talk.name}现在能站在这里，也是因为他的关系`,
    );
    await chara_talk.say_and_wait(
      `给了 ${chara_talk.name}光亮，给了 ${chara_talk.name}容身之处…`,
    );
    await chara_talk.say_and_wait(`大家，真的非常感谢${your_name}们！`);
    await chara_talk.say_and_wait(
      `所以还请大家，继续支持 ${chara_talk.name}……！！`,
    );
    await era.printAndWait(`哇啊啊啊啊啊啊啊——`);
    era.drawLine({ content: '回程的巴士上' });
    await chara_talk.say_and_wait(
      `谢谢${your_name}，${
        me.sex_code - 1 ? '姐姐' : '哥哥'
      }大人。都是多亏有${your_name}。`,
    );
    await me.say_and_wait(`${your_name}真的很努力了， ${chara_talk.name}。`);
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
