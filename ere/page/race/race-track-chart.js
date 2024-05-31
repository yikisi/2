const era = require('#/era-electron');

const RaceInfo = require('#/data/race/model/race-info');

/** @param {RaceInfo} info */
function print_race_track_chart(info) {
  era.print(
    `${RaceInfo.track_names[info.track]}竞马场 ${
      info.ground ? '泥' : '草'
    }地 ${info.span.toLocaleString()}米跑道 ${
      info.rotation ? (info.rotation > 0 ? '顺时针' : '逆时针') : '直线'
    }`,
    { align: 'center' },
  );
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
        backgroundColor: e.cornor ? 'rgb(51,55,66,0.5)' : 'rgb(70,70,53,0.5)',
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
    xMax: info.phases[1],
    xMin: info.phases[1],
  };
  annotations.dLabel1 = {
    backgroundColor: 'black',
    color: 'white',
    content: `序 ⬅ ${info.phases[1]} ⮕ 中`,
    type: 'label',
    xValue: info.phases[1],
    yValue: -2.75,
  };
  annotations.divider2 = {
    borderColor: 'black',
    type: 'line',
    xMax: info.phases[2],
    xMin: info.phases[2],
  };
  annotations.dLabel2 = {
    backgroundColor: 'black',
    color: 'white',
    content: `中 ⬅ ${info.phases[2]} ⮕ 终`,
    type: 'label',
    xValue: info.phases[2],
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
  era.printLineChart({
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
}

module.exports = print_race_track_chart;
