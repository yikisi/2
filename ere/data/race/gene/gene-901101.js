const UmaGene = require('#/data/race/model/uma-gene');

module.exports = new UmaGene(
  901101,
  UmaGene.gene_rarity_enum.sr,
  '「Guiding Sea」之回响',
  '习得「Guiding Sea」\n比赛剩余800m处若位于队伍中间，则极小幅向前突进并提高极少加速力；若在根干距离（400的倍数）的比赛且位于后方，则额外极小幅提高加速力',
  UmaGene.gene_type_enum.skill,
  -1,
  100,
  901101,
);
