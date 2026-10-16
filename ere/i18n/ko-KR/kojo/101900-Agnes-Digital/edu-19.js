/**
 * @file アグネスデジタル - 育成
 * @author 片手虾好评发售中！
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {number|undefined} japa_dir_rank ジャパンダートダービー着順
   */
  async race_start(digital, japa_dir_rank) {
    const buffer = [
      () =>
        digital.say_and_wait([
          '승리를 확신한 ',
          digital.uma_sex_title,
          '짱, 잔뜩 긴장한 ',
          digital.uma_sex_title,
          '짱, 무심한 척하면서도 진심인 ',
          digital.uma_sex_title,
          '짱…… 후…… 헤……',
        ]),
      () =>
        digital.say_and_wait([
          '아뇨 아뇨, 아무리 그래도 저 같은 ',
          digital.uma_sex_title,
          '가 경기장에 서는 건 이상하지 않나요?',
        ]),
    ];
    if (era.get('mark:19:淫纹') > 0) {
      buffer.push(() =>
        digital.say_and_wait(
          '디지땅의 승부복, 배가 드러나는 거였어요?! 큰일이다, 큰일이야. 가릴까? 어떻게 가리지? 가려지기는 하나?',
        ),
      );
    }
    if (japa_dir_rank <= 3) {
      buffer.push(() =>
        digital.say_and_wait(
          '저도 선수로서, 상대에게 부끄럽지 않은 레이스를 하겠어요.',
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  race_end_win: (() => {
    const title = '레이스 승리';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (digital, you) => {
      await digital.say_and_wait(
        '카와와와! 모두 가장 고귀한 빛을 뿜어내고 있어요!',
      );
      await era.printAndWait([
        '레이스를 마친 ',
        digital.get_colored_name(),
        '은 큰 경기를 뛰고 왔다고는 믿기지 않을 만큼 활기차게, 평소의 열정을 드러내고 있다.',
      ]);
      await digital.say_and_wait([
        digital.uma_sex_title,
        '짱들과 함께 달릴 수 있었어…… 정말 행복해……!',
      ]);
      await digital.say_and_wait('게다가 1착! 감사한 마음으로 받아들일게요!');
      era.printButton('「네가 가장 빛났어!」', 1);
      era.printButton('「다음 레이스도 힘내자!」', 2);
      if ((await era.input()) === 1) {
        await digital.say_and_wait([
          '에? 그, 그럴 리가요. 이렇게 많은 ',
          digital.uma_sex_title,
          '가 있는데 저는 공기 같은 존재일 뿐…… 저를 보고 계셨어요?',
        ]);
        await era.printAndWait('이렇게 쑥스러워하는 모습도 벌써 여러 번 봤다.');
        await you.say_and_wait('당연하지. 넌 내 소중한 담당이니까!');
        await digital.say_and_wait('우우우……');
        await digital.say_and_wait('칭찬을 받으면 어쩔 줄 모르겠어요……');
        await era.printAndWait('몇 번을 봐도 질리지 않는다.');
      } else {
        await digital.say_and_wait(
          '좋아요! 다음에도 이 기세로 더 강해지겠어요! 파워!',
        );
        await digital.say_and_wait([
          '더 강해져서, 더 치열한 레이스에서, 더 눈부신 ',
          digital.uma_sex_title,
          '짱들을 보는 거예요!',
        ]);
        await era.printAndWait('그 기세야! 계속 가자!');
        await digital.say_and_wait('에! 에! 무!');
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = '레이스 입착';
    /** @param {CharaTalk} digital アグネスデジタル */
    const f = async (digital) => {
      await digital.say_and_wait(
        '으음, 그렇구나. 너희의 빛은 아직 조금 멀리 있구나……',
      );
      await era.printAndWait([
        '승리하지 못한 ',
        digital.get_colored_name(),
        '은 레이스가 끝나고도 크게 낙담한 기색은 보이지 않는다……',
      ]);
      await digital.say_and_wait(
        '으윽…… 역시 팬인 제가 여기에 끼면 안 됐어요……',
      );
      await era.printAndWait('어이, 어이.');
      era.printButton(
        `「이번에는 ${digital.uma_sex_title}를 마음껏 감상했어?」`,
        1,
      );
      era.printButton(
        `「다음에는 맨 앞에서 ${digital.couple_title}을 보자!」`,
        2,
      );
      if ((await era.input()) === 1) {
        await digital.say_and_wait('에! 맞아요! 디지땅, 할 수 있어!');
        await era.printAndWait('무슨 뜻이지?');
      } else {
        await digital.say_and_wait([
          '더 앞에서라면 분명……! 더욱 아름다운 ',
          digital.uma_sex_title,
          '짱들을 볼 수 있을 거예요!',
        ]);
        await era.printAndWait([
          '어쨌든 ',
          digital.get_colored_name(),
          '은 기운을 차렸다!',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = '메이크 데뷔 시작!';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     */
    const f = async (digital, you, callname) => {
      await digital.say_and_wait([
        '음흠, 들리시나요? 저는 ',
        digital.get_colored_name(),
        '입니다. 새잎이 돋아나는 계절, 여러분은 잘 지내시나요? 지금 저는 메이크 데뷔의 패독에 서 있어요. 주변에는……',
      ]);
      await digital.say_and_wait([
        '디지땅…… 디지땅…… ',
        digital.uma_sex_title,
        '짱들 곁에…… 아니, ',
        digital.uma_sex_title,
        '짱들 한가운데에 있어요!',
      ]);
      await digital.say_and_wait([
        '벌써…… 고귀해서 죽을 것 같아…… ',
        callname,
        '! 보이시나요?! 주변의 ',
        digital.uma_sex_title,
        '짱들이!',
      ]);
      await era.printAndWait([
        '보인다. 주변의 ',
        digital.uma_sex_title,
        ' 중에는 긴장해서 떠는 이도, 눈을 빛내는 이도 있었다. 하지만 가장 특별한 건……',
      ]);
      await era.printAndWait([
        '두 손으로 뺨을 감싸고, 위험해 보이는 눈빛으로 이 모든 것을 만끽하는——',
        digital.get_colored_name(),
        '.',
      ]);
      await digital.say_and_wait([
        '츄릅, 제가 말하고 싶은 건 ',
        digital.couple_title,
        '이 대체 어디까지 나아갈 수 있느냐는 거예요! 고귀함 측정기는 이미 한계를 넘었는데, 저까지 그 안에 끼어 있다니!',
      ]);
      await digital.say_and_wait(
        '하아~ 고귀해서 죽겠어…… 디지땅…… 재가 되어 버려……',
      );
      await you.say_and_wait('이제 레이스 시작이야!');
      await digital.say_and_wait('와앗! 맞아요! 승천하고 있을 때가 아니죠!');
      await digital.say_and_wait([
        '지금의 저도 ',
        digital.uma_sex_title,
        '짱들과 어깨를 나란히 하는 존재. 제가 ',
        digital.couple_title,
        '의 빛을 가려서는 안 돼요!',
      ]);
      await digital.say_and_wait(
        '힘낼게요! 에너지 충전, 점검 완료! 고귀함 감지 기능 100% 가동!',
      );
      await digital.say_and_wait([
        '디지땅의 눈은 필름이에요. ',
        digital.uma_sex_title,
        '짱들의 웃음과 눈물을 전부 새겨 넣겠어요!',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '은 각오를 품고 경기장으로 향했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '메이크 데뷔 승리';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} hyac_sta ヒヤシンスステークス（着色名）
     */
    const f = async (digital, you, callname, hyac_sta) => {
      await era.printAndWait([
        '메이크 데뷔에서 ',
        digital.get_colored_name(),
        '은 멋지게 1착을 차지했다. 그리고……',
      ]);
      await era.printAndWait([
        '고귀함에 재가 되어 버린 ',
        digital.get_colored_name(),
        '이 평소처럼 사랑을 쏟아낼 줄 알았다. 하지만 ',
        digital.sex,
        '는 조용해졌다. ',
        digital.sex,
        '에게도 이런 때가 있구나……',
      ]);
      await digital.say_and_wait('……원점이자 정점……');
      await digital.say_and_wait(
        '처음 들어선 게이트, 잡히지 않는 타이밍, 뒤엉키는 다리……',
      );
      await digital.say_and_wait(
        '튀는 땀방울, 초조함에 새하얘진 머릿속. 하지만 관중의 함성이 사라진 뒤에 남는 건 게시판의 결과뿐……',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        '에게서 이토록 선명한 감정 묘사를 듣게 될 줄이야.',
      ]);
      await digital.say_and_wait(
        '아! 감동했어요! 하나하나 전부 눈물이 나잖아요! 그렇죠! 그렇죠!',
      );
      era.printButton('「그래. 첫 레이스, 메이크 데뷔를 축하해.」', 1);
      await era.input();
      await digital.say_and_wait([
        '아아아, 달리는 동안 다른 ',
        digital.uma_sex_title,
        '짱들의 감정에 디지땅은 완전히 휘둘려 버려서……',
      ]);
      await digital.say_and_wait(
        '메이크 데뷔를 너무 얕봤어요! 메이크 데뷔에서는 모두가 승자예요! 모두가!',
      );
      await digital.say_and_wait(
        '이렇게 풍부한 감정에 둘러싸인다면 누구든 얻어 가는 게 많을 수밖에 없잖아요?',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        '은 정말 행복해 보였다. 레이스에서 달리는 모습에서도, 끝난 뒤 감상에서도 ',
        digital.sex,
        '가 레이스를 얼마나 좋아하는지 느껴졌다.',
      ]);
      await digital.say_and_wait([
        callname,
        ', 오늘 레이스는 입문이죠! 앞으로도 잔뜩 남았어요! 더 많은 ',
        digital.uma_sex_title,
        '짱들을 만날 수 있어요!',
      ]);
      await you.say_and_wait([
        '그래. 앞으로도 수많은 ',
        digital.uma_sex_title,
        '가 기다리고 있어.',
      ]);
      await digital.say_and_wait(
        '최고야! 낙원의 문턱을 넘어 버렸어. 얼떨결에 넘어 버렸다고요! 제가 발을 들일 곳이 아니라고 생각했는데!',
      );
      await digital.say_and_wait([
        '다음에도 이런 ',
        digital.uma_sex_title,
        '짱들을 보고 싶어요!',
      ]);
      await you.say_and_wait('그럼 다음엔 잔디에서 달려 볼까?');
      await digital.say_and_wait(
        '응? 아, 이번엔 더트였고 다음엔 잔디…… 죄송해요, 너무 들떴네요. 너무 기뻐서 정신이 저 멀리 날아가 있었어요.',
      );
      await digital.say_and_wait(
        '한 번 더 더트에서 달리면서 이 분위기를 느끼고 싶어요!',
      );
      await era.printAndWait([
        '상의 끝에 새해의 ',
        hyac_sta,
        '에 출전하기로 했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_42: (() => {
    const title = '마일 CS 관전';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} halo キングヘイロー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} call_61 アグネスデジタルのキングヘイローへの呼び方
     * @param {PrintedSpan} mile_cha マイルチャンピオンシップ（着色名）
     */
    const f = async (
      digital,
      doto,
      halo,
      you,
      callname,
      call_58,
      call_61,
      mile_cha,
    ) => {
      await era.printAndWait([
        digital.get_colored_name(),
        '은 아직 데뷔 1년 차라 출전하고 싶은 레이스가 있어도 선택의 폭이 좁다. 하지만 다른 ',
        digital.uma_sex_title,
        '들에게는 지금이 가장 바쁜 시기다.',
      ]);
      await era.printAndWait([
        '이번에 ',
        you.get_colored_name(),
        '과(와) ',
        digital.get_colored_name(),
        '이 관전하러 온 레이스는 ',
        mile_cha,
        '였다.',
      ]);
      await era.printAndWait([
        '이 레이스에는 ',
        digital.get_colored_name(),
        '이 열렬히 응원하는 ',
        digital.uma_sex_title,
        ' 중 한 명인——',
        halo.get_colored_name(),
        '도 출전한다.',
      ]);
      await digital.say_and_wait([callname, '! 여기예요, 여기!']);
      await era.printAndWait([
        '좋은 자리를 잡은 ',
        digital.get_colored_name(),
        '이 ',
        you.get_colored_name(),
        '에게 손을 흔들었다. ',
        you.get_colored_name(),
        '은(는) 겨우 사람들 틈을 비집고 들어갔다.',
      ]);
      await digital.say_and_wait(['곧 시작해요! ', call_61, '의 차례예요!']);
      await era.printAndWait('그리고……');
      await you.say_as_passer_by_and_wait('중계', [
        '뒤이어 ',
        halo.get_colored_name(),
        '! 바깥쪽에서 치고 올라옵니다! ',
        halo.get_colored_name(),
        '의 2착!',
      ]);
      await you.say_as_passer_by_and_wait('중계', [
        '뒤이어 ',
        halo.get_colored_name(),
        '! 바깥쪽에서 치고 올라옵니다! ',
        halo.get_colored_name(),
        '의 2착!',
      ]);
      await era.printAndWait([
        '2착인가. 최근 ',
        halo.get_colored_name(),
        '의 성적을 생각하면 꽤 좋은 결과다.',
      ]);
      await halo.say_and_wait(
        '전국에서 나를 응원하는 팬 여러분, 비록 승리는 놓쳤지만……',
      );
      await halo.say_and_wait(
        '이 킹은 반드시 한계를 뛰어넘겠어. 앞으로도 단거리와 마일의 길을 계속 걸어갈 거야. 그게 킹의 새로운 노선이니까! 오! 호호호!',
      );
      await digital.say_and_wait(
        '우오오오오…… 정말, 너무 감동했어요! 새로운 노선을 선택하려면 얼마나 큰 용기와 각오가 필요할까요!',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        '은 감동에 울먹이며 ',
        you.get_colored_name(),
        '에게 ',
        halo.get_colored_name(),
        '의 이력을 이야기했다.',
      ]);
      await era.printAndWait([
        halo.get_colored_name(),
        '는 원래 자신의 재능을 증명하려고 클래식 레이스를 고집하던 ',
        digital.uma_sex_title,
        '였다. 하지만 올해 ',
        digital.sex,
        '는 노선을 바꾸고 목표를 새로 세웠다.',
      ]);
      await digital.say_and_wait(
        '어느 노선이든 자신의 강함을 증명할 수 있는 거예요!',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        '의 데뷔 이후, ',
        digital.get_colored_name(),
        '의 시각도 전과는 크게 달라졌다. 이제는 선수의 입장에서 경기장 안팎을 느낄 수 있게 된 것이다.',
      ]);
      await era.printAndWait([
        halo.get_colored_name(),
        '의 노력이 보상받기를 바랐기에 ',
        digital.get_colored_name(),
        '은 직접 관전하러 왔고, ',
        halo.get_colored_name(),
        '의 오랜 고생이 결실을 맺자 ',
        digital.sex,
        '는 경기장의 누구보다 크게 울었다.',
      ]);
      era.drawLine({ content: '돌아오는 길' });
      await era.printAndWait([
        '학원 근처 개울을 따라 걷다가, 강변의 더트에서 고개를 숙인 채 달리는 ',
        digital.uma_sex_title,
        '를 발견했다.',
      ]);
      await digital.say_and_wait(['오오오! ', call_58, '잖아요……']);
      await era.printAndWait([
        doto.get_colored_name(),
        '는 조금 풀이 죽어 보였지만, 그래도 이곳에서 달리고 있었다……',
      ]);
      await era.printAndWait([
        '음…… ',
        doto.get_colored_name(),
        '는 원래 이런 모습이었던가?',
      ]);
      await era.printAndWait([
        doto.get_colored_name(),
        '는 최근 성적이 부진하다. 담당 트레이너인 ',
        you.get_colored_name(),
        '은(는) 그 사정을 잘 알고 있다. ',
        doto.sex,
        '는 아직 본격화할 시기가 아니다. 하지만 ',
        doto.sex,
        ' 자신은 그 사실을 모르는 듯하다.',
      ]);
      await digital.say_and_wait(
        '본격화…… 본인이 모르고 있다면 역시 괴롭겠죠……',
      );
      await digital.say_and_wait([
        '예전의 저라면 ',
        call_58,
        '의 노력만 보였을 거예요. 하지만 지금은……',
      ]);
      await digital.say_and_wait(
        '적어도 이 사실을 알면 안심할 수 있을 텐데요……',
      );
      await you.say_and_wait(['왜 그래? 가서 말해 주지 않을 거야?']);
      await digital.say_and_wait(
        '에? 아니, 아니…… 저는 일개 팬이라고요? 팬이 아이돌한테 이래라저래라 할 수는 없죠! 매니저한테 쫓겨날 거예요!',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        '은 돕고 싶으면서도 주제넘은 짓이 아닐까 망설이고 있었다.',
      ]);
      await digital.say_and_wait(
        '현실적으로 생각해 보세요. 장사가 안 되는 라면집 주인에게 「아직 때가 아니에요」라고 위로하는 거랑 같잖아요?!',
      );
      await you.say_and_wait(
        '아니, 이건 근거가 있는 이야기야…… 그보다 디지땅, 아직도 자신이 팬일 뿐이라고 생각해?',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        digital.get_colored_name(),
        '에게 설명했다. 이제는 팬이기만 한 게 아니다. 선수로서 경기장에 서고 있지 않은가.',
      ]);
      await digital.say_and_wait([
        '아, 네, 그건 그렇지만…… 데뷔했다고 해도 ',
        call_58,
        '과(와) 저 사이의 거리를 좁힐 수는 없어요……',
      ]);
      await you.say_and_wait([
        '너와 ',
        digital.sex,
        ', 그리고 ',
        digital.couple_title,
        ' 사이의 거리는 네 생각보다 훨씬 가까워!',
      ]);
      await you.say_and_wait(
        '매일 지켜봤기에 도토가 겪는 문제도 알아차린 거잖아. 그런데 그 때문에 자신이 동료가 아니라 외부인이라고 생각하는 거야.',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        '은 고개를 숙였다.',
      ]);
      await digital.say_and_wait(
        '으으…… 맞는 말씀이지만, 당장 최애에게 말을 걸기는 아직 조금……',
      );
      await digital.say_and_wait('왠지 엄청난 일을 생각하고 있는 기분이야……');
      await era.printAndWait([
        digital.get_colored_name(),
        '은 그래도 ',
        doto.get_colored_name(),
        '를 도와주기로 결심했다.',
      ]);
      await era.printAndWait([
        digital.sex,
        '는 제방의 울타리를 뛰어넘어 경사면을 미끄러져 내려가더니 도토 앞에 나타났다. 등장부터 굉장한데.',
      ]);
      await digital.say_and_wait([
        '저, 저, 저, 저기요! ',
        call_58,
        '! 잠깐 얘기해도 될까요?',
      ]);
      await doto.say_and_wait('에에에에, 무, 무슨 일이세요?');
      await digital.say_and_wait('본격화라는 걸 아세요?!');
      await doto.say_and_wait('에에에? 그게 뭔가요?');
      await digital.say_and_wait('본격화라는 건요……');
      await era.printAndWait('강둑에서 지켜보니 별문제는 없어 보였다.');
      await digital.say_and_wait('그리고 본격화하는 시기는 대체로……');
      await era.printAndWait('응, 제법 자세히 아는구나.');
      await digital.say_and_wait(
        '맞아요. 이 본격화 시기에 훈련하려면 발밑에 주의해서……',
      );
      await era.printAndWait(
        '오, 트레이너 자격시험에서도 별로 다루지 않는 내용이다.',
      );
      await digital.say_and_wait(
        '……본격화 이전에 훈련한다고 해서 헛수고인 건 아니에요.',
      );
      await digital.say_and_wait(
        '이때 허벅지를 충분히 단련해 놓으면 본격화하는 동안 한꺼번에 쑥 성장할 수 있어요!',
      );
      await era.printAndWait([
        '아니, 이건 최근 연구까지 짚고 있잖아. ',
        you.get_colored_name(),
        '의 기억으로는, 이 내용은 바로 얼마 전 『월간 트레이너』에 실린 연구였다……',
      ]);
      era.drawLine({ content: '트레이닝실에 돌아와서' });
      await digital.say_and_wait([
        '와와와왓! 저질러 버렸어요! 현실에서, 제 눈앞에 맺힌 ',
        call_58,
        '의 모습에…… 그만……',
      ]);
      await era.printAndWait([
        '사실 ',
        doto.get_colored_name(),
        '는 후반부 이야기를 잘 이해하지 못한 듯했다. 하지만 강둑에서도 알 수 있었다. ',
        digital.sex,
        '는 기운을 되찾았다.',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '도 그 사실을 알고 있을 것이다.',
      ]);
      await you.say_and_wait([
        '그래도 도토, ',
        digital.sex,
        '에게는 큰 도움이 되지 않았을까?',
      ]);
      await era.printAndWait([
        '……',
        digital.get_colored_name(),
        '은 그저 가슴을 누르고 있었다.',
      ]);
      await era.printAndWait([
        '최애 아이돌과 저렇게 대화한 건 처음이었다. ',
        digital.get_colored_name(),
        '의 부담도 상당했을 것이다.',
      ]);
      await era.printAndWait([
        '……그건 그렇고 ',
        digital.get_colored_name(),
        '의 속사포 같은 설명이라니. ',
        digital.sex,
        '는 사실 굉장한 사람이 아닐까?',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '새해 포부';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} daiwa ダイワスカーレット
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     */
    const f = async (digital, teio, daiwa, doto, you, callname) => {
      await era.printAndWait([
        '새로운 해. ',
        digital.get_colored_name(),
        '은 ',
        digital.uma_sex_title,
        '에게 무엇보다 중요한 클래식급을 맞이했다.',
      ]);
      await era.printAndWait([
        '다만 ',
        digital.sex,
        '는 아직도 클래식급 ',
        digital.uma_sex_title,
        '들과 직접 가까워질 수 있다는 사실 자체에 들떠 있는 듯했다.',
      ]);
      await digital.say_and_wait(['새해 복 많이 받으세요! ', callname, '!']);
      await era.printAndWait([
        digital.get_colored_name(),
        '은 짤막하게 ',
        you.get_colored_name(),
        '에게 새해 인사를 건넸다.',
      ]);
      await era.printAndWait('아침 일찍부터 트레이닝실에 오다니, 부지런하네.');
      await digital.say_and_wait(
        '연말은 어떠셨어요? 코믹 마켓에서 좋은 책은 몇 권 구하셨나요?',
      );
      await you.say_and_wait('응? 코믹 마켓? 책?');
      await digital.say_and_wait(
        '아…… 네, 없으셨다면 방금 말은 잊어 주세요. 디지땅의 혼잣말이었어요.',
      );
      await digital.say_and_wait(
        '하지만! 올해 레이스는! 이야기할 맛이 나죠! 클래식급 레이스는 별처럼 많으니까요!',
      );
      await era.printAndWait([
        '확실히 ',
        digital.get_colored_name(),
        '은 클래식급 레이스에 나갈 수 있게 됐다. 작년보다 선택지가 크게 늘어난다. 대부분의 G1에는 클래식급이 되어야 출전할 수 있다.',
      ]);
      await digital.say_and_wait([
        '아, 갑자기 작년 일이 떠올랐어요. 제가 너무 들떠서 초심을 잊을 뻔했네요. 제대로 된 ',
        digital.uma_sex_title,
        ' 팬이 되겠다고 해 놓고는?!',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '은 지난번에 ',
        digital.sex,
        '가 ',
        doto.get_colored_name(),
        '와 이야기한 일을 아직 마음에 두고 있는 듯했다……',
      ]);
      era.println();
      await digital.say_and_wait(
        '그러니까! 올해는 다시 원점으로 돌아갈 거예요! 다시 팬이 되는 거예요! 그걸 원칙으로 삼겠어요!',
      );
      await era.printAndWait([
        '지금으로서는 어쩔 수 없다. ',
        digital.get_colored_name(),
        '이 스스로 깨닫기까지는 아직……',
      ]);
      await digital.say_and_wait([
        callname,
        '! 조언해 주실래요? 어떻게 응원하면 좋을까요?',
      ]);
      era.print([you.get_colored_name(), '의 선택:']);
      era.printButton(`우마무스메짱들을 위해 봉사한다 (스피드+10)`, 1);
      era.printButton('독서한다 (스태미나+10)', 2);
      era.printButton('따라 하며 배운다 (스킬 Pt+20)', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await you.say_and_wait([
            '평소처럼 ',
            digital.uma_sex_title,
            '짱들을 위해 봉사하는 건 어때?',
          ]);
          await digital.say_and_wait([
            '오오오! 좋은 조언이에요. 그러고 보니 요즘 레이스에서든 대화할 때든 계속 ',
            digital.uma_sex_title,
            '짱들에게 실례만 저질렀던 것 같아요……',
          ]);
          await digital.say_and_wait(
            '그러니! 지금이야말로 원점으로 돌아갈 때! 성지를 한번 정화해야겠어요!',
          );
          await era.printAndWait('정화?!');
          await era.printAndWait('경기장을 손질했을 뿐이었다. 다행이다.');
          await era.printAndWait([
            '손질이 끝나자 마침 ',
            daiwa.get_colored_name(),
            '이 가장 먼저 잔디 코스에 도착했다. ',
            daiwa.get_colored_name(),
            '이 기분 좋게 잔디 위를 달리는 모습을 보고 ',
            digital.get_colored_name(),
            '도 의욕이 가득해졌다.',
          ]);
          break;
        case 2:
          await you.say_and_wait('그럼 샀다던 책을 읽어 보는 건 어때?');
          await digital.say_and_wait(
            '아! 그건…… 전부 짧기도 하니 다시 읽어 봐도 좋겠네요!',
          );
          await digital.say_and_wait([
            '여러 ',
            digital.uma_sex_title,
            '짱들의 에너지를 흡수해서 새해에도 계속 달릴 수 있도록요!',
          ]);
          await era.printAndWait([
            '그렇게 ',
            digital.get_colored_name(),
            '은 오늘 기숙사로 돌아가 책을 읽었다. 다음에 만났을 때, 흠뻑 빠져든 표정을 한 ',
            digital.get_colored_name(),
            '을 보고 ',
            you.get_colored_name(),
            '은(는) ',
            digital.sex,
            '가 푹 쉬었다는 걸 알 수 있었다.',
          ]);
          break;
        case 3:
          await you.say_and_wait([
            '다른 ',
            digital.uma_sex_title,
            '를 따라 하면서 스킬을 배우는 건 어떨까?',
          ]);
          await digital.say_and_wait(
            '그러네요! 최애들을 따라 하며 스킬을 배운다! 그야말로 이 몸의 사명!',
          );
          await digital.say_and_wait('오오오! 오?');
          await era.printAndWait([
            '훈련장 관중석으로 가서, 예전에 그곳에서 관찰했던 ',
            digital.uma_sex_title,
            '의 스킬을 떠올렸다……',
          ]);
          await digital.say_and_wait('다음은 이거예요! 테이오 스텝!');
          await era.printAndWait(
            '오오오, 그 유명한 테이오 스텝이네! 허벅지를 높이 들어 보폭을 넓히는 스킬이야!',
          );
          await era.printAndWait('오오오, 본인도 온 모양이다.');
          await era.printAndWait([teio.get_colored_name(), '? 언제 왔어?']);
          await digital.say_and_wait(
            '우와와왓! 일부러 무례하게 굴려던 건 아니에요!',
          );
          await era.printAndWait([
            digital.get_colored_name(),
            '! 시들어 버렸다!',
          ]);
          await era.printAndWait([
            '그 뒤 ',
            digital.get_colored_name(),
            '은 ',
            teio.get_colored_name(),
            '에게 제대로 요령을 배웠다.',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_hyac_sta: (() => {
    const title = '히아신스 S 시작!';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} nikk_hai 日経新春杯（着色名）
     */
    const f = async (digital, doto, you, callname, nikk_hai) => {
      await era.printAndWait([
        '얼마 전 ',
        nikk_hai,
        '에서 ',
        doto.get_colored_name(),
        '이(가) 2착을 차지했다.',
      ]);
      await era.printAndWait([
        '지하 통로에서 ',
        doto.get_colored_name(),
        '를 축하해 주려던 ',
        digital.get_colored_name(),
        '. 앞서 주제넘게 나섰던 일이 아직 신경 쓰였는데, 뜻밖에도 ',
        doto.get_colored_name(),
        '에게 감사 인사를 받았다.',
      ]);
      await era.printAndWait([
        '보통 팬이라면 하지 않을 행동이었는데, 그 선택이 결실을 맺기 시작했다. ',
        digital.get_colored_name(),
        '은 점점 상황을 이해하기 어려워졌다.',
      ]);
      await era.printAndWait(
        '그 의문을 풀 방법은 레이스다. 오늘은 이전부터 출전하기로 정해 둔 레이스가 있는 날이다.',
      );
      await era.printAndWait('G3도 아닌 OP급의 작은 레이스.');
      await era.printAndWait([
        '패독에서 ',
        digital.get_colored_name(),
        '은 다른 ',
        digital.uma_sex_title,
        '를 빤히 바라보고 있었다.',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '의 두 손은 갈고리처럼 허공을 휘젓고, 눈동자에는 「맛있겠다」는 생각이 가득했다……',
      ]);
      era.printButton('「디지땅, 달려들면 안 돼.」', 1);
      await era.input();
      await digital.say_and_wait('아니, 애초에 전에도 달려든 적 없거든요.');
      await digital.say_and_wait(['그나저나 ', callname, ', 왠지 이상해요.']);
      await digital.say_and_wait(
        '분위기는 굉장히 살벌한데 그 안에 담긴 고귀함은 그대로예요……',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        '은 알아차렸다. 모든 ',
        digital.uma_sex_title,
        '의 얼굴에 임전 태세가 드러나 있었다. 그 감정에 ',
        digital.get_colored_name(),
        '은 이끌렸지만, 이 분위기에서는 평소처럼 말을 쏟아낼 수 없었다.',
      ]);
      await digital.say_and_wait([
        '여기에는 더 순수한 무언가가 있어요. ',
        digital.uma_sex_title,
        '가 왜 고귀한지에 대한……',
      ]);
      await you.say_and_wait('그걸 직접 느껴 보고 싶어?');
      await digital.say_and_wait('에! 그건 너무 실례잖아요!');
      await digital.say_and_wait(
        '하지만 전보다 더 가까운 곳에서, 최대한 지켜보고 싶어요……',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        '은 여전히 자신을 관객이라고 생각한다. 하지만 ',
        digital.sex,
        '의 눈빛은 전과 조금 달라져 있었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  hyac_sta_win: (() => {
    const title = '히아신스 S 승리';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} diamond_lord ダイヤモナーク（アグネスデジタル口上NPC）
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} nhk_cup NHKマイルカップ（着色名）
     */
    const f = async (digital, diamond_lord, you, callname, nhk_cup) => {
      await digital.print_and_wait([
        digital.get_colored_name(),
        '은 이번에도 멋지게 결승선을 통과했다. 여유로웠다고 해야 할까……',
      ]);
      await digital.say_and_wait('후…… 하…… 디지땅, 해냈어요……');
      await digital.say_and_wait([
        '결승선을 지나고, 끝까지 지켜봤어요. ',
        digital.uma_sex_title,
        '짱들의 빛을!',
      ]);
      await digital.say_and_wait([
        '역시 조금 의외였어요! ',
        digital.uma_sex_title,
        '짱들이 달리는 각오가 고귀하다고 생각했는데……',
      ]);
      await digital.say_and_wait([
        '하지만 분명 ',
        digital.uma_sex_title,
        '짱들이 레이스에 담은 바람은 더 깊을 거예요…… 계속 달리다 보면 ',
        digital.couple_title,
        '이 눈부신 이유도 꼭 알게 될 거예요!',
      ]);
      await digital.say_and_wait(
        '이대로 방해하지 않는다는 원칙을 지키며 계속 응원해야겠어요!',
      );
      await you.say_as_passer_by_and_wait('???', '흐으으…… 으……');
      await you.say_as_passer_by_and_wait('???', '으아아아아아아!');
      await digital.print_and_wait([
        '조금 떨어진 곳에서 어느 ',
        digital.uma_sex_title,
        '의 통곡이 들려왔다.',
      ]);
      await digital.say_and_wait(['저 ', digital.uma_sex_title, ', 아까 그……']);
      await digital.print_and_wait([
        '기억이 맞다면 ',
        digital.sex,
        '는 방금 6착이었다. 게시판 밖이다.',
      ]);
      await you.say_as_passer_by_and_wait(
        '？？？',
        '게시판…… 게시판에도 못 들었는데…… 중상에는 어떻게……!',
      );
      await digital.print_and_wait([
        '줄곧 ',
        digital.uma_sex_title,
        '를 바라보던 ',
        digital.get_colored_name(),
        '은 더 이상 쳐다보지 못했다. 시선을 피하고 등을 돌렸다.',
      ]);
      await digital.print_and_wait([
        '지하 통로를 지나는 동안 ',
        digital.get_colored_name(),
        '은 다른 ',
        digital.uma_sex_title,
        '를 계속 피했다. 평소처럼 거리를 두는 것이 아니라, 눈에 들어오지 않도록 일부러 피하고 있었다.',
      ]);
      await digital.say_and_wait('……');
      await digital.print_and_wait([
        '하지만 앞에는 또 다른 2명의 ',
        digital.uma_sex_title,
        '가 있었다. 방금 2착과 3착을 한 이들이었다.',
      ]);
      await digital.print_and_wait([
        digital.get_colored_name(),
        '은 피하려다가, 그만……',
      ]);
      const cache = diamond_lord.name;
      diamond_lord.name = `${digital.uma_sex_title}A`;
      await diamond_lord.say_and_wait('흐으으……');
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title}B`,
        '아니, 2착이잖아? 왜 울어?',
      );
      await diamond_lord.say_and_wait(
        '그치만, 그치만, 선배와 겨룬 거였는데…… 계속 선배와 겨루고, 그러고 나서 뛰어넘고 싶었는데……',
      );
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title}B`,
        '뛰어넘었잖아. 너 정말 강하더라. 나도 슬슬 한물가고 있고~',
      );
      await diamond_lord.say_and_wait([
        '……줄곧…… 선배를 이길 수 있다면…… 난…… 그런데 ',
        digital.sex,
        '는 정말 강했어…… 손을 뻗어도 닿지 않을 만큼……',
      ]);
      diamond_lord.name = cache;
      await you.say_as_passer_by_and_wait(`${digital.uma_sex_title}B`, [
        diamond_lord.get_colored_name(),
        '! 열심히 했잖아! 전력을 다했잖아!',
      ]);
      await diamond_lord.say_and_wait('하지만……');
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title}B`,
        '우리가 어떤 성적을 거두든 트윙클 시리즈는 계속돼. 기다려 주지 않는다고!',
      );
      await you.say_as_passer_by_and_wait(`${digital.uma_sex_title}B`, [
        '넌 나보다 강해. 앞으로도 더 성장할 거야. 이제 중상에 도전할 거잖아! G1에도 도전할 거잖아! ',
        digital.couple_title,
        '에게 네 실력을 보여 줘!',
      ]);
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title}B`,
        '위닝 라이브, 같이 갈 수 있지?',
      );
      await digital.print_and_wait([
        digital.uma_sex_title,
        ' B는 손을 들어 동료의 눈물을 닦아 주었다.',
      ]);
      await diamond_lord.say_and_wait('!');
      await digital.print_and_wait([
        digital.sex,
        '는 흐르는 콧물을 힘껏 훌쩍이고 크게 고개를 끄덕였다.',
      ]);
      await digital.print_and_wait([
        digital.couple_title,
        '이 손을 잡고 멀어지는 모습을 보며 ',
        digital.get_colored_name(),
        '은 이번만큼은 「고귀하다」는 말조차 하지 못했다.',
      ]);
      era.drawLine();
      await digital.say_and_wait('……');
      await you.say_and_wait('디지땅, 괜찮아?');
      await digital.say_and_wait('거짓말이었어…… 간섭하지 않는다니……');
      await digital.say_and_wait('그런 건 불가능해요.');
      await digital.say_and_wait(
        '출전하면 반드시 승자가 있고, 반드시 패자가 있어요…… 지는 모습도 고귀하다고, 모두가 승자라고 잘도 말했네요……',
      );
      era.printButton(
        '「경기장에서 쌓아 올린 인연이 너희를 그렇게 고귀하게 만드는 거야. 너도 줄곧 알고 있었잖아?」',
        1,
      );
      await era.input();
      await era.printAndWait([
        digital.get_colored_name(),
        '은 이번 레이스에서 ',
        digital.uma_sex_title,
        '가 왜 고귀하고 위대한지, 그 이유를 조금이나마 엿본 모양이었다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        digital.sex,
        '는 문득 깨달았다. 자신은 상대 선수로 달리면서도 관객이라고 생각한 채, 무정하게 1착을 빼앗아 왔다는 사실을.',
      ]);
      await era.printAndWait('그건 굉장히 실례가 되는 일이다.');
      await era.printAndWait([
        '그래서 ',
        digital.get_colored_name(),
        '은 위닝 라이브가 끝나고 트레이닝실에 돌아오자……',
      ]);
      await digital.say_and_wait([
        callname,
        ', 앞으로의 이야기를 하고 싶어요. 저답지 않은 말을 하겠지만, 괜찮을까요?',
      ]);
      await you.say_and_wait('물론이지.');
      await digital.say_and_wait('꼭 G1에 나가고 싶어요.');
      await digital.say_and_wait(
        '여기 있는 모두에게, 뜨거운 철판 위에 엎드려 사죄해도 모자랄 만큼 무례한 짓을 한 것 같아요.',
      );
      await digital.say_and_wait(
        '그러니 해야만 해요. 출전해서 G1에서 이기고, 모두가 디지땅은 강하다고 생각하게 만들 거예요.',
      );
      await era.printAndWait([
        '증명하고 싶었다. ',
        digital.sex,
        '가 정말 강하다는 것을. ',
        digital.sex,
        '에게 패한 모든 ',
        digital.uma_sex_title,
        '에게 당당히 고개를 들 수 있도록.',
      ]);
      await digital.say_and_wait([
        '그리고 확인하고 싶어요. ',
        digital.uma_sex_title,
        '짱들이 G1을 어떤 마음으로 마주하는지!',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '과 ',
        you.get_colored_name(),
        '은(는) 다음으로 5월 전반의 ',
        nhk_cup,
        '에 출전하기로 정했다.',
      ]);
      await digital.say_and_wait([
        '저는 달릴 거예요. 그리고——',
        digital.couple_title,
        '의 몫까지 함께!',
      ]);
      await era.printAndWait([
        '우연히 겪은 일이었다. 하지만 그 결과까지 우연은 아니었다. 승리와 패배, 그 안에 담긴 슬픔이——',
        digital.get_colored_name(),
        '의 등을 밀어 미래로 나아가게 했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_nhk_cup: (() => {
    const title = 'NHK 마일컵 시작!';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (digital, you) => {
      await digital.say_and_wait('오오오오오오오! 역시, 달라요!');
      await era.printAndWait('G1 경기장. 10만 명이 넘는 관중이 모인 레이스……');
      await era.printAndWait(
        '여러 번 봐 왔지만 패독에 서는 감각은 여전히 새로웠다.',
      );
      await era.printAndWait(
        '10만 명이 내뿜는 열기도 압도적이지만, 진짜 주인공은 선수들의……',
      );
      await digital.say_and_wait(
        '뭐뭐뭐뭐뭔가요, 이건! 이 기운, 마치 영역을 펼친 듯한 압박감!',
      );
      await digital.say_and_wait(
        '굉장해요! 최고예요! 고귀함의 최고봉이라고 해도 되겠어요!',
      );
      await you.say_and_wait('들떴구나! 그럼 컨디션은 좋다는 거네!');
      await digital.say_and_wait(
        '더는, 더는 아무 생각도 못 하겠어요. 머릿속이, 이제……',
      );
      await digital.say_and_wait(
        '아름다워요. 무서울 정도로요. 해상도가 4K까지 올라갔어요. 지금은 서 있는 것조차 조금 힘들어요……',
      );
      await digital.say_and_wait([
        '그래도 알아내야 해요. ',
        digital.uma_sex_title,
        '짱들의 고귀함에 담긴 비밀을!',
      ]);
      await digital.say_and_wait('설령…… 그 고귀함에 재가 되더라도…… 헉?!');
      await era.printAndWait([
        '무슨 일이지? ',
        digital.get_colored_name(),
        '은 말하다 말고 갑자기 몸을 떨었다.',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '은 주위를 둘러보더니……',
      ]);
      await digital.say_and_wait('누군가 저를 보고 있는 것 같아요?');
      await era.printAndWait([
        '선수들이 있는 쪽은 ',
        you.get_colored_name(),
        '에게도 잘 보였다. ',
        digital.get_colored_name(),
        '을 바라보는 선수는 없었다. 관중석에서 오는 시선이었다.',
      ]);
      await digital.say_and_wait(
        '그렇구나. 저까지도 최애들 사이에서 응원받는 꿈을 꾸고 있는 거네요……',
      );
      await digital.say_and_wait('더는 가벼운 마음으로 있어서는 안 돼요!');
      await era.printAndWait([
        '이 정도로 큰 레이스라면 ',
        digital.get_colored_name(),
        '도 ',
        digital.sex,
        '의 잠재력을 끌어낼 수 있을 것이다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  nhk_cup_win: (() => {
    const title = 'NHK 마일컵 승리';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} callname_15 テイエムオペラオーのプレイヤーへの呼び方
     * @param {PrintedSpan} o_call_di テイエムオペラオーのアグネスデジタルへの呼び方
     * @param {PrintedSpan} o_call_do テイエムオペラオーのメイショウドトウへの呼び方
     * @param {PrintedSpan} do_call_di メイショウドトウのアグネスデジタルへの呼び方
     * @param {PrintedSpan} takz_kin 宝塚記念（着色名）
     * @param {PrintedSpan} japa_dir ジャパンダートダービー（着色名）
     */
    const f = async (
      digital,
      opera,
      doto,
      you,
      call_15,
      call_58,
      callname_15,
      o_call_di,
      o_call_do,
      do_call_di,
      takz_kin,
      japa_dir,
    ) => {
      await you.say_as_passer_by_and_wait('중계', [
        digital.get_colored_name(),
        '！ ',
        digital.get_colored_name(),
        '! 잔디든 더트든 모두 ',
        digital.sex,
        '의 무대임을 보여 주었습니다!',
      ]);
      await era.printAndWait([
        '결승선을 통과한 ',
        digital.get_colored_name(),
        '은 발걸음마저 휘청거렸다.',
      ]);
      await digital.say_and_wait(
        '하…… 후…… 좋아…… 남은 에너지 제로…… 덕질할 여유도 없어…… 쏟아냈어, 전부……!',
      );
      await digital.say_and_wait('아아아, 햇살…… 눈부셔…… 하늘…… 멀다……');
      await digital.say_and_wait('아…… 이게……');
      await era.printAndWait('(털썩!)');
      await era.printAndWait([digital.get_colored_name(), '이 쓰러졌다!']);
      era.drawLine();
      await era.printAndWait([
        '다행히 달려온 의사의 진단에 따르면 ',
        digital.get_colored_name(),
        '은 무리한 운동으로 지친 것이니, 쉬면 괜찮아질 거라고 했다.',
      ]);
      await era.printAndWait([
        '이번에 ',
        digital.get_colored_name(),
        '은 정말 전력을 다했다. 이전과 달리 이번의 ',
        digital.get_colored_name(),
        '은 선수로서의 신념을 짊어지고 있었다.',
      ]);
      await era.printAndWait([
        '그래서 힘을 전부 쏟아낸 뒤 ',
        digital.get_colored_name(),
        '은 벅찬 감정을 이기지 못하고 쓰러졌다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        digital.get_colored_name(),
        '을 업고 휴게실로 돌아왔다. 그리고…… 낯익은 2명을 발견했다. ',
        opera.get_colored_name(),
        '와 ',
        doto.get_colored_name(),
        '.',
      ]);
      await opera.say_and_wait([o_call_di, '? 정신 차리게!']);
      await you.say_and_wait(['괜찮아. ', digital.sex, '는 쉬면 나아질 거야.']);
      await era.printAndWait([
        '그렇게 말하며 ',
        digital.get_colored_name(),
        '을 휴게실 소파에 눕혔다.',
      ]);
      await era.printAndWait([
        '얼마 지나지 않아 ',
        digital.get_colored_name(),
        '은 눈을 떴다.',
      ]);
      await digital.say_and_wait('으음…… 응…… 에?!');
      await digital.say_and_wait([call_15, '과(와) ', call_58, '?! 어째서?']);
      await you.say_and_wait([
        digital.couple_title,
        '이 걱정해서 휴게실까지 찾아왔어…… 아니, 애초부터 휴게실에 있었지.',
      ]);
      await digital.say_and_wait('너무 갑작스럽지 않나요?');
      await opera.say_and_wait([
        '갑작스러운 일이 아니네! ',
        o_call_do,
        '에게 온갖 무대를 누비는 무용수가 있다는 이야기를 들었지. 새로운 배우의 탄생을 감상하기 위해 이 몸이 온 것이라네.',
      ]);
      await doto.say_and_wait([
        '우우우, ',
        do_call_di,
        '의 조언이 정말 고마워서요! 그래서 이번 레이스에도 응원하러 왔어요!',
      ]);
      await opera.say_and_wait(
        '경기 전부터 패왕의 기운을 감추고 지나가는 관객인 척하며 연구하고 있었지!',
      );
      await doto.say_and_wait(
        '저 같은 게 패독에서 말을 걸면 방해가 될 것 같아서…… 그래서……',
      );
      await digital.say_and_wait(
        '아뇨 아뇨 아뇨! 방해라니요, 오히려 영광이에요…… 처음에 느꼈던 이상한 기운이 이거였군요.',
      );
      await digital.say_and_wait([
        '그리고 조금씩 알 것 같아요. ',
        call_15,
        '과(와) ',
        call_58,
        '께서 왜 이렇게 눈부시고 화려한지……',
      ]);
      await digital.say_and_wait('드디어…… 조금은…… 가까워졌어요……');
      await opera.say_and_wait(
        '하하하! 그런가? 하지만 역시 나의 화려함은 타고난 것이니까!',
      );
      await era.printAndWait([
        opera.get_colored_name(),
        '는 ',
        digital.get_colored_name(),
        '을 꽤 마음에 들어 하고 있었다. 한편 ',
        doto.get_colored_name(),
        '는 ',
        digital.get_colored_name(),
        '의 격려에 감사하고 있었다.',
      ]);
      await you.say_and_wait('여기 온 건 또 하고 싶은 말이 있어서지?');
      await era.printAndWait([
        '그리고 ',
        digital.couple_title,
        '은 선언했다……',
      ]);
      await opera.say_and_wait([
        '나와 ',
        o_call_do,
        '은(는) 다음 ',
        takz_kin,
        '에서 처음으로 함께 무대에 오른다네!',
      ]);
      await doto.say_and_wait(
        '저, 저도 드디어 G1에 나가요. 구석에서 아무도 눈여겨보지 않을 자리겠지만요……',
      );
      await digital.say_and_wait(
        '! 첫 공동 공연이군요, 알겠어요! 이건 꼭 보러 가야 해요!',
      );
      await opera.say_and_wait(
        '하지만 자네에게도 걸맞은 공연이 있지 않은가? 그 만능의 재능을 펼쳐 보이게!',
      );
      await opera.say_and_wait(
        '자네는 아직 더트 G1에서 이기지 못했지 않은가. 그것 없이는 아직 완전하다고 할 수 없겠지?',
      );
      await you.say_and_wait([
        '다음에 출전하기 알맞은 더트 G1은 여름 합숙 기간에 열리는 ',
        japa_dir,
        '다.',
      ]);
      await opera.say_and_wait([
        '과연 ',
        callname_15,
        '답군! 그렇다면 ',
        digital.get_colored_name(),
        ', 우리의 초대를 받아들이겠나?',
      ]);
      await digital.say_and_wait('받아들일게요!');
      await era.printAndWait([
        '그렇게 ',
        digital.couple_title,
        '은 약속했다. ',
        opera.get_colored_name(),
        '와 ',
        doto.get_colored_name(),
        '는 ',
        takz_kin,
        '에서 가장 성대한 레이스를 선보이고, ',
        digital.get_colored_name(),
        '은 ',
        japa_dir,
        '에서 올라운더로서의 실력을 보여 주기로.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_24: (() => {
    const title = '타카라즈카 기념';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} japa_dir ジャパンダートダービー（着色名）
     */
    const f = async (digital, opera, doto, you, call_15, call_58, japa_dir) => {
      await era.printAndWait([
        '오늘은 ',
        opera.get_colored_name(),
        '와 ',
        doto.get_colored_name(),
        '의 첫 맞대결이 펼쳐지는 날이다.',
      ]);
      await digital.say_and_wait(
        '아아, 피할 수 없는 날이 결국 왔어요! 더는 진정할 수가 없어요!',
      );
      await digital.say_and_wait(
        '꿈에서도 보던 레이스예요! 아니, 꿈속의 레이스 같은 건 현실에 도저히 비할 수 없어요!',
      );
      await digital.say_and_wait('어쩌죠, 온몸에 응원봉을 달고 응원할까요?!');
      era.printButton('「아니, 아니. 경비원한테 쫓겨날걸.」', 1);
      await era.input();
      await era.printAndWait([
        '그렇게 한신 경기장에 도착했다. ',
        opera.get_colored_name(),
        '와 ',
        doto.get_colored_name(),
        '의 격전이다……',
      ]);
      await era.printAndWait(
        '그렇게 한신 경기장에 도착했다. 티엠 오페라 오와 메이쇼 도토의 격전이다……',
      );
      await era.printAndWait([
        opera.get_colored_name(),
        '의 실력은 ',
        you.get_colored_name(),
        '도 잘 안다. 하지만 ',
        doto.get_colored_name(),
        '도 벌써 이만큼 성장했다니……',
      ]);
      await era.printAndWait([
        '마지막에는 나란히 결승선을 통과했다. ',
        opera.get_colored_name(),
        '가 근소한 차이로 ',
        doto.get_colored_name(),
        '를 앞섰다.',
      ]);
      await era.printAndWait(
        '무엇 때문일까. 본격화만으로는 이런 마음가짐의 변화까지 설명할 수 없다……',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        '이 ',
        digital.sex,
        '를 이렇게 바꿔 놓은 걸까……',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '이 대단하다고 해야 할까…… 슬쩍 ',
        digital.get_colored_name(),
        '을 바라보았다. 아, ',
        digital.sex,
        '는 역시나 푹 빠져서 머리를 흔들고 있었다.',
      ]);
      await digital.say_and_wait('에와와와와……', true);
      await digital.say_and_wait('으음……', true);
      await digital.say_and_wait('방금, 저건 뭐였죠…… 저 빛은?', true);
      await digital.say_and_wait(
        '저는 이미…… 방금은 고귀하다는 생각마저 잊었어요……',
        true,
      );
      await digital.say_and_wait(
        [
          call_15,
          '과(와) ',
          call_58,
          '의 대결이었으니까요…… ',
          digital.couple_title,
          '이 특별해서일까요?',
        ],
        true,
      );
      await era.printAndWait([
        '그렇게 ',
        digital.get_colored_name(),
        '은 그 진의를 다 이해하지 못한 채로 바통을 넘겨받았다. 이제 ',
        digital.get_colored_name(),
        '의 차례다. 다음은 ',
        digital.get_colored_name(),
        '의 ',
        japa_dir,
        ' 무대다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_japa_dir: (() => {
    const title = '재팬 더트 더비 시작!';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} japa_dir ジャパンダートダービー（着色名）
     */
    const f = async (digital, you, japa_dir) => {
      await digital.say_and_wait(
        [
          '아직 깨닫지 못했어요. ',
          digital.uma_sex_title,
          '짱들의 고귀한 에너지의 근원을요. 분명 더없이 소중한 무언가일 텐데……',
        ],
        true,
      );
      await digital.say_and_wait(
        '오이…… 밤…… 더트…… 좀처럼 오지 않는 낯선 코스. 이 특별한 경기장에 제가 찾는 비밀이 있을지도 몰라요……',
        true,
      );
      era.drawLine();
      await digital.say_and_wait([
        '『',
        japa_dir,
        '』, 이 레이스의 분위기는 어쩐지 독특하네요.',
      ]);
      await you.say_and_wait(
        'JpnI 레이스…… 이런 레이스에는 아무래도 편견이 따라붙지.',
      );
      await digital.say_and_wait(
        '그래도 이 레이스에서 느껴지는 열기는 여름의 태양 같아요……',
      );
      await digital.say_and_wait(
        '코스도, 풍경도, 잔디와 더트도 달라요. 그래도 괜찮아요……',
      );
      await digital.say_and_wait([
        digital.uma_sex_title,
        '짱들의 마음은 같으니까요. 그렇죠?',
      ]);
      await era.printAndWait(
        '그래. G1이든 G3든, 중상이든 오픈이든, 잔디든 더트든, 중앙이든 지방이든……',
      );
      await you.say_and_wait('똑같아.');
      await you.say_and_wait(
        '이 레이스를 마치면 너도 온갖 종류의 레이스를 경험하게 돼. 왜 같은지 분명 알게 될 거야.',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        '은 이미 알고 있는지도 모른다. ',
        digital.sex,
        '에게 필요한 것은 증명이다. 바로 이 레이스에서.',
      ]);
      await digital.say_and_wait([
        '지금! 오이의 더트 ',
        digital.uma_sex_title,
        '짱들과 함께 답을 찾겠어요!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  japa_dir_win: (() => {
    const title = '재팬 더트 더비 승리';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} japa_dir ジャパンダートダービー（着色名）
     */
    const f = async (
      digital,
      opera,
      doto,
      you,
      callname,
      call_15,
      call_58,
      japa_dir,
    ) => {
      await digital.say_and_wait(
        '이번 레이스는 지난 잔디 레이스와 다른 듯하면서도 같았다.',
        true,
      );
      await digital.say_and_wait('우오오오오오오오!!!!', true);
      await digital.say_and_wait(
        '피어오르는 흙먼지…… 보이지 않아…… 그런데 빛이…… 비쳐 보여……',
        true,
      );
      await digital.say_and_wait(
        [
          '완전히 다른 코스에서도…… ',
          digital.couple_title,
          '은 변함없이 빛나고 있어……',
        ],
        true,
      );
      await digital.say_and_wait(
        ['여기서 ', digital.couple_title, '의 마음을 저버릴 수는 없어!!!!'],
        true,
      );
      await digital.say_and_wait('하아아아아아아아!', true);
      era.drawLine();
      await era.printAndWait([
        '완주했다. ',
        digital.get_colored_name(),
        '은 정말 훌륭했다. 환경이 전혀 다른 코스에서도 이렇게 좋은 성적을 거두다니.',
      ]);
      await you.say_and_wait('어떤 느낌이었어?');
      await era.printAndWait([
        digital.get_colored_name(),
        '은 이전과는 완전히 다른, 진지한 표정을 짓고 있었다.',
      ]);
      await digital.say_and_wait([
        '디지땅, ',
        digital.get_colored_name(),
        ', 이제 알겠어요.',
      ]);
      await you.say_and_wait('응.');
      await digital.say_and_wait([
        '어릴 때부터 줄곧 저를 사로잡았던 ',
        digital.uma_sex_title,
        '짱들의 고귀함이……',
      ]);
      await digital.say_and_wait([
        '이제 알겠어요. 오늘 『',
        japa_dir,
        '』를 달리고 나서 깨달았어요.',
      ]);
      await digital.say_and_wait([digital.uma_sex_title, '짱들은 귀여워요.']);
      await digital.say_and_wait([digital.uma_sex_title, '짱들은 고귀해요.']);
      await digital.say_and_wait([
        '그렇다면 ',
        digital.couple_title,
        '은 왜 귀여울까요? ',
        digital.couple_title,
        '의 어떤 점이 위대해서 저를 속수무책으로 끌어당기는 걸까요?',
      ]);
      await digital.say_and_wait([
        '오늘 드디어 알았어요. 제가 좋아하는 건 ',
        digital.couple_title,
        '이 『자기 꿈을 향해 온몸을 내던져 부딪치는』 모습이었던 거예요!',
      ]);
      await era.printAndWait([
        '쿵쿵쿵 발을 구르며 ',
        digital.get_colored_name(),
        '은 ',
        digital.sex,
        '가 마침내 깨달았다는 기쁨을 드러냈다.',
      ]);
      await digital.say_and_wait(
        '깨닫고 나니 시간을 거슬러 가서, 『중앙의 잔디 G1만 특별해』라고 생각하던 예전의 저를 한 대 때려 주고 싶어졌어요!',
      );
      await you.say_and_wait('하하, 그야말로 정석적인 감상이네.');
      await digital.say_and_wait([
        '정말, 처음부터 알고 계셨던 거잖아요. ',
        digital.uma_sex_title,
        '짱들은 줄곧 같았던 거예요.',
      ]);
      await digital.say_and_wait([
        digital.couple_title,
        '에게는 진심으로 원하는 것과 되고 싶은 모습이 있어요. 그걸 목표로 필사적으로 노력하고 있는 거예요.',
      ]);
      await era.printAndWait(
        '그런 사람은 어디에 있든 눈부신 법이다. 하물며 한데 모여 달린다면?',
      );
      await digital.say_and_wait([
        digital.couple_title,
        '은 온 힘을 다해 관계를 쌓고, 서로 돕고…… 때로는 같은 승리를 두고 다퉈요. 하지만 경쟁을 두려워하지 않고 늘 앞을 바라봐요.',
      ]);
      await digital.say_and_wait(
        '그리고 모든 게 끝나면 다 함께 꼭 붙어 있는 거죠!',
      );
      await you.say_and_wait('뭐, 그것도 정석적인 전개네.');
      await digital.say_and_wait(
        '바로 그 정석적인 전개가 제 영혼을 이렇게 흔드는 거예요!',
      );
      await digital.say_and_wait(
        '데뷔 전에는 다 안다는 듯이 굴었는데…… 결국 오늘이 되어서야 겨우……',
      );
      await digital.say_and_wait('아와와와, 정말……');
      await digital.say_and_wait([
        call_15,
        '과(와) ',
        call_58,
        '의 그 레이스도 이제야 되돌아보며 이해할 수 있어요.',
      ]);
      await era.printAndWait([
        opera.get_colored_name(),
        '와 ',
        doto.get_colored_name(),
        '가 타카라즈카 기념에서 보여 준 빛을 ',
        digital.get_colored_name(),
        '은 몹시 동경했다.',
      ]);
      await era.printAndWait([
        '그리고 이제 ',
        digital.get_colored_name(),
        '도 그 빛에 닿을 수 있었다.',
      ]);
      await digital.say_and_wait('이대로는…… 안 돼! 디지땅! 움직여야 해!');
      await digital.say_and_wait(
        '저도 각오를 다지고 순수한 마음으로 게이트 앞에 설 수 있다면!',
      );
      await digital.say_and_wait([
        callname,
        '…… 저…… 저도…… 그런 존재가 될 수 있을까요?!',
      ]);
      era.printButton('「물론이지!」', 1);
      await era.input();
      await era.printAndWait([
        digital.get_colored_name(),
        '은 마침내 이 순간, 진정한 선수가 되었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '여름 합숙(클래식급) 시작';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} japa_dir ジャパンダートダービー（着色名）
     * @param {PrintedSpan} mile_cha マイルチャンピオンシップ（着色名）
     */
    const f = async (digital, you, japa_dir, mile_cha) => {
      await era.printAndWait([
        '여름 합숙! 일 년 중 가장 중요한 행사다! 이 기간에는 ',
        digital.uma_sex_title,
        '들의 성장 폭이 가장 크다! 담당 트레이너인 ',
        you.get_colored_name(),
        '도 당연히 특별히 신경 쓰고 있다.',
      ]);
      await era.printAndWait([
        '특히 지난번 ',
        japa_dir,
        '의 기세를 이어 다음 레이스에도 도전해야 하니까.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '에게는 벌써 ',
        digital.get_colored_name(),
        '의 밝은 미래가 보였다. 다만……',
      ]);
      await digital.say_and_wait(
        '쿠와…… 역시 승리에 취했던 거야. 나 따위가 신성한 존재가 되려 하다니……',
      );
      await era.printAndWait('……아, 출발부터 좋지 않네.');
      await digital.say_and_wait(
        '여운이 가시고 소위 현자 타임에 들어가면, 내가 대체 무슨 짓을 했는지 후회하게 되잖아요……',
      );
      era.printButton('「잠깐, 디지땅. 네 결정을 후회하는 거야?」', 1);
      await era.input();
      await era.printAndWait([
        '정곡을 찔린 듯 ',
        digital.get_colored_name(),
        '은 몸을 꼿꼿하게 폈다.',
      ]);
      await digital.say_and_wait([
        '그냥, 스스로가 번거로운 사람처럼 느껴질 때도 있거든요…… 그래 놓고 ',
        mile_cha,
        ' 출전까지 잡아 놨으니……',
      ]);
      await digital.say_and_wait(
        '아아아아아! 복잡한 건 뒤로 미룰래요! 이제 만화 쪽을 생각해야 해요!',
      );
      era.printButton('「만화? 그게 무슨 말이야?」', 1);
      await era.input();
      await digital.say_and_wait('에!');
      await era.printAndWait([
        you.get_colored_name(),
        '의 갑작스러운 질문에 ',
        digital.get_colored_name(),
        '은 횡설수설하기 시작했다.',
      ]);
      await digital.say_and_wait(
        '아무튼! 레이스도 막 끝났으니까 우선 좀 쉬게 해 주세요! 아하하하!',
      );
      await era.printAndWait('이번 여름 합숙, 조금 걱정되는데……');
    };
    f.title = title;
    return f;
  })(),
  we_47_29: (() => {
    const title = '여름 합숙(클래식급) 도중';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} halo キングヘイロー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_61 アグネスデジタルのキングヘイローへの呼び方
     * @param {PrintedSpan} callname_61 キングヘイローのプレイヤーへの呼び方
     * @param {PrintedSpan} h_call_d キングヘイローのアグネスデジタルへの呼び方
     * @param {PrintedSpan} mile_cha マイルチャンピオンシップ（着色名）
     */
    const f = async (
      digital,
      halo,
      you,
      call_61,
      callname_61,
      h_call_d,
      mile_cha,
    ) => {
      await era.printAndWait([
        '여름 합숙이 시작되고 첫 일주일. ',
        digital.get_colored_name(),
        '은 훈련을 소홀히 하지는 않았다. 하지만…… 아무래도 ',
        digital.get_colored_name(),
        '은 딴생각을 하고 있었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '도 사정은 대충 알고 있었다. ',
        digital.get_colored_name(),
        '은 다른 준비도 하고 있는 모양이다. 하지만 그것도 ',
        digital.get_colored_name(),
        '의 취미이니, 너무 간섭할 수는 없다.',
      ]);
      era.printButton('「어쩌면 좋지……」', 1);
      await era.input();
      await era.printAndWait([
        digital.get_colored_name(),
        '이 파워 트레이닝을 하는 모습을 지켜보던 ',
        you.get_colored_name(),
        '은(는) 문득 모래사장에서 바다를 바라보는 ',
        halo.get_colored_name(),
        '를 발견했다.',
      ]);
      await era.printAndWait([
        halo.get_colored_name(),
        '는 ',
        digital.get_colored_name(),
        '이 예전부터 열렬히 응원하던 ',
        digital.uma_sex_title,
        '다. 그때의 ',
        mile_cha,
        '도 ',
        digital.get_colored_name(),
        '과 ',
        you.get_colored_name(),
        '이(가) 함께 관전하러 갔었다.',
      ]);
      await era.printAndWait([
        '최근 ',
        digital.sex,
        '의 성적은 점점…… 미묘해지고 있다.',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '도 ',
        halo.get_colored_name(),
        '를 발견했다. 팬으로서 ',
        digital.sex,
        '의 기분도 가라앉았다.',
      ]);
      await you.say_and_wait(['어때, ', call_61, '을(를) 격려해 보는 건?']);
      await digital.say_and_wait(
        '음…… 팬으로서 아이돌을 격려하는 것도 당연한 일이죠…… 좋아요! 결정했어요. 쓰던 원고는 잠깐 미뤄 둘래요!',
      );
      await you.say_and_wait('원고? 무슨 원고?');
      await digital.say_and_wait('책 원고요.');
      await you.say_and_wait('무슨 책인데?');
      await digital.say_and_wait('그냥 평범한 동인지예요.');
      await era.printAndWait('모르겠는데……');
      await digital.say_and_wait([
        '곧 열리는 즉매회에서 ',
        call_61,
        '의 동인지를 팔아서, 모두에게 ',
        call_61,
        '의 매력을 알리려고 했거든요……',
      ]);
      await halo.say_as_unknown_and_wait(
        '킹의 동인지라고? 정작 본인은 그런 이야기 들은 적 없는데.',
      );
      await digital.say_and_wait([
        '아, 당사자에게 들키는 건 금기죠. 당연히 ',
        call_61,
        '께는…… 슈왓! ',
        call_61,
        '?!',
      ]);
      await era.printAndWait('주인공이 동인지에서 튀어나왔다.');
      await digital.say_and_wait(
        '방금 건 농담이에요! 전부 심심해서 해 본 망상일 뿐이라고요!',
      );
      await halo.say_and_wait(
        '그래도 고마워. 덕분에 알았어. 아하하하하! 역시 킹의 매력도 일류구나!',
      );
      await halo.say_and_wait([
        '정말 물어보고 싶었던 건 말이야, ',
        h_call_d,
        ', 너도 올해 『',
        mile_cha,
        '』에 출전하지?',
      ]);
      await digital.say_and_wait([
        '에? 네! 작년 레이스에 감동해서 최대한 가까워지고 싶었거든요…… 그런데…… 어째서 ',
        call_61,
        '께서……',
      ]);
      await halo.say_and_wait('나도 출전할 거니까.');
      await era.printAndWait([
        halo.get_colored_name(),
        '도 ',
        mile_cha,
        '에 나간다. 게다가 ',
        digital.get_colored_name(),
        '과(와) 같은 무대에서 겨루게 된다.',
      ]);
      await digital.say_and_wait('！');
      await era.printAndWait([
        digital.get_colored_name(),
        '의 얼굴에 갑자기 그늘이 드리웠다.',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '은(는) 알고 있다. 긴 선수 생활을 거치며 ',
        halo.get_colored_name(),
        '는 정점에서 점점 내리막길로 접어들고 있다.',
      ]);
      await digital.say_and_wait([
        '저기, ',
        call_61,
        '…… 주제넘은 말씀이겠지만…… 저, 응원할게요.',
      ]);
      await digital.say_and_wait(
        '그…… 상대가 되더라도 응원하고 싶은 마음은 변함없어요……',
      );
      await era.printAndWait([
        '이런 상황에 ',
        digital.get_colored_name(),
        '의 마음은 복잡했다. 아이돌과 같은 무대에서 달리는 건 꿈이었다. 하지만 그 아이돌이 이미 쇠퇴하기 시작했다면?',
      ]);
      await you.say_and_wait('디지땅!');
      await digital.say_and_wait('!');
      await era.printAndWait([
        digital.get_colored_name(),
        '은 조금 멍한 표정으로 ',
        you.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      await you.say_and_wait([
        '디지땅, 너도 알잖아. 경기장에 선 ',
        digital.uma_sex_title,
        '는——',
      ]);
      await halo.say_and_wait([
        callname_61,
        ', 말을 끊어서 미안해. ',
        h_call_d,
        ', 제안이 있어.',
      ]);
      await halo.say_and_wait([
        h_call_d,
        ', 이번 합숙이 끝날 때 나와 함께 달려 보자.',
      ]);
      await digital.say_and_wait('네?! 우오? 아이돌과 함께라니, 무리예요……');
      await you.say_and_wait(['킹…… 정말 고마워.']);
      await halo.say_and_wait([
        '괜찮아. 일류 ',
        digital.uma_sex_title,
        '라면 일류 팬에게 보답하는 게 당연하지——아하하하하!',
      ]);
      await era.printAndWait([
        halo.get_colored_name(),
        '는 ',
        digital.get_colored_name(),
        '의 망설임을 알아보고, ',
        digital.sex,
        '는 ',
        digital.get_colored_name(),
        '에게 함께 달리자고 제안했다.',
      ]);
      await era.printAndWait([
        '그렇게 남은 여름 합숙의 마지막에는 ',
        digital.get_colored_name(),
        '이 ',
        halo.get_colored_name(),
        '와 모의 레이스를 하기로 했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '여름 합숙(클래식급) 종료';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} halo キングヘイロー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_61 アグネスデジタルのキングヘイローへの呼び方
     * @param {PrintedSpan} callname_61 キングヘイローのプレイヤーへの呼び方
     * @param {PrintedSpan} h_call_d キングヘイローのアグネスデジタルへの呼び方
     * @param {PrintedSpan} takm_kin 高松宮記念（着色名）
     */
    const f = async (
      digital,
      halo,
      you,
      call_61,
      callname_61,
      h_call_d,
      takm_kin,
    ) => {
      await digital.say_and_wait('헤헤…… 후…… 한 수 가르쳐 주셔서 감사……');
      await era.printAndWait([
        '여름 합숙의 마지막을 장식한 건 예정대로 ',
        digital.get_colored_name(),
        '과 ',
        halo.get_colored_name(),
        '의 맞대결이었다……',
      ]);
      await era.printAndWait('다만 조금…… 느슨한데?');
      await halo.say_and_wait([
        '하…… 후…… ',
        h_call_d,
        ', 달리는 내내 망설이던데. 왜 그래?',
      ]);
      await digital.say_and_wait(
        '아뇨, 그게…… 계속 섬광탄을 맞는 것 같달까, 공기에 실려 오는 고귀함에 질식할 것 같달까……',
      );
      await digital.say_and_wait(
        '전엔 관객이었는데…… 따라잡으려 하다니, 너무 주제넘었어요……',
      );
      await digital.say_and_wait(
        '전 이제야 『진심으로 달리겠다』는 각오를 다진 평범한 밑바닥 인간일 뿐이니까요……',
      );
      await halo.say_and_wait([
        '어머, 자신감이 없구나. 하지만 정말 그것뿐이야? ',
        callname_61,
        ', ',
        h_call_d,
        '의 실력은 알고 있지?',
      ]);
      await you.say_and_wait(
        '지금처럼 모래 위에서라면 디지땅이 지지 않을 거야.',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        '은 지금의 ',
        halo.get_colored_name(),
        '가 아직 마음에 걸리는 것이다.',
      ]);
      await digital.say_and_wait([
        call_61,
        '……지금은…… 예전과는 많이 다르잖아요…… 그렇죠……',
      ]);
      await digital.say_and_wait([
        '올봄, 『',
        takm_kin,
        '』에서 우승하고, 그러고는…… 물 흐르듯한 달리기, 몸의 역동감. 이번 실력과는 비교가 안 된다고 해야 할까요……',
      ]);
      await digital.say_and_wait(
        '알아요. 매번 울타리를 붙잡고 몸을 내밀어 가며 지켜봤으니까요.',
      );
      await digital.say_and_wait([
        '지금 ',
        call_61,
        '께서 얼마나 괴로우실지, 저도 데뷔했으니 조금은…… 알 것 같아요……',
      ]);
      await era.printAndWait([
        '선수가 된 ',
        digital.get_colored_name(),
        '은 전보다 더 많은 것을 느낄 수 있게 됐다. 이런 감정도 그중 하나다.',
      ]);
      await halo.say_and_wait([
        '그래서 내키지 않는다…… 그렇구나, 흥…… ',
        h_call_d,
        ', 너는……',
      ]);
      await halo.say_and_wait('바보야.');
      await digital.say_and_wait('네?');
      await era.printAndWait([
        '예상치 못한 말에 ',
        digital.get_colored_name(),
        '은 놀랐다.',
      ]);
      await halo.say_and_wait('바보, 정말 바보야.');
      await halo.say_and_wait('안다고 생각하겠지만 아직 아무것도 모르잖아.');
      await era.printAndWait('매서운 말이었다. 하지만 목소리는 부드러웠다.');
      await halo.say_and_wait([
        '있잖아, ',
        h_call_d,
        ', 너는 이 ',
        digital.uma_sex_title,
        '에게 관심이 있지?',
      ]);
      await digital.say_and_wait('! 네!');
      await halo.say_and_wait(
        '그럼 합숙이 끝나면 나와 함께 훈련할 권리를 줄게!',
      );
      await halo.say_and_wait([
        '보여 주겠어. ',
        halo.get_colored_name(),
        '가 어떤 ',
        digital.uma_sex_title,
        '인지!',
      ]);
      await digital.say_and_wait('꼭 부탁드려요!');
      await digital.say_and_wait([
        '너무 영광이라 꼬리까지 튀어 올랐어요! 디지땅이 그 ',
        digital.sex_code - 1 ? '여신' : '신',
        '과 함께라니!',
      ]);
      await era.printAndWait([
        '여름이 끝날 무렵, ',
        digital.get_colored_name(),
        '은 동경하던 ',
        digital.uma_sex_title,
        '와 인연을 맺었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_37: (() => {
    const title = '일류의 조건';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} halo キングヘイロー
     * @param {PrintedSpan} call_61 アグネスデジタルのキングヘイローへの呼び方
     * @param {PrintedSpan} h_call_d キングヘイローのアグネスデジタルへの呼び方
     * @param {PrintedSpan} sprt_sta スプリンターズS（着色名）
     * @param {PrintedSpan} mile_cha マイルチャンピオンシップ（着色名）
     */
    const f = async (digital, halo, call_61, h_call_d, sprt_sta, mile_cha) => {
      await digital.print_and_wait([
        digital.get_colored_name(),
        '이 ',
        mile_cha,
        '을 향해 나아가는 동안, ',
        halo.get_colored_name(),
        ' 또한 동시에 노력을 거듭하고 있었다.',
      ]);
      await digital.print_and_wait([
        sprt_sta,
        ', 단거리 G1 레이스는 이론적으로 ',
        halo.get_colored_name(),
        '에게 유리할 터였으나……',
      ]);
      await digital.print_and_wait('——결과는 7착.');
      await digital.print_and_wait('입착조차 하지 못했다.');
      await digital.print_and_wait([
        '레이스가 끝난 직후, ',
        digital.get_colored_name(),
        '은 ',
        halo.get_colored_name(),
        '의 앞에 나타났다.',
      ]);
      await halo.say_and_wait([
        '보러 와 줬구나, ',
        h_call_d,
        '. 상관 말고 내버려 두라고 말하고 싶지만, 너니까 특별히 나와 함께 있을 권리를 줄게.',
      ]);
      await digital.say_and_wait([
        '저기…… 비록 결과는 아쉬웠지만, ',
        call_61,
        '의 그 아름다움에 저는 다시금 감동했어요.',
      ]);
      await digital.say_and_wait(
        '날카로운 눈빛, 뿜어져 나오는 품격, 화려한 코너링까지!',
      );
      await halo.say_and_wait('……그뿐이야?');
      await digital.say_and_wait('에엣?');
      await halo.say_and_wait(
        '내가 일류라고 생각하는 이유가 고작 그뿐이냐고 묻는 거야.',
      );
      await digital.print_and_wait([
        digital.get_colored_name(),
        '은 이어서 더 많은 말을 쏟아냈지만……',
      ]);
      await halo.say_and_wait(
        '……일류가 되기 위해 무엇보다 중요한 것이 한 가지 더 있어.',
      );
      await digital.print_and_wait(
        '레이스가 끝난 뒤의 경기장에는 사람들의 발길이 거의 끊겨 있었다.',
      );
      await digital.print_and_wait([
        halo.get_colored_name(),
        '는 조용히 스타트 라인으로 걸어가 출발 자세를 취했다.',
      ]);
      await halo.say_and_wait('기회다. 지금 나와 함께 달려 보겠어?');
      era.drawLine();
      await digital.print_and_wait([
        '방금 레이스를 치른 직후였기에 ',
        halo.get_colored_name(),
        '의 피로감이 눈에 띄게 드러났다.',
      ]);
      await halo.say_and_wait(
        '하아…… 하아…… 쿨럭…… 후후훗…… 정말이지, 꼴사납네.',
      );
      await halo.say_and_wait([
        h_call_d,
        ', 지금의 난 어때? 날카로운 눈빛도, 품격도, 화려함도 전부 사라졌지.',
      ]);
      await halo.say_and_wait(
        '일류의 증거를 하나도 남기지 못한 내가 여전히 일류라고 생각해?',
      );
      await digital.say_and_wait('그건…… 그게……');
      await halo.say_and_wait('하지만, 설령 이런 상태라 해도——');
      await digital.print_and_wait([
        '방금 레이스에서 보았던 날카로운 눈빛이 지금의 ',
        halo.get_colored_name(),
        '에게서 다시금 번뜩였다.',
      ]);
      await halo.say_and_wait('한 번 더 달린다면 결과가 어떨까?');
      await halo.say_and_wait('만약 안 된다면 내일 다시 달리면 어떨까?');
      await halo.say_and_wait(
        '내일 실패하더라도 모레 또 도전한다면 어떨 것 같아?',
      );
      await halo.say_and_wait([
        h_call_d,
        '! 잘 봐. 지금의 나에게 정말 아무것도 남지 않았는지!',
      ]);
      await digital.say_and_wait('！');
      await digital.say_and_wait(
        '아직 남아 있어요! 개척하는 나침반처럼, 만년설처럼 결코 변하지 않는 것이!',
      );
      await halo.say_and_wait(
        '——불굴의 집념. 아무리 꺾여도 굴복하지 않는 마음.',
      );
      await halo.say_and_wait('이것만큼은 그 누구도 내게서 뺏어 갈 수 없지.');
      await halo.say_and_wait('이것이 바로 나, 킹이 영원한 일류인 이유야!');
      await digital.print_and_wait([
        '실력이 쇠퇴했을지언정, ',
        halo.get_colored_name(),
        '의 「일류」다운 정신과 불굴의 의지는 결코 시들지 않았다.',
      ]);
      await digital.say_and_wait(['오오오오…… ', call_61, '……!']);
      await digital.print_and_wait([
        '온몸이 상처투성이일지라도 ',
        halo.get_colored_name(),
        '의 모습은 이토록 아름다웠다.',
      ]);
      await halo.say_and_wait([
        '약속할게. 나는 『',
        mile_cha,
        '』에서 반드시 예전의 모습으로 돌아오겠어!',
      ]);
      await halo.say_and_wait(
        '날 동정해서 전력을 다하지 않는다면, 그건 너무나도 무례한 짓이니까 말이야.',
      );
      await digital.say_and_wait(
        '네, 알겠습니다. 일류의 편린…… 확실히 받았습니다.',
      );
      await digital.say_and_wait('하지만, 이 말 한마디만은 하게 해 주세요……');
      await digital.say_and_wait([
        '역시 당신은…… ',
        halo.sex_code !== 1 ? '여신' : '신',
        '……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_mile_cha_c: (() => {
    const title = '마일 CS 시작!';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} halo キングヘイロー
     * @param {PrintedSpan} h_call_d キングヘイローのアグネスデジタルへの呼び方
     */
    const f = async (digital, halo, h_call_d) => {
      await era.printAndWait([
        halo.get_colored_name(),
        '——',
        digital.get_colored_name(),
        '이 데뷔하기 전부터 줄곧 우러러봤던 ',
        digital.uma_sex_title,
        '. 이제 ',
        digital.get_colored_name(),
        '은 마침내 ',
        digital.sex,
        '와 나란히 설 수 있게 되었다.',
      ]);
      await era.printAndWait([
        '패독에 선 ',
        halo.get_colored_name(),
        '는 그동안의 쇠한 기색을 털어내고 기세를 높이고 있었다. 마치 전성기로 돌아간 듯했다.',
      ]);
      await halo.say_and_wait([
        '어때? ',
        h_call_d,
        ', 오늘의 나는 눈이 부실 만큼 빛나지?',
      ]);
      await digital.say_and_wait(
        '네! 더없이 눈부세요! 하지만…… 등은 올봄만큼 꼿꼿하지 않네요……',
      );
      await halo.say_and_wait(
        '아하…… 역시 숨길 수 없구나. 그런 것까지 알아보다니.',
      );
      await halo.say_and_wait([h_call_d, ', 너는 나를 얼마나 좋아하는 거야?']);
      await digital.say_and_wait('이 팬심은 마리아나 해구보다 깊다고요!');
      await era.printAndWait([
        halo.get_colored_name(),
        '와 ',
        digital.get_colored_name(),
        '은 웃으며 이야기를 나누고 있었다. 이곳에서 ',
        digital.couple_title,
        '이 말로 다 할 수 없는 레이스를 보여 주리라는 걸 알 수 있었다.',
      ]);
      await digital.say_and_wait(
        '당신의 진심을 오늘 레이스에서 확실히 알아내겠어요!',
      );
      await halo.say_and_wait([
        '진짜 일류가 무엇인지 온몸으로 이해하도록 해! ',
        h_call_d,
        '！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  mile_cha_win_c: (() => {
    const title = '마일 CS 승리';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} halo キングヘイロー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} call_61 アグネスデジタルのキングヘイローへの呼び方
     * @param {PrintedSpan} h_call_d キングヘイローのアグネスデジタルへの呼び方
     * @param {PrintedSpan} mile_cha マイルチャンピオンシップ（着色名）
     */
    const f = async (
      digital,
      halo,
      you,
      callname,
      call_15,
      call_58,
      call_61,
      h_call_d,
      mile_cha,
    ) => {
      await digital.print_and_wait([
        '가장 밑바닥에서 기어 올라온 ',
        halo.get_colored_name(),
        '. ',
        digital.get_colored_name(),
        '은 ',
        digital.sex,
        '의 생존 전략을 처음부터 끝까지 지켜봤다.',
      ]);
      await halo.say_and_wait([
        '어때, ',
        h_call_d,
        '? 나와 이 중요한 레이스를 달리고 나니 알겠지?',
      ]);
      await halo.say_and_wait([
        halo.get_colored_name(),
        '가 어떤 ',
        digital.uma_sex_title,
        '인지.',
      ]);
      await digital.say_and_wait('네…… 네……');
      await digital.print_and_wait([
        '그렇게 ',
        halo.get_colored_name(),
        '에게 「',
        digital.uma_sex_title,
        '란 무엇인가」를 배운 ',
        digital.get_colored_name(),
        '은 ',
        mile_cha,
        '에서 우승한 뒤 흐느껴 울었다.',
      ]);
      await digital.print_and_wait([
        halo.get_colored_name(),
        '의 존재는 그만큼 ',
        digital.sex,
        '를 감동시켰다.',
      ]);
      await halo.say_and_wait('왜 그래? 계속 울기만 하면 이야기를 못 하잖아.');
      await digital.say_and_wait('온몸으로…… 그 빛을 받았어요……');
      await digital.say_and_wait([
        '그리고 깨달았어요. ',
        digital.uma_sex_title,
        '로 산다는 게 어떤 의미인지.',
      ]);
      await digital.say_and_wait(
        '불굴의 달리기에 깃든 영혼! 본능! 준비가 부족해도 일류의 기개를 끝까지 지키는 거예요!',
      );
      await digital.say_and_wait(
        '예전의 저는 전혀 몰랐어요. 하지만 이제는 알아요. 달리면 되는 거예요! 약한 소리도 달리면서 하면 돼요!',
      );
      await digital.say_and_wait([
        '지금은 ',
        digital.uma_sex_title,
        '가 더 좋아졌어요!',
      ]);
      await halo.say_and_wait([
        '후후, 너는 정말 ',
        digital.uma_sex_title,
        '를 좋아하는구나.',
      ]);
      await halo.say_and_wait([
        h_call_d,
        ', 더 많은 ',
        digital.uma_sex_title,
        '와 함께 달려! 모든 걸 흡수하고, 그러고 나서……',
      ]);
      await halo.say_and_wait([
        '진짜 올라운더가 되는 거야! 너도 네가 가장 좋아하는 ',
        digital.uma_sex_title,
        ' 중 한 명이니까!',
      ]);
      await digital.print_and_wait([
        halo.get_colored_name(),
        '는 마지막으로 ',
        digital.get_colored_name(),
        '에게 축복을 건넸다. ',
        digital.get_colored_name(),
        '이 앞으로 더 많은 ',
        digital.uma_sex_title,
        '와 겨뤄 진정한 「올라운더」가 되라는 축복을.',
      ]);
      era.drawLine({ content: '지하 통로' });
      await digital.say_and_wait([
        callname,
        ', 저의 동지여. ',
        call_61,
        '께 무엇과도 바꿀 수 없는 것을 받았어요.',
      ]);
      await digital.say_and_wait([
        '더 많은 ',
        digital.uma_sex_title,
        '와 달려야 해요. 어떻게 하면 좋을까요……',
      ]);
      await era.printAndWait('그럼 차라리……');
      await era.printAndWait([
        '상의 끝에 ',
        digital.get_colored_name(),
        '은 앞으로 더 많은 G1에 출전하기로 했다.',
      ]);
      await digital.say_and_wait([
        '맞아요, 그리고 그다음에는 ',
        call_15,
        '과(와) ',
        call_58,
        '에게 도전하는 거예요!',
      ]);
      await era.printAndWait([
        '줄곧 우러러보기만 했던 ',
        digital.get_colored_name(),
        '이 마침내 용기를 내어, 한때의 최애에게 도전하려 한다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = '새해 참배';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param opera
     * @param tachyon
     * @param shakur
     * @param falcon
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_61 アグネスデジタルのキングヘイローへの呼び方
     * @param {PrintedSpan} callname_32 アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} t_call_d アグネスタキオンのアグネスデジタルへの呼び方
     * @param {PrintedSpan} s_call_d エアシャカールのアグネスデジタルへの呼び方
     * @param {PrintedSpan} f_call_d スマートファルコンのアグネスデジタルへの呼び方
     */
    const f = async (
      digital,
      opera,
      tachyon,
      shakur,
      falcon,
      you,
      callname,
      call_15,
      call_61,
      callname_32,
      t_call_d,
      s_call_d,
      f_call_d,
    ) => {
      await digital.say_and_wait(
        '신령님! 올해는 굿즈 같은 건 됐으니까, 제발 라이벌을 내려주세요!',
      );
      await era.printAndWait([
        '이럴 수가! ',
        digital.get_colored_name(),
        '에게서 이런 말이 나오다니, ',
        digital.sex,
        '는 대체 무슨 자극을 받은 걸까?!',
      ]);
      await you.say_and_wait('디지털? 왜 갑자기 그런 말을 해?');
      await era.printAndWait([
        digital.get_colored_name(),
        '이 ',
        you.get_colored_name(),
        '에게 털어놓기를, 얼마 전 ',
        opera.get_colored_name(),
        '가 ',
        digital.get_colored_name(),
        '에게는 라이벌이 부족하다고 지적했다고 한다.',
      ]);
      await digital.say_and_wait([
        '음, 지난번 ',
        call_15,
        '가 말씀하신 대로 제가 지금보다 더 강해지지 못하는 이유는……',
      ]);
      await era.printAndWait('라이벌.');
      await era.printAndWait([
        digital.get_colored_name(),
        '에게는 라이벌이 부족하다. 트레이너인 ',
        you.get_colored_name(),
        '은(는) 라이벌이 ',
        digital.uma_sex_title,
        '에게 얼마나 큰 동기와 자극이 되는지 알고 있다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        digital.get_colored_name(),
        '의 경우는 너무나 특별하다. ',
        digital.sex,
        '가 지닌 그 성향, ',
        digital.uma_sex_title,
        '를 향한 순수한 애정도 라이벌 못지않은 효과를 ',
        digital.sex,
        '에게 주기 때문이다.',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '에게 정말 라이벌이 필요한 걸까?',
      ]);
      await digital.say_and_wait(
        '으으으, 전에는 너무 깊게 관여하고 싶지 않아서 라이벌은커녕 경기장에서 상대와 대화도 거의 안 했는데, 이제 와서 업보가 돌아온 걸까요……',
      );
      await era.printAndWait([
        '그래도 이번 기회에 ',
        digital.get_colored_name(),
        '이 다른 ',
        digital.uma_sex_title,
        '들과 교류해 보는 것도 나쁘지 않겠다.',
      ]);
      await you.say_and_wait('그럼 라이벌을 찾아보자!');
      await era.printAndWait('그리하여……');
      era.drawLine();
      await shakur.say_and_wait('하? 라이벌? 일찌감치 때려치워.');
      await digital.say_and_wait('기다려 봐요! 마침 동기인데 딱 좋잖아요.');
      await shakur.say_and_wait([
        '있지, ',
        s_call_d,
        ', 다른 건 몰라도 적어도 나는 안 맞는 것 같아. 그럼 이만.',
      ]);
      era.drawLine();
      await falcon.say_and_wait(
        '에? 라이벌? 왠지 아이돌 이미지랑은 좀 안 맞는 것 같은데~',
      );
      await digital.say_and_wait(
        '아니 아니 아니, 아이돌 중에는 그런 라이벌이 있어서 서로 대결하면서도 서로 돕는 그런 느낌이 있잖아요!',
      );
      await falcon.say_and_wait([
        '아하하, 팔코는 ',
        digital.uma_sex_title,
        '들의 작은 아이돌 정도가 한계일 것 같아. 그런 건 나한테 안 맞는걸…… 그래도 ',
        f_call_d,
        ', 제안해 줘서 정말 기뻐!',
      ]);
      era.drawLine();
      await tachyon.say_and_wait([
        '흠흠…… 라이벌이라…… 하지만 ',
        t_call_d,
        ', 자네는 연구 대상으로서나 어울리지 내 이념과는 맞지 않아!',
      ]);
      await digital.say_and_wait('……그렇군요.');
      await era.printAndWait([
        '여러 가지 이유로 몇 번이나 거절당한 ',
        digital.get_colored_name(),
        '. 그 활발한 ',
        digital.sex,
        '조차 귀가 축 처지고 말았다.',
      ]);
      await tachyon.say_and_wait([
        '그렇게 축 처져 있지 말게나, ',
        t_call_d,
        '. 그리고 자네도, ',
        callname_32,
        '. 자네는 알고 있겠지? ',
        t_call_d,
        '의 라이벌이 될 만한 후보를.',
      ]);
      await era.printAndWait([
        '특유의 눈빛으로 ',
        you.get_colored_name(),
        '을(를) 뚫어지게 쳐다보며, ',
        tachyon.get_colored_name(),
        '은 턱 끝으로 ',
        you.get_colored_name(),
        '을(를) 가리켰다.',
      ]);
      await digital.say_and_wait([
        '에에에! ',
        callname,
        ', 알고 있나요? 제 라이벌이 될 만한 사람을?',
      ]);
      await you.say_and_wait('확실히 그렇긴 해.');
      await digital.say_and_wait('그럼 왜 처음부터 말 안 해 줬어요?');
      await era.printAndWait([
        digital.get_colored_name(),
        '은 애가 타서 금방이라도 ',
        you.get_colored_name(),
        '의 품으로 뛰어들 기세였다.',
      ]);
      await tachyon.say_and_wait([
        '보아하니 저 사람도 나름대로 생각이 있는 모양이군. ',
        t_call_d,
        ', 이제부턴 지루한 해답 편이겠으니 난 이만 가 보겠네.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 분위기를 살피더니 눈치껏 자리를 떠났다.',
      ]);
      await you.say_and_wait(
        '실은 네가 라이벌을 찾아다니는 걸 보고 깨달은 것도 있어. 그리고 나도 확인하고 싶은 게 있었거든……',
      );
      await you.say_and_wait('그래서 내 결론은 이거야. 네 라이벌은 모두야!');
      await digital.say_and_wait(
        '모두……! 그럼 모두를 좋아하는 올팬이어도 된다고요?! 잠깐, 그 말은 예전의……',
      );
      await era.printAndWait([
        '그렇다. 오늘 ',
        digital.get_colored_name(),
        '이 찾아다니는 사람들을 보며 떠올린 생각이다. ',
        digital.get_colored_name(),
        '이 찾아간 사람 중에는 잔디가 특기인 사람도, 더트가 특기인 사람도 있었다. 처음부터 그랬다……',
      ]);
      await you.say_and_wait('단 한 사람만 고를 수는 없지.');
      await you.say_and_wait(
        '누구를 골라도 디지털처럼 두 코스를 모두 달릴 수는 없어. 하지만 만약……',
      );
      await digital.say_and_wait('모두라면……');
      await you.say_and_wait('그래.');
      await digital.say_and_wait('아하하하, 설마 했는데 또 모두였네요.');
      await digital.say_and_wait([
        call_61,
        '의 말씀, 『더 많은 ',
        digital.uma_sex_title,
        '들과 함께 달리는 것』, 반드시 이루겠어요!',
      ]);
      await digital.say_and_wait(
        '모두를 라이벌로 삼다니, 생각해 보면 참 욕심도 많네요…… 모두에게서 뭘 얻을 수 있을까요?',
      );
      era.print([you.get_colored_name(), '은(는) 결정했다:']);
      era.printButton('양분 (스태미나 +20)', 1);
      era.printButton('우정의 힘 (모든 능력치 +5)', 2);
      era.printButton('다양성 (스킬 포인트 +30)', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await you.say_and_wait('말하자면 그건 양분이겠지.');
          await digital.say_and_wait([
            '맞아요! ',
            digital.uma_sex_title,
            '짱들마다 색다른 맛이 있어서, 매번 기운이 솟아난다고요!',
          ]);
          await digital.say_and_wait(
            '매일매일 신선한 먹거리가 넘쳐나죠! 이보다 더 좋은 연료는 없어요!',
          );
          await era.printAndWait([
            '앞으로도 ',
            digital.uma_sex_title,
            '들은 ',
            digital.get_colored_name(),
            '에게 더 많은 활력을 줄 것이다.',
          ]);
          break;
        case 2:
          await you.say_and_wait('그래, 바로 우정이지! POWER!');
          await digital.say_and_wait([
            '오호호, ',
            digital.uma_sex_title,
            '짱들이 조금씩만 힘을 나눠 주면 저는 무적이에요!',
          ]);
          await digital.say_and_wait(
            '흥흥, 우하하하, 생각만 해도 온몸에 힘이 솟구치는 기분이에요!',
          );
          await era.printAndWait([
            '한 사람당 우마 코인 하나씩 모으자는 것과는 조금 다르다. ',
            digital.get_colored_name(),
            '은 ',
            digital.uma_sex_title,
            '들에게서 힘을 얻어 한층 더 강해질 수 있다.',
          ]);
          break;
        case 3:
          await you.say_and_wait('다양성, 그거지!');
          await digital.say_and_wait([
            '물론이죠! ',
            digital.uma_sex_title,
            '짱들의 다채로운 달리기는 흔히 나누는 각질의 틀 안에 담을 수 없어요!',
          ]);
          await digital.say_and_wait(
            '마치 우마무스메 도감을 수집하는 것처럼 전부 기록해 두겠어요!',
          );
          await era.printAndWait([
            '전부 수집하려는 유저인 걸까. ',
            digital.get_colored_name(),
            '은 이 게임을 통해 분명 새로운 기술을 습득할 수 있을 것이다.',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = '밸런타인데이';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     */
    const f = async (digital, you, callname) => {
      await era.printAndWait([
        '아침 일찍 트레이닝실에 도착한 ',
        digital.get_colored_name(),
        '이 가져온 것은…… 초콜릿 한 『더미』였다.',
      ]);
      await era.printAndWait('왜 세는 단위가 『더미』인 거야?!');
      await digital.say_and_wait([
        '제가 심혈을 기울인 작품이에요! 떠올릴 수 있는 ',
        digital.uma_sex_title,
        '짱들의 특징을 전부 이 초콜릿에 담았어요!',
      ]);
      await era.printAndWait(
        '탑처럼 쌓인 상자들을 바라보았다. 설마 안에 든 초콜릿이 한 알 한 알 전부 다른 건가?!',
      );
      await digital.say_and_wait('그럼, 제사를 올리겠어요!');
      await era.printAndWait('뭐야, 제단은 또 어디서 난 거야?!');
      await era.printAndWait([
        digital.get_colored_name(),
        '은 제단 앞에 초콜릿을 전부 늘어놓더니, 무언가를 중얼거리고는 묘하게 손까지 비벼 댔다.',
      ]);
      await digital.say_and_wait(
        '좋아, 됐어! 삼여신님도 내 소원을 받아 주셨겠지.',
      );
      await era.printAndWait(
        '삼여신님께 기도할 거면 왜 중앙 정원으로 안 가는 거야?!',
      );
      await digital.say_and_wait([
        callname,
        ', 이제 같이 먹어요. 낭비하면 안 되니까요.',
      ]);
      era.printButton('「먹어도 되는 거야?!」', 1);
      await era.input();
      await digital.say_and_wait(
        '그럼요. 마음만 전해지면 되는걸요. 음식을 낭비하는 것도 신성모독이라고요!',
      );
      await digital.say_and_wait('이제 먹으면서 이야기해요!');
      await digital.say_and_wait([
        '으으으, 전 정말 운이 좋아요. 함께 ',
        digital.uma_sex_title,
        '에 관해 이야기할 동지를 만나다니……',
      ]);
      await digital.say_and_wait([
        '그래서요, 그래서요, ',
        callname,
        ', 요즘 가장 좋아하는 ',
        digital.uma_sex_title,
        '는…… 누구인가요?',
      ]);
      await era.printAndWait('물어볼 것도 없다.');
      era.printButton('「자, 초콜릿이야.」', 1);
      await era.input();
      await era.printAndWait('냉장고에서 초콜릿을 꺼냈다……');
      await digital.say_and_wait('오오오, 저네요.');
      await digital.say_and_wait('에에에엑? 아니, 이게 초콜릿이라고요?');
      await digital.say_and_wait([
        '이, 이 무슨 박애 정신?! 이렇게 마이너한 ',
        digital.uma_sex_title,
        '를 최애로 삼으려는 분이 계시다니요?',
      ]);
      await you.say_and_wait([
        '무슨 소리야. 난 네 ',
        callname,
        '이잖아…… 그런데 자기가 마이너하다고 생각했던 거야……? SNS 팔로워도 적지 않잖아?',
      ]);
      await era.printAndWait([
        '그 말을 들은 ',
        digital.get_colored_name(),
        '은 갑자기 말을 더듬기 시작했다.',
      ]);
      await digital.say_and_wait(
        '그건…… 사실 제 SNS에는 데뷔 전부터 팔로워가 꽤 있었어요. 예전부터 쭉…… 동인지를……',
      );
      await era.printAndWait([
        '어? 그러고 보니 들은 적이 있다. ',
        digital.get_colored_name(),
        '은 데뷔 전부터 특정 분야에서는 유명했다던데……',
      ]);
      await digital.say_and_wait([
        '하지만! ',
        callname,
        '의 그 정신, 그야말로 덕후의 귀감이에요! 함께라면 십 년이든 그 이상이든 밸런타인데이를 보낼 수 있겠어요!',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '과 이야기를 나누며 떠들썩한 밸런타인데이를 보냈다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = '팬 감사제';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} luna シンボリルドルフ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     */
    const f = async (digital, luna, you, callname) => {
      await digital.say_and_wait([
        '디지땅, ',
        digital.get_colored_name(),
        '의 축제가 드디어 왔어요! 우와아, 이 주변 풍경은 그야말로 팬들의 천국……',
      ]);
      await era.printAndWait([
        '팬 감사제…… 이름 그대로, 아이돌이기도 한 ',
        digital.uma_sex_title,
        '들이 팬들의 응원에 보답하는 행사다.',
      ]);
      await era.printAndWait(
        '그렇다고는 해도 실제로는 학원제와 비슷한 면도 있다.',
      );
      await era.printAndWait([
        '하지만 ',
        digital.get_colored_name(),
        ', 올해는 팬으로만 참가하는 게 아니지!',
      ]);
      await you.say_and_wait('디지털, 사실 오늘의 너는 응원을 받는 쪽이라고!');
      await digital.say_and_wait('뀨엑!');
      await digital.say_and_wait('아뇨아뇨, 저 같은 게 무슨……');
      await era.printAndWait([
        '말도 안 된다는 표정을 짓는 ',
        digital.get_colored_name(),
        '. 예전이라면 맞는 말이었겠지만……',
      ]);
      await you.say_and_wait(
        '그렇게 많은 레이스에서 성과를 냈잖아. 이제 자각 좀 하자. SNS에 예전부터 있던 팬도 있겠지만, 새로 생긴 팬도 적지 않다고.',
      );
      await era.printAndWait([
        '정곡을 찔린 듯 ',
        digital.get_colored_name(),
        '은 양손을 들고 항복했다. 마음의 준비는 된 모양이다.',
      ]);
      await era.printAndWait([
        '그렇게 사인회에 도착한 ',
        digital.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        '처음에는 ',
        digital.get_colored_name(),
        '도 조금 당황했지만, 곧 ',
        digital.sex,
        '는……',
      ]);
      await digital.say_and_wait('네네! 색지에 정성껏 이름을 써 드렸어요!');
      await era.printAndWait(
        '팬들이 하나같이 웃는 얼굴로 줄을 서게 만들었다고?!',
      );
      await digital.say_and_wait(
        '저도 예전에는 줄곧 최애를 응원하는 쪽이었으니까요…… 팬분들의 마음은 당연히 잘 알죠.',
      );
      await digital.say_and_wait([
        '그리고 ',
        callname,
        ', 이따가 제가 행사장을 좀 정리해도 될까요? 허락만 받으면 디지땅의 주최자 혼을 보여 드릴게요!',
      ]);
      await era.printAndWait([
        '스태프의 허가를 받은 ',
        digital.get_colored_name(),
        '은 곧바로 행사장 곳곳을 누비며 여러 행사까지 매끄럽게 진행되도록 정리해 버렸다?!',
      ]);
      await era.printAndWait([
        '이후 그 소식이 ',
        luna.get_colored_name(),
        '의 귀에 들어가, ',
        digital.sex,
        '가 직접 많은 ',
        digital.uma_sex_title,
        '들을 이끌고 감사를 전하러 왔을 때는……',
      ]);
      await digital.say_and_wait(
        '이게 무슨 일이죠, 제가 최애가 된 하루잖아요?!',
      );
      await era.printAndWait([
        '너무 감격한 나머지 쓰러져 버린 ',
        digital.get_colored_name(),
        '. 그제야 오늘 하루의 분투가 끝났다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_95_17: (() => {
    const title = 'NHK 마일컵 관람';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {PrintedSpan} nhk_cup NHKマイルカップ（着色名）
     */
    const f = async (digital, nhk_cup) => {
      await era.printAndWait([
        digital.get_colored_name(),
        '과 함께, 작년에 ',
        digital.get_colored_name(),
        '이 출전했던 ',
        nhk_cup,
        '을(를) 보러 왔다.',
      ]);
      await era.printAndWait([
        '요즘 ',
        digital.get_colored_name(),
        '은 후배들에게도 관심을 갖기 시작했다. 그중에서도 가장 ',
        digital.sex,
        '의 눈길을 끈 것은……',
      ]);
      await era.printAndWait([
        '올해 ',
        nhk_cup,
        '에서 우승한, 최근 화제의 신예 쿠로후네였다.',
      ]);
      await digital.say_and_wait(
        '우오오오, 저 커다란 보폭, 긴 다리! 저, 더는 못 참아요!',
      );
      await digital.say_and_wait([
        '쿠로후네, ',
        digital.sex,
        ', ',
        digital.sex,
        '는 제가 달렸던 잔디 위를 달린 거예요!',
      ]);
      await digital.say_and_wait('가슴속에서 뭔가 터질 것 같아요!');
      await era.printAndWait([
        '그러더니 ',
        digital.get_colored_name(),
        '은 곧장 울타리로 달려갔다……',
      ]);
      await digital.say_and_wait(
        '쿠로후네 씨! 힘내세요! 앞으로 무슨 일이 생겨도 선배들이 도와줄 테니까요!',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        '은 작년 ',
        nhk_cup,
        ' 이후 많은 일을 겪었다.',
      ]);
      await era.printAndWait([
        '한 해가 지나 또 새로운 세대가 나타났다. 이어지는 발자취가 ',
        digital.get_colored_name(),
        '의 가슴을 뜨겁게 만든 것이리라.',
      ]);
      await era.printAndWait([
        '돌아온 ',
        digital.get_colored_name(),
        '은 또다시 쿠로후네를 소개하기 시작했다……',
      ]);
      era.println();
      await era.printAndWait([
        '여러 경기장에 대한 적성이 ',
        digital.get_colored_name(),
        '과 비슷하다는 점도 ',
        digital.get_colored_name(),
        '에게 친근감을 느끼게 하는 모양이다.',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '은 최애를 우러러보기만 하던 팬에서, 후배를 배려할 줄 아는 선배로 성장했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_95_23: (() => {
    const title = '용사의 도전';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} tenn_sho 天皇賞（秋）（着色名）
     */
    const f = async (digital, opera, doto, you, call_15, call_58, tenn_sho) => {
      await era.printAndWait([
        '마침내 ',
        digital.get_colored_name(),
        '은 여름 합숙 전에 여러 큰 레이스를 치렀다. 경험도 충분히 쌓았을 것이다.',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '과 지금까지의 레이스를 돌아보니, 참 많은 만남이 있었다.',
      ]);
      await digital.say_and_wait([
        '좋아! 때가 왔어! 호로관 전투다! ',
        call_15,
        '와 ',
        call_58,
        '에게 도전장을 내겠어요!',
      ]);
      await digital.say_and_wait('음…… 잠깐, 어느 레이스가 좋을까요?');
      await era.printAndWait([
        '확실히 ',
        opera.get_colored_name(),
        '와 ',
        doto.get_colored_name(),
        '는 더트 적성이 낮고, 거리로는 마일에 약하다.',
      ]);
      await era.printAndWait([
        '한편 ',
        digital.get_colored_name(),
        '도 장거리 적성은 그리 좋지 않다……',
      ]);
      await you.say_and_wait(
        '진심으로 도전한다면 역시 황금 조건인 잔디·중거리겠네.',
      );
      await era.printAndWait('다만 이건……');
      await digital.say_and_wait([
        '그렇죠…… ',
        digital.couple_title,
        '을 제가 유리한 진흙탕으로 끌어들이고 싶지는 않아요…… 역시 정정당당하게 승부해야죠.',
      ]);
      await era.printAndWait([
        '이제는 자칭이 아닌 진정한 패왕이 된 ',
        opera.get_colored_name(),
        '와, 그 뒤를 바짝 쫓는 ',
        doto.get_colored_name(),
        '. 황금 거리에서 승부한다면……',
      ]);
      await you.say_and_wait([tenn_sho, ', 이 레이스가 가장 적합하겠네.']);
      await era.printAndWait([
        digital.get_colored_name(),
        '에게 유리한 조건은 전혀 없는 레이스다.',
      ]);
      await digital.say_and_wait(
        '맞아요! 이거예요! 도쿄 2000미터 잔디, 이보다 더 어울리는 무대는 없어요!',
      );
      await you.say_and_wait('정말 괜찮겠어?');
      await digital.say_and_wait('호에? 무슨 뜻인가요?');
      await you.say_and_wait('상당히 힘들 텐데?');
      await era.printAndWait([
        digital.get_colored_name(),
        '도 그 말에는 잠시 말문이 막혔다.',
      ]);
      await digital.say_and_wait(
        '……아아, 성격 탓인가 봐요. 게임에서도 제일 쉬운 난이도를 고르지 않고, 특전 DLC의 강한 장비도 안 쓰는 것처럼요……',
      );
      await digital.say_and_wait('그리고 저는, 최고의 달리기를 보고 싶어요!');
      await digital.say_and_wait('그러니까 함께해 주실 거죠!');
      await you.say_and_wait('물론이지!');
      await era.printAndWait([
        digital.get_colored_name(),
        '은 바로 이런 사람이다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '여름 합숙(시니어급) 시작';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} halo キングヘイロー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} call_61 アグネスデジタルのキングヘイローへの呼び方
     * @param {PrintedSpan} h_call_d キングヘイローのアグネスデジタルへの呼び方
     * @param {PrintedSpan} nhk_cup NHKマイルカップ（着色名）
     * @param {PrintedSpan} tenn_sho 天皇賞（秋）（着色名）
     */
    const f = async (
      digital,
      halo,
      you,
      call_15,
      call_58,
      call_61,
      h_call_d,
      nhk_cup,
      tenn_sho,
    ) => {
      await digital.say_and_wait(
        '우구구, 올해, 올해만큼은…… 시간이 없어! 멈춰야 해!',
      );
      await era.printAndWait([
        '여름 합숙이 시작되자마자 머리를 감싸 쥐고 신음하는 ',
        digital.get_colored_name(),
        '이 눈에 들어왔다. 뭐랄까, 오랫동안 ',
        digital.get_colored_name(),
        '을 지켜봐 온 ',
        you.get_colored_name(),
        '도 서서히 알게 되었다. ',
        digital.get_colored_name(),
        '에게는 동인지를 만드는 취미도 있다.',
      ]);
      await era.printAndWait([
        digital.sex,
        '는 만든 동인지를 즉매회에 내서 최애를 영업하곤 한다. 참으로 열성적인 팬이다.',
      ]);
      await era.printAndWait(
        '게다가 다음 대형 즉매회는 여름 합숙 기간과 겹친다.',
      );
      await digital.say_and_wait([
        tenn_sho,
        '! 이번 여름엔 ',
        call_61,
        '의 신간을 내지 않을 거예요. 레이스에 전력을 다하겠어요!',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '도 티엠 오페라 오, 메이쇼 도토와의 대결을 무척 중요하게 생각하는 모양이다. 그렇다면 이번 여름 합숙은 걱정할 필요가 없겠다.',
      ]);
      await halo.say_and_wait('어머, 그럼 당분간은 못 보겠네.');
      await digital.say_and_wait(['슈엣! ', call_61, '!']);
      await halo.say_and_wait([
        '그보다 ',
        h_call_d,
        ', 올해 ',
        tenn_sho,
        '에 출전하는 거지?',
      ]);
      await digital.say_and_wait([
        '네, 네에…… ',
        call_61,
        ' 덕분에 몸과 마음을 단련했으니까요…… 드디어 ',
        call_15,
        '와 ',
        call_58,
        '에게 결전을 신청할 때가 왔어요!',
      ]);
      await halo.say_and_wait([
        '그럼 ',
        tenn_sho,
        '은 셋…… 아니, 넷이서 벌이는 대결이겠네.',
      ]);
      await digital.say_and_wait([
        '네? 또 실력을 인정받은 ',
        digital.uma_sex_title,
        '짱이 있나요?',
      ]);
      await halo.say_and_wait(['올해 ', nhk_cup, ', 보러 갔었지?']);
      await digital.say_and_wait([
        '물론이죠. 전 ',
        digital.get_colored_name(),
        '이니까요! 아하하하…… 설마……',
      ]);
      await era.printAndWait([
        '실은 ',
        you.get_colored_name(),
        '도 며칠 전에 소문을 들었다. 바로……',
      ]);
      await halo.say_and_wait([
        '쿠로후네, ',
        digital.sex,
        '는 올해 ',
        tenn_sho,
        '에 출전한대.',
      ]);
      await era.printAndWait([
        '쿠로후네…… 올해 NHK 마일컵을 차지한 그 ',
        digital.uma_sex_title,
        '다. 무서운 주력을 지녔다.',
      ]);
      await era.printAndWait([digital.sex, '도 이 레이스에 출전하는 건가.']);
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '여름 합숙(시니어급) 종료';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} call_61 アグネスデジタルのキングヘイローへの呼び方
     * @param {PrintedSpan} tenn_sho 天皇賞（秋）（着色名）
     */
    const f = async (
      digital,
      opera,
      doto,
      you,
      callname,
      call_15,
      call_58,
      call_61,
      tenn_sho,
    ) => {
      await era.printAndWait([
        '이번 여름 합숙에서 ',
        digital.get_colored_name(),
        '은 유난히 열심히 노력했다. ',
        you.get_colored_name(),
        '은(는) 이렇게 진지한 ',
        digital.get_colored_name(),
        '을 본 적이 없다.',
      ]);
      await era.printAndWait([
        '선배인 ',
        opera.get_colored_name(),
        '와 ',
        doto.get_colored_name(),
        '와의 약속, 그리고 후배 쿠로후네와의 대결. 두 가지 목표 덕분에 지금 ',
        digital.get_colored_name(),
        '의 상태는 그 어느 때보다 좋다!',
      ]);
      await digital.say_and_wait([
        callname,
        ', 느껴져요. 모두의 가호를 받은 용사가 된 것 같아요! 이거라면 ',
        digital.couple_title,
        '과 겨룰 수 있겠어요!',
      ]);
      await you.say_and_wait('이길 수 있겠어?');
      await digital.say_and_wait(
        '솔직히 불안하기만 해요! 저 세 사람 중 누구에게도 이길 자신이 없어요……',
      );
      await digital.say_and_wait(
        '그러니까 제가 믿을 건 지금까지 쌓아 온 다채로운 경험뿐이에요!',
      );
      await era.printAndWait([
        '앞을 가로막은 벽이 아무리 높아도 ',
        digital.get_colored_name(),
        '은 망설이지 않았다.',
      ]);
      await era.printAndWait('하지만 그날 밤……');
      await era.printAndWait('쿠로후네가 출전할 수 없다는 소식이 전해졌다.');
      await era.printAndWait([
        digital.get_colored_name(),
        '은 그날 밤 ',
        you.get_colored_name(),
        '을(를) 불러냈다. 깊은 밤의 모래사장에서 고개를 숙인 채 한마디도 하지 않았다.',
      ]);
      await era.printAndWait([
        '한참이 지나서야 ',
        digital.get_colored_name(),
        '은 입을 열었다……',
      ]);
      await digital.say_and_wait([
        callname,
        '…… 저기, 정말 이런 일도 있는 건가요?',
      ]);
      await era.printAndWait([
        '골절, 팬 수, 득표수, 추첨, 회피…… 여러 이유로 출전하지 못하는 경우는 ',
        digital.get_colored_name(),
        '도 보아 왔다.',
      ]);
      await era.printAndWait([
        '하지만 출전할 자리가 부족해서 나가지 못하다니. 이런 경우는 ',
        digital.get_colored_name(),
        '에게 처음이었다.',
      ]);
      await digital.say_and_wait(
        '레이스에는 반드시 승리의 미소와 패배의 눈물이 함께하죠.',
      );
      await digital.say_and_wait([
        '하지만 눈물 끝에는 반드시 감동이 있어요. 그러니까 ',
        digital.uma_sex_title,
        '들은 다음 레이스에서도 다시 맞부딪칠 수 있는 거예요.',
      ]);
      await digital.say_and_wait('……그런데…… 달리지도 못한다면, 그건 대체……');
      await era.printAndWait('모든 준비를 마쳤는데도 출전하지 못한다.');
      await digital.say_and_wait([
        '만약 제가 출전하는 바람에…… ',
        digital.sex,
        '의 꿈이 꺾인 거라면……',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '은 잔뜩 침울해져서, 물러서려는 마음마저 품기 시작했다.',
      ]);
      await you.say_and_wait([
        '설마 ',
        tenn_sho,
        '에 출전하지 않겠다고 하려는 건 아니지?!',
      ]);
      await digital.say_and_wait('그…… 그런 건 아니에요.');
      await digital.say_and_wait([
        '저도, 저도 ',
        call_15,
        '와 ',
        call_58,
        '와의 약속이 있으니까요……',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '도 알고 있다. ',
        digital.sex,
        '가 바꿀 수 있는 것은 아무것도 없다는 걸.',
      ]);
      await era.printAndWait([
        digital.uma_sex_title,
        '를 사랑하기에, 그 ',
        digital.uma_sex_title,
        '가 처한 상황이 물풀처럼 ',
        digital.sex,
        '의 다리를 휘감았다.',
      ]);
      await era.printAndWait('하지만 이대로라면……');
      await you.say_and_wait([digital.sex, '를 믿어. 그리고 나도 너를 믿어.']);
      await digital.say_and_wait([
        '그게…… 무슨 뜻인가요? ',
        digital.sex,
        '를 믿으라니……?',
      ]);
      await you.say_and_wait([
        '쿠로후네, ',
        digital.sex,
        '의 발걸음은 멈추지 않아. ',
        digital.sex,
        '에게는 내년도 있어. 올해 ',
        tenn_sho,
        '에 ',
        digital.sex,
        '가 출전할 수 없는 건 사실이지만……',
      ]);
      await you.say_and_wait([
        '그렇다고 ',
        digital.sex,
        '가 이 일 때문에 재기하지 못하고 은퇴할 것 같아?',
      ]);
      await digital.say_and_wait('! 그…… 그럴 리 없어요.');
      await era.printAndWait([
        '뛰어난 ',
        digital.uma_sex_title,
        '는 이런 좌절에 무너지지 않는다.',
      ]);
      await you.say_and_wait(
        '네가 최고의 답을 보여 주는 것, 그게 쿠로후네에게 가장 큰 도움이 될 거야.',
      );
      await digital.say_and_wait([
        '……',
        digital.uma_sex_title,
        '짱들이 괴로움 끝에 손에 넣는 것. 그분들을 보며 알게 됐어요. 그건 무엇과도 비교할 수 없다는 걸요.',
      ]);
      await digital.say_and_wait(
        '슬픔도, 심지어 후회마저도 내일의 힘이 돼요! 알겠어요! 저도 직접 느꼈으니까요!',
      );
      await digital.say_and_wait([
        '그러니 진심으로 말할 수 있어요. ',
        digital.uma_sex_title,
        '는 최고예요!',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '은 일어나 바닷가로 달려갔다……',
      ]);
      await digital.say_and_wait([
        digital.uma_sex_title,
        '는 어떤 고난이 닥쳐도, 불굴의 의지로, 전부, 날려 버린다아아아아!!!!!',
      ]);
      await digital.say_and_wait([
        '나도, ',
        digital.sex,
        '도! 반드시 이겨 낼 거야!!!!',
      ]);
      await digital.say_and_wait('……아아아……');
      await era.printAndWait([
        '마음껏 소리 지른 뒤, ',
        digital.get_colored_name(),
        '은 정신을 차렸다.',
      ]);
      await you.say_and_wait('디지털, 답은 찾은 것 같네.');
      await digital.say_and_wait([
        '……저도 여기서 멈추면 안 돼요. ',
        call_61,
        '에게 받은 소중한 것을 ',
        digital.sex,
        '에게 보여 줘야 해요!',
      ]);
      await digital.say_and_wait([
        '전 반드시 ',
        tenn_sho,
        '에 출전하겠어요. 그리고, 그리고! 압도적으로 우승할 거예요!',
      ]);
      await digital.say_and_wait([
        digital.sex,
        '가 내년에 이 레이스에서 저를 따라잡기 위해 전력을 다할 수 있도록!',
      ]);
      await digital.say_and_wait('반드시! 반드시요!');
      await digital.say_and_wait([
        '그리고 지금까지 만난 모든 ',
        digital.uma_sex_title,
        '들의 마음을 전부 쏟아붓겠어요!',
      ]);
      await digital.say_and_wait('그게 제 책임이에요!');
      await era.printAndWait(
        '이긴다. 그것도 압도적으로. 그렇게 쿠로후네에게 남은 마지막 미련을 끊어 준다.',
      );
      await era.printAndWait([
        '그것이 ',
        digital.get_colored_name(),
        '이 스스로 짊어진 책임이었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_tenn_sho_s: (() => {
    const title = '텐노상(가을) 시작!';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} doto メイショウドトウ
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} o_call_di テイエムオペラオーのアグネスデジタルへの呼び方
     * @param {PrintedSpan} do_call_di メイショウドトウのアグネスデジタルへの呼び方
     * @param {PrintedSpan} tenn_sho 天皇賞（秋）（着色名）
     */
    const f = async (
      digital,
      opera,
      doto,
      call_15,
      call_58,
      o_call_di,
      do_call_di,
      tenn_sho,
    ) => {
      await era.printAndWait(['마침내 찾아온 ', tenn_sho, ' 당일.']);
      await era.printAndWait([
        '패독에서 ',
        digital.get_colored_name(),
        '은 익숙한 두 사람을 만났다.',
      ]);
      await digital.say_and_wait([
        '잘 부탁드려요! ',
        call_15,
        ', ',
        call_58,
        '.',
      ]);
      await doto.say_and_wait(['저야말로요! 잘 부탁드려요, ', do_call_di, '!']);
      await era.printAndWait([
        '삼 년 만에 ',
        digital.get_colored_name(),
        '은 드디어 최애 앞에서도 평범하게 대화를 나눌 수 있게 되었다.',
      ]);
      await opera.say_and_wait(
        '아하하하, 명함이라도 교환하는 건가? 하지만 패왕인 나는 이 빛나는 모습이 모든 것을 말해 주지! 소개 따위는 필요 없다네!',
      );
      await opera.say_and_wait([
        o_call_di,
        ', 나의 대관식에 온 것을 환영하네!',
      ]);
      await opera.say_and_wait(
        '자네의 노력은 지켜봐 왔네. 어느덧 우리의 뒤까지 따라왔다는 사실은 인정할 수밖에 없겠군.',
      );
      await opera.say_and_wait([
        '하지만 뒤는 어디까지나 뒤일 뿐! ',
        o_call_di,
        ', 이 잔디 위에서는 아직 나를 이길 수 없네. 『세기말 패왕』으로서 중거리 잔디를 달리는 나를 말이야!',
      ]);
      await digital.say_and_wait(
        '확실히…… 말씀대로 신체 능력은 아직 미치지 못해요……',
      );
      await digital.say_and_wait(
        '하지만 제 기술, 잔디와 더트에서 쌓은 기술이라면……',
      );
      await era.printAndWait([
        '그렇다. 이번 잔디 레이스에서 이도류인 ',
        digital.get_colored_name(),
        '이 가진 강점은…… 조금만 기다리면 드러날 것이다.',
      ]);
      await era.printAndWait('톡…… 톡……');
      await era.printAndWait('쏴아…… 쏴아……');
      await era.printAndWait(
        '처음에는 한 방울. 곧 빗줄기가 모든 것을 뒤덮었다!',
      );
      await era.printAndWait([
        '그렇다, 포화 상태의 경기장이다. 이번 ',
        tenn_sho,
        '은(는) 비에 젖은 포화 상태의 경기장에서 치러진다!',
      ]);
      await digital.say_and_wait([
        '이건…… ',
        digital.uma_sex_title,
        '짱들의 눈물비…… 아니에요. 제가 만난 모든 ',
        digital.uma_sex_title,
        '짱들이 흘리는 기쁨의 눈물. 제 승리를 축하하는 비예요!',
      ]);
      await opera.say_and_wait(
        '……비인가…… 미리 말해 두지만, 나는 포화 상태의 경기장에서 달리는 데 자신이 있다네. 패왕은 어떤 경기장에도 적응할 수 있지!',
      );
      await doto.say_and_wait('아와와와…… 비가 와요오오……');
      await era.printAndWait([
        '오페라 오는 포화 상태의 경기장에서 강하다. 하지만 ',
        digital.get_colored_name(),
        '은 단순히 강한 정도가 아니다!',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '은 말 그대로 진흙 위를 달려 왔다. 이런 상황이라면……',
      ]);
      await era.printAndWait('남은 건 승리뿐이다.');
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_win_s: (() => {
    const title = '텐노상(가을) 승리';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} tenn_sho 天皇賞（秋）（着色名）
     */
    const f = async (digital, you, callname, tenn_sho) => {
      await era.printAndWait('두두두두두두……');
      await era.printAndWait([
        '낮게 울리는 발소리와 함께 ',
        digital.uma_sex_title,
        '들이 관중석으로 다가왔다. 그때, 뜻밖에도 바깥쪽을 달리는 것은……',
      ]);
      await you.say_as_passer_by_and_wait('실황', [
        digital.get_colored_name(),
        '! ',
        digital.get_colored_name(),
        '입니다! 비에 엉망이 된 잔디 위에서, 무리를 벗어나 최적의 진로를 택했습니다! 그리고……!',
      ]);
      await you.say_as_passer_by_and_wait('실황', [
        '골인! 불가사의한 달리기로 ',
        tenn_sho,
        '을(를) 제패한 주인공은…… ',
        digital.get_colored_name(),
        '!',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '이 쌓아 온 지식, 기술, 감정이 이번에 최고의 조건을 ',
        digital.get_colored_name(),
        '에게 마련해 주었다.',
      ]);
      await era.printAndWait([
        digital.sex,
        '는 진흙투성이 잔디 위에서 마치 고향에 돌아온 듯했다. 진로 선택도 마지막 가속도, 트레이너인 ',
        you.get_colored_name(),
        '이(가) 보기에는 흠잡을 데가 전혀 없었다.',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '은 흔들림 없이 승리를 거머쥐었다.',
      ]);
      era.println();
      await digital.say_and_wait('헤헤…… 콜록콜록…… 아하하하……');
      await digital.say_and_wait('그렇죠, 제 승리인 거죠.');
      await you.say_and_wait('그래, 네 승리야, 디지털.');
      await era.printAndWait([
        digital.get_colored_name(),
        '은 돌아서서 관중석을 향했다.',
      ]);
      await digital.say_and_wait('우오오오오오오오오오오오오오!');
      await you.say_as_passer_by_and_wait(
        '관중석',
        '우오오오오오오오오오오오오오!',
      );
      await digital.say_and_wait('헤와아아아아아아아아아아!');
      await you.say_as_passer_by_and_wait(
        '관중석',
        '헤와아아아아아아아아아아!',
      );
      await digital.say_and_wait('이! 헤! 오! 오오오오오오!');
      await you.say_as_passer_by_and_wait(
        '관중석',
        '이! 헤! 오! 오오오오오오!',
      );
      await era.printAndWait('하하하, 하도 외쳐서 목이 조금 쉬었다.');
      await era.printAndWait([
        '보통 이름을 연호하는 응원과도 다르다. 역시 ',
        digital.get_colored_name(),
        '답다.',
      ]);
      await era.printAndWait([
        '두 팔을 활짝 벌린 채 ',
        you.get_colored_name(),
        '앞으로 달려와, 울타리 너머의 ',
        you.get_colored_name(),
        '을(를) 끌어안아 들어 올렸다.',
      ]);
      await digital.say_and_wait([callname, '! 미지의, 미지의 풍경이에요!']);
      await digital.say_and_wait(
        '무대 위에서 응원 콜의 힘이 느껴져요! 이 감각은 정말 무엇과도 비교할 수 없네요!',
      );
      await you.say_and_wait(
        '그래! 디지털만의 응원 콜이야. 세상에 하나뿐인 콜이라고!',
      );
      await digital.say_and_wait(
        '쿠로후네…… 승리를, 그 두 사람에게서 가져왔어요……',
      );
      await era.printAndWait([
        digital.sex,
        '가 후회하든 슬퍼하든, 이 레이스를 본다면 ',
        digital.sex,
        '도 분명 위안을 얻을 것이다.',
      ]);
      await digital.say_and_wait(
        '나 혼자서는 할 수 없어…… 줄곧 그렇게 생각했어요. 그래서 최애에게 소원을 맡겼던 건데……',
      );
      await digital.say_and_wait('하지만……');
      era.printButton('「내 최고의 최애는 바로 너야!」', 1);
      await era.input();
      await digital.say_and_wait([
        '아하하하, 에헤헤헤…… ',
        callname,
        ', 지금 그런 말씀을 하시면 정말…… 저, 저는……',
      ]);
      await digital.say_and_wait([
        '자자! 서비스예요! 그래요, 팬 서비스요! ',
        callname,
        ', 제 꼬리털이라도 드릴까요?',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '은 너무 기쁜 나머지 조금씩 알아듣기 어려운 말을 하기 시작했다.',
      ]);
      era.printButton('「시상대로 가자, 다들 기다리고 있어.」', 1);
      await era.input();
      await digital.say_and_wait(
        '오오오, 이런 실례를! 하마터면 잊을 뻔했네요!',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        '은 ',
        you.get_colored_name(),
        '을(를) 울타리 안쪽으로 데려왔고, 두 사람은 함께 시상대로 향했다.',
      ]);
      era.println();
      await digital.say_and_wait([
        '아아아, 안녕하세요! 저는 ',
        digital.get_colored_name(),
        '이에요! 따지고 보면 저는 그저 ',
        digital.uma_sex_title,
        '짱을 좋아하는……',
      ]);
      await digital.say_and_wait([
        '저는 그냥 ',
        digital.uma_sex_title,
        '짱의 엉덩이…… 아니, 꼬리를 쫓아 여기까지 온 것뿐인데……',
      ]);
      await digital.say_and_wait([
        '아시겠어요?! 이 감동을요!? 처음의 저는 평범한 ',
        digital.uma_sex_title,
        '짱도 아닌, 그저 팬이었을 뿐이라고요!',
      ]);
      await digital.say_and_wait(
        '그런데 이 반짝임 속에 함께하며, 이 존귀한 풍경 속에서 가장 먼저 결승선을 통과하다니, 정말…… 아무리 감사해도 모자라요……',
      );
      await digital.say_and_wait(
        '우승할 수 있었던 건 이제 저 혼자만의 성과가 아니에요. 지금까지 만난 모든 분과 함께 맺은 결실이죠.',
      );
      await digital.say_and_wait([
        '지금까지 함께한 ',
        digital.uma_sex_title,
        '짱들, 처음엔 제게 있을 리 없다고 생각했던 팬분들, 그리고 ',
        callname,
        '!',
      ]);
      await digital.say_and_wait('오늘 저를 우승하게 해 주신 건 여러분이에요.');
      await digital.say_and_wait('감사…… 정말로, 진심으로 감사해요……');
      await digital.say_and_wait([
        digital.uma_sex_title,
        '짱들은 팬이었을 때 생각했던 ',
        digital.uma_sex_title,
        '짱들보다…… 백 배, 천 배는 더 눈부셔요……',
      ]);
      await era.printAndWait([
        '이야기하다 보니 ',
        digital.get_colored_name(),
        '은 어느새 레이스에 출전한 선수들을 소개하기 시작했다.',
      ]);
      await digital.say_and_wait(
        '보셨나요?! 늠름한 짧은 머리가 맹렬하게 스퍼트할 때 흔들리는 모습……',
      );
      await digital.say_and_wait('발걸음에 맞춰 흔들리던 그 가방……');
      await digital.say_and_wait(
        '그리고 오늘 함께하지 못한 쿠로후네, 언젠가는 꼭 함께 더트를 달리고 싶어요……',
      );
      era.println();
      await era.printAndWait([
        '말문이 터져서 ',
        digital.get_colored_name(),
        '이 계속 이야기를 늘어놓고 있을 때……',
      ]);
      await you.say_as_passer_by_and_wait('스태프', [
        digital.get_colored_name(),
        '의 트레이너님, 한창 즐거우신데 죄송합니다만…… 위닝 라이브가……',
      ]);
      await era.printAndWait([
        '아아아아, 고개를 숙여 ',
        digital.get_colored_name(),
        '에게 몇 번이나 말을 걸었지만 ',
        digital.sex,
        '는 전혀 알아채지 못했다.',
      ]);
      await era.printAndWait('억지로라도 데려가는 수밖에 없겠다.');
      await digital.say_and_wait(['저기, 저기, ', callname, '?']);
      await digital.say_and_wait('잠깐만요, 한마디만, 한마디만 더요……');
      await digital.say_and_wait([
        digital.uma_sex_title,
        '는…… 최…… 고…… 다……!!!!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_48: (() => {
    const title = '크리스마스';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} luna シンボリルドルフ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {CharaTalk} l_call_d シンボリルドルフのアグネスデジタルへの呼び方
     */
    const f = async (digital, luna, you, callname, l_call_d) => {
      await era.printAndWait([
        '트레센은 크리스마스에 자유롭게 활동하는 것을 꽤 장려하는 편이다. ',
        digital.uma_sex_title,
        '에게도 특별한 날이기 때문이다.',
      ]);
      await era.printAndWait([
        '학원 밖뿐만 아니라, 개성 있는 ',
        digital.uma_sex_title,
        '들에게도 주목할 수 있도록 학원 안에서도 큰 행사가 열리고 있다.',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '과 행사장 곳곳을 돌아다니며 간식을 먹고 여러 게임을 즐긴 뒤, ',
        digital.get_colored_name(),
        '과 열띤 이야기를 나누었다.',
      ]);
      await era.printAndWait([
        '갑자기 ',
        luna.get_colored_name(),
        ' 일행이 ',
        you.get_colored_name(),
        '앞에 나타났다.',
      ]);
      await digital.say_and_wait('우와와, 너무 시끄러웠나요?');
      await luna.say_and_wait('걱정할 것 없네. 오히려 포상을 주러 왔지.');
      await era.printAndWait([
        '그러더니 ',
        digital.sex,
        '는 등 뒤에서 커다란 선물 상자를 꺼내 ',
        digital.get_colored_name(),
        '에게 건넸다……',
      ]);
      await digital.say_and_wait('이건……');
      await era.printAndWait([
        digital.get_colored_name(),
        '이 상자를 열자, 그 안에 들어 있던 것은……',
      ]);
      await era.printAndWait('색지 한 더미…… 빼곡하게 적힌 여러…… 이름?');
      await digital.say_and_wait('아니, 이거, 이건……! 사인이에요!');
      await era.printAndWait([
        '사인! 자세히 보니 익숙한 ',
        digital.uma_sex_title,
        '들의 친필 사인이 잔뜩 들어 있다?!',
      ]);
      await digital.say_and_wait(
        '아아아아…… 하나씩 사려면 우마 코인이 얼마나 드는 거야…… 내 통장에 얼마 남아 있었더라……',
      );
      await luna.say_and_wait([
        '그동안 ',
        l_call_d,
        '에게 도움과 격려를 받은 ',
        digital.uma_sex_title,
        '들의 감사의 표시일세. 그리고 학생회장으로서 학원을 널리 알려 준 것에도 감사를 표하지……',
      ]);
      await luna.say_and_wait([
        '또 ',
        l_call_d,
        '의 취미는…… 조금 독특하니 말이야. ',
        l_call_d,
        '을(를) 좋아하는 ',
        digital.uma_sex_title,
        '들을 모아 이 선물을 준비했네.',
      ]);
      await era.printAndWait([
        '엄청난 선물을 받은 ',
        digital.get_colored_name(),
        '은……',
      ]);
      await digital.say_and_wait(
        '아와와…… 이게…… 최애를 응원하는 자, 그 또한 누군가의 최애가 된다는 건가요……',
      );
      await you.say_as_passer_by_and_wait('모두', [
        '축하해! ',
        digital.get_colored_name(),
      ]);
      await digital.say_and_wait([callname, '! ', callname, '! 이거……']);
      await era.printAndWait([
        '곧바로 존귀함에 정신을 잃을 것 같아져서 ',
        you.get_colored_name(),
        '에게 기댔다.',
      ]);
      await era.printAndWait([
        '뜻밖에도 입장이 뒤바뀐 ',
        digital.get_colored_name(),
        '은 오늘, 최애가 되는 기쁨도 맛보았다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_95_48: (() => {
    const title = (digital) => [
      digital.sex,
      '는 그저 평범한 ',
      digital.uma_sex_title,
    ];
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} dober メジロドーベル
     * @param {CharaTalk} kris シンボリクリスエス
     * @param {CharaTalk} diamond_lord ダイヤモナーク（アグネスデジタル口上NPC）
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_59 アグネスデジタルのメジロドーベルへの呼び方
     * @param {PrintedSpan} do_call_di メジロドーベルのアグネスデジタルへの呼び方
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     */
    const f = async (
      digital,
      dober,
      kris,
      diamond_lord,
      you,
      callname,
      call_59,
      do_call_di,
      arim_kin,
    ) => {
      await era.printAndWait([
        '서리가 내리는 십이월의 마지막 며칠. 얼마 전 관람한 ',
        arim_kin,
        '의 열기가 아직 남아 있다. ',
        kris.get_colored_name(),
        '의 멋진 결승선 통과를 지켜본 뒤에도 ',
        digital.get_colored_name(),
        '은 곧장 코미케 준비에 몰두했다.',
      ]);
      await era.printAndWait(
        '부스 참가자는 미리 입장해서 준비할 수 있다. 하지만……',
      );
      await era.printAndWait(
        '그래도 감탄하게 된다. 부스 참가자만으로도 사람이 이렇게 많다니.',
      );
      await era.printAndWait([
        '전시장으로 구불구불 이어지는 긴 줄을 바라보았다. 우리 차례가 오려면 얼마나 더 기다려야 할지 모르겠다.',
      ]);
      await digital.say_and_wait([
        '후후후, ',
        callname,
        ', 일반 입장 줄에는 서 본 적 없으시죠? 본행사가 시작되면 도쿄 빅사이트 입구 안팎이 발 디딜 틈 없는 인파로 가득 찬다고요!',
      ]);
      await era.printAndWait([
        '……다행이다. ',
        digital.get_colored_name(),
        '이 부스 참가자라서 사전 입장 통로로 함께 들어갈 수 있으니.',
      ]);
      await era.printAndWait([
        '눈앞의 ',
        digital.get_colored_name(),
        '은 고리가 잔뜩 달린 특제 대형 배낭을 메고, 온갖 작은 굿즈와 장식품을 매달고 있었다……',
      ]);
      await era.printAndWait('안에는 태피스트리 뭉치도 들어 있는 모양이다……');
      era.printButton(
        '「저기, 디지털. 이걸 설마 전부 혼자 만든 건 아니지?」',
        1,
      );
      await era.input();
      await era.printAndWait([
        '차르륵차르륵. ',
        digital.get_colored_name(),
        '이 몸을 돌리자, 금속 장식품들이 서로 부딪히며 날카로운 소리를 냈다.',
      ]);
      await digital.say_and_wait([
        '음…… ',
        callname,
        ', 제 작업량에 놀라셨나요? 사실 재판본이 많아요. 디지땅의 예전 작품들이죠.',
      ]);
      await era.printAndWait('예전, 예전이라……');
      await digital.say_and_wait([
        '데뷔하고 나서 디지땅의 작업량은 많이 줄었어요. 참가해도 얇은 책 한두 권 정도고, 아예 불참할 때도 있었죠……',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '은 돌아서서 거대한 도쿄 빅사이트를 바라보았다.',
      ]);
      await digital.say_and_wait([
        '아마…… 이제부터는 평소 속도로 돌아갈 것 같아요.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        digital.get_colored_name(),
        '의 말뜻을 이해했다. ',
        digital.get_colored_name(),
        '이 왜 이렇게…… 침울한지도 알 수 있을까?',
      ]);
      await era.printAndWait([
        '일찍 일어나서 조금 생기 없는 ',
        digital.get_colored_name(),
        '의 눈을 보며 ',
        you.get_colored_name(),
        '은(는) 떠올렸다……',
      ]);
      await era.printAndWait('더트 레이스였다. 비가 내리고 있었다.');
      await era.printAndWait([
        '가랑비 섞인 찬바람이 ',
        you.get_colored_name(),
        '의 우비 안으로 사정없이 파고들었다.',
      ]);
      await era.printAndWait([
        '틀림없이 ',
        digital.get_colored_name(),
        '도 무척 추웠을 것이다.',
      ]);
      await era.printAndWait([
        '코스 위의 ',
        digital.get_colored_name(),
        '은 진흙투성이였고, 마카롱색 승부복에도 잿빛이 배어 있었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 전광판의 성적을 보지 못했다. ',
        you.get_colored_name(),
        '의 눈에는 ',
        digital.get_colored_name(),
        '이 전광판을 올려다보는 모습만 보였다.',
      ]);
      era.drawLine();
      await era.printAndWait([
        '줄은 생각만큼 길지 않았다. 어느새 행사장 안에 들어와 있었다.',
      ]);
      await era.printAndWait([
        '힘겹게 인파를 헤치고 ',
        digital.uma_sex_title,
        ' 구역에 도착하자, 부스를 준비하던 참가자 몇 명이 ',
        digital.get_colored_name(),
        '을 보더니 멀리서 ',
        digital.get_colored_name(),
        '에게 손을 흔들었다.',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '은 여기서도 꽤 이름이 알려진 모양이다.',
      ]);
      await digital.say_and_wait('오오오오?');
      await era.printAndWait([
        '응? ',
        digital.get_colored_name(),
        '의 시선을 따라가니, 마스크와 모자를 쓰고 옷을 껴입어 조금 부풀어 보이는…… ',
        digital.uma_sex_title,
        '.',
      ]);
      await era.printAndWait([
        '평범한 모자였지만, 살짝 솟은 모양만 봐도 ',
        digital.uma_sex_title,
        '라는 것을 알 수 있었다.',
      ]);
      await era.printAndWait([
        '그리고 사실 다들 ',
        digital.sex,
        '가 누구인지 짐작하고 있었다……',
      ]);
      await digital.say_and_wait([
        '도…… ',
        { color: dober.color, content: '시로메 선생님', fontWeight: 'bold' },
        '! 이번에도 신간 나왔나요?! 세 권 부탁드려요!',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '은 도베르…… 아니, ',
        {
          color: dober.color,
          content: '시로메 선생님',
          fontWeight: 'bold',
        },
        '의 부스로 가서 곧바로 세 권을 예약했다.',
      ]);
      await era.printAndWait([
        '그리고 도베르…… 그러니까 ',
        {
          color: dober.color,
          content: '도베르 선생님',
          fontWeight: 'bold',
        },
        '도 몰래 주위를 둘러보고는, 다른 사람들이 의도적으로 시선을 피한 것을 확인한 뒤……',
      ]);
      await era.printAndWait([
        '배낭에서 정성껏 포장한 무언가를 조심스레 꺼내, 들뜬 ',
        digital.get_colored_name(),
        '에게 건넸다.',
      ]);
      await era.printAndWait('여러 물건을 주고받은 뒤, 드디어……');
      await era.printAndWait('코미케가 정식으로 개장했다!');
      await era.printAndWait(
        '볼 때마다 감탄하게 된다. 인류는 너무 많고, 지구는 너무 작다.',
      );
      await you.say_as_unknown_and_wait('오오오오오오오!');
      await era.printAndWait(
        '입장 게이트 쪽에서 영혼의 외침이 들려왔다. 선두에 선 사람들은 인기 부스로 곧장 달려가다가 부스 앞에서 얌전히 속도를 줄이고 지폐를 내밀어, 귀중한 전리품을 받아 들었다.',
      );
      await era.printAndWait(
        '입구에서 사람들이 끊임없이 쏟아져 나왔고, 다음으로 이곳에 나타난 것은……',
      );
      await diamond_lord.say_as_unknown_and_wait([
        '어어! ',
        do_call_di,
        '! 나 왔어!',
      ]);
      await era.printAndWait([
        '멀리 인파 속에서 밤색 머리의 ',
        digital.uma_sex_title,
        '가 뛰쳐나왔다. ',
        digital.uma_sex_title,
        ' 특유의 주력으로 순식간에 ',
        digital.get_colored_name(),
        ' 앞에 도착했다.',
      ]);
      await digital.say_and_wait(['늘 받던 신간, 여기요~']);
      await era.printAndWait([
        '신간을 받은 ',
        digital.uma_sex_title,
        '는 통통 튀듯 떠나갔다. 첫 손님이었다. 하지만 그다음부터는……',
      ]);
      era.printButton('「디지털…… 유명하다는 얘기는 조금 들었지만……」', 1);
      await era.input();
      await era.printAndWait(
        '손이…… 모자라기 시작했다. 배낭에서 말아 둔 태피스트리를 꺼내야 하고, 받은 현금도 세어야 하는데……',
      );
      await era.printAndWait(
        '왜 전자 결제를 하지 않는지는 묻지 말자. 입장한 뒤로 휴대폰은 주머니 속에서 쥐 죽은 듯 잠들어, 아무 소리도 내지 않았다.',
      );
      await era.printAndWait([
        '한동안 정신없이 일한 끝에 드디어 『매진』 팻말을 내걸 수 있었다.',
      ]);
      era.println();
      await era.printAndWait([
        '마침 ',
        digital.get_colored_name(),
        '과 URA 공식 부스를 보러 갈지 이야기하고 있는데, ',
        {
          color: dober.color,
          content: '도베르 선생님',
          fontWeight: 'bold',
        },
        '이 작별 인사를 하러 왔다.',
      ]);
      await dober.say_and_wait([
        do_call_di,
        ', 함께 부스를 둘러보려고 했는데, 아쉽지만 난 이만 가 볼게. 앞으로도 더 좋은 작품 부탁해.',
      ]);
      await digital.say_and_wait(
        '네에에, 신세 많이 졌습니다! 죽을힘을 다해 창작할게요!',
      );
      await digital.say_and_wait(
        '데뷔하고 나서는 작품 활동이 좀 뜸했지만, 안심하세요. 이제 다시 열심히 할 거예요!',
      );
      await dober.say_and_wait(['!']);
      await era.printAndWait([
        '마스크 너머의 눈만 봐도 ',
        dober.get_colored_name(),
        '의 감정이 격하게 요동치는 것을 알 수 있었다.',
      ]);
      await era.printAndWait([
        digital.sex,
        '는 주먹을 쥐더니 변장용 모자와 마스크를 벗었다.',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '은 굳어 버렸다. ',
        digital.sex,
        '는 왜 ',
        dober.get_colored_name(),
        '가 갑자기 화를 내는지 알 수 없었다.',
      ]);
      await digital.say_and_wait(['시로…… ', call_59, '……?']);
      await era.printAndWait([
        dober.get_colored_name(),
        '는 숄더백에서 ',
        digital.get_colored_name(),
        '의 동인지를 꺼내 ',
        digital.get_colored_name(),
        '의 부스에 도로 놓았다.',
      ]);
      await dober.say_and_wait(['돌아가는 길에 읽으려고 했는데. 미안해.']);
      await era.printAndWait([
        dober.get_colored_name(),
        '는 뒤도 돌아보지 않고 걸어갔다. ',
        digital.get_colored_name(),
        '이 붙잡아도 돌아보지 않았다.',
      ]);
      await digital.say_and_wait(['……']);
      await era.printAndWait([
        digital.get_colored_name(),
        '은 고개를 숙인 채 직접 정성껏 포장한 동인지를 바라보았다.',
      ]);
      await diamond_lord.say_as_unknown_and_wait(['저기…… ', do_call_di, '?']);

      await era.printAndWait([
        '처음 부스로 달려왔던 밤색 머리의 ',
        digital.uma_sex_title,
        '였다. ',
        digital.sex,
        '도 커다란 전리품 가방을 들고 있었다. 인사를 하러 온 모양이다.',
      ]);
      await digital.say_and_wait([
        '못 볼 꼴을 보여 드려서 죄송해요, ',
        diamond_lord.get_colored_name(),
        '. 저……',
      ]);
      await digital.say_and_wait([
        '궁금한 게 있는데, 팬이라면 선생님의 작품을 더 보고 싶은 게…… 당연한 거죠?',
      ]);
      await diamond_lord.say_and_wait('응…… 하지만……');
      await era.printAndWait([
        '이름이 ',
        diamond_lord.get_colored_name(),
        '라는 ',
        digital.uma_sex_title,
        '인 ',
        digital.sex,
        '는…… 그대로 바닥에 앉아 거대한 배낭을 뒤적이더니 두꺼운 책 한 권을 꺼냈다.',
      ]);
      await era.printAndWait('열어 보니 두꺼운 보호 커버에 싸인 동인지였다.');
      await diamond_lord.say_and_wait('이건 네가 데뷔 첫해에 냈던 동인지야……');
      await diamond_lord.say_and_wait(
        '그때는 아직 네 팬이 아니었어. 다른 사람한테 비싸게 주고 샀지……',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        '은 입술을 깨문 채 아무 말도 하지 않았다.',
      ]);
      await diamond_lord.say_and_wait([
        '비싸게 샀지만, 가장 돈이 아깝지 않았던 책이야. ',
        do_call_di,
        ', 왜 그런지 알아?',
      ]);
      await diamond_lord.say_and_wait([
        '이 책에 그려진 건 갓 데뷔한 ',
        digital.uma_sex_title,
        '의 레이스잖아. 평소의 ',
        digital.uma_sex_title,
        '를 향한 애정 말고도, 그 안에는 조금 다른 무언가가 있어.',
      ]);
      await diamond_lord.say_and_wait(
        '그리고 하나 더 말하고 싶은 건, 난 너와 겨뤘던 그 레이스에서 네 팬이 됐다는 거야…… 그 뒤로는 네 레이스를 전부 보러 갔어.',
      );
      await era.printAndWait([
        diamond_lord.get_colored_name(),
        '은(는) 그 동인지를 다시 보물처럼 두꺼운 커버에 싸서 배낭에 넣었다. 그리고 ',
        digital.sex,
        '는 배낭을 메고 걸어갔다.',
      ]);
      era.drawLine();
      await era.printAndWait([
        digital.get_colored_name(),
        '은 행사장 밖에서 유명한 ',
        digital.uma_sex_title,
        '의 코스프레를 하고 춤추는 코스어들을 멍하니 바라보았다.',
      ]);
      await era.printAndWait([
        digital.couple_title,
        ' 중에는 가짜 귀를 단 평범한 ',
        digital.phy_sex_title,
        '도 있었고, 코스프레용 귀 커버를 쓴 ',
        digital.uma_sex_title,
        '도 있었다.',
      ]);
      await era.printAndWait([
        '눈앞에서 ',
        digital.couple_title,
        '이 경쾌하게 춤추는 모습을 보며 ',
        digital.get_colored_name(),
        '은……',
      ]);
      await digital.say_and_wait([callname, ', 왜일까요?']);
      era.printButton('「도베르 말이야? 모나크 말이야?」', 1);
      await era.input();
      await digital.say_and_wait('……둘 다요.');
      era.printButton(
        `「디지털, 너는 레이스에 출전할 수 있는 ${digital.uma_sex_title}잖아?」`,
        1,
      );
      await era.input();
      await era.printAndWait([
        digital.get_colored_name(),
        '은 뜬금없는 질문에 잠시 멈칫하더니 고개를 저었다.',
      ]);
      await you.say_and_wait([
        '도베르와 모나크에게 감사해야겠네. ',
        digital.couple_title,
        ' 덕분에 이 ',
        callname,
        '도 다시 떠올렸어.',
      ]);
      era.println();
      await era.printAndWait([
        '코스 위에서 유별날 정도로 다른 ',
        digital.uma_sex_title,
        '들을 빤히 바라보던 ',
        digital.get_colored_name(),
        '……',
      ]);
      await you.say_and_wait([
        '네가 ',
        digital.uma_sex_title,
        '가 아니라면, 나와 팬들이 보고 있는 디지털은 누구인 거야?',
      ]);
      await digital.say_and_wait([
        '그 디지털…… 아직 자신의 현실을 받아들이지 못한 디지털……',
      ]);
      era.println();
      await era.printAndWait([
        '눈앞이 결승선이어도 변함없는 ',
        digital.get_colored_name(),
        '……',
      ]);
      await you.say_and_wait([
        '레이스에 발을 들인 순간부터 넌 ',
        digital.uma_sex_title,
        '야. 팬들의 응원을 받는 존재라고!',
      ]);
      await digital.say_and_wait(['발을 들인 순간부터…… 레이스에 말인가요?']);
      await you.say_and_wait([
        '그래! 팬이었던 네가 가장 잘 알잖아! 레이스에서 달리는 모든 ',
        digital.uma_sex_title,
        '는 성적과 상관없이 그런 존재야!',
      ]);
      era.println();
      await era.printAndWait([
        '진흙투성이가 되어도 온 힘을 다해 나아가는 ',
        digital.get_colored_name(),
        '……',
      ]);
      era.printButton('「넌 이미 팬들의 응원을 받는 존재라고!」', 1);
      await era.input();
      await digital.say_and_wait('!');
      await era.printAndWait([
        digital.get_colored_name(),
        '은 그 말을 듣고 온몸을 떨었다.',
      ]);
      era.printButton('「팬 서비스가 뭔지 알지!」', 1);
      await era.input();
      await digital.say_and_wait('알아요!');
      era.println();
      await era.printAndWait([digital.get_colored_name(), ', 정말……']);
      await digital.say_and_wait([
        '우오오오오오, 팬분들의 기대를 저버릴 수는 없죠…… 아하하하……',
      ]);
      era.println();
      await era.printAndWait([digital.uma_sex_title, '구나.']);
      await digital.say_and_wait('저, 조금만 더 힘내 볼게요.');
      await era.printAndWait(
        '눈썹은 처지고, 눈빛은 흐려진 데다 눈물까지 맺혀 있었다. 쓴웃음이라 해도 좋을 표정이었다.',
      );
      await era.printAndWait(
        '하지만 이 미소를 본 팬들은 감동의 눈물을 흘릴 것이다……',
      );
      await era.printAndWait('아아, 잘 안 보이네……');
    };
    f.title = title;
    return f;
  })(),
  ws_palace: (() => {
    const title = '세계의 여행자';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} halo キングヘイロー
     */
    const f = async (digital, opera, tachyon, doto, halo) => {
      await digital.print_and_wait([
        digital.get_colored_name(),
        '은 여전히 도전을 이어가고 있다. 앞으로의 해외 원정을 위해서다.',
      ]);
      await digital.print_and_wait([
        '승리만을 위한 것은 아니다. 동지와 함께 더 많은 ',
        digital.uma_sex_title,
        '들을 만나기 위해서다.',
      ]);
      await digital.print_and_wait(
        '답사를 위해 사람들이 잘 모르는 항공편을 탔다……',
      );
      await digital.print_and_wait('출발하기 전……');
      await digital.print_and_wait('어라, 아는 사람들이 많이 왔다.');
      await digital.print_and_wait([
        halo.get_colored_name(),
        ', ',
        opera.get_colored_name(),
        ', ',
        doto.get_colored_name(),
        ', ',
        tachyon.get_colored_name(),
        '…… 그리고 쿠로후네까지?',
      ]);
      await digital.print_and_wait(
        '잠시 떠나 해외 환경에 익숙해지려는 것뿐인데. 오히려 관광에 가까운 걸까?',
      );
      await digital.print_and_wait('이렇게 많은 사람이 배웅하러 오다니?');
      await digital.print_and_wait([
        digital.get_colored_name(),
        ', 정말 대단하네.',
      ]);
      await digital.say_and_wait([
        '하지만 더는 기다릴 수 없어요! 낯선 땅에서의 만남, 동지와 함께 세계 곳곳의 ',
        digital.uma_sex_title,
        '들을 만나고 싶어요!',
      ]);
      await digital.print_and_wait([
        '세계의 여행자, ',
        digital.get_colored_name(),
        '은 지금도 달리고 있다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
