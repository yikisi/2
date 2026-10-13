/**
 * @file マヤノトップガン - 恋慕
 * @author 黑奴二号
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} maya マヤノトップガン
   * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
   */
  async 24(maya, callname) {
    await maya.say_and_wait('마야는 어릴 때부터 하늘을 동경했어.');
    await maya.say_and_wait(
      '마야가 어렸을 때, 아빠가 마야를 비행기에 태워 하늘을 날게 해줬거든.',
    );
    await maya.say_and_wait('그때의 풍경은 마야 평생 잊지 못할 거야.');
    await maya.say_and_wait(
      '『네가 어른이 되면 이것보다 더 아름다운 풍경을 볼 수 있단다』라고 아빠가 말해줬어.',
    );
    await maya.say_and_wait('그리고 마야는 트레센에 오게 됐지.');
    await maya.say_and_wait(
      '경기장이라면, 다시 한번 그때의 기분을 느낄 수 있지 않을까 해서.',
    );
    await maya.say_and_wait(`그렇게 마야는 ${callname}과 만나게 됐어.`);
    await maya.say_and_wait(
      '새로운 것들도 많이 경험하고, 새로운 기분들도 많이 느꼈어.',
    );
    await maya.say_and_wait('그러니까……');
    await maya.say_and_wait('마야가 어른이 될 때까지, 계속 곁에 있어 줘야 해?');
  },
  /**
   * @param {CharaTalk} maya マヤノトップガン
   * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
   */
  async 49(maya, callname) {
    await maya.print_and_wait(
      `어느 날, ${maya.name}은 알 수 없는 경로를 통해 의문의 서적을 입수했다.`,
    );
    await maya.say_and_wait(
      `이게 바로 전설로만 듣던 어른들만 보는 책이야? 이걸 보면 마야도 어른이 될 수 있을까?`,
    );
    await maya.say_and_wait(`이건……`);
    await maya.say_and_wait(`아와와와와와……`);
    await maya.say_and_wait(`여…… 역시 이런 건 마야한테 아직 너무 일러!`);
    await maya.print_and_wait(
      `비록 너무 자극적인 나머지 중간에 포기하긴 했지만, 책의 내용은 ${maya.name}에게 깊은 인상을 남겼다.`,
    );
    await maya.say_and_wait(`하지만, 만약 ${callname}과 함께라면……?`);
    await maya.print_and_wait(
      `${maya.name}은 천재다. 무엇이든 금방 배우며———— 조만간 누군가는 그 사실을 뼈저리게 깨닫게 될지도 모른다.`,
    );
  },
  /**
   * @param {CharaTalk} maya マヤノトップガン
   * @param {CharaTalk} luna シンボリルドルフ
   * @param {CharaTalk} ag エアグルーヴ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
   * @param {PrintedSpan} callname_18 エアグルーヴのプレイヤーへの呼び方
   * @param {PrintedSpan} m_call_k マヤノトップガンのフジキセキへの呼び方
   * @param {PrintedSpan} m_call_a マヤノトップガンのエアグルーヴへの呼び方
   */
  async 74(maya, luna, ag, you, callname, callname_18, m_call_k, m_call_a) {
    await era.printAndWait([
      '어느 날. ',
      you.get_colored_name(),
      '은(는) ',
      maya.get_colored_name(),
      '하고 함께 학생회실로 불려 갔다. 그리고……',
    ]);
    await maya.say_and_wait('와아! 마야가 패션쇼 게스트로 뽑혔다고!?');
    await luna.say_and_wait(
      `그래, 이것도 학원 홍보 활동 중 하나지. 일반 대중에게 보고 싶은 승부복이 무엇인지 물었더니──`,
    );
    await ag.say_and_wait(
      `『뷰티 드림 컵』에 등장했던 웨딩드레스 승부복이 1위를 차지했단다…… 네가 그 의상의 주인이니, 수고를 좀 해줘야겠어.`,
    );
    await maya.say_and_wait(
      '와! 마야도 그때 그 옷 정말 좋아해~! 어라? 근데 잠깐만? 그럼──',
    );
    await ag.say_and_wait(
      `……물론 나도 출연한다. 나도 웨딩 의상을 가진 ${ag.uma_sex_title}니까.`,
    );
    await ag.say_and_wait(
      `그리고…… 이번 기획의 핵심 중 하나는, 런웨이를 걸을 때 에스코트해 줄 파트너와 함께 걷는 것이다.`,
    );
    await luna.say_and_wait(
      `공개 모집을 해도 좋고, 지명해도 좋다. 기한 전까지 게스트 본인이 자유롭게 결정하도록 해.`,
    );
    await maya.say_and_wait(
      '에스코트 파트너…… 공모나 지명이 가능하단 말이지? 하지만 마야는……',
    );
    era.printButton('「어떻게 정하고 싶어?」', 1);
    await era.input();
    await maya.say_and_wait(`……${callname}은 어떻게 생각해?`);
    await maya.say_and_wait([
      '고, 공개 모집이면 팬들도 좋아하겠지! 하지만 안내를 잘하는 ',
      m_call_k,
      '한테 부탁하는 것도 괜찮을지도?',
    ]);
    await maya.say_and_wait(
      '그치만…… 만약 누가 나한테 『나를 지명해줘!』라고 말해준다면…… 나는……',
    );
    era.printButton('「응?」', 1);
    await era.input();
    await maya.say_and_wait('……정말~!! 왜 이렇게 눈치가 없는 거야~!?');
    await maya.say_and_wait(
      '됐어, 됐어……! 그~렇다면, 마야가 직접 계획을 세우겠어!',
    );
    await era.printAndWait([
      maya.get_colored_name(),
      '은 무슨 작전을 짜기 시작한 듯하다. ',
      you.get_colored_name(),
      '은(는) 잠시 지켜보기로 했다……',
    ]);
    await era.printAndWait(
      `후배 ${maya.uma_sex_title}「마야노 선배! 에스코트는 누가 해요? 다들 궁금해해요!」`,
    );
    await maya.say_and_wait(
      '고마워~! 얼른 자원하는 사람을 찾아야겠어~~! ……(힐끗).',
    );
    await era.printAndWait(
      '팬 「이번 이벤트 정말 기대하고 있어요! 파트너 공모를 하신다면 저 꼭 신청할게요!」',
    );
    await maya.say_and_wait(
      '마야는 정말 인기쟁이라니까☆ 만약 아무도 자원 안 하면 그냥 공모로 해버릴까~? ……(힐끗).',
    );
    era.drawLine();
    await era.printAndWait(
      `하지만 며칠이 지나도록 ${maya.sex}는 에스코트 상대를 정하지 않았다. ${you.name}이(가) 무슨 일인가 하고 생각하던 중……`,
    );
    await ag.say_and_wait(
      `실례하마. 네 의견을 물으러 왔다…… 내가 뭘 묻고 싶은지 이미 알고 있겠지?`,
    );
    era.printButton('「에스코트 파트너 이야기지?」', 1);
    await era.input();
    await ag.say_and_wait(
      `네 고민은 이해하지만, 더 이상 기다릴 수는 없군. 빨리 답변을──`,
    );
    await maya.say_as_unknown_and_wait([
      '기다려~~! ',
      callname,
      ', 이게 대체 어떻게 된 거야!?',
    ]);
    era.printButton('「！？」', 1);
    await era.input();
    await maya.say_and_wait([
      '『빨리 답변』이라니, 『에스코트 이야기』……!? ',
      m_call_a,
      '의 에스코트를 해 주는 거야!?',
    ]);
    era.printButton('「에?」', 1);
    await era.input();
    await maya.say_and_wait(
      '마야는…… 마야도, 계속 트레이너 쌤이 자원해주기만을 기다렸단 말이야~!!',
    );
    era.printButton('「뭐라고!?」', 1);
    await era.input();
    await maya.say_and_wait(
      `그치만 마야의 파트너는 ${callname}인걸! 하지만 지명하는 것보다, 쌤이 직접 하겠다고 해주는 게 더 기쁠 것 같아서……`,
    );
    await maya.say_and_wait([
      '그래서 계속 먼저 말해 주길 기다렸는데, ',
      m_call_a,
      '이(가) 지명해 버렸어!',
    ]);
    await ag.say_and_wait(
      `잠깐! 무슨 소리를 하는 거야? 내 파트너는 이미 정해진 사람이 있다.`,
    );
    await maya.say_and_wait(
      '에!? ……그, 그럼 방금 말한 『파트너』에 대한 『답변』이라는 건……?',
    );
    era.printButton(
      '「우리 쪽 파트너 신청서를 빨리 제출하라고 재촉하는 거야」',
      1,
    );
    await era.input();
    await maya.say_and_wait('……아~~! 마야가 오해한 거였어!? 다행이다~~!');
    await maya.say_and_wait(
      '헤…… 헤헤…… 착각해서 미안해. 마야는 『밀당 작전』이 실패한 줄 알았거든──',
    );
    era.printButton('「『밀당 작전』?」', 1);
    await era.input();
    await maya.say_and_wait('……아차!');
    await maya.say_and_wait(
      '으으~~ 그래! 마야가 이렇게 인기가 많다는 걸 보여줘서 쌤을 안달 나게 만들고, 쌤 입에서 같이 가고 싶다는 말이 나오게 하려고 했어!',
    );
    await maya.say_and_wait(
      '마야는 트레이너 쌤이 마야를 제일 특별한 존재로 봐주길 원했고, 쌤에게 내가 가장 소중한 사람이길 바랐단 말이야……',
    );
    era.printButton('「한 번 더 기회를 줄 수 있을까?」', 1);
    await era.input();
    await maya.say_and_wait(
      '……정…… 정말 어쩔 수 없네…… 이번 딱 한 번뿐이야, ……알았어.',
    );
    era.println();

    era.printButton(
      `「당연히 네가 나에게 가장 소중한 사람이야」 (관계 진전)`,
      1,
    );
    era.printButton(`「나를 네 파트너로 삼아줘」 (진전 보류)`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await maya.say_and_wait(
        '……저, 정말? 마야가 제일 특별해? 마야가 제일 소중하고, 제일 반짝반짝해?',
      );
      era.printButton('「물론이지!」', 1);
      await era.input();
      await maya.say_and_wait(
        '에헤헤……! 작전은 실패했지만 마음은 알았으니까, 결과는 그럭저럭이네!',
      );
      await maya.say_and_wait(
        '하지만~~ 각오해? 그날은 더~ 대단한 말을 하게 만들 테니까☆',
      );
      era.printButton('「더 대단한 말……!?」', 1);
      await era.input();
      await ag.say_and_wait([
        '하아…… 그럼 ',
        callname_18,
        '의 이름으로 신청해 두겠다. 그 『대단한 말』로 소란은 피우지 마라.',
      ]);
    } else {
      await maya.say_and_wait('……응! 에헤헤, 마야 너무 기뻐.');
      await ag.say_and_wait([
        '그럼 ',
        callname_18,
        '의 이름으로 신청해 두겠다. 하아…… 그날 소란은 피우지 마라.',
      ]);
      era.drawLine();
      await maya.say_and_wait(
        '으음~~! 드디어 본 무대구나~ 의상 준비도 끝났고! 남은 건……',
      );
      era.printButton('「남은 건 마음가짐뿐이네」', 1);
      await era.input();
      await maya.say_and_wait(
        '그렇긴 한데, 가슴이 너무 두근거려서 도저히 진정이 안 돼! 완벽하게 준비를 마칠 수 있을 것 같지가 않아~~ 그래도……',
      );
      await maya.say_and_wait(
        '이건 마야가 그만큼 행복하다는 뜻이겠지! ……런웨이에선 최고의 모습을 보여줄게.',
      );
      await era.printAndWait(
        `${you.name}하고 ${maya.name}은 기운을 내서 런웨이로 발을 내디뎠다.`,
      );
    }
    return ret;
  },
  /**
   * @param {CharaTalk} maya マヤノトップガン
   * @param {CharaTalk} rice ライスシャワー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
   * @param {PrintedSpan} call_30 マヤノトップガンのライスシャワーへの呼び方
   * @param {string} self_call_30 ライスシャワーの自称
   * @param {PrintedSpan} r_call_m ライスシャワーのマヤノトップガンへの呼び方
   */
  async 89(maya, rice, you, callname, call_30, self_call_30, r_call_m) {
    await era.printAndWait(
      `${you.name}하고 ${maya.name}은 초대를 받아 어느 이벤트에 참가했다. 그 이벤트가 뭐냐 하면……`,
    );
    await maya.say_and_wait(
      '햇살이 엄청 눈부셔! 웨딩 이벤트를 하기에 딱 좋은 날씨네☆ 마야가 꼭 이번 이벤트를 성공시키고 말겠어~!',
    );
    era.printButton('「의욕이 넘치는데」', 1);
    await era.input();
    await maya.say_and_wait(
      '그야 마야가 모델로 뽑혔는걸! 얼른 웨딩드레스를 입고 모두의 시선을 사로잡고 싶어──',
    );
    await maya.say_and_wait('──어라? 이상하네? 저기서 기웃거리고 있는 건……');
    await maya.say_and_wait([
      '역시 ',
      call_30,
      '! 잘됐다~! 이 이벤트 보러 왔어?',
    ]);
    await rice.say_and_wait(
      `히야…… 네, 네…… 결혼식은 행복한 기분이 드니까…… ${self_call_30}도 계속 기대하고 있었어.`,
    );
    await rice.say_and_wait(`그래서 트레이닝을 일찍 마치고──`);
    await rice.say_and_wait(
      `꺄앗! 방, 방금 우르릉 소리가 났는데, ……비, 비가 와요!?`,
    );
    await era.printAndWait(
      `그때 갑자기 비가 내리기 시작했다. ${you.name}은(는) 지나가는 비라고 생각했지만……`,
    );
    await era.printAndWait(
      '촬영 스태프 「이거 큰일이군── 비가 그칠 기미가 안 보이는데? 강행할 수는 있지만, 손님이 하나도 없으니…… 일단 중지해야 하나……」',
    );
    await maya.say_and_wait('으으음~~~~~');
    await rice.say_and_wait(
      `죄…… 죄송해요…… 죄송해요! 비가 오는 건 분명 ${self_call_30} 때문이에요, 죄송해요!`,
    );
    await rice.say_and_wait(`${self_call_30}이(가) 와서……!`);
    era.printButton('「네 잘못이 아니야」', 1);
    await era.input();
    await maya.say_and_wait(
      '맞아! 그리고 이벤트가 중지된 것도 아닌걸. 빗물 따위가 마야의 눈부신 광채를 가릴 수는 없지!',
    );
    await maya.say_and_wait(
      '아니지! 오히려 빗물이 나를 더 빛나게 해줄 거야! 둘 다 거기서 딱 지켜봐 봐☆',
    );
    await maya.say_and_wait(
      '딩동──♪ 다들 오래 기다렸지☆ 마야의 퍼레이드로 이벤트의 막을 열어볼게~! ',
    );
    await era.printAndWait(
      '여성 팬 「마야 정말 귀여워~! 으으…… 날씨만 더 좋았어도 좋았을 텐데……!」',
    );
    await maya.say_and_wait(
      '빗방울도 마야한테는 장식품일 뿐이야♪ 이것 봐! 반짝반짝하지~☆',
    );
    await era.printAndWait(
      '남성 팬 「……!! 진짜네! 카메라 플래시를 받으니까 빗방울이 마치 스팽글처럼 보여……!」',
    );
    await maya.say_and_wait('그치♪ 하지만 이제부터가 진짜라구! ……3……2……1──');
    await maya.say_and_wait('햇님 등장──☆');
    await era.printAndWait('팬들 「와아아아아아아아!!」');
    await rice.say_and_wait([
      r_call_m,
      `, 대단해……! 다들 웃고 있어…… 마법에 걸린 것 같아……!`,
    ]);
    await maya.say_and_wait(
      '헤헤, 고마워☆ 옛날에 아빠가 구름의 종류랑 날씨가 맑아지는 타이밍을 보는 법을 가르쳐줬거든~',
    );
    await maya.say_and_wait('우리 아빠는 하늘을 누비는 파일럿이니까! 에헴!');
    era.printButton('「그래서 비를 이용한 연출을 할 수 있었던 거구나?」', 1);
    await era.input();
    await maya.say_and_wait(
      '정~답! 하지만 사실 날씨나 이벤트 내용은 상관없어. 제일 중요한 건──',
    );
    await maya.say_and_wait('마야가 모두의 태양이 되는 거야!');
    await maya.say_and_wait(
      '이 옷을 입었을 때 마음속으로 맹세했어. 나의 눈부신 빛으로 모두를 환하게 비춰주겠다고.',
    );
    await maya.say_and_wait(
      `그게 마야가 가장 되고 싶은── 어른 ${maya.phy_sex_title}인걸!`,
    );
    await rice.say_and_wait([
      '……! ……저, 저기, ',
      r_call_m,
      '도 모두도 반짝반짝 빛나고 있어.',
    ]);
    await rice.say_and_wait(
      `그걸 보니까 ${self_call_30}의 마음속도 빛나서, 더 열심히 해야겠다고 생각했어. 그러니까…… 고마워!`,
    );
    await maya.say_and_wait(
      '이벤트 정말 즐거웠어~! 하지만 이제부터가── 마야의 하이라이트! 불꽃놀이 쇼야!',
    );
    await maya.say_and_wait(
      '……원래는 제일 반짝이는 옷을 입고 같이 불꽃놀이를 보고 싶었는데. 비 때문에 다 버려버렸네.',
    );
    await maya.say_and_wait(`${callname} 함락 작전은 다음 기회로 미뤄야겠다☆`);
    era.println();

    era.printButton('「어떤 옷을 입어도 마야는 가장 눈부셔」 (관계 진전)', 1);
    era.printButton(
      '「다음에 또 모델을 할 수 있도록 계속 노력하자!」 (진전 보류)',
      2,
    );
    const ret = await era.input();
    if (ret === 1) {
      await maya.say_and_wait('……！！');
      await maya.say_and_wait(
        '마, 마야가…… 함락당했어…… 마야 방금 프러포즈 받았어~~~!',
      );
      era.printButton('「아직 프러포즈까진 안 했거든!?」', 1);
      await era.input();
      await maya.say_and_wait(
        '부끄러워할 필요 없어~! 영원히 곁에서 함께 달리겠다는 뜻이지, 그치?',
      );
      await maya.say_and_wait(
        '이제 트레이너의 태양은 영원히 마야인 거야☆ 난 절대 안 질 거니까~!',
      );
      await era.printAndWait([
        maya.get_colored_name(),
        '은 그렇게 말하며 기쁨에 겨운 미소를 지었다.',
      ]);
      await maya.say_and_wait(
        '예이예이~☆ 다들 응원해줘서 고마워! 마야는 정말 행복해~!',
      );
      await maya.say_and_wait(
        `앞으로도 ${callname}과 함께 모두에게 이 눈부신 빛을 전해주겠다고 맹세할게!`,
      );
      await maya.say_and_wait(`그치! ${callname}♪`);
      era.printButton('「!…… 물론이지, 나도 맹세할게!」', 1);
      await era.input();
      await era.printAndWait(
        '두 사람의 선언에 회장 안은 열광의 도가니가 되었다.',
      );
    } else {
      await maya.say_and_wait(
        '좋아! 다음은 물론이고, 다다음번에도 꼭 모델을 맡겠어. 이 옷이 점점 더 잘 어울리는 사람이 돼서, 그러고 나서──',
      );
      era.printButton('「그러고 나서?」', 1);
      await era.input();
      await maya.say_and_wait(
        '그── 그러고 나서…… 마야한테 이 옷이 정말 잘 어울리게 되면, ……그때…… 영원히…… 나랑…… 그러니까──',
      );
      await maya.say_and_wait(
        '꺄!? ──와, 와아! 불꽃놀이다! 저, 저것 좀 봐, 트레이너 쌤!',
      );
      await maya.say_and_wait(
        '……이제── 불꽃놀이도 다 봤으니까 집에 가자! 배도 고파졌고…… 그러니까……',
      );
      await maya.say_and_wait(
        '……꼭 들어줘! 언젠가 반드시 용기를 내서 방금 하려던 말을 끝까지 다 할 거야.',
      );
      await maya.say_and_wait('……기다려줘야 해!');
    }
    return ret;
  },
};
