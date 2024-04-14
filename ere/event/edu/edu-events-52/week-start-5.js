const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const CharaTalk = require('#/utils/chara-talk');

const RaceHistory = require('#/data/race/model/race-history');
const { race_infos, race_enum } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[143 + 1] = async (urara, me, _, callname) => {
    await print_event_name('跨越完结的故事——', urara);
    await era.printAndWait([
      '站在选手通道内，',
      me.get_colored_name(),
      ' 对正在热身的 ',
      urara.get_colored_name(),
      ' 进行着惯例性叮嘱。',
    ]);

    era.printButton('「乌拉拉，今天感觉怎么样？有什么事一定要说啊。」', 1);
    await era.input();

    await urara.say_and_wait(
      '没有哦，因为只要和上次一样跑就好了吧！那么今天也要『乌拉拉』的上了！',
    );
    await era.printAndWait([
      '没错，现在只要一如既往就好……虽然 ',
      me.get_colored_name(),
      ' 记得这个「上次」好像还是上个月末的 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '。',
    ]);
    const rank = new RaceHistory(52).get_result(95 + 48)?.rank;
    if (rank === 1) {
      await era.printAndWait([
        '也拜 ',
        urara.get_colored_name(),
        ' 的「奇迹夺冠」所赐，那场比赛的热度时至今日都还未消散。',
      ]);
      await era.printAndWait([
        '不过在震撼人心的 ',
        race_infos[race_enum.arim_kin].get_colored_name(),
        ' 的一着之上，',
        urara.get_colored_name(),
        ' 也在大家的帮助下获得了更多重要的宝物。',
      ]);
      await era.printAndWait([
        '但在比赛结束后，明明大家都在笑，',
        urara.get_colored_name(),
        ' 和 ',
        me.get_colored_name(),
        ' 却在满场观众面前相拥着哭成了一团。',
      ]);
      await era.printAndWait(
        '而那副被抓拍的又丢人又耀眼的样子，现在还在各类网络平台上广为流传着……',
      );
    } else if (rank <= 5) {
      await era.printAndWait(
        '尽管比赛结果停在略有遗憾的位置，但在所有人的心里依旧是最棒的成绩。',
      );
      await era.printAndWait([
        '而且在那之前，',
        urara.get_colored_name(),
        ' 也在大家的帮助下，收获了比胜利还要重要的东西。',
      ]);
      await era.printAndWait([
        '不过即使说着没什么大不了，可当小',
        urara.get_uma_sex_title(),
        '冲过终点板时，大家还是不约而同的哭了出来。',
      ]);
      await era.printAndWait([
        '泪水里包含的情感有很多，但唯一不变的，大概是看见 ',
        urara.get_colored_name(),
        ' 成长的感动吧……',
      ]);
    } else if (rank !== undefined) {
      await era.printAndWait([
        '虽然比赛的结果还算预料之中，但 ',
        urara.get_colored_name(),
        ' 依旧获得了所有人的祝福。',
      ]);
      await era.printAndWait([
        '而且在那之前，',
        urara.get_colored_name(),
        ' 也在大家的帮助下，收获了比胜利还要重要的东西。',
      ]);
      await era.printAndWait([
        '不过就算嘴上说着没什么大不了，可小',
        urara.get_uma_sex_title(),
        '冲过终点板时，大家还是不约而同的哭了出来。',
      ]);
      await era.printAndWait([
        '泪水里包含的情感有很多，但唯一不变的，大概是看见 ',
        urara.get_colored_name(),
        ' 成长的感动吧……',
      ]);
    }
    await era.printAndWait([
      '而在那之后资深年结束后的现在，',
      urara.get_colored_name(),
      ' 的检查结果则更让人吃惊。',
    ]);
    await era.printAndWait([
      '明明已经奔跑过三年，',
      urara.sex,
      '的本格化非但没有衰退迹象，反而又出现了新的上升空间。',
    ]);
    await era.printAndWait([
      '当然根据近期的遭遇，与 ',
      urara.get_colored_name(),
      ' 要好的人应该都能推测出这种现象的源头：',
    ]);
    await era.printAndWait([
      '虽然「',
      urara.sex,
      '」依旧羞于见人，但相比之前的「闭塞」，大家偶尔还是能在余光处看到另一抹粉色。',
    ]);
    await era.printAndWait([
      '至于现在「有马后的趁热打铁」……其实是 ',
      urara.get_colored_name(),
      ' 闹着想跑，而 ',
      me.get_colored_name(),
      ' 没拗过',
      urara.sex,
      '而已。',
    ]);

    era.printButton(
      '「不过现在想想，给故事画上句号看起来确实为时尚早啊……」',
      1,
    );
    await era.input();

    await era.printAndWait([
      '顺着 ',
      urara.get_colored_name(),
      ' 的决定，',
      me.get_colored_name(),
      ' 也想起了最近的一些变化。即使短短一个月，也足够改变很多事：',
    ]);
    await era.printAndWait(
      '特雷森的好友自不必多说，那位因腿伤退役的同学似乎也振作起来找到了未来的目标，',
    );
    await era.printAndWait([
      '尽管成为训练员的漫长道路才刚刚开始，但 ',
      me.get_colored_name(),
      ' 觉得总有一天自己会再次见到',
      urara.sex,
      '；',
    ]);
    await era.printAndWait(
      '商店街的人们正商讨着如何引入现代化商超，这并非是想要妥协，而是想要探寻改变能带来的潜力，',
    );
    await era.printAndWait([
      '比起原本的对抗与复兴，如今的大家在 ',
      urara.get_colored_name(),
      ' 的启发下，也开始尝试新时代的合作与予人方便。',
    ]);
    await urara.say_and_wait(
      '说的没错！就是因为大家都在前进，所以只要能做到，我也会继续奔跑！',
    );
    await urara.say_and_wait([
      '而且，',
      urara.sex,
      '也一直在注视着这边，不过现在已经从悲伤变得开心起来了！',
    ]);
    await urara.say_and_wait([
      '所以不管之前发生了什么，现在 ',
      callname,
      ' 也一定要好好地看着乌拉拉的奔跑哦！',
    ]);

    era.printButton('「那是当然的，现在的乌拉拉可是『无敌的』！」', 1);
    await era.input();

    await era.printAndWait([
      '伴随着 ',
      me.get_colored_name(),
      ' 的认可调整好呼吸，整理完决胜服，',
      urara.get_colored_name(),
      ' 随着广播中的入场提示向前踏出一步。',
    ]);

    era.printButton('「要上场了，乌拉拉自己觉得能赢下来吗？」', 1);
    await era.input();

    await urara.say_and_wait(
      '嗯！今天的我绝对会赢哦？就这样轻轻松松的赢下来！',
    );
    await era.printAndWait([
      '迎着阳光，',
      urara.get_colored_name(),
      ' 向 ',
      me.get_colored_name(),
      ' 露出了宛如回到起点时的无暇的笑容。',
    ]);
    await urara.say_and_wait([
      '那我要出发了哦！提问！',
      callname,
      '，乌拉拉要怎样奔跑呢——？',
    ]);
    await era.printAndWait([
      '面对 ',
      urara.get_colored_name(),
      ' 站在光中的笑脸，',
      me.get_colored_name(),
      ' 再次有力地回应着',
      urara.sex,
      '。',
    ]);

    era.printButton('「不管怎样，开心的上吧——！」', 1);
    await era.input();
    sys_like_chara(52, 0, 20, true, 10) && (await era.waitAnyKey());
  };

  handlers.ticket = async (urara, me, in_urara, callname) => {
    await print_event_name('令人安心的云雾缭绕', urara);
    await era.printAndWait([
      '与 ',
      urara.get_colored_name(),
      ' 一起跑过无数次比赛后的某一天，',
      me.get_colored_name(),
      ' 从训练员室的抽屉中翻出了一张熟悉的奖券。',
    ]);
    await era.printAndWait([
      '于此同时，训练员室的大门被「砰」的一声撞开，一道樱色的闪光也随之飞入室内。',
    ]);
    await urara.say_and_wait([
      callname,
      '！我自主训练跑完了哦──！接下来该做什么呢？',
    ]);
    await era.printAndWait([
      '抹掉盖在笑脸上的水滴，被汗水浸湿体操服的 ',
      urara.get_colored_name(),
      ' 今天也在好好的闪闪发光。',
    ]);

    era.printButton('「哦！辛苦了！现在先休息吧！」', 1);
    await era.input();

    await urara.say_and_wait(['好──！']);
    await era.printAndWait([
      '将其他杂物重新塞回抽屉，',
      me.get_colored_name(),
      ' 起身迎向了比以往都要努力的小',
      urara.get_uma_sex_title(),
      '。',
    ]);
    await era.printAndWait([
      '而回头看见桌上刚刚翻找出的「小奖励」，突然灵光一闪的 ',
      me.get_colored_name(),
      ' 对绕着自己打转的小',
      urara.get_uma_sex_title(),
      '开口问道。',
    ]);

    era.printButton(
      '「乌拉拉，是时候找个时间放松一下了吧？还记得我们有张温泉券吗？」',
      1,
    );
    await era.input();

    await urara.say_and_wait([
      '温泉券……啊！是那个时候在商店街抽到的？乌拉拉差点就要忘掉了！',
    ]);
    await urara.say_and_wait([
      '不过，为什么这么突然说现在要去呢？难道说 ',
      callname,
      ' 也忘记了，结果现在才想起来？',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      ' 真是越来越敏锐了啊。扫了眼券上即将过期的使用日期，',
      me.get_colored_name(),
      ' 无奈地笑了笑。',
    ]);
    await era.printAndWait([
      '不过现在 ',
      urara.get_colored_name(),
      ' 的时间安排比以往宽裕得多，有机会出去放松也是好事，自然没有闲置奖券的理由。',
    ]);

    era.printButton(
      '「总之……就当是迟来的奖励吧，乌拉拉想邀请哪个朋友去？」',
      1,
    );
    await era.input();

    await urara.say_and_wait([
      '嗯？',
      callname,
      ' 不去吗？但是比起朋友，我更想和 ',
      callname,
      ' 一起去温泉哦？',
    ]);

    era.printButton('「比起和大人一起去，和朋友一起去不是更自由些吗？」', 1);
    await era.input();

    await era.printAndWait([
      '面对 ',
      me.get_colored_name(),
      ' 站在「成年人」角度的疑问，仍能代表着「孩子」的 ',
      urara.get_colored_name(),
      ' 则理所当然的回应道。',
    ]);

    if (era.get('relation:52:0') > 150) {
      await urara.say_and_wait([
        '但是 ',
        callname,
        ' 也需要休息对吧？只有乌拉拉接受奖励是不行的！',
      ]);
      await urara.say_and_wait([
        '就像刚才 ',
        callname,
        ' 说的那样，对 ',
        callname,
        ' 来说，这应该也是迟来的奖励哦？',
      ]);
    } else {
      await urara.say_and_wait([
        '再说了，这是乌拉拉和 ',
        callname,
        ' 一起抽到的，一开始也就不只属于乌拉拉一个人！',
      ]);
      await urara.say_and_wait([
        '所以这张券里也有 ',
        callname,
        ' 的一份，我觉得应该和 ',
        callname,
        ' 一起去！',
      ]);
    }
    if (era.get('love:52') >= 75) {
      await era.printAndWait([
        '说到最后，在少许停顿后，',
        urara.get_colored_name(),
        ' 又露出了身为「恋人」的笑容。',
      ]);
      await urara.say_and_wait([
        '而且我觉得，和喜欢的人一起泡温泉，应该不需要太多理由对吧？',
      ]);
    }

    await era.printAndWait([
      '既然邀请如此热切，那也不方便说更多拒绝的话了。迎着担当期待的目光，',
      me.get_colored_name(),
      ' 拿起搭在椅背上的外套。',
    ]);

    era.printButton('「我先去想想该准备点什么，明天就出发，可以吗？」', 1);
    await era.input();

    await urara.say_and_wait([
      '嗯！那乌拉拉也回去做准备了，明天在大门口见哦——',
    ]);
    await era.printAndWait([
      '小',
      urara.get_uma_sex_title(),
      '在 ',
      me.get_colored_name(),
      ' 的应许声中再次飞出门外。如果能不出意外就好了，看在 ',
      urara.get_colored_name(),
      ' 这么开心的份上。',
    ]);
    await era.printAndWait([
      '但当二人拎着包兴致正盛的来到旅店前台时，意外还是不出意外的在此恭候多时了。',
    ]);
    await CharaTalk.say_by_passer_by_and_wait(
      '服务员',
      '真的很抱歉，本店的单人客房已经住满了……',
    );
    await CharaTalk.say_by_passer_by_and_wait(
      '服务员',
      '但是作为补偿，我们可以为二位提供一间自带小温泉池的双人间，客人们意向如何？',
    );

    if (me.sex_code === 1) {
      await era.printAndWait([
        '结果刚来就遇到这种尴尬的展开啊，出行的运气有点太差了。不过来都来了，这样就好。',
      ]);
      await era.printAndWait([
        '而且再看一眼身旁依旧满脸期待的小 ',
        urara.get_colored_name(),
        '，',
        me.get_colored_name(),
        ' 大概也没有打道回府的选择。',
      ]);
      await era.printAndWait(['话说回来，这类情况过夜又要怎么分配空间啊……']);
      await era.printAndWait([
        '从前台手中接过房间钥匙，',
        me.get_colored_name(),
        ' 心情略微复杂地拎起行李，与 ',
        urara.get_colored_name(),
        ' 一同拐进了旅馆的长廊。',
      ]);
      era.drawLine();
      await era.printAndWait([
        '比 ',
        urara.get_colored_name(),
        ' 更早一步回到房间，',
        me.get_colored_name(),
        ' 脱下衣服拿起浴巾，拉开了隔开温泉池的拉门。',
      ]);
      await era.printAndWait([
        '在一声长舒中放松地坐进温热的泉水中，仰望着月明星稀的夜空，',
        me.get_colored_name(),
        ' 放松的闭上眼睛。',
      ]);
      await era.printAndWait([
        '已经三年了啊，最初相遇时还像个小孩子的 ',
        urara.get_colored_name(),
        '，现在也渐渐有了成熟的姿态……',
      ]);
      await era.printAndWait([
        '随后在轻松祥和中，拉门便伴随着',
        urara.get_teen_sex_title(),
        '开心的呼声被「狂暴」地撞开了。',
      ]);
      await urara.say_and_wait([
        '嘿嘿～趁着 ',
        callname,
        ' 还没回来，乌拉拉先泡一下好了——！',
      ]);
      await era.printAndWait([
        '还没来的及睁开眼睛，撞飞良好气氛的小',
        urara.get_uma_sex_title(),
        '便在池边一跃而起，在激荡的水花中扎进了池中。',
      ]);
      await era.printAndWait([
        '前言撤回，这不是完全没长大吗？抹掉脸上的水，',
        me.get_colored_name(),
        ' 无奈地望向了前方违规入水的 ',
        urara.get_colored_name(),
        '……',
      ]);
      await era.printAndWait([
        '……等下，',
        urara.get_colored_name(),
        ' 进来了？！反应过来哪里不对的 ',
        me.get_colored_name(),
        ' 迅速站起并围上了下水前丢在池边的浴巾。',
      ]);
    } else {
      await era.printAndWait([
        '嗯？房间比券上的奖励更豪华了，甚至泡温泉的时间也更自由了。这不是运气很好吗？',
      ]);
      await urara.say_and_wait([
        '诶？虽然听起来不够热闹，但只有乌拉拉和 ',
        callname,
        '，是不是就可以在里面游泳了？',
      ]);
      era.printButton('「不可以在温泉池里游泳哦？」', 1);
      await era.input();

      await era.printAndWait([
        '轻轻拍了拍兴奋过头的小',
        urara.get_uma_sex_title(),
        '的头顶，',
        me.get_colored_name(),
        ' 笑着拎起行李，与 ',
        urara.get_colored_name(),
        ' 一同进入了旅馆的长廊。',
      ]);
      era.drawLine();
      await era.printAndWait([
        '在明亮的月色下稍微多散了一段时间步后，',
        me.get_colored_name(),
        ' 回到房间慢慢脱下衣服，随后拿起了一旁的浴巾。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 现在应该也已经入池了吧，有在做一个好孩子吗？不会真的在池子里乱扑腾吧？',
      ]);
      await era.printAndWait([
        '将手搭在隔开温泉池的拉门上，这是在想什么呢，三年了哦？',
        urara.get_colored_name(),
        ' 已经变成大孩子了不是吗……',
      ]);
      await era.printAndWait([
        '拉开拉门，',
        me.get_colored_name(),
        ' 便立刻听到了 ',
        urara.get_colored_name(),
        ' 将温泉当成泳池，并在水中激烈扑腾的声音。',
      ]);
      await urara.say_and_wait(['嘿嘿～总感觉好开心呢——！']);
      await era.printAndWait([
        '前言撤回，还是完全没长大啊。慢慢进入水中，',
        me.get_colored_name(),
        ' 无奈地望向前方正违规戏水的 ',
        urara.get_colored_name(),
        '。',
      ]);
    }
    await era.printAndWait([
      '透过氤氲的水雾，还未发现有他人在的小',
      urara.get_uma_sex_title(),
      '大方地展示着自己健康饱满的肉体。',
    ]);
    await era.printAndWait([
      '散开的樱发湿润的贴近',
      urara.get_teen_sex_title(),
      '光滑的肌肤，与下落的露水一同为',
      urara.sex,
      '天真的笑颜裹上了朦胧的暧昧。',
    ]);
    await era.printAndWait([
      '三年的锻炼并没有让柔软变得僵硬，反而让小',
      urara.get_uma_sex_title(),
      '本就肉感的腰臀与小腹变得更加丰满可人。',
    ]);
    await era.printAndWait([
      '顺着柔媚的曲线前往上下两端，',
      urara.get_teen_sex_title(),
      '股间娇嫩的秘密花园被尾巴摇起的涟漪巧妙的半掩在水面之间；',
    ]);
    await era.printAndWait([
      '而在戏水中轻柔摇晃的柔软双峰上，两朵可爱的花蕊与果实也在雾气中若隐若现。',
    ]);
    await era.printAndWait([
      '但为这幅天真又禁忌的景色添上点睛之笔的，则还是在灯火、水面与月光的相交映照中，',
    ]);
    await era.printAndWait([
      '摇晃着那对小巧可爱的耳朵，',
      urara.get_teen_sex_title(),
      '如常绽开着樱花的瞳孔，正如彩色琉璃般闪耀着美丽的色彩。',
    ]);
    await era.printAndWait([
      '唯一有些美中不足的是，风景画中烂漫又情色的小主角，在逐渐将视线转向不知所措的 ',
      me.get_colored_name(),
      '……',
    ]);

    if (me.sex_code === 1) {
      if (era.get('love:52') >= 50) {
        await urara.say_and_wait([
          '嗯？啊……是 ',
          callname,
          ' 啊，已经进来了啊，是什么时候来的呢？',
        ]);
        await era.printAndWait([
          '既没有因身体被注视而羞涩，也没有因打算浑水摸鱼而愧疚，小',
          urara.get_uma_sex_title(),
          '在雾气中慢慢靠向了 ',
          me.get_colored_name(),
          '。',
        ]);
        await urara.say_and_wait([
          '嘿嘿～刚才 ',
          callname,
          ' 好像在盯着乌拉拉看呢？',
          callname,
          ' 究竟有没有这样做呢？',
        ]);
        await era.printAndWait([
          '大胆地将刚起身的 ',
          callname,
          ' 重新按回水中，',
          urara.get_teen_sex_title(),
          '带着爱意的微笑，一丝不挂地轻轻跨坐在 ',
          me.get_colored_name(),
          ' 的身上。',
        ]);
        await era.printAndWait([
          '到底是什么时候，',
          urara.get_colored_name(),
          ' 变得这么大胆了啊……',
        ]);
      } else {
        await urara.say_and_wait([
          '诶？',
          callname,
          '？为什么 ',
          callname,
          '……啊不是，这个是……',
        ]);
        await era.printAndWait([
          '急忙在他人的视线中护住自己一丝不挂的身体，',
          urara.get_colored_name(),
          ' 的小脸在热气中罕见的被蒸透成了红色。',
        ]);
        await urara.say_and_wait([
          callname,
          '……色鬼……别看了，快点背过去……乌拉拉很难为情啊……',
        ]);
        await era.printAndWait([
          '从水中捞起的浴巾慌张遮挡后，刚才仿佛初遇时那般懵懂的小马，小声吐出了只属于怀春',
          urara.get_teen_sex_title(),
          '的抱怨。',
        ]);
        await era.printAndWait([
          '看来不管怎么说，',
          urara.get_colored_name(),
          ' 多少还是成长了……',
        ]);
      }
    } else if (era.get('love:52') >= 50) {
      await urara.say_and_wait([
        '嗯？',
        callname,
        ' 来了啊！乌拉拉已经帮你试过了哦？水里很舒服呢！',
      ]);
      await era.printAndWait([
        '似乎并没有对自己的浑水摸鱼行为作解释，',
        urara.get_colored_name(),
        ' 在雾气中踩着水向 ',
        me.get_colored_name(),
        ' 慢慢地靠过来。',
      ]);
      await urara.say_and_wait([
        '不过，',
        callname,
        ' 要小心脚下哦？把手给我吧！嘿咻～',
      ]);
      await era.printAndWait([
        '牵起手将 ',
        me.get_colored_name(),
        ' 带入池中，',
        urara.get_colored_name(),
        ' 带着暧昧的笑容，把最喜欢的 ',
        callname,
        ' 在入池的一瞬间扑倒在了水中。',
      ]);
      await era.printAndWait([
        '总好像「被 ',
        urara.get_colored_name(),
        ' 主动邀请了」一样，但果然这是危险动作吧……',
      ]);
    } else {
      await urara.say_and_wait([
        callname,
        ' 来了啊！怎么了吗？为什么一直盯着乌拉拉看呢……诶？',
      ]);
      await era.printAndWait([
        '在 ',
        me.get_colored_name(),
        ' 的注视中，',
        urara.get_colored_name(),
        ' 才发现自己的浴巾并没有老实的围在身上，反而已经沉到水底的浴巾。',
      ]);
      await urara.say_and_wait([
        '什么时候弄掉的呢？不过这里也没有其他人在呢！所以不系也……诶？不行？',
      ]);
      await era.printAndWait([
        '虽然在 ',
        me.get_colored_name(),
        ' 的帮助下刚包好浴巾与头发后，',
        urara.get_colored_name(),
        ' 便又立刻冲进了水池中。',
      ]);
      await era.printAndWait([
        '唉，偶尔还是会像没长大的小孩啊，但果然还是好可爱……',
      ]);
    }

    await era.printAndWait([
      '在之后的一番折腾……准确来说是连哄带骗后，',
      me.get_colored_name(),
      ' 还是让 ',
      urara.get_colored_name(),
      ' 在水中安分了下来。',
    ]);
    await era.printAndWait([
      '毕竟哪怕是公共浴池，把水池弄得一塌糊涂也是绝对禁止的行为。',
    ]);
    await era.printAndWait([
      '在雾气重新将相互倚靠的两人笼罩后，这一池泉水总算是得以施展它本来的用途。',
    ]);
    await era.printAndWait([
      '温热的水气盖过了冬春交替时节的寒冷，而夜空的星星也恰到好处透过雾气闪闪发光。',
    ]);
    await era.printAndWait([
      '在暖流的包围中将大部分身体滑进水中，总算能够与担当一同享受安逸的 ',
      me.get_colored_name(),
      ' 在温暖中彻底放松下来。',
    ]);
    await era.printAndWait([
      '没关系，因为与 ',
      urara.get_colored_name(),
      ' 一同锻炼的三年体能得到了极大改善，所以不会轻易泡晕的自信还是有的。',
    ]);
    await era.printAndWait([
      '虽然这也说明，即使尚未退役，',
      urara.get_colored_name(),
      ' 作为赛',
      urara.get_uma_sex_title(),
      '的最初三年也彻底结束了。',
    ]);
    await era.printAndWait([
      '现在',
      urara.sex,
      '已经有了自己定夺今后比赛与训练的能力，而作为训练员 ',
      me.get_colored_name(),
      ' 也会与更多',
      urara.get_uma_sex_title(),
      '相识。',
    ]);
    await era.printAndWait([
      '倒不是担心二人间变得疏远，只是不论好与坏，会毫无防备的外泄春光的小',
      urara.get_uma_sex_title(),
      '或许仅此一位。',
    ]);
    await era.printAndWait([
      '不管怎样，既然已经二人三足走到了这里，',
      me.get_colored_name(),
      ' 大概只有继续将 ',
      urara.get_colored_name(),
      ' 放在身边这一个选择。',
    ]);

    if (
      era
        .getAddedCharacters()
        .filter(
          (e) =>
            era.get(`cflag:${e}:父方角色`) === 52 ||
            era.get(`cflag:${e}:母方角色`) === 52,
        ).length > 0
    ) {
      await era.printAndWait([
        '况且，既然选择在错误的时间地点摘下禁果，不论今后幸福与否，',
        me.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 也早已没法回头了……',
      ]);
    }

    await era.printAndWait([
      '唉，这是在想什么？明明好不容易与担当泡次温泉，怎么突然在「浴中奇思」里忧郁起来了？',
    ]);
    await era.printAndWait([
      '而且相遇后，好事不是很多吗？比如只要在忧郁的时候闭上眼睛，心里就全是 ',
      urara.get_colored_name(),
      ' 的笑颜。',
    ]);
    await era.printAndWait([
      '不想和 ',
      urara.get_colored_name(),
      ' 分开啊。哪怕并不会发生，也还是想要如此感叹。',
    ]);
    await era.printAndWait([
      '不过，如今再翻过来看过去的某些事，倒也确实没有之前那般焦虑了。',
    ]);
    await era.printAndWait([
      '是因为安心感与满足感吗？或许在温泉中胡思乱想，真的能借助温热的水流把心事都冲淡吧。',
    ]);
    await era.printAndWait(['……不过说到这个，是错觉吗，水是不是越来越热了？']);
    await urara.say_and_wait([
      '嗯？',
      callname,
      ' 脸色好红啊！我和你说哦，泡温泉会晕和体能关系不大呢，所以不要勉强哦？',
    ]);
    await era.printAndWait([
      '怎么回事，身体软绵绵的，突然变得好困，感觉马上就要睡着了……',
    ]);
    await urara.say_and_wait([
      '还有啊，再往下滑的话，鼻子就要被淹到了哦？',
      callname,
      '，有听到吗？',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      ' 的声音，听起来好远啊，好像越来越远了啊……',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '有人都已经在用鼻孔吹泡泡了，能听到也不像会说话的样子啊？！',
    ]);
    await era.printAndWait([
      '说的没错，结果这次又高估了自己的承受能力，总觉得要沉底了……',
    ]);
    await urara.say_and_wait([
      '啊！你来了啊，温泉很舒服哦！但是……现在 ',
      callname,
      ' 有点奇怪？',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '温泉什么的最后再说，总之快点把 训练员',
      me.get_adult_sex_title(),
      ' 拉上来！',
    ]);
    await era.printAndWait([
      '抱歉，今天也麻烦「你」了。在某种被放缓的氛围当中，察觉到自己正被七手八脚地捞起的 ',
      me.get_colored_name(),
      ' 安心的躺平了。',
    ]);

    await era.printAndWait([
      '再次醒来时，头顶的光亮已经从星空变为暖黄的顶灯。',
    ]);
    await era.printAndWait([
      '不过好在映入眼中的并非医院里陌生的白墙，而是温泉旅店的和式装修。',
    ]);
    await era.printAndWait([
      '这是躺了多久？',
      urara.get_colored_name(),
      ' 呢？总之先起来……',
    ]);
    await era.printAndWait([
      '可正当 ',
      me.get_colored_name(),
      ' 打算顶着略微模糊的视线撑起身子时，却被一道来自身下的阻力轻轻地按住了脸颊。',
    ]);
    await urara.say_and_wait([
      callname,
      '，先不要动，休息的时候不用勉强自己哦？',
    ]);
    await era.printAndWait([
      '顺着温柔的声音将视野上抬，这次看到的，是小',
      urara.get_uma_sex_title(),
      '自上而下的笑脸。',
    ]);
    await era.printAndWait([
      '以乖巧的坐姿代替了枕头，',
      urara.get_teen_sex_title(),
      '之前藏在水中的紧致双腿，现在正柔软的垫在 ',
      me.get_colored_name(),
      ' 的脑后。',
    ]);
    await era.printAndWait([
      '穿着宽松的和式衣装，',
      urara.get_colored_name(),
      ' 像安抚孩子的母亲般抚摸着 ',
      me.get_colored_name(),
      ' 的脸颊，一边竖起手中的采耳勺。',
    ]);
    await urara.say_and_wait([
      '嘿嘿～',
      callname,
      ' 现在像小孩子一样呢，因为一直以来都很辛苦吗？',
    ]);
    await urara.say_and_wait([
      '我从大家那里听说，这样可以让人放松下来，',
      callname,
      '，稍微把身子侧一下吧。',
    ]);
    await urara.say_and_wait([
      '没关系的，今天的 ',
      callname,
      ' 可以随便撒娇，觉得不自在的话，抓住乌拉拉的尾巴也可以哦？',
    ]);
    await era.printAndWait([
      '在温柔的鼓动下，身体不由自主的动了起来，',
      me.get_colored_name(),
      ' 仿佛顺从着母亲安慰的孩子般握住了眼前柔顺的毛发。',
    ]);
    await urara.say_and_wait([
      '乌拉拉也是第一次做，所以要是被戳疼了，一定要和我说哦？',
    ]);
    await era.printAndWait([
      '纤细的手指抚过耳廓，在用棉球掸去外耳的污垢的，',
      urara.get_teen_sex_title(),
      '开始轻柔地用耳勺剐蹭着耳道。',
    ]);
    await era.printAndWait([
      '酥麻的触觉逐渐向全身扩散，并在',
      urara.get_teen_sex_title(),
      '清香甘甜的怀抱中逐渐转为让意识漂浮的放松感。',
    ]);
    await era.printAndWait([
      '枕在小孩子的膝盖上尽情撒娇真是大人该有的行为吗？但就算想要辩驳，大脑也已经厌倦了思考。',
    ]);
    await urara.say_and_wait([
      '不管以前发生过什么，不管今后会发生什么，乌拉拉都想要感谢 ',
      callname,
      '。',
    ]);
    await urara.say_and_wait([
      '希望 ',
      callname,
      ' 在以后也能时刻露出安心的笑容，这是我想要给 ',
      callname,
      ' 的礼物。',
    ]);
    await urara.say_and_wait([
      '乌拉拉的身边，永远会给 ',
      callname,
      ' 留出歇脚的位置，所以 ',
      callname,
      ' 以后又感到不安的话，就来找乌拉拉吧？',
    ]);
    await era.printAndWait([
      '用柔和的吐息与纸巾清理着积攒在耳边的脏污，',
      urara.get_teen_sex_title(),
      '轻笑着戳了戳逐渐沉沦在自己怀中的大人。',
    ]);
    await urara.say_and_wait([
      callname,
      '，不要一下就睡着哦？待会儿还有另一只耳朵呢。',
    ]);
    await urara.say_and_wait(['今天晚上，时间还很长哟？']);
    await era.printAndWait([
      '沉浸在 ',
      urara.get_colored_name(),
      ' 构建的温柔乡中，',
      me.get_colored_name(),
      ' 安心的闭上了眼睛。',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait([
      '呼呼～温泉真是不错，尤其是压力都告一段落后，就连我的心情也舒畅起来了。',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '虽然是不请自来，不过既然已经休息了，我想您应该不会介意我占用一会儿温泉吧？',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '啊！还有这个……『在这段时光中，您深刻地感受到了与乌拉拉之间无可取代的情谊～』',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '咳……不过就算听上去再怎么不严肃，无可取代的情谊，也的确降临在了此处……',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '至少此时此刻，一定是安心且幸福的吧。',
    ]);
  };
};
