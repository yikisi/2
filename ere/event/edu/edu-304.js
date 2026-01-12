/**
 * @file 桐生院葵 - 育成
 * @author 黑奴队长（临时）
 */
const { get, printAndWait, println, waitAnyKey } = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

module.exports = class extends CustomizedEdu {
  /**
   * @author 黑奴队长
   * @param {CharaTalk} aoi
   * @param {CharaTalk} me
   */
  async fail(aoi, me) {
    const meek = get_chara_talk(201);
    await print_event_name('失败', aoi);
    await printAndWait([meek.get_colored_name(), ' 的育成结束了。']);
    await printAndWait([
      me.get_colored_name(),
      ' 并没有和',
      meek.sex,
      '取得显著的成绩。',
    ]);
    await printAndWait([
      '训练员办公室内，',
      me.get_colored_name(),
      ' 和 ',
      aoi.get_colored_name(),
      ' 沉默对坐。',
    ]);
    await printAndWait([
      aoi.get_colored_name(),
      ' 并没有大声斥责 ',
      me.get_colored_name(),
      ' 却让 ',
      me.get_colored_name(),
      ' 倍感羞愧。',
    ]);
    if (get('cflag:201:育成次数') === 1) {
      await printAndWait([
        '最后，还是 ',
        aoi.get_colored_name(),
        ' 率先开口，表示曾经听说在三女神像前虔诚祈祷可以获得第二次机会的传闻。',
      ]);
      await printAndWait([
        '如果，',
        me.get_colored_name(),
        ' 有所发现的话，',
        aoi.sex,
        '希望 ',
        me.get_colored_name(),
        ' 再给 ',
        meek.get_colored_name(),
        ' 一次机会，挽回曾经的遗憾。',
      ]);
    } else {
      await printAndWait([
        '最后，还是',
        aoi.get_colored_name(),
        ' 率先开口，表示希望 ',
        me.get_colored_name(),
        ' 下次能再努力一点，不要再给 ',
        meek.get_colored_name(),
        '留下遗憾。',
      ]);
    }
    println();
    sys_like_chara(304, 0, -200 - 100 * get('cflag:201:育成次数')) &&
      (await waitAnyKey());
  }
};
