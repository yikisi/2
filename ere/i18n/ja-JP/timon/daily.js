/**
 * @file 日常の地の文
 * @author 雞雞
 * @author 幽白書
 * @author Mr.E.
 * @author 阿格尼斯数码公司
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');
const { get_abbr_number } = require('#/utils/value-utils');

const { buff_colors, money_color } = require('#/data/color-const');

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {CharaTalk} minoru
   */
  good_morning(chara, you, minoru) {
    const buffer = [
      /** @author 雞雞 */
      {
        h() {
          era.print([chara.get_colored_name(), ' は親指を立てた。']);
        },
      },
      {
        h() {
          era.print([
            chara.get_colored_name(),
            ' は食べ過ぎたのか、お腹がぽっこりしている。',
          ]);
        },
      },
      {
        h() {
          era.print([chara.get_colored_name(), ' は何かを一心に読んでいる。']);
        },
      },
      {
        // CFLAGNAME:65 = 成长阶段
        c: () => era.get(`cflag:${chara.id}:65`) < 5,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は同級生たちと楽しそうに話している。',
          ]);
        },
      },
      {
        // CFLAGNAME:65 = 成长阶段
        c: () => chara.id !== 301 && !(era.get('cflag:301:48') < 3 * 48),
        h() {
          era.print([
            chara.get_colored_name(),
            ' は受付で ',
            minoru.get_colored_name(),
            ' に何か問い合わせている。',
          ]);
        },
      },
      /** @author 幽白書 */
      {
        // TALENTNAME:0 = 情感活动
        c: () => era.get(`talent:${chara.id}:0`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は週末にテレビで見た冗談を興奮気味に ',
            you.get_colored_name(),
            ' へ話し始め、途中で自分から先に笑い出してしまった。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は週末に見たドラマの話をしながら、途中でまた泣き出してしまった。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ' が見ると、',
            chara.get_colored_name(),
            ' は何人かの',
            chara.uma_sex_title,
            'と輪になって怪談をしているらしい。しばらくすると ',
            chara.get_colored_name(),
            ' は顔色を失っていた。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            ' は ',
            chara.get_colored_name(),
            ' の髪に小さな枝が刺さっているのに気づいた。',
            you.get_colored_name(),
            ' が取るまで、',
            chara.get_colored_name(),
            ' は頭の異物に気づかなかった。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            ' はトレーナー室で着替えるなと ',
            chara.get_colored_name(),
            ' を叱ったが、返ってきたのは、なぜいけないのか分からないといった顔だった。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' はほかの',
            chara.uma_sex_title,
            'と恋の噂話をしているらしい。',
            you.get_colored_name(),
            ' が見ていると、',
            chara.get_colored_name(),
            ' は交際中の',
            chara.uma_sex_title,
            'に質問を重ね、相手が真っ赤になって逃げるまでやめなかった。',
          ]);
        },
      },
      {
        // TALENTNAME:1 = 自信程度
        c: () => era.get(`talent:${chara.id}:1`) === 1,
        h() {
          era.print([
            'トレーナー室に入ると、',
            you.get_colored_name(),
            ' は ',
            chara.get_colored_name(),
            ' がいつものように自分を卑下しているのを聞いた。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:1`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ' が ',
            chara.get_colored_name(),
            ' に挨拶すると、わけもわからず ',
            chara.get_colored_name(),
            ' に慰められた。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:1`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ' が ',
            chara.get_colored_name(),
            ' の頭を撫でると、なぜか ',
            chara.get_colored_name(),
            ' は罰を受けると勘違いし、こわごわ目を閉じた。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:1`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' はトレーニング場の真ん中に立ち、世界の王であるかのような傲然とした態度を見せている。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:1`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' はスタンドから、場内の他の',
            chara.uma_sex_title,
            'の走りに逐一点をつけ、主観たっぷりの評価を述べている。',
          ]);
        },
      },
      {
        c: () =>
          // CFLAGNAME:1 = 种族
          era.get(`cflag:${chara.id}:1`) > 0 &&
          era.get(`talent:${chara.id}:1`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は溜息をつき、学園に互角の相手がいないと嘆いている。',
          ]);
        },
      },
      {
        // TALENTNAME:2 = 痛苦感受
        c: () => era.get(`talent:${chara.id}:2`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は転んだ。顔を上げたとき、',
            you.get_colored_name(),
            ` は${chara.sex}の目に涙が溜まっているのを見た。`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は友人と遊んでいて、罰ゲームはおでこをはじくことらしい。負けた ',
            chara.get_colored_name(),
            ' が怯えた顔をしているのを、',
            you.get_colored_name(),
            ' は目撃した。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は友人たちと映画の話をしていた。血腥い筋を聞いた瞬間、',
            chara.get_colored_name(),
            ' の両耳は自然と伏せられた。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は激しく転んだ。',
            you.get_colored_name(),
            ' が心配していると、',
            chara.get_colored_name(),
            ' は何もなかったように体を払って立ち上がった。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は転んだ。',
            you.get_colored_name(),
            ' が傷口の手当てをしていると、顔を上げたときにはもう ',
            chara.get_colored_name(),
            ' はいつの間にか眠っていた。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は痛みに耐えるコツを披露している……意味のよく分からない主題だが、意外と多くの人が真剣に聞き、メモまで取っている。',
          ]);
        },
      },
      {
        // TALENTNAME:3 = 恐惧感受
        c: () => era.get(`talent:${chara.id}:3`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' はグラウンドの隅に隠れ、まわりのあまりに陽気な人たちと関わりたくなさそうだ。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' はひとり、トレーニング場の影に丸まり、枝で地面に同じ渦巻きを何度も描いている。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ' は、自動販売機の反射ガラスに向かって低く独り言を言う ',
            chara.get_colored_name(),
            ' を見つけた。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            ' は、',
            chara.get_colored_name(),
            ' がこっそりタンポポの種を空へ吹き、振り返って悪戯成功の満面の笑みを見せるのを見た。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' はトレーニング用のタイヤを巨大な輪にして、音程の外れたライブ曲を鼻歌しながら芝生の上を押して走っている。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' はスポーツドリンクを抱えて跳ね歩き、髪が風に舞っている。',
          ]);
        },
      },
      {
        // TALENTNAME:4 = 羞耻忍耐
        c: () => era.get(`talent:${chara.id}:4`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' はトレーナー室のカーテンの陰で本を開き、足音が聞こえるとすぐ本を閉じて胸に抱いた。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は自動販売機の投入口の角度を何度も直し、硬貨が真っすぐ落ちても音が出ないようにしている。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === 1,
        h() {
          era.print([
            'トレーナー室の棚の陰が微かに揺れている。',
            chara.get_colored_name(),
            ' はそこで着替えていて、',
            you.get_colored_name(),
            ' に見つかると顔を真っ赤にした。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            ' は突然 ',
            chara.get_colored_name(),
            ' に背負われ、トレーニング場へ向かった。風速の快感を味わわせてやるのだという。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は跳び箱を並べ、トレーニング場の',
            chara.uma_sex_title,
            'たちを集めて、一度にいくつ飛べるか勝負を始めた。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' はトレーニング場の入口に座り、通りかかる',
            chara.uma_sex_title,
            'に寒い冗談を一つ言わせないと通さない。',
          ]);
        },
      },
      {
        // TALENTNAME:5 = 反感获取
        c: () => era.get(`talent:${chara.id}:5`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は通りかかる',
            chara.uma_sex_title,
            `を睨みつけ、睨まれた子たちは怯えた悲鳴を上げた。`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は障害柵にスプレーで落書きし、',
            you.get_colored_name(),
            ' を見つけると、指先の塗料を挑発するように壁へ塗りつけた。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === 1,
        h() {
          era.print([
            '更衣室からチリチリという音がする。',
            chara.get_colored_name(),
            ' は制服の袖口を穴だらけに切り、糸くずが床に散らばっている。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === -1,
        h() {
          era.print([
            '器具室から暖かい黄色い光が漏れている。',
            chara.get_colored_name(),
            ' は古いプレートに包帯を巻き、緩衝帯を作っている。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' はスポーツドリンクを何本も抱えてトレーニング場の脇に立ち、汗だくの',
            chara.uma_sex_title,
            'を見つけると差し出す。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' はトレーニング場の小石を拾っている。転んだとき、尖った石で二次被害が出ないように。',
          ]);
        },
      },
      {
        // TALENTNAME:6 = 反抗意愿
        c: () => era.get(`talent:${chara.id}:6`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ' の予定表は ',
            chara.get_colored_name(),
            ' にマーカーで消され、',
            chara.get_colored_name(),
            ' の組んだ用事に書き換わっていた。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ' のトレーナー室には、',
            chara.get_colored_name(),
            ' が断りもなく置いていった品々が溢れかえっている。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === 1,
        h() {
          era.print([
            '事前の約束もないのに、',
            chara.get_colored_name(),
            ' は当然のように、今日の放課後は ',
            you.get_colored_name(),
            ' に買い物へ付き合えと言っている。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            ' は、トレーナー室の前で何度も手を上げては、ついにドアを叩けない ',
            chara.get_colored_name(),
            ' を見つけた。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は突然動き出した散水機に驚いて尻餅をつき、呆然としている。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === -1,
        h() {
          era.print([
            'トレーナー室のロッカーが微かに揺れている。',
            chara.get_colored_name(),
            ' は突然の併走の誘いに逃げ込み、中で縮こまっている。',
          ]);
        },
      },
    ];
    get_random_entry(buffer.filter((t) => !t.c || t.c())).h();
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} is_sleep
   */
  select(chara, you, is_sleep) {
    if (is_sleep) {
      era.print([chara.get_colored_name(), ' は深く眠っている。']);
    } else {
      const buffer = [
        {
          h() {
            era.print([
              chara.get_colored_name(),
              ' は ',
              you.get_colored_name(),
              ' に挨拶した。',
            ]);
          },
        },
        {
          h() {
            era.print([
              chara.get_colored_name(),
              ' は ',
              you.get_colored_name(),
              ' に軽く頷き、いつでも動けると示した。',
            ]);
          },
        },
      ];
      get_random_entry(buffer).h();
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_gn_sex_message: (chara, you) => [
    '忙しい一日が終わり、',
    you.get_colored_name(),
    ' は ',
    chara.get_colored_name(),
    ' を学生寮の入口まで送った。',
    chara.get_colored_name(),
    ' はもじもじしながら、一緒に寝ないかと誘ってきた……',
  ],
  gn_sex_yes: '受け入れる',
  gn_sex_no: '断る',
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async gn_sex_accept(chara, you) {
    await era.printAndWait([
      'まわりの温かい視線のなか、頬を赤らめた ',
      chara.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' の腕を取り、ゆっくりと去っていった……',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async gn_sex_force(chara, you, callname) {
    await era.printAndWait([
      'その瞬間、',
      chara.get_colored_name(),
      ' は顔色を変えると、',
      you.get_colored_name(),
      ` を挟んで強引に外へ歩き出した。${chara.sex}の `,
      callname,
      ' に跪かせて、性の特訓をさせるつもりらしい！',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   */
  async gn_sex_reject(chara) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' は落胆して振り返り、学生寮へ歩いていった……',
    ]);
  },
  /**
   * @author 雞雞
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} c_awake
   * @param {boolean} y_awake
   */
  good_night_normal(chara, you, c_awake, y_awake) {
    if (c_awake && y_awake) {
      era.print([
        '忙しい一日が終わり、',
        you.get_colored_name(),
        ' は ',
        chara.get_colored_name(),
        ' を学生寮の入口まで送り、おやすみを交わしてそれぞれ帰った。',
      ]);
    } else if (y_awake) {
      era.print([
        '気持ちよさそうに眠る ',
        chara.get_colored_name(),
        ' を見て、',
        you.get_colored_name(),
        ' はどうしても起こせなかった。仕方なく自分で学生寮まで送り届け、凝った肩を揉みながらトレーナー寮へ戻った。',
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        ' は人事不省に眠っており、朦朧のなかで ',
        chara.get_colored_name(),
        ' の別れの声だけが聞こえた気がした。',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_study(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' はトレーナー室で ',
      chara.get_colored_name(),
      ` の学習を指導し、解けなかった問題を${chara.sex}に解かせることができた。`,
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_prepare(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' とトレーナー室でレース前の準備をした。次の一戦に臨むには、十二分の気合が要る。',
    ]);
  },
  /**
   * @author 雞雞
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} is_sleep
   */
  async talk(chara, you, is_sleep) {
    if (is_sleep) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' はかすかな鼾を立て、気持ちよく眠っている。',
      ]);
    } else {
      // BASENAME:0 = 体力
      const low_stamina =
        era.get(`base:${chara.id}:0`) < 0.45 * era.get(`maxbase:${chara.id}:0`);
      // CFLAGNAME:48 = 育成回合计时
      const in_edu = era.get(`cflag:${chara.id}:48`) < 3 * 48;
      const buffer = [
        {
          c: () => low_stamina,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' は元気がなさそうだ。',
              chara.get_colored_name(),
              ' を休ませたほうがいい。',
            ]);
          },
        },
        {
          c: () => low_stamina,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' は熱のこもった目で ',
              you.get_colored_name(),
              ' を見、休みの許可を求めている。',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === -2,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' は印堂が暗く、全身の毛並みも逆立って、やる気は最悪に見える。',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === -1,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' は顔色が優れず、準備運動も思うようにいかず、やる気不足に見える。',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === 0,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' は表情がかなり硬く、少し緊張している。やる気は普通といったところだ。',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === 1,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' は楽しそうにコースで準備運動をしている。やる気は良さそうだ。',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === 2,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' は上機嫌にコースで跳ね回っている。やる気は満々だ。',
            ]);
          },
        },
        {
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' はずっと気楽な表情を保っている。',
            ]);
          },
        },
      ];
      await get_random_entry(buffer.filter((t) => !t.c || t.c())).h();
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_gift(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' が贈った贈り物に、',
      chara.get_colored_name(),
      ' はとても喜んだ。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_cook(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' とトレーナー室で一緒に料理をした。今日は体にいい有機ニンジンにしよう、ということになった。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_rest(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' とトレーナー室で一緒に休み、頭を空っぽにしてしばらく過ごした。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_game(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' とトレーナー室で一緒にゲームをし、楽しい時間を過ごした。',
    ]);
  },
  bm_money_message: 'いくら借りる？',
  bm_time_message: 'いつまで借りる？',
  get_bm_confirm_message: (amount, time, repay) => [
    '借入 ',
    { ...get_abbr_number(amount), color: money_color },
    ' ウマコイン。以降 ',
    { content: time.toLocaleString(), color: buff_colors[3] },
    ' 週間、毎週 ',
    { ...get_abbr_number(repay), color: money_color },
    ' ウマコインを返済。合計 ',
    {
      ...get_abbr_number(repay * time),
      color: money_color,
    },
    ' ウマコイン。受け入れる？',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} amount
   */
  async bm_confirm(chara, you, amount) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' から ',
      { content: amount.toLocaleString(), color: money_color },
      ' ウマコインを借りた……',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_a_tree_hollow(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' と中庭の枯れ木の洞へ行った。',
    ]);
    await era.printAndWait([
      `${chara.sex}が洞に向かって吠える様子を見て、`,
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' を最強へ導く決意を新たにした。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_a_dating(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' と中庭でデートした。その組み合わせに、まわりの生徒は噂話を抑えきれない。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_r_lunch(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' と屋上で弁当を食べ、弁当箱の中身を交換した。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_r_fishing(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' と川辺で釣りをした。大漁でありますように。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_r_walking(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' と川辺を散歩した。今日もいい気分だ。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_arcade(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' と商店街のゲームセンターへ行った。クレーンの爪よ、開くな。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_drawing(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' と商店街でくじを引いた。いいものは当たるだろうか。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_ktv(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' と商店街のカラオケへ行った。山頂の友達もハイになってきた！',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_movie(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' と商店街で映画を見た。最近、いい作品はあるだろうか。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} dice 祈祷掷骰结果，0-1 之间的小数，越小越好
   */
  async o_c_pray(chara, you, dice) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' と神社で祈った。',
    ]);
    if (dice < 0.5) {
      await era.printAndWait([
        dice < 0.05 ? '大吉' : '吉',
        'のおみくじが出た！ この一行は、とても上機嫌になった。',
      ]);
    } else {
      await era.printAndWait([
        '凶のおみくじが出た！ この一行は、天から降る厄を警戒しっぱなしになった。',
      ]);
    }
  },
  /**
   * @author Mr.E.
   * @param {CharaTalk} chara
   * @param {number} dice 祈祷掷骰结果，0-0.05 之间的小数，这里根据数值计算大成功的类型
   */
  async oc_great_luck(chara, dice) {
    // FLAGNAME:122 = 强奸抵抗
    if (dice < 0.0001 && era.get('flag:122') === 1) {
      await era.printAndWait('署名は未知の術式素材だった！');
    } else if (dice < 0.01) {
      await era.printAndWait([
        '目の前に色とりどりの門が幻視され、急に気分がよくなった',
      ]);
    } else if (dice < 0.02) {
      await era.printAndWait([
        '一陣の風が吹き、',
        chara.get_colored_name(),
        ' の体へ倒れ込んでしまった？！',
      ]);
    } else if (dice < 0.03 && chara.sex_code !== 1) {
      await era.printAndWait([
        '一陣の風が吹き、隣の ',
        chara.get_colored_name(),
        ' のスカートがめくれた？！',
      ]);
    } else {
      await era.printAndWait(['一陣の風が吹き、なんと 150 ウマコイン？！']);
    }
  },
  /** @param {CharaTalk} chara */
  oc_remove_train_debuff(chara) {
    era.print([
      '【',
      chara.get_colored_name(),
      ' のトレーニングがより順調になったようだ】',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_restaurant(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' と駅前で食事をした。中華、和食、それとも洋食にする？',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_dating(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' と駅前でデートした。手を繋ぐふたりの姿に、羨む視線が少なくない。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_shopping(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' と駅前の商店を回った。ちょっとした気持ちを買おう。',
    ]);
  },
  cl_new_year: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        '新しい一年を迎え、',
        you.get_colored_name(),
        ' は ',
        chara.get_colored_name(),
        ' とトレーナー室でしっかり祝った。',
      ]);
    };
    f.title = '新年';
    return f;
  })(),
  cl_valentine: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        '今日はバレンタインデー。',
        you.get_colored_name(),
        ' は ',
        chara.get_colored_name(),
        ' とトレーナー室で贈り物を交わした。',
      ]);
      await era.printAndWait([
        '相手の喜ぶ顔を見て、',
        you.get_colored_name(),
        ' も嬉しくなった。',
      ]);
    };
    f.title = 'バレンタインデー';
    return f;
  })(),
  cl_palace: (() => {
    /**
     * @author 天马闪光蹄
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        '殿堂週は、走ることを志す',
        chara.uma_sex_title,
        'たちにとって、最も大切な祭りのひとつだ。',
      ]);
      // CFLAGNAME:47 = 殿堂
      switch (era.get(`cflag:${chara.id}:47`)) {
        case 2:
          await era.printAndWait([
            you.get_colored_name(),
            ' と ',
            chara.get_colored_name(),
            ' の優れた成績により、ふたりは当然の主役として招かれた。',
          ]);
          // CFLAGNAME:48 = 育成回合计时
          if (era.get(`cflag:${chara.id}:48`) === 143 + 9) {
            await era.printAndWait([
              '時が来ると、',
              chara.get_colored_name(),
              ' は隠しきれない喜びと誇りを帯びて、舞台の中央へ歩いていった。',
            ]);
          }
          await era.printAndWait([
            you.get_colored_name(),
            ' は、',
            chara.sex,
            'が一段ずつ壇上へ上がり、ふたりの奮闘の過去を語り、経験を聴衆と分かち合うのを見た。',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' の目は少し霞み、ふたりのあいだのあれこれが自然と蘇ってくる……',
          ]);
          break;
        case 1:
          await era.printAndWait([
            you.get_colored_name(),
            ' と ',
            chara.get_colored_name(),
            ' は並んでトレセン学園の大講堂へ向かい、行事に参加した。',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' の担当は、耳も尻尾も無意識に少し伏せ、あまり元気がなさそうだ。',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は ',
            chara.get_colored_name(),
            ' を見て溜息をつき、そっと片手を',
            chara.sex,
            'の肩に置いて支えた。その仕草で、',
            chara.sex,
            'も少し立ち直ったようだった。',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' と ',
            chara.get_colored_name(),
            ' も力を尽くしたが、成績は殿堂入りには届かなかった。人生には、そういう遺憾もある。',
          ]);
          await era.printAndWait([
            '最後の勝者にはなれなかったが、祭りの空気に包まれ、気持ちはいくらか和らいだ。',
          ]);
          break;
        default:
          // CFLAGNAME:65 = 成长阶段
          if (era.get(`cflag:${chara.id}:65`) === 5) {
            await era.printAndWait([
              `殿堂週は、現役の${chara.uma_sex_title}たちにとって大切な日であるだけでなく、`,
              you.get_colored_name(),
              ' のような仕事関係者にとっても、忙しく緊迫した一日になる。',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' と ',
              chara.get_colored_name(),
              ' は会場へ入り、式の内容を丹念に記録した……時おり顔を上げて互いを見、また必要な情報へ沈んでいく。',
            ]);
          } else {
            await era.printAndWait([
              'この時期になると、トレセン学園では行事が開かれる。そのひとつが、数名の殿堂入り',
              chara.uma_sex_title,
              'を招いて数日にわたる講演を行い、他の',
              chara.uma_sex_title,
              'やトレーナーたちへ経験を伝えることだ。',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' と ',
              chara.get_colored_name(),
              ' は、慕って集まった人混みのあいだから、ようやく席を一つ確保して座った。',
            ]);
            // CFLAGNAME:1 = 种族
            if (era.get(`cflag:${chara.id}:1`) > 0) {
              await era.printAndWait([
                '壇上の',
                chara.uma_sex_title,
                'の、静かに熱を帯びた声が響くと、',
                you.get_colored_name(),
                ' は ',
                chara.get_colored_name(),
                ' が背筋を伸ばし、瞳に憧れを浮かべているのに気づいた……',
              ]);
            }
          }
      }
    };
    f.title = '殿堂週';
    return f;
  })(),
  cl_fans: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        '四月のファン感謝祭で、',
        you.get_colored_name(),
        ' は ',
        chara.get_colored_name(),
        ' と一緒にファンへ芸を披露した。',
      ]);
    };
    f.title = 'ファン感謝祭';
    return f;
  })(),
  cl_temple_fair: (() => {
    /**
     * @author 天马闪光蹄
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        '縁日のあいだ、',
        you.get_colored_name(),
        ' は ',
        chara.get_colored_name(),
        ' を誘い、夏合宿場のそばの市へ遊びに行くことにした。',
      ]);
      if (era.get(`cflag:${chara.id}:65`) === 5) {
        if (era.get(`love:${chara.id}`) >= 50) {
          await era.printAndWait([
            chara.sex,
            'はすぐに承諾した。ふたりは大人の社畜の荷をいったん下ろし、一日とことん遊んだ……',
          ]);
        } else {
          await chara.say_and_wait('デート？');
          await era.printAndWait([
            you.get_colored_name(),
            ' は画面の通知を見て思わず微笑み、返信しようとしたところで新しいメッセージが飛び込んできた。',
          ]);
          await chara.say_and_wait('じゃあ、それで決まり。');
          await era.printAndWait([
            '文字の下は、浴衣を着て少しだけ装った',
            chara.sex,
            'の自撮りだった。',
            you.get_colored_name(),
            ' は思わず息を止めた……',
          ]);
          await era.printAndWait('言うまでもなく、これはよい思い出になる。');
        }
      } else if (era.get(`love:${chara.id}`) >= 50) {
        await era.printAndWait([
          chara.sex,
          'はすぐに承諾した。ふたりはすべての用事を頭の外へ放り出し、一日とことん遊んだ……',
        ]);
      } else {
        await era.printAndWait([
          chara.sex,
          'は素早く ',
          you.get_colored_name(),
          ' に返信した。',
          you.get_colored_name(),
          ' が入口で先に待っていると、顔を上げた瞬間、新しい浴衣を着て念入りに装った',
          chara.sex,
          'を見つけた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' が反応するより先に、彼女はかすかに微笑み、',
          you.get_colored_name(),
          ' の腕を取って一緒に歩き出した……',
        ]);
        await era.printAndWait('ふたりは楽しい一日を過ごした。');
      }
    };
    f.title = '縁日';
    return f;
  })(),
  cl_halloween: (() => {
    /**
     * @author 天马闪光蹄
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      if (era.get(`cflag:${chara.id}:65`) === 5) {
        await era.printAndWait(['トレセンの祭事は、往々にして他所とは違う。']);
        await era.printAndWait([
          'たとえば今日……',
          you.get_colored_name(),
          ' は隣で少し滑稽で不気味に装った',
          chara.sex,
          'を見て、心の底で溜息をついた。',
        ]);
        await era.printAndWait(
          '本来は子供が凝って着飾り、大人が家で飴を待てば足りる祭りだ。校内上層は「生徒と一体になる」などの理由で教職員にも仮装を勧め、外へ出て飴を配らせ、そのために半日の休みまで出した。',
        );
        await era.printAndWait(
          'あるいは……ただ、遊びたい大人の口実かもしれない。',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' がそう考えた瞬間、横から殺気を帯びた視線を感じ、慌てて頭を振って ',
          chara.get_colored_name(),
          ' の歩幅に追いついた。',
        ]);
        await era.printAndWait('この夜は疲れるが、それでも面白い。');
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' がくつろいでいると、扉が急に、急でもなく猛烈なノックで鳴った。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' はだいたい誰の仕業か分かっていた。扉を開け、奇妙な装いの ',
          chara.get_colored_name(),
          ' に驚いたふりをし、',
          chara.sex,
          'と一緒に飴をもらいに出た……',
        ]);
        await era.printAndWait(
          '道中、おかしなものをいくつも見かけた気がする。',
        );
      }
    };
    f.title = 'ハロウィン';
    return f;
  })(),
  cl_christmas: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        'クリスマスが来て、',
        you.get_colored_name(),
        ' は ',
        chara.get_colored_name(),
        ' と一緒にサンタクロースに扮して祝った。はしゃぎすぎた気力を使い切るのは、夜になってからだった。',
      ]);
    };
    f.title = 'クリスマス';
    return f;
  })(),
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async birthday_remote(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は遠隔で ',
      chara.get_colored_name(),
      ' に誕生日の祝福を送った',
    ]);
    await era.printAndWait([chara.get_colored_name(), ' はとても喜んでいる。']);
  },
  /**
   * @author 阿格尼斯数码公司
   * @param chara
   * @param you
   */
  async birthday_normal(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' のために、盛大な誕生日パーティーを用意した！',
    ]);
    const buffer = [
      {
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' は誕生日の主役として、とても嬉しそうだ',
          ]);
        },
      },
      {
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' は揺れる燭光のなかで目を閉じ、今年の誕生日の願いを込めた',
          ]);
        },
      },
      {
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' はみんなの楽しさに感染し、ずっと笑顔を浮かべている',
          ]);
        },
      },
      {
        c: () =>
          // TALENTNAME:11 = 社交态度
          era.get(`talent:${chara.id.id}:11`) === -1 &&
          // EXPNAME:20 = 过生日次数
          era.get(`exp:${chara.id}:20`) === 0,
        async h() {
          await era.printAndWait([
            'さまざまな集まりに顔を出すことの多い ',
            chara.get_colored_name(),
            ' は、',
            you.get_colored_name(),
            `が${chara.sex}のために誕生日パーティーを企画するとは全く予想しておらず、驚きのなかで楽しい一日を過ごした`,
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === -1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            'そうは言っても、',
            chara.get_colored_name(),
            ' は',
            you.get_colored_name(),
            'の熱意を知ると、',
            you.get_colored_name(),
            `が${chara.sex}のために用意した誕生日パーティーを、予想外の全校規模の誕生日祭へ変えてしまった……！`,
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === -1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            'そうは言っても、',
            chara.get_colored_name(),
            ' は自分でもう半分の誕生日パーティーを用意していたらしい。二つのパーティーが混ざり、規模が爆発的に広がった……！',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === 1 &&
          era.get(`exp:${chara.id}:20`) === 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' はこんなパーティーがあるとは思っていなかったらしく、集まった人々を見て少しこわごわしている',
          ]);
          if (era.get(`cflag:${chara.id}:1`) > 0) {
            await era.printAndWait('ただし、尻尾はとても速く揺れている');
          } else {
            await era.printAndWait('ただし、とても嬉しそうだ');
          }
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id.id}:11`) === 1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            '今回の ',
            chara.get_colored_name(),
            ' は意外にも、どの場面でも臆せず、みんなと一緒に誕生日の歌を歌った',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === 1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' は相変わらず少し怯えた様子だが、贈り物をもらったときはとても嬉しそうだった',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === 1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' は黙って誕生日ケーキを食べ、',
            era.get(`cflag:${chara.id}:1`) > 0
              ? '耳を揺らしながら'
              : '微笑みながら',
            `、まわりの人が${chara.sex}の昔話をするのを聞いている`,
          ]);
        },
      },
      {
        // TALENTNAME:7 = 坦率程度
        c: () =>
          era.get(`talent:${chara.id}:7`) === -1 &&
          era.get(`exp:${chara.id}:20`) === 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' は明らかにこんな行事を予想していなかったが、「最初から気づいていた」といった言い逃れで、驚いたかどうかをはぐらかした',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:7`) === -1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ` は誕生日パーティーの気に入らない点を文句にしながら、`,
            era.get(`cflag:${chara.id}:1`) > 0 ? '尻尾を振りつつ' : '大口で',
            'ケーキを食べている',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:7`) === -1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' が以前まとめておいた、',
            you.get_colored_name(),
            ' の仕事ぶりを責める百の言い回しが、いまようやく役に立った',
          ]);
          await era.printAndWait(
            'ただし、今回の誕生日行事はよくできていた、と意外にも褒めた',
          );
        },
      },
    ];
    await get_random_entry(buffer.filter((t) => !t.c || t.c())).h();
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async load_talk(chara, you) {
    // CFLAGNAME:81 = 妊娠阶段
    // CFLAGNAME:57 = 扩展变量
    // EXPNAME:117 = 生产次数
    if (
      era.get(`cflag:${chara.id}:81`) > 2 &&
      !era.get(`cflag:${chara.id}:57`)?.report
    ) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' は腹を撫で、絶望した目で遠ざかる ',
        you.get_colored_name(),
        ' を見送った。',
      ]);
    }
    if (
      era.get(`cflag:${chara.id}:81`) <= 2 &&
      !era.get(`exp:${chara.id}:117`) > 0
    ) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' は哺乳瓶を手に、絶望した目で遠ざかる ',
        you.get_colored_name(),
        ' を見送った。',
      ]);
    }
  },
};
