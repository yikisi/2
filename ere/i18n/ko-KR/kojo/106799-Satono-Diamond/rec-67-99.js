/**
 * @file サトノダイヤモンド - 募集
 * @author 某知名手游公司编剧
 * @author 黑奴二号（改编）
 * @author 黑奴队长（修订）
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} daiya
   * @param {CharaTalk} kita
   * @param {CharaTalk} you
   */
  async rec_playground(daiya, kita, you) {
    const ret = [];
    await era.printAndWait(
      `중견 트레이너 A 「드디어…… 『${daiya.sex}』가 모의 레이스에 나오는군. 새해 벽두부터 한바탕 떠들썩해지겠어!」`,
    );
    await era.printAndWait(
      '──설 연휴가 끝난 뒤. 체육관에서 열린 트레이너 회의에서 동료들이 술렁이고 있었다.',
    );
    await era.printAndWait([
      '그렇다. 내일은 드디어 『그 ',
      daiya.sex_code === 1 ? '도련님' : '아가씨',
      '』가 모의 레이스에 출전하는 날이다. 과연 누가 ',
      daiya.sex,
      '의 트레이너가 될까……?',
    ]);
    await daiya.say_and_wait(
      '오늘 잘 부탁드립니다. 그리고…… 키타짱도 와 줘서 고마워♪',
    );
    await kita.say_and_wait('헤헤헤! 다이아의 첫 무대잖아. 안 올 수가 없지!');
    await kita.say_and_wait('먼저 데뷔한 언니로서 뭐든 알려 줄 테니까 물어봐!');
    await daiya.say_and_wait(
      '후후, 살살 부탁할게……라고 하고 싶지만, 키타짱은 레이스에서 한 번도 살살해 준 적 없었지?',
    );
    await kita.say_and_wait(
      '응! 달릴 때는 언제나 진심이야! 상대가 다이아라면 더더욱!',
    );
    await era.printAndWait([
      '오늘의 주인공은 이름난 사토노 그룹의 아가씨, ',
      daiya.get_colored_name(),
      '. 그리고 가장 유력한 상대는 ',
      daiya.sex,
      '의 든든한 단짝 친구, ',
      kita.get_colored_name(),
      '.',
    ]);
    await era.printAndWait(
      '사토노 다이아몬드의 재능은 어느 정도일까. 레이스의 막이 오른다.',
    );
    await kita.say_and_wait(
      '우오오오옷! 좋아, 전력으로 밀어붙이기 성공! 이대로 선두를 지키는 거야!',
      true,
    );
    await kita.say_and_wait(
      `하지만…… 다이아${daiya.sex}라면 따라오겠지. 왜냐하면 ${daiya.sex}는 언제나 내 뒤를 쫓아왔으니까!`,
      true,
    );
    await daiya.say_and_wait(
      '벌써 이렇게 차이가 벌어졌어!? 역시 키타짱……',
      true,
    );
    await daiya.say_and_wait(
      '게다가 주변 선수들이 다가와…… 윽, 일부러 길을 막는 거야!? 으으, 양옆도 앞도 막혔어…… 하지만……!',
      true,
    );
    await daiya.print_and_wait(
      '(어린 다이아 「아버지, 어머니. 다이아가 약속할게요. 사토노 가문의 꿈을 반드시 이루겠어요!」)',
    );
    await daiya.say_and_wait(
      '이날을 위해 줄곧 준비해 왔어. 여러 선생님께 배우고, 연구하고, 수많은──기대를 짊어지고!',
      true,
    );
    await daiya.say_and_wait(
      '아직은 참자. 아직 때가 아니야…… 스퍼트하고 싶어, 앞으로 나가고 싶어…… 하지만 침착하게 흐름을 살피고……',
      true,
    );
    await kita.say_and_wait(
      '좋아, 마지막 코너야……! 조금 너무 빨리 달렸나? 여기까지 내 페이스대로 왔으니, 다이아라도……',
      true,
    );
    await daiya.say_and_wait(
      `──!! ${kita.sex}의 속도가 떨어졌어! 지금이야──!!`,
      true,
    );
    await daiya.say_and_wait('이야아아아아아아아아아아아아아!!');
    await kita.say_and_wait('뭐? 에에에에에엣!?');
    await era.printAndWait('트레이너들 「우오오오오오오오오오오!!」');
    await era.printAndWait(
      `중견 트레이너 A 「코 차이로…… 키타산 블랙을 따라잡았어!? 아직 정식 데뷔도 안 했는데. ${daiya.sex}, 역시 대단하군!」`,
    );
    await era.printAndWait(
      '신입 트레이너 A 「다이아몬드급 인재 그 자체잖아……! 부, 부디 계약을……!」',
    );
    await daiya.say_and_wait(
      '어머, 무, 무슨 일이세요? 이렇게 많은 분이 모이시다니…… 키타짱?',
    );
    await kita.say_and_wait(
      '무슨 일이긴, 다들 다이아의 트레이너가 되고 싶은 거지! 하아── 주인공 자리를 다 빼앗겼네. 기쁜 건지 분한 건지 모르겠어~',
    );
    await daiya.say_and_wait(
      '제 트레이너가 되고 싶으신 분들……! 그랬군요! 이렇게 많은 분이 제 레이스를 봐 주셨다니.',
    );
    await daiya.say_and_wait(
      '──영광이에요. 감사합니다. 저도 더 정진해야겠네요.',
    );
    await era.printAndWait(
      `${daiya.sex}의 달리기는 정말 훌륭했다. 승부를 걸 시점을 정확히 포착하고, 폭발력이라는 장점을 제대로 살렸다……`,
    );
    await era.printAndWait(
      '타고난 재능과 영재 교육이 결실을 맺었다고 할 만하다. 엘리트 특유의 약점도 보였지만…… 그마저 성장 가능성으로 보인다.',
    );
    await kita.say_and_wait(
      '아, 당신도 트레이너지? 엄청 집중해서 보던데, 다이아 대단했지?',
    );
    await kita.say_and_wait(
      `어릴 때부터 빨랐지만 요즘은 더 날카로워졌어! 나는 ${daiya.sex}, 정말 추천해.`,
    );
    await kita.say_and_wait('어때, 한번 말 걸어 보지 않을래?');
    era.printButton('가 보자', 1);
    era.printButton('그만두자', 2);
    ret.push(await era.input());
    if (ret[0] === 1) {
      await daiya.say_and_wait(
        '어머? 아까 관중석에서 키타짱과 즐겁게 이야기하시던 분……?',
        true,
      );
      await daiya.say_and_wait(
        '뭔가 하시고 싶은 말씀이 있는 것 같아요……',
        true,
      );
      await daiya.say_and_wait(
        '트레이너님, 부탁드려요. 제 달리기를 어떻게 보셨나요?',
      );
      await era.printAndWait(
        `${you.name}이(가) 대답을 거절하는 건 너무 실례다. 먼저 ${daiya.sex}의 재능을 있는 그대로 칭찬하고──이어서 앞으로 극복해야 할 과제를 전했다.`,
      );
      era.printButton(
        '「우선, 다른 사람과 진심으로 겨뤄 본 경험이 부족해.」',
        1,
      );
      await era.input();
      await daiya.say_and_wait('진심으로 겨룬다고요……? 그게 어떤……?');
      await you.say_and_wait('레이스 중에 주변의 압박에 당황하지 않았어?');
      await daiya.say_and_wait(
        '아, 모의 레이스 때…… 확실히 망설였어요. 견제를 당하는 초조함을 처음 느껴서, 생각처럼 실력을 발휘하지 못하는 기분이었어요.',
      );
      await daiya.say_and_wait(
        '하지만 저는 어릴 때부터 함께 훈련하는 분들께 『병주할 때는 절대 봐주지 마세요』라고 부탁드렸는걸요.',
      );
      await you.say_and_wait('그래도 다들 조심스러웠을 거야.');
      await daiya.say_and_wait(
        '그, 그랬군요……! 생각해 본 적도 없었어요……! 그래서 다른 선수들에게 압박감을 느낀 거군요……!',
      );
      await you.say_and_wait('그리고 하나 더. 너는 냉정함을 잃기 쉬워.');
      await daiya.say_and_wait(
        '네……냉정함을요? 그런 말은 처음 들어요…… 무슨 뜻인가요?',
      );
      await era.printAndWait(
        `${you.name}은(는) 레이스에서 본 것을 ${daiya.sex}에게 전한다. 중반에 아직 참아야 할 순간, 옆 선수와 경쟁하며 페이스가 올라갔다.`,
      );
      await era.printAndWait(
        `그것이 냉정함을 잃었다는 증거다. 요조숙녀의 가면 아래 숨은 ${daiya.sex}의 가장 솔직한 기질이다.`,
      );
      await daiya.say_and_wait(
        '──!? 그때 확실히 더 앞으로 나가고 싶어서 다리가 근질거렸어요……',
      );
      await daiya.say_and_wait(
        '하지만 곧바로 참았어요. 참았다고 생각했는데…… 그 한순간 페이스가 오른 걸 알아보셨다니……',
      );
      await daiya.say_and_wait(
        '당신은…… 대체 어떤 분이신가요? 레이스 한 번만 보고 제 상태를 그렇게까지……',
      );
      await you.say_and_wait('그만큼 네 달리기에 마음을 빼앗겼어.');
      await era.printAndWait(
        `마음을 빼앗겼기에 장점도 단점도 한순간에 보였다. ${you.name}은(는) ${daiya.sex}의 가문에 대해 모른다. 그래도 ${daiya.sex}의 본질은 꿰뚫어 보고 있었다.`,
      );
      await daiya.say_and_wait('──합격이에요.');
      era.printButton('「……뭐?」', 1);
      await era.input();
      await daiya.say_and_wait(
        '합격이에요! 당신이…… 당신이 제 트레이너예요! 제가 줄곧 찾던 단 한 분. 그러니까 합격이에요!',
      );
      await kita.say_and_wait(
        '자, 잠깐만…… 다이아네는 선발 심사로 트레이너를 정하잖아?',
      );
      await daiya.say_and_wait(
        '아니, 결정했어. 키타짱이 설득해도 이것만큼은 절대 바꾸지 않을 거야.',
      );
      await daiya.say_and_wait(
        `제 트레이너는 ${you.sex}예요! ${you.sex}만이 할 수 있어요. 원래는 신중히 상의해야 하는 일이지만──`,
      );
      await daiya.say_and_wait(
        '가문 모두의 동의가 필요하다──그것도 징크스예요. 그렇다면 직감을 믿고 이 징크스를 깨뜨리겠어요! 누가 뭐라고 해도 당신이 제 트레이너예요!',
      );
      await daiya.say_and_wait(
        '정했어요. 이미 결정했는걸요. 맡아 주실 거죠? 그렇죠? 네?',
      );
      await era.printAndWait(
        `얌전한 아가씨라는 인상과 달리 ${daiya.sex}의 태도는 흔들리지 않는다. ${you.name}이(가) 고개를 끄덕일 때까지 사토노 다이아몬드는 ${you.name}의 손을 놓으려 하지 않았다.`,
      );
      era.println();
      await era.printAndWait(
        '그렇게 당신과 사토노 다이아몬드의 삼 년이 시작되었다!',
        {
          color: daiya.color,
          fontSize: '1.5rem',
        },
      );
    } else {
      await era.printAndWait(
        `${you.name}은(는) 멀리 있는 사토노 다이아몬드를 바라보며 ${daiya.sex}의 단짝 키타산의 열띤 추천을 듣는다. 최고의 인재다. 앞날은 무한히 열려 있다. 하지만……`,
      );
      await era.printAndWait(
        `──동시에 넘볼 수 없는 존재이기도 하다. 대기업의 아가씨다. 평범한 트레이너가 열정만으로 쉽게 다가갈 상대는 아니다.`,
      );
      await daiya.say_and_wait(
        `어머? 관중석에서 키타짱과 즐겁게 이야기하시던 분, ${you.sex}는……`,
        true,
      );
      await daiya.say_and_wait(
        `보아하니…… 이쪽으로 오실 생각은 없으신가요? 하지만 뭔가 하시고 싶은 말씀은 있는 것 같은데, 게다가 ${you.sex}의 분위기는 어딘가 달라요……`,
        true,
      );
      await era.printAndWait(
        '교관 A 「좋아, 여기까지! 여러분, 일단 마무리하겠습니다. 사토노 다이아몬드의 담당 트레이너는……」',
      );
      await era.printAndWait(
        '교관 A 「선발 이후 사토노 그룹에서 직접 트레이너 심사를 개최합니다. 관심 있는 분들은 꼭 참가해 주세요.」',
      );
      await kita.say_and_wait(
        '그, 그렇구나…… 다이아네는 심사를 거쳐 트레이너를 정하거든. 트레이너, 당신도 참가할 거지?',
      );
      era.printButton('참가하자', 1);
      era.printButton('그만두자', 2);
      ret.push(await era.input());
      if (ret.at(-1) === 1) {
        await era.printAndWait(
          `너무 오래 망설인 탓인지 ${you.name}의 차례는 맨 마지막으로 밀려 있었다.`,
        );
        await era.printAndWait(
          '사토노 그룹 심사위원 「다음은 신청 번호 No.29. 마지막 지원자께서는 들어오세요.」',
        );
        await daiya.say_and_wait(
          '어머? 전에 관중석에서 키타짱과 즐겁게 이야기하시던 분……?',
          true,
        );
        await daiya.say_and_wait(
          '트레이너님, 부탁드려요. 제 달리기를 어떻게 보셨나요?',
        );
        await era.printAndWait(
          `${you.name}은(는) 먼저 ${daiya.sex}의 재능을 있는 그대로 칭찬하고──이어서 앞으로 극복해야 할 과제를 전했다.`,
        );
        era.printButton(
          '「우선, 다른 사람과 진심으로 겨뤄 본 경험이 부족해.」',
          1,
        );
        await era.input();
        await daiya.say_and_wait('진심으로 겨룬다고요……? 그게 어떤……?');
        await you.say_and_wait('레이스 중에 주변의 압박에 당황하지 않았어?');
        await daiya.say_and_wait(
          '아, 모의 레이스 때…… 확실히 망설였어요. 견제를 당하는 초조함을 처음 느껴서, 생각처럼 실력을 발휘하지 못하는 기분이었어요.',
        );
        await daiya.say_and_wait(
          '하지만 저는 어릴 때부터 함께 훈련하는 분들께 『병주할 때는 절대 봐주지 마세요』라고 부탁드렸는걸요.',
        );
        await you.say_and_wait('그래도 다들 조심스러웠을 거야.');
        await daiya.say_and_wait(
          '그, 그랬군요……! 생각해 본 적도 없었어요……! 그래서 다른 선수들에게 압박감을 느낀 거군요……!',
        );
        await you.say_and_wait('그리고 하나 더. 너는 냉정함을 잃기 쉬워.');
        await daiya.say_and_wait(
          '네……냉정함을요? 그런 말은 처음 들어요…… 무슨 뜻인가요?',
        );
        await era.printAndWait(
          `${you.name}은(는) 레이스에서 본 것을 ${daiya.sex}에게 전한다. 중반에 아직 참아야 할 순간, 옆 선수와 경쟁하며 페이스가 올라갔다.`,
        );
        await era.printAndWait(
          `그것이 냉정함을 잃었다는 증거다. 요조숙녀의 가면 아래 숨은 ${daiya.sex}의 가장 솔직한 기질이다.`,
        );
        await daiya.say_and_wait(
          '──!? 그때 확실히 더 앞으로 나가고 싶어서 다리가 근질거렸어요……',
        );
        await daiya.say_and_wait(
          '하지만 곧바로 참았어요. 참았다고 생각했는데…… 그 한순간 페이스가 오른 걸 알아보셨다니……',
        );
        await daiya.say_and_wait(
          '당신은…… 대체 어떤 분이신가요? 레이스 한 번만 보고 제 상태를 그렇게까지……',
        );
        await you.say_and_wait('그만큼 네 달리기에 마음을 빼앗겼어.');
        await era.printAndWait(
          `마음을 빼앗겼기에 장점도 단점도 한순간에 보였다. ${you.name}은(는) ${daiya.sex}의 가문에 대해 모른다. 그래도 ${daiya.sex}의 본질은 꿰뚫어 보고 있었다.`,
        );
        await daiya.say_and_wait('──합격이에요.');
        era.printButton('「……뭐?」', 1);
        await era.input();
        await daiya.say_and_wait(
          '합격이에요! 당신이…… 당신이 제 트레이너예요! 제가 줄곧 찾던 단 한 분. 그러니까 합격이에요!',
        );
        await daiya.say_and_wait(
          `제 트레이너는 ${you.sex}예요! ${you.sex}만이 할 수 있어요. 원래는 신중히 상의해야 하는 일이지만──`,
        );
        await daiya.say_and_wait(
          '가문 모두의 동의가 필요하다──그것도 징크스예요. 그렇다면 직감을 믿고 이 징크스를 깨뜨리겠어요! 누가 뭐라고 해도 당신이 제 트레이너예요!',
        );
        await daiya.say_and_wait(
          '정했어요. 이미 결정했는걸요. 맡아 주실 거죠? 그렇죠? 네?',
        );
        await era.printAndWait(
          `얌전한 아가씨라는 인상과 달리 ${daiya.sex}의 태도는 흔들리지 않는다. ${you.name}이(가) 고개를 끄덕일 때까지 사토노 다이아몬드는 ${you.name}의 손을 놓으려 하지 않았다.`,
        );
        era.println();
        await era.printAndWait(
          '그렇게 당신과 사토노 다이아몬드의 삼 년이 시작되었다!',
          {
            color: daiya.color,
            fontSize: '1.5rem',
          },
        );
      } else {
        await kita.say_and_wait('네……? 트레이너님?');
        await era.printAndWait(
          '깊이 생각한 끝에……심사에 나가지 않기로 했다. ──자신과는 어울리지 않는다.',
        );
        await era.printAndWait(
          '사토노 그룹 심사위원 「다음은 신청 번호 No.28. 마지막 지원자께서는 들어오세요.」',
        );
        await daiya.say_and_wait('네…… 이분이 마지막…… 그렇다면……', true);
        await daiya.say_and_wait(
          '그때 그 트레이너님은 오지 않으셨군요. 제게 뭔가 하고 싶은 말씀이 있어 보였는데…… 어째서……',
          true,
        );
      }
    }
    return ret;
  },
  /**
   * @param {CharaTalk} daiya
   * @param {CharaTalk} you
   */
  async try_out(daiya, you) {
    era.setVerticalAlign('middle');
    era.printInColRows(
      {
        columns: [],
        config: { width: 2 },
      },
      {
        columns: [
          {
            config: {
              fontSize: '1.75rem',
              fontWeight: 'bold',
            },
            content: '？？？',
            type: 'text',
          },
          {
            config: { color: daiya.color, fontSize: '0.75rem' },
            content: '？？？',
            type: 'text',
          },
        ],
        config: { width: 16, verticalAlign: 'middle' },
      },
    );
    era.setVerticalAlign('top');
    era.println();
    await era.printAndWait(`${you.name}은(는) 무슨 소리를 들은 것 같았다…………`);
    await daiya.say_as_unknown_and_wait(
      '트레이너님, 당신은 절 대 로 도 망 칠 수 없 어 요?',
    );
  },
  rec_out: (() => {
    const title = '캐주얼 파티';
    /**
     * @param {CharaTalk} daiya
     * @param {CharaTalk} mcqueen
     * @param {CharaTalk} kita
     * @param {CharaTalk} you
     */
    const f = async (daiya, mcqueen, kita, you) => {
      const ret = [];
      await era.printAndWait(
        `어느 날 체육관에서. 메지로 가문을 대표하는 ${mcqueen.uma_sex_title} 중 한 명인 메지로 맥퀸이 안내하고 있었다.`,
      );
      await mcqueen.say_and_wait(
        '재학생 여러분, 그리고 늘 신세 지고 있는 트레이너 여러분. 오늘 메지로 가문에서 전해 드릴 소식이 있습니다.',
      );
      await mcqueen.say_and_wait(
        '조만간 메지로 가문에서 친목을 다지는 파티를 엽니다. 편한 복장으로 부담 없이 참석해 주세요.',
      );
      await era.printAndWait(
        '신입 트레이너 A 「오~ 메지로 가문의 캐주얼 파티라니. 행사를 자주 열어 줘서 고맙네. 너도 갈 거지?」',
      );
      era.printButton('「응, 갈 생각이야……」', 1);
      era.printButton('「사양할게.」', 2);
      ret.push(await era.input());
      if (ret.at(-1) === 1) {
        await era.printAndWait(
          '신입 트레이너 A 「그럼 파티장에서 보자. 아, 맞다. 지난번 사토노 다이아몬드 트레이너 심사 결과 들었어……?」',
        );
        await era.printAndWait(
          '신입 트레이너 A 「──아무도 안 뽑혔대. 앞으로 어떻게 하려는 걸까.」',
        );
        await era.printAndWait(
          `파티 당일. ${you.name}은(는) 파티장에서 함께 놀이에 푹 빠진 사토노 다이아몬드와 키타산 블랙을 보았다.`,
        );
        await kita.say_and_wait(
          '뭐? 오셀로는 네 모퉁이를 뺏기면 지잖아? 그런데 다이아는 왜 거기에 두는 거야!?',
        );
        await daiya.say_and_wait(
          '응, 네 모퉁이를 뺏기면 패배. 다들 그렇게 생각한다면──',
        );
        await daiya.say_and_wait(
          '이 징크스, 깨뜨려야지! 그 말을 뒤집고 이겨 보일 거야!',
        );
        await kita.say_and_wait(
          '우와, 시작됐어! 다이아의 징크스 깨기 모드! 이 모드가 되면──',
        );
        await era.printAndWait(
          `대국 결과──사토노 다이아몬드의 압승이었다. ${you.name}은(는) 얌전한 아가씨와는 다른 ${daiya.sex}의 모습을 보았다.`,
        );
        await era.printAndWait(
          `징크스──미신 같은 것을 만나면 깨뜨리고 싶어지는 모양이다. ${you.name}이(가) ${daiya.sex}의 기질에 대해 생각하고 있자──`,
        );
        await daiya.say_and_wait(
          '저기…… 잠깐 괜찮으신가요? 레이스장에서 뵈었죠?',
        );
        era.printButton('「사토노 다이아몬드……?」', 1);
        await era.input();
        await daiya.say_and_wait(
          '그때 제 모의 레이스를 봐 주셨죠? 그…… 여쭤보고 싶은 게 있어서요~',
        );
        await daiya.say_and_wait(
          '트레이너 심사에는 왜 오지 않으셨나요? 관심이 있으신 줄 알았는데……',
        );
        await daiya.say_and_wait(
          '제 어떤 점이 기대에 못 미쳤나요? ……자질이 부족하다고 느끼셨나요?',
        );
        await you.say_and_wait('그런 건 아니야. 왜냐하면……!');
        await era.printAndWait(
          `${you.name}은(는) 속마음을 털어놓고 말았다. ${daiya.sex}의 자질은 훌륭하지만, 자신은 평범한 트레이너라 분에 넘친다고 생각했다.`,
        );
        await daiya.say_and_wait('분에 넘친다니…… 하지만 그건 그냥……');
        await mcqueen.say_and_wait(
          '후후, 용기가 나지 않는 마음은 이해해요. 그래도 그렇게까지 두려워하시는 건 지나치네요.',
        );
        await daiya.say_and_wait(
          '아, 맥퀸♪ 안녕하세요. 초대해 주셔서 고마워요~!',
        );
        await mcqueen.say_and_wait(
          '안녕하세요. 사토노, 그리고 젊은 트레이너님, 환영해요. 이야기에 함께해도 될까요?',
        );
        await mcqueen.say_and_wait(
          '사토노 그룹이 유명하고 규모도 큰 것은 사실이에요. 하지만 결코 가까이하기 어려운 상대는 아니랍니다. 트레이너 심사를 연 것도──',
        );
        await mcqueen.say_and_wait(
          '『그만큼 신중하기』 때문이죠. 사토노, 그렇죠?',
        );
        await daiya.say_and_wait(
          '……네, 말씀대로예요. 적합한 트레이너를 찾는 것은 제 꿈과 사토노 가문의 염원을 맡길 분을 찾는 일이기도 하니까요.',
        );
        await daiya.say_and_wait(
          `사토노 가문은──아직 신흥 가문이지만, ${daiya.uma_sex_title} 레이스 문화에 깊은 애정을 품고 앞으로의 발전에도 힘을 보태고자 해요.`,
        );
        await daiya.say_and_wait(
          '운영 협력이나 자선 사업 등 여러 방면으로 노력해 왔어요. 하지만 메지로 가문만큼 역사가 길지 않아 『가장 중요한 어떤 공헌』은 아직 이루지 못했죠.',
        );
        await you.say_and_wait('가장 중요한 공헌?');
        await daiya.say_and_wait(
          `네, 바로──『가문에서 G1을 우승할 수 있는 뛰어난 ${daiya.uma_sex_title}를 많이 길러 내는 것』이에요.`,
        );
        await mcqueen.say_and_wait(
          `그건 ${daiya.uma_sex_title} 업계만의 문화랍니다. 뛰어난 ${daiya.uma_sex_title}를 많이 길러 낸다면 무엇과도 바꿀 수 없는 가장 중요한 공헌이 되니까요.`,
        );
        await mcqueen.say_and_wait(
          `그 큰 기대를 자진해서 짊어진 신성이 ${daiya.sex}, 바로 이 사토노 다이아몬드예요. 트레이너 심사도 ${daiya.sex}를 지지하며 함께 달려 줄 사람을 찾기 위해 열린 거예요.`,
        );
        await mcqueen.say_and_wait(
          '사토노 그룹이 거만해서 그런 게 아니에요. 정말로 그 사람이 필요한 거죠. 그렇죠, 사토노?',
        );
        await daiya.say_and_wait(
          '……네. 전부 가문의 염원을 이루기 위해서예요. 그래서 여러 방법으로 이 꿈을 함께 짊어질 분을 찾고 있었어요.',
        );
        await daiya.say_and_wait(
          '트레이너님, 부탁드려요. 제 달리기를 어떻게 보셨나요? 그날 제게 뭔가 말씀하고 싶어 하시던 눈빛이 계속 마음에 걸려요.',
        );
        await era.printAndWait(
          `그 표정은 무척 진지했다. 곧은 눈동자는 오직 목표를 위해 답을 알고 싶다고 말하고 있다……`,
        );
        await era.printAndWait(
          `${you.name}이(가) 대답을 거절하는 건 너무 실례다. 먼저 재능을 있는 그대로 칭찬하고──이어서 앞으로 극복해야 할 과제를 전했다.`,
        );
        era.printButton(
          '「우선, 다른 사람과 진심으로 겨뤄 본 경험이 부족해.」',
          1,
        );
        await era.input();
        await daiya.say_and_wait('진심으로 겨룬다고요……? 그게 어떤……?');
        await you.say_and_wait('레이스 중에 주변의 압박에 당황하지 않았어?');
        await daiya.say_and_wait(
          '아, 모의 레이스 때…… 확실히 망설였어요. 견제를 당하는 초조함을 처음 느껴서, 생각처럼 실력을 발휘하지 못하는 기분이었어요.',
        );
        await daiya.say_and_wait(
          '하지만 저는 어릴 때부터 함께 훈련하는 분들께 『병주할 때는 절대 봐주지 마세요』라고 부탁드렸는걸요.',
        );
        await you.say_and_wait('그래도 다들 조심스러웠을 거야.');
        await daiya.say_and_wait(
          '그, 그랬군요……! 생각해 본 적도 없었어요……! 그래서 다른 선수들에게 압박감을 느낀 거군요……!',
        );
        await you.say_and_wait('그리고 하나 더. 너는 냉정함을 잃기 쉬워.');
        await daiya.say_and_wait(
          '네……냉정함을요? 그런 말은 처음 들어요…… 무슨 뜻인가요?',
        );
        await era.printAndWait(
          `${you.name}은(는) 레이스에서 본 것을 ${daiya.sex}에게 전한다. 중반에 아직 참아야 할 순간, 옆 선수와 경쟁하며 페이스가 올라갔다.`,
        );
        await era.printAndWait(
          `그것이 냉정함을 잃었다는 증거다. 요조숙녀의 가면 아래 숨은 ${daiya.sex}의 가장 솔직한 기질이다.`,
        );
        await daiya.say_and_wait(
          '──!? 그때 확실히 더 앞으로 나가고 싶어서 다리가 근질거렸어요……',
        );
        await daiya.say_and_wait(
          '하지만 곧바로 참았어요. 참았다고 생각했는데…… 그 한순간 페이스가 오른 걸 알아보셨다니……',
        );
        await daiya.say_and_wait(
          '당신은…… 대체 어떤 분이신가요? 레이스 한 번만 보고 제 상태를 그렇게까지……',
        );
        await you.say_and_wait('그만큼 네 달리기에 마음을 빼앗겼어.');
        await era.printAndWait(
          `마음을 빼앗겼기에 장점도 단점도 한순간에 보였다. ${you.name}은(는) ${daiya.sex}의 가문에 대해 모른다. 그래도 ${daiya.sex}의 본질은 꿰뚫어 보고 있었다.`,
        );
        await daiya.say_and_wait(
          '지금까지…… 지금까지 누구도 그런 말을 해 주지 않았어요. 심사에 오신 분들조차도…… 그런데 당신은──',
        );
        await mcqueen.say_and_wait(
          '후후, 축하해요. 이 파티에서 좋은 분을 만나셨네요.',
        );
        await mcqueen.say_and_wait(
          '사토노, 심사에 참가하시도록 권해 보는 건 어때요? 그룹의 다른 분들도 눈여겨보실지 몰라요──',
        );
        await daiya.say_and_wait('──합격이에요.');
        era.printButton('「……뭐?」', 1);
        await era.input();
        await daiya.say_and_wait(
          '합격이에요! 당신이…… 당신이 제 트레이너예요! 제가 줄곧 찾던 단 한 분. 그러니까 합격이에요!',
        );
        await mcqueen.say_and_wait(
          '네? 사토노!? 알고 계시죠? 당신의 트레이너가 누구인지는 사토노 그룹에서 얼마나 신중히 결정해야 하는 일인지요.',
        );
        await mcqueen.say_and_wait(
          '느낌만으로 그렇게 서둘러 정하면 안 돼요! 한 번 돌아가서 여러분과 충분히 상의를──',
        );
        await daiya.say_and_wait(
          '아니요, 결정했어요. 존경하는 맥퀸이 설득해도 이것만큼은 절대 바꾸지 않을 거예요.',
        );
        await daiya.say_and_wait(
          `제 트레이너는 ${you.sex}예요! ${you.sex}만이 할 수 있어요. 원래는 신중히 상의해야 하는 일이지만──`,
        );
        await daiya.say_and_wait(
          '가문 모두의 동의가 필요하다──그것도 징크스예요. 그렇다면 직감을 믿고 이 징크스를 깨뜨리겠어요! 누가 뭐라고 해도 당신이 제 트레이너예요!',
        );
        await daiya.say_and_wait(
          '정했어요. 이미 결정했는걸요. 맡아 주실 거죠? 그렇죠? 네?',
        );
        await era.printAndWait(
          `얌전한 아가씨라는 인상과 달리 ${daiya.sex}의 태도는 흔들리지 않는다. ${you.name}이(가) 고개를 끄덕일 때까지 사토노 다이아몬드는 ${you.name}의 손을 놓으려 하지 않았다.`,
        );
        era.println();
        await era.printAndWait(
          '그렇게 당신과 사토노 다이아몬드의 삼 년이 시작되었다!',
          {
            color: daiya.color,
            fontSize: '1.5rem',
          },
        );
      } else {
        await era.printAndWait(
          '안 좋은 예감이 든다. 역시 가지 않는 편이 좋겠다.',
        );
        await era.printAndWait(
          `하지만 ${you.name}이(가) 등을 돌렸을 때 무슨 소리를 들은 것 같았다…………`,
        );
        await daiya.say_as_unknown_and_wait(
          '트레이너님, 당신은 절 대 로 도 망 칠 수 없 어 요?',
        );
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
};
