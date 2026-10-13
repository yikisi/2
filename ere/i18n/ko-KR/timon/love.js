/**
 * @file 恋慕の地の文
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  update_yes: '관계 진전',
  update_no: '진전 보류',
  49: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await chara.print_and_wait([
        '어느 날 밤,',
        chara.get_colored_name(),
        '은(는) 격렬하게 혼자 자위하면서 ',
        you.get_colored_name(),
        '의 이름을 부르며 절정했다.',
      ]);
    };
    f.title = '욕망';
    return f;
  })(),
  '74-1': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      const ret = [];
      await chara.print_and_wait([
        '어느 날 밤,',
        chara.get_colored_name(),
        '은(는) 자신이',
        you.get_colored_name(),
        '에게 느끼는 감정이 평범한 관계를 넘어선 설렘임을 깨닫기 시작했다.',
      ]);
      await chara.print_and_wait(
        '나이에 걸맞은 첫사랑일까. 아니면 매일 함께 지내다 생겨난 착각일까.',
      );
      era.printButton('「어쩌면 난 진심일지도 몰라……」(관계 진전)', 1);
      era.printButton(
        '「아니야, 내가 너무 깊게 생각한 걸지도……」(진전 보류)',
        2,
      );
      ret.push(await era.input());
      if (ret[0] === 1) {
        await chara.print_and_wait([
          chara.get_colored_name(),
          '은(는) 자신이',
          you.get_colored_name(),
          '에게 품은 마음을 분명히 인정했다.',
        ]);
        await chara.print_and_wait([
          '반드시 ',
          you.get_colored_name(),
          '에게 내 마음을 전해야 해……',
        ]);
        await chara.print_and_wait([
          chara.get_colored_name(),
          '은(는) 그렇게 결심했다.',
        ]);
      } else {
        await chara.say_and_wait('착각이겠지……', true);
        await chara.print_and_wait([
          chara.get_colored_name(),
          '은(는) 고개를 저으며 돌아누웠고, 이윽고 잠에 빠져들었다……',
        ]);
      }
      return ret;
    };
    f.title = '연심';
    return f;
  })(),
  '74-2': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      const ret = [];
      // FLAGNAME:5 = 当前互动角色
      if (era.get('flag:5') > 0) {
        await era.printAndWait([
          '트레이너실로 돌아오자,',
          chara.get_colored_name(),
          '은(는) 긴장한 얼굴로',
          you.get_colored_name(),
          '에게 교제를 청했다.',
        ]);
      } else {
        await era.printAndWait([
          '트레이너실로 돌아오자,',
          chara.get_colored_name(),
          '은(는) 긴장한 얼굴로',
          you.get_colored_name(),
          '을(를) 찾아가 교제를 청했다.',
        ]);
      }
      era.print([
        '어떻게 해야 할까? ',
        chara.get_colored_name(),
        '의 마음을 받아들여 연인이 될 것인가, 아니면 냉정하게 거절할 것인가?',
      ]);
      era.printButton('받아들인다. (관계 진전)', 1);
      era.printButton('거절한다. (진전 보류)', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          '의 승낙을 듣자,',
          chara.get_colored_name(),
          '은(는) 긴장했던 얼굴을 풀고 흥분한 듯',
          // CFLAGNAME:6 = 身高
          ...(era.get('cflag:0:6') > era.get(`cflag:${chara.id}:6`)
            ? [' ', you.get_colored_name(), '의 품으로 뛰어들었다.']
            : [' ', you.get_colored_name(), '을(를) 품으로 끌어당겼다.']),
        ]);
        await era.printAndWait([
          '이제 두 사람 사이에는 연인이라는 관계가 하나 더해졌다.',
        ]);
      } else {
        await era.printAndWait([
          '가슴속에 만감이 교차했지만,',
          you.get_colored_name(),
          '은(는) 두 사람이 평생 함께할 수는 없으리라 믿었다.',
        ]);
        await era.printAndWait([
          chara.get_colored_name(),
          '은(는) 붉은 입술을 살짝 깨물며 온몸을 떨고 눈물을 참았다.',
        ]);
        await era.printAndWait([
          '예의를 다하기 위해,',
          you.get_colored_name(),
          `은(는)${chara.sex}을(를) 정성껏 위로하며 슬픔의 소나기가 잦아들 때까지 곁을 지켰다.`,
        ]);
      }
      return ret;
    };
    f.title = '충동';
    return f;
  })(),
  '89-1': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await chara.print_and_wait([
        '어느 날 밤,',
        chara.get_colored_name(),
        '은(는) 자신과',
        you.get_colored_name(),
        '의 다정한 모습을 떠올리며 행복으로 가슴이 벅차올랐다.',
      ]);
      await chara.print_and_wait([
        '관계를 한 걸음 더 진전시키자……',
        chara.get_colored_name(),
        '은(는) 그렇게 생각했다.',
      ]);
    };
    f.title = '동반';
    return f;
  })(),
  '89-2': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      const ret = [];
      await era.printAndWait([
        '어느 날,',
        chara.get_colored_name(),
        '은(는)',
        you.get_colored_name(),
        '을(를) 데리고 나가 데이트했다.',
      ]);
      era.print([
        '하루 동안 낭만을 즐기며 함께한 뒤,',
        chara.get_colored_name(),
        '은(는) 결심이 담긴 눈빛으로,',
        you.get_colored_name(),
        '에게 결혼반지를 내밀었다.',
      ]);
      era.printButton('받아들인다 (관계 진전)', 1);
      era.printButton('거절한다 (아직 진전하지 않음)', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 손을 뻗어 반지를 받았다. 그토록 많은 일을 함께 이겨 냈으니, 이제 맺어질 때가 온 것이다.',
        ]);
        await era.printAndWait([
          chara.get_colored_name(),
          '은(는) 감격하여',
          you.get_colored_name(),
          '에게 뜨겁게 입맞춤했다. 이제 두 사람은 가난하거나 부유하거나, 아프거나 건강하거나, 인생길에서 서로를 의지하며 죽는 날까지 함께할 것이다……',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 반지를 받지 않았다……',
        ]);
        await era.printAndWait([
          {
            content: '그토록 많은 일을 함께 이겨 냈음에도,',
          },
          you.get_colored_name(),
          '은(는) 이것이 올바른 결정인지 확신할 수 없었다.',
        ]);
        await era.printAndWait(
          '윤리, 인간관계, 사회적 책임……생각해야 할 것, 두 사람을 옭아매는 것이 너무나 많았다.',
        );
        era.print([
          '다만,',
          chara.get_colored_name(),
          '의 풀이 죽은 얼굴을 보자,',
          you.get_colored_name(),
          '도 자신도 모르게 생각했다. 그렇게까지 생각할 필요가 있을까……',
        ]);
      }
      return ret;
    };
    f.title = '맹세';
    return f;
  })(),
  '99-1': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await chara.print_and_wait([
        '어느 날 밤,',
        chara.get_colored_name(),
        '은(는) 침대에서 뒤척이며 좀처럼 잠들지 못했다.',
      ]);
      await chara.print_and_wait([
        chara.get_colored_name(),
        '의 머릿속은 여러 이유로',
        you.get_colored_name(),
        '이(가)',
        chara.sex,
        '의 곁을 떠나는 모습으로 가득했고, 생각만 해도 가슴이 조여 왔다……',
      ]);
    };
    f.title = '악몽';
    return f;
  })(),
  '99-2': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 누구보다 먼저 트레이너실에 도착해,',
        you.get_colored_name(),
        '을(를) 놓지 않고 끌어안았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 영문도 모른 채 몇 번이나 달래고 나서야 겨우',
        chara.get_colored_name(),
        '의 마음을 진정시켰다.',
      ]);
    };
    f.title = '의존';
    return f;
  })(),
};
