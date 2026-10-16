/**
 * @file 地下室ガイド
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  /** @param {CharaTalk} you */
  get_intro: (you) => [
    you.get_colored_name(),
    '은(는) 아무래도, ',
    { content: '【누군가】', fontWeight: 'bold' },
    '에게 납치되어 이 지하실로 끌려온 모양이다.',
    { isBr: true },
    '햇빛이 들지 않는 이곳에서는, ',
    { content: '【시간조차 정확히 느낄 수 없다】', fontWeight: 'bold' },
    '. 앞으로 꽤 힘든 나날이 이어질 것 같다.',
    { isBr: true },
    '도움이 필요한가?',
  ],
  /** @param {CharaTalk} you */
  async unlock(you) {
    await you.say_as_passer_by_and_wait(
      '병법에 이르기를',
      '전쟁에서는 승리를 귀히 여기지, 오래 끄는 것을 귀히 여기지 않는다.',
    );
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 지금 가진 수단으로 곧바로 탈출을 시도할 수 있다. 다만 《지하실의 주인》이 돌아오면 일단 포기할 수밖에 없다. 운 나쁘게 마주치면 보복당할 위험도 있다……',
    ]);
  },
  /** @param {CharaTalk} you */
  async relax(you) {
    await you.say_as_passer_by_and_wait(
      '병법에 이르기를',
      '승리를 예측할 수는 있어도, 억지로 만들어 낼 수는 없다.',
    );
    await era.printAndWait([
      '도망칠 곳이 없을 때는, ',
      you.get_colored_name(),
      '은(는) 조용히 앉아 기력을 기르며 대책을 세우는 편이 좋다.',
    ]);
    await you.say_as_passer_by_and_wait(
      '？？？',
      '그러면 《지하실의 주인》이 돌아오거나 깨어나는 순간을 놓치지 않을 수 있다.',
    );
  },
  /** @param {CharaTalk} you */
  async sleep(you) {
    await you.say_as_passer_by_and_wait(
      '병법에 이르기를',
      '삼가 보살펴 지치게 하지 말고, 기운을 모아 힘을 쌓는다.',
    );
    await era.printAndWait([
      '피곤할 때는, ',
      you.get_colored_name(),
      '은(는) 얌전히 잠을 자며 체력과 기력을 보충하는 것이 가장 좋다.',
    ]);
  },
  /** @param {CharaTalk} you */
  async eat(you) {
    await you.say_as_passer_by_and_wait(
      '병법에 이르기를',
      '군대에 식량이 없으면 망한다.',
    );
    await era.printAndWait([
      '장기전에 대비하려면, ',
      you.get_colored_name(),
      '은(는) 식사로 몸의 소모를 보충해야 한다. 한 번 먹으면 한동안 체력이 계속 회복된다.',
    ]);
    await you.say_as_passer_by_and_wait(
      '？？？',
      '다만 주인이 무언가 섞지는 않았는지 조심하자……상대의 경계가 높을 때는 특히.',
    );
  },
  /** @param {CharaTalk} you */
  async flatter(you) {
    await you.say_as_passer_by_and_wait(
      '병법에 이르기를',
      '최상의 전략은 적의 계략을 깨뜨리는 것이고, 그다음은 적의 동맹을 깨뜨리는 것이다.',
    );
    await era.printAndWait([
      '지하실의 주인과 좋은 관계를 쌓는 것은, ',
      you.get_colored_name(),
      '에게 결코 손해가 아니다.',
    ]);
    await you.say_as_passer_by_and_wait(
      '？？？',
      '그러면 주인의 경계를 느슨하게 만들 수 있을지도 모른다.',
    );
  },
  /** @param {CharaTalk} you */
  async sex(you) {
    await you.say_as_passer_by_and_wait(
      '병법에 이르기를',
      '적을 잘 움직이는 자가 무언가를 주면, 적은 반드시 그것을 취한다.',
    );
    await era.printAndWait(
      '지하실의 주인에게 육체를 내어주면, 그곳에서 역전의 실마리를 찾을 수 있을지도 모른다.',
    );
  },
  /** @param {CharaTalk} you */
  async strike(you) {
    await you.say_as_passer_by_and_wait(
      '병법에 이르기를',
      '기습을 잘하는 자의 수는 천지처럼 무궁하고, 강과 바다처럼 마르지 않는다.',
    );
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 자신의 힘과 지능에 자신 있다면, 지하실의 주인을 기습해 활로를 찾는 것도 한 방법이다. 다만 실패했을 때의 결말은 쉽게 짐작할 수 있다.',
    ]);
    await you.say_as_passer_by_and_wait(
      '？？？',
      '관계를 가진 횟수가 많으면 급소를 찌를 확률도 높아질지 모른다.',
    );
  },
  /** @param {CharaTalk} you */
  async battle(you) {
    await you.say_as_passer_by_and_wait(
      '병법에 이르기를',
      '전쟁은 정공법으로 맞서고, 기책으로 이긴다.',
    );
    await era.printAndWait(
      '힘에 자신 있다면 정면으로 저항하는 것은 언제나 유효하다. 특히 장치가 거의 해제되었을 때는 더욱 그렇다.',
    );
    await era.printAndWait(
      '하지만 장치를 완전히 풀지 못하고 주인에게 회복할 틈을 준다면, 그 결말은 쉽게 짐작할 수 있다……',
    );
    await you.say_as_passer_by_and_wait(
      '？？？',
      '관계를 가진 횟수가 많으면 급소를 찌를 확률도 높아질지 모른다.',
    );
  },
  /** @param {CharaTalk} you */
  async release(you) {
    await you.say_as_passer_by_and_wait(
      '병법에 이르기를',
      '최상의 전략은 적의 계략을 깨뜨리는 것이고, 그다음은 적의 동맹을 깨뜨리는 것이다.',
    );
    await era.printAndWait([
      '지하실의 주인이',
      you.get_colored_name(),
      '에게서 원하는 것을 이미 얻었다면, 풀어 달라는 부탁을 들어줄지도 모른다.',
    ]);
  },
};
