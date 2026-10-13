import { beforeEach, describe, expect, it } from 'vitest';

import set_previous_action from '#/system/ero/ero-act-handler/set-previous-action.js';

import era from '../../helpers/era.js';

describe('set_previous_action', () => {
  beforeEach(() => era.reset());

  it('collapses the "-2" sentinel to "-1"', () => {
    era.seed({ 'tflag:foo': -2 });
    set_previous_action('foo', 5);
    expect(era.get('tflag:foo')).toBe(-1);
  });

  it('records the action otherwise', () => {
    set_previous_action('foo', 5);
    expect(era.get('tflag:foo')).toBe(5);
  });
});
