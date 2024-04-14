const era = require('#/era-electron');

const { add_event } = require('#/event/queue');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');

module.exports = {
  /**
   * @param {CharaTalk} urara
   * @param {CharaTalk} me
   * @param {number} loc
   * @param {EventObject} event_object
   * @returns {boolean|void}
   */
  async common_out_check(urara, me, loc, event_object) {
    if (
      era.get('flag:当前互动角色') !== 52 ||
      (loc !== location_enum.river &&
        loc !== location_enum.church &&
        loc !== location_enum.shopping &&
        loc !== location_enum.station &&
        loc !== location_enum.mejiro)
    ) {
      await era.printAndWait([
        urara.get_colored_name(),
        ' 最近似乎想和 ',
        me.get_colored_name(),
        ' 一起外出……',
      ]);
      add_event(event_hooks.back_school, event_object);
      return true;
    }
  },
  /**
   * @param {CharaTalk} urara
   * @param {CharaTalk} me
   * @param {CharaTalk} in_urara
   */
  async common_talk_with_in_urara(urara, me, in_urara) {
    await in_urara.print_and_wait([
      '在或许并没有很久的以前，一位性格任性、资质平庸的小',
      in_urara.get_uma_sex_title(),
      '在某处的牧场中很随意的诞生了。',
    ]);
    await in_urara.print_and_wait([
      '但就是这样一位麻烦又平凡的',
      in_urara.get_child_sex_title(),
      '，却被最初爱着',
      in_urara.sex,
      '的人们授予了一个祝福般的可爱之名。',
    ]);
    await in_urara.print_and_wait([
      '而',
      in_urara.sex,
      '的人生也像这可爱的名字般，在偶然的幸运后，受到了时代与三女神的眷顾。',
    ]);
    await in_urara.print_and_wait([
      '尽管奔跑的日子里一次比赛也没能赢过，',
      in_urara.sex,
      '却一次又一次的取得着大家的怜悯与关照。',
    ]);
    await in_urara.print_and_wait([
      '所以',
      in_urara.sex,
      '厌恶着奔跑，厌恶着将',
      in_urara.sex,
      '当成寄托的人类，厌恶着随随便便就赌上性命的同类们，一视同仁。',
    ]);
    await in_urara.print_and_wait([
      '只是就算如此胆小又古怪的',
      in_urara.sex,
      '，依旧在因自己而泥泞的路上拾得了两份留在最后的「小小的幸福」。',
    ]);
    await in_urara.print_and_wait(
      '一份由是大家的爱构筑、哪里都有所欠缺，但仍可安身的平静，而另一份，则是三女神开下的小玩笑。',
    );
    await in_urara.print_and_wait([
      '于是在旅途的途中，受祝福的「',
      in_urara.sex,
      '」，与同样被他人所爱的「',
      urara.sex,
      '」坐上了同一趟列车，',
    ]);
    await in_urara.print_and_wait([
      '走在被祝福的道路上，实际上什么都做不到的「',
      in_urara.sex,
      '」，与弱小但想要成为希望的「',
      urara.sex,
      '」相遇了。',
    ]);
    await in_urara.print_and_wait(
      '在那仿佛是梦境般幸福的同道而行中，本应不同的两人逐渐变成了彼此的模样。',
    );
    await in_urara.print_and_wait([
      in_urara.sex,
      '一视同仁的嫌恶着那份过于刺眼的希望，但那束阳光也照亮了乖僻的',
      in_urara.sex,
      '内心中最柔软的一片草地。',
    ]);
    await in_urara.print_and_wait([
      '如果',
      urara.sex,
      '能一直这样快乐的长大就好了，如果',
      urara.sex,
      '能收获',
      urara.sex,
      '希望的小小幸福就好了……',
    ]);
    await in_urara.print_and_wait([
      '但如此渺小却又执意选择奔跑的樱粉色，究竟要去哪里寻得连自己都无从拥有的「大家的笑容」呢？',
    ]);
    await in_urara.print_and_wait([
      '不过',
      in_urara.sex,
      '还是找到了，找到了可以让小',
      urara.get_uma_sex_title(),
      '寻得幸福，一同写下完整故事的「训练员」。',
    ]);
    era.drawLine();
    await era.printAndWait([
      '随着话音的落下，注视着倾听的 ',
      me.get_colored_name(),
      '，贴近着 ',
      me.get_colored_name(),
      ' 的',
      in_urara.get_teen_sex_title(),
      '冷漠的脸颊逐渐填充起粘稠的绯红。',
    ]);
    await era.printAndWait([
      '在不知何时开始的肌肤接触中踮起脚尖，',
      in_urara.get_teen_sex_title(),
      '将柔软的湿润樱唇叠上了 ',
      me.get_colored_name(),
      ' 的唇齿。',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '而至于『',
      urara.sex,
      '』对『您』的感情，就请您自己来感受吧……',
    ]);
    await era.printAndWait([
      '温热的柔软纠缠着黏腻的水声一同浸入，与 ',
      urara.get_colored_name(),
      ' 相似的小',
      in_urara.get_uma_sex_title(),
      '正利用着',
      in_urara.sex,
      '的神情向 ',
      me.get_colored_name(),
      ' 进行着索取。',
    ]);
    await era.printAndWait([
      '不可以和',
      urara.sex,
      '这样做，没时间了，快点推开',
      urara.sex,
      '，',
      urara.sex,
      '不是 ',
      urara.get_colored_name(),
      '，不能和',
      urara.sex,
      '做这种事……',
    ]);
    await era.printAndWait(
      '但就算意识努力维持着清醒，但身体却完全滑向了另一端的怀抱。',
    );
    await era.printAndWait([
      '与感情无关，也不用犹豫，',
      urara.sex,
      '身上散发着最重要的担当的气息，「',
      urara.get_colored_name(),
      '」就在这里……',
    ]);
    await era.printAndWait([
      '随后，在这被',
      urara.sex,
      '所发起并主导的恍惚之吻中，',
      urara.get_teen_sex_title(),
      '用力咬住了逐渐下陷的另一方嘴唇。',
    ]);
    await era.printAndWait(
      '虽然疼痛的触感被兴奋的神经所抑制，但腥甜的气味还是在两人的口腔中逐渐扩散。',
    );
    await era.printAndWait([
      '眯起眼睛吮吸着混合着血液的爱欲，沉溺于其中的',
      urara.sex,
      '还在不断地侵犯着 ',
      me.get_colored_name(),
      ' 的身体与精神。',
    ]);
    await era.printAndWait(
      '这无法逃脱的吻中包含的究竟是沉重的爱欲、掺杂的谢意还是扭曲的嫌恶，又或者三者皆有？',
    );
    await era.printAndWait([
      '唯一可以确认的是，选中了「您」的「',
      urara.sex,
      '」，渴求着 ',
      me.get_colored_name(),
      ' 的一切，从肉体到灵魂……',
    ]);
    await era.printAndWait([
      '慢慢地结束了如报复般的深吻，完全就是猎食者的',
      urara.get_teen_sex_title(),
      '意犹未尽的舔了舔还连在嘴边的银丝。',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '就是这样，您理解了吗？虽然不理解也没关系，因为您与',
      urara.sex,
      '还有更长的时间……',
    ]);
    await era.printAndWait([
      '轻轻退出 ',
      me.get_colored_name(),
      ' 的怀抱，眼前的',
      urara.sex,
      '收起了眼神中的灼热，换回了那副对外生冷的距离感。',
    ]);
  },

  /**
   * @param {CharaTalk} urara
   * @param {CharaTalk} me
   * @param {CharaTalk} in_urara
   * @param {string} callname
   * @param {boolean} [in_race]
   */
  async common_talk_with_in_urara_end(urara, me, in_urara, callname, in_race) {
    await in_urara.say_as_unknown_and_wait(
      '下次如果乌拉拉会受伤的话，我会把续写故事的权力握在自己手里。',
    );
    await era.printAndWait([
      '在短暂的停顿后，就像自顾自的突然出现般，眼前的「',
      in_urara.get_colored_actual_name(),
      '」再次自顾自的转身离去。',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '明明只要接受温暖的照耀就好，但渺小的彼此却一定要牵起手追逐阳光。',
    );
    await in_urara.say_as_unknown_and_wait([
      '那就让我也见识一下，在用蜡制成的羽翼融化之前，',
      urara.sex,
      '与您究竟能够多接近太阳吧——',
    ]);
    await era.printAndWait(
      in_race
        ? '随着离开前抛下的威慑，灰白的视野再次染上色彩，恢复流动的空气将鼎沸的人声灌进了通道内。'
        : '随着威慑的落下，灰白的视野再次染上色彩，恢复流动的冷风再次灌入了行色匆匆的人群。',
    );
    in_race &&
      (await era.printAndWait([
        '而发现身体终于恢复灵活的 ',
        me.get_colored_name(),
        ' 急忙上前想要拦下正要走进光中的',
        urara.get_uma_sex_title(),
        '，但手却穿过了',
        urara.sex,
        '的身影。',
      ]));

    era.printButton(
      '「等下！别再说谜语了！这出到底是怎么回事？你到底是……」',
      1,
    );
    await era.input();

    !in_race &&
      (await era.printAndWait([
        '发现身体终于恢复灵活的 ',
        me.get_colored_name(),
        ' 转过身想要继续问些什么，但看到的却只是一抹薄雾般的笑容。',
      ]));
    await in_urara.say_as_unknown_and_wait([
      '再仔细想想啊训练员',
      me.get_adult_sex_title(),
      '（您），我的名字，您会猜不到吗？',
    ]);
    await era.printAndWait(
      in_race
        ? [
            '站在通道的出口，',
            urara.get_teen_sex_title(),
            '留下了一句意味深长的话语后，便如薄雾般消失在了阳光下。',
          ]
        : [
            '在留下最后一句意味深长的话语后，附着在 ',
            urara.get_colored_name(),
            ' 脸上的薄雾便如从未存过般稀释在了空气中。',
          ],
    );
  },

  /**
   * @param {CharaTalk} urara
   * @param {CharaTalk} me
   * @param {CharaTalk} in_urara
   * @param {string} callname
   * @param {boolean} [in_race]
   */
  async common_talk_with_urara_48(urara, me, in_urara, callname, in_race) {
    await era.printAndWait([
      in_race ? '还真是和「那个' : '不过，',
      urara.sex,
      '」说的一样，现在就算 ',
      me.get_colored_name(),
      ' 停下来，',
      urara.get_colored_name(),
      ' 也还是会选择这场比赛……',
    ]);
    await era.printAndWait([
      '等下！对了，还有「那个',
      urara.sex,
      '」的事情，但是……这个又要怎么和 ',
      urara.get_colored_name(),
      ' 讲啊？',
    ]);

    era.printButton('「啊对了，乌拉拉，刚才我好像，嗯……遇到了……」', 1);
    await era.input();

    await era.printAndWait([
      '但就在 ',
      me.get_colored_name(),
      ' 还在思索着怎样和 ',
      urara.get_colored_name(),
      ' 讲述刚才幻觉般的经历时，却听见了小',
      urara.get_uma_sex_title(),
      '的一声惊呼。',
    ]);
    await urara.say_and_wait([
      '啊，',
      callname,
      '！你的嘴唇上！是在哪里蹭破了吗？',
    ]);
    await era.printAndWait([
      '听见 ',
      urara.get_colored_name(),
      ' 有些慌张的提醒，',
      me.get_colored_name(),
      ' 才在一阵迟来的刺痛中条件反射的将手指按在了唇边。',
    ]);
    await era.printAndWait(
      '这是……血？凝视着从伤口上沾下的一点凝固的红色，半梦半醒间那疼痛的吻终于在脑中清晰了起来。',
    );
    await era.printAndWait([
      '在 ',
      urara.get_colored_name(),
      ' 担忧又疑惑的目光中，',
      me.get_colored_name(),
      ' 短暂的陷入了沉默——看来「',
      in_urara.sex,
      '」，确实来过啊……',
    ]);
  },
};
