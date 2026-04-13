const { join } = require('path');

const { read_and_write_generated } = require('../libs');

/** @type {{id:number,lane:{type:string,start:number,length:number,end:number,name:string}[],slopes:{type:string,start:number,length:number,end:number,slope:number}[]}[]} */
const data = require('../../common/race/CourseParams.json');

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
    const is_last = lane.name !== undefined && lane.name.startsWith('终');
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
    straight = obj_lanes.filter((e) => !e.is_curve).length;
  for (let i = obj_lanes.length - 1; i >= 0; --i) {
    const curr = obj_lanes[i];
    if (curr.is_curve) {
      curr.index = (corner = (corner + 3) % 4) + 1;
    } else {
      curr.index = straight--;
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

output += `lane_params: {${lane_output}},\nslope_params: {${slope_output}}};`;

read_and_write_generated(
  join(__dirname, '../../ere/data/race/race-params.js'),
  '//',
  output,
);

/** @type {{id:number,status_id:number}[]} */
const status_data = require('../../common/race/Course2StatusId.json');

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

read_and_write_generated(
  join(__dirname, '../../ere/data/race/race-attr-bonus.js'),
  '//',
  output,
);
