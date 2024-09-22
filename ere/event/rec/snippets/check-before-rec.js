const era = require('#/era-electron');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

/**
 * @param chara_id
 * @returns {Promise<boolean>} if leave
 */
async function check_before_rec(chara_id) {
  const chara = get_chara_talk(chara_id);
  if (
    !(await select_yes_or_no(
      [
        '训练员与',
        chara.get_uma_sex_title(),
        '的契约足以影响双方一生，确定要招募 ',
        chara.get_colored_name(),
        ' 吗？',
      ],
      '确定',
      '还是算了',
    ))
  ) {
    era.print([
      '虽然想要招募 ',
      chara.get_colored_name(),
      '，但还是打消了念头……',
    ]);
    return true;
  }
}

module.exports = check_before_rec;
