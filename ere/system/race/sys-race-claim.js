const era = require('#/era-electron');

const prizeRatio = require('#/data/race/race_const.json');

/**
 * @param {Number[]} list_team
 * @param {Number[]} race_result
 * @param {RaceInfo} race_info
 */
module.exports = (list_team, race_result, race_info) => {
  for (const indexUma of list_team) {
    let ind = race_result.indexOf(indexUma) + 1;
    let txt = `${era.get(
      `callname:${itemUma.index_chara}:-2`,
    )} 在比赛中获得了第 ${ind} 名，`;

    if (ind <= 5) {
      let claim = race_info.prize * prizeRatio[ind - 1];
      claim = indexUma ? Math.round(claim * 0.15) : claim;
      //钱和声望放哪其实我已经忘了！

      txt += `你作为 ${indexUma ? '训练员' : '参赛选手'} 获得了 ${claim} 马币`;
    } else {
      txt += `或许下一次还有机会……？`;
    }
    era.print(txt);
  }
};
