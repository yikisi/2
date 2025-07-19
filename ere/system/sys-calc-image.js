const era = require('#/era-electron');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { class_enum } = require('#/data/race/model/race-info');
const { race_infos } = require('#/data/race/race-const');

module.exports = {
  /**
   * @param {number} cid
   * @returns {string[]}
   */
  get_image(cid) {
    if (cid === undefined) {
      return ['default'];
    }
    const base =
        era.get(`cstr:${cid}:头像`) || era.get(`staticcstr:${cid}:头像`),
      holiday = (era.get('flag:当前回合数') - 1) % 48;
    let ret = [];
    switch (era.get('flag:当前位置')) {
      case location_enum.beach_train:
      case location_enum.playground:
        if (era.get(`cflag:${cid}:位置`) === location_enum.beach) {
          ret = [`${base}_泳`, `${base}_运`];
        } else {
          ret = [`${base}_运`];
        }
        break;
      case location_enum.beach:
        if (era.get(`cflag:${cid}:位置`) === location_enum.beach) {
          ret = [`${base}_泳`, `${base}_夏私`, `${base}_夏`];
        } else {
          ret = [`${base}_夏`];
        }
        break;
      case location_enum.beach_market:
        if (holiday === 29) {
          ret = [`${base}_江户`, `${base}_夏私`];
        } else {
          ret = [`${base}_夏私`];
        }
        ret.push(`${base}_私`, `${base}_夏`);
        break;
      case location_enum.gate:
      case location_enum.mejiro:
        if (holiday === 0) {
          ret = [`${base}_春`];
        } else if (holiday === 39) {
          ret = [`${base}_万圣`];
        }
        ret.push(
          `${base}_私`,
          `${base}_${era.get('flag:季节') > 0 ? '夏' : '冬'}`,
        );
        break;
      case location_enum.race:
        if (era.get(`cflag:${cid}:招募状态`) !== recruit_flags.yes) {
          return [
            race_infos[era.get('flag:当前赛事')].race_class === class_enum.G1
              ? undefined
              : `${base}_运`,
            base,
            'default',
          ].filter((e) => e);
        }
        return get_custom_mec(cid).get_race_cloth();
      default:
        if (holiday === 5) {
          ret = [`${base}_婚`];
        } else if (holiday === 8 && era.get(`cflag:${cid}:殿堂`)) {
          return [`${base}${era.get(`cstr:${cid}:决胜服`) || ''}`, 'default'];
        } else if (holiday === 13) {
          ret = [`${base}_仆`, `${base}_应援`, `${base}_礼`, `${base}_游`];
        } else if (holiday === 47) {
          ret = [`${base}_圣诞`];
        }
        if (!(era.get(`cflag:${cid}:育成回合计时`) < 3 * 48)) {
          ret.push(`${base}_私`);
        }
        ret.push(`${base}_${era.get('flag:季节') > 0 ? '夏' : '冬'}`);
    }
    ret.push(base, 'default');
    return ret;
  },
  switch_image() {
    era.set('flag:立绘类型', (era.get('flag:立绘类型') + 1) % 3);
  },
};
