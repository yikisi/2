import { beforeEach, describe, expect, it } from 'vitest';

import CharaGenes from '#/data/chara-genes.js';

import era from '../helpers/era.js';

describe('CharaGenes', () => {
  beforeEach(() => era.reset());

  it('adds genes and counts them', () => {
    const genes = new CharaGenes(1);
    genes.add(100001);
    genes.add(100001);
    genes.add(200000);
    expect(genes.count()).toBe(3);
    expect(genes.get_count(100001)).toBe(2);
  });

  it('ignores the reserved gene 300000', () => {
    const genes = new CharaGenes(1);
    genes.add(300000);
    expect(genes.count()).toBe(0);
  });

  it('lists distinct genes sorted by id', () => {
    const genes = new CharaGenes(1);
    genes.add(200000);
    genes.add(100001);
    genes.add(100001);
    expect(genes.get_values()).toEqual([
      { count: 2, id: 100001 },
      { count: 1, id: 200000 },
    ]);
  });

  it('removes one copy at a time', () => {
    const genes = new CharaGenes(1);
    genes.add(100001);
    genes.add(100001);
    genes.sub(100001);
    expect(genes.get_count(100001)).toBe(1);
    expect(genes.count()).toBe(1);
    genes.sub(100001);
    expect(genes.get_count(100001)).toBe(0);
    expect(genes.count()).toBe(0);
  });

  it('clears everything', () => {
    const genes = new CharaGenes(1);
    genes.add(100001);
    genes.clear();
    expect(genes.count()).toBe(0);
    expect(genes.get_values()).toEqual([]);
  });
});
