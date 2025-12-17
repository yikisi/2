const era = require('#/era-electron');

const { get_sex_acceptable } = require('#/system/ero/sys-calc-ero-status');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[95 + 32] = async (
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
    await print_event_name('夏合宿（资深年）结束', urara);
    await urara.say_and_wait([
      callname,
      '，现在的乌拉拉，是不是又变得比以前更强了呢？',
    ]);
    await era.printAndWait([
      '在训练的休息间隙中坐在午后的沙滩上，',
      urara.get_colored_name(),
      ' 与身边的 ',
      me.get_colored_name(),
      ' 一同眺望着刚开始的落下的午后阳光。',
    ]);

    era.printButton('「当然，现在的乌拉拉很强，只是缺少了更重要的东西。」', 1);
    await era.input();

    await era.printAndWait([
      '面对被迫变得坚强了太多的小',
      urara.get_uma_sex_title(),
      '，',
      me.get_colored_name(),
      ' 还是选择了直言不讳。',
    ]);
    await era.printAndWait([
      '现在的 ',
      urara.get_colored_name(),
      ' 已经具备了一切胜利的条件，但 ',
      me.get_colored_name(),
      ' 同样也清楚那件事时至今日都还没结束。',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      ' 现在恢复了原本的状态，却也只是恢复了表面上「能够奔跑」的状态。',
    ]);
    await era.printAndWait([
      '至于 ',
      me.get_colored_name(),
      ' 那天晚上交给',
      urara.sex,
      '的赠言，与其说 ',
      urara.get_colored_name(),
      ' 没听懂，不如说',
      urara.sex,
      '大概还是不相信答案就是如此简单。',
    ]);
    await era.printAndWait([
      '怎么这孩子在奇怪的地方越来越倔强？',
      me.get_colored_name(),
      ' 本想这样抱怨，但又想起，别扭的长大也是成长的一环。',
    ]);
    await era.printAndWait([
      '而听到 ',
      me.get_colored_name(),
      ' 直白的评价，',
      urara.get_colored_name(),
      ' 只是轻轻地点头，随后用比夏日的海风还要轻细的声音开口问道。',
    ]);
    await urara.say_and_wait([callname, '，最近那些事你还记得多少细节呢？']);

    era.printButton('「不可能忘记啊，为什么这么问？是又新发生了什么吗？」', 1);
    await era.input();

    await urara.say_and_wait([
      '……乌拉拉后来找过',
      urara.sex,
      '很久哦，听同学们说，',
      urara.sex,
      '果然去了很远的地方。',
    ]);
    await urara.say_and_wait([
      '但同学们又告诉我，',
      race_infos[race_enum.arim_kin].get_colored_name(),
      ' 的时候，',
      urara.sex,
      '也会为乌拉拉投出一票。',
    ]);
    await urara.say_and_wait(
      '『说了那么多过分的话，我不会求乌拉拉原谅，其实我也真的很希望乌拉拉能登上有马』。',
    );
    await urara.say_and_wait(
      '大家是这样转述给我的，但就算别人这么说，乌拉拉也还是轻视了别人的梦想对吧……',
    );

    era.printButton(
      `「但是既然如此，${urara.sex}应该从一开始就不是故意来责怪乌拉拉的吧？」`,
      1,
    );
    await era.input();

    await urara.say_and_wait(
      '乌拉拉一直是这样想的，但是一定也有更多被我无意间伤害过、并希望我不要再跑的人……',
    );

    era.printButton(
      '「所以说乌拉拉从一开始便没有错，我觉得不要把那些负面情绪揽在自己身上比较好——」',
      1,
    );
    await era.input();

    await urara.say_and_wait(
      '但是就算被否定，乌拉拉也想要承载起他们的笑容，就算对乌拉拉只有恶意也没关系。',
    );
    await urara.say_and_wait(
      '虽然这是从上次比赛结束时刚想好的……嘿嘿～是不是说得太讨人厌了呢？',
    );
    await era.printAndWait([
      '说出令 ',
      me.get_colored_name(),
      ' 也意想不到的答案后，浑身湿漉漉的小',
      urara.get_uma_sex_title(),
      '再次露出平日里越来越少但依旧充满希望的笑容。',
    ]);

    era.printButton('「……这样可爱的讨人厌乌拉拉多来一点也没关系啊。」', 1);
    await era.input();

    await era.printAndWait([
      '直视着依旧隐藏在笑脸下的阴影，',
      me.get_colored_name(),
      ' 有些无奈的将毛巾搭在了',
      urara.get_teen_sex_title(),
      '沾满了水珠的发丝上。',
    ]);

    era.printButton(
      '「但是一味的想要背起太多东西也会坏掉哦？一开始就没做好准备的乌拉拉现在怎么样了？」',
      1,
    );
    await era.input();

    await urara.say_and_wait([
      '诶？',
      callname,
      ' 不要说得和……乌拉拉的朋友一样啊！乌拉拉没关系的——',
    ]);
    await era.printAndWait([
      '好好好，',
      urara.get_colored_name(),
      ' 没关系。揉搓着小',
      urara.get_uma_sex_title(),
      '柔软的耳朵与小脸，',
      me.get_colored_name(),
      ' 悄悄叹了口气。',
    ]);
    await era.printAndWait([
      '又是意料之内的否认，不过也对，如果 ',
      urara.get_colored_name(),
      ' 自己跨不过这道坎，那别人说什么也没有意义。',
    ]);
    await urara.say_and_wait([
      '呜——既然 ',
      callname,
      ' 还是信不过的话……那 ',
      callname,
      ' 就把那天晚上的话记下来吧！',
    ]);
    await era.printAndWait('啊？这是在突然说什么……');
    await urara.say_and_wait([
      '虽然现在还不太明白，但在合适的时候听到 ',
      callname,
      ' 的话，乌拉拉一定可以振作起来的！',
    ]);
    await me.say_and_wait(
      [
        '你那真是不懂吗？合适的时候又是什么时候？不过既然 ',
        urara.get_colored_name(),
        ' 这样说那也一定有',
        urara.sex,
        '的考虑，总之先记下来吧……',
      ],
      true,
    );
    await era.printAndWait(
      '不知不觉中结束了当下的话题，沉默再次笼罩在二人之间，但至少此时此刻，这样的感觉并不坏。',
    );
    await era.printAndWait([
      '只是现在的',
      urara.sex,
      '，究竟在考虑着怎样的将来呢？',
    ]);
    era.drawLine();
    await urara.print_and_wait(
      '不过，现在乌拉拉所思考的事情，也并不会被任何知道的人称赞吧。',
    );
    await urara.print_and_wait([
      '或许现在的乌拉拉真的只是在夺走别人的幸福而已，但是这样的想法，对 ',
      callname,
      ' 说不出口。',
    ]);
    await urara.print_and_wait([
      '一想到 ',
      callname,
      ' 为乌拉拉忧愁的模样，乌拉拉的心里也会充满忧郁，逐渐变得不像自己。',
    ]);
    await urara.print_and_wait([
      '不管乌拉拉对 ',
      callname,
      ' 抱有怎样的感情，乌拉拉都不想远离 ',
      callname,
      '，也更不希望 ',
      callname,
      ' 难过。',
    ]);
    if (era.get('relation:52:0') > 150) {
      await urara.print_and_wait([
        '只要将身体贴在 ',
        callname,
        ' 身上，比想象中还要温暖的感觉就会随着心跳声一点点传到身上。',
      ]);
      await urara.print_and_wait(
        '好安心啊，仿佛现在只要放下自己的愿望，停留在一个人的港湾里，就能安逸的一直睡下去。',
      );
      await urara.print_and_wait([
        '不再需要努力被人认可，也不会再被人责怪，只要沉浸在 ',
        callname,
        '、沉浸在大家的爱里就好……',
      ]);
    } else {
      await urara.print_and_wait([
        '在 ',
        callname,
        ' 的身边蜷起身子，就能感受到另一人的体温与心跳。',
      ]);
      await urara.print_and_wait([
        callname,
        ' 的怀中一定十分安心吧，那里会有乌拉拉的位置吗？能让乌拉拉安心睡着的地方？',
      ]);
      await urara.print_and_wait([
        '只要做出取舍，就能得到 ',
        callname,
        ' 的爱吧？只要不去在意，大家也都会继续支持着乌拉拉吧……',
      ]);
    }
    await urara.print_and_wait([
      '但是这样做一定是不对的，因为这既辜负了 ',
      callname,
      ' 和大家，自己也一定会后悔。',
    ]);
    await urara.print_and_wait([
      '如果，乌拉拉能变成和 ',
      callname,
      ' 一样可靠的大人就好了，',
      callname,
      ' 的话，一定能比乌拉拉做得更好吧。',
    ]);
    await urara.print_and_wait(
      '好累啊，可是乌拉拉还不能停下，所以只要一下就好，让乌拉拉更多依靠一下吧，所以……',
    );
    await urara.say_and_wait([
      callname,
      '，在回去前……乌拉拉可以拥有一个『大人的拥抱』吗？',
    ]);
    if (era.get('love:52') >= 50) {
      await urara.print_and_wait([
        '听到乌拉拉突然的请求，',
        callname,
        ' 在一瞬间皱了下眉，表情似乎有些动摇。是乌拉拉的要求太过分了吗？',
      ]);

      era.printButton('「乌拉拉，果然你还是……」', 1);
      await era.input();

      await urara.print_and_wait([
        '嗯？难道说 ',
        callname,
        ' 早就明白乌拉拉的想法了？不过这些都不重要呢——',
      ]);
      await urara.print_and_wait(
        '因为我们已经不再是普通的关系，而现的在乌拉拉也不再是以前单纯的小孩子了；',
      );
      await urara.print_and_wait([
        '因为 ',
        callname,
        ' 还没来得及说出拒绝，而现在的乌拉拉也不会让 ',
        callname,
        ' 轻易拒绝得了。',
      ]);
    } else {
      await urara.print_and_wait([
        '听到乌拉拉突然的请求，',
        callname,
        ' 果然被吓了一跳，就算是真正的情侣，也不会提这么唐突的要求吧。',
      ]);

      era.printButton('「乌拉拉，就算是这样也太……！」', 1);
      await era.input();

      await urara.print_and_wait([
        '诶？',
        callname,
        ' 难道已经看穿乌拉拉的想法了？不过这些都不重要呢——',
      ]);
      await urara.print_and_wait([
        '如果是 ',
        callname,
        ' 的话，这样做乌拉拉也觉得没关系，所以乌拉拉的话，也是绝对不会让 ',
        callname,
        ' 拒绝的。',
      ]);
      await urara.print_and_wait([
        '就算不是情侣也没关系，让乌拉拉知道……',
        callname,
        ' 有多喜欢自己的担当吧？',
      ]);
    }
    await urara.print_and_wait(
      '没关系的，从现在开始，乌拉拉会为了所有人的幸福继续前进，所以至少现在，请抱紧乌拉拉吧……',
    );
    await urara.say_and_wait(
      '乌拉拉会好起来的哦？很快就会好起来的……所以，就先从抱抱开始吧？',
    );
    await urara.print_and_wait([
      '明明只是伸出一只手指轻轻地抵住 ',
      callname,
      ' 欲言又止的嘴唇，',
      callname,
      ' 就立刻失去了抵抗力呢。',
    ]);
    await urara.print_and_wait([
      '因为只是 ',
      callname,
      ' 和担当间的抱抱，所以就算在大庭广众下坐在沙滩上亲密的相拥也没关系哦？',
    ]);
    await urara.print_and_wait([
      '从正面跨坐在 ',
      callname,
      ' 的腿上，轻轻环住对方因紧张而僵硬的脖颈，乌拉拉将身体与 ',
      callname,
      ' 紧紧贴合着。',
    ]);
    await urara.print_and_wait([
      callname,
      ' 一定很快就会焦躁起来吧，因为在一层薄薄的布料后，就是担当柔软的一切。',
    ]);
    await urara.print_and_wait([
      '啊，是因为被大人的气味影响了吗？乌拉拉就连胸前的那两个地方也凸出来了呢……',
    ]);
    await urara.print_and_wait(
      '但是还不可以哦？因为就和平常每天都会做无数次的「抱抱」而已，所以不可以做出格的事哦？',
    );
    await urara.print_and_wait(
      '乌拉拉就算身体已经烫得头晕了也在继续忍耐哦？亲亲也不行！因为，会被人看到的嘛～',
    );
    if (era.get('talent:52:乳房尺寸') > 0) {
      await urara.print_and_wait([
        '将两颗丰硕柔软的果实在 ',
        callname,
        ' 身上轻柔的按压，酥麻的快感就会从挺起的尖端不断传遍全身。',
      ]);
      await urara.print_and_wait([
        callname,
        ' 也很喜欢这个对吧？自从变得这么大后，',
        callname,
        ' 的目光总会在乌拉拉的这个地方停很久呢。',
      ]);
      await urara.print_and_wait(
        '所以摸摸看吧？装作无意的样子把手搭在乌拉拉的胸前，再趁周围没有视线的时候悄悄挤下去……',
      );
      await urara.print_and_wait([
        '哈嗯～！竟然连奶水都被挤出来了……真是的，这么用力，',
        callname,
        ' 明明已经不是小孩子了！',
      ]);
    }
    if (me.sex_code > 0) {
      await urara.print_and_wait([
        '啊，好像有什么硬硬的东西顶到乌拉拉的肚子了……就和其他人说得一样，',
        callname,
        ' 是个色鬼呢～',
      ]);
      await urara.print_and_wait(
        '乌拉拉知道哦？只要用手轻轻揉一揉的话，乌拉拉就会被白色的东西弄得全身脏兮兮的。',
      );
      await urara.print_and_wait([
        '但是当众挑衅大人是不可以的呢，所以就算 ',
        callname,
        ' 现在开口要求，乌拉拉也不会去碰一下哦？',
      ]);
    }
    if (me.sex_code - 1) {
      await urara.print_and_wait([
        '现在就连 ',
        callname,
        ' 的胸部也挺起来了，在贴上去咬 ',
        callname,
        ' 的脖子时，刚好可以感受到柔软呢。',
      ]);
      await urara.print_and_wait(
        '而且用牙齿与嘴唇在胸口和脖颈间留下记号时也不用担心被别人看到，但发出的声音太大就不好了哦？',
      );
      await urara.print_and_wait([
        '不过如果乌拉拉偷偷咬住 ',
        callname,
        ' 胸前的两颗小豆子的话，',
        callname,
        ' 又会发出什么可爱的声音呢？',
      ]);
    }
    await urara.print_and_wait([
      callname,
      ' 的脸上的恍惚是惊愕多一些还是害怕多一些呢？只是不论如何，',
      callname,
      ' 都已经没法开口说话了。',
    ]);
    await urara.print_and_wait([
      '而且 ',
      callname,
      ' 说不出话来，自然也就不会拒绝乌拉拉的任何请求，嘿嘿～乌拉拉真是天才呢～',
    ]);
    await urara.print_and_wait([
      '不过到底过了多久呢？乌拉拉与 ',
      callname,
      ' 缠绵到几乎黏在一起的身体终于恋恋不舍的分开了。',
    ]);
    await urara.print_and_wait([
      '然而就算索取暂时停止，',
      callname,
      ' 眼中映出的那双充满情欲的樱瞳依旧在夕阳下燃烧的正旺……',
    ]);
    await urara.print_and_wait([
      '既然 ',
      callname,
      ' 没能说出拒绝，那乌拉拉也不会让',
      urara.sex,
      '的 ',
      callname,
      ' 这么轻易逃走。',
    ]);
    await urara.say_and_wait([
      callname,
      '，乌拉拉真的好奇怪，所以在乌拉拉恢复正常之前，请继续给乌拉拉无偿的爱吧？',
    ]);
    await urara.say_and_wait(
      '就像初次相遇时的那样……把乌拉拉，满足成那个没有忧虑的好孩子吧……？',
    );
    await urara.say_and_wait([
      callname,
      '，要一起去大家看不见的地方吗？不过现在的话，允许 ',
      callname,
      ' 拒绝哦……？',
    ]);
    me.say('……');
    era.printButton(`就算答应${urara.sex}也没关系吧……（爱慕+10）`, 1, {
      disabled: get_sex_acceptable(52) < 0,
    });
    era.printButton(`现在推开${urara.sex}还来得及……（好感+20）`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await urara.say_and_wait([
        '嘿嘿～',
        callname,
        ' 果然没能拒绝呢，那么和乌拉拉来吧？',
      ]);
      await urara.print_and_wait([
        '于是，将没能说出拒绝的 ',
        callname,
        ' 拉到了无人的角落里，乌拉拉轻轻剥开了身上轻薄的泳衣。',
      ]);
      if (urara.sex_code - 1) {
        if (era.get('exp:52:性爱次数') >= 10) {
          await urara.print_and_wait([
            '不知不觉下面已经湿透了呢，但是就算乌拉拉变得再好色，',
            callname,
            ' 也不会拒绝的对吧？',
          ]);
          await urara.print_and_wait([
            '没错，不管是只为取悦爱人的技巧，还是看见喜欢的人就变得笨笨的脑袋，都是 ',
            callname,
            ' 期望的样子哦？',
          ]);
          await urara.print_and_wait([
            '看吧？不管是被看着就会隔着衣服翘起的乳首，还是现在就滴答个不停的幼穴，都是 ',
            callname,
            ' 害的……',
          ]);
        } else {
          await urara.print_and_wait([
            '只是被 ',
            callname,
            ' 看着，下面就湿得好厉害，',
            callname,
            ' 到底要把乌拉拉变成什么样子呢？',
          ]);
          await urara.print_and_wait([
            '不过既然 ',
            callname,
            ' 喜欢的话，不管想要乌拉拉哪里，都可以把它们变成 ',
            callname,
            ' 的最喜欢的玩具哦？',
          ]);
          await urara.print_and_wait(
            '因为乌拉拉也已经决定了，乌拉拉想要把自己的身体，献给亲自培养它的变态大人……',
          );
        }
        await urara.print_and_wait([
          '在赤身裸体中向 ',
          callname,
          ' 张开怀抱，乌拉拉学着妈妈的样子将想要被浇灌的孩子抱在了怀中。',
        ]);
        await urara.print_and_wait([
          '所以……',
          callname,
          ' 想要撒娇的话，就趁着乌拉拉恢复正常前，快点抱住乌拉拉吧？',
        ]);
        urara.sex_code - 1 &&
          (await urara.print_and_wait([
            '把只因 ',
            callname,
            ' 而娇吟的双唇，只让 ',
            callname,
            ' 肆意玩弄的双穴，只会为 ',
            callname,
            ' 受孕的子宫……',
          ]));
        await urara.print_and_wait([
          '要把只属于 ',
          callname,
          ' 的身体的每一寸，全部都填满哦？',
        ]);
      }
      await quick_into_sex(52);
    } else {
      await urara.say_and_wait([
        '……嘿嘿～',
        callname,
        ' 竟然拒绝了呢？大人总有着奇奇怪怪的原则呢……',
      ]);
      await urara.say_and_wait(
        '不过既然这样的话，为了补偿乌拉拉，我们再继续拥抱吧？',
      );
      await urara.print_and_wait([
        '虽然被 ',
        callname,
        ' 出乎意料的拒绝了，但能看到 ',
        callname,
        ' 脸上更加错愕的表情，乌拉拉还是满意的笑了。',
      ]);
      await urara.print_and_wait([
        '为了报复拒绝乌拉拉的 ',
        callname,
        '，直到怠惰的太阳落下之前，乌拉拉都不会放开。',
      ]);
      await urara.print_and_wait('直到乌拉拉恢复正常前，都不会放开哦……');
    }
    era.drawLine();
    await in_urara.say_as_unknown_and_wait('……');
    era.println();
    let wait_flag = get_attr_and_print_in_event(
      52,
      new Array(5).fill(5),
      0,
      undefined,
      true,
    );
    wait_flag =
      sys_like_chara(52, 0, 20 * (ret === 2), true, 10 * (ret === 1)) ||
      wait_flag;
    wait_flag && (await era.waitAnyKey());
  };

  handlers[95 + 46] = async (
    urara,
    me,
    in_urara,
    callname,
    edu_marks,
    event_object,
  ) => {
    if (edu_marks.loop > 0) {
      const attr_cache = new Array(5)
        .fill(0)
        .map((_, i) => era.get(`base:52:${5 + i}`));
      // CFLAGNAME:40 = 干劲
      const motivation_cache = era.get('cflag:52:40');
      if (await era.loadData(52)) {
        CustomizedEdu.load_game();
      }
      attr_cache.forEach((e, i) => era.set(`base:52:${5 + i}`, e));
      era.set('cflag:52:40', motivation_cache);
      new UraraEduMarks().loop--;
      add_event(event_hooks.week_start, event_object);
      return true;
    }
  };

  handlers[95 + 47] = async (urara, me, in_urara, callname, edu_marks) => {
    await print_event_name(
      [
        '「',
        { color: urara.color, content: urara.sex },
        { color: in_urara.color, content: '们' },
        '」的礼物',
      ],
      urara,
    );
    await era.printAndWait([
      '今天的 ',
      me.get_colored_name(),
      '，不知何时又站到了「',
      in_urara.get_colored_name(),
      '」心中的那片草场之中。',
    ]);
    await era.printAndWait(
      '往日的雾霭已经消散，夜空无云，一片夜紫色的清朗中星空璀璨，而星光下的人仿佛站在世界中央。',
    );
    await era.printAndWait([
      '顺着奔跑声回首望去，明亮的月光下，两名容貌相仿的',
      urara.get_teen_sex_title(),
      '似乎早已在此等候多时。',
    ]);
    era.drawLine();
    await urara.say_and_wait([
      callname,
      '！你也来了啊！嘿嘿～一起躺下吧，草地上一点也不冷，很舒服哦！',
    ]);
    await urara.say_and_wait(
      '现在我们的心里很漂亮对吧？该怎么说呢？那个……那个……',
    );
    await in_urara.say_as_unknown_and_wait(
      '修饰的语句和描写的辞藻都不需要哦？不过以前的确完全没发现这里会这么漂亮……',
    );
    await urara.say_and_wait(
      '因为大家的心情都很好对吧？就像……就像有马之后是圣诞节！真期待呢～',
    );
    await in_urara.say_as_unknown_and_wait([
      '虽然很让人期待但我们的主角一点紧张感都没有……感觉能赢吗，',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '？',
    ]);
    await urara.say_and_wait(
      '我不知道哦，因为大家都很强！但就算赢不了，乌拉拉也一定会去奔跑！',
    );
    await in_urara.say_as_unknown_and_wait(
      '嗯嗯，说的也是。毕竟哪怕是现在，大家也不全会对『乌拉拉能赢』抱有期望。',
    );
    await in_urara.say_as_unknown_and_wait(
      '但这并非独自奔跑的故事，不止是您与我，被乌拉拉串连的所有人都在期待着这一刻。',
    );

    in_urara.say_as_unknown([
      '所以……训练员',
      me.get_adult_sex_title(),
      '，不管怎样，请您说些什么吧？',
    ]);
    const attr_change = new Array(5).fill(0);
    era.printButton(
      '「一直以来都是这样吧，比起相信奇迹会降临，还是乌拉拉的成长更加可靠。」（全属性+5）',
      1,
    );
    era.printButton(
      '「你们已经拥有了这片漂亮的草场对吧？所以接下来，只要继续前进就好。」（草地适性提升）',
      2,
    );
    era.printButton(
      '「运气与奇迹也是实力的一部分，剩下的不足，就用勇气来补足吧！」（中&长距离适性提升）',
      3,
    );
    switch (await era.input()) {
      case 1:
        attr_change.fill(5);
        break;
      case 2:
        edu_marks.gad++;
        break;
      case 3:
        edu_marks.dad++;
    }
    await urara.say_and_wait([
      '是这样吗？不过既然是 ',
      callname,
      ' 的建议，那乌拉拉一定没问题！',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '就是如此，不管相交后的道路愉快与否，头顶那片相连的星空已然变成了前进的蓝图……',
    );
    await in_urara.say_as_unknown_and_wait(
      '……唉，要是我也能更早的明白这点，乌拉拉会不会少走更多的弯路——',
    );
    await urara.say_and_wait(
      '好！不准再想了！真是的，不可以再消沉下来了哦？明明好不容易才到圣诞节的！',
    );
    if (RaceHistory.get(52).get_result(47 + 48)?.race === race_enum.arim_kin) {
      await urara.say_and_wait(
        '哼哼～关于圣诞节礼物呢！虽然已经送过一次了，但乌拉拉觉得没问题！',
      );
      await urara.say_and_wait(
        '虽然不知道这次能不能拿到第一名，但是我想大家都会开心的——',
      );
    } else {
      await urara.say_and_wait('所以圣诞节，我也有给大家准备礼物哦？');
      await urara.say_and_wait([
        '虽然现在还不能给你，但是 ',
        callname,
        ' 明天一定能看到的——',
      ]);
    }
    await urara.say_and_wait([
      '『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '上的奔跑』，乌拉拉想将这份礼物送给 ',
      callname,
      '，也送给所有人！',
    ]);
    if (era.get('love:52') >= 50) {
      await in_urara.say_as_unknown_and_wait([
        '难得是圣诞节，我还以为小乌拉拉会单独送些特别的礼物给自己的训练员',
        me.get_adult_sex_title(),
        '呢？',
      ]);
      await urara.say_and_wait([
        '嗯！因为乌拉拉已经是 ',
        callname,
        ' 的所有物了嘛，所以只能送些『身体之外』的东西了哦？',
      ]);
      await in_urara.say_as_unknown_and_wait(
        '噗……咳咳！这、这个说法？！虽然并非一无所知，但熟视无睹我果然还是做不到！',
      );
      await urara.say_and_wait(
        '嘻嘻～明明都过了这么久了，『乌拉拉』还是这么纯情，到底是怎么回事呢～？',
      );
      await in_urara.say_as_unknown_and_wait(
        '用不着你来告诉我！为什么小乌拉拉现在会变成这样啊？！',
      );
    } else {
      await in_urara.say_as_unknown_and_wait([
        '结果是送给大家共同的礼物呢，不过难得是圣诞节，不单独给 ',
        callname,
        ' 送些什么吗？',
      ]);
      await urara.say_and_wait([
        '诶？唔……想不出来要送什么呢！对了，乌拉拉把自己送给 ',
        callname,
        ' 不就好了！',
      ]);
      await in_urara.say_as_unknown_and_wait(
        '等等等等下！这个礼物就算是妈妈同意我也不会同意哦？这对乌拉拉来说还太早了……',
      );
      await urara.say_and_wait(
        '可我已经不是小孩子了哦？而且到底什么太早了？难道『乌拉拉』在想色色的事？',
      );
      await in_urara.say_as_unknown_and_wait(
        '噗咳……！你、你在说什么啊小乌拉拉，我才不会这样啊！',
      );
    }
    in_urara.say_as_unknown([
      '训练员',
      me.get_adult_sex_title(),
      '，您倒是也说说话啊——',
    ]);
    era.printButton('「……不也挺好嘛？」（爱慕+5）', 1);
    era.printButton('「……关系真好啊？」（好感+10）', 2);
    const ret = await era.input();
    await in_urara.say_as_unknown_and_wait([
      '训练员',
      me.get_adult_sex_title(),
      '（您）——！！',
    ]);
    era.drawLine();
    await era.printAndWait([
      '从压抑着行为的「',
      in_urara.get_colored_name(),
      '」解放本心开始，两马一人的打闹声便在空旷的草场上持续了相当之久。',
    ]);
    await era.printAndWait(
      '而直到尽兴为止，三人才筋疲力竭的并排躺在了不变的夜空之下，一同沉入了令人安心的深色。',
    );
    await era.printAndWait([
      '在这时间都失去意义的星空与草原之中，在樱与褐的「',
      urara.sex,
      '们」之间，',
      me.get_colored_name(),
      ' 倾听着两位',
      urara.get_teen_sex_title(),
      '的平静的吹息。',
    ]);
    await era.printAndWait(
      '樱色的呼吸声正逐渐转向平稳，但另一侧迟迟不愿睡去的褐色却仿佛传来着轻声地呼唤。',
    );
    await era.printAndWait([
      me.get_colored_name(),
      ' 再次睁开眼睛，稍显褪色的「',
      urara.sex,
      '」，正用虽然没有花朵但拾回明亮的目光守望着身边的人……',
    ]);
    era.println();

    await in_urara.say_as_unknown_and_wait(
      '啊哈，抱歉，我只是稍微有点……失眠？',
    );
    await in_urara.say_as_unknown_and_wait(
      '乌拉拉睡着了啊，所以我想和您单独聊聊……啊，不用起身，没关系的，躺着听就好。',
    );
    await in_urara.say_as_unknown_and_wait(
      '不过，跟一直在添麻烦的我独处，您的心情应该算不上有多好……',
    );
    await in_urara.say_as_unknown_and_wait(
      '但就算这样，我也从来没向您说过谎，包括我从最初就爱着您这件事。',
    );
    await in_urara.say_as_unknown_and_wait(
      '至于为什么……我也不知道啊，可能比起爱，更像是出自灵魂的本能？',
    );
    await in_urara.say_as_unknown_and_wait(
      '听上去很可笑对吧？无法长久的陪伴在您身边的『春乌拉拉』的爱有什么意义？',
    );
    await in_urara.say_as_unknown_and_wait(
      '就连说出后也无法回应您，甚至在这之后都无法得到您的回应……',
    );
    await in_urara.say_as_unknown_and_wait(
      '明明连节日礼物都无法准备，即使只是缥缈的旁观与虚无的互动，依旧能称得上爱吗？',
    );
    await in_urara.say_as_unknown_and_wait(
      '……结果还是答不上呢，现在的我，并不比最初与我相遇的您清醒多少。',
    );
    await in_urara.say_as_unknown_and_wait(
      '但是我唯一知道的答案是，就算毫无意义，这份爱慕也是独一无二的。',
    );
    await in_urara.say_as_unknown_and_wait(
      '甚至与您身边的小乌拉拉无关。我并非主角，但这是只属于我，也只会投向您的感情。',
    );
    if (era.get('relation:52:0') > 150) {
      await in_urara.say_as_unknown_and_wait(
        '最初和乌拉拉一同相遇的您，守望乌拉拉奔跑的您，与乌拉拉一同拯救我的您……',
      );
      await in_urara.say_as_unknown_and_wait(
        '奇迹真的出现了，美好到就像做梦一样，也让人害怕某天会突然孤身一人的醒来。',
      );
      await in_urara.say_as_unknown_and_wait(
        '所以梦醒之前，一定要把心意正式传达出来，就算被拒绝也没关系。',
      );
    } else {
      await in_urara.say_as_unknown_and_wait(
        '就算是擅自选中了您，就算一路以来遍地都是错误，您与乌拉拉在最后还是拯救了我。',
      );
      await in_urara.say_as_unknown_and_wait(
        '三年中我的确很多次的思考为何会选择您，但现在看来，一切都是值得被爱的。',
      );
      await in_urara.say_as_unknown_and_wait(
        '所以如果能将心意正式传达，就算在某天梦会醒来，也不会变回厌世的模样。',
      );
    }
    await in_urara.say_as_unknown_and_wait(
      '哪怕只是被灵魂的鼓动所怂恿，还会被您所嫌恶虚情假意也好，我都想对您再说一次。',
    );
    await in_urara.say_as_unknown_and_wait(
      '或许在圣人的纪念日，这份无法言喻的感情即使虚假，也应当可以得到特赦吧？',
    );
    await in_urara.say_as_unknown_and_wait('那么再来一次，请听我说……');
    era.println();
    await in_urara.say_as_unknown_and_wait(
      '这不是第一次，大概也不是最后一次，但是……',
    );
    await in_urara.say_as_unknown_and_wait([
      '训练员',
      me.get_adult_sex_title(),
      '，我爱着您。',
    ]);
    era.println();
    let wait_flag = get_attr_and_print_in_event(
      52,
      attr_change,
      0,
      undefined,
      true,
    );
    wait_flag =
      sys_like_chara(52, 0, 10 * (ret === 2), true, 5 * (ret === 1)) ||
      wait_flag;
    wait_flag && (await era.waitAnyKey());
  };
};
