const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

module.exports = {
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   */
  async common_continue_fucking_kitaru(attacker, defender) {
    if (era.get(`tcvar:${defender.id}:接近高潮`)) {
      await defender.say_and_wait('哈❤️啊啊～');
      await defender.print_and_wait([
        defender.get_colored_name(),
        ' 的身体破廉耻的在 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 面前痉挛般的激烈扭动着，将湿漉漉身体上挂着的温热晶莹水滴抖的遍地都是。',
      ]);
      await defender.print_and_wait(
        '以往元气十足的脸上此时只剩下被情欲完全支配的阿嘿颜，粉唇也大张成惊人的o型，支离破碎的表白不停地从口中流出。',
      );
      if (era.get('love:56') > 75) {
        await defender.say_and_wait([
          '喜欢 ',
          sys_get_colored_callname(defender.id, attacker.id),
          '……最喜欢 ',
          attacker.get_colored_actual_name(),
          '❤️',
        ]);
      } else {
        await defender.say_and_wait(['肉棒……喜欢……坏，要坏掉了❤️']);
      }
      await defender.print_and_wait([
        '可能对白兴大人还是有一些羞愧吧，但这份羞愧很快就被当成燃料，用来鼓动着身体用更加下流的扭动去迎合肉棒。',
      ]);
      await defender.say_and_wait(
        [
          '变得更粗鲁了呢，',
          sys_get_colored_callname(defender.id, attacker.id),
          '。',
        ],
        true,
      );

      await defender.say_and_wait(
        '还有那能让身为兼具占卜师和巫女这二重神秘身份的自己堕落成发情母马的，如涌泉般层层叠叠的快感。',
        true,
      );
      await defender.say_and_wait(
        '不……或许简单的预言什么的，大概还是能做到吧？像是自己很快就要高潮的事实。',
        true,
      );
      await defender.say_and_wait('去了……快要……去了……');
      await defender.say_and_wait('唔呃嗯嗯嗯嗯嗯❤️❤️❤️……');
    } else {
      await defender.print_and_wait([
        '大概是带着些抖M要素的自己早就期望着被训练员这样支配吧？',
      ]);
      await defender.say_and_wait(['啊哈……❤️哈呼哈……']);
      await defender.print_and_wait([
        '收紧的穴肉则又被无情的撑开，接踵而来的快感已经让平时能记住复杂祷词的脑袋一片空白了。',
      ]);
      await defender.say_and_wait(['哈……哈……哈❤️']);
      await defender.print_and_wait([
        '巫女圣洁的俏脸在肉棒大人的进攻下又露出了谄媚的笑容。',
      ]);
      await defender.say_and_wait(['肉棒……大人？'], true);
      await defender.say_and_wait(['这么叫……白兴大人一定会怪罪的吧？'], true);
      await defender.print_and_wait([
        '但发情栗毛马娘巫女散发着下流气味的湿漉漉发热身体还是诚实的往 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 那靠的更近了一点，',
      ]);
      await defender.say_and_wait(['就算，被当成飞机杯使用也没关系的……']);
      await defender.print_and_wait([
        '破廉耻的说出了这样的话语，毕竟，比起不知道什么时候会降下来的神罚，果然还是现在能让自己晕乎乎的快感更重要一点。',
      ]);
    }
  },
};
