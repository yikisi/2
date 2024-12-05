const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by } = require('#/utils/chara-talk');
const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,string,{wait_flag:boolean},EventObject):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers.beginning = async (rice, me, callname, self_name) => {
    await print_event_name('育成开始', rice);
    era.drawLine({ content: '训练场' });
    await rice.say_and_wait('离训练的时间还有一点点……');
    await rice.say_and_wait('……稍微跑一下吧。');
    await rice.say_and_wait([
      '哎嘿嘿……',
      self_name,
      ' 选手，在欢呼声中，走进了赛场——',
    ]);
    await say_by_passer_by(`赛${rice.get_uma_sex_title()}A`, '哇！！！');
    await rice.say_and_wait('哎！？');
    const bourbon = get_chara_talk(26);
    bourbon.name = '实力强劲的赛' + bourbon.get_uma_sex_title();
    await bourbon.say_and_wait('哈啊……哈啊……！');
    await say_by_passer_by(`赛${rice.get_uma_sex_title()}A`, '又刷新了记录！');
    await say_by_passer_by(
      `赛${rice.get_uma_sex_title()}A`,
      '这下已经能确定是来年的经典赛主役了呢！',
    );
    await say_by_passer_by(
      `赛${rice.get_uma_sex_title()}B`,
      '是啊……跑得真是太棒了。呐，那个，请一定……',
    );
    await bourbon.say_and_wait('……还有预定的安排等待执行。失礼了。');
    await era.printAndWait([bourbon.get_colored_name(), ' 跑开了。']);
    await say_by_passer_by(
      `赛${rice.get_uma_sex_title()}们`,
      '啊～～等等～～！',
    );
    await rice.say_and_wait('……好厉害。赛场边上也挤满了来旁观的人……');
    await rice.say_and_wait([
      '……现在，',
      self_name,
      ' 去那里跑的话也只会碍事……的吧。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 和 ',
      rice.get_colored_name(),
      ' 一起向闪耀系列发起的挑战开始了！',
    ]);
  };

  handlers[47 + 1] = async (rice, me, callname, self_name, flags) => {
    await print_event_name('新年的抱负', rice);
    await era.printAndWait([
      '今年就要开始挑战经典赛了。当 ',
      me.get_colored_name(),
      ' 为了收集情报而正在收看电视节目的时候——',
    ]);
    await say_by_passer_by(
      '电视',
      '哎呀，这次的经典赛，有趣的面孔正在齐聚呢。',
    );
    await say_by_passer_by('电视', [
      '在短距离上没有敌手的 ',
      get_chara_talk(41).get_colored_name(),
      '，',
      rice.get_colored_name(),
      ' 也在出赛名单上，不过果然——',
    ]);
    await say_by_passer_by('电视', [
      get_chara_talk(26).get_colored_name(),
      '，绝对不能错过。因为',
      rice.sex,
      '可是未来三冠赛',
      rice.get_uma_sex_title(),
      '候补！',
    ]);
    await rice.say_and_wait(['新年好，', callname, '。']);
    era.printButton(`「${sys_get_callname(0, 30)}！？」`, 1);
    await era.input();
    await rice.say_and_wait(['嗯。是 ', self_name, ' 哦。']);
    await rice.say_and_wait([
      '嘿嘿，是来恭贺新年的，给 ',
      me.get_colored_name(),
      ' 添麻烦了吗？',
    ]);
    era.printButton('「没什么麻烦的哦。」', 1);
    await era.input();
    await rice.say_and_wait('啊……太好了。');
    await rice.say_and_wait([
      '欸嘿嘿，听我说哦。今天早上，',
      sys_get_colored_callname(30, 52),
      ' 对我说了。',
    ]);
    era.drawLine({ content: '早上' });
    const urara = get_chara_talk(52);
    await urara.say_and_wait('因为是新年所以来吃泡芙吧！');
    await urara.say_and_wait('……泡芙好吃吗？');
    era.drawLine({ content: '现在' });
    era.printButton('「难道不好吃吗？」', 1);
    await era.input();
    await rice.say_and_wait([
      '呼呼哈哈哈、是的呢。',
      self_name,
      ' 也说了同样的话。',
    ]);
    await rice.say_and_wait('然后，那个……');
    await rice.say_and_wait([
      self_name,
      ' 想和 ',
      callname,
      ' 一起讨论新年的抱负，想讨论今年的目标……',
    ]);
    await rice.say_and_wait('不行、吗？');
    era.printButton('「好啊。」', 1);
    await era.input();
    await rice.say_and_wait('嘿嘿，太棒了！要订什么目标好呢？');
    await rice.say_and_wait([callname, '，想要立下怎样的目标呢？']);
    era.printButton(
      `「一定要让 ${sys_get_callname(0, 30)} 拿下经典赛的优胜。」`,
      1,
    );
    await era.input();
    await rice.say_and_wait([callname, '……！']);
    await rice.say_and_wait([
      '……',
      self_name,
      ' 也一样，可以立下今年的目标吗？',
    ]);
    era.printButton('「当然。」', 1);
    await era.input();
    await rice.say_and_wait([
      self_name,
      '，为了实现自己和 ',
      callname,
      ' 的目标，会努力的！',
    ]);
    era.printButton('就是这种感觉！（根性+10）', 1);
    era.printButton('同时要保重身体哦。（耐力+10）', 2);
    era.printButton('努力学习吧。（技能点数+20）', 3);
    switch (await era.input()) {
      case 1:
        await rice.say_and_wait('嗯！虽然可能没办法立刻实现。');
        await rice.say_and_wait(['但是 ', self_name, '，绝对不会放弃的。']);
        await era.printAndWait([
          rice.get_colored_name(),
          ' 就这样下定了新的决心。',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(30, [0, 0, 0, 10], 0);
        break;
      case 2:
        await rice.say_and_wait('啊哇……要是在比赛前感冒，那就糟了呢。');
        await rice.say_and_wait([
          '而且要是 ',
          self_name,
          ' 请假，',
          callname,
          ' 的训练计划就——',
        ]);
        await rice.say_and_wait('啊呜呜呜，得要随时都维持健康才行！');
        await era.printAndWait([
          me.get_colored_name(),
          ' 一边慌张地安慰独自烦恼的 ',
          rice.get_colored_name(),
          '，一边开始制定往后的计划。',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(30, [0, 10], 0);
        break;
      case 3:
        await rice.say_and_wait('是！');
        await rice.say_and_wait(['总觉得 ', callname, ' 好像老师一样。']);
        await rice.say_and_wait('呼呼……今天的授业也请多多指教……老师。');
        await era.printAndWait([
          '之后 ',
          me.get_colored_name(),
          ' 便和 ',
          rice.get_colored_name(),
          ' 一起观看比赛录像进行研究。',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(30, undefined, 20);
    }
    era.set('cflag:30:节日事件标记', 0);
  };

  handlers[47 + 29] = async (
    rice,
    me,
    callname,
    self_name,
    flags,
    event_object,
  ) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:30:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_start, event_object);
      return;
    }
    const bourbon = get_chara_talk(26);
    bourbon.name = '某赛博格' + bourbon.get_uma_sex_title();
    await print_event_name('夏季合宿（经典年）开始', rice);
    await era.printAndWait('为了进一步提升实力，强化训练也开始了。');
    await rice.say_and_wait('……哇，怎么办啊。');
    await rice.say_and_wait([self_name, ' 也，跟着来合宿了。']);
    await rice.say_and_wait([
      '很多其他的赛',
      rice.get_uma_sex_title(),
      '也在这里啊。要是 ',
      self_name,
      ' 招来不幸的话——',
    ]);
    era.printButton('「现在该考虑的事情不是这个吧？', 1);
    await era.input();
    await rice.say_and_wait('……咿！是！那个……」');
    await rice.say_and_wait('呼呼，好……合宿也会加油的。');
    await rice.say_and_wait([self_name, '，加油……！']);
    await rice.say_and_wait('A!A!O!');
    await era.printAndWait([
      '就这样，',
      me.get_colored_name(),
      ' 和 ',
      rice.get_colored_name(),
      ' 一起的夏合宿开始了！！',
    ]);
    era.drawLine();
    await era.printAndWait([
      me.get_colored_name(),
      ' 和 ',
      rice.get_colored_name(),
      ' 训练结束后正打算吃饭的时候——',
    ]);
    await bourbon.say_and_wait('哈啊……哈啊……！');
    await bourbon.say_and_wait('记录更新，距离理想用时还有5秒。');
    await bourbon.say_and_wait('——训练，继续进行。');
    await rice.say_and_wait(['……拜托了 ', callname, '，再来一次吧。']);
    era.printButton('「……只能一次哦。」', 1);
    await era.input();
    await rice.say_and_wait('嗯！');
    await era.printAndWait([
      me.get_colored_name(),
      ' 就这样看着 ',
      rice.get_colored_name(),
      ' 再次跑了出去。',
    ]);
    const urara = get_chara_talk(52);
    await urara.say_and_wait([
      '啊！',
      sys_get_colored_callname(52, 30),
      '，跑走了！',
    ]);
    await urara.say_and_wait('怎么会！我还以为终于可以说得上话了呢！');
    await era.printAndWait([rice.get_colored_name(), ' 跑完一圈回来了。']);
    await rice.say_and_wait([
      '……欸？',
      sys_get_colored_callname(30, 52),
      '……？',
    ]);
    await urara.say_and_wait([
      '你好啊！',
      sys_get_colored_callname(52, 30),
      '！那就一起出发吧。',
    ]);
    await me.say_and_wait('出发！');
    await rice.say_and_wait('欸！？两个人都……！？');
    era.drawLine();
    await rice.say_and_wait('哇！烤胡萝卜的炒面，耐力盖饭，还有特大苹果糖……！');
    await urara.say_and_wait([
      sys_get_colored_callname(52, 30),
      ' 想从哪个开始吃呢？我的话，最先是胡萝卜冰淇淋哦。',
    ]);
    await rice.say_and_wait([
      '那个，',
      self_name,
      ' 要……呜呜。怎样才好啊……',
      callname,
      '……',
    ]);
    era.printButton('能量满满的精力盖饭！（力量+10）', 1);
    era.printButton('用毅力吃完！特大苹果糖！（根性+10）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait('咕噜……');
      await rice.say_and_wait('……呀啊！？啊唔唔唔……');
      await rice.say_and_wait([
        callname,
        ' 为什么会知道，',
        self_name,
        ' 的肚子饿扁扁了呢？',
      ]);
      await me.say_and_wait('因为你今天非常努力。');
      await rice.say_and_wait([
        '嘿嘿，',
        callname,
        ' 有一直看着 ',
        self_name,
        ' 呢。',
      ]);
      await era.printAndWait([
        '于是，',
        me.get_couple_title(),
        ' 三人一起开心吃饭，转眼便度过了一段可贵的时光。',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(30, [0, 0, 10], 0);
    } else {
      await rice.say_and_wait('哇……苹果糖！真的可以吃吗？');
      await rice.say_and_wait([
        '对 ',
        self_name,
        ' 来说，苹果糖可是最好的奖励哦。',
      ]);
      await rice.say_and_wait(
        '参加赛跑的时候，考试结束的时候，母亲都会说『今天也很优秀呢』。',
      );
      era.printButton(`「那今天 ${sys_get_callname(0, 30)} 也可以吃哦。」`, 1);
      era.printButton(`「${sys_get_callname(0, 30)} 一直是个优秀的孩子。」`, 2);
      await era.input();
      await urara.say_and_wait([
        '嗯嗯，',
        sys_get_colored_callname(52, 30),
        ' 的话，吃掉100个也没有问题！',
      ]);
      await rice.say_and_wait('是那样吗？');
      await urara.say_and_wait([
        '对对！因为 ',
        sys_get_colored_callname(52, 30),
        ' 非常非——常努力了呢！',
      ]);
      await rice.say_and_wait([
        '……嘿嘿，谢谢。',
        callname,
        '，',
        sys_get_colored_callname(30, 52),
        '。',
      ]);
      await era.printAndWait([
        me.get_couple_title(),
        ' 三个人就这样愉快地吃着饭，度过了短暂的休憩时光。',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(30, [0, 0, 0, 10], 0);
    }
  };

  handlers[95 + 6] = async (rice, me, callname, self_name) => {
    await print_event_name('情人节', rice);
    await era.printAndWait([
      '今天 ',
      me.get_colored_name(),
      ' 也和平日一样，在训练室里进行着工作……',
    ]);
    await rice.say_and_wait('……那、那个，这个……');
    await rice.say_and_wait([callname, '，喜欢巧克力吗？收到的话会开心吗？']);
    await era.printAndWait('听到「巧克力」这个词就会想起来。');
    await era.printAndWait('……今天好像是情人节来着。');
    await me.say_and_wait('应该会高兴吧。');
    await rice.say_and_wait('是吗！那么……');
    await era.printAndWait([
      '说完这话的 ',
      rice.get_colored_name(),
      ' 跑了出去。',
    ]);
    era.drawLine({ content: '过了一会儿' });
    await era.printAndWait('咚！！', { fontSize: '1.875rem' });
    await era.printAndWait([
      '……桌子上如山般堆放着 ',
      rice.get_colored_name(),
      ' 带来的巧克力。',
    ]);
    await rice.say_and_wait(
      '……我准备了很多，甜的也好苦的也好，放坚果的也好放草莓的也好。',
    );
    await rice.say_and_wait(['——所以，选一个吧，', callname, '！']);
    await me.say_and_wait('选？');
    await rice.say_and_wait('嗯。因为不想吃到自己不喜欢的味道吧？');
    await rice.say_and_wait('所以做了很多种出来。想着……');
    await rice.say_and_wait(['总有一种是 ', callname, ' 喜欢的口味。']);
    await era.printAndWait([
      '看来 ',
      rice.get_colored_name(),
      ' 为了迎合 ',
      me.get_colored_name(),
      ' 的口味，亲手制作了好几种巧克力。',
    ]);
    await rice.say_and_wait('欸……怎么了吗？');
    await rice.say_and_wait('难道这里面没有喜欢的？');
    await me.say_and_wait('不能全部收下吗？');
    await rice.say_and_wait('欸！？会撑坏肚子的哦！？');
    await me.say_and_wait('没关系。');
    await rice.say_and_wait('真的……没关系……？');
    await era.printAndWait([
      rice.get_colored_name(),
      ' 很担心地看着 ',
      me.get_colored_name(),
      '。',
    ]);
    await me.say_and_wait(['因为想全部收下 ', self_name, ' 的心意。']);
    await rice.say_and_wait('……唔！');
    await rice.say_and_wait('感觉、好开心……');
    await rice.say_and_wait('不过，那样的话，还是多做一些比较好吧。');
    await rice.say_and_wait(['对 ', callname, ' 的感情，只有这样是不够的。']);
    await era.printAndWait([
      '之后 ',
      me.get_colored_name(),
      ' 和 ',
      rice.get_colored_name(),
      ' 一起度过了甜蜜的情人节。',
    ]);
    era.set('cflag:30:节日事件标记', 0);
    era.add('item:情人节巧克力', 1);
  };

  handlers[95 + 14] = async (rice, me, callname, self_name) => {
    const urara = get_chara_talk(52),
      mcqueen = get_chara_talk(13),
      zob_zoy = get_chara_talk(47),
      bourbon = get_chara_talk(26);
    await print_event_name('粉丝感谢祭', rice);
    await era.printAndWait('练习场上');
    await era.printAndWait(
      '这一天，学园也会向一般人开放，举办各种各样的活动。',
    );
    await rice.say_and_wait('呜……没想到还会参加马拉松！');
    await urara.say_and_wait([
      '没关系的！如果是 ',
      sys_get_colored_callname(52, 30),
      ' 的话，肯定能嘿咻嘿咻地跑完啦。',
    ]);
    await zob_zoy.say_and_wait([
      '嗯。要是 ',
      sys_get_colored_callname(47, 30),
      ' 的话，绝对绝对能够跑完的！',
    ]);
    await rice.say_and_wait('不、不是。那个、不是这回事啊……！');
    era.drawLine();
    await era.printAndWait([
      '结果是，',
      mcqueen.get_colored_name(),
      ' 漂亮地第一名冲线。',
    ]);
    await era.printAndWait([
      '期待着的 ',
      rice.get_colored_name(),
      ' 则是……死死跟在后面拿到了第二名。',
    ]);
    await zob_zoy.say_and_wait([
      sys_get_colored_callname(47, 30),
      '，辛苦了！',
    ]);
    await urara.say_and_wait([
      '嗯嗯，',
      sys_get_colored_callname(52, 30),
      ' 好厉害呢！拿了第二，一起去庆祝吧！',
    ]);
    await rice.say_and_wait('谢、谢谢……但是……');
    await rice.say_and_wait(['现在的 ', self_name, '，完全……']);
    await bourbon.say_and_wait('……');
    await rice.say_and_wait('……对不起，庆祝就算了吧。');
    await rice.say_and_wait('下次一定不会辜负大家的期望的……！');
    await urara.say_and_wait([
      '欸、等一下，',
      sys_get_colored_callname(52, 30),
      '！',
    ]);
    await bourbon.say_and_wait('……');
    era.drawLine({ content: '入夜' });
    await era.printAndWait([
      rice.get_colored_name(),
      ' 独自一人在训练场上自主练习着。',
    ]);
    await rice.say_and_wait('……不再加油的话。');
    era.set('cflag:30:节日事件标记', 0);
  };

  handlers[95 + 24] = async (rice, me, callname, self_name, flags) => {
    const tokino = get_chara_talk(301),
      chairman = get_chara_talk(302);
    await print_event_name('不会折断的蔷薇', rice);
    await era.printAndWait([
      race_infos[race_enum.takz_kin].get_colored_name(),
      ' 的举行几乎是不能了——',
    ]);
    await era.printAndWait('这样的气氛在到处弥漫着。');
    await rice.say_and_wait('……');
    await rice.say_and_wait(['没事的，', callname, '。']);
    await rice.say_and_wait([self_name, '，没事的。']);
    await era.printAndWait(['……话虽如此，', rice.sex, '的笑容却没有力量。']);
    await era.printAndWait('果然还是因为那件事——');
    await rice.say_and_wait(['抱、抱歉，', callname, '！']);
    await era.printAndWait([
      rice.get_colored_name(),
      ' 在收到一则信息后急匆匆地跑出了训练员室。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 尝试跟上，急忙跑上楼梯。',
    ]);
    await era.printAndWait([
      '终于，到了 ',
      rice.get_colored_name(),
      ' 声音传来的地方。',
    ]);
    await chairman.say_and_wait('冷 静！一件事一件事地慢慢来讲……');
    await rice.say_and_wait([
      self_name,
      '，阪神的工作人员也！还有京都的工作人员都想要拜托！',
    ]);
    await rice.say_and_wait([
      '所以——希望可以举行 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '！',
    ]);
    await me.say_and_wait([sys_get_colored_callname(0, 30), '！？']);
    await chairman.say_and_wait([
      '惊 讶！？',
      me.actual_name,
      '训练员 也来了吗！！',
    ]);
    await rice.say_and_wait(['欸！？', callname, '？']);
    await me.say_and_wait('这到底是？');
    await rice.say_and_wait(['……', self_name, '，想来拜托理事长。']);
    await rice.say_and_wait([
      '……希望 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      ' 可以在京都赛马场举办……',
    ]);
    await chairman.say_and_wait('再 三！不止是今天，昨天晚上也来过了。');
    await chairman.say_and_wait('各 处！都有着要做的事情。');
    await chairman.say_and_wait('冷 静！首先要确保连携——');
    await rice.say_and_wait([
      '我知道的！所以 ',
      self_name,
      '，和阪神的人与京都的人都联系了！',
    ]);
    await rice.say_and_wait('也许会添麻烦，也许会很困难，但请一定要帮帮我！');
    await rice.say_and_wait('为了支持着我的大家，能做到的事情一定尽我所能。');
    await tokino.say_and_wait('啊，让您久等了！终于批准下来了！');
    await chairman.say_and_wait([
      sys_get_colored_callname(302, 301),
      '！！！期待～',
    ]);
    await tokino.say_and_wait([
      '嗯嗯！这次的 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '，决定要在京都赛马场举办了！',
    ]);
    await rice.say_and_wait('……那么！');
    await tokino.say_and_wait(
      '没错，阪神和京都，两个会场的工作人员紧密地保持着联系。',
    );
    await tokino.say_and_wait('才让举办变得可能的！');
    await tokino.say_and_wait('无论哪一方的工作人员，都表示一定要尽全力。');
    await tokino.say_and_wait(['……也是为了 ', self_name, '。']);
    await rice.say_and_wait('……！！');
    era.drawLine({ content: '回到训练室后' });
    await rice.say_and_wait('呜……太好了……');
    await rice.say_and_wait('能够、举办了呢……');
    await me.say_and_wait('为了大家有在努力呢。');
    await rice.say_and_wait('嗯……嗯……！');
    await rice.say_and_wait('为了在这次事件里出了力的人们。');
    await rice.say_and_wait(['为了支持 ', self_name, ' 的大家……！']);
    await rice.say_and_wait([self_name, '，想让大家……露出笑容……！']);
    flags.wait_flag = get_attr_and_print_in_event(30, [0, 10], 0);
  };

  handlers[95 + 29] = async (
    rice,
    me,
    callname,
    self_name,
    flags,
    event_object,
  ) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:30:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_start, event_object);
      return;
    }
    await print_event_name('夏季合宿（资深年）开始', rice);
    await era.printAndWait('从今天起，夏季合宿再次开始了。');
    await rice.say_and_wait('欸嘿嘿……热热闹闹的呢。');
    await rice.say_and_wait('这种感觉……好久没有过了。');
    await rice.say_and_wait('从那个时候起，已经过去一年了呢……');
  };

  handlers[95 + 41] = async (rice, me, callname, self_name, flags) => {
    await print_event_name(' 粉丝来信', rice);
    await rice.say_and_wait([self_name, ' 有，粉丝来信……']);
    await me.say_and_wait('太好了呢。');
    await rice.say_and_wait('嗯……！');
    await rice.say_and_wait('但是……');
    await era.printAndWait([
      '看起来很开心的 ',
      rice.get_colored_name(),
      ' 的表情。',
    ]);
    await era.printAndWait('不知为什么变得有些不安。');
    await me.say_and_wait('怎么了吗？');
    await rice.say_and_wait(['……有时候 ', self_name, ' 也在想。']);
    await rice.say_and_wait(['因为给 ', self_name, ' 应援。']);
    await rice.say_and_wait('这些人会不会变得不幸什么的——');
    await rice.say_and_wait([self_name, '，不想那样……']);
    await rice.say_and_wait('明明不想去想，却总是……');
    await rice.say_and_wait([callname, '，', self_name, ' 该怎么办才好呢？']);
    await me.say_and_wait('看一看粉丝信的内容吧。');
    await rice.say_and_wait('内容……嗯。');
    era.println();
    await me.say_as_unknown_and_wait([
      '在赛场上 ',
      rice.get_colored_name(),
      ' 努力的样子，给了我很多的勇气……',
    ]);
    await me.say_as_unknown_and_wait([
      '……看见 ',
      rice.get_colored_name(),
      ' 的笑容的话……',
    ]);
    await me.say_as_unknown_and_wait('……无论何时都能感受到温暖');
    era.println();
    await rice.say_and_wait([self_name, '，努力的样子……']);
    await rice.say_and_wait([self_name, ' 的，笑容……']);
    await rice.say_and_wait('……这样啊。');
    await rice.say_and_wait('会有人为此感到高兴啊。');
    await rice.say_and_wait([callname, '。']);
    await rice.say_and_wait([self_name, ' 会，一直、一直努力的……！']);
    await rice.say_and_wait([
      '为了让为 ',
      self_name,
      ' 应援的人们，能够感到喜悦！',
    ]);
    await era.printAndWait([
      rice.get_colored_name(),
      ' 的眼睛里，似乎亮起了干劲的火焰！',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(30, undefined, 30);
    flags.wait_flag = sys_change_motivation(30, 1) || flags.wait_flag;
  };

  handlers[95 + 48] = async (rice, me, callname, self_name) => {
    await print_event_name('记者见面会', rice);
    const bourbon = get_chara_talk(26),
      mcqueen = get_chara_talk(13);
    await era.printAndWait([
      race_infos[race_enum.arim_kin].get_colored_name(),
      ' 即将到来的这一天。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 和 ',
      rice.get_colored_name(),
      ' 前去参加了联合采访。',
    ]);
    await rice.say_and_wait('诶、诶诶……！？');
    await rice.say_and_wait([self_name, ' 在中间吗？']);
    await say_by_passer_by('工作人员A', [
      '是啊！因为是人气投票第一的',
      rice.get_uma_sex_title(),
    ]);
    await say_by_passer_by('工作人员A', '中间可是主角的位置哦！');
    await rice.say_and_wait('但是……这个，今天—');
    await bourbon.say_and_wait([
      sys_get_colored_callname(26, 30),
      '，请迅速且堂堂正正地回应。',
    ]);
    await bourbon.say_and_wait('拍摄之后还有采访。');
    await mcqueen.say_and_wait('呵呵，是啊。');
    await mcqueen.say_and_wait('没有主角的话就开始不了啊。');
    await bourbon.say_and_wait(
      '嗯。然后你就会宣布【见证史上最棒的比赛】的，对吧？',
    );
    await mcqueen.say_and_wait('啊！到这种程度吗？');
    await mcqueen.say_and_wait('呼呼……那还真是，期待啊。');
    await rice.say_and_wait('呜～～大家，眼神好恐怖啊……');
    await me.say_and_wait('当主角可真不容易啊。');
    await rice.say_and_wait(['唔……连 ', callname, ' 也是这样……']);
    await era.printAndWait([
      '见面会结束了……为了休息和奖励努力了一天的 ',
      rice.get_colored_name(),
      '，决定到街上去逛逛。',
    ]);
    await rice.say_and_wait('唔诶……紧张死了。');
    await me.say_and_wait('很努力了呢。');
    await rice.say_and_wait('嗯……没想到会被那两个人给夹在了中间。');
    await rice.say_and_wait(['呐，', callname, '。']);
    await rice.say_and_wait('想要怎么样的礼物呢？');
    await rice.say_and_wait([self_name, '，想要回报 ', callname, '。']);
    await rice.say_and_wait('所以，送出怎么样的礼物才好呢？');
    await rice.say_and_wait(['……虽然，', self_name, ' 能做到的事很少。']);
    await me.say_and_wait('想看到你努力的样子。');
    await rice.say_and_wait('这样……就行了吗？');
    await me.say_and_wait('当然！');
    await rice.say_and_wait(['……', callname, '。']);
    await rice.say_and_wait('不行哦。');
    await rice.say_and_wait(['只有那样的话，', self_name, ' 才不要！']);
    await rice.say_and_wait('因为努力是理所当然的。');
    await rice.say_and_wait([
      '——所以，绝对要把 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      ' 的第一名，作为送给 ',
      callname,
      ' 的礼物！',
    ]);
    await rice.say_and_wait([
      '我想这一定是，只有 ',
      self_name,
      ' 才能送出来的礼物。',
    ]);
    await era.printAndWait('结果，别说是休息了。');
    await era.printAndWait('这个圣诞夜反倒让精神激昂了起来。');
    await rice.say_and_wait([callname, '，今天也谢谢你！']);
    await rice.say_and_wait([
      '到了 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '，',
      callname,
      ' 还有大家。',
    ]);
    await rice.say_and_wait([
      '一定会因为 ',
      self_name,
      ' 的奔跑而感到幸福的！',
    ]);
    await era.printAndWait([
      '然后，',
      rice.get_colored_name(),
      ' 迈着轻快的步伐向前走去。',
    ]);
    await era.printAndWait([
      '比刚见面时更加坚强的背影，现在轮到 ',
      me.get_colored_name(),
      ' 去追逐了。',
    ]);
  };

  /** @this CustomizedEdu */
  handlers.palace = async function (rice, me, callname, self_name) {
    await CustomizedEdu.common_palace(rice, me);
    era.drawLine();
    era.set('flag:当前位置', location_enum.gate);
    await print_event_name('从前从前，在某个地方……', rice);
    era.set('flag:当前位置', location_enum.office);
    await era.printAndWait([
      '「最初的三年」对赛',
      rice.get_uma_sex_title(),
      '来说非常重要，',
      rice.get_colored_name(),
      ' 顺利地在这段时间拿下了极为亮眼的成绩。',
    ]);
    await era.printAndWait([rice.sex, '也因此受到了世人的肯定。']);
    await rice.say_and_wait('颁奖仪式……？');
    await me.say_and_wait('去见大家吧。');
    await rice.say_and_wait([
      '……嗯。',
      self_name,
      ' 也想，亲口对大家说声谢谢。',
    ]);
    await era.printAndWait([
      '——于是隔天，',
      me.get_colored_name(),
      ' 和 ',
      rice.get_colored_name(),
      ' 一起来到了阪神赛场。',
    ]);
    await rice.say_and_wait('好多人……明明今天没有比赛的。');
    await say_by_passer_by('观众A', [
      '哇啊！',
      rice.get_colored_name(),
      ' 来了！呀啊啊～好可爱～！',
    ]);
    await say_by_passer_by('观众B', [
      '辛苦了～',
      rice.get_colored_name(),
      '！今天拜托你咯～！',
    ]);
    await rice.say_and_wait('咦……咦？');
    await say_by_passer_by('工作人员A', '两位，好久不见。');
    await rice.say_and_wait('好久不见。请问……这到底是？');
    await say_by_passer_by('工作人员A', '哦，其实原本我们打算只有工作人员。');
    await say_by_passer_by('工作人员A', '简单办个庆祝会，结果……');
    await say_by_passer_by('观众C', [
      rice.get_colored_name(),
      '～！看这边～！',
    ]);
    await say_by_passer_by('工作人员A', [
      '如你所看到的，很多观众都表示想要见到 ',
      rice.get_colored_name(),
      '。',
    ]);
    era.printButton(`因为大家都最喜欢 ${sys_get_callname(0, 30)} 了。`, 1);
    await era.input();
    await rice.say_and_wait('呜欸欸？最、最喜欢……');
    await say_by_passer_by('工作人员A', '啊哈哈，说的没错。');
    await say_by_passer_by(
      '工作人员A',
      '于是我们改变了原定计划，拜托各界的相关人士协助……',
    );
    await say_by_passer_by(
      '工作人员A',
      '颁奖仪式就这样，变成一般观众也可以参加的典礼了。',
    );
    await rice.say_and_wait(['所以这些人，都是为了 ', self_name, ' 才……']);
    await say_by_passer_by('工作人员A', '嗯，是的。');
    await say_by_passer_by('工作人员A', '可以拜托你完成那天无法完成的事吗？');
    era.drawLine();
    await rice.say_and_wait('那个，大家好。');
    await rice.say_and_wait([
      '真的很感谢今天有这么多人，愿意为了 ',
      self_name,
      ' 来这里。',
    ]);
    await rice.say_and_wait([self_name, ' 从来没看到过这么幸福的景色。']);
    await rice.say_and_wait('我现在，觉得真的很幸福。');
    await rice.say_and_wait([self_name, ' 不会再哭了。']);
    await rice.say_and_wait([
      '因为 ',
      self_name,
      ' 今天想看着大家的眼睛说话。',
    ]);
    await rice.say_and_wait([
      '如果只是一个人，',
      self_name,
      ' 现在应该也不会有什么进步。',
    ]);
    await rice.say_and_wait('只能蜷缩在自己的黑暗世界里。');
    await rice.say_and_wait(['但是，', self_name, ' 现在已经不是一个人了。']);
    await rice.say_and_wait([
      self_name,
      ' 现在能站在这里，也是因为',
      me.sex,
      '的关系',
    ]);
    await rice.say_and_wait([
      '给了 ',
      self_name,
      ' 光亮，给了 ',
      self_name,
      ' 容身之处……',
    ]);
    await rice.say_and_wait('大家，真的非常感谢你们！');
    await rice.say_and_wait(['所以还请大家，继续支持 ', self_name, '……！！']);
    await say_by_passer_by_and_wait('观众们', '哇啊啊啊啊啊啊啊——');
    era.drawLine({ content: '回程的巴士上' });
    await rice.say_and_wait(['谢谢你，', callname, '。都是多亏有你。']);
    await me.say_and_wait([
      '你真的很努力了，',
      sys_get_colored_callname(0, 30),
      '。',
    ]);
    await rice.print_and_wait([
      '于是，一直都觉得自己很没用的',
      rice.get_child_sex_title(),
      '，成为了某人的蓝蔷薇。',
    ]);
    await rice.print_and_wait('虽然和绘本不同，虽然偶有不幸的发生……');
    await rice.print_and_wait([
      '但',
      rice.sex,
      '，会带着带给大家幸福的希望，让自己美丽地盛开。',
    ]);
    await rice.print_and_wait([
      rice.get_colored_name(),
      '，在全世界最喜欢的人身边，如此祈祷着。',
    ]);
  };

  handlers.stay = async (rice, me, callname) => {
    await print_event_name('寝不足', rice);
    await rice.say_and_wait('呼～啊……');
    era.printButton('没睡好？', 1);
    await era.input();
    await rice.say_and_wait('哎！？');
    await rice.say_and_wait(['啊，太好了，', callname, '～']);
    await rice.say_and_wait('其实，昨天睡觉前，读了一本恐怖的书。');
    await rice.say_and_wait('结果开始留意桌子上布娃娃的面向。');
    await rice.say_and_wait('时钟的指针声音听上去也变得非常大……');
    await rice.say_and_wait('最后就，全部的东西都开始在意了，完全睡不着……');
    await rice.say_and_wait('哈啊～');
    await era.printAndWait([
      '看来，',
      rice.get_colored_name(),
      ' 好像睡眠不足。',
    ]);
    await era.printAndWait('能好好入睡就好了。');
  };
};
