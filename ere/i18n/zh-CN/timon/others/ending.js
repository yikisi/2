/**
 * @file 地文 - 结局
 * <br>注意会导致游戏结束的结局必然是坏结局！
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  loser: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you
     */
    const f = async (you) => {
      era.setOffset(6);
      era.setWidth(12);
      await era.printAndWait([
        '或许是 ',
        you.get_colored_name(),
        ' 过于懈怠，又或许是担当的天赋不足，胜利与你们始终遥遥无期。',
      ]);
      await era.printAndWait([
        '你们不管如何努力都无济于事，最终校方勒令 ',
        you.get_colored_name(),
        ' 与担当解除契约，进行移籍。',
      ]);
      await era.printAndWait([
        '因社会评价过低而被解雇的 ',
        you.get_colored_name(),
        '，迎来了结局……',
      ]);
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = '扫地出门';
    return f;
  })(),
  hentai: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you
     */
    const f = async (you) => {
      era.setOffset(6);
      era.setWidth(12);
      await era.printAndWait([
        you.get_colored_name(),
        ' 忽视了成年人的社会责任，唆使担当进行变态行为的事情败露，哪怕是特雷森也无法为 ',
        you.get_colored_name(),
        ' 掩盖过去。',
      ]);
      await era.printAndWait([
        '最终校方勒令 ',
        you.get_colored_name(),
        ' 与担当解除契约，进行移籍。',
      ]);
      await era.printAndWait([
        '因社会评价过低而被解雇的 ',
        you.get_colored_name(),
        '，迎来了结局……',
      ]);
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = '身败名裂';
    return f;
  })(),
  slave_end: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      era.setOffset(6);
      era.setWidth(12);
      await era.printAndWait([
        '被金钱腐朽的 ',
        you.get_colored_name(),
        ' 踏上了不能选择的道路——抛弃自尊与自己的学生借钱……',
      ]);
      await era.printAndWait('然而所有命运的馈赠，都在背地里标好了价码。');
      await era.printAndWait([
        you.get_colored_name(),
        ' 的借款，在如雪球一般的利滚利下终于超越了 ',
        you.get_colored_name(),
        ' 所能承受之重。',
      ]);
      await era.printAndWait([
        '接下来便是 ',
        you.get_colored_name(),
        ' 偿还代价的时候了……',
      ]);
      await era.printAndWait([
        '因被金钱关系所囚，',
        you.get_colored_name(),
        ' 迎来了结局……',
      ]);
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = '金钱奴隶';
    return f;
  })(),
  crazy_fan_end: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      era.setOffset(6);
      era.setWidth(12);
      if (era.get(`relation:${chara.id}:0`) < 0) {
        await era.printAndWait([
          '不管是参赛还是接受采访，',
          you.get_colored_name(),
          ' 和担当的紧张关系有目共睹，质疑这种紧张关系影响了担当发展的声音一直没有停息。校方对你们的组合开始失去耐心……但有些人比他们更缺乏耐性。',
        ]);
      } else {
        await era.printAndWait([
          '或许是 ',
          you.get_colored_name(),
          ' 过于懈怠，又或许是负责',
          chara.uma_sex_title,
          '的天赋不足，胜利与你们始终遥遥无期。校方对你们的组合开始失去耐心……但有些人比他们更缺乏耐性。',
        ]);
      }
      await era.printAndWait([
        you.get_colored_name(),
        ' 手上提着要送给 ',
        chara.get_colored_name(),
        ' 的蜂蜜蛋糕独自走在大雨的路上，只听身后传来一阵急促的脚步声，然后便是后腰钻心的痛楚。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 被推倒在地，身后来人不断刺向你的背部，直到 ',
        you.get_colored_name(),
        ' 一动也不动。',
      ]);
      await era.printAndWait(
        '包裹着蛋糕盒的塑料袋被雨点猛烈地敲打着、敲打着、敲打着……',
      );
      await era.printAndWait('被愤怒的粉丝报复，迎来了结局……');
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = '粉丝袭击';
    return f;
  })(),
  basement_end: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      era.setOffset(6);
      era.setWidth(12);
      await era.printAndWait('在特雷森，一个任何探测器都检测不到的地下室中……');
      await era.printAndWait([
        you.get_colored_name(),
        ' 拼命地想要挣脱绑住手脚的绳子，却只勒得自己生疼。',
      ]);
      await era.printAndWait([
        chara.get_colored_name(),
        ' 坐到床边对 ',
        you.get_colored_name(),
        ' 露出嫣然一笑，并且温柔地呵护着 ',
        you.get_colored_name(),
      ]);
      await era.printAndWait([
        '但 ',
        you.get_colored_name(),
        ' 的心中唯有对未知未来的深邃恐惧……',
      ]);
      await era.printAndWait([
        '被 ',
        chara.get_colored_name(),
        ' 的爱意所囚禁，',
        you.get_colored_name(),
        ' 迎来了结局……',
      ]);
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = '情爱囹圄';
    return f;
  })(),

  /**
   * 选择了黑暗交易之后的三阶段惩戒事件
   */

  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   * @param {string} uma
   * @param {string} they
   */
  async punishment1(you, uma, they) {
    era.setOffset(6);
    era.setWidth(12);
    await you.say_as_unknown_and_wait(
      '据说，人在被剥夺了自由后……才能真正了解自己。',
    );
    await you.say_as_unknown_and_wait('那么……你有多了解自己呢？');
    await you.say_as_unknown_and_wait([
      you.get_colored_actual_name(),
      '……怠惰，傲慢',
      era.get('flag:变态行为') > 0 ? '，色欲' : '',
      '……今天……你获得了新生。',
    ]);
    await you.say_as_unknown_and_wait('但你很快就会明白……自由也是有代价的。');
    await you.say_as_unknown_and_wait(
      '监狱将伴你同行……这具肉体将是你永恒的惩戒。',
    );
    await you.say_as_unknown_and_wait(
      '赎罪即将开始——如果不想遭受更多，就努力奔跑吧。',
    );
    await you.say_as_unknown_and_wait([
      you.get_colored_actual_name(),
      ' 小姐——自由在召唤你。',
    ]);
    await you.say_as_unknown_and_wait('希望不会再见了。');
    era.setWidth(24);
    era.setOffset(0);
    era.println();
    if (era.get('cflag:0:种族') > 0) {
      await era.printAndWait([you.get_colored_name(), ' 遭受了改造！']);
    } else {
      await era.printAndWait([you.get_colored_name(), ' 被转变为了马娘！']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 仍然可以招募',
        uma,
        '，训练',
        they,
        '，陪伴',
        they,
        '奔跑，但不再享有特雷森下发的工资。',
      ]);
      await era.printAndWait([
        '相应的，',
        you.get_colored_name(),
        ' 可以进行自主训练，参与赛事，并赢取奖金和社会声望。',
      ]);
    }
    await era.printAndWait('声望再次低于零，会遭受更严厉的惩罚！');
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   * @param {TextContent} date
   * @param {string} uma
   * @param {string} they
   */
  async punishment2(you, date, uma, they) {
    era.setOffset(6);
    era.setWidth(12);
    await era.printAndWait('性 奴 宣 言', {
      align: 'center',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      isParagraph: true,
    });
    await era.printAndWait([
      '本母马 ',
      you.get_colored_actual_name(),
      ' 自愿成为',
      uma,
      '大人们的奴隶，',
    ]);
    await era.printAndWait(
      '将身心调整至取悦主人们的最优状态，永远放弃所有人权，',
    );
    await era.printAndWait(
      '从此接受主人们的一切调教，服从主人们的一切指令，绝不产生任何异议。',
    );
    era.setOffset(13);
    era.setWidth(5);
    era.setAlign('center');
    era.print([you.get_colored_actual_name()]);
    era.print(`<${you.name} 的唇印>`);
    era.print(`<${you.name} 的乳头印>`);
    await era.printAndWait(`<${you.name} 的阴唇印>`);
    await era.printAndWait(date);
    era.setAlign('left');
    era.setOffset(0);
    era.setWidth(24);
    era.println();
    await era.printAndWait([
      '被自愿签署这样的宣言后，',
      you.get_colored_name(),
      ' 被改造成了',
      uma,
      '们的性奴！',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 仍然可以招募',
      uma,
      '，训练',
      they,
      '，陪伴',
      they,
      '奔跑，自主训练，参与赛事。',
    ]);
    await era.printAndWait([
      '但 ',
      you.get_colored_name(),
      ' 更重要的职责是供',
      they,
      '发泄性欲！',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 的身体已经被调整到敏感度绝佳的状态，请继续精进自己的性能力，取悦主人们，以获取声望吧！',
    ]);
    await era.printAndWait('声望再次低于零，会遭受更严厉的惩罚！');
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   * @param {string} uma
   * @param {string} they
   */
  async punishment3(you, uma, they) {
    era.setOffset(6);
    era.setWidth(12);
    await you.say_as_unknown_and_wait('没有想到过你竟然能堕落到这个地步。');
    await you.say_as_unknown_and_wait(
      '你的手里曾经把握着从谷底攀回地面的绳索。',
    );
    await you.say_as_unknown_and_wait('但你竟将救命索弃之不顾。');
    await you.say_as_unknown_and_wait(
      '事到如今，我甚至有点怀疑你就是故意放任自流，让一切都变得无法挽回。',
    );
    await you.say_as_unknown_and_wait(
      '毕竟，我们已经给予你那么多次保留人权的机会。',
    );
    await you.say_as_unknown_and_wait('不过现在的你恐怕也听不见了吧。');
    await you.say_as_unknown_and_wait([
      '那么，不会再见了，',
      you.get_colored_actual_name(),
      ' 小姐。',
    ]);
    await you.say_as_unknown_and_wait([
      {
        color: '#ff7373',
        content: 'GAME OVER',
        fontWeight: 'bold',
      },
    ]);
    era.setWidth(24);
    era.setOffset(0);
    era.println();
    await era.printAndWait([
      '繁殖用母马，这就是 ',
      you.get_colored_name(),
      ' 的末路。',
    ]);
    await era.printAndWait('过去的壮志随风飘散，曾经的理想被无情击碎。');
    if (you.sex_code > 0) {
      await era.printAndWait([
        '从今以后 ',
        you.get_colored_name(),
        ' 的职责便是用短小肉棒取悦高贵的',
        uma,
        '，用劣等小穴容纳神圣的因子，与她们诞下优秀的后代！',
      ]);
    } else {
      await era.printAndWait([
        '从今以后 ',
        you.get_colored_name(),
        ' 的职责便是用劣等小穴容纳神圣的因子，与',
        they,
        '诞下优秀的后代！',
      ]);
    }
    await era.printAndWait([
      '虽然人权已离 ',
      you.get_colored_name(),
      ' 远去，但还请作为孕袋继续精进。',
    ]);
    await era.printAndWait([
      '假如足够幸运的话，也许 ',
      you.get_colored_name(),
      ' 还能凭子而贵！',
    ]);
  },
  /** @param {CharaTalk} you */
  get_basement_ending_confirm: (you) => [
    you.get_colored_name(),
    ' 在地下室中迎来了结局……',
    { isBr: true },
    '要查看地下室结局吗？',
  ],
  bt_confirm_yes: '直面惨淡',
  bt_confirm_no: '呱我不要看',
};
