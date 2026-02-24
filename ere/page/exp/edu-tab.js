const era = require('#/era-electron');

const { get_shared_com_edu_adapt } = require('#/page/exp/snippets');

const { get_custom_check } = require('#/event/check/check-factory');

const { adaptability_colors, attr_colors } = require('#/data/color-const');
const { get_chara_score, get_rank_level } = require('#/data/info-generator');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_body:boolean,show_all_exp:boolean,show_body:boolean,show_exp:boolean}} flags
   * @returns {{print():*[]}}
   */
  generate(chara, flags) {
    const aim_list = [],
      attr_list = [
        {
          config: { content: i18n().detail.edu_header_attr, position: 'left' },
          type: 'divider',
        },
        ...(flags.in_growth
          ? [{ content: i18n().detail.growth_info, type: 'text' }]
          : new Array(5).fill(0).map((_, i) => ({
              config: { width: 4, color: attr_colors[i] },
              content: i18n().detail.get_edu_attr(di18n.n_attr[i], {
                content: Math.floor(
                  era.get(`base:${chara.id}:${5 + i}`),
                ).toLocaleString(),
                fontWeight: 'bold',
              }),
              type: 'text',
            }))),
      ];
    if (era.get(`cflag:${chara.id}:种族`)) {
      let edu_weeks;
      let out_of_train;
      if (
        !chara.id ||
        // CFLAGNAME:48 = 育成回合计时
        (edu_weeks = era.get(`cflag:${chara.id}:48`)) < 3 * 48 ||
        // CFLAGNAME:47 = 殿堂
        (out_of_train = era.get(`cflag:${chara.id}:47`)) > 0
      ) {
        let playthrough;
        const chara_score = get_chara_score(chara.id);
        const adapt_info = get_shared_com_edu_adapt(chara.id);
        const score_info = {
          content: chara_score,
          color: adaptability_colors[get_rank_level(chara_score)],
          fontWeight: 'bold',
        };
        aim_list.push(
          {
            config: { content: i18n().detail.edu_title, position: 'left' },
            type: 'divider',
          },
          {
            content:
              out_of_train >= 1
                ? [
                    di18n.n_oot[out_of_train - 1],
                    { isDivider: true },
                    ...i18n().detail.get_edu_score(score_info),
                  ]
                : [
                    ...i18n().detail.get_edu_score(score_info),
                    ...(chara.id > 0
                      ? [
                          { isDivider: true },
                          // CFLAGNAME:49 = 育成次数
                          ((playthrough = era.get(`cflag:${chara.id}:49`)) > 0
                            ? i18n().detail.edu_date_with_playthrough_template
                            : i18n().detail.edu_date_template
                          )
                            .replace(
                              '%YEAR%',
                              di18n.n_edu[Math.floor(edu_weeks / 48)],
                            )
                            .replace(
                              '%MONTH%',
                              ((Math.floor(edu_weeks / 4) % 12) + 1).toString(),
                            )
                            .replace('%WEEK%', ((edu_weeks % 4) + 1).toString())
                            .replace(
                              '%PLAYTHROUGH%',
                              (playthrough + 1).toString(),
                            ),
                        ]
                      : []),
                    { isDivider: true },
                    ...i18n().detail.get_edu_pt({
                      content: era.get(`exp:${chara.id}:技能点数`),
                      fontWeight: 'bold',
                    }),
                  ],
            type: 'text',
          },
          ...attr_list,
          {
            config: {
              content: i18n().detail.edu_header_adapt,
              position: 'left',
            },
            type: 'divider',
          },
          ...adapt_info,
        );
        if (chara.id > 0) {
          const aims = get_custom_check(chara.id).get_edu_aims();
          const aims_without_trackers = aims.filter(({ content }) => !content);
          const aim_count = aims_without_trackers.filter(
            (e) => e.check === 1,
          ).length;
          const aim_template = i18n().detail.edu_aim_template;
          aim_list.push(
            {
              config: {
                content:
                  aim_count === aims_without_trackers.length
                    ? i18n().detail.edu_header_aim_finished
                    : i18n()
                        .detail.edu_header_aim_template.replace(
                          '%CURRENT%',
                          aim_count.toString(),
                        )
                        .replace(
                          '%TOTAL%',
                          aims_without_trackers.length.toString(),
                        ),
                position: 'left',
              },
              type: 'divider',
            },
            ...aims.map(({ color, content, current, desc, mark, require }) => ({
              config: { color },
              content:
                content ??
                aim_template
                  .replace('%DESC%', desc)
                  .replace('%CURRENT%', current)
                  .replace('%REQUIRE%', require)
                  .replace('%MARK%', mark),
              type: 'text',
            })),
          );
        }
      } else {
        aim_list.push(
          {
            config: {
              content: i18n().detail.edu_title,
              position: 'left',
            },
            type: 'divider',
          },
          { content: i18n().detail.no_exp_info, type: 'text' },
        );
      }
    } else {
      aim_list.push(
        {
          config: {
            content: i18n().detail.edu_title,
            position: 'left',
          },
          type: 'divider',
        },
        { content: i18n().detail.human_info, type: 'text' },
        ...attr_list,
      );
    }
    aim_list.push(
      {
        config: {
          content: i18n().detail.edu_header_language,
          position: 'left',
        },
        type: 'divider',
      },
      ...[5, 6, 7].map((aid) => ({
        config: { width: 6 },
        content: i18n()
          .tb_abl.bordered_template.replace('%ABL%', i18n().tb_abl[aid])
          .replace('%LEVEL%', era.get(`abl:${chara.id}:${aid}`)),
        type: 'text',
      })),
    );

    return {
      print: () => aim_list,
    };
  },
  name: i18n().detail.edu_title,
};
