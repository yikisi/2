import { beforeEach, describe, expect, it } from 'vitest';

import date_indicator from '#/data/date-indicator.js';

import era from '../helpers/era.js';

describe('date_indicator.get_date_obj', () => {
  beforeEach(() => era.reset());

  it('reads the current year, month and week as strings', () => {
    era.seed({ 'flag:1': 3, 'flag:2': 5, 'flag:3': 2 });
    expect(date_indicator.get_date_obj()).toEqual({ y: '3', m: '5', w: '2' });
  });
});
