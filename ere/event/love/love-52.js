/**
 * @file 春乌拉拉 - 爱慕
 * @author 99
 */
const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const Love52AfterWife = require('#/event/love/love-events-52/after-wife');
const print_event_name = require('#/event/snippets/print-event-name');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const UraraLifeMarks = require('#/data/event/life-event-marks/life-event-marks-52');

module.exports = class extends Love52AfterWife {
  async 99(urara, me, callname) {
    const { relation, in_urara } = this.get_event_vars();
    await print_event_name('大人心房的钥匙', urara);
    await in_urara.say_as_unknown_and_wait(
      '钥匙是个方便的好东西，可以开启什么，也可以锁住什么。',
    );
    await in_urara.say_as_unknown_and_wait(
      '但一把钥匙，往往只能打开相配的锁。',
    );
    await in_urara.say_as_unknown_and_wait(
      `所以是要将钥匙亲手交给${urara.sex}，还是等${urara.sex}一点点偷走您的钥匙呢？`,
    );
    await in_urara.say_as_unknown_and_wait('……嗯？好像区别也不大？');
    era.drawLine();

    await era.printAndWait([
      '看到坐在熟悉的地方安静沉睡的担当，',
      me.get_colored_name(),
      ' 适当的放慢了脚步。',
    ]);
    await era.printAndWait([
      '散开长发的小小',
      urara.get_uma_sex_title(),
      '借着温暖的阳光，肆无忌惮地横躺在长椅上安静地沉睡着。',
    ]);
    await era.printAndWait([
      '最近又熬夜了？还是努力过头了？就算 ',
      me.get_colored_name(),
      ' 坐到',
      urara.sex,
      '身边，小',
      urara.get_uma_sex_title(),
      '塌下的耳朵也没有要竖起的迹象。',
    ]);
    await era.printAndWait([
      '就像最初相遇时那样，哪怕不再纯洁，',
      urara.get_colored_name(),
      ' 依旧像还没长大的孩子般且毫无防备。',
    ]);
    await era.printAndWait([
      '可就算「小红帽」相信别人不会伤害',
      urara.sex,
      '，最亲近的训练员也早就被',
      urara.sex,
      '纯洁的诱惑变成「大灰狼」了。',
    ]);
    await era.printAndWait(
      '遮掩在整齐的校服下，尚未完全成熟的幼小身体实际早就觉醒了追寻快乐的本能。',
    );
    await era.printAndWait(
      '饱满圆润的樱唇随着呼吸起伏放松地微张着，仿佛是在等待着谁来品尝的熟成浆果。',
    );
    await era.printAndWait([
      '面对在朝夕相处中自由炫耀身体的「坏',
      urara.get_child_sex_title(),
      '」，身为大人的理智也逐渐失去了控制。',
    ]);
    await era.printAndWait([
      '捉住了那对纤细的手腕，',
      me.get_colored_name(),
      ' 报复性的将 ',
      urara.get_colored_name(),
      ' 盖在身下，向诱人的',
      urara.sex,
      '逐渐压下身体。',
    ]);
    await urara.say_and_wait([
      '……',
      callname,
      '，虽然乌拉拉不介意，但在这里做的话，会被发现哦？',
    ]);
    era.println();
    if (relation > 150) {
      await era.printAndWait([
        '被 ',
        me.get_colored_name(),
        ' 压在长椅上的 ',
        urara.get_colored_name(),
        ' 不知何时已经醒了，但没有一点反抗，甚至顺从着 ',
        me.get_colored_name(),
        ' 再次眯起了眼睛。',
      ]);
      await urara.say_and_wait([
        '不过 ',
        callname,
        ' 很想要的话，乌拉拉的感受和身体全都不用在意哦？',
      ]);
      await era.printAndWait([
        '迷蒙的双眼因逐渐升温的身体湿润起来，散开樱发的',
        urara.sex,
        '散发着仿佛能接纳 ',
        me.get_colored_name(),
        ' 的一切的母性。',
      ]);
      await urara.say_and_wait([
        '现在的乌拉拉，随时欢迎 ',
        callname,
        ' 的全部哦？',
      ]);
    } else {
      await era.printAndWait([
        '小',
        urara.get_uma_sex_title(),
        '紧张地注视着想要侵犯',
        urara.sex,
        '的 ',
        me.get_colored_name(),
        '，但仅象征性的挣扎后就将脸转向一侧，任 ',
        me.get_colored_name(),
        ' 摆弄着',
        urara.sex,
        '的身体。',
      ]);
      await urara.say_and_wait([
        '……没关系，不管做什么我都会忍住的，',
        callname,
        ' 要快一点哦？',
      ]);
      await era.printAndWait([
        '眼角因紧张变得湿润，但小小的',
        urara.get_uma_sex_title(),
        '还是强迫身体做好了被粗暴侵犯的心理准备。',
      ]);
      await urara.say_and_wait('只是一次的话，什么都能接受哦？');
    }

    era.printButton('「！」', 1);
    await era.input();

    await era.printAndWait([
      '在 ',
      urara.get_colored_name(),
      ' 献身的低语中，企图将溢出的欲望施加在无辜恋人身上的 ',
      me.get_colored_name(),
      ' 反而找回了一些理智。',
    ]);
    await era.printAndWait([
      '只是在 ',
      me.get_colored_name(),
      ' 犹豫着要跟担当说什么时，',
      urara.get_colored_name(),
      ' 却在发现 ',
      me.get_colored_name(),
      ' 的迟疑后安心地轻笑起来。',
    ]);
    await urara.say_and_wait([
      '恢复精神了吗 ',
      callname,
      '？最近又累了吧？乌拉拉真的不要紧呦！',
    ]);
    await era.printAndWait([
      '没有接过 ',
      me.get_colored_name(),
      ' 的沉默，维持着被恋人压倒的样子，',
      urara.get_colored_name(),
      ' 寂寞地说起了看似无关的话题。',
    ]);
    await urara.say_and_wait([
      '虽然乌拉拉还没有好好成为大人，但 ',
      callname,
      ' 可以将『大人的钥匙』交给乌拉拉吗？',
    ]);

    era.printButton('「『大人的钥匙』？」', 1);
    await era.input();

    await urara.say_and_wait([
      '嗯！因为最近有位与自己的训练员没那么亲近的同学，竟然拿到训练员的钥匙了。',
    ]);
    await urara.say_and_wait([
      '可就在乌拉拉也觉得惊奇的时候，',
      urara.sex,
      '却对乌拉拉说了意想不到的话——',
    ]);
    await urara.say_and_wait(
      '『和训练员要好的乌拉拉竟然没得到邀请吗？看来乌拉拉还在被当成小孩子呢！』',
    );
    await era.printAndWait([
      '短暂的一顿，小',
      urara.get_uma_sex_title(),
      '的笑容中竟融进了与稚嫩的脸庞所不符的复杂情感。',
    ]);
    await urara.say_and_wait([
      '所以乌拉拉在想啊，是不是直到现在，乌拉拉都还在被 ',
      callname,
      ' 当成小孩子？',
    ]);
    await urara.say_and_wait([
      '最喜欢 ',
      callname,
      ' 的乌拉拉，什么时候才能被 ',
      callname,
      ' 迎进房间里？',
    ]);
    await urara.say_and_wait(['还是就算被 ', callname, ' 压倒，乌拉拉也……']);
    await era.printAndWait([
      '凝视着',
      urara.get_teen_sex_title(),
      '变得焦急又伤感的眼神，',
      me.get_colored_name(),
      ' 终于理解了 ',
      urara.get_colored_name(),
      ' 想要表达的前因后果。',
    ]);
    await era.printAndWait([
      '体能超群的',
      urara.get_uma_sex_title(),
      '们不会被区区门窗所阻拦，从对方那里拿到的物件对',
      urara.sex,
      '们来说也更多的是象征意义。',
    ]);
    await era.printAndWait([
      '但即使能够无需承担后果的行动，',
      urara.get_colored_name(),
      ' 也想要尊重 ',
      me.get_colored_name(),
      ' 的选择。',
    ]);
    await era.printAndWait([
      urara.get_teen_sex_title(),
      '一直等待着最喜欢的 ',
      callname,
      ' 主动邀请',
      urara.sex,
      '的那一天，而现在 ',
      me.get_colored_name(),
      ' 已经让',
      urara.sex,
      '等得太久了。',
    ]);

    in_urara.say_as_unknown(
      `此时此刻，钥匙就在训练员${me.get_adult_sex_title()}自己手中——`,
    );
    era.printButton(
      `「对不起忘记了重要的事，让${sys_get_callname(0, 52)}久等了……」（好感+10）`,
      1,
    );
    era.printButton('「当然没那回事，只是现在还不是时候……」', 2);
    const ret = await era.input();

    await era.printAndWait([
      '只是在 ',
      me.get_colored_name(),
      ' 还没说出口，',
      urara.get_colored_name(),
      ' 就探出身子，用肌肤相亲堵住了 ',
      me.get_colored_name(),
      ' 的答案。',
    ]);
    await era.printAndWait([
      '没有撬开 ',
      me.get_colored_name(),
      ' 的牙齿，也没有挣脱 ',
      me.get_colored_name(),
      ' 的双手，只是简单的双唇交叠，',
      urara.get_colored_name(),
      ' 就拦住了 ',
      me.get_colored_name(),
      ' 全部的退路。',
    ]);
    await era.printAndWait([
      '明明只过了几秒的亲热却仿佛延长了几个世纪，而 ',
      me.get_colored_name(),
      ' 在这漫长的一瞬中也放开了 ',
      urara.get_colored_name(),
      ' 的身体。',
    ]);
    await era.printAndWait([
      '随着两人略带余韵的缓缓分开，钥匙也在不知不觉中被 ',
      me.get_colored_name(),
      ' 拿在了手中。',
    ]);
    await era.printAndWait([
      '在短暂的沉默后，与 ',
      urara.get_colored_name(),
      ' 交换了心意的 ',
      me.get_colored_name(),
      ' 终于下定决心，将钥匙推到了 ',
      urara.get_colored_name(),
      ' 面前。',
    ]);
    begin_and_init_ero(0, 52);
    await quick_make_love(
      new EroParticipant(52, part_enum.mouth),
      new EroParticipant(0, part_enum.mouth),
      false,
    );
    end_ero_and_train();

    if (ret === 1) {
      await urara.say_and_wait(['——谢谢 ', callname, '！']);
      await era.printAndWait([
        '在 ',
        me.get_colored_name(),
        ' 递出钥匙的瞬间，',
        urara.get_colored_name(),
        ' 也心照不宣的与 ',
        me.get_colored_name(),
        ' 同时伸出了手。',
      ]);
      await era.printAndWait([
        '笑着接过 ',
        me.get_colored_name(),
        ' 的钥匙，小',
        urara.get_uma_sex_title(),
        '像攥着宝物般紧紧地攥着一把普通到不能再普通的钥匙。',
      ]);
      await era.printAndWait([
        '看着露出欣喜的表情的 ',
        urara.get_colored_name(),
        '，',
        me.get_colored_name(),
        ' 也放松下来，伸手摸了摸小',
        urara.get_uma_sex_title(),
        '散开的发丝。',
      ]);
      await era.printAndWait(
        '或许在未来的某一天，在清晨就能看到在厨房忙碌的樱粉色也说不定；',
      );
      await era.printAndWait(
        '或许在未来的某一天，归家后就能看到来迎接自己的樱粉色也说不定……',
      );
      await era.printAndWait([
        '确实是个很美好的未来没错，现在唯一的遗憾，也只有 ',
        me.get_colored_name(),
        ' 并不确定家门的备用钥匙还在不在原处……',
      ]);
      await urara.say_and_wait([
        '诶嘿嘿～而且这样就能也向大家炫耀一下了！而且 ',
        callname,
        ' 的房间里一定也有很多很棒的东西吧！',
      ]);
      await era.printAndWait('哎，原来还有这层目的在里面吗？');
      await era.printAndWait([
        '在后来的日子里，',
        me.get_colored_name(),
        ' 似乎也因为将钥匙交给 ',
        urara.get_colored_name(),
        ' 的事情被很多人指指点点了。',
      ]);
      await era.printAndWait('至于缘由……放在心里就好吧。');
      await sys_love_uma_in_event(52);
      sys_like_chara(52, 0, 10) && (await era.waitAnyKey());
    } else {
      await urara.say_and_wait([
        callname,
        ' 也有 ',
        callname,
        ' 的考虑，乌拉拉明白的！不过以后要多陪陪乌拉拉哦？',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 笑着推开了 ',
        me.get_colored_name(),
        ' 递来的钥匙，小手也攀上了 ',
        me.get_colored_name(),
        ' 变得略显失落的脸。',
      ]);
      await urara.say_and_wait(['而且呢，', callname, ' 还是笑起来更好看！']);
      await era.printAndWait([
        '小',
        urara.get_uma_sex_title(),
        '还是接受了最初那个被 ',
        callname,
        ' 拒绝的结果，笑着重新扎起了马尾。',
      ]);
      await urara.say_and_wait('接下来一起去训练吧！今天要做什么呢？');
      await era.printAndWait([
        '即使被重要的人拒绝了，',
        urara.get_colored_name(),
        ' 却还在一如既往的笑着，想要让喜欢的人不必为',
        urara.sex,
        '感到担心。',
      ]);
      await era.printAndWait(
        '不管怎样，即使未来一定还有机会，两位对彼此都无比重要的人又错过了更加贴近心灵的机会。',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        ' 独自扎起头发的背景，看上去也有些过于落寞了……',
      ]);
      await era.printAndWait([
        '理所当然的，在后来的日子里，',
        me.get_colored_name(),
        ' 因为 ',
        urara.get_colored_name(),
        ' 总是郁郁寡欢的样子被很多人询问了。',
      ]);
      await era.printAndWait('至于缘由……在那时候如果能更直率一点就好了吧？');
      await sys_love_uma_in_event(52);
    }
  }

  async 101(urara, me, callname) {
    const { chara_self_name, in_urara } = this.get_event_vars();
    await print_event_name('独占力', urara);
    new UraraLifeMarks().want_you = 1;
    await in_urara.say_as_unknown_and_wait(
      '小乌拉拉也是会嫉妒的，就是那么回事。',
    );
    era.drawLine();
    await era.printAndWait([
      '当 ',
      me.get_colored_name(),
      ' 来到训练场入口时，意外地被突然冲过来的 ',
      urara.get_colored_name(),
      ' 撞了个满怀。',
    ]);
    await urara.say_and_wait([
      '今天也来陪我一起吧！只要 ',
      callname,
      ' 想的话我们做什么都可以哦？',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      ' 从正面用双臂紧紧地捉住了 ',
      me.get_colored_name(),
      '，使 ',
      me.get_colored_name(),
      ' 完全失去了移开视线溜走的机会。',
    ]);
    await era.printAndWait([
      '而现在还没搞清楚状况的 ',
      me.get_colored_name(),
      '，也只能这样略带紧张地迎向 ',
      urara.get_colored_name(),
      ' 的笑脸。',
    ]);
    await urara.say_and_wait([
      '所以说，今天再多陪 ',
      chara_self_name,
      ' 一会吧！',
    ]);
    await era.printAndWait([
      '并没有给 ',
      me.get_colored_name(),
      ' 回话的机会，',
      urara.get_colored_name(),
      ' 带着缺了些真实感的笑容单方面结束了对话。',
    ]);
    await era.printAndWait([
      '随后，',
      urara.get_colored_name(),
      ' 用出乎意料的力道半拖着 ',
      me.get_colored_name(),
      ' 离开了训练场。',
    ]);
    await era.printAndWait([
      '是太寂寞了吗？不过 ',
      urara.get_colored_name(),
      ' 出现在这里……应该只是偶然吧？',
    ]);
    await era.printAndWait([
      '至少比起无法想象的被 ',
      sys_get_colored_callname(0, 52),
      ' 提前蹲守，',
      me.get_colored_name(),
      ' 更愿如此相信。',
    ]);
  }
};
