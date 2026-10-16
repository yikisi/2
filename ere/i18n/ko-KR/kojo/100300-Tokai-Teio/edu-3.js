/**
 * @file トウカイテイオー - 育成
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  ...require('#/i18n/ko-KR/kojo/100300-Tokai-Teio/edu-3-hurt'),
  ...require('#/i18n/ko-KR/kojo/100300-Tokai-Teio/edu-3-give-up'),
  async train_fail(teio, you) {
    if (era.get('status:3:腿伤') > 0) {
      await teio.say_and_wait('앗! 으으……');
      await era.printAndWait(
        `평소에는 활기차고 어딘가 어리광이 섞여 있던 목소리가 고통에 찬 날카로운 비명으로 일그러져, ${you.name}의 귓속과 가슴을 꿰뚫었다. ${you.name}은(는) 한달음에 달려가 조심스럽게 ${teio.sex}를 달래며 몸 상태를 살피고 다친 곳을 살살 주물렀다.`,
      );
    } else {
      await teio.say_and_wait('아야아——');
      await era.printAndWait([
        '길게 늘어지는 비명과 함께, ',
        you.get_colored_name(),
        '의 담당이 발을 헛디뎌 넘어졌다. ',
        you.get_colored_name(),
        '은(는) 황급히 달려가 상태를 살폈다.',
      ]);
    }
  },
  async train_fail_intel(teio, you) {
    await teio.say_and_wait('테이오 전설은…… 여기서 잠깐 쉬어 가야겠네……');
    await era.printAndWait([
      teio.get_colored_name(),
      '는 책상에 엎드린 채 공부할 의욕을 잃었다.',
    ]);
    await you.say_and_wait(
      '거짓말은 못 하겠네. 안 되는 건 안 되는 거야.',
      true,
    );
  },
  race_end_win: (() => {
    const title = '레이스 승리';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${you.name}은(는) 들뜬 마음으로 관중석을 내려가 의기양양하게 돌아온 테이오를 맞이했다.`,
      );
      await era.printAndWait(
        `${teio.sex} 역시 신이 나서 얼굴을 붉힌 채 ${you.name}에게 달려와, ${you.name}과(와) 하이파이브를 했다. 두 사람은 승리의 기쁨을 만끽했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = '레이스 입상';
    /** @param {CharaTalk} teio トウカイテイオー */
    const f = async (teio) => {
      await era.printAndWait('아쉽지만 나쁘지는 않다.');
      await era.printAndWait(
        `${teio.name}은(는) 조금 분한 표정으로 다리를 끌며 경기장을 나오는 테이오를 보았다. 엄한 표정을 지으려 했건만 어쩐지 웃음이 새어 나왔다.`,
      );
      await era.printAndWait(`열심히 해 줬다. 충분히 위로해 줘야겠다.`);
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = '레이스 패배';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      if (era.get('status:3:腿伤') > 0) {
        await era.printAndWait(
          `${you.name}은(는) 머리가 헝클어진 채 풀이 죽어 천천히 걸어오는 담당을 보며 가슴에서 피가 흐르는 듯했다.`,
        );
        await era.printAndWait('젠장, 조금만 더…… 다리만 괜찮았어도……');
        await era.printAndWait(
          `중계석에서도 두 사람을 안타까워하는 목소리가 들려왔다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 말없이 테이오를 맞이해 자신의 몸으로 ${teio.sex}를 부축했다.`,
        );
        await era.printAndWait(
          `${teio.sex}는 작게 몸을 떨더니 다시 억지로 자세를 바로잡았다. 아파서일까, 아니면 ${you.name} 앞에서 약한 모습을 보이기 싫어서일까.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 알 수 없었고, 지금은 중요하지도 않았다. 두 사람은 그렇게 서로를 의지하며 함께 경기장을 나섰다……`,
        );
      } else {
        await era.printAndWait(
          `${you.name}은(는) 미간을 찌푸렸다. 어쩌다 이렇게 된 걸까.`,
        );
        await era.printAndWait(
          `전광판에 선명하게 찍힌 붉은 착순은 ${you.name}에게 이 참패가 현실임을 한순간도 잊지 못하게 했다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 얼굴이 잿빛이 되고 귀와 꼬리를 축 늘어뜨린 채, 무거운 몸을 이끌고 ${you.name}에게 다가오는 담당 ${teio.uma_sex_title}를 보며 마음이 복잡해졌다.`,
        );
        await teio.say_and_wait(`……`);
        era.printButton(
          '「괜찮아. 가슴을 펴. 다시 힘내자. 성공은 아직 우리를 기다리고 있어.」',
          1,
        );
        era.printButton(
          '「이번에는…… 제대로 되짚어 보자. 테이오, 다음에는 이러면 안 돼.」',
          2,
        );
        await era.input();
      }
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '테이오, 출발!';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `전해지는 이야기에 따르면 삼여신은 갓난아이에게 우마의 혼을 내려, ${teio.couple_title}에게 비할 데 없는 신체를 선사하고 레이스장을 달리게 했다고 한다.`,
      );
      await era.printAndWait(
        `그리고 ${teio.couple_title}의 능력은 레이스에서 드러나는 특성에 따라 대략 다음과 같은 각질로 나뉜다.`,
      );
      era.println();
      await era.printAndWait(
        '우선 도주. 게이트가 열리면 빠르게 상대와 거리를 벌리는 방식으로, 스피드와 폭발력이 필요하다. 장거리에서 스태미나가 바닥나기 쉽고, 보폭과 속도의 특성상 부상도 다른 주법보다 심한 경우가 많다는 단점이 있다.',
      );
      await era.printAndWait(
        `주황빛이 도는 붉은 머리에, 달릴 때면 유선형 탈것처럼 보이는 ${teio.uma_sex_title}가 이 분야에 능하다고 한다.`,
      );
      era.println();
      await era.printAndWait(
        `두 번째는 선행. 출발 직후부터 거리를 벌리지 않고, 높은 스태미나와 스피드로 도주 주자의 뒤에 붙었다가 상대가 숨을 고르는 순간 추월한다. 추월 시점을 잡기 어렵고 스태미나와 폭발력도 많이 요구된다는 것이 단점이다. 순간 가속 때문에 레이스 중 발바닥과 종아리를 다치기 쉬우며, 가속할 때의 자세는 ${teio.uma_sex_title} 자신의 유연성도 어느 정도 필요로 한다.`,
      );
      era.println();
      await era.printAndWait(
        `또 하나는 선입. 출발 후 대열 중간에 숨어 강한 의지로 도주와 선행 주자들의 뒤에서 기다리다가, 때가 무르익으면 폭발력과 속도로 단숨에 추월해 허를 찌른다. 충분한 인내심이 필요하고, 적절한 시점을 판단하려면 경험이 있어야 하며, 매우 높은 폭발력이 요구된다는 단점이 있다. 시골에서 온 회색 머리 ${teio.uma_sex_title}가 이 분야에서 이름을 날렸다고 한다.`,
      );
      era.println();
      await era.printAndWait(
        `마지막은 추입. 출발 후 대열 맨 뒤에 숨어 높은 자제력과 스태미나로 기회를 기다리다가, 때가 오면 폭발력과 속도로 앞선 상대들을 단숨에 추월한다. 끝까지 추월에 성공할 확률이 높지 않고, ${teio.uma_sex_title} 자신의 자제력도 크게 요구된다는 단점이 있다. 체구는 작지만 달리기만 하면 번개처럼 바람을 쫓는다고 소문난 ${teio.uma_sex_title}가 그 좋은 예다.`,
      );
      era.println();
      await era.printAndWait(
        `${you.name}은(는) ${teio.name}의 첫 정식 레이스를 보며 지금까지의 트레이닝과 대조해, ${teio.sex}의 주법을 마음속으로 확인하고 임시 계획을 세웠다. 피부 아래로 드러나는 종아리 힘줄은 튼튼하고 힘찼으며, 몇 차례 가속할 때의 보폭은 유연했다. 힘을 쓸 순간을 포착하는 감각은 타고난 듯했다——선행에 천재적인 재능을 지닌 ${teio.uma_sex_title}.`,
      );
      await teio.say_and_wait('트레이너! 어땠어?');
      await era.printAndWait(
        `${teio.sex}는 발을 구르며 ${you.name}에게 걸어왔다. ${you.name}은(는) 고개를 끄덕이며 방금 관찰한 내용과 앞으로의 트레이닝 방침을 ${teio.sex}에게 이야기했다.`,
      );
      era.println();
      await teio.say_and_wait('응…… 네 말대로 할게!');
      era.println();
      await era.printAndWait(
        `${you.name}은(는) ${teio.sex}의 두 다리를 보더니 자신도 모르게 몸을 낮추고 재빨리 양손을 얹었다.`,
      );
      era.println();
      await teio.say_and_wait('어——어어!');
      era.println();
      await era.printAndWait(
        `손가락이 ${teio.uma_sex_title}에게 가장 중요한 다리를 훑었다. 촉감으로 정보가 전해져 왔다——트레이너의 기술이다. 아니나 다를까, 한 가지 사실이 확인되었다. ${you.name}의 담당이 「테이오 스텝」이라 부르는 독특한 주법은 ${teio.sex} 특유의 다리 구조를 최대한 활용할 수 있다. 하지만 기회와 위험은 함께하는 법. ${teio.sex}의 다리는 부상을 입기 쉽다. 특히 이 주법을 계속 사용한다면……`,
      );
      era.println();
      await teio.say_and_wait('트레이너? 무슨 일 있어?');
      await era.printAndWait(
        `${you.name}은(는) 생각에 몰두해 있다가 귓가에 닿은 부드러운 목소리에 정신을 차렸다. 살짝 상기된 얼굴로 고개를 갸웃하며 ${you.name}을(를) 바라보는 ${teio.uma_sex_title}를 보니, ${you.name}은(는) 한동안 무슨 말을 해야 할지 알 수 없었다.`,
      );
      era.printButton('「……괜찮아. 네 몸은 정말 대단하네.」', 1);
      await era.input();
      await teio.say_and_wait(
        '응? 으응…… 그럼 다행이네. 자, 트레이너. 약속이야. 끝까지 나랑 함께 달려 줘!',
      );
      era.println();
      await era.printAndWait(
        `바람이 불자 ${teio.sex}는 눈을 가늘게 뜨고 활짝 웃으며 손을 내밀었다. ${you.name}도 손을 내밀어 ${teio.sex}의 새끼손가락에 자신의 손가락을 걸고 약속했다.`,
      );
      await era.printAndWait(
        `다리 문제는…… ${you.name}은(는) 생각했다. 평생 별문제 없이 지나갈 수도 있다. ${teio.uma_sex_title}에게 이런 문제는 드물지 않다. 세심하게 관리하고 적절한 훈련 계획을 세운다면, 적어도 현역으로 뛰는 동안은 괜찮을 것이다.`,
      );
      await era.printAndWait(
        `지금 여기서 ${teio.sex}의 습관을 바꾸려 한다면…… 오히려 역효과가 날지도 모른다. 만약 이 정도의 천재가 성적을 내지 못하게 된다면…… 두 사람 모두에게 좋지 않을 것이다.`,
      );
      await era.printAndWait(`결국, ${you.name}은(는) 침묵을 택했다.`);
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '새해 포부';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await teio.say_and_wait(
        '트레이너, 트레이너~ 오늘은 우리가 콤비가 된 뒤 처음 맞는 새해야!',
      );
      era.println();

      await era.printAndWait(
        `${you.name}은(는) 사복 차림으로 신이 나서 방 안을 뛰어다니는 테이오를 보며 몇 번이나 눈가를 씰룩였다.`,
      );
      await era.printAndWait(
        '활기가 넘쳐도 너무 넘친다…… 작은 폭군을 선택한 걸까.',
      );
      era.println();

      await teio.say_and_wait(
        '있지, 있지! 트레이너는 왜 기운이 없어? 나랑 놀자!',
      );
      era.println();

      era.printButton('「밥부터 먹자. 먹고 나서 놀자.」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name}이(가) 큰 냄비에 담긴 스튜를 식탁으로 옮기자, ${teio.sex}는 밥이라는 말에 미끄러지듯 다가와 의자에 앉더니 ${you.name}의 식기까지 챙겨 주었다.`,
      );
      await era.printAndWait(
        `두 사람은 즐겁게 새해 저녁 식사를 했다. 따뜻하고 정겨운 분위기에 ${you.name}은(는) ${teio.sex}와 함께 있는 이곳이 작은 가정 같다는 생각이 들었다.`,
      );
      era.println();

      await teio.say_and_wait(
        '트레이너, 내 새해 소원은 전에 말했던 그대로야! 무패로 클래식 삼관을 달성하고, 전설의 테이오가 될 거야!',
      );
      era.println();

      await era.printAndWait(
        `${teio.teen_sex_title}의 말은 아직 어린아이 같았지만, ${teio.sex}가 진심이라는 것은 알 수 있었다.`,
      );
      era.println();

      era.print(`${you.name}——`);
      era.printButton('「그 기세야! 계속 그렇게 나아가자!」(근성+20)', 1);
      era.printButton('「그래, 함께 힘내서 승리를 향해 가자.」(스태미나+20)', 2);
      era.printButton(
        '「음…… 그 목표라면 조금 조정이 필요하겠네.」(스킬 포인트+20)',
        3,
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
  waka_sta_win: (() => {
    const title = '삼관을 향해!';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait('훌륭하다.');
      await era.printAndWait(`${you.name}은(는) 마음속으로 갈채를 보냈다.`);
      await era.printAndWait(
        `다른 주자들을 멀찌감치 따돌리는 질주, 순간적인 가속, 균형 잡힌 자세——과연 천재 ${teio.uma_sex_title}답다.`,
      );
      await era.printAndWait(
        '데뷔한 지 얼마 되지도 않았는데 이런 달리기를 보이다니. 잠재력이 충분하고 앞날이 밝다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 관중석을 내려가 출구에서 담당을 기다리며 듬뿍 칭찬해 줘야겠다고 생각했다. 어쩌면 보상도 필요하겠다.`,
      );
      era.println();

      await teio.say_and_wait('트레이너.');
      era.println();

      era.printButton('「이야, 잘했어.」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name}은(는) ${teio.sex}의 어깨를 두드린 뒤 그대로 손을 얹고 적당한 힘으로 주물렀다——${teio.teen_sex_title}의 피로를 풀어 주기 위해서였다.`,
      );
      await era.printAndWait(
        `${teio.sex}는 아직 상기된 얼굴로 신이 나서 ${you.name}을(를) 바라보았다.`,
      );
      era.println();

      await teio.say_and_wait('나, 정했어!');
      era.println();

      era.printButton('「뭘?」', 1);
      await era.input();

      await teio.say_and_wait(
        '내 첫 번째 목표——이제부터 무패로 클래식 삼관을 달성할 거야!',
      );
      await era.printAndWait(
        `${teio.teen_sex_title}의 뜨거운 선언에 ${you.name}의 입꼬리가 올라갔다. 하룻강아지 범 무서운 줄 모른다고 해야 할까, 아니면 승부의 세계를 아직 잘 모른다고 해야 할까. 하지만 젊은 사람이 큰 뜻을 품는 게 뭐가 나쁘겠는가.`,
      );
      era.println();

      await you.say_and_wait(
        `어려운 목표다…… 과거에 이름을 날린 ${teio.uma_sex_title}도, 지금 활약하는 천재도, ${teio.couple_title} 모두가 그 목표를 이루길 바란다. 실제로 도달하는 이는 극히 드물다.`,
      );
      await you.say_and_wait(
        '하지만 네 트레이너가 된 이상, 온 힘을 다해 도와서 그 소원을 이루어 주겠다.',
      );

      await era.printAndWait(
        `${teio.teen_sex_title}는 눈을 깜빡였다. 투지는 조금도 꺼지지 않았다.`,
      );
      await teio.say_and_wait('이 꿈, 반드시 이루고 말겠어!');
      era.printButton(`그럼 함께 힘내 보자.`, 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  sa_47_5: (() => {
    const title = '그래서, 옷은 어떻냐니까!';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        '또다시 구름 한 점 없이 맑은 날——트레센 쪽 하늘은 정말 날씨가 좋다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 학원 안뜰을 걸으며 초봄의 날씨를 만끽한다.`,
      );
      await era.printAndWait(
        `하지만 오늘은 그때처럼 ${you.name} 혼자 산책하는 게 아니다.`,
      );
      era.println();

      await teio.say_and_wait('……');
      era.println();

      era.printButton('「……」', 1);
      await era.input();

      await era.printAndWait('분위기가 조금 어색하다.');
      await era.printAndWait(
        `${you.name}은(는) 무심코 눈길로 옆에 있는 작은 ${teio.uma_sex_title}를 보았다. 드러난 하얀 피부, 사복 아래로 비치는 복숭아빛 어깨끈…… 안 돼. 더 보고 있다간 스승으로서의 도리에 어긋나겠어.`,
      );
      await era.printAndWait(
        `게다가 ${teio.sex}의 그 차림은 알록달록한 비치웨어 같은 아동복이라 ${you.name}의 죄책감을 더욱 키운다.`,
      );
      await era.printAndWait(
        `이렇게 사랑스러운 ${teio.uma_sex_title}가 ${you.name}과(와) 담당 계약을 맺은 상대라니……`,
      );
      era.println();

      await teio.say_and_wait('트레이너?');
      era.println();

      era.printButton('「왜?」', 1);
      await era.input();
      await era.printAndWait(
        `기운찬 ${teio.teen_sex_title}의 목소리가 들리자, ${you.name}은(는) 머릿속을 비우고 마음을 가라앉혀, 최대한 평소 같은 표정으로 대답하려 한다.`,
      );
      await era.printAndWait('그리고 시선은 똑바로 앞길에 둔다.');
      era.println();

      await teio.say_and_wait('너…… 내 사복, 어떻게 생각해?');
      era.println();

      era.print(`${you.name}은(는) 곧바로——`);
      era.printButton('「음…… 꽤 어린애 같네」(체력+150)', 1);
      era.printButton('「귀여워……」(스피드+20)', 2);
      era.printButton('「멋져, 테이오!」(파워+20)', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await teio.say_and_wait('으으~ 나, 이제 어린애 아니거든!');
          era.println();

          await era.printAndWait(
            `${teio.sex}는 입술을 삐죽 내밀며 조금 토라진 듯했지만, 오히려 그 모습이 귀여웠다.`,
          );
          await era.printAndWait(
            `${you.name}과(와) ${teio.sex}는 말없이 한동안 걸었다.`,
          );
          break;
        case 2:
          await teio.say_and_wait('엣!');
          era.println();

          await era.printAndWait(
            `${you.name}의 담당은 작게 소리를 냈고, 얼굴이 붉어진 듯했다.${you.name}도 더 바라보기가 쑥스러워져, 둘은 말없이 계속 걸었다.`,
          );
          break;
        case 3:
          await teio.say_and_wait(
            `당연하지!${you.name}은(는) 역시 테이오 님의 멋짐을 알아보는구나!`,
          );
          await era.printAndWait(
            `${teio.sex}는 기뻐 보인다.${you.name}도 저절로 웃으며, ${teio.sex}와 함께 한동안 걸었다.`,
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_12: (() => {
    const title = '기자 회견';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `조명과 마이크에 둘러싸인 채, 렌즈 너머에서 호기심과 갈망이 뒤섞인 시선들이 이쪽으로 쏟아졌다. ${you.name}은(는) 옆에 있는 자그마한 ${teio.uma_sex_title}를 바라보았다. ${teio.sex}는 분명 이런 자리에 익숙하지 않았다——무적의 테이오 님도 분위기에 압도될 때가 있는 모양이다.`,
      );
      await era.printAndWait(
        `남들이 눈치채지 못하도록 ${you.name}은(는) ${teio.sex}의 손에 살짝 손을 대어 긴장을 풀어 주려 했다. 그런데 ${teio.sex}는 오히려 손을 마주 잡았다. 살짝 땀이 밴 작은 손바닥의 감촉이 생생했다. ${you.name}은(는) 잠시 멍해져 손을 빼려다가 다른 방법을 택했다. ${you.name}은(는) 손에 조금 힘을 주어 ${teio.sex}의 손을 잡고, ${teio.sex}의 떨림을 가라앉혔다.`,
      );
      era.println();
      await era.printAndWait(
        `카메라와 기자들의 질문 앞에서 ${you.name}은(는) 막힘없이 완벽하고 재치 있는 답변을 내놓았다. ${you.name}의 도움으로 테이오도 서서히 긴장이 풀려, ${teio.sex} 역시 당당하고 즐겁게 자신에 대해, 특히 자신의 꿈에 대해 이야기했다.`,
      );
      await era.printAndWait(
        `${you.name}도 모두의 앞에서 ${teio.sex}의 꿈을 현실로 만들겠다고 약속했다.`,
      );
      await era.printAndWait('기자 회견은 박수 속에서 막을 내렸다.');
    };
    f.title = title;
    return f;
  })(),
  sats_sho_5: (() => {
    const title = '첫 번째 왕관';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait('훌륭한 달리기였다.');
      await era.printAndWait(
        `${you.name}은(는) 자신도 모르게 박수를 치며 환호했다.`,
      );
      await era.printAndWait(
        `이 정도 수준의 레이스——경기장에서 겨루는 ${teio.uma_sex_title} ${teio.teen_sex_title}들이 땀과 청춘을 쏟아내며 달리는 모습은 가슴을 울린다. 그리고 ${you.name}의 담당은 그중에서도 단연 가장 눈부셨다.`,
      );
      await era.printAndWait('첫걸음부터 순조롭다.');
      await era.printAndWait(
        `${teio.sex}에게 특제 벌꿀 드링크를 사 줘야겠다고 ${you.name}은(는) 생각했다. 빠른 걸음으로 판매대로 갔다가 다시 경기장으로 돌아와 자신의 ${teio.uma_sex_title}가 달리는 모습을 지켜보았다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  toky_yus_5: (() => {
    const title = '두 번째 왕관';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `이번 레이스는 ${you.name}의 담당이 지금까지 출전한 것 중 가장 규모가 컸다.`,
      );
      await era.printAndWait(
        `하지만 ${you.name}의 시선은…… ${teio.sex}의 성적이 아니라 ${teio.sex}의 다리에 머물러 있었다.`,
      );
      await era.printAndWait(
        '정확히는 부츠에 감싸인 발목부터 무릎까지였다.',
      );
      await era.printAndWait('이상하다.');
      await era.printAndWait(
        '출발할 때부터 보였다. 이후의 스퍼트와 가속에서도 움직임에 분명 미세하게 어긋나는 부분이 있었다.',
      );
      await era.printAndWait(
        '어떤 식으로 힘을 쓰든 뼈로 몸을 지탱하는 것이 기본이다. 무릎 연골이나 정강이뼈 부근에 문제가 있는 게 틀림없다.',
      );
      era.println();

      await era.printAndWait(
        `레이스가 끝나자 ${you.name}은(는) 담당을 맞이해 짧게 축하한 뒤 이 이야기를 꺼내며, ${teio.sex}가 지금껏 의지하며 자신감을 갖고 있던 주법 때문일지도 모른다고 조심스럽게 전했다.`,
      );
      await era.printAndWait(`${teio.sex}의 대답은 빠르고 간결했다.`);
      era.println();

      await teio.say_and_wait('괜찮아.');
      era.printButton('「무슨 소리야!」', 1);
      await era.input();

      await teio.say_and_wait(
        '아무것도 아니라니까! 요즘 너무 피곤해서 그래…… 쉬면 나아질 거야.',
      );
      era.println();

      era.printButton('「하지만……」', 1);
      await era.input();

      await teio.say_and_wait(
        '우리의 꿈…… 아직 이루지 못했잖아! 난 내 방식으로 계속 달리고 싶어. 도와주겠다고 약속했지?',
      );
      await era.printAndWait(
        `${teio.teen_sex_title}는 고개를 들어, 맑고 깨끗하면서도 집념을 품은 눈으로 ${you.name}을(를) 똑바로 바라보았다. ${you.name}은(는) 입을 열었지만 아무 말도 나오지 않았다.`,
      );
      await era.printAndWait(
        `${teio.sex} 마음대로 하게 둬도…… 별일 없겠지. 머릿속의 목소리가 물러섰다. 게다가 ${you.name}에게도 ${teio.sex}가 계속 달리며 성적을 내 주는 것이 필요하지 않은가.`,
      );
      await era.printAndWait(`${you.name}은(는) 한숨을 내쉬며 얼버무렸다.`);
    };
    f.title = title;
    return f;
  })(),
  or_47_25: (() => {
    const title = '꼬박꼬박 찾아오는 작은 짐승';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await teio.say_and_wait('으우우……');
      era.println();
      await era.printAndWait(
        `${you.name}은(는) 천천히 적당한 힘을 주어, ${you.name}의 허벅지 위에 웅크린 담당 ${teio.uma_sex_title}를 쓰다듬었다.`,
      );
      await era.printAndWait(
        `한번 ${you.name}에게 마사지를 받고 난 뒤, ${teio.sex}는 그 맛을 알아 버렸다. 털을 다듬어 달라는 부탁은 물론이고(그건 그럴 만하다), ${you.name}의 집무실에 몰래 들어와, ${you.name}이(가) 일하는 도중에도 몸을 비비며 피로를 풀어 달라고 졸랐다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) 건성으로 ${teio.sex}의 턱 밑을 긁어주자, ${teio.sex}는 만족스러운 듯 가르릉 소리를 내며 눈을 가늘게 떴다.`,
      );
      await you.say_and_wait('너 고양이야?', true);
      await era.printAndWait(
        `${you.name}은(는) 속으로 태클을 걸었다. 허벅지 위의 ${teio.teen_sex_title}는 정말로 여기를 자기 보금자리라고 생각하는 모양이다.`,
      );
      era.println();

      era.print(`${you.name}은(는) 이제 ${teio.sex}를 어떻게 해줄까——`);
      era.printButton(
        '뿌리부터 꼬리 끝까지 천천히, 아주 부드럽게 쓰다듬는다 (스킬 포인트 +30, 체력 +50~100, 호감도 +5)',
        1,
      );
      era.printButton(
        `너무 피곤해서…… 어느덧 ${you.name}과(와) ${teio.sex} 모두 잠이 들었다. (스태미나&근성 +20)`,
        2,
      );
      if (era.get('love:3') >= 50) {
        era.printButton(
          '짖궂은 장난을 친다 (스피드&파워&지능 +20, 애정도 +1)',
          3,
        );
      }
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait(
            `${you.name}은(는) 손가락을 모아 손바닥으로 머리부터 꼬리까지 적당한 힘을 주어 쓰다듬었다. 보송보송한 감촉이 손바닥에 전해져 ${you.name}의 기분까지 가벼워졌다.`,
          );
          break;
        case 3:
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 장난기가 발동해 먼저 ',
            teio.sex,
            '의 귀 뿌리와 엉덩이 안쪽(꼬리를 움직이는 털 없는 부분)을 긁어 준다. 작은 ',
            teio.uma_sex_title,
            '가 온몸을 부르르 떨자 ',
            you.get_colored_name(),
            '은(는) 방향을 바꾸어 마사지하듯 ',
            teio.sex,
            '의 온몸을 주무른다……',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = '끝이 아니다';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait('잠시 마침표를 찍을 때가 다가오고 있다.');
      await era.printAndWait(
        `${you.name}은(는) 관중석에 서서 지난 한 해의 일들을 떠올렸다. ${teio.teen_sex_title}가 여기까지 올 수 있었던 데에는 ${you.name}의 도움이 컸다. ${you.name} 역시 ${teio.sex}의 끈기와 집념에 이끌려 스스로 ${teio.sex}를 돕고 싶어졌다.`,
      );
      await era.printAndWait('성공은 눈앞에 있었다.');
      await era.printAndWait(
        `이 레이스에서 이기면 ${teio.name}는 최종 목표에 한 걸음 더 가까워진다. ${teio.sex}의 지금 달리기를 보면——${you.name}은(는) 트레이너로서 섣불리 샴페인을 터뜨려서는 안 되지만——거의 확실했다.`,
      );
      await era.printAndWait(
        `머릿속에는 벌써 ${you.name}과(와) ${teio.sex}가 전설이 되어 명예의 전당에 이름을 올리는 환상마저 떠올랐다……`,
      );
      await era.printAndWait('잠깐.');
      era.println();
      await era.printAndWait(`중계「${teio.name}——무슨 일이죠——」`);
      era.println();
      await era.printAndWait('이상하다!');
      await era.printAndWait(
        `${you.name}은(는) 난간을 붙잡고 몸을 벌떡 일으켜 내밀고 경기장에 있는 ${you.name}의 ${teio.uma_sex_title}를 찾았다. 저기 있다, 선두——${teio.sex}의 움직임이?!`,
      );
      await era.printAndWait(
        `${you.name}의 눈에, 도저히 정상이라 할 수 없는 자세로 바깥쪽으로 밀려나는 테이오가 보였다——`,
      );
      era.println();
      await era.printAndWait('중계「——속도가 떨어집니다——」');
      era.println();
      await era.printAndWait(
        `결승선이 코앞이었지만 ${you.name}에게는 착순 따위 아무래도 좋았다. 미친 듯이 내려가 담당을 받아 주려 했다. 경비원이 이성을 잃은 ${you.name}을(를) 붙잡았다. ${you.name}은(는) ${teio.sex}를 바라보았다. 가까운 거리가 아닌데도 고통과 분함이 ${teio.teen_sex_title}의 얼굴에 고스란히 드러나 있었다……`,
      );
      era.println();
      era.printButton('「테이오!」', 1);
      await era.input();
      await era.printAndWait(
        `레이스가 끝나자 ${you.name}은(는) 한순간도 지체하지 않고 ${teio.sex}를 안아 트레센으로 돌아와 의무실로 뛰어들었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  os_famous_in_famous: (() => {
    const title = '유명인 중의 유명인';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await you.say_and_wait('준비됐어?');
      era.println();

      await teio.say_and_wait('으응.');
      era.println();

      await era.printAndWait(
        '귀는 모자 안에, 꼬리는 바지 안에 숨기고 선글라스와 마스크까지 쓰면 변장 완료.',
      );
      await era.printAndWait(
        `${you.name}도 눈에 띄지 않는 옷을 입고 옷깃을 세워 대충 얼굴을 가린 뒤 모자를 눌러썼다. 좋아.`,
      );
      await era.printAndWait(
        `두 사람은 어설픈 비밀 요원처럼 정체를 숨긴 채 거리로 나섰다.`,
      );
      await era.printAndWait(
        `——클래식 삼관을 달성한 뒤, ${teio.name}의 인지도는 나날이 높아졌고, 당연히 ${you.name}의 인지도도 덩달아 올라갔다. 이제 변장을 하지 않으면 사람이 많은 곳에서는 팬들에게 둘러싸여 아무것도 할 수 없다.`,
      );
      await era.printAndWait(
        '그래서 이런 사전 준비는 필수다. 하지만 준비가 모든 상황에서 통하는 것은 아니다. 예를 들어——',
      );
      era.println();

      await era.printAndWait(
        `타이어와 아스팔트가 마찰하는 불쾌한 소리가 ${you.name}의 고막을 찔렀다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) 돌아보자 시간이 잠깐 느려지는 듯했다.`,
      );
      await era.printAndWait(
        '아이가 도로에 넘어져 있었다. 키가 작아 운전자의 눈에 띄지 않았고, 알아차려 급브레이크를 밟았을 때는——이미 늦었다.',
      );
      await era.printAndWait(
        `그런데 ${you.name}의 옆에서 갑자기 거센 바람이 일었다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) 안쪽으로 감싸고 있던 ${teio.actual_name_with_title}이 순간적으로 힘을 발휘해 내달린 것이다.`,
      );
      await era.printAndWait(
        '운전자는 등을 젖히고 브레이크를 끝까지 밟으며 절망 속에 눈을 감았다.',
      );
      await era.printAndWait('그 순간, 기적이 일어났다.');
      await era.printAndWait(
        '휙 하는 소리와 함께 마술처럼 아이가 도로에서 사라졌다. 운전자는 무사히 그 자리를 지나갔다. 눈을 뜨고도 무슨 일이 일어났는지 알지 못했다.',
      );
      era.println();

      await teio.say_and_wait(
        '앞으로는 보호자랑 함께 있어야 해. 혼자 뛰어다니면 안 돼.',
      );
      era.println();

      await era.printAndWait(
        `아이「응…… 고마워, ${teio.uma_sex_title} ${teio.elder_sibling_sex_title}?」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title} ${teio.elder_sibling_sex_title}?!`,
      );
      era.println();

      await era.printAndWait(
        `${teio.name}는 그제야 바람에 모자가 날아가고 격한 움직임에 꼬리까지 드러났다는 사실을 깨달았다. ${you.name}은(는) 황급히 ${teio.sex}에게 다시 변장을 시켰지만 이미 늦었다.`,
      );
      era.println();

      await era.printAndWait(`행인 A「${teio.name}다!」`);
      era.println();

      await era.printAndWait('행인 B「와아, 전설의 테이오 님이다!」');
      era.println();

      await era.printAndWait(
        `행인 C「봤어! ${teio.sex}가 방금 테이오 스텝으로 저 아이를 구했어!」`,
      );
      era.println();

      await era.printAndWait(
        `사람들의 목소리가 물결처럼 높아졌고 소식을 듣고 몰려오는 이들도 많았다. 두 사람은 조금 당황했다. 하지만 ${you.name}이(가) 테이오를 보니 ${teio.teen_sex_title}는 얼굴이 붉어졌을 뿐, 딱히 싫어하는 기색은 없었다——명성은 사람을, 혹은 ${teio.uma_sex_title}를 기쁘게 하는 것일까.`,
      );
      await era.printAndWait(
        `그러다 ${you.name}은(는) ${teio.sex}의 귀가 방향을 바꾸는 것을 알아차렸다. 뒤이어 ${you.name}에게도 목소리가 들렸다.`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title} A「응, 멋있어! 나도 저런 ${teio.uma_sex_title}가 되고 싶어!」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title} B「${teio.sex}의 트레이너가 대단하대. 지금 옆에 있는 사람이 그 사람이지?」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title} C「정말? 나도 ${you.sex}를 전속 트레이너로 삼고 싶어. 지금 당장 계약할래!」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title} D「${you.sex}의 얼굴도 분위기도 좋다. 정말……」`,
      );
      era.println();

      await era.printAndWait(
        `어어…… 예상치 못한 칭찬이다. 그래도 ${you.name}은(는) 순순히 받아들였다.`,
      );
      await era.printAndWait(
        `다만 뒷부분의 의미까지 생각할 여유는 없었다. 담당이 묘한 표정으로 이쪽을 바라보고 있었기 때문이다.`,
      );
      era.println();

      await you.say_and_wait(
        `큰일인데…… ${teio.sex}는 언제 이런 걸 배웠지?`,
        true,
      );
      await era.printAndWait(
        `${you.name}은(는) 속으로 아차 싶었지만 ${teio.sex}는 이미 성큼성큼 ${you.name} 앞으로 다가와 팔을 잡고 말했다.`,
      );
      era.println();

      await teio.say_and_wait(
        `여러분, 미안하지만 선약이 있어서요. 응원해 주시고 좋게 봐 주셔서 감사해요. 다음에 레이스장에서 또 만나요! 트~레~이~너~, 테이오 ${teio.adult_sex_title}과 출발할까?`,
      );
      era.println();

      era.print(`${you.name}은(는) 쓴웃음을 지으며 대답했다——`);
      era.printButton(
        '「무적의 테이오 님을 모시는 것이 소인의 사명입니다.」 (지능+30)',
        1,
      );
      era.printButton(
        `「온 힘을 다하겠습니다, 테이오 ${teio.adult_sex_title}.」 (무작위 능력치 3종+15)`,
        2,
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
  ws_95_5: (() => {
    const title = '포기';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await you.say_and_wait('테이오, 이 이야기는 진지하게 하자.');
      era.println();

      await era.printAndWait(
        `${you.name}의 손에는 의사에게 받은 자료와 직접 모은 자료가 들려 있었다. 어느 것이나 토카이 테이오의 다리 상태를 말해 주고 있었다.`,
      );
      await era.printAndWait(
        `휴식을 취하지 않으면…… 다음 레이스를 완주했을 때 ${teio.sex}의 다리에는 평생 남을 상처가 생길 것이다.`,
      );
      era.println();

      await you.say_and_wait(
        `테이오, 네 다리 구조는 ${teio.uma_sex_title} 중에서도 특별해. 그 구조 덕분에 독특한 주법이 가능한 거지만, 사실 「테이오 스텝」은 네 몸을 조금씩 갉아먹고 있는 셈이야.`,
      );
      await you.say_and_wait(
        '지난번의 속도 저하도, 그전 레이스 뒤에 입은 부상도 전조일 뿐이야. 너에게 가장 소중한 두 다리가…… 완전히 망가질 수도 있어.',
      );
      era.printButton(
        '「의사도 나도 같은 생각이야…… 당분간 레이스장을 떠나 쉬었으면 해.」',
        1,
      );
      await era.input();
      await you.say_and_wait(
        '그동안 내가 온 힘을 다해 치료를 도울게. 학원 측에도 이미 이야기해 뒀어. 네 앞날을 위해서야.',
      );

      await era.printAndWait(
        `${you.name}은(는) 입술을 꽉 다문 채 고개를 숙인 담당을 보며 가슴이 아팠지만 이를 악물었다. 이것은 ${teio.sex}를 위한 일이라고 ${you.name}은(는) 마음속으로 자신에게 말했다.`,
      );
      era.println();
      await teio.say_and_wait('싫어……');
      era.println();
      await era.printAndWait(
        `작지만 확고한 목소리가 들렸다. ${you.name}은(는) 한숨을 내쉬었다. 이렇게 될 줄 알고 있었다.`,
      );
      era.println();
      await era.printAndWait(
        `눈 깜짝할 사이에 ${teio.teen_sex_title}는 고개를 들었다. ${you.name}은(는) 눈가에 고인 눈물이 ${teio.sex}의 사파이어 같은 눈동자를 더욱 투명하게 만드는 모습을 보았다.`,
      );
      era.println();
      await teio.say_and_wait(
        '텐노상(봄)은 포기할 수 없어…… 그건 내가 내 손으로 삼관의 꿈을 버리는 거잖아! 그럼 지금까지 노력한 건…… 다 뭘 위해서였는데?',
      );
      era.println();
      await teio.say_and_wait(
        '게다가 이런 몸으로 태어났다는 건, 이 몸으로 달리는 꿈을 이루라는 증거 아니야? 다른 결말은 인정 못 해…… 출전을 포기하기 싫어!',
      );
      era.println();
      await era.printAndWait(
        `${teio.teen_sex_title}의 고집 어린 눈이 나를 마주 보았다. ${teio.sex}의 눈동자에 내 모습이 비쳤다. ${teio.sex}에게 가장 가까운 사람이 지금은 ${teio.sex}를 「배신한」 것이다…… ${you.name}은(는) 자신의 모습을 보며 가슴이 술렁였다.`,
      );
      era.println();
      await teio.say_and_wait('평생 한 번뿐인 부탁이야…… 제발.');
      era.println();
      await era.printAndWait(`${you.name}은(는) 결심했다——`);
      era.printButton(`「트레이너로서 요구할게. 다음 레이스는 포기해.」`, 1);
      era.print(
        '【선택 시 토카이 테이오는 텐노상(봄) 출전을 강제로 포기합니다】',
        {
          offset: 1,
          width: 23,
        },
      );
      era.printButton(
        `「넌 내 담당 우마무스메야. 네 꿈을 돕겠다고 줄곧 말해 왔지.」`,
        2,
      );
      era.print(
        `【선택 시 테이오의 다리 부상은 되돌릴 수 없게 됩니다. ${teio.sex}와 함께 바닥으로 떨어진 뒤, 서로를 의지하며 다시 올라올 각오가 되어 있습니까?】`,
        { offset: 1, width: 23, color: buff_colors[3] },
      );
      let ret = await era.input();
      if (ret === 2) {
        era.print(
          `【경고. 선택 시 테이오의 다리 부상은 되돌릴 수 없게 됩니다. ${teio.sex}와 함께 바닥으로 떨어진 뒤, 서로를 의지하며 다시 올라올 각오가 되어 있습니까?】`,
          { color: buff_colors[3] },
        );
        era.printButton('역시 그만두자', 1);
        era.printButton('각오했어!', 2);
        ret = await era.input();
      }
      if (ret === 1) {
        await era.printAndWait(
          `${teio.teen_sex_title}는 눈물을 머금었지만 결국 ${you.name}의 뜻에 따를 수밖에 없었다. ${teio.sex}는 말없이 떠났고, 석양이 ${teio.sex}의 뒤로 긴 그림자를 드리웠다.`,
        );
      } else {
        await era.printAndWait(
          `${teio.teen_sex_title}는 울면서도 웃으며 ${you.name}의 손을 잡았다. 맞잡은 손에서 따뜻한 체온이 전해졌다. ${you.name}은(는) 미간을 찌푸렸다. 자신의 선택이 옳은지 알 수 없었다.`,
        );
        await era.printAndWait(
          `하지만 트레이너란 ${teio.uma_sex_title}의 꿈을 이루어 주는 직업이 아닌가…… 그렇지 않은가.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_95_25: (() => {
    const title = '봄날의 테이오';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await you.say_and_wait('좋네……');
      era.println();
      await era.printAndWait(
        `트레이닝을 막 끝낸 ${you.name}은(는) 담당과 함께 천천히 기숙사로 돌아가는 길을 걷고 있었다. ${teio.uma_sex_title} ${teio.adult_sex_title}은 고개를 흔들고 있었다. 격한 운동으로 풀어진 머리카락에서 땀이 튀고 온몸에서 김이 피어오르는 것이 보였다.`,
      );
      await teio.say_and_wait('응? 트레이너? 뭐라고 했어?');
      era.println();

      await era.printAndWait(
        `${you.name}은(는) 자신도 모르게 ${teio.sex}에게 넋을 잃고 속마음까지 입 밖으로 내뱉었다는 것을 깨닫고 황급히 둘러댔다.`,
      );
      era.println();

      era.printButton('「요즘 성적이 정말 훌륭하다고 했어.」', 1);
      await era.input();

      await teio.say_and_wait('으음~ 흐응? 정말 그것뿐이야?');
      era.println();

      await era.printAndWait(
        `${you.name}은(는) 얼굴을 돌리고 대답하지 않았다. 그러면서 몰래 옷깃을 세워 달아오른 얼굴을 가렸다.`,
      );
      era.println();

      await era.printAndWait(
        `자그마한 ${teio.uma_sex_title}는 ${you.name}을(를) 곁눈질하며 소리 없이 웃다가, 갑자기 표정이 가라앉았다.`,
      );
      era.println();

      await teio.say_and_wait('트레이너…… 우리의 여행은 아직 끝나지 않았어.');
      era.println();

      await era.printAndWait(
        `갑작스러운 말에 ${you.name}은(는) 돌아보며 적당히 농담으로 받아치려다가, ${teio.sex}의 진지한 얼굴을 보고 입을 다물었다.`,
      );
      await teio.say_and_wait(
        '내가 지금까지 거둔 성적도, 지금의 영광도, 앞으로의 목표도 전부 너와 나눌 거야. 그러니까 함께 계속 나아가자.',
      );
      await era.printAndWait(
        `${teio.teen_sex_title}는 한마디 한마디 ${you.name}에게 진심을 털어놓았다.`,
      );
      era.println();

      era.printButton('「물론이지.」', 1);
      await era.input();

      await era.printAndWait(`두 사람은 나란히 목표한 곳을 향해 걸어갔다——`);
    };
    f.title = title;
    return f;
  })(),
  os_lets_go_together: (() => {
    const title = '함께 가자!';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await teio.say_and_wait('벌꿀🎶~');
      era.println();

      await era.printAndWait(
        `노란 원피스를 입은 자그마한 ${teio.uma_sex_title}가 햇살을 받으며 앞에서 신나게 걸었다. 넘치는 활력을 마음껏 발산하면서도 ${you.name}을(를) 배려하는 것인지, ${teio.sex}는 ${you.name}의 시야를 벗어나지 않았다.`,
      );
      await era.printAndWait(
        `${teio.sex}가 이토록 자유롭게 즐기는 모습을 보며 ${you.name}도 절로 미소 지으며 ${teio.sex}의 걸음에 보조를 맞췄다.`,
      );
      await era.printAndWait(
        '곧 인공 개울 옆에 도착했다. 일반 방문객이 다니는 길은 아닌 것 같은데——',
      );
      await era.printAndWait(
        `${you.name}이(가) 그렇게 생각했을 때는 이미 담당의 샌들이 물속의 돌 위에 올라가 있었다. ${teio.sex}는 ${you.name}에게 한 손을 내밀었다.`,
      );
      era.println();

      await teio.say_and_wait('같이 가자, 트레이너!');
      await era.printAndWait(`${you.name}은(는) 결정했다——`);
      era.printButton('고개를 끄덕인다 (스태미나+15)', 1);
      era.printButton('「아니, 규칙은 지키자.」 (근성+15)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name}도 손을 뻗어 ${teio.sex}의 손을 잡았다. 체구에 어울리지 않는 힘에 ${you.name}은(는) 끌려갔고, 두 사람은 물을 밟으며 걸었다. 즐거운 경험이었다.`,
        );
        await era.printAndWait(
          '——직원에게 들켜 주의를 받지만 않았더라면 더 좋았을 것이다.',
        );
      } else {
        await era.printAndWait(
          `자그마한 ${teio.uma_sex_title}는 조금 아쉬워했지만 ${you.name}의 곁으로 돌아와 ${you.name}과(와) 나란히 원래 길을 걸었다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_dance_or_kongfu: (() => {
    const title = '댄스…… 무술? 이걸로 테이오 스텝을 단련할 수 있을까?';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `왁스를 칠한 단단한 나무 바닥에 사람의 모습이 비쳤다. 그 위에서 한 ${teio.uma_sex_title}가 도복을 입고 다리를 들어 올리며 힘을 싣는 연습을 하고 있었다.`,
      );
      era.println();

      await you.say_and_wait('그만, 잠깐 쉬자. 이제 충분해.');
      era.println();

      await era.printAndWait(
        `${you.name}은(는) 직접 적절한 비율로 만든 식염수가 담긴 병의 뚜껑을 열어 ${teio.sex}에게 건넸다. ${teio.sex}는 그것을 받아 조금씩 일정한 속도로 끝까지 마셨다.`,
      );
      era.println();

      await you.say_and_wait('아아…… 생각보다 효과가 있네.', true);
      era.println();

      await era.printAndWait(
        `${you.name}의 담당은 무슨 작품이라도 본 것인지, 갑자기 ${you.name}에게 무술을 해 보고 싶다고 말했다. 쿵푸 기술을 달리기에 접목하고, 특히 하체의 보법을 연마해 테이오 스텝을 발전시키고 싶다는 것이었다.`,
      );
      era.println();

      await era.printAndWait(
        `${you.name}은(는) ${teio.sex}의 고집에 못 이겨 시켜 봤는데, 뜻밖에도 성과가 있었다.`,
      );
      era.println();

      await teio.say_and_wait('트레이너, 어때?');
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 활짝 웃는 담당을 보고 이렇게 답했다——',
      ]);
      era.printButton('감각에 맡긴다 (파워&근성+20, 스킬 포인트+15)', 1);
      era.printButton(
        '수련이 우선이다 (스피드+30, 스킬 포인트+15, 체력+200)',
        2,
      );
      era.printButton(
        `냉정하게 분석한다 (스피드+15, 스태미나+20, 지능+30, 스킬 포인트+30)`,
        3,
      );
      const ret = await era.input();
      switch (ret) {
        case 1:
          await you.say_and_wait('먼저 하앗 하고, 그다음에 토옷 하는 거구나.');
          break;
        case 2:
          await you.say_and_wait('춤은 곧 무술…… 극한에 이르기 위한 수련이다!');
          break;
        case 3:
          await you.say_and_wait(
            '이 훈련으로 몸의 협응력을 기를 수 있을 것 같아. 무게중심을 옮겨서 결승선 직전에 순간 가속을 만들어 내는 거야. 해 볼래?',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_honey_power: (() => {
    const title = '벌꿀의 힘';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${teio.sex}와 외출하면 꼭 무슨 일이 생기는 것 같다고 ${you.name}은(는) 생각하며, 옆에서 ${you.name}의 팔을 잡은 담당을 바라보았다.`,
      );
      await era.printAndWait(
        `아니, 끌고 간다고 하는 편이 정확했다. 가끔 ${you.name}은(는) 생각에 잠긴 채 통통 뛰어다니는 ${teio.uma_sex_title} ${teio.teen_sex_title}의 걸음을 따라가고 있는 자신이 신기했다. 함께 지내는 동안 테이오 스텝의 기술이 조금 옮아 온 것인지도 모른다.`,
      );
      await era.printAndWait(
        '함께 시간을 보내다 보면 많은 것들이 은연중에 서로를 닮아가는 법이다…… 예를 들면 입맛 같은 것들 말이다.',
      );
      era.println();

      await era.printAndWait(
        `${you.name}의 담당은 ${you.name}을(를) 벤치로 데려가더니, 조금 전 단골 가게에서 산 특제 꿀 음료를 벌컥벌컥 마시기 시작했다.`,
      );
      await era.printAndWait(
        `진한 시럽이 ${teio.sex}의 목구멍을 타고 넘어가며 매끄러운 목선을 따라 작은 곡선을 그린다. 햇살이 ${teio.sex}의 옆얼굴을 비추자 뽀얀 피부가 더욱 돋보였고, 삼킬 때마다 움직이는 미세한 근육의 움직임까지 선명하게 보였다……`,
      );
      await era.printAndWait(
        `살 때는 아무 생각도 없었는데, 지금은 입이 말라 뭔가 마시고 싶어졌다.`,
      );
      era.println();

      await teio.say_and_wait('트레이너?');
      era.println();

      await era.printAndWait(`${you.name}은(는) 황급히 대답했다.`);
      era.println();

      await teio.say_and_wait(`트레이너? ${you.name}도 목마르지? 마실래?`);
      await era.printAndWait(
        `${teio.sex}는 히히 웃으며 반쯤 남은 꿀 음료를 ${you.name}의 눈앞에 내밀었다. 마치 유혹하듯이.`,
      );

      await era.printAndWait(`${you.name}의 선택은——`);
      era.printButton('한 잔 더 사온다 (지능 +20, 호감도 +5)', 1);
      era.printButton(
        '「사실 난 설탕 없는 차를 더 좋아해……」 (스태미나&근성 +15)',
        2,
      );
      if (era.get('love:3') > 50) {
        era.printButton(
          `${teio.sex}의 손에 들린 컵을 받아 꽂혀 있는 빨대로 다 마신 뒤 돌려준다(스피드&파워+15, 체력+150, 애정도+1)`,
          3,
        );
      }
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait(
            `${you.name}은(는) 웃으며 ${teio.sex}의 머리를 쓰다듬고 자신의 몫을 사러 갔다. 벌꿀 드링크를 입술로 가져가자 손가락에 남은 ${teio.uma_sex_title}의 머리카락 향기와 달콤한 벌꿀 향이 섞여 기분이 좋아졌다……`,
          );
          break;
        case 2:
          await era.printAndWait(
            `${you.name}은(는) 조금 어색한 표정으로 헛기침을 하며 담당의 권유를 완곡하게 거절했다. ${teio.sex}는 눈을 가늘게 뜨고 더 즐겁게 웃었다.`,
          );
          break;
        case 3:
          await teio.say_and_wait('///////');
          era.println();

          await era.printAndWait(
            `${you.name}은(는) 장난기가 동해 ${teio.sex}의 손에서 컵을 가져와 시원하게 한 모금 마신 뒤, 아무 일도 없었다는 듯 얼어붙은 ${teio.sex}의 손에 돌려주었다.`,
          );
          era.println();

          await teio.say_and_wait('으으으으——');
          era.println();

          await era.printAndWait('……장난이 지나쳤다.');
          await era.printAndWait(
            `그 뒤 십 분쯤 정성껏 사과하자, 얼굴이 새빨개진 ${teio.sex}는 겨우 투덜거리기를 멈추고 일어나 ${you.name}의 옆으로 다가왔다.`,
          );
          await era.printAndWait(
            `걸음을 옮기기 전, ${you.name}은(는) ${teio.sex}가 시선을 피하면서도 조심스레 빨대로 몇 모금 더 마시는 것을 알아차렸다……`,
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sr_wing_and_sky: (() => {
    const title = '두 날개로 푸른 하늘에 닿다';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await you.say_and_wait('옥상인가. 조금 오랜만이네.', true);
      await era.printAndWait(`${you.name}은(는) 도시락을 들고 밖으로 나왔다.`);
      await era.printAndWait(
        `문은 이미 활짝 열려 있었고, ${you.name}의 눈앞에는 ${you.name}의 담당, ${teio.name}가 있었다.`,
      );
      era.println();

      await teio.say_and_wait(`역시 여기는 기분 좋네~ 높은 곳은 자유로워.`);
      era.println();

      await you.say_and_wait('네가 좋으면 됐어.');
      era.println();

      await era.printAndWait(
        `그렇게 말하며 ${you.name}은(는) 도시락을 내려놓고 준비하기 시작했다. 담당은 또 무슨 생각이 들었는지 ${you.name}을(를) 옥상으로 데려와 둘만의 오후 티타임이라고 했다. ${you.name}은(는) 과자를 챙기고 직접 과일차를 우려서 ${teio.sex}를 따라왔다.`,
      );
      era.println();

      await teio.say_and_wait('있지——');
      era.println();

      await era.printAndWait(
        `산들바람이 불었다. ${you.name}이(가) 고개를 들자 ${teio.uma_sex_title}는 발끝을 틀고 두 팔을 살짝 들어 한 바퀴 돈 뒤, ${you.name}과(와) 눈을 맞추며 말했다.`,
      );
      era.println();

      await teio.say_and_wait(
        '트레이너는 알고 있지? 내가 높은 곳에 오르고 싶어 한다는 거. 이제 우리 손으로 막연했던 꿈을 조금씩 진짜 계단으로 바꿔서 위로 올라가고 있어. 앞으로는……',
      );
      era.println();

      era.print(`${you.name}은(는) 대답했다——`);
      era.printButton(
        '「나는 언제까지나 네 조력자가 되어 줄게.」 (스피드&스태미나&지능 +20, 체력 +200, 애정도 +1)',
        1,
      );
      era.printButton(
        '「꿈을 이루길 빌게. 꿈을 이루고 나면 다시 이곳에서 축하하자.」 (스피드 +15, 파워&근성 +20, 호감도 +5)',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${teio.teen_sex_title}는 몸을 살짝 숙여 ${you.name}에게 눈부시게 웃어 보였다.`,
        );
      } else {
        await teio.say_and_wait('또 약속한 거야. 꼭 기억해~');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_the_days_together: (() => {
    const title = '너와 함께 걸어온 날들';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `학원 중앙에는 분수가 있고, 그 위에는 세 여신상이 자리하고 있다. 매일 수많은 ${teio.uma_sex_title}와 사람들이 이곳에서 조용히 기도하며 소원을 빈다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 담당을 조금 닮은 얼굴을 바라보며 주머니 속 지갑을 만지작거렸다. 소원을 빌어 볼까……`,
      );
      era.println();

      await teio.say_and_wait('트레이너!');
      era.println();

      await era.printAndWait(
        `${you.name}은(는) 돌아서서 담당에게 손을 흔들었다. 그런데 ${teio.sex}는 통통 뛰며 다가와 남들의 시선도 아랑곳하지 않고 ${you.name}의 손을 잡았다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) ${teio.sex}의 얼굴을 보았다. 솔직히…… 조금 닮았다.`,
      );
      era.println();

      await teio.say_and_wait(
        '흐흥~ 나랑 같이 있으면서 다른 애 생각하는 거야?',
      );
      era.println();

      await era.printAndWait(
        `——애가 아니잖아! ${you.name}은(는) 그렇게 말하려다가 담당의 표정을 보고 눈치껏 입을 다물었다.`,
      );
      era.println();

      await teio.say_and_wait(
        `흥…… 그럼 작은 벌이야. ${you.name}은(는) 지금 소원을 빌려고 했지? 무슨 소원을 빌 거야?`,
      );
      era.println();

      era.printButton('「앞으로도 잘 부탁해.」 (호감도+10, 모든 능력치+5)', 1);
      if (era.get('love:3') > 90) {
        era.printButton(
          '「생각할게, 아니, 늘 네 곁에 있을게.」 (애정도+1, 의욕 상승, 무작위 능력치 2종+10)',
          2,
        );
      }
      const ret = await era.input();
      if (ret === 1) {
        await teio.say_and_wait('소원이 아니잖아…… 뭐야, 그게.');
        era.println();

        await era.printAndWait(
          `하지만 ${you.name}은(는) 무슨 소원을 빌지 정하지 못한 상태였다.`,
        );
      } else {
        await teio.say_and_wait('……봐줄게. 다음은 없어.');
        era.println();

        await era.printAndWait(
          `귀까지 붉어진 자그마한 ${teio.uma_sex_title}는 ${you.name}의 손을 놓았다.`,
        );
        await era.printAndWait(
          `잠시 후 ${teio.name}가 떠나고 나서, ${you.name}은(는) 이곳으로 돌아왔다. 입가에 미소를 짓고 지갑의 동전을 모두 연못에 쏟아 넣은 뒤 두 손을 모아, 처음으로 진심 어린 소원을 빌었다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_uma_shopping: (() => {
    const title = (teio) => `${teio.uma_sex_title}의…… 장보기!`;
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait('여성의 쇼핑에 동행하는 일은 힘들다.');
      await era.printAndWait('여성을 쇼핑몰에 데려가는 일은 피곤하다.');
      await era.printAndWait(
        `${teio.uma_sex_title}의 쇼핑에 동행하는 일은 뼛속까지 피곤하다.`,
      );
      await era.printAndWait(
        `불행히도 ${you.name}은(는) 지금 그 세 번째 단계에 있었다.`,
      );
      await era.printAndWait(
        `카트를 밀면서——속도는 ${teio.sex}와 비교도 되지 않았다——목록과 진열대의 물건들을 대조했다. 그것뿐이라면 나름 여유로웠을 것이다.`,
      );
      await era.printAndWait(
        `하지만 ${you.name}은(는) 눈 깜짝할 사이에 어디선가 온 물건들로 가득 차는 카트를 보고, 끊임없이 귓가를 스쳐 지나는 바람 소리를 들으며 절로 한숨을 내쉬었다.`,
      );
      era.println();
      await teio.say_and_wait(
        '트레이너, 빨리빨리! 아직 살 거 많단 말이야. 나 혼자선 다 못 들어, 도움이 필요해! 빨리 안 오면 다 팔린다고!',
      );
      await era.printAndWait(
        `${you.name}은(는) 하늘을 보며 길게 탄식한 뒤 운명을 받아들이기로 했다. 그리고 소리가 들리는 곳을 향해 전력으로 다리를 움직였다——`,
      );
      era.printButton(
        '필사적으로 테이오의 리듬에 맞춘다 (스피드&파워&근성 +20, 체력 +200, 호감도 +10)',
        1,
      );
      era.printButton(
        '미리 짜 둔 동선에 따라 목표 지점에 도착해 대기한다 (스태미나 +20, 지능 +30, 호감도 +5)',
        2,
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
};
