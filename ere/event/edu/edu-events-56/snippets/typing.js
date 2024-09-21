const era = require('#/era-electron');

const { get_chara_color } = require('#/data/chara-colors');

/** @param {string} content */
async function typing(content) {
  let print_flag = true;
  for (let i = 1; i <= content.length; ++i) {
    (print_flag ? era.print : era.replaceText)(
      ['<', content.slice(0, i), '>'],
      {
        align: 'center',
        color: get_chara_color(56),
        fontSize: '2.25rem',
        fontWeight: 'bold',
      },
    );
    await era.delay(150);
    print_flag = false;
  }
}

module.exports = typing;
