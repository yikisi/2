/**
 * @file キタサンブラック - 募集
 * @author 小黑
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} kita
   * @param {CharaTalk} you
   */
  async rec(kita, you) {
    await era.printAndWait(
      '이른 아침의 트레센은 평소처럼 한산했다. 벽돌길을 달리는 이들이 몇 명 있을 뿐이었다.',
    );
    await era.printAndWait(
      `무거운 레이스 도구 상자를 안은 ${you.name}은(는) 맑은 하늘을 올려다보며 한 걸음씩 선발 레이스 경기장으로 향했다.`,
    );
    await era.printAndWait(
      '편자들이 챙챙 부딪쳤고, 상자 안에는 번호표와 출발 신호용 공포탄이 산더미처럼 쌓여 있었다.',
    );
    await era.printAndWait(
      '전국에서 시설이 가장 잘 갖춰진 중앙에서도 아낄 수 있는 건 아끼는 모양이다……',
    );
    await era.printAndWait(`${you.name}은(는) 그렇게 감탄하며 계속 걸었다.`);
    await era.printAndWait(
      `트레센 학원에서는 아직 담당이 정해지지 않은 우마무스메들을 신입 트레이너들이 돌보는 전통이 대대로 이어져 왔다.`,
    );
    await era.printAndWait(
      '막상 해 보면 신입 트레이너의 노동력을 쥐어짜는 힘든 육체노동이었다.',
    );
    await era.printAndWait(
      '일의 양이 특별히 많지도 적지도 않았지만, 새벽부터 일어나야 하는 건 아무래도 짜증이 났다.',
    );
    await era.printAndWait(
      `혼자서 경기장에 나올 수십 명분의 도구를 나르게 하니, 신입들은 「이건 착취야」라며 화를 내고 투덜거렸다.`,
    );
    await era.printAndWait(
      `사실 거의 모든 트레이너가 한 번은 이 힘든 일을 맡았고, 이름난 트레이너들도 예외는 아니었다.`,
    );
    await era.printAndWait(
      `그렇다고 선발 레이스 경기장이 한두 곳도 아닌데 신입 전원을 며칠씩 쉬지도 못하게 해 평소 업무를 망칠 수도 없었다.`,
    );
    await era.printAndWait(
      `몇 명이 함께하면 쉽게 끝날 일을 하루에 한두 명이 맡으니 고행이 되었다.`,
    );
    await era.printAndWait(
      `개인에게 배정되는 순간 날씨가 나쁜 날 걸린 사람만 손해를 보는, 누구도 행복하지 않은 고생의 악순환이 되는 것이다.`,
    );
    await you.say_and_wait(`너무하네……`, true);
    await era.printAndWait(
      `${you.name}이(가) 속으로 그렇게 투덜거리는 순간, 두 팔에 들린 무거운 상자가 갑자기 가벼워졌다. ${you.name}은(는) 저도 모르게 놀랐다.`,
    );
    await kita.say_and_wait(
      '트레이너 씨, 이거 전부 선발 레이스 경기장까지 옮기시는 거예요? 저한테 맡겨 주세요.',
    );
    await era.printAndWait(
      `${you.name}이(가) 돌아보자 축제의 아침처럼 밝고 명랑한 ${kita.teen_sex_title}의 체향이 얼굴에 와닿았다.`,
    );
    await era.printAndWait(
      `여름밤의 노점처럼 우마무스메의 몸에는 은은한 불꽃놀이 냄새가 남아 있었다. 노점 옆에 쪼그려 앉은 ${kita.teen_sex_title}의 하얀 피부에 배어 나온 땀 냄새까지 맡을 수 있을 것 같았다.`,
    );
    await era.printAndWait(
      `희미한 땀 냄새에는 안도감이 있었다. 하지만 교사로서의 책임감이 ${you.name}을(를) 곧바로 현실로 끌어당겼다.`,
    );
    await era.printAndWait([
      you.get_colored_name(),
      '의 뒤에서 검은 단발머리의 ',
      kita.child_sex_title,
      '가 ',
      you.get_colored_name(),
      '에게 미소를 지어 보이자 ',
      you.get_colored_name(),
      '의 가슴에 남아 있던 불평이 흔적도 없이 날아갔다.',
    ]);
    await kita.say_and_wait(
      '트레이너 씨, 괜찮으세요? 보건실까지 모셔다 드릴까요?',
    );
    await era.printAndWait(
      `우마무스메는 한 손으로 상자를 안고, 다른 손으로 ${
        you.name
      }의 이마를 짚으며 걱정스럽게 물었다.`,
    );
    era.printButton('「아아…… 괜찮아. 걱정해 줘서 고마워.」', 1);
    era.printButton(`「덕분에 살았네. 그런데 이름이 뭐니?」`, 2);
    await era.input();
    await era.printAndWait(
      `처음 만났는데도 거리낌 없이 도와주는, 아직 이름조차 모르는 ${kita.uma_sex_title}에게 ${
        you.name
      }은(는) 왠지 모르게 미안한 마음이 들었다.`,
    );
    await kita.say_and_wait(
      `제 이름은 ${kita.name}, 올해 막 초등부에 입학했어요.`,
    );
    await kita.say_and_wait(`이거 어디로 옮기면 되나요? 제가 옮길게요.`);
    await era.printAndWait(
      `검은 머리의 아이는 웃으며 ${you.name}에게 고개를 끄덕였다. 목적지를 확인한 뒤 ${you.name}과(와) 함께 선발 레이스 경기장으로 걸어갔다.`,
    );
    await era.printAndWait(
      `${kita.teen_sex_title}와 나란히 걷는 동안 ${
        you.name
      }은(는) 옆으로 고개를 돌려 오른쪽 앞에서 걷는 우마무스메를 살펴보았다.`,
    );
    await era.printAndWait(
      `${kita.child_sex_title}는 ${
        you.name
      }의 시선을 알아차리지 못하고 콧노래를 부르며 오솔길을 걸었다. 그래서 ${
        you.name
      }은(는) 거리낌 없이 ${kita.sex}의 고운 옆얼굴을 바라볼 수 있었다.`,
    );
    await era.printAndWait(
      `하얀 얼굴에 맑은 호박색 눈동자가 자신감 넘치고 근심 없는 빛을 띠고 있었다.`,
    );
    await era.printAndWait(
      `${kita.sex}는 발밑의 길을 주의 깊게 보며 이따금 무릎으로 상자를 받쳐 올려 더욱 단단히 고쳐 안았다.`,
    );
    if (kita.sex_code !== 1) {
      await era.printAndWait(
        `하지만 땀으로 피부에 달라붙은 운동복은 멋대로 탄력 있고 부드러운 몸의 형태를 드러내고 있었다.`,
      );
      await era.printAndWait([
        '붉은 천이 ',
        kita.child_sex_title,
        '의 살집 좋은 허벅지와 엉덩이를 꼭 감싸고 있었다. 순산형의 넓은 엉덩이는 허벅지가 움직일 때마다 서로 눌리고 비벼져, 하얀 찹쌀떡처럼 상상력을 자극했다.',
      ]);
    }
    await era.printAndWait([
      kita.child_sex_title,
      '의 피부 구석구석에서 음란한 땀 냄새가 풍겼지만, 그 맑은 눈동자는 제 몸이 얼마나 관능적인지 전혀 모르는 듯했다.',
    ]);
    await kita.say_and_wait(
      '트레이너 씨, 새로 오신 분이죠? 아침부터 짐 옮기느라 수고 많으세요.',
    );
    await kita.say_and_wait(
      '고향에 있을 때 아버지도 제자들에게 자주 짐을 옮기게 하셨거든요. 그래서 부림당하는 기분은 저도 잘 알아요.',
    );
    await era.printAndWait([
      kita.child_sex_title,
      '는 수수한 미소를 지으며 ',
      you.get_colored_name(),
      '에게 말을 걸었다. 따뜻한 햇살이 일렁이는 듯했다.',
    ]);
    await era.printAndWait(
      `햇빛이 나뭇그늘을 잘게 가르며 이 밝고 상냥한 ${kita.uma_sex_title}의 위로 내려앉았다.`,
    );
    await era.printAndWait(
      `이렇게 스스럼없이 대하는 상대에게 욕정을 품고 만 ${you.name}은(는) 조금 낯이 뜨거워졌다.`,
    );
    era.println();
    era.printButton('「정말 고마워. 큰 도움이 됐어.」', 1);
    await era.input();
    await kita.say_and_wait(
      '아니에요, 저도 이 운동장에서 선발 레이스를 뛰거든요. 짐 옮기는 것쯤은 아무것도 아니에요.',
    );
    await era.printAndWait(
      `${kita.name}은 가슴을 두드렸다. 한가해진 ${kita.sex}는 ${you.name}에게 자신과 또 다른 친구의 이야기를 하기 시작했다.`,
    );
    await era.printAndWait(
      `${
        kita.sex
      }의 이야기는 그야말로 막힘없이 흘러나왔다. 어릴 때부터 우마무스메 선배들을 동경하던 두 사람이 약속을 하고 트레센 학원이라는 무대에 발을 들였다는 이야기였다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 이 아침이 아름답다고 생각했다. 햇빛이 나뭇그늘을 잘게 가르고, 참새들이 상쾌한 봄날을 맞아 드높이 노래했다.`,
    );
    await era.printAndWait(
      `하지만 그 시간도 금세 끝났다. 운동장에 들어선 ${kita.name}이 상자를 트랙 옆에 내려놓자 나란히 걷던 시간도 끝났다.`,
    );
    await kita.say_and_wait(
      '그럼 트레이너 씨, 저는 준비 운동하러 갈게요. 시간 되시면 제 레이스 보러 와 주세요.',
    );
    await era.printAndWait(
      `검은 머리의 우마무스메는 트랙으로 가볍게 뛰어가 ${
        kita.sex
      }가 아는 친구와 이야기를 나누기 시작했다.`,
    );
    await era.printAndWait(
      `보러 가는 게 좋을지도 모르겠다고 ${you.name}은(는) 생각하며 선수들에게 번호표를 나눠 주기 시작했다.`,
    );
    era.drawLine();
    await era.printAndWait(
      `오전 내내 바쁘게 일한 뒤 마침내 여유가 생긴 ${you.name}은(는) 관중석에 앉아 선발 레이스를 지켜보기 시작했다.`,
    );
    await era.printAndWait(
      `이미 한 레이스가 출발 신호와 함께 시작되고 있었다. 게이트가 열리자 경쾌한 검은빛이 번쩍이며 폭풍처럼 지나갔다.`,
    );
    await era.printAndWait(
      `트레이너 A「저 애가 ${kita.name}인가? 실력이 대단한데.」`,
    );
    await era.printAndWait(
      `트레이너 B「컨디션이 좋네. 이번 레이스의 승리는 ${kita.sex}의 차지겠어.」`,
    );
    await era.printAndWait(
      `트레이너 C「기록에 적힌 성격도 괜찮아. 담당으로 삼기에 꽤 좋은 선택이겠지.」`,
    );
    await era.printAndWait(
      `트레이너들의 낮은 환성 속에서 ${kita.name}은 한 마신도 내주지 않고 선두를 달렸다.`,
    );
    await era.printAndWait(
      `힘이 실린 두 다리가 잔디에 흙이 드러날 만큼 깊은 발자국을 남겼다. 그 타고난 자질은 자리에 있던 모든 트레이너의 시선을 사로잡았다.`,
    );
    await era.printAndWait([
      kita.get_colored_name(),
      '은 대도주 전술로 힘차게 달려 결승선을 통과했다. 이로써 ',
      kita.sex,
      '의 승리가 확정되었다.',
    ]);
    await era.printAndWait(`지금 ${you.name}은(는)……?`);
    era.printButton(`（${kita.sex}의 트레이너가 되고 싶다……!)`, 1);
    era.print('(계속 영입한다)', { offset: 1, width: 12 });
    era.printButton(
      `(아마 ${kita.sex}에게는 더 좋은 트레이너가 있을 거야……)`,
      2,
    );
    era.print('(영입을 포기한다)', { offset: 1, width: 12 });
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(
        `삼켜진 듯, 도망칠 수 없을 듯한 감정이 ${you.name}의 가슴에서 타올라 더는 입을 다물고 있을 수 없게 했다.`,
      );
      await era.printAndWait(
        `레이스가 끝나자 우마무스메들은 흩어졌고, 트레이너들은 먹이를 쫓는 물고기처럼 그 뒤를 따랐다.`,
      );
      await kita.say_and_wait(
        `으와아아아! ${you.name} 씨라니…… 아까 그 트레이너 씨잖아요!`,
      );
      await era.printAndWait(
        `트랙 구석에서 ${you.name}은(는) 땀을 닦고 있는 ${kita.name}을 발견했다.`,
      );
      await kita.say_and_wait(
        '저기, 저…… 지금 땀을 닦고 있어서요. 트레이너 씨, 영입 이야기라면 잠깐 기다려 주실래요……?',
      );
      await kita.say_and_wait('가능하면 조금만 더 기다려 주셨으면……');
      await era.printAndWait(
        `이 ${kita.child_sex_title}는 뚜껑을 연 생수병을 쥐고 곤란한 얼굴로 ${
          you.name
        }을(를) 바라봤다. ${kita.sex}의 뺨은 달린 탓에 새빨갛게 달아올랐고, 꼬리는 혼란스러운 마음을 드러내며 흔들렸다.`,
      );
      await era.printAndWait(
        `하지만 ${you.name}은(는) 참을 수 없었다. 참을 수가 없었다. 그런 달리기를 보고 어떻게 참을 수 있겠는가!`,
      );
      await you.say_and_wait(
        `${kita.name}, 네 표정도 눈빛도 최고야. 내가 네 트레이너가 되게 해 줘!`,
      );
      await era.printAndWait(
        `${you.name}의 제안을 들은 ${kita.name}은 원래도 혼란스러웠는데 더욱 혼란에 빠졌다.`,
      );
      await kita.say_and_wait(
        '자, 잠깐, 잠깐만요. 이거 혹시 작업 거시는 거예요!? 너무 빨라요, 너무 빨라요! 이렇게 열렬하게 다가오시면 어떻게 시작해야 할지 모르겠어요!',
      );
      await kita.say_and_wait(
        '어떡해, 다이아. 나 아직 마음의 준비가 안 됐어! 외모만 보고 영입하지 마세요, 트레이너 씨! 저, 실력도 있으니까요!',
      );
      await era.printAndWait(
        `${kita.name}은 꼬리를 흔들며 당황한 표정을 지었다.`,
      );
      await era.printAndWait(
        `오늘 아침 처음 만난 트레이너에게 구애받는다고 생각한 우마무스메, ${kita.teen_sex_title}의 머리는 과열되어 사고 능력을 잃었다.`,
      );
      await era.printAndWait(
        `한 걸음씩 다가오는 트레이너를 향해 ${kita.name}은 거의 척수반사처럼 반사적으로 다리를 들어 올렸고……`,
      );
      await you.say_and_wait('그러니까, 나를 트레이너로── 푸악!?');
      await era.printAndWait(`묵직한 발차기가 ${you.name}의 얼굴에 꽂혔다.`);
      await era.printAndWait(
        `꼬박 삼십 분 동안 사정을 설명한 ${you.name}은(는) 마침내 ${kita.name}의 연락처를 손에 넣었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 정오의 햇빛과 ${kita.name}의 미안해하는 얼굴을 보며 이런 아이와 계약할 수 있어 안도했다.`,
      );
    } else {
      await era.printAndWait(
        `${you.name}은(는) 가슴의 설렘을 털어 내고 트레이닝장을 떠났다.`,
      );
    }
    return ret;
  },
};
