import { beforeEach, describe, expect, it } from 'vitest';

import get_jewel_result from '#/system/ero/sub-begin-and-end/get-jewel-result.js';

import era from '../../helpers/era.js';
import { expect_print_buffer } from '../../helpers/print-buffer.js';

describe('get_jewel_result', () => {
  beforeEach(() => era.reset());

  it('builds a printable buffer for the player when nothing happened', () => {
    expect_print_buffer(get_jewel_result(0, [], {}, []));
  });

  it('builds a printable buffer with both jewel and mark sections', () => {
    expect_print_buffer(get_jewel_result(1, [], {}, []));
  });

  it('builds a printable buffer for changed jewels', () => {
    era.seed({ 'juel:1:0': 120 });
    expect_print_buffer(
      get_jewel_result(1, [0], { 0: 50, '-0': 20 }, []),
    );
  });

  it('builds a printable buffer for the self-protect factor', () => {
    era.seed({ 'juel:1:自卫': 40 });
    expect_print_buffer(
      get_jewel_result(1, [], { '-15': 10, 15: 5 }, []),
    );
  });

  it('builds a printable buffer for the player special jewels', () => {
    era.seed({ 'jewel:0:20': 30 });
    expect_print_buffer(get_jewel_result(0, [], { 20: 10 }, []));
  });

  it('builds a printable buffer for mark changes', () => {
    era.seed({ 'ex:1:65': 1, 'mark:1:0': 2 });
    expect_print_buffer(get_jewel_result(1, [], {}, []));
  });

  it('builds a printable buffer for attribute changes', () => {
    expect_print_buffer(get_jewel_result(0, [], {}, [['速度 +1']]));
  });

  it('never renders undefined values for unset state', () => {
    const buffer = get_jewel_result(1, [0], {}, []);
    expect(
      buffer.filter((item) => item.type === 'text').some((item) => item.content === undefined),
    ).toBe(false);
    expect_print_buffer(buffer);
  });
});
