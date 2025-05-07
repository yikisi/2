const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_show_result,
} = require('#/system/ero/sys-prepare-ero');

const print_ero_page = require('#/page/page-ero');

const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');

/**
 * @param {number} chara_id
 * @param {boolean} [is_rape=false]
 */
async function quick_into_sex(chara_id, is_rape = false) {
  if (era.get('flag:当前赛事') > 0) {
    new MyEduMarks().we_are_one = 0;
  }
  begin_and_init_ero(0, chara_id);
  if (is_rape) {
    era.set('tflag:强奸', chara_id);
    era.set('tflag:主导权', chara_id);
  }
  await print_ero_page(chara_id, true);
  await end_ero_and_show_result(true);
}

module.exports = quick_into_sex;
