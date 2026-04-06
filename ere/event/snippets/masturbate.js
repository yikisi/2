const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const { set_palam_to_max } = require('#/system/ero/sys-prepare-ero');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

/** @param {number|string} cid */
async function masturbate(cid) {
  if (era.get(`cflag:${cid}:阴道尺寸`) > 0) {
    set_palam_to_max(cid, part_enum.virgin);
    await quick_make_love(
      new EroParticipant(cid, part_enum.hand),
      new EroParticipant(cid, part_enum.virgin),
    );
  } else {
    set_palam_to_max(cid, part_enum.penis);
    await quick_make_love(
      new EroParticipant(cid, part_enum.hand),
      new EroParticipant(cid, part_enum.penis),
    );
  }
}

module.exports = masturbate;
