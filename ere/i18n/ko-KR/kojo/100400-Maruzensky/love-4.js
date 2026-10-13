/**
 * @file マルゼンスキー - 恋慕
 * @author 黑奴一号
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   * @param {PrintedSpan} m_call_m マルゼンスキーのマヤノトップガンへの呼び方
   * @param {PrintedSpan} m_call_t マルゼンスキーのハヤカワタヅナへの呼び方
   * @param {string} y_call_m プレイヤーのマルゼンスキーへの呼び方
   */
  async 49(maru, you, callname, m_call_m, m_call_t, y_call_m) {
    await maru.print_and_wait('요즘은 뭔가 빠진 듯한 기분이 든다.');
    await maru.print_and_wait([
      maru.get_colored_name(),
      '는 고민에 빠져 있었다. 평소처럼 귀여운 후배들의 성장을 지켜보며, ',
      maru.couple_title,
      '이 자신을 따라잡기를 기대하고 있는데도.',
    ]);
    await maru.print_and_wait([
      callname,
      '하고 함께 트레이닝 성과도 확인했다. 그런데도 조금 기운이 없었다.',
    ]);
    await maru.print_and_wait([
      '그 모습은 ',
      callname,
      '의 눈에도 띄었다. 이유는 알 수 없지만 다음 레이스까지는 시간이 있으니, 당분간 트레이너가 지켜보기로 한 모양이다.',
    ]);
    await maru.print_and_wait([
      '평소 후배들을 잘 챙겨 준 덕분인지, ',
      maru.get_colored_name(),
      '가 요즘 고민이 있다는 소문은 ',
      maru.uma_sex_title,
      '들 사이의 작은 모임에서 은밀히 퍼지고 있었다.',
    ]);
    await maru.print_and_wait([
      '시간이 흐르자 ',
      m_call_t,
      '까지 몇 번이나 트레이너에게 ',
      maru.get_colored_name(),
      '의 상태를 물어 왔다.',
    ]);
    await maru.print_and_wait([
      '어느 날 카페테리아에서 이야기를 나누다가, ',
      m_call_m,
      '이(가) ',
      maru.get_colored_name(),
      '에게 연애에 관해 물었다.',
    ]);
    await maru.say_and_wait(['……그런 거였구나. 고마워, ', m_call_m, '。']);
    era.println();
    await maru.print_and_wait([
      maru.get_colored_name(),
      '는 트레이너를 향한 호감을 깨달았다.',
    ]);
    await maru.print_and_wait([callname, '을(를) 불러내야겠어.']);
    era.drawLine();
    await era.printAndWait([
      '어느 이른 아침, ',
      you.get_colored_name(),
      '이(가) 트레이너실에 들어가 신발장을 열자 연한 파란색 봉투가 들어 있었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 봉투를 살며시 집어 들었다. 촉감이 좋았고, 봉하지 않은 채 접힌 부분에 일부러 작은 틈을 남겨 두었다.',
    ]);
    await era.printAndWait('봉투를 열어 보니 안에는 딱 한 줄이 적혀 있었다.');
    await era.printAndWait([
      maru.elder_sibling_sex_title,
      '가 옥상에서 기다릴게~',
    ]);
    await era.printAndWait(
      '오시라면 열한 시부터 한 시 사이인가. 아무튼 우선 이 편지를 잘 넣어 두자.',
    );
    await era.printAndWait([
      '열한 시 정각, ',
      you.get_colored_name(),
      '은(는) 트레센 학원 옥상에 도착했다.',
    ]);
    await era.printAndWait([
      '옥상 가득 햇살이 내리쬐고, 산들바람이 ',
      you.get_colored_name(),
      '의 머리카락을 다정하게 쓰다듬었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 자신을 옥상으로 부른 수수께끼의 인물을 찾기 시작했다. 갑자기 옥상 문이 닫혔다.',
    ]);
    era.printButton('「카페가 말하던 심령 현상인가?」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 떨리는 손으로 문손잡이를 잡고 힘껏 열었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '의 예상과 달리 문은 열렸다.',
    ]);
    await era.printAndWait('옥상으로 이어지는 계단은 평소처럼 조용했다.');
    era.printButton('「대체 누구 장난이야?」', 1);
    await era.input();
    await era.printAndWait([
      '몇 초 만에 문을 닫고 사라질 수 있는 건 ',
      maru.uma_sex_title,
      '뿐이겠지.',
    ]);
    await era.printAndWait([
      '담당 트레이너를 찾으면서도 부끄러움을 타는 내성적인 ',
      maru.uma_sex_title,
      '를 만나게 된 걸까?',
    ]);
    await era.printAndWait([
      '익숙한 향기가 풍겨 와, ',
      you.get_colored_name(),
      '은(는) 여름의 기운을 떠올렸다.',
    ]);
    await era.printAndWait([
      '이 향기의 주인은 근처에 있는 듯했다. ',
      you.get_colored_name(),
      '은(는) 유일한 단서인 향기를 따라가기 시작했다.',
    ]);
    await era.printAndWait([
      '하지만 결과는 실망스러웠다. ',
      you.get_colored_name(),
      '은(는) 옥상을 샅샅이 뒤졌지만 향기의 주인을 찾을 수 없었다.',
    ]);
    era.printButton('「설마?!」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 옥상의 물탱크로 시선을 돌렸다. 그 위에 ',
      maru.uma_sex_title,
      '가 앉아 있었다.',
    ]);
    await era.printAndWait([
      '하얀 원피스를 입고 다정한 표정으로 운동장의 ',
      maru.uma_sex_title,
      '들을 내려다보고 있었다.',
    ]);
    era.printButton(`${y_call_m}？`, 1);
    await era.input();
    await maru.say_and_wait([callname, ', 이제야 찾아 줬네.']);
    era.printButton('「그렇게 다리를 꼬고 있으면 치마 속이 보이겠는데?」', 1);
    await era.input();
    await maru.say_and_wait('꺅! 변태! 치한! 야해!');
    await era.printAndWait([
      maru.get_colored_name(),
      '는 황급히 치맛자락을 누르고 물탱크에서 옥상 바닥으로 뛰어내렸다.',
    ]);
    await maru.say_and_wait([
      '좀 더 ',
      maru.elder_sibling_sex_title,
      '다운 모습을 보여 주고 싶었는데, ',
      callname,
      '도 참, 그렇게 야한 생각을 하다니.',
    ]);
    era.printButton('「날씨도 좋은데 여기서 점심 먹으면서 회의할까?」', 1);
    await era.input();
    await maru.say_and_wait('으음~ 좋은 생각이지만, 더 중요한 일이 먼저야.');
    await maru.say_and_wait(['……', callname, ', 나랑 데이트하지 않을래?']);
    era.printButton('「데이트할 때 좀 더 다정하게 대해 준다면 좋지」', 1);
    await era.input();
    await maru.say_and_wait('응! 그럼 결정이네!');
    await era.printAndWait([
      maru.get_colored_name(),
      '는 얼굴을 새빨갛게 물들이고 ',
      you.get_colored_name(),
      '을(를) 바라보고 있었다.',
    ]);
    await era.printAndWait(
      '이 새로운 감정은 땅에 심은 씨앗처럼 무럭무럭 싹을 틔울 것이다.',
    );
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   * @param {PrintedSpan} m_call_t マルゼンスキーのハヤカワタヅナへの呼び方
   */
  async '74-1'(maru, you, callname, m_call_t) {
    await maru.say_and_wait([
      callname,
      ', 이번에는 수영장 데이트를 해 보는 게 어때?',
    ]);
    await era.printAndWait([
      maru.get_colored_name(),
      '는 소파에 누워 손에 든 만화를 보다가, 다음 트레이닝 계획을 짜고 있던 ',
      you.get_colored_name(),
      '에게 제안했다.',
    ]);
    await era.printAndWait([
      '옥상에서 ',
      maru.get_colored_name(),
      '의 데이트 신청을 받아들인 뒤로 두 사람의 거리는 더욱 가까워졌다.',
    ]);
    await era.printAndWait([
      '한가롭게 잡담하거나 하루 일정을 소화하는 동안, ',
      you.get_colored_name(),
      '은(는) ',
      maru.sex,
      '가 전보다 ',
      you.get_colored_name(),
      '을(를) 더 신경 쓰고 있다는 느낌을 받았다.',
    ]);
    era.printButton('「왜 하필 수영장이야?」', 1);
    await era.input();
    await maru.say_and_wait([
      '순정만화에 그렇게 나오거든. 주인공이 학원에 입학한 뒤, 자기를 좋아하는 멋진 트레이너를 만나.',
    ]);
    await maru.say_and_wait(
      '그런데 같은 팀의 명문가 아가씨도 트레이너를 좋아하는 거야. 정작 트레이너의 시선은 주인공을 향해 있지만.',
    );
    await maru.say_and_wait(
      '명문가 아가씨는 소꿉친구이자 약혼자라는 자존심 때문에 주인공에게 사츠키상에서 승부하자고 도전해.',
    );
    await maru.say_and_wait(
      '명문가의 압도적인 실력 앞에서, 주인공은 트레이너의 격려를 받으며 수영장 특훈을 시작하지.',
    );
    await maru.say_and_wait(
      '원래 서로에게 호감이 있던 두 사람에게 수영장에서 두근두근한 사고가! 마지막에는 수영장 한가운데서 키스하는 거야.',
    );
    await era.printAndWait([
      maru.sex,
      '는 소파에서 몸을 일으켜 손에 든 순정만화를 가리켰다.',
    ]);
    await maru.say_and_wait([callname, ', 로맨틱하지 않아?']);
    era.printButton('「나쁘지 않네」', 1);
    await era.input();
    await maru.say_and_wait('그렇지~? 그러니까 내일은 수영장에서 데이트하자.');
    era.printButton('「너무 이르면 수영장이 안 열지 않아?」', 1);
    await era.input();
    await maru.say_and_wait([
      '이따 ',
      m_call_t,
      '한테 말해 둘 테니까, 그건 걱정하지 마.',
    ]);
    era.printButton(
      `데이트가 길어지면 ${maru.uma_sex_title}들이 오지 않을까?`,
      1,
    );
    await era.input();
    await maru.say_and_wait([
      '이른 아침에는 ',
      maru.uma_sex_title,
      '들이 아침 달리기를 하고, 내일 수영 수업은 열 시가 되어야 시작하거든.',
    ]);
    await maru.say_and_wait([callname, ', 더 궁금한 건 없어?']);
    era.printButton('「지금은 없어」', 1);
    await era.input();
    await maru.say_and_wait([
      '그럼 결정! 이렇게 다정한 ',
      maru.elder_sibling_sex_title,
      '하고 데이트하게 됐다고, ',
      callname,
      ', 밤에 너무 설레서 잠 못 자는 건 아니지?♪',
    ]);
    await era.printAndWait([
      maru.get_colored_name(),
      '는 ',
      you.get_colored_name(),
      '의 머리를 쓰다듬고 트레이닝실을 나섰다. ',
      you.get_colored_name(),
      '은(는) 내일 데이트가 무척 기대되었다.',
    ]);
  },
  /**
   * マルゼンスキーがプールでトレーナーを待った
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   * @param {string} y_call_m プレイヤーのマルゼンスキーへの呼び方
   */
  async '74-2'(maru, you, callname, y_call_m) {
    await you.say_and_wait('물이 아직 차갑네.');
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 수영장 가장자리에 한쪽 무릎을 꿇고 앉아 손을 넣어 보았다. 물이 서늘했다.',
    ]);
    await era.printAndWait([
      '아침 여섯 시. 성급한 태양이 땅을 비추고 있지만, 아침 수영장에는 인기척이 전혀 없었다. 이곳에 있는 건 ',
      you.get_colored_name(),
      '와(과) 친구 이상 연인 미만인 ',
      maru.get_colored_name(),
      '뿐이었다.',
    ]);
    await era.printAndWait(
      '두 사람의 거리를 좁히려 애쓰고는 있지만, 여러 사정 탓에 이 감정은 좀처럼 뜨거워지지 않았다.',
    );
    await maru.say_and_wait([callname, ', 이쪽 봐⭐']);
    await era.printAndWait([
      maru.get_colored_name(),
      '는 수영복으로 갈아입고 ',
      you.get_colored_name(),
      '에게 손을 흔들며, 팔다리를 움직여 준비 운동을 하고 있었다.',
    ]);
    await era.printAndWait(
      '몸의 곡선을 돋보이게 하는 수영복이 새파란 수면에 은빛 윤곽을 비추고 있었다.',
    );
    await maru.say_and_wait('응, 이렇게 조용한 분위기도 나쁘지 않네.');
    await era.printAndWait([
      '얼마 전 ',
      maru.get_colored_name(),
      '는 ',
      you.get_colored_name(),
      '을(를) 옥상으로 불러내, 마침내 두 사람의 관계를 확인했다.',
    ]);
    await maru.say_and_wait(
      '드디어 우리 둘만의 공간이네. 이렇게 이른 아침이면 테이오 일행도 아직 자고 있겠지?',
    );
    await maru.say_and_wait([callname, '♪ 들어와서 같이 수영하지 않을래?']);
    await era.printAndWait([
      maru.get_colored_name(),
      '는 수영장 한가운데서 ',
      you.get_colored_name(),
      '을(를) 부르고 있었다.',
    ]);
    await era.printAndWait([
      '평범한 인간에게는 애매한 수온이어도, 사람보다 체온이 조금 높은 ',
      maru.uma_sex_title,
      '에게는 딱 좋을지도 모른다.',
    ]);
    await maru.say_and_wait([callname, '! 들어와서 같이 수영하지 않을래?']);
    await era.printAndWait([
      maru.get_colored_name(),
      '의 부름이 ',
      you.get_colored_name(),
      '의 생각을 끊었다.',
    ]);
    era.printButton('「여기서 보고 있으니 눈이 즐겁네」(관계 진전)', 1);
    era.printButton('급한 일이 생각났다(관계 진전 중지)', 2);
    const ret = await era.input();
    if (ret === 1) {
      await maru.say_and_wait([
        callname,
        ', 야해~ 그래도 솔직한 ',
        callname,
        '도 좋아♪',
      ]);
      await era.printAndWait([
        maru.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '을(를) 향해 손키스를 보내고 머리부터 물속으로 잠수했다.',
      ]);
      await era.printAndWait([
        '바닥까지 투명하게 보이는 물속에서 ',
        maru.sex,
        '는 물고기처럼 즐겁게 헤엄쳤다.',
      ]);
      era.printButton(`${y_call_m}, 수영 잘하네.`, 1);
      await era.input();
      await era.printAndWait([
        maru.sex,
        '가 수면 위로 올라와 다음 목표를 향해 나아가려던 순간, ',
        maru.sex,
        '의 몸이 갑자기 굳었다.',
      ]);
      era.printButton('「다리에 쥐가 난 건가?」', 1);
      await era.input();
      await era.printAndWait([
        '지금은 생각할 여유가 없다. ',
        you.get_colored_name(),
        '은(는) 재빨리 수영장에 뛰어들어, 필사적으로 머리를 내밀고 허우적거리는 ',
        maru.sex,
        '를 향해 헤엄쳤다.',
      ]);
      era.printButton('「기다려, 지금 갈게!」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '도 수영을 잘하는 편은 아니었지만, 그래도 온 힘을 다해 ',
        maru.sex,
        '를 향해 헤엄쳤다.',
      ]);
      era.printButton('「!?」', 1);
      await era.input();
      await maru.say_and_wait([callname, ', 괜찮아.']);
      await era.printAndWait(['아무래도 ', maru.sex, '에게 속은 모양이다.']);
      await maru.say_and_wait('……미안해. 조금 지나쳤을까?');
      await era.printAndWait('이런 장난은 너무 심하다.');
      await maru.say_and_wait([
        '정말 미안해. 하지만 ',
        callname,
        ', 드디어 들어왔네. 이쪽에서 보면 분위기도 나쁘지 않지?',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        maru.get_colored_name(),
        '가 무사하다는 걸 알고서야 한숨을 돌렸다. 분위기는 둘째 치고, 이 고요함만큼은 확실히 드물었다.',
      ]);
      await era.printAndWait(
        '아까의 소동으로 거세게 출렁이던 수면도 이제 잔잔해졌다.',
      );
      era.printButton('「추워」', 1);
      await era.input();
      await era.printAndWait([
        maru.uma_sex_title,
        '에게 알맞은 수온이라도 평범한 인간에게는 여전히 차가웠다.',
      ]);
      await maru.say_and_wait([
        '그럼 ',
        maru.elder_sibling_sex_title,
        '가 따뜻하게 해 줄까?',
      ]);
      era.printButton('「싫어」', 1);
      await era.input();
      await era.printAndWait([
        maru.get_colored_name(),
        '는 대답도 기다리지 않고 아직 토라져 있던 ',
        you.get_colored_name(),
        '을(를) 껴안았다. 「애초에 전부 ',
        maru.get_colored_name(),
        ' 때문이잖아?」 그렇게 생각하면서도, ',
      ]);
      await era.printAndWait([
        maru.sex,
        '의 체온이 느껴지는 순간 불만은 말끔히 사라졌다.',
      ]);
      await maru.say_and_wait(
        '이렇게 얼굴이 빨개지는 분위기인데, 아무것도 안 할 거야?',
      );
      await era.printAndWait([
        maru.get_colored_name(),
        '가 보내는 신호는 이미 분명했다. ',
        you.get_colored_name(),
        '도 ',
        maru.sex,
        '의 목에 팔을 두르고 천천히 ',
        maru.sex,
        '의 얼굴로 다가갔다.',
      ]);
      await maru.say_and_wait('만화 속 전개랑 똑같네♪');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 혀를 ',
        maru.sex,
        '의 입 안으로 밀어 넣었고, ',
        maru.sex,
        '도 별다른 저항 없이 그 불만을 다정하게 받아 주었다.',
      ]);
      await era.printAndWait(
        '수영장 물은 여전히 차가웠지만, 두 사람의 주변만큼은 봄처럼 따뜻했다.',
      );
      await maru.say_and_wait([
        '우리 집 옆에 한동안 쓰지 않은 빈방이 있거든. ',
        callname,
        '？',
      ]);
      await era.printAndWait([
        '입술을 뗀 뒤, 두 사람은 수영장에서 나와 마른 수건으로 몸을 닦고 있었다. 그때 ',
        maru.get_colored_name(),
        '가 갑자기 ',
        you.get_colored_name(),
        '에게 제안했다.',
      ]);
      era.printButton('「그럼 앞으로 잘 부탁해」', 1);
      await era.input();
      await era.printAndWait([
        '나야말로 잘 부탁해. ',
        callname,
        ', 오늘 밤에 짐 옮겨 와♪',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        maru.get_colored_name(),
        '와 동거를 시작했다.',
      ]);
    } else {
      await maru.say_and_wait([callname, ', 짓궂어! 그럼 먼저 혼자 수영할게.']);
      era.drawLine();
      await era.printAndWait('따르릉, 따르릉!!!');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 자명종 소리에 잠에서 깼다. 이상한 꿈을 꾼 모양이었다.',
      ]);
      era.printButton('「오늘 트레이닝 계획이나 세워 볼까」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 하품을 하며 아까의 이상한 꿈을 잊으려 했다.',
      ]);
      await maru.say_as_unknown_and_wait('계속 망설이다가는 결국 후회할 거야.');
      await era.printAndWait([
        '마음속의 또 다른 목소리가 ',
        you.get_colored_name(),
        '에게 속삭였다.',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   * @param {PrintedSpan} m_call_t マルゼンスキーのハヤカワタヅナへの呼び方
   */
  async '89-1'(maru, you, callname, m_call_t) {
    await maru.say_and_wait(
      '네가 해 준 그 말이 좋아. 「바람을 쫓는 마루젠스키는 정말 즐거워 보여」라고 했지.',
    );
    await maru.say_and_wait(
      '정말 못 말리겠어. 나보다 나이도 많으면서, 행동은 고등학생 같잖아.',
    );
    await maru.say_and_wait([
      '……하지만 그래서 ',
      callname,
      '이(가) 더 귀여운 거야.',
    ]);
    await maru.say_and_wait([
      '처음 만났을 때는 네가 나보다 몇 살 어린 ',
      you.younger_sibling_sex_title,
      ' 같았어.',
    ]);
    await maru.say_and_wait(
      '그래서 나도 모르게 껴안고 머리를 쓰다듬었지. 얼굴이 새빨개진 걸 보고서야 손을 뗐어.',
    );
    await maru.say_and_wait('미안하다고 생각은 했지만 사과는 안 할 거야. 흥~');
    await maru.say_and_wait(
      '네가 들뜬 얼굴로 내가 달릴 때 짓는 미소에 관해 이야기해 줬을 때, 정말 기뻤어.',
    );
    await maru.say_and_wait([
      '계약한 날 밤에는 ',
      m_call_t,
      '을(를) 근처 바에 불러서 축하했지.',
    ]);
    await maru.say_and_wait(['한껏 들떠서 네 이야기를 했더니,']);
    await maru.say_and_wait([
      '「잘 맞는 트레이너를 만난 모양이네.」 잔을 흔들며 ',
      maru.sex,
      '는 취기 어린 목소리로 맞장구쳤어.',
    ]);
    await maru.say_and_wait(
      '「레이스의 영광보다 바람을 즐기는 게 더 좋아.」 말은 그렇게 했지만,',
    );
    await maru.say_and_wait(
      '마음속으로는 네가 내 등을 따라잡을 수 있을지 조용히 기대했어.',
    );
    await maru.say_and_wait('처음 트레이닝을 할 때는 정말 긴장했더라.');
    await maru.say_and_wait('트레이너 정장까지 차려입고 악수도 했지.');
    await maru.say_and_wait('……위에서 두 번째 단추가 잘못 채워져 있었어.');
    await maru.say_and_wait(
      '그걸 알려 주니까 허둥지둥 단추를 풀면서 얼굴이 새빨개졌지.',
    );
    await maru.say_and_wait([
      '몇 살 어린 ',
      you.younger_sibling_sex_title,
      '이 눈앞에 서서 「',
      maru.elder_sibling_sex_title,
      ', 나도 이제 어른이야」라고 말하는 것 같았어.',
    ]);
    await maru.say_and_wait([
      '그렇게 귀여운 ',
      you.younger_sibling_sex_title,
      '의 머리를 쓰다듬으며 격려해 주지 않으면 아깝잖아.',
    ]);
    await maru.say_and_wait([
      '어머, 또 나도 모르게 ',
      you.younger_sibling_sex_title,
      ' 취급을 해 버렸네.',
    ]);
    await maru.say_and_wait('그 뒤로 우리는 목표를 하나씩 이루어 나갔어.');
    await maru.say_and_wait('어느새 너는 지금 내 옆방에서 살고 있네.');
    await maru.say_and_wait('매일 아침 깨우는 것도 내 일과가 되었지.');
    await maru.say_and_wait('응, 응, 대답만 하고는 다시 뒤척이며 자려고 하면,');
    await maru.say_and_wait('「이제 일어날 시간이야.」');
    await maru.say_and_wait('항의는 무시하고 너와 이불을 억지로 떼어 놓지.');
    await maru.say_and_wait('네가 하품하면서 오늘의 계획을 시작할 때면,');
    await maru.say_and_wait('산들바람이 내 마음을 어루만지는 것 같아.');
    await maru.say_and_wait('매일매일 날씨가 맑아.');
    await maru.say_and_wait('트레이닝할 때도 마찬가지야.');
    await maru.say_and_wait('매번 내 모습에 마음을 빼앗기지.');
    await maru.say_and_wait(
      '긴장하면서 매번 기록을 재고, 한계에 하나씩 도전해.',
    );
    await maru.say_and_wait('내가 이전 기록을 깰 때마다 어린애처럼 기뻐하지.');
    await maru.say_and_wait(
      '그 천진난만한 표정……껴안고 머리를 쓰다듬어 주고 싶어져.',
    );
    await maru.say_and_wait('바람이 멎을 때도 있었어.');
    await maru.say_and_wait(
      '트레이닝에 실패해서 다치고, 부축받아 보건실로 갔을 때.',
    );
    await maru.say_and_wait(
      '네가 곁에서 요즘 학원에서 있었던 재미있는 이야기를 하며 아픔을 잊게 해 주려 했을 때.',
    );
    await maru.say_and_wait(
      '지루한 시간은 애차가 추월한 차처럼 흔적도 없이 사라졌어.',
    );
    await maru.say_and_wait(
      '새해 인사, 팬 감사제의 축복, 함께 본 노을, 크리스마스의 약속.',
    );
    await maru.say_and_wait(
      '보이지 않는 리본처럼 너와 나를 단단히 이어 주었지.',
    );
    await maru.say_and_wait([
      '어느새 ',
      callname,
      '도 돌봐 줘야 하는 ',
      you.younger_sibling_sex_title,
      '에서 믿음직한 어른이 되었네.',
    ]);
    await maru.say_and_wait(
      '보석처럼 빛나는 이 기억들을 나는 언제까지나 소중히 간직할 거야.',
    );
    await maru.say_and_wait('……이제는 마음속 이 감정을 마주해야겠네.');
    await maru.say_and_wait([
      '나도 ',
      maru.elder_sibling_sex_title,
      '로서 자부심이 있어. 후배들에게 유행과 ',
      maru.elder_sibling_sex_title,
      '의 지혜를 나눠 주고 있지.',
    ]);
    await maru.say_and_wait([
      '하지만 가장 좋아하고 또 좋아하는 ',
      callname,
      ' 앞에서는 안 돼!',
    ]);
    await maru.say_and_wait(
      '유행은 끊임없이 바뀌어. 하지만 이렇게 귀여운 트레이너는 단 한 명뿐이야.',
    );
    await maru.say_and_wait(['그럼 슬슬 ', callname, '을(를) 불러내야겠네.']);
    await maru.say_and_wait([
      callname,
      '이(가) 나를 좋아하든 아니든, 나는 언제까지나 네가 좋아.',
    ]);
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   * @param {string} y_call_m プレイヤーのマルゼンスキーへの呼び方
   */
  async '89-2'(maru, you, callname, y_call_m) {
    await era.printAndWait([
      you.get_colored_name(),
      '와(과) ',
      maru.get_colored_name(),
      '의 동거 생활도 어느덧 꽤 오래되었다.',
    ]);
    await era.printAndWait('일어나서 밥을 먹고 함께 학원으로 간다.');
    await era.printAndWait(
      '나서기 전에 서로 옷매무새를 확인하고, 차를 타고 함께 학원에 도착한다.',
    );
    await era.printAndWait([
      maru.sex,
      '가 수업을 듣는 동안, ',
      you.get_colored_name(),
      '은(는) 다음 레이스에 맞춰 오후 트레이닝 메뉴를 짠다. 막히는 부분이 있으면 더 경험 많은 트레이너에게 물어보기도 한다.',
    ]);
    await era.printAndWait([
      '옥상은 이제 ',
      you.get_colored_name(),
      ' 일행이 말하지 않아도 모이는 장소가 되었다. ',
      you.get_colored_name(),
      '이(가) 옥상으로 향하는 마지막 계단을 밟을 때쯤이면, 교복을 입은 ',
      maru.get_colored_name(),
      '는 이미 그곳에서 ',
      you.get_colored_name(),
      '을(를) 기다리고 있다.',
    ]);
    await era.printAndWait([
      '날씨가 좋은 날에는 운동장에 모인 ',
      maru.uma_sex_title,
      '들을 내려다보며 오늘 학원에서 있었던 재미있는 이야기를 나눈다.',
    ]);
    await era.printAndWait(
      '비가 계속 오는 날에는 트레이닝실 소파에 기대어 서로 몸을 기댄다.',
    );
    await era.printAndWait([
      '황혼의 마지막 햇살이 ',
      maru.get_colored_name(),
      '의 옷자락에 닿을 때쯤, ',
      you.get_colored_name(),
      '은(는) 마지막 서류를 정리하고 문밖에서 오래 기다리던 ',
      maru.sex,
      '와 함께 아파트로 돌아간다.',
    ]);
    await era.printAndWait([
      '밤에는 쏴아 하는 물소리와 텔레비전 속 코미디언의 웃음소리를 들으며, ',
      you.get_colored_name(),
      '은(는) 볶은 요리를 접시에 담는다.',
    ]);
    await era.printAndWait([
      '간단한 식사 인사를 나눈 뒤, ',
      you.get_colored_name(),
      '은(는) 말없이 ',
      maru.sex,
      '의 조금은 자랑스러운 이야기를 듣는다. 테이오와 ',
      maru.couple_title,
      '이 곧 ',
      maru.sex,
      '를 뛰어넘을 거라는 이야기를 들으며 무를 입으로 가져간다.',
    ]);
    await era.printAndWait([
      '잘 자라는 인사를 나눈 뒤, ',
      you.get_colored_name(),
      '은(는) 같은 방에서 자고 싶어 하는 ',
      maru.get_colored_name(),
      '를 어떻게든 제 방으로 돌려보낸다.',
    ]);
    await era.printAndWait([
      '불을 끄기 전에는 ',
      maru.get_colored_name(),
      '가 ',
      you.get_colored_name(),
      '에게 추천한 순정만화를 몇 쪽 읽고 잠든다.',
    ]);
    await era.printAndWait(
      '평온한 나날은 맑은 하늘에 뜬 흰 구름 같았다. 구름이 정처 없이 흘러가는 동안 시간마저 느려졌다.',
    );
    await maru.say_and_wait([
      callname,
      ', 이번 일요일에 바다에 갈래? 바다에서 논 지도 오래됐네.',
    ]);
    await era.printAndWait([
      '어느 날 저녁을 먹다가 ',
      maru.sex,
      '가 ',
      you.get_colored_name(),
      '에게 바다에 가고 싶다고 부탁했다.',
    ]);
    era.printButton('「바다라. 오랜만이네」', 1);
    await era.input();
    await maru.say_and_wait(
      '지난번에는 여름 합숙 때 이사장님 쪽 해변으로 갔었지. 하지만 이번에는 너랑 나, 둘만 가고 싶어.',
    );
    era.printButton('「일요일에는 별일 없어. 그럼 같이 가자」', 1);
    await era.input();
    await maru.say_and_wait('잘됐다♪ 그럼 나도 바다에 갈 준비를 할게.');
    era.printButton(
      `（${y_call_m}이(가) 저렇게 천진난만한 표정을 짓는 건 이럴 때뿐이네.)`,
      1,
    );
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 마지막 채소를 입에 넣으며 그렇게 생각했다.',
    ]);
    era.println();
    await era.printAndWait([
      '시간은 ',
      you.get_colored_name(),
      '와(과) ',
      maru.get_colored_name(),
      '의 기대 속에서 빠르게 흘러, 어느새 일요일이 되었다.',
    ]);
    await era.printAndWait([
      '애차를 몰고 달린 덕분에 ',
      you.get_colored_name(),
      '은(는) 예정보다 일찍 도착했다.',
    ]);
    await era.printAndWait(
      '관광 성수기는 아니었지만, 이 해변에는 여전히 소문을 듣고 찾아온 손님들이 많았다.',
    );
    await maru.say_and_wait([callname, ', 이 차림은 어때?']);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      maru.get_colored_name(),
      '가 들고 있던 가방을 받아 안에 든 비키니를 보았다.',
    ]);
    await maru.say_and_wait('해변의 시선이 전부 나한테 쏠리겠네.');
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      maru.get_colored_name(),
      '의 수영복 차림을 상상하니 묘하게 기대되었다.',
    ]);
    await maru.say_and_wait([callname, ', 모래사장에서 만나자.']);
    await era.printAndWait([
      '탈의실 앞에서 ',
      you.get_colored_name(),
      '은(는) 잠시 ',
      maru.get_colored_name(),
      '와 헤어졌다.',
    ]);
    era.println();
    await maru.say_and_wait(['짜잔♪ ', callname, ', 이 차림 어때?']);
    // Do not translate this
    era.printWholeImage('姥爷_泳_半身', {
      width: 8,
      offset: 8,
    });
    await era.printAndWait([
      maru.get_colored_name(),
      '는 뽐내듯이 ',
      you.get_colored_name(),
      '을(를) 바라보고 있었다.',
    ]);
    era.printButton('「왠지 마음에 안 드는데」', 1);
    await era.input();
    await maru.say_and_wait([
      callname,
      '은(는) 이렇게 멋진 ',
      maru.sex_code === 1 ? '남자친구' : '여자친구',
      '를 독차지하고 싶은 거지♪ 흐흥.',
    ]);
    await era.printAndWait(
      '사람이 적은 곳에 파라솔을 세웠다. 오늘 날씨는 유난히 쾌적했다.',
    );
    await maru.say_and_wait([
      callname,
      ', 자외선 차단제 발라 줄래? 바구니 안에 있어.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 바구니에서 자외선 차단제를 꺼내 손에 덜고, ',
      maru.sex,
      '의 등에 골고루 발랐다.',
    ]);
    await maru.say_and_wait('고마워.');
    await era.printAndWait([
      '잘게 움직이는 귀가 음악의 리듬에 맞춰 박자를 타고 있었다. ',
      you.get_colored_name(),
      '은(는) 갑자기 ',
      maru.sex,
      '에게 장난을 치고 싶어졌다.',
    ]);
    era.printButton(
      `${maru.sex}의 귀에 살며시 다가가 큰 소리를 낸다(관계 진전 중지)`,
      1,
    );
    era.printButton('……아니, 그만두자(관계 진전)', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 살며시 ',
        maru.sex,
        '의 귀로 다가갔다. 무슨 일이 일어날지 모르는 ',
        maru.sex,
        '는 왜 손이 멈췄는지 의아해하고 있었다.',
      ]);
      era.printButton('「와!」', 1);
      await era.input();
      await maru.say_and_wait('꺅!');
      await era.printAndWait([
        maru.get_colored_name(),
        '는 깜짝 놀라 몸을 움찔했고, 한참 뒤에야 정신을 차렸다.',
      ]);
      await maru.say_and_wait([callname, '！']);
      await era.printAndWait([
        maru.get_colored_name(),
        '는 심호흡하며 마음을 진정시키려 했다.',
      ]);
      era.printButton(
        `${y_call_m}의 귀가 매력적으로 보여서, 나도 모르게 장난치고 싶어졌어.`,
        1,
      );
      await era.input();
      await maru.say_and_wait([
        '하아~ ',
        callname,
        '도 어린애 같다니까. 다른 사람한테도 이러는 거야?',
      ]);
      era.printButton('「너한테만 그래」', 1);
      await era.input();
      await maru.say_and_wait(
        '그럼 내가 첫 희생자라는 걸 영광으로 여겨야 하나?',
      );
      era.printButton('「아, 아니야. 내 말 좀 들어 봐」', 1);
      await era.input();
      await maru.say_and_wait('나도 방금 얼마나 놀랐는지 맛보여 주겠어!');
      era.printButton('「으아아아아아!」', 1);
      await era.input();
      await era.printAndWait([
        '그 후 ',
        maru.sex,
        '가 완전히 기분을 풀기까지는 꽤 오랜 시간이 걸렸다.',
      ]);
    } else {
      await era.printAndWait([
        '두 가지 생각이 치열하게 다툰 끝에, ',
        you.get_colored_name(),
        '은(는) 장난을 포기하고 ',
        maru.get_colored_name(),
        '를 마사지하는 데 집중했다.',
      ]);
      await era.printAndWait('습기를 머금은 바람이 바다에서 육지로 불어왔다.');
      await era.printAndWait(
        '모래사장에 미련이라도 남은 듯 좀처럼 떠나지 않았다.',
      );
      await maru.say_and_wait(['바람이 멎었네, ', callname, '。']);
      await era.printAndWait([
        maru.get_colored_name(),
        '는 오랫동안 바다를 바라보았다.',
      ]);
      await maru.say_and_wait('……해가 지고 나면 달도 떠오르겠지.');
      await era.printAndWait(['갑자기 ', maru.sex, '가 입을 열었다.']);
      era.printButton(
        '「해가 뜨든 달이 지든, 바람은 살며시 춤을 추기 시작하지」',
        1,
      );
      await era.input();
      await maru.say_and_wait(['……', callname, ', 조금 더 가까이 가도 돼?']);
      await era.printAndWait([
        maru.get_colored_name(),
        '는 몸의 무게를 온전히 ',
        you.get_colored_name(),
        '의 품에 맡겼고, ',
        you.get_colored_name(),
        '은(는) ',
        maru.sex,
        '의 손을 꼭 잡았다.',
      ]);
      await era.printAndWait(
        '두 사람은 말없이 달이 하늘 한가운데까지 떠오르는 것을 바라보았다.',
      );
    }
    return ret;
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   * @param {string} y_call_m プレイヤーのマルゼンスキーへの呼び方
   */
  async 99(maru, you, callname, y_call_m) {
    await era.printAndWait([
      you.get_colored_name(),
      '와(과) ',
      maru.get_colored_name(),
      '는 수많은 어려움을 겪은 끝에 마침내 서로의 마음을 확인했다.',
    ]);
    await era.printAndWait([
      maru.get_colored_name(),
      '에게서 관청에 제출할 서류를 받아, 각자 기입할 칸에 소중히 이름을 적었다.',
    ]);
    await era.printAndWait(
      '결혼식 날짜와 시간을 정한 뒤에는 관례대로 한동안 만나지 않기로 했다.',
    );
    await era.printAndWait([
      '결혼식 전날 밤, ',
      you.get_colored_name(),
      '은(는) 도무지 잠들 수 없어 머리맡에 있던 ',
      you.get_colored_name(),
      '와(과) ',
      maru.sex,
      '의 사진첩을 집어 들었다.',
    ]);
    await you.say_and_wait(
      '이건 메이크 데뷔에서 우승하고 사이제리야에서 축하할 때 찍은 사진이네.',
      true,
    );
    await era.printAndWait([
      '휴대전화에 서툰 ',
      maru.sex,
      '는 사진으로 ',
      you.get_colored_name(),
      '와(과) ',
      maru.sex,
      '의 추억을 남기는 쪽을 더 좋아했다. ',
      you.get_colored_name(),
      '은(는) 두 번째 장을 펼쳤다.',
    ]);
    await you.say_and_wait(
      [maru.sex, ' 대신 모터쇼에서 애차 모형을 받아 왔을 때 찍은 사진이네.'],
      true,
    );
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 고개를 들어 선반 위의 애차 모형을 힐끗 바라본 뒤 다음 장으로 넘겼다.',
    ]);
    await you.say_and_wait(
      '이건 트레이닝에 실패해서 의무실에 갔을 때 찍은 사진이네.',
      true,
    );
    await era.printAndWait([
      maru.get_colored_name(),
      '는 옆에서 흘러나오는 추억의 노래를 들으며 쉬고 있었고, ',
      maru.sex,
      '의 귀는 음악의 리듬에 맞춰 박자를 타고 있었다.',
    ]);
    await you.say_and_wait(
      [
        '그때 ',
        maru.sex,
        '는 아직 ',
        maru.elder_sibling_sex_title,
        '다운 모습을 내려놓지 못했던 걸까.',
      ],
      true,
    );
    await era.printAndWait([
      '묘하게 초조해진 ',
      you.get_colored_name(),
      '은(는) 사진첩을 팔락팔락 넘기다가, 마침내 ',
      you.get_colored_name(),
      '와(과) ',
      maru.sex,
      '가 여름 합숙 때 찍은 사진에서 멈췄다.',
    ]);
    await you.say_and_wait(
      [maru.sex, '는 그때 이미 나를 꽤 가까운 사람으로 여기고 있었던 걸까.'],
      true,
    );
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      you.get_colored_name(),
      '이(가) ',
      maru.sex,
      '에게 팔을 잡혀 억지로 함께 찍었던 사진을 보았다. 당황한 ',
      you.get_colored_name(),
      '와(과) ',
      maru.sex,
      '의 미소가 선명하게 대비되었다.',
    ]);
    await you.say_and_wait('이상한 소문이 나지 않게 하느라 정말 애썼지.', true);
    await era.printAndWait('한숨을 쉬고 기분 좋게 다음 장을 넘겼다.');
    await era.printAndWait([
      '겨울옷을 입은 ',
      you.get_colored_name(),
      '와(과) ',
      maru.sex,
      '가 이곳에서 그리 멀지 않은 산에서 찍은 사진이었다.',
    ]);
    await you.say_and_wait(
      [
        '그때 ',
        maru.sex,
        '와 내년 크리스마스에는 자작나무 가로수 길을 걷자고 약속했지.',
      ],
      true,
    );
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 다음 장을 넘기려던 순간이었다.',
    ]);
    await era.printAndWait('똑똑똑.');
    era.printButton(`${y_call_m}?!`, 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 문을 열자 평상복 차림의 ',
      maru.sex,
      '가 서 있었다.',
    ]);
    await maru.say_and_wait('이렇게 좋은 밤인데, 함께 드라이브하자.');
    era.printButton('「응, 가자」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      maru.get_colored_name(),
      '의 손을 꼭 잡고 애차를 세워 둔 곳으로 달려갔다.',
    ]);
    await maru.say_and_wait([callname, ', 너를 만나서 정말 다행이야. 고마워.']);
    await era.printAndWait('고요한 한밤중 도로에 다시 촉촉한 바람이 불어왔다.');
  },
};
