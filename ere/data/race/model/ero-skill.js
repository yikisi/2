const UmaSkill = require('#/data/race/model/uma-skill');

const { i18n } = require('#/i18n/selector');

class UmaEroSkill extends UmaSkill {
  get_colored_name(owner) {
    const ret = super.get_colored_name(owner);
    if (owner === void 0 || owner.race.conditionParams.item === 1) {
      return ret;
    }
    return ret.map((e) => ({
      ...e,
      opacity: 0.5,
      title:
        e.title &&
        i18n().skill_desc.disabled_template.replace('%DESC%', e.title),
    }));
  }
}

module.exports = UmaEroSkill;
