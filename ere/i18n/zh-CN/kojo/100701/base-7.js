/**
 * @file 黄金船 - 地下室
 * @author 雞雞
 */
const era = require('#/era-electron');

const chara_colors = require('#/data/chara-colors').chara_colors[7];

module.exports = {
  /**
   * @param {CharaTalk} gs 黄金船
   * @param {CharaTalk} you 玩家
   */
  async ask_release_agree(gs, you) {
    await era.printAndWait([
      '听到 ',
      you.get_colored_name(),
      ' 想要离开的请求，正靠在椅背上与 ',
      you.get_colored_name(),
      ' 一起打游戏的 ',
      gs.get_colored_name(),
      ' 皱了皱眉头。',
    ]);
    era.println();
    await gs.say_and_wait('啊～～？');
    await gs.say_and_wait('在这里水清沙幼风凉水冷，好好的为啥要出去？');
    era.println();
    await era.printAndWait([
      gs.get_colored_name(),
      ' 思索片刻，不情愿地嘟囔道。',
    ]);
    era.println();
    await gs.say_and_wait('真是让人不省心的家伙……');
    await gs.say_and_wait('那我们待会去菜市场买完菜就回去吧。');
    await gs.say_and_wait([
      { color: chara_colors[1], content: '啊，对……我要吃现抓的鳗鱼配糯米饭！' },
    ]);
    era.println();
    await era.printAndWait([
      '在那之后，',
      gs.get_colored_name(),
      ' 好歹还是强行要总算重见天日的 ',
      you.get_colored_name(),
      ' 给自己加了一顿美味的晚饭才正式放人。',
    ]);
  },
  /**
   * @param {CharaTalk} gs 黄金船
   * @param {CharaTalk} you 玩家
   */
  async ask_release_reject(gs, you) {
    await era.printAndWait([
      '听到 ',
      you.get_colored_name(),
      ' 想要离开的请求，正靠在椅背上与 ',
      you.get_colored_name(),
      ' 一起打游戏的 ',
      gs.get_colored_name(),
      ' 皱了皱眉头。',
    ]);
    era.println();
    await gs.say_and_wait('啊～～？');
    await gs.say_and_wait('在这里水清沙幼风凉水冷，好好的为啥要出去？');
    era.println();
    await era.printAndWait([
      '多半是想要回避掉这个话题，',
      gs.get_colored_name(),
      ' 转瞬就又把注意力投放回到屏幕上的剧烈战况。',
    ]);
    era.println();
    await gs.say_and_wait('先别废话了，快帮我解决掉虫巢暴君！');
    await gs.say_and_wait('啊啊啊被范围技打中啦！');
    era.println();
    await era.printAndWait([
      '看来在 ',
      gs.get_colored_name(),
      ' 玩腻味之前，都无法离开了。',
    ]);
  },
  /**
   * @param {CharaTalk} gs 黄金船
   * @param {CharaTalk} you 玩家
   * @param {string} cur_time 当前时间
   * @param {number} security_level 黄金船警戒等级
   */
  async ask_time(gs, you, cur_time, security_level) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 向 ',
      gs.get_colored_name(),
      ' 询问了当前时间……',
    ]);
    era.println();
    await gs.say_and_wait([{ color: chara_colors[1], content: '尼玛难挤？' }]);
    if (security_level > 3) {
      await gs.say_and_wait('你知道赌场为什么没有时钟吗？');
      await gs.say_and_wait('不知道？那你现在知道了。');
    } else {
      await gs.say_and_wait([{ color: chara_colors[1], content: '嘟嘟～～' }]);
      await gs.say_and_wait([
        { color: chara_colors[1], content: `现在是～～${cur_time}～～` },
      ]);
    }
  },
  /**
   * @param {CharaTalk} gs 黄金船
   * @param {CharaTalk} you 玩家
   */
  find_escape(gs, you) {
    era.print([you.get_colored_name(), ' 惴惴不安地在黑暗的通道中穿行……']);
    era.println();
    gs.say([{ color: chara_colors[1], content: '呼……哈……呼……哈……' }]);
    era.println();
    era.print([
      '快要到达出口前，',
      you.get_colored_name(),
      ' 听见了粗重的呼吸声。',
    ]);
    era.print('呼吸声之大，以致于让人不禁觉得是不是故意演绎出来的。');
    era.print([
      '然后但见一阵刺眼的红光亮起，原来是一身西◯尊主装扮的 ',
      gs.get_colored_name(),
      ' 头戴漆黑面具，手持血红光剑静候多时了吔！',
    ]);
  },
};
