const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const print_ero_page = require('#/page/page-ero');

const typing = require('#/event/edu/edu-events-56/snippets/typing');
const { add_event } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FukukitaruEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[47 + 29] = handlers[95 + 29] = async (
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
    await print_event_name(
      `夏季合宿${era.get('cflag:56:育成回合计时') < 96 ? '（经典年）' : '（资深年）'}`,
      kitaru,
    );
    await era.printAndWait([
      '炎热的夏季，和 ',
      kitaru.get_colored_name(),
      ' 一起坐上了前往夏季合宿场所的长途大巴。',
    ]);
    await era.printAndWait([
      '脖颈处传来马耳细腻舒服温暖的触感，',
      kitaru.get_colored_name(),
      ' 正因为疲倦而靠在 ',
      me.get_colored_name(),
      ' 的肩膀上。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 开始思考起',
      kitaru.sex,
      '之后的训练计划起来。',
    ]);
  };

  handlers[47 + 32] = async (
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
    await print_event_name('坠入凡间的星', kitaru);
    await era.printAndWait([
      '今天，是 ',
      me.get_colored_name(),
      ' 约好了和 ',
      kitaru.get_colored_name(),
      ' 一起出游的日子。',
    ]);
    await era.printAndWait([
      '自乘船抵达此处开始，',
      kitaru.get_colored_name(),
      ' 就一直拉着 ',
      me.get_colored_name(),
      ' 在这座并不算大的岛屿上四处乱逛着。',
    ]);
    await era.printAndWait([
      '目标是菊花赏的',
      kitaru.sex,
      '自然耐力不会差到哪里去，短短几个小时下来，',
      me.get_colored_name(),
      ' 已经累的不行。',
    ]);
    await era.printAndWait('转眼已是黄昏，是时候该回去了。');
    await era.printAndWait('不过……');
    await kitaru.say_and_wait([callname, '！这边这边！']);
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 反倒是愈发的热情了起来。',
    ]);
    await era.printAndWait([
      '即使是对于 ',
      kitaru.get_colored_name(),
      ' 而言，能从今天来到此处就一直保持如此的热情也是颇为罕见的。',
    ]);
    era.printButton('「好了，该说说看你想干什么了吧？」', 1);
    await era.input();
    await kitaru.say_and_wait(['欸嘿嘿！果然是 ', callname, '！']);
    await kitaru.say_and_wait('一下子就看出来了呢！');
    await kitaru.say_and_wait('那个！今晚有流星雨呢！');
    await kitaru.say_and_wait(['想和 ', callname, ' 一起看！']);
    era.printButton('「直接说出来不好吗？」', 1);
    await era.input();
    await kitaru.say_and_wait([
      '呜……要是被 ',
      callname,
      ' 拒绝的话，我今天一天都会是大凶了！',
    ]);
    era.drawLine({ content: '无人岛 几个小时后' });
    await era.printAndWait([
      me.get_colored_name(),
      ' 简单搭起来的营火噼啪作响。',
    ]);
    await kitaru.say_and_wait(['喔喔喔！', callname, ' 快看！流星雨来了呢！']);
    await kitaru.say_and_wait(
      '据说，我当时还在妈妈的肚子里的时候，爸爸妈妈也来这里看过流星雨呢！',
    );
    await kitaru.say_and_wait('所以！今天的我不是待兼福来！而是待兼星来！');
    await kitaru.say_and_wait('欸，对了，看流星雨要搭配什么仪式吗？');
    era.printButton('「奔跑」', 1);
    era.printButton('「许愿」', 2);
    const ret = await era.input();
    let attr_change = new Array(5).fill(0),
      pt_change = 0;
    if (ret === 1) {
      await kitaru.say_and_wait('的确如此呢！');
      await kitaru.say_and_wait('能就此获得星空之力也说不定。');
      await era.printAndWait([
        kitaru.sex,
        '褪下了鞋袜开始了奔跑，白皙的双脚在奔跑的过程中击打出水花，而后又被身后摆动不已的马尾拂过，以至于让些许甩出的水滴落在了 ',
        me.get_colored_name(),
        ' 的裤腿上。',
      ]);
      attr_change[0] += 25;
    } else {
      await kitaru.say_and_wait('许愿吗？');
      await kitaru.say_and_wait('嗯……我知道了！');
      await kitaru.say_and_wait('虽然我好像没有什么特别的愿望。');
      await era.printAndWait([kitaru.sex, '闭上了双眼，双手合十。']);
      await era.printAndWait([
        '橙发',
        kitaru.get_teen_sex_title(),
        '在营火光芒的照耀下，竟如教堂彩绘玻璃上那些圣光庇佑的修女般圣洁。',
      ]);
      pt_change = 20;
    }
    if (era.get('love:56') >= 49) {
      era.drawLine({ content: '一段时间后' });
      if (ret === 1) {
        await era.printAndWait([
          '奔跑结束后，有些脱力的 ',
          kitaru.get_colored_name(),
          ' 躺在了 ',
          me.get_colored_name(),
          ' 的怀里，',
          kitaru.sex,
          '今天穿着的衬衣已经在刚才的仪式中湿透了，其下因为激烈运动而有些泛红的乳肉若隐若现。',
        ]);
        await era.printAndWait([
          '怕',
          kitaru.sex,
          '着凉，于是 ',
          me.get_colored_name(),
          ' 把自己的外套脱下来盖在了',
          kitaru.sex,
          '的身上。',
        ]);
        await kitaru.say_and_wait(['欸嘿嘿，', callname, ' 的气味呢。']);
        await era.printAndWait([
          kitaru.sex,
          '蹭了蹭 ',
          me.get_colored_name(),
          ' 的胸口，',
          me.get_colored_name(),
          ' 能感受到',
          kitaru.sex,
          '乱糟糟的头发划过胸口时的触感。',
        ]);
      } else {
        await era.printAndWait([
          '结束了祈祷的修女躺在了 ',
          me.get_colored_name(),
          ' 的怀里，',
          me.get_colored_name(),
          ' 能感受到',
          kitaru.sex,
          '乱糟糟的头发划过胸口时的触感。',
        ]);
        await era.printAndWait([
          '以及',
          kitaru.sex,
          '胸前的那对柔软偶尔挤压着 ',
          me.get_colored_name(),
          ' 时的感觉，似乎',
          kitaru.sex,
          '本人倒是完全没有意识到此刻的自己多么的有诱惑力。',
        ]);
      }
      await kitaru.say_and_wait('那个，我今天还有一个愿望哦。');
      await era.printAndWait([
        me.get_colored_name(),
        ' 看见 ',
        kitaru.get_colored_name(),
        ' 的脸微微泛红，不知是否是因为今天的活动过于兴奋了。',
      ]);
      await kitaru.say_and_wait('我想……');
      era.printButton('「唔！」', 1);
      await era.input();
      await era.printAndWait([
        '一天下来过于疲倦的 ',
        me.get_colored_name(),
        ' 来不及反应。',
      ]);
      await me.say_and_wait('咕……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 柔软的双唇，和 ',
        me.get_colored_name(),
        ' 的重叠在了一起。',
      ]);
      begin_and_init_ero(0, 56);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(56, part_enum.mouth),
        false,
      );
      await era.printAndWait([
        '唇间溢出的吐息和唾液，带着',
        kitaru.sex,
        '的热度与味道',
      ]);
      await kitaru.say_and_wait('哈……');
      await kitaru.say_and_wait(['和，和 ', callname, ' Kiss了呢！']);
      await kitaru.say_and_wait('呼……');
      await era.printAndWait([
        '结束之后，',
        kitaru.sex,
        '的吐息拂过 ',
        me.get_colored_name(),
        ' 的耳边。',
      ]);
      if (era.get('love:56') > 49 || era.get('exp:56:性交次数') > 0) {
        await era.printAndWait(['要顺势做点什么吗？']);
        era.printButton('推倒待兼福来', 1);
        era.printButton('算了吧', 2);
        if ((await era.input()) === 1) {
          await print_ero_page(56, true);
          await end_ero_and_show_result();
        } else {
          attr_change = attr_change.map((e) => e + 1);
        }
      }
      if (era.get('tcvar:0:0') !== undefined) {
        end_ero_and_train();
      }
    }
    flags.wait_flag = get_attr_and_print_in_event(56, attr_change, pt_change);
  };

  handlers[47 + 39] = async (kitaru, me, callname, flags) => {
    await print_event_name('两世之间', kitaru);
    await era.printAndWait([
      '距离菊花赏只剩下一周了，',
      me.get_colored_name(),
      ' 能感觉到，',
      kitaru.get_colored_name(),
      ' 这段时间变得愈发狂热起来。',
    ]);
    await era.printAndWait([
      '虽然往常的训练项目',
      kitaru.sex,
      '也会认真执行，但是现在的',
      kitaru.sex,
      '就像是一张弦绷的过紧的弓。',
    ]);
    await era.printAndWait([
      '赛前超负荷训练可是大凶，',
      me.get_colored_name(),
      ' 决定给',
      kitaru.sex,
      '放两天假。',
    ]);
    await kitaru.say_and_wait('但是但是！菊花赏已经近在眼前啦！');
    await kitaru.say_and_wait(['唔，那 ', callname, ' 陪我出去逛逛吧。']);
    await kitaru.say_and_wait([
      '正巧，也一直有想和 ',
      callname,
      ' 一起去拜访的地方呢。',
    ]);
    era.drawLine({ content: '市郊墓园 通向深处的小路' });
    await era.printAndWait('乘着公交车，来到了郊外的墓园。');
    await era.printAndWait([
      '随着越发的进入墓园深处，一向欢快的 ',
      kitaru.get_colored_name(),
      ' 也平静了下来，和周围的环境一同变得肃穆。',
    ]);
    await kitaru.say_and_wait('到了，就是这里。');
    await era.printAndWait('柏树下，在一座并不算小的墓碑前，待兼福停了下来。');
    await era.printAndWait([
      '其上的黑白照片中的',
      kitaru.get_uma_sex_title(),
      '，和 ',
      kitaru.get_colored_name(),
      ' 有几分神似，不过倒是留了显得更成熟的长发。',
    ]);
    await kitaru.say_and_wait([
      '嗯……我的',
      kitaru.get_bigger_sibling_sex_title(),
      '。',
    ]);
    await kitaru.say_and_wait(
      '不过之前总是不想来，即使是妈妈的要求也会尝试拒绝掉。',
    );
    await kitaru.say_and_wait('现在来看应该潜意识的害怕才对。');
    await era.printAndWait([kitaru.sex, '自顾自地说着。']);
    era.printButton('「需要留你一个人静静吗？」', 1);
    await era.input();
    await kitaru.say_and_wait('欸！');
    await kitaru.say_and_wait('不用了！');
    await kitaru.say_and_wait([callname, ' 在这里陪着我就好了！']);
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 的声音中，有些许的颤抖。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 看见',
      kitaru.sex,
      '的双手紧紧的握在一起，指甲几乎要插进了掌心。',
    ]);
    await era.printAndWait(['而后，', kitaru.sex, '缓缓上前。']);
    await kitaru.say_and_wait([
      '那个，',
      kitaru.get_bigger_sibling_sex_title(),
      '，我带着我现在的 ',
      callname,
      ' 来看你了……',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 听着 ',
      kitaru.get_colored_name(),
      ' 对着那方墓碑倾诉着，也许算不上多么庄重，甚至是有些轻松，那种语气就像',
      kitaru.sex,
      '的',
      kitaru.get_bigger_sibling_sex_title(),
      '仍存活于世一样。',
    ]);
    await era.printAndWait([
      '从如何与 ',
      me.get_colored_name(),
      ' 相见，到日本德比，再到赢下神户新闻赏，',
      me.get_colored_name(),
      ' 听着 ',
      kitaru.get_colored_name(),
      ' 向',
      kitaru.sex,
      '去世的',
      kitaru.get_bigger_sibling_sex_title(),
      '转述着 ',
      me.get_colored_name(),
      ' 和',
      kitaru.sex,
      '的经历。',
    ]);
    era.drawLine({ content: '一段时间后' });
    await kitaru.say_and_wait('下周就是菊花赏了呢！');
    await kitaru.say_and_wait('真是花了好长时间才完完整整的想起来呢……');
    await kitaru.say_and_wait([
      kitaru.get_bigger_sibling_sex_title(),
      '，我会像约好的那样夺下胜利的！',
    ]);
    flags.wait_flag = get_skills_and_print_in_event(56, [200841]);
    flags.wait_flag =
      get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0) || flags.wait_flag;
  };

  handlers[47 + 41] = async (kitaru, me, callname, flags) => {
    const suzuka = get_chara_talk(2);
    await print_event_name('神化', kitaru);
    await era.printAndWait([
      me.get_colored_name(),
      ' 和 ',
      kitaru.get_colored_name(),
      ' 一起在办公室里享受着菊花赏后难得的休憩时间。',
    ]);
    await era.printAndWait('菊花赏结束后，紧绷的弦总算得以放松。');
    await kitaru.say_and_wait([callname, '，下一场比赛该选什么呢？']);
    era.printButton('「阿福有什么想跑的吗？」', 1);
    await era.input();
    await kitaru.say_and_wait('唔……');
    await era.printAndWait([
      '从',
      kitaru.get_bigger_sibling_sex_title(),
      '的阴影中走了出来，也实现了想要在菊花赏上奔跑的愿望，但此时的 ',
      kitaru.get_colored_name(),
      '，反倒是显得有些迷惘。',
    ]);
    await era.printAndWait([
      '本来懒趴趴的躺在沙发上 ',
      kitaru.get_colored_name(),
      ' 晃晃悠悠站了起来。',
    ]);
    await era.printAndWait([
      '在办公室的沙发上凭借',
      kitaru.get_uma_sex_title(),
      '优秀的平衡踱步着，穿着白色织物的玲珑双足交替着踏在沙发上。',
    ]);
    if (era.get('cflag:2:招募状态') === 1) {
      await era.printAndWait('一边摸着下巴一边转着圈。');
      await era.printAndWait([
        '思考时的这种独特动作倒让 ',
        me.get_colored_name(),
        ' 想起了自己另一位名叫',
        suzuka.get_colored_name(),
        '的担当。',
      ]);
    }
    await kitaru.say_and_wait('硬要说的话，我好像没有什么特别想跑的比赛呢？');
    await kitaru.say_and_wait('直接连着把日本杯和有马纪念都拿下？');
    era.printButton('「太离谱了吧！」', 1);
    await era.input();
    await kitaru.say_and_wait(['那就听 ', callname, ' 的指令吧？']);
    await era.printAndWait([
      '颇为平静的说出了这番话，就像比赛似乎和',
      kitaru.sex,
      '是什么无关的事情一样。',
    ]);
    await kitaru.say_and_wait('哈……');
    await era.printAndWait([
      '打了个哈欠，名叫 ',
      kitaru.get_colored_name(),
      ' 的赛',
      kitaru.get_uma_sex_title(),
      '，径直向后栽倒在了办公室中央那堆积成山的开运道具中。',
    ]);
    await era.printAndWait('哗啦！');
    await era.printAndWait([
      '几个不知装着什么的纸盒被躺倒的 ',
      kitaru.get_colored_name(),
      ' 挤到了一旁。',
    ]);
    await era.printAndWait([
      '略微调整几下，直到能舒舒服服地躺在那赛后亲自采购回来的杂物堆中，',
      kitaru.get_colored_name(),
      ' 望向了 ',
      me.get_colored_name(),
      '。',
    ]);
    await kitaru.say_and_wait('运势到达了极点的我，定能向你呈上胜利！');
    await kitaru.say_and_wait('赶紧下指示吧！带给我幸运的命定之人！');
    await era.printAndWait([
      '也许即使是刀山火海，',
      kitaru.get_colored_name(),
      ' 也会因为作为',
      kitaru.sex,
      '最强开运物品的 ',
      me.get_colored_name(),
      ' 一句能获得大吉的指示，而毫不犹豫的跳进去吧？',
    ]);
    era.printButton('「明年的……金鯱赏？」', 1);
    await era.input();
    await kitaru.say_and_wait([
      '明年春天的？',
      callname,
      ' 选了一场非常遥远的比赛呢。',
    ]);
    await era.printAndWait([
      '躺在开运道具堆上的',
      kitaru.get_teen_sex_title(),
      '用慵懒的声线回答了 ',
      me.get_colored_name(),
      '，而后传来几声呼噜声，',
      kitaru.sex,
      '便酣睡了过去。',
    ]);
    await era.printAndWait([
      '的确是一场遥远的比赛，但对于今年赛程如此密集的 ',
      kitaru.get_colored_name(),
      '，休息一段时间后再开始是必要的。',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
  };

  handlers[95 + 1] = async (kitaru, me, callname, flags) => {
    era.set('cflag:56:节日事件标记', 0);
    await print_event_name('神乐', kitaru);
    await era.printAndWait([
      '和去年不同，今年的 ',
      me.get_colored_name(),
      ' 提前收到了 ',
      kitaru.get_colored_name(),
      ' 的邀请，前往了',
      kitaru.sex,
      '们家的神社。',
    ]);
    await era.printAndWait([
      '此时神社的人数还不算多，',
      me.get_colored_name(),
      ' 踏着石阶，再次跨过了那朱红的鸟居。',
    ]);
    await era.printAndWait([
      '而后与上次一样，由远极近，',
      me.get_colored_name(),
      ' 的世界被纯白所笼罩。',
    ]);
    era.drawLine({ content: '？？？' });
    era.printButton('睁开眼睛', 1);
    await era.input();
    await era.printAndWait([
      '周围空无一切，柔和的白色光束从不同的角度如审视般地照在 ',
      me.get_colored_name(),
      ' 的身上。',
    ]);
    era.printButton('抬起头', 1);
    await era.input();
    await era.printAndWait('纯黑色的倒金字塔，突兀悬于空中。');
    era.println();
    if (check_aim_race(RaceHistory.get(56).get(), race_enum.kiku_sho, 1, 1)) {
      await typing(
        '非常好/保持预期，有资格/能力成为' + kitaru.sex + '的协助者/伴侣',
      );
      era.println();
      await typing('你的旨意/愿望是什么？');
    } else {
      await typing('低于预期/响应未达标，协助者/伴侣意料之外');
      era.println();
      await typing('参数/可选项还需要优化/替换');
    }
    era.println();
    era.printButton('昂扬的气氛（全属性+7）', 1);
    era.printButton('脉动的气息（力量+30）', 2);
    era.printButton('轻微的裂缝（技能点数+30）', 3);
    let attr_change = new Array(5).fill(0),
      pt_change = 0;
    switch (await era.input()) {
      case 1:
        await kitaru.print_and_wait('群情激昂……');
        attr_change = attr_change.fill(7);
        break;
      case 2:
        await kitaru.print_and_wait('力量上涌，精神鼓舞……');
        attr_change[2] = 30;
        break;
      case 3:
        await kitaru.print_and_wait('云朵分离——墙壁碾动——旧伤作痛……');
        pt_change = 30;
    }
    if (era.get('love:56') < 49 || me.sex_code === 0 || kitaru.sex_code === 1) {
      await era.printAndWait([
        '当 ',
        me.get_colored_name(),
        ' 回过神来的时候，',
        me.get_colored_name(),
        ' 已经坐上了返回特雷森的末班车。',
      ]);
      return;
    }
    await kitaru.say_and_wait('喂……');
    await kitaru.say_and_wait('喂……');
    await kitaru.say_and_wait([callname, '！']);
    era.printButton('睁开眼睛', 1);
    await era.input();
    await kitaru.say_and_wait('怎么靠着鸟居睡着了？');
    await kitaru.say_and_wait('小心着凉啊！');
    era.printButton('抬起头', 1);
    await era.input();
    await era.printAndWait([
      '穿着巫女服的 ',
      kitaru.get_colored_name(),
      ' 拉住了 ',
      me.get_colored_name(),
      ' 的手，笑意盈盈，黄昏的阳光在其亮橙色的碎发间起舞',
    ]);
    await era.printAndWait([
      '今年算是暖冬吧，加上赛',
      kitaru.get_uma_sex_title(),
      '本就略高的体温，这巫女服对',
      kitaru.sex,
      '而言可能还偏厚了。',
    ]);
    await era.printAndWait([
      '巫女的洁白上衣配着下身鲜红的百褶裙，白色的长筒袜勾勒出了',
      kitaru.sex,
      '柔美的双腿。',
    ]);
    await era.printAndWait(
      '分离式的宽大振袖在风的吹拂下偶尔摆动，让露出的腋下与雪白的侧乳若隐若现。',
    );
    await era.printAndWait([
      '那将衣物撑起明显小丘的胸部在',
      kitaru.sex,
      '拉扯 ',
      me.get_colored_name(),
      ' 手臂的同时肆意摇晃着。',
    ]);
    await era.printAndWait([
      kitaru.get_uma_sex_title(),
      '自身的活力与传统服饰带来的庄重，在这名叫 ',
      kitaru.get_colored_name(),
      ' 的',
      kitaru.get_uma_sex_title(),
      '身上完美的交融在一起。',
    ]);
    era.printButton('「好美……」', 1);
    await era.input();
    await kitaru.say_and_wait('欸！');
    await kitaru.say_and_wait(['唔呼呼！', callname, ' 迷上了吗？']);
    await kitaru.say_and_wait('这可是特地为我的命定之人挑选的哦！');
    await kitaru.say_and_wait('那么，请期待着我今晚的神乐吧！');
    era.drawLine({ content: '待兼福来家的神社 大殿前' });
    await era.printAndWait([
      '新年的神社，由于 ',
      kitaru.get_colored_name(),
      ' 这一年来的精彩表现，神社的参拜客数量也不断增多。',
    ]);
    await era.printAndWait(
      '这座因为十几年前的事故而快被众人遗忘的神社，如今又重新焕发出了生机。',
    );
    await era.printAndWait(
      '众人们的喧哗声先是达到了最高潮，随后便如退潮般，慢慢散去。',
    );
    await era.printAndWait(
      '在万籁俱寂的时候，仿佛看准时机一般，远处的太鼓被奏响，神乐正式开始。',
    );
    await era.printAndWait('乐器的合奏恰到好处。');
    await era.printAndWait('太鼓如关西大汉的吼声令人心情澎湃。');
    await era.printAndWait(
      '三味线如月出于东山之上，徘徊于斗牛之间，轻快回旋。',
    );
    await era.printAndWait(
      '巫女摇响的神乐铃声则点缀于其间，澄澈，悠远而空灵。',
    );
    await era.printAndWait([
      '那声音当中，神殿的正中央，正是 ',
      kitaru.get_colored_name(),
      '，',
      me.get_colored_name(),
      ' 的担当 ',
      kitaru.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      '伴随着旋律，',
      kitaru.sex,
      '于庄严而冷肃的空间中飘飞，月光自天井射下，照在 ',
      kitaru.get_colored_name(),
      ' 饰以清丽淡雅妆容的脸上。',
    ]);
    await era.printAndWait([
      kitaru.sex,
      '挥舞着那把神乐铃，邀请神明与',
      kitaru.sex,
      '共舞。',
    ]);
    await era.printAndWait(
      '一曲毕，台上的现人神立于正中央，向四周的民众们行礼。',
    );
    era.drawLine({ content: '一段时间后' });
    await kitaru.say_and_wait('呼……总算结束了啊！');
    await kitaru.say_and_wait(['多谢 ', callname, ' 今天来帮忙啦！']);
    await era.printAndWait([
      '和上次差不多，',
      me.get_colored_name(),
      ' 们一直忙到了凌晨时分，直到神社再次回到原来寂寥无人的常态。',
    ]);
    await era.printAndWait([
      '不过却也和上次不同……有些疲惫的 ',
      kitaru.get_colored_name(),
      ' 正靠在 ',
      me.get_colored_name(),
      ' 的肩膀上。',
    ]);
    await era.printAndWait([
      '或许是的布料还是有点厚重了，',
      kitaru.get_colored_name(),
      ' 裸露在外的白嫩肌肤上香汗淋漓，微张的唇瓣也吐出热气。',
    ]);
    await era.printAndWait([
      '巫女服勾勒出',
      kitaru.sex,
      '较好的身体曲线，露出的侧乳因为先前的忙碌染上了绯红，随着呼吸起伏着，似乎在诱惑着 ',
      me.get_colored_name(),
      ' 伸手试试触感。',
    ]);
    era.printButton('忍耐', 1);
    era.printButton('搂住待兼福来的腰', 2, {
      disabled: era.get('love:56') < 75,
    });
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '强压下自己的欲望，向 ',
        kitaru.get_colored_name(),
        ' 道别之后，',
        me.get_colored_name(),
        ' 坐上了返回特雷森的车。',
      ]);
      sys_like_chara(56, 0, 5);
      sys_love_uma(56, 3);
    } else {
      begin_and_init_ero(0, 56);
      await kitaru.say_and_wait(['诶！诶！', callname, '……唔……']);
      await era.printAndWait([
        '俯下身，低头夺走了',
        kitaru.sex,
        '的嘴唇，听着 ',
        kitaru.get_colored_name(),
        ' 从喉咙中挤出的微弱的呻吟。',
      ]);
      await kitaru.say_and_wait('咕……咕……');
      await kitaru.say_and_wait('呼哈……');
      await era.printAndWait([
        '唇舌相互纠缠，被 ',
        me.get_colored_name(),
        ' 抱在怀中的 ',
        kitaru.get_colored_name(),
        ' 难耐似的扭动着身体，些许唾液自',
        kitaru.sex,
        '的嘴角流下，落在神社的石板路上。',
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(56, part_enum.mouth),
        false,
      );
      await era.printAndWait([
        '贪婪地将舌头探入',
        kitaru.sex,
        '先前还在为众人献上祷词的口中，迎接 ',
        me.get_colored_name(),
        ' 的是',
        kitaru.sex,
        '并不熟练的回应',
      ]);
      await kitaru.say_and_wait('咿呀……');
      await era.printAndWait('抱在怀里的担当，发出了下流的声音。');
      await era.printAndWait([
        '左手探入了',
        kitaru.sex,
        '的巫女服，轻轻掐着',
        kitaru.sex,
        '乳房的边缘玩弄着。',
      ]);
      await era.printAndWait([
        '接着又整个搭上，感受着小巧的乳肉在 ',
        me.get_colored_name(),
        ' 的揉捏下变成各种形状。',
      ]);
      await kitaru.say_and_wait('哈……哈啊！');
      await era.printAndWait([
        '指尖在柔嫩的乳晕上绕着圈，偶尔用指尖轻点，',
        kitaru.get_colored_name(),
        ' 便会配合发出可爱的叫声。',
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(56, part_enum.breast),
        false,
      );
      await kitaru.say_and_wait('呀啊！');
      await era.printAndWait([
        '舌吻继续，一边将右手抚上了',
        kitaru.sex,
        '的大腿，指肚摩檫起了丝袜的布料，发出低微的嘶嘶声。',
      ]);
      await era.printAndWait([
        '一步一步的，划过',
        kitaru.sex,
        '的大腿，手探入了温暖的裙摆下。',
      ]);
      await era.printAndWait([
        '湿透了，',
        me.get_colored_name(),
        ' 可以感觉得到。',
      ]);
      await era.printAndWait([
        '一划过被濡湿内裤勾勒出的阴阜，',
        kitaru.get_colored_name(),
        ' 便发出了更加淫荡的声音。',
      ]);
      await era.printAndWait([
        '就站在神社石板路的正中间做这种事情，背德感的刺激让 ',
        me.get_colored_name(),
        ' 的欲望进一步高涨。',
      ]);
      await kitaru.say_and_wait('呀，不要……不要在这里……');
      await era.printAndWait([
        '只是',
        kitaru.get_teen_sex_title(),
        '的欲拒还迎罢了，',
        kitaru.get_colored_name(),
        ' 虽是说着不情愿，但是并拢的双腿却微微分开，得以让 ',
        me.get_colored_name(),
        ' 的手进一步探入。',
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(
          56,
          kitaru.sex_code ? part_enum.virgin : part_enum.clitoris,
        ),
        false,
      );
      await era.printAndWait(
        '手指插入，穴肉自觉的吸附上来，指节在穴腔内活动时发出粘腻的声响。',
      );
      await kitaru.say_and_wait('唔！');
      await era.printAndWait([
        '强烈的刺激让 ',
        kitaru.get_colored_name(),
        ' 急促的喘息着，双腿夹紧 ',
        me.get_colored_name(),
        ' 的手臂，如触电般的颤抖着。',
      ]);
      await kitaru.say_and_wait(['呀呜，', callname, '！']);
      era.printButton('「这么舒服吗？」', 1);
      await era.input();
      era.set('palam:56:阴道快感', era.get('tcvar:56:阴道快感上限'));
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(56, part_enum.virgin),
        false,
      );
      await kitaru.say_and_wait('不，不知道啊……嗯呀，哈啊……');
      await era.printAndWait(
        '淫液流出，顺着大腿根部一路往下，在白色的长筒袜上勾勒出淫靡的花纹。',
      );
      await kitaru.say_and_wait(['啊，嗯嗯，呀嗯，', callname, '！']);
      await kitaru.say_and_wait('要来了！');
      await kitaru.say_and_wait(['去了！', me.get_colored_actual_name(), '！']);
      await era.printAndWait(
        '在一阵抽搐般的痉挛后，些许爱液还是突破内裤的阻拦涌了出来，神社的石板路上出现了一片明显的水渍。',
      );
      era.printButton('「继续吗？」', 1);
      await era.input();
      await kitaru.say_and_wait('诶……嗯！');
      await era.printAndWait('是时候进行下一步了。');
      await era.printAndWait([
        me.get_colored_name(),
        '将',
        kitaru.sex,
        '抵在了道路旁挂着粗壮注连绳的大树上，这过程中也没有停止玩弄',
        kitaru.sex,
        '，水渍一路从石板路的中央断断续续的来到这树前。',
      ]);
      await era.printAndWait([
        '像是要对折般抬起 ',
        kitaru.get_colored_name(),
        ' 匀称的大腿，将阴茎贴在已经湿透的缝隙处，一口气插了进去。',
      ]);
      era.set('status:56:短效避孕药', 1);
      era.set('palam:0:阴茎快感', era.get('tcvar:0:阴茎快感上限'));
      era.set('palam:56:阴道快感', era.get('tcvar:56:阴道快感上限'));
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(56, part_enum.virgin),
        false,
      );
      await kitaru.say_and_wait('哈啊！');
      await era.printAndWait('巫女发出的呻吟声清晰可辨，回荡在无人的神社中。');
      await era.printAndWait([
        '每次抽插，',
        kitaru.get_colored_name(),
        ' 的身体上下移动着。手臂带着宽大的振袖上下翻飞着，如同方才神乐般的舞姿。',
      ]);
      await era.printAndWait([
        '而后又因对快感的祈求而抱紧了 ',
        me.get_colored_name(),
        '，让肉棒得以抽送到更为深处的软肉。',
      ]);
      await kitaru.say_and_wait(['哈……', me.get_colored_actual_name(), '！']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 全身无力地勉强抱着渴求着自己的训练员。',
      ]);
      await era.printAndWait('啪！啪！啪！');
      await era.printAndWait('庄严圣洁的神社内，响起淫荡的啪嗒水声。');
      await era.printAndWait(
        '每一次撞击都会带出体内的爱液，浇灌着巫女背靠着的古树。',
      );
      await era.printAndWait([
        '本来还对这场淫祀有所拘谨的 ',
        kitaru.get_colored_name(),
        '，也在 ',
        me.get_colored_name(),
        ' 的逐步进攻下开始纵情的扭动着腰。',
      ]);
      await kitaru.say_and_wait('感觉好舒服！嗯嗯唔……！');
      await era.printAndWait([
        '露天之下的神社内，',
        me.get_colored_name(),
        ' 与 ',
        kitaru.get_colored_name(),
        ' 如野兽般索求着快感。',
      ]);
      await era.printAndWait('神圣的神社当中，却上演着这么秽亵的一幕。');
      await era.printAndWait([
        '或许正是因为这背德的行为，',
        kitaru.get_colored_name(),
        ' 的腔壁是难以想象的紧致。',
      ]);
      await kitaru.say_and_wait('哦哦……！好……舒服……！');
      await era.printAndWait([
        '每一次摩擦着内侧的腔壁，',
        me.get_colored_name(),
        ' 的阴茎都受到极为强烈的刺激。',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 似乎也是如此感觉，每一次要抽出腰，腔内的软肉死死的缠着 ',
        me.get_colored_name(),
        ' 的肉棒。',
      ]);
      await kitaru.say_and_wait('嗯啊……要，要去了……！');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 的背向后弓了过去，蜜穴猛然的紧缩，给 ',
        me.get_colored_name(),
        ' 带来巨量的快感。',
      ]);
      await era.printAndWait('咕哧——咕哧——');
      await era.printAndWait([
        me.get_colored_name(),
        '的肉棒抵着',
        kitaru.sex,
        '的子宫口倾吐起精液，让本就高潮的 ',
        kitaru.get_colored_name(),
        ' 不断地颤抖着。',
      ]);
      era.add('exp:56:阴道高潮次数', 1);
      era.add('exp:0:阴茎高潮次数', 1);
      era.add('exp:0:射精量', 20);
      await kitaru.say_and_wait('唔呃呃呃呃！！！');
      await era.printAndWait(
        '没有抑制自己的呻吟，淫荡的巫女直截了当的叫出声来。',
      );
      await era.printAndWait(
        '爱液自交合处不断溢出，在神圣的古树下积起了一滩充满背德欲望的水洼。',
      );
      await era.printAndWait(
        '失焦的星星瞳向上翻起，香舌吐出，向此间神社的神灵宣告着这场祭祀的结束。',
      );
      end_ero_and_train();
    }
    flags.wait_flag = get_attr_and_print_in_event(56, attr_change, pt_change);
  };
};
