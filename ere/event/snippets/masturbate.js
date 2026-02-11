const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const { set_palam_to_max } = require('#/system/ero/sys-prepare-ero');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

async function masturbate(chara_id) {
  if (era.get(`cflag:${chara_id}:阴道尺寸`) > 0) {
    set_palam_to_max(chara_id, part_enum.virgin);
    await quick_make_love(
      new EroParticipant(chara_id, part_enum.hand),
      new EroParticipant(chara_id, part_enum.virgin),
      false,
    );
  } else {
    set_palam_to_max(chara_id, part_enum.penis);
    await quick_make_love(
      new EroParticipant(chara_id, part_enum.hand),
      new EroParticipant(chara_id, part_enum.penis),
      false,
    );
  }
}

module.exports = masturbate;
