const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');

/**
 * @param _
 * @param __
 * @param {EventObject} event_object
 */
module.exports = async (_, __, event_object) => {
  if (event_object.arg?.punish === 1) {
    const callname = sys_get_callname(52, 0),
      me = get_chara_talk(0),
      urara = get_chara_talk(52);
    await era.printAndWait([
      '仿佛不知羞耻地上下摆弄着自己变得陌生敏感的肉体，今天的 ',
      me.get_colored_name(),
      ' 缩在训练员室的一角轻声娇吟着。',
    ]);
    await era.printAndWait([
      '镜中的身材与面容都变得精美到不像自己，但 ',
      me.get_colored_name(),
      ' 却选择浸在醒不来的噩梦中无法自拔。',
    ]);
    await era.printAndWait([
      '只要轻轻触碰，这幅身体就会瘙痒难忍……这也是因为改造吗？还是说，难道这就是马娘的身体……？',
    ]);
    await era.printAndWait([
      '但就在 ',
      me.get_colored_name(),
      ' 想要继续将衣物褪下时，身后没有上锁的门却传来了轻巧而礼貌的敲击声。',
    ]);
    await era.printAndWait([
      '在门被推开的前一秒，清醒了大半的 ',
      me.get_colored_name(),
      ' 惊恐地压住怦怦直跳的胸口，并在慌忙中遮住了自己的身体。',
    ]);
    await era.printAndWait([
      '而看着面前衣衫凌乱的「马娘姐姐」，推门而入的 ',
      urara.get_colored_name(),
      ' 则天真又疑惑地歪歪脑袋。',
    ]);
    await urara.say_and_wait([
      '诶？原来是 ',
      callname,
      ' 啊，虽然乌拉拉也觉得会有这么一天，但是不是太快了？',
    ]);
    await era.printAndWait([
      '在惊讶之后还是挂起了熟悉的笑脸，很快便将 ',
      callname,
      ' 认出的小',
      urara.get_uma_sex_title(),
      '带着一如既往的乖巧坐到 ',
      me.get_colored_name(),
      ' 的身边。',
    ]);
    await urara.say_and_wait([
      '嘿嘿～',
      callname,
      ' 还是 ',
      callname,
      ' 呢！我还以为要重新和 ',
      callname,
      ' 认识，那样就太可惜了！',
    ]);

    era.printButton('「……乌拉拉，原来你也知道吗？」', 1);
    await era.input();

    await urara.say_and_wait([
      '嗯！乌拉拉以前也从大家那里听说过，只是像 ',
      callname,
      ' 这样乌拉拉还是第一次见！',
    ]);
    await urara.say_and_wait([
      '不过 ',
      callname,
      ' 的变化真的很大呢，好在身上的气味一点没变，所以乌拉拉立刻认出来了！',
    ]);
    await era.printAndWait([
      '悄悄地伸出双手，',
      urara.get_colored_name(),
      ' 安慰般地抚摸着 ',
      me.get_colored_name(),
      ' 的脸颊，并在微微犹豫后选择了一路向上。',
    ]);
    await era.printAndWait([
      '担当调皮的小手拂过了 ',
      me.get_colored_name(),
      ' 变得更加柔顺的发丝，最后捉住了头顶那对还不太听话的毛茸茸的马耳朵。',
    ]);

    if (era.get('relation:52:0') > 150 && new UraraEduMarks().loop < 2) {
      await urara.say_and_wait([
        callname,
        ' 现在还很不方便吧？但是没关系，乌拉拉也可以教 ',
        callname,
        ' 怎么应付生活哦！',
      ]);
      await urara.say_and_wait([
        '乌拉拉好像还听大家说，如果 ',
        callname,
        ' 再改变下去，好像还会发生更可怕的事……',
      ]);
      await era.printAndWait([
        '仿佛想起了什么可怕的事情，',
        urara.get_colored_name(),
        ' 先是在颤抖中顿了顿，但又安慰般地笑着抱住了身边的 ',
        me.get_colored_name(),
        '。',
      ]);
      await urara.say_and_wait([
        '没关系的！如果真的变成那样还有我来照顾 ',
        callname,
        '！虽然 ',
        callname,
        ' 不变成那样才是最好的！',
      ]);
    } else {
      await urara.say_and_wait([
        '如果变成这样的 ',
        callname,
        ' 在之后能对乌拉拉更温柔些就好了，不过真的会变成那样吗？',
      ]);
      await urara.say_and_wait([
        '而且乌拉拉还听说，如果还像以前一样，',
        callname,
        ' 就会变成很奇怪的样子……',
      ]);
      await era.printAndWait([
        '像是突然想到了什么伤心事般，紧紧抱住 ',
        me.get_colored_name(),
        ' 的身体，小',
        urara.get_uma_sex_title(),
        '看向 ',
        me.get_colored_name(),
        ' 的眼神也变得有些复杂。',
      ]);
      await urara.say_and_wait([
        '如果真变成那样的话……就算 ',
        callname,
        ' 不喜欢，乌拉拉也只能来照顾 ',
        callname,
        ' 了哦？',
      ]);
    }

    await era.printAndWait([
      '也许小 ',
      urara.get_colored_name(),
      ' 知道的事情，要比 ',
      me.get_colored_name(),
      ' 想象中的……不对，或许就是 ',
      me.get_colored_name(),
      ' 比知道的还要多也说不定。',
    ]);
    await era.printAndWait([
      '只是……不管以前相处得是否愉快，眼前这双清澈的樱瞳也一直都心系着',
      urara.sex,
      '的 ',
      callname,
      '。',
    ]);
    await era.printAndWait([
      '或许哪怕已经回不去了，现在也为时不晚？或许就算是为了 ',
      urara.get_colored_name(),
      '，现在尝试着改变也还有机会？',
    ]);
    await era.printAndWait([
      '……至少，先把迟来的那句话告诉',
      urara.sex,
      '吧。抱紧怀中小',
      urara.get_uma_sex_title(),
      '，',
      me.get_colored_name(),
      ' 回想起了医务室中的第一次相拥……',
    ]);

    era.printButton('「谢谢你……」', 1);
    await era.input();

    await urara.say_and_wait([
      '嗯？',
      callname,
      ' 为什么要道谢呢？乌拉拉明明还什么都没做哦？',
    ]);
    await urara.say_and_wait([
      '不过……为了不让 ',
      callname,
      ' 变成那样，乌拉拉和 ',
      callname,
      ' 不能只是嘴上说说就结束了哦？',
    ]);
    await era.printAndWait([
      '仿佛是在安抚走失的小女孩般轻柔地拍着 ',
      me.get_colored_name(),
      ' 的后背，',
      urara.get_colored_name(),
      ' 在 ',
      me.get_colored_name(),
      ' 的怀中依旧温柔的笑着。',
    ]);
    await era.printAndWait([
      '或许此时此刻，看似幼稚的',
      urara.sex,
      '才是真正值得依靠的「大人」吧……',
    ]);
    await urara.say_and_wait([
      '所以乌拉拉决定了，从今天开始一起并跑吧？只要认真起来，以后一定可以好起来吧？',
    ]);

    era.printButton('「诶？但是这个身体我还……」', 1);
    await era.input();

    await urara.say_and_wait([
      '不用担心哦？我可以保证哦？',
      callname,
      ' 以后一定会跑得比乌拉拉还快的！',
    ]);
    await urara.say_and_wait([
      '所以……输掉的人就给摸摸尾巴好了！嘿嘿～反正 ',
      callname,
      ' 的尾巴肯定和刚睡醒时一样乱吧？',
    ]);
    await era.printAndWait([
      '还不等 ',
      me.get_colored_name(),
      ' 反应过来，',
      urara.get_colored_name(),
      ' 便拉着 ',
      me.get_colored_name(),
      ' 冲出训练员室，一路奔向了训练场的方向。',
    ]);
    await era.printAndWait([
      '虽然 ',
      me.get_colored_name(),
      ' 还什么都没做，但与小担当的间距却在不知不觉间又拉近了不少。',
    ]);
    await era.printAndWait(['或许被变成马娘这件事……似乎也不完全是坏事？']);
  }
};
