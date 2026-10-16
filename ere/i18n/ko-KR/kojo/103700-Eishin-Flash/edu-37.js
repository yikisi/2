/**
 * @file エイシンフラッシュ - 育成
 * @author 爱放箭的袁本初
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  ts_add: (() => {
    const title = '추가 트레이닝';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} festa ナカヤマフェスタ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (flash, festa, you) => {
      await era.printAndWait(
        '에이신 플래시는 뛰어난 기량을 발휘해 이번 트레이닝 목표를 달성했다.',
      );
      await era.printAndWait(
        `이제 쉬어도 될 법한 ${flash.sex}의 눈에 문득 운동장 한쪽에 서 있는 나카야마 페스타가 들어왔다.`,
      );
      await flash.say_and_wait('나카야마 씨, 지금 트레이닝 시간인가요?');
      await era.printAndWait(
        `상대가 몹시 나른한 표정을 짓고 있자 ${flash.sex}가 궁금한 듯 물었다.`,
      );
      await festa.say_and_wait('그래…… 그런데 도무지 의욕이 안 나네.');
      await era.printAndWait('나카야마 페스타는 어깨를 으쓱하며 대답했다.');
      await flash.say_and_wait('의욕이 안 난다고요?');
      await era.printAndWait(
        '그 말에 에이신 플래시의 얼굴에 걱정스러운 기색이 떠올랐다.',
      );
      await flash.say_and_wait('어디 몸이라도 안 좋은 건가요?');
      await festa.say_and_wait(
        '아니야. 그냥 혼자 하는 트레이닝은 자극이 부족해서 그래.',
      );
      await flash.say_and_wait('자극요?');
      await era.printAndWait(
        `상대의 말을 들은 ${flash.sex}는 무언가 생각하더니 고개를 끄덕였다.`,
      );
      await flash.say_and_wait(
        '그렇다면 저와 함께 병주해 보시는 건 어떠세요?',
      );
      await festa.say_and_wait('병주?');
      await era.printAndWait(
        '에이신 플래시의 제안에 나카야마 페스타의 얼굴에서 조금 전의 나른함이 사라지고, 흥미롭다는 듯한 미소가 번졌다.',
      );
      await festa.say_and_wait('그거 아주 재미있는 제안이네.');
      await festa.say_and_wait('어이, 거기 트레이너.');
      era.printButton('「？」', 1);
      await era.input();
      await era.printAndWait(
        `다음 순간, ${flash.sex}는 시선을 ${you.name}에게 돌렸다.`,
      );
      await festa.say_and_wait(
        `당장이라도 에이신 플래시를 끌고 시원하게 한 번 달리고 싶지만, ${
          flash.sex
        }는 네가 담당하는 ${flash.uma_sex_title} 맞지?`,
      );
      await festa.say_and_wait('네 의견은 어때?');
      era.printButton('「다녀와, 플래시.」', 1);
      era.printButton('「이미 휴식 시간이야.」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `에이신 플래시가 나카야마 페스타에게 뜨거운 자극이 될 레이스를 보여주고 싶어 한다면, ${flash.sex}가 원하는 대로 해주기로 했다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 에이신 플래시에게 손을 흔들어 응원했다.`,
        );
        await flash.say_and_wait('네!');
        await era.printAndWait('그 모습에 에이신 플래시는 고개를 끄덕였다.');
        await flash.say_and_wait('그럼 전력을 다할게요, 나카야마 씨!');
        await festa.say_and_wait('하하! 좋아, 그래야지!');
        await era.printAndWait(
          '그 말에 나카야마 페스타도 기대감이 섞인 호탕한 웃음을 터뜨렸다.',
        );
        await era.printAndWait(
          '그렇게 두 사람은 코스로 달려나가 진지하게 병주 트레이닝에 임했다.',
        );
      } else {
        await era.printAndWait(
          `에이신 플래시가 나카야마 페스타에게 뜨거운 레이스를 보여주고 싶어 했고, ${you.name} 역시 ${flash.sex}의 소원을 들어주고 싶었지만.`,
        );
        await era.printAndWait(
          '오늘의 운동량은 이미 충분했다. 과도한 트레이닝은 오히려 몸에 문제를 일으킬 수 있었다.',
        );
        await era.printAndWait(
          `${you.name}은(는) 에이신 플래시를 향해 고개를 저었다.`,
        );
        await flash.say_and_wait('으음……');
        await era.printAndWait(
          '그 모습에 에이신 플래시는 아쉬운 기색을 내비쳤다.',
        );
        await flash.say_and_wait(
          '알겠습니다. 오버 트레이닝은 확실히 좋지 않죠.',
        );
        await flash.say_and_wait(
          '그렇다면 나카야마 씨, 우리 다음에 같이 달릴 수 있을까요?',
        );
        await era.printAndWait(
          '그렇게 에이신 플래시는 품 안에서 스케줄 수첩을 꺼내 나카야마 페스타와 약속한 날짜 위에 동그라미를 그렸다.',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  async train_in_fat(flash) {
    await flash.say_and_wait('……어라?');
    await era.printAndWait(
      '어느 날, 정기 신체검사 중에 에이신 플래시는 체중계의 숫자가 이전보다 늘어난 것을 발견했다.',
    );
    await flash.say_and_wait('체중이…… 늘었다고요?');
    await era.printAndWait(`그 광경에 ${flash.sex}는 미간을 찌푸렸다.`);
    await flash.say_and_wait(
      '기존 일정에 다이어트 계획을 추가해야겠네요.',
    );
    await era.printAndWait(`거기까지 생각한 ${flash.sex}는 고개를 끄덕였다.`);
    await era.printAndWait(
      '그렇게 한동안 노력한 끝에 에이신 플래시의 체중은 다시 정상으로 돌아왔다.',
    );
  },
  train_fail: (() => {
    const title = '푹 쉬기';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} fail_again 頑張らせた場合に再失敗するか
     */
    const f = async (flash, you, fail_again) => {
      await era.printAndWait('에이신 플래시의 트레이닝이 실패했다.');
      await flash.say_and_wait(
        '으윽, 제가 부주의했어요…… 준비운동을 좀 더 세심하게 했더라면…… 이런 결과를 피할 수 있었을지도 모르는데.',
      );
      await era.printAndWait(
        `트레이닝실 안에서 ${flash.sex}가 침울한 어조로 말했다.`,
      );
      await flash.say_and_wait(
        '이렇게 되면 이후의 계획들이 차질을 빚을 수도 있겠네요.',
      );
      era.printButton('「조급해하지 말고 일단 푹 쉬자.」', 1);
      era.printButton('「무리하지 말고 일단 푹 쉬어.」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          '급할수록 돌아가라는 말이 운동에도 똑같이 적용되는 법이다.',
        );
        await era.printAndWait(
          '휴식 없는 노력은 결국 불균형을 초래하고, 더 나쁜 결과를 낳을 뿐이다.',
        );
        await flash.say_and_wait('음……');
        await era.printAndWait(
          `에이신 플래시 역시 그 도리를 알고 있었기에, ${flash.sex}는 잠시 침묵한 뒤 천천히 고개를 끄덕였다.`,
        );
        await flash.say_and_wait(
          '알겠습니다. 그럼 당신의 조언대로 일단 푹 쉴게요.',
        );
      } else {
        await era.printAndWait(
          '급할수록 돌아가라는 말은 운동에도 똑같이 적용된다.',
        );
        await era.printAndWait('무작정 무리하는 것은 상황을 악화시킬 뿐이다.');
        await flash.say_and_wait('음……');
        if (!fail_again) {
          await era.printAndWait(
            `에이신 플래시 역시 그 도리를 알고 있었기에, ${flash.sex}는 잠시 침묵한 뒤 천천히 고개를 끄덕였다.`,
          );
          await flash.say_and_wait(
            '저는 이게 무리라고 생각하지는 않지만…… 당신 말씀이 맞네요.',
          );
          await flash.say_and_wait('그럼 당신의 조언대로 일단 푹 쉴게요.');
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fumble: (() => {
    const title = '무리는 금물';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} fail_again 頑張らせた場合に再失敗するか
     */
    const f = async (flash, you, fail_again) => {
      await era.printAndWait('에이신 플래시의 트레이닝이 실패했다.');
      await flash.say_and_wait('Autsch……');
      await flash.say_and_wait(
        '정말 죄송해요, 제가 부상을 입을 줄은 몰랐는데……',
      );
      await era.printAndWait(
        `보건실 안에서 ${flash.sex}가 미안한 어조로 말했다.`,
      );
      await flash.say_and_wait(
        '하지만 이런 작은 부상 때문에 일정을 변경할 수는 없어요.',
      );
      await era.printAndWait(
        `다음 순간, ${flash.sex}는 고개를 저으며 다시 마음을 다잡으려 했다.`,
      );
      await flash.say_and_wait(
        '다행히 부상이 감당할 수 있는 정도니까, 조금만 쉬면 계속 트레이닝할 수 있을 거예요.',
      );
      era.printButton('「조심해서 가.」', 1);
      era.printButton('「정말로 계속할 수 있겠어?」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          '의욕적으로 트레이닝하는 건 좋지만, 그것 때문에 자신을 무리하게 몰아붙여서는 안 된다.',
        );
        await flash.say_and_wait(
          '하지만 여기서 너무 많은 시간을 낭비하면 다음 계획들이 밀려버릴 가능성이 있어서……',
        );
        await era.printAndWait(
          `${you.name}의 제안에 에이신 플래시의 얼굴에 망설임이 서렸다.`,
        );
        era.printButton('「부상이 악화되면 상황은 더 나빠질 거야.」', 1);
        await era.input();
        await era.printAndWait(`${you.name}이(가) 가볍게 한숨을 쉬며 말했다.`);
        await flash.say_and_wait('……');
        await era.printAndWait(
          `${you.name}의 말이 눈앞의 상대를 일깨운 모양이었다.`,
        );
        await era.printAndWait(
          `${flash.sex}는 고개를 떨구고 흔들리는 눈빛으로 득실을 따져 보는 듯했다.`,
        );
        await flash.say_and_wait('알았어…… ');
        await era.printAndWait(`잠시 후, ${flash.sex}의 몸에서 힘이 빠졌다.`);
        await flash.say_and_wait(
          '당신 말이 맞아요. 그렇다면 일단은 안심하고 치료에 전념할게요.',
        );
      } else {
        await era.printAndWait(
          '의욕적인 건 좋지만, 플래시의 지금 상태로 계속하는 건 너무 무리 아닐까?',
        );
        await flash.say_and_wait(
          '음, 고강도 운동은 당장 무리겠지만 가벼운 러닝 정도는 소화할 수 있어요.',
        );
        await era.printAndWait(
          `${you.name}의 우려 섞인 질문에 ${flash.sex}는 자신 있게 대답했다.`,
        );
        if (fail_again) {
          await flash.say_and_wait('윽!');
          await era.printAndWait(
            `……하지만 다음 순간, ${you.name}은(는) ${flash.sex}가 너무 급하게 일어나려다 신음하는 것을 보았다.`,
          );
          era.printButton('「역시 제대로 치료받자.」', 1);
          await era.input();
          await era.printAndWait(`${you.name}은(는) 가볍게 한숨을 내쉬었다.`);
          await flash.say_and_wait('네……');
          await era.printAndWait(
            '부정할 수 없는 사실이 눈앞에 닥치자, 마음속에 아무리 미련이 남았어도 에이신 플래시는 고개를 숙이고 받아들일 수밖에 없었다.',
          );
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = '모든 일의 시작 · 첫 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait('드디어 에이신 플래시가 데뷔할 때가 왔다.');
      await flash.say_and_wait('후우…… 레이스 시작까지 앞으로 15분 남았네요.');
      await era.printAndWait(
        `대기실 안, ${you.name}은(는) 에이신 플래시가 레이스를 위해 마지막 준비를 하는 모습을 지켜보았다.`,
      );
      era.printButton('「긴장돼?」', 1);
      await era.input();
      await flash.say_and_wait('네.');
      await era.printAndWait(
        `조금 뜻밖이었지만 에이신 플래시는 고개를 끄덕였다.`,
      );
      await flash.say_and_wait('긴장되는 건 어쩔 수 없으니까요.');
      await flash.say_and_wait(
        '앞으로 마주할 레이스는 트윙클 시리즈라는 길에 발을 들일 수 있을지를 결정하는 데뷔전, 그야말로 모든 일의 시작이니까요.',
      );
      await flash.say_and_wait(
        '아무리 마음을 억누르려 해도, 분명 조금은 동요가 생기기 마련이겠죠?',
      );
      era.printButton('「자연스러운 현상이야.」', 1);
      await era.input();
      await flash.say_and_wait(
        '맞아요. 그러니 긴장이 앞으로 일어날 일에 영향을 주지는 않을 거예요. 하물며……',
      );
      await era.printAndWait(
        `에이신 플래시가 그렇게 말하는 동안, ${you.name}은(는) 그 얼굴에 옅은 미소가 번지는 것을 보았다.`,
      );
      await flash.say_and_wait('모든 것이 계획대로 진행되고 있잖아요, 그렇죠?');
      era.printButton('「！」', 1);
      await era.input();
      await flash.say_and_wait(
        `달리기 위한 트레이닝도, 레이스를 위한 전략도. 담당 계약을 맺은 순간부터 오늘까지 저와 ${callname}은(는) 정말 많은 것을 함께 쌓아 왔어요.`,
      );
      await flash.say_and_wait(
        '그런 관점에서 보면 데뷔전도 그저 우리 성과를 확인하는 하나의 테스트일 뿐이에요.',
      );
      era.printButton('「그렇구나.」', 1);
      await era.input();
      await era.printAndWait(
        `자신만만한 에이신 플래시의 어깨를 ${you.name}은(는) 두드리며 격려의 눈빛을 보냈다.`,
      );
      era.printButton('「그럼 네 성적을 경기장의 모든 이에게 보여주자고.」', 1);
      await era.input();
      await flash.say_and_wait('네!');
      await era.printAndWait(
        `에이신 플래시는 힘차게 고개를 끄덕였고, 고양된 투지가 ${flash.sex}의 몸에서 뿜어져 나왔다.`,
      );
      await flash.say_and_wait('레이스 시작까지 10분, 그럼 다녀올게요.');
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '모든 일의 시작 · 두 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await flash.say_and_wait(`다녀왔습니다, ${callname}.`);
      era.printButton('「레이스하느라 수고했어.」', 1);
      await era.input();
      await flash.say_and_wait('후우…… 정말 잊지 못할 경험이었네요.');
      await era.printAndWait(
        '에이신 플래시는 깊은 숨을 내쉬며, 레이스로 쌓인 피로를 조금이나마 털어냈다.',
      );
      await era.printAndWait(
        `이어서 ${you.name}은(는) ${flash.sex}가 내뱉은 진심 어린 감탄을 들었다.`,
      );
      era.printButton('「잊지 못할 경험이지?」', 1);
      await era.input();
      await flash.say_and_wait(
        '네, 이것이 공식 레이스와 연습 레이스의 차이로군요. 역시 말로만 들어서는 느낄 수 없는 것이었어요.',
      );
      await era.printAndWait(
        '말을 마치며, 에이신 플래시는 만족스럽게 고개를 끄덕였다.',
      );
      await era.printAndWait(
        `새로운 수확을 얻은 ${flash.sex}가 이번 레이스를 즐겼다는 것을 ${you.name}은(는) 알 수 있었다.`,
      );
      era.printButton('「이제 다음에는 뭘 할 거야?」', 1);
      await era.input();
      await era.printAndWait(
        '그렇다면 지금이야말로 여세를 몰아 다음 단계로 나아갈 좋은 타이밍이다.',
      );
      await flash.say_and_wait(
        '다음 일정이라면, 역시 계획에 정해 둔 대로 진행해야겠지요.',
      );
      era.printButton('「계획이라.」', 1);
      await era.input();
      await era.printAndWait(
        '데뷔전으로 중장거리 실력을 확인하고, 클래식급의 클래식 삼관과 시니어급의 봄가을 삼관에 대비한다.',
      );
      await era.printAndWait(
        `종합하자면, 이것이 에이신 플래시가 자신의 ${flash.uma_sex_title} 생애를 위해 세워둔 설계였다. 얻을 수 있는 모든 영광을 손에 넣겠다는 의지가 담겨 있었고, 계획을 글로만 보아도 무척이나 호화로운 구성이었다.`,
      );
      await flash.say_and_wait('다만……');
      await era.printAndWait(
        `……하지만, 만약 모든 것이 ${flash.sex}의 바람대로 이루어진다면. 마지막에는 ${flash.sex} 자신이 말했듯 영광을 거머쥐어 부모님을 자랑스럽게 해 드릴 수 있을 것이다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 속으로 스스로를 다독이며 의욕을 다졌다.`,
      );
      era.printButton('「그럼 우리, 함께 힘내보자.」', 1);
      await era.input();
      await flash.say_and_wait('네!');
      await era.printAndWait(
        `에이신 플래시는 ${you.name}에게 고개를 끄덕였고, ${flash.sex}의 얼굴에는 찬란한 미소가 떠올랐다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '새해의 포부';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await flash.say_and_wait(
        `『Ich wünsche dir ein frohes neues Jahr!』 새해 복 많이 받으세요, ${callname}.`,
      );
      era.printButton('「새해 복 많이 받아.」', 1);
      await era.input();
      await era.printAndWait(
        `새해 첫날, 트레이닝실 안에서 ${you.name}과(와) 에이신 플래시는 서로 새해 인사를 나눴다.`,
      );
      await flash.say_and_wait('부디 이것을 받아주세요.');
      era.printButton('「？」', 1);
      await era.input();
      await era.printAndWait(
        `이어서 ${you.name}은(는) ${flash.sex}가 등 뒤에서 정성스럽게 포장된 선물 상자를 꺼내는 것을 보았다.`,
      );
      era.printButton('「이건……」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 에이신 플래시에게 받은 선물 상자를 열어 보고는 내용물을 보고 살짝 눈이 휘둥그레졌다.`,
      );
      era.printButton('「……눈알이 달린 분홍색 원형 케이크?」', 1);
      await era.input();
      await flash.say_and_wait('후후후~');
      await era.printAndWait(
        `에이신 플래시는 ${you.name}의 묘사에 작게 웃음을 터뜨렸다.`,
      );
      await flash.say_and_wait(
        '객관적으로는 정확한 묘사입니다만, 이건 결코 『눈알이 달린 분홍색 원형 케이크』가 아니랍니다.',
      );
      await era.printAndWait(
        `${flash.sex}는 손가락 하나를 치켜세우며 ${you.name}에게 이 선물에 담긴 의미를 설명하기 시작했다.`,
      );
      await flash.say_and_wait('『Glücksbringer』, 행운의 돼지라는 뜻이에요.');
      await flash.say_and_wait(
        '독일에서는 돼지가 행운과 부를 가져다준다고 믿거든요. 그래서 새해가 되면 돼지를 본뜬 선물을 친한 지인에게 보내며 축복을 전하곤 하죠.',
      );
      era.printButton('「그렇구나, 정말 귀중한 선물이네.」(전 능력치 +10)', 1);
      era.printButton(
        `「그렇구나, 그래서 이게 돼지라는 거구나.」(스킬 포인트 +70)`,
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name}은(는) 상자를 들여다봤다. 에이신 플래시의 명쾌한 설명을 들어도 이 분홍색 구체를 자신이 아는 돼지와 연결 짓기는 어려웠다.`,
        );
        await era.printAndWait(
          '하지만 어찌 됐든, 축하하는 마음은 무엇보다 값진 법이다.',
        );
        await era.printAndWait(
          `그렇기에 ${you.name}은(는) 이 선물을 매우 소중하게 간직하기로 했다.`,
        );
        await flash.say_and_wait('후후, 그러고 보니……');
        await era.printAndWait(
          '바로 그때, 에이신 플래시가 갑자기 쑥스러운 듯 웃음을 지었다.',
        );
        await flash.say_and_wait(
          `사실 처음에는 실제 모습과 비슷하게 만들려 했어요. 하지만 팔콘 씨가 그렇게 만들면 결과물이 좀 무섭지 않겠느냐고 해서, 결국 ${flash.sex}의 조언에 따라 귀여운 모양을 채택하게 되었죠.`,
        );
        await flash.say_and_wait(
          '하지만 유감스럽게도 미술에서는 모사 외의 다른 기법을 써 본 경험이 없어서…… 데포르메도 해 본 적이 없었네요.',
        );
        await flash.say_and_wait(
          '그래서 나름대로 최선을 다해 만들어 봤습니다만, 역시 결과가 그리 좋지는 않군요.',
        );
        era.printButton('「중요한 건 겉모습이 아니라 마음이야.」', 1);
        await era.input();
        await flash.say_and_wait('！');
        await era.printAndWait(
          `${you.name}의 말을 들은 에이신 플래시는 무언가 생각에 잠긴 듯 고개를 끄덕였다.`,
        );
        await flash.say_and_wait(
          '……당신 말이 맞아요. 선물이라는 건 그 속에 담긴 『마음』이 중요한 것이지, 『물건』 그 자체가 아니니까요.',
        );
      } else {
        await era.printAndWait(
          `에이신 플래시의 설명은 명쾌했다. 그래도 상자 속 분홍색 구체를 자신이 아는 돼지와 연결 짓기는 어려웠다.`,
        );
        await flash.say_and_wait('으음.');
        await era.printAndWait(
          `${you.name}의 말을 듣고 에이신 플래시의 얼굴에 조금 부끄러워하는 기색이 서렸다.`,
        );
        await flash.say_and_wait(
          `사실 처음에는 실제 모습과 비슷하게 만들려 했어요. 하지만 팔콘 씨가 그렇게 만들면 결과물이 좀 무섭지 않겠느냐고 해서, 결국 ${flash.sex}의 조언에 따라 귀여운 모양을 채택하게 되었죠.`,
        );
        await flash.say_and_wait(
          '하지만 유감스럽게도 미술에서는 모사 외의 다른 기법을 써 본 경험이 없어서…… 데포르메도 해 본 적이 없었네요.',
        );
        await flash.say_and_wait(
          '그래서 나름대로 최선을 다해 만들어 봤습니다만, 지금 보니 역시 결과가 좋지는 않네요……',
        );
        era.printButton('「……그렇긴 해도, 정말 맛있어!」', 1);
        await era.input();
        await era.printAndWait(
          `에이신 플래시의 안색이 어두워지는 것을 본 ${you.name}은(는) 서둘러 선물 상자에 동봉된 식기를 들고 둥근 케이크를 크게 한입 떠먹었다.`,
        );
        await flash.say_and_wait('！');
        await flash.say_and_wait(`${callname}……후후~~`);
        await era.printAndWait(
          `${you.name}이(가) 한입 또 한입 게걸스럽게 먹어 치우는 모습을 보자 에이신 플래시의 표정에 다시 기쁨이 서리기 시작했다.`,
        );
        await flash.say_and_wait(
          '정말이지, 아무리 맛있어도 먹는 속도에 주의해 주세요.',
        );
        await flash.say_and_wait(
          '하지만 기쁘네요. 직접 만든 디저트를 인정받을 수 있어서.',
        );
        await flash.say_and_wait(
          '그 속에는…… 제 마음도 듬뿍 담겨 있으니까요.',
        );
        era.printButton('「마음?」', 1);
        await era.input();
      }
      await flash.say_and_wait(
        '올해는 제 인생에서 가장 중요한 한 해가 될지도 모르겠어요.',
      );
      await era.printAndWait(
        `에이신 플래시는 입을 열어 선물에 담긴 ${flash.sex}의 마음을 ${you.name}에게 설명했다.`,
      );
      await flash.say_and_wait(
        '사츠키상, 일본 더비, 국화상…… 클래식 삼관을 향한 도전이 코앞으로 다가왔어요.',
      );
      await era.printAndWait(
        `${you.name}은(는) ${flash.sex}의 목소리가 점차 진지해지는 것을 느낄 수 있었다.`,
      );
      await flash.say_and_wait(
        '꿈을 이루기 위해, 부모님께서 저를 자랑스럽게 여기실 수 있도록, 저는 반드시 해내야만 합니다.',
      );
      await flash.say_and_wait('그래서……');
      await era.printAndWait(
        `${you.name}이(가) 자세를 바로잡고 플래시의 고백을 경청하려던 찰나.`,
      );
      await era.printAndWait('다음 순간, 분위기는 다시 순식간에 누그러졌다.');
      await flash.say_and_wait(
        '이 행운의 돼지에, 당신과 함께 이 가시밭길을 무사히 끝까지 걸어갈 수 있기를 바라는 염원을 담았어요.',
      );
      era.printButton('「플래시……」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}에게 따뜻한 미소를 짓는 에이신 플래시를 보니 더 많은 말은 필요하지 않다는 생각이 들었다.`,
      );
      era.printButton('「고마워.」', 1);
      await era.input();
      await era.printAndWait(
        `그렇게 ${you.name}은(는) 정중하게 고개를 끄덕이며 그 축복을 받아들였다.`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_keis_hai: (() => {
    const title = '뜻밖의 기쁨';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        '케이세이배는 클래식 삼관 중 하나인 사츠키상의 전초전으로, 코스와 거리가 같다.',
      );
      await era.printAndWait(
        '그렇기에 에이신 플래시는 계획 수립 단계부터 이곳을 왕도에 오르기 위한 사전 연습 무대로 삼았고, 이는 매우 적절한 판단이었다.',
      );
      await you.say_as_passer_by_and_wait(
        '행인A',
        '그러고 보니 오늘 레이스, 너는 어떤 우마무스메가 유망해 보여?',
      );
      await you.say_as_passer_by_and_wait(
        '행인B',
        `응? 물어볼 것도 없지. 역시 ${flash.sex}지.`,
      );
      await era.printAndWait(
        `하지만 ${you.name}과(와) ${flash.sex} 모두 예상치 못했던 일이지만, 정식으로 레이스에 참여하기도 전에 뜻밖의 기쁨을 맛보게 되었다.`,
      );
      await you.say_as_passer_by_and_wait(
        '행인A',
        '그렇네, 확실히 지난번 보여준 활약도 대단했으니까.',
      );
      await you.say_as_passer_by_and_wait(
        '행인B',
        `게다가 대진표를 봐도 ${flash.sex}를 응원할 수밖에 없잖아?`,
      );
      await you.say_as_passer_by_and_wait(
        '행인A',
        `다른 아이들에게는 좀 미안한 말이지만…… 뭐, 어쨌든 이따가 같이 ${flash.sex}를 응원하자고.`,
      );
      await you.say_as_passer_by_and_wait(
        '행인B',
        '응응, 힘내라! 에이신 플래시!!',
      );
      era.drawLine({ content: '레이스 당일, 선수 대기실' });
      await flash.say_and_wait('……최고 인기 후보가 될 줄은 몰랐어요.');
      await era.printAndWait(
        `오늘자 신문의 레이스 예측을 보며, ${you.name}은(는) 에이신 플래시의 미간이 살짝 찌푸려진 것을 발견했다.`,
      );
      era.printButton('「기쁘지 않아?」', 1);
      await era.input();
      await flash.say_and_wait(
        '아뇨, 기쁘지 않다기보다는 정확히 말해 기분이 조금 묘하네요.',
      );
      await flash.say_and_wait(
        '제가 최고 인기 후보가 된 데에는 다른 출주자들이 높은 평가를 받지 못한 영향이 크니까요……',
      );
      era.printButton(
        '「하지만 반대로 말하면, 그만큼 사람들이 너에게 기대를 걸고 있다는 증거 아닐까?」',
        1,
      );
      await era.input();
      await flash.say_and_wait('………');
      await era.printAndWait(
        `${you.name}의 말에 에이신 플래시는 몇 초간 침묵했다. 그리고 이내 천천히 고개를 끄덕였다.`,
      );
      await flash.say_and_wait(
        '선생님 말씀이 맞아요. 스스로의 능력이 뛰어나지 않다면 타인의 시선을 끌 수도 없었겠죠.',
      );
      await flash.say_and_wait(
        '그러니 이 기대가 실망으로 바뀌지 않도록, 전력을 다해 보답해야겠어요.',
      );
      await era.printAndWait(
        `말을 마친 에이신 플래시의 얼굴에 진지한 표정이 서렸다. ${flash.sex}가 팬들의 기대를 소중히 여긴다는 것을 ${you.name}은(는) 알 수 있었다.`,
      );
      await flash.say_and_wait('……그뿐만 아니라, 저 자신에게도 보답해야 해요.');
      await flash.say_and_wait(
        '케이세이배와 사츠키상은 코스와 거리가 같습니다. 즉, 이 레이스에서조차 만족스럽지 못한 결과를 낸다면 앞으로의 길은 더욱 험난해지겠죠.',
      );
      era.printButton('「할 일을 다하고, 스스로에게 부끄럽지 않게.」', 1);
      await era.input();
      await flash.say_and_wait('네! 선생님 말씀이 옳아요.');
      await flash.say_and_wait(
        '제가 할 수 있는 모든 일에 최선을 다한다면, 합당한 결과는 자연스럽게 제 손에 들어오겠죠.',
      );
      await flash.say_and_wait(`후우…… 좋아요! 다녀올게요, ${callname}.`);
      era.printButton('「파이팅!」', 1);
      await era.input();
      await era.printAndWait(
        '말을 마친 에이신 플래시는 자신감 넘치는 모습으로 경기장으로 향했다.',
      );
      await era.printAndWait(
        `${you.name}은(는) ${flash.sex}의 뒷모습을 보며, 적어도 이번 레이스에서 ${flash.sex}의 활약은 매우 대단할 것이라 확신했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_13: (() => {
    const title = '갑작스러운 재앙';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     * @param {PrintedSpan} s_weak エイシンフラッシュ専用状態 [虚弱]
     */
    const f = async (flash, you, callname, s_weak) => {
      await era.printAndWait(
        '케이세이배에서 에이신 플래시는 훌륭한 달리기로 좋은 성적을 거뒀다. 계획대로라면 다음 단계는 사츠키상에 참가하는 것이었다.',
      );
      await flash.say_and_wait(`……${callname}.`);
      await era.printAndWait(
        '…………그랬어야 했다. 하지만 레이스 개막을 일주일 앞두고 사고가 발생하고 말았다.',
      );
      era.printButton('「열이라도 나는 거야?」', 1);
      await era.input();
      await era.printAndWait(
        `학원 보건실 안, ${you.name}은(는) 걱정스러운 표정으로 병상에 누워 있는 에이신 플래시를 바라보았다.`,
      );
      await flash.say_and_wait('……네.');
      await era.printAndWait(`${flash.sex}는 힘없이 고개를 끄덕였다.`);
      await flash.say_and_wait(
        '어제 18시에 장을 보러 나가면서 일기예보의 강수 확률을 너무 믿고 우산을 챙기지 않았다가 갑작스러운 폭우를 만나 온몸이 젖은 것이 원…… 콜록, 콜록——.',
      );
      await era.printAndWait(
        '에이신 플래시의 말은 격한 기침 소리에 가로막혔다.',
      );
      await era.printAndWait(
        `${flash.sex}의 병세가 상당히 심각해 보였기에, 이를 본 ${you.name}은(는) 가볍게 한숨을 내쉬었다.`,
      );
      era.printButton(
        '「아무래도…… 다음 주의 사츠키상은 나가지 않는 게 좋겠어.」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `몸이 약해진 환자는 충분히 쉬고 격한 운동을 피해야 한다. ${you.name}은(는) 그 사실을 알고 있었다.`,
      );
      await flash.say_and_wait('！');
      await era.printAndWait('하지만 에이신 플래시의 생각은 달랐다.');
      await flash.say_and_wait(
        '아뇨! 의사 선생님도 충분히 쉬기만 하면 금방 회복될 거라고 하셨어요!',
      );
      await flash.say_and_wait(
        '게다가 사츠키상까지는 아직 7일이나 남았으니, 시간은 분명…… 콜록콜록!',
      );
      era.printButton('「진정해! 플래시.」', 1);
      await era.input();
      await era.printAndWait(
        `갑자기 흥분해 몸을 일으키려는 에이신 플래시를 보고 ${you.name}은(는) ${flash.sex}를 눕혀 쉬게 했다.`,
      );
      await flash.say_and_wait('…………충분……해요…………');
      await flash.say_and_wait('…………');
      await era.printAndWait('에이신 플래시는 말없이 다시 침대에 누웠다.');
      await era.printAndWait(
        `십여 초가 흐른 뒤, 다시 냉정을 되찾은 ${flash.sex}가 그제야 ${you.name}을(를) 쳐다보았다.`,
      );
      await flash.say_and_wait(
        `죄송해요, ${callname}. 제가 추태를 보였습니다.`,
      );
      era.printButton('「흥분한다고 해결되는 건 아무것도 없어.」', 1);
      await era.input();
      await flash.say_and_wait('…………네, 당신 말이 맞아요.');
      await flash.say_and_wait(
        '하지만 이미 세워 둔 계획을 포기할 수는 없습니다. 그러니 설령 약해진 몸을 이끌고서라도 저는 반드시 사츠키상에 나가야 해요.',
      );
      era.printButton(
        '「그런 상태로는 완벽한 실력을 발휘하기 힘들다는 걸 너도 알잖아.」',
        1,
      );
      await era.input();
      await flash.say_and_wait(
        '…………하지만 시도조차 하지 않는다면 기회가 완전히 사라지고 말아요.',
      );
      await era.printAndWait(
        `에이신 플래시는 ${you.name}의 말뜻을 부정하지 않았다. 그래도 ${flash.sex}는 출주를 포기하지 않았다.`,
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 아무 말 없이, 그저 ${flash.sex}의 눈을 진지하게 뚫어져라 쳐다보았다.`,
      );
      await flash.say_and_wait(
        '그러니 부탁드려요. 제가 사츠키상에 나가는 것을 허락해 주세요.',
      );
      await flash.say_and_wait(
        '그것은 제 꿈을 이루기 위해 반드시 해야만 하는 일입니다.',
      );
      await era.printAndWait(
        `그 눈빛에서 ${you.name}은(는) 꺾이지 않는 고집과 무슨 일이 있어도 목표를 이루겠다는 집념을 읽어냈다.`,
      );
      era.printButton(
        '「……알겠어. 그때 가서 정말 문제가 없다면 가도록 해.」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `결국 ${you.name}은(는) 가볍게 한숨을 쉬며 양보했다.`,
      );
      era.println();
      era.print([flash.get_colored_name(), '는 ', s_weak, ' 상태가 되었다!']);
    };
    f.title = title;
    return f;
  })(),
  before_sats_sho: (() => {
    const title = '해야 할 일 · 첫 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     * @param {boolean} win_keis_hai エイシンフラッシュが京成杯に勝ったか
     */
    const f = async (flash, you, callname, win_keis_hai) => {
      await era.printAndWait(
        '클래식 삼관의 첫 관문인 사츠키상이 드디어 다가왔다.',
      );
      await you.say_as_passer_by_and_wait(
        '행인A',
        '이번 레이스, 누구 응원할 거야?',
      );
      await you.say_as_passer_by_and_wait(
        `행인B`,
        `음, 원래는 에이신 플래시를 응원하려고 했어. 케이세이배 때 ${flash.sex}의 활약이 정말 눈부셨거든.`,
      );
      await you.say_as_passer_by_and_wait(
        `행인A`,
        `에이신 플래시? 며칠 전에 꽤 심하게 앓았다던데. 나았다지만 이런 상태로 출주해서 제대로 달릴 수 있을까?`,
      );
      await you.say_as_passer_by_and_wait(
        '행인B',
        '맞아, 바로 그 점이 걱정이야. 사츠키상은 G1급 중상 레이스라 압박감도 상대의 수준도 지난번 케이세이배와는 비교도 안 되잖아.',
      );
      await you.say_as_passer_by_and_wait(
        `행인A`,
        `응, 사츠키상의 경쟁은 너무 치열해서 가장 빠른 ${flash.uma_sex_title}만이 승리할 수 있다고 하니까.`,
      );
      await you.say_as_passer_by_and_wait(
        '행인B',
        '그래. 게다가 병의 영향도 있을 텐데, 지금의 에이신 플래시가 정말 자기 실력을 다 발휘할 수 있을지 의문이야.',
      );
      era.drawLine();
      if (win_keis_hai) {
        await era.printAndWait(
          `사회자 「다음 선수를 환영해 주십시오! 바로 올해 케이세이배의 우승자, 이번 레이스 인기 3위— 에이신 플래시!!」`,
        );
      } else {
        await era.printAndWait(
          `사회자 「다음 선수를 환영해 주십시오! 올해 케이세이배에서 눈부신 활약을 보여준, 이번 레이스 인기 3위— 에이신 플래시!!」`,
        );
      }
      await flash.say_and_wait('………');
      await flash.say_and_wait('후우……');
      era.printButton('「플래시?」', 1);
      await era.input();
      await era.printAndWait('사츠키상 당일, 대기실.');
      await era.printAndWait(
        `방송에도 반응하지 않고 고개를 숙여 생각에 잠긴 에이신 플래시를 보고 ${you.name}은(는) 의아한 듯 말을 걸었다.`,
      );
      await flash.say_and_wait('아. 걱정 마세요, 괜찮아요.');
      await era.printAndWait('에이신 플래시는 자리에서 일어나 고개를 저었다.');
      await flash.say_and_wait(
        '그저 조금 감회가 새로워서요. 케이세이배에서 나름 잘 달렸다고 생각했는데, 사츠키상 인기는 그때의 활약이 전혀 반영되지 않은 느낌이라.',
      );
      era.printButton('「며칠 전 앓았던 병의 영향 때문이겠지.」', 1);
      await era.input();
      await era.printAndWait(
        `이런 반응이 나오는 이유를 ${you.name}은(는) 이미 잘 알고 있었다.`,
      );
      await era.printAndWait(
        '지난주, 에이신 플래시는 비를 맞고 감기에 걸려 고열에 시달렸다.',
      );
      await era.printAndWait(
        `며칠간의 휴식 끝에 ${flash.sex}의 몸 상태는 순조롭게 회복되었고 간신히 출주할 수 있게 되었다.`,
      );
      await era.printAndWait(
        '그럼에도 불구하고 병으로 인한 무력감은 여전히 남아 있는 듯했다.',
      );
      await era.printAndWait(
        '이런 상황에서 에이신 플래시의 사츠키상 활약을 기대하는 사람이 줄어든 것은 이해할 만한 일이었다.',
      );
      era.printButton('「어쨌든, 네 페이스를 유지하면 돼.」', 1);
      await era.input();
      await era.printAndWait(
        `눈앞의 소녀가 동요할까 걱정된 ${you.name}은(는) 그렇게 말했다.`,
      );
      await flash.say_and_wait(
        '……네. 클래식 삼관에 도전하는 것은 제가 반드시 실행해야 하는 계획이에요.',
      );
      await era.printAndWait(
        `${you.name}의 말에 에이신 플래시는 잠시 침묵했다. 이윽고 ${flash.sex}는 천천히 주먹을 쥐었다.`,
      );
      await flash.say_and_wait(
        '타인의 지지가 있든 없든, 전 끝까지 밀고 나갈 거예요.',
      );
      era.printButton('「……해야 할 일을 하고, 낼 수 있는 힘을 다해.」', 1);
      await era.input();
      await era.printAndWait(
        `레이스에 과도하게 몰입하는 에이신 플래시의 태도에 ${you.name}은(는) 살짝 미간을 찌푸렸지만, 지금의 ${flash.sex}에게 이것이 나쁜 것만은 아니었다.`,
      );
      await flash.say_and_wait(`네! 그럼 준비하고 다녀올게요, ${callname}.`);
      era.printButton('「조심해서 다녀와.」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) ${flash.sex}에게 가볍게 손을 흔들어주며 무사히 돌아오길 빌어주었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  sats_sho_end: (() => {
    const title = '해야 할 일 · 두 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        '도중에 우여곡절은 있었지만 클래식 삼관 중 하나인 사츠키상은 이렇게 막을 내렸다.',
      );
      await flash.say_and_wait(`다녀왔습니다, ${callname}.`);
      await era.printAndWait(
        `에이신 플래시가 무사히 경기장에서 돌아오는 모습을 보고, ${you.name}은(는) 안도의 한숨을 내쉬었다.`,
      );
      era.printButton('「수고했어.」', 1);
      await era.input();
      await flash.say_and_wait(
        '네, 대체로 계획했던 대로 달릴 수 있었습니다.',
      );
      era.printButton('「멋진 레이스였어.」', 1);
      await era.input();
      await era.printAndWait(
        `이제 막 회복한 몸으로도 ${flash.sex}는 이번 레이스에서 훌륭한 실력을 보여 주었다. 의심의 여지 없이 뛰어난 활약이었다.`,
      );
      await flash.say_and_wait('후훗~');
      await era.printAndWait(
        `${you.name}의 칭찬을 듣고, 에이신 플래시는 가볍게 웃었다. 지금 ${flash.sex}의 눈동자에는 열정이라는 이름의 빛이 일렁이고 있었다.`,
      );
      await flash.say_and_wait('다음 레이스는 일본 더비군요.');
      await flash.say_and_wait(
        '지금의 컨디션을 반드시 유지해야 합니다. 한층 더 높은 강도의 훈련도 일정에 추가해야겠어요.',
      );
      await flash.say_and_wait(
        '또한 레이스에 필요한 전략과 참가자들의 관련 자료도 미리 준비해야 합니다.',
      );
      await flash.say_and_wait('그리고……');
      era.printButton('「……」', 1);
      await era.input();
      await era.printAndWait(
        `일본 더비까지의 일정을 세세하게 계획하기 시작한 에이신 플래시를 ${you.name}은(는) 지켜보았다.`,
      );
      era.printButton(
        '「어쨌든 일본 더비도 중요하지만, 레이스 준비 외에도 충분히 쉴 시간도 갖도록 해.」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `훈련과 휴식의 균형이 중요하다는 것을 잘 아는 ${you.name}이(가) 조언을 건넸다.`,
      );
      era.drawLine();
      await flash.say_and_wait('일본 더비…… 에이신 플래시…… 평가……');
      await era.printAndWait(
        `트레센 학원으로 돌아가는 열차 안에서, ${you.name}은(는) 무심코 에이신 플래시가 스마트폰 검색창에 위의 세 단어를 입력하는 것을 보게 되었다.`,
      );
      era.printButton(
        '「사람들이 너에 대해 어떻게 생각하는지 검색하는 거야?」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `잠시 생각한 끝에, ${you.name}은(는) 에이신 플래시가 왜 그러는지 이해했다.`,
      );
      await flash.say_and_wait(
        '네, 사츠키상 레이스를 치른 뒤에 사람들이 저를 보는 시선이 어떻게 변했을지 무척 궁금했거든요.',
      );
      await era.printAndWait(
        '말을 하며 에이신 플래시는 열띤 토론이 벌어지는 게시판을 열었다. 눈에 띄는 댓글은 다음과 같았다——',
      );
      await you.say_as_passer_by_and_wait(
        '네티즌 A',
        '사츠키상 활약은 정말 의외네. 몸이 갓 나은 상태였을 텐데.',
      );
      await you.say_as_passer_by_and_wait(
        `네티즌 B`,
        `이러니 ${flash.sex}가 일본 더비에서 어떤 활약을 할지 기대되는걸.`,
      );
      await you.say_as_passer_by_and_wait(
        `네티즌 C`,
        `사츠키상에 비해 일본 더비는 난이도가 한층 더 높을 텐데, ${flash.sex}가 그때는 어떤 성적을 낼지 모르겠네.`,
      );
      era.printButton('「다들 너에게 큰 기대를 걸고 있는 모양이네.」', 1);
      await era.input();
      await era.printAndWait(`${you.name}이(가) 미소 지으며 말했다.`);
      await flash.say_and_wait(
        `음…… 하지만 저뿐만 아니라 다른 참가자들에게도, 게시판 사람들은 ${flash.couple_title}들을 응원하는 다양한 이유를 가지고 있네요.`,
      );
      await flash.say_and_wait(
        '이해할 수 있어요. 결국 일본 더비는 누구에게나 특별한 레이스니까요.',
      );
      await flash.say_and_wait('그러니……');
      await era.printAndWait(
        `거기까지 말한 에이신 플래시는 갑자기 깊게 숨을 들이켰고, ${flash.sex}의 눈빛은 순식간에 단호해졌다.`,
      );
      await flash.say_and_wait('더욱 노력해야만 합니다.');
      era.printButton('「플래시……」', 1);
      await era.input();
      await flash.say_and_wait(
        '일본 더비의 우승, 반드시—— 제가 차지하겠습니다!',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_16: (() => {
    const title = '경험담 · 첫 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} s_weak エイシンフラッシュ専用状態 [虚弱]
     */
    const f = async (flash, you, s_weak) => {
      await era.printAndWait('일본 더비는 클래식 삼관의 두 번째 관문이다.');
      await era.printAndWait(
        '이미 지나간 사츠키상과 비교하면 2400m를 달려야 하는 이 레이스는 분명 훨씬 더 힘겹다.',
      );
      await era.printAndWait(
        '그렇기에 에이신 플래시의 말대로 우승을 차지하기 위해서는 두 배로 노력해야 했다.',
      );
      await era.printAndWait('…………하지만…………');
      era.printButton(
        '「미안하지만, 네 트레이닝 계획에는 동의할 수 없어.」',
        1,
      );
      await era.input();
      await flash.say_and_wait('엣, 왜인가요?');
      await era.printAndWait(
        `사츠키상이 끝난 지 사흘째 되는 날, 에이신 플래시는 수정된 계획표를 ${you.name}에게 건넸다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 자세히 읽어본 뒤, 빽빽하게 적힌 글자들 사이에서 『고강도』라는 세 글자를 발견했다.`,
      );
      era.printButton(
        '「일본 더비가 너에게 얼마나 중요한지는 알지만, 그렇다고 무리할 이유는 안 돼.」',
        1,
      );
      await era.input();
      await era.printAndWait(`${you.name}은(는) 짧게 자신의 의견을 말했다.`);
      await era.printAndWait(
        '그러나 에이신 플래시는 그 말을 듣고 고개를 저었다.',
      );
      await flash.say_and_wait(
        '아뇨, 오해하셨어요. 이건 무리가 아니라 양이 질의 변화를 끌어낸다는 이론을 바탕으로 도출된 결과입니다.',
      );
      era.printButton('「양이 질을 변화시킨다고?」', 1);
      await era.input();
      await flash.say_and_wait('네.');
      await era.printAndWait(
        `에이신 플래시는 손가락 하나를 펴며 ${you.name}에게 설명했다.`,
      );
      await flash.say_and_wait(
        '오늘부터 일본 더비 개막까지 삼십구 일이 남았어요.',
      );
      await flash.say_and_wait(
        '정상적인 상황이라면 한 달 반도 채 되지 않는 이 기간 안에 실력을 끌어올려 레이스에서 더 좋은 성과를 내는 것은 거의 불가능하죠.',
      );
      await flash.say_and_wait(
        '그래서 고민 끝에 저는 극단적인 해결책을 떠올렸습니다. 즉 단기간에 훈련량을 대폭 늘려 성장에 필요한 시간을 압축하는 것이죠.',
      );
      await flash.say_and_wait(
        `이를 위해 특별히 고강도 훈련으로 유명한 미호노 부르봉 씨에게 조언을 구했고, ${flash.sex}의 제안에 따라 지금 당신이 보시는 이 훈련 계획을 세웠습니다.`,
      );
      era.printButton(
        '「……말하자면 신체의 잠재력을 최대한 쥐어짜는 식의 훈련 방식이라는 거네?」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `에이신 플래시의 말에 ${you.name}은(는) 생각에 잠겼다.`,
      );
      await era.printAndWait(
        `분명 ${
          flash.sex
        }가 말한 이 훈련 방법은 ${you.name}도 들어본 적이 있었다. 그리고 확실히 일부 ${flash.uma_sex_title}들에게 기적 같은 효과를 불러온 적도 있었다.`,
      );
      await era.printAndWait(
        `하지만 사람마다 체질이 다르기에, ${you.name}은(는) 이 방식이 에이신 플래시에게도 똑같이 통할지는 알 수 없었다.`,
      );
      await era.printAndWait(
        `${flash.sex}가 부상을 입을 위험이 크다는 점을 감수해야만 한다.`,
      );
      await era.printAndWait(
        `트레이너로서 ${you.name}은(는) 도저히 그것을 받아들일 수 없었다.`,
      );
      era.printButton('「차라리 다른 방법을 찾아보는 게 어때?」', 1);
      await era.input();
      await era.printAndWait(
        `그리하여 ${you.name}은(는) 완곡하게 자신의 뜻을 전했다.`,
      );
      await flash.say_and_wait(
        '하지만 이것 말고는 준비 기간 안에 제 능력을 더 효율적으로 끌어올릴 방법이 없는걸요!',
      );
      await era.printAndWait(
        `${you.name}이(가) ${flash.sex}의 제안을 받아들이지 않자 에이신 플래시의 목소리에 드물게 초조함이 섞였다.`,
      );
      await flash.say_and_wait(
        '제발 믿어주세요. 미호노 부르봉 씨와 함께 심사숙고해서 내린 결론입니다. 훈련 중의 위험이나 도중에 마주할 수 있는 상황까지 모두 고려했다고요.',
      );
      await flash.say_and_wait(
        '제 꿈을 위해, 부모님의 자랑이 되기 위해 저는 반드시 일본 더비에서 이겨야만 합니다. 이 영광을 차지해야만 해요.',
      );
      await flash.say_and_wait('그러니──');
      era.printButton(
        '「하지만 난 그 과정에서 네 몸이 상하는 게 더 걱정돼.」',
        1,
      );
      await era.input();
      await flash.say_and_wait('！');
      era.printButton(
        '「그리고 네 부모님께서도 네가 이런 방식으로 자신을 증명하는 걸 원하시지는 않을 거야.」',
        1,
      );
      await era.input();
      await flash.say_and_wait('………');
      await era.printAndWait(
        `뜻밖에도 에이신 플래시는 ${you.name}의 말을 듣고 크게 놀라며 동요했다.`,
      );
      await flash.say_and_wait('…………');
      await flash.say_and_wait('…………');
      await flash.say_and_wait('…………그렇군요…………');
      await era.printAndWait(`${flash.sex}는 침묵에 빠졌다.`);
      await era.printAndWait(
        `${you.name}은(는) 에이신 플래시가 무슨 생각을 하고 있는지 알 수 없었다. 하지만 지금 ${flash.sex}가 ${you.name}을(를) 바라보는 푸른 눈에 ${you.name}이(가) 이해할 수 없는 매우 복잡한 감정이 소용돌이치고 있다는 것만은 확실했다.`,
      );
      await flash.say_and_wait('…………알겠습니다.');
      await era.printAndWait(
        '팽팽했던 분위기가 점차 누그러졌다. 몇 초 후 에이신 플래시는 시선을 돌렸다.',
      );
      await flash.say_and_wait(
        '제가 생각이 짧았던 모양이네요. 정말 죄송합니다.',
      );
      await era.printAndWait(
        `이어서 ${flash.sex}는 ${you.name}에게 깊이 고개를 숙였다. 몸을 일으켰을 때, 두 사람이 다투게 된 원인이었던 계획표는 다시 ${flash.sex}의 손에 돌아와 있었다.`,
      );
      await flash.say_and_wait('돌아가서 다시 한번 잘 생각해 보도록 할게요.');
      if (era.get('status:37:虚弱') > 0) {
        await era.printAndWait(
          `사츠키상 전의 그 다툼과는 달리, 이번에는 ${flash.sex}가 먼저 양보했다.`,
        );
        era.println();
        era.print([
          flash.get_colored_name(),
          '가 더 이상 ',
          s_weak,
          ' 상태가 아니게 되었다!',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_47_17: (() => {
    const title = '경험담 · 두 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} luna シンボリルドルフ
     * @param {CharaTalk} mr_cb ミスターシービー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname_17 シンボリルドルフのプレイヤーへの呼び方
     * @param {PrintedSpan} callname_57 ミスターシービーのプレイヤーへの呼び方
     */
    const f = async (flash, luna, mr_cb, you, callname_17, callname_57) => {
      await luna.say_and_wait([
        '즉, 그것이 나를 찾아온 이유인가, ',
        callname_17,
        '.',
      ]);
      await era.printAndWait(
        `에이신 플래시가 고강도 훈련 계획을 포기하도록 설득하는 데에는 성공했다. 하지만 동시에 ${you.name}은(는) 일본 더비가 ${flash.sex}에게 얼마나 중요한지 잘 알고 있었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 자신만의 방식으로 ${flash.sex}를 돕기로 했다. 그리하여 심사숙고 끝에 ${you.name}은(는) 이곳을 찾아왔다.`,
      );
      era.printButton(
        '「맞아. 네가 에이신 플래시와 모의 레이스를 해줬으면 좋겠어.」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `트레센 학원 학생회실 안, 『황제』 ${luna.name}는 평온한 기색으로 ${you.name}을(를) 바라보았다.`,
      );
      await luna.say_and_wait(
        `정말 뜻밖의 요청이네. 나와 함께 달리고 싶어 하는 ${flash.uma_sex_title}들은 많지만, 내가 달려주기를 바라는 트레이너는 정말 드무니.`,
      );
      era.printButton(`「${flash.sex}에게는 네 힘이 필요해.」`, 1);
      await era.input();
      await luna.say_and_wait('호오?');
      await era.printAndWait(
        `${you.name}이(가) 그렇게 말하자 ${luna.name}의 얼굴에 흥미롭다는 표정이 떠올랐다.`,
      );
      await luna.say_and_wait(
        '그건 어떤 의미지? 내가 알기로 에이신 플래시는 올해 일본 더비를 준비하고 있다고 알고 있다만.',
      );
      era.printButton('「구체적으로 말하자면……」', 1);
      await era.input();
      await era.printAndWait(
        '일본 더비에서 이기기 위해서는 자신의 능력을 끌어올리는 것 외에도 한 가지 길이 더 있었다.',
      );
      await era.printAndWait(
        `바로 강자와 맞붙어 ${flash.couple_title}들이 가진 힘을 직접 체감하고, 그 경험을 바탕으로 실전 레이스에서 우위를 점하는 것이었다.`,
      );
      await era.printAndWait(
        `구체적으로는 에이신 플래시가 평소 강도로 트레이닝을 계속하는 동안, 적절한 상대를 찾아 ${flash.sex}와 모의 레이스를 하게 하는 것이다.`,
      );
      await luna.say_and_wait('하하하하.');
      await era.printAndWait(
        `${you.name}의 생각을 다 들은 ${luna.name}는 크게 웃음을 터뜨렸다.`,
      );
      await luna.say_and_wait('과연, 재미있는 생각이군.');
      await luna.say_and_wait(
        '이 『무패 삼관』에게서 일본 더비의 경험을 얻겠다는 건가. 대담한 시도로군.',
      );
      era.printButton(`「${flash.sex}에게 필요하기 때문이야.」`, 1);
      await era.input();
      await luna.say_and_wait('음………………');
      await era.printAndWait(
        `${luna.name}는 작게 신음했고, ${flash.sex}의 손가락이 책상을 가볍게 두드렸다. 무언가 생각하는 듯했다.`,
      );
      await luna.say_and_wait('좋다.');
      await era.printAndWait(
        `잠시 후 다시 입을 연 ${flash.sex}는 납득했다는 미소를 지었다.`,
      );
      await luna.say_and_wait([
        callname_17,
        ', 담당 ',
        flash.uma_sex_title,
        '에 대한 자네의 마음은 충분히 알겠네. 그러니 나도 한 가지 제안을 하지.',
      ]);
      era.printButton('「제안?」', 1);
      await era.input();
      await luna.say_and_wait(
        `내가 상대하는 것도 불가능하지는 않네. 하지만 나보다는 에이신 플래시, ${flash.sex}에게 더 선명한 색을 지닌 상대가 필요할지도 모르겠군.`,
      );
      await luna.say_and_wait('한 줄기…… 자유로운 바람 말이야.');
      era.drawLine();
      await era.printAndWait([
        '그 뒤 ',
        you.name,
        '은(는) ',
        luna.get_colored_name(),
        '의 지시에 따라 중상 레이스가 막 끝난 경기장으로 향했다.',
      ]);
      await era.printAndWait(`그때 ${you.name}은(는)……`);
      await mr_cb.say_as_unknown_and_wait(
        '하아~ 오늘 레이스는 정말 최고였어. 이렇게 자유로운 분위기라니, 내 마음을 억누르기가 힘들 정도야.',
      );
      era.printButton('「너는……」', 1);
      await era.input();
      await mr_cb.say_as_unknown_and_wait(
        '발걸음, 호흡, 응원…… 내가 느끼고 싶어 했던 모든 것들이 이곳에 모여 있어.',
      );
      await mr_cb.say_as_unknown_and_wait([
        '당신은? 무슨 일로 왔어, ',
        callname_57,
        '.',
      ]);
      await era.printAndWait(
        `그렇게 말하며 늘씬한 몸에서 잔디처럼 산뜻한 분위기를 풍기는 ${flash.uma_sex_title}가 뒤를 돌아 ${you.name}에게 생긋 미소 지었다.`,
      );
      era.printButton('「……미스터 시비.」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} 앞에 서 있는 것은 매혹적인 달리기로 삼관의 이름을 얻은 ${flash.uma_sex_title}──미스터 시비였다.`,
      );
      await mr_cb.say_and_wait('뭐, 자세한 사정은 이미 전해 들었어.');
      await mr_cb.say_and_wait(
        `요컨대, 이제 곧 더비에 출주할 ${flash.uma_sex_title}와 함께 달려달라는 거지?`,
      );
      era.printButton('「응.」', 1);
      await era.input();
      await mr_cb.say_and_wait('하하, 좋아.');
      await era.printAndWait('미스터 시비는 아주 시원스럽게 고개를 끄덕였다.');
      era.printButton('「……좀 더 고민해 보지 않아도 괜찮겠어?」', 1);
      await era.input();
      await mr_cb.say_and_wait('아니, 꽤 재미있을 것 같으니까.');
      await mr_cb.say_and_wait(
        '게다가 나에게 즐거움을 줄 수만 있다면 몇 번이라도 기꺼이 어울려 줄게.',
      );
      era.printButton('「정말 고마워!」', 1);
      await era.input();
      await era.printAndWait(
        `이렇게 에이신 플래시의 모의 레이스 상대가 정해졌다. 삼관의 ${flash.uma_sex_title}인 미스터 시비가 직접 나서기로 한 것이다.`,
      );
      await era.printAndWait('이제 시간만 정하면 되었다.');
    };
    f.title = title;
    return f;
  })(),
  ws_47_18: (() => {
    const title = '경험담 · 세 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} mr_cb ミスターシービー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (flash, mr_cb, you) => {
      await flash.say_and_wait(`삼관의 ${mr_cb.uma_sex_title}라니……`);
      await flash.say_and_wait(
        '아뇨, 두렵지 않아요. 당신 말대로 이건 흔치 않은 기회이고, 저는 반드시 이 기회를 잡아야만 합니다.',
      );
      await flash.say_and_wait(
        '게다가…… 저도 기대되는걸요. 더 강한 상대와의 대결이.',
      );
      era.drawLine({ content: '약속한 날' });
      await era.printAndWait(
        `${you.name}과(와) 에이신 플래시는 함께 트레센 학원의 운동장으로 향했다.`,
      );
      await mr_cb.say_and_wait('그럼 준비됐으면 시작해 볼까.');
      await flash.say_and_wait('네, 잘 부탁드립니다, 미스터 시비 씨.');
      await era.printAndWait(
        '미스터 시비는 이미 오래전부터 기다리고 있었던 모양이었다.',
      );
      await era.printAndWait(
        `그 모습을 보고 ${you.name}은(는) 격려하듯 에이신 플래시의 어깨를 두드려 주었다.`,
      );
      era.printButton(
        '(이 정도라면 가을 텐노상에서의 활약도 문제없겠어.)',
        1,
      );
      await era.input();
      await flash.say_and_wait('힘이라니…… 그게, 저기……');
      await mr_cb.say_and_wait(
        `후훗. 좋아. 삼관의 ${mr_cb.uma_sex_title}라는 명성에 전혀 기죽지 않았네.`,
      );
      await era.printAndWait(
        '전혀 물러서지 않고 침착하고 의연한 모습을 보이는 에이신 플래시를 보며 미스터 시비는 칭찬하듯 고개를 끄덕였다.',
      );
      await mr_cb.say_and_wait(
        '아주 즐거운 레이스가 될 것 같네. 나도 봐주지는 않을 거야.',
      );
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} mr_cb ミスターシービー
   * @param {CharaTalk} you プレイヤー
   * @param {number} rank エイシンフラッシュの模擬レース着順
   */
  async ws_47_18_end(flash, mr_cb, you, rank) {
    await era.printAndWait([
      mr_cb.get_colored_name(),
      '는 ',
      flash.uma_sex_title,
      '라는 분야에서 이름 높은 선배다. 실력이든 경험이든 삼관의 왕인 ',
      flash.sex,
      '는 의심할 여지 없이 ',
      flash.get_colored_name(),
      '를 압도하고 있었다.',
    ]);
    if (rank === 1) {
      await era.printAndWait(
        '그럼에도 불구하고 레이스의 승리는 결코 그런 겉으로 드러난 요소만으로 결정되는 것이 아니었다.',
      );
      await flash.say_and_wait('후우…… 제가…… 이겼나요?');
      era.printButton('「멋지게 해냈어!」', 1);
      await era.input();
      await era.printAndWait([
        '레이스 도중 ',
        flash.get_colored_name(),
        '는 매우 강렬한 승부욕을 보여주었다. 도중에 ',
        mr_cb.get_colored_name(),
        '에게 따라잡히고 몇 번이고 추월당했음에도, ',
        flash.sex,
        '는 굴하지 않고 다시 공세를 이어 갔다. 결국 그 끈질긴 정신력이 가망 없어 보였던 결과를 뒤집고 승리를 거머쥐게 한 것이다.',
      ]);
      await mr_cb.say_and_wait('하하하하, 정말 재미있었어.');
      await era.printAndWait([
        mr_cb.get_colored_name(),
        '는 크게 웃음을 터뜨렸다. 비록 패배했지만 ',
        mr_cb.sex,
        '는 이전보다 더욱 흥분한 기색이었다.',
      ]);
    } else {
      await era.printAndWait(
        `그렇기에 플래시의 패배는 처음부터 ${you.name}도 어느 정도 예상하고 있었다.`,
      );
      await flash.say_and_wait('후우…… 제가 졌네요.');
      era.printButton('「고생했어.」', 1);
      await era.input();
      await era.printAndWait([
        '하지만 레이스 도중 ',
        mr_cb.get_colored_name(),
        '에게 추월당한 뒤에도 ',
        flash.get_colored_name(),
        '가 보여준 그 끈질김, 최종 결과가 나올 때까지 포기하지 않고 승리를 되찾으려 했던 강인한 정신은 ',
        you.name,
        '을(를) 꽤 감동시켰다.',
      ]);
      await mr_cb.say_and_wait('하하하.');
      await era.printAndWait(
        `감동한 것은 ${you.name}뿐만이 아니었을지도 모른다.`,
      );
    }
    await mr_cb.say_and_wait('이기고 싶은 마음이 아주 강하네.');
    await mr_cb.say_and_wait(
      `나한테까지 전해졌어…… 역시 에이신 플래시, 넌 나를 정말 즐겁게 해주는구나.`,
    );
    await flash.say_and_wait('즐겁게…… 인가요.');
    await flash.say_and_wait(
      '…………어찌 됐든, 오늘 도와주셔서 정말 감사합니다, 미스터 시비 씨.',
    );
    await era.printAndWait(
      `에이신 플래시가 숨을 고른 뒤, ${flash.sex}는 눈앞의 미스터 시비에게 고개를 끄덕이며 감사의 뜻을 표했다.`,
    );
    await mr_cb.say_and_wait(
      `있잖아, 나한테 말해줄 수 있어? 왜 그렇게 승리를 갈구하는 거지?`,
    );
    await flash.say_and_wait('엣.');
    await era.printAndWait(
      `다음 순간 갑작스러운 질문이 ${flash.sex}를 살짝 놀라게 했다.`,
    );
    await flash.say_and_wait(
      '그건…… 승리를 목적으로 하지 않는 레이스는 아무런 의미가 없으니까요.',
    );
    await mr_cb.say_and_wait('그거 말고는?');
    await flash.say_and_wait('그거 말고는요?');
    await mr_cb.say_and_wait(
      `달리는 걸 좋아해? 너에게 달린다는 건 어떤 의미지?`,
    );
    await flash.say_and_wait('…………');
    await era.printAndWait(
      '미스터 시비의 질문에 에이신 플래시는 침묵에 빠졌다.',
    );
    await flash.say_and_wait(
      '…………죄송합니다. 저는 미스터 시비 씨의 질문이 어떤 의도인지 이해하지 못하겠어요.',
    );
    await era.printAndWait(`잠시 후, ${flash.sex}는 고개를 저으며 말했다.`);
    await flash.say_and_wait(
      '제게 있어 달리는 것은 달리는 것 그 자체일 뿐입니다. 목적을 달성하기 위한 수단이자 필요한 행위이죠.',
    );
    await flash.say_and_wait(
      '거기에 그 이상의 감정을 담을 필요는 없다고 생각해요. 제가 해야 할 일은 이기는 것, 계속해서 이겨 나가는 것뿐입니다. 모든 것이 끝나는 그날까지요.',
    );
    await mr_cb.say_and_wait(
      `그럼 일본 더비는? 더비 ${flash.uma_sex_title}가 되고 싶어 하면서, 정작 일본 더비에 대해서는 아무런 특별한 감정도 없는 거야?`,
    );
    await flash.say_and_wait('네.');
    await mr_cb.say_and_wait('그저 이기기 위해 이긴다라, 정말 지루하네.');
    await era.printAndWait('미스터 시비는 어깨를 으쓱했다.');
    await mr_cb.say_and_wait('그런 생각에 얽매여 있으면 전혀 자유롭지 못해.');
    await flash.say_and_wait('…………자유요?');
    await mr_cb.say_and_wait(
      '일본 더비에서 이기는 비결은, 이기는 것만 생각하지 않는 거야.',
    );
    await flash.say_and_wait('네?');
    await mr_cb.say_and_wait(
      '단순히 이기는 것보다 더 중요한 감정을 찾아내서, 그 감정을 자신의 동력으로 삼아야 해.',
    );
    await mr_cb.say_and_wait(
      '달리고, 또 달리는 거야. 한계든, 라이벌이든, 운이든, 모든 것을 초월할 때까지.',
    );
    await flash.say_and_wait('………');
    await mr_cb.say_and_wait('내 말이 무슨 뜻인지 알겠어?');
    await flash.say_and_wait('…………저는…………');
    await mr_cb.say_and_wait('뭐, 이해 못 해도 괜찮아.');
    await era.printAndWait(
      '에이신 플래시가 미간을 찌푸리며 깊은 생각에 잠긴 모습을 보자 미스터 시비는 살짝 미소 지었다.',
    );
    await mr_cb.say_and_wait(
      `잘 생각해 보렴, 이제부터는 네 몫이니까. 일생에 단 한 번뿐인 일본 더비에서 무엇을 깨닫게 될까.`,
    );
    await mr_cb.say_and_wait(
      '아, 그래도 나중에 또 상대를 해달라고 하면 언제든 환영이야.',
    );
    await mr_cb.say_and_wait(
      '처음에 말했듯이, 나를 즐겁게 해줄 수 있는 일이라면 몇 번이라도 상관없거든.',
    );
    era.printButton('「정말 고마워, 미스터 시비.」', 1);
    await era.input();
    era.drawLine();
    await flash.say_and_wait('오늘 일은 정말 감사했습니다.');
    await era.printAndWait(
      `미스터 시비와 헤어진 뒤, 에이신 플래시는 갑자기 뒤를 돌아 ${you.name}에게 고개를 숙였다.`,
    );
    era.printButton('「내가 당연히 해야 할 일을 한 것뿐이야.」', 1);
    await era.input();
    await flash.say_and_wait('그렇기에 더욱 감사를 표해야 한다고 생각해요.');
    await era.printAndWait(
      '에이신 플래시는 고개를 저으며 감회가 새로운 듯한 말투로 말했다.',
    );
    await flash.say_and_wait(
      '미스터 시비 씨와의 레이스를 통해 새로운 것들을 많이 접할 수 있었어요.',
    );
    await flash.say_and_wait(
      `……${flash.sex}가 마지막에 하신 말씀의 구체적인 의미는 아직 이해하지 못하겠지만요.`,
    );
    await flash.say_and_wait(
      '하지만 이미 깨달은 것들만으로도 한동안은 소화하고 배우기에 충분할 것 같습니다.',
    );
    await era.printAndWait(
      `말을 마친 뒤, ${flash.sex}는 손을 가슴에 얹고 ${you.name}에게 부드러운 미소를 지어 보였다.`,
    );
    await flash.say_and_wait(
      '당신의 도움이 없었다면 저 혼자서는 이런 훈련 방안을 떠올리지 못했을 거예요.',
    );
    era.printButton('「그게 내가 존재하는 이유니까.」', 1);
    await era.input();
    await flash.say_and_wait('！');
    await flash.say_and_wait(
      '……당신 말씀이 맞아요. 제 잘못을 지적하고 올바른 길로 이끌어 주시는 분.',
    );
    await flash.say_and_wait(
      '오늘은 당신과 미스터 시비 씨에게 많은 도움을 받았네요.',
    );
    await flash.say_and_wait('그러니까──');
    await era.printAndWait(
      `${you.name}은(는) 에이신 플래시가 갑자기 주먹을 불끈 쥐는 것을 보았다. ${flash.sex}의 눈빛에는 흔들림 없는 의지가 서려 있었다.`,
    );
    await flash.say_and_wait(
      '반드시 일본 더비에서 우승해서, 모두에게 보답해야겠어요.',
    );
  },
  before_toky_yus: (() => {
    const title = '해야 할 일 · 세 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        '클래식 삼관의 두 번째 관문인 일본 더비가 오늘 막을 올렸다.',
      );
      await flash.say_and_wait('그럼, 다녀오겠……');
      await era.printAndWait('「띠링.」');
      await flash.say_and_wait('어라.');
      await era.printAndWait(
        '대기실 안, 레이스 전 마지막 준비를 마치고 경기장으로 향하려던 에이신 플래시가 갑작스러운 핸드폰 알림음에 시선을 빼앗겼다.',
      );
      era.printButton('「무슨 일이야?」', 1);
      await era.input();
      await flash.say_and_wait('아, 별거 아니에요.');
      await era.printAndWait(
        `주머니에서 핸드폰을 꺼내 화면을 몇 초간 응시하던 ${flash.sex}의 얼굴에 기쁜 미소가 떠올랐다.`,
      );
      await flash.say_and_wait('어머니께서 보내신 메시지예요.');
      await flash.say_and_wait(
        `『내 ${
          flash.sex_code - 1 ? '딸' : '아들'
        }이 일본 더비에 출주하게 될 줄은 정말 꿈에도 몰랐구나.』`,
      );
      await flash.say_and_wait(
        '『부디 네가 만족할 수 있는 결과를 남기길 바란다. 아빠랑 여기서 응원하고 있을게.』',
      );
      era.printButton('「부모님의 축복이네.」', 1);
      await era.input();
      await flash.say_and_wait('기대해 주고 계시네요.');
      await era.printAndWait('말을 마친 에이신 플래시는 핸드폰을 집어넣었다.');
      await flash.say_and_wait('………');
      await era.printAndWait(
        `머나먼 타국에서 전해진 부모님의 마음을 받은 ${flash.sex}에게서 묘한 변화가 느껴졌다.`,
      );
      await flash.say_and_wait(
        '단순히 이기는 것보다 더 중요한 감정을 찾는 것…… 인가요?',
      );
      era.printButton('「……플래시?」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) ${flash.sex}의 중얼거림을 듣고 무슨 일이 있는지 물으려 했다.`,
      );
      await flash.say_and_wait('후우……');
      await flash.say_and_wait(`${callname}！`);
      era.printButton('「응.」', 1);
      await era.input();
      await era.printAndWait(
        `마주친 것은 ${flash.sex}의 확신에 찬 눈빛이었다.`,
      );
      await flash.say_and_wait('제가 이 레이스에서 이길 수 있을까요?');
      era.printButton('「난 항상 그렇게 믿고 있어.」', 1);
      await era.input();
      await flash.say_and_wait('네!');
      await era.printAndWait(
        `${you.name}의 말에 에이신 플래시는 고개를 끄덕였고, 자신감 넘치는 미소가 ${flash.sex}의 얼굴에 번졌다.`,
      );
      await flash.say_and_wait('그럼, 다녀올게요.');
    };
    f.title = title;
    return f;
  })(),
  toky_yus_win: (() => {
    const title = '해야 할 일 · 네 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await you.say_as_passer_by_and_wait('관중', '오오오오오——!!!');
      await you.say_as_passer_by_and_wait('사회자', '에이신 플래시—— 골인!!!');
      await you.say_as_passer_by_and_wait(
        '사회자',
        '정말 놀라운 결과입니다, 이번 일본 더비의 우승자는—— 에이신 플래시!!!',
      );
      await you.say_as_passer_by_and_wait(
        `사회자`,
        `${flash.sex}를 축하해 주십시오!`,
      );
      await flash.say_and_wait('허억…… 허억……');
      await flash.say_and_wait('내가…… 이겼어?');
      await you.say_as_passer_by_and_wait(
        `팬 A`,
        `축하해, 에이신 플래시! 널 응원하길 정말 잘했어!`,
      );
      await flash.say_and_wait('！');
      await you.say_as_passer_by_and_wait(
        `팬 B`,
        `더비 ${flash.uma_sex_title} 에이신 플래시! 오늘의 모습, 꼭 기억할게.`,
      );
      await flash.say_and_wait('여러분……');
      era.printButton('「축하해, 플래시.」', 1);
      await era.input();
      await flash.say_and_wait(
        `${callname}…… 네! 제가 일본 더비에서 이겼어요!`,
      );
      era.printButton('「정말 대단한 성취야.」', 1);
      await era.input();
      await flash.say_and_wait(
        '부모님의 기대도, 당신의 기대도 저버리지 않았어요. 해냈습니다!',
      );
      await era.printAndWait(
        `에이신 플래시의 얼굴에 찬란한 미소가 피어올랐다. 지금 ${flash.sex}는 승리가 가져다준 기쁨에 완전히 젖어 있는 듯 보였다.`,
      );
      await era.printAndWait('「띠링.」');
      await era.printAndWait(
        `그리고 절묘한 타이밍에 스마트폰 알림음이 ${flash.sex}의 귀에 들려왔다.`,
      );
      await flash.say_and_wait('새 메시지?');
      await era.printAndWait(
        '에이신 플래시가 스마트폰을 확인하자, 화면에는——',
      );
      await you.say_as_passer_by_and_wait(
        `플래시의 어머니`,
        `일등 축하해, 플래시. 일본 더비에서의 달리기는 정말 super, toll, klasse였어.`,
      );
      await flash.say_and_wait('！');
      await you.say_as_passer_by_and_wait(
        `플래시의 어머니`,
        `우승 소식을 듣고 네 아빠는 기뻐서 케이크 가게 안을 이리저리 뛰어다니셨단다.`,
      );
      await flash.say_and_wait('아버지가 세상에…… 후훗~');
      await you.say_as_passer_by_and_wait(
        `플래시의 어머니`,
        `솔직히 널 품에 안고 실컷 칭찬해 주고 싶구나. 이번 우승은 결코 쉽지 않았을 텐데, 네가 지난 몇 년간 쏟은 노력의 결실이자 성장의 증거란다.`,
      );
      await you.say_as_passer_by_and_wait(
        `플래시의 어머니`,
        `승리에서 오는 이 기쁨이 앞으로도 늘 네 곁에 머물기를 바란다.`,
      );
      await flash.say_and_wait('어머니……');
      era.printButton('「부모님도 무척 기뻐하고 계신 모양이네.」', 1);
      await era.input();
      await flash.say_and_wait('……네!');
      await era.printAndWait('기쁨을 전하는 메시지는 여기서 끝났다.');
      await era.printAndWait(
        '부모님의 축복을 받은 에이신 플래시는 지금 그 어느 때보다 의욕이 넘쳐 보였다.',
      );
      await flash.say_and_wait(
        '일본 더비에서 이겼다는 사실이 주는 기쁨은 취할 정도로 달콤하지만, 객관적으로 볼 때 이것도 생애의 한 단계일 뿐입니다.',
      );
      await flash.say_and_wait(
        `그러니 지체하지 말고 바로 다음 계획을 논의하러 가죠, ${callname}!`,
      );
      await flash.say_and_wait('함께——— 국화상을 향해, 전진입니다.');
    };
    f.title = title;
    return f;
  })(),
  ws_47_21: (() => {
    const title = '양자택일 · 첫 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     * @param {boolean} win_toky_yus エイシンフラッシュが日本ダービーに勝ったか
     * @param {PrintedSpan} s_distracted エイシンフラッシュ専用状態 [分心]
     */
    const f = async (flash, you, callname, win_toky_yus, s_distracted) => {
      await flash.say_and_wait('………');
      await flash.say_and_wait('………');
      era.printButton('「플래시……」', 1);
      await era.input();
      await flash.say_and_wait(
        `…………죄송해요, ${callname}. 하지만 저는 역시 받아들일 수 없습니다.`,
      );
      await flash.say_and_wait(
        '국화상 출주 예정을 취소한다는 그 결정 말이에요.',
      );
      era.drawLine();
      if (win_toky_yus) {
        await era.printAndWait(
          '바로 지난주, 에이신 플래시는 일본 더비의 무대에서 놀라운 성적을 거두었다.',
        );
        await era.printAndWait(
          `깊은 기쁨을 느끼는 동시에, ${flash.sex}는 국화상 레이스에서도 일본 더비의 영광을 이어가 만인이 주목하는 챔피언이 되겠노라 다짐했다.`,
        );
        await era.printAndWait('하지만……');
      }
      await era.printAndWait(
        `만사가 언제나 순조로울 수는 없는 법이다. 부상은 ${flash.uma_sex_title}들이 피할 수 없는 문제였다.`,
      );
      await you.say_as_passer_by_and_wait(
        '의사',
        '통증의 원인은 다리 근육에 피로가 과하게 쌓였기 때문인 것으로 보입니다. 상태가 더 악화되는 것을 방지하기 위해 당분간은 충분히 쉬어 주세요.',
      );
      await era.printAndWait(
        '일은 일본 더비가 끝난 다음 날 트레이닝 도중, 에이신 플래시가 다리에 이상한 통증이 느껴진다고 말하면서 시작되었다.',
      );
      await era.printAndWait(
        `이를 걱정한 ${you.name}은(는) ${flash.sex}를 데리고 병원을 찾았고, 검사 결과 질환이 있다는 사실을 알게 되었다.`,
      );
      await flash.say_and_wait(
        '하지만 그렇다 해도 국화상 전까지 완치될 확률은 매우 높아요.',
      );
      await era.printAndWait(
        '하지만 에이신 플래시 본인은 이 상황을 받아들이고 싶지 않은 것이 분명해 보였다.',
      );
      await era.printAndWait(
        `${you.name}이(가) 『국화상에서 이기려면 고강도 트레이닝이 필요한데, 지금 그렇게 하면 몸 상태만 더 악화된다』고 설명했음에도.`,
      );
      await era.printAndWait(`${flash.sex}는 여전히 집요하게 참가를 고집했다.`);
      era.printButton('「……일단은 요즘 좀 쉬면서 마음을 편히 먹어 봐.」', 1);
      await era.input();
      await era.printAndWait(
        `결국 ${flash.sex}가 더 이상 근심하지 않고 안정을 취하게 하기 위해, ${you.name}은(는) 한 가지 약속을 하기로 했다.`,
      );
      era.printButton(
        '「만약 그때까지 완치된다면, 반드시 출주하게 해 줄게.」',
        1,
      );
      await era.input();
      await flash.say_and_wait('………');
      await flash.say_and_wait('…………알겠습니다…………');
      await era.printAndWait(
        `더 이상 논쟁해 보았자 의미가 없다는 것을 깨달은 것일까. ${you.name}의 말을 들은 에이신 플래시는 침울하게 고개를 끄덕였다.`,
      );
      await flash.say_and_wait(
        '그럼…… 일단은 국화상을 계획에서 제외하도록 하죠.',
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `불만스러운 기색이 역력한 ${flash.sex}를 보며, ${you.name}은(는) 앞으로 ${flash.sex}의 상태가 어떨지 매우 걱정되었다.`,
      );
      era.println();
      era.print([
        flash.get_colored_name(),
        '는 ',
        s_distracted,
        ' 상태가 되었다!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_23: (() => {
    const title = '양자택일 · 두 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (flash, you) => {
      await era.printAndWait(
        '국화상을 목표로 하지 않기로 결정한 지 일주일이 지났다.',
      );
      await era.printAndWait(
        `${you.name}의 예상대로, 이 기간 동안 에이신 플래시의 컨디션은 이전보다 훨씬 떨어졌다.`,
      );
      await flash.say_and_wait('……아.');
      era.printButton('「무슨 일이야?」', 1);
      await era.input();
      await era.printAndWait(
        '휴게실 안에서 앞으로 며칠간의 일정을 확인하기 위해 노트를 꺼내던 에이신 플래시가 갑자기 작은 탄식을 내뱉었다.',
      );
      await flash.say_and_wait('…………아뇨, 아무것도 아니에요.');
      await flash.say_and_wait(
        '단지 원래 계획대로라면 지금쯤 장거리 레이스 제패를 목적으로 한 트레이닝 단계에 들어갔어야 할 시기라서요.',
      );
      await flash.say_and_wait(
        '…………하지만………… 역시 조금 분하네요. 국화상이 바로 코앞이었는데.',
      );
      await era.printAndWait(
        `${you.name}은(는) 이 말을 하는 에이신 플래시의 목소리가 꽤 가라앉아 있음을 느꼈다.`,
      );
      era.printButton('「당분간은 조정된 계획에 따라 움직이자.」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) ${flash.sex}의 망설임을 이해할 수 있었지만, 지금은 회복에 가장 중요한 시기인 만큼 몸을 아끼는 것을 최우선으로 해야 했다.`,
      );
      await flash.say_and_wait('네……');
      await era.printAndWait(
        `……하지만 실망한 ${flash.sex}의 표정을 보며, ${you.name}도 이렇게 계속 고민만 하는 것이 해결책이 아님을 알고 있었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 에이신 플래시가 매우 고집스러운 아이라는 것을 잘 안다. 이는 대부분의 상황에서 장점이 되기도 하지만……`,
      );
      await era.printAndWait(
        `어떻게 해야 할지 모르는 상황에 부닥치면, 이런 기질은 오히려 ${flash.sex}를 막다른 골목으로 몰아넣기 쉬웠다.`,
      );
      await era.printAndWait(
        '그리고 여기서 벗어나기 위해서는 원래 궤도대로 걸어가거나, 즉 국화상에 참가하거나……',
      );
      await era.printAndWait(
        `아니면 이 궤도에서 벗어나, 즉…… ${flash.sex}가 국화상에 참가할 수 없다는 사실을 스스로 인정하게 해야 한다.`,
      );
      await flash.used_to_say_and_wait(
        '그것은 제 꿈을 이루기 위해 반드시 해야 하는 일이에요.',
      );
      await era.printAndWait(
        '(의사 「악화를 막기 위해 당분간 충분히 쉬어 주세요.」)',
      );
      await era.printAndWait('……솔직히 어느 쪽도 쉽지는 않다.');
      era.printButton('(어떻게 해야 할까.)', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 미간을 찌푸리며 생각에 잠겼다.`,
      );
      await era.printAndWait(
        `트레이너로서 ${flash.sex}가 꿈을 위해 흘린 땀과 집념을 ${you.name}보다 잘 아는 사람은 없다.`,
      );
      await era.printAndWait(
        `그렇기에 ${you.name}도 당연히 ${flash.sex}가 꿈을 이루고 돌아오기를 간절히 바라고 있었다.`,
      );
      await era.printAndWait(
        `하지만 역시 트레이너이기에, ${you.name}은(는) ${flash.sex}가 위험한 행동을 계속하도록 내버려 둘 수 없었다.`,
      );
      await era.printAndWait(
        '단기적인 목표보다는 무사히 완주하는 것이 훨씬 중요하다.',
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `두 가지 생각이 머릿속에서 쉴 새 없이 충돌하며 ${you.name}의 마음속에 걷히지 않는 안개를 만들어 냈다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 자신이 서둘러 돌파구를 찾아야 한다는 것을 깨달았다.`,
      );
      await era.printAndWait(
        `${you.name}의 망설임은 에이신 플래시의 상황을 더욱 고통스럽게 만들 뿐이었다.`,
      );
      await flash.used_to_say_and_wait(
        '……당신 말씀이 맞아요. 제 잘못을 지적하고 올바른 길로 이끌어 주시는 분.',
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `망설이던 찰나, ${you.name}은(는) 에이신 플래시가 미스터 시비와 대결한 뒤 ${you.name}에게 했던 말을 떠올렸다.`,
      );
      await era.printAndWait(
        `${flash.sex}는 믿고 있다. ${you.name}은(는) ${
          flash.sex
        }의 ${flash.uma_sex_title}로서의 길을 안내하는 사람이라고.`,
      );
      await era.printAndWait(
        `실제로 ${flash.sex}는 ${you.name}의 대부분의 지시를 아무런 이의 없이 수행해 왔다.`,
      );
      await era.printAndWait(
        `그렇다면 이번에는 ${you.name}의 차례다. ${flash.sex}를 믿고 있는가?`,
      );
      era.printButton('「………후우.」', 1);
      await era.input();
      await era.printAndWait(
        `거기까지 생각이 미치자, ${you.name}은(는) 주머니에 손을 넣어 훈장 하나를 꺼냈다.`,
      );
      await era.printAndWait('은도금이 된 겉면이 햇빛을 받아 반짝반짝 빛났다.');
      await flash.used_to_say_and_wait(
        '도와주셔서 감사해요. 부디 이것을 제 감사의 표시로 받아 주세요.',
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `처음 만났을 때의 추억이 마음속에 밀려들었고, ${you.name}은(는) 그것을 한참 동안 응시했다.`,
      );
      await era.printAndWait(
        `마침내 ${you.name}은(는) 몸을 돌려, 곁에서 계획표를 보며 고민에 빠져 있는 에이신 플래시를 바라보았다.`,
      );
      era.printButton('(이건 처음부터 고민할 거리도 아니었지.)', 1);
      await era.input();
      await era.printAndWait(
        `다음 순간, ${you.name}은(는) 훗 하고 웃으며 고개를 저었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 자신이 이미 답을 찾았다고 생각했다. 이제 남은 일은 좋은 기회를 기다리는 것뿐이었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '마음속 이야기 · 첫 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        '합숙은 트레센 학원이 주관하여 실력 향상을 목적으로 해변에서 진행하는 여름 행사다.',
      );
      await flash.say_and_wait(
        '이곳이 일본의 바다군요. 독일과는 역시 상당히 다르네요.',
      );
      await era.printAndWait(
        '월초, 학원 전용 버스에서 내린 에이신 플래시는 눈앞에 펼쳐진 푸른 바다에 감탄했다.',
      );
      era.printButton('「놀러 가고 싶어?」', 1);
      await era.input();
      await flash.say_and_wait('아, 아뇨. 괜찮습니다.');
      await era.printAndWait(
        `하지만 다음 순간, ${you.name}의 제안을 들은 ${flash.sex}는 고개를 저었다.`,
      );
      await flash.say_and_wait(
        '무척 마음이 끌리는 선택지이긴 합니다만, 지금은 훈련을 최우선으로 삼아야 합니다.',
      );
      await era.printAndWait(
        '말을 마치며, 에이신 플래시는 고개를 숙여 자신의 두 다리를 바라보았다.',
      );
      await flash.say_and_wait(
        '국화상의 개최가 코앞으로 다가왔습니다. 승리하기 위해서는 단 하나의 기회라도 놓쳐서는 안 돼요.',
      );
      await era.printAndWait(
        `그동안의 휴식 덕분에 ${flash.sex}의 병세는 처음보다 크게 완화되어 있었다.`,
      );
      await era.printAndWait(
        '덕분에 에이신 플래시의 기분도 꽤 밝아진 듯 보였다.',
      );
      await era.printAndWait(
        `이미 세워 둔 계획이 더 이상 어긋나지 않을 거라 믿는 ${flash.sex}는 다시 국화상을 목표로 준비하려 한다.`,
      );
      era.printButton('「그 부분에 대해서 말인데.」', 1);
      await era.input();
      await era.printAndWait(
        `${flash.sex}의 열정적인 모습을 보며, ${you.name}은(는) 이제 때가 되었다고 생각했다.`,
      );
      era.printButton('「네게 할 말이 있어.」', 1);
      await era.input();
      era.drawLine();
      await era.printAndWait(
        `사실 트레이너인 ${you.name}에게 에이신 플래시의 현재 상태는 조금 난처한 문제였다.`,
      );
      await era.printAndWait(
        `표면적으로 ${flash.sex}의 회복은 부정할 수 없는 사실이었고, ${you.name} 역시 ${flash.sex}가 경기장을 마음껏 달리는 모습을 보고 싶었다.`,
      );
      await flash.say_and_wait('국화상에 관한 이야기인가요?');
      era.printButton('「응.」', 1);
      await era.input();
      await era.printAndWait(
        `하지만 신중하게 생각하면, 근육 속에 뿌리 깊게 박힌 피로는 그렇게 쉽게 사라지는 것이 아니었다. ${you.name}은(는) 레이스를 준비하며 고강도 훈련을 이어가는 동안 통증이 재발하지 않으리라 보장할 수 없었다.`,
      );
      await flash.say_and_wait(
        '……당신은 그날 약속하셨죠. 국화상 전까지 회복한다면 출주를 허락해 주겠다고요.',
      );
      era.printButton('「그래.」', 1);
      await era.input();
      await era.printAndWait(
        `바꿔 말하면, ${you.name}의 입장에서는 국화상을 포기하고 목표를 그 이후의 재팬컵이나 아리마 기념으로 수정하여, 늘어난 공백기 동안 신체의 불안 요소를 완전히 해결하는 것이 최선이었다.`,
      );
      await flash.say_and_wait(
        '그렇다면 지금이야말로 우위를 점해야 할 때입니다.',
      );
      await era.printAndWait(
        `합숙소 내에서, ${you.name}이(가) 다음에 무슨 말을 할지 짐작한 듯 에이신 플래시의 태도는 매우 단호했다.`,
      );
      era.printButton('「내 말을 오해했나 본데, 널 말리러 온 게 아니야.」', 1);
      await era.input();
      await flash.say_and_wait('에?');
      await era.printAndWait(`하지만 이번에는 ${flash.sex}의 예상이 빗나갔다.`);
      era.printButton(
        '「인정해. 국화상에 출주할지 말지는 내게 양자택일의 문제야.」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `그 뒤, ${you.name}은(는) ${flash.sex}에게 자신의 괴로움을 이야기했다. 감성과 이성 사이에서 ${flash.sex}가 꿈을 이루기를 바라면서도 그 과정에서 ${flash.sex}가 다치는 것은 보고 싶지 않다는 모순을.`,
      );
      await flash.say_and_wait('………');
      await era.printAndWait(
        `에이신 플래시는 총명한 아이였기에, ${flash.sex}는 ${you.name}의 처지를 이해할 수 있다. ${you.name}이(가) ${flash.sex}를 이해하는 것처럼.`,
      );
      era.printButton(
        '「네 상태를 안 뒤로 계속 망설여 왔어. 하지만 어쩌면 이런 주저함이야말로 가장 큰 실수일지도 몰라.」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `그때 ${you.name}은(는) 손을 뻗어, 만남의 상징인 훈장을 ${flash.sex}의 눈앞에 내밀었다.`,
      );
      await flash.say_and_wait(`${callname}……`);
      await era.printAndWait(
        `에이신 플래시는 훈장을 한 번 내려다보고는, 다시 고개를 들어 ${you.name}을(를) 바라보았다.`,
      );
      await flash.say_and_wait('………');
      await era.printAndWait(
        `${flash.sex}는 입을 달싹이며 말을 망설이는 듯했다.`,
      );
      era.printButton(
        '「만약 내가 결정할 수 없다면, 차라리 네가 결정해 줬으면 해.」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) ${flash.sex}의 어깨를 다독이며 미소를 지었다.`,
      );
      await era.printAndWait(
        `${flash.uma_sex_title}의 문제에 대해 트레이너의 관점에서 답을 낼 수 없다면, 당사자에게 맡기는 것도 방법이다.`,
      );
      await era.printAndWait(
        '걱정할 것 없어. 신뢰는 서로를 향하는 것이고, 일심동체란 바로 이런 거니까.',
      );
      await era.printAndWait(
        '망설일 필요도 없어. 이건 회피가 아니야. 왜냐하면——',
      );
      era.printButton(
        '「네가 어떤 선택을 하든, 내가 끝까지 함께 책임질 테니까.」',
        1,
      );
      await era.input();
      await flash.say_and_wait('！');
      await era.printAndWait(
        `노을진 방 안에서, 이국에서 온 ${flash.teen_sex_title}는 ${you.name}의 말에 잠시 얼어붙었다.`,
      );
      await era.printAndWait(
        `주변의 시간이 멈춘 듯했고, 찰나의 홍조 외에는 ${you.name}은(는) ${flash.sex}의 표정에서 어떤 동요도 읽을 수 없었다.`,
      );
      await era.printAndWait(
        `하지만 그사이 ${flash.sex}의 맑고 투명한 푸른 눈동자는 침묵 속에 ${you.name}을(를) 계속 응시했고, 그 눈빛 속에는 묘한 빛이 감돌았다.`,
      );
      await flash.say_and_wait('……저……');
      await era.printAndWait(
        '십여 초가 지난 후에야 에이신 플래시가 다시 입을 열었다.',
      );
      await flash.say_and_wait(
        '……어쩌면 당신 말이 맞을지도 모르겠네요. 제 스스로 이 길을 결정하는 것이 우리 모두에게 최선의 선택일 거예요.',
      );
      await era.printAndWait(
        `그러나 아까 전의 단호함과 달리, 지금 ${flash.sex}의 말투에는 다소 망설임이 섞여 있었다.`,
      );
      await flash.say_and_wait(
        '그러니 제게 시간을 조금만 더 주세요. 진지하게 고민해 보고 싶습니다.',
      );
      await era.printAndWait(
        `말을 마친 ${flash.sex}는 ${you.name}에게 깊게, 아주 깊게 고개를 숙여 인사했다.`,
      );
      await flash.say_and_wait(
        '합숙이 끝나는 날에 답을 드릴게요. 그때까지는 원래 계획대로 진행해 주세요.',
      );
      await era.printAndWait(
        `몸을 일으키자 ${you.name}은(는) 보았다. ${flash.sex}가 ${you.name}에게 달콤한 미소를 짓는 모습을.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '마음속 이야기 · 두 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     * @param {PrintedSpan} s_distracted エイシンフラッシュ専用状態 [分心]
     */
    const f = async (flash, you, callname, s_distracted) => {
      await flash.used_to_say_and_wait(
        '(합숙이 끝나는 날에 답을 드릴게요. 그때까지는 원래 계획대로 진행해 주세요.)',
      );
      await era.printAndWait(
        '트레센의 합숙은 기간이 짧아 한 달 만에 끝난다.',
      );
      await era.printAndWait(
        `그리고 그동안 ${you.name}은(는) 에이신 플래시의 상태가 끊임없이 요동치는 것을 느낄 수 있었다. 때로는 확신에 차고, 때로는 흔들리고. 때로는 ${you.name}을(를) 보며 활짝 웃다가도, 때로는 하늘을 보며 망연히 생각에 잠겼다.`,
      );
      await era.printAndWait(
        `하지만 ${you.name}은(는) 결국 이성적인 결정을 내리리라 믿었다. 아무리 고된 트레이닝도 불평하지 않는 상대에게 이런 고민은 사소한 일일 것이다.`,
      );
      await flash.say_and_wait(
        `${callname}, 오늘 열일곱 시부터 열여덟 시까지 일정이 있으신가요?`,
      );
      await era.printAndWait(
        `그리고 ${you.name}의 기대에 부응하듯 에이신 플래시는 완벽한 답안지를 제출했다.`,
      );
      era.drawLine();
      await flash.say_and_wait(
        '사실 십 년 전 어린 시절에는 지금처럼 모든 일에서 정확함을 추구하는 버릇이 없었어요.',
      );
      await era.printAndWait('월말, 합숙소 근처의 해변.');
      await era.printAndWait(
        `에이신 플래시와 ${you.name}은(는) 함께 바닷가를 거닐고 있었다.`,
      );
      await era.printAndWait(
        '지금 저편 끝자락으로 석양이 서서히 가라앉고 있었다.',
      );
      await era.printAndWait(
        '노을의 잔광이 찬란한 금빛을 뿜어내며 해안선 전체를 장엄한 화폭으로 물들였다.',
      );
      await flash.say_and_wait(
        '일곱 살 크리스마스 전날까지는요. 그날 집에 돌아오니 아버지가 독일의 전통 크리스마스 빵인 Stollen을 준비하고 계셨어요.',
      );
      await era.printAndWait(
        '말을 하며 에이신 플래시는 뒤돌아 이 절경을 묵묵히 바라보았다.',
      );
      await era.printAndWait(`잠시 후, ${flash.sex}는 다시 입을 열었다.`);
      await flash.say_and_wait(
        '……만드는 과정에서 일 그램의 오차도 허용하지 않으실 만큼 진지하셨어요. 당시 저는 이해하지 못해서 호기심에 여쭤봤죠.',
      );
      await flash.say_and_wait(
        '『아빠, 왜 그렇게까지 정확해야 해요? 설탕 양이 레시피랑 조금 달라도 맛은 별 차이 없을 텐데.』',
      );
      era.printButton('「정말 의외의 발언이네.」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}이(가) 아는 그녀라면 도저히 상상할 수 없는 대충 넘기는 말이었다.`,
      );
      await flash.say_and_wait(
        '그렇죠. 그래서 그다음에 아버지가 해 주신 말씀이 제 인생의 궤도를 바꿔 놓았답니다.',
      );
      await era.printAndWait(
        `에이신 플래시는 고개를 끄덕였다. ${flash.sex}의 말투에는 그리움 섞인 감회가 담겨 있었다.`,
      );
      await flash.say_and_wait(
        '『당연히 품질 때문이란다, 플래시. 만약 오늘 이 정도의 오차를 눈감아 주고 기준을 낮춘다면, 내일은 어떨까? 모레는?』',
      );
      await flash.say_and_wait(
        '한 번의 방심이 계속된 나태함으로 이어지고, 결국 돌이킬 수 없는 결과를 낳는다는…… 아주 단순하고 명쾌한 원리였죠, 안 그런가요?',
      );
      await flash.say_and_wait(
        '저는 아버지가 그저 그런 사실을 가르쳐 주려 하시는 줄로만 알았어요. 하지만 그 뒤에 이어진 말씀은 당시의 제가 이해하기에는 너무 어려웠답니다.',
      );
      await era.printAndWait(
        '거기까지 말하고 에이신 플래시는 고개를 숙여 손을 가슴에 얹었다.',
      );
      await flash.say_and_wait(
        '『하지만 품질이 가장 중요한 건 아니란다. 레시피만 있다면 누구나 완벽한 디저트를 만들 수 있으니까.』',
      );
      await flash.say_and_wait(
        '『가장 핵심적인 건 바로 이 마음이란다. 다른 사람이 디저트를 통해 우리의 정성을 느끼게 하는 것, 그것이야말로 가장 중요한 일이란다.』',
      );
      era.printButton('「중요한 건 그 안에 담긴 진심이라는 거네?」', 1);
      await era.input();
      await flash.say_and_wait(
        '하지만 마음은 조미료가 아니기에 음식을 더 맛있게 만들어 주지는 못해요.',
      );
      await era.printAndWait(
        '에이신 플래시가 가볍게 탄식했고, 호수처럼 고요하던 눈동자에 뚜렷한 동요가 일었다.',
      );
      await flash.say_and_wait(
        '당시의 저는 아버지께 그렇게 대답했어요. 아버지는 제가 너무 어리다는 이유로 자세히 설명해 주지 않으셨고, 그저 나중에 시간이 흐르면 자연스럽게 이해하게 될 거라고만 하셨죠.',
      );
      era.printButton('「인생의 연륜과 맞닿아 있는 부분이네.」', 1);
      await era.input();
      await flash.say_and_wait(
        '네. 하지만 어린 시절의 저는 지기 싫어하는 마음이 앞서서 나중까지 기다릴 필요 없다고 생각했죠.',
      );
      await flash.say_and_wait(
        '부모님은 아이에게 가장 존경스러운 롤모델이잖아요. 그래서 부모님의 행동 방식을 흉내 내기만 하면 그 말씀을 쉽게 이해할 수 있을 거라 믿었어요.',
      );
      await flash.say_and_wait(
        '후후. 참 비현실적인 생각이었죠. 결국 지금까지도 아버지의 그 말씀을 완전히 깨닫지는 못했으니까요.',
      );
      await era.printAndWait(
        '에이신 플래시는 자조 섞인 가벼운 웃음을 터뜨렸다. 과거 자신의 유치했던 행동이 꽤나 우습게 느껴지는 모양이었다.',
      );
      await flash.say_and_wait(
        '그래도 그 모방과 학습의 과정에서, 모든 일에 엄격하고 공정하며 정밀하게 임한다는 게 얼마나 어려운 일인지 깨닫게 되었어요. 그래서 그런 삶을 일상으로 만들어 온 아버지와 어머니를 더욱 존경하게 되었답니다.',
      );
      await flash.say_and_wait(
        '그렇기에 부모님이 저를 자랑스러워하셨으면 좋겠다는 마음이 자연스럽게 가슴 깊이 자리 잡게 된 거고요.',
      );
      era.printButton('「그게 모든 일의 시작이었구나?」', 1);
      await era.input();
      await flash.say_and_wait('맞아요, 그게 모든 일의 시작이었죠.');
      await era.printAndWait(
        '말을 마친 에이신 플래시는 품에서 그 은색과 검은색이 섞인 훈장을 꺼냈다.',
      );
      await flash.say_and_wait('그리고 저는 이곳에 왔고, 당신과 만났어요.');
      await era.printAndWait(
        `${flash.sex}는 그것을 한참 동안 응시했다. 석양이 마지막 빛을 거둘 때가 되어서야 그녀는 다시 입을 열었다.`,
      );
      await flash.say_and_wait(
        `……${flash.uma_sex_title}로 태어나 경기장에서 달릴 수 있다는 건 정말 자랑스러운 일이라고 들었어요. 그래서 저는 이곳에서 영광을 쟁취하고, 당당하게 고향으로 돌아가고 싶었죠.`,
      );
      await flash.say_and_wait(
        '그것이 제가 달리는 원동력이었고, 지금까지 줄곧 집착해 온 이유였어요.',
      );
      await flash.say_and_wait('하지만……');
      await flash.say_and_wait('………');
      await era.printAndWait(
        `에이신 플래시는 잠시 침묵했고, 동시에 ${you.name}은(는) ${flash.sex}의 손이 힘없이 늘어지는 것을 보았다.`,
      );
      await flash.say_and_wait(
        '실제로 그 길을 걷는 도중에, 그 마음은 조금씩 비뚤어진 의지로 변질되어 갔어요.',
      );
      await era.printAndWait(`${flash.sex}가 나직하게 속삭였다.`);
      await flash.say_and_wait(
        '합숙 첫날, 당신이 해 주신 말씀을 듣고 문득 깨달았어요. 제 꿈은 사실 예전부터 저 혼자만의 것이 아니었다는 걸요.',
      );
      await flash.say_and_wait(
        '예전의 저는 그걸 이해하지 못했어요…… 그래서 늘 앞만 보고 혼자 달려가느라 당신의 생각은 안중에도 없었죠.',
      );
      await flash.say_and_wait(
        '저에게 주시는 당신의 도움은 그 무엇으로도 대체할 수 없는데. 우리는 당연히 일심동체의 관계여야만 했는데.',
      );
      era.printButton('「플래시……」', 1);
      await era.input();
      await flash.say_and_wait('돌이켜보면 당신에게 진 빚이 너무 많아요.');
      await flash.say_and_wait(
        '사츠키상 전의 발열 때도, 일본 더비 후의 다리 부상 때도, 당신은 저보다 한발 앞서 세심하게 고려해 주셨죠. 제 건강을 최우선으로 스케줄을 다시 짜 주셨고요.',
      );
      await flash.say_and_wait(
        '그런데 우습게도 저는 당신이 정성껏 준비한 그 모든 것을 무시하고, 오직 미래 이야기만 떠들고 있었어요.',
      );
      await flash.say_and_wait(
        '……건강한 몸이 뒷받침되지 않는다면, 어떤 꿈도 그저 허망한 공상에 불과할 뿐인데……',
      );
      await era.printAndWait(
        '그렇게 말하며 에이신 플래시는 고개를 들어 어둑해진 하늘을 향해 깊은 한숨을 내뱉었다.',
      );
      era.printButton('「무사히 회복한 것은 네 노력 덕분이야.」', 1);
      await era.input();
      await era.printAndWait(
        `그 모습에 ${you.name}은(는) 미간을 찌푸렸다. ${you.name}은(는) 이런 모습을 보고 싶지 않았다. 에이신 플래시의 말은 ${flash.sex} 자신의 노력까지 부정하는 것처럼 들렸다.`,
      );
      await flash.say_and_wait(
        '후우…… 이런 때에도 위로해 주시는군요. 역시 참 다정한 분이세요.',
      );
      await era.printAndWait(
        `${flash.sex}는 ${you.name}의 말을 듣고 ${you.name}에게 살짝 미소 지었다.`,
      );
      era.printButton('「사실을 말했을 뿐이야.」', 1);
      await era.input();
      await era.printAndWait(`${you.name}이(가) 다시 한번 강조했다.`);
      await flash.say_and_wait('제 말도 사실인걸요.');
      await era.printAndWait(
        `에이신 플래시는 고개를 저으며 이 화제에 대해 더 이상 길게 논하지 않았다. ${flash.sex}는 그저 손을 뻗어, 월초에 ${you.name}이(가) ${flash.sex}에게 건넸던 은빛과 검은빛의 훈장을 다시 ${you.name}에게 돌려주었다.`,
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 고개를 숙여 훈장을 한 번 보고, 다시 고개를 들어 ${flash.sex}를 보았다.`,
      );
      await flash.say_and_wait(
        '클래식 삼관에 도전한 것은 꿈을 이루기 위해서였어요. 하지만 꿈을 이루는 길이 클래식 삼관뿐인 건 아니죠.',
      );
      await flash.say_and_wait(
        '사실 진작 깨달았어야 했는데, 스스로의 고집에 얽매여서 혼자 막다른 골목에 빠져 있었네요.',
      );
      era.printButton(
        '「네가 오랫동안 준비해 온 계획이었으니, 그만큼 집착하는 것도 이해해.」',
        1,
      );
      await era.input();
      await flash.say_and_wait(
        '하지만 계획은 유동적이어야 하죠. 고집만 부리는 건 오히려 미성숙함의 증거일 뿐이에요.',
      );
      await flash.say_and_wait('……어쩌면……');
      await era.printAndWait(
        `그때 ${you.name}은(는) 에이신 플래시가 생각에 잠긴 듯 고개를 끄덕이는 것을 보았다.`,
      );
      await flash.say_and_wait(
        '이렇게 오랜 시간이 흐르고서야 이 사실을 깨닫고 나니, 이제야 겨우 아버지와 어머니께 조금 더 다가간 기분이 드네요.',
      );
      era.printButton(
        '「너의 부모님도 네가 너만의 길을 개척하는 모습을 기쁘게 봐 주실 거야.」',
        1,
      );
      await era.input();
      await flash.say_and_wait('당신 말씀이 맞아요.');
      await flash.say_and_wait(`그러니까, ${callname}.`);
      await flash.say_and_wait('후우……');
      await era.printAndWait(
        '다음 대화를 시작하기 전, 에이신 플래시는 깊게 숨을 들이마셨다. 이것은 지금부터 이어질 내용이 오늘 가장 중요한 본론임을 의미했다.',
      );
      await flash.say_and_wait('저, 올해의 재팬컵에 출주하고 싶어요.');
      era.printButton('「！」', 1);
      await era.input();
      await era.printAndWait(
        `${flash.sex}는 ${you.name}의 눈을 똑바로 응시하며 한마디 한마디 자신의 생각을 전했다.`,
      );
      await flash.say_and_wait(
        `만약 몸 상태 때문에 동세대 최강의 ${flash.uma_sex_title}들만이 이길 수 있는 국화상에 도전하지 못한다면, 그보다 더 높은 목표를 두어도 좋겠죠.`,
      );
      await flash.say_and_wait(
        '최상의 컨디션으로, 저보다 훨씬 경험이 많은 선배들에게 도전해 보고 싶어요.',
      );
      await flash.say_and_wait(
        `일본 더비를 제패한 제가, 과연 ${flash.couple_title}들에게 승리할 수 있을지 시험해 보고 싶습니다.`,
      );
      era.printButton('「너라면 분명 해낼 수 있을 거야.」', 1);
      await era.input();
      await flash.say_and_wait('후훗~');
      await era.printAndWait(
        `${you.name}의 망설임 없는 지지에 에이신 플래시가 화사하게 웃었다.`,
      );
      await flash.say_and_wait(
        '그러게요, 당신이 곁에서 지지해 주신다면 저는 분명 해낼 수 있겠죠.',
      );
      await era.printAndWait(
        `밤의 장막이 드리우기 시작한 해변에서, 이국에서 온 ${flash.teen_sex_title}는 부드러운 표정으로 ${you.name}에게 왼손을 내밀었다.`,
      );
      await flash.say_and_wait('이제, 그 목표를 향해 노력해 나가요!');
      await era.printAndWait(
        `${flash.sex}의 어조에는 아주 깊은 신뢰가 담겨 있었다. 그것은 설령 하늘이 무너져도 결코 흔들리지 않을 굳건한 믿음이었다.`,
      );
      era.printButton('「응.」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 고개를 끄덕이며 자연스럽게 ${flash.sex}의 손을 맞잡았다.`,
      );
      await era.printAndWait(
        `의심할 여지 없이 이번 여름 합숙을 거치며 ${you.name}들의 미래는 더욱 찬란하고 멋진 불꽃을 피워 낼 것이다.`,
      );
      era.println();
      await era.printAndWait([
        flash.get_colored_name(),
        '가 더 이상 ',
        s_distracted,
        ' 상태가 아니게 되었다!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_kiku_sho: (() => {
    const title = '국화상을 향해';
    /** @param {CharaTalk} flash エイシンフラッシュ */
    const f = async (flash) => {
      await flash.say_and_wait('클래식 삼관의 마지막 관문, 국화상.');
      await flash.say_and_wait(
        '한때 목표에서 제외했지만 결국 출주하게 되었네요.',
      );
      era.printButton('「예상보다 빨리 회복해서 다행이야.」', 1);
      await era.input();
      await flash.say_and_wait('네.');
      await flash.say_and_wait(
        '하지만 지금은 새로운 목표를 향해 노력하고 있어요.',
      );
      await flash.say_and_wait(
        '그러니 클래식 삼관에 집착할 필요는 없어요. 국화상도 다른 레이스와 다르지 않죠.',
      );
      await flash.say_and_wait('따라서 제가 해야 할 일도 언제나와 같아요.');
      await flash.say_and_wait(
        '모든 일에 최선을 다하고 자연스럽게 찾아올 결과를 받아들이는 거예요.',
      );
    };
    f.title = title;
    return f;
  })(),
  before_japa_cup_c: (() => {
    const title = '도전의 길 · 첫 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        '재팬컵. 트윙클 시리즈 최고 영예를 상징하는 레이스 중 하나답게 쟁쟁한 실력자들이 대거 모였다.',
      );
      await you.say_as_passer_by_and_wait(`관객A`, '이번 재팬컵 대진표 봤어?');
      await you.say_as_passer_by_and_wait('관객B', '응응, 정말 예상 밖인걸.');
      await you.say_as_passer_by_and_wait(
        `관객A`,
        `젠노 롭 로이, 스페셜 위크…… 한동안 보이지 않던 ${flash.uma_sex_title}들인데, 이번 레이스에서 다시 ${
          flash.couple_title
        }들의 활약을 보게 될 줄이야.`,
      );
      await you.say_as_passer_by_and_wait(
        `관객B`,
        `그뿐만이 아니야. 놀라운 건 ${flash.couple_title}들 모두 이전에 재팬컵에서 우승한 경험이 있다는 거지.`,
      );
      await you.say_as_passer_by_and_wait(
        '관객B',
        '이런 우연이라니, 마치 미리 약속이라도 한 것 같아.',
      );
      await you.say_as_passer_by_and_wait(
        '관객A',
        '하지만 그렇게 되면 경험 차이가 너무 크잖아. 클래식급에게는 정말 가혹한 시련이겠어.',
      );
      era.drawLine();
      await flash.say_and_wait('재팬컵이 곧 시작되겠네요.');
      await era.printAndWait('레이스 전, 대기실.');
      await era.printAndWait(
        '에이신 플래시는 심호흡을 하며 컨디션을 최상으로 끌어올렸다.',
      );
      await flash.say_and_wait(
        '예상대로 참가자 명단에 노련한 선배님들이 많이 보이네요.',
      );
      era.printButton('「긴장돼?」', 1);
      await era.input();
      await flash.say_and_wait('네, 아무래도 전 『도전자』니까요.');
      await era.printAndWait(
        `${flash.sex}는 고개를 끄덕였지만, ${you.name}은(는) ${flash.sex}의 눈빛에서 은근한 기대를 읽어냈다.`,
      );
      await flash.say_and_wait(
        '지난번 미스터 시비 씨와의 병주에서 정말 많은 것을 배웠고 큰 도움이 되었어요. 그러니 이번 재팬컵도 마찬가지일 거예요. 결과가 어떻든 레이스 도중에 분명 깨닫는 것이 있겠죠.',
      );
      await era.printAndWait(
        `에이신 플래시는 의욕에 차서 말했다. ${flash.sex}의 얼굴에는 자신감 있는 미소가 떠올랐다.`,
      );
      await flash.say_and_wait(
        '뭐, 그렇다고 해서 승리를 쉽게 양보할 생각은 전혀 없지만요.',
      );
      await flash.say_and_wait(
        '그동안 잘 쉰 덕분에 몸은 완전히 회복되었으니까요.',
      );
      era.printButton('「드디어 아무 걱정 없이 달릴 수 있겠네.」', 1);
      await era.input();
      await flash.say_and_wait(`네! 그럼 다녀올게요, ${callname}.`);
      era.printButton('「파이팅!」', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  japa_cup_win_c: (() => {
    const title = '도전의 길 · 두 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        '재팬컵은 일본 더비와 거리와 코스가 비슷하다. 따라서 당연하게도, 일본 더비 우승자였던 에이신 플래시는 이 레이스에서도 눈부신 달리기를 보여 주었다.',
      );
      await flash.say_and_wait(`후우…… 다녀왔습니다, ${callname}.`);
      era.printButton('「레이스하느라 수고했어.」', 1);
      await era.input();
      await era.printAndWait(
        '과정은 무척 험난했지만, 에이신 플래시는 마침내 자신의 탄탄한 실력으로 세대의 장벽을 넘어 선배들을 꺾는 데 성공했다.',
      );
      await flash.say_and_wait('이겼습니다.');
      await era.printAndWait(
        `레이스 후 대기실에서, 방금 돌아온 에이신 플래시가 ${you.name}에게 조금은 지친 듯한 미소를 지어 보였다.`,
      );
      await flash.say_and_wait(
        `스페셜 위크 씨와 젠노 롭 로이 씨의 실력은 정말 대단했어요. 온 힘을 다해서야 겨우 ${flash.couple_title}들을 앞지를 수 있었습니다.`,
      );
      era.printButton('「멋진 레이스였어.」', 1);
      await era.input();
      await flash.say_and_wait(
        '네, 저도 제가 지금 어느 정도의 실력을 갖췄는지 확실히 체감할 수 있었습니다.',
      );
      await era.printAndWait(
        `에이신 플래시가 고개를 끄덕였고, ${you.name}은(는) ${flash.sex}의 말투에서 이 값진 승리에 대한 기쁨을 분명히 느낄 수 있었다.`,
      );
      era.printButton('「무척 기뻐 보이네.」', 1);
      await era.input();
      await flash.say_and_wait(
        '네, 이겼을 뿐만 아니라 그 덕분에 새로운 깨달음도 많이 얻었으니까요.',
      );
      await era.printAndWait(
        `이어서 ${flash.sex}의 얼굴에 생각에 잠긴 표정이 떠올랐다.`,
      );
      await flash.say_and_wait(
        `이대로 계속 나아간다면 언젠가는 정면으로 ${flash.couple_title}을 꺾고 독보적인 존재가 될 수 있겠죠.`,
      );
      era.printButton('「다음 레이스에서 그 성과를 확인하자.」', 1);
      await era.input();
      await flash.say_and_wait('네!');
      await flash.say_and_wait('아리마 기념…… 후훗, 기대되는 레이스네요.');
    };
    f.title = title;
    return f;
  })(),
  japa_cup_lose_c: (() => {
    const title = '도전의 길 · 두 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        '재팬컵은 일본 더비와 거리와 코스가 비슷하다. 본래대로라면 일본 더비를 제패한 에이신 플래시는 이곳에서도 빛나는 달리기를 보여 줄 터였다.',
      );
      await flash.say_and_wait(`후우…… 다녀왔습니다, ${callname}.`);
      era.printButton('「레이스하느라 수고했어.」', 1);
      await era.input();
      await era.printAndWait(
        '하지만 안타깝게도 그 이점만으로는 에이신 플래시와 선배들의 실력 차이를 메울 수 없었다.',
      );
      await flash.say_and_wait('졌네요.');
      await era.printAndWait(
        `레이스 후 대기실에서, 방금 돌아온 에이신 플래시가 ${you.name}에게 조금은 지친 듯한 미소를 지어 보였다.`,
      );
      await flash.say_and_wait(
        '전력을 다했지만 스페셜 위크 씨와 젠노 롭 로이 씨에게는 미치지 못했어요.',
      );
      era.printButton('「멋진 레이스였어.」', 1);
      await era.input();
      await flash.say_and_wait(
        `네. ${flash.couple_title}와의 차이를 직접 느낄 수 있었어요.`,
      );
      await era.printAndWait(
        '에이신 플래시는 고개를 끄덕였다. 목소리에는 크게 낙담한 기색이 없었다.',
      );
      await flash.say_and_wait('그래도 덕분에 새로 배운 게 많았어요.');
      await era.printAndWait(
        `이어서 ${flash.sex}의 얼굴에 생각에 잠긴 표정이 떠올랐다.`,
      );
      await flash.say_and_wait(
        `이대로 계속 나아간다면 언젠가는 정면으로 ${flash.couple_title}을 꺾고 독보적인 존재가 될 수 있겠죠.`,
      );
      era.printButton('「다음 레이스에서 그 성과를 확인하자.」', 1);
      await era.input();
      await flash.say_and_wait('네!');
      await flash.say_and_wait('아리마 기념…… 후훗, 기대되는 레이스네요.');
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = '도전의 길 · 세 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (flash, you) => {
      await era.printAndWait(
        '아리마 기념은 트윙클 시리즈의 연말을 장식한다. 흔히 일 년에 레이스 하나만 본다면 아리마 기념을 보라는 말도 있다.',
      );
      await era.printAndWait(
        `팬 투표로 출주자가 결정되는 규칙 덕분에, 올해 눈부신 활약을 펼친 ${flash.uma_sex_title}만이 이 무대에 설 자격을 얻는다.`,
      );
      await era.printAndWait(
        '그리고 일본 더비 우승자인 에이신 플래시가 그 명단에 포함된 것은 당연한 일이었다.',
      );
      await you.say_as_passer_by_and_wait(`관객A`, `어이, 이거 봤어?`);
      await you.say_as_passer_by_and_wait(
        '관객B',
        '말도 안 돼. 스페셜 위크랑 젠노 롭 로이가 다시 나오는 것만으로도 대단한 일이라고 생각했는데.',
      );
      await you.say_as_passer_by_and_wait(
        '관객A',
        '참가자 중에 에어 그루브랑 후지 키세키까지 있어!',
      );
      await you.say_as_passer_by_and_wait(
        '관객B',
        '아무리 아리마 기념이라지만 진용이 너무 화려한 거 아냐……?',
      );
      await you.say_as_passer_by_and_wait(
        `관객A`,
        `지금도 그렇고 지난번 재팬컵도 그렇고. 유명한 ${flash.uma_sex_title}들이 연달아 복귀하다니.`,
      );
      await you.say_as_passer_by_and_wait(
        '관객A',
        '마치 앞으로 엄청난 일이 벌어질 것만 같은 기분이라 정말 기대돼.',
      );
      await you.say_as_passer_by_and_wait(
        '관객B',
        '하지만 그게 클래식급 아이들에게 정말 좋은 일일까?',
      );
      era.drawLine();
      await flash.say_and_wait('정말…… 놀랍네요.');
      await era.printAndWait(
        '레이스 전, 대기실. 에이신 플래시는 이번 레이스 출주자 명단를 보며 미간을 살짝 찌푸렸다.',
      );
      await flash.say_and_wait(
        '스페셜 위크 양과 젠노 롭 로이 양만으로도 충분히 강력한 적이라고 생각했는데.',
      );
      await flash.say_and_wait(
        '에어 그루브 양과 후지 키세키 씨까지 참여할 줄은 몰랐어요.',
      );
      era.printButton('「이번 레이스는 꽤 힘들겠네.」', 1);
      await era.input();
      await flash.say_and_wait(
        '그렇네요. 하지만 애초에 도전하는 마음으로 참가한 거니까요. 강한 상대를 많이 만날수록 제가 얻는 수확도 그만큼 커질 거예요.',
      );
      await flash.say_and_wait('하물며……');
      await era.printAndWait(
        '에이신 플래시는 주먹을 꽉 쥐며 두려움 없는 눈빛을 보였다.',
      );
      await flash.say_and_wait(
        '이미 수많은 장애물을 함께 뛰어넘어 온 우리의 실력도 결코 얕볼 수준은 아니니까요.',
      );
      era.printButton(`「${flash.couple_title}에게 네 힘을 보여 줘.」`, 1);
      await era.input();
      await flash.say_and_wait('네!');
      await flash.say_and_wait(
        '정점에 도달할 때까지, 계속해서 달려 나가겠어요.',
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_c: (() => {
    const title = '도전의 길 · 네 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await you.say_as_passer_by_and_wait('관중 A', '정말 멋진 레이스였어.');
      await you.say_as_passer_by_and_wait(
        '관중 B',
        '맞아, 과연 아리마 기념이야. 티켓값이 전혀 아깝지 않네.',
      );
      await you.say_as_passer_by_and_wait(
        `관중 A`,
        `오랫동안 출주하지 않았던 ${flash.uma_sex_title}들이 오랜만에 다시 등장하는 것만으로도 흥분됐는데, ${
          flash.couple_title
        }들이 이렇게 놀라운 성적을 낼 줄이야.`,
      );
      await you.say_as_passer_by_and_wait(
        '관중 B',
        '그 얘길 하자면, 에이신 플래시가 더 대단했지.',
      );
      await you.say_as_passer_by_and_wait(
        `관중 B`,
        `아직 성장이 다 끝나지 않은 클래식급 ${flash.uma_sex_title}이면서도, 레이스 도중 이미 명성이 자자한 선배들을 차례차례 제쳤잖아.`,
      );
      await you.say_as_passer_by_and_wait(
        `관중 A`,
        `그러게, 정말 놀라운 실력이야. 삼 년 차의 ${flash.sex}가 보여 줄 모습이 더욱 기대되는걸.`,
      );
      era.drawLine();
      await flash.say_and_wait(`다녀왔습니다, ${callname}.`);
      era.printButton('「수고했어, 정말 뛰어난 활약이었어.」', 1);
      await era.input();
      await era.printAndWait(
        `에이신 플래시가 레이스 전에 말했던 대로, 지금까지 수많은 도전을 극복해 온 ${flash.sex}의 실력은 이제 결코 얕잡아볼 수 없는 수준이었다.`,
      );
      await era.printAndWait(
        `심지어 고학년 선배들을 상대로도 ${flash.sex}는 대등하게 맞서 싸웠고, 마침내 승리까지 거머쥐었다.`,
      );
      await flash.say_and_wait(
        '후우…… 아주 상쾌한 레이스였어요. 과정은 무척 험난했지만, 결국 승리를 얻어냈습니다.',
      );
      await era.printAndWait(
        `에이신 플래시는 깊은 숨을 내쉬었고, 큰 싸움 끝에 원하는 결과를 얻은 만족감이 ${flash.sex}의 얼굴에 떠올랐다.`,
      );
      await flash.say_and_wait(
        '재팬컵과 아리마 기념, 이 두 레이스를 통해 제 성장을 분명히 느낄 수 있었어요.',
      );
      await flash.say_and_wait(
        '그렇다는 건 올해의 계획은 성공적으로 마무리된 셈이네요.',
      );
      await era.printAndWait(
        `에이신 플래시는 의욕에 차서 고개를 끄덕였다. 레이스에서 자극을 받은 ${flash.sex}는 벌써 삼 년 차 계획을 시작하고 싶은 듯했다.`,
      );
      era.printButton('「돌아가면 함께 앞으로의 계획을 세우자.」', 1);
      await era.input();
      await flash.say_and_wait('네!');
    };
    f.title = title;
    return f;
  })(),
  arim_kin_lose_c: (() => {
    const title = '도전의 길 · 네 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await you.say_as_passer_by_and_wait('관중 A', '정말 멋진 레이스였어.');
      await you.say_as_passer_by_and_wait(
        '관중 B',
        '맞아, 과연 아리마 기념이야. 티켓값이 전혀 아깝지 않네.',
      );
      await you.say_as_passer_by_and_wait(
        `관중 A`,
        `오랫동안 출주하지 않았던 ${flash.uma_sex_title}들이 오랜만에 다시 등장하는 것만으로도 흥분됐는데, ${
          flash.couple_title
        }들이 이렇게 놀라운 성적을 낼 줄이야.`,
      );
      await you.say_as_passer_by_and_wait(
        `관중 B`,
        `후배들과의 차이가 확연하네. 내년에도 ${flash.couple_title}이 출주하면 클래식급은 어떻게 감당하지?`,
      );
      await you.say_as_passer_by_and_wait(
        `관중 A`,
        `클래식급 하니까 말인데, 에이신 플래시의 달리기 봤어?`,
      );
      await you.say_as_passer_by_and_wait(
        '관중 B',
        '응, 객관적으로 보면 정말 훌륭했어. 다만 더 강력한 라이벌을 만난 게 아쉬울 뿐이지.',
      );
      await you.say_as_passer_by_and_wait(
        `관중 A`,
        `정말 아쉽지만, ${flash.sex}의 성장은 아직 끝나지 않은 것 같아. 그렇게 생각하니 내년에는 어떻게 될지 정말 기대되는데.`,
      );
      await you.say_as_passer_by_and_wait(
        '관중 B',
        '맞아, 내년의 모습이 벌써부터 기다려지는걸.',
      );
      era.drawLine();
      await era.printAndWait(
        `에이신 플래시가 레이스 전에 말했던 대로, 지금까지 수많은 도전을 극복해 온 ${flash.sex}의 실력은 이제 결코 무시할 수 없는 수준이었다.`,
      );
      await flash.say_and_wait(`다녀왔습니다, ${callname}.`);
      era.printButton('「수고했어, 정말 뛰어난 활약이었어.」', 1);
      await era.input();
      await era.printAndWait(
        '실전에서 아직 선배들과의 격차가 조금 있기는 했지만, 충분히 납득할 수 있는 범위 안이었다.',
      );
      await flash.say_and_wait(
        '후우…… 아주 상쾌한 레이스였어요. 비록 패배라는 결과는 피하지 못했지만요.',
      );
      await era.printAndWait(
        `내년에 다시 한번 성장할 ${flash.sex}라면 진정한 의미에서의 대등한 승부를 벌일 수 있을 것이다.`,
      );
      await flash.say_and_wait(
        '그래도 재팬컵과 아리마 기념, 이 두 레이스를 통해 제 성장을 확실히 실감할 수 있었습니다.',
      );
      await flash.say_and_wait(
        '다음번에는 저를 추월하는 게 그렇게 쉽지만은 않을 거예요.',
      );
      await era.printAndWait('눈앞의 상대도 같은 생각이었다.');
      await era.printAndWait(
        `덕분에 ${you.name}은(는) 에이신 플래시의 그리 낙담하지 않았고, 오히려 아쉬움 속에서도 의욕을 잃지 않았음을 알 수 있었다.`,
      );
      await flash.say_and_wait(
        '뭐, 어쨌든 아리마 기념이 끝났으니 올해의 계획도 공식적으로 막을 내린 셈이네요.',
      );
      await era.printAndWait(
        `에이신 플래시는 의욕에 차서 고개를 끄덕였다. 레이스에서 자극을 받은 ${flash.sex}는 벌써 삼 년 차 계획을 시작하고 싶은 듯했다.`,
      );
      era.printButton('「돌아가면 함께 앞으로의 계획을 세우자.」', 1);
      await era.input();
      await flash.say_and_wait('네!');
    };
    f.title = title;
    return f;
  })(),
  ws_95_1: (() => {
    const title = '새해 참배';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} fuji フジキセキ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     * @param {PrintedSpan} s_duty エイシンフラッシュ専用状態 [必行之事]
     */
    const f = async (flash, fuji, you, callname, s_duty) => {
      await era.printAndWait('또다시 새로운 봄이 찾아왔다.');
      await era.printAndWait('정월, 새해 참배.');
      await you.say_as_passer_by_and_wait(
        `사회자`,
        `최강 세대 돌입?! 유명 ${flash.uma_sex_title}의 화려한 부활!`,
      );
      await era.printAndWait(
        `${you.name}과(와) 에이신 플래시가 평온하게 보내야 할 오전의 정적은 TV에서 흘러나온 갑작스러운 뉴스 속보로 깨졌다.`,
      );
      await you.say_as_passer_by_and_wait(
        `사회자`,
        `얼마 전 재팬컵과 아리마 기념에서 오랜만에 모습을 드러냈던 유명 ${flash.uma_sex_title}들이 방금 기자회견을 가졌습니다.`,
      );
      await you.say_as_passer_by_and_wait(
        `사회자`,
        `이번 회견에서 ${flash.couple_title}들은 올해 열리는 모든 G1 레이스에 순차적으로 출주하겠다는 의사를 명확히 밝혔습니다!!!`,
      );
      await you.say_as_passer_by_and_wait(
        '사회자',
        '현장에 모인 전원이 각자의 분야에서 뛰어난 업적을 남긴 실력자들이라는 점을 고려하면, 올해 트윙클 시리즈에 얼마나 큰 파장이 일어날지 짐작조차 되지 않습니다.',
      );
      await you.say_as_passer_by_and_wait(
        '사회자',
        '그럼 현장에 나가 있는 기자를 연결해 보겠습니다——',
      );
      await you.say_as_passer_by_and_wait(
        `기자`,
        `후지 키세키${flash.adult_sex_title}, 이 시점에 G1급 중상 레이스에 출주하겠다고 발표하신 의도는 무엇인가요?`,
      );
      await fuji.say_and_wait(
        '음…… 구체적인 의도를 말로 설명하기는 어렵지만, 『높은 벽』이 되기 위해서라고 해 두죠.',
      );
      await you.say_as_passer_by_and_wait('기자', '높은 벽이요?');
      await fuji.say_and_wait(
        '후배들 앞에 서는 높은 벽이 되기 위해, 우리는 이 레이스에 참여하는 겁니다.',
      );
      await fuji.say_and_wait(
        `그러니 과감하게 도전해 주세요. 저는 여기서 ${you.name}을(를) 기다리겠습니다.`,
      );
      await era.printAndWait('「삑.」');
      await era.printAndWait(
        '화면 속의 후지 키세키가 카메라를 향해 손짓을 하는 장면에서 영상이 멈췄다.',
      );
      await flash.say_and_wait('……높은 벽, 인가요?');
      await era.printAndWait(
        '뉴스를 지켜보던 에이신 플래시는 미미하게 미간을 찌푸렸다.',
      );
      await flash.say_and_wait(
        '두렵지는 않지만, 왜 하필 이 시점에 그런 결정을 내린 걸까요? 그저 후배들의 앞길을 가로막기 위해서?',
      );
      era.printButton('「『시련』을 주겠다는 뜻 아닐까?」', 1);
      await era.input();
      await era.printAndWait(
        `하지만 ${you.name}은(는) 후지 키세키의 마지막 말 속에 담긴 의미를 예리하게 포착해 냈다.`,
      );
      await flash.say_and_wait('시련이요?');
      await era.printAndWait(
        `${you.name}의 말에 에이신 플래시는 이해가 잘 안 간다는 듯 고개를 갸웃거렸다.`,
      );
      era.printButton(
        '「벽은 가로막는 역할을 하기도 하지만, 능력이 있는 사람은 그걸 뛰어넘을 수도 있으니까.」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 자신의 견해를 ${flash.sex}에게 차근차근 설명해 주었다.`,
      );
      await flash.say_and_wait(
        `과연 그렇군요. 후지 키세키 씨의 진짜 뜻은 후배들이 ${flash.couple_title}들에게 도전하는 과정에서 성장하기를 바라는 것이었네요.`,
      );
      await era.printAndWait(
        '에이신 플래시는 고개를 끄덕이며 납득한 표정을 지었다.',
      );
      era.printButton('「재팬컵과 아리마 기념 때의 마음가짐으로 임하자.」', 1);
      await era.input();
      await flash.say_and_wait('네!');
      await era.printAndWait(
        `다음 순간, ${flash.sex}는 자신감 넘치게 대답했다.`,
      );
      await era.printAndWait('「따르릉——」');
      await flash.say_and_wait('？');
      await era.printAndWait(
        `그때, ${flash.sex}의 스마트폰에서 벨소리가 울려 퍼졌다.`,
      );
      await flash.say_and_wait('……어머니의 전화?');
      era.drawLine();
      await flash.say_and_wait('………');
      await era.printAndWait('플래시와 부모님의 통화가 끝났다.');
      era.printButton('「무슨 일이야?」', 1);
      await era.input();
      await era.printAndWait(
        `전화를 내려놓은 ${flash.sex}는 조금 전의 여유로운 모습은 온데간데없이 무척 진지해 보였다.`,
      );
      await flash.say_and_wait(
        '아버지와 어머니께서 내년 시월 후반에 제 레이스를 보러 일본에 오신대요.',
      );
      era.printButton('「시월 후반?」', 1);
      await era.input();
      await flash.say_and_wait(
        '네. 이미 결정된 계획에 따르면 그 시기의 레이스는 바로 가을 텐노상입니다.',
      );
      era.printButton('「생각보다 빠른걸.」', 1);
      await era.input();
      await era.printAndWait(
        `에이신 플래시의 원래 생각은 일본에서 여러 G1 타이틀을 획득한 뒤 고향으로 돌아가 부모님께 자신의 성장을 증명하는 것이었다.`,
      );
      await flash.say_and_wait(
        '저도 그렇게 생각해요. 부모님께서 직접 일본까지 오실 시간이 있을 줄은 몰랐거든요. 두 분 다 평소에 무척 바쁘신 분들이라.',
      );
      era.printButton(
        `「어떻게 해서든 자기 ${
          flash.sex_code - 1 ? '딸' : '아들'
        }이 경기장을 달리는 늠름한 모습을 보고 싶으셨겠지.」`,
        1,
      );
      await era.input();
      await flash.say_and_wait(
        '후훗~ 뭐, 생각을 바꿔 보면 이것도 나쁘지 않은 일일지도 모르겠네요.',
      );
      await era.printAndWait(
        '말을 하며 에이신 플래시는 주황색 마커를 꺼내 계획서를 수정하기 시작했다.',
      );
      await flash.say_and_wait(
        '부모님께서 직접 지켜보시는 가운데 우승하는 것보다 두 분을 더 자랑스럽게 해 드릴 일이 또 어디 있겠어요?',
      );
      await era.printAndWait(
        `${you.name}은(는) ${flash.sex}가 가을 텐노상 출주 예정 칸 옆에 강조하듯 동그라미를 여러 개 그리는 모습을 지켜보았다.`,
      );
      era.printButton('「그렇네.」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 고개를 끄덕이며 ${flash.sex}의 생각에 동조했다.`,
      );
      await era.printAndWait(
        `가을 텐노상에서 승리할 수만 있다면 에이신 플래시의 꿈은 이루어진다. 그리고 그것이 바로 ${you.name}이(가) 트레이너로서 존재하는 목적이기도 했다.`,
      );
      await era.printAndWait(
        `그렇다면 ${flash.sex}가 그 텐노상 방패를 얻는 과정이 조금 더 순조로울 수 있도록, ${you.name}은(는) 결심했다——`,
      );
      era.printButton('「신사에 가서 기원하자!」 (전 능력치 +20)', 1);
      era.printButton(
        `「미래의 계획을 변경할까?」 (【반드시 해야 할 일】 상태 획득)`,
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          '기원이란 본래 사람들이 신에게 자신의 소원을 전하며 가호를 받기를 바라는 의식에서 시작되었다.',
        );
        await era.printAndWait(
          '그리고 시대가 흐르면서 이 행위에는 서서히 다른 의미들이 부여되기 시작했다.',
        );
        await era.printAndWait(
          '오늘날 기원은 사람들이 더 나은 삶을 향해 나아가는 염원의 매개체가 되었다.',
        );
        await flash.say_and_wait(
          '음, 비록 이것이 레이스 결과에 실질적인 도움이 된다고는 생각하지 않지만……',
        );
        await era.printAndWait(
          `${you.name}의 제안에 에이신 플래시는 잠시 고민하더니 천천히 고개를 끄덕였다.`,
        );
        await flash.say_and_wait(
          '하지만 당신 말이 맞아요. 자신이 원하는 미래를 꿈꾸는 것은 언제나 좋은 일이니까요.',
        );
        await era.printAndWait(
          `그때 ${you.name}은(는) ${flash.sex}가 앞에 놓인 계획서를 덮고 일어서는 모습을 보았다.`,
        );
        await flash.say_and_wait(
          '게다가 오늘은 정월이니 신사 쪽도 무척 활기차겠네요.',
        );
        era.printButton('「근처에서 축제라도 할지 모르지.」', 1);
        await era.input();
        await flash.say_and_wait('축제라니…… 후훗~');
        await era.printAndWait('에이신 플래시는 가볍게 웃으며 흥미를 보였다.');
        await flash.say_and_wait(
          `그럼 앞으로 일 년의 계획을 축복하고 휴일의 즐거움도 누릴 겸, 가 보죠, ${callname}.`,
        );
        await era.printAndWait(
          `말을 마친 ${flash.sex}는 ${you.name}의 손을 잡고 밖으로 나가자는 신호를 보냈다.`,
        );
      } else {
        await era.printAndWait(
          '에이신 플래시의 현재 실력을 믿지 못하는 것은 아니지만, 목표 달성이라는 측면만 놓고 본다면……',
        );
        await era.printAndWait(
          `선배들과 강도 높은 G1 레이스를 이어 가며 몸을 지치게 하기보다는, 분위기가 한결 여유로운 G2나 G3가 ${flash.sex}의 컨디션과 힘을 유지하기에 더 적합하지 않을까.`,
        );
        await flash.say_and_wait(
          '음, 객관적으로 보면 나쁘지 않은 선택지입니다만……',
        );
        await era.printAndWait(
          `${you.name}이(가) 이 생각을 에이신 플래시에게 들려주자, ${flash.sex}는 잠시 생각하더니 고개를 저었다.`,
        );
        await flash.say_and_wait(
          `제 부모님께서는 당신들의 ${
            flash.sex_code - 1 ? '딸' : '아들'
          }이 그런 요령을 부려 승리를 따내는 걸 결코 바라지 않으실 거예요.`,
        );
        await era.printAndWait(
          `${flash.sex}는 계획서를 덮고 진지하게 말했다.`,
        );
        await flash.say_and_wait(
          '승리란 당당하게 쟁취했을 때 비로소 그 의미가 있는 법이니까요.',
        );
        await flash.say_and_wait(
          '시련이라면 마주하고, 벽이라면 뛰어넘는다. 오직 그런 방식으로 이루어낸 꿈만이 떳떳할 수 있습니다.',
        );
        era.printButton('「정말 기사도 정신이 넘치는 생각이네.」', 1);
        await era.input();
        await era.printAndWait(
          `${flash.sex}의 태도를 본 ${you.name}은(는) 무심코 감탄 섞인 말을 내뱉었다.`,
        );
        await flash.say_and_wait('후훗~ 칭찬 감사합니다.');
        await flash.say_and_wait(
          '아마 이렇게 생각했기에 초등학생 때 학급 연극에서 기사 역할로 뽑혔던 것일지도 모르겠네요.',
        );
        await era.printAndWait(
          `말을 마친 에이신 플래시는 활짝 미소 지었다. 어느새 ${flash.sex}의 표정은 다시 평소처럼 여유롭고 온화해져 있었다.`,
        );
        era.println();
        era.print([
          flash.get_colored_name(),
          '는 ',
          s_duty,
          '의 각오를 얻었다!',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_95_6: (() => {
    const title = '만남의 꽃';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        `밸런타인데이가 다가오자, 올해 새로 출시된 초콜릿들을 구경하기 위해 에이신 플래시는 ${you.name}을(를) 근처 디저트 가게로 초대했다.`,
      );
      await era.printAndWait('하지만……');
      await you.say_as_passer_by_and_wait(
        `손님`,
        `잠깐, 내가 먼저—— 아야, ${you.name}, 부딪혔잖아!`,
      );
      await you.say_as_passer_by_and_wait(
        '점원',
        '『초콜릿 바움쿠헨』을 구매하실 고객님은 이쪽으로 줄을 서 주세요. 아! 손님, 매장 내에서는 뛰시면 안 됩니다.',
      );
      await flash.say_and_wait('정말이지…… 아수라장이네요.');
      await era.printAndWait(
        '북적이며 서로 밀치는 인파를 보며 에이신 플래시는 미간을 찌푸렸다.',
      );
      await flash.say_and_wait(
        '이래서야 진열장 안의 디저트들을 자세히 살펴볼 수가 없겠어요. 조금 곤란하네요……',
      );
      era.printButton('「다른 가게로 갈까?」', 1);
      await era.input();
      await era.printAndWait(`${you.name}은(는) 그렇게 제안했다.`);
      await flash.say_and_wait(
        '……밸런타인이 코앞이라 아마 다른 곳도 상황은 비슷하겠죠.',
      );
      await era.printAndWait(
        '그렇게 말하며 에이신 플래시는 가볍게 한숨을 내쉬었다.',
      );
      await flash.say_and_wait(
        '뭐, 사실 원하는 상품은 인터넷으로 미리 구매해 두었으니까요. 현장에서 실제 상태를 확인하지 못하는 게 아주 큰 문제는 아니에요.',
      );
      await flash.say_and_wait('그러니 지금은 일단 돌아가죠.');
      era.drawLine();
      await flash.say_and_wait(
        '사실 일본에 온 뒤로 매년 밸런타인 때마다 선물을 주고받느라 사람들이 다투는 광경을 볼 때면 조금 신기하다는 생각이 들어요.',
      );
      await era.printAndWait(
        '트레센 학원으로 돌아가는 길에 에이신 플래시가 문득 감상을 털어놓았다.',
      );
      era.printButton('「독일에는 그런 풍습이 없어?」', 1);
      await era.input();
      await era.printAndWait(`${you.name}은(는) 조금 의아했다.`);
      await flash.say_and_wait(
        '정확히 말하면 있어요. 다만 초콜릿보다는 꽃이 주류죠.',
      );
      await era.printAndWait(
        `말을 이어가며 에이신 플래시는 검지를 펴서 ${you.name}에게 설명하기 시작했다.`,
      );
      await flash.say_and_wait(
        '게다가 선물을 주더라도 연인이 아닌 사람에게 주는 경우는 거의 없답니다.',
      );
      await flash.say_and_wait(
        '즉, 이른바 「의리 초콜릿」 같은 건 없다는 뜻이죠.',
      );
      era.printButton('「그렇구나.」', 1);
      await era.input();
      await era.printAndWait(
        '바꿔 말하면, 선물을 준다는 건 그 선물을 받는 대상이 분명 아주 소중한 존재라는 뜻이겠네.',
      );
      await era.printAndWait(
        `${you.name}은(는) 납득했다는 듯 고개를 끄덕였다.`,
      );
      await flash.say_and_wait(
        '가까운 예로, 아버지가 매년 밸런타인데이에 어머니께 장미 꽃다발을 드리는 모습을 봐 왔어요.',
      );
      await flash.say_and_wait('………');
      await era.printAndWait(
        '거기까지 말하더니 왠지 모르게 에이신 플래시는 갑자기 침묵에 빠졌다.',
      );
      await era.printAndWait(
        `${you.name}은(는) ${flash.sex}가 살짝 ${you.name} 쪽으로 시선을 돌린 듯하다고 느꼈다.`,
      );
      era.printButton('「무슨 일이야?」', 1);
      await era.input();
      await flash.say_and_wait('……아니요, 아무것도 아니에요.');
      await era.printAndWait(
        '다시 입을 연 에이신 플래시는 가볍게 고개를 저었다.',
      );
      await flash.say_and_wait(
        '어쨌든 독일에서는 고백을 목적으로 선물을 주는 일은 없어요.',
      );
      await flash.say_and_wait(
        '그렇게 한다면, 그건 이미 두 사람이 훨씬 깊은 관계라는 뜻이니까요.',
      );
      await flash.say_and_wait(
        '그런 관점에서 보면 오히려 일본에 밸런타인 날 고백하는 풍습이 있다는 게 저에게는 더 놀라워요.',
      );
      era.printButton('「분위기를 빌려 고백할 구실을 만드는 거 아닐까?」', 1);
      await era.input();
      await era.printAndWait(
        '고백에는 용기가 필요하니까. 밸런타인에 고백하는 풍습을 구실로 삼으면, 성공하든 실패하든 관계를 바꿔 볼 용기를 내기 좋잖아.',
      );
      await flash.say_and_wait(
        '진심을 전하기 위해 적절한 이유를 방패 삼는 건가요……',
      );
      await flash.say_and_wait('후훗~~ 꽤 괜찮은 아이디어네요.');
      await era.printAndWait(
        '무언가 영감을 얻은 듯 에이신 플래시는 생각에 잠긴 표정으로 고개를 끄덕였다.',
      );
      await flash.say_and_wait(
        `아, 학원 정문이 보이네요. 그럼 전 이어서 할 일이 있으니 이만 가 볼게요, ${callname}.`,
      );
      era.printButton('「조심해서 가.」', 1);
      await era.input();
      era.drawLine({ content: '밸런타인 당일' });
      await flash.say_and_wait(`Guten Morgen, ${callname}.`);
      await era.printAndWait(
        `트레이닝실 문을 열자마자 ${you.name}은(는) 책상 옆 꽃병에 꽂힌 싱싱하고 아름다운 파란색 꽃 한 송이를 발견했다.`,
      );
      era.printButton('「이 꽃은 뭐야?」', 1);
      await era.input();
      await flash.say_and_wait(
        '파란 수레국화예요. 독일의 국화라고 알려져 있는 꽃이죠.',
      );
      await era.printAndWait(
        `에이신 플래시는 미소 지으며 ${you.name}에게 설명했다.`,
      );
      await flash.say_and_wait(
        '지난번에 당신과 헤어진 뒤 돌아가는 길에 곰곰이 생각해 봤어요. 결국 지금 있는 곳은 일본이니까, 기념일을 보내는 방식도 로마에 가면 로마법을 따르듯 현지 풍습에 맞추는 게 좋겠다고 생각했거든요.',
      );
      era.printButton('「그럼 이게 네 밸런타인 선물이야?」', 1);
      await era.input();
      await flash.say_and_wait(
        `네. ${callname}은(는) 평소 생화를 두지 않으시니까, 이걸 선물로 드리면 주변 환경도 화사해질 테고, 또……`,
      );
      era.printButton('「또?」', 1);
      await era.input();
      await flash.say_and_wait(
        '또 무심코 이 꽃을 보셨을 때, 어쩌면 이 꽃을 준 사람을 떠올리게 될지도 모르니까요.',
      );
      await flash.say_and_wait('후후훗——');
      await era.printAndWait(
        '그 말을 마치고 에이신 플래시는 입을 가리고 웃었다. 꽤 즐거워 보이는 모습이었다.',
      );
    };
    f.title = title;
    return f;
  })(),
  before_sank_hai: (() => {
    const title = '도전의 길 · 다섯 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait('봄 삼관의 첫 관문인 오사카배가 곧 시작된다.');
      await flash.say_and_wait(
        '그럼 레이스 시작 전에 주의해야 할 상대를 다시 한번 확인해 볼까요.',
      );
      await era.printAndWait('레이스 전, 대기실.');
      await era.printAndWait('에이신 플래시는 출주 명단을 꺼내 들었다.');
      await flash.say_and_wait(
        `우선 후지 키세키 씨입니다. 오사카배의 거리가 ${flash.sex}의 주력 거리는 아니에요. 하지만 실력 있는 ${flash.sex}라면 이런 조건에서도 전황을 좌우할 수 있죠.`,
      );
      await flash.say_and_wait(
        `다음은 맨하탄 카페 씨입니다. 레이스 전 인터뷰에서 한 달 뒤에 있을 봄 텐노상에 운명적인 예감을 느낀다고 하더군요. 오사카배가 그 레이스의 전초전인 만큼, ${flash.sex} 역시 여기서 상당히 무서운 실력을 보여 줄 겁니다.`,
      );
      era.printButton('「세 번째는 에이신 플래시……」', 1);
      await era.input();
      await flash.say_and_wait('어라.');
      await flash.say_and_wait('후후후.');
      await era.printAndWait(
        `${you.name}의 갑작스러운 농담 섞인 말에 에이신 플래시는 즐겁게 웃었다.`,
      );
      await flash.say_and_wait(
        '설마 정말 그럴지도 모르겠네요. 작년에 비하면 저도 꽤 성장했으니까요.',
      );
      await flash.say_and_wait(
        '강적과 대결하고, 새로운 것을 배우고, 경험을 쌓는다. 그리고 다음 레이스에서 그 모든 것을 쏟아부어 달리며 한 걸음 더 성장한다.',
      );
      await flash.say_and_wait(
        '지금껏 겪어 온 모든 도전이 그래 왔듯, 오늘 오사카배도 예외는 아닐 거예요.',
      );
      era.printButton(
        '「높은 벽이란 네가 더 높이 오르기 위한 계단일 뿐이야.」',
        1,
      );
      await era.input();
      await flash.say_and_wait('네.');
      await era.printAndWait('에이신 플래시는 고개를 끄덕였다.');
      await flash.say_and_wait(
        '당당하게 장애물을 넘어서고, 결국 꿈을 이루어 돌아오겠어요……',
      );
      await flash.say_and_wait(`다녀올게요! ${callname}.`);
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = '팬 대감사제';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} festa ナカヤマフェスタ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (flash, gs, festa, you) => {
      await era.printAndWait('사월, 봄 팬 감사제가 찾아왔다.');
      await era.printAndWait(
        `오늘 ${flash.uma_sex_title}들은 팬들과 함께 즐길 수 있는 다양한 활동에 참여한다.`,
      );
      await you.say_as_passer_by_and_wait(
        `사회자`,
        `이제 G구역의 도전자들을 만나 보시죠. ${flash.couple_title}은 에이신 플래시, 나카야마 페스타, 골드 쉽입니다.`,
      );
      await you.say_as_passer_by_and_wait(
        `사회자`,
        `${flash.couple_title}들이 도전할 경기는 바로—— 팬 업고 달리기!`,
      );
      await you.say_as_passer_by_and_wait(
        `사회자`,
        `규칙은 간단합니다. 팬과 함께 가장 먼저 결승선을 통과하는 ${flash.uma_sex_title}가 우승입니다.`,
      );
      await you.say_as_passer_by_and_wait(
        '사회자',
        '과연 어떤 콤비가 승리를 거머쥐게 될지, 기대해 주십시오!',
      );
      await era.printAndWait(
        '현재 트레센 학원의 운동장은 사회자의 열정적인 멘트로 분위기가 달아올라 인파의 함성으로 가득 찼다.',
      );
      await era.printAndWait('그리고 바로——');
      await gs.say_and_wait(
        '최후의 승자는 당연히 이 몸이지! 고루시 님의 운명적인——',
      );
      await era.printAndWait(
        '신속한 움직임으로 선수를 친 골드 쉽이 앞줄에 있던 관객 한 명을 다짜고짜 끌어냈다.',
      );
      await gs.say_and_wait(`쌀•자•루! 너로 정했다!`);
      await you.say_as_passer_by_and_wait(
        '골드 쉽의 팬',
        '으아아아?! 갑자기 쌀가마니 들기냐고?! 너무 높고 빠르고 무서워!',
      );
      await festa.say_and_wait('음……');
      await era.printAndWait(
        '옆에 있던 나카야마 페스타도 이에 질세라 움직였다.',
      );
      await festa.say_and_wait(`야, 거기 너.`);
      await era.printAndWait(
        `${flash.sex}는 주위를 훑어보더니 인파 사이에 서 있던 팬 한 명을 지목했다.`,
      );
      await festa.say_and_wait(
        '운이 트일 것 같은 얼굴이네. 나랑 같이 좀 뛰어 보자고.',
      );
      await you.say_as_passer_by_and_wait(
        '나카야마 페스타의 팬',
        '어어, 와아…… 한 손으로 날 들어 올렸어…… 대단하다!',
      );
      await flash.say_and_wait('음……');
      await era.printAndWait(
        `${flash.couple_title}들과 달리 에이신 플래시는 무척 신중해 보였다.`,
      );
      await era.printAndWait(
        `${flash.sex}는 떠들썩한 인파 속을 잠시 관찰했다.`,
      );
      await flash.say_and_wait('저기…… 혹시 절 도와주실 수 있을까요?');
      await era.printAndWait(
        `결국 ${flash.sex}는 인파 구석에서 흑백 배색의 깃발을 들고 서 있던 관객을 선택했다.`,
      );
      await you.say_as_passer_by_and_wait(
        '에이신 플래시의 팬',
        '엣, 저…… 저 말인가요?',
      );
      await flash.say_and_wait(
        '네, 들고 계신 깃발의 배색, 제 승부복 배색이 맞죠?',
      );
      await you.say_as_passer_by_and_wait(
        '에이신 플래시의 팬',
        '그, 그렇긴 한데…… 저…… 제가 정말 괜찮을까요……',
      );
      await flash.say_and_wait('그럼, 실례하겠습니다.');
      await era.printAndWait(
        '팬의 대답을 들었는지 못 들었는지, 에이신 플래시는 팬의 손을 잡았다.',
      );
      await you.say_as_passer_by_and_wait(
        '에이신 플래시의 팬',
        '고, 공주님 안기!!!',
      );
      await era.printAndWait(
        `비명 속에서 에이신 플래시는 조금 겁먹은 팬을 안아 들고 먼저 치고 나간 두 사람을 뒤쫓았다.`,
      );
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        '사회자',
        '경기 종료! 이번 팬 업고 달리기의 우승자는—— 골드 쉽!!',
      );
      await era.printAndWait(
        '얼마 지나지 않아 골드 쉽의 환호성과 함께 즐거웠던 경기가 막을 내렸다.',
      );
      await you.say_as_passer_by_and_wait(
        '사회자',
        '팬마저 경악하게 만드는 질주로 거칠게 승리를 쟁취했습니다!',
      );
      await you.say_as_passer_by_and_wait(
        '에이신 플래시의 팬',
        '죄송해요, 정말 죄송해요! 저 때문에 방해가 돼서……',
      );
      await era.printAndWait(
        '자신이 응원하는 아이돌이 우승하지 못하자, 에이신 플래시의 팬은 연신 고개를 숙이며 자신의 탓으로 돌렸다.',
      );
      await flash.say_and_wait('아니요, 당신은 완벽하게 잘해 주셨습니다.');
      await era.printAndWait(
        '에이신 플래시는 고개를 젓고는 옆에서 우승을 만끽하는 골드 쉽을 보며 작게 한숨을 쉬었다.',
      );
      await flash.say_and_wait(
        '그리고 이런 종류의 경쟁에서 저분을 이기는 건 역시 꽤 어려운 일이니까요.',
      );
      await flash.say_and_wait('무엇보다——');
      await era.printAndWait(`${flash.sex}의 얼굴에 부드러운 미소가 번졌다.`);
      await flash.say_and_wait(
        `${flash.sex}처럼 소중한 팬을 거칠게 대할 수는 없으니까요.`,
      );
      await you.say_as_passer_by_and_wait('에이신 플래시의 팬', '!!!!');
      await you.say_as_passer_by_and_wait(
        '에이신 플래시의 팬',
        `에…… 에이신 ${flash.adult_sex_title}, 감사합니다!`,
      );
      await flash.say_and_wait(
        '후훗~ 제가 드려야 할 말씀인걸요. 저와 함께 경기에 참여해 주셔서 감사합니다.',
      );
      await era.printAndWait('에이신 플래시와 팬이 서로를 보며 미소 지었다.');
    };
    f.title = title;
    return f;
  })(),
  before_tenn_spr: (() => {
    const title = '도전의 길 · 여섯 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you トレーナー
     */
    const f = async (flash, you) => {
      await era.printAndWait('봄 삼관의 두 번째 관문인 텐노상 (봄).');
      await era.printAndWait(
        '장거리 G1 레이스로서 3200m라는 엄청난 길이를 자랑하며, 에이신 플래시가 이전에 뛰었던 아리마 기념보다 무려 700m나 더 길다.',
      );
      await era.printAndWait(
        `의심할 여지 없이 ${flash.sex}의 지구력을 시험하는 거대한 시련이다.`,
      );
      await flash.say_and_wait('정말 강하네요, 맨하탄 카페 씨는.');
      await era.printAndWait('레이스 전, 대기실.');
      await era.printAndWait('에이신 플래시의 목소리가 드물게 무거워졌다.');
      era.printButton(`「${flash.sex}가 가장 잘하는 분야니까.」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 당연히 ${flash.sex}가 무엇을 걱정하는지 알고 있었다.`,
      );
      await era.printAndWait(
        '장거리 경험이 부족한 에이신 플래시와 달리, 맨하탄 카페는 장거리에서 명성을 떨친 우마무스메이기 때문이다.',
      );
      await era.printAndWait(
        `국화상, 아리마 기념, 봄 텐노상까지 모두 ${flash.sex}가 이전에 쟁취한 영광들이다.`,
      );
      await era.printAndWait(
        '즉 이번 봄 텐노상은 자신에게 불리한 거리에서 상대의 장기와 맞서야 하는 셈이다.',
      );
      await era.printAndWait(
        '이런 상황에서 이번 레이스가 만만치 않으리라 느끼는 것은 지극히 당연한 일이었다.',
      );
      await flash.say_and_wait('그렇다고 해서 포기할 이유는 되지 못하죠.');
      await era.printAndWait(
        `에이신 플래시는 고개를 저었다. 어떤 상황이 닥치더라도 ${flash.sex}는 결코 물러서지 않는다.`,
      );
      era.printButton('「그러고 보니.」', 1);
      await era.input();
      await era.printAndWait(`${you.name}은(는) 문득 한 가지 일이 떠올랐다.`);
      era.printButton(
        '「어떤 기자가 이번 레이스가 끝나면 널 인터뷰하고 싶다고 하더라고.」',
        1,
      );
      await era.input();
      await flash.say_and_wait('어라, 인터뷰요?');
      era.printButton(
        '「가제는 『최강의 세대에서 피어난 눈부신 섬광』이었던 것 같아.」',
        1,
      );
      await era.input();
      await era.printAndWait(
        '작년 재팬컵부터 지난 오사카배까지 쟁쟁한 선배들을 상대로 보여 준 에이신 플래시의 활약은 대단했기에, 이번 레이스 결과를 미리 점치며 화제성을 선점하려는 기자의 의도는 충분히 이해할 만했다.',
      );
      await era.printAndWait(
        `${you.name}은(는) ${flash.sex}에게 그 제목의 의미를 상세히 설명해 주었다.`,
      );
      await flash.say_and_wait('눈부신 섬광이라……');
      await era.printAndWait(
        `${you.name}의 말을 들은 에이신 플래시는 깊이 생각하듯 고개를 끄덕였다.`,
      );
      await flash.say_and_wait('정말 간결하고 명확한 요약이네요.');
      await era.printAndWait(`${flash.sex}가 가볍게 웃었다.`);
      await flash.say_and_wait('하지만……');
      await era.printAndWait(
        `${you.name}은(는) ${flash.sex}의 표정이 순식간에 진지해지는 것을 보았다.`,
      );
      await flash.say_and_wait('저는 금방 사라지는 섬광과는 다릅니다.');
      await flash.say_and_wait(
        '마지막 순간까지, 누구보다 찬란하게 계속해서 달려나가겠어요.',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_23: (() => {
    const title = '미래의 일 · 첫 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (flash, you) => {
      await era.printAndWait(
        '봄 삼관의 세 번째 관문인 타카라즈카 기념이 다가오고 있다.',
      );
      await era.printAndWait(
        '상반기 레이스에서 연이어 활약한 에이신 플래시는 자연스럽게 출주 자격을 얻었다.',
      );
      await era.printAndWait('하지만……');
      await you.say_as_passer_by_and_wait(
        '의사',
        '몸 상태를 고려할 때, 당분간은 레이스에 출주하지 않는 것을 권장합니다.',
      );
      await era.printAndWait(
        '……레이스 전 정기 검진에서 에이신 플래시의 다리에 다시 한번 이상 징후가 발견되었다.',
      );
      await flash.say_and_wait('………');
      await era.printAndWait(
        '작년 일본 더비 이후에 겪었던 증상보다는 훨씬 가벼웠다.',
      );
      await era.printAndWait(
        '안전을 최우선으로 생각한다면, 눈앞의 타카라즈카 기념은 아쉽게도 포기할 수밖에 없었다.',
      );
      era.printButton('「플래시……」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}이(가) 검진 결과를 심각한 표정으로 바라보는 에이신 플래시를 어떻게 설득할지 생각하던 중이었다.`,
      );
      await flash.say_and_wait('알겠습니다. 그럼 푹 쉬도록 하죠.');
      era.printButton('「!」', 1);
      await era.input();
      await era.printAndWait(
        `뜻밖이었다. ${flash.sex}는 길게 숨을 내쉬며 그렇게 말했다.`,
      );
      await flash.say_and_wait('어라, 제가 이렇게 말하는 게 의외인가요?');
      await era.printAndWait(
        `이어서 놀란 ${you.name}의 표정을 본 ${flash.sex}는 고개를 갸웃하며 의아해했다.`,
      );
      era.printButton('「그냥 작년의 네 모습이 생각나서.」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 머릿속에 스친 생각을 솔직하게 털어놓았다.`,
      );
      await flash.say_and_wait('후후.');
      await era.printAndWait('그 말에 에이신 플래시는 가볍게 웃어 보였다.');
      await flash.say_and_wait(
        '작년 팔월 이전의 저였다면 정해 놓은 계획이 갑자기 바뀌는 것을 도저히 받아들이지 못했을 거예요.',
      );
      await flash.say_and_wait(
        '하지만 사람의 성격은 경험에 따라 변하는 법이잖아요?',
      );
      await era.printAndWait(
        `그렇게 말한 ${flash.sex}는 고개를 저으며 ${you.name}을(를) 지긋이 바라보았다.`,
      );
      await flash.say_and_wait(
        '지금의 저는 이미 깨달았습니다. 제 꿈은 저 혼자만의 것이 아니라는 사실을요. 그러니 모든 일을 신중하게 판단하고 결정해야 합니다.',
      );
      await flash.say_and_wait('부질없는 고집은 허용되지 않으니까요.');
      era.printButton('「긍정적인 변화네.」', 1);
      await era.input();
      await era.printAndWait(
        `에이신 플래시의 진지한 태도를 보며 ${you.name}은(는) 감탄했고, 동시에 짐을 내려놓은 듯 안도했다.`,
      );
      await flash.say_and_wait(
        '게다가 올해 가장 중요한 목표는 시월의 텐노상(가을)이에요.',
      );
      await flash.say_and_wait(
        '그때까지의 모든 계획은 완벽한 컨디션으로 출주하는 데 맞춰 세워야 해요.',
      );
      era.printButton('「그럼 그 이후에는?」', 1);
      await era.input();
      await flash.say_and_wait('……에?');
      await era.printAndWait(
        `묘한 호기심이 생긴 ${you.name}이(가) 뜬금없이 물었다.`,
      );
      await flash.say_and_wait('그…… 이후요?');
      await era.printAndWait(
        `트윙클 시리즈에서 영광을 쌓아 부모님의 자랑이 되는 것. 그것이 에이신 플래시의 꿈이다.`,
      );
      await era.printAndWait(
        `하지만 곰곰이 생각해 보니 ${flash.sex}는 ${you.name}에게 꿈을 이룬 뒤 무엇을 하고 싶은지는 한 번도 말한 적이 없었다.`,
      );
      await flash.say_and_wait('음……');
      await era.printAndWait(
        `${you.name}은(는) 에이신 플래시가 스스로 잘 계획하고 있을 거라 믿었지만, ${flash.sex}가 깊은 생각에 빠져 때때로 ${you.name}을(를) 힐끔거리는 모습을 보니……`,
      );
      await era.printAndWait(`${you.name}은(는) 조금 의구심이 들었다.`);
      era.printButton('「아직 생각해 보지 않은 거야?」', 1);
      await era.input();
      await flash.say_and_wait(
        '……아뇨, 사실 그건 처음부터 계획해 두었던 일입니다.',
      );
      await era.printAndWait(
        '에이신 플래시는 가볍게 고개를 저으며 말을 이었다.',
      );
      await flash.say_and_wait(
        '일본에 오던 그 순간부터 마음속으로 준비하고 있었어요. 꿈을 이루고, 인정받을 수 있는 이상적인 자신이 되었을 때 고향으로 돌아가 수년간 더 공부한 뒤 부모님의 케이크 가게를 물려받는 것이 제 계획이었죠.',
      );
      era.printButton('「멋진 미래네.」', 1);
      await era.input();
      await flash.say_and_wait(
        '모든 일이 순조롭게 풀린다면 정말 그렇겠죠. 하지만……',
      );
      era.printButton('「하지만?」', 1);
      await era.input();
      await flash.say_and_wait('………');
      await era.printAndWait(
        `에이신 플래시는 더 이상 말을 잇지 않고 침묵하며 ${you.name}을(를) 바라보았다.`,
      );
      await flash.say_and_wait('……아니요, 아무것도 아닙니다.');
      await era.printAndWait(`한참 뒤에야 ${flash.sex}가 다시 입을 열었다.`);
      await flash.say_and_wait(
        '아마도 당신과 만난 뒤 너무나 많은 일을 겪었기에, 다시 한번 시간을 들여 꼼꼼하게 계획을 세워야 할 것 같네요.',
      );
      era.printButton('「그렇구나.」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 그 말을 하는 ${flash.sex}의 눈 속에 ${you.name}이(가) 이해하지 못하는 감정이 일렁이는 것을 알아차렸다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '미래의 일 · 두 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you トレーナー
     */
    const f = async (flash, you) => {
      await era.printAndWait(
        '작년과는 달리, 이번에는 에이신 플래시의 다리 부상이 매우 빠르게 회복되었다.',
      );
      await era.printAndWait(
        `부상 정도가 가벼웠던 덕분이기도 하겠지만, ${you.name}은(는) 올해의 ${flash.sex}가 무척 긍정적인 마음가짐으로 요양에 임했기 때문이라고 믿었다.`,
      );
      await era.printAndWait(
        `덕분에 이번 여름 합숙이 시작되기 직전, ${flash.sex}의 몸은 완전히 건강해진 상태였다.`,
      );
      era.drawLine();
      await flash.say_and_wait(
        '어느덧 목표로 삼았던 가을 텐노상이 코앞으로 다가왔군요.',
      );
      await era.printAndWait(
        '월초, 합숙소에 짐을 푼 에이신 플래시는 창밖의 푸른 바다를 보며 감회에 젖은 듯 말했다.',
      );
      era.printButton(
        '「이번 여름 합숙을 실력을 쌓을 기회로 삼아 열심히 해 보자.」',
        1,
      );
      await era.input();
      await era.printAndWait(`그 모습을 보고 ${you.name}이(가) 격려를 건넸다.`);
      await flash.say_and_wait(
        '네! 다리 부상도 다 나았으니 훈련에는 전혀 지장이 없겠네요.',
      );
      await era.printAndWait(
        '에이신 플래시는 고개를 끄덕이고는 훈련장을 향해 걸어갔다.',
      );
      await flash.say_and_wait('하지만………');
      await flash.say_and_wait('……마지막이네요.');
      era.printButton('「?」', 1);
      await era.input();
      await era.printAndWait(
        `자리를 떠나기 전, ${you.name}은(는) ${flash.sex}가 작게 중얼거리는 소리를 들은 것 같았다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '미래의 일 · 세 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you トレーナー
     * @param {string} callname エイシンフラッシュのトレーナーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait('여름은 눈 깜짝할 새 흘러갔다.');
      await era.printAndWait(
        `이 마지막 여름 합숙 기간 동안 ${you.name}은(는) 에이신 플래시의 실력이 꾸준히 향상되는 것을 지켜보았다.`,
      );
      await era.printAndWait(
        `마치 마지막 조각을 채워 넣은 거울처럼, 지금의 ${flash.sex}는 상태가 완벽에 가까웠고 발휘할 수 있는 저력 또한 지난 몇 년 중 정점에 달해 있었다.`,
      );
      era.printButton(
        '(이 정도라면 가을 텐노상에서의 활약도 문제없겠어.)',
        1,
      );
      await era.input();
      await era.printAndWait(
        `그 모습을 보고 ${you.name}은(는) 만족스럽게 고개를 끄덕였다. ${flash.sex}가 곧 꿈을 이룰 수 있게 되었다는 기쁨이 가슴 깊은 곳에서 차올랐다.`,
      );
      await flash.say_and_wait(`${callname}?`);
      era.printButton('「무슨 일이야?」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}의 표정이 평소와 조금 다른 것을 눈치챘는지, 한 차례 훈련을 마친 에이신 플래시가 ${you.name}의 앞에 서서 고개를 갸웃하며 물었다.`,
      );
      await flash.say_and_wait(
        '요즘 저를 바라보시는 눈빛에 평소와는 다른 감정이 담겨 있는 것 같아서요.',
      );
      era.printButton('「사명을 곧 이룰 수 있어서일지도 모르겠네.」', 1);
      await era.input();
      await flash.say_and_wait('사명을 이룬다고요?');
      era.printButton('「네 꿈이 이루어지는 것을 지켜보는 일 말이야.」', 1);
      await era.input();
      await era.printAndWait(
        `트레이너란 ${flash.uma_sex_title}를 돕고, 이끌고, 관리하여 결국 ${
          flash.couple_title
        }들에게 원만한 결말을 선사하는 존재다. 그렇기에 ${you.name}은(는) 자신의 말이 틀리지 않았다고 생각했다.`,
      );
      await flash.say_and_wait('………');
      await era.printAndWait(
        `하지만 뜻밖에도 ${you.name}의 말을 들은 에이신 플래시는 기뻐하는 대신 생각에 잠겼다.`,
      );
      await flash.say_and_wait('그럼 그 후에는요?');
      await era.printAndWait(`한참 뒤에야 ${flash.sex}가 입을 열었다.`);
      era.printButton('「그 후에?」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 눈을 깜빡이며 에이신 플래시가 왜 이런 질문을 하는지 이해하지 못했다.`,
      );
      await flash.say_and_wait('바꿔 말하면, 당신의 꿈은 무엇인가요?');
      era.printButton('「당연히 네 꿈을 이루어 주는 거지.」', 1);
      await era.input();
      await era.printAndWait(
        `그 말을 듣고 ${you.name}은(는) 반사적으로 대답했다.`,
      );
      await flash.say_and_wait('후후.');
      await era.printAndWait(
        `${you.name}의 대답에 에이신 플래시는 작게 웃었다. 그렇게 답할 줄 알았다는 듯이.`,
      );
      await flash.say_and_wait('아니요, 제가 알고 싶은 건 당신만의 꿈이에요.');
      await era.printAndWait(`다음 순간, ${flash.sex}는 고개를 저었다.`);
      await flash.say_and_wait(
        '그런 사명 같은 걸 떠나서, 당신의 진심을 알고 싶어요.',
      );
      await era.printAndWait(
        `그렇게 말하는 에이신 플래시는 ${you.name}을(를) 뚫어지게 바라보았다. 그 푸른 눈동자 속에는 두 달 전 ${you.name}이(가) 이해하지 못했던 그 감정의 일렁임이 다시금 번뜩이고 있었다.`,
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `하지만 지금, 눈앞의 상대가 짓는 표정의 미묘한 변화를 살피던 ${you.name}에게는 문득 새로운 생각이 떠올랐다.`,
      );
      era.printButton('「조금만 더 생각할 시간을 줘.」', 1);
      await era.input();
      await era.printAndWait(`결국 ${you.name}은(는) 그렇게 말했다.`);
      era.drawLine();
      await flash.say_and_wait('………');
      era.printButton('「플래시?」', 1);
      await era.input();
      await era.printAndWait(
        `트레센 학원으로 돌아가는 차 안에서 ${you.name}은(는) 에이신 플래시가 줄곧 한곳을 응시하고 있는 것을 발견했다.`,
      );
      await flash.say_and_wait(
        '아무것도 아니에요. 그저 합숙 훈련장을 보고 있었어요.',
      );
      era.printButton('「훈련장을?」', 1);
      await era.input();
      await flash.say_and_wait('네, 저기서 정말 많은 것을 배웠으니까요.');
      await flash.say_and_wait(
        `예를 들면 ${callname}하고 여러 트레이닝을 거듭하며 제 실력을 한층 키운 것처럼요.`,
      );
      era.printButton('「그렇구나.」', 1);
      await era.input();
      await flash.say_and_wait(
        '그래서 이번이 이곳에 오는 마지막일 수도 있다고 생각하니, 마음 한구석에 아쉬움이 남네요.',
      );
      era.printButton('「이 소중한 추억을 가슴에 깊이 새겨 두자.」', 1);
      await era.input();
      await era.printAndWait(
        `에이신 플래시의 표정이 미묘해지자 ${you.name}은(는) 그녀를 다독이며 말했다.`,
      );
      await flash.say_and_wait('네.');
      await era.printAndWait(
        `${flash.sex}는 고개를 끄덕이고는 바로 몸을 돌려 ${you.name}을(를) 보았다.`,
      );
      await flash.say_and_wait(`그러고 보니, ${callname}.`);
      era.printButton('「무슨 일이야?」', 1);
      await era.input();
      await flash.say_and_wait(
        '만약 제가 꿈을 이룬 뒤에도 계속 일본에 남기로 한다면, 당신은 어떻게 생각하실 건가요?',
      );
      era.printButton('「……어?」', 1);
      await era.input();
      await era.printAndWait(
        `에이신 플래시의 갑작스러운 질문에 ${you.name}은(는) 허를 찔린 듯 당황했다.`,
      );
      await flash.say_and_wait(
        '부모님의 케이크 가게를 물려받는 건 이미 정해진 일이지만, 그 계획을 실현하는 도중에 어떤 이유로 일본에 한동안 머물게 될지도 모르니까요.',
      );
      await era.printAndWait(
        `자신의 질문이 너무 뜬금없었다는 걸 아는지 ${flash.sex}가 곧바로 설명을 덧붙였다.`,
      );
      era.printButton('「정말 기쁠 것 같아.」', 1);
      await era.input();
      await flash.say_and_wait('!');
      await era.printAndWait(
        `그러자 다음 순간 ${you.name}의 솔직한 대답에 ${flash.sex}는 잠시 멍해졌다.`,
      );
      await flash.say_and_wait('기쁘다…… 고요?');
      era.printButton('「네가 달리는 모습을 계속 지켜볼 수 있을 테니까.」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 고개를 끄덕이며 에이신 플래시에게 다정한 미소를 지어 보였다.`,
      );
      await flash.say_and_wait('……그렇군요.');
      await era.printAndWait(
        `에이신 플래시는 침묵에 빠졌고, ${you.name}은(는) ${flash.sex}가 자신과 마주 보던 시선을 슬쩍 피하는 것을 보았다.`,
      );
      era.printButton('「……플래시?」', 1);
      await era.input();
      await flash.say_and_wait('……아니요, 아무것도 아니에요.');
      await era.printAndWait(
        `잠시 후, 다시 입을 연 ${flash.sex}는 고개를 저었다.`,
      );
      await flash.say_and_wait(
        '그런 이야기는 나중에 다시 하도록 하죠. 어쨌든 지금 가장 중요한 건 가을 텐노상이에요.',
      );
      await era.printAndWait(
        `말을 마친 ${flash.sex}의 얼굴에는 이내 굳은 의지가 서렸다.`,
      );
      await flash.say_and_wait(
        '아버지와 어머니가 그곳에서 저를 기다리고 계시니까요——',
      );
      era.printButton('「가슴을 펴고 나아가자.」', 1);
      await era.input();
      await flash.say_and_wait('네!');
    };
    f.title = title;
    return f;
  })(),
  before_tenn_sho_s: (() => {
    const title = '찬란한 가을 · 첫 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you トレーナー
     * @param {string} callname エイシンフラッシュのトレーナーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        '모두의 기대를 한 몸에 받는 가을 텐노상이 드디어 시작되었다.',
      );
      await era.printAndWait('관객: 「오오오오——!!」');
      await you.say_as_passer_by_and_wait(
        '플래시의 어머니',
        '어머나, 이것이 일본의 G1 레이스인가요. 정말 열정적이네요.',
      );
      await you.say_as_passer_by_and_wait(
        `플래시의 아버지`,
        `가을 텐노상, 역사가 깊은 레이스 같군. 그리고 우리 Schatzi, ${flash.sex}는……`,
      );
      await you.say_as_passer_by_and_wait(
        `에이신 플래시의 어머니`,
        `${flash.sex}를 믿으세요. 힘내렴, 플래시!`,
      );
      era.drawLine();
      await flash.say_and_wait(
        '부모님께서 무사히 경기장에 도착하신 것 같네요.',
      );
      await era.printAndWait(
        `레이스 전 대기실, 에이신 플래시는 무사히 도착했다는 부모님의 메시지를 확인하며 안심한 듯 미소 지었다.`,
      );
      await flash.say_and_wait(
        '이걸로 모든 것이 계획대로 진행되고 있어요. 제 컨디션도 아주 좋으니, 남은 건……',
      );
      era.printButton('「플래시의 이름을 걸고, 이 레이스에서 승리하자.」', 1);
      await era.input();
      await flash.say_and_wait('네!');
      await era.printAndWait(
        '에이신 플래시는 힘차게 고개를 끄덕이며 자신감 넘치는 표정을 지었다.',
      );
      await flash.say_and_wait(
        '지난날 겪은 모든 일은 오늘 이 레이스의 결과를 위한 밑거름이었어요.',
      );
      await flash.say_and_wait('그러니 오늘만큼은……');
      await flash.say_and_wait('반드시 이겨야만 해요!');
      era.printButton('「모든 이에게 네 신념을 증명해 보여!」', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_win_s: (() => {
    const title = '찬란한 가을 · 두 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you トレーナー
     * @param {string} callname エイシンフラッシュのトレーナーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await you.say_as_passer_by_and_wait(
        '사회자',
        '이번 가을 텐노상의 우승자는—— 에이신 플래시!!!',
      );
      await you.say_as_passer_by_and_wait(
        `사회자`,
        `${flash.sex}를 축하해 주십시오!!!`,
      );
      await you.say_as_passer_by_and_wait(
        `관중`,
        `에이신 플래시! 축하해, ${you.name}!!!`,
      );
      await flash.say_and_wait('후우…… Juhu! Geschafft! 해냈습니다!');
      await era.printAndWait(
        '눈부신 광채가 쏟아지는 도쿄 경마장에서, 화려한 모습으로 가장 먼저 결승선을 통과한 에이신 플래시가 환호하는 관중석을 향해 열렬히 손을 흔들었다.',
      );
      await flash.say_and_wait('응원해 주신 여러분, 정말 감사합니다!');
      await era.printAndWait(
        `${flash.sex}의 미소는 그 어느 때보다 찬란했다. 수많은 시련을 겪고 이상을 실현한 뒤에야 터져 나온, 억누를 수 없는 기쁨이었다.`,
      );
      await flash.say_and_wait(
        `더비 ${flash.uma_sex_title}가 되었던 이 도쿄 경기장에서 다시 한번 승리할 수 있다니, 정말로……`,
      );
      await you.say_as_passer_by_and_wait(
        `플래시의 어머니`,
        `축하해, 플래시, ${you.name}.`,
      );
      await flash.say_and_wait('!');
      await you.say_as_passer_by_and_wait(
        `플래시의 아버지`,
        `정말 훌륭한 레이스였다. ${you.name}은(는) 역시 우리의 자랑이구나.`,
      );
      await flash.say_and_wait('!!');
      await era.printAndWait(
        `그때, 관중석 앞쪽에서 바다를 건너와 ${
          flash.sex_code - 1 ? '딸' : '아들'
        }이 달리는 모습을 보길 간절히 바랐던 부모님이 일어서서 ${flash.sex}에게 박수를 보내며 축하해 주었다.`,
      );
      await you.say_as_passer_by_and_wait(
        `플래시의 어머니`,
        `물론 아무것도 하지 않아도 ${you.name}은(는) 우리에게 가장 사랑스럽고 소중한 보물이란다. 그건 언제까지나 변하지 않아.`,
      );
      await you.say_as_passer_by_and_wait(
        `플래시의 아버지`,
        `무엇보다 ${you.name}이(가) 자신의 길을 끝까지 걸었다는 사실이 가장 값지구나.`,
      );
      await you.say_as_passer_by_and_wait(
        `플래시의 아버지`,
        `그러니 한 사람의 인간으로서 ${you.name}에게 경의를 표하마.`,
      );
      await flash.say_and_wait('아버지…… 어머니……');
      era.printButton(
        '「축하해, 플래시. 꿈을 이루었구나. 너는 나의 자랑이기도 해.」',
        1,
      );
      await era.input();
      await flash.say_and_wait('트레이너님까지……');
      await flash.say_and_wait('여러분, 감사합니다!');
      await era.printAndWait(
        '말을 마치며 에이신 플래시는 우아하게 허리를 굽혀 인사했다. 그러고는 잔디 위에 한쪽 무릎을 꿇었다.',
      );
      await flash.say_and_wait('후우——');
      await era.printAndWait(
        `${flash.sex}는 깊은 숨을 들이쉬며, 마음속에 미리 준비해 둔 대사를 읊기 시작했다.`,
      );
      await flash.say_and_wait(
        '오늘 이 승리를 거두기까지, 제가 진심으로 존경하는 몇 분에게 감사의 인사를 전하고 싶습니다.',
      );
      await flash.say_and_wait(
        '엄격하면서도 자상하신 아버지와 부드럽고 사랑 넘치시는 어머니, 그리고…… 언제나 길을 가리키는 이정표가 되어 제 곁에서 아낌없이 저를 도와주신 트레이너님.',
      );
      await flash.say_and_wait(
        '그분들의 도움이 없었더라면 지금의 저는 결코 이 자리에 서지 못했을 것입니다.',
      );
      await flash.say_and_wait(
        '그러니 부디, 이 영광스러운 자리에서 그분들에게 깊은 경의를 표할 수 있도록 허락해 주십시오.',
      );
      await era.printAndWait(
        '에이신 플래시가 깊게 고개를 숙였고, 하늘을 가득 메운 환호성은 실체화된 빛이 되어 내려앉았다.',
      );
      await era.printAndWait(
        '그것은 영광을 안고 돌아온 기사에게 주어지는 마땅한 보상이었다.',
      );
      era.drawLine();
      await flash.say_and_wait(`다녀왔습니다, ${callname}.`);
      era.printButton('「어서 와, 플래시.」', 1);
      await era.input();
      await era.printAndWait('레이스 후, 대기실.');
      await era.printAndWait(
        `방으로 돌아온 에이신 플래시가 한결 가벼워진 표정으로 ${you.name}에게 인사를 건넸다.`,
      );
      era.printButton('「부모님과의 대화는 잘 끝났어?」', 1);
      await era.input();
      await era.printAndWait(`그 모습을 보고 ${you.name}이(가) 물었다.`);
      await era.printAndWait(
        `에이신 플래시가 경기장에서 나오자마자 부모님과 서로 껴안고 있었기에, 곁에 서 있던 ${you.name}은(는) 가족의 재회를 방해하기 미안해 감정을 충분히 나눈 뒤에 돌아올 ${flash.sex}를 대기실에서 기다리고 있었다.`,
      );
      await flash.say_and_wait('네.');
      await era.printAndWait(
        '에이신 플래시는 아주 행복한 표정으로 고개를 끄덕였다.',
      );
      await flash.say_and_wait(
        '제가 독일을 떠나온 몇 년 동안 있었던 일들을 아버지, 어머니와 간단히 나누었어요.',
      );
      await flash.say_and_wait(
        '정말 즐거운 시간이었어요. 두 분의 새로운 이야기를 듣는 것도, 제 이야기를 들려드리는 것도요.',
      );
      await flash.say_and_wait(
        '가능하다면 언제까지나 이렇게 지내고 싶을 정도로요.',
      );
      await era.printAndWait(`${flash.sex}는 여운에 잠긴 듯 감탄했다.`);
      await flash.say_and_wait(
        '하지만 아쉽게도 시간이 늦어 부모님은 먼저 숙소로 돌아가 쉬셔야만 했네요.',
      );
      era.printButton(
        '「너도 오늘 고생했으니 가서 푹 쉬어. 남은 일들을 처리할 시간은 앞으로 아주 넉넉하니까.」',
        1,
      );
      await era.input();
      await era.printAndWait(
        '가을 텐노상을 제패하며 부모님의 자랑이 된 에이신 플래시는 이미 자신의 꿈을 이루었다.',
      );
      await era.printAndWait(
        `바꿔 말하면 ${flash.sex}에게 이제 트윙클 시리즈에 계속 참가해야 할 명분은 남아 있지 않았다. 이런 상황이라면 미래에는 가족과 함께 보낼 시간이 기다리고 있을 터였다.`,
      );
      await flash.say_and_wait(
        '……당신 말이 맞아요. 그래서 지금 그걸 위해 온 것이니까요.',
      );
      era.printButton('「?」', 1);
      await era.input();
      await era.printAndWait(
        `에이신 플래시는 당연히 ${you.name}의 말에 담긴 함축적인 의미를 알아챘다.`,
      );
      await era.printAndWait(
        `그러자 다음 순간, ${you.name}은(는) ${flash.sex}가 얼굴에서 미소를 거두는 것을 보았다.`,
      );
      await flash.say_and_wait(
        `당신에게 드리고 싶은 말씀이 있습니다, ${callname}.`,
      );
      era.drawLine();
      await flash.say_and_wait(
        '올해 유월에 당신은 제가 꿈을 이룬 뒤 무엇을 하고 싶은지 물으셨어요.',
      );
      await era.printAndWait(
        '하얀 전등 빛이 에이신 플래시의 아름다운 얼굴을 비추었다.',
      );
      await era.printAndWait(`${flash.sex}는 ${you.name}을(를) 응시했다.`);
      era.printButton('「부모님의 케이크 가게를 물려받고 싶다고 했었지.」', 1);
      await era.input();
      await flash.say_and_wait('네, 그건 처음부터 정해 두었던 일이었어요.');
      await flash.say_and_wait(
        '하지만 동시에 말씀드렸죠. 당신과 만난 뒤 겪은 일이 너무 많아, 시간을 들여 다시 계획을 세워야겠다고요.',
      );
      era.printButton('「계획은 어떻게 정했어?」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 에이신 플래시의 말에 따라 질문했다.`,
      );
      await flash.say_and_wait('………');
      await era.printAndWait(
        `이어서 ${you.name}은(는) ${flash.sex}가 가볍게 한숨 짓는 것을 들었다.`,
      );
      await flash.say_and_wait(
        '한 말은 반드시 지키고, 받은 은혜는 반드시 갚는 것. 그것이 저의 철칙입니다.',
      );
      await flash.say_and_wait(
        '당신의 도움으로 저는 부모님께 인정받았고, 한 사람의 몫을 다하는 인간으로 성장했습니다. 그것은 제가 간절히 바라왔던 소망이었어요.',
      );
      await era.printAndWait(
        `말을 하며 에이신 플래시는 손을 뻗어, ${
          flash.sex
        }가 ${flash.uma_sex_title}로서 지금까지 세운 모든 계획이 담긴 노트를 ${you.name}에게 건넸다.`,
      );
      await flash.say_and_wait(
        '솔직히 지금도 이 사실을 마주할 때면 조금은 현실감이 없다는 생각이 들곤 합니다.',
      );
      await flash.say_and_wait(
        '물론 그랬기에 저에 대한 당신의 헌신이 얼마나 컸는지가 더욱 와닿지만요.',
      );
      await flash.say_and_wait('그러니 아주 작은 보답이라도 하고 싶어요.');
      await era.printAndWait(
        `${flash.sex}는 자신의 신념을 강조하듯 말투에 힘을 주었다.`,
      );
      await flash.say_and_wait(
        '보답으로서 저 역시 당신을 돕고 싶습니다. 당신의 꿈을 제가 이루어 드리고 싶어요.',
      );
      era.printButton('「그게 이전에 내 꿈을 물어봤던 이유였어?」', 1);
      await era.input();
      await flash.say_and_wait('네.');
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `에이신 플래시의 이 확고한 태도에 ${you.name}은(는) 침묵에 빠졌다.`,
      );
      await flash.used_to_say_and_wait(
        '영광을 쌓아서, 부모님께서…… 저를 자랑스러워하시게 하고 싶어요.',
      );
      await era.printAndWait(
        `${you.name}은(는) 모든 것의 시작이었던 그 선발 레이스에서 ${flash.sex}가 ${you.name}에게 했던 말을 다시 한번 떠올렸다.`,
      );
      await era.printAndWait(
        `처음 ${you.name}이(가) ${flash.sex}의 담당 트레이너가 되기로 한 것은 단순히 ${flash.sex}의 적극적인 부탁 때문이었다.`,
      );
      await you.used_to_say_and_wait('(「정말 기쁠 것 같아.」)');
      await you.used_to_say_and_wait(
        '(「네가 달리는 모습을 계속 지켜볼 수 있을 테니까.」)',
      );
      await era.printAndWait(
        `하지만 시간이 흘러 함께 지내며, ${you.name}은(는) 서서히 ${flash.sex}의 본질적인 매력에 끌리게 되었다.`,
      );
      await era.printAndWait(
        '레이스 시작 전 어떤 상대 앞에서도 두려움 없는 용기, 레이스 도중 미스터 시비마저 감탄하게 만든 승부욕, 그리고 레이스 후 결과가 어떠하든 냉정하게 대처하며 정진하는 정신까지.',
      );
      await era.printAndWait(
        '이런 에이신 플래시만의 정신은 실로 매혹적이었다.',
      );
      await era.printAndWait(
        `그렇기에 합숙소에서 돌아오는 차 안에서 ${flash.sex}가 일본에 계속 남으면 어떻게 생각하느냐고 물었을 때 ${you.name}은(는) 숨김없이 자신의 진심을 털어놓았던 것이다.`,
      );
      era.printButton('「내 꿈이라면……」', 1);
      await era.input();
      await era.printAndWait('거기까지 생각이 닿자, 답은 명확해졌다.');
      await era.printAndWait(
        `${you.name}은(는) 당시 에이신 플래시의 눈동자 속에 서려 있던 깊은 일렁임이 무엇을 뜻하는지 마침내 이해했다.`,
      );
      era.printButton('「나는, 네가 계속 달리는 모습을 보고 싶어.」', 1);
      await era.input();
      await flash.say_and_wait('!!!');
      await era.printAndWait(
        `대기실 안, 이제는 미련이 없을 터였던 타국에서 온 ${flash.teen_sex_title}는 ${you.name}의 말을 듣고 눈을 크게 떴다.`,
      );
      await flash.say_and_wait('…………');
      await flash.say_and_wait('훗…… 후훗……');
      await era.printAndWait(
        `잠시 침묵하던 ${flash.sex}가 갑자기 소리 내어 웃기 시작했다.`,
      );
      await flash.say_and_wait('후후후후——');
      await flash.say_and_wait('알겠습니다. 그것이 당신의 바람이라면.');
      await era.printAndWait(
        `가슴속 깊은 곳에서 치밀어 오른 감정을 완전히 쏟아내고 나서야 ${flash.sex}는 다시 ${you.name}을(를) 바라보았다.`,
      );
      await era.printAndWait('푸른 눈동자에는 다정함이 가득 담겨 있었다.');
      await flash.say_and_wait('그럼……');
      await flash.say_and_wait('당신의 뜻대로 하겠어요, 나의 트레이너님.');
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_s: (() => {
    const title = '미래의 일 · 네 번째';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you トレーナー
     * @param {string} callname エイシンフラッシュのトレーナーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        '트윙클 시리즈에서 매년 최고의 열기를 자랑하는 행사, 아리마 기념이 오늘 개최된다.',
      );
      await flash.say_and_wait('후우…… 레이스가 곧 시작되겠네요.');
      await era.printAndWait(
        `레이스 전 대기실. 에이신 플래시는 시간을 확인한 뒤 자리에서 일어나 ${you.name}에게 인사를 건넸다.`,
      );
      await flash.say_and_wait(
        '후후. 그러고 보니 처음이네요. 자신의 꿈을 전제로 하지 않고 레이스에 참가하는 건.',
      );
      await era.printAndWait(
        `그러더니 이내 ${flash.sex}는 장난스럽게 미소를 지어 보였다.`,
      );
      era.printButton('「한 달간의 휴가는 어땠어?」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) ${flash.sex}의 어깨를 두드리며 다정하게 물었다.`,
      );
      await era.printAndWait(
        '꿈을 이룬 뒤여서일까, 레이스에 대한 집착이 조금은 옅어진 듯했다. 에이신 플래시는 원래 예정했던 재팬컵에 나가는 대신, 한 달간의 여유 시간을 이용해 멀리서 오신 부모님과 일본 곳곳을 여행하며 즐겁게 보냈다.',
      );
      await flash.say_and_wait('네, 몸과 마음이 완전히 재충전된 느낌이에요.');
      await era.printAndWait(
        '에이신 플래시는 고개를 끄덕이며 시선을 멀리 옮겼다.',
      );
      await flash.say_and_wait(
        '아마 지금 부모님께서도 집에서 이 아리마 기념의 결과를 지켜보고 계시겠죠.',
      );
      era.printButton(
        '「부모님이 보시는 앞에서 다시 한번 승리를 거머쥐자고.」',
        1,
      );
      await era.input();
      await flash.say_and_wait('네!');
      await era.printAndWait(
        `${flash.sex}는 자신 있게 대답하고는 문밖으로 향했다.`,
      );
      await flash.say_and_wait(`그러고 보니, ${callname}.`);
      era.printButton('「무슨 일이야?」', 1);
      await era.input();
      await era.printAndWait(
        `하지만 문밖으로 나가기 전, ${flash.sex}는 ${you.name}에게 아직 할 말이 남은 듯했다.`,
      );
      await flash.say_and_wait(
        '다시 한번 말씀해 주시겠어요? 작년 사츠키상 전, 대기실에서 제게 해 주셨던 그 말을요.',
      );
      era.printButton('「사츠키상 때 한 말?」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 눈을 깜빡이다가 이내 에이신 플래시가 무엇을 말하는지 알아차렸다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) ${flash.sex}에게 해 준 말은 무수히 많았지만, 격려든 이정표든 지금 이 순간 가장 어울리는 말은 오직 이것뿐이었다.`,
      );
      era.printButton('「해야 할 일을 하고……」', 1);
      await era.input();
      await flash.say_and_wait('할 수 있는 힘을 다해라.');
      await flash.say_and_wait('후후후.');
      era.printButton('「하하.」', 1);
      await era.input();
      await era.printAndWait(
        `서로의 말을 자연스럽게 이어 주고는, ${you.name}과(와) 플래시는 동시에 웃음을 터뜨렸다.`,
      );
      await flash.say_and_wait('그럼, 다녀오겠습니다.');
      await era.printAndWait(
        `그렇게 유쾌한 분위기 속에서 ${flash.sex}는 힘차게 발걸음을 내디뎌 경기장으로 향했다.`,
      );
      era.printButton('「파이팅!」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) ${flash.sex}의 뒷모습을 보며 힘차게 손을 흔들었다.`,
      );
      await era.printAndWait('참으로 아름다운 광경이었다.');
      await era.printAndWait(
        `약속한 대로, ${you.name}은(는) 서로를 지켜보는 이 관계가 앞으로도 오랫동안 계속될 것임을 믿어 의심치 않았다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  os_black_treasure: (() => {
    const title = '칠흑의 보물';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you トレーナー
     * @param {string} callname エイシンフラッシュのトレーナーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        `혼자 쇼핑몰에서 생활용품을 사려던 중, ${you.name}은(는) 문득 근처에서 잔뜩 시무룩한 표정을 짓고 있는 에이신 플래시를 발견했다.`,
      );
      era.printButton('「무슨 일이야?」', 1);
      await era.input();
      await era.printAndWait(
        `그 모습을 보고 ${you.name}은(는) 궁금해서 물었다.`,
      );
      await flash.say_and_wait(`아, ${callname}.`);
      await era.printAndWait(
        `목소리의 주인이 ${you.name}인 것을 알아채자 에이신 플래시는 조금 놀란 듯했다.`,
      );
      await flash.say_and_wait('아니요, 아무것도 아니에요.');
      await era.printAndWait(
        `그러더니 다음 순간, ${flash.sex}는 다시 고개를 저었다.`,
      );
      await flash.say_and_wait(
        '그저 고향에서 먹었던 요리가 갑자기 생각나서, 일본에서 식재료를 찾아 재현해 보려고 했거든요.',
      );
      await flash.say_and_wait('다만……');
      await era.printAndWait(
        '거기까지 말하자 에이신 플래시의 얼굴에 순식간에 고민하는 기색이 스쳤다.',
      );
      era.printButton('「비싼 거야?」', 1);
      await era.input();
      await era.printAndWait(
        `그 기색을 재빨리 알아챈 ${you.name}은(는) ${flash.sex}가 풀이 죽은 이유를 대략 짐작했다.`,
      );
      await flash.say_and_wait('……네.');
      await era.printAndWait(
        `그 말에 ${flash.sex}는 잠시 침묵하더니, 이내 천천히 고개를 끄덕였다.`,
      );
      await flash.say_and_wait(
        '요리에 필요한 고급 캐비아가 너무 비싸서 이번 달 용돈으로는 살 수가 없어요.',
      );
      await flash.say_and_wait(
        '더 저렴한 다른 브랜드를 쓸 수도 있겠지만, 그렇게 하면 제가 처음에 그리워했던 그 맛이 나질 않거든요.',
      );
      await era.printAndWait(
        `말을 마친 뒤, ${you.name}은(는) ${flash.sex}가 가볍게 한숨 쉬는 것을 보았다.`,
      );
      await era.printAndWait(
        `지금 잔뜩 풀이 죽은 에이신 플래시를 보며 ${you.name}은(는) 결심했다——`,
      );
      era.printButton('「순리에 맡긴다」', 1);
      if (era.get('flag:当前马币') > 50) {
        era.printButton(`「${flash.sex}에게 돈을 빌려준다」`, 2);
      }
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name}의 마음속에 눈앞의 상대를 위해 대신 사 줄까 하는 생각도 스쳤지만, 곰곰이 생각해 보면 에이신 플래시의 성격상 그런 제안을 받아들일 리 없었다.`,
        );
        await era.printAndWait(
          `결국 ${you.name}은(는) 그저 ${flash.sex}가 울상을 지으며 쇼핑몰을 떠나는 것을 지켜볼 뿐이었다.`,
        );
      } else {
        await era.printAndWait(
          `${you.name}의 마음속에 눈앞의 상대를 위해 대신 사 줄까 하는 생각도 스쳤지만, 곰곰이 생각해 보면 에이신 플래시의 성격상 그런 제안을 받아들일 리 없었다.`,
        );
        await flash.say_and_wait('네?');
        await era.printAndWait('하지만 그렇다고 방법이 없는 것은 아니었다.');
        await flash.say_and_wait(
          `${callname}, 그 말씀은…… 당신이 대신 지불해 주시겠다는 뜻인가요?`,
        );
        await era.printAndWait(
          `${you.name}의 제안에 에이신 플래시는 몇 초간 멍해졌다.`,
        );
        await flash.say_and_wait('호의는 감사하지만, 역시 그런 일은 좀……');
        await era.printAndWait(
          `이내 정신을 차린 ${flash.sex}는 격하게 고개를 저으며 강한 거부감을 드러냈다.`,
        );
        era.printButton('「그저 앞으로 받을 용돈을 미리 당겨 쓰는 것뿐이야.」', 1);
        await era.input();
        await era.printAndWait(
          `그 모습에 ${you.name}은(는) 에이신 플래시에게 「빌려주는 것」과 「그냥 주는 것」의 차이를 거듭 강조했다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 단순한 선물보다는 이런 공정한 형식이 ${flash.sex}가 더 쉽게 받아들일 수 있으리라 믿었다.`,
        );
        await flash.say_and_wait('으음……');
        await era.printAndWait(
          `과연 ${you.name}의 말을 듣자 ${flash.sex}의 얼굴에 망설이는 기색이 떠올랐다.`,
        );
        await flash.say_and_wait('……알겠습니다.');
        await era.printAndWait(
          `결국 다시 고민한 끝에 ${flash.sex}는 고개를 끄덕이며 ${you.name}의 도움을 받아들였다.`,
        );
        await flash.say_and_wait('이 은혜는 꼭 잊지 않을게요.');
        await era.printAndWait(`${flash.sex}가 정중하게 말했다.`);
        await flash.say_and_wait('약속하겠습니다.');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
