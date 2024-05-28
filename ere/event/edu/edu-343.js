const { printAndWait } = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const MayLifeMarks = require('#/data/event/life-event-marks/life-event-marks-343');

/**
 * 佐岳五月 - 育成
 *
 * @author 黑奴队长（临时）
 */
module.exports = async (hook, extra_flag, event_object) => {
  if (event_object?.arg !== 'welcome') {
    throw new Error();
  }
  const may = get_chara_talk(343),
    chairman = get_chara_talk(302),
    me = get_chara_talk(0);
  await print_event_name('凯旋门计划', may);
  await printAndWait([
    '本周的第一个工作日，',
    me.get_colored_name(),
    ' 在学园里遇到了 ',
    chairman.get_colored_name(),
    '。',
    chairman.sex,
    '正在陪同一名戴着黄帽子的',
    may.get_phy_sex_title(),
    '。',
  ]);
  if (new MayLifeMarks().who_am_i) {
    await printAndWait([
      me.get_colored_name(),
      ' 认出',
      may.sex,
      ' 是之前认识的 ',
      may.get_colored_name(),
      '。',
    ]);
    await printAndWait([
      '如 ',
      me.get_colored_name(),
      ' 所知，',
      may.get_colored_name(),
      ' 主要从事海外远征的辅助工作。',
    ]);
  } else {
    await printAndWait([
      chairman.get_colored_name(),
      ' 在 ',
      me.get_colored_name(),
      ' 上前打招呼后，告诉 ',
      me.get_colored_name(),
      ' 这位',
      may.get_phy_sex_title(),
      ' 叫 ',
      may.get_colored_actual_name(),
      ' 长期从事海外远征的辅助工作。',
    ]);
  }
  await printAndWait([
    chairman.get_colored_name(),
    ' 勉励 ',
    me.get_colored_name(),
    '，除了在日本国内争锋，也要将视野扩展到海外的尖端赛事上，带领日本赛',
    chairman.get_uma_sex_title(),
    '走向世界。',
  ]);
};
