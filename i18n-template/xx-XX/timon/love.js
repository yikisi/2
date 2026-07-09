/**
 * @file 爱慕地文
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  update_yes: '升级关系',
  update_no: '暂不升级',
  49: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await chara.print_and_wait([
        '某个晚上，',
        chara.get_colored_name(),
        ' 在激烈的自慰中边叫着 ',
        you.get_colored_name(),
        ' 的名字达到了高潮。',
      ]);
    };
    f.title = '爱欲';
    return f;
  })(),
  '74-1': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      const ret = [];
      await chara.print_and_wait([
        '某个晚上，',
        chara.get_colored_name(),
        ' 逐渐察觉到了自己对 ',
        you.get_colored_name(),
        ' 有点超乎关系的暧昧。',
      ]);
      await chara.print_and_wait(
        '但那到底是年少无知的情窦初开，抑或是日常相伴下产生的情感错觉？',
      );
      era.printButton('「我也许是认真的……」（升级关系）', 1);
      era.printButton('「不，我也许只是想多了……」（暂不升级）', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await chara.print_and_wait([
          chara.get_colored_name(),
          ' 逐渐察觉到了自己对 ',
          you.get_colored_name(),
          ' 的爱意。',
        ]);
        await chara.print_and_wait([
          ' 一定要向 ',
          you.get_colored_name(),
          ' 传达心意……',
        ]);
        await chara.print_and_wait([
          chara.get_colored_name(),
          ' 有了这样的觉悟。',
        ]);
      } else {
        await chara.say_and_wait('错觉吧……', true);
        await chara.print_and_wait([
          chara.get_colored_name(),
          ' 摇了摇头，翻过身，渐渐进入了梦乡……',
        ]);
      }
      return ret;
    };
    f.title = '恋心';
    return f;
  })(),
  '74-2': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      const ret = [];
      // FLAGNAME:5 = 当前互动角色
      if (era.get('flag:5') > 0) {
        await era.printAndWait([
          '回到训练室时，',
          chara.get_colored_name(),
          ' 神色紧张地向 ',
          you.get_colored_name(),
          ' 提出了交往的请求。',
        ]);
      } else {
        await era.printAndWait([
          '回到训练室时，',
          chara.get_colored_name(),
          ' 神色紧张地找到了 ',
          you.get_colored_name(),
          ' 并且提出了交往的请求。',
        ]);
      }
      era.print([
        '要怎么办呢？是要接受 ',
        chara.get_colored_name(),
        ' 成为恋人，还是无情地拒绝？',
      ]);
      era.printButton('答应（升级关系）', 1);
      era.printButton('拒绝（暂不升级）', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait([
          '听到 ',
          you.get_colored_name(),
          ' 肯定的答复，',
          chara.get_colored_name(),
          ' 绷紧的脸庞也随之舒缓下来，转而露出兴奋的神情',
          // CFLAGNAME:6 = 身高
          ...(era.get('cflag:0:6') > era.get(`cflag:${chara.id}:6`)
            ? ['扑进 ', you.get_colored_name(), ' 的怀里。']
            : ['把 ', you.get_colored_name(), ' 拉进怀里。']),
        ]);
        await era.printAndWait(['从今以后，你们多了一层关系，一双恋人。']);
      } else {
        await era.printAndWait([
          '纵有万般思绪在心头，但 ',
          you.get_colored_name(),
          ' 始终认为你们注定不可能走在一起。',
        ]);
        await era.printAndWait([
          chara.get_colored_name(),
          ' 轻咬朱唇，浑身颤抖着强忍泪水。',
        ]);
        await era.printAndWait([
          '出于礼节，',
          you.get_colored_name(),
          ` 好好安慰着${chara.sex}，直到一切伤心的骤雨平静下来。`,
        ]);
      }
      return ret;
    };
    f.title = '冲动';
    return f;
  })(),
  '89-1': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await chara.print_and_wait([
        '某个晚上，',
        chara.get_colored_name(),
        ' 一想到自己与 ',
        you.get_colored_name(),
        ' 的恩爱场景便不由得感到一阵幸福。',
      ]);
      await chara.print_and_wait([
        '让关系更进一步吧……',
        chara.get_colored_name(),
        ' 有了这样的想法。',
      ]);
    };
    f.title = '相伴';
    return f;
  })(),
  '89-2': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      const ret = [];
      await era.printAndWait([
        '某日，',
        chara.get_colored_name(),
        ' 把 ',
        you.get_colored_name(),
        ' 带到了外面约会。',
      ]);
      era.print([
        '在一天的浪漫与温存依偎后，',
        chara.get_colored_name(),
        ' 露出充满觉悟的眼神，并向 ',
        you.get_colored_name(),
        ' 递出了结婚钻戒。',
      ]);
      era.printButton('答应（升级关系）', 1);
      era.printButton('拒绝（暂不升级）', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' 伸手接过钻戒。你们在经历过那么多之后也确实是时候结为连理了。',
        ]);
        await era.printAndWait([
          chara.get_colored_name(),
          ' 兴奋地向 ',
          you.get_colored_name(),
          ' 献上热情的深深一吻，从今以后你们二人将在人生的路上一起扶持彼此，无论贫富、无论病痛健康，至死不渝……',
        ]);
      } else {
        await era.printAndWait([you.get_colored_name(), ' 没有接过钻戒……']);
        await era.printAndWait([
          {
            content: '尽管在经历过那么多之后，',
          },
          you.get_colored_name(),
          ' 仍然不确定这是不是一个正确的抉择。',
        ]);
        await era.printAndWait(
          '道德伦理、人际关系、社会责任……你们需要考虑、或是将要束缚你们的事情实在太多了。',
        );
        era.print([
          '只是，看着 ',
          chara.get_colored_name(),
          ' 失落的神情，',
          you.get_colored_name(),
          ' 也不由得心想：真的有必要考虑那么多吗……',
        ]);
      }
      return ret;
    };
    f.title = '誓言';
    return f;
  })(),
  '99-1': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await chara.print_and_wait([
        '某个晚上，',
        chara.get_colored_name(),
        ' 在床上辗转反侧始终无法入眠。',
      ]);
      await chara.print_and_wait([
        '在 ',
        chara.get_colored_name(),
        ' 的脑中始终充斥着 ',
        you.get_colored_name(),
        ' 出于各种原因离',
        chara.sex,
        '而去的场景，一想到这种事就不禁使得 ',
        chara.get_colored_name(),
        ' 悲从中来……',
      ]);
    };
    f.title = '噩梦';
    return f;
  })(),
  '99-2': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 先所有人一步到达了训练室，紧抱着 ',
        you.get_colored_name(),
        ' 不撒手。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 不明所以，连声安慰，这才平复了 ',
        chara.get_colored_name(),
        ' 的心情。',
      ]);
    };
    f.title = '依存';
    return f;
  })(),
};
