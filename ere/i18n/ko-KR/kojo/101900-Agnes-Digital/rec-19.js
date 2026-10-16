/**
 * @file アグネスデジタル - 募集
 * @author 片手虾好评发售中！
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  rec_start: (() => {
    /**
     * @param {CharaTalk} digital
     * @param {CharaTalk} you
     */
    const f = async (digital, you) => {
      const ret = [];
      await era.printAndWait(
        `훈련장은 원래 ${digital.uma_sex_title}들이 평소 달리는 곳이지만, 오늘은 트레이너들로 가득했다. 오늘은 훈련뿐 아니라 중요한 행사인 선발 레이스가 열리는 날이기 때문이다.`,
      );
      await era.printAndWait(
        `재능 있는 ${digital.uma_sex_title}가 뛰어난 트레이너를 만나려면 자신의 실력을 보여 줘야 한다. 선발 레이스는 그 절호의 기회였다.`,
      );
      await era.printAndWait([
        '트레이너인 ',
        you.get_colored_name(),
        ' 역시 질주하는 ',
        digital.uma_sex_title,
        '들을 주시하고 있었다. 그런데 문득 시야 한구석에, 관중석 그늘에 숨어 있는 분홍색 그림자가 들어왔다.',
      ]);
      era.println();
      await you.say_and_wait(`음…… ${digital.uma_sex_title}?`);

      await era.printAndWait(
        `
선발 레이스에는 원칙적으로 아직 트레이너가 없는 ${digital.uma_sex_title}들이 함께 출전한다. 이미 트레이너가 있는 ${digital.uma_sex_title}들은 대개 이보다 수준이 낮은 레이스에는 관심을 두지 않는다.`,
      );
      await era.printAndWait(`${you.name}은(는) 잠깐 살펴보기로 했다.`);
      await digital.say_and_wait(
        `우후후후, 교차하는 다리, 살짝 흐트러진 숨결, 한 치도 양보하지 않는 각오, 그리고 꿈에 그리던 만남…… 너무 고귀해, 고귀해, 고귀해……!`,
      );
      await era.printAndWait(
        `${
          you.name
        }이(가) 뒤쪽 계단을 돌아 관중석으로 올라가자, 분홍색 머리에 커다랗고 빨간 리본을 단 ${digital.uma_sex_title}가 보였다. 두 손을 높이 들고…… 응원 중인가?`,
      );

      era.println();
      await era.printAndWait(`${you.name}의 선택:`);
      era.printButton('（응원이라면 나보다 용기 있는 자는 없다!）', 1);
      era.printButton(
        `「너, ${digital.uma_sex_title}잖아? 왜 여기 있는 거야?」`,
        2,
      );
      ret.push(await era.input());
      if (ret.at(-1) === 1) {
        await era.printAndWait(
          `${you.name}은(는) 있을 리 없는 배낭에서 응원봉을 꺼냈다. 그리고……`,
        );
        await era.printAndWait(
          `엇박자 콜, 점프, 응원봉 휘두르기까지——우선 ${digital.sex}에게 응원 동작 한 세트를 화려하게 선보였다!`,
        );
        await you.say_and_wait(`응 하이, 오 하이…… 우랴 하이!`);
        await era.printAndWait(
          `응원봉을 휘두르는 건 떡을 치는 것과 같다. 다리와 허리, 팔까지 온몸의 근육으로 힘을 전달해야 가장 뜨거운 콜을 보낼 수 있는 법!`,
        );
        await digital.say_and_wait(`에? 여기 누가 있었나요? 설마……`);
        await era.printAndWait(
          `의아한 목소리를 낸 분홍색 ${digital.uma_sex_title}는 좌우를 둘러보다 몸을 돌려 당신을 바라보았다.`,
        );
        await digital.say_and_wait(
          `와아! 라이브 응원을 레이스에 접목하다니, 정말 멋져요! 당신, 분명 ${digital.uma_sex_title}를 무척 좋아하는 트레이너님이시군요!`,
        );
        await era.printAndWait(
          `당연하다. ${you.name}은(는) 백 명 중 한 명꼴로 뽑히는 중앙 트레이너니까. ${you.name}은(는) 의기양양하게 응원봉을 집어넣었다.`,
        );
        await you.say_and_wait(
          `그런데 궁금한 게 있어. 넌 왜 선발 레이스에 안 나가는 거야?`,
        );
        await digital.say_and_wait(
          `에? 저요? 아뇨 아뇨, 저는 어디에나 있는 평범한 ${digital.uma_sex_title} ${
            digital.name
          }이에요. 경기장에 설 만한 ${digital.uma_sex_title}가 아니라고요.`,
        );
        await era.printAndWait(
          `${digital.sex}는 자신은 전혀 어울리지 않는다는 듯 양손을 세차게 흔들었다.`,
        );
      } else {
        await digital.say_and_wait(
          `와아아악, 죄송해요! 이상한 모습을 보여 드렸네요. 당장 자리를 옮길게요!`,
        );
        await era.printAndWait(
          `${digital.sex}는 당황해서 양손을 흔들며 당장이라도 도망칠 기세였다.`,
        );
        await you.say_and_wait(`잠깐만!`);
        await digital.say_and_wait(`히익?`);
        await you.say_and_wait(`선발 레이스에는 안 나가?`);
        await digital.say_and_wait(
          `무리무리! 저는 그냥 평범한 ${digital.uma_sex_title} ${
            digital.name
          }이라고요. 이렇게 ${
            digital.couple_title
          }에게 폐를 끼치면 안 돼요! 디지땅은 멀리서 지켜보는 것만으로 충분해요! 천상계의 존재 같은 ${digital.uma_sex_title}는 멀리서 바라봐야 하는 법!`,
        );
        await era.printAndWait(
          `보기만 해도 알 수 있었다. ${digital.sex}는 고개를 도리도리 세차게 흔들고 있었다.`,
        );
      }
      await era.printAndWait(
        `${you.name}은(는) ${digital.sex}의 말을 잘 이해하지 못했다. ${
          digital.sex
        }는 ${digital.uma_sex_title}를 무척 좋아하는 것 같으면서도 가까이 다가가려 하지 않았다. 게다가 ${
          digital.sex
        } 자신도 ${digital.uma_sex_title} 아닌가.`,
      );
      await you.say_and_wait(
        `왜 안 나가? 가까이서 ${digital.couple_title}을 볼 수 있잖아?`,
      );
      await digital.say_and_wait(
        `에? 그 말씀도 일리가 있긴 한데…… 그래도 데뷔는 하고 싶지 않아요.`,
      );
      await digital.say_and_wait(
        `데뷔해 버리면, 반대편 마장에서 달리는 ${digital.uma_sex_title}를 가까이서 덕질할 수 없게 되잖아요!`,
      );
      await digital.say_and_wait(
        `그건 도저히 받아들일 수 없어요. 잔디에서 달리든 더트에서 달리든 ${digital.uma_sex_title}는 전부 최고인걸요!`,
      );
      await digital.say_and_wait(`우오오오오……`);
      await era.printAndWait(
        `${digital.sex}는 머리를 감싸 쥐고 몹시 괴로워했다.`,
      );
      await era.printAndWait(
        `${digital.sex}의 고민을 완전히 이해하지는 못했지만, 잔디와 더트 중 하나만 골라야 한다는 사실에 초조해하는 듯했다.`,
      );
      await era.printAndWait(
        `확실히 지금까지 두 마장 모두에서 훌륭하게 달리는 ${digital.uma_sex_title}에 관한 이야기는 듣지 못했다…… 적어도 중앙에서는.`,
      );
      await digital.say_and_wait(`그럼 전 이만 가볼게요!`);
      await era.printAndWait(
        `어째서 선발 레이스에 나가지 않는 걸까. 잘 맞는 트레이너를 만나 데뷔하고, 레이스에 이름을 남기는 것. 그게 모든 ${digital.uma_sex_title}의 꿈이 아니었나?`,
      );
      return ret;
    };
    f.title = '변태다! 변…… 변태인가? (전편)';
    return f;
  })(),
  rec_end: (() => {
    /**
     * @param {CharaTalk} digital
     * @param {CharaTalk} you
     */
    const f = async (digital, you) => {
      await era.printAndWait(
        `${you.name}은(는) ${digital.name}에게 호기심이 생겼다. 선발 레이스 다음 날, 운 좋게 공용 훈련장에서 ${digital.sex}를 발견했다.`,
      );
      await digital.say_and_wait(
        `후헤후헤, ${digital.uma_sex_title}가 달렸던 더트…… 이 몸으로 감히 범접할 수 없는 땅을 달리다니, 세 여신의 은총이야……`,
      );
      await era.printAndWait(
        `힘찬 다리가 더트를 딛자 흙먼지가 피어올랐다. 힘이 좋은 다리를 보니 더트에 잘 맞는 듯했다.`,
      );
      await digital.say_and_wait(
        `야호~ ${digital.uma_sex_title}짱이 달렸던 잔디라니, 너무 최고야…… 이 정도면 어떤 전개에서도 성적을 낼 수 있겠어. 덕을 쌓았구나~`,
      );
      await era.printAndWait(
        `이마의 땀을 닦고 하늘을 올려다보며 웃는 ${digital.sex}는 무척 즐거워 보였다.`,
      );
      await era.printAndWait(
        '잠깐, 디지털은 방금 잔디로 코스를 바꾼 건가? 그렇다면……',
      );
      await era.printAndWait(
        `즉, ${digital.sex}는 두 배의 훈련량을 소화해 이런 상태를 만들어 낸 것이다!`,
      );
      era.println();
      await you.say_and_wait(
        `그 정도 실력을 갖추고도 선발 레이스에 안 나가는 거야? 너무 아깝잖아!`,
      );
      era.println();
      await digital.say_and_wait(
        `아뇨 아뇨, 나갔다간 제 뇌가 팝콘처럼 터져 버릴 거예요!`,
      );
      await digital.say_and_wait(`음…… 에! 당신이 왜 여기에?`);
      await era.printAndWait(
        `지난번에 좋은 인상을 남겨서인지, 아니면 그저 설명하고 싶어서인지. ${digital.sex}는 저쪽에서 잠깐 이야기하자는 눈짓을 보냈다.`,
      );
      era.drawLine();
      await era.printAndWait(`${digital.sex}를 따라 훈련장 관중석으로 갔다.`);
      await era.printAndWait(
        `대부분의 트레이너는 가까이에서 ${digital.uma_sex_title}의 훈련을 지켜본다. 그래서 관중석은 오히려 한산했다.`,
      );
      await era.printAndWait(
        `난간에 손을 올린 디지털은 훈련장에서 달리는 ${digital.uma_sex_title}들을 바라보았다.`,
      );
      era.println();
      await digital.say_and_wait(
        `사실 저는 최애에 대한 망상을 품고 달리고 있어요.`,
      );
      await era.printAndWait(
        `그렇게 말하며 디지털은 생각에 잠긴 표정을 지었다.`,
      );
      await you.say_and_wait(`최애에 대한 망상?`);
      await digital.say_and_wait(
        `에? 전문 용어가 나왔나요? 음, 쉽게 말씀드리면……`,
      );
      await era.printAndWait(
        `${
          digital.sex
        }는 ${digital.uma_sex_title}에 대한 사랑을 쉴 새 없이 늘어놓았다. 어떻게 좋아하게 됐는지, 그 마음으로 트레센에 입학한 일, 데뷔하려던 순간 깨달은 사실까지……`,
      );
      await digital.say_and_wait(
        `보시다시피 잔디와 더트 모두 적성은 나쁘지 않아요. 하지만 둘 다 가능하니까 고를 수가 없어요! 하나를 고르면 다른 하나를 포기해야 하잖아요!`,
      );
      await era.printAndWait(`디지털은 어쩔 수 없다는 듯 양팔을 벌렸다.`);
      await digital.say_and_wait(
        `${digital.uma_sex_title}짱들은 양쪽 모두 저마다의 매력이 있어요! 전부 고귀하다고요!`,
      );
      await digital.say_and_wait(
        `도저히 받아들일 수 없었어요! 그래서 각오를 버렸죠. 아무것도 고르지 않기로요!`,
      );
      await digital.say_and_wait(`아하하하하!`);
      await era.printAndWait(
        `허리에 손을 올리고 고개를 젖힌 채, ${digital.sex}는 자조하듯 크게 웃었다.`,
      );
      await digital.say_and_wait(
        `어때요? 이제 속수무책이죠? 저는 이렇게 각오도 없는 ${digital.uma_sex_title}라고요!`,
      );
      await you.say_and_wait(`각오가 없다니……`);
      await era.printAndWait(
        `트레이너로서 ${
          you.name
        }은(는) 더트 전문 ${digital.uma_sex_title}나 단거리 전문 ${digital.uma_sex_title}가 트윙클 시리즈에서 가장 인기 있는 중거리 잔디 레이스에 나가지 못해 고민하는 모습을 여러 번 보고 들었다.`,
      );
      await era.printAndWait(
        `그래도 결국 ${digital.couple_title}은 깨닫는다. 레이스 그 자체의 의미는 인기보다 훨씬 크다는 것을.`,
      );
      await era.printAndWait(
        `그럼 이 ${digital.uma_sex_title}는 어떤가? ${
          digital.name
        }이라는 이름의 ${digital.uma_sex_title}는 잔디와 더트를 동시에 달릴 수 없다는 사실 때문에 고민하고 있다. 하지만 다른 ${digital.uma_sex_title}들과 달리 ${
          digital.sex
        }에게는 그 재능이 있다.`,
      );
      await era.printAndWait(
        `게다가…… ${digital.sex}는 그것을 위해 두 배로 노력하고 있다.`,
      );
      await digital.say_and_wait(
        `후후후, 할 말이 없으시죠? 그럼 전 이만 가볼게요~`,
      );
      era.println();
      await you.say_and_wait(
        `아니야. 달리 말하면 네가 가장 각오가 되어 있는 거야!`,
      );
      await digital.say_and_wait(`에? 그게 무슨 뜻이에요?`);
      await era.printAndWait(
        `그렇다. 방금 그 작은 몸으로 더트를 힘차게 달리는 모습을 보았다.`,
      );
      await era.printAndWait(`더트에 못지않게 잔디 위를 가볍게 달리는 모습도.`);
      await era.printAndWait(
        `고르지 못한 채로도 ${digital.sex}는 양쪽 모두에서 이토록 노력해 왔다.`,
      );
      await era.printAndWait(`지금 그걸 살릴 수 있다!`);
      await you.say_and_wait(`고르지 않겠다는 각오야!`);
      await era.printAndWait(
        `그래, 고르지 않는 것 자체도 하나의 선택이다. 하지만 ${digital.sex}가 말하는 「고르지 않음」에는 두 배의 노력이 필요하다!`,
      );
      await digital.say_and_wait('에?');
      await you.say_and_wait(
        `고르지 않겠다는 거야! 잔디와 더트 중 하나를 고르지 않으면, 둘 다 고르는 셈이잖아!`,
      );
      await era.printAndWait(
        `디지털은 얼어붙었다. 평소 힘없이 늘어져 가끔 흔들리던 꼬리마저 멈췄다.`,
      );
      await digital.say_and_wait('에? 잔디와 더트 둘 다 고른다니, 그 말은……');
      await you.say_and_wait(`그래, 올라운더야!`);
      await digital.say_and_wait('아뇨 아뇨 아뇨, 무리예요.');
      await digital.say_and_wait(
        '창작물에서도 쉽게 등장시키지 못하는 올라운더라고요!?',
      );
      await era.printAndWait('음, 아무리 그래도 현실성이 없었나……');
      await digital.say_and_wait('천재세요!?');
      await digital.say_and_wait(
        `잔디에서는 잔디를 박차고 달리는 ${digital.uma_sex_title}를 보고, 더트에서는 흙먼지를 일으키는 ${digital.uma_sex_title}도 볼 수 있다는 거잖아요!?`,
      );
      await digital.say_and_wait('히야아아아아아!!!!!!!!!!!!!!!!!!!!!');
      await era.printAndWait(
        `디지털은 정말 말이 빨랐다. ${you.name}이(가) 반응하기도 전에 ${digital.sex}는 환성을 지르며 두 손을 들고 한 바퀴 돌았다.`,
      );
      await era.printAndWait(
        `${digital.sex}는 이해한 모양이다. 도전할 마음이 생긴 걸까?`,
      );
      await digital.say_and_wait(
        `${digital.uma_sex_title}짱들을 정성껏 모신 보람이 드디어 있네요!`,
      );
      await digital.say_and_wait('우히야아아아아!');
      await digital.say_and_wait('결정했어요! 디지땅, 올라운더 왕이 되겠어요!');
      await digital.say_and_wait('모든 최애를 가장 가까이서 만나기 위해서요!');
      await you.say_and_wait(`재밌네. 내 담당이 되지 않을래?`);
      await era.printAndWait(`${you.name}은(는) 오른손을 내밀었다.`);
      await era.printAndWait(
        `방금 더트와 잔디에서 달리는 모습을 보았지만, 레이스는 훈련과 다르다. ${digital.sex}의 앞날이 어떻게 될지 강한 호기심이 일었다.`,
      );
      await digital.say_and_wait(
        `……미리 말씀드리지만, 저는 그저 가장 가까이서 최애를 덕질하고 싶을 뿐이에요. 너무 기대하지 마세요……`,
      );
      await era.printAndWait(`벌써부터 꽁무니를 빼다니……`);
      await era.printAndWait(
        `하지만 ${digital.sex}의 눈빛은 확고했다. 작은 손이 당신의 손을 맞잡았다.`,
      );
      await era.printAndWait(
        `조금 이상해 보일지 몰라도, ${digital.sex}는 레이스에서 남다른 불꽃을 피울 수 있다. ${you.name}은(는) 그렇게 확신했다.`,
      );
    };
    f.title = '변태다! 변…… 변태인가? (후편)';
    return f;
  })(),
};
