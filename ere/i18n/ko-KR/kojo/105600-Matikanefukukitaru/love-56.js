/**
 * @file マチカネフクキタル - 恋慕
 * @author ALEX
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  25: (() => {
    const title = '희미한 마음';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        '어느 휴일, ',
        kitaru.get_colored_name(),
        '는 최근 일어난 일들에 대해 생각하고 있었다.',
      ]);
      await kitaru.say_and_wait(
        ['으음, ', callname, '을(를) 생각하면 심장이 두근거리는 건 무슨 징조일까?'],
        true,
      );
      await kitaru.say_and_wait('음…… 분명 대길이라는 뜻이겠지!', true);
      await kitaru.say_and_wait(
        ['역시나! ', callname, '은(는) 점괘가 말한 대로, 내 운명의 사람이야!'],
        true,
      );
      await kitaru.say_and_wait('흐흥, 내 점괘는 틀리지 않으니까!', true);
      await kitaru.say_and_wait(
        '그렇다면, 앞으로도 계속 점괘를 따르면 나만의 행복을 찾을 수 있겠지?',
        true,
      );
      await kitaru.say_and_wait('정말 그런 걸까……?', true);
      await kitaru.say_and_wait(
        [
          '분명 ',
          callname,
          '이(가) 내리는 지시는 가끔 점괘 결과와 완전히 다를 때도 있는데, 어째서 나는……',
        ],
        true,
      );
      era.printButton('「마치카네 후쿠키타루?」', 1);
      await era.input();
      await kitaru.say_and_wait([
        '아! ',
        callname,
        ', 여기서 만날 줄은 몰랐어요!',
      ]);
      await kitaru.say_and_wait('에! 저 말인가요?');
      await kitaru.say_and_wait(
        '으음…… 펜듈럼 점을 쳐보니, 여기가 생각하기에 아주 좋은 장소라고 나왔거든요!',
      );
      await kitaru.say_and_wait([callname, '은(는) 뭘 하러 가는 길인가요?']);
      era.printButton('대답한다', 1);
      await era.input();
      await kitaru.say_and_wait('오오! 마침 잘됐네요, 같이 가요!');
      await kitaru.say_and_wait('어! 왜요?');
      await kitaru.say_and_wait('그……그건……');
      await era.printAndWait([
        '스스로도 왜 갑자기 그런 말을 했는지 모르는 모양이다. 당황한 ',
        kitaru.teen_sex_title,
        '는 무의식적으로 귀를 만지기 시작했다.',
      ]);
      era.printButton('「점괘 때문이야?」', 1);
      await era.input();
      await kitaru.say_and_wait('맞아요, 맞아요!');
      await era.printAndWait([
        you.get_colored_name(),
        '의 웃음 섞인 시선을 알아차린 듯, ',
        kitaru.get_colored_name(),
        '의 뺨이 발그레하게 물들었다.',
      ]);
      await kitaru.say_and_wait('어쨌든 같이 가면 운이 트인다고요!');
      await era.printAndWait([
        '그 후, ',
        kitaru.sex,
        '가 끈질기게 매달리는 바람에, 어쩔 수 없이 생필품을 사러 같이 가자는 요구를 들어주게 되었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  49: (() => {
    const title = '애욕';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.print_and_wait([
        '어느 날 밤, 침대에 누운 ',
        kitaru.get_colored_name(),
        '는 오늘 점술로 어떻게 동급생의 고민을 해결해 주었는지 기분 좋게 떠올리고 있었다.',
      ]);
      await kitaru.say_and_wait(
        '그러고 보니 요즘은 다들 연애에 관해 점을 보는 일이 많은 것 같아요.',
        true,
      );
      await kitaru.say_and_wait(
        '에헤헤, 저도 연애의 달인일지도 모르겠네요.',
        true,
      );
      await kitaru.say_and_wait('……연애라.', true);
      await kitaru.say_and_wait('제 연애운은 아직 본 적이 없네요……', true);
      await kitaru.say_and_wait(['……', you.get_colored_actual_name()], true);
      await kitaru.print_and_wait(
        '그 화제를 생각하기만 해도 담당 트레이너의 모습이 떠오른다.',
      );
      await kitaru.print_and_wait(
        '훈련할 때의 얼굴. 함께 점을 볼 때의 얼굴. 운세를 풀이해 주던 얼굴.',
      );
      await kitaru.print_and_wait(
        '평소에는 특별하게 느껴지지 않았는데, 지금 돌이켜 보니 세세한 부분 하나하나가 유난히 선명하다.',
      );
      await kitaru.print_and_wait(
        '땀을 닦으며 목덜미를 스친 손가락. 마사지할 때 발바닥에 닿은 따뜻한 손바닥. 아이언 클로를 하며 귀 밑동을 스친 자극까지.',
      );
      await kitaru.print_and_wait(
        '룸메이트는 이미 잠들었을 것이다. 희미한 숨소리도 들린다.',
      );
      await kitaru.print_and_wait(
        '그런데 자신만 뒤척이며 잠들지 못한다. 아랫배가 은근히 뜨겁다.',
      );
      await kitaru.print_and_wait(
        '이불을 걷자 옅게 땀이 난 두 다리가 끈적하게 모여 있고, 무릎 안쪽의 부드러운 살이 서로 비벼진다.',
      );
      await kitaru.say_and_wait('후우……');
      await kitaru.say_and_wait('역시 점을 봐야겠어요.');
      await kitaru.print_and_wait('머리맡의 타로를 꺼냈다.');
      await kitaru.say_and_wait('한 장만, 간단하게……');
      era.println();
      era.printButton('별 정위치 (관계 진전)', 1);
      era.printButton('세계 역위치 (관계 진전 중지)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await kitaru.say_and_wait('마음이 이끄는 대로 흐름을 타라는 건가요?');
        await kitaru.say_and_wait('에헤헤, 당연하죠!');
        await kitaru.say_and_wait('운명의 사람으로 정했으니까요!');
        await kitaru.say_and_wait('읏……');
        await kitaru.print_and_wait('열기가 더욱 달아오른다.');
        await kitaru.print_and_wait(
          '본래 정해져 있던 답을 점괘가 긍정하자, 방금까지 타로를 집던 오른손은 어느새 잠옷 안으로 들어가 가슴에 닿아 있었다.',
        );
        await kitaru.print_and_wait(
          '손끝이 가슴 옆을 쓰다듬고, 다른 손은 아랫배를 살며시 누른다. 중지와 검지를 모아 이미 젖은 속옷 안으로 넣는다.',
        );
        await kitaru.say_and_wait('앗!');
        await kitaru.print_and_wait(
          '처음에는 익숙하지 않아 짧고 둔한 통증이 왔다. 그러다 익숙해지면서 짜릿한 쾌감이 퍼졌다.',
        );
        await kitaru.print_and_wait(
          '잠든 룸메이트가 알아채지 못하도록 입술을 깨문다. 그래도 쾌감에 못 이겨 깊이 들어가는 손가락이 억누르지 못한 숨소리를 흘리게 한다.',
        );
        await kitaru.say_and_wait([you.get_colored_actual_name(), '……읏……']);
        await kitaru.print_and_wait([
          callname,
          '과(와) 악수했을 때의 조금 거친 검지를 떠올린다. 그 손가락이 안으로 들어오면 얼마나 가차 없이 다룰지 상상한다.',
        ]);
        await kitaru.print_and_wait([
          '긁고, 문지르고, 애태우며 마지막 경련에 이를 때까지. 트레이너에게 발정한 실격인',
          kitaru.uma_sex_title,
          '를 한껏 벌주듯이.',
        ]);
        await kitaru.say_and_wait([you.get_colored_actual_name(), '！']);
        await kitaru.say_and_wait('읏!!!');
        await kitaru.print_and_wait(
          '온몸의 떨림이 멈추지 않는다. 흰 속옷은 뿜어져 나온 애액으로 흠뻑 젖었다.',
        );
        await kitaru.say_and_wait('에헤헤……좋아해요……');
      } else {
        await kitaru.say_and_wait('하아……');
        await kitaru.say_and_wait('일단 멈추라는 건가요……');
        await kitaru.print_and_wait([
          '들끓는 몸을 견디며, ',
          kitaru.get_colored_name(),
          '는 이불을 머리끝까지 뒤집어썼다.',
        ]);
        await kitaru.print_and_wait([
          '그래도 다음 날 아침 흠뻑 젖은 속옷과 발정으로 선 유두는, ',
          kitaru.get_colored_name(),
          '의 꿈이 바랐던 만큼 평온하지 않았음을 말해 주었다.',
        ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  '74-1': (() => {
    const title = '뜨거운 사랑';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.print_and_wait([
        '평소의 훈련을 마치고, ',
        callname,
        '과(와) 함께 사무실로 돌아왔다.',
      ]);
      await kitaru.print_and_wait([
        callname,
        '에게 받은 물컵. 벌컥벌컥 마시고 싶었지만, ',
        callname,
        '이(가) 말려서 조금씩 목으로 넘긴다.',
      ]);
      await kitaru.print_and_wait([
        callname,
        '이(가) 수건을 들자 거기에 맞춰 머리를 내밀고 슬쩍 체육복 지퍼를 내려, 땀에 비치는 셔츠 아래의 큰 가슴을 ',
        callname,
        '에게 보여 주었다.',
      ]);
      await kitaru.print_and_wait([
        callname,
        '이(가) 어색하게 고개를 돌리자 일부러 팔을 붙잡고 다음 훈련 계획을 물었다.',
      ]);
      await kitaru.print_and_wait(
        '달콤한 공기가 사무실 안에 서서히 퍼져 간다.',
      );
      await kitaru.print_and_wait([
        '마지막에는 거리감 없는 행동이 지나쳐, ',
        callname,
        '의 아이언 클로를 당하는 것이 늘 있는 결말이다.',
      ]);
      await kitaru.print_and_wait('……');
      await kitaru.print_and_wait([
        '처음 ',
        callname,
        '과(와) 만났을 때 나는 어떤 기분이었을까.',
      ]);
      await kitaru.print_and_wait(
        '죽어 가는 사람이 유일하게 보이는 지푸라기에 매달리는 것처럼?',
      );
      await kitaru.print_and_wait('배의 잔해를 붙잡은 오디세우스?');
      await kitaru.print_and_wait('영지를 먹고 죽음을 피한 신농?');
      await kitaru.print_and_wait(
        '아니면 스사노오노미코토를 만난 아마테라스오미카미?',
      );
      era.printButton('「후쿠키타루, 서류 내고 올게. 조금 쉬고 있어……」', 1);
      await era.input();
      await kitaru.print_and_wait([
        '달콤한 분위기에서 떨어져 나오자, ',
        kitaru.get_colored_name(),
        '에게 남은 것은 뻥 뚫린 공허함뿐이었다.',
      ]);
      await kitaru.print_and_wait([
        callname,
        '의 재킷이 걸린 의자에 털썩 앉아 아무도 없는 사무실을 멍하니 바라본다.',
      ]);
      await kitaru.print_and_wait([
        '추, 주사위, 호박. 여러 핑계로 ',
        callname,
        '에게 건넨 점술 도구에는 당연히 타로도 있다.',
      ]);
      era.println();
      era.printButton('연인·정방향(관계 진전)', 1);
      era.printButton('달·정방향(아직 진전하지 않음)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await kitaru.print_and_wait('예상대로다.');
        await kitaru.say_and_wait('좋아해……');
        await kitaru.say_and_wait(['좋아해요, ', callname, '……']);
        await kitaru.print_and_wait([
          '몇 번을 되풀이하고도 여전히 ',
          you.get_colored_actual_name(),
          '의 이름을 중얼거린다. 참배의 길에 이',
          you.phy_sex_title,
          '이 들어섰다는 사실을 자신에게 되새기듯이.',
        ]);
        await kitaru.print_and_wait(
          '좋아하는 사람의 냄새에 감싸이자 훈련을 마치고 식어야 할 몸이 오히려 뜨거워진다.',
        );
        await kitaru.say_and_wait('하아……후후……');
        await kitaru.print_and_wait([
          '의자 등받이에 걸린 재킷의 소매를 코에 대고, 땀인지 다른 것인지로 다시 젖은 속옷 안에 한 손을 넣는다.',
        ]);
        await kitaru.say_and_wait([you.get_colored_actual_name(), '……']);
        await kitaru.print_and_wait([
          callname,
          '의 이름을 부르며 손가락으로 미끄러운 구멍 안을 휘젓는다.',
        ]);
        await kitaru.say_and_wait([
          you.get_colored_actual_name(),
          '……',
          you.get_colored_actual_name(),
          '～❤️',
        ]);
        await kitaru.print_and_wait([
          you.get_colored_actual_name(),
          '의 냄새가 밴 재킷을 입에 물고 짧게 숨을 내쉬자 입가에서 침이 떨어진다.',
        ]);
        await kitaru.print_and_wait([
          '부족하다는 듯 손가락의 움직임이 거세진다. 어느 순간 몽롱한 주황빛 눈동자가 살짝 커지며 몸을 젖혔다.',
        ]);
        await kitaru.say_and_wait('읏❤️……히이잇❤️!!!');
        await kitaru.print_and_wait(
          '물을 흡수하도록 만든 것이 아닌 체육복 바지는 넘쳐흐르는 애액을 막지 못하고 사무실 의자에 젖은 흔적을 남겼다.',
        );
        await kitaru.print_and_wait([
          kitaru.get_colored_name(),
          '이라는 음란한',
          kitaru.uma_sex_title,
          '의 부끄러운 냄새가 사무실 가득 퍼진다.',
        ]);
        await kitaru.print_and_wait([
          '어떡하지.',
          callname,
          '은(는) 분명 알아채시겠죠.',
        ]);
        era.drawLine();
        era.printButton('문을 연다', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 보니, ',
          kitaru.get_colored_name(),
          '는 안절부절못하며 사과했다.',
        ]);
        await kitaru.say_and_wait(['아아앗! ', callname, '! 정말 죄송해요!']);
        await kitaru.say_and_wait('커피를 타려고 했을 뿐인데요!');
        await era.printAndWait([
          kitaru.get_colored_name(),
          '의 하반신은 거의 커피투성이였다. 마찬가지로 젖은 의자와 재킷도, ',
          kitaru.uma_sex_title,
          '의 체온에 데워져 커피 향을 풍긴다.',
        ]);
        era.printButton('「괜찮아?」', 1);
        await era.input();
        await kitaru.say_and_wait('……괘……괜찮아요.');
        await era.printAndWait([
          '그때 커피가 이미 식어 있어서 다행이었다.',
          kitaru.get_colored_name(),
          '가 화상을 입었다면 큰일이었을 것이다.',
        ]);
      } else {
        await kitaru.say_and_wait('하아……');
        await kitaru.say_and_wait(
          '점에서 달이 나오면 불안과 망설임, 두려움을 나타낼 때가 많아요. 미래에 대한 방황이나 모르는 상황에 대한 불안 같은 것들이죠.',
        );
        await kitaru.print_and_wait(
          '두려움을 품고 자신감도 없이 불안하고 감정적이다.',
        );
        await kitaru.print_and_wait([
          '이런 나에게, ',
          callname,
          '의 사랑을 받을 자격이 있을까요?',
        ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  '74-2': (() => {
    const title = '고백';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait('똑똑, 똑똑.');
      await kitaru.say_and_wait([callname, '！']);
      await era.printAndWait([
        '평소처럼, ',
        kitaru.get_colored_name(),
        '이라는 소녀가 다시 ',
        you.get_colored_name(),
        '의 집 현관을 두드렸다.',
      ]);
      await era.printAndWait([
        '그렇다. 사무실도, 트레센 기숙사의 문도 아니다.',
      ]);
      await era.printAndWait([
        '처음에는 개운 도구를 맡기는 김에, ',
        you.get_colored_name(),
        '의 주소를 알게 되었을 뿐이었다.',
      ]);
      await era.printAndWait([
        '그러다 개운 도구뿐 아니라 훈련 계획 상담, 놀러 가자는 권유, 「오늘은 대길이에요」 같은 애매한 이유로도, ',
        you.get_colored_name(),
        '을(를) 찾아오게 되었다.',
      ]);
      await era.printAndWait(
        '슬리퍼 한 켤레, 컵 하나, 젓가락 한 벌을 더 마련했다.',
      );
      await era.printAndWait([
        you.get_colored_actual_name(),
        '이라는 트레이너의 생활은 이미 ',
        kitaru.get_colored_name(),
        '의 흔적으로 가득하다.',
      ]);
      await era.printAndWait('똑똑, 똑똑.');
      await kitaru.say_and_wait([callname, '! 계세요?']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        '는 더는 기다리기 힘든 모양이다.',
      ]);
      era.printButton('문을 연다', 1);
      await era.input();
      await era.printAndWait([
        '가령, ',
        you.get_colored_name(),
        '과(와) 혈연관계가 없는 이성을 떠올려 보자.',
      ]);
      await era.printAndWait([
        '매일 붙어 다니고, ',
        you.get_colored_name(),
        '의 집에도 자유롭게 드나든다. 평일에는 학원 기숙사에 살면서 외출할 때에는 유난히 격식을 차려 밖에서 만난다. 그 둘은 어떤 관계일까.',
      ]);
      await era.printAndWait([you.get_colored_name(), '은(는) 문을 열었다.']);
      await kitaru.say_and_wait([callname, '！']);
      await era.printAndWait([
        '현관에는 승부복을 입은 ',
        kitaru.get_colored_name(),
        '가 서 있었다.',
      ]);
      await era.printAndWait(
        '파란색과 흰색의 세일러복이 균형 잡힌 몸매를 돋보이게 한다.',
      );
      await era.printAndWait(
        '달려온 탓인지 드러난 두 어깨에 잔땀이 맺혀 있다.',
      );
      await era.printAndWait(
        '그 아래에는 패치만 붙인 유혹적인 가슴이 흰 천 위로 형태를 뚜렷하게 드러내며 숨결에 맞춰 오르내린다.',
      );
      await era.printAndWait([
        '트레이너인 ',
        you.get_colored_name(),
        '은(는) 알고 있다.',
        kitaru.uma_sex_title,
        '가 이 옷을 입는 건 아주 중요한 자리뿐이다.',
      ]);
      await kitaru.say_and_wait('저기……');
      await kitaru.say_and_wait('안에 들여보내 주시겠어요?');
      await era.printAndWait([
        '그녀는 고개를 들어 ',
        you.get_colored_name(),
        '을(를) 바라봤다. 주황빛 눈동자에 촉촉한 안개가 어렸다.',
      ]);
      await era.printAndWait(
        '식사할 때도 일부러 턱을 들고 삼키는 동작으로, 당겨져 팽팽해진 세일러복 아래의 묵직한 가슴을 더욱 돋보이게 했다.',
      );
      await era.printAndWait(
        '식후에 시간을 보내며 소파에서 흰 스타킹을 신은 다리를 포개 비비자 허리의 에마가 부딪쳐 소리를 냈다.',
      );
      await era.printAndWait([
        '벌써 한밤중인데도, ',
        kitaru.get_colored_name(),
        '는 돌아갈 기색을 보이지 않았고 방에는 어색한 침묵이 내려앉았다.',
      ]);
      await kitaru.say_and_wait([you.get_colored_actual_name(), '……']);
      await era.printAndWait([
        you.get_colored_name(),
        '의 이름을 부르며, ',
        kitaru.get_colored_name(),
        '는 곁에 와 앉았다.',
      ]);
      await kitaru.say_and_wait([
        '저기, ',
        callname,
        '은(는) 아시겠죠……좋아해요……',
      ]);
      await kitaru.say_and_wait(
        '이렇게 폐를 끼치는데도 운세를 따라 달리는 저와 함께해 주시고……',
      );
      await kitaru.say_and_wait('따뜻해요……많은 행운을 주셨어요.');
      await kitaru.say_and_wait(
        '그러니까 괜찮으시다면 이번에는 저도 보답하게 해 주세요……',
      );
      await kitaru.say_and_wait('후쿠를 당신만의 개운 도구로 삼아 주세요.');
      await era.printAndWait([
        '곁에 있는 ',
        kitaru.get_colored_name(),
        '가 ',
        you.get_colored_name(),
        '의 손을 잡는다.',
        kitaru.uma_sex_title,
        '의 조금 높은 체온이 손바닥으로 전해진다.',
      ]);
      era.printButton('받아들인다(관계 진전)', 1);
      era.printButton('거절한다(아직 진전하지 않음)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await kitaru.say_and_wait('쪽……츄릅……쯥……질척……');
        await era.printAndWait([
          kitaru.get_colored_name(),
          '의 턱을 들게 하자 혀와 혀가 떨어지기 어렵게 얽히고, 침의 은빛 실이 허공에서 끊어졌다.',
        ]);
        await kitaru.say_and_wait('읏……으……');
        await era.printAndWait(
          '조금 떨어졌다가 다시 정욕을 부추기는 깊은 입맞춤. 담당의 향을 마음껏 들이마신다.',
        );
        await era.printAndWait([
          '깍지를 끼고, ',
          you.get_colored_name(),
          '은(는) ',
          kitaru.get_colored_name(),
          '를 소파에 눕혔다.',
        ]);
      } else {
        await era.printAndWait([
          kitaru.get_colored_name(),
          '를 트레센 학원까지 데려다주었다……',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  89: (() => {
    const title = '좋은 인연';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 들은 적이 있다. 귀가 큰',
        kitaru.uma_sex_title,
        '는 성욕이 강하다고.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 들은 적도 있다. 장거리를 달리는',
        kitaru.uma_sex_title,
        '는 성욕이 강하다고.',
      ]);
      await era.printAndWait('전에는 의구심이 들었을지도 모르지만……');
      await era.printAndWait([
        '지금의 ',
        kitaru.get_colored_name(),
        '는 의심의 여지 없이 위 가설들의 증거가 되어 있었다.',
      ]);
      await era.printAndWait(
        '몸에는 이미 정액 자국이 묻어 있고, 사용한 콘돔이 장식처럼 매달려 있으며 구멍에서는 짙은 정액이 아직도 멈추지 않고 넘쳐흐른다.',
      );
      await era.printAndWait([
        '그런데도 이 요염한 밤색 머리의 주인공은 끊어진 말로 힘껏 ',
        you.get_colored_name(),
        '에게 사랑을 구하고 있다.',
      ]);
      await kitaru.say_and_wait('으……');
      await kitaru.say_and_wait('❤️대길❤️');
      era.drawLine({ content: '잠시 후' });
      await era.printAndWait(
        '하는 동안에는 뒷정리가 얼마나 힘들지 생각하지 않았다. 체액으로 끈적해진 교복과 트레이너의 옷이 덜컹거리는 세탁기에 던져진다.',
      );
      await era.printAndWait([
        kitaru.get_colored_name(),
        '가 갈아입을 옷을 가져왔었겠지……',
      ]);
      await kitaru.say_and_wait([callname, '！']);
      await kitaru.say_and_wait('기분은……어떠셨어요?');
      await era.printAndWait([
        kitaru.get_colored_name(),
        '는 맨발로 바닥을 밟으며, ',
        you.get_colored_name(),
        '의 셔츠를 입고 있다.',
      ]);
      await era.printAndWait([
        '수증기를 두른 채, ',
        you.get_colored_name(),
        '앞에서 한 바퀴 돌았다.',
      ]);
      await era.printAndWait(
        '크기가 맞지 않는다. 소매를 두세 번 접어야 겨우 손이 나오고 옷자락은 허벅지까지 닿는다. 평소 옷 아래 숨겨졌던 아름다운 가슴골은 말할 것도 없다.',
      );
      await era.printAndWait(
        '그렇기에 꼬리가 조금만 움직여도 그 아래의 소중한 곳이 보이고 만다.',
      );
      era.printButton('「감기 들지 않게 조심해.」', 1);
      era.printButton('「잘 어울려……」', 2);
      await era.input();
      await era.printAndWait([
        '그 말을 들은 ',
        kitaru.get_colored_name(),
        '는 꼬리를 더욱 세차게 흔든다.',
        kitaru.uma_sex_title,
        '용이 아닌 옷자락이 결국 들려 버렸다.',
      ]);
      await era.printAndWait('방금의 격렬한 정사 흔적이 뚜렷하게 남아 있다.');
      await era.printAndWait('언제부터 이런 일에 익숙해졌을까.');
      await era.printAndWait(
        '성관계는 점점 격해졌고, 방금 마지막에는 후쿠키타루의 기분도 아랑곳하지 않고 자위 기구처럼 밀어붙이기만 했다.',
      );
      era.printButton('「아까 느낌은 어땠어?」', 1);
      era.printButton('「다음에는 부드럽게 하는 게 좋을까?」', 2);
      await era.input();
      await kitaru.say_and_wait([
        '어……왜 ',
        callname,
        '이(가) 그런 말씀을 하세요?',
      ]);
      await kitaru.say_and_wait('음, 싫지는 않아요……');
      await kitaru.say_and_wait('오히려 좋아요……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        '에게는 이렇게 거칠고 강제성이 섞여 있으며 어느 정도 굴욕까지 수반하는 행위가 더 강한 안도감과 충족감을 주는지도 모른다.',
      ]);
      await kitaru.say_and_wait([
        '그러니까……',
        callname,
        ', 앞으로도 후쿠를 마음껏 써 주세요.',
      ]);
      era.println();
      if (era.get('talent:56:淫身') !== 2) {
        era.print([
          kitaru.get_colored_name(),
          '는 ',
          {
            color: buff_colors[2],
            content: '[음란한 몸]',
          },
          '이(가) 되었다!',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  99: (() => {
    const title = '의존';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.print_and_wait([
        '오늘은 거의 온종일, ',
        callname,
        '과(와) 신사에서 바쁘게 지냈다.',
      ]);
      await kitaru.print_and_wait([
        '평소에는 무엇이든 해내는 ',
        callname,
        '이(가) 처음 하는 일이라 서툴러하던 모습을 떠올리니 저도 모르게 웃음이 났다.',
      ]);
      await kitaru.print_and_wait([
        '그 웃음소리는 당연하다는 듯 ',
        callname,
        '의 시선을 끌었다.',
      ]);
      await kitaru.say_and_wait('응……');
      era.drawLine({ content: '몇 분 후' });
      era.printButton('손을 뻗는다', 1);
      await era.input();
      await kitaru.print_and_wait([
        callname,
        '의 손이 허리와 엉덩이를 훑고 지나가 내 오금까지 닿았다.',
      ]);
      await kitaru.say_and_wait('하아……');
      await kitaru.print_and_wait([
        '다리에 힘이 풀려, 나는 ',
        callname,
        '의 신호에 따라 엉덩이를 치켜든 채 본전 안의 벽에 엎드렸다.',
      ]);
      era.printButton('옷을 푼다', 1);
      await era.input();
      await kitaru.print_and_wait(
        '무녀임을 드러내는 붉은 하카마가 바닥에 흘러내리는 것을 그저 바라본다. 엉덩이에 뜨거운 것이 닿는다.',
      );
      await kitaru.print_and_wait(
        '다리를 모으자 미지근한 액체가 허벅지를 타고 흐른다. 아랫배의 욱신거림이 점점 강해진다.',
      );
      era.printButton('삽입한다', 1);
      await era.input();
      await kitaru.print_and_wait(
        '두 사람의 궁합을 점치는 육봉 점술이 시작되었다.',
      );
      era.drawLine();
      await kitaru.say_and_wait('하아……');
      await era.printAndWait([
        '오늘의 ',
        kitaru.get_colored_name(),
        '는 평소와 달리 먼저 ',
        you.get_colored_name(),
        '에게 요구해 왔다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 넣기만 해도 담당',
        kitaru.uma_sex_title,
        '의 민감한 몸은 절정에 이를 듯했다. 초점이 흐린 눈동자로 무엇을 생각하는지는 알 수 없다.',
      ]);
      era.println();
      await kitaru.say_and_wait(
        '점술에는 두 가지가 있어요. 하나는 판 안으로 들어가는 것. 다른 하나는 판 밖에 있는 것이죠.',
        true,
      );
      era.println();
      await kitaru.say_and_wait('굉장해요……머리가 멍해져요……');
      era.println();
      await kitaru.say_and_wait(
        '점술은 운명을 엿보고 하늘의 섭리에 손대는 놀이예요. 점치는 사람도 점을 받는 사람도 판 안에 들어가야 하죠.',
        true,
      );
      era.println();
      await era.printAndWait(
        '오렌지색 머리의 소녀는 절제 없이 교성을 내질렀다. 평소의 달콤하고 부드러운 목소리는 지금 이 순간 지극히 음란하게 울려 퍼졌다.',
      );
      await kitaru.say_and_wait('이아앗…… 아앙……');
      era.println();
      await kitaru.say_and_wait(
        [
          '스스로 훌륭한 점술가라고 생각하진 않아. 처음에 ',
          callname,
          '과(와) 만난 것도 순전히 운이었을지도 모르지.',
        ],
        true,
      );
      era.printButton('엉덩이를 때린다', 1);
      await era.input();
      await era.printAndWait(
        '한쪽 손을 떼어 후쿠키타루의 엉덩이를 세게 내리치자, 약간의 피학 성향이 있는 무녀는 더욱 유혹적인 신음을 내뱉었다.',
      );
      await kitaru.say_and_wait('……으응~');
      era.println();
      await kitaru.say_and_wait(
        '하지만 그때 점치는 자이자 점쳐지는 자였던 나는, 의심할 여지 없이 판에 들어와 있었어.',
        true,
      );
      era.printButton('가슴을 주무른다', 1);
      await era.input();
      era.println();
      await kitaru.say_and_wait(
        [
          '그러니까, 맞아요, ',
          you.get_colored_actual_name(),
          '이(가) 제 운명의 사람이에요!',
        ],
        true,
      );
      era.println();
      await era.printAndWait(
        '두 손이 후쿠키타루의 가슴을 감싸 쥐고 마음껏 유린했다.',
      );
      await kitaru.say_and_wait('아…… 아아……');
      era.printButton('꼬리를 잡아당긴다', 1);
      await era.input();
      await era.printAndWait(
        '부드러운 밤색 꼬리는 이미 피스톤 운동으로 튀어 나온 체액이 묻어 있었다.',
      );
      await era.printAndWait([
        '꼬리 뿌리에서 전해지는 촉감과 가슴이 비벼지는 쾌감에, ',
        kitaru.get_colored_name(),
        '는 순간 오늘 중 가장 높은 신음을 내질렀다.',
      ]);
      await era.printAndWait(
        '본전의 신체로 모셔진 거울은 무녀의 지금 이 행복한 표정을 선명하게 비추고 있었다.',
      );
      await kitaru.say_and_wait('이게…… 나?', true);
      await kitaru.print_and_wait(
        '욕망으로 붉게 물든 얼굴, 끊임없이 신음을 흘려보내는 입술, 몽롱하게 반쯤 뜨여 여우처럼 매혹적인 눈동자.',
      );
      await kitaru.print_and_wait([
        you.phy_sex_title,
        '에게 벽으로 밀린 채, 반쯤 벗겨진 무녀복 아래의 분홍빛 몸이 왕복 운동에 맞춰 오르내린다.',
      ]);
      await kitaru.say_and_wait(
        '으……시라오키님 앞에서 제가 이렇게 되다니……',
        true,
      );
      await kitaru.say_and_wait(
        '운명의 사람……운명의 사람은 책임지셔야 해요!',
        true,
      );
      await kitaru.say_and_wait('으이이이이이익!!!!!');
      await era.printAndWait('뽁!');
      await era.printAndWait([
        '걸쭉하고 끈적한 정액이, 육봉이 빠져나가는 순간 무녀의 입구에서 쏟아져 나와 본전 안에 음란한 냄새를 채웠다.',
      ]);
      era.drawLine({ content: '잠시 후' });
      await kitaru.say_and_wait('정말 격렬했네요……');
      await era.printAndWait([
        '차분한 척해도 무녀복에 말라붙은 액체 자국이 방금의 음란한',
        kitaru.uma_sex_title,
        '가 본인임을 말해 준다.',
      ]);
      era.printButton('「시라오키 님이 노하시지 않을까?」', 1);
      await era.input();
      await kitaru.say_and_wait('어……');
      await kitaru.say_and_wait(
        '저기, 시라오키님도 제가 행복해진 걸 보시면 기뻐하실 거라고 생각해요.',
      );
      await kitaru.say_and_wait('……아마도요.');
      await kitaru.say_and_wait('으……머리가 달아올라서 그만……');
      await kitaru.say_and_wait([
        '하지만, ',
        you.get_colored_actual_name(),
        '에게만 이러는 거니까요!',
      ]);
      await kitaru.say_and_wait([
        '왜냐하면, ',
        you.get_colored_actual_name(),
        '은(는) 제 운명의 사람이니까요!',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
