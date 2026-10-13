module.exports = class extends require('#/i18n/zh-CN/new-game') {
  rp_select = '연기할 캐릭터 선택';
  rp_select_me = '나';
  rp_select_tip_1 = '* 표시가 붙은 캐릭터는 전용 대사가 있습니다';
  rp_select_tip_2 = '개인 업적을 달성한 캐릭터만 선택할 수 있습니다';
  rp_select_tip_3 = (clist) => [
    ...clist,
    ' 등 특수 캐릭터는 선택할 수 없습니다',
  ];

  intro_info1 =
    '십 년의 공부 끝에 마침내 합격자 명단에 이름을 올렸다.\n우편함에 도착한 편지에는 금박이 둘러져 있었고,\n방금 받은 트레이너 배지와 같은 빛깔로 반짝이고 있었다.\n\n아직 떨리는 손으로 봉랍을 떼어 냈다————';
  intro_info2 =
    '임명장\n…………\n…………\n…………\n…………\n…………\n…………\n…………귀하를 본교의 트레이너로 임명합니다.';
  intro_info3 = '일본 중앙 트레센 학원 이사장\n아키카와 야요이';
  intro_sign = (name) => ['(서명)', { isBlank: 2 }, name];
  intro_time = ['(날짜)', { isBlank: 2 }, '2000년 1월 1일'];
  intro_input_name =
    '——그리고 왼쪽 하단에 자신의 이름을 적었다.(이름을 입력한 후 엔터 키를 누르세요. 10자 이내로 제한됩니다).';
  intro_select_sex = '(성별을 선택하십시오)';
  intro_resign = '다시 서명';
  intro_submit = '임명장 제출';
  intro_re_select_sex = '성별 재선택';

  set_diff_header = '게임 모드';
  set_dif0 = '시조의 땅';
  set_dif0_desc =
    '세 여신은 모든 우마무스메를 평등하게 보살핀다|트레센의 우마무스메는 또래를 훨씬 능가한다|우마무스메는 순수한 사랑을 동경한다';
  set_dif1 = '현세';
  set_dif1_desc =
    '세 여신의 시선은 이곳에 닿지 않는다|트레센도 여러 명문 학원 중 하나일 뿐이다|우마무스메는 현실의 압박에 시달린다';
  set_dif2 = '트레이프';
  set_dif2_desc =
    '세 여신은 당신의 팀을 제외한 우마무스메를 보살핀다|레이스에 늘 강적이 나타난다|우마무스메는 여러 방법으로 스트레스를 풀려고 한다|트레센은 트레이너에게 엄격하고 가혹하다';
  set_dif3 = '세계의 적';
  set_dif3_desc =
    '세 여신은 당신과 당신의 팀을 제외한 우마무스메를 보살핀다|레이스에 늘 강적이 나타난다|우마무스메는 당신을 싫어한다|트레센은 트레이너에게 엄격하고 가혹하다';
  set_dif4 = '고모라';
  set_dif4_desc =
    '세 여신이 당신의 팀을 각별히 지켜본다|트레센의 우마무스메는 동료들을 크게 뛰어넘는다|우마무스메는 수단을 가리지 않고 당신을 독점하려 한다|우마무스메의 아이들도 마찬가지다';
  set_dif5 = 'Uma3rb';
  set_dif5_desc =
    '세 여신이 당신의 팀을 각별히 지켜본다|트레센의 우마무스메는 동료들을 크게 뛰어넘는다|우마무스메는 성적으로 문란하며 늘 발정 상태다|우마무스메는 도구를 잔뜩 장착한 채로도 완주할 수 있다';
  set_dif6 = '소돔';
  set_dif6_desc =
    '고모라와 같음|단, 모든 캐릭터가 양성구유|트레센은 트레이너에게 엄격하고 가혹하다';
  set_dif7 = '환상♂향';
  set_dif7_desc =
    '고모라와 같음|단, 모든 캐릭터가 남성|트레센은 트레이너에게 엄격하고 가혹하다';
  set_guide = '튜토리얼 표시';
  set_ng_tooltip =
    '* 처음 플레이한다면 【시조의 땅】이나 【현세】 모드로 시작하는 것을 권장합니다!';
  set_detail = '난이도 커스텀';
  set_mode_header = '프리셋';
  set_option_header = '게임 옵션';
  set_next = '게임 시작';

  set_train_diff = '훈련 난이도';
  set_td_0 = '쉬움';
  set_td_1 = '보통';
  set_td_2 = '어려움';
  set_td_0_desc = '트레이닝 성공률+25%';
  set_td_2_desc = '트레이닝 성공률-25%';

  set_train_buff = '훈련 보정';
  set_tb_0 = '쉬움';
  set_tb_1 = '보통';
  set_tb_2 = '어려움';
  set_tb_0_desc = '트레이닝 보정+25%';
  set_tb_2_desc = '트레이닝 보정-25%';

  set_race_diff = '경기 난이도';
  set_rd_0 = '쉬움';
  set_rd_1 = '보통';
  set_rd_2 = '어려움';
  set_rd_0_desc = '상대 평가-20%';
  set_rd_2_desc = '상대 평가+10%; 전설의 강적 활성화';

  set_hurt = '부상 확률';
  set_ht_0 = '안전함';
  set_ht_1 = '위험함';

  set_pressure = '스트레스 가중';
  set_ps_0 = '낮음';
  set_ps_1 = '높음';

  set_money_price = '상점 주인';
  set_mp_0 = '인심 좋음';
  set_mp_1 = '원칙 고수';
  set_mp_2 = '악덕 상인';
  set_mp_0_desc = '상점 아이템 가격 -50%';
  set_mp_2_desc = '상점 아이템 가격 +100%';

  set_sex_skill_price = '조교 인자 소모';
  set_race_skill_price = '레이스 인자 소모';
  set_sp_0 = '낮음';
  set_sp_1 = '보통';
  set_sp_2 = '높음';
  set_sp_0_desc = '인자 소모량 -50%';
  set_sp_2_desc = '인자 소모량 +100%';

  set_game_over = '게임오버';
  set_go_0 = '끝나지 않는 연회';
  set_go_1 = '+팬덤 습격';
  set_go_2 = '+돈의 노예';
  set_go_3 = '+사랑의 감옥';
  set_go_0_desc = '명성이 0이 될 때까지 트레이너 생활은 계속된다';
  set_go_1_desc =
    '우마무스메의 성적이 당신의 생사를 결정한다…… 조금이라도 미움을 사고 있다면 육성의 끝이 인생의 끝이 될 수도 있다';
  set_go_2_desc =
    '우마무스메에게 진 빚도 당신의 운명을 결정한다. 어른답게 자신의 자산을 잘 관리하자';
  set_go_3_desc =
    '희망 없는 사랑은 어떤 결실을 맺을까? 사랑으로 지어진 감옥 안에서 인생을 마칠 기회도 생긴다';

  set_honour = '명성 변화';
  set_hn_0 = '날로 높아짐';
  set_hn_1 = '변화 없음';
  set_hn_2 = '서서히 감소';
  set_hn_0_desc = '명성이 서서히 높아진다. 매 턴 명성+1';
  set_hn_1_desc = '다른 요인이 없으면 명성은 변하지 않는다';
  set_hn_2_desc = '명성이 서서히 줄어든다. 매 턴 명성-1';

  set_honour_empty = '명성 제로 엔드';
  set_he_0 = '쓸쓸한 퇴장';
  set_he_1 = '어둠의 거래';
  set_he_0_desc =
    '명성을 전부 잃고, 모든 것이 끝났습니다…… 곧바로 타이틀로 돌아갑니다.';
  set_he_1_desc =
    '명성이 제로가 된 후에도 계속하고 싶습니까? 설령 그 대가가 당신의 모든 것이더라도?';

  set_chara_sex = '우마무스메의 성별';
  set_cs_0 = '모두 여성';
  set_cs_1 = '모두 남성';
  set_cs_2 = '음양의 조화';
  set_cs_3 = '현실 반영';
  set_cs_0_desc = '미녀들에게 포위당했습니다!';
  set_cs_1_desc = '청춘의 땀을 흘리고 있는 미남들……';
  set_cs_2_desc = '신사 숙녀……아니, 수, 숙남녀 여러분??';
  set_cs_3_desc = '귀 장식의 좌우 위치가 무엇을 의미하는지 아십니까?';

  set_relation = '초기 호감도';

  set_relation_buff = '호감 상승 난이도';
  set_love_buff = '애정 상승 난이도';
  set_diff_easy = '쉬움';
  set_diff_normal = '보통';
  set_diff_hard = '어려움';
  set_diff_easy_desc = '획득량 +50%';
  set_diff_hard_desc = '획득량 -50%';

  set_relation_change = '호감 변화';
  set_rc_0 = '자동 증가';
  set_rc_1 = '현상유지';
  set_rc_2 = '자동 감소';
  set_rc_0_desc = '우마무스메들의 호감이 날로 높아진다. 매 턴 호감 +5';
  set_rc_1_desc = '우마무스메들의 호감은 시간에 따라 변하지 않는다';
  set_rc_2_desc = '우마무스메들이 점차 당신을 싫어하게 된다. 매 턴 호감 -10';

  set_love = '초기 애정';

  set_love_change = '애정 변화';
  set_lc_0 = '연애 불감';
  set_lc_1 = '청춘 소녀';
  set_lc_0_desc =
    '먼저 다가가야 우마무스메가 사랑에 빠진다. 애정 단계 상승 이벤트가 발생할 수 있다';
  set_lc_1_desc =
    '아무것도 하지 않아도 우마무스메들이 점차 당신에게 끌려, 의존하게 된다. 매 턴 애정 +1. 애정 단계 상승 이벤트는 발생하지 않는다';

  set_unfaith = '불륜에 대한 생각';
  set_uf_0 = '넓은 아량';
  set_uf_1 = '용납 불가';
  set_uf_0_desc = '우마무스메들은 단지 당신과 함께 있고 싶다는 사소한 소망을 품고 있을 뿐……';
  set_uf_1_desc = '집착하는 우마무스메만큼 무서운 건 없을 겁니다……';

  set_extreme = '극단적인 행동';
  set_eb_0 = '하지 않음';
  set_eb_1 = '가능성 있음';
  set_eb_2 = '최대한 억제';
  set_eb_3 = '적극적 행동';
  set_eb_0_desc = '우마무스메들은 당신에게 절대 해를 끼치지 않을 것입니다. 안전합니다.';
  set_eb_1_desc =
    '우마무스메들이 당신을 덮치거나 납치할 수는 있겠지만, 매우 낮은 확률로 일어날 것입니다.';
  set_eb_2_desc =
    '우마무스메들은 당신을 덮치거나 납치하려는 욕구를 최대한 억누를 겁니다…… 오래 버티지는 못 하겠지만요.';
  set_eb_3_desc = '당신이 보이지 않는 곳에서, 우마무스메들이 일그러진 웃음을 지으며 무언가를 준비하고 있습니다……';

  set_talent = '타고난 특성';
  set_tt_0 = '음란한 암말들';
  set_tt_1 = '각양각색';
  set_tt_2 = '순수하고 청초';
  set_tt_3 = '돌처럼 단단한 마음';
  set_tt_0_desc = '모두 다 암말에 불과하다는 겁니다.';
  set_tt_1_desc = '누구나 생애 하나 뿐인……';
  set_tt_2_desc = '우마무스메의 몸은 흠잡을 데 없이 아주 완벽합니다.';
  set_tt_3_desc = '우마무스메들이 쾌감을 느끼기에 극도로 힘들게 만듭니다.';

  set_abl_update = '캐릭터의 성적 기술 학습';
  set_au_0 = '흥미 없음';
  set_au_1 = '적극 탐색';

  set_resist = '캐릭터의 강간 저항';
  set_rs_0 = '밀면 넘어감';
  set_rs_1 = '격렬하게 저항';

  set_ero_item = '도구의 영향';
  set_ei_0 = '강철의 의지';
  set_ei_1 = '이건 못 이겨요';
  set_ei_0_desc =
    '어느 관객 「가끔 레이스가 좀 이상해져. 선수들의 안색이나 옷이 젖은 정도 같은 게…… 그래도 볼만하긴 해」';
  set_ei_1_desc =
    '어느 관객 「눈이 뒤집힌 채 비틀거리며 달리고, 코스까지 젖어 있잖아—— 아리마 기념인데 좀 예의를 갖춰!」; 도구 장착 시 기초 능력 -25%';

  set_mejiro_style = '메지로 시티의 방식';
  set_ms_0 = '자유';
  set_ms_1 = '자애';
  set_ms_0_desc = '좋을 대로 해❤️';
  set_ms_1_desc = '메지로가 부르고 있다……';

  set_child_love = '금단의 사랑';
  set_cl_0 = '금지';
  set_cl_1 = '허용';
  set_cl_0_desc =
    '아이들은 당신을 사랑하는 마음 뿐……설령 당신이 스스로 깨지 않는 한 말이죠.';
  set_cl_1_desc = '아이들은 당신을 사랑하는 마음 뿐……일까요?';

  set_height = '우마무스메의 키';
  set_hg_0 = '로리마망';
  set_hg_1 = '보통';
  set_hg_2 = '크고 아름다움';
  set_hg_0_desc = '로리들에게 둘러싸인 천국……';
  set_hg_1_desc = '우마무스메들의 키는 자연히 분포할 것입니다.';
  set_hg_2_desc = '거대한 우마무스메는 무적!';

  set_gd_0 = '비표시';
  set_gd_1 = '표시';

  cus_intro_header = '캐릭터 생성 시간! 캐릭터를 무작위로 생성하시겠습니까?';
  bt_cus_random = '무작위 생성';
  bt_cus_default = '기본값';
  bt_cus_set = '직접 설정';

  cus_body_header = '먼제 신체 세부사항입니다!';
  bt_cus_confirm = '완료!';

  cus_birthday_header =
    '다음은 키와 생일입니다!\nPS：개발자는 여러분이 2월 29일에 태어나지 않았다고 가정하고 있습니다.';
  cus_birthday_month = '태어난 달';
  cus_bm_prev = '이전달';
  cus_bm_next = '다음달';
  cus_birthday_date = '태어난 일수';
  cus_bd_prev_5 = '5일 전';
  cus_bd_prev = '전날';
  cus_bd_next = '다음날';
  cus_bd_next_5 = '5일 후';

  cus_breast_header =
    '여성의 상징의 크기를 어떻게 하실 건가요?\nPS: 크다고 해서 좋은 건 아닙니다!';
  cus_breast_1 = '……도마예요';
  cus_breast_2 = '희소가치가 중요하죠';
  cus_breast_3 = '보통이면 충분해요';
  cus_breast_4 = '조금 큰 편이 좋아요!';
  cus_breast_5 = '모든 것을 내려다보고 싶어요 (아님)';

  cus_penis_header =
    '당신의 「범행 도구」의 크기는?\nPS: 크다고 해서 좋은 건 아닙니다!';
  cus_penis_1 = '누구나 받아들일 수 있는 크기!';
  cus_penis_2 = '그것보다 조금 큰 정도면 돼요';
  cus_penis_3 = '보통이면 충분해요';
  cus_penis_4 = '당당한 크기가 좋아요!';
  cus_penis_5 = '모두에게 아프면서도 기분 좋은 느낌을 주고 싶어!';

  cus_uma_header =
    '이제 상상의 시간! 우마무스메가 된다면 어떤 기성일 것 같나요?';

  cus_uma_color_header_template =
    '그렇군요, %CHARA%의 기성이군요…… 그렇다면 털색은 어떨까요?';

  cus_call_header = '이제 호칭을 지어볼 차례군요!';
  cus_call_3 = '오오, 말발굽을 정말 좋아하는 이름을 지으셨네요!';
  cus_call_179 = '오오, 정말 로리콘스러운 이름을 지으셨네요!';
  cus_call_621 = '오오, 정말 괴롭히고 싶어지는 이름을 지으셨네요!';

  cus_set_callname = '어떻게 불리길 원하시나요?(6자 이내)';
  cus_set_by_self = '내가 정한다!';

  get_cus_callname_confirm = (actual, call) => [
    actual,
    ' 트레이너님, 이제부터 지문에서는 ',
    call,
    '(으)로 부르겠습니다!',
  ];

  cus_taiwu_header = '마지막으로, 개발자가 드리는 선물입니다!';

  taiwu_talent_speed = '위기에서 얻은 신속함';
  taiwu_talent_stamina = '자연에서 얻은 순수함';
  taiwu_talent_power = '연마로 얻은 날카로움';
  taiwu_talent_guts = '혹한 속에 피어난 향기';
  taiwu_talent_wiz = '고요한 마음에서 얻은 뜻';

  taiwu_talent_speed_desc =
    '위기에서 얻은 신속함, 아슬아슬한 순간을 헤쳐 나간다. 당신의 스피드는 보통 사람을 훨씬 뛰어넘는다.';
  taiwu_talent_stamina_desc =
    '자연에서 얻은 순수함, 모든 것이 하나가 된다. 당신의 스태미나는 보통 사람을 훨씬 뛰어넘는다.';
  taiwu_talent_power_desc =
    '연마로 얻은 날카로움, 호랑이를 굴복시키고 용을 제압한다. 당신의 파워는 보통 사람을 훨씬 뛰어넘는다.';
  taiwu_talent_guts_desc =
    '혹한 속에 피어난 향기, 마음을 단련하고 인내한다. 당신의 근성은 보통 사람을 훨씬 뛰어넘는다.';
  taiwu_talent_wiz_desc =
    '고요한 마음에서 뜻을 얻으니 깨달음이 저절로 생겨난다. 당신의 지능은 보통 사람을 훨씬 뛰어넘는다.';

  cus_final_header = '다시 한번 확인해 주세요!';
  get_cus_f_name = (name) => [name, ' 트레이너'];
  get_cus_f_male = (callname, sex, height) => [
    '지문에서의 호칭: ',
    callname,
    { isDivider: true },
    '성별: ',
    sex,
    { isDivider: true },
    '키: ',
    height,
    'cm',
  ];
  get_cus_f_female = (callname, sex, height, female_info) => [
    ...this.get_cus_f_male(callname, sex, height),
    { isDivider: true },
    ...female_info,
  ];
  get_cus_f_hair = (hair, hair_color) => [
    '머리 모양: ',
    hair,
    { isDivider: true },
    '머리 색: ',
    hair_color,
  ];
  get_cus_f_uma = (body_hair, chara) => [
    '우마무스메가 된 나는 ',
    body_hair,
    ' 털색에 ',
    chara,
    ' 기성의 우마무스메일 것 같다',
  ];
  get_cus_f_skin_male = (skin, armpit, pubic, pv_color, penis) => [
    ...this.get_cus_f_skin_female(skin, armpit, pubic, pv_color),
    { isDivider: true },
    '음경 길이: ',
    penis,
  ];
  get_cus_f_skin_female = (skin, armpit, pubic, pv_color) => [
    '피부색: ',
    skin,
    { isDivider: true },
    '겨드랑이 털: ',
    armpit,
    { isDivider: true },
    '음모: ',
    pubic,
    { isDivider: true },
    '성기 색: ',
    pv_color,
  ];
  cus_f_talent = '성격 특성: ';
  cus_f_xp = '기타 특성: ';
  cus_f_gift = '개발자의 선물: ';
  bt_random_talents = '특성 랜덤';
  bt_random_all = '전부 무작위로!';
  bt_re_make = '다시 고를래!';
  bt_exit = '더 이상 안할래...';
};
