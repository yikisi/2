const {
  get,
  printAndWait,
  printMultiColumns,
  println,
  waitAnyKey,
} = require('#/era-electron');

const CustomizedEdu = require('#/event/edu/edu-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { gacha, get_random_entry, sort_list } = require('#/utils/list-utils');

const grand_lives = require('#/data/event/grand-lives');
const { class_enum, track_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  /** @param {CharaTalk} hello */
  async report(hello) {
    const cur_year = get('flag:当前年');
    const key = cur_year > 2002 ? 'report' : `report${cur_year}`;
    await print_title_with_kojo(i18n().kojo[this.id].edu, key, hello, {
      ...generate_dictionary(this.id, { uma: !0 }),
      CHARA_ACTUAL: hello.actual_name,
    });
    println();
    await printAndWait(i18n().timon.others.grand_live_header);
    const g3_dict = {},
      g2_dict = {},
      g1_dict = {},
      race_list = [];
    Object.values(race_enum)
      .slice(1)
      .filter(
        (e) =>
          race_infos[e].track < track_enum.longchamp && !grand_lives.check(e),
      )
      .forEach((e) => {
        const info = race_infos[e];
        switch (info.race_class) {
          case class_enum.G1:
            (g1_dict[info.date] || (g1_dict[info.date] = [])).push(e);
            break;
          case class_enum.G2:
            (g2_dict[info.date] || (g2_dict[info.date] = [])).push(e);
            break;
          case class_enum.G3:
          case class_enum.OP:
          case class_enum['Pre-OP']:
            (g3_dict[info.date] || (g3_dict[info.date] = [])).push(e);
            break;
        }
      });
    const selected_dict = {};
    gacha(Object.values(g3_dict), 5).forEach((e) => {
      const race_id = get_random_entry(e);
      race_list.push(race_id);
      selected_dict[race_id] = true;
    });
    if (cur_year >= 2001) {
      gacha(
        Object.entries(g2_dict).filter((e) => !selected_dict[e[0]]),
        5,
      ).forEach((e) => {
        const race_id = get_random_entry(e[1]);
        race_list.push(race_id);
        selected_dict[race_id] = true;
      });
    }
    if (cur_year >= 2002) {
      gacha(
        Object.entries(g1_dict).filter((e) => !selected_dict[e[0]]),
        5,
      ).forEach((e) => {
        const race_id = get_random_entry(e[1]);
        race_list.push(race_id);
        selected_dict[race_id] = true;
      });
    }
    printMultiColumns(
      sort_list(
        race_list.map((e) => race_infos[e]),
        (e) => e.date,
        true,
      ).map((e) => {
        const weeks = e.date - 1,
          month = Math.floor(weeks / 4) + 1,
          week = (weeks % 4) + 1;
        return {
          config: { align: 'center', width: 6 },
          content: [
            i18n()
              .ui_date_without_year_template.replace(
                '%MONTH%',
                month.toString(),
              )
              .replace('%WEEK%', week.toString()),
            { isBr: true },
            e.get_colored_name_with_class(),
          ],
          type: 'text',
        };
      }),
    );
    const final_dict = {};
    race_list.forEach((e) => (final_dict[e] = 1));
    grand_lives.add(race_list);
    await waitAnyKey();
  }
};
