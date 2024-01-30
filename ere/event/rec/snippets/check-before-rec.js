const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

/**
 * @param chara_id
 * @returns {Promise<boolean>} if leave
 */
async function check_before_rec(chara_id) {
  const chara = get_chara_talk(chara_id);
  era.print([
    '训练员与马娘的契约足以影响双方一生，确定要招募 ',
    chara.get_colored_name(),
    ' 吗？',
  ]);
  era.printMultiColumns([
    {
      accelerator: 0,
      config: { width: 12, align: 'center' },
      content: '确定',
      type: 'button',
    },
    {
      accelerator: 99,
      config: { width: 12, align: 'center' },
      content: '还是算了',
      type: 'button',
    },
  ]);
  const ret = await era.input();
  if (ret) {
    era.print([
      '虽然想要招募 ',
      chara.get_colored_name(),
      '，但还是打消了念头……',
    ]);
    return true;
  }
}

module.exports = check_before_rec;
