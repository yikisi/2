const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean}):Promise>} handlers */
module.exports = (handlers) => {
  handlers.model_secret = async (maya, me, callname, flags) => {
    await print_event_name('成熟模特儿的秘诀！', maya);
    const city = get_chara_talk(40);
    const snow = get_chara_talk(29);
    await era.printAndWait([
      me.get_colored_name(),
      ' 请摩耶重炮帮 ',
      me.get_colored_name(),
      ' 一起整理资料的时候──',
    ]);
    await maya.say_and_wait([
      '啊！这是有刊 ',
      sys_get_colored_callname(24, 40),
      ' 的杂志！',
    ]);
    await maya.say_and_wait([
      sys_get_colored_callname(24, 40),
      ' 果然好漂亮哦～♪穿裸露度高的衣服也很好看！',
    ]);
    await maya.say_and_wait('……对了！人家想到了一个好主意～！');
    await era.printAndWait(['整理完文件后，你们在外面走着──']);
    await city.say_and_wait([
      '哦，是 ',
      sys_get_colored_callname(40, 24),
      '。',
    ]);
    await snow.say_and_wait('你好～！');
    await maya.say_and_wait([
      '是 ',
      sys_get_colored_callname(24, 29),
      ' 和 ',
      sys_get_colored_callname(24, 40),
      '～！来得正好☆',
    ]);
    await maya.say_and_wait([
      '我说啊～！',
      sys_get_colored_callname(24, 40),
      ' 是读者模特儿吧？',
    ]);
    await maya.say_and_wait([
      sys_get_colored_callname(24, 40),
      ' 认识很多成熟的模特儿，是一位帅气的大人──',
    ]);
    await maya.say_and_wait([
      '希望你可以告诉我成为成熟',
      maya.phy_sex_title,
      '的秘诀～♪',
    ]);
    await city.say_and_wait([
      '『成熟',
      maya.phy_sex_title,
      '』吗……你真的很喜欢这个呢。',
    ]);
    await snow.say_and_wait(['成、成熟的', maya.phy_sex_title, '！？哇……！']);
    await snow.say_and_wait([
      '……不、不过如果那就是『城市',
      maya.child_sex_title,
      '』的诀窍……希望你也能告诉我！',
    ]);
    await city.say_and_wait([
      '咦……连 ',
      sys_get_colored_callname(40, 29),
      ' 也这么说？',
    ]);
    await city.say_and_wait('……是可以啦。但只是我自己的看法，请多包涵。');
    await city.say_and_wait('我在担任读者模特儿的时候，会注重的有两点。');
    await city.say_and_wait('首先是『状态』。');
    await city.say_and_wait('总是维持最佳状态，展现自己最好的一面。');
    await maya.say_and_wait('最好的一面……好酷！！然后呢然后呢！？');
    await city.say_and_wait('再来是『迅速』。');
    await city.say_and_wait('掌握时下流行趋势，走在流行最尖端。');
    await snow.say_and_wait('真、真有参考价值～！');
    await maya.say_and_wait([
      sys_get_colored_callname(24, 40),
      ' 总是这么地闪闪发亮，就是这两点的关系吧～！',
    ]);
    await maya.say_and_wait('只要人家学起来的话，说不定就能朝大人更近一步♪');
    era.println();
    era.printButton('「维持状态确实很重要」（耐力+20）', 1);
    era.printButton('「保持迅速确实很重要」（速度+20）', 2);
    if ((await era.input()) === 1) {
      await maya.say_and_wait('对吧对吧～♪状态啊～！');
      await maya.say_and_wait('状态……锻炼身体……嗯！人家懂了！');
      await maya.say_and_wait(['增强体力就好了吧！对吧！？', callname, '♪']);
      era.printButton('「咦？」', 1);
      await era.input();
      await maya.say_and_wait('好了，走吧走吧！看人家变成熟的样子♪');
      await city.say_and_wait('我指的不是那个意思……不过算了。');
      await city.say_and_wait([
        '就当作',
        maya.sex,
        '要以自己的方式成为大人吧。',
      ]);
      await snow.say_and_wait([
        '好、好帅……！我也想赶快变得跟 ',
        sys_get_colored_callname(24, 40),
        ' 一样～',
      ]);
      await era.printAndWait([
        '为了维持最佳状态而不断训练的 ',
        maya.get_colored_name(),
        '，增加了不少体力。',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 20], 0);
    } else {
      await maya.say_and_wait('对吧对吧～♪保持迅速啊～！');
      await maya.say_and_wait('速度的话……对了！');
      await maya.say_and_wait('老师之前好像有提到，说『折返跑很有用』～！');
      era.printButton('「是没错啦……」', 1);
      await era.input();
      await maya.say_and_wait([
        '那就决定了♪既然 ',
        callname,
        ' 也认证了，那一定不会错！',
      ]);
      await maya.say_and_wait('起飞前往操场☆我要跑得比任何人都快♪');
      await snow.say_and_wait([
        sys_get_colored_callname(29, 40),
        '……那个，因为我也想成为『城市',
        maya.child_sex_title,
        '』……！',
      ]);
      await city.say_and_wait('嗯，不用在意我没关系……好好加油吧。');
      await snow.say_and_wait('是的！好，我要加油～！');
      await era.printAndWait([
        '为了提升速度进行的折返跑，似乎对 ',
        maya.get_colored_name(),
        ' 来说成为了很好的训练。',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(24, [20], 0);
    }
  };

  handlers.maya_reading = async (maya, me, callname, flags) => {
    await print_event_name('念书就交给摩耶重炮☆', maya);
    await era.printAndWait([
      '已经到了开会的时间，',
      maya.get_colored_name(),
      ' 却还没有来……',
    ]);
    await maya.say_and_wait('哈喽哈喽～！让你久等了吗～！？');
    era.printButton('「没有，我才刚到」', 1);
    await era.input();
    await maya.say_and_wait('哇哇☆刚才那样好像在约会！？呀～～～！');
    await maya.say_and_wait([
      '我要说的不是这个！',
      callname,
      '，对不起！我被班上同学拖住了～',
    ]);
    era.drawLine();
    await say_by_passer_by_and_wait(
      '赛' + maya.uma_sex_title + 'A',
      '唉，明天开始考试吗～',
    );
    await say_by_passer_by_and_wait(
      '赛' + maya.uma_sex_title + 'B',
      '真是忧郁～干脆请假算了？',
    );
    await maya.say_and_wait('我懂我懂！人家也很讨厌考试～！！');
    await maya.say_and_wait(
      '明明一下就写完了，却不能睡觉也不能玩！真是的，这不就只能画画了吗～！！',
    );
    await say_by_passer_by_and_wait('赛' + maya.uma_sex_title + 'A', [
      maya.get_colored_name(),
      '，我说你啊～！',
    ]);
    await say_by_passer_by_and_wait(
      '赛' + maya.uma_sex_title + 'B',
      '真羡慕～下次的考试你也全都『懂』吧？',
    );
    await maya.say_and_wait('算是吧～');
    await say_by_passer_by_and_wait('赛' + maya.uma_sex_title + 'A', [
      '对了，',
      maya.get_colored_name(),
      '！告诉我们可能会考哪些啦！',
    ]);
    await say_by_passer_by_and_wait(
      '赛' + maya.uma_sex_title + 'B',
      '拜托你了～！就当作是帮助朋友！好吗？',
    );
    await maya.say_and_wait('收到☆全都包在我这摩耶重炮大人身上吧♪');
    era.drawLine();
    await maya.say_and_wait([
      '大概就是这样，我教',
      maya.sex,
      '们我会的部分！',
      maya.sex,
      '们都很开心！',
    ]);
    await maya.say_and_wait([
      maya.sex,
      '们还说『下次也麻烦你了』！嘿嘿，受欢迎的',
      maya.phy_sex_title,
      '还真辛苦啊～♪',
    ]);
    await era.printAndWait([
      maya.get_colored_name(),
      ' 好像很开心，不过身为',
      maya.sex,
      '的训练员，',
      me.get_colored_name(),
      ' 有点担心这会不会造成',
      maya.sex,
      '的负担……',
    ]);
    era.printButton('「你也要求一些回礼如何？」（力量&根性+10）', 1);
    era.printButton('「不愿意的时候要拒绝哦」（智力+20）', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '不只是单纯教别人，要是还能获得回礼，应该能减轻',
        maya.sex,
        '的负担，所以 ',
        me.get_colored_name(),
        ' 如此提案──',
      ]);
      await maya.say_and_wait('啊！！人家完全忘记了！');
      await maya.say_and_wait('回礼吗～♪要求什么好呢～？');
      await maya.say_and_wait(['……对了！请', maya.sex, '们陪我玩好了！']);
      await maya.say_and_wait('考试期间大家都要念书，都没有人要陪我玩～');
      era.printButton(
        '「多亏你教' + maya.sex + '们，' + maya.sex + '们有空了呢」',
        1,
      );
      await era.input();
      await maya.say_and_wait(['没错没错！我明天去问', maya.sex, '们♪']);
      era.drawLine();
      await say_by_passer_by_and_wait(
        '赛' + maya.uma_sex_title + 'A',
        '给你的回礼？',
      );
      await maya.say_and_wait('对！希望你们能陪人家一起玩♪');
      await maya.say_and_wait('最近大家随口不离考试，都不陪我～');
      await say_by_passer_by_and_wait('赛' + maya.uma_sex_title + 'B', [
        ' 你说的是『',
        maya.get_colored_name(),
        ' 新兵训练营』……也就是大家一起尽全力去玩到没力对吧。',
      ]);
      await say_by_passer_by_and_wait(
        '赛' + maya.uma_sex_title + 'A',
        '不错啊。我正想要放松一下！',
      );
      await say_by_passer_by_and_wait('赛' + maya.uma_sex_title + 'B', [
        '我也是！尽管来吧，',
        maya.get_colored_name(),
        ' 新兵训练营♪',
      ]);
      await maya.say_and_wait('太棒了～～～～～！尽情地玩吧！！');
      await era.printAndWait([
        '几天后，玩到门禁前一刻的 ',
        maya.get_colored_name(),
        '，带着精神饱满的神情回来了，',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 10, 10], 0);
    } else {
      await maya.say_and_wait(['真是的！', callname, ' 真爱担心～♪']);
      await maya.say_and_wait('人家很高兴能被依赖，大家搞懂问题也都很开心！');
      await maya.say_and_wait('对不对？全是一堆好事哦♪');
      era.printButton('「那我希望你也能让我开心」', 1);
      await era.input();
      await maya.say_and_wait('没问题，没问题！有什么要求尽管说♪');
      await era.printAndWait([
        '因为获得了承诺，',
        me.get_colored_name(),
        ' 帮 ',
        maya.get_colored_name(),
        ' 安排了密集的训练。',
      ]);
      await maya.say_and_wait('哇～！这样人家根本就不开心──────！');
      era.drawLine();
      await maya.say_and_wait(['呜呜～！', callname, ' 坏心眼……']);
      await say_by_passer_by_and_wait('赛' + maya.uma_sex_title + 'A', [
        '啊哈哈，辛苦了，',
        maya.get_colored_name(),
        '！',
      ]);
      await say_by_passer_by_and_wait('赛' + maya.uma_sex_title + 'B', [
        '那个训练员还真有一手～！很懂要怎么跟 ',
        maya.get_colored_name(),
        ' 相处。',
      ]);
      await maya.say_and_wait(['对吧对吧！', callname, ' 可是很厉害的♪']);
      await say_by_passer_by_and_wait(
        '赛' + maya.uma_sex_title + 'A',
        '……你到底是在闹别扭，还是很开心？',
      );
      await maya.say_and_wait('因、因为少女心是很复杂的～！');
      await era.printAndWait([
        '有了惨痛的教训后，',
        maya.get_colored_name(),
        ' 好像稍微变成更聪明的',
        maya.phy_sex_title,
        '了。',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 0, 0, 20], 0);
    }
  };

  handlers.maya_takeoff = async (maya, me, callname, flags) => {
    await print_event_name('摩耶重炮 · 起飞🌟', maya);
    await era.printAndWait([maya.get_colored_name(), ' 的决胜服终于送来了。']);
    await era.printAndWait([
      '因为',
      maya.sex,
      '跟 ',
      me.get_colored_name(),
      ' 说「设计要等收到后才揭晓！」，所以这是 ',
      me.get_colored_name(),
      ' 第一次看到。',
    ]);
    await maya.say_and_wait('锵锵──☆');
    await maya.say_and_wait(['你看你看，', callname, '！超漂亮的吧～♪']);
    era.printButton('「我还以为会更飘逸……」', 1);
    await era.input();
    await maya.say_and_wait('嗯，关于这点人家也烦恼了很久～');
    await maya.say_and_wait('不过我想说这样也很性感，很适合我！你觉得怎么样？');
    era.printButton('「我觉得很帅气，很不错」', 1);
    await era.input();
    await maya.say_and_wait('太棒了～！！');
    await maya.say_and_wait('人家的爸爸和妈妈也有称赞服装的设计稿～♪');
    await maya.say_and_wait('他们说『就像爸爸年轻时一样，很帅气』！');
    era.printButton('「我记得你爸爸的工作是……」', 1);
    await era.input();
    await maya.say_and_wait('嗯！他是翱翔在天空的机师哦☆');
    await maya.say_and_wait('人家以前曾经坐过爸爸驾驶的小型喷射机～♪');
    await maya.say_and_wait('天空非常辽阔，我们住的城镇又远又小！');
    await maya.say_and_wait(
      '人家很喜欢在辽阔的风景中『咻──！』地飞来飞去的感觉～♪',
    );
    await maya.say_and_wait(
      '飞在天上就像在赛场上奔驰一样！令人感到既兴奋又刺激♪',
    );
    await maya.say_and_wait('所以我的决胜服才会设计成这样☆');
    await maya.say_and_wait(
      '这样在赛道上奔驰时，感觉就像在自由快乐的天空中飞翔一样～！',
    );
    era.println();
    era.printButton('「要朝向许多比赛起飞哦！」（速度+20）', 1);
    era.printButton('「我终于知道你的原点了」（耐力+20）', 2);
    if ((await era.input()) === 1) {
      await maya.say_and_wait('嗯嗯！我会的～！');
      await maya.say_and_wait('人家的飞行会让所有观众看见美丽风景的♪');
      await maya.say_and_wait([callname, ' 也注意不要迟到，而没有搭上哦！']);
      era.printButton('「我很期待呢」', 1);
      await era.input();
      await maya.say_and_wait(['谢谢，', callname, '！']);
      await maya.say_and_wait('我之后会变得更快，要一直看着人家哦♪');
      await maya.say_and_wait('有收到吗？');
      era.printButton('「收到！」', 1);
      await era.input();
      await maya.say_and_wait('嘿嘿～♪这是我们两人的约定！');
      await maya.say_and_wait('OKSmile☆LuckyPeace！摩耶重炮要上咯────♪');
      await era.printAndWait([
        '穿上决胜服之后，',
        maya.get_colored_name(),
        ' 对胜利的渴望好像提升了。',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(24, [20], 0);
    } else {
      await maya.say_and_wait('真的吗，真的吗？');
      await maya.say_and_wait([callname, ' 越来越了解人家了呢～♪']);
      await maya.say_and_wait('将来甚至比我的爸爸妈妈还要懂我……呀～☆');
      era.printButton('「这么说来，已经给你爸妈看过衣服了吗？」', 1);
      await era.input();
      await maya.say_and_wait('咦？没有，还没！');
      await maya.say_and_wait([
        '我很久之前就决定要第一个拿给 ',
        callname,
        ' 看了♪',
      ]);
      await maya.say_and_wait('……对了！我传个照片给爸爸妈妈！');
      await maya.say_and_wait([callname, ' 也一起入镜嘛！好吗？']);
      era.printButton('「可以吗？」', 1);
      await era.input();
      await maya.say_and_wait('那当然是完全没有问题！');
      await maya.say_and_wait(['爸爸妈妈他们也说很想看看 ', callname, '～！']);
      await maya.say_and_wait('来，再靠近一点～！预备……起飞☆');
      await maya.say_and_wait('嘿嘿，拍得很好♪传送！');
      await maya.say_and_wait('啊！爸爸他们传信息来了！嗯嗯……');
      await maya.say_and_wait('啊哈哈♪他们说你看起来人很好！');
      await maya.say_and_wait([
        '他们还说『',
        maya.get_colored_name(),
        ' 就麻烦你照顾了』！这下就是父母公认的 ',
        callname,
        ' 了呢☆',
      ]);
      await era.printAndWait([
        '虽然有些难为情，不过 ',
        me.get_colored_name(),
        ' 再次下定决心，之后也要继续成为',
        maya.sex,
        '的助力。',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 20], 0);
    }
  };
};
