const era = require('#/era-electron');

const { join_list, sort_list } = require('#/utils/list-utils');

const { get_chara_color } = require('#/data/chara-colors');
const { adaptability_colors } = require('#/data/color-const');

const di18n = require('#/i18n/extended-def');
const { i18n, lan } = require('#/i18n/selector');

const dict = {};

const types = {
  edu: 0,
  race: 0,
  love: 0,
  sex: 0,
  birth: 0,
  end: 0,
  all: 0,
  hidden: 0,
};
Object.keys(types).forEach((e, i) => (types[e] = i));

// 多期成就区分
const platinum_type = {
  all: 0,
};
Object.keys(platinum_type).forEach((e, i) => (platinum_type[e] = i));
platinum_type.keys = Object.keys(platinum_type);

class GlobalAchievement {
  get #bean() {
    // GLOBALNAME:2 = 全局成就
    return era.get('global:2') || era.set('global:2', {});
  }

  get #fields() {
    return Object.keys(this).filter((m) => typeof this[m] !== 'function');
  }

  edu_one = [4, types.edu, platinum_type.all];
  edu_thr = [5, types.edu, platinum_type.all];
  edu_nrg = [6, types.edu, platinum_type.all];
  edu_1_ex = [5, types.edu, platinum_type.all];
  edu_sex = [6, types.edu, platinum_type.all];
  edu_tch = [6, types.edu, platinum_type.all];
  chan_sec = [5, types.edu, platinum_type.all];
  chan_thr = [6, types.edu, platinum_type.all];
  chan_mor = [7, types.hidden];

  wins_one = [7, types.race, platinum_type.all];
  wins_six = [7, types.hidden];
  wins_thr = [7, types.hidden];
  wins_hnt = [7, types.hidden];

  blnc_cel = [6, types.love, platinum_type.all];
  blnc_rac = [6, types.love, platinum_type.all];
  yandere = [7, types.hidden];

  inmn_one = [5, types.sex, platinum_type.all];
  inmn_thr = [6, types.sex, platinum_type.all];
  inmn_six = [7, types.sex, platinum_type.all];
  slav_mil = [6, types.sex, platinum_type.all];
  slav_prg = [6, types.sex, platinum_type.all];
  slav_mon = [6, types.sex, platinum_type.all];
  slav_inh = [6, types.sex, platinum_type.all];
  slav_frn = [6, types.sex, platinum_type.all];
  slav_ass = [6, types.sex, platinum_type.all];
  slav_mas = [7, types.sex, platinum_type.all];
  play_mil1 = [5, types.sex, platinum_type.all];
  play_mil2 = [6, types.sex, platinum_type.all];
  play_mil3 = [7, types.sex, platinum_type.all];

  st_maria = [5, types.birth, platinum_type.all];
  father = [5, types.birth, platinum_type.all];
  mother = [6, types.birth, platinum_type.all];
  famother = [7, types.birth, platinum_type.all];
  ck_m = [4, types.birth, platinum_type.all];
  ck_f = [4, types.birth, platinum_type.all];
  ck_d = [5, types.birth, platinum_type.all];
  ck = [6, types.birth, platinum_type.all];
  et_tu = [6, types.hidden];

  end_los = [3, types.end, platinum_type.all];
  end_hnt = [3, types.end, platinum_type.all];
  end_fan = [4, types.end, platinum_type.all];
  end_mon = [4, types.end, platinum_type.all];
  end_lov = [4, types.end, platinum_type.all];
  ending = [7, types.end, platinum_type.all];

  time_ten = [6, types.all, platinum_type.all];
  time_twe = [6, types.all, platinum_type.all];
  time_thr = [6, types.all, platinum_type.all];
  time_for = [7, types.all, platinum_type.all];
  time_fif = [7, types.all, platinum_type.all];
  all = [8, types.hidden];

  c_luna1 = [7, types.hidden, void 0, get_chara_color(17)];
  c_tachyon1 = [7, types.hidden, void 0, get_chara_color(32)];
  c_taishin1 = [7, types.hidden, void 0, get_chara_color(50)];
  c_pama1 = [7, types.hidden, void 0, get_chara_color(64)];

  constructor() {
    function notify(m, color, desc) {
      era.notify(
        [
          {
            color,
            content: i18n()
              .achievement.name_template.replace(
                '%RARITY%',
                di18n.achievement.get_rarity_name(dict[m][0]),
              )
              .replace('%NAME%', i18n().achievement[m]),
            fontSize: '1rem',
            fontWeight: 'bold',
          },
          { isBr: true },
          ...join_list(desc.split('\n'), { isBr: true }),
        ],
        i18n().ui_achieve_title,
        'success',
        50000,
      );
    }
    this.#fields.forEach((m) => {
      dict[m] = this[m];
      const p_type = dict[m][2];
      Object.defineProperty(this, m, {
        get() {
          return this.#bean[m] || 0;
        },
        set(v) {
          if (!this.#bean[m] && v > 0) {
            this.#bean[m] = new Date().getTime();
            notify(m, this.get_color(m), this.get_desc(m));
            const p_key = platinum_type.keys[p_type];
            if (
              di18n.achievement.n_platinum[p_type] &&
              !this.#bean[p_key] &&
              this.#fields.every((m) => this[m] > 0 || dict[m][2] !== p_type)
            ) {
              this.#bean[p_key] = new Date().getTime();
              notify(p_key, this.get_color(p_key), this.get_desc(p_key));
            }
          }
        },
      });
    });
  }

  /**
   * @param {string} m
   * @returns {string}
   */
  get_color(m) {
    return dict[m][3] || adaptability_colors[dict[m][0]];
  }

  /**
   * @param {string} m
   * @returns {string}
   */
  get_desc(m) {
    const type = dict[m][1];
    const p_type = dict[m][2];
    if (type !== types.hidden && di18n.achievement.n_platinum[p_type]) {
      return i18n()
        .achievement.platinum_template.replace('%DESC%', i18n().achieve_desc[m])
        .replace('%PLATINUM%', di18n.achievement.n_platinum[p_type]);
    }
    return i18n().achieve_desc[m];
  }

  async show() {
    const curr = era.getLineCount();
    let flag = true;
    let page = 0;
    let show_hidden = false;

    era.setAlign('right');
    while (flag) {
      await era.clear(era.getLineCount() - curr);
      era.printInColRows(
        [
          {
            config: {
              content: i18n().achievement.ui_type_template.replace(
                '%TYPE%',
                di18n.achievement.n_type[page],
              ),
            },
            type: 'divider',
          },
        ],
        {
          columns: [
            ...Object.keys(types).map((_, i) => ({
              accelerator: i + 1,
              config: { disabled: i === page && page !== types.hidden },
              content: di18n.achievement.n_type[i],
              type: 'button',
            })),
            { accelerator: 99, content: i18n().ui_back, type: 'button' },
          ],
          config: { width: 3 },
        },
        {
          columns: sort_list(
            this.#fields.filter(
              (m) =>
                dict[m][1] === page &&
                (dict[m][1] !== types.hidden ||
                  show_hidden ||
                  this.#bean[m] > 0),
            ),
            (m) =>
              this.#bean[m] > 0
                ? this.#bean[m] + dict[m][0] * 1000000000000
                : 100 - this.#fields.indexOf(m),
          ).map((m) => {
            let desc;
            if (this.#bean[m] > 0) {
              desc = this.get_desc(m).split('\n');
              if (desc.length > 1) {
                desc = [
                  {
                    content: i18n().achieve_desc.abbr_template.replace(
                      '%DESC%',
                      desc[0],
                    ),
                    title: desc.join('\n'),
                  },
                ];
              } else {
                desc = join_list(desc, { isBr: true });
              }
            } else {
              desc = [
                {
                  content: i18n().achievement.ungot,
                  title: this.get_desc(m),
                },
              ];
            }
            const rarity = dict[m][0];
            return {
              config: { align: 'center', offset: 1, width: 7 },
              content: [
                {
                  fontSize: '1.25rem',
                  color: this.get_color(m),
                  opacity: this[m] > 0 ? 1 : 0.5,
                  content: i18n().achievement[m],
                  title:
                    this[m] > 0
                      ? i18n()
                          .achievement.got_template.replace(
                            '%RARITY%',
                            di18n.achievement.get_rarity_name(rarity),
                          )
                          .replace(
                            '%TIME%',
                            new Date(this.#bean[m]).toLocaleString(lan()),
                          )
                      : i18n().achievement.ungot_template.replace(
                          '%RARITY%',
                          di18n.achievement.get_rarity_name(rarity),
                        ),
                },
                { isBr: true },
                ...desc,
                { isBr: 2 },
              ],
              type: 'text',
            };
          }),
          config: { width: 21 },
        },
      );
      const ret = await era.input({ hideInput: true });
      if (ret === 99) {
        flag = false;
      } else {
        show_hidden = page === types.hidden && ret - 1 === types.hidden;
        page = ret - 1;
      }
    }
    era.setAlign('left');
  }
}

const global_achievement = new GlobalAchievement();

module.exports = global_achievement;
