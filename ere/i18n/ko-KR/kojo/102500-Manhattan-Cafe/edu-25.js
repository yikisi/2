/**
 * @file マンハッタンカフェ - 育成
 * @author Necroz
 * @author Mr.E.（イベント「暗がり」）
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { chara_colors } = require('#/data/chara-colors');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  race_end_win: (() => {
    const title = '레이스 승리!';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, callname) => {
      await coffee.say_and_wait('……해냈어요…… 제가…… 일등이 됐어요.');
      await coffee.say_and_wait(
        '그 뒷모습에…… 가까워졌어요…… 후훗. 역시 좋아요…… 이 느낌……',
      );
      era.printButton('축하해, 카페!', 1);
      await era.input();
      await coffee.say_and_wait([
        '감사해요, ',
        callname,
        '……다음에도…… 열심히 할게요……',
      ]);
      await coffee.say_and_wait(
        '이기기 위해 노력해서…… 다시, 이 기분을 맛보는 거예요……',
      );
      era.printButton('하지만 방심할 수는 없어.', 1);
      await era.input();
      await coffee.say_and_wait('……！');
      await coffee.say_and_wait(
        '……네, 맞아요. 방심하지 말고…… 경계를 늦추지 않아야죠……',
      );
      await coffee.say_and_wait(
        '저는——아니, 우리는…… 아직 그 등을 뛰어넘지 못했으니까요……',
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = '레이스 입상!!';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, callname) => {
      await coffee.say_and_wait('……입상했어요……');
      era.printButton('잘했어, 카페.', 1);
      await era.input();
      await coffee.say_and_wait('……네, 제 힘은…… 발휘한 것 같아요……');
      await coffee.say_and_wait('……하지만 아직 멀어요……');
      await coffee.say_and_wait('우리의 목표는…… 훨씬 더 앞에 있으니까요……');
      era.printButton('앞으로 더 열심히 트레이닝하자.', 1);
      await era.input();
      await coffee.say_and_wait('……네, 여기서 멈출 수는 없어요……');
      await coffee.say_and_wait([
        '……',
        callname,
        '. 앞으로도…… 잘 부탁드려요……!',
      ]);
      era.println();
      await era.printAndWait('——콩.');
      await era.printAndWait([
        '세지도 약하지도 않은 타격음이 ',
        coffee.get_colored_name(),
        '의 이마에서 울렸다.',
      ]);
      era.println();
      await coffee.say_and_wait('아얏…… 잊은 게 아니야……!');
      era.println();
      era.printButton('앞으로 다 같이 힘내자.', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = '레이스 패배……';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, callname) => {
      await coffee.say_and_wait('……졌어요…… 제 힘이 부족했어요……');
      await coffee.say_and_wait('여기서 진다면…… 그 뒷모습까지, 저는……');
      era.printButton('충분히 잘했어!', 1);
      await era.input();
      await coffee.say_and_wait(
        '『충분히 잘했다』고요…… 그런 마음뿐인 격려는…… 의미가 있다고 생각하지 않아요……',
      );
      era.println();
      await era.printAndWait('——콩.');
      await era.printAndWait('조금 센 타격음이 카페의 이마에서 울렸다.');
      era.println();
      await coffee.say_and_wait(
        '아파……! 친구도 이렇게…… 하지만 지금 제 힘으로는……',
      );
      era.printButton('이대로 포기할 거야?', 1);
      await era.input();
      await coffee.say_and_wait('……이대로 포기하는 건…… 싫어요.');
      era.println();
      await era.printAndWait('——그거면 됐어.');
      await era.printAndWait([
        '귓가에서 그런 말이 들린 듯했고, 주변 공기는 순간 얼어붙은 듯 차가워졌다……',
      ]);
      era.println();
      await coffee.say_and_wait([callname, '……그리고 친구…… 고마워요……']);
      await coffee.say_and_wait('이제…… 지지 않을게요.');
      era.println();
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 의욕을 되찾고 다음 레이스로 나아갈 준비를 했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  beginning: (() => {
    const title = '칠흑의 사냥개';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} call_32 マンハッタンカフェがアグネスタキオンを呼ぶときの呼称
     * @param {PrintedSpan} callname_32 アグネスタキオンがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶときの呼称
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      call_32,
      callname_32,
      t_call_c,
    ) => {
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 스카우트에 성공한 뒤, ',
        you.get_colored_name(),
        '은(는) ',
        coffee.get_colored_name(),
        '와 약속을 잡고 달리는 모습을 확인하러 트레이닝장에 왔다.',
      ]);
      await era.printAndWait([
        '생각해 보면 ',
        coffee.get_colored_name(),
        '의 트레이너가 됐는데도 ',
        coffee.sex,
        '의 달리기를 직접 보는 건 이번이 처음이다. 선발 레이스 영상은 몇 번이나 돌려 봤지만, 아무래도 무언가 부족했다.',
      ]);
      await era.printAndWait(
        '담당의 선발 레이스조차 보지 않고 스카우트한 트레이너는, 아마 트레센에서도 처음이겠지……',
      );
      await era.printAndWait([
        '조금 떨어진 곳에서 이미 자세를 잡은 ',
        coffee.get_colored_name(),
        '가 ',
        you.get_colored_name(),
        '에게 손을 흔들었다. ',
        you.get_colored_name(),
        '은(는) 생각을 접고 ',
        coffee.get_colored_name(),
        '의 움직임에 집중했다.',
      ]);
      await era.printAndWait([
        '신호가 울리자 ',
        coffee.get_colored_name(),
        '는 출발 지점에서 뛰쳐나갔다.',
      ]);
      era.printButton(
        '「……초반이 빠른 편은 아니네. 역시 추입이나 선입에 적합한가.」',
        1,
      );
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        '에게 내린 지시는 ',
        coffee.sex,
        ' 자신의 리듬대로 달리면서 다른 ',
        coffee.uma_sex_title,
        '가 있는 상황을 상상하라는 것이었다.',
      ]);
      await era.printAndWait([
        '자신의 리듬을 유지하며 ',
        coffee.get_colored_name(),
        '는 부드럽고 여유롭게 발을 옮겨 중반을 무사히 지나 마지막 스퍼트 지점에 다다랐다.',
      ]);
      await era.printAndWait('——쿵.');
      await era.printAndWait([
        you.get_colored_name(),
        '의 눈이 들려왔을 법한 소리를 대신 전해 주었다.',
      ]);
      await era.printAndWait([
        '결승점을 향해 ',
        coffee.get_colored_name(),
        '의 몸이 단숨에 낮아졌다. 발밑에서 흙이 튀고, 시위를 떠난 화살처럼 앞으로 쏘아져 나갔다. 범상치 않은 폭발력이 순식간에 ',
        you.get_colored_name(),
        '의 시선을 붙잡았다.',
      ]);
      await era.printAndWait([
        '토끼를 쫓는 사냥개 같기도, 굶주린 왜가리 같기도 했다. ',
        you.get_colored_name(),
        '은(는) 이 거친 달음박질을 저 조용하고 차가운 ',
        coffee.child_sex_title,
        '와 연결 지을 수 없었다.',
      ]);
      await era.printAndWait('하지만……');
      await era.printAndWait('너무나 아름다웠다.');
      await era.printAndWait([
        '칠흑의 사냥개처럼 결승선을 가르는 모습을 보며 ',
        you.get_colored_name(),
        '은(는) 저도 모르게 그렇게 생각했다.',
      ]);
      era.println();
      if (era.get('cflag:32:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait(['여어, ', callname_32, '.']);
        await era.printAndWait([
          '낯익은 목소리가 들려 ',
          you.get_colored_name(),
          '이(가) 돌아보자 ',
          tachyon.get_colored_name(),
          '이 뒤에 서 있었다.',
        ]);
        await tachyon.say_and_wait([
          '새 담당이 ',
          t_call_c,
          '인가? 이런 우연이 있나, 하하하.',
        ]);
        await tachyon.say_and_wait([
          t_call_c,
          '의 목적은 아무에게도 보이지 않는 상상 속 친구를 따라잡는 것. 흠, 보통 사람은 이해하기 어렵지. 반면 나는 ',
          coffee.uma_sex_title,
          '의 한계를 쫓고——그 한계를 뛰어넘으려 하네. 단순한 승리에는 멈추지 않지.',
        ]);
        await tachyon.say_and_wait(
          '이런 괴짜 둘의 트레이너라니, 자네도 고생이 많겠군.',
        );
        await coffee.say_and_wait([call_32, '……무슨 일이시죠?']);
        await era.printAndWait([
          '달리기 확인을 마친 ',
          coffee.get_colored_name(),
          '가 ',
          you.get_colored_name(),
          '의 곁으로 돌아왔다. 그다지 반갑지 않은 눈으로 ',
          you.get_colored_name(),
          '의 옆에 있는 ',
          tachyon.get_colored_name(),
          '을 바라보고 있었다.',
        ]);
        await tachyon.say_and_wait([
          '이런, 별로 반갑지 않은 모양이군, ',
          t_call_c,
          '……하지만 앞으로 우리는 더 깊이 얽히게 될 걸세. 같은 트레이너 아래 있는 담당 ',
          coffee.uma_sex_title,
          '니까. 그렇지 않나? 트·레·이·너·군?',
        ]);
        await coffee.say_and_wait([
          '트레이너 군…… ',
          call_32,
          '도 당신의 담당인가요? ',
          callname,
          '……',
        ]);
        await era.printAndWait([
          '곤란하네. ',
          coffee.couple_title,
          '이 서로 아는 사이였다니. 게다가 그리 친하지도 않은 모양이다……',
        ]);
        await tachyon.say_and_wait([
          '그럼 이만, 두 사람. 앞으로 잘 부탁하네. 그리고 자네에게는 기대하고 있어, ',
          t_call_c,
          '. 기대하지——나와는 다른 의미로 말이야.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) ',
          coffee.get_colored_name(),
          '에게 어떻게 설명할지 생각하는 사이, ',
          tachyon.get_colored_name(),
          '은 의미심장한 한마디를 남기고 떠났다.',
        ]);
        era.printButton('「저 녀석…… 정말……」', 1);
        await era.input();
        await coffee.say_and_wait([
          callname,
          '……지금은 잠시 ',
          call_32,
          ' 생각은 하지 말아 주세요. 지금 당신은…… 제 트레이너예요. 우리에게 중요한 건 친구를 따라잡는 것…… 그뿐이니, 간단하죠…… 그렇죠?',
        ]);
        await era.printAndWait([
          '그 말대로다. ',
          coffee.sex,
          '는 ',
          coffee.get_colored_name(),
          '다. 다른 ',
          coffee.uma_sex_title,
          '와는 상관없다.',
        ]);
      }
      await era.printAndWait(['머릿속을 정리하고 오늘의 트레이닝을 시작했다.']);
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = '데뷔전을 향해';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, you, callname) => {
      await coffee.say_and_wait('없어…… 어디에도 없어…… 대체 어디에……');
      await era.printAndWait([
        '오늘은 ',
        coffee.get_colored_name(),
        '의 데뷔전이다. 많은 ',
        coffee.uma_sex_title,
        '들이 긴장으로 떨고 있지만 ',
        coffee.sex,
        '의 신경은 다른 곳에 가 있었다.',
      ]);
      await coffee.say_and_wait([
        callname,
        ', 레이스 전에…… 잠깐 찾아봐도…… 될까요?',
      ]);
      era.printButton('「다녀와. 괜찮아.」', 1);
      await era.input();
      await coffee.say_and_wait('여기에는 없어……');
      await coffee.say_and_wait('여기에도 없어……');
      await coffee.say_and_wait(
        '……찾았어요……! 결승점보다…… 더 먼 곳. 저기서 기다리고 있어요.',
      );
      await coffee.say_and_wait('즐거워 보여요. 틀리지 않았어요……');
      era.printButton('「전력을 다해 쫓아가.」', 1);
      await era.input();
      await coffee.say_and_wait('……네.');
      await era.printAndWait([
        coffee.get_colored_name(),
        '.',
        coffee.sex,
        '가 누구에게도 알려지지 않은 채 이어 온 추격이, 마침내 레이스 무대에서 본격적으로 시작된다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '신기루';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, you, callname) => {
      await you.say_as_passer_by_and_wait(
        `${coffee.uma_sex_title}A`,
        '하아, 후우……! 다들 수고했어! 좋은 레이스였네!',
      );
      await you.say_as_passer_by_and_wait(`${coffee.uma_sex_title}A`, [
        '거기…… ',
        coffee.get_colored_name(),
        ' 씨였지? 수고했어……',
      ]);
      await you.say_as_passer_by_and_wait(
        `${coffee.uma_sex_title}A`,
        '어, 저기…… 못 들었나? 저기……',
      );
      await coffee.say_and_wait('…………');
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 다른 ',
        coffee.uma_sex_title,
        '들에게 등을 돌리고 말없이 먼 곳을 바라보았다.',
      ]);
      await era.printAndWait([
        '선수 통로로 달려온 ',
        you.get_colored_name(),
        '은(는) ',
        coffee.get_colored_name(),
        '를 발견하고 다가갔다.',
      ]);
      await coffee.say_and_wait(['아, ', callname, '……']);
      era.printButton('「레이스 결과는?」', 1);
      await era.input();
      await coffee.say_and_wait(
        '……졌어요. 친구는 혼자 맨 앞을 달려서, 결승점을…… 점점 더 멀리……',
      );
      await coffee.say_and_wait(
        '그리고 즐거워 보였어요. 넓은 곳에서 달릴 수 있었으니까요. 하지만 동시에……',
      );
      await coffee.say_and_wait(
        '격차는…… 지금까지 중에서 가장 컸어요…… 무언가의 구속이 풀린 것처럼…… 정말 빨랐어요.',
      );
      await coffee.say_and_wait(
        '……친구를 따라잡고 싶어요. 하지만…… 어떻게 해야……',
      );
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 말을 들어 보면 ‘친구’와 ',
        coffee.sex,
        '의 속도 차이는 상당히 큰 모양이다……',
      ]);
      await era.printAndWait(
        '그렇다면 성급하게 계획을 세워도 효과는 적을 것이다. 그러니——',
      );
      era.printButton('「일정은 서두르지 말고, 차근차근 단련하자.」', 1);
      await era.input();
      await coffee.say_and_wait('차근차근…… 오랜 시간이…… 걸린다는 뜻인가요……');
      await era.printAndWait([
        you.get_colored_name(),
        '의 제안에 ',
        coffee.get_colored_name(),
        '는 망설이고 있었다. ',
        coffee.sex,
        '의 무거운 표정으로 보아 머릿속에서 치열하게 저울질하고 있는 모양이다.',
      ]);
      await coffee.say_and_wait(
        '……알겠어요. 금방 따라잡을 수 없다면…… 게다가 제 몸은 튼튼한 편도 아니니까…… 그쪽이 더 맞을지도 모르겠네요.',
      );
      await era.printAndWait('그렇게 의견이 모였다.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        coffee.sex,
        '에게 고개를 끄덕이고 곁에 섰다. 같은 목표를 쫓겠다고 마음속으로 다짐하면서.',
      ]);
      await you.say_as_passer_by_and_wait(
        `${coffee.uma_sex_title}A`,
        '저기, 저 두 사람 좀 이상하지 않아……? 아무것도 없는 먼 곳만 계속 보고 있어.',
      );
      await you.say_as_passer_by_and_wait(
        `${coffee.uma_sex_title}B`,
        '아마 둘 다…… 괴짜인 거 아닐까. 가까이 가지 않는 게 좋겠어……',
      );
      await era.printAndWait([
        '우연히 또 다른 세계와 접하고 ',
        coffee.get_colored_name(),
        '에게 구원받은 ',
        you.get_colored_name(),
        '은(는) 이제 ',
        coffee.sex,
        '만이 아는 세계를 이해해 보기로 했다…… 그리고 차근차근 성적을 쌓아 나갈 것이다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  bs_our_taste: (() => {
    const title = '우리만의 맛';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, you, callname) => {
      await era.printAndWait([
        coffee.get_colored_name(),
        '와 함께 돌아가던 중에——',
      ]);
      await coffee.say_and_wait(['……', callname, '.']);
      await coffee.say_and_wait(
        '당신만 괜찮다면, 이따가…… 커피 한 잔 하지 않으실래요……',
      );
      await coffee.say_and_wait([
        '조금…… ',
        callname,
        '에게 맛보여 드리고 싶은 원두가 있어서요……',
      ]);
      era.printButton('「물론이지.」', 1);
      await era.input();
      await coffee.say_and_wait('……고마워요.');
      await coffee.say_and_wait('그럼, 저를 잘 보고…… 따라오세요……');
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '을(를) 데리고 ',
        coffee.sex,
        '가 학원 안에 마련한 개인적인 공간으로 향했다.',
      ]);
      await coffee.say_and_wait('아까 말씀드린 원두가, 바로 이거예요……');
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 그렇게 말하며 테이블 위 유리병에 담긴, 아직 갈지 않은 원두를 가리켰다.',
      ]);
      await coffee.say_and_wait(
        '이건…… 제 커피나무에서 수확한 원두예요…… 제가 직접 로스팅도 했고요……',
      );
      era.printButton('「커피나무……」', 1);
      await era.input();
      await coffee.say_and_wait(
        '커피나무 한 그루가…… 열매를 맺을 수 있을 정도로 자라려면…… 아무리 빨라도…… 3년은 걸려요.',
      );
      await coffee.say_and_wait('게다가 수확 횟수도…… 1년에 딱 한 번뿐이죠……');
      await era.printAndWait([
        '즉, 이것은 ',
        coffee.get_colored_name(),
        '가 직접 재배한 커피나무에서 수확하여, ',
        coffee.sex,
        '가 정성껏 볶아낸 원두라는 뜻이다……',
      ]);
      await era.printAndWait('이 얼마나 소중한 물건인가……');
      era.printButton('「……이렇게 귀한 걸, 정말 내가 마셔도 되는 거야?」', 1);
      await era.input();
      await coffee.say_and_wait([
        '……귀한 것이기에, ',
        callname,
        '에게 대접하고 싶은 거예요……',
      ]);
      await coffee.say_and_wait('그러니………… 저와 함께, 마셔 주시겠어요?');
      era.printButton('「기꺼이!」', 1);
      await era.input();
      await coffee.say_and_wait('그럼 지금 내릴게요…… 잠시만 기다려 주세요.');
      await era.printAndWait([
        '정적만이 흐르는 공간 속에, ',
        coffee.get_colored_name(),
        '가 커피를 내리는 소리만이 울려 퍼졌다……',
      ]);
      await coffee.say_and_wait('…………오래 기다리셨어요. 드셔 보세요.');
      await era.printAndWait([
        coffee.sex,
        '가 내린 커피를 입에 머금었다. 찰나에, 커피의 풍미와 온도가 마치 육체와 영혼 속으로 스며드는 것 같았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '과(와) ',
        coffee.get_colored_name(),
        '는 마주 앉아 조용히 커피를 음미했다.',
      ]);
      await era.printAndWait([
        '한 잔을 다 마시고 여운에 잠겨 있자 ',
        coffee.get_colored_name(),
        '가 살며시 ',
        you.get_colored_name(),
        '의 손에 닿았다.',
      ]);
      await coffee.say_and_wait('…………맛은, 어떤가요?');
      era.printButton('「……이렇게 맛있는 커피는 처음이야.」', 1);
      era.printButton('「멋진 시간을 선물해 줘서 고마워.」', 2);
      era.printButton(
        '「기회가 된다면 나도 너를 위해 커피를 내리고 싶어.」',
        3,
      );
      await era.input();
      await coffee.say_and_wait('……과찬이세요.');
      await coffee.say_and_wait('하지만…… 저도, 같은 마음이에요.');
      await era.printAndWait([
        you.get_colored_name(),
        '의 찬사에, ',
        coffee.get_colored_name(),
        '의 하얀 얼굴이 수줍게 붉어졌다.',
      ]);
      await era.printAndWait([
        '하지만 빈말이 아니었다. 이 한 잔에 담긴 정성과 시간은 천 마디 말보다도 값지다. 여기서 ',
        coffee.sex,
        '와 함께한 이 맛을 ',
        you.get_colored_name(),
        '은(는) 평생 잊지 못할 것이다……',
      ]);
      await coffee.say_and_wait('……감사해야 할 사람은 저예요.');
      await coffee.say_and_wait('……제 트레이너가 되어 주셔서…… 감사해요……');
      await coffee.say_and_wait('내년에 수확할 때도…… 오늘처럼……');
      await coffee.say_and_wait('함께…… 마실까요?');
      era.printButton('「내년에도, 그다음 해에도 함께 마실게.」', 1);
      await era.input();
      await coffee.say_and_wait('——！');
      await coffee.say_and_wait('……네.');
      await coffee.say_and_wait('내년에도…… 그다음 해에도…… 함께……');
      await era.printAndWait([
        '내년에 ',
        coffee.sex,
        '와 마실 커피는 어떤 맛일까. 그렇게 생각하니 머지않은 미래에 ',
        coffee.get_colored_name(),
        '와 보낼 나날에 대한 상상이 가득 피어올랐다.',
      ]);
      await coffee.say_and_wait('……그렇다면……');
      await coffee.say_and_wait(
        '해 보시겠어요……? ……함께, 커피나무를 키우는 거예요.',
      );
      await coffee.say_and_wait(
        '새로 심는다면…… 수확까지 적어도 삼 년은 걸려요.',
      );
      era.printButton('「그날을 위해서 열심히 할게.」', 1);
      await era.input();
      await coffee.say_and_wait('……후훗, 조금 먼 약속을 해 버렸네요.');
      await coffee.say_and_wait('그래도…… 저도 기대하고 있어요.');
      await era.printAndWait([
        '그때 가서 ',
        coffee.sex,
        '와 함께 완성할 커피는 분명 지금 마시는 것보다 훨씬 더 맛있을 것이다.',
      ]);
      await era.printAndWait([
        '그렇게 밤보다 향긋하고 진한 미래를 기대하게 되었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_28: (() => {
    const title = '영적 장애';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, you, callname) => {
      await coffee.say_and_wait([callname, '……오늘은…… 몸이 정말 무거워요……']);
      await era.printAndWait([
        '트레이닝 중이던 ',
        coffee.get_colored_name(),
        '가 ',
        you.get_colored_name(),
        '의 곁에 멈춰 서서 천천히 말했다.',
      ]);
      await era.printAndWait([
        '「몸이 좋지 않다」——예전에 ',
        coffee.sex,
        '는 ',
        you.get_colored_name(),
        '에게 그렇게 말했었다. 처음에는 단순히 체질 문제라고 생각했다.',
      ]);
      await era.printAndWait([
        '전에도 가끔 이런 일이 있었기에 ',
        you.get_colored_name(),
        '은(는) 대수롭지 않게 여기고 무리하지 말고 쉬라고 했는데……',
      ]);
      await era.printAndWait('——스윽, 스스스슥……');
      await era.printAndWait([
        '땅바닥의 모래가 갑자기 이상해졌다. ',
        coffee.get_colored_name(),
        '가 지나간 자리에 무거운 것을 끌고 간 듯한 자국이 남아 있었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 쓰러질 것 같은 ',
        coffee.sex,
        '를 황급히 불러 세우고 보건실로 데려갔다.',
      ]);
      era.drawLine();
      await coffee.say_and_wait(
        '몸무게가…… 이런 숫자는 처음 봐요…… 대체 무슨……',
      );
      await era.printAndWait([
        '보건실에서 간단한 검사를 받아도 이상은 발견되지 않았다. ',
        coffee.get_colored_name(),
        '가 시험 삼아 체중계에 올라가자 나타난 충격적인 숫자에 ',
        you.get_colored_name(),
        '은(는) 정말로 놀랐다.',
      ]);
      await era.printAndWait([
        coffee.sex,
        '의 체중은 평소의 변동 폭을 훌쩍 넘어 크게 늘어나 있었다.',
      ]);
      await coffee.say_and_wait(
        '게다가 오늘은…… 몸이 종이 같아요…… 온몸이 말라 버린 것처럼…… 윽!?',
      );
      await era.printAndWait('——끼긱, 파직!');
      await era.printAndWait([
        coffee.get_colored_name(),
        '가 말을 끝내기도 전에 작게 찢어지는 소리와 함께 극심한 통증이 ',
        coffee.get_colored_name(),
        '의 창백한 얼굴을 스쳐 갔다.',
      ]);
      era.printButton('「왜 그래!?」', 1);
      await era.input();
      await era.printAndWait([
        '갑자기 서 있지 못하는 ',
        coffee.get_colored_name(),
        '를 부축하자 몸이 가벼워진 듯했다. 하지만 지금은 그게 문제가 아니었다. ',
        you.get_colored_name(),
        '은(는) 시선을 내렸다. 설마 ',
        coffee.sex,
        '의 발인가!?',
      ]);
      await coffee.say_and_wait('제…… 발톱이……');
      await era.printAndWait([
        '서둘러 ',
        coffee.sex,
        '의 신발을 벗기자 말라붙은 발톱에 금이 가고 작은 구멍이 나 있었다.',
      ]);
      await coffee.say_and_wait(
        '오늘은 몸무게가 갑자기 늘더니…… 지금은 갑자기 가벼워졌네요. 힘이 안 들어가는 것도 당연하겠죠…… 발톱이 깨진 것도…… 너무 말라서일 거예요……',
      );
      era.printButton('「발톱을 다듬고 소독하자.」', 1);
      await era.input();
      await coffee.say_and_wait('네…… 그런 방법이…… 있나요?');
      await era.printAndWait([
        '전용 치료제와 보강제로 ',
        coffee.sex,
        '의 발톱을 고정했다. 트레이닝이나 레이스를 중단할 정도는 아닌 듯하지만, 오래 지속된다면……',
      ]);
      await coffee.say_and_wait([
        callname,
        ', 정말 대단하세요…… 조금 편해졌어요……',
      ]);
      await era.printAndWait([
        '그나저나 ',
        coffee.sex,
        '의 이렇게 심한 체중 변화는, 설마……',
      ]);
      era.printButton('「……평소 식욕은 어때?」', 1);
      await era.input();
      await coffee.say_and_wait(
        '식욕은…… 가끔 유난히 왕성해져요. 위가 끝도 없이 깊어진 것처럼…… 아무리 먹어도 배부르지 않아서…… 아무 생각 없이 계속 먹을 수밖에 없어요…… 반대로…… 전혀 못 먹을 때도 있어요. 입에 밀어 넣고 싶어도…… 손이 말을 듣지 않아서……',
      );
      await coffee.say_and_wait('하지만 그건…… 제 의지가 아니에요……');
      await era.printAndWait([
        coffee.sex,
        '는 계속 이런 이상을 견뎌 왔던 걸까. 이런 고통을 안고 있으면서도 위험을 무릅쓰고 자신을 구해 주었다……',
      ]);
      era.printButton('「다음에 몸에 이상이 생기면 사진을 찍어 줘.」', 1);
      await era.input();
      await coffee.say_and_wait(
        '사진…… 알겠어요. 찍어서 보여 드릴게요…… 하지만……',
      );
      era.drawLine();
      await era.printAndWait([
        '며칠 뒤 ',
        coffee.get_colored_name(),
        '에게서 사진이 왔다.',
      ]);
      await era.printAndWait([
        '하지만…… 무엇을 찍은 건지 전혀 알 수 없었다. 사진에는 기묘한 무늬만 찍혀 있었다.',
      ]);
      await coffee.say_and_wait(
        '어떻게 찍어도…… 그렇게 돼요. 그래서 다친 곳을 보여 드릴 수가 없어요…… 예전부터 그랬어요. 아마…… 해결할 수 없겠죠. 제 몸은 분명…… 계속 이럴 거예요……',
      );
      era.printButton('「말해 주기만 하면 돼!」', 1);
      await era.input();
      await coffee.say_and_wait('말하면…… 되나요? 매번……?');
      era.printButton('「그래, 치료는 내가 할게!」', 1);
      await era.input();
      await coffee.say_and_wait([
        '감사해요, ',
        callname,
        '……당신이 있으면…… 조금 안심이 돼요.',
      ]);
      await era.printAndWait([
        '그 뒤 ',
        you.get_colored_name(),
        '은(는) 가진 지식을 총동원하고 언제든 대처할 수 있도록 준비해, 어떻게든 ',
        coffee.get_colored_name(),
        '가 평범한 생활을 할 수 있게 도왔다. 하지만…… 이것은 ‘몸이 좋지 않다’는 수준을 진작에 넘어섰다.',
      ]);
      await era.printAndWait('역시 괴이한 현상인 걸까……');
      await era.printAndWait([
        '그렇게 생각하니 ',
        you.get_colored_name(),
        '은(는) 앞날에 대한 작은 불안을 느꼈다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '새해 포부';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, you, callname) => {
      await era.printAndWait([
        '새해와 함께 ',
        coffee.get_colored_name(),
        '도 클래식급으로 올라갔다.',
      ]);
      await era.printAndWait([
        '보통 이런 때 트레이너는 담당 ',
        coffee.uma_sex_title,
        '와 원대한 포부를 이야기하는 법이지만……',
      ]);
      await coffee.say_and_wait(
        '지금은…… 이 몸 상태로는…… 거창한 포부 같은 건 말할 수 없어요……',
      );
      await coffee.say_and_wait(
        '올해는…… 적어도 친구의 뒤에…… 바짝 붙을 수 있을 정도로는……',
      );
      await era.printAndWait([
        coffee.sex,
        '의 타고난 허약함은 아직 나아지지 않았고 목표도 멀었다. 그래도 ',
        you.get_colored_name(),
        '은(는) ',
        coffee.sex,
        '의 마음만이라도 긍정적으로 바뀌기를 바랐다.',
      ]);
      era.printButton('「나가서 기분 전환하지 않을래?」', 1);
      await era.input();
      await coffee.say_and_wait('나가자고 하셔도…… 어디로……');
      era.printButton(
        `${coffee.sex}에게 물 만난 물고기의 기분을 느끼게 해 준다(스태미나+20)`,
        1,
      );
      era.printButton(
        `${coffee.sex}에게 커피를 느긋하게 음미하게 해 준다(체력+400)`,
        2,
      );
      era.printButton('「밖을 돌아다니자.」(스킬 Pt+30)', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await coffee.say_and_wait(
            '물 만난 물고기……? 잘 모르겠지만…… 잡념을 물고기의 물거품처럼 뱉어 낼 수 있다면…… 나쁘지 않을지도요……',
          );
          await era.printAndWait([
            '그렇게 ',
            coffee.get_colored_name(),
            '를 데리고 수족관에 갔다. ',
            coffee.sex,
            '는 수조 속 물고기를 무척 진지하게 바라보고 있었다……',
          ]);
          await coffee.say_and_wait(
            '……이 물고기들은…… 끝없이 짓누르는 수압을…… 그저 조용히 견디고 있네요……',
          );
          await coffee.say_and_wait('저도 이들처럼…… 더 강해져야겠어요……');
          await era.printAndWait([
            coffee.sex,
            '는 물고기의 감각에 공감하며 인내를 조금 배운 듯했다.',
          ]);
          break;
        case 2:
          await coffee.say_and_wait(
            '커피…… 그렇네요. 커피 향은 늘…… 모든 걸 잊게 해 주니까요……',
          );
          await coffee.say_and_wait(
            '그럼 그 가게로 가요…… 평소에는 혼자 가는 곳이지만……',
          );
          await era.printAndWait([
            coffee.get_colored_name(),
            '의 안내를 받아 작은 카페에 도착했다. ',
            coffee.sex,
            '는 익숙한 듯 늘 앉던 자리에 앉았다……',
          ]);
          await coffee.say_and_wait([
            callname,
            '……커피를 마시는 방법을 아시나요? 이 가게에는…… 음미하는 순서가 있어요……',
          ]);
          await coffee.say_and_wait(
            '먼저 공기 중에 퍼지는 향을 즐기고…… 그다음에는…… 제철 커피를 한 잔……',
          );
          await era.printAndWait([
            coffee.sex,
            '는 조금씩 입에 머금고 마시며 커피의 맛을 마음껏 음미했다.',
          ]);
          break;
        case 3:
          await coffee.say_and_wait(
            '……돌아다니는 건 별로 좋아하지 않아요…… 인파에 휩쓸려…… 사라질 것 같아서……',
          );
          await coffee.say_and_wait([
            '하지만…… 그렇네요. ',
            callname,
            '도 함께라면……',
          ]);
          await era.printAndWait([
            '그렇게 ',
            coffee.get_colored_name(),
            '를 데리고 트레센 근처 시내로 나갔다. ',
            coffee.sex,
            '는 호기심 가득한 눈으로 길가 가게들의 진열창을 둘러보았다……',
          ]);
          await coffee.say_and_wait(
            '의외로…… 재미있네요…… 처음 보는 가구와 옷이 이렇게 많다니……',
          );
          await coffee.say_and_wait(
            '앗, 오래된 사이펀이…… 그리고 앤티크 찻잔도……',
          );
          await era.printAndWait([
            '평소에는 시내를 돌아다니지 않는 ',
            coffee.get_colored_name(),
            '도 처음 보는 물건들을 발견하며 마음에 작은 자극을 받은 모양이다.',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_6: (() => {
    const title = '전환점';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} call_32 マンハッタンカフェがアグネスタキオンを呼ぶときの呼称
     * @param {PrintedSpan} hoch_sho 弥生賞（着色名）
     */
    const f = async (coffee, tachyon, you, callname, call_32, hoch_sho) => {
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 수많은 괴이한 현상에 시달려 왔지만, 꾸준한 관리 끝에 성적은 간신히 합격점에 이르렀다.',
      ]);
      await coffee.say_and_wait(
        '몸무게는…… 아직도 갑자기 늘었다 줄었다 해요…… 하지만 성적은…… 안정되고 있어요.',
      );
      await coffee.say_and_wait([
        '이것도 ',
        callname,
        ' 덕분이에요…… 목표까지는 아직 멀지만요.',
      ]);
      await coffee.say_and_wait('목표는커녕…… 애초에……');
      await era.printAndWait([
        coffee.sex,
        '가 하려던 말을 헤아려 봐도 ',
        you.get_colored_name(),
        '에게는 ',
        coffee.sex,
        '의 생각을 읽기 어려웠다.',
      ]);
      era.printButton('「다음 목표는 어디로 잡을까?」', 1);
      await era.input();
      await era.printAndWait([
        coffee.sex,
        '의 상태로는 봄의 클래식 레이스에서 우승하기 어려울지도 모른다. 그렇다고 스스로 한계를 정하지는 않았으면 했다.',
      ]);
      await era.printAndWait([
        '우선 ',
        coffee.get_colored_name(),
        '의 의견을 들으면 ',
        coffee.sex,
        '의 대답에서 생각을 조금은 알 수 있을 것이다.',
      ]);
      if (era.get('cflag:32:招募状态') === 1) {
        await coffee.say_and_wait([
          '……',
          call_32,
          '도 출전하는 ',
          hoch_sho,
          '.',
        ]);
        await era.printAndWait([
          hoch_sho,
          '……',
          tachyon.get_colored_name(),
          '이 클래식 삼관을 향해 나아가는 데 중요한 일전이다.',
        ]);
      } else {
        await coffee.say_and_wait(['……', hoch_sho, '.']);
      }
      era.printButton('「이유를 물어봐도 될까?」', 1);
      await era.input();
      await coffee.say_and_wait(
        '사실은…… 제 뜻이 아니에요. 하지만 친구가 계속…… 그렇게 요구해서……',
      );
      await coffee.say_and_wait('『이 레이스를 달려』라고요. 달리지 않으면……');
      await era.printAndWait([
        '달리지 않으면? ',
        you.get_colored_name(),
        '은(는) 허리를 펴고 ',
        coffee.get_colored_name(),
        '의 다음 말을 기다렸다.',
      ]);
      await coffee.say_and_wait(
        '어떻게 될지는…… 저도 몰라요. 친구는 그렇게만 말했어요…… 하지만…… 무서운 일이 생길지도 몰라요……',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 한숨을 쉬며 의자 등받이에 몸을 기댔다.',
      ]);
      await era.printAndWait([
        coffee.sex,
        '는 이미 마음을 정한 듯했다——스스로 원한 결정은 아닐지라도, 트레이너로서는……',
      ]);
      if (era.get('cflag:32:招募状态') === 1) {
        era.printButton('「아그네스 타키온과 승부하자!」', 1);
      } else {
        era.printButton('「전력을 다해 달리고 와!」', 1);
      }
      await era.input();
      await coffee.say_and_wait('……네! 누구든…… 뛰어넘어 보이겠어요……');
    };
    f.title = title;
    return f;
  })(),
  before_hoch_sho: (() => {
    const title = '야요이상을 향해';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_32 マンハッタンカフェがアグネスタキオンを呼ぶときの呼称
     * @param {boolean} vs_tachyon 相手にアグネスタキオンがいるか
     * @param {PrintedSpan} hoch_sho 弥生賞（着色名）
     */
    const f = async (coffee, you, call_32, vs_tachyon, hoch_sho) => {
      await era.printAndWait([
        '오늘은 ',
        hoch_sho,
        '이다. 하지만 선수 통로의 ',
        coffee.get_colored_name(),
        '는 조금 수척해 보였다.',
      ]);
      era.printButton('「긴장했어?」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '의 질문을 듣고 ',
        coffee.get_colored_name(),
        '는 고개를 저었다.',
      ]);
      if (vs_tachyon) {
        await coffee.say_and_wait([
          '어젯밤부터 계속…… 어떻게 해야 ',
          call_32,
          '에게 이길 수 있을지…… 생각했어요……',
        ]);
      } else {
        await coffee.say_and_wait(
          '어젯밤부터 계속…… 어떻게 해야 다른 상대들에게 이길 수 있을지…… 생각했어요……',
        );
      }
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 수척한 모습은 ',
        coffee.sex,
        '가 이번 일전을 얼마나 중요하게 여기는지 보여 주는 듯했다.',
      ]);
      await era.printAndWait([
        coffee.sex,
        '의 어깨를 두드렸다. 트레이너인 ',
        you.get_colored_name(),
        '이(가) 지금 할 수 있는 일은 하나뿐이다.',
      ]);
      era.printButton('「힘내.」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '의 말에 작게 고개를 끄덕이고 ',
        coffee.get_colored_name(),
        '는 레이스장으로 향했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  hoch_sho_win: (() => {
    const title = '이정표';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} callname_32 アグネスタキオンがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶときの呼称
     * @param {boolean} vs_tachyon 相手にアグネスタキオンがいるか
     * @param {PrintedSpan} hoch_sho 弥生賞（着色名）
     * @param {PrintedSpan} sats_sho 皐月賞（着色名）
     * @param {PrintedSpan} toky_yus 日本ダービー（着色名）
     * @param {PrintedSpan} stli_kin セントライト記念（着色名）
     * @param {PrintedSpan} kiku_sho 菊花賞（着色名）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      callname_32,
      t_call_c,
      vs_tachyon,
      hoch_sho,
      sats_sho,
      toky_yus,
      stli_kin,
      kiku_sho,
    ) => {
      await era.printAndWait([
        '레이스가 끝나자 ',
        you.get_colored_name(),
        '은(는) 곧바로 선수 통로로 달려갔다.',
      ]);
      era.printButton('「카페!」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '의 부름에 아직도 숨을 헐떡이던 ',
        coffee.get_colored_name(),
        '가 이쪽을 보았다. 레이스의 피로에서 벗어나지 못한 ',
        coffee.sex,
        '의 얼굴은 평소보다 창백했고, 이마에서는 계속 땀이 흘렀다.',
      ]);
      await coffee.say_and_wait([
        '하아, 하아…… ',
        callname,
        ', ',
        you.adult_sex_title,
        '……콜록, 콜록……',
      ]);
      era.printButton('「괜찮아!?」', 1);
      await era.input();
      await coffee.say_and_wait('괜찮아요…… 조금 많이 달렸을 뿐이에요……');
      await era.printAndWait([
        '이번 ',
        hoch_sho,
        ', ',
        coffee.get_colored_name(),
        '의 상대들은 모두 강했다. 끝까지 손에 땀을 쥐고 지켜보던 ',
        you.get_colored_name(),
        '은(는) ',
        coffee.get_colored_name(),
        '가 결승선을 통과한 순간에야 숨을 돌렸다.',
      ]);
      await era.printAndWait(['하지만…… 단순한 승리가 목표는 아니다.']);
      era.printButton('「친구는?」', 1);
      await era.input();
      await coffee.say_and_wait(
        '아직 따라잡지는 못했어요…… 하지만 거리는…… 줄었어요……!',
      );
      await coffee.say_and_wait('이대로 레이스를 거듭하면…… 언젠가는……');
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 지금까지 이야기를 보면 친구는 상당히 강한 존재다…… 친구를 쫓는다는 목표는 ',
        coffee.get_colored_name(),
        '의 성적을 끌어올리는 일과 정확히 맞아떨어진다.',
      ]);
      await era.printAndWait([
        '그런 점에서는 이대로 클래식 삼관 노선을 노리는 것이 최선이지만……',
      ]);
      if (vs_tachyon) {
        await tachyon.say_and_wait([
          '여기 있었군, ',
          callname_32,
          ', 그리고 ',
          t_call_c,
          '.',
        ]);
        await era.printAndWait([
          '이번에는 ',
          coffee.get_colored_name(),
          '에게 졌는데도 ',
          tachyon.get_colored_name(),
          '은 기진맥진한 ',
          coffee.get_colored_name(),
          '보다 여유로워 보였다. 평소의 웃음을 띤 채 두 사람 쪽으로 걸어왔다.',
        ]);
        await tachyon.say_and_wait([
          t_call_c,
          ', 이번에는——잘 달렸네, 아주 잘! 안 되지만, 좋아! 예상 밖의 성공과 예상대로의 실패는 서로 상쇄할 수 있지!',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 잠시 혼자 웃더니 하늘을 보고 무언가 작게 중얼거렸다.',
        ]);
        await tachyon.say_and_wait(
          '타키온——빛보다 빠르게 움직이는 가상 입자지.',
        );
        await tachyon.say_and_wait(
          '하지만 가상일지라도 광열의 잔광은 보여 주겠네.',
        );
        await tachyon.say_and_wait([
          sats_sho,
          '에서 불타고 나면 눈부신 잔해가 남을 테지.',
        ]);
        await tachyon.say_and_wait([
          '그럼 당분간은 이걸로. ',
          t_call_c,
          ', 앞으로도 기대하겠네.',
        ]);
        era.printButton('「…………」', 1);
        await era.input();
        await era.printAndWait([
          '늘 그렇듯 ',
          tachyon.get_colored_name(),
          '은 갑자기 나타나 난해한 말을 하고 제멋대로 떠났다. 멀어지는 모습을 바라보며 말문을 잃은 ',
          you.get_colored_name(),
          '과(와) ',
          coffee.get_colored_name(),
          '만 남겨졌다.',
        ]);
        await coffee.say_and_wait([callname, '……', sats_sho, '……출전하나요?']);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 말에 무언가 떠올랐는지 ',
          coffee.get_colored_name(),
          '는 ',
          you.get_colored_name(),
          '에게 돌아서서 물었다.',
        ]);
      }
      era.printButton('「오늘 레이스는 꽤 힘들었지?」', 1);
      await era.input();
      await coffee.say_and_wait('네…… 조금 힘이 부족했어요……');
      era.printButton('「그럼 사츠키상은…… 일단 포기하자.」', 1);
      await era.input();
      await era.printAndWait([
        '오늘의 치열한 레이스는 ',
        coffee.sex,
        '의 가녀린 몸에 큰 부담을 줬을 것이다. 앞으로 도전할 노선은 보였지만, 이렇게 일찍 G1에 도전하는 것은 아직 무리다.',
      ]);
      await coffee.say_and_wait('그럼…… 더비는……');
      await era.printAndWait([
        toky_yus,
        '는 분명 ',
        you.get_colored_name(),
        '이(가) ',
        coffee.get_colored_name(),
        '에게 우승을 기대하는 레이스다. 하지만 다음 목표를 더비로 잡는다면 ',
        coffee.sex,
        '가 버틸 수 있을지 도박을 하는 셈이다……',
      ]);
      await coffee.say_and_wait([
        '……죄송해요, ',
        callname,
        '……제가 이렇게 약해서……',
      ]);
      await coffee.say_and_wait(
        '당신의 다정함에…… 기대기만 하고 싶지는 않아요…… 게다가 이렇게 중요한 일전인데…… 콜록……',
      );
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 등을 가볍게 두드려 ',
        coffee.sex,
        '가 조금 숨을 고르게 했다.',
      ]);
      era.printButton('「가을의 세인트 라이트 기념에 도전하자.」', 1);
      await era.input();
      await coffee.say_and_wait([
        stli_kin,
        '……',
        kiku_sho,
        '의 전초전인가요…… 그렇게 먼……',
      ]);
      await coffee.say_and_wait('하지만…… 그렇다면…… 적어도 더비는 아직……');
      era.printButton('「더비는 상태를 보고 결정하자.」', 1);
      await era.input();
      await coffee.say_and_wait('상태를 보고…… 네, 상황이 허락하면…… 다시……');
      await era.printAndWait([
        '그렇게 다음 목표는 ',
        stli_kin,
        '으로 정해졌고, ',
        toky_yus,
        '는 상황이 허락하면 출전하기로 했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_17: (() => {
    const title = '포기할 것인가';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} toky_yus 日本ダービー（着色名）
     */
    const f = async (coffee, you, callname, toky_yus) => {
      await era.printAndWait([
        coffee.get_colored_name(),
        '에게 ',
        toky_yus,
        '는 ',
        coffee.sex,
        '의 목표를 이루기 위해 꼭 필요한 선택지는 아니다.',
      ]);
      await era.printAndWait([
        '——그렇다 해도 일생에 단 한 번뿐인 더비는 ',
        coffee.sex,
        '에게도 매력적이다.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '가 ',
        toky_yus,
        '에 출전할 수 있을지 확인하려고 트레이닝장으로 왔다.',
      ]);
      await coffee.say_and_wait([
        '하아, 하아…… ',
        callname,
        ', 이 랩 타임이라면……',
      ]);
      await coffee.say_and_wait(
        '더비에서…… 승산이 있을까요? 이길 수 있다면…… 친구에게도 더 가까이……',
      );
      era.printButton('「몸 상태는 어때?」', 1);
      await era.input();
      await coffee.say_and_wait(
        '……좋지는 않아요…… 하지만…… 하루 이틀 일도 아니니까……',
      );
      await era.printAndWait([
        coffee.get_colored_name(),
        '를 더비에 출전시킬지…… 솔직히 판단하기 어렵다.',
      ]);
      await era.printAndWait([
        '트레이너인 ',
        you.get_colored_name(),
        '은(는) 지금 결정을 내려야 한다.',
      ]);
      era.printButton('「……몸을 위해 포기하자.」', 1);
      era.printButton('「……기회는 한 번뿐이야.」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await coffee.say_and_wait('포기하자는 건가요…… 알겠어요……');
        await era.printAndWait([
          '일생에 단 한 번뿐인 더비에 나가지 못하는 것은 아쉽다…… 이 선택이 가을의 ',
          coffee.get_colored_name(),
          '에게 순풍이 되어 주기를 바란다.',
        ]);
      } else {
        await coffee.say_and_wait('알겠어요……! 열심히 할게요! 반드시 더비를……');
        await era.printAndWait([
          coffee.get_colored_name(),
          '는 투지가 넘쳤다…… 이 선택이 가을 레이스에 화근을 남기지 않기를 바란다.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_toky_yus: (() => {
    const title = '일본 더비를 향해';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} toky_yus 日本ダービー（着色名）
     */
    const f = async (coffee, you, callname, toky_yus) => {
      await era.printAndWait([
        toky_yus,
        '——일생에 단 한 번뿐인 이 레이스를 위해 ',
        coffee.get_colored_name(),
        '는 힘겨운 트레이닝을 거듭해 왔다.',
      ]);
      await era.printAndWait('그리고 지금, 결실을 거둘 때가 왔다.');
      await coffee.say_and_wait([callname, '……다녀올게요.']);
      await era.printAndWait([
        '선수 통로에서 ',
        you.get_colored_name(),
        '은(는) ',
        coffee.get_colored_name(),
        '가 레이스장으로 향하는 뒷모습을 말없이 배웅했다.',
      ]);
      await era.printAndWait(
        '할 말은 없다. 해야 할 말도 없다. 더 보탤 말은 트레이닝을 하던 나날 속에서 모두 전했다.',
      );
      await era.printAndWait([
        '이제부터는 ',
        coffee.sex,
        ' 혼자서 다른 출전 ',
        coffee.uma_sex_title,
        '들——그리고 친구와 겨루어야 한다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  toky_yus_win: (() => {
    const title = '우뚝 서다';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} toky_yus 日本ダービー（着色名）
     */
    const f = async (coffee, you, toky_yus) => {
      await you.say_as_passer_by_and_wait('실황', [
        coffee.get_colored_name(),
        '가 더비를 제패합니다──!! 불멸의 마천루, 이곳에 우뚝 섭니다!',
      ]);
      await you.say_as_passer_by_and_wait('실황', [
        '하지만 ',
        coffee.sex,
        '는 괜찮을까요? 체력을 다 쏟아부어 발걸음조차 위태롭습니다…… 그래도 ',
        coffee.sex,
        '는 ',
        coffee.sex,
        '에게 꿈을 맡긴 사람들의 오랜 염원을 이루어 냈습니다——!!',
      ]);
      await era.printAndWait([
        '선수 통로에서 ',
        coffee.get_colored_name(),
        '는 비틀거리며 ',
        you.get_colored_name(),
        '에게 걸어왔다.',
      ]);
      await coffee.say_and_wait(['트레이너…… ', you.adult_sex_title, '……']);
      era.printButton('「잘했어, 카페……」', 1);
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '의 품으로 쓰러지듯 안겼다. 기진맥진한 모습에 마음이 아팠다. 그래도 ',
        coffee.sex,
        '는 승리를 거머쥐었다.',
      ]);
      await coffee.say_and_wait('하아, 하아……');
      era.printButton('「이제 푹 쉬자.」', 1);
      era.printButton('「트레이닝 강도도 조금 낮출게.」', 2);
      await era.input();
      await coffee.say_and_wait('네……');
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 ',
        toky_yus,
        '를 제패했다. 오랜 노력이 최고의 결실을 맺었다. 동시에 ',
        you.get_colored_name(),
        '이(가) 온 힘을 다해 돌봐 준 덕분에 ',
        coffee.sex,
        '의 회복도 순조로웠다. 가을에도 좋은 성적을 기대할 수 있을 것이다……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '여름 합숙(클래식급) 시작';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} callname_32 アグネスタキオンがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶときの呼称
     */
    const f = async (coffee, tachyon, you, callname, callname_32, t_call_c) => {
      await era.printAndWait([
        '트레센의 관례대로 ',
        you.get_colored_name(),
        '과(와) ',
        coffee.get_colored_name(),
        '는 여름 합숙에 왔다.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 원래 몸 상태가 좋지 않은 데다 그동안의 트레이닝과 레이스로 피로까지 쌓여 있었다. 이 기간에 어떻게든 회복시켜야 한다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '의 결의와는 달리, 아직 학생이기는 학생인지 합숙지에 도착한 ',
        coffee.uma_sex_title,
        '들은 모두 들떠 있었다.',
      ]);
      await coffee.say_and_wait('후후후…… 기대돼요, 합숙…… 어디로 갈까?');
      await coffee.say_and_wait(
        '응? 아무도 없는 절벽? 그렇네…… 깊은 산속의 잊힌 동굴도…… 나쁘지 않을 것 같아. 후후후후……',
      );
      await you.say_as_passer_by_and_wait(
        `${coffee.uma_sex_title}A`,
        '누, 누구랑 얘기하는 거야, 카페~!? 왠지 등골이 오싹한데!',
      );
      await you.say_as_passer_by_and_wait(`${coffee.uma_sex_title}B`, [
        '하하하…… 이유는 모르겠는데 ',
        coffee.sex,
        '가 있으면 귀신이 모일 것 같아……',
      ]);
      if (era.get('cflag:32:招募状态') === 1) {
        await tachyon.say_and_wait([
          '흐음~ 심령 현상보다는 신비라고 해야겠지. 그렇지 않나? ',
          callname_32,
          '.',
        ]);
        await era.printAndWait([
          '조금 떨어진 곳에서 허공에 중얼거리는 ',
          coffee.get_colored_name(),
          '를 바라보며 ',
          you.get_colored_name(),
          '의 곁에 있던 ',
          tachyon.get_colored_name(),
          '이 제멋대로 말을 꺼냈다.',
        ]);
        await tachyon.say_and_wait([
          '자네가 ',
          t_call_c,
          '과(와) 무슨 일을 겪었는지는 잘 모르지만, 보이는 괴물보다 보이지 않는 존재가 더 성가신 법이지. 그러니 거리는 둬야 할 걸세.',
        ]);
        await tachyon.say_and_wait([
          t_call_c,
          '에 관해서라면, 그 친구의 정체가 무엇인지, 정말 존재하는지는 관심 없네. 궁금한 것은 ',
          coffee.sex,
          '가 무엇을 하려는지야.',
        ]);
      } else {
        await era.printAndWait([
          '조금 떨어진 곳에서 허공에 중얼거리는 ',
          coffee.get_colored_name(),
          '를 보며 ',
          you.get_colored_name(),
          '은(는) 한 가지 생각을 떠올렸다.',
        ]);
      }
      await era.printAndWait([
        '——친구. 몇 번이나 ',
        you.get_colored_name(),
        '을(를) 구해 주었지만 거의 아무것도 모르는 존재.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 목표 한가운데 있는 친구는 대체 어떤 존재일까.',
      ]);
      await era.printAndWait(
        '평소에는 깊이 알아볼 시간도 여력도 없다. 하지만 여름 합숙이라는 기회라면……',
      );
      await coffee.say_and_wait(['…………? ', callname, ', 무슨 일이세요?']);
      era.printButton('「올여름에는…… 제대로 이야기하자.」', 1);
      await era.input();
      await coffee.say_and_wait('……기꺼이요.');
      await era.printAndWait([
        '친구를 깊이 알아가는 것은 ',
        coffee.get_colored_name(),
        '를 알아가는 일로 이어진다——',
        you.get_colored_name(),
        '은(는) 그렇게 생각했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_30: (() => {
    const title = 'Plan B';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_32 マンハッタンカフェがアグネスタキオンを呼ぶときの呼称
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶときの呼称
     */
    const f = async (coffee, tachyon, you, call_32, t_call_c) => {
      await era.printAndWait([
        '여름 합숙이 시작된 어느 날, ',
        you.get_colored_name(),
        '은(는) ',
        coffee.get_colored_name(),
        '를 합숙소의 한 방으로 불렀다.',
      ]);
      era.printButton(
        '「너와 관련된 이야기가 있어…… 우선 텔레비전을 봐 줘.」',
        1,
      );
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 어리둥절한 채 고개를 끄덕이고 ',
        you.get_colored_name(),
        '의 말대로 텔레비전을 켰다.',
      ]);
      await coffee.say_and_wait(['…………！？ ', call_32, '？']);
      await era.printAndWait([
        '화면에 나오는 것은 ',
        tachyon.get_colored_name(),
        '의 기자회견이었다.',
      ]);
      await tachyon.print_and_wait(
        '……방금 말씀드렸듯이, 오늘부로 저 아그네스 타키온은——무기한 휴양에 들어갑니다!',
      );
      await you.say_as_passer_by_and_wait('기자들', '————네!?');
      await era.printAndWait([
        '클래식 삼관 노선에서 가장 주목받는 ',
        coffee.uma_sex_title,
        ' 중 한 명의 갑작스러운 발표에…… 회견장이 술렁였다.',
      ]);
      await you.say_as_passer_by_and_wait('기자 A', [
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        '……레이스에서 큰 가능성을 보여 주셨는데, 왜 그런 결정을 하신 거죠!?',
      ]);
      await tachyon.print_and_wait(
        '큰 가능성이라…… 그것조차 내 진짜 힘은 아니었지만 말이지.',
      );
      await you.say_as_passer_by_and_wait(
        '기자 B',
        '많은 이들이 앞으로 더 많은 승리를 거두리라 확신했습니다. 대체 왜입니까!?',
      );
      await tachyon.print_and_wait(
        '뭐, 이유를 한마디로 설명할 수는 없지. 진실은 늘 여러 요인으로 이루어져 있지 않은가?',
      );
      await you.say_as_passer_by_and_wait(
        '기자 C',
        '사실상의 은퇴 선언…… 그렇게 받아들여도 되겠습니까?',
      );
      await tachyon.print_and_wait(
        '그렇게 물어도 의미는 없네. 미래에 무슨 일이 일어날지는 누구도 확신할 수 없으니까.',
      );
      await tachyon.print_and_wait('그럼 발표는 이상이네.');
      await era.printAndWait([
        '그 뒤 ',
        tachyon.get_colored_name(),
        '은 현장을 떠났고, ',
        you.get_colored_name(),
        '도 텔레비전을 끈 뒤 갑작스러운 정보에 혼란스러워하는 ',
        coffee.get_colored_name(),
        '를 바라보았다.',
      ]);
      era.printButton(
        '「쉽게 말하면…… 타키온은 레이스를 그만둘 생각이야.」',
        1,
      );
      await era.input();
      await coffee.say_and_wait('대체…… 왜……');
      era.printButton(
        `「이건…… 나와 타키온이 내린 결정이야. 앞으로 ${tachyon.sex}는——」`,
        1,
      );
      await era.input();
      await tachyon.say_and_wait('그 부분은 내가 직접 설명하지.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 방문을 열고 ',
        you.get_colored_name(),
        '과(와) ',
        coffee.get_colored_name(),
        '의 시선을 받았다.',
      ]);
      await tachyon.say_and_wait([
        '간단히 말하자면, ',
        t_call_c,
        '——자네에게서 새로운 가능성을 발견했네.',
      ]);
      await coffee.say_and_wait('새로운…… 가능성?');
      await tachyon.say_and_wait([
        '그래. 내 목표는 ',
        coffee.uma_sex_title,
        '의 한계에 도달하고, 그것을 뛰어넘는 것…… 하지만 그걸 꼭 나 자신이 이루어야 할까? 길은 하나뿐이 아니네. 검증할 진리는 하나여도 종착점에 이르는 길은 여럿이지.',
      ]);
      await coffee.say_and_wait('그건…… 무슨 뜻인가요?');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 한숨을 내쉬고 과장되게 손을 휘저었다.',
      ]);
      await tachyon.say_and_wait([
        '여기까지 말해도 모르겠나…… 『고문』일세, 『고문』! ',
        t_call_c,
        ', 내가 자네의 고문이 되겠네!',
      ]);
      await coffee.say_and_wait('네…… 고문이요!?');
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 멍하니 ',
        you.get_colored_name(),
        '을(를) 바라보았다. ',
        you.get_colored_name(),
        '은(는) 고개를 끄덕였다.',
      ]);
      era.printButton(
        '「그 말대로야. 앞으로 타키온이 네 고문을 맡을 거야. 동시에……」',
        1,
      );
      era.printButton(`「너도 타키온의 목표를 돕는 책임을 지게 돼……」`, 2);
      era.printButton('「지금은 카페의 의견을 듣고 싶어.」', 3);
      await era.input();
      await era.printAndWait([
        '말을 마친 ',
        you.get_colored_name(),
        '은(는) ',
        coffee.get_colored_name(),
        '에게 생각할 시간을 주려 했다. 하지만 ',
        tachyon.get_colored_name(),
        '의 생각은 달랐다.',
      ]);
      await tachyon.say_and_wait(
        '내가 도와주면 친구를 더 빨리 따라잡을 수 있을 텐데?',
      );
      await era.printAndWait([
        '친구를 따라잡는 것——그것이 ',
        coffee.get_colored_name(),
        '의 가장 큰 소망이다. ',
        tachyon.get_colored_name(),
        '의 실력과 과학의 힘만큼은 ',
        coffee.sex,
        '에게 불만이 있는 ',
        coffee.get_colored_name(),
        '도 인정하고 있었다.',
      ]);
      await era.printAndWait('친구를 더 빨리 따라잡을 수 있다면……');
      await coffee.say_and_wait(
        '당신은 아직 이해할 수 없어요…… 하지만 제게 도움이 된다면……',
      );
      await tachyon.say_and_wait(
        '후후후후…… 좋아, 그거면 됐네. 결정일세. 플랜 B, 시작!',
      );
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 조력자로 합류한 뒤 ',
        coffee.get_colored_name(),
        '의 클래식급 도전은 어떤 방향으로 나아갈까……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_31: (() => {
    const title = '친구';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, you, callname) => {
      await coffee.say_and_wait([callname, '…… 친구에 관한…… 이야기죠……?']);
      era.printButton('「응. 자세히 알고 싶어.」', 1);
      await era.input();
      await era.printAndWait([
        '여름 합숙의 어느 밤, ',
        you.get_colored_name(),
        '은(는) ',
        coffee.get_colored_name(),
        '에게 ',
        coffee.sex,
        '의 마음속 특별한 존재——친구에 관해 물었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 전에 우연히 ',
        coffee.sex,
        '에게 들은 적이 있었다. 친구는 ',
        coffee.sex,
        '가 어릴 때부터 곁에 있었으며, 언제나 앞을 달리며 ',
        coffee.sex,
        '를 이끌어 왔다고 한다.',
      ]);
      await era.printAndWait('하지만 이끌어 준다는 건 대체 무슨 뜻일까?');
      await coffee.say_and_wait('무엇이…… 궁금하신가요?');
      era.printButton('「친구가 이끌어 준다는 건 무슨 뜻이야?」', 1);
      await era.input();
      await coffee.say_and_wait(
        '이끌어 준다는 건…… 언제나 『제 앞을 달린다』는 뜻이에요.',
      );
      await coffee.say_and_wait('아니…… 그것만은 아니에요……');
      await coffee.say_and_wait(
        '『친구』는 저를…… 행복한 곳으로 데려가 줘요……',
      );
      await coffee.say_as_unknown_and_wait('후후후, 후후후후후……♪');
      await era.printAndWait('주변에서 들릴 듯 말 듯한 웃음소리가 났다.');
      await coffee.say_and_wait(
        '아무도 모르는 조용한 곳으로…… 몰래 데려가 주기도 하고……',
      );
      await coffee.say_as_unknown_and_wait('후후후, 후후후후후……♪');
      await era.printAndWait([
        you.get_colored_name(),
        '의 귓가에서 들리는 듯하며 감각을 희롱했다.',
      ]);
      await coffee.say_and_wait(
        '놀이공원에 갔을 때…… 친구는 관람차 맨 위에 앉아 있었어요. 따라잡으려고 탑승했더니…… 정말 아름다운 풍경이 보였어요……',
      );
      await coffee.say_and_wait(
        '친구를 쫓다 보면…… 언제나 즐거운 일이 생겨요……',
      );
      await coffee.say_and_wait(
        '제가 원하면 친구는 늘…… 어디로 가야 할지 알려 줘요……',
      );
      await coffee.say_and_wait(
        '다른 사람들은…… 아무것도 주지 않았어요…… 친구만이 달랐죠.',
      );
      await coffee.say_and_wait('즐거운 시간을 주는…… 하나뿐인 존재예요……');
      era.printButton('「……지금도 그래?」', 1);
      await era.input();
      await coffee.say_and_wait(['……', callname, '도…… 친구와 조금 닮았어요.']);
      await coffee.say_and_wait([
        '하지만 우리가 만날 수 있었던 것도…… 친구가 위험에 처한 ',
        callname,
        '의 앞으로 저를 이끌어 줬기 때문이에요……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 조금 이해할 수 있었다. ',
        coffee.get_colored_name(),
        '에게 친구는 단지 레이스에서 앞을 달리는 존재가 아니다……',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '에게는 행복으로 이끄는 길잡이에 더 가까울지도 모른다.',
      ]);
      await coffee.say_and_wait(
        '지금도 제가 원하면…… 친구는 어디로든 데려가 줘요. 예를 들면……',
      );
      await coffee.say_and_wait([
        callname,
        ', 『지금 이런 곳에 있을 리 없는 것』을 하나…… 떠올려 주시겠어요?',
      ]);
      await era.printAndWait([
        '여기 있을 리 없는 것…… ',
        you.get_colored_name(),
        '의 머릿속에 떠오른 것은——',
      ]);
      era.printButton('「……라벤더.」(파워+20)', 1);
      era.printButton('「……마리모.」(근성+20)', 2);
      era.printButton('「네 발 달린…… 말.」', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await coffee.say_and_wait(
            '라벤더…… 말씀이군요. 꿀풀과 라벤더속…… 여기서는 자라지 않는 꽃……',
          );
          await coffee.say_and_wait('그래도 진심으로 바란다면……');
          await era.printAndWait('——쿵!');
          await era.printAndWait([
            you.get_colored_name(),
            '의 등을…… 갑자기 강한 힘이 밀었다.',
          ]);
          await era.printAndWait([
            '친구인가!? 그렇게 생각하기도 전에 몸은 재촉받듯 밀린 방향으로 나아가고 있었다.',
          ]);
          await era.printAndWait('도착한 곳에는……');
          await coffee.say_and_wait('바위네요. 함께…… 치워 봐요.');
          await coffee.say_and_wait('하나~ 둘…… 영차……');
          await era.printAndWait([
            coffee.get_colored_name(),
            '는 가느다란 팔로 바위를 치웠다. 바위 아래에는…… 해초 같은 것이 잔뜩 있었다.',
          ]);
          await coffee.say_and_wait(
            '하나하나 끝에…… 꽃봉오리 같은 것이…… 이걸 라벤더 대신으로…… 주는 걸까……',
          );
          break;
        case 2:
          await coffee.say_and_wait(
            '마리모…… 말씀이군요. 홋카이도의 아칸호 같은 곳에 사는…… 둥근 조류……',
          );
          await coffee.say_and_wait(
            '이 근처에는 없을 텐데…… 그래도 진심으로 바란다면……',
          );
          await era.printAndWait('——쿵!');
          await era.printAndWait([
            you.get_colored_name(),
            '의 등을…… 갑자기 강한 힘이 밀었다.',
          ]);
          await era.printAndWait([
            '친구인가!? 그렇게 생각하기도 전에 몸은 재촉받듯 밀린 방향으로 나아가고 있었다.',
          ]);
          await era.printAndWait('도착한 곳에는……');
          await coffee.say_and_wait('하아, 하아…… 꽤 많이 걸었네요……');
          await coffee.say_and_wait([
            '앗, ',
            callname,
            '…… 파도에 떠밀려 해변으로 올라온 저건……',
          ]);
          await coffee.say_and_wait('해조류 덩어리일까요?');
          await era.printAndWait(
            '그곳에 있는 것은 바다의 오물을 잔뜩 머금고 뒤엉킨 식물 잔해였다……',
          );
          await coffee.say_and_wait(
            '보기에 좋지는 않지만…… 이걸 마리모 대신으로…… 주는 걸까요?',
          );
          break;
        case 3:
          await coffee.say_and_wait([
            '말…… ',
            coffee.uma_sex_title,
            ' 말인가요? ……네 발 달렸다는 건……',
          ]);
      }
      if (ret < 3) {
        await era.printAndWait(
          '친구가 할 수 있는 일도 여기까지가 한계인 모양이다. 만능은 아닌 듯하다.',
        );
        await era.printAndWait(
          '최선을 다해 도와주는 수호령에 가까울지도 모른다.',
        );
        await coffee.say_and_wait(
          '친구는 늘 이렇게…… 저를 곧장 행복으로 이끌어 줘요.',
        );
        await coffee.say_and_wait(
          '계속 곁에서…… 도와주는…… 정말 소중한…… 『친구』……',
        );
        await era.printAndWait([
          coffee.get_colored_name(),
          '의 지금이 있는 것은 이 수호령 덕분일지도 모른다.',
        ]);
        await coffee.say_and_wait([
          '……앗, ',
          callname,
          ', 보세요. 바다에 섬이……',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 먼바다를 바라보았다…… 확실히 섬이 있었다. 하지만 다리도 배도 없고 헤엄쳐서 닿을 거리도 아니었다.',
        ]);
        await coffee.say_and_wait(
          '조금…… 가 보고 싶어요. 분명…… 조용하고 아름다운 곳이겠죠.',
        );
        await era.printAndWait('정말 그 섬에 가고 싶다면……');
        await era.printAndWait('——툭, 툭, 툭!');
        await era.printAndWait([
          '아무 이유 없이 ',
          you.get_colored_name(),
          '의 등이 연달아 찔렸다……! 「망설이지 말고 가」라고 말하는 듯했다.',
        ]);
        await coffee.say_and_wait(
          '앗, 『친구』가…… 손을 흔들어요…… 바다 저편에서…… 『이리 와』라고……',
        );
        await era.printAndWait([
          '친구는 ',
          coffee.get_colored_name(),
          '에게 수호령 같은 존재다.',
        ]);
        await era.printAndWait([
          '하지만 ',
          coffee.sex,
          '를 지켜 줄 마음이 있는지는 잘 모르겠다.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '여름 합숙(클래식급) 종료';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} callname_32 アグネスタキオンがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶときの呼称
     * @param {boolean} m_horse 「友達」イベントで「馬」を選んだか
     * @param {boolean} t_plan_b アグネスタキオンが Plan B に入ったか
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      callname_32,
      t_call_c,
      m_horse,
      t_plan_b,
    ) => {
      await era.printAndWait('여름 합숙의 모든 일정이 끝났다.');
      await coffee.say_and_wait([
        callname,
        '…… 당신 덕분에 제 몸 상태가 무척 좋아졌어요……',
      ]);
      if (t_plan_b) {
        await era.printAndWait([
          '한여름 동안 정성껏 돌본 보람이 있어, ',
          coffee.get_colored_name(),
          '의 컨디션이 눈에 띄게 개선되었다.',
        ]);
        await tachyon.say_and_wait([
          '야아, ',
          callname_32,
          '. 이번 여름 동안 ',
          t_call_c,
          '과의 진전은 좀 있었나?',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          '의 고문인 ',
          tachyon.get_colored_name(),
          '도 슬쩍 다가왔다.',
        ]);
        era.printButton('「……어느 정도는 알게 된 것 같아.」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '과 합숙 중에 알게 된 정보와 친구에 관한 이야기를 공유했다.',
        ]);
        await tachyon.say_and_wait([
          '과연 그렇군. 뜻을 알 수 없는 부분이 있긴 해도, 전체적으로 꽤 흥미로…… 아니, ',
          t_call_c,
          '에게 유익한 일이군.',
        ]);
        await tachyon.say_and_wait(
          '그렇다는 건—— 아니아니, 잠깐 기다리게. 외압성, 혹은 자상 충동. 여러 방향으로 고려해 본다면……',
        );
        await era.printAndWait([
          '그 후, ',
          tachyon.get_colored_name(),
          '은 깊은 사고의 바다에 빠져들었다.',
        ]);
      }
      await era.printAndWait([
        '여름이 지나가고 다가올 가을에는, 분명 ',
        coffee.get_colored_name(),
        '도 멋진 결실을 맺을 수 있을 것이다.',
      ]);
      if (m_horse) {
        await era.printAndWait([
          '……다만, 그 칠흑같이 기이한 짐승의 모습이 ',
          you.get_colored_name(),
          '의 머릿속을 떠나지 않았다.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_stli_kin: (() => {
    const title = '세인트 라이트 기념을 향해';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶときの呼称
     * @param {boolean} t_plan_b アグネスタキオンが Plan B に入ったか
     * @param {PrintedSpan} kiku_sho 菊花賞（着色名）
     */
    const f = async (coffee, tachyon, you, t_call_c, t_plan_b, kiku_sho) => {
      era.printButton('「카페, 몸 상태는 어때?」', 1);
      await era.input();
      await coffee.say_and_wait('몸속 깊은 곳이…… 예전과 달라요……');
      await coffee.say_and_wait(
        '기묘하게 욱신거리는 느낌도 없고…… 몸이 확실히 제 것이라는…… 그런 느낌이에요……',
      );
      if (t_plan_b) {
        await tachyon.say_and_wait([
          '내 영양 지도를 받았으니 당연하지. 게다가…… 봄보다 체중도 늘었네, ',
          t_call_c,
          '……',
        ]);
        await tachyon.say_and_wait(
          '하지만 이 상태는…… 후후후, 괴이와는 관계없군. 단순히 물리적으로 축적된 거라면……',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 ',
          coffee.get_colored_name(),
          '의 몸을 위아래로 살펴보더니 손을 뻗었지만 ',
          coffee.get_colored_name(),
          '가 능숙하게 피했다.',
        ]);
        await era.printAndWait(
          '아무래도 가장 불가해한 시기는…… 넘긴 것 같아요……',
        );
        await coffee.say_and_wait([
          '이 감각과 컨디션으로 달려서…… 이번 레이스를 확실히 따낸다면…… ',
          kiku_sho,
          '에서도 승산이 있을까요……?',
        ]);
        await tachyon.say_and_wait([
          '후후, 실험 전에 결과를 논해 봐야 의미 없네, ',
          t_call_c,
          '.',
        ]);
        await tachyon.say_and_wait([
          '레이스장에서 확인하도록 하지. ',
          coffee.get_colored_name(),
          '——자네라는 시험지가 어떤 색으로 변할지 말이야.',
        ]);
        await era.printAndWait(
          '밝은 색이면 좋겠다…… 어찌 됐든 오늘은 이겨야 한다.',
        );
      } else {
        await era.printAndWait(
          '아무래도 가장 불가해한 시기는…… 넘긴 것 같아요……',
        );
        await coffee.say_and_wait([
          '이 감각과 컨디션으로 달려서…… 이번 레이스를 확실히 따낸다면…… ',
          kiku_sho,
          '에서도 승산이 있을까요……?',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 대답할 수 없었다. ',
          coffee.get_colored_name(),
          '의 몸 상태에는 아직 모르는 요인이 너무 많았다.',
        ]);
        era.printButton('「어쨌든 우선 이번 레이스부터 따내자.」', 1);
        await era.input();
        await era.printAndWait([
          coffee.get_colored_name(),
          '는 고개를 끄덕이고 레이스장으로 향했다.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  stli_kin_win: (() => {
    const title = '과도기';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} kiku_sho 菊花賞（着色名）
     */
    const f = async (coffee, you, callname, kiku_sho) => {
      era.printButton('「수고했어, 카페!」', 1);
      await era.input();
      await era.printAndWait([
        '늘 그렇듯 ',
        you.get_colored_name(),
        '은(는) 일찌감치 선수 통로에 와서 ',
        coffee.get_colored_name(),
        '를 기다리고 있었다.',
      ]);
      await coffee.say_and_wait([
        '하아, 후우, 하아…… ',
        callname,
        '. 해냈어요……',
      ]);
      await coffee.say_and_wait(
        '쉽지는 않았지만…… 다리에는 아직…… 힘이 남아 있어요.',
      );
      await era.printAndWait([
        '좋은 경기를 펼친 뒤에도 ',
        coffee.sex,
        '에게는 여전히 조금 허약한 기색이 남아 있었다. 하지만 몸은 여름의 단련 덕분에 예전보다 훨씬 튼튼해진 듯했다.',
      ]);
      await era.printAndWait([
        '여기서 긴장을 늦춰서는 안 된다. 한 달 뒤에는 중요한——',
        kiku_sho,
        '이 기다리고 있다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_kiku_sho: (() => {
    const title = '국화상을 향해';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {boolean} t_plan_b アグネスタキオンが Plan B に入ったか
     * @param {PrintedSpan} sats_sho 皐月賞（着色名）
     * @param {PrintedSpan} toky_yus 日本ダービー（着色名）
     * @param {PrintedSpan} kiku_sho 菊花賞（着色名）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      t_plan_b,
      sats_sho,
      toky_yus,
      kiku_sho,
    ) => {
      await coffee.say_and_wait('…………');
      if (t_plan_b) {
        await tachyon.say_and_wait('…………');
      }
      era.printButton('「…………」', 1);
      await era.input();
      await era.printAndWait(
        '선수 통로에서는 아무도 입을 열지 않았다. 오늘 레이스가 얼마나 중요한지 서로 알고 있기 때문이다.',
      );
      await era.printAndWait([
        '——',
        kiku_sho,
        '. 일생에 단 한 번뿐인 레이스. 지금까지의 그 어떤 레이스와도 다른 3000미터의 장거리.',
      ]);
      await era.printAndWait([
        '가장 빠른 ',
        coffee.uma_sex_title,
        '가 ',
        sats_sho,
        '을 따내고, 가장 운이 좋은 ',
        coffee.uma_sex_title,
        '가 ',
        toky_yus,
        '를 따내며, 가장 강한 ',
        coffee.uma_sex_title,
        '가 ',
        kiku_sho,
        '을 따낸다.',
      ]);
      await era.printAndWait([
        '오늘 ',
        coffee.get_colored_name(),
        '의 진짜 실력을 시험하게 된다.',
      ]);
      await coffee.say_and_wait([callname, ', 이런 건 처음이에요.']);
      await era.printAndWait([
        '긴 침묵 끝에 ',
        coffee.get_colored_name(),
        '가 말했다.',
      ]);
      await coffee.say_and_wait(
        '레이스 전에…… 친구를 따라잡을 수 있을 것 같은…… 그런 예감은……',
      );
      era.printButton('「뛰어넘고 와!」', 1);
      await era.input();
      await coffee.say_and_wait('……네!');
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 드물게도 환한 미소를 보였다. 결과가 어떻든 이번 일전은 ',
        coffee.get_colored_name(),
        '의 레이스 인생에 전환점이 될 것이다…… 지금 할 수 있는 것은 곁에서 기도하는 것뿐이다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = '결실';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} call_32 マンハッタンカフェがアグネスタキオンを呼ぶときの呼称
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶときの呼称
     * @param {boolean} t_plan_b アグネスタキオンが Plan B に入ったか
     * @param {PrintedSpan} kiku_sho 菊花賞（着色名）
     * @param {PrintedSpan} japa_cup ジャパンカップ（着色名）
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      call_32,
      t_call_c,
      t_plan_b,
      kiku_sho,
      japa_cup,
      arim_kin,
    ) => {
      await you.say_as_passer_by_and_wait('실황', [
        coffee.get_colored_name(),
        '！ ',
        coffee.sex,
        '는 파죽지세로 모두를 제치고 가장 먼저 결승선을 통과했습니다!',
      ]);
      await you.say_as_passer_by_and_wait('관중들', '와아아아아아아아아!!!!');
      await you.say_as_passer_by_and_wait('실황', [
        coffee.sex,
        '의 저 빠른 발놀림…… 아니, 경이로운 질주입니다! 현장의 모두가 눈을 크게 뜨고 있습니다……!',
      ]);
      await era.printAndWait([
        kiku_sho,
        '에서 ',
        coffee.get_colored_name(),
        '는 지금까지 없던 안정적인 걸음으로 결승점에 다다랐다.',
      ]);
      await era.printAndWait(
        '봄, 여름…… 그동안 쌓아 온 노력이 지금 꽃을 피웠다.',
      );
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 드물게도 흥분한 얼굴로 선수 통로를 지나 ',
        you.get_colored_name(),
        '의 곁으로 왔다.',
      ]);
      await coffee.say_and_wait(
        '트레이너……! 친구가……! 아까…… 눈앞에 있었어요……! 레이스에서 이렇게 가까워진 건……!',
      );
      era.printButton('「축하해. 얼굴은 똑똑히 보였어?」', 1);
      await era.input();
      await coffee.say_and_wait(
        '아직요…… 하지만 오늘은 끝까지 달려도…… 조금도 힘들지 않았어요……',
      );
      await coffee.say_and_wait('이게 나…… 지금의 나……');
      await era.printAndWait([
        coffee.sex,
        '의 목소리에는 믿을 수 없다는 기색이 섞여 있었다. ',
        you.get_colored_name(),
        '도 그 말을 듣고, 줄곧 ',
        coffee.get_colored_name(),
        '의 몸을 괴롭히던 괴이한 현상이 사라졌다는 것을 알 수 있었다.',
      ]);
      await coffee.say_and_wait([callname, '…… 다음 목표는요?']);
      await era.printAndWait('흥분이 가라앉으면 다음 목표를 정할 차례다.');
      era.printButton('「……아리마 기념이야.」', 1);
      await era.input();
      await coffee.say_and_wait([
        arim_kin,
        '……그럼 ',
        japa_cup,
        '은 포기하나요?',
      ]);
      await era.printAndWait([
        arim_kin,
        '을 선택한 주된 이유는 ',
        coffee.get_colored_name(),
        '에게 휴식을 주고 싶어서다.',
      ]);
      await era.printAndWait([
        coffee.sex,
        '의 몸 상태는 확실히 좋아졌지만 강도 높은 레이스에는 아직 큰 위험이 따른다.',
      ]);
      await era.printAndWait([
        '게다가 오늘 레이스를 보고 ',
        you.get_colored_name(),
        '은(는) ',
        coffee.get_colored_name(),
        '가 장거리에 적합하다는 것을 알았다. ',
        japa_cup,
        '과 ',
        arim_kin,
        '은 100미터 차이밖에 나지 않는다…… 하지만 언뜻 사소해 보이는 그 100미터가 승부를 가를 수도 있다.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '에게 설명하자 ',
        coffee.sex,
        '는 반박하지 않고 한 걸음 다가와 ',
        you.get_colored_name(),
        '의 손을 잡았다.',
      ]);
      await coffee.say_and_wait([
        '저는…… ',
        callname,
        '을(를) 믿어요. ',
        callname,
        ' 덕분에…… 지금의 성적을 거두고, 친구에게 이렇게 가까워질 수 있었어요……',
      ]);
      if (t_plan_b) {
        await tachyon.say_and_wait([
          '후후후, 하하하! 좋아, 좋군. ',
          t_call_c,
          ', 잘 달렸네!',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이 그제야 관중석에서 느긋하게 내려왔다.',
        ]);
        await tachyon.say_and_wait([
          '완벽히 예상대로야! 역시 내가 고른 플랜 B일세! 그렇지 않나, ',
          t_call_c,
          '！？',
        ]);
        await coffee.say_and_wait([
          call_32,
          '……아직 완전히 신뢰할 수는 없어요…… 하지만 도와주신 것에는…… 감사하고 있어요.',
        ]);
        await era.printAndWait([
          '말을 마친 ',
          coffee.get_colored_name(),
          '는 ',
          you.get_colored_name(),
          '의 손을 잡아끌며 떠나려 했다. 떠나기 직전 ',
          you.get_colored_name(),
          '은(는) 또 한 명의 담당 ',
          coffee.uma_sex_title,
          '——',
          tachyon.get_colored_name(),
          '을 돌아보았다. ',
          coffee.sex,
          '는 언제나처럼 여유로운 미소를 띠고 있었다.',
        ]);
        await era.printAndWait([
          '다만 ',
          you.get_colored_name(),
          '도 ',
          coffee.get_colored_name(),
          '도 알아차리지 못하는 사이 ',
          tachyon.get_colored_name(),
          '은 아주 잠깐 허탈한 기색을 보였다.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = '아리마 기념을 향해';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     */
    const f = async (coffee, you, callname, arim_kin) => {
      await era.printAndWait([arim_kin, '.']);
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 올해 마지막 레이스이자 동시에 ',
        coffee.sex,
        '의 클래식급을 마무리하는 레이스다.',
      ]);
      await era.printAndWait([
        '선수 통로에서 ',
        you.get_colored_name(),
        '은(는) ',
        coffee.get_colored_name(),
        '의 양어깨를 잡고 마지막 당부를 하고 있었다.',
      ]);
      era.printButton('「집중해…… 아드레날린을 남김없이 끌어내……」', 1);
      await era.input();
      await coffee.say_and_wait('……네.');
      await era.printAndWait([
        '눈을 감은 채 ',
        coffee.get_colored_name(),
        '는 작게 대답했다.',
      ]);
      await era.printAndWait('다시 눈을 떴을 때 그 눈동자는 흔들림이 없었다.');
      await coffee.say_and_wait([callname, ', 이길게요.']);
      await era.printAndWait([coffee.sex, '의 뒷모습이 빛 속으로 사라졌다.']);
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_c: (() => {
    const title = '괴이';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} kiku_sho 菊花賞（着色名）
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（着色名）
     */
    const f = async (coffee, you, callname, kiku_sho, arim_kin, tenn_spr) => {
      await you.say_as_passer_by_and_wait('실황', [
        '올해 ',
        arim_kin,
        '을 차지한 주인공은——',
        coffee.get_colored_name(),
        '！',
      ]);
      await you.say_as_passer_by_and_wait('관중들', '와아아아아아아아!!!!');
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 시니어급 상대 앞에서도 높은 수준의 실력을 보여 주며 ',
        arim_kin,
        '을 따냈다. 하지만……',
      ]);
      await coffee.say_and_wait('어째서…… 거리가 벌어졌어……');
      await coffee.say_and_wait([kiku_sho, ' 때보다…… 멀어…… 어째서……']);
      await era.printAndWait([
        '선수 통로에서 이겼어야 할 ',
        coffee.get_colored_name(),
        '가 벽에 기대 침울해져 있었다——아니, 이겼다고 할 수는 없다. ',
        coffee.sex,
        '는 또다시 ',
        coffee.sex,
        '의 친구에게 진 것이다.',
      ]);
      era.printButton('「카페……」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 위로하고 싶었지만 무슨 말을 해야 할지 알 수 없었다.',
      ]);
      await coffee.say_and_wait([
        callname,
        '……친구가…… 빨라졌어요. 전보다 훨씬 더……',
      ]);
      await coffee.say_and_wait(
        '제가 빨라진 것에 답하듯…… 진심으로 달린 것 같았어요……',
      );
      await coffee.say_and_wait('어째서…… 어째서……');
      await coffee.say_and_wait('어째서, 어째서, 어째……!!');
      await era.printAndWait('——파직!');
      await coffee.say_and_wait('윽……!');
      await era.printAndWait([
        '또인가!? ',
        you.get_colored_name(),
        '은(는) 곧바로 다가가 ',
        coffee.get_colored_name(),
        '를 부축했다. 고통과 눈물이 동시에 ',
        coffee.sex,
        '의 얼굴에 넘쳐흘렀다. 쉽게 깨지는 유리처럼, 보고 있기가 괴로웠다.',
      ]);
      await era.printAndWait([
        coffee.sex,
        '의 신발과 양말을 벗기자 익숙한 발톱에 다시 금이 가 있었다. 급격하던 체중 변화는 잦아들었는데, 설마 아직도……',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '를 뒤덮은 그림자는 아직 사라지지 않았다. 저주인 걸까…… 아니면 어떤 존재인 걸까……',
      ]);
      await coffee.say_and_wait('반드시…… 친구를 따라잡겠어요!');
      await coffee.say_and_wait(
        '내년에는 반드시…… 이제 예전의 약한 제가 아니니까요……',
      );
      await coffee.say_and_wait(['……', callname, ', 다음 목표는……?']);
      await era.printAndWait(['우선 진정시켜야 한다——윽!']);
      await era.printAndWait([
        '말을 꺼내기도 전에 ',
        you.get_colored_name(),
        '은(는) 갑자기 명치를 얻어맞은 듯한 충격을 느꼈다. 무언가…… 아주 강한 의지가……',
      ]);
      era.printButton('「…………텐노상 (봄).」', 1);
      await era.input();
      await coffee.say_and_wait([tenn_spr, '……인가요. 3200미터의 장거리……']);
      await coffee.say_and_wait(
        '그러니까…… 거리가 길면 친구를 따라잡을 수 있다는 건가요?',
      );
      era.printButton('「…………그래.」', 1);
      await era.input();
      await era.printAndWait([
        '방향 자체는 문제없다. 다음 목표를 정한다면 봄의 굵직한 G1을 노려야 한다. ',
        tenn_spr,
        '은 봄의 대표 레이스이며 ',
        coffee.get_colored_name(),
        '의 장거리 적성에도 맞는다.',
      ]);
      await era.printAndWait([
        '……하지만 방금 그 말은 정말 ',
        you.get_colored_name(),
        ' 자신의 의지였을까.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = '새해의 포부';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} call_32 マンハッタンカフェがアグネスタキオンを呼ぶときの呼称
     * @param {boolean} t_plan_b アグネスタキオンが Plan B に入ったか
     * @param {PrintedSpan} kiku_sho 菊花賞（着色名）
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（着色名）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      call_32,
      t_plan_b,
      kiku_sho,
      arim_kin,
      tenn_spr,
    ) => {
      await era.printAndWait('시니어 시즌, 연초.');
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 올해 성공을 기원하며 신사에 새해 참배를 하러 왔다.',
      ]);
      if (t_plan_b) {
        await coffee.say_and_wait([
          '저기…… ',
          call_32,
          '는 요즘 어떤가요……? ',
          coffee.sex,
          '가 지난번에 다시 레이스에 복귀하겠다고 말했었는데……',
        ]);
        await era.printAndWait([
          kiku_sho,
          ' 이후, ',
          tachyon.get_colored_name(),
          '은 트레이닝을 재개했다. ',
          arim_kin,
          '이 끝나자, ',
          coffee.sex,
          '는 복귀를 공식 발표했다. 복귀전으로 선택한 레이스는 ',
          coffee.get_colored_name(),
          '도 출전하는 ',
          tenn_spr,
          '이다.',
        ]);
        era.printButton(`「${tachyon.sex}…… 요즘 좀 바쁜 것 같더라.」`, 1);
        await era.input();
        await era.printAndWait([
          coffee.get_colored_name(),
          '는 고개를 끄덕이더니, 더 이상 ',
          tachyon.get_colored_name(),
          '에 관한 이야기는 꺼내지 않았다.',
        ]);
      }
      await coffee.say_and_wait(
        '오늘은 우리…… 둘뿐이네요…… 친구는 왠지 보이지 않아요……',
      );
      await era.printAndWait([
        arim_kin,
        '이후로 ',
        coffee.get_colored_name(),
        '의 모습이 조금 이상해졌다…… 하지만 늘 그런 것은 아니었다.',
      ]);
      await era.printAndWait(['평소의 ', coffee.sex, '는 무척 조용하지만——']);
      await era.printAndWait(
        '스태프 「현장에 계신 여러분, 새해 기도를 합시다! 어떤 소원이든 신님께서 반드시 들어주실 거예요!」',
      );
      await coffee.say_and_wait('……………………');
      await coffee.say_and_wait('거짓말이에요.');
      await coffee.say_and_wait(
        '소원 같은 건 이루어지지 않아요. 이곳에는 신 같은 건 존재하지 않으니까요.',
      );
      await era.printAndWait([
        '——하지만…… 가끔 이렇게 변하곤 한다. 도대체 무엇이 계기가 되어 ',
        coffee.sex,
        '를 변화시킨 걸까?',
      ]);
      await coffee.say_and_wait([
        callname,
        ', 이쪽으로 오세요…… 모든 소원이 이루어지는 마을로 가요……',
      ]);
      era.drawLine();
      await era.printAndWait([
        '잠시 후, ',
        coffee.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '을(를) 데리고 새해 분위기라고는 전혀 느껴지지 않는 기괴한 마을로 향했다……',
      ]);
      await coffee.say_and_wait(
        '여기야말로…… 진정으로 소원을 이룰 수 있는 곳이에요……',
      );
      await coffee.say_and_wait([
        '친구를 쫓아가기 위해서…… ',
        callname,
        '은(는) 저를 위해 어떤 소원을 빌어 주실 건가요?',
      ]);
      await coffee.say_and_wait('이 중에서…… 하나 골라 보세요.');
      await era.printAndWait(
        '지면의 모래가 천천히 움직이더니, 발치에 글자가 떠올랐다.',
      );
      await era.printAndWait([
        '이미 몇 차례 영적 현상을 겪었음에도 불구하고, ',
        you.get_colored_name(),
        '은(는) 몸서리칠 만큼의 공포를 느꼈다.',
      ]);
      await era.printAndWait([
        '그중에서 ',
        you.get_colored_name(),
        '이(가) 선택한 것은——',
      ]);
      era.printButton('「별빛의 치유」 (체력 +500)', 1);
      era.printButton('「전신의 비늘」 (전 능력치 +10)', 2);
      era.printButton('「망자의 예지」 (스킬 포인트 +35)', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await coffee.say_and_wait(
            '치유…… 확실히…… 별은…… 언제나 하늘에서 우리를 지켜보고 있죠……',
          );
          await coffee.say_and_wait('그 가없는 별빛이 온몸을 감싼다면……');
          await coffee.say_and_wait([
            '고마워요, ',
            callname,
            '. 한결 활력이 생기는 기분이에요……',
          ]);
          await coffee.say_and_wait(
            '이제 다시 트레이닝에 전념할 수 있을 것 같아요. 고개를 숙이지 않고…… 앞으로 나아갈게요……',
          );
          await era.printAndWait([
            '아까 그 마을은 환각이었을까……? 눈 깜짝할 사이에 평범한 거리로 돌아와 있었다.',
          ]);
          await era.printAndWait([
            '어찌 됐든, ',
            coffee.get_colored_name(),
            '의 얼굴에는 다시 생기가 돌기 시작했다.',
          ]);
          break;
        case 2:
          await coffee.say_and_wait(
            '전신의 비늘…… 머리카락도…… 망막도…… 영혼도…… 비늘로 뒤덮듯이……',
          );
          await coffee.say_and_wait(
            '저라는 존재를 더 강하게 만들 수 있다면…… 아아……',
          );
          await era.printAndWait('——첨벙.');
          await era.printAndWait(
            '귓가에 환청 같은 물소리가 들렸다. 끝없는 칠흑의 바다에 가라앉은 듯했다.',
          );
          await era.printAndWait([
            '수압이 부드럽게 ',
            you.get_colored_name(),
            '의 온몸을 감쌌다. 무언가 곁을 헤엄쳐 가는 느낌이 들었다——차갑고 잘게 돋은 비늘이 물살과 함께 귀를 스치고, 가늘게 갈라진 혀가 조심스럽게 뻗어 나와 머리카락을 쓰다듬는다……',
          ]);
          await era.printAndWait('…………');
          await era.printAndWait([
            you.get_colored_name(),
            '이(가) 몽롱한 정신을 차리자, 다시 평범한 거리로 돌아와 있었다.',
          ]);
          await era.printAndWait(
            '방금 그것은 꿈이었을까, 아니면 또 다른 괴이였을까.',
          );
          await era.printAndWait([
            '곁에 서 있는 생기 넘치는 ',
            coffee.get_colored_name(),
            '를 보니, 소원이 확실히 효과가 있었던 모양이다……',
          ]);
          break;
        case 3:
          await coffee.say_and_wait('망자의 예지…… 선조들의 기억……');
          await coffee.say_and_wait(
            '그것을 엿볼 수만 있다면…… 비록 극히 일부일지라도……',
          );
          await era.printAndWait([
            '——낯선 기억들이 ',
            coffee.get_colored_name(),
            '의 머릿속으로 흘러 들어왔다.',
          ]);
          await era.printAndWait(
            '실존했는지조차 알 수 없는 풍경들과 고대의 지혜가 한꺼번에 몰아쳤지만, 이내 수면 위의 파문처럼 금방 사라져 버렸다. 결국 기억에 남은 것은 극히 일부에 불과했다.',
          );
          await era.printAndWait('하지만 그 정도만으로도……');
          await coffee.say_and_wait([
            callname,
            ', 세상에 존재하는 수많은 주법들을 이해할 수 있을 것 같아요. 좀 더……',
          ]);
          await coffee.say_and_wait(
            '이 영감들을…… 다음 레이스에서 하나씩 시도해 보고 싶어요……',
          );
          await era.printAndWait([
            you.get_colored_name(),
            '에게는 무슨 일이 일어났는지 알 길이 없었다. 곁에서 본 것은 ',
            coffee.get_colored_name(),
            '가 눈을 감았다 뜨는 짧은 순간 뒤에, 다시 평범한 거리로 돌아와 있었다는 사실뿐이었다.',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_tenn_spr: (() => {
    const title = '텐노상 (봄)을 향해';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_32 マンハッタンカフェがアグネスタキオンを呼ぶときの呼称
     * @param {PrintedSpan} callname_32 アグネスタキオンがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶときの呼称
     * @param {boolean} t_plan_b アグネスタキオンが Plan B に入ったか
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（着色名）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      call_32,
      callname_32,
      t_call_c,
      t_plan_b,
      tenn_spr,
    ) => {
      await era.printAndWait([tenn_spr, '의 레이스 당일.']);
      await coffee.say_and_wait(
        '이길 거예요…… 이길 거예요…… 반드시, 이길 거예요……',
      );
      await coffee.say_and_wait(
        '누구든…… 제 앞을 막아서서 친구에게 다가가는 길을 가로막는다면, 저는……',
      );
      await era.printAndWait([
        coffee.get_colored_name(),
        '에게서는 칠흑의 불꽃이 타오르는 듯했다. ',
        coffee.sex,
        '의 승리에 대한 갈망은 그 어느 때보다 강했다.',
      ]);
      if (t_plan_b) {
        await tachyon.say_and_wait([
          '여어, ',
          t_call_c,
          '과(와) ',
          callname_32,
          '. 표정들이 대단하군.',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '——',
          you.get_colored_name(),
          '의 또 다른 담당이자, 이번 레이스의 출전자이기도 한——이 뒤에서 모습을 드러냈다.',
        ]);
        await coffee.say_and_wait([
          call_32,
          '…… 당신이 출전해도, 저를 막을 수는 없어요……',
        ]);
        await tachyon.say_and_wait([
          '하하, 막는다고? …… 시작하기도 전에 승리를 확신하지 말게, ',
          coffee.get_colored_name(),
          '.',
        ]);
        await era.printAndWait(
          '맞서는 두 사람. 승부는 레이스장에서 가릴 수밖에 없었다.',
        );
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 말없이 ',
          coffee.get_colored_name(),
          '의 유난히 험악한 표정을 바라보았다.',
        ]);
        await era.printAndWait([
          '할 수만 있다면…… 친구를 쫓는 건 그만두라고 말하고 싶었다——물론 그런 말을 꺼낼 수는 없었다. 그것은 ',
          you.get_colored_name(),
          '과(와) ',
          coffee.get_colored_name(),
          '가 계약을 맺을 때 가장 먼저 나눈 약속이었으니까.',
        ]);
        await era.printAndWait([
          '그러니 오늘은…… ',
          coffee.sex,
          '의 무사함을 빌 수밖에 없었다.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  tenn_spr_win: (() => {
    const title = '피안';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} call_32 マンハッタンカフェがアグネスタキオンを呼ぶときの呼称
     * @param {boolean} m_horse 「友達」イベントで「馬」を選んだか
     * @param {boolean} t_plan_b アグネスタキオンが Plan B に入ったか
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（着色名）
     * @param {PrintedSpan} takz_kin 宝塚記念（着色名）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      call_32,
      m_horse,
      t_plan_b,
      tenn_spr,
      takz_kin,
    ) => {
      if (t_plan_b) {
        await era.printAndWait('숨을 삼키게 하는 한판이었다.');
        await era.printAndWait([
          '총거리 3200미터의 ',
          tenn_spr,
          '은 마지막 직선에서 ',
          coffee.get_colored_name(),
          '와 ',
          tachyon.get_colored_name(),
          '이 사투를 벌이는 구도로 마무리되었다.',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 빛의 속도마저 뛰어넘은 듯한 모습, ',
          coffee.get_colored_name(),
          '의 사냥감을 쫓는 듯한 거친 질주. 현장의 모두가 깊은 충격을 받았다.',
        ]);
        await era.printAndWait([
          '——하지만 마지막에는 ',
          coffee.get_colored_name(),
          '가 한발 앞섰다.',
        ]);
        await era.printAndWait([
          coffee.sex,
          '가 결승선을 통과하는 순간, 교토 레이스장의 함성이 하늘을 갈랐다.',
        ]);
        await era.printAndWait('선수 통로.');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 레이스가 끝난 뒤 모습을 보이지 않았다. ',
          coffee.get_colored_name(),
          '는 평소처럼 ',
          you.get_colored_name(),
          '이(가) 오기를 기다리고 있었다.',
        ]);
        await coffee.say_and_wait([
          '하아, 하아, 하아…… 이겼어요, ',
          callname,
          '…… 마지막 직선에서, 온 힘을 다해 ',
          call_32,
          '을(를) 앞질렀어요.',
        ]);
      } else {
        await era.printAndWait('숨을 삼키게 하는 한판이었다.');
        await era.printAndWait([
          '총거리 3200미터의 ',
          tenn_spr,
          '은 마지막 직선에서 앞서 달리는 ',
          coffee.uma_sex_title,
          '를 사냥하듯 덮치는 ',
          coffee.get_colored_name(),
          '의 무시무시한 막판 스퍼트로 마무리되었다. ',
          coffee.sex,
          '가 결승선을 통과하는 순간, 교토 레이스장의 함성이 하늘을 갈랐다.',
        ]);
        await era.printAndWait('선수 통로.');
        await coffee.say_and_wait(['하아, 하아, 하아…… 이겼어요, ', callname]);
      }
      await coffee.say_and_wait(
        '게다가…… 친구와의 거리도…… 조금 더 좁혀졌어요…… 아직, 따라잡지는 못했지만요.',
      );
      await era.printAndWait([
        '레이스가 끝나자, 경기장에서 온 힘을 쏟아낸 ',
        coffee.get_colored_name(),
        '는 평소의 표정으로 돌아와 있었다.',
      ]);
      era.printButton('「완벽한 달리기였어. 축하해.」', 1);
      await era.input();
      await coffee.say_and_wait(
        '고마워요. 하지만 친구를 따라잡기 전에는, 완벽하다고 할 수 없어요……',
      );
      await coffee.say_and_wait([
        callname,
        ', 이제 앞으로 나갈 레이스를 정할 차례네요. 다음 목표는——',
      ]);
      await era.printAndWait([
        '다음 목표…… 보통은 봄의 ',
        takz_kin,
        '을 선택하는 경우가 많다. 하지만 ',
        coffee.get_colored_name(),
        '에게 당분간 휴식을 주는 것도 나쁘지 않겠다……',
      ]);
      await coffee.say_and_wait('——프랑스 원정을 가고 싶어요.');
      await era.printAndWait('！？');
      await era.printAndWait([
        '순간, ',
        you.get_colored_name(),
        '은(는) 자신의 귀를 의심했다. ',
        coffee.get_colored_name(),
        '의 폭탄선언에 머릿속이 산산조각 났다.',
      ]);
      era.printButton('「프랑스!? 개선문상, 개선문상에 나가겠다고!?」', 1);
      await era.input();
      await coffee.say_and_wait(
        '……더 빠르게, 더 강하게. 그러려면 저편으로…… 바다 건너 프랑스로 가야 해요.',
      );
      era.printButton('「………이유는? 또 친구 때문이야?」', 1);
      await era.input();
      await coffee.say_and_wait(
        '네…… 친구가 이제 떠나려고 해요…… 혼자 프랑스로…… 그러니 저는, 반드시……',
      );
      if (m_horse) {
        era.println();
        await era.printAndWait('——아니야.');
        await era.printAndWait([
          '갑자기 ',
          you.get_colored_name(),
          '의 머릿속에 난데없이 어떤 의지가 나타난 듯했다.',
        ]);
        await era.printAndWait([
          '아니라고? 뭐가 아니란 거지. ',
          coffee.get_colored_name(),
          '의 프랑스 원정 계획이 잘못되었다는 걸까…… 아니면 ',
          coffee.sex,
          '를 프랑스로 이끄는 존재가 친구가 아니라는 걸까.',
        ]);
      }
      era.println();
      await coffee.say_and_wait([callname, '…… 이 부탁, 들어 주실 거죠?']);
      await coffee.say_and_wait(
        '친구도 가 주었으면 한다고 말하고 있어요. 그러니까……',
      );
      if (m_horse) {
        era.println();
        await era.printAndWait('——아니야.');
        await era.printAndWait([
          '또다시 그 의지가 ',
          you.get_colored_name(),
          '의 머릿속에 나타났다.',
        ]);
        await era.printAndWait('뭐가 아니라는 거야, 똑바로 말해!');
      }
      era.println();
      await coffee.say_and_wait(
        '친구를 따라잡는 것——그게 우리의 소중한 약속이에요.',
      );
      await coffee.say_and_wait(
        '포기하지 않아요…… 그러기 위해 계약을 맺었으니까요……',
      );
      era.printButton('「…………」', 1);
      await era.input();
      await era.printAndWait([
        '반박할 수 없었다. 그것은 분명 ',
        you.get_colored_name(),
        '과(와) ',
        coffee.get_colored_name(),
        ' 사이에 맺어진 계약의 근간이었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        coffee.get_colored_name(),
        '에게 원정을 포기시키지 못했다. 결국 국내 목표인 ',
        takz_kin,
        '은 그대로 두고, 프랑스 원정 여부는 다음 달 중순에 정하기로 했다.',
      ]);
      if (m_horse) {
        era.println();
        await era.printAndWait([
          '다만 머릿속에 직접 나타났던 그 의지가 다시 떠올랐다.',
        ]);
        await era.printAndWait([
          '……',
          coffee.get_colored_name(),
          '를 프랑스로 이끄는 것은, 대체 무엇일까.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_19: (() => {
    const title = '이별';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶときの呼称
     * @param {boolean} m_horse 「友達」イベントで「馬」を選んだか
     * @param {boolean} t_plan_b アグネスタキオンが Plan B に入ったか
     * @param {PrintedSpan} takz_kin 宝塚記念（着色名）
     * @param {PrintedSpan} prix_lat 凱旋門賞（着色名）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      t_call_c,
      m_horse,
      t_plan_b,
      takz_kin,
      prix_lat,
    ) => {
      await era.printAndWait([
        coffee.get_colored_name(),
        '와 의논한 끝에, 해외 원정——프랑스 G1 레이스인 ',
        prix_lat,
        '에 정식으로 출전하기로 했다.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 오늘 이 공항에서 출발한다. ',
        you.get_colored_name(),
        '도 동행하여, 두 사람은 함께 이 도전에 나선다.',
      ]);
      await coffee.say_and_wait([
        '가요, ',
        callname,
        '. 하늘 저편에서 친구를 따라잡기 위해……',
      ]);
      era.printButton('「……잠깐만.」', 1);
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 고개를 갸웃하며 ',
        you.get_colored_name(),
        '을(를) 바라보았다. 출발 직전에 무슨 말을 하려는지 모르겠다는 눈치였다.',
      ]);
      await you.say_and_wait(
        '프랑스 원정은 보통 일이 아니야. 출발 전에 상황을 한 번 더 정리할 필요가 있어……',
      );
      await you.say_and_wait(
        '해외의 주로는 국내와 완전히 달라. 환경 변화와 장거리 이동도 있고. 몸 상태부터 확인해야 해……',
      );
      await coffee.say_and_wait('이제 와서 그런 생각을 해 봐야…… 저도……');
      era.printButton('말을 끊는다', 1);
      await era.input();
      await you.say_and_wait(
        '마지막으로, 잠시 트레이너라는 입장은 내려놓을게…… 가지 않았으면 해.',
      );
      await coffee.say_and_wait(
        '……왜요? 우리는…… 약속했잖아요…… 함께, 친구를 따라잡을 때까지 나아가기로.',
      );
      await you.say_and_wait('카페…… 나한테는 언제나 네가 가장 중요해……');
      await you.say_and_wait(
        '카페의 꿈을 이룰 수 있다면, 그 꿈과 함께 추락해도 상관없어……',
      );
      await you.say_and_wait(
        '하지만…… 이건 돌이킬 수 없는 도박이야. 한 번 실패하면, 네 선수 생명은…… 끝나.',
      );
      await era.printAndWait(
        '지금까지 쌓아 온 노력이, 마지막에 「끝」이라는 대가로 돌아온다면……',
      );
      await era.printAndWait([
        '꿈을 쫓기 위해 ',
        coffee.get_colored_name(),
        '가 다른 모든 것을 잃어야 한다면……',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 성공과 앞날이, 그 꿈이라는 것보다 더 중요해.',
      ]);
      era.printButton('「그러니까 해외 원정은…… 취소하자.」', 1);
      await era.input();
      await coffee.say_and_wait('…………');
      await coffee.say_and_wait('그런가요…… 그렇다면……');
      if (era.get('love:25') > 75) {
        await coffee.say_and_wait('안녕히 계세요…… 제가 사랑하는 사람……');
      } else {
        await coffee.say_and_wait(['안녕히 계세요…… ', callname, '……']);
      }
      era.println();
      await coffee.say_and_wait(
        '당신만은 다르다고 생각했어요…… 제 꿈을 똑바로 바라봐 주었고…… 제 세계에 들어와 주었으니까……',
      );
      await coffee.say_and_wait('결국…… 저 혼자만의 생각이었나요……');
      era.println();
      await coffee.say_and_wait(
        '괜찮아요…… 아무렇지도 않아요. 이제부터…… 혼자라도……',
      );
      await coffee.say_and_wait(
        '괜찮아요…… 아무렇지도 않아요. 원래대로 돌아갈 뿐이니까……',
      );
      await coffee.say_and_wait('반드시 친구를 따라잡겠어요. 그러니——');
      era.println();
      await coffee.say_and_wait('……안녕히 계세요.');
      era.println();
      await era.printAndWait([
        '매정하게 이별을 고하고, 등을 돌려 떠나려 했다. ',
        coffee.get_colored_name(),
        '는 피가 배어 나오는 듯한 말로 관계를 끊으려 했다——아니, 말뿐만이 아니었다.',
      ]);
      await era.printAndWait([
        '어느새 ',
        coffee.get_colored_name(),
        '의 발가락에서 피가 배어 나오고, 뻗은 손가락에서도 피가 배어 나오고 있었다.',
      ]);
      era.println();
      await coffee.say_and_wait('왜, 움직이지 않는 거죠…… 제…… 발이……');
      await coffee.say_and_wait('……왜? 가야…… 하는데……');
      await coffee.say_and_wait('가지 않으면, 친구가……');
      await coffee.say_and_wait('친구가…… 사라져 버려요……');
      await coffee.say_and_wait('움직일 수 없어도, 저는……!!');
      if (m_horse) {
        era.println();
        await era.printAndWait(['——', coffee.sex, '를 막아.']);
        await era.printAndWait([
          '정체를 알 수 없는 의지가 다시 ',
          you.get_colored_name(),
          '의 머릿속에 나타났다——하지만 말하지 않아도 ',
          you.get_colored_name(),
          '은(는) 그럴 생각이었다……!',
        ]);
      }
      era.println();
      if (t_plan_b) {
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 달려가기 전에, 뜻밖의 인물이 ',
          coffee.get_colored_name(),
          '의 곁에 나타나 떨리는 어깨를 붙잡았다.',
        ]);
        await tachyon.say_and_wait([
          '꼴사납군, ',
          t_call_c,
          '. 그렇게까지 ',
          prix_lat,
          '에 나가고 싶은 건가?',
        ]);
        await coffee.say_and_wait('……！？');
        era.printButton('「타키온!? 여긴 왜 왔어?」', 1);
        await era.input();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 어쩐 일인지 몰래 공항까지 따라와 대화를 지켜보다가 끼어들었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 달려가 ',
          coffee.get_colored_name(),
          '가 무리해서 움직이려는 것을 막았다. 한 팔을 겨드랑이 밑에 넣고 다른 팔로 다리를 받쳐, ',
          coffee.sex,
          '를 가로로 안아 올렸다.',
        ]);
        await tachyon.say_and_wait(
          '『여긴 왜 왔냐』니. 실험 대상의 동향에 신경 쓰는 건 당연하지 않나?',
        );
        await coffee.say_and_wait('……아무것도 모르면서…… 언제나 끼어들기만……');
        await era.printAndWait([
          coffee.get_colored_name(),
          '는 ',
          you.get_colored_name(),
          '의 품 안에서 잠시 저항하다 포기하고, ',
          tachyon.get_colored_name(),
          '에게 겨우 한마디를 짜냈다.',
        ]);
        await tachyon.say_and_wait(
          '그 꼴로 억지로 나가겠다는 건가. 그러니 꼴사납다는 거라네……',
        );
        await tachyon.say_and_wait([
          '정 그렇게 ',
          prix_lat,
          '에 나가고 싶다면——내가 대신 나가 줄까?',
        ]);
        await coffee.say_and_wait('……무슨 말을 하는 거죠?');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 말에 품 안의 ',
          coffee.get_colored_name(),
          '는 충격을 받았다. 그런 이야기는 들은 적이 없었다.',
        ]);
        await tachyon.say_and_wait([
          '과학자는 쓸데없는 짓을 하지 않아. ',
          prix_lat,
          '에 나가는 것도 내 계획 중 하나라네…… 아아, 물론 ',
          takz_kin,
          '에도 나갈 거지만.',
        ]);
        await tachyon.say_and_wait(
          '게다가 자네가 말하는 친구에게도 줄곧 흥미가 있었거든. 내가 대신 따라잡아 주지. 어떤가?',
        );
        await coffee.say_and_wait('왜…… 친구가 동의하고……');
        await coffee.say_and_wait('몸의 이상도…… 조금씩 나아지고……');
        await coffee.say_and_wait('하지만…… 하지만 저는…… 이제, 어떻게 해야……');
        await coffee.say_and_wait('흑, 흐으윽…… 으으……');
        await era.printAndWait([
          '울고 있는 ',
          coffee.get_colored_name(),
          '를 안은 채, 세 사람은 트레센으로 돌아가는 길에 올랐다.',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          '의 해외 원정은 출발 직전에 취소되었고, 다음 목표는 국내의 ',
          takz_kin,
          '으로 돌아왔다.',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 ',
          takz_kin,
          ' 이후, 프랑스의 ',
          prix_lat,
          '에 나선다.',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 달려가 ',
          coffee.get_colored_name(),
          '가 무리해서 움직이려는 것을 막았다. 한 팔을 겨드랑이 밑에 넣고 다른 팔로 다리를 받쳐, ',
          coffee.sex,
          '를 가로로 안아 올렸다.',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          '는 품 안에서 저항하지 않았다. 마치 혼이 빠져나간 것처럼…… 한참이 지나서야 ',
          coffee.sex,
          '는 다시 반응을 보였다.',
        ]);
        await coffee.say_and_wait('아무래도…… 어쩔 수 없네요……');
        await coffee.say_and_wait([
          callname,
          '의 말대로…… 원정은 취소할게요……',
        ]);
        await coffee.say_and_wait('하지만…… 하지만 저는…… 이제, 어떻게 해야……');
        await coffee.say_and_wait('흑, 흐으윽…… 으으……');
        await era.printAndWait([
          '울음을 터뜨린 ',
          coffee.get_colored_name(),
          '를 안은 채, ',
          you.get_colored_name(),
          '은(는) 트레센으로 돌아가는 길에 올랐다.',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          '의 해외 원정은 출발 직전에 취소되었고, 다음 목표는 국내의 ',
          takz_kin,
          '으로 돌아왔다.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_takz_kin_s: (() => {
    const title = '타카라즈카 기념을 향해';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶときの呼称
     * @param {boolean} t_plan_b アグネスタキオンが Plan B に入ったか
     * @param {PrintedSpan} takz_kin 宝塚記念（着色名）
     * @param {PrintedSpan} prix_lat 凱旋門賞（着色名）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      t_call_c,
      t_plan_b,
      takz_kin,
      prix_lat,
    ) => {
      await era.printAndWait([
        '공항에서 있었던 일로 ',
        you.get_colored_name(),
        '과(와) ',
        coffee.get_colored_name(),
        ' 사이에는 잠시 어색한 냉전이 이어졌다. 하지만 속마음을 털어놓고 시간이 흐르면서, 두 사람의 관계는 예전처럼——아니, 그보다 더 깊어졌다.',
      ]);
      await era.printAndWait([
        coffee.sex,
        '는 낙담에서 벗어나 예전보다 자주 웃게 되었다. 그리고——',
      ]);
      await era.printAndWait([takz_kin, ' 출전 전, 선수 통로.']);
      await coffee.say_and_wait([
        takz_kin,
        '…… 여기가…… 저의 새로운 출발점이에요……',
      ]);
      await coffee.say_and_wait('친구가 없어도…… 저는 반드시——');
      await coffee.say_and_wait('——!?');
      era.printButton('「왜 그래?」', 1);
      await era.input();
      await coffee.say_and_wait('친구가! 통로 출구에…… 아직 기다리고 있어요!');
      await era.printAndWait([
        '친구는…… 프랑스로 가서 ',
        prix_lat,
        '에서 ',
        coffee.get_colored_name(),
        '의 도전을 기다리기로 한 것이 아니었나.',
      ]);
      await era.printAndWait([
        '어쨌든 다시 나타난 친구를 보고 ',
        coffee.get_colored_name(),
        '는 기운을 되찾았다. 레이스에서도 좋은 모습을 보여 줄 수 있을 것 같다.',
      ]);
      await coffee.say_and_wait('반드시, 이길 거예요……');
      if (t_plan_b) {
        await tachyon.say_and_wait([
          '그렇게 단정하지는 말게, ',
          t_call_c,
          '.',
        ]);
        await era.printAndWait([
          '준비를 마친 ',
          tachyon.get_colored_name(),
          '이 ',
          coffee.sex,
          '의 하얀 승부복을 입고 선수 통로로 들어왔다.',
        ]);
        await tachyon.say_and_wait([
          takz_kin,
          '에서 자네를 뛰어넘고…… 그다음 ',
          prix_lat,
          '에서 자네 친구를 뛰어넘겠어.',
        ]);
        await coffee.say_and_wait('……할 수 있다면, 해 보세요……!');
        await era.printAndWait([
          '두 사람 사이에 팽팽한 긴장감이 감돈다. 서로 맞선 두 사람은 ',
          takz_kin,
          '에서 마지막 승부를 맞이한다.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  takz_kin_win_s: (() => {
    const title = '대신할 수 있는 것';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} call_32 マンハッタンカフェがアグネスタキオンを呼ぶときの呼称
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶときの呼称
     * @param {boolean} t_plan_b アグネスタキオンが Plan B に入ったか
     * @param {PrintedSpan} takz_kin 宝塚記念（着色名）
     * @param {PrintedSpan} prix_lat 凱旋門賞（着色名）
     * @param {PrintedSpan} japa_cup ジャパンカップ（着色名）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      call_32,
      t_call_c,
      t_plan_b,
      takz_kin,
      prix_lat,
      japa_cup,
    ) => {
      if (t_plan_b) {
        await coffee.say_and_wait([
          '하아, 하아, 하아…… ',
          call_32,
          '…… 강해요…… 조금만 더 가면……',
        ]);
        await coffee.say_and_wait(
          '친구의 어깨에 닿을 것 같았어요…… 그래도 마지막에는, 제가 이겼어요.',
        );
      } else {
        await coffee.say_and_wait(
          '하아, 하아, 하아…… 더 가까이…… 친구에게…… 지금까지 중에서 가장 가까이……',
        );
        await coffee.say_and_wait('어깨에 닿을 것 같았어요……');
      }
      await era.printAndWait([
        '올해 상반기 마지막 큰 무대——',
        takz_kin,
        '은 ',
        coffee.get_colored_name(),
        '의 승리로 막을 내렸다.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 몸 상태는 예전보다 훨씬 좋아져 있었다. 격렬한 승부를 치른 뒤에도, 전력으로 달려 기진맥진해진 몸이 회복되는 데에는 그리 오래 걸리지 않았다.',
      ]);
      era.printButton('「강해졌구나, 카페.」', 1);
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 확실히 강해졌다.',
      ]);
      await era.printAndWait([
        '이 년 반 전, ',
        you.get_colored_name(),
        '과(와) ',
        coffee.get_colored_name(),
        '가 우연히 만났을 무렵, ',
        coffee.sex,
        '는 한밤의 트레이닝장에서 보이지 않는 무언가를 홀로 쫓던 고고한 ',
        coffee.uma_sex_title,
        '였다.',
      ]);
      await era.printAndWait('돌이켜 보면, 참으로 먼 길을 걸어 왔다.');
      await era.printAndWait([
        '해외 원정을 가지는 못했지만, 그래도 ',
        coffee.get_colored_name(),
        '의 꿈만큼은 이어 가고 싶었다.',
      ]);
      await era.printAndWait('해외 원정……');
      await coffee.say_and_wait([callname, ', 다음 목표는……']);
      era.printButton('「재팬컵은 어때?」', 1);
      await era.input();
      await coffee.say_and_wait([
        japa_cup,
        '……',
        prix_lat,
        '과 같은 2400미터 중거리……',
      ]);
      await coffee.say_and_wait([
        '고마워요, ',
        callname,
        '. 그곳이…… 우리의 프랑스군요……',
      ]);
      await era.printAndWait([
        '이루지 못한 꿈을 이어 갈 장소로, 십일월의 도쿄가 두 사람의 파리가 된다.',
      ]);
      if (t_plan_b) {
        await era.printAndWait('그렇다면, 진짜 파리는?');
        await tachyon.say_and_wait(['내가 졌네, ', t_call_c, '.']);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이 선수 통로로 들어와 담담하게 패배를 인정했다.',
        ]);
        await tachyon.say_and_wait(
          '자네 안에 있는 가능성은 내 상상보다 훨씬 크군.',
        );
        await tachyon.say_and_wait(
          '이 정도면…… 플랜 B도 성과가 있었다고 해 두지.',
        );
        await coffee.say_and_wait([call_32, '…… 고마워요……']);
        await tachyon.say_and_wait([
          '그럼, 여기서 작별이군. ',
          prix_lat,
          '…… 내가 달리는 마지막 레이스가 될지도 모르겠어. 자네와 겨루는 건 언제나 즐거웠다네, ',
          t_call_c,
          '.',
        ]);
        await coffee.say_and_wait('……당신의 레이스도, 보러 갈게요.');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 손을 흔들 뿐, ',
          coffee.get_colored_name(),
          '의 말에 직접 답하지 않았다.',
        ]);
        await era.printAndWait([
          '이렇게 ',
          coffee.get_colored_name(),
          '의 다음 출전 레이스는 ',
          japa_cup,
          '으로 정해졌다.',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 ',
          prix_lat,
          '에서 자신의 빛을 마음껏 발할 것이다.',
        ]);
      } else {
        await era.printAndWait([
          '이렇게 다음 출전 레이스는 ',
          japa_cup,
          '으로 정해졌다.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '여름 합숙(시니어) 시작';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} japa_cup ジャパンカップ（着色名）
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     */
    const f = async (coffee, you, japa_cup, arim_kin) => {
      await era.printAndWait('여름 합숙지로 향하는 버스 안.');
      await era.printAndWait([
        '이번 합숙이 끝나면 ',
        coffee.get_colored_name(),
        '를 기다리는 것은 ',
        japa_cup,
        '이다. 십일월은 아직 멀어 보이지만, 방심하면 불리해진다. 출전이 확정되지 않은 ',
        arim_kin,
        '도 있다.',
      ]);
      await era.printAndWait(
        '그러니 이번 합숙의 주된 목표는 충분히 쉬게 하는 것——',
      );
      era.printButton('「——알겠지, 카페? ……카페?」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '의 옆에 앉은 ',
        coffee.get_colored_name(),
        '는 어느새 어깨에 머리를 기대고 조용히 잠들어 있었다. 버스가 흔들릴 때마다 몸이 살짝살짝 흔들렸다.',
      ]);
      await era.printAndWait([
        '자세를 조금 고쳐 앉아 ',
        coffee.sex,
        '가 편하게 잘 수 있도록 했다.',
      ]);
      await coffee.say_and_wait('………………으음……');
      await era.printAndWait('잠든 얼굴이 참 귀엽다.');
      await era.printAndWait([
        you.get_colored_name(),
        '에게도 졸음이 몰려와, ',
        coffee.get_colored_name(),
        '와 서로 기대어 잠들었다……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '여름 합숙(시니어) 종료';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} m_horse 「友達」イベントで「馬」を選んだか
     * @param {PrintedSpan} japa_cup ジャパンカップ（着色名）
     */
    const f = async (coffee, you, m_horse, japa_cup) => {
      await era.printAndWait('두 달간의 여름 합숙이 끝났다.');
      await era.printAndWait([
        '이번 여름에는 특별한 일이 없었다. ',
        you.get_colored_name(),
        '과(와) ',
        coffee.get_colored_name(),
        '는 매일 해변에서 트레이닝을 했고, ',
        coffee.get_colored_name(),
        '의 몸 상태는 충분히 좋아졌다.',
      ]);
      await coffee.say_and_wait('잔잔한 합숙…… 이런 것도 나쁘지 않네요……');
      await era.printAndWait([
        '트레센으로 돌아가는 버스 안에서 ',
        coffee.get_colored_name(),
        '는 창밖으로 흘러가는 풍경을 보며 그렇게 중얼거렸다.',
      ]);
      era.printButton('「잔잔한 일상도 나쁘지 않지……」', 1);
      await era.input();
      await era.printAndWait([
        '하지만 ',
        coffee.uma_sex_title,
        '의 삶이 계속 잔잔할 수만은 없다. 트레센으로 돌아가면 긴장감 넘치는 ',
        japa_cup,
        ' 준비가 시작된다.',
      ]);
      if (m_horse) {
        era.println();
        await era.printAndWait([
          '무거운 분위기가 ',
          you.get_colored_name(),
          '과(와) ',
          coffee.get_colored_name(),
          ' 두 사람을 감싼다. 이세계 경주마의 영혼, 신비로운 친구. 여러 요소가 ',
          coffee.get_colored_name(),
          '에게 얽혀 ',
          coffee.sex,
          '를 혼란스럽게 만든다.',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          '의 목표——친구를 따라잡는 것은, 정말로 ',
          coffee.sex,
          ' 자신의 바람일까.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_japa_cup_s: (() => {
    const title = '재팬컵을 향해';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} call_32 マンハッタンカフェがアグネスタキオンを呼ぶときの呼称
     * @param {boolean} t_plan_b アグネスタキオンが Plan B に入ったか
     * @param {PrintedSpan} prix_lat 凱旋門賞（着色名）
     * @param {PrintedSpan} japa_cup ジャパンカップ（着色名）
     */
    const f = async (
      coffee,
      you,
      callname,
      call_32,
      t_plan_b,
      prix_lat,
      japa_cup,
    ) => {
      await era.printAndWait([japa_cup, ' 당일, 선수 통로.']);
      await era.printAndWait([
        '우연히 만나 인연을 맺은 두 사람은 마침내 여기까지 왔다.',
      ]);
      await coffee.say_and_wait('…………');
      await era.printAndWait([
        you.get_colored_name(),
        '과(와) 나란히 걷던 ',
        coffee.get_colored_name(),
        '가 갑자기 걸음을 멈추었다. 돌아본 ',
        you.get_colored_name(),
        '과(와) 눈이 마주쳤다.',
      ]);
      era.printButton('「긴장돼?」', 1);
      await era.input();
      await coffee.say_and_wait('……긴장한 건 아니에요. 다만……');
      if (t_plan_b) {
        await coffee.say_and_wait([
          call_32,
          '의 ',
          prix_lat,
          '을 보고 생각했어요…… 오늘 저는 ',
          coffee.sex,
          '처럼 멋진 레이스를 펼칠 수 있을까요.',
        ]);
      } else {
        await coffee.say_and_wait(
          '오늘 저는…… 멋진 레이스를 펼칠 수 있을까요.',
        );
      }
      await era.printAndWait([
        '예전에는 친구를 뛰어넘는 것만 생각하며 다른 모든 것에는 관심을 두지 않던 ',
        coffee.get_colored_name(),
        '가 여러 일을 겪으며 달라져 있었다.',
      ]);
      era.printButton(
        '「가 봐. 네 자랑인 막판 스퍼트를 전 세계에 보여 주고 와.」',
        1,
      );
      await era.input();
      if (era.get('love:25') >= 75) {
        await coffee.say_and_wait([callname, '…… 입 맞춰도 될까요?']);
        await era.printAndWait([
          coffee.get_colored_name(),
          '의 이마에 흘러내린 긴 머리카락을 살며시 걷어 주며 고개를 조금 숙였다. ',
          coffee.get_colored_name(),
          '는 그에 맞춰 발돋움하여 ',
          you.get_colored_name(),
          '의 입술에 입을 맞췄다.',
        ]);
        await era.printAndWait([
          '상점가 골목에서 있었던 그날처럼, ',
          coffee.get_colored_name(),
          '의 두 손이 자연스럽게 ',
          you.get_colored_name(),
          '의 목 뒤를 감쌌고, 겹친 입술 안쪽에서 서로의 마음을 나누었다.',
        ]);
        await era.printAndWait([
          '한참 뒤에야 떨어진 두 사람은 마주 보며 웃고는 ',
          japa_cup,
          '의 레이스장으로 달려갔다.',
        ]);
      } else {
        await coffee.say_and_wait([callname, '…… 안아 주실래요?']);
        await era.printAndWait([
          '두 팔을 벌리자, ',
          coffee.get_colored_name(),
          '가 한 걸음 다가와 ',
          you.get_colored_name(),
          '을(를) 안았다. 두 사람은 다른 행동 없이 그저 조용히 서로의 온기를 느꼈다.',
        ]);
        await era.printAndWait([
          '한참 뒤 손을 놓은 두 사람은 ',
          japa_cup,
          '의 레이스장으로 달려갔다.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  japa_cup_win_s: (() => {
    const title = '승부';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} japa_cup ジャパンカップ（着色名）
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     */
    const f = async (coffee, you, callname, japa_cup, arim_kin) => {
      await era.printAndWait([
        '전 세계에서 ',
        japa_cup,
        '을 지켜본 관객들은 이날을 기억할 것이다.',
      ]);
      await era.printAndWait([
        '마지막 직선, 칠흑의 그림자가 대열 후방에서 덮쳐 왔다. 등을 물어뜯듯 압도적인 힘과 폭발력으로 앞서 달리던 「사냥감」들을 모조리 집어삼켰다. 추월당한 ',
        coffee.uma_sex_title,
        '는 공포에 순간 속도가 떨어졌을 정도였다.',
      ]);
      await era.printAndWait([
        coffee.sex,
        '가 결승선을 통과하는 순간, 고속 카메라에 포착된 흐릿한 모습 때문에 훗날 「칠흑의 그림자」라는 칭호가 붙었다.',
      ]);
      await era.printAndWait('하지만 그것은 나중의 이야기다.');
      await era.printAndWait([
        '지금 선수 대기실에서는 ',
        japa_cup,
        '의 우승자 ',
        coffee.get_colored_name(),
        '가 ',
        you.get_colored_name(),
        '에게 붙들려 마사지를 받고 있다.',
      ]);
      era.printButton('「오늘 너무 무리했어. 다치면 어쩌려고 그래.」', 1);
      await era.input();
      await era.printAndWait([
        '아직 친구는 따라잡지 못했다. 하지만 ',
        coffee.get_colored_name(),
        '는 전 세계에 당당히 내세울 만한 달리기를 보여 주었다. 그 대가로 경기장을 나와 ',
        you.get_colored_name(),
        '을(를) 만나는 순간 더는 버티지 못하고 품에 쓰러졌지만.',
      ]);
      await era.printAndWait([
        '다행히 다친 곳은 없었고, 체력을 모두 소진하여 근육에 힘이 풀렸을 뿐이었다. ',
        you.get_colored_name(),
        '은(는) 그 자리에서 ',
        coffee.sex,
        '의 근육을 풀어 주기 시작했다.',
      ]);
      await coffee.say_and_wait([
        '앗, 아파요……! ',
        callname,
        ', 조금만 살살……',
      ]);
      await coffee.say_and_wait(
        '관중석의 환호가 느껴져서…… 다리를 멈출 수 없었을 뿐이에요……',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '도 진심으로 나무랄 생각은 없었다. 마사지를 하며 잔소리를 늘어놓은 뒤, 오늘 ',
        coffee.get_colored_name(),
        '가 무리한 일을 더는 나무라지 않았다.',
      ]);
      await coffee.say_and_wait([
        callname,
        '…… 다음 목표는 ',
        arim_kin,
        '이네요.',
      ]);
      await era.printAndWait([
        '마사지가 끝나고 ',
        you.get_colored_name(),
        '과(와) ',
        coffee.get_colored_name(),
        '가 짐을 챙겨 트레센으로 돌아가려 할 때, ',
        coffee.sex,
        '는 한 달 뒤 연말의 큰 무대——',
        arim_kin,
        '에 관한 이야기를 꺼냈다.',
      ]);
      await era.printAndWait([
        '생각해 보면 ',
        coffee.get_colored_name(),
        '와 함께 걸어온 지도 곧 삼 년이다. 즐거운 일도, 다툰 일도 있었고, 괴이 때문에 위험에 빠진 적도 있었다. 하지만 ',
        you.get_colored_name(),
        '은(는) ',
        coffee.sex,
        '와 계약한 것을 단 한 번도 후회하지 않았다.',
      ]);
      await era.printAndWait([
        '이번 마지막 ',
        arim_kin,
        '에서 삼 년간의 성과를 확인하자.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_s: (() => {
    const title = '아리마 기념을 향해';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     */
    const f = async (coffee, you, callname, arim_kin) => {
      era.printButton('「……이게 마지막이야.」', 1);
      await era.input();
      await coffee.say_and_wait('……네. 시간이 참 빨리 흘렀네요……');
      await era.printAndWait([
        '선수 통로에서 ',
        you.get_colored_name(),
        '은(는) ',
        coffee.get_colored_name(),
        '와 ',
        arim_kin,
        ' 출전 전 마지막 대화를 나누고 있었다.',
      ]);
      await coffee.say_and_wait([callname, ', 잠깐만 부탁할게요……']);
      await era.printAndWait([
        '그렇게 말하며 ',
        coffee.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '의 손을 잡아 자신의 가슴에 가져다 댔다.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 힘찬 심장 박동이 부드러운 감촉 너머로 손바닥에 전해졌다. 이 순간 ',
        you.get_colored_name(),
        '은(는) 분명히 느꼈다. ',
        coffee.get_colored_name(),
        '라는 존재가 얼마나 생생하게 살아 있고, 얼마나 아름다운지를.',
      ]);
      await coffee.say_and_wait('……따뜻해요…… 조금 안심이 됐어요……');
      await coffee.say_and_wait([
        '이번 ',
        arim_kin,
        '이 끝나도…… 계속 함께 있어 주세요, ',
        callname,
        '……',
      ]);
      era.printButton('「떠나지 않을게.」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '의 대답을 듣고 ',
        coffee.get_colored_name(),
        '는 손을 놓았다. 미소를 지으며 선수 통로를 나섰다.',
      ]);
      await era.printAndWait([
        '삼 년 동안 ',
        you.get_colored_name(),
        '과(와) 쌓아 온 작은 추억들을 가슴에 품고, ',
        coffee.get_colored_name(),
        '는 마지막 게이트를 향해 걸어갔다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s: (() => {
    const title = '마천루';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, you, callname) => {
      await you.say_as_passer_by_and_wait('해설', [
        coffee.get_colored_name(),
        '! ',
        coffee.get_colored_name(),
        '입니다——! 결승선을 통과하고도 ',
        coffee.sex,
        '는 지평선 너머를 바라보고 있습니다!!',
      ]);
      await you.say_as_passer_by_and_wait('해설', [
        coffee.sex,
        '의 최종 목적지는 어디일까요!? 어디까지 성장할 것인가요!?',
      ]);
      await era.printAndWait([
        '레이스가 끝났는데도 ',
        coffee.get_colored_name(),
        '는 곧바로 자리를 뜨지 않고 서서 코스 너머를 바라보고 있었다.',
      ]);
      await era.printAndWait([
        '무슨 문제가 생겼나 걱정되어 ',
        you.get_colored_name(),
        '은(는) 앞으로 다가갔다.',
      ]);
      era.printButton('「저기…… 카페?」', 1);
      await era.input();
      await coffee.say_and_wait(['…………', callname, ', 이제 알겠어요……']);
      await coffee.say_and_wait(
        '당신 때문이에요…… 그래서 친구가 가 버린 거예요……',
      );
      await era.printAndWait('뭐……?');
      await era.printAndWait([
        you.get_colored_name(),
        ' 때문에 친구가 달아났다는 말인가.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 사과하려던 순간——',
      ]);
      await coffee.say_and_wait('그런 뜻이 아니에요.');
      await coffee.say_and_wait(
        '제가 말하고 싶은 건…… 당신 때문에…… 친구가 이제 따라잡을 수 없을 만큼 빨라졌다는 거예요.',
      );
      await coffee.say_and_wait('그래요…… 친구는 계속 진화하고 있어요……');
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '의 얼굴을 보며 진지한 표정으로 말했다.',
      ]);
      await coffee.say_and_wait(
        '친구는 제 이상과 함께 높아지고, 더 빨라져요……',
      );
      await coffee.say_and_wait(
        '제가 강해지면…… 친구는 더 멀리서 손을 흔들며 『아직 더 빨라질 수 있잖아』라고 말해요.',
      );
      await coffee.say_and_wait(
        '저 혼자였다면, 진작 따라잡았을지도 몰라요. 따라잡고 나면…… 꿈도 거기서 멈췄겠죠. 하지만……',
      );
      await coffee.say_and_wait(
        '지금의 저는 아직…… 위를 올려다보고 있어요. 꼭대기가 보이지 않는 마천루를……',
      );
      await coffee.say_and_wait(
        '당신이…… 친구를 북돋워 주었어요. 당신이…… 저를 북돋워 주었어요.',
      );
      await coffee.say_and_wait(
        '혼자서는 절대 닿을 수 없는…… 높이까지, 데려와 주었어요……',
      );
      await era.printAndWait([
        '친구란 무엇일까. 마침내 답의 실마리가 보이는 것 같았다.',
      ]);
      await era.printAndWait('친구는 선도 악도 아니다. 왜냐하면——');
      await coffee.say_and_wait('앞으로도 더 빨라지겠죠…… 친구는……');
      await coffee.say_and_wait('그러면 우리도 계속 친구를 쫓아갈 수 있어요……');
      await coffee.say_and_wait(
        '친구는 이제 저 혼자만의 친구가 아니에요…… 두 사람의 의지를 담은 존재가 되었어요…… 레이스 전에 약속한 대로, 당신과 함께 세상 끝까지 쫓아가고 싶어요.',
      );
      era.printButton('「그래…… 세상 끝까지.」', 1);
      await era.input();
      await era.printAndWait([
        '앞으로도 ',
        you.get_colored_name(),
        '은(는) 여느 때처럼 ',
        coffee.get_colored_name(),
        '와 함께 친구의 뒷모습을 쫓으며 나아가겠지.',
      ]);
      await era.printAndWait([
        '두 사람은 나란히 하늘을 우러러보며, 이 목표가 얼마나 소중하고 끝없는 것인지 조용히 되새겼다……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_143_1: (() => {
    const title = '고요의 계승자';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, you, callname) => {
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 트윙클 시리즈 첫 삼 년 동안 큰 성공을 거두었다.',
      ]);
      await era.printAndWait([
        '눈앞에 늘어선 트로피들은 고층 건물이 빼곡한 도시를 닮았다. 하지만 ',
        coffee.sex,
        '의 활약은 거기서 멈추지 않았다——',
      ]);
      await coffee.say_and_wait(
        '오늘도…… 손님이 많네요…… 그럼…… 상담하고 싶은 일이란……?',
      );
      await era.printAndWait([
        '어느새 레이스에서 보여 준 모습 덕분에…… ',
        coffee.get_colored_name(),
        '는 수많은 ',
        coffee.uma_sex_title,
        '에게 존경받는 존재가 되어 있었다.',
      ]);
      await you.say_as_passer_by_and_wait(
        `${coffee.uma_sex_title} A`,
        '저기~ 카페 씨…… 더트에서 잘 달리는 방법을 알려 주세요. 늘 잘 안 돼서요……',
      );
      await coffee.say_and_wait('더트…… 그렇군요……');
      await coffee.say_and_wait('너무 힘을 주지 않는 편이 좋을 것 같아요.');
      await coffee.say_and_wait('모래 속에서…… 추를 흔들듯이……');
      await you.say_as_passer_by_and_wait(
        `${coffee.uma_sex_title} B`,
        '다음은 저요! 이번에는 도주에 도전해 보려고 하는데, 요령이 있을까요!?',
      );
      await coffee.say_and_wait('도주…… 별로 자신 있는 분야는 아니지만……');
      await coffee.say_and_wait(
        '가장 중요한 건…… 마음가짐이에요…… 무게중심을 어디에 둘지…… 달리는 방식은 마음이 드러난 것일 뿐이니까요……',
      );
      await coffee.say_and_wait('조금은…… 도움이 되었나요?');
      await you.say_as_passer_by_and_wait(
        `${coffee.uma_sex_title}들`,
        '네! 감사합니다!!',
      );
      await coffee.say_and_wait('그럼…… 커피 한 잔 마시고 갈래요?');
      await you.say_as_passer_by_and_wait(
        `${coffee.uma_sex_title}들`,
        '……잘 마시겠습니다!',
      );
      await era.printAndWait([
        '수많은 ',
        coffee.uma_sex_title,
        '의 질문에 ',
        coffee.get_colored_name(),
        '는 누구에게나 영감을 주는 조언을 해 주었고, 그것은 실제로 ',
        coffee.couple_title,
        '에게 도움이 되었다.',
      ]);
      await era.printAndWait([
        '트레이너인 ',
        you.get_colored_name(),
        '조차 자신은 그만한 조언을 해 줄 수 없겠다고 느낄 정도였다.',
      ]);
      era.drawLine();
      await coffee.say_and_wait([
        '하아, 하아…… ',
        callname,
        '…… 한 번 더 달리는 모습을 봐 주실래요?',
      ]);
      await coffee.say_and_wait(
        '오늘은 새로운 달리기를 시험해 보고 싶어요. 누군가에게 참고가…… 된다면……',
      );
      era.printButton('「후배들을 위해서야?」', 1);
      await era.input();
      await coffee.say_and_wait(
        '네…… 요즘 자주 생각해요. 앞서 달리는 친구를 따라잡는 것도 중요하지만……',
      );
      await coffee.say_and_wait([
        '그와 동시에…… 뒤에서 저를 쫓아오는 ',
        coffee.uma_sex_title,
        '들을 도와주는 것도 중요하다고요.',
      ]);
      await coffee.say_and_wait(
        '저는…… 친구만큼 빠르지는 않아요…… 그래도 조용히 힘이 되어 주고 싶어요……',
      );
      await coffee.say_and_wait([
        '조용히 두 팔을 벌려서…… 언젠가 모든 ',
        coffee.uma_sex_title,
        '에게 도움이 될 수 있도록……',
      ]);
      await era.printAndWait('——쌩.');
      await era.printAndWait([
        '갑자기 ',
        you.get_colored_name(),
        '의 눈앞으로 무언가가 빠르게 스쳐 지나갔다. 본 적도 없는 존재인데 머릿속에 「친구」라는 말이 떠올랐다.',
      ]);
      era.printButton('「……카페, 친구는 지금 어디 있어?」', 1);
      await era.input();
      await coffee.say_and_wait('친구라면 저기에…… 어? 없어졌어요……');
      await era.printAndWait('——쌩.');
      era.printButton(`「카페, 너는…… ${coffee.uma_sex_title}의……」`, 1);
      await era.input();
      await era.printAndWait([
        '들린 것 같았다…… 「종족」의 목소리가. ',
        coffee.uma_sex_title,
        ' 종족의 목소리가 귓가에서 계속 맴돈다……',
      ]);
      await era.printAndWait([
        '그래, ',
        coffee.sex,
        '——',
        coffee.get_colored_name(),
        '야말로——',
      ]);
      era.drawLine();
      await era.printAndWait([
        '어떤 ',
        coffee.uma_sex_title,
        '에 관한 우화가 있다.',
      ]);
      await era.printAndWait([
        '그 ',
        coffee.uma_sex_title,
        '는 궁극에 가까운 속도를 지녔으며, ',
        coffee.get_colored_name(),
        '와 무척 닮았다고 한다.',
      ]);
      await era.printAndWait([
        '어쩌면 ',
        coffee.get_colored_name(),
        '는…… 줄곧 꿈속에 있었는지도 모른다.',
      ]);
      await era.printAndWait([
        '궁극의 ',
        coffee.uma_sex_title,
        '가 눈앞에 나타나 ',
        coffee.get_colored_name(),
        '에게 「',
        coffee.sex,
        '가 되어라, 그리고 뛰어넘어라」라고 기대하는, 그런 꿈……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  scared: (() => {
    const title = '어둠 속';
    /**
     * @author Mr.E.
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, you, callname) => {
      await era.printAndWait([
        '깊은 밤, 어둠에 잠긴 학원에서 울음소리가 들려온다. 아이일까.',
      ]);
      era.println();
      era.printButton('어서 기숙사로 돌아가자……', 1);
      era.printButton('빨리 가 봐야겠다. 별일 아니어야 할 텐데……', 2);
      const ret = await era.input();
      if (ret === 1) {
        era.println();
        for (let i = 0; i < 5; ++i) {
          await era.delay(500);
          era.replaceText('…'.repeat(i + 1));
        }
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 다시 출구를 찾았지만, 사방이 캄캄하여 도무지 나갈 수가 없었다.',
        ]);
        era.println();
        const random_colors = Object.values(chara_colors).map((e) =>
          Array.isArray(e) ? e[0] : e,
        );
        const buffer = [];
        buffer.push({ content: '???', fontWeight: 'bold' }, '「');
        const content = '싫어, 싫어';
        for (let i = 0; i < content.length; ++i) {
          buffer.push({
            content: content[i],
            color: get_random_entry(random_colors),
          });
        }
        buffer.push('요, 당신이!」');
        await era.printAndWait(buffer);
        era.println();
        await you.say_and_wait(['앗!']);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 벌떡 일어나 주위를 둘러보았다.',
        ]);
        era.println();
        await you.say_and_wait(['꿈인가……?']);
        era.println();
        await era.printAndWait([
          coffee.get_colored_name(),
          '의 무릎에 머리를 기대고 있었다. ',
          coffee.get_colored_name(),
          '는 ',
          you.get_colored_name(),
          '을(를) 마사지하고 있었다.',
        ]);
        era.println();
        await coffee.say_and_wait([
          '괜찮아요, ',
          callname,
          '. 이제 끝났어요. 그 아이는 조금 외로울 뿐이에요.',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '을(를) 깨우지 않으려는 듯, ',
          coffee.get_colored_name(),
          '의 목소리는 평소보다 부드럽고 낮았다.',
        ]);
        era.println();
        await coffee.say_and_wait([
          '이제 이런 일은 무서워하지 않아도 돼요. 계속 곁에 있을 테니까요.',
        ]);
      } else {
        await era.printAndWait([
          '어째서인지 아이를 찾겠다고 마음먹는 순간, ',
          you.get_colored_name(),
          '의 발걸음은 점점 빨라졌고 불이 켜진 기숙사 문이 가까워졌다. 머릿속의 울음소리는 오히려 작아져 갔다.',
        ]);
        era.println();
        await you.say_and_wait(['하루 종일 피곤했네. 어서 쉬자.']);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 그렇게 생각하며 기숙사 문을 열었다.',
        ]);
        era.println();
        await you.say_and_wait(['뭔가 잊은 건 없을까?']);
        era.println();
        await era.printAndWait([
          '그 의문을 품은 채, ',
          you.get_colored_name(),
          '은(는) 깊이 잠들었다.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  palace: (() => {
    const title = '낙원';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, you, callname) => {
      await coffee.print_and_wait([
        '만화경처럼 찬란한 빛을 내는 하늘과 대지, 꿈결처럼 금빛 광택을 머금은 거대한 톱니바퀴……',
      ]);
      await coffee.print_and_wait('여기는…… 꿈속일까요.');
      era.println();
      await coffee.print_and_wait([
        coffee.get_colored_name(),
        '는 주위를 둘러보았다. 눈앞의 풍경은 ',
        coffee.sex,
        '에게 낯설지 않았다.',
      ]);
      era.println();
      await coffee.print_and_wait([
        '수없이 많은 밤 동안 ',
        coffee.sex,
        '는 이 몽환의 세계를 걸었다. 무지개로 뛰어드는 날아다니는 고래를 보았고, 보석 같은 날개를 가진 거대한 용을 보았다. 밤낮으로 쫓으며 「친구」라고 부르는 존재도 보았다.',
      ]);
      await coffee.print_and_wait([
        '그렇다면 오늘 ',
        coffee.sex,
        '는 무엇을 보게 될까.',
      ]);
      era.println();
      await coffee.print_and_wait(
        '하나의 그림자가 물결처럼 눈앞에 떠올랐다. 길고 검은 머리, 하얀 유성 같은 바보털, 낯익은 승부복……',
      );
      era.println();
      await coffee.say_and_wait(['당신은……']);
      era.println();
      await coffee.print_and_wait([
        '질문을 듣고 방문자가 돌아보자, ',
        coffee.get_colored_name(),
        '의 눈에 들어온 것은 거울을 보듯 자신과 꼭 닮은 ',
        coffee.uma_sex_title,
        '였다.',
      ]);
      era.println();
      await coffee.print_and_wait('——친구.');
      await coffee.print_and_wait([
        '가장 먼저 ',
        coffee.get_colored_name(),
        '의 머릿속에 떠오른 말이었다.',
      ]);
      era.println();
      await coffee.print_and_wait([
        '——하지만 ',
        coffee.sex,
        '는 친구가 아니다.',
      ]);
      await coffee.print_and_wait([
        coffee.get_colored_name(),
        '는 확신했다. 상대는 친구도 괴이도 아닌, 자신과 똑같이 살아 있는 존재였다. 자신의 꿈에 나타난 사람이었다.',
      ]);
      era.println();
      await coffee.print_and_wait(
        '또 다른 카페 「……자신과 같은 존재를 보고도 놀라지 않나요?」',
      );
      era.println();
      await coffee.print_and_wait(['——목소리까지 자신과 똑같았다.']);
      era.println();
      await coffee.say_and_wait([
        '……여기서 저와 닮은 사람을 본 적은 있어요. 당신은요?',
      ]);
      era.println();
      await coffee.print_and_wait(
        '또 다른 카페 「직업이 직업인지라, 거울에는 익숙해요…… 여기에는 당신 혼자뿐인가요?」',
      );
      era.println();
      await coffee.say_and_wait([
        '……저 말고도 가끔 친구가 있어요. 하지만 다른 사람을 보는 건 처음이에요…… 잠깐 이야기할래요? 이렇게 만난 것도 인연이니까요……',
      ]);
      era.println();
      await coffee.print_and_wait([
        '또 다른 카페 「인연인가요…… 우리 ',
        coffee.uma_sex_title,
        '에게 어울리는 말이네요. 우리 ',
        coffee.uma_sex_title,
        '는 운명의 인도를 받는 존재니까요.」',
      ]);
      era.println();
      await coffee.print_and_wait([
        '——뭐라고 해야 할까…… 얼굴은 꼭 닮았는데, 성격은 미묘하게 달랐다.',
      ]);
      era.println();
      await coffee.print_and_wait(
        '또 다른 카페 「……운명은 성가셔요…… 제멋대로 우리를 얽매죠.」',
      );
      era.println();
      await coffee.say_and_wait(
        '……네. 돌이켜 보면 저도 줄곧 얽매여 있었는지도 몰라요…… 친구를 따라잡고 뛰어넘는 것. 그것도 운명의 인도였을지도 모르겠네요.',
      );
      era.println();
      await coffee.print_and_wait(
        '또 다른 카페 「당신의 목표는 따라잡을 수 없는 친구를 뛰어넘는 건가요?」',
      );
      era.println();
      await coffee.say_and_wait(['……이상하죠……']);
      era.println();
      await coffee.print_and_wait(
        '또 다른 카페 「아니요, 우리는 닮았어요…… 저는 『낙원』을 찾고 있어요. 닿을 수 없는 낙토를…… 너무 멀어서 방향은 알아도 시선조차 닿지 않아요……」',
      );
      era.println();
      await coffee.say_and_wait(
        '네, 저도…… 친구는 저를 행복으로 이끌어 주는 사람이에요. 예전의 저는 그래서 따라잡고 싶었어요…… 하지만 쫓을수록 친구는 더 빨라져서……',
      );
      era.println();
      await coffee.print_and_wait(
        '또 다른 카페 「예전의 당신이라면…… 지금은 이미 따라잡은 건가요?」',
      );
      era.println();
      await coffee.say_and_wait('아니요…… 이제는 이끌어 줄 필요가 없어요……');
      era.println();
      await coffee.print_and_wait([
        '꿈속의 빛이 조금씩 어두워진다. 꿈에서 깨어나는 걸까.',
      ]);
      era.println();
      await coffee.print_and_wait([
        '또 다른 카페 「……이제 작별할 때인가 봐요. 안녕히 계세요, 이쪽의 ',
        coffee.get_colored_name(),
        ' ',
        coffee.adult_sex_title,
        '.」',
      ]);
      era.println();
      await coffee.say_and_wait([
        '당신도 건강히 지내세요. 저쪽의 ',
        coffee.get_colored_name(),
        ' ',
        coffee.adult_sex_title,
        '……',
      ]);
      era.drawLine();
      era.printButton('깼어, 카페? 꿈을 꾼 것 같은데?', 1);
      await era.input();
      era.println();
      await coffee.print_and_wait([
        '다시 눈을 뜨자 ',
        coffee.get_colored_name(),
        '의 눈앞에는 가장 익숙한 얼굴이 있었다…… 늘 곁에 있어 주는, 행복을 상징하는 얼굴이었다.',
      ]);
      await coffee.print_and_wait([
        '——맞아요…… ',
        callname,
        '의 밤샘에 함께하다가 지쳐 잠든 것이었다.',
      ]);
      era.println();
      await coffee.say_and_wait([
        '네…… 재미있는 꿈이었어요…… 시간이 나면 ',
        callname,
        '에게 이야기해 드릴게요……',
      ]);
      era.println();
      await coffee.print_and_wait(
        '——낙원은 찾지 않을 거예요. 왜냐하면…… 저는 이미 가장 행복한 곳에 있으니까요.',
      );
    };
    f.title = title;
    return f;
  })(),
  be_crazy_fan: (() => {
    const title = '비와 커피';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (coffee, you) => {
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 발톱 염증은 끝내 완치되지 않았고, 트레이닝 중 일어난 사고 이후 학원 측은 ',
        coffee.get_colored_name(),
        '의 건강을 이유로 은퇴를 결정했다…… 하지만 어떤 이들은 그렇게 생각하지 않았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        coffee.get_colored_name(),
        '에게 줄 커피 원두를 들고 폭우가 쏟아지는 길을 혼자 걷고 있었다. 뒤에서 다급한 발소리가 들리더니, 이내 허리를 도려내는 듯한 통증이 밀려왔다. ',
        you.get_colored_name(),
        '은(는) 바닥에 쓰러졌고, 뒤에 있던 사람은 움직임이 멎을 때까지 등을 찔렀다.',
      ]);
      await era.printAndWait([
        '종이봉투 안의 커피 원두가 바닥에 흩어졌고, ',
        you.get_colored_name(),
        '은(는) 이 상황에 어울리지 않는 향긋한 커피 향을 맡았다……',
      ]);
      await era.printAndWait([
        '죽고 나면, 다시 ',
        coffee.get_colored_name(),
        '를 만날 수 있을까? ',
        coffee.sex,
        '라면, 어쩌면……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 의식은 어둠 속으로 가라앉았다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
