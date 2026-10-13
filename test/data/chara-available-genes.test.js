import { beforeEach, describe, expect, it } from 'vitest';

import CharaAvailableGenes from '#/data/chara-available-genes.js';

import era from '../helpers/era.js';

describe('CharaAvailableGenes', () => {
  beforeEach(() => era.reset());

  it('adds single and weighted copies', () => {
    const genes = new CharaAvailableGenes(1);
    genes.add(100001);
    genes.add(100001);
    genes.add(200000, 2);
    expect(genes.get_count(100001)).toBe(2);
    expect(genes.get_count(200000)).toBe(2);
  });

  it('lists distinct genes sorted by id', () => {
    const genes = new CharaAvailableGenes(1);
    genes.add(200000);
    genes.add(100001);
    expect(genes.get_values()).toEqual([
      { count: 1, id: 100001 },
      { count: 1, id: 200000 },
    ]);
  });

  it('subtracts and clears', () => {
    const genes = new CharaAvailableGenes(1);
    genes.add(100001);
    genes.add(100001);
    genes.sub(100001);
    expect(genes.get_count(100001)).toBe(1);
    genes.clear();
    expect(genes.get()).toEqual({});
  });

  it('merges two gene pools', () => {
    const a = new CharaAvailableGenes(2);
    a.add(100001);
    const b = new CharaAvailableGenes(3);
    b.add(100001);
    b.add(200000);
    const merged = new CharaAvailableGenes(1);
    merged.merge(a, b);
    expect(merged.get_count(100001)).toBe(2);
    expect(merged.get_count(200000)).toBe(1);
  });
});
