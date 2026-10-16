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
  bt_back_home: '함께 밤을 보내자고 권한다',
  /** すぐ始めるが、強姦展開。強姦の口上と地の文を使う */
  bt_rape_play: '강간 플레이',
  /** 負の作用のない薬 */
  bt_use_medicine: '분위기를 위한 약',
  /**
   * 合意あり（恋慕が足り、相手の状態も許す）のとき、ベッドへ誘う提示と通常性愛ボタン
   * @param {CharaTalk} chara 対象
   * @param {CharaTalk} you プレイヤー
   * @returns {[TextContent,string]}
   */
  get_want_sex_as_lover: (chara, you) => [
    [
      chara.get_colored_name(),
      '은(는) 애정 어린 눈으로',
      you.get_colored_name(),
      '을(를) 바라보고 있다……',
      { isBr: true },
      '어떻게 할까?',
    ],
    '평범하게 구애한다',
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
      '은(는) 조금 경박한 눈으로',
      you.get_colored_name(),
      '을(를) 바라보고 있다……',
      { isBr: true },
      '어떻게 할까?',
    ],
    '헌신을 제안한다',
  ],
  /**
   * 相手を犯すか、相手に犯されるか
   * @param {CharaTalk} chara 対象
   * @param {CharaTalk} you プレイヤー
   * @returns {Promise<boolean>} true - 相手を犯す; false - 相手がプレイヤーを犯す
   */
  async choose_who_to_rape(chara, you) {
    printButton(`${chara.sex}를 거칠게 다룬다`, 1);
    printButton('「나를 거칠게 다뤄 줘」', 2);
    const ret = (await input()) === 1;
    if (ret) {
      await printAndWait([
        chara.get_colored_name(),
        '은(는) 뜻을 알아듣고 곧 범해질 것을 두려워하는 표정을 지었다……',
      ]);
    } else {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 겁에 질린 채 나약한 소망을 드러내어 ',
        chara.get_colored_name(),
        '의 흉폭함을 부추겼다……',
      ]);
    }
    return ret;
  },
  use_medicine_header: '어떤 약을 사용할까요?',
  no_medicine_notification: '쓸 약이 없다……',
  /**
   * 超ウマ跳びZを使う
   * @param {CharaTalk} chara
   * @param {string} item
   */
  async use_super_uma_z(chara, item) {
    await printAndWait([
      chara.get_colored_name(),
      '은(는) 얌전히',
      item,
      '을(를) 마셨다……',
    ]);
    await printAndWait([chara.get_colored_name(), '은(는) 극도로 흥분했다!']);
  },
  /**
   * ウマ跳びSを使う
   * @param {CharaTalk} chara
   * @param {string} item
   */
  async use_uma_s(chara, item) {
    await printAndWait([
      chara.get_colored_name(),
      '은(는) 얌전히',
      item,
      '을(를) 마셨다……',
    ]);
    await printAndWait([
      chara.get_colored_name(),
      '은(는) 뺨을 붉힌 채 잠들었다……',
    ]);
  },
  /**
   * 合意はないが、相手に淫紋／快楽刻印があるときベッドへ誘う
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_want_sex_as_master_by_pleasure: (chara, you) => [
    chara.get_colored_name(),
    '은(는) ',
    you.get_colored_name(),
    '과(와) 뜨거운 밤을 보내기를 거부한다……',
    { isBr: true },
    '하지만 육체의 쾌락에 타오른 마음은 ',
    chara.sex,
    '가 거절의 말을 꺼내지 못하게 한다……',
  ],
  /**
   * 合意はないが、相手に同心刻印があるときベッドへ誘う
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_want_sex_as_master_by_meek: (chara, you) => [
    chara.get_colored_name(),
    '은(는) ',
    you.get_colored_name(),
    '과(와) 뜨거운 밤을 보내기를 거부한다……',
    { isBr: true },
    '하지만 그럼에도 순순히 자신을 준비시켰다……',
  ],
  /** 合意はないが刻印があるとき、すぐ調教を始める */
  bt_start_train: '조교 시작',
  /** 合意はないが刻印があるとき、調教を始めてターンを終える */
  bt_train_back_home: '데리고 돌아가 함께 밤을 보낸다',
  /**
   * 合意も刻印もない
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_want_sex_as_raper: (chara, you) => [
    chara.get_colored_name(),
    '은(는) ',
    you.get_colored_name(),
    '과(와) 뜨거운 밤을 보내기를 거부한다……',
    { isBr: true },
    '어떻게 할까?',
  ],
  bt_rape: '강간을 시도한다',
  bt_drug: '약을 먹이려 한다',
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
        '의 힘은 ',
        you.get_colored_name(),
        '의 파렴치한 행동을 뒷받침했다……',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        '은(는) 겁에 질린 표정을 지었다……',
      ]);
    } else {
      await printAndWait([
        you.get_colored_name(),
        '은(는) ',
        chara.get_colored_name(),
        '을(를) 제압하지 못했다……',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '을(를) 땅에 넘어뜨리고 황급히 떠났다……',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        '은(는) 이 일을 발설하지 않았지만, 사회의',
        you.get_colored_name(),
        '에 대한 평가는 떨어졌다!',
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
      await printAndWait([you.get_colored_name(), '의 비열한 수작은 통했다……']);
      if (medicine_type === 1) {
        await printAndWait([
          chara.get_colored_name(),
          '은(는) 약을 탄 차를 마셨고, 솟구치는 성욕에 모든 이성이 불타 버렸다……',
        ]);
      } else {
        await printAndWait([
          chara.get_colored_name(),
          '은(는) 약을 탄 차를 마시고 서서히 의식을 잃었다……',
        ]);
      }
    } else {
      await printAndWait([
        chara.get_colored_name(),
        '은(는) 재빨리 이상함을 알아차렸다……',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '을(를) 땅에 넘어뜨리고 황급히 떠났다……',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        '은(는) 이 일을 발설하지 않았지만, 사회의',
        you.get_colored_name(),
        '에 대한 평가는 떨어졌다!',
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
      '한때의 감정에 휩쓸렸지만, ',
      chara.get_colored_name(),
      '이(가) 정신을 차리면 분명 수치심과 분노에 괴로워할 것이다……',
    ]);
  },
  /**
   * 相手が眠っているときベッドへ誘う
   * @param {CharaTalk} chara
   */
  get_want_sex_sleep: (chara) => [
    chara.get_colored_name(),
    '은(는) 편안하게 잠들어 있다.',
    { isBr: true },
    '덮칠까?',
  ],
  /** 睡姦を選ぶ */
  bt_rape_in_sleeping: '덮친다!',

  /**
   * 道具を使う
   */
  lub_select_target: '누구에게 윤활제를 사용할까요?',
  select_entry_template: '%ITEM% (%COUNT%)',
  /** @param {CharaTalk} you */
  get_lub_give_up: (you) => [
    you.get_colored_name(),
    '은(는) 윤활제 사용을 그만두었다',
  ],
  lub_no_parts: '윤활이 필요한 부위가 없습니다',
  /** @param {CharaTalk} chara */
  get_lub_select_part: (chara) => [
    chara.get_colored_name(),
    '의 어느 부위를 윤활할까요?',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} part
   */
  get_lub_confirm: (chara, part) => [
    chara.get_colored_name(),
    '의',
    part,
    '을(를) 윤활할까요?',
  ],
  med_no_medicines: '지금 사용할 수 있는 약이 없습니다',
  med_select_target: '누구에게 약을 먹일까요?',
  /** @param {CharaTalk} you */
  get_med_give_up: (you) => [
    you.get_colored_name(),
    '은(는) 약 사용을 그만두었다',
  ],
  /** @param {CharaTalk} chara */
  get_med_no_medicines_for_chara: (chara) => [
    chara.get_colored_name(),
    '에게 먹일 수 있는 약이 없습니다',
  ],
  med_no_medicines_for_you: '복용할 수 있는 약이 없습니다',
  /** @param {CharaTalk} chara */
  get_med_select_medicine: (chara) => [
    chara.get_colored_name(),
    '에게 어떤 약을 먹일까요?',
  ],
  med_select_medicine_for_you: '어떤 약을 복용할까요?',
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} item
   */
  get_med_confirm_for_chara: (chara, item) => [
    chara.get_colored_name(),
    '에게',
    item,
    '을(를) 먹일까요?',
  ],
  /** @param {PrintedSpan} item */
  get_med_confirm_for_you: (item) => [item, '을(를) 복용할까요?'],
  /** @param {PrintedSpan} item */
  get_med_give_up_medicine: (item) => [item, '사용을 그만두었다'],
  itm_no_items: '지금 사용할 수 있는 성인용품이 없습니다',
  itm_select_item: '어떤 성인용품을 사용할까요?',
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} item
   */
  get_itm_select_part: (chara, item) => [
    chara.get_colored_name(),
    '의 어느 부위에',
    item,
    '을(를) 사용할까요?',
  ],
  itm_no_parts: '해당 성인용품을 사용할 수 있는 부위가 없습니다',
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} item
   * @param {PrintedSpan} part
   */
  get_itm_confirm_with_part: (chara, item, part) => [
    chara.get_colored_name(),
    '의',
    part,
    '에',
    item,
    '을(를) 사용할까요?',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} item
   */
  get_itm_confirm_without_part: (chara, item) => [
    chara.get_colored_name(),
    '에게',
    item,
    '을(를) 사용할까요?',
  ],
  /**
   * @param {CharaTalk} you
   * @param {PrintedSpan} item
   */
  get_itm_give_up_item: (you, item) => [
    you.get_colored_name(),
    '은(는)',
    item,
    '사용을 그만두었다',
  ],
  itm_take_off_select_target: '누구의 성인용품을 해제할까요?',
  /** @param {CharaTalk} you */
  get_itm_give_up_take_off: (you) => [
    you.get_colored_name(),
    '은(는) 성인용품 해제를 그만두었다',
  ],
  /** @param {CharaTalk} you */
  get_itm_no_item_to_take_off: (you) => [
    you.get_colored_name(),
    '에게는 성인용품이 장착되어 있지 않습니다',
  ],
  itm_take_off_select_item: '어떤 성인용품을 해제할까요?',
  itm_take_off_select_entry_template: '%ITEM% (%PART%)',
  itm_take_off_mirror_confirm: '【전신 거울】을 해제할까요?',
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} part
   * @param {PrintedSpan} item
   */
  get_itm_take_off_confirm: (chara, part, item) => [
    chara.get_colored_name(),
    '의',
    part,
    '에서',
    item,
    '을(를) 해제할까요?',
  ],
  /**
   * @param {CharaTalk} you
   * @param {PrintedSpan} item
   */
  get_itm_take_off_give_up: (you, item) => [
    you.get_colored_name(),
    '은(는)',
    item,
    '해제를 그만두었다',
  ],

  /** @param {CharaTalk} chara */
  get_change_master_info: (chara) => [
    chara.get_colored_name(),
    '이(가) 주도권을 잡았다',
  ],
  /** @param {CharaTalk} chara */
  get_escape_info: (chara) => [chara.get_colored_name(), '은(는) 도망쳤다'],

  orgasm: '절정에 도달했다',
  orgasm_template: '%TIME%중 절정이 발생했다',

  /**
   * 多重絶頂の報告
   * @param {CharaTalk} chara 絶頂したキャラ
   * @param {PrintedSpan} orgasm 多重絶頂名
   * @returns {TextContent}
   */
  get_chara_total_orgasm: (chara, orgasm) => [
    chara.get_colored_name(),
    '에게',
    orgasm,
    '이(가) 발생했다',
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
    '의',
    part,
    '이(가)',
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
    '은(는)',
    cause,
    '에서',
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
    '의',
    part,
    '이(가)',
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
    '은(는) ',
    ...targets,
    '의 얼굴에 ',
    semen,
    '의 정액을 사정했다',
  ],
  /**
   * @param {CharaTalk} chara 射精したキャラ
   * @param {PrintedSpan} semen 射精量
   * @returns {TextContent}
   */
  get_chara_cum_in_condom: (chara, semen) => [
    chara.get_colored_name(),
    '은(는) 콘돔 안에 ',
    semen,
    '의 정액을 사정했다',
  ],
  /**
   * @param {CharaTalk} chara 射精したキャラ
   * @param {PrintedSpan} item オナホール
   * @param {PrintedSpan} semen 射精量
   * @returns {TextContent}
   */
  get_chara_cum_in_artificial_vagina: (chara, item, semen) => [
    chara.get_colored_name(),
    '은(는) ',
    item,
    ' 안에 ',
    semen,
    '의 정액을 사정했다',
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
    '은(는) ',
    target.get_colored_name(),
    '의 ',
    part,
    '에 ',
    semen,
    '의 정액을 사정했다',
  ],
  /**
   * @param {CharaTalk} chara 射精したキャラ
   * @param {PrintedSpan} semen 射精量
   * @returns {TextContent}
   */
  get_chara_cum: (chara, semen) => [
    chara.get_colored_name(),
    '은(는) ',
    semen,
    '의 정액을 사정했다',
  ],
  // 射精位置
  cum_in_anal: '항문 안',
  cum_in_body: '몸 위',
  cum_in_breast: '가슴 사이',
  cum_in_clitoris: '음핵 위',
  cum_in_foot: '발 사이',
  cum_in_hand: '손 안',
  cum_in_mouth: '입 안',
  cum_in_penis: '육봉 위',
  cum_in_virgin: '질 안',
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
        actions.push(' ', ...targets, '의 입 안으로 ');
        break;
      case part_enum.hand:
        actions.push(' ', ...targets, '의 손가락 사이로 ');
        break;
      case item_enum.milk_pump:
        actions.push(
          ' ',
          { content: '착유기', color: buff_colors[2] },
          ' 안으로 ',
        );
    }
    if (get(`ex:${cid}:喷奶阻碍`) > 0) {
      actions.push('힘차게 뿜어져 나온 ');
    } else if (is_orgasm) {
      actions.push('분출된 ');
    } else {
      switch (part) {
        case part_enum.mouth:
        case part_enum.hand:
        case part_enum.item:
          actions.push('배어 나온 ');
          break;
        default:
          actions.push('흘러나온 ');
      }
    }
    actions.push(' ', amount, '의 모유');
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
        actions.push(' ', ...targets, '의 입으로 ');
        break;
      case part_enum.hand:
        actions.push(' ', ...targets, '의 손가락 사이로 ');
        break;
      case part_enum.foot:
        actions.push(' ', ...targets, '의 발밑으로 ');
        break;
      case part_enum.penis:
        return [amount, '의 애액을 ', ...targets, '의 귀두에 쏟아부었다'];
      case 100:
        actions.push(' ', ...targets, '의 입술로 ');
        break;
      case 101:
        actions.push(' ', ...targets, '의 육봉으로 ');
    }
    if (get(`nowex:${cid}:潮吹`) > 0) {
      actions.push('분출된 ');
    } else {
      switch (part) {
        case part_enum.mouth:
        case 100:
          actions.push('튀어 오른 ');
          break;
        default:
          actions.push('흘러나온 ');
      }
    }
    actions.push(' ', amount, '의 애액');
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
    '착유기로 ',
    amount,
    'ml의',
    item,
    '을(를) 모았다',
  ],
  /**
   * @param {PrintedSpan} amount
   * @param {string} item
   * @returns {TextContent}
   */
  get_milk_item: (amount, item) => [
    ', 병에 담아',
    amount,
    '병의',
    item,
    '을(를) 얻었다',
  ],
  /**
   * @param {PrintedSpan} amount
   * @param {CharaTalk} you
   * @returns {TextContent}
   */
  get_your_milk_info: (amount, you) => [
    '(그중',
    amount,
    '병은',
    you.get_colored_name(),
    '에게서)',
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
    taste.say_as_unknown('발 표! 절정 속보~♫');
    minoru.say_as_unknown('이번 우마뾰이의 결과를 간단히 전해 드립니다~');
    // 1% 几率理子会说不下去，让糖衣和蚕茧打气
    if (Math.random() < 0.01) {
      await riko.say_as_unknown_and_wait('싫……싫다……면……');
      await cocon.say_as_unknown_and_wait('트레이너님~');
      await glasse.say_as_unknown_and_wait('힘내세요! 트레이너님~ 힘내세요!');
      await riko.say_as_unknown_and_wait(
        '……다음 우마 점프 중에는 화면 설정에서 【조교 결과 간략 표시】를 켜 주세요……',
      );
      await riko.say_as_unknown_and_wait('……저기~');
    } else {
      await riko.say_as_unknown_and_wait(
        '싫으시다면 다음 우마 점프 중에는 화면 설정에서 【조교 결과 간략 표시】를 켜 주세요~',
      );
    }
  },
  // 各部位快感没有满足时的描述
  unsatisfied_mouth:
    '충족되지 않은 입술은 아직 살짝 벌어진 채 무언가를 기다리는 듯하다……',
  unsatisfied_nipple:
    '만족할 줄 모르는 열매가 미세하게 떨리며 뾰족하게 솟아 있다……',
  unsatisfied_hidden_nipple:
    '만족할 줄 모르는 열매가 자신을 감싸던 움푹한 자리 밖으로 솟아 나와 미세하게 떨리고 있다……',
  unsatisfied_body:
    '충분히 사랑받지 못한 몸에는 번들거리는 땀과 홍조가 어려 있다……',
  unsatisfied_penis: '한계의 가장자리에 선 육봉은 여전히 움직이고 싶어 한다……',
  unsatisfied_clitoris:
    '완전히 부풀어 오른 새빨간 콩은 요염하면서도 괴로워 보인다……',
  unsatisfied_vagina: '벌어졌다 오므라드는 안쪽에서 뜨거운 기운이 피어오른다……',
  unsatisfied_sadism: '가학 행위로 맛봤어야 할 쾌락이 아직 사라지지 않았다……',
  unsatisfied_sadism_zero_stamina:
    '가학적인 꿈이 진정되려던 몸을 다시 들끓게 한다……',
  unsatisfied_masochism:
    '피학 행위로 맛봤어야 할 쾌락이 아직 사라지지 않았다……',
  unsatisfied_masochism_zero_stamina:
    '피학적인 꿈이 진정되려던 몸을 다시 들끓게 한다……',

  unsatisfied_lose_virgin_p:
    '하지만 그 안에 깃들어 있던 거친 힘은 완전히 해방되지 못했다……',
  unsatisfied_lose_virgin_v:
    '처녀를 잃은 몸은 처음 금단의 과실을 맛보는 경험 속에서 쾌락의 달콤함을 끝까지 음미하지 못했다……',
};
