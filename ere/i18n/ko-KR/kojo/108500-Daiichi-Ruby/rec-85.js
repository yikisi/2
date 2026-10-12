/**
 * @file ダイイチルビー - 募集
 * @author 梦露
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} you
   */
  async rec_start(ruby, you) {
    const ret = [];
    era.print('오늘의 훈련장은 평소보다 훨씬 북적거린다. 응원, 환호, 감탄……');
    await era.printAndWait(
      `이토록 풍부하고 감정이 가득 찬 목소리는, 오직 경기장 위의 ${ruby.sex}를 위해 자아내진 것이다. 경기장 전체의 시선이 그 한 사람에게 집중된 듯했다.`,
    );
    era.println();

    era.print('신입 트레이너A 「이봐, 이쪽이야!」');
    era.print('신입 트레이너A 「이미 시작했다고!」');
    era.printButton('「지금 갈게!」', 1);
    await era.input();

    await era.printAndWait(
      '신입 트레이너 동료: 「선배가 자세히 봐두는 게 좋다고 했던 우마무스메가…… 봐, 바로 저 아이야.」',
    );
    era.println();

    await era.printAndWait(
      `친구의 시선을 따라, ${you.name}은(는) 알아차렸다——`,
    );
    era.printButton('（꽤 뒤쪽에서 달리고 있네……）', 1);
    era.printButton('（하얀 타이즈에 짧은 부르마……）', 2);
    ret.push((ret['hentai1'] = await era.input()));
    if (ret['hentai1'] === 2) {
      era.println();
      era.print(
        '위쪽 머리는 무사하지만, 아래쪽 머리는 벌써 불을 뿜고 있다. 정말이지.',
      );
      era.print(
        `${you.name}은(는) 자신이 완전히 발기한 것을 확인한 후, 가슴에 불길한 예감이 떠올랐다. 설마, 나 로리콘인가?`,
      );
      era.print(
        `${you.name}은(는) 장소에 서 있는 갈색 머리의 우마무메를 보았다. 단련된 감식안이 소녀의 키가 고작 140cm 정도라는 것을 한눈에 꿰뚫어 본다.`,
      );
      era.print(
        `순식간에, ${you.name}의 시선은 교차하는 양다리 사이에 멈췄다.`,
      );
      era.print(
        `붉은 스포츠 쇼츠 아래, 하얀 타이즈가 소녀의 비부를 가리고 있다. 하지만 ${you.name}의 눈에는 통통하고 옅은 눈 같은 갈라진 틈이 벌써 드러나 있었다. 두부보다 매끄러워 보여서 한 입 물고 싶어진다.`,
      );
      era.print(
        `희미하게, 쇼츠 중앙에 음부가 그리는 유혹 같은 가는 선이 보인다……`,
      );
      await era.printAndWait(
        '하얀 타이즈의 허벅지는 밝은 빛 아래에서 귀여운 핑크색을 비추고, 둥글고 작은 엉덩이가 흔들릴 때마다 이질적인 아름다움이 있었다.',
      );
    }
    era.println();

    await era.printAndWait('신입 트레이너 A 「어이 어이, 넋 놓고 보지 마라.」');
    era.println();

    await era.printAndWait(
      `${you.name}은(는) 황급히 고개를 돌렸다. 시선의 잔상은 그럼에도 소녀의 복숭아빛을 비추는 하얀 정강이를 스쳤다.`,
    );
    era.println();

    era.print(
      '신입 트레이너A 「앞이 저렇게 꽉 막혀 있으니, 거리를 좁히기는 힘들겠지.」',
    );
    era.printButton('「그러게.」', 1);
    era.printButton('「아니, 대외곽으로 돌면……」', 2);
    await era.input();

    era.print('신입 트레이너A 「에? 거짓말이지!」');
    await era.printAndWait(
      `베테랑 트레이너A 「정말 대단한 뒷심이군, 저게 바로 그…… 화려한 일족의, ${ruby.name}。」`,
    );
    era.println();

    era.print(
      '화려한 일족. 정계와 재계, 그리고 우마무스메의 레이스 세계에 이르기까지 모든 곳에서 명성을 떨친 혈족으로, 정통 후계자들이 지금 이 순간에도 도처에서 빛을 발하고 있다.',
    );
    await era.printAndWait(
      '이 나라에서 그 이름을 들어보지 못한 사람은 존재하지 않을 것이다.',
    );
    era.println();

    await era.printAndWait(
      `이미 데뷔한 선배들은 안중에도 없다는 듯, ${ruby.name}는 그 누구보다 빠른 속도로 결승선을 통과했다.`,
    );
    era.println();

    era.print(
      `신입 트레이너A 「엄청나!——…… 저게 소문으로만 듣던 화려한 일족, ${ruby.name}구나. 보아하니 이미 완전히 본격화에 접어들었네.」`,
    );
    era.printButton('（그럼 키는 이제 더 안 크는 건가?）', 1);
    await era.input();

    await era.printAndWait(
      `과연 어떤 트레이너가 그녀의 곁을 지키게 될까? 지금 ${ruby.name}의 주변에는 그녀를 스카우트하고 싶어 안달이 난 수많은 트레이너들이 모여들고 있었다.`,
    );
    era.println();

    era.print(`${you.name}은(는)——`);
    era.printButton('그만한 자신은 없다. (영입을 포기한다)', 1);
    era.printButton(
      '（저런 질주를 보고서, 어떻게 제자리에 멈춰 서 있겠어!）',
      2,
    );
    era.printButton('（흰 타이츠를 입은 로리, 향기가 좋네……）', 3);
    ret.push((ret['hentai2'] = await era.input()));
    if (ret['hentai2'] > 1) {
      era.println();

      await ruby.say_and_wait(
        '트레이너 여러분, 오늘 저는 이 자리를 빌려 여러분께 한 가지 전해드릴 말씀이 있습니다.',
      );
      era.println();

      era.print(
        `${you.name}은(는) 집사에게서 ${ruby.name}의 전속 트레이너를 결정하는 【선발 테스트】의 상세 자료를 전달받았다.`,
      );
      era.print(
        '【선발 시험】의 기한은 삼십 일. 각 시험을 평가하여 종합 점수로 합격 여부를 결정한다.',
      );
      await era.printAndWait(
        '동점자가 발생할 경우 새로운 테스트 항목이 추가된다고 집사가 덧붙였다.',
      );
      era.println();

      await era.printAndWait(
        `${you.name}은(는) 자료를 살펴봤다. 사교댄스, 테이블 매너…… 그 밖에도 다양한 항목이 있었다. 보통 사람이 삼십 일 안에 익힐 수 있는 내용이 아니라는 것만은 분명했다.`,
      );
      era.println();

      await ruby.say_and_wait(
        '질문이 없으시다면, 이것으로 마치겠습니다. 귀중한 시간을 내어주셔서 대단히 감사합니다.',
      );
      era.println();

      era.print(
        `말을 마친 뒤 사람들을 둘러보던 ${ruby.name}의 시선이 ${you.name}과(와) 마주쳤다.`,
      );
      await era.printAndWait(
        '상냥한 표정은 온데간데없이 사라지고, 선홍빛 눈동자에는 유열과 경멸이라는 두 가지 상반된 감정이 어려 있었다.',
      );
      era.println();

      era.print(
        '학원에서 가장 가까운 외부 도장이 첫 시험장이다. 시험 내용은 트레이너 업무와 무관하지만, 선배 트레이너들은 이미 옷을 갈아입고 출발하고 있다. 참가할까?',
      );
      era.printButton('(그만두자.) (영입을 포기한다)', 1);
      era.printButton('(……오히려 좋은 기회일지도 모르겠다.)', 2);
      ret.push((ret['select'] = await era.input()));
      if (ret['select'] === 2) {
        era.println();
        await era.printAndWait(
          '선발 시험을 통과한 자신의 모습을 상상하며 도장으로 향하기로 했다.',
        );
      }
    }
    return ret;
  },
  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} you
   */
  async rec_out1(ruby, you) {
    era.print('학원을 떠나 가장 가까운 도장으로 향했다……');
    ruby.say('하아아앗!');
    era.print(
      `${ruby.name}의 동작은 흐르는 물처럼 거침이 없었고, 문외한인 당신이 보기에도 ${ruby.name}가 어릴 때부터 호신술을 연마해 왔음을 한눈에 알 수 있었다.`,
    );
    era.print(
      '【호신술 훈련을 받고, 모든 초식을 익힐 것.】 과연 빈말이 아니었다.',
    );
    era.printButton('（잠깐 잠깐, 나보고 방금 저걸 하라고??）', 1);
    await era.input();

    await era.printAndWait(
      '당신의 의문이 피어오름과 동시에, 이미 수많은 참가자들이 자신감을 잃고 나가떨어졌다.',
    );
    era.println();

    await era.printAndWait(
      '집사 「이 정도 일로 겁을 먹는다면 앞으로 나아갈 수 없습니다. 수많은 단련을 거쳐 생겨난 자신감이야말로 가장 눈부신 품격으로 승화하는 법입니다.」',
    );
    era.println();

    await era.printAndWait(
      `집사 「여러분들이 앞으로 헌신해야 할 대상은 화려한 일족의 아가씨——${ruby.name}님이십니다. 부디 각오와 자각을 가지시기 바랍니다.」`,
    );
    era.println();

    await ruby.say_and_wait(
      '이야기는 여기까지입니다. 최종 판단은 제가 맡겠습니다. 여러분은 선발 테스트에 전념해 주십시오.',
    );
    era.println();

    era.print('개인 지도를 해줄 만한 사람을 찾고 싶은데...어떻게 할까?');
    era.printButton('역시 관두자, 혼자서 해보자.', 1);
    era.printButton('찾아보자!', 2);
    if ((await era.input()) === 2) {
      era.println();
      era.print('그렇다면 누구를 찾을 것인가?');
      era.printButton(
        '대학 기말고사 전의 날들이 떠올랐다. 정답은 이미 뻔하지!',
        1,
      );
      await era.input();
      await you.say_and_wait(
        '——너로 정했다, 흰색 스타킹을 신은 뚱한 표정의 아가씨.',
        true,
      );
      era.get('cflag:85:招募状态').special++;
    }
  },
  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} you
   */
  async rec_out2(ruby, you) {
    era.print('다음 테스트의 시험장은 레스토랑이다.');
    era.print(
      `${you.name}은(는) 트레이닝실에서 나와 현장에 도착했다가 얼굴이 굳어졌다. 보이는 광경은——`,
    );
    era.print('——어느 한 곳을 제외하고는 자리가 거의 꽉 차 있었다.');
    era.print(
      `주변 사람들의 흥미진진한 시선 속에서, ${you.name}은(는) 어쩔 수 없이 ${ruby.name}의 바로 옆자리에 앉았다.`,
    );
    era.print(
      '검은색 예복의 치맛자락이 가장 아름다운 풍경을 가리고 있었지만, 의자의 등받이가 테이블보다 조금 더 높았다.',
    );
    era.print(
      `${you.name}의 눈에는 균형 잡힌 흰 다리가 살짝 기울어진 채 곧고 우아한 사선을 그리고 있었다.`,
    );
    era.print('완전히 긴장을 풀었을 때, 「낯선 냄새」가 코를 찔렀다.');
    era.print(
      '그것은 한 번 들이마시면 뇌수가 녹아내리고 심신이 느슨해지는 달콤한 독약 같았다.',
    );
    era.print('신입 트레이너B 「이봐, 왜 그래? 표정이 좀 이상한데.」');
    era.print('신입 트레이너C 「어디 몸이라도 안 좋은 거야?」');
    era.print(
      '당신의 이상한 기색과 잔뜩 찌푸려진 미간을 눈치챈 주변의 트레이너들이 나이프와 포크를 내려놓으며 걱정스럽게 물었다.',
    );
    era.print(
      `${ruby.name}는 주변의 반응에는 아랑곳하지 않고 손에 쥔 나이프로 요리를 썰었다. 식기는 단 한 번도 부딪히는 소리를 내지 않았고, 당신의 눈에는 마치 한 편의 세련된 무성 영화처럼 보였다. 와인 잔을 들어 올릴 때조차 손가락 끝 하나하나가 너무나 섬세하여, 평범한 물조차 최고급 와인처럼 느껴지게 만들었다……`,
    );
    era.printButton('（정말 대단하네……）', 1);
    era.printButton('（잡고 있는 게 내 막대기라면 좋겠는데……）', 2);
    if ((await era.input()) === 2) {
      era.get('cflag:85:招募状态').special++;
    }
    era.println();

    era.print(`식사, 아니 테스트가 끝나고 ${ruby.name}가 자리에서 일어났다.`);
    era.print(
      `${ruby.sex}는 오늘 상의로 정교한 꽃 자수가 놓인 짙은 푸른색의 긴 소매 저고리를 입고 있었다.`,
    );
    era.print(
      '하의는 종아리까지 내려오는 검은색 치마였고, 아담하고 정갈한 흰색 스타킹을 신은 발에는 부드러운 가죽 구두가 신겨 있었다.',
    );
    era.print('화려한 갈색 장발은 붉은 나비 매듭으로 머리 뒤쪽에 묶여 있었다.');
    era.print(
      '동양인의 장점을 빠짐없이 드러내는 섬세한 이목구비에, 귀족다운 분홍빛 눈동자까지.',
    );
    era.print(
      '그저 그곳에 가만히 서 있는 것만으로도, 마치 그림 속에서 걸어 나온 경국지색의 미인 같았다.',
    );
    era.print(
      `푸른 상의와 검은 치마의 의복은 원단이 매우 훌륭하여, 옷을 잘 모르는 ${you.name}이(가) 보아도 한눈에 비싼 것임을 알아챌 수 있었다.`,
    );
    era.print(
      `넋을 잃고 바라보는 ${you.name}을(를) 보며, ${ruby.name}가 마음속으로 무슨 생각을 하고 있는지는 알 수 없었다.`,
    );
    era.print(
      `${ruby.sex}는 치맛자락을 살짝 치켜올리며 작별 인사를 건넸다. 당당하고 고상하게, 아름답기 그지없는 작은 얼굴을 치켜들고 아무런 소리도 내지 않은 채 ${you.name}을(를) 향해 살짝 미소 지었다.`,
    );
    await era.printAndWait('이를 드러내지 않는 미소였지만, 한없이 달콤했다.');
  },
  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} you
   */
  async rec_out3(ruby, you) {
    const ret = [];
    await era.printAndWait(
      '그 후 며칠 동안, 당신은 온갖 교양과 지식을 연달아 배웠고, 그러고는 다시 돌아가 호신술을 복습했다. 그 결과——',
    );
    era.println();

    era.print('베테랑 트레이너A 「포기야! 이제—— 더는 무리라고!」');
    await era.printAndWait(
      '신입 트레이너A 「나도 포기할래. 애초에 트레이너가 정말 이런 것까지 배울 필요가 있는 거야?」',
    );
    era.println();

    era.print(
      '테스트가 진행됨에 따라, 자진해서 포기하는 사람의 수가 테스트에서 탈락하는 사람의 수를 넘어섰다.',
    );
    era.printButton('나도 포기한다. (영입을 포기한다)', 1);
    era.printButton('필요가 있으니까 우리에게 시키는 거겠지.', 2);
    ret.push((ret['select'] = await era.input()));
    if (ret['select'] === 2) {
      ruby.say('내일 있을 사교댄스 시험에, 여러분은 참가하실 건가요?');
      era.print(
        '「사교댄스」라는 단어를 듣자마자, 곁에 남아있던 마지막 동료들마저 하나둘씩 떠나갔다.',
      );
      era.print(
        `${ruby.name}는 그들의 대화 내용에는 전혀 신경 쓰지 않는 듯했다. 담담하게 공지를 마친 뒤, 당신에게 시선을 돌렸다. 그 눈빛에는 약간의 의외라는 감정이 섞여 있었다.`,
      );
      era.print(
        `${ruby.name}에게서는 그날 레이스장에서 느꼈던 열정을 찾을 수 없었다.`,
      );
      era.print(
        '애초에 트레이너 선발 테스트에 참가한 것 자체가 「혹시나」 하는 막연한 기대감 때문이었다.',
      );
      era.print(
        `안타깝게도 현실은 ${you.name}에게 자신과 ${ruby.name} 사이에 놓인 심연이 얼마나 멀고 극복하기 힘든 것인지를 깨닫게 해 주었다.`,
      );
      era.print(
        `${ruby.sex}는 가파른 절벽 위에 피어난, 그 누구도 손을 뻗어 닿을 수 없는 고고한 절벽 위의 꽃이었다.`,
      );
      era.printButton('(나는 어울리지 않아. 그만두자.) (영입을 포기한다)', 1);
      era.printButton(
        '（ ……하지만, 그 뛰어난 질주와 그 뒷모습은 아마 평생 잊지 못할 거야. ）',
        2,
      );
      ret.push((ret['select'] = await era.input()));
      if (ret['select'] === 2) {
        ruby.say(
          '……이곳에 남아 계신다는 건, 다음 테스트에 참가하겠다는 뜻으로 받아들여도 되겠습니까?',
        );
        era.print(
          `아름다운 진홍빛 눈동자가 ${you.name}을(를) 똑바로 응시했다.`,
        );
        era.printButton('「네!!!」', 1);
        await era.input();

        ruby.say('으음———!');
        await ruby.say_and_wait('후우…………');

        ruby.say('알겠습니다.');
        era.print(
          `${ruby.child_sex_title}의 뺨에 왜 옅은 홍조가 번졌는지는 당신으로서는 알 길이 없었다.`,
        );
        ruby.say('시험에 쓰일 곡목 등을 꼭 확인하시길…… 그럼 안녕히 주무세요.');
        era.print(`${ruby.name}가 당신에게 인사를 건넸다.`);
        era.printButton('체육관으로 달려간다', 1);
        await era.input();
      }
    }
    return ret;
  },
  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} you
   */
  async rec_out4(ruby, you) {
    era.print(
      `${you.name}은(는) 혼자서 내일 시험 볼 사교댄스를 묵묵히 반복해서 연습했다. 하지만……`,
    );
    era.printButton('（ 너무 어려워! ）', 1);
    await era.input();

    era.print(
      '당연한 결과다. 아무리 생각해도 하루아침에 배울 수 있는 게 아니다.',
    );
    era.printButton('（ 할 수 있는 만큼만이라도 하는 수밖에 없겠어. ）', 1);
    await era.input();

    era.print('탁, 탁, 탁……');
    ruby.say('아직도 연습하고 계신가요?');
    await ruby.say_and_wait(
      '다른 분들은 이미 모두 돌아가셨으니, 당신도 슬슬 휴식을 취하시는 게 좋습니다.',
    );
    era.println();

    era.print('사교댄스 테스트가 바로 내일인데, 지금 체면을 차릴 때가 아니다.');
    era.print(`${you.name}은(는) 밑져야 본전이라는 심정으로——`);
    era.printButton('「사교댄스를 지도해 주실 수 있을까요?」', 1);
    await era.input();

    ruby.say('……');
    await ruby.say_and_wait('우선 자세부터 똑바로 잡으십시오.');
    era.println();

    await era.printAndWait(
      `${ruby.name}가 당신의 눈앞으로 다가와 손을 맞잡고 세심히 지도하기 시작했다.`,
    );
    era.println();

    await ruby.say_and_wait(
      '춤의 전반적인 동작은 이미 외우셨겠지요? 그럼 시작하겠습니다.',
    );
    era.println();

    era.print(
      `${ruby.sex}는 한숨을 쉬며 당신의 품 안으로 들어왔다. 털이 몽실몽실한 귀가 가끔씩 ${you.name}의 뺨을 스쳤다.`,
    );
    era.print(`${ruby.name}의 지도는 의심할 여지없이 엄격했다.`);
    era.print(
      `${you.name}은(는) ${ruby.name}가 말한 대로 음악에 맞춰 ${ruby.sex}와 함께 몸을 움직였다.`,
    );
    await era.printAndWait(
      `임시 파트너를 슬쩍 내려다보려던 순간, 가냘프고 어린 두 손이 ${you.name}의 뺨을 감싸 쥐었다.`,
    );
    era.println();

    ruby.say(
      '고개를 높이 드십시오. 무언가 성취를 이루고자 하신다면, 언제 어떤 순간에도 당당하고 품위 있는 태도를 유지하셔야 합니다.',
    );
    await ruby.say_and_wait(
      '무엇이 그리 부끄러우신가요? 부끄러워할 일이 없다면, 당신은 자신을 위해서라도 시선을 똑바로 전방으로 향하고, 가슴을 펴고 당당히 서야 마땅합니다.',
    );

    await era.printAndWait(
      `${ruby.sex}에게 그런 말을 듣자, 당신은 지금까지 보아온 ${ruby.name}의 고결한 거동들을 떠올렸다.`,
    );
    era.println();

    ruby.say(
      '맞습니다. 그 자세를 잊지 마십시오. 만약 당신에게 목표로 삼은 대상이 존재한다면, 그에 걸맞은 품격과 행동거지를 갖추어야만 합니다.',
    );
    ruby.say(
      '오직 그래야만, 언젠가 자신이 원하는 모습이 될 수 있는 법이니까요.',
    );
    await era.printAndWait(`${ruby.name}는 말을 마치며 싱긋 미소 지었다.`);
    era.println();

    await era.printAndWait(
      `그 후, 시험장을 세팅하러 온 외주 업체 직원들이 도착했음에도 불구하고, ${you.name}과(와) ${ruby.name}는 장소를 야외로 옮겨 연습을 계속 이어갔다.`,
    );
    era.println();

    await era.printAndWait(
      `——그리하여 다음 날, ${ruby.name}의 「심혈을 기울인 지도」 덕분에, ${you.name}은(는) 테스트에서 모두를 깜짝 놀라게 할 만큼 훌륭한 성과를 거두는 데 성공했다.`,
    );
  },
  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} you
   * @param {string} breast_cup
   */
  async rec_out5(ruby, you, breast_cup) {
    era.print(
      `다른 영애들과의 다과회 자리에서, ${you.name}은(는) 문득 깜짝 놀랐다!`,
    );
    era.print(
      `트레이너는 오직 ${you.name} 한 사람뿐이었고, 다른 사람은 아무도 없었다.`,
    );
    era.printButton(
      '다른 사람들은 분명 다른 곳에서 테스트를 받고 있거나, 다른 날짜에 시험을 보는 거겠지!',
      1,
    );
    await era.input();

    era.print(
      `특유의 격식 있는 분위기와 소녀들의 체향 모두 ${you.name}이(가) 적응하기에는 너무나 낯설었다.`,
    );
    era.print(
      `긴장한 ${you.name}은(는) 찻잔 안의 홍차를 단숨에 들이켜 버렸다.`,
    );
    era.printButton('(한 잔 더 마셔야겠어! 응.)', 1);
    await era.input();

    await ruby.say_and_wait('빤히……');
    era.println();

    era.print(`이 다과회는 ${ruby.name}가 주최한 것이었다.`);
    era.print('이런 상황에서 직접 차를 따랐다가는……');
    era.printButton('(차를 따르는 솜씨가 좋네요.)', 1);
    await era.input();

    await era.printAndWait(
      `……${you.name}은(는) 그 표현이 조금 어색하다고 느꼈다. 하지만 직접 차를 따른 것이 예법에 어긋났다는 사실만은 더욱 확실해졌다.`,
    );

    ruby.say('…… 칭찬해 주셔서 감사합니다.');
    era.print(
      `말을 마친 뒤, ${ruby.name}는 당신을 위해 두 번째 찻잔을 채워주었다.`,
    );
    await era.printAndWait(
      `${you.name}이(가) 겨우 안도의 한숨을 내쉬는 순간——`,
    );

    era.print(
      '집사 「아가씨 그리고 귀빈 여러분, 만찬회 시간이 되었습니다. 모실 차량이 준비되었습니다.」',
    );
    era.printButton('「만찬회?」', 1);
    await era.input();

    await ruby.say_and_wait(
      '네, 동시에 다음 테스트 장소이기도 합니다. 그럼 출발하도록 하죠.',
    );
    era.println();

    era.print(
      `${ruby.name}는 대답할 틈도 주지 않고, ${you.name}을(를) 오직 사진으로만 보았던 호화 크루즈선으로 데려갔다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 겁에 질려 어찌할 바를 몰랐지만—— ${ruby.name}는 정재계의 거물들 앞에서도 전혀 기죽지 않고 당당하게 행동했다. ${you.name}과(와)는 완전히 딴판이었다.`,
    );
    era.println();

    await era.printAndWait(
      `주변을 가만히 둘러보니, 그날 훈련장에서 그랬던 것처럼 수많은 시선이 ${ruby.sex}의 자태를 쫓고 있었다. 눈빛에 담긴 막대한 기대는, 전부 화려한 일족에게 바쳐지는 것이었다.`,
    );
    era.println();

    ruby.print(
      '【만약 당신에게 목표로 삼은 대상이 존재한다면, 그에 걸맞은 품격과 행동거지를 갖추어야만 합니다. 오직 그래야만, 언젠가 자신이 원하는 모습이 될 수 있는 법이니까요.】',
    );
    era.print(`${you.name}의 목표는——`);
    era.printButton(`${ruby.name}에게 걸맞은 트레이너가 되는 것`, 1);
    era.printButton(ruby.name, 2);
    if ((await era.input()) === 2) {
      era.print(
        `${ruby.name}의 몸은 작다고 할 수 있지만, 가슴은 사실 ${breast_cup}컵이나 된다. 매끄러운 뺨, 귀여운 의상. 트레이너인 ${you.name}도 음란한 일을 잔뜩 하고 싶어진다.`,
      );
      era.print('초등학생 같은 몸에 키스받기');
      era.print('윤기 있는 입술이 피부에 닿는 감촉');
      era.print('우유처럼 매끄러운 피부');
      await era.printAndWait('작은 혀를 귀에 밀어 넣고, 속삭임을 듣고 싶다.');
      era.get('cflag:85:招募状态').special++;
    }
    era.println();

    era.print('……그래, 그런 거다.');
    await era.printAndWait(
      `정신을 차려보니, 시선은 이제 ${ruby.name}으로부터 뗄 수 없었다.`,
    );
    era.println();

    await era.printAndWait('깊은 밤의 학원 정문 앞.');
    ruby.say(
      '수고하셨습니다. 그럼, 저는 이제부터 이어서 개인 훈련을 해야 하므로, 이만 먼저 실례하겠습니다.',
    );
    era.printButton('「네? 지금부터요?」', 1);
    await era.input();

    ruby.say(
      '네. 신경 쓰지 마시고 편히 먼저 들어가십시오. 내일 있을 테스트는——',
    );
    era.printButton('「제가 도와드릴 일은 없을까요!」', 1);
    await era.input();

    ruby.say('특별히 필요한 것은 없습니다.');
    era.printButton('「기록을 잰다든가요!」', 1);
    await era.input();

    ruby.say('……');
    era.printButton('「재고 싶습니다. 정말로요.」', 1);
    await era.input();

    await ruby.say_and_wait('마음대로 하십시오, 얼마든지 재 보시길.');

    era.print(
      `이날 밤, ${you.name}은(는) 자신의 내면에서 무언가가 변했음을 느꼈다. 틀림없이 ${ruby.name}가 해준 말들이 자신을 변화시킨 것이리라.`,
    );
    await era.printAndWait(
      '（당분간 선발 테스트 때문에 밖으로 나갈 필요는 없어졌다）',
    );
  },
  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} you
   */
  async rec_week_end(ruby, you) {
    era.print(
      `호화 크루즈 사건을 거치며, 테스트가 끝난 후 ${ruby.name}의 개인 훈련을 돕는 것은 어느덧 ${you.name}의 일과가 되었다. ${you.name}은(는) 기꺼이 휴일까지 반납해가며 ${ruby.name}의 곁을 지켰다.`,
    );
    era.print(
      '하지만, 테스트가 막바지에 접어들었다는 것은 이런 도움도 이번이 마지막임을 의미했다.',
    );
    era.printButton('「수고하셨습니다.」', 1);
    await era.input();

    ruby.say('당신도요.');
    era.printButton('「트레이너 선발 시험도 곧 끝나네요.」', 1);
    await era.input();

    await ruby.say_and_wait(
      '당신 말이 맞습니다. 시선이 또 아래로 떨어지네요. 가슴을 펴고, 턱을 당겨서 똑바로 서십시오.',
    );
    era.println();

    await era.printAndWait('위험했다, 다리를 살짝 훔쳐보려던 걸 들킬 뻔했다.');
    era.println();

    await ruby.say_and_wait(
      '의식은 태도로 드러나는 법입니다. 이제 다시 한번 가슴에 손을 얹고 자문해 보시죠, 당신의 마음이 진정 어디를 향하고 있는지.',
    );
    era.println();

    era.print(
      `아직 포기하지 않은 쟁쟁한 트레이너들이 분명 널려 있을 터였다. 줄곧 ${ruby.name}의 곁을 지키며 알아왔기에, ${you.name}은(는) 자신이 뽑힐 확률이 극히 희박하다는 것을 뼈저리게 알고 있었다.`,
    );
    era.printButton('「지금까지 정말 감사했습니다!」', 1);
    await era.input();

    await ruby.say_and_wait('후우……');
    era.println();

    era.print(
      `${you.name}은(는) ${ruby.name}에게 이 시험을 끝까지 치를 수 있어서 영광이었다고 말했다.`,
    );
    await era.printAndWait(
      `결과가 어떻든 간에, ${you.name}은(는) 이 한 달 동안 배운 것들을 자양분 삼아 앞으로 성장해 나갈 원동력으로 삼을 것이라 다짐했다.`,
    );
    era.println();

    await ruby.say_and_wait('…… 네. 고생 많으셨습니다.');
    era.println();

    era.print(
      `처음부터 끝까지, 두 사람 사이에는 늘 넘을 수 없는 일정한 거리감이 존재했다. 그것이 ${you.name}을(를) 조금 쓸쓸하게 만들었다는 것은 또 다른 이야기다.`,
    );
    era.print(
      `결국 최종 합격할 트레이너가 누가 되든, 어떤 사람이 되든 간에 ${you.name}은(는) 그를 진심으로 응원해 줄 생각이었다.`,
    );
    await era.printAndWait(
      `그 사람이 고결하고도 늘 앞으로 나아가는 ${ruby.sex}의 든든한 버팀목이 되어, 함께 나아가 주기를 바라며.`,
    );
  },
  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} you
   */
  async rec_final(ruby, you) {
    await ruby.say_as_passer_by_and_wait(
      '편지',
      '트레이너 선발 테스트에 진심으로 응해주셔서 감사드립니다. 합격자 발표 결과를 다음과 같이 통보합니다——',
    );
    era.printButton('「……어라?」', 1);
    await era.input();

    era.print(
      `${you.name}은(는) 한 손에 그 합격 통지서를 꽉 쥐고, 허겁지겁 트레이닝실을 뛰쳐나갔다.`,
    );
    await era.printAndWait(
      `훈련장에서 겨우 ${ruby.name}를 찾아내자, 당신은 큰 소리로 ${ruby.sex}의 이름을 외쳤다.`,
    );

    ruby.say('하아…… 그 얼떨떨한 표정을 보니, 통지서를 받으신 모양이군요.');
    era.printButton('「이 결과는……」', 1);
    await era.input();

    era.print(`${ruby.name}가 정중하게 당신을 향해 고개를 숙였다.`);
    ruby.say(
      '앞으로 잘 부탁드립니다. 서로 더 많이 노력하고, 훌륭하게 자신을 갈고닦아 나갑시다.',
    );
    ruby.say('그럼 이만.');
    era.printButton('「이 【합격】이라는 게 대체 무슨 뜻이야?」', 1);
    await era.input();

    await era.printAndWait(
      `${you.name}은(는) 종이에 선명히 적힌 【합격】이라는 글자가 결코 잘못 인쇄된 게 아니라는 것을 확인했다. 하지만 대체 왜? 자신의 온갖 테스트 결과는 그저 그럭저럭 봐줄 만한 수준에 불과했고, 남들에게 내세울 만한 것은 극히 일부분뿐이었는데……`,
    );
    era.println();

    ruby.say('당신 말고는 아무도 남지 않았으니까요.');
    ruby.say('다른 분들은 전부 도중에 기권하기로 결정했습니다.');
    await ruby.say_and_wait(
      '따라서, 당신이 저의 트레이너로 선발되신 겁니다. 설명은 여기까지 하겠습니다.',
    );
    era.println();

    era.print('그러니까, 그저 끝까지 버티고 남았기 때문에 엉겁결에?');
    await era.printAndWait(
      `${
        you.name
      }은(는) 허탈함에 어깨를 축 늘어뜨렸다. 정작 ${ruby.child_sex_title}의 눈가에 어린 장난기 가득한 미소는 눈치채지 못한 채.`,
    );
    era.println();

    await era.printAndWait(
      `어찌 됐든 결국엔 ${ruby.name}의 트레이너가 된 것이라 생각하며 고개를 치켜든 순간——`,
    );
    era.println();

    const temp = era.get('cflag:85:招募状态').special;
    if (temp) {
      era.add('relation:85:0', -temp * 10);
      era.add('love:85', temp);
      await ruby.say_and_wait(
        '마지막까지 포기하지 않고 버텨내셨군요, 참 잘하셨습니다. 미성년 소녀의 하반신이나 훔쳐보던 변태 씨.',
      );
    } else {
      await ruby.say_and_wait(
        '마지막까지 포기하지 않고 버텨내셨군요, 참 잘하셨습니다.',
      );
    }
    era.println();

    await era.printAndWait(
      `멍하니 굳어버린 ${you.name}은(는) 안중에도 없다는 듯, ${ruby.name}는 말을 덧붙였다.`,
    );
    era.println();

    await ruby.say_and_wait(
      '정식으로 계약을 맺기 전에, 먼저 완수하셨으면 하는 과제가 몇 가지 있습니다. 저기 서 계신 집사 분에게서 과제를 전달받으시고, 내일 일과가 끝나기 전까지 제출해 주십시오.',
    );
    era.println();

    await era.printAndWait([
      ruby.get_colored_name(),
      '는 가볍게 생긋 웃으며 저 멀리 뛰어갔다.',
    ]);
  },
};
