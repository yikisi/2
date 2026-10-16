/**
 * @file スマートファルコン - 恋慕
 * @author 黑奴一号
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  49: (() => {
    const title = '첫 번째 잎은 소원!';
    /**
     * 自分の恋心に気づいたスマートファルコンが、トレーナーをピクニックに誘う
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `쉬는 날.${you.actual_name}이(가) 트레이너실 문을 열었을 때 하늘은 맑게 개어 있었다.`,
      );
      await falcon.say_and_wait(`트레이너${you.adult_sex_title}♪`);
      await era.printAndWait(
        `뜻밖에도, ${falcon.name}이 ${you.actual_name}보다 먼저 와 있었다.`,
      );
      await falcon.say_and_wait(`이렇게 날씨가 좋은데 같이 소풍 가자♪`);
      await era.printAndWait(`날씨라. 확실히 소풍 가기 좋은 날이네.`);
      era.printButton(`하지만 재료가 부족할 것 같은데.`, 1);
      await era.input();
      await era.printAndWait(`소풍이라면 미리 한마디 해 줬으면 좋았을 텐데.`);
      await falcon.say_and_wait(`짜잔♪`);
      await era.printAndWait(
        `마술사처럼 식탁보로 싼 소풍 도시락 상자를 열었다.`,
      );
      await falcon.say_and_wait(`벌써 전부 준비했어!`);
      await era.printAndWait(`팔코는 무척 기대하는 모습이다.`);
      await falcon.say_and_wait(
        `그러니까 트레이너${you.adult_sex_title}, 팔코와 함께 출발해 줄래?`,
      );
      await era.printAndWait(`물론 좋다고 대답했다.`);
      era.printButton(`나도 기뻐.`, 1);
      await era.input();
      await falcon.say_and_wait(`야호⭐`);
      await era.printAndWait(
        `트레이너실 문을 조용히 닫고, ${falcon.name}의 안내를 따라 트레센을 나섰다.`,
      );
      era.drawLine({ content: '잠시 후' });
      await falcon.say_and_wait(`준비됐어!`);
      await era.printAndWait(`근처 공원에 도착했다.`);
      era.printButton(`잔디밭에서 소풍 즐기는 사람이 많네.`, 1);
      await era.input();
      await era.printAndWait(
        `휴게 공간의 잔디밭 곳곳에 돗자리를 펼친 사람들이 있었다.`,
      );
      await falcon.say_and_wait(`오늘 날씨가 소풍에 딱이니까♪`);
      await you.say_and_wait(`팔코, 소풍을 많이 기대했구나.`);
      await falcon.say_and_wait(`팔코는 계속 둘이서 소풍 가고 싶었는걸.`);
      await you.say_and_wait(
        `응. 에이신 플래시${falcon.couple_title}과는 같이 소풍 가 본 적 없어?`,
      );
      await era.printAndWait(
        `바구니에서 음식을 꺼내던 ${falcon.name}의 손이 뚝 멈췄다.`,
      );
      await falcon.say_and_wait(
        `아니, 그건 다르지? 플래시 ${
          falcon.couple_title
        }과의 소풍은 친구끼리잖아. 트레이너인${you.adult_sex_title}과(와)는……`,
      );
      await you.say_and_wait(`나랑${falcon.couple_title}은 달라?`);
      await falcon.say_and_wait(
        `그……그건……아, 맞아! 트레이너와 ${falcon.uma_sex_title}의 유대! 유대야!`,
      );
      await era.printAndWait(`필사적으로 둘러대는 팔코는 더욱 귀엽다.`);
      await you.say_and_wait(`오오, 그·렇·구·나?`);
      await falcon.say_and_wait(
        `어? 트레이너${you.adult_sex_title}, 팔코 놀리지 마!`,
      );
      await falcon.say_and_wait(
        `이럴 때 트레이너${you.adult_sex_title}은(는) 정말 싫어!`,
      );
      await you.say_and_wait(`팔코는 내가 싫어?`);
      await falcon.say_and_wait(`아니야! 그건 다른 이야기야!`);
      await you.say_and_wait(`슬프네. 그럼 이 고기는 내가 먹는다!`);
      await era.printAndWait(
        `${you.actual_name}은(는) 갑자기 팔코의 도시락에서 고기 한 점을 집었다.`,
      );
      await falcon.say_and_wait(`트레이너${you.adult_sex_title}, 짓궂어!`);
      await falcon.say_and_wait(`그럼 팔코도 되갚아 줄 거야!`);
      await era.printAndWait(
        `${callname}의 도시락에서 초밥 두 개를 집은 ${falcon.name}은 의기양양한 표정을 지었다.`,
      );
      await falcon.say_and_wait(
        `흥흥♪ 이제 트레이너${you.adult_sex_title}도 팔코가 얼마나 대단한지 알겠지!`,
      );
      era.printButton(`무슨 소리야, 이제부터가 진짜 승부야!`, 1);
      await era.input();
      await era.printAndWait(
        `순식간에 결투 태세에 들어간 ${you.actual_name}은(는) 흥분하며 팔코의 도시락을 노렸다!`,
      );
      await falcon.say_and_wait(`아이돌의 이름을 걸고! 팔코는 지지 않아!`);
      await era.printAndWait(
        `두 사람의 싸움(?)에 주위 사람들이 하나둘 시선을 돌렸다.`,
      );
      await era.printAndWait(`결국, `);
      era.printButton(
        `윽! 인간은 ${falcon.uma_sex_title}를 이길 수 없는 건가?`,
        1,
      );
      await era.input();
      await era.printAndWait(`${you.actual_name}의 완패로 끝났다.`);
      await falcon.say_and_wait(`이번 승부는 팔코의 승리!`);
      await falcon.say_and_wait(
        `어? 이거 그냥 서로의 도시락을 먹여 주는 거 아니야?`,
        true,
      );
      await era.printAndWait(
        `그 사실을 깨달은 팔코의 얼굴이 순식간에 붉어졌다.`,
      );
      await falcon.say_and_wait(`아니! 아니야! 이런 건 아직 너무 일러!`);
      await falcon.say_and_wait(`${callname}, 야해!`);
      await era.printAndWait(
        `어째서인지 갑자기 달려가 버린 팔코는 어리둥절한 ${callname}과(와) 처참한 전쟁터를 남겼다.`,
      );
      await you.say_and_wait(`오늘 하늘은 유리처럼 푸르고 맑네.`);
      await era.printAndWait(
        `갑자기 하늘의 하얀 구름에 눈길을 빼앗긴 ${callname}은(는) 어느 ${falcon.uma_sex_title}의 일은 잊어버린 모양이다.`,
      );
      await era.printAndWait(`오늘은 날씨가 좋다.`);
    };
    f.title = title;
    return f;
  })(),
  74: (() => {
    const title = '두 번째 잎은 희망⭐';
    /**
     * トレーナーに自分の心の声が届くことを願うスマートファルコンが、密かに期待している
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      const ret = [];
      await falcon.print_and_wait(
        `트레이너${you.adult_sex_title}, 생각보다 둔하네.`,
      );
      await falcon.print_and_wait(
        `그렇게 알기 쉽게 신호를 보냈는데 왜 아직도 눈 하나 깜짝하지 않는 거야?`,
      );
      await falcon.print_and_wait(
        `안 돼! 포기하지 않아. 톱 아이돌의 명예를 걸고 이 돌머리 1호팬도 내 마음을 알아보게 하겠어!`,
      );
      era.drawLine();
      await era.printAndWait(`또 비가 내리는 휴일이었다.`);
      await falcon.say_and_wait(`에이, 오늘은 맑을 거라고 했는데.`);
      await you.say_and_wait(
        `뭐, 일기 예보도 절대적인 건 아니니까. 가능성이 낮았던 쪽으로 날씨가 바뀐 거지.`,
      );
      await era.printAndWait(
        `비 때문에 바닥이 미끄러워 팔코의 길거리 라이브도 취소되었다.`,
      );
      await era.printAndWait(
        `상당히 공들인 모양이었다. 이 주 전부터 연습한 춤도 선보일 기회가 없어졌다.`,
      );
      await falcon.say_and_wait(`으──분해.`);
      await era.printAndWait(
        `창밖을 바라보는 ${falcon.name}은 점점 거세지는 비를 보며 기운 없이 꼬리를 흔든다.`,
      );
      await you.say_and_wait(
        `그래도 팔코, 좋은 쪽으로 생각해 보는 건 어때? 비 때문에 밖에서 팬들을 만날 수는 없게 됐지만.`,
      );
      await you.say_and_wait(`실내에서는 좋은 일이 생길지도 모르잖아!`);
      await falcon.say_and_wait(
        `트레이너${you.adult_sex_title}이(가) 그렇게 말한다면……아, 맞아!`,
      );
      await era.printAndWait(
        `방금까지 축 처져 있던 귀가 순식간에 다시 쫑긋 섰다.`,
      );
      await falcon.say_and_wait(`그럼 트레이너실에서 라이브하자!`);
      await falcon.say_and_wait(
        `트레이너${you.adult_sex_title}, 잠깐만 기다려♪`,
      );
      await era.printAndWait(`마음먹으면 바로 움직이는 것도 팔코의 장점이다.`);
      await you.say_and_wait(`그런데 창밖의 비라.`);
      await era.printAndWait(
        `흔들리는 나무처럼, ${you.actual_name}의 마음속도 흔들리기 시작했다.`,
      );
      await falcon.say_and_wait(`다녀왔어♪`);
      await era.printAndWait(
        `승부복으로 갈아입은 ${falcon.name}이 트레이너실로 돌아왔다.`,
      );
      await you.say_and_wait(`다음 춤이 기대되네.`);
      await falcon.say_and_wait(`팬들을 위해 팔코가 계속 연습했거든♪`);
      await you.say_and_wait(`오오오! 팔코! 팔코!`);
      await era.printAndWait(`길거리 라이브 때와 똑같다.`);
      await falcon.say_and_wait(`그럼 팔코, 노래할게♪`);
      era.drawLine();
      await falcon.say_and_wait(`~~~♪ 다들 고마워!`);
      era.printButton(`「팔코는, ${callname}이(가) 제일 좋아!」(관계 유지)`, 1, {
        buttonType: '',
        color: falcon.color,
      });
      era.printButton(`「……」`, 2, {
        buttonType: '',
        color: falcon.color,
      });
      ret.push(await era.input());
      if (ret[0] === 1) {
        await falcon.say_and_wait(
          `응, 응! 팬들의 고마운 마음이 전해지면 팔코도 기뻐!`,
        );
        await falcon.say_and_wait(`어? 뭘 하려고 했더라?`, true);
        await falcon.say_and_wait(
          `아이돌이 팬을 계속 기다리게 하면 안 되지. 지금은 이걸로 됐어!`,
          true,
        );
        await falcon.say_and_wait(`그럼 다음 곡, 하나, 둘!`);
        era.printButton(`팔코!`, 1);
        await era.input();
        await era.printAndWait(
          `마음을 울리는 노랫소리가 다시 트레이너실에 퍼졌다.`,
        );
      } else {
        await you.say_and_wait(`팔코, 생각보다 훨씬 귀엽네.`);
        await falcon.say_and_wait(`……?`);
        await falcon.say_and_wait(
          `트레이너${you.adult_sex_title}, 언제부터 바보가 된 거야? 팔코는 항상 귀여운데?`,
        );
        await you.say_and_wait(
          `아니, ${falcon.teen_sex_title}로서의 팔코 모습 말이야.`,
        );
        await you.say_and_wait(
          `감수성이 풍부한 나이에 천진하고 낭만적이라, 마치 예술 작품 같아.`,
          true,
        );
        await era.printAndWait(`팔코의 얼굴이 서서히 붉어졌다.`);
        await falcon.say_and_wait(
          `트레이너${you.adult_sex_title}, 변태! 엉큼해! 야해!`,
        );
        await falcon.say_and_wait(`이제 ${callname} 따위 몰라!`);
        await era.printAndWait(
          `벌떡 일어난 ${falcon.name}은, ${callname}이(가) 반응할 틈도 없이 트레이너실을 나갔다.`,
        );
        await you.say_and_wait(`아, 오해받았네.`);
        await era.printAndWait(
          `${falcon.teen_sex_title}의 기분은 바깥의 폭우와 똑같은 모양이다.`,
        );
        await you.say_and_wait(`그나저나 비가 더 거세졌네.`);
        await you.say_and_wait(`……팔코.`);
        await era.printAndWait(
          `트레이너인 ${you.actual_name}은(는) 결국 결심했다.`,
        );
        era.printButton(`쫓아갈 수밖에 없지!(관계 진전)`, 1);
        era.printButton(`……먼저 전화할까?(관계 유지)`, 2);
        ret.push(await era.input());
        if (ret[1] === 1) {
          await falcon.say_and_wait(`팔코가 도주하면?`);
          await you.say_and_wait(`쫓아갈 수밖에 없지!`);
          await era.printAndWait(
            `아침저녁으로 함께 지낸 ${callname}이라면, ${falcon.name}이 가장 있을 법한 장소를 알고 있다.`,
          );
          await you.say_and_wait(`……왜 여기 없지?`);
          await era.printAndWait(`강가에는 ${falcon.sex}의 모습이 없었다.`);
          await era.printAndWait(
            `캐모마일 군락은 불어난 강물에 거의 잠겨 있었다.`,
          );
          await you.say_and_wait(`……팔코, ${callname}은(는) 어디 있지?`);
          await era.printAndWait(
            `캐모마일 군락은 불어난 강물에 거의 잠겨 있었다.`,
          );
          await falcon.say_and_wait(
            `……트레이너${you.adult_sex_title}이라면 팔코의 꿈을 이뤄 줄지도 몰라.`,
          );
          await you.say_and_wait(`……맞아! 거기다!`);
          await era.printAndWait(
            `번개처럼 스친 직감이 ${you.actual_name}에게 방향을 알려 주었다.`,
          );
          await era.printAndWait(
            `생각할 틈도 없이, ${you.actual_name}은(는) 곧장 그쪽으로 달렸다.`,
          );
          era.drawLine({ content: '옥상' });
          await era.printAndWait(
            `빗속에 선 조각상처럼, ${falcon.name}은 미동도 하지 않는다.`,
          );
          await you.say_and_wait(`${falcon.name}！`);
          await falcon.say_and_wait(
            `……트레이너${you.adult_sex_title}, 더는 오지 마.`,
          );
          await era.printAndWait(
            `무언가 깨달은 듯, ${callname}에게서 멀어지려는 ${falcon.name}이 천천히 난간 쪽으로 물러난다.`,
          );
          await falcon.say_and_wait(`팔코한테 더 가까이 오지 마!`);
          await era.printAndWait(
            `앞으로 다가가는 ${you.actual_name}과(와), 한 걸음씩 물러나는 팔코.`,
          );
          await falcon.say_and_wait(
            `팔코……팔코가 정말 화나면 트레이너${you.adult_sex_title}을(를) 걷어찰 거야!`,
          );
          await era.printAndWait(
            `${
              you.actual_name
            }은(는) 알고 있었다. 인간은 ${falcon.uma_sex_title}를 이길 수 없다.`,
          );
          await era.printAndWait(
            `하지만 지금 이 순간 할 수 있는 일은 단 하나뿐이다.`,
          );
          await falcon.say_and_wait(`……읏!`);
          await era.printAndWait(
            `흠뻑 젖은 ${falcon.name}을 힘껏 끌어안고 입술을 포갠다.`,
          );
          await falcon.say_and_wait(`……`);
          await era.printAndWait(
            `뜻밖에도, ${falcon.name}은 거세게 거부하지 않았다.`,
          );
          await you.say_and_wait(
            `미안해. 이제야 ${falcon.name}의 마음을 알았어.`,
          );
          await you.say_and_wait(
            `그렇게 많은 신호를 보냈는데 더 일찍 알아챘어야 했어.`,
          );
          await you.say_and_wait(
            `나는 겁쟁이라 나에게도 희망이 있을 거라고는 상상도 못 했어.`,
          );
          await you.say_and_wait(
            `그래서, ${falcon.name}에게 이렇게 상처 줘서 미안해.`,
          );
          await you.say_and_wait(`하지만 지금 이 순간만큼은 나는 `);
          await you.say_and_wait(`정말, 진심으로 `);
          await you.say_and_wait(
            `${falcon.name}, ${callname}은(는) 나와 사귀어 줄래?`,
          );
          await era.printAndWait(
            `${falcon.name}의 두 눈을 똑바로 바라보며 대답을 기다린다.`,
          );
          await falcon.say_and_wait(`……`);
          await falcon.say_and_wait(
            `……트레이너 ${you.adult_sex_title}, 짓궂네.`,
          );
          await falcon.say_and_wait(`답은 하나뿐이잖아?`);
          await era.printAndWait(
            [
              falcon.get_colored_name(),
              `「${you.actual_name}이(가) 제일 좋아!」`,
            ],
            {
              align: 'center',
              color: falcon.color,
              fontSize: '1.375rem',
            },
          );
          await you.say_and_wait(`얼마나 좋아해?`);
          await era.printAndWait(
            [falcon.get_colored_name(), '「이만큼 좋아해❤️」'],
            {
              align: 'center',
              color: falcon.color,
              fontSize: '1.875rem',
            },
          );
          await era.printAndWait(
            `빗속에서 바보 같은 연인처럼 서로 고백한 두 사람은 마침내 연인으로서 첫걸음을 내디뎠다.`,
          );
        } else {
          await era.printAndWait(
            `그 뒤 팔코가 무사히 기숙사로 돌아갔다는 걸 알고, ${callname}은(는) 가슴을 쓸어내렸다.`,
          );
        }
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  89: (() => {
    const title = '세 번째 잎은 사랑❤️';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(`메이드${falcon.name}, 등장⭐`);
      await falcon.say_and_wait(
        `트레이너${you.adult_sex_title}, 팔코의 이 모습 어때?`,
      );
      await era.printAndWait(
        `귀여운 스타일의 메이드복으로 갈아입은${falcon.name}은(는) 가터 스타킹을 신고 있었다.`,
      );
      await you.say_and_wait(`팔코, 정말 잘 어울려.`);
      await falcon.say_and_wait(
        `지금 여기 서 있는 건${falcon.name}이야, 트레이너인${you.adult_sex_title}♪`,
      );
      await you.say_and_wait(
        `여전히, ${falcon.name}과 팔코를 확실히 구분하네.`,
        true,
      );
      await era.printAndWait(
        `${falcon.name}은 잠시 멈추더니 메이드의 정식 인사를 했다.`,
      );
      await falcon.say_and_wait(
        `주인님, 늘 신세를 지고 있습니다. 메이드${falcon.name}은 아직 신참이지만 온 힘을 다해 모시겠습니다.`,
      );
      await era.printAndWait(`오, 벌써 역할에 몰입했구나.`);
      await you.say_and_wait(
        `수고했어, ${falcon.name}. 오늘 일정표를 가져다줄래?`,
      );
      await falcon.say_and_wait(`네, 주인님.`);
      await era.printAndWait(
        `선반에서 자료를 꺼낸${falcon.name}이 파일을${callname}의 손에 건넨다.`,
      );
      await you.say_and_wait(`고마워.`);
      await falcon.say_and_wait(
        `에헤헤⭐ 주인님, 더 많이${falcon.name}을 칭찬해 주세요♪`,
      );
      await you.say_and_wait(`큰일이다, 너무 귀여워.`, true);
      await you.say_and_wait(`수고했어. 이제 소파에서 쉬고 있어.`);
      await falcon.say_and_wait(`분부대로 하겠습니다♪`);
      await era.printAndWait(
        `이해할 수 없는 들뜬 기분을 억누르며 억지로 자료에 집중한다.`,
      );
      era.drawLine();
      await falcon.say_and_wait(`정말 팔코가 옆에서 안 도와줘도 돼?`);
      await era.printAndWait(
        `어느새 다가온 작은 머리가, ${callname}과(와) 눈을 맞춘다.`,
      );
      await you.say_and_wait(`젠장, 아직 그럴 때가 아니야.`, true);
      await you.say_and_wait(`응, 팔코는 거기 앉아 있어 주면 돼.`);
      era.drawLine();
      await falcon.say_and_wait(`주인님, 일하시느라 수고 많으세요♪`);
      await era.printAndWait(
        `우린 홍차를 책상으로 가져온${falcon.name}이 기대 어린 눈으로${you.actual_name}을(를) 바라본다.`,
      );
      await you.say_and_wait(`고마워.`);
      await era.printAndWait(`한 모금 머금자 뜻밖의 달콤함이 퍼졌다.`);
      era.printButton(`맛있어.`, 1);
      await era.input();
      await falcon.say_and_wait(`정말! 팔코의 노력이 보상받았네♪`);
      await you.say_and_wait(`뭘 넣었어?`);
      await falcon.say_and_wait(`레몬이랑 얼음설탕, 홍차 잎♪`);
      await you.say_and_wait(`팔코도 앉아서 같이 마시자.`);
      await falcon.say_and_wait(`지이이이──`);
      await era.printAndWait(`삐죽 나온 작은 입술이 더욱 귀엽다.`);
      await you.say_and_wait(
        `크흠! 주인으로서 특별히 허락하지. 메이드${falcon.name}에게 함께 홍차를 맛볼 권리를 주겠어.`,
      );
      await falcon.say_and_wait(
        `주인님의 총애는, ${falcon.name}에게 영광입니다!`,
      );
      await era.printAndWait(
        `앉아서 함께 맛보는${falcon.name}은 황홀한 표정이다.`,
      );
      await you.say_and_wait(`다음 코스프레는 뭐였더라?`, true);
      await era.printAndWait(
        `조금 찔려 몇 모금 더 마시며 곁눈질로${falcon.name}을 몰래 살핀다.`,
      );
      await era.printAndWait(
        `${you.actual_name}을(를) 빤히 바라보는${falcon.name}은 귀여운 미소를 짓고 있고, 앞에 놓인 홍차에서는 아직 김이 난다.`,
      );
      await era.printAndWait(`미묘한 분위기 속에서 시간이 조금씩 흐른다.`);
      era.drawLine();
      await you.say_and_wait(
        `후우──오전 업무는 일단 끝났어. 식당에 가자, ${falcon.name}.`,
      );
      await falcon.say_and_wait(`네, 주인님!`);
      await era.printAndWait(
        `식당으로 가는 동안, ${callname}에게 많은 시선이 쏠리는 느낌이었다.`,
      );
      await you.say_and_wait(`？`, true);
      await era.printAndWait(
        `이상하게 여긴${callname}은(는) 저도 모르게 옆의${falcon.name}을 바라본다.`,
      );
      await falcon.say_and_wait(`⭐`);
      await era.printAndWait(
        `메이드복을 입은${falcon.name}이 웃으며${callname}을(를) 보고 있다.`,
      );
      await you.say_and_wait(`벌칙 게임이냐고.`, true);
      await era.printAndWait(
        `${falcon.sex}에게 옷을 갈아입힐까 고민하는 사이 식당에 들어와 버렸다.`,
      );
      await falcon.say_and_wait(`주인님은 무엇을 드시겠어요?`);
      await you.say_and_wait(`어제와 같은 걸로.`);
      await era.printAndWait(`무심코 말이 나왔다.`);
      await falcon.say_and_wait(`그럼, ${falcon.name}, 지금 준비하겠습니다♪`);
      await era.printAndWait(
        `종종걸음으로 배식대 줄을 향하는${falcon.name}은 교복 차림의 사람들 속에서 유난히 눈에 띄었다.`,
      );
      await you.say_and_wait(
        `세상아, 멸망해 줘. 왜 이렇게 쳐다보는 거야?`,
        true,
      );
      await you.say_and_wait(`오늘 하늘도 금방 비가 쏟아질 것 같네.`, true);
      await era.printAndWait(
        `잿빛 하늘이 어째서인지${you.actual_name}을(를) 편안하게 했다.`,
      );
      await falcon.say_and_wait(`기다리셨죠, 트레이너${you.adult_sex_title}♪`);
      await era.printAndWait(
        `두 사람 몫의 점심을 탁자에 놓고, ${falcon.name}은 기대 어린 눈으로${callname}을(를) 바라본다.`,
      );
      await you.say_and_wait(`수고했어, 팔코.`);
      await falcon.say_and_wait(`으──`);
      await era.printAndWait(
        `${falcon.name}의 머리를 다정히 쓰다듬자 불만스러운 표정이 곧 황홀한 표정으로 바뀌었다.`,
      );
      await falcon.say_and_wait(`그럼 팔코가${callname}에게 먹여 줄게!`);
      await era.printAndWait(
        `${falcon.name}은 젓가락을${callname}의 접시로 뻗어 고기 한 점을${callname}의 입가로 가져갔다.`,
      );
      await falcon.say_and_wait(`아～～～`);
      await era.printAndWait(
        `젓가락이 입안에 닿는 낯선 감각은 곧 충만한 행복으로 바뀌었다.`,
      );
      era.printButton(`다음은 내가${falcon.name}에게 먹여 줄 차례야.`, 1);
      await era.input();
      await falcon.say_and_wait(`아～～～앙!`);
      await era.printAndWait(
        `여운을 음미하는${falcon.name}은 눈을 가늘게 뜨고 이 순간을 즐긴다.`,
      );
      await falcon.say_and_wait(`이번에는 내 차례!`);
      era.drawLine();
      await you.say_and_wait(`잘 먹었습니다!`);
      await falcon.say_and_wait(`팔코도!`);
      await era.printAndWait(
        `서로 먹여 주는 동안 주위 사람들은${callname}에게서 한층 더 거리를 두었다.`,
      );
      await you.say_and_wait(
        `${callname}들은 이렇게 귀여운 연인을 못 만나서 질투하는 거야.`,
        true,
      );
      await era.printAndWait(`${you.actual_name}은(는) 속으로 툴툴거렸다.`);
      await you.say_and_wait(`이제 뭘 할까?`);
      await falcon.say_and_wait(
        `그보다 트레이너${you.adult_sex_title}, 입가에 소스가 남았어!`,
      );
      await era.printAndWait(
        `그렇게 말하며, ${falcon.name}은(는) 재빨리${callname}에게 다가가 혀로 깨끗하게 닦아 주었다.`,
      );
      await falcon.say_and_wait(`잘 먹었습니다!`);
      await era.printAndWait(
        `물러나려던${falcon.name}의 허리를 팔이 끌어안았다.`,
      );
      await you.say_and_wait(`팔코도 입가에 소스가 남았는데?`);
      await falcon.say_and_wait(`에이～트레이너${you.adult_sex_title}❤`);
      await era.printAndWait(
        `${falcon.name}의 입가에 남은 맛을 한 번 더 음미한 뒤.`,
      );
      await you.say_and_wait(`${falcon.name}.`);
      await falcon.say_and_wait(`${you.actual_name}❤`);
      await era.printAndWait(
        `식당 한가운데서 주위 시선도 아랑곳하지 않고 입 맞추는 연인은 달콤한 시간을 즐겼다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  99: (() => {
    const title = '네 번째 잎은 행복♪';
    /**
     * 望みどおりトレーナーと結婚したスマートファルコンが、幸せを感じている
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      era.printButton(`그나저나 조금 긴장되네.`, 1);
      await era.input();
      await falcon.say_and_wait(`괜찮아. 팔코도 지금 엄청 긴장하고 있거든♪`);
      await era.printAndWait(
        `서로 사랑하는 두 사람은 마침내 결혼 날짜를 정했다.`,
      );
      era.printButton(
        `우마터에 발표했을 때는 팬들에게 보복당하지 않을까 걱정했어.`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `우마터에 결혼을 발표한 뒤 받아들이지 못하는 팬도 소수 있었지만, 대부분은 축복을 보내 주었다.`,
      );
      await falcon.say_and_wait(`괜찮아. 왜냐하면?`);
      era.printButton(
        `하지만 팔코가 곁에 있으면 어떤 어려움도 이겨 낼 수 있다는 안도감이 들어.`,
        1,
      );
      await era.input();
      await you.say_and_wait(
        `그러니까, ${falcon.name}을 만난 게 내 인생에서 가장 행복한 순간이야.`,
      );
      await falcon.say_and_wait(
        `이제 와서 그런 이상한 말을 하면 팔코가 곤란하잖아?`,
      );
      await you.say_and_wait(`미안해. 그래도 계속 팔코 곁에 있을게.`);
      await falcon.say_and_wait(
        `그렇다면 앞으로도 팔코를 가장 소중하게 여겨 줘야 해?`,
      );
      await you.say_and_wait(
        `응. 둘 다 움직이지 못할 나이가 되어도, 마지막 순간에도 오늘을 떠올릴 거야.`,
      );
      await falcon.say_and_wait(`팔코도.`);
      await era.printAndWait(
        `손을 굳게 맞잡은 두 사람은 오늘의 약속을 영원히 기억하겠다고 맹세했다.`,
      );
      await you.say_and_wait(
        `미안해, 분위기가 너무 무거워졌네. 다른 이야기 하자.`,
      );
      era.printButton(`팔코는 어떤 웨딩드레스가 좋아?`, 1);
      await era.input();
      await falcon.say_and_wait(`트레이너는 어떤 웨딩드레스가 좋아?`);
      await era.printAndWait(`질문이 되돌아왔다.`);
      await you.say_and_wait(`생각해 볼게.`);
      era.printButton(`하트 모양 네크라인이 사랑스럽고 매혹적이라 좋아.`, 1);
      era.printButton(
        `뷔스티에는 매혹적이고 우아하면서 쇄골도 보여서 좋아.`,
        2,
      );
      era.printButton(`역시 궁정풍에 아주 긴 트레인이 좋아.`, 3);
      switch (await era.input()) {
        case 1:
          await falcon.say_and_wait(`팔코에게 그렇게 과감한 옷은 안 돼.`);
          await era.printAndWait(`손바닥에서 전해지는 압력이 점점 강해진다.`);
          await you.say_and_wait(`미, 미안해. 정말 미안!`);

          break;
        case 2:
          await falcon.say_and_wait(`일단 입어 볼까?`);
          await you.say_and_wait(`좋아.`);
          await falcon.say_and_wait(`……역시 다른 걸로 하자⭐`);
          await you.say_and_wait(`가슴이 작아서 못 입는 건가?`, true);
          await era.printAndWait(
            `실례되는 말은 꺼내지 않고 응원하는 눈빛으로 팔코를 바라보았다.`,
          );
          break;
        case 3:
          await falcon.say_and_wait(`으음, 팔코의 분위기와는 안 맞는 것 같아.`);
      }
      era.printButton(`다른 종류도 보자.`, 1);
      await era.input();
      await falcon.say_and_wait(`응, 이건 어때?`);
      await era.printAndWait(
        `퍼프소매 웨딩드레스로 갈아입은 팔코가 의기양양하게 한 바퀴 돌았다.`,
      );
      await you.say_and_wait(`천사처럼 귀여워.`);
      await falcon.say_and_wait(
        `아, 그러고 보니 트레이너${you.adult_sex_title}, 정장은 정했어?`,
      );
      await you.say_and_wait(`응, 이미 골랐어.`);
      await falcon.say_and_wait(`시간이 있으면 근처를 구경하자!`);
      await falcon.say_and_wait(
        `이렇게 트레이너${you.adult_sex_title}과(와) 보내는 시간이 정말 행복해!`,
      );
      await you.say_and_wait(`그러고 보니 팔코는 앞으로 어떻게 할 생각이야?`);
      await falcon.say_and_wait(
        `팔코는 앞으로 더트 아이돌의 선배가 되어서 레이스로 후배 ${falcon.uma_sex_title}들에게 힘을 줄 거야!`,
      );
      await falcon.say_and_wait(
        `팔코는 앞으로 더트 아이돌의 선배가 되어서 레이스로 후배 ${falcon.uma_sex_title}들에게 힘을 줄 거야!`,
      );
      await falcon.say_and_wait(
        `그래서 힘들어질지도 모르지만, 트레이너${you.adult_sex_title}이(가) 곁에 있으면 어떤 어려움도 이겨 낼 수 있어!`,
      );
      await falcon.say_and_wait(`게다가 팔코는 오늘보다 내일이 더 기대돼!`);
      await you.say_and_wait(`나도!`);
      await era.printAndWait(`그 뒤 두 사람은 근처 공원에서 데이트를 즐겼다.`);
      era.drawLine({ content: '해 질 녘' });
      await falcon.say_and_wait(`팔코, 이제 슬슬 돌아가야 해!`);
      await era.printAndWait(
        `아쉬운 듯 맞잡은 손을 놓은 ${falcon.name}이 뺨을 붉힌 채 당신을 바라본다.`,
      );
      await you.say_and_wait(`그럼 돌아가기 전에.`);
      await era.printAndWait(`황혼 속에서 두 사람은 행복하게 입을 맞췄다.`);
      await falcon.say_and_wait(`그럼 이제 팔코, 정말 돌아갈게!`);
      await you.say_and_wait(`내일은 분명 행복의 향기가 나는 날일 거야.`);
      await falcon.say_and_wait(`팔코도 그렇게 생각해.`);
      await era.printAndWait(`황혼 속에서 두 사람은 행복하게 입을 맞췄다.`);
      await falcon.say_and_wait(`팔코, 내일이 기다려져⭐`);
      await falcon.say_and_wait(`트레이너${you.adult_sex_title}, 내일 봐⭐`);
      era.drawLine({ content: '다음 날' });
      await era.printAndWait(
        `너무 긴장해서 잠을 못 잘 줄 알았는데, ${you.actual_name}은(는) 평소보다 푹 잤다.`,
      );
      await era.printAndWait(
        `몽롱한 상태로 알람에 깨어 급히 옷을 갈아입고 교회로 향한다.`,
      );
      await you.say_and_wait(`한 시간 전이면 너무 이르지 않나?`);
      await era.printAndWait(
        `오히려 딱 맞는 시간이었다. 주례자의 안내를 받아 대기실로 향한다.`,
      );
      await era.printAndWait(
        `교회에는 결혼을 지켜보러 온 ${falcon.uma_sex_title}들이 앉아 있었다.`,
      );
      era.printButton(`조금 긴장되네.`, 1);
      await era.input();
      await era.printAndWait(`얌전히 앉아서 화장을 기다린다.`);
      await falcon.say_and_wait(`트레이너${you.adult_sex_title}⭐`);
      await you.say_and_wait(`어? 팔코, 왜 여기 있어?`);
      await falcon.say_and_wait(
        `트레이너${you.adult_sex_title}의 얼굴을 조금이라도 빨리 보고 싶었어!`,
      );
      await falcon.say_and_wait(
        `트레이너${you.adult_sex_title}의 다정한 미소를 떠올리면 팔코의 심장이 엄청 빨리 뛰어.`,
      );
      await falcon.say_and_wait(
        `그러다가 갑자기 마음에 구멍이 뻥 뚫린 것 같아져. 만약 트레이너${you.adult_sex_title}이(가) 여기에 없다면 어떡하지?`,
      );
      await falcon.say_and_wait(`팔코는 어떻게 해야 할까?`);
      await falcon.say_and_wait(
        `기다리고 또 기다리다 보니 팔코의 마음은 점점 불안해졌어.`,
      );
      await falcon.say_and_wait(
        `트레이너${you.adult_sex_title}의 모습을 빨리 보고 싶어! 그 다정한 품에 빨리 안기고 싶어!`,
      );
      await falcon.say_and_wait(`그래서 팔코는 더는 기다릴 수 없어!`);
      await era.printAndWait(
        `점점 불안해하는 ${falcon.name}에게, ${you.actual_name}은(는) 다정하게 ${falcon.sex}의 작은 머리를 쓰다듬었다.`,
      );
      await you.say_and_wait(`괜찮아, 나는 여기 있어. 절대 떠나지 않아.`);
      await era.printAndWait(
        `조금 진정한 ${falcon.name}은 비로소 안심하고, ${you.actual_name}을(를) 바라보았다.`,
      );
      await era.printAndWait(
        `여성 메이크업 담당 「실례합니다, ……못 보셨나요?」`,
      );
      await era.printAndWait(
        `여성 메이크업 담당 「${falcon.actual_name_with_title}! 어서 오세요, 곧 시작해요!」`,
      );
      await you.say_and_wait(
        `앞으로도 계속 곁에 있을 거야. 그러니까 긴장하지 마.`,
      );
      await falcon.say_and_wait(`응! 트레이너${you.adult_sex_title}, 이따 봐♪`);
      await era.printAndWait(
        `웨딩드레스 자락을 살짝 들어 올리고, ${falcon.name}은 자신의 대기실로 돌아갔다.`,
      );
      await you.say_and_wait(`${falcon.name}`, true);
      await era.printAndWait(
        `머릿속에 방금 달려온 ${falcon.name}의 귀여운 모습이 떠오른다.`,
      );
      era.drawLine();
      await era.printAndWait(`한마음의 촛불을 밝힌 뒤, `);
      await era.printAndWait(
        `삼여신이 지켜보는 가운데, ${you.actual_name}과(와)${falcon.name}은 예배당으로 들어섰다.`,
      );
      await era.printAndWait(
        `신부 「삼여신의 뜻 아래, 저는 이 신성한 혼인을 지켜보고자 합니다.」`,
      );
      await era.printAndWait(
        `신부 「${falcon.uma_sex_title}는 삼여신께서 이계의 영혼을 이끄시고 어머니의 축복을 내리신 존재입니다.」`,
      );
      await era.printAndWait(
        `신부 「삼여신의 축복 아래 아름답고 강하며 달리기를 사랑하는 ${falcon.uma_sex_title}가 태어났습니다.」`,
      );
      await era.printAndWait(
        `신부 「삼여신께서는 인간과 ${falcon.uma_sex_title}가 평생 한마음으로 맺어지기를 바라십니다.」`,
      );
      await era.printAndWait(
        `신부 「태어날 아이도 삼여신의 축복을 받습니다. 버리지 말고 끝까지 길러야 합니다.」`,
      );
      await era.printAndWait(
        `신부 「그럼, ${you.actual_name}, 당신은 ${falcon.name}을 아내로 맞아 친구로서, 반려자로서 함께 살아가겠습니까?」`,
      );
      await era.printAndWait(
        `신부 「당신은 ${falcon.sex}를 사랑하고 존중하겠습니까? 기쁠 때나 괴로울 때나, 승리할 때나 방황할 때나 모든 것을 공평하게 나누겠다고 맹세합니까?」`,
      );
      era.printButton(`맹세합니다.`, 1);
      await era.input();
      era.printButton(
        `저는 당신, ${falcon.name}을 제 아내로 맞이합니다.`,
        1,
      );
      await era.input();
      era.printButton(
        `오늘부터 당신을 안고 지키며, 좋을 때나 나쁠 때나, 부유할 때나 가난할 때나, 아플 때나 건강할 때나, 죽음이 우리를 갈라놓을 때까지 사랑하고 아끼겠습니다.`,
        1,
      );
      await era.input();
      era.printButton(
        `삼여신의 뜻에 따라 당신을 향한 사랑과 충성을 맹세합니다.`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `신부 「그럼, ${falcon.name}, 당신은 ${you.actual_name}을(를) 남편으로 맞아 친구로서, 반려자로서 함께 살아가겠습니까?」`,
      );
      await era.printAndWait(
        `신부 「당신은 그를 사랑하고 존중하겠습니까? 기쁠 때나 괴로울 때나, 승리할 때나 방황할 때나 모든 것을 공평하게 나누겠다고 맹세합니까?」`,
      );
      await falcon.say_and_wait(`맹세합니다.`);
      await falcon.say_and_wait(
        `저는 당신, ${you.actual_name}을(를) 제 남편으로 맞이합니다.`,
      );
      await falcon.say_and_wait(
        `오늘부터 당신을 안고 지키며, 좋을 때나 나쁠 때나, 부유할 때나 가난할 때나, 아플 때나 건강할 때나, 죽음이 우리를 갈라놓을 때까지 사랑하고 아끼겠습니다.`,
      );
      await era.printAndWait(
        `신부 「결혼반지는 영원의 징표입니다. 다함없는 사랑을 품은 두 마음과 영혼이 영원히 맺어짐을 상징합니다. 지금 두 분의 사랑과 마음과 영혼이 영원히 하나가 되기를 바라는 간절한 소망을 선물로 ${falcon.sex}에게 전하십시오.」`,
      );
      await era.printAndWait(`신부 「신부에게 이 결혼반지를 끼워 주십시오.」`);
      await era.printAndWait(
        `허락을 받고 반지를 상자에서 조심스럽게 꺼내, ${falcon.name}의 약지에 끼웠다.`,
      );
      era.printButton(`${falcon.name}에게 반지를 끼워 준다`, 1);
      await era.input();
      await era.printAndWait(
        `왼손 약지를 빤히 바라보는 ${falcon.name}의 눈가에 행복의 눈물이 넘쳤다.`,
      );
      await era.printAndWait(
        `미래에 대한 두려움과 망설임이 남아 있어도, 지금의 ${falcon.name}은 의심할 여지 없이 가장 행복했다.`,
      );
      await era.printAndWait(
        `신부 「마찬가지로 두 분의 사랑과 마음과 영혼이 영원히 하나가 되기를 바라는 간절한 소망을 선물로 그에게 전하십시오.」`,
      );
      await era.printAndWait(`신부 「신랑에게 이 결혼반지를 끼워 주십시오.」`);
      await era.printAndWait(
        `같은 방식으로, ${falcon.name}은 상자에서 다른 반지를 꺼내 당신의 손가락에 끼웠다.`,
      );
      await era.printAndWait(`${you.actual_name}의 마음은, `);
      era.printButton(
        `${falcon.name}을 만난 것이 제 인생 최고의 영광입니다.`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `신부 「이 순간부터 서로를 생각하며 자신만 챙기지 마십시오. 공통의 이상을 품고 기쁨과 슬픔을 나누십시오.」`,
      );
      await era.printAndWait(
        `신부 「각자 초 하나를 들고 가운데 초에 불을 붙일 때, 자신을 상징하는 초는 꺼 주십시오.」`,
      );
      await era.printAndWait(
        `신부 「가운데 초를 밝히는 것은 두 사람의 새로운 삶이 시작됨을 뜻하며, 영원히 함께 살아가고 갈라놓을 수 없는 하나가 된다는 증표입니다.」`,
      );
      await era.printAndWait(
        `신부 「이 촛불의 빛이 두 분의 결합을 증명하기를 바랍니다.」`,
      );
      await era.printAndWait(
        `신부 「이 세상의 어떤 것도 두 분을 갈라놓을 수 없습니다. 축하합니다.」`,
      );
      await era.printAndWait(
        `두 사람은 축복 속에서 입을 맞추고 박수갈채를 받았다.`,
      );
      await era.printAndWait(
        `신부 「삼여신께서 두 분을 축복하시고, 그 가정이 사랑의 귀감이 되기를 바랍니다.」`,
      );
      await era.printAndWait(
        `꽃다발을 든 ${falcon.name}은 가장 행복한 미소를 지었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
};
