/**
 * @file トウカイテイオー - 育成 - 回避ルート
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

module.exports = {
  ws_95_14_g: (() => {
    const title = '팬 감사제';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `이미 ${you.name}와(과) 토카이 테이오가 출전 포기를 발표했는데도 팬들의 열기는 여전했다.`,
      );
      await era.printAndWait(
        `다리 부상 때문이라는 것을 알자 모두 이해해 주며 두 사람에게 응원을 보내 주었다.`,
      );
      await era.printAndWait(`테이오의 표정에도 예전의 활기가 돌아온 듯했다……`);
      await era.printAndWait(
        `아마 그럴 것이다. ${you.name}이(가) 한 번 악역을 맡는 것만으로 ${teio.sex}가 계속 이렇게 지낼 수 있다면, 그 정도는 싼 대가다……`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_g_s: (() => {
    const title = '달리고 싶은 마음(상)';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await teio.say_and_wait(
        '트레이너, 기억해? 첫 레이스가 끝나고…… 계속 함께 달리자고 말해 줬잖아.',
      );
      era.println();

      await era.printAndWait(
        `입구로 햇살이 쏟아져 들어와 ${teio.sex}의 온몸을 금빛으로 감쌌다. ${teio.sex}는 돌아서서 미소 지으며 ${you.name}에게 말을 건넸다.`,
      );
      era.println();

      await teio.say_and_wait(
        '나, 진심이야…… 지금 다시 한번 물어볼게. 나랑 함께 달려 줄래?',
      );
      era.println();

      era.printButton('「달릴게. 반드시…… 언제까지나 함께 달릴게」', 1);
      await era.input();
      await era.printAndWait(
        `${teio.teen_sex_title}은(는) 턱을 살짝 당기고 돌아서서 힘차게 팔을 흔들었다. 망토가 활짝 휘날렸다. 타오르는 불꽃처럼 경기장으로 들어서더니 앞쪽의 빛 속으로 녹아들었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_g_s: (() => {
    const title = '달리고 싶은 마음(하)';
    /** @param {CharaTalk} teio トウカイテイオー */
    const f = async (teio) => {
      await era.printAndWait('기적은 누구에게나 찾아올 수 있다.');
      await era.printAndWait(
        '하지만 이 레이스장에서 기적은 단 하나만 탄생한다.',
      );
      era.println();

      await teio.say_and_wait('후우——');
      era.println();

      await teio.say_and_wait('끈질기게 따라붙네.', true);
      await teio.say_and_wait('전보다 훨씬 힘들어——', true);
      await teio.say_and_wait(
        '거리를 벌릴 수가 없어…… 앞에서 끌고 가는 도주도, 나와 같은 선행도…… 뒤에서 기회를 노리는 선입과 추입도……',
        true,
      );
      await teio.say_and_wait('다들…… 필사적으로 쫓아오고 있어.', true);
      era.println();

      await era.printAndWait(
        `앞쪽의 ${teio.uma_sex_title}는 바람처럼 달렸고, 흩날리는 은빛 머리카락 끝이 코앞에 닿을 듯했다. 옆의 붉은 머리 ${teio.uma_sex_title}는 일렁이는 붉은 불꽃처럼 바짝 붙어 앞을 가로막는 모든 것을 집어삼키려 했다.`,
      );
      await era.printAndWait(
        '타고난 재능을 최대한 활용하고, 단련하고, 절대로 지지 않겠다는 각오로 경기장에 나선다——그것뿐이라면 오히려 화가 날 정도였다.',
      );
      await era.printAndWait(
        `그런 것은 이 무대에 서기 위한 최소한의 조건일 뿐, 특별할 것도 없기 때문이다.`,
      );
      era.println();

      await teio.say_and_wait('큭……', true);
      await teio.say_and_wait(
        `트레이너가 전에 말한 대로일지도 몰라…… 이 세상에는 나보다 강한 ${teio.uma_sex_title}가 있었고, 지금도 있어.`,
        true,
      );
      await teio.say_and_wait(
        '하지만 오늘은…… 정말로 지고 싶지 않아. 지지 않을 거야. 질 수 없어!',
        true,
      );
      era.println();

      await era.printAndWait(
        '크게 숨을 들이쉬고 산소를 탐욕스럽게 빨아들여 힘으로 바꾸며 한계를 넘었다.',
      );
      era.println();

      await teio.say_and_wait('다들 가장 빛나는 순간은…… 언제일까?', true);
      await teio.say_and_wait('내 순간은…… 지금이야!', true);
      era.println();

      era.printButton('「테이오!」', 1);
      await era.input();
      await era.printAndWait(`중계「——${teio.name}——」`);
      era.println();
      await era.printAndWait(
        `${teio.teen_sex_title}은(는) 몸을 낮추고 마지막 스퍼트를 걸었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  async ws_palace_g(teio) {
    await teio.say_and_wait('내 이름은 토카이 테이오. 토카이——테이오!');
  },
};
