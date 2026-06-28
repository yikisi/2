/**
 * @file 东海帝王 - 育成 - 避战线
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

module.exports = {
  ws_95_14_g: (() => {
    const title = '粉丝感谢祭';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `虽然 ${you.name} 和东海帝王已经宣布了将要避战的消息，不过粉丝们的热情还是一如既往。`,
      );
      await era.printAndWait(
        `听到了腿伤的理由后都纷纷表示理解，并对你们送上了祝福。`,
      );
      await era.printAndWait(`帝王的神情看来也回复了以前朝气的样子……`);
      await era.printAndWait(
        `或许吧。如果 ${you.name} 扮一次黑脸就能让${teio.sex}一直这样的话，那也没什么大不了……`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_g_s: (() => {
    const title = '奔跑的夙愿（上）';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await teio.say_and_wait(
        '训练员，你还记得吗，我们初次比赛之后……你说，要跟我一起跑下去。',
      );
      era.println();

      await era.printAndWait(
        `阳光从入口处洒入，将${teio.sex}的全身笼罩在一片金光中，${teio.sex}回头微笑着，对 ${you.name} 诉说。`,
      );
      era.println();

      await teio.say_and_wait(
        '我可是很认真的哦……现在，我再问你一次，你会跟我一起跑吗？',
      );
      era.println();

      era.printButton('「会的，一定会……一直会的！」', 1);
      await era.input();
      await era.printAndWait(
        `${teio.teen_sex_title}轻点下颌，转身，大幅度地挥舞起手臂，披风刷地摆起，如同一团升腾的火焰，踏步入场，融入前方的光明。`,
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_g_s: (() => {
    const title = '奔跑的夙愿（下）';
    /** @param {CharaTalk} teio 东海帝王 */
    const f = async (teio) => {
      await era.printAndWait('奇迹，是属于每个人的。');
      await era.printAndWait('但是在这片赛场上，只会诞生一个奇迹。');
      era.println();

      await teio.say_and_wait('呼——');
      era.println();

      await teio.say_and_wait('咬得太紧了', true);
      await teio.say_and_wait('比之前还要糟——', true);
      await teio.say_and_wait(
        '难以超越身位……不管是前方引领的逃马，还是跟我一样的先行马……又或者是虎视眈眈在后面等待机会的差行，追马……',
        true,
      );
      await teio.say_and_wait('大家……都在拼命追逐啊', true);
      era.println();

      await era.printAndWait(
        `前方的${teio.uma_sex_title}如风般奔驰，飘散的银发末梢都能打到自己的鼻尖，一旁的红发${teio.uma_sex_title}则如一团跳动的红色火焰紧紧黏在身上，随时要将前方的东西统统吞下。`,
      );
      await era.printAndWait(
        '最大限度发挥自己的天分，努力训练，带着绝不认输的觉悟奔赴赛场——如果只是这样，还真是令人恼火。',
      );
      await era.printAndWait(
        `因为这些，只不过是踏上这个舞台所必须的，毫不稀奇的东西罢了。`,
      );
      era.println();

      await teio.say_and_wait('可恶……', true);
      await teio.say_and_wait(
        `或许训练员以前说的没错……这世上有过，并且一直存在很多比我更强的${teio.uma_sex_title}`,
        true,
      );
      await teio.say_and_wait(
        '但是今天……我是真的不想，也不会，不能输啊！',
        true,
      );
      era.println();

      await era.printAndWait(
        '大口呼吸，贪婪地吸纳着氧气，将其转化为所需的能量，超越极限。',
      );
      era.println();

      await teio.say_and_wait('大家的辉煌……都是在什么时候呢？', true);
      await teio.say_and_wait('我的话……就是现在吧！', true);
      era.println();

      era.printButton('「帝王！」', 1);
      await era.input();
      await era.printAndWait(`解说「——是 ${teio.name}——」`);
      era.println();
      await era.printAndWait(`${teio.teen_sex_title}俯身，发起最后的冲锋。`);
    };
    f.title = title;
    return f;
  })(),
  async ws_palace_g(teio) {
    await teio.say_and_wait('我的名字是东海帝王。东海——帝王！');
  },
};
