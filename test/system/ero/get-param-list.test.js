import { beforeEach, describe, expect, it } from 'vitest';

import get_param_list from '#/system/ero/ero-act-handler/get-param-list.js';

import era from '../../helpers/era.js';

describe('get_param_list', () => {
  beforeEach(() => era.reset());

  it('always includes the shared param indices', () => {
    expect(get_param_list(1)).toEqual([0, 1, 2, 6, 7, 8]);
  });

  it('adds the penis index when present', () => {
    era.seed({ 'cflag:1:阴茎尺寸': 1 });
    expect(get_param_list(1)).toEqual([0, 1, 2, 3, 6, 7, 8]);
  });

  it('adds clitoris and vagina indices for a vagina-only character', () => {
    era.seed({ 'cflag:1:阴道尺寸': 1 });
    expect(get_param_list(1)).toEqual([0, 1, 2, 4, 5, 6, 7, 8]);
  });

  it('omits the clitoris index for a futanari', () => {
    era.seed({ 'cflag:1:阴茎尺寸': 1, 'cflag:1:阴道尺寸': 1 });
    expect(get_param_list(1)).toEqual([0, 1, 2, 3, 5, 6, 7, 8]);
  });
});
