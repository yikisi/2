const { money_color, buff_colors } = require('#/data/color-const');
const RaceHistory = require('#/data/race/model/race-history');
const RaceInfo = require('#/data/race/model/race-info');
const { race_infos, race_enum } = require('#/data/race/race-const');

/**
 * @param {CharaTalk} chara
 * @returns {{count:{g1:number,g2:number,g3:number},check:number,buffer:*[]}}
 */
function get_palace_info(chara) {
  const races = new RaceHistory(chara.id).get_entries(),
    main_races = [],
    ret_buffer = [];
  let total_prize = 0,
    champions = 0,
    check = 0,
    g1_count = 0,
    g2_count = 0,
    g3_count = 0;
  races
    .sort(
      (a, b) =>
        race_infos[a.race].race_class - race_infos[b.race].race_class ||
        b.weeks - a.weeks,
    )
    .forEach((e) => {
      const info = race_infos[e.race];
      if (e.rank === 1) {
        champions++;
        e.race !== race_enum.begin_race && main_races.push(e.race);
        check += info.race_class === RaceInfo.class_enum.G1;
      }
      if (e.rank <= 5) {
        g1_count += (info.race_class === RaceInfo.class_enum.G1) / e.rank;
        g2_count += (info.race_class === RaceInfo.class_enum.G2) / e.rank;
        g3_count += (info.race_class === RaceInfo.class_enum.G3) / e.rank;
        total_prize += info.prize * RaceInfo.prize_ratios[e.rank - 1];
      }
    });
  ret_buffer.push([
    chara.get_colored_name(),
    '，生涯 ',
    {
      content: races.length.toLocaleString(),
      color: buff_colors[1],
      fontWeight: 'bold',
    },
    ' 战 ',
    {
      content: champions,
      color: champions ? buff_colors[1] : '',
      fontWeight: 'bold',
    },
    ' 胜，总赏金达到 ',
    { color: money_color, content: Math.floor(total_prize).toLocaleString() },
    ' 马币',
  ]);
  if (main_races.length) {
    ret_buffer.push([
      '主胜鞍：',
      ...main_races.slice(0, 5).map((e, i) => {
        const ret = race_infos[e].get_colored_name_with_class();
        i > 0 && (ret.content = ' ' + ret.content);
        return ret;
      }),
      main_races.length > 5 ? '……' : '',
    ]);
  }
  return {
    buffer: ret_buffer,
    check,
    count: {
      g1: g1_count,
      g2: g2_count,
      g3: g3_count,
    },
  };
}

module.exports = get_palace_info;
