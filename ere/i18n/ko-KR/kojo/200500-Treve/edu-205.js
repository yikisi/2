/**
 * @file トレヴ - 育成
 * @author 梦露
 * @author 黑奴队长（改编）
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  race_start: (() => {
    const title = '레이스 전';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, you) => {
      const buffer = [
        () =>
          treve.say_and_wait(
            '오늘의 승리는 제가 가져갈 거예요. 프랑스의 모두를 위해서.',
          ),
        () => treve.say_and_wait('영광은 이미 제 손안에 있어요.'),
        () => treve.say_and_wait('가슴 뛰는 승부를 펼쳐 봐요!'),
      ];
      if (era.get('love:205') >= 50) {
        buffer.push(() =>
          treve.say_and_wait(
            `오늘의 승리는 제가 가져갈 거예요. ${you.actual_name}을(를) 위해서!`,
          ),
        );
      }
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),
  race_win: (() => {
    const title = '레이스 승리';
    /** @param {CharaTalk} treve トレヴ */
    const f = async (treve) => {
      const buffer = [
        () => treve.say_and_wait('골인! 이겼어요~'),
        () => treve.say_and_wait('메르시 보쿠! 모두 고마워요!'),
        () => treve.say_and_wait('모두 축하해 주셔서 고마워요!'),
        () =>
          treve.say_and_wait(
            '이것도 제가 이 영광을 얻을 수 있었던 이유예요. 모두에게 최고의 선물을 드릴게요.',
          ),
      ];
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),
  ws_47_24: (() => {
    const title = '푸른 하늘 위를 날다';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} prix_prb ブルーインコ賞（色付き名）
     * @param {PrintedSpan} prix_dia ディアヌ賞（色付き名）
     */
    const f = async (treve, you, prix_prb, prix_dia) => {
      await era.printAndWait([
        treve.name,
        '는 해가 바뀌고 봄이 지나간 오월, 메이크 데뷔와 같은 1600미터 거리의 ',
        prix_prb,
        '에서 압승을 거두었다.',
      ]);
      await era.printAndWait([
        '본인이 강하게 희망하기도 해서, ',
        treve.sex,
        '는 거리가 500미터가량 더 긴 ',
        prix_dia,
        '에도 출전했다.',
      ]);
      await era.printAndWait(
        `${you.name}을(를) 비롯한 많은 관객의 예상을 뒤엎고, 삼관급 레이스에서 압도적인 승리를 거두었다.`,
      );
      await era.printAndWait(`${treve.name}는 착실하게 실력을 키워 나갔다.`);
      await era.printAndWait(
        `그 과정에서 ${you.name}이(가) 가르칠 수 있는 것은 점점 줄어들었다.`,
      );
      await era.printAndWait(
        `하나를 들으면 열을 아는 ${treve.name}는 가르쳐 주지 않아도 자연스레 정답에 도달하곤 했다.`,
      );
      await era.printAndWait(
        '노련한 트레이너조차 알아차리지 못하는 점을 스스로 고쳐 버렸다.',
      );
      await era.printAndWait(
        `다른 트레이너들에게 방임주의라는 비난을 받기도 했지만, ${you.name}은(는) ${treve.sex}에게는 이 방식이 옳다고 생각했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_33: (() => {
    const title = '가난하면 타향으로';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, you) => {
      await era.printAndWait(
        `여름도 끝나 갈 무렵, 해변 합숙에서 돌아온 ${you.name}은(는) 다시 G1 출전 등록서를 작성하고 있었다.`,
      );
      await era.printAndWait(
        `프랑스 오크스를 제패한 지 얼마 지나지도 않은 것 같은데, 어느새 또 G1이었다.`,
      );
      await era.printAndWait(
        `다음에 나갈 레이스는 ${treve.sex}가 그토록 기다리던 개선문상.`,
      );
      await era.printAndWait(
        `지금까지 보여 준 강함만 보면 ${treve.name}가 그 영광을 차지해도 이상하지 않았다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 출전 등록서에 서명한 뒤, 트레이너실 소파에 드러누운 ${treve.name}에게 건넸다.`,
      );
      era.printButton(`「출전 등록서야. 서명해.」`, 1);
      await era.input();
      await treve.say_and_wait(`네.`);
      await era.printAndWait(
        `언제부터인지 ${treve.sex}는 이곳을 자신의 개인실처럼 여기며 트레이너실에 눌러앉아 있었다.`,
      );
      await era.printAndWait(`계약을 맺었으니 불평할 수도 없었다.`);
      await era.printAndWait(
        `그보다는 ${you.name}은(는) ${treve.sex}의 흐트러진 생활 습관을 어떻게든 고쳤으면 했다.`,
      );
      await era.printAndWait(
        `${treve.name}는 소파에서 굴러 내려와 일어섰다. 건네받은 볼펜을 톡톡 두드리며 ${you.name}을(를) 힐끗 보았다.`,
      );
      await treve.say_and_wait(`그러고 보니 이번 일요일에 시간 있으세요?`);
      era.printButton(`「낮에는 비어 있어.」（연모+1）`, 1);
      era.printButton(`「추가 연습이야?」（호감+5）`, 2);
      const ret = await era.input();
      await era.printAndWait(`${treve.name}는 서명하며 생각에 잠겼다.`);
      await treve.say_and_wait(
        `스승님이 만나고 싶으시대요. ${treve.sex}는 여름 합숙이 끝난 뒤에 와도 괜찮다고 하셨어요. 슬슬 한 번 찾아뵈러 가요.`,
      );
      era.printButton(`「스승님?」`, 1);
      await era.input();
      await treve.say_and_wait(`네, 저한테 달리는 법을 가르쳐 주신 분이에요.`);
      await era.printAndWait(`${treve.sex}의 달리기 실력을 길러 준 사람.`);
      await era.printAndWait(
        `완성도 높은 ${treve.name}를 다른 각도에서 바라보는 사람을 만난다면, ${treve.sex}를 더 잘 알 수 있는 좋은 기회가 될 것이다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 출전 등록서를 넣은 봉투를 풀로 붙여 봉하면서 ${treve.sex}의 초대를 받아들였다.`,
      );
      await era.printAndWait(
        `그렇다면 선물도 필요하다. ${you.name}은(는) 찻잎 통이 늘어선 선반으로 눈을 돌렸다.`,
      );
      await era.printAndWait(
        `가을 수확철은 아직 멀었다. 가을 분위기를 낼 만한 찻잎은 어디에도 없었다.`,
      );
      await era.printAndWait(`그렇다면 수확 기간이 긴 아삼이 좋겠다.`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_33: (() => {
    const title = '먼 곳을 향해';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, you, callname) => {
      await era.printAndWait(
        `콧노래를 흥얼거리며, 가을 햇살이 옅은 온기를 남기는 날 북적이는 찻잎 가게를 찾았다.`,
      );
      await era.printAndWait(
        `상대는 ${treve.name}의 스승이다. 빈손으로 찾아갈 수는 없다.`,
      );
      await era.printAndWait(
        `바구니에는 자신이 마시려고 사려는 찻잎 통이 담겨 있었다.`,
      );
      await era.printAndWait(
        `시선을 조금 올리니 품이 넉넉한 코트를 입은 ${treve.name}가 물건을 찬찬히 살펴보고 있었다.`,
      );
      await era.printAndWait(
        `몇 가지 차의 향을 맡아 보는 ${treve.sex}에게 ${you.name}은(는) 조금 다가갔다.`,
      );
      era.printButton(
        `「……트레이너실에 꽃차가 얼마 안 남았어. 보충 좀 부탁해.」`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `${treve.name}는 귀를 세우고 기쁜 듯 꼬리를 흔들며 차를 고르기 시작했다.`,
      );
      await era.printAndWait(
        `자극이 덜한 차가 좋겠다고 생각하며 입구에 있던 통을 바구니에 넣었더니, 이미 안에는 레몬 향 차가 들어 있었다.`,
      );
      await era.printAndWait(
        `${treve.name}는 특히 마음에 든 모양인지 생글생글 웃으며 ${you.name}을(를) 바라보았다.`,
      );
      era.printButton(`「레몬이야?」`, 1);
      await era.input();
      await era.printAndWait(
        `불만을 드러내려던 건 아니었지만, ${treve.name}는 갑자기 볼을 부풀리며 항의했다.`,
      );
      await treve.say_and_wait(`${callname}, 뭐가 불만이세요?`);
      era.printButton(`「불만 없어…… 전에도 샀던 거야. 좋아하는 맛이지.」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}이(가) 찻잎 통 세 개가 담긴 바구니를 계산대에 놓자, 안면 있는 주인이 놀란 표정을 지었다.`,
      );
      await era.printAndWait(
        `그는 계산대를 손가락으로 두드리며 눈썹을 치켜올렸다.`,
      );
      await you.say_as_passer_by_and_wait(
        '찻잎 가게 주인',
        `오랜만이군. 그 ${treve.child_sex_title}가 새 담당인가?`,
      );
      await era.printAndWait(`주인은 ${you.name}의 어깨 너머를 바라보았다.`);
      await era.printAndWait(
        `아직도 홍차를 살펴보던 ${treve.name}는 여전히 무패를 지키고 있었고 오크스에서도 우승했다. 그에 따라 팬도 늘었다.`,
      );
      await era.printAndWait(
        `하지만 대중의 시선을 한몸에 받는 인기 선수냐고 하면, 그 정도는 아니었다.`,
      );
      await era.printAndWait(`알 만한 사람은 아는 정도였다.`);
      await era.printAndWait(
        `홍차를 포장하던 주인이 무언가 알아차린 듯 고개를 들었다.`,
      );
      era.printButton(`「왜 그래?」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        '찻잎 가게 주인',
        `${treve.sex}는 제법 인기 있잖아?`,
      );
      await era.printAndWait(
        `${you.name}이(가) 돌아보니 젊은 여성 두 명이 ${treve.name}와 악수하고 있었다.`,
      );
      await era.printAndWait(
        `두 사람 모두 ${
          treve.sex
        }의 팬인 듯했다. 밝게 응대해 주는 동경의 ${treve.uma_sex_title}에게 푹 빠져 있었다.`,
      );
      await era.printAndWait(
        `G1에서 우승하기 전부터 느꼈지만, ${treve.name}에게는 독특한 매력이 있었다.`,
      );
      await era.printAndWait(
        `맑고 귀여운 분위기를 풍기는 ${treve.sex}에게 끌리는 사람은 트레센 안에서도 적지 않았다.`,
      );
      await era.printAndWait(
        `팬이 아직 적던 시절에도 열성적으로 ${treve.sex}를 응원하는 사람들은 있었다.`,
      );
      await era.printAndWait(
        `그런 생각을 하는 사이 종이봉투 두 개가 계산대에 놓였다.`,
      );
      await era.printAndWait(
        `지갑에서 지폐 두세 장을 꺼내 건넬 무렵, ${treve.name}는 ${you.name}의 곁으로 돌아왔다.`,
      );
      await you.say_as_passer_by_and_wait(
        '찻잎 가게 주인',
        '여기 거스름돈일세. 앞으로도 잘 부탁하네.',
      );
      await era.printAndWait(
        `${you.name}은(는) 마실 찻잎이 든 봉투를 ${treve.sex}에게 건네고 가게를 나섰다.`,
      );
      await era.printAndWait(
        `일정한 간격으로 늘어선 가로수는 조금씩 잎을 떨구고 있었지만, 아직 황금빛 가을 풍경을 즐길 수 있었다.`,
      );
      await era.printAndWait(
        `큰길을 걷는데 곁의 ${treve.teen_sex_title}가 뒤를 돌아보았다.`,
      );
      await era.printAndWait(`그 너머로 아까 그 여성 두 명의 뒷모습이 보였다.`);
      era.printButton(`「아까 그 팬들이야?」`, 1);
      await era.input();
      await treve.say_and_wait(
        `네…… ${treve.couple_title}이 계속 제 레이스를 봐 주고 있었대요.`,
      );
      await treve.say_and_wait(`기뻐요.`);
      await era.printAndWait(`${treve.name}는 수줍게 말했다.`);
      await era.printAndWait(
        `그러면서도 ${treve.sex}는 진지한 눈빛으로 자신의 달리기를 기대해 주는 두 팬에게 감탄하고 있었다.`,
      );
      await treve.say_and_wait(
        `여기에 오기 전에도 많은 사람에게 도움받았어요. 스승님도 그중 한 분이고요. 가족과 친구를 위해 노력하고 싶은 마음은 지금도 변하지 않았어요.`,
      );
      await treve.say_and_wait(
        `제 달리기를 기대해 주는 사람이 늘어난다고 생각하면 더 달리고 싶어져요. 더 이기고 싶어져요.`,
      );
      await era.printAndWait(
        `많은 ${treve.uma_sex_title}는 사람들의 시선을 받는 것을 부담스러워한다.`,
      );
      await era.printAndWait(
        `${
          you.name
        }의 담당 중에도 G1처럼 눈에 띄는 무대에서 실력을 발휘하지 못해 고민하는 ${treve.uma_sex_title}가 있었다.`,
      );
      await era.printAndWait(
        `하지만 ${treve.name}는 활약할수록 커져 가는 기대에 흔들리지 않았다.`,
      );
      await era.printAndWait(`그 모든 것을 힘으로 바꾸어 꿈을 향해 나아갔다.`);
      await era.printAndWait(
        `그리고 ${treve.sex}의 현재 목표는 샹젤리제 거리 끝의 거대한 건축물이 상징하는 그 레이스였다.`,
      );
      await era.printAndWait(`나폴레옹이 세운 개선문. 높이 솟은 승리의 상징.`);
      await era.printAndWait(
        `${treve.sex}는 반드시 그 너머에 나타나, 그 이름을 딴 세계 최고의 무대에서 빛날 것이다.`,
      );
      era.printButton(`「……넌 반드시 이길 거야.」（호감+5）`, 1);
      await era.input();
      await era.printAndWait(`${treve.name}가 문득 돌아보았다.`);
      await era.printAndWait(
        `평소처럼 천진한 미소를 활짝 짓는 대신, ${treve.sex}는 부드럽게——하지만 무언가 전하려는 듯, 잔잔한 바다 같은 미소를 지으며 작게 말했다.`,
      );
      await treve.say_and_wait(`반드시요.`);
      await era.printAndWait(
        `${you.name}은(는) 생각했다. 저 말은 자신에게만 한 말이 아닐지도 모른다고.`,
      );
    };
    f.title = title;
    return f;
  })(),
  foreign_travel: (() => {
    const title = '베르사유의 장미';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait(
        `튈르리 정원은 파리 중심부에 있다. 샹젤리제를 지나 콩코르드 광장과 루브르 박물관 사이에 자리 잡은 도심의 큰 정원이다. 관광 명소일 뿐 아니라 시민들의 쉼터로도 널리 사랑받는다.`,
      );
      await era.printAndWait(
        `휴일 낮에는 가족 단위 방문객도 많아서, 곳곳에 아이들이 뛰노는 모습이 보인다.`,
      );
      await era.printAndWait(`갑자기 ${treve.name}가 잔뜩 움츠러들었다.`);
      await era.printAndWait(
        `${you.name}이(가) 고개를 들자 인사하는 목소리가 들렸다.`,
      );
      await montjeu.say_and_wait(
        '왔구나. 다만 내가 할 이야기는 주로 저 사람에게 할 말이야.',
      );
      await era.printAndWait(
        `신중함과 지혜가 묻어나는 몬쥬${montjeu.adult_sex_title}의 목소리였다.`,
      );
      await era.printAndWait(
        `하지만 반사적으로 가장 먼저 떠오른 것은 몇 번이고 들었던 ${treve.sex}의 위닝 라이브 목소리였다.`,
      );
      await era.printAndWait(
        `돌아보니 늘씬하고 키가 큰 ${treve.uma_sex_title}가 팔짱을 낀 채 이쪽을 바라보고 있었다.`,
      );
      await era.printAndWait(`——전설.`);
      await treve.say_and_wait(`스승님!`);
      await era.printAndWait(`${treve.name}는 눈을 반짝이며 그 사람을 불렀다.`);
      await era.printAndWait(
        `${you.name}은(는) 온몸이 굳어 한 발짝도 움직이지 못했다.`,
      );
      await era.printAndWait(`빠른 심장 박동이 경보처럼 머릿속을 가득 채웠다.`);
      await montjeu.say_and_wait(`그럼.`);
      await era.printAndWait(
        `${montjeu.sex}는 ${you.name}의 왼손에 들린 종이봉투를 보았다.`,
      );
      await era.printAndWait(
        `${you.name}을(를) 나무 그늘의 벤치로 안내한 뒤, 쓴웃음을 지으며 선물을 받았다.`,
      );
      await era.printAndWait(
        `${
          montjeu.name
        }. 프랑스의 전설적인 ${treve.uma_sex_title}, 개선문상 우승자 중 한 명.`,
      );
      await montjeu.say_and_wait(
        `트레센에 들어간 뒤에도 휴일에는 ${treve.sex}에게 개인 지도를 해 줬지. 기본기가 기술을 익힐 수준이 되면 가르쳐 주겠다고 간단히 말했을 뿐인데, 순식간에 레이스의 요령을 터득하더군.`,
      );
      era.printButton(`「제가 마음에 들지 않으십니까?」`, 1);
      await era.input();
      await era.printAndWait(
        `${montjeu.name}는 대답 없이 바람에 흔들리는 나무를 바라보았다.`,
      );
      await era.printAndWait(
        `그 너머에는 햇살을 받은 센강의 푸른 물빛이 보였다.`,
      );
      await era.printAndWait(`가을이 되었으니 더위는 느껴지지 않아야 할 텐데.`);
      await era.printAndWait(
        `하지만 ${you.name}의 관자놀이에서 뺨을 따라 땀 한 방울이 천천히, 그 존재를 새기듯 흘러내렸다.`,
      );
      await era.printAndWait(
        `침묵은 ${you.name}이(가) 자신의 옆얼굴을 바라보는 ${montjeu.name}를 알아차린 순간 끝났다.`,
      );
      await montjeu.say_and_wait(
        `마음에 드는지 아닌지는 직접 보고 판단하고 싶었어. 상대를 실제로 보지 않고는 알 수 없으니까. 그러니 지금 답하지.`,
      );
      await era.printAndWait(
        `${montjeu.name}는 날카로운 눈을 ${you.name}에게 돌렸다. 미간을 찌푸리며 말로 쐐기를 박았다.`,
      );
      await montjeu.say_and_wait(`마음에 들지 않아.`);
      era.printButton(`「……」`, 1);
      await era.input();
      await era.printAndWait(`${montjeu.name}는 말을 이었다.`);
      await montjeu.say_and_wait(
        `지금까지의 실적에는 나름의 설득력이 있어. 좋은 점은 유지하고, 나쁜 점은 고치면 되지. ${treve.uma_sex_title}의 자질을 최대한 끌어내는 방식이 방임처럼 보이더라도, 육성 수단으로는 이해할 수 있어. 완성도 높은 ${
          treve.name
        }를 맡고 있다면 더욱 설득력이 있겠지.`,
      );
      await era.printAndWait(`겉보기에는 그럴 것이다.`);
      await montjeu.say_and_wait(
        `하지만 지금 네 방식은 단순한 방치야. 네가 할 수 있는 일도 포기하고, ${treve.name}를 완성시키려는 노력도 포기한 채 방관자가 되었지.`,
      );
      await era.printAndWait(`그렇다면 어떻게 해야 할까.`);
      await era.printAndWait(
        `지금까지 자신의 기술을 믿고 담당 ${treve.uma_sex_title}를 신뢰해 왔다. 그렇다면 완벽한 ${treve.uma_sex_title}에게 부족한 자신이 무엇을 보탤 수 있을까.`,
      );
      await era.printAndWait(
        `${you.name}은(는) ${treve.sex}를 어떻게 바라봐야 할까.`,
      );
      await era.printAndWait(`${montjeu.name}는 말을 이었다.`);
      await montjeu.say_and_wait(
        `개선문상은 높은 벽이야. 프랑스의 천재라 해도 그렇게 쉽게 차지할 수는 없어.`,
      );
      era.printButton(`「지금 이대로는 이길 수 없다는 말씀이십니까?」`, 1);
      await era.input();
      await montjeu.say_and_wait(`그래.`);
      await era.printAndWait(
        `멀리서 ${treve.name}가 들판을 달리고 있었다. 어느새 늘어난 소년 소녀들도 그 뒤를 쫓듯 달렸다.`,
      );
      await era.printAndWait(`${treve.sex}가 그렇게 달리면 누구나 매료되리라.`);
      await era.printAndWait(
        `그리고 그 마음을 어렵지 않게 힘으로 바꾸어, 천재적인 능력으로 레이스에서도 이길 것이다.`,
      );
      await era.printAndWait(
        `그 속마음을 긍정하듯, 한때의 전설이 입을 열었다.`,
      );
      await montjeu.say_and_wait(
        `${treve.sex}는 이길 거야. 네가 없어도 이길 만큼 강한 싹이지.`,
      );
      era.printButton(`「알고 있습니다.」`, 1);
      await era.input();
      await montjeu.say_and_wait(`그렇기에 물어야 해.`);
      await era.printAndWait(
        `${montjeu.name}는 자리에서 일어났다. ${you.name}을(를) 바라보는 눈은 조금 차가웠지만, 깔보는 것은 아니었다.`,
      );
      await era.printAndWait(
        `공정하지만 가차 없는 지적에 ${you.name}의 가슴이 조여 왔다.`,
      );
      await era.printAndWait(
        `지금까지 피해 왔던 것이 눈앞으로 떠밀려 나온 기분이었다.`,
      );
      await montjeu.say_and_wait(
        `혼자서도 이길 수 있는 ${treve.name}의 곁에 네가 있어야 하는 이유를.`,
      );
      await era.printAndWait(`${treve.name}가 멀리서 손을 흔들었다.`);
      await era.printAndWait(
        `${montjeu.name}는 부드럽게 웃으며 ${treve.sex}에게 손을 흔들었다. ${you.name}은(는) 벤치에서 어깨를 늘어뜨린 채 ${treve.sex}에게서 눈을 떼지 못했다.`,
      );
      await montjeu.say_and_wait(
        `개선문 앞에서 답을 내놓도록 해, ${you.actual_name}. 그러지 못하면 너는 ${treve.sex}의 미래를 빼앗는 거야.`,
      );
      await era.printAndWait(
        `다시 달리기 시작한 ${treve.name}의 뒤를 많은 아이가 쫓았다.`,
      );
      await era.printAndWait(`그 모습은 점점 흐릿해지더니 숲속으로 사라졌다.`);
    };
    f.title = title;
    return f;
  })(),
  before_prix_lat_classical: (() => {
    const title = '『폭군』마저 꺾고……';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, you, callname) => {
      await era.printAndWait(
        `${you.name}은(는) ${treve.name}가 승부복 디자인을 정하던 때를 똑똑히 기억하고 있었다.`,
      );
      await era.printAndWait(
        `${treve.sex}의 G1 출전은 다른 ${treve.uma_sex_title}보다 빨랐고, 승부복도 곧바로 맞추게 되었다. 다만 한 가지, ${treve.sex}가 절대로 양보하지 않은 점이 있었다.`,
      );
      era.printButton(`「정말 이걸로 괜찮겠어?」`, 1);
      await era.input();
      await treve.say_and_wait(`이걸로 좋아요!`);
      await era.printAndWait(
        `당당하게 가슴을 펴는 ${treve.sex} 앞에서 ${you.name}은(는) 서류에서 눈을 떼지 못했다.`,
      );
      await era.printAndWait(
        `${treve.sex}의 말에 디자이너가 제안한 몇 가지 안이 단호하게 지워졌다.`,
      );
      await era.printAndWait(`파랑, 하양, 빨강의 세 가지 색.`);
      await era.printAndWait(`누구나 아는 프랑스 국기의 세 가지 색이다.`);
      await era.printAndWait(`그것을 승부복의 기본 색으로 삼는다.`);
      await era.printAndWait(`그 제안에 고개를 끄덕인 것은 바로……`);
      await era.printAndWait(
        `${treve.sex}라면 무엇을 짊어져도 해낼 수 있으리라 생각했기 때문이다.`,
      );
      await era.printAndWait(
        `대기실에서 마지막으로 점검하는 ${treve.name}는 한 군데도 흐트러지지 않은 승부복을 확인하고, 거울 앞에서 자신의 모습을 진지하게 바라보았다.`,
      );
      await era.printAndWait(
        `오늘 개선문상에는 영국과 독일뿐 아니라 일본의 ${treve.uma_sex_title}도 출전한다.`,
      );
      await era.printAndWait(
        `세계의 이목이 쏠리는 이 레이스에서 ${treve.sex}는 국기 같은 색의 승부복을 입었다. 하지만 ${treve.sex}에게 긴장한 기색은 없었다.`,
      );
      await era.printAndWait(
        `의자에 앉아 ${treve.sex}의 준비 모습을 지켜보는 ${you.name}에게 ${treve.name}가 돌아섰다.`,
      );
      await era.printAndWait(
        `그날과 같은 코트를 입은 ${you.name}에게, 승부복 차림의 ${treve.name}는 당시로서는 상상도 하지 못했던 모습이었다.`,
      );
      await treve.say_and_wait(`${callname}.`);
      era.printButton(`「응.」`, 1);
      await era.input();
      await treve.say_and_wait(
        `여기까지 데려와 주셔서 고마워요. 여러 G1에 나가게 해 주시고, 누구보다 진지하게 저를 봐 주셨어요. 개선문상이라는 이렇게 큰 목표 앞에서도요.`,
      );
      era.printButton(`「끝나고 말해 줘.」`, 1);
      await era.input();
      await era.printAndWait(
        `「그렇네요」라며 웃는 ${treve.name}에게는 조금도 곤란해하는 기색이 없었다.`,
      );
      await era.printAndWait(
        `이 개선문상 무대 앞에서 ${you.name}은(는) ${treve.sex}의 특별한 재능을 이해했다.`,
      );
      await era.printAndWait(`그것은 신체 능력도, 정신적 안정감도 아니었다.`);
      await era.printAndWait(
        `훈련을 통해 얻을 수 있는 것과는 다른, 타고난 재능이었다.`,
      );
      await era.printAndWait(
        `다른 사람의 기대를 짊어지는 데 조금도 부담을 느끼지 않는 것.`,
      );
      await era.printAndWait(
        `거대한 그릇처럼 사람들의 신뢰와 희망을 끝없이 힘으로 바꿀 수 있는 것.`,
      );
      await era.printAndWait(
        `드문 완성도와 높은 경지에서 비롯된 그 재능은 온갖 부정적인 생각을 끊어 내고, ${treve.name}를 앞으로 나아가게 했다.`,
      );
      await era.printAndWait(`${you.name}은(는) 다시 자신에게 물어야 했다.`);
      await era.printAndWait(`왜 자신은 ${treve.sex}의 트레이너인가.`);
      await era.printAndWait(
        `문손잡이에 손을 얹은 ${treve.sex}가 다시 한번 ${you.name}을(를) 돌아보며 그 말을 꺼냈다.`,
      );
      await era.printAndWait(`바람일까, 저주일까.`);
      await era.printAndWait(`모든 것이 약동하듯이.`);
      await treve.say_and_wait(`이길 거예요. 당신의 ${treve.name}로서.`);
      era.printButton(`말없이 배웅한다（호감+5）`, 1);
      era.printButton(`「넌 이길 거야.」（호감+15）`, 2);
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
  prix_lat_win_classical: (() => {
    const title = '최강';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait(
        `어느 때보다 자신감에 찬 말이었는데도, ${you.name}에게는 어떻게 들어도 공허하게 느껴졌다.`,
      );
      await era.printAndWait(
        `함성은 먼 천둥처럼 들렸다. 멀리 떨어져 있는데도 귀를 짓눌렀다.`,
      );
      await era.printAndWait(
        `${treve.name}의 달리기에는 ${you.name}이(가) 고쳐 줄 부분이 거의 없었다.`,
      );
      await era.printAndWait(
        `이 드문 재능을 꽃피운 사람은 아마 ${montjeu.name}였을 것이다.`,
      );
      await era.printAndWait(
        `그리고 그 ${montjeu.name}의 달리기를 떠올리게 하듯.`,
      );
      await era.printAndWait(
        `선행 작전으로 집단 앞쪽을 달리는 ${treve.name}가 마지막 직선을 기다리는 어느 순간.`,
      );
      await era.printAndWait(`롱샹의 열기가 절정에 이르렀을 때.`);
      await era.printAndWait(
        `그토록 동경했지만 일본이 수십 년간 차지하지 못했던 개선문상을 앞에 두고, ${you.name}의 가슴에는 두 가지 감정이 얽혔다.`,
      );
      await era.printAndWait(`하나는 승리에 대한 확신.`);
      await era.printAndWait(
        `${treve.name}는 지금까지도 능숙한 위치 선정으로 레이스에서 승리했다. ${treve.sex}가 가장 잘하는 것은 선행, 특히 집단의 맨 앞쪽에 있을 때였다.`,
      );
      await era.printAndWait(
        `그 위치에서 막판 스퍼트를 펼치면, 무패의 ${treve.teen_sex_title}를 따라잡을 수 있는 ${treve.uma_sex_title}는 없었다.`,
      );
      await era.printAndWait(
        `분명히 말하자면, 여기까지 왔을 때 ${treve.sex}의 승리는 이미 정해져 있다는 확신이었다.`,
      );
      await era.printAndWait(`다른 하나는 패배에 대한 공포.`);
      await era.printAndWait(
        `하지만 그것은 지금 눈앞을 달리는 ${treve.name}가 패배한다는 뜻이 아니었다.`,
      );
      await era.printAndWait(
        `몇 년 전, 그 일본의 괴조 앞에서 ${montjeu.name}가 좋은 위치를 차지했을 때 온몸이 얼어붙었던 공포.`,
      );
      await era.printAndWait(
        `${treve.sex}에게 이길 수 없다는 절망의 기억이, 똑같은 모습을 보여 주는 ${treve.name}에게 겹쳐졌다.`,
      );
      await era.printAndWait(`함성은 여전히 멀게만 느껴졌다.`);
      await era.printAndWait(
        `마지막 직선에서 선두의 ${
          treve.name
        }가 뒤따르는 ${treve.uma_sex_title}를 서서히 따돌렸다.`,
      );
      await era.printAndWait(`롱샹을 가득 메운 응원에 떠받쳐지듯이.`);
      await era.printAndWait(`저 눈부신 모습에 자신이 보탠 몫이 있을까.`);
      await era.printAndWait(
        `${you.name}은(는) 울타리를 붙잡고 떨리는 몸을 조금 내밀어, ${treve.sex}의 옆얼굴을 똑똑히 바라보았다.`,
      );
      await era.printAndWait(
        `땀을 흘리며 무거운 주로의 마지막 100미터를 달리는 ${treve.sex}에게 ${you.name}은(는) 무엇을 해 줄 수 있을까.`,
      );
      await you.say_and_wait(`……`);
      await era.printAndWait(`목소리가 나오지 않았다.`);
      await era.printAndWait(
        `${treve.sex}의 승리는 이미 정해져 있었다. ${you.name}이(가) 해야 할 일은 더 이상 없었다.`,
      );
      await era.printAndWait(
        `흥분한 함성이 귀를 메웠다. 그 울림을 통해 ${you.name}은(는) ${treve.name}가 개선문상 결승선을 통과한 순간을 분명히 알았다.`,
      );
      era.println();
      await era.printAndWait(`${you.name}은(는) 그 순간을 보지 못했다.`);
      era.println();
      await era.printAndWait(
        `개선문상 우승 소감을 묻는 질문도, 휴대전화로 쏟아져 온 메시지도, 경기장에서 돌아온 ${treve.name}에게 무슨 말을 했는지조차 기억나지 않았다.`,
      );
      await era.printAndWait(
        `하지만 단 한 가지가 ${you.name}의 머릿속에 깊이 새겨졌다.`,
      );
      await era.printAndWait(
        `개선문상 후 기자회견에서 와인색 보드를 등지고 트로피를 안은 ${treve.name}가 누군가의 질문에 답했던 말.`,
      );
      await era.printAndWait(
        `누군가 질문을 던지는 순간, 멍하니 있던 ${you.name}의 오른손이 갑자기 붙잡혔다.`,
      );
      await treve.say_and_wait(`내년에도 ${you.sex}와 함께 이길 거예요!`);
      await era.printAndWait(`왜.`);
      await era.printAndWait(`왜 자신이어야 할까.`);
      await era.printAndWait(
        `무엇이 이 공허한 자신을 ${treve.name}의 곁에 서 있게 하는 걸까.`,
      );
      await era.printAndWait(
        `플래시의 하얀 빛은 눈부셨다. 피로가 쌓인 눈에는 아무것도 들어오지 않았다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_25: (() => {
    const title = '갈림길.';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, you) => {
      await era.printAndWait(`개선문상 이후 반년 넘게 흘렀다.`);
      await era.printAndWait(
        `${treve.name}의 태도는 지금도 변함이 없었다. ${you.name}의 지도를 순순히 받아들였다.`,
      );
      await era.printAndWait(
        `여러 면에서 성장했지만 연습 의욕도 줄어들지 않았다.`,
      );
      await era.printAndWait(
        `${treve.sex}의 사랑스러운 모습은 더 많은 사람에게 알려졌고, 출전 레이스가 늘어날수록 팬도 늘었다.`,
      );
      await era.printAndWait(
        `개선문상에서 거둔 성과까지 더해져, 지금의 ${
          treve.sex
        }는 프랑스를 짊어진 ${treve.teen_sex_title}로 이름 높았다.`,
      );
      await era.printAndWait(
        `하지만 그렇다고 레이스 결과가 달라지는 것은 아니었다.`,
      );
      await era.printAndWait(
        `${treve.name}의 개인 물건이 작년보다 훨씬 늘어난 트레이너실. 무더운 공기 속에서.`,
      );
      await era.printAndWait(
        `지친 몸을 쉬게 해야 하는데도 이곳에 있어야 한다고 ${you.name}이(가) 생각하는 이유는 단 하나였다.`,
      );
      await era.printAndWait(`올해 들어 ${treve.name}가 거둔 성적.`);
      await era.printAndWait(
        `눈앞의 컴퓨터에서는 봄과 초여름에 출전한 두 G1의 영상이 반복 재생되고 있었다.`,
      );
      await era.printAndWait(
        `거리는 작년과 같았고, 주로 상태도 특별히 나쁘지 않았다.`,
      );
      await era.printAndWait(
        `그런데도 앞선 레이스에서는 이착, 그다음에는 삼착이었다.`,
      );
      await era.printAndWait(
        `${treve.name}는 연습을 계속하고 있었다. 하지만 뚜렷한 해결책이 없는 한, 연패를 노리는 다음 베르메유상도 불안했다.`,
      );
      await era.printAndWait(
        `반복되는 영상과 ${treve.sex}의 상태를 살펴본 지 몇 시간이나 지났을까.`,
      );
      await era.printAndWait(
        `까마귀 울음소리에 ${you.name}은(는) 퍼뜩 정신을 차렸다. 돌아보니 창밖은 석양에 주황빛으로 물들어 있었다.`,
      );
      await you.say_and_wait(`……큰일이다.`, true);
      await era.printAndWait(`오늘은 트레이닝 일정이 있었다.`);
      await era.printAndWait(
        `자기 생각에만 빠져 ${treve.sex}를 잊고 있었다. 황급히 휴대전화를 꺼내니 메시지 알림이 하나 와 있었다.`,
      );
      await era.printAndWait(
        `짧게 표시된 알림만으로도 약 한 시간 전에 온 메시지가 ${treve.name}에게서 온 것임을 알 수 있었다.`,
      );
      await treve.say_and_wait(
        `미안해요. 오늘은 몸이 좋지 않아서 쉬게 해 주세요.`,
      );
      await era.printAndWait(`트레이닝 예정 시간은 그보다 전이었다.`);
      await era.printAndWait(
        `즉, 어느 정도 시간이 지난 뒤에야 그 연락을 보냈다는 뜻이었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 머리를 감싸 쥔 채 ${treve.sex}에게 답장을 보내려 했다.`,
      );
      await era.printAndWait(
        `하지만 지금 무슨 변명을 해도 소용없었다. 짧은 말만 보내는 편이 나았다.`,
      );
      era.printButton(`「알겠어.」`, 1);
      await era.input();
      await era.printAndWait(
        `최근 성과를 내지 못하는 ${treve.name}를 보며, ${you.name} 자신도 ${treve.sex}와 마주해야 한다는 것을 잘 알고 있었다.`,
      );
      await era.printAndWait(
        `원인도 모르는 트레이너가 ${treve.sex}에게 무엇을 해 줄 수 있을까.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 일어서고서야 배가 고프다는 사실을 깨달았다.`,
      );
      await era.printAndWait(`（……홍차면 될까?）`);
      await era.printAndWait(
        `찻잎 통이 놓인 선반. 가볍고 산뜻한 향이 머릿속 깊은 곳을 자극했다.`,
      );
      await era.printAndWait(
        `아무 생각 없이, ${you.name}은(는) 통 하나를 집었다.`,
      );
      await era.printAndWait(
        `안에는 거의 아무것도 없었다. 얼마 남지 않은 찻잎과 통에 밴 향뿐. 레몬 향이었다.`,
      );
      await era.printAndWait(`그날 이후 ${treve.name}는 이 차를 좋아했다.`);
      await era.printAndWait(
        `가끔 트레이너실에 올 때면 이 차를 끓이는 일이 많았다.`,
      );
      await era.printAndWait(`가을이 오면 추운 날도 늘 것이다.`);
      await era.printAndWait(`${you.name}은(는) 말없이 통을 닫았다.`);
      await you.say_and_wait('혼자 사러 갈까……', true);
    };
    f.title = title;
    return f;
  })(),
  o_s_95_25: (() => {
    const title = '다 써 버리고';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, you) => {
      await era.printAndWait(
        `선명한 과거와 흐릿한 앞날을 생각하다 보니 금세 목적지에 도착했다.`,
      );
      await era.printAndWait(
        `그 찻잎 가게로 들어가자 주인은 ${you.name}을(를) 보고 다시 눈썹을 치켜올렸다.`,
      );
      await you.say_as_passer_by_and_wait(
        '찻잎 가게 주인',
        '음? 이번에는 혼자인가?',
      );
      era.printButton(`「신경 쓰지 마.」`, 1);
      await era.input();
      await era.printAndWait(
        `가게 안을 한 번 둘러본 뒤 ${you.name}은(는) ${treve.sex}가 흥미롭게 살펴보던 꽃차 선반으로 향했다.`,
      );
      await era.printAndWait(
        `그날처럼 다양한 차가 진열되어 있었다. 사과, 살구, 크랜베리 등 화려한 과일 그림이 늘어서 있었다.`,
      );
      await era.printAndWait(
        `그 순서대로 L(lemon)까지 왔을 때, ${you.name}의 손가락이 가리킨 곳은 빈 선반이었다.`,
      );
      await era.printAndWait(
        `구불구불한 선반 사이를 빠져나와 주인을 바라보았다.`,
      );
      era.printButton(`「……레몬 향은 없어?」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        '찻잎 가게 주인',
        '아, 이 계절에는 생산이 잘 안돼. 프랑스 브랜드라 원래도 유통량이 적고. 예약금 받은 물량이 조금 남아 있을 뿐이야.',
      );
      await era.printAndWait(
        `그 말이 맞았다. 이 제품은 이 남자의 가게 말고는 본 적이 없었다.`,
      );
      era.printButton(`「입고 예정은?」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        '찻잎 가게 주인',
        '당분간 없어. 도매상에도 재고가 없다는군.',
      );
      era.printButton(`「그렇군——아니, 고마워.」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 그대로 가게를 나가려다가 한마디에 붙잡혔다.`,
      );
      await you.say_as_passer_by_and_wait(
        '찻잎 가게 주인',
        `${treve.sex}는 잘 지내나?`,
      );
      await era.printAndWait(`그렇다고도, 아니라고도 할 수 없었다.`);
      await era.printAndWait(
        `${treve.name}가 G1에서 아깝게 패배한 일을 실제로 어떻게 생각하는지, ${you.name}은(는) 잘 알지 못했다.`,
      );
      await you.say_and_wait('도움이 되지 못하는 트레이너였다.', true);
      await era.printAndWait(`남자는 계산대에서 머뭇거렸다.`);
      await you.say_as_passer_by_and_wait(
        '찻잎 가게 주인',
        '자네는 그나마 괜찮아. 나는 그쪽 상태가 더 걱정일세. 다른 가게에 그 차가 있는지 물어봐 두지.',
      );
      era.printButton(`「기억하고 있었어?」`, 1);
      await era.input();
      await era.printAndWait(
        `그 차가 ${treve.name}의 취향이라고 언론에 밝힌 기억은 없었다. 하지만 남자는 쓴웃음을 지으며 말했다.`,
      );
      await you.say_as_passer_by_and_wait(
        '찻잎 가게 주인',
        '단골이 데려온 손님인데 잊을 수가 있겠나.',
      );
      era.printButton(`「정말이지……」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        '찻잎 가게 주인',
        `뭐, 내가 ${treve.sex}의 팬이기도 하지만……`,
      );
      await era.printAndWait(
        `남자는 휴대전화 화면을 두드리며 묘한 표정으로 중얼거렸다.`,
      );
      await era.printAndWait(
        `${treve.name}는 많은 사람의 기대를 짊어지고 있었다. 자신이 할 수 있는 일을 하려고 애쓰는 사람들도 있었다.`,
      );
      await era.printAndWait(`다시 한번 ${you.name}은(는) 물어야 했다.`);
      await era.printAndWait(`왜 자신은 ${treve.name}의 트레이너인가.`);
      await era.printAndWait(
        `${you.name}은(는) 어떻게 나아가야 할지 알 수 없었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_28: (() => {
    const title = '정상 아래에서';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait(
        `정신을 차려보니 ${you.name}은(는) 이미 샹젤리제 거리를 걷고 있었다.`,
      );
      await era.printAndWait(
        `동쪽 하늘로 달이 떠오르고, 어둠이 짙어지는 거리에 가로등이 하나둘 켜졌다.`,
      );
      await montjeu.say_and_wait('답은 찾았나?');
      await era.printAndWait(
        `고개를 저었다. 하지만 ${montjeu.name}는 이미 예상했다는 듯 나무라지 않고 조용히 말을 이어갔다.`,
      );
      await montjeu.say_and_wait('그렇다면——');
      era.printButton(`「잠깐.」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) ${montjeu.sex}의 눈을 똑바로 응시했다.`,
      );
      await era.printAndWait(
        `몇 년 전이든 반년 전이든, 도저히 정면으로 마주할 수 없었던 ${montjeu.sex}의 눈이었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 이것이 혼자서 해결할 수 있는 문제가 아님을 알고 있었다.`,
      );
      await era.printAndWait(
        `누군가와 마주하고 자신의 한계를 드러내는 것을 늘 두려워해 왔음을, ${you.name}은(는) 서서히 깨닫고 있었다.`,
      );
      era.printButton(`「내 과거 이야기를 들어줬으면 좋겠어.」`, 1);
      await era.input();
      await era.printAndWait(
        `${montjeu.name}는 한동안 ${you.name}의 얼굴을 지긋이 바라보았다.`,
      );
      await era.printAndWait(
        `몸을 도려낼 듯한 시선에 도망치고 싶어지기도 했지만, 여기서 버텨내지 못하면 아무것도 시작되지 않는다.`,
      );
      await era.printAndWait(
        `이윽고 ${montjeu.sex}는 두세 걸음 걸어가 ${you.name}을(를) 이끌며 벤치에 앉았다.`,
      );
      await era.printAndWait(`곁에 앉자, ${montjeu.name}가 서두를 꺼냈다.`);
      await montjeu.say_and_wait('내 앞에서 듣기 좋은 말만 늘어놓아 봐야……');
      era.printButton(
        `「그런 날이 오면, ${treve.name}에게도 똑같이 말할 거야.」`,
        1,
      );
      await era.input();
      await montjeu.say_and_wait('……알겠어.');
      await era.printAndWait(
        `${you.name}은(는) 그렇게 함으로써 자신과 마주하고자 했다.`,
      );
      await era.printAndWait(
        `그것은 누구에게나 있는 미숙함을 스스로 들여다보는 것과 같았다.`,
      );
      era.printButton(`고통스러운 과거를 회상한다`, 1);
      await era.input();
      await you.say_and_wait(
        `몇년 전, 난 네가 달렸던 개선문상을 가장 앞에서 지켜봤어. 너와 괴조가 이곳에서 사력을 다해 싸우고, 결국 괴조가 추월당하는 모습을 보았을 때…… 아무것도 할 수 없다는 무력감에 휩싸였지.`,
      );
      await era.printAndWait(
        `단도직입적으로 말해, ${montjeu.sex}는 일본의 수많은 트레이너들에게 일종의 트라우마였다.`,
      );
      await era.printAndWait(`닿을 수 없는 벽. 절대적인 전설.`);
      await era.printAndWait(`${montjeu.name}는 아무것도 묻지 않았다.`);
      await montjeu.say_and_wait(`하지만——네게는 ${treve.name}가 있잖아.`);
      await era.printAndWait(
        `${montjeu.name}는 잠시 밤의 센강으로 눈을 돌렸다.`,
      );
      await era.printAndWait(
        `검게 일렁이는 수면에는 별도 없었다. 붙잡을 수 없는 바람이 일으키는 물결 소리만 조용히 울렸다.`,
      );
      await era.printAndWait(
        `하지만 ${treve.name}는 강한 ${treve.uma_sex_title}다. ${treve.sex}는 혼자서도 이길 수 있었다.`,
      );
      await montjeu.say_and_wait(
        `……${treve.sex}가 사람들의 기대를 짊어질 그릇이라고 말했던 걸 기억해?`,
      );
      era.printButton(`「네.」`, 1);
      await era.input();
      await era.printAndWait(`끝없는 강인함. 인간의 한계를 넘어선 재능.`);
      await era.printAndWait(`그것이 있기에 지금의 ${treve.name}는 강했다.`);
      await montjeu.say_and_wait(
        `${treve.sex}의 중압감을 견디는 힘은 대단해. 앞으로도 끝없이 사람들의 기대를 짊어지는 데 ${treve.sex}는 주저하지 않을 거야.`,
      );
      await montjeu.say_and_wait(
        `그런데 그 타고난 성질이 ${treve.sex}의 가치관을 만들었다면, 넌 어떻게 생각해?`,
      );
      await era.printAndWait(
        `${montjeu.name}는 시선을 ${you.name}에게 돌렸다.`,
      );
      await era.printAndWait(
        `기대란 본래 귀한 것이다. 끊임없는 노력과 뛰어난 성과가 있어야 비로소 얻을 수 있는 것이지, 당연한 것이 아니다.`,
      );
      await era.printAndWait(`하지만 ${treve.name}에게는 그것이 당연했다.`);
      await era.printAndWait(
        `${
          treve.sex
        }가 당연하다는 듯 해내는 일들. 끝없는 기대 속에서 ${treve.teen_sex_title}는 이 세상에서 무엇을 발견했을까.`,
      );
      await era.printAndWait(`가능성과 현실이 머릿속에서 이어졌다.`);
      era.printButton(`「……기대받지 못하는 것에 대한 두려움?」`, 1);
      await era.input();
      await montjeu.say_and_wait('Exactement.');
      await era.printAndWait(
        `한때 전설이 되어 모두의 기대를 받았던 ${treve.uma_sex_title}가 말을 이었다.`,
      );
      await montjeu.say_and_wait(
        `기대에는 부응해야 해. 부응할수록 새로운 기대가 늘어나지. ${treve.sex}가 그 순환 속에 있다 보면, 기대야말로 자신의 가치라고 착각할 수도 있어. 그것이 ${treve.sex}의 근본을 이루는 생각이라면 함부로 부정해서는 안 돼.`,
      );
      era.printButton(`「${treve.sex}에게 기대할 수밖에 없군.」`, 1);
      await era.input();
      await era.printAndWait(`${montjeu.name}는 고개를 끄덕였다.`);
      await montjeu.say_and_wait(
        `그러려면 내가 너라는 사람을 믿고 기대할 수 있어야 해. 그만한 가치가 없다면 ${treve.sex}를 다른 사람에게 맡길 수 없으니까.`,
      );
      await era.printAndWait(`${you.name}은(는) 알고 있었다.`);
      await era.printAndWait(`하지만 어떻게 해야 할까.`);
      await era.printAndWait(
        `${montjeu.name}는 일어나 긴 머리카락을 흩날리며 ${you.name}을(를) 내려다보았다.`,
      );
      await era.printAndWait(
        `죄인을 심판하는 신 같은 눈빛과 달리, 거기에는 어느 정도 동정이 섞여 있었다.`,
      );
      await era.printAndWait(
        `앞으로도 계속 『고통』에 시달릴 사람에 대한 연민일까.`,
      );
      await montjeu.say_and_wait('내 역할은 여기까지야.');
      era.printButton(`「……죄송합니다.」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}에게 좋은 밤 보내라는 말만 남기고, ${montjeu.name}는 떠났다.`,
      );
      await era.printAndWait(
        `하늘을 올려다보았다. 보름달은 ${you.name}을(를) 내려다보며 조용히 그 자리에 떠 있었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = 'Fly Away';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait(
        `${you.name}은(는) 트레이너실에서 약속한 ${treve.name}를 기다리고 있었다.`,
      );
      await era.printAndWait(
        `${treve.sex}가 올 때까지 지금까지의 레이스 영상을 다시 보았다.`,
      );
      await era.printAndWait(
        `${treve.name}가 잘 풀리지 않는 이유를 하나씩 짚어 보았다. 하지만 그 밖에도 문제가 있었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 최근 레이스의 최종 직선을 다시 보았다.`,
      );
      await era.printAndWait(
        `${treve.name}는 이전처럼 선두 집단에서 앞으로 빠져나가려 애쓰고 있었다.`,
      );
      await era.printAndWait(
        `하지만 이번 레이스에서는 포위망을 뚫지 못했고, 특기인 막판 스퍼트도 아무 성과 없이 끝났다.`,
      );
      await era.printAndWait(
        `원래 ${treve.name}는 키가 큰 편은 아닌 ${treve.uma_sex_title}다.`,
      );
      await era.printAndWait(
        `게다가 전술이 알려졌으니, ${treve.sex}를 앞으로 내보내지 않으려 힘을 합치는 집단이 생겨도 이상할 것은 없었다.`,
      );
      await era.printAndWait(
        `무엇보다 ${treve.sex}의 방식은 읽기 쉬웠다——${treve.name}의 달리기는 ${montjeu.name}를 닮았다.`,
      );
      await era.printAndWait(
        `당시 트레이너들은 ${montjeu.name}에 대한 대책을 세우는 데 힘썼다. 그 대책이 ${treve.name}에게도 그대로 통하고 있었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 전설의 후계자가 계속 이기게 해야 했다. 무엇을 줄 수 있을까.`,
      );
      await era.printAndWait(
        `그렇게 고민하는 사이 약속 시각이 한 시간쯤 지나 있었다. 하지만 ${treve.name}는 올 기미가 없었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_33: (() => {
    const title = '오직, 단 하나';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, montjeu, you, callname) => {
      await era.printAndWait(
        `그날 이후로 ${treve.name}가 ${you.name}의 곁에 오지 않는 날이 늘었다.`,
      );
      await era.printAndWait(
        `연락도 서서히 끊겨, 최근에는 편지가 왔다는 알림조차 받지 못했다.`,
      );
      await era.printAndWait(`이런 상황에서 ${you.name}은(는)……`);
      era.printButton(`심하게 나무랄 자격 따위는 없겠지.`, 1);
      era.printButton(`가만히 내버려 둘 수는 없다.`, 2);
      const ret = await era.input();
      if (ret === 2) {
        await era.printAndWait(
          `문득 ${you.name}은(는) ${treve.name}와 처음 만났을 때를 떠올렸다.`,
        );
        await era.printAndWait(`움직여야 했다.`);
        await era.printAndWait(
          `……저녁 무렵, 유람선이 천천히 ${you.name}의 바로 아래 센강을 지나갔다. 강 건너에는 튈르리 정원이 보였다.`,
        );
        await era.printAndWait(`초가을 바람이 코트 자락을 스쳤다.`);
        await era.printAndWait(
          `그 자락에 손을 대며 ${you.name}은(는) 되돌아봐야 할 과거를 생각했다.`,
        );
        await era.printAndWait(`트레이너가 된 이유.`);
        await era.printAndWait(
          `승리도 패배도 분명 나중에 따라온 것이었다. 트레센의 문을 두드릴 당시 마음속에는 더 단순한 소망이 있었을 것이다.`,
        );
        await era.printAndWait(`그것은……`);
        await treve.say_and_wait(`……${callname}？`);
        await era.printAndWait(`수없이 들었던 목소리였다.`);
        await era.printAndWait(
          `돌아보니 그때와 같은 코트를 입은 ${treve.name}가 서 있었다.`,
        );
        await treve.say_and_wait(`왜 여기에 계세요?`);
        era.printButton(`「그건——」`, 1);
        await era.input();
        await era.printAndWait(
          `${treve.sex}는 곧바로 ${you.name}에게서 눈을 돌렸다.`,
        );
        await era.printAndWait(`산처럼 꿈쩍도 하지 않는 단절.`);
        await era.printAndWait(
          `${treve.sex}와 마주하지 못하고, ${treve.sex}를 혼자 내버려 둔 것. 그것이 ${you.name}이(가) 마주해야 할 과거였다.`,
        );
        await era.printAndWait(
          `${you.name}이(가) 후회할 몫은 어디에도 없었다.`,
        );
        await treve.say_and_wait(`……죄송해요.`);
        await era.printAndWait(
          `스쳐 지나 달려가려는 ${treve.sex}를 ${you.name}은(는) 목소리로 붙잡았다.`,
        );
        era.printButton(`「${treve.name}.」`, 1);
        await era.input();
        await era.printAndWait(`${you.name}의 앞에서 ${treve.name}는 멈췄다.`);
        await era.printAndWait(
          `하지만 ${treve.sex}는 ${you.name}(으)로는 얼굴을 돌리지 않고 계속 등을 보였다.`,
        );
        await era.printAndWait(
          `침묵의 소란 속에서 ${you.name}은(는) 천천히 입을 열었다.`,
        );
        await era.printAndWait(`고통은 여전히 마음속을 떠돌고 있었다.`);
        era.printButton(`「네가 나를 선택했을 때 했던 말, 기억해?」`, 1);
        await era.input();
        await treve.say_and_wait(`……많은 이야기를 했던 것 같은데요.`);
        await you.say_and_wait(
          `『개선문상을 연패할 수 있는 ${treve.uma_sex_title}를 맡으면 사회인으로서의 평가도 높아지겠죠』라고 했잖아.`,
        );
        await treve.say_and_wait(
          `그건…… 너무 부끄러워요. 가능하면 없던 일로 해 주세요, ${you.actual_name}.`,
        );
        await era.printAndWait(`${treve.sex}는 살짝 고개를 숙였다.`);
        era.printButton(`「계속 모르고 있었어.」`, 1);
        await era.input();
        await era.printAndWait(
          `${treve.name}는 강했다. 지금까지 ${you.name}에게 ${treve.sex}는 너무나 뛰어난 담당이었다.`,
        );
        await era.printAndWait(
          `마음 한구석에서 그 불균형이 서로의 생각을 어긋나게 하고 있었다.`,
        );
        await era.printAndWait(
          `${treve.sex}가 아무리 훌륭한 성적을 거둬도 ${treve.sex}를 위해 기뻐하지 못했다.`,
        );
        era.printButton(
          `「너는 줄곧 나를 유일한 트레이너로 봐 주고 있었구나.」`,
          1,
        );
        await era.input();
        await era.printAndWait(
          `그 기술은 ${montjeu.name}가 가르쳐 준 것일지도 모른다.`,
        );
        await era.printAndWait(
          `그래도 지금 ${treve.sex}의 곁에 있는 사람은 ${you.name} 본인이었다.`,
        );
        await era.printAndWait(
          `${treve.sex}의 각질을 확인하고, ${treve.sex}의 특성을 이해하고, ${treve.sex}의 레이스를 계속 지켜본 사람은 ${you.name} 본인이었다.`,
        );
        await era.printAndWait(`바로 이 자리에 의미가 있었다.`);
        await era.printAndWait(
          `이 세상에서 유일한 ${treve.name}의 트레이너로서, ${you.name}에게는 ${treve.sex}에게 맡겨야 할 것이 있었다.`,
        );
        await era.printAndWait(`이 세계에 발을 들인 날부터.`);
        await era.printAndWait(
          `세계 최고봉이라 불리는 개선문상이 탄생한 날부터.`,
        );
        await era.printAndWait(
          `『우리』에게는 없는 가능성을 안고 태어난 『${treve.couple_title}』과 만난 날부터.`,
        );
        await era.printAndWait(
          `한 사람의 인간으로서 ${you.name}은(는) 바랐다.`,
        );
        era.printButton(`「${treve.name}, 내 영혼을 불태워 줘.」(연모+5)`, 1);
        await era.input();
        await era.printAndWait(
          `사람은 언젠가 자신의 모든 것을 바꿀 존재를 만난다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 이 소망을 위해 모든 우연이 여기서 이어졌다고 생각했다.`,
        );
        await era.printAndWait(
          `이제야 알았다. 자신은 ${treve.sex}의 전속 트레이너였다.`,
        );
        await era.printAndWait(`${treve.sex}에게 기대를 맡겼다.`);
        await era.printAndWait(`${treve.name}가 어깨를 살짝 떨었다.`);
        await era.printAndWait(
          `돌아본 ${treve.sex}는 옅게 웃었다. 하지만 그 눈에는 반짝이는 무언가가 있었다.`,
        );
        await era.printAndWait(
          `${treve.sex}는 기뻐하면서도 어쩔 줄 몰라 하며 가슴에 손을 얹었다.`,
        );
        await era.printAndWait(
          `센강 위로 부는 바람이 ${treve.sex}의 빨간 리본을 어루만졌다.`,
        );
        await treve.say_and_wait(`당신은 제게 기대하고 계신가요?`);
        await era.printAndWait(
          `그 짧은 말 속에서 ${treve.sex}가 가둬 두었던 불안이 희미하게 떨리며 드러났다.`,
        );
        await era.printAndWait(
          `${treve.sex}에게 모든 것을 걸어야 한다는 사실을 잊고 있던 자신은, 그 진심을 확실히 받아들이기 위해 힘껏 고개를 끄덕였다.`,
        );
        await era.printAndWait(
          `${treve.name}는 ${you.name}의 몸짓을 보고 눈을 가늘게 떴다.`,
        );
        await treve.say_and_wait("D'accord!");
        await era.printAndWait(
          `마지막으로 남은 눈물 한 방울이 노을빛을 반사했다.`,
        );
        await era.printAndWait(
          `지금 이곳에서, 두 사람 사이에는 마침내 단 하나의 소망이 있었다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  prix_lat_win_senior: (() => {
    const title = '정상으로, 그리고 다시 승리';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait(`높고 맑은 가을 하늘이 롱샹 위로 펼쳐졌다.`);
      await era.printAndWait(
        `세계 최고봉의 ${treve.uma_sex_title}들을 맞이하는 이 레이스에 어울리는 날씨였다.`,
      );
      await era.printAndWait(`늘 입던 코트를 걸치고 왔지만 조금 더웠다.`);
      await era.printAndWait(
        `관중석 맨 앞에서 난간을 붙잡는 것도 두 번째였다.`,
      );
      await era.printAndWait(
        `시간은 눈 깜짝할 사이에 흐른 듯했지만, 이곳에 다시 서기까지 겪은 모든 일은 두 사람에게 꼭 필요한 것이었다.`,
      );
      await era.printAndWait(`그 무게는 어느 때보다 컸다.`);
      await era.printAndWait(
        `그 모든 것이 ${you.name}이(가) 이곳에 있는 이유가 되어 지금 이 순간을 지탱하고 있었다.`,
      );
      await montjeu.say_and_wait(`이렇게 일찍 올 줄은 몰랐네.`);
      await era.printAndWait(
        `마부 옆에 선 인물이 ${you.name}에게 미소를 지었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 마침내 ${montjeu.name}에게 그때의 답을 보여 줄 수 있겠다고 생각했다.`,
      );
      await era.printAndWait(
        `두 사람은 나란히 게이트에 들어가는 ${treve.name}를 바라보았다.`,
      );
      await montjeu.say_and_wait(`전술은?`);
      era.printButton(`「새로운 건 없어.」`, 1);
      await era.input();
      await montjeu.say_and_wait(
        `……제정신이야? 네가 가장 잘 알잖아. ${treve.sex}의 특성을 이해하고 견제를 뚫어 왔을 텐데. 그러고도 필요한 대책을 세우지 않아도 되겠어?`,
      );
      await era.printAndWait(
        `${montjeu.name}를 본뜬 ${treve.sex}의 달리기는 바꾸기 어려웠다.`,
      );
      await era.printAndWait(
        `이미 ${
          treve.name
        }에 대한 대응이 전 세계의 ${treve.uma_sex_title}들 사이에서 진행되고 있다는 것을 알고 있었다.`,
      );
      await era.printAndWait(
        `그래도 ${treve.sex}에게 줄 수 있는 것은 달리 없었다.`,
      );
      era.printButton(`「그래도 ${treve.sex}를 이기게 할 거야.」`, 1);
      await era.input();
      await montjeu.say_and_wait(`……`);
      await era.printAndWait(
        `두 번째 개선문상. 복잡한 경사와 깊은 잔디, 2400미터의 무대.`,
      );
      await era.printAndWait(
        `굉음을 내며 달리는 ${treve.couple_title}과 관중들의 뜨거운 함성. 그 안에는 앞으로 프랑스 자체를 짊어질 ${treve.name}에 대한 기대도 적지 않았다.`,
      );
      await era.printAndWait(
        `올해 들어 아직 승리가 없었다. ${treve.sex}의 쇠퇴를 눈치챈 사람도 많았다.`,
      );
      await era.printAndWait(
        `하지만 그것을 알아도, 기도하는 사람들을 위해 멈추지는 않았다.`,
      );
      await era.printAndWait(
        `${treve.name}는 이 세상에서 가장 긴 2분 30초의 여정에 발을 내디뎠다.`,
      );
      await era.printAndWait(
        `불로뉴 숲을 빠져나가는 ${treve.couple_title}을 바라보며 팔짱을 꼈다. ${montjeu.name}는 허리를 펴고 주시했다.`,
      );
      await montjeu.say_and_wait(
        `……전술이 읽혔다는 건 알아. 그래도 선행 작전을 쓰지 않으면 ${treve.sex}의 승부는 시작되지 않아.`,
      );
      era.printButton(`「힘으로 뚫는다면?」`, 1);
      await era.input();
      await montjeu.say_and_wait(
        `무리야. 원래 자리다툼도 치열한 데다, 올해는 전년도 우승자라는 이름까지 짊어지고 있어. 지금 ${treve.name}는 완전히 집중 견제를 받고 있잖아.`,
      );
      await era.printAndWait(
        `실제로 선두 집단에 합류하는 데까지는 ${treve.name}도 성공했지만, 앞으로 나갈 길은 모두 막혀 있었다.`,
      );
      await era.printAndWait(
        `분명 막혀 있었다——최종 직선에 들어가기 전까지는.`,
      );
      await era.printAndWait(`코너를 돌아 레이스는 중반에 접어들었다.`);
      await era.printAndWait(
        `평소에는 선두 집단 앞에서 페이스를 만들었지만, ${treve.name}는 뒤로 밀려난 채 집단을 쫓고 있었다.`,
      );
      era.printButton(`「${montjeu.name}.」`, 1);
      await era.input();
      await montjeu.say_and_wait(`뭐?`);
      era.printButton(`「당신은 왜 선행 작전에 능한 건가요?」`, 1);
      await era.input();
      await era.printAndWait(
        `시선 끝에서 ${treve.sex}는 한 덩어리가 된 집단이 달리는 모습을 보며 낮게 말했다.`,
      );
      await montjeu.say_and_wait(
        `체력 배분과 각력이 내게 잘 맞는 것도 있지——그래, 가장 큰 이유는 내게 맞는 자리에 설 수 있었기 때문이야. 난 참을성이 좋은 편이 아니거든. 최종 직선까지 결판을 기다려야 하는 방식은 잘 맞지 않아.`,
      );
      await era.printAndWait(`${montjeu.name}는 담담히 앞을 응시했다.`);
      era.printButton(`설명한다`, 1);
      await era.input();
      await you.say_and_wait(
        `레이스에서는 심리적 압박이 상당히 크다. ${treve.name}에게도 어느 정도 버티는 힘은 있지만, 참을성이 좋다고는 할 수 없다. 그래서 ${treve.sex}는 줄곧 선행 작전을 써 왔다.`,
      );
      await montjeu.say_and_wait(`……줄곧, 그렇구나.`);
      await era.printAndWait(`${montjeu.name}는 무언가 깨달은 듯했다.`);
      await era.printAndWait(
        `기회는 언제나 있었다. 하지만 끝까지 확실한 근거를 가지고 결심하지 못했다.`,
      );
      await era.printAndWait(
        `그래서 첫 개선문상에서도 제안하지 않았고, 올해 G1에서도 그 전술을 쓰지 않았다.`,
      );
      await era.printAndWait(`하지만 지금이라면. 지금이야말로 결심할 때였다.`);
      await era.printAndWait(`폴스 스트레이트를 지나 최종 직선으로 향했다.`);
      await era.printAndWait(
        `${treve.name}는 여전히 표적이 되어 포위망에 갇혀 있었다.`,
      );
      await era.printAndWait(`난간 밖으로 몸을 내밀었다.`);
      era.printButton(`「${treve.name}！！」`, 1);
      await era.input();
      await era.printAndWait(`${treve.name}가 ${you.name}을(를) 살짝 보았다.`);
      await era.printAndWait(
        `대기실에서의 기억. ${you.name}의 작전은 이미 전달되어 있었다.`,
      );
      await era.printAndWait(
        `하지만 ${treve.sex}가 주저하지 않도록, 정면에서 ${treve.sex}의 눈을 보며 전했다.`,
      );
      await era.printAndWait(
        `승패에 앞서 ${you.name}은(는) ${
          treve.name
        }라는 ${treve.uma_sex_title}에게 자신의 꿈을 이루어 주길 바랐다.`,
      );
      era.printButton(`「보여 줘.」`, 1);
      await era.input();
      await era.printAndWait(
        `발끝으로 땅을 박차는 ${treve.sex}, 삼색 승부복을 입은 ${treve.sex}가 ${you.name}에게 손가락을 뻗었다.`,
      );
      await treve.say_and_wait(`——${you.actual_name}을(를) 위해.`);
      await era.printAndWait(
        `${treve.sex}는 ${you.name}이(가) 마침내 맡긴 기대를 짊어지고 끝없이 달렸다.`,
      );
      await era.printAndWait(
        `불안이 하나라도 남으면 ${treve.sex}에게 부담이 된다는 것을 ${you.name}은(는) 알고 있었다.`,
      );
      await era.printAndWait(`그렇기에 완벽한 상태로 ${treve.sex}를 내보냈다.`);
      await era.printAndWait(
        `선행 작전은 ${treve.name} 스스로 원했던 것이지만, 옆에 있는 ${you.name}은(는) 알고 있었다. ${treve.sex}의 다리에는 어떤 승부수에도 통할 힘이 있다는 것을.`,
      );
      await era.printAndWait(
        `그래서 ${you.name}은(는) 이것을 ${treve.sex}에게 맡겼다.`,
      );
      await era.printAndWait(
        `${
          treve.name
        }는 포위망 앞쪽의 ${treve.uma_sex_title} 앞에서 순간적으로 속도를 늦추며 물러났다. 마지막 승부처인 최종 직선에서 벌어진 예상 밖의 행동에 상대는 뒤를 돌아보았다.`,
      );
      await era.printAndWait(
        `하지만 ${
          treve.name
        }는 이미 그곳에 없었다. 다른 ${treve.uma_sex_title}들을 피해 가장 바깥쪽으로 달리고 있었다.`,
      );
      await era.printAndWait(
        `그리고 갇혀 있는 동안 아껴 둔 체력이 순식간에 폭발했다.`,
      );
      await era.printAndWait(
        `마지막 순간의 집중력은 날카롭게 벼린 칼끝처럼 선두를 겨누었다.`,
      );
      await era.printAndWait(
        `${treve.name}는 바깥쪽에서 단숨에 치고 올라갔다.`,
      );
      await era.printAndWait(
        `지금까지와는 전혀 다른 전술에 관중들의 술렁임이 크게 번졌다.`,
      );
      await montjeu.say_and_wait(`선입……!?`);
      await era.printAndWait(
        `이것은 ${treve.name}의 유연함이라면 언제든 해낼 수 있었던 전법이었다.`,
      );
      await era.printAndWait(
        `다만 포위망을 피하려면 일단 뒤로 물러났다가 다시 출발하는 우회로를 택할 수밖에 없었다.`,
      );
      await era.printAndWait(
        `최종 직선에서 상대들이 틈을 내주는 것을 두려워한다는 점을 이용했다.`,
      );
      await era.printAndWait(`${treve.name}는 순식간에 선행 집단을 넘어섰다.`);
      await era.printAndWait(
        `선행 외의 작전으로 기습한 ${treve.sex}는 달아나려던 상대들을 당황하게 했다.`,
      );
      await era.printAndWait(
        `완벽히 가두었다고 생각한 상대가 마지막 순간에 덮쳐 왔다.`,
      );
      await era.printAndWait(
        `${treve.sex}는 ${montjeu.name}의 그림자마저 넘어 트랙 앞쪽으로 달렸다.`,
      );
      await era.printAndWait(
        `푸른 망토가 펄럭였고, ${you.name}은(는) ${treve.sex}의 뒷모습을 뚫어지게 바라보았다.`,
      );
      await era.printAndWait(
        `${treve.name}는 모든 예상을 넘어 모든 과거를 떨쳐 냈다.`,
      );
      await era.printAndWait(
        `그리고 피어난 모든 희망을 짊어지고 인간이 닿을 수 없는 곳으로 달려갔다.`,
      );
      await era.printAndWait(
        `아무리 많은 소망을 잊어도, 마음 어딘가에서는 반드시 기억하고 있다.`,
      );
      await era.printAndWait(`이 세상을 바꿀 빛을 줄곧 찾아 헤매던 누군가.`);
      await era.printAndWait(`그리고 마침내 ${treve.sex}와 만났다.`);
      await era.printAndWait(`${treve.name}의 외침이 들렸다.`);
      await era.printAndWait(
        `${
          treve.sex
        }는 마지막 힘을 다해, 남은 거리가 100미터 아래로 줄어든 최후의 순간 선두의 ${treve.uma_sex_title}를 넘어섰다. 시간이 멈춘 것처럼 느껴질 정도였다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 지금까지 두 사람이 쌓아 온 모든 노력이 결실을 맺었다고 생각했다.`,
      );
      await era.printAndWait(
        `게시판을 지나치는 마지막 발소리가 무엇보다 크게 이 무대에 울려 퍼졌다.`,
      );
      await era.printAndWait(
        `프랑스 경마 역사상 삼십육 년 만의 위업. 개선문상 연패를 이룬 것은 아무도 선택하지 않았던 ${treve.uma_sex_title}와, 아무도 선택하지 않았던 이국의 트레이너였다.`,
      );
      await era.printAndWait(
        `가볍게 숨을 들이쉬고 내쉬었다. 잔디 향이 가득 차올라 마음까지 적시는 듯했다.`,
      );
      await era.printAndWait(
        `이곳에 있지 않았다면 결코 보지 못했을 것이 있었다.`,
      );
      await era.printAndWait(
        `그것을 위해 이 일을 줄곧 계속해 오길 정말 잘했다고, ${you.name}은(는) 생각했다.`,
      );
      await era.printAndWait(`우레와 같은 갈채와 축복 속에서.`);
      await montjeu.say_and_wait(`고개를 들어.`);
      await era.printAndWait(
        `${montjeu.name}의 말대로 고개를 들자 어느새 그곳에 선 ${treve.name}와 눈이 마주쳤다.`,
      );
      await era.printAndWait(
        `${treve.sex}는 거칠게 숨을 몰아쉬며 땀을 흘렸다——잠시 호흡을 가다듬고는 ${you.name}에게 오른손을 뻗었다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) ${treve.sex}의 의도를 몰라 당황해도, ${treve.name}는 아랑곳하지 않고 난간 너머로 몸을 내밀었다.`,
      );
      await era.printAndWait(
        `멍하니 있는 ${you.name}의 앞에서 ${treve.name}는 장난꾸러기처럼 웃으며 ${you.name}의 손을 잡아 난간 너머로 끌어 올렸다.`,
      );
      await treve.say_and_wait(`자, 어서요!`);
      era.printButton(`「늙은이한테는 좀 살살 해 줘.」`, 1);
      await era.input();
      await treve.say_and_wait(
        `다음은 삼연패예요. 시간이 없어요! 그리고 저랑 사귀어 주세요!`,
      );
      await era.printAndWait(
        `${you.name}은(는) 흩어진 과거를 뒤로하고 눈에 깊이 새겨진 ${treve.sex}의 모습을 떠올렸다.`,
      );
      await era.printAndWait(`마지막 직선. 모든 것을 떨쳐 내는 듯한 빛.`);
      await era.printAndWait(
        `언젠가 ${treve.sex}는 그마저 뛰어넘는 달리기를 사람들에게 보여 주리라.`,
      );
      await era.printAndWait(
        `반드시 ${you.name}을(를) 상상도 못 할 곳으로 데려가 줄 것이다.`,
      );
      await era.printAndWait(
        `${treve.sex}의 미소를 보며 ${you.name}은(는) 생각했다. 이것이 지금 자신의 전부라고.`,
      );
      await era.printAndWait(`가을 하늘은 끝없이 상쾌했다.`);
    };
    f.title = title;
    return f;
  })(),
  we_95_42: (() => {
    const title = '영원히 당신의 것';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, you, callname) => {
      const ret = [];
      await era.printAndWait(
        `휴일 아침, 갑자기 인터폰이 울려 ${you.name}은(는) 현관으로 향했다.`,
      );
      await treve.say_and_wait(`살뤼! 트레이너님, 저 왔어요!`);
      era.print(`${you.name}은(는) 결정했다.`);
      era.printButton(`문을 닫는다`, 1);
      era.printButton(`……잘못 봤나? (호감-10, 연모+1)`, 2);
      ret.push(await era.input());
      await treve.say_and_wait(`잠깐만요, 저예요!`);
      era.printButton(`사기인가?`, 1);
      era.printButton(`「돌아가, 돈 없어!」(호감-10, 연모+1)`, 2);
      ret.push(await era.input());
      await era.printAndWait(
        `${you.name}은(는) 문을 닫으려 했지만, 안타깝게도 인간의 팔 힘으로는 ${treve.uma_sex_title}에게 이길 수 없었다.`,
      );
      await era.printAndWait(`문은 강제로 열렸다.`);
      await era.printAndWait(
        `${treve.child_sex_title}는 그만 현관에서 엉덩방아를 찧었다.`,
      );
      await era.printAndWait(
        `프랑스의 공주이자 천재 ${treve.teen_sex_title}(이)면서도 ${
          you.name
        }의 앞에서 머리카락을 정돈하는 모습은 웃음이 나올 것 같았다.`,
      );
      await era.printAndWait(
        `옷차림은 여전히 반바지에 티셔츠였지만, 처음 만났을 때보다 키가 꽤 자랐다.`,
      );
      await era.printAndWait(
        `서양인 특유의 피부는 투명해 보였고, 얼굴에는 아직 앳된 기색이 조금 남아 있었다.`,
      );
      await era.printAndWait(
        `두 사람은 개선문상에서 우승했다. 그 뒤로 텔레비전과 잡지에 자주 등장하고 브랜드와 협업하며 단숨에 화제의 인물이 되었다.`,
      );
      await treve.say_and_wait(`제가 어디에 있을지는 제가 정해요, 트레이너님.`);
      await era.printAndWait(
        `시선이 맞부딪쳤다. 그 주장에 대해서는 ${treve.sex}의 말에도 일리가 있었다. ${treve.name}는 자랑스러운 표정을 지었다.`,
      );
      await era.printAndWait(
        `${treve.name}는 세계 최강의 ${treve.uma_sex_title}였다. ${
          you.name
        }은(는) 그때의 광경을 잊을 수 없었다.`,
      );
      await era.printAndWait(`푸른색 승부복을 입고 결승선을 통과하던 순간.`);
      await era.printAndWait(
        `중학생다운 솔직함과 정직함, 나이에 걸맞은 지기 싫어하는 마음, 활력이 넘치는 ${treve.uma_sex_title}의 느낌.`,
      );
      await era.printAndWait(
        `그때의 아이는 자랐다. 키가 커지고 점점 늘씬한 모델 같은 체형이 되어 가고 있었다.`,
      );
      await era.printAndWait(
        `머리카락은 끝까지 가지런히 정돈되어 인형처럼 단정했다.`,
      );
      await era.printAndWait(`그야말로 미인이었다.`);
      await treve.say_and_wait(`${callname}.`);
      await treve.say_and_wait(`돌아가고 싶지 않아요.`);
      await treve.say_and_wait(`하지만 당신이 싫다면 바로 갈게요.`);
      await era.printAndWait(
        `${treve.sex}의 눈에 비친 것은 ${you.name}의 엉망인 얼굴이었다. 애초에 막 일어난 참이었으니까.`,
      );
      era.print(`${you.name}의 대답은……`);
      era.printButton(`「……해야 할 일을 해 줘.」`, 1);
      era.printButton(`「밖을 좀 걸을까.」(호감+15)`, 2, {
        disabled: era.get('love:205') < 50,
      });
      ret.push(await era.input());
      if (ret[2] === 1) {
        await treve.say_and_wait(`……알겠어요.`);
        await era.printAndWait(
          `그것이 정석적인 답일지도 모른다. 하지만 최선은 아닐지도 모른다.`,
        );
        await era.printAndWait(
          `${treve.name}는 간단히 대답하고 왔던 길을 되돌아갔다.`,
        );
        await era.printAndWait(
          `${you.name}의 말대로 돌아가는 ${treve.sex}의 뒷모습이 멀어졌다.`,
        );
        await era.printAndWait(
          `그것이 ${you.name}이(가) 바라던 모습인데도 왠지 보고 있을 수가 없었다.`,
        );
        await era.printAndWait(`왜일까. 아니, 이유는 명백했다.`);
        await era.printAndWait(
          `——몸과 마음을 꿰뚫는 허탈감이 천천히 안쪽을 태웠다.`,
        );
        await era.printAndWait(
          `손을 뻗지 않아도 괜찮을까. 어디선가 그런 목소리가 들렸다.`,
        );
        await era.printAndWait(
          `뻗고 싶었지만 ${you.name} 스스로 주저했다. 결국 ${you.name}은(는) 아무것도 하지 않았다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 마음을 돌리려는 듯 집으로 돌아갔다.`,
        );
      } else {
        era.drawLine();
        await era.printAndWait(
          `${treve.name}는 여전히 반바지에 검은 티셔츠 차림으로 선글라스를 쓰고 있었다.`,
        );
        await era.printAndWait(
          `팬들에게 들키고 싶지 않은지 특유의 밤색 머리를 지나치게 단정히 정돈한 탓에 오히려 주변의 시선을 끌었다.`,
        );
        await era.printAndWait(
          `${treve.uma_sex_title}의 아름다움은 대부분 털빛이 결정한다고들 한다.`,
        );
        await era.printAndWait(
          `물론 생김새도 보지만, 대체로 털이 차지하는 비중이 더 크다.`,
        );
        await era.printAndWait(
          `${treve.name}의 머리카락과 꼬리는 이 주변의 ${treve.uma_sex_title}들과 전혀 달랐다.`,
        );
        await era.printAndWait(`변장이 의미가 없잖아……`);
        await era.printAndWait(`${treve.name}는 차창 밖 풍경을 바라보았다.`);
        await era.printAndWait(
          `한동안 흔들리는 차를 타고 가다가 환승하려고 내렸다. 인파 속에서 헤어지지 않도록 ${you.name}은(는) ${treve.name}의 손을 잡고 이끌었다.`,
        );
        await era.printAndWait(
          `문득 돌아보니 사람들 사이에 섞인 ${treve.sex}의 얼굴에는 진흙 속에 핀 꽃처럼 아름다운 미소가 있었다.`,
        );
        await era.printAndWait(
          `휴일이라 행인이 많았다. 가족 단위로 나온 사람들도 많았다.`,
        );
        await era.printAndWait(
          `엄마 손을 잡은 아이가 두리번거리며 주변을 구경하고 있었다. ${treve.name}는 그 아이에게서 좀처럼 눈을 떼지 못했다.`,
        );
        await era.printAndWait(
          `${treve.sex}는 촉촉한 눈으로 간청하듯 진지하게 말했다.`,
        );
        await treve.say_and_wait(`조금만 더요. 정말 조금만 더면 돼요.`);
        await era.printAndWait(
          `결국 향한 곳은 경마장뿐이었다. 오이 경마장의 레이스를 보러 왔다.`,
        );
        await treve.say_and_wait(`역시 레이스네요!`);
        era.printButton(`「……」`, 1);
        await era.input();
        await era.printAndWait(
          `${treve.name}는 흥미롭게 레이스를 보고 있었다.`,
        );
        await era.printAndWait(`재미있었다. 지금 열리는 것은 G3였다.`);
        era.printButton(`「조금 의외네.」`, 1);
        await era.input();
        await treve.say_and_wait(`뭐가요?`);
        era.printButton(
          `「개선문의 ${treve.uma_sex_title}가 G3에 관심을 갖다니.」`,
          1,
        );
        await era.input();
        await treve.say_and_wait(`……그럴지도 모르겠네요.`);
        await treve.say_and_wait(
          `당신도 트레이너라면 아실 거예요. ${treve.couple_title}의 눈에는 이것도 개선문상과 같아요.`,
        );
        era.printButton(`「너무 과장한 거 아니야?」`, 1);
        await era.input();
        await treve.say_and_wait(`……`);
        await era.printAndWait(
          `${treve.name}의 말에는 어느새 무게가 더해져 있었다.`,
        );
        await era.printAndWait(
          `몇 년 전의 ${you.name}에게는 ${treve.sex}에 대해 말할 자격이 없었다.`,
        );
        await treve.say_and_wait(
          `${treve.couple_title}에게는 큰 무대예요. 그 무대를 위해 준비하고 이곳에 와요. 자신의 영혼을 걸어요. 그러니까——`,
        );
        await you.say_and_wait('골인했네.', true);
        era.printButton(`「……그런가?」`, 1);
        await era.input();
        await era.printAndWait(
          `${you.name}에게 이것은 다른 경기와 다를 것 없는 G3였다.`,
        );
        await era.printAndWait(
          `평범한 준비, 평범한 노력, 조금씩 빛나는 순간. 그런 레이스였다.`,
        );
        await era.printAndWait(
          `${you.name}이(가) 트레이너의 입장에서 너무 많은 레이스를 보아 온 탓에 소중한 것을 놓친 것일지도 모른다.`,
        );
        await treve.say_and_wait(`……하하.`);
        await era.printAndWait(`메마른 웃음.`);
        await treve.say_and_wait(`……`);
        await treve.say_and_wait(`……`);
        await era.printAndWait(
          `경마장은 한산했다. 레이스는 끝났다. 하지만 ${you.name}은(는) 전혀 일어나지 못한 채 납처럼 무거운 무릎을 구부리고 관중석에 앉아 있었다.`,
        );
        await era.printAndWait(`바람이 차가웠다.`);
        era.drawLine();
        await era.printAndWait(
          `깊은 밤, ${you.name}과(와) ${treve.name}는 도쿄의 거리를 걸었다.`,
        );
        await treve.say_and_wait(`……재팬컵에 나가고 싶어요.`);
        await treve.say_and_wait(`……`);
        await era.printAndWait(
          `${treve.name}가 이제 중요한 이야기를 하려 한다는 것은 ${you.name}에게도 전해졌다.`,
        );
        await treve.say_and_wait(`당신을 잊을 수 없어요, 트레이너님.`);
        await treve.say_and_wait(
          `나라나 인종 같은 건 잘 모르겠어요. 하지만 트레이너님과 함께라면 즐거울 것 같아요.`,
        );
        await era.printAndWait(`이것이 ${you.name}의 죄목이었다.`);
        await era.printAndWait(
          `가슴이 희미하게 아파 왔지만 ${you.name}은(는) 아무렇지 않은 척했다.`,
        );
        await treve.say_and_wait(`사랑해요.`);
        await treve.say_and_wait(`언제까지나 사랑해요.`);
        await era.printAndWait(`말은 막힘없이 흘러나왔다.`);
        await era.printAndWait(
          `몇 번이나 연습했을 것이 틀림없었다. ${you.name}을(를) 위해, 일부러.`,
        );
        await era.printAndWait(
          `머릿속이 새하얘졌다. 가슴이 두근거렸다. 숨도 거칠어진 걸까.`,
        );
        await era.printAndWait(
          `${treve.sex}가 속마음을 드러낼 때마다 ${you.name}의 마음도 드러났다.`,
        );
        await era.printAndWait(
          `실타래를 풀듯 ${treve.name}의 말은 장막을 한 겹씩 벗겨 ${you.name}의 마음까지 숨김없이 드러냈다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 어찌할 수 없는 안타까움을 느꼈다.`,
        );
        await era.printAndWait(`${treve.name}는 거듭 말을 이었다.`);
        await treve.say_and_wait(
          `……저기, ${
            you.actual_name
          }. 우리가 트레이너와 ${treve.uma_sex_title}가 아니었다면 만날 수 있었을까요?`,
        );
        era.printButton(`「……만나지 못했겠지.」`, 1);
        await era.input();
        await treve.say_and_wait(`그렇겠죠.`);
        await treve.say_and_wait(`……`);
        await era.printAndWait(
          `서 있는 자리에서 하늘을 올려다보니 일등성 몇 개만 빛나고 있었다.`,
        );
        await era.printAndWait(`도심에서 바라보는 초라한 별하늘.`);
        await era.printAndWait(
          `이 낮은 별하늘 아래에서 태어나 아마도 이곳에서 죽을 ${you.name}과(와), 온 하늘을 채운 별처럼 빛나는 미래를 품은 ${treve.sex}.`,
        );
        await era.printAndWait(`불균형하다는 것은 분명했다.`);
        await era.printAndWait(
          `${you.name}은(는) 금방이라도 울 것 같은 ${treve.name}에게 말했다.`,
        );
        await era.printAndWait(`밤바람이 불고 해 질 무렵이 다가왔다.`);
        await era.printAndWait(
          `${treve.name}의 눈은 처음 만났을 때와 거의 다르지 않았다.`,
        );
        await era.printAndWait(
          `지금까지 수없이 되짚었던 기억 속의 ${treve.sex}와 같았다.`,
        );
        await era.printAndWait(
          `하지만 달라진 것도 있었다. ${treve.sex}에게는 레이스 이외의 것에 대한 관심이 싹텄다.`,
        );
        await era.printAndWait(`시간은 모든 것을 바꾼다.`);
        await era.printAndWait(
          `${you.name}은(는) ${treve.sex}와 달리 ${treve.sex}의 발목을 잡을 뿐이었다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) ${treve.uma_sex_title}의 발목을 잡고 싶지 않았다.`,
        );
        await era.printAndWait(`그러니——`);
        era.printButton(`「헤어지자.」`, 1);
        await era.input();
        await treve.say_and_wait(`읏……!`);
        await you.say_and_wait(
          `이제 내 앞에 나타나지 마. 일이 아니라면 일본에도 오지 마. 사라져 줘.`,
        );
        await treve.say_and_wait(`왜, 왜 그런 말을 하세요!`);
        await you.say_and_wait(`……`);
        await treve.say_and_wait(
          `제 기억 속 트레이너님은 다정했어요. 줄곧 그렇게 생각했는데——`,
        );
        await you.say_and_wait(`그건 착각이야.`);
        await treve.say_and_wait(`읏……!`);
        await you.say_and_wait(
          `……곧 밤이야. 자고 일어나면 아침이겠지. 그러면 내일이야. 잘 가——`,
        );
        await treve.say_and_wait(`기다려요!`);
        await you.say_and_wait(`……`);
        await treve.say_and_wait(
          `적어도, 적어도 마음은…… 트레이너님의 마음만이라도——`,
        );
        era.printButton(`「모르겠어.」`, 1);
        await era.input();
        await treve.say_and_wait(`아……!`);
        await era.printAndWait(
          `${you.name}은(는) 최악의 인생에 어울리는 말을 내뱉었다.`,
        );
        await treve.say_and_wait(`거짓말쟁이!`);
        await you.say_and_wait(`……`);
        await era.printAndWait(
          `${you.name}은(는) ${treve.name}가 등 뒤로 떠나는 발소리를 들었다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 비틀거리며 도쿄 경마장으로 왔다.`,
        );
        await era.printAndWait(
          `경마장은 차가웠다. 주변의 소란이 되살아나는 듯했다. 차가 달리는 소리와 나뭇잎 흔들리는 소리.`,
        );
        await era.printAndWait(`십일월이었다. 재팬컵이 가까워지고 있었다.`);
        await era.printAndWait(
          `${you.name}은(는) 한동안 그곳에 서 있었다. 가을의 경마장에 홀로.`,
        );
        await era.printAndWait(`${you.name}의 곁에는 아무도 없었다.`);
        await era.printAndWait(`그것으로 됐다. 그러니——`);
        era.printButton(`「잊어 줘……」`, 1);
        await era.input();
        await era.printAndWait(`——몇 분이나 지났을까.`);
        await era.printAndWait(
          `하늘은 이미 어두워졌다. 밤이 도쿄 경마장에 내려앉았다.`,
        );
        await era.printAndWait(`방송을 들으니 곧 문을 닫을 시간인 듯했다.`);
        await era.printAndWait(`가슴에 구멍이 뚫린 것 같았다.`);
        await era.printAndWait(
          `${you.name}이(가) 떠나려던 순간…… 출입구에 ${treve.name}가 서 있었다.`,
        );
        era.printButton(`「왜 여기에……」`, 1);
        await era.input();
        await era.printAndWait(
          `${treve.name}는 엄청난 각력으로 ${you.name}에게 달려들었다. ${treve.sex}의 머리가 창처럼 ${you.name}의 배에 꽂혔다. 폐가 찌그러지는 듯했다.`,
        );
        await era.printAndWait(`아팠다. 무척 아팠다.`);
        await era.printAndWait(`뼛속까지 파고드는 통증이 신경을 자극했다.`);
        await era.printAndWait(
          `${treve.name}는 ${you.name}의 배를 끌어안았고, ${treve.sex}는——`,
        );
        await era.printAndWait(`울었다.`);
        await era.printAndWait(
          `사파이어처럼 아름다운 눈이 일그러지고, 찢어질 듯 미간을 찌푸렸다.`,
        );
        await treve.say_and_wait(
          `트레이너님, 바보! Stupide idiot. Pourquoi dis-tu des choses aussi horribles! (정말 바보! 어떻게 그런 심한 말을 해요!)`,
        );
        era.printButton(`「잠깐! 무슨 말인지 모르겠어!——」`, 1);
        await era.input();
        await era.printAndWait(
          `${treve.name}는 그대로 ${you.name}의 품에서 울었다.`,
        );
        await era.printAndWait(
          `제멋대로 달려든 탓에 다친 사람은 ${you.name}인데도 ${treve.sex}가 울고 있었다.`,
        );
        await era.printAndWait(
          `당연한 일이었다. ${you.name}이(가) ${treve.sex}의 마음에 상처를 줬으니까.`,
        );
        await era.printAndWait(
          `경마장을 정리하려던 직원이 다가왔다가 놀라서 이쪽을 한 번 보았다.`,
        );
        await era.printAndWait(
          `분명 제정신 아닌 여자와 나쁜 남자, 연인끼리 다투는 중이라고 생각했겠지.`,
        );
        await era.printAndWait(`직원은 곧 눈을 돌리고 하던 일로 돌아갔다.`);
        await era.printAndWait(
          `조명으로 장식된 경마장 한편에서 두 사람은 웅크리고 앉아 있었다.`,
        );
        await treve.say_and_wait(
          `제가 어떤 마음으로 여기 서 있었는지 아세요! 데리러 올 거면 빨리 오셨어야죠!`,
        );
        era.printButton(`「어!? 잠깐, 기다리고 있었던 건 너잖아——」`, 1);
        await era.input();
        await treve.say_and_wait(
          `시끄러워요, 시끄러워요! 변명은 듣기 싫어요, 바보!`,
        );
        era.printButton(`「어어어?」`, 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 정말로 ',
          treve.uma_sex_title,
          ' 특유의 괴력에 짓눌릴 것 같아 ',
          treve.get_colored_name(),
          '의 등을 가볍게 두드렸다.',
        ]);
        await era.printAndWait(
          `『abandonne』(그만해)라고 말했는데도 ${treve.name}는 조금도 떨어지려 하지 않았다. 통곡하는 ${treve.sex}는 오히려 팔에 힘을 더 주었다.`,
        );
        await era.printAndWait(
          `자업자득일지도 모른다………… 하지만 정말 갈비뼈가 부러질 것 같았다.`,
        );
        await treve.say_and_wait(`어느 쪽이에요?`);
        era.printButton(`「？」`, 1);
        await era.input();
        await treve.say_and_wait(`저를 사랑하세요!? 사랑하지 않으세요!?`);
        era.printButton(`「그런 문제가 아니야——」`, 1);
        await era.input();
        await treve.say_and_wait(`그런 문제예요!`);
        era.printButton(`「사랑하지 않았다면 이렇게 곤란하지도 않았어.」`, 1);
        era.printButton(`「좋아하니까 곤란한 거야!」`, 2);
        await era.input();
        await era.printAndWait(`${treve.name}는 물 만난 물고기 같았다.`);
        await treve.say_and_wait(
          `그럼 어서 결혼식을 올려요! 약혼하고, 반지도 사고…… 『스승님』도 분명 축복해 주실 거예요!`,
        );
        await treve.say_and_wait(
          `프랑스라면 성당이겠죠? 일본이어도 좋아요. 새하얀 옷을 입고 절 앞에서 사랑을 맹세할게요!`,
        );
        era.printButton(`「절이 아니라 신사야.」`, 1);
        await era.input();
        await era.printAndWait(
          `${you.name}은(는) 혼자 신이 난 ${treve.name}를 말리려고 ${treve.sex}의 어깨를 붙잡았다.`,
        );
        await treve.say_and_wait(`대담하네요……`);
        await treve.say_and_wait(`밖에서라니…… 그래도 당신이라면——`);
        era.printButton(
          `「이상한 소리 하지 마! 결혼 이야기를 한 게 아니잖아!」`,
          1,
        );
        await era.input();
        await treve.say_and_wait(
          `그러니까 먼저 연인이 되자는 거군요. 감동했어요!`,
        );
        await treve.say_and_wait(
          `주변 사람들도 분명 이해하고 받아들여 줄 거예요! 안 그러면 아이가 정말 힘들어질 테니까요!`,
        );
        era.printButton(`「난 유럽인이 아니야.」`, 1);
        await era.input();
        await treve.say_and_wait(`인종이 그렇게 중요해요!?`);
        era.printButton(`「중요하지!?」`, 1);
        await era.input();
        await treve.say_and_wait(
          `당신의 인종이나 외모를 보고 사랑에 빠진 게 아니에요. 마음을 사랑한 거예요!`,
        );
        await treve.say_and_wait(
          `아시아인? 그래서 뭐가 어때서요? 떠드는 사람한테는 큰 소리로 『시끄러워』라고 할 거예요! 아무도 우리를 방해할 수 없어요!`,
        );
        await treve.say_and_wait(`제 가치를 멋대로 정하지 마세요!`);
        await treve.say_and_wait(
          `제 가치는 제가 정해요. 미래도요! 좀 자신만만해지시면 안 돼요? 당신과 결혼해도 저는 달라지지 않아요. 성가신 소리를 하는 사람이 있으면 머리를 비틀어 버릴 거예요!`,
        );
        era.printButton(`「그건 좀……」`, 1);
        era.printButton(`「그 정도까지는……」`, 2);
        await era.input();
        await era.printAndWait(
          `그렇게 울어서 퉁퉁 부은 얼굴로도 ${treve.name}는 고결하게 서 있었다.`,
        );
        await era.printAndWait(
          `화장이 지워져도 ${treve.sex}는 아름다웠다. 밤을 성스럽게 비추는 달처럼.`,
        );
        await treve.say_and_wait(
          `저는 천재 ${treve.uma_sex_title}예요! 웬만한 일은 fermez-la, 입 다물라는 한마디로 끝나요!`,
        );
        era.printButton(`「널 힘들게 하고 싶지 않아.」(호감+10, 연모+1)`, 1);
        era.printButton(`「이해해 줘……」`, 2);
        ret.push(await era.input());
        await treve.say_and_wait(
          `모르겠어요, 하나도 모르겠어요! 좋아한다면 저를 기쁘게 해 주세요! 함께 있겠다고 말했잖아요! 저를 행복하게 해 줄 수 있는 사람은 당신뿐이라고요!`,
        );
        era.printButton(
          `「『행복하게 해 줄 수 있는 사람은 당신뿐』…… 그게 청혼이잖아!」`,
          1,
        );
        await era.input();
        await treve.say_and_wait(`아까는 아니었어요! 지금이 청혼이에요!`);
        era.printButton(`「영문을 모르겠네!」`, 1);
        await era.input();
        await treve.say_and_wait(`영문을 모를 만큼 좋아한다고요!`);
        await era.printAndWait(
          `서로의 외침이 도쿄의 밤 한구석에 울려 퍼졌다. 둘 다 숨이 찼지만 눈은 피하지 않았다.`,
        );
        await treve.say_and_wait(
          `마음 한구석에서는 줄곧 당신을 쫓고 있었어요! 생각하지 않으려 해도 안 됐어요! 트레이너님과 이야기했던 날들, 그 기억이 녹화 영상처럼 반복된다고요!`,
        );
        era.print(`${you.name}도……`);
        era.printButton(`「줄곧 너를 생각했어.」`, 1);
        era.printButton(`「계속 잊을 수 없었어……」`, 2);
        await era.input();
        await treve.say_and_wait(`그렇다면!`);
        await era.printAndWait(
          `${treve.name}는 무릎걸음으로 ${you.name}에게 다가가 ${you.name}의 멱살을 잡았다.`,
        );
        await era.printAndWait(
          `미인이 화내면 무섭다는 말은 사실인 모양이었다.`,
        );
        await era.printAndWait(
          `${treve.sex}의 프랑스계다운 단정한 얼굴이 코앞까지 다가왔다. ${treve.name}는 ${you.name}에게 입을 열었다. ${treve.sex}의 고함이 오이 경마장 앞에 울려 퍼졌다.`,
        );
        await treve.say_and_wait(`당신, 바보예요.`);
        era.printButton(`「바보 아니야.」`, 1);
        await era.input();
        await treve.say_and_wait(
          `아니요, 바보예요! 약해도 괜찮아요…… 한심하다면 손을 맞잡고 지탱하면 돼요. 당신이 책임을 버리지 않는다면, 저는 더더욱 버릴 수 없어요.`,
        );
        await treve.say_and_wait(
          `트레이너와 ${treve.uma_sex_title}의 관계는 대등해요. 우리는 전력으로 달리고, 트레이너는 이끌어 줘요. 어느 쪽도 빠져서는 안 되는 부부 같은 거예요.`,
        );
        await treve.say_and_wait(
          `그러니까…… 흑, 흐윽, 우리는 서로에게 이끌리는 거예요. 그렇죠?`,
        );
        await era.printAndWait(
          `${you.name}은(는) 자신보다 열 살 어린 ${treve.child_sex_title}를 울리고 말았다.`,
        );
        await era.printAndWait(
          `밤은 조금 쌀쌀했다. 낮에 더웠기에 옷차림도 얇았다.`,
        );
        await era.printAndWait(
          `그래도 둘이 기대앉아 작은 벌레들처럼 서로의 체온을 나누면 춥지 않았다.`,
        );
        await era.printAndWait(
          `${treve.name}는 여전히 걱정스러운 얼굴이었고, ${you.name}은(는) ${treve.sex}의 머리를 쓰다듬었다.`,
        );
        era.printButton(`「조금 추워?」`, 1);
        await era.input();
        await treve.say_and_wait(`……네.`);
        era.printButton(
          `「우선 네가 묵는 호텔로 가자. 이러다 감기 걸리겠어.」`,
          1,
        );
        await era.input();
        await treve.say_and_wait(`네.`);
        await era.printAndWait(
          `${treve.sex}는 ${you.name}의 말대로 함께 걸었다.`,
        );
        await era.printAndWait(`반짝이는 조명이 두 사람의 뒷모습을 비췄다.`);
        era.drawLine();
        era.printButton(`「${treve.name}, 이게 도대체 무슨……!?」`, 1);
        await era.input();
        await treve.say_and_wait(
          `${treve.child_sex_title}를 방에 보낸 다음에 할 일은, 하나 뿐이라고 생각하지 않나요?`,
        );
        await era.printAndWait(
          `피부를 간신히 가리는 천이 풀리며, ${treve.name}의 바다처럼 푸른 눈에서 묘한 빛이 뿜어져 나온다.`,
        );
        await treve.say_and_wait(
          `Bonne soirée(좋은 밤을), ma cheri(사랑하는 그대)`,
        );
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} treve トレヴ
   * @param {CharaTalk} you プレイヤー
   */
  async we_95_42_end(treve, you) {
    await era.printAndWait(
      `방에서 마음을 가라앉힐 생각이었는데, 기다리고 있자니 목욕타월 차림의 ${treve.name}이 나타났다.`,
    );
    await era.printAndWait(`미성년자 간 음행이 시작된다.`);
    await era.printAndWait(
      `요컨대, 법이라는 뒷받침을 완전히 잃은 ${you.name}이(가) 세계 최강의 ${treve.sex}를 막을 수 있을 리가 없었고, 그대로 완전히 선을 넘었다.`,
    );
    await era.printAndWait(`${you.name}과(와) 담당자는 밤을 즐겼다.`);
    await treve.say_and_wait(`좋은 아침, 사랑하는 그대`);
    await treve.say_and_wait(`……`);
    await era.printAndWait(
      `옆에는 알몸인 ${treve.name}이(가) 있다. ${you.name}은(는) 이 상황에 안도했다.`,
    );
    era.printButton(`「……좋은 아침, 공주님.」`, 1);
    await era.input();
    await treve.say_and_wait(`어머, 인정한 거에요?`);
    await treve.say_and_wait(`……그래. 처음부터 이렇게 했어야 했네요.`);
    era.printButton(`「무서운 말은 하지 말아 줘.」`, 1);
    await era.input();
    await era.printAndWait(
      `문으로 비치는 아침 햇살을 받은 ${treve.name}은(는) 그림 속의 성모처럼 아름답다.`,
    );
    await era.printAndWait(
      `순백의 베일에 싸여, 엎드린 채 ${you.name}을(를) 바라보는 ${treve.sex}는 돌출된 부분만 가리고, 등을 무방비하게 드러내고 있다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 충동적으로 예술품 같은 ${treve.name}의 머리를 쓰다듬었다. ${treve.sex}의 유려한 머리카락이 손가락 사이로 스친다.`,
    );
    await treve.say_and_wait(`……♪`);
    await treve.say_and_wait(`……`);
    await era.printAndWait(
      `${treve.sex}의 미소 짓는 얼굴을 보며, ${you.name}은(는) 결심한다.`,
    );
    await treve.say_and_wait(
      `정말 좋아해. 지금까지 줄곧 당신을 생각했어. 이렇게 이야기하는 걸 꿈꿔 왔어.`,
    );
    era.printButton(`「나도 그래, ${treve.name}」`, 1);
    await era.input();
    await era.printAndWait(`미소 짓는 ${treve.sex}는 역시 아름답다.`);
    await treve.say_and_wait(`사랑해, 트레이너.`);
    era.printButton(`「그래, 사랑해. 나만의 ${treve.name}.」`, 1);
    await era.input();
    await era.printAndWait(
      `${treve.sex}가 사랑스럽게 ${you.name}의 손을 잡는 모습은 누가 봐도 성녀 같다.`,
    );
    await era.printAndWait(
      `${you.name}의 눈앞에 있는 애마는 아름다운 얼굴에 생기를 더하며 환하게 웃는다.`,
    );
  },
  palace: (() => {
    const title = (treve) => `${treve.sex}는 이루어진 아름다운 꿈`;
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, you, callname) => {
      await era.printAndWait(`${you.name}은(는) 어떤 소리를 들었다.`);
      await era.printAndWait(
        `어둠 속에서 눈을 뜨자 낯선, 아니 완전히 낯설지만은 않은 천장이 보였다.`,
      );
      await era.printAndWait(`머리가 붕 뜬 것 같아 상황이 이해되지 않았다.`);
      await era.printAndWait(`늘 있던 곳과는 전혀 다른 장소에 있는 듯했다.`);
      await era.printAndWait(
        `멍한 머리로 허공을 바라보고 있으니 은은한 향기가 코끝을 스쳤다.`,
      );
      await era.printAndWait(
        `이어서 한 명의 ${treve.teen_sex_title}가 갑자기 눈에 들어왔다.`,
      );
      await era.printAndWait(`부드러운 밤색 머리카락. 맑고 푸른 두 눈.`);
      await era.printAndWait(
        `그리고 ${treve.sex}의 얼굴에는 아기를 바라보듯 다정한 미소가 떠올라 있었다.`,
      );
      await treve.say_and_wait(`봉주르, 잘 주무셨어요?`);
      await era.printAndWait(
        `어루만지는 듯한 부드러운 목소리에 다시 졸음이 밀려왔다.`,
      );
      await era.printAndWait(
        `상대의 얼굴을 보고서야 ${you.name}은(는) 겨우 상황을 이해하고 정신을 차리려 했다.`,
      );
      await era.printAndWait(`하지만 따뜻한 손바닥이 살며시 눈을 덮었다.`);
      await treve.say_and_wait(`조금만 더 주무실래요? 아직 일러요.`);
      era.printButton(`「……아니, 일어나야지.」`, 1);
      era.printButton(`「너와 함께하는 아침을 즐기고 싶어.」(연모+1)`, 2);
      const ret = await era.input();
      await treve.say_and_wait(`후후, 그렇군요. 기뻐요.`);
      await era.printAndWait(`손바닥 안대가 벗겨지고 시야에 빛이 들어왔다.`);
      await era.printAndWait(
        `몸을 일으키자 ${treve.name}는 ${you.name}의 침대에 앉아 미소 짓고 있었다.`,
      );
      await era.printAndWait(
        `어딘가 아쉬운 느낌에 잠시 생각했지만, 이 정도면 충분할지도 몰랐다. 우선 해야 할 일부터 하자.`,
      );
      era.printButton(`「좋은 아침, ${treve.name}.」`, 1);
      await era.input();
      await treve.say_and_wait(`네, ${you.actual_name}!`);
      await era.printAndWait(`${treve.name}는 노래하듯 대답했다.`);
      era.drawLine();
      await era.printAndWait(
        `개선문상 이후 두 사람은 주로 해외 레이스에 출전해 왔다.`,
      );
      await era.printAndWait(
        `정확히는 평소 이상의 실력을 보여 준 결과, 해외를 주 무대로 삼게 되었다.`,
      );
      await era.printAndWait(
        `찰싹 달라붙는 ${treve.name}를 겨우 떼어 놓고 옷을 갈아입은 뒤 거실로 갔다.`,
      );
      await era.printAndWait(
        `식탁에는 맛있는 요리가 차려져 있었고, ${treve.name}가 ${you.name}을(를) 기다리고 있었다.`,
      );
      await era.printAndWait(`솔직히 놀랐다. ${treve.name}는 요리도 잘했다.`);
      await era.printAndWait(`자리에 앉아 여러 요리를 둘러보았다.`);
      await era.printAndWait(
        `참치와 안초비, 올리브 등을 넣어 푸짐하게 만든 샐러드.`,
      );
      await era.printAndWait(`따끈하고 진한 수프가 근사한 향을 풍겼다.`);
      await era.printAndWait(
        `어느 것 하나 눈길을 끌지 않는 것이 없었지만, 유독 두드러지는 음식이 있었다.`,
      );
      await era.printAndWait(`두툼한 햄과 치즈를 듬뿍 넣은 핫 샌드위치.`);
      await era.printAndWait(
        `${treve.name}에게 「잘 먹겠습니다」라고 말한 뒤 허겁지겁 먹기 시작했다.`,
      );
      await era.printAndWait(
        `진한 치즈 소스와 햄의 풍미. 고급 식당에서 먹었던 것과 같은 맛이었다.`,
      );
      await era.printAndWait(`——맛이 완전히 같았다. 이제야 생각났다.`);
      era.printButton(`「……이거 사 온 거야?」`, 1);
      await era.input();
      await treve.say_and_wait(`제가 만들었는데요?`);
      await treve.say_and_wait(`당신이 맛있게 드시길래 연구했어요!`);
      await era.printAndWait(`……이 아이가 천재라는 걸 잠시 잊고 있었다.`);
      await era.printAndWait(
        `하지만 이 정도로 재현해 내다니, 역시 ${treve.sex}답다.`,
      );
      await treve.say_and_wait(`……${callname}, 상을 줄 거지?`);
      await era.printAndWait(`미소 짓던 ${treve.name}이 이내 입을 벌린다.`);
      await era.printAndWait(
        `${you.name}은(는) 선명하게 붉은 입안과 혀를 보고, 어째서인지 심장이 멎는 듯하다.`,
      );
      await era.printAndWait(`봐서는 안 될 것을 보는 듯한 죄책감이 든다.`);
      await treve.say_and_wait(`아……♪`);
      await era.printAndWait(
        `그렇게 ${treve.name}은 귀와 꼬리를 움직이며, 기대에 차서 ${you.name}을(를) 바라본다.`,
      );
      await era.printAndWait(`……그러니까, 그렇게 해 달라는 뜻이다.`);
      await era.printAndWait(
        `조금 망설여지지만, 그러지 않으면 ${treve.sex}가 계속 입을 벌리고 있을 게 분명하다.`,
      );
      await era.printAndWait(
        `일단 샌드위치를 작게 떼어, 천천히 ${treve.sex}의 입에 넣어 준다.`,
      );
      await treve.say_and_wait(`음……`);
      await era.printAndWait(
        `${treve.name}은 입술을 다물며, ${you.name}의 손끝까지 살짝 머금는다.`,
      );
      await era.printAndWait(`생생한 감촉과 온기가 손끝에서 머리로 전해진다.`);
      await era.printAndWait(
        `그러고는 ${treve.sex}가 무언가 생각하며 입을 움직여, 한 입씩 삼킨다.`,
      );
      await treve.say_and_wait(`……음.`);
      await era.printAndWait(`눈을 감고 다시 입을 벌린다.`);
      await era.printAndWait(`한 번 더 해 달라고 할 줄은 몰랐다.`);
      await era.printAndWait(
        `죄책감과 보호 본능, 그리고 마음속의 자극.${you.name}은(는) 다시 샌드위치를 떼어 낸다.`,
      );
      await era.printAndWait(
        `두 번, 세 번, 네 번, ${treve.sex}의 입에 넣어 주는 동안 손끝이 점점 젖어 간다.`,
      );
      await era.printAndWait(
        `이윽고 접시에 있던 프랑스식 샌드위치가 사라지며, 금세 끝이 난다.`,
      );
      await treve.say_and_wait(`아, 네 몫까지 먹어 버렸네.`);
      era.printButton(`「괜찮아, 괜찮다니까, 응!?」`, 1);
      await era.input();
      await treve.say_and_wait(`응♪ 고마워♪`);
      await era.printAndWait(
        `${treve.name}은 활짝 웃으며 고마움을 전하고, 혀로 입술을 한 바퀴 훑는다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 젖은 손가락을 의식하지 않을 수 없다.`,
      );
      await era.printAndWait(
        `${treve.name}은 그 모습을 보며, 작게 중얼거린다.`,
      );
      await treve.say_and_wait(`……버릇될 것 같아.`);
      await era.printAndWait(`못 들은 척하자.`);
      era.drawLine();
      await treve.say_and_wait(`……또 밤까지 일하고 계셨네요.`);
      await era.printAndWait(
        `양어깨에 따뜻한 손이 얹히고 위에서 목소리가 들렸다.`,
      );
      await era.printAndWait(
        `올려다보니 목욕한 뒤의 온기가 남아 있는 ${treve.name}가 진지한 눈으로 ${you.name}을(를) 내려다보고 있었다.`,
      );
      await era.printAndWait(`이제 시간이 됐다. 방으로 돌아가야 했다.`);
      era.printButton('「오늘은 잘게. 잘 자, 베누스 파크.」', 1);
      await era.input();
      await treve.say_and_wait(`아……`);
      await era.printAndWait(`옷자락이 당겨졌다.`);
      await era.printAndWait(
        `돌아보니 ${treve.name}가 쓸쓸한 표정으로 ${you.name}의 옷자락을 붙잡고 있었다.`,
      );
      await era.printAndWait(
        `그 모습에 ${you.name}은(는) 작은 동물이 떠올랐다.`,
      );
      era.printButton(`「바로 잠들지는 못할 것 같네. 밤바람 좀 쐴까?」`, 1);
      await era.input();
      await treve.say_and_wait(`……좋아요!`);
      await era.printAndWait(`${treve.name}는 눈을 빛내며 꼬리를 흔들었다.`);
      await era.printAndWait(
        `이런 반응에도 익숙해졌구나, 하고 ${you.name}은(는) 생각하며 ${treve.sex}의 손을 잡았다.`,
      );
      await era.printAndWait(
        `그 달리기는 아름답고 멋졌다. 누구에게나 이상적인 달리기였다.`,
      );
      await era.printAndWait(`성녀처럼 맑은 ${treve.sex}.`);
      await era.printAndWait(`여신처럼 고결한 ${treve.sex}.`);
      await era.printAndWait(`조금은 칠칠맞고 의외로 친근한 ${treve.sex}.`);
      await era.printAndWait(
        `그리고 남들보다 외로움을 많이 타는 ${treve.sex}.`,
      );
      era.printButton(`「네가 곁에 있어 주기만 한다면——」`, 1);
      await era.input();
      await era.printAndWait(`간결하고 분명하게 전했다.`);
      await era.printAndWait(`${treve.name}에게 어울리는 말로.`);
      era.printButton(`「몇 번이고 네게 사랑을 전할게.」`, 1);
      await era.input();
      await era.printAndWait(`엄청난 말을 해 버린 것 같았다.`);
      await era.printAndWait(
        `${you.name}은(는) 식은땀이 연달아 나는 것을 느꼈지만, 말은 이미 입 밖으로 나와 버렸다.`,
      );
      await era.printAndWait(
        `${treve.name}는 귀와 꼬리를 바짝 세우고 눈을 동그랗게 뜬 채 얼굴을 새빨갛게 물들였다.`,
      );
      await era.printAndWait(
        `이윽고 어이없다는 듯, 체념한 듯 크게 한숨을 쉬었다.`,
      );
      await treve.say_and_wait(
        `……당신도 의외로 욕심이 많으시네요. 정말 제멋대로인 말을 하세요.`,
      );
      era.printButton(`「몰랐어? 트레이너는 다 이래.」`, 1);
      await era.input();
      await era.printAndWait(
        `누구나 담당 ${treve.uma_sex_title}를 영웅으로 만들고 싶어 한다.`,
      );
      await era.printAndWait(
        `영예를 차지한 다음 날이면 벌써 새로운 트로피를 찾는다.`,
      );
      await era.printAndWait(
        `트레이너라는 생물은 사실 ${treve.uma_sex_title}보다 탐욕스럽다.`,
      );
      await era.printAndWait(
        `그 말을 듣고 ${treve.name}는 아까보다 더 크게 한숨을 쉬더니 두 손을 뻗었다.`,
      );
      await era.printAndWait(
        `살며시 손을 ${you.name}의 양 볼에 대고 가만히 ${you.name}을(를) 바라보았다.`,
      );
      await treve.say_and_wait(`어쩔 수 없네요. 알겠어요. 당신 곁에 설게요.`);
      await era.printAndWait(
        `그렇게 말하며 ${treve.name}는 얼굴을 더 가까이 가져왔다.`,
      );
      await era.printAndWait(
        `눈앞에는 ${treve.sex}의 단정한 얼굴이 있었다. 달콤한 향기가 피부에 온기를 느낄 만큼 가까이 다가왔다.`,
      );
      await era.printAndWait(
        `그 상태에서 ${treve.sex}의 눈빛이 갑자기 날카로워졌다.`,
      );
      await treve.say_and_wait(
        `하지만 착각하지 마세요. 당신의 이상을 채워 드리지는 않을 거예요.`,
      );
      await era.printAndWait(
        `${you.name}에 대한 선전포고였다. 푸른 시선이 ${you.name}을(를) 꿰뚫었다.`,
      );
      await treve.say_and_wait(
        `아무에게도 양보하지 않을 거예요. 줄곧 당신 앞에 서서, 언젠가는 당신이 저만 바라보게 만들 거예요.`,
      );
      await era.printAndWait(`말을 마친 ${treve.name}는 방긋 웃었다.`);
      await era.printAndWait(
        `${treve.sex}의 천진난만한 미소는 여느 때처럼 주변까지 즐겁게 했다.`,
      );
      await era.printAndWait(
        `${treve.sex}의 얼굴에 다시 미소가 돌아오자 눈을 깜빡였다.`,
      );
      await treve.say_and_wait(`——사랑하는 당신.`);
      return ret;
    };
    f.title = title;
    return f;
  })(),
  crazy_fan_end: (() => {
    const title = '낯선 이국의 공주';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait([
        '마침내, 어느 순간을 경계로 ',
        you.get_colored_name(),
        '과(와) ',
        treve.get_colored_name(),
        '의 연락은 완전히 끊어졌다.',
      ]);
      await era.printAndWait(
        '담당은 트레이너를 만나고 싶어 하지 않았고, 트레이너는 담당을 만날 엄두를 내지 못했다.',
      );
      await era.printAndWait([
        '하지만 여러 가지 영향을 고려한 탓인지, ',
        you.get_colored_name(),
        '과(와) ',
        treve.get_colored_name(),
        '의 계약을 이어받겠다고 나서는 사람은 없었다.',
      ]);
      await era.printAndWait([
        '아무래도 ',
        montjeu.get_colored_name(),
        '가 다시 한 번 프랑스의 공주를 돌보는 중책을 짊어진 것 같았다.',
      ]);
      era.println();
      await era.printAndWait([
        '공적인 일로 우연히 ',
        montjeu.get_colored_name(),
        '와 만났을 때 ',
        you.get_colored_name(),
        '이(가) 받은 것은 비난이 아니라 ',
      ]);
      await era.printAndWait('——동정 어린 시선이었다.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 서둘러 인사를 한 뒤 자리를 떠날 수밖에 없었다.',
      ]);
      await era.printAndWait(
        '이 영문을 알 수 없는 동정에 불안함을 느꼈기 때문일까, 아니면 두려웠기 때문일까……',
      );
      await era.printAndWait(
        '어느 기자와 공주의 결말과 비슷하면서도 사뭇 달랐다.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '과(와) ',
        treve.get_colored_name(),
        '는 두 번 다시 만나지 않았다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
