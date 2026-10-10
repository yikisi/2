/**
 * @file ナイスネイチャ - 募集
 * @author 红红火火恍惚
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} nature
   * @param {CharaTalk} you
   * @param {string} self_call
   */
  async rec(nature, you, self_call) {
    await you.say_as_unknown_and_wait([
      '……그리고 이번 선발 레이스의 3위는…… ',
      nature.get_colored_name(),
      '!',
    ]);
    await nature.say_as_unknown_and_wait('으음— 뭐, 평소대로의 실력이네.');
    await era.printAndWait([
      '목소리가 들려온 곳에는, 푹신푹신한 트윈 테일을 한 붉은 머리의 ',
      nature.uma_sex_title,
      '가 게시판의 순위를 바라보며 혼잣말을 하고 있었다.',
    ]);
    await nature.say_and_wait(
      '또 평소처럼 3위인가. 이 성적이라면, 이번에도 나를 지도해주겠다는 트레이너는 없겠지……',
    );
    await era.printAndWait([
      nature.uma_sex_title,
      '의 자조에는 약간의 무력감과 쓸쓸함이 섞여 있었다. 선발 레이스를 지켜본 ',
      you.get_colored_name(),
      '은(는) 자신도 모르게 다가가 말을 걸었다……',
    ]);
    await nature.say_and_wait([
      '아, 저기…… 트레이너 ',
      you.adult_sex_title,
      '…… 맞지? ',
      self_call,
      '에게 무슨 볼일이라도?',
    ]);
    await era.printAndWait([
      nature.get_colored_name(),
      '은(는) ',
      you.get_colored_name(),
      '의 갑작스러운 부름에 당황한 기색이 역력했다.',
    ]);
    await nature.say_and_wait(
      '음…… 저의 담당 트레이너가 되고 싶다고요…… 그렇구나…… 에엣?! 잠시만요! 전 고작 3위라고요? 나 같은 애를 담당으로 골라도 정말 괜찮은 거예요? ………… 으으— 알겠어요. 하지만, 혹시라도 불만이 생기거나 싫증이 나면 꼭 말해줘야 해요? 억지로 참으면 안 돼요?',
    );
    await era.printAndWait([
      '이렇게 해서, ',
      nature.get_colored_name(),
      '와의 파트너 생활이 막을 올렸다.',
    ]);
  },
};
