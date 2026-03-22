const era = require('#/era-electron');

const { get_sex_acceptable } = require('#/system/ero/sys-calc-ero-status');
const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { attr_enum, base_attr_list } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[47 + 29] = async (
    urara,
    me,
    in_urara,
    callname,
    _,
    event_object,
  ) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:52:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_end, event_object);
      return false;
    }
    await print_event_name('夏合宿（经典年）途中', urara);
    const rice = get_chara_talk(30),
      rice_call_urara = sys_get_colored_callname(30, 52),
      urara_call_rice = sys_get_colored_callname(52, 30);
    await in_urara.say_as_unknown_and_wait([
      '『只要',
      urara.sex,
      '能开心就够了』，所以',
      urara.sex,
      '一直带着笑容在奔跑，这就是『',
      urara.get_colored_actual_name(),
      '』。',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '但在那副表象之下，也有',
      urara.sex,
      '从未接触过的自己也说不定……',
    ]);
    era.drawLine();
    await era.printAndWait([
      '夏季集训期间的某个下午，出来散心的 ',
      me.get_colored_name(),
      ' 迎着海风来到了',
      urara.uma_sex_title,
      '们做训练活动时的海滩。',
    ]);
    await era.printAndWait([
      '今天的训练已经结束了，但在本应空无一人的沙滩上，',
      me.get_colored_name(),
      ' 却看到了一个孤独的小小身影。',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      ' 还穿着泳衣独自坐在海边，手中拿着散开的发带，湿漉漉的披肩樱发反射着落日的霞光。',
    ]);
    await era.printAndWait([
      '现在的小',
      urara.uma_sex_title,
      '正出神地望着逐渐沉入海面的夕阳，双手还在揉着因训练过度而僵硬的双腿。',
    ]);
    await era.printAndWait([
      '白天的2500米并跑',
      urara.sex,
      '输得很惨，而 ',
      me.get_colored_name(),
      ' 也知道这段距离对',
      urara.sex,
      '来说太长了，身体会难受也理所当然。',
    ]);
    await era.printAndWait([
      '只是似乎不止身体，独自一人眺望着远方的 ',
      urara.get_colored_name(),
      '，脸上的表情也像是在压抑着什么情绪。',
    ]);
    era.printButton('「今天的乌拉拉似乎不怎么开心啊，发生了什么？」', 1);
    await era.input();
    await era.printAndWait([
      '走到 ',
      urara.get_colored_name(),
      ' 身边，',
      me.get_colored_name(),
      ' 伸手轻轻摘下了 ',
      urara.get_colored_name(),
      ' 已经因海水湿透的耳套，一边对',
      urara.sex,
      '小声地询问道。',
    ]);
    await era.printAndWait([
      '而早就听到了靠近的脚步声，小担当对 ',
      me.get_colored_name(),
      ' 的出现也并不感到意外，只是匆忙挂起的笑容有些勉强。',
    ]);
    await urara.say_and_wait([
      '没关系哦 ',
      callname,
      '，只是在并跑之后，乌拉拉想到了一些事情而已……',
    ]);
    era.printButton(
      '「并跑的事？没关系，那个距离确实太长了，如果实在难受的话明天请假也没关系。」',
      1,
    );
    await era.input();
    await urara.say_and_wait([
      '不是的！只是在想……',
      callname,
      '，乌拉拉是不是输得太过分了呢？',
    ]);
    await era.printAndWait([
      '嗯？输得太过分……别人这样说倒还有迹可循，但是 ',
      urara.get_colored_name(),
      '？',
    ]);
    await era.printAndWait([
      '不过仔细想想，',
      me.get_colored_name(),
      ' 好像的确还没见过 ',
      urara.get_colored_name(),
      ' 因为输掉而表现出特别伤心失落的模样。',
    ]);
    await era.printAndWait([
      '与 ',
      urara.get_colored_name(),
      ' 一同在海边坐下，',
      me.get_colored_name(),
      ' 安静地等待着担当准备诉说的前因后果。',
    ]);
    await urara.say_and_wait([
      '这件事其实和 ',
      urara_call_rice,
      ' 有关，但是 ',
      urara_call_rice,
      ' 并没有说奇怪的话哦，只是我不太懂而已。',
    ]);

    era.printButton(`「${urara_call_rice.content}？是米浴吗？」`, 1);
    await era.input();

    await urara.say_and_wait([
      '嗯，那天安慰了因为训练赛失利的 ',
      urara_call_rice,
      ' 后，',
      urara_call_rice,
      ' 向我询问就算输掉也不会伤心的诀窍。',
    ]);
    await urara.say_and_wait(
      '就像一直说的那样，不去跑的话就没法得到一着对吧？我也想让大家看到我胜利的样子。',
    );
    await urara.say_and_wait(
      '所以我就想，要是我赢了，大家一定会更开心的，所以我想跑赢！',
    );
    await urara.say_and_wait([
      '但是当我这样说了之后，',
      urara_call_rice,
      ' 却向我说了很多以前从来没有想过的问题……',
    ]);
    era.drawLine();
    await rice.say_and_wait([
      '所以现在 ',
      rice_call_urara,
      ' 追求的胜利，难道只是为了别人吗……',
      rice_call_urara,
      '，是不是忽略了重要的事情？',
    ]);
    await rice.say_and_wait([
      '并不是说 ',
      rice_call_urara,
      ' 做得不对哦，愿意为他人取胜是件了不起的事，',
      sys_get_colored_callname(30, 30),
      ' 也觉得没问题，但 ',
      rice_call_urara,
      ' 为自己着想的部分呢？',
    ]);
    await rice.say_and_wait([
      sys_get_colored_callname(30, 30),
      ' 知道大家对 ',
      rice_call_urara,
      ' 的奔跑会投射不一样的期许，但 ',
      rice_call_urara,
      ' 自己对怎么看也很重要。',
    ]);
    await rice.say_and_wait([
      '只是一味认为自己尽力就好的话，不会因输掉比赛失落的 ',
      sys_get_colored_callname(30, 52),
      '，可能也并非 ',
      rice_call_urara,
      ' 的真心哦？',
    ]);
    if (era.get('love:30') >= 50) {
      await rice.say_and_wait([
        '而且又想要取得胜利，却又同时觉得输了也能够接受，也是一种傲慢哦？',
      ]);
      await rice.say_and_wait([
        '既然 ',
        sys_get_colored_callname(30, 52),
        ' 觉得输了也无所谓的话，那把 ',
        sys_get_colored_callname(30, 0),
        ' 让给 ',
        sys_get_colored_callname(30, 30),
        ' 也可以吧？',
      ]);
    }
    era.drawLine();
    await urara.say_and_wait([
      '在那之后，我就一直在思考着 ',
      urara_call_rice,
      ' 的问题，直到今天并跑时，被大家甩在身后的时候。',
    ]);
    await urara.say_and_wait(
      '又只剩下我一个人，想到那个问题，胸口就好疼，但又和跑步时的感觉不一样……',
    );
    await urara.say_and_wait([
      callname,
      '，乌拉拉为什么会那么难受呢……还是不明白啊……',
    ]);
    if (era.get('love:30') >= 50) {
      await era.printAndWait([
        '就和 ',
        urara.get_colored_name(),
        ' 一样，',
        me.get_colored_name(),
        ' 也一时摸不着。很难想象平日里温柔的 ',
        rice.get_colored_name(),
        '，竟然会对好友做出如此霸道的宣言。',
      ]);
      await era.printAndWait([
        '不过「把 ',
        sys_get_colored_callname(30, 0),
        ' 让给',
        rice.sex,
        '」什么的，',
        rice.get_colored_name(),
        ' 在有些时候意外的好酷啊。',
      ]);
      await era.printAndWait([
        '至于 ',
        rice.get_colored_name(),
        ' 为什么会变成这样，大概某人自己还是最清楚的那个人……话题偏了，言归正传。',
      ]);
    }
    era.println();
    await era.printAndWait([
      '看到 ',
      urara.get_colored_name(),
      ' 虽然苦恼但真的意识到了问题的存在，',
      me.get_colored_name(),
      ' 反而有点高兴。',
    ]);
    await era.printAndWait([
      rice.get_colored_name(),
      ' 从好友的角度给出的意见确实一针见血。不如说现在甚至要感谢 ',
      rice.get_colored_name(),
      ' 才对。',
    ]);
    await era.printAndWait([
      '输掉后会伤心难过是很正常甚至是重要的感情，但 ',
      urara.get_colored_name(),
      ' 却在无意间忽视了这一点。',
    ]);
    await era.printAndWait([
      '或许是因为',
      urara.sex,
      '认为「奔跑理应是快乐的」，所以才会将「输掉后伤心的那一面」藏了起来。',
    ]);
    await era.printAndWait([
      '听起来不太健康，但懂事的孩子或多或少会有勉强自己的现象，好在周围的大家都愿意对',
      urara.sex,
      '温柔以待。',
    ]);
    await era.printAndWait([
      '但当 ',
      urara.get_colored_name(),
      ' 把注意力重新放回被忽略的竞争意识，积攒的压力与对一着的渴望都会逐渐浮上水面。',
    ]);
    await era.printAndWait([
      '简单来说，虽然找到了下一步突破口，但总觉得不太利于小',
      urara.uma_sex_title,
      '的身心健康。',
    ]);

    const ret = [0, 0];
    await in_urara.say_as_unknown_and_wait([
      '话虽如此，该做的引导还是会做吧？这样的话，训练员',
      me.get_adult_sex_title(),
      '（您）……',
    ]);
    era.printButton(
      '「乌拉拉真不知道吗？自己『渴望着第一名』，绝不是『输了也无所谓』的事。」（智力+10）',
      1,
    );
    era.printButton(
      '「从不甘心中延伸出的压力就是如此，学着接纳它们，应该可以跑得更快吧。」（速度+10）',
      2,
    );
    ret[0] = await era.input();
    if (era.get('relation:52:0') > 150) {
      await era.printAndWait([
        '似乎明白了 ',
        me.get_colored_name(),
        ' 回复中的含义，',
        urara.get_colored_name(),
        ' 眼中失落的花朵也逐渐明亮起来。',
      ]);
      await urara.say_and_wait([
        '嗯！是说化悲伤为动力……好像也不对！但大概是这个意思吧？',
        sys_get_colored_callname(52, 61),
        ' 也这样说过！',
      ]);
      await era.printAndWait([
        '悄悄地用肢体与尾巴紧紧地缠住 ',
        me.get_colored_name(),
        ' 的身体，小',
        urara.uma_sex_title,
        '仅有一层薄薄的布料包裹的身体近在咫尺。',
      ]);
      await era.printAndWait([
        urara.teen_sex_title,
        '的脸颊与肌肤仿佛因夕阳的照射而染上了红晕，在略带咸味的晚风中向 ',
        me.get_colored_name(),
        ' 传递着湿润的温暖。',
      ]);
      await urara.say_and_wait([
        '而且 ',
        callname,
        ' 也在身边！就算会觉得难受，以后也一定能克服的——',
      ]);
    } else {
      await era.printAndWait([
        '尽管表情还表现得有些许犹豫，但小',
        urara.uma_sex_title,
        '的内心似乎已经接受了 ',
        me.get_colored_name(),
        ' 的答案。',
      ]);
      await urara.say_and_wait(
        '应该是这样没错，我自己对第一名的心情也是一样的，虽然心情很难受，但是……',
      );
      await era.printAndWait([
        '小心翼翼地靠在 ',
        me.get_colored_name(),
        ' 的身边，渴望着接触安抚的 ',
        urara.get_colored_name(),
        ' 将头与耳朵悄悄地枕在 ',
        me.get_colored_name(),
        ' 的肩上。',
      ]);
      await era.printAndWait([
        '细嫩的小手轻轻攀上了 ',
        me.get_colored_name(),
        ' 的手指，小',
        urara.uma_sex_title,
        '比人类稍高的体温通过手背将奇妙的温暖扩散到全身各处。',
      ]);
      await urara.say_and_wait([
        '但是就像 ',
        urara_call_rice,
        ' 说得那样，接受自己的渴望，一定不会是错的——',
      ]);
    }
    era.println();
    await era.printAndWait([
      '将逐渐舒缓完毕的双腿逐渐放平在沙滩上，',
      urara.get_colored_name(),
      ' 主动向 ',
      me.get_colored_name(),
      ' 发出了下一步的邀请。',
    ]);

    await urara.say_and_wait([
      '所以 ',
      callname,
      '，我现在想多跑两圈，要一起来训练吗？',
    ]);
    era.printButton(
      '「那样的话，那边还有能用的轮胎，要试试看吗？」（力量+10）',
      1,
    );
    era.printButton(
      '「可以啊，距太阳落山还有一段时间，要跑吗？」（根性+10）',
      2,
    );
    ret[1] = await era.input();

    await era.printAndWait([
      '拍掉身上的沙子，',
      urara.get_colored_name(),
      ' 与 ',
      me.get_colored_name(),
      ' 一同从洒满夕阳的沙滩上站起来。',
    ]);
    await era.printAndWait([
      '与以往不同的是，迎着映成金黄色的大海，',
      urara.get_colored_name(),
      ' 的眼中，燃气了一点小小的斗志。',
    ]);
    await era.printAndWait([
      '或许',
      urara.sex,
      '完全理解自己的心情还需要更多时间，所以现在，',
      urara.teen_sex_title,
      '选择了最简单易懂的方式踏出了第一步。',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait(
      '让乌拉拉直面自身的选择……不，这也是乌拉拉自己的选择才对。',
    );
    await in_urara.say_as_unknown_and_wait(
      '这样真的好吗？我不会比您更清楚的，至于您的想法……就算不问我也猜得到。',
    );
    await in_urara.say_as_unknown_and_wait(
      '虽然在您眼中我大概是个『失败主义者』，但无论何时，『急流勇退』也都不在选项之列。',
    );
    const attr_change = new Array(5).fill(0);
    attr_change[ret[0] === 1 ? attr_enum.intelligence : attr_enum.speed] = 10;
    attr_change[ret[1] === 1 ? attr_enum.strength : attr_enum.endurance] = 10;
    get_attr_and_print_in_event(52, attr_change, 0) && (await era.waitAnyKey());
  };

  handlers[47 + 32] = async (
    urara,
    me,
    in_urara,
    callname,
    _,
    event_object,
  ) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:52:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_end, event_object);
      return false;
    }
    await print_event_name('夏合宿（经典年）结束', urara);
    await in_urara.say_as_unknown_and_wait('……这样也不错？');
    await in_urara.say_as_unknown_and_wait(
      '是啊，合宿就要结束了呢，好好享受这个夜晚吧……',
    );
    era.drawLine();
    await era.printAndWait([
      me.get_colored_name(),
      ' 原本以为这是个沉默又尴尬的一夜，但现在 ',
      urara.get_colored_name(),
      ' 却缩在 ',
      me.get_colored_name(),
      ' 的身旁，笑容中带着',
      urara.teen_sex_title,
      '的羞涩。',
    ]);
    await era.printAndWait([
      '……倒也不是说这就不沉默不尴尬，只是在这个房间中，坐在一旁手足无措的只有 ',
      me.get_colored_name(),
      ' 一人而已。',
    ]);
    await era.printAndWait([
      '那 ',
      urara.get_colored_name(),
      ' 呢？先是穿着睡衣连理由都没有的闯入 ',
      me.get_colored_name(),
      ' 住宿的房间，又自顾自地拉着 ',
      me.get_colored_name(),
      ' 一直玩到了睡前。',
    ]);
    await era.printAndWait([
      '而现在，完全赶不走的小',
      urara.uma_sex_title,
      '正擅自躺在自己铺开的床铺里，似乎誓要与',
      urara.sex,
      '的 ',
      callname,
      ' 共处一夜。',
    ]);
    await era.printAndWait([
      '偷偷打电话给其他人，让他们把小',
      urara.uma_sex_title,
      '拎回去……如果真这么简单就好了。',
    ]);
    await era.printAndWait([
      '感受着从薄被下伸出的小手给予的拉扯感，',
      me.get_colored_name(),
      ' 明白自己已经被 ',
      urara.get_colored_name(),
      ' 拦住了退路。',
    ]);
    await era.printAndWait([
      '虽然不知道',
      urara.sex,
      '在想什么，但恐怕只要拿起手机，就会立刻发生被小',
      urara.uma_sex_title,
      '以玩闹的名义扑倒的事故。',
    ]);
    await era.printAndWait([
      '不过也不能就这么算了。抱着最后一点「或许会有人发现」的希望，',
      me.get_colored_name(),
      ' 向 ',
      urara.get_colored_name(),
      ' 小声地确认道。',
    ]);
    era.printButton('「那个……乌拉拉，大家知道你来这里吗？」', 1);
    await era.input();
    await urara.say_and_wait(
      '不知道哦？要是大家知道的话，肯定不会让我来这里吧。',
    );
    await urara.say_and_wait([
      '不过不用担心！大家不知道的只有乌拉拉会去找 ',
      callname,
      ' 而已！',
    ]);
    await era.printAndWait([
      '似乎猜到了 ',
      me.get_colored_name(),
      ' 的目的，',
      urara.get_colored_name(),
      ' 眨了眨眼睛，如同面带微笑的肉食兽般用言语拦在了 ',
      me.get_colored_name(),
      ' 的退路上。',
    ]);
    await urara.say_and_wait([
      '所以 ',
      callname,
      ' 为什么关掉灯后还要坐着呢？已经到了要睡觉的时间了哦？',
    ]);
    await era.printAndWait([
      '结果又是意料之内的孤立无援。顺着小',
      urara.uma_sex_title,
      '的催促，',
      me.get_colored_name(),
      ' 听天由命的倒在了并排摆放的床铺上。',
    ]);
    await era.printAndWait([
      '早该知道的啊，即使平日里乖巧可爱，这个小家伙作为',
      urara.uma_sex_title,
      '的本能依旧是咬住不放的伏兵……',
    ]);
    await urara.say_and_wait(
      '真是大玩特玩了一番呢，在海里尽情地游泳，也和大家聊了好多事情！',
    );
    await urara.say_and_wait([
      '嘿嘿～留下好多夏天的回忆。',
      callname,
      '，明年我们也会来吗？',
    ]);
    await era.printAndWait([
      '夏天的回忆啊，如果最后不是被小',
      urara.uma_sex_title,
      '强硬的袭击就更好了……',
      urara.get_colored_name(),
      ' 应该不会是那样的孩子吧？',
    ]);
    era.printButton(
      '「应该可以吧，而且训练时的回忆也……这个时候还是不提了……」',
      1,
    );
    await era.input();
    if (era.get('relation:52:0') > 150) {
      await urara.say_and_wait([
        '没有哦！训练的回忆也很开心，跟 ',
        callname,
        ' 一起也是开心的回忆。',
      ]);
      await era.printAndWait([
        '两人间的距离似乎更近了一些，担当小小的手指伸进了另一边的床褥，轻挠着 ',
        me.get_colored_name(),
        ' 的掌心。',
      ]);
      await era.printAndWait([
        '小巧的身体安静地滑进 ',
        me.get_colored_name(),
        ' 的床铺，砰砰的心跳声隔着小',
        urara.uma_sex_title,
        '柔软的肉体向 ',
        me.get_colored_name(),
        ' 传递着富有节奏的温暖。',
      ]);
      await era.printAndWait([
        '现在月色正好，只要稍微偏一下视线，应该就能与',
        urara.teen_sex_title,
        '被月光照亮的樱瞳四目相对。',
      ]);
    } else {
      await urara.say_and_wait([
        '没关系！训练的回忆也很重要，而且 ',
        callname,
        ' 也帮了乌拉拉哦？',
      ]);
      await era.printAndWait([
        '不知何时悄悄地靠了过来，',
        urara.get_colored_name(),
        ' 的小手趁虚而入，捉住了 ',
        me.get_colored_name(),
        ' 想要缩回的手腕。',
      ]);
      await era.printAndWait([
        '安静地与 ',
        me.get_colored_name(),
        ' 挤进同一张床铺，在布料的轻声摩擦中，',
        me.get_colored_name(),
        ' 能感受到',
        urara.teen_sex_title,
        '正逐渐面向 ',
        me.get_colored_name(),
        ' 的侧脸。',
      ]);
      await era.printAndWait([
        '现在的小',
        urara.uma_sex_title,
        '正借着照进房间的月光，用复杂的眼神端详着 ',
        me.get_colored_name(),
        ' 的侧脸。',
      ]);
    }
    await era.printAndWait([
      '沉默之中，',
      urara.get_colored_name(),
      ' 的手逐渐缠住了 ',
      me.get_colored_name(),
      ' 的手指。明明还是夏天，',
      urara.get_colored_name(),
      ' 的手心却传来了冰凉的触感。',
    ]);
    await era.printAndWait([
      '在贴近的目光逐渐移开的瞬间，倚靠在 ',
      me.get_colored_name(),
      ' 身旁的小',
      urara.uma_sex_title,
      '再次开口了。',
    ]);
    await urara.say_and_wait(
      '我想了很久呢，结果发现，以前只是给大家看见笑脸的乌拉拉，总觉得就像……就像……',
    );
    await urara.say_and_wait(
      '就像……『随波逐流』？是这个词吧？乌拉拉应该没有念错对吧？',
    );

    era.printButton('「……乌拉拉觉得自己以前是在随波逐流吗？」', 1);
    await era.input();

    await urara.say_and_wait(
      '我差点就忘了该怎么做才好……心情和愿望并不冲突也是，自己想要什么也是。',
    );
    await urara.say_and_wait(
      '但一想到以前总会输掉，就感觉心里慌慌的，结果连平常都紧张起来了……',
    );
    await era.printAndWait(
      '原来是对心理变化太敏感而感到不安，所以本能地想要找靠得住的大人抚平心情啊，那这样的话……',
    );

    era.printButton(
      '「我明白了，乌拉拉如果觉得难受的话说出来就好，而且——」',
      1,
    );
    await era.input();

    await urara.say_and_wait([
      '而且 ',
      callname,
      ' 会一直陪着乌拉拉？嘿嘿～我也知道哦？这是已经约好的事情吧。',
    ]);
    await era.printAndWait([
      '似乎对早就猜到的回答并不介意，',
      me.get_colored_name(),
      ' 的耳边传来了',
      urara.teen_sex_title,
      '满足的轻笑。',
    ]);
    await era.printAndWait([
      '从身侧环住离',
      urara.sex,
      '较近的手臂，小',
      urara.uma_sex_title,
      '轻柔的吐息声痒痒的拨弄着 ',
      me.get_colored_name(),
      ' 的耳畔。',
    ]);
    await urara.say_and_wait([
      '我明白 ',
      callname,
      ' 很辛苦，所以这样就好了哦？',
    ]);
    await era.printAndWait([
      '虽然绝对不想无端揣测 ',
      urara.get_colored_name(),
      ' 的，但这下让人不得不再次怀疑其目的性了。',
    ]);
    await era.printAndWait([
      '而似乎是要「验证」',
      me.get_colored_name(),
      ' 的担忧，在 ',
      me.get_colored_name(),
      ' 陷入僵直的沉默中，怀中的小',
      urara.uma_sex_title,
      '继续说着亲热般的悄悄话。',
    ]);

    await urara.say_and_wait([
      '那个……',
      callname,
      ' 觉得，乌拉拉是不是有所成长了呢？',
    ]);
    era.printButton(
      '「如果是问有没有晒黑的话，那我可没法回答乌拉拉啊。」（好感+10）',
      1,
    );
    era.printButton(
      '「如果说乌拉拉比以前更成熟了，乌拉拉会开心吗？」（爱慕+5）',
      2,
    );
    if (
      era.get('love:52') >= 50 &&
      get_sex_acceptable(52) &&
      urara.sex_code - 1 !== 0
    ) {
      era.printButton(
        '「如果说要留下些『特殊的回忆』，乌拉拉会同意吗？」（好感+10，爱慕+5）',
        3,
      );
    }
    const ret = await era.input();
    if (ret < 3) {
      await era.printAndWait([
        '听到 ',
        me.get_colored_name(),
        ' 故意用缺乏关照',
        urara.teen_sex_title,
        '心的方式与',
        urara.sex,
        '对答，',
        urara.teen_sex_title,
        '从被子下略带不满地轻轻掐了下 ',
        me.get_colored_name(),
        ' 的手腕。',
      ]);
      await era.printAndWait([
        '但在转头看去时，',
        urara.get_colored_name(),
        ' 却已经钻进了臂弯，将头枕在 ',
        me.get_colored_name(),
        ' 的肩膀上，对 ',
        me.get_colored_name(),
        ' 静静的笑着。',
      ]);
      await urara.say_and_wait([
        callname,
        '，明天就要回去了对吧？那今天好像还需要早点睡呢。',
      ]);
      await urara.say_and_wait([
        '诶嘿嘿～真是特别的一晚，如果下次，能让 ',
        callname,
        ' 看到不一样的乌拉拉就好了……',
      ]);
      await urara.say_and_wait('那么，晚安哦？');
      await era.printAndWait([
        '……至少，怀疑没有真的被验证已经是万幸了对吧？随着 ',
        urara.get_colored_name(),
        ' 放松了身体，',
        me.get_colored_name(),
        ' 也逐渐松了口气。',
      ]);
    } else {
      await era.printAndWait([
        '在听到了 ',
        me.get_colored_name(),
        ' 半开玩笑的请求后，',
        urara.teen_sex_title,
        '先是呆呆地瞪大了眼睛，随后任由羞涩爬上了',
        urara.sex,
        '的脸颊。',
      ]);
      await urara.say_and_wait([
        callname,
        ' 总是在说些让人为难的话，但如果 ',
        callname,
        ' 希望的话……',
      ]);
      await era.printAndWait([
        '用身体撑起轻薄的夏被，',
        urara.teen_sex_title,
        '神情变得温润起来，',
        urara.sex,
        '轻盈地跨坐到 ',
        me.get_colored_name(),
        ' 身前，将手伸向了自己的衣扣。',
      ]);
      await urara.say_and_wait([
        '大家总在说夏季合宿不可以没有青春呢，虽然乌拉拉不太懂，但 ',
        callname,
        ' 也在期待着对吧？',
      ]);
      await era.printAndWait([
        '睡衣滑落，释放出',
        urara.teen_sex_title,
        '的清香，褪去最后一丝隔阂的小',
        urara.uma_sex_title,
        '樱瞳中映着仅为 ',
        me.get_colored_name(),
        ' 而满溢的情欲。',
      ]);
      await era.printAndWait([
        '在轻声细语中诉说着纯粹的欲望，',
        urara.teen_sex_title,
        '在柔和的微光中轻声喘息，向 ',
        me.get_colored_name(),
        ' 展示着不加粉饰的肉体。',
      ]);
      await era.printAndWait(
        '敏感的乳首在情人面前忘乎所以地挺起，似乎已经做好了被玩赏到直至因快乐而昏厥的准备。',
      );
      if (era.get('talent:52:乳房尺寸') > 0) {
        await era.printAndWait([
          '两只硕大的小怪物此时终于摆脱了睡衣的束缚，一对魅乳在',
          urara.teen_sex_title,
          '娇小的身体上下作地摇晃着，',
        ]);
        await era.printAndWait(
          '就连榨取母乳时让雌性屈服的手法都无须遵守，只要轻轻捧在手中并用舌尖稍加玩弄，',
        );
        await era.printAndWait([
          '这对忍耐已久的乳袋，便会顺从地将浓密粘稠的乳汁，连同小',
          urara.uma_sex_title,
          '失神的娇声呜咽一同挤出。',
        ]);
      }
      await era.printAndWait(
        '背在身后的十指躁动不安地探入被作为性器使用的淫荡后穴，在爱人面前急不可耐地激烈自渎着，',
      );
      await era.printAndWait([
        '褪去了平日的乖巧与可人，为大家而奔跑的小偶像，现在也不过是 ',
        callname,
        ' 专属的菊穴奴隶而已。',
      ]);
      await era.printAndWait([
        '而小',
        urara.uma_sex_title,
        '那只轻轻压在 ',
        me.get_colored_name(),
        ' 下体上的幼穴，现在也像迫不及待的接纳与吞吐爱欲的汁水般微微颤抖，',
      ]);
      await era.printAndWait([
        '伴随着',
        urara.teen_sex_title,
        '燥热的身体扭动着淫靡的舞蹈，在被求爱者的小腹上不断滴下温热的银丝。',
      ]);
      await urara.say_and_wait([
        '哈啊～现在教教乌拉拉吧……嗯～',
        callname,
        '～究竟在期待什么呢～？',
      ]);
      if (era.get('flag:惩戒力度') >= 2) {
        const title = era.get('flag:惩戒力度') === 2 ? '性奴' : '孕袋';
        if (urara.sex_code === 0) {
          era.set('status:52:弗隆K', 1);
        }
        await era.printAndWait([
          '或许，眼前展示着淫荡的展示着身体的小母马比 ',
          me.get_colored_name(),
          ' 还要像只',
          title,
          '，',
          urara.sex,
          '或许更希望被 ',
          me.get_colored_name(),
          ' 所蹂躏才对。',
        ]);
        await era.printAndWait([
          '但是',
          urara.sex,
          '终究是 ',
          me.get_colored_name(),
          ' 的「',
          urara.uma_sex_title,
          '大人」，凌辱不是下贱的 ',
          me.get_colored_name(),
          ' 可以满足',
          urara.sex,
          '的。但至少作为',
          title,
          '，',
          me.get_colored_name(),
          ' 依旧能为',
          urara.sex,
          '带来快乐。',
        ]);
        await era.printAndWait([
          '轻柔而享受的含住从胸前的山谷中探出的扶',
          urara.sex,

          urara.uma_sex_title,
          '的龟头，',
          me.get_colored_name(),
          ' 用舌头小心翼翼地服侍起了担当的肉棒。',
        ]);
        await era.printAndWait([
          '没关系的，只要',
          urara.sex,
          '能高兴就好了，只要 ',
          urara.get_colored_name(),
          ' 开心就好了，就算是从前，我们不也是这样的吗……',
        ]);
        await era.printAndWait(
          '用舌尖在口中一点点挑开周围的包皮，再用能留下印记的力度吮吸与舔舐，一切都像是早已刻入了身体的本能。',
        );
        await era.printAndWait([
          '可是看着如此努力地侍奉着自己的奴隶',
          urara.uma_sex_title,
          '，',
          urara.get_colored_name(),
          ' 的眼里却闪过了一丝难以言喻的悲伤。',
        ]);
        await era.printAndWait([
          '是哪里让 ',
          urara.get_colored_name(),
          ' 难受了吗？是自己出错了吗？不要……得做的更好才行，这样一点都不合适',
          urara.sex,
          '……',
        ]);
        await era.printAndWait([
          '看到服侍对象的神情，',
          me.get_colored_name(),
          ' 就连思维都被彻底改造的大脑中，滑过了无数因便器失格产生的自我怀疑。',
        ]);
        await era.printAndWait([
          '但在 ',
          me.get_colored_name(),
          ' 有所迟疑时，',
          urara.get_colored_name(),
          ' 却从 ',
          me.get_colored_name(),
          ' 口中轻轻抽出了肉棒，反过来温柔地按住了 ',
          me.get_colored_name(),
          ' 的身体。',
        ]);
        await urara.say_and_wait([
          '没关系的，就算已经回不到从前……这样的话，就让我来，主动回应 ',
          callname,
          ' 的期待吧？',
        ]);
      }
      await quick_into_sex(52);
      await era.printAndWait([
        '缩在 ',
        me.get_colored_name(),
        ' 身旁轻声道了晚安，得到了满足的 ',
        urara.get_colored_name(),
        ' 终于安心的睡去了。',
      ]);
      await era.printAndWait([
        '那小小的',
        urara.uma_sex_title,
        '是否有所成长呢？这个问题，或许由',
        urara.sex,
        '自己来解答会更好吧……',
      ]);
      await era.printAndWait([
        '轻轻抱住那份与身体紧贴的温柔，',
        me.get_colored_name(),
        ' 也慢慢的合上了眼睛。',
      ]);
      await era.printAndWait('不论如何，今年意外纷繁的夏季都已经临近尾声了。');
    }
    era.drawLine();
    await in_urara.say_as_unknown_and_wait('……');
    await in_urara.say_as_unknown_and_wait(
      '……不，才没觉得不错，现在收回发言……果然不行的吧……',
    );
    await in_urara.say_as_unknown_and_wait('……呜……');
    era.println();
    const attr_change = new Array(5).fill(0);
    gacha(base_attr_list, 3).forEach((e) => (attr_change[e] = 5));
    let wait_flag = false;
    wait_flag =
      get_attr_and_print_in_event(52, attr_change, 0, undefined, true) ||
      wait_flag;
    wait_flag =
      sys_like_chara(52, 0, 10 * (ret !== 2), true, 5 * (ret >= 2)) ||
      wait_flag;
    wait_flag && (await era.waitAnyKey());
  };
};
