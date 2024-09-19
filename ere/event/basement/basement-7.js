const era = require('#/era-electron');

const CustomizedBase = require('#/event/basement/basement-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_colors = require('#/data/chara-colors').chara_colors[7];
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

/**
 * @param {CharaTalk} gold_ship
 * @param {CharaTalk} me
 */
async function ask_release_common(gold_ship, me) {
  await era.printAndWait([
    '听到 ',
    me.get_colored_name(),
    ' 想要离开的请求，正靠在椅背上与 ',
    me.get_colored_name(),
    ' 一起打游戏的 ',
    gold_ship.get_colored_name(),
    ' 皱了皱眉头。',
  ]);
  era.println();
  await gold_ship.say_and_wait('啊～～？');
  await gold_ship.say_and_wait('在这里水清沙幼风凉水冷，好好的为啥要出去？');
  era.println();
}

/** 黄金船 - 地下室 */
module.exports = class extends CustomizedBase {
  /** @author 雞雞 */
  async ask_release_agree() {
    const gold_ship = get_chara_talk(7),
      me = get_chara_talk(0);
    await ask_release_common(gold_ship, me);
    await era.printAndWait([
      gold_ship.get_colored_name(),
      ' 思索片刻，不情愿地嘟囔道。',
    ]);
    era.println();
    await gold_ship.say_and_wait('真是让人不省心的家伙……');
    await gold_ship.say_and_wait('那我们待会去菜市场买完菜就回去吧。');
    await gold_ship.say_and_wait([
      { color: chara_colors[1], content: '啊，对……我要吃现抓的鳗鱼配糯米饭！' },
    ]);
    era.println();
    await era.printAndWait([
      '在那之后，',
      gold_ship.get_colored_name(),
      ' 好歹还是强行要总算重见天日的 ',
      me.get_colored_name(),
      ' 给自己加了一顿美味的晚饭才正式放人。',
    ]);
  }

  /** @author 雞雞 */
  async ask_release_reject() {
    const gold_ship = get_chara_talk(7),
      me = get_chara_talk(0);
    await ask_release_common(gold_ship, me);
    await era.printAndWait([
      '多半是想要回避掉这个话题，',
      gold_ship.get_colored_name(),
      ' 转瞬就又把注意力投放回到屏幕上的剧烈战况。',
    ]);
    era.println();
    await gold_ship.say_and_wait('先别废话了，快帮我解决掉虫巢暴君！');
    await gold_ship.say_and_wait('啊啊啊被范围技打中啦！');
    era.println();
    await era.printAndWait([
      '看来在 ',
      gold_ship.get_colored_name(),
      ' 玩腻味之前，都无法离开了。',
    ]);
  }

  /** @author 雞雞 */
  async ask_time(date, hours, minutes) {
    const gold_ship = get_chara_talk(7),
      me = get_chara_talk(0),
      life_marks = new LifeEventMarks(this.id);
    await era.printAndWait([
      me.get_colored_name(),
      ' 向 ',
      gold_ship.get_colored_name(),
      ' 询问了当前时间……',
    ]);
    era.println();
    await gold_ship.say_and_wait([
      { color: chara_colors[1], content: '尼玛难挤？' },
    ]);
    if (life_marks.b_s_level > 3) {
      await gold_ship.say_and_wait('你知道赌场为什么没有时钟吗？');
      await gold_ship.say_and_wait('不知道？那你现在知道了。');
    } else {
      await gold_ship.say_and_wait([
        { color: chara_colors[1], content: '嘟嘟～～' },
      ]);
      await gold_ship.say_and_wait([
        {
          color: chara_colors[1],
          content: `现在是～～${hours % 12 || 12} 点${minutes ? ` ${minutes}` : '整'}～～`,
        },
      ]);
    }
  }

  find_escape(out_of_prison, s_level_up, is_back) {
    if (is_back) {
      const gold_ship = get_chara_talk(7),
        me = get_chara_talk(0);
      era.print([me.get_colored_name(), ' 惴惴不安地在黑暗的通道中穿行……']);
      era.println();
      gold_ship.say([{ color: chara_colors[1], content: '呼……哈……呼……哈……' }]);
      era.println();
      era.print([
        '快要到达出口前，',
        me.get_colored_name(),
        ' 听见了粗重的呼吸声。',
      ]);
      era.print('呼吸声之大，以致于让人不禁觉得是不是故意演绎出来的。');
      era.print([
        '然后但见一阵刺眼的红光亮起，原来是一身西◯尊主装扮的 ',
        gold_ship.get_colored_name(),
        ' 头戴漆黑面具，手持血红光剑静候多时了吔！',
      ]);
    } else {
      super.find_escape(out_of_prison, s_level_up, is_back);
    }
  }
};
