const { execSync } = require('child_process');
const { writeFileSync } = require('fs');
const { join, resolve } = require('path');

/** @type {{id:number,lane:{type:string,start:number,length:number,end:number,name:string}[],slopes:{type:string,start:number,length:number,end:number,slope:number}[]}[]} */
const data = require('./CourseParams.json');

let output =
    "const { RaceLane, RaceSlope } = require('#/data/race/model/race-info');\n\nmodule.exports = {\n",
  lane_output = '',
  slope_output = '';

data.forEach((e) => {
  console.log(`${e.id} ${e.lane.length} ${e.slopes.length}`);
  /** @type {{is_curve:boolean,end:number,is_last:boolean,start:number,[index]:number}[]} */
  const obj_lanes = [];
  // lane
  for (let i = 0; i < e.lane.length; ++i) {
    const lane = e.lane[i];
    const is_last = lane.name.startsWith('终');
    const corner = lane.type.startsWith('弯');

    if (!i && lane.start !== 0) {
      obj_lanes.push({
        is_curve: false,
        end: lane.start,
        is_last: false,
        start: 0,
      });
    } else if (i && lane.start !== e.lane[i - 1].end) {
      obj_lanes.push({
        is_curve: false,
        end: lane.start,
        is_last: false,
        start: e.lane[i - 1].end,
      });
    }
    obj_lanes.push({
      is_curve: corner,
      end: lane.end,
      is_last,
      start: lane.start,
    });
  }
  let corner = 0,
    straight = 0;
  for (let i = obj_lanes.length - 1; i >= 0; --i) {
    const curr = obj_lanes[i];
    if (curr.is_curve) {
      curr.index = (corner = (corner + 3) % 4) + 1;
    } else if (curr.is_last) {
      curr.index = 3;
    } else {
      curr.index = (straight = (straight + 1) % 2) + 1;
    }
  }

  const obj_slopes = e.slopes.map((slope) => {
    return {
      start: slope.start,
      end: slope.end,
      slope: slope.slope,
    };
  });
  lane_output += `${e.id}: [${obj_lanes
    .map(
      (e) =>
        `new RaceLane(${e.start}, ${e.end}, ${e.index}, ${e.is_curve}, ${e.is_last})`,
    )
    .join(',\n')}],\n`;
  slope_output += `${e.id}: [${obj_slopes
    .map((e) => `new RaceSlope(${e.start}, ${e.end}, ${e.slope})`)
    .join(',\n')}],\n`;
});

const obj_phases = {};
obj_phases[1000] = { p1: 167, p2: 667 };
obj_phases[1150] = { p1: 192, p2: 767 };
obj_phases[1200] = { p1: 200, p2: 800 };
obj_phases[1300] = { p1: 217, p2: 867 };
obj_phases[1400] = { p1: 233, p2: 933 };
obj_phases[1500] = { p1: 250, p2: 1000 };
obj_phases[1600] = { p1: 267, p2: 1067 };
obj_phases[1700] = { p1: 283, p2: 1133 };
obj_phases[1800] = { p1: 300, p2: 1200 };
obj_phases[1900] = { p1: 317, p2: 1267 };
obj_phases[2000] = { p1: 333, p2: 1333 };
obj_phases[2100] = { p1: 350, p2: 1400 };
obj_phases[2200] = { p1: 367, p2: 1467 };
obj_phases[2300] = { p1: 383, p2: 1533 };
obj_phases[2400] = { p1: 400, p2: 1600 };
obj_phases[2500] = { p1: 417, p2: 1667 };
obj_phases[2600] = { p1: 433, p2: 1733 };
obj_phases[3000] = { p1: 500, p2: 2000 };
obj_phases[3200] = { p1: 533, p2: 2133 };
obj_phases[3400] = { p1: 567, p2: 2267 };
obj_phases[3600] = { p1: 600, p2: 2400 };

output += `lane_params: {${lane_output}},\nslope_params: {${slope_output}},\nphase_params: {${Object.entries(
  obj_phases,
)
  .map((e) => `${e[0]}: [0, ${e[1].p1}, ${e[1].p2}]`)
  .join(',\n')}}};`;

writeFileSync(resolve('../../ere/data/race/race-params.js'), output);

/** @type {{id:number,status_id:number}[]} */
const status_data = require('./Course2StatusId.json');

output =
  "const { attr_enum } = require('#/data/train-const');\n\nmodule.exports = {id2bonus: {\n";

status_data.forEach((e) => {
  output += `${e.id}: ${e.status_id},\n`;
});

output +=
  '},\nbonus_params: [\n' +
  '    [],\n' +
  '    [attr_enum.speed],\n' +
  '    [attr_enum.endurance],\n' +
  '    [attr_enum.strength],\n' +
  '    [attr_enum.toughness],\n' +
  '    [attr_enum.intelligence],\n' +
  '    [attr_enum.speed, attr_enum.endurance],\n' +
  '    [attr_enum.endurance, attr_enum.strength],\n' +
  '    [attr_enum.endurance, attr_enum.toughness],\n' +
  '    [attr_enum.strength, attr_enum.intelligence],\n' +
  '    [attr_enum.endurance, attr_enum.intelligence],\n' +
  '    [attr_enum.toughness, attr_enum.intelligence],\n' +
  '  ],}';

writeFileSync('../../ere/data/race/race-attr-bonus.js', output);

execSync(
  'npx eslint --fix ./ere/data/race/race-attr-bonus.js ./ere/data/race/race-params.js',
  {
    cwd: join(process.cwd(), '../..'),
  },
);
