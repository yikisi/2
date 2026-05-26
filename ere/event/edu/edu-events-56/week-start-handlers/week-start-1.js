const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { set_luck_result } = require('#/event/snippets/105601');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { motivation_colors } = require('#/data/color-const');

// 塔罗 灵摆 卦象 星象 数字命理
const luck_ways = ['塔罗', '灵摆', '卦象', '星象', '数字命理', '骰子'];

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FukukitaruEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers.fortune_week = async (kitaru) => {
    if (!era.get('status:56:运势依赖')) {
      return;
    }
    await print_event_name('吉凶占卜', kitaru);
    //random 0-3
    let luck;
    let luck_result = ['小吉', '中吉', '大吉', '凶'];

    if (era.get('status:56:PTSD') === 1) {
      luck = luck_result.length - 1;
    } else {
      luck = get_random_value(0, luck_result.length - 1);
    }

    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 尝试用 ',
      { color: kitaru.color, content: get_random_entry(luck_ways) },
      ' 进行了占卜，结果是 ',
      {
        color: motivation_colors[luck === 3 ? 1 : luck + 2],
        content: luck_result[luck],
      },
      '！',
    ]);

    set_luck_result(luck);
  };

  handlers.beginning = async (kitaru, me, callname, flags) => {
    await print_event_name(['窥视命运的', kitaru.teen_sex_title], kitaru);
    await kitaru.say_and_wait([callname, '！我做完了哦！']);
    await era.printAndWait([
      '不远处，刚做完一组训练的 ',
      kitaru.get_colored_name(),
      ' 正冲 ',
      me.get_colored_name(),
      ' 挥着手，那种过于热情的喊声引来不少其他赛',
      kitaru.uma_sex_title,
      '的侧目。',
    ]);
    await era.printAndWait([
      '在这几日的相处中，除了过于依赖开运道具之外，',
      kitaru.sex,
      '可以称得上是一个开朗，外向，总之，几乎所有的元气系相关的正面词汇都能往',
      kitaru.sex,
      '身上贴。',
    ]);
    await era.printAndWait('但……');
    await era.printAndWait([
      me.get_colored_name(),
      ' 能发现 ',
      kitaru.get_colored_name(),
      ' 身上对于占卜，命运，运气等过于明显的偏执。',
    ]);
    await era.printAndWait(
      '所谓占卜，大部分的人只是当作茶余饭后的谈资或者笑料而已。',
    );
    await era.printAndWait([
      '可 ',
      kitaru.get_colored_name(),
      ' 并不这么想，从工作日中的训练，到假期里的出游地点，',
      kitaru.sex,
      '都会用',
      kitaru.sex,
      '凝聚完运气的占卜后只有',
      kitaru.sex,
      '自己才能解读的答案来做出决定。',
    ]);
    await era.printAndWait([
      '或许正是因为如此，在某一次的占卜中被',
      kitaru.sex,
      '认定为',
      kitaru.sex,
      '命定之人的 ',
      me.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      kitaru.sex,
      '对于 ',
      me.get_colored_name(),
      ' 有着同那些还在磨合期的担当组合们，完全不同的信任态度。',
    ]);
    await era.printAndWait([
      '似乎，',
      kitaru.sex,
      '认准了 ',
      me.get_colored_name(),
      ' 就是',
      kitaru.sex,
      '口中那位白兴大人派来的使者。',
    ]);
    await era.printAndWait('接下来，还有一个重要的事项需要确定');
    era.printButton('「待兼福来同学，关于将来的目标……」', 1);
    await era.input();
    await era.printAndWait([
      '目标，也可以说成是赛',
      kitaru.uma_sex_title,
      '奔跑目的，愿望。',
    ]);
    await era.printAndWait('具体的像是经典三冠，春秋连霸，乃至凯旋门。');
    await era.printAndWait(
      '或是更为宽泛的，单纯的为了胜利，抑或追寻某位偶像的道路。',
    );
    await era.printAndWait('乃至更为抽象的，证明自己的存在，价值。');
    await kitaru.say_and_wait('目标吗……');
    era.printButton(
      `「像是将来要跑什么比赛，或者是想要成为怎样的赛${kitaru.uma_sex_title}。」`,
      1,
    );
    await era.input();
    await kitaru.say_and_wait('欸！我没什么特别的目标啦！');
    await kitaru.say_and_wait('只要能一直保持现在的幸运就好了！');
    await kitaru.say_and_wait('不过……');
    await kitaru.say_and_wait('如果一定要说的话……菊花赏或许不错呢？');
    await era.printAndWait([
      '面前的 ',
      kitaru.get_colored_name(),
      ' 听起来是在开玩笑，但表情却是认真无疑。',
    ]);
    era.printButton('「有什么理由吗？」', 1);
    await era.input();
    await kitaru.say_and_wait('唔……');
    await kitaru.say_and_wait([
      '是名叫 ',
      kitaru.get_colored_name(),
      ' 的',
      kitaru.teen_sex_title,
      '！为了实现幸福！成为神明！命运中的必经之路！',
    ]);
    await era.printAndWait([
      '沉思片刻之后，',
      kitaru.teen_sex_title,
      '用',
      kitaru.sex,
      '那一如往常过于夸张的说辞回答了 ',
      me.get_colored_name(),
      '，但',
      kitaru.sex,
      '的眼神却是真诚无比的。',
    ]);
    await era.printAndWait('话说回来，要在3000米的菊花赏获胜吗？');
    await era.printAndWait('所谓最强的马赢菊花赏。');
    await era.printAndWait([
      '这个目标，对于',
      kitaru.sex,
      '来说，是不是太过于遥远了呢。',
    ]);
    await era.printAndWait('还是先一步一步来，以出道战胜利为目标吧！');

    flags.wait_flag = get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
  };

  handlers[14] = async (kitaru, me, callname, flags) => {
    await print_event_name('入局', kitaru);
    await era.printAndWait([
      me.get_colored_name(),
      ' 几乎是在对',
      kitaru.sex,
      '一无所知的情况下，和 ',
      kitaru.get_colored_name(),
      ' 签下契约的。',
    ]);
    await era.printAndWait([
      '好在随着时间推进，',
      me.get_colored_name(),
      ' 对',
      kitaru.sex,
      '的了解也在逐步扩展到赛跑之外的地方。',
    ]);
    await era.printAndWait([
      '比如那间 ',
      me.get_colored_name(),
      ' 与 ',
      kitaru.get_colored_name(),
      ' 相遇的神社，正巧是由',
      kitaru.couple_title,
      '家运营的。',
    ]);
    await kitaru.say_and_wait(['欸！', callname, ' 很感兴趣吗？']);
    await kitaru.say_and_wait('今天我恰好也要去工作呢！');
    await era.printAndWait([
      '反正今日也无训练安排。',
      me.get_colored_name(),
      ' 索性在 ',
      kitaru.get_colored_name(),
      ' 的邀请下，陪着',
      kitaru.sex,
      '去处理神社的相关事务。',
    ]);
    await era.printAndWait([
      '即使是休息日，此间神社也如当初与 ',
      kitaru.get_colored_name(),
      ' 相见时那般冷清。',
    ]);
    await era.printAndWait([
      '不过 ',
      kitaru.get_colored_name(),
      ' 的热情倒是没有受到丝毫影响，换上了巫女服的',
      kitaru.sex,
      '颇为认真的处理着从简单的清扫到折出御币在内的各项工作。',
    ]);
    await era.printAndWait([
      '已是黄昏，今日仍无参拜客的到来，可 ',
      me.get_colored_name(),
      ' 的那位担当却仍一脸期待的看着参拜客必经的鸟居。',
    ]);
    await era.printAndWait('以及……今天一整天下来，似乎见到的神职人员就只有——');
    era.printButton('「待兼福来？」', 1);
    await era.input();
    await kitaru.say_and_wait(['欸！', callname, '？']);
    era.printButton('「平时这里就你一个人？」', 1);
    await era.input();
    await kitaru.say_and_wait('嗯！');
    await kitaru.say_and_wait(
      '当然新年，以及特殊节日的时候，我们还是会雇一些人过来帮忙就是的啦！',
    );
    await kitaru.say_and_wait('偶尔妈妈也会来……');
    await era.printAndWait([
      '讲到这里，',
      kitaru.uma_sex_title,
      '细长的双耳蔫了下去。',
    ]);
    await kitaru.say_and_wait('毕竟在我记忆里……');
    await kitaru.say_and_wait('这里就没什么人来的样子。');
    await era.printAndWait([
      '有些无奈的冲 ',
      me.get_colored_name(),
      ' 耸了耸肩，看来',
      kitaru.sex,
      '并不想让 ',
      me.get_colored_name(),
      ' 因为这件事儿同情',
      kitaru.sex,
      '。',
    ]);
    await kitaru.say_and_wait(['好啦！', callname, ' 不用想法子安慰我啦！']);
    await kitaru.say_and_wait('唔呀！');
    await era.printAndWait([
      '看起来像是突然想到了什么，',
      kitaru.get_colored_name(),
      ' 整个人像是炸毛的小猫一样跳了起来，恢复了那欢喜的表情。',
    ]);
    await kitaru.say_and_wait([
      '对啊！正是因为如此，当时能找到这里来的 ',
      callname,
      ' 很厉害呢！',
    ]);
    await era.printAndWait([
      '在',
      kitaru.sex,
      '又发表几句对运势的看法后，时间也到了该回去的时候了。',
    ]);
    await kitaru.say_and_wait(
      '那么！我去后面换一下衣服！一会儿我们一起回特雷森吧！',
    );
    await era.printAndWait([
      '这样说着，',
      kitaru.get_colored_name(),
      ' 向本殿旁的小房间走去。',
    ]);
    era.drawLine({ content: '几分钟后' });
    await era.printAndWait('哐！');
    await era.printAndWait([
      me.get_colored_name(),
      ' 听到了象征参拜的钟声响起，这说明有客人来了。',
    ]);
    await era.printAndWait(['不过 ', kitaru.get_colored_name(), ' 还没回来。']);
    await era.printAndWait([
      '看来这下只能由 ',
      me.get_colored_name(),
      ' 出去接待了。',
    ]);
    await era.printAndWait('环顾四周，除了还在摇晃的铜钟外，并没看到人影。');
    await era.printAndWait('塞钱箱的掷币口处，倒是卡了什么东西。');
    era.printButton('检查赛钱箱', 1);
    await era.input();
    await me.say_and_wait('奇怪，怎么会有……');
    await era.printAndWait('塞钱箱的上面莫名的放着一张泛黄的报纸残页。');
    await era.printAndWait(
      '内容看起来是当地报社拍摄的几张记录此间神社日常的照片。',
    );
    await era.printAndWait([
      '人山人海的参拜客，神职人员的笑脸，还有正被他们围着的……两只 ',
      kitaru.get_colored_name(),
      '？',
    ]);
    era.printButton('不对，年纪对不上', 1);
    await era.input();
    await era.printAndWait([
      '看起来是一对',
      kitaru.siblings_sex_title,
      '，年长的',
      kitaru.get_bigger_sibling_sex_title(),
      '正握着年幼',
      kitaru.get_smaller_sibling_sex_title(),
      '的手。',
    ]);
    await era.printAndWait([
      '年纪稍小的那位 ',
      me.get_colored_name(),
      ' 可以从耳饰确认是 ',
      kitaru.get_colored_name(),
      ' 无疑，但',
      kitaru.sex,
      '身边的那一位是……？',
    ]);
    era.printButton(`（${kitaru.get_bigger_sibling_sex_title()}吗？）`, 1);
    await era.input();
    await era.printAndWait([
      '不过之前从来没有听 ',
      kitaru.get_colored_name(),
      ' 说过',
      kitaru.sex,
      '还有一个',
      kitaru.get_bigger_sibling_sex_title(),
      '。',
    ]);
    await kitaru.say_and_wait(['欸！', callname, ' 站在那里做什么呢？']);
    await era.printAndWait([
      '换好了校服的 ',
      kitaru.get_colored_name(),
      ' 出现在了 ',
      me.get_colored_name(),
      ' 的身后。',
    ]);
    era.printButton('给待兼福来看', 1);
    era.printButton('不给', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '然而，正当 ',
        me.get_colored_name(),
        ' 想把刚刚捡到到的报纸残页给',
        kitaru.sex,
        '看时。',
      ]);
    } else {
      await era.printAndWait([
        '然而，正当 ',
        me.get_colored_name(),
        ' 想把刚刚捡到到的报纸残页藏起来时。',
      ]);
    }
    await era.printAndWait(['突如起来的一阵风卷过，响起了纸张的撕裂声。']);
    await era.printAndWait([
      '那张残页只在 ',
      me.get_colored_name(),
      ' 的手中留下了极小的一块残片，其余被风卷入半空，在 ',
      me.get_colored_name(),
      ' 和 ',
      kitaru.get_colored_name(),
      ' 的面前化成了更细小的碎块，向远方四散开来。',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
  };

  handlers[28] = async (kitaru, me, callname, flags) => {
    await print_event_name('橱窗里的既视感', kitaru);
    await era.printAndWait([
      '出道战就此结束，代表着 ',
      me.get_colored_name(),
      ' 和 ',
      kitaru.get_colored_name(),
      ' 的两人三足算是正式启程了。',
    ]);
    await era.printAndWait([
      '作为胜利的奖励，',
      me.get_colored_name(),
      ' 答应陪着',
      kitaru.sex,
      '去商店街采购新的开运道具。',
    ]);
    await era.printAndWait([
      '已经不记得是第几次在呼声中奔向 ',
      kitaru.get_colored_name(),
      '，光是背包里那颗价格不菲的水晶球就压着你喘不过气来。',
    ]);
    await era.printAndWait([
      '提着大包小包的 ',
      me.get_colored_name(),
      ' 扶着墙，汗流浃背之时，却发觉 ',
      kitaru.get_colored_name(),
      ' 的下一声却迟迟没有传来。',
    ]);
    era.printButton('抬起头', 1);
    await era.input();
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 入定般地站在体育用品店的橱窗前，只有偶尔甩动几下的马尾能证明',
      kitaru.sex,
      '并不是雕塑之类的死物。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 顺着',
      kitaru.sex,
      '的目光看过去。',
    ]);
    await era.printAndWait('是体育用品店的橱窗，里面的电视机正放着录像。');
    await era.printAndWait([
      '作为训练员的 ',
      me.get_colored_name(),
      ' 立刻认出来其上播放的内容是史上有名的逃马赛',
      kitaru.uma_sex_title,
      '的领放剪辑。',
    ]);
    era.printButton('「待兼福来？」', 1);
    await era.input();
    await kitaru.say_and_wait('……');
    era.printButton('「待兼福来！你还好吗？」', 1);
    await era.input();
    await kitaru.say_and_wait(['啊！没事没事，', callname, '！']);
    await kitaru.say_and_wait('欸嘿！看的有些太入迷了！');
    await kitaru.say_and_wait('我们继续去下一个灵点吧！');
    await era.printAndWait([
      '不对，',
      me.get_colored_name(),
      ' 能感觉的到 ',
      kitaru.get_colored_name(),
      ' 这次转移话题的行为过于刻意了，况且……',
    ]);
    await era.printAndWait([
      '抛开 ',
      kitaru.get_colored_name(),
      ' 的主要跑法是差行这点先不谈，那种表情也并非和其它赛',
      kitaru.uma_sex_title,
      '一样单纯因为看到了别人奔跑的感同身受的开心或是兴奋，而是……',
    ]);
    // await era.printAndWait('那种想要保持微笑，但又因为不断涌上来的悲伤而冲击出的呆滞。');
    await era.printAndWait('呆滞？不，倒不如说是标准到了极点的微笑。');
    era.printButton('「刚才发生了什么事？」', 1);
    era.printButton('「怎么了吗？」', 2);
    await era.input();
    await kitaru.say_and_wait('……那个');
    await kitaru.say_and_wait('就是觉得有些既视感啦！');
    era.printButton('「既视感？」', 1);
    await era.input();
    await kitaru.say_and_wait('就是……就是……');
    await era.printAndWait([
      me.get_colored_name(),
      ' 看见 ',
      kitaru.get_colored_name(),
      ' 的眼神变得有些游离不定，晃了几下脑袋。',
    ]);
    await kitaru.say_and_wait([
      '想到了我的',
      kitaru.get_bigger_sibling_sex_title(),
      '啦！以前和',
      kitaru.sex,
      '一起并走的时候，',
      kitaru.sex,
      '总是像电视里那些逃马一样把我甩开了好大好大的一段距离呢！',
    ]);
    era.printButton(
      `「听起来你的${kitaru.get_bigger_sibling_sex_title()}是位很优秀的赛${kitaru.uma_sex_title}吧？」`,
      1,
    );
    await era.input();
    await kitaru.say_and_wait('是的……只是……');
    await era.printAndWait([
      '近乎是从喉咙里强行挤出来的回答，',
      kitaru.get_colored_name(),
      ' 背过去的耳朵像要插到脑袋里一样。',
    ]); // 紧张
    await kitaru.say_and_wait('去世了……');
    await kitaru.say_and_wait('对……去世了……');
    era.printButton('「抱歉」', 1);
    await era.input();
    await kitaru.say_and_wait('诶诶！抱歉的应该是我才对，又说了这么奇怪的话。');
    await kitaru.say_and_wait([
      '和 ',
      callname,
      ' 在一起的时候，老是容易得意忘形呢！',
    ]);
    await kitaru.say_and_wait('唔……');
    await era.printAndWait([
      '之后 ',
      kitaru.get_colored_name(),
      ' 草草的找借口结束了这次庆祝活动，',
      me.get_colored_name(),
      ' 独自一人提着那堆采购来的开运物品回到了自己的办公室。',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
    flags.wait_flag =
      get_skills_and_print_in_event(56, [200791]) || flags.wait_flag;
  };

  handlers[35] = async (kitaru, me, callname, flags) => {
    const tannhauser = get_chara_talk(62);
    await print_event_name('旋风扫净', kitaru); // 可以改成事件链
    await era.printAndWait([
      '如往常一样，',
      me.get_colored_name(),
      ' 在去往办公室的路上。',
    ]);
    await era.printAndWait('「砰！！！」');
    await era.printAndWait([
      '直到在路过赛',
      kitaru.uma_sex_title,
      '宿舍的时候，听到了一声巨响。',
    ]);
    era.printButton('分辨一下声音的方向', 1);
    era.printButton('无视', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '虽然 ',
        me.get_colored_name(),
        ' 的听力比不上那些赛',
        kitaru.uma_sex_title,
        '，但在宁静的早上定位这突兀声响的方位对 ',
        me.get_colored_name(),
        ' 而言不难。',
      ]);
      await tannhauser.say_as_unknown_and_wait('呜呜……');
      await era.printAndWait(['某位', kitaru.uma_sex_title, '发出的哀叹。']);
      await kitaru.say_as_unknown_and_wait('啊啊啊！万分抱歉！');
      await era.printAndWait([
        '以及，毫无疑问是 ',
        kitaru.get_colored_name(),
        ' 的声音。',
      ]);
      await era.printAndWait([
        '当 ',
        me.get_colored_name(),
        ' 还在犹豫着要不要给',
        kitaru.sex,
        '打个电话的时候，',
        me.get_colored_name(),
        ' 看到宿舍门口蹦出了一个熟悉的家伙。',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        ' 大概能猜到，一定是自己那令人不省心的担当又整出了什么乱子。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 加快脚步，打算趁着这件事被学生会那帮人发现前先溜走。',
      ]);
      await era.printAndWait([
        '直到 ',
        me.get_colored_name(),
        ' 感觉到衣服被身后什么人扯住了。',
      ]);
    }
    await kitaru.say_and_wait('啊哈哈！');
    await kitaru.say_and_wait('太好了！');
    await kitaru.say_and_wait(['是 ', callname, '！']);
    await me.say_and_wait('唉……');
    era.printButton('「需要帮忙吗？」', 1);
    era.printButton('「又闯祸了？」', 2);
    if ((await era.input()) === 1) {
      await kitaru.say_and_wait('喔喔！看来今天是大吉呢！');
      await kitaru.say_and_wait([
        '乐于助人的 ',
        callname,
        ' 在灾难之后突然出现！',
      ]);
    } else {
      await kitaru.say_and_wait('呜欸！不愧是我的命定之人！一下子就猜中了！');
      await kitaru.say_and_wait([
        '不过 ',
        callname,
        ' 一定会帮忙的吧！我们可是一莲托生的关系呢！',
      ]);
      await era.printAndWait([
        '拗不过 ',
        kitaru.get_colored_name(),
        '，',
        me.get_colored_name(),
        ' 还是点了点头',
      ]);
    }
    await kitaru.say_and_wait('那个……总之先过来吧！');
    await era.printAndWait([
      '在保安的诧异目光下，',
      kitaru.sex,
      '不由分说的把 ',
      me.get_colored_name(),
      ' 拉进了宿舍！',
    ]);
    await era.printAndWait([
      '一打开门，闯入 ',
      me.get_colored_name(),
      ' 眼帘的就是一座由杂物堆积而成的大山。',
    ]);
    await tannhauser.say_and_wait('救……');
    if (era.get('cflag:62:招募状态') === 1) {
      await tannhauser.say_and_wait([
        sys_get_colored_callname(62, 0),
        '……救救我！',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 的另一位担当正被埋在下面。',
      ]);
    } else {
      await era.printAndWait([kitaru.sex, '的室友正被压在下面。']);
    }
    era.printButton('「这座垃圾山是？」', 1);
    await era.input();
    await kitaru.say_and_wait('才不是垃圾山呢！');
    await kitaru.say_and_wait('这些是！我一直以来收集的开运物品啦！');
    await kitaru.say_and_wait(
      '或许照着这个势头增长下去，特雷森学院有一天会被吞噬也不一定！',
    );
    await kitaru.say_and_wait('啊，上面那句不是占卜而是我的猜测。');
    await kitaru.say_and_wait([
      '好了好了！',
      callname,
      ' 帮我想想有什么地方放吧！',
    ]);
    await era.printAndWait([
      '各种 ',
      me.get_colored_name(),
      ' 叫得出名字的，或叫不出名字的杂物，小玩意混在这座大山里，甚至还包括些明显是最近才买的纪念品。',
    ]);
    await era.printAndWait('倒不如说现在才倒本来就是已经是大吉中的大吉了。');
    await era.printAndWait([
      '名叫 ',
      kitaru.get_colored_name(),
      ' 的赛',
      kitaru.uma_sex_title,
      '，意外的有很严重的囤积癖。',
    ]);
    await era.printAndWait('果然，答案只有一个了。');
    era.printButton('「扔掉吧……」', 1);
    await era.input();
    await kitaru.say_and_wait('欸？');
    await kitaru.say_and_wait('欸！！！！！！');
    era.drawLine({ content: '特雷森学院 宿舍后的焚化炉' });
    await era.printAndWait([
      '面对着堆积如山的开运物品，',
      me.get_colored_name(),
      ' 决定从哪个开始呢？',
    ]);
    let a = true,
      b = true,
      c = true;
    do {
      era.printMultiColumns(
        [
          { c: '看起来平平无奇的瓶盖', e: a },
          { c: '损坏颇为严重的人偶', e: b },
          { c: '写有【大愿成就】的御守', e: c },
        ].map((e, i) => ({
          accelerator: i + 1,
          config: { disabled: !e.e },
          content: e.c,
          type: 'button',
        })),
      );
      switch (await era.input()) {
        case 1:
          a = false;
          await kitaru.say_and_wait('这个，这个是我第一次一下子就拧开的瓶盖！');
          await kitaru.say_and_wait('求你了！绝对不行啊！');
          break;
        case 2:
          b = false;
          await kitaru.say_and_wait(
            '呜！那是我差点被三轮车压到时替我受难的人偶！',
          );
          await kitaru.say_and_wait('扔掉它的话我会遭大厄运的！');
          break;
        case 3:
          c = false;
          await kitaru.say_and_wait(
            '啊！那是我小学的时候！带领我进入球技校园八强的御守！',
          );
          await kitaru.say_and_wait('从它开始绝对不行！');
      }
    } while (a || b || c);
    await kitaru.say_and_wait('呜呜！果然哪个都不行啊！');
    await kitaru.say_and_wait([
      '我恳求你！',
      callname,
      '，能不能不要扔掉！我什么都会做的！',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 不得不把拼命摩擦着双手的 ',
      kitaru.get_colored_name(),
      ' 从焚化炉前拉走。',
    ]);
    await era.printAndWait('看来得好好考虑一下怎么处理这些东西了。');
    flags.wait_flag = get_attr_and_print_in_event(56, [0, 0, 0, 0, 0], 30);
  };

  handlers[38] = async (kitaru, me, callname, flags) => {
    await print_event_name('收容！开运物品', kitaru);
    await kitaru.say_and_wait([callname, ' 真是太好了！']);
    await era.printAndWait([
      '在一番思量之下，',
      me.get_colored_name(),
      ' 想出了一个或许可行的解决办法——',
    ]);
    await era.printAndWait([
      '就是让 ',
      kitaru.get_colored_name(),
      ' 把东西暂存到 ',
      me.get_colored_name(),
      ' 家里。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 看着 ',
      kitaru.get_colored_name(),
      ' 正一个一个的用',
      kitaru.sex,
      '那些形态各异的开运道具填满了 ',
      me.get_colored_name(),
      ' 的屋子四处。',
    ]);
    await era.printAndWait([
      '那种异常兴奋的姿态，不像是',
      kitaru.uma_sex_title,
      '，倒像是正在标记着自己领地的小动物。',
    ]);
    await kitaru.say_and_wait('欸嘿嘿！真是有些抱歉了！');
    await kitaru.say_and_wait(
      '所以收集开运道具可是我从……一直以来保持的习惯呢！！！',
    );
    await kitaru.say_and_wait('在我成神前！都会一直坚持下去吧！');
    await era.printAndWait([
      kitaru.sex,
      '似乎斟酌了一下，随后装作不经意地跳过了那个',
      kitaru.sex,
      '本想说出来的时间点。',
    ]);
    await era.printAndWait('……就和出道战的那时候一样');
    await kitaru.say_and_wait([
      '话说，今后也能经常来 ',
      callname,
      ' 的家里看看吗？',
    ]);
    await era.printAndWait([
      '看着正在 ',
      me.get_colored_name(),
      ' 家客厅中雀跃不已的 ',
      kitaru.get_colored_name(),
      '，无奈地点了点头。',
    ]);
    await kitaru.say_and_wait('欸——不要露出那种表情吗？');
    await kitaru.say_and_wait([
      '撒！那 ',
      callname,
      ' 有什么想麻烦阿福的吗！我会不遗余力的！',
    ]);
    await era.printAndWait([
      '似乎是知道自己的行为的确给 ',
      me.get_colored_name(),
      ' 添了不少的麻烦，橙发的',
      kitaru.teen_sex_title,
      '做出了',
      kitaru.sex,
      '标志性的动作，绷直的白皙双臂伸向天花板，期待着 ',
      me.get_colored_name(),
      ' 的回答。',
    ]);
    await era.printAndWait([
      '有什么能麻烦 ',
      kitaru.get_colored_name(),
      ' 的吗？',
    ]);
    await era.printAndWait([
      '嗯……只要',
      kitaru.sex,
      '不给自己添麻烦就是最大的帮助了。',
    ]);
    await era.printAndWait([
      '不过，这或许是个进一步了解',
      kitaru.sex,
      '的好机会。',
    ]);
    await era.printAndWait([
      '比如，',
      kitaru.sex,
      '经常提及的那位白兴大人，对于 ',
      kitaru.get_colored_name(),
      ' 而言，似乎远不只是普通的信仰那么简单。',
    ]);
    await kitaru.say_and_wait('诶！想更多的了解白兴大人！');
    await kitaru.say_and_wait('唔……');
    await era.printAndWait([
      me.get_colored_name(),
      ' 看见',
      kitaru.sex,
      '像是想起了什么一样，皱了皱眉头，呼吸变得有些急促。',
    ]);
    era.printButton('「实在不愿意的话……」', 1);
    await era.input();
    await kitaru.say_and_wait('不不不不不！');
    await kitaru.say_and_wait('只是今天还不是大吉啦！我需要先准备一下！');
    flags.wait_flag = get_attr_and_print_in_event(56, [0, 0, 0, 0, 0], 30);
  };
};
