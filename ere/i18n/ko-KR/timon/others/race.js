/**
 * @file レース関連 - システム提示
 * @author 黑奴队长
 */
const { get } = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  contestants_conjunction: '과(와) ',
  prepare_report_sim: '선수들이 편자를 확인하고 있습니다……',
  /** @param {PrintedSpan} chara 1番人気の選手名 */
  get_prepare_report_high_mot: (chara) => [
    '인기 1위, ',
    chara,
    '은(는) 오늘 의욕이 넘쳐 보입니다!',
  ],
  /** @param {PrintedSpan} chara 1番人気の選手名 */
  get_prepare_report_low_mot: (chara) => [
    '인기 1위, ',
    chara,
    '은(는) 오늘 의욕이 좋지 않아 보입니다!',
  ],
  /** @param {PrintedSpan} chara 1番人気の選手名 */
  get_prepare_report_normal_mot: (chara) => [
    '인기 1위, ',
    chara,
    '은(는) 오늘 의욕이 평범한 듯합니다!',
  ],
  prepare_record_sim: '코스를 확인하고 있습니다……',
  /**
   * @param {PrintedSpan} race レース名
   * @param {string} uma ウマ娘 or ウマ郎
   */
  get_prepare_record_default: (race, uma) => [
    '이 ',
    race,
    ' 무대에서, 각 ',
    uma,
    '도 전력을 다해 꿈을 전해 줄 것입니다.',
  ],
  /**
   * @param {PrintedSpan} chara 1番人気の選手名
   * @param {string} uma ウマ娘 or ウマ郎
   */
  get_prepare_record_sats_sho: (chara, uma) => [
    chara,
    '은(는) 무사히 게이트에 들어갔습니다. 앞으로 이름을 떨칠 ',
    uma,
    '가 될 예감이 드는군요.',
  ],
  /** @param {string} uma ウマ娘 or ウマ郎 */
  get_prepare_record_toky_yus: (uma) => [
    uma,
    '에게 일생에 단 한 번뿐인 더비. 곧 승자가 결정됩니다.',
  ],
  /** @param {PrintedSpan} race レース名 */
  get_prepare_record_kiku_sho: (race) => [
    '올해의 ',
    race,
    '은(는) 그야말로 군웅할거, 강호들이 모였습니다.',
  ],
  /** @param {PrintedSpan} chara 1番人気の選手名 */
  get_prepare_record_takz_kin: (chara) => [
    '여러분의 꿈은 누구입니까? 저의 꿈은 ',
    chara,
    '입니다',
  ],
  beginning_report_sim: [
    '출발 게이트 점검 중……',
    '스타팅 건 점검 중……',
    '우마무스메 입장……',
    '출발!',
  ],
  /**
   * @param {PrintedSpan} race レース名
   * @param {string} gates 出走頭数
   * @param {string} uma ウマ娘 or ウマ郎
   * @returns {TextContent}
   */
  get_beginning_report(race, gates, uma) {
    const buffer = [
      [
        [uma, ', 게이트에 들어갑니다……'],
        ['모든 ', uma, ', 게이트 준비 완료……'],
        '준비……',
        '——게이트 오픈!',
      ],
      [
        [uma, ', 준비됐습니다……'],
        '언제든 출발할 수 있습니다……',
        '준비……',
        '——스타트!',
      ],
      [
        '곧 출발합니다……',
        ['출전 ', uma, ' ', gates, '명……'],
        [get('flag:当前年').toString(), '년 ', race, '……'],
        '——스타트!',
      ],
    ];
    return get_random_entry(buffer);
  },
  /** @param {string} uma ウマ娘 or ウマ郎 */
  get_first_report_no_bad_start: (uma) => [
    '스타트, 모든 ',
    uma,
    '가 나란히 게이트를 나섰습니다!',
  ],
  /**
   * @param {PrintedSpan} first 先頭で出た選手名
   * @param {PrintedSpan} last 出遅れの選手名
   * @param {string} uma ウマ娘 or ウマ郎
   */
  get_first_report: (first, last, uma) => [
    '스타트, ',
    first,
    '이(가) 먼저 치고 나왔습니다! 다른 ',
    uma,
    '가 뒤따르고, 마지막은 ',
    Math.random() < 0.5 ? '출발이 늦은 ' : '뒤처진 ',
    last,
    '!',
  ],
  location_change_location_report_template: '%LANE%에 진입 ',
  get_location_change_slope_report: (up_slope) =>
    `주행 구간: ${up_slope ? '오르막' : '내리막'}`,
  get_location_change_slope_over_report: (up_slope) =>
    `${up_slope ? '오르막' : '내리막'} 통과 완료`,
  location_change_report_template: '현재 %MESSAGE%',
  location_in_order_report_template: '현재 %LANE%',
  /**
   * @param {PrintedSpan} chara
   * @param {string} rank
   * @param {string} no
   * @returns {TextContent}
   */
  get_order_report(chara, rank, no) {
    return [`${rank}착은 ${no}번 `, chara];
  },
  full_speed_push_reports: [
    (contestants) => [...contestants, '이(가) 전력을 다해 스퍼트합니다!'],
    (contestants) => [
      ...contestants,
      '이(가) 마지막 승리를 향해 더욱 가속합니다!',
    ],
    (contestants) => [
      '한계를 뛰어넘어라! ',
      ...contestants,
      '은(는) 아직도 가속하고 있습니다!',
    ],
  ],
  lost_stamina_reports: [
    (contestants) => [...contestants, ', 속도가 떨어집니다!'],
    (contestants) => [
      ...contestants,
      '의 다리가 휘청입니다. 더는 속도를 유지하지 못합니다!',
    ],
    (contestants) => [...contestants, '의 속도가 떨어졌습니다! '],
    (contestants) => [...contestants, '은(는) 한계인가요!?'],
  ],
  orgasm_reports: [
    (contestants) => [
      ...contestants,
      '의 얼굴이 붉습니다. 힘을 다 쓴 걸까요……',
    ],
    (contestants) => ['지금 ', ...contestants, '의 몸에서 김이 피어오릅니다!'],
    (contestants) => [
      '대체 ',
      ...contestants,
      '의 승부복을 저렇게 적시는 것은 무엇일까요……?',
    ],
    (contestants) => [
      ...contestants,
      '의 다리가 순간 휘청였지만, 속도 저하는 피했습니다!',
    ],
  ],
  loc_mind_nige_ex_reports: [
    (contestants) => [
      '도주가 선두를 내줄 수는 없지요! 가라, ',
      ...contestants,
      '!',
    ],
    (contestants) => [
      '거긴 네 자리가 아니다! ',
      ...contestants,
      '이(가) 달리기로 경고합니다!',
    ],
    (contestants) => [...contestants, '이(가) 선두 자리를 되찾으려 합니다! '],
    (contestants) => [
      ...contestants,
      '은(는) 계속 가속하며 다른 선수들보다 앞으로 달아나려 합니다!',
    ],
  ],
  loc_mind_other_ex_reports: [
    (contestants) => [
      ...contestants,
      '이(가) 크게 발을 내디디며 본래 자리로 향합니다!',
    ],
    (contestants) => [
      '거기는 ',
      contestants.length > 1 ? '너의' : '너희의',
      '자리가 아니다! 힘내라, ',
      ...contestants,
      '!',
    ],
    (contestants) => [...contestants, '이(가) 자리를 되찾으려 싸웁니다!'],
  ],
  loc_mind_nige_over_take_reports: [
    (contestants) => [...contestants, '은(는) 망설임 없이 선두로 향합니다! '],
    (contestants) => [...contestants, '이(가) 선두를 노립니다! '],
    (contestants) => [...contestants, '의 눈에는 선두만 보입니다! '],
  ],
  loc_mind_nige_speed_up_reports: [
    (contestants) => [
      ...contestants,
      '은(는) 계속 가속하며 격차를 더 벌리려 합니다!',
    ],
    (contestants) => [...contestants, '은(는) 더 멀리 달아납니다! '],
    (contestants) => ['달아나라, 세상 끝까지, ', ...contestants, '!'],
  ],
  loc_mind_other_quick_reports: [
    (contestants) => [
      ...contestants,
      '은(는) 격차가 벌어지는 것을 두고 보지 않고 추격합니다!',
    ],
    (contestants) => ['너무 멀어졌다! ', ...contestants, '이(가) 추격합니다! '],
    (contestants) => [...contestants, '은(는) 거리를 확실히 유지합니다!'],
  ],
  loc_mind_other_relax_reports: [
    (contestants) => [
      ...contestants,
      '은(는) 체력을 아끼는 모양입니다. 대담한 전술이군요!!',
    ],
    (contestants) => [
      ...contestants,
      '의 리듬이 느려졌습니다. 방심은 금물입니다!!',
    ],
    (contestants) => [...contestants, ', 해이해지면 안 됩니다!'],
  ],
  blocked_reports: [
    (contestants) => [...contestants, '은(는) 길이 막혔습니다. 아쉽군요! '],
    (contestants) => [...contestants, '은(는) 빠져나오는 데 실패했습니다! '],
    (contestants) => [...contestants, '은(는) 무리 안에 갇혔습니다!'],
  ],
  temptation_reports: [
    (contestants) => [...contestants, '의 리듬이 흐트러져 조금 초조해합니다! '],
    (contestants) => [...contestants, '은(는) 조금 성급해졌나요! '],
    (contestants) => [...contestants, '이(가) 흥분 상태에 빠졌습니다!'],
  ],
  temp_end_reports: [
    (contestants) => [
      ...contestants,
      '은(는) 마침내 본래 리듬으로 돌아왔습니다!',
    ],
    (contestants) => [...contestants, '은(는) 진정한 듯합니다! '],
    (contestants) => [...contestants, '은(는) 조급함을 떨쳐 냈습니다!'],
  ],
  temp_continue_reports: [
    (contestants) => [
      ...contestants,
      '의 리듬이 계속 흐트러집니다. 좋지 않습니다!',
    ],
    (contestants) => [...contestants, '은(는) 조급함에서 벗어나지 못합니다!'],
    (contestants) => [
      '진정해요, ',
      ...contestants,
      '! 좋은 기회를 놓치지 마세요!',
    ],
  ],
  temp_wrong_style_reports: [
    (contestants) => [...contestants, '은(는) 달리는 방식을 바꾼 듯합니다! '],
    (contestants) => [
      ...contestants,
      '은(는) 어째서 필사적으로 앞으로 나갈까요!',
    ],
  ],
  /**
   * @param {PrintedSpan} target
   * @param {PrintedSpan} aim
   * @returns {TextContent}
   */
  get_compete_fight_report(target, aim) {
    return [aim, '을(를) 목표로, ', target, '이(가) 속도를 높였습니다!'];
  },
  /**
   * @param {PrintedSpan} chara
   * @returns {TextContent}
   */
  get_final_push_report: (chara) => [
    chara,
    '이(가) 마지막 스퍼트에 들어갑니다!',
  ],
  /**
   * @param {TextContent} contestants
   * @param {boolean} at_same_time
   * @returns {TextContent}
   */
  get_final_push_multi_report(contestants, at_same_time) {
    return [
      ...contestants,
      at_same_time
        ? '이(가) 동시에 마지막 스퍼트에 들어갑니다! '
        : '이(가) 거의 동시에 마지막 스퍼트에 들어갑니다!',
    ];
  },
  /**
   * @param {TextContent} contestants
   * @returns {TextContent}
   */
  get_final_push_follow_report(contestants) {
    return [...contestants, '도 마지막 스퍼트에 들어갔습니다!'];
  },
  overtake_reports: [
    (top, over) => [over, '이(가) 단숨에 ', top, '을(를) 제쳤습니다!'],
    (top, over) => [
      over,
      '이(가) ',
      top,
      '과(와)의 경합에서 우위를 점했습니다!',
    ],
    (top, over) => [
      top,
      '을(를) 제친 지금이야말로 ',
      over,
      '의 승부를 결정지을 순간입니다!',
    ],
    (top) => [top, '이(가) 선두! 승기를 굳혔을까요!'],
  ],
  /**
   * @param {PrintedSpan} first
   * @param {PrintedSpan} second
   * @returns {TextContent}
   */
  get_battle_start_report(first, second) {
    return [first, '과(와) ', second, '이(가) 치열하게 경합합니다!'];
  },
  battle_reports: [
    { w: 0.6, h: (first, second) => [first, '! ', second, '!'] },
    {
      w: 0.3,
      h: (first, second) => [
        first,
        '과(와) ',
        second,
        '의 경합은 아직 계속됩니다! 양쪽 모두 승리를 향해 전력을 다합니다!',
      ],
    },
    {
      w: 0.1,
      h: (first, second) => [
        '팽팽합니다! 팽팽합니다! ',
        first,
        '도 ',
        second,
        '도, 혼자 앞서 나가지 못합니다!',
      ],
    },
    {
      w: 0.1,
      h: (first, second) => [
        '과연 ',
        first,
        '일까요, 아니면 ',
        second,
        '일까요! 마지막 순간까지 알 수 없습니다!',
      ],
    },
  ],
  top_reports: [
    (top) => [top, '이(가) 선두를 굳게 지킵니다! '],
    (top) => ['빠릅니다, 빨라요! ', top, '이(가) 일기당천의 기세를 보입니다! '],
    (top) => [top, '은(는) 절호조! 이대로 밀어붙일까요! '],
    (top) => ['계속 앞서갑니다! 종반의 ', top, '에게 적수는 없는 걸까요! '],
    (top) => [top, '이(가) 승리를 맞이하려 합니다! '],
    (top) => [top, '! ', top, '!'],
  ],
  /**
   * @param {PrintedSpan} champion
   * @param {string} bashin_behind
   * @returns {TextContent}
   */
  get_finish_report(champion, bashin_behind) {
    return [
      champion,
      '이(가) ',
      bashin_behind,
      '(으)로 먼저 결승선을 통과합니다!',
    ];
  },
  /**
   * @param {PrintedSpan} champion
   * @param {string} bashin_behind
   * @returns {TextContent}
   */
  get_finish_report_begin_race(champion, bashin_behind) {
    return [
      champion,
      '이(가) ',
      bashin_behind,
      '(으)로 먼저 결승선을 통과합니다! ',
      Math.random() < 0.5
        ? '데뷔를 축하합니다! '
        : '앞으로의 활약을 기대합니다!',
    ];
  },
  ero_common_reports: [
    '으, 으, 으응므으…… ',
    '뭔가가 땀이랑 같이 흘러내려……이거, 침……?❤️❤️❤️ ',
    '신음 소리……안 들렸겠지……? 이제 그만 신음해……❤️❤️❤️ ',
    '부족해……너무 부족해❤️❤️❤️ ',
    '지금 여기서, 레이스 도중에 가 버려도 괜찮겠지, 안 보일 테니까——❤️❤️❤️ ',
    '아아❤️❤️❤️ 열기가 몸속을 휘돌아서 더는 못 참겠어❤️❤️❤️ ',
  ],
  ero_team_reports: ['보고 있어……?❤️❤️❤️ 분명 다 들켰겠지❤️❤️❤️ '],
  ero_breast_reports: [
    '계속 괴롭힘당하는 유두❤️❤️❤️ 빨갛게 부어서 돌처럼 단단해❤️❤️❤️ ',
  ],
  ero_penis_reports: [
    '부끄러워❤️❤️❤️ 그런데 사정하고 싶은 마음이 멈추질 않아❤️❤️❤️ ',
    '카메라가 하반신을 비추는데 달리면서……사정하고 싶어❤️❤️❤️ 모두가 보는 앞에서 사정해서 다리에 힘이 풀릴 때까지……아아아아❤️❤️❤️ ',
    '쿠퍼액 냄새가 나, 괴로워어어어 아아아아❤️❤️❤️ ',
    '응❤️❤️❤️…… 정액이 넘쳐 나와…… ',
  ],
  ero_clitoris_reports: [
    '음핵이 공기에 드러나서 단단해지고 있어, 부끄러워——❤️❤️❤️ ',
    '클리토리스가 끼여서 아파……그런데 기분 좋아——끈적한 애액이 흘러내려❤️❤️❤️ ',
    '클리토리스가 단단하게 발기해서 전기가 흐른 것 같아……❤️❤️❤️ ',
    '애액이 허벅지까지 끈적하게 흘러내려❤️❤️❤️ 모두 보이잖아……! ',
  ],
  ero_vagina_reports: [
    '하아, 이 도구가 들어간 순간 안쪽이 오그라들어서 숨을 못 쉬겠어, 으하……❤️❤️❤️ ',
    '다리도 안쪽도 흠뻑 젖었어❤️❤️❤️ 미끈거리는 느낌이 부끄러워! ',
    '안 돼, 안쪽이 경련하는 느낌이 너무 강해❤️❤️❤️…… !',
    '그럴 리 없어❤️❤️❤️ 이런 걸 끼웠다고 만족할 리가——❤️❤️❤️ ',
  ],
  ero_vagina_dildo_reports: [
    '도구가❤️❤️❤️ 자궁을 격렬하게 떨리게 해……그런데 아직 부족해……❤️❤️❤️ ',
    '응❤️❤️❤️ 깊숙이 찔렸어❤️❤️❤️ 질척질척……녹아 버려～❤️❤️❤️ ',
    '찌르면서 문질러져서, 신경 쓰지 않으려 할수록 느껴져❤️❤️❤️ 그만……! ',
    '달리면서 딜도에 가 버리다니 아아앙❤️❤️❤️! ',
  ],
  ero_anal_reports: [
    '항문이 벌어지고 있어❤️❤️❤️ 뜨겁게 경련하면서……❤️❤️❤️ ',
    '하아❤️❤️❤️ 항문이 문질러져서 괴로워어어❤️❤️❤️ ',
    '빠지지 마❤️❤️❤️ 「배설」해 버릴 것 같은 긴장감이 위험해❤️❤️❤️ ',
  ],
  ero_tail_reports: [
    '꿈틀거리는 느낌이❤️❤️❤️ 너무 강해……꼬리가 하나 더 생긴 것 같아❤️❤️❤️ ',
  ],
  ero_in_body_reports: ['아읏❤️❤️❤️ 달리는 동안 안의 도구가 움직여서——❤️❤️❤️! '],
  ero_multi_item_reports: ['으어어❤️❤️❤️ 온몸이 떨리고 있어❤️❤️❤️——! '],
  orgasm_common_reports: ['오홋홋홋❤️❤️❤️ 홋홋홋홋❤️❤️❤️—— '],
  orgasm_breast_reports: [
    '유두가 단단해져서……아❤️❤️❤️ 몸이 떨려…… ',
    '유두, 유두가 터질 것처럼 단단해 으어어❤️❤️❤️! ',
  ],
  orgasm_penis_reports: [
    '아래가 단단해……나왔어❤️❤️❤️……! ',
    '!!!——더 사정하고 싶어——❤️❤️❤️! ',
  ],
  orgasm_clitoris_reports: ['으아아❤️❤️❤️ 클리토리스가 으스러질 것 같아❤️❤️❤️ '],
  orgasm_vagina_reports: ['자궁이 찢어질 것처럼 경련해 흐어어어❤️❤️❤️——! '],
  orgasm_vagina_dildo_reports: [
    '안쪽이❤️❤️❤️ 딜도 때문에 부어오를 것 같아——❤️❤️❤️ ',
  ],
  orgasm_anal_reports: [
    '여기서 싸 버리면, 인생이❤️❤️❤️ 그만❤️❤️❤️ ',
    '아～❤️❤️❤️ 항문이 뜨겁게 범해지고 있어❤️❤️❤️ 들락날락하고 있어～❤️❤️❤️ ',
  ],
  orgasm_bv_reports: [
    '가슴도 안쪽도 도구에 점령당했어❤️❤️❤️ 보이지 않는 곳에서 애액이 뿜어져 나와❤️❤️❤️ 짐승처럼 신음하게 돼❤️❤️❤️! ',
  ],
  orgasm_va_reports: [
    '안쪽도 항문도 단단한 것 때문에 망가질 것 같아 으어어어❤️❤️❤️ 온몸이 찢어질 것 같아❤️❤️❤️——! ',
  ],

  in_race_pregnant_info:
    '【임신한 상태로 대회에 출주한 행위가 사회 각계에서 논란을 불러일으켰다】',
  in_race_orgasm_info:
    '【선수가 레이스 도중 공개적으로 절정한 행위가 각계에 큰 파문을 일으켰다】',
};
