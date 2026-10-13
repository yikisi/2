/**
 * @file マヤノトップガン - 募集
 * @author 黑奴二号
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} maya
   * @param {CharaTalk} you
   */
  async rec_start(maya, you) {
    const ret = [];
    await era.printAndWait(
      `오늘은 장래가 유망한 우마무스메를 알아보고 발굴하기 위한 선발 레이스가 열리는 날이다. 어떤 우마무스메를 만나게 될까——${you.name}은(는) 가슴을 두근거리며 경기장으로 향했다.`,
    );
    await maya.say_and_wait(
      '싫어, 싫어, 싫어————! 마야도 레이스 나가고 싶어! 나가게 해 줘!!',
    );
    await era.printAndWait(
      `선발 레이스 직원 A 「그러니까, ${maya.name} 씨! 멋대로 레이스에 끼어들지 마세요! 윽, 몸놀림이 너무 유연해……!」`,
    );
    await maya.say_and_wait(
      '싫어, 싫어, 싫어~! 마야도 심장이 두근두근하는 거 하고 싶단 말이야~!!',
    );
    await era.printAndWait(
      `조금 떨어진 곳에서 ${maya.name}이라는 우마무스메가 직원과 실랑이를 하고 있다…… 어라, ${maya.sex}, 이쪽으로 달려오는데?`,
    );
    await maya.say_and_wait('흥이다, 안 잡힐 거지롱~! ……와앗!?');
    await era.printAndWait(
      `${you.name}은(는) 도망치던 ${maya.name}하고 부딪쳐 황급히 받아 냈다. 소녀의 부드러운 몸과 맞닿은 순간, ${you.name}은(는) 지금껏 느껴 본 적 없는 충격을——물리적인 의미로——받았다.`,
    );
    await maya.say_and_wait('아와와와, 미안해——! 괜찮아!?');
    era.printButton('「트레센의 트레이너인데, 이 정도는 끄떡없어!」', 1); //無意味なネタ選択肢
    era.printButton('「괜찮아. 너도 다친 데는 없니?」', 2);
    ret.push(await era.input());
    if (ret.at(-1) === 1) {
      await era.printAndWait(
        `실전 가라테의 아버지 최영의는 이렇게 말했다. 파괴력＝속도×악력×체중.`,
      );
      await era.printAndWait(
        `우마무스메, 특히 중등부 우마무스메의 몸무게는 얼마나 될까. 30kg? 35kg? 아무리 생각해도 40kg은 넘지 않을 것이다.`,
      );
      await era.printAndWait(
        `하지만 ${maya.couple_title}이 짊어진 소망과 축복과 의지를 더하면, 그 우마 소울의 무게는 400kg을 밑돌지 않는다!`,
      );
      await era.printAndWait(
        `인간의 세 배에 달하는 속도, 세 배의 악력, 세 배의 체중. 합치면 인간의 열 배, 아니 아홉 배는 훌쩍 넘는다!`,
      );
      await era.printAndWait(
        `이토록 강하고, 이토록 호쾌한 충격을 ${you.name}이(가) 어떻게 받아 냈겠는가? 받아 낼 수 있을 리가 없다!`,
      );
      if (
        (ret['down'] =
          era.get(`base:0:耐力`) <= Math.random() * era.get(`base:24:力量`))
      ) {
        era.printButton('「그러니까 멈추면 안 되는 거야……」', 1); //BGMフリージア
        await era.input();
        await era.printAndWait(
          `${maya.sex}의 속도는 진짜였다…… 그것이 ${you.name}의 마지막 생각이었다.`,
        );
        await era.printAndWait(
          `${you.name}의 눈앞이 캄캄해지며 의식이 끊겼다……`,
        );
      } else {
        //プレイヤーのスタミナ対トップガンのパワー判定。成功で追加ステータス。筋には影響しない
        await era.printAndWait(
          `하지만 ${you.name}은(는) 받아 낼 수 있다! 왜냐하면 ${you.name}은(는) 더럽게 강하니까!`,
        );
        await era.printAndWait(
          `이렇게 작은 우마무스메 하나가 ${you.name}한테 상처 하나 낼 수 있을 리 없다.`,
        );
        era.printButton('「우마무스메를 지키는 게 내 사명이니까!」', 1);
        await era.input();
      }
    }
    await maya.say_and_wait('응, 마야는 괜찮아! 받아 줬으니까……');
    await maya.say_and_wait(
      `에헤헤. 상냥하네! 신입 트레이너야? 마야는 말이야, 이름은 ${maya.name}(마야노 탑건)이야`,
    );
    await era.printAndWait(
      `선발 레이스 직원 A 「아, 잘됐네요! 트레이너님! 이 아이가 멋대로 레이스에 나가지 못하게 좀 봐주시겠어요!? 부탁드려요!」`,
    );
    era.printButton('「싫어, 싫어, 싫어!」', 1); //メスガキの技を以てメスガキを制す
    era.printButton('「알겠습니다. 맡겨 주세요.」', 2);
    ret.push(await era.input());
    if (ret.at(-1) === 1) {
      await era.printAndWait(`어른이 무너지는 건 대개 한순간이다……`);
      await era.printAndWait(
        `변함없이 지루한 나날, 과도한 업무, 새내기 특유의 불안. 그것만으로도 ${you.name}의 정신은 진작 벼랑 끝에 몰려 있었다.`,
      );
      await era.printAndWait(
        `직원의 떠넘기기가 마지막 한 방이 되었다. 앞으로 매일 혹사당하며 잡일꾼보다 못한 조연으로 전락하고, 끝내 걷어차일 것이라 생각하자 절망이 ${you.name}의 가슴을 가득 채웠다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 바닥에 웅크려, 나이가 몇인데도 어린아이처럼 울었다.`,
      );
      await maya.say_and_wait('어……?');
      await era.printAndWait(`직원도 ${maya.name}도 할 말을 잃었다.`);
      await era.printAndWait(
        `하지만 트레센의 직원은 경험이 풍부하여 이상한 사태에 익숙하다.`,
      );
      await era.printAndWait(
        `선발 레이스 직원 A 「그래! ${maya.name} 씨, 이 트레이너님을 돌봐 주지 않을래요?」`,
      );
      await maya.say_and_wait('？');
      await era.printAndWait(
        `선발 레이스 직원 A 「다른 사람을 돌볼 줄 알면 어른스러워 보이잖아요? ${maya.name} 씨의 매력을 보여 줄 절호의 기회예요!」`,
      );
      await maya.say_and_wait('오오! 알았어!');
      await era.printAndWait(
        `과정이야 어쨌든 직원은 ${maya.name}을 그 자리에서 떼어 놓는 데 성공하고 서둘러 떠났다.`,
      );
      await maya.say_and_wait('자, 자, 이제 울지 마……');
      await era.printAndWait(
        `소녀는 서툴게 ${you.name}을(를) 품에 안았다. 아직 완전히 발달하지 않은 가슴이었지만, 충분히 따뜻하고 부드러웠다.`,
      );
      await era.printAndWait(
        `우마무스메에게서 풍기는 은은한 향기에 감싸인 ${you.name}은(는) 묘한 안도감을 느꼈다.`,
      );
      era.printButton('「엄마……」', 1);
      await era.input();
      await maya.say_and_wait(
        '엄마 여기 있어~ 착하다, 착해…… 에헤헤, 어쩐지 어른이 된 것 같아~',
      );
      await era.printAndWait(
        `${maya.name}한테 위로를 받자 ${you.name}의 마음이 풀리며 의식도 서서히 흐려졌다……`,
      );
    } else {
      await maya.say_and_wait('에에엣!? 잠깐만! 왜 맡겠다고 한 거야!?');
      await maya.say_and_wait('정말, 상냥한 트레이너인 줄 알았는데!');
      await era.printAndWait(
        `한바탕 소동이 있었지만 결국 ${maya.name}은 레이스에 나가지 못했고, 선발 레이스는 ${maya.name} 없이 시작되었다……`,
      );
      await maya.say_and_wait(
        '아~ 좋겠다, 레이스 좋겠다. 마야도 나가고 싶어~ 지루해.',
      );
      await maya.say_and_wait(
        '있지, 있지, 마야랑 수다라도 떨어줘! 무슨 재미있는 이야기 없어?',
      );
      await era.printAndWait(
        `${you.name}이(가) 난감해하던 중, ${maya.name}이 문득 경기장을 보고 작게 입을 열었다.`,
      );
      await maya.say_and_wait('응? 지금 두 번째로 달리는 아이——');
      await era.printAndWait(
        `${maya.name}의 말에 무심코 두 번째 우마무스메를 바라보았다.`,
      );
      await era.printAndWait(
        `저 위치라면 타이밍에 따라 선두가 치고 나가는 것을 막을 수 있을지도 모른다.`,
      );
      await era.printAndWait(
        `게다가——잘하면 앞이 단숨에 트여, 그 우위를 유지한 채 마지막 직선에 들어설 수 있다.`,
      );
      await maya.say_and_wait(
        '느낌 좋을 때 휙 뛰어들어서, 쌔앵~! 하고 달리면 될 것 같은데.',
      );
      await maya.say_and_wait('느낌 좋을 때…… 아, 지금!!');
      await era.printAndWait(`??? 「윽…… 움직임이……!!」`);
      await maya.say_and_wait('아———— 아까워~');
      await era.printAndWait(
        `……저 우마무스메는 실패했지만, ${maya.name}이 읽은 타이밍은 완벽했다.`,
      );
      await maya.say_and_wait('아~ 좋겠다, 좋겠다! 마야도 레이스 나가고 싶어');
      era.printButton('(너는 대체……?)', 1);
      await era.input();
      await maya.say_and_wait('응? ……마야를 빤히 보고, 왜 그래?');
      await maya.say_and_wait(
        '혹시…… 이게 전설의 첫눈에 반했다는 거야!? 꺄~☆ 마야는 인기쟁이네',
      );
      await era.printAndWait(
        `아직 말로는 다 표현하지 못하지만 레이스의 전개를 완전히 읽어 낸 ${maya.name}。`,
      );
      await era.printAndWait(
        `${maya.sex}가 드러낸 재능의 편린이 ${you.name}의 가슴에 깊이 남았다……`,
      );
    }
    return ret;
  },
  /**
   * @param {CharaTalk} maya
   * @param {CharaTalk} you
   */
  async rec_after(maya, you) {
    await era.printAndWait(
      `${maya.name}은 ${you.name}한테 강렬한 인상을 남겼다. 다시 만나고 싶어서 ${you.name}은(는) 학원 안을 샅샅이 찾아다녔다……`,
    );
    await maya.say_and_wait('어, 이상하네? 혹시 너는――');
    await maya.say_and_wait(
      '역시! 선발 레이스 때 만난 사람! 와———— 또 만났네~! 여기서 뭐 해?',
    );
    era.printButton('「너를 찾으러 왔어.」', 1);
    await era.input();
    await maya.say_and_wait(
      '어, 마야를? 와앗…… 뭔가———— 좀 어른스러워~!! 꺄~~~♪',
    );
    await maya.say_and_wait(
      `그런데 말이야, 마야는 지금 좀 급해. ${you.name} 씨하고 이야기하고 싶은데, 으음……`,
    );
    await maya.say_and_wait('아, 맞다! 같이 가면 되잖아!');
    await maya.say_and_wait('정했어————! 그럼 이륙……————!!');
    await era.printAndWait(
      `그렇게 ${you.name}은(는) 영문도 모른 채 ${maya.sex}한테 이끌려 경기장까지 갔다……`,
    );
    await maya.say_and_wait(
      '그렇구나, 저기서도 슉—— 튀어나가면 되는 거네. 마야는 몰랐어……!',
    );
    await maya.say_and_wait(
      '역시 어른 우마무스메들의 레이스는 엄청 두근두근해~!!',
    );
    await era.printAndWait(
      `${maya.name}은 일류 우마무스메들이 치열하게 겨루는 레이스에서 반짝이는 눈을 떼지 않았다……`,
    );
    await maya.say_and_wait(
      '으으~ 두근두근한 레이스에 나가는 언니들, 반짝반짝해~!! 좋겠다. 마야도 반짝이고 싶어……!',
    );
    era.printButton('「두근두근? 반짝반짝?」', 1);
    await era.input();
    await maya.say_and_wait(
      '응! 이런 큰 레이스에서는 마야가 모르는 일이 잔뜩 일어나서 정말 두근두근해!',
    );
    await maya.say_and_wait(
      '마야가 모르는 걸 아는 어른 우마무스메들은 정말 반짝반짝해 보여~!',
    );
    await maya.say_and_wait(
      '그래서 마야도 저렇게 되고 싶어! 두근두근한 레이스에 나가서 반짝이고 싶어!',
    );
    await maya.say_and_wait(
      '하아~ 좋겠다. 트윙클 시리즈…… 마야도 빨리 저기서 달리고 싶어~!',
    );
    await era.printAndWait(
      `교관 A 「아! ${maya.name} 씨! 또 트레이닝을 빼먹었구나!」`,
    );
    await maya.say_and_wait(
      '에~ 트레이닝……? 싫어! 마야는 절대 싫어. 재미없는걸.',
    );
    await maya.say_and_wait('마야는 경기장을 탐험할 거야————. 바이바이————!!');
    await era.printAndWait(`교관 A 「기다려! 아, 또 도망쳤네……」`);
    era.printButton('「저 아이는 트레이닝을 잘 못하나요?」', 1);
    await era.input();
    await era.printAndWait(
      `교관 A 「음…… 잘 못하는 게 있다기보다는…… 아예 없어요. 뭘 시켜도 금방 배우는 대단한 아이죠.」`,
    );
    await era.printAndWait(
      `교관 A 「더트를 처음 달렸을 때도 요령을 터득했고, 위닝 라이브 댄스 수업에서도 애먹는 모습을 본 적이 없어요.」`,
    );
    await era.printAndWait(
      `${maya.name}은 타고난 『이해력』을 갖고 있다——즉, ${maya.sex}는 『정답』을 찾아내는 놀라운 직감을 타고난 것이다……!`,
    );
    await era.printAndWait(
      `교관 A 「공부도 잘해요…… 그런데 어째서인지 트레이닝은 지루한가 봐요…… 처음 한 번 나온 뒤로는 한 번도 참가하지 않았죠.」`,
    );
    era.printButton('「단 한 번뿐이라고요!?」', 1);
    await era.input();
    await era.printAndWait(
      `교관 A 「그래요…… 그래서 모의 레이스를 포함한 모든 레이스의 출주가 금지되어 있어요.」`,
    );
    await era.printAndWait(
      `레이스는 트레이닝의 성과를 보여 주는 자리다. 그 판단도 이해하지 못할 것은 아니다……`,
    );
    await era.printAndWait(
      `하지만 ${you.name}의 머릿속에는 레이스에 나가고 싶어 하던 ${maya.name}의 모습이 떠올랐다…… ${maya.sex}를 위해 뭔가 해 줄 수 없을까……?`,
    );
  },
  /**
   * @param {CharaTalk} maya
   * @param {CharaTalk} you
   */
  async rec_3(maya, you) {
    await maya.say_and_wait('야호~♪ 요즘 자주 만나네.');
    await maya.say_and_wait(
      '지금 아래 경기장에서 하는 모의 레이스를 보고 있어. 마야는 또 못 나가니까——.',
    );
    await maya.say_and_wait('좋겠다~ 마야도 레이스 나가고 싶어. 하지만――');
    era.printButton('「아무래도 트레이닝은 하기 싫니?」', 1);
    await era.input();
    await maya.say_and_wait('……하기 싫어.');
    await maya.say_and_wait('안 하면 안 된다고 해서 처음에는 제대로 나갔어.');
    await maya.say_and_wait(
      '그런데 그런 건 한 번만 하면 다 알아 버리는걸. 다 알고 나면 재미없어.',
    );
    await maya.say_and_wait('재미없는 일을 계속해서 뭐 해?');
    await era.printAndWait(
      `${maya.name}은 뭘 하든 금세 『정답』을 알아내고, 게다가 능숙하게 해낸다.`,
    );
    await era.printAndWait(
      `아마 ${maya.sex}는 꾸준히 노력한 끝에 무언가를 얻어 본 경험이 거의 없을 것이다.`,
    );
    await era.printAndWait(
      `그래서 노력의 의미를 모르고 트레이닝이 지루하고 괴롭기만 하다고 느끼는 것이리라……`,
    );
    await maya.say_and_wait(
      '……열심히 트레이닝하는 모두랑 같아야 한다고, 마야도 생각한 적 있어.',
    );
    await maya.say_and_wait(
      '하지만 아무리 해도 재미없는걸. 의미가 없다는 생각만 들어.',
    );
    await maya.say_and_wait(
      '……모두랑 다르면 안 되는 거야? 마야는 반짝반짝한 우마무스메가 될 수 없어……?',
    );
    era.printButton('「솔직히 말하면 그렇지」', 1); //ネタ選択肢。筋には影響しない（初期好感に効くかも？）
    era.printButton('「그렇지 않아!!」', 2);
    if ((await era.input()) === 1) {
      //天皇玉音放送
      await era.printAndWait(
        `결국 게으른 거야. 게으르지 않다면 트레이닝을 해. 레이스를 위해서잖아. 레이스를 위해서라면 달려, 하라고. 학교 안 가도 돼? 레이스에 나가고 싶잖아, 한계를 넘고 싶잖아?`,
      );
      await era.printAndWait(
        `직접 생각해 봐. 게으르잖아. 잠만 자고 트레이닝에 안 나와. 오후에는 게임, 밤에는 드라마. 세 끼 다 학원에서 먹으면서 룸메이트한테 밥까지 가져다 달라고 하지. 게으른 것 말고 뭐가 있니?`,
      );
      await era.printAndWait(
        `스킬을 익혔는지 스스로 생각해 봐. 동급생들은 한밤중에도 트랙을 돌잖아. 작은 전등, 충전식 전등, USB 전등을 켜고 책을 읽는 아이도 있어.`,
      );
      await era.printAndWait(
        `너는? 침대에서 룸메이트랑 밤늦게까지 게임하지. 게으른 게 아니면 뭔데. 레이스 때가 되면 「내일은 추월하게 해 줘, 스킬이 없으니까」——이것도 저것도 못 해. 결국 게으른 거야. 트레이닝은 안 하고 놀고만 싶은 거지.`,
      );
      await era.printAndWait(
        `게임할 시간을 트레이닝에 써 봐. 어른 흉내 내는 데 쓰는 기운을 트레이닝에 써 봐. 그러면 실력이 늘겠니, 안 늘겠니. G1에서 우승할지도 모르지.`,
      );
      await era.printAndWait(
        `말해 두는데, 인간은 누구나 게을러. 다만 그걸 깨닫는 사람과 깨닫지 못하는 사람이 있을 뿐이야.`,
      );
      await era.printAndWait(
        `그렇다고 해도 트레이너로서 ${you.name}은(는) ${maya.sex}를 내버려 둘 수 없다.`,
      );
    } else {
      await maya.say_and_wait('와앗! 까, 깜짝 놀랐어.');
      await maya.say_and_wait(
        '그렇게 큰 소리도 낼 줄 아네. 상냥한 사람 같았는데……',
      );
    }
    await maya.say_and_wait('……있지, 있지. 너도 마야가 트레이닝했으면 좋겠어?');
    era.printButton('「했으면 좋겠어」', 1); //選択の余地なし
    era.printButton('「정말 했으면 좋겠어」', 2);
    await era.input();
    await maya.say_and_wait('으음————…… 그렇구나.');
    await maya.say_and_wait('……좋아! 마야 이야기를 들어 준다면 트레이닝할게!');
    era.printButton('「이야기?」', 1);
    await era.input();
    await maya.say_and_wait('응♪ 있지, 있지~');
    await maya.say_and_wait('마야랑 역으로 데이트하러 가자!!');
    era.printButton('「좋아」', 1);
    era.printButton('「볼일이 있어서 이번에는 안 돼」', 2);
    const ret = await era.input();
    if (ret === 2) {
      await maya.say_and_wait(
        '어…… 알았어…… 하지만 시간 나면 꼭 마야랑 데이트해야 해! 알겠지?',
      );
    }
    return ret;
  },
  /** @param {CharaTalk} maya */
  async rec_try_skip_station(maya) {
    await maya.say_and_wait(
      '앗! 너잖아! 마야랑 역에 가기로 약속했는데………… 마야, 계속 기다렸어.',
    );
    await maya.say_and_wait('마야는 이제 어른이니까 많이 말하진 않겠지만…………');
    await maya.say_and_wait('그래도 약속했으니까 잊으면 안 돼!');
  },
  /**
   * @param {CharaTalk} maya
   * @param {CharaTalk} you
   */
  async rec_station(maya, you) {
    await era.printAndWait(
      `${you.name}은(는) ${maya.name}하고 한 약속을 떠올렸다.`,
    ); //駅に行くたびに発生。3を選ばない限り。招きたくないなら、なぜ押すのか.jpg
    await era.printAndWait('약속 장소로 가겠습니까?');
    era.printButton('간다', 1);
    era.printButton('다음에 간다', 2);
    era.printButton(`귀찮다. 이제 ${maya.sex}는 만나고 싶지 않다`, 3);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(`역 앞――`);
      await maya.say_and_wait('착륙!! 기다렸지♪');
      await maya.say_and_wait(
        '에헤헤, 오늘 함께해 줘서 고마워! 어른 우마무스메처럼 데이트를 한 번 해 보고 싶었거든——♪',
      );
      await era.printAndWait(
        `${maya.name}의 귀가 설렘에 흔들리고 몸도 가볍게 들썩였다. 정말 들뜬 모양이다.`,
      );
      await maya.say_and_wait(
        '있지, 있지, 어디로 갈까!? 멋진 가게에서 쇼핑하기랑 반짝반짝한 디저트 가게 둘러보기, 둘 다 빼놓을 수 없겠지!',
      );
      await maya.say_and_wait(
        '그리고 로맨틱한 영화도 봐야겠지——? 어른스러운 카페에서 차도 마시고 싶어…… 으으으, 벌써 신나~~~!!',
      );
      await maya.say_and_wait(
        '빨리, 빨리! 꾸물거리다가는 하루가 다 가겠어! 그럼 간다, 이륙——————!',
      );
      await era.printAndWait(
        `그 뒤 ${you.name}은(는) ${maya.name}의 거침없는 기세에 이끌려 이곳저곳을 돌아다녔다……`,
      );
      await maya.say_and_wait(
        '이것 봐, 저 티셔츠 엄청 귀여워~! 아, 저기는 주스 가게야!? 당근 주스도 팔까——!?',
      );
      await maya.say_and_wait(
        '응? 킁킁…… 좋은 냄새——! 이쪽이야! 가 보자, 가 보자~!',
      );
      await maya.say_and_wait(
        '빨리, 빨리! 멍하니 있으면 안 돼! 마야를 잘 따라와♪',
      );
      await maya.say_and_wait('뭘 볼까——!? 으음, 다 재미있을 것 같아~ 앗!?');
      await maya.say_and_wait(
        '아와와와, 예, 예고편에 키스 장면이……! 봐 버렸어~!! 으으, 얼굴이 뜨거워……!',
      );
      await era.printAndWait(
        `키스 장면만 보고도 새빨개지는 ${maya.name}한테는 역시 어린애 같은 구석이 있다.`,
      );
      await maya.say_and_wait(
        '아이스크림 몇 스쿱으로 할까? 1스쿱? 2스쿱? 3스쿱!? 3스쿱으로 하자! 응, 정했어!!',
      );
      await maya.say_and_wait(
        '어느 맛으로 하지~ 딸기도 맛있겠다…… 바닐라도~ 초코 쿠키도~',
      );
      await maya.say_and_wait(
        '어, 치즈 케이크 맛이 기간 한정이야!? ……있지, 있지, 역시 4스쿱으로 하자~!!',
      );
      await era.printAndWait(
        `${you.name}은(는) 하루 종일 ${maya.name}한테 끌려다녔다……`,
      );
      await maya.say_and_wait('아아~ 재미있었다——!!');
      await maya.say_and_wait(
        '너, 대단하다——! 전력을 다하는 마야를 따라온 사람은 마블러스 말고 처음일지도!',
      );
      era.printButton('「중간에 쓰러지는 줄 알았어……」', 1);
      await era.input();
      await maya.say_and_wait(
        '아하하, 그랬어!? 그럼 정말 열심히 해 준 거네——! 고마워.',
      );
      await maya.say_and_wait(
        '……있지, 있지. 너는 왜 그렇게 상냥해? 왜 마야랑 데이트해 준 거야?',
      );
      await maya.say_and_wait(
        '역시 마야가 『이야기를 들어 주면 트레이닝할게』라고 해서?',
      );
      era.printButton('「조금 달라.」', 1);
      await era.input();
      await maya.say_and_wait(
        '조금 달라? 무슨 뜻이야? 마야가 트레이닝했으면 해서 데이트한 게 아니야?',
      );
      await maya.say_and_wait('그게 아니라면 왜 와 준 거야?');
      era.printButton('「네가 꿈을 포기하게 하고 싶지 않으니까!」', 1);
      await era.input();
      await maya.say_and_wait('꿈……?');
      await maya.say_and_wait('마야의 꿈……');
      await era.printAndWait(
        `${maya.name}은 입을 다물고 생각에 잠겼다. 그리고――`,
      );
      await maya.say_and_wait('……그렇구나.');
      await maya.say_and_wait('응…… 오늘 정말 고마웠어——!');
      await maya.say_and_wait('내일 같이 트레이닝하자!');
    }
    return ret;
  },
};
