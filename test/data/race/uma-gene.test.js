import { describe, expect, it } from 'vitest';

import UmaGene from '#/data/race/model/uma-gene.js';

const { gene_rarity_enum, gene_type_colors, gene_type_enum } = UmaGene;

const GENE_RARITY_COLORS = ['#c6c5c5', '#83d86a', '#ff82a8', '#eeb93f'];

describe('UmaGene statics', () => {
  it('assigns gene types and rarities in declaration order', () => {
    expect(gene_type_enum).toEqual({ adapt: 0, base: 1, skill: 2 });
    expect(gene_rarity_enum).toEqual({ n: 0, r: 1, sr: 2, ssr: 3 });
  });

  it('exposes one color per type', () => {
    expect(gene_type_colors).toHaveLength(3);
    gene_type_colors.forEach((c) => expect(c).toMatch(/^#[0-9a-f]{6}$/));
  });
});

describe('UmaGene instance', () => {
  it('stores the constructor fields', () => {
    const gene = new UmaGene(1, 3, 2, 'value', 10, 5);
    expect(gene).toMatchObject({
      id: 1,
      rarity: 3,
      type: 2,
      type_value: 'value',
      cost: 10,
      value: 5,
    });
  });

  it('colors the marker and name by rarity and type', () => {
    const gene = new UmaGene(1, 3, 2, 'value', 10, 5);
    const ret = gene.get_colored_name();
    expect(ret).toHaveLength(3);
    expect(ret[0]).toMatchObject({
      content: '【',
      color: GENE_RARITY_COLORS[3],
    });
    expect(ret[2]).toMatchObject({
      content: '】',
      color: GENE_RARITY_COLORS[3],
    });
    expect(ret[1]).toMatchObject({
      color: gene_type_colors[2],
      fontWeight: 'bold',
    });
  });
});
