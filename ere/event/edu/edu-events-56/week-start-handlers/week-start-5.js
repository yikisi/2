const era = require('#/era-electron');

const sys_filter_chara = require('#/system/sys-filter-chara');

const typing = require('#/event/edu/edu-events-56/snippets/typing');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FukukitaruEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[95 + 25] = async (kitaru, me, callname, flags) => {
    await print_event_name('无愿之愿', kitaru);
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 如往常一样，站在神社的摇铃前',
    ]);
    await kitaru.say_and_wait('呼呼！那么，接下来该许愿了！');
    await kitaru.say_and_wait('希望未知的下一场比赛……');
    await kitaru.say_and_wait(
      '欸！不管是什么，总之神明只需要看着我就好了，我会自己完成的！',
    );
    await kitaru.say_and_wait('来许个别的愿望吧……');
    await era.printAndWait([
      '然而在低头思索了一阵之后，原本静心凝神的',
      kitaru.get_teen_sex_title(),
      '突然发出了',
      kitaru.sex,
      '标志性的怪叫声。',
    ]);
    await kitaru.say_and_wait('呃！咦咦～？唉呀？');
    await era.printAndWait('随后一溜烟冲出了神社。');
    era.drawLine({ content: me.name + ' 的办公室' });
    await era.printAndWait([
      '橙发的',
      kitaru.get_teen_sex_title(),
      '火急火燎地推开了 ',
      me.get_colored_name(),
      ' 办公室的门，冲了进来。',
    ]);
    era.printButton('「怎么了？」', 1);
    await era.input();
    await kitaru.say_and_wait([callname, '！大事不好了！']);
    await kitaru.say_and_wait('身为占卜之子的我！竟然没有愿望可以许！');
    await kitaru.say_and_wait('好缘分，想实现的愿望什么的，都已经实现了。');
    await kitaru.say_and_wait('是不是又和当时菊花赏结束后一样呢？');
    era.printButton('「那不是表现你现在很满足吗？」', 2);
    await era.input();
    await kitaru.say_and_wait('满足？');
    await kitaru.say_and_wait([
      '嗯……的确欸，未来的目标有了点眉头，',
      callname,
      ' 也待在我身边，还有一群支持自己的粉丝。',
    ]);
    await kitaru.say_and_wait('粉丝……');
    await kitaru.say_and_wait([
      '对了！',
      callname,
      '，我想用一场比赛，来好好回应那些支持我走到现在的粉丝！',
    ]);
    await kitaru.say_and_wait([callname, ' 有什么建议吗？']);
    era.printButton('「同样由粉丝投票决定的有马纪念？」', 1);
    era.printButton('「连着拿下日本杯和有马纪念？」', 2);
    if ((await era.input()) === 2) {
      await kitaru.say_and_wait('啊啦，不要再调笑我了！');
      await kitaru.say_and_wait(
        '我知道当时说的有些过于夸张了，不过，单论有马纪念的话，还是没问题的！',
      );
      await kitaru.say_and_wait('决定了！就有马纪念吧！');
    }
    era.drawLine({ content: '待兼福来家的神社' });
    await kitaru.say_and_wait(
      '上一次的宝冢纪念，我是因为跟信徒一样的粉丝大发慈悲才能够参加的。',
    );
    await kitaru.say_and_wait('而这次我想靠自己的力量好好拉票，然后参加比赛。');
    await kitaru.say_and_wait(
      '我想把许多的愿望全都集合起来，在年底的中山一次实现。',
    );
    await kitaru.say_and_wait(
      '在自己的愿望实现后，这次轮到我来带给大家快乐了！',
    );
    await kitaru.say_and_wait('只要我在有马纪念中获胜，大家也能获得幸福吧？');
    await era.printAndWait([
      '目光转向了 ',
      me.get_colored_name(),
      '，',
      kitaru.sex,
      '的神情看起来十分坦然，如果说是被神佛宠爱的赛',
      kitaru.get_uma_sex_title(),
      '也不为过吧。',
    ]);
    era.printButton('「是啊。」', 1);
    era.printButton('「一定吧！」', 1);
    await era.input();
    await era.printAndWait([me.get_colored_name(), ' 点了点头表示赞同。']);
    await kitaru.say_and_wait('仔细想想，在神明面前，也并不是只有许愿呢！');
    await era.printAndWait([
      '橙发的',
      kitaru.get_teen_sex_title(),
      '向前踏出了一步，尽管还是穿着校服，神态却逐渐变得和作法时的巫女一样庄严。',
    ]);
    await kitaru.say_and_wait('坐镇于此地的神明啊！请收下我的誓约吧！');
    await kitaru.say_and_wait('我绝对！会在有马纪念中获胜！');
    await kitaru.say_and_wait('这是为了把幸福送给让我对自己重拾信心的人们！');
    await era.printAndWait('严肃凛然的声音在黄昏的逢魔时刻的回荡。');
    await era.printAndWait('却意外让人觉得神圣。');
    flags.wait_flag = get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
  };

  handlers[95 + 31] = async (
    kitaru,
    me,
    callname,
    flags,
    edu_marks,
    event_object,
  ) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:56:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_start, event_object);
      return;
    }
    await print_event_name('林中参拜', kitaru);
    await era.printAndWait([
      '今天是盂兰盆节的最后一天，按习俗是将纸灯放入河中漂流，指引逝去亲人返回黄泉的日子。',
    ]);
    await era.printAndWait([
      '夜晚，勉强能分辨出来路的树林中，身着浅绿色浴衣的 ',
      kitaru.get_colored_name(),
      ' 扒开了挡路的树枝，露出了一处人迹罕至的河岸。',
    ]);
    await era.printAndWait([
      '夏合宿地点旁的河流，已有些许暖橙色的灯火浮在其上。',
    ]);
    await kitaru.say_and_wait(['那么，最后一天的仪式，就在这里进行吧！']);
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 将肩膀上扛着的布袋放下，弄出了一阵重物坠地的明显声响。',
    ]);
    era.printButton('「今天的计划是？」', 1);
    era.printButton('「这里面是？」', 2);
    await era.input();
    await kitaru.say_and_wait(['是这样的！']);
    await kitaru.say_and_wait(['我想借着这次机会，顺带和过去的我告别！']);
    await era.printAndWait([
      kitaru.sex,
      '打开了那个布袋，里面是各式的开运物品。',
    ]);
    await era.printAndWait([
      '一些先前在 ',
      kitaru.get_colored_name(),
      ' 宿舍见过的，部分是曾放在你办公室的，而菊花赏买回来的那些东西则占了一大部分。',
    ]);
    await kitaru.say_and_wait([
      '唔……现在宿舍和训练室那边应该只留下了100多个的样子！',
    ]);
    await kitaru.say_and_wait(['至于放在 ', callname, ' 家里的！就送你了！']);
    era.printButton('「还是很多呀……」', 1);
    era.printButton('「那我就满怀感激的收下了！」', 2);
    if ((await era.input()) === 1) {
      await kitaru.say_and_wait(['啊！明明已经精挑细选了好久才选出这些的！']);
      await era.printAndWait([
        '被 ',
        me.get_colored_name(),
        ' 指出问题之后的',
        kitaru.get_teen_sex_title(),
        '有些气鼓鼓地瞪了 ',
        me.get_colored_name(),
        ' 一眼。',
      ]);
    } else {
      await kitaru.say_and_wait([
        '本来想把水晶球也送给 ',
        callname,
        ' 的！不过之后说不定还有要用的时候！',
      ]);
    }
    era.println();
    await era.printAndWait([
      '小旗帜，带着折痕的扑克牌，木制的人偶就这样被掷入了河中，混入暖橙色的灯火一起向着下游流去。',
    ]);
    await kitaru.say_and_wait(['欸！话说这样会不会污染环境啊！']);
    await era.printAndWait([
      '在 ',
      me.get_colored_name(),
      ' 告诉 ',
      kitaru.get_colored_name(),
      '，已经事先通知了负责人，所以下游会有阻拦网收集并集中焚烧后，',
      kitaru.get_teen_sex_title(),
      '总算可以放心的放流起',
      kitaru.sex,
      '的开运物品来。',
    ]);
    era.drawLine({ content: '一段时间后' });
    await kitaru.say_and_wait(['那么，就用这盏纸灯作为今天的结束吧？']);
    await era.printAndWait([
      '被火光暖成橙色的方形纸灯浮在水面上，可灯却像是被钉死了一样在河中浮着。',
    ]);
    await kitaru.say_and_wait(['哈……']);
    await era.printAndWait(['无论如何，已是午夜，是时候该回去了。']);
    await era.printAndWait([
      '看来犯迷糊的 ',
      kitaru.get_colored_name(),
      ' 不怎么记得路的样子，',
      kitaru.sex,
      '那随着迷路而愈发焦急的步伐让身为人类的 ',
      me.get_colored_name(),
      ' 有些跟不上。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 的担当近乎发狂一般的撞开前面挡路的枝杈，浅绿色的浴衣在黑暗的森林中若隐若现，',
      me.get_colored_name(),
      ' 要跟丢了。',
    ]);
    era.printButton('「待兼福来！」', 1);
    era.printButton('「等一下！」', 2);
    await era.input();
    await era.printAndWait([
      '然而无论 ',
      me.get_colored_name(),
      ' 怎么喊，跑在前面的',
      kitaru.get_uma_sex_title(),
      '却似没听到般继续往树林的深处奔去。',
    ]);
    await era.printAndWait([
      '声音在漆黑的林中回响，目光所及范围内，现在只剩下了 ',
      me.get_colored_name(),
      ' 一人。',
    ]);
    await era.printAndWait([
      '扶着一旁的树干，',
      me.get_colored_name(),
      ' 气喘吁吁的肺总算得以休息，但是……现在该怎么办？',
    ]);
    await era.printAndWait(['哗啦！']);
    await era.printAndWait([
      '有树叶被掀开的声音自身后传来，会是 ',
      kitaru.get_colored_name(),
      ' 吗？不过，听说这附近也有熊出没……担当不在身边的 ',
      me.get_colored_name(),
      '，是不是该躲一下比较好？',
    ]);
    await kitaru.say_as_unknown_and_wait('喂！');
    await kitaru.say_as_unknown_and_wait([
      me.get_colored_actual_name(),
      me.get_adult_sex_title(),
      '！',
    ]);
    await kitaru.say_as_unknown_and_wait('在这里！');
    await era.printAndWait([
      '回头看去，笑意盈盈的 ',
      kitaru.get_colored_name(),
      ' 正站在 ',
      me.get_colored_name(),
      ' 的身后。',
    ]);
    await kitaru.say_and_wait('那么！为了防止你再次掉队。');
    await kitaru.say_and_wait('请握住我的手吧！');
    era.printButton('伸手', 1);
    era.printButton('当然是伸手了', 2);
    await era.input();
    era.drawLine({ content: '一段时间后' });
    await era.printAndWait('看样子是被带回到了大路上。');
    let direction = 0,
      temp;
    do {
      await era.printAndWait([
        me.get_colored_name(),
        ' 与 ',
        kitaru.get_colored_name(),
        ' 走着走着，眼前出现了一个分岔路口。',
      ]);
      await kitaru.say_and_wait('那么！走这边怎么样？');
      await era.printAndWait([
        me.get_colored_name(),
        ' 身旁的 ',
        kitaru.get_colored_name(),
        '，指向了左边的路口。',
      ]);
      era.printButton('走左边', 1);
      era.printButton('走右边', 2);
      temp = await era.input();
      direction += temp === 2;
    } while (temp === 2 && direction < 3);
    if (direction < 3) {
      await era.printAndWait([
        '树木变得稀疏，视野所及之处总算是变得明亮了起来，直到 ',
        me.get_colored_name(),
        ' 的眼前出现了一片废墟。',
      ]);
      await era.printAndWait([
        '爬满了绿蔓的鸟居，正立于这片残骸上，看样子是某个废弃了许久的神社。',
      ]);
      await kitaru.say_and_wait('啊啦啦，真的很好运呢！');
      await kitaru.say_and_wait('没想到这里还有如此特殊的能量之地。');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 牵着 ',
        me.get_colored_name(),
        ' 的手跨过了倒塌的拜殿屋顶。',
      ]);
      await kitaru.say_and_wait('唔！感觉灵力非常的充裕呢！');
      await kitaru.say_and_wait([
        '那么，',
        me.get_colored_actual_name(),
        me.get_adult_sex_title(),
        '，有什么想要我占卜的吗？',
      ]);
      era.printButton('「该回去了吧？」', 1);
      era.printButton('「能问个问题吗？」', 2, {
        disabled: era.get('love:56') < 75,
      }); // 好感度解锁
      if ((await era.input()) === 1) {
        await kitaru.say_and_wait('这样吗？');
        await kitaru.say_and_wait('那就回去吧！');
        await era.printAndWait([
          '之后，',
          kitaru.get_colored_name(),
          ' 和 ',
          me.get_colored_name(),
          ' 回去了，看来 ',
          kitaru.get_colored_name(),
          ' 累的不行，躺下就呼呼大睡。',
        ]);
        return;
      }
      await kitaru.say_and_wait('当然啦，什么都可以！');
      await era.printAndWait([
        '面前的',
        kitaru.get_uma_sex_title(),
        '，单论外表，样子的确和 ',
        me.get_colored_name(),
        ' 的担当一模一样，连笑的方式也没有差别。',
      ]);
      await era.printAndWait([
        '但是，从无声无息地出现在 ',
        me.get_colored_name(),
        ' 的背后，称呼的突然变化，到把 ',
        me.get_colored_name(),
        ' 引到这里，违和感数不胜数。',
      ]);
      era.printButton('「你是谁？」', 1);
      await era.input();
      const kami = get_chara_talk(56);
      kami.name = '待兼福来？';
      await kami.say_and_wait([
        '……啊哈哈。不愧是那孩子的 ',
        callname,
        '/引路人。',
      ]);
      await era.printAndWait([
        '以 ',
        kitaru.get_colored_name(),
        ' 的身姿出现的',
        kitaru.get_teen_sex_title(),
        '，微微笑着。',
      ]);
      await era.printAndWait([
        '明明就站在 ',
        me.get_colored_name(),
        ' 的面前开口说话，但',
        kitaru.sex,
        '的答复却像是直接出现在 ',
        me.get_colored_name(),
        ' 的意识中一样。',
      ]);
      await kami.say_and_wait([
        '抱歉借用了自家巫女/你担当的身体，不过，自从',
        kitaru.sex,
        '找到了命定之人，就想抽空来聊聊呢。',
      ]);
      await kitaru.say_and_wait('嗯……你看起来倒是不怎么惊讶的样子');
      era.printButton('（毕竟我是待兼福来的训练员）', 1);
      era.printButton(`（这种事情出现在${kitaru.sex}身上，也不算离奇吧？）`, 2); // 好感度解锁
      await era.input();
      await kami.say_and_wait('啊啦！');
      await kami.say_and_wait([
        '话虽如此，在',
        kitaru.sex,
        '',
        kitaru.get_bigger_sibling_sex_title(),
        '去世前，',
        kitaru.sex,
        '也并不热衷于占卜和咒术，以前啊，总是追着',
        kitaru.sex,
        '',
        kitaru.get_bigger_sibling_sex_title(),
        '的后背走，每次有什么事都叫',
        kitaru.sex,
        '。',
      ]);
      await kami.say_and_wait('很麻烦吧？');
      era.printButton('（点头）', 1);
      era.printButton('「的确，我也经常一有事就被那家伙叫来叫去」', 2);
      await era.input();
      await era.printAndWait([
        '注视着',
        kitaru.sex,
        '明明在看着 ',
        me.get_colored_name(),
        '，却又好像凝视着什么遥远地方的双瞳，',
        me.get_colored_name(),
        ' 做出了回答。',
      ]);
      if (sys_filter_chara('cflag', '招募状态', recruit_flags.yes).length > 2) {
        await kami.say_and_wait([
          '帮助',
          kitaru.sex,
          '了却了菊花赏的约定，真的很厉害。',
        ]);
      } else {
        await kami.say_and_wait('第一位担当就能拿下菊花赏，真的很厉害。');
      }
      await kami.say_and_wait([
        '作为被',
        kitaru.sex,
        '信仰的神明大人，我倒觉得自己挺失败的，明明自己有个灵力如此出众的巫女。',
      ]);
      await kami.say_and_wait([
        '却没能在',
        kitaru.sex,
        '最需要的时候出现，也没能在',
        kitaru.sex,
        '最痛苦的时候开导',
        kitaru.sex,
        '，只能偶尔在',
        kitaru.sex,
        '的梦中出现，给',
        kitaru.sex,
        '一些提示的样子。',
      ]);
      await kami.say_and_wait('呜呜呜……还是信众太少了呀，。');
      await kami.say_and_wait([
        '不过，人多起来的话，我也没办法一直关注着',
        kitaru.sex,
        '吧，是好事也不一定？',
      ]);
      await era.printAndWait([
        '凭依在 ',
        me.get_colored_name(),
        ' 担当身上的神明，说到这开始下意识地揉着自己的头发，该说是和 ',
        kitaru.get_colored_name(),
        ' 一个模子刻出来的吗？',
      ]);
      await kami.say_and_wait([
        me.get_colored_actual_name(),
        me.get_adult_sex_title(),
      ]);
      era.printButton('「在？」', 1);
      era.printButton('「什么事？」', 2);
      await era.input();
      await kami.say_and_wait([
        me.get_colored_name(),
        ' 是',
        kitaru.sex,
        '的 ',
        callname,
        ' 真是太好了！',
      ]);
      await era.printAndWait([
        '被自家神灵操控着身体的 ',
        kitaru.get_colored_name(),
        ' 眨了几下眼睛，之后脱力般地倒入了 ',
        me.get_colored_name(),
        ' 的怀里。',
      ]);
      await typing('这孩子就拜托你了，' + kitaru.sex + '的命中注定之人');
      era.set('status:56:稳定', 1);
      await era.printAndWait([kitaru.get_colored_name(), ' 的身体微微发热。']);
      flags.wait_flag = get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
    } else {
      await era.printAndWait([
        '兜兜转转，总算是走出来了，远处宿舍楼的灯光依稀可见……',
      ]);
    }
  };

  handlers[95 + 37] = async (kitaru, me, callname, flags) => {
    await print_event_name('每个人的天命', kitaru);
    await era.printAndWait([
      me.get_colored_name(),
      ' 看见自己橘色头发的担当轻抚着大理石墓碑的表面。',
    ]);
    await era.printAndWait([
      '和菊花赏前那次一样，在低声轻语了一阵后，',
      kitaru.get_colored_name(),
      ' 转过身来冲 ',
      me.get_colored_name(),
      ' 点了点头。',
    ]);
    era.printButton('「该回去了吗？」', 1);
    await era.input();
    await kitaru.say_and_wait('……嗯。');
    await era.printAndWait([
      '即使走出了墓园，',
      kitaru.get_colored_name(),
      ' 也没恢复那个往常欢快的样子。',
    ]);
    era.printButton('「怎么了？」', 1);
    await era.input();
    await kitaru.say_and_wait([
      '拿下菊花赏，走出了',
      kitaru.get_bigger_sibling_sex_title(),
      '的阴影，还有和训练员在一起的日子。',
    ]);
    await kitaru.say_and_wait('这三年对我来说简直就像是梦一样。');
    await era.printAndWait([
      '说完这番话的',
      kitaru.get_teen_sex_title(),
      '再次陷入了沉默，',
      me.get_colored_name(),
      ' 们二人就这样走在返程的路上，看着道路两侧如 ',
      kitaru.get_colored_name(),
      ' 发色般的枫叶不停落下。',
    ]);
    await era.printAndWait([
      '直到 ',
      me.get_colored_name(),
      ' 察觉到',
      kitaru.sex,
      '拉了拉 ',
      me.get_colored_name(),
      ' 的衣袖。',
    ]);
    await kitaru.say_and_wait('对了！');
    await kitaru.say_and_wait([callname, '！之前提到的自己今后的目标！']);
    await kitaru.say_and_wait(
      '关于怎么获得自己今后最强最大的大吉级幸福，我已经完全想好了！',
    );
    era.printButton('「是什么呢？」', 1);
    era.printButton('「能告诉我吗？」', 2);
    if ((await era.input()) === 2) {
      await kitaru.say_and_wait('当然没问题！');
    }
    await kitaru.say_and_wait('那就是——继续这样追逐着运势跑下去！');
    await kitaru.say_and_wait('不过可不是和之前一样只是一味的怨天尤人！');
    await kitaru.say_and_wait('而是无论运势无论如何都会去面对的样子！');
    await kitaru.say_and_wait('该说的话，就是享受命运为我准备的每一道菜吗？');
    era.printButton('「说出了很帅的话呢！」', 1);
    era.printButton('「听起来很帅呢！」', 2);
    await era.input();
    await kitaru.say_and_wait('欸！');
    await kitaru.say_and_wait('正是如此！');
    await era.printAndWait([
      '到了兴奋之处的 ',
      kitaru.get_colored_name(),
      ' 索性跑了起来，为素白色的冬日染上了一丝活力。',
    ]);
    if (era.get('love:56') >= 75) {
      await era.printAndWait([
        '似乎是突然想到了什么，眼看着就要跑出视线的 ',
        kitaru.get_colored_name(),
        ' 再次冲了回来，拉住了 ',
        me.get_colored_name(),
        ' 的手。',
      ]);
      await kitaru.say_and_wait(['对了！', callname, '！']);
      await kitaru.say_and_wait('你也要呆着我的身边才行啊！');
    }
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 蹦蹦跳跳的跑在了 ',
      me.get_colored_name(),
      ' 的身前，笑容再次回到了',
      kitaru.sex,
      '的脸上。',
    ]);
    await era.printAndWait(
      '明亮橙发在秋日空中翻飞的落叶中若影若现，闪耀着金色的光芒。',
    );
    await era.printAndWait([
      '有马纪念就在眼前，',
      kitaru.get_colored_name(),
      ' 也在这个时候找到了属于自己的道路。',
    ]);
    await era.printAndWait([
      '相信无论接下来的签筒中会有什么样的结果，',
      kitaru.sex,
      '都能坦然接受吧？',
    ]);
    if (era.get('talent:0:自信程度') === 1) {
      // 失去了自卑
      era.set('talent:56:自信程度', 0);
      await era.printAndWait([kitaru.get_colored_name(), ' 不再 [自卑] 了！']);
    }
    flags.wait_flag = get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
  };
};
