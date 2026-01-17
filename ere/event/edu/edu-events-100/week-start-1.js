const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean}):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers[5] = async (acute, me, callname, flags) => {
    const tokino = get_chara_talk(301);
    era.set('cflag:100:节日事件标记', 0);
    await print_event_name('超究极武神极巨化以下略 · 巧克力慕斯蛋糕', acute);
    await era.printAndWait([
      '冬意渐渐消去、万物逐渐复苏；伴随着在天台遇见的像奶奶一样的',
      acute.get_teen_sex_title(),
      '后，转眼便来到了二月的中旬。',
    ]);
    await era.printAndWait([
      '如今已到了情人节的日子，特雷森学院旁邻的商店街中，许多店铺都打出了「情人节特卖」的字样，来专卖他们的情人节产品。',
    ]);
    await era.printAndWait([
      '来此购物的大头自然是特雷森的',
      acute.get_uma_sex_title(),
      '们——虽然',
      acute.get_uma_sex_title(),
      '们大多专心于比赛，对恋爱不甚感兴趣。但买来些小食作为情人节友情礼品赠予友人，自然也是极好的。',
    ]);
    await era.printAndWait([
      '当然这其中还有一些在特雷森学院上班的教职员工……不过那就是另一端故事了。',
    ]);
    await me.say_and_wait(['……什么？你问我为什么要来商店街？']);
    await era.printAndWait([
      '——那自然是 ',
      sys_get_colored_callname(0, 302),
      ' 与 ',
      sys_get_colored_callname(0, 301),
      ' 的命令了。',
    ]);
    await era.printAndWait([
      '似乎是看 ',
      me.get_colored_name(),
      ' 终于从前段时间心情不好的状态走出来的缘故，',
      sys_get_colored_callname(0, 301),
      ' 提议；组织一场专为教职员工开的情人节派对，以此来好好的放松一下心情。',
    ]);
    await era.printAndWait([
      '而从商店街取定制好了的「巧克力慕斯蛋糕」的任务，就交到了 ',
      me.get_colored_name(),
      ' 的手上。',
    ]);
    await me.say_and_wait([
      '……总感觉是被当做苦力了啊。真是的，难不成 ',
      sys_get_colored_callname(0, 301),
      ' 很讨厌我吗？',
    ]);
    await era.printAndWait([
      '本来取「巧克力慕斯蛋糕」的工作是 ',
      tokino.get_colored_name(),
      ' 的工作来着。可',
      tokino.sex,
      '说什么也要让 ',
      me.get_colored_name(),
      ' 来走这一遭……真是奇了个怪。',
    ]);
    await era.printAndWait([
      '不过现在说这些也晚了，来都来了，那也只能把事情办了。',
    ]);
    await era.printAndWait([
      '抱着多少有些自暴自弃的想法，',
      me.get_colored_name(),
      ' 叹了口气，走进了商店街尽头的蛋糕店……',
    ]);

    era.drawLine();
    await era.printAndWait([
      '……这个跟校舍里那个三女神雕像一样高的蛋糕盒是什么玩意？',
    ]);
    await say_by_passer_by_and_wait('店员', [
      '……让你久等了，',
      me.actual_name,
      '；这是骏川',
      tokino.get_adult_sex_title(),
      '为您预订的『超究极武神极巨化威力加强豪华特典版 · 巧克力慕斯蛋糕』',
    ]);
    await era.printAndWait(['……怎么着，你们蛋糕店的店员是都会说贯口是吗？']);
    await me.say_and_wait([
      '……店员小姐，你确定这个都快把你们整个店面给塞满的蛋糕盒，是我要的巧克力慕斯蛋糕？',
    ]);
    await say_by_passer_by_and_wait('店员', [
      '？你是『',
      me.actual_name,
      '』对吧？',
    ]);
    await era.printAndWait([
      '对，这确实是 ',
      me.get_colored_name(),
      ' 的名字……虽然在这一刻 ',
      me.get_colored_name(),
      ' 真的很不想承认。',
    ]);
    await say_by_passer_by_and_wait('店员', [
      '那就没错了，骏川',
      tokino.get_adult_sex_title(),
      '为您预订的『超究极武神极巨化威力加强豪华特典版 · 巧克力慕斯蛋糕。』',
    ]);
    await era.printAndWait(['好，这下逃不掉了。']);
    await me.say_and_wait([
      '……行吧，那我退一万步、退一万步。我就当我面前的这个巨无霸是我要的巧克力慕斯蛋糕。但我请问，我该怎么把他带回特雷森呢？',
    ]);
    await say_by_passer_by_and_wait('店员', ['？你是特雷森学院的人吧？']);
    await era.printAndWait([
      '店员再一次用疑惑的眼神看着 ',
      me.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      '对，',
      me.get_colored_name(),
      ' 是……这里可没有选项让 ',
      me.get_colored_name(),
      ' 说不是。',
    ]);
    await say_by_passer_by_and_wait('店员', [
      '那就简单了——直接扛起这个蛋糕盒走回去不就好了吗？',
    ]);
    await me.say_and_wait([
      '不不不不不！做不到的好嘛？！你当我是什么？海格力斯吗？',
    ]);
    await say_by_passer_by_and_wait('店员', [
      '可',
      acute.get_uma_sex_title(),
      '就能做得到吧？',
    ]);
    await me.say_and_wait([
      acute.get_uma_sex_title(),
      '也做不到的好嘛！？不要说的那么轻松啊！',
    ]);
    await say_by_passer_by_and_wait('店员', [
      '可骏川',
      tokino.get_adult_sex_title(),
      '做的到哦？',
    ]);
    await me.say_and_wait(['骏川……']);
    await era.printAndWait(['…………啊，原来如此。']);
    await era.printAndWait([
      '原来是 ',
      sys_get_colored_callname(0, 301),
      ' 啊，这下解释的通了。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 顿时感觉一切水到渠成，理所应当；抬起头，',
      me.get_colored_name(),
      ' 顿时感觉事件再无诸般苦闷疑惑。',
    ]);
    await say_by_passer_by_and_wait('店员', [
      '总而言之，本店商品一经售出，概不退换；这就是骏川',
      tokino.get_adult_sex_title(),
      '为您定制的蛋糕——',
    ]);
    await era.printAndWait([
      '说着，店员向 ',
      me.get_colored_name(),
      ' 恭敬的行了一礼。',
    ]);
    await say_by_passer_by_and_wait('店员', ['烦请签收。']);

    era.drawLine();
    await me.say_and_wait(['力点、支点、作用点……']);
    await me.say_and_wait(['力点、支点、作用点……']);
    await era.printAndWait([
      '背着数倍于自己大的蛋糕盒行走在街道上，如果不是因为这是现实世界，',
      me.get_colored_name(),
      ' 一定会被人当做是O暗之魂里的新角色。',
    ]);
    await era.printAndWait([
      '为了防止蛋糕盒因为重力的倾斜，',
      me.get_colored_name(),
      ' 不得不吟唱着保持平衡的咒语。',
    ]);
    await me.say_and_wait(['力点、支点、作用点……']);
    await me.say_and_wait(['力点、支点、作用点……']);
    await acute.say_and_wait(['……呐，', callname, '，你在念叨着什么咒语啊？']);
    await era.printAndWait(['！？', acute.get_colored_name(), '！？']);
    await era.printAndWait([
      me.get_colored_name(),
      ' 歪过头，却发现 ',
      acute.get_colored_name(),
      ' 正躬着身子，站在 ',
      me.get_colored_name(),
      ' 的身旁。',
    ]);
    await me.say_and_wait([
      sys_get_colored_callname(0, 100),
      '？你什么时候来的？',
    ]);
    await acute.say_and_wait([
      '……在 ',
      me.actual_name,
      '，进蛋糕店的时候就跟着了哦……呐，',
      me.actual_name,
      '；你在念叨着什么咒语啊？',
    ]);
    await era.printAndWait([
      '也就是从一开始就跟着了吗……那就没法糊弄过去了啊。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 想试着笑出声缓解一下尴尬的氛围，可刚张开口，可额头的汗滴滴答在 ',
      me.get_colored_name(),
      ' 的舌尖上，咸的 ',
      me.get_colored_name(),
      ' 实在笑不出来。',
    ]);
    await me.say_and_wait([
      '这个嘛……是吟唱了就能够保持平常心的咒语。也就是所谓的『静心咒』——',
    ]);
    await acute.say_and_wait(['『静心咒』吗……']);
    await era.printAndWait([
      acute.get_colored_name(),
      ' 若有所思的念叨着「静心咒」这三个字。',
    ]);
    await era.printAndWait([
      '……啊咧？不吐槽吗？',
      me.get_colored_name(),
      ' 还以为会吐槽来着？',
    ]);
    await acute.say_and_wait([
      '原来是『静心咒』啊，太好了呢。我还以为 ',
      callname,
      ' 中邪了呢……',
    ]);
    await me.say_and_wait(['中邪？']);
    await acute.say_and_wait([
      '是啊，毕竟 ',
      callname,
      ' 从蛋糕店里背了一个很明显大小就不正常的东西吧？',
    ]);
    await era.printAndWait(['哦……说的是这个啊。']);
    await era.printAndWait([
      '说起来也是，在旁观的人看来，背着这么大一个蛋糕盒的家伙，很明显就不正常吧。',
    ]);
    await acute.say_and_wait(['要我帮你一把吗，', callname, '？']);
    await era.printAndWait([
      '即便 ',
      acute.get_colored_name(),
      ' 的声音依旧如此得温柔，但背着巨物的 ',
      me.get_colored_name(),
      '，此时实在没有从 ',
      acute.get_colored_name(),
      ' 平和的面容上寻求治愈的余裕。',
    ]);
    await me.say_and_wait(['不用了……干重力活是我们年轻人的事。']);
    await era.printAndWait([
      '理所当然的拒绝了 ',
      acute.get_colored_name(),
      ' 的援助。',
      me.get_colored_name(),
      ' 终归仍存有一丝作为训练员的矜持，无论怎么说；至少搬重物这种粗活，',
      me.get_colored_name(),
      ' 怎么也不想要推脱给 ',
      acute.get_colored_name(),
      ' 来做。',
    ]);
    await era.printAndWait([
      '毕竟，',
      acute.get_colored_name(),
      ' 看上去本来就如此「瘦弱」了；怎么能让',
      acute.sex,
      '接受来自重力的束缚呢？',
    ]);
    await acute.say_and_wait([
      '呐，',
      callname,
      '，按年龄来说，我可比你要小哦？',
    ]);
    await era.printAndWait([
      '并不是生气，而只是温和地纠正；',
      acute.get_colored_name(),
      ' 只是在不紧不慢地说着。',
    ]);
    await era.printAndWait([
      '随后，',
      acute.sex,
      '直起身子；放慢了稍稍步子；退到了 ',
      me.get_colored_name(),
      ' 看不到的身侧。',
    ]);
    await era.printAndWait([
      acute.sex,
      '抬起头，看向那巨盒上的巧克力慕斯字样的图标，用着只有自己能听道的声音喃喃自语道：',
    ]);
    await acute.say_and_wait(['……', callname, '，原来喜欢吃巧克力蛋糕啊——']);
    await era.printAndWait([
      '说罢，',
      acute.get_colored_name(),
      ' 吐出了一口气；将自己的右手伸向 ',
      me.get_colored_name(),
      ' 看不见的蛋糕盒的后侧。',
    ]);
    await era.printAndWait(['——食指伸出的指尖，就这样挺在了蛋糕盒的后方。']);

    era.drawLine();
    await era.printAndWait([
      '真令人惊奇，',
      me.get_colored_name(),
      ' 竟然没有在半路上晕倒。',
    ]);
    await era.printAndWait([
      '本来 ',
      me.get_colored_name(),
      ' 以为在运输巨大巧克力慕斯的途中，',
      me.get_colored_name(),
      ' 肯定会因为体力不支而晕倒在路上。可没想到的是，在运送的后半程 ',
      me.get_colored_name(),
      ' 忽然感到身后格外的轻松；最后 ',
      me.get_colored_name(),
      ' 近乎是一路小跑得回到了特雷森。',
    ]);
    await era.printAndWait([
      '在跟 ',
      acute.get_colored_name(),
      ' 道别之后，虽然不知为何感觉身后又重了不少。但毕竟只有两三步路了，',
      me.get_colored_name(),
      ' 很快便将巨大巧克力慕斯蛋糕交给了 ',
      tokino.get_colored_name(),
      '。',
    ]);
    await tokino.say_and_wait([
      '辛苦你了，',
      me.actual_name,
      '。现在派对就差你一个了，快进来吧——',
    ]);
    await me.say_and_wait([
      '抱歉 ',
      sys_get_colored_callname(0, 301),
      '，我得先休息了。',
    ]);
    await tokino.say_and_wait(['唉？']);
    await era.printAndWait([
      '再怎么说，背着这么大的蛋糕盒走了那么远的路早已耗光了 ',
      me.get_colored_name(),
      ' 的体力；现在的 ',
      me.get_colored_name(),
      ' 比起参加派对，更想要的是好好躺在床上睡上一觉。',
    ]);
    await era.printAndWait([
      '再跟 ',
      tokino.get_colored_name(),
      ' 说明原委后，',
      me.get_colored_name(),
      ' 便头也不回的回到了休息室；今天又是辛苦的一天啊。',
    ]);
    await era.printAndWait(['…………………']);
    await era.printAndWait(['………………']);
    await era.printAndWait(['…………']);
    await era.printAndWait(['说起来，这场派对最开始是为什么开的来着？']);
    await era.printAndWait(['算了，管它的呢。']);

    era.drawLine();
    await era.printAndWait([
      '第二天清晨，休息室的门口摆放着一块写有「祝你入职快乐」字样的巧克力慕斯蛋糕。',
    ]);
    await era.printAndWait(['到底是谁放的呢？真令人好奇啊。']);

    era.println();
    flags.wait_flag = get_attr_and_print_in_event(
      100,
      [0, 0, 10],
      0,
      undefined,
      true,
    );
    flags.wait_flag = sys_change_motivation(100, 1) || flags.wait_flag;
    flags.wait_flag =
      get_attr_and_print_in_event(0, [0, 0, 0, 1], 0, undefined, true) ||
      flags.wait_flag;
  };

  handlers[47] = async (acute, me, callname, flags) => {
    const tokino = get_chara_talk(301);
    era.set('cflag:100:节日事件标记', 0);
    await print_event_name('赌局与爱与飞行', acute);
    await era.printAndWait(['春去秋来，恍然间时间已到了圣诞的节前。']);
    await era.printAndWait([
      '冬日，为了防止学生们受凉，校舍内可谓开足了暖气。只是这暖气实在打的有些太足，以至于 ',
      me.get_colored_name(),
      ' 不得不把围巾与外套脱了下来，挂在教职员工休息室大门旁的衣架上。',
    ]);
    await era.printAndWait([
      '虽说已到了圣诞节，但这个时间的赛马比赛却也不少。作为特雷森学院的训练员，自然也只能在工作的岗位上继续的奋勇，而不能像其他人一样尽情享受假日的时光了。',
    ]);
    await era.printAndWait([
      '……不过，话是这么多。到了晚上，在工作的闲余休息一下的时间还是凑得出来的。',
    ]);
    await era.printAndWait([
      '在不知是谁的提议下；休息室内的教职员们便围了起来，掏出了藏在抽屉夹层里的扑克牌。随即，教职员工办公室内充斥着欢乐的空气。',
    ]);
    await era.printAndWait([
      '既然是大人了，那自然是要赌上些什么的。可不管赌上些什么，',
      me.get_colored_name(),
      ' 都有绝对的自信，自己不可能输给任何人。',
    ]);
    await me.say_and_wait(['什么？你问为什么不可能输给其他任何人？']);
    await me.say_and_wait(['那还用问吗？推推看鼻梁上的眼镜，明明心知肚明。']);
    await era.printAndWait([
      '这可是 ',
      me.get_colored_name(),
      ' 专门为了今天的赌局，以签署「自愿接受一切生物实验」契约书（以后简称卖身契）为代价，从神秘的商店娘那借来的插入有「透视镜框」的万能镜框。有了它，',
      me.get_colored_name(),
      ' 就可以看穿对手的一切底牌，让自己在赌局中彻底的立于不败之地。',
    ]);
    await era.printAndWait([
      '当然，这款眼镜还有一些小小的附属功能；比如，戴上这款眼镜，就可以透过衣服直接看到人的裸体。因此现在 ',
      me.get_colored_name(),
      ' 就能清楚的看到 ',
      sys_get_colored_callname(0, 304),
      ' 小巧的胸部——',
    ]);
    await era.printAndWait([
      '不过这些都无关紧要！女人的身体怎么可能有打牌重要！？',
    ]);
    await era.printAndWait([
      '当年黄金船可以在马场一夜之间赌赢一百二十一亿，而你 ',
      me.actual_name,
      '，在教职员赌赢「20000」马币，不是问题！',
    ]);
    await era.printAndWait(['今日，特雷森的赌圣传说即将名震江湖！']);
    await era.printAndWait(['各位，敬请期待！']);

    era.drawLine({ content: '三女神雕像前' });
    await acute.say_and_wait([
      '所以，',
      me.actual_name,
      '；你是因为什么，被吊在三女神像上示众的啊？',
    ]);
    await era.printAndWait([
      '特雷森的中庭，',
      acute.get_colored_name(),
      ' 坐在水池的旁边，抬起头来望向了单衣薄衫被吊在三女神像上的 ',
      me.get_colored_name(),
      '。',
    ]);
    await me.say_and_wait([
      '……戴透视眼睛的事，被 ',
      sys_get_colored_callname(0, 301),
      ' 发现了。',
    ]);
    await acute.say_and_wait(['唉～这样啊～']);
    await era.printAndWait([
      acute.get_colored_name(),
      ' 温和地说着，悠闲的语气一如既往的温柔。',
    ]);
    await era.printAndWait(['……其实，本来一切都很顺利。']);
    await era.printAndWait([
      '利用透视眼镜，',
      me.get_colored_name(),
      ' 也成功的在赌桌上立于了不败之地；几场赌局下来，',
      me.get_colored_name(),
      ' 也可以说是赚得盆满钵满，离「20000」马币的目标只差一步之遥。',
    ]);
    await era.printAndWait([
      '——直到 ',
      tokino.get_colored_name(),
      ' 来了为止。',
    ]);

    era.drawLine({ content: '特雷森教职员办公室' });
    await tokino.used_to_say_and_wait([
      '哦……1980年西德进口的最新科技，能够透视的X光眼镜啊……',
    ]);
    await me.used_to_say_and_wait(['唔！？']);
    await era.printAndWait([
      me.get_colored_name(),
      ' 紧张的回过头，却发现不知何时，',
      tokino.get_colored_name(),
      ' 已经来到了 ',
      me.get_colored_name(),
      ' 的身后。',
    ]);
    await tokino.used_to_say_and_wait([
      '放心，我没打算揭露你；',
      me.actual_name,
      '……',
    ]);
    await era.printAndWait([
      tokino.get_colored_name(),
      ' 冷冷地说着，轻轻拍了一下 ',
      me.get_colored_name(),
      ' 的肩膀；可霎时间，',
      me.get_colored_name(),
      ' 却感觉到一张无形的大手将 ',
      me.get_colored_name(),
      ' 按在了椅子上。',
    ]);
    await tokino.used_to_say_and_wait([
      '我之前就跟大家说过，在特雷森里打扑克牌可以，但是涉赌的话是不行的。可惜大家一直就不听呢……不过这下好啦，有了这次赌博作为教训，以后应该没人会在学校里赌博了吧……',
    ]);
    await tokino.used_to_say_and_wait([
      '不过呢，让你赢了这么多；传出去也不好……正好最近 ',
      sys_get_colored_callname(301, 302),
      ' 那边又有资金缺口了，所以——',
      me.actual_name,
      '，要来跟我赌一场吗？',
    ]);

    era.drawLine({ content: '三女神雕像前' });
    await acute.say_and_wait([
      '嗯……我觉得 ',
      sys_get_colored_callname(100, 301),
      ' 的意思，是想让 ',
      callname,
      ' 把赃款用赌博的方式交给对方呢……',
    ]);
    await era.printAndWait([
      '……是啊，',
      me.get_colored_name(),
      ' 也是这么认为的。',
    ]);
    await era.printAndWait([
      '放弃自己的赃款来保持自己的名誉，还是让 ',
      tokino.get_colored_name(),
      ' 曝光自己作弊的事，让赃款和名誉一起丢失……',
      me.get_colored_name(),
      ' 想自己还没有疯魔到选后者的地步。',
    ]);
    await acute.say_and_wait([
      '那，',
      me.actual_name,
      ' 是为什么会被挂在雕像上啊？',
    ]);
    await era.printAndWait(['这个嘛……']);

    era.drawLine({ content: '特雷森教职员办公室' });
    await era.printAndWait([
      '在 ',
      me.get_colored_name(),
      ' 只剩下「3000」马币的赃款时，',
      tokino.get_colored_name(),
      ' 主动停了手。',
    ]);
    await tokino.used_to_say_and_wait([
      '呼……就到为止吧，真是一场酣畅淋漓的战斗呢。辛苦了。',
    ]);
    await me.used_to_say_and_wait(['唉？不继续了吗？']);
    await tokino.used_to_say_and_wait([
      '不了，毕竟我也不是什么恶魔嘛。可不会赶尽杀绝呢——再者说，你要这笔钱也用吧？',
    ]);
    await era.printAndWait([
      tokino.get_colored_name(),
      ' 摆了摆头，绿色的帽子左右晃动；',
      acute.sex,
      '将食指摆在嘴边，露出了一个狡猾的微笑。',
    ]);
    await era.printAndWait([
      '……话说回来，',
      acute.sex,
      '是怎么知道 ',
      me.get_colored_name(),
      ' 现在急需用钱来着？',
    ]);
    await tokino.used_to_say_and_wait(['嘛，可不要小瞧我的情报网啊。']);
    await era.printAndWait([acute.sex, '笑着说道，似乎不想做过多的解释。']);
    await tokino.used_to_say_and_wait([
      '不过，话又说回来了。你是从哪搞来的这西德的高科技产品啊？我记得这种X光眼镜早就已经停产了来着……',
    ]);
    await me.used_to_say_and_wait([
      '不……首先这就不是X光眼镜。这是插入了透视镜框的万能镜框……',
    ]);
    await tokino.used_to_say_and_wait(['……透视镜框？']);
    await me.used_to_say_and_wait([
      '对，简单来说只要插入了这个镜框后，用这个眼镜观测其实事物时都能达到透视的效果。就连衣服也不例……',
    ]);
    await era.printAndWait(['………………']);
    await era.printAndWait([
      '等会儿，',
      me.get_colored_name(),
      ' 刚刚顺嘴说了什么？',
    ]);
    await tokino.used_to_say_and_wait([
      '……衣服也不例外，那就是说；你现在看谁都是裸体……吗？',
    ]);
    await me.used_to_say_and_wait(['…………']);
    await era.printAndWait([
      '一股漆黑的气息正在向 ',
      me.get_colored_name(),
      ' 袭来。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 敏锐的察觉到 ',
      me.get_colored_name(),
      ' 的头上有一个「危」字正在若隐若现。在不可见的大手彻底将 ',
      me.get_colored_name(),
      ' 压倒之前，得做点什么、必须得做什么才行。',
    ]);
    await era.printAndWait([
      '果然还是道歉吗？一边下跪一边道歉吗？现在？就在这里吗？',
    ]);
    await era.printAndWait([
      '不，一定有什么别的办法、一定有什么更好的说法能够化解这一次的危机……',
    ]);
    await era.printAndWait([
      '——对了，',
      me.get_colored_name(),
      ' 想到了；怎么能把这么重要的事情给忘记了呢？',
      tokino.get_colored_name(),
      ' 听了 ',
      me.get_colored_name(),
      ' 的这段话后，一定会原谅 ',
      me.get_colored_name(),
      ' 的。',
    ]);
    await me.used_to_say_and_wait([
      '……放心吧，',
      sys_get_colored_callname(0, 301),
      '；我并没有注意你的裸体；',
    ]);
    await me.used_to_say_and_wait([
      '毕竟，我可是一个牌佬。作为牌佬，注意力肯定只会集中在牌——',
    ]);
    await me.used_to_say_and_wait(['上上上上上上上上上上上上上———']);
    await era.printAndWait([
      '……待反应过来之时，身体已沦为了 ',
      tokino.get_colored_name(),
      ' 的双节棍。',
    ]);

    era.drawLine({ content: '三女神雕像前' });
    await acute.say_and_wait([
      '呜啊……戴着偷窥裸体的眼镜，却说自己对裸体不感兴趣什么的；不仅会被抓去坐牢，而且性质还是极其恶劣的那种哦，',
      callname,
      '。',
    ]);
    await me.say_and_wait(['嘛……虽然确实是这么回事啦——']);
    await era.printAndWait([
      '诚然，不管怎么想都是 ',
      me.get_colored_name(),
      ' 有错在先；既然如此，被吊在三女神像上反省也没有什么好抱怨的吧。，',
    ]);
    await era.printAndWait(['不过，话又说了回来……']);
    await me.say_and_wait([
      acute.get_colored_name(),
      '，都这么晚了；你不用回宿舍吗？你看，门禁时间什么的……',
    ]);
    await acute.say_and_wait(['嗯……']);
    await era.printAndWait([
      acute.get_colored_name(),
      ' 仰着头，遥望着天空。在这无云的夜晚，都市繁荣的灯光下、几乎看不见星星的踪迹。',
    ]);
    await acute.say_and_wait([
      '让 ',
      callname,
      ' 一个人待着，我有点不太放心呐……',
    ]);
    await me.say_and_wait(['……是吗。']);
    await me.say_and_wait('我没事的，你赶紧回去休息吧', true);
    await era.printAndWait([
      '……虽然很想用这样的话来安慰',
      acute.sex,
      '；可不知怎的，当 ',
      me.get_colored_name(),
      ' 想要开口时，一种空虚与心痛忽得填满了 ',
      me.get_colored_name(),
      ' 的喉咙。',
    ]);
    await era.printAndWait([
      '挂在三女神雕像上，只能在高处遥望着 ',
      acute.get_colored_name(),
      ' 落寞的身影……不知为何，这使 ',
      me.get_colored_name(),
      ' 感到莫名的窒息与心痛。',
    ]);
    await me.say_and_wait(['……呐，', sys_get_colored_callname(0, 100), '。']);
    await acute.say_and_wait(['嗯？']);
    await me.say_and_wait(['春节假期的时候啊……要一起去冲绳旅游吗？']);
    await acute.say_and_wait(['……冲绳旅游？']);
    await era.printAndWait([
      acute.sex,
      '回过头了，望向了身处雕像上的 ',
      me.get_colored_name(),
      '。',
    ]);
    await me.say_and_wait([
      '是啊，用还剩下的『3000』马币、坐飞机来回两天一夜的冲绳之旅……嗯——应该是够用了吧？',
    ]);
    await acute.say_and_wait(['……为什么要请我去呢，', callname, '？']);
    await me.say_and_wait([
      '这个吗……该说是一时鬼迷心窍呢，还是说早有目的呢……可能从一开始就是为了 ',
      acute.get_colored_name(),
      ' 才会去参加这场赌局的吧。',
    ]);
    await me.say_and_wait([
      '想要赚到『20000』马币，拿到 ',
      acute.get_colored_name(),
      ' 的面前；然后听 ',
      acute.get_colored_name(),
      ' 一面惊喜地发出『哦～』的声音，一边鼓着掌……',
    ]);
    await me.say_and_wait([
      '想要让 ',
      acute.get_colored_name(),
      ' 开心，也想要被 ',
      acute.get_colored_name(),
      ' 夸奖……哈哈，很奇怪吧？',
    ]);
    await acute.say_and_wait(['……']);
    await acute.say_and_wait(['……是，吗？']);
    await era.printAndWait([
      acute.get_colored_name(),
      ' 垂下首，即便仍然是温和的笑容，脸色却不由得变得有些阴沉。',
    ]);
    await era.printAndWait([
      '月光照耀在',
      acute.sex,
      '的身上，恍惚间、',
      acute.get_colored_name(),
      ' 似乎失了往日的平和，却多了几分',
      acute.get_teen_sex_title(),
      '般的脆弱。',
    ]);
    await me.say_and_wait(['……抱歉，让你伤心了吗？']);
    await era.printAndWait([
      me.get_colored_name(),
      ' 下意识得道歉，可 ',
      acute.get_colored_name(),
      ' 只是微微的摇头。',
    ]);
    await acute.say_and_wait(['不哦，相反；我其实很开心啦。']);
    await acute.say_and_wait([
      '不过呢，冲绳旅行……还是算了呢。我啊，对太热的地方没什么办法呢～',
    ]);
    await era.printAndWait([
      acute.get_colored_name(),
      ' 站起身来，越过水池、跨上高台，来到了雕像、也即是 ',
      me.get_colored_name(),
      ' 的面前。',
    ]);
    await me.say_and_wait(['……不喜欢太热的地方？']);
    await acute.say_and_wait([
      '是呢，其实不太喜欢飞机呢。在天上飞的铁鸟呀，实在是让人很害怕啦……所以呢——',
    ]);
    await acute.say_and_wait([callname, '，要先照顾好自己才行哦。']);
    await era.printAndWait([
      '解开了自己的棕黑色的围巾，',
      acute.get_colored_name(),
      ' 将其挂在了 ',
      me.get_colored_name(),
      ' 的脖子上。',
    ]);
    await era.printAndWait(['对折、翻转、回旋、见缝插针……很快围巾就围好了。']);
    await acute.say_and_wait(['好了，那么……']);
    await era.printAndWait([
      acute.get_colored_name(),
      ' 的手抚住了 ',
      me.get_colored_name(),
      ' 的侧脸。',
    ]);
    await era.printAndWait([acute.sex, '的掌心是如此的冰凉。']);
    await acute.say_and_wait(['下次，不要再做这种事了哦，', callname, '。']);
    await era.printAndWait(['………………']);
    await era.printAndWait(['……………']);
    await era.printAndWait(['………']);
    await era.printAndWait(['奇怪。']);
    await era.printAndWait(['为什么，突然止不住眼泪了呢？']);

    era.drawLine();
    await era.printAndWait(['再次醒来时，已经是隔天的清晨。']);
    await era.printAndWait(['衣衫凌乱的躺在窗前，窗外飘零着白色的落雪。']);
    await era.printAndWait(['站起身来，总觉得有些恍惚。']);
    await era.printAndWait([
      '昨天发生的事，莫名地有些模糊；只记得最后，',
      me.get_colored_name(),
      ' 沉溺在温暖的梦中。',
    ]);
    await era.printAndWait([
      '起床，一如既往的洗漱、进食、制定训练计划、进行训练准备。接受商店街神秘实验女用卖身契强制的药物实验、并偿还「3000」马币租借的透视镜框被破坏而欠下的债务。',
    ]);
    await era.printAndWait(['意料之外的心情愉悦。']);
    await era.printAndWait([
      '随后，穿过中庭；看见 ',
      acute.get_colored_name(),
      ' 正蹲坐在枯树洞内。',
    ]);
    await era.printAndWait(['天上飘散着雪花。']);
    await era.printAndWait(['踮起脚尖、偷偷地、偷偷地，']);
    await era.printAndWait(['从后方接近——']);

    flags.wait_flag = get_attr_and_print_in_event(0, [0, 0, 0, 1], 0);
  };
};
