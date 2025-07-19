const UmaSkill = require('#/data/race/model/uma-skill');

class UmaEroSkill extends UmaSkill {
  get_colored_name(owner) {
    const ret = super.get_colored_name(owner);
    if (owner === undefined || owner.race.conditionParams.item === 1) {
      return ret;
    }
    return ret.map((e) => ({
      ...e,
      opacity: 0.5,
      title: e.title && '（未启用）' + e.title,
    }));
  }
}

module.exports = UmaEroSkill;
