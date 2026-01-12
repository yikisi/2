/**
 * @file 光辉致意 - 育成
 * @author 黑奴队长（临时）
 */
const {
  get,
  printAndWait,
  printMultiColumns,
  println,
  waitAnyKey,
} = require('#/era-electron');

const CustomizedEdu = require('#/event/edu/edu-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { gacha, get_random_entry, sort_list } = require('#/utils/list-utils');

const grand_lives = require('#/data/event/grand-lives');
const { class_enum, track_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

module.exports = class extends CustomizedEdu {
  /**
   * @author 黑奴队长
   * @param {CharaTalk} hello
   * @param {CharaTalk} me
   */
  async report(hello, me) {
    const cur_year = get('flag:当前年');
    switch (cur_year) {
      case 2000:
        await print_event_name('大舞台，始动！', hello);
        await printAndWait([
          '本周的最后一个工作日，一位成熟',
          hello.get_uma_sex_title(),
          '出现在特雷森学园。',
        ]);
        await printAndWait([
          hello.sex,
          '自称',
          hello.get_colored_actual_name(),
          '，是一项名为大舞台的运动的发起人。',
        ]);
        await printAndWait([
          '大舞台运动的目标是让更多选手上台参演胜者舞台，给',
          hello.get_uma_sex_title(),
          '们增加一个展现自己光辉的机会。',
        ]);
        await printAndWait(
          '现在大舞台运动已获得阶段胜利，URA批准在G3以下的五场赛事中开设大舞台，每年轮换。',
        );
        await printAndWait([
          '介绍结束后，',
          hello.get_colored_name(),
          ' 请 ',
          me.get_colored_name(),
          ' 多多支持大舞台。',
        ]);
        break;
      case 2001:
        await print_event_name('大舞台之梦', hello);
        await printAndWait([
          hello.get_colored_name(),
          ' 高兴地告诉 ',
          me.get_colored_name(),
          '，经过一年的试运行，大舞台好评如潮，URA决定每年增设5场G2比赛的大舞台，同样每年轮换。',
        ]);
        await printAndWait([
          '为了让大舞台出现在那些顶尖的比赛中，',
          hello.get_colored_name(),
          ' 干劲满满。',
        ]);
        break;
      case 2002:
        await print_event_name('梦之开拓者', hello);
        await printAndWait([hello.get_colored_name(), ' 呆呆地站在揭示板前。']);
        await printAndWait(
          '用于公布明年大舞台赛事名单的揭示板上，如今已经多了5场G1赛事。',
        );
        await printAndWait([
          '曾经无力于赛场的',
          hello.get_uma_sex_title(),
          '，终于赢取了自己的「胜利」。',
        ]);
        await printAndWait([
          '作为大舞台运动的发起人，',
          hello.get_colored_name(),
          ' 的「胜利」无人能及。',
        ]);
        if (get('love:308') >= 75) {
          await printAndWait([
            me.get_colored_name(),
            ' 将',
            hello.sex,
            '轻轻拥入怀中。',
            hello.get_colored_name(),
            ' 靠在 ',
            me.get_colored_name(),
            ' 的肩膀上。',
          ]);
          await printAndWait(
            '没有太多言语，两人只是静静地品味着这份「胜利」。',
          );
        } else {
          await printAndWait([
            me.get_colored_name(),
            ' 与 ',
            hello.get_colored_name(),
            ' 并肩而立，无声地陪伴着',
            hello.sex,
            '。',
          ]);
        }
        break;
      default:
        await print_event_name('大舞台', hello);
        await printAndWait('又到了大舞台赛事公布的时刻。');
    }
    println();
    await printAndWait('明年如下赛事将举办大舞台：');
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
            `${month} 月 第 ${week} 周`,
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
