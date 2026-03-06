const era = require('#/era-electron');

const { get_track_full_name } = require('#/page/race/get-track-name');

const di18n = require('#/i18n/extended-def');
const { i18n, lan } = require('#/i18n/selector');

/**
 * @param {RaceInfo} info
 * @returns {Promise<number>}
 */
async function print_race_track_chart(info) {
  const _lan = lan();
  era.print(
    i18n()
      .race.chart_title_template.replace(
        '%TRACK%',
        get_track_full_name(info.track),
      )
      .replace('%GROUND%', di18n.n_ground[info.ground])
      .replace('%SPAN%', info.span.toLocaleString(_lan))
      .replace('%ROTATION%', di18n.race.n_rotation[info.rotation + 1]),
    { align: 'center' },
  );
  if (info.attr_bonus.length > 0) {
    era.print(
      i18n().race.chart_buff_attr_template.replace(
        '%ATTR%',
        info.attr_bonus.map((e) => di18n.n_attr[e]).join(i18n().ui_comma2),
      ),
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
    content: i18n().race.chart_splitter_1_template.replace(
      '%DISTANCE%',
      info.phases[0].toLocaleString(_lan),
    ),
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
    content: i18n().race.chart_splitter_2_template.replace(
      '%DISTANCE%',
      info.phases[1].toLocaleString(_lan),
    ),
    type: 'label',
    xValue: info.phases[1],
    yValue: -2.75,
  };
  info.lanes.forEach(
    (e, i) =>
      (annotations[`lLabel${i + 1}`] = {
        color: 'white',
        // backgroundColor: 'rgb(255,255,255,0.9)',
        content: e.abbr,
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
    content: i18n().race.chart_splitter_loc_mind,
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
          label: i18n().race.chart_slope_name,
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
          ticks: { callback: ['x', 'return x % 200 ? void 0 : x;'] },
        },
        y: {
          suggestedMax: 3,
          suggestedMin: -3,
          ticks: { callback: ['y', 'return y % 0.5 ? void 0 : y;'] },
        },
      },
    },
  });
  await era.waitAnyKey();
  return ret;
}

module.exports = print_race_track_chart;
