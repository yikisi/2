const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110191,
  '萌到讓我活過來了！',
  '中盤のコーナーで中団以降にいるとき\n近くにウマ娘ちゃんが3人以上いると\n萌えパワーで速度が上がる',
  11019,
  5,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.near_count >= 3 &&
      args.phase === 1 &&
      args.corner !== 0 &&
      args.order_rate >= 40,
    () => true,
  ],
  [5, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 1],
    [1, 1, 1],
  ],
  [
    [3500, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  0,
);
