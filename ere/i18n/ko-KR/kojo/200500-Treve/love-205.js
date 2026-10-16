/**
 * @file トレヴ - 恋慕
 * @author 梦露
 */
const era = require('#/era-electron');

module.exports = {
  '49-1': (() => {
    const title = 'Un amour à taire (숨겨야 할 사랑)';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, you) => {
      await treve.print_and_wait([
        '어느 날 밤, ',
        treve.get_colored_name(),
        '는 기숙사에서 ',
        you.get_colored_name(),
        '과(와) 프랑스에서 함께 들었던 노래를 떠올렸다.',
      ]);
      era.setColor(treve.color);
      era.setAlign('center');
      await era.printAndWait(
        '지나간 날들이 우리를 앞으로 이끌고, 더 또렷한 눈으로 바라보게 하네.',
      );
      await era.printAndWait(
        '의심은 위태롭고, 때로는 치명적이지. 감정은 그토록 여리니까.',
      );
      await era.printAndWait('희망에 가득 차 있든, 운에 맡기든.');
      await era.printAndWait(
        '모든 것은 하늘의 뜻대로. 그렇다면 흐름에 몸을 맡기자.',
      );
      await era.printAndWait('이별과 재회는 우리가 함께 간직한 기억.');
      await era.printAndWait('사랑은 우리가 생각하는 것보다 훨씬 단단해.');
      await era.printAndWait('내 곁에 있을 때, 당신은 무엇을 하고 있나요?');
      await era.printAndWait('시간이 신비로운 빛깔을 두르네.');
      await era.printAndWait('부드러운 밤바람이 천천히 지나가네.');
      await era.printAndWait('사랑은 우리가 생각하는 것보다 훨씬 단단해.');
      await era.printAndWait('아니면 새장 안에서 행복하게 살아갈까.');
      await era.printAndWait('우리가 없다면 그들의 선택에 무슨 의미가 있을까?');
      await era.printAndWait('사랑은 우리보다 훨씬 강해……');
      await era.printAndWait(
        '사람들은 그것으로 충분하다고 해. 더 사랑하기 위해 그렇게 말하지.',
      );
      await era.printAndWait(
        '하지만 이것은 우리의 사랑이어야 해. 우리보다 강한 그 사랑.',
      );
      await era.printAndWait(
        '함께할 수 있는 통행증만 있다면 충분하다고 나는 믿어.',
      );
      await era.printAndWait(
        '또렷한 목소리로 말해야 해. 이 모든 것은 우리 때문이라고.',
      );
      await era.printAndWait('사랑은 우리보다 훨씬 강해……');
      era.setAlign('left');
      era.setColor();
      era.println();
      era.printButton(
        `「나, 이렇게 단순한 프랑스 ${treve.child_sex_title}였구나……」(관계를 진전시킨다)`,
        1,
      );
      era.printButton(
        '「쓸데없는 생각은 그만하자. 안 자면 스승님께 혼나겠어.」(당분간 진전시키지 않는다)',
        2,
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
  '49-2': (() => {
    const title = 'La fée (평범한 사람을 사랑한 요정)';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     * @param {string} cup トレヴのカップ
     */
    const f = async (treve, you, callname, cup) => {
      const ret = [];
      await era.printAndWait([
        '바람이 불어 ',
        treve.get_colored_name(),
        `의 금빛 머리카락을 흔든다.${treve.sex}의 피부는 밝은 눈과 같다.`,
      ]);
      await era.printAndWait(
        '감청색 눈동자는 윤기가 흐르면서도, 그윽하면서도 살짝 가벼운 느낌이다.',
      );
      await era.printAndWait(
        '촉촉하게 빛나는 입술은 거의 투명한 아름다움을 보여준다.',
      );
      await era.printAndWait(
        '얼굴에는 나이를 초월한 매력이 있어, 한눈에 빠져들게 한다.',
      );
      await era.printAndWait(
        '빛깔 고운 짧은 금발은 낮게 두 갈래로 틀어 올려져, 섬세한 윤기를 띤다.',
      );
      await era.printAndWait(
        '소녀의 흰 타이츠를 입은 허벅지는 가늘고 부드럽다. 프랑스풍의 학생화를 신고, 소녀다운 활기가 넘친다.',
      );
      await era.printAndWait(
        '하지만 눈썹과 이마는 조각한 듯 단정해, 평범한 집안에서는 감히 범접하기 어려운 얼굴이다.',
      );
      await era.printAndWait([
        treve.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '에게 미소를 지으며, ',
        you.get_colored_name(),
        '의 무례에 화가 난 기색은 없다.',
      ]);
      await era.printAndWait(
        `${treve.sex}는 원피스를 입고 있다. 어깨끈이 옷깃에서 교차해 목의 흰 레이스 칼라로 이어진다.`,
      );
      await era.printAndWait('상반신은 대체로 흰색이며, 가슴을 감싸고 있다.');
      await era.printAndWait([
        treve.get_colored_name(),
        '의 허리도 가늘다. 파란 가죽 벨트를 매고 있다.',
      ]);
      await era.printAndWait('허리 아래로는 파란 치마가 펼쳐진다.');
      await era.printAndWait('겉감은 보석 같은 파란색으로, 위쪽 겹을 이룬다.');
      await era.printAndWait(
        '그 아래에는 흰 페티코트가 있으며, 마찬가지로 레이스와 테두리 장식이 달려 있다.',
      );
      await era.printAndWait('치마는 길지 않아 허벅지 중간까지 내려온다.');
      await era.printAndWait([
        treve.get_colored_name(),
        '의 다리가 가늘다. 다리에는 하얀 무릎까지 오는 양말—— 반투명하다.',
      ]);
      await era.printAndWait(
        '양말과 치마 사이로 드러난 다리도 유난히 매혹적이다.',
      );
      await era.printAndWait('오른쪽 다리에는 흰 가터가 있다.');
      await era.printAndWait(
        '발에는 파란 구두를 신고 있다. 흰 끈 여러 가닥이 발목을 감싸고, 리본 매듭까지 달려 있다.',
      );
      era.printButton('「예쁘네.」', 1);
      await era.input();
      await treve.say_and_wait('고마워.');
      era.printButton(
        '「그런데 프랑스에는 금발에 푸른 눈을 가진 사람이 많잖아……」',
        1,
      );
      await era.input();
      await treve.say_and_wait('나, 안 예뻐? 봐 봐, 잘 봐!');
      await era.printAndWait([
        treve.get_colored_name(),
        '은(는) 다가와 상체를 숙이고 고개를 든다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '과(와) ',
        treve.get_colored_name(),
        '의 코끝은 한 치도 채 되지 않는 거리다.',
      ]);
      await era.printAndWait([
        '고개를 숙이면, 이 각도에서는 딱 ',
        treve.get_colored_name(),
        '의 가슴이 보인다.',
      ]);
      if (cup < 'D') {
        await era.printAndWait(
          `${treve.sex}의 가슴은 크지 않다. 대충 보면 B~C 사이의 작은 가슴이다.`,
        );
      }
      await era.printAndWait(
        `하지만 지금 ${treve.sex}가 앞으로 숙이면, 보이는 모습이 달라진다.`,
      );
      await era.printAndWait(
        '원피스에 감싸인 반구와, 목의 칼라로 이어지는 두 개의 리본이, 금방이라도 끊어질 듯 팽팽하게 당겨져 있다.',
      );
      if (you.sex_code === 1) {
        await era.printAndWait([
          '남자와 여자, 단 둘이서라도 ',
          treve.sex,
          '는 ',
          you.get_colored_name(),
          '이(가) 선을 넘는 것을 두려워하지 않는다.',
        ]);
      }
      await era.printAndWait([
        you.get_colored_name(),
        `은(는) 눈앞의 ${treve.teen_sex_title}을 바라보았다. 눈가에는 `,
        you.get_colored_name(),
        '을(를)만나기 위해 일부러 바른 립스틱이 묻어 있어 귀엽다.',
      ]);
      await era.printAndWait([
        '아쉬운 점은 원피스를 입은 ',
        treve.get_colored_name(),
        '의 배꼽이 보이지 않는다는 것이다.',
      ]);
      await era.printAndWait(
        '하지만 신은 한 문을 닫을 때, 다른 창문을 열어준다.',
      );
      await era.printAndWait([
        '——',
        treve.get_colored_name(),
        '의 옷에는 소매가 없다.',
      ]);
      era.printButton('「옆구리를 만져도 될까?」', 1);
      await era.input();
      await treve.say_and_wait('Non，Trousseur de jupons.');
      era.printButton('「무슨 말인지 모르겠는데, 그럼 만져볼게.」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 번개처럼 양손을 뻗어 ',
        treve.get_colored_name(),
        '의 양옆구리를 덮쳤다.',
      ]);
      await treve.say_and_wait('핫! 아하하하……');
      await era.printAndWait([
        treve.get_colored_name(),
        '은(는) 양손을 재빨리 내리고, 겨드랑이를 꽉 조인다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 손가락을 세게 끼고, 그 후 웃기 시작했다.',
      ]);
      await era.printAndWait('때로는 고개를 들고, 때로는 숙이려고 한다.');
      await era.printAndWait(
        '어린 우마무스메의 겨드랑이는 유난히 부드러워, 갓 만든 두부 같다.',
      );
      await era.printAndWait([
        treve.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '에게 진퇴양난에 빠져, 좌우로 움직일 수 없다. 양옆이 단단히 막혀 있다.',
      ]);
      await era.printAndWait([
        '등은 이미 벽에 닿아 있다. 앞에는 ',
        you.get_colored_name(),
        '이라는 원흉이 가로막고 있다.',
      ]);
      await treve.say_and_wait([
        `${callname}, 잠깐……아하하하……이제, 이제 그만!`,
      ]);
      await treve.say_and_wait([
        '제발……아하하하……',
        treve.get_colored_name(),
        '제발요…',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 행동은 점점 더 뻔뻔해지며 ',
        treve.get_colored_name(),
        '이(가) 자신의 침에 질식할 때까지 크게 웃게 만들었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 고개를 돌리고 두어 번 헛기침을 한 뒤 ',
        treve.get_colored_name(),
        '을(를) 놓아주었다.',
      ]);
      era.printButton('「왜 가터를 착용하려고 했어?」', 1);
      await era.input();
      await treve.say_and_wait('응? 예쁘니까요.');
      era.printButton('「그게 무슨 뜻인지 알아?」', 1);
      await era.input();
      await treve.say_and_wait('모르겠는데요?');
      await era.printAndWait(
        '그녀가 고개를 살짝 저으니, 짧은 머리가 흔들린다.',
      );
      era.printButton('「남자를 유혹한다는 뜻이야.」', 1);
      era.printButton(
        '「지역에 따라서는 창녀가 옷을 벗고 남자와 잠자리를 한 뒤, 대금을 가터벨트에 끼워 둬.」',
        2,
      );
      await era.input();
      await treve.say_and_wait('그, 그럼 벗을게요……');
      era.printButton('「이제부터는 사람들 앞에서는 착용하지 마.」', 1);
      era.printButton('「내 앞에서는 반드시 착용해.」', 2);
      await era.input();
      await treve.say_and_wait('알았어요. 그런데 어째서인가요?');
      era.printButton(
        '「내 눈에 비친 너는, 작고 요염한 아이야. 나의 살로프(salope).」',
        1,
      );
      era.printButton(
        '「남들 앞에서는 생기 넘치는 사랑스러운 공주님인데, 밤이 되면 남자에게 매달려 있구나……」',
        2,
      );
      if ((await era.input()) === 1) {
        await treve.say_and_wait('으읏…… 그렇게 말하지 마세요……');
      } else {
        await treve.say_and_wait('아니에요, 제가 먼저 꼬신 게 아니라……');
      }
      era.print([
        '목이 메어 울 것 같은 서양계 우마무스메에게 ',
        you.get_colored_name(),
        '은(는)……',
      ]);
      era.printButton('가슴을 만진다', 1);
      era.printButton('다리를 만진다', 2);
      ret.push(await era.input());
      if (ret.at(-1)) {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          treve.get_colored_name(),
          '의 신발을 벗기고 침대로 올라가게 한 뒤, 다리를 적당히 벌리고 무릎을 꿇게 했다.',
        ]);
        await era.printAndWait([
          `${treve.teen_sex_title}는 부드럽게 앉았고, 파란 옷자락이 작은 원을 그리며 퍼져 나갔다.`,
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          treve.get_colored_name(),
          '의 뒤로 돌아갔다. 매끄러운 등은 정말 아름답다.',
        ]);
        await era.printAndWait(['양손에 힘을 주고, 몸 양옆으로 받쳐준다.']);
        await era.printAndWait([
          '본격화된 ',
          treve.get_colored_name(),
          '은(는) 저항하지 않고',
          you.get_colored_name(),
          '의 뜻대로 눕혀진다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          treve.get_colored_name(),
          '의 양쪽 가슴을 움켜쥐고, 요리 양을 재듯이 측정했다.',
        ]);
        await era.printAndWait([
          '그런 다음 거칠게 주물렀다. 손놀림은 『가볍게 모으고, 천천히 비틀고, 쓰다듬고, 다시 튕긴다』는 식이다.',
        ]);
        await era.printAndWait([
          treve.get_colored_name(),
          '은(는) 고개를 숙이지 않아도 자신의 가슴이 드러나 있다는 것을 알 수 있다.',
        ]);
        await era.printAndWait(['원을 그리며, 튕기고, 누르고……']);
        await era.printAndWait([
          treve.get_colored_name(),
          '은(는) 유륜에서 끊이지 않는 쾌감을 느끼며 자세를 유지한다.',
        ]);
        await era.printAndWait([
          `${treve.sex}는 이 때 깨달았다. 자신은 이미 손을 들고 뒤의`,
          you.get_colored_name(),
          '의 머리를 감싸 안고 있었다. 마치 항복하는 듯한 자세다.',
        ]);
        await era.printAndWait([
          '그리고 ',
          you.get_colored_name(),
          '은(는) 입을 일그러뜨리며 웃고 있는데, 꽤나 심술궂다.',
        ]);
        await treve.say_and_wait('그만해요……');
        await era.printAndWait([
          treve.get_colored_name(),
          '은(는) 가냘프게 신음하고, 두 눈에는 이미 애틋한 빛이 비치고 있다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 가볍게 스치기만 해도 ',
          treve.get_colored_name(),
          '에게는 쾌감이 뒤통수까지 치밀어 오른다.',
        ]);
        era.printButton('「자, 가슴을 펴고, 배를 집어넣어.」', 1);
        await era.input();
        await era.printAndWait([
          treve.get_colored_name(),
          '은(는) ',
          you.get_colored_name(),
          '의 손에 따라 차례로 자세를 바로잡는다.',
        ]);
        await era.printAndWait(
          `한 번 숨을 고른 뒤, ${treve.sex}의 배는 다시 한 뼘 정도 줄어들었다.`,
        );
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          treve.get_colored_name(),
          '의 허리를 쓰다듬고, 벨트 위치를 확인한 뒤, 살며시 당겼다.',
        ]);
        await era.printAndWait('*찰칵찰칵*');
        await era.printAndWait(
          `하얀 벨트가 줄어들어, ${treve.sex}의 허리와 배에 다시 딱 달라붙을 때까지.`,
        );
        await treve.say_and_wait('꽉 조여요……');
        era.printButton('「꽉 조여야 비로소 일어설 수 있는 거야.」', 1);
        await era.input();
        await era.printAndWait([
          treve.get_colored_name(),
          '은(는) 허리가 조여져, 가슴까지 더 솟아오른 것처럼 보인다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          `은(는) 뒤에서 ${treve.sex}를 껴안고, 양손을 교차시켜 흰 토끼 한 쌍을 꽉 쥐었다.`,
        ]);
        era.printButton('「생기가 넘치네.」', 1);
        era.printButton(
          `「${treve.name}은(는) 이렇게 거리낌 없이 가슴을 만져지는 건 처음일 텐데.」`,
          2,
        );
        if ((await era.input()) === 1) {
          await treve.say_and_wait('그게 무슨 뜻인가요!');
        } else {
          await treve.say_and_wait('……으응.');
        }
        await era.printAndWait([
          '볼록 튀어나온 두 가슴이 ',
          you.get_colored_name(),
          '에 의해 다양한 모양으로 움켜잡힌다.',
        ]);
        await era.printAndWait('부드럽고, 물풍선 같다.');
      } else {
        era.printButton(
          '「그 정도론 부족해. 살에 파고들어야 비로소 숙녀지.」',
          1,
        );
        await era.input();
        await treve.say_and_wait('살에, 파고들다뇨?');
        await era.printAndWait([
          treve.get_colored_name(),
          '이(가) 이해하기도 전에 ',
          you.get_colored_name(),
          '은(는) 가터의 버클을 풀었다.',
        ]);
        await treve.say_and_wait('다리……안 돼요……');
        await era.printAndWait([
          '방금 겨드랑이를 공격했을 때 ',
          you.get_colored_name(),
          '은(는) 그녀가 간지럼을 잘 탄다는 것을 눈치챘다.',
        ]);
        await era.printAndWait('지금도 두 다리가 떨리고, 몸이 순간 전율한다.');
        await treve.say_and_wait('그만해요!');
        await treve.say_and_wait(`${callname}…… 그만해요, 바보!`);
        era.printButton(`「파크의 욕설은 상냥하네. 사귀기 좋겠는걸.」`, 1);
        await era.input();
        await treve.say_and_wait('허벅지 안쪽은 만지지 마세요! 그만해요……');
        await era.printAndWait([
          treve.get_colored_name(),
          '은(는) 아랫입술을 깨물며, 아름다운 가슴을 위아래로 흔들었다.',
        ]);
      }
      era.printButton('「내가 듣고 싶은 말을 해 봐.」', 1);
      era.printButton('「좋은 말을 해줄까?」', 2);
      await era.input();
      await treve.say_and_wait('……');
      await treve.say_and_wait(`${callname}……${you.actual_name}……좋아해요……`);
      await treve.say_and_wait(`저 ${callname}의 담당이 부러워서……`);
      await treve.say_and_wait(
        `${treve.name}은(는) ${you.actual_name}을(를) 보는 것만으로도 무릎이 풀려요……`,
      );
      era.printButton('「아직 부족해.」', 1);
      era.printButton('「너 자신은?」', 2);
      if ((await era.input()) === 1) {
        await treve.say_and_wait('아아아아……');
        await treve.say_and_wait(
          `${you.actual_name}은(는) 모든 이의 시선을 한 몸에 받는 트레이너!`,
        );
        await treve.say_and_wait(
          `${treve.name}은(는) 기꺼이 ${you.actual_name}의 발치에 엎드릴게요……`,
        );
      } else {
        await treve.say_and_wait(
          `${treve.name}, ${treve.name} 저는 완전 바보에요!`,
        );
        await treve.say_and_wait(
          `저……${callname}을(를) 보는 것만으로도 발정 나서 머릿 속이 엉망이고……`,
        );
      }
      era.printButton(`「파크가 오줌 싸는 걸 보고 싶네.」`, 1);
      await era.input();
      await treve.say_and_wait('변태!');
      era.printButton('「누가 변태야?」', 1);
      await era.input();
      await era.printAndWait([
        treve.get_colored_name(),
        '은(는) 얼굴에 불만을 가득 담은 채 입을 삐죽 내민다.',
      ]);
      await treve.say_and_wait(`${treve.name}이(가) 변태에요.`);
      era.drawLine();
      await era.printAndWait([
        '속옷을 벗고 ',
        treve.get_colored_name(),
        '은(는) 침대에 누워 있다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 요구대로, 양다리를 옆으로 벌리고 무릎을 굽힌다.',
      ]);
      await era.printAndWait(
        '발뒤꿈치는 허벅지 뿌리에 딱 붙이고, 발바닥을 완전히 펴서 이완시키지 않는다.',
      );
      await era.printAndWait([
        treve.get_colored_name(),
        '의 은밀한 곳은 문을 활짝 열고 ',
        you.get_colored_name(),
        '에게 향해 있다.',
      ]);
      await era.printAndWait(
        '전복 같은 은밀한 곳. 드문드문한 금발 아래에서, 연한 두 입술이 호흡에 맞춰 열리고 닫힌다.',
      );
      await era.printAndWait([
        treve.get_colored_name(),
        '은(는) 스스로 손을 베개 밑에 두고, 저항하지 않는다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 머리를 파묻고, 십여 센티미터밖에 떨어져 있지 않은 거리에서 우마무스메의 『발정기』 냄새를 맡았다.',
      ]);
      await era.printAndWait(
        '옅고, 조금 비릿한 향이 나며, 소녀 특유의 향기가 난다.',
      );
      await era.printAndWait(
        '두 개의 대음순 사이에는 더욱 촉촉한 소음순이 있다.',
      );
      await era.printAndWait(
        '옅은 가장자리는 가까이서 보면 유난히 유혹적이다.',
      );
      await treve.say_and_wait('앗…… 그만……');
      await era.printAndWait('그녀는 숨을 가쁘게 쉬며 헐떡였다.');
      era.printButton(`${treve.name}의 음순을 리듬감 있게 핥는다.`, 1);
      await era.input();
      await era.printAndWait([
        '은은한 짠맛이 ',
        you.get_colored_name(),
        '의 혀끝에 퍼진다. 하지만, 이 정도로는 부족하다.',
      ]);
      era.printButton(`${treve.name}의 음순을 벌린다.`, 1);
      await era.input();
      await treve.say_and_wait('그만해요……');
      await era.printAndWait([
        you.get_colored_name(),
        '의 앞에 있는 것은, 더욱 붉고 부드러운 살이다.',
      ]);
      await era.printAndWait('표면에는 조금 젖어 있어 보기에 최고다.');
      await treve.say_and_wait(`아직……처녀니까……${you.actual_name}, 아직은……`);
      era.printButton('「알았어. 지금은 넣지 않을게」', 1);
      await era.input();
      await treve.say_and_wait('네에.');
      await era.printAndWait([
        treve.get_colored_name(),
        '의 소음순은 완전히 ',
        you.get_colored_name(),
        '의 혀에 눌려 있다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 이어서, 음순에 감싸여 부풀어 오른 핵에 입을 대고, 세게 빨기 시작했다.',
      ]);
      await era.printAndWait([
        '이로써, 그 한 조각의 살이 전부 ',
        you.get_colored_name(),
        '의 입술 사이로 빨려 들어간다.',
      ]);
      await era.printAndWait('음핵은 도망칠 곳이 없어 둥글게 부풀어 오른다.');
      await treve.say_and_wait('안 돼……빨지 말아요오오……');
      await treve.say_and_wait('아기, 아직 낳을 수 없어요……');
      await era.printAndWait([
        '몇 번이나 빨리다 보니 ',
        treve.get_colored_name(),
        '의 이마는 땀으로 흠뻑 젖었다.',
      ]);
      await era.printAndWait([
        '그러는 동안 ',
        you.get_colored_name(),
        '은(는) 구멍 입구를 몇 번이나 쓰다듬으며 지나갔다.',
      ]);
      await era.printAndWait(
        '닿기만 해도 들어가지 못할 것 같은 긴장감이 소녀를 절정의 경계로 몰아넣는다.',
      );
      await treve.say_and_wait('그만……그만해요……');
      await treve.say_and_wait('멈춰……');
      await treve.say_and_wait('가버릴 것 같아요……가요오!');
      await treve.say_and_wait('내일, 스승님을 만나야 하는데……');
      await era.printAndWait([
        treve.get_colored_name(),
        '은(는) 횡설수설하고, 그리고.',
      ]);
      await era.printAndWait(
        '——옅은 흰색 꿀이 부드러운 구멍 입구에서 흘러나오고, 이어지는 몇 줄기는 직접 튀어 흩어졌다.',
      );
      await era.printAndWait(
        '그녀는 베개 밑에서 손을 빼내어 자신의 얼굴을 가렸다.',
      );
      await treve.say_and_wait(`${callname}, 이 바보!`);
      era.printButton('「나도 더 이상 참을 수 없어. 먼저 일어날게.」', 1);
      await era.input();
      await era.printAndWait([
        treve.get_colored_name(),
        '은(는) 천천히 이미 발기한 성기를 바라보았다.',
      ]);
      era.printButton('「방금 네 걸 봤으니까 너도 내 걸 봐.」', 1);
      await era.input();
      await treve.say_and_wait('봐도, 뭐가 재미있는 건가요.');
      era.drawLine();
      await treve.say_and_wait(
        `……죄송해요, ${you.actual_name}의 자지…… 괴, 굉장히 크고, 굵어서, ${treve.name}, 좋아해요……`,
      );
      await era.printAndWait([
        treve.get_colored_name(),
        '은(는) 바닥으로 기어 내려가 무릎을 꿇는다. 카펫이 깔려 있어서 무릎도 아프지 않다.',
      ]);
      await treve.say_and_wait('조금 냄새가 나요……');
      await era.printAndWait([
        treve.get_colored_name(),
        '은(는) 그렇게 평했다.',
      ]);
      era.printButton('「마음에 들어?」', 1);
      await era.input();
      await era.printAndWait([treve.get_colored_name(), '은(는) 침묵했다.']);
      era.printButton('「마음에 든 것 같네.」', 1);
      await era.input();
      await treve.say_and_wait('그럴 리가요!');
      await era.printAndWait([
        '말이 끝나기도 전에 ',
        you.get_colored_name(),
        '의 자지가 그녀의 코에 밀어붙여졌다.',
      ]);
      await era.printAndWait(['——정확히 말하면 인중, 입술 위의 홈이다.']);
      await era.printAndWait([
        '귀두가 양쪽 콧구멍의 공기 통로를 완전히 막았다.',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        '이(가) 숨을 들이쉴 때마다 ',
        you.get_colored_name(),
        '의 냄새를 맡을 수밖에 없다.',
      ]);
      era.printButton('「스승님이 네 노래 실력이 좋다고 하던데.」', 1);
      await era.input();
      await treve.say_and_wait('노래요?');
      era.printButton('「파리 트레센의 교가를 불러봐.」', 1);
      await era.input();
      await era.printAndWait([
        treve.get_colored_name(),
        '은(는) 바닥에 무릎을 꿇고, 코가 성기에 찔리는 동안 교가를 불렀다.',
      ]);
      await era.printAndWait([
        '마침내 노래를 다 부를 무렵 ',
        you.get_colored_name(),
        '의 수컷 냄새는 완전히 그녀의 콧구멍 속으로 스며들어 있었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 몸을 굽혀 ',
        treve.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      await era.printAndWait('양 볼은 하얗고, 터질 듯 부드럽다.');
      await era.printAndWait(
        '눈동자는 보석처럼 푸르고, 눈꼬리에는 화장이 되어 있어 밤빛 아래에서 더욱 매혹적이다.',
      );
      await era.printAndWait('화려한 짧은 금발. 그야말로 공주님이다.');
      await era.printAndWait([
        treve.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '에게 들켜 부끄러워하며, 어쩔 수 없이 혀를 내밀었다.',
      ]);
      await era.printAndWait([
        '그녀의 혀는 ',
        you.get_colored_name(),
        '보다 훨씬 더 뾰족하고, 가늘고, 부드러워서, 한 번에 ',
        you.get_colored_name(),
        '의 눈까지 닿는다.',
      ]);
      await era.printAndWait([
        '한 번 핥아본 뒤, ',
        treve.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '이(가) 움직이지 않는 것을 보고 귀두를 입에 넣고 빨기 시작했다.',
      ]);
      await era.printAndWait(
        '비린내가 입안으로 퍼져나가, 치아 사이사이까지 파고든다.',
      );
      await era.printAndWait([
        '들이켤 때마다, ',
        treve.get_colored_name(),
        '은(는) 수치심으로 가득 차게 된다.',
      ]);
      await era.printAndWait([
        '더 이상 참지 못한 ',
        you.get_colored_name(),
        '은(는) 양손으로 ',
        treve.get_colored_name(),
        '의 머리를 감싸 쥐고, 입을 향해 밀어 넣기 시작한다.',
      ]);
      await treve.say_and_wait('그만해 주세요……', true);
      await treve.say_and_wait('괴로워요……', true);
      await treve.say_and_wait(
        '냄새나요! 기분 나빠요. 혀뿌리, 안 돼…… 나올 것 같아요…… 내뱉고 싶어요.',
        true,
      );
      await era.printAndWait([
        '힘을 주어 밀어 넣을 때마다, ',
        you.get_colored_name(),
        '은(는) 귀두를 그녀의 구강 가장 깊은 곳까지 밀어 넣었다.',
      ]);
      await era.printAndWait(['——연구개와 혀뿌리 사이.']);
      await era.printAndWait([
        '혀뿌리의 돌출이 ',
        you.get_colored_name(),
        '의 귀두를 더욱 기분 좋게 한다.',
      ]);
      await era.printAndWait([
        '아쉬운 점은 ',
        treve.get_colored_name(),
        '이(가) 이 구강성교 속에서 굴욕을 견뎌낼 수밖에 없다는 것이다.',
      ]);
      era.printButton('참을 수 없다.', 1);
      era.printButton('입안에 싼다.', 2);
      await era.input();
      await era.printAndWait([
        treve.get_colored_name(),
        '은(는) 입안에 있는 성기의 떨림을 알아차리고, 말을 하려 하지만 할 수 없었다.',
      ]);
      await era.printAndWait(
        '혀뿌리가 눌리고, 따뜻하고 비린한 액체가 가장 깊은 곳으로 직접 부어진다.',
      );
      await era.printAndWait('끈적임이 있어, 목구멍을 봉합하는 듯하다.');
      await era.printAndWait([
        treve.get_colored_name(),
        '은(는) 본능적으로 눈을 치켜뜨고 ',
        you.get_colored_name(),
        '의 육봉이 빠져나가자, 정액이 몇 방울 흘러내렸다.',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        '은(는) 입을 가리고, 빠르게 일어섰다.',
      ]);
      await era.printAndWait(
        '몇 방울의 정액이 이미 입가에서 넘쳐흘러, 하얀 실크 장갑을 더럽히고 있다.',
      );
      await treve.say_and_wait('윽……으음, 읍.');
      await era.printAndWait([
        treve.get_colored_name(),
        '은(는) 고개를 숙이고, 목울대가 움직인다.',
      ]);
      await era.printAndWait([
        '하얀 정액이 입안에서 조금씩 삼켜지는데 ',
        you.get_colored_name(),
        '에게 구강 내 사정을 당했을 때보다 기분이 나쁘다.',
      ]);
      await era.printAndWait('고른 하얀 치아에도 하나하나 정액이 묻는다.');
      await era.printAndWait(
        '일부의 정액은 위아래 치아에 엉겨 붙어, 입안에서 실처럼 늘어진다.',
      );
      await treve.say_and_wait('하아……gros nigaud!');
      era.printButton('「정말 미안해.」', 1);
      await era.input();
      return ret;
    };
    f.title = title;
    return f;
  })(),
  74: (() => {
    const title = 'Un heureux événement (행복한 일)';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, you, callname) => {
      await treve.print_and_wait(
        `그날, 방과 후에 ${callname}은(는) 저를 차에 태워 국도변의 러브호텔로 데려갔어요.`,
      );
      await treve.print_and_wait('이런 곳은 들어본 적이 없었어요.');
      await treve.print_and_wait(
        '외관은 수수하고, 로비와 복도가 하나로 이어져 있어서 조금 좁네요.',
      );
      await treve.print_and_wait(
        `${callname}은(는) 카운터의 터치 패널에서 방을 골라요.`,
      );
      await treve.print_and_wait('반자율식이라니. 접수도 없네요.');
      await treve.print_and_wait(
        `이 사람과 엘리베이터 앞에 서요. 지금부터 몇 시간 동안, 저는 인형처럼 취급받으며 ${you.sex}의 성욕을 처리하게 될 거예요.`,
      );
      await treve.print_and_wait(
        `지금까지의 경험으로는, ${you.sex}만 내보내면 끝나는 거죠.`,
      );
      await treve.print_and_wait(
        `방에 들어가자마자, ${callname}은(는) 침대에 앉아 옷을 벗으라고 지시했어요.`,
      );
      await treve.say_and_wait('알고 있을 거예요……');
      await you.say_and_wait('아아, 약속은 지킬게. 콘돔은 낄 테니까.');
      await treve.print_and_wait(
        '옷을 벗어요. 어찌 됐든, 이렇게 보여지는 건 부끄럽네요.',
      );
      await you.say_and_wait('대단하네. 전혀 쳐지지 않았어.');
      await treve.print_and_wait(
        `${callname}을(를) 기쁘게 할 가슴은 탄력도 일급품이에요. ${
          you.sex
        }가 한 번 주무르면 손에 착 달라붙는, 이상적인 가슴이죠.`,
      );
      await treve.print_and_wait(
        `저는 ${callname} 말고 다른 사람에게는 닿고 싶지 않아요.`,
      );
      await you.say_and_wait('표정이 굳었네…… 어깨에 힘을 좀 더 빼.');
      await treve.print_and_wait(
        '할 거라면 빨리 해주셨으면 좋겠어요. 손도 입도 질도, 사용될 거라는 건 알고 있어요.',
      );
      await treve.print_and_wait(
        `가끔은 제 자신이 ${you.sex}의 자위용 인형일 뿐이라고 생각해요.`,
      );
      await you.say_and_wait('먼저 침대에 누워봐. 그래, 똑바로 누워서.');
      await treve.print_and_wait(
        '네? 무슨 뜻인지 모르겠어요. 교배 체위를 말씀하시는 건가요?',
      );
      await treve.print_and_wait(
        `${you.sex}의 지시대로 똑바로 누우니, ${callname}은(는) 피아노를 치는 듯한 손길로 제 몸 위로 손가락을 미끄러뜨리기 시작해요.`,
      );
      await treve.print_and_wait(
        '목, 겨드랑이, 쇄골, 옆구리. 닿았다고 말하기조차 힘든 약한 힘으로 가끔씩 눌러요.',
      );
      await treve.print_and_wait('싫어질 줄 알았어요. 전혀, 그렇지 않았죠.');
      await treve.print_and_wait(
        '대신 찾아오는 것은 아이들이 장난치는 듯한, 애타는 감각이에요.',
      );
      await treve.print_and_wait('그보다 왜 이런 걸 하는 건지 모르겠어요.');
      await treve.print_and_wait(
        '유두와 치구는 피하면서 능숙하게 손가락을 미끄러뜨려요.',
      );
      await treve.print_and_wait('쓰다듬어진 곳이 약간 팽팽해져요.');
      await treve.print_and_wait(
        `${callname}은(는) 여자의 몸은 금고라고 말했어요.`,
      );
      await treve.print_and_wait(
        '순서대로 열쇠를 풀면 가장 좋은 상태로 열린다고요.',
      );
      await treve.print_and_wait(
        '손가락이 겨우 질 안으로 들어와요. 입구에 인사를 건네듯 스치며 안쪽으로 나아가죠.',
      );
      await treve.print_and_wait(
        '이미 젖어 있는 걸지도 몰라요. 손가락은 막힘없이 들어와요.',
      );
      await treve.print_and_wait(
        '의식을 천장으로 모으고 다른 것은 잊으려 해요.',
      );
      await treve.print_and_wait(
        'LED 조명이에요. 간접 조명. 천장의 문양을 세기 시작해요.',
      );
      await you.say_and_wait('대충, 이런 느낌이야.');
      await treve.say_and_wait('음? 오앗! 앗… 아?');
      await treve.print_and_wait('갔어요, 저…… 방금, 갔나요?');
      await treve.print_and_wait('에? 아?');
      await you.say_and_wait('하하, 눈까지 뒤집히고. 놀랐어?');
      await treve.print_and_wait(
        '이상한 약을 맞았다—— 그렇게 생각하며 주변을 둘러봐요.',
      );
      await treve.print_and_wait(
        `${callname}은(는) 오른손가락은 질 안에 있고, 왼손은 옆구리 언저리를 쓰다듬고 있어요.`,
      );
      await treve.print_and_wait('주사기 같은 이상한 도구는 없어요.');
      await treve.print_and_wait('이상한 것은, 제 그곳뿐이에요.');
      await treve.print_and_wait(
        `허리까지 경련하며, ${callname}은(는) 손가락을 입으로 크게 물고, 애액을 흘리며 완전히 아양을 떠는 모습이죠.`,
      );
      await treve.say_and_wait('제 몸에, 뭘 한 거예요?');
      await you.say_and_wait(
        `목, 겨드랑이, 배, 옆구리. 파크는 정말로 온몸이 약점이네.`,
      );
      await treve.print_and_wait(
        `${you.sex}가 손가락을 아주 조금 움직일 때마다, 수십 배의 힘으로 들어 올려지는 기분이 들어요.`,
      );
      await treve.print_and_wait(
        `아니에요, 제 몸이 물고기처럼 튀어 오르고 있어요. ${callname}은(는) 한 번 쓸어낼 때마다 정신없이 튀어 올라요.`,
      );
      await treve.say_and_wait('그만해 주세요! 멈춰줘요! 멈춰주세요! Arrêtez!');
      await you.say_and_wait(`역시, 파크의 표정은 풍부하네.`);
      await treve.print_and_wait(
        `최악…… 끝났어요. ${callname}을(를) 너무 쉽게 생각했어요.`,
      );
      await treve.print_and_wait(
        `이 사람은 손끝만으로 소녀의 영혼까지 녹여버리고, ${you.sex}의 가련한 암캐로 만들 수 있어요.`,
      );
      await treve.print_and_wait(
        '입구를 괴롭혔을 뿐인데, 제 그곳은 항복해 버렸어요.',
      );
      await treve.print_and_wait('배 안쪽, 자궁이 목마른 것처럼 술렁여요.');
      await treve.print_and_wait(
        `얼마나 숙련된 거예요? 몇 명의 소녀를 울게 한 거죠?`,
      );
      await treve.print_and_wait(
        '전 아직 중학생이에요… 이 나이에 이런 일을 당하다니……',
      );
      await treve.say_and_wait('기다려 주세요, 부탁이에요, 멈춰주세요……');
      await you.say_and_wait('알았어. 거기까지는 여기까지야.');
      await treve.print_and_wait('이번에는 유두를 쓰다듬어 주네요.');
      await treve.print_and_wait(
        '질 안의 여운 속에서, 가차 없는 손가락 끝이 딱딱해진 유두를 자극해요.',
      );
      await treve.print_and_wait('제 유두는 너무 발기해서, 유륜까지 뜨거워요.');
      await treve.say_and_wait('앗! 응아아앗! 유두도!');
      await treve.print_and_wait(`어떤 여자라도 울면서 멈춰달라고 말해요.`);
      await treve.say_and_wait('응으으읏!');
      await you.say_and_wait('그럼, 그곳도…');
      await treve.say_and_wait('으으으읏……');
      await treve.print_and_wait(
        '피뢰침이란 이런 감각이죠. 제 그곳에 번개가 떨어진 것 같아요.',
      );
      await treve.print_and_wait(
        '하반신만 분리되어, 다른 생명체가 된 것 같네요.',
      );
      await treve.print_and_wait(
        '목에서는 고장 난 사이렌 같은 소리밖에 나오지 않아요.',
      );
      await treve.print_and_wait(
        '몸속에서 폭발할 것 같은 무언가를 외쳐 내뱉지 않으면, 저는 견딜 수 없어요.',
      );
      await treve.print_and_wait(
        `제 몸은, ${callname}에게 마음대로 부서지고 있어요.`,
      );
      await treve.print_and_wait(
        '목은 뒤로 젖혀지고, 허리는 멋대로 앞으로 내밀어져요.',
      );
      await treve.print_and_wait(
        `${callname}의 손가락은 가차 없이 질 안을 파고들고, 뻗은 발가락 끝은 하늘을 향해요.`,
      );
      await treve.print_and_wait(
        '줄곧 견뎌왔던 『요의』가 한계에 달해, 결포 직전의 쾌감을 수백 배로 만들어요.',
      );
      await treve.say_and_wait(
        '아아아앗, 나와… 나와요! 그만해 주세요, 그런 건……',
      );
      await you.say_and_wait('소변 아니야. 내보내도 돼.');
      await treve.print_and_wait(
        `${callname}이(가) 음핵을 누르자 허리가 튀어 오르고, 촉촉하고 투명한 액체가 흩뿌려져요.`,
      );
      await treve.print_and_wait(
        '필사적으로 힘을 주어 요도를 닫으려 하지만, 몸은 전혀 말을 듣지 않아요.',
      );
      await treve.print_and_wait(
        '시트에는 얼룩이 생기고, 엉덩이까지 물의 냉기가 느껴져요.',
      );
      await you.say_and_wait(
        `처음으로 시오후키 하는 거야? 파크는 정말로 느끼기 쉽네.`,
      );
      await treve.say_and_wait(
        '앗…… 앗…… 하앗…… 그만해 주세요, 멈춰줘요, 제발 멈춰주세요, 그곳을 허락해 주세요……',
      );
      await treve.print_and_wait(
        '허리를 비껴도 도망칠 수 없어요. 약점을 계속 괴롭힘당하며, 붙잡혀 공격받아요.',
      );
      await treve.print_and_wait(
        `애액을 흘리며 ${callname}에게 용서를 구하는 제 얼굴은, 분명 엉망일 거예요.`,
      );
      await treve.print_and_wait(
        '눈물과 침이 흩뿌려지고, 세상에서 가장 행복한 암컷의 얼굴임에 틀림없어요.',
      );
      await treve.print_and_wait(
        `${callname}의 손이 빠질 때까지, 저는 몇 번이고 분수를 했어요.`,
      );
      await treve.print_and_wait(
        '전신이 경련하고, 자세를 바꾸는 것조차 할 수 없어요.',
      );
      await treve.print_and_wait(
        '신경이 전부 뽑혀 나가고, 쾌락을 뇌액에 직접 부어지는 듯한 감각이에요.',
      );
      await treve.print_and_wait(
        `${callname}은(는) 천천히 제 배와 머리카락을 쓰다듬어요…`,
      );
      await treve.print_and_wait(
        '배를 드러낸 반려견을 어루만지듯, 튀어 오르는 자궁을 부드럽게 주무르네요.',
      );
      await you.say_and_wait(
        '천천히 기억해. 마지막에는 자궁도 기분 좋게 해줄게.',
      );
      await treve.say_and_wait('아아아아……');
      await treve.print_and_wait(
        `안 돼…… 암컷의 본능…… 강한 수컷에게 굴복해서, ${you.sex}에게 지배당하고 싶어……`,
      );
      await treve.print_and_wait(
        '스승님은 이런 걸 가르쳐 주지 않았어요. 전부 빼앗겼어요. 자존심도, 자신감도……',
      );
      await treve.print_and_wait(
        `지금까지 쌓아온 모든 것이 ${you.sex}의 색으로 칠해져요. 도와주세요……`,
      );
      await you.say_and_wait('이제 슬슬, 이쪽도 부탁하고 싶어.');
      await treve.print_and_wait(
        `${callname}은(는) 속옷을 벗고, 우뚝 선 자지를 보여줘요.`,
      );
      await treve.print_and_wait(
        '아무리 봐도 거짓말 같아요. 굵기, 길이, 혈관까지 드러나 있어서 영화에서 본 것과는 전혀 달라요.',
      );
      await treve.print_and_wait(
        '열기처럼 피어올라 코를 찌르는 수컷의 냄새가 제 뇌를 태워요.',
      );
      await treve.print_and_wait(
        '그전에, 몸은 완전히 굴복해서 자손을 남길 준비를 하고 있어요.',
      );
      await treve.print_and_wait(
        '긴장된 배 안쪽이 희미하게 아프고, 근육이 멋대로 자궁을 끌어내려요.',
      );
      await treve.print_and_wait('강한 수컷에게만 허락된 특권.');
      await treve.print_and_wait(
        `${callname}의 종자에 유린당하는 것이 제 알의 의무예요.`,
      );
      await treve.print_and_wait('주세요, 이걸 주세요, 당신을 원해요.');
      await treve.print_and_wait(
        '자궁은 굶주림에 아양을 떨며 찌르는 듯이 아파요. 저항하는 의식은 희미해지고, 침을 흘리는 질구조차 알아차리지 못해요.',
      );
      await you.say_and_wait('가만히 보고 있어? 그렇게 좋아해?');
      await treve.print_and_wait('도발하는, 진심 어린 질문이에요.');
      await treve.print_and_wait(
        `최악, 너무나 최악이에요. 당신은 분명 이렇게 수많은 여자를 암컷으로 만들어 왔을 거예요.`,
      );
      await treve.say_and_wait('윽…… 멋지네요. 어쨌든 먼저 콘돔을……');
      await you.say_and_wait(`그전에 펠라치오. 파크, 할 수 있지?`);
      await treve.print_and_wait('따를 수밖에 없어요. 어쩔 수 없잖아요?');
      await treve.print_and_wait(
        '입에 머금는 순간, 코를 찌르는 수컷의 냄새에 머리가 타버리고 다시 분수를 해요.',
      );
      await treve.print_and_wait(
        '이제 아양 떠는 것밖에 모르는 바보 같은 그곳은, 앞으로 관통당할 것을 기대하며 음란한 물을 심하게 흘려요.',
      );
      await treve.print_and_wait('너무 커서 절반 정도밖에 머금지 못해요.');
      await treve.print_and_wait(
        '치아가 닿지 않도록 턱을 내리고 입을 다물어요.',
      );
      await treve.print_and_wait('제대로 호흡하지 못해서 코호흡도 거칠어져요.');
      await you.say_and_wait('네 얼굴, 의외네.');
      await treve.say_and_wait('음오오오, 윽, 쉿, 우우, 하앗… 하앗, 아무.');
      await you.say_and_wait(`파크가 노력하는 모습은 귀엽네.`);
      await treve.print_and_wait('머리를 쓰다듬어지고, 귀가 만져져요.');
      await treve.print_and_wait(
        '어느새 다시 옆으로 누워 있고, 꼬리가 하트 모양으로 말려 있어요.',
      );
      await treve.print_and_wait(`${callname}의 빼낸 자지가 제 위로 덮여와요.`);
      await treve.print_and_wait(
        '도망칠 수 없어요. 피할 수도 없고, 저항할 수도 없어요.',
      );
      await treve.print_and_wait(
        '지금부터 저는 머리가 이상해질 때까지 괴롭힘당할 거예요.',
      );
      await treve.print_and_wait(
        '이 생식기를 기억하며, 수컷을 이기지 못하는 허접 암컷이 돼요.',
      );
      await treve.print_and_wait('최악…… 빨리…');
      await treve.say_and_wait('응아아아앗!');
      await treve.print_and_wait('일격에 쓰러졌어요.');
      await treve.print_and_wait('그곳이, 이상해져요.');
      await you.say_and_wait(
        '이렇게 범해지는 건 처음이지? 최대한 빨리 끝내줄게.',
      );
      await treve.say_and_wait(
        '멈춰주세요, 머리가 이상해져요! 이런 건 모르는걸……',
      );
      await treve.print_and_wait(
        'G스폿을 밀어내듯 가장 깊은 곳까지 피스톤해요.',
      );
      await treve.print_and_wait(
        '반광란 상태로 울부짖어도 가차 없는 『퍽퍽』 소리는 멈추지 않아요.',
      );
      await treve.print_and_wait(
        '의식이 어디로 날아갔는지 모르겠어요. 몇 번이나 갔는지도 모르겠어요. 강제로 끌어당겨지며 쾌락을 부어받아요.',
      );
      await treve.print_and_wait(
        `십여 분의 추송 끝에, ${callname}은(는) 드디어 사정했어요.`,
      );
      await treve.print_and_wait(
        '콘돔 한 장을 사이에 두고 있다고는 믿기 힘든 뜨거움. 마그마를 부어받은 듯한 일격이에요.',
      );
      era.drawLine();
      await treve.print_and_wait(
        '의식이 돌아왔을 때는 이미 몇 시간이 지나 있었어요. 주변에는 티슈 상자와 콘돔 포장지들.',
      );
      await treve.print_and_wait(
        '쓰레기통에는 묶인 콘돔이 몇 개 있어요. 몇 번이나 갈아 끼웠는지 이제는 모르겠어요.',
      );
      await treve.print_and_wait(
        `기억나는 건, 뒤에서 했던 어떤 회차에 ${callname}이(가) 자지를 빼내고 콘돔을 갈아 끼울 때 제가 혼절했던 거예요.`,
      );
      await treve.print_and_wait(
        `${callname}에게 안겨 몸이 계속 농락당하고 있어요.`,
      );
      await treve.print_and_wait(
        '도망가고 싶지만, 지금의 저는 제 힘으로 일어서는 것조차 할 수 없어요.',
      );
      await you.say_and_wait(
        `좋은 아침이야, 파크. 몸의 궁합이 좋네. 기분 좋았지?`,
      );
      await treve.say_and_wait('하앗…… 하앗…… 끝났다면 먼저 놓아주세요.');
      await you.say_and_wait(`파크 꼬리가 엉켜 있어서 무리네.`);
      await treve.print_and_wait('에?');
      await you.say_and_wait('지기 싫어하는 성격은 선수에겐 좋을지도 몰라.');
      await treve.print_and_wait(
        `${callname}은(는) 그렇게 말하며 다시 손을 제 음핵으로 가져다 대요.`,
      );
      await treve.print_and_wait('조건반사적인 몸의 반응으로 숨이 멎어요.');
      await treve.say_and_wait(
        '기다려 주세요! 그만해 주세요…… 죄송해요! 정말 기분 좋았어요.',
      );
      await treve.print_and_wait(
        `${callname}은(는) 만족스러운 듯 코웃음을 치며 손을 제 가슴으로 되돌려요.`,
      );
      await treve.print_and_wait(
        '아이가 찰흙을 만지듯 투박한 주무름인데도 제 몸은 그것에도 반응하며 떨어요.',
      );
      await treve.print_and_wait(
        '빌어…… 안겨 있는 게 기분 좋아서 거역할 수가 없네요. 프랑스 분들도 이런 저를 본 적이 없을 거예요.',
      );
      await treve.print_and_wait(
        '몰랐던 다양한 쾌락이 머릿속에 부어지고, 진심으로 기쁨을 느껴요.',
      );
      era.drawLine();
      await treve.print_and_wait(
        `아침, ${callname}은(는) 저를 기숙사 앞까지 데려다주었고, 문을 열고 비틀거리며 걸어와요.`,
      );
      await treve.print_and_wait(
        '다리는 납을 부은 것처럼 무겁고 머리는 안개에 가린 듯 멍해요.',
      );
      await treve.print_and_wait(
        '휴대폰을 열어보니 부재중 전화와 메시지가 산처럼 쌓여 있어요.',
      );
      await treve.print_and_wait(
        '모두가 저를 걱정하는 동안 저는 질을 쓰다듬어지며 애액을 여기저기 뿜어내고 있었죠.',
      );
      await treve.print_and_wait(
        '모두가 저를 걱정하는 동안 자궁을 계속 괴롭힘당해서 기뻤어요.',
      );
      await treve.print_and_wait(
        '모두가 저를 걱정하는 동안 저는 암컷으로서 최상의 행복을 맛보고 있었죠.',
      );
      await treve.print_and_wait('저는 수많은 사람을 배신했어요…');
      await treve.say_and_wait('앗…… 아아, 응.');
      await treve.print_and_wait('정신을 차려보니 속옷이 흠뻑 젖어 있어요.');
      await treve.print_and_wait(
        '오른손이 무의식적으로 가랑이로 뻗어 틈새를 쓰다듬으며 음핵으로 자위하고 있어요.',
      );
      await treve.print_and_wait(
        '——전혀 기분 좋지 않아요. 그때 같지 않거든요. 왜죠? 같은 장소인데.',
      );
      await treve.print_and_wait(
        '책상에 엎드려 왼손을 브래지어 아래로 넣어 딱딱해진 유두를 주무르는 중이에요.',
      );
      await treve.print_and_wait(
        '펜꽂이에서 조금 굵은 볼펜을 뽑아요. 스승님이 주신 선물이죠.',
      );
      await treve.print_and_wait('얕아…… 닿지 않아요! 전혀 부족해요.');
      await treve.print_and_wait(
        '자위 속에 빠져 이런저런 생각을 하며 의자까지 적셔요.',
      );
      await treve.print_and_wait(
        '하지만 안 돼요. 알고 있어요. 『진짜』를 맛보아 버렸으니까요.',
      );
      await treve.print_and_wait(
        '호흡마저 막히고 목을 파내던 그 거대한 것이 머릿속을 스쳐 지나가요.',
      );
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        ' 은(는) ',
        treve.get_colored_name(),
        '의 메시지를 받았어요.',
      ]);
      await treve.say_and_wait('다음은 언제죠?');
    };
    f.title = title;
    return f;
  })(),
  89: (() => {
    const title = 'Premier amour (첫사랑이라는 작은 일)';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, you, callname) => {
      await treve.print_and_wait(
        `어느 날, 저는 제 자궁에 솔직해졌고, ${callname}의 방으로 갔어요.`,
      );
      await you.say_and_wait('갑자기 그런 차림으로 오다니…… 무슨 생각이야?');
      await treve.print_and_wait(
        '파란색과 흰색의 수수한 옷. 원래는 G1에서 입는 승부복인데, 저는 그대로 입고 와버렸어요.',
      );
      await treve.print_and_wait(
        '우아함을 위해 통기성의 일부를 희생하고 있어요. 전력으로 계단을 뛰어 올라온 저의 땀은 증발하지 않고 속옷에 스며들어 아주 축축해요.',
      );
      await you.say_and_wait('밤새도록 할 거야. 각오해둬.');
      await treve.print_and_wait('최악, 벌써 젖어 있어요.');
      await treve.print_and_wait(
        '2주 동안 쌓아온 성욕과, 단계가 다른 발정기 때문에 그곳은 이미 끈적거리고 있어요.',
      );
      await treve.print_and_wait(
        '저는 어떻게 되는 걸까요. 어떻게 지고, 어떻게 아양을 떨며, 어떻게 부서지는 건지.',
      );
      await treve.print_and_wait(
        `방에 들어가 문을 닫은 순간, 저는 숄을 옷걸이에 걸고 ${callname}의 앞에 앉았어요.`,
      );
      await you.say_and_wait('진정해. 도망치지 않으니까.');
      await treve.print_and_wait(
        `시치미 떼는 이 사람을 입 다물게 하기 위해, 저는 ${you.sex}에게 입을 맞췄어요.`,
      );
      await treve.print_and_wait(
        '혀를 넣어 얽고, 침을 흘려 넣으며, 거슬리는 물소리를 내요.',
      );
      await you.say_and_wait(`파크는 재능이 있네.`);
      await treve.print_and_wait('시끄러워요……');
      await treve.print_and_wait('입안을 핥아지며, 미지의 감촉에 조금 놀라요.');
      await treve.print_and_wait(
        `역시 ${callname}은(는) 키스가 능숙하네요. 성애로 상대를 기쁘게 하는 방법을 전부 알고 있어요.`,
      );
      await treve.print_and_wait(
        '숏부츠를 벗어 옆으로 던지고, 엉덩이를 ${callname}의 얼굴 쪽으로 향하게 하여 자지 근처로 다가가요.',
      );
      await treve.print_and_wait('이전에는 생각조차 할 수 없었던 대담한 체취.');
      await treve.say_and_wait('당신의 비린내 나는 냄새…… 커요.');
      await treve.print_and_wait(
        '아양 떠는 달콤한 말이 흘러나와요. 어쩔 수 없잖아요? 암컷이 이길 수 없는 육봉이니까요.',
      );
      await treve.print_and_wait(
        `꼬박 2주 동안 머리는 ${callname}(으)로 타버렸어요.`,
      );
      await treve.print_and_wait(
        `${callname}의 반쯤 발기한 남근을 머금고, 혀로 천천히 귀두를 반 바퀴 돌려요.`,
      );
      await treve.print_and_wait('입을 다물고 "쥬르륵" 소리를 내요.');
      await treve.print_and_wait(
        '발기한 그것이 곧바로 제 목구멍 깊숙한 곳을 관통해요.',
      );
      await you.say_and_wait(`파크의 발도 냄새나네. 짠 건가, 신 건가.`);
      await treve.print_and_wait('변태, 변, 최악!');
      await treve.print_and_wait('당신 말고는 제 그 냄새를 아무도 몰라요.');
      await treve.print_and_wait(
        '혀로 줄기를 정성껏 핥으며 천천히 뿌리 쪽으로 다가가요.',
      );
      await treve.print_and_wait(
        `기대감에 음핵이 포피를 밀어 열고 멋대로 튀어나와요. 저는 허벅지로 ${callname}의 머리를 끼워 압박해요.`,
      );
      await treve.print_and_wait(
        '냄새 맡고, 핥고, 빨리! 빨리 깨물어도 좋으니까 그곳을 깨물어줘요!',
      );
      await treve.print_and_wait(
        '자신이 할 때도 건드리지 않았던 새끼손가락 끝 정도의 알.',
      );
      await treve.print_and_wait(
        '요즘은 다리를 모으고 걷는 것만으로 음순과 속옷에 쓸려서 멋대로 천박한 약점이 되어버렸어요.',
      );
      await treve.print_and_wait(
        `공격이 시작돼요. 이대로 ${callname}에게 빨리고, 치아로 가볍게 짓눌려요.`,
      );
      await treve.print_and_wait(
        '평소에는 야외 공기조차 닿지 않는 곳이에요. 견뎌내는 것 따위 불가능해요.',
      );
      await treve.print_and_wait(
        `제 허리는 잉어가 물구나무를 서는 것처럼 튀어 오르며, 애액을 ${you.sex}의 얼굴에 뿌려요.`,
      );
      await treve.print_and_wait('외치고 싶지만 입은 완전히 막혀 있어요.');
      await treve.say_and_wait('응! 응아아앗, 읏, 오오오.');
      await treve.print_and_wait(
        '느낄 때마다 목구멍이 수축하며 귀두를 짜내요.',
      );
      await treve.print_and_wait(
        '저는 오나홀이 되어버렸어요. 음핵을 자극하면 개폐할 수 있는 편리한 도구죠.',
      );
      await treve.print_and_wait(
        `${callname}의 육봉이 입안에서 떨리며 대량의 정액을 뿜어내요.`,
      );
      await treve.print_and_wait(
        '영화 같은 묽은 사정이 아니에요. 연유처럼 진한 정액이죠.',
      );
      await treve.print_and_wait(
        '목구멍 깊숙이 구멍을 뚫는 기세로 뿜어져 나온 정액을, 저는 힘을 주어 목을 움직이며 삼켜요.',
      );
      await treve.print_and_wait(
        '당신 같은 수컷에게 정액을 뿜는 것 따위 할 수 없어요.',
      );
      await you.say_and_wait('펠라치오, 능숙해졌네. 자, 물.');
      await treve.print_and_wait(
        `${callname}은(는) 조금 놀란 듯한 모습으로 물을 건네줘요.`,
      );
      await treve.print_and_wait(
        `저는 입을 크게 벌려 ${you.sex}에게 목구멍 깊숙한 곳까지 보여줘요.`,
      );
      await treve.print_and_wait(
        '봐요, 당신의 가장 소중한 아이, 전부 제 위장에 떨어졌다고요?',
      );
      await treve.say_and_wait('앗……');
      await treve.print_and_wait(
        '수컷의 냄새가 식도에서 피어올라 뇌까지 관통해요.',
      );
      await treve.print_and_wait(
        '그곳에서는 이미 눈부시게 하얀 음액이 방울져서, 직접 떨어지지 않고 끈적하게 흘러요.',
      );
      await treve.print_and_wait(
        '제 자궁…… 아이의 손가락이라도 닿을 수 있는 곳까지 내려가 있어요.',
      );
      await treve.say_and_wait('이번에는 질 안에…');
      await treve.print_and_wait(
        '저는 개구리처럼 다리를 벌리고, 손가락으로 비소를 넓히며 아양 떠는 미소를 지어 보여요.',
      );
      await treve.print_and_wait(
        '봐요, 여기 당신을 기분 좋게 할 수 있는 구멍이에요.',
      );
      await treve.print_and_wait('넣으면 가장 기분 좋을 거예요.');
      await treve.print_and_wait('끈적이는 암말의 암컷 구멍이죠?');
      await treve.print_and_wait('온다!');
      await treve.say_and_wait('응……! 아앗……!');
      await treve.print_and_wait(
        '단숨에 관통당하고, 귀두에 부딪히고, 자궁과 입맞춤하며 이상해져요.',
      );
      await treve.print_and_wait('뜨거워요, 모양이 좋네요.');
      await treve.say_and_wait('그곳, 더 찔러줘…… 좋아해요.');
      await treve.print_and_wait(
        '피스톤 할 때마다 굉장해요. 뇌 속의 신경이 쇼트 날 것 같아요.',
      );
      await treve.print_and_wait(
        `질을 꽉 조이면 ${callname}도 괴로운 표정을 지어요.`,
      );
      await treve.print_and_wait(
        `귀여워요. 계속 이렇게 ${you.sex}를 조이고 싶어.`,
      );
      await treve.print_and_wait(
        '『푸슉』 하는 소리가 나며 육봉이 빠져나가려 해요……',
      );
      await treve.print_and_wait(
        '안 돼, 안 돼! 더 사랑해줘요, 넣고 있지 않으면 안 돼요…',
      );
      await you.say_and_wait(`뭐야 이건. 최상의 명기네, 파크!`);
      await treve.print_and_wait('앗…… 기뻐요.');
      await treve.print_and_wait(
        `${callname}에게 머리를 쓰다듬어지고, 엎드려진 채 강아지처럼 뒤에서 당해져요.`,
      );
      await treve.print_and_wait('아앗! 이런 건 짐승의 교미가 아니에요.');
      await treve.print_and_wait(
        `땀으로 달라붙은 머리카락을 ${callname}이(가) 난폭하게 움켜쥐고 손잡이처럼 잡아요.`,
      );
      await treve.print_and_wait(
        '바보! 여자에게 가장 중요한 것 중 하나인데, 너무해요.',
      );
      await treve.print_and_wait(
        '뒤에서 가슴을 꽉 붙잡히고 하반신이 부딪혀요.',
      );
      await treve.print_and_wait('저는 힘없이 얼굴을 베개에 엎드려요.');
      await you.say_and_wait('좋은 엉덩이네. 너무 섹시해……');
      await treve.print_and_wait('바보, cruche, Imbécile……');
      await treve.print_and_wait(
        '허리를 맞을 때마다 엉덩이가 괴롭힘당해요. 조금 아픈데 기분 좋아요.',
      );
      await treve.say_and_wait('……원해요.');
      await treve.print_and_wait(
        '말이 끝나자마자 뒤집혀서, 혀를 빨리고, 그러고 나서…… 분수를 했어요.',
      );
      await treve.print_and_wait('호흡이 위태로운데도 입은 놓아주지 않아요.');
      await treve.print_and_wait('『츄릅, 츄릅』 하는 소리가 나요.');
      await you.say_and_wait(`제길, 싼다, 파크!`);
      await treve.print_and_wait(
        `저는 다리를 ${you.sex}의 허리에 감고 꽉 안아요.`,
      );
      await treve.print_and_wait('도망치지 말고 전부 자궁에 부어줘요.');
      await treve.print_and_wait(
        `${you.sex}의 귀두와 제 자궁 입구는 매우 잘 맞아요.`,
      );
      await treve.print_and_wait(
        '전부 저에게 맡기고 한 방울도 놓치지 말고 전부……',
      );
      await treve.print_and_wait(
        `다리를 조여 ${you.sex}가 육봉을 빼지 못하게 해요.`,
      );
      await treve.print_and_wait('인간 정도의 힘으로 저항해도 소용없어요?');
      await treve.print_and_wait(`${callname}, 사정, 완료.`);
      await you.say_and_wait(`……하앗, 파크, 애프터 서비스는?`);
      await treve.print_and_wait(
        '하하, 이런 최악인 사람을 어떻게 좋아하게 됐는지 모르겠네요.',
      );
      await treve.print_and_wait(
        '하지만 꽤 맛있어요. 어쩔 수 없죠, 청소용 펠라치오를 해줄게요.',
      );
      await treve.print_and_wait('……부족해, 부족해, 부족해, 부족해!');
      await treve.print_and_wait(
        `저는 ${callname}의 어깨를 잡고 뒤집어엎으며 이번에는 제가 위예요.`,
      );
      await you.say_and_wait('조금 쉬게 해줘.');
      await treve.print_and_wait(
        '농담이죠. 당신이라면 몇 번이고 할 수 있을 거잖아요?',
      );
      await treve.print_and_wait(
        '처음으로 기승위로 짜내요. 색정 영상의 흉내밖에 못 내고 있어요.',
      );
      await treve.print_and_wait('몇 번을 해도 익숙해지지 않아요.');
      await treve.print_and_wait(
        '엉덩이를 가라앉히고 육봉을 몸에 완전히 파묻는 것만으로도 쾌감이 배어 나오고 의식이 날아가요.',
      );
      await treve.print_and_wait(
        '자, 당신도 쉬지 마세요. 힘내요~ 힘내요~ 더 저를 만족시켜 주세요.',
      );
      await treve.print_and_wait('당신의 육봉으로 저를 죽여주세요.');
      await treve.print_and_wait(
        '머리가 정상으로 돌아왔을 때, 태양은 완전히 떠 있었어요.',
      );
      await treve.print_and_wait(
        `${callname}은(는) 숨도 못 쉴 것 같은 모습이에요.`,
      );
      await treve.print_and_wait(
        '그 후에도 저는 계속 원하며 체위를 바꿔 연전하고, 조금 쉬면 다시 계속해요.',
      );
      await treve.print_and_wait(
        '입과 질에 들어간 횟수는 이제 셀 수도 없어요.',
      );
      await treve.print_and_wait(
        `엉덩이도 해보고 싶었지만, ${callname}은(는) 그건 사전 준비가 필요하다고 말했어요.`,
      );
      await treve.print_and_wait('굶주림과 갈증은 채워졌어요. 하지만……');
      await treve.print_and_wait(
        `저는 ${callname}을(를) 다시 침대로 밀어 눕혀요. 왜냐하면: ${you.sex}가 아침 발기를 하고 있었으니까요.`,
      );
      await treve.print_and_wait(
        `저는 ${you.sex}의 마른 입에 탐욕스러운 키스를 겹쳐요.`,
      );
    };
    f.title = title;
    return f;
  })(),
  '89-continue-confirm': '두 번째를 시작할까요?',
  99: (() => {
    const title = "Ensemble, c'est tout (함께 있으면 그것으로 충분해)";
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, you) => {
      const ret = [];
      await era.printAndWait([
        '러브호텔에 도착하자 ',
        you.get_colored_name(),
        '은(는) ',
        treve.get_colored_name(),
        '을(를) 침대로 밀어트리고 입술을 포갠다.',
      ]);
      await era.printAndWait([
        '혀가 얽히며 ',
        you.get_colored_name(),
        '은(는) 침을 흘려 넣는다.',
        treve.get_colored_name(),
        '은(는) 서서히 받아들이며 스스로 원하기 시작한다.',
      ]);
      await era.printAndWait(
        '섞인 침이 입가에서 떨어져도 개의치 않고 키스를 계속한다.',
      );
      await era.printAndWait([
        '그 후 ',
        you.get_colored_name(),
        '은(는) ',
        treve.get_colored_name(),
        '의 목덜미에 달라붙어 붉은 흔적을 남긴다. 모든 표식을 새기듯이.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 손이 ',
        treve.get_colored_name(),
        '의 가슴에 닿아 브라 위로 주무른다.',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        '은(는) 갑작스러운 자극에 목소리를 내고, ',
        you.get_colored_name(),
        '은(는) 동시에 두 개의 유두를 잡아당긴다.',
      ]);
      await treve.say_and_wait('아아앗!');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 계속해서 손을 스커트 속으로 집어넣고 허벅지를 쓰다듬은 뒤 속옷 안쪽을 탐색한다.',
      ]);
      await era.printAndWait([
        '틈새를 ',
        you.get_colored_name(),
        '이(가) 쓰다듬자, ',
        treve.get_colored_name(),
        '의 몸이 떨린다.',
      ]);
      await treve.say_and_wait('만져줘요……');
      await era.printAndWait([
        '바랐던 대로, ',
        you.get_colored_name(),
        '의 손가락이 음핵에 닿는다.',
      ]);
      await era.printAndWait(
        '포피가 벗겨지고 예민한 부분을 부드럽게 애무받는다.',
      );
      await treve.say_and_wait('앗…… 하앗…… 응!');
      await era.printAndWait([
        you.get_colored_name(),
        '의 다른 한 손이 다시 ',
        treve.get_colored_name(),
        '의 가슴으로 들어가 유륜 주변을 쓰다듬는다.',
      ]);
      await era.printAndWait('손가락 끝으로 원을 그리며 조금씩 중심을 향한다.');
      await era.printAndWait(
        '마침내 유두에 도달하자, 엄지와 검지로 가볍게 누르고 굴리거나 혹은 손톱을 세운다.',
      );
      await treve.say_and_wait('기다려요, 거기는!');
      await era.printAndWait('좋아하는 곳인데.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 계속해서 몰아붙이고, ',
        treve.get_colored_name(),
        '의 머리가 흐릿해져 아무것도 생각할 수 없게 될 때까지.',
      ]);
      await era.printAndWait([
        '그리고 제정신으로 돌아왔을 때, ',
        treve.get_colored_name(),
        '은(는) 스스로 허벅지를 벌리고 있었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 만족스러운 듯 속옷을 벗긴다.',
      ]);
      await era.printAndWait([
        '이 다음을 기대하고 있는지, ',
        treve.get_colored_name(),
        '의 자궁은 계속 술렁이고 있다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 바지를 벗고 이미 발기한 그것을 보여주자, ',
        treve.get_colored_name(),
        '은(는) 작게 절정한다.',
      ]);
      await era.printAndWait('무서워도 도망치지 않는다.');
      if (!era.get('status:205:经期')) {
        era.print('피임할까요?');
        era.printButton('피임약을 먹인다', 1);
        era.printButton('생으로 싼다!', 2);
        ret.push(await era.input());
      }
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 자신의 성기를 잡고, ',
        treve.get_colored_name(),
        '의 질구에 가까이 대며 천천히 삽입한다.',
      ]);
      await era.printAndWait(
        '귀두가 들어가자 애액이 윤활제가 되어 육봉 전체가 단숨에 안쪽까지 들어간다.',
      );
      await treve.say_and_wait('아아아아! 안 돼요!!');
      await era.printAndWait([
        '뿌리 근처까지 집어삼킨 것을 확인하고, ',
        you.get_colored_name(),
        '은(는) 움직이기 시작한다.',
      ]);
      await treve.say_and_wait('앗! 앗! 격렬해요……');
      await era.printAndWait([
        '허리에 부딪힐 때마다 퍽 하는 소리가 나며 질벽을 쓸리고, ',
        treve.get_colored_name(),
        '은(는) 쾌감 속에서 신음할 수밖에 없다.',
      ]);
      await era.printAndWait(
        `육봉의 움직임에 맞춰, ${treve.sex}의 몸이 위아래로 움직인다.`,
      );
      await era.printAndWait([
        '표정 관리는 이미 무너졌지만, ',
        treve.get_colored_name(),
        '은(는) 이제 신경 쓰지 않는다.',
      ]);
      await treve.say_and_wait('가요! 가요! 아아아!!');
      await era.printAndWait([
        you.get_colored_name(),
        '의 스퍼트로 두 사람은 동시에 정점에 도달하고, 따뜻한 인자가 ',
        treve.get_colored_name(),
        '의 가라앉은 자궁을 채운다.',
      ]);
      await era.printAndWait([
        '사정은 길게 이어지고, 그동안 ',
        treve.get_colored_name(),
        '의 자궁은 귀두와 입맞춤하며 정액을 부어받는다.',
      ]);
      await era.printAndWait([
        '마침내 전부 쏟아내자, ',
        you.get_colored_name(),
        '은(는) 육봉을 뽑는다. 동시에 백탁이 역류한다.',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        '이(가) 자신의 배를 보고 있을 때, ',
        you.get_colored_name(),
        '이(가) 다시 그녀의 위로 압박해 온다.',
      ]);
      await era.printAndWait('입술이 겹쳐지고 혀가 얽힌다.');
      await era.printAndWait([
        '뜨거운 키스를 잠시 계속한 뒤, ',
        you.get_colored_name(),
        '은(는) 다시 기운을 차린 그것을 밀어 넣는다.',
      ]);
      await treve.say_and_wait('앗, 안 돼요……');
      await era.printAndWait([
        '안 될 것 따위는 없다.',
        you.get_colored_name(),
        '은(는) 다시 피스톤을 시작한다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '에게 강제로 범해지는 ',
        treve.get_colored_name(),
        '은(는) 필사적으로 저항하지만 힘이 들어가지 않는다.',
      ]);
      await era.printAndWait([
        '질 안의 추송이 격렬해지고, 입도 ',
        you.get_colored_name(),
        '의 혀에 유린당한다.',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '의 등을 세게 껴안고 몸을 쾌락에 맡긴다.',
      ]);
      await treve.say_and_wait('정말…… 저, 어떻게 되어도 좋아요……');
      await era.printAndWait([
        '그런 ',
        treve.get_colored_name(),
        '을(를) 보고, ',
        you.get_colored_name(),
        '은(는) 만족스러운 미소를 지은다.',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        '은(는) 양발로 ',
        you.get_colored_name(),
        '의 등을 안고, ',
        you.get_colored_name(),
        '을(를) 놓아주지 않는다.',
      ]);
      await treve.say_and_wait('응! 내보내줘요, 전부 줘요.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 귀두를 자궁구에 밀착시킨 채 정자를 뿜어낸다.',
      ]);
      await treve.say_and_wait('호오…… 앗……');
      await era.printAndWait([
        you.get_colored_name(),
        '의 사정은 아직 계속되고, 맥박이 칠 때마다 ',
        treve.get_colored_name(),
        '의 몸도 경련한다.',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        '의 작은 자궁이 터질 듯한 양이라고 느끼게 할 정도로 내보내고 마침내 해방이 끝난다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 육봉을 천천히 뽑는다.',
      ]);
      await treve.say_and_wait('한 번 더, 가게 해줘요……');
      await era.printAndWait([
        '그렇게 말하는 ',
        treve.get_colored_name(),
        '은(는) 얼굴을 ',
        you.get_colored_name(),
        '의 육봉에 비빈다.',
      ]);
      await era.printAndWait('그대로 혀를 내밀고 귀두를 입안에 머금는다.');
      await era.printAndWait('요도에 남은 것까지 다 빨아먹는다.');
      await era.printAndWait([
        you.get_colored_name(),
        '의 육봉은 다시 깨끗하게 발기하고, ',
        treve.get_colored_name(),
        '에게 자신의 비소로 옮겨진다.',
      ]);
      await treve.say_and_wait('이번에는 뒤에서……');
      await era.printAndWait('기어서 후배 자세가 된다.');
      await treve.say_and_wait('앗! 이거 안 돼요, 찌르는 곳이 달라요……');
      await era.printAndWait('질 안의 주름 하나하나가 쓸린다.');
      await era.printAndWait([
        you.get_colored_name(),
        '의 너무 격렬한 움직임에, ',
        treve.get_colored_name(),
        '은(는) 팔의 지탱이 무너지고, 엉덩이를 내민 형태가 된다.',
      ]);
      era.printButton('「파크의 그곳은 기분 좋아. 꽉 조여서 최고야.」', 1);
      await era.input();
      await era.printAndWait([
        '허리를 부딪칠 때마다, ',
        treve.get_colored_name(),
        '의 몸이 떨린다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 배를 공략하듯 질벽을 따라 위로 민다.',
      ]);
      await era.printAndWait([
        'G스폿을 찔린 ',
        treve.get_colored_name(),
        '은(는) 전신에 전류가 흐르는 듯한 것을 느낀다.',
      ]);
      await treve.say_and_wait('거기! 안 돼요…… 또 와요!');
      await treve.say_and_wait('가요! 내보내줘요! 안에 내보내주세요.');
      await era.printAndWait([
        '절정과 동시에 ',
        you.get_colored_name(),
        '에게 안으로 사정당하며, 뜨거운 인자즙을 부어받는다.',
      ]);
      era.drawLine();
      await era.printAndWait([
        '잠시 쉬고, ',
        you.get_colored_name(),
        '에게 깜짝 선물이라고 말하는 ',
        treve.get_colored_name(),
        '은(는) 가볍게 달려 옆의 탈의실로 들어간다.',
      ]);
      await era.printAndWait([
        '잠시 후, ',
        treve.get_colored_name(),
        '의 작은 머리가 탈의실 문틈 사이로 튀어나온다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '에게는 불안한 얼굴이 보인다. 한 손으로 문의 가장자리를 강하게 지탱하고 있다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 손을 뻗어, ',
        treve.get_colored_name(),
        '의 입을 가리는 작은 손을 잡고 끌어당겨 뒤로 비튼다.',
      ]);
      await era.printAndWait([
        '작은 손이 입에서 떨어진 순간, ',
        treve.get_colored_name(),
        '의 혀를 내밀고 뜨거운 숨을 내뱉는 작은 입이 드러난다.',
      ]);
      await era.printAndWait([
        '소리를 참지 못할 것을 두려워하는지, ',
        treve.get_colored_name(),
        '은(는) 급히 아랫입술을 깨문다.',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '의 손을 때린다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 그녀를 놓아주자, ',
        treve.get_colored_name(),
        '은(는) 암캐처럼 양손을 바닥에 짚고, 목에는 눈에 띄게 검은 가죽 목줄이가 있다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 사슬을 강하게 당겨, ',
        treve.get_colored_name(),
        '의 상반신 전체를 억지로 뒤로 젖히게 한다.',
      ]);
      await era.printAndWait([
        '질식은 ',
        treve.get_colored_name(),
        '의 양 볼을 붉게 만들고, 양손으로 절망적으로 목줄을 할퀴며 무의미하게 풀려고 애쓰는 것뿐만 아니라, 쾌감의 자극도 직선적으로 높인다.',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        '은(는) 양다리를 떨며 음액이 정액을 휘말아 여러 번 넘쳐흐르고, 허벅지를 타고 가랑이를 완전히 적신다……',
      ]);
      await era.printAndWait([
        '가학적인 성향을 채운 ',
        you.get_colored_name(),
        '이(가) 사슬을 느슨하게 풀자, 기력도 의지도 다한 ',
        treve.get_colored_name(),
        '은(는) 바닥에 무릎을 꿇고 크게 숨을 몰아쉰다.',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '의 명령으로 작은 얼굴을 바닥에 대고, ',
        you.get_colored_name(),
        '에게 엉덩이를 높게 치켜들고 두 손가락으로 붉게 부어오른 양 음순을 벌려 아까 안으로 사정당한 그곳을 ',
        you.get_colored_name(),
        '에게 보여준다.',
      ]);
      await era.printAndWait([
        '정액이 조금씩 바닥으로 흘러내리고, ',
        you.get_colored_name(),
        '은(는) 충분히 만족한다.',
      ]);
      era.printButton('「영리한 개라면 다음에 무엇을 해야 할지 알겠지.」', 1);
      await era.input();
      await treve.say_and_wait(
        '제 오나홀 보지에 당신의 고귀한 정액을 부어주세요❤️~',
      );
      await era.printAndWait([
        '부리로 쪼는 듯한 키스와 함께, ',
        you.get_colored_name(),
        '의 육봉은 다시 애마를 침범하기 시작한다.',
      ]);
      return ret;
    };
    f.title = title;
    return f;
  })(),
};
