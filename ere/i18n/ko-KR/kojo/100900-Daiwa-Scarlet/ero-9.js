/**
 * @file ダイワスカーレット - 調教
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  ts_start: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} daiwa
     * @param {CharaTalk} you
     * @param {PrintedSpan} callname
     */
    const f = async (daiwa, you, callname) => {
      await era.printAndWait(
        '아침부터 어쩐지 몸이 뜨겁다. 그렇다고 열이 나는 것도 아니라 대수롭지 않게 넘겼다.',
      );
      await era.printAndWait('기분 탓이겠지?');
      await era.printAndWait('——그렇게 생각했는데……');
      await you.say_and_wait('……이상하네…… 아침에는 아무렇지도 않았는데……');
      await era.printAndWait(
        '——갑자기 몸 상태가 나빠졌다. 온몸이 뜨겁고, 심장도 진정될 기미가 없다……',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은 트레이너실 소파에 앉아 가슴께의 단추를 풀었다.',
      ]);
      await era.printAndWait(
        '배 속 깊은 곳에서 묘하게 쑤시는 듯한 통증이 느껴졌다. 당장 옷을 모두 벗고 밖을 뛰어다니고 싶었다—— 그런, 제정신이 아닌 기분이었다.',
      );
      era.println();
      await daiwa.say_and_wait(['안녕하세요, ', callname, '。']);
      era.println();
      await era.printAndWait([
        '어느새 ',
        daiwa.get_colored_name(),
        '이 찾아올 시간이 되었다.',
      ]);
      era.println();
      await you.say_and_wait('아…… 응…… 안녕…… 다이와……');
      await daiwa.say_and_wait('……');
      era.println();
      await era.printAndWait(
        '쿵, 하는 소리와 함께 다이와의 가방이 바닥에 떨어졌다.',
      );
      await era.printAndWait('아, 그러고 보니, 지금 차림은 좀……');
      era.println();
      await daiwa.say_and_wait([callname, '……？']);
      await you.say_and_wait('아…… 잠깐만……');
      era.println();
      await era.printAndWait([
        '머리로는 빨리 옷을 차려입어야 한다는 걸 알면서도, 단추가 도저히 채워지지 않는다. 한참을 허둥대던 끝에, 눈앞에 ',
        daiwa.get_colored_name(),
        '의 얼굴이 다가와 있었다.',
      ]);
      era.println();
      await you.say_and_wait('……응? 왜 그래?');
      await daiwa.say_and_wait(
        '당신…… 아침부터 줄곧 그런 냄새를 풍기고 계셨나요?',
      );
      await you.say_and_wait('……냄새?');
      era.println();
      await era.printAndWait([
        '그러고 보니, 오늘은 왠지 달콤한 냄새가 감도는 것 같아. 게다가 ',
        daiwa.get_colored_name(),
        '의 얼굴을 보고 있으면, 이유 없이 만지고 싶어져.',
      ]);
      era.println();
      await era.printAndWait([
        '그렇게 생각한 바로 그 순간 ',
        daiwa.get_colored_name(),
        '은 갑자기 ',
        you.get_colored_name(),
        '을(를) 품에 안았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 반사적으로 그녀의 목에 팔을 감았다. 고개를 들어 보니, 그 얼굴은 육식동물 같기도 하고, 먹잇감을 발견한 사냥꾼 같기도 했다.',
      ]);
      await you.say_and_wait(
        '이러면 내가 먹잇감이 되는 거잖아. 금방이라도 잡아먹힐, 불쌍한 어린 양……',
        true,
      );
      await era.printAndWait([
        '하지만 지금의 ',
        you.get_colored_name(),
        '은(는) 그래도 상관없다고 생각하고 있었다.',
      ]);
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 얼굴을 그녀의 목덜미에 바짝 대고, 뺨을 비비며, 체취를 들이마신다. 시야의 가장자리에, 왜 샀는지 알 수 없는 작은 병이 테이블 뒤편에 놓여 있는 것이 스쳐 보였다.',
      ]);
      await you.say_and_wait('이젠…… 아무것도 생각나지 않아……', true);
      await era.printAndWait(
        '목덜미에서 풍겨오는 그녀의 향기와, 아까보다 더 진한 달콤한 향기가 콧속을 자극한다……',
      );
    };
    f.title = '트레이너의 컨디션 난조!?';
    return f;
  })(),
  ts_end: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} daiwa
     * @param {CharaTalk} you
     * @param {PrintedSpan} callname
     */
    const f = async (daiwa, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        '가 눈을 떴을 때는 이미 휴게실 침대 위였다.',
      ]);
      await era.printAndWait([
        '멍하던 머릿속이 차츰 맑아지자,',
        you.get_colored_name(),
        '은(는) 허리가 유난히 무겁다는 것을 깨닫고, 그제야 시트의 처참한 모습을 발견했다.',
      ]);
      era.println();
      await era.printAndWait([
        '옆을 보니,',
        daiwa.get_colored_name(),
        '이 얼굴을 감싸고 무언가 중얼거리고 있었다.',
      ]);
      await daiwa.say_and_wait(
        '어떻게 하지…… 합의…… 그래요, 합의한 거니까…… 트레이너도 그렇게 흥분해 있었으니까…… 하지만, 트레이너가 출산 휴가에 들어가면…… 아아……',
      );
      era.println();
      await era.printAndWait([
        '그녀는 무언가를 고민하고 있는 듯했다. 정오까지 이어졌던 열은 이미 가라앉았고 ',
        you.get_colored_name(),
        '은(는) 무슨 일이 일어났는지, 자신이 무슨 일을 당했는지 조금씩 떠올렸다.',
      ]);
      await era.printAndWait([
        '맞아. 그 후 ',
        daiwa.get_colored_name(),
        '에게 침대로 옮겨져 암컷이 되었다.',
      ]);
      era.println();
      await era.printAndWait(
        '아래를 내려다보니, 여느 때처럼 눈에 띄는 가슴과 비정상적으로 부풀어 오른 배가 있다.',
      );
      await era.printAndWait('탁자 위에는 빈 병 하나가 놓여 있었다.');
      era.println();
      await you.say_and_wait('……다이와……');
      await daiwa.say_and_wait([
        '히익! 죄, 죄송해요, ',
        callname,
        '! 제가……너무 심하게 해 버렸어요……읏, 으으……',
      ]);
      await you.say_and_wait('그래, 그래. 알았어. 괜찮아, 괜찮아.');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '는 사과하는 ',
        daiwa.get_colored_name(),
        '을 품에 안고 머리를 쓰다듬었다.',
      ]);
      era.println();
      await daiwa.say_and_wait('하지만, 하지만……호, 혹시 아이가 생겼다면……');
      await you.say_and_wait('응, 마신 건 한 병뿐이지?');
      await daiwa.say_and_wait('네, 네에……');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '는 침대에서 내려와 빈 병의 라벨을 확인했다. 응, 역시 그렇다.',
      ]);
      era.println();
      if (era.get('status:9:弗隆K')) {
        await you.say_and_wait('자, 다이와. 여기, 잘 읽어 봐.');
        await daiwa.say_and_wait('여기요?');
        await you.say_and_wait(
          '제대로 적혀 있잖아? 이 약으로 인해 생긴, 남성 생식기와 매우 흡사한 것에는 생식 능력이 없다고.',
        );
        await daiwa.say_and_wait('……응? 엑? 그럼, 당신 뱃속에 있는 건 뭐예요?');
        await you.say_and_wait(
          '그게—— 아마 정장액 아닐까? 원래 정액은 투명한 정장과 정자가 섞여서 불투명하게 보이거든. 하얗게 탁한 부분이 없으니까 아마 정자가 없으니 투명해 보이고. 그러니까 다이와는 걱정하지 않아도 돼, 아이는 생기지 않을 거야…… 으왓?!',
        );
        era.println();
        await era.printAndWait([
          '그렇게 말하던 중, 다이와가 갑자기 ',
          you.get_colored_name(),
          '을(를) 밀쳐 넘어뜨렸다.',
          you.get_colored_name(),
          '의 냄새에 취한 것일지도 모른다. 그녀도 꽤 많이 들이마셨다.',
        ]);
        era.println();
        await daiwa.say_and_wait(
          '그렇군요……그러니까, 섹스를 해도 아이는 생기지 않는다는 뜻이죠?',
        );
        await you.say_and_wait('아…… 응, 맞아.');
      } else {
        await you.say_and_wait('응, 다이와, 괜찮아. 꼭 임신하는 건 아니니까.');
        await you.say_and_wait('게다가, 다이와 아이를 임신한다면, 대환영이야~');
        await daiwa.say_and_wait([callname, '……']);
        await you.say_and_wait('러니까, 이리 와?');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 누워서 양팔을 벌렸다.',
        ]);
        await era.printAndWait([
          daiwa.get_colored_name(),
          '의 얼굴이 다시 육식동물 같은 표정을 지었다.',
        ]);
        era.println();
        await daiwa.say_and_wait('……');
      }
      await daiwa.say_and_wait([
        '……',
        callname,
        ', 지금의 나에게 멈춰 달라고 빌어도 멈추지 않을 거예요?',
      ]);
      await you.say_and_wait(
        '……응, 괜찮아. 어쨌든 내가 제일 좋아하는 다이와니까.',
      );
      await daiwa.say_and_wait('～～～！');
      era.println();
      await era.printAndWait([
        '그날 ',
        you.get_colored_name(),
        '은(는) 자신이 몇 번이나 기절하고, 몇 번이나 눈을 떴는지 기억하지 못한다. 다만, 당시의 유일한 감상만은 기억하고 있다. 중학생의 성욕은 무섭다고.',
      ]);
    };
    f.title = '「컨디션 불량」 트레이너……와 정말 좋아하는 다이와';
    return f;
  })(),
};
