const era = require('#/era-electron');

const { get_chara_color } = require('#/data/chara-colors');
const { sort_list } = require('#/utils/list-utils');
const { buff_colors } = require('#/data/color-const');

const ranks = ['Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ'];

/**
 * @param {PseudoUma[]} contestants
 * @param {number[][]} loc
 * @param {RaceInfo} info
 */
async function page_race_result(contestants, loc, info) {
  era.printMultiColumns([
    { type: 'divider' },
    {
      accelerator: 0,
      config: { width: 12, align: 'center' },
      content: '查看结果',
      type: 'button',
    },
    {
      accelerator: 100,
      config: { width: 12, align: 'center' },
      content: '观看比赛',
      type: 'button',
    },
  ]);
  let flag_result = true;
  async function show_result() {
    let i = 0,
      record;
    while (flag_result) {
      record = loc[i];
      const buffer = contestants.map((e) => {
        return {
          key: record[e.index_race],
          columns: [
            {
              config: {
                color: get_chara_color(e.index_chara),
                fontWeight: 'bold',
                width: 4,
              },
              content: e.name,
              type: 'text',
            },
            {
              config: {
                width: 20,
              },
              content:
                record[e.index_race] >= info.span
                  ? `${e.rank.curr} 着 ${e.diff.behind > 0 ? `· ${(e.diff.behind / 2.4).toFixed(0)} 马身` : ''}`
                  : `${record[e.index_race].toLocaleString()}m (${((record[e.index_race] / info.span) * 100).toFixed(2)}%)`,
              type: 'text',
            },
          ],
        };
      });
      era.printInColRows(
        [{ type: 'divider' }],
        ...sort_list(buffer, (e) => e.key),
      );
      if (++i < loc.length) {
        era.printButton('快进到结果', 0);
        await era.delay(250);
        if (flag_result) {
          await era.clear(2);
        }
      } else {
        era.printButton('离开赛场', 0);
        flag_result = false;
      }
    }
  }
  if (await era.input()) {
    await era.clear();
    show_result().then();
    await era.input();
    flag_result = false;
  }
  sort_list(contestants, (e) => e.rank.curr, true)
    .slice(0, 5)
    .forEach((uma, i, l) => {
      era.printMultiColumns([
        {
          config: { align: 'center', width: 1 },
          content: ranks[i],
          type: 'text',
        },
        {
          config: {
            align: 'center',
            color: buff_colors[1],
            fontWeight: 'bold',
            width: 1,
          },
          content: (uma.index_race + 1).toString(),
          type: 'text',
        },
      ]);
      const diff = Math.round(uma.diff.behind / 2.4);
      if (i < l.length - 1) {
        era.print(
          [
            '> ',
            {
              color: buff_colors[1],
              content: diff >= 10 ? '大差' : `${diff} 马身`,
              fontWeight: 'bold',
            },
          ],
          {
            offset: 3,
          },
        );
      }
    });
}

module.exports = page_race_result;
