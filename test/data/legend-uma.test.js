import { describe, expect, it } from 'vitest';

import LegendUmaFilter from '#/data/race/model/legend-uma-filter.js';
import LegendUmaSelector from '#/data/race/model/legend-uma-selector.js';

describe('LegendUmaSelector', () => {
  it('defaults buff to 1', () => {
    expect(new LegendUmaSelector(42)).toEqual({ id: 42, buff: 1 });
  });

  it('stores an explicit buff', () => {
    expect(new LegendUmaSelector(7, 3)).toEqual({ id: 7, buff: 3 });
  });
});

describe('LegendUmaFilter', () => {
  it('stores the constructor parameters', () => {
    const filter = () => true;
    const instance = new LegendUmaFilter('legend', 2, filter);
    expect(instance.name).toBe('legend');
    expect(instance.buff).toBe(2);
    expect(instance.filter).toBe(filter);
    expect(instance.image).toBeUndefined();
    expect(instance.skills).toBeUndefined();
  });

  const sample = {
    adapt_ground: [1, 1],
    adapt_distance: [2, 2],
    adapt_style: [3, 3],
  };

  it('chains set_image and set_skills', () => {
    const instance = new LegendUmaFilter('legend', 1, () => true);
    expect(instance.set_image('a.png')).toBe(instance);
    expect(instance.set_skills(99)).toBe(instance);
    expect(instance.image).toBe('a.png');
    expect(instance.skills).toBe(99);
  });

  it('runs the supplied filter against a racing profile', () => {
    const instance = new LegendUmaFilter(
      'legend',
      1,
      (uma) => uma.adapt_distance[0] === 2,
    );
    expect(instance.filter(sample)).toBe(true);
    expect(instance.filter({ ...sample, adapt_distance: [1] })).toBe(false);
  });
});
