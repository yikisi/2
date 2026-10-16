/**
 * @file 雑項
 * @author 雞雞
 * @author 黑奴队长
 */
const {
  get,
  input,
  print,
  printAndWait,
  printButton,
  println,
  waitAnyKey,
} = require('#/era-electron');

module.exports = {
  /**
   * オフィス初対面
   * @param {CharaTalk} aoi 桐生院葵
   * @param {CharaTalk} riko 樫本理子
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} r_call_a 樫本理子から桐生院葵への呼び方
   * @param {boolean} empty_team チームメンバーがいないか
   */
  async welcome_trainer_office(aoi, riko, you, r_call_a, empty_team) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 트레이너 공용 사무실에 들어갔다. 이미 두 명의 트레이너가 있었다.',
    ]);
    await riko.say_as_unknown_and_wait([
      '안녕하세요. 신임 ',
      you.actual_name,
      ' 트레이너시군요.',
    ]);
    await riko.say_and_wait([
      '카시모토 리코입니다. 앞으로 중앙 트레센의 번영을 위해 함께 힘쓰도록 하죠.',
    ]);
    await aoi.say_and_wait([
      '안녕하세요. 키류인 아오이입니다. 잘 부탁드립니다.',
    ]);
    if (empty_team) {
      await riko.say_and_wait([
        '아직 담당이 없으신 듯하네요. 곤란한 일이 있으면 저나 이쪽의',
        r_call_a,
        '에게 편하게 상담해 주세요.',
      ]);
    }
  },

  /**
   * 以下は URA 表彰式の地の文
   */

  ura_reward: (() => {
    /**
     * URA 表彰式
     * @author 雞雞
     * @param {CharaTalk} etusko
     * @param {CharaTalk} you
     * @param {function(TextContent):Promise} report 司会発言のコールバック
     * @param {string} year 年度
     * @param {string} uma ウマ郎 or ウマ娘
     * @param {boolean} is_etusko 乙名史が司会か（妊娠または育成中は司会しない）
     * @param uma_list_cb 選手立ち絵リスト出力のコールバック群
     * @param {function} uma_list_cb.g1 G1 ウマ娘
     * @param {function} uma_list_cb.best_trainer 年間最優秀トレーナー
     * @param {function} uma_list_cb.junior 最優秀ジュニアウマ娘
     * @param {function} uma_list_cb.classic 最優秀クラシックウマ娘
     * @param {function} uma_list_cb.senior 最優秀シニアウマ娘
     * @param {function} uma_list_cb.uoty 年度代表ウマ娘
     * @param {string} uma_list_cb.default_best_trainer プレイヤーが年間最優秀トレーナーを取れなかったときの代替名
     * @returns {Promise<void>}
     */
    const f = async (
      etusko,
      you,
      report,
      year,
      uma,
      is_etusko,
      uma_list_cb,
    ) => {
      await report([
        '모든 ',
        uma,
        ' 팬 여러분, 안녕하십니까! 여러분이 손꼽아 기다리던 연례 축제, URA 시상식의 막이 올랐습니다!',
      ]);
      await report([
        '예년과 마찬가지로 주최 측은 여러 상을 마련해, 최고의 경기력으로 멋진 활약을 보여 준 각 ',
        uma,
        '와 그 뒤에서 힘써 주신 트레이너 여러분께 경의를 표합니다!',
      ]);
      if (is_etusko) {
        await report([
          '올해도 저, ',
          etusko.get_colored_actual_name(),
          '이(가) 사회를 맡았습니다. 잘 부탁드립니다!',
        ]);
      }
      println();
      await report([
        '시상에 앞서, ',
        year,
        '년 G1에서 빛났던 ',
        uma,
        '들을 돌아보겠습니다!',
      ]);
      println();
      if (typeof uma_list_cb.g1 === 'function') {
        uma_list_cb.g1();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '(몇몇 선수의 이름. 아쉽게도',
            you.get_colored_name(),
            '의 팀원은 없다)',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('다시 한번 선수 여러분의 노고에 감사드립니다!');
      println();
      await report(
        '그럼 곧바로, 관심이 집중된 각 부문의 수상자를 발표하겠습니다!',
      );
      println();
      await report('먼저…… 올해의 《최우수 트레이너》 상입니다!');
      println();
      if (typeof uma_list_cb.best_trainer === 'function') {
        uma_list_cb.best_trainer();
        await waitAnyKey();
        await report([
          you.get_colored_actual_name(),
          ' 트레이너님의 노력은 누구나 인정할 것입니다!',
        ]);
      } else {
        if (typeof uma_list_cb.default_best_trainer === 'string') {
          await report([
            uma_list_cb.default_best_trainer,
            ' 트레이너님의 노력은 누구나 인정할 것입니다!',
          ]);
        } else {
          await report('올해는 기준을 충족하는 후보가 없었습니다……');
          await report('아쉽군요. 내년에는 수상의 행운을 기대해 보겠습니다!');
        }
      }
      println();
      await report('이어서…… 올해의 《최우수 주니어》 상입니다!');
      println();
      if (typeof uma_list_cb.junior === 'function') {
        uma_list_cb.junior();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '(주니어급을 막 마친 선수의 이름과 사진. 아쉽게도 ',
            you.get_colored_name(),
            '의 팀원은 아니다)',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('이 선수가 앞으로도 코스 위에서 빛나기를 바랍니다!');
      println();
      await report('다음은…… 올해의 《최우수 클래식》 상입니다!');
      println();
      if (typeof uma_list_cb.classic === 'function') {
        uma_list_cb.classic();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '(클래식급을 막 마친 선수의 이름과 사진. 아쉽게도 ',
            you.get_colored_name(),
            '의 팀원은 아니다)',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('벌써 중심을 이끌어 갈 풍격이 느껴지는군요!');
      println();
      await report('그리고…… 올해의 《최우수 시니어》 상입니다!');
      println();
      if (typeof uma_list_cb.senior === 'function') {
        uma_list_cb.senior();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '(시니어급을 막 마친 선수의 이름과 사진. 아쉽게도 ',
            you.get_colored_name(),
            '의 팀원은 아니다)',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('두말할 필요 없는 백전노장입니다!');
      println();
      await report([
        '마지막입니다! 올해 가장 빠르고, 가장 높고, 가장 강했던 역사적인 순간! 수많은 명마 사이에서 유일무이한 발자취를 남긴 ',
        uma,
        '…… 과연 누구일까요?!',
      ]);
      await report(['《연도 대표 ', uma, '》의 영예는——']);
      println();
      if (typeof uma_list_cb.uoty === 'function') {
        uma_list_cb.uoty();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '(어느 선수의 이름과 사진. 아쉽게도',
            you.get_colored_name(),
            '의 팀원은 아니다)',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('이제 최강이 결정되었습니다!');
      println();
      await report('오늘 함께해 주셔서 감사합니다. 내년에 다시 뵙겠습니다!');
    };
    f.title = 'URA 시상식';
    return f;
  })(),
  /** 乙名史が妊娠または育成中のときの URA 表彰式司会の呼び方 */
  ur_alternative_reporter: '사회자',
  /**
   * トレーナー年度成績
   * @param {PrintedSpan} total 総勝鞍
   * @param {PrintedSpan} money 総賞金
   * @param {PrintedSpan} g1_wins G1 勝利数
   * @param {PrintedSpan} all_wins 重賞勝利数
   */
  get_ur_trainer_reward(total, money, g1_wins, all_wins) {
    return [
      '올해 팀 총 승수:',
      total,
      { isBr: true },
      '올해 팀 총 상금:',
      money,
      '우마 코인',
      { isBr: true },
      '올해 팀 G1 승수:',
      g1_wins,
      { isBr: true },
      '올해 팀 중상 승수:',
      all_wins,
    ];
  },
  /**
   * ウマ娘年度成績
   * @param {PrintedSpan} total 総勝鞍
   * @param {PrintedSpan} money 総賞金
   * @param {PrintedSpan} g1_wins G1 勝利数
   * @param {PrintedSpan} all_wins 重賞勝利数
   */
  get_ur_uma_reward(total, money, g1_wins, all_wins) {
    return [
      '올해 총 승수:',
      total,
      { isBr: true },
      '올해 총 상금:',
      money,
      '우마 코인',
      { isBr: true },
      '올해 G1 승수:',
      g1_wins,
      { isBr: true },
      '올해 중상 승수:',
      all_wins,
    ];
  },

  /**
   * 繰り返し育成
   * @author 天马闪光蹄
   */

  sc_event_name: '「꿈」',
  get_sc_buttons: () =>
    get('flag:初见重复育成') === 1
      ? {
          yes: '「그것 때문에 왔다」',
          no: '「……이제 충분하다」',
        }
      : {
          yes: '앞으로 나아간다',
          no: '여기서 돌아간다',
        },
  /**
   * イベント前半
   * @param {CharaTalk} you プレイヤー
   */
  async sc_event_former(you) {
    if (get('flag:初见重复育成') === 1) {
      await printAndWait('밤은 깊고 사람들은 잠들었다.');
      await printAndWait([
        you.get_colored_name(),
        '은(는) 혼자 트레센 학원 중심부로 향했다.',
      ]);
      await printAndWait('세 여신상이 그곳에 평온하게 서 있었다.');
      await printAndWait([
        you.get_colored_name(),
        '은(는) 깊이 숨을 들이마시고 샘가로 걸어가, 미리 쓴 편지를 바치며 물에 띄웠다.',
      ]);
      await printAndWait([
        '연못에 비친 달이 문득 흔들리고 희미한 빛이 떠돌았다.',
        you.get_colored_name(),
        '은(는) 여러 목소리가 동시에 머릿속에 울려 퍼지는 것을 느꼈다——',
      ]);
      await printAndWait(
        '인생은 무상하다. 앞서 나가는 용자도, 한 시대를 다스린 패자도, 영역을 제패한 제왕도, 그 길이 반드시 순탄한 것은 아니다. 빛도 어둠도 결국은 꿈과 환영, 물거품과 그림자.',
      );
      await printAndWait(
        '하지만 악몽은 지나가고 좋은 꿈도 이루어진다. 물거품 속에도 건져 남기고 싶은 것이 있다.',
      );
      await you.say_as_unknown_and_wait('그럼, 너의 결심을 들려다오.');
    } else {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 다시 이곳으로 돌아왔다.',
      ]);
      await printAndWait([
        '이번이……몇 번째일까.',
        you.get_colored_name(),
        '의 기억이 기묘하게 흐려져 간다.',
      ]);
      await printAndWait('하지만 그것이 중요한 것은 아니다……');
      await printAndWait([
        you.get_colored_name(),
        '이(가) 가슴에 품은 생각, 그것이 필요하다.',
      ]);
    }
  },
  sc_limit_template: '다시 육성할 캐릭터를 선택해 주세요. (최대 %LIMIT%명)',
  sc_name_template: '%NAME%',
  sc_name_inherited_template: '%NAME% (계승 완료)',
  /**
   * イベント後半
   * @param {CharaTalk} you プレイヤー
   */
  async sc_event_latter(you) {
    if (get('flag:初见重复育成') === 1) {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 여신상의 얼굴로 시선을 올려, 정말 움직이는 듯한 세 쌍의 눈을 바라보고 고개를 숙여 예를 표했다.',
      ]);
      await printAndWait('그리고 빛이 피어났다——');
      await printAndWait('「다음」의 진실을 좇을 때가 왔다.');
    } else {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 세 여신상을 바라보았다. 물안개가 그들의 얼굴을 흐리게 했고, ',
        you.get_colored_name(),
        '은(는) 무언가 하려는 듯 입을 열고 손을 뻗다가——',
      ]);
      await printAndWait('눈앞의 모든 것이 일그러졌다.');
      await printAndWait('곧 원래대로 돌아와, 아무 일도 없었던 듯했다.');
      await printAndWait('……');
      await printAndWait('모든 것이 평소와 같다……아니면, 다른가?');
      await printAndWait('나는……무엇을 했더라.');
    }
  },

  /**
   * 超得の地の文
   */

  /**
   * 超得だが、チームが上限
   * @param {CharaTalk} taste 理事長
   */
  async star_drew_limited(taste) {
    await taste.say_and_wait('불 해! 네 팀에는 이미 충분한 인원이 있다!');
  },
  /**
   * 超得だが、募集季ではない
   * @param {CharaTalk} taste 理事長
   */
  async star_drew_wrong_date(taste) {
    await taste.say_and_wait('의 문! 지금은 담당을 모집할 시기가 아니다!');
  },
  /**
   * 超得の導入
   * @param {CharaTalk} taste 理事長
   */
  star_drew_intro(taste) {
    taste.say(
      '고 지! 아직 입단하지 않은 재능 있는 아이에 대해, 학원은 실적 있는 트레이너의 직접 지명 지도를 허용한다! 다만 모두를 납득시킬 명성이 필요하다!',
    );
    taste.say(
      '주 의! 지명하더라도 상대와는 처음부터 차근차근 관계를 쌓아 주길 바란다!',
    );
  },
  star_drew_options: [
    '목록에서 선택',
    '이름으로 지명',
    'ID로 지명',
    '다시 생각한다',
  ],
  star_drew_filter_template: '%FILTERS%을(를) 가진 캐릭터',
  star_drew_filter_kojo_template: '%KOJO% 전용 대사',
  star_drew_filter_image: '전용 조교 스탠딩 일러스트',
  star_drew_bt_filter_kojo_r: '모집',
  star_drew_bt_filter_kojo_d: '일상',
  star_drew_bt_filter_kojo_ed: '육성',
  star_drew_bt_filter_kojo_l: '연모',
  star_drew_bt_filter_kojo_er: '조교',
  star_drew_bt_filter_kojo_b: '지하실',
  star_drew_bt_filter_image: '스탠딩 일러스트',
  sd_f_title_kojo_r:
    '모집 대사: 캐릭터가 팀에 합류할 때 발생하는 전용 이야기와 본문.',
  sd_f_title_kojo_d:
    '일상 대사: 캐릭터가 일상적인 교류나 행사에서 보여 주는 전용 이야기와 본문.',
  sd_f_title_kojo_ed:
    '육성 대사: 캐릭터의 육성 과정에서 전개되는 전용 이벤트와 이야기.',
  sd_f_title_kojo_l:
    '연모 대사: 캐릭터의 연모가 특정 단계에 도달했을 때 발생하는 전용 이야기와 이벤트.',
  sd_f_title_kojo_er:
    '조교 대사: 캐릭터의 성인 조교 중에 발생하는 전용 이야기와 본문.',
  sd_f_title_kojo_b:
    '지하실 대사: 캐릭터가 플레이어를 납치·감금했을 때 발생하는 전용 이야기와 본문.',
  sd_f_title_image:
    '전용 조교 스탠딩 일러스트: 캐릭터가 조교 중에 보여 주는 고유한 스탠딩 일러스트.',
  get_star_drew_selected: (name) => `${name} [지명 완료]`,
  star_drew_all_chara: '지명 가능한 캐릭터',
  star_drew_other_chara: '기타 캐릭터',
  star_drew_chara_name_input:
    '지명하고자 하는 캐릭터의 이름을 입력해 주십시오.',
  star_drew_chara_id_input: '지명하고자 하는 캐릭터의 ID를 입력해 주세요.',
  /**
   * 超得だが、重複選択
   * @param {CharaTalk} taste 理事長
   * @param {CharaTalk} chara 超得の対象
   */
  async star_drew_duplicate(taste, chara) {
    await taste.say_and_wait([
      '알 림!',
      chara.get_colored_name(),
      ' 씨는 이미 트레이닝장에서 기다리고 있다!',
    ]);
  },
  /**
   * 超得だが、誰も選んでいない
   * @param {CharaTalk} taste 理事長
   */
  async star_drew_no_one(taste) {
    await taste.say_and_wait('의 문! 해당 인물 없음!');
  },
  /**
   * 超得
   * @param {CharaTalk} taste 理事長
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} chara 超得の対象
   * @param {boolean} changed 超得対象を変更したか
   * @returns {Promise<number>}
   */
  async star_drew(taste, you, chara, changed) {
    taste.say(['선 택! 학원에서', chara, ' 씨와 연락하도록 도와줄까?']);
    printButton('「큰 이득!!」', 1);
    printButton('「잠깐!!」', 2);
    const ret = await input();
    if (ret === 1) {
      await taste.say_and_wait([
        '격 열!',
        chara,
        ' 씨는 조만간 트레이닝장에 자주 올 것이다. 기회를 잘 잡아라!',
      ]);
      if (changed) {
        await taste.say_and_wait([
          '불 쾌! 하지만',
          you.get_colored_actual_name(),
          '트레이너, 다음에는 잘 생각하고 결정해 주길 바란다!',
        ]);
      }
    } else {
      await taste.say_and_wait('분 노! 생각하고 와라!');
    }
    return ret;
  },
  grand_live_header: '내년에는 다음 레이스에서 그랜드 라이브가 개최된다:',

  /**
   * 投資の地の文
   */

  /**
   * 1k ウマコイン未満で投資を拒否
   * @param {CharaTalk} bryne タッカー・ブライネ
   * @param {PrintedSpan} callname ブライネからプレイヤーへの呼び方
   */
  async fund_reject(bryne, callname) {
    await bryne.say_and_wait([
      '미안하지만, ',
      callname,
      ', 자금이 부족하지 않아? 내 인맥 중에는 우마 코인 1,000 미만의 소액 투자를 받는 기관이 없는데……',
    ]);
  },
  /**
   * いまの投資総額と収益
   * @param {CharaTalk} bryne タッカー・ブライネ
   * @param {PrintedSpan} funds 投資総額
   * @param {PrintedSpan} income 週収益
   */
  fund_summary(bryne, funds, income) {
    print([
      '현재',
      bryne.get_colored_name(),
      '에게',
      funds,
      '우마 코인을 맡겨, 매주',
      income,
      '우마 코인의 수익을 얻고 있다.',
    ]);
  },
  bt_fund: '투자하기 (1000우마코인 단위)',
  bt_ransom: '투자금 회수',
  fund_confirm: '얼마를 투자할까?',
  /**
   * 追加投資額と総収益
   * @param {CharaTalk} bryne タッカー・ブライネ
   * @param {PrintedSpan} new_funds 追加投資額
   * @param {PrintedSpan} income 追加後の週収益
   */
  async fund_result(bryne, new_funds, income) {
    await printAndWait([
      bryne.get_colored_name(),
      '에게',
      new_funds,
      '우마 코인을 추가로 맡겨, 매주 수익은 총',
      income,
      '우마 코인이 되었다.',
    ]);
  },
  get_ransom_confirm(funds) {
    return ['얼마를 회수할까요? 투자한 금액은', funds, '우마 코인:'];
  },
  /**
   * 換金額、残額、総収益
   * @param {PrintedSpan} ransomed 換金額
   * @param {PrintedSpan|boolean} funds 換金後の残額。残っていれば Object、なければ他の型（Boolean）
   * @param {PrintedSpan} income 換金後の週収益
   */
  async ransom_result(ransomed, funds, income) {
    print([' ', ransomed, '우마 코인을 회수했다.']);
    if (typeof funds === 'object') {
      await printAndWait([
        '아직',
        funds,
        '우마 코인이 남아 있으며, 매주',
        income,
        '우마 코인의 수익을 얻고 있다.',
      ]);
    }
  },

  /**
   * 周年イベント
   */

  /**
   * 十周年
   * @author 雞雞
   * @param {CharaTalk} you プレイヤー
   * @param {string} uma ウマ娘 or ウマ郎
   */
  async TEN(you, uma) {
    await printAndWait('세월은 흘러, 3년 뒤 또 3년, 그리고 다시 3년.');
    await printAndWait([
      '벚꽃은 피고 지고, 졌다가 다시 핀다.',
      you.get_colored_name(),
      '이(가) 트레센 학원에서 보낸 시간은 어느덧 10년이 되었다.',
    ]);
    await printAndWait([
      '이 10년 동안, ',
      you.get_colored_name(),
      '은(는) 한 명 한 명의 ',
      uma,
      '의 성장을 지켜보며, 신입 트레이너에서 학원의 존경받는 존재로 성장했다.',
    ]);
    await printAndWait([
      '뒤에서 조용히 지키며, ',
      uma,
      '들과 함께 길을 걸어온',
      you.get_colored_name(),
      '에게 감사를.',
    ]);
    await printAndWait([
      you.get_colored_name(),
      '이(가) 있었기에 이 10년의 이야기는 이토록 빛났다.',
    ]);
  },
  /**
   * 二十周年
   * @author 雞雞
   * @param {CharaTalk} you プレイヤー
   * @param {string} uma ウマ娘 or ウマ郎
   * @param {string} they 彼女たち or 彼ら
   */
  async TWENTY(you, uma, they) {
    await printAndWait('20년의 세월은 눈 깜짝할 사이에 흘렀다.');
    await printAndWait([
      '트레센 학원의 트레이닝장에서, ',
      uma,
      '의 발걸음은 아직 멈추지 않았다.',
    ]);
    await printAndWait([
      '어떤 꿈도 포기하지 않았던',
      you.get_colored_name(),
      '에게 감사를.',
    ]);
    await printAndWait([
      they,
      '의 스퍼트마다, 그곳에는',
      you.get_colored_name(),
      '의 그림자가 있다.',
    ]);
    await printAndWait([
      you.get_colored_name(),
      '은(는) 새 세대 학생들의 자료를 넘긴다. 어쩌면 이 풋풋한 이름들 속에서 다시 역사를 바꿀 존재가 태어날지도 모른다.',
    ]);
  },
  /**
   * 三十周年
   * @author 雞雞
   * @param {CharaTalk} you プレイヤー
   */
  async THIRTY(you) {
    await printAndWait([
      '30년은, ',
      you.get_colored_name(),
      '을(를) 한 시대의 전설로 만들기에 충분한 세월이었다.',
    ]);
    await printAndWait('코스는 여전히 뜨겁고, 트레센의 교표는 여전히 빛난다.');
    await printAndWait([
      '그리고',
      you.get_colored_name(),
      '의 이야기는 이미 수많은 사람의 기억에 남아 있다.',
    ]);
    await printAndWait([
      '30년의 끈기와 신념으로 누구도 흉내 낼 수 없는 전설을 쓴',
      you.get_colored_name(),
      '에게 감사를.',
    ]);
  },
  /**
   * 四十周年
   * @author 雞雞
   * @param {CharaTalk} you プレイヤー
   * @param {string} uma ウマ娘 or ウマ郎
   * @param {string} they 彼女たち or 彼ら
   */
  async FORTY(you, uma, they) {
    await printAndWait([
      '40년은 순식간이었다.',
      you.get_colored_name(),
      '의 이야기는 이미 트레센 학원과 떼어 놓을 수 없는 일부가 되었다.',
    ]);
    await printAndWait([
      '세월이 흘러도, ',
      you.get_colored_name(),
      '의 끈기는 변하지 않는다.',
    ]);
    await printAndWait([
      uma,
      '들은 계속 자신을 뛰어넘고, 서로의 꿈을 위해 달린다. 그리고',
      you.get_colored_name(),
      '은(는) 언제나',
      they,
      '의 뒤에서 가장 따뜻한 존재로 남는다.',
    ]);
    await printAndWait([
      '학원의 어느 명예의 벽에는 40년 동안의 사진이 걸려 있다. 한 장 한 장마다',
      you.get_colored_name(),
      '의 발자취가 담겨 있다.',
    ]);
  },
  /**
   * 五十周年
   * @author 雞雞
   * @param {CharaTalk} you プレイヤー
   * @param {string} uma ウマ娘 or ウマ郎
   * @param {string} they 彼女たち or 彼ら
   */
  async FIFTY(you, uma, they) {
    await printAndWait('인생 50년, 꿈과 같고 환영과도 같다.');
    await printAndWait(
      '벚꽃은 풋풋하게 피어나고, 트레센 학원은 반세기의 영광을 맞이했다.',
    );
    await printAndWait(
      '반세기는 모든 것을 바꿀 수 있다. 하지만 변하지 않는 것도 있다.',
    );
    await printAndWait([
      '지난날의',
      uma,
      '들 중에는 전설이 된 이도, 뒤에서 돕는 자리로 물러난 이도 있다. 하지만',
      they,
      '의 이야기는 모두, ',
      you.get_colored_name(),
      '덕분에 이어졌다.',
    ]);
    await printAndWait([
      '그리고',
      you.get_colored_name(),
      '은(는) 지금도 트레이닝장에 서서 새로운',
      uma,
      '들이 달리는 모습을 지켜보고 있다.',
    ]);
  },
};
