const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_show_result,
} = require('#/system/ero/sys-prepare-ero');

const print_ero_page = require('#/page/page-ero');

const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const page_ero = require('#/page/page-ero');

/**
 * @param {number} cid
 * @param {number} master
 * @param {boolean} is_rape
 */
async function quick_into_sex(cid, master = 0, is_rape = false) {
  const my_marks = new MyEduMarks();
  if (era.get('flag:当前赛事') > 0 && my_marks.we_are_one === 0) {
    my_marks.we_are_one = 1;
  }
  begin_and_init_ero(0, cid);
  era.set('tflag:主导权', master);
  if (is_rape) {
    era.set('tflag:强奸', master);
  }
  await print_ero_page(cid, true);
  await end_ero_and_show_result(true);
}

/**
 * @param {number} cid
 * @param {number} sid
 * @param {number} master
 * @param {boolean} is_rape
 */
quick_into_sex.quick_into_3p = async (
  cid,
  sid,
  master = 0,
  is_rape = false,
) => {
  begin_and_init_ero(0, cid, sid);
  era.set('tflag:主导权', master);
  if (is_rape) {
    era.set('tflag:强奸', master);
  }
  era.set('tflag:当前助手', sid);
  await page_ero(cid, true);
  await end_ero_and_show_result();
};

module.exports = quick_into_sex;
