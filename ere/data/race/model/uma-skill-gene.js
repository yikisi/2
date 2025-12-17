const UmaGene = require('#/data/race/model/uma-gene');
const { skills_dict } = require('#/data/race/skill/skill-const');

const { i18n } = require('#/i18n/selector');

class UmaSkillGene extends UmaGene {
  /** @returns {string} */
  get name() {
    return i18n().gene.sg_name_template.replace(
      '%NAME%',
      skills_dict[this.id].name,
    );
  }

  /** @returns {string} */
  get desc() {
    return i18n().gene.sg_desc_template.replace(
      '%NAME%',
      skills_dict[this.id].name,
    );
  }

  get_colored_name() {
    const ret = super.get_colored_name();
    const { desc, tags } = skills_dict[this.id];
    ret[1].title += `\n${desc}`;
    if (tags.length > 0) {
      ret[1].title += `\n${tags}`;
    }
    return ret;
  }
}

module.exports = UmaSkillGene;
