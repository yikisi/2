/**
 * @file マチカネフクキタル - 募集
 * @author ALEX
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} kitaru
   * @param {CharaTalk} you
   */
  async rec(kitaru, you) {
    await era.printAndWait([
      '선발 레이스.',
      kitaru.uma_sex_title,
      '와(과) 트레이너가 만나는 장소다.',
    ]);
    if (era.get('flag:当前声望') >= 200) {
      await era.printAndWait([
        '트레이너로 일한 지도 꽤 되었다.',
        you.get_colored_name(),
        '은(는) 이 일의 요령도 어느 정도 익혔다.',
      ]);
      await era.printAndWait([
        '그중 하나는──',
        kitaru.uma_sex_title,
        '와(과) 트레이너가 담당 계약을 맺으면, 삼 년에 이르는 계약 동안 인생이라는 긴 여정에서 서로의 운명이 잠시나마 얽힌다는 것이다.',
      ]);
      await era.printAndWait(
        '어쩌면 그 이후로도 인생의 풍파를 함께 헤쳐 나가게 될지도 모를 일이다.',
      );
    } else {
      await era.printAndWait([
        '선배 트레이너에게 전해 들은 마음가짐은 많다. 그중 하나는──',
      ]);
      await era.printAndWait([
        kitaru.uma_sex_title,
        '와(과) 트레이너가 담당 계약을 맺으면, 삼 년에 이르는 계약 동안 인생이라는 긴 여정에서 서로의 운명이 잠시나마 얽힌다는 것이다.',
      ]);
      await era.printAndWait('앞으로 인생의 비바람을 함께 맞게 될지도 모른다.');
    }
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 두 손으로 주머니를 뒤적이며 신사의 돌길을 걷는다.',
    ]);
    await era.printAndWait([
      '트레센 학생들이 자주 찾는 그 신사는 선발 레이스를 앞두고 신에게 기도하는 트레이너와',
      kitaru.uma_sex_title,
      '들로 지금쯤 북적일 것이다.',
    ]);
    await era.printAndWait([
      '그래서 ',
      you.get_colored_name(),
      '은(는) 그 유명한 신사로 향하지 않고 직감에 따라, 트레센으로 가는 길에서 조금 벗어난 작은 신사를 골랐다.',
    ]);
    await era.printAndWait([
      '인가에서 멀리 떨어져 어떤 신을 모시는지도 모를 이 신사는 평소처럼 한산하다.',
    ]);
    await era.printAndWait([
      '주홍빛 도리이를 지나,',
      you.get_colored_name(),
      '은(는) 신의 영역에 발을 들였다. 굵은 금줄을 두른 큰 나무와 석등이 곳곳에 서 있다.',
    ]);
    if (era.get('flag:当前声望') >= 200) {
      await era.printAndWait([
        '신사의 엄숙한 분위기는 다음 담당을 손꼽아 기다리는 ',
        you.get_colored_name(),
        '에게도 잠시 고요함을 선사했다.',
      ]);
    } else {
      await era.printAndWait([
        '신사의 엄숙한 분위기는 아직 앞날을 두고 고민하는 ',
        you.get_colored_name(),
        '에게도 잠시 고요함을 선사했다.',
      ]);
    }
    era.printButton('기도한다', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 눈을 감고 깊이 숨을 들이마셨다……',
    ]);
    await kitaru.say_as_unknown_and_wait('오오오오옷──────!!!!');
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 다음 참배 동작을 취하기도 전에 등 뒤의 외침이 끼어들었다.',
    ]);
    era.printButton('돌아본다', 1);
    await era.input();
    await era.printAndWait([
      '안타깝게도 전설과는 달리 종소리와 함께 나타난 것은 신이 아니라 한 명의',
      kitaru.uma_sex_title,
      '였다.',
    ]);
    await era.printAndWait([
      '조금 흐트러진 주황색 단발머리. 팽팽한 가슴 위로 리본이 올라가 있고, 이나리신의 여우 사자를 연상시키는 길쭉한 귀가 흥분에 맞춰 팔랑거린다.',
    ]);
    await era.printAndWait([
      '넘칠 듯 활기찬 겉모습과는 달리, 바로 눈앞에 선 이',
      kitaru.uma_sex_title,
      '에게서는 이 신사와도 비슷한 맑고 차분한 체향이 난다. 왼쪽 귀에는 엄숙한 달마 장식, 오른쪽 귀에는 노란 데이지.',
    ]);
    await era.printAndWait([
      '전혀 다른 두 요소가,',
      you.get_colored_name(),
      '의 눈앞에 있는 이',
      kitaru.uma_sex_title,
      '에게 겹쳐 있다.',
    ]);
    await era.printAndWait([
      '그리고 고개를 들어 ',
      you.get_colored_name(),
      '을(를) 바라봤을 때──별 모양 눈동자는',
      kitaru.uma_sex_title,
      '중에서도 드문 편이다.',
      you.get_colored_name(),
      '와(과) 마주친 기쁨으로 반짝이고 있다.',
    ]);
    era.printButton('자세히 본다', 1);
    await era.input();
    await era.printAndWait([
      '이 요란한 밤색 머리의 주인공은 분명 트레센 학생이다. 입고 있는 교복을 보면',
      you.get_colored_name(),
      '도 알 수 있다.',
    ]);
    await era.printAndWait('그런데……지금은 선발 레이스 시간 아닌가?');
    await era.printAndWait([
      you.get_colored_name(),
      '의 시선에 의문이 섞인 것을 보고,',
      kitaru.get_colored_name(),
      '은(는) 곧장 대답했다.',
    ]);
    await kitaru.say_as_unknown_and_wait(
      '맞아요, 맞아요! 자기소개를 잊었네요!',
    );
    await kitaru.say_as_unknown_and_wait([
      '제 이름은 【',
      kitaru.get_colored_name(),
      '】! 시라오키님의 이끄심으로 이곳에 왔어요!',
    ]);
    await kitaru.say_and_wait([
      '운명의 사람이 오기만을 기다렸어요! 바로 트레이너',
      you.adult_sex_title,
      ', 당신 말이에요!',
    ]);
    await era.printAndWait([
      '그렇게 말한 뒤,',
      kitaru.sex,
      '은(는) ',
      you.get_colored_name(),
      '을(를) 향해 양팔을 벌렸다.',
    ]);
    await kitaru.say_and_wait('부디! 부디 제 트레이너가 되어 주세요!');
    await era.printAndWait([
      '이 신사의 효험이 너무 강했던 걸까. 아니면 삼여신이나 다른 신의 시선이 우연히 ',
      you.get_colored_name(),
      '에게 닿았던 걸까.',
    ]);
    await era.printAndWait('이를테면 그 시라오키님일까.');
    era.printButton('배웠던 민속 지식을 떠올린다', 1);
    era.printButton('비슷한 신화를 들은 적이 있는지 떠올린다', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 단언할 수 있다. 배운 범위에서는 이 신의 이름을 들은 기억이 없다.',
      ]);
    } else {
      await era.printAndWait([
        '없다.',
        you.get_colored_name(),
        '은(는) 이 신의 이름을 들은 적이 없다고 확신했다.',
      ]);
      await era.printAndWait([
        '눈앞의',
        kitaru.uma_sex_title,
        '이(가) 품은 망상일지도 모른다.',
      ]);
    }
    await kitaru.say_and_wait(
      '자! 트레이너님! 트윙클 시리즈에서 함께 행운을 손에 넣어요!',
    );
    era.printButton('거절한다', 1);
    era.printButton('받아들인다', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '아무것도 모른 채,',
        kitaru.uma_sex_title,
        '의 트레이너가 되는 것은 양쪽 모두에게 무책임한 일이다.',
      ]);
      await kitaru.say_and_wait('우으……');
      await era.printAndWait([
        you.get_colored_name(),
        '에게 거절당한',
        kitaru.teen_sex_title,
        '은(는) 눈에 띄게 풀이 죽었다. 쫑긋하던 두 귀도 꼬리와 함께 힘없이 늘어졌다.',
      ]);
      await era.printAndWait([
        '조금 마음이 아프다. 그래도 ',
        you.get_colored_name(),
        '은(는) 알고 있다. 이 ',
        kitaru.get_colored_name(),
        '의 말만 듣고',
        kitaru.sex,
        '의 트레이너가 되는 것은 양쪽 모두에게 무책임한 일이다.',
      ]);
      await era.printAndWait('다만……');
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 정신을 차려 보니 거절한 지 몇 초도 되지 않아,',
        kitaru.get_colored_name(),
        '의 얼굴에는 다시 미소가 돌아와 있었다.',
      ]);
      await era.printAndWait(
        '미소라기보다는 오랫동안 몸에 밴 버릇 같은 틀에 박힌 웃음이었다.',
      );
      await you.say_and_wait('……하아.');
      await era.printAndWait([
        '트레이너로서의 책임감이,',
        you.get_colored_name(),
        '을(를) 그냥 지나치지 못하게 한다.',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는)',
        kitaru.sex,
        '에 대해 거의 모른다. 그래도 방금 기도를 올린 신에게 자신의 운명을 맡기기로 했다.',
      ]);
      await era.printAndWait([
        '그렇다고 이대로',
        kitaru.uma_sex_title,
        '의 트레이너가 되는 것은 양쪽 모두에게 무책임한 일이다.',
      ]);
    }
    era.printButton(
      '「네 선발 레이스를 보러 갈게. 그 뒤에 결정하는 건 어때?」',
      1,
    );
    await era.input();
    await kitaru.say_and_wait('오오──!');
    await kitaru.say_and_wait('맞아요, 맞아요! 바로 그거예요!');
    await kitaru.say_and_wait(
      '곧 있을 선발 레이스에서 제 실력을 보여 드릴게요!',
    );
    await kitaru.say_and_wait([
      '그럼 손가락 걸고 약속해요! 그러니까……',
      you.actual_name,
      '트레이너님!',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '은(는) 가슴의 명찰을 보고 ',
      you.get_colored_name(),
      '의 이름을 조금 서툴게 읽은 뒤,',
      you.get_colored_name(),
      '에게 손을 내밀었다.',
    ]);
    await kitaru.say_and_wait('응?');
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 당황하는 것을 보고,',
      kitaru.get_colored_name(),
      '은(는) 설명했다.',
    ]);
    await kitaru.say_and_wait('언니가 알려 준 의식이에요!');
    await kitaru.say_and_wait('손가락 걸기 의식이에요!');
    await kitaru.say_and_wait('약속했다면 이제 운명인 거예요!');
    era.printButton('손을 내민다', 1);
    await era.input();
    await kitaru.say_and_wait('좋아요! 그럼 정해졌네요!');
    await kitaru.say_and_wait(
      '반드시 트레이너님과 계약하고 말겠어요! 꼭 보러 와 주세요～!',
    );
    era.drawLine({ content: '翌日' });
    await era.printAndWait([
      kitaru.get_colored_name(),
      '의 선발 레이스가 마침내 시작되었다.',
    ]);
    await era.printAndWait([
      '오늘 운세가 나빴는지 길이 막혀 조금 늦었다. 겨우 인파를 헤치고,',
      you.get_colored_name(),
      '은(는) 관중들 사이로 파고들었다.',
    ]);
    await era.printAndWait([
      '하필 이번 선발 레이스에는 신입생 사이에서 이미 대도주로 이름을 알린',
      kitaru.uma_sex_title,
      '도, 메지로 가문의 신성도, 3관을 노릴 만한 갈색 머리의',
      kitaru.uma_sex_title,
      '도 있다. 누구 하나만 있어도 트레이너들이 몰려들 만하다.',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '은(는) 그 곁다리에 불과하다. 주위 이야기를 들어 보면,',
      kitaru.sex,
      '을(를) 지켜보는 사람은 거의 없다.',
    ]);
    await era.printAndWait([
      '그래도 인파에 밀려난 관객석 구석에서,',
      you.get_colored_name(),
      '은(는) 게이트로 향하는 ',
      kitaru.get_colored_name(),
      '을(를) 발견했다.',
    ]);
    await era.printAndWait([
      '체육복은',
      kitaru.sex,
      '의 굴곡 있는 몸선을 뚜렷하게 드러낸다. 흰 스타킹을 신은 다리는 희고 길다.',
    ]);
    await era.printAndWait([
      '겉모습만 보면,',
      kitaru.sex,
      '은(는) 확실히 사랑스러운',
      kitaru.uma_sex_title,
      '이다.',
    ]);
    await era.printAndWait([
      '다만,',
      kitaru.sex,
      '의 표정은 조금 난처해 보인다. 빛을 잃은 별 모양 눈동자는 관객석의 누군가를 찾는 것 같다. 인파 구석에 있는 ',
      you.get_colored_name(),
      '은(는) 알아보지 못한 모양이다.',
    ]);
    await era.printAndWait([
      '결국 진행 요원에게 재촉받아,',
      kitaru.get_colored_name(),
      '은(는) 게이트에 들어갔다.',
    ]);
    era.drawLine({ content: '選抜レース終了後' });
    await era.printAndWait('참패……');
    await era.printAndWait([
      '참패라고 해도 좋았다. 칭찬할 만한 점이라면,',
      kitaru.sex,
      '의 간신히 평균을 웃도는 막판 가속 정도였다.',
    ]);
    await era.printAndWait([
      '달리는 자세조차 어색하고 스퍼트 시기도 놓쳐 착순은 꼴찌였다.',
    ]);
    await era.printAndWait([
      '정말',
      kitaru.sex,
      '을(를) 담당할 것인가.',
      you.get_colored_name(),
      '은(는) 망설이지 않을 수 없었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 보았다. 드문드문 말을 걸어오는 트레이너들을,',
      kitaru.get_colored_name(),
      '은(는) 거절하고 있었다.',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '이라는',
      kitaru.uma_sex_title,
      '은(는) 의외로 한번 약속하면 놓지 않는 성격인 모양이다.',
    ]);
    await kitaru.say_and_wait(
      '죄송합니다! 하지만 제게는 이미 운명의 사람이 있어요!',
    );
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 다가오려는 트레이너들에게,',
      kitaru.sex,
      '이(가) 큰 소리로 그렇게 말하는 것을 들었다.',
    ]);
    await era.printAndWait([
      '그래도 애써 미소를 지으려 한다. 하지만 주사위에는 실패만 나온다. 밤색 꼬리가 힘없이 두 다리 사이로 늘어져 있다.',
    ]);
    era.printButton(`（${kitaru.name}의 담당이 된다)(영입을 시도한다)`, 1);
    era.printButton('(역시 그만두자……)(영입을 포기한다)', 2);
    const ret = await era.input();
    if (ret === 1) {
      era.printButton(`「${kitaru.name}！」`, 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는)',
        kitaru.sex,
        '의 이름을 크게 불렀다. 들리지 않는 걸까 싶어 한층 더 큰 목소리로 몇 번이고 불렀다.',
      ]);
      era.printButton(`「${kitaru.name}！！！」`, 1);
      await era.input();
      await era.printAndWait([
        '먼저 처져 있던 귀가 튀어 올랐다. 빛을 되찾은 별 모양 눈동자가,',
        you.get_colored_name(),
        '쪽을 향한다.',
      ]);
      await era.printAndWait([
        '그리고,',
        you.get_colored_name(),
        '이(가) 지금껏 본 가장 빠른 막판 가속──선명한 주황색 번개가,',
        you.get_colored_name(),
        '에게 곧장 날아왔다.',
      ]);
      await era.printAndWait([
        '거리감 없이 다가오는 ',
        kitaru.get_colored_name(),
        '이(가) 멈추지 않고 ',
        you.get_colored_name(),
        '의 가슴으로 쓰러질 듯한 순간,',
        you.get_colored_name(),
        '은(는) 재빨리 머리를 눌러 부딪쳐 오는 움직임을 막았다.',
      ]);
      await era.printAndWait([
        kitaru.uma_sex_title,
        '의 힘은 인간의 몇 배나 될 것이다.',
        you.get_colored_name(),
        '에게 가로막힐 리가 없다.',
      ]);
      await era.printAndWait([
        '그런데도 ',
        you.get_colored_name(),
        '의 손바닥 아래에서,',
        kitaru.sex,
        '은(는) 힘없는 토끼처럼 휘청거리고 있다.',
      ]);
      await kitaru.say_and_wait('역시! 트레이너님이 보러 와 주실 줄 알았어요!');
      await kitaru.say_and_wait('오늘은 역시──');
      await kitaru.say_and_wait('대길이에요! 복이 왔어요!');
      await era.printAndWait([
        kitaru.sex,
        '은(는) 두 손을 하늘로 치켜드는 묘한 자세를 취한 뒤,',
        you.get_colored_name(),
        '을(를) 바라봤다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는),',
        kitaru.sex,
        '의 뜻을 이해했다.',
      ]);
      await era.printAndWait([
        '결국 ',
        you.get_colored_name(),
        '은(는) 지푸라기라도 붙잡으려는 듯한 그 시선 앞에서 계약서를 꺼냈다.',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        '와(과) 【운명?】의 만남을 이루었다.',
      ]);

      await era.printAndWait([
        kitaru.get_colored_name(),
        '와(과) 계약을 맺었다.',
      ]);
    } else {
      await era.printAndWait([
        '이 아이의 정신 상태는 담당으로 삼기에 적합하지 않은 것 같다. 손대지 않는 편이 낫겠다.',
        you.get_colored_name(),
        '은(는) 조용히 자리를 떠났다.',
      ]);
    }
    return ret;
  },
};
