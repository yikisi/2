/**
 * @file 初心者ガイド
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} minoru 駿川たづな／豊穣の刻
   * @param {CharaTalk} you プレイヤー
   * @param {boolean} new_save 新規セーブかどうか
   */
  async game_start(minoru, you, new_save) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 앞으로 일할 학원으로 향했다. 정문 앞에서는 온몸을 녹색 계열로 차려입은 ',
      minoru.sex_code === 1 ? '탄탄한 체격의 인간 남성' : '아름다운 인간 여성',
      '이 조용히 기다리고 있었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 최종 면접의 면접관 중 한 명임을 곧바로 알아보았다.',
    ]);
    era.println();
    if (!new_save) {
      await minoru.say_as_unknown_and_wait('안녕하세요, 신……');
      era.println();

      await era.printAndWait([
        '그',
        minoru.phy_sex_title,
        '은',
        you.get_colored_name(),
        '과(와) 눈이 마주친 순간 잠시 당황했지만, 곧 정신을 차렸다.',
      ]);
    } else {
      await era.printAndWait([
        '그',
        minoru.phy_sex_title,
        '은',
        you.get_colored_name(),
        '과(와) 눈이 마주치자마자 환하게 웃었다.',
      ]);
    }
    era.println();

    await minoru.say_as_unknown_and_wait([
      '안녕하세요. 신임 트레이너',
      you.adult_sex_title,
      '.',
    ]);
    await minoru.say_as_unknown_and_wait('이사장 비서 하야카와 타즈나입니다.');
    await minoru.say_and_wait('트레센 학원에 오신 것을 환영합니다.');
    await minoru.say_and_wait(
      '하루빨리 업무에 익숙해지실 수 있도록 제가 안내하고 도와드리겠습니다.',
    );

    if (!new_save) {
      era.println();

      await era.printAndWait([
        minoru.sex,
        '는 눈을 가늘게 뜨며 말을 이었다.',
      ]);
      era.println();

      await minoru.say_and_wait('물론 경험이 풍부하시니, 금방 적응하시겠지요.');
    }
    era.drawLine();
    await minoru.say_and_wait([
      '트레이너로서 우선 전속',
      minoru.uma_sex_title,
      '를 찾아야 합니다.',
    ]);
    await minoru.say_and_wait(
      '마침 트레센에도 장래가 촉망되는 신입생들이 많이 들어왔습니다.',
    );
    await minoru.say_and_wait('그럼 트레이닝장에 가 볼까요?');
  },
  /**
   * @param {CharaTalk} minoru 駿川たづな／豊穣の刻
   * @param {CharaTalk} you プレイヤー
   */
  async recruit(minoru, you) {
    await era.printAndWait([
      '트레이닝장 앞에서 ',
      minoru.get_colored_name(),
      '는 걸음을 멈췄다.',
    ]);
    await minoru.say_and_wait(
      '중앙 트레센 학원은 매년 약 이천 명의 학생을 받습니다. 대부분 정상을 목표로 수많은 관문을 넘어온 엘리트들이지요.',
    );
    await minoru.say_and_wait(
      '하지만 뜻대로 되지 않는 일도 많습니다…… 치열한 경쟁, 부상, 혹은 그저 불운 때문에요.',
    );
    await era.printAndWait([
      minoru.get_colored_name(),
      '는 작게 한숨을 쉬었다.',
    ]);
    await minoru.say_and_wait([
      '여러 사정으로 오픈 레이스(OP)를 무사히 완주하는 ',
      minoru.uma_sex_title,
      '는 10퍼센트도 채 되지 않습니다.',
    ]);
    await era.printAndWait([
      minoru.get_colored_name(),
      '는 ',
      you.get_colored_name(),
      '을(를) 돌아보며 진지한 표정을 지었다.',
    ]);
    await minoru.say_and_wait([
      '트레이너는 ',
      minoru.uma_sex_title,
      '를 대신해 레이스에 나설 수 없습니다.',
    ]);
    await minoru.say_and_wait(
      '그러니 코스 밖에서만큼은 담당을 전력으로 뒷받침해야 합니다.',
    );
    await minoru.say_and_wait([
      '몸과 마음을 돌보는 일도, 경주를 위한 훈련도. 꿈을 향해 나아가는 ',
      minoru.couple_title,
      "에게는 '트레이너'라 불리는 어른의 지도와 도움이 필요합니다.",
    ]);
    await minoru.say_and_wait(
      '앞으로 짊어질 책임을 부디 분명히 자각해 주세요.',
    );
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 옷매무새를 고치며 각오를 다졌다.',
    ]);
    await minoru.say_and_wait('좋습니다.');
    await era.printAndWait([
      minoru.get_colored_name(),
      '는 고개를 끄덕이고 ',
      you.get_colored_name(),
      '을(를) 데리고 트레이닝장의 학생들에게 다가갔다.',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   * @param {boolean} has_recruit
   */
  async recruit_end(minoru, you, has_recruit) {
    era.drawLine();
    if (has_recruit) {
      await era.printAndWait([
        '모집을 무사히 마치고 ',
        you.get_colored_name(),
        '은(는) 새로운 파트너와 함께 ',
        minoru.get_colored_name(),
        '에게 돌아갔다.',
      ]);
      await minoru.say_and_wait([
        '트레이너',
        you.adult_sex_title,
        '께서는 담당을 찾으셨군요. 그럼……',
      ]);
      await era.printAndWait([
        minoru.get_colored_name(),
        '는 가볍게 고개를 숙였다.',
      ]);
      await minoru.say_and_wait(
        '저 하야카와는 트레이너님과 담당의 앞으로 3년이 순탄하기를 진심으로 기원합니다.',
      );
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 적당한 담당 우마무스메를 찾지 못하고 혼자 ',
        minoru.get_colored_name(),
        '에게 돌아왔다.',
      ]);
      await minoru.say_and_wait([
        '트레이너',
        you.adult_sex_title,
        ', 좋은 파트너는 찾으셨나요?',
      ]);
      era.printButton(
        '「괜찮은 담당은 이미 다른 사람이 데려간 것 같습니다.」',
        1,
      );
      era.printButton(
        '「면목 없네요. 아무도 저한테 관심이 없는 것 같아요.」',
        2,
      );
      if ((await era.input()) === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 일부러 두 팔을 벌리며 난처한 표정을 지었다.',
        ]);
        await era.printAndWait(
          '그 말 중 어디까지가 진심이고 어디까지가 겉치레인지는 지금 그리 중요하지 않았다.',
        );
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 멋쩍게 두 팔을 벌리며 난처한 표정을 지었다.',
        ]);
      }
      era.println();

      await minoru.say_and_wait('그렇군요……');
      await minoru.say_and_wait(
        '그럼 얼마 뒤에 다시 살펴보죠. 담당으로 삼기 좋은 학생을 만날 수 있을지도 모릅니다.',
      );
      await minoru.say_and_wait(
        '이미 마음에 둔 학생이 있다면 이사장님께 부탁드리는 것도 한 방법입니다.',
      );
      await era.printAndWait('두 사람은 트레이닝장을 떠났다.');
    }
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async office_train(minoru, you) {
    await minoru.say_and_wait(
      '파트너를 모집한 뒤에는 트레이닝장으로 데려가 지도할 수 있습니다.',
    );
    await minoru.say_and_wait(
      '트레이닝은 크게 다섯 가지입니다. 스피드, 스태미나, 파워, 근성, 지능이지요.',
    );
    await minoru.say_and_wait(
      '담당의 기초 능력은 주로 트레이닝을 통해 성장하지만, 다른 방법이 전혀 없는 것은 아닙니다.',
    );
    await era.printAndWait([
      minoru.get_colored_name(),
      '는 손뼉을 쳐서 ',
      you.get_colored_name(),
      '의 주의를 환기시켰다.',
    ]);
    await minoru.say_and_wait(
      '……트레이닝에는 체력과 기력이 소모됩니다. 피곤한데도 무리하게 훈련시키면 담당이 다칠 수 있습니다.',
    );
    await minoru.say_and_wait('……그 점만큼은 꼭 조심해 주세요.');
    await era.printAndWait([
      '거기까지 말한 ',
      minoru.get_colored_name(),
      '의 목소리에 잠깐 씁쓸함이 묻어났다. 하지만 곧 평정을 되찾고, 조금 억지스러운 미소를 지었다.',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async office_register(minoru, you) {
    await minoru.say_and_wait(
      '이것은 가까운 시일에 열리는 레이스 정보를 정리한 표입니다. 확인해 주세요.',
    );
    await minoru.say_and_wait(
      '담당을 출전 등록하고 싶다면 해당 레이스를 선택하시면 됩니다.',
    );
    await minoru.say_and_wait(
      '레이스마다 거리도 경기장도 다릅니다. 파트너의 적성에 맞춰 선택해 주세요.',
    );
    await minoru.say_and_wait(
      '출전할 때도 체력과 기력이 소모되며, 끝난 뒤에는 한동안 피로가 남습니다.',
    );
    await minoru.say_and_wait(
      '……담당의 몸 상태는 돌보지도 않고 무리한 연속 출전을 강요하는 악질 트레이너도 있었습니다……',
    );
    await minoru.say_and_wait([
      '그렇게 해서는 이기기는커녕 담당을 다치게 할 뿐입니다. 트레이너',
      you.adult_sex_title,
      '께서는 부디 그런 방법을 쓰지 말아 주세요.',
    ]);
    await minoru.say_and_wait(
      '참고로 출전 전에 부상이나 일정 중복 같은 갑작스러운 사정이 생기면 출전을 취소할 수도 있습니다.',
    );
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async school_trainer_office(minoru, you) {
    await era.printAndWait([
      minoru.get_colored_name(),
      '는 ',
      you.get_colored_name(),
      '을(를) 사무실로 안내했다. 안을 들여다보니 같은 일을 하는 사람들만 있었다.',
    ]);
    era.println();
    await minoru.say_and_wait(
      '이곳이 평소에 일하실 장소입니다. 다른 트레이너들도 자주 방문합니다.',
    );
    await minoru.say_and_wait('동료분들과도 좋은 관계를 쌓아 주세요.');
  },
  /**
   * @param {CharaTalk} minoru
   * @param {PrintedSpan} call_305
   */
  async school_clinic(minoru, call_305) {
    await minoru.say_and_wait([
      '이곳은 본교의 보건실입니다. 교의인 ',
      call_305,
      '이…… 출몰합니다. 네, 출몰이요.',
    ]);
    era.println();
    await era.printAndWait([
      minoru.sex,
      '는 곤란한 듯 뺨을 긁었다. 혹시 ',
      call_305,
      '은 문제 인물인 걸까.',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async school_god(minoru, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '과(와) ',
      minoru.get_colored_name(),
      '는 세 우마무스메 여신이 조각된 분수 앞에 섰다. 여신상이 어깨에 멘 항아리에서 물이 졸졸 흘러내리고 있었다.',
    ]);
    era.println();

    await minoru.say_and_wait('연수 때 이 세 여신상은 이미 보셨을 겁니다.');
    await minoru.say_and_wait('시대가 흐르며 신앙은 조금씩 희미해졌지만요.');
    await minoru.say_and_wait('저희에게는 실제로 존재하는 분들입니다……');
    await minoru.say_and_wait('……세 여신은……실재해야만 합니다.');
    era.println();

    await era.printAndWait([
      minoru.get_colored_name(),
      '는 작게 중얼거렸다. 하지만 갑자기 불어온 돌풍이 ',
      minoru.sex,
      '의 말을 허공으로 흩어 버렸다.',
    ]);
    era.println();

    await minoru.say_and_wait(
      '아무튼 고민이 있다면 여기서 기도해 보는 것도 좋겠지요.',
    );
    await minoru.say_and_wait(
      '매년 3월에 이곳에서 기도하면 특별한 은혜를 받는다는 말도 있습니다.',
    );
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async school_atrium(minoru, you) {
    await minoru.say_and_wait(
      '이곳은 안뜰입니다. 쉬는 시간에는 많은 선생님과 학생들이 여기서 쉽니다.',
    );
    era.println();

    await era.printAndWait([
      minoru.get_colored_name(),
      '가 안뜰 한쪽을 가리키자 ',
      you.get_colored_name(),
      '의 시선 끝에 두 팔로 안을 수 없을 만큼 굵고 사람 허리 높이쯤에 구멍이 난 고목이 보였다.',
    ]);
    era.println();

    await minoru.say_and_wait(
      '우울한 사람들은 일부러 이 나무 구멍을 향해 큰 소리를 지르며 기분을 풀기도 한답니다.',
    );
    await minoru.say_and_wait([
      '그러니 트레이너',
      you.adult_sex_title,
      '께서 근처를 지나다 무슨 소리를 들으셔도 놀라지 마세요.',
    ]);
  },
  /** @param {CharaTalk} minoru */
  async school_rooftop(minoru) {
    await minoru.say_and_wait(
      '애니메이션 등에는 학생들이 옥상에 올라가 도시락을 먹거나 비밀 이야기를 나누는 장면이 자주 나오지요.',
    );
    await minoru.say_and_wait(
      "하지만 실제로는 이 '명소'가 너무 인기 있는 탓에, 트레센 옥상에서 혼자 있기는 어렵답니다. 후후.",
    );
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   * @param {PrintedSpan} chairman
   */
  async school_chairman(minoru, you, chairman) {
    await minoru.say_and_wait([
      '이곳은 본교 이사장님의 집무실입니다. 용무가 있다면 보통 여기서 ',
      chairman,
      '님을 만나실 수 있습니다.',
    ]);
    await minoru.say_and_wait([
      '이사장님과 좋은 관계를 쌓으면 트레이너',
      you.adult_sex_title,
      '의 승진에도 적지 않은 도움이 될지 모르지요.',
    ]);
    era.println();

    await era.printAndWait([
      minoru.get_colored_name(),
      '는 ',
      you.get_colored_name(),
      '에게 윙크했다.',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async school_visitors(minoru, you) {
    await minoru.say_and_wait(
      '외부 손님이 방문하면 학원 측에서 이 방들에 면담 자리를 마련합니다.',
    );
    await minoru.say_and_wait([
      '앞으로 트레이너',
      you.adult_sex_title,
      '을 취재하러 오는 기자도 적지 않겠지요.',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async out(minoru, you) {
    await minoru.say_and_wait([
      '트레센 정문으로 나가면 개울가 산책로, 상점가, 신사, 역 앞 등으로 갈 수 있습니다. 자세한 것은……트레이너',
      you.adult_sex_title,
      '께서 직접 찾아보세요.',
    ]);
    await minoru.say_and_wait(
      '학원에 볼일이 없을 때는 대체로 정문 근처에 있습니다. 무슨 일이 있으면 이쪽으로 와 주세요.',
    );
    await minoru.say_and_wait(
      '……다만 담당과 함께 외출하실 때는 저를 부르지 말아 주세요.',
    );
    await era.printAndWait([
      minoru.get_colored_name(),
      '는 ',
      you.get_colored_name(),
      '에게 손을 흔들고 정문 근처로 걸어갔다.',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async office_sex(minoru, you) {
    await minoru.say_and_wait('어머…… 그런 부탁을 하시다니……');
    await era.printAndWait([
      minoru.get_colored_name(),
      '의 시선이 칼날처럼, 달아오른 ',
      you.get_colored_name(),
      '의 얼굴에 꽂혔다……',
    ]);
  },
};
