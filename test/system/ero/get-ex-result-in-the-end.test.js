import { beforeEach, describe, expect, it } from 'vitest';

import get_ex_result_in_the_end from '#/system/ero/sub-begin-and-end/get-ex-result-in-the-end.js';

import era from '../../helpers/era.js';
import { expect_print_buffer } from '../../helpers/print-buffer.js';

const ALL_EX_KEYS = [
  'TotalEX',
  '口腔高潮',
  '无自觉口腔高潮',
  '胸部高潮',
  '无自觉胸部高潮',
  '乳头高潮',
  '无自觉乳头高潮',
  '身体高潮',
  '无自觉身体高潮',
  '阴茎高潮',
  '无自觉阴茎高潮',
  '外阴高潮',
  '无自觉外阴高潮',
  '阴道高潮',
  '无自觉阴道高潮',
  '潮吹',
  '爱液分泌',
  '肛门高潮',
  '无自觉肛门高潮',
  '施虐高潮',
  '受虐高潮',
  '失贞',
  '破处',
  '射精量',
  '喷奶量',
  '吸奶量',
  '饮精量',
  '饮爱液量',
  '膣内精液',
  '肠内精液',
  '阴道撕裂',
  '肛门撕裂',
];

describe('get_ex_result_in_the_end', () => {
  beforeEach(() => era.reset());

  it('builds a printable buffer when nothing happened', () => {
    expect_print_buffer(get_ex_result_in_the_end(1));
  });

  it('builds a printable buffer when only TotalEX is set', () => {
    era.seed({ 'ex:1:TotalEX': 1 });
    expect_print_buffer(get_ex_result_in_the_end(1));
  });

  it('builds a printable buffer for a single body-part orgasm', () => {
    era.seed({
      'ex:1:TotalEX': 1,
      'ex:1:口腔高潮': 2,
      'ex:1:无自觉口腔高潮': 1,
    });
    expect_print_buffer(get_ex_result_in_the_end(1));
  });

  it('builds a printable buffer for all EX values set', () => {
    const vars = {};
    ALL_EX_KEYS.forEach((key) => (vars[`ex:1:${key}`] = 1));
    for (let id = 20; id <= 24; ++id) {
      vars[`ex:1:${id}`] = 1;
    }
    era.seed(vars);
    expect_print_buffer(get_ex_result_in_the_end(1));
  });

  it('builds a printable buffer when pleasure exceeds the threshold', () => {
    era.seed({
      'ex:1:TotalEX': 1,
      'palam:1:口腔快感': 100,
      'tcvar:1:口腔快感上限': 100,
    });
    expect_print_buffer(get_ex_result_in_the_end(1));
  });

  it('builds a printable buffer for lost virginity without orgasm', () => {
    era.seed({ 'ex:1:失贞': 1 });
    expect_print_buffer(get_ex_result_in_the_end(1));
  });

  it('never renders undefined values for unset state', () => {
    const buffer = get_ex_result_in_the_end(1);
    expect(
      buffer.filter((item) => item.type === 'text').some((item) => item.content === undefined),
    ).toBe(false);
    expect_print_buffer(buffer);
  });
});
