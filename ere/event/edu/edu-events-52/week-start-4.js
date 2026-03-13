const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { add_event } = require('#/event/queue');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[95 + 6] = async (urara, me, in_urara, callname) => {
    await print_event_name('心意突袭！II！', urara);
    await in_urara.say_as_unknown_and_wait('……');
    era.drawLine();
    await era.printAndWait(
      '清早，起床洗漱穿衣，囫囵的吃下早餐，顺便在站在门口时轻描淡写的看眼日历。',
    );
    await era.printAndWait([
      '但在看清日期后，',
      me.get_colored_name(),
      ' 随即严肃起来。今天是情人节，是个大概需要随时紧绷的特别日子。',
    ]);
    await era.printAndWait([
      '就像计划永远赶不上变化的此时此刻，在门廊前叹了口气，',
      me.get_colored_name(),
      ' 拉开了大概率马上就会被敲响的大门。',
    ]);
    await era.printAndWait([
      '正如 ',
      me.get_colored_name(),
      ' 所料，从门后探出的又是与「上次」相同的粉色马耳套，以及小动物可爱的笑脸。',
    ]);

    era.printButton('「这次也来得这么早啊，不要勉强自己哦？」', 1);
    await era.input();

    if (era.get('relation:52:0') > 150) {
      if (era.get('love:52') >= 50) {
        await urara.say_and_wait(
          '没有勉强哦！乌拉拉为了今天准备了很多，包括昨天已经把大家的巧克力送完了！',
        );
        await urara.say_and_wait([
          '因为是 ',
          callname,
          '，所以这次我想做得更正式一些呢！因为是难得的情人节嘛！',
        ]);
        await era.printAndWait([
          '对 ',
          me.get_colored_name(),
          ' 俏皮地笑着，小',
          urara.uma_sex_title,
          '摇晃着手中的袋子贴在 ',
          me.get_colored_name(),
          ' 的身上，暧昧的氛围变得更加浓厚起来。',
        ]);
      } else {
        await urara.say_and_wait([
          '乌拉拉没有勉强自己哦！只是大家的巧克力我昨天就提前分掉了，今天只有 ',
          callname,
          '！',
        ]);
        await urara.say_and_wait([
          '不过大家都沉浸在节日氛围里，所以今天 ',
          callname,
          ' 和我多玩一会儿也没关系吧？',
        ]);
        await era.printAndWait([
          '露出天真可爱的笑容，小',
          urara.uma_sex_title,
          '在 ',
          me.get_colored_name(),
          ' 的玄关前蹦蹦跳跳地举着点心袋子。',
        ]);
      }
    } else if (era.get('love:52') >= 50) {
      await urara.say_and_wait([
        '没有勉强哦？乌拉拉在昨天就把大家的巧克力分完了，但是 ',
        callname,
        ' 的……是特别的！',
      ]);
      await urara.say_and_wait([
        '而且我也想和 ',
        callname,
        ' 一起过情人节，所以……这个，是给 ',
        callname,
        ' 的！',
      ]);
      await era.printAndWait([
        '轻轻举起怀中的纸袋，小',
        urara.uma_sex_title,
        '带着一点',
        urara.teen_sex_title,
        '的暧昧，慢慢地将身体贴在了 ',
        me.get_colored_name(),
        ' 的身上。',
      ]);
    } else {
      await urara.say_and_wait([
        '其实也不算勉强哦？只是昨天分巧克力的时候把 ',
        callname,
        ' 忘记了……',
      ]);
      await urara.say_and_wait([
        '所以今天我特地把 ',
        callname,
        ' 的巧克力送来了，但是……外面有点冷，',
        callname,
        '……？',
      ]);
      await era.printAndWait([
        '一边向小手哈着气，小',
        urara.uma_sex_title,
        '一边从怀中取出了装着巧克力的袋子。',
      ]);

      if (
        era.getAddedCharacters().filter((e) => era.get(`love:${e}`) >= 75)
          .length > 2
      ) {
        await urara.say_and_wait([
          '而且乌拉拉明白了呢，今天会有很多人来围堵受欢迎的 ',
          callname,
          '，所以乌拉拉也要占得先机！',
        ]);
        await era.printAndWait([
          '嗯……诶？啊？突然被 ',
          urara.get_colored_name(),
          ' 的话语猛敲了下脑袋，',
          me.get_colored_name(),
          ' 一时尴尬的不知道该说什么好。',
        ]);
        await era.printAndWait([
          '而似乎是察觉到了 ',
          me.get_colored_name(),
          ' 脸上的窘迫，',
          urara.get_colored_name(),
          ' 虽然依旧摆着恶作剧的笑容，但也适时的结束了话题。',
        ]);
        await urara.say_and_wait([
          '嘿嘿～什么都没有哦，乌拉拉什么都没说～',
          callname,
          ' 听错了哟～',
        ]);
        await era.printAndWait([
          '……这真的是想要结束话题的样子吗？而且',
          urara.sex,
          '这挑衅大人的方法到底是从哪里学来的……',
        ]);
      }
    }
    await era.printAndWait([
      '轻盈地钻进 ',
      me.get_colored_name(),
      ' 的住处，两人在桌前坐好后，',
      urara.get_colored_name(),
      ' 笑着把纸袋中的内容物一股脑的倒在了盘中。',
    ]);
    await era.printAndWait([
      '相比于去年过于有创造力的多口味巧克力，今年小',
      urara.uma_sex_title,
      '的礼物并没有那么童趣。',
    ]);
    await era.printAndWait([
      '但注视眼前堆积成山的爱心巧克力曲奇，',
      me.get_colored_name(),
      ' 的记忆也慢慢飞回了相遇后的第一个年末……',
    ]);
    await urara.say_and_wait([
      '因为 ',
      callname,
      ' 喜欢的还是乌拉拉的饼干对吧？所以我又做了这个！',
    ]);
    await urara.say_and_wait([
      callname,
      '，现在就吃一口看看吧！我保证这次一定好吃到连舌头都会融化哦！',
    ]);
    await era.printAndWait([
      '连舌头都会融化，听起来怪危险的。这不是形容饼干的说法吧，还是说 ',
      urara.get_colored_name(),
      ' 又加了什么？',
    ]);
    await era.printAndWait([
      '在 ',
      urara.get_colored_name(),
      ' 期待的催促声中，',
      me.get_colored_name(),
      ' 若有所思的将手伸向了还带着少许余温的饼干。',
    ]);
    await era.printAndWait(
      '的确……非常好吃。虽然造型依旧十分零碎，但口味却比上次年末时更加细腻香甜……',
    );
    await era.printAndWait([
      '而读出了 ',
      me.get_colored_name(),
      ' 脸上「舌头被融化」的震撼，',
      urara.get_colored_name(),
      ' 也悄悄地着坐到 ',
      me.get_colored_name(),
      ' 身边。',
    ]);
    await urara.say_and_wait(
      '其实这里面有个好吃的秘密哦？虽然应该保密的，但乌拉拉可以破例告诉你哦！',
    );
    await urara.say_and_wait([
      callname,
      '，如果想知道的话，就把耳朵靠过来吧……？',
    ]);
    let ret;
    if (era.get('love:52') >= 50) {
      await era.printAndWait([
        '可当 ',
        me.get_colored_name(),
        ' 准备倾听时，',
        urara.get_colored_name(),
        ' 却在下一秒变了脸色。突然跨坐上 ',
        me.get_colored_name(),
        ' 的腰间，小',
        urara.uma_sex_title,
        '将 ',
        me.get_colored_name(),
        ' 按在了身下。',
      ]);
      await era.printAndWait([
        '用娇小柔软的身体压在 ',
        me.get_colored_name(),
        ' 的身上，',
        urara.teen_sex_title,
        '绯红的脸颊与樱瞳中绽放出的满是恋人的情欲。',
      ]);
      await urara.say_and_wait([
        '对 ',
        callname,
        ' 的祝福也是，对 ',
        callname,
        ' 的爱也是，乌拉拉加了很多很多……',
      ]);
      await urara.say_and_wait([
        '所以既然是难得做出来的，那 ',
        callname,
        ' 一定要和乌拉拉一起吃掉哦？',
      ]);
      if (era.get('talent:52:乳房尺寸') > 0) {
        await urara.say_and_wait([
          '而且除了对 ',
          callname,
          '『爱』之外，乌拉拉还按照大家的传言加了其他东西……',
        ]);
        await era.printAndWait([
          '骑在 ',
          me.get_colored_name(),
          ' 身上轻轻剥开自己的外套，小',
          urara.uma_sex_title,
          '解开了已经在颤巍巍的发情中粘稠的湿了一片的束胸。',
        ]);
        await era.printAndWait(
          '而之后摇晃着映入眼中的，则是一对翘起的尖端还不断分泌着奶白色的娇嫩乳肉。',
        );
        await era.printAndWait([
          '用臂弯捧起与自己娇小的身体不相符的两只魅乳，',
          urara.get_colored_name(),
          ' 羞红的小脸上又多了一份大人的妖艳。',
        ]);
        await urara.say_and_wait([
          '除了唾液之外，乌拉拉做饼干时用的奶也是自己的哦？所以……',
          callname,
          ' 要多吃一点哦？',
        ]);
      }
      await era.printAndWait([
        '将饼干衔在唇间，小',
        urara.uma_sex_title,
        '俯下身体，将柔软细嫩的唇舌与与融化着甜蜜的涎水一同送入了 ',
        me.get_colored_name(),
        ' 的口中。',
      ]);
      await era.printAndWait([
        '从想要推开对方的坐立难安，到连思考都融化在吮吸中的十指相合，与 ',
        me.get_colored_name(),
        ' 缠绵的',
        urara.teen_sex_title,
        '放松了身体……',
      ]);
      await era.printAndWait([
        '随着攻守的互换，双眼涣散的小',
        urara.uma_sex_title,
        '在 ',
        callname,
        ' 缠紧的怀抱与甜蜜的深吻中发出着绵软的娇吟声。',
      ]);
      await era.printAndWait([
        '面对完全进入了情人节陷阱的 ',
        me.get_colored_name(),
        '，小小的',
        urara.uma_sex_title,
        '将身体的使用权安心的交给了自己的爱人……',
      ]);

      await era.printAndWait('现在的话，做什么都可以被允许……');
      era.printButton('在这里吃掉乌拉拉……（爱慕+10）', 1);
      era.printButton('先不做什么了吧……（好感+20）', 2);
      ret = await era.input();
      if (ret === 1) {
        await quick_into_sex(52);
      } else {
        await era.printAndWait([
          '摇了摇头，',
          me.get_colored_name(),
          ' 放开了衣衫凌乱的 ',
          urara.get_colored_name(),
          '，但在 ',
          me.get_colored_name(),
          ' 意料之外的是，此时的小',
          urara.uma_sex_title,
          '却并没有表达出不满。',
        ]);
        await era.printAndWait([
          '安静地拉起自己半脱的衣物，小',
          urara.uma_sex_title,
          '依旧满是红晕的小脸上露出了恶作剧失败时的调皮笑容。',
        ]);
        await urara.say_and_wait([
          callname,
          ' 做的没错呢，一大早就这样做有点过分了，不过难得是情人节，一起都吃掉吧……？',
        ]);
        await urara.say_and_wait(
          '看吧，这里还有很多哦？把嘴张开吧，接下来一定会很开心的！',
        );
        await era.printAndWait([
          '果然，还没放弃的 ',
          urara.get_colored_name(),
          ' 拿起下一块掺杂了太多「调料」的曲奇，带着甜蜜的笑容将点心含在口中。',
        ]);
        await era.printAndWait('看来这个情人节，注定要艰难度过了……');
      }
    } else {
      await era.printAndWait([
        '在 ',
        me.get_colored_name(),
        ' 的耳边轻声吹拂着，',
        urara.teen_sex_title,
        '的芳香与节日的祝福一同飘入了 ',
        me.get_colored_name(),
        ' 的耳中。',
      ]);
      await urara.say_and_wait([
        '其实啊……乌拉拉加了好多心意，因为我希望 ',
        callname,
        ' 每天都能开心！',
      ]);
      await urara.say_and_wait('还有大家说的，让魔法咒语生效的最后一步……啾～');
      await era.printAndWait([
        '贴在 ',
        me.get_colored_name(),
        ' 的身边保持着悄悄话的距离，',
        urara.get_colored_name(),
        ' 为 ',
        me.get_colored_name(),
        ' 的脸颊献上了一枚天使祝福般的小小轻吻。',
      ]);
      await era.printAndWait([
        '明明还不是恋人，但小',
        urara.uma_sex_title,
        '却选择献上如此贵重的礼物，大家到底对',
        urara.sex,
        '说了些什么呢……',
      ]);
      await era.printAndWait([
        '用眼角的余光注视着',
        urara.teen_sex_title,
        '春光依旧的笑容，',
        me.get_colored_name(),
        ' 的心跳声也不由自主的打起了节拍。',
      ]);

      await urara.say_and_wait([
        '嘿嘿～',
        callname,
        ' 觉得怎么样呢？乌拉拉的咒语有没有成功呢？',
      ]);
      era.printButton('「开心到今后一整天都不敢洗脸了！」（爱慕+10）', 1);
      era.printButton('「嗯！乌拉拉的魔法大成功哦！」（好感+20）', 2);
      ret = await era.input();

      await urara.say_and_wait([
        '对吧？让 ',
        callname,
        ' 又心动又高兴的魔法果然很有效！不愧是大家流传至今的方法呢！',
      ]);
      await era.printAndWait([
        '所以这个「魔法咒语」，果然不是友情向的吧？看着兴高采烈的小',
        urara.uma_sex_title,
        '，猜到什么的 ',
        me.get_colored_name(),
        ' 别开了视线。',
      ]);
      await urara.say_and_wait([
        '所以为了今后能都让 ',
        callname,
        ' 更加开心，乌拉拉的饼干还有很多哦？',
      ]);
      await urara.say_and_wait([
        callname,
        '！和乌拉拉一起，把未来的好心情吃下去吧！',
      ]);
      await era.printAndWait([
        '笑着拿起下一块添加了祝福的情人节礼物，',
        urara.get_colored_name(),
        ' 带着让人心跳加速的笑容将它塞进了 ',
        me.get_colored_name(),
        ' 的口中。',
      ]);
      await era.printAndWait([
        '在不知不觉中变得暧昧的「友情」氛围中，',
        me.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 一起分享着巧克力饼干，度过了情人节的早上。',
      ]);
    }
    era.drawLine();
    await in_urara.say_as_unknown_and_wait('……');
    await in_urara.say_as_unknown_and_wait('我、我没关系哦……？唉……');
    era.add('item:情人节巧克力', 1);
    era.println();
    let wait_flag = get_attr_and_print_in_event(52, undefined, 0, [2000]);
    wait_flag =
      get_attr_and_print_in_event(0, undefined, 0, [2000]) || wait_flag;
    wait_flag =
      sys_like_chara(52, 0, 20 * (ret === 2), true, 10 * (ret === 1)) ||
      wait_flag;
    wait_flag && (await era.waitAnyKey());
    era.set('cflag:52:节日事件标记', 0);
  };

  handlers[95 + 29] = async (
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
    await print_event_name('夏合宿（资深年）开始', urara);
    await in_urara.say_as_unknown_and_wait([
      '虽然已经经历过一次，但小',
      urara.uma_sex_title,
      '总会成长的。',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '人不会踏入同一条河流，站在同一片海滩上的',
      urara.sex,
      '也会有所不同哦？',
    ]);
    era.drawLine();
    await era.printAndWait([
      '今天起就是第三年的夏季集训了，',
      me.get_colored_name(),
      ' 与 ',
      me.get_colored_name(),
      ' 的担当再次来到了集训的海边。',
    ]);
    await era.printAndWait([
      '宽广的海面总能带走旅者的烦恼，',
      urara.get_colored_name(),
      ' 也终于暂时放下了对自己的生拉硬拽。',
    ]);
    await era.printAndWait([
      '而尽管失去了第一次时站在沙滩上时的新鲜感，但小',
      urara.uma_sex_title,
      '依旧喜欢在太阳下开心的眺望远方。',
    ]);
    await era.printAndWait([
      '半脱的外套下是深蓝的学校泳衣，因沾水而紧绷的贴身布料勾勒着',
      urara.sex,
      '娇嫩但健康饱满的身体曲线；',
    ]);
    if (era.get('talent:52:乳房尺寸') > 0) {
      await era.printAndWait([
        '被泳装所绷出的乳袋沉甸甸的挂在',
        urara.sex,
        '娇小的身体上，与过度发育的丰满臀肉一同诱人的摇晃着；',
      ]);
      await era.printAndWait([
        '小',
        urara.uma_sex_title,
        '丰满的肉体在不太合身的紧身布料下不太情愿的扭动着，柔软的乳肉也在胸前印出了两只小小的突点；',
      ]);
    }
    await era.printAndWait([
      '粉色的耳朵与尾巴在阳光下自然的甩动着，散开的发丝随着海风轻柔的拂过',
      urara.sex,
      '娇小的双肩。',
    ]);
    await era.printAndWait([
      '或许是被阳光恍到了眼睛，一时间 ',
      me.get_colored_name(),
      ' 甚至没敢确认出那个身影就是 ',
      me.get_colored_name(),
      ' 的 ',
      urara.get_colored_name(),
      '。',
    ]);
    await urara.say_and_wait([callname, '，在这边哦！']);
    await era.printAndWait([
      '注意到 ',
      me.get_colored_name(),
      ' 的视线，小',
      urara.uma_sex_title,
      '踩着水从海浪与沙滩的分界线上向 ',
      me.get_colored_name(),
      ' 跑来，在身后留下了一串浅浅的脚印。',
    ]);
    await era.printAndWait([
      '在 ',
      me.get_colored_name(),
      ' 身前站定，将散在身前的樱发简单地撩到肩后，',
      urara.get_colored_name(),
      ' 瞳中的花朵在阳光下闪着柔和的光。',
    ]);
    await era.printAndWait([
      urara.teen_sex_title,
      '逐渐成熟的气质与仍显天真稚嫩的脸庞如混为一杯的茶与奶，开始在 ',
      me.get_colored_name(),
      ' 的眼中氤氲融合着。',
    ]);
    await era.printAndWait([urara.sex, '是不是……变得像个小大人了？']);
    era.println();
    if (era.get('relation:52:0') > 150) {
      await urara.say_and_wait([
        callname,
        '！这次来有点慢了哦？乌拉拉可是一早就把东西都收拾好了！',
      ]);
      await era.printAndWait([
        '充满干劲的赶到 ',
        me.get_colored_name(),
        ' 的身边，将散发撩到肩后的小',
        urara.uma_sex_title,
        '轻笑着拉起了 ',
        me.get_colored_name(),
        ' 的手。',
      ]);
      await urara.say_and_wait(
        '之后还有重要的比赛，得好好加油才行！所以现在就开始训练吧！',
      );
    } else {
      await urara.say_and_wait([
        '没想到这次想要偷懒的反而是 ',
        callname,
        ' 呢？这次可是让我久等了哦！',
      ]);
      await era.printAndWait([
        '一路小跑站到 ',
        me.get_colored_name(),
        ' 的身边，',
        urara.get_colored_name(),
        ' 笑着捉住 ',
        me.get_colored_name(),
        ' 的手腕就向训练场地走去。',
      ]);
      await urara.say_and_wait(
        '以后还有很重要的比赛，所以这次的训练粗暴一点也没问题哦？',
      );
    }
    era.println();
    await era.printAndWait([
      urara.get_colored_name(),
      ' 如今的一切都是货真价实的，虽然对',
      urara.sex,
      '精神还很担忧，但为了回应担当的期待，作为 ',
      callname,
      ' 只能加把劲了。',
    ]);
    await era.printAndWait([
      '只是感受着现在贴在手臂上的真实又柔软的肉体，',
      me.get_colored_name(),
      ' 大脑内的某些东西感觉也要崩断了。',
    ]);
    await era.printAndWait([
      '稚嫩的',
      urara.sex,
      '是什么时候变得如此「诱人」的呢？总觉得有些感慨啊……',
    ]);

    if (era.get('love:52') >= 50) {
      await urara.say_and_wait([
        '还有两人独处的时候，乌拉拉可以期待一下 ',
        callname,
        ' 的表现吗？',
      ]);
      await era.printAndWait('这个……就先持保留意见吧。');
      await era.printAndWait([
        '没有迎向 ',
        urara.get_colored_name(),
        ' 火热的目光与魅惑的肉体的勇气，',
        me.get_colored_name(),
        ' 将躲闪的目光投向了远处的大海……',
      ]);
    }
  };
};
