/**
 * @file 地の文 - 結末
 * <br>ゲーム終了につながる結末は、必ずバッドエンドである！
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  loser: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you
     */
    const f = async (you) => {
      era.setOffset(6);
      era.setWidth(12);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 너무 게을렀던 걸까, 담당의 재능이 부족했던 걸까. 승리는 언제까지나 멀기만 했다.',
      ]);
      await era.printAndWait([
        '아무리 노력해도 보람이 없었고, 결국 학원 측은',
        you.get_colored_name(),
        '과(와) 담당의 계약 해지와 이적을 명령했다.',
      ]);
      await era.printAndWait([
        '사회적 평가가 너무 낮아 해고된',
        you.get_colored_name(),
        '은(는) 결말을 맞이했다……',
      ]);
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = '문전박대';
    return f;
  })(),
  hentai: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you
     */
    const f = async (you) => {
      era.setOffset(6);
      era.setWidth(12);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 어른으로서의 사회적 책임을 잊고 담당에게 변태 행위를 부추긴 사실이 드러났다. 트레센이라 해도, ',
        you.get_colored_name(),
        '의 과거를 덮을 수는 없었다.',
      ]);
      await era.printAndWait([
        '결국 학원 측은',
        you.get_colored_name(),
        '과(와) 담당의 계약 해지와 이적을 명령했다.',
      ]);
      await era.printAndWait([
        '사회적 평가가 너무 낮아 해고된',
        you.get_colored_name(),
        '은(는) 결말을 맞이했다……',
      ]);
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = '파멸';
    return f;
  })(),
  slave_end: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      era.setOffset(6);
      era.setWidth(12);
      await era.printAndWait([
        '돈에 눈이 먼',
        you.get_colored_name(),
        '은(는) 선택해서는 안 될 길로 들어섰다——자존심을 버리고 자신의 학생에게 돈을 빌리는 길로……',
      ]);
      await era.printAndWait(
        '하지만 운명이 주는 선물에는 모두 보이지 않는 가격표가 붙어 있다.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '의 빚은 눈덩이처럼 불어나는 복리 속에서 마침내',
        you.get_colored_name(),
        '이(가) 감당할 수 있는 무게를 넘어섰다.',
      ]);
      await era.printAndWait([
        '이제는 ',
        you.get_colored_name(),
        '이(가) 대가를 치를 차례다……',
      ]);
      await era.printAndWait([
        '금전 관계에 얽매인',
        you.get_colored_name(),
        '은(는) 결말을 맞이했다……',
      ]);
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = '돈의 노예';
    return f;
  })(),
  crazy_fan_end: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      era.setOffset(6);
      era.setWidth(12);
      if (era.get(`relation:${chara.id}:0`) < 0) {
        await era.printAndWait([
          '레이스에서도 취재에서도, ',
          you.get_colored_name(),
          '과(와) 담당의 험악한 관계는 모두가 알고 있었다. 그 불화가 담당의 성장을 막는다는 목소리가 끊이지 않았고, 학원 측도 이 조합에 인내심을 잃어 가고 있었다……하지만 그들보다 참을성이 없는 이들이 있었다.',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 너무 게을렀던 걸까, 담당',
          chara.uma_sex_title,
          '의 재능이 부족했던 걸까. 승리는 언제까지나 멀기만 했다. 학원 측도 이 조합에 인내심을 잃어 가고 있었다……하지만 그들보다 참을성이 없는 이들이 있었다.',
        ]);
      }
      await era.printAndWait([
        you.get_colored_name(),
        '은(는)',
        chara.get_colored_name(),
        '에게 줄 벌꿀 케이크를 한 손에 들고, 폭우가 쏟아지는 길을 혼자 걷고 있었다. 뒤에서 급한 발소리가 들리더니, 갑자기 허리에 송곳 같은 통증이 내리꽂히는 것을 느꼈다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 땅에 쓰러졌고, 뒤의 누군가는 등을 계속 찔렀다.',
        you.get_colored_name(),
        '이(가) 움직이지 않을 때까지.',
      ]);
      await era.printAndWait(
        '케이크 상자를 감싼 비닐봉지는 빗방울에 세차게 두들겨지고, 두들겨지고, 계속 두들겨졌다……',
      );
      await era.printAndWait('분노한 팬의 보복을 받아 결말을 맞이했다……');
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = '팬의 습격';
    return f;
  })(),
  basement_end: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      era.setOffset(6);
      era.setWidth(12);
      await era.printAndWait(
        '트레센의 어떤 탐지기에도 잡히지 않는 지하실에서……',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 손발을 묶은 밧줄을 필사적으로 풀려 했지만, 오히려 몸을 더 조여들 뿐이었다.',
      ]);
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 침대 가장자리에 앉아, ',
        you.get_colored_name(),
        '에게 아름답게 미소 지으며 다정하게 보살폈다.',
      ]);
      await era.printAndWait([
        '하지만',
        you.get_colored_name(),
        '의 가슴속에는 알 수 없는 미래에 대한 깊은 두려움만 있었다……',
      ]);
      await era.printAndWait([
        chara.get_colored_name(),
        '의 사랑에 갇혀, ',
        you.get_colored_name(),
        '은(는) 결말을 맞이했다……',
      ]);
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = '사랑의 감옥';
    return f;
  })(),

  /**
   * 闇取引を選んだあとの三段階の懲罰イベント
   */

  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   * @param {string} uma
   * @param {string} they
   */
  async punishment1(you, uma, they) {
    era.setOffset(6);
    era.setWidth(12);
    await you.say_as_unknown_and_wait(
      '사람은 자유를 빼앗기고 나서야……자신을 진정으로 알게 된다고도 하지.',
    );
    await you.say_as_unknown_and_wait(
      '그렇다면……너는 자신을 얼마나 알고 있지?',
    );
    await you.say_as_unknown_and_wait([
      you.get_colored_actual_name(),
      '……나태, 오만',
      era.get('flag:变态行为') > 0 ? ', 색욕' : '',
      '……오늘……너는 새로 태어났다.',
    ]);
    await you.say_as_unknown_and_wait(
      '하지만 곧 알게 될 것이다……자유에도 대가가 있다는 것을.',
    );
    await you.say_as_unknown_and_wait(
      '감옥은 너와 함께한다……이 육체가 영원한 형벌이 될 것이다.',
    );
    await you.say_as_unknown_and_wait(
      '속죄는 이제 시작이다——더 고통받고 싶지 않다면, 온 힘을 다해 달려라.',
    );
    await you.say_as_unknown_and_wait([
      you.get_colored_actual_name(),
      ' ——자유가 부르고 있다.',
    ]);
    await you.say_as_unknown_and_wait('다시는 만나지 않기를 바란다.');
    era.setWidth(24);
    era.setOffset(0);
    era.println();
    if (era.get('cflag:0:种族') > 0) {
      await era.printAndWait([you.get_colored_name(), '은(는) 개조되었다!']);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 우마무스메로 변했다!',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 지금까지처럼',
        uma,
        '을(를) 모집하고, ',
        they,
        '을(를) 훈련시키며, ',
        they,
        '과(와) 달릴 수 있다. 하지만 트레센에서 지급하는 급여는 더는 없다.',
      ]);
      await era.printAndWait([
        '대신, ',
        you.get_colored_name(),
        '은(는) 자율 트레이닝을 하고, 레이스에 출전하여 상금과 사회적 명성을 얻을 수 있다.',
      ]);
    }
    await era.printAndWait(
      '명성이 다시 0 아래로 떨어지면 더욱 엄격한 벌이 기다린다!',
    );
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   * @param {TextContent} date
   * @param {string} uma
   * @param {string} they
   */
  async punishment2(you, date, uma, they) {
    era.setOffset(6);
    era.setWidth(12);
    await era.printAndWait('성 노 예 선 언', {
      align: 'center',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      isParagraph: true,
    });
    await era.printAndWait([
      '본 암말 ',
      you.get_colored_actual_name(),
      '은(는) 스스로 ',
      uma,
      '님들의 노예가 되기를 원한다.',
    ]);
    await era.printAndWait(
      '몸과 마음을 주인들을 기쁘게 할 최적의 상태로 가꾸고, 모든 인권을 영원히 포기한다.',
    );
    await era.printAndWait(
      '이후 주인들의 모든 조교를 받아들이고 모든 명령에 따르며, 어떠한 이의도 제기하지 않는다.',
    );
    era.setOffset(13);
    era.setWidth(5);
    era.setAlign('center');
    era.print([you.get_colored_actual_name()]);
    era.print(`<${you.name}의 입술 도장>`);
    era.print(`<${you.name}의 유두 도장>`);
    await era.printAndWait(`<${you.name}의 음순 도장>`);
    await era.printAndWait(date);
    era.setAlign('left');
    era.setOffset(0);
    era.setWidth(24);
    era.println();
    await era.printAndWait([
      '이렇게 「스스로」 선언문에 서명한 뒤, ',
      you.get_colored_name(),
      '은(는) ',
      uma,
      '들의 성노예로 개조되었다!',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 지금까지처럼',
      uma,
      '을(를) 모집하고, ',
      they,
      '을(를) 훈련시키며, ',
      they,
      '과(와) 달리고, 자율 트레이닝을 하며 레이스에 출전할 수 있다.',
    ]);
    await era.printAndWait([
      '하지만',
      you.get_colored_name(),
      '의 더 중요한 임무는, ',
      they,
      '의 성욕을 받아내는 것이다!',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '의 몸은 이미 감도의 극치에 맞춰져 있다. 성적 기교를 갈고닦아 주인들을 기쁘게 하고 명성을 얻어라!',
    ]);
    await era.printAndWait(
      '명성이 다시 0 아래로 떨어지면 더욱 엄격한 벌이 기다린다!',
    );
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   * @param {string} uma
   * @param {string} they
   */
  async punishment3(you, uma, they) {
    era.setOffset(6);
    era.setWidth(12);
    await you.say_as_unknown_and_wait('여기까지 추락할 줄은 생각도 못 했다.');
    await you.say_as_unknown_and_wait(
      '네 손에는 골짜기 밑바닥에서 지상으로 돌아올 밧줄이 쥐어져 있었다.',
    );
    await you.say_as_unknown_and_wait('하지만 너는 그 생명줄을 버렸다.');
    await you.say_as_unknown_and_wait(
      '이제는 네가 모든 것이 돌이킬 수 없게 되어버리는 것을 일부러 지켜본 게 아닌가 하는 의심마저 드는구나.',
    );
    await you.say_as_unknown_and_wait(
      '우리는 인권을 남길 기회를 그토록 여러 번 주었는데.',
    );
    await you.say_as_unknown_and_wait('물론 지금의 네게는 더는 들리지 않겠지.');
    await you.say_as_unknown_and_wait([
      '그럼 이제 다시 만날 일은 없겠군. ',
      you.get_colored_actual_name(),
      '.',
    ]);
    await you.say_as_unknown_and_wait([
      {
        color: '#ff7373',
        content: 'GAME OVER',
        fontWeight: 'bold',
      },
    ]);
    era.setWidth(24);
    era.setOffset(0);
    era.println();
    await era.printAndWait([
      '번식용 암말. 그것이 ',
      you.get_colored_name(),
      '의 말로다.',
    ]);
    await era.printAndWait(
      '지난날의 큰 뜻은 바람에 흩어지고, 이상은 무자비하게 부서졌다.',
    );
    if (you.sex_code > 0) {
      await era.printAndWait([
        '앞으로',
        you.get_colored_name(),
        '의 의무는 짧은 육봉으로 고귀한 ',
        uma,
        '을(를) 기쁘게 하고, 열등한 구멍으로 신성한 인자를 받아 그들과의 우수한 자손을 낳는 것이다!',
      ]);
    } else {
      await era.printAndWait([
        '앞으로',
        you.get_colored_name(),
        '의 의무는 열등한 구멍으로 신성한 인자를 받아 ',
        they,
        '과(와)의 우수한 자손을 낳는 것이다!',
      ]);
    }
    await era.printAndWait([
      '인권은 이미',
      you.get_colored_name(),
      '에게서 멀어졌지만, 임신 주머니로서의 정진은 계속하라.',
    ]);
    await era.printAndWait([
      '운이 좋다면, ',
      you.get_colored_name(),
      '은(는) 자식 덕분에 귀한 대접을 받을지도 모른다!',
    ]);
  },
  /** @param {CharaTalk} you */
  get_basement_ending_confirm: (you) => [
    you.get_colored_name(),
    '은(는) 지하실에서 결말을 맞이했다……',
    { isBr: true },
    '지하실의 결말을 볼까요?',
  ],
  bt_confirm_yes: '참상을 직시한다',
  bt_confirm_no: '보고 싶지 않다',
};
