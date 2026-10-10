/**
 * @file トウカイテイオー - 育成 - 脚部負傷ルート
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const get_gradient_color = require('#/utils/gradient-color');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  ws_95_14_h: (() => {
    const title = '팬 감사제';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `무대에 오르기 직전, ${you.name}은(는) 또다시 테이오의 털을 정돈해 주었다.`,
      );
      await era.printAndWait(
        `오늘 이미 몇 번이나 같은 행동을 반복했지만, 두 사람 모두 약속이라도 한 듯 말없이 받아들였다. 마음을 다독이는 방법인지도 모른다.`,
      );
      await era.printAndWait(
        '행사장에 들어서자 먼 곳에서 찾아온 수많은 팬들 앞에서 테이오는 다시 평소의 자신감 넘치는 모습을 보였다. 즉석에서 선보인 개량형 테이오 스텝이 현장의 분위기를 최고조로 끌어올렸다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 무대 뒤로 몸을 숨기고 다가오는 레이스를 생각했다.`,
      );
      await era.printAndWait(
        `오늘 테이오가 뛰어난 모습을 보일수록 ${you.name}의 머릿속에서는 경보가 더 크게 울렸다……`,
      );
    };
    f.title = title;
    return f;
  })(),
  bs_broken: (() => {
    const title = '꺾인 날개';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {TextContent} leg_hurt_notification 脚の怪我の通知
     */
    const f = async (teio, you, leg_hurt_notification) => {
      await era.printAndWait(
        `의사는 생명을 구하고 상처를 치료하기 위해 존재하니, 소중한 사람은 반드시 나을 것이다——병실 문 앞에 서면 사람들은 흔히 그렇게 생각한다. 하지만 그 생각 중 얼마나 진실이고 얼마나 자기 위안일까. 모든 것을 구할 수 있다면, 의사가 있는데도 세상에서 부상과 죽음이 사라지지 않는 이유는 무엇일까. 의사가 부족해서? 최선을 다하지 않아서? 아니…… 그저 자신에게 운이 없었던 것일지도 모른다.`,
      );
      era.println();
      await era.printAndWait(
        `그런 생각을 하며 ${you.name}은(는) 무의식적으로 주로 쓰는 손으로 이마를 짚고, 흰 가운을 입은 중년 남자를 멍하니 바라보았다. 그의 입술이 움직였다——말을 하는 건가? 무슨 말을 하고 있지? 다른 손에 털의 감촉이 전해졌다. 아니, 평소처럼 정성껏 정돈된 매끄러운 꼬리가 아니었다. 안쪽에서부터 바짝 곤두서 부풀어 오른 털이 손바닥을 간질였다. ${you.name}은(는) 웃음이 나올 것 같았다. 이 아이는, 달리다가 스스로를 이 꼴로 만들다니…… 나중에 제대로——`,
      );
      await era.printAndWait(
        `${you.name}은(는) 돌아서서 애써 미소 지으며 담당을 바라보았다. 그러자 생기 없는 두 눈이 ${you.name}의 생각을 현실로 끌어당겼다.`,
      );
      era.println();
      await you.say_as_passer_by_and_wait(
        '주치의',
        `${teio.actual_name_with_title}, 그리고 ${you.actual_name_with_title}、${teio.sex}의 트레이너시군요. 다시 한번 말씀드리겠습니다. 앞으로 평생 레이스를 포기해야 할 수도 있다는 각오를 해 주십시오.`,
      );
      era.println();
      await era.printAndWait(
        '——어떻게 도망쳐도 결국 현실이라는 수레바퀴를 이길 수는 없었다. 현실은 눈앞에 있었고, 받아들이는 것 외에는 길이 없었다.',
      );
      era.println();
      await era.printAndWait(
        `${you.name}은(는) 주치의가 가느다란 금속 막대를 꺼내 다시 화면 속 사진을 가리키는 모습을 보았다. 예전에 받아들이기 싫어 스스로 외면했던 기억이 지금의 영상과 겹쳤다. ${you.name}은(는) 그가 무슨 말을 하는지 전부 알고 있었다. 「슬개골 탈구」, 「습관성 골절」, 「균열」, 「종아리」…… 그렇다. 어느 부위인지도 ${you.name}은(는) 알고 있었다. 어떤 상태인지도 ${you.name}은(는) 이해하고 있었다.`,
      );
      era.println();
      await era.printAndWait(
        `그런데도 이런 일이 벌어졌다. ${you.name}은(는) 감정을 억누르며 그 자리에 자신을 붙들어 놓았다.`,
      );
      await era.printAndWait('꼬리가 움직였다. 빠져나가려는 듯했다.');
      await you.say_and_wait(
        '나한테 실망했니? 그래도 괜찮아. 트레이너로서 내 직무를 다하지 못한 거니까.',
        true,
      );
      await era.printAndWait(
        `${you.name}은(는) 그렇게 생각하며 먼저 손을 조금 거두려 했다…… 하지만 그러지 못했다.`,
      );
      era.println();
      await era.printAndWait(
        `힘에 비해 작은 손 하나가 ${you.name}의 손등 위에 놓였고, 이어 다른 손이 아래에서 손을 감쌌다. 온기가 전해졌고, 작은 떨림도 함께 느껴졌다. 아이가 가까운 사람의 옷자락을 붙잡듯, ${teio.name}은(는) ${you.name}의 손을 당겼다. ${you.name}은(는) 길게 숨을 내쉬고 ${teio.sex}의 손을 마주 잡았다. 더는 놓지 않았다.`,
      );
      era.println();
      if (era.get('talent:3:身体素质') === 1) {
        era.print([
          '【',
          teio.get_colored_name(),
          '은(는) 더 이상 [튼튼함] 특성을 갖고 있지 않습니다!】',
        ]);
      }
      if (era.get('talent:3:自信程度') !== 1) {
        era.print([
          '【',
          teio.get_colored_name(),
          '은(는) [자신감 부족] 특성을 얻었습니다!】',
        ]);
      }
      if (era.get('talent:3:淫乱') !== 1) {
        era.print([
          '【',
          teio.get_colored_name(),
          '은(는) ',
          {
            color: buff_colors[2],
            content: '[음란]',
          },
          ' 특성을 얻었습니다!】',
        ]);
      }
      era.print(leg_hurt_notification);
    };
    f.title = title;
    return f;
  })(),
  ws_95_17_h: (() => {
    const title = '기자 회견';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${you.name}은(는) 넥타이를 바로 매고 마지막으로 거울 속 자신을 살폈다.`,
      );
      await era.printAndWait('——그래, 할 말은 없다.');
      await era.printAndWait('더는 할 수 있는 일도 없다.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 손목시계를 보았다. 시간이 촉박했다. 핑계를 대며 더 미룰 여유는 없었다.',
      ]);
      await era.printAndWait('깊이 숨을 들이쉬며 애써 긴장을 풀었다.');
      await era.printAndWait(
        `${you.name}은(는) 화장실을 나와 자신의 파멸을 향해 걸었다.`,
      );
      era.println();
      await era.printAndWait(
        `이번 기자 회견에 ${you.name}은(는) 테이오를 데려오지 않았다. 겉으로는 치료와 안정이 필요하기 때문이라고 했지만, ${you.name} 역시 ${teio.sex}가 이런 상태로 참석하는 것은 백해무익하다고 생각했다. 문제는——이렇게 되면 ${you.name}이(가) 모든 것을 짊어져야 한다는 점이었다.`,
      );
      await era.printAndWait(
        `하지만 ${you.name}은(는) 이미 오래전부터 마음의 준비를 하고 있었어야 했다. 그렇지 않은가.`,
      );
      era.println();
      await era.printAndWait(
        `회견장에 도착해 수많은 조명과 렌즈 앞에서 날카로운 질문을 던지는 기자들을 상대하며, ${you.name}은(는) 온 힘을 다해 침착하고 논리적으로 답하려 애썼다. 속옷까지 땀으로 젖었지만 어떻게든 버티고 있었다. 트레센에서 받은 교육에 감사한다고 ${you.name}은(는) 남몰래 생각하며 까다로운 질문에 집중했다. 그리고 마침내, 정말로 치명적인 질문이——`,
      );
      era.println();
      await era.printAndWait(
        `기자 A「묻겠습니다. 전문가의 분석에 따르면 토카이 테이오의 부상은 ${teio.sex} 특유의 주법에서 비롯되었다고 합니다. 당신은 ${teio.sex}의 트레이너로서 그 사정을 모르지는 않았을 텐데요. 즉, 문제를 알고도 ${teio.sex}를 출전시켜 오늘의 참극을 초래했다는 뜻입니까?」`,
      );
      era.println();
      await era.printAndWait('——왔구나.');
      await era.printAndWait('신중해야 한다.');
      await era.printAndWait(
        `이 대답은 ${you.name}의 경력 전체에 영향을 줄 수도 있었다.`,
      );
      await era.printAndWait(`${you.name}은(는) 결정했다——`);
      era.printButton(
        `「충분히 파악하지 못했습니다. 토카이 테이오가 출전을 원했고, 저는 담당의 의사를 따랐을 뿐입니다」`,
        1,
      );
      era.printButton(
        `「저는 ${teio.sex}의 트레이너입니다. 모든 책임은 제가 지겠습니다」`,
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `사람들이 한동안 수군거리다가 조용해졌다. ${you.name}은(는) 그들이 어떻게 반응할지 알고 있었지만, 이제는 관심이 없었다.`,
        );
      } else {
        await era.printAndWait('회견장이 술렁였다.');
        await era.printAndWait(
          '하지만 폭탄 같은 말을 끝까지 내뱉고 나니 더 답할 것은 거의 남지 않았다.',
        );
        await era.printAndWait('드디어 끝까지 버텼다.');
        await era.printAndWait(
          `조명이 꺼지고, 질문을 마친 기자와 카메라맨들이 하나둘 흩어졌다. 마침내 무대 위에는 ${you.name} 혼자만 남았다. ${you.name}이(가) 길게 숨을 내쉬고 자리를 뜨려는 순간——`,
        );
        era.println();
        await era.printAndWait('팬 A「왜……」');
        era.println();
        await era.printAndWait(
          `${you.name}은(는) 의아한 표정으로 고개를 들었다.`,
        );
        era.println();
        await era.printAndWait('팬 B「젠장……」');
        era.println();
        await era.printAndWait(
          `낯선 두 사람이 갑자기 실내에 나타났다. 인파가 흩어진 뒤 몰래 들어온 모양이었다.`,
        );
        era.println();
        await era.printAndWait(`팬 A「당신이 ${teio.sex}를 망가뜨렸어!」`);
        era.println();
        await era.printAndWait(
          `팬 B「자기 성적만 쫓으면서 ${teio.uma_sex_title}를 돌보지 않은 당신 때문이야. 토카이 테이오를 지금 이 지경으로 만든 건 당신이라고!」`,
        );
        era.println();
        await era.printAndWait(
          `팬 A「그러고도 트레이너라는 당신은…… 손 털고 떠날 수 있지! 책임진다고 해 봐야 사람들 앞에서 몇 마디 하고 고개 숙여 사과하면 그만이잖아. 잠잠해지면 새 유망주와 계약하면 되겠지! 예전 담당인 ${teio.uma_sex_title}의 인생은 이미 망가졌는데!」`,
        );
        era.println();
        await era.printAndWait(
          `두 사람이 다가와 분노에 찬 눈으로 ${you.name}을(를) 노려보았다. ${you.name}은(는) 그들과 눈을 마주쳤지만 아무 말도 나오지 않았다.`,
        );
        await era.printAndWait(
          '그들의 눈에는 분노와 원망 말고도 공허함이 있었다.',
        );
        await era.printAndWait('꿈을 잃은 눈이었다.');
        await era.printAndWait(`——${you.name}이(가) 팔고 있던 것은 꿈이었다.`);
        await era.printAndWait(
          `——${you.name}은(는) 그들에게 꿈을 주던 존재를 죽였다.`,
        );
        await era.printAndWait(
          '세 쌍의 눈이 저마다의 감정을 가슴속에 숨긴 채 서로를 노려보았다.',
        );
        era.printButton(`「책임지겠습니다」`, 1);
        await era.input();
        await you.say_and_wait(
          `${teio.sex}가 다시 일어서는 날을…… 보여 드리겠습니다. ${teio.sex}는 여전히 테이오입니다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_95_17_h: (() => {
    const title = '의지할 곳';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait('비 내리는 밤, 사방이 고요했다.');
      await era.printAndWait(
        `${you.name}은(는) 홀로 기숙사에서 화면 속 자료를 바라보며 생각나는 대로 메모를 하고, 담당인 ${teio.uma_sex_title}의 다음 단계 계획을 고치고 있었다. 사실 이 일은 진작에 끝났다. 어째서인지 ${you.name}은(는) 일을 깊은 밤까지 질질 끌고 있었다. 가슴에 쌓인 울적함을 덜기 위해서일까. 기계적인 노동으로 현실을 피하기 위해서일까.`,
      );
      await era.printAndWait(
        `키보드를 두드리는 소리가 점점 신경을 긁으며 고막을 타고 머릿속으로 흘러들었다. ${you.name}은(는) 탁 소리를 내며 화면을 닫고 양손으로 관자놀이를 가볍게 주물렀다. 눈을 감고 숨을 깊이 들이마셨다가 길게 내쉬었다.`,
      );
      await era.printAndWait('……소리가 멈추지 않았다.');
      await era.printAndWait(
        `${you.name}은(는) 잠시 멍해졌다가 재빨리 현관으로 달려갔다. 문구멍으로 바깥을 확인하고 문을 열었다. 초인종 소리의 여운 속에서 문이 열리자, 깊은 어둠 한가운데 온몸이 흠뻑 젖은 ${teio.uma_sex_title}가 ${you.name}의 앞에 서 있었다. 빗물이 우비를 타고 흘렀다. 길게 솟아 있던 흰 앞머리가 물방울의 무게에 눌려 콧등에 내려앉자 살짝 털어 냈다. ${teio.sex}가 후드를 걷어 올리자 ${you.name}의 눈에 어두운 푸른빛 두 눈이 들어왔다.`,
      );
      await era.printAndWait(
        `그 순간 ${you.name}은(는) 아무런 근거 없는 확신을 느꼈다── 오늘 밤 내내 ${teio.sex}를 생각하며 ${teio.sex}를 기다리고 있었던 거라고.`,
      );
      await era.printAndWait(
        `가슴의 짐을 내려놓은 안도감과 약간의 짜증을 느끼며 ${you.name}은(는) 아무 말 없이 몸을 비켜 ${teio.sex}를 안으로 들였다.`,
      );
      era.println();
      await teio.say_and_wait('……');
      era.println();
      await era.printAndWait(
        `${teio.teen_sex_title}은(는) 아무 말 없이 소파에 앉아 ${you.name}이(가) 김이 나는 수건을 머리에 덮고 닦아 주는 대로 가만히 있었다. ${you.name}은(는) 몇 번이나 입을 열려 했지만 속삭이는 듯한 중얼거림밖에 나오지 않아 포기했다. 두 사람은 기묘한 침묵 속에 잠겼다.`,
      );
      await era.printAndWait(
        `설령 ${you.name}이(가) 트레이너가 아니더라도 ${teio.uma_sex_title} ${teio.teen_sex_title}이(가) 무너지기 직전이라는 것은 한눈에 알 수 있었다.`,
      );
      await era.printAndWait(
        `${teio.sex}는 생기 없이 앉아 두 손을 모으고 있었다. 기도하려는 것이 아니라, 의지할 곳을 찾듯 모은 손에 이마를 기댔다. 이 ${teio.teen_sex_title}은(는) 조용한 어둠 속에 틀어박혀 모든 빛과 소리를 거부하는 듯했고, ${you.name}은(는) ${teio.sex}가 정말 이곳에 있는지 걱정스러워졌다.`,
      );
      await era.printAndWait(`──그래, ${teio.sex}는 분명 여기에 있다.`);
      await era.printAndWait(
        `허리에 전해지는 감촉이 ${teio.sex}의 존재를 현실에 붙들어 두었다. 꼬리 하나가 살며시, 조심스럽게 ${you.name}에게 감겨 왔다. 물에 빠진 사람이 유일한 구명줄을 붙잡듯 ${you.name}의 몸을 단단히 휘감았다.`,
      );
      era.printButton('「테이오……」', 1);
      await era.input();
      await era.printAndWait(
        `대답은 없었다. ${teio.teen_sex_title}의 미세한 떨림만이 ${you.name}에게 답하는 듯했다.`,
      );
      era.println();

      await you.say_and_wait('……');
      era.println();

      await era.printAndWait(
        `${teio.teen_sex_title}이(가) 이런 얼굴을 한 것은 처음 보았다. 평소 매끈하게 정돈되어 있던 털은 흐트러졌고, 두 눈은 생기 없이 어두웠다. 한층 작아 보이는 몸이 숨결과 맥박에 따라 흔들렸다. ${you.name}은(는) 다시 ${teio.sex}의 이름을 불렀다. 아까보다 조금 크게, 하지만 너무 울리지 않도록. 이번에는 반응이 있었다. 갑자기. ${teio.name}는 세차게 고개를 들어 ${you.name}을(를) 바라보고는 확인하듯 눈을 깜박였다.`,
      );
      await era.printAndWait('그러고는 품으로 뛰어들었다.');
      await era.printAndWait(`작은 몸이 ${you.name}의 품 안에 들어왔다.`);
      era.println();

      await teio.say_and_wait(`——`);
      era.println();

      await era.printAndWait(
        `흐느낌도 눈물도 없었다. 하지만 분명 ${teio.sex}는 그 충동을 억누르고 있었다.`,
      );
      await era.printAndWait(
        `마음이 조금이라도 밀린다면 ${teio.sex}에게 남은 저항은 사라질 것이다. ${teio.teen_sex_title}은(는) 울기 시작해 하염없이 눈물을 쏟을 것이다.`,
      );
      await era.printAndWait(
        `그것은 ${teio.name}라는 ${teio.uma_sex_title}가 무너지는 것을 뜻했다.`,
      );
      await era.printAndWait(
        '상식적으로 마음이 다치면 한바탕 울어도 된다. 분명 그렇다. 눈물에는 놀라운 힘이 있어 고민을 씻어 내고 아무리 큰 아픔도 누그러뜨린다.',
      );
      await era.printAndWait(
        '울고 나면 사람은 다시 현실을 마주할 힘을 얻는다.',
      );
      await era.printAndWait(
        `하지만──${teio.name}라는 ${teio.uma_sex_title}에게 지금은 그마저도 선택할 수 없는 길이었다.`,
      );
      await era.printAndWait(
        `여기서 ${you.name}에게 기대 울어 버리는 건 책임을 회피하는 일이 아닐까.`,
      );
      await era.printAndWait(
        `데뷔 때부터 클래식 삼관이라는 유례없는 목표를 내세웠던 ${teio.uma_sex_title}는 스스로 고안하고 자신에게 가장 잘 맞는다고 믿었던, 타고난 재능을 접목한 주법으로 달리다 쓰러졌다. 결국 자신의 고집 때문에 믿고 따르던 트레이너(${you.name})에게 책임까지 지게 했다. 이런 상황에서 무슨 낯으로 울 수 있단 말인가. ${you.name}의 곁에서 감정을 쏟아 내고, 또 ${you.name}에게 ${teio.sex}를 떠받쳐 달라고 할 것인가.`,
      );
      await era.printAndWait(
        `지금 이곳에서 눈물을 흘리며 모든 것에서 도망치는 편이 ${teio.name}에게는 행복일지도 모른다. 하지만 그렇게 되면 끈질기게, 자신 있게 세상에 자신의 존재를 드러냈던 그 ${teio.uma_sex_title}는 패배한 채 퇴장하게 된다.`,
      );
      await era.printAndWait(
        `그래서 ${teio.teen_sex_title}은(는) ${you.name}의 품에 기대 입술을 깨물고 두 눈을 꼭 감은 채 어딘가 우스꽝스러울 만큼 몸을 떨고 있었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 다정하게 ${teio.uma_sex_title}의 등을 쓰다듬으며 ${teio.sex}를 진정시키려 했다.`,
      );
      await era.printAndWait(
        `두 사람 사이로 온기가 전해졌다. 작은 태양처럼 ${you.name}의 몸과 마음을 데워 주던 담당이 지금은 반대로 ${you.name}에게 온기를 받고 있었다.`,
      );
      era.println();
      await teio.say_and_wait('……트레이너.');
      era.println();
      await era.printAndWait(
        `${you.name}은(는) 습관처럼 손가락으로 천천히 ${teio.sex}의 털을 정돈해 주며 무심코 응, 하고 대답했다.`,
      );
      era.println();
      await teio.say_and_wait(
        '나…… 무슨 말을 해야 할지, 어떻게 해야 할지 이제 모르겠어.',
      );
      await era.printAndWait(
        `${you.name}은(는) 침묵으로 답했고, 손길이 느려졌다.`,
      );
      era.println();
      await teio.say_and_wait('지금 나한테 남은 건…… 너뿐이야.');
      era.println();
      await era.printAndWait(
        `자랑스러워하던 두 다리도, 꿈을 실었던 양 날개도 모두 ${teio.teen_sex_title}의 몸에서 사라져 버렸다.`,
      );
      era.println();
      await teio.say_and_wait('갖고 싶어. 너의 그 마음속 힘을.');
      era.println();
      await you.say_and_wait('그런 거라면 줄게.');
      era.println();
      await teio.say_and_wait('그럼…… 내 것도 받아 줘.');
      era.println();
      await era.printAndWait(
        `細い指が慎重に ${you.name} の襟へ入り、鎖骨を伝って胸へ下り、${you.name} は肌がすっと縮むのを感じる。`,
      );
      await era.printAndWait(`${you.name} は決める——`);
      era.printButton(`${teio.sex}를 밀어내고 일어선다.`, 1);
      era.printButton('고개를 끄덕인다.', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name}은(는) ${teio.sex}의 양어깨를 붙들고 행동으로 답을 보였다. 그러고는 택시를 불러 ${teio.sex}를 학원으로 데려다주었다. 가는 동안 아무 말도 없었다── 아니, 어쩌면 ${you.name}이(가) ${teio.sex}의 얼굴을 마주 볼 수 없었을 뿐인지도 모른다.`,
        );
      } else {
        await era.printAndWait(
          `躊躇。${teio.sex}が指す言外の意味に、${you.name} は単純な喜びを感じる。興奮も。`,
        );
        await era.printAndWait(
          `だが、このうねりに体を預けていいのか。それで本当にこの${teio.teen_sex_title}を救えるのか。`,
        );
        await era.printAndWait(
          `——そうは言っても、${you.name} はすでにすべてを${teio.sex}自身の決断に委ねると決めたのではなかったか。`,
        );
        await era.printAndWait(
          `その決断が${teio.sex}のものであるなら、${you.name} がすべきは——${teio.sex}の決断を尊重することだけだろう。`,
        );
        era.println();

        await you.say_and_wait(
          '自分は、そんなに優しい人間ではないかもしれない',
        );
        era.println();

        await teio.say_and_wait('大丈夫……ボク、んっ！');
        era.println();
        await era.printAndWait(
          `${you.name} は${teio.sex}の顎を上げ、${teio.sex}の唇に口づける。礼儀というより、${teio.sex}の気持ちを少し和らげるためだ。`,
        );
        await era.printAndWait(
          `だがその仕草は、${you.name} の奥に潜んでいたものを解放する。`,
        );
        await era.printAndWait(
          `熱く柔らかい感触で、${you.name} は${teio.uma_sex_title}の味を知る。そうだ、人に貪られるために生まれた生き物だ。耽溺させる魅惑が ${you.name} の欲を引き出す。`,
        );
        await era.printAndWait(
          `${teio.sex}を下に押し、体を支配したい衝動——抗えない波がこの瞬間に沸き、心臓から四肢の末端まで走る。`,
        );
        await era.printAndWait('精神の一部が、獣へ変じている。');
        await era.printAndWait(
          `${you.name} の変化を感じたのか、腕のなかの${teio.name}が震える。構わず、${you.name} は始めた動作を続ける——舌を伸ばして${teio.teen_sex_title}の唇を開き、侵入する。`,
        );
        await era.printAndWait(
          `滑らかな歯から弾力のある歯茎まで舐める。舌が${teio.teen_sex_title}の上唇を巻き、内側を舐る。`,
        );
        await era.printAndWait(
          `${teio.teen_sex_title}への正しい扱いとは言い難い。だがそうしたい衝動は抑えられない。`,
        );
        await era.printAndWait(
          `${teio.name}はきっと怯えているだろう。だが${teio.sex}は従順だ。逆らわず、躱さず、素直に体を ${you.name} へ預ける。`,
        );
        await era.printAndWait(
          `その態度が、さらに ${you.name} の獣性を燃やす。`,
        );
        await era.printAndWait(
          `${you.name} は顔を寄せ、担当と唇と舌を合わせ、体液が双方の口で翻る。口腔を容赦なく侵された小さなウマは、震えながらも負けを認めず柔舌を伸ばし、侵入者である ${you.name} に絡む。`,
        );
        await era.printAndWait('血が沸騰する。脳は考える機能を失う。');
        await era.printAndWait(
          `${teio.teen_sex_title}の薄い舌は為す術なく弄ばれる。過剰な暴虐に瞳が涙を含み——雫が密着した唇へ落ち、予期せぬ粗暴な扱いを受けた事実を伝える。`,
        );
        era.println();

        await era.printAndWait('——ひどく甘い。');
        await era.printAndWait(`${you.name} の奥が、満足の咆哮を上げる。`);
        await era.printAndWait(`${teio.sex_slave_title}一匹にすぎない。`);
        await era.printAndWait(
          `その念が出た瞬間、${you.name} に残っていた「教師としての体裁」はさらに見当たらなくなる。`,
        );
        await era.printAndWait(
          `唇が一定のリズムで吸い、肉と肉の狭い隙間から湧く液体を啜る。淫らな音が響く。力を失い、${you.name} に半分抱えられた${teio.teen_sex_title}の体が、いきなり熱を帯びる——羞恥のせいだろう。`,
        );
        await era.printAndWait(`それがさらに ${you.name} の欲を煽る。`);
        await era.printAndWait(
          `${you.name} は口腔を独占し続け、${teio.name}の口が渇くまで。いや、まだ足りない。`,
        );
        await era.printAndWait(
          `${you.name} は${teio.teen_sex_title}の舌に絡み、自分の口へ虜にする。軽く噛み、獲物の動きを封じる。`,
        );
        await era.printAndWait(
          `自分をどう扱うのか。${teio.sex}は硬直した体を縮め、${you.name} へ無声の問いを投げる。`,
        );
        await era.printAndWait('——ふふ。');
        await era.printAndWait('言うまでもないだろう。');
        await era.printAndWait(
          `衝動は止まない。止まるはずもない。最後の飾りのように、${you.name} は舌先で粘く ${teio.name}の舌の内側——その細く柔らかい領地——を擦る。`,
        );
        era.println();

        await teio.say_and_wait(`——んあっ！`);
        era.println();

        await era.printAndWait(
          `この秘所まで略奪されたと気づき、${teio.teen_sex_title}は慌てる。${teio.sex}は為す術なく、無意識に抜け出そうとするが、${you.name} が両腕を強く閉じ、抗うなという意思を込めれば、${teio.sex}は静かになる……両目に怯え、困惑、だがそれらに構っていられない表情が映る。`,
        );
        await era.printAndWait(
          '普段は一本気で子供っぽい担当が、今は壊れそうなほど柔らかい塊に縮んでいる。',
        );
        era.println();

        await you.say_and_wait('キミにも、そんな目があるんだな！', true);
        era.println();

        await era.printAndWait(
          `内心の声が上がる。こう強制的にひとりの${teio.uma_sex_title}を征服することが、${you.name} を陶然とさせる。${you.name} は我を忘れて、口のなかの自分だけのものになった柔らかさを吸い、${teio.sex}の体液を搾り、収奪する。`,
        );
        await you.say_and_wait(
          'キミのせいだ。自分たちを今の姿にしたのは。',
          true,
        );
        await you.say_and_wait(
          'キミの我儘と、自分の甘やかしが、この惨めな結末を招いた。',
          true,
        );
        await you.say_and_wait('だから、代償は回収する。', true);
        await era.printAndWait(
          `${teio.name}が ${you.name} の背に回した手は力なく撫でる。指先が、抵抗なく許しを請うだけだ。`,
        );
        await era.printAndWait('構わない。');
        await era.printAndWait(
          `突然、${teio.teen_sex_title}が激しく震える。肌が熱に浮かされたように灼ける。`,
        );
        await era.printAndWait(
          `${you.name} の手のなかで、強制的に挑まれた反応だ。`,
        );
        await era.printAndWait(`……絶頂したのだろう。`);
        await era.printAndWait(
          `その極めて卑俗な言葉が、${you.name} の胸で低く響く。`,
        );
        await era.printAndWait(`続ける。まだ遠く足りない。`);
        await era.printAndWait(
          `${teio.name}もそう思っているはずだ。衣がすべて落ちる前に止められるのは、${teio.sex}の望むところではない。`,
        );
        await era.printAndWait(
          `${teio.sex}は ${you.name} にこうしてほしいと言った。${you.name} が今しているのは、自分の欲を満たすのでも感情を晴らすのでもなく、${teio.teen_sex_title}の気持ちに従っているだけだ。`,
        );
        await era.printAndWait('なら、次の段へ進もう。');
        await era.printAndWait(
          `${teio.teen_sex_title}の視線は散って定まらず、${you.name} は${teio.sex}の注視のなか、両手を${teio.sex}の衣へ伸ばす。`,
        );
        await era.printAndWait(
          `${teio.teen_sex_title}の体はすでに充分熱く、往時のようだ。`,
        );
        await you.say_and_wait(`${teio.name}——やはり、そういう女だ！`, true);
        await era.printAndWait(
          `頭のなかが黒いもので埋まり、${you.name} は口を歪めて${teio.sex}の肌に触れる。舌を伸ばす。口づけを${teio.sex}の首筋に置き、汗を吸う。勢いで肌を舐め、柔らかな肉を吸い——醜い痕を残す。`,
        );
        era.println();
        await teio.say_and_wait('ああ……');
        era.println();
        await era.printAndWait(
          `また小さな略奪を受け、${teio.teen_sex_title}は夢うつつに呻く。`,
        );
        await era.printAndWait(
          `普段あれほど誇り高く固執し、レース場で舞い上がるウマ——所詮はこういう${teio.phy_sex_title}だ！`,
        );
        await era.printAndWait(
          `${you.name} を苦しめた小さなものが、今は甘く柔らかい贄の子羊として ${you.name} の前に並んでいる！`,
        );
        await era.printAndWait(
          `${you.name} が抑えきれない内心の一角がどれほど醜くても……${teio.sex}に責任は一片もないのか！影は太陽の下に現れる。それが真理ではないのか！`,
        );
        await era.printAndWait(
          `${you.name} は手を白い肌のうえを走らせる。大きくはない胸の隆起を覆う。`,
        );
        await era.printAndWait(
          '掌をそのうえに置き、軽く弄る。指の腹で桃色の突起を撫でる。',
        );
        await era.printAndWait(
          `${teio.teen_sex_title}は焦れて体をよじる。これは絶対に ${you.name} を誘っている。${you.name} はそう思い、${teio.teen_sex_title}の患部を避け、${teio.sex}のまだ育ちきっていない尻を擦り、他の部位へ手を伸ばして力を加える。予告なく、まだ硬い小さな丘を残酷に蹂躙し始める。`,
        );
        era.println();
        await teio.say_and_wait('やっ……');
        era.println();
        await era.printAndWait(
          `${teio.name}が小さく驚く。当然だ。${teio.name}の体は、この扱いをこなすほど熟練していない。`,
        );
        await era.printAndWait(
          `${you.name} は知りつつ、わざとやる。この悲痛を求めて、こうしている。`,
        );
        await era.printAndWait(
          `だから続ける。徹底して粗く、${teio.teen_sex_title}の第二の秘所を揉む。欲が高まり、胸のうえは油を塗ったように艶めき、${teio.sex}のちょうどいい寸法と相まって、火加減のいい目玉焼きのように誘う。`,
        );
        await era.printAndWait(
          `${you.name} は唇をもう一方の隆起へ移し、吸い、また猥褻な痕を残す。`,
        );
        await era.printAndWait(
          `${teio.name}が楚々と ${you.name} を見る。瞬間、血が逆流する。`,
        );
        await era.printAndWait(
          `暗い面が、抵抗しないこの${teio.teen_sex_title}を前に極限まで発揮する。`,
        );
        await era.printAndWait(
          `うん、きっと${teio.sex}はわざと ${you.name} の情熱を煽っている。完璧な小さな雌獣だ。`,
        );
        await era.printAndWait('では……本題へ入ろう。');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  async we_95_17_h_sex_end(teio, you) {
    era.printButton('「すまない」', 1);
    await era.input();

    await teio.say_and_wait('んぅん——！');
    era.println();
    await era.printAndWait(
      `結局、${you.name} はまる四時間自分を抑えられず、少しやりすぎた。`,
    );
    await era.printAndWait(
      `${you.name} の絶え間ない謝罪と保証のなか、小さな${teio.uma_sex_title}はようやく ${you.name} の詫びを受け入れ、ベッドで眠る。`,
    );
    await era.printAndWait(`${you.name} も身支度して、服のまま横になる。`);
    await era.printAndWait(
      `目を閉じたとき、何かが寄ってきて ${you.name} の体に貼りつく気がした。`,
    );
  },
  ws_95_19_h: (() => {
    const title = '교섭';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} abandon_disabled テイオーと関係を持ったあとなら捨てられない
     */
    const f = async (teio, you, abandon_disabled) => {
      await you.say_and_wait('이번에는 또 무슨 일이지……');
      await era.printAndWait(
        `${you.name}은(는) 낯선 방을 바라보다 잠시 망설인 끝에 문을 두드렸다. 문은 곧 열렸고 ${you.name}은(는) 안으로 들어갔다.`,
      );
      era.println();
      await era.printAndWait(
        `텐노상(봄)이 끝난 뒤, ${you.name}은(는) 학원 관리부의 호출을 받아 따로 면담을 하고, 일선에서 물러난 베테랑 트레이너 선배의 지도를 받으라는 말을 들었다. 업계에서 이름난 그 트레이너는 수많은 ${teio.uma_sex_title}를 지도해 왔다. ${you.name}도 학생 시절 한 학기 동안 그에게 배운 적이 있었다. ${you.name}에게 거절할 이유는 없었고, 그래서 오늘 이곳에 왔다.`,
      );
      era.println();
      await era.printAndWait(
        `중년 여성이 의자에 단정히 앉아 ${you.name}을(를) 기다리고 있었다. 탁자 위에는 자료가 놓여 있었다. ${you.name}은(는) 인사하고 앉으며 탁자 위를 슬쩍 보았다. 예상대로 계약 관련 서류였다.`,
      );
      era.println();
      await era.printAndWait(
        `중년 여성「${you.actual_name}이지? 기억하고 있어. 이제 제법 이름 있는 트레이너가 되었구나」`,
      );
      era.println();
      await era.printAndWait(`${you.name}은(는) 고개를 끄덕여 대답했다.`);
      era.println();
      await era.printAndWait(
        `중년 여성「오늘은 학원의 부탁으로 너와 네 담당 ${teio.uma_sex_title} ${teio.name}에 대해 이야기하러 왔단다」`,
      );
      era.println();
      await era.printAndWait(
        `${teio.sex}의 이름을 듣자 ${you.name}은(는) 각오하고 있었음에도 가슴이 내려앉았다. 드디어 올 것이 왔구나——${you.name}은(는) 그렇게 생각했다.`,
      );
      era.println();
      await era.printAndWait(
        `중년 여성「단도직입적으로 말할게——너는 ${teio.uma_sex_title}의 생각을 따라 주다가 이렇게 실패한 거잖니? 잘못은 네게 없단다. 그리고 트레이너에게는 목표를 이룰 기회가 얼마든지 있어. 한 번 육성에 실패했다면 계약을 해지하고 새로운 ${teio.uma_sex_title}와 계약하면 돼. 오늘 네게 그 선택지를 주려는 거야——지금의 담당과 계약을 해지하렴. 앞으로도 우수한 아이와 계약할 수 있게 해 줄 테고, 전 담당도 최선의 보살핌을 받게 될 거라고 보장하마」`,
      );
      await era.printAndWait(
        `${you.name}은(는) 무슨 말을 듣게 될지 마음의 준비를 하고 있었지만, 그래도 아연해졌다.`,
      );
      era.println();
      await era.printAndWait(
        '중년 여성「넌 장래성이 있어——여기서 주저앉기에는 아깝구나. 네 앞날을 생각하렴. 나무 한 그루에만 매달려 있으면 안 돼」',
      );
      era.println();
      await era.printAndWait(`${you.name}의 대답은——`);
      era.printButton('「……선생님의 의견에 동의합니다」', 1, {
        disabled: abandon_disabled,
      });
      era.print(
        '【선택 시 모든 것을 되돌릴 수 없습니다! 저장 상태를 확인하세요!】',
        {
          offset: 1,
          width: 23,
          color: buff_colors[3],
        },
      );
      era.printButton('「아닙니다」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name}은(는) 말없이 계약 해지 서류에 자신의 이름을 적고, 꿈속을 걷듯 절차를 마친 뒤 방을 나왔다. 걸음은 갈수록 빨라졌고, ${you.name}의 감정은 더는 안정을 찾지 못했다. 끝내 놀란 행인들의 시선 속에서 비명을 지르며 도망치듯 집으로 달려갔다.`,
        );
        await era.printAndWait(
          `${you.name}에게는 더 이상 ${teio.name}을(를) 마주할 용기가 없었다. ${teio.sex}와 ${you.name}의 인생은 여기서 갈라졌다.`,
        );
      } else {
        await era.printAndWait(
          `${you.name}은(는) 자신의 목소리가 실내에 울리는 것을 들었다.`,
        );
        era.println();
        await you.say_and_wait(
          `말씀하신 대로입니다…… 트레이너에게는 아직 기회가 많습니다. 제 앞날을 위해서라면 실패한 담당을 일찌감치 포기하고 다른 ${teio.sex}를 선택하는 편이……`,
        );
        era.println();
        await era.printAndWait(
          `중년 여성은 의자에 단정히 앉아 눈을 가늘게 뜨고 ${you.name}의 대답을 들었다.`,
        );
        era.println();
        await you.say_and_wait(
          '미래가 없는 학생에게 집착하는 것이 서로에게 좋지 않다는 건 압니다. 직업인으로서 타협해야 한다는 것도 이해합니다.',
        );
        era.println();
        await you.say_and_wait(
          '하지만 막상 그 말을 듣고, 제 입으로 한번 되풀이해 보니…… 받아들일 수가 없습니다.',
        );
        era.println();
        era.printButton('「그러니 거절하겠습니다」', 1);
        await era.input();
        await you.say_and_wait(
          `트레센의 트레이너 제도는 ${teio.uma_sex_title}의 성장을 뒷받침하는 필수적인 요소입니다. 트레이너의 책무는 담당 ${teio.uma_sex_title}에게 책임을 지는 것입니다.`,
        );
        era.println();
        era.printButton(
          `${teio.name}의 전속 트레이너로서 해야 할 일을 하겠습니다.`,
          1,
        );
        await era.input();
        await era.printAndWait('중년 여성「착하구나」');
        await era.printAndWait('중년 여성이 미소 지었다.');
        await era.printAndWait(
          `그녀는 손을 들어 탁자 위의 서류를 거두고 다시 ${you.name}에게 미소 지었다.`,
        );
        era.println();
        await era.printAndWait(
          '중년 여성「험난한 길이야. 그래도 그 길을 택하다니 훌륭하구나. 힘내렴. 잘되기를 빌어 줄게——내가 할 수 있는 도움도 주마」',
        );
        era.println();
        await era.printAndWait(
          `${you.name}은(는) 방 밖으로 나왔다. 아직 안개 속에 있는 듯했지만, ${you.name}의 마음 깊은 곳에서는 신념이 단단해졌다——${teio.name}의 꿈을 ${teio.sex}가 이루도록 돕겠다는 신념이었다.`,
        );
        era.println();
        await era.printAndWait(
          `그 후로 어찌 된 일인지 ${you.name}에 대한 뒷말이 줄어들었고, 트레센 측에서도 ${you.name}에게 얼마간 지원을 제공했다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_95_20_h: (() => {
    const title = '돌아오다';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await teio.say_and_wait('하아아……');
      era.println();

      await teio.print_and_wait(
        `트레이닝이 끝난 뒤, ${you.name}이(가) 학원 직원에게 불려 가자 테이오는 혼자 기숙사로 돌아갔다. ${teio.sex}는 학원 안뜰을 가로지르다가 자신도 모르게 발을 멈췄다.`,
      );
      era.println();

      await teio.print_and_wait(
        `${teio.uma_sex_title}의 눈에 구석에 있는 속이 빈 나무줄기가 들어왔다——`,
      );
      era.println();

      await teio.print_and_wait(
        '어떤 의미에서 이곳은 학원의 쓰레기통이었다. 다만 버려지는 것은 학원 사람들의 감정과 말이었다.',
      );
      era.println();

      await teio.print_and_wait(
        '이곳에서 자기 생각을 마음껏 큰 소리로 토해 내는 것은 이미 일종의 풍습이 되어 있었다.',
      );
      era.println();

      await teio.say_and_wait('……');
      era.println();

      await teio.print_and_wait(
        `정신을 차렸을 때, ${teio.sex}는 나무 구멍 앞에 서 있었다.`,
      );
      era.println();

      await teio.say_and_wait(`나…… (포기하고 싶어.)`);
      era.println();

      await teio.print_and_wait(
        '입가까지 나온 말을 뱉기가 이렇게 어렵다는 것을 깨달았다. 입 밖으로 내는 순간 스스로 인정한 셈이 될까 두려운 걸까. 인정하면 되돌릴 수 없는 현실이 될까 봐?',
      );
      era.println();

      await teio.print_and_wait(
        '하지만 현실은 현실이다. 마음으로 거부한다고 부정할 수는 없다.',
      );
      era.println();

      await teio.say_and_wait('나, 정말——');
      era.println();

      await era.printAndWait('(?)「넌 잘했어. 수고했어」');
      era.println();

      await teio.say_and_wait('?! 트레이너?');
      era.println();

      await era.printAndWait(
        `(?)「네 선택은 옳았어. 자신감을 가져. 이미 큰일을 해냈잖아. 길을 헤매다 돌아온 것뿐 아니겠어? 괜찮아, 내가 함께할게」`,
      );
      era.println();

      await era.printAndWait('(?)「앞으로는 마음껏——」');
      era.println();

      await teio.say_and_wait('누구야!');
      era.println();

      await era.printAndWait('(?)「모르겠어? 테이오」');
      era.println();

      await era.printAndWait(
        `(?)「어제도, 그 전날에도, 나는 이렇게 말했잖아. 넌 이미 충분히 했어——이제 쉴 때야」`,
      );
      era.println();

      await era.printAndWait(
        `(?)「후후, 후회는 없잖아. 한마디만 해 주면 곁에 있을게. 그러고 나면 우리는——」`,
      );
      era.println();

      await teio.say_and_wait('——시끄러워.');
      era.println();

      await teio.say_and_wait('넌 내 트레이너가 아니야!');
      era.println();

      await teio.print_and_wait(
        `${teio.teen_sex_title}은(는) 자신도 모르게 큰 소리로 외쳤다. 눈앞의 환영은 멀어졌지만 목소리는 멎지 않았다. 머릿속에서 다시 말들이 들끓었다.`,
      );
      era.println();

      await teio.print_and_wait([
        teio.get_colored_name(),
        `(?)「남들이 뭐라고 하든, 지난 몇 년의 경험은 네 재산이야. ${you.name}의 달리기를 보고 인생이 바뀐 사람도 적지 않아. ${you.name}은(는) 이미 오래전에 전설이 됐어!」`,
      ]);
      era.println();

      await teio.say_and_wait(`무슨 소리야!!`);
      era.println();

      await teio.print_and_wait(
        `${teio.teen_sex_title}은(는) 주먹을 쥐고 온몸을 떨며 힘껏 외쳤다.`,
      );
      era.println();

      await teio.say_and_wait(
        '난 단 한 번도 전설이 된 적 없어! 제대로 해낸 것도 하나 없어! 내 손으로 남긴 후회는 셀 수 없다고! 게다가 진짜 나도, 트레이너도 절대 그런 말은 하지 않아! 넌 그저 부끄럽고 슬픈 자기 연민의 그림자일 뿐이야! 나 자신을 달래는 변명 따위는 받아들이지 않겠어! 결국 다시 일어섰는데도 결과가 나오지 않을까 봐 무서운 거잖아! 알 게 뭐야! 난 달리고 싶어! 명예의 전당에 들어가서, 그곳에서 더 큰 감동과 기쁨을 느낄 거야!',
      );
      era.println();

      await you.say_and_wait('테이오?');
      era.println();

      await teio.say_and_wait('아직도——응?');
      era.println();

      era.printButton('「어, 음, 방금 돌아왔어. 아무것도 못 봤어」', 1);
      await era.input();

      await teio.say_and_wait('……흥.');
      era.println();

      await era.printAndWait(
        `한 줄기 미소가 ${you.name}의 담당의 입가에 피어났다.`,
      );
      era.println();

      await teio.say_and_wait(
        `알아도 괜찮아. 트레이너, 방금 한 말은 전부 진심이야. 우리——앞으로 나아가자.`,
      );
      era.println();

      era.printButton(
        `「새롭게 태어난 무적의 테이오 ${teio.adult_sex_title}과 동행할 수 있다니 영광입니다」`,
        1,
      );
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  japa_cup_win_h_s: (() => {
    const title = '재기';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${you.name}은(는) 직접 담당을 경기장까지 배웅하고 ${teio.sex}를 격려한 뒤 관중석으로 돌아왔다.`,
      );
      await era.printAndWait('옆자리는 텅 비어 있었다.');
      await era.printAndWait(
        `${you.name}은(는) 한숨을 내쉬었다. 기자 회견에 나타났던 그 테이오의 팬들은 결국 오지 않았다.`,
      );
      await era.printAndWait(
        `그래도 괜찮다고 ${you.name}은(는) 생각했다. 테이오가 꿈을 이루기만 하면 된다. 고개를 돌려 다시 경기장으로 시선을 옮겼다.`,
      );
      await era.printAndWait(
        '하지만 레이스는 생각처럼 잘 풀리지 않는 모양이었다.',
      );
      await era.printAndWait(
        `한데 뒤엉킨 ${teio.uma_sex_title} 무리의 경쟁은 치열했고, 테이오는 포위를 뚫지 못했다.`,
      );
      await era.printAndWait(`${you.name}의 손바닥에는 어느새 땀이 가득했다.`);
      era.drawLine();
      await era.printAndWait(
        '트레이너 A「——이상, 다음 레이스의 출전자 명단입니다」',
      );
      await era.printAndWait('행인 A「아쉽네…… 또 선발되지 못했어?」');
      await era.printAndWait('팬 A「……아하하, 괜찮아. 어차피 못하니까」');
      await era.printAndWait(
        '팬 A (젠장…… 나도 진지하게, 아침 일찍부터 밤늦게까지 훈련했는데!)',
      );
      await era.printAndWait(`——${you.name}이(가) 팔고 있던 것은 꿈이었다.`);
      era.println();

      await era.printAndWait(
        '팬 B「또 혼났네…… 내 잘못도 아닌데 전부 내 탓이야」',
      );
      await era.printAndWait(
        '팬 B「에라, 모르겠다…… 게임이나 할까. 나도 잘하는 게 있긴 하니까, 헤헤」',
      );
      await era.printAndWait(
        `——${you.name}이(가) 팔고 있던 것은 꿈이었다. 누구나 닿을 듯하면서도 닿지 못하고, 필요하다고 인정하지 않으면서도 마음은 그곳을 향하는 것.`,
      );
      era.println();

      await era.printAndWait('팬 A「……아아」');
      await era.printAndWait('팬 B「아무것도 없네……」');
      await era.printAndWait(
        '——바로 지금이, 사람들에게 꿈이 필요한 순간이었다.',
      );
      era.println();

      await era.printAndWait(
        '팬 A「모르겠다…… 텔레비전이나 보자…… 오늘이 재팬컵이었던가……」',
      );
      await era.printAndWait('팬 B「젠장…… 텔레비전으로 레이스나 봐야겠다」');
      await era.printAndWait(
        '——사람들은 모든 것이 행복하고, 하늘은 성실한 자에게 보답하며, 노력은 결실을 맺고, 신념으로 역경을 극복할 수 있다는 이야기를 듣고 싶어 한다.',
      );
      era.println();

      await era.printAndWait(
        `팬 A「${teio.name}……？${teio.sex}, 정말 출전했어?」`,
      );
      await era.printAndWait(`팬 B「${teio.sex}는……」`);
      await era.printAndWait(
        `——${you.name}은(는) 그런 이야기를 써낼 수 있을까.`,
      );
      era.drawLine();
      await era.printAndWait(`？？？「${you.elder_sibling_sex_title}」`);
      era.println();
      await era.printAndWait(
        `${you.name}이(가) 돌아보자 한 여성이 어디서 본 듯한 여자아이의 손을 잡고 ${you.name}에게 다가오고 있었다.`,
      );
      era.println();
      await era.printAndWait(
        `여자아이「${you.elder_sibling_sex_title}? 기억해?」`,
      );
      era.println();
      await era.printAndWait(
        `${you.name}은(는) 보고서야 기억해 냈다. 그때 ${you.name}와(과) 테이오가 처음 만났을 때 보았던 아이였다. 서로 인사를 나누고, 모녀는 ${you.name}의 옆에 앉아 함께 레이스를 보았다. 여자아이는 잔뜩 들떠 있었다. 처음 온 것일까.`,
      );
      era.println();
      await era.printAndWait(
        `여자아이「${you.elder_sibling_sex_title}, 난 줄곧 테이오 ${teio.adult_sex_title}의 레이스를 보고 싶었어…… 여태 기회가 없었는데, 이번에 드디어 왔어! 반에서 일 등을 했더니 엄마가 상으로 데려와 주셨어. 테이오는 정말 멋져. ${teio.sex}는 꼭 일 등 할 거지!」`,
      );
      era.println();
      await era.printAndWait(
        `${you.name}은(는) ${teio.sex}의 얼굴을 보고 자신도 모르게 웃었다.`,
      );
      era.printButton(`「그래, ${teio.sex}라면 반드시」`, 1);
      await era.input();
      era.drawLine();
      await teio.say_and_wait('최악이야……', true);
      await era.printAndWait(
        `가장 자신 있는 선행이 전혀 먹히지 않았다. ${teio.uma_sex_title} 무리가 길을 막아 돌파는 꿈같은 이야기였다.`,
      );
      await era.printAndWait('정말…… 할 수 있을까.');
      era.println();
      await teio.say_and_wait('할 수 있어!', true);
      era.println();
      await era.printAndWait(
        `달리는 ${teio.uma_sex_title}들이 모였다 흩어졌다. 반 마신 정도의 좁은 틈이 드러났다——`,
      );
      era.println();
      await era.printAndWait(`중계「어, 저건——${teio.name}？！」`);
      era.println();
      await era.printAndWait(
        '종아리 근육이 한번 이완되었다가 수축하며 힘을 뿜었다! 다리를 높이 들고, 솟구치는 먼지와 튀는 흙도 아랑곳하지 않고 힘껏!',
      );
      await era.printAndWait(`${teio.sex}만의 환상적인 보법.`);
      await era.printAndWait(`${teio.sex}만의 스텝.`);
      await era.printAndWait('모든 이에게 그 위용을 보여 주는——테이오 스텝!');
      era.println();
      await era.printAndWait(
        `중계「가능한 일인가요——꿈만 같은 광경입니다! ${teio.name}, 빠져나왔습니다! ${teio.sex}가 선두로——」`,
      );
      era.println();
      await era.printAndWait('찰나에 승부가 결정되었다.');
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_h_s: (() => {
    const title = '기적의 부활(상)';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      era.printButton('「준비됐어?」', 1);
      await era.input();

      await teio.say_and_wait('바라고 있어…… 이 모든 게 정말 내 것이기를.');
      era.println();

      await teio.say_and_wait(
        '여기서 너와 나, 그리고 우리를 지지해 준 모든 사람의 테이오 전설을 쓰고 싶어.',
      );
      era.println();

      await teio.say_and_wait(
        '꿈같은 일이라는 건 알아. 하지만 꿈만 꾸는 게 우리한테 무슨 의미가 있겠어?',
      );
      era.println();
      era.printButton(`「의미 없지, 하하. 그래도 여기까지 왔잖아」`, 1);
      await era.input();

      await teio.say_and_wait('맞아. 이제 곧 전부 손에 넣을 거야.');
      era.println();

      era.printButton(`「좋아, 준비가 다 된 얼굴이네」`, 1);
      await era.input();

      await teio.say_and_wait(
        '지난 일 년 동안 우리는 모든 걸 잃었어. 얼마 남지 않은 희망과 집념만 안고 계속 달려왔지——',
      );
      era.println();

      era.printButton(
        '「그러니 필요한 건 이미 다 있어. 계속 달리는 것 말고 무슨 선택지가 있겠어」',
        1,
      );
      await era.input();

      await era.printAndWait(
        `${teio.teen_sex_title}은(는) 입꼬리를 올리며 고개를 들어 ${you.name}와(과) 눈을 맞췄다——`,
      );
      if (era.get(`relation:3:0`) > 150) {
        await era.printAndWait(
          `${teio.sex}는 두 손을 내밀어 ${you.name}의 펼친 손바닥 위에 올려놓았다. ${you.name}은(는) 담당의 손을 가볍게 잡았다. 따뜻한 감촉이 전해졌고, 손끝으로는 ${teio.teen_sex_title}의 건강하고 탄력 있는 피부와 그 아래에서 조금 빠르게 뛰는 맥박이 느껴졌다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) ${teio.sex}의 사파이어처럼 맑은 눈동자 속에서 ${teio.teen_sex_title}의 끈기와 신념, 바람이 굴절되어 ${you.name}의 눈동자로 전해지는 것을 보았다. ${you.name}도 웃었다. 하지만 눈가가 조금 젖어 들었다.`,
        );
        era.println();

        era.printButton('「가. 네 이름을 하늘에 울려 퍼뜨려」', 1);
        await era.input();

        await teio.say_and_wait('반드시.');
        era.println();

        await era.printAndWait(
          `땅을 딛는 발소리가 작은 방에 울렸다. ${teio.teen_sex_title}은(는) 멋지게 한 바퀴 돌고 손을 흔든 뒤, 확실한 걸음으로 앞으로 나아갔다.`,
        );
      } else {
        await era.printAndWait(
          `두 사람은 약속이라도 한 듯 주로 쓰는 손을 내밀어 주먹을 가볍게 쥐고 맞댔다.`,
        );
        await era.printAndWait(
          `작은 몸 안에 숨은 힘과 태양 같은 온기가 맞닿은 곳을 통해 전해졌다. 서로 마주 보자 두 사람 모두 자신도 모르게 소리 내어 웃었다.`,
        );
        era.println();

        era.printButton('「행운을 빌어」', 1);
        await era.input();

        await teio.say_and_wait('지켜봐. 내가 달리는 모습을.');
        await era.printAndWait(
          `${teio.sex}는 팔을 거두고 깔끔하게 한 바퀴 돌아 햇살 속으로 걸어갔다.`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_h_s: (() => {
    const title = '기적의 부활(하)';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await teio.say_and_wait('괜찮아.');
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title} ${teio.teen_sex_title}은(는) 맹렬한 유성이 되어 체력을 미친 듯이 불태우며 레이스장을 달렸다.`,
      );
      era.println();

      await teio.say_and_wait('이길 수 있어.');
      era.println();

      await era.printAndWait(
        `${you.name}은(는) 전용 관람석에서 일어나 흐릿한 붉은 그림자를 눈으로 좇았다——${you.name}의 담당이 온몸의 근섬유를 쥐어짜며 이 레이스를 완성하려 하고 있었다.`,
      );
      await era.printAndWait(`두 사람의 꿈을 이루기 위해.`);
      era.println();

      await era.printAndWait(
        `푸른 하늘과 흰 구름, 붉은 태양과 맑은 바람. 더없이 좋은 날씨였지만 ${you.name}에게는 그것을 즐길 여유가 없었다. 온 신경이 그 작은 그림자를 향해 있었다.`,
      );
      await era.printAndWait(`${you.name}의 담당, ${teio.name}。`);
      await era.printAndWait(
        `세상이 ${you.name}의 눈에서 멀어졌다가 ${teio.sex}에게 다시 초점이 맞춰졌다. 온갖 소리가 잡음처럼 흐려졌다——잠깐.`,
      );
      era.println();

      await era.printAndWait(`중계「——${teio.name} 선수가——」`);
      era.println();

      await era.printAndWait('뭔가 이상하다.');
      era.println();

      await era.printAndWait(
        `${you.name}은(는) 난간을 붙잡고 몸을 내밀어 필사적으로 외쳤다.`,
      );
      era.println();

      await era.printAndWait(
        `중계「——속도가 떨어집니다! 다리의 옛 부상 때문일까요——」`,
      );
      era.println();

      await teio.say_and_wait('하…… 하……');
      era.println();

      await teio.say_and_wait('몸이…… 말을 안 들어.', true);
      era.println();

      await teio.say_and_wait('수——움——숨이 안 쉬어져.', true);
      era.println();

      await teio.say_and_wait('갈비뼈랑 폐랑 심장이…… 불타고 있어.', true);
      era.println();

      await teio.say_and_wait('팔다리가…… 느껴지지 않아.', true);
      era.println();

      era.printButton('「——테——이——오——」', 1);
      await era.input();

      await teio.say_and_wait('저 사람은 누구지……', true);
      era.println();

      await teio.say_and_wait(
        '목소리도…… 시야도…… 흐릿해…… 아무것도 기억나지 않아. 이대로 쓰러져서……',
        true,
      );
      era.println();

      await era.printAndWait('몸통이 앞으로 기울고 고개가 떨어졌다.');
      era.println();

      await era.printAndWait('아니, 잠깐.');
      await era.printAndWait('이런 결말일 리 없다.');
      era.println();

      await teio.say_and_wait('아니야.', true);
      era.println();

      await teio.say_and_wait('난 뭘——', true);
      era.println();

      era.printButton(`「${teio.name}！！！」`, 1);
      await era.input();

      await teio.say_and_wait('아아……');
      era.println();

      await era.printAndWait(
        `중계「——오오! ${teio.name}이(가) 따라잡았나요?」`,
      );
      era.println();

      await teio.say_and_wait('기억났어.');
      era.println();

      await era.printAndWait(
        `무거운 두 다리, 불타는 폐, 저릿한 팔——고통이 ${teio.name}라는 ${teio.uma_sex_title}의 몸으로 돌아왔다.`,
      );
      await era.printAndWait('하지만 함께 돌아온 것은 투지와 신념이었다.');
      era.println();

      await teio.say_and_wait('기억났어!');
      era.println();

      await era.printAndWait(
        `두 발이 땅에 닿아 마찰을 일으켰다. 땅을 박찬 반동이 이미 고통을 버티기 힘든 몸을 앞으로 밀었다. 몸을 기울여 위치 에너지가 만들어 내는 전방 가속을 최대한 이용한다——`,
      );
      era.println();

      await era.printAndWait(
        `중계「현재 선두는——잠깐, 저건! ${teio.name}이(가) 올라옵니다! ${teio.name}입니다!」`,
      );
      era.println();

      await teio.say_and_wait('숨쉬기 힘들어.', true);
      era.println();

      await teio.say_and_wait('폐가 터져도 상관없어.', true);
      era.println();

      await teio.say_and_wait('다리는 무겁지만 아직 움직여.', true);
      era.println();

      await teio.say_and_wait('난…… 몇 번이고 좌절했어.', true);
      era.println();

      await teio.say_and_wait('그때도…… 그때도.', true);
      era.println();

      await teio.say_and_wait('누구보다 많이 좌절한 건 나야.', true);
      era.println();

      await teio.say_and_wait('누구보다 분한 것도 나야.', true);
      era.println();

      await teio.say_and_wait('누구보다 이기고 싶은 것도 나야.', true);
      era.println();

      await teio.say_and_wait('절대 양보하지 않아.', true);
      era.println();

      await teio.say_and_wait('절대로, 절대로.', true);
      era.println();

      await teio.say_and_wait('반드시 나야!', true);
      era.println();

      await teio.say_and_wait('가자.', true);
      era.println();

      await teio.say_and_wait('가자.', true);
      era.println();

      await teio.say_and_wait('가자, 달려!', true);
      era.println();

      await teio.say_and_wait('승부야!', true);
      era.println();

      await era.printAndWait(
        `중계「${teio.name}입니다! ${teio.name}이(가) 따라붙었습니다! ${teio.sex}와 선두의 격차가 좁혀집니다!」`,
      );
      era.println();

      await era.printAndWait('남은 거리 200미터 이하');
      era.println();

      await era.printAndWait(
        `중계「일 년 만에 레이스장으로 돌아온 ${teio.name}은(는) 따라잡을 수 있을까요? ${teio.sex}가 앞질렀습니다——아니, 다른 ${teio.uma_sex_title}가 ${teio.sex}의 곁에 바짝 붙어 필사적으로 ${teio.name}을(를) 쫓고 있습니다!」`,
      );
      era.println();

      await era.printAndWait(
        `중계「${teio.name}이(가) 온 힘을 다해 추격합니다! 상대도 한 발짝도 물러서지 않습니다——앞으로 한 마신!」`,
      );
      era.println();

      await era.printAndWait(
        `중계「조금만 더, 조금만 더! ${teio.name}이(가) 한 발짝 더 다가가지 못합니다!」`,
      );
      era.println();

      await era.printAndWait(
        '중계「국화상 기록 보유자의 저력! 여기서도 물러서지 않습니다!」',
      );
      era.println();

      await era.printAndWait(
        `중계「하지만——${teio.name}이(가) 다가갑니다! 레이스장에 돌아온 테이오가 점점 격차를 줄입니다!」`,
      );
      era.println();

      await era.printAndWait('100미터\n마지막 접전');
      era.println();

      await era.printAndWait(
        `중계「선두와 나란히 섰나요? ${teio.name}! 신세대의 패자일까요, 한때 몰락했던 왕이 왕좌로 돌아오는 걸까요——」`,
      );
      era.println();

      await era.printAndWait(
        '잔디밭 전체가 떨리는 듯했다. 나카야마 레이스장——이곳 또한 아리마 기념의 승자를 기다리고 있는 것은 아닐까.',
      );
      era.println();

      await teio.say_and_wait('아아아아아아아아아아!');
      era.println();

      await era.printAndWait(`중계「${teio.name}입니다!」`);
      era.println();

      await era.printAndWait(
        `중계「${teio.name}은(는) 넘어섰나요? ${teio.name}이(가) 근소하게 앞섭니다! 더비 ${teio.uma_sex_title}의 기개를 보여 주나요?!」`,
      );
      era.println();

      await era.printAndWait(
        '중계「하지만 격차는 아주 작습니다! 상대도 악착같이 따라붙습니다!」',
      );
      era.println();

      await era.printAndWait('중계「어느 쪽인가요, 어느 쪽인가요?!」');
      era.println();

      await era.printAndWait(`${teio.uma_sex_title}「내가——」`);
      era.println();

      await teio.say_and_wait('——이겼어——');
      era.println();

      await era.printAndWait('한 줄기 붉은 무지개가 결승선을 가르며 지나갔다.');
      era.println();

      await era.printAndWait(
        '경기장 전체가 순간 조용해진 듯하더니, 이내 산을 무너뜨릴 듯한 환호가 터졌다.',
      );
      await era.printAndWait(
        '들끓는 사람들의 함성이 하늘에 울려 퍼졌다. 그 속에서 하나의 이름이 메아리쳤다.',
      );
      era.println();

      await era.printAndWait(`관중「${teio.name}！」`, {
        align: 'center',
        color: get_gradient_color(undefined, teio.color, 1 / 3),
        fontSize: '1.125rem',
      });
      await era.printAndWait(`관중「${teio.name}！！」`, {
        align: 'center',
        color: get_gradient_color(undefined, teio.color, 2 / 3),
        fontSize: '1.25rem',
      });
      await era.printAndWait(`관중「${teio.name}！！！」`, {
        align: 'center',
        color: teio.color,
        fontSize: '1.375rem',
      });
      era.println();

      await era.printAndWait(`중계「${teio.name}——기적의 부활!」`, {
        align: 'center',
        color: teio.color,
        fontSize: '1.5rem',
        fontWeight: 'bold',
      });
    };
    f.title = title;
    return f;
  })(),
  we_143_5_h: (() => {
    const title = '어둠에서 빛으로';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${you.name}은(는) 길을 걸었다. 살짝 땀에 젖은 셔츠가 상체에 달라붙었다.`,
      );
      await era.printAndWait(
        `조금 앞서 걷는 이는 ${you.name}의 담당, 토카이 테이오였다. ${teio.sex}는 ${you.name}의 손을 잡고, ${teio.uma_sex_title}에게는 조금 느리지만 ${you.name}에게는 운동이 될 만한 속도로 걸었다. 맞잡은 손이 이따금 가볍게 흔들렸다. 하늘 끝의 잔광이 이마에 내려앉았다. ${you.name}은(는) 매끈한 대리석 길을 밟으며 앞을 올려다보았다. 옅은 금빛이 ${teio.sex}의 하얀 앞머리를 스쳤다.`,
      );
      await era.printAndWait(
        `계단 앞에서 ${teio.sex}가 발을 멈췄다. ${you.name}도 멈춰 서서 눈앞의 풍경을 바라보았다.`,
      );
      await era.printAndWait(
        '황혼 아래 대지는 지는 해의 마지막 빛을 빌려 천을 두르듯 몸을 감쌌다. 점점이 박힌 금실이 굴곡을 따라 흘렀다. 눈은 더 이상 빛을 반사하지 않았고, 막 고개를 내민 초록빛 새싹들이 탐욕스럽게 에너지를 빨아들였다.',
      );
      await era.printAndWait('봄이 오고 있었다.');
      await era.printAndWait(`두 사람의 꿈도 마침표를 찍었다.`);
      await era.printAndWait('이제 말할 때다……');
      era.println();

      era.printButton('「이 순간을 너무나 오래 기다렸어——우리 둘 다」', 1);
      await era.input();

      await teio.say_and_wait('맞아.');
      era.println();

      await teio.say_and_wait(
        '텐노상(봄) 때 무서웠던 게 기억나——몸의 상처나 병 때문이 아니었어——처음 품었던 꿈이 영원히 물거품이 될지도 모른다는 생각 때문이었지.',
      );
      await teio.say_and_wait(
        '가장 끔찍했던 건…… 그 두려움이 현실이 됐다는 거야.',
      );
      era.println();

      await era.printAndWait(
        `지는 해를 마주한 ${teio.teen_sex_title}은(는) 두 팔을 벌리고 몸을 쭉 펴며 천천히 이야기했다. 빛이 내려앉고, ${teio.sex}의 그림자가 ${you.name}의 얼굴을 덮었다. ${you.name}은(는) 말없이 지난 일들을 떠올렸다. ${teio.sex}가 바닥으로 추락하고, ${teio.sex}가 방황하고, ${teio.sex}가 험한 길을 걸을 때, ${you.name}은(는) 그것을 지켜보면서도 어찌할 수 없었다. 환상에서 빚어낸 희망만을 안고 이를 악문 채 ${teio.sex}와 함께 버텼다.`,
      );
      await era.printAndWait('타협하지 않는다. 포기하지 않는다.');
      era.println();

      await teio.say_and_wait(
        '하지만 나는——우리는 버텨 냈어. 지금 내 곁에는 네가 있고, 불빛이 있고, 사람들이 있고, 꿈이 있어.',
      );
      era.println();

      await teio.say_and_wait('우리가 믿었던 게——이제 진짜가 됐으니까.');
      era.println();

      era.printButton('「테이오」', 1);
      await era.input();

      await teio.say_and_wait('응?');
      era.println();

      era.printButton('「너는…… 믿고 있어?」', 1);
      await era.input();

      await era.printAndWait(
        `${teio.uma_sex_title}는 곧바로 ${you.name}에게 대답하지 않았다. 석양을 향해 고개를 숙였다가 꼬리를 살짝 흔들고 돌아서서 웃었다.`,
      );
      era.println();

      await teio.say_and_wait('언제나. 의심한 적 없어.');
      era.println();

      await era.printAndWait(
        `이어 ${teio.sex}의 마음을 울리는 웃음이 퍼졌다. ${you.name}도 절로 웃었다. 두 사람은 손을 맞잡고 다시 앞으로 걸어갔다.`,
      );
      await era.printAndWait(`두 사람의 이야기는 아직 계속된다.`);
      era.println();
      if (era.get('talent:3:自信程度') === 1) {
        era.print([
          teio.get_colored_name(),
          '은(는) 더 이상 [자신감 부족] 특성을 갖고 있지 않습니다!',
        ]);
      }
      era.print([
        teio.get_colored_name(),
        '의 ',
        {
          color: buff_colors[3],
          content: '[다리 부상]',
        },
        '이(가) 나았습니다!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  async ws_palace_h(teio) {
    await teio.say_and_wait('이건 우리의 거야——두 사람의 기념비——');
  },
  op_rehabilitation: (() => {
    const title = '재활';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `커다란 나무통에 따뜻한 물이 가득 차 있었다. ${you.name}은(는) 담당의 맨발을 잡고 천천히 물에 담갔다.`,
      );
      await era.printAndWait(
        `혈자리를 찾아 누르고 주물렀다. 하얗고 맑은 피부의 다리가 자극을 받아 붉게 달아올랐다. ${you.name}은(는) 고개를 숙인 채 매일의 일과를 수행했다.`,
      );
      await era.printAndWait(
        '의사와 상의해 세운 테이오의 다리 재활 계획을 매일 엄격하게 따랐다. 지금 하는 것은 매일 밤의 마지막 순서였다.',
      );
      await era.printAndWait(
        `겉으로는 멀쩡해 보이는 ${teio.teen_sex_title}의 두 다리를 보니 ${you.name}은(는) 역시 가슴이 아팠다. 안쪽의 상처는 이제 낫기 어려운 것일까.`,
      );
      await era.printAndWait(
        '애초에 자신의 노력에 의미가 있을까. 서로를 달래는 위안에 불과한 것은 아닐까.',
      );
      era.println();

      await era.printAndWait(
        `${you.name}은(는) 의사가 따로 들려주었던, 비슷한 증상을 겪은 ${teio.uma_sex_title}들을 떠올렸다. ${teio.couple_title}은 예외 없이 재기에 실패하고 은퇴를 선택했다. 그렇다면 테이오는……`,
      );
      era.println();

      await teio.say_and_wait('트레이너.');
      era.println();

      await era.printAndWait(
        `평소보다 낮은 목소리가 피어오르는 김 사이를 뚫고 ${you.name}의 귀에 닿았다.`,
      );
      era.println();

      await teio.say_and_wait(
        `나…… 바보 같은 질문인 건 알아. 그래도 ${you.name}의 입으로 듣고 싶어…… 지금 하는 일, 정말 의미가 있을까?`,
      );

      era.printButton('고개를 숙인다(스태미나&근성&지능+15)', 1);
      era.printButton(
        '「우리의 신념은 반드시 보답받을 거야」(스피드&파워+15, 호감도+5, 의욕 상승)',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 고개를 숙였다. 대답하기 싫은 것인지, 대답할 수 없는 것인지 알 수 없는 채로, ',
          teio.uma_sex_title,
          '의 다리만 계속 돌보았다.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  be_dead: (() => {
    const title = '데드 엔드';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} kita 犯人（キタサンブラックの代表色で暫定）
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} k_call_t キタサンブラックがトウカイテイオーを呼ぶ名
     */
    const f = async (teio, kita, you, k_call_t) => {
      await era.printAndWait(
        '🎶You made one mistake, you got burned at the stake🎶',
        { align: 'center', isParagraph: true },
      );
      await era.printAndWait([
        teio.get_colored_name(),
        '은(는) 우산을 접어 걸이에 걸고 모자를 벗었다. ',
        teio.sex,
        '는 옷장 아래칸에서 여행 가방을 꺼내 침대 옆으로 끌고 와 그 위에 다리를 꼬고 앉았다.',
      ]);
      await era.printAndWait(
        '모자를 비스듬히 써서 우마 귀를 가렸다. 파란 눈동자 앞을 연기 같은 먼지가 스쳤다. 창으로 들어온 햇빛이 그 위에 금가루를 뿌렸다.',
      );
      await era.printAndWait([
        '턱을 괴고 ',
        teio.sex,
        '는 ',
        you.get_colored_name(),
        '의 잠든 얼굴을 바라보았다. 햇빛이 ',
        you.get_colored_name(),
        '의 속눈썹 사이를 흘렀다. 시선이 규칙적으로 움직이는 콧방울, 조금 창백한 입술, 단정하게 여민 옷깃을 따라 내려갔다.',
      ]);

      await era.printAndWait(
        "🎶You're finished, you're foolish, you failed🎶",
        {
          align: 'center',
          isParagraph: true,
        },
      );

      era.printButton('「좋은 아침」', 1);
      await era.input();

      await era.printAndWait([
        teio.get_colored_name(),
        '은(는) 앞으로 뛰어들어 다짜고짜 ',
        you.get_colored_name(),
        '의 목을 조르고, 왼쪽 무릎으로 ',
        you.get_colored_name(),
        '의 오른쪽 팔꿈치를 누르고 오른쪽 다리를 가슴에 댔다. 마지막으로 왼손 엄지를 비틀었다.',
      ]);
      await era.printAndWait([
        '허리를 조금 숙인 채 ',
        teio.sex,
        '는 똑바로 ',
        you.get_colored_name(),
        '의 활짝 웃는 얼굴을 바라보았다.',
      ]);
      await you.say_and_wait(
        '음, 사랑스러운 담당이 아침 키스를 받고 싶은 건가——콜록!',
      );
      era.println();

      await era.printAndWait([
        teio.get_colored_name(),
        '이(가) 두 손에 힘을 주자 ',
        you.get_colored_name(),
        '의 얼굴이 함께 경련했다.',
      ]);

      await era.printAndWait(
        "🎵There's always a hope on this slippery slope🎵",
        {
          align: 'center',
          isParagraph: true,
        },
      );

      await you.say_and_wait('아직, 아침, 윽, 안 먹었잖아.');
      era.println();

      await era.printAndWait(
        '치켜올린 입꼬리가 계속 경련했고, 술 냄새가 섞인 침이 흘렀다.',
      );
      await era.printAndWait([
        teio.get_colored_name(),
        '은(는) 눈을 가늘게 뜨며 오른쪽 무릎을 아래로 눌렀다. ',
        you.get_colored_name(),
        '의 두 손이 거세게 떨렸고, 왼손이 연거푸 ',
        teio.sex,
        '의 손등을 두드렸다.',
      ]);
      await era.printAndWait([
        '잠시 두드리고 나자 입꼬리가 내려가기 시작했고, 핏줄이 ',
        you.get_colored_name(),
        '의 눈을 둘러쌌다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 두 눈을 감고 신음하며 떨리는 검지로 ',
        teio.get_colored_name(),
        '의 손등에 천천히 S를 썼다.',
      ]);
      await era.printAndWait([
        teio.get_colored_name(),
        '은(는) 고개를 갸웃했다. 손등에 O가 반쯤 그려졌을 때, ',
        teio.sex,
        '는 목을 조르던 손을 풀었다. ',
        you.get_colored_name(),
        '은(는) 기침을 쏟아냈고 두 손에서도 힘이 빠졌다.',
      ]);
      await you.say_and_wait(
        '콜록, 콜록콜록, 정말이지, 아침은, 윽, 거르면 안 돼.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 기침할 때마다 가슴에 시큰한 통증이 일었다.',
      ]);

      await era.printAndWait('🎵Somewhere a ghost of a chance🎵', {
        align: 'center',
        isParagraph: true,
      });

      await teio.say_and_wait('흐흥, 열한 시 가까이 잔 모양이네.');
      era.println();
      await you.say_and_wait(
        '미안해! 진심으로 미안해. 네가 없는 동안 몰래 담배 피우고 술 마신 건 잘못했어.',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 말을 마치자 작은 두 손이 다시 목에 달라붙었다. ',
        you.get_colored_name(),
        '은(는) 두 다리를 떨며 눈을 크게 떴다.',
      ]);
      era.println();
      await you.say_and_wait(
        '알았어, 알았어. 퉤, 그만, 그만해! 이제 그만! 진짜 그만해! 후우, 알았다고.',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 깊이 숨을 들이쉬고 ',
        teio.get_colored_name(),
        '의 파란 눈동자를 똑바로 보며 말했다.',
      ]);
      era.println();

      era.printButton('「잘못했어. 후회하고 있어!」', 1);
      await era.input();

      await era.printAndWait(
        '🎵To get back in that game and burn off your shame🎵',
        {
          align: 'center',
          isParagraph: true,
        },
      );

      await era.printAndWait([
        teio.get_colored_name(),
        '은(는) 아래에 있는 ',
        you.get_colored_name(),
        '의 얼굴을 바라보다 천천히 손을 거두고 두 무릎을 ',
        you.get_colored_name(),
        '의 몸에서 뗐다. 엄지가 아직 비틀린 채인 것을 보고 ',
        you.get_colored_name(),
        '은(는) 눈썹을 치켜올리며 말했다.',
      ]);
      era.println();
      await you.say_and_wait('한 손이 잡힌 채로는 아침을 만들 수 없잖아?');
      era.println();
      await era.printAndWait([
        teio.get_colored_name(),
        '은(는) 손을 놓고 머리 위의 모자를 붙잡으며 가볍게 뒤로 뛰어 침대에서 내려왔다.',
      ]);
      era.println();
      await teio.say_and_wait('배 안 고파.');
      era.println();
      await era.printAndWait([
        teio.sex,
        '는 창가로 걸어가 고개를 기울인 채 짙은 색 커튼에 몸을 기댔다. ',
        you.get_colored_name(),
        '은(는) 팔꿈치를 문지르며 일어나 입술을 꾹 다물었다가 말했다.',
      ]);
      era.println();
      await you.say_and_wait('배 안 고픈데 그건 왜 들고 있어?');
      era.println();
      await era.printAndWait([
        teio.get_colored_name(),
        '이(가) 돌아보자 ',
        you.get_colored_name(),
        '의 오른손에 포장된 작은 빵이 들려 있었다. ',
        teio.sex,
        '는 입매를 굳히고 한 걸음 앞으로 나왔다. ',
        you.get_colored_name(),
        '은(는) 황급히 손을 내저었다.',
      ]);
      era.println();
      await you.say_and_wait(
        '진정해, 내 착한 담당아. 다음에는 따뜻할 때 먹어. 그리고 같이 밥 먹고 싶은 것뿐이라면…… 아침에 어떻게 깨우면 되는지 알잖아.',
      );
      era.println();
      await era.printAndWait([
        teio.get_colored_name(),
        '은(는) 주머니를 만지며 얼굴을 붉히더니 ',
        you.get_colored_name(),
        '의 엉덩이를 살짝 걷어찼다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 엉덩이를 문지르며 옷장을 열고, 잠옷 단추를 풀어 수수한 체크무늬 셔츠로 갈아입었다.',
      ]);
      await era.printAndWait([
        teio.sex,
        '는 ',
        you.get_colored_name(),
        '이(가) 옷을 다 갈아입는 것을 지켜본 뒤, ',
        you.get_colored_name(),
        '와(과) 함께 방을 나섰다.',
      ]);

      await era.printAndWait('🎶And dance with the big boys again🎶', {
        align: 'center',
        isParagraph: true,
      });

      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 한 손으로 식탁보를 깔고 다른 손으로 스크램블드에그와 소시지를 담은 접시를 놓았다. 자신의 식기를 정돈하고 무릎 위에 냅킨을 펼쳤다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 갓 짠 오렌지 주스를 한 모금 마시며 ',
        teio.get_colored_name(),
        '이(가) 음식을 씹는 소리를 들으며 식사했다. 그러고는 ',
        you.get_colored_name(),
        '은(는) 계란을 잘라 포크에 찍어 ',
        teio.get_colored_name(),
        '의 입 앞으로 가져갔다.',
      ]);
      era.println();
      await you.say_and_wait('간이 맞는지 한번 먹어 봐.');
      era.println();
      await era.printAndWait([
        teio.get_colored_name(),
        '은(는) 한입에 받아 먹고 씹으면서 고기 한 조각을 포크에 찍어 ',
        you.get_colored_name(),
        ' 앞으로 내밀었다. ',
        you.get_colored_name(),
        '은(는) 몸을 숙여 포크를 물고 고기를 입안으로 가져갔다.',
      ]);
      era.println();

      era.printButton('「으음, 많이 먹어. 건강에도 성장에도 좋으니까」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        '의 식탁 아래 발끝을 ',
        teio.uma_sex_title,
        '가 가볍게 밟았다.',
      ]);

      await era.printAndWait("🎶It's a strange, strange game🎶", {
        align: 'center',
        isParagraph: true,
      });

      await era.printAndWait([
        '만나서 서로 의지하며 지금에 이르기까지 얼마나 지났을까. 삼 년, 오 년쯤 되었을지도 모른다. 하지만 둘 다 그런 것은 신경 쓰지 않는 듯했다.',
      ]);
      era.println();
      await era.printAndWait([
        '어쨌든 트레센도 레이스도, 과거의 모든 것은 이미 끝났다.',
      ]);
      era.println();
      await era.printAndWait([
        '두 사람은 생활 속에서 일부러 그런 화제를 피했다——다만 ',
        teio.sex,
        '가 ',
        you.get_colored_name(),
        '을(를) 부르는 호칭은 진작에 ',
        you.get_colored_actual_name(),
        '(으)로 바뀌었는데도, ',
        you.get_colored_name(),
        '은(는) 무의식중에 ',
        teio.sex,
        '를 자신의 담당이라고 불렀고, ',
        teio.sex,
        '도 거기에 별다른 이견은 없는 듯했다.',
      ]);
      era.println();
      await era.printAndWait([
        teio.sex,
        '가 다리를 다친 뒤 두 사람은 나름 노력했지만, 그래도 ',
        teio.sex,
        '의 ',
        teio.uma_sex_title,
        '로서의 삶을 구하지는 못했다. 복귀 후 패배를 거듭하다 허무하게 은퇴했다.',
      ]);
      await era.printAndWait(
        '꽃도 박수도 없이, 최대한 조용히 그 세계에서 물러났다.',
      );
      await era.printAndWait([
        teio.sex,
        '를 보살피기 위해서였는지, 아니면 그저 떠나보내기 싫어서였는지, ',
        you.get_colored_name(),
        '도 퇴직을 신청했다. 트레센의 도움으로 ',
        teio.sex,
        '와 함께 조용한 마을에 두 사람의 새 보금자리를 마련했다.',
      ]);

      await era.printAndWait('🎶Such a shame, shame, shame🎶', {
        align: 'center',
        isParagraph: true,
      });

      await teio.say_and_wait('음…… 아까 안 사 온 게 있네.');
      era.println();
      await era.printAndWait([
        '늦은 아침 식사를 마치고 ',
        you.get_colored_name(),
        '와(과) ',
        teio.sex,
        '는 부엌에서 설거지를 했다. ',
        teio.sex,
        '는 정리를 마치고 발돋움해 냉장고를 열다가 문득 그렇게 말했다.',
      ]);
      era.println();
      await you.say_and_wait('어? 그럼 나중에 같이 다시 갈까?');
      era.println();
      await teio.say_and_wait('음——');
      era.println();
      await era.printAndWait([
        '갑자기 집 안의 다른 방에서 소리가 났다. 두 사람은 눈을 마주쳤고, ',
        teio.sex,
        '는 문밖으로 사라졌다. 일 분도 지나지 않아 다시 ',
        you.get_colored_name(),
        ' 앞으로 돌아왔다.',
      ]);
      era.println();
      await teio.say_and_wait(
        '창고 천장에 물이 새는 것 같아. 일부가 떨어져 있었어.',
      );
      era.println();

      era.printButton('「나중에 고칠게. 넌 장 보러 다녀와」', 1);
      await era.input();

      await era.printAndWait([
        teio.sex,
        '는 잠시 망설이며 ',
        you.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      era.println();

      era.printButton(
        '「괜찮아. 나한테 맡겨. 키가 닿지 않으면 위쪽 일은 돕기 어렵잖아. 혼자서도 충분해. 나눠서 하면 딱 맞게 끝날 거야」',
        1,
      );
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        '의 전 담당은 한참 생각하다가 결국 고개를 끄덕이며 ',
        you.get_colored_name(),
        '의 의견에 동의했다.',
      ]);
      await era.printAndWait([
        teio.sex,
        '가 현관 앞에 서자 ',
        you.get_colored_name(),
        '은(는) 마지막으로 다시 한번 ',
        teio.sex,
        '의 옷매무새를 고치고 꼬리와 귀를 숨겨 주었다. 만족스럽게 손을 털고 가볍게 입을 맞춘 뒤, 인사를 건네며 문을 열었다.',
      ]);
      await era.printAndWait([teio.sex, '는 바깥세상으로 걸어 나갔다.']);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 문을 닫고 창을 통해 ',
        teio.sex,
        '의 모습이 멀어지는 것을 지켜보았다. 한숨을 내쉬고 커튼을 친 뒤 돌아서서 일을 시작했다.',
      ]);

      await era.printAndWait('🎶You got to carry the blame🎶', {
        align: 'center',
        isParagraph: true,
      });

      await era.printAndWait([
        '잠시 뒤, 초인종 소리가 ',
        you.get_colored_name(),
        '의 망치와 못, 나무판에 쏠려 있던 주의를 끊었다.',
      ]);
      await era.printAndWait([
        '처음에 ',
        you.get_colored_name(),
        '은(는) 무시했지만, 밖에 있는 사람은 끈질겼다. 끊이지 않는 소리는 ',
        you.get_colored_name(),
        '에게 인내심 훈련이나 다름없었다. 결국 ',
        you.get_colored_name(),
        '은(는) 견디지 못하고 문 앞으로 가서 밖을 내다보는 구멍으로——',
      ]);
      await era.printAndWait('한 쌍의 우마 귀를 보았다.');
      await era.printAndWait('갈색의 작은 삼각형 우마 귀였다.');

      await era.printAndWait('🎶In this strange game🎶', {
        align: 'center',
        isParagraph: true,
      });

      await you.say_and_wait(
        ['변장이 들켰나? ', teio.sex, '가 급하게 돌아왔나?'],
        true,
      );
      await era.printAndWait([
        '다급해진 ',
        you.get_colored_name(),
        '은(는) 문을 열었다. 그 직후 밀려온 것은——가슴의 격통이었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 고개를 숙이고서야 날카로운 칼이 갈비뼈 사이를 비집고 들어와 자신의 심장을 찔렀다는 것을 알아차렸다.',
      ]);
      era.println();

      await you.say_and_wait('윽……');

      await era.printAndWait(
        "🎶You're out on a limb and you're trying to gеt in🎶",
        {
          align: 'center',
          isParagraph: true,
        },
      );

      await era.printAndWait([
        '선홍빛 피가 뿜어져 나와 ',
        you.get_colored_name(),
        '의 생명력과 함께 몸 밖으로 흘러나갔다. ',
        you.get_colored_name(),
        '은(는) 느릿하게 눈을 깜빡이며 범인——어디선가 본 듯한 ',
        teio.uma_sex_title,
        '——을(를) 눈에 담았다.',
      ]);
      era.println();
      await kita.say_as_unknown_and_wait([
        '네가…… ',
        k_call_t,
        '의 인생을 망쳤어.',
      ]);
      await kita.say_as_unknown_and_wait([
        '자기 욕심 때문에 ',
        teio.sex,
        '의 다리 상태를 모른 척하고, 약해진 틈을 타서 ',
        teio.sex,
        '의 유일한 버팀목인 척하다니…… 이게 네 말로야!',
      ]);
      await kita.say_as_unknown_and_wait([
        '하지만 ',
        k_call_t,
        '은(는)…… 이미 네게 완전히 눈이 가려져서 아무것도 할 수 없어. 이 팬이 아이돌을 해방시켜 주는 수밖에! 이 기회를 계속 기다려 왔어!',
      ]);

      await era.printAndWait("🎶It's a strange game🎶", {
        align: 'center',
        isParagraph: true,
      });

      await era.printAndWait([
        '아아, ',
        kita.sex,
        '는 의분에 차 무언가 말하는 듯했다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '에게는 더 이상 그 말을 이해할 수단이 없었다.',
      ]);
      await you.say_and_wait(
        '아쉽네…… 술도 담배도 끊지 못한 채, 테이오를 기쁘게 해 주지 못했어.',
        true,
      );
      await era.printAndWait([
        '마지막 의식과 함께 ',
        you.get_colored_name(),
        '은(는) 깊은 어둠으로 떨어져 영원히 눈을 감았다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  async be_dead_end() {
    await era.printAndWait('Do you want to play this a strange game again?', {
      align: 'center',
      isParagraph: true,
    });
  },
  be_normal: (() => {
    const title = '허무한 끝';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait([
        teio.get_colored_name(),
        '와(과) 계약을 해지한 뒤, 세간의 시선을 피해 조용히 지내고 싶었던 ',
        you.get_colored_name(),
        '은(는) 트레센을 떠나 다른 곳에서 다시 트레이너 일을 시작했다. 하지만 어찌 된 일인지 ',
        you.get_colored_name(),
        '이(가) 지도하는 ',
        teio.uma_sex_title,
        '는 다시는 뛰어난 성적을 내지 못했다. ',
        you.get_colored_name(),
        '의 상태와 능력도 ',
        teio.get_colored_name(),
        '와(과) 함께하던 시절의 수준으로 돌아오지 않았다…… ',
        you.get_colored_name(),
        '의 길은 이렇게 허무하게 막다른 곳에 이르렀고, ',
        you.get_colored_name(),
        '와(과) ',
        teio.get_colored_name(),
        '이(가) 한때 꾸었던 꿈도 끝내 이루어지지 않았다.',
      ]);
      await era.printAndWait([
        '가슴 한구석이 비어 버린 듯한 ',
        you.get_colored_name(),
        '은(는) 변함없는 나날을 반복했다. 일은 점차 짐이 되어 갔고, ',
        you.get_colored_name(),
        '은(는) 담배와 술을 기운을 북돋고 마음을 달래는 약으로 삼기 시작했다. 자신도 모르는 사이 ',
        you.get_colored_name(),
        '은(는) 처음 품었던 이상을 잊고 의욕을 잃은 채, 무기력하게 ',
        you.get_colored_name(),
        '의 남은 경력을 마무리했다……',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
