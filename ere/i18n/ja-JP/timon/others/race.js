/**
 * @file レース関連 - システム提示
 * @author 黑奴队长
 */
const { get } = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  contestants_conjunction: ' と ',
  prepare_report_sim: '選手が蹄鉄を確認しています……',
  /** @param {PrintedSpan} chara 1番人気の選手名 */
  get_prepare_report_high_mot: (chara) => [
    '1番人気、',
    chara,
    ' は今日、やる気満々に見えます！',
  ],
  /** @param {PrintedSpan} chara 1番人気の選手名 */
  get_prepare_report_low_mot: (chara) => [
    '1番人気、',
    chara,
    ' は今日、やる気が芳しくなさそうです！',
  ],
  /** @param {PrintedSpan} chara 1番人気の選手名 */
  get_prepare_report_normal_mot: (chara) => [
    '1番人気、',
    chara,
    ' は今日、やる気は普通といったところです！',
  ],
  prepare_record_sim: 'コースを確認しています……',
  /**
   * @param {PrintedSpan} race レース名
   * @param {string} uma ウマ娘 or ウマ郎
   */
  get_prepare_record_default: (race, uma) => [
    'この ',
    race,
    ' の舞台で、各',
    uma,
    'も全力で夢を届けてくれます。',
  ],
  /**
   * @param {PrintedSpan} chara 1番人気の選手名
   * @param {string} uma ウマ娘 or ウマ郎
   */
  get_prepare_record_sats_sho: (chara, uma) => [
    chara,
    ' は無事にゲートイン。この先、名',
    uma,
    'になる予感がします。',
  ],
  /** @param {string} uma ウマ娘 or ウマ郎 */
  get_prepare_record_toky_yus: (uma) => [
    uma,
    '生涯一度のダービー。まもなく勝者が決まります。',
  ],
  /** @param {PrintedSpan} race レース名 */
  get_prepare_record_kiku_sho: (race) => [
    '今年の ',
    race,
    ' はまさに群雄割拠、強豪ぞろいです。',
  ],
  /** @param {PrintedSpan} chara 1番人気の選手名 */
  get_prepare_record_takz_kin: (chara) => [
    '皆さんの夢は誰ですか？ 私の夢は ',
    chara,
    ' です',
  ],
  beginning_report_sim: [
    'ゲートを確認しています……',
    '号砲を確認しています……',
    '選手、ゲートイン……',
    'スタート！',
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
        [uma, '、ゲートインを……'],
        ['全', uma, '、準備完了……'],
        '用意……',
        '——ゲートオープン！',
      ],
      [[uma, '、準備はいい……'], 'いつでもスタート……', '用意……', '——スタート！'],
      [
        'まもなく発走……',
        ['出走', uma, ' ', gates, ' 頭……'],
        [get('flag:当前年').toString(), ' 年 ', race, '……'],
        '——スタート！',
      ],
    ];
    return get_random_entry(buffer);
  },
  /** @param {string} uma ウマ娘 or ウマ郎 */
  get_first_report_no_bad_start: (uma) => [
    'スタート、全',
    uma,
    'が並んでゲートを出ました！',
  ],
  /**
   * @param {PrintedSpan} first 先頭で出た選手名
   * @param {PrintedSpan} last 出遅れの選手名
   * @param {string} uma ウマ娘 or ウマ郎
   */
  get_first_report: (first, last, uma) => [
    'スタート、',
    first,
    ' が先に飛び出した！ ほかの',
    uma,
    'が続き、最後は',
    Math.random() < 0.5 ? '出遅れた ' : '後れをとった ',
    last,
    '！',
  ],
  location_change_location_report_template: '%LANE%に入る',
  get_location_change_slope_report: (up_slope) =>
    `${up_slope ? '上り坂' : '下り坂'}を走っています`,
  get_location_change_slope_over_report: (up_slope) =>
    `${up_slope ? '上り坂' : '下り坂'}を過ぎました`,
  location_change_report_template: 'いま%MESSAGE%',
  location_in_order_report_template: 'いまは%LANE%',
  /**
   * @param {PrintedSpan} chara
   * @param {string} rank
   * @param {string} no
   * @returns {TextContent}
   */
  get_order_report(chara, rank, no) {
    return [`${rank}着は ${no} 番 `, chara];
  },
  full_speed_push_reports: [
    (contestants) => [...contestants, ' が全力でスパート！'],
    (contestants) => [...contestants, ' が最後の勝利へ、さらに加速！'],
    (contestants) => [
      '限界を超えろ！',
      ...contestants,
      ' はまだ加速している！',
    ],
  ],
  lost_stamina_reports: [
    (contestants) => [...contestants, '、失速！'],
    (contestants) => [...contestants, ' の脚がふらつき、もう速度を保てない！'],
    (contestants) => [...contestants, ' の速度が落ちた！'],
    (contestants) => [...contestants, ' は限界か！？'],
  ],
  orgasm_reports: [
    (contestants) => [...contestants, ' の顔が赤い。力を出し切ったのか……'],
    (contestants) => [...contestants, ' の体から蒸気が立ち上っている！'],
    (contestants) => [
      ...contestants,
      ' の勝負服を、何がそんなに濡らしている……？',
    ],
    (contestants) => [
      ...contestants,
      ' の脚が一瞬ふらついたが、失速は免れた！',
    ],
  ],
  loc_mind_nige_ex_reports: [
    (contestants) => ['逃げが先を許すものか！ 行け、', ...contestants, '！'],
    (contestants) => [
      'そこはお前の位置じゃない！',
      ...contestants,
      ' が走りで警告している！',
    ],
    (contestants) => [...contestants, ' が先頭の座を奪い返そうとしている！'],
    (contestants) => [
      ...contestants,
      ' は加速を続け、ほかより前へ逃げ切ろうとしている！',
    ],
  ],
  loc_mind_other_ex_reports: [
    (contestants) => [
      ...contestants,
      ' が大きく踏み出し、本来の位置へ向かう！',
    ],
    (contestants) => [
      'そこは',
      contestants.length > 1 ? 'お前' : 'お前たち',
      'の位置じゃない！ 頑張れ ',
      ...contestants,
      '！',
    ],
    (contestants) => [...contestants, ' が位置を奪い返そうと戦っている！'],
  ],
  loc_mind_nige_over_take_reports: [
    (contestants) => [...contestants, ' は迷いなく先頭へ向かう！'],
    (contestants) => [...contestants, ' が先頭を狙っている！'],
    (contestants) => [...contestants, ' の目には先頭しか映っていない！'],
  ],
  loc_mind_nige_speed_up_reports: [
    (contestants) => [
      ...contestants,
      ' は加速を続け、さらに差を広げようとしている！',
    ],
    (contestants) => [...contestants, ' はさらに遠くへ逃げる！'],
    (contestants) => ['逃げ切れ、世界の果てまで、', ...contestants, '！'],
  ],
  loc_mind_other_quick_reports: [
    (contestants) => [
      ...contestants,
      ' は差を広げられるのを嫌い、追い上げている！',
    ],
    (contestants) => ['離されすぎた！', ...contestants, ' が追い上げる！'],
    (contestants) => [...contestants, ' は距離をしっかり保っている！'],
  ],
  loc_mind_other_relax_reports: [
    (contestants) => [
      ...contestants,
      ' は体力を温存しているらしい。大胆な戦術だ！！',
    ],
    (contestants) => [...contestants, ' のリズムが落ちた。油断は禁物だ！！'],
    (contestants) => [...contestants, '、緩みは大敵だ！'],
  ],
  blocked_reports: [
    (contestants) => [...contestants, ' は塞がれた。惜しい！'],
    (contestants) => [...contestants, ' は抜け出しに失敗！'],
    (contestants) => [...contestants, ' は馬群に閉じ込められた！'],
  ],
  temptation_reports: [
    (contestants) => [...contestants, ' のリズムが乱れ、少し焦っている！'],
    (contestants) => [...contestants, ' は少し短気になったか！'],
    (contestants) => [...contestants, ' が焦りに陥った！'],
  ],
  temp_end_reports: [
    (contestants) => [...contestants, ' はようやく本来のリズムに戻った！'],
    (contestants) => [...contestants, ' は落ち着いたようだ！'],
    (contestants) => [...contestants, ' は焦りを振り払った！'],
  ],
  temp_continue_reports: [
    (contestants) => [...contestants, ' のリズムは乱れ続け、まずい！'],
    (contestants) => [...contestants, ' は焦りから抜け出せない！'],
    (contestants) => ['落ち着いて ', ...contestants, '！ 好機を逃すな！'],
  ],
  temp_wrong_style_reports: [
    (contestants) => [...contestants, ' は走りを変えたようだ！'],
    (contestants) => [...contestants, ' はどうして前へ必死に出る！'],
  ],
  /**
   * @param {PrintedSpan} target
   * @param {PrintedSpan} aim
   * @returns {TextContent}
   */
  get_compete_fight_report(target, aim) {
    return [aim, ' を目標に、', target, ' が速度を上げた！'];
  },
  /**
   * @param {PrintedSpan} chara
   * @returns {TextContent}
   */
  get_final_push_report: (chara) => [chara, ' が最後のスパート！'],
  /**
   * @param {TextContent} contestants
   * @param {boolean} at_same_time
   * @returns {TextContent}
   */
  get_final_push_multi_report(contestants, at_same_time) {
    return [
      ...contestants,
      at_same_time
        ? ' が同時に最後のスパート！'
        : ' がほぼ同時に最後のスパート！',
    ];
  },
  /**
   * @param {TextContent} contestants
   * @returns {TextContent}
   */
  get_final_push_follow_report(contestants) {
    return [...contestants, ' も最後のスパートに入った！'];
  },
  overtake_reports: [
    (top, over) => [over, ' が一気に ', top, ' を交わした！'],
    (top, over) => [over, ' が ', top, ' との叩き合いで優位に立った！'],
    (top, over) => [top, ' を交わしたあと、いまこそ ', over, ' の勝ち時だ！'],
    (top) => [top, ' が先頭！ 勝ちを固めたか！'],
  ],
  /**
   * @param {PrintedSpan} first
   * @param {PrintedSpan} second
   * @returns {TextContent}
   */
  get_battle_start_report(first, second) {
    return [first, ' と ', second, ' が激しく叩き合う！'];
  },
  battle_reports: [
    { w: 0.6, h: (first, second) => [first, '！', second, '！'] },
    {
      w: 0.3,
      h: (first, second) => [
        first,
        ' と ',
        second,
        ' の叩き合いはまだ続く！ 双方とも勝利へ全力だ！',
      ],
    },
    {
      w: 0.1,
      h: (first, second) => [
        '膠着！ 膠着！',
        first,
        ' も ',
        second,
        ' も、独り勝ちはできない！',
      ],
    },
    {
      w: 0.1,
      h: (first, second) => [
        '果たして ',
        first,
        ' か、それとも ',
        second,
        ' か！ 最後の一瞬まで分からない！',
      ],
    },
  ],
  top_reports: [
    (top) => [top, ' が先頭をしっかりキープ！'],
    (top) => ['速い、速い！', top, ' が一騎当千！'],
    (top) => [top, ' は絶好調！ このまま押し切るか！'],
    (top) => ['リード継続！ 終盤の ', top, ' に敵なし、か！'],
    (top) => [top, ' が勝利を迎えようとしている！'],
    (top) => [top, '！', top, '！'],
  ],
  /**
   * @param {PrintedSpan} champion
   * @param {string} bashin_behind
   * @returns {TextContent}
   */
  get_finish_report(champion, bashin_behind) {
    return [champion, ' が ', bashin_behind, ' で先にゴールイン！'];
  },
  /**
   * @param {PrintedSpan} champion
   * @param {string} bashin_behind
   * @returns {TextContent}
   */
  get_finish_report_begin_race(champion, bashin_behind) {
    return [
      champion,
      ' が ',
      bashin_behind,
      ' で先にゴールイン！',
      Math.random() < 0.5 ? 'デビューおめでとう！' : '今後の活躍に期待！',
    ];
  },
  ero_common_reports: [
    'うっうっうっうんむぅぅ……',
    '何かが汗と一緒に流れ落ちて……これ、唾液……？❤️❤️❤️',
    '喘ぎ声……聞こえてない……？ もう喘がないで……❤️❤️❤️',
    '足りない……全然足りない❤️❤️❤️',
    'いまこの場で、レースの最中にイってもいいよね、見えないんだから——❤️❤️❤️',
    'ああ❤️❤️❤️熱が体内を駆け回って、もう我慢できない❤️❤️❤️',
  ],
  ero_team_reports: ['見てる……？❤️❤️❤️絶対、ばればれだよね❤️❤️❤️'],
  ero_breast_reports: [
    'いじめられ続ける乳首❤️❤️❤️赤く腫れて、石ころみたいに硬い❤️❤️❤️',
  ],
  ero_penis_reports: [
    '恥ずかしい❤️❤️❤️でも射精したい気持ちが止まらない❤️❤️❤️',
    'カメラに下半身を狙われて走って……射精したい❤️❤️❤️みんなに見られながら射精して、脚が立たなくなるまで……ああああ❤️❤️❤️',
    '先走りの匂いがする、苦しいよぉおおおおああああ❤️❤️❤️',
    'ん❤️❤️❤️……精液が溢れてくる……',
  ],
  ero_clitoris_reports: [
    '陰核が空気に晒されて硬くなってる、恥ずかしい——❤️❤️❤️',
    'クリトリスを挟まれて痛い……でも気持ちいい——ねっとりした愛液が垂れてくる❤️❤️❤️',
    'クリトリスが硬く勃起して、電気を浴びたみたい……❤️❤️❤️',
    '愛液が太ももまでべたべたに流れてる❤️❤️❤️みんな見える……！',
  ],
  ero_vagina_reports: [
    'はぁ、この玩具が入った瞬間、中が縮んで息ができない、んは……❤️❤️❤️',
    '脚も中も水浸し❤️❤️❤️ぬるぬるした感触が恥ずかしい！',
    'だめ、中が痙攣する感覚が強すぎる❤️❤️❤️……！',
    'そんなはずない❤️❤️❤️こんなものを挟んで満足できるわけ——❤️❤️❤️',
  ],
  ero_vagina_dildo_reports: [
    '玩具が❤️❤️❤️子宮を激しく震わせてる……でもまだ足りない……❤️❤️❤️',
    'ん❤️❤️❤️奥まで突かれた❤️❤️❤️ぐちゅぐちゅ……溶けちゃう～❤️❤️❤️',
    '突きながら擦られて、気にしないほど感じる❤️❤️❤️やめて……！',
    '走りながら張り型でイかされるなんてんおぉお❤️❤️❤️！',
  ],
  ero_anal_reports: [
    '尻穴が拡げられてる❤️❤️❤️熱く痙攣して……❤️❤️❤️',
    'はぁ❤️❤️❤️菊座の摩擦が苦しいよぉおお❤️❤️❤️',
    '抜け落ちないで❤️❤️❤️『排泄』してしまうような緊張がやばい❤️❤️❤️',
  ],
  ero_tail_reports: ['蠢く感触が❤️❤️❤️強すぎる……二本目の尻尾みたい❤️❤️❤️'],
  ero_in_body_reports: ['あうっ❤️❤️❤️走りながら、中の玩具が動いて——❤️❤️❤️！'],
  ero_multi_item_reports: ['んおぉお❤️❤️❤️全身が震えてる❤️❤️❤️——！'],
  orgasm_common_reports: ['おほっほっほ❤️❤️❤️ほっほっほっほ❤️❤️❤️——'],
  orgasm_breast_reports: [
    '乳首が硬くなって……あ❤️❤️❤️体が震えて……',
    '乳首、乳首が割れそうなくらい硬いんおぉお❤️❤️❤️！',
  ],
  orgasm_penis_reports: [
    '下が硬い……出た❤️❤️❤️……！',
    '！！！——もっと射精したい——❤️❤️❤️！',
  ],
  orgasm_clitoris_reports: ['おぉあ❤️❤️❤️クリトリスが潰れそう❤️❤️❤️'],
  orgasm_vagina_reports: [
    '子宮が裂けそうなくらい痙攣してるほっおぉおおお❤️❤️❤️——！',
  ],
  orgasm_vagina_dildo_reports: ['中が❤️❤️❤️張り型で腫れそう——❤️❤️❤️'],
  orgasm_anal_reports: [
    'ここで出したら、人生が❤️❤️❤️やめて❤️❤️❤️',
    'あ～❤️❤️❤️尻穴が熱く犯されてる❤️❤️❤️出し入れされてる～❤️❤️❤️',
  ],
  orgasm_bv_reports: [
    '胸も中も玩具に占められてる❤️❤️❤️見えないところで愛液が噴いてる❤️❤️❤️獣みたいに喘いじゃう❤️❤️❤️！',
  ],
  orgasm_va_reports: [
    '中も尻穴も硬いもので壊れそうおぉおお❤️❤️❤️全身が引き裂かれそう❤️❤️❤️——！',
  ],

  in_race_pregnant_info:
    '【選手が腹を大きくして出走した行為が、各界で取り沙汰されている】',
  in_race_orgasm_info:
    '【選手がレース中に公然と絶頂した行為が、各界で大きな波紋を呼んだ】',
};
