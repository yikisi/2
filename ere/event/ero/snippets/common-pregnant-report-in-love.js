const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { buff_colors } = require('#/data/color-const');
const { unexpected_pregnant_enum } = require('#/data/ero/status-const');

/**
 * @param {CharaTalk} father
 * @param {CharaTalk} mother
 * @param {number} unexpected_pregnant
 */
async function common_pregnant_report_in_love(
  father,
  mother,
  unexpected_pregnant,
) {
  await print_event_name('孕育', mother);
  await era.printAndWait([
    mother.get_colored_name(),
    ' 欣喜地看着 ',
    {
      content:
        era.get(`mark:${mother.id}:淫纹`) === 3
          ? '小腹淫纹上代表怀孕的图案'
          : '手上的验孕棒',
      color: buff_colors[2],
    },
    '，欢快地向 ',
    father.get_colored_name(),
    ' 报告好消息。',
  ]);
  if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
    await era.printAndWait([
      father.get_colored_name(),
      ' 再三询问确认，还是得到了孩子是自己骨肉的回答。',
    ]);
    await era.printAndWait([
      '但 ',
      father.get_colored_name(),
      ' 对此毫无印象……',
    ]);
  } else {
    if (unexpected_pregnant === unexpected_pregnant_enum.mother_sleep) {
      await era.printAndWait([
        '虽然对如何怀孕毫无印象，但 ',
        mother.get_colored_name(),
        ' 坚信孩子父亲除了深爱的 ',
        father.get_colored_name(),
        ' 别无他想。',
      ]);
    }
    await era.printAndWait([
      father.get_colored_name(),
      ' 小心翼翼地拥抱着 ',
      mother.get_colored_name(),
      '，一起庆祝新生命的孕育时刻……',
    ]);
  }
}

module.exports = common_pregnant_report_in_love;
