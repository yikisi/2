/**
 * @file 日常地文 - 结局
 * <br>注意会导致游戏结束的结局必然是坏结局！
 * @author 雞雞
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
    f.title = '身败名裂';
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
        ' 忽视了成年人的社会责任，唆使负责马娘进行变态行为的事情败露，哪怕是特雷森也无法为 ',
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
    f.title = '扫地出门';
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
          ' 和担当的紧张关系有目共睹，质疑这种紧张关系影响了担当发展的声音一直没有停息。校方对 ',
          you.get_couple_title(),
          ' 的组合开始失去耐心……但有些人比他们更缺乏耐性。',
        ]);
      } else {
        await era.printAndWait([
          '或许是 ',
          you.get_colored_name(),
          ' 过于懈怠，又或许是负责',
          chara.get_uma_sex_title(),
          '的天赋不足，胜利与 ',
          you.get_couple_title(),
          ' 始终遥遥无期。校方对 ',
          you.get_couple_title(),
          ' 的组合开始失去耐心……但有些人比他们更缺乏耐性。',
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
};
