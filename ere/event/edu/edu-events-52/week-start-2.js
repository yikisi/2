const era = require('#/era-electron');

const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[47 + 1] = async (urara, me, in_urara, callname) => {
    era.set('cflag:52:节日事件标记', 0);
    await print_event_name('新年的抱负', urara);
    await in_urara.say_as_unknown_and_wait(
      '与别人的相处我不做评价，不过在乌拉拉这里，您或许意外能做个幸福的人呢。',
    );
    await in_urara.say_as_unknown_and_wait(
      '哈？乌拉拉的妈妈……才不是哦，乌拉拉的『妈妈们』会生气的。',
    );
    await in_urara.say_as_unknown_and_wait(
      '抱歉，有点兴奋了，因为难得是新年——',
    );
    era.drawLine();
    await urara.print_and_wait([
      '提着装满点心的袋子，站在门口的 ',
      urara.get_colored_name(),
      ' 若有所思地摇着耳朵，思考着在见到 ',
      callname,
      ' 后要送上怎样的惊喜：',
    ]);
    await urara.print_and_wait([
      sys_get_colored_callname(52, 61),
      ' 说重要的感谢一定要正式，所以 ',
      urara.get_colored_name(),
      ' 想要趁着这个新年向 ',
      callname,
      ' 再次认真的表达心意。',
    ]);
    await urara.print_and_wait(
      '这次只做了适量的饼干，不过两个人到底够不够吃呢？而且同样的事情再重复一次还算是惊喜吗？',
    );
    await urara.print_and_wait([
      '不过上次也被夸奖了，所以只要 ',
      callname,
      ' 喜欢就好了吧！',
      sys_get_colored_callname(52, 30),
      ' 和 ',
      sys_get_colored_callname(52, 77),
      ' 也说是礼物心意更重要呢！',
    ]);
    await urara.print_and_wait([
      '没错！礼物准备好了，感谢词也记住了，没问题的！突袭 ',
      callname,
      ' 准备OK，乌拉拉GO！',
    ]);
    await urara.print_and_wait([
      '深吸一口气，在心中预演着「认真答谢」的流程，小',
      urara.get_uma_sex_title(),
      '将手缓缓伸向了 ',
      callname,
      ' 住处的门铃……',
    ]);
    era.drawLine();
    await era.printAndWait([
      '随后，发现一只小',
      urara.get_uma_sex_title(),
      '站在门口却迟迟不动的 ',
      me.get_colored_name(),
      ' 率先一步打开了门，成功的突袭也将对方吓了一跳。',
    ]);
    await urara.say_and_wait([
      '诶？',
      callname,
      '……新年快乐！那个……还有！去年受 ',
      callname,
      ' 照顾了！接、接下来是……',
    ]);

    era.printButton(
      '「谢了！总之赶快进来吧！外面那么冷，不必为难自己也没关系哦？」',
      1,
    );
    await era.input();

    await era.printAndWait([
      '将被识破而不知所措的',
      urara.get_teen_sex_title(),
      '请进温暖的室内，',
      me.get_colored_name(),
      ' 笑着用温热的手捂住了小',
      urara.get_uma_sex_title(),
      '被冻得红红的小脸。',
    ]);
    await era.printAndWait([
      '随着冰凉的脸颊逐渐解冻，',
      urara.get_colored_name(),
      ' 脸上被冻僵的笑容也逐渐取回了平日里温暖明媚的弧度。',
    ]);
    await urara.say_and_wait([
      '嘿嘿～不好意思哦 ',
      callname,
      '，剩下的果然没想起来……',
    ]);

    era.printButton(
      '「没关系的，谢意我已经收到了，而且『Simple is best』嘛。」',
      1,
    );
    await era.input();

    if (era.get('abl:52:英语') < 2) {
      await urara.say_and_wait('Sim……？嗯……这是什么意思来着？');
      await era.printAndWait([
        '至少 ',
        urara.get_colored_name(),
        ' 英语不好还在意料之内。无奈地抚摸着',
        urara.get_teen_sex_title(),
        '的头发，',
        me.get_colored_name(),
        ' 接过了',
        urara.sex,
        '手中装满点心的袋子。',
      ]);
    }
    await era.printAndWait([
      '将充满趣味的手工饼干同新鲜的蜜柑一起摆在桌上，一旁的小烤炉也做好了摆上年糕的准备。',
    ]);
    await era.printAndWait([
      '用好奇的目光观察着 ',
      callname,
      ' 的住处，小',
      urara.get_uma_sex_title(),
      '也在很快便温暖的氛围中褪去了初到的拘谨感。',
    ]);
    await era.printAndWait([
      '一起围在桌边吃着点心与水果，在一成不变的安心感中，',
      me.get_colored_name(),
      ' 与 ',
      urara.get_colored_name(),
      ' 断断续续的聊着各种各样的事。',
    ]);
    await era.printAndWait([
      '年末约好了新年也一起度过，所以直接将 ',
      urara.get_colored_name(),
      ' 约到了自己的住处，这还真是个不赖的决定。',
    ]);
    await era.printAndWait([
      '看着双眼闪闪发光的盯着鼓泡的年糕的 ',
      urara.get_colored_name(),
      '，',
      me.get_colored_name(),
      ' 仿佛又看到了一只可爱的小动物。',
    ]);

    era.printButton('「乌拉拉，在新年里，你对将来的日子有什么……抱负吗？」', 1);
    await era.input();

    await era.printAndWait([
      '将一块烤好的年糕夹到 ',
      urara.get_colored_name(),
      ' 的碗中，',
      me.get_colored_name(),
      ' 慢慢地和用筷子戳着年糕的小 ',
      urara.get_colored_name(),
      ' 谈起了下一个话题。',
    ]);
    await urara.say_and_wait(
      '『抱』、『负』？那是什么来着……啊，难道是在说泡芙？',
    );
    await era.printAndWait([
      '嘴中咬着拉得好长的年糕，',
      urara.get_colored_name(),
      ' 歪着头反将问题丢了回来。',
    ]);

    era.printButton(
      '「……我知道了，想吃泡芙的话下次给会你买的，不过『抱负』说的是今年的目标哦？」',
      1,
    );
    await era.input();

    await urara.say_and_wait(
      '原来是目标啊！这样的话，就和以前说的一样哦？还是尽情跑步，再拿到很多第一！',
    );
    await urara.say_and_wait([
      '我会努力奔跑的！',
      callname,
      ' 会继续帮助乌拉拉的对吧！要让大家都开心起来哦！',
    ]);
    await era.printAndWait([
      '可这不是我们自契约以来一直在做的事吗？面对 ',
      urara.get_colored_name(),
      ' 可爱的笑容，',
      me.get_colored_name(),
      ' 有些无可奈何。',
    ]);
    await era.printAndWait([
      urara.sex,
      '的说法一如既往的不清不楚，该说',
      urara.sex,
      '依旧还很童真，还是虽说都有考虑却省略得太多呢？',
    ]);
    await era.printAndWait([
      '不过时间不会等人，既然担当说自己准备好了，那也该开始制定下一步的行动计划了。',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '那么擅长解谜的训练员',
      me.get_adult_sex_title(),
      '（您）觉得，近期最适合乌拉拉的活动是——',
    ]);
    era.printButton(
      '「说到这个，前段时间的年末考试成绩怎么样？有进步吗？」（根性+10）',
      1,
    );
    era.printButton(
      '「现在是新年啊，难得有机会闲下来，不如多休息一下吧？」（耐力+10）',
      2,
    );
    era.printButton(
      '「话说回来，乌拉拉最近休息时在看什么漫画或者动画呢？」（技能点数+20）',
      3,
    );
    const attr_change = new Array(5).fill(0);
    let pt_change = 0;
    switch (await era.input()) {
      case 1:
        attr_change[attr_enum.toughness] = 10;
        await urara.say_and_wait('诶诶诶诶诶～！？');
        await era.printAndWait(
          '新年时提学习，实际恶鬼的计谋！世界上最讨厌的大人也莫过于此！',
        );
        await era.printAndWait([
          '在 ',
          callname,
          ' 看似无心插柳的提问中，就连乐观常驻的 ',
          urara.get_colored_name(),
          ' 也陷入到了极大的动摇之中！',
        ]);
        await era.printAndWait([
          '当然 ',
          me.get_colored_name(),
          ' 早就知道 ',
          urara.get_colored_name(),
          ' 的学习状态，这样的提问不过是借机对「三分钟热度',
          urara.get_teen_sex_title(),
          '」的小警示。',
        ]);
        if (era.get('abl:52:英语') < 2) {
          await era.printAndWait(
            '而且连那么简单的英语都不知道未免也太不妙了，身为教育者可没法置之不理。',
          );
        }

        era.printButton(
          '「别怕，不是要责备乌拉拉，总之努力克服一下吧，有干劲的话会有所改善的。」',
          1,
        );
        await era.input();

        await urara.say_and_wait(
          '呜……但是还是奔跑和比赛更有意思嘛！但是、但是……我知道了……',
        );
        await era.printAndWait([
          urara.get_colored_name(),
          ' 啊，莫怪 ',
          callname,
          ' 卑鄙，并不是在打击担当，只是比起三分钟热度，持之以恒才能跑得更快哦？',
        ]);
        await era.printAndWait([
          '面对小',
          urara.get_uma_sex_title(),
          '眼中两朵委屈的樱花与像仓鼠般因塞满了年糕而鼓起的小脸，',
          me.get_colored_name(),
          ' 掩饰着心虚别开了视线。',
        ]);
        await urara.say_and_wait([
          '怎么这样呢……我明明还想要在 ',
          callname,
          ' 家留宿的……',
        ]);
        await me.say_and_wait('不，所以说……嗯？！');
        break;
      case 2:
        attr_change[attr_enum.endurance] = 10;
        await urara.say_and_wait('嗯？要多休息吗？但是我一直都睡得很好哦！');

        era.printButton(
          '「难得过新年，健健康康的结束才是最好的，有机会闲下来就不需要太心急。」',
          1,
        );
        await era.input();

        await era.printAndWait([
          '优秀的赛',
          urara.get_uma_sex_title(),
          '最重要的就是健康嘛，如果休息都不积极，平日里练得再多在受伤时也用不上啊。',
        ]);
        await era.printAndWait([
          '而且以后的训练计划恐怕强度也会越来越高，保持健康是非常重要的，尤其是对 ',
          urara.get_colored_name(),
          ' 来说。',
        ]);
        await urara.say_and_wait([
          '那……既然 ',
          callname,
          ' 这样说了，我最近就要多打扰 ',
          callname,
          ' 了哦？',
        ]);
        await era.printAndWait([
          '虽然想说的是要 ',
          urara.get_colored_name(),
          ' 最近多睡一会儿，毕竟孩子长身体，但既然',
          urara.sex,
          '愿意来那 ',
          me.get_colored_name(),
          ' 也不是不欢迎。',
        ]);
        await urara.say_and_wait([
          '所以今天我也正好准备好在 ',
          callname,
          ' 家里留宿的准备了！',
        ]);
        await era.printAndWait([
          '那这样或许也不错……等下？',
          urara.sex,
          '后一句说的什么？',
        ]);
        break;
      case 3:
        pt_change = 20;
        await urara.say_and_wait([
          '嗯……最近在看 ',
          sys_get_colored_callname(52, 15),
          ' 推荐的动画哦！是赛车题材的！还有还有……',
        ]);
        await era.printAndWait([
          '在 ',
          urara.get_colored_name(),
          ' 兴奋的描述中拿出手机，',
          me.get_colored_name(),
          ' 很快就找到了这部赛车题材的科幻作品。',
        ]);
        await era.printAndWait(
          '车手与AI间的配合、是AI主导车手比赛还是AI全力支援车手的理念冲突、赌上全力的挚友对决……',
        );
        await era.printAndWait([
          '或许会有能用在训练中的灵感，就这个了！不过，没想到 ',
          get_chara_talk(15).get_colored_name(),
          ' 会推荐这类型的动画啊。',
        ]);
        await urara.say_and_wait([
          '对了 ',
          callname,
          '，正好今天晚上我要留宿，所以晚上的时候一起看吧！',
        ]);

        era.printButton('「好！等吃完点心就一起看吧……不对，什么？」', 1);
        await era.input();
    }
    era.println();
    await urara.say_and_wait([
      '啊！我忘记和 ',
      callname,
      ' 说了！没关系哦，乌拉拉已经和大家说了，留宿申请也做好了！',
    ]);
    await era.printAndWait([
      '看着 ',
      me.get_colored_name(),
      ' 猛然回过神后惊讶的神情，小',
      urara.get_uma_sex_title(),
      '以为 ',
      me.get_colored_name(),
      ' 在担心',
      urara.sex,
      '没做好准备，连忙向 ',
      me.get_colored_name(),
      ' 解释道。',
    ]);

    era.printButton(
      '「不，等下，我不是那个意思，我是说……那个，如果你的训练员是坏人呢？」',
      1,
    );
    await era.input();

    await urara.say_and_wait(['诶？所以说 ', callname, ' 觉得自己是坏人吗？']);
    era.println();
    if (era.get('relation:52:0') > 150) {
      await era.printAndWait([
        '其实 ',
        me.get_colored_name(),
        ' 想说 ',
        urara.get_colored_name(),
        ' 就算是',
        urara.get_uma_sex_title(),
        '也要保护好自己，不要随便信任只认识了半年的成年人。',
      ]);
      await era.printAndWait(
        '这样的事在社会上有着很多实例，就算对方是朝夕相处的训练员也不能保证对其知根知底。',
      );
      await era.printAndWait([
        '但要说自己是不是坏人……抬头看着 ',
        urara.get_colored_name(),
        ' 的笑容，就算是也很难当着',
        urara.sex,
        '的面承认。',
      ]);
      await era.printAndWait([
        '可初次相遇时，有个人又分明要对当时还未曾相识的小',
        urara.get_uma_sex_title(),
        '动手动脚……',
      ]);
    } else {
      await era.printAndWait([
        '虽然本意是想要 ',
        urara.get_colored_name(),
        ' 不要随便信任只认识了半年的成年人，但这话出自 ',
        me.get_colored_name(),
        ' 的口中似乎又不太合适。',
      ]);
      await era.printAndWait([
        '或许自己真是个坏人？总之在对 ',
        urara.get_colored_name(),
        ' 说出此等劝解时，',
        me.get_colored_name(),
        ' 对自己一直以来的言行也没法割席。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 虽然一直保持着行动上的亲密，但 ',
        me.get_colored_name(),
        ' 很清楚',
        urara.sex,
        '远没有脸上的笑容来的开心。',
      ]);
      await era.printAndWait([
        '可能直到现在，小',
        urara.get_uma_sex_title(),
        '都只是在强忍着低落的心情，才能贴在',
        urara.sex,
        '的训练员身边也说不定。',
      ]);
    }
    era.println();
    await era.printAndWait([
      '似乎是看出了 ',
      me.get_colored_name(),
      ' 陷入沉默的理由，',
      urara.get_colored_name(),
      ' 笑着放下了手中的碗筷，并拉着椅子并排坐到了 ',
      me.get_colored_name(),
      ' 的身边。',
    ]);
    await urara.say_and_wait([
      '是坏人也没关系哦？因为我想要信任 ',
      callname,
      '！',
    ]);

    era.printButton('「这不是信任就能解决的问题啊……」', 1);
    await era.input();

    await urara.say_and_wait([
      '可是我不想只凭感情疏远 ',
      callname,
      '，就算 ',
      callname,
      ' 是坏人，乌拉拉也要靠在 ',
      callname,
      ' 身边！',
    ]);
    await urara.say_and_wait([
      '而且会帮助乌拉拉的 ',
      callname,
      ' 也不会多坏吧！所以就算是坏人，也一定能变好的！',
    ]);
    await urara.say_and_wait([
      '所以我和 ',
      callname,
      ' 一起！两人一定可以像二人三足……？那样继续下去的！',
    ]);
    await era.printAndWait([
      '现在的 ',
      urara.get_colored_name(),
      ' 就像特摄剧中的英雄一样在闪闪发光，又或许',
      urara.sex,
      '一直都是这样的形象也说不定。',
    ]);
    await era.printAndWait([
      '不过，二人三足？',
      urara.get_colored_name(),
      ' 竟然知道会知道这个词吗？谁教给',
      urara.sex,
      '的啊？',
    ]);
    if (
      era.get('exp:52:性爱次数') > era.get('exp:52:睡奸次数') ||
      era.get('love:52') >= 50
    ) {
      await urara.say_and_wait([
        '而且虽然只认识了半年，但 ',
        callname,
        ' 不是早就对乌拉拉做过很多很多事了吗？',
      ]);
      await urara.say_and_wait([
        '明明乌拉拉都没有害怕，',
        callname,
        ' 却开始打退堂鼓了呢！难道 ',
        callname,
        ' 很害羞？',
      ]);
      await era.printAndWait([
        '哈啊，这下可真是被 ',
        urara.get_colored_name(),
        ' 戳到痛处了。在这样的事实面前，',
        me.get_colored_name(),
        ' 也只得回以一时的苦笑。',
      ]);
    }
    era.println();
    era.printButton(
      '「嗯……但还有一种可能，如果你的训练员，其实是只想要吃掉乌拉拉的大灰狼呢？」',
      1,
    );
    await era.input();

    await era.printAndWait([
      '不只是出于想起了什么还是单纯的想要延续话题，换上了更认真的表情，',
      me.get_colored_name(),
      ' 继续问了下去。',
    ]);
    await urara.say_and_wait([
      '大灰狼真的很可怕哦！',
      callname,
      ' 真的会那样做吗？乌拉拉会是小红帽吗？',
    ]);
    await urara.say_and_wait([
      '诶嘿嘿～',
      callname,
      ' 说要吃掉乌拉拉，乌拉拉到底要不要期待呢？',
    ]);
    if (era.get('exp:52:性爱次数') > era.get('exp:52:睡奸次数')) {
      await urara.say_and_wait(
        '啊，不小心忘记了呢！大灰狼其实早就把小红帽吃掉了！',
      );
      await urara.say_and_wait([
        '那么大灰狼',
        me.get_adult_sex_title(),
        '，乌拉拉到底好不好吃呢？',
      ]);
    }
    era.println();
    await era.printAndWait([
      '出乎意料的，明明就贴在 ',
      me.get_colored_name(),
      ' 身边，',
      urara.get_colored_name(),
      ' 竟然一边天真地笑着一边做出了挑衅般的反制。',
    ]);
    await era.printAndWait([
      '纯真地摆出全然不信的表情，',
      urara.get_colored_name(),
      ' 调皮地眨着眼睛，脸上尽是「小',
      urara.sex_code - 1 ? '姑娘' : '男孩',
      '的得意洋洋」。',
    ]);
    await era.printAndWait(
      '看来，虽然跟小孩子较劲不太好，但也得适当的找回自己的位置了。',
    );
    await era.printAndWait([
      '抱着恶作剧的心态站起来，不等 ',
      urara.get_colored_name(),
      ' 做出反应，',
      me.get_colored_name(),
      ' 就伸手将',
      urara.sex,
      '抱在了怀里。',
    ]);

    era.printButton(
      `「既然乌拉拉这么说，那训练员现在就尝尝${urara.sex}的味道吧。」`,
      1,
    );
    await era.input();

    await urara.say_and_wait(['咦、诶？', callname, '……？']);
    await era.printAndWait([
      '没有理会',
      urara.get_teen_sex_title(),
      '迷茫的反应，',
      me.get_colored_name(),
      ' 用公主抱的方式将',
      urara.sex,
      '抱起，并将其轻巧的带进了某间摆着床铺的房间。',
    ]);
    await era.printAndWait([
      '将怀中意外轻得可以的 ',
      urara.get_colored_name(),
      '「顺手」扔到床上，',
      me.get_colored_name(),
      ' 反手「用力」甩上了卧室的房门。',
    ]);
    await era.printAndWait([
      '在身体被摔在床铺上的瞬间，',
      urara.get_teen_sex_title(),
      '的神情从先前带着羞涩的疑惑转为了混杂着惊恐的绯红。',
    ]);
    await era.printAndWait([
      '似乎连挣扎都忘记了，面对图谋不轨，小',
      urara.get_uma_sex_title(),
      '只是折起耳朵夹紧尾巴，在床上害怕的缩成一团。',
    ]);
    await urara.say_and_wait([
      callname,
      '？现在乌拉拉还不想睡哦？',
      callname,
      '……？呜啊～',
    ]);
    await era.printAndWait([
      '随后在',
      urara.get_teen_sex_title(),
      '的娇声惊呼中，慌乱得束手无策的 ',
      urara.get_colored_name(),
      ' 被 ',
      me.get_colored_name(),
      ' 捉住双腕粗暴的按在了床上。',
    ]);
    await era.printAndWait([
      '压在平日里最亲近的大人身下，感受着自己逐渐被包裹的身体，',
      urara.get_teen_sex_title(),
      '睁大的樱瞳中蓄满了泪水。',
    ]);
    era.println();
    if (era.get('talent:52:喜欢痛苦') || era.get('exp:52:受虐高潮次数') >= 2) {
      await urara.say_and_wait(
        '要被吃掉了，得快点反抗才行……但是，身体这次却还是没法听话的动起来……',
        true,
      );
      await urara.say_and_wait([
        '生气的 ',
        callname,
        ' 会对我做什么呢？会对乌拉拉做比以前还要残酷的事情吗？',
      ]);
      await urara.say_and_wait([
        '或许这次会被 ',
        callname,
        ' 关起来也说不定，或许下次再见到大家时，身体和精神都会坏掉也说不定；',
      ]);
      await urara.say_and_wait(
        '可是一想到这些，身体就会止不住的兴奋，或许我早就已经被弄坏掉了也说不定……',
      );
      await urara.say_and_wait('明明……能温柔点就好了……', true);
    } else if (era.get('exp:52:性爱次数') > era.get('exp:52:睡奸次数')) {
      await urara.say_and_wait(
        [callname, ' 要在这里做那样的事吗？', callname, ' 现在的样子好奇怪……'],
        true,
      );
      await urara.say_and_wait(
        [
          '可是明明现在不可以的，身体却软下来了，而且 ',
          callname,
          ' 在做这些时一直还算温柔，所以……',
        ],
        true,
      );
      await urara.say_and_wait(
        '乌拉拉会被粗暴对待吗？会很疼吗？会发生很可怕的事吗？',
        true,
      );
      await urara.say_and_wait(
        '但是为什么，一想到会被做这样那样的事，身体就会热得不得了呢？',
        true,
      );
      await urara.say_and_wait(
        ['如果 ', callname, ' 一定要这样的话，那乌拉拉也……'],
        true,
      );
    } else {
      await urara.say_and_wait(
        [
          '现在应该赶紧挣脱才对，就算是 ',
          callname,
          ' 也不可以，但是为什么看着 ',
          callname,
          '，四肢就使不上力气……',
        ],
        true,
      );
      await urara.say_and_wait(
        '胸口跳得好疼，可身体却变得软乎乎的，就好像……自己被这个人被吃掉也没关系一样……',
        true,
      );
      await urara.say_and_wait(
        [
          '乌拉拉接下来会被扯开衣服，再被强硬的凌辱，就像 ',
          sys_get_colored_callname(52, 30),
          ' 私藏的漫画上的女主所经历的那样……',
        ],
        true,
      );
      await urara.say_and_wait(
        [
          '大人的气味，好近……',
          callname,
          ' 的味道好好闻，舒服到不想反抗，可为什么会这样呢……',
        ],
        true,
      );
      await urara.say_and_wait(
        ['这样真的就好了吗？把身体交给 ', callname, ' 什么的……'],
        true,
      );
    }
    era.println();
    await era.printAndWait([
      '就好像接受了命运般，',
      urara.get_teen_sex_title(),
      '在 ',
      me.get_colored_name(),
      ' 身下闭上了眼睛。',
    ]);
    await era.printAndWait([
      '但小',
      urara.get_uma_sex_title(),
      '想象中的凄惨遭遇却并没有到来：放开 ',
      urara.get_colored_name(),
      ' 的手，',
      me.get_colored_name(),
      ' 在',
      urara.get_teen_sex_title(),
      '的额头上「啪」得轻弹了一下。',
    ]);
    await urara.say_and_wait('呜诶？');
    await era.printAndWait([
      '惊讶地睁开还挂着泪珠的双眼，',
      urara.get_colored_name(),
      ' 就看到了变回平常的样子哭笑不得的站在一旁的 ',
      me.get_colored_name(),
      '。',
    ]);

    era.printButton(
      `「所以说，明明${urara.get_uma_sex_title()}很轻易就能把人类推开，但刚刚发生了什么啊？」`,
      1,
    );
    await era.input();

    await urara.say_and_wait([
      '但是……这是因为 ',
      callname,
      ' 是 ',
      callname,
      '……',
    ]);

    era.printButton(
      '「如果乌拉拉以后遇到的其他要密切相处的人，也是大灰狼呢？」',
      1,
    );
    await era.input();

    await urara.say_and_wait('呜……那个……');
    await era.printAndWait([
      '看到真的要哭出来的 ',
      urara.get_colored_name(),
      '，',
      me.get_colored_name(),
      ' 无奈地坐在',
      urara.sex,
      '身边，轻轻抚摸着',
      urara.sex,
      '的头发。',
    ]);
    await era.printAndWait([
      '在安抚了一阵后，终于平静下来的 ',
      urara.get_colored_name(),
      ' 像是累了般，将身子靠在了 ',
      me.get_colored_name(),
      ' 的身边。',
    ]);
    await era.printAndWait([
      '是欺负过头了吗？不过被 ',
      me.get_colored_name(),
      ' 推倒的时候，',
      urara.get_colored_name(),
      ' 露出的表情，就好像「渴求交配的',
      urara.get_phy_sex_title(),
      '」一样……',
    ]);
    await era.printAndWait([
      '用力揉了揉眼睛，娇柔的贴在 ',
      me.get_colored_name(),
      ' 身旁的小',
      urara.get_uma_sex_title(),
      '正用湿润的眼神注视着 ',
      me.get_colored_name(),
      '。',
    ]);

    await urara.say_and_wait(['那……', callname, ' 真的不打算做了吗？']);
    era.printButton(
      '「……现在好孩子该洗漱睡觉了哦？我去收拾下桌子睡外面。」（好感+20）',
      1,
    );
    era.printButton(
      '「……就算是大灰狼，也不会这么不合时宜的吃掉小红帽啊。」（爱慕+10）',
      2,
    );
    const ret = await era.input();

    await era.printAndWait([
      '看着 ',
      me.get_colored_name(),
      ' 离开的背影，',
      urara.get_colored_name(),
      ' 张了张嘴想要说什么，但也只是跟着 ',
      me.get_colored_name(),
      ' 站起身来。',
    ]);
    await era.printAndWait([
      '再次被 ',
      me.get_colored_name(),
      ' 抱回到房间时也，没能对说出挽留的请求，只是目送着 ',
      me.get_colored_name(),
      ' 随手关灯，身影消失在门后。',
    ]);
    await urara.say_and_wait([
      '脑袋还是好乱……但是果然我还是想要和 ',
      callname,
      ' 站在一起……',
    ]);
    await urara.say_and_wait([
      '只是这次也没能找到机会和 ',
      callname,
      ' 说说乌拉拉的事情啊……',
    ]);
    await urara.say_and_wait(['呜……这里全都是 ', callname, ' 的味道呢……']);
    await urara.say_and_wait(
      '但是这里是别人的床，所以不可以自己做舒服的事呢……',
    );
    await era.printAndWait([
      '有点可惜的小声念叨着，放弃了抵抗温暖与安心感的小',
      urara.get_uma_sex_title(),
      '，在 ',
      me.get_colored_name(),
      ' 的被子里悄悄的睡着了。',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait(
      '今夜，与乌拉拉交心的您是否感到满足呢？',
    );
    await in_urara.say_as_unknown_and_wait(
      '二人三足，真是浪漫又无用的说法，也是我最不喜欢的词语之一。',
    );
    await in_urara.say_as_unknown_and_wait([
      '但与喜好无关，因为这一定会是『您』与『',
      urara.get_colored_name(),
      '』一同写下的故事。',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '那么故事正式进入中场的您，究竟是在做『好训练员』还是『坏大灰狼』呢？',
    );
    era.println();
    let wait_flag = false;
    wait_flag =
      get_attr_and_print_in_event(
        52,
        attr_change,
        pt_change,
        undefined,
        true,
      ) || wait_flag;
    wait_flag =
      sys_like_chara(52, 0, 20 * (ret === 1), true, 10 * (ret === 2)) ||
      wait_flag;
    wait_flag && (await era.waitAnyKey());
  };
};
