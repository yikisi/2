/**
 * @file ナイスネイチャ - 育成
 * @author 红红火火恍惚
 */
const era = require('#/era-electron');

module.exports = {
  race_win: (() => {
    const title = '레이스 승리!';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     */
    const f = async (nature, callname) => {
      await nature.say_and_wait(`1착…… 내가 1착! ${callname}봐! 나, 1착이야!`);
      era.printButton('「축하해. 네가 강하니까 이긴 거야.」', 1);
      era.printButton('「네 힘으로 이긴 거야.」', 2);
      if ((await era.input()) === 1) {
        await nature.say_and_wait(
          '응, 내가 강한…… 건지는 잘 모르겠지만. 그래도…… 뭐, 가끔은 트레이너의 칭찬도 받아 둬야지.',
        );
      } else {
        await nature.say_and_wait(
          `뭐야~~ 그거, 큰 소리로 『난 강하니까』 하고 선언하는 것 같잖아? 나중에 지면 창피하다고.`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  begin_race: (() => {
    const title = '평소대로';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, you, callname, self_call) => {
      await nature.say_and_wait(
        `응, 응. ${self_call}, 무사히 메이크 데뷔를 마쳤네……`,
      );
      era.printButton('「수고했어.」', 1);
      await era.input();
      await nature.say_and_wait('고마워. 한바탕 제대로 싸우고 왔지── 하하.');
      await nature.say_and_wait('어때? 내 달리기…… 어땠어?');
      era.printButton('「정말 좋았어!」', 1);
      await era.input();
      await nature.say_and_wait('아하하! 대답이 시원시원하네──');
      await nature.say_and_wait(
        `나도 먼저 ${callname}의 앞으로 계획을 알고 싶은데.`,
      );
      era.printButton('「먼저 물어볼게. 나가고 싶은 레이스가 있어?」', 1);
      await era.input();
      await nature.say_and_wait(
        '……나가고 싶은 레이스라…… 지금 내가 목표를 말할 처지가 된다고 생각해?',
      );
      await nature.say_and_wait(
        '그런 건 트레이너가 주도해도 돼. 자, 실력을 보여 줄 차례야~',
      );
      await era.printAndWait(
        `나이스 네이처가 데뷔하기 전부터 ${you.name}은(는) ${nature.sex}가 중거리에 적합하다고 생각했다. ${nature.sex}는 막판 스퍼트가 날카롭고, 버텨야 할 때 잘 버텨 준다.`,
      );
      await era.printAndWait(
        '앞으로의 클래식 전선을 생각하면 첫 번째로 선택해야 할 레이스는──',
      );
      era.printButton('「『와카고마 스테이크스』에 나가 볼래?」', 1);
      await era.input();
      await nature.say_and_wait(
        '오, 그렇구나. 오픈 레이스로 실력을 보겠다는 거네.',
      );
      await nature.say_and_wait('나쁘지 않네. 그걸로 가자.');
      era.printButton('「그럼 평소대로 성적을 내 보자.」', 1);
      await era.input();
      await nature.say_and_wait(
        '평소대로라니…… 그거, 3착이면 된다는 뜻이야? 내 목표는 3착이 아니거든.',
      );
      await nature.say_and_wait(
        '하아, 매번 1착을 차지하는 괴물도 있긴 하지만……',
      );
      await nature.say_and_wait(
        `……테이오는 어떻게 하려나. ${nature.sex}, 어떤 레이스에 나갈까.`,
      );
      await era.printAndWait(
        `토카이 테이오와 나이스 네이처는 같은 세대에 데뷔했으니 ${nature.sex}가 신경 쓰는 것도 무리는 아니다. 하지만……`,
      );
      era.printButton('「가장 중요한 건 트레이닝이야!」', 1);
      await era.input();
      await nature.say_and_wait(
        `알고 있어. 맞붙지 않으면 좋겠다고 생각했을 뿐이야~ 그럼 앞으로도 잘 부탁해~`,
      );
      await era.printAndWait(
        '이렇게 다음 목표는 『와카고마 스테이크스』로 정해졌다!',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_ny: (() => {
    const title = '새해';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, callname, self_call) => {
      await nature.say_and_wait(`${callname}, 새해 소망, 안 쓸래?`);
      await era.printAndWait(
        '나이스 네이처는 그렇게 말하며 붓과 종이를 내밀었다.',
      );
      await era.printAndWait(
        '새해 소망── 새로운 한 해에 대한 기대와 축복을 종이에 담는 것이다. 여기에 적을 말은──',
      );
      era.printButton('「건강」(체력+300)', 1);
      era.printButton('「강해져라」(모든 능력+10)', 2);
      era.printButton('「다재다능」(스킬 Pt+70)', 3);
      if (era.get('love:60') >= 75) {
        era.printButton('「자손 번영」', 4);
      }
      const ret = await era.input();
      switch (ret) {
        case 1:
          await nature.say_and_wait(
            `건강이라…… ${callname}도 이제 그런 나이가 됐구나. 허리 아프고 그러면 성가시지? ${self_call}도 이해해──`,
          );
          await nature.say_and_wait([
            '응? 자기한테 쓰는 게 아니야? 그럼……? 어!? 나? 잠깐, 그…… ',
            callname,
            ', 자신보다 날 더 신경 쓰는 거야…… 윽! 그런 건 반칙이야! ',
            callname,
            '도 나도 새해에는 건강하게 지내자!',
          ]);
          break;
        case 2:
          await nature.say_and_wait([
            '강해져라, 라~ ',
            callname,
            ', 의외로 열혈파야? 아니면 겉보기보다 정신 연령이…… 하하하, 농담이야……',
          ]);
          await nature.say_and_wait([
            '응? 자기한테 쓰는 게 아니야? 그럼……? 어!? 나? 잠깐, 그…… ',
            callname,
            ', 자신보다 날 더 신경 쓰는 거야…… 윽! 그런 건 반칙이야! ',
            callname,
            '도 나도 새해에는 즐겁게 지내자!',
          ]);
          break;
        case 3:
          await nature.say_and_wait(
            `다재다능? 확실히 재주가 많은 사람이 ${nature.child_sex_title}에게도 인기가 있겠지. ${callname}도 이제 그런 나이니까 슬슬 자기 ${
              nature.sex
            } 생각도 해 보는 게…… 내가 할 말은 아니지만, 하하하하……`,
          );
          await nature.say_and_wait([
            '응? 자기한테 쓰는 게 아니야? 그럼……? 어!? 나? 잠깐, 그…… ',
            callname,
            ', 자신보다 날 더 신경 쓰는 거야…… 윽! 그런 건 반칙이야! ',
            callname,
            '도 나도 새해에는 즐겁게 지내자!',
          ]);
          break;
        case 4:
          await nature.say_and_wait(
            `자, 자손 번영? ${callname}도 참, 아침부터 대담한 화제를 꺼내네…… 하지만 ${callname}이(가) 원한다면…… 나도 괜찮아? 아예…… 지금부터?`,
          );
          await era.printAndWait(
            '뺨을 붉힌 나이스 네이처가 한 걸음씩 다가왔다. 아무래도 한바탕은 피할 수 없을 것 같다……',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  waka_sta_win: (() => {
    const title = '「우연」에서부터';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (nature, teio, you) => {
      await nature.say_and_wait('이겨 버렸어…… 내가…… 테이오한테 이겼어?');
      await nature.say_and_wait(
        '하, 하하…… 하하……! 굉장해, 정말……!? 내가 이겼어……',
      );
      await teio.say_and_wait('이야~ 져 버렸네!');
      await nature.say_and_wait('……윽! 테이오……! 난──');
      await teio.say_and_wait('──더 강해질 계기를 찾았어!');
      await nature.say_and_wait('어……');
      await teio.say_and_wait(
        '나, 아직 더 강해질 수 있어! 헤헤, 기대되기 시작했어──!',
      );
      await teio.say_and_wait(
        '최강까지 앞으로 몇 킬로미터지? 단숨에 뛰어오를 거야!',
      );
      await nature.say_and_wait('아……');
      await nature.say_and_wait('위험했네, 위험했어. 나, 우쭐할 뻔했잖아.');
      await nature.say_and_wait('아니야. 이번에 이긴 건…… 그냥 우연일 뿐이야.');
      await nature.say_and_wait('아무리 생각해도── 저 애가 훨씬 빛나니까……');
      era.printButton('「이겼네, 네이처!」', 1);
      await era.input();
      await nature.say_and_wait('……응.');
      era.printButton('「기쁘지 않아?」', 1);
      await era.input();
      await nature.say_and_wait(
        '이긴 직후에는 기뻤지. 기쁘긴 한데…… 이번 승리는 분명 우연이야. 실력으로 이긴 게 아니야.',
      );
      era.printButton('「왜 그렇게 생각해?」', 1);
      await era.input();
      await nature.say_and_wait('그야…… 이상하잖아? 내가 테이오보다 강하다니.');
      await nature.say_and_wait(
        '조금도 빛나지 않는 나라고? 뭔가 잘못된 거야. ──정말! 착각하고, 창피해──!',
      );
      await era.printAndWait(
        `나이스 네이처는 분명히 이겼다. 그리고 그 이유는 틀림없이 ${nature.sex}의 실력이다. 하지만 ${nature.sex}는……`,
      );
      await nature.say_and_wait('……정말 창피해.');
      await era.printAndWait(
        `이겼는데도 진 것처럼 풀이 죽은 이유는 ${nature.sex}가 아직 자기 실력을 온전히 믿지 못하기 때문이다. 즉, 자신감 부족이다. 그렇다면 지금 필요한 건──`,
      );
      era.printButton('「네이처, 원정 가지 않을래?」', 1);
      await era.input();
      await nature.say_and_wait('원정……? 어? 왜……');
      era.printButton('「여름에도 성적을 내 보자.」', 1);
      await era.input();
      await era.printAndWait(
        `지금 ${nature.sex}를 클래식 전선에 투입하면 위험한 도박이 된다. 얼마 남지 않은 자신감마저 잃게 할 수 있다. 그보다는 지방 레이스에 도전해 차근차근 성과를 쌓고, 최종적으로 ${nature.sex}의 성장으로 이어지게 하고 싶다.`,
      );
      await nature.say_and_wait(
        '그러니까…… 목표는 『사츠키상』도 『일본 더비』도 아니란 거지……? ……나, 아직 실력이 부족하니까.',
      );
      era.printButton(
        '「지금은 서두르지 말고 정말 강해졌다는 걸 확인하자.」',
        1,
      );
      await era.input();
      await nature.say_and_wait('……알겠어.');
      await nature.say_and_wait(
        '그렇네. 지금의 나라면 다음에 또 이겨도…… 받아들이지 못할 테니까.',
      );
      era.printButton('「이번 여름을 넘기면 분명 강해질 수 있어.」', 1);
      await era.input();
      await nature.say_and_wait('……그랬으면 좋겠네.');
      await era.printAndWait(
        '그렇게 말하고 나이스 네이처는 길게 숨을 내쉬었다.',
      );
      await nature.say_and_wait(
        '응, OK, OK! 전국 순회라면 나한테 맞을지도 모르겠네. 그래서? 계속 순회만 시킬 생각은 아니지? 어느 레이스에 나갈지 정했어?',
      );
      era.printButton('「『코쿠라 기념』은 어때?」', 1);
      await era.input();
      await era.printAndWait(
        '코쿠라에서 열리는 중상 레이스. 나이스 네이처의 자신감을 키우기에는 더없이 좋은 무대다.',
      );
      await nature.say_and_wait(
        '그렇구나. 거리도 와카고마 스테이크스랑 같았지? 응, 거기로 하자. 하지만 여름의 코쿠라라…… 더위 먹겠는데……',
      );
      await era.printAndWait([
        '이렇게 ',
        you.get_colored_name(),
        '와(과) ',
        nature.get_colored_name(),
        '는 다음 목표를 『코쿠라 기념』으로 정했다!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  waka_sta_lose: (() => {
    const title = '패배해도 여름은 온다';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, teio, you, callname, self_call) => {
      await nature.say_and_wait('하아…… 하아…… 하아……');
      await nature.say_and_wait(
        `……응, 나쁘지 않아, ${self_call}, 제대로 성적은 냈어──`,
      );
      await era.printAndWait('???「와아아아아아아……!!」');
      await nature.say_and_wait('……어!? 이 소리는 뭐야──');
      await teio.say_and_wait(
        '내 실력은 이게 다가 아니야! 앞으로도 내가 활약하는 모습 지켜봐 줘! 모두의 상상을 계속 뛰어넘겠다고 약속할게! 또 보자! 고마워♪',
      );
      await era.printAndWait('???「와아아아아아아……!!」');
      await nature.say_and_wait('…………');
      await nature.say_and_wait('분위기를 엄청나게 띄우네. 역시 테이오──');
      await nature.say_and_wait(
        '……나, 바보야. 저런 상대에게 도전하려고 하다니. 게다가 역시 이 정도밖에 못하고. 분수도 모르지. 정말 바보야……',
      );
      await nature.say_and_wait('……아아…… 테이오…… 눈부셔……');
      era.drawLine();
      await nature.say_and_wait(
        `──아, ${callname}……, 그…… ${self_call}, 달리고 돌아왔어──`,
      );
      era.printButton(`「${nature.sex}에게 끝까지 따라붙었다니 대단해.」`, 1);
      await era.input();
      await nature.say_and_wait(
        '하하── 됐어, 위로 안 해도 돼. 봐, 요구한 대로 했잖아?',
      );
      await nature.say_and_wait(
        '『평소대로』 성적을 냈어. 응, 내 할 일은 다 했네.',
      );
      await nature.say_and_wait(
        '……그러니까 더 높은 곳을 노리겠다는 건 쓸데없는 생각이었어. 도전할 생각만 안 했으면 정말 평소와 같았을 텐데.',
      );
      await nature.say_and_wait(
        '……마음도 말이야. 정말── 빛나기에는 아직 너무 멀었네──',
      );
      await era.printAndWait(
        `실제로 ${nature.sex}의 말대로 이번 성적은 충분했다. 1착은 아니어도 더 긍정적으로 받아들여도 좋을 성적이었다.`,
      );
      await nature.say_and_wait('……하아.');
      await era.printAndWait(
        `그런데도 ${nature.sex}는 이렇게 풀이 죽어 있다. 원래 자신감이 부족한 게 가장 큰 이유일 것이다. 그렇다면 지금 필요한 건──`,
      );
      era.printButton('「네이처, 원정 가지 않을래?」', 1);
      await era.input();
      await nature.say_and_wait('원정……? 어? 왜……');
      era.printButton('「여름에도 성적을 내 보자.」', 1);
      await era.input();
      await era.printAndWait(
        `지금 ${nature.sex}를 클래식 전선에 투입하면 위험한 도박이 된다. 얼마 남지 않은 자신감마저 잃게 할 수 있다. 그보다는 지방 레이스에 도전해 차근차근 성과를 쌓고, 최종적으로 ${nature.sex}의 성장으로 이어지게 하고 싶다.`,
      );
      await nature.say_and_wait(
        '그러니까…… 목표는 『사츠키상』도 『일본 더비』도 아니란 거지……? ……나, 아직 실력이 부족하니까.',
      );
      era.printButton(
        '「지금은 서두르지 말고 정말 강해졌다는 걸 확인하자.」',
        1,
      );
      await era.input();
      await nature.say_and_wait('……알겠어.');
      await nature.say_and_wait(
        '그렇네. 지금의 나라면 다음에 또 이겨도…… 받아들이지 못할 테니까.',
      );
      era.printButton('「이번 여름을 넘기면 분명 강해질 수 있어.」', 1);
      await era.input();
      await nature.say_and_wait('……그랬으면 좋겠네.');
      await era.printAndWait(
        '그렇게 말하고 나이스 네이처는 길게 숨을 내쉬었다.',
      );
      await nature.say_and_wait(
        '응, OK, OK! 전국 순회라면 나한테 맞을지도 모르겠네. 그래서? 계속 순회만 시킬 생각은 아니지? 어느 레이스에 나갈지 정했어?',
      );
      era.printButton('「『코쿠라 기념』은 어때?」', 1);
      await era.input();
      await era.printAndWait(
        '코쿠라에서 열리는 중상 레이스. 나이스 네이처의 자신감을 키우기에는 더없이 좋은 무대다.',
      );
      await nature.say_and_wait(
        '그렇구나. 거리도 와카고마 스테이크스랑 같았지? 응, 거기로 하자. 하지만 여름의 코쿠라라…… 더위 먹겠는데……',
      );
      await era.printAndWait([
        '이렇게 ',
        you.get_colored_name(),
        '와(과) ',
        nature.get_colored_name(),
        '는 다음 목표를 『코쿠라 기념』으로 정했다!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_ss_1: (() => {
    const title = '여름 합숙';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (nature, you) => {
      await era.printAndWait(
        '오늘부터 『여름 합숙』── 실력을 키우기 위한 강화 트레이닝이 시작된다.',
      );
      await nature.say_and_wait('더워……');
      await nature.say_and_wait(
        '햇님도 기운이 넘치네. 그늘에서 사는 나한테는 너무 눈부셔……',
      );
      await nature.say_and_wait(
        '벌써부터 마지막까지 무사히 버틸 수 있을지 걱정되기 시작했어.',
      );
      era.printButton('「『코쿠라 기념』도 있으니까 기운 내야지.」', 1);
      await era.input();
      await nature.say_and_wait(
        '아니, 그게 문제라고. 합숙 도중에 레이스라니 일정이 너무 빡빡하잖아.',
      );
      await nature.say_and_wait(
        '여기는 코쿠라랑도 멀고, 이동하느라 트레이닝할 시간도 줄고……',
      );
      await nature.say_and_wait(
        '원래도 구름 위에 있는 녀석들한테 순식간에 뒤처지겠네──',
      );
      era.printButton('「그럼 코쿠라까지 계속 달리자!」', 1);
      await era.input();
      await nature.say_and_wait(
        '아, 좋네, 좋아! 달리면서 트레이닝도 하고, 일석이조네.',
      );
      await nature.say_and_wait(
        '어차피 천 킬로미터쯤 되겠지? 네, 네, 식은 죽 먹기죠──',
      );
      await nature.say_and_wait(
        '그럴 리가 없잖아── 갑자기 이상한 제안 하지 마.',
      );
      await nature.say_and_wait('트레이너, 속으로는 기대하고 있지……');
      await era.printAndWait(
        `이렇게 ${you.name}와(과) 나이스 네이처의 뜨거운 여름 합숙이 시작됐다.`,
      );
      await nature.say_and_wait('아, 열혈은 적당히 부탁해. 그럼 잘 부탁해──');
    };
    f.title = title;
    return f;
  })(),
  koku_kin: (() => {
    const title = '도금일지라도';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     */
    const f = async (nature, you, callname) => {
      await nature.say_and_wait(
        `에헤헤…… 해냈어, ${callname}. 제대로 성적 냈어!`,
      );
      era.printButton('「잘했어!」', 1);
      await era.input();
      await nature.say_and_wait('응!');
      await nature.say_and_wait(
        '후후…… 있잖아, 코쿠라 상점가 사람들도 보러 와 줬어. 말 몇 마디 나눴을 뿐인데? 다들 바쁠 텐데……',
      );
      await nature.say_and_wait(
        '……그렇게 응원받으니까 이래도 괜찮겠다는 생각이 들더라. 난 내 방식대로 한 걸음씩…… 천천히 나아가면 되는 거지?',
      );
      await nature.say_and_wait('언젠가 닿을 수 있을지 몰라도……');
      await nature.say_and_wait(
        `……있잖아, ${callname}. 좀 멋없는 말 하나 할게.`,
      );
      era.printButton('「무슨 일인데?」', 1);
      await era.input();
      await nature.say_and_wait('……나, 테이오한테 이길 수 있을까?');
      await nature.say_and_wait('……농담! 농담이니까 잊어 줘──');
      era.printButton('「이길 수 있어.」', 1);
      await era.input();
      await nature.say_and_wait('……어라…… 아윽.');
      await nature.say_and_wait(
        `……응, ${callname}(이)라면 그렇게 말할 줄 알았어.`,
      );
      await nature.say_and_wait('대답을 알면서 묻는 건 비겁하지. 하지만……');
      await nature.say_and_wait(
        '누가 등을 떠밀어 주지 않으면 앞으로 나아갈 수 없으니까.',
      );
      await nature.say_and_wait(
        `……테이오는 클래식의 길을 달리고 있어. 다음에는 ${nature.sex}도 분명── 『국화상』을 노릴 거야.`,
      );
      await nature.say_and_wait(
        '그러니까 나도 다음에는…… 『국화상』에서…… 달리고 싶어. 어떻게…… 생각해……?',
      );
      era.printButton('「거리가 꽤 늘어나는데 괜찮겠어?」', 1);
      await era.input();
      await era.printAndWait(
        `『국화상』은 3000미터. 이번 코쿠라 기념보다 1000미터 길다. 나이스 네이처에게는 힘겨운 싸움이 될지도 모른다. 하지만 ${nature.sex}가 각오를 다졌다면……!`,
      );
      await nature.say_and_wait(
        '물론 문제가 크겠지. 그런 거리는 아마 나한테 잘 안 맞을 테고.',
      );
      await nature.say_and_wait(
        '하지만…… 이번엔 물러서지 않을래. ──『국화상』에 나가자!',
      );
      era.printButton('「좋아!」', 1);
      await era.input();
      await nature.say_and_wait('하아~~~ 정해졌네. 정말 정해졌어.');
      await nature.say_and_wait(
        '네이처야, 이제 도망갈 데 없다. 큰 무대에서 정면으로 맞붙는 거야……',
      );
      await nature.say_and_wait('그래도…… 응. 이것도 나쁘지…… 않으려나?');
      await era.printAndWait(
        `……${nature.sex}는 자신감을 조금 되찾은 듯했다. 하지만 『국화상』을 앞두고 ${you.name}은(는) 아직 ${nature.sex}를 위해 해 줄 수 있는 게 있을 것이다. 그렇게 생각하던 중 떠오른 것은──`,
      );
      await nature.used_to_say_and_wait('성적이 어떻든 다들 기뻐해 줘.');
      await nature.used_to_say_and_wait(
        '열심히 한다고 웃으면서 칭찬해 줘. 하지만 정작 나는 전혀 확신이 안 들어.',
      );
      await nature.used_to_say_and_wait(
        '응…… 열심히 했다고 자신 있게 말할 수가 없거든── 가령 1착이면 확실하잖아? 트로피도 받고, 텐노상이면 방패라든가.',
      );
      await nature.used_to_say_and_wait(
        '그걸 보면 아, 정말 열심히 했구나 싶겠지.',
      );
      await nature.used_to_say_and_wait(
        '……하지만 그 기분은 1착만 누릴 수 있는 특권이야.',
      );
      await era.printAndWait(
        `……${you.name}은(는) 아직 ${nature.sex}를 위해 무언가 해 줄 수 있다!`,
      );
      await era.printAndWait('──코쿠라에서 중앙으로 돌아오는 길……');
      await nature.say_and_wait('아, 트레이너. 맡겨 둔 과자 좀 줄래──?');
      await nature.say_and_wait(
        '코쿠라 사람들이 화과자를 줬잖아? 신칸센에서 먹으려고──',
      );
      era.printButton('「알았어.」', 1);
      await era.input();
      await era.printAndWait('(부스럭…… 팔랑)');
      await nature.say_and_wait('아, 떨어지겠어.');
      await nature.say_and_wait('……종이접기 트로피……? 모양이 삐뚤빼뚤하네.');
      era.printButton('「……이거, 내가 만들었어.」', 1);
      await era.input();
      await nature.say_and_wait(
        '헤에~ 트레이너가? 후후── 그런 귀여운 취미가 있었구나~',
      );
      era.printButton('「네이처에게 주려고 만들었어.」', 1);
      await era.input();
      await nature.say_and_wait('그렇구나……');
      await nature.say_and_wait('어!? 나한테!? 왜……?');
      era.printButton('「자신감을 가졌으면 해서.」', 1);
      await era.input();
      await nature.say_and_wait('자신감……');
      await you.say_and_wait(
        '어떤 성적을 거둬도 스스로를 믿기 어렵다는 마음은 이해해.',
      );
      await you.say_and_wait(
        '그래서 쌓아 온 성과를 눈에 보이는 형태로 만들면 조금은 자신감이 생기지 않을까 싶었어.',
      );
      await nature.say_and_wait('……날 위해서…… 일부러……');
      await nature.say_and_wait(
        '……그러니까 어른이나 돼서 호텔에 틀어박혀 트로피를 만들고 있었단 거야?',
      );
      await nature.say_and_wait('나 초등학생 아니거든.');
      era.printButton('「그렇긴 하지……」', 1);
      await era.input();
      await era.printAndWait(
        `……맞는 말이다. 만들기는 했지만 어린애 취급하는 것처럼 느껴질까 봐 ${you.name}은(는) 건네야 할지 망설이고 있었다……`,
      );
      await nature.say_and_wait('……후후.');
      await nature.say_and_wait('어쩔 수 없네. 너를 봐서 받아 둘게.');
      era.printButton('「어?」', 1);
      await era.input();
      await nature.say_and_wait(
        '응? 왜 놀라? 날 위해 일부러 만들어 준 거잖아?',
      );
      await nature.say_and_wait('자, 자, 얼른 꺼내. 안 주면 안 돌아갈 거야.');
      era.printButton('「받아 줄 거야?」', 1);
      await era.input();
      await nature.say_and_wait('……그야……');
      await nature.say_and_wait('삐뚤빼뚤한 트로피가 딱 나한테 어울리잖아?');
      await nature.say_and_wait(
        '금빛 도금이라든가, 삐뚤어진 모서리라든가. 전부…… 나 같지 않아?',
      );
      await nature.say_and_wait(
        '왠지 친근감? 그런 게…… 응, 그러니까 그런 거야. ──고마워.',
      );
      await nature.say_and_wait('……다음 트로피는 훨~씬 더 잘 만들어 줘.');
      era.printButton('「다음!?」', 1);
      await era.input();
      await nature.say_and_wait(
        '아직 레이스에 나갈 거니까. 트레이너도 힘내! 나도 레이스에서 열심히 할게.',
      );
    };
    f.title = title;
    return f;
  })(),
  we_se: (() => {
    const title = '여름 합숙 종료';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     */
    const f = async (nature, callname) => {
      await era.printAndWait(
        '오늘은 여름 합숙의 마지막 날. 이를 기념해 학원에서는 성대한 불꽃놀이를 연다.',
      );
      await era.printAndWait(
        '나이스 네이처와 나란히 해변에 서서 바다 위에 피어나는 불꽃을 올려다봤다.',
      );
      await nature.say_and_wait(
        `──여름, 끝났네. 뭐랄까, 청춘이네── 난 그런 역할 아니지만. 그래도 ${callname}——`,
      );
      await era.printAndWait(
        `곁에 선 나이스 네이처가 감탄했지만, 불꽃 터지는 소리에 ${nature.sex}의 목소리는 잘 들리지 않았다.`,
      );
      await era.printAndWait(
        `${nature.sex}의 마지막 말을 다시 물어도 나이스 네이처는 살짝 웃으며 넘겼다.`,
      );
      await era.printAndWait(
        '나이스 네이처와 함께한 여름 합숙은 그렇게 끝났다.',
      );
    };
    f.title = title;
    return f;
  })(),
  s_a_47_33: (() => {
    const title = '각오를 다지고 앞으로!';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, you, callname, self_call) => {
      await era.printAndWait(
        `강가에서 나이스 네이처를 봤다는 말을 듣고 ${you.name}은(는) ${nature.sex}를 찾으러 갔다──`,
      );
      await nature.say_and_wait('하아, 하아…… 하아……');
      await nature.say_and_wait('안 돼, 달릴 때…… 머리도 써야지……');
      await nature.say_and_wait(
        '그리고 의욕도. 네이처, 풀이 죽었잖아. 기죽지 말고 기운 내~',
      );
      await nature.say_and_wait('떠올려, 얼른 떠올려 봐. 난 어떻게 달렸지?');
      await nature.say_and_wait(
        '내 방식을 지키면서 한 걸음씩…… 천천히 나아가면 되는 거잖아.',
      );
      await nature.say_and_wait('언젠가 닿을 수 있을지 몰라도……');
      await nature.say_and_wait('……할 수 있는 한 정면으로 맞서는 거야.');
      await nature.say_and_wait(
        '아직 가슴을 펴고 자신 있게 레이스에 나설 수 있는 건 아니야……',
      );
      await nature.say_and_wait('하지만 도망갈 곳도 없어. 그러니까 테이오와──');
      era.printButton('「네이처라면 할 수 있어.」', 1);
      await era.input();
      await nature.say_and_wait(
        `아…… ${callname}도 참, 금방 날 응석받이로 만든다니까~`,
      );
      await nature.say_and_wait('그러면 안 돼~ 나 같은 게 들러붙는다고……');
      era.printButton('「자율 트레이닝 하느라 수고했어!」', 1);
      await era.input();
      await nature.say_and_wait('우왓! 어, 언제부터 있었어!?');
      await nature.say_and_wait(
        '아…… 됐어, 말 안 해도 돼. 알면 아마 가슴이 아플 것 같아.',
      );
      era.printButton('「방금은 무슨 트레이닝이었어?」', 1);
      await era.input();
      await nature.say_and_wait('……트레이닝이라면 뭐, 그렇겠네.');
      await nature.say_and_wait(
        '승부할 힘을 좀 갈고닦으려고 나한테 맞는 무기를 찾고 있어.',
      );
      await nature.say_and_wait(
        '관건은 결승선 앞이야. 마지막 직선을 제대로 잡아야지.',
      );
      await nature.say_and_wait(
        '그걸 전제로 하는 3000미터…… 하하. 그렇게 생각하니까 정말 기네.',
      );
      await era.printAndWait(
        '3000미터…… 승부를 걸 타이밍을 잘못 잡으면 직선에서 승부를 결정짓기도 어렵다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 나이스 네이처가 마음껏 달리기를 바랐다. 레이스가 끝난 뒤 평소처럼 밝게 웃는 얼굴을 보고 싶었다.`,
      );
      await nature.say_and_wait(`${callname}？`);
      era.printButton('「힘내자!」', 1);
      await era.input();
      await nature.say_and_wait('뭐?');
      await nature.say_and_wait('힘내자니…… 대충 하는 조언이네……');
      era.printButton('「아니, 방금은……」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 자신을 격려하려던 말이 무심코 입 밖으로 나와 버렸다.`,
      );
      await nature.say_and_wait(
        '풉, 후후후…… 아하하하! 정말! 『망했다』는 표정 짓지 마.',
      );
      await nature.say_and_wait('후우…… 응, 맞아. 힘내자.');
      await nature.say_and_wait(
        '도망칠 수 없다면 앞으로 나아가는 수밖에 없지.',
      );
      await nature.say_and_wait(`${callname}, 지금 잠깐 같이 있어 줄래?`);
      await nature.say_and_wait(
        `${self_call}가 열심히 할 테니까. 곁에서 지켜봐 주면 기쁠 거야.`,
      );
      era.printButton('「나야말로 잘 부탁해.」', 1);
      await era.input();
      await nature.say_and_wait('하하, 센스 있네.');
      await nature.say_and_wait('좋아, 간다!');
      await nature.say_and_wait(
        '내가 열심히 할수록 트레이너표 트로피도 기대할 수 있는 거지?',
      );
      era.printButton('「……더 노력할게.」', 1);
      await era.input();
      await nature.say_and_wait('아하하하하!');
    };
    f.title = title;
    return f;
  })(),
  kiku_sho: (() => {
    const title = '나만의 레이스';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (nature, you) => {
      await era.printAndWait(
        '관객「나이스 네이처, 수고했어──! 멋지게 달렸어──!」',
      );
      await era.printAndWait(
        '레이스가 끝난 뒤 관중석에서 들려온 목소리는 나이스 네이처가 『자신만의 레이스』를 달렸다는 증거였다. 그리고──',
      );
      await nature.say_and_wait(
        '트레이너, 나…… 이겼어…… 제대로 내 레이스를 달린 거…… 맞지?',
      );
      era.printButton('「응!」', 1);
      await era.input();
      await nature.say_and_wait('다행이다…… 에헤헤.');
      await nature.say_and_wait(
        '『국화상』에서 이 성적이면 더 바랄 게 없지! 나, 정말 열심히 했어!',
      );
      await nature.say_and_wait('오늘도…… 삐뚤빼뚤한 트로피, 준비해 뒀어?');
      era.printButton('「물론이지. 『참 잘했어요 상』이야!」', 1);
      await era.input();
      await nature.say_and_wait('아…… 트레이너가 직접 만든 트로피!');
      await era.printAndWait(
        `『코쿠라 기념』 때 나이스 네이처에게 자신감을 주려고 ${you.name}은(는) 종이접기 트로피를 만들어 건넸다. 지난번에 ${nature.sex}가 기대했기에 ${you.name}은(는) 이번에도 만들었다……`,
      );
      await nature.say_and_wait(
        '……정말 만들었구나. 에헤헤, 여전히 삐뚤빼뚤하네.',
      );
      await nature.say_and_wait('좋네, 좋아. 나중에 시상식 하자.');
      await nature.say_and_wait(
        `네이처 ${nature.sex_code === 1 ? '' : ' 님'}의 활약을 축하하며♪`,
      );
      await nature.say_and_wait(
        `……지금은 우쭐대지만 테이오도 나왔으면 이렇게 잘 풀리진 않았을지도…… 테이오 말이야. ${nature.sex}는 괜찮으려나. 얼마나 다친 걸까.`,
      );
      era.printButton(`「${nature.sex}라면 괜찮을 거야.」`, 1);
      await era.input();
      await nature.say_and_wait('응…… 그렇겠지.');
      await nature.say_and_wait(
        `그야 ${nature.sex}는 테이오니까. 금방 돌아와서 『난 무적이야!』라든가 말할 것 같아.`,
      );
      await nature.say_and_wait('……그 전에 나도 조금 더 강해져야지.');
      era.printButton('「아직 큰 승부가 하나 남았어.」', 1);
      await era.input();
      await nature.say_and_wait(
        '뭐? 겨울도 다 돼 가는데 아직 큰 승부가 있다고? ……아! 혹시……',
      );
      era.printButton('「『아리마 기념』에 도전하지 않을래?」', 1);
      await era.input();
      await era.printAndWait(
        `나이스 네이처에게는 든든한 팬들이 있고, 『국화상』에서도 실력을 발휘했다. 지금의 ${
          nature.sex
        }라면 『아리마 기념』에 도전할 수 있다! 게다가 『아리마 기념』의 출전자들은 올해 주목받은 ${nature.uma_sex_title}들이다. ${
          nature.couple_title
        }과 함께 달리면 더욱 성장할 수 있을 것이다.`,
      );
      await nature.say_and_wait('『아리마 기념』이라……');
      await nature.say_and_wait(
        '늘 응원해 주는 마음에 보답하려면 가장 좋은 무대……겠지?',
      );
      await nature.say_and_wait(
        '……못할지도 몰라. 나가도 전혀 실력을 못 낼 수도 있어. 그래도……',
      );
      await nature.say_and_wait('──『아리마 기념』에 나가고 싶어!');
      era.printButton('「그럼 도전하자!」', 1);
      await era.input();
      await era.printAndWait(
        `이렇게 ${you.name}와(과) 나이스 네이처는 클래식급 마지막 도전을 『아리마 기념』으로 정했다!`,
      );
      if (era.get('love:60') >= 75) {
        era.printButton('「그리고……이것도 축하 선물이야」', 1);
        await era.input();
        await nature.say_and_wait('응? 뭔데, 뭔데?');
        await era.printAndWait(
          '나이스 네이처의 물음에 바로 답하지 않고, 뒤로 손을 뻗어 대기실 문을 잠갔다',
        );
        era.printButton('「우리 집안이 자랑하는 염색체야」', 1);
        await era.input();
        await nature.say_and_wait(
          '……뭐? 잠깐, 잠깐, 잠깐! 여기서 하겠다고? 여긴 대기실이잖아!',
        );
        await era.printAndWait(
          `${you.name}가 갑자기 옷을 벗기 시작하자, 나이스 네이처는 얼굴이 새빨개져 소파 뒤로 몸을 움츠렸다.`,
        );
        era.printButton(
          '「괜찮아. 여긴 방음도 잘되고, 아무도 안 와……너도 하고 싶잖아?」',
          1,
        );
        await era.printAndWait(
          `막 레이스를 마친 ${nature.uma_sex_title}는 전력으로 달린 열기가 아직 몸에 남아 발정에 가까운 상태가 된다. 지금이 딱 그랬다. 승부복 아래의 스패츠마저 살짝 젖어 있는 것이 보였다`,
        );
        await nature.say_and_wait('그……그래도 땀 냄새가——');
        era.printButton(
          '「네이처한테서 나는 땀 냄새가 싫을 리 없잖아. 오히려 좋아!」',
          1,
        );
        await era.input();
        await era.printAndWait(
          `나이스 네이처가 말을 마치기도 전에, ${you.name}는 소파에 쓰러뜨리고 승부복 안으로 두 손을 밀어 넣었다. 나이스 네이처도 곧 저항을 멈추고 몸을 ${you.name}에게 맡겼다……`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  s_a_47_42: (() => {
    const title = '왕좌의 이면';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} luna シンボリルドルフ
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     */
    const f = async (nature, teio, luna, maya, you, callname) => {
      await era.printAndWait(
        `${you.name}와(과) 나이스 네이처가 다음 목표인 『아리마 기념』을 향해 트레이닝을 이어 가던 어느 날……`,
      );
      await nature.say_and_wait(`벤치 프레스 끝~ ${callname}, 잠깐 쉬어도 돼?`);
      era.printButton('「그럼.」', 1);
      await era.input();
      await nature.say_and_wait('그럼 10분만.');
      await teio.say_and_wait('하아…… 하아……! 앞으로 3세트……!');
      await nature.say_and_wait('응? 저건……');
      await era.printAndWait(
        `${you.name}이(가) 나이스 네이처의 시선을 따라가니 토카이 테이오가 필사적으로 트레이닝하고 있었다. ${teio.sex}는 몸을 지탱해 주는 특수한 기구를 사용하는 듯했다……`,
      );
      await maya.say_and_wait('아, 네이처~♪ 같이 쉬자~!');
      await nature.say_and_wait(
        '오── 마야노, 잘 왔어. 저기 봐, 테이오는 뭐 하는 거야?',
      );
      await maya.say_and_wait(
        `${teio.sex}, 재활 훈련이야──! 부상이 좀 심했거든.`,
      );
      await nature.say_and_wait('어……');
      await maya.say_and_wait('테이오, 전에는 침대에 계속 누워 있었으니까──');
      await nature.say_and_wait('그렇구나……');
      await teio.say_and_wait('……아파, 다리가 무거워~~! 좀 무리했나?');
      await luna.say_and_wait('테이오, 분투하고 있는 모양이군.');
      await teio.say_and_wait(
        '와, 회장! 물론이지, 최상의 컨디션으로 열심히 하고 있어! ……라고 말하고 싶지만 최상까지는 아직 멀었어.',
      );
      await teio.say_and_wait(
        '하지만 완전히 부활할 길이 보이기 시작했어! 전보다 강해질 수 있을 거야♪',
      );
      await luna.say_and_wait(
        '흠…… 우선 노력한 걸 칭찬해 달라고 할 줄 알았는데……',
      );
      await teio.say_and_wait('어── 그런 요구 안 해! 이겼을 때 칭찬받고 싶어!');
      await teio.say_and_wait(
        '노력은 당연한 거잖아! 계속 여기에 묶여 있을 수도 없고.',
      );
      await teio.say_and_wait(
        '빨리 나아야 달릴 수 있어. 달리지 않으면…… 회장을 따라잡을 수 없잖아. 그렇지?',
      );
      await luna.say_and_wait(
        '……그렇군. 실례했네. 내가 전에는 자네의 정신력을 과소평가했어.',
      );
      await luna.say_and_wait(
        '지금은 실력이 안정되고 심신이 충실한 시기지. 이때 다친다면 나라도 괴로울 거야.',
      );
      await teio.say_and_wait(
        '……그래서 격려하러 온 거야? 헤헤. 회장도 참, 나를 누구라고 생각하는 거야?',
      );
      await teio.say_and_wait(
        '레이스에서도 라이브에서도 대활약! 누구보다 빠르고 강하고 멋진, ',
      );
      await teio.say_and_wait(
        '나…… 이 몸은 무적의 테이오 님이라고! 무슨 일이 있어도 가볍게 뛰어넘겠어!',
      );
      await luna.say_and_wait('후…… 그렇지. 기대하겠네, 토카이 테이오!');
      await teio.say_and_wait('응!');
      await nature.say_and_wait(`……${teio.sex}, 전보다 더 빛나지 않아?`);
      await nature.say_and_wait(
        `벽에 부딪힌 덕분에 ${teio.sex}가 더 강해졌다는 건가……`,
      );
      await nature.say_and_wait(
        '나 같은 단역은…… 벽에 부딪혀 봤자 고민만 하는데.',
      );
      await nature.say_and_wait(
        `……그런데 ${teio.sex}는 쉽게 다시 일어서네. 역시 주인공은 격이 다르구나.`,
      );
      await maya.say_and_wait(
        `음── 쉬웠을까? 테이오 말이야. ${teio.sex}도 그때 엄청 울었어.`,
      );
      await nature.say_and_wait('어……?');
      await maya.say_and_wait(
        `중요한 레이스에 못 나갔잖아. 그때 ${teio.sex}는 정말 괴로워 보였어.`,
      );
      await nature.say_and_wait('……그…… 그랬구나. 그 테이오가……');
      await era.printAndWait(
        '그 뒤 트레이닝하는 동안 나이스 네이처는 깊이 생각에 잠겨 있었다.',
      );
      await era.printAndWait(
        `──트레이닝이 끝나자 ${nature.sex}는 천천히 ${you.name}에게 속마음을 털어놓았다.`,
      );
      await nature.say_and_wait(
        '……나, 계속 오해하고 있었어. 아니, 아마…… 일부러 오해한 거겠지.',
      );
      await nature.say_and_wait(
        `테이오는 주인공이니까 강하다. ${teio.sex}는 타고난 재능이 있다. 처음부터 모든 걸 가졌다.`,
      );
      await nature.say_and_wait(
        `${teio.sex}는 나 같은 단역과는 다르다. 그렇게 생각하면서 약한 나를 지키고 있었어.`,
      );
      await nature.say_and_wait('하지만…… 아니었어. 테이오도 나도 똑같아.');
      await nature.say_and_wait(
        `${teio.sex}도 아무리 노력해도 이기지 못할 때가 있고, 다치기도 해…… 그 괴로움을 알고 있어.`,
      );
      await nature.say_and_wait(
        `${teio.sex}와 다른 건…… 충격을 받은 뒤의 반응이야. 자기 힘으로 일어설 수 있다는 게 ${teio.sex}의 강함이지.`,
      );
      await nature.say_and_wait(
        '……정말, 이제 와서 무서워지네. 그렇게 강한 애한테 이길 수 있다고 생각했다니.',
      );
      await nature.say_and_wait(
        '난 근성도 용기도 없으면서 앞서 달리는 사람을 보고 불공평하다고 말할 뿐이었어.',
      );
      await nature.say_and_wait(
        '──저 무대에 설 수 없다고 생각했는데, 내려온 건 나 자신이었어.',
      );
      await nature.say_and_wait(
        '분수도 모르고 욕심만 많고 어리광이나 부렸어. 그래도, 그래도……',
      );
      era.printButton('「그래도 이기고 싶어.」', 1);
      await era.input();
      await nature.say_and_wait('……응.');
      await nature.say_and_wait(
        '저 애와 아주 조금이라도 같은 점이 있다면 나도……',
      );
      await nature.say_and_wait('나도……!');
      await era.printAndWait(
        `${nature.sex}는 말을 잇지 않았지만 각오가 깃든 눈빛이 모든 것을 말해 주었다.`,
      );
      era.printButton('「이기자!」', 1);
      await era.input();
      await nature.say_and_wait('──응!');
    };
    f.title = title;
    return f;
  })(),
  arim_kin_classical: (() => {
    const title = '먼 곳을 바라보며';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (nature, you) => {
      await nature.say_and_wait(
        '이, 이겨 버렸어……! 『아리마 기념』에서 이겼어……',
      );
      era.printButton('「축하해!」', 1);
      await era.input();
      await nature.say_and_wait('트레이너! 들어 봐, 나……!');
      await nature.say_and_wait('전부 들렸어. 다들 날 응원하는 목소리가!');
      await nature.say_and_wait('거짓말 같지? 하지만 정말이야!');
      await nature.say_and_wait(
        '평소에는 내 심장 소리랑 숨소리, 바람 소리밖에 안 들리는데.',
      );
      await nature.say_and_wait(
        '오늘은…… 확실히 들렸어. 『네이처, 힘내』 하는 목소리가!',
      );
      await nature.say_and_wait(
        '그래서 체력이 바닥나려 할 때도 버틸 수 있었어. 정말…… 즐겁게 달렸어!',
      );
      await era.printAndWait(
        `나이스 네이처와 응원해 주는 사람들 사이에는 깊은 유대가 있다. ${nature.sex}에게 오늘의 『아리마 기념』은 특별한 레이스였던 것 같다.`,
      );
      await nature.say_and_wait(
        '또 달리고 싶어. 내년에도…… 이 무대에 서고 싶어!',
      );
      await nature.say_and_wait('……아~ 바보! 너무 성급하잖아!');
      await nature.say_and_wait('하지만 정말 즐거웠단 말이야…… (꼼지락)');
      await era.printAndWait(
        '확실히 지금부터 내년 『아리마 기념』을 목표로 삼는 건 조금 이르다. 그 사이 지금의 기세를 유지할 수 있는 레이스를 넣는다면……',
      );
      era.printButton('「『타카라즈카 기념』도 있어!」', 1);
      await era.input();
      await nature.say_and_wait(
        '『타카라즈카 기념』…… 팬 투표로 출전자를 정하는 레이스지? 『아리마 기념』처럼……',
      );
      await nature.say_and_wait(
        '난 이런 레이스에서 더 힘을 낼 수 있을지도 몰라. 응, 나가고 싶어…… 『타카라즈카 기념』!',
      );
      await era.printAndWait(
        `다만 그 레이스까지는 아직 시간이 조금 남아 있다. ${you.name}와(과) 나이스 네이처는 그동안 다양한 레이스에 나가며 『타카라즈카 기념』을 향해 성장해 나가기로 했다.`,
      );
      await nature.say_and_wait(
        '우리, 너무 성급한가? 여기서 다음 레이스까지 정해 버리다니──',
      );
      await era.printAndWait('상점가 사람들「네이처──! 멋지게 달렸어──!」');
      await era.printAndWait(
        `상점가 사람들「세계 최고의 ${nature.uma_sex_title}다! 우리의 자랑이야──!」`,
      );
      await nature.say_and_wait(
        '잠깐, 여, 여러분……! 목소리 너무 커요. 여긴 가게 안이 아니라고요!',
      );
      await nature.say_and_wait(
        '게다가 세계 최고라니 과장도 심해! 정말, 창피해!',
      );
      await nature.say_and_wait('정말…… 에헤헤.');
      era.printButton('「지금은 솔직하게 기뻐하자.」', 1);
      await era.input();
      await nature.say_and_wait(
        '그게 나한테는 제일 어렵다니까! 알잖아. 하지만 지금은…… 응. 그래야겠지.',
      );
      await nature.say_and_wait(
        '지금 실컷…… 기뻐해야지. 여기서 전부 끝나는 건 아니니까.',
      );
      await era.printAndWait(
        `나이스 네이처는 작게 중얼거리며 『아리마 기념』에서 함께 달린 ${nature.uma_sex_title}들을 바라봤다……`,
      );
      await nature.say_and_wait('오늘도…… 삐뚤빼뚤한 트로피, 준비해 뒀어?');
      era.printButton('「물론이지!」', 1);
      await era.input();
      await nature.say_and_wait(
        '……에헤헤. 고마워. 그럼…… 먼저 반성회부터 하자.',
      );
      await nature.say_and_wait(
        '테이오와의 차이에만 신경 쓰느라 다른 라이벌을 잊고 있었어.',
      );
      await nature.say_and_wait(
        '오늘 레이스에서 깨달았어. 조금만 방심했어도 졌을 거야.',
      );
      await nature.say_and_wait(
        '지금은 이겼어도…… 앞으로 주변 선수들은 더 강해지겠지.',
      );
      await nature.say_and_wait(
        '이대로는 안 돼. 테이오한테 이기겠다는 말만으로는 부족해.',
      );
      await era.printAndWait(
        `세대를 넘어 겨루는 『아리마 기념』에 출전하면서 ${nature.sex}의 시야가 넓어졌다…… 성장의 증거다!`,
      );
      await nature.say_and_wait('주변 선수들에 대해 더 알아야겠어……!');
      if (era.get('love:60') >= 75) {
        era.printButton('「그리고 늘 하던 그거──」', 1);
        await era.input();
      }
    };
    f.title = title;
    return f;
  })(),
  o_s_95_10: (() => {
    const title = '네이처 in 메지로';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} ryan メジロライアン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (nature, mcqueen, ryan, you) => {
      await era.printAndWait(
        '오늘 나이스 네이처는 모습을 보이지 않는다. 그 이유는──',
      );
      await era.printAndWait(
        '『아리마 기념』 이후 나이스 네이처는 메지로 맥퀸과 메지로 라이언에게 그토록 강한 이유를 물었다.',
      );
      await era.printAndWait(
        `오늘 ${nature.sex}는 두 사람의 초대를 받아 강함의 이유를 배우러 갔다. ──메지로 가문으로 하루 유학을 떠났다고 해도 좋을 것이다.`,
      );
      await era.printAndWait(
        `나이스 네이처는 성실하다. ${nature.sex}는 반드시 무언가를 얻어 돌아올 것이다. ${you.name}은(는) 그렇게 믿고 조용히 기다리기로 했다──`,
      );
      era.drawLine();
      await mcqueen.say_and_wait(
        '──조금 전의 다르질링은 향부터 다르네요. 풍미가 무척 풍부해요.',
      );
      await ryan.say_and_wait(
        '처음부터 끝까지 손으로 땄대! 전문가의 솜씨는 믿을 만하네.',
      );
      await nature.say_and_wait(
        '……저기요── 지금 이게 무슨 상황이죠? 왜 차를 마시고 있는 거예요?',
      );
      await nature.say_and_wait('트레이닝 코스로 가는 줄 알았는데……');
      await mcqueen.say_and_wait(
        '다 마시면 물론 갈 거예요. 다만 홍차를 즐기는 것도 일과의 일부니까요.',
      );
      await nature.say_and_wait('일과……?');
      await mcqueen.say_and_wait(
        '오늘은 네이처 씨에게 저희의 평소 모습을 보여 드리고 싶었어요.',
      );
      await ryan.say_and_wait('그런 거지! 시간도 됐으니까 트레이닝하러 가자!');
      await nature.say_and_wait('아, 네, 네……!');
      era.drawLine();
      await mcqueen.say_and_wait('하아…… 하아…… 하아……');
      await ryan.say_and_wait('어서 와, 맥퀸! 다음엔 뭐 할 거야?');
      await mcqueen.say_and_wait('……물론 한 바퀴 더예요.');
      await mcqueen.say_and_wait(
        '조금 전과 비교해서 10바퀴째의 속도가 약간 떨어졌어요…… 그렇죠?',
      );
      await ryan.say_and_wait('아하하! 좋아, 만족할 때까지 달리자!');
      await mcqueen.say_and_wait('네, 다녀올게요!');
      await nature.say_and_wait('하아…… 하아…… 하앗……!');
      await ryan.say_and_wait('오, 네이처, 돌아왔구나! 맥퀸은 막 출발했어!');
      await nature.say_and_wait(
        `봤어…… ${mcqueen.sex}, 아직도 달리는 거야……!?`,
      );
      await ryan.say_and_wait(
        `아직도라기보다는 아직 부족한 거겠지? ${mcqueen.sex}가 『스피드를 높이고 싶다』고 했으니까.`,
      );
      await nature.say_and_wait(
        `${mcqueen.sex}, 스태미나가 그렇게 많은데도 더 늘리고 싶은 거구나……`,
      );
      await ryan.say_and_wait(
        `……맥퀸 말이야. ${mcqueen.sex}는 아무리 강해져도 지금의 자신에게 만족하지 않는 것 같아.`,
      );
      await ryan.say_and_wait(
        `그만큼 목표가 높은 거지. 그러니까 ${mcqueen.sex}는 멈추지 않고 노력하는 거야.`,
      );
      await ryan.say_and_wait(
        '늘 저런 모습을 보고 있으면 나도 열심히 해야겠다는 생각이 들어.',
      );
      await nature.say_and_wait('……으~~~~ 나도 한 바퀴 더……!');
      await ryan.say_and_wait('아하하하! 지기 싫은 거구나! 조심해서 다녀와──!');
      era.drawLine();
      await nature.say_and_wait('──오늘 정말 감사했습니다!');
      await ryan.say_and_wait('이야~ 하루 종일 따라다니게 했네.');
      await nature.say_and_wait('아뇨, 정말 잘됐어요!');
      await nature.say_and_wait(
        '……이제야 알겠어요. 전 지금까지 제 생각만 했어요──',
      );
      await nature.say_and_wait(
        '두 분은 제대로 상대를 보고 있네요. 서로의 강함을 인정하고 경쟁하면서.',
      );
      await nature.say_and_wait(
        '하지만 전…… 남이 가진 강함을 부러워하기만 했어요.',
      );
      await nature.say_and_wait(
        '부족한 점만 바라보고…… 제게 어떤 재능이 있는지는 생각해 본 적이 없었죠.',
      );
      await mcqueen.say_and_wait('……그래서?');
      await nature.say_and_wait(
        '더 진지하게 마주하려고요. 다른 사람도…… 저 자신도.',
      );
      await ryan.say_and_wait('응, 좋아! 그게 네이처의 강함이 될 거야!');
      await nature.say_and_wait('저기…… 마지막으로 하나만 더 물어봐도 될까요?');
      await nature.say_and_wait('두 분은 왜 저를 도와주신 건가요?');
      await mcqueen.say_and_wait('……귀족의 의무니까요.');
      await ryan.say_and_wait('푸핫! 쑥스러운 거야?');
      await ryan.say_and_wait(
        '진짜 이유는 강한 네이처와 겨뤄서 우리도 더 강해지고 싶기 때문이야!',
      );
      await ryan.say_and_wait(
        '──우리도 다음 『타카라즈카 기념』에 나갈 생각이거든!',
      );
      await nature.say_and_wait('……읏!');
      await mcqueen.say_and_wait(
        '후후, 좋은 표정이네요. 그럼 다음에는 한신에서 만나요.',
      );
      await nature.say_and_wait('네……!');
      era.drawLine();
      await era.printAndWait(
        `다음 날 아침, ${you.name}이(가) 나이스 네이처를 만나니 ${nature.sex}의 표정은 밝게 개어 있었다.`,
      );
      await nature.say_and_wait(
        '나…… 그 두 사람한테 이기고 싶어. ──『타카라즈카 기념』에서!',
      );
    };
    f.title = title;
    return f;
  })(),
  takz_kin: (() => {
    const title = '마침내 닿은 손끝';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} ryan メジロライアン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (nature, mcqueen, ryan, you) => {
      await nature.say_and_wait('──다행이다……! 나…… 이겼어!');
      era.printButton('「대단해!」', 1);
      await era.input();
      await nature.say_and_wait('왜일까. 지금까지보다 훨씬 기뻐……');
      era.printButton('「필사적으로 달려서 마침내 붙잡은 승리니까.」', 1);
      await era.input();
      await nature.say_and_wait('응, 그렇네.');
      await nature.say_and_wait(
        '『어차피 나 같은 건』이라든가, 『무리야』라든가……',
      );
      await nature.say_and_wait(
        '오늘은 그런 생각이 전혀 안 들었어. 그저 따라잡겠다고 마음속으로 계속 외쳤어……',
      );
      await mcqueen.say_and_wait(
        '──인상적인 달리기였어요, 네이처. 다시 겨루게 된다면 다음에는 지지 않겠어요.',
      );
      await ryan.say_and_wait(
        '응, 응! 나도 다시 단련해야겠네! 고마워, 네이처!',
      );
      await nature.say_and_wait('뭘, 나야말로…… 고마워!');
      era.drawLine();
      await nature.say_and_wait(
        `저 둘은 마지막까지 산뜻했네. ${mcqueen.couple_title}은 벌써 앞을 보고 있어.`,
      );
      await nature.say_and_wait(
        '져도 곧바로 미래를 바라봐. 다음 단계로 손을 뻗으면서 다음에는 반드시 이기겠다고 생각하는 거지.',
      );
      await nature.say_and_wait('……테이오도 그래. 그래서 그렇게 강한 거야.');
      await nature.say_and_wait(
        '난 멋대로 내 한계를 정해 놓고 있었어. 아무리 노력해도 여기까지라고.',
      );
      await nature.say_and_wait(
        '3착도 그게 이유야. 더는 무리라고…… 나 자신을 포기하고 있었어.',
      );
      await nature.say_and_wait(
        '하지만 그래서는 안 돼. 빛에 닿고 싶다면 계속 자신을 믿어야지.',
      );
      await nature.say_and_wait(
        '1착을 차지할 각오로 달려서 얻은 3착이라면 분명…… 앞으로 이어질 거야.',
      );
      await era.printAndWait(
        `나이스 네이처도 앞을 보고 있다. 지금이라면 큰 무대에 나서더라도 ${nature.sex}는 두려워하지 않고 도전할 것이다.`,
      );
      await era.printAndWait(
        `다음 그 레이스라면 지금의 ${nature.sex}가 가진 자신감과 빛을 더욱 끌어낼 수 있다……!`,
      );
      era.printButton('「다음에는 『텐노상(가을)』에 도전할까?」', 1);
      await era.input();
      await nature.say_and_wait('『텐노상(가을)』……!');
      await nature.say_and_wait('내가…… 역사와 전통이 있는 『텐노상』에?');
      await nature.say_and_wait('……안 돼, 안 돼. 나 왜 주눅 들고 있는 거야.');
      await nature.say_and_wait(
        '이럴 때…… 자격이 있는지 의심하면 안 돼. 나갈 거야! 스스로 기운을 북돋아야지!',
      );
      await nature.say_and_wait('가자. 가을의 큰 무대로……!');
      await era.printAndWait(
        `──이렇게 ${you.name}와(과) 나이스 네이처는 중거리 최강을 다투는 『텐노상(가을)』에 도전하기로 했다!`,
      );
      if (era.get('love:60') >= 75) {
        era.printButton('「그리고 늘 하던 그거──」', 1);
        await era.input();
      }
    };
    f.title = title;
    return f;
  })(),
  ws_ss_2: (() => {
    const title = '여름 합숙';
    /** @param {CharaTalk} nature ナイスネイチャ */
    const f = async (nature) => {
      await era.printAndWait(
        '다시 합숙의 계절이 왔다. 나이스 네이처는 지난해와 달리 적극적인 태도를 보인다.',
      );
      await era.printAndWait(
        '『텐노상(가을)』…… 그리고 그 너머의 『아리마 기념』을 향해──',
      );
      await nature.say_and_wait('텐노상 가을이라……');
      await era.printAndWait(
        `${nature.sex}는 자신과 마주하는 뜨거운 여름을 시작했다!`,
      );
    };
    f.title = title;
    return f;
  })(),
  tenn_sho: (() => {
    const title = '황혼의 하늘에 울려 퍼져라';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, callname, self_call) => {
      await nature.say_and_wait('끝까지 달렸어……');
      await nature.say_and_wait(
        '수준 높은 레이스에서 진지하게 싸워서…… 성과를 냈어.',
      );
      await nature.say_and_wait(
        '한계 같은 건 생각하지 않고…… 내 손으로 성과를 잡았어.',
      );
      await nature.say_and_wait(
        '……이대로라면 닿을 수 있을까? 빛나고 싶다는…… 꿈에……',
      );
      await nature.say_and_wait(
        '……더 가까이. 조금만 더── 빛에 더 가까이 다가가고 싶어……!',
      );
      await nature.say_and_wait(`${callname}, 부탁이 있어.`);
      await nature.say_and_wait(
        '시니어급 마지막 『아리마 기념』 전에 레이스를 하나 더 뛰고 싶어.',
      );
      era.printButton('「왜?」', 1);
      await era.input();
      await nature.say_and_wait(
        '……자신감이 더 필요해. 1착을 차지할 각오로 나가서 이기고 싶어.',
      );
      await era.printAndWait(
        '예전의 나이스 네이처라면 자신감이 없어서 『인정받고 싶다』고 바랐을 것이다.',
      );
      await era.printAndWait(
        `하지만 지금의 ${nature.sex}는 『이기기 위해』 강해지고 싶어 한다.`,
      );
      era.printButton('「연속 출전이 될 텐데 괜찮겠어?」', 1);
      await era.input();
      await nature.say_and_wait('괜찮아, 분명!');
      await nature.say_and_wait(
        `그야 ${self_call}의 장점은 볼품없어도 끝까지 달리는 모습이니까.`,
      );
      era.printButton('「알았어.」', 1);
      await era.input();
      await nature.say_and_wait('고마워! 어떤 레이스로 할지는 맡길게.');
      await nature.say_and_wait(
        `자잘한 걸 고민하는 역할은 ${callname}에게 넘길게!`,
      );
      await era.printAndWait(
        `${nature.sex}의 지금까지 성향과 『아리마 기념』까지 남은 시간을 생각하면 지금 선택해야 할 레이스는──`,
      );
      era.printButton('「『츄니치 신문배』는 어때?」', 1);
      await era.input();
      await era.printAndWait(
        '격은 다소 낮지만 나이스 네이처라면 여기서 성과를 낼 수 있다. 착실하게 1착을 차지할 수 있다!',
      );
      await nature.say_and_wait(
        '좋아, 『츄니치 신문배』…… 거기서 1착을 차지할게.',
      );
      await nature.say_and_wait(
        `이기고 가슴을 펴고 ${nature.sex}에게 도전하겠어……!`,
      );
      if (era.get('love:60') >= 75) {
        era.printButton('「그리고 늘 하던 그거──」', 1);
        await era.input();
      }
    };
    f.title = title;
    return f;
  })(),
  s_a_95_42: (() => {
    const title = '반짝반짝';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string[]} trophies ナイスネイチャに作ったトロフィー一覧、最大4件
     */
    const f = async (nature, you, callname, trophies) => {
      await era.printAndWait(
        `그날은 트레이닝 시간이 되어도 나이스 네이처가 나타나지 않았다. 평소에는 ${nature.sex}가 먼저 와 있는데……`,
      );
      await era.printAndWait(
        `${you.name}은(는) ${nature.sex}가 걱정되어 학원 안을 찾아다녔다──`,
      );
      await era.printAndWait(
        `──그리고 고목의 구멍 앞에서 ${
          nature.sex
        }를 발견했다. ${nature.uma_sex_title}도 아는 곳이다. 속마음을 소리쳐 내고 싶을 때 찾아오는 장소였다.`,
      );
      await nature.say_and_wait('……아무도 없겠지.');
      await nature.say_and_wait('좋아……!');
      await nature.say_and_wait('왜…… 그런 말을 한 거야? 나 바보야──!!');
      await nature.say_and_wait('정통파 주인공한테 선전포고를 해 버렸잖아……!');
      await era.printAndWait(
        `이야기는 텐노상(가을)이 끝난 뒤, ${you.name}와(과) 나이스 네이처가 돌아오는 길에 토카이 테이오를 만나 `,
      );
      await era.printAndWait(
        `${nature.sex}도 올해 아리마 기념에 나간다는 걸 알게 된 때로 거슬러 올라간다. 그 자리의 기세에 휩쓸려 나이스 네이처는 「아리마 기념에서 너를 이기겠어」라고 선언해 버렸다──`,
      );
      await nature.say_and_wait(
        '단역 주제에 너무 우쭐댔어!! 이제 무리야…… 바보────!!',
      );
      await nature.say_and_wait(
        '아직 전혀 빛나지도 않으면서…… 바보, 바보, 바보, 바보! 바보──!!',
      );
      await nature.say_and_wait('하아…… 하아……');
      await nature.say_and_wait('안 돼, 전혀 후련하지 않아……');
      era.printButton('「네이처!」', 1);
      await era.input();
      await nature.say_and_wait(
        `우왓!? ${callname.substring(0, 1).repeat(4)}、${callname}！？`,
      );
      await nature.say_and_wait('왜 여기에…… 아, 잠깐!');
      await nature.say_and_wait('혹시 벌써 트레이닝 시간이야……?');
      era.printButton('「맞아.」', 1);
      await era.input();
      await nature.say_and_wait(
        '아아아아아아아아아아…… 아~!? 전에도 이런 일 있었지!?',
      );
      await nature.say_and_wait(
        '아으으…… 왜 늘 트레이너한테 이런 창피한 모습을 보이는 거야……',
      );
      era.printButton('「괜찮아.」', 1);
      await era.input();
      await nature.say_and_wait('어……');
      era.printButton('「내 앞에서는 얼마든지 창피한 모습을 보여도 돼.」', 1);
      await era.input();
      await nature.say_and_wait('……읏!!');
      await nature.say_and_wait('으으으…… 으으으으으~~!!');
      await nature.say_and_wait(`${callname}, 나……`);
      await nature.say_and_wait('달리기 싫어! 무서워……!');
      await nature.say_and_wait('으아아아……!');
      await era.printAndWait(
        '그 뒤 나이스 네이처는 어린아이처럼 감추지 않고 한참을 울었다. 그리고──',
      );
      await era.printAndWait(
        `진정한 뒤, ${nature.sex}는 ${you.name}에게 속마음을 이야기했다……`,
      );
      await nature.say_and_wait(
        '……지금 내 컨디션은 완벽하지? 아마…… 지금이 여태껏 가장 좋은 상태일 거야.',
      );
      await nature.say_and_wait(
        '실력도 늘었고 나 자신에게 자신감도 있어. 진심으로 싸울 각오도 다졌어.',
      );
      await nature.say_and_wait('하지만…… 그런데도 지면?');
      await nature.say_and_wait(
        '가장 강한 지금의 나조차 빛에서 아직 멀리 떨어져 있다면……?',
      );
      await nature.say_and_wait('……무서워.');
      await nature.say_and_wait(
        '여기서 지면 지금까지의 나도 전부 부정당하는 기분일 것 같아.',
      );
      await nature.say_and_wait(
        '『아직 진심이 아니었어』, 『아직 더 성장할 수 있어』, 『이게 전부가 아니야』……',
      );
      await nature.say_and_wait(
        '지금까지 그렇게 나를 지켜 왔어. 하지만 그 변명은…… 이제 못 써.',
      );
      era.printButton('「진심이구나.」', 1);
      await era.input();
      await nature.say_and_wait('……! 그래, 진심이야!');
      await nature.say_and_wait(
        '이렇게 진심인데도 지면…… 다시 『잘 달리지만 최고는 아닌』 나로 돌아가는 거야.',
      );
      await nature.say_and_wait('무서워. 정말 무서워……');
      era.printButton('「괜찮아. 넌 지지 않아.」', 1);
      await era.input();
      await nature.say_and_wait(
        '……미안, 이번에는 예전처럼 순순히 받아들이지 못하겠어.',
      );
      await nature.say_and_wait(
        '성적으로 보답할 수 없을 것 같으니까. 더는 한 발짝도 나아갈 수 없어……',
      );
      era.printButton('「그래도 믿고 싶은데 안 될까?」', 1);
      await era.input();
      await nature.say_and_wait('……읏. 뭘 근거로 믿는 건데?');
      era.printButton('「여기 근거가 잔뜩 있어.」', 1);
      await era.input();
      await nature.say_and_wait('──이건……');
      await nature.say_and_wait('……종이접기 트로피……? 모양이 삐뚤빼뚤하네.');
      await nature.say_and_wait(
        '……정말 만들었구나. 에헤헤, 여전히 삐뚤빼뚤하네.',
      );
      await nature.say_and_wait('오늘도…… 삐뚤빼뚤한 트로피, 준비해 뒀어?');
      await nature.say_and_wait('트레이너의 트로피……');
      await era.printAndWait(
        `${you.name}은(는) 지금까지 ${you.name}이(가) ${nature.sex}에게 건넨 수제 트로피들의 시제품을 보여 주었다.`,
      );
      await nature.say_and_wait([
        trophies.map((e) => `『${e}』`).join('、'),
        '……그 밖에도 이렇게 많이……',
      ]);
      await era.printAndWait('……이렇게나 많이 만들어 줬구나……');
      era.printButton('「이것도 계속 널 믿어 온 결과야.」', 1);
      await era.input();
      await nature.say_and_wait('──내가 지금까지 쌓아 온 것들……');
      await nature.say_and_wait(
        '……도중에 포기해도 됐을 텐데. 트레이너는 왜 날 믿어 주는 거야?',
      );
      era.printButton('「정말 좋아하니까.」', 1);
      await era.input();
      await nature.say_and_wait('……뭐!? 왜 이럴 때 그런 말을……');
      await era.printAndWait(
        `${you.name}은(는) 나이스 네이처에게 전했다. 트레이너로서 ${you.name}은(는) 승리를 포기하지 않고 지금까지 필사적으로 달려온 ${nature.sex}를 진심으로 응원하고 있다고……`,
      );
      await nature.say_and_wait(
        '……응, 무슨 말인지 알겠어. 전부터 생각했지만……',
      );
      await nature.say_and_wait('하아…… 응, 미안. 조금 너무 당황했네.');
      await nature.say_and_wait(
        '『이기겠다』고 큰 소리로 말하는 건 정말 무섭구나.',
      );
      await nature.say_and_wait(
        `……테이오 말이야. ${nature.sex}는 계속 이런 압박과 싸워 온 거네.`,
      );
      await nature.say_and_wait('대단해…… 하지만 나도 이제 겁내지 않을 거야.');
      await nature.say_and_wait('좋아한다고 말해 주는 사람이 곁에 있으니까?');
      await nature.say_and_wait(
        '이길 거야. 소중한…… 정말 소중한 이유가 있으니까.',
      );
      await nature.say_and_wait(
        '……그나저나 트레이너도 고생이 많네. 정신 관리까지 해야 하고.',
      );
      await nature.say_and_wait('뭐, 그것도 일의 일부일지 모르지만.');
      era.printButton('「내 일은 네가 빛나게 하는 거니까.」', 1);
      await era.input();
      await nature.say_and_wait('……일이니까?');
      await nature.say_and_wait(
        '……농, 담, 이, 거, 든──! 방금 건 못 들은 걸로 해!',
      );
      await nature.say_and_wait(
        '트레이닝 시간이지! 나, 뛰어가서 갈아입고 올게!',
      );
      await era.printAndWait(
        `……${nature.sex}는 마음을 추스른 것 같다. 그렇다면 앞으로도 함께 나아가자!`,
      );
    };
    f.title = title;
    return f;
  })(),
  chun_hai: (() => {
    const title = '마지막 큰 무대를 향해';
    /** @param {CharaTalk} nature ナイスネイチャ */
    const f = async (nature) => {
      await nature.say_and_wait('해냈어!');
      await nature.say_and_wait('1착. 온 힘을 다해서 따낸…… 1착!');
      await nature.say_and_wait('오래 걸렸네……');
      await nature.say_and_wait(
        '그렇게 약했던 내가 격려받고 이끌리면서 필사적으로 뒤쫓아 와서……',
      );
      await nature.say_and_wait('──지금 드디어 내 힘으로 여기에 섰어!');
      await nature.say_and_wait(
        '이제 가슴을 펴고 싸울 수 있어. 그 무대에서…… 모두와 함께!',
      );
      era.printButton('「드디어 이날이 왔네!」', 1);
      await era.input();
      await nature.say_and_wait(
        '응! 이제 도망치지 않을 거야. 모두의 기대도 저버릴 수 없어.',
      );
      await nature.say_and_wait('반드시…… 이기겠어.');
      await nature.say_and_wait(
        '──『아리마 기념』에서 빛나는 주인공이 될 거야!',
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_senior: (() => {
    const title = '아리마의 승자는……';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} teio トウカイテイオー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     */
    const f = async (nature, teio, callname) => {
      await nature.say_and_wait('아……');
      await nature.say_and_wait('나…… 이긴 거지?');
      era.printButton('「네이처, 해냈어!」', 1);
      await era.input();
      await nature.say_and_wait(`${callname}……`);
      await nature.say_and_wait('전혀 실감이 안 나…… 정말 이긴 거야?');
      await era.printAndWait('관객들「나이스 네이처──!! 축하해──!!」');
      await nature.say_and_wait('──읏! 어? 굉장해…… 이렇게 많은 사람이……');
      await era.printAndWait('상점가 사람들「네이처──! 축하해──!!」');
      await nature.say_and_wait('상점가 사람들…… 보러 와 줬구나.');
      await nature.say_and_wait(
        '다들 기다려 줬어. 그리고 나…… 드디어 보답했네.',
      );
      era.printButton('「전부 네가 쟁취한 거야.」', 1);
      await era.input();
      await nature.say_and_wait('……');
      await nature.say_and_wait(`으으~~~~! ${callname}……！`);
      await nature.say_and_wait(
        '포기하지 않아서 다행이야……! 꿈을 계속 좇아서 다행이야~~!',
      );
      await era.printAndWait(
        `그것은 ${nature.sex}가 예전에 흘리던 불안의 눈물과는 달랐다. 굵은 기쁨의 눈물이 땀과 함께 햇빛 아래 반짝였다. 그때──`,
      );
      await teio.say_and_wait('──정말, 왜 울고 있어!?');
      await nature.say_and_wait('……! 테이오……!');
      await teio.say_and_wait(
        '날 꺾고 1착을 했잖아? 나를…… 이겼다고……! 승자는 기세 좋게 웃는 거야!',
      );
      await nature.say_and_wait('……응, 응, 맞아. 너도 언제나 웃고 있으니까……');
      await nature.say_and_wait('미안, 괜찮아. 나…… 이제 안 울어.');
      await teio.say_and_wait('그래야지. 계속 울면 안 들린다고. 이게 바로──');
      await era.printAndWait('관객들의 함성「와아아아아아…… 네이처──!」');
      await teio.say_and_wait('──뜨거운 환호야! 전부 네 거라고!');
      await nature.say_and_wait('알고 있어. 제대로…… 들려.');
      await nature.say_and_wait(
        '……고마워, 테이오. 네가 없었다면 나…… 여기까지 달려오지 못했을 거야. 계속 널 뒤쫓을 수 있게 해 줘서 고마워. 솔직히 네 뒤에서 달리는 건 힘들었어. 그래도…… 비겁한 나한테는 그 자리가 편하기도 했지. 앞으로는 어떤 도전이든 정면으로 받아들일 거야.',
      );
      await nature.say_and_wait('내 이야기의 주인공은 나 자신이야!');
      await era.printAndWait(
        '레이스가 끝난 뒤의 우승자 인터뷰. 지금 나이스 네이처는 무수한 플래시를 받고 있다.',
      );
      await era.printAndWait(
        '기자 A「──이번 『아리마 기념』은 상대가 모두 만만치 않은 레이스였습니다. 승리한 이유가 무엇이라고 생각하시나요?」',
      );
      await nature.say_and_wait('그러게요…… 다들 정말 강했다고 생각해요.');
      await nature.say_and_wait(
        `하지만 저도 『강한』 ${nature.uma_sex_title}예요. 제 힘을 모두 발휘할 수 있었기 때문이라고 생각해요.`,
      );
      await nature.say_and_wait(
        '응, 열심히 했으니까…… 자신 있게 말할 수 있어요!',
      );
      await era.printAndWait(
        '기자 A「그럼 나이스 네이처 씨, 마지막으로 팬들에게 한 말씀 부탁드립니다!」',
      );
      await nature.say_and_wait('저기, 늘 응원해 주시는 여러분, 고마워요.');
      await nature.say_and_wait(
        '기대에 보답하지 못할 때도 많았는데 그래도 한결같이 응원해 주셨어요.',
      );
      await nature.say_and_wait(
        '여러분 덕분에 오늘 여기까지 올 수 있었어요…… 좌절도 많이 했지만요!',
      );
      await nature.say_and_wait('……제멋대로 부탁 하나 해도 될까요?');
      await nature.say_and_wait('그게…… 앞으로도 응원해 주시면 기쁘겠어요──');
      await nature.say_and_wait(
        '물론 컨디션이 나쁠 때도, 전혀 안 풀릴 때도 있을 거예요.',
      );
      await nature.say_and_wait(
        '전 특별한 재능도 없고, 엄청난 노력가도 아니니까요.',
      );
      await nature.say_and_wait('하지만…… 그래도 이것만큼은 약속할 수 있어요.');
      await nature.say_and_wait(
        `──여러분의 믿음을 가장 저버리지 않을 ${nature.uma_sex_title}니까요!`,
      );
    };
    f.title = title;
    return f;
  })(),
  hard_work_trainer: (() => {
    const title = (self_call) => `${self_call}와 지친 트레이너`;
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, you, callname, self_call) => {
      await era.printAndWait(
        '며칠간 꽉 찬 일정으로 이어지던 업무가 드디어 일단락되었다……',
      );
      await era.printAndWait(
        `${you.name}은(는) 자신에게 상을 주려고 맛있는 것을 사러 무거운 몸을 이끌고 상점가로 향했다──`,
      );
      await nature.say_and_wait('저기요, 거기 트레이너, 잠깐만!');
      era.printButton('「네이처……?」', 1);
      await era.input();
      await nature.say_and_wait(
        '하아── 바쁘다는 건 들었지만 이렇게 녹초가 될 때까지 일할 줄이야.',
      );
      await nature.say_and_wait(
        `어쩔 수 없네. ${self_call}가 한턱낼게. 자, 이쪽이야.`,
      );
      await nature.say_and_wait(
        '아직 개점 준비 중이라 손님은 안 와. 제일 안쪽 노래방 자리에 앉아.',
      );
      await nature.say_and_wait(
        `여기 여주인하고 아는 사이거든. 사정을 말했더니 써도 된대.`,
      );
      await era.printAndWait(
        `나이스 네이처는 ${you.name}을(를) 가게 구석으로 데려갔다.`,
      );
      await nature.say_and_wait(
        `그럼 ${callname}은(는) 뭐 먹을래? 뭐든 괜찮아. 내가 할 수 있는 거라면.`,
      );
      era.println();
      era.printButton('「뭐든 좋아. 배고파……」', 1);
      if (era.get('love:60') >= 75) {
        era.printButton('「네이처……」', 2);
      }
      const ret = await era.input();
      if (ret === 1) {
        await nature.say_and_wait(
          '정말…… 기다려, 간단하게 만들어 올게…… 맛은 보장 못 하지만.',
        );
        await era.printAndWait(
          `몇 분 뒤 나이스 네이처는 ${nature.sex}가 만든 볶음밥을 ${you.name}에게 내왔다.`,
        );
        era.printButton('「양이 이렇게 많아도 괜찮아?」', 1);
        await era.input();
        await nature.say_and_wait('여주인도 『마음껏 대접해』라고 했으니까.');
        await nature.say_and_wait('자, 자, 따뜻할 때 먹어.');
        await era.printAndWait(
          `볶음밥은 보기에도 먹음직스럽고 맛도 훌륭했다. ${you.name}의 젓가락…… 아니, 숟가락이 멈추지 않을 만큼 맛있었다.`,
        );
        await nature.say_and_wait(
          '과장이 심하네. 어릴 때부터 엄마 일을 도와서 만들 줄 아는 것뿐이야.',
        );
        await nature.say_and_wait('……어, 먹는 거 빠르네! 벌써 다 먹었어!?');
        era.printButton('「맛있어서 정신 차려 보니 다 먹었네.」', 1);
        await era.input();
        await nature.say_and_wait(
          '됐어, 됐어. 아까 정말 배고팠지? 주방 정리할 테니까 접시 줘.',
        );
        await era.printAndWait(
          `${you.name}은(는) 나이스 네이처의 뒷모습을 바라봤다.`,
        );
        await era.printAndWait(
          '식사를 마친 직후라서인지 갑자기 졸음이 몰려와 의식이 희미해졌다──',
        );
        await nature.say_and_wait('……라…… 라라……♪');
        await nature.say_and_wait('우왓! 깨웠어?');
        era.printButton('「……그 노래는?」', 1);
        await era.input();
        await nature.say_and_wait(
          '사실 잘 몰라. 옛날에 엄마가 카운터에서 바쁘게 일할 때 자주 부르던 노래야.',
        );
        await nature.say_and_wait('옛날 생각이 나서 무심코 흥얼거렸네…… 미안.');
        era.printButton('「오히려 더 듣고 싶은데.」', 1);
        await era.input();
        await nature.say_and_wait(
          `또 시작이네~ ${self_call}에게 그런 빈말 안 해도 돼.`,
        );
        era.printButton(
          '「네이처의 노래, 정말 좋아해. 그 목소리라면 라이브도 문제없겠어!」',
          1,
        );
        await era.input();
        await nature.say_and_wait('흐, 흐응? 트레이너, 취향이 독특하네.');
        await nature.say_and_wait(
          '……그래도 『잘한다』가 아니라 다행이야. 『좋아한다』는 참 편리한 말이네.',
        );
        await nature.say_and_wait(
          '누구와 비교당하지 않아도 되고, 누군가를 실망시키지 않아도 되고, 기대에 못 미치는 자신에게 실망하지 않아도 되니까.',
        );
        await nature.say_and_wait('아하하. 미안, 귀엽지도 않은 소리를 해서.');
        era.printButton('「그런 네이처도 좋아해.」', 1);
        await era.input();
        await nature.say_and_wait('바…… 바보!');
        await nature.say_and_wait('그런 말, 너무 자주 하면 의미 없어져?');
        await era.printAndWait('여주인「네이처, 이제 볼일은 다 봤니?」');
        await nature.say_and_wait('고마워요. 정말 큰 도움이 됐어요.');
        await era.printAndWait(
          '여주인「옆에 계신 분이 말로만 듣던 트레이너님이구나? 네이처한테 이야기 많이 들었어요──」',
        );
        await nature.say_and_wait(
          '정말──! 그런 말 하지 마세요! 가자, 트레이너!',
        );
        era.printButton('「말로만 듣던……?」', 1);
        await era.input();
        await nature.say_and_wait('가, 자, 고!');
        await era.printAndWait(
          `이렇게 여주인의 따뜻한 배웅을 받으며 ${you.name}와(과) 나이스 네이처는 가게를 나섰다.`,
        );
      } else {
        await nature.say_and_wait('에…… 에엣?! 나를?!');
        await era.printAndWait(
          '대답을 듣자마자 나이스 네이처의 놀란 얼굴이 순식간에 붉게 물들었다.',
        );
        await nature.say_and_wait(
          '손님이 안 올 거라고는 했지만…… 여기는 엄연히 다른 사람 가게인데……',
        );
        era.printButton('「네이처가 뭐든 된다고 했잖아?」', 1);
        await era.input();
        await nature.say_and_wait('윽……그렇긴 한데……그래도……');
        await nature.say_and_wait(
          '으……알았어……어른들은 이런 걸로 스트레스랑 피로를 푸는 거지……',
        );
        await era.printAndWait(
          `나이스 네이처는 입술을 깨물더니, 마음을 굳힌 듯 소파에 푹 잠긴 ${you.name}의 앞으로 다가와 부드러운 몸을 온전히 기대고 귓가에 속삭였다.`,
        );
        await nature.say_and_wait(
          '너무 격하게 하면 안 돼……옷이랑 방 치우기 힘드니까……',
        );
        await nature.say_and_wait('게다가 아주머니한테 들키잖아……');
        await era.printAndWait(
          `물론, ${you.name}가 그 말을 들었는지는 또 다른 이야기다……`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  grass_baseball: (() => {
    const title = '동네 야구를 응원하자!';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     */
    const f = async (nature, you, callname) => {
      await nature.say_and_wait(
        '여기가 경기장이야? 오~ 확실히 사람들이 모여 있네~',
      );
      await nature.say_and_wait(
        '그나저나 동네 야구의 용병을 맡다니…… 트레이너 일만 해도 바쁠 텐데.',
      );
      await era.printAndWait(
        `실은 며칠 전 상점가 사람들의 권유로 ${you.name}은(는) 동네 야구 경기에 참가하게 되었다.`,
      );
      era.printButton('「늘 널 응원해 주시니까.」', 1);
      await era.input();
      await nature.say_and_wait('하아, 다들 친절한 건 사실이지만……');
      await nature.say_and_wait('……그래도, 하아…… 너무 무리하다 다치지 마~?');
      await nature.say_and_wait('평소에도 필사적으로 일하잖아……');
      await era.printAndWait('그렇게 상점가 동네 야구 대항전의 막이 올랐다.');
      era.drawLine();
      await era.printAndWait(
        '두 팀은 한 치도 물러서지 않고 점수는 0대 0인 채로 경기가 뜨거워졌다.',
      );
      await nature.say_and_wait(
        '와, 점점 뜨거워지네~ 하지만 트레이너, 완전히 지쳤잖아.',
      );
      await nature.say_and_wait(
        '편들지 않고 봐도 이미 충분히 열심히 했어. 슬슬 교대하는 게 낫지 않아?',
      );
      era.printButton('「아직 할 수 있어!……」', 1);
      await era.input();
      await nature.say_and_wait(
        '하아, 열혈이네…… 아, 알았어. 내가 챙겨 주면 더 힘내겠다는 거지.',
      );
      await nature.say_and_wait('음료 가져올 테니까 여기 얌전히 앉아 있어~?');
      await nature.say_and_wait('정말…… 어디 보자, 운영위원회 천막이……');
      await era.printAndWait(
        `상점가 아저씨「이야~ 한 끗이 부족하네. ${you.sex}가 열심히 하는데 점수가 안 나서 말이야……」`,
      );
      await nature.say_and_wait('어, 트레이너 이야기……?', true);
      await era.printAndWait(
        '상점가 아주머니「긴장한 거겠지. 용병으로 왔는데 주변에는 모르는 사람뿐이잖아……」',
      );
      await era.printAndWait(
        `상점가 아저씨「그러게…… ${you.sex}에게 힘을 줄 방법이 없을까?」`,
      );
      await nature.say_and_wait('왠지…… 익숙한 전개네……', true);
      await era.printAndWait(
        '그 대화를 들은 나이스 네이처는 레이스에서 받았던 모두의 응원을 떠올렸다……',
      );
      await nature.say_and_wait(
        '등을 밀어 줘서 힘낼 수 있었던 건 모두와 트레이너 덕분이었지……',
        true,
      );
      await nature.say_and_wait(
        '걱정만 하고 있을 수는 없어. 이번에는 내가──',
        true,
      );
      era.drawLine();
      await era.printAndWait(
        `마침내 9회 말. 1점만 내면 경기가 끝나는 상황에서 ${you.name}의 타석이 돌아왔다.`,
      );
      await era.printAndWait(
        '마운드에 선 아저씨는 고시엔까지 갔던 후보 투수로, 공은 일류였다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 이미 2스트라이크까지 몰려 이제 끝인가 싶었던 순간──`,
      );
      await nature.say_and_wait('힘내──!');
      // Do not translate this
      era.printWholeImage('内恰_应援_半身', {
        width: 8,
        offset: 8,
      });
      await era.printAndWait(
        '돌아보니 어느새 치어리더 의상으로 갈아입은 네이처가 관중석에 있었다.',
      );
      await era.printAndWait(`${you.name}을(를) 온 힘을 다해 응원하고 있었다.`);
      await nature.say_and_wait('지지 마, 트레이너! 앞으로 1구! 치면 이겨!');
      await nature.say_and_wait('기합 넣어! 기합! 다 같이 외치자!');
      await era.printAndWait('모두「예~! Go Fight Win!」');
      await nature.say_and_wait('히, 힘내! 트레이너!');
      await era.printAndWait(
        `나이스 네이처가 부끄러워하면서도 큰 소리로 응원했고, ${nature.sex}의 주변 사람들도 마찬가지였다. 그 마음에 보답해야 한다……!`,
      );
      era.printButton('「우오오──!!」', 1);
      await era.input();
      await nature.say_and_wait('가라──!!');
      await era.printAndWait('깡──!');
      await nature.say_and_wait(
        '해냈다~! 성공! 트레이너 대단해! 홈런! 끝내기 홈런이야!',
      );
      era.drawLine();
      era.printButton(
        '「응원해 줘서 고마워!」(스태미나+20, 스킬 Pt+20, 의욕 상승, 『대담무쌍』 습득)',
        1,
      );
      era.printButton('「네 응원 덕분이야!」', 2);
      if (era.get('love:60') >= 75) {
        era.printButton('「네이처～! 고마워～!」', 3);
      }
      const ret = await era.input();
      switch (ret) {
        case 1:
          await nature.say_and_wait(
            '윽…… 그렇게 뜨거운 눈으로 쳐다보면 창피하잖아……',
          );
          await nature.say_and_wait(
            '……고맙다고 해야 할 사람은 나야. 계속 응원해 줘서 고마워.',
          );
          await nature.say_and_wait(
            '어쨌든 앞으로도 열심히 할게…… 아~ 나답지도 않은 말을 해 버렸네, 정말~!',
          );
          await era.printAndWait(
            `나이스 네이처는 부끄러워하면서도 진심으로 ${you.name}을(를) 응원했다. 이날 ${you.name}은(는) 무엇과도 바꿀 수 없는 추억을 남겼다!`,
          );
          break;
        case 2:
          await nature.say_and_wait(
            `아니, 아니, 그렇지 않아. ${callname}은(는) 이미 충분히 열심히 했고, 자기 노력과 실력으로 따낸 거잖아. 그래도……`,
          );
          await era.printAndWait('나이스 네이처는 수줍게 시선을 피했다.');
          await nature.say_and_wait(
            '응원하니까 뿌듯하더라. 다음에 야구할 때도 응원하러 갈까…… 막 이러고.',
          );
          await era.printAndWait(
            `${you.name}은(는) 서로의 깊은 유대를 느꼈다. 정말 좋은 하루였다!`,
          );
          break;
        case 3:
          await nature.say_and_wait(
            '잠깐, 그렇게 크게 부르지 마~ 눈에 띄잖아!',
          );
          await era.printAndWait(
            `나이스 네이처는 볼을 붉히며, ${you.name}의 부름에 대답한다.`,
          );
          await nature.say_and_wait('정말~ 갈아입고 올게!');
          era.printButton('「옷은 조금 이따 갈아입으면 안 돼?」', 1);
          await era.input();
          await nature.say_and_wait(
            '왜 그래? 이 옷, 부끄럽기도 하고 바람이 들어와서 쌀쌀하단 말이야……',
          );
          await era.printAndWait(
            `나이스 네이처는 투덜거리면서도 걸음을 멈추고, ${you.name}을 향해 돌아선다.`,
          );
          era.printButton('「그게…… 그런 차림의 네이처가 너무 귀여워서……」', 1);
          await era.input();
          await nature.say_and_wait(
            '읏! 뭐? 그렇게 갑자기 말하는 건 반칙이잖아……',
          );
          await era.printAndWait(
            '예상치 못한 말에 나이스 네이처는 잠시 어쩔 줄 몰라 한다.',
          );
          era.printButton('「……성욕이……좀처럼 참아지질 않아서……」', 1);
          await era.input();
          await nature.say_and_wait(
            '……가가가갑자기 무슨 소리를 하는 거야아아아!',
          );
          await era.printAndWait(
            '연달아 기습을 당한 나이스 네이처는 소리를 질렀다가,',
          );
          await era.printAndWait(
            '그 바람에 상점가 사람들의 시선이 몰렸다는 것을 깨닫고는,',
          );
          await era.printAndWait(
            '주위에 어색하게 웃어 보인 뒤 다시 이쪽을 돌아보며',
          );
          await era.printAndWait('둘만 들을 수 있는 목소리로 투덜거렸다');
          await nature.say_and_wait(
            `밝히는 ${callname}! 이런 데서 그런 말 하지 마!`,
          );
          era.printButton('「그치만 네이처 차림이 너무 야해서……」', 1);
          await era.input();
          await nature.say_and_wait('으냐냐냐냐! 알았어! 그만 말해!');
          await era.printAndWait(
            `얼굴이 새빨개진 네이처는 두 손을 휘저어 ${you.name}의 말을 막았다`,
          );
          await nature.say_and_wait(
            `으으……${callname}를 이렇게 흥분시킨 건 나 때문이네`,
          );
          await nature.say_and_wait(
            '책임지고 해결해 줄게……그래도 여기서 할 순 없잖아?',
          );
          era.printButton('「탈의실로 가자」', 1);
          await era.input();
          await nature.say_and_wait('거기도 들키기 쉽잖아!');
          era.printButton('「그럼 목소리는 작게 내 줘」', 1);
          await era.input();
          await nature.say_and_wait(`그게 무슨 말이야! 잠깐……${callname}！？`);
          await era.printAndWait(
            `${you.name}는 나이스 네이처가 반대할 틈도 주지 않고 ${nature.sex}를 옆으로 안아 들고 탈의실로 뛰어들어 칸막이 안쪽 문을 잠갔다.`,
          );
          await era.printAndWait('다행히 이 광경을 본 사람은 없는 듯했다');
          await era.printAndWait(
            '칸막이 안에서 격렬한 한판이 시작되려 하고 있었다……',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  see_fish: (() => {
    const title = '물고기를 보러 가자';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, you, callname, self_call) => {
      await era.printAndWait(
        `${you.name}와(과) 나이스 네이처가 함께 돌아가는 길──`,
      );
      await nature.say_and_wait(
        '있잖아, 아직 시간도 있으니까…… 그……………… 물고기 보러 안 갈래?',
      );
      await nature.say_and_wait(
        `생선 가게 아주머니가 말이야, 『같이 보러 가렴』이라고 하셔서.`,
      );
      era.printButton('「물론 좋지.」', 1);
      await era.input();
      await nature.say_and_wait('……좋아, 가자.');
      era.drawLine();
      await era.printAndWait(
        `${you.name}은(는) 생선 가게에 ${nature.sex}가 사고 싶은 생선이 있나 싶어 따라갔지만……`,
      );
      await nature.say_and_wait(
        '오오~ 헤엄친다, 헤엄쳐~~ 맛있어 보이는 물고기가 잔뜩이네~~',
      );
      era.printButton('「수족관이었다니……!!」', 1);
      await era.input();
      await nature.say_and_wait('……아하.');
      await nature.say_and_wait(
        '아~ 네, 네! 알고 있어. 더 잘 권유할 방법도 있었잖아~ 하고 생각하지?',
      );
      await nature.say_and_wait(
        `그게 말이야, ${self_call}, 귀엽게 가자고 하는 건 못하거든──`,
      );
      await nature.say_and_wait(
        '하지만 아주머니가 표를 주시면서 둘이 느긋하게 즐기다 오라고……',
      );
      await nature.say_and_wait('일부러 속이려던 건 아니야. 정말이야.');
      era.printButton('「같이 가자고 해 줘서 고마워.」', 1);
      await era.input();
      await nature.say_and_wait('오…… 오오…… 이게 어른의 여유? 제법이네……');
      await nature.say_and_wait('뭐, 응. 신경 안 쓴다면 다행이야.');
      await nature.say_and_wait(
        '그러니까 사과라고 할 정도는 아니지만…… 트레이너가 보고 싶은 걸 보러 가자!',
      );
      await nature.say_and_wait(
        '찾아보니까 재미있는 전시가 많더라. 역시 데이트…… 나들이의 대표 명소네.',
      );
      await nature.say_and_wait(
        '해파리 전시, 가오리…… 도미…… 다 맛있어 보이네.',
      );
      await nature.say_and_wait('아, 무난하게 돌고래 쇼 같은 거 볼까?');
      await nature.say_and_wait(
        '……아니, 나랑 그런 귀여운 쇼를 보는 것도 좀 아닌가.',
      );
      await nature.say_and_wait(`뭐, ${callname}에게 맡길게! 뭐 보고 싶어?`);
      era.println();
      era.printButton('「돌고래 쇼」', 1);
      era.printButton('「……공포의 식인어(?) 특별전!!」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await nature.say_and_wait('……저기 말이야. 내 말 듣고 있었어?');
        era.printButton('「듣고 있었어」', 1);
        await era.input();
        await nature.say_and_wait(
          '응, 알고 있어. 하지만 그런 뜻이 아니었거든?',
        );
        await nature.say_and_wait(
          '아니, 뭐…… 결국 내가 맞춰준다고 말하긴 했으니까.',
        );
        await nature.say_and_wait(
          '알았어 알았어. 쌤이 보면서 힐링할 수 있다면, 뭐.',
        );
        await nature.say_and_wait(
          '난 『꺄아～』 같은 귀여운 반응은 못 해주니까, 그 점은 이해해 줘──',
        );
        era.drawLine();
        await nature.say_and_wait(
          '오오, 힘이 넘치는 돌고래네～ 어? 푸핫!? 잠깐만, 물! 물이──',
        );
        await nature.say_and_wait('가아아악──!!?');
        await nature.say_and_wait('제길…… 저 물보라는 반칙이잖아.');
        await nature.say_and_wait(
          '원래 돌고래 쇼가 이렇게 스릴 넘치는 오락이었나……',
        );
        await nature.say_and_wait(
          '정말이지…… 『꺄아～』는커녕, 단전에서 비명이 터져 나왔네.',
        );
        era.printButton('「즐거워 보이네」', 1);
        await era.input();
        await nature.say_and_wait(
          '후후…… 응, 그러게. 나한텐 이런 방식이 더 잘 맞는 것 같아.',
        );
        await era.printAndWait(
          `${you.name}과(와) 나이스 네이처는 수족관에서 즐거운 시간을 보내며 푹 쉬었다.`,
        );
      } else {
        await nature.say_and_wait('오～ 재밌어 보이는데!');
        await nature.say_and_wait(
          '게다가 무려 『공포의』 전시라니. 얼마나 무서운지 실력 좀 감상해 볼까～',
        );
        await era.printAndWait(
          `그렇게 ${you.name}과(와) 나이스 네이처는 전시 구역으로 향했다……`,
        );
        await nature.say_and_wait('귀!');
        era.printButton('「……귀?」', 1);
        await era.input();
        await nature.say_and_wait('귀, 여, 워, 죽, 겠, 어!!');
        await nature.say_and_wait(
          '우와아아～～～!! 뭐야 이거! 동글동글한 눈 좀 봐! 『우무문어』라고 하는구나～',
        );
        await nature.say_and_wait('꺄아～～～～');
        await nature.say_and_wait('──앗!!');
        era.printButton('「네가 즐거워하니 다행이야」', 1);
        await era.input();
        await nature.say_and_wait(
          '너…… 너무 반칙이잖아! 공포의 전시라더니, 결과적으로 다 이렇게 귀여운 생물들뿐이고!',
        );
        await nature.say_and_wait('제길………… 너무 귀여워.');
        era.printButton('「저쪽 물고기도 나쁘지 않은데……」', 1);
        await era.input();
        await nature.say_and_wait('우와, 진짜네! 못생겨서 더 귀여워～～!');
        await era.printAndWait(
          `${you.name}과(와) 나이스 네이처는 수족관에서 즐거운 시간을 보내며 푹 쉬었다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
