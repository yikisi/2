/**
 * @file マルゼンスキー - 育成
 * @author 黑奴一号
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} train トレーニングの基礎能力（すでに i18n 済み）
   */
  get_ts_content(maru, train) {
    era.print([
      maru.get_colored_name(),
      '의 ',
      train,
      ' 트레이닝이 무사히 끝났다',
    ]);
  },
  ts_add: (() => {
    const title = '추가 자율 트레이닝';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`${maru.name}의 트레이닝이 끝난 뒤.`);
      await maru.say_and_wait(`헬로~? ${callname}, 이따 시간 있어?`);
      await maru.say_and_wait('이런 날씨에 달리면 정말 즐겁겠지?');
      await maru.say_and_wait(
        '튀어 오르는 물보라, 빗속에 흐릿해진 시야…… 이럴 때는 색다른 바람을 느낄 수 있을 것 같아.',
      );
      await maru.say_and_wait(
        '오늘은 의욕 넘치게 달렸잖아! 이대로 연습을 끝내기는 아까워♪',
      );
      await maru.say_and_wait(`빗속을 달리는 것도 나쁘지 않아♪`);
      await maru.say_and_wait(`이 정도 비는 아침 샤워나 마찬가지잖아.`);
      await maru.say_and_wait('지금은 저녁 샤워라고 해야 하나……?');
      await maru.say_and_wait('아직 몸이 뜨거운걸.');
      await maru.say_and_wait(
        `지금이야말로 내가 나설 때 아닐까? ${callname} 생각은 어때?`,
      );
      era.printButton('「좋아, 달리자.」', 1);
      era.printButton('「지금은 안 달리는 편이 좋겠어!」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `그래야지! 오늘은 밤새 달리는 거야. 후후, 하늘도 기뻐하는 것 같네.`,
        );
        await maru.say_and_wait(`그럼 출발하자. 바람의 세계로.`);
        await era.printAndWait('그렇게 추가 트레이닝은 빗속에서 계속되었다.');
      } else {
        await maru.say_and_wait('어머, 아쉬워라.');
        await maru.say_and_wait('모처럼 좋은 기회인데……!');
        await maru.say_and_wait(
          '그래도 어쩔 수 없지. 체력을 아끼는 것도 중요하니까……!',
        );
        await maru.say_and_wait('트레이너가 감기에 걸려도 곤란하고.');
        await maru.say_and_wait(
          '더 조르는 것도 좋지 않으니까, 대신 빗속 드라이브에 함께해 줘. 단둘이서♪',
        );
        era.println();
        await era.printAndWait(
          `빗속 드라이브로 두 사람 모두 지쳤지만, ${maru.name}의 표정은 무척 즐거워 보였다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fail: (() => {
    const title = '몸을 소중히';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     * @param {boolean} fail_again 頑張るを選んだ場合に再失敗するか
     */
    const f = async (maru, you, callname, fail_again) => {
      await maru.say_and_wait(`으음, 발목을 삐었나 봐.`);
      await era.printAndWait(
        `${maru.name}는 앞선 트레이닝에서 발목을 접질리고 말았다.`,
      );
      await maru.say_and_wait(`괜찮아♪ 이 정도는 금방 나을 거야.`);
      era.println();
      era.printButton('「가벼운 부상이라도 제대로 쉬어야 해!」', 1);
      era.printButton('「이게 바로 청춘이지, 트레이닝으로 돌아가자!」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `Ok♪ ${callname}, 이렇게 신경 써 주다니, 사실 나한테 관심 있는 거야?`,
        );
        await maru.say_and_wait(
          `그나저나 다치다니, ${
            maru.elder_sibling_sex_title
          }답지 않네. 테이오도 그렇고 ${maru.couple_title}한테……`,
        );
        era.printButton('「그렇지 않아!」', 1);
        await era.input();
        await maru.say_and_wait(
          `응…… 맞아. ${
            maru.elder_sibling_sex_title
          }, 충분히 반성했어. 푹 쉬고 나면 다시 ${
            maru.elder_sibling_sex_title
          }다운 모습을 보여 줄게!`,
        );
        await era.printAndWait(`${maru.name}는 얌전히 보건실에서 쉬었다.`);
      } else if (fail_again) {
        await maru.say_and_wait(`어머, ${callname}은(는) 말도 잘하네♪`);
        await maru.say_and_wait('더 칭찬해 줘도 괜찮아.');
        era.printButton(
          `「${
            maru.name
          }, 아름답고 강한 ${maru.uma_sex_title}, 붉은 불꽃처럼 멋지고 화려한 ${
            maru.elder_sibling_sex_title
          }야!」`,
          1,
        );
        await era.input();
        await maru.say_and_wait(
          '어머, 그렇게 말하니 쑥스럽네♪ 그럼 충분히 쉬었으니 트레이닝으로 돌아가자!',
        );
        era.printButton('「바로 그 기세야!」', 1);
        await era.input();
        await maru.say_and_wait('아야!');
        await era.printAndWait(
          '트레이닝 도중 부상이 악화되어 다시 병실에서 쉬게 되었다.',
        );
      } else {
        await maru.say_and_wait('하나, 둘, 셋, 넷, 이 정도는 거뜬하지♪');
        await maru.say_and_wait('다섯, 여섯, 일곱, 여덟, 아무렇지도 않아♪');
        await maru.say_and_wait(`${you.name}, 내 점프 어때?`);

        era.printButton('「……눈부셔!」', 1);
        await era.input();
        await maru.say_and_wait(
          '후후♪ 이 기세로 후배들에게 멋지고 화려한 모습을 보여 주자!',
        );

        era.printButton(`「${maru.name}、${maru.name}！」`, 1);
        await era.input();
        await era.printAndWait(
          `기적처럼 ${maru.name}는 컨디션을 회복하고 다시 트레이닝에 복귀했다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fumble: (() => {
    const title = '무리는 금물';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     * @param {boolean} fail_again 頑張るを選んだ場合に再失敗するか
     */
    const f = async (maru, you, callname, fail_again) => {
      await maru.say_and_wait(`으, 아파.`);
      await era.printAndWait(
        `${maru.name}는 앞선 트레이닝에서 발목을 접질리고 말았다.`,
      );
      await maru.say_and_wait(`나도 이제 한계야.`);
      await maru.say_and_wait(
        '그런데 다음 레이스도 얼마 안 남았고…… 얼른 기운을 차려야겠어!',
      );
      era.println();

      era.printButton('「서두르지 말고 천천히 치료하자.」', 1);
      era.printButton('「때로는 특단의 처방도 필요해!」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`그래? 조금 쉬면 괜찮아질 줄 알았는데!`);
        era.printButton('「부상이 악화되면 큰일이야.」', 1);
        await era.input();
        await maru.say_and_wait(
          '……알겠어. 치료하기로 했으니 완전히 낫는 걸 목표로 해야지!',
        );
        await maru.say_and_wait('그럼 기운을 내게 젤라토라도 사러 가자.');
        era.printButton('「그래, 다리를 또 다치지 않게 조심해.」', 1);
        await era.input();
        await maru.say_and_wait(
          `어머, ${callname}은(는) 다정하네. ${
            maru.elder_sibling_sex_title
          }인 내가 아니라 후배들이었다면 단번에 반했을지도 모르겠어~`,
        );

        era.printButton(`「${maru.name}, 또 농담하는 거야?」`, 1);
        await era.input();
        await maru.say_and_wait('흥흥♪');
        await era.printAndWait(
          `${maru.name}가 완전히 나을 때까지 트레이닝은 잠시 쉬기로 했다.`,
        );
      } else {
        await era.printAndWait(
          `레이스는 다가오는데 ${maru.name}는 제법 심한 부상을 입었다. 빨리 회복하려면 색다른 방법을 써야 한다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 고심 끝에 특단의 처방을 내리기로 했다.`,
        );
        era.printButton(
          '「기분이 좋으면 부상도 더 빨리 낫겠지. 의지의 힘으로 이겨 내자!」',
          1,
        );
        await era.input();
        await maru.say_and_wait(
          '나와 생각이 같네. 기분 전환을 하려면 도심에서 최신 유행을 찾아보자.',
        );
        if (fail_again) {
          await era.printAndWait(
            `그렇게 ${you.name}은(는) 패션 잡지에서 이번 시즌의 최신 유행을 확인한 뒤 ${maru.name}와 함께 백화점으로 향했다.`,
          );
          await era.printAndWait(
            `평일인데도 사람이 꽤 많아 ${you.name}은(는) 누군가 실수로 ${maru.name}의 다친 다리에 부딪히지 않도록 신경을 곤두세웠다.`,
          );
          await era.printAndWait(
            `두 사람은 백화점 안을 둘러보며 눈이 핑핑 돌 지경이었다.`,
          );
          await maru.say_and_wait(
            `어? 요즘 유행은 들어 본 적도 없는 것들이네. ${
              maru.elder_sibling_sex_title
            }인 내가 한물간 건가?`,
          );
          era.printButton(
            `「최신 유행에 충격을 받은 ${maru.name}는 기분이 가라앉았고, 회복 효과도 크게 줄었다.」`,
            1,
          );
          await era.input();
        } else {
          await era.printAndWait(
            `${you.name}은(는) ${maru.name}의 안내를 받아 애차를 몰고 이리저리 돌아, 세월의 흔적이 느껴지는 CD 가게에 도착했다.`,
          );
          await maru.say_and_wait(
            '겉보기에는 수수해도 안에 있는 음악은 꽤 세련됐어♪',
          );
          await era.printAndWait(
            `${you.name}은(는) 아무 CD나 한 장 집어 들었다. 고등학교 시절 반복해서 듣던 곡인지 기억이 가물가물했다.`,
          );
          await maru.say_and_wait('후후~ 역시 좋은 곡이야♪ 춤추고 싶어지네.');
          era.printButton(`(${maru.sex}가 기뻐한다면, 그것도 괜찮겠지?)`, 1);
          await era.input();
          await era.printAndWait(
            `음악 덕분인지 ${maru.name}의 부상도 더 빨리 나아 갔다.`,
          );
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  race_start: (() => {
    const title = '레이스 시작';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`지하 통로`);
      await maru.say_and_wait(
        `오늘 레이스에서도 후배들에게 내 멋진 뒷모습을 보여 줘야지.`,
      );
      era.printButton(`「${maru.name}, 힘내!」`, 1);
      await era.input();
      await maru.say_and_wait(`후후, 고마워, ${callname}.`);
      await maru.say_and_wait(
        `${maru.elder_sibling_sex_title}의 뒷모습에 반하면 안 돼~`,
      );
      await era.printAndWait(
        `${you.name}은(는) ${maru.name}가 코스로 향하는 모습을 배웅했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = '레이스 승리';
    /** @param {CharaTalk} maru マルゼンスキー */
    const f = async (maru) => {
      await maru.say_and_wait(
        `빅토리! 빅토리! 이겼어, 트레이너♪ 역시 1착은 다르네. 가슴이 계속 두근거려.`,
      );
      await maru.say_and_wait(`트레이너, 내가 달리는 모습 봤어?`);
      era.printButton(`「네가 최고야!」`, 1);
      era.printButton(`「아직 더 높은 곳을 노릴 수 있어!」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(
          `그렇지, 그렇지♪ 오늘은 찻집에서 레몬티랑 티라미수를 먹자.`,
        );
        await maru.say_and_wait(`트레이너도 같이 갈 거지? 후후♪`);
      } else {
        await maru.say_and_wait(`어머, 트레이너는 직설적이네!`);
        await maru.say_and_wait(`그래도 이걸로 만족하면 안 되지!`);
        await era.printAndWait(
          ` ${maru.name}는 ${maru.sex}가 좋아하는 나타데코코 음료를 단숨에 마셔 버렸다!`,
        );
        await maru.say_and_wait(
          `——푸하! 시원해! 좋아, 앞으로도 의욕 넘치게 힘내는 거야!`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = '레이스 입착';
    /** @param {CharaTalk} maru マルゼンスキー */
    const f = async (maru) => {
      await maru.say_and_wait(
        `보러 와 준 후배들을 위해 1착을 하고 싶었는데, 아직 실력이 부족하네……`,
      );
      era.printButton(`「나쁘지 않은 달리기였어!」`, 1);
      era.printButton(`「다음에는 1착이야!」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`후후, 트레이너가 위로해 주는 거구나. 고마워.`);
        await maru.say_and_wait(
          `그런데…… 어머, 트레이너한테 걱정까지 끼치다니, ${maru.elder_sibling_sex_title}도 참 못 말리겠네.`,
        );
        await maru.say_and_wait(
          '좋아, 다음에는 모두에게 슈퍼카의 질주를 보여 주고 당당히 1착을 하는 거야!',
        );
      } else {
        await maru.say_and_wait('맞아, 계속 한숨만 쉬는 건 나답지 않아.');
        await maru.say_and_wait(
          `다음에는 후배들에게 ${maru.elder_sibling_sex_title}가 진심으로 달리는 모습을 보여 줘야지!`,
        );
        await maru.say_and_wait('애차를 타고 바다로 드라이브하러 가자♪');
        await era.printAndWait(
          `그 후 ${maru.name}와 함께 바다로 드라이브를 갔고, ${maru.sex}가 만족할 때까지 돌아오지 않았다.`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_10: (() => {
    const title = '레이스 패배';
    /** @param {CharaTalk} maru マルゼンスキー */
    const f = async (maru) => {
      await maru.say_and_wait('슬퍼……');
      await maru.say_and_wait(
        `미안해…… 트레이너. 멋진 모습을 보여 주지 못했네……`,
      );
      era.printButton(`「다음 달리기를 기대할게!」`, 1);
      era.printButton(`「고개 숙이고 있어도 소용없어!」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`……다정하네, 트레이너.`);
        await maru.say_and_wait(
          `……좋아, 얼른 트레이닝으로 돌아가야겠어! 다음에는 꼭 멋진 모습을 보여 줄게!`,
        );
      } else {
        await maru.say_and_wait(
          '……맞아. 고개를 숙이고 있어도 빨라지지는 않지.',
        );
        await maru.say_and_wait(
          '그러니 더는 풀이 죽어 있을 수 없어. 찌그러져도 금방 고칠 수 있는 내 애차처럼!',
        );
        await maru.say_and_wait(
          '좋아! 수리는 여기까지. 얼른 연료를 가득 채우고 달려 나가자!',
        );
      }
    };
    f.title = title;
    return f;
  })(),
  beginning: (() => {
    const title = '서장·마루젠스키 등장';
    // マルゼンスキー登場から風数値は1。最終結末と風数値 例：TE=20 GE=17-19 それ以外はNE
    // 競争は大きな消耗を生む。それでも、あそこの景色を見たくはないか？
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`잔디 위`);
      await maru.say_and_wait(
        `${callname}, 이따 같이 어디 좀 돌아다니지 않을래?`,
      );
      await era.printAndWait(
        `${you.name}의 옆에 앉아 있던 ${maru.uma_sex_title}가 말을 걸어왔다.`,
      );
      era.printButton(
        '「미안해, 트레이닝실로 돌아가서 자료를 정리해야 해.」',
        1,
      );
      await era.input();
      await era.printAndWait(`하늘은 석양에 금빛으로 물들어 있었다.`);
      await maru.say_and_wait(
        `내가 졌네. ${callname}, 그렇게 열심히 하면 ${maru.elder_sibling_sex_title}도 한 바퀴 더 달리고 싶어지는걸♪`,
      );
      await era.printAndWait(
        `${you.name}의 바로 옆에 앉아 있던 ${maru.uma_sex_title}는 물을 마시고 자리에서 일어났다. 노을빛을 받은 물결치는 긴 머리카락은 타오르는 불꽃 같았다.`,
      );
      await you.say_and_wait(`너무 많이 달리지는 마.`);
      await maru.say_and_wait(`알겠어♪`);
      await era.printAndWait(
        `${you.name}의 허락을 받은 ${maru.sex}는 다시 출발점으로 돌아갔다.`,
      );
      await era.printAndWait(
        `출발 신호가 울리자 잔디 위에서 불꽃이 다시 타올랐다.`,
      );
      await era.printAndWait(
        `불꽃의 주인 역시 달릴 때 불어오는 거센 바람에 진심 어린 미소를 지었다.`,
      );
      era.drawLine();
      await era.printAndWait(
        `트레이닝실로 돌아온 ${you.name}은(는) 마지막 햇살이 사라지기 전에 들고 있던 서류철을 원래 자리에 돌려놓았다.`,
      );
      await era.printAndWait(
        `${maru.name}의 주행 데이터를 정리하려던 ${you.name}은(는) 이때 편지 한 통에 시선을 빼앗겼다.`,
      );
      await you.say_and_wait(`이건 뭐지?`, true);
      await era.printAndWait(
        `주변과 어울리지 않는, 청춘의 내음이 물씬 풍기는 봉투였다.`,
      );
      await era.printAndWait(
        `우편번호는 비어 있고, 주소는 자신의 사무실, 받는 사람에는 분명 ${you.actual_name}(이)라고 적혀 있다. 다만 마지막에 적힌 보낸 사람은……`,
      );
      await you.say_and_wait(`${maru.name}？`, true);
      await era.printAndWait(`의문을 품은 채 봉투를 열었다.`);
      await maru.say_and_wait(
        `짜잔! 이 편지를 읽고 있을 ${callname}, 이렇게 하니 멋지지 않아?`,
      );
      await maru.say_and_wait(
        `처음에는 트레이닝실로 돌아갈 때쯤 깜짝 문자를 보내려고 했는데, 자판이 도무지 안 눌러져서 당황했지 뭐야><`,
      );
      await maru.say_and_wait(
        `결국 편지로 타협했어…… 하지만! ${
          maru.sex_code !== 1 ? '아가씨' : '미남'
        }인 나, 편지로 마음을 전하는 것도 유행하기 시작했다는 걸 알아 버렸지! 역시 ${
          maru.sex_code !== 1 ? '아가씨' : '미남'
        }인 나는 언제나 유행의 선두를 달린다니까♪`,
      );
      await maru.say_and_wait(
        `기세 좋게 쓰기 시작한 건 좋은데, 결국 뭘 하면 좋을까?`,
      );
      await maru.say_and_wait(`——음, 만화 속 전개를 생각하면 옥상도 괜찮겠네?`);
      await maru.say_and_wait(
        `그러니까 오늘 밤 7시 반, 옥상에서 만나자! 그럼 ${callname}, 이따 봐!`,
      );
      await era.printAndWait(
        `편지지를 봉투에서 꺼내 펼친 뒤, ${you.name}은(는) 그 자리에 선 채 읽었다.`,
      );
      await you.say_and_wait(`정말 유행에 민감하네.`, true);
      await you.say_and_wait(
        `앞으로 삼 년 동안 아침저녁을 함께할 동료다. 만났을 때 상대에 대해 더 알아 가야겠지.`,
        true,
      );
      era.printButton(`「게다가」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        `지나가던 ${maru.uma_sex_title}`,
        `어? 마루젠 ${maru.sex_code !== 1 ? '선배' : '선배'}가 저런 사람한테 삼 년 동안 담당을 맡기겠다고?`,
      );
      await you.say_as_passer_by_and_wait(
        `지나가던 트레이너`,
        `애초에 ${you.actual_name}은(는) 괴물 같은 ${maru.name}가 변덕으로 마음에 들어 한 행운아일 뿐이야. 운 좋은 녀석이지.`,
      );
      await you.say_and_wait(`괴물의 변덕으로 선택받은 행운아라……?`);
      await era.printAndWait(
        `그 말대로 ${maru.name}를 스카우트하려던 트레이너 중에는 오랜 세월 뛰어난 성적을 거둔 베테랑도 적지 않았다.`,
      );
      await era.printAndWait(
        `그들과 자신을 비교하면, 좋게 보아도 경험에서 차이가 난다. ${maru.name}에게 선택받은 건 우연히 마음을 건드렸기 때문일 뿐이다.`,
      );
      await era.printAndWait(`다음에도 이렇게 운이 좋을 수 있을까?`);
      await era.printAndWait(`억지로 다시 일에 집중했다.`);
      await era.printAndWait(
        `스마트폰을 힐끗 보았다. 잠금 화면의 시각은 6:05.`,
      );
      await you.say_and_wait(`앞으로 더 열심히 해야 해.`);
      await era.printAndWait(
        `봉투를 서랍에 넣고 ${you.actual_name}은(는) 다시 일 속으로 도피했다.`,
      );
      era.drawLine();
      await era.printAndWait(`슬슬 출발할 시간이다.`);
      await era.printAndWait(
        `트레이닝실에서 학교 건물 옥상까지는 약 10분. 예의를 생각하면 10분쯤 일찍 도착하는 게 적당하겠지.`,
      );
      await era.printAndWait(`이때 잠금 화면의 시각은 정확히 7시였다.`);
      era.printButton(`「출발!」`, 1);
      await era.input();
      era.drawLine();
      await era.printAndWait(
        `밤바람은 낮보다 부드럽다. 가만히 느껴 보니 희미하게 달콤한 향기가 코끝에 스며든다.`,
      );
      await you.say_and_wait(`내일도 날씨가 좋겠네.`);
      await maru.say_and_wait(`응, 매일 오늘처럼 날씨가 좋으면 좋겠다.`);
      await you.say_and_wait(`그러게. 어?`);
      await era.printAndWait(
        `맞장구를 치려다 뒤에서 들려온 익숙한 목소리를 알아차렸다.`,
      );
      await era.printAndWait(
        `${maru.sex}와 이야기하려고 급히 돌아봤지만, 뒤에는 아무도 없었다.`,
      );
      await maru.say_and_wait(`그런 거였어? ${callname}, 정말 귀엽네.`);
      await era.printAndWait(`갑자기 뒤에서 누군가 안아 왔다.`);
      await you.say_and_wait(`！！！`);
      await era.printAndWait(`산들바람이 장난치는 밤은 한층 고요했다.`);
      await era.printAndWait(
        `뒤에서 끌어안았지만, 더 다가오지는 않고 그대로 머물렀다.`,
      );
      await maru.say_and_wait(
        `미안해, ${callname}, 얼굴을 보니 나도 모르게 그랬어.`,
      );
      await era.printAndWait(
        `뒤에서 가볍게 ${you.name}을(를) 안고 있던 팔이 허리에서 떨어졌다.`,
      );
      await era.printAndWait(
        `비로소 풀려난 ${you.name}은(는) 다시 이 ${maru.teen_sex_title} 쪽으로 몸을 돌렸다.`,
      );
      await era.printAndWait(
        `잔디 위의 새빨간 모습과 달리, 달빛 아래 조용히 서 있던 ${maru.name}가 ${you.name}에게 미소를 지었다.`,
      );
      era.printButton(`「……${maru.name}」`, 1);
      await era.input();
      await era.printAndWait(`입을 열려 해도 무슨 말을 해야 할지 모르겠다.`);
      await era.printAndWait(`그저 말없이 서로를 바라볼 뿐.`);
      await era.printAndWait(`……어째서인지 두려웠다.`);
      await era.printAndWait(`어떻게 해야 불꽃과 함께 춤출 수 있을까?`);
      await era.printAndWait(`어떻게 해야 ${maru.name}가 나를 바라봐 줄까?`);
      era.printButton(`「……」`, 1);
      await era.input();
      await maru.say_and_wait(
        `^_^ 그렇게 긴장하지 않아도 돼. 편하게 이야기하면 되잖아.`,
      );
      await era.printAndWait(
        `지나치게 긴장한 모습에 ${maru.sex}가 웃음을 터뜨린 듯했다.`,
      );
      await maru.say_and_wait(
        `상대의 마음을 헤아리는 건 좋은 일이야. 그래도 네 마음 역시 제대로 표현해야지.`,
      );
      await maru.say_and_wait(
        `그러지 않으면 이야기를 나누고 싶어도 어려워지잖아. 그러니까 뭐든 가볍게 흘려보낸다는 마음가짐이면 충분해!`,
      );
      await era.printAndWait(`마음속을 들여다보인 것 같다.`);
      await you.say_and_wait(
        `맞아. 저기 서 있는 건 앞으로 삼 년 동안 내 파트너가 될 ${maru.actual_name_with_title}이야.`,
      );
      await era.printAndWait(
        `——맑은 초록빛 눈동자의 격려에, 생각할 겨를도 없이 말이 나왔다.`,
      );
      await maru.say_and_wait(
        `맞아. ${maru.sex_code !== 1 ? '아가씨' : '미남'}인 나야.`,
      );
      await you.say_and_wait(`${maru.name}의 눈은 참 예쁘네.`);
      await you.say_and_wait(`분명 이 눈에 매료된 사람이 많을 것이다.`);
      await you.say_and_wait(
        `그리고 이렇게 누군가를 격려하는 ${maru.name}에게 반한 사람도 적지 않겠지.`,
      );
      await maru.say_and_wait(
        `음——생각보다 말도 잘하네? 선배로서 길을 잃은 ${maru.uma_sex_title}나 사람들을 이끌어 주는 건 당연한 일이잖아♪`,
      );
      await maru.say_and_wait(
        `하물며 앞으로 동료가 될 ${callname}, 너라면 더더욱.`,
      );
      await maru.say_and_wait(`응——앞으로도 이런 식으로 즐겁게 지내는 거야.`);
      await maru.say_and_wait(
        `그럼, 다시 한번. ${maru.name}, 앞으로 삼 년 동안 함께할 동료이자 담당 ${maru.uma_sex_title}로서 잘 부탁해♪`,
      );
      era.printButton(`「잘 부탁해, ${maru.name}.」`, 1);
      await era.input();
      await era.printAndWait(
        `부드러운 피부와 그 안에 깃든 힘을 충분히 느낀 뒤, ${you.actual_name}은(는) 두 손을 꼭 맞잡았다.`,
      );
      await era.printAndWait(
        `${you.name}과(와) ${maru.name}의 계약 후 첫 정식 만남은 이렇게 끝났다.`,
      );
      //風属性は1
    };
    f.title = title;
    return f;
  })(),
  ws_5: (() => {
    const title = (maru) => `${maru.elder_sibling_sex_title}의 선물`;
    /**
     * マルゼンスキーがプレイヤーをドライブに誘う
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`트레이닝실`);
      era.println();
      await era.printAndWait(`똑똑똑`);
      await maru.say_and_wait(`헬로~ ${callname}!`);
      await era.printAndWait(
        `산더미 같은 초콜릿을 안은 ${maru.name}가 ${you.name}의 트레이닝실로 들어왔다.`,
      );
      era.printButton(`「도와줄까?」`, 1);
      await era.input();
      await era.printAndWait(
        `눈을 의심할 만큼 산더미 같은 초콜릿을 안고 ${maru.name}가 트레이닝실로 찾아왔다.`,
      );
      await maru.say_and_wait(
        `후배들이 생각보다 열정적이어서 몸 둘 바를 모르겠어.`,
      );
      await maru.say_and_wait(
        `평소에 마루젠 선배가 도와줘서 고맙다면서 이 초콜릿을 잔뜩 안겨 주더라고——아, 여기 놔도 될까?`,
      );
      era.printButton(`「후배들이 ${you.name}을(를) 정말 좋아하네.」`, 1);
      await era.input();
      await era.printAndWait(
        `작은 탁자 위의 과자와 만화를 바닥에 내려놓고 ${maru.name}의 품에서 초콜릿 일부를 받아 들었다.`,
      );
      await maru.say_and_wait(`와아——후배들의 기대는 정말 무겁구나.`);
      await era.printAndWait(
        `금방이라도 무너질 듯한 초콜릿 탑에서 해방된 ${maru.name}는 조금 난처한 웃음을 지으며 소파에 앉았다.`,
      );
      await maru.say_and_wait(`${callname}, 땡큐♪`);
      await you.say_and_wait(`보답으로 귀여운 후배들 이야기를 좀 더 들려줄래?`);
      await era.printAndWait(
        `${you.name}도 자연스럽게 소파에 앉아 ${maru.name}의 눈을 똑바로 바라보았다.`,
      );
      await maru.say_and_wait(
        `음——${callname}의 부탁이라면. 아, 그러고 보니 얼마 전에 무척 풀이 죽은 애가 있었어.`,
      );
      await maru.say_and_wait(
        `——선발전에서 졌다고 울면서 상담하러 왔더라고. ${
          maru.sex
        }의 이야기를 차분히 들어 준 다음, 내가 달릴 때 터득한 요령을 조금 알려 줬을 뿐인데 ${
          maru.sex
        }가 정말 진지하게 들어 주는 거야.`,
      );
      await maru.say_and_wait(
        `미묘한 부분에는 자기 생각도 말하고, 노트도 한 페이지 가득 적었어. 덕분에 나도 많이 배웠지.`,
      );
      await maru.say_and_wait(
        `돌아가기 전에 정중히 인사하더니, 그 뒤로 무사히 트레이너와 계약했대♪`,
      );
      await maru.say_and_wait(`떠올릴 때마다 이 기분이 정말 좋아⭐`);
      await you.say_and_wait(`정말 좋은 경험이네.`);
      await maru.say_and_wait(`^_^ 나도 그렇게 생각해.`);
      await maru.say_and_wait(`그러고 보니 ${callname}, 초콜릿 받았어?`);
      await era.printAndWait(
        `${maru.name}는 ${you.name}의 책상으로 시선을 돌렸다.`,
      );
      await you.say_and_wait(
        `아쉽게도 못 받았어. 팀에 있을 때는 ${maru.uma_sex_title}에게 초콜릿을 받기도 했지만, 독립하고 나서는 의리 초콜릿조차 안 보이네.`,
      );
      await maru.say_and_wait(`그건 아쉽네.`);
      await maru.say_and_wait(`……음.`);
      await maru.say_and_wait(`그럼 같이 초콜릿을 고르러 가자♪`);
      await era.printAndWait(
        `좋은 방법이 떠오른 듯 ${maru.name}의 귀가 쫑긋 서더니, 눈을 반짝이며 ${you.name}을(를) 바라보았다.`,
      );
      await maru.say_and_wait(`잠깐이면 돼, 지금 바로 출발하자!`);
      await you.say_and_wait(`역시 그만두자.`, true);
      await era.printAndWait(
        `그렇게 말하고 싶었지만, 가게를 진지하게 고르는 ${maru.name}의 모습을 보고 ${you.name}은(는) 잠시 생각하다 입을 다물었다.`,
      );
      await you.say_and_wait(`잠깐 나가는 정도는 괜찮겠지.`, true);
      era.drawLine();
      await maru.say_and_wait(`오늘도 기운 넘쳐 보이네, 내 애차!`);
      era.printButton(`「애차라고? 난 ${you.name}, 잘 부탁해!」`, 1);
      await era.input();
      await maru.say_and_wait(`그럼 ${callname}, 조수석에 타.`);
      await maru.say_and_wait(
        `애차도 ${callname} 같은 새 친구를 만나서 기뻐할 거야.`,
      );
      await you.say_and_wait(`조금 두근거리네.`, true);
      await maru.say_and_wait(`후후, 애차도 기쁜가 봐♪`);
      await maru.say_and_wait('준비됐어? 렛츠 고!');
      await you.say_and_wait(`어? 이게 스포츠카카카카란 말이야아아아아!`);
      era.drawLine();
      await maru.say_and_wait(
        `후우— 오랜만에 한바탕 달렸더니 정말 못 참겠다니까! ${callname}도 느꼈어? ……${
          callname
        }？`,
      );
      era.printButton('「여기가 에덴인가요? 세 여신님, 처음 뵙겠습니다……」', 1);
      await era.input();
      await era.printAndWait(
        `대답할 용기마저 잃고 꼬리를 말아 도망치는 ${you.name}은(는) 마치 ${maru.uma_sex_title}에게 쫓기는 당근 같았다.`,
      );
      await maru.say_and_wait(
        `음, 자극이 너무 강했나? ${callname}이(가) 넋이 나갔네.`,
      );
      await era.printAndWait(`홀로 남겨진 ${maru.name}가 혼잣말을 했다.`);
    };
    f.title = title;
    return f;
  })(),
  ws_24: (() => {
    const title = '트레이닝이 끝난 평범한 하루';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await you.say_and_wait(`오늘 트레이닝은 여기까지야. 수고했어.`);
      await maru.say_and_wait(`${callname}도 수고했어.`);
      await era.printAndWait(
        `${maru.name}는 ${you.name}에게 수건을 받아 이마의 땀을 가볍게 닦은 뒤 ${you.name}에게 돌려주었다.`,
      );
      await you.say_and_wait(
        `이 페이스로 계속하면 앞으로 있을 아사히배에서도 우승을 노릴 수 있겠어.`,
      );
      await maru.say_and_wait(
        `G1 레이스에서는 얼마나 뜨거운 열기를 느낄 수 있을까? 기대되네~`,
      );
      await you.say_and_wait(`${maru.name}, 달리는 게 즐거워?`);
      await era.printAndWait(
        `수건을 다시 짠 뒤, 옆에 놓인 배낭에서 여분의 수건을 꺼내 ${maru.uma_sex_title}의 헝클어진 긴 머리를 정성스레 닦아 주었다.`,
      );
      await maru.say_and_wait(
        `흩어진 머리카락을 핀으로 고정하지 않으면 달릴 때 눈을 찔러서 아프거든. 나도 모르게 너무 신났나 봐.`,
      );
      await maru.say_and_wait(
        `역시 머리 모양을 바꿔서 기분 전환을 하는 게 좋을까? ${callname} 생각은 어때?`,
      );
      await you.say_and_wait(`나도 그렇게 생각해.`);
      await you.say_and_wait(
        `머리를 묶어서 긴 포니테일로 단단히 고정하면 달리는 데도 방해되지 않겠지.`,
      );
      await you.say_and_wait(
        `게다가 모두에게 ${maru.name}의 새로운 모습을 보여 주는 것도 괜찮잖아.`,
      );
      await maru.say_and_wait(
        `음——어떻게 하는 게 좋을까? ${callname}의 제안도 좋지만.`,
      );
      await maru.say_and_wait(`아, 아야.`);
      await you.say_and_wait(`미안, 이쪽 머리카락이 엉켜 있었어.`);
      await maru.say_and_wait(`땡큐.`);
      await maru.say_and_wait(
        `오늘은 애차와 함께 바닷바람을 쐬며 기분 전환을 해야겠어♪`,
      );
      await maru.say_and_wait(`${callname}, 정문까지 데려다줄래?`);
      era.printButton(`「같이 가자.」`, 1);
      await era.input();
      await era.printAndWait(
        `\n${you.name}과(와) ${maru.name}는 황혼이 내려앉은 길을 나란히 걸었다.`,
      );
      await you.say_and_wait(
        `그러고 보니 ${maru.name}, 혼자 아파트에 살면서 통학하려면 불편하지 않아?`,
      );
      await era.printAndWait(
        `기숙사에 사는 다른 ${maru.uma_sex_title}와 달리 ${maru.name}는 계속 학원 밖 아파트에 살고 있다.`,
      );
      await era.printAndWait(
        `그 특별함에 호기심이 생긴 ${you.name}은(는) ${maru.name}에게 답을 구했다.`,
      );
      await maru.say_and_wait(
        `통금이 있는 학원 안보다 밖에 사는 내가 더 자유로울지도 몰라.`,
      );
      await maru.say_and_wait(
        `대신 매일 다른 학생들보다 일찍 일어나야 하는 게 그 자유의 대가지.`,
      );
      await you.say_and_wait(
        `기회가 되면 ${maru.name}의 아파트에서 잠시 지내 보고 싶네. ${maru.name} 생각은 어때?`,
      );
      await maru.say_and_wait(
        `어머? ${callname}, 함께 지내면 재미있을지도 모르겠네.`,
      );
      await maru.say_and_wait(
        `${callname}, 방금 한 말 잊으면 안 돼? 언젠가 그 말을 책임져야 할 거야.`,
      );
      era.printButton(`「물론이지.」`, 1);
      await era.input();
      await maru.say_and_wait(`후후~ 나도 기대할게.`);
      await era.printAndWait(`한참 떠들다 보니 어느덧 학원 정문에 도착했다.`);
      await maru.say_and_wait(
        `${callname}과(와) 있으면 시간이 왜 이렇게 빨리 갈까.`,
      );
      await you.say_and_wait(
        `짧으니까 더 소중하게 느껴지는 거 아닐까? ${maru.name}에게도 좋은 추억이 됐으면 좋겠어.`,
      );
      await maru.say_and_wait(`즐거운 추억이었어. 내일 봐, 사요나라~`);
      await era.printAndWait(
        `엔진 소리와 함께 ${maru.name}의 뒷모습이 시야 밖으로 사라졌다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = '메이크 데뷔 전·모든 것의 시작';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, callname) => {
      await era.printAndWait(`지하 통로`);
      await maru.say_and_wait(
        `아까는 조금 긴장했는데, 이제 완전히 편안해졌어.`,
      );
      era.printButton(
        `「이대로 후배들에게 ${maru.name}의 멋진 모습을 보여 주자!」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `응응, ${callname}도 ${maru.name}의 멋진 모습을 잘 지켜봐 줘.`,
      );
      await maru.say_and_wait(
        `그리고 뒤에서 응원해 주는 후배들뿐 아니라, 질주하면서 한계를 돌파하는 바람도 느낄 수 있겠지!`,
      );
      await maru.say_and_wait(`이렇게 이야기하니 몸도 들뜨기 시작하네!`);
      await maru.say_and_wait(`슬슬 내 차례야. 그럼 ${callname}, 이따 봐!`);
      era.printButton(`「무운을 빌게.」`, 1);
      await era.input();
      await era.printAndWait(
        `고개를 끄덕인 뒤 ${maru.name}는 레이스장으로 향했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '메이크 데뷔 후·여행길의 바람';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `주니어급 메이크 데뷔에 불과한데도 ${maru.name}의 첫 달리기를 보러 온 사람들로 경기장이 가득 찼다.`,
      );
      await you.say_and_wait(
        `생각해 보면 ${maru.name}의 인기는 정말 대단하네.`,
      );
      await era.printAndWait(
        `평소 후배들을 도와준 덕분에, 관중 대부분은 도움을 받은 후배들이었다.`,
      );
      await era.printAndWait(
        `관중들 사이에 앉은 ${you.name}은(는) 혼자만 어울리지 않는 듯한 압박감을 느꼈다.`,
      );
      await you.say_and_wait(
        `손바닥에 땀이 배기 전에 조금 더 한산한 곳으로 옮겨 관전하자.`,
      );
      await you.say_as_passer_by_and_wait(
        `해설`,
        `다음은 주목받는 신예, 압도적인 실력과 인기를 자랑하는 ${maru.name}입니다. 과연 어떤 멋진 장면을 보여 줄까요!`,
      );
      await you.say_and_wait(`곤란하네.`);
      await era.printAndWait(
        `해설의 힘찬 소개에 뜨거운 기름에 물 한 방울이 떨어진 듯, 함성이 경기장을 뒤집어 놓을 기세로 터져 나왔다.`,
      );
      await maru.say_as_passer_by_and_wait(
        `${maru.uma_sex_title} A`,
        `마루젠 ${maru.sex_code !== 1 ? '선배' : '선배'}, 힘내요!`,
      );
      await maru.say_as_passer_by_and_wait(
        `${maru.uma_sex_title} B`,
        `선배의 멋진 달리기를 다시 한번 보여 주세요!`,
      );
      await era.printAndWait(`오오오오오!`);
      await era.printAndWait(`관객들의 함성이 경기장 전체에 울려 퍼졌다.`);
      await you.say_and_wait(`다들 신났네. 역시 ${maru.name} 덕분인가.`);
      await era.printAndWait(
        `인파와 함께 일어선 ${you.name}은(는) 말 귀 사이로 ${maru.name}의 모습을 찾았다.`,
      );
      await maru.say_as_passer_by_and_wait(maru.uma_sex_title, `아, 미안해.`);
      await era.printAndWait(
        `실수로 살짝 부딪혔을 뿐인데도 충격이 커서 하마터면 소리를 지를 뻔했다.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `정말 미안해…… 힘 조절을 못 했어. 다친 데는 없어?`,
      );
      await you.say_and_wait(`아니, 괜찮아.`);
      await era.printAndWait(
        `상대에게 악의가 있었던 것도 아니니 굳이 따질 필요는 없다고 생각한 ${you.name}은(는) 그대로 넘어갔다.`,
      );
      await you.say_and_wait(`너도 ${maru.name}의 달리기를 보러 온 거야?`);
      await era.printAndWait(`말을 꺼낸 순간, 자신의 질문을 크게 후회했다.`);
      await you.say_and_wait(`너도 ${maru.name}의 달리기를 보러 온 거야?`);
      await era.printAndWait(
        `당연한 소리다. ${maru.name}를 보러 온 게 아니면 뭘 하러 왔겠어? 다리 달린 당근이 달리는 걸 보려고?`,
      );
      await era.printAndWait(`그래도 다리 달린 당근은 좀 보고 싶네.`);
      await you.say_and_wait(`너희도 다리 달린 당근이 달리는 걸 보러 왔어?`);
      await era.printAndWait(`아차, 머릿속 생각과 입 밖에 낼 말이 뒤섞였다.`);
      await maru.say_as_passer_by_and_wait(maru.uma_sex_title, `푸흡.`);
      await you.say_and_wait(`아니나 다를까, 웃음거리가 됐다.`, true);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `이 트레이너${you.adult_sex_title}, 생각보다 재미있는 사람이네.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `마루젠 선배가 널 선택한 이유를 조금 알 것 같아.`,
      );
      await you.say_and_wait(`어?`);
      await you.say_and_wait(`벌써 그렇게 유명해졌어?`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `그보다는 네가 마루젠 선배와 계약한 다음 날부터 트레센 전체가 알고 있었어.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `다들 ${maru.name}의 트레이너가 어떤 사람인지 궁금해하거든.`,
      );
      await era.printAndWait(`그래서 오는 내내 호기심 어린 시선이 많았구나.`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `마루젠 선배의 트레이너${maru.adult_sex_title}, 앞으로도 힘내! 나도 너와 마루젠 선배를 계속 응원할게!`,
      );
      await era.printAndWait(`이 ${maru.uma_sex_title}는 무척 기뻐 보였다.`);
      await era.printAndWait(
        `모두의 관심이 다시 ${maru.name}에게 쏠린 틈을 타 ${you.name}은(는) 원래 있던 자리를 슬쩍 빠져나왔다.`,
      );
      era.drawLine();
      await era.printAndWait(
        `${maru.name}의 달리는 모습을 정면에서 볼 수 있는 동쪽에 비해, 뒷모습만 보이는 서쪽 관람석은 한산했다.`,
      );
      await era.printAndWait(
        `더구나 자기 자리에 앉지 않고 인파 속에 서 있는 ${maru.uma_sex_title}도 적지 않았다.`,
      );
      await era.printAndWait(
        `그러니까 ${maru.uma_sex_title}들은 참 단순하다니까.`,
      );
      await era.printAndWait(
        `하지만 바로 그래서 ${maru.sex}들을 좋아하는 거지.`,
      );
      await era.printAndWait(
        `관람석에서 환호성이 터져 나왔다. ${maru.name}의 첫 승리를 축하하는 ${maru.uma_sex_title}들의 열띤 함성이었다.`,
      );
      era.printButton(`「슬슬 ${maru.name}를 맞이하러 가자.」`, 1);
      await era.input();
      await maru.say_and_wait(`${callname}♪ 아까 그 멋진 활약, 봤어?`);
      era.printButton(`「상상 이상으로 멋진 무대였어!」`, 1);
      await era.input();
      await maru.say_and_wait(
        `응응, 그럼 위닝 라이브 준비하러 갈게. ${callname}, 잊지 말고 ${maru.elder_sibling_sex_title}를 잘 지켜봐 줘⭐`,
      );
      await era.printAndWait(
        `위닝 라이브에서의 ${maru.name}는 평소보다 더욱 빛났다. 발굴된 원석이 본연의 모습을 드러낸 것 같았다.`,
      );
      await era.printAndWait(`생각해 보면 트레이너란 그런 일을 하는 사람이다.`);
      era.drawLine({ content: '위닝 라이브 후' });
      await maru.say_and_wait(
        `후우~ 땀 좀 흘렸네. 그래도 전에 춤 연습을 해 둔 게 정말 도움이 됐어⭐`,
      );
      era.printButton(`역시 ${maru.elder_sibling_sex_title}답네.`, 1);
      await era.input();
      await maru.say_and_wait(
        `어머, ${callname}, 평소보다 말을 잘하네. 다른 애들한테도 그러는 거야?`,
      );
      era.printButton(
        `${maru.name}라는 ${maru.elder_sibling_sex_title}는 한 명뿐이잖아. 다른 애들에게 똑같은 말을 할 수는 없지.`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `후후후, ${callname}에게 그런 말을 들으니 더 신나는걸. 음——오늘 밤에는 테이오 일행과 파티를 열어서 축하할까!`,
      );
      era.printButton(`「${maru.name}, 평소보다 들떴네.」`, 1);
      await era.input();
      await you.say_and_wait(
        `불꽃처럼 잔디를 휩쓴 ${maru.name}는 정말 멋졌어.`,
      );
      await maru.say_and_wait(
        `담당 ${callname}에게 그런 말을 들으니 안심이 되네.`,
      );
      await maru.say_and_wait(`그런데 칭찬을 더 듣기 전에, 다음 목표는 뭐야?`);
      era.printButton(`「아사히배는 어때?」`, 1);
      await era.input();
      await maru.say_and_wait(`아사히배?`);
      await maru.say_and_wait(
        `더 강한 ${maru.uma_sex_title}와 겨루면 더 아름다운 풍경을 볼 수 있을지도 모르겠네. ${callname}, 그 대답은 만점이야.`,
      );
      await maru.say_and_wait(`그럼 다음은 아사히배로 향하자!`);
      await era.printAndWait(
        `${you.name}과(와) ${maru.name}는 다음 목표를 정했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  begin_race_lose: (() => {
    const title = '메이크 데뷔 후·다시 한번 노력';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, you) => {
      await maru.say_and_wait(`아, 졌어……`);
      await era.printAndWait(
        `예상 밖의 결과일까, 트레이닝 부족일까. ${maru.name}는 메이크 데뷔에서 패했다.`,
      );
      era.printButton(`돌아가서 반성회를 하자.`, 1);
      await era.input();
      await maru.say_and_wait(`응! 다음에는 반드시 이길 거야!`);
      await era.printAndWait(
        `${you.name}과(와) ${maru.name}는 다음 목표를 정했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_30: (() => {
    const title = '세 여신의 아이들';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} emperor 皇帝（シンボリルドルフ）
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, emperor, you, callname) => {
      emperor.name = '황제';
      await era.printAndWait(`중정, 세 여신상 앞`);
      await era.printAndWait(
        `온종일 소란스러운 잔디 코스와 학교 건물에서 떨어진 이곳은 ${maru.uma_sex_title}들의 마음을 지탱해 주는 성지다.`,
      );
      await era.printAndWait(
        `이곳에는 달리 아라비안, 고돌핀 바브, 바이얼리 터크라는 세 여신의 석상이 모셔져 있다.`,
      );
      await era.printAndWait(
        `여신들이 받쳐 든 물병에서 맑은 물이 연못으로 흘러든다.`,
      );
      await era.printAndWait(`그리고 이곳에 또 새로운 손님이 찾아왔다.`);
      await emperor.say_and_wait(`……`);
      await era.printAndWait(`황제는 세 여신상을 바라보고 있다.`);
      await emperor.say_and_wait(`아직 오지 않았나?`, true);
      await era.printAndWait(
        `내 이름으로, 최근 눈여겨보던 ${maru.uma_sex_title}를 초대했다. 하지만 상대의 태도는 아직 모호하군.`,
      );
      await era.printAndWait(
        `황제의 위압감이 두려운 건가. 뭐, 좋다. 그토록 나약한 ${maru.uma_sex_title}에게 등을 맡길 수는 없지.`,
      );
      await era.printAndWait(`우리가 만들어 낸 에덴에서 자유롭게 살아가도록.`);
      await emperor.say_and_wait(`그럼 슬슬 돌아갈까.`);
      await era.printAndWait(
        `황제의 말은 중정으로 다가오는 발소리에 가로막혔다.`,
      );
      era.drawLine();
      era.printButton(`「어, 장소를 잘못 찾아왔나?」`, 1);
      await era.input();
      await era.printAndWait(
        `이야기를 이어 가지 못하고 당황했다. 귓가에는 여신상이 받쳐 든 물병에서 연못으로 떨어지는 물소리만 들렸다.`,
      );
      await era.printAndWait(
        `다행히 황제는 ${you.name}의 등장에 개의치 않고 여신상을 바라보고 있었다.`,
      );
      era.printButton(`「다행이다.」`, 1);
      await era.input();
      await you.say_and_wait(`그러고 보니.`);
      await era.printAndWait(
        `아주 오래전, 아직 어렸을 때 혼자 신사에 왔다가 이런 일이 있었던 것 같다.`,
      );
      await era.printAndWait(
        `세 여신상을 바라보며 주변 소리를 잊은 채 추억에 잠겼다.`,
      );
      await era.printAndWait(
        `친구들과 숨바꼭질을 하다가 술래를 피하려고 일부러 외진 구석에 숨었다.`,
      );
      await era.printAndWait(`기다리다 그만 잠들어 버렸다.`);
      await era.printAndWait(`그렇게 세 여신님과 만났다.`);
      await era.printAndWait(
        `아름다운 붉은 장발은 타오르는 불꽃을 연상시켰고, 다정한 ${
          maru.sex
        }는 당황한 ${you.name}을(를) 달래려 했다.`,
      );
      await era.printAndWait(
        `그때 어떤 말로 위로해 주었는지는 더 이상 기억나지 않는다. 하지만 그 따스함만은 빛바래지 않는 앨범 속 글씨처럼 ${you.name}의 기억에 남아 있다.`,
      );
      await emperor.say_and_wait(
        `——그러므로 내게 인정도 동의도 필요 없다. 왕이란 스스로 앞장서는 자다.`,
      );
      await era.printAndWait(
        `소란스러운 목소리가 ${you.name}의 상념을 끊고, 저린 다리가 ${you.name}의 의식을 현실로 끌어당겼다.`,
      );
      await you.say_and_wait(`하아~암.`);
      await era.printAndWait(
        `자기도 모르게 하품을 하고, 따뜻한 여운을 음미하며 시선을 여신상에서 중정 반대편으로 돌렸다.`,
      );
      await era.printAndWait(
        `일부러 ${you.name}에게서 떨어져 무언가 이야기하는 듯했다.`,
      );
      await you.say_and_wait(`돌아갈까.`, true);
      await maru.say_and_wait(
        `${callname}? 후배들이 당근을 조금 보내 줬어. 오늘은.`,
      );
      await era.printAndWait(
        `${maru.name}는 중정을 나가는 가장 가까운 길을 막고 있었다. 게다가.`,
      );
      await emperor.say_and_wait(`${maru.name}, 오랜만이군.`);
      await maru.say_and_wait(`루돌프, 오늘도 기운 넘쳐 보이네.`);
      await maru.say_and_wait(`후배들이 당근을 조금 줬어. 너도 먹어 볼래?`);
      await emperor.say_and_wait(`사양하지.`);
      await maru.say_and_wait(`그래? 아쉽네.`);
      await emperor.say_and_wait(`나중에 조금 보내 줄 수 있겠나?`);
      await maru.say_and_wait(`물론이지!`);
      await maru.say_and_wait(
        `${maru.uma_sex_title}들의 행복을 위해 온 힘을 다하는 루돌프, 정말 대단하다고 생각해.`,
      );
      await maru.say_and_wait(
        `도전자로서 줄곧 노력해 레이스장에 황제라는 이름을 남겼잖아.`,
      );
      await maru.say_and_wait(
        `그렇게 ${maru.uma_sex_title}에게는 불가능하리라는 예언을 하나씩 깨뜨리는 삶도 행복하겠지.`,
      );
      await emperor.say_and_wait(`그렇다면 ${maru.name}, 자네는 행복한가?`);
      await maru.say_and_wait(
        `행복이라면, 이렇게 레이스장에서 귀여운 후배들에게 뒤쫓아 갈 희망을 남겨 주는 것도 행복하지 않을까?`,
      );
      await maru.say_and_wait(
        `잔디 위를 자유롭게 달리고, 후배들의 고민을 듣고 조언해 주는 것. 나쁘지 않은 선택이라고 생각하는데?`,
      );
      await emperor.say_and_wait(
        `${maru.uma_sex_title}들의 기대는 생각보다 무겁다.`,
      );
      await emperor.say_and_wait(
        `도중에 장밋빛 거품을 깨뜨린다면 그나마 낫겠지. 하지만 계속 장밋빛 꿈만 꾸다 보면……`,
      );
      await emperor.say_and_wait(
        `언젠가 자신의 힘으로 감당할 수 없는 일과 마주하게 된다.`,
      );
      await emperor.say_and_wait(
        `그때 ${maru.name}, 자네가 어떤 방식으로 그 장애물을 넘어설지 기대하고 있겠네.`,
      );
      await era.printAndWait(
        `종이 울렸다. 곧 오후 트레이닝이 시작된다. ${maru.name}는 생각에 잠겼지만 끝내 입을 다물었다.`,
      );
      await emperor.say_and_wait(
        `조금 더 이야기하고 싶지만 집무실에 일이 쌓여 있어서 말이야. 실례하지.`,
      );
      await era.printAndWait(`그 말을 남기고 황제는 중정을 떠났다.`);
      await maru.say_and_wait(`……그래도 나는 알고 있어.`);
      await maru.say_and_wait(`……미안해, ${callname}, 생각난 일이 있어서.`);
      await era.printAndWait(`${maru.name}는 우울한 표정으로 중정을 떠났다.`);
      await you.say_and_wait(`그래서 아무도 남지 않게 된 건가?`);
      await you.say_and_wait(
        `${maru.name}, 고민이 있는 것 같네. 나중에 꼭 대화해 봐야겠어.`,
      );
      await era.printAndWait(`${you.name}은(는) 중정을 떠났다.`);
      await era.printAndWait(
        `그렇게 길을 나선 이들은 저마다 다른 생각을 품고 다른 목적지를 향해 나아갔다.`,
      );
      await era.printAndWait(`세 여신은 말없이 그 모든 것을 품어 주었다.`);
    };
    f.title = title;
    return f;
  })(),
  ws_34: (() => {
    const title = '선물';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, you) => {
      await era.printAndWait(
        `어느 날, ${you.name}이(가) 집무실에서 자료를 정리하고 있을 때였다.`,
      );
      await era.printAndWait(`똑똑똑`);
      era.printButton(`「들어오세요.」`, 1);
      await era.input();
      await maru.say_as_passer_by_and_wait(maru.uma_sex_title, `실례합니다.`);
      await era.printAndWait(
        `문고리가 돌아가더니 고등부로 보이는 ${maru.uma_sex_title}가 들어왔다.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `안녕하세요, 트레이너${you.adult_sex_title}.`,
      );
      era.printButton(`「안녕.」`, 1);
      await era.input();
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `저는 트레센 학원 어디에나 있는 평범한 ${maru.uma_sex_title} 중 한 명이에요.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `마루젠 선배처럼 레이스장에서 계속 이기고 싶어요. 잘 부탁드립니다.`,
      );
      era.printButton(`「잘 부탁해.」`, 1);
      await era.input();
      await era.printAndWait(`두 사람은 악수를 나누었다.`);
      era.printButton(
        `여기 커피가…… 아니, 그만두자. 홍차랑 코코넛 주스 중에 뭐가 좋아?`,
        1,
      );
      await era.input();
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `감사합니다. 하지만 선물을 전하러 왔을 뿐이라서요.`,
      );
      await era.printAndWait(`${maru.sex}는 주머니에서 작은 상자를 꺼냈다.`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `저희처럼 평범한 ${maru.uma_sex_title}는 트레이너의 눈에 들어 활동 기간 중 G3에서 우승하는 것만으로도 정말 대단한 일이에요.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `다들 입착을 목표로 필사적으로 노력하고 있어요.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `그래도 입착하는 ${maru.uma_sex_title}는 극소수고, 대부분의 ${maru.uma_sex_title}는 메이크 데뷔에서 이긴 뒤 한 번도 더 이기지 못한 채 삼 년의 활동을 마쳐요.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `졸업할 때까지 전속 계약을 맺을 트레이너를 만나지 못하는 애들도 있어요.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `마루젠 선배는 그런 건 신경 쓰지 않고 늘 저희가 앞으로 나아가도록 격려해 주세요.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `어려울 때는 곁에서 조언해 주시고요.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `그래서 저희는 늘 마루젠 선배에게 감사하고 있어요.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `친구들과 함께 이 선물을 만들어서 마루젠 선배에게 드리고 싶었어요.`,
      );
      era.printButton(
        `「${maru.name}도 분명 기뻐할 거야. ${you.name}의 감사 인사도 받아 줘.」`,
        1,
      );
      await era.input();
      await you.say_and_wait(`상대에게서 리본이 달린 작은 상자를 받았다.`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `감사합니다, ${you.name}, 트레이너${you.adult_sex_title}.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `다음 선발전에서는 모두를 깜짝 놀라게 해 줘야겠어요!`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `그럼 안녕히 계세요, ${maru.name}의 트레이너${you.adult_sex_title}!`,
      );
      await era.printAndWait(
        `꾸벅 인사한 뒤 ${maru.sex}는 문틈으로 고개를 내밀고 기다리던 친구들 곁으로 서둘러 갔다.`,
      );
      await you.say_and_wait(
        `앞으로 ${maru.sex}도 잘 맞는 트레이너를 만났으면 좋겠네.`,
        true,
      );
      await era.printAndWait(
        `조용히 문을 닫은 뒤 ${you.name}은(는) 작은 상자를 열었다.`,
      );
      await era.printAndWait(`그 안에 들어 있던 것은 수정으로 만든 팔찌였다.`);
      await you.say_and_wait(
        `${maru.name}가 돌아오면 직접 ${maru.sex}에게 건네줘야겠다.`,
        true,
      );
    };
    f.title = title;
    return f;
  })(),
  we_39: (() => {
    const title = '핼러윈';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `마지막 데이터를 정리한 뒤 ${you.name}은(는) 길게 숨을 내쉬었다.`,
      );
      era.printButton(`「드디어 끝났다.」`, 1);
      await era.input();
      await era.printAndWait(
        `거의 저려 버린 두 다리를 움직였다. 겨울밤은 여름밤보다 길다.`,
      );
      await you.say_and_wait(`밖에 좀 나가 볼까.`, true);
      await era.printAndWait(
        `일을 전부 마쳤다는 성취감에 ${you.name}의 발걸음이 가벼워졌다.`,
      );
      await era.printAndWait(
        `트레이닝실을 나서니 학원 홀은 호박등과 보랏빛 리본으로 신비로운 고성처럼 꾸며져 있었다.`,
      );
      await you.say_and_wait(`그러고 보니 오늘이 무슨 날이었지?`, true);
      await you.say_as_passer_by_and_wait(
        `활기찬 ${maru.uma_sex_title}들`,
        `과자 안 주면 장난칠 거야!`,
      );
      await era.printAndWait(
        `유령과 늑대인간, 흡혈귀로 분장한 ${maru.uma_sex_title}들에게 붙잡혔다!`,
      );
      await you.say_and_wait(`으악!`);
      await era.printAndWait(
        `모퉁이에 숨어 있던 ${maru.uma_sex_title}들의 갑작스러운 장난에 놀라 ${
          you.actual_name
        }은(는) 바닥에 넘어졌다.`,
      );
      await you.say_as_passer_by_and_wait(
        `활기찬 ${maru.uma_sex_title}들`,
        `장난 대성공!`,
      );
      await era.printAndWait(
        `지나가던 사람을 놀라게 한 ${maru.uma_sex_title}들은 웃으며 달려가 버렸고, 현장에는 피해자인 ${
          you.actual_name
        }만 남았다.`,
      );
      await you.say_and_wait(`이런 차림…… 무슨 축제였더라?`);
      await era.printAndWait(
        `생각을 정리하려 애쓰며 ${you.name}은(는) 엉덩이에 묻은 먼지를 털고 일어났다.`,
      );
      await you.say_and_wait(`학원 밖도 둘러보자.`);
      await era.printAndWait(`그렇게 마음먹은 ${you.name}은(는) 홀을 나섰다.`);
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        `미라로 분장한 ${maru.uma_sex_title}들`,
        `과자 안 주면 장난칠 거야!`,
      );
      await era.printAndWait(
        `서양의 핼러윈을 따라 트레센 학원의 ${maru.uma_sex_title}들도 상점가 근처에서 집집마다 문을 두드리고 있다.`,
      );
      await era.printAndWait(`상인들도 미리 준비한 사탕을 꺼내 나눠 준다.`);
      await you.say_and_wait(`오늘이 크리스마스인가?`);
      await era.printAndWait(
        `커다란 박쥐와 호박등 간판이 걸린 입구를 보며 ${you.name}은(는) 생각에 잠겼다.`,
      );
      await maru.say_and_wait(`HAPPY HALLOWEEN!`);
      await era.printAndWait(`입구에서 누군가 말을 걸어왔다.`);
      await you.say_and_wait(`${maru.name}？`);
      await maru.say_and_wait(`${callname}, 해피 핼러윈♪`);
      await era.printAndWait(
        `짙은 보라색 마녀복으로 분장한 ${maru.name}가 웃으며 ${you.name}을(를) 바라보고 있었다.`,
      );
      await you.say_and_wait(
        `여기서 ${maru.name}를 만나네. 즐겁게 보내고 있어?`,
      );
      await era.printAndWait(
        `흔들리는 귀와 장난꾸러기 요정처럼 활기찬 꼬리. 대답은 이미 분명했다.`,
      );
      await maru.say_and_wait(
        `이런 분위기, 좋아. ${callname}도 같이 놀면 더 귀여울 거야♪`,
      );
      await you.say_and_wait(`음……`);
      await era.printAndWait(
        `괴물로 분장한 ${maru.uma_sex_title}들은 미성년자인 ${
          maru.teen_sex_title
        }들이다. 어른이 이러는 건 역시……`,
      );
      await you.say_and_wait(`오히려 영광이지.`);
      await era.printAndWait(
        `이렇게 쌓인 스트레스를 풀고, 온몸으로 이 즐거움의 바다에 빠져드는 거다.`,
      );
      await maru.say_and_wait(`후후♪ 그럼 약속한 거야?`);
      await you.say_and_wait(`약속할게.`);
      await you.say_and_wait(`기분 전환이라고 생각하면 되지.`, true);
      await you.say_as_passer_by_and_wait(
        `리치로 분장한 ${maru.uma_sex_title}`,
        `선배! 여기 일손이 부족해요!`,
      );
      await era.printAndWait(
        `사탕을 나눠 주는 가판대가 ${maru.uma_sex_title}들에게 둘러싸여 꼼짝도 못 하는 모양이었다.`,
      );
      await maru.say_and_wait(`아차차, 그럼 먼저 가 볼게.`);
      era.printButton(`「나도 도울게.」`, 1);
      await era.input();
      await era.printAndWait(
        `마대 자루 세 개 분량의 사탕을 나눠 준 뒤, 기진맥진한 두 사람은 트레이닝실 소파에 쓰러졌다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_41: (() => {
    const title = (maru) => `트레이너와 담당 ${maru.uma_sex_title}`;
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`11월의 어느 날이었다.`);
      await era.printAndWait(
        `${you.name}은(는) 작년 아사히배 녹화 테이프를 보며, 그 기술들을 어떻게 활용해 ${maru.name}의 능력을 끌어올릴지 고민하고 있었다.`,
      );
      await you.say_and_wait(`역시 슈퍼카라고 해야 하나.`);
      await era.printAndWait(
        `달리기 위해 태어난 두 다리. 우아한 몸 아래 숨겨진 엄청난 힘.`,
      );
      await you.say_and_wait(`내가 없어도 손쉽게 이길 것 같네.`);
      await era.printAndWait(
        `일시 정지를 누르고 커피를 한 모금 마셨다. 차가운 쓴맛이 입안에 천천히 퍼졌다.`,
      );
      era.println();
      await era.printAndWait(`끼익.`);
      await maru.say_and_wait(`헬로~! ${callname}, 들어갈게.`);
      await you.say_and_wait(`기분 좋아 보이네. 무슨 좋은 일이라도 있었어?`);
      await maru.say_and_wait(`어머, ${callname}도 알아보겠어?`);
      await maru.say_and_wait(
        `오늘 선발전에서 쭉 지켜보던 후배가 드디어 벽을 넘고, 나처럼 달리는 즐거움을 알게 됐거든!`,
      );
      await you.say_and_wait(
        `${maru.name}가 그렇게 말하니 나도 ${maru.name}가 눈여겨보는 후배를 만나 보고 싶네.`,
      );
      await maru.say_and_wait(
        `그렇지, 그렇지? 후배들은 그렇게 단숨에 성장한다니까! 나도 깜짝 놀랐어.`,
      );
      await maru.say_and_wait(
        `언젠가는 후배가 나를 손쉽게 추월하고 저 멀리 가 버릴지도 모르겠네. 부담되는데, 부담돼.`,
      );
      era.printButton(`「앞으로의 트레이닝도 힘내야겠네!」`, 1);
      await era.input();
      await maru.say_and_wait(
        `맞아! ${
          maru.sex_code !== 1 ? '아가씨' : '미남'
        }인 나도 앞으로는 트레이닝을 스파르타식으로 해야겠어!`,
      );
      era.println();
      await maru.say_and_wait(`그러고 보니.`);
      await era.printAndWait(
        `${maru.name}는 무언가 떠오른 듯 가볍게 손뼉을 쳤다.`,
      );
      await maru.say_and_wait(
        `참, ${callname}, 트레이닝이 끝나면 같이 드라이브하러 갈래?`,
      );
      await maru.say_and_wait(
        `다른 계절과 달리 가을바람은 언제나 마음을 가볍게 해 주거든.`,
      );
      await maru.say_and_wait(
        `하지만 말로만 설명해 봐야 ${callname}에게는 잘 와닿지 않겠지. 그러니 ${callname}도 직접 느껴 보는 게 좋을 것 같아.`,
      );
      era.printButton(
        `${maru.name}가 그렇게 말하니 나도 가을바람을 느껴 보고 싶어지네.`,
        1,
      );
      await era.input();
      await you.say_and_wait(`${maru.name}가 말하는 가을바람은 어떤 느낌일까?`);
      era.drawLine();
      await maru.say_and_wait(
        `후아, 바람을 맞으니 비로소 모든 게 뜬구름처럼 가벼워지는 것 같아.`,
      );
      era.printButton(`「${maru.name}, 조금만 천천히 달려 줄래?」`, 1);
      await era.input();
      await era.printAndWait(
        `처음 조수석에서 기절할 뻔했던 때와 달리, 이제 ${you.name}도 이 속도에 조금 익숙해졌다.`,
      );
      await you.say_and_wait(`인간은 생각보다 튼튼하구나.`, true);
      await you.say_and_wait(
        `빠르게 흐르는 공기 속에서, 우렁찬 바람 소리와 뒤로 급히 밀려나는 풍경 외에는……`,
        true,
      );
      await era.printAndWait(
        `여름처럼 공기에 열기의 흔적이 섞여 있지도, 겨울처럼 한기의 조각이 섞여 있지도 않다.`,
      );
      await era.printAndWait(`가을바람에는 강렬한 해방감이 있다.`);
      await era.printAndWait(
        `학창 시절 마지막 과제를 끝내고 펜을 내려놓으며 한숨 돌렸을 때처럼.`,
      );
      await era.printAndWait(
        `혹은 오랫동안 자신을 괴롭혀 온 일이 어느 날 마침내 끝났을 때처럼.`,
      );
      await era.printAndWait(
        `바람이 스치는 뺨에서 시작해 머리카락 한 올 한 올, 그 아래의 머릿속, 마지막으로 마음까지 전해진다.`,
      );
      await era.printAndWait(`넘치는 상쾌함을 거리낌 없이 풀어 놓고 싶어진다.`);
      await you.say_and_wait(`${maru.name}, 어쩌면 나는……`);
      await maru.say_and_wait(`슬슬 바다가 보이겠네.`);
      await era.printAndWait(`입 밖으로 나오려던 말은 결국 침묵으로 바뀌었다.`);
      await you.say_and_wait(`……그러게.`);
      era.drawLine();
      await era.printAndWait(
        `${maru.name}의 조수석에서 내린 뒤 ${you.name}은(는) 멀리 보려고 애썼다. 시야에는 깨알만 한 사람 형체만 보였다.`,
      );
      await era.printAndWait(
        `${maru.uma_sex_title}라는 종족의 타고난 이점 때문일까, 아니면 아직 바닷물에 씻기지 않은 발자국에서 읽어 낸 상황 때문일까.`,
      );
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `이 짙푸른 공간에서 ${maru.name}는 오르내리는 파도를 바라보다가——`,
      );
      await era.printAndWait(`쓸쓸한 표정을 지었다.`);
      await you.say_and_wait(`${maru.name}？`);
      await maru.say_and_wait(`어?`);
      await maru.say_and_wait(
        `이렇게 쉬는 날 ${callname}하고 함께 바다를 보는 건 처음이네.`,
      );
      await era.printAndWait(
        `축축한 바닷바람이 정면으로 불어와 눈을 뜨고 있기조차 힘들었다.`,
      );
      await maru.say_and_wait(`어머, 오늘은 바람이 이렇게 세구나.`);
      await you.say_and_wait(`그렇구나.`);
      await you.say_and_wait(
        `바닷바람은 이렇게 살짝 씁쓸하고 짭짤한 냄새가 나는구나.`,
      );
      await maru.say_and_wait(
        `응, 조금 비릿한 바람이지. 동시에 바다에 사는 생물들에게는 길잡이이기도 해.`,
      );
      await maru.say_and_wait(`그 애들은 이 특별한 냄새를 따라 먹이를 찾거든.`);
      await maru.say_and_wait(
        `그런 의미에서는 이 냄새가 그 애들의 생명줄일지도 모르겠네.`,
      );
      await you.say_and_wait(
        `${maru.name}는 언제나 다정한 ${maru.elder_sibling_sex_title}구나.`,
      );
      await maru.say_and_wait(
        `곤란한걸, ${callname}에게만큼은 그런 말 듣고 싶지 않은데♪`,
      );
      await maru.say_and_wait(
        `${callname}에게 그런 말을 들으니 ${maru.elder_sibling_sex_title}인 나도 조금 쑥스러워.`,
      );
      await era.printAndWait(
        `${you.name}에게 칭찬을 받은 ${maru.name}는 좀처럼 보이지 않던 귀여운 표정을 지었다.`,
      );
      await you.say_and_wait(
        `세 여신님의 은혜에 감사드립니다. 이제 더는 못 먹겠어요.`,
        true,
      );
      await era.printAndWait(
        `그렇게 ${maru.name}의 귀여운 모습을 거리낌 없이 실컷 즐겼다.`,
      );
      await era.printAndWait(
        `트레이너의 수십 년에 걸친 경력에 비하면 고작 삼 년은 물거품처럼 짧다.`,
      );
      await era.printAndWait(
        `그렇다고 경력에서 처음 만난 ${maru.uma_sex_title}를 연습 대상으로 삼아도 되는 걸까?`,
      );
      await era.printAndWait(
        `아니, 트레이너로서 능력이 부족할 수밖에 없어 자신에게 기대를 건 ${maru.uma_sex_title}들을 실망시킬지도 모른다.`,
      );
      await era.printAndWait(`그래도 우리는 계약을 맺는다.`);
      await era.printAndWait(
        `${maru.uma_sex_title}들에게는 그것이 필요하니까.`,
      );
      await era.printAndWait(
        `그렇기에 트레이너에게 가장 중요한 것은 진실한 마음이다.`,
      );
      await era.printAndWait(
        `「스스로를 망칠 가능성이 있더라도 트레이너로서 담당과 함께 빛나겠다.」 그 진실한 마음으로 트레이닝 과정의 미숙함과 부족함을 만회하는 것이다.`,
      );
      await maru.say_and_wait(`슬슬 돌아가서 밥 먹자, ${callname} ——`);
      await era.printAndWait(`달이 떠올랐다.`);
    };
    f.title = title;
    return f;
  })(),
  before_asah_sta: (() => {
    const title = '아사히배 전·5단 가속';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`대기실`);
      await maru.say_and_wait(`흥흥흥~`);
      await era.printAndWait(
        `${maru.name}는 기분 좋게 대기실에서 승부복을 점검하고 있다.`,
      );
      await you.say_and_wait(`${maru.name}, 준비는 잘돼 가?`);
      await maru.say_and_wait(`어머, ${callname}, 왔구나.`);
      await maru.say_and_wait(`보다시피 지금은 전력 질주할 준비가 됐어.`);
      era.printButton(`「앞으로도 레이스를 즐기자!」`, 1);
      await era.input();
      await you.say_and_wait(
        `미래를 향해 달리는 ${maru.name}의 멋진 모습을 계속 보고 싶었으니까.`,
      );
      await maru.say_and_wait(`응, ${callname}, 잘 지켜봐 줘.`);
      await maru.say_and_wait(`레이스장을 달리는 ${maru.name}의 모습을.`);
      await maru.say_and_wait(`그럼 다녀올게.`);
      era.printButton(`「${maru.name}, 힘내!」`, 1);
      await era.input();
      await era.printAndWait(`준비를 마친 ${maru.name}는 레이스장으로 향했다.`);
      await you.say_and_wait(`이제 관람석에서 ${maru.sex}를 응원하자.`, true);
    };
    f.title = title;
    return f;
  })(),
  asah_sta_win: (() => {
    const title = '아사히배 후·모든 것을 휩쓰는 바람';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, you) => {
      await era.printAndWait(`한신 경기장
`);
      await era.printAndWait(
        `매서운 공기가 폐를 자극하고, 추위가 머릿속을 한층 또렷하게 만든다.`,
      );
      await you.say_and_wait(` ${maru.name}, 반드시 이겨 줘.`);
      await you.say_and_wait(`……아니, ${maru.name}라면……`);
      await you.say_and_wait(
        `승리보다 ${maru.uma_sex_title}들과 함께 달리는 감각을 느끼는 편이 더 즐겁겠지.`,
        true,
      );
      await era.printAndWait(
        `${you.name}은(는) 레이스가 시작되는 순간을 뚫어지게 바라보았다.`,
      );
      era.drawLine({ content: '관람석 반대편' });
      await era.printAndWait(
        `손에 넣은 마권을 꼭 쥔 채 ${maru.uma_sex_title}는 ${maru.name}의 모습을 뚫어지게 바라보고 있다.`,
      );
      await era.printAndWait(`하지만, `);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `그렇다면 내가 존재하는 의미는……`,
      );
      await era.printAndWait(`무심코 자신과 ${maru.sex}를 비교하고 말았다.`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `아! 마음속 생각이 입 밖으로 나와 버렸어.`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `그런데 왜 이렇게 마음이 아프지?`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `나와 너의 거리는, 온 힘을 다해도 닿을 수 없을 만큼 멀어.`,
      );
      await you.say_as_passer_by_and_wait(maru.uma_sex_title, `어째서……`);
      await era.printAndWait(`분한 듯 입술을 깨물고, 쥐고 있던 마권을 구겼다.`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `왜 네 다리에서는 희망이 보이지 않는 걸까.`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `아니야! 나, 무슨 생각을 하는 거야.`,
      );
      await era.printAndWait(
        `무언가 소중한 것이 부서져 다시는 돌아오지 않을 것 같았다. ${maru.uma_sex_title}는 다시 ${maru.name}의 모습을 바라보았다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  asah_sta_5: (() => {
    const title = '아사히배 후·고조되는 감각';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`${maru.name} 입착.`);
      await maru.say_and_wait(
        `자! ${callname}, ${
          maru.sex_code !== 1 ? '아가씨' : '미남'
        }인 나의 멋진 모습, 봤어?`,
      );
      era.printButton(`수고했어.`, 1);
      await era.input();
      era.printButton(`G1에서 입착하는 것만으로도 대단해.`, 1);
      await era.input();
      await maru.say_and_wait(
        `달리는 ${maru.uma_sex_title}들 모두 이기고 싶다는 기백이 넘치더라. ${maru.elder_sibling_sex_title}인 나도 조금 부담되는걸.`,
      );
      await you.say_and_wait(` ${maru.name}는 즐기고 있는 것 같은데.`);
      await maru.say_and_wait(`G1이잖아. 상대도 평소보다 한 수 위니까.`);
      await maru.say_and_wait(
        `그만큼 잔디 위에서 느끼는 즐거움도 한 단계 더 높아지는 거지♪`,
      );
      await you.say_and_wait(`이따 어디 가서 축하할까?`);
      await maru.say_and_wait(
        `그런 거라면 ${maru.sex_code !== 1 ? '아가씨' : '미남'}인 내가 인기 있는 디저트 가게를 알지.`,
      );
      era.drawLine({ content: '관람석 반대편' });
      await era.printAndWait(
        `손에 넣은 마권을 꼭 쥔 채 ${maru.uma_sex_title}는 ${maru.name}의 모습을 뚫어지게 바라보고 있다.`,
      );
      await era.printAndWait(`하지만, `);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `그렇다면 내가 존재하는 의미는……`,
      );
      await era.printAndWait(`무심코 자신과 ${maru.sex}를 비교하고 말았다.`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `아! 마음속 생각이 입 밖으로 나와 버렸어.`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `그런데 왜 이렇게 마음이 아프지?`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `나와 너의 거리는, 온 힘을 다해도 닿을 수 없을 만큼 멀어.`,
      );
      await you.say_as_passer_by_and_wait(maru.uma_sex_title, `어째서……`);
      await era.printAndWait(`분한 듯 입술을 깨물고, 쥐고 있던 마권을 구겼다.`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `왜 네 다리에서는 희망이 보이지 않는 걸까.`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `아니야! 나, 무슨 생각을 하는 거야.`,
      );
      await era.printAndWait(
        `무언가 소중한 것이 부서져 다시는 돌아오지 않을 것 같았다. ${maru.uma_sex_title}는 다시 ${maru.name}의 모습을 바라보았다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47: (() => {
    const title = '크리스마스와 설레는 추억';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await maru.say_and_wait(`메리 크리스마스!`);
      await era.printAndWait(
        `두툼한 옷을 입은 ${maru.name}가 트레이닝실에 나타났다.`,
      );
      era.printButton(
        `「메리 크리스마스! 추우면 이쪽에 코타츠랑 귤 있으니까 좀 쉬어.」`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `피로한 눈을 비비며 ${maru.name}와 대화하며 잠시 멍하니 머리를 비워 본다.`,
      );
      await maru.say_and_wait(`밖이 생각보다 너무 추워서 정말 못 참겠다니까.`);
      await era.printAndWait(
        `푹신한 소파에 몸을 맡긴 ${maru.name}는 조심스레 껍질을 깐 귤을 입에 넣었다.`,
      );
      await you.say_and_wait(
        `오늘 기온이 벌써 영하 1도야. 일기예보에선 밤부터 눈이 온대.`,
      );
      await era.printAndWait(
        `'눈이 오는 건가' 하고 중얼거리며 ${maru.name}는 귤을 하나 더 깠다.`,
      );
      await era.printAndWait(
        `잠시 트레이닝실에 정적이 흘렀고, 종이를 넘길 때마다 팔락거리는 소리만이 방 안을 채웠다.`,
      );
      await era.printAndWait(
        `소파 깊숙이 몸을 파묻고 이번 주 패션 잡지를 펼친 ${maru.name}는 따뜻한 난로 빛에 둘러싸여 즐거운 표정을 지었다.`,
      );
      era.drawLine();
      await you.say_and_wait(`이게 마지막 서류네.`, true);
      await era.printAndWait(`파일을 정리해 폴더에 넣고 저릿한 다리를 풀었다.`);
      await maru.say_and_wait(`${callname} 수고했어. 다음 일정은 뭐야?`);
      await era.printAndWait(
        `느슨해진 근육에 순식간에 힘을 주고 평소 모습으로 돌아온 ${maru.name}가 자리에서 일어난 ${you.name}을(를) 바라보고 있다.`,
      );
      await you.say_and_wait(`예정이라……?`);
      await era.printAndWait(
        `이전 크리스마스에는 혼자 트레이닝실에서 메모를 정리하곤 했던 ${you.name}.`,
      );
      await you.say_and_wait(`음——그러네, `);
      await maru.say_and_wait(`같이 밖에 나가서 축하하지 않을래?`);
      await you.say_and_wait(`트레이닝실에서 쉬자.`, true);
      await era.printAndWait(
        `기대 어린 표정의 ${maru.name}를 보고 ${you.name}은(는) 뒷말을 삼켰다.`,
      );
      await maru.say_and_wait(`지금 바로 출발하자!`);
      await era.printAndWait(
        `${maru.name}의 열렬한 권유에 두 사람은 뜻을 모았다.`,
      );
      era.drawLine();
      await era.printAndWait(`진동하는 엔진 소리와 함께 애차에 시동이 걸렸다.`);
      await era.printAndWait(
        `새까만 하늘. 이따금 부는 찬바람이 오가는 이들을 사정없이 파고든다.`,
      );
      await you.say_and_wait(`에취!`);
      await era.printAndWait(`거센 바람이 옷과 피부 사이로 스며들었다.`);
      await you.say_and_wait(`춥네. 게다가 이따가는 눈도 온다지.`);
      await era.printAndWait(`앞으로의 일정에 자기도 모르게 절망감이 들었다.`);
      await maru.say_and_wait(
        `——그러고 보니 테이오도 그렇고 ${
          maru.couple_title
        }의 성장이 예상보다 빠르네. 후배들이 저렇게 열심히 하면 ${maru.elder_sibling_sex_title}인 나도 신나지.`,
      );
      await era.printAndWait(
        `무슨 핑계라도 대고 ${maru.uma_sex_title}에게 안겨 몸을 녹이고 싶다는 생각을 하며, 몸을 웅크리고 추위를 견뎠다.`,
      );
      await you.say_and_wait(`목도리를 가져올걸.`, true);
      await maru.say_and_wait(
        `……백화점에서 크리스마스 캔들 디너를 한대. 같이 가 볼래?`,
      );
      await era.printAndWait(
        `몰아치는 찬바람 속에서 ${maru.name}의 말은 먼 하늘처럼 아득했다.`,
      );
      await you.say_and_wait(`춥다.`, true);
      await maru.say_and_wait(`……그보다 나는, 아, 도착했어!`);
      await era.printAndWait(`조금만 더 가면 백화점이다.`);
      era.drawLine();
      await era.printAndWait([
        maru.get_colored_name(),
        '/',
        you.get_colored_name(),
        '「',
        { content: '건', color: maru.color },
        '배!」',
      ]);
      await era.printAndWait(
        `${maru.name}가 말한 특가 레스토랑에서 두 사람은 잔을 들고 크리스마스를 기념했다.`,
      );
      await maru.say_and_wait(`아직 술은 못 마시지만…… 주스 맛도 나쁘지 않네♪`);
      era.printButton(
        `「머지않아 ${maru.name}도 술을 마실 수 있게 될 거야.」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `그날이 오면 ${callname}은(는) 나랑 밤새도록 마셔 줘야 해.`,
      );
      await era.printAndWait(
        `창밖 하늘에서 눈송이 하나가 떨어지더니, 수많은 눈송이가 뒤따라 지면에 내려앉았다.`,
      );
      await you.say_and_wait(`그날을 위해서라도 다음 훈련도 힘내야겠네!`);
      await era.printAndWait(
        `차갑고 아름다운 눈송이들이 자연의 정령처럼 자유롭게 허공에서 춤을 추며 내려온다.`,
      );
      await maru.say_and_wait(`눈 오네, 정말 귀여워.`);
      await era.printAndWait(
        `무언가 회상하는 듯, ${maru.name}는 밖의 눈송이를 보며 깊은 생각에 잠겼다.`,
      );
      await you.say_and_wait(`${maru.name}는 눈을 좋아해?`);
      await era.printAndWait(
        `비운 잔을 흔드는 ${maru.teen_sex_title}의 생각은 먼 과거로 돌아간 듯했다.`,
      );
      await maru.say_and_wait(`……앗! 미안, 잠시 딴생각을 했네.`);
      await era.printAndWait(
        `방금 ${you.name}의 존재를 알아차린 듯 당황하며 대답하는 ${maru.name}의 귀엽게 허둥대는 모습을 발견했다.`,
      );
      era.printButton(`「아냐, 아무것도」`, 1);
      era.printButton(`「${maru.name}는 눈을 좋아해?」`, 2, { disabled: true });
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `똑같은 질문을 또 하는 건 ${maru.name}에게도 좀 무례하겠지.`,
        );
        await era.printAndWait(`${you.name}은(는) 다른 화제로 돌리기로 했다.`);
        await era.printAndWait(
          `저녁 식사는 화기애애한 분위기 속에서 마무리되었다.`,
        );
      } else {
        await maru.say_and_wait(`응? 눈송이 말이야?`);
        await era.printAndWait(
          `잠시 고민하던 ${maru.name}가 드디어 입을 열었다.`,
        );
        await maru.say_and_wait(`사실 정말 짱 좋아해!`);
        await maru.say_and_wait(
          `아침에 일어났을 때 커튼을 젖히면 창가에 눈이 쌓여 있는 풍경을 항상 꿈꾸곤 하거든!`,
        );
        await you.say_and_wait(`왜 그렇게 아련한 표정을 지은 거야?`);
        await maru.say_and_wait(`${callname}도 그렇지 않아?`);
        await era.printAndWait(`질문에 답하는 대신 다른 질문을 던져 왔다.`);
        await maru.say_and_wait(
          `마치 답을 갈구하는 탐구자처럼 고민에 빠진 표정.`,
        );
        await era.printAndWait(
          `다시 주도권을 잡은 ${maru.name}가 장난기 어린 미소를 지었다.`,
        );
        await maru.say_and_wait(`하지만 답은 의외로 간단한데?`);
        await you.say_and_wait(`그럼 답은 뭔데?`);
        await maru.say_and_wait(`안·알·려·줄·거·야·${you.name}⭐`);
        await you.say_and_wait(
          `안 돼, 너무 성급하게 굴어서 ${maru.sex}가 경계하게 만들었나.`,
          true,
        );
        await you.say_and_wait(`다음 기회를 노리자.`, true);
        await era.printAndWait(
          `이후 훈련에 관한 이야기를 조금 더 나눈 뒤, 즐거운 저녁 식사가 끝났다.`,
        );
      }
      era.drawLine({ content: '트레이너 기숙사 앞' });
      await maru.say_and_wait(`바이바이!`);
      await maru.say_and_wait(
        `아, 잊을 뻔했네! ${callname}, 이거 ${you.name}한테 주는 거야.`,
      );
      await era.printAndWait(
        `가득 찬 뒷좌석에서 예쁜 리본으로 포장된 선물 상자를 꺼냈다.`,
      );
      await you.say_and_wait(`${maru.name}, 이건 뭐야?`);
      await maru.say_and_wait(`진짜로 내일 봐!`);
      await era.printAndWait([
        you.get_colored_name(),
        '의 말은 엔진의 굉음에 묻혔고, 상자를 안은 채 애차가 점처럼 멀어지는 모습을 바라볼 수밖에 없었다.',
      ]);
      await you.say_and_wait(`일단 들어가자.`);
      await era.printAndWait(
        `${maru.name}의 마음이 담긴 상자를 소중히 들고 방으로 돌아왔다.`,
      );
      await era.printAndWait(
        `금색 리본을 풀고 뚜껑을 열자, 마치 어린 시절 어른들에게 선물을 받던 설렘이 되살아났다.`,
      );
      await era.printAndWait(`정성스레 만들어진 목도리와 편지 한 장.`);
      await maru.say_and_wait(
        `미안해, ${callname}에게 더 좋은 걸 해 주고 싶었는데 지금은 이 브랜드밖에 없네. 마음에 들었으면 좋겠어. 메리 크리스마스!`,
      );
      await era.printAndWait(
        `섬세하고 아름다운 필체를 보니 마치 본인과 대화하는 듯했다.`,
      );
      await you.say_and_wait(`쌩큐, ${maru.name}.`);
      await era.printAndWait(
        `어느덧 ${you.name}도 그녀의 말투에 물들어 있었다.`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '새해의 마음';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `시간은 빠르게 흘러, 눈 깜짝할 사이에 다시 새해가 되었다.`,
      );
      await era.printAndWait(
        `${maru.name}와 함께 겪은 달콤하고 씁쓸한 일들도 이제는 모두 좋은 추억이 되었다.`,
      );
      await era.printAndWait(
        `오늘은 공휴일이다. 트레이너 기숙사에서 빈둥거리며 보내기에는 너무 심심하다.`,
      );
      await era.printAndWait(
        `『적당히 돌아다니자.』고 생각했는데, 발걸음은 어느새 다시 트레센으로 향하고 있었다.`,
      );
      await you.say_and_wait(`여기까지 왔으니 트레이닝실에 들러 보자.`);
      await era.printAndWait(
        `그렇게 마음먹은 ${you.name}은(는) 트레이닝실로 향했다.`,
      );
      era.drawLine({ content: '트레이닝실' });
      await era.printAndWait(
        `평소의 트레이닝실이라면 「또 일인가.」 하는 짜증을 떨칠 수 없었을 것이다.`,
      );
      await era.printAndWait(
        `하지만 쉬는 날 『잠깐 들러 보자.』는 마음으로 돌아오니……`,
      );
      await era.printAndWait(
        `${maru.name}와 앞으로의 방향을 의논하고, 맛있는 케이크를 함께 먹고, 소파에 붙어 앉아 중상 레이스 영상에 몰두하던 일.`,
      );
      await era.printAndWait(`그 모든 것이 어제 일만 같다.`);
      await you.say_and_wait(`시간 참 빠르네.`);
      await era.printAndWait(
        `익숙한 트레이닝실을 바라보고 있는데도 어쩐지 낯설게 느껴졌다.`,
      );
      await you.say_and_wait(`너무 피곤한가?`);
      await you.say_and_wait(
        `좋아, 옥상에서 바람이나 쐬면서 머리를 식히자.`,
        true,
      );
      await you.say_and_wait(
        `……${maru.name}는 지금 어디서 뭘 하고 있을까. 아마 떠들썩하게 새해를 맞이하고 있겠지.`,
      );
      await era.printAndWait(
        `트레이닝실 문을 조용히 닫고, 기분 전환을 하러 옥상으로 향했다.`,
      );
      era.drawLine({ content: '옥상' });
      await era.printAndWait(
        `많은 ${maru.uma_sex_title}들이 친구나 자신의 트레이너와 새해를 보내며, 휴일 동안 지난해의 고민을 털어 낸다.`,
      );
      await era.printAndWait(
        `언제나 소란스럽던 학원이 지금은 조용하다.`,
      );
      await era.printAndWait(
        `옥상에서 내려다보니 트레센 학원 전체가 발아래에 펼쳐졌다.`,
      );
      await you.say_and_wait(
        `여기서는 「나는 삼관을 차지할 ${maru.uma_sex_title}에게 어울리는 사람이 되겠다!」고 외쳐야 분위기에 맞겠지.`,
        true,
      );
      await you.say_and_wait(`아무도 없다지만, 역시 부끄러운데.`, true);
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `「나는 ${maru.name}에게 어울리는 ${you.phy_sex_title}이 되겠어!!!」`,
        {
          align: 'center',
          color: you.color,
          fontSize: '1.5rem',
          fontWeight: 'bold',
        },
      );
      await era.printAndWait(
        `트레이너라는 신분도 어른으로서의 체면도 모두 내던지고, 자신도 놀랄 만큼 큰 소리를 질렀다.`,
      );
      await era.printAndWait(
        `금기를 깬 흥분에 ${you.name}의 얼굴은 새빨갛게 달아올랐다.`,
      );
      await you.say_and_wait(`속이 후련하네.`);
      await you.say_and_wait(`아무도 옥상에 있는 나를 눈치채기 전에 얼른 떠나자.
`);
      await maru.say_and_wait(`어라라? ${callname}?`);
      await era.printAndWait(`야생의 ${maru.name}가 나타났다!`);
      await you.say_and_wait(`으아아아?! ${maru.name}가 왜 여기 있어?`, true);
      await you.say_and_wait(`하하, 인생 끝났네.`, true);
      await you.say_and_wait(`사람 없는 섬에서 여생이나 보내야겠다.`, true);
      era.printButton(`「미안하지만 ${you.name}(이)라면 사람 잘못 봤어.」`, 1);
      await era.input();
      era.printButton(`「지금의 나는 그저 평범한 트레이너일 뿐이야.」`, 1);
      await era.input();
      await maru.say_and_wait(
        `……어머, 이…… 아주 평범한 트레이너${you.adult_sex_title}.`,
      );
      await maru.say_and_wait(
        `아까 외침, 기세가 대단하던데. 계단에서도 그 뜨거운 목소리가 들렸는걸.`,
      );
      await maru.say_and_wait(`청춘은 멋지네.`);
      await maru.say_and_wait(
        `하지만 그런 말은 역시 당사자 앞에서 제대로 해야 하지 않을까?`,
      );
      await maru.say_and_wait(
        `우리 트레이너라면 가슴 가득한 마음을 제대로 표현해 줄 텐데.`,
      );
      await era.printAndWait(
        `밀려오는 수치심에 몸이 뜨거워진 ${you.name}은(는) 무릎이 꺾여 쓰러질 뻔했다.`,
      );
      await you.say_and_wait(`정말 미안해.`, true);

      await era.printAndWait(`${maru.name}는 조용히 하늘을 올려다보고 있다.`);
      era.printButton(
        `……테이오도 그렇고 ${maru.couple_title}과 놀러 가지 않아?`,
        1,
      );
      era.printButton(`「${you.name}의 생각을 들려줄래?」`, 1, {
        disabled: true,
      });
      await era.input();
      await era.printAndWait(
        `${maru.name}는 기분 좋게 추억의 노래를 흥얼거리고 있다.`,
      );
      await you.say_and_wait(`외로운 건가?`, true);
      era.printButton(`「이렇게 추운 날 왜 옥상에 있어?」`, 1);
      era.printButton(`「${you.name}은(는) 무슨 생각을 하고 있어?」`, 1, {
        disabled: true,
      });
      await era.input();
      await era.printAndWait(
        `진심을 알기 위해 ${you.name}은(는) 그대로 함께 난간에 기대어 이야기를 시작했다.`,
      );
      await maru.say_and_wait(
        `작년에는 테이오도 그렇고 ${
          maru.couple_title
        }과 새해 파티를 했는데, 올해는 내 트레이너한테 가라면서 떠밀더라고.`,
      );
      era.printButton(
        `테이오도 그렇고 ${maru.couple_title}은 ${you.name}을(를) 신경 써 주는구나.`,
        1,
      );
      await era.input();
      await era.printAndWait(`${maru.name}에게서 향긋한 냄새가 풍겨 왔다.`);
      await you.say_and_wait(
        `샴푸인가? 오늘은 왜 이렇게 좋은 향이 나지?`,
        true,
      );
      await maru.say_and_wait(
        `${callname}도 그렇게 생각해? ${maru.couple_title}은 희망으로 가득한 묘목이야.`,
      );
      await maru.say_and_wait(
        `언젠가는 비바람의 속박을 뚫고 커다란 나무가 되겠지.`,
      );
      await era.printAndWait(
        `${maru.name}의 기대 섞인 말투와 달리, 하늘을 바라보는 ${maru.sex}의 눈빛에는 복잡한 생각이 가득해 보였다.`,
      );
      era.printButton(`「${maru.name}는 거대한 나무가 되고 싶지 않아?」`, 1);
      await era.input();
      await maru.say_and_wait(
        `거대한 나무보다는, 나는 한 줄기 부드러운 바람이 되고 싶어.`,
      );
      era.printButton(`「바람?」`, 1);
      await era.input();
      await maru.say_and_wait(
        `${callname}, 하늘에서 자유롭게 부는 바람을 느껴 본 적 없어?`,
      );
      await maru.say_and_wait(
        `만약 하늘에서 부는 바람이 될 수 있다면, 후배들이 고민하고 있을 때나, `,
      );
      await maru.say_and_wait(
        `성공까지 한 걸음 남았을 때나 한숨짓고 있을 때 ${maru.couple_title}을 격려해 줄 수 있잖아.`,
      );
      await you.say_and_wait(`${maru.name}는 지금도 충분히 잘하고 있어.`);
      await you.say_and_wait(`지금은 새해의 즐거움을 마음껏 만끽하자고.`);
      await maru.say_and_wait(`에구구, 이러고 있는 건 정말 나답지 않네.`);
      await maru.say_and_wait(`${callname}은(는) 무슨 계획이라도 있어?`);
      era.printButton('「오늘은 잔디에서 연습하자.」(스피드+20)', 1);
      era.printButton(
        '「같이 나가서 안 좋은 일은 전부 털어 버리자.」(체력+200)',
        2,
      );
      era.printButton('「오늘은 트레이닝실에서 푹 쉬자.」(스킬 Pt+100)', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await maru.say_and_wait(
            '응응, 잔디 위를 달리면 모든 게 뜬구름처럼 가벼워질 거야!',
          );
          await maru.say_and_wait(`역시 ${callname}, 내 마음을 잘 안다니까.`);
          await era.printAndWait(`${maru.name}는 다시 기운을 냈다.`);
          await maru.say_and_wait('오케이! 그럼 지금 바로 출발하자.');
          await era.printAndWait(
            `잔디에서 하루 종일 트레이닝한 뒤, 트레이닝실에서 조촐하게 축하했다.`,
          );
          break;
        case 2:
          await maru.say_and_wait(
            `어머? ${callname}, 정말 ${maru.elder_sibling_sex_title}인 나랑 데이트하고 싶은 거야?`,
          );
          await maru.say_and_wait(
            '성급하기는. 데이트 코스는 제대로 계획해야지.',
          );
          await maru.say_and_wait('그럼 애차를 타고……');
          era.printButton(`「데이트라면 걸어서 가자.」`, 1);
          await era.input();
          await maru.say_and_wait(`음——`);
          era.printButton(`「연인끼리는 걸어가는 편이 더 분위기 있잖아.」`, 1);
          await era.input();
          await maru.say_and_wait(`${callname}, 그렇게까지 말한다면……`);
          await maru.say_and_wait(
            `가끔은 산책을 하며 색다른 기분을 느낄 수 있겠네⭐`,
          );
          await era.printAndWait(`그럼 지금 바로 출발하자.`);
          await era.printAndWait(
            `트레이닝실로 돌아왔을 때는 두 사람 모두 기진맥진해서 소파에 몸을 기댔다.`,
          );
          break;
        case 3:
          await maru.say_and_wait(
            `그러게, 이렇게 추운 날은 따뜻한 트레이닝실에 있는 게 정답이지.`,
          );
          era.printButton(`「트레이닝실에 있는 과자랑 귤을 꺼내자.」`, 1);
          await era.input();
          await maru.say_and_wait(`후후, 그럼 귤은 내가 깔게.`);
          await era.printAndWait(
            `그렇게 이날은 난롯가에서 따뜻한 분위기 속에 보냈다.`,
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_5: (() => {
    const title = '겨울과 봄의 경계';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`훈련장`);
      await era.printAndWait(
        `${maru.uma_sex_title}들은 이곳에서 땀을 흘리며 희망찬 미래를 향해 나아간다.`,
      );
      await era.printAndWait(
        `아사히배의 세례를 거친 뒤, ${you.name}들은 사츠키상의 전초전인 스프링 스테이크스로 시선을 돌렸다.`,
      );
      await maru.say_and_wait(
        `계획대로야. 세 번째 코너를 돌았으니 지금이 스퍼트할 때!`,
      );
      await maru.say_and_wait(`이대로 액셀을 끝까지 밟는 거야!`);
      await era.printAndWait(
        `도주를 택한 ${maru.uma_sex_title}는 다른 각질의 ${maru.uma_sex_title}에 비해 초반과 중반에 신경을 많이 쓴다.`,
      );
      await era.printAndWait(
        `초반과 중반에 확보한 우위를 굳혀 그대로 승기를 잡으려는 전략일 것이다.`,
      );
      await era.printAndWait(
        `레이스에서는 같은 도주 각질의 선수들이 초반과 중반에 치열하게 다투는 일이 많다.`,
      );
      await era.printAndWait(
        `이렇게 레이스를 빠른 페이스로 이끌어 선입과 추입 각질의 ${maru.uma_sex_title}들의 리듬을 흐트러뜨린다.`,
      );
      await era.printAndWait(
        `하지만 아직 언급하지 않은 선행은 도주끼리 다투느라 종반에 속도가 떨어지는 틈을 타, 아껴 둔 체력을 단숨에 터뜨려 우위를 점한다.`,
      );
      await era.printAndWait(`앞에서 다투는 사이 뒤에 있던 선수가 이득을 보는 셈인가?`);
      await era.printAndWait(
        `하지만 ${maru.name}가 도주를 선택해서 그런 것은 아니다. 그보다는……`,
      );
      await you.say_and_wait(
        `괴물이라 불릴 만한 ${maru.uma_sex_title}다.`,
        true,
      );
      await era.printAndWait(
        `달리기를 즐기는 사이, 평범한 이는 닿을 수 없는 속도를 어느새 손에 넣은 것이다.`,
      );
      era.printButton(`「수고했어. 잠깐 쉬자.」`, 1);
      await era.input();
      await maru.say_and_wait(`하…… 하아…… 후우~`);
      await era.printAndWait(`주변 잔디는 태풍이 지나간 것처럼 흐트러져 있다.`);
      await maru.say_and_wait(`고마워♪`);
      await era.printAndWait(
        `${you.name}이(가) 건넨 수건을 받아 ${maru.name}는 이마의 땀을 닦았다. 젖은 긴 머리카락에서 풍기는 바닐라 향이 ${you.name}의 코끝을 스쳤다.`,
      );
      await era.printAndWait(
        `달리고 나서 진심으로 만족하는 모습. 그것이 ${maru.name}의 진짜 모습일지도 모른다.`,
      );
      era.printButton(`「그리운 향이네.」`, 1);
      await era.input();
      await era.printAndWait(
        `${maru.name}의 젖은 머리를 수건으로 닦아 주며 화제를 찾았다.`,
      );
      await maru.say_and_wait(`${callname}은(는) 향기에 관심이 많니?`);
      await you.say_and_wait(`응, 아주 좋은 살냄새 같아.`);
      await maru.say_and_wait(
        `후훗~ 살냄새랑 비슷하긴 하지만, 사실 이건 향수 냄새야.`,
      );
      await maru.say_and_wait(`기분 전환을 하고 싶어서 골라 본 건데.`);
      await maru.say_and_wait(`그런데 ${callname}의 반응을 보아하니, `);
      await maru.say_and_wait(`꽤 인기가 좋은 모양이네.`);
      await maru.say_and_wait(
        `응, ${maru.elder_sibling_sex_title}도 언제나 유행의 최전선에 서 있는 것 같네.`,
      );
      await era.printAndWait(`${maru.sex}의 기분이 더 좋아진 듯했다.`);
      await you.say_and_wait(
        `음, 나는 유행에 대해서는 잘 모르지만, ${maru.name}는 언제나 굉장히 매력적인 캐릭터야.`,
      );
      await maru.say_and_wait(
        `${callname}이(가) 그렇게 말해도, 상 같은 건 없다구?`,
      );
      era.printButton(`「정말 필요 없어.」`, 1);
      era.printButton(`「이미 아주 멋진 추억을 선물 받았으니까.」`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`어——`);
        await maru.say_and_wait(`${callname}, 그렇게 말하니까 조금 귀엽네~`);
        await era.printAndWait(
          `${maru.name}는 ${you.name}의 머리를 가볍게 쓰다듬었다.`,
        );
        await maru.say_and_wait(
          `흥흥흥~ 역시 그런 모습을 보여 주는 ${callname}, 정말 귀엽다니까♪`,
        );
      } else {
        await maru.say_and_wait(`어——`);
        await era.printAndWait(
          `${maru.name}는 의아한 표정으로 ${you.name}을(를) 바라보았다.`,
        );
        await maru.say_and_wait(
          `트레이너…… ${callname}, 그런 식으로 말하는 건 반칙이야.`,
        );
        await maru.say_and_wait(
          `……${callname}, 다른 애들에게도 똑같은 말을 하는 거야?`,
        );
        await era.printAndWait(
          `곤란한 일이라도 생긴 듯 ${maru.name}는 ${you.name}을(를) 빤히 바라보았다.`,
        );
        await maru.say_and_wait(
          `${callname}, 그렇게 가벼운 사람이 되면 ${maru.elder_sibling_sex_title}인 나도 상처받을 거야.`,
        );
        await you.say_and_wait(`정말 미안해. 다시는 안 그럴게.`);
        await maru.say_and_wait(
          `하아, 아무튼 다른 애들한테는 절대 그런 말 하지 마. 이번 상대가 나라서 다행이지. 아니, 나한테도 안 돼.`,
        );
      }
      await you.say_and_wait(`그건 그렇고, ${maru.name}.`);
      await you.say_and_wait(
        `조금 갑작스럽긴 하지만, 오랫동안 고민해 온 문제가 있어.`,
      );
      await maru.say_and_wait(
        `어머, ${callname}도 ${maru.elder_sibling_sex_title}인 나한테 물어볼 때가 있네?`,
      );
      await maru.say_and_wait(
        `걱정 마, 내가 아는 부분은 전부 다 ${you.name}에게 알려 줄 테니까.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 땀을 닦은 수건의 물기를 짜서 개어 가방에 넣었다.`,
      );
      await you.say_and_wait(
        `${maru.name}는 늘 후배들에게 인기가 많잖아. 그래서 생각해 봤는데.`,
      );
      await you.say_and_wait(
        `혹시, 어디까지나 혹시 말이야. ${maru.name}, ${you.name}`,
      );
      await you.say_and_wait(`${maru.name}의 소원은 뭐야?`);
      await maru.say_and_wait(
        `음——정원을 가꾸는 정원사처럼 잡초가 무성한 땅에 씨앗을 심는 거야.`,
      );
      await maru.say_and_wait(
        `물을 주고 흙을 고르고 비료를 주지. 밖이 어떻게 변하든 그저 기대하면서.`,
      );
      await maru.say_and_wait(
        `때로는 폭풍을 만나고, 흙을 고르다가 골치 아픈 잡초를 만나기도 해. 하지만 제 힘으로 싹을 틔운 꽃들을 바라보다가……`,
      );
      await maru.say_and_wait(
        `아름다운 꽃이 마침내 피어나는 순간, 벅찬 마음에 흘리는 기쁨의 눈물. 그게 내가 존재하는 의미라고 생각해.`,
      );
      await you.say_and_wait(
        `그래서 ${maru.name}는 계속 묵묵히 노력해 왔구나.`,
      );
      await maru.say_and_wait(
        `물론이지. 이렇게 아직 어린 후배들이 천천히 나아가도록 도우며 ${
          maru.couple_title
        }이 결실을 맺을 때를 기다리는 거야.`,
      );
      await maru.say_and_wait(`모든 수고에는 그에 걸맞은 보답이 돌아와.`);
      await era.printAndWait(
        `격한 감정을 드러내지 않고, ${maru.name}는 차분하게 자신의 꿈을 이야기했다.`,
      );
      await you.say_and_wait(`……정말 아름답다, ${maru.name}.`);
      await you.say_and_wait(`고마워, 앞으로도 잘 부탁해.`);
      await maru.say_and_wait(`나야말로 잘 부탁해.`);
      await era.printAndWait(
        `겨울의 추위가 채 가시지 않았음에도 불구하고, ${maru.name}의 미소는 ${you.name}에게 따뜻함을 느끼게 해 주었다.`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_6: (() => {
    const title = '밸런타인데이';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} minoru ハヤカワタヅナ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, falcon, minoru, you, callname) => {
      await era.printAndWait(
        `살고 있는 트레이너 아파트에서 트레센으로 오니, 오늘은 공기가 평소보다 달콤하다.`,
      );
      await era.printAndWait(
        `트레센 학생들은 아침마다 짓던 생기 없는 표정 대신, 둘씩 짝지어 선물을 받을 사람의 표정을 들뜬 목소리로 이야기하고 있었다.`,
      );
      await era.printAndWait(`밸런타인데이가 다시 왔다는 걸 깨달았다.`);
      await era.printAndWait(
        `${maru.uma_sex_title}에게 초콜릿을 받으면 어떻게 보답할지 생각하며 트레이닝실 앞까지 왔지만, 말을 걸어오는 사람은 아무도 없었다.`,
      );
      await you.say_and_wait(
        `커플들은 폭발해 버려라. FFF단의 성화가 ${you.name}들을 모조리 태워 버리기를.`,
        true,
      );
      await era.printAndWait(
        `저주를 퍼부으면서도 공기 속 끈적한 달콤함에서 벗어나려는 듯, 정처 없이 달렸다.`,
      );
      await era.printAndWait(`그러다 누군가와 제대로 부딪쳤다.`);
      era.printButton(`「미안!」`, 1);
      await era.input();
      await era.printAndWait(
        `가벼운 충돌이었지만, 이 향기는 무척이나 익숙했다.`,
      );
      await maru.say_and_wait(`안녕, ${callname}?`);
      await you.say_and_wait(`${maru.name}？`);
      await era.printAndWait(
        `눈앞의 ${maru.teen_sex_title}와 커다란 초콜릿 봉투를 보고 ${you.name}은(는) 생각에 잠겼다.`,
      );
      await you.say_and_wait(`올해도 이렇게 많아?`);
      await maru.say_and_wait(
        `작년에 입학한 후배들과 갓 트레센을 떠난 ${maru.uma_sex_title}들한테 받다 보니 어느새 이렇게 쌓였네.`,
      );
      await era.printAndWait(
        `이대로는 답이 없는데. 둘이서 초콜릿을 주식으로 삼아도…… 아니, 혼자서는 다 못 먹겠어.`,
      );
      await you.say_and_wait(
        `받자니 곤란하고 거절하기도 어려우니 진퇴양난이네.`,
      );
      await era.printAndWait(`이 초콜릿을 해결할 방법이 없을까?`);
      await you.say_and_wait(`그래, 늘 응원해 준 팬들에게 선물하자.`);
      await you.say_and_wait(`이 정도 양이면 팬 서비스로 충분하고도 남겠어!`);
      await maru.say_and_wait(`그거 좋은 생각이네! 근데 장소는 어디가 좋을까?`);
      await era.printAndWait(`내 생각에는……`);
      era.printButton(`「공연실을 하나 빌려서 임시 행사장으로 쓰자!」`, 1);
      era.printButton(`「아예 상점가에서 길거리 공연을 열어 버리자!」`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`좋은 생각이네. 그럼 그렇게 하자.`);
        await era.printAndWait(
          `${you.name}은(는) 전에 연락했던 유명 감독에게 빈 공간이 있는지 물었고, 곧 답장을 받았다.`,
        );
        await era.printAndWait(
          `우마오시에 저녁 팬 감사회를 연다고 공지하자 순식간에 널리 퍼졌다.`,
        );
        await era.printAndWait(
          `팬 감사회는 무사히 끝났지만, 초콜릿이 없어도 ${maru.name}와 악수하고 싶어 하는 팬들이 많았다.`,
        );
        await era.printAndWait(
          `${maru.name}가 미소를 유지하며 3시간 내내 서 있는 모습을 보고 ${you.name}은(는) 아이돌이라는 말에 깊은 경외감을 느꼈다.`,
        );
        await era.printAndWait(
          `다음 날 패션 잡지에는 ${maru.name} 열풍이라는 제목이 실렸다.`,
        );
      } else {
        await maru.say_and_wait(`길거리 라이브? 팔콘이 할 법한 일이네.`);
        await maru.say_and_wait(`의외로 재미있을지도 모르겠어!`);
        await era.printAndWait(
          `${falcon.name}에게 게릴라 라이브를 하는 방법과 ${
            minoru.name
          }의 추적을 피하는 요령을 배웠다.`,
        );
        await era.printAndWait(
          `우마오시에 저녁에 상점가에서 게릴라 라이브를 한다고 공지하자 순식간에 널리 퍼졌다.`,
        );
        await era.printAndWait(
          `팬 감사회는 무사히 끝났지만, 초콜릿이 없어도 ${maru.name}와 악수하고 싶어 하는 팬들이 많았다.`,
        );
        await era.printAndWait(
          `${maru.name}가 미소를 유지하며 3시간 내내 서 있는 모습을 보고 ${you.name}은(는) 아이돌이라는 말에 깊은 경외감을 느꼈다.`,
        );
        await era.printAndWait(
          `그 뒤 열성적인 가게 주인들에게 생필품도 잔뜩 공짜로 받았다.`,
        );
      }
      await you.say_and_wait(`드디어 끝났다.`);
      await era.printAndWait(
        `열정적인 팬들을 한 명 한 명 응대한 뒤, 어수선해진 현장에는 ${you.name}들 두 사람만이 남았다.`,
      );
      await you.say_and_wait(`수고했어. 정말 고생 많았어.`);
      await era.printAndWait(
        `${you.name}은(는) 진심 어린 존경의 눈빛으로 ${maru.name}를 바라보았다.`,
      );
      await era.printAndWait(`석양 아래에서는 신처럼 범접하기 어려워 보였다.`);
      await maru.say_and_wait(
        `아이돌 활동을 응원해 주시는 여러분, ${maru.name}입니다. 앞으로도 잘 부탁드려——아, ${
          callname
        }.`,
      );
      await era.printAndWait(`순간 무슨 말을 해야 할지 알 수 없었다.`);
      await maru.say_and_wait(`그러고 보니, 이것도 있어♪`);
      await era.printAndWait(
        `${maru.name}가 무대 뒤에서 예쁘게 포장된 초콜릿 상자를 꺼냈다.`,
      );
      await maru.say_and_wait(`밸런타인데이 축하해, ${callname}♪`);
      await era.printAndWait(
        `${you.name}은(는) ${maru.name}에게서 초콜릿을 건네받았다.`,
      );
      await maru.say_and_wait(
        `앞으로도 이 ${maru.name}와 함께 걸어가 줘, ${callname}♪`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_7: (() => {
    const title = '우상';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, you) => {
      await era.printAndWait(`트레이닝실`);
      await era.printAndWait(`스프링 스테이크스까지 앞으로 두 주.`);
      await era.printAndWait(
        `마지막 서류를 처리한 뒤 ${you.name}은(는) 펜을 내려놓고 길게 숨을 내쉬었다.`,
      );
      await you.say_and_wait(`드디어 끝났네.`);
      await you.say_and_wait(`하지만……`);
      await era.printAndWait(`계속 품고 있던 의문.`);
      await era.printAndWait(`억지로 억눌러 왔다. 아니, 떠올리고 싶지 않다.`);
      await you.say_and_wait(`${maru.name}.`);
      await era.printAndWait(`정원사.`);
      await you.say_and_wait(`언제나 강자의 입장에서 문제를 마주한다.`);
      await era.printAndWait(
        `가르치는 이로서 자신의 경험을 바탕으로 귀엽고 작은 ${maru.uma_sex_title}들을 최대한 돕고 싶어 한다.`,
      );
      await you.say_and_wait(
        `그러나 정원사의 길은 그토록 이상적인 세계가 아니다.`,
      );
      await maru.say_as_passer_by_and_wait(maru.uma_sex_title, `실례합니다.`);
      await era.printAndWait(`마르고 작은 ${maru.uma_sex_title}가 들어왔다.`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `저기, 마루젠 선배는 여기 계신가요?`,
      );
      await you.say_and_wait(
        `${maru.name}는 볼일이 있어서 잠깐 나갔어. ${you.name}, 여기 앉아서 쉬다 가.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `그렇군요…… 아, 감사합니다!`,
      );
      await era.printAndWait(
        `${you.name}은(는) 당근 주스 한 캔을 소파 앞 탁자에 놓았다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 보고 있던 ${maru.name}의 아사히배 레이스 영상을 다시 재생했다.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `어, 이거 마루젠 선배의!`,
      );
      await you.say_and_wait(`${you.name}도 이 영상을 자주 봐?`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `네! 마루젠 선배가 결승선을 통과하는 클로즈업 장면은 대여섯 번이나 돌려 봤어요!`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `아니, 마루젠 선배의 움직임을 따라 하면 저도 G3에서 이길 수 있지 않을까요!`,
      );
      await you.say_and_wait(`……그래?`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `어…… 네. 본격화가 빨라서 중등부 때부터 ${maru.uma_sex_title}로 출전했어요.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `하지만 삼 년이 지나도 메이크 데뷔 외에는 가장 좋은 성적이 G3에서 5착이에요.`,
      );
      await era.printAndWait(
        `${maru.uma_sex_title}는 당근 주스 캔을 손으로 감싸 쥐고 안의 주황색 액체를 바라보았다.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `노력도 많이 했어요. 그런데 거의 성장하지 못했어요.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `같은 일을 반복하고 또 반복하며 멍하니 지내 왔죠.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `방법이 잘못된 걸지도 모른다고 생각한 적도 있어요.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `하지만 머릿속으로 잠깐 생각만 하고 그대로 내버려 뒀어요.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `아마 저는 ${maru.uma_sex_title}에 어울리지 않나 봐요. 다른 길을 찾아야 할 때인지도 모르겠어요.`,
      );
      await era.printAndWait(
        `말을 마친 ${maru.uma_sex_title}는 조용히 ${you.name}과(와) ${maru.name}가 따낸 트로피를 바라보았다.`,
      );
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `${maru.uma_sex_title}의 세계는 노력한 만큼 보답받는 다정한 세계가 아니다.`,
      );
      await era.printAndWait(`그래도……`);
      era.printButton(`「노력은 언젠가 보답을 받을 거야.」`, 1);
      era.printButton(`「어쩌면 빨리 포기하는 것도 하나의 방법일 수 있어.」`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await you.say_and_wait(`노력은 언젠가 반드시 보답을 받을 거야.`);
      } else {
        await you.say_and_wait(`어쩌면 빨리 포기하는 것이 나을 수도 있어.`);
      }
      await era.printAndWait(
        `마음이 어지럽다. 이 ${maru.uma_sex_title}도 그렇게 생각하고 있겠지.`,
      );
      await maru.say_as_passer_by_and_wait(maru.uma_sex_title, `……감사합니다.`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `아, 죄송해요. 너무 오래 있었네요. 마루젠 선배가 아직 안 오셨다면 먼저 가 볼게요.`,
      );
      await era.printAndWait(
        `빈 캔을 쓰레기통에 넣고 ${maru.uma_sex_title}는 ${you.name}에게 작별 인사를 했다.`,
      );
      await you.say_and_wait(`${you.name}의 무운을 빌게.`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `네, 안녕히 계세요.`,
      );
      await era.printAndWait(
        `씁쓸하게 웃는 ${maru.uma_sex_title}는 트레이닝실 문을 조용히 닫았다.`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_9: (() => {
    const title = '전당 입성 주간(인자 계승)';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`강당
`);
      await era.printAndWait(
        `전당 입성 주간은 트레센에서 가장 중요한 행사 중 하나다.`,
      );
      await era.printAndWait(
        `이날에는 전당에 오른 많은 ${maru.uma_sex_title}가 트레센에서 강연한다.`,
      );
      await era.printAndWait(
        `선배들의 경험은 갓 데뷔했거나 아직 데뷔하지 않은 ${maru.uma_sex_title}들에게 귀중하다.`,
      );
      await era.printAndWait(
        `그만큼 중요한 행사라 ${you.name}과(와) ${maru.name}는 일찍부터 강당에 와서 강연이 시작되기를 기다렸다.`,
      );
      await maru.say_and_wait(
        `만약 경기장에서 선배들이랑 겨뤄 볼 수 있다면, 의외로 재미있을지도 모르겠네♪`,
      );
      await era.printAndWait(
        `강연대에 선 전당 입성 ${maru.uma_sex_title}들을 보며 ${maru.name}는 기대 어린 표정을 지었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 옆에서 핵심 키워드들을 빠르게 포착해 컴퓨터에 기록했다.`,
      );
      await maru.say_as_passer_by_and_wait(
        `전당에 오른 ${maru.uma_sex_title}A`,
        `……여러분도 아시다시피 이 세계는 세 여신님이 창조하셨습니다……`,
      );
      await era.printAndWait(
        `강연대에서 이야기하던 전당 입성 ${maru.uma_sex_title}가 갑자기 세 여신님을 언급했다.`,
      );
      await maru.say_and_wait(`그러고 보니, ${callname}도 알고 있어?`);
      await era.printAndWait(
        `옆에 앉은 ${maru.name}가 ${you.name}에게 시선을 돌렸다.`,
      );
      await maru.say_and_wait(
        `중정의 세 여신상에 기도하면 다른 세계에서 축복을 받을 수 있대.`,
      );
      await maru.say_and_wait(`신기한 힘이 생기는 경우도 있다고 하더라.`);
      await era.printAndWait(
        `주변에서 우레 같은 박수가 터져 나왔다. 강연을 마친 ${maru.uma_sex_title}가 내려오고 행사는 다음 순서로 넘어갔다.`,
      );
      await era.printAndWait(
        `그 틈에 ${you.name}은(는) 고개를 돌려 ${maru.name}를 바라보았다.`,
      );
      await era.printAndWait(
        `주년 기념 의상으로 갈아입은 ${maru.sex}는 ${you.name}의 대답을 기다리고 있었다.`,
      );
      era.printButton(
        `「${maru.name}가 강단에 서는 그날을 기대하고 있을게.」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `잉? ${callname}은(는) 나를 그렇게 높게 평가해 주는 거야?`,
      );
      era.printButton(
        `이렇게 다정하고 어른스러운 ${maru.elder_sibling_sex_title}는 꽤 드물지.`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `앞으로 더 열심히 트레이닝해야겠네!`,
      );
      await you.say_and_wait(`같이 힘내자!`);
      await era.printAndWait(
        `트레이닝실로 돌아온 뒤, ${you.name}들은 밤늦게까지 함께 녹화 테이프를 감상했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_sprg_sta: (() => {
    const title = '스프링 S 전·불꽃의 난초';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`대기실`);
      await era.printAndWait(
        `스프링 스테이크스. 사츠키상의 전초전으로서 수많은 ${maru.uma_sex_title}가 전력을 다하는 무대다.`,
      );
      await era.printAndWait(`하지만 이때……`);
      await you.say_as_passer_by_and_wait(
        `스태프`,
        `세 번 확인했습니다. ${maru.name}를 포함해 출전자는 다섯 명뿐입니다.`,
      );
      await you.say_and_wait(`아…… 고마워요.`);
      await era.printAndWait(
        `${maru.name}에게 레이스장에서 얻는 즐거움은 레이스의 격과 출전하는 ${maru.uma_sex_title}의 수와 수준에 비례한다.`,
      );
      await era.printAndWait(
        `즉, 격이 높아질수록 출전할 수 있는 ${maru.uma_sex_title}의 수와 수준도 높아져 ${maru.name}는 더욱 즐거워한다.`,
      );
      await era.printAndWait(`그것뿐이라면 그나마 괜찮았을 것이다.`);
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `알고 있어. 이번 레이스는 무조건 ${maru.name}가 이길 거야.`,
      );
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}B`,
        `생각할 필요가 있어? ${maru.name} 말고 다른 누가 이기겠어? ${
          maru.sex
        }를 어떻게 꺾을지 상상도 안 돼.`,
      );
      await you.say_as_passer_by_and_wait(
        `출전 ${maru.uma_sex_title}A`,
        `이젠 아무래도 좋아. 어차피 다음은 ${maru.name}가 이길 테니까. 체력을 아껴서 다음 레이스에 대비할래.`,
      );
      await you.say_as_passer_by_and_wait(
        `출전 ${maru.uma_sex_title}A`,
        `애초에 저 괴물을 이길 사람은 없어.`,
      );
      await maru.say_and_wait(`${callname}, 준비됐어.`);
      await era.printAndWait(
        `상황과 어울리지 않는 목소리가 ${you.name}의 회상을 끊었다.`,
      );
      await you.say_and_wait(`응, 이번에도 레이스를 즐기자.`);
      await maru.say_and_wait(
        `그래. 그런데 이번 출전 인원은 최소 조건을 겨우 채웠다더라.`,
      );
      await maru.say_and_wait(`다들 조금만 더 의욕을 내면 좋을 텐데.`);
      await era.printAndWait(
        `${maru.name}는 그다지 기분이 좋지 않은 듯 귀도 처져 있었다.`,
      );
      era.printButton(
        `${maru.name}, 지금까지 트레이닝한 성과를 관객들에게 확실히 보여 주자.`,
        1,
      );
      era.printButton(
        `${maru.name}의 달리기를 보면 ${maru.couple_title}도 분명 생각이 달라질 거야.`,
        2,
      );
      if ((await era.input()) === 1) {
        await maru.say_and_wait(
          `응, ${callname}, 관람석에서 내 달리기를 잘 지켜봐 줘!`,
        );
        await maru.say_and_wait(`이 새빨간 모습을 마음에 똑똑히 새기는 거야!`);
      } else {
        await maru.say_and_wait(`……`);
        await you.say_and_wait(
          `${maru.name}의 뒷모습으로 풀이 죽은 모두가 희망을 되찾게 하자.`,
        );
        await you.say_and_wait(`평소 트레이닝할 때처럼.`);
        await maru.say_and_wait(`맞아!`);
        await era.printAndWait(`${maru.name}의 처졌던 귀가 다시 꼿꼿이 섰다.`);
      }
      await era.printAndWait(
        `더 이야기하고 싶었지만, 스태프가 마이크를 조정하는 소리가 대기실까지 들려왔다.`,
      );
      await maru.say_and_wait(`슬슬 내 차례네. ${callname}, 이따 봐!`);
      await you.say_and_wait(`왜 이렇게 불안하지?`, true);
      await era.printAndWait(
        `${you.name}은(는) 그 불안을 깊이 감추고 담당이 레이스장으로 향하는 모습을 바라보았다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  sprg_sta_win: (() => {
    const title = '스프링 S 후·방황의 시작';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `이변 없이 이번 레이스는 ${maru.name}의 압도적인 승리로 끝났다.`,
      );
      await era.printAndWait(
        `같은 세대의 ${maru.uma_sex_title}가 잇달아 출전을 피한 탓이다.`,
      );
      await era.printAndWait(
        `상대 ${maru.uma_sex_title}들 중 가장 강한 선수조차 이름 없는 G3에서 한 번 우승한 정도였다.`,
      );
      await era.printAndWait(`이 승리에서 정말 즐거움을 느꼈을까?`);
      await you.say_as_passer_by_and_wait(
        `해설`,
        ` ${maru.name}! ${maru.name}가 결승선을 통과합니다!`,
      );
      await you.say_as_passer_by_and_wait(
        `해설`,
        `대차! ${maru.name}의 압도적인 승리입니다!`,
      );
      await maru.say_and_wait(`……`);
      maru.print(`이 승리에서 정말 즐거움을 느꼈을까?`);
      await you.say_and_wait(`${maru.name}？`);
      await you.say_as_passer_by_and_wait(
        `팬 A`,
        `${maru.name}！ ${maru.name}！`,
      );
      await you.say_as_passer_by_and_wait(
        `팬 B`,
        `역시 ${maru.name}가 이길 줄 알았어!`,
      );
      await you.say_as_passer_by_and_wait(
        `팬 A`,
        `역시 슈퍼카라고 불리는 ${maru.uma_sex_title}! 내 안목이 틀리지 않았어!`,
      );
      maru.print(`조금 지쳤어.`);
      await you.say_as_passer_by_and_wait(
        `팬 A`,
        `이대로 압도적인 실력으로 약한 녀석들을 전부 쓸어 버려!`,
      );
      maru.print(`대기실에서 승부복을 갈아입을 때도……`);
      await you.say_as_passer_by_and_wait(
        `출전 ${maru.uma_sex_title} A`,
        `어차피 못 이기는데 그렇게 힘쓸 필요가 있어?`,
      );
      await you.say_as_passer_by_and_wait(
        `출전 ${maru.uma_sex_title} A`,
        `${maru.uma_sex_title}가 달리기로 우상이 되는 전통 따위, 인터넷 방송에 밀려 사라져도 이상하지 않지.`,
      );
      await you.say_as_passer_by_and_wait(
        `출전 ${maru.uma_sex_title} A`,
        `차라리 유행에 맞춰 인터넷 방송인으로 전향하고 은퇴하는 게 낫겠어.`,
      );
      maru.print(
        `무대를 마친 뒤 수군거리는 ${maru.uma_sex_title}들 곁을 지나갔다.`,
      );
      await you.say_as_passer_by_and_wait(
        `출전 ${maru.uma_sex_title} B`,
        `${maru.uma_sex_title}라는 직업은 결국 재능 있는 자들의 사냥터일 뿐이야.`,
      );
      await you.say_as_passer_by_and_wait(
        `출전 ${maru.uma_sex_title} B`,
        `우리처럼 평범한 애들에게 레이스는 계속 들러리만 서며 웃음거리가 되는 무대일 뿐이지. 지긋지긋해.`,
      );
      await you.say_as_passer_by_and_wait(
        `출전 ${maru.uma_sex_title} B`,
        `그러니까 잔디에서 즐거움을 느낀다는 사람들을 전혀 이해할 수가 없어.`,
      );
      await you.say_as_passer_by_and_wait(
        `출전 ${maru.uma_sex_title} B`,
        `하아, 예전에 내가 ${maru.uma_sex_title}를 동경했다니, 지금 생각하면 부끄럽네.`,
      );
      era.drawLine();
      await you.say_and_wait(` ${maru.name}？`);
      await era.printAndWait(
        ` ${maru.name}는 압도적인 여유를 보이며 연승을 거뒀다.`,
      );
      await era.printAndWait(
        `사츠키상의 전초전일 뿐이지만, 앞으로 있을 사츠키상도 문제없겠지.`,
      );
      await era.printAndWait(`그렇게 생각하며 문을 밀었다.`);
      await maru.say_and_wait(`아, ${callname}, 마중 나와 준 거야?`);
      await era.printAndWait(
        ` ${maru.name}는 겉보기에는 평소와 거의 다르지 않았다.`,
      );
      await maru.say_and_wait(
        ` ${maru.elder_sibling_sex_title}의 달리기는 어땠어?`,
      );
      era.printButton(`「……그럴지도.」`, 1); //be1
      era.printButton(`「……${maru.name}.」`, 2);
      era.print(
        '【경고. 신중하게 선택할 것. 그렇지 않으면 모든 것이 돌이킬 수 없게 된다!】',
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`뭐라고?`);
        era.printButton(`아, 미안. 잠깐 멍하니 있었어.`, 1);
        await era.input();
        await you.say_and_wait(
          `역시 ${maru.elder_sibling_sex_title}, 정말 훌륭했어!`,
        );
        await maru.say_and_wait(`응응, 나도 그렇게 생각해.`);
        await maru.say_and_wait(`음——이따 어디서 밥 먹을까?`);
        await maru.say_and_wait(`${callname}, 추천할 만한 곳 있어?`);
        await you.say_and_wait(`사이제리야에 가자. 거기 맛있어.`);
        await maru.say_and_wait(`응! 그럼 같이 가 보자.`);
      } else {
        await maru.say_and_wait(`어머, ${callname}, 무슨 일이야?`);
        await you.say_and_wait(`내일 밤에 시간 있어?`);
        await you.say_and_wait(`이야기하고 싶은 게 있어. 옥상에서.`);
        await maru.say_and_wait(`여기서는 할 수 없는 이야기야?`);
        await you.say_and_wait(`미안해. 딱 한 번만 내 말을 들어 줘. 부탁이야.`);
        await maru.say_and_wait(`어? ${callname}?`);
        await you.say_and_wait(`부탁할게.`);
        await era.printAndWait(`${you.name}은(는) 깊이 고개를 숙였다.`);
        await maru.say_and_wait(`그렇게까지 하다니……`, true);
        await maru.say_and_wait(` ${callname}, 그렇게까지 말한다면……`);
        await maru.say_and_wait(`알겠어.`);
        await era.printAndWait(
          ` ${maru.name}는 조금 걱정스러운 표정으로 당신을 바라보았다.`,
        );
        await you.say_and_wait(`그럼 내일 밤 9시에 학원 옥상에서 만나자.`);
        await era.printAndWait(
          `등은 이미 땀으로 젖어 있었다. 최악의 상황도 각오했지만 ${maru.name}의 동의를 얻자 ${you.name}은(는) 길게 숨을 내쉬었다.`,
        );
        await maru.say_and_wait(
          `${maru.elder_sibling_sex_title}는 ${callname}에게 상처를 주는 짓을 한 걸까?`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_12: (() => {
    const title = '팬 감사제';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `팬 감사제는 레이스장에서 활약하는 ${maru.uma_sex_title}들을 응원해 온 팬들에게 감사하기 위해 열리는 축제다.`,
      );
      await era.printAndWait(
        `이날 트레센은 문을 활짝 열고, 재학생들은 학생회가 마련한 메인 무대와 보조 무대에서 공연한다.`,
      );
      await era.printAndWait(
        `${maru.uma_sex_title}의 길을 걷는 ${maru.uma_sex_title}들은 더욱 많은 관심을 받곤 한다.`,
      );
      await era.printAndWait(`댄스 연습실
`);
      await maru.say_and_wait('하나, 둘, 셋, 넷, 이 정도는 거뜬하지♪');
      await maru.say_and_wait('다섯, 여섯, 일곱, 여덟, 아무렇지도 않아♪');
      await era.printAndWait(
        `${you.name}은(는) ${maru.name}가 마지막으로 예행연습을 하는 것을 지켜봤다.`,
      );
      await maru.say_and_wait(`${callname}${you.name}, 어때 보여?`);
      era.printButton(`「정말 그리운 노래네.」`, 1);
      await era.input();
      await era.printAndWait(
        `세기말 감성의 유행가가 귓가에 울려 퍼졌고, 격렬한 비트와 경쾌한 리듬에 맞춰 스텝을 밟는 ${maru.name}의 모습이 보였다.`,
      );
      await era.printAndWait(
        `황홀한 기분 속에 마치 학창 시절로 돌아간 것만 같았다. 방과 후에 옹기종기 모여 최신 CD 앨범에 대해 떠들던 그때 말이다.`,
      );
      await maru.say_and_wait(
        `${callname}, 이건 지금 가장 핫한 최신 유행곡이라구? 그렇게 멍하니 있으면 유행에 뒤처져 버려.`,
      );
      await maru.say_and_wait(`슬슬 내 차례네.`);
      await maru.say_and_wait(`${callname}은(는) 무대 아래에서 제대로 감상해 줘.`);
      await era.printAndWait(
        `일부 관객들은 이런 레트로한 음악을 무척이나 좋아했다.`,
      );
      await era.printAndWait(
        `${maru.name}는 그 관객들을 과거의 환상 속으로 이끌었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  sister_annoyance: (() => {
    const title = (maru) => `${maru.elder_sibling_sex_title}의 고민`;
    /**
     * トレーナーがマルゼンスキーを励まし、信じられたとき立て直す
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`옥상`);
      era.println();
      await era.printAndWait(`오늘 처리할 자료를 정리하고 옥상으로 올라왔다.`);
      await era.printAndWait(
        `레이스가 끝난 뒤 ${maru.name}는 조금 이상했다. 대화할 때도 딴생각에 잠겨 있었다.`,
      );
      await era.printAndWait(
        `착각일지도 모른다. 하지만 친구로서 ${maru.sex}의 문제를 더 깊이 알고 싶다.`,
      );
      await you.say_and_wait(
        `한꺼번에 모두 해결할 수 있다면 더 바랄 것이 없겠지.`,
      );
      await era.printAndWait(
        `${maru.name}의 실력이라면 어떤 좌절도 쉽게 넘어설 수 있을 것이다.`,
      );
      await you.say_as_passer_by_and_wait(
        `의사`,
        `${maru.name}의 정강이뼈에 손상이 있습니다.`,
      );
      await you.say_as_passer_by_and_wait(
        `의사`,
        `계속하면 걷거나 달리는 능력에 지장이 생길 수 있습니다.`,
      );
      await you.say_as_passer_by_and_wait(
        `의사`,
        `트레이닝을 중단하고 당분간 충분히 쉬는 편이 좋겠습니다.`,
      );
      await you.say_and_wait(`알겠습니다.`);
      await era.printAndWait(
        `진단서를 가방에 넣고 나가려는데 의사가 불러 세웠다.`,
      );
      await you.say_as_passer_by_and_wait(
        `의사`,
        `당신이 ${maru.name}의 트레이너시죠?`,
      );
      await you.say_and_wait(`그렇습니다.`);
      await you.say_as_passer_by_and_wait(
        `의사`,
        `${maru.name}의 다리는 생각보다 약합니다.`,
      );
      await you.say_as_passer_by_and_wait(
        `의사`,
        `그 때문인지 당신도 오랫동안 제대로 잠들지 못하신 것 같군요.`,
      );
      await you.say_and_wait(`그렇습니다.`);
      await you.say_as_passer_by_and_wait(
        `의사`,
        `주목받는 ${maru.uma_sex_title}를 지도하는 트레이너의 부담은 상상 이상이죠.`,
      );
      await you.say_as_passer_by_and_wait(`의사`, '몸을 잘 챙기세요.');
      await you.say_and_wait(`……감사합니다.`);
      await maru.say_and_wait(`${callname}？`);
      await era.printAndWait(
        `생각에 잠겨 있던 중 ${maru.name}의 목소리가 들렸다. 약속 시간까지는 아직 십 분 정도 남아 있다.`,
      );
      await you.say_and_wait(`어? 아, 나도 방금 왔어.`);
      await era.printAndWait(
        `흰 원피스를 입은 ${maru.uma_sex_title}가 옥상에 나타났다.`,
      );
      await maru.say_and_wait(` ${callname}, 생각보다 마음이 급한가 보네.`);
      await you.say_and_wait(
        `응, 오늘 날씨가 좋다는 걸 알고 있었으니까 ${maru.name}하고 함께 보내고 싶었어.`,
      );
      await you.say_and_wait(
        `자세히 보니 ${maru.name}는 평소보다 더 아름답네. 게다가 재스민 향도 나고.`,
      );
      await maru.say_and_wait(
        `${callname}, 모처럼 먼저 불러 줬잖아. 제대로 꾸미지 않고 나올 수는 없지.`,
      );
      await you.say_and_wait(`그렇게 말하니 내가 예의를 차리지 못했네.`);
      await era.printAndWait(
        `어디서부터 말을 꺼내야 할지 몰라 입을 다물었다. 결국 ${maru.name}가 먼저 화제를 꺼냈다.`,
      );
      await maru.say_and_wait(
        ` ${callname}, 평소에 열심히 하는 모습을 보면 ${maru.sex_code !== 1 ? '아가씨' : '미남'}인 나도 무척 감동한다니까.`,
      );
      await maru.say_and_wait(
        `어떻게 하면 ${callname}도 좀 쉬게 할 수 있을까 계속 생각했는데, 먼저 ${callname}에게 이런 부탁을 받게 될 줄이야.`,
      );
      await maru.say_and_wait(
        `사실 늘 그렇게 긴장하고 있을 필요는 없어. 좀 더 ${maru.elder_sibling_sex_title}인 나를 의지해 줘.`,
      );
      await era.printAndWait(`${maru.name}의 격려에 긴장도 서서히 풀렸다.`);
      await you.say_and_wait(
        `알겠어. 앞으로도 ${maru.name} ${maru.elder_sibling_sex_title}, 잘 부탁해.`,
      );
      await you.say_and_wait(`그럼 본론으로 들어가자.`);
      await era.printAndWait(
        `너무 긴장해서 새하얘졌던 머릿속도 서서히 정리되었다.`,
      );
      await you.say_and_wait(`너에 대해 좀 더 알려 줬으면 해.`);
      await maru.say_and_wait(
        `나는 ${callname}하고 늘 함께 있잖아. 새삼스럽게 왜 그래?`,
      );
      await you.say_and_wait(`아니, 그런 뜻이 아니야.`);
      await era.printAndWait(
        `단호하게 고개를 저으며 ${maru.sex}의 눈을 똑바로 바라보았다.`,
      );
      await you.say_and_wait(`남의 사생활을 캐묻는 게 좋지 않다는 건 알아.`);
      await you.say_and_wait(
        `하지만 트레이닝실에서 쉬다가 문득 본 ${maru.name}의 가라앉은 표정.`,
      );
      await you.say_and_wait(
        `괴로웠어. 무거운 돌이 가슴을 누르는 것 같았지. 그때 깨달았어. 사실 나는 아직 ${maru.name}에 대해 잘 모르고 있구나.`,
      );
      await you.say_and_wait(`그러니까 이건 부탁이 아니라 선언이야.`);
      era.printButton(`「${maru.name}에 대해 더 알고 싶어.」`, 1);
      await era.input();
      await era.printAndWait(
        `${maru.name}의 눈이 크게 뜨였다. 빠르게 눈을 깜빡이더니 피하려던 시선을 곧 되돌렸다.`,
      );
      await maru.say_and_wait(`나도 같은 마음으로 답해야겠네.`);
      await maru.say_and_wait(` ${callname}, 무엇을 알고 싶어?`);
      await you.say_and_wait(
        `내가 알고 싶은 건 ${maru.name}가 요즘 왜 이렇게 풀이 죽어 있는지야.`,
      );
      await you.say_and_wait(
        `즐거움을 느낄 수 없게 된 거야? 아니면 함께 달리는 ${maru.uma_sex_title}들이 자포자기한 모습을 봤기 때문이야?`,
      );
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `${maru.name}는 망설이고 있다. ${maru.sex}는 진심을 털어놓아도 될지 고민하고 있다.`,
      );
      await maru.say_and_wait(`……미안해.`);
      await era.printAndWait(`${maru.name}의 목소리가 가라앉은 듯했다.`);
      era.printButton(`「아니, 내가 미안해.」`, 1);
      await era.input();
      await you.say_and_wait(`사과할 사람은 나야. 너무 성급했어.`);
      await you.say_and_wait(`계속 기다릴게. 네가 먼저 이야기해 주는 날까지.`);
      await you.say_and_wait(
        `그러니까 가슴을 펴. 너는 내가 본 이들 중 가장 아름다운 ${maru.uma_sex_title}야.`,
      );
      await maru.say_and_wait(`땡큐, ${callname}.`);
      await era.printAndWait(`${maru.name}는 평소 모습으로 돌아왔다.`);
      await maru.say_and_wait(`역시 믿음직한 어른이네.`);
      await maru.say_and_wait(
        `지금 기분은, 계속 돌봐 주던 ${you.sex_code !== 1 ? '여동생' : '남동생'}이 갑자기 나를 돌봐 주겠다고 나선 것 같아.`,
      );
      await maru.say_and_wait(
        `${maru.elder_sibling_sex_title}인 나로서는 마음이 복잡한걸——`,
      );
      await era.printAndWait(
        `${maru.name}는 함께 자란 ${you.sex_code !== 1 ? '여동생' : '남동생'}을 바라보는 듯 다정한 눈빛을 보냈다.`,
      );
      await maru.say_and_wait(`그럼 약속이야——`);
      await maru.say_and_wait(
        `무슨 일이 생기든 ${maru.elder_sibling_sex_title}인 나한테 상의해야 해?`,
      );
      era.printButton(
        `「무슨 일이 생기든 ${maru.name}에게는 꼭 이야기할게.」`,
        1,
      );
      await era.input();
      await you.say_and_wait(
        `믿음직한 ${maru.elder_sibling_sex_title}라면 어떤 문제든 쉽게 해결하겠지.`,
      );
      await maru.say_and_wait(`그럼 그렇게 하자.`);
      await you.say_and_wait(`나도 마찬가지야.`);
      await maru.say_and_wait(
        `그러고 보니 오늘 날씨가 좋네. 애차를 타고 드라이브하러 가자——`,
      );
      await you.say_and_wait(`좋아.`);
      await you.say_and_wait(`뭔가 잊은 것 같은데.`, true);
      await era.printAndWait(
        `웃으며 이야기하다 애차로 향했다. 그 뒤 비명이 트레센에 울려 퍼졌다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_16: (() => {
    const title = (maru) => `좋은 밤이야, ${maru.name}야`;
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} minoru ハヤカワタヅナ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, minoru, you, callname) => {
      await era.printAndWait(`아파트.`);
      await you.say_and_wait(
        `앞으로의 트레이닝 계획은 일단 여기까지 하자.`,
        true,
      );
      await era.printAndWait(
        `부드러운 조명 아래에서 ${you.name}은(는) 컴퓨터 앞에 앉아 휴일 동안 쌓인 업무를 처리하고 있다. 낮 동안 트레센을 채우던 뜨거운 응원과 달리, 밤의 트레이너 기숙사는 유난히 조용하다.`,
      );
      await you.say_and_wait(`벌써 12시가 다 되어 가네.`, true);
      await era.printAndWait(
        `마지막 서류를 이사장에게 보낸 뒤 ${you.name}은(는) 피곤한 눈을 비비며 소파에 온몸을 맡겼다.`,
      );
      await you.say_and_wait(`씻고 푹 자야겠다.`, true);
      await era.printAndWait(
        `눈을 꼭 감고 하루의 피로를 가라앉히려 했다. 그리고 크게 숨을 들이마시며 쌓인 짜증을 몸 밖으로 내보냈다.`,
      );
      await era.printAndWait(`부르르르.`);
      await you.say_and_wait(`이런 시간에 영업 전화가 오지는 않겠지.`, true);
      await era.printAndWait(
        `몸은 움직이기 싫었지만, 직장인의 본능으로 스마트폰을 열었다.`,
      );
      await you.say_and_wait(`${maru.name}？`);
      await era.printAndWait(
        `담당 ${maru.uma_sex_title}가 왜 한밤중에 전화를 걸었는지는 모르겠다. 그래도 망설임 없이 받았다.`,
      );
      await maru.say_and_wait(`헬로~ ${callname}, 오늘 밤하늘 정말 멋지네~`);
      await you.say_and_wait(
        `여기서는 늘 보던 풍경 말고 특별한 게 안 보이는데.`,
      );
      await you.say_and_wait(`게다가, `);
      await era.printAndWait(
        `아직 남은 짜증이 무심코 튀어나오지 않도록 크게 숨을 들이마셨다.`,
      );
      era.printButton(`「밤새우면 피부에 주름 생겨. 얼른 자!」`, 1);
      await era.input();
      await maru.say_and_wait(
        `못 말리겠네><! ${callname}, 부담되는 말만 하잖아. 이러면 작별할 수밖에 없겠는걸.`,
      );
      await era.printAndWait(
        `스마트폰의 이모티콘을 보고 그 사용법을 떠올리는 데 꼬박 십 초가 걸렸다.`,
      );
      await you.say_and_wait(`그러고 보니 ${maru.name}, 갑자기 왜 전화했어?`);
      await maru.say_and_wait(
        `한숨 자고 깼더니 다시 잠이 안 와서. 그래서 ${callname}에게 찾아왔지.`,
      );
      await you.say_and_wait(`그래?`);
      await era.printAndWait(
        `엄청난 말을 들은 것 같았지만, 그래도 계속 귀를 기울였다.`,
      );
      await maru.say_and_wait(
        `처음에는 잠이 안 와서 기운이 없었는데, 밖에 뜬 달을 보니 일등으로 댓글을 단 것처럼 기분이 좋아졌어. 특히 트레센을 지날 때 시원한 밤바람을 맞으니 마음이 들뜨더라⭐`,
      );
      era.printButton(`「설마——」`, 1);
      await era.input();
      await era.printAndWait(
        `트레이너 제복으로 갈아입기도 전에 임시 거처의 문이 열렸다.`,
      );
      await maru.say_and_wait(`좋은 밤이야, ${callname}.`);
      await you.say_and_wait(`어?`);
      await era.printAndWait(
        `${maru.sex}의 미소 속에 놀란 자신의 모습이 비쳤다.`,
      );
      await maru.say_and_wait(` ${callname}?`);
      era.drawLine();
      await era.printAndWait(
        `한바탕 잔소리를 듣고 난 ${maru.name}는 소파 위에 얌전히 무릎을 꿇고 앉아 있다.`,
      );
      await maru.say_and_wait(`고마워♪`);
      await era.printAndWait(
        `그 뒤 변덕스러운 손님과 함께 탁자 위 잡동사니를 치우고, 인스턴트 홍차를 ${maru.sex}에게 건넸다.`,
      );
      await era.printAndWait(
        `홍차를 조금씩 홀짝이는 ${maru.name}를 보고 자기도 모르게 한숨이 나왔다.`,
      );
      await era.printAndWait(
        `이렇게 늦은 시간에 ${maru.sex}를 혼자 돌려보내는 건 위험하다. 그렇다고 학생을 멋대로 재울 수도 없다.`,
      );
      await you.say_and_wait(`어떻게 하지?`, true);
      await maru.say_and_wait(`저기, ${callname}?`);
      await era.printAndWait(`${maru.name}가 대답을 기다리고 있다. 이럴 땐……`);
      era.printButton(`오늘 밤에는 ${maru.sex}를 재운다.`, 1);
      era.printButton(`「집까지 데려다주고 ${maru.sex}를 돌려보낸다.」`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`${callname}, 안색이 안 좋아.`);
        await you.say_and_wait(
          `다음 주 트레이닝 계획에서 고칠 부분을 고민하느라 그래.`,
          true,
        );
        await maru.say_and_wait(`${callname}, 수고했어.`);
        await era.printAndWait(
          `${maru.name}가 습관처럼 머리를 쓰다듬었다. 처음에는 강하게 저항했지만 오래 계속되자 트레이너로서의 체면은 코웃음 두 번으로 대신하게 되었다.`,
        );
        await maru.say_and_wait(`미안해. 다시는 안 그럴게.`);
        await era.printAndWait(
          `예전처럼 형식적으로 얼버무리는 사과가 아니라, 이번에는 걱정을 끼쳤다는 미안함이 더 크게 담겨 있었다.`,
        );
        await era.printAndWait(
          `${maru.sex}의 가엾은 모습을 보니 매정해질 수 없어 다시 한숨을 쉬었다.`,
        );
        await you.say_and_wait(
          `이렇게 늦은 시간에 돌려보내기도 걱정돼. 오늘은 여기서 자.`,
        );
        await era.printAndWait(
          `파파라치도, 다음 날의 가십 기사도, ${
            minoru.name
          }의 차가운 시선과 꾸중도, 한 달 치 월급도 이제 알 게 뭐야.`,
        );
        await you.say_and_wait(
          `넌 내 침대에서 자. 나는 소파에서 하룻밤 보내면 돼.`,
        );
        await maru.say_and_wait(`음——그건 조금 아쉬운데.`);
        await you.say_and_wait(`한밤중에 소동을 벌인 장본인이 요구도 많네!`);
        await maru.say_and_wait(`정·말·로·미·안·해!`);
        await you.say_and_wait(`그런 오해 살 만한 말은 하지 마.`);
        await era.printAndWait(
          `연애 게임에서나 나올 법한 로맨틱 코미디가 현실에서 벌어졌다. 기뻐해야 할 일인데.`,
        );
        await era.printAndWait(
          `하지만 만반의 준비를 한 파파라치가 한밤중에 ${maru.name}를 들이는 모습을 찍어 다음 날 기사 제목을 장식하고, ${
            minoru.name
          }에게 차가운 시선을 받으며 가장 중요한 월급까지 날아갈 모습을 생각하니……`,
        );
        await you.say_and_wait(`……`);
        await era.printAndWait(`${you.name}은(는) 꽤 괴로운 하룻밤을 보냈다.`);
      } else {
        await you.say_and_wait(`……${maru.name}, 데려다줄게.`);
        await maru.say_and_wait(`어? 정말?`);
        await era.printAndWait(
          `한바탕 실랑이 끝에 ${maru.name}를 자신의 아파트로 돌아가도록 설득했다.`,
        );
        await era.printAndWait(
          `이 행동조차 ${maru.sex}의 예상 안에 있었다는 사실은 몰랐다.`,
        );
        await maru.say_and_wait(
          `시간도 늦었으니 ${
            callname
          }도 여기서 자고 가. 이 근처 파파라치가 의외로 많거든.`,
        );
        await maru.say_and_wait(`아까 실랑이하는 소리에 그 사람들도 깼겠지?`);
        await era.printAndWait(
          `${callname}도 다음 날 연예 잡지의 제목을 장식하고 싶지는 않잖아?`,
        );
        await era.printAndWait(`진짜 함정은 이것이었다는 걸 문득 깨달았다.`);
        await maru.say_and_wait(`그럼 ${callname}, 잘 자!`);
        await era.printAndWait(
          `${maru.name}의 여분 담요를 덮고 소파에서 하룻밤을 보냈다.`,
        );
        await era.printAndWait(
          `다음 날 큰 뉴스의 냄새를 맡은 파파라치와 머리싸움을 벌인 이야기는 또 다른 모험이다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_sats_sho: (() => {
    const title = '사츠키상 전·다시 한번';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`레이스 전·기자 회견`);
      await you.say_as_passer_by_and_wait(
        `기자 A`,
        `${maru.actual_name_with_title}의 이야기를 듣게 되어 영광입니다.`,
      );
      await you.say_as_passer_by_and_wait(
        `기자 A`,
        `이번 목표 역시 사츠키상 우승인가요?`,
      );
      await maru.say_and_wait(`네. 담당 트레이너와 상의해서 정한 목표예요.`);
      await you.say_as_passer_by_and_wait(
        `기자 B`,
        `실례합니다. 지난 스프링 스테이크스에서는 출전한 ${maru.uma_sex_title}가 최소 조건인 5명뿐이었다고 들었습니다.`,
      );
      await you.say_as_passer_by_and_wait(
        `기자 B`,
        `${maru.uma_sex_title}들이 ${maru.name}를 이길 수 없다고 판단해서 잇달아 출전을 피했다고 봐도 될까요?`,
      );
      await maru.say_and_wait(
        `스프링 스테이크스에 관해서는 담당 트레이너에게 물어봐 주세요. 여기서는 답변하지 않겠습니다.`,
      );
      await you.say_as_passer_by_and_wait(
        `기자 C`,
        `질문하겠습니다. 슈퍼카라고 불리는 당신은 앞으로 무패 삼관을 목표로 더비에 출전할 건가요?`,
      );
      await maru.say_and_wait(`현재로서는 그게 목표예요.`);
      await you.say_as_passer_by_and_wait(`기자 C`, `알겠습니다. 감사합니다.`);
      await maru.say_and_wait(`별말씀을요.`);
      era.drawLine({ content: '기자 회견 후' });
      await era.printAndWait(`대기실
`);
      await you.say_and_wait(`${maru.name}, 준비됐어? 다음은 네 차례야.`);
      await maru.say_and_wait(`벌써 준비됐어.`);
      await you.say_and_wait(`늘 그랬듯 네 생각대로 자유롭게 달려 줘.`);
      await maru.say_and_wait(
        `흥흥, 이번에는 ${callname}도 내 달리기에 푹 빠질 거야.`,
      );
      await maru.say_and_wait(`그 순간이 기대되네——`);
      await maru.say_and_wait(`아, 슬슬 나가야겠다. 그럼 이따 봐!`);
      await you.say_and_wait(`잘 풀리기를.`, true);
      await maru.say_and_wait(`응.`);
      await era.printAndWait(`${maru.name}는 레이스장으로 향했다.`);
      await you.say_and_wait(`……${maru.name}, 계속 지켜보고 있을게.`, true);
    };
    f.title = title;
    return f;
  })(),
  sats_sho_win: (() => {
    const title = '사츠키상 후·불꽃처럼 아름다운 질주';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`위닝 라이브
`);
      await era.printAndWait(
        `스태프들은 위닝 라이브 장비를 점검하느라 분주했다.`,
      );
      await you.say_as_passer_by_and_wait(
        `스태프 A`,
        `위닝 라이브가 곧 시작됩니다. 마지막으로 조정해 주세요!`,
      );
      await you.say_as_passer_by_and_wait(
        `스태프 B`,
        `분사 장치 위치, 다시 확인해요! 역시 ${maru.name}가 이길 줄 알았어.`,
      );
      await you.say_as_passer_by_and_wait(
        `스태프 B`,
        `메이크 데뷔 때부터 ${maru.sex}를 지켜봤거든.`,
      );
      await you.say_as_passer_by_and_wait(
        `스태프 C`,
        `조명은 조금 더 왼쪽으로! 아, 나는 호프풀 S 때부터 봤어.`,
      );
      await you.say_as_passer_by_and_wait(
        `스태프 C`,
        `엄청나게 빠른 ${maru.uma_sex_title}가 있다는 말은 들었지만, 직접 보기 전까지는 실감이 안 나더라.`,
      );
      await you.say_as_passer_by_and_wait(
        `스태프 B`,
        `준비 완료! 다음 도쿄 우준에서 이기는 것도 분명 ${maru.sex}일 거야!`,
      );
      await you.say_as_passer_by_and_wait(`스태프 A`, `전원! 위치로! 준비!`);
      await era.printAndWait(`예상대로 ${maru.name}는 승리했다.`);
      await era.printAndWait(
        `결승선을 통과하는 마지막 순간에도, 위닝 라이브의 중앙 무대에서도 수많은 팬을 사로잡은 ${maru.name}.`,
      );
      await era.printAndWait(`만족스러운 미소와 함께 대기실로 돌아왔다.`);
      era.printButton(`「수고했어. 무대 정말 멋졌어.」`, 1);
      await era.input();
      await era.printAndWait(
        `${maru.name}의 롱부츠를 조심스럽게 벗기고, 발목부터 허벅지까지 힘을 세심하게 조절하며 마사지했다.`,
      );
      await you.say_and_wait(
        `왕도 노선의 첫 레이스는 다르네. 기자 회견도, 그 뒤의 레이스와 위닝 라이브도 같은 G1인 아사히배와는 비교가 안 돼.`,
      );
      await you.say_and_wait(
        `앞으로는 더 성대한 레이스도 있어. ${maru.name} ——`,
      );
      await era.printAndWait(
        `오 분쯤 마사지한 뒤 손가락으로 허벅지 안쪽을 가볍게 누르며 ${maru.name}의 반응을 살피면서 이야기를 이어 갔다.`,
      );
      await maru.say_and_wait(
        `응~ ${callname}, 이렇게 신경 써 줘서 고마워. 움직일 수 없을 만큼 지쳤다기보다는 ${maru.elder_sibling_sex_title}인 나는 몸도 마음도 충만해.`,
      );
      await era.printAndWait(
        `미소 짓는 ${maru.name}에게서 이따금 작은 숨소리가 새어 나왔다.`,
      );
      await maru.say_and_wait(
        `이렇게 더 많은 ${maru.uma_sex_title}에게 내 뒷모습을 보여 주면 ${maru.couple_title}도 레이스장에서 달리는 모습을 동경하게 되겠지.`,
      );
      await maru.say_and_wait(
        `그리고 열심히 트레이닝하면서 달리는 즐거움을 천천히 찾아가는 거야.`,
      );
      await maru.say_and_wait(
        `그렇게 후배들이 내 뒷모습을 쫓아 노력하는 모습을 보면 기뻐할 수 있겠지.`,
      );
      await era.printAndWait(
        `약한 통증과 약간의 저릿함 속에서, 평소보다 밝게 빛나는 ${maru.name}의 눈이 곧장 이쪽을 바라보고 있다.`,
      );
      await you.say_and_wait(
        `응. 한 달 뒤 도쿄 우준을 위해 앞으로는 스태미나를 높여야겠어.`,
      );
      await maru.say_and_wait(`음——이따 어디서 축하할까?`);
      await era.printAndWait(
        `마사지가 끝나자 아쉬운 듯 ${maru.name}가 앉은 자리에서 만족스러운 소리를 냈다.`,
      );
      await maru.say_and_wait(`고급 레스토랑? 편안한 사이제리야? 아니면……`);
      era.printButton(`「차라리 트레이닝실에서 축하하자!」`, 1);
      await era.input();
      await you.say_and_wait(
        `피자랑 음료도 준비하고, 후배들도 불러서 축하하는 거야.`,
      );
      await maru.say_and_wait(
        `${callname}, 네 말대로 하자. 저녁 파티가 기대되네♪`,
      );
      await era.printAndWait(
        `부츠를 신고 다시 걸음을 익히는 ${maru.teen_sex_title}의 표정에는 앞으로 있을 축하 자리에 대한 기대가 가득하다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  sats_sho_5: (() => {
    const title = '사츠키상 후·기어 변속';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`대기실
`);
      await maru.say_and_wait(`자! ${callname}!`);
      await era.printAndWait(
        `위닝 라이브를 마치고 내려온 ${maru.name}가 대기실로 돌아왔다.`,
      );
      await you.say_and_wait(`어떤 느낌이었어?`);
      await era.printAndWait(
        `${maru.name}의 부츠를 조심스럽게 벗기고, 발목부터 허벅지까지 힘을 세심하게 조절하며 마사지했다.`,
      );
      await maru.say_and_wait(
        `이 느낌, 정말 좋아! 역시 클래식 삼관의 사츠키상이야. 삼관을 다투려고 모인 ${maru.uma_sex_title}들 모두 강자였어.`,
      );
      await maru.say_and_wait(
        `앞으로 더비에서 더 큰 레이스를 경험할 수 있다니, ${maru.elder_sibling_sex_title}인 나도 정말 기다려지네.`,
      );
      await era.printAndWait(
        `오 분쯤 마사지한 뒤 손가락으로 허벅지 안쪽을 가볍게 누르며 ${maru.name}의 반응을 살피면서 이야기를 이어 갔다.`,
      );
      await you.say_and_wait(`그 기세로 더비에 도전하자!`);
      await maru.say_and_wait(`맞아! 바로 이 느낌이야!`);
      await era.printAndWait(
        `마사지가 끝난 뒤 ${you.name}은(는) 조심스럽게 ${maru.name}에게 부츠를 신겨 주었다. 자리에서 일어난 ${maru.name}는 의욕 넘치는 모습으로 다음 목표를 정했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_17: (() => {
    const title = '동경';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      const ret = [];
      await era.printAndWait(`트레이닝실`);
      era.println();
      await era.printAndWait(
        `짙은 다크서클과 가시지 않는 커피 냄새. ${you.name}은(는) 손에 든 서류를 몇 번이고 다시 읽고 있다.`,
      );
      await you.say_and_wait(`지금 상태로 더비에 도전한다면……`);
      await era.printAndWait(`앞으로 어떤 능력을 중점적으로 키워야 할까?`);
      era.printButton(`「스태미나와 근성!」`, 1);
      era.printButton(`「스피드와 파워!」`, 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await you.say_and_wait(
          `여름 합숙에서 그동안 소홀했던 스태미나를 끌어올리자.`,
        );
      } else {
        await you.say_and_wait(`역시 스피드와 파워가 낫겠네.`);
      }
      await you.say_and_wait(`에취!`);
      await era.printAndWait(
        `재채기에 집중이 끊겼다. ${you.name}은(는) 오른쪽에 놓인 휴지 한 장을 뽑아 쓰고 가득 찬 쓰레기통에 버렸다.`,
      );
      await you.say_and_wait(`이 서류만 정리하면……`, true);
      await era.printAndWait(
        `몸이 차갑다. 온몸을 얼음 속에 묻은 것 같고 시야도 흐릿해지기 시작했다.`,
      );
      await era.printAndWait(
        `젊고 튼튼하니 일주일쯤 밤을 새워도 괜찮을 줄 알았다. 하지만 몸이 먼저 무너졌다.`,
      );
      await you.say_and_wait(`이놈의 몸이. 감기약, 감기약이 어디 있지?`);
      await era.printAndWait(
        `서랍을 열어 해열제라고 쓰인 종이 상자를 꺼냈다. 안의 약은 진작에 바닥나 있었다.`,
      );
      await you.say_and_wait(`……그런가. 적어도 머리가 돌아갈 때까지는……`);
      await era.printAndWait(
        `이보다 나쁠 수는 없을 텐데, 오히려 마음은 가벼워졌다.`,
      );
      await era.printAndWait(
        `정수기에서 미지근한 물 한 잔을 받아 단숨에 마신 ${you.name}은(는) 다시 자리에 앉았다.`,
      );
      await you.say_and_wait(`서둘러야 해.`);
      await era.printAndWait(
        `추위에 이가 저절로 맞부딪치며 딱딱 소리를 냈다. 침을 삼키기도 힘들었다.`,
      );
      await era.printAndWait(
        `「빨리 이 일을 끝내고 싶다.」 「여기서 쓰러질 수는 없다.」 오직 그 마음으로 ${you.name}은(는) 이를 악물었다.`,
      );
      await you.say_and_wait(`끝났다!`);
      await era.printAndWait(
        `마지막 글자를 입력하자 일을 마쳤다는 만족감에 긴장이 풀렸다. 정신은 더 이상 버티지 못했고 시야가 빙빙 돌기 시작했다. 아마 이제 한계일 것이다.`,
      );
      await era.printAndWait(`그렇게 ${you.name}은(는) 만족한 채 쓰러졌다.`);
      await maru.say_and_wait(
        `${callname}, 잠깐 얼굴 보러 왔어♪ ${callname}?`,
      );
      await era.printAndWait(
        `의식이 사라지기 직전, ${you.name}은(는) ${maru.name}의 목소리를 들었다.`,
      );
      era.drawLine();
      await era.printAndWait(
        `똑똑히 지켜봐 주세요. ${maru.uma_sex_title} 선배로서.`,
      );
      await era.printAndWait(
        `똑똑히 바라봐 주세요. 이대로 영원히 뒤에 남겨진 채로.`,
      );
      await era.printAndWait(
        `진심으로 축복해 주세요. 이제는 ${you.name}이(가) 저를 응원할 차례예요.`,
      );
      await you.say_and_wait(`그런가.`);
      await era.printAndWait(
        `아마 이름 모를 ${maru.uma_sex_title}의 마음속 목소리가 무심코 새어 나온 것이겠지.`,
      );
      await maru.say_and_wait(`${callname}?`);
      await era.printAndWait(`누군가 ${you.name}을(를) 부르는 것 같다.`);
      await maru.say_and_wait(`${callname}!`);
      await era.printAndWait(`부르는 목소리가 점점 커진다.`);
      await era.printAndWait(`일어나야 해. 일어나기 싫은 자신을 달랬다.`);
      await era.printAndWait(`그렇게 ${you.name}은(는) 마지못해 눈을 떴다.`);
      await maru.say_and_wait(`이제야 일어났어? ${callname}.`);
      await you.say_and_wait(`여기는?`);
      await era.printAndWait(
        `주변을 둘러보니 ${you.name}이(가) 사는 곳인 듯했다.`,
      );
      await maru.say_and_wait(`잠깐만 기다려.`);
      await era.printAndWait(
        `${maru.name}는 주방으로 들어가 죽 한 그릇을 가져왔다.`,
      );
      await maru.say_and_wait(`조금 전에 끓여 뒀어. 아직 뜨거우면 말해 줘.`);
      await era.printAndWait(
        `따뜻한 액체가 ${you.name}의 입안으로 들어왔다. 멍한 머리는 본능만으로 이것이 몸에 좋은 것이라고 판단했다.`,
      );
      era.printButton(`「고마워.」`, 1);
      era.printButton(`「괜찮아, 혼자 먹을게.」`, 2);
      ret.push(await era.input());
      if (ret[1] === 1) {
        await era.printAndWait(
          `눈앞의 모습에 옅은 안개가 낀 듯해서 ${you.name}은(는) ${maru.sex}의 움직임이 잘 보이지 않았다.`,
        );
        await era.printAndWait(`그렇다면 차라리 눈을 감자.`);
        await era.printAndWait(
          `그렇게 마음먹은 ${you.name}은(는) 눈을 감고 상대의 움직임에 몸을 맡겼다.`,
        );
        await era.printAndWait(
          `숟가락과 사기그릇이 부딪칠 때마다 따뜻한 액체가 입안으로 들어왔다.`,
        );
        await era.printAndWait(
          `따뜻한 감촉과 익숙하고 능숙한 손길. 무엇보다 그리운 느낌이었다. 어느새 어머니의 모습과 겹쳐 보였다.`,
        );
      } else {
        await you.say_and_wait(`괜찮아, 혼자 먹을게.`);
        await era.printAndWait(
          `그대로 일어나려 했지만 더 힘센 두 손이 막아섰다.`,
        );
        await maru.say_and_wait(
          `지금은 무리할 때가 아니야. 환자는 침대에서 얌전히 쉬어야지.`,
        );
        await you.say_and_wait(`${maru.name}……`);
        await era.printAndWait(
          `마지막 힘마저 다해 침대에 누워 있을 수밖에 없었다. 입으로 가져다준 것을 겨우 삼켰다.`,
        );
      }
      await you.say_and_wait(`……따뜻해.`);
      await era.printAndWait(
        `그리운 기척에 ${you.name}은(는) 눈을 감고 깊은 잠에 빠졌다.`,
      );
      await era.printAndWait(`두려움에 쫓겨 계속 달리던 몸이 비로소 안도했다.`);
      era.drawLine();
      await you.say_and_wait(`……언제부터였지?`);
      await era.printAndWait(
        `눈을 뜨고 일어나려는데, 의자에서 쉬던 ${maru.teen_sex_title}가 침대에 엎드려 잠들어 있었다.`,
      );
      await era.printAndWait(
        `흔들리지 않도록 조심하며 커튼 끝을 젖혔다. 한 줄기 빛이 ${you.name}의 얼굴을 비췄다. 날이 밝았다.`,
      );
      await maru.say_and_wait(`으응. 요즘 유행은 그런 거야?`);
      await era.printAndWait(
        `다행히 몸을 일으킬 때의 미세한 흔들림에 ${
          maru.sex
        }는 무의식적으로 자세만 바꿨다. 고른 숨소리는 끊기지 않았다.`,
      );
      await you.say_and_wait(`${maru.sex}가 깰 때까지 이대로 기다리자.`, true);
      await era.printAndWait(
        `그렇게 생각하며 ${you.name}은(는) 눈을 감고 새벽을 기다렸다.`,
      );

      return ret;
    };
    f.title = title;
    return f;
  })(),
  before_toky_yus: (() => {
    const title = (maru) => `일본 더비 전·${maru.name}`;
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `${maru.name}가 더 큰 무대에서 색다른 감각을 맛보고 싶다고 해서 일본 더비에 출전하기로 했다.`,
      );
      await era.printAndWait(`트레이닝실 안`);
      await maru.say_and_wait(
        `역시 더비네. 출전하는 ${maru.uma_sex_title}들의 수준이 정말 높아.`,
      );
      await era.printAndWait(
        `클래식 삼관의 두 번째 관문인 도쿄 우준, 일본 더비에서는 가장 운 좋은 ${maru.uma_sex_title}만이 우승한다는 속설이 있다.`,
      );
      await era.printAndWait(
        `실력 있는 ${maru.uma_sex_title}도 이곳에서 고배를 마시는 사례는 셀 수 없이 많다. 하지만 ${
          maru.name
        }에게는……`,
      );
      await era.printAndWait(`${maru.name}의 모습은 평소와 다르지 않다.`);
      await era.printAndWait(`그저 레이스를 즐기러 온 것이겠지.`);
      await maru.say_and_wait(`${callname}, 이따 내 모습을 잘 지켜봐 줘.`);
      await era.printAndWait(
        `${maru.name}는 준비를 마치고 지하 통로로 향했다.`,
      );
      await you.say_and_wait(`나도 관람석으로 갈까.`);
    };
    f.title = title;
    return f;
  })(),
  toky_yus_win: (() => {
    const title = '일본 더비 후·선택의 시작';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `이변 없이 ${maru.name}는 멋지게 더비를 제패했다.`,
      );
      await era.printAndWait(
        `${maru.sex}가 결승선을 통과한 순간, 관람석에서 우레 같은 함성이 터져 나왔다.`,
      );
      await era.printAndWait(`대기실
`);
      await maru.say_and_wait(
        `후우~ 역시 클래식 삼관 중 가장 주목받는 레이스네.`,
      );
      await maru.say_and_wait(
        `더비에 출전한 ${maru.uma_sex_title}들은 모두 ${maru.uma_sex_title}의 정예들이구나.`,
      );
      era.printButton(
        `「더비에서 가장 바깥쪽 게이트였는데도, 그 불리함을 이겨 내고……」`,
        1,
      );
      await era.input();
      era.printButton(`「멋지게 더비를 차지한 ${maru.name}가 최고야.」`, 1);
      await era.input();
      await maru.say_and_wait(
        `그렇게 대단하지는 않아⭐ 평소처럼, 아니, 전보다 조금 더 빨리 달렸을 뿐이야.`,
      );
      await maru.say_and_wait(`더비보다 성대한 레이스는 아마 더 이상——`);
      era.printButton(`「개선문상에 가 볼래?」`, 1);
      era.printButton(`「역시 아리마 기념일까?」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`어? 개선문상?`);
        await maru.say_and_wait(
          `대단해! ${callname}하고 함께 있으면 매번 놀라운 일이 생기네~`,
        );
        await maru.say_and_wait(
          `개선문상이라면 세계적인 ${maru.uma_sex_title}를 만날 수 있을지도 몰라.`,
        );
        await maru.say_and_wait(`음——어떻게 할까?`);
        era.printButton(`어떻게 하면 좋을까?`, 1);
        await era.input();
      } else {
        await maru.say_and_wait(`그렇지? 역시 아리마 기념이야.`);
        era.printButton(
          `「${maru.name}가 아리마 기념을 즐기는 모습을 나도 기대하고 있어.」`,
          1,
        );
        await era.input();
        await maru.say_and_wait(`${callname}, 잘 지켜봐 줘.`);
      }
      await maru.say_and_wait(`아, 슬슬 위닝 라이브 시간이네.`);
      await maru.say_and_wait(
        `${callname}하고 함께 있으면 시간은 언제나 금방 지나가.`,
      );
      await you.say_and_wait(
        `무대에서도 ${maru.name}를 응원해 준 팬들에게 그 마음을 전해 줘!`,
      );
      await maru.say_and_wait(`응. 응원해 준 팬들에게 제대로 보여 줘야지.`);
      await maru.say_and_wait(`슬슬 나가야겠다.`);
      await era.printAndWait(`${maru.name}는 대기실을 나섰다.`);
      await you.say_and_wait(`……`);
      await era.printAndWait(`대기실 문을 닫으니 방에는 혼자만 남았다.`);
      await you.say_and_wait(`슬슬 결단을 내려야겠네.`, true);
      await era.printAndWait(`나가려던 순간……`);
      await era.printAndWait(`똑똑.`);
      await era.printAndWait(`정말이지, 또 새로운 유행이라도 떠올린 거야?`);
      await era.printAndWait(`쓴웃음을 지으며 대기실 문을 열었다.`);
      await you.say_and_wait(`마루젠——`);
      await era.printAndWait(`문 앞에 쪽지 한 장이 남겨져 있었다.`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `마루젠 선배, 여쭙고 싶은 게 있어요. 괜찮으시다면 내일 밤 빈 교실에서 만날 수 있을까요?`,
      );
      await era.printAndWait(`결정한다.`);
      era.printButton(`「${maru.name}에게 전한다.」`, 1); //NE
      era.printButton(`「${maru.name} 대신 간다.」`, 2);
      era.print(
        '【경고. 신중하게 선택하세요. 그렇지 않으면 모든 것이 돌이킬 수 없게 됩니다!】',
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      const ret = await era.input();
      if (ret === 1) {
        await you.say_and_wait(`조금 골치 아프네. ${maru.name}에게 온 쪽지다.`);
        await you.say_and_wait(
          `직접 가 보고 싶은 마음도 있지만 ${maru.sex}에게 맡기는 편이 낫겠지?`,
        );
        await era.printAndWait(
          `${maru.name}가 돌아온 뒤 쪽지에 관한 일을 ${maru.sex}에게 전했다.`,
        );
      } else {
        await era.printAndWait(
          `주변에 아무도 없는 걸 확인하고 쪽지를 주워 주머니에 넣었다.`,
        );
        await you.say_and_wait(`……`);
        await era.printAndWait(`왜 주웠는지 스스로도 알 수 없었다. 하지만——`);
        await era.printAndWait(`이대로 놓쳐 버리면……`);
        await era.printAndWait(`무언가를 잃을 것 같은 기분이 든다.`);
        await you.say_and_wait(`……미안해, ${maru.name}.`);
        await you.say_and_wait(`어떻게든 한번 가 봐야겠어.`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  toky_yus_lose: (() => {
    const title = '일본 더비 후·선택의 시작';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `이변 없이 ${maru.name}는 멋지게 더비를 제패했다.`,
      );
      await era.printAndWait(
        `${maru.sex}가 결승선을 통과한 순간, 관람석에서 우레 같은 함성이 터져 나왔다.`,
      );
      await era.printAndWait(`대기실
`);
      await maru.say_and_wait(
        `후우~ 역시 클래식 삼관 중 가장 주목받는 레이스네.`,
      );
      await maru.say_and_wait(
        `더비에 출전한 ${maru.uma_sex_title}들은 모두 ${maru.uma_sex_title}의 정예들이구나.`,
      );
      await maru.say_and_wait(`더비보다 성대한 레이스는 아마 더 이상……`);
      era.printButton(`「개선문상에 가 볼래?」`, 1);
      era.printButton(`「역시 아리마 기념이지!」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`어? 개선문상?`);
        await maru.say_and_wait(
          `대단해! ${callname}하고 함께 있으면 매번 놀라운 일이 생기네~`,
        );
        await maru.say_and_wait(
          `개선문상이라면 세계적인 ${maru.uma_sex_title}를 만날 수 있을지도 몰라.`,
        );
        await maru.say_and_wait(`음——어떻게 할까?`);
        era.printButton(`어떻게 하면 좋을까?`, 1);
        await era.input();
      } else {
        await maru.say_and_wait(`그렇지? 역시 아리마 기념이야.`);
        era.printButton(
          `「${maru.name}가 아리마 기념을 즐기는 모습을 나도 기대하고 있어.」`,
          1,
        );
        await era.input();
        await maru.say_and_wait(`${callname}, 잘 지켜봐 줘.`);
      }
      await maru.say_and_wait(`아, 슬슬 위닝 라이브 시간이네.`);
      await maru.say_and_wait(
        `${callname}하고 함께 있으면 시간은 언제나 금방 지나가.`,
      );
      await you.say_and_wait(
        `무대에서도 ${maru.name}를 응원해 준 팬들에게 그 마음을 전해 줘!`,
      );
      await maru.say_and_wait(`응. 응원해 준 팬들에게 제대로 보여 줘야지.`);
      await maru.say_and_wait(`슬슬 나가야겠다.`);
      await era.printAndWait(`${maru.name}는 대기실을 나섰다.`);
      await you.say_and_wait(`……`);
      await era.printAndWait(`대기실 문을 닫으니 방에는 혼자만 남았다.`);
      await you.say_and_wait(`슬슬 결단을 내려야겠네.`, true);
      await era.printAndWait(`나가려던 순간……`);
      await era.printAndWait(`똑똑.`);
      await era.printAndWait(`정말이지, 또 새로운 유행이라도 떠올린 거야?`);
      await era.printAndWait(`쓴웃음을 지으며 대기실 문을 열었다.`);
      await you.say_and_wait(`마루젠——`);
      await era.printAndWait(`문 앞에 쪽지 한 장이 남겨져 있었다.`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `마루젠 선배, 여쭙고 싶은 게 있어요. 괜찮으시다면 두 주 뒤에 빈 교실에서 만날 수 있을까요?`,
      );
      await era.printAndWait(`결정한다.`);
      era.printButton(`「${maru.name}에게 전한다.」`, 1); //NE
      era.printButton(`「${maru.name} 대신 간다.」`, 2);
      era.print(
        '【경고. 신중하게 선택하세요. 그렇지 않으면 모든 것이 돌이킬 수 없게 됩니다!】',
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      const ret = await era.input();
      if (ret === 1) {
        await you.say_and_wait(`조금 골치 아프네. ${maru.name}에게 온 쪽지다.`);
        await you.say_and_wait(
          `직접 가 보고 싶은 마음도 있지만 ${maru.sex}에게 맡기는 편이 낫겠지?`,
        );
        await era.printAndWait(
          `${maru.name}가 돌아온 뒤 쪽지에 관한 일을 ${maru.sex}에게 전했다.`,
        );
      } else {
        await era.printAndWait(
          `주변에 아무도 없는 걸 확인하고 쪽지를 주워 주머니에 넣었다.`,
        );
        await you.say_and_wait(`……`);
        await era.printAndWait(`왜 주웠는지 스스로도 알 수 없었다. 하지만——`);
        await era.printAndWait(`이대로 놓쳐 버리면……`);
        await era.printAndWait(`무언가를 잃을 것 같은 기분이 든다.`);
        await you.say_and_wait(`……미안해, ${maru.name}.`);
        await you.say_and_wait(`어떻게든 한번 가 봐야겠어.`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  girls_blue_1: (() => {
    const title = (maru) => `${maru.teen_sex_title}의 우울`;
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`빈 교실`);
      await era.printAndWait(
        `${maru.name}에게 알리지 않고 쪽지에 적힌 약속 장소로 향했다.`,
      );
      await era.printAndWait(`약속보다 5분쯤 늦게 교실 문을 밀었다.`);
      await era.printAndWait(`오랫동안 쓰지 않은 빈 교실인데도……`);
      await era.printAndWait(`예상했던 답답한 공기는 느껴지지 않았다.`);
      await era.printAndWait(`조금 전 비가 그친 덕분일지도 모른다.`);
      await era.printAndWait(`멀리 트레이닝장에는 아직 엷은 안개가 남아 있다.`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `이제 오셨어요? 마루젠 선——`,
      );
      await era.printAndWait(
        `눈에 들어온 것은 예전에 관람석에서 고맙다고 인사했던 모습이었다.`,
      );
      await you.say_and_wait(
        `미안해. ${maru.name}는 일이 생겨서 올 수 없게 됐어.`,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `……그럴 리가, 분명 `,
      );
      await era.printAndWait(
        `${maru.uma_sex_title}는 곧장 이쪽을 노려보았다——`,
      );
      await era.printAndWait(
        `이상하게도 분노보다는 무언가를 간절히 바라는 눈빛처럼 보였다.`,
      );
      await you.say_and_wait(`미안해.`, true);
      await era.printAndWait(
        `결국 처음부터 끝까지 개인적인 욕망을 채우려고 저지른 잘못이다.`,
      );
      await you.say_and_wait(
        `진정해. 나도 조금 전에 알았어. ${maru.name}가 얼마 전에 쪽지를 주웠는데——
`,
      );
      await maru.say_and_wait(
        `무슨 일이 생기든 ${maru.elder_sibling_sex_title}인 나한테 상의해야 해?`,
      );
      await era.printAndWait(
        `머릿속에 자연스럽게 ${maru.name}와 나눈 약속이 떠올랐다.`,
      );
      await era.printAndWait(`자기혐오에 시달렸다.`);
      await you.say_and_wait(
        `그러고는 잠시 고민하더니, 다른 ${maru.uma_sex_title}가 ${maru.sex}하고 옥상에서 만나기로 했다고 하더라고.`,
      );
      await you.say_and_wait(`그러니까 미안해.`);
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `상대가 다음에 어떻게 나올지 모르겠다. 도망치고 싶지만 ${maru.sex}가 이대로 돌아가 ${maru.name}에게 이야기한다면——`,
      );
      await era.printAndWait(`호기심에 이끌려 어둠 속 깊숙이 들어간다.`);
      await you.say_and_wait(`각오를 다지고 계속할 수밖에 없다.`);
      await era.printAndWait(
        `처음에는 밀려드는 감정에 거의 휩쓸릴 뻔했다. 하지만 감정이 정점에 달하자 오히려 마음이 고요해졌다.`,
      );
      await you.say_and_wait(
        `미안해. 내가 먼저 부탁한 거야. ${maru.name}의 트레이너로서 담당의 고민은 해결해야 하니까.`,
      );
      await you.say_and_wait(`${maru.name}에게는 못 미치겠지만, 트레이너로서——`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `${maru.name}에 대해 어떻게 생각하시나요?`,
      );
      await you.say_and_wait(`어?`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `${maru.name}에 대한 인상은 어떤가요?`,
      );
      await era.printAndWait(`가슴 깊은 곳에서 어떤 감각이 조용히 솟아올랐다.`);
      await era.printAndWait(`초조하고 괴로운 후회가 가슴으로 밀려들었다.`);
      await you.say_and_wait(`나는……`);
      era.printButton(`「의지하고 믿을 수 있다는 관점에서」`, 1);
      era.printButton(`「다정하고 마음을 맡길 수 있다는 관점에서」`, 2);
      era.printButton(`「선배와 후배의 관계에서」`, 3);
      era.print(
        '【경고. 신중하게 선택하세요. 그렇지 않으면 모든 것이 돌이킬 수 없게 됩니다!】',
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      const ret = await era.input();
      switch (ret) {
        case 1:
          await you.say_and_wait(`마루젠 선배는 믿음직한——`);
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `죄송해요. 제가 듣고 싶은 건 그런 대답이 아니에요.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `지난번 도와주신 보답으로 마루젠 선배에게는 말씀드리지 않을게요. 트레이너 ${you.adult_sex_title}.`,
          );
          await era.printAndWait(
            `${maru.uma_sex_title}는 가볍게 인사한 뒤 빈 교실을 나갔다. 다시 혼자가 되었다.`,
          );
          break;
        case 2:
          await you.say_and_wait(`마루젠 선배는 무척 다정한——`);
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `죄송해요. 제가 듣고 싶은 건 그런 대답이 아니에요.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `지난번 도와주신 보답으로 마루젠 선배에게는 말씀드리지 않을게요. 트레이너 ${you.adult_sex_title}.`,
          );
          await era.printAndWait(
            `${maru.uma_sex_title}는 가볍게 인사한 뒤 빈 교실을 나갔다. 다시 혼자가 되었다.`,
          );
          break;
        case 3:
          await era.printAndWait(
            `믿음직하다거나 다정하다는 건 아마 ${maru.name}가 내 앞에서 보여 주는 겉모습일 뿐이겠지.`,
          );
          await era.printAndWait(
            `${maru.uma_sex_title}의 관점에서 생각한다면, 아니, ${
              maru.sex
            }가 바라는 것은 ${maru.name}라는 이름의 우상이다.`,
          );
          await you.say_and_wait(
            `${maru.name}는 후배들을 세심하게 챙기고, 할 수 있는 만큼 도와주는…… 우상이라고 생각해.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `왜 우상인가요?`,
          );
          await you.say_and_wait(
            `${maru.name}는 자신을 뛰어넘어 앞서가는 후배들의 모습을 바라고 있어. ${maru.sex}는 후배들이 ${
              maru.sex
            }의 달리기를 보고 청춘의 활력을 쏟아 내기를 바라지.`,
          );
          await you.say_and_wait(
            `${maru.sex}의 뒷모습을 따라잡고, ${maru.sex}를 뛰어넘고, 레이스장에서 ${
              maru.sex
            }를 꺾고, 마지막에는——신선한 공기를 자유롭게 즐기기를.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `……맞아요. 마루젠 선배는 그런 분이에요.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `마루젠 선배의 트레이너이시고, 전에 레이스장에서도 도와주셨으니까요. 그래서, `,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `어쩌면 마루젠 선배보다 당신에게 이야기하는 편이 나을지도 모르겠어요.`,
          );
          await era.printAndWait(
            `${maru.uma_sex_title}는 창가에 서서 오른손으로 창틀을 짚고 잔디 코스와 중정 사이로 시선을 옮겼다. 답을 찾는 것 같기도, 무언가를 피하는 것 같기도 했다.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `저는 레이스 ${maru.uma_sex_title}를 그만두려고 해요.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `오래전부터 저는 레이스 ${maru.uma_sex_title}에 소질이 없다는 걸 알고 있었어요.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `하지만 ${maru.name}의 격려를 받았죠. 그 격려만으로 여기까지 버텨 왔어요.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `하지만 레이스 ${maru.uma_sex_title}의 세계는 노력하면 반드시 성공하는 동화 속 세상이 아니에요.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `G1은커녕 G2조차 제게는 넘을 수 없는 절벽이에요. 아무리 노력해도 상대 중에는 더 뛰어나고 더 재능 있는 사람이 있어요.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `위닝 라이브 중앙에서 꽃과 찬사를 누리는 우승자를 바라볼 뿐이죠. 패자인 저희는 입착하지 못하면 아무리 노력했어도 의미가 없어요.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `맑은 날에도 비 오는 날에도 누구보다 일찍 일어나서 감각이 거의 없어질 때까지 노력했는데도, 저는 졌어요.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `가끔은, 아주 조금은, 예전에 저를 격려해 주신 마루젠 선배에게 어두운 감정을 품어요. ${
              maru.sex
            }의 멱살을 잡고 바닥에 밀어붙여 큰 소리로 따져 묻고 싶어져요.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `그때 격려하지 않으셨다면 이렇게까지 버티다 상처투성이가 되지는 않았을지도 모른다고요.`,
          );
          await era.printAndWait(
            `오랫동안 억눌러 온 울분을 모조리 쏟아 내듯, ${maru.uma_sex_title}는 평소와 달리 격앙된 모습으로 가슴속 괴로움을 토해 냈다.`,
          );
          await era.printAndWait(
            `밤은 먹물처럼 짙어 ${maru.sex}의 표정이 거의 보이지 않았다. 하지만 하얀 달은 거울처럼 밝았고, ${
              maru.sex
            }의 눈물은 옥쟁반에 떨어지는 진주처럼 똑똑 소리를 내는 듯했다.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `죄송해요. 너무 흥분했네요. 들어 주셔서 감사합니다. 그럼 이만, 트레이너님.`,
          );
          await era.printAndWait(
            `말을 마친 뒤 더 이상 감정을 억누르지 못한 ${maru.uma_sex_title}는 빈 교실을 나갔다.`,
          );
          await you.say_and_wait(`너도 휘말렸구나.`);
          await era.printAndWait(
            `${you.name}은(는) 오랫동안 깊은 생각에 잠겼다.`,
          );
      }
      await maru.used_to_say_and_wait(
        `${callname}, 고민이 있으면 ${maru.elder_sibling_sex_title}인 나한테 분명히 이야기해야 해?`,
      );
      await era.printAndWait(
        `먼 곳에서 들려오는 것 같기도, 이 텅 빈 교실에 메아리치는 것 같기도 했다.`,
      );
      await era.printAndWait(`${you.name}은(는) 가슴속 불안을 떨칠 수 없었다.`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  girls_blue_2: (() => {
    const title = (maru) => `${maru.teen_sex_title}의 우울`;
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `${maru.uma_sex_title}는 평범한 레이스 ${maru.uma_sex_title}로서 은퇴했다.`,
      );
      await era.printAndWait(
        `마침내 말의 굴레에서 벗어나서일까, 지금까지 응원해 준 팬들에게 감사해서일까. ${maru.sex}는 G1에서 우승해 위닝 라이브의 중앙에 서려고 직접 디자인했던 승부복으로 갈아입었다——`,
      );
      await era.printAndWait(
        `한때 자존심 높던 ${maru.sex}는 G1에서 우승하면 직접 디자인한 승부복을 입고 멋지게 등장할 생각이었다.`,
      );
      await era.printAndWait(
        `그러다 G2 우승으로 타협했고, 나중에는 눈물을 머금고 입착만 해도 좋다고 마음을 고쳐먹었다. 그런 시간을 거쳐서일까, 지금의 ${maru.sex}는 혜성처럼 아름답다.`,
      );
      await era.printAndWait(
        `사정을 아는 한 사람으로서 이 작별 무대에 함께했다.`,
      );
      await maru.say_as_passer_by_and_wait(
        `${maru.uma_sex_title} A`,
        `다들 고마워요!`,
      );
      await era.printAndWait(
        `눈물을 머금은 ${maru.uma_sex_title}는 웃으며 무대를 찾아온 팬들을 바라보았다——`,
      );
      await era.printAndWait(
        `어쩐지 무언가를 몰래 살피는 듯하면서도 일부러 외면하는 것 같았다.`,
      );
      await era.printAndWait(`그 불편한 위화감.`);
      await era.printAndWait(
        `${you.name}은(는) ${maru.uma_sex_title}가 일부러 외면하는 쪽으로 고개를 돌렸다——`,
      );
      await era.printAndWait(
        `그곳에는 말없이 무대를 바라보는 ${maru.name}가 있었다.`,
      );
      await era.printAndWait(`이럴 때 ${maru.sex}에게 말을 걸어도 될까?`);
      era.printButton(`아무리 그래도 분위기는 살펴야지.`, 1);
      era.printButton(`……아니야.`, 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(`지금 말을 거는 건 너무 눈치 없는 짓이다.`);
        await era.printAndWait(`그렇게 조용히 자리를 떠났다.`);
      } else {
        await you.say_and_wait(`미안하지만 좀 지나갈게요.`);
        await era.printAndWait(
          `주변 사람들 사이를 헤치고 ${you.name}은(는) ${maru.name} 곁으로 다가갔다.`,
        );
        await you.say_and_wait(`……${maru.name}.`);
        await era.printAndWait(
          `처음부터 ${maru.sex}에게 물어보려던 질문인데, 막상 중요한 순간이 되자 무슨 말을 해야 할지 알 수 없었다.`,
        );
        await maru.say_and_wait(`어?`);
        await era.printAndWait(
          `${maru.name}는 믿기지 않는다는 표정으로 이쪽을 바라보았다.`,
        );
        await maru.say_and_wait(
          `${you.actual_name}이(가) 여긴 어떻게…… 미안, 지금은 머릿속이 조금 복잡하네.`,
        );
        await era.printAndWait(
          `말투는 전보다 경쾌했지만, 그 부자연스럽게 꾸민 목소리가 ${you.name}을(를) 슬프게 했다.`,
        );
        era.printButton(`……${maru.name}.`, 1);
        era.printButton(`물어보고 싶은 게 있어.`, 2);
        if ((await era.input()) === 1) {
          await maru.say_and_wait(`${callname}, 어깨 좀 빌려줄래?`);
          await era.printAndWait(
            `${you.name}은(는) 말없이 어깨를 내주었다. ${maru.name}는 팔을 꼭 끌어안았다.`,
          );
          await era.printAndWait(
            `환호와 웃음 뒤에는 겨우 풀린 굴레와 그 뒤에 찾아온 방황이 있었다. 두 사람은 말없이 그 모든 광경을 지켜보았다.`,
          );
        } else {
          await you.say_and_wait(`잠깐만, ${maru.name}.`);
          await maru.say_and_wait(`미안해, ${callname}.`);
          await maru.say_and_wait(
            `여기는 너무 시끄러워서 무슨 말인지 잘 안 들려.`,
          );
          await maru.say_and_wait(`할 이야기가 있으면 돌아가서 해도 될까?`);
          await era.printAndWait(
            `${maru.name}는 폭풍 한가운데에 있는 듯, 질문에 귀를 기울이지 않았다.`,
          );
          await era.printAndWait(
            `문득 서둘러 떠나는 ${maru.name}와 눈이 마주쳤다. 넋이 나간 듯한 눈동자를 보고도 어찌할 줄 몰라 그저 뒷모습을 바라보았다.`,
          );
        }
      }
    };
    f.title = title;
    return f;
  })(),
  before_radi_shi: (() => {
    const title = '라디오 NIKKEI상 전·누구를 위한 달리기';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`트레이닝실`);
      await era.printAndWait(
        `더비 이후 ${maru.name}는 후배들에게 쏟던 열정과 애정을 모두 이쪽으로 돌렸다.`,
      );
      await era.printAndWait(`덕분에 속은 더욱 쓰려졌다.`);
      await you.say_and_wait(
        `겨우 ${maru.name}를 설득해서 이 레이스에 출전하게 했네.`,
        true,
      );
      await era.printAndWait(
        `조심스럽게 ${
          maru.name
        }에게 타나바타상 출전을 제안했을 때, 손에 든 코코넛 젤리 음료를 트레이닝실에 놓고 말없이 문을 닫고 나갔던 ${
          maru.sex
        }. 그 모습에 양심의 가책을 느끼기 시작했다.`,
      );
      await era.printAndWait(
        `몇 번이나 전화를 걸어도 받지 않아 애를 먹다가 겨우 ${maru.name}의 동의를 얻었다.`,
      );
      await era.printAndWait(
        `눈앞의 ${maru.name}가 전신 거울 앞에서 상태를 점검하고 있다.`,
      );
      await you.say_and_wait(
        `지금 ${maru.sex}도 마음이 흔들리고 있겠지. 한 번만 더 작은 충격을 받아도 ${
          maru.sex
        }의 이상은 흔들릴 거야.`,
        true,
      );
      await you.say_and_wait(
        `정말 이렇게 해도…… 아니, 분명, 분명 이게 최선이야.`,
        true,
      );
      await maru.say_and_wait(`그리운 옷이네…… 아니, 아무것도 아니야.`);
      await era.printAndWait(`${maru.name}는 조금 꽉 끼는 승부복을 입었다.`);
      await maru.say_and_wait(
        `이제 사랑하는 ${callname}에게 꼭 승리를 안겨 줄게♪`,
      );
      await era.printAndWait(
        `이제 무슨 생각을 하든 소용없다. ${maru.name}는 레이스장으로 향했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  radi_shi_win: (() => {
    const title = '라디오 NIKKEI상 후·방황하는 길';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait('대기실');
      era.println();
      await you.say_and_wait(`수고했어, ${maru.name}.`);
      await era.printAndWait(
        `중반에 후속 집단에게 따라잡힐 뻔했지만, ${maru.name}는 간신히 레이스에서 승리했다.`,
      );
      await you.say_and_wait(
        `평소 든든한 ${maru.elder_sibling_sex_title} 같던 ${maru.sex}와는 달라.`,
        true,
      );
      await you.say_and_wait(
        `아직도 의심의 그림자에서 벗어나지 못한 거겠지.`,
        true,
      );
      await maru.say_and_wait(`${callname}!`);
      await era.printAndWait(
        `이쪽을 알아본 순간, ${maru.name}는 환하게 웃었다.`,
      );
      await era.printAndWait(
        `하지만 그 어두운 표정은 이미 뇌리에 깊이 새겨져 있었다.`,
      );
      await maru.say_and_wait(`조금 더 칭찬해 줄래?`);
      era.printButton(
        `수고했어. 아름답고 강한 ${maru.elder_sibling_sex_title}님, 이번에도 정말 멋졌어!`,
        1,
      );
      await era.input();
      await maru.say_and_wait(`흥흥~ 당연하지. 지는 게 더 이상하잖아?`);
      era.printButton(`「허벅지는 어때?」`, 1);
      await era.input();
      await maru.say_and_wait(`생각보다 훨씬 괜찮아.`);
      era.printButton(`「허벅지는 어때?」`, 1);
      await era.input();
      await maru.say_and_wait(`……`);
      era.printButton(
        `네 트레이너로서, 소중한 담당이 쌓여 가는 압박에 짓눌려 은퇴하는 걸 가만히 보고 있을 수는 없어.`,
        1,
      );
      await era.input();
      await you.say_and_wait(`전에 그 ${maru.uma_sex_title}처럼 말이야.`);
      await you.say_and_wait(`용서해 줘. 미안해.`);
      await era.printAndWait(
        `위닝 라이브가 끝난 뒤, ${you.name}은(는) 가을의 국화상을 포기하고 아리마 기념 준비로 방향을 바꾸기로 했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '여름 합숙';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`모래사장`);
      await era.printAndWait(`이사장의 개인 해변이라는데.`);
      await era.printAndWait(`공기는 서늘했다.`);
      await era.printAndWait(`바다가 가까워서일지도 모른다.`);
      await era.printAndWait(
        `바닷바람이 멀리서 밀려왔다 밀려가는 파도 소리와 습한 기운을 실어 왔다.`,
      );
      await era.printAndWait(
        `타치에서 내린 ${maru.name}는 만족스러운 듯 눈을 가늘게 뜨고 휴양지의 분위기를 즐겼다——`,
      );
      await you.say_and_wait(`그나저나, 왜 굳이 셔틀버스를 안 탄 거야?`);
      await era.printAndWait(
        `${maru.name}의 강력한 요구 때문에 ${you.name} 일행은 타치의 도움을 받아 이사장의 개인 해변에 오게 되었다.`,
      );
      await maru.say_and_wait(
        `모처럼 이렇게 풍경 좋은 해변에 오는데, 그냥 후배들이랑 같이 버스 타고 오면 좀 아쉽잖아.`,
      );
      await you.say_and_wait(
        `뭐? ${maru.name}, ${you.name}도 여름 합숙이 실력을 단번에 끌어올릴 기회라는 건 알고 있잖아?`,
      );
      await you.say_and_wait(`그러니까 평소보다 좀 더 진지하게 임하자고.`);
      await maru.say_and_wait(
        `못 당하겠네. ${callname}이(가) 그렇게까지 말하니까, ${maru.elder_sibling_sex_title}도 진심으로 해 봐야겠네⭐`,
      );
      era.printButton(`「그건 당연한 거 아냐?」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}도 바닷물과 일광욕, 그리고 곳곳에 보일 수영복 차림을 기대하고 있긴 했지만 말이다.`,
      );
      await you.say_and_wait(`그럼 이제부터 청춘을 마음껏 즐겨 보자고.`);
      await era.printAndWait(
        `어떤 사람에게는 몸이 가는 대로 맡기는 게 더 올바른 길일 수도 있었다.`,
      );
      await era.printAndWait(
        `그러니 가급적이면 간섭하지 않는 게 좋겠다고 판단했다.`,
      );
      await maru.say_and_wait(
        `이렇게 바닷바람을 느끼고 있으니까 기분도 구름 위를 나는 것 같아, 따봉♪`,
      );
      await you.say_and_wait(
        `그런 옛날 유행어까지 튀어나오는 걸 보니 ${maru.name}, 기분이 정말 좋나 보네.`,
        true,
      );
      await maru.say_and_wait(`흐흐~ ${callname} 참 귀엽다니까♪`);
      await era.printAndWait(
        `어느새 다가온 ${maru.name}가 ${you.name}을(를) 빤히 쳐다보았다.`,
      );
      await maru.say_and_wait(`아무리 칭찬해도 서비스 같은 건 없다구~?`);
      await era.printAndWait(
        `${you.name}이(가) 다음에 할 말을 미리 알아챈 ${maru.name}가 얄밉게 웃음을 지었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_30: (() => {
    const title = '축제';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await you.say_and_wait(`진짜 떠들썩하네.`);
      await era.printAndWait(
        `${maru.name}와 아주 성대하다는 축제에 같이 가기로 약속했지만, ${you.name}은(는) 입구에서 한참을 기다려도 ${
          maru.sex
        }의 모습을 찾을 수 없었다.`,
      );
      await era.printAndWait(
        `「사람이 많아서 길을 잃었겠지.」 ${you.name}은(는) 머리를 비우고 등롱으로 꾸며진 축제장으로 흘러드는 인파를 바라보다가, 눈을 가늘게 뜨고 하품을 했다.`,
      );
      await you.say_and_wait(`정말 북적거리네.`);
      await era.printAndWait(
        `노점 몇 개가 전부일 거라는 예상과는 달리, 사방에서 모여든 관광객과 노점이 거리 끝까지 이어져 있었다.`,
      );
      await maru.say_as_passer_by_and_wait(
        `가게 주인`,
        `거기 멍하니 있는 소년, 신선한 과일 좀 먹어 볼래?`,
      );
      await you.say_and_wait(`네?`);
      await era.printAndWait(
        `흘러가는 인파에 떠밀리다 보니 어느새 과일 가게 앞에 서 있었다.`,
      );
      await maru.say_as_passer_by_and_wait(
        `가게 주인`,
        `보아하니 이 축제는 처음인가 보네?`,
      );
      await era.printAndWait(
        `장사가 잘돼서 기분이 좋은지 아저씨는 쉴 새 없이 이야기를 늘어놓았다.`,
      );
      await maru.say_as_passer_by_and_wait(
        `가게 주인`,
        `그럴 만도 하지. 여기는 여행 오면 꼭 들러야 할 축제로 꼽히거든.`,
      );
      await maru.say_as_passer_by_and_wait(
        `가게 주인`,
        `우리 마을은 이 아름다운 모래사장 바로 옆이라, 휴가를 보내러 오는 관광객이 꽤 많아.`,
      );
      await maru.say_as_passer_by_and_wait(
        `가게 주인`,
        `옛날에는 교통도 불편한 평범한 시골이었는데, 이쪽 해변이 유명해지면서 관광객이 늘었지.`,
      );
      await maru.say_as_passer_by_and_wait(
        `가게 주인`,
        `그 뒤로 철도가 놓이니까 사람들이 우르르 몰려와서 지금 같은 마을이 된 거야.`,
      );
      await you.say_and_wait(`저기, 실례지만……`);
      await maru.say_as_passer_by_and_wait(
        `가게 주인`,
        `아이고, 깜빡할 뻔했네. ${you.name}은(는) 길을 잃어서 여기 서 있는 거지?`,
      );
      await maru.say_as_passer_by_and_wait(
        `가게 주인`,
        `그럴 만하지. 이 축제장에는 똑같이 생긴 입구가 네 개나 있거든. 예술은 잘 모르겠지만, 매년 입구에서 만나자고 했다가 서로 못 찾는 사람들 구경은 재미있다니까.`,
      );
      await era.printAndWait(
        `이야기에 흥이 났는지, 이 마을 주민이라는 사실이 자랑스러운 아저씨는 목소리를 높여 소개를 이어 갔다.`,
      );
      await maru.say_as_passer_by_and_wait(
        `가게 주인`,
        `이왕 축제를 다 둘러볼 거면 여기서 쭉 가 봐. 이곳 명물인 공연을 볼 수 있어.`,
      );
      await maru.say_as_passer_by_and_wait(
        `가게 주인`,
        `오늘 밤에는 축제 구경 온 사람들 덕에 한몫 챙길지도 모르겠네. 하하하.`,
      );
      await era.printAndWait(
        `그 말까지 마친 뒤에야 침을 튀기며 이야기하던 아저씨가 입을 다물었다.`,
      );
      await maru.say_as_passer_by_and_wait(`휴대폰`, `부르르르`);
      await era.printAndWait(
        `주머니 속 휴대폰이 진동했다. 사람들이 대부분 공연장으로 향한 지금, 전화를 건 사람이 누구일지는 뻔했다.`,
      );
      await maru.say_and_wait(`${callname}${you.name}은(는) 어디 있어?`);
      await era.printAndWait(
        `주머니 속 휴대폰이 진동했다. 사람들이 대부분 공연장으로 향한 지금, 전화를 건 사람이 누구일지는 뻔했다.`,
      );
      await maru.say_and_wait(
        `휴, 모처럼 잔뜩 신경 써서 준비했는데. 휴대폰에 찍어 둔 사진을 보고 입구까지 왔더니, ${
          callname
        } 모습이 아무리 봐도 안 보이는 거 있지.`,
      );
      await maru.say_and_wait(
        `${callname} 모습은 절대 못 알아볼 리 없다고 생각했는데, 이리 봐도 저리 봐도 안 보이네. ${maru.elder_sibling_sex_title}는 조금 풀이 죽으려고 해><.`,
      );
      await era.printAndWait(
        `입구를 잘못 찾았나 보다. 아니, ${you.name} 쪽이 잘못 찾아온 건가?`,
      );
      era.printButton(`「실례지만 잠시만요.」`, 1);
      await era.input();
      await maru.say_as_passer_by_and_wait(
        `가게 주인`,
        `응? 입구를 어떻게 구별하냐고?`,
      );
      await maru.say_as_passer_by_and_wait(
        `가게 주인`,
        `그럴 줄 알았어. 매년 누군가는 물어본다니까.`,
      );
      await maru.say_as_passer_by_and_wait(
        `가게 주인`,
        `평소에는 쉽게 알아보는 곳도 사람이 많아지면 다 똑같아 보이거든.`,
      );
      await maru.say_as_passer_by_and_wait(
        `가게 주인`,
        `${you.name}, 그 친구한테 입구에서 다섯 번째 노점까지 가 보라고 해. 거기에 길을 안내하는 자원봉사자가 있어.`,
      );
      await era.printAndWait(
        `아저씨는 말하면서 자연스럽게 지도를 꺼내 ${you.name}에게 길을 짚어 주었다.`,
      );
      await maru.say_as_passer_by_and_wait(
        `가게 주인`,
        `공연에 맞춰 가려면 이 길로 가. 지금 출발하면 아직 늦지 않았어.`,
      );
      await era.printAndWait(
        `지나치게 친절해서 좀 이상하지만 참 착한 아저씨였다.`,
      );
      await era.printAndWait(
        `그에게 감사 인사를 한 뒤, ${you.name}은(는) 그 내용을 ${maru.name}에게 전달하고 서둘러 달려갔다.`,
      );
      era.drawLine();
      await era.printAndWait(
        `어서 와, 어서 와. 바로 저 앞에 성대한 무대가 있어.`,
      );
      await era.printAndWait(
        `이 고민은 잊어버려. 이 뜨거운 춤사위 속에서 함께 춤추자.`,
      );
      await era.printAndWait(
        `이 성대한 축제에 녹아들자. 이대로 함께, ${maru.sex}의 무대가 영원히 끝나지 않기를 빌자.`,
      );
      await era.printAndWait(
        `눈물과 땀이 뒤섞인 기쁨을 안고, 방황과 아픔 끝에 마침내 마음의 짐을 내려놓자.`,
      );
      await era.printAndWait(
        `모래사장의 반짝이는 모래알처럼, ${you.name} 일행이 느낀 기쁨과 해방감은 언젠가 역사에 남을 것이다.
`,
      );
      await you.say_and_wait(`드디어 도착했네.`);
      await era.printAndWait(
        `공연을 보러 오는 인파가 끊이지 않는다. 사람들은 서거나 앉아서 음료나 카메라를 든 채 무대 위의 열연을 지켜본다.`,
      );
      await era.printAndWait(
        `사람들의 숨결이 얇은 그물처럼 얽힌 듯했다. 아이들은 신이 나서 소리를 지르며 사람들 사이로 뛰어다녔다.`,
      );
      await you.say_and_wait(`사람이 정말 많네.`);
      await era.printAndWait(
        `발밑을 꽤 조심했는데도 뛰어다니는 아이들과 몇 번이나 부딪칠 뻔했다.`,
      );
      await you.say_and_wait(
        `덥네. 그래도 지금은 먼저 ${maru.name}를 찾아야——`,
      );
      await era.printAndWait(
        `${
          maru.sex
        }에게 위치를 보내고 싶었지만, 사람이 워낙 많아 휴대폰 신호조차 끊겼다 이어졌다 했다.`,
      );
      await maru.say_and_wait(`${callname}!`);
      await era.printAndWait(
        `밤이 내려앉고 무대의 조명이 하나둘 켜졌다. 관광객들의 시선이 무대로 모였다——`,
      );
      await era.printAndWait(
        `${maru.name}를 바라보는 ${you.name}과(와), ${you.name}의 시선을 알아채고 손을 흔들며 달려오는 ${maru.name}만 빼고.`,
      );
      era.printButton(`「${maru.name}를 만나서 다행이야.」`, 1);
      await era.input();
      await era.printAndWait(
        `가슴을 짓누르던 돌덩이가 내려간 듯, ${you.name}은(는) 길게 숨을 내쉬었다.`,
      );
      await maru.say_and_wait(
        `드디어 ${you.name}을(를) 찾았네. ${maru.elder_sibling_sex_title}도 한시름 놓았어.`,
      );
      await you.say_and_wait(
        `미안해. 나도 빨리 ${maru.name}와 만나고 싶었는데——`,
      );
      await maru.say_and_wait(
        `으음~ 사과보다는 이제부터 ${
          callname
        }하고 함께 공연을 보는 게 가장 좋은 보상이겠지?`,
      );
      await you.say_and_wait(
        `……공연이 끝날 때까지 ${maru.name} 곁을 떠나지 않을게.`,
      );
      await you.say_and_wait(
        `그러니까 ${you.name}하고 함께 이 멋진 추억을 만들게 해 줘. 부탁이야!`,
      );
      await maru.say_and_wait(`어머, 새로운 고백 방법이야?`);
      await maru.say_and_wait(
        `${maru.elder_sibling_sex_title}도 조~금 마음이 움직였어.`,
      );
      await maru.say_and_wait(`그럼 ${callname}은(는) 내 곁에서 떨어지면 안 돼?`);
      await era.printAndWait(
        `초대받아 공연에 나선 ${maru.uma_sex_title}가 빛나는 의상을 입고 가볍게 무대로 뛰어올랐다. 조명이 일제히 ${
          maru.sex
        }에게 쏟아졌다. 지금 ${maru.sex}는 이 해변에서 가장 눈부신 존재 같았다.`,
      );
      await you.say_and_wait(`${maru.name}?`);
      await era.printAndWait(
        `${
          maru.sex
        }의 움직임은 부드럽고 아름다웠다. 바로 옆에서 거세게 밀려드는 파도가 떠오른다. 리듬을 타고 흐르는 민속풍 반주가 짙푸른 의상을 입은 ${maru.uma_sex_title}를 바닷속 깊은 곳에서 뭍으로 올라와 춤추는 정령처럼 보이게 했다.`,
      );
      await you.say_and_wait(`${maru.name}!`);
      await maru.say_and_wait(`응? ${callname}, 왜 그래?`);
      await era.printAndWait(
        `조금 높아진 ${you.name}의 목소리에 놀란 ${maru.teen_sex_title}가 의아한 눈빛으로 ${you.name}을(를) 바라보았다.`,
      );
      await era.printAndWait(`${you.name}의 선택은`);
      era.printButton(
        `「${maru.name}, ${you.name}의 아픔과 슬픔을 이야기해 줘.」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `무대 위의 ${maru.teen_sex_title}는 온 힘을 다했고, 흘린 땀은 거듭 밀려오는 물결이 되었다.`,
      );
      await era.printAndWait(
        `관객들은 기대에 찬 눈빛으로 무대 위에서 빛나는 아이돌을 바라보았다.`,
      );
      await era.printAndWait(
        `그 와중에 ${maru.name}는 시종일관 불안한 침묵을 지키고 있었다.`,
      );
      await you.say_and_wait(`아마 지금이 중요한 순간일 거야.`, true);
      await you.say_and_wait(`무슨 일이 있어도 인내심을 잃으면 안 돼.`, true);
      await era.printAndWait(
        `무대 위 ${maru.teen_sex_title}의 회전 하나, 도약 하나가 관객들의 마음을 단단히 사로잡았다.`,
      );
      await era.printAndWait(`관객들은 숨을 죽이고 그 순간을 기다렸다.`);
      await maru.say_and_wait(`역시 ${callname}은(는) 못 속이겠네?`);
      await era.printAndWait(
        `갑자기 관객들의 열렬한 박수와 환호성이 터져 나왔다.`,
      );
      await era.printAndWait(
        `쓰고 있던 미소라는 가면을 벗어 던진 채, ${maru.name}는 슬픔과 해방감이 교차하는 표정으로 ${you.name}을(를) 바라보았다.`,
      );
      await era.printAndWait(
        `그 아픔마저 사라지고 당장이라도 주저앉을 것 같은 무감각 속에서, ${maru.teen_sex_title}는 땀인지 눈물인지 모를 짠맛을 느꼈다.`,
      );
      await maru.say_and_wait(
        `……자, 장소를 옮겨서 얘기할까? ${you.actual_name}?`,
      );
      await era.printAndWait(
        `수많은 관광객이 축제의 장으로 쏟아져 들어왔다. 오늘 밤은 이제부터가 시작이었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_31: (() => {
    const title = '선택';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `훈련이 끝난 후, ${you.name}은(는) ${maru.name}의 쪽지를 받았다.`,
      );
      await maru.say_and_wait(
        `${callname}, 근처 신사로 좀 와 줘. ${you.name}에게 할 말이 있어.`,
      );
      await era.printAndWait(
        `설마 그 전형적인 고백 장면인가? 짐을 챙긴 ${you.name}은(는) 서둘러 출발했다.`,
      );
      await era.printAndWait(
        `기대와 즐거움, 그리고 망각을 바라는 인파를 거슬러, ${you.name} 일행은 산책하듯 근처의 신사에 도착했다.`,
      );
      await era.printAndWait(
        `즐거운 여운이 아직 남아 있는 가운데, 관광객들의 시선은 마을 중심의 무대로 쏠려 있었다.`,
      );
      await era.printAndWait(
        `이보다 더 외진 곳도 있겠지만, `,
      );
      await era.printAndWait(
        `이곳은 너무 고요해서 두렵지도, 너무 시끌벅적해서 불안하지도 않은 적당한 곳이었다.`,
      );
      await maru.say_and_wait(`세 여신님, 부디 제 이야기를 들어 주세요.`);
      await era.printAndWait(
        `새전함에 던져진 동전이 부딪히는 맑은 소리와 동시에 ${maru.name}의 기도가 시작되었다.`,
      );
      era.printButton(`「동전을 넣는다」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) ${maru.name}의 동작을 흉내 내며, 눈을 감고 세 여신에게 기도했다.`,
      );
      era.printButton(`「세 여신님, 부디 고통받는 자를 인도하소서.」`, 1);
      era.printButton(`「세 여신님, 부디 방황하는 자를 인도하소서.」`, 2);
      await era.input();
      await era.printAndWait(
        `소원을 빈 뒤, ${you.name}은(는) 곁에 있는 ${maru.teen_sex_title}를 바라보았다.`,
      );
      await era.printAndWait(
        `${maru.sex}는 새전함을 뚫어지게 응시하고 있었다—— 아니, ${
          maru.sex
        }는 그 미지의, 아주 먼 곳을 바라보고 있었다.`,
      );
      await you.say_and_wait(`${maru.name}, 울고 있는 건가?`, true);
      await maru.say_as_passer_by_and_wait(
        `무녀`,
        `정말 죄송합니다. 오늘 준비한 인연의 부적은 모두 나눠 드렸어요.`,
      );
      await era.printAndWait(
        `잠시 후, 눈을 비비며 하품을 하는 무녀가 공연을 관람하던 인파 속에서 뒤늦게 나타났다.`,
      );
      await maru.say_as_passer_by_and_wait(
        `무녀`,
        `……괜찮으시다면 두 분은 이걸 받아 주세요.`,
      );
      await era.printAndWait(
        `무언가 깨달은 듯, 무녀는 소맷자락 안에 꿰매 둔 작은 주머니에서 부적을 꺼냈다.`,
      );
      await you.say_and_wait(`정말 감사합니다.`);
      await maru.say_as_passer_by_and_wait(
        `무녀`,
        `감사의 말씀은 아름다운 여신께.`,
      );
      await maru.say_as_passer_by_and_wait(
        `무녀`,
        `축복의 말씀은 자비로운 여신께.`,
      );
      await maru.say_as_passer_by_and_wait(
        `무녀`,
        `해방의 말씀은 자애로운 여신께.`,
      );
      await you.say_and_wait(`해방인가?`, true);
      await maru.say_and_wait(`축복이라…… 세 여신님, 감사합니다.`, true);
      await maru.say_as_passer_by_and_wait(
        `무녀`,
        `세 여신이시여, 이 세상에 아름다움과 희망을.`,
      );
      await maru.say_as_passer_by_and_wait(
        `무녀`,
        `사랑스러운 여러분, 세 여신께서 ${you.name} 일행과 함께하시기를.`,
      );
      await era.printAndWait(
        `무녀는 축복의 말을 전하며 ${you.name} 일행에게 부적을 건네주었다.`,
      );
      await era.printAndWait(
        `무녀에게서 재빨리 부적을 받고 인사한 ${you.name}과(와) 달리, ${maru.name}는 부적을 받아 늘 가지고 다니는 작은 주머니에 넣었다.`,
      );
      await era.printAndWait(`그러고는——`);
      await maru.say_and_wait(`역시 ${callname}한테는 숨길 수 없네.`);
      await era.printAndWait(
        `분위기가 달라진 걸 눈치챘는지, 무녀는 오른손으로 조용한 오솔길을 가리킨 뒤 자리를 떠났다.`,
      );
      await era.printAndWait(
        `나막신이 땅에 부딪히며 내는 또각또각 맑은 소리가 점점 작아졌다. 이윽고 멀리서 들리는 북소리와 관객들의 환호만 남았다.`,
      );
      await you.say_and_wait(
        `여기에는 우리 둘뿐이야. 이제부터 하는 말은 세 여신님 말고는 아무도 듣지 못해.`,
      );
      await era.printAndWait(
        `${you.name}은(는) ${maru.name}의 얼굴을 바라보았다. 상대는 마침내 고민에서 벗어나 몸을 가늘게 떨고 있었다.`,
      );
      await maru.say_and_wait(
        `어디서부터 이야기하면 좋을까. 사실은 그날 밤, 나도 거기에 있었어.`,
      );
      await you.say_and_wait(`뭐라고?!`);
      await era.printAndWait(
        `${you.name}의 등줄기에 한기가 흐르고 두 다리가 떨렸다. 당장 돌아서서 도망치고 싶었다. 하지만 남은 이성은 사람이 ${maru.uma_sex_title}를 이길 수 없다는 사실을 알려 주었다.`,
      );
      await era.printAndWait(
        `하물며 ${maru.uma_sex_title} 중에서도 뛰어난 ${maru.name}가 상대다.`,
      );
      await maru.say_and_wait(
        `${you.name}이(가) 생각한 대로야. 그날 ${
          callname
        }은(는) 안색이 이상했고, 무의식적으로 자꾸 손목시계를 보고 있었어.`,
      );
      await maru.say_and_wait(`그때 불길한 예감이 들었지.`);
      await era.printAndWait(
        `${maru.name}는 ${you.name}이(가) 한 번도 본 적 없는 가면을 쓴 듯, 무표정하게 이야기를 이어 갔다.`,
      );
      await maru.say_and_wait(
        `저녁을 먹고 아파트로 돌아간다고 했지만, 사실은 근처 주차장에 차를 잠깐 세워 놓고 걸어서 트레센에 돌아왔어.`,
      );
      await era.printAndWait(
        `배신자, 짐승, 죄인…… 뇌리에는 ${maru.name}와 맺었던 약속이 떠올랐다.`,
      );
      await you.say_and_wait(`내가 무슨 낯짝으로 ${maru.sex}를 보겠어?`, true);
      await era.printAndWait(
        `그 생각을 하자 머릿속이 하얘졌고, 나도 모르게 입술을 꽉 깨물었으며 위장이 뒤틀리는 듯한 불쾌한 메스꺼움이 올라왔다.`,
      );
      await maru.say_and_wait(
        `${
          callname
        }은(는) 미행을 경계하는 눈치가 빠르지만, 경계를 곤두세운 ${maru.uma_sex_title}는 아무리 작은 소리도 놓치지 않아.`,
      );
      await maru.say_and_wait(
        `저 멀리서 ${
          callname
        }이(가) 당황한 기색으로 교사 안으로 들어가는 걸 보고, 1층에서 목소리가 들릴 때까지 인내심 있게 기다렸다가 위치를 특정했지.`,
      );
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `${you.name}은(는) 입을 뻥긋거렸지만, 아무 말도 나오지 않았다.`,
      );
      await era.printAndWait(
        `마치 1초가 1년처럼 느껴지는 감각. 당장 도망치고 싶었지만, 납을 채운 듯 무거운 다리가 바닥에 단단히 박혀 있었다.`,
      );
      await maru.say_and_wait(
        `정말이지, 만약 ${
          callname
        }이(가) 나와 축제에 가기로 약속하지 않았다면, 난 모든 게 끝날 때까지 모르는 척해 주려고 했었는데.`,
      );
      await era.printAndWait(
        `말투에는 가벼운 기운이 섞여 있었지만, 미소 하나 없는 얼굴로 ${maru.name}는 ${you.name}을(를) 뚫어지게 쳐다봤다.`,
      );
      await maru.say_and_wait(
        `하지만 ${callname}이(가) 이미 결심을 굳혔다면, 나도 그 결심을 존중해 줘야겠지.`,
      );
      await maru.say_and_wait(`자, ${callname}. 이제 ${you.name} 차례야.`);
      await era.printAndWait(
        `인류 원초의 공포가 ${you.name}의 두뇌를 풀가동시켰다. ${you.name}의 결정은……`,
      );
      era.printButton('「물러서지 않겠어.」', 1);
      era.printButton('「미안해.」', 2);
      era.print(
        [
          '【경고. 이 선택지를 고르면 ',
          maru.get_colored_name(),
          '와의 관계는 돌이킬 수 없게 됩니다!】',
        ],
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`……`);
        await era.printAndWait(
          `${you.name}은(는) 망설임 없이 ${maru.name}의 두 눈을 마주 보았다.`,
        );
        await maru.say_and_wait(
          `${you.actual_name}, 납득할 수 있는 대답을 해 줘.`,
        );
        await era.printAndWait(
          `${maru.name}의 귀가 천천히 뒤로 젖혀지고, 말투에도 초조함이 묻어나기 시작했다.`,
        );
        await you.say_and_wait(`한 발만 잘못 내디뎌도 천 길 낭떠러지야.`);
        await era.printAndWait(
          `점점 세차게 뛰는 심장을 억지로 진정시켰다. 이렇게 침착한 사람이 자신이 아닌 것만 같았다.`,
        );
        await era.printAndWait(
          `스스로도 잘 모르겠다. 왜 무의식적으로 거부했는지.`,
        );
        await era.printAndWait(
          `하지만 ${you.name}은(는) 알고 있다. 지금은 절대로 타협할 수 없다. ${you.name}은(는) ${maru.name}와 소꿉놀이를 하러 온 게 아니다. 그 의지를 보여 줘야 한다.`,
        );
        await era.printAndWait(
          `본론으로 돌아가자. ${maru.name}가 신경 쓰는 것은 무엇일까. ${
            maru.sex
          }를 괴롭히는 건 약속을 어긴 일 말고 또 무엇이 있을까?`,
        );
        await you.say_and_wait(
          `나는 ${you.name}을(를) 우상의 신좌에서 끌어내리러 왔어, ${maru.name}.`,
        );
        await era.printAndWait(
          `${maru.name}는 일부러 영역을 조금 드러냈다. ${you.name}은(는) 레이스장의 ${maru.uma_sex_title}들이 느끼는 공포를 맛보았다.`,
        );
        await you.say_and_wait(
          `우상이란 뭘까. 숭배받고, 운명을 의탁받는 존재. 사람들에게 자신의 등을 보여 주며 앞으로 나아가게 하려는 거라고 말하지만, 정작 ${you.name}은(는) 이렇게나 오만해.`,
        );
        await you.say_and_wait(
          `${you.name}은(는) 수많은 사람이 맡긴 희망의 무게를 견딜 수 있어?`,
        );
        await you.say_and_wait(`나도 알아. 세상에 완벽한 사람은 없어.`);
        await you.say_and_wait(
          `사람인 이상 반드시 잘못을 저질러. 반드시 실수도 해.`,
        );
        await you.say_and_wait(
          `잘못은 피할 수 없어. 슬픔과 아픔을 겪고 나서야 소중함을 알게 되지.`,
        );
        await you.say_and_wait(`하지만 ${you.name}은(는)`);
        await you.say_and_wait(
          `믿음직한 ${maru.elder_sibling_sex_title}로서, 고민하는 ${maru.uma_sex_title}들을 돕고 있기도 해.`,
        );
        await you.say_and_wait(
          `하지만 그 뒤까지 책임지지는 않았어. ${maru.uma_sex_title}들이 ${you.name}을(를) 온갖 문제에서 도망칠 피난처로 삼고 있다는 걸 알아채지 못했지.`,
        );
        await you.say_and_wait(
          `그렇게 ${maru.uma_sex_title}들이 멋대로 희망을 걸고, 멋대로 배신당했다고 여기면서, 결국 ${maru.uma_sex_title}들의 미움을 받는 거야.`,
        );
        await you.say_and_wait(
          `${maru.uma_sex_title}들은 말로는 ${you.name}의 뒷모습을 우상으로 삼는다고 하지만, 실제 행동을 보면 ${you.name}을(를) 신처럼 숭배하고 있어.`,
        );
        await you.say_and_wait(
          `${you.name}에게는 그럴 의도도, 그런 생각도 없었겠지. 하지만 비극은 그렇게 생겨났어.`,
        );
        await you.say_and_wait(
          `그러니까 그 신좌에서 내려와 줘. 나 자신을 위해 부탁하는 게 아니야. 지옥으로 향하는 편도 열차가 보여서 ${you.name}을(를) 붙잡는 거야.`,
        );
        await era.printAndWait(
          `${maru.name}의 마음은 아랑곳하지 않고, 가슴속에 쌓아 둔 생각을 단숨에 쏟아냈다.
`,
        );
        await maru.say_and_wait(
          `그럼 ${you.name}의 해결책은 뭔데? 세상에 문제를 찾아내는 사람은 얼마든지 있어. 부족한 건 한 걸음 더 나아가서 해결할 수 있는 사람이야.`,
        );
        await maru.say_and_wait(
          `그리고 결국 ${you.name}의 일방적인 주장일 뿐이잖아?`,
        );
        await maru.say_and_wait(
          `그게 ${you.name}이(가) 무서워서 지어낸 이야기가 아닌지 누가 알겠어?`,
        );
        era.printButton(
          `${maru.name}에게 미움받을 위험을 무릅쓴 것처럼, ${you.name}도 왜, 누구를 위해 위험을 감수했는지 알고 있을 거야!`,
          1,
        );
        await era.input();
        await era.printAndWait(
          `${maru.name}가 말을 이어 가려 하자 ${you.name}이(가) 말을 끊었다.`,
        );
        await you.say_and_wait(
          `후배들에게 수많은 희망과 기대를 받아 본 적은 없어. 그래도 알아. ${maru.name}는 사랑하기 때문에 ${
            maru.couple_title
          }을 돕고 있어.`,
        );
        await you.say_and_wait(
          `산산조각 나고 돌이킬 수 없게 되더라도 ${
            maru.couple_title
          }을 돕겠다는, 그 사랑 말이야!`,
        );
        await you.say_and_wait(
          `그러니까 ${maru.name}가 자신의 길을 걷는 걸 막지는 않을 거야.`,
        );
        await era.printAndWait(
          `${you.name}이(가) 영역을 정면으로 마주한 건 처음이었다. 하지만 가슴속에서 차오르는 말로 다 할 수 없는 온기와 열정에, ${you.name}은(는) ${
            maru.sex
          }의 두 눈을 응시했다.`,
        );
        await you.say_and_wait(
          `마음속 슬픔과 미래에 대한 막막함을 내가 조금 나눠 짊어져도 될까?`,
        );
        await you.say_and_wait(
          `한 치 앞도 보이지 않는 어둠 속을 혼자 걸어간다면, 앞길을 비춰 줄 등불이 있으면 좋겠지.`,
        );
        await you.say_and_wait(
          `내게 맡겨 줘. 트레이너로서는 그저 그럴지 몰라도, 등불 역할만큼은 자신 있어.`,
        );
        await you.say_and_wait(
          `한 걸음씩, 조금씩, 다른 사람을 위해 죽어 갈 거야.`,
        );
        await era.printAndWait(
          `그러고 나서 ${you.name}은(는) ${maru.sex}의 기세가 서서히 사그라드는 모습을 보았다.`,
        );
        await era.printAndWait(
          `마지막으로 ${maru.name}는 자책하듯 한숨을 내쉬었다.`,
        );
      } else {
        await maru.say_and_wait(`……`);
        await era.printAndWait(
          `일 년을 보낸 듯 긴 시간 동안, ${you.name}은(는) ${maru.name}에게 죄인을 심문하듯 매서운 눈빛을 받았다. 마침내 ${
            maru.sex
          }는 시선을 거두었다.`,
        );
        await maru.say_and_wait(`그럼 앞으로도 잘 부탁해♪`);
        await era.printAndWait(
          `아무 일도 없었던 것처럼, ${maru.sex}는 웃으며 ${you.name}에게 손을 내밀었다.`,
        );
        await you.say_and_wait(`잘 부탁해.`);
        await era.printAndWait(
          `${maru.sex}의 말투는 여전히 부드러웠지만, ${you.name}은(는) 알고 있었다——`,
        );
        await era.printAndWait(`어떤 따뜻한 것이 자신의 영혼과 함께 어둠 속으로
`);
        await era.printAndWait(`그리고 마침내 끝났다.`);
        await era.printAndWait(`남은 것은 고요뿐이었다.`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '여름 합숙 종료';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      maru.print(`합숙이 생각보다 빨리 지나갔네.`);
      maru.print(
        `테이오, 그리고 ${maru.couple_title}이 모래사장에서 청춘의 열정을 불태우며 힘껏 달리던 모습.`,
      );
      maru.print(
        `깊은 밤 혼자 밀려왔다 빠져나가는 바닷물을 바라볼 때와는 또 다른 느낌이야.`,
      );
      await maru.say_and_wait(`…… ${callname}.`);
      maru.print(`의외로 ${callname}의 배신에 그렇게까지 화가 나지는 않았어.`);
      maru.print(`마치, 마치……`);
      era.drawLine();
      await maru.say_and_wait(`합숙이 생각보다 빨리 지나갔네.`);
      era.printButton(`「그러게.」`, 1);
      await era.input();
      await you.say_and_wait(`진지하게 임하면 시간은 늘 부족하게 느껴지네.`);
      await maru.say_and_wait(`하지만 시간을 되돌릴 수는 없잖아?`);
      await you.say_and_wait(`그래도 즐거운 추억은 남겼잖아?`);
      await maru.say_and_wait(
        `후후, 맞아. 테이오, 그리고 ${maru.couple_title}과 어젯밤에 한 뒤풀이, 그전에는 ${callname}하고 해변에서 물놀이, 더 전에는 ${callname}하고 함께한 마을 축제.`,
      );
      await maru.say_and_wait(`이렇게 헤아려 보니까 정말 알차게 보냈네.`);
      await maru.say_and_wait(`8월 초로 돌아가서 다시 시작하고 싶어~`);
      era.printButton(`「아마 의미가 시간을 붙잡아 둔 거겠지?」`, 1);
      await era.input();
      await you.say_and_wait(
        `의미가 생겼기 때문에 결국 무언가를 남긴 게 아닐까?`,
      );
      await maru.say_and_wait(`후후, 재미있는 생각이네.`);
      await maru.say_and_wait(
        `그럼 ${callname}, 합숙의 마지막까지 나랑 즐겨 줄래?`,
      );
      await you.say_and_wait(`?`);
      await era.printAndWait(
        `얼마 지나지 않아 조수석에 앉은 ${you.name}은(는) 운전에 대한 트라우마가 생기기 시작했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_33: (() => {
    const title = '물과 모래';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `다행히 그동안 ${maru.name}는 원래의 훈련을 소홀히 하지 않았다.`,
      );
      await era.printAndWait(`그 사실이 위안이 되어 마음이 조금 가벼워졌다.`);
      await era.printAndWait(`하던 일에서 눈을 떼고 일어나 하품을 했다.`);
      await era.printAndWait(
        `모래사장은 신비로운 얇은 베일에 싸인 듯했다. 바로 앞에서는 ${maru.uma_sex_title}들이 기세 좋게 모래사장을 돌며 체력 훈련을 하고 있었다.`,
      );
      await you.say_and_wait(`벌써 시간이 이렇게 됐나.`);
      await era.printAndWait(
        `그 축제 이후, 당신과 ${maru.name} 사이의 거리는 한층 더 가까워진 듯했다.`,
      );
      await era.printAndWait(
        `${maru.sex}의 마음 깊은 곳으로 들어갈 허락을 겨우 받은 듯했다.`,
      );
      await you.say_and_wait(`${maru.name}.`);
      await era.printAndWait(
        `어떻게든 ${maru.sex}와 한 번 제대로 이야기해야 한다. 기회는 한 번뿐일지도 모른다.`,
      );
      await era.printAndWait(`당신은 결정했다.`);
      era.printButton(`「${maru.name}를 찾는다」`, 1);
      era.printButton(`「${maru.name}를 찾는다」`, 2);
      await era.input();
      era.drawLine();
      await era.printAndWait(
        `해 질 녘의 빛이 모래사장에 내려앉았다. 금빛 햇살과 고운 모래가 어우러져 해변 전체에 금을 입힌 듯했다.`,
      );
      await era.printAndWait(`어쩐지 초조함이 점점 가라앉았다.`);
      await era.printAndWait(
        `발끝에 모래가 스치며 느껴지는 간지러움은 곧 기분 좋은 감각으로 바뀌었고, 마음도 들뜨기 시작했다.`,
      );
      await era.printAndWait(
        `바로 앞, 주황빛과 짙푸른빛의 경계에 서 있는 저 사람이 ${maru.uma_sex_title}들이 알려 준 ${maru.name}일 것이다.`,
      );
      await era.printAndWait(
        `바라보던 사람도 이쪽을 알아챈 듯했다. 그러고는——`,
      );
      await era.printAndWait(`목소리가 파도에 조용히 녹아들었다.`);
      await era.printAndWait(
        `파도가 기슭을 가볍게 두드렸다. 밀려왔다 밀려가는 소리가 하루의 이야기를 들려주는 듯했다.`,
      );
      era.drawLine();
      await maru.say_and_wait(`${callname}! 여기 물 정말 시원해!`);
      await era.printAndWait(`${maru.name}는 기쁜 듯 손을 흔들었다.`);
      await you.say_and_wait(`${maru.name}.`);
      await era.printAndWait(
        `조금 복잡한 눈빛으로 ${maru.name}를 바라본 뒤, 신발을 벗고 맨발로 바다를 향했다.`,
      );
      await era.printAndWait(`차가운 감촉에 앞서 희미한 저항감이 느껴졌다.`);
      await era.printAndWait(
        `하지만 마음먹고 다가갈수록 그 불편함도 천천히 사라졌다.`,
      );
      era.printButton(`「여름 기분은 어때?」`, 1);
      era.printButton(`「바닷물, 베리 쿨하지?」`, 2);
      await era.input();
      await maru.say_and_wait(
        `몸만 시원해진 게 아니야. 달아올랐던 마음까지 한꺼번에 차분해졌어.`,
      );
      await you.say_and_wait(
        `${maru.name}가 즐겁게 노는 모습을 보니까 내일이 기다려지네.`,
      );
      await maru.say_and_wait(`내일도 맑고 좋은 날씨겠지.`);
      await era.printAndWait(
        `${maru.teen_sex_title}는 모래사장 위를 바라보았다. 저녁이 되어도 훈련을 계속하는 ${maru.uma_sex_title}들이 보였다.`,
      );
      await you.say_and_wait(
        `무언가를 잃고 아파하며 잠 못 이루고 나서야, 자신이 얼마나 오만하게 모든 것을 낭비했는지 뼈저리게 깨닫는 거겠지.`,
      );
      await maru.say_and_wait(
        `……그렇게 아파하고 방황한 뒤에야, 온 마음을 쏟았던 것이 진짜 빛을 발하는 거겠지.`,
      );
      await maru.say_and_wait(
        `방황과 아픔이 각오로 바뀌는 그 순간을 계속 기다렸어.`,
      );
      await era.printAndWait(
        `말을 마치자 두 사람 사이에 침묵이 흘렀다. 그러다 이쪽에서 먼저 입을 열었다.`,
      );
      await you.say_and_wait(`${maru.name}, 내 이야기 좀 들어 줄래?`);
      await maru.say_and_wait(
        `이미 ${callname}한테 여신의 자리에서 끌어내려졌는데, 이번에는 ${callname}, 야한 짓이라도 하려는 거야?`,
      );
      await era.printAndWait(
        `겁먹은 듯 살짝 떠는(?) ${maru.name}를 보자, 방금 전의 대담한 말에 저절로 얼굴이 뜨거워졌다.`,
      );
      era.printButton(`「크흠. 사실 전하고 싶은 말이 있어.」`, 1);
      await era.input();
      await era.printAndWait(
        `트레이너로서의 위신을 지키려고, 이제 와서 그런 게 남아 있기는 한지 모르겠지만, 자세를 바로잡았다.`,
      );
      era.printButton(`「다시 한번 빛나는 뒷모습을 보여 줘!」`, 1);
      era.printButton(
        `「꼭 그 뒷모습을, 그 바람을 다시 한번 느끼게 해 줘.」`,
        2,
      );
      await era.input();
      await maru.say_and_wait(`! 어? ${callname}의 부탁이라도 그건……`);
      await you.say_and_wait(
        `아니, 알고 있어. 나뿐만이 아니야. 아는 사람도, 모르는 사람도 모두 그 순간을 기다리고 있어.`,
      );
      await maru.say_and_wait(`${callname}이(가) 그렇게 말해도……`);
      era.printButton(`「그 후 ${maru.name}, 너 자신을 보긴 한 거야?」`, 1);
      await era.input();
      await maru.say_and_wait(
        `노력하면 반드시 성공한다는 환상은 늘 현실에 깨지기 마련 아니야?`,
      );
      await you.say_and_wait(
        `아니, 결과보다는 고통을 피하려던 사람들이 결국 마지막 순간에 깨닫는 건, 꿈을 쫓는 과정 그 자체가 가진 의미야.`,
      );
      await you.say_and_wait(
        `게다가 그렇다 해도, 그런 자신을 미워하기보다는 방황과 아픔 끝에 지친 사람들이 세상에서 아름다움이라 부르는 것을 보게 되는 거야.`,
      );
      await you.say_and_wait(
        ` 그렇게 기대하고, 갈망하고, 자신의 방황이 드디어 선명해질 순간을 기도하는 거야.`,
      );
      await you.say_and_wait(
        ` 그리고 그 아름다움을 깨달은 순간, 그 눈부신 아름다움에 완전히 사로잡히는 찰나를 말이지.`,
      );
      await you.say_and_wait(` 비록 인생이 고난으로 가득 차 있을지라도.`);
      await you.say_and_wait(` 비록 처음 겪는 일들에 허둥댈지라도.`);
      await you.say_and_wait(
        ` 비록 이 고통을 남에게 털어놓지 못해 깊이 억눌린 마음일지라도.`,
      );
      era.printButton(`「나도 그 아름다운 뒷모습을 보고 싶어.」`, 1);
      await era.input();
      await you.say_and_wait(
        `하지만 달리 보면, 그건 사람을 새롭게 태어나게 하는 가장 강한 바람이자 힘이야.`,
      );
      await you.say_and_wait(
        `분명, 분명 그 아름다운 뒷모습을 쫓으며 떠올릴 거야!`,
      );
      await you.say_and_wait(`그러니까 힘을 빌려 줘.`);
      await era.printAndWait(`${maru.sex}의 두 눈을 똑바로 바라보았다.`);
      await maru.say_and_wait(` ${callname}은(는) 나한테 뭘 시키려는 거야?`);
      await you.say_and_wait(
        `학원의 잔디 위에서 가장 잊지 못할 장면을 보여 줄게.`,
      );
      await maru.say_and_wait(`기대하고 있을게?`);
      await era.printAndWait(
        `그 미소는 마치 봄날에 처음 핀 꽃 같았다. ${maru.name}는 그 순간이 오기를 기대하고 있었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_34: (() => {
    const title = '무풍 지대';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} emperor 皇帝（シンボリルドルフ）
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, emperor, you) => {
      emperor.name = '황제';
      await era.printAndWait(`손에 든 계산 용지를 멍하니 바라보았다.`);
      await you.say_and_wait(
        `아니야. 이래서는 ${maru.sex}의 마음에 맺힌 응어리를 풀 수 없어.`,
        true,
      );
      await era.printAndWait(
        `눈앞의 계산 용지를 구겨 아무렇게나 옆으로 던졌다.`,
      );
      await era.printAndWait(
        `날아간 종이뭉치는 포물선을 그리며 다른 종이 뭉치에 부딪혔다.`,
      );
      await era.printAndWait(
        `도망치고 싶은 마음과 아무것도 할 수 없다는 낙담이 그렇게 퍼져 갔다.`,
      );
      await era.printAndWait(`똑똑.`);
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `${you.actual_name_with_title}이신가요?`,
      );
      era.printButton(`「네, 무슨 일이시죠?」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `아, 트레이너${you.adult_sex_title}, 네. 회장님께서 트레이너${
          you.adult_sex_title
        }께 전해 달라는 말씀이 있으세요.`,
      );
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `『원하는 답은 이쪽에 있다.』`,
      );
      await you.say_and_wait(`……알았어요. 지금 갈게요.`);
      await you.say_and_wait(
        `언제부터지? 아니, 처음부터 옆에서 지켜보고 있었던 건가?`,
        true,
      );
      era.drawLine();
      await era.printAndWait(`${maru.uma_sex_title}의 뒤를 따라갔다.`);
      await you.say_and_wait(`심볼리 루돌프는 어디까지 알고 있는 거지?`, true);
      await era.printAndWait(`이유 모를 초조함이 마음을 차지했다.`);
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}`,
        `실례합니다.`,
      );
      await era.printAndWait(
        `${maru.uma_sex_title}의 안내를 받아 밤의 학생회실에 도착했다.`,
      );
      await era.printAndWait(`eclipse first, the rest nowhere.`);
      await era.printAndWait(
        `거대한 현판과 서류에 몰두한 황제의 모습에 식은땀이 흘렀다.`,
      );
      await emperor.say_and_wait(`왔는가?`);
      await era.printAndWait(
        `이제야 알아챈 듯, 하던 일을 멈춘 황제가 여유로운 미소로 이쪽을 바라보았다.`,
      );
      await emperor.say_and_wait(`오늘 밤 달은 어떻게 보이는가?`);
      await you.say_and_wait(
        `오늘 밤의 달은 어제와 크게 다르지 않군요. 그리고 황제 폐하, 다시 뵙는군요.`,
      );
      await era.printAndWait(
        `${maru.sex}를 화나게 해서는 안 된다. 그랬다가는 끔찍한 일이 벌어질 것이다.`,
      );
      await era.printAndWait(
        `지나치게 아첨해서도 안 된다. ${maru.sex}의 흥미가 사라질 테니.`,
      );
      await emperor.say_and_wait(
        `이토록 우수한 트레이너를 만나게 되어, 트레센의 학생회장으로서 나 역시 영광이다.`,
      );
      await you.say_and_wait(
        `상대가 도량을 보일 때는 거절하지 않는 편이 좋겠지.`,
        true,
      );
      await emperor.say_and_wait(`그리고.`);
      await era.printAndWait(
        `그 대답에 가타부타 말하지 않은 채, 황제는 곧바로 두 번째 질문을 던졌다.`,
      );
      await emperor.say_and_wait(
        `트레이너와 ${maru.uma_sex_title}의 관계는 어떠해야 한다고 생각하는가? ${maru.name}의 트레이너여.`,
      );
      await era.printAndWait(
        `마지막 호칭에만 일부러 힘을 주었다. 아마 힌트일 것이다.`,
      );
      await you.say_and_wait(
        `${maru.uma_sex_title}와 트레이너는 서로 의지하고 도와야 한다고 생각합니다.`,
      );
      await emperor.say_and_wait(`……그다음은?`);
      await era.printAndWait(`황제는 장난기 어린 표정으로 이쪽을 바라보았다.`);
      await you.say_and_wait(`이를테면 이인삼각 같은 관계입니다.`);
      await emperor.say_and_wait(
        `그 정도라면, 어째서 지금과 같은 처지에 놓였는가?`,
      );
      await emperor.say_and_wait(
        `트레이너, 곧 ${maru.uma_sex_title}를 이끄는 자라면.`,
      );
      await emperor.say_and_wait(
        `길 없는 곳에 길을 내고, 이미 걸어온 길에서도 새 길을 찾아, 다른 이들을 미지의 땅으로 이끌어야 한다.`,
      );
      await emperor.say_and_wait(
        `${maru.uma_sex_title}가 미래에 대한 방황과 불안에 직면했을 때, ${maru.uma_sex_title}의 비전과 자신감을 올바르게 이끌어야 한다.`,
      );
      await emperor.say_and_wait(`그중 무엇을 이루었는가?`);
      await you.say_and_wait(`……`);
      await you.say_and_wait(
        `황제는 트레이너에게 필요한 지도력을 이야기하고 있다.`,
        true,
      );
      await you.say_and_wait(
        `여기서 ${maru.sex}가 원하는 건 ${maru.name}의 트레이너로서 자격이 있는지 증명하라는 거겠지.`,
        true,
      );
      await you.say_and_wait(`그렇다면.`, true);
      await you.say_and_wait(
        `……제가 가려는 곳은 ${maru.sex}와 같은 방향입니다. 그 배에 타는 조건은 선원이 되는 것이고요.`,
      );
      await you.say_and_wait(
        `매 순간 제 목표를 향해 나아가고 있는지 살핍니다. 선장에게 협력하는 것은 제 뜻이며, 스스로의 선택이라는 것도 늘 알고 있습니다.`,
      );
      await you.say_and_wait(
        `제가 고른 조건 아래, 제 자리에서, 제 의지로 내린 선택입니다.`,
      );
      await you.say_and_wait(
        `불필요한 짐과 오해받을 위험, 홀로 견뎌야 하는 외로움을 감당하는 것.`,
      );
      await you.say_and_wait(`……어떤 의미에서는 이상에 바치는 제물입니다.`);
      await you.say_and_wait(
        `하지만 이상으로 향하는 길에 대가가 없을 수는 없겠지요.`,
      );

      await you.say_and_wait(
        `그러니 제가 따르는 것은 선장의 명령이라기보다 제 자신의 선택입니다.`,
      );
      await emperor.say_and_wait(
        `복종이란 결국 굴복을 듣기 좋게 포장한 말에 불과하다.`,
      );
      await emperor.say_and_wait(
        `두려움에 못 이겨 아무렇게나 둘러댄 거짓말 아닌가?`,
      );
      await you.say_and_wait(`……황제 폐하께서는 미꾸라지라는 생물을 아십니까?`);
      await emperor.say_and_wait(
        `논이나 연못에서 흔히 볼 수 있는 생물이지. 그게 어쨌다는 건가?`,
      );
      await you.say_and_wait(
        `그렇다면 미꾸라지가 잡기 어렵다는 것도 아시겠군요.`,
      );
      await you.say_and_wait(
        `논바닥을 미끄러지듯 돌아다녀 잡기 어렵고, 운 좋게 손에 닿아도 금방 빠져나갑니다.`,
      );
      await you.say_and_wait(
        `줄곧 도망치기만 하는 우리는 약삭빠른 미꾸라지와 무엇이 다를까요?`,
      );
      await you.say_and_wait(
        `마땅히 져야 할 책임 앞에서 빠져나가며 사는 것이, 고통을 감당하는 것보다 정말 행복할까요?`,
      );
      await you.say_and_wait(`굴복의 뿌리는 나약함입니다.`);
      await you.say_and_wait(
        `실패에 익숙해지고, 실패를 받아들이고, 끝내 실패에 적응한 사람은 실패하는 법밖에 모릅니다. 성공할 수도 있다는 꿈조차 꾸지 못하고, 꿈꿀 용기도 잃은 패배자가 되는 겁니다.`,
      );
      await you.say_and_wait(
        `……한 실패에서 다음 실패로만 나아가는 사람에게 성공은 찾아오지 않습니다.`,
      );
      await you.say_and_wait(
        `울음 속에서 빈손으로 태어나, 또 울음 속에서 빈손으로 떠납니다. 무언가를 해 이 세상에 흔적을 남기지도 못한 채, 미련만 품고 떠나기에는 아쉽지 않겠습니까?`,
      );
      await you.say_and_wait(`그래서 하나의 결정을 따릅니다.`);
      await you.say_and_wait(
        `……트레이너가 되기로 결정한 이상, 제가 가장 힘을 발휘할 수 있는 곳은 당연히 트레센입니다.`,
      );
      await you.say_and_wait(
        `제가 나아가는 방향이 ${maru.name}가 바라는 것과 완전히 같은지는 확신할 수 없지만, `,
      );
      await you.say_and_wait(
        `${maru.name}가 제게 보내는 신뢰와 사랑만큼은 믿을 수 있다고 확신합니다. 그래서 망설이는 대신 행동하겠습니다.`,
      );
      await emperor.say_and_wait(
        `……지휘자로서는 간신히 합격이라 할 수 있겠군.`,
      );
      await emperor.say_and_wait(
        `세계관은 아직 미숙하고, 가치관도 평범한 수준에 불과하다.`,
      );
      await emperor.say_and_wait(`겨우 기준에 닿은 것은 확고한 비전뿐이군.`);
      await emperor.say_and_wait(`……하지만 오늘 밤의 요점은 그게 아니다.`);
      await era.printAndWait(`황제는 미소라는 가면을 쓰고 이쪽을 바라보았다.`);
      await emperor.say_and_wait(`영화를 좋아하는가?`);
      await era.printAndWait(`갑작스러운 황제의 질문에 조금 당황했다.`);
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `어떻게 대답해야 체면을 지킬 수 있을지 고민하는 사이, 황제는 혼자서 이야기를 이어 갔다.`,
      );
      await emperor.say_and_wait(
        `이런 장면을 상상해 보게. 두 트레이너가 같은 서부 영화를 보다가 이런 장면을 마주했어. 보안관과 카우보이가 결투를 벌이고, 총성이 울린 뒤 한 사람은 죽고 다른 사람은 살아남았다. 그런데 관객인 두 사람의 표정은 서로 달랐지——`,
      );
      await era.printAndWait(`황제는 일부러 말끝을 늘이며 대답을 기다렸다.`);
      await you.say_and_wait(
        `영화 속 서로 다른 인물에게 몰입해서, 그 인물과 기쁨과 슬픔을 함께 느꼈겠지요.`,
      );
      await emperor.say_and_wait(
        `죽은 쪽은 카우보이를 쫓던 고결한 보안관이고, 살아남은 쪽은 수배 중인 범죄자라 해도 말인가?`,
      );
      await you.say_and_wait(
        `……범죄자에게 몰입한 트레이너는 영화를 보며 느끼는 즐거움을 깨뜨리지 않으려고 무의식적으로 모든 흠을 지웠겠지요.`,
      );
      await you.say_and_wait(
        `……다른 한 사람은 주인공인 범죄자를 인정하지 못했기에, 카우보이의 결점을 견딜 수 없었던 겁니다.`,
      );
      await emperor.say_and_wait(`훌륭한 설명이군. 생각보다도 우수해.`);
      await era.printAndWait(`황제는 박수를 쳤다.`);
      await emperor.say_and_wait(
        `그렇다면 진정한 ${maru.name}를 얼마나 이해하고 있는가?`,
      );
      await emperor.say_and_wait(
        `자신이 카우보이에게 몰입한…… 이른바 관객이 아니라는 것을 어떻게 아는가?`,
      );
      await emperor.say_and_wait(`수고했네.`);
      await era.printAndWait(
        `황제는 자리에서 일어나 멀리 있는 트레이닝장을 바라보았다.`,
      );
      await era.printAndWait(
        `잔디 위에서 열심히 훈련하는 ${maru.uma_sex_title}들의 목소리가 트레센에 울려 퍼졌다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_37: (() => {
    const title = '마음';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await maru.say_and_wait(`흥흥~ 우린 이미 연인 사이잖아?`);
      await era.printAndWait(
        `이야기를 나누다 농담 삼아 ${maru.name}의 집에서 잠시 지내겠다고 했더니, 상대는 선뜻 승낙했다.`,
      );
      await era.printAndWait(
        `손을 잡아끌고 쇼핑몰을 돌아다니며 생활용품을 고르다 보니, 결국 애차에도 다 실을 수 없는 양이 되었다.`,
      );
      await era.printAndWait(
        `${maru.name}와 상의한 끝에 운송 업체를 통해 모두 보내기로 했다.`,
      );
      await era.printAndWait(
        `한솥밥을 먹으면서 두 사람의 유대는 점점 깊어졌다.`,
      );
      await you.say_and_wait(
        `이제 때가 됐어. 지금이야말로 ${maru.name}가 그 한 걸음을 내딛게 해야 해.`,
        true,
      );
      await era.printAndWait(
        `실패에 대한 두려움 때문에 알맞은 기회가 손안에서 미끄러져 나간다.`,
      );
      await era.printAndWait(`무언가를 좇고 싶은데도 손을 뻗지 못한다.`);
      await you.say_and_wait(
        `……${maru.name}가 내딛게 한다기보다는, 내가 이 한 걸음을 내딛는 거야.`,
        true,
      );
      await era.printAndWait(
        `구입한 가구를 확인하며 어떻게 움직일지 생각하고 있다.`,
      );
      era.drawLine({ content: '저녁 식사 후' });
      era.printButton(`「내일 같이 가을 구경하러 갈까?」`, 1);
      await era.input();
      await era.printAndWait(
        `분위기가 가장 좋을 때, 다음 주의 계획을 ${maru.name}에게 전할 생각이다.`,
      );
      await maru.say_and_wait(`그러고 보니 가을을 즐길 계절이 됐네.`);
      await maru.say_and_wait(`그럼 내일은 같이 멀리 나가 볼까?`);
      await era.printAndWait(
        `${maru.name}는 젓가락을 내려놓고 두 손을 모으며 웃는 얼굴로 이쪽을 바라보았다.`,
      );
      await you.say_and_wait(`좋았어!`, true);
      await you.say_and_wait(`좋지. 예술의 계절, 독서의 계절이라고 하잖아?`);
      await you.say_and_wait(
        `더운 여름이나 추운 겨울보다는 선선한 가을이 예술적인 감성을 펼치기에 가장 좋은 계절이지.`,
      );
      await you.say_and_wait(
        `그리고 이번 가을에는 ${maru.name}와 멋진 추억을 남기고 싶어.`,
      );
      await maru.say_and_wait(
        `어머, ${callname}, 그렇게 나를 생각해 주는 거야?`,
      );
      await maru.say_and_wait(
        `${maru.sex_code !== 1 ? '아가씨' : '미남'}인 나도 ${callname}하고 멋진 추억을 남기고 싶어……`,
      );
      await maru.say_and_wait(`후후~ 벌써 내일이 기대되네♪`);
      await era.printAndWait(`${maru.name}는 기분이 무척 좋아 보였다.`);
      era.drawLine({ content: '다음 날 아침' });
      await maru.say_and_wait(` ${callname}? 일어났어?`);
      await era.printAndWait(`아직 잠이 덜 깬 눈을 비비며 힘겹게 일어났다.`);
      era.printButton(`「약속한 기상 시간보다 조금 이르네.」`, 1);
      await era.input();
      await era.printAndWait(
        `아침 일찍부터 오랜만에 활기찬 ${maru.name}의 목소리를 들으니 앞으로의 일에 희망이 생겼다.`,
      );
      await maru.say_and_wait(
        `그러고 보니 요즘 미술 전시회가 열린대. 거기부터 가 보자.`,
      );
      era.drawLine();
      await maru.say_and_wait(
        `벌써 점심시간이 다 됐네. ${callname}, 내가 만든 도시락 먹어 볼래?`,
      );
      era.drawLine();
      await you.say_and_wait(`인형 뽑기는 정말 어렵네.`);
      await era.printAndWait(
        `${maru.name}의 인형을 안은 ${maru.teen_sex_title}는 행복한 미소를 짓고 있다.`,
      );
      await you.say_and_wait(`이걸로 충분해.`);
      era.drawLine();
      await era.printAndWait(`마지막 행선지는 학원의 옥상이었다.`);
      await maru.say_and_wait(`바람도 성장하나 봐.`);
      await era.printAndWait(
        `${maru.name}의 시선을 따라 학원 전체를 바라보았다. 금빛 은행잎이 바람을 타고 흩날린다.`,
      );
      await maru.say_and_wait(
        `갓 태어난 바람은 언제나 걱정 없이 하늘로 날아가.`,
      );
      await maru.say_and_wait(
        `하지만 낙엽의 슬픔을 마주한 뒤에는 ${maru.sex}의 발걸음도 무거워지지.`,
      );
      await maru.say_and_wait(
        `${maru.sex}도 낙엽에게 하늘의 자유를 느끼게 해 주고 싶어. 그래서 부드럽게 끌어안고, 걱정 없는 하늘로 함께 데려가려 해.`,
      );
      await maru.say_and_wait(
        `하지만 낙엽을 붙잡는 대지는 결국 바람의 품보다 강해. 낙엽은 하늘로 날아오르다가 날개가 꺾이지.`,
      );
      await maru.say_and_wait(`결국 낙엽은 땅으로 돌아가.`);
      await era.printAndWait(
        `${maru.teen_sex_title}의 성역 안으로 발을 들이기 시작했다.`,
      );
      await you.say_and_wait(
        `그래도 낙엽은 바람의 인도를 받아 스스로 결정했어.`,
      );
      await you.say_and_wait(
        `그 과정보다 낙엽의 생명력을 잘 보여 주는 건 없을 거야.`,
      );
      era.printButton(`「${maru.name}…… 너에게 해 줄 말이 있어.」`, 1);
      await era.input();
      await maru.say_and_wait(`응?`);
      await era.printAndWait(
        `저무는 햇살이 ${maru.name}의 긴 머리카락 위에 내려앉아, ${maru.sex}를 금빛으로 감쌌다.`,
      );
      era.printButton(`「다음 주를 기대해 줘!」`, 1);
      era.printButton(`${maru.sex}에게 그때 직접 보여 주자.`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `그럼 잔뜩 기대하고 있을게. ${callname}이(가) 얼마나 놀라운 선물을 줄지.`,
        );
        await era.printAndWait(
          `무언가를 짐작한 듯, ${maru.name}가 눈을 찡긋했다.`,
        );
      } else {
        await you.say_and_wait(`분명 깜짝 놀라게 될 거야!`, true);
        await era.printAndWait(
          `${you.name}은(는) 한숨을 돌리고 다음 주를 기다렸다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_38: (() => {
    const title = '바람 없는 날';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} minoru ハヤカワタヅナ
     * @param {CharaTalk} taste アキカワヤヨイ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, minoru, taste, you, callname) => {
      maru.print(`이제 슬슬 끝내야겠어.`);
      maru.print(
        `달리는 데서 기쁨을 느끼지 못한다면, 아무리 노력해도 한 가지 질문에는 답할 수 없어.`,
      );
      maru.print(`나는 왜 이 아픔을 견뎌야 하는 걸까?`);
      maru.print(
        `그러니 후배들이 레이스장에서 활약하는 모습을 이렇게 지켜보면 되는 거야!`,
      );
      maru.print(`지금의 나는 특히 그걸 잘하니까!`);
      await maru.say_and_wait(`……`);
      maru.print(`그런데 왜 마음 한구석은 아직도 텅 빈 걸까?`);
      maru.print(`찾아야 할 답이 아직 남아 있는 것 같아.`);
      await maru.say_and_wait(`답이라……?`);
      maru.print(
        `뭐, 괜찮겠지. 기운을 내서 사랑하는 ${callname}을(를) 찾으러 가자!`,
      );
      maru.print(
        `앞으로 어떤 길을 선택해도 ${callname}은(는) 다정하게 격려해 주겠지.`,
      );
      maru.print(`그러고 보니 ${callname}이(가) 선물을 준다고 했어.`);
      await maru.say_and_wait(`기대하고 있을게? ${callname}?`);
      era.drawLine({ content: '이사장실' });
      await era.printAndWait(
        `황제와, 줄곧 ${maru.name}를 응원해 온 ${maru.uma_sex_title}들의 도움으로 오늘까지 서명의 90%를 모았다.`,
      );
      await era.printAndWait(
        `이사장실 문을 가볍게 두드리고 들어오라는 말을 들은 뒤 문을 열었다.`,
      );
      await taste.say_and_wait(
        `질문! 트레이너는 밤에 트레이닝장을 빌려 무엇을 하려는 건가?`,
      );
      await era.printAndWait(`간단히 인사를 나눈 뒤, 곧바로 구상을 설명했다.`);
      await you.say_and_wait(
        `제 담당인 ${maru.uma_sex_title} ${maru.name}가 다시 한번 희망을 불태우게 하고 싶습니다.`,
      );
      await taste.say_and_wait(
        `경악! 어째서 꼭 트레센의 트레이닝장이어야 하는가?`,
      );
      await you.say_and_wait(
        `이 트레이닝장에는 이곳에서 땀 흘린 수많은 ${maru.uma_sex_title}의 노력이 담겨 있습니다. ${maru.uma_sex_title}들이 힘껏 도전하는 모습이야말로 ${maru.name}가 바라는 것입니다.`,
      );
      await you.say_and_wait(
        `이것이 ${maru.uma_sex_title}들의 연명 청원서입니다.`,
      );
      await era.printAndWait(
        `허리를 숙여 빼곡히 서명된 종이를 눈앞의 ${maru.teen_sex_title}에게 건넸다.`,
      );
      await era.printAndWait(
        `상대는 서명을 하나하나 확인했다. ${maru.teen_sex_title}의 머리 위에 있는 아기 고양이는 낯선 이쪽이 궁금한지, 야옹야옹 울며 주위를 맴돌았다.`,
      );
      await era.printAndWait(
        `${maru.teen_sex_title}는 까치발을 들어야 이쪽과 눈을 맞출 수 있었다. 하지만 지금은 큰 숨조차 쉴 수 없었다. 마지막 결정을 기다리고 있었다.`,
      );
      await taste.say_and_wait(
        `감동! 트레센의 ${maru.uma_sex_title}들은 생각보다 단합되어 있군.`,
      );
      await taste.say_and_wait(`트레이너여.`);
      era.printButton(`「네!」`, 1);
      await era.input();
      await taste.say_and_wait(`동의! 나도 이 행사에 참여하겠네!`);
      await era.printAndWait(
        `${maru.teen_sex_title}는 만년필을 들어 아키카와 야요이라는 이름을 정성껏 적고 종이를 돌려주었다.`,
      );
      era.printButton(`「감사합니다, 이사장님!」`, 1);
      await era.input();
      await era.printAndWait(
        `미소 짓는 ${maru.teen_sex_title}는 「희! 열!」이라고 적힌 부채를 펼쳤다. 곁의 ${
          minoru.name
        }는 근심과 기쁨이 뒤섞인 복잡한 표정으로 ${taste.name}와 ${you.name}을(를) 바라보고 있다.`,
      );
      await era.printAndWait(`종이를 조심스럽게 챙기고 이사장실을 나섰다.`);
      era.drawLine();
      maru.print(
        ` ${callname}은(는) 함께 상점가에 가자며 준비해 둔 쿠폰을 꺼냈어.`,
      );
      maru.print(
        `행동은 꽤 수상하지만, ${callname}이(가) 먼저 데이트를 신청하는 일은 흔치 않지.`,
      );
      maru.print(`미끼라고 해도 너무 호화로운걸.`);
      maru.print(
        `웃으며 선물을 받은 뒤, ${callname}하고 사이제리야에서 간단히 점심을 먹고 함께 영화를 봤어.`,
      );
      maru.print(
        `평일이라 그런지 이 시간대에는 관객이 의외로 적어서, 나란히 앉을 자리를 쉽게 구할 수 있었어.`,
      );
      maru.print(
        `${maru.uma_sex_title}가 나약함을 딛고 조금씩 성숙해 가는 성장 영화 같았어. ${maru.uma_sex_title}가 수많은 고난 속에서도 이를 악물고 나아가는 모습을 보니, 나도 모르게 ${maru.sex}에게 박수를 보내고 싶어졌지.`,
      );
      await you.say_and_wait(
        `이런 장면은 몇 번을 봐도 저절로 감동이 밀려오고 힘이 나네.`,
      );
      maru.print(`정말 공감해.`);
      maru.print(
        `영화가 끝나고 근처에서 가장 어렵다는 인형 뽑기에 도전했다가, 예상대로 실패했어.`,
      );
      maru.print(
        `나를 위로하려던 ${callname}이(가) 오히려 열이 올라서, 기어이 인형을 뽑겠다고 하더라.`,
      );
      maru.print(
        `위로받던 사람이 되레 위로해 주게 되다니. 이것도 운명의 묘미겠지.`,
      );
      era.printButton(`「오늘 밤, 같이 트레센에 가 볼까?」`, 1);
      await era.input();
      maru.print(
        `백화점의 고급 레스토랑에서 식사하다가 그렇게 말하는 ${callname}.`,
      );
      await maru.say_and_wait(
        `어머, ${callname}, 드디어 선물의 정체를 알려 주는 거야?`,
      );
      await you.say_and_wait(
        `오히려 내가 너무 설레서 포크도 제대로 못 잡겠어.`,
      );
      await maru.say_and_wait(`그렇게 설레?`);
      await you.say_and_wait(
        `응. 그만큼 대단한 선물이야. 분명 오래 기억에 남을 거야.`,
      );
      maru.print(
        ` ${callname}이(가) 농담에 진지하게 답하니까, 나도 모르게 기대되기 시작했어.`,
      );
      await maru.say_and_wait(`그럼 이제부터는 마음껏 즐겨야겠네!`);
      maru.print(
        `법적으로 술을 마실 수 있는 나이는 내년부터지만, 이 정도는 괜찮겠지?`,
      );
      maru.print(
        `술을 마신 터라 이야기를 나누며 ${callname}하고 천천히 트레센으로 향했어.`,
      );
      maru.print(
        `이야기를 나누다 문득 전에 은퇴한 ${maru.uma_sex_title}에게 화제가 옮겨 갔어. 가슴이 갑자기 욱신했지.`,
      );
      await you.say_and_wait(
        `그러고 보니 전에 은퇴한 ${maru.uma_sex_title}는 지금 트레이너를 목표로 노력하고 있어.`,
      );
      await maru.say_and_wait(`트레이너를 목표로 하는 것도 하나의 길이네.`);
      maru.print(
        `하지만 유일한 해결책은 ${maru.sex}들 스스로가 깨달아야만 얻을 수 있는 것이었어.`,
      );
      maru.print(`……가슴이 갑자기 욱신했어.`);
      await you.say_and_wait(
        `타고나길 어떤 분야와는 맞지 않는 사람도 있겠지. 그래도 자신이 가진 것을 돌아보고 다른 방향으로 노력하면, 뜻밖의 기쁨이 기다리고 있을지도 몰라!`,
      );
      maru.print(`무슨 말을 해야 할지 몰라서 침묵했어.`);
      maru.print(
        `거리 하나만 더 지나면 트레센 학원이었어. 무슨 행사라도 열리는지 웃음소리가 들려왔지.`,
      );
      maru.print(`이상하네. 평소 트레센이 이렇게 시끄러웠나?`);
      maru.print(`이게 ${callname}이(가) 준비한 선물이구나.`);
      maru.print(`정말이지, 참 멀리도 돌아왔네.`);
      await maru.say_and_wait(`같이 보러 갈까?`);
      maru.print(`그렇게 ${callname}의 손을 잡고 트레센으로 달렸어.`);
      maru.print(`이렇게 즐겁게 달리는 건 오랜만이네.`);
      maru.print(`소리가 들려오는 쪽을 따라 천천히 트레이닝장으로 향했어.`);
      maru.print(
        `축제 같았어. 트레이너와 ${maru.uma_sex_title}들이 웃으며 이야기하고, 잔디 위에서 땀을 흘리거나 관객석에서 대화를 나누며 환호하고 있었지.`,
      );
      maru.print(
        `이사장님과 하야카와${
          maru.adult_sex_title
        }이 우리가 온 걸 알아챘어. 이사장님은 「희! 열!」이라고 적힌 부채를 펼쳤고, 하야카와 씨는 미소를 보내 주었지. 그러고 보니 이사장님 머리 위의 아기 고양이도 편안하게 꼬리를 흔들고 있었어.`,
      );
      maru.print(`누구나 만족스러운 미소를 짓고 있었어.`);
      maru.print(`축제를 즐기는 것처럼.`);
      await maru.say_and_wait(`그리운 광경이네.`);
      maru.print(`내 세계는 한때 색채로 가득했어.`);
      maru.print(
        `어릴 때 보았던 새빨간 슈퍼카. 그 멋진 모습에 당시의 나는 푹 빠졌지.`,
      );
      maru.print(
        `그 아이의 속삭임이 들렸어. 나처럼 자유롭게 달리고 싶어 했지.`,
      );
      maru.print(
        `그래서 어린 나는 몰래 다짐했어. 나중에 차를 사게 되면 꼭 이 차를 고르겠다고.`,
      );
      maru.print(
        `함께 달리며 마음이 통할 그날을 기다리면서, 카탈로그의 사진을 보고 열심히 운전을 연습했어.`,
      );
      maru.print(`면허를 딴 날, 내 손으로 내 면허증을 받았지.`);
      maru.print(`꿈처럼 실감이 나지 않아서, 몇 번이고 현실인지 확인했어.`);
      maru.print(
        `훈련하며 겪은 온갖 일들. 기쁨을 얻기도 했지만, 망설임과 방황도 조용히 찾아왔어.`,
      );
      maru.print(
        `그때의 내가 가장 행복했을까? 아니, 물론 지금도 하루하루 무척 즐겁지만.`,
      );
      maru.print(
        `우승 뒤에 받는 영예보다는, 레이스 전에 근황을 나누고 잔디 위에서 땀 흘리며 달리는 것. 가빠진 숨결이 두 다리를 자극해 더 강한 힘을 끌어내는 것.`,
      );
      maru.print(`그곳에——세 여신만이 아는 세계에 닿을 때까지.`);
      maru.print(
        `모두가 달리는 기쁨을 느낄 수 있다면, 내가 꿈꾸는 세계도 멀지 않겠지.`,
      );
      maru.print(`하지만 이상과 현실은 영원히 어긋나는 걸지도 몰라.`);
      maru.print(
        `많은 ${maru.uma_sex_title}가 그 기쁨을 느끼기도 전에 겹겹이 둘러싼 가시에 옷자락이 붙잡혀, 발걸음을 멈추게 돼.`,
      );
      maru.print(`외치고, 누군가 ${maru.couple_title}을 도와주기를 기도하지.`);
      maru.print(
        `하지만 유일한 해결책은 ${maru.couple_title} 스스로 깨달아야만 그곳에서 벗어날 수 있다는 거야.`,
      );
      maru.print(
        `기도했어. 재능 없는 자신을 ${maru.couple_title}이 용서하고, 밤낮으로 무능한 자신을 저주하는 그 무거운 짐을 내려놓기를.`,
      );
      maru.print(`그렇게 말로 다 할 수 없는 슬픔은 흑백 두 빛깔로 변했어.`);
      maru.print(`내 세계에 말없이 선 침묵의 성벽, 회색 유령처럼.`);
      maru.print(`유령처럼 메아리치고, 배회하고, 외쳤어.`);
      maru.print(
        `방황하는 ${maru.uma_sex_title}들을 위해서이기도, 나 자신을 위해서이기도 했지.`,
      );
      maru.print(`후배들의 동경, 잔디 위에서 느낀 바람, 그리운 지난날.`);
      maru.print(
        `하지만 과거의 추억에만 잠겨 후회라는 쾌감에 매달리는 건 옳지 않아.`,
      );
      maru.print(`그래서 미래를 향해 나아가 보기로 했어.`);
      maru.print(`내가 선택한 길이 옳은지는 나도 몰라.`);
      maru.print(
        `……어쩌면 과거의 자장가 속에서 기회를 기다리는 편이 옳았을지도 모르지.`,
      );
      maru.print(
        `이런 나는 준비가 부족하고, 각오도 한때의 열정에서 나온 것뿐이야.`,
      );
      maru.print(`어느 외딴길에서 시동이 꺼져 곤란해질지도 모르지.`);
      maru.print(`무엇이 이 모든 것을 구할 수 있을까?
`);
      maru.print(`의미. 그게 내가 찾은 답이야.`);
      maru.print(
        `『미래의 어느 순간에 나는 무엇을 했는가.』 그 의미만으로도, 앞으로 겪을지 모를 두려운 일에서 나를 구할 수 있어.`,
      );
      maru.print(
        `내 시각으로만 바라보지 않아. 사람은 본래 시간을 싣고 어딘가로 흘러가는 운송 수단이니까.`,
      );
      maru.print(`세상이여, 너는 이렇게나 아름답구나.`);
      maru.print(
        `내 욕망을 위해서도, 다른 사람을 위해서도 아닌 걸음을 내디뎌. 바람의 시선으로 눈앞의 ${maru.uma_sex_title}를 바라봐.`,
      );
      maru.print(
        `산들바람이 되고 싶어. 아니, 바람이 된 나는 시간 위에 나만의 의미를 새겼어.`,
      );
      maru.print(`어떤 결말이 기다리든 바람은 영원히 나와 함께할 거야.`);
      maru.print(`어서 트레이너 곁으로 돌아가야겠네.`);
      await maru.say_and_wait(
        `새롭게 태어난 내 모습을 트레이너한테 보여 줘야지♪`,
      );
      maru.print(`정말 이걸로 괜찮아?`);
      await maru.say_and_wait(
        `내 마음을 배신하고 싶지는 않아. 그러니까 이걸로 충분해.`,
      );
      await maru.say_and_wait(
        `버둥거리더라도, 마지막 힘을 다해서 한 번 더 해 볼 거야. 이번에는 오직 마음속에 부는 바람을 위해.`,
      );
      maru.print(`그게 너의 미학이야?`);
      await era.printAndWait(
        `한숨짓던 ${maru.name}는 사라지고, 새로 태어난 자아가 다시 주변의 공기를 흔들었다.`,
      );
      await era.printAndWait(
        `부드러운 바람처럼, 따뜻하게 웃는 그 사람 곁으로 어서 가고 싶다.`,
      );
      await era.printAndWait(`그날, 다정한 바람이 태어났다.`);
      era.drawLine();
      await era.printAndWait(`${maru.name}의 반응을 초조하게 기다리고 있다.`);
      await era.printAndWait(
        `슬픔일까? 아픔일까? 후련함일까? 부족한 말로는 눈앞의 ${maru.teen_sex_title}가 품은 마음을 표현할 수 없다.`,
      );
      await era.printAndWait(
        `시간은 달팽이가 기어간 흔적 같기도, 비행기가 남긴 비행운 같기도 했다.`,
      );
      await era.printAndWait(
        `하지만 지금은 기다릴 수밖에 없다. 가슴속 두려움에 그렇게 말했다.`,
      );
      await era.printAndWait(
        `운명의 톱니바퀴는 잘못을 저지른 순간에 멈추지 않는다. 잘못을 저지른 뒤 무엇을 할 것인지가 가장 중요하다.`,
      );
      await era.printAndWait(
        `언제까지나 은근히 아파 올 교훈을 얻었기에, 세상을 더 깊이 이해하게 되었다.`,
      );
      await era.printAndWait(`${maru.name}라면 분명 비슷한 생각을 할 것이다.`);
      await era.printAndWait(
        `그렇게 모든 것을 정리하고 앞으로의 일을 마주한다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_40: (() => {
    const title = '핼러윈';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `심해 속에서 깨어난 당신의 눈앞에는 어둠 말고는 아무것도 보이지 않았다.`,
      );
      await era.printAndWait(
        `의외로 여전히 자유롭게 숨을 쉴 수 있었고, 자신의 심장 박동도 느껴졌다.`,
      );
      await era.printAndWait(
        `출구는 어디지? 난 어떻게 해야 하지? 나 이대로 죽는 건가?`,
      );
      await era.printAndWait(
        `그런 질문들이 머릿속을 맴돌며 내 의식을 집어삼키려 했다.`,
      );
      await era.printAndWait(`그때, 소맷자락에 차가운 마찰감이 느껴졌다.`);
      await era.printAndWait(
        `마치 당신을 강제로 전진시키려는 듯, 당신은 바람에 실려 심해를 벗어나 하늘로 날아올랐다.`,
      );
      era.printButton(`「으으, 또 악몽인가.」`, 1);
      await era.input();
      await era.printAndWait(
        `악몽에서 깨어나니 이미 등 뒤가 축축하게 젖어 있었다.`,
      );
      await you.say_and_wait(`왜일까?`, true);
      await era.printAndWait(
        `이른 아침의 햇살이 커튼 사이로 스며들어 베개 위를 비추고 있었다. 빛줄기 덕분에 평소엔 보이지 않던 먼지들조차 반짝거렸다.`,
      );
      await you.say_and_wait(
        `검은 바다, 언제부턴가 불어온 바람, 그리고 누군가의 존재.`,
        true,
      );
      await era.printAndWait(
        `방금 전의 조각난 기억들을 필사적으로 떠올리려 애썼다. 왠지 이 일이 무척 중요하다는 느낌과 함께 막연한 불안감이 엄습했다.`,
      );
      await you.say_and_wait(`다시는 그런 B급 영화 안 봐.`, true);
      await era.printAndWait(
        `이런 이상한 일에 유난히 진지해진 자신이 우스워 고개를 흔들고는 옷을 입을 준비를 했다.`,
      );
      await maru.say_and_wait(`똑똑똑.`);
      await era.printAndWait(`문밖에서 노크 소리가 들렸다.`);
      if (era.get('love:4') >= 75) {
        await maru.say_and_wait(`하이루~ ${callname}, 일어났니?`);
        await you.say_and_wait(`금방 나갈게.`);
        await you.say_and_wait(
          `어느새 ${maru.name}의 집에서 지내는 게 익숙해진 건가.`,
          true,
        );
        await era.printAndWait(`이불을 개고 옷을 입으며 일과를 준비했다.`);
      } else {
        await maru.say_and_wait(`하이루~ ${callname}, 좋은 아침?`);
        await era.printAndWait(
          `${maru.name}는 평소처럼 트레이닝실로 찾아왔다.`,
        );
      }
      await era.printAndWait(`새로운 하루가 시작되었다.`);
      era.drawLine();
      await era.printAndWait(
        `마지막 서류를 폴더에 넣고 나니 오늘 일정에도 여유가 생겨 한숨 돌릴 수 있게 되었다.`,
      );
      await maru.say_and_wait(`수고했어.`);
      await era.printAndWait(
        `옆에 앉은 ${maru.name}가 커피를 책상에 내려놓았다.`,
      );
      await you.say_and_wait(`고마워.`);
      await era.printAndWait(
        `고급 브랜드는 아니다. 가게에서 흔히 파는 인스턴트커피다.`,
      );
      await era.printAndWait(
        `더 좋은 커피나 홍차도 마셔 봤지만, 아무래도 익숙해지지 않는다.`,
      );
      await era.printAndWait(
        `결국 편의점 커피야말로 세 여신이 인류에게 준 보물이라고 스스로를 위로할 수밖에 없다.`,
      );
      await maru.say_and_wait(`${callname}, 오늘 밤에는 뭐 할 거야?`);
      await era.printAndWait(`기지개를 켜며 ${maru.name}가 소파에서 일어났다.`);
      await you.say_and_wait(`오늘 밤?`);
      await era.printAndWait(
        `머릿속으로 재빨리 일정을 돌아봤다. 빠뜨린 일은 없는 듯하다.`,
      );
      await you.say_and_wait(`이제 스태미나를 올리는 훈련을 해야겠지?`);
      await era.printAndWait(`장거리 레이스에 나가려면 스태미나도 중요하다.`);
      await maru.say_and_wait(
        `못 말리겠네. 스태미나 훈련도 중요하지만, ${callname}, 뭔가 잊은 거 없어?`,
      );
      await you.say_and_wait(`……?`);
      await maru.say_and_wait(
        `작년에 같이 핼러윈 퍼레이드에 가기로 약속했잖아. ${callname}, 기억나?`,
      );
      await era.printAndWait(
        `어리둥절한 표정의 ${you.name}을(를) 보고, ${maru.name}는 결국 직접 이야기했다.`,
      );
      await you.say_and_wait(`확실히 그런 말을 했던 것 같네.`, true);
      await era.printAndWait(
        `휴대폰 메모를 열어 조금 아래로 내려 보니, 작년 핼러윈 밤에 적어 둔 약속이 있었다.`,
      );
      await you.say_and_wait(`정말 잘도 잊어버리네.`);
      await era.printAndWait(
        `더 중요한 일이 생겨서 우선순위가 낮은 일은 잠시 뒤로 미뤄 둔 걸까.`,
      );
      await maru.say_and_wait(`${callname}?`);
      await you.say_and_wait(`같이 출발하자.`);
      await era.printAndWait(
        `${you.name}은(는) ${maru.name}의 오른손을 살며시 잡고 앞장서서 트레이닝실을 나섰다.`,
      );
      await maru.say_and_wait(
        `좋아, 그럼 핼러윈 모임에 잠깐 얼굴 비치러 가자♪`,
      );
      await era.printAndWait(
        `${maru.name}의 맑은 웃음소리가 바람에 흩날리는 머리카락을 타고 트레이닝실에 기쁨을 전했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_48: (() => {
    const title = '크리스마스';
    /**
     * 結末分岐：お姉さん的悩み＋少女的憂鬱を全部トリガー、風値=15→GE、15>風値>=10→TE
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `벌써 12월이네. ${you.name}은(는) 펜을 멈추고 창밖의 눈을 바라보았다.`,
      );
      await era.printAndWait(`트레센은 해마다 이맘때면 유난히 춥네.`);
      await era.printAndWait(
        `${you.name}은(는) 고개를 저으며 다시 서류에 집중하려던 참이었다.`,
      );
      await maru.say_and_wait(`흥흥흥♪`);
      await maru.say_and_wait(`하이루—— ${callname}.`);
      await era.printAndWait(
        `문손잡이가 돌아가고, ${you.name}을(를) 사로잡은 그 ${maru.teen_sex_title}가 문을 열었다.`,
      );
      await maru.say_and_wait(
        `${callname}, 휴일에도 쉬지 않는구나. ${
          maru.sex_code !== 1 ? '아가씨' : '미남'
        }인 나는 그렇게 열심히 하는 사람이 좋더라♪`,
      );
      await era.printAndWait(
        `갑자기 들어온 ${maru.name}에게 놀라 펜을 떨어뜨렸다. 허둥지둥 펜을 주운 ${you.name}은(는) 퉁명스럽게 대꾸했다.`,
      );
      era.printButton(`「${maru.name}는 나랑 데이트하려고 온 거야?」`, 1);
      await era.input();
      await era.printAndWait(`그런데 ${maru.name}는 오히려 더 기뻐 보였다.`);
      await maru.say_and_wait(
        `후후~ ${callname}은(는) 그렇게 나랑 데이트하고 싶어? 어머♪ ${
          maru.sex_code !== 1 ? '아가씨' : '미남'
        }인 내 매력이 대단하긴 하네⭐`,
      );
      await maru.say_and_wait(
        `${callname}이(가) 먼저 신청했으니까, 지금 바로 출발하자!`,
      );
      era.drawLine();
      await maru.say_and_wait(
        `못 말리겠네. ${callname}하고 이렇게 거리를 걷는 것도 나쁘지 않은걸.`,
      );
      era.printButton(`「응…… 눈부시네.」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}과(와) 겨울옷으로 갈아입은 ${maru.name}가 큰길을 걷는다. 본래도 아름다운 ${
          maru.sex
        }가 정성껏 고른 옷을 입자 더욱 돋보이는 분위기가 ${you.name}의 마음을 깊이 사로잡았다.`,
      );
      await era.printAndWait(
        `관광객 A: 이분은 ${maru.name} 맞죠? 텔레비전에서 ${maru.sex}가 달리는 모습을 봤어요.`,
      );
      await era.printAndWait(
        `관광객 B: ${maru.name}다! 저는 ${you.name}의 팬이에요! 사인 좀 부탁드려요!`,
      );
      await maru.say_and_wait(`어머, 나 벌써 그렇게 유명해졌어?`);
      await era.printAndWait(
        `곤란한데. ${maru.sex}가 왔다는 걸 알아채는 사람이 점점 늘어났다.`,
      );
      await era.printAndWait(
        `${maru.name}의 매력이 지나가던 사람들까지 끌어모으고 있다.`,
      );
      era.printButton(
        `(${maru.name}와 보내는 시간을 방해하게 둘 수는 없어.)`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) ${maru.name}의 점점 따뜻해지는 작은 손을 잡고 걸음을 재촉하며 쫓아오는 팬들을 따돌리려 했다.`,
      );
      await maru.say_and_wait(`……후후♪`);
      await era.printAndWait(
        `바짝 뒤따라오던 팬들을 겨우 따돌리고 보니 시내 중심 공원에 도착해 있었다.`,
      );
      await era.printAndWait(
        `숨이 가쁜 ${you.name}과(와) 달리, ${maru.uma_sex_title}인 ${
          maru.sex
        }는 호흡조차 흐트러지지 않았다.`,
      );
      await era.printAndWait(
        `——평소 훈련에 비하면 준비 운동도 되지 않을 테니.`,
      );
      await you.say_and_wait(`후우…… 후우…… 하아, 겨우 따돌렸네.`, true);
      await maru.say_and_wait(`${callname}, 여기는 조용한 것 같네.`);
      await era.printAndWait(
        `길 양옆의 나무를 감싼 LED 조명이 서로 교차하며 뒤쪽에서 저 앞까지 끝없이 이어진다.`,
      );
      await era.printAndWait(
        `색색의 조명이 크리스마스의 밤을 밝히고, 12월의 찬 바람 속에도 한 줄기 온기와 빛을 더했다.`,
      );
      era.printButton(`「응, 데이트하기 좋은 곳이네.」`, 1);
      await era.input();
      await maru.say_and_wait(
        `성스러운 밤이잖아, 트레이너 ${you.adult_sex_title}♪…… 가장 좋아하는 사람과 천천히 흐르는 시간을 함께하고 싶지 않아?`,
      );
      await you.say_and_wait(
        `그렇게까지 말하는데 한 발도 내딛지 않으면 너무 실례겠네!`,
      );
      await maru.say_and_wait(`흥흥~ 그럼 ${callname}의 대답은?`);
      era.printButton(`${maru.actual_name_with_title}, 나랑 데이트해 줘!`, 1);
      await era.input();

      await maru.say_and_wait(
        `어머~ ${callname}, 용기 있네. 이 기세를 타고 그대로 받아 주고 싶지만——`,
      );
      await era.printAndWait(
        `아까 달리는 바람에 ${you.name}의 머리는 엉망이 되어 있었다.`,
      );
      await maru.say_and_wait(
        `${callname} 모습 귀엽다. 그래도 데이트하기 전에 머리부터 빗는 게 좋겠어.`,
      );
      era.printButton(`「아, 응.」`, 1);
      await era.input();

      await era.printAndWait(
        `${you.name}이(가) 대답하기도 전에 ${maru.name}는 숄더백에서 빗을 꺼냈다.`,
      );
      await maru.say_and_wait(`${callname}, 고개 좀 숙여 봐.`);
      await era.printAndWait(
        `${you.name}은(는) 얌전히 ${maru.name}가 원하는 대로 고개를 숙였다.`,
      );
      await maru.say_and_wait(
        `으음…… ${you.name}의 머릿결이 조금 건조하네. ${callname}, 고생 많았어.`,
      );
      await era.printAndWait(
        `${maru.sex}는 최대한 힘을 빼고 다정하게 ${
          you.name
        }의 머리를 빗어 주었다. 그 따스하고 그리운 향기는 ${
          you.name
        }에게 어릴 적 풀밭에서 햇볕을 쬐던 기억을 떠올리게 했다.`,
      );
      await maru.say_and_wait(
        `……이 정도면 됐다♪ 그럼 ${callname}, 오늘 데이트 잘 부탁할게.`,
      );
      era.printButton(`「나야말로 잘 부탁해.」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) ${maru.name}의 왼손을 꼭 잡고, 천천히 이 짧고 달콤한 시간을 만끽했다.`,
      );
      await maru.say_and_wait(
        `그러고 보니 여기가 이번 주 가장 인기 있는 커플 명소인가 봐.`,
      );
      era.printButton(`「어쩐지 오는 길에 온통 커플들뿐이더라니.」`, 1);
      await era.input();

      await maru.say_and_wait(
        `후훗♪ 다음 크리스마스에도 여기로 풍경 보러 오자.`,
      );
      await maru.say_and_wait(
        `${callname}, 그때는 풍경이 지금보다 훨씬 더 아름다울 거야.`,
      );
      await era.printAndWait(
        `12월의 찬 바람이 마치 ${you.name}과(와) ${maru.name} 사이의 친밀한 관계를 축복하는 듯했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = '아리마 기념 전·가장 성대한 무대';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `아리마 기념은 일본 레이스 중에서도 가장 성대한 대회다. 많은 ${maru.uma_sex_title}가 투표를 통해 출전 자격을 얻는다.`,
      );
      await era.printAndWait(
        `「슈퍼카」라 불리며 큰 인기를 누리는 ${maru.name}도 당연히 출전 자격을 얻었다.`,
      );
      era.drawLine({ content: '대기실' });
      await maru.say_and_wait(
        `${callname}, 이번에는 후배들에게 내 뒷모습을 제대로 보여 줘야겠어.`,
      );
      era.printButton(`「응.」`, 1);
      await era.input();
      await era.printAndWait(
        `${maru.name}가 마음의 그늘에서 벗어난 뒤, 국내 최대의 무대인 아리마 기념을 목표로 훈련을 시작했다.`,
      );
      await era.printAndWait(
        `클래식급에 이미 영역을 터득한 몇 안 되는 ${maru.uma_sex_title}인 만큼 클래식급 한정 레이스라면 한 수 위일지도 모른다. 하지만 강적이 모이는 아리마 기념에서는……`,
      );
      await you.say_and_wait(`${maru.name}가 즐거우면 됐지.`, true);
      await era.printAndWait(
        `그렇게 생각하며 빠뜨린 것이 없는지 마지막으로 확인한 뒤였다.`,
      );
      await era.printAndWait(`입술에 촉촉한 감촉이 전해졌다.`);
      await maru.say_and_wait(`이걸로 액셀도 전개방이네.`);
      await maru.say_and_wait(`그럼 ${callname}, 다녀올게.`);
      await era.printAndWait(
        `${maru.name} 특유의 활기를 품고, ${maru.sex}는 레이스장으로 향했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_c: (() => {
    const title = '아리마 기념 후·희망의 빛';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `험난한 승부를 뚫고 수많은 강적을 꺾은 ${maru.name}는 아리마 기념에서 우승했다.`,
      );
      await you.say_as_passer_by_and_wait(
        `기자 A`,
        `축하드립니다. ${maru.actual_name_with_title}의 아리마 기념 우승, 정말 치열한 승부였죠.`,
      );
      await maru.say_and_wait(
        `네, 모두 실력 있는 선수들이었어요. 덕분에 저도 정말 즐겁게 달렸어요.`,
      );
      await you.say_as_passer_by_and_wait(
        `기자 A`,
        `${maru.name}의 소감은 어떠신가요?`,
      );
      await maru.say_and_wait(
        `더 많은 ${maru.uma_sex_title}에게 제 뒷모습을 보여 주고 싶어요. 그걸 보고 따라오고 싶은 마음이 생기면 좋겠네요.`,
      );
      await you.say_as_passer_by_and_wait(`기자 A`, `원대한 포부로군요.`);
      await maru.say_and_wait(`${callname}, 이쪽이야.`);
      await era.printAndWait(
        `${maru.name}는 다가오는 모습을 보고 기자 앞으로 끌어당겼다.`,
      );
      await you.say_as_passer_by_and_wait(
        `기자 A`,
        `트레이너 ${you.adult_sex_title}은(는) ${maru.name}의 우승에 대해 어떤 소감을 갖고 계신가요?`,
      );
      era.printButton(
        `「승패보다는 ${maru.name}가 즐거운 것이 가장 중요합니다.」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `${callname}, 말도 잘하네~ 그래도 ${callname}의 격려가 없었다면 나도 이기지 못했을 거야.`,
      );
      await you.say_as_passer_by_and_wait(
        `기자 A`,
        `감동적인 유대네요. 두 분, 인터뷰에 응해 주셔서 감사합니다.`,
      );
      await maru.say_and_wait(`오늘은 맛있는 거 푸짐하게 먹으면서 축하하자.`);
      await you.say_and_wait(`역시 웃는 ${maru.name}가 제일 좋아.`, true);
    };
    f.title = title;
    return f;
  })(),
  arim_kin_lose_c: (() => {
    const title = '아리마 기념 후·최고의 무대!';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, you) => {
      await era.printAndWait(`대기실
`);
      await you.say_and_wait(`어땠어?`);
      await maru.say_and_wait(
        `함께 달린 ${maru.uma_sex_title}는 모두 최강의 ${maru.uma_sex_title}를 목표로 하는 ${maru.uma_sex_title}야. ${maru.couple_title}과 달릴 수 있어서 기뻤어.`,
      );
      await you.say_and_wait(`만족했어?`);
      await maru.say_and_wait(
        `뭐? 이보다 큰 레이스라면 개선문상 정도겠지. 난 이런 느낌이 좋아.`,
      );
      await you.say_and_wait(
        `시니어급이 끝나면 다음 해 여름에 프랑스 레이스에 나가 볼까?`,
      );
      await maru.say_and_wait(
        `${maru.sex_code !== 1 ? '아가씨' : '미남'}인 나도 그렇게 생각했어.`,
      );
      await maru.say_and_wait(`앞으로도 함께 힘내자!`);
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = '새해 참배';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `새해를 맞아 ${you.name}과(와) ${maru.name}는 함께 새해 참배를 하러 갔다.`,
      );
      await era.printAndWait(
        `사실 전통을 지키려는 건 아니다. 그저 행운을 빌고 싶을 뿐이다.`,
      );
      await maru.say_and_wait(
        `역시 새해에는 신사에서 소원을 빌어야지? 그래야 새해 기분이 나잖아~!`,
      );
      await maru.say_and_wait(
        `새해가 밝았으니 한 해의 계획을 세워야지. 세 여신님께 한 해 동안의 땀과 노력을 바치자!`,
      );
      era.printButton(`「앞으로의 목표는?」`, 1);
      await era.input();
      await maru.say_and_wait(
        `후후~ 내 목표는——올해도 재미있는 레이스에 많이 출전하는 거야!`,
      );
      await maru.say_and_wait(
        `그리고 모두가 내 뒷모습을 따라오게 하려면, 전보다 훨~씬 눈에 띄어야겠지!`,
      );
      era.printButton(`「${you.name}을(를) 든든히 돕겠어!」`, 1);
      await era.input();
      await maru.say_and_wait(
        `${callname}, 믿음직한걸~ ${maru.elder_sibling_sex_title}는 이런 느낌이 좋아.`,
      );
      await era.printAndWait(`그렇다면 앞으로 어떤 방향으로 노력할까?`);
      era.println();
      era.printButton(`「기본적인 건강 관리!」 (체력 +600)`, 1);
      era.printButton(`「모든 능력을 균형 있게 훈련하자!」 (모든 능력 +10)`, 2);
      era.printButton(`「자신의 장점을 갈고닦자!」 (스킬 Pt +100)`, 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await maru.say_and_wait(
            '생활환경에 따라 성격이 달라지듯, 몸도 어떻게 먹고 돌보느냐에 따라 달라지잖아. 건강을 챙기는 건 중요하지.',
          );
          await maru.say_and_wait('결정했어! 앞으로의 목표는 건강 관리야!');
          await maru.say_and_wait('자, 얼른 들어가자!');
          break;
        case 2:
          await maru.say_and_wait(
            '그렇구나! 모든 능력을 골고루 단련하면 한 단계 더 올라설 수 있겠네!',
          );
          await maru.say_and_wait('응, 맡겨 줘! 훈련할 때도 신경 쓸게!');
          await maru.say_and_wait('그럼 결정됐으니 얼른 들어가자!');
          break;
        case 3:
          await maru.say_and_wait('내 장점이라면 역시 운전 실력일까?');
          await maru.say_and_wait(
            '그럴 리가~ 농담이야! 달리는 스킬을 갈고닦자는 거지?',
          );
          await maru.say_and_wait('오케이! 훈련할 때도 신경 쓸게.');
          await maru.say_and_wait('조금 꾸물거렸네. 얼른 들어가자!');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = '밸런타인';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await maru.say_and_wait(`자, 이건 ${callname} 몫이야.`);
      await era.printAndWait(
        `${you.name}의 제안으로, 올해 밸런타인에는 트레이닝실에서 단둘이 파티를 열기로 했다.`,
      );
      era.printButton(`「고마워.」`, 1);
      await era.input();
      await era.printAndWait(
        `장식용 리본을 조심스레 풀고 핸드백 모양의 초콜릿 상자를 열었다.`,
      );
      await era.printAndWait(
        `튤립 모양 잔에는 액상 초콜릿과 크림이 층층이 담겨 있고, 그 위에 딸기 시럽이 듬뿍 뿌려져 있었다. 체리와 민트, 오디가 장식을 더했다.`,
      );
      await era.printAndWait(
        `잔에 묶인 검은 나비 리본 뒤로 은은한 분홍빛이 감돌았다.`,
      );
      await maru.say_and_wait(
        `지금까지 무엇을 위해 달리는지 찾아왔어. 이제는 달리는 의미가 하나 더 생겼네.`,
      );
      await maru.say_and_wait(
        `앞으로도 쭉 곁에서 힘이 되어 줄 거지? ${callname}?`,
      );
      era.printButton(
        `「그럼 감사히 받을게. 고마워, ${you.name}${maru.name}」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `아, 맞다! 테이오랑 ${maru.couple_title}이 그러는데, 백화점에 있는 어떤 가게에서 밸런타인에 커플 사진을 찍으면 40% 할인을 해 준대.`,
      );
      await era.printAndWait(`${callname}, 관심 있어?`);
      era.printButton(`「좋지.」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}과(와) ${maru.name}는 백화점으로 향했고, 조금 둘러본 끝에 그 가게를 찾았다.`,
      );
      await era.printAndWait(
        `이번 주 커플들의 명소라도 된 모양이다. 입구에는 긴 줄이 늘어서 있었고, 모두 커플처럼 보였다.`,
      );
      await maru.say_and_wait(
        `사람이 많네. 테이오랑 ${maru.couple_title}이 말한 곳이 여기인가 봐.`,
      );
      await era.printAndWait(`그럼 우리도 줄 서자.`);
      await era.printAndWait(
        `${maru.name}는 ${you.name}의 팔짱을 끼고 커플들 사이에 섞여 들었다.`,
      );
      await era.printAndWait(`점원: 두 분도 커플 특가 세트를 구매하시려고요?`);
      await era.printAndWait(
        `점원: 그런데 할인 소식을 듣고 혜택만 받으려는 손님들이 많이 오셔서, 정작 구매하고 싶은 커플들이 못 사는 일이 생겼거든요.`,
      );
      await era.printAndWait(
        `점원: 저희도 곤란했는데, 결국 사장님께서 좋은 방법을 생각해 내셨어요.`,
      );
      await era.printAndWait(`점원: 두 분, 로맨틱한 키스 부탁드릴게요.`);
      era.printButton(`「키…… 키스요?!」`, 1);
      await era.input();

      await era.printAndWait(
        `점원: 키스는 로맨틱하잖아요? 연인에게 사랑도 전할 수 있고요. 할인만 노리던 분들은 키스하라는 말을 듣자마자 도망가셨어요.`,
      );
      await era.printAndWait(`점원: 커플이시라면 부끄러워하실 필요 없잖아요.`);
      await era.printAndWait(
        `점원의 날카로운 시선에 ${you.name}의 부담감은 점점 커져 갔다. ${you.name}은(는) ${
          maru.name
        }를 바라보았다. ${maru.sex}는 태연한 척했지만, 거세게 흔들리는 꼬리가 ${maru.sex}의 속마음을 고스란히 드러냈다.`,
      );
      era.printButton(`「이렇게 할 수밖에 없겠네」`, 1);
      await era.input();
      await maru.say_and_wait(`${callname}？`);
      await era.printAndWait(
        `${you.name}은(는) ${maru.name}의 허리를 감싸 안고, ${
          maru.sex
        }의 얼굴을 살며시 쓰다듬은 뒤 마음을 다잡고 입을 맞췄다.`,
      );
      await era.printAndWait(
        `처음에는 탐색하듯 가볍게 닿았다. 분위기가 무르익자 ${you.name}의 움직임도 빨라졌고, 뜨거운 마음은 마침내 깊이 겹쳐지는 입맞춤으로 이어졌다.`,
      );
      await era.printAndWait(
        `${maru.sex}의 입술에서는 사과 향기가 나는 듯했다. 따 먹으라는 유혹 같았다. ${
          you.name
        }은(는) 혀를 ${maru.sex}의 입 안으로 밀어 넣고 구석구석 더듬었다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) ${maru.sex}의 혀에 닿으려 할 때마다, ${
          maru.sex
        }가 수줍게 물러서는 모습은 오히려 ${you.name}의 욕망을 자극했다.`,
      );
      await era.printAndWait(
        `더는 계속하면 안 된다. 하지만 ${you.name}의 움직임은 멈추지 않았다.`,
      );
      await era.printAndWait(
        `격렬한 자극에 머릿속이 새하얘진 순간, ${you.name}은(는) 이 순간이 영원하기를 바랐다. ${you.name}은(는) 행복했다.`,
      );
      await maru.say_and_wait(`……${callname}`);
      await era.printAndWait(
        `점원: 와, 정말 뜨거운 키스네요. 이제 들어가 주세요. 뒤에 손님들이 기다리고 계셔서요.`,
      );
      await era.printAndWait(
        `뒤에 선 손님들을 신경 쓸 겨를도 없이, ${you.name}은(는) ${
          maru.sex
        }의 뺨을 살며시 감쌌다. 세상에 단 하나뿐인 보물을 대하듯이.`,
      );
      await era.printAndWait(
        `${maru.sex}의 뺨은 온통 붉게 물들었고, 가까이 붙어 있는 탓에 거센 심장 박동이 ${
          you.name
        }에게까지 전해졌다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) ${maru.sex}의 손을 잡고 빈자리로 향했다.`,
      );
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `두 사람은 말없이 파르페 하나를 함께 먹었다. 떨리는 팔은 마음이 평온하지 않다는 것을 드러냈다.`,
      );
      await era.printAndWait(
        `이따가 어떻게 사과해야 할까? ${
          maru.sex
        }가 이것 때문에 관계를 끊으려는 건 아닐까? 두려움과 기쁨이 ${you.name}의 머릿속에서 교차했고, 마지막에 남은 생각은……`,
      );
      era.printButton(
        `「${maru.name}가 날 좋아하는지는 상관없어. 하지만 나는 ${maru.sex}를 좋아해」`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `기나긴 마음고생 끝에 파르페는 겨우 바닥을 드러냈다. 둘은 말없이 가게를 나와 큰길을 걷고, 둑길을 지나 마침내 트레이닝실로 돌아왔다.`,
      );
      await maru.say_and_wait(`있잖아, ${callname}.`);
      await era.printAndWait(
        `갑자기 발걸음을 멈춘 ${maru.name}가 ${you.name}을(를) 끌어안았다.`,
      );
      await era.printAndWait(
        `입술에 전해진 촉촉한 감촉이 파문처럼 퍼져 나갔다.`,
      );
      await maru.say_and_wait(`앞으로도 잘 부탁해❤`);
      await era.printAndWait(
        `처음의 놀라움에서 벗어난 ${you.name}은(는) 필사적으로 어른의 여유를 유지하려는 ${maru.name}를 바라보았다.`,
      );
      await era.printAndWait(
        `그런 ${maru.name}의 모습이 우스우면서도, 그렇게 구는 ${maru.sex}는 정말 사랑스러웠다. 비단 한 폭이 가슴에 살며시 깔리는 듯했다.`,
      );
      era.printButton(`「마음이 참 복잡하네.」`, 1);
      await era.input();
      await era.printAndWait(
        `별빛과 네온사인 아래에서 두 사람의 손은 꼭 맞잡혀 있었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_9: (() => {
    const title = '타오르는 불꽃';
    /**
     * 皇帝とマルゼンスキーが会い、違う景色を見せたい
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} emperor 皇帝（シンボリルドルフ）
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, emperor, you, callname) => {
      emperor.name = '황제';
      await era.printAndWait(
        `기나긴 겨울이 마침내 지나가고, 봄바람이 다시 트레센을 스쳐 갔다.`,
      );
      await era.printAndWait(
        `고통과 방황을 겪은 끝에, 스스로 선택한 방향을 향해 다시 달리기 시작한 두 사람——`,
      );
      await era.printAndWait(`그리고 오랫동안 기다려 온 심볼리 루돌프.`);
      await emperor.say_and_wait(`드디어 이 순간이 왔군.`);
      await era.printAndWait(`가벼운 발걸음으로 황제가 트레이닝장에 찾아왔다.`);
      await emperor.say_and_wait(
        `아무래도 지난 논쟁은 결국 내 승리로 끝난 모양이군.`,
      );
      await emperor.say_and_wait(
        `지옥 밑바닥에서 기어올라온 소감은 어떤가? ${maru.name}.`,
      );
      await era.printAndWait(
        `주변의 시선을 아랑곳하지 않고, 황제는 곧장 ${maru.name}에게 다가갔다.`,
      );
      await maru.say_and_wait(
        `힘든 시간을 보냈지만, 뼈를 깎는 노력의 쾌감도 맛볼 수 있었어.`,
      );
      await emperor.say_and_wait(
        `호오? 지옥의 불길도 그대를 태워 없애지는 못했나?`,
      );
      await maru.say_and_wait(`지옥을 통과하는 길이 에덴에 가장 가깝잖아♪`);
      await emperor.say_and_wait(`……점점 더 기대되는군.`);
      await maru.say_and_wait(`칭찬으로 받아들여도 될까? 땡큐!`);
      await emperor.say_and_wait(`……땡큐라고? 고맙다는 뜻인가. 후후.`);
      await emperor.say_and_wait(
        `본론으로 돌아가지. ${maru.uma_sex_title}들의 우상이 되기로 결심했다면, 산산이 부서질 각오도 되어 있겠지.`,
      );
      await emperor.say_and_wait(`그대는 사랑하기에 그런 행동을 한 것인가?`);
      await maru.say_and_wait(
        `내가 하는 일이 반드시 옳다고 단언할 수는 없어. 하지만 한 가지는 확실해.`,
      );
      await maru.say_and_wait(`그걸 위해 분투하는 하루하루가 정말 행복해⭐`);
      await emperor.say_and_wait(
        `자신의 길을 찾았다면, 그때 다시 만나도록 하지.`,
      );
      await era.printAndWait(`황제는 말을 마치고 훈련장을 떠났다.`);
      era.printButton(`「드디어 황제와 대결인가?」`, 1);
      await era.input();
      await maru.say_and_wait(
        `회장과 맞붙는다니, 꽤 재미있는 전개일지도 모르겠네.`,
      );
      await maru.say_and_wait(
        `가장 성대한 이 무대 위에서, 이가 떨릴 만큼 짜릿한 흥분이 기다리고 있을지도 몰라.`,
      );
      await maru.say_and_wait(`함께 힘내자, ${callname} ♪`);
      await era.printAndWait(`그리하여, 다음 목표가 정해졌다.`);
    };
    f.title = title;
    return f;
  })(),
  before_sank_hai: (() => {
    const title = '오사카배 전·부드러운 바람';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `황제와의 대결이 오사카배에서 막을 올리려 하고 있었다.`,
      );
      await era.printAndWait(
        `언론은 이를 왕도와 패도의 대결이라며 열기를 부추겼다.`,
      );
      await era.printAndWait(
        `오사카배에 쏠린 관심은 작년 아리마 기념을 훨씬 뛰어넘었다.`,
      );
      await era.printAndWait(
        `관중석은 전설적인 승부를 보려는 팬들로 가득 찼고, 통로까지 사람들이 빼곡했다.`,
      );
      era.drawLine({ content: '대기실' });
      await maru.say_and_wait(`흥흥흥~`);
      await era.printAndWait(
        `이토록 긴장감이 감도는 순간에도 ${maru.name}는 꽤 여유로웠다.`,
      );
      era.printButton(
        `「${maru.name}, 이번에는 정말 즐겁게 달릴 수 있겠네.」`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `황제의 등장만큼 ${maru.name}가 레이스를 기대하게 만드는 일은 없었다.`,
      );
      await maru.say_and_wait(`그럼, 준비는 전부 오케이야.`);
      await maru.say_and_wait(`지금부터 더욱 성대한 레이스를 즐기고 올게.`);
      await era.printAndWait(
        `${maru.name}를 위해 문을 열려던 ${you.name}의 손에 똑같이 가느다란 손이 닿았다.`,
      );
      await era.printAndWait(
        `입술에 촉촉한 감촉이 전해졌다. 부드러운 혀가 얽혔다가, 아쉬운 듯 떨어졌다.`,
      );
      await maru.say_and_wait(`가장 중요한 걸 잊을 뻔했네.`);
      await maru.say_and_wait(`${callname}, 꼭 나를 지켜봐 줘.`);
      await era.printAndWait(`${maru.name}는 경기장으로 향했다.`);
    };
    f.title = title;
    return f;
  })(),
  sank_hai_win: (() => {
    const title = '오사카배 후·남은 구름을 휘감는 바람';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} emperor 皇帝（シンボリルドルフ）
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, emperor, you) => {
      emperor.name = '황제';
      await maru.say_and_wait(`하아, 하아, 하아.`);
      await maru.say_and_wait(`이긴 건가?`, true);
      await era.printAndWait(
        `황제와의 대결은 결국 ${maru.name}의 승리로 일단락되었다.`,
      );
      await you.say_and_wait(
        `훌륭한 레이스였다. 어느새 식은땀이 흐르고 있었다.`,
      );
      await era.printAndWait(
        `질주하는 무리 속에서 가장 적절한 위치를 잡고, 스퍼트할 때는 당연히 선두에 있어야 한다——`,
      );
      await era.printAndWait(
        `하지만 조금만 더 갔더라면, ${maru.name}를 넘어설 수 있었다.`,
      );
      await era.printAndWait(`……그렇다 해도, `);
      await maru.say_and_wait(
        `흥분이라고 해야 할까, 두려움이라고 해야 할까? 괴물의 그림자를 밟은 ${maru.uma_sex_title}는 네가 처음이야, 루돌프 쨩♪`,
      );
      await era.printAndWait(
        `마침내 ${maru.sex}의 발걸음을 따라올 상대를 만나 만족한 것인지, ${maru.name}는 미소를 지었다.`,
      );
      era.drawLine();
      await emperor.say_and_wait(`……잘됐군.`);
      await era.printAndWait(
        `황제는 곧장 멀어져 가는 뒷모습을 바라보았다. ${maru.sex}는 이를 혀로 훑었다. 일종의 희열이 저절로 솟아올랐다.`,
      );
      await era.printAndWait(
        `황제에게는 아직 이루지 못한 일이 많았다. 그러니 자신을 계속 증명해야 했다—— ${maru.sex}가 유일무이한 존재라는 것을. 동시대에 적수가 없을 뿐 아니라, 지난 영광을 부수고 미래의 영광마저 압도할 수 있다는 것을.`,
      );
      era.println();
      await emperor.say_and_wait(
        `마루젠, 그대가 진정으로 그 신념을 끝까지 관철할 수 있기를 바라지.`,
      );
      await emperor.say_and_wait(
        `그리고—— 왕도를 자처하지 마라. 개척자에게 주어지는 것은 고난뿐이어야 한다. 그대가 위대하다면 쓰러져라. 후발주자가 딛고 올라설 계단이 되어라.`,
      );
      await emperor.say_and_wait(
        `일본 ${maru.uma_sex_title}의 미래를 위해—— 더욱 강한 황제를 위해.`,
      );
      await era.printAndWait(
        `그러기 위해서…… 황제는 고개를 들고, 내려다보듯 ${maru.name}를 바라보았다.`,
      );
      era.println();
      await emperor.say_and_wait(
        `교양을 벗어 던지고, 문명의 포장을 찢어라! 모든 수단을 동원하라. 비천해도, 거칠어도 좋다. 가능하다면 수단과 방법을 가리지 마라!!!`,
      );
      await emperor.say_and_wait(
        `아무리 볼썽사나워도 용납하겠다. 만반의 준비를 갖추고…… 텐노상(가을)에서 이 황제의 복수를 맞이하라.
`,
      );
      await era.printAndWait(
        `말을 마친 황제는 온화한 얼굴로 가볍게 발을 옮겨 경기장을 떠났다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  sank_hai_lose: (() => {
    const title = '오사카배 후·짙게 드리운 그늘';
    /** @param {CharaTalk} maru マルゼンスキー */
    const f = async (maru) => {
      await maru.say_and_wait(`설마 루돌프 쨩한테 지다니, 으으——`);
      await era.printAndWait(
        `하지만 ${maru.name}는 예상했던 만큼 풀이 죽어 있지는 않았다.`,
      );
      era.printButton(`돌아가서 반성회를 열고 재대결을 의논하자.`, 1);
      await era.input();
      await era.printAndWait(`황제와의 대결은 일단락되었다.`);
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = '팬 감사제';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `오늘은 팬 감사제. ${maru.uma_sex_title}들이 팬들의 응원에 감사하며 무대를 선보이는 날이다.`,
      );
      await era.printAndWait(
        `트레센 학원 곳곳에는 ${maru.uma_sex_title}들이 준비한 행사가 마련되어 있었다.`,
      );
      await era.printAndWait(
        `모처럼 여유가 생긴 ${you.name}도 이 기회에 이곳저곳 돌아다니며 쌓인 스트레스를 마음껏 풀었다.`,
      );
      await era.printAndWait(
        `${maru.name}는 ${
          you.name
        }의 담당 ${maru.uma_sex_title}로서, 지금은 후배들의 무대를 지켜보고 있었다.`,
      );
      await era.printAndWait(
        `다가오는 발소리를 듣고 무심코 뒤돌아본 뒤, ${you.name}에게 다정한 미소를 지었다.`,
      );
      await maru.say_and_wait(
        `${callname}도 ${maru.uma_sex_title}들의 무대를 보러 왔어?`,
      );
      era.printButton(`「고개를 끄덕인다」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) ${
          maru.name
        }의 곁에 서서, 눈앞의 무대 위에서 ${maru.uma_sex_title}들이 가장 아름다운 모습을 보여 주려고 애쓰는 것을 바라보았다.`,
      );
      await maru.say_and_wait(
        `후배들, 다들 활기가 넘치네. ${callname}도 그렇게 생각하지?`,
      );
      era.printButton(
        `「${maru.couple_title}은 모두 ${maru.name}를 동경하고, ${
          maru.sex
        }를 넘어서고 싶어서 필사적으로 노력하는 거야.」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `어머♪ ${callname}은(는) 매번 뜻밖의 선물을 주네.`,
      );
      await maru.say_and_wait(
        `그럼, ${callname}, 내가 무대에 오르는 모습을 보고 싶어?`,
      );
      await era.printAndWait(
        `${maru.name}의 꼬리가 어느새 ${you.name}의 허벅지를 휘감았다. 다행히 주변 관객들은 무대 분위기에 열광하고 있어, 이쪽의 작은 움직임은 눈치채지 못했다.`,
      );
      await era.printAndWait(
        `${maru.name}는 ${you.name}의 약점을 파악한 듯, 더욱 과감하게 온몸을 ${you.name}의 팔에 밀착시켰다.`,
      );
      era.printButton(`「${maru.name}」`, 1);
      await era.input();
      await era.printAndWait(
        `두 사람 사이에 나쁜 소문이 나서 ${
          maru.sex
        }의 앞날에 영향을 주고, ${you.name}까지 해고당할까 두려워 ${you.name}의 몸이 순간 굳어 버렸다.`,
      );
      await maru.say_and_wait(
        `${you.sex_code !== 1 ? '트・레・이・너・쨩' : '트・레・이・너・군'}♪`,
      );
      await era.printAndWait(
        `${you.name}은(는) 주변의 시선이 모두 ${you.name}을(를) 향하는 것 같아 입이 바짝 마르기 시작했다.`,
      );
      await maru.say_and_wait(
        `${
          callname
        }의 이런 반응, 정말 귀엽네. 아쉽지만 슬슬 내 차례야. 나한테서 눈을 떼면 안 돼?`,
      );
      await era.printAndWait(
        `정신을 차려보니 ${maru.sex}는 이미 무대 위에 서 있었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 급히 주변 관광객에게 야광봉을 빌려 팬들의 물결에 맞춰 몸을 흔들기 시작했다.`,
      );
      await maru.say_and_wait(
        `바람을 즐기고, 바람을 쫓는 ${maru.uma_sex_title}, ${
          maru.name
        }. 지금부터 팬들과 후배들에게 내 노래를 바칠게.`,
      );
      await era.printAndWait(`해묵은 복고풍 노래를 부르는 오늘의 스타, `);
    };
    f.title = title;
    return f;
  })(),
  before_yasu_kin_s: (() => {
    const title = '야스다 기념 전·솟아나는 활력';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `${maru.name}는 자유로운 바람을 쫓아 도쿄 경기장에 도착했다.`,
      );
      await maru.say_and_wait(`오늘은 컨디션이 아주 좋아.`);
      await era.printAndWait(
        `${maru.name}의 옷에 잡힌 주름을 매만져 펴 주자, 슈퍼카의 준비가 끝났다.`,
      );
      await maru.say_and_wait(
        `후배들도 지금 내 뒷모습을 쫓으며 앞지르고 싶어 하겠지.`,
      );
      await era.printAndWait(
        `레이스에서 이기는 것보다, ${maru.name}는 소중한 후배들이 자신과 지난 시대의 영광을 넘어서는 것을 바라고 있었다.`,
      );
      await maru.say_and_wait(`그러니까 지금 나도 불타오르고 있어.`);
      await maru.say_and_wait(`그럼 늘 하던 대로 부탁해, ${callname}.`);
      await era.printAndWait(
        `${maru.name}의 가느다란 허리를 가볍게 감싸 안고 행복한 순간에 잠겼다.`,
      );
      await maru.say_and_wait(`${callname}, 언제까지나 내 뒷모습을 지켜봐 줘.`);
      await maru.say_and_wait(
        `다른 ${maru.uma_sex_title}를 보고 있으면, 이 ${
          maru.elder_sibling_sex_title
        }도 질투할 거야.`,
      );
      era.printButton(`「계속 지켜볼게.」`, 1);
      await era.input();
      await maru.say_and_wait(`그럼 마지막으로 한 번 더♪`);
      await era.printAndWait(
        `아쉬운 듯 떨어진 뒤, ${maru.name}는 경기장으로 향했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  yasu_kin_win_s: (() => {
    const title = '야스다 기념 후·달리고 싶어지는 레이스';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait('대기실');
      await maru.say_and_wait(`${callname}, 내 멋진 뒷모습 잘 봤어?`);
      await era.printAndWait(
        `야스다 기념에서 후배 ${maru.uma_sex_title}들은 ${maru.name}의 뒷모습에 힘을 얻어, ${maru.sex}를 목표로 계속 앞으로 달려 나갔다.`,
      );
      await maru.say_and_wait(
        `후배들도 정말 대단해졌네. 언젠가는 이 ${maru.elder_sibling_sex_title}도 후배들에게 추월당하고, 손수건을 깨물며 시상대 위의 ${maru.couple_title}을 질투 어린 눈으로 바라보게 될지도 몰라.`,
      );
      await maru.say_and_wait(
        `${maru.elder_sibling_sex_title}의 상처받은 마음을 달래 주는 셈 치고, ${callname}, 오늘 밤은 같이 자자.`,
      );
      await you.say_and_wait(
        `그것보다 ${maru.name}는 달리는 기쁨을 만끽하고 있는 것 같은데.`,
      );
      await maru.say_and_wait(
        `어머, 화제를 돌리는 거야? ${callname}도 이렇게 차가워졌구나.`,
      );
      await maru.say_and_wait(
        `이제 매력이 없어진 걸까? 이러다가는 이 ${maru.elder_sibling_sex_title}, 매정한 사람한테 버림받겠네.`,
      );
      await maru.say_and_wait(` ${maru.elder_sibling_sex_title}, 불쌍해라.`);
      await era.printAndWait(` ${maru.name}는 이제 응석을 부리는 법도 배웠다.`);
      await you.say_and_wait(`이럴 때는……`, true);
      await era.printAndWait(
        `오른손으로 ${maru.name}의 허리를 살며시 감싸고 깊게 입을 맞췄다. 왼손으로는 귀 언저리의 민감한 곳을 쓰다듬었다.`,
      );
      await era.printAndWait(
        `캣닢 향을 맡은 고양이처럼, ${maru.name}는 완전히 긴장이 풀렸다.`,
      );
      await maru.say_and_wait(
        `돌아가는 길에는 이 ${maru.elder_sibling_sex_title}의 사랑이 담긴 도시락을 먹여 줄게♪`,
      );
      await era.printAndWait(
        ` ${you.name}은(는) 부드러운 치즈와 꿀을 얹은 빵의 달콤한 향기, 그리고 맑은 하늘 아래에서 ${maru.name}가 보여 주었던 미소를 떠올렸다.`,
      );
      era.printButton(`「${maru.name}는 언제나 요리를 잘하네」`, 1);
      await era.input();
      await era.printAndWait(
        `무언가 떠올린 듯 미소 사이로 짓궂은 표정을 드러낸 ${maru.name}가 꼬리를 살랑였다.`,
      );
      await maru.say_and_wait(`${callname}, 앞으로도 쭉 내 시식 담당이야.`);
      await you.say_and_wait(`그러고 보니 내일은 중화요리가 먹고 싶네.`);
      await maru.say_and_wait(`후후♪ ${callname}, 기대하고 있어.`);
      era.drawLine();
      await era.printAndWait(
        `밤이 되어, ${maru.name}가 주방에서 갓 볶아 낸 양배추 고기볶음을 가져왔다. 젓가락을 들기도 전에 진한 향기가 코끝으로 밀려들어 식욕을 자극했다.`,
      );
      await era.printAndWait(
        `젓가락으로 돼지고기 한 점을 집자, 두부를 집은 듯 부드러운 감촉이 느껴졌다. 입에 넣으니 채소의 즙을 머금은 고기가 입안에서 터지듯 퍼졌다. 혀까지 삼킬 만큼 맛있었다.`,
      );
      await maru.say_and_wait(`맛은 어때?`);
      await era.printAndWait(
        `허겁지겁 먹는 ${you.name}을(를) 바라보며, ${maru.name}는 만족스러운 미소를 지었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '여름 합숙 시작';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `3년째 여름 합숙이 정식으로 시작되었다. 작년과는 사뭇 다른 마음가짐으로 ${you.name}과(와) ${maru.name}는 함께 모래사장으로 향했다.`,
      );
      await maru.say_and_wait(
        `후훗♪ 올해도 다른 애들을 다 따돌리고 제일 먼저 도착했네, ${callname}.`,
      );
      await era.printAndWait(
        `곁에 있는 담당은 여전히 다른 ${maru.uma_sex_title}보다 먼저 모래사장에 도착하는 것을 좋아했다.`,
      );
      await you.say_and_wait(`${maru.name}는 기분이 좋아 보이네.`);
      await maru.say_and_wait(
        `어머, 당연하지! 작년에 제대로 즐기지 못한 청춘을 올해 전부 보상받아야 하니까.`,
      );
      await era.printAndWait(
        `${maru.name}가 준비한 검은색 수영복은 ${
          maru.sex
        }의 몸매와 어우러져 각별한 매력을 뽐내고 있었다.`,
      );
      await you.say_and_wait(
        `평소의 ${maru.name}는 늦잠 자는 걸 좋아하는데, 오늘은 오히려 ${maru.sex}가 깨우러 왔네.`,
      );
      await maru.say_and_wait(
        `아무튼 지금은 합숙을 만끽할 시간이야! 하지만 그전에 선크림부터 바르는 게 중요하겠지?`,
      );
      await maru.say_and_wait(
        `${callname}, ${
          you.name
        }이(가) 나 대신 선크림 좀 발라 줄래? 올해 여름은 예상보다 훨씬 뜨겁네.`,
      );
      era.printButton(`「지금 바로 갈게.」`, 1);
      await era.input();
      await era.printAndWait(
        `여름 합숙은 이런 편안한 분위기 속에서 시작되었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_30: (() => {
    const title = '여름 축제';
    /**
     * 三年目の縁日。もっと軽い感覚で町を歩く
     * 故地再訪、万感胸に迫る
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `작년 이맘때, 처음으로 이 마을의 열기를 느꼈다. 그리고 바로 이곳에서 운명의 궤적이 바뀌었다.`,
      );
      await era.printAndWait(
        `미숙했던 자신과 손가락 사이로 흘러가 버린 시간은 앞으로 나아가기 위한 흔적이 되었다.`,
      );
      await era.printAndWait(
        `다시 찾은 마을을 바라보며 느끼는 감정은 처음 방문했을 때보다 훨씬 복잡했다.`,
      );
      await era.printAndWait(
        `입구를 착각해 길을 헤매던 일, 친절한 가게 주인이 준 지도, 화려한 축제 공연까지.`,
      );
      await era.printAndWait(
        `기억 속의 장소를 향해 인파를 따라 걷자, 지난 기억들이 시냇물처럼 천천히 솟아올랐다.`,
      );
      await maru.say_and_wait(`${callname}.`);
      await era.printAndWait(`익숙한 모습이 입구에 서 있었다.`);
      era.printButton(`「${you.name} 때문에 기다리게 해서 미안해.」`, 1);
      await era.input();
      await maru.say_and_wait(`나도 방금 도착한 참이야.`);
      await maru.say_and_wait(
        `금붕어 건지기, 사과 사탕, 인연을 맺어 주는 부적, 마지막으로 무대 공연까지. 이번에는 마음껏 즐겨야 온 보람이 있겠지!`,
      );
      era.printButton(`「같이 가자.」`, 1);
      await era.input();
      await era.printAndWait(`두 사람의 손이 꼭 맞잡혔다.`);
      await maru.say_and_wait(`앞으로도 이렇게 쭉 곁에 있어 줄 거지?`);
      await era.printAndWait(
        `${maru.name}는 ${you.name}을(를) 슬쩍 바라보았다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 손을 잡은 채 조금 강하게 상대를 이끌고 나아갔다.`,
      );
      await era.printAndWait(
        `예상했던 불평은 나오지 않았다. ${you.name}은(는) 손바닥에서 전해지는 힘이 점점 세지는 것을 느꼈다. 바이스에 단단히 물린 듯했다.`,
      );
      await era.printAndWait(
        `통증을 느낀 ${you.name}은(는) 무심코 그 원인을 바라보았다. ${maru.name}는 짓궂은 미소를 짓고 있었다.`,
      );
      await era.printAndWait(
        `어른의 체면은 완전히 내려놓고, 아이처럼 장난치며 놀았다.`,
      );
      await era.printAndWait(
        `이대로라면 지겠다고 생각한 ${you.name}은(는) 보폭을 넓혔다.`,
      );
      await era.printAndWait(
        `${maru.name}의 눈빛은 이렇게 말하는 듯했다. 「현역 ${maru.uma_sex_title}와 달리기로 겨루려면, ${you.name}은(는) 아직 백 년은 일러.」 그렇게 여유를 부리며 ${you.name}의 손을 놓고는, 우아한 걸음으로 ${you.name}을(를) 앞지르려 했다.`,
      );
      await era.printAndWait(
        `——하지만 ${you.name}은(는) 살며시 ${maru.sex}의 허리를 감싸 안고, 애정 어린 눈빛으로 상대를 빤히 바라보았다.`,
      );
      await maru.say_and_wait(
        `어? 트레이너…… ${callname}, 옆에 아직 사람들 있잖아.`,
      );
      await era.printAndWait(
        `주변 사람들은 ${you.name} 일행의 다정한 행동을 보아도, 한창 사랑에 빠진 커플의 장난으로 여길 뿐이었다. 간혹 두 사람을 알아본 관광객도 무언가 눈치챈 듯 걸음을 재촉해 자리를 떠났다.`,
      );
      await era.printAndWait(
        `어느새 주변에는 ${you.name} 일행 두 사람만 남았다.`,
      );
      await maru.say_and_wait(
        `어머나, 순정 만화에서 튀어나온 이야기 같네. ${callname}도 이제 16, 17살 사춘기 아이는 아니잖아?`,
      );
      await era.printAndWait(
        `이 묘한 분위기 속에서 열세에 몰린 ${maru.name}는 다시 주도권을 잡으려 애썼다.`,
      );
      era.printButton(`「꼬맹이면 좀 어때?」`, 1);
      await era.input();
      await era.printAndWait(
        `그러자 ${you.name}은(는) ${maru.sex}의 이마에 가볍게 입을 맞추고, 장난감을 가로챈 아이처럼 의기양양한 표정으로 상대방을 바라보며 형용할 수 없는 상쾌함을 느꼈다.`,
      );
      await maru.say_and_wait(
        `——그렇구나. ${callname}도 그렇게 말했으니, 각오는 되어 있겠지?`,
      );
      await era.printAndWait(
        `이득만 챙기고 빠지려던 ${you.name}은(는) 갑자기 중심을 잃었고, ${maru.name}를 감싸고 있던 손도 풀려버렸다.`,
      );
      await era.printAndWait(
        `이어서 왼쪽 귀로 달콤한 숨결이 느껴졌고, 온몸을 짜릿하게 만드는 전류가 흘렀다.`,
      );
      await maru.say_and_wait(`——`);
      await era.printAndWait(
        `평소와 다름없는 느낌이었으나, ${you.name}의 귀에는 약간의 심술과 성취감이 섞인 목소리로 들렸다.`,
      );
      await era.printAndWait(
        ` ${maru.name}의 손가락이 ${you.name}의 가슴팍을 살며시 훑고 지나갔다. 길게 다듬어진 손톱은 피부를 상하게 하지 않을 정도로 절묘하게 스쳤고, ${you.name}의 몸은 공포와 흥분으로 미세하게 떨렸다.`,
      );
      era.printButton(`「곧 불꽃놀이가 시작될 텐데, 빨리 안 가면…」`, 1);
      await era.input();
      await era.printAndWait(
        `「아직 부족해.」 ${maru.name}의 손가락은 여전히 멈추지 않았다.`,
      );
      era.printButton(
        `「작년의 아쉬움을 달래기 위해 ${maru.name}와 함께 멋진 추억을 만들고 싶어!」`,
        1,
      );
      await era.input();
      await era.printAndWait(` ${maru.name}는 드디어 움직임을 멈추었다.`);
      await maru.say_and_wait(`——미안해, 이 누나가 조금 자제력을 잃었네.`);
      await era.printAndWait(
        `말투에는 반성의 기미가 전혀 없었지만, 얼굴에는 레이스를 마음껏 즐긴 뒤의 만족감이 서려 있었다.`,
      );
      await maru.say_and_wait(
        `${callname}하고 앞으로 함께 만들 추억, 거기에 더 큰 만족까지 바라다니. 이 누나, 조금 욕심이 많은 걸까?`,
      );
      await maru.say_and_wait(
        `음—— 부정적인 기분은 NG야! 앞으로의 매분 매초를 소중히 여기지 않는 건 인생에 대한 실례니까!`,
      );
      await era.printAndWait(
        `축제 음악이 바람을 타고 ${you.name} 일행의 귓가에 들려왔다.`,
      );
      await era.printAndWait(
        `하늘에 수놓아진 붉은 꽃송이가 축제의 피날레를 알렸다.`,
      );
      await era.printAndWait(
        `그리고 ${maru.name}가 ${you.name}의 팔짱을 꼈다.`,
      );
      await era.printAndWait(`두 사람의 발걸음이 빨라졌다.`);
      await era.printAndWait(
        `마지막으로 ${you.name}과(와) ${maru.name}는 연인들만이 누릴 수 있는, 그 무엇과도 바꿀 수 없는 분위기를 만끽했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '여름 합숙 종료·잊지 못할 잔치';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`올해 여름 합숙은 무척 알찼다.`);
      await era.printAndWait(
        `모래사장에서 배구나 수박 깨기 같은 가벼운 운동을 즐기는 것뿐 아니라, 후배 ${maru.uma_sex_title}들의 고민을 듣고 알맞은 조언을 해 주는 것도 즐거움 중 하나였다.`,
      );
      await era.printAndWait(`여름 합숙 마지막 날에는 기숙사 파티에 참석했다.`);
      await era.printAndWait(
        `스페셜 위크와 치요노 오가 존경 어린 눈빛으로 ${maru.name}의 지난 2년간의 경험담을 경청했고, 그래스 원더도 ${maru.name}에게 도전장을 내밀었다.`,
      );
      await era.printAndWait(`밤이 깊어질 무렵에야 다들 만족스럽게 해산했다.`);
      await you.say_and_wait(
        `여름 합숙도 끝나가네. 다음은 텐노상(가을)인가.`,
        true,
      );
      await you.say_and_wait(
        `레이스 결과보다도, 역시 ${maru.name}의 웃는 얼굴이 최고지.`,
        true,
      );
      era.printButton(`「좋아! 트레센으로 돌아가서도 전력을 다하자.」`, 1);
      await era.input();
      await era.printAndWait(`혼잣말을 하며 방문을 열자, `);
      await you.say_and_wait(`이상하네, 문이 안 잠겨 있었나?`);
      await maru.say_and_wait(` ${callname} ♪`);
      await era.printAndWait(
        `문 뒤에서 나타난 ${maru.name}이 당신에게 달려들어 안겼다.`,
      );
      await maru.say_and_wait(`오늘은 같이 자자!`);
      await you.say_and_wait(`합숙 중에 같이 자는 건 아무래도 좀……`);
      await maru.say_and_wait(
        `이사장${maru.adult_sex_title}한테도 말씀드렸어.`,
      );
      await era.printAndWait([
        maru.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        ' 몰래 이사장과 무언가 협의를 해 둔 모양이었다.',
      ]);
      await maru.say_and_wait(
        `이사장님도 우리가 청춘을 마음껏 즐기길 바라신대. 그러니까 ${callname} `,
      );
      await era.printAndWait(
        `${maru.name}는 얼굴을 새빨갛게 물들이고 이쪽을 바라보았다.`,
      );
      era.printButton(`「가자!」`, 1);
      era.printButton(`「역시 안 되겠어」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`앞으로 잘 부탁해♪`);
      } else {
        await maru.say_and_wait(
          `어머? ${callname}, 이렇게 아름다운 ${maru.teen_sex_title}한테도 관심이 없는 거야? 이 ${
            maru.elder_sibling_sex_title
          }, 내 매력을 의심하게 되는걸.`,
        );
        await era.printAndWait(
          `귀를 축 늘어뜨린 ${maru.name}의 모습은 평소와 너무 달라서, 오히려 괴롭히고 싶은 마음을 자극했다.`,
        );
        await era.printAndWait(`억지로 눌러 두었던 욕망이 다시 고개를 들었다.`);
        await maru.say_and_wait(`그럼 앞으로 잘 부탁해, ${callname}♪`);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_40: (() => {
    const title = '과자를 안 주면 장난칠 거야!';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await maru.say_and_wait(`${callname}, 일어나!`);
      await era.printAndWait(`귓가에 익숙한 목소리가 들려오는 듯했다.`);
      era.printButton(`「으응, 조금만 더 잘래.」`, 1);
      await era.input();
      await maru.say_and_wait(`곧 9시야!`);
      era.printButton(`「9시라고? 으응?!」`, 1);
      await era.input();
      await era.printAndWait(
        `앞으로 닥칠 일을 갑자기 깨달은 ${you.name}은(는) 침대에서 튀어올라 허겁지겁 옷을 입었다.`,
      );
      await you.say_and_wait(
        `이러다 타즈나 ${you.adult_sex_title}한테 잔소리 듣겠네.`,
      );
      await maru.say_and_wait(`후후~`);
      await era.printAndWait(
        `허둥지둥 일어나는 ${you.name}을(를) 보며 ${maru.name}는 살며시 미소 지었다.`,
      );
      await you.say_and_wait(`알람이 왜 안 울렸지? 어라?`);
      await era.printAndWait(
        `핸드폰에 표시된 시간은 7시. 출근까지는 아직 1시간이나 남아 있었다.`,
      );
      await you.say_and_wait(`${maru.name}!`);
      await maru.say_and_wait(`과자를 안 주면 장난칠 거야!`);
      await you.say_and_wait(`으으——핼러윈은 만우절이 아니잖아!`);
      await maru.say_and_wait(`${callname}한테 과자를 받고 싶은걸~`);
      await you.say_and_wait(`이따가 같이 사탕 가게에 가자.`);
      await era.printAndWait(`어느새 두 사람의 입술이 다시 포개졌다.`);
      await maru.say_and_wait(`으응——그럼 이걸로 조금만 참아 볼까♪`);
      await era.printAndWait(
        `두 사람의 아침 식사를 식탁에 차린 ${maru.name}가 사랑스럽게 웃었다.`,
      );
      era.drawLine({ content: '트레이닝실' });
      await you.say_and_wait(`이게 마지막 한 장이네.`);
      await maru.say_and_wait(`수고했어!`);
      await era.printAndWait(
        `곁에서 기다리던 ${maru.name}가 익숙한 손놀림으로 서류를 파일에 넣었다.`,
      );
      await you.say_and_wait(`이제는……`);
      await maru.say_and_wait(`이제는?`);
      await you.say_and_wait(`뭔가…… 중요한 일이 남았던가?`);
      await maru.say_and_wait(
        `${you.sex_code !== 1 ? '트·레·이·너·쨩' : '트·레·이·너·군'}?`,
      );
      await era.printAndWait(
        `귀를 뒤로 젖힌 ${maru.name}의 모습을 알아차린 ${you.name}은(는) 가슴이 철렁했다.`,
      );
      await you.say_and_wait(`생각해 봐, 뭘 잊은 거지? 아, 맞다!`, true);
      await maru.say_and_wait(
        `${you.sex_code !== 1 ? '트·레·이·너·쨩' : '트·레·이·너·군'}?`,
      );
      await era.printAndWait(
        `${maru.name}의 목소리는 점점 무거워졌지만, 얼굴 표정은 조금도 바뀌지 않았다.`,
      );
      await you.say_and_wait(`같이 사탕 가게에 갈까?`);
      await era.printAndWait(`태연한 말투가 스스로도 무서울 정도였다.`);
      await maru.say_and_wait(
        `맞아. 어머~ 이 ${maru.elder_sibling_sex_title}도 잊을 뻔했네. 정말 ${callname} 덕분이야♪`,
      );
      await era.printAndWait(
        `방금까지의 압박감이 아무 일도 없었다는 듯 사라졌다. ${
          maru.sex
        }는 언제부터 영역을 자유자재로 펼쳤다 거둘 수 있게 된 걸까?`,
      );
      await maru.say_and_wait(`같이 출발할까?`);
      await you.say_and_wait(`그런데 출발하기 전에, 하나만 더.`);
      await maru.say_and_wait(`응?`);
      await era.printAndWait(`입술이 포개졌다.`);
      await maru.say_and_wait(`으응——하아, 어어어?`);
      await era.printAndWait(`십오 초 동안 이어진 깊은 입맞춤.`);
      await you.say_and_wait(`해피 핼러윈! 과자를 안 주면 장난칠 거야!`);
      await maru.say_and_wait(
        `어머? ${callname}, 나・마・음・이・바・뀌・었・어!`,
      );
      await era.printAndWait(
        `부드러운 감촉보다, ${you.name}은(는) ${maru.name}가 이제 무슨 말을 할지가 더 신경 쓰였다.`,
      );
      await maru.say_and_wait(
        `오늘 밤에는 ${you.name}을(를) 재우지 않을 거니까❤`,
      );
      await era.printAndWait(
        `온몸의 힘이 한순간에 빠진 듯, ${maru.name}의 품 안에서 축 늘어졌다.`,
      );
      await maru.say_and_wait(
        `후후후——아직 다리에 힘이 풀릴 때가 아니야, ${callname}.`,
      );
      await era.printAndWait(
        `어느새 촉촉해진 눈가를 ${maru.name}가 살며시 닦아 주었다.`,
      );
      await maru.say_and_wait(`오늘 밤도 잘 부탁해, ${callname}♪`);
    };
    f.title = title;
    return f;
  })(),
  before_tenn_sho_s: (() => {
    const title = '텐노상(가을) 전·에덴의 꿈';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`황제와의 두 번째 대결이 시작되려 하고 있었다.`);
      await era.printAndWait(
        `${maru.name}와 황제의 두 번째 맞대결에 관객들이 몰려들어, 유례없는 성황을 이루었다.`,
      );
      era.drawLine({ content: '대기실' });
      era.printButton(`「가장 멋진 뒷모습을 보여 줘.」`, 1);
      await era.input();
      await maru.say_and_wait(
        `루돌프 쨩과 같은 무대에서 겨룰 수 있다니, 틀림없이 최고의 무대가 될 거야♪`,
      );
      era.printButton(`「이길 자신은 있어?」`, 1);
      await era.input();
      await you.say_and_wait(
        `이름난 ${maru.uma_sex_title}들에게 도전하고, ${
          maru.sex
        }들과 어울리며 맞서 싸워 승부를 가리는 거야.`,
      );
      await you.say_and_wait(`이길 자신은 있어?`);
      await era.printAndWait(`${maru.name}는 잠시 침묵한 뒤 답했다.`);
      await maru.say_and_wait(
        `${callname}, 경기장에서 달리는 ${maru.uma_sex_title}들을 보면 무슨 생각이 들어?`,
      );
      await you.say_and_wait(
        `경기장에서 이기기 위해, 보이지 않는 곳에서 땀 흘리며 노력했겠지.`,
      );
      await you.say_and_wait(`하지만……`);
      await maru.say_and_wait(
        `맞아. 이길 수 있는 ${maru.uma_sex_title}는 단 한 명뿐이야.`,
      );
      await era.printAndWait(
        `눈앞에 다시 학생회실 한가운데 걸린 그 격언이 떠올랐다.`,
      );
      await you.say_and_wait(`하나가 앞서면, 만인이 침묵한다.`);
      await maru.say_and_wait(
        `처음 봤을 때는 무슨 뜻으로 받아들여야 할지 한참 생각해도 모르겠더라.`,
      );
      await maru.say_and_wait(
        `묵묵히 애쓰는 ${maru.uma_sex_title}들은 졌다는 이유만으로 모든 노력을 부정당해.`,
      );
      await maru.say_and_wait(
        `단 한 명의 ${maru.uma_sex_title}만 이길 수 있다면, 다른 ${maru.uma_sex_title}들의 노력은 전부 헛수고가 되는 거 아닐까?`,
      );
      await maru.say_and_wait(
        `실패가 정해진 결말이라면, 처음부터 포기하고 다른 길을 가는 게 더 현명하지 않을까?`,
      );
      await maru.say_and_wait(
        `——하지만 달리는 것이야말로 ${maru.uma_sex_title}의 본성이잖아?`,
      );
      await maru.say_and_wait(`출발 전에는 긴장하며 출발 신호를 기다려.`);
      await maru.say_and_wait(
        `달리는 동안에는 미지의 세계와 홀로 마주하지. 하지만 생각만큼 무섭지는 않아.`,
      );
      await maru.say_and_wait(`스퍼트할 때 뒤에서 들려오는 발소리.`);
      await maru.say_and_wait(
        `앞서 달리는 상대를 넘어서고 싶어. 더 빨리 달리고 싶어. ${maru.sex}보다 더 멀리 나아가고 싶어.`,
      );
      await maru.say_and_wait(
        `마지막으로 결승선에 들어서는 순간은, 오히려 그렇게 중요하지 않게 돼.`,
      );
      await maru.say_and_wait(
        `그런 마음을 품고 성공을 거머쥐는 거야. 그러면 후배들도 앞길이 보이지 않을 때, 그 길을 따라갈 수 있겠지.`,
      );
      await maru.say_and_wait(
        `누군가 걸을 수 있다고 증명한 길이니까, 한번 해 보면 나도 갈 수 있지 않을까 하는 마음으로.`,
      );
      await maru.say_and_wait(
        `그러니까 내 대답은——성공하든 실패하든, 이 모험에는 도전할 가치가 있다는 거야.`,
      );
      await era.printAndWait(`레이스 시작을 알리는 방송이 울렸다.`);
      await maru.say_and_wait(`미안해, 나도 모르게 말이 길어졌네.`);
      await era.printAndWait(`조금 쑥스러워진 ${maru.name}가 얼굴을 붉혔다.`);
      await era.printAndWait(`${maru.name}를 영입한 뒤로 참 많은 일이 있었다.`);
      await era.printAndWait(`울음도, 웃음도, 통곡도, 기쁨도, 신뢰도, 배신도.`);
      await era.printAndWait(`이제는 모두 한 번씩 겪었다.`);
      await era.printAndWait(`${maru.name}에게는————`);
      era.printButton(`「함께 출발하자.」`, 1);
      await era.input();
      era.printButton(`「우리의 이야기를 써 내려가자.」`, 1);
      await era.input();
      await maru.say_and_wait(`……후후♪`);
      await era.printAndWait(`${maru.name}는 미소를 지었다.`);
      await maru.say_and_wait(
        `앞으로 무슨 일이 생겨도, 계속 곁에 있어 줄 거지?`,
      );
      await maru.say_and_wait(`웃을 때도, 울 때도. 함께 마주하는 거야?`);
      await era.printAndWait(
        `${you.name}의 기억 속에서 가장 아름다운 미소였을 것이다.`,
      );
      await era.printAndWait(`${maru.name}는 경기장으로 향했다.`);
      await era.printAndWait(`바로 앞에서 황제가 도전자를 기다리고 있었다.`);
      await era.printAndWait(`${you.name}은(는) ${maru.name}의 승리를 빌었다.`);
      await era.printAndWait(`시간은 이곳에서 흘러간다.`);
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_win_s: (() => {
    const title = '텐노상(가을) 후·금빛 가을, 황금빛 꿈';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} darley ダレアラビア
     * @param {CharaTalk} godolphin ゴドルフィンアラブ
     * @param {CharaTalk} byerley バイアリーターク
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, darley, godolphin, byerley, you, callname) => {
      darley.name = '지혜의 여신';
      godolphin.name = '다정한 여신';
      byerley.name = '엄숙한 여신';
      await maru.say_and_wait(`하아, 하아, 하아.`);
      await maru.say_and_wait(`조금만 더 가면 돼.`);
      await era.printAndWait(`마지막 코너에서 단숨에 가속했다.`);
      await era.printAndWait(`이 순간 경기장은 두 사람만의 승부처가 되었다.`);
      await era.printAndWait(`앞으로 10마신, 8마신, 6마신.`);
      await era.printAndWait(`결승선까지는 15m도 남지 않았다.`);
      await era.printAndWait(`뒤에서 들려오는 천둥소리가 점점 가까워졌다.`);
      await maru.say_and_wait(`역시 마지막에 조금 모자랐던 걸까?`, true);
      await era.printAndWait(
        `앞서 벌려 놓은 우위가 불길에 녹는 눈처럼 빠르게 사라졌다.`,
      );
      await era.printAndWait(`마지막 스퍼트의 순간.`);
      await era.printAndWait(`황제가 ${maru.name}의 뒤를 따라잡았다.`);
      await era.printAndWait(`하지만 ${maru.name}는 한 걸음을 내디뎠다.`);
      await era.printAndWait(`황제: 이렇게 될 줄이야. 재미있군.`);
      await you.say_as_passer_by_and_wait(
        `실황`,
        `최후의 승자는—— ${maru.name}!`,
      );
      await maru.say_and_wait(`이겼어.`);
      await maru.say_and_wait(`……왜 이렇게 피곤하지?`);
      era.drawLine();
      maru.print(
        `다시 눈을 떴을 때, 긴 꿈에서 깨어난 듯했다. 눈앞에는 아스라하고 신비로운 초원이 펼쳐져 있었다.`,
      );
      maru.print(
        `성긴 구름 사이로 햇살이 가느다란 실처럼 살며시 내려와, 끝없는 녹음 위에 따뜻하고 부드러운 금빛을 입혔다.`,
      );
      maru.print(
        `몸을 일으키려 하자, 온몸의 세포 하나하나가 활력으로 가득 차 있었다.`,
      );
      maru.print(
        `그대로 일어나 주변을 둘러보았다. 푸른 하늘과 흰 구름 아래, 끝없이 펼쳐진 초원은 대지에 박힌 거대한 비취처럼 온화하고 신비로운 기운을 내뿜고 있었다.`,
      );
      maru.print(
        `산들바람이 스쳐 가자 풀밭이 바다의 너울처럼 출렁이며 싱그러운 풀 향기를 실어 왔다.`,
      );
      await maru.say_and_wait(`여긴 어디지?`);
      maru.print(
        `아무도 대답하지 않았다. 하지만 마음속으로는 답을 들을 수 있는 곳이 있다는 사실을 굳게 확신하고 있었다.`,
      );
      await maru.say_and_wait(`언제나처럼, 마력 전개!`);
      await maru.say_and_wait(`셋!`);
      await era.printAndWait(`상체를 펴고, 어깨의 힘을 빼 아래로 내렸다.`);
      await maru.say_and_wait(`둘!`);
      await era.printAndWait(`모든 힘을 다리에 쏟아부었다.`);
      await maru.say_and_wait(`하나!`);
      await era.printAndWait(
        `크게 숨을 들이마시며 공기 속에 가득한 싱그러운 풀 향기를 느꼈다.`,
      );
      await era.printAndWait(
        `그렇게 답을 쫓아, ${maru.name}는 잔디의 품속을 질주했다.`,
      );
      era.drawLine();
      await era.printAndWait(`${maru.name}는 황금빛 초원에 도착했다.`);
      await era.printAndWait(
        `그리운 곳, ${maru.uma_sex_title}의 영혼이 깃드는 요람이었다.`,
      );
      await maru.say_and_wait(`여기는?`);
      await godolphin.say_and_wait(`드디어 왔구나, 다정한 아이야.`);
      await era.printAndWait(
        `갑자기 눈앞에 나타난 것은 온유함과 자애로 모든 것을 감싸 안는 여신이었다.`,
      );
      await darley.say_and_wait(
        `여기까지 오는 동안 네가 겪은 고생은 우리도 지켜보았어.`,
      );
      await era.printAndWait(
        `이어서 각 ${maru.uma_sex_title}가 타고난 개성을 존중하고 축복하는, 차분하고 온화한 여신이 나타났다.`,
      );
      await byerley.say_and_wait(
        `시간에 의미를 부여하고, 거기서 얻는 강대한 힘을 추구한다.`,
      );
      await byerley.say_and_wait(
        `필멸자로서는 그것도 강함을 드러내는 한 방식이겠지.`,
      );
      await era.printAndWait(
        `강함이야말로 미래를 연다고 믿는, 엄숙하고 강인한 여신이 나타났다.`,
      );
      await maru.say_and_wait(`제가 왜 여기에 있는 거죠?`);
      await byerley.say_and_wait(
        `……여기는 영역을 깨달은 모든 ${maru.uma_sex_title}가 재능을 극한까지 발휘한 뒤 도달하는 경기장이다.`,
      );
      await godolphin.say_and_wait(
        `찬란한 일생을 보낸 뒤, 모든 ${maru.uma_sex_title}가 마지막으로 돌아오는 포근한 고향이기도 하지.`,
      );
      await darley.say_and_wait(`에덴에 도달한 ${maru.uma_sex_title}여.`);
      await darley.say_and_wait(
        `알고 있을 거야. 우리가 창조한 이 세계에서는 서로 다른 이념의 끝없는 대립이 수많은 슬픔과 고통을 낳았지.`,
      );
      await darley.say_and_wait(
        `하지만 동시에 그 덕분에, 서로 다르면서도 대등하게 맞설 수 있는 선택지들이 이 세상에 영원히 존재할 수 있어.`,
      );
      await godolphin.say_and_wait(
        `아무도 인정해 주지 않고 시대에 맞지 않는다고 여기는 꿈에도, 영원히 동경할 수 있는 저편은 있단다.`,
      );
      await godolphin.say_and_wait(
        `어떤 신념을 품고 있더라도, 이 세상에는 반드시 마음 깊이 안식할 수 있는 곳이 있어.`,
      );
      await byerley.say_and_wait(
        `인간과 ${maru.uma_sex_title}에게는 오랜 배움의 시간이 필요하다. 평화롭게, 서로를 존중하며 겨루는 법을 익히기 위해서다.`,
      );
      await byerley.say_and_wait(
        `모든 다툼은 끝에 이르러 하나의 의미를 낳는다. 그 의미가 승리를 위해 대가를 치른 각각의 ${maru.uma_sex_title}를 구원하지.`,
      );
      await darley.say_and_wait(
        `${maru.name}, 에덴을 찾았던 수많은 ${maru.uma_sex_title}들처럼 너도 묻고 싶은 게 있니?`,
      );
      await maru.say_and_wait(`묻고 싶은 것?`);
      maru.print(`순간 묻고 싶은 것이 너무 많아 말이 목에 걸렸다.`);
      maru.print(`하지만……`);
      await maru.say_and_wait(`괜찮아요.`);
      await maru.say_and_wait(`여행에서 가장 중요한 건 길가의 풍경이잖아요.`);
      await maru.say_and_wait(
        `처음부터 종착지의 답을 알고 있다면, 길가의 풍경은 존재할 의미를 잃고 말 거예요.`,
      );
      await maru.say_and_wait(
        `꼭 물어봐야 한다면, 이 즐거운 여행을 마치고 다시 만났을 때 묻는 편이 더 현명하지 않을까요?`,
      );
      await darley.say_and_wait(
        `진실보다 세상살이에 마음을 두는구나. 재미있는 길을 골랐네.`,
      );
      await godolphin.say_and_wait(`앞으로의 길은 지금보다 험할 거야.`);
      await byerley.say_and_wait(
        `어떤 어려움이든 넘어설 수 있을 것이다. 너에게는 그럴 자격이 있다.`,
      );
      await darley.say_and_wait(`앞으로의 길에 순풍이 함께하기를.`);
      await era.printAndWait(
        `부드러운 바람이 ${maru.name}를 살며시 들어 올려, 머나먼 세계를 향해 점점 빠르게 나아갔다.`,
      );
      await era.printAndWait(
        `의식이 사라지기 직전, ${maru.name}는 이 황금빛 고향을 가슴 깊이 새겼다.`,
      );
      era.drawLine();
      era.printButton(`「${maru.name}?」`, 1);
      await era.input();
      await era.printAndWait(
        `불행 중 다행이라고 해야 할까. 레이스가 끝난 뒤 줄곧 정신이 흐릿했던 ${maru.name}는 위닝 라이브에서도 춤을 통해 응원해 준 한 사람 한 사람의 가슴에 마음을 전했다.`,
      );
      await era.printAndWait(
        `트레이너로서 지금 ${maru.name}에게는 휴식이 필요하다는 이유로 모든 면회와 인터뷰를 거절했다. ${maru.name}가 현재의 과학으로는 설명할 수 없는 꼼짝도 하지 않는 상태임을 확인한 뒤, 조심스럽게 ${maru.name}를 업고 애차에 태워 ${maru.sex}가 사는 아파트로 데려갔다.`,
      );
      era.printButton(`「실례할게.」`, 1);
      await era.input();
      await era.printAndWait(
        `애차를 근처 주차장에 세우고, 조심스럽게 ${maru.name}를 안아 들었다.`,
      );
      await era.printAndWait(
        `${maru.sex}를 침대에 편안히 눕힌 뒤, 의자 하나를 끌어와 ${maru.sex}의 곁에 앉았다.`,
      );
      await you.say_and_wait(`제발 아무 일도 없기를, ${maru.name}.`, true);
      await era.printAndWait(
        `할 수 있는 일을 모두 마치고, 자신의 잠을 대신 가져가더라도 ${maru.name}가 깨어나기를 빌었다.`,
      );
      await era.printAndWait(`마음 졸이며 시간을 보냈다.`);
      await era.printAndWait(`일 분, 한 시간, 하룻밤. 아무 말도 없었다.`);
      await maru.say_and_wait(`으응.`);
      await era.printAndWait(
        `구름을 뚫고 나온 햇살이 ${maru.name}의 몸 위에 얼룩진 빛과 그림자를 드리울 때까지.`,
      );
      await maru.say_and_wait(`여기는?`);
      await era.printAndWait(
        `깨어난 ${maru.teen_sex_title}의 눈이 익숙한 천장을 의아하게 살피다가, 낯설면서도 익숙한 그 모습에 머물렀다.`,
      );
      await maru.say_and_wait(`${callname}?`);
      await era.printAndWait(
        `밤낮으로 쌓인 피로가 ${you.name}을(를) 완전히 짓눌렀는지, ${you.name}은(는) 어느새 잠들어 있었다.`,
      );
      await maru.say_and_wait(`이 각도에서 보니까, ${callname}, 멋있네♪`);
      await maru.say_and_wait(`아무리 봐도 질리지 않아♪`);
      await maru.say_and_wait(`……여기까지 오느라 수고했어, ${callname}.`);
      await maru.say_and_wait(`무슨 일이 있어도, 우리는 함께인 거야?`);
      await era.printAndWait(
        `${maru.name}는 ${you.name}을(를) 꼭 끌어안았다.`,
      );
      await era.printAndWait(`세 여신은 아이들을 다정하게 지켜보고 있었다.`);
      await darley.say_and_wait(
        `……다정한 아이야. 네 소원은 분명 이루어질 거야.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_43: (() => {
    const title = '다정한 바람';
    /** @param {CharaTalk} maru マルゼンスキー */
    const f = async (maru) => {
      maru.print(`뜻밖의 이른 기상.`);
      maru.print(`졸린 눈을 비비고 뒤척여 봐도 잠이 오지 않았어.`);
      maru.print(`답답한 기분에 차라리 침대에서 일어나기로 했어.`);
      maru.print(`졸음을 쫓으며 창문을 열었지.`);
      maru.print(`상쾌한 공기가 아파트를 찾아왔어.`);
      maru.print(
        `창밖의 금빛 나뭇잎들도 나무의 품을 떠나 가을바람을 따라 이곳을 방문했네.`,
      );
      await maru.say_and_wait(`방가방가!`);
      maru.print(`작은 손님을 웃는 얼굴로 맞이했어.`);
      maru.print(`주인의 초대를 받은 작은 손님은 책상 위에 가뿐히 내려앉았지.`);
      await maru.say_and_wait(
        `……그러고 보니 요즘 낙엽으로 책갈피를 만드는 게 유행이라던데.`,
      );
      maru.print(
        `나뭇잎을 조심스럽게 씻어 말린 뒤, 사전 사이에 끼워 평평하게 눌러 두었어.`,
      );
      maru.print(`상쾌한 공기가 방 안을 가득 채웠지.`);
      await maru.say_and_wait(
        `이제 태양이 뜨기를 느긋하게 기다리기만 하면 돼.`,
        true,
      );
      maru.print(
        `새벽안개가 채 가시지 않은 하늘엔 달이 떠 있고, 별들이 반짝이고 있어.`,
      );
      await maru.say_and_wait(`머지않아 겨울이 오겠네.`, true);
      maru.print(
        `봄에 돋아난 잎은 여름에 무성해지고, 가을에 시들어 결국 겨울의 품으로 돌아가.`,
      );
      await maru.say_and_wait(`나도 힘차게 꽃을 피웠던 걸까?`, true);
      maru.print(
        `갑자기 불어온 강풍에 눈을 뜨기 힘들었지만, 금빛 낙엽들은 미련 없이 가지를 떠나 열정적인 바람을 따라 마지막 여행을 떠나고 있었어.`,
      );
      maru.print(
        `시냇물처럼 넘실거리는 무수한 낙엽들이 바람의 손길에 이끌려 대지의 바다로 즐겁게 흘러가네.`,
      );
      await maru.say_and_wait(
        `귀여운 후배들이 마지막에 어떤 경지에 도달하게 될지 정말 기대돼. 음, 생각만 해도 벌써 긴장되는걸.`,
      );
      maru.print(`낙엽에게 건네는 말인지, 아니면 자신에게 하는 말인지.`);
      await maru.say_and_wait(`후배들이 나를 앞지르는 그날을 기다릴게.`, true);
      maru.print(
        `후배들이 자신의 뒷모습을 따라잡는 그날까지, ${maru.name}는 계속 기다릴 것이다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  ws_95_48: (() => {
    const title = '크리스마스';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait([
        ' ',
        maru.get_colored_name(),
        '와의 약속을 지키기 위해, ',
        you.get_colored_name(),
        '은(는) 마지막 업무를 끝내자마자 약속 장소로 서둘러 향했다.',
      ]);
      await era.printAndWait(
        `약속한 느티나무 가로수길 근처에 도착한 ${you.name}은(는) 휴대전화를 확인했다. 약속 시각보다 30분이나 빨랐다.`,
      );
      era.printButton(`「아직 시간은 충분하네.」`, 1);
      await era.input();
      await era.printAndWait(
        `마음이 놓인 ${you.name}은(는) 바쁜 걸음을 늦췄다.`,
      );
      await era.printAndWait(
        `작년에 ${maru.name}와 함께 팬들에게 둘러싸이는 것을 피해 황급히 달아나다가 우연히 발견한 작은 길이었다.`,
      );
      await era.printAndWait(
        `그때의 ${
          maru.sex
        }는 무척 즐거워 보였다…… 아니, 경기장에서와는 다른 종류의 즐거움이었다.`,
      );
      await era.printAndWait(
        `함께 달리는 기쁨을 느끼게 해 주려고 일부러 보폭을 줄였던 모양이다. 그때 나는 머릿속이 새하얬다.`,
      );
      await era.printAndWait(
        `밸런타인의 그 입맞춤, 팬 감사제에서의 다정한 접촉……`,
      );
      await era.printAndWait(
        `지난 추억들이 난로에서 피어나는 연기처럼 천천히 떠올랐다.`,
      );
      await era.printAndWait(`사실은……`);
      await maru.say_and_wait(`깜짝이야!`);
      await era.printAndWait(
        `${you.name}을(를) 놀라게 하려는 것인지, ${maru.name}가 ${you.name}의 왼쪽 느티나무 뒤에서 불쑥 나타났다. 새하얀 눈 속에서 그 붉은 모습은 유난히 눈부셨다.`,
      );
      era.printButton(`「으아아아!」`, 1);
      await era.input();
      await era.printAndWait(
        `시야에 갑자기 뛰어든 ${maru.teen_sex_title}(?) 때문에 ${you.name}은(는) 제대로 놀라고 말았다.`,
      );
      await maru.say_and_wait(`안녕♪ ${callname}`);
      era.printButton(`「${maru.name}, 그렇게 갑자기 튀어나오면 놀라잖아.」`, 1);
      await era.input();
      await era.printAndWait(
        `작년에 ${maru.name}와 이 느티나무 가로수길에서 만나기로 약속했었다. 하지만 ${
          maru.sex
        }가 이렇게 활발할 줄은 몰랐다.`,
      );
      await era.printAndWait(
        `늘 성숙한 ${maru.elder_sibling_sex_title}를 자처했지만, ${you.name} 앞에서는 ${maru.sex}의 또 다른 면모도 드러내기 시작했다.`,
      );
      await maru.say_and_wait(
        `설레는 마음을 못 참고 한 시간이나 일찍 와 버렸거든. 심심해서 장난기가 발동한 것도 있어.`,
      );
      await maru.say_and_wait(`그런데 ${callname}도 그렇게 놀라다니, 귀엽네♪`);
      era.printButton(`「${maru.name}!!!」`, 1);
      await era.input();
      await maru.say_and_wait(`후후♪ ${callname}, 나 잡아 봐.`);
      era.printButton(`「도망가지 마!」`, 1);
      await era.input();
      await era.printAndWait(
        `아이들처럼 술래잡기를 하다 보니, 문득 근심 걱정 없던 어린 시절로 돌아간 듯했다.`,
      );
      era.printButton(`「재미있네.」`, 1);
      await era.input();
      await era.printAndWait(
        `다행히 이 작은 길에는 오가는 사람이 적었고, 그나마도 모두 당신들 같은 커플이었다.`,
      );
      await era.printAndWait(
        `${maru.name}는 몰라도, ${
          you.name
        }에게는 이제 어린 시절 같은 활력이 없었다. 거친 숨을 몰아쉬며 나무줄기를 붙잡고 ${maru.sex}를 바라볼 수밖에 없었다.`,
      );
      await maru.say_and_wait(`흥흥♪ 이 게임은 내 승리네.`);
      await maru.say_and_wait(
        `승자로서, ${callname}한테 조건 하나를 내걸겠어.`,
      );
      era.printButton(`「잠깐, 그런 얘기는 없었잖아.」`, 1);
      await era.input();

      await maru.say_and_wait(`오늘 밤, 나랑 데이트하자.`);
      await maru.say_and_wait(
        `이렇게 세련되고 아름다운 ${maru.teen_sex_title}하고 데이트할 수 있다니, 다시 없을 기회잖아.`,
      );
      await maru.say_and_wait(`${callname} 생각은 어때?`);
      era.printButton(`「……」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}이(가) 대답하려는 순간, 배에서 꼴사납게 소리가 났다.`,
      );
      await maru.say_and_wait(
        `후후, ${callname}, 배고픈가 보네. 그럼 먼저 뭘 좀 먹고 출발하자.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 다시 조수석에 앉았다. 익숙한 감촉이 ${you.name}을(를) 더없이 안심시켰다.`,
      );
      await era.printAndWait(
        `${maru.sex}는 열쇠를 꽂고 시동을 걸었다. 낮은 엔진음이 조용한 공원에 울려 퍼졌다.`,
      );
      await era.printAndWait(
        `사이제리야에서 조금 호화로운 저녁 식사를 함께했다.`,
      );
      await era.printAndWait(
        `혼자 묵묵히 먹을 때보다, ${maru.name}가 곁에 있으니 음식이 더욱 맛있게 느껴졌다.`,
      );
      await maru.say_and_wait(`오케이, 차에서 ${you.name}을(를) 기다릴게.`);
      await era.printAndWait(
        `${you.name}은(는) ${maru.name}를 먼저 차로 보내 기다리게 하고, 계산대로 향했다.`,
      );
      await era.printAndWait(
        `엔진이 다시 우렁차게 울렸고, 오늘의 마지막 목적지를 향해 출발했다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 익숙한 손놀림으로 차내 패널의 재생 버튼을 누른 뒤, 좌석에 기대 음악을 즐겼다.`,
      );
      await era.printAndWait(`신호가 바뀌자 애차는 언덕길을 올라갔다.`);
      await era.printAndWait(
        `고속도로에 들어서자 차가 단숨에 속도를 높였다. 양옆으로 스쳐 가는 가로등 때문에 ${you.name}은(는) 시간의 터널 속에 있는 듯했다.`,
      );
      await era.printAndWait(
        `처음의 불편함이 지나자, ${you.name}은(는) ${maru.name}의 속도에 서서히 익숙해졌다.`,
      );
      await era.printAndWait(
        `음악은 ${you.name}을(를) 시간 밖으로 이끌었고, 호흡은 ${you.name}에게서 시간의 흐름을 풀어 주었다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) 고개를 돌려 ${maru.name}를 바라보자, 마침 ${maru.sex}가 시선을 거두는 순간이 눈에 들어왔다.`,
      );
      await era.printAndWait(
        `그 뒤로는 스피커에서 흘러나오는 부드러운 음악 외에 아무 소리도 들리지 않았다.`,
      );
      await maru.say_and_wait(`${callname}, 벌써 정상에 도착했어.`);
      await era.printAndWait(
        `이 도시 근처에서 가장 높은 산이었다. 정상에서 내려다보니 도시 전체가 한눈에 들어왔다.`,
      );
      await era.printAndWait(
        `찬 공기가 폐에 남아 있던 온기를 앗아 가고, 심장의 거센 고동을 자극했다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 곁에 있는 ${
          maru.sex
        }를 바라보았다. 맑고 밝은 그 눈동자는 축제로 반짝이는 도시를 담고 있었다.`,
      );
      era.printButton(`「${you.name}의 눈, 정말 아름답네」`, 1);
      await era.input();
      await maru.say_and_wait(`후후♪ ${callname}, 나한테 작업 거는 거야?`);
      await maru.say_and_wait(
        `어머, 이 나이에 아직 젊은 사람한테 놀림을 받다니. 내 매력도 여전한가 봐.`,
      );
      await era.printAndWait(
        `${maru.name}는 시선을 거두었다가, 다시 ${you.name}을(를) 바라보았다.`,
      );
      await maru.say_and_wait(
        `흔히 눈은 마음의 창이라고 하잖아. ${callname} 눈에는 내가 어떤 것 같아?`,
      );
      await you.say_and_wait(`조금은 감상적이고, 다정하고 아름다운 눈이야.`);
      await maru.say_and_wait(
        `${callname}, 무슨 생각을 하다가 그런 느낌이 든 거야?`,
      );
      await you.say_and_wait(`그 다정한 눈은 늘 후배들을 바라보고 있잖아.`);
      await you.say_and_wait(
        `즐거운 시간이 영원하지는 않다는 걸 아쉬워하면서도, `,
      );
      await you.say_and_wait(
        `후배들이 더욱 눈부신 빛을 가져올 거라고 믿으며 기뻐하고 있어.`,
      );
      await you.say_and_wait(`구름 한 점 없는 맑은 여름 하늘 같아.`);
      await maru.say_and_wait(
        `${callname}, 나를 너무 높이 평가하는 거 아냐? 게다가 지금은 겨울인걸.`,
      );
      await you.say_and_wait(
        `그 다정함의 힘을 가볍게 보는 사람은 없을 거야. 그 뿌리는 사랑이라고 할 수 있으니까.`,
      );
      await you.say_and_wait(`다정한 사랑만이 마음의 상처를 치유할 수 있지.`);
      await you.say_and_wait(
        `그 사랑에 응답하며 뒷모습을 쫓는 아이들이 내뿜는 불꽃은, 겨울에도 여름 같은 따뜻함을 느끼게 해 줘.`,
      );
      await maru.say_and_wait(
        `그 아이들의 뒷모습을 보고 있으면, 내일도 따뜻하고 맑을 것 같네.`,
      );
      await maru.say_and_wait(`${callname}하고 만나서 정말 다행이야♪`);
      await maru.say_and_wait(`……${callname}, 딱 한 번만 어리광 부려도 될까?`);
      era.printButton(`「${you.name}한테 바라는 게 있다면 말해 줘.」`, 1);
      await era.input();
      await maru.say_and_wait(`키스해 줄래?`);
      await era.printAndWait(
        `${you.name}은(는) ${maru.name}의 허리를 감싸 안고 머리카락 끝을 가볍게 매만졌다.`,
      );
      await era.printAndWait(`10초의 입맞춤이 평생 잊지 못할 추억이 되었다.`);
      await era.printAndWait(
        `그렇게 두 사람이 떨어지자, ${maru.name}의 눈물이 뺨을 따라 천천히 흘렀다.`,
      );
      await maru.say_and_wait(`${callname}, 나는 ${you.name}을(를) 사랑해.`);
      era.printButton(`「나, ${you.name}도 널 사랑해.」`, 1);
      await era.input();
      await era.printAndWait(
        `시계가 12시를 가리키자, 두 사람은 불꽃놀이 속에서 서로를 꼭 끌어안았다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  current_trend: (() => {
    const title = '거리의 유행을 이끄는 사람';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`어느 날, 안뜰에서 있었던 일————`);
      await maru.say_and_wait(
        `${callname}, ${you.name}한테 상담하고 싶은 게 있어. ${you.name}, 지금 괜찮아?`,
      );
      era.printButton('「무슨 일이야?」', 1);
      await era.input();
      await maru.say_and_wait(
        `있잖아…… 후배들이 쇼핑하러 가자고 해서, 멋진 번화가에 같이 가려고 해. ${you.name}도 최신 패션을 앞서가는 느낌, 알지?`,
      );
      await maru.say_and_wait(
        `……그런데 알다시피 유행은 정말 빨리 변하잖아. 나도 최신 정보를 공부하고 있다고 생각했는데, 후배들과 이야기하다 보면 어쩐지 말이 안 통할 때가 있어.`,
      );
      await maru.say_and_wait(
        `그러면 분위기가 정말 어색해지더라. 모두를 실망시키지 않게, ${you.name}, 좋은 방법 좀 생각해 주겠어?`,
      );
      era.printButton('「센스를 높이는 특별 훈련을 하자!」 (스피드 +10)', 1);
      era.printButton(`「자신을 믿어!」 (파워 +10)`, 1);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `그렇구나, 지금 가장 유행하는 게 뭔지 알아보자는 거네!`,
        );
        await maru.say_and_wait(
          `그럼 ${callname}, ${you.name}하고 같이 유행을 알아보러 가도 될까?`,
        );
        era.printButton('「물론이지!」', 1);
        await era.input();
        await era.printAndWait(
          `그렇게 ${you.name}과(와) ${maru.name}는 번화가로 향했다.`,
        );
        await maru.say_and_wait(
          `당장 저 거리의 유행부터 살펴보자. 저쪽 CD 가게라면 최신 유행을 알 수 있을지도 몰라♪`,
        );
        await era.printAndWait(
          `${maru.name}가 가리킨 곳은 세월의 흔적이 느껴지는 CD 가게였다. 아무리 그래도 저기서 최신 유행을 찾는 건……`,
        );
        await maru.say_and_wait(`${callname}, 어디 아파?`);
        await era.printAndWait(
          `속으로는 그렇게 딴죽을 걸면서도, ${you.name}은(는) 말없이 ${
            maru.sex
          }와 함께 이십 년 전에 유행하던 CD 가게를 둘러보았다.`,
        );
        await era.printAndWait(
          `얼마 뒤, ${you.name}과(와) ${maru.name}는 이 거리의 가게들을 전부 둘러보았다.`,
        );
        await maru.say_and_wait(
          `최신 유행을 따라가는 건 정말 어렵네. 엄마는 요령만 알면 괜찮다고 했는데……`,
        );
        era.printButton(
          `「엄마가 ${you.name}한테 알려 준 이야기를 해 보면 어떨까?」`,
          1,
        );
        await era.input();
        await maru.say_and_wait(
          `후배들한테 이야기하라고…… 그렇구나, 그것도 방법이네. 유행을 따라가기보다 직접 퍼뜨리는 쪽이 더 재미있겠어!`,
        );
        await maru.say_and_wait(
          `그럼 내일은 후배들한테 유행을 전파해야겠네. ${callname}, ${you.name}, 고마워⭐`,
        );
        await era.printAndWait(
          `다음 날, ${maru.name}는 들뜬 목소리로 ${you.name}에게 후배들이 ${
            maru.sex
          }의 새로운 유행을 받아들여 주었다고 말했다.`,
        );
      } else {
        await maru.say_and_wait(`내 센스를 믿으라고……?`);
        await maru.say_and_wait(
          `조금 겁을 먹었나 봐. 망설이고 불안해하는 건 나답지 않지.`,
        );
        await maru.say_and_wait(
          `게다가 다들 내 센스를 알잖아. 누구보다 패션을 잘 알고, 언제나 시대의 흐름을 앞서가는 ${maru.uma_sex_title}인걸.`,
        );
        await maru.say_and_wait(`좋아! 후배들과 나들이, 마음껏 즐기고 올게!`);
        await era.printAndWait(
          `나중에 ${you.name}이(가) ${maru.name}에게 지난 나들이 이야기를 물어보니, ${
            maru.sex
          }는 후배들과 유행에 관한 정보를 한껏 나눈 모양이었다.`,
        );
        await era.printAndWait(
          `이것이 바로 독특한 센스와 매력으로 가득한 ${maru.name}.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  feel_speed: (() => {
    const title = '슈퍼카 드라이브';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `어느 날, ${you.name}이(가) 교문 밖으로 산책을 나가려던 참에, 마침——`,
      );
      await era.printAndWait(
        `기분이 좋아 보이는 ${maru.name}가 학원 밖을 향해 걸어가고 있었다.`,
      );
      era.println();

      await maru.say_and_wait(
        `어머, ${callname}? 오늘 날씨 좋네. 같이 드라이브 안 할래?`,
      );
      era.printButton('「좋아.」', 1);
      await era.input();
      await maru.say_and_wait(
        `${
          maru.name
        }의 제안을 거절할 이유는 없었다. 학원 밖에 잠시 세워 둔 빨간 차로 함께 향했다.`,
      );
      await maru.say_and_wait('그럼, 출발이야!');
      await era.printAndWait(
        `새빨간 슈퍼카가 시동을 걸자, ${you.name}은(는) 갑자기 오한을 느꼈다. 아마 기분 탓일 것이다. ${you.name}은(는) 스스로를 안심시켰다.`,
      );
      era.println();
      await era.printAndWait(`십 초 뒤`);
      era.printButton('「좀 너무 빠르지 않아?!」', 1);
      await era.input();
      await maru.say_and_wait('이 정도 속도는 아직 괜찮아!');
      await maru.say_and_wait('곧 고속도로야! 이제 진심으로 달릴게!');
      await maru.say_and_wait(
        '애차가 가속했다! 애차가 드리프트했다! 애차가 더더욱 빨라졌다!!!',
      );
      await maru.say_and_wait('우후! 이 느낌, 참을 수 없어♪');
      await maru.say_and_wait(
        `어머? ${era.get('callname:0:-1')}! ${you.name}, 왜 그래?`,
      );
      await maru.say_and_wait('우후! 이 느낌, 참을 수 없어♪');
      await maru.say_and_wait('저기? 저기?');
      await maru.say_and_wait(`${you.name}, 괜찮아? 내가 너무 스퍼트했나?`);
      era.printButton('「한계까지 도전하자!」 (스피드 +10)', 1);
      era.printButton('「조금 쉬어도 될까?」 (지능 +10)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `${callname}도 그렇게까지 말한다면, 이 ${
            maru.elder_sibling_sex_title
          }도 진심을 보여 줘야겠네!`,
        );
        await maru.say_and_wait('함께 한계를 돌파하자!');
        await maru.say_and_wait('자! 음속을 넘어서!');
        await maru.say_and_wait(
          `나와 ${you.name}만 함께라면, 어디든 갈 수 있어!`,
        );
        era.println();
        await maru.say_and_wait('이게 바람이 된다는 걸까?');
        await era.printAndWait(
          `${you.name}의 의식이 어둠 속으로 가라앉기 직전, 황홀해하는 마루젠의 혼잣말이 들렸다.`,
        );
      } else {
        await maru.say_and_wait(`알았어. 무리하면 안 되지!`);
        era.println();
        await maru.say_and_wait(`앞에 있는 휴게소로 가자!`);
        await era.printAndWait(`그렇게 ${maru.name}는 휴게소에 차를 세웠다.`);
        era.println();
        await maru.say_and_wait(`괜찮아, 트레이너?`);
        await maru.say_and_wait(`마실 것 좀 사 올게.`);
        await era.printAndWait(
          `${maru.name}는 곧 차가운 음료 두 개를 들고 돌아왔다.`,
        );
        await maru.say_and_wait(`${callname}, ${you.name}, 이제 괜찮아?`);
        await era.printAndWait(
          `음료를 마시고 나자, ${maru.name}의 어지럼증은 서서히 가라앉았다.`,
        );
        await maru.say_and_wait(
          `이대로 이 ${maru.elder_sibling_sex_title} 무릎을 베고 쉬어.`,
        );
        await era.printAndWait(
          `${maru.name}는 살며시 ${you.name}의 머리를 자기 무릎 위에 올려놓았다.`,
        );
        await era.printAndWait(
          `${maru.sex}의 손가락이 ${you.name}의 피부에 닿으며 한 줄기 서늘한 감촉을 남겼다.`,
        );
        await maru.say_and_wait(
          `이게 무릎베개구나? 나도 처음이야. 속이 안 좋으면 이 ${
            maru.elder_sibling_sex_title
          }한테 말해 줘.`,
        );
        await era.printAndWait(
          `여성 특유의 향기가 머릿속을 자극하자, ${you.name}은(는) 어느새 몽롱한 상상 속에 잠겼다.`,
        );
        await maru.say_and_wait(
          `세 여신이시여, ${you.name}의 소원입니다. 잠깐이라도 이대로 있게 해 주세요. 의식이 사라지기 직전, ${you.name}은(는) 기도했다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  favourite_things: (() => {
    const title = '마루젠스키, 좋아하는 것을 말하다';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`오늘 ${maru.name}는 인터뷰를 받고 있었다.`);
      await you.say_as_passer_by_and_wait(
        '기자',
        `그럼 다음으로 승부복 이야기를 들려 주세요. 이 승부복에서 가장 마음에 드는 부분은 어디인가요?`,
      );
      await maru.say_and_wait(
        `불타는 듯한 빨간색을 제일 좋아하거든. 그래서 내 애차도 빨간색이야♪`,
      );
      await you.say_as_passer_by_and_wait('기자', `애차요?`);
      era.printButton(`${maru.name}의 차를 부르는 말이에요.`, 1);
      await maru.say_and_wait(`아, 미안해. 말이 길어졌네♪`);
      await maru.say_and_wait(
        `사실 어릴 때 모터쇼에 갔다가 새빨간 슈퍼카를 봤어. 그 멋진 모습에서 눈을 뗄 수가 없었지.`,
      );
      await maru.say_and_wait(
        `그때 나중에 차를 산다면 꼭 이걸로 하겠다고 다짐했어. 카탈로그 사진을 보며 운전하는 내 모습을 상상하고 열심히 노력했지.`,
      );
      await maru.say_and_wait(
        `지금은 그 꿈도 이루어졌어. 매일 애차를 타고 달리고 있지♪`,
      );
      await era.printAndWait(`인터뷰는 순조롭게 진행되었다……`);
      await you.say_as_passer_by_and_wait(
        '기자',
        `감사합니다. 그럼 마지막으로 사진 촬영도 부탁드려도 될까요?`,
      );
      await maru.say_and_wait(`알았어! 매력을 최대한 보여 줄게.`);
      await maru.say_and_wait(`맞다! 나를 제일 잘 아는 건 ${callname} 맞지?`);
      await maru.say_and_wait(
        `${you.name}, 오늘 촬영에서는 내 어떤 점을 돋보이게 하면 좋을까?`,
      );
      era.printButton('「누구도 따라올 수 없는 스피드」 (파워 +20)', 1);
      era.printButton('「언제나 여유로운 미소」 (스태미나 +20)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `그렇구나, 달리는 순간을 즐길 때 가장 눈부시다는 거네.`,
        );
        await maru.say_and_wait(
          `그럼 아예 애차 위에서 사진을 찍어 달라고 하자.`,
        );
        await era.printAndWait(
          `이후 기자까지 함께하게 된 드라이브에서, ${maru.name}의 얼굴에는 눈부시게 빛나는 표정이 떠올랐다.`,
        );
      } else {
        await maru.say_and_wait(
          `응, 맞아. 뭘 하든 가장 중요한 건 즐기는 거지.`,
        );
        era.printButton('「기대할게.」', 1);
        await era.input();
        await maru.say_and_wait(
          `맡겨 줘! ${you.name}의 기대에 보답해서, 정말 사랑스러운 미소를 보여 줄게!`,
        );
        await era.printAndWait(`기자: 좋아요! 아주 멋진 사진이 나왔습니다!`);
        await era.printAndWait(
          `며칠 뒤, ${maru.name}와 함께 인터뷰 기사를 확인하던 중이었다.`,
        );
        await maru.say_and_wait(
          `미소가 정말 잘 나왔네♪ 게다가 여기…… ${you.name} 이름도 실렸어.`,
        );
        await maru.say_and_wait(
          `음…… 「트레이너와의 유대에서 피어난, 인상적인 미소」라고 쓰여 있어!`,
        );
        era.printButton('「조금 쑥스럽네.」', 1);
        await era.input();
        await maru.say_and_wait(
          `그럴 것 없어. ${you.name}의 응원이 없었다면 이렇게 사랑스러운 미소도 지을 수 없었을 테니까.`,
        );
        await era.printAndWait(
          `사진 속에서도, 눈앞에서도, ${you.name}은(는) ${maru.name}의 눈부신 미소를 느낄 수 있었다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  beautiful_winner: (() => {
    const title = '멋지고 화려한 필승법!';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, rice, you) => {
      await era.printAndWait(
        `어느 날, ${you.name}과(와) ${maru.name}가 점심 회의를 하려고 옥상에서 식사하고 있을 때——`,
      );
      await era.printAndWait(`작게 우는 소리가 들렸다.`);
      await maru.say_and_wait(`어머——이 목소리는?`);
      await maru.say_and_wait(`여기서 뭐 하니, 라이스?`);
      await rice.say_and_wait('라이스…… 라이스는 아무 도움이 안 돼요.');
      await rice.say_and_wait(
        '모처럼 라이스를 경찰과 도둑 놀이에 끼워 줬는데……',
      );
      await rice.say_and_wait(
        '라이스만 아직 안 잡혔어요…… 친구는 라이스를 감싸 주다가 잡혀 버렸는데, 라이스는 어떻게 해야……',
      );
      await era.printAndWait(
        `라이스의 이야기를 들은 ${maru.name}와 ${you.name}은(는) 함께 아래를 내려다보았다. 안뜰 한가운데 감옥처럼 꾸며 놓은 곳이 있었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) ${maru.name}를 바라보았다. ${maru.sex}에게는 좋은 생각이 있는 모양이었다.`,
      );
      await maru.say_and_wait(`그럼, ${you.name}한테 필승법을 알려 줄까♪?`);
      await maru.say_and_wait(
        `체력으로 승부하는 A 작전과 지혜로 이기는 B 작전. ${you.name} 생각에는 어느 쪽이 좋을까?`,
      );
      await rice.say_and_wait('라이스…… 라이스도 모르겠어요……');
      await era.printAndWait(
        `라이스가 ${you.name}을(를) 발견했다. 구세주라도 만난 듯 ${you.name}을(를) 바라보았다.`,
      );
      await era.printAndWait(
        `${maru.name}는 ${you.name}의 대답을 기다리고 있었다.`,
      );
      era.printButton('「체력으로 승부하는 A 작전」 (스태미나 +10)', 1);
      era.printButton('「지혜로 이기는 B 작전」 (지능 +10)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`오케이! 그럼 A 작전이야!`);
        await maru.say_and_wait(
          `라이스, ${you.name}도 참는 건 잘하잖아? 그러니까 ${you.name}이(가) 걸어가서 상대가 ${
            you.name
          }의 존재를 알아차리게 한 다음, ${you.name}과(와) ${
            maru.sex
          }는 일정한 거리를 유지하는 거야. 상대의 체력이 다하면 멈출 수밖에 없겠지.`,
        );
        await rice.say_and_wait('그, 그런 걸…… 라이스가 할 수 있을까요?');
        await maru.say_and_wait(
          `당연히 할 수 있어! 라이스는 성실하고 열심히 노력하는 데다 의지도 강하잖아. 내가 자랑스러워하는 후배인걸!`,
        );
        await maru.say_and_wait(`분명 괜찮을 거야♪`);
        await rice.say_and_wait(
          `마루젠 ${
            maru.elder_sibling_sex_title
          }가 그렇게 말해 준다면, 라, 라이스…… 그, 해, 해 볼게요……!`,
        );
        await maru.say_and_wait(
          `후후♪ ${you.name} 덕분에 스태미나를 키울 트레이닝도 떠올랐네.`,
        );
        await era.printAndWait(
          `잠시 뒤, ${you.name}과(와) ${maru.name}는 동료들을 구해 내는 라이스의 작은 모습을 볼 수 있었다.`,
        );
      } else {
        await maru.say_and_wait(`오케이! 그럼 B 작전이야!`);
        await maru.say_and_wait(
          `간단히 말하면, 복잡한 곳으로 상대를 유인하는 거야. 학원 건물 같은 곳 말이지. 그리고 갈림길에서 따돌리는 거야!`,
        );
        await rice.say_and_wait('라, 라이스가 그런 걸 할 수 있을까요……!');
        await rice.say_and_wait('할 수 있어! 라이스는 생각하는 걸 잘하잖아?');
        await era.printAndWait(
          `${maru.name}는 그렇게 말하며 라이스의 손을 꼭 잡았다.`,
        );
        await maru.say_and_wait(
          `침착하게 잘 생각하면 라이스는 분명 괜찮을 거야! 그렇지?`,
        );
        await rice.say_and_wait('응…… 라이스…… 해 볼게요……!');
        await maru.say_and_wait(
          `……후후, 후배한테 그렇게까지 말했으니 이 ${
            maru.elder_sibling_sex_title
          }도 제대로 해야겠네.`,
        );
        await era.printAndWait(
          `잠시 뒤, ${you.name}과(와) ${maru.name}는 동료들을 구해 내는 라이스의 작은 모습을 볼 수 있었다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  memory: (() => {
    const title = '좋은 아침, 마루젠스키';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      maru.print(`얼굴에 내리쬐는 햇살에 마지못해 눈을 떴다.`);
      maru.print(`어젯밤에 너무 신나게 놀아서 지쳤나?`);
      await maru.say_and_wait(`으으——`);
      await era.printAndWait(`${maru.name}는 침대에서 눈을 떴다.`);
      await maru.say_and_wait(`후아암——`);
      await maru.say_and_wait(
        `침대에서 일어나기 싫어서, 한 손을 뻗어 알람을 더듬었다.`,
      );
      maru.print(
        `뜻밖에도, 평소 늦잠이라도 자면 ${
          callname
        }의 따가운 시선을 받는 것만큼이나 무섭던 알람이, 지금은 이사장이 학원에 심어 놓은 당근처럼 조용했다.`,
      );
      maru.print(`……아니, 아무리 생각해도 이상하지 않아?`);
      maru.print(`역시 어제 힘을 너무 줘서 실수로 망가뜨렸나?`);
      maru.print(`아니면——`);
      await maru.say_and_wait(`오늘은 쉬는 날인가?`, true);
      maru.print(`그 희소식에 만족하며 다시 잠들려다가——아니지!`);
      maru.print(`알람이 고장 난 거라면? 오늘은 무슨…… 무슨 요일이더라?`);
      maru.print(`지각해서 ${callname}한테 들키면……`);
      await maru.say_and_wait(`압박감이 엄청나!`, true);
      maru.print(`그렇게 몸을 일으키자, 잠이 덜 깬 몸에 찌릿한 감각이 퍼졌다.`);
      await maru.say_and_wait(`하아——암.`);
      maru.print(`몸이 저절로 반응했다.`);
      await era.printAndWait(
        `${maru.name}는 헝클어진 머리를 한 채 어디로 사라졌는지 모를 슬리퍼를 더듬어 찾으며, 흐릿한 시야로 침대에서 내려왔다.`,
      );
      era.drawLine();
      maru.print(
        `꿈과 현실 사이를 헤매던 나는 차가운 물줄기에 의해 세 여신의 에덴에서 산 채로 끌려 나왔다.`,
      );
      maru.print(
        `드라이어로 머리를 대충 말린 뒤, 아직 물이 떨어지는 머리카락을 수건으로 감싸고 욕실을 나왔다.`,
      );
      maru.print(`꿀꺽꿀꺽, 하아~`);
      maru.print(
        `커피 우유 한 병을 단숨에 마시고 나니, 기분도 들뜨기 시작했다♪`,
      );
      await maru.say_and_wait(`이제 뭘 할까?`);
      maru.print(`쉬는 날인 오늘은 후배들도 놀러 나갔겠지.`);
      maru.print(`휴일의 트레센은 조금 쓸쓸하네.`);
      await maru.say_and_wait(`${callname}——`);
      maru.print(`가슴 깊은 곳에서 어떤 감정이 조용히 피어올랐다.`);
      maru.print(`낯설면서도 묘하게 그리운 달콤한 감각이 가슴으로 밀려왔다.`);
      maru.print(
        `${callname}이(가) 이 세상에서 사라진다 해도, 이 두근거림은 잊지 못하겠지.`,
      );
      await maru.say_and_wait(`그럼 오늘은 트레이닝실에 가 봐야겠네.`);
      await era.printAndWait(
        `스스로를 낮추면서도 누구보다 승부욕이 강한 ${callname}(이)라면, `,
      );
      await era.printAndWait(
        `지금 이 순간에도 트레이닝실에서 다음 레이스를 고민하며 진하고 쓴 커피를 마시고 있을 것이다.`,
      );
      await maru.say_and_wait(
        `그렇다면 쩔쩔매고 있을 ${maru.sex}를 그 괴로운 고민에서 꺼내 줘야겠네.`,
      );
      await era.printAndWait(`${maru.name}는 트레이닝실 문 앞에 도착했다.`);
      await era.printAndWait(
        `최근에 알게 된 「갑자기 문을 열어 놀라게 하기」라는 유행을 따라, 문을 열고 큰 소리로 도착을 알렸다.`,
      );
      await era.printAndWait(
        `${
          callname
        }이(가) 당황한 얼굴로, 방금 놀라는 바람에 소파 밑으로 날아간 리모컨을 더듬어 찾고 있었다.`,
      );
      await era.printAndWait(
        `${maru.name}는 작은 가방 안에 든, ${
          callname
        }하고 노래방에서 찍은 사진을 떠올렸다. 술을 많이 마신 ${
          callname
        }의 사랑스러운 보조개를 침대 위에서 몇 번이나 뒤척이며 들여다보았는지 모른다.`,
      );
      await era.printAndWait(`날씨가 맑아서 그런지도 몰랐다.`);
      await era.printAndWait(
        `${maru.name}는 물을 듬뿍 머금고 반짝이는 당근 같았다.`,
      );
      await era.printAndWait(
        `내일의 ${maru.sex}도 여느 때처럼 이 독특한 느낌으로 모두에게 힘을 줄 것이다.`,
      );
      await era.printAndWait(
        `그런 미래를 동경하며, ${maru.name}는 새로운 하루를 맞이했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  teacher_sister: (() => {
    const title = '가르쳐 주세요, 마루젠스키 선생님!';
    /**
     * トレーナーが学びたいものに興味が湧かず、マルゼンスキーが指導する
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`어느 휴일 아침.`);
      await era.printAndWait(
        `${you.name}은(는) 사무용 책상에 엎드린 채 아무것도 하고 싶지 않았다.`,
      );
      await era.printAndWait(
        `트레센에 들어온 뒤로 어쩐지 학창 시절의 의욕이 한순간에 사라져 버렸다.`,
      );
      await era.printAndWait(
        `${maru.name}와 교류하며 예전의 감각을 조금씩 되찾고는 있었지만, 여전히 무기력함이 마음에 걸렸다.`,
      );
      await you.say_and_wait(`평소에도 이렇게 고생하는데, 오늘은 푹 쉬자.`);
      await maru.say_and_wait(`${callname}, 들어갈게♪`);
      await era.printAndWait(
        `그런 핑계로 게으름을 피우려던 순간, ${maru.name}가 문을 열고 들어왔다.`,
      );
      await era.printAndWait(
        `우연이라고 해야 할까, ${maru.name}는 마침 기분이 좋아 보였다.`,
      );
      await maru.say_and_wait(`그럼 ${callname}한테 제대로 설명해 줘야겠네.`);
      await you.say_and_wait(
        `${maru.name}한테 상담하면 새로운 관점이 생길지도 몰라.`,
        true,
      );
      await era.printAndWait(
        `한번 해 보자는 마음으로, ${you.name}은(는) ${maru.name}에게 마음속 고민을 털어놓았다.`,
      );
      await maru.say_and_wait(`음——그런 거였구나.`);
      await era.printAndWait(
        `${maru.name}는 살며시 웃으며 구석에 있던 작은 칠판을 꺼냈다.`,
      );
      await maru.say_and_wait(`그럼 이 누나의 생각을 들려줄게.`);
      await era.printAndWait(
        `${maru.name}는 칠판 왼쪽에 자신을 본뜬 작은 캐릭터를 그렸다.`,
      );
      await maru.say_and_wait(
        `하지 않으면 후회할 일을 앞에 두고도, 도무지 의욕이 나지 않을 때 있지?`,
      );
      await era.printAndWait(
        `칠판 오른쪽에는 고민거리인 과제, 순위, 댄스를 적고 동그라미로 둘러쌌다.`,
      );
      await maru.say_and_wait(
        `중요하다는 건 알아. 하지 않으면 가까운 사람들을 대할 때 초조하고 두려워지지.`,
      );
      await era.printAndWait(
        `${maru.sex}는 설명하면서 작은 캐릭터 위에 먹구름을 그려 넣었다.`,
      );
      await maru.say_and_wait(
        `후회하고 초조해하며 지내는 거야. 그런데 그렇게 지내도 어떻게든 버틸 수 있는 것 같지?!`,
      );
      await era.printAndWait(
        `두 그림 아래에는 작은 캐릭터가 트레이너에게 사과하는 모습을 그렸다.`,
      );
      await maru.say_and_wait(
        `다음에 같은 일이 생겨도 후회하는 표정을 지으면 주변에서는 더 말하지 않아. 결국 모두가 적당히 받아들일 만한 상태에 머무르게 되지.`,
      );
      await era.printAndWait(
        `세 그림을 차례로 화살표로 연결하자 하나의 순환이 만들어졌다.`,
      );
      await maru.say_and_wait(`${callname}, 어떻게 생각해?`);
      era.printButton(`정작 문제는 해결되지 않았잖아?`, 1);
      await era.input();
      await you.say_and_wait(
        `상황이 나빠지고, 주변에서 ${you.name}에게 압박을 주고, 본인은 후회하는 표정을 짓고, 주변에서는 어쩔 수 없이 포기하는 거지. 이 순환 속에서 정작 해결되지 않은 건 문제 그 자체잖아?`,
      );
      await you.say_and_wait(
        `원래 의욕을 불태울 연료가 되어야 했던 걸 후회하는 표정으로 꺼 버리니까, 상황은 더 나쁜 쪽으로 흘러가.`,
      );
      await you.say_and_wait(
        `상황이 심각해질수록 이 후회의 순환은 유지되는 데 그치지 않고 오히려 강해지는 거야.`,
      );
      await era.printAndWait(
        `8분쯤 생각한 뒤, ${you.name}은(는) 망설이며 답을 내놓았다.`,
      );
      await maru.say_and_wait(
        `맞아. 이 순환 자체는 문제를 해결하지 않아. 해결한 듯한 기분만 줄 뿐이지. 당사자는 다음 주에 시험이 있다는 걸 알면서도, 아직 시간이 있으니 오락실에 가는 학생과 다를 게 없어.`,
      );
      await maru.say_and_wait(
        `결국 아픈 게 무서워서 진통제로 감각을 마비시키는 것뿐이야.`,
      );
      await maru.say_and_wait(`그러니까 행동할 동기를 찾아야 해.`);
      await era.printAndWait(
        `정답이었던 모양이다. ${maru.sex}의 얼굴에 꽃 같은 미소가 피어났다.`,
      );
      await maru.say_and_wait(
        `원주율을 소수점 일곱째 자리까지 정확히 구하는 데, 인류 문명은 적어도 이천 년을 썼어.`,
      );
      await maru.say_and_wait(`무리수를 이해하는 데는 천 년.`);
      await maru.say_and_wait(
        `이원방정식, 삼각함수, 로그, 계승. 모두 인류가 수천 년 동안 함께 탐구하며 조금씩 도달한 학문의 성과야.`,
      );
      await era.printAndWait(
        `지우개로 앞서 그린 그림을 지운 뒤, 거대한 수정 당근을 그렸다.`,
      );
      await maru.say_and_wait(
        `고작 여덟 해를 공부해서 그 성과를 자유롭게 쓸 수 있다니, 정말 대단한 성취라고 할 수 있지.`,
      );
      await maru.say_and_wait(
        `아주 영리하고 운도 좋은 사람은 순위와 주변의 칭찬을 연료 삼아, ${maru.sex} 나름의 속도로 그걸 더 빨리 터득해.`,
      );
      await era.printAndWait(`작은 캐릭터가 드릴로 금세 수정 당근을 찾아냈다.`);
      await you.say_and_wait(`오래 걸려도 이해하지 못하면 어떡해?`);
      await maru.say_and_wait(`그게 뭐 어때서?`);
      await era.printAndWait(`${maru.name}는 눈을 깜박였다.`);
      await maru.say_and_wait(
        `${callname}의 목표는 이 문명의 유산을 온전히 받아들이는 거야. 얼마나 걸리든 결국 배워 냈다면 대성공이지.`,
      );
      await you.say_and_wait(`이해가 안 되는 공식을 만나면 어떻게 해야 할까?`);
      await maru.say_and_wait(
        `가장 좋은 건 관련된 배경지식과 역사를 읽어 보는 거야. 그 지적 성과가 당시 어떤 역사적 과정을 거쳐 탄생했는지 거슬러 올라가는 거지.`,
      );
      await era.printAndWait(
        `칠판 속 작은 캐릭터는 광물 지식을 찾아보고 경험 많은 선배에게 물었다.`,
      );
      await maru.say_and_wait(
        `그러면 이해하기 쉬워질 뿐만이 아니야. 올바른 역사 인식은 ${you.name}이(가) 사회에 대한 왜곡된 상상에서 비롯된 그릇된 가치 판단을 떨쳐 내도록 도와줄 거야.`,
      );
      await maru.say_and_wait(
        `의욕이 없는 근본적인 이유는 언제나 가치를 잘못 판단하는 데 있으니까.`,
      );
      await era.printAndWait(`수정 당근이 반짝이기 시작했다.`);
      await maru.say_and_wait(
        `역사적으로 중요하고 귀한 것 주변에는 자연히 거대한 산업과 생태계가 생겨나.`,
      );
      await era.printAndWait(
        `작은 캐릭터들이 여신의 제단을 둘러싸고 그 위에 수정 당근을 올렸다.`,
      );
      await maru.say_and_wait(
        `그 거대한 산업과 생태계가 지식의 가치를 뒷받침하고, 그 지식을 잘 아는 사람에게 기회와 두둑한 보상을 주는 거지.`,
      );
      await era.printAndWait(
        `이야기 끝에서 세 여신은 작은 캐릭터에게 당근을 산더미처럼 선물했다.`,
      );
      await maru.say_and_wait(
        `그러니까 배움은 아주 큰 보상을 얻을 수 있는 기회야.`,
      );
      await you.say_and_wait(`그렇구나. 고마워요, ${maru.name} 선생님!`);
      await maru.say_and_wait(
        `어머~ ${callname}, 너무 깍듯하게 구는걸. ${callname}한테 도움이 됐다면 이 ${maru.elder_sibling_sex_title}가 제일 기쁜 사람이지.`,
      );
      await era.printAndWait(
        `${you.name}에게 도움이 된 것을 진심으로 기뻐하는 ${maru.name}의 주변에 무지개가 떠오른 듯했다.`,
      );
      await era.printAndWait(`뜻깊은 하루를 보냈다.`);
    };
    f.title = title;
    return f;
  })(),
  find_love: (() => {
    const title = '마루젠스키와 황혼의 바닷가에서 노을을 보다';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`어느 날, 트레이닝을 마친 뒤.`);
      era.printButton(
        '「좋아, 오늘 트레이닝 계획은 전부 마쳤어. 수고했어.」',
        1,
      );
      await maru.say_and_wait(
        `후후, 바람결과 잔디 향기를 느끼니 나도 기분이 좋아지네♪`,
      );
      await era.printAndWait(
        `${maru.name}가 기지개를 켰다. 완벽한 몸의 곡선이 ${you.name}의 뇌리에 깊이 새겨졌다.`,
      );
      await maru.say_and_wait(
        `후우——트레이닝을 하고 나니 조금 피곤하네. ${
          callname
        }, ${maru.elder_sibling_sex_title}하고 같이 찻집에 가 줄래?`,
      );
      era.printButton('「물론이지」', 1);
      await era.printAndWait(
        `신사로서(변태이기는 하지만) 성숙한 숙녀의 부탁을 거절할 도리는 없었다. 두 사람은 ${maru.name}가 가장 좋아하는 찻집 근처에 도착했다.`,
      );
      await era.printAndWait(
        `황혼빛이 드리운 나무 그늘을 걷고, 잡초가 자란 정원을 지나 이 층으로 올라간 끝에 겨우 찻집 입구를 찾았다.`,
      );
      await era.printAndWait(
        `주인은 말수가 적은 노인인 듯했다. 블라인드 사이로 들어오는 빛 아래에서는 등이 더욱 굽어 보였다. 세월은 돌이킬 수 없는 흔적을 남겼지만, 커다란 손만큼은 여전히 능숙하고 힘이 있었다.`,
      );
      await era.printAndWait(
        `${maru.name}는 익숙하게 주문하고 잠시 담소를 나눈 뒤, 화제를 돌려 ${you.name}을(를) 소개했다.`,
      );
      await era.printAndWait(
        `주인은 하던 일을 멈추고 ${you.name}을(를) 찬찬히 살폈다. ${you.name}의 몸이 저절로 꼿꼿해졌다.`,
      );
      await era.printAndWait(
        `노인은 고개를 끄덕였다. ${you.name}을(를) 인정한 듯 조금 낡았지만 여전히 깨끗한 메뉴판을 ${you.name}에게 건넸다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) 무엇을 주문할지 고민하고 있을 때, ${maru.name}가 ${you.name}에게 말을 걸었다.`,
      );
      await maru.say_and_wait(`${callname}, 이런 가게는 처음이지?`);
      await maru.say_and_wait(
        `주인아저씨가 조금 고집스럽기는 해도 좋은 분이야! 솜씨는 말할 것도 없고. 여기서 과일 선데를 안 먹어 보면 아깝지♪`,
      );
      era.printButton('「과일 선데 하나 주세요」', 1);
      await era.printAndWait(
        `낡은 축음기에서 지난 세기에 유행하던 재즈가 흘러나왔다. 황혼 속에서 서로 다른 시간이 교차하는 듯 아름다운 분위기였다.`,
      );
      era.printButton(
        '「(여기는 시간이 다른 곳보다 천천히 흐르는 것 같아)」',
        1,
      );
      await maru.say_and_wait(`${callname}, 과일 선데 나왔어.`);
      await era.printAndWait(
        `${maru.name}의 말에 ${you.name}은(는) 현실로 돌아왔다. 나무 쟁반 위의 정교한 선데에는 스푼 두 개가 꽂혀 있었다.`,
      );
      era.printButton('(주인아저씨가 일부러 이렇게 놓은 건가)', 1);
      await maru.say_and_wait(`${callname}, 내가 ${you.name}한테 먹여 줄까?`);
      await era.printAndWait(
        `${maru.name}의 등 뒤로 비스듬히 내리쬐는 빛이 ${
          maru.sex
        }의 표정을 가렸다. 쉴 새 없이 움직이는 귀는 ${maru.sex}의 마음이 평온하지 않다는 신호 같았다.`,
      );
      await era.printAndWait(
        `${maru.name}는 ${you.name}의 대답을 기다리고 있었다.`,
      );
      era.printButton('(말없이 입을 벌린다)(지능+20)', 1);
      era.printButton('「미안해, 아직 일이 남아 있어」(근성+20)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${maru.name}가 선데 한 숟갈을 ${you.name}의 입에 넣어 주었다. 차가운 감촉이 순간 머릿속을 채운 뒤, 부드럽고 섬세한 맛이 뒤따랐다.`,
        );
        await era.printAndWait(
          `${you.name}이(가) 입을 열어 칭찬하려는 순간, 풋풋함과 달콤함이 ${you.name}의 입안 가득 퍼졌다.`,
        );
        await maru.say_and_wait(`${callname}, 맛은 어때?`);
        era.printButton('「정말 맛있어」', 1);
        await era.input();
        await maru.say_and_wait(`정말! 그럼 ${you.name}도 나한테 먹여 줄래?`);
        await maru.say_and_wait(`아~앙`);
        await era.printAndWait(
          `${maru.name}가 ${you.name}의 행동을 재촉했다. 양쪽 귀가 더욱 세차게 흔들렸다.`,
        );
        era.printButton('「할 수밖에 없네!」', 1);
        await era.input();
        await era.printAndWait(
          `${you.name}은(는) 가슴속 흥분을 가라앉히려 애쓰며 선데를 크게 한 숟갈 떴다. 떨리는 손으로 ${maru.sex}의 앵두 같은 작은 입에 넣어 주었다.`,
        );
        await era.printAndWait(
          `${maru.sex}의 하얗고 고른 치아에도 깊은 정이 어려 있는 듯했다.`,
        );
        await maru.say_and_wait(
          `정말 맛있네⭐ ${callname}, 다음에는 내가 ${you.name}한테 먹여 줄게♪`,
        );
        await era.printAndWait(
          `입가가 살짝 움푹 들어간 ${maru.sex}의 얼굴에 희미한 미소가 떠올랐다.`,
        );
        await era.printAndWait(
          `그 뒤 ${you.name}과(와) ${maru.sex}는 말없이 서로에게 선데를 먹여 주었다. ${you.name}이(가) 한 숟갈을 건네면 상대도 한 숟갈을 건넸다.`,
        );
        await era.printAndWait(
          `황혼이 가져온 옅은 쓸쓸함은 ${maru.sex}의 모습에 희석된 듯했다.`,
        );
        await maru.say_and_wait(
          `같이 바닷가로 드라이브 안 갈래? 애차도 의욕이 넘치는 것 같은데♪`,
        );
        await era.printAndWait(
          `${maru.sex}는 기대에 찬 눈으로 ${you.name}을(를) 바라보았다.`,
        );
        era.printButton('「출발하자」', 1);
        await era.input();
        await era.printAndWait(`후후♪ ${callname}도 그렇게 말할 줄 알았어.`);
        await maru.say_and_wait(`그럼 지금 바로 출발!`);
        await era.printAndWait(
          `말없는 주인은 음식과 음료를 치운 뒤, ${you.name}을(를) 유심히 바라보았다.`,
        );
        await era.printAndWait(
          `잠시 후, ${you.name}에게 고개를 끄덕였다. 인정해 준 듯했다.`,
        );
        await maru.say_and_wait(`${callname}, 출발하자!`);
        await era.printAndWait(
          `${maru.name}가 입구에서 조용히 ${you.name}을(를) 재촉했다.`,
        );
        await era.printAndWait(
          `${you.name}이(가) 지갑에서 우마코인을 꺼내 계산하려 하자, 주인은 가볍게 고개를 저으며 유리잔을 계속 닦았다.`,
        );
        era.printButton('「……감사합니다」', 1);
        await era.input();
        await era.printAndWait(`그리고 ${you.name}이(가) 나가려던 순간, `);
        await era.printAndWait(
          `주인: 손님, ${you.name} 곁의 그 아가씨와 좋은 시간 보내세요.`,
        );
        await era.printAndWait(
          `낮고 깊은 목소리가 ${you.name}의 왼편에서 들렸다. ${you.name}은(는) 놀라 돌아보았다. 주인은 진지한 얼굴에 옅은 미소를 띤 채 ${you.name}을(를) 바라보고 있었다.`,
        );
        await era.printAndWait(
          `주인: 저희도 이제 문을 닫습니다. 더 필요한 게 있으신가요?`,
        );
        await era.printAndWait(
          `그렇게 ${you.name}은(는) 뒤돌아보지 않고 가게를 나와, ${maru.name}가 기다리는 입구로 향했다.`,
        );
        await maru.say_and_wait(
          `${callname}, 왜 이렇게 오래 걸렸어? ${you.name} 데리고 나가야겠네. 여기는 길을 잘 아는 사람이 안내해 주지 않으면 헤매기 쉬워!`,
        );
        await era.printAndWait(
          `이리 꺾고 저리 돌아 상점가의 인파 속으로 나오게 되리라고는 ${you.name}도 예상하지 못했다. 이윽고 애차에 오른 ${you.name}은(는) ${maru.name}와 이야기를 나누기 시작했다.`,
        );
        await maru.say_and_wait(
          `흥흥♪ 이 ${maru.elder_sibling_sex_title}의 안목도 나쁘지 않지? 엄마가 추천해 준 가게야!`,
        );
        era.printButton('「주인아저씨가 꽤 연세가 있어 보이시던데」', 1);
        await era.input();
        await maru.say_and_wait(
          `그 가게를 삼십 년이나 하셨으니까. 어릴 때부터 부모님이랑 가서 커피와 디저트를 먹곤 했어.`,
        );
        await maru.say_and_wait(`엄해 보이셔도 사실은 정말 좋은 분이야!`);
        await era.printAndWait(
          `그렇게 이야기를 주고받으며 산을 두르는 고속도로로 들어서자, 차들이 점점 뜸해졌다.`,
        );
        await maru.say_and_wait(
          `이렇게 트레이너랑 애차를 타고 드라이브하는 기분, 정말 최고야. 신나는 비트에 몸을 맡기면 기분도 단숨에 올라가지!`,
        );
        await era.printAndWait(
          `${maru.name}의 귀가 격렬한 리듬에 맞춰 박자를 탔다. ${you.name}은(는) ${maru.sex}의 리듬을 조금 따라가기 힘들어졌다.`,
        );
        await era.printAndWait(
          `한 세기는 지난 듯한 시간이 흐른 뒤에야 격렬한 리듬이 잦아들었다. 애차가 고속도로를 벗어나자 ${you.name}은(는) 겨우 한숨을 돌렸다.`,
        );
        await maru.say_and_wait(
          `후후♪ 바람결이 뺨을 스치는 느낌, 가슴이 벅차오르네. 애차도 기분 좋은가 봐♪`,
        );
        await maru.say_and_wait(`……${callname}, ${you.name}, 괜찮아?`);
        await era.printAndWait(
          `${maru.name}가 속도를 늦추자, ${you.name}의 영혼은 겨우 세 여신 곁에서 제 몸으로 돌아왔다.`,
        );
        await maru.say_and_wait(
          `미안해, 트레이너 상태를 생각 못 했네. 이 ${maru.elder_sibling_sex_title}답지 않은 실수였어.`,
        );
        await era.printAndWait(
          `${maru.name}의 양쪽 귀가 처졌다. 미안함과 걱정이 뒤섞인 복잡한 시선이 ${you.name}에게 향했다.`,
        );
        era.printButton('「그렇지 않아. 바람을 느낄 수 있어서 나도 기뻐」', 1);
        await era.input();
        await era.printAndWait(
          `${maru.name}의 귀는 금세 다시 쫑긋 섰고, 차내 스피커에서 흘러나오는 shoreline에 맞춰 씰룩거리며 박자를 탔다.`,
        );
        await maru.say_and_wait(
          `트레이너는 정말 다정한 사람이네. 이 ${maru.elder_sibling_sex_title}도 ${you.name}을(를) 좋아하게 된 건 옳은 선택이었다고 생각해♪`,
        );
        await maru.say_and_wait(
          `그런데 ${callname}, 매일 그렇게 많은 애들을 담당해도 몸은 괜찮아?`,
        );
        era.printButton('「고개를 젓는다」', 1);
        await era.input();
        await maru.say_and_wait(
          `응응, 그러면 다행이지. 트레이너도 정말 힘든 직업이네.`,
        );
        await maru.say_and_wait(
          `그래도 애들이 조금씩 미숙한 껍질을 벗고 성장하며 자기 꿈을 쫓는 모습을 보면, 말로 표현하기 힘든 감동과 기쁨이 있어.`,
        );
        await maru.say_and_wait(
          `트레이너와 ${maru.uma_sex_title}의 관계는 스승과 제자 같은 걸지도 모르겠네.`,
        );
        await maru.say_and_wait(
          `처음의 거리감과 탐색이 친밀함과 신뢰로 바뀌고, 삼 년간의 목표를 마치고 나면, `,
        );
        await maru.say_and_wait(
          `스승인 트레이너와 제자인 ${maru.uma_sex_title} 사이에는 아주 깊은 유대가 쌓여. 그 유대가 힘이 되어 기적을 일으키고, 두 사람은 더 큰 목표를 향해 나아가는 거지.`,
        );
        era.printButton(
          `「트레이너로서, 담당 ${maru.uma_sex_title}가 목표를 향해 순조롭게 나아가기를 진심으로 바라」`,
          1,
        );
        await era.input();
        era.printButton(
          '「거기서 한 걸음 더 나아갈 수 있다면, 세 여신의 축복이겠지」',
          1,
        );
        await era.input();
        await maru.say_and_wait(
          `후후♪ 트레이너, 재미있는 대답이네. ${maru.uma_sex_title}인 나도 이번 삼 년 동안 ${callname}하고 더 멋진 추억을 쌓고 싶어.`,
        );
        await maru.say_and_wait(
          `그럼 앞으로도 잘 부탁해, ${you.sex_code !== 1 ? '트・레・이・너・쨩' : '트・레・이・너・군'}♪`,
        );
        await era.printAndWait(
          `하늘 동쪽은 태양에 주황빛으로 물들었지만 머리 위는 아직 짙푸르렀다. 태양과 별이 만나는 그 빛의 변화는 아무리 보아도 질리지 않았다.`,
        );
        await era.printAndWait(`${you.name}은(는) 저도 모르게 하품했다.`);
        await maru.say_and_wait(
          `트레이너, 졸리면 조수석에서 조금 자도 돼. 바닷가에 도착하면 나랑 애차가 ${you.name} 깨워 줄게.`,
        );
        await era.printAndWait(
          `이미 지쳐 있던 몸은 안심시키는 말을 듣자 짐을 내려놓듯 눈을 감았다. 부드러운 산들바람과 마루젠에게서 전해지는 은은한 향기를 만끽했다.`,
        );
        await era.printAndWait(
          `이미 지쳐 있던 몸은 안심시키는 말을 듣자 짐을 내려놓듯 눈을 감았다. 부드러운 산들바람과 마루젠에게서 전해지는 은은한 향기를 만끽했다.`,
        );
        era.println();
        era.println();
        era.println();
        await era.printAndWait(`십 분 뒤`);
        await maru.say_and_wait(`도착했어, ${callname}, 일어나.`);
        await era.printAndWait(
          `아직 졸린 눈을 비비고 무심코 만족스러운 하품을 하며, ${you.name}은(는) 기절한 듯한 감각에서 서둘러 벗어나려 했다.`,
        );
        await era.printAndWait(
          `파도가 암초에 부딪혀 속삭이는 물보라로 부서졌다. 밀물은 바다의 선물을 가져왔고, 불가사리와 조개껍데기는 썰물 속으로 조용히 사라졌다.`,
        );
        await era.printAndWait(`달이 빛나는 별들에 둘러싸여 높이 떠올랐다.`);
        await era.printAndWait(`지금의 바다는 파도 소리 속에서 더욱 고요했다.`);
        await era.printAndWait(
          `두 사람은 차 문을 닫고 해변으로 향했다. 바다는 연인들에게 다정한 모습을 보여 주고 있었다.`,
        );
        await era.printAndWait(`고요하네, ${callname}도 그렇게 생각하지?`);
        await maru.say_and_wait(`고요하네, ${callname}도 그렇게 생각하지?`);
        await era.printAndWait(
          `${maru.name}는 하이힐을 벗고 맨발로 파도 속을 향했다.`,
        );
        await maru.say_and_wait(`${callname}도 바닷물의 입맞춤을 느껴 봐.`);
        await era.printAndWait(
          `${you.name}은(는) ${maru.name}의 권유에 따라 신발을 벗고 천천히 파도 쪽으로 걸어갔다.`,
        );
        await era.printAndWait(
          `바닷물이 물거품을 하나하나 휘감았다. 물거품은 아이들처럼 장난치며 밀려와 부드러운 모래사장을 섬세하게 어루만지고는, 아쉬운 듯 물러났다.`,
        );
        await era.printAndWait(
          `끝없이 이어지는 손길에 모래사장에는 은빛 선이 겹겹이 그어졌다. 달빛 아래 바다가 반짝이는 은색 액자에 담긴 듯했다.`,
        );
        await era.printAndWait(`자연이야말로 최고의 화가였다. `);
        await era.printAndWait(
          `${maru.name}는 왼손으로 치맛자락을 살짝 들어 올리고, 자연스럽게 몸을 반쯤 ${you.name} 쪽으로 돌렸다. 달빛은 ${
            maru.sex
          }에게 범접할 수 없는 성스러운 겉옷을 입혔다. 파도가 암초를 때리며 일으킨 물안개는 아스라한 매력을 더했고, 끊임없는 파도는 마음속 일렁임을 비추는 듯했다.`,
        );
        await era.printAndWait(
          `${
            maru.sex
          } 자신도 모르고 있을지 모른다. 자연의 보이지 않는 붓끝에서, 자신이 이 은빛 액자 속 유화의 주인공이 되었다는 것을.`,
        );
        await maru.say_and_wait(`달이 아름답네, ${callname}.`);
        era.printButton('「바람도 다정하네」', 1);
        await era.input();
        await maru.say_and_wait(`후후♪ ${callname}, 말도 잘하네.`);
        await era.printAndWait(
          `이야기를 나누는 사이, ${you.name}은(는) ${maru.name}의 허리를 살며시 감싸 안았다. ${
            maru.sex
          }는 감전된 듯 한 차례 몸을 떨었지만, ${you.name}의 행동을 거부하지 않았다.`,
        );
        await maru.say_and_wait(
          `${callname}, 허락도 없이 숙녀를 갑자기 끌어안으면 어떤 벌을 받을지 생각해 봤어?`,
        );
        await era.printAndWait(
          `푸른 눈동자에는 묘한 이끌림이 있었다. ${maru.sex}가 ${you.name}을(를) 바라보면, ${you.name}은(는) 눈을 떼기 힘들었다. 하지만 부담스럽지는 않았다.`,
        );
        await era.printAndWait(
          `천변만화하는 바람의 요정처럼, ${maru.sex}는 하늘의 빛이며 소리, 바다와 땅의 향기였다.`,
        );
        era.printButton('「!?」', 1);
        await era.input();
        await era.printAndWait(`${you.name}의 입술에 다정한 감촉이 닿았다.`);
        await maru.say_and_wait(
          `정말, ${
            callname
          }도 조금은 솔직해지면 좋을 텐데. 이럴 때는 먼저 움직여 줘야지, 애가 타잖아.`,
        );
        await era.printAndWait(
          `처음에는 탐색하듯 가볍게 닿았다가 점점 리듬이 빨라지고, 마침내 깊은 입맞춤으로 이어졌다. ${you.name}이(가) 숨을 쉬기 힘들어질 때에야 아쉬운 듯 떨어졌다.`,
        );
        await era.printAndWait(
          `두 사람의 입술 사이로 은빛 실이 늘어졌다. ${
            maru.sex
          }는 한없는 사랑과 다정함이 어린 얼굴로 ${you.name}을(를) 바라보았다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 무심코 ${maru.sex}를 꼭 끌어안았고, ${
            maru.sex
          }도 ${you.name}의 뺨을 살며시 쓰다듬으며 응답했다.`,
        );
        await era.printAndWait(
          `차가운 바닷물 속에서, 등대 같은 온기만이 오래도록 남아 있었다.`,
        );
      } else {
        era.printButton('「미안해, 아직 일이 남아 있어」', 1);
        await era.input();
        await maru.say_and_wait(
          `어머, 그럼 얼른 처리하고 와. ${callname}, 열심히 일해야 마지막 보상도 받는 거야.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 말없이 가방을 집어 들고 뒤돌아보지 않은 채 찻집을 나섰다. 하지만 곧 구불구불한 골목에서 길을 잃고 말았다.`,
        );
        await era.printAndWait(
          `마지막에는 친절한 아저씨의 차를 얻어 타고, ${you.name}은(는) 통금 전에 겨우 기숙사로 돌아왔다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  dream: (() => {
    const title = '꿈과 현실 사이의 사슴';
    /**
     * 虚ろで迷離、得失は定まらず、夢のようにぼんやりした状態の喩え。
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      maru.print(
        `눈을 떴을 때는 잔디 위에 누워 있었다. 주변의 꽃밭은 곁의 풀밭에서 지평선 끝까지 이어져 있었다.`,
      );
      maru.print(`평소라면 즐거운 마음으로 꽃밭을 거닐었을지도 모른다.`);
      maru.print(`하지만 어째서인지 출구를 찾고 싶다는 마음이 더 강했다.`);
      await maru.say_and_wait(`그런데 어느 쪽으로 가야 하지?`);
      era.printButton(`「가시가 돋친 장미 덤불」`, 1);
      era.printButton(`「높은 관목으로 이루어진 미로」`, 2);
      if ((await era.input()) === 1) {
        maru.print(`내가 한 모든 일은 너를 괴롭히기 위해서였을까?`);
        maru.print(`가시덤불을 헤치는 순간, 귓가에서 한숨이 들린 듯했다.`);
        maru.print(
          `앞으로 갈수록 가시덤불은 빽빽해졌고, 헤쳐 나가는 데 더 많은 힘이 들었다.`,
        );
        maru.print(`게다가 뒤쪽 길은 어느새 막혀 있었다.`);
        await maru.say_and_wait(`돌아갈 길은 없네.`);
        maru.print(`몸도 위기를 느낀 듯 가늘게 떨리고 있었다.`);
        maru.print(
          `평범한 인간이나 조금 약한 ${maru.uma_sex_title}라면, 햇빛 한 줄기 보이지 않는 이 감옥에서 길을 잃을지도 모른다.`,
        );
        maru.print(
          `점점 팔에 힘이 들어가지 않았다. 땀이 피부를 타고 흘러 땅에 떨어지면, 관목이 그것을 빨아들였다.`,
        );
        maru.print(`하지만 어디를 보아도 출구는 없었다.`);
        await you.say_as_passer_by_and_wait(
          `장미들`,
          `그래도 포기하지 않을 거야?`,
        );
        maru.print(`관목 사이에서 속삭임이 들렸다.`);
        await maru.say_and_wait(
          `바깥세상은 생각보다 풍요롭고 아름답잖아? 이런 데 옷자락이 붙잡힌 채로 있으면 아깝지 않겠어?`,
        );
        await you.say_as_passer_by_and_wait(
          `장미들`,
          `그렇구나, 알겠어. 절망적인 상황이니까 낙관적으로 맞서는 거네.`,
        );
        maru.print(`속삭임이 점점 커졌다.`);
        await you.say_as_passer_by_and_wait(
          `환영의 목소리`,
          `이제 힘이 없잖아. 너는 더 이상 힘이 없어.`,
        );
        await you.say_as_passer_by_and_wait(
          `환영의 목소리`,
          `숨소리를 필사적으로 억누르고 있지만, 난 이미 눈치챘는걸?`,
        );
        await you.say_as_passer_by_and_wait(
          `환영의 목소리`,
          `말투는 태연해도 속으로는 조급하고 불안하잖아?`,
        );
        await you.say_as_passer_by_and_wait(
          `환영의 목소리`,
          `사실은 네가 생각하는 만큼 그 트레이너를 용서하지 못했지?`,
        );
        await you.say_as_passer_by_and_wait(
          `환영의 목소리`,
          `당장은 의지로 억눌렀어도, 의심의 씨앗은 이미 심어졌잖아?`,
        );
        await you.say_as_passer_by_and_wait(
          `환영의 목소리`,
          `그러니 그를 용서할 필요……`,
        );
        await maru.say_and_wait(`응…… 알고 있어.`);
        await maru.say_and_wait(`${callname}의 배신은 분명 무척 슬펐어.`);
        await maru.say_and_wait(
          `하지만 그런 ${callname}도 나는 여전히 사랑하는걸?`,
        );
        await you.say_as_passer_by_and_wait(
          `환영의 목소리`,
          `왜? 어째서? 사랑 같은 건 언젠가 깨질 환상일 뿐이야.`,
        );
        await maru.say_and_wait(`사랑은 그렇게 얄팍한 게 아니야!`);
        await maru.say_and_wait(
          `연인 사이에 거품처럼 사라질 열정만 있다면, 언젠가 닥칠 이별이 너무 두려워서 행복할 수 없겠지.`,
        );
        await maru.say_and_wait(
          `그 두려움은 언젠가 행복의 달콤함마저 짓눌러 버릴 거야.`,
        );
        await maru.say_and_wait(
          `무서워. 언젠가 ${callname}을(를) 잃는 고통에 내가 무너져 버릴까 봐.`,
        );
        await maru.say_and_wait(`하지만 나는 ${callname}을(를) 믿어.`);
        await you.say_as_passer_by_and_wait(
          `환영의 목소리`,
          `이미 배신했는데도?`,
        );
        await maru.say_and_wait(`내가 아는 것만으로 절망할 수는 없잖아?`);
        await maru.say_and_wait(
          `온 세상 사람들이 입을 모아 불가능하다고 해도, 나는 절망하지 않아.`,
        );
        await maru.say_and_wait(
          `사람은 자기 미래를 예측할 수 없으니까, 무슨 일이든 일어날 수 있잖아?`,
        );
        await you.say_as_passer_by_and_wait(
          `환영의 목소리`,
          `그 낙관적인 마음으로는 너 자신조차 지킬 수 없는데도?`,
        );
        await maru.say_and_wait(`지난 십수 년 동안 이렇게 무사히 살아왔잖아?`);
        await you.say_as_passer_by_and_wait(`환영의 목소리`, `뭐?`);
        maru.print(
          `바람 한 점 통하지 않던 가시벽에 한 줄기 틈이 생겼다. 기회를 잡은 ${maru.name}는 그대로 감옥을 뚫고 나왔다.`,
        );
        maru.print(`가시덤불을 벗어나자, 온몸의 힘도 서서히 돌아왔다.`);
        await you.say_as_passer_by_and_wait(
          `환영의 목소리`,
          `……생명이란 모든 가능성을 합친 것이기에?`,
        );
        maru.print(`그 말을 곱씹던 환영은 깨달은 순간 흩어졌다.`);
      } else {
        era.drawLine();
        maru.print(
          `얼마나 지났는지 알 수 없었다. 아직도 빠져나갈 수 있을 것 같지 않았다.`,
        );
        maru.print(`왼손 법칙을 따르든, 벽을 무너뜨리든, 결과는 똑같았다.`);
        maru.print(
          `설상가상으로 왔던 길을 되짚어 출발점으로 돌아가 보니, 그곳마저 벽의 일부가 되어 있었다.`,
        );
        await maru.say_and_wait(`으음——조금 골치 아프네.`);
        maru.print(`일단 중심이라고 할 만한 작은 공터로 돌아갈 수밖에 없었다.`);
        maru.print(
          `그곳이 공터인 것은 바람이 너무 거세서 풀이 살아남을 수 없었기 때문이었다.`,
        );
        maru.print(`그런데 이상하게도 그 바람은 사람을 벽 쪽으로 밀어붙였다.`);
        maru.print(
          `지금까지는 재빨리 옆으로 비켜서며 산산조각 나는 운명을 피했다.`,
        );
        maru.print(`하지만 이제 시도할 만한 방법은 모두 써 보았다.`);
        await maru.say_and_wait(`가능한 방법을 전부 지워 봤다면, 이제는……`);
        await era.printAndWait(`${maru.name}는 그 공터로 들어섰다.`);
        await era.printAndWait(
          `광풍이 포효하며 ${maru.sex}를 당장이라도 넘어뜨릴 기세였지만, ${
            maru.sex
          }는 끝내 두 발로 버텨 냈다.`,
        );
        await era.printAndWait(`그리고, `);
        await era.printAndWait(`바람의 힘을 빌려 벽을 향해 돌진했다.`);
        await era.printAndWait(
          `그러자 그 거센 힘에 벽이 조금씩 갈라졌다.`,
        );
        await era.printAndWait(`새로운 길이 눈앞에 열렸다.`);
      }
      await maru.say_and_wait(
        `오는 길에 어려움이 많았지만, 전부 무사히 넘어왔네.`,
      );
      await maru.say_and_wait(`앞으로는 무엇이 기다리고 있을까?`);
      await maru.say_and_wait(
        `지난날의 잿빛 그림자를 멀리 뒤로하고, 꽃으로 짠 양탄자 위를 걸어간다.`,
      );
      await maru.say_and_wait(`……직감이 말해 주고 있어.`);
      era.printButton(`「눈을 떴을 때 바라보던 방향으로 계속 달린다」`, 1);
      await era.input();
      await maru.say_and_wait(`준비!`);
      maru.print(
        `출발 신호와 함께, ${maru.name}는 스스로 정한 결승선을 향해 달려 나갔다.`,
      );
      maru.print(
        `아름다운 꽃들이 뒤로 휙휙 스쳐 가며, 점점 제 모습을 유지하지 못했다.`,
      );
      maru.print(`오색 리본처럼 조금씩 하나로 어우러졌다.`);
      maru.print(
        `조금도 숨이 차지 않은 채, 더 빠르게, 더 빠르게. 꽃밭의 일부로 녹아들 것처럼 빨랐다.`,
      );
      await maru.say_and_wait(`……그렇다면.`);
      era.printButton(`「이대로 단숨에 가속!」`, 1);
      await era.input();
      await maru.say_and_wait(`${maru.name}의 진짜 실력을 보여 줄게!`);
      await era.printAndWait(
        `귓가에 엔진의 굉음이 들렸다. 틀림없는 애차의 목소리였다.`,
      );
      maru.print(`애차가 힘을 빌려준 것 같아.`);
      maru.print(`이렇게, 이대로 괜찮은 걸까?`);
      maru.print(`아니, 이대로면 돼.`);
      maru.print(`어릴 적 처음 쿤타치를 보았을 때의 동경을 품고.`);
      maru.print(`지평선 너머, 저 반짝이는 빛.`);
      maru.print(`결승선이겠지. 이제 결승선이 보여.`);
      await maru.say_and_wait(`어째서인지 조금 감상에 젖게 되네.`);
      maru.print(`해가 뜨면 이 아스라한 감각도 흩어질 것이다.`);
      maru.print(`이것이 꿈의 끝인지도 모른다.`);
      await maru.say_and_wait(`어머, 이러면 나답지 않지.`);
      maru.print(
        `세상에 끝나지 않는 잔치는 없다. 이 달콤한 기억도 아마 영원히 잠들 것이다.`,
      );
      maru.print(`현실에서도 즐겁게 살아야 해? 약속이야.`);
      maru.print(`좋은 아침, ${maru.name}.`);
      await era.printAndWait(`${maru.name}는 눈을 떴다.`);
      await era.printAndWait(
        `따뜻한 햇살이 ${maru.sex}의 긴 머리카락을 살며시 어루만졌다.`,
      );
      await era.printAndWait(
        `그 여운을 음미하며, ${maru.name}는 몸을 일으켰다.`,
      );
      await era.printAndWait(`새로운 하루가 시작되었다.`);
    };
    f.title = title;
    return f;
  })(),
  fall_heaven: (() => {
    const title = 'GOOD END · 낙원에 들어선 여행자';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} taste アキカワヤヨイ
     * @param {CharaTalk} darley ダレアラビア
     * @param {CharaTalk} godolphin ゴドルフィンバルブ
     * @param {CharaTalk} byerley バイアリーターク
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (
      maru,
      taste,
      darley,
      godolphin,
      byerley,
      you,
      callname,
    ) => {
      darley.name = '다정한 여신';
      godolphin.name = '지혜의 여신';
      byerley.name = '엄숙한 여신';
      await era.printAndWait(`평범한 휴일.`);
      await era.printAndWait(`황제를 꺾고 멋지게 두 번 연속 승리를 거뒀다.`);
      await era.printAndWait([
        ' ',
        maru.get_colored_name(),
        '와 보낸 이 삼 년은 아마 영원히 잊지 못할 나날일 것이다.',
      ]);
      await era.printAndWait([
        ' ',
        maru.get_colored_name(),
        '와 잠시 헤어졌다.',
      ]);
      await taste.say_and_wait(`축! 하! URA 우승!`);
      await era.printAndWait([
        '작은 체구의 이사장이 ',
        maru.sex,
        '의 키 절반쯤 되는 트로피를 가져와 ',
        maru.get_colored_name(),
        '에게 건넸다.',
      ]);
      await maru.say_and_wait(`감사합니다!`);
      await era.printAndWait([
        maru.get_colored_name(),
        '는 트로피를 받은 뒤 카메라 앞에 서서, 곁에서 오래 기다리던 기자들의 인터뷰에 응했다.',
      ]);
      await maru.say_as_passer_by_and_wait('기자 A', [
        maru.actual_name_with_title,
        ', 트로피를 손에 넣은 소감은 어떠신가요?',
      ]);
      await maru.say_and_wait(
        '보통은 굉장히 벅차겠지? 이렇게 성대한 레이스니까.',
      );
      await maru.say_and_wait(
        '그런데 막상 손에 넣는 순간에는 마음 깊은 곳이 아주 고요했어.',
      );
      await maru.say_as_passer_by_and_wait(
        '기자 A',
        '화면 앞의 시청자들에게 조금 더 자세히 설명해 주시겠어요?',
      );
      await maru.say_and_wait([
        '그럼! ',
        maru.uma_sex_title,
        '들이 1착을 다투기 위해 남몰래 땀을 흘리고, 경기장에서 온 힘을 다해 도전하는 활기를 보면, 「아, 나는 이것 때문에 레이스에 나오는구나」 싶어져. 후후~',
      ]);
      await maru.say_as_passer_by_and_wait('기자 A', [
        maru.actual_name_with_title,
        '께서는 ',
        maru.uma_sex_title,
        '들을 정말 깊이 이해하고 계시네요.',
      ]);
      await maru.say_and_wait([
        '응! 레이스 전에 출주하는 ',
        maru.uma_sex_title,
        '들과 이야기를 나누거든. 그러다 재미있는 이야기를 많이 들었어~',
      ]);
      await maru.say_as_passer_by_and_wait(
        '기자 A',
        '시청자들에게도 들려주실 수 있을까요?',
      );
      await maru.say_and_wait([
        '음, 최근 레이스에서 있었던 일인데, 어떤 ',
        maru.uma_sex_title,
        '가——',
      ]);
      await maru.say_and_wait([
        '——마지막에는 ',
        maru.sex,
        '가 계속 자기 트레이너는 고집불통이라고 투덜거렸지.',
      ]);
      await maru.say_as_passer_by_and_wait('기자 A', '재미있네요. 감사합니다.');
      await era.printAndWait(
        '인터뷰하던 기자가 한 발짝 물러나기도 전에, 다른 기자가 기다렸다는 듯 앞으로 나섰다.',
      );
      await maru.say_as_passer_by_and_wait('기자 B', [
        '실례합니다, ',
        maru.actual_name_with_title,
        '의 다음 목표는 무엇인가요?',
      ]);
      await maru.say_and_wait('음, 조금 어려운 질문이네——');
      await maru.say_and_wait('트레이너와 상의한 결과, 당분간은 쉬기로 했어.');
      await maru.say_as_passer_by_and_wait(
        '기자 B',
        '아마 담당 트레이너와 신혼여행이겠지. 이런 경우는 숱하게 봤으니까.',
        true,
      );
      await maru.say_as_passer_by_and_wait('기자 B', '굴건염인가요?');
      await maru.say_and_wait(
        '응. 결승 전에 한 번 진료를 받았어. 가벼운 증상이지만 계속 출전하면 위험이 좀 있다고 하더라.',
      );
      await maru.say_and_wait([
        '트레이너 ',
        you.adult_sex_title,
        '은(는) 쉬자고 했지만, 나는 끝까지 해 보고 싶었거든…… 다행히 마지막에는 간신히 이길 수 있었어. 정말 ',
        callname,
        ' 덕분이야⭐',
      ]);
      await maru.say_as_passer_by_and_wait(
        '기자 B',
        [
          callname,
          '? 역시 우승한 ',
          maru.uma_sex_title,
          '는 결국 같은 결말이네.',
        ],
        true,
      );
      await maru.say_as_passer_by_and_wait(
        '기자 B',
        '트레이너께서도 보이지 않는 곳에서 많은 노력을 하셨겠네요. 트레이너에 관해서도 말씀해 주시겠어요?',
      );
      await maru.say_and_wait(
        '이런 기회에는 트레이너가 직접 이야기하는 게 좋겠네!',
      );
      await era.printAndWait([
        '곁에서 지켜보던 ',
        you.get_colored_name(),
        '이(가) ',
        maru.get_colored_name(),
        '에게 이끌려 나왔다.',
      ]);
      era.printButton('「어? 나?」', 1);
      await era.input();
      await era.printAndWait([
        '아무런 준비도 없이 갑자기 들뜬 기자들과 각종 전문 촬영 장비 앞에 서게 된 ',
        you.get_colored_name(),
        '은(는) 식은땀 한 방울을 흘렸다.',
      ]);
      await maru.say_and_wait([
        '트레이너 ',
        you.adult_sex_title,
        ', 부끄러워하지 말고 소감도 말해 줘!',
      ]);
      era.printButton(
        `아아아무튼, 트레센의 신뢰에 감사드립니다. 담당 ${maru.uma_sex_title}가 열심히 따라 줘서……`,
        1,
      );
      await era.input();
      await maru.say_as_passer_by_and_wait('사진기자', '이쪽을 봐 주세요!');
      await era.printAndWait(
        '삼 년의 웃음과 눈물을 두 손에 담고, 막이 내렸다.',
      );
      era.drawLine();
      await era.printAndWait([
        '',
        maru.get_colored_name(),
        '와 잠시 헤어진 뒤, ',
        you.get_colored_name(),
        '은(는) 트레이닝실에 앉아 있었다.',
      ]);
      await era.printAndWait(
        '보관실에 늘어선 트로피들이 닻이 되어, 이 삼 년이 꿈이나 환상이 아니었다는 것을 붙들어 주었다.',
      );
      await era.printAndWait(
        '다만 갑자기 목표가 사라지자, 한순간에 마음이 풀어진 듯했다.',
      );
      await era.printAndWait('머리가 멍하고 눈꺼풀도 무거웠다.');
      await you.say_and_wait([
        maru.get_colored_name(),
        '가 돌아올 때까지 이렇게 조금만 자자.',
      ]);
      await era.printAndWait([
        '그럴듯한 이유를 찾고 마음 편히 눈을 감은 ',
        you.get_colored_name(),
        '은(는) 그대로 잠에 빠졌다.',
      ]);
      await era.printAndWait([
        '다시 눈을 떴을 때, ',
        you.get_colored_name(),
        '은(는) 끝없이 넓은 초원에 있었다.',
      ]);
      await era.printAndWait([
        '',
        maru.get_colored_name(),
        '와 이야기를 나누던 중, ',
        maru.sex,
        '는 반쯤 농담처럼 「에덴에 다녀왔어」라고 했다.',
      ]);
      await era.printAndWait([
        '인간 세상에는 도저히 존재할 수 없는 이 아름다운 풍경을 보니, ',
        maru.sex,
        '의 말은 아마 사실인 듯했다.',
      ]);
      await you.say_and_wait('이제 어느 쪽으로 가야 하지?');
      await era.printAndWait([
        '그리고 서둘러 해결해야 할 문제가 하나 있었다. ',
        you.get_colored_name(),
        '은(는) ',
        maru.uma_sex_title,
        '가 아니었다.',
      ]);
      await era.printAndWait([
        maru.get_colored_name(),
        '의 방법은 거의 도움이 되지 않았다.',
      ]);
      await era.printAndWait([
        maru.get_colored_name(),
        '는 곧 돌아올 것이다. 선택할 시간은 얼마 남지 않았다.',
      ]);
      await you.say_and_wait('출발할 수밖에 없겠네.');
      await era.printAndWait(
        '망설일수록 상황은 나빠질 뿐이다. 아무 선택도 하지 않는 것보다는 선택하는 편이 낫다.',
      );
      await era.printAndWait([
        '',
        maru.get_colored_name(),
        '가 말했던 방향을 어렴풋이 떠올리며, ',
        you.get_colored_name(),
        '은(는) 그쪽으로 출발했다.',
      ]);
      era.println();
      await era.printAndWait([
        '얼마나 걸었는지 알 수 없었다. 이 여정 속에서 시간마저 흐릿해졌다. 다행히 이곳에서는 배고픔도 목마름도 느껴지지 않아, ',
        you.get_colored_name(),
        '의 마음은 조금이나마 위안을 얻었다.',
      ]);
      await era.printAndWait('변함없는 초원. 영원히 닿을 수 없는 저편 같았다.');
      await era.printAndWait([
        maru.get_colored_name(),
        '가 말했던 그 황금빛 초원……',
      ]);
      await you.say_and_wait('정말 있기는 한 걸까?');
      await era.printAndWait('그 아름다운 세계.');
      await maru.say_as_unknown_and_wait([maru.sex, '는 저기 있잖아?']);
      await you.say_and_wait([maru.get_colored_name(), '!?']);
      await era.printAndWait([
        '바로 앞의 저 사람은 틀림없이 ',
        maru.get_colored_name(),
        '!',
      ]);
      await you.say_and_wait('여기 있었구나!!');
      await era.printAndWait([
        '기쁨에 찬 ',
        you.get_colored_name(),
        '은(는) 그 환영을 향해 달려들었다.',
      ]);
      await you.say_and_wait('어?');
      await era.printAndWait([
        '끌어안으려 뻗은 두 팔은 ',
        maru.sex,
        '의 몸을 통과했다.',
      ]);
      await maru.say_and_wait('……');
      await era.printAndWait('환영은 아무 말 없이 어딘가로 걸어가기 시작했다.');
      await you.say_and_wait('?');
      await era.printAndWait(
        '처음에는 천천히 걷더니, 점점 속도를 높여 마침내 아예 달리기 시작했다.',
      );
      await you.say_and_wait('기다려 줘!');
      await era.printAndWait([
        '그 존재의 목적은 ',
        you.get_colored_name(),
        '을(를) 이끄는 것인 듯했다. 더는 달릴 수 없어 앉아서 숨을 고르면, 조금 앞에서 움직이지 않았다.',
      ]);
      await era.printAndWait([
        '온 힘을 다해 달려도, 언제나 아주 조금 모자라 ',
        maru.sex,
        '에게 닿지 못했다.',
      ]);
      await era.printAndWait([
        '어떻게 해야 하지? 어떻게 해야 다시 ',
        maru.sex,
        '에게 닿을 수 있을까?',
      ]);
      await era.printAndWait(['분하다. ', maru.sex, '를 따라잡고 싶다.']);
      await era.printAndWait([
        maru.sex,
        '를 넘어서고 싶다. ',
        maru.sex,
        '가 아는 세계를 보고 싶다.',
      ]);
      await you.say_and_wait(
        '분명 아름다울 거야! 그렇지 않다면 이렇게까지 집착하며 나아가지는 않겠지.',
      );
      await you.say_and_wait(
        '갖고 싶다. 내 것으로 하고 싶다. 그 아름다운 세계를 보고 싶다.',
      );
      await era.printAndWait(
        '희미하게나마, 줄곧 자신을 속박해 온 족쇄에 손이 닿은 듯했다.',
      );
      await era.printAndWait('이대로 달리다가는 지쳐 죽을지도 모른다.');
      await you.say_and_wait(
        '오랫동안 생각했어. 계약한 날부터 URA가 끝나는 순간까지.',
      );
      await you.say_and_wait('내가 정말 원하는 건 사실 아름다운 한순간이야.');
      await you.say_and_wait(
        '그 감각이 절정에 이르는 찰나. 나는 그 한순간을 위해 지금까지 살아왔어.',
      );
      await you.say_and_wait(
        '지금 이 순간이야말로 세 여신이 주신 단 한 번의 기회 아닐까?',
      );
      await you.say_and_wait('그렇다면 답은 처음부터 정해져 있어.');
      await era.printAndWait([
        '몸이 내지르는 비명도 무시한 채, ',
        you.get_colored_name(),
        '은(는) 다시 속도를 높여 앞으로 달렸다.',
      ]);
      await era.printAndWait(
        '……앞에 보이는 여명은 여전히 까마득했다. 닿을 수 없는 꿈처럼 멀리 있었다.',
      );
      await era.printAndWait([
        '인간과 ',
        maru.uma_sex_title,
        ' 사이에 놓인, 넘기 힘든 절벽.',
      ]);
      await you.say_and_wait('으아아아아!', true);
      await era.printAndWait(
        '온몸의 마지막 힘을 쥐어짜 필사적으로 뛰어올랐다.',
      );
      await era.printAndWait(
        '환영조차 이 마지막 도약은 예상하지 못한 듯, 반응할 틈도 없었다.',
      );
      await era.printAndWait([
        '마침내 ',
        you.get_colored_name(),
        '은(는) 그 모습에 닿았다.',
      ]);
      await you.say_and_wait('해냈어!', true);
      await era.printAndWait('그러나 그 희미한 감촉은 곧 사라졌다.');
      await era.printAndWait([
        '마지막 힘을 모두 써 버린 ',
        you.get_colored_name(),
        '은(는) 바로 앞에 멈춰 선 환영을 바라볼 수밖에 없었다.',
      ]);
      await you.say_and_wait(
        [maru.get_colored_name(), ', 이제야 네가 느끼는 걸 알겠어!'],
        true,
      );
      await era.printAndWait(
        '극한의 움직임 끝에 갑자기 넘어졌다. 아마 뼈가 부러졌을 것이다.',
      );
      await era.printAndWait(
        '거칠게 숨을 쉴 때마다 작은 칼로 폐를 조금씩 도려내는 듯 아팠다.',
      );
      await era.printAndWait([
        '막대한 대가를 치르고, ',
        you.get_colored_name(),
        '은(는) 무엇을 얻었을까?',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 마음은 그 아름다움에 깊이 잠겼고, 눈물이 걷잡을 수 없이 흘러내렸다.',
      ]);
      await you.say_and_wait('죽는 걸까?', true);
      await era.printAndWait([
        '환영은 아까처럼 목표를 향해 걷지 않고, 오히려 ',
        you.get_colored_name(),
        ' 쪽으로 걸어왔다.',
      ]);
      await era.printAndWait([
        '스러져 가는 이를 마지막으로 돌보듯, 조심스럽게 ',
        you.get_colored_name(),
        '을(를) 무릎에 눕혔다.',
      ]);
      await you.say_and_wait([maru.get_colored_name(), '.'], true);
      await era.printAndWait(
        '낙엽은 뿌리로 돌아간다. 눈앞의 사람은 그리워하던 이가 아니다. 마음의 호수는 이른 봄바람에 날리는 첫 꽃잎으로 덮이고, 모든 소란이 고요 속으로 돌아간다.',
      );
      await you.say_and_wait('이건 너를 만나기 위해 바친 선물이야.', true);
      await you.say_and_wait('나는…… 이제 도망치지 않아.', true);
      await era.printAndWait('끊임없이 솟는 눈물이 시야를 흐렸다.');
      await you.say_and_wait('너는…… 이제 영원히 혼자가 아니야.', true);
      await era.printAndWait([
        '마지막 풍경은 ',
        maru.get_colored_name(),
        '가 보았던 그 바다에 멈추었다.',
      ]);
      await era.printAndWait(
        '거울처럼 고요한 바다가 지나간 세월을 비추고 있었다.',
      );
      era.drawLine();
      await you.say_and_wait('여기는?');
      await era.printAndWait(
        '다시 눈을 떴을 때, 눈앞에는 황금빛 초원이 펼쳐져 있었다.',
      );
      await era.printAndWait([
        '바로 ',
        maru.get_colored_name(),
        '가 말했던, 모든 인간의 요람.',
      ]);
      await godolphin.say_and_wait('이제 울지 않아도 돼.');
      await godolphin.say_and_wait('이 낙원에는 더 이상 슬픔이 없단다.');
      await era.printAndWait([
        '포용을 상징하는 여신 고돌핀 바브가 자애로운 얼굴로 ',
        you.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      await godolphin.say_and_wait('너는 이미 우리에게 네 용기를 증명했어.');
      await godolphin.say_and_wait(
        '다시 만날 때까지, 네 생각을 따라 이 길을 끝까지 걸어가렴.',
      );
      await era.printAndWait([
        '용기를 상징하는 여신 달리 아라비안이 기대 어린 눈빛으로 ',
        you.get_colored_name(),
        '에게 힘을 북돋아 주었다.',
      ]);
      await darley.say_and_wait([
        '인간의 몸으로 전력을 다해, 겨우 ',
        maru.uma_sex_title,
        '의 경지 끝자락에 닿았구나.',
      ]);
      await darley.say_and_wait(
        '강함이라는 말은 너와 거리가 멀다. 지금까지 겁쟁이처럼 거짓으로 엮은 종이 성에 숨어, 그 성이 무너지지 않으리라 망상했지.',
      );
      await darley.say_and_wait(
        '……그러나 마지막 순간, 너는 우리에게 깊이 참회했다. 더는 도망치지 않고 온 힘을 다해 내디딘 마지막 발걸음이 바로 그 증거다.',
      );
      await era.printAndWait([
        '힘과 강인함을 상징하는 여신 바이얼리 터크가 탄식 어린 얼굴로 ',
        you.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      era.printButton('「세 여신님!?」', 1);
      await era.input();
      await byerley.say_and_wait(
        '보다시피 우리가 이 에덴을 만들고 지키는 여신들이다.',
      );
      await byerley.say_and_wait([
        '임종을 맞아 찾아오는 평범한 인간은 셀 수 없이 많다. 그러나 ',
        maru.uma_sex_title,
        '가 아닌데 살아 있는 몸으로 찾아온 이는 아마 너 하나뿐일 것이다.',
      ]);
      await darley.say_and_wait('소원이 있느냐?');
      await darley.say_and_wait(
        '인간 사회의 질서에 영향을 주지 않는 한, 우리가 이루어 줄 수 있다.',
      );
      await era.printAndWait('소원이라……');
      await era.printAndWait(
        '여기까지의 험난한 길을 하나하나 되새긴 끝에 나온 답은, ',
      );
      era.printButton(
        `「현실 세계로 돌려보내 주세요. ${maru.name} 곁으로」`,
        1,
      );
      await era.input();
      await byerley.say_and_wait(
        '소원을 비는 순간 너는 인간 사회로 돌아간다. 그런데도 그것이 네 소원이냐?',
      );
      era.printButton(
        `「존경하는 여신님, 말씀드린 그대로가 제 소원입니다.」`,
        1,
      );
      await era.input();
      await you.say_and_wait(
        '제가 추구하는 아름다움은 평범한 사람 기준으로 좋지도 나쁘지도 않은 운 속에서, 큰 대가를 치른 뒤에야 피어나는 꽃입니다.',
      );
      await you.say_and_wait(
        '비유하자면, 땀과 시간을 들여 전시회 추첨권 한 장을 얻은 셈이지요.',
      );
      await you.say_and_wait(
        '그 전시회에 들어가려면 추첨으로 입장권을 뽑아야 합니다.',
      );
      await you.say_and_wait(
        '하지만 어떤 소원이든, 심지어 운이 좋아지게 해 달라는 소원조차 제가 추구하는 아름다움을 크게 퇴색시킵니다.',
      );
      await you.say_and_wait(
        '소원을 빈 결과 오히려 목표에서 멀어지게 되지요. 공허한 결과만 남을 뿐입니다.',
      );
      await darley.say_and_wait('……마음이 정해졌다면, 우리가 배웅하마.');
      await godolphin.say_and_wait(
        '사랑스러운 아이야. 일생을 마치고 다시 이곳에 돌아올 때, 안식을 얻기를 바라.',
      );
      await byerley.say_and_wait(
        '……쥐는 약하다. 하지만 연약한 것은 육체뿐이다. 약한 몸에 깃든 용기는 육체의 한계에 갇히지 않으며, 감동을 주기에 충분하다.',
      );
      await byerley.say_and_wait('아마도 내가 너를 과소평가했구나.');
      await era.printAndWait([
        you.get_colored_name(),
        '의 몸이 서서히 땅에서 떠올랐다. 세 여신의 배웅을 받으며 점점 높이, 점점 빠르게 올라갔다. 의식이 끊어지기 직전까지 눈에 남은 것은 그 황금빛 초원.',
      ]);
      await era.printAndWait([
        '……그리고 환영인 ',
        maru.sex,
        '가 ',
        you.get_colored_name(),
        '에게 손을 흔들어 작별을 고했다.',
      ]);
      era.drawLine();
      await maru.say_and_wait([callname, '?']);
      await era.printAndWait(
        '아주 오랜 시간이 지난 것 같기도, 그리 오래되지 않은 것 같기도 했다.',
      );
      await era.printAndWait([
        '',
        maru.get_colored_name(),
        '의 눈에는 그저 너무 피곤해서 잠든 것처럼 보였던 모양이다.',
      ]);
      era.printButton(`「다녀왔어, ${maru.name}.」`, 1);
      await era.input();
      await era.printAndWait([
        '꿈속 환영처럼, ',
        maru.get_colored_name(),
        '는 미소를 지었다.',
      ]);
      await maru.say_and_wait('어서 와.');
    };
    f.title = title;
    return f;
  })(),
  async fall_heaven_end() {
    await era.printAndWait(`Thank you for your playing!`);
  },
  gentle_wind: (() => {
    const title = 'TRUE END · 세상에 부는 다정한 바람';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `${maru.name}와 잊지 못할 삼 년을 보낸 끝에 URA 트로피를 손에 넣었다.`,
      );
      await era.printAndWait(
        `이제 도전할 무대는 완전히 새로운 트윙클 시리즈다.`,
      );
      await era.printAndWait(`하지만 그 전에.`);
      await you.say_and_wait(`이제 ${maru.name}를 만나러 가는 건가?`);
      await you.say_and_wait(`조금 긴장되네.`);
      era.drawLine({ content: '옥상' });
      await era.printAndWait(`옥상 문을 열었다.`);
      await you.say_and_wait(`${maru.name}는 없나?`);
      await era.printAndWait(
        `산들바람이 한 차례 스쳐 갈 뿐, 옥상에는 아무도 없었다.`,
      );
      await maru.say_and_wait(`누구게?`);
      await era.printAndWait(
        `${you.name}의 시야를 두 손이 가렸다. 익숙한 향기에 누군지 바로 알 수 있었다.`,
      );
      await you.say_and_wait(`${maru.name}`);
      await era.printAndWait(
        `흥분해서 큰 소리가 나올 줄 알았는데, 지금 목소리는 스스로도 의아할 만큼 차분했다.`,
      );
      await maru.say_and_wait(`역시 ${callname}답네. 바로 알아맞혔잖아.`);
      await maru.say_and_wait(
        `${maru.elder_sibling_sex_title}는 누군가를 이렇게 좋아해 본 적이 없어♪`,
      );
      await maru.say_and_wait(`이런 게 사랑이라는 걸까?♪`);
      era.printButton(
        `「${maru.name}, ${you.name}에게 할 말이 있어. 그러니까」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `흐응~ ${callname}은(는) ${maru.elder_sibling_sex_title}한테 응석 부리고 싶은 거야?`,
      );
      await maru.say_and_wait(`어떤 장난이라도……`);
      era.printButton(`「영원히 함께 살아 줘」`, 1);
      await era.input();
      await era.printAndWait(
        `${maru.name}가 믿기지 않는다는 표정을 짓는 가운데, ${
          you.name
        }은(는) 서약의 반지를 ${maru.sex}에게 건넸다.`,
      );
      era.printButton(
        `「이상보다, 레이스보다, 내가 진정으로 소중히 여기는 건 ${you.name}라는 사실이야」`,
        1,
      );
      await era.input();
      era.printButton(`「그러니 내 사랑을 받아 줘」`, 1);
      await era.input();
      await maru.say_and_wait(
        `이러면 나도 같은 사랑으로 답하지 않고서는 삼여신님을 뵐 면목이 없겠네.`,
      );
      await maru.say_and_wait(
        `${callname}, 레이스뿐만 아니라 앞으로의 삶도 잘 부탁해.`,
      );
      era.printButton(`「나도 앞으로 잘 부탁해」`, 1);
      await era.input();

      await era.printAndWait(
        `서약의 입맞춤은 어떤 맛일까? 짭짤할까, 아니면 은은하게 달콤할까? 지금은 눈앞의 마음을 빼앗는 ${maru.teen_sex_title}가 더 소중하다.`,
      );
      await era.printAndWait(
        `${you.name}과(와) ${maru.name}의 운명은 숱한 엇갈림 끝에 마침내 선물을 받았다.`,
      );
      await era.printAndWait(
        `${maru.name}의 달리기는 ${maru.uma_sex_title}들에게 용기와 희망을 주었다.`,
      );
      await era.printAndWait(
        `${maru.uma_sex_title}들은 앞으로도 ${
          maru.name
        }의 등을 뒤쫓아 ${maru.sex}를 뛰어넘을 것이다.`,
      );
      await maru.say_and_wait(
        `이기는 것보다 더 많은 ${maru.uma_sex_title}에게 희망이 있다는 걸 느끼게 해 주는 게 내 이상이야♪`,
      );
      await maru.say_and_wait(
        `앞으로는 잔디 한편에서 조용히 ${maru.uma_sex_title}들을 지켜보며, ${
          maru.couple_title
        }을 에덴으로 이끄는 게 나의 새로운 사명이야.`,
      );
      await maru.say_and_wait(
        `하지만 지금은 ${
          callname
        }하고 달콤하게 함께 살아가는 게 가장 행복한 TRUE END네♪`,
      );
      await era.printAndWait(
        `방황하던 ${maru.name}를 이끌어 준 ${
          you.name
        }과(와), 길을 잃은 ${maru.uma_sex_title}를 이끄는 ${
          maru.name
        }는 마침내 다정한 바람이 되어 ${maru.uma_sex_title}의 세상에 불어온다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async gentle_wind_end(maru, callname) {
    await era.printAndWait(
      `이렇게 두 사람의 이야기는 일단 막을 내렸다. 오래오래 행복하게 살았답니다.`,
    );
    await era.printAndWait(`힌트를 보시겠습니까?`);
    era.printButton(`예`, 1);
    era.printButton(`아니요`, 2);
    if ((await era.input()) === 1) {
      await era.printAndWait(
        `GOOD END를 달성하려면 커리어 중 모든 레이스에서 우승해야 합니다.`,
      );
      await era.printAndWait(
        `기념일 관련 선택지는 결말에 영향을 주지 않습니다.`,
      );
      await era.printAndWait(
        `이야기와 관련해서는 두 번째 해의 선택지에 주의하세요. 두 번째 해 1월 셋째 주부터 저장해 두는 것을 권합니다. 이벤트명: 봄과 겨울의 경계.`,
      );
      await era.printAndWait(
        `GE 조건을 충족한 뒤, 크리스마스 이벤트 이후 팀 목록을 비우고 ${maru.name}를 다시 선택하면 특별한 대사가 나옵니다.`,
      );
      await era.printAndWait(
        `또한 세 번째 해 첫째 주에는 새해 참배를 먼저 선택한 다음 신사로 가면, 캐릭터 이벤트의 전체 보상이 더 좋습니다.`,
      );
      await era.printAndWait(`끝으로, 곧 GE를 달성하시길 바랍니다.`);
    } else {
      await maru.say_as_unknown_and_wait(
        `직접 찾아보고 싶은 거야? 공략의 신이 될 자질이 있네. ${callname}, 힘내!`,
      );
    }
  },
  ne_happiness_day: (() => {
    const title = 'NORMAL END · 잔잔한 나날';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, you) => {
      await era.printAndWait(
        `그 뒤에 무슨 일이 있었는지는 알 수 없다. 하지만 ${maru.name}는 별로 달라지지 않았다.`,
      );
      await era.printAndWait(
        `그 후에는 정해진 계획을 하나씩 착실히 마무리했다.`,
      );
      await era.printAndWait(`얼마 후——`);
      await era.printAndWait(`공항`);
      era.println();
      await maru.say_and_wait(`${you.actual_name}, 배웅은 여기까지면 돼.`);
      await you.say_and_wait(`파리에 도착하면 연락해 줘, 알았지?`);
      await maru.say_and_wait(
        `후후~ 물론이지. 두 달 동안의 여행이지만, 드디어 에펠탑을 보러 갈 수 있겠네.`,
      );
      await maru.say_and_wait(
        `${you.actual_name}도 내가 없는 동안 다른 우마무스메한테 손대면 안 돼?`,
      );
      await you.say_and_wait(`아하하하.`);
      await maru.say_and_wait(`정말, 이 사람은.`);
      await era.printAndWait(`검지로 따끔하게 한 대 맞았다.`);
      await you.say_and_wait(`아야!`);
      await maru.say_and_wait(`자업자득이야——정말 마음을 놓을 수가 없다니까.`);
      await maru.say_and_wait(`그럼 출발할게.`);
      await you.say_and_wait(`잘 다녀와!`);
      await maru.say_and_wait(`${you.actual_name}도 돌아가는 길 조심해!`);
      await era.printAndWait(`왠지 ${maru.name}는 쓸쓸한 표정을 지었다.`);
      await maru.say_and_wait(`${you.actual_name}…… 아니, 아무것도 아니야.`);
      await maru.say_and_wait(`슬슬 출발 시간이네.`);
      await era.printAndWait(
        `${maru.name}의 모습이 인파 속으로 사라지는 것을 지켜보았다.`,
      );
      era.drawLine();
      await era.printAndWait(
        `삼 년 동안 담당과 트레이너로서 서로 의지해 온 만큼, 서로에게 호감은 있었다. 하지만 한 걸음 더 다가가지는 못했다.`,
      );
      await era.printAndWait(`무엇이 부족했던 걸까?`);
      await era.printAndWait(
        `하지만 이렇게 평온하게 끝나는 것도 행복의 한 형태일 것이다.`,
      );
      await you.say_and_wait(`오늘은 날씨가 좋네.`, true);
      await era.printAndWait(
        `${you.name}은(는) 눈을 가늘게 뜨고, 비행기가 하늘의 엷은 구름을 가르며 가느다란 흰 선을 남기는 것을 보았다.`,
      );
      await era.printAndWait(
        `언젠가 ${you.name}은(는) 이처럼 맑은 날, ${maru.name}가 옥상 난간에 기대어 눈을 가늘게 뜨고 조용히 노래를 흥얼거리는 모습을 본 적이 있다. 그 노랫소리가 흘러가던 곳을 향해.`,
      );
      await era.printAndWait(`저게 비행운이겠지, 하고 속으로 생각했다.`);
      await era.printAndWait(`오늘도 이렇게 무사히 지나갔다.`);
      await era.printAndWait(
        `${maru.name}도 매일 이렇게 아프거나 탈 나는 일 없이 지내기를.`,
      );
      await era.printAndWait(
        `그러고 보니 새로운 우마무스메들이 입학할 날도 얼마 남지 않았다. 어서 새로운 원석을 발굴해야 한다.`,
      );
      await era.printAndWait(
        `——그 우울한 나날에도 ${maru.name}가 한 번도 포기하지 않았던 것처럼.`,
      );
      await era.printAndWait(
        `다시는 돌아오지 않을 것이다. 마지막으로 그녀가 떠난 방향을 한 번 바라보고는, 뒤돌아보지 않고 자리를 떠났다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  girls_dream: (() => {
    const title = 'NORMAL END · 꿈꾸는 미래';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `삼 년 동안 ${you.name}과(와) ${maru.name}는 같은 목표를 향해 달렸고, 뒤이은 URA에서 우승했다.`,
      );
      await era.printAndWait(`그 후————`);
      await maru.say_as_passer_by_and_wait(
        `지나가던 ${maru.uma_sex_title}A`,
        `${maru.name}${
          maru.sex_code !== 1 ? ' 선배' : ' 선배'
        }, 이번 GIII에서 ${you.name}이(가) 알려 주신 방법으로 정말 우승했어요!`,
      );
      await maru.say_as_passer_by_and_wait(
        `지나가던 ${maru.uma_sex_title}B`,
        `그런 해결 방법도 있군요? 역시 마루젠${
          maru.sex_code !== 1 ? ' 선배' : ' 선배'
        }`,
      );
      await maru.say_as_passer_by_and_wait(
        `지나가던 ${maru.uma_sex_title}C`,
        `마루젠${
          maru.sex_code !== 1 ? ' 선배' : ' 선배'
        }의 요령 덕분에 지금은 트레이너${you.adult_sex_title}과도 잘 지내고 있어요.`,
      );
      await maru.say_and_wait(`후배들에게 도움이 되었다니 다행이야!`);
      await era.printAndWait(
        `오늘도 ${maru.name}는 후배들에게 조언을 해 주고 있다.`,
      );
      await maru.say_as_passer_by_and_wait(
        `지나가던 ${maru.uma_sex_title}A`,
        `${maru.name}${
          maru.sex_code !== 1 ? ' 선배' : ' 선배'
        }의 트레이너${you.adult_sex_title}이 오셨어!`,
      );
      await era.printAndWait(
        `${maru.uma_sex_title}들에게 둘러싸인 ${
          maru.name
        }가 ${you.name}이(가) 온 것을 알아차렸다.`,
      );
      await maru.say_and_wait(`${callname}！`);
      await era.printAndWait(
        `${maru.name}는 풍만한 가슴을 통째로 ${you.name}의 어깨에 기댔다.`,
      );
      await maru.say_as_passer_by_and_wait(
        `지나가던 ${maru.uma_sex_title}B`,
        `와, 이게 뭐야?`,
      );
      await maru.say_as_passer_by_and_wait(
        `지나가던 ${maru.uma_sex_title}C`,
        `마루젠${maru.sex_code !== 1 ? ' 선배' : ' 선배'}와 ${
          maru.sex
        }의 트레이너님은 오늘도 정말 사이가 좋으시네요.`,
      );
      era.printButton(`「늦어서 미안해」`, 1);
      await era.input();
      await maru.say_and_wait(
        `응응, 벌써 두 시간이나 ${
          callname
        } 얼굴을 못 봤잖아. ${maru.elder_sibling_sex_title}는 정말 쓸쓸했어~`,
      );
      await maru.say_and_wait(`그 보답으로 오늘 오후에는 함께 데이트하자♪`);
      era.printButton(`「사실 나도 한~참 ${maru.name}를 못 봐서 불안했어」`, 1);
      await era.input();
      await maru.say_and_wait(
        `${callname}도 역시 내 생각만 하고 있었구나. 그럼 늘 하던 대로——`,
      );
      await era.printAndWait(`두 사람은 트레이닝장에서 서로를 꼭 껴안았다.`);
      await maru.say_and_wait(`역시 ${callname}이(가) 제일 좋아⭐`);
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async girls_dream_end(maru, callname) {
    await era.printAndWait(`힌트를 보시겠습니까?`);
    era.printButton(`예`, 1);
    era.printButton(`아니요`, 2);
    if ((await era.input()) === 1) {
      await era.printAndWait(
        `GOOD END를 달성하려면 커리어 중 모든 레이스에서 우승해야 합니다.`,
      );
      await era.printAndWait(
        `기념일 관련 선택지는 결말에 영향을 주지 않습니다.`,
      );
      await era.printAndWait(
        `이야기와 관련해서는 두 번째 해의 선택지에 주의하세요. 두 번째 해 1월 셋째 주부터 저장해 두는 것을 권합니다. 이벤트명: 봄과 겨울의 경계.`,
      );
      await era.printAndWait(
        `TE/GE 조건을 충족한 뒤, 크리스마스 이벤트 이후 팀 목록을 비우고 ${maru.name}를 다시 선택하면 특별한 대사가 나옵니다.`,
      );
      await era.printAndWait(
        `또한 세 번째 해 첫째 주에는 새해 참배를 먼저 선택한 다음 신사로 가면 전체 보상이 더 좋습니다.`,
      );
      await era.printAndWait(`끝으로, 곧 GE를 달성하시길 바랍니다.`);
    } else {
      await maru.say_as_unknown_and_wait(
        `직접 찾아보고 싶은 거야? 공략의 신이 될 자질이 있네. ${callname}, 힘내!`,
      );
    }
  },
  be_Self_contempt: (() => {
    const title = 'BAD END · 나무가 무성해지자 흙이 무너지다';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, you) => {
      await era.printAndWait(`트레이닝실`);
      era.println();
      await maru.say_and_wait(`${you.actual_name}, 먼저 갈게. 내일 봐!`);
      await era.printAndWait(`${maru.name}는 트레이닝실을 나섰다.`);
      await era.printAndWait(
        `하늘이 어둑하다. 어제와 다르지 않은 평일이다. 황혼과 밤의 경계에 걸린 푸른빛이 트레이닝실로 비쳐 든다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 트레이닝실의 익숙한 자리에 멍하니 앉아 있다.`,
      );
      await era.printAndWait(
        `추가 트레이닝을 위해서도, 계획을 세우기 위해서도 아니다.`,
      );
      await you.say_and_wait(`아마 여기서 물러나는 편이 좋겠지.`);
      await era.printAndWait(
        `${maru.name}의 능력이 부족해서가 아니다. 오히려 그녀는 모든 계획을 훌륭하게 마쳤고, 실전 경험을 바탕으로 오히려 이쪽에 조언까지 해 주었다.`,
      );
      await era.printAndWait(`진짜 문제는 `);
      era.println();
      await you.say_and_wait(
        `${maru.name}라는 이 훌륭한 원석은 더 뛰어난 장인의 손에서 다듬어져야 한다.`,
      );
      await you.say_and_wait(`내 능력이 부족하다. 그뿐이다.`);
      await you.say_and_wait(
        `${maru.name}를 위해서라도 더는 괜찮은 척해서는 안 된다. 기회를 봐서 솔직하게 말해야 한다.`,
        true,
      );
      await era.printAndWait(
        `바닷가에서 찍은 ${maru.name}와의 사진을 다정하게 어루만진 뒤 반으로 찢고, 조각들을 겹쳐 다시 반으로 찢었다.`,
      );
      await you.say_and_wait(
        `최고의 원석은 최고의 장인이 다듬어야 한다. 나는 옳은 일을 하고 있다.`,
      );
      await era.printAndWait(`무표정한 채로 더는 찢을 수 없을 때까지 찢었다.`);
      await era.printAndWait(
        `조심스럽고 정성스럽게, 아주 작은 조각 하나도 손바닥에서 빠져나가지 않도록.`,
      );
      await era.printAndWait(
        `창문을 열고, 스스로 망설일 틈조차 주지 않은 채 손에 든 조각들을 힘껏 하늘로 던졌다.`,
      );
      await era.printAndWait(
        `하늘로 날아오르려던 잿불이 끝내 속절없이 땅으로 떨어지는 것을 보며, 마음도 그 뒤를 따랐다.`,
      );
      await you.say_and_wait(
        `이제 ${maru.name}에게 모든 것을 말해야 한다.`,
        true,
      );
      await era.printAndWait(`트레이닝실을 나섰다. 눈물과 땀을 흘렸던 이곳을.`);
      await era.printAndWait(`그리고 문을 힘껏 닫았다.`);
      era.setToBottom();
      await era.printAndWait(`——책상에 붙어 있던 메모 한 장`);
      await era.printAndWait(
        `담당 ${maru.uma_sex_title} ${maru.name}와 옥상에서 만남.`,
      );
      await era.printAndWait(`……`);
      await era.printAndWait(
        `메이크 데뷔 후, ${maru.name}와 예약한 가게에서 축하하기.`,
      );
      await era.printAndWait(`……`);
      await era.printAndWait(
        `사츠키상 후, ${maru.name}에게 운전과 요리 배우기(참고: ${maru.name}의 요리는 정말 맛있다!).`,
      );
      await era.printAndWait(`……`);
      await era.printAndWait(
        `늘 함께해 줘서 고마워. 부담을 견딜 수 없었어. 미안해.`,
      );
      await era.printAndWait(
        `얼마 후, 일방적으로 이사장에게 사직서를 제출했다.`,
      );
      await era.printAndWait(
        `그 후, 양분을 잃은 그 흙에서는 더 이상 새싹이 고개를 내밀지 않았다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  be_broken_tears: (() => {
    const title = 'BAD END · 마루젠스키의 편지';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      maru.say(
        `${callname}, 이 편지를 읽을 때쯤이면 나는 파리행 비행기에 타고 있겠지.`,
      );
      maru.say(`말도 없이 떠난 나를 용서해 줘.`);
      maru.say(
        `솔직히 말하면, ${callname}하고 만난 뒤로 하루하루가 정말 행복했어.`,
      );
      maru.say(`그러니 ${callname}을(를) 탓할 생각은 없어.`);
      maru.say(`그저 앞으로 어떤 길로 나아가야 할지 모르겠어.`);
      maru.say(
        `이사장님께 석 달 동안 휴학하겠다고 말씀드렸어. 그동안 프랑스를 여행하면서 기분을 바꿔 보려고 해.`,
      );
      maru.say(
        `그러다 보면 ${callname}하고 후배들을 어떻게 대해야 할지 알게 될지도 모르지♪`,
      );
      maru.say(
        `……${callname} 생각대로, 나는 꼬리를 말고 달아나는 겁쟁이 우마무스메일 뿐이야.`,
      );
      maru.say(`……아무리 생각해도 아마 이 길밖에는 없겠지.`);
      maru.say(
        `여기 있는 후배들을 두고 가려니 조금은 죄책감이 들어…… 아니, 그 아이들은 스스로 노력해서 나를 뛰어넘을 거야!`,
      );
      maru.say(
        `진심으로 믿어. 그 아이들은 더 용감하게, 더 열심히, 더 높은 정상을 향해 달릴 거야.`,
      );
      maru.say(
        `아, 너무 소극적으로 말했네. 이래서는 ${
          maru.elder_sibling_sex_title
        }답지 않잖아.`,
      );
      maru.say(
        `프랑스에 도착하면 그곳의 풍경과 문화를 사진과 영상으로 보내 줄게.`,
      );
      maru.say(
        `그때는 예전처럼 ${callname}한테 우마터에 올려 달라고 해도 되지?`,
      );
      maru.say(`후배들도 깜짝 놀라겠지!`);
      await maru.print_and_wait(`그렇게 하자!`);
      era.setToBottom();
      maru.say(`미안해.`);
      await era.printAndWait(
        `편지의 마지막 줄은 눈물에 젖어 글씨가 사방으로 번지고 흐릿해져 있었다.`,
      );
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `하지만 ${maru.name}는 이제 돌아오지 않는다. ${you.name}은(는) 마음속으로 누구보다 분명히 알고 있다.`,
      );
      await era.printAndWait(`어쩔 수 없는 일이다.`);
    };
    f.title = title;
    return f;
  })(),
  be_crazy_fan: (() => {
    const title = '비 오는 날(이별)';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      //節拍1 行動：マルゼンスキーが到着を告げる 反応：プレイヤーのスーツケースを受け取る 価値負荷正または負？親密/孤独(-)
      await era.printAndWait(`공항`);
      await maru.say_and_wait(`배웅은 여기까지면 돼.`);
      await era.printAndWait(
        `${maru.name}는 ${you.name}이(가) 꽉 쥐고 있던 여행 가방을 받아 들었다.`,
      );
      //節拍2 行動：プレイヤーがマルゼンスキーの出発を名残惜しむ 反応：マルゼンスキーがトレーナーを慰める 親密/孤独(-)
      await you.say_and_wait(`파리에 도착하면 연락해 줘.`);
      await maru.say_and_wait(
        `그렇게 걱정하지 않아도 돼⭐ 잠시 파리로 여행을 가는 것뿐이야.`,
      );
      //節拍3 行動：マルゼンスキーが頭を撫でる 反応：プレイヤーが失うことを恐れる 失/得(-)
      await era.printAndWait(
        `${maru.name}는 웃으며 ${you.name}의 머리를 쓰다듬었다.`,
      );
      await era.printAndWait(
        `어느 때보다 다정한 손길인데도, ${you.name}은(는) 두려움을 느꼈다.`,
      );
      await you.say_and_wait(
        `가는 길 조심해……도저히 입 밖으로 나오지 않는다.`,
        true,
      );
      //節拍4 行動：マルゼンスキーがトレーナーを励ます 反応：プレイヤーは笑ってその励ましを受け入れる 失/得(+)
      await maru.say_and_wait(`다른 나라에 있어도 우리 인연은 끊어지지 않아.`);
      await maru.say_and_wait(
        `그러니 용기를 내. 내가 가장 좋아하는 ${callname}.`,
      );
      await you.say_and_wait(`……응, 가슴속에서 이 온기가 샘솟는 게 느껴져.`);
      //節拍5 行動：マルゼンスキーが出発しようとする 反応：プレイヤーはマルゼンスキーを見送る 失/得(-)
      await you.say_and_wait(`그럼 출발해야지——`);
      await maru.say_and_wait(`——그래, 이제 헤어질 시간이네.`);
      await era.printAndWait(`꼭 맞잡았던 두 손이 떨어졌다.`);
      await era.printAndWait(
        `${you.name}은(는) ${maru.name}가 여행 가방을 들고 떠나려는 모습을 바라보았다.`,
      );
      //節拍5 行動：プレイヤーがマルゼンスキーをきつく抱く 反応：マルゼンスキーは抜け出そうとする 親密/孤独(--)
      await you.say_and_wait(`${maru.name}！`);
      await era.printAndWait(`${you.name}은(는) 행동에 나섰다.`);
      await maru.say_and_wait(`！`);
      await era.printAndWait(
        `${you.name}은(는) ${
          maru.sex
        }를 꼭 껴안았다. 주변 여행객들이 걸음을 멈추고 두 사람을 바라보고 있다.`,
      );
      await maru.say_and_wait(`${you.actual_name}, 놔줘.`);
      await era.printAndWait(
        `한 번도 들어 본 적 없는 ${maru.name}의 당황한 목소리였다.`,
      );
      //節拍6 行動：プレイヤーが追撃する 反応：マルゼンスキーは黙って涙を流す 失/得(-)
      await you.say_and_wait(
        `이대로 있어 줘. 한 번만 더 네 온기를 느끼게 해 줘.`,
      );
      await you.say_and_wait(`아직 자신을 납득시킬 수 없다.`);
      await you.say_and_wait(
        `그 바람, 그 다정한 바람이 눈앞에서 사라지려 하고 있다.`,
      );
      await maru.say_and_wait(`——${callname}`);
      await era.printAndWait(
        `필사적으로 슬픔을 억누르는 ${maru.teen_sex_title}.`,
      );
      //節拍7 行動：マルゼンスキーが逆にプレイヤーをきつく抱く 反応：プレイヤーはマルゼンスキーの孤独を感じる 失/得(++)
      await era.printAndWait(`그리고————`);
      await you.say_and_wait(`${maru.name}`, true);
      await era.printAndWait(`${you.name}을(를) 꼭 껴안았다.`);
      await maru.say_and_wait(`나도 무서워. ${callname}을(를) 잃는 게.`);
      await maru.say_and_wait(`아픔도 슬픔도 이제 혼자 짊어지고 싶지 않아.`);
      await maru.say_and_wait(
        `함께 바람이 부는 걸 느끼고, 아침이 오는 걸 느끼고 싶어.`,
      );
      await maru.say_and_wait(
        `있잖아, ${callname}, 이대로 함께 떠나자. 이 슬픈 곳을.`,
      );
      //節拍7 行動：プレイヤーが堅く拒む 反応:より大きな悲しみ 親密/孤独(---)
      await you.say_and_wait(`미안해.`);
      await era.printAndWait(`${you.name}의 마음에서 피가 흐른다.`);
      await you.say_and_wait(`내가 지은 죄는 지금 여기서 갚아야 해.`);
      await era.printAndWait(
        `슬픔으로 일그러진 ${maru.name}의 얼굴을 똑바로 바라보며 말을 이었다.`,
      );
      await you.say_and_wait(
        `이대로 도망치면 트레이너로서의 나는 이미 죽은 거나 다름없어.`,
      );
      await you.say_and_wait(
        `트레이너라는 자리를 잃으면, 트레이너로서 ${maru.uma_sex_title}를 키운다는 이상도 사라져.`,
      );
      await you.say_and_wait(
        `이상을 잃은 나는 더 깊은 지옥으로 떨어질 뿐이야.`,
      );
      await you.say_and_wait(`그러니 가. 이제 내 곁을 떠나.`);
      //節拍8 行動：二人がキスする 反応:必ずまた会うと誓う 親密/孤独(++++) 失/得(++)
      await era.printAndWait(
        `${you.name}은(는) 이번에는 ${maru.name}의 부드러운 머리카락을 쓰다듬으며, ${
          maru.sex
        }의 심장 박동을 느꼈다.`,
      );
      await you.say_and_wait(`그러니까 ${maru.name}————`);
      await era.printAndWait(
        `희미하게 쇠 맛이 나는 혀가 거침없이 ${you.name}의 입 안으로 들어왔다.`,
      );
      await era.printAndWait(`짧은 입맞춤 뒤에 아쉬운 듯 떨어졌다.`);
      await maru.say_and_wait(
        `이렇게 쉽게 포기하지 않을 거야. 그러니까, ${callname}`,
      );
      await era.printAndWait([
        maru.get_colored_name(),
        '/',
        you.get_colored_name(),
        '「',
        {
          content: '어디에 있더라도, ',
          color: maru.color,
        },
        '우리 마음은 영원히 함께야.」',
      ]);
      await maru.say_and_wait(`그럼, 한 번 더.`);
      await era.printAndWait(`말은 필요 없다. 곧 사라질 행복을 누린다.`);
      await era.printAndWait(`————두 사람이 헤어질 때까지.`);
    };
    f.title = title;
    return f;
  })(),
};
