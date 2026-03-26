const era = require('#/era-electron');

const { add_event } = require('#/event/queue');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const KitaruEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-56');

/**
 * @param {CharaTalk} kitaru
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {EventObject} event_object
 */
module.exports = async (kitaru, me, callname, hook, event_object) => {
  if (era.get('flag:当前互动角色') !== 56) {
    add_event(hook.hook, event_object);
    return;
  }
  const edu_marks = new KitaruEduMarks();
  let wait_flag = false;
  if (event_object?.arg === 'fortune_game_duel_1') {
    edu_marks.game_times = 5;
    await print_event_name('和占卜师的游戏对决！Ⅰ', kitaru);
    await era.printAndWait([
      '该说 ',
      kitaru.get_colored_name(),
      ' 在游戏，尤其是对抗性较强的类型上的天赋意外的高吗？',
    ]);
    await era.printAndWait([
      '自从 ',
      me.get_colored_name(),
      ' 把',
      kitaru.sex,
      '带入电子游戏的深坑之后，从开始还能凭借 ',
      kitaru.get_colored_name(),
      ' 的生疏获得优势，到后面被',
      kitaru.sex,
      '几乎是未卜先知般的意识一边倒的碾压。',
    ]);
    await kitaru.say_and_wait(['好了好了！', callname, ' 在想什么呢？']);
    await era.printAndWait([
      '又到了打游戏的闲暇时光，坐在游戏机前的担当冲 ',
      me.get_colored_name(),
      ' 举着手柄，用尾巴拍了拍一旁沙发上留给Player2的位置。',
    ]);
    await era.printAndWait([
      '两条健康肉感的双腿交叉着搁置在沙发的扶手上，裸露在外的脚趾慵懒的摆动着。',
    ]);
    await era.printAndWait(['那么 ', me.get_colored_name(), ' 决定……']);
    era.printButton('双人的格斗向游戏', 1);
    era.printButton('竞速向的赛车游戏', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait(
        '有来有回，可惜最后还是被击败了……奇怪，怎么会输呢？',
      );
      await era.printAndWait([
        '明明最早是 ',
        me.get_colored_name(),
        ' 教 ',
        kitaru.get_colored_name(),
        ' 打游戏的啊，那个操作意识就算是用',
        kitaru.uma_sex_title,
        '的反应速度来解释也说不通。',
      ]);
    } else {
      await era.printAndWait('险而又险。');
      await era.printAndWait([
        '你们玩的是竞速赛车游戏，幸好在最后一圈的时候趁着 ',
        kitaru.get_colored_name(),
        ' 没反应过来超过了',
        kitaru.sex,
        '。',
      ]);
      await era.printAndWait([
        '话说，',
        kitaru.sex,
        '是怎么做到不看后视镜的情况下卡 ',
        me.get_colored_name(),
        ' 赛车位置的呢？',
      ]);
    }
    await kitaru.say_and_wait('唔……大概是占卜师的预感吧。');
    await me.say_and_wait('预感？');
    await kitaru.say_and_wait('嗯！');
    await kitaru.say_and_wait([
      '对啊！就是大概能猜到 ',
      callname,
      ' 之后会怎么做。',
    ]);
    await kitaru.say_and_wait('可惜隔着电脑屏幕的其他玩家就不行了……');
    era.println();
    wait_flag = get_skills_and_print_in_event(56, [201432]);
  } else if (event_object?.arg === 'fortune_game_duel_2') {
    await print_event_name('和占卜师的游戏对决！Ⅱ', kitaru);
    await kitaru.say_and_wait('好欸！！！');
    await era.printAndWait([
      '在答应陪',
      kitaru.sex,
      '打游戏之后，',
      kitaru.get_colored_name(),
      ' 总算是消停了一些。',
    ]);
    await kitaru.say_and_wait([
      '是啊！果然还是要和 ',
      callname,
      ' 玩才有意思嘛！',
    ]);
    await era.printAndWait([
      '不过，对于 ',
      kitaru.get_colored_name(),
      ' 的能力，',
      me.get_colored_name(),
      ' 陪',
      kitaru.sex,
      '打无疑是自讨苦吃。',
    ]);
    await kitaru.say_and_wait('诶！？');
    await era.printAndWait([
      '在提出了不许 ',
      kitaru.get_colored_name(),
      ' 使用占卜能力之后，',
      kitaru.sex,
      '露出了有些不满的表情，看来',
      kitaru.sex,
      '并不想放弃自己的些许优势。',
    ]);
    await kitaru.say_and_wait('当然没问题啦！');
    await era.printAndWait([
      '奇怪，',
      kitaru.sex,
      '只是稍稍思考了一下，就爽快的答应了 ',
      me.get_colored_name(),
      ' 的请求。',
    ]);
    await era.printAndWait(['那么 ', me.get_colored_name(), ' 决定……']);
    era.printButton('双人的格斗向游戏', 1);
    era.printButton('竞速向的赛车游戏', 2);
    const temp = await era.input();
    if (temp === 1) {
      await era.printAndWait([
        '看来之前的失败果然是',
        kitaru.sex,
        '那玄之又玄的能力，直到那个由 ',
        kitaru.get_colored_name(),
        ' 操控的举着船锚的角色在血量所剩无几的情况下被 ',
        me.get_colored_name(),
        ' 逼退到屏幕边缘。',
      ]);
    } else if (temp === 2) {
      await era.printAndWait([
        '看来之前的失败果然是',
        kitaru.sex,
        '那玄之又玄的能力，凭借着恰当的操作技巧，',
        me.get_colored_name(),
        ' 的赛车一直领先在 ',
        kitaru.get_colored_name(),
        ' 的赛车前面。',
      ]);
    }
    if (kitaru.sex_code === 1 || me.sex_code === 0) {
      await era.printAndWait('赢了！');
      return true;
    }
    await era.printAndWait('赢定了……吗？');
    await me.say_and_wait('唔……');
    await era.printAndWait(
      '还在沉睡状态的胯下之物隔着布料突然感受到了某种颇为不妙的触感。',
    );
    await kitaru.say_and_wait('嘿呀！');
    await era.printAndWait('一下，两下，而后是接连不断的轻触。');
    await era.printAndWait([me.get_colored_name(), ' 下意识的低头看去，']);
    await era.printAndWait([
      me.get_colored_name(),
      ' 的两腿之间，',
      kitaru.get_colored_name(),
      ' 的右脚正隔着布料压在上面，裸露在外的圆润脚趾，随着',
      kitaru.sex,
      '控制操控摇杆的动作有节奏地轻点着 ',
      me.get_colored_name(),
      ' 那正逐渐抬起头来的肉棒。',
    ]);
    await kitaru.say_and_wait('哈！');
    await era.printAndWait([
      '就趁着 ',
      me.get_colored_name(),
      ' 这走神的功夫，',
      kitaru.get_colored_name(),
      ' 抓住了机会。',
    ]);
    await era.printAndWait(
      '珍珠般的可爱足趾并拢，与绷紧的脚背一起前压，让本就因为布料阻碍而胀的难受的肉棒突然一下受到更大的刺激。',
    );
    await me.say_and_wait('喂！待兼福来！');
    await kitaru.say_and_wait(['啊啦，', callname, ' 失误了呢！']);
    await me.say_and_wait('嘶……');
    await era.printAndWait([
      '受到提醒后 ',
      kitaru.get_colored_name(),
      ' 反而得寸进尺，',
      me.get_colored_name(),
      ' 不禁弓起了背，手中的摇杆在突如其来的刺激下和胯下的肉棒一起随着',
      kitaru.sex,
      '的动作颤抖着。',
    ]);
    if (temp === 1) {
      await era.printAndWait([
        '在 ',
        kitaru.get_colored_name(),
        ' 早有准备的一连串招数之后，屏幕恰当的弹出了象征着 ',
        me.get_colored_name(),
        ' 被击败的SLASH！',
      ]);
    } else {
      await era.printAndWait([
        '漆着赛',
        kitaru.uma_sex_title,
        '特色涂装的赛车冲出了护栏，坠入了山谷。',
      ]);
    }
    await kitaru.say_and_wait(['哎呀，', callname, ' 输了呢？']);
    await era.printAndWait([
      '方才还碰着 ',
      me.get_colored_name(),
      ' 下体的脚已经缩了回去。',
    ]);
    await era.printAndWait([
      '受困于布料内的肉棒胀的 ',
      me.get_colored_name(),
      ' 有些难受，然而造成这一切的家伙却装着若无其事的看着 ',
      me.get_colored_name(),
      '。',
    ]);
    await kitaru.say_and_wait('再来一局吗？');
    await era.printAndWait([
      '话语间夹杂些许媚意的 ',
      kitaru.get_colored_name(),
      '，放下了手柄，侧看身子看着你。',
    ]);
    await era.printAndWait([
      '衬衫下优美的背部曲线与臀瓣分开的光洁裸腿肆意的展现在 ',
      me.get_colored_name(),
      ' 的面前。',
    ]);
    await kitaru.say_and_wait('还算说……想要惩罚一下小福我呢？');
    era.printButton('是', 1);
    era.printButton('否', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        me.get_colored_name(),
        ' 站了起来，然而看到 ',
        me.get_colored_name(),
        ' 有所动作的 ',
        kitaru.get_colored_name(),
        ' 似乎并没有将要受到惩罚的慌乱，反而……',
      ]);
      await era.printAndWait([
        '……如果 ',
        me.get_colored_name(),
        ' 没有看错的话，那对眸子在扫过 ',
        me.get_colored_name(),
        ' 下身支起的帐篷时，',
        kitaru.sex,
        '吞了下口水。',
      ]);
      await era.printAndWait([
        '抓住方才',
        kitaru.sex,
        '使坏的小脚，一把将这家伙推倒在了沙发上，而后褪下了自己的裤子，让因为先前福来挑逗而蓄势待发的肉棒伸入了福来的裙摆下。',
      ]);
      await kitaru.say_and_wait('呀！');
      await era.printAndWait(
        '伸手挑开似乎是已经知道了将要面对什么而变得有了些水渍的内裤，肉棒简单蹭了两下发热的穴口，便开始长驱直入。',
      );
      await era.printAndWait('砰！');
      await kitaru.say_and_wait('唔啊！！！');
      await era.printAndWait([
        '因为体型差的关系，',
        kitaru.get_colored_name(),
        ' 柔软的宫口对于 ',
        me.get_colored_name(),
        ' 的肉棒来说，并不是什么无法触及的地方。',
      ]);
      await era.printAndWait(
        '只是第一次撞击，体验到快感的福来就忍不住叫出了声。',
      );
      await kitaru.say_and_wait('哈啊……');
      await era.printAndWait([
        me.get_colored_name(),
        ' 的肉棒在小穴内毫不留情的来回抽插，惩罚起这个在方才用脚玩弄它的',
        kitaru.uma_sex_title,
        '。',
      ]);
      await kitaru.say_and_wait('哈……哈……');
      await era.printAndWait([
        '身下的爱人只是喘着粗气，让红润的臀瓣高高翘起，以配合 ',
        me.get_colored_name(),
        ' 的动作。',
      ]);
      await era.printAndWait([
        '双手先是扶着腰，而后上移把玩起那对乳房，再到后来抓着福来的手腕，让',
        kitaru.sex,
        '随着 ',
        me.get_colored_name(),
        ' 抽插的动作仰起头来。',
      ]);
      await kitaru.say_and_wait('呀啊！！！');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 的双足直直地绷起，趾尖也因为快感而抽颤起来。',
      ]);
      await kitaru.say_and_wait('要去了呀啊啊哈！！！');
      await era.printAndWait(
        '随着精液的注入，占卜师小姐高高的昂起头，让嘴角因为快感而留下的透明涎水顺着洁白的天鹅颈滴落，沾湿了衣襟。',
      );
      era.println();
      wait_flag = get_skills_and_print_in_event(56, [201431]);
    }
  }
  wait_flag && (await era.waitAnyKey());
  return true;
};
