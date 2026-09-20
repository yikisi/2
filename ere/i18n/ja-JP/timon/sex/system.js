/**
 * @file 調教 - システム提示
 * @author イーウィヤ
 * @author 黑奴队长
 */
const { get, input, printAndWait, printButton } = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');
const { item_enum } = require('#/data/ero/item-const');
const { part_enum } = require('#/data/ero/part-const');

module.exports = {
  /**
   * 選択［ベッドへ誘う］のあとのシステム級地の文
   */

  /** 性愛を選んだあと、今ターンを終えるボタン */
  bt_back_home: '一晩を誘う',
  /** すぐ始めるが、強姦展開。強姦の口上と地の文を使う */
  bt_rape_play: '強姦プレイ',
  /** 負の作用のない薬 */
  bt_use_medicine: '情趣の薬',
  /**
   * 合意あり（恋慕が足り、相手の状態も許す）のとき、ベッドへ誘う提示と通常性愛ボタン
   * @param {CharaTalk} chara 対象
   * @param {CharaTalk} you プレイヤー
   * @returns {[TextContent,string]}
   */
  get_want_sex_as_lover: (chara, you) => [
    [
      chara.get_colored_name(),
      ' は情のこもった目で ',
      you.get_colored_name(),
      ' を見ている……',
      { isBr: true },
      'どうする？',
    ],
    '普通に求愛する',
  ],
  /**
   * 合意はないが性奴／孕袋のとき、ベッドへ誘う提示と通常性愛ボタン
   * @param {CharaTalk} chara 対象
   * @param {CharaTalk} you プレイヤー
   * @returns {[TextContent,string]}
   */
  get_want_sex_as_slave: (chara, you) => [
    [
      chara.get_colored_name(),
      ' は少し軽薄な目で ',
      you.get_colored_name(),
      ' を見ている……',
      { isBr: true },
      'どうする？',
    ],
    '献身を提案する',
  ],
  /**
   * 相手を犯すか、相手に犯されるか
   * @param {CharaTalk} chara 対象
   * @param {CharaTalk} you プレイヤー
   * @returns {Promise<boolean>} true - 相手を犯す; false - 相手がプレイヤーを犯す
   */
  async choose_who_to_rape(chara, you) {
    printButton(`${chara.sex}を乱暴に扱う`, 1);
    printButton('「私を乱暴に扱って」', 2);
    const ret = (await input()) === 1;
    if (ret) {
      await printAndWait([
        chara.get_colored_name(),
        ' は意を汲み、これから犯される恐怖の顔を作った……',
      ]);
    } else {
      await printAndWait([
        you.get_colored_name(),
        ' は怯えて弱い願いを見せ、',
        chara.get_colored_name(),
        ' の兇性を煽った……',
      ]);
    }
    return ret;
  },
  use_medicine_header: 'どの薬を使う？',
  no_medicine_notification: '使える薬がない',
  /**
   * 超ウマ跳びZを使う
   * @param {CharaTalk} chara
   * @param {string} item
   */
  async use_super_uma_z(chara, item) {
    await printAndWait([
      chara.get_colored_name(),
      ' は素直に',
      item,
      'を飲んだ……',
    ]);
    await printAndWait([chara.get_colored_name(), ' は極度に興奮した！']);
  },
  /**
   * ウマ跳びSを使う
   * @param {CharaTalk} chara
   * @param {string} item
   */
  async use_uma_s(chara, item) {
    await printAndWait([
      chara.get_colored_name(),
      ' は素直に',
      item,
      'を飲んだ……',
    ]);
    await printAndWait([chara.get_colored_name(), ' は頬を赤らめて眠った……']);
  },
  /**
   * 合意はないが、相手に淫紋／快楽刻印があるときベッドへ誘う
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_want_sex_as_master_by_pleasure: (chara, you) => [
    chara.get_colored_name(),
    ' は ',
    you.get_colored_name(),
    ' と春宵を共にすることを拒む……',
    { isBr: true },
    'だが肉体の快楽に灼かれた心は、',
    chara.sex,
    'に拒否の言葉を出させない……',
  ],
  /**
   * 合意はないが、相手に同心刻印があるときベッドへ誘う
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_want_sex_as_master_by_meek: (chara, you) => [
    chara.get_colored_name(),
    ' は ',
    you.get_colored_name(),
    ' と春宵を共にすることを拒む……',
    { isBr: true },
    'だがそれでも素直に、自分を整えた……',
  ],
  /** 合意はないが刻印があるとき、すぐ調教を始める */
  bt_start_train: '調教を始める',
  /** 合意はないが刻印があるとき、調教を始めてターンを終える */
  bt_train_back_home: '連れて帰り、一晩過ごす',
  /**
   * 合意も刻印もない
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_want_sex_as_raper: (chara, you) => [
    chara.get_colored_name(),
    ' は ',
    you.get_colored_name(),
    ' と春宵を共にすることを拒む……',
    { isBr: true },
    'どうする？',
  ],
  bt_rape: '強姦を試みる',
  bt_drug: '薬を盛ることを試みる',
  /**
   * 合意も刻印もなく、強姦を選ぶ
   * @param {CharaTalk} chara 対象
   * @param {CharaTalk} you プレイヤー
   * @param {boolean} success 成功したか
   */
  async rape(chara, you, success) {
    if (success) {
      await printAndWait([
        you.get_colored_name(),
        ' の力は、',
        you.get_colored_name(),
        ' の恥知らずな行いを支えた……',
      ]);
      await printAndWait([chara.get_colored_name(), ' は恐怖の顔を見せた……']);
    } else {
      await printAndWait([
        you.get_colored_name(),
        ' は ',
        chara.get_colored_name(),
        ' を抑えきれなかった……',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' を地面に押し倒し、急いで立ち去った……',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        ' はこの件を口外しなかったが、社会の ',
        you.get_colored_name(),
        ' への評価は下がった！',
      ]);
    }
  },
  /**
   * 合意も刻印もなく、薬を選ぶ
   * @param {CharaTalk} chara 対象
   * @param {CharaTalk} you プレイヤー
   * @param {1|2} medicine_type 薬の種類。1は超ウマ跳びZ、2はウマ跳びS
   * @param {boolean} success 成功したか
   */
  async drug(chara, you, medicine_type, success) {
    if (success) {
      await printAndWait([you.get_colored_name(), ' の卑劣な小細工は効いた……']);
      if (medicine_type === 1) {
        await printAndWait([
          chara.get_colored_name(),
          ' はその仕込み茶を飲み、湧き上がる性欲にすべての理性を焼かれた……',
        ]);
      } else {
        await printAndWait([
          chara.get_colored_name(),
          ' はその仕込み茶を飲み、徐々に意識を失った……',
        ]);
      }
    } else {
      await printAndWait([
        chara.get_colored_name(),
        ' は機敏に異変を見つけた……',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' を地面に押し倒し、急いで立ち去った……',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        ' はこの件を口外しなかったが、社会の ',
        you.get_colored_name(),
        ' への評価は下がった！',
      ]);
    }
  },
  /**
   * 超ウマ跳びZで薬姦したあとの特別演出
   * @param {CharaTalk} chara
   * @returns {Promise<void>}
   */
  async after_rape_by_super_uma_z(chara) {
    await printAndWait([
      '一時の情に流れたが、',
      chara.get_colored_name(),
      ' が我に返れば、必ず羞恥と憤りに苛まれるだろう……',
    ]);
  },
  /**
   * 相手が眠っているときベッドへ誘う
   * @param {CharaTalk} chara
   */
  get_want_sex_sleep: (chara) => [
    chara.get_colored_name(),
    ' は気持ちよく眠っている。',
    { isBr: true },
    '襲うか？',
  ],
  /** 睡姦を選ぶ */
  bt_rape_in_sleeping: '襲う！',

  /**
   * 道具を使う
   */
  lub_select_target: '誰に潤滑液を使う？',
  select_entry_template: '%ITEM% (%COUNT%)',
  /** @param {CharaTalk} you */
  get_lub_give_up: (you) => [
    you.get_colored_name(),
    ' は潤滑液を使うのをやめた',
  ],
  lub_no_parts: '潤滑が必要な部位がない',
  /** @param {CharaTalk} chara */
  get_lub_select_part: (chara) => [
    chara.get_colored_name(),
    ' のどの部位を潤滑する？',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} part
   */
  get_lub_confirm: (chara, part) => [
    chara.get_colored_name(),
    ' の ',
    part,
    ' を潤滑する？',
  ],
  med_no_medicines: 'いま使える薬がない',
  med_select_target: '誰に薬を飲ませる？',
  /** @param {CharaTalk} you */
  get_med_give_up: (you) => [you.get_colored_name(), ' は薬を使うのをやめた'],
  /** @param {CharaTalk} chara */
  get_med_no_medicines_for_chara: (chara) => [
    chara.get_colored_name(),
    ' に飲ませられる薬がない',
  ],
  med_no_medicines_for_you: '服用できる薬がない',
  /** @param {CharaTalk} chara */
  get_med_select_medicine: (chara) => [
    chara.get_colored_name(),
    ' にどの薬を飲ませる？',
  ],
  med_select_medicine_for_you: 'どの薬を服用する？',
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} item
   */
  get_med_confirm_for_chara: (chara, item) => [
    chara.get_colored_name(),
    ' に',
    item,
    'を飲ませる？',
  ],
  /** @param {PrintedSpan} item */
  get_med_confirm_for_you: (item) => [item, 'を服用する？'],
  /** @param {PrintedSpan} item */
  get_med_give_up_medicine: (item) => [item, 'を使うのをやめた'],
  itm_no_items: 'いま使える性玩具がない',
  itm_select_item: 'どの性玩具を使う？',
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} item
   */
  get_itm_select_part: (chara, item) => [
    chara.get_colored_name(),
    ' のどの部位に ',
    item,
    ' を使う？',
  ],
  itm_no_parts: 'その性玩具を使える部位がない',
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} item
   * @param {PrintedSpan} part
   */
  get_itm_confirm_with_part: (chara, item, part) => [
    chara.get_colored_name(),
    ' の ',
    part,
    ' に ',
    item,
    ' を使う？',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} item
   */
  get_itm_confirm_without_part: (chara, item) => [
    chara.get_colored_name(),
    ' に ',
    item,
    ' を使う？',
  ],
  /**
   * @param {CharaTalk} you
   * @param {PrintedSpan} item
   */
  get_itm_give_up_item: (you, item) => [
    you.get_colored_name(),
    ' は ',
    item,
    ' を使うのをやめた',
  ],
  itm_take_off_select_target: '誰の性玩具を外す？',
  /** @param {CharaTalk} you */
  get_itm_give_up_take_off: (you) => [
    you.get_colored_name(),
    ' は性玩具を外すのをやめた',
  ],
  /** @param {CharaTalk} you */
  get_itm_no_item_to_take_off: (you) => [
    you.get_colored_name(),
    ' には性玩具がついていない',
  ],
  itm_take_off_select_item: 'どの性玩具を外す？',
  itm_take_off_select_entry_template: '%ITEM% (%PART%)',
  itm_take_off_mirror_confirm: '【全身鏡】を外す？',
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} part
   * @param {PrintedSpan} item
   */
  get_itm_take_off_confirm: (chara, part, item) => [
    chara.get_colored_name(),
    ' の ',
    part,
    ' から ',
    item,
    ' を外す？',
  ],
  /**
   * @param {CharaTalk} you
   * @param {PrintedSpan} item
   */
  get_itm_take_off_give_up: (you, item) => [
    you.get_colored_name(),
    ' は ',
    item,
    ' を外すのをやめた',
  ],

  /** @param {CharaTalk} chara */
  get_change_master_info: (chara) => [
    chara.get_colored_name(),
    ' が主導権を握った',
  ],
  /** @param {CharaTalk} chara */
  get_escape_info: (chara) => [chara.get_colored_name(), ' は逃げた'],

  orgasm: '絶頂した',
  orgasm_template: '%TIME% 重絶頂が起きた',

  /**
   * 多重絶頂の報告
   * @param {CharaTalk} chara 絶頂したキャラ
   * @param {PrintedSpan} orgasm 多重絶頂名
   * @returns {TextContent}
   */
  get_chara_total_orgasm: (chara, orgasm) => [
    chara.get_colored_name(),
    ' に ',
    orgasm,
    ' が起きた',
  ],
  /**
   * 部位絶頂の報告
   * @param {CharaTalk} chara 絶頂したキャラ
   * @param {PrintedSpan} part 絶頂した部位
   * @param {PrintedSpan} orgasm 絶頂情報
   * @returns {TextContent}
   */
  get_chara_part_orgasm: (chara, part, orgasm) => [
    chara.get_colored_name(),
    ' の ',
    part,
    ' が',
    orgasm,
  ],
  /**
   * 精神絶頂の報告
   * @param {CharaTalk} chara 絶頂したキャラ
   * @param {PrintedSpan} cause 絶頂の理由（加虐または被虐）
   * @param {PrintedSpan} orgasm 絶頂情報
   * @returns {TextContent}
   */
  get_chara_spirit_orgasm: (chara, cause, orgasm) => [
    chara.get_colored_name(),
    ' は ',
    cause,
    ' で',
    orgasm,
  ],
  /**
   * 液体分泌の報告
   * @param {CharaTalk} chara 分泌したキャラ
   * @param {PrintedSpan} part 分泌した部位
   * @param {[]} change 分泌情報
   * @returns {TextContent}
   */
  get_chara_have_liquid: (chara, part, change) => [
    chara.get_colored_name(),
    ' の ',
    part,
    ' が',
    ...change,
  ],
  liquid_amount_template: '%AMOUNT%ml',
  /**
   * 顔射の報告
   * @param {CharaTalk} chara 射精したキャラ
   * @param {[]} targets 顔射の対象
   * @param {PrintedSpan} semen 射精量
   * @returns {TextContent}
   */
  get_chara_cum_on_face: (chara, targets, semen) => [
    chara.get_colored_name(),
    ' は ',
    ...targets,
    ' の顔へ ',
    semen,
    ' の精液を射った',
  ],
  /**
   * @param {CharaTalk} chara 射精したキャラ
   * @param {PrintedSpan} semen 射精量
   * @returns {TextContent}
   */
  get_chara_cum_in_condom: (chara, semen) => [
    chara.get_colored_name(),
    ' はコンドームのなかへ ',
    semen,
    ' の精液を射った',
  ],
  /**
   * @param {CharaTalk} chara 射精したキャラ
   * @param {PrintedSpan} item オナホール
   * @param {PrintedSpan} semen 射精量
   * @returns {TextContent}
   */
  get_chara_cum_in_artificial_vagina: (chara, item, semen) => [
    chara.get_colored_name(),
    ' は ',
    item,
    ' のなかへ ',
    semen,
    ' の精液を射った',
  ],
  /**
   * @param {CharaTalk} chara 射精したキャラ
   * @param {CharaTalk} target 射精されたキャラ
   * @param {string} part 射精位置
   * @param {PrintedSpan} semen 射精量
   * @returns {TextContent}
   */
  get_chara_cum_in_part: (chara, target, part, semen) => [
    chara.get_colored_name(),
    ' は ',
    target.get_colored_name(),
    ' の ',
    part,
    ' へ ',
    semen,
    ' の精液を射った',
  ],
  /**
   * @param {CharaTalk} chara 射精したキャラ
   * @param {PrintedSpan} semen 射精量
   * @returns {TextContent}
   */
  get_chara_cum: (chara, semen) => [
    chara.get_colored_name(),
    ' は ',
    semen,
    ' の精液を射った',
  ],
  // 射精位置
  cum_in_anal: '尻穴のなか',
  cum_in_body: '体の上',
  cum_in_breast: '乳のなか',
  cum_in_clitoris: '陰核の上',
  cum_in_foot: '足のなか',
  cum_in_hand: '手のなか',
  cum_in_mouth: '口のなか',
  cum_in_penis: '肉棒の上',
  cum_in_virgin: '中のなか',
  /**
   * 母乳分泌の報告
   * @param {number} cid 分泌したキャラ
   * @param {[]} targets 接触対象
   * @param {number} part 接触部位
   * @param {PrintedSpan} amount 分泌量
   * @param {boolean} is_orgasm 絶頂か（噴き出すか流れるか）
   */
  get_milk_info(cid, targets, part, amount, is_orgasm) {
    const actions = [];
    switch (part) {
      case part_enum.mouth:
        actions.push(' ', ...targets, ' の口のなかで');
        break;
      case part_enum.hand:
        actions.push(' ', ...targets, ' の指のあいだで');
        break;
      case item_enum.milk_pump:
        actions.push(
          ' ',
          { content: '搾乳器', color: buff_colors[2] },
          ' のなかで',
        );
    }
    if (get(`ex:${cid}:喷奶阻碍`) > 0) {
      actions.push('勢いよく噴き出した ');
    } else if (is_orgasm) {
      actions.push('噴き出した ');
    } else {
      switch (part) {
        case part_enum.mouth:
        case part_enum.hand:
        case part_enum.item:
          actions.push('沁み出した ');
          break;
        default:
          actions.push('流れ出した ');
      }
    }
    actions.push(' ', amount, ' の乳汁');
    return actions;
  },
  /**
   * 愛液分泌の報告
   * @param {number} cid 分泌したキャラ
   * @param {[]} targets 接触対象
   * @param {number} part 接触部位。100 - 非接触口、101 - 非接触ペニス
   * @param {PrintedSpan} amount 分泌量
   */
  get_squirt_info(cid, targets, part, amount) {
    const actions = [];
    switch (part) {
      case part_enum.mouth:
        actions.push(' ', ...targets, ' の口へ');
        break;
      case part_enum.hand:
        actions.push(' ', ...targets, ' の指のあいだで');
        break;
      case part_enum.foot:
        actions.push(' ', ...targets, ' の足元で');
        break;
      case part_enum.penis:
        return [amount, ' の愛液を ', ...targets, ' の亀頭へ注いだ'];
      case 100:
        actions.push(' ', ...targets, ' の唇へ');
        break;
      case 101:
        actions.push(' ', ...targets, ' の肉棒へ');
    }
    if (get(`nowex:${cid}:潮吹`) > 0) {
      actions.push('噴き出した ');
    } else {
      switch (part) {
        case part_enum.mouth:
        case 100:
          actions.push('飛び散らせた ');
          break;
        default:
          actions.push('流れ出した ');
      }
    }
    actions.push(' ', amount, ' の愛液');
    return actions;
  },

  /**
   * 搾乳の精算
   */
  /**
   * @param {PrintedSpan} amount
   * @param {string} item
   * @returns {TextContent}
   */
  get_milk_ml: (amount, item) => [
    '搾乳器で ',
    amount,
    'ml の',
    item,
    'を集めた',
  ],
  /**
   * @param {PrintedSpan} amount
   * @param {string} item
   * @returns {TextContent}
   */
  get_milk_item: (amount, item) => [
    '、瓶詰めにして ',
    amount,
    ' 本の',
    item,
    'を得た',
  ],
  /**
   * @param {PrintedSpan} amount
   * @param {CharaTalk} you
   * @returns {TextContent}
   */
  get_your_milk_info: (amount, you) => [
    '（うち ',
    amount,
    ' 本は ',
    you.get_colored_name(),
    ' から）',
  ],

  /**
   * 調教後のまとめ
   * @param {CharaTalk} taste 秋川やよい／北の風味
   * @param {CharaTalk} minoru 駿川たづな／豊穣の刻
   * @param {CharaTalk} riko 樫本理子
   * @param {CharaTalk} glasse 苦渋の糖衣
   * @param {CharaTalk} cocon 小さな繭
   */
  async ero_report(taste, minoru, riko, glasse, cocon) {
    taste.say_as_unknown('発 表！ 絶頂速報～♫');
    minoru.say_as_unknown('今回のウマ跳びの結果、簡単にお伝えします～');
    // 1% 几率理子会说不下去，让糖衣和蚕茧打气
    if (Math.random() < 0.01) {
      await riko.say_as_unknown_and_wait('嫌……嫌い……なら……');
      await cocon.say_as_unknown_and_wait('トレーナーさん～');
      await glasse.say_as_unknown_and_wait(
        '頑張って！ トレーナーさん～頑張って！',
      );
      await riko.say_as_unknown_and_wait(
        '……次回のウマ跳びのあいだに、画面の設定で【調教結果を簡略表示】をオンにしてください……',
      );
      await riko.say_as_unknown_and_wait('……えっと～');
    } else {
      await riko.say_as_unknown_and_wait(
        '嫌いなら、次回のウマ跳びのあいだに画面の設定で【調教結果を簡略表示】をオンにしてくださいね～',
      );
    }
  },
  // 各部位快感没有满足时的描述
  unsatisfied_mouth: '満たされない唇はまだ微かに開き、何かを待っているようだ……',
  unsatisfied_nipple: '飽くなき木の実が、微かに震えながら尖っている……',
  unsatisfied_hidden_nipple:
    '飽くなき木の実が、守る窪みの外で微かに震えながら尖っている……',
  unsatisfied_body: '十分に愛されなかった体が、脂光る汗と紅潮を帯びている……',
  unsatisfied_penis: '限界の縁にある肉棒は、なお動き出すことを望んでいる……',
  unsatisfied_clitoris: '完全に腫れた真っ赤な豆が、妖艶で苦しい……',
  unsatisfied_vagina: '開閉するなかから、熱い気が立ち上る……',
  unsatisfied_sadism: '加虐で味わうはずだった快楽が、まだ消えない……',
  unsatisfied_sadism_zero_stamina: '加虐の夢が、静まりかけた体を騒がせる……',
  unsatisfied_masochism: '被虐で味わうはずだった快楽が、まだ消えない……',
  unsatisfied_masochism_zero_stamina: '被虐の夢が、静まりかけた体を騒がせる……',

  unsatisfied_lose_virgin_p:
    'だがそのなかに籠もっていた荒ぶる力は、完全には解放されなかった……',
  unsatisfied_lose_virgin_v:
    '破瓜の体は、初めて禁果を噛んだ体験のなかで、快楽の甘さを味わいきれなかった……',
};
