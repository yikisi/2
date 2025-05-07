const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { add_event } = require('#/event/queue');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[47 + 6] = async (urara, me, in_urara, callname) => {
    await print_event_name('突袭的心意！', urara);
    await in_urara.say_as_unknown_and_wait(
      '情人节与巧克力，说到底只是一种营销手段与商品的关系，只是意外的不讨人厌。',
    );
    await in_urara.say_as_unknown_and_wait(
      '别误会，比起观察沉浸在节日氛围里的笨蛋情侣们，我对巧克力更感兴趣。',
    );
    await in_urara.say_as_unknown_and_wait(
      '嗯？没有哦？并没有特别喜欢，巧克力的味道。',
    );
    era.drawLine();
    await era.printAndWait(
      '清早，起床洗漱穿衣，囫囵的吃下早餐，顺便站在门口时轻描淡写的看眼日历。',
    );
    await era.printAndWait([
      '今天是情人节啊，但就算如此也还有既定的日程。简单整理好衣服，',
      me.get_colored_name(),
      ' 推开住处的房门。',
    ]);
    await era.printAndWait([
      '随后，一名意想不到的小动物便立刻从门外探出两只耳朵，过早的闯入了 ',
      me.get_colored_name(),
      ' 今天的日程当中。',
    ]);
    await era.printAndWait([
      '刚刚站稳、身边摆满大包小包的 ',
      urara.get_colored_name(),
      ' 放下正要敲门的手指，并上前一步面带微笑地抱住了 ',
      me.get_colored_name(),
      '。',
    ]);
    await urara.say_and_wait([callname, '！天亮咯，早安——！']);

    era.printButton('「哦！早……乌拉拉？！」', 1);
    await era.input();

    await urara.say_and_wait('嘿嘿～不好意思打扰了——！');
    await era.printAndWait([
      '被 ',
      urara.get_colored_name(),
      ' 用力的抱着，比人类体温稍高的小',
      urara.get_uma_sex_title(),
      '透过冬衣向自己的 ',
      callname,
      ' 传递着',
      urara.sex,
      '独有的温暖。',
    ]);
    await era.printAndWait([
      '二月的气温依旧谈不上回暖，但因为是奔跑而来的缘故，此刻小',
      urara.get_uma_sex_title(),
      '的身体正散发着温热活泼的清香。',
    ]);
    await era.printAndWait([
      '而今日的第一次亲密接触中，被担当略带稚气的拥抱包裹的 ',
      me.get_colored_name(),
      ' 也从中闻到了一丝不同平常的暧昧。',
    ]);

    era.printButton('「等下，你怎么突然跑来了？」', 1);
    await era.input();

    if (era.get('relation:52:0') > 150) {
      if (era.get('love:52') >= 50) {
        await urara.say_and_wait([
          '是为什么呢？',
          callname,
          ' 要猜猜看吗？虽然不用猜就能知道，因为今天是特殊的日子！',
        ]);
        await era.printAndWait([
          '放开怀抱，面色温润的小',
          urara.get_uma_sex_title(),
          '踮起脚尖，调皮地在 ',
          me.get_colored_name(),
          ' 的嘴唇上留下了一枚小巧而甜蜜的吻。',
        ]);
        await urara.say_and_wait([
          '是 ',
          callname,
          ' 最喜欢的亲亲哦！还有乌拉拉特制的『本命巧克力』……应该是这么说对吧？',
        ]);
        await era.printAndWait([
          '从衣下拿出包装精美的小礼盒，',
          urara.get_colored_name(),
          ' 将还带着身体余温的巧克力送到了 ',
          me.get_colored_name(),
          ' 的手中。',
        ]);
      } else {
        await urara.say_and_wait([
          callname,
          ' 一定知道的对吧？明明连乌拉拉都记得今天要做什么哦？',
        ]);
        await era.printAndWait([
          '放开怀中的 ',
          me.get_colored_name(),
          '，小',
          urara.get_uma_sex_title(),
          '在外套口袋中一阵摸索后掏出了一个包装精致的小礼物盒。',
        ]);
        await urara.say_and_wait([
          '锵锵——！',
          callname,
          ' 知道这里面是什么吗？这里面是能让大家都开心的东西哦！',
        ]);
        await urara.say_and_wait([
          '今天要送给 ',
          callname,
          ' 乌拉拉牌巧克力！现在立刻打开看看吧！',
        ]);
      }
    } else if (era.get('love:52') >= 50) {
      await urara.say_and_wait([
        '诶？',
        callname,
        ' 是忘了今天是什么日子了吗？嗯……那让乌拉拉来告诉 ',
        callname,
        ' 吧！',
      ]);
      await era.printAndWait([
        '有些害羞的从怀中拿出了精致的小礼盒，',
        urara.get_colored_name(),
        ' 将还带着身体余温的巧克力送到了 ',
        me.get_colored_name(),
        ' 的手中。',
      ]);
      await urara.say_and_wait([
        '情人节的『本命巧克力』……？是这样说对吧？总之给 ',
        callname,
        ' 的！还有这个……',
      ]);
      await era.printAndWait([
        '将巧克力塞过来的同时，小',
        urara.get_uma_sex_title(),
        '也悄悄踮起脚，趁着不注意时用樱唇在 ',
        me.get_colored_name(),
        ' 的脸颊上轻啄了一下。',
      ]);
    } else {
      await urara.say_and_wait(
        '因为今天是情人节哦？所以我给大家都做了很多巧克力呢！稍等一下……',
      );
      await era.printAndWait([
        '在身边的袋子中一番找寻后，',
        urara.get_colored_name(),
        ' 将一盒包装精美的巧克力送到了 ',
        me.get_colored_name(),
        ' 的手中。',
      ]);
      await urara.say_and_wait(
        '嗯……嗯！是义理的哦！义理巧克力……至少大家告诉我要这么说！',
      );
      await urara.say_and_wait([
        '不过因为乌拉拉很感谢 ',
        callname,
        '，所以这个也是特制的！',
        callname,
        ' 要现在打开看看吗？',
      ]);
    }
    await era.printAndWait([
      '在 ',
      urara.get_colored_name(),
      ' 催促的目光中打开包装纸，里面出现的则是明显泛橘……不，是呈现浓浓橘色的巧克力。',
    ]);
    await era.printAndWait(
      '这真的是巧克力该有的颜色？而且到底加了什么才会让巧克力变得如此鲜艳啊……',
    );

    era.printButton('「颜色，很鲜艳啊……」', 1);
    await era.input();

    await urara.say_and_wait('怎么样？看起来很好吃吧？');
    await urara.say_and_wait(
      '情人节就是送巧克力给平时照顾自己的人的日子！所以昨晚我很努力地做了这个哦！',
    );
    await era.printAndWait([
      '为保护小',
      urara.get_uma_sex_title(),
      '的心意，',
      me.get_colored_name(),
      ' 把「就像有毒动植物的警戒色一样」的后半句用力地咽了回去。',
    ]);

    era.printButton('「谢谢，不过这个是……橘子味的？」', 1);
    await era.input();

    await urara.say_and_wait(
      '不，是胡萝卜味的哦！做得很成功对吧？乌拉拉还用掉了珍藏的胡萝卜哦！',
    );

    era.printButton('「胡萝卜……？」', 1);
    await era.input();

    await urara.say_and_wait('嗯，胡萝卜！而且是我特别挑选出来的！');
    await urara.say_and_wait([
      '我想 ',
      callname,
      ' 应该也比较喜欢加了胡萝卜的巧克力，所以就这样尝试了！',
    ]);
    await era.printAndWait([
      '怎么说呢，这个意料之外情理之中的解答？看着盒中这块橘得反光的板状物，',
      me.get_colored_name(),
      ' 陷入了沉思。',
    ]);
    await era.printAndWait([
      '虽然明白',
      urara.get_uma_sex_title(),
      '是一种非常喜欢胡萝卜的生物，但这块物质的成因恐怕已经是炼金术的范畴了吧……',
    ]);
    await era.printAndWait([
      '算了，被 ',
      urara.get_colored_name(),
      ' 吓到早就该习惯了，而且能够在情人节收到巧克力本身也是值得高兴的事。',
    ]);

    era.printButton('「那个，巧克力，我可以现在就尝尝看吗？」', 1);
    await era.input();

    await urara.say_and_wait('嘿嘿～不客气哦！一口气都吃掉也没关系！');
    await era.printAndWait([
      '得到 ',
      urara.get_colored_name(),
      ' 的许可后，',
      me.get_colored_name(),
      ' 小心地掰下盒中物的一角，颜色特别的巧克力发出了一声普通的脆响。',
    ]);
    await era.printAndWait(
      '在将巧克力送入口中后，先是一股胡萝卜特有的「蔬菜味儿」，之后便是略微带苦的清甜味。',
    );
    await era.printAndWait([
      '只是与 ',
      urara.get_colored_name(),
      ' 的手工饼干不同，这块巧克力比起好吃更多还是「抹茶味麻婆豆腐」般的非主流感……',
    ]);
    await era.printAndWait(
      '不过话虽如此，就算颜色和味觉都不太好描述，但它依旧做到了可以让人轻易入口。',
    );
    await era.printAndWait([
      '……可话又说回来，能在短时间内用论外素材调出能够入口的味道，难道 ',
      urara.get_colored_name(),
      ' 真是天才……？',
    ]);

    await urara.say_and_wait([callname, '，乌拉拉的特制巧克力味道如何？']);
    era.printButton(
      '「嘶……虽然有点微妙，但这个巧克力的味道意外还不错哦……」（好感+20）',
      1,
    );
    era.printButton(
      '「嗯……嗯！我还是第一次吃到这种味道的巧克力，还挺新鲜的……」（爱慕+10）',
      2,
    );
    const ret = await era.input();

    await urara.say_and_wait([
      '对吧！我接下来要去送给商店街了！',
      callname,
      ' 要不要一起来？大家一定也会很高兴的！',
    ]);

    era.printButton('「没有不去的道理啊，不过乌拉拉准备了多少巧克力？」', 1);
    await era.input();

    await urara.say_and_wait(
      '给大家送的巧克力乌拉拉早就准备好了！都是乌拉拉亲手做的哦！',
    );
    await era.printAndWait([
      '早有准备的拎出了几个藏在身后的大袋子，',
      urara.get_colored_name(),
      ' 笑着向 ',
      me.get_colored_name(),
      ' 炫耀道。',
    ]);
    await urara.say_and_wait(
      '还有！我要给大家的巧克力也都做得很厉害哦！每家店都是不同口味呢！',
    );
    await era.printAndWait([
      '嗯，不同的口味……等下？看着乌拉拉天真的笑容，一股不妙的预感在 ',
      me.get_colored_name(),
      ' 心中不停的翻涌着。',
    ]);
    await urara.say_and_wait(
      '就是这些哦！我给果蔬店的加蔬菜，给鱼货店的加了鱼，给鲜肉铺的加了肉……',
    );
    await era.printAndWait([
      '颤抖地接过 ',
      urara.get_colored_name(),
      ' 手中装着可能会是不可名状之物的袋子，',
      me.get_colored_name(),
      ' 最终还是没敢把里面的盒子打开检查。',
    ]);
    await era.printAndWait([
      '不是吃过了还不想信任 ',
      urara.get_colored_name(),
      '，但那些奇妙素材与巧克力的混合物真的越听越不妙不妙。',
    ]);
    await era.printAndWait([
      '胡萝卜的味道尚且能在意料之内，但那些也要保证味道……',
      urara.get_colored_name(),
      ' 恐怕真的是个炼金术士吧……',
    ]);
    await era.printAndWait([
      '最终，',
      me.get_colored_name(),
      ' 放弃了无意义的思考——总之 ',
      urara.get_colored_name(),
      ' 是天才就对了！',
    ]);

    era.printButton('「嗯、嘛、啊，乌拉拉真、真很厉害哦！」', 1);
    await era.input();

    await urara.say_and_wait('对吧？真期待看到大家的笑容呢——');
    await era.printAndWait([
      '肯定能看到的，大家为了 ',
      urara.get_colored_name(),
      ' 一定会努力露出笑容的，但是之后恐怕就只能为肠胃祈福了……',
    ]);
    await era.printAndWait([
      '带着纠结且决绝的心情，',
      me.get_colored_name(),
      ' 与 ',
      urara.get_colored_name(),
      ' 一起前往商店街，准备度过一个「热闹无比」的情人节。',
    ]);
    await era.printAndWait(
      '至于今天原本的日程……就当是『计划赶不上变化』的常事好了。',
    );
    era.drawLine();
    await in_urara.say_as_unknown_and_wait(
      '嗯……不过各种口味的巧克力啊，巧克力呢，巧克力……',
    );
    await in_urara.say_as_unknown_and_wait(
      '干什么，您那个眼神是什么意思？零食的话，我可没有乌拉拉那么幼稚的味觉哦？',
    );
    await in_urara.say_as_unknown_and_wait('诶？您还没问？啊……切，您这个人……');
    era.println();
    sys_like_chara(52, 0, 20 * (ret === 1), true, 10 * (ret === 2)) &&
      (await era.waitAnyKey());
    era.add('item:情人节巧克力', 1);
    era.set('cflag:52:节日事件标记', 0);
  };

  handlers[47 + 29] = async (
    urara,
    me,
    in_urara,
    callname,
    edu_marks,
    event_object,
  ) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:52:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_start, event_object);
      return false;
    }
    edu_marks.summer1 = 1;
    await print_event_name('夏合宿（经典年）开始', urara);
    await in_urara.say_as_unknown_and_wait(
      '就像学校郊游一样呢，但说到底还是去训练吧？',
    );
    await in_urara.say_as_unknown_and_wait(
      '不过只要能开心就好了吧，只要能开心的话……',
    );
    era.drawLine();
    await era.printAndWait([
      '中央特雷森每年都会为了强化',
      urara.get_uma_sex_title(),
      '们的能力而举办夏季集训，这次 ',
      me.get_colored_name(),
      ' 也为 ',
      urara.get_colored_name(),
      ' 报了名。',
    ]);
    await era.printAndWait([
      '这对 ',
      urara.get_colored_name(),
      ' 来说是个增进实力的绝佳机会，虽然从小',
      urara.get_uma_sex_title(),
      '的心情上讲，出游时的兴奋明显更占上风。',
    ]);
    await era.printAndWait([
      '不过，',
      urara.get_colored_name(),
      ' 维持这样的状态也挺好，精神良好和身体健康比强硬的训练要有效得多。',
    ]);
    await era.printAndWait([
      '况且',
      urara.sex,
      '本来就还是个没完全长大的孩子……',
    ]);
    await urara.say_and_wait([
      callname,
      '！那边的天空看起来好远！是要延伸到什么地方去呢？',
    ]);
    await urara.say_and_wait([
      '啊！稍微看得见海了！',
      callname,
      '，在海边跑起来舒服吗？',
    ]);
    await era.printAndWait([
      '看着车窗外，坐在 ',
      me.get_colored_name(),
      ' 身边的 ',
      urara.get_colored_name(),
      ' 掩饰不住兴奋地不停向 ',
      me.get_colored_name(),
      ' 问道。',
    ]);
    if (era.get('relation:52:0') > 150) {
      await urara.say_and_wait('嘿嘿～大家一起的外宿！乌拉拉期待好久了！');
      await urara.say_and_wait([
        callname,
        ' 也开心吗？乌拉拉想和 ',
        callname,
        ' 每天都在海边玩水哦！',
      ]);
      await era.printAndWait([
        '将柔软的身体紧贴在 ',
        me.get_colored_name(),
        ' 身边，',
        urara.get_colored_name(),
        ' 如一只粉色小鸟般在 ',
        me.get_colored_name(),
        ' 的耳边开心地吟唱着。',
      ]);
    } else {
      await urara.say_and_wait('嗯！乌拉拉还是第一次和大家一起外宿！');
      await urara.say_and_wait([
        callname,
        ' 也和别人一起外宿过吧？',
        callname,
        ' 觉得那样开心吗？',
      ]);
      await era.printAndWait([
        '尽管看上去没有语气中那么开心，但 ',
        urara.get_colored_name(),
        ' 的身体还是诚实地与 ',
        me.get_colored_name(),
        ' 靠在了一起。',
      ]);
    }
    if (era.get('love:52') >= 50) {
      era.println();
      await urara.say_and_wait([
        '还有还有！虽然不知道能不能用上，但乌拉拉都做好了和 ',
        callname,
        ' 搂搂抱抱的准备了哦？',
      ]);
      await urara.say_and_wait([
        '不管是在沙滩上，还是在晚上独处的时候，乌拉拉都没问题呢～',
        callname,
        ' 期待吗？',
      ]);
      await era.printAndWait([
        callname,
        ' 觉得你收敛一下更好哦？面对 ',
        urara.get_colored_name(),
        ' 天真但又柔媚的笑颜，不愿面对的 ',
        me.get_colored_name(),
        ' 默默地把头别向一边。',
      ]);
    }
    era.println();
    await era.printAndWait([
      '虽说这个年纪的小',
      urara.get_uma_sex_title(),
      '有玩心是好事，但 ',
      urara.get_colored_name(),
      ' 好像兴奋过头了，没问题吗？',
    ]);
    await era.printAndWait([
      '虽然就算感到不安，时间和小',
      urara.get_uma_sex_title(),
      '也不会等人，尽全力上吧。',
    ]);
    await era.printAndWait('夏季集训开始！');
  };

  handlers[47 + 43] = async (urara, me, in_urara, callname, edu_marks) => {
    await print_event_name('「改变」&「选择」', urara);
    await in_urara.say_as_unknown_and_wait([
      '听说有名叫乌拉拉的赛',
      urara.get_uma_sex_title(),
      '，不管跑输几次都依旧很努力。',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '在赛场内四处都可以听到这种说法的某一天——',
    );
    era.drawLine();
    await urara.say_and_wait(
      '唔——虽然已经想好了，但要跑赢还是好难！感觉大家都『咻』地就冲到前面了——',
    );
    await era.printAndWait([
      '模拟赛的赛场内，令人安心与信赖的又落在最后，',
      urara.get_colored_name(),
      ' 有点气鼓鼓的扑到了 ',
      me.get_colored_name(),
      ' 的怀里。',
    ]);
    await era.printAndWait(
      '总觉得在变得会表达对比赛失利的不甘心后，这团毛茸茸的粉色变得更像小动物了。',
    );
    if (!edu_marks.summer1) {
      await era.printAndWait([
        urara.get_colored_name(),
        ' 究竟是什么时候突然变得这么有干劲的呢？在夏季合宿的期间是不是发生了什么？',
      ]);
      await era.printAndWait([
        '不过万幸没出什么大问题，看来 ',
        urara.get_colored_name(),
        ' 自己一个人也可以好好成长，真是个好孩子啊……',
      ]);
    }
    era.println();
    await era.printAndWait([
      '细细揉搓着 ',
      urara.get_colored_name(),
      ' 的身体，一脸被治愈的 ',
      me.get_colored_name(),
      ' 与怀中还在闹别扭的可爱生物形成了鲜明对比。',
    ]);
    await era.printAndWait([
      '当然 ',
      me.get_colored_name(),
      ' 现在也明白了',
      urara.sex,
      '平时总垫底的原因：本来就集中力不足，再加上是日常比赛就更用不上力了。',
    ]);
    await era.printAndWait([
      '没必要苛求，',
      urara.get_uma_sex_title(),
      '的身体是有极限的，日常没必要绷得太紧，对 ',
      urara.get_colored_name(),
      ' 来说这点则更重要了。',
    ]);
    await era.printAndWait(
      '最初时偶尔还会觉得这是需要解决的问题，但现在的话已经差不多摸清最适合小担当的成长模式了。',
    );
    await era.printAndWait([
      '现在只要能在正赛之前一点点积累胜利的条件，并在正赛时拿出成绩，对于 ',
      urara.get_colored_name(),
      ' 来说就算成功。',
    ]);

    era.printButton(
      '「不用着急，先冷静一下，乌拉拉觉得要怎样才能跑赢呢？」',
      1,
    );
    await era.input();

    await urara.say_and_wait(
      '只要乌拉拉一个人参加比赛就好啦！如果只有我在跑的话，那第一名也一定就是我呢！',
    );
    await era.printAndWait([
      '啊？什么？一时没分清 ',
      urara.get_colored_name(),
      ' 是否在开玩笑，',
      me.get_colored_name(),
      ' 差点脚底一滑摔在训练场边上。',
    ]);

    await in_urara.say_as_unknown_and_wait('您、啊哈……总之快说点什么……');
    era.printButton('「这个建议，大概能让副会长躺好久吧。」（好感+15）', 1);
    era.printButton('「难、难道乌拉拉你真的是天才？」（爱慕+8）', 2);
    const ret = await era.input();

    await urara.say_and_wait([
      '诶嘿嘿～被 ',
      callname,
      ' 笑话了！不过说得也是哦，那样已经不是比赛了啊。',
    ]);
    await urara.say_and_wait(
      '但是果然还是有点生自己的气，虽然明白不用把自己逼得太紧，但我还是好慢啊……',
    );
    await urara.say_and_wait(
      '就算我再怎么输，不会变的大家都不会责怪我，所以我必须得自己早点做出改变才行。',
    );

    era.printButton('「但是认清自己后，乌拉拉的确变得更强了对吧？」', 1);
    await era.input();

    await urara.say_and_wait([
      '嗯，就像 ',
      callname,
      ' 说的，乌拉拉也变强了，就连比赛时来应援的人也更多了。',
    ]);
    await urara.say_and_wait(
      '商店街的大家说，后援会的人也越来越多了，还有很多新粉丝在鼓励在我放开去跑哦！',
    );
    await era.printAndWait([
      '的确，最近比赛时很多生面孔也加入了对 ',
      urara.get_colored_name(),
      ' 的应援，连日常的活动赛时来看',
      urara.sex,
      '的人也变得非常多。',
    ]);
    await era.printAndWait([
      '而且就算知道 ',
      urara.get_colored_name(),
      ' 的发挥可能并不稳定，应援的各位依旧每次都会为',
      urara.sex,
      '送上必胜的祝福。',
    ]);
    await era.printAndWait([
      '或许大家除了被 ',
      urara.get_colored_name(),
      ' 的热情打动外，还想看',
      urara.sex,
      '能从大多数的失败中，把握住的最关键的胜利吧。',
    ]);
    await urara.say_and_wait(
      '不过在听到我说要拼尽全力去获胜时，商店街的很多叔叔阿姨们都露出了担忧的神色呢。',
    );
    await urara.say_and_wait(
      '很多照顾我的人还是很担心我会受伤，但是现在我已经不会再犹豫了，所以……',
    );
    await era.printAndWait([
      '啊，是他们啊。听着 ',
      urara.get_colored_name(),
      ' 的描述，',
      me.get_colored_name(),
      ' 很快便回想起了在那个宣传工作的下午与自己攀谈的女性。',
    ]);
    await era.printAndWait([
      '不过既然 ',
      urara.get_colored_name(),
      ' 都不会再犹豫了，那解决矛盾也只是时间问题了。',
    ]);

    era.printButton(
      '「所以用类似漫画的台词来说，只要在接下来的比赛中展示乌拉拉的决心就好了。」',
      1,
    );
    await era.input();

    await urara.say_and_wait('嗯！就是这样！我会继续加油的——！');
    await era.printAndWait([
      '话虽如此，现在还是缺少一个契机。考量着「决心的展现」，',
      me.get_colored_name(),
      ' 再次陷入沉思。',
    ]);
    await era.printAndWait([
      '或许未来某天 ',
      urara.get_colored_name(),
      ' 也会有主动想要参与的重要比赛，届时',
      urara.sex,
      '会选择什么样的比赛呢？',
    ]);
    await era.printAndWait([
      '而且说到这个，资深级的赛程也该定了吧？顺着对未来的构思，',
      me.get_colored_name(),
      ' 低头翻找起自己的笔记。',
    ]);
    await era.printAndWait([
      '年末具体要做什么不太好想，但明年的第一个阶段性目标……虽然也不是非它不可，但总之先试试 ',
      race_infos[race_enum.negi_sta].get_colored_name(),
      '？',
    ]);
    era.println();
    const best_mvp = Math.min(
      ...RaceHistory.get(52)
        .get_values()
        .filter((e) => race_infos[e.race].race_class <= class_enum.G3)
        .map((e) => e.rank),
    );
    if (best_mvp === Infinity) {
      await era.printAndWait([
        '经历了一年多的调整，现在的 ',
        urara.get_colored_name(),
        ' 应该已经拥有了能角逐重赏的实力。',
      ]);
      await era.printAndWait([
        '也算是先试试水温和深浅，或许可以将类似的比赛作为 ',
        urara.get_colored_name(),
        ' 参与重赏的起点也说不定。',
      ]);
    } else if (best_mvp === 1) {
      await era.printAndWait([
        urara.get_uma_sex_title(),
        '的身体是不断变化的，资深年时 ',
        urara.get_colored_name(),
        ' 可能也会需要因常态的改变而调整。',
      ]);
      await era.printAndWait([
        '既然现在 ',
        urara.get_colored_name(),
        ' 已经有了参与重赏的实力，那用重赏比赛为新一年试探一下也不错。',
      ]);
    } else {
      await era.printAndWait([
        '虽然以前已经试过参加重赏了，但 ',
        urara.get_colored_name(),
        ' 即使尽力去跑也还是没能赢下来，看来当时还是太早了。',
      ]);
      await era.printAndWait([
        '不过现在的 ',
        urara.get_colored_name(),
        ' 应该已经做足了准备才对，那从现在开始进行再挑战应该也无妨。',
      ]);
    }
    if (edu_marks.fans >= 25000) {
      era.println();
      await era.printAndWait(
        '而且，之前积攒粉丝和声誉的策略在这里也能发挥作用，比如粉丝投票制。',
      );
      await era.printAndWait(
        '在赛事官方允许的策略里，如果粉丝支持度足够高，还可以通过发起投票制来拓宽参加比赛的范围。',
      );
      await era.printAndWait([
        '还有以前也提到过的，在比赛时声援',
        urara.sex,
        '的人足够多，那 ',
        urara.get_colored_name(),
        ' 确实可以跑得比平常更快。',
      ]);
      await era.printAndWait([
        '听起来像在作弊对吧？但这也的确是 ',
        urara.get_colored_name(),
        ' 实力的一部分，至少这应该是「三女神」所允许的部分。',
      ]);
      await era.printAndWait([
        '说起来，',
        urara.get_colored_name(),
        ' 现在具体有多少粉丝了来着？啊，找到了……嗯？！',
      ]);
      await era.printAndWait(
        '重赏……不对，如果是这个支持力，别说是可以参与的重赏了，就连「有马纪念」都……',
      );
      await era.printAndWait([
        '一点点翻阅着手机里的信息，',
        me.get_colored_name(),
        ' 逐渐产生了一个大胆的设想。',
      ]);
    }
    era.println();
    await era.printAndWait(
      '虽然不管要怎样订计划，在那之前也还是要先问问当事人自己的看法才行。',
    );
    await era.printAndWait([
      '放下笔记和手机，',
      me.get_colored_name(),
      ' 看向了从刚才开始就望着训练场上飞驰的同学们出神的 ',
      urara.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      '在感受到 ',
      me.get_colored_name(),
      ' 的目光后，小',
      urara.get_uma_sex_title(),
      '也立刻期待已久的向 ',
      me.get_colored_name(),
      ' 送上了积极的信号。',
    ]);
    await urara.say_and_wait([
      callname,
      '，我已经休息好了！现在的话应该可以开始训练了吧？',
    ]);

    era.printButton(
      '「可以啊。不过在那之前，乌拉拉自己对明年的规划有什么想法呢？」',
      1,
    );
    await era.input();

    urara.say(['明年的规划？嘿嘿～我就在想 ', callname, ' 也该问了呢！']);
    era.printButton('更远的距离（中&长距离适性提升）', 1);
    era.printButton('尝试草地（草地适性提升）', 2);
    if ((await era.input()) === 1) {
      await urara.say_and_wait('如果能跑得更远的话，就会有更多人注意到我吧？');
      edu_marks.dad++;
    } else {
      await urara.say_and_wait('如果能去跑草地的话，我就能挑战更多比赛了吧？');
      edu_marks.gad++;
    }

    await era.printAndWait('嗯？回答的很干脆，是什么时候想好的？等下……？');
    await era.printAndWait([
      '听到 ',
      urara.get_colored_name(),
      ' 不假思索的回答，',
      me.get_colored_name(),
      ' 有点欣慰，但又立刻发觉哪里不对。「',
      callname,
      '也该问了」，是什么意思？',
    ]);
    await era.printAndWait([
      '不过就算是被小 ',
      urara.get_colored_name(),
      ' 读了心，也不是很要紧的事……吧？',
    ]);
    await era.printAndWait([
      '没敢去看一旁的小担当的笑容是否有深长的意味，',
      me.get_colored_name(),
      ' 逃也似的让自己进入了训练员模式。',
    ]);

    era.printButton(
      '「好，那等下再一起去商店街，现在总之先跑一圈试试看吧！」',
      1,
    );
    await era.input();

    await urara.say_and_wait('哦！乌拉拉GO——！');
    await era.printAndWait([
      '在 ',
      me.get_colored_name(),
      ' 的指引下，早已做好准备的小',
      urara.get_uma_sex_title(),
      '，立刻以成长后的身影冲进了训练场上奔跑的人群当中。',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait([
      '——虽然未来无法轻易预见，但如今',
      urara.sex,
      '的成长，也绝对不会是错的',
    ]);
    await in_urara.say_as_unknown_and_wait('……');
    await in_urara.say_as_unknown_and_wait([
      '没想到就连乌拉拉也要适时的做出选择了，真是的，您不是',
      urara.sex,
      '的训练员吗？',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '并不是在说要',
      urara.sex,
      '永远被您保护着哦？只是我觉得那样也不错罢了。',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '总有一天，',
      urara.sex,
      '也会有自己想要主动追求的目标啊……',
    ]);
    await in_urara.say_as_unknown_and_wait('……');

    if (edu_marks.fans >= 25000) {
      era.println();
      await in_urara.say_as_unknown_and_wait(
        '抱歉，在离开前，请您……听我一言。',
      );
      await in_urara.say_as_unknown_and_wait([
        '虽然并不是说乌拉拉不可以挑战重赏，但您没必要为了一个契机给',
        urara.sex,
        '留下无法达成的期望。',
      ]);
      await in_urara.say_as_unknown_and_wait([
        '一直以来让乌拉拉赢了这么多次我很感谢您，也欣慰于',
        urara.sex,
        '能够取得胜利。',
      ]);
      await in_urara.say_as_unknown_and_wait([
        '甚至您想利用',
        urara.sex,
        '来牟利，我都可以睁一只眼闭一只眼，但是……',
      ]);
      await in_urara.say_as_unknown_and_wait([
        '但是想要尝试着站上顶点，就要有承担重量的觉悟，而',
        urara.sex,
        '……并没有您想象中那么坚强。',
      ]);
      await in_urara.say_as_unknown_and_wait([
        '就算曾经一直为之努力的您早已拥有余力，也没法帮',
        urara.sex,
        '分担一片羽毛。',
      ]);
      await in_urara.say_as_unknown_and_wait([
        '请不要给',
        urara.sex,
        '过多的希望，',
        urara.sex,
        '想要的，只是和大家分享那份小小的幸福不是吗？',
      ]);
      await in_urara.say_as_unknown_and_wait(
        '总之，请您再仔细考虑一下，拜托了……',
      );
    }
    era.println();
    let wait_flag = false;
    wait_flag =
      get_attr_and_print_in_event(
        52,
        new Array(5).fill(3),
        0,
        undefined,
        true,
      ) || wait_flag;
    wait_flag =
      sys_like_chara(52, 0, 15 * (ret === 1), true, 8 * (ret === 2)) ||
      wait_flag;
    wait_flag && (await era.waitAnyKey());
  };
};
