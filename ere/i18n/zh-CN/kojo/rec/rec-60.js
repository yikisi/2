const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {string} self_call
   */
  async rec(chara, you, self_call) {
    await you.say_as_unknown_and_wait([
      '……以及本场选拔赛的第三名是……',
      chara.get_colored_name(),
      '！',
    ]);
    await chara.say_as_unknown_and_wait('唔——嘛，一如既往的发挥呢。');
    await era.printAndWait([
      '声音传来之处，一位梳着蓬蓬的双马尾的红发',
      chara.get_uma_sex_title(),
      '正望着揭示板上的排名，自言自语着。',
    ]);
    await chara.say_and_wait(
      '还是老样子的第三名呢，这个成绩的话，这次应该也不会有训练员愿意来指点我吧……',
    );
    await era.printAndWait([
      chara.get_uma_sex_title(),
      '自嘲的话语中，似乎还带着一丝不甘和失落，听见这番话，但看完了选拔赛过程的 ',
      you.get_colored_name(),
      '，不禁上前……',
    ]);
    await chara.say_and_wait([
      '啊、那个……是训练员',
      you.get_adult_sex_title(),
      '……对吧？找 ',
      self_call,
      ' 有什么事吗？',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      ' 对 ',
      you.get_colored_name(),
      ' 突然的搭话显得有些疑惑。',
    ]);
    await chara.say_and_wait(
      '嗯……想要负责我的训练……这样啊……诶？！等等！我只是第三名哦？选我这样的人成为担当真的好吗？…………唔——我、我明白了，不过，如果感到不满或厌烦了的话，一定要告诉我哦？不要勉强自己哦？',
    );
    await era.printAndWait([
      '就这样，和 ',
      chara.get_colored_name(),
      ' 的搭档生活，拉开了序幕。',
    ]);
  },
};
