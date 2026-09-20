module.exports = class extends require('#/i18n/zh-CN/new-game') {
  rp_select = '演じるキャラを選ぶ';
  rp_select_me = '自分';
  rp_select_tip_1 = '* が付くキャラには口上がある';
  rp_select_tip_2 = '個人実績を達成したキャラだけが演じられる';
  rp_select_tip_3 = (clist) => [...clist, ' など、特殊キャラは演じられない'];

  intro_info1 =
    '十年の苦学の末、ついに金榜に名を連ねた。\nメールボックスのその手紙は金の漆で縁取られ、\nいま手にしたトレーナーバッジと同じ色に光っている。\n\nまだ震える手で、封蝋を剥がした————';
  intro_info2 =
    '任命書\n…………\n…………\n…………\n…………\n…………\n…………\n…………貴殿を本校トレーナーとして招聘する。';
  intro_info3 = '日本中央トレセン学園 理事長';
  intro_sign = (name) => ['(署名)', { isBlank: 2 }, name];
  intro_time = ['(日付)', { isBlank: 2 }, '2000 年 1 月 1 日'];
  intro_input_name =
    '——そして左下に自分の名を記した（名前を入力して改行。全角10文字以内）';
  intro_select_sex = '（性別を選んでください）';
  intro_resign = '署名し直す';
  intro_submit = '任命書を提出';
  intro_re_select_sex = '性別を選び直す';

  set_diff_header = 'ゲームモード';
  set_dif0 = '地上の神国';
  set_dif0_desc =
    '三女神はすべてのウマ娘を平等に守る|トレセンのウマ娘は同輩を大きく超える|ウマ娘は純粋な愛を憧れる';
  set_dif1 = '塵世間';
  set_dif1_desc =
    '三女神の視線はここにはない|トレセンは名門のひとつにすぎない|ウマ娘は現実の重圧に晒される';
  set_dif2 = 'トレップ';
  set_dif2_desc =
    '三女神はウマ娘を見守る。あなたのチーム以外は|レースには強敵が現れる|ウマ娘は様々な方法でストレスを晴らそうとする|トレセンはトレーナーに厳しく、容赦がない';
  set_dif3 = '世界の敵';
  set_dif3_desc =
    '三女神はウマ娘を見守る。あなたとあなたのチーム以外は|レースには強敵が現れる|ウマ娘はあなたを嫌う|トレセンはトレーナーに厳しく、容赦がない';
  set_dif4 = 'ゴモラ';
  set_dif4_desc =
    '三女神はあなたのチームを格別に見守る|トレセンのウマ娘は同輩を大きく超える|ウマ娘は手段を選ばずあなたを独占しようとする|ウマ娘の子たちもまた';
  set_dif5 = 'Uma3rb';
  set_dif5_desc =
    '三女神はあなたのチームを格別に見守る|トレセンのウマ娘は同輩を大きく超える|ウマ娘の股は緩く、常に発情している|ウマ娘は玩具を満載したまま完走できる';
  set_dif6 = 'ソドム';
  set_dif6_desc =
    'ゴモラと同じ|ただし全員がふたなり|トレセンはトレーナーに厳しく、容赦がない';
  set_dif7 = '幻想♂郷';
  set_dif7_desc =
    'ゴモラと同じ|ただし全員が男性|トレセンはトレーナーに厳しく、容赦がない';
  set_guide = '初心者ガイドを表示';
  set_ng_tooltip =
    '* 初めてなら、【地上の神国】か【塵世間】から始めるのがおすすめ！';
  set_detail = '項目ごとに調整';
  set_mode_header = 'プリセット';
  set_option_header = 'ゲームオプション';
  set_next = 'ゲーム開始';

  set_train_diff = 'トレーニング難度';
  set_td_0 = 'お手のもの';
  set_td_1 = 'やっとこなせる';
  set_td_2 = '一歩一歩が険しい';
  set_td_0_desc = 'トレーニング成功率+25%';
  set_td_2_desc = 'トレーニング成功率-25%';

  set_train_buff = 'トレーニング補正';
  set_tb_0 = '事半功倍';
  set_tb_1 = '日々の積み重ね';
  set_tb_2 = '事倍功半';
  set_tb_0_desc = 'トレーニング補正+25%';
  set_tb_2_desc = 'トレーニング補正-25%';

  set_race_diff = 'レース難度';
  set_rd_0 = '歯が立たない相手';
  set_rd_1 = '互角';
  set_rd_2 = '強豪ひしめく';
  set_rd_0_desc = '相手の評価-20%';
  set_rd_2_desc = '相手の評価+10%；伝説の強敵を有効化';

  set_hurt = 'ウマ娘が怪我することがある';
  set_ht_0 = '無事息災';
  set_ht_1 = '危うく難を逃れる';

  set_pressure = 'ウマ娘がストレスを受ける';
  set_ps_0 = '身軽に走る';
  set_ps_1 = '重荷を背負って進む';

  set_money_price = '店の店主';
  set_mp_0 = '情け深い';
  set_mp_1 = '規則どおり';
  set_mp_2 = '悪徳商人';
  set_mp_0_desc = '店の道具価格-50%';
  set_mp_2_desc = '店の道具価格+100%';

  set_sex_skill_price = '調教スキルの因子消費';
  set_race_skill_price = 'レース能力の因子消費';
  set_sp_0 = '低';
  set_sp_1 = '中';
  set_sp_2 = '高';
  set_sp_0_desc = '因子消費-50%';
  set_sp_2_desc = '因子消費+100%';

  set_game_over = 'ゲームオーバー';
  set_go_0 = '宴は終わらない';
  set_go_1 = '+ファン襲撃';
  set_go_2 = '+金の奴隷';
  set_go_3 = '+愛の牢獄';
  set_go_0_desc = '名声が尽きるまで、トレーナー人生は続く';
  set_go_1_desc =
    'ウマ娘の成績があなたの生死を決める……少しでも嫌われていれば、育成の終わりが人生の終わりになる';
  set_go_2_desc =
    'ウマ娘への借金も運命を決める。大人として、資産はきちんと管理すること';
  set_go_3_desc =
    '望みのない恋は、どんな実を結ぶのか。愛で築かれた牢の中で、人生を終える機会もある';

  set_honour = '名声の変化';
  set_hn_0 = '日に日に増す';
  set_hn_1 = '増減なし';
  set_hn_2 = '少しずつ減る';
  set_hn_0_desc = '名声はゆっくり増える。毎ターン名声+1';
  set_hn_1_desc = '他の要因がなければ名声は変わらない';
  set_hn_2_desc = '名声は少しずつ減る。毎ターン名声-1';

  set_honour_empty = '身敗名裂のとき';
  set_he_0 = '静かに退場';
  set_he_1 = '闇取引';
  set_he_0_desc = '名声は尽きた。すべて終わった……システムよ、タイトルへ戻せ';
  set_he_1_desc = '名声が尽きても続けたい？ すべてを代償にしても？';

  set_chara_sex = 'ウマ娘の性別';
  set_cs_0 = '佳人に囲まれて';
  set_cs_1 = '陽気が溢れすぎ';
  set_cs_2 = '陰陽並び立つ';
  set_cs_3 = '現実の投影';
  set_cs_0_desc = '美女に囲まれた！';
  set_cs_1_desc = '青春の汗を流す兄たち……';
  set_cs_2_desc = 'みなさん、女……性？';
  set_cs_3_desc = '耳飾りのある位置は、何を示すのだろう？';

  set_relation = 'ウマ娘の初対面好感';

  set_relation_buff = '好感上昇の難度';
  set_love_buff = '恋慕上昇の難度';
  set_diff_easy = '易しい';
  set_diff_normal = '普通';
  set_diff_hard = '難しい';
  set_diff_easy_desc = '取得+50%';
  set_diff_hard_desc = '取得-50%';

  set_relation_change = '好感の変化';
  set_rc_0 = '日に日に増す';
  set_rc_1 = '君子の交わり';
  set_rc_2 = '見れば見るほど嫌になる';
  set_rc_0_desc = 'ウマ娘たちの好感は日に日に増す。毎ターン好感+5';
  set_rc_1_desc = 'ウマ娘たちの好感は時間では動かない';
  set_rc_2_desc = 'ウマ娘たちは徐々にあなたを嫌う。毎ターン好感-10';

  set_love = 'ウマ娘の初対面恋慕';

  set_love_change = '恋慕の変化';
  set_lc_0 = '思い上がれない';
  set_lc_1 = '少しずつ惹かれる';
  set_lc_0_desc =
    '自ら動かねばウマ娘は恋をしない。恋慕上昇イベントは発生しうる';
  set_lc_1_desc =
    '何もしなくても、ウマ娘たちは依存まで徐々に惹かれる。毎ターン恋慕+1。恋慕上昇イベントは起きない';

  set_unfaith = '浮気への考え方';
  set_uf_0 = '心が広い';
  set_uf_1 = '許さない';
  set_uf_0_desc = 'ウマ娘は、あなたと過ごした時だけを気にかける';
  set_uf_1_desc = '独占欲には気をつけて……';

  set_extreme = 'ウマ娘の極端な行動';
  set_eb_0 = 'しない';
  set_eb_1 = 'ありうる';
  set_eb_2 = 'できるだけ抑える';
  set_eb_3 = '積極的に行う';
  set_eb_0_desc = 'ウマ娘は何もしない。安全';
  set_eb_1_desc = '思いが叶わないとき、ごく低い確率で夜襲や拉致が起きる';
  set_eb_2_desc = 'ウマ娘は夜襲と拉致を抑えようとする……が、かなり無理がある';
  set_eb_3_desc = '見えないところで、彼女たちは歪んだ笑みを浮かべる……';

  set_talent = '生まれつきの特性';
  set_tt_0 = '淫らな牝たち';
  set_tt_1 = '生まれながらの違い';
  set_tt_2 = '清らかで傷ひとつない';
  set_tt_3 = '石の芯を持つ娘';
  set_tt_0_desc = '目に映るのは、みな牝馬';
  set_tt_1_desc = 'だれもが、ただひとり';
  set_tt_2_desc = 'ウマ娘の身体は完璧で、弱点など見当たらない';
  set_tt_3_desc = '快感を与えるのが極めて難しい';

  set_abl_update = 'キャラの性技の学び方';
  set_au_0 = '興味がない';
  set_au_1 = '聡く学ぶ';

  set_resist = 'キャラの強姦への抵抗';
  set_rs_0 = '押せば倒れる';
  set_rs_1 = '激しく抵抗する';

  set_ero_item = '道具の影響';
  set_ei_0 = '水を得た魚';
  set_ei_1 = '一歩も進めない';
  set_ei_0_desc =
    'ある観客「ときどきレースが妙になる。選手の顔色とか、服の湿りとか……でも見応えはある」';
  set_ei_1_desc =
    'ある観客「白目を剥いてよろよろ走って、コースまで濡れてる——有馬記念だぞ、少しは敬意を持て！」；玩具装着時の基礎能力-25%';

  set_mejiro_style = '目白城の流儀';
  set_ms_0 = '自由';
  set_ms_1 = '慈愛';
  set_ms_0_desc = '好きにして❤️';
  set_ms_1_desc = 'メジロが呼んでいる……';

  set_child_love = '不倫の恋';
  set_cl_0 = '許さない';
  set_cl_1 = '許す';
  set_cl_0_desc = '子たちは慕うだけ……あなたが自ら壊さない限り';
  set_cl_1_desc = '子たちは慕うだけ……本当に？';

  set_height = 'ウマ娘の身長';
  set_hg_0 = 'こんなに小さいママ';
  set_hg_1 = '普通でいい';
  set_hg_2 = '支配されたい！';
  set_hg_0_desc = 'ロリに囲まれた天国……';
  set_hg_1_desc = 'ウマ娘の身長は自然に分布する';
  set_hg_2_desc = '巨大ウマ娘は無敵！';

  set_gd_0 = 'もう完全に把握した！';
  set_gd_1 = '初めてのときだけ見せて';

  cus_intro_header = 'キャラメイクの時間！ ランダム生成する？';
  bt_cus_random = 'ランダム生成';
  bt_cus_default = '初期値でいい';
  bt_cus_set = '自分で決める';

  cus_body_header = 'まずは身体の細部から！';
  bt_cus_confirm = 'これで！';

  cus_birthday_header =
    'つぎは身長と誕生日！\nPS：開発者は、2月29日生まれではない前提で進めます';
  cus_birthday_month = '誕生月';
  cus_bm_prev = '前の月';
  cus_bm_next = '次の月';
  cus_birthday_date = '誕生日';
  cus_bd_prev_5 = '5日前';
  cus_bd_prev = '前日';
  cus_bd_next = '翌日';
  cus_bd_next_5 = '5日後';

  cus_breast_header =
    '女性としての象徴は、どの規模がいい？\nPS：大きいほどいい、ではない！';
  cus_breast_1 = '……まな板です';
  cus_breast_2 = '希少価値で';
  cus_breast_3 = '普通でいい';
  cus_breast_4 = '少し大きめがいい！';
  cus_breast_5 = 'すべてを見下ろしたい（違う）';

  cus_penis_header = '「凶器」の規模は？\nPS：大きいほどいい、ではない！';
  cus_penis_1 = 'だれでも受け止められる大きさ！';
  cus_penis_2 = 'それより少し大きめ';
  cus_penis_3 = '普通でいい';
  cus_penis_4 = '堂々としたものがいい！';
  cus_penis_5 = 'みんなを痛くて気持ちよくしたい！';

  cus_uma_header = '空想の時間！ ウマ娘になったら、自分はどんな気性だと思う？';

  cus_uma_color_header_template = 'なるほど、%CHARA% 気性……では、毛色は？';

  cus_call_header = 'では、呼び名の番！';
  cus_call_3 = 'おお、蹄が大好きそうな名前ですね！';
  cus_call_179 = 'おお、ロリコンっぽい名前ですね！';
  cus_call_621 = 'おお、いじめられたい名前ですね！';

  cus_set_callname = 'ナレーションは、どうお呼びすれば？';
  cus_set_by_self = '自分で決める！';

  get_cus_callname_confirm = (actual, call) => [
    actual,
    ' トレーナー、ナレーションはこれから ',
    call,
    ' とお呼びします！',
  ];

  cus_taiwu_header = '最後は、開発者からの贈り物！';

  taiwu_talent_speed = '迅は危亡より';
  taiwu_talent_stamina = '純は自然より';
  taiwu_talent_power = '鋒は砥砺より';
  taiwu_talent_guts = '香は苦寒より';
  taiwu_talent_wiz = '意は心寂に随う';

  taiwu_talent_speed_desc =
    '迅は危亡より、間一髪。あなたのスピードは常人を大きく超える。';
  taiwu_talent_stamina_desc =
    '純は自然より、渾然一体。あなたのスタミナは常人を大きく超える。';
  taiwu_talent_power_desc =
    '鋒は砥砺より、虎を伏せ龍を降す。あなたのパワーは常人を大きく超える。';
  taiwu_talent_guts_desc =
    '香は苦寒より、心を動かして性を忍ぶ。あなたの根性は常人を大きく超える。';
  taiwu_talent_wiz_desc =
    '意は心寂に随い、悟りは自ら生まれる。あなたの賢さは常人を大きく超える。';

  cus_final_header = 'もう一度確認を！';
  get_cus_f_name = (name) => [name, ' トレーナー'];
  get_cus_f_male = (callname, sex, height) => [
    'ナレーションの呼び方：',
    callname,
    { isDivider: true },
    '性別：',
    sex,
    { isDivider: true },
    '身長：',
    height,
    'cm',
  ];
  get_cus_f_female = (callname, sex, height, female_info) => [
    ...this.get_cus_f_male(callname, sex, height),
    { isDivider: true },
    ...female_info,
  ];
  get_cus_f_hair = (hair, hair_color) => [
    '髪型：',
    hair,
    { isDivider: true },
    '髪色：',
    hair_color,
  ];
  get_cus_f_uma = (body_hair, chara) => [
    'ウマ娘化した自分は ',
    body_hair,
    ' の ',
    chara,
    ' ウマ娘だと思う',
  ];
  get_cus_f_skin_male = (skin, armpit, pubic, pv_color, penis) => [
    ...this.get_cus_f_skin_female(skin, armpit, pubic, pv_color),
    { isDivider: true },
    '陰茎の長さ：',
    penis,
  ];
  get_cus_f_skin_female = (skin, armpit, pubic, pv_color) => [
    '肌色：',
    skin,
    { isDivider: true },
    '腋毛：',
    armpit,
    { isDivider: true },
    '陰毛：',
    pubic,
    { isDivider: true },
    '性器の色：',
    pv_color,
  ];
  cus_f_talent = '性格特性：';
  cus_f_xp = 'その他の特性：';
  cus_f_gift = '開発者からの贈り物：';
  bt_random_talents = '特性をランダムに';
  bt_random_all = '全部ランダム！';
  bt_re_make = '選び直す！';
  bt_exit = 'もうやめる……';
};
