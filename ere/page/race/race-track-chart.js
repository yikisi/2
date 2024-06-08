const era = require('#/era-electron');

const RaceInfo = require('#/data/race/model/race-info');
const { attr_names } = require('#/data/train-const');

/**
 * @param {RaceInfo} info
 * @returns {Promise<number>}
 */
async function print_race_track_chart(info) {
  era.print(
    [
      RaceInfo.track_names[info.track],
      '竞马场 ',
      info.ground ? '泥' : '草',
      '地 ',
      info.span.toLocaleString(),
      '米跑道 ',
      info.rotation ? (info.rotation > 0 ? '顺时针' : '逆时针') : '直线',
    ],
    { align: 'center' },
  );
  if (info.attr_bonus.length > 0) {
    era.print(
      ['加成属性：', info.attr_bonus.map((e) => attr_names[e]).join('、')],
      { align: 'center' },
    );
  }
  const data = new Array(info.span + 1).fill(0);
  info.slopes.forEach((e) => {
    for (let i = e.start; i < e.end; ++i) {
      data[i] = e.slope;
    }
  });
  const annotations = {};
  info.lanes.forEach(
    (e, i) =>
      (annotations[`box${i + 1}`] = {
        backgroundColor: e.is_curve ? 'rgb(51,55,66,0.5)' : 'rgb(70,70,53,0.5)',
        borderColor: 'black',
        type: 'box',
        xMax: e.start,
        xMin: e.end,
        yMax: 3,
        yMin: -3,
      }),
  );
  annotations.divider1 = {
    borderColor: 'black',
    type: 'line',
    xMax: info.phases[0],
    xMin: info.phases[0],
  };
  annotations.dLabel1 = {
    backgroundColor: 'black',
    color: 'white',
    content: `序 ⬅ ${info.phases[0]} ⮕ 中`,
    type: 'label',
    xValue: info.phases[0],
    yValue: -2.75,
  };
  annotations.divider2 = {
    borderColor: 'black',
    type: 'line',
    xMax: info.phases[1],
    xMin: info.phases[1],
  };
  annotations.dLabel2 = {
    backgroundColor: 'black',
    color: 'white',
    content: `中 ⬅ ${info.phases[1]} ⮕ 终`,
    type: 'label',
    xValue: info.phases[1],
    yValue: -2.75,
  };
  info.lanes.forEach(
    (e, i) =>
      (annotations[`lLabel${i + 1}`] = {
        color: 'white',
        // backgroundColor: 'rgb(255,255,255,0.9)',
        content: `${e.is_last ? '终' : e.index}${e.is_curve ? '弯' : '直 '}`,
        type: 'label',
        xValue: (e.start + e.end) / 2,
        yValue: 2.75,
      }),
  );
  const loc_mind = Math.ceil((info.span * 10) / 24);
  annotations.divider3 = {
    borderColor: 'black',
    type: 'line',
    xMax: loc_mind,
    xMin: loc_mind,
  };
  annotations.dLabel3 = {
    backgroundColor: 'black',
    color: 'white',
    content: '位置意识结束',
    type: 'label',
    xValue: loc_mind,
    yValue: -2.75,
  };
  const ret = era.printLineChart({
    data: {
      datasets: [
        {
          borderColor: '#cc34ff',
          data,
          label: '坡度',
          stepped: true,
        },
      ],
      labels: new Array(info.span + 1).fill(0).map((_, i) => i),
    },
    options: {
      interaction: { intersect: false },
      plugins: {
        annotation: {
          annotations,
        },
      },
      responsive: true,
      scales: {
        x: {
          suggestedMax: info.span,
          suggestedMin: 0,
          ticks: { callback: ['x', 'return x % 200 ? undefined : x;'] },
        },
        y: {
          suggestedMax: 3,
          suggestedMin: -3,
          ticks: { callback: ['y', 'return y % 0.5 ? undefined : y;'] },
        },
      },
    },
  });
  await era.waitAnyKey();
  return ret;
}

module.exports = print_race_track_chart;
