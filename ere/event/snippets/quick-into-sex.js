const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_show_result,
} = require('#/system/ero/sys-prepare-ero');

const print_ero_page = require('#/page/page-ero');

const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');

/**
 * @param {number} cid
 * @param {boolean} [is_rape=false]
 */
async function quick_into_sex(cid, is_rape = false) {
  const my_marks = new MyEduMarks();
  if (era.get('flag:当前赛事') > 0 && my_marks.we_are_one === 0) {
    my_marks.we_are_one = 1;
  }
  begin_and_init_ero(0, cid);
  if (is_rape) {
    era.set('tflag:强奸', cid);
    era.set('tflag:主导权', cid);
  }
  await print_ero_page(cid, true);
  await end_ero_and_show_result(true);
}

module.exports = quick_into_sex;
