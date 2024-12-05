const UmaGene = require('#/data/race/model/uma-gene');

module.exports = new UmaGene(
  900801,
  UmaGene.gene_rarity_enum.sr,
  '「Info: Acquired」之回响',
  '习得「Info: Acquired」\n比赛前半段一直保持前方位置时，若后半段检测到对手发动了加速技能，则向前极小幅突进',
  UmaGene.gene_type_enum.skill,
  -1,
  100,
  900801,
);
