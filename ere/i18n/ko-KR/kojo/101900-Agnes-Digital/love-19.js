/**
 * @file アグネスデジタル - 恋慕
 * @author 片手虾好评发售中！
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { location_enum } = require('#/data/locations');

module.exports = {
  shine: (() => {
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     */
    const f = async (digital, you, callname) => {
      await digital.say_and_wait('우후후, 에헤헤!');
      await era.printAndWait([
        '트레이닝실의 ',
        digital.get_colored_name(),
        '은(는) 눈을 가늘게 뜬 채 ',
        digital.uma_sex_title,
        '를 상상하고 있는 모양이다. 신고당해도 이상하지 않을 웃음소리를 내며 몹시 행복해하고 있다.',
      ]);
      await you.say_and_wait('왜 그래? 뭐가 그렇게 즐거워?');
      await digital.say_and_wait(
        '다음 응원 활동을 어떻게 할지 생각 중이었거든요!',
      );
      await era.printAndWait([
        '그리고 ',
        digital.get_colored_name(),
        '은 장황한 논리를 늘어놓았다. 요지는 응원이 ',
        digital.get_colored_name(),
        '에게 힘을 주니 응원 또한 트레이닝의 일종이라는 것이었다.',
      ]);
      await era.printAndWait('음? 듣고 보니 꽤 일리가 있는 것 같은데?');
      await you.say_and_wait('그렇게 말하니 나도 같이 가보고 싶네.');
      await era.printAndWait([
        you.get_colored_name(),
        '도 함께 가기로 했다. 겸사겸사 ',
        digital.get_colored_name(),
        '에 대해 더 알아볼 기회이기도 했다.',
      ]);
      await digital.say_and_wait(
        '에? 시험 삼아 가보는 건 괜찮지만…… 이거 상당히 마니아틱하다구요? 많이 힘들 텐데요?',
      );
      era.drawLine();
      await era.printAndWait([digital.sex, '의 말이 맞았다.']);
      await digital.say_and_wait(
        '한신 경기장에 오길 정말 잘했어요!! 멋진 데뷔전이었어!',
      );
      await digital.say_and_wait([
        '1착한 ',
        digital.uma_sex_title,
        '짱은 작년에 은퇴한 ',
        digital.elder_sibling_sex_title,
        '의 뜻을 이어받아 데뷔한 거예요! 이 계승의 서사, 너무 뜨거워요!',
      ]);
      await era.printAndWait(['그리고 ', you.get_colored_name(), ' 에게는,']);
      await digital.say_and_wait(
        '한 치의 양보도 없는 두 사람! 나카야마 경기장의 직선은 아주 짧다구요! 와앗!',
      );
      await digital.say_and_wait(
        '으으…… 너무 멋져요. 적성과 이론을 초월해 내면에서 우러나오는 경쟁심이라니, 최고예요……',
      );
      await era.printAndWait('하루 만에,');
      await digital.say_and_wait(
        '오이 경기장의 더트 코스는 다른 마일 코스들에 비해 멋진 추입을 보기 더 쉬운 곳이죠……',
      );
      await digital.say_and_wait([
        '그 이론을 무시하고 도주를 선택한 ',
        digital.sex,
        '는 비록 결과는 졌지만 행복하게 웃고 있네요.',
      ]);
      await era.printAndWait('일본의 경기장을 거의 다 돌아다니는 것은,');
      await digital.say_and_wait([
        '이번에 출전한 회색 머리의 ',
        digital.uma_sex_title,
        '는 이전까지 성적이 좋지 않았는데도, ',
        digital.sex,
        '는 아직 투지를 불태우며 서 있어요!',
      ]);
      await era.printAndWait('조금…… 힘들었다.');
      await digital.say_and_wait([
        '느껴지세요?! ',
        digital.uma_sex_title,
        '짱들의 열기! 눈부심! 연달아 밀려오는 충격!',
      ]);
      await era.printAndWait('느껴진다. 진하고, 뜨겁다!');
      await era.printAndWait(
        '휘두르던 두 팔은 어느새 감각을 잃었고, 박수를 치던 손바닥은 부었다. 결승선을 향해 달리던 다리도 한 차례 수련을 마쳤다.',
      );
      await era.printAndWait([
        '곁에 있는 ',
        digital.get_colored_name(),
        '을 보니 기운이 펄펄 넘쳤고 숨조차 차지 않은 모습이었다. ',
        digital.sex,
        '는…… 혹시 이쪽으로 타고난 걸까?',
      ]);
      await digital.say_and_wait([
        '에? ',
        callname,
        ', 많이 힘드신가요? 음냐, 제가 너무 신난 나머지 배려를 못 했네요. 역시 너무 힘들었나요……',
      ]);
      await era.printAndWait(
        '레이스가 끝난 뒤 관중들이 이미 흩어진 뒤라, 빈자리에 찾아 앉는 것은 어렵지 않았다.',
      );
      await digital.say_and_wait([
        '역시 저는 ',
        digital.uma_sex_title,
        '짱들의 그 기개가 좋아요. ',
        digital.couple_title,
        '이 활기 넘치는 모습을 보고 싶어요.',
      ]);
      await era.printAndWait([
        digital.uma_sex_title,
        '들이 힘껏 달린 뒤의 경기장만 남은 풍경을 바라보며, ',
        digital.get_colored_name(),
        '은(는) 이미 얼굴에 드러나 있던 속마음을 털어놓았다.',
      ]);
      await era.printAndWait([
        '경기장을 열광시키고 하늘마저 뒤집을 듯한 열기를 품은 존재, ',
        digital.uma_sex_title,
        '.',
      ]);
      await era.printAndWait([
        '양손 가득 응원 굿즈를 들고 있는 ',
        digital.get_colored_name(),
        '에게 오늘은 그야말로 수확이 가득한 날이었다.',
      ]);
      await digital.say_and_wait([
        '정말 너무 행복해요. 설마 ',
        callname,
        '이(가) 제 걸음을 따라와 주실 줄이야! 이제 당신도 핵심 팬이라구요! 역시 동지예요!',
      ]);
      await era.printAndWait([
        '무척이나 기뻐 보이는 ',
        digital.get_colored_name(),
        '을 보자, ',
        you.get_colored_name(),
        '의 하루치 피로도 씻은 듯이 사라졌다.',
      ]);
      await era.printAndWait(
        '부디 내일 아침에 온몸이 쑤시지 않기만을 바랄 뿐이었다.',
      );
    };
    f.title = '번뜩임, 응원 활동!';
    return f;
  })(),
  univ: (() => {
    const title = '우주에서 서로를 이해하기';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {string} self_call アグネスデジタルの自称
     * @param {PrintedSpan} d_call_u アグネスデジタルのハルウララへの呼び方
     */
    const f = async (digital, you, callname, self_call, d_call_u) => {
      await digital.print_and_wait([
        digital.name,
        ', ',
        digital.uma_sex_title,
        '짱들을 위해 이 세상에 존재하는 ',
        digital.uma_sex_title,
        '. 오늘도 전력을 다해 덕질 중!',
      ]);
      await digital.print_and_wait([
        '아니 아니, 오늘은 성지순례다. ',
        digital.uma_sex_title,
        '짱들이 남긴 성스러운 발자취를 다시 한번 정성껏 되짚어 보겠어!',
      ]);
      await digital.say_and_wait([
        '쿠후후, 성지순례 가는 길에 ',
        callname,
        ' 선물도 좀 챙겨와야겠네요.',
      ]);
      await you.say_as_unknown_and_wait([
        '잘은 모르겠지만, 너랑 ',
        callname,
        ', 사이가 꽤 좋아 보이는데, 같이 가보는 건 어때?',
      ]);
      await digital.say_and_wait([
        '뭐라구요, ',
        callname,
        '과(와) 함께 성지순례를 가라구요? 오오…… 오오오오!',
      ]);
      await digital.print_and_wait([
        '단 한 번도 생각지 못한 전개였다. ',
        callname,
        '과(와) 함께하는 성지순례라니!',
      ]);
      await digital.print_and_wait(
        '이건 마치 야생 서바이벌 팀에 베어 그릴스가 합류한 격!',
      );
      await digital.say_and_wait('정말 감사합니다! 당장 가서 제안해볼게요!');
      era.drawLine();
      await era.printAndWait([
        '정말로 생각지도 못했는데, ',
        digital.get_colored_name(),
        '이 다가와 ',
        you.get_colored_name(),
        '에게 성지순례를 같이 가자고 제안했다.',
      ]);
      await era.printAndWait([
        '담당 ',
        digital.uma_sex_title,
        '를 위해, 지난번처럼 ',
        you.get_colored_name(),
        '도 각오를 다졌다.',
      ]);
      await era.printAndWait([
        '약속 시간에 맞춰 집결 장소에 나가니, ',
        digital.sex,
        '가 ',
        you.get_colored_name(),
        '을(를) 향해 손을 흔들고 있었다. 기세가 아주 등등해 보였다.',
      ]);
      await era.printAndWait([
        '평소처럼 분홍색 내의에 회색 겉옷을 입고 있었다. ',
        digital.sex,
        '의 성격상 「I Love UMA」 같은 문구가 적혀 있어도 이상하지 않을 것 같았다.',
      ]);
      await digital.say_and_wait([
        callname,
        '께서 오시다니! 거절당할 각오도 하고 있었는데……',
      ]);
      await you.say_and_wait('아니 아니, 아무리 그래도 거절할 리가.');
      await digital.say_and_wait('그럼 시작해요! 성지순례!');
      await era.printAndWait(
        '크게 손을 흔들며 전철역으로 이어지는 큰길을 가리켰다.',
      );
      era.drawLine();
      await era.printAndWait(
        '아주 평범한 목장에 도착했다. 울타리 안에서는 소들이 한가롭게 풀을 뜯고 있다. 여기가 성지라고?',
      );
      await digital.say_and_wait([
        '아뇨 아뇨, ',
        callname,
        ', 겉모습만 보시면 안 돼요!',
      ]);
      await era.printAndWait('힘차게 가리킨 곳은…… 풀숲?');
      await era.printAndWait(
        '잡초가 무성하다. 목장 주인이 별로 손질하지 않는 모양이다.',
      );
      await you.say_and_wait('경화수월? 대체 언제부터?!');
      await digital.say_and_wait('사실 가리키려던 건 이거였어요.');
      await era.printAndWait([
        digital.sex,
        '가 집어 든 것은 이슬이 맺힌 네잎클로버였다.',
      ]);
      await digital.say_and_wait([
        '맞아요! 행운의 네잎클로버를 동료나 라이벌에게 건넨 ',
        digital.uma_sex_title,
        '들이 얼마나 많은데요. 서로 겨루면서도 축복해 주는 모습, 으으으……',
      ]);
      await you.say_and_wait(
        '아니 아니, 네잎클로버라면 신사잖아? 비 오는 날, 도리이에 빗방울이 떨어지는 신사……',
      );
      await era.printAndWait('존재하지 않는 기억을 입 밖으로 내버린 걸까?');
      await digital.say_and_wait('! 세상에!');
      await digital.say_and_wait([
        callname,
        '! 뭘 좀 아시네요! 역시! 이런 성지는 서로 교류하면서 돌아다녀야 해요!',
      ]);
      era.drawLine();
      await digital.say_and_wait(
        '다음은 여기예요. 언뜻 보면 평범한 공원이지만, 사실은……',
      );
      await digital.say_and_wait('힘이 가득한 공원이라고요!');
      await era.printAndWait('히…… 힘?');
      await digital.say_and_wait([
        '맞아요! 셀 수 없이 많은 ',
        digital.uma_sex_title,
        '들이 여기 모여서 쉬곤 하죠. 게다가 저 모래사장!',
      ]);
      await you.say_and_wait(
        '오오오? 생각났다. 팀 골드가 트레이닝했던 모래사장이지?',
      );
      await digital.say_and_wait('맞아요! 바로 그…… 네? 지금……');
      await era.printAndWait('잠깐, 팀 골드는 어느 팀이지?');
      await you.say_and_wait([
        '일단, 그건 넘어가고, 저 노점 좀 봐. ',
        d_call_u,
        '가 차렸던 곳 아니야?',
      ]);
      await digital.say_and_wait('오오오오오!');
      era.drawLine();
      await digital.say_and_wait(
        '맛있어! 너무 맛있어! 이게 바로 왕자 라멘인가요?! 과연 왕자답네요!',
      );
      await era.printAndWait(
        '골목 깊숙한 곳에 숨겨진 라멘 가게에 도착했다. 외관이나 내부 인테리어 모두 범상치 않은 고수의 기운이 느껴졌다.',
      );
      await digital.say_and_wait(
        '게다가 이 엄청난 양이라니! 이걸 정복하는 사람은 정말 왕자라고 불릴 만하겠어요!',
      );
      await you.say_and_wait(
        '난 사실 이 왕자 라멘보다 이른바 비밀 메뉴라는 게 더 궁금한데……',
      );
      await you.say_as_passer_by_and_wait('점장', [
        '오? ',
        you.sex_code === 1 ? '형씨' : '아가씨',
        ', 제법인데! 비밀 메뉴까지 알고 있다니!',
      ]);
      await era.printAndWait([
        '옆에서 채를 들고 요리하던 점장이 놀라서 말을 걸었다.',
      ]);
      await digital.say_and_wait(
        '비밀 메뉴요? 어째서? 어째서 저만 몰랐던 거죠?',
      );
      await era.printAndWait([
        '왕자 라멘을 정복했다는 생각에 들떠 있던 ',
        digital.get_colored_name(),
        '은 그 말을 듣고 놀라 털이 곤두선 듯했다.',
      ]);
      era.drawLine();
      await digital.say_and_wait(
        '이야, 방금 그 하찌미 드링크 가게까지 해서 모든 성지순례 완료!',
      );
      await era.printAndWait(
        '새벽의 첫 햇살을 맞이하며 시작해 해질녘 노을을 배웅하기까지, 정말 바쁜 하루였다.',
      );
      await you.say_and_wait('이곳저곳 참 많이도 돌아다녔네.');
      await digital.say_and_wait(
        '아니 아니, 이렇게 오래 응원을 함께해 주시다니 정말 수고 많으셨어요. 그 성실함에 경의를 표합니다!',
      );
      await era.printAndWait('아니, 경례까지 할 건 없잖아.');
      await digital.say_and_wait(
        '그리고, 에헤헤, 무사히 끝나서 정말 다행이에요.',
      );
      await digital.say_and_wait('사실 처음에는 평소처럼 혼자 가려고 했어요.');
      await digital.say_and_wait('그런데……');
      await era.printAndWait([
        '그러고는 ',
        digital.sex,
        '에게서 뜻밖의 사연을 들었다. 밖에서 우연히 만난 ',
        digital.uma_sex_title,
        '의 권유로 ',
        callname,
        '을(를) 초대한 거라고……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 이름도 모르는 그 ',
        digital.uma_sex_title,
        '에게 진심으로 감사했다. 덕분에 ',
        you.get_colored_name(),
        '은(는) ',
        digital.get_colored_name(),
        '을(를) 더 잘 알게 되었으니까.',
      ]);
      await digital.say_and_wait(
        '가장 다행인 건, 막상 해 보니 정말! 정말로 즐거웠다는 거예요!',
      );
      await era.printAndWait('두 팔을 활짝 벌리는 모습이 정말 행복해 보였다.');
      await digital.say_and_wait(
        '다행이에요. 소중한 휴일인데 미리 계획도 세우지 않아서, 거절당할 줄 알았거든요……',
      );
      await digital.say_and_wait('하지만 이건 대발견이에요!');
      await digital.say_and_wait([
        '제가 발견한 건 바로, ',
        callname,
        '와(과) 함께 최애를 쫓고 오타쿠 활동을 하는 즐거움이에요!',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '이 이전까지 특이한 취미 때문에 잘 드러내지 않았던 본연의 감정들이 서서히 ',
        you.get_colored_name(),
        '에게 전해지고 있었다.',
      ]);
      await digital.say_and_wait(
        '이 우주에서 저와 함께 응원 활동을 해줄 사람이 있을 줄은 생각지도 못했거든요……',
      );
      await you.say_and_wait('우주급으로 큰 일이었던 거야?!');
      await digital.say_and_wait(
        '아하하, 사실 보셨다시피 전 늘 혼자였잖아요. 제 이런 한계 발언들을 들어주시고 공감해주시는 게 저를 얼마나 행복하게 하는지……',
      );
      await era.printAndWait([
        '느껴진다, ',
        digital.get_colored_name(),
        '의 두 눈이 반짝반짝 빛나고 있었다.',
      ]);
      await digital.say_and_wait([
        '너무 감동적이에요! 지금 이 기분을 당장 ',
        callname,
        '에게 말하고 싶어요!',
      ]);
      await you.say_and_wait('괜찮아, 하고 싶은 말 다 해도 돼.');
      await digital.say_and_wait('네! 정말 뭐든지요?!');
      await digital.say_and_wait(
        '정말 괜찮아요? 정말 괜찮은 거죠! 약속하셨어요!',
      );
      await digital.say_and_wait([self_call, ', 한계 발언 시작합니다!']);
      await digital.say_and_wait([
        'TV의 커다란 화면에서 처음 ',
        digital.uma_sex_title,
        '짱들의 모습을 본 순간 알았어요 저렇게 눈부시고 정열적인 ',
        digital.sex_code === 1 ? '신' : '여신',
        '들이 제 평생의 동경이라는 걸요 그 뒤로 심연에 빠졌다고 할지 천국에 올랐다고 할지 매일 ',
        digital.uma_sex_title,
        '짱들을 떠받들고 ',
        digital.couple_title,
        '을 응원하고 ',
        digital.couple_title,
        '에게 갈채를 보내고 ',
        digital.couple_title,
        '의 동인지를 만들면서 모두에게 ',
        digital.uma_sex_title,
        '짱들의 멋짐을 알리다가 가끔 내려 주신 은혜 덕분에 마침내 이 전당에 몸을 담고 ',
        digital.sex_code === 1 ? '신' : '여신',
        '들과 같은 세상에 있을 수 있게 됐달까 같은 공기를 마시는 범인일 뿐이지만 ',
        digital.couple_title,
        '은 저를 싫어하지도 않고 신성불가침한 레이스에서 뜨거운 승부까지 겨루게 해 주는 고귀하면서도 더러움을 꺼리지 않고 모든 것을 긍정해 주는 위대한 ',
        digital.sex_code === 1 ? '신' : '여신',
        '들이라 이렇게 길게 말했지만 디지땅이 하고 싶은 말은 그저 ',
        digital.uma_sex_title,
        '짱들이 정말 최고라는 거예요!',
      ]);
      await era.printAndWait([
        '돌고, 뛰고, 낮게 읊조리고, 높이 외치고. ',
        digital.get_colored_name(),
        '은(는) ',
        digital.sex,
        '가 평생 쌓아 온 힘을 끌어모아 하고 싶은 말을 전부 쏟아냈다.',
      ]);
      await era.printAndWait('그 순수함은 참으로 경외심마저 들게 했다.');
      await digital.say_and_wait(
        '콜록콜록, 하하하하, 다 쏟아내고 나니…… 정말…… 쿨럭…… 속이 다 시원하네요……',
      );
      await era.printAndWait([
        '미친 듯이 숨을 몰아쉬며 가슴이 계속 오르락내리락했다. 너무 무리했는지 ',
        digital.get_colored_name(),
        '은 쿨럭거리다 비틀거리더니 바닥에 주저앉았다.',
      ]);
      await digital.say_and_wait(['어때요, ', callname, '? 헤헤……']);
      await era.printAndWait([
        '바닥에 주저앉아 손으로 몸을 지탱하고 있었지만, ',
        digital.sex,
        '는 아주 환하게 웃고 있었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '도 ',
        digital.sex,
        ' 곁에 나란히 앉아 ',
        digital.sex,
        '의 몸을 살짝 받쳐주었다.',
      ]);
      await you.say_and_wait(
        '참 좋네. 이렇게 활기 넘치는 폭주 발언이라면 세 여신도 감동했을 거야.',
      );
      await digital.say_and_wait('헤헤헤, 그런가요……');
      await digital.say_and_wait('정말이지, 우주급이네요……');
    };
    f.title = title;
    return f;
  })(),
  oshi: (() => {
    const title = '최애';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} palmer メジロパーマー
     * @param {CharaTalk} helios ダイタクヘリオス
     * @param {CharaTalk} taste アキカワヤヨイ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} y_call_d プレイヤーのアグネスデジタルへの呼び方
     */
    const f = async (
      digital,
      teio,
      mcqueen,
      opera,
      doto,
      palmer,
      helios,
      taste,
      you,
      callname,
      y_call_d,
    ) => {
      teio.name = '어린애 같은' + teio.uma_sex_title;
      opera.name = '전혀 개의치 않는' + opera.uma_sex_title;
      doto.name = '덤벙대는' + doto.uma_sex_title;
      mcqueen.name = '연보랏빛이 도는 회색 머리의' + mcqueen.uma_sex_title;
      palmer.name = '밤색 머리의' + palmer.uma_sex_title;
      helios.name = '파랗게 물들인 듯한' + helios.uma_sex_title;
      if (era.get('cflag:0:位置') !== location_enum.beach) {
        await taste.say_and_wait('합숙! 그래. 바로 그거네!');
        await era.printAndWait(
          '과연 그 이사장이라고 해야 할까, 지금은 분명 여름 합숙 기간이 아닌데도 갑자기 이런 상황이 벌어졌다.',
        );
      }
      await you.say_and_wait('합숙인가, 나쁘지 않네.');
      await era.printAndWait([
        digital.uma_sex_title,
        '에게는 관광뿐 아니라 트레이닝이라는 중요한 일정도 있다. 여름 방학 숙제와 비슷한 셈이다.',
      ]);
      await era.printAndWait([
        '다행히 대부분의 ',
        digital.uma_sex_title,
        '는 트레이닝을 좋아한다. ',
        you.get_colored_name(),
        '의 담당 ',
        digital.uma_sex_title,
        ' ',
        digital.get_colored_name(),
        '도 예외는 아니다.',
      ]);
      await era.printAndWait([
        '그러고 보면 ',
        digital.get_colored_name(),
        '은 트레이닝 그 자체보다 최애들과 같은 일을 한다는 행위 자체를 더 즐기는 것 같았는데, 과연 ',
        digital.sex,
        '가 정말로 좋아하는 것이 트레이닝 그 자체일까 하는 의문이 들었다.',
      ]);
      await era.printAndWait([
        '목적지에 도착하기 전까지 이런저런 잡생각을 하는 사이, 바퀴가 구르며 초록빛 위로 금빛과 쪽빛이 덮였고, ',
        you.get_colored_name(),
        '은(는) 합숙 장소에 도착했다.',
      ]);
      await era.printAndWait('과연 트레센. 준비된 환경이 꽤 훌륭했다.');
      await era.printAndWait([
        '주위를 둘러보니 곳곳에 수영복을 입은 ',
        digital.uma_sex_title,
        '. ',
        digital.get_colored_name(),
        '은(는) 존귀함에 죽을 지경일 것이다. 트레이닝은커녕, ',
        digital.sex,
        '는…… 살아서 돌아갈 수 있을까?',
      ]);
      era.drawLine();
      await era.printAndWait([
        '짜잔, ',
        digital.get_colored_name(),
        '이 나타났다. 학교 수영복, 이른바 스쿨미즈라 불리는 수영복 차림이었는데, 적당히 몸에 붙어 트레이닝하기에 가장 편해 보이는 복장이었다.',
      ]);
      await era.printAndWait([
        digital.sex,
        '는 고개를 들어 멀리 펼쳐진 절경을 눈에 담더니, 미친 듯이 숨을 크게 들이마셨다……',
      ]);
      await digital.say_and_wait('푸른 하늘…… 하얀 구름…… 청춘의 바람……');
      await digital.say_and_wait([
        '여기 있는 모든 ',
        digital.uma_sex_title,
        '짱들! 아아! 숨 쉬는 것조차 신성모독……',
      ]);
      await digital.say_and_wait(
        '이토록 불경한 짓인데도 참을 수가 없어, 스읍……',
      );
      await era.printAndWait([
        '그러다가 ',
        you.get_colored_name(),
        '을(를) 발견하고는 숨을 들이마시다 말고 사레가 걸려 쿨럭거렸다.',
      ]);
      await digital.say_and_wait(['콜록콜록, ', callname, '(이)였군요!']);
      await digital.say_and_wait(
        '아와와, 트레이닝 시작해요! 전 벌써 준비 다 됐다구요!',
      );
      await era.printAndWait([
        '크게 손을 흔들며 평소와 다름없어 보이는 ',
        digital.get_colored_name(),
        '이었지만, 왠지 조금 위화감이 느껴졌다.',
      ]);
      await you.say_and_wait(
        '모처럼 여기까지 왔는데, 먼저 좀 쉬지 않아도 괜찮겠어?',
      );
      await era.printAndWait([
        '마침 사이좋아 보이는 두 ',
        digital.uma_sex_title,
        '가 지나갔다.',
      ]);
      await palmer.say_and_wait(
        '이것 봐, 아이스크림이 얼굴에 묻었잖아! 어쩔 거야?',
      );
      await helios.say_and_wait('에헤헤, 그럼 네가 닦아 줘~!');
      await era.printAndWait([
        '그야말로 정석적인 장면. ',
        digital.get_colored_name(),
        '은(는) 눈으로 그들을 좇으며 행복하게 웃었다.',
      ]);
      await helios.say_and_wait('오늘 밤에 여름 축제 한대! 같이 가자~!');
      await palmer.say_and_wait('잠깐, 왜 멋대로 정하는 거야!');
      await era.printAndWait([
        '배를 문지르며 잘 먹었다고 중얼거리던 ',
        digital.get_colored_name(),
        '의 표정이 갑자기 바뀌었다.',
      ]);
      await digital.say_and_wait([
        '헤헤…… 좋은 걸 봤네. 아냐 아냐! 흠! ',
        callname,
        '! 이제 트레이닝하러 가요!',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '은 가슴을 탕탕 치며 최대한 진지해 보이려고 애쓰고 있었다. 대체 무슨 일이 생긴 걸까?',
      ]);
      await era.printAndWait([
        digital.sex,
        '의 그 진지한 눈빛을 보니 ',
        you.get_colored_name(),
        '도 더는 뭐라 할 수 없었고, 트레이닝을 시작하기로 했다.',
      ]);
      era.drawLine();
      await era.printAndWait(
        '스톱워치를 눌렀다. 모래사장에서 달리는 것은 잔디나 더트와는 또 달랐기에, 속도가 떨어지는 것은 당연한 일이었다.',
      );
      await you.say_and_wait('좀 쉬었다 하자.');
      await era.printAndWait([
        digital.sex,
        '에게 물과 수건을 건넸다. 바닷가라 물은 사방에 널려 있었지만, 땀은 닦아내야 했다.',
      ]);
      await era.printAndWait([
        '수건을 받아든 ',
        digital.get_colored_name(),
        '이 얼굴을 닦던 도중, 눈길이 다시 저편의 바다의 집으로 향했다.',
      ]);
      await doto.say_and_wait('죄죄죄죄송해요! 옷에 소스를 묻히다니!');
      await opera.say_and_wait(
        '아아, 나의 광채는 이런 정도로 어두워지지 않아. 오히려 흠집 덕분에 더욱 눈부시게 빛날 뿐이지!',
      );
      await era.printAndWait(
        '음, 확실히 개성 넘치는 콤비였다. 제법 이름난 녀석들이기도 했다.',
      );
      await digital.say_and_wait('꿀꺽꿀꺽…… 으으으응!');
      await era.printAndWait('갑자기 엔진이 돌아가는 듯한 소리가 들렸는데……?');
      await digital.say_and_wait([
        '아! 그럼! ',
        callname,
        '! 전 트레이닝하러 갈게요. 이어서 열 번 왕복할 거라구요!',
      ]);
      await era.printAndWait(
        '한쪽 주먹을 불끈 쥐고 높이 치켜드는 모습이, 혹시 너무 무리하는 건 아닐까 싶었다.',
      );
      await era.printAndWait('그럼 이렇게 하는 건 어떨까.');
      await you.say_and_wait(
        '오늘 밤 근처에서 축제가 있다는데, 같이 구경 가지 않을래?',
      );
      await digital.say_and_wait('오……! 좋네요, 축제! 좋아요, 가요!');
      await era.printAndWait([
        digital.sex,
        '가 조금이라도 긴장을 풀 수 있으면 좋겠지만...',
      ]);
      era.drawLine();
      await era.printAndWait(
        '공중에 매달린 전등들이 보도블록을 색색으로 물들였고, 길 양옆의 노점들도 오렌지빛 조명을 밝히며 호응하고 있었다.',
      );
      await era.printAndWait([
        '해변 합숙인데도 유카타를 챙겨 온 ',
        digital.uma_sex_title,
        '가 적지 않아, 모처럼 열린 축제를 즐기고 있었다.',
      ]);
      await digital.say_and_wait([
        '흠흠, 그럼 ',
        callname,
        ', 어디부터 구경해볼까요?',
      ]);
      await era.printAndWait(
        '사과 사탕, 붕어빵, 초코 바 같은 먹거리부터 우마무스메 가면 같은 기념품, 그리고 풍선 터뜨리기 같은 게임 가판대까지 한눈에 들어왔다.',
      );
      await era.printAndWait([
        '그 광경을 보며 ',
        digital.get_colored_name(),
        '이 한 곳을 지목했다.',
      ]);
      await era.printAndWait([
        '유카타를 입은 ',
        digital.uma_sex_title,
        ' 둘이 금붕어 건지기를 하고 있었다.',
      ]);
      await era.printAndWait(
        '그중 한 명이 재빠른 손놀림으로 종이 뜰채를 휘둘러 금붕어 한 마리를 바로 건져 올렸으나, 그 대가로……',
      );
      await teio.say_and_wait(
        '아하하, 금붕어를 낚아야지 물을 낚으면 어떡해. 이것 봐, 옷이 다 젖었잖아.',
      );
      await mcqueen.say_and_wait('에에에엣?!');
      await digital.say_and_wait('쓰읍……');
      await era.printAndWait([
        digital.get_colored_name(),
        '은 길게 숨을 내쉬더니……',
      ]);
      await digital.say_and_wait(
        '그럼 그럼, 어느 가게부터 가볼까요? 맛있어 보이는 노점이 정말 많네요!',
      );
      await era.printAndWait([
        '예전 같았으면 ',
        digital.sex,
        '는 눈을 반짝이며 멈출 줄 몰랐을 텐데.',
      ]);
      await era.printAndWait('그렇다면, 다음엔……');
      await you.say_and_wait('내가 가보고 싶은 곳이 하나 있어.');
      era.drawLine();
      await era.printAndWait(
        '북적이는 축제 인파에서 벗어나, 지금은 한적해진 밤바다로 향했다.',
      );
      await era.printAndWait(
        '뒤편은 붉은빛으로 넘실거렸고, 눈앞은 푸르고 하얬다.',
      );
      await era.printAndWait(
        '먼지도 없었지만 바지를 털고 모래사장 위에 그대로 주저앉았다.',
      );
      await era.printAndWait(
        '밤의 해변은 시원하다고 하긴 어려웠다. 불어오는 바람은 축축하고 눅눅했으며, 오직 엉덩이로만 서늘함이 느껴졌다.',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        '은 ',
        you.get_colored_name(),
        '을(를) 바라보더니 똑같이 자리에 앉았고, 그렇게 둘은 어색하게 달과 바다를 바라보았다.',
      ]);
      await digital.say_and_wait([
        callname,
        '이(가) 하고 싶었던 일이, 여기 앉아서 바다를 보는 거였나요?',
      ]);
      await era.printAndWait('조금 더 솔직해지기로 했다.');
      await you.say_and_wait([y_call_d, ', 무슨 일 있었어?']);
      await digital.say_and_wait('에? 아무 일도 없는데 말입죠?');
      await era.printAndWait([
        '그 말을 내뱉는 ',
        digital.get_colored_name(),
        '은 찔리는 게 있는지 무의식적으로 손을 내밀어 마음의 교류를 차단하려 했다.',
      ]);
      await you.say_and_wait('네가 하고 싶은 일을 억누르고 있는 거야?');
      await era.printAndWait('그렇지 않을까?');
      await digital.say_and_wait([
        '에! 아녜요! 왜냐면, 오늘 제가 하고 싶은 일은 ',
        callname,
        '과(와) 함께 ',
        callname,
        '이(가) 하고 싶은 일을 하는 거니까요!',
      ]);
      await you.say_and_wait('……왜 그렇게 생각하는 거야?');
      await digital.say_and_wait([
        '왜냐면…… ',
        callname,
        '은(는) 저랑 같이 계속 덕질을 도와주셨으니까요……',
      ]);
      await era.printAndWait([
        '말을 하면서 ',
        digital.get_colored_name(),
        '은 고개를 숙인 채 우물쭈물거렸다.',
      ]);
      await digital.say_and_wait('제 헛소리도 늘 들어 주시고……');
      await era.printAndWait([
        '고개를 숙인 채 ',
        digital.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        ' 쪽으로 시선을 돌렸다. 얼굴도 붉어져 있었다.',
      ]);
      await digital.say_and_wait(
        '덕분에 응원하는 것도 더 재미있어졌어요. 매일매일이 이렇게 즐거울 줄은 몰랐어요……',
      );
      await digital.say_and_wait([
        '이제 ',
        callname,
        ' 없이 혼자 덕질하던 때로는 돌아갈 수 없다고요!',
      ]);
      await era.printAndWait([
        '말하다 보니 ',
        digital.get_colored_name(),
        '은(는) 허리에 손을 얹고, ',
        you.get_colored_name(),
        ' 같은 동지가 있다는 사실을 자랑스러워했다.',
      ]);
      await digital.say_and_wait([
        '그러니까 ',
        callname,
        '도 소중한 존재라는 뜻이에요!',
      ]);
      await era.printAndWait([
        '모든 ',
        digital.uma_sex_title,
        '를 마음에 품듯, ',
        you.get_colored_name(),
        '도 마음에 품었다.',
      ]);
      await digital.say_and_wait([
        '이렇게 많은 ',
        digital.uma_sex_title,
        '들이 매일 뜨거운 마음을 품고 달리는 ',
      ]);
      await digital.say_and_wait([
        '이 세상은 그야말로 대',
        digital.uma_sex_title,
        '짱 존사 시대!',
      ]);
      await era.printAndWait([
        '멋지게 손가락을 뻗어 ',
        you.get_colored_name(),
        '을(를) 가리켰다.',
      ]);
      await digital.say_and_wait([
        '앞뒤좌우 어디에나 눈부신 ',
        digital.uma_sex_title,
        '짱들!',
      ]);
      await digital.say_and_wait(
        '언제 존귀함에 쓰러질지 모르는, 전쟁터 같은 곳이에요.',
      );
      await digital.say_and_wait(
        '그 전쟁터를 함께 달리고, 감동의 크리티컬을 맞으며, 기쁨을 나누는 사람.',
      );
      await digital.say_and_wait('그게 바로 전우예요!');
      era.drawLine();
      await digital.say_and_wait('그런데 저만 계속 도움을 받고 있는 건가요?');
      await digital.say_and_wait(
        '그걸 당연하게 받아들이다간 마음속에 어둠을 품게 되지 않을까요?',
      );
      await digital.say_and_wait([
        '그래서 말인데, 저도 ',
        callname,
        '을(를) 위해 뭔가를 하고 싶어요. ',
        callname,
        '이(가) 하고 싶은 일, 제가 이루어 드릴게요!',
      ]);
      await digital.say_and_wait('자, 어서요! 온 힘을 다할 거라구요!');
      await era.printAndWait([
        digital.get_colored_name(),
        '이 자신이 좋아하는 일을 억누르고 있는 게 아니라는 사실에 ',
        you.get_colored_name(),
        '은(는) 안심했고, 동시에 ',
        digital.sex,
        '가 ',
        you.get_colored_name(),
        '을(를) 배려해준다는 점에 기분이 좋아졌다.',
      ]);
      await era.printAndWait([
        digital.sex,
        '는 ',
        digital.uma_sex_title,
        '를 향한 대가 없는 사랑을 품고 달려왔다.',
      ]);
      await era.printAndWait([
        '그렇다면 ',
        you.get_colored_name(),
        '이(가) 하고 싶은 일은 무엇일까.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 바로 그 모습을 응원하고 싶어서 ',
        digital.sex,
        '의 트레이너가 된 것이었고, 정말로 하고 싶었던 일은……',
      ]);
      await you.say_and_wait('디지털이 활기 넘치는 모습을 보고 싶어.');
      await era.printAndWait([
        digital.sex,
        '가 전력을 다해 응원하는 모습, 레이스에서 누구도 막을 수 없는 모습, ',
      ]);
      await era.printAndWait([
        digital.sex,
        '가 ',
        digital.uma_sex_title,
        '를 덕질하다가 존귀함에 쓰러지는 모습, ',
        you.get_colored_name(),
        '과(와) ',
        digital.uma_sex_title,
        ' 이야기로 끝없이 수다 떠는 모습을 보고 싶다.',
      ]);
      await era.printAndWait([
        '수만 가지 말을 한마디로 줄이자면, ',
        digital.sex,
        '가 행복해하는 모습을 보고 싶다는 뜻이었다.',
      ]);
      await digital.say_and_wait('제가, 활기…… 넘치는 모습이요?');
      await digital.say_and_wait('제가 최애에게 느끼는 마음……과 같은 건가요?');
      await you.say_and_wait('그래.');
      await era.printAndWait([
        '하지만 ',
        digital.get_colored_name(),
        '은 여전히 자신이 없는 듯했다.',
      ]);
      await digital.say_and_wait(
        '꽃의 화분이나 하고, 보컬의 백댄서나 하는 저를요?',
      );
      await digital.say_and_wait(
        '아니, 그러니까, 어째서요? 여전히 믿기지 않지만요.',
      );
      await digital.say_and_wait(
        '음…… 우우, 조금 기쁘기도 하고, 아니 그보다 영광이라고 해야 하나, 왠지 좀 쑥스럽네요.',
      );
      await digital.say_and_wait(
        '꼭 회지를 낸 작가가 감상평을 받았을 때 같은 기분이에요!',
      );
      await era.printAndWait('참으로 적절한 비유였다.');
      await digital.say_and_wait('그러니까…… 이건——');
      await era.printAndWait([
        digital.get_colored_name(),
        '은 부끄러운지 얼굴을 가려버렸다. 이건—— 대체 무엇일까, 참 흥미로웠다.',
      ]);
      await digital.say_and_wait('저기……');
      await digital.say_and_wait('덕질, 계속할게요! 이제 사양하지 않겠어요!');
      await era.printAndWait('드디어……');
      await digital.say_and_wait(
        '온 힘을 다해 활기 넘치는 모습을 보여드릴게요!',
      );
      await era.printAndWait([
        '내가 아는 ',
        digital.get_colored_name(),
        '이(가) 돌아왔다.',
      ]);
      await digital.say_and_wait([
        '그래, 바로 그거야! 어서 ',
        digital.uma_sex_title,
        '짱 에너지를 섭취하자!',
      ]);
      await digital.say_and_wait('GOGOGO！');
      await era.printAndWait('달려요!');
      await era.printAndWait(
        '푸른 바다도 아름답지만, 이 축제에는 역시 주황빛 조명이 어울린다.',
      );
      await era.printAndWait([
        '아무도 없는 모래사장 대신, ',
        digital.get_colored_name(),
        '과(와) 함께 축제 속으로 뛰어들자!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  49: (() => {
    const title = '흠뻑 젖는 건 단골 전개, 하지만 이번엔 당신';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} d_call_t アグネスデジタルのアグネスタキオンへの呼び方
     * @param {PrintedSpan} t_call_d アグネスタキオンのアグネスデジタルへの呼び方
     */
    const f = async (digital, tachyon, you, callname, d_call_t, t_call_d) => {
      await era.printAndWait(
        '트레이너로서 평소의 트레이닝 지도 외에도, 몇 가지 자잘한 업무들이 있다.',
      );
      await era.printAndWait([
        '오늘은 ',
        digital.uma_sex_title,
        '의 휴일이지만, ',
        you.get_colored_name(),
        '은(는) 강의동을 찾아 ',
        digital.uma_sex_title,
        '의 사전 출전 자료를 제출했다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 일을 마치고 사무실을 나오자, 창밖에 드문드문 빗방울이 떨어지기 시작했다.',
      ]);
      await era.printAndWait([
        '다행히 ',
        you.get_colored_name(),
        '은(는) 우산을 가져왔다.',
      ]);
      await era.printAndWait([
        '돌아가려던 참에 ',
        you.get_colored_name(),
        '은(는) 복도 아래에 서 있는 분홍빛 그림자를 보았다.',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '이었다. 귀가 축 처져 있고 기운이 없다. 우산을 가져오지 않은 모양이다. 작품에서 흔히 보는 한 장면이다.',
      ]);
      await era.printAndWait([
        '그런데 이상하게도 ',
        you.get_colored_name(),
        '은(는) 조금 앞쪽 빗속에서 우산을 쓴 ',
        tachyon.get_colored_name(),
        '을(를) 보았다.',
      ]);
      await you.say_and_wait('타키온을 부르지 않는 거야?');
      await digital.say_and_wait([
        '……에, 당신이라면 아시겠죠? ',
        callname,
        '?',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '이 몇 가지 수신호로 기색을 보였다.',
      ]);
      await era.printAndWait([
        '오랫동안 함께 지내오며, ',
        you.get_colored_name(),
        '도 점차 ',
        digital.get_colored_name(),
        '의 성격을 이해하게 되었다. 아무래도 ',
        digital.sex,
        '는 ',
        tachyon.get_colored_name(),
        '을 방해하고 싶지 않은 모양이다.',
      ]);
      await you.say_and_wait(
        '그래, 알겠어. 그럼 나랑 우산을 같이 쓰고 가지 않을래?',
      );
      await digital.say_and_wait('감사합니다!');
      await era.printAndWait([
        '그렇게 ',
        you.get_colored_name(),
        '은(는) 우산 하나를 받쳐 들었고, 그 아래 ',
        you.get_colored_name(),
        '과(와) ',
        digital.get_colored_name(),
        '이 나란히 섰다.',
      ]);
      await era.printAndWait(
        '빗줄기가 굵어지기 시작했다. 설상가상으로 바람까지 강해졌고, 방향조차 일정치 않았다.',
      );
      await era.printAndWait([
        '마치 비가 살아있는 생물처럼 ',
        you.get_colored_name(),
        '이(가) 우산을 기울인 반대 방향으로 파고들었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        digital.get_colored_name(),
        '이 젖지 않도록 필사적으로 우산을 ',
        digital.get_colored_name(),
        ' 쪽으로 기울였다.',
      ]);
      await digital.say_and_wait([
        callname,
        ', 제가 젖는 것도 안 좋지만, 몸은 ',
        digital.uma_sex_title,
        '보다 약하시잖아요? 감기라도 걸리면 큰일이에요!',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '이 화가 난 것을 알 수 있었다. 귀가 뒤로 쫑긋 누워버렸다.',
      ]);
      await you.say_and_wait('그건…… 좀 상처인데.');
      await era.printAndWait([
        '분위기를 가라앉히려 ',
        digital.get_colored_name(),
        '과 이런저런 농담을 주고받으며 계속 걸었다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '은(는) 고집을 꺾지 않고 계속해서 ',
        digital.sex,
        '를 가려주었다.',
      ]);
      await era.printAndWait([
        '결국 고집을 부린 결과, 트레이닝실에 도착했을 때 ',
        you.get_colored_name(),
        '의 옷은 흠뻑 젖어버렸지만 다행히 ',
        digital.get_colored_name(),
        '은 거의 젖지 않았다.',
      ]);
      await digital.say_and_wait([
        '아하하하, ',
        callname,
        ', 일단 거기 가만히 계세요.',
      ]);
      await era.printAndWait([
        '아니 아니, 이때 ',
        you.get_colored_name(),
        '은(는) 깨달았다. 담당 ',
        digital.uma_sex_title,
        '가 젖는 것도 곤란하지만, 담당 ',
        digital.uma_sex_title,
        ' 앞에서 자신이 젖는 것도 그리 좋은 일은 아니라는 걸.',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '이 수건을 들고 ',
        you.get_colored_name(),
        '의 머리에 맺힌 물방울을 닦아주었다.',
      ]);
      await era.printAndWait(
        '젖은 옷을 벗고 몸을 닦은 뒤, 마른 수건으로 몸을 덮는 것은 임시방편에 불과했다.',
      );
      await you.say_and_wait('정말 고마워, 나머지는 내가 직접 할게.');
      await era.printAndWait([
        '이렇게 몸을 닦이고 있으니 ',
        you.get_colored_name(),
        '은(는) 내심 쑥스러움을 느꼈다.',
      ]);
      await era.printAndWait([
        '어쨌든 ',
        you.get_colored_name(),
        '도 어른이니까. ',
        digital.get_colored_name(),
        '은(는) 고개를 숙이고 있어 ',
        you.get_colored_name(),
        '에게는 ',
        digital.sex,
        '의 표정이 보이지 않았다. 귀를 봐서는 기분이 나쁜 것 같지는 않은데……',
      ]);
      await era.printAndWait('괜찮은 걸까?');
      era.drawLine();
      await digital.say_and_wait(
        '후아~ 비를 맞고 샤워한 뒤 이불 속으로 쏙 들어가기! 그리고 숙면을 취해야 내일 더 활기차게 덕질을 할 수 있겠지!',
      );
      await digital.print_and_wait([
        '룸메이트인 ',
        d_call_t,
        '는 아직 연구실에 있는 모양이네. 뭐, 평소랑 똑같지만.',
      ]);
      await digital.print_and_wait('어라, 일기 쓰는 걸 잊었네……');
      await digital.print_and_wait(
        '뭐 어때. 이불 속에 들어가서 오늘의 덕질을 돌아보고 내일을 준비하자!',
      );
      await digital.print_and_wait([
        '음음, 아침엔 먼저 ',
        digital.uma_sex_title,
        '짱들이 달린 잔디 위에서 복을 만끽하고, 점심엔 식당에서 덕질 에너지를 섭취하고, 오후엔……',
      ]);
      await digital.print_and_wait([
        '오후에는…… ',
        callname,
        '의…… 그…… 뽀얀 피부, 살짝 윤곽이 잡힌 복근, 뚝뚝 떨어지는 머리의 물……',
      ]);
      await digital.print_and_wait(
        '아니 아니 아니, 디지털, 무슨 생각을 하는 거야!',
      );
      await digital.print_and_wait([
        digital.uma_sex_title,
        '들이 좋아할 만한 타입이긴 하지만……',
      ]);
      await digital.print_and_wait(
        '아냐 아냐, 디지땅, 기존 지식으로 해석해 보자. 동인지도 많이 봤고, 많이 그렸잖아.',
      );
      await digital.print_and_wait('자, 그 안에서 답을 찾아보자!');
      await digital.print_and_wait([
        callname,
        '이(가) ',
        digital.uma_sex_title,
        '를 스카우트하고 ',
        digital.sex,
        '의 재능을 발견하는 이야기잖아!',
      ]);
      await digital.print_and_wait('그다음엔 어떻게 됐더라?');
      await digital.print_and_wait([
        digital.uma_sex_title,
        '짱이 마음을 깨닫고……',
      ]);
      await digital.print_and_wait('그러고 나서 자가발전……');
      await digital.say_and_wait(
        '아니 아니! 왜 거기로 이어지는 거야, 아무리 그래도……',
      );
      await tachyon.say_and_wait([
        '이런이런, ',
        t_call_d,
        ', 혼자서 무슨 말을 하고 있는 건가?',
      ]);
      await digital.say_and_wait('히익————?!');
      await digital.print_and_wait([
        '아무래도 ',
        d_call_t,
        '가 돌아온 타이밍이 좋지 않았던 모양이다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  '74-first': (() => {
    const title = '기록';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     */
    const f = async (digital, you, callname) => {
      await digital.print_and_wait([
        '오늘은 기대에 부푼 풋풋한 ',
        digital.uma_sex_title,
        '짱들의 선발 레이스! 여신들의 무한한 가능성에 또 한 번 감탄했다!',
      ]);
      await digital.print_and_wait([
        '그리고…… 이상한 사람을 만났다! 만났다고 해야 하나, 이상하다고 해야 하나…… 아무래도 ',
        you.sex,
        '는 동지인 것 같다.',
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait(
        '오늘 디지땅은 드디어 잔디냐 더트냐 하는 문제를 해결했다! 나중에 조촐하게 축하해야지. 지금은 일단 기록부터.',
      );
      await digital.print_and_wait([
        '바로 그 사람이다. ',
        you.sex,
        '가 완벽한 방안을 내놓았다! 그 한마디에 눈이 번쩍 뜨였다.',
      ]);
      await digital.print_and_wait([
        '결국 나는 ',
        you.sex,
        '의 제안을 받아들여 ',
        you.sex,
        '의 담당 ',
        digital.uma_sex_title,
        '가 되었다.',
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait([
        '정말 뜻밖이다. ',
        callname,
        '이(가) 나랑 응원하러 와 주다니!',
      ]);
      await digital.print_and_wait(
        '내 페이스를 따라올 수 있는 사람이 있으리라고는 지금껏 생각도 못 했다!',
      );
      await digital.print_and_wait(
        '그 뒤로도 여기저기 많이 다녔다. 돌이켜 보면……',
      );
      await digital.print_and_wait([
        '지금 생각해 보니 마지막에는 ',
        callname,
        '도 안색이 별로 좋지 않았다. 완전히 지친 것 같았다.',
      ]);
      await digital.print_and_wait([
        '그래도 ',
        callname,
        '은(는) 「동지」라는 칭호를 받을 자격이 있다!',
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait(
        '그 후에도 여러 곳을 돌아다녔다. 또 왔다, 또 왔어! 성지 순례!……',
      );
      await digital.print_and_wait(
        '최애들이 다녀간 곳, 최애들에게 소중한 곳을 찾아가 최애들의 발자취를 따라가는 활동!',
      );
      await digital.print_and_wait([
        '믿기지 않는다. ',
        callname,
        '이(가) 내 제안을 받아들여 함께해 주다니.',
      ]);
      await digital.print_and_wait(
        '도버 해협 같은 공명, 심장이 아릴 듯한 공진!',
      );
      await digital.print_and_wait([
        '게다가, 게다가 ',
        callname,
        '은(는) 내가 모르는 것도 잔뜩 알고 있었다! 최애들에 관해서도 나보다 잘 아는 부분이 있었다! 역시 난 DD 실격이야……',
      ]);
      await digital.print_and_wait([
        '마지막에는 ',
        callname,
        '에게 한계 발언까지 해 버렸다! 이 우주에 그런 이야기를 들어 주는 사람이 있다니. 감동을 주체할 수 없었다……',
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait([
        '여름 합숙이 다가온다. 수영복을 입은 ',
        digital.uma_sex_title,
        '짱들을 볼 수 있어!',
      ]);
      await digital.print_and_wait([
        '햇살 아래, 햇살보다 눈부시게 빛나는 건——',
        digital.uma_sex_title,
        '짱!',
      ]);
      await digital.print_and_wait('흩날리는 수박 조각, 누구의 솜씨일까.');
      await digital.print_and_wait('빠르게 날아가는 배구공, 누가 받아 낼까.');
      await digital.print_and_wait([
        '빙수도, 해산물도, 전부 ',
        digital.uma_sex_title,
        '짱들을 돋보이게 해!',
      ]);
      await digital.print_and_wait([
        callname,
        '을(를) 초대해서 같이 놀아야지!',
      ]);
      await digital.print_and_wait('……아.');
      await digital.print_and_wait([
        '(공책 앞에 앉은 분홍빛 ',
        digital.teen_sex_title,
        '은(는) 펜을 멈췄다.)',
      ]);
      await digital.say_and_wait('나, 계속 내 생각만 했네……');
      digital.print('……');
      era.println();
      await digital.print_and_wait([
        '욕망과 ',
        digital.uma_sex_title,
        '를 저울에 올린다면 저울은 반드시 오른쪽으로 기울겠지.',
      ]);
      await digital.print_and_wait([
        '그럼 ',
        digital.uma_sex_title,
        '와 ',
        callname,
        '을(를) 저울에 올리면?',
      ]);
      await digital.print_and_wait(
        '인정하고 싶지는 않지만, 지금까지 디지가 한 행동을 보면 마음속 저울은 왼쪽으로 기울어 있다.',
      );
      await digital.print_and_wait([
        '그러니까 적어도 내일, 여름 합숙에서는 ',
        callname,
        '이(가) 하고 싶은 걸 해 드리자.',
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait('뭐라고 써야 할까……');
      await digital.print_and_wait('지금 떠올려도 아직 부끄럽다……');
      await digital.print_and_wait(
        '정말이지, 디지땅은 처음 알았다. 나를 이렇게까지 최애로 삼아 주는 사람이 있다니. 게다가 그 사람이 내 트레이너라니.',
      );
      digital.print('——');
      await digital.print_and_wait('사실 그날부터 좀 이상한 것 같다……');
      await digital.print_and_wait([
        callname,
        '을(를) 보기만 해도 안절부절못하고 어쩔 줄 모르겠다.',
      ]);
      await digital.print_and_wait(
        '알고 있다. 대충은 안다. 그러니까 이 두근거림을 받아들여야 할까, 아니면 마음의 외침을 모른 척해야 할까?',
      );
      digital.print('……');
      era.println();
      await digital.print_and_wait([
        '솔직하게 인정해야겠다. 나는 ',
        callname,
        '에게 마음이 있다. 그래, 그, 연애 감정이라는 거.',
      ]);
      await digital.print_and_wait('잘 생각해 보면 좀 이상하지 않아?');
      await digital.print_and_wait([
        '디지땅, 생각해 봐. ',
        callname,
        '이랑 같이 덕질하러 나가고, ',
      ]);
      await digital.print_and_wait(
        '같이 놀러 가고, 영화를 보고, 축제를 돌아다니고, 해변에서 속마음을 나누고……',
      );
      await digital.print_and_wait('이상하지 않아?');
      await digital.print_and_wait('이거, 데이트잖아?!');
      await digital.print_and_wait(
        '(데이트라는 게 꼭 그런 의미만 있는 건 아니지만.)',
      );
      await digital.print_and_wait([
        '사실 진작부터 ',
        callname,
        '이랑 사귀고 있었는데 나만 잊어버린 거야?!',
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait(
        '큰일이다, 큰일이야. 어제는 안 적었는데 오늘 떠올라 버렸다. 이제 끝장이야!',
      );
      await digital.print_and_wait('앞으로 어떡하지……');
      digital.print('……');
      era.println();
      await digital.print_and_wait('오늘은 ');
      await digital.print_and_wait([
        '또 ',
        callname,
        '이랑 성지 순례를 했다. ',
        digital.uma_sex_title,
        '짱들은 여전히 눈부신데, ',
      ]);
      await digital.print_and_wait([
        callname,
        '이랑 앉아 있으니 안절부절못하면서 ',
        callname,
        '을(를) 자꾸 곁눈질하게 됐다……',
      ]);
      await digital.print_and_wait([
        '지금 생각해 보니 ',
        you.sex,
        '는 꽤 근사한 데다가, 그 기개도 존경스럽다!',
      ]);
      await digital.print_and_wait('……결심했다.');
      digital.print('……');
      era.println();
      await digital.print_and_wait(
        '오늘은 평소와 달리 아침에 일기를 쓰고 있다.',
      );
      await digital.print_and_wait(
        '디지, 할 수 있어! 아니, 생각해 보니 나한테 무슨 매력이 있지?',
      );
      await digital.print_and_wait(
        '볼품없는 몸매…… 자그마한 몸…… 평소 행동도 지극히 평범하고……',
      );
      await digital.print_and_wait('아니지, 오히려 변태잖아!');
      await digital.print_and_wait([
        digital.uma_sex_title,
        ' 이야기만 나오면 멈추질 못하고, 잘 아는 주제가 나오면 말이 더 빨라지는데. 이거 변태잖아?',
      ]);
      await digital.print_and_wait([
        callname,
        ' 말고 다른 사람이랑 사귀는 건 무리잖아?',
      ]);
      await digital.print_and_wait([
        '어, ',
        callname,
        '을(를) 만난 것만으로도 엄청난 행운이야. 이번 기회를 놓치면 다시는 없어! 나를 이렇게 이해해 주고 다정하게 대해 주는 사람은 또 없을 거야!',
      ]);
      await digital.print_and_wait('디지야, 디지야, 당장 움직여!');
      await digital.print_and_wait(
        '놓치면 남은 인생 내내 베개를 끌어안고 이불을 뒤집어쓴 채 울부짖게 될걸?',
      );
      await digital.print_and_wait([
        callname,
        '도 나를 좋아하잖아? 안 그러면 같이 응원하러 다니지 않겠지?',
      ]);
      await digital.print_and_wait('좋아, 좋아. 성공할 가능성이 꽤 있어!');
      await digital.print_and_wait('가자, 가자. 더는 기다리지 마!');
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 휴대전화를 봤다. 평소라면 ',
        digital.get_colored_name(),
        '이(가) 벌써 훈련을 시작했을 시간이다. 정식 훈련 시간까지는 아직 여유가 있지만……',
      ]);
      await era.printAndWait([
        '최근의 ',
        digital.get_colored_name(),
        '을(를) 떠올려 보았다. 해변에서 그 이야기를 나눈 뒤로 ',
        digital.get_colored_name(),
        '은(는) 점점 ',
        you.get_colored_name(),
        '을(를) 의식하기 시작했다.',
      ]);
      await era.printAndWait([
        digital.sex,
        '는 ',
        digital.uma_sex_title,
        '짱들을 응원하는 것 외에도 여러 가지 생각을 하고 있는 모양이다.',
      ]);
      await era.printAndWait([
        '그런 생각을 하는 사이 ',
        digital.get_colored_name(),
        '이(가) 멀리서 달려왔다.',
      ]);
      await era.printAndWait('응? 얼굴이 빨갛네?');
      await era.printAndWait('다친 건가? 오늘은 평소보다 조금 늦기도 했고.');
      await you.say_and_wait('디지! 멈춰 봐!');
      await digital.say_and_wait('네?!');
      await era.printAndWait([
        '놀라서 멈춰 선 ',
        digital.get_colored_name(),
        '에게 성큼성큼 다가갔다.',
      ]);
      await era.printAndWait([
        '쪼그려 앉아 ',
        digital.get_colored_name(),
        '의 다리를 꼼꼼히 살폈다.',
      ]);
      await digital.say_and_wait(['저기…… ', callname, '?']);
      await era.printAndWait('음…… 적어도 부은 데는 없네……');
      await you.say_and_wait('다리 다쳤어? 보건실에 갈까?');
      await digital.say_and_wait('네?');
      await era.printAndWait([
        '큰일이다. ',
        digital.get_colored_name(),
        '은(는) 아직 눈치채지 못한 것 같다. 일단 살펴봐야겠다.',
      ]);
      await era.printAndWait(
        '우선 무릎. 왼손으로 바깥쪽 돌출부를 받치고 오른손으로 안쪽 인대를 살짝 눌러 본다. 음, 굳은 느낌은 없다.',
      );
      await digital.say_and_wait('저, 잠깐만요……');
      await era.printAndWait(
        '다음은 허벅지. 대퇴이두근도 대퇴직근도 잘 이완되어 있다.',
      );
      await digital.say_and_wait('일단…… 멈춰 주실래요?');
      await you.say_and_wait('그럴 수는 없지!');
      await era.printAndWait('다음은 종아리. 상태가 아주 좋아 보인다.');
      await era.printAndWait(
        '마지막은 발. 신발을 벗겨야 하는데, 그냥 벗겼다가 상처가 있으면 더 다칠 수도 있어……',
      );
      await digital.say_and_wait([callname, '! 저 괜찮아요!']);
      await you.say_and_wait('그럼 오늘 왜 이렇게 이상한 거야?');
      await era.printAndWait([
        '허리를 굽힌 채 고개를 들어 ',
        digital.get_colored_name(),
        '의 얼굴을 봤다. 아까보다 더 빨갛다.',
      ]);
      await digital.say_and_wait('그게…… 일단! 일단 훈련실에서 설명할게요!');
      await you.say_and_wait('하지만……');
      await digital.say_and_wait('……');
      await era.printAndWait([
        digital.get_colored_name(),
        '은(는) 말없이 ',
        you.get_colored_name(),
        '을(를) 바라보고 있다.',
      ]);
      era.drawLine();
      await you.say_and_wait('그럼 설명해 줄래? 다리는 괜찮은 거지?');
      await digital.say_and_wait(
        '그…… 먼저 말씀드리자면, 다리는 정말 괜찮아요.',
      );
      await you.say_and_wait('……그럼 왜……');
      await era.printAndWait([
        digital.get_colored_name(),
        '은(는) 고개를 숙이고 손가락을 꼼지락거리며 한마디씩 겨우 말을 꺼냈다.',
      ]);
      await digital.say_and_wait('사실…… 제가…… 그 뒤로…… 어……');
      await era.printAndWait([
        '말을 하다 말고 ',
        digital.get_colored_name(),
        '은(는) 다시 한숨을 쉬었다.',
      ]);
      await you.say_and_wait('내가 먼저 얘기할게.');
      await you.say_and_wait('여기서는 얘기하기 좀 그렇네. 밖으로 나가자.');
      await digital.say_and_wait('……아.');
      await era.printAndWait(
        '자리에서 일어나 훈련실 문을 열고, 훈련장으로 가서 관중석에 올랐다.',
      );
      await era.printAndWait([
        '트랙. 아침 햇살은 부지런히 훈련하는 ',
        digital.uma_sex_title,
        '들에게 최고의 커피다.',
      ]);
      await digital.say_and_wait(['저기, ', callname, '?']);
      await you.say_and_wait('다음 장소로 가자.');
      await digital.say_and_wait('네?');
      await era.printAndWait([
        digital.get_colored_name(),
        '이(가) 뒤따라온다.',
      ]);
      await era.printAndWait('강가. 한낮의 햇살을 받은 강물이 눈부시다.');
      await digital.say_and_wait([callname, ', 혹시……']);
      await era.printAndWait(
        '신사. 오후의 얼룩진 나무 그늘이 참배하는 곳을 가려 준다.',
      );
      await digital.say_and_wait('……');
      await era.printAndWait(
        '공원. 해가 퇴근하기도 전에 가로등이 먼저 출근했다.',
      );
      await digital.say_and_wait('……');
      await era.printAndWait(
        '바닷가. 가로등 없는 푸른 해안에는 달빛만이 비친다.',
      );
      await digital.say_and_wait('……');
      await digital.say_and_wait(
        '한 바퀴를 따라다니고 나니 이제 아무래도 좋다는 생각이 들어요.',
      );
      await you.say_and_wait('그거면 됐다.');
      await digital.say_and_wait([callname, '.']);
      await you.say_and_wait('응.');
      await digital.say_and_wait('좋아해요.');
      era.print(['이 순간, ', you.get_colored_name(), '의 선택:']);
      era.printButton('받아들인다', 1);
      era.printButton('거절한다', 2);
      const ret = await era.input();
      await digital.print_and_wait([
        '꼴사납다. 고백까지 ',
        callname,
        '이(가) 이끌어 줘야 하다니.',
      ]);
      if (ret === 1) {
        await digital.print_and_wait('그래도 성공했다.');
        await digital.print_and_wait('그래, 성공했다.');
        await digital.print_and_wait(
          '좀 더 기뻐해야 할 텐데, 지금 느끼는 건 그보다는……',
        );
        await digital.print_and_wait('차오르는 행복감.');
      } else {
        await digital.print_and_wait('하하하하, 결국 실패했다.');
        await digital.print_and_wait([
          '하지만 깨달았다. 나와 ',
          callname,
          '의 관계는 단순한 남녀 관계만이 아니다.',
        ]);
        await digital.print_and_wait('훨씬 복잡한 감정이 있다……');
        await digital.print_and_wait(
          '생각도 많이 했고 쓰고 싶은 것도 많은데, 펜이 움직이지 않는다…… 공책까지 젖어 버렸다……',
        );
        await digital.print_and_wait('역시 분하다……');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  '74-after': (() => {
    const title = '한 번 안 되면 두 번째가 있는 거죠. 당연하잖아요!';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (digital, you) => {
      await digital.print_and_wait(
        '디지땅은 디지땅은, 시간이 꽤 흘러서 드디어 고통의 심연에서 빠져나왔지만!',
      );
      await digital.print_and_wait(
        '하지만 그렇게 생각하니 역시! 역시 좋아! 역시 너무너무 좋아!',
      );
      await digital.print_and_wait(
        '그러니까 다시 한 번 더! 이번에야말로 디지땅은 꼭 성공할 거야!',
      );
      era.print(['다시 한 번, ', you.get_colored_name(), '의 선택은 :']);
      era.printButton('받아들인다', 1);
      era.printButton('거절한다', 2);
      const ret = await era.input();
      if (ret === 1) {
        await digital.print_and_wait('우아아아아앙! 해냈어!!');
        await digital.print_and_wait('왜냐고요?');
        await digital.print_and_wait(
          '그건 중요하지 않아. 성공했다는 게 중요한 거지!',
        );
      } else {
        await digital.print_and_wait('아니, 이건 아니지 않아?');
        await digital.print_and_wait('으아아아아, 안 돼!');
        await digital.print_and_wait(
          '디지땅이라도, 나에게도 자존심이라는 게 있다구!',
        );
        await digital.print_and_wait('반드시, 쟁취하고 말겠어!');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  '89-first': (() => {
    const title = '동거! 역시 이렇게 되는 거겠죠?';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} machan マチカネタンホイザ
     * @param {CharaTalk} tarumae ホッコータルマエ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} y_call_d プレイヤーのアグネスデジタルへの呼び方
     * @param {string} child プレイヤーの子どもへの呼び方
     * @param {string} parent プレイヤーと子どもとの関係
     */
    const f = async (
      digital,
      mcqueen,
      coffee,
      tachyon,
      machan,
      tarumae,
      you,
      callname,
      y_call_d,
      child,
      parent,
    ) => {
      await era.printAndWait(
        '바쁜 하루를 마치고 집에 돌아왔는데 부엌에서 음식 냄새가 나고 누군가 흥얼거리는 소리가 들린다면, 대형 트럭에 치여 기억을 잃기라도 한 게 분명하다.',
      );
      await era.printAndWait([
        '그러고 보니 언제부터 ',
        y_call_d,
        '은(는) 열쇠를 가지고 ',
        you.get_colored_name(),
        '의 집에 드나들게 되었더라.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 또렷이 기억한다. 어느 날 밤, 어느 해변에서 ',
        y_call_d,
        '이(가) ',
        you.get_colored_name(),
        '에게 고백했고, 그 뒤로 자연스럽게 ',
        y_call_d,
        '은(는) ',
        you.get_colored_name(),
        '의 연인이 되었다.',
      ]);
      await era.printAndWait(
        '사실…… 사귀게 되어도 평소 하던 일과 별로 다를 게 없었다……',
      );
      await era.printAndWait('여전히 함께 덕질하고, 함께 성지 순례를 다녔다.');
      await era.printAndWait('그다음은?');
      await digital.say_and_wait('안 돼, 이래서는 달라진 게 없잖아!');
      await digital.say_and_wait('예전에 했던 추측이 맞았나? 아니야!');
      await era.printAndWait([
        '음…… 뭔가 변화를 주려고 ',
        y_call_d,
        '은(는) 어떤 동인지를 참고해 ',
        you.get_colored_name(),
        '에게 열쇠를 빌린 모양이다.',
      ]);
      await era.printAndWait(
        '하지만 빌려 간 뒤 며칠 동안은 아무 일도 없었다. 그저 잠깐 그런 기분이 들었나 보다 하고 잊어버렸다.',
      );
      await era.printAndWait([
        '그래서 어느 날, ',
        you.get_colored_name(),
        '은(는) 지친 몸을 이끌고 와 겨우 열쇠를 꽂은 채 정신이 가물가물해지던 중, 금속이 부딪히는 소리 말고 다른 소리를 듣고 조금 놀랐다.',
      ]);
      await era.printAndWait([
        '그 후로 ',
        y_call_d,
        '이(가) ',
        you.get_colored_name(),
        '의 집에 찾아오는 횟수는 점점 늘어났다.',
      ]);
      await era.printAndWait('단조롭던 집 안에 다른 색깔이 스며들기 시작했다.');
      await era.printAndWait([
        '다만 ',
        you.get_colored_name(),
        '에게 가장 우스워 웃음이 났던 건, 가장 먼저 ',
        you.get_colored_name(),
        '의 방을 점령한 것이……',
      ]);
      await era.printAndWait([
        '온갖 ',
        digital.uma_sex_title,
        ' 굿즈였다는 사실이다.',
      ]);
      await era.printAndWait([
        '예를 들면 ',
        tachyon.get_colored_name(),
        '의 찻잔, ',
        coffee.get_colored_name(),
        '의 커피잔, ',
        mcqueen.get_colored_name(),
        '의 마우스 패드, ',
        machan.get_colored_name(),
        '의 봉제 인형……',
      ]);
      await era.printAndWait([
        '그중에서도 ',
        you.get_colored_name(),
        '을(를) 놀라게 한 건 토마촙 인형까지 있었다는 점이다. ',
        tarumae.get_colored_name(),
        '의 고향, 토마코마이의 그 마스코트 말이다!',
      ]);
      await era.printAndWait([
        '어느 날 집에서 ',
        y_call_d,
        '이(가) 방에 놓겠다며 건조기를 옮기는 모습을 보고, ',
        you.get_colored_name(),
        '은(는) 이제 더는 참을 수 없다고 생각했다! 묵직한 한 방을 날릴 때다!',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '에게도 세상에서 가장 희귀하다는 ',
        y_call_d,
        '의 굿즈가 있다. 우승 깃발이나 원형 봉제 인형 같은 것들…… 다만 대부분은 훈련실에 있거나 공식 기관에서 보관 중이다.',
      ]);
      await era.printAndWait([
        '가자! 마트로 가서 ',
        y_call_d,
        '의 굿즈를 종류별로 몇 세트씩 전부 사 오는 거야!',
      ]);
      await era.printAndWait('직원에게 집 앞까지 배달해 달라고 하자!');
      await era.printAndWait([
        '만족스럽게 ',
        y_call_d,
        '이(가) 각 레이스에서 활약한 모습을 다시 감상한다. 인형은 소파에 하나, 침대에 하나, 컴퓨터에 하나, 텔레비전에 하나……',
      ]);
      await era.printAndWait([
        '그리고 줄곧 소중히 간직해 온 ',
        y_call_d,
        '의 작품을 은밀한 구석에서 꺼내 소파 옆으로 옮긴다……',
      ]);
      await era.printAndWait([
        '하하하하, 완성! 당장 ',
        y_call_d,
        '의 표정이 보고 싶다!',
      ]);
      await era.printAndWait('그런데 결과는——');
      await era.printAndWait([
        '그 광경은 ',
        y_call_d,
        '에게 너무 큰 충격이었던 모양이다. ',
        you.get_colored_name(),
        '은(는) ',
        digital.sex,
        '의 두 뺨이 점점 빨개지다가 쿵 하고 쓰러지는 모습을 지켜볼 수밖에 없었다.',
      ]);
      await era.printAndWait(
        '이런 재미있는 일들을 빼면 일상은 좀 더 담백했다.',
      );
      await era.printAndWait(
        '밥솥을 열면 하얀 김이 피어오르는 쌀밥처럼 담담했다.',
      );
      await era.printAndWait([
        '그래서 ',
        you.get_colored_name(),
        '과(와) ',
        y_call_d,
        '의 아이가 태어났을 때, 기쁨과 함께 어느새 이렇게 시간이 흘렀나 하고 문득 깨달았다.',
      ]);
      await era.printAndWait([
        '돌이켜 보면 ',
        digital.sex_code === 1 ? '자신' : y_call_d,
        '의 임신을 알게 되었을 때의 기억도 흐릿해서 잘 잡히지 않고, 따스한 감정 한 줄기만 남아 있다.',
      ]);
      await era.printAndWait([
        '처음부터 ',
        child,
        '은(는) 손이 많이 가지 않는 아이였다. ',
        y_call_d,
        '이나 각종 ',
        digital.uma_sex_title,
        ' 굿즈를 보면 얌전해졌고, 가끔 ',
        y_call_d,
        '을(를) 따라 이상한 소리를 내는 정도였다.',
      ]);
      await era.printAndWait([
        child,
        '은(는) ',
        y_call_d,
        '을(를) 닮았다. ',
        digital.sex,
        '는 어릴 때부터 ',
        digital.uma_sex_title,
        '를 좋아했고, 특히 텔레비전 앞에서 ',
        y_call_d,
        '의 라이브를 보는 걸 좋아했다.',
      ]);
      await era.printAndWait([
        '아니, 그보다는 ',
        you.get_colored_name(),
        '이(가) ',
        parent,
        '로서 자주 ',
        y_call_d,
        '의 영상을 틀어 줬기 때문일까?',
      ]);
      await era.printAndWait([
        '그렇게 ',
        you.get_colored_name(),
        '과(와) ',
        child,
        '이(가) 영상을 볼 때마다 ',
        y_call_d,
        '은(는) 처음에는 증기 기관처럼 김을 뿜으며 방으로 도망가 가습기 역할을 했지만, 나중에는 ',
        you.get_colored_name(),
        '에게 기대어 ',
        child,
        '을(를) 안고 함께 보게 되었다.',
      ]);
      await era.printAndWait([
        '어쨌든 ',
        child,
        '은(는) 정성 어린 보살핌을 받으며 건강하게 자랐다.',
      ]);
      await era.printAndWait([
        digital.uma_sex_title,
        '는 성장이 빠르다. 눈 깜짝할 사이에 ',
        digital.sex,
        '는 트레센 학원에 들어갈 나이가 되었다.',
      ]);
      await era.printAndWait([
        '그래서 ',
        y_call_d,
        '과(와) 상의했다. ',
        y_call_d,
        '은(는) ',
        child,
        '의 ',
        digital.uma_sex_title,
        ' 사랑을 생각하면 ',
        digital.sex,
        '를 혼자 입학식에 보냈다가는 큰일이 날 것 같다고 했다.',
      ]);
      await era.printAndWait([
        '그래도 이 일은 ',
        digital.sex,
        '가 직접 겪어 보는 편이 낫겠다고 결론을 내렸다.',
      ]);
      await era.printAndWait([
        '하지만 떠나보내기 전날 밤, ',
        y_call_d,
        '은(는) 다시 짐을 정리하며 뭔가 더 챙겨 주려고 했다.',
      ]);
      await era.printAndWait([
        '집은 트레센에서 이렇게 가깝고, ',
        you.get_colored_name(),
        '은(는) 트레센의 트레이너다. ',
        child,
        '은(는) 언제든 만날 수 있다. 그런데도 ',
        you.get_colored_name(),
        ' 역시 필요한 물건이 빠진 건 없을까 걱정하고 있었다.',
      ]);
      await era.printAndWait([
        y_call_d,
        '도 웃으며 이러다 영영 헤어지는 줄 알겠다고 말했다.',
      ]);
      await era.printAndWait([
        child,
        '은(는) 큰 소리로 울었고, 두 사람은 한참 동안 달래 주었다.',
      ]);
      await era.printAndWait([
        '하지만 내일은 결국 오늘이 된다. 이제 ',
        digital.sex,
        '가 학원으로 떠날 시간이다.',
      ]);
      await era.printAndWait(
        '밤안개는 아직 걷히지 않았고, 먼 하늘에는 붉은빛이 희미하게 감돌았다. 가로등도 아직 켜져 있었다.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '과(와) ',
        y_call_d,
        '은(는) 짐을 들고 ',
        child,
        '과(와) 함께 아래층으로 내려왔다.',
      ]);
      await era.printAndWait([
        '사실 ',
        child,
        '은(는) 직접 들고 내려가겠다고 고집했지만, ',
        you.get_colored_name(),
        '도 ',
        y_call_d,
        '도 손을 놓지 않았다.',
      ]);
      await era.printAndWait(['말로는 이길 수 없어 ', child, '도 포기했다.']);
      await era.printAndWait([
        '눈앞은 ',
        digital.uma_sex_title,
        ' 전용 도로다. 이 길을 따라가면 금방 트레센에 도착한다. ',
        digital.uma_sex_title,
        '라면 택시조차 탈 필요가 없다.',
      ]);
      await era.printAndWait([
        '짐을 내려놓는다. 양이 많지는 않지만 ',
        you.get_colored_name(),
        '에게는 꽤 무거웠다. ',
        y_call_d,
        '은(는) 훨씬 더 많은 짐을 들고 있었다.',
      ]);
      await era.printAndWait([
        '아, 어젯밤 잠도 제대로 못 자고 아침 일찍 일어나 짐을 옮겼더니, ',
        you.get_colored_name(),
        '은(는) 조금 멍해졌다.',
      ]);
      await era.printAndWait([
        y_call_d,
        '은(는) 걱정스러운 듯 몸으로 ',
        you.get_colored_name(),
        '을(를) 받쳐 주었다. 하지만 ',
        digital.sex,
        '의 눈을 보고 ',
        you.get_colored_name(),
        '은(는) ',
        digital.sex,
        '도 잠이 부족하다는 걸 알 수 있었다.',
      ]);
      await era.printAndWait([
        '어라? ',
        you.get_colored_name(),
        '은(는) 주위를 둘러봤다. ',
        child,
        '은(는)?',
      ]);
      await era.printAndWait(['아아! ', y_call_d, '의 곁에 있었다.']);
      await era.printAndWait([
        child,
        '은(는) ',
        y_call_d,
        '을(를) 꼭 안은 다음 ',
        you.get_colored_name(),
        '도 꼭 안았다.',
      ]);
      await era.printAndWait([
        '무척 가볍다. 꼭 끌어안지 않으면 ',
        digital.sex,
        '의 존재가 느껴지지 않을 정도다. 한창 자랄 때인 ',
        digital.sex,
        '도 키가 그리 크지 않아 ',
        y_call_d,
        '과(와) 비슷했다.',
      ]);
      await you.say_as_passer_by_and_wait(child, '그럼 다녀올게! 안녕!');
      await era.printAndWait([
        '손을 흔들며 ',
        child,
        '은(는) 달리기 시작했다.',
      ]);
      await era.printAndWait('어! 잠깐, 짐 안 가져갔잖아!');
      await era.printAndWait([
        '다급히 ',
        y_call_d,
        '에게 뒤쫓아 가 달라고 하려 했지만, ',
        y_call_d,
        '은(는) ',
        child,
        '이(가) 멀어진 쪽을 바라보고만 있었다.',
      ]);
      await era.printAndWait('잠깐! 왜 그래?');
      await digital.say_and_wait([
        callname,
        ', ',
        child,
        '은(는) 트레센에 있을 테니 나중에 ',
        digital.sex,
        '에게 가져다주면 되잖아요?',
      ]);
      await you.say_and_wait([
        '아니, ',
        y_call_d,
        ', ',
        child,
        '…… ',
        digital.sex,
        '! ',
        digital.sex,
        '……',
      ]);
      await era.printAndWait(
        '늘 다니던 교차로가 막히고, 늘 가던 가게가 문을 닫고, 늘 하던 게임이 서비스를 종료한 것 같은……',
      );
      await era.printAndWait([
        '영원히 변하지 않으리라 믿었던 것이 갑자기 사라져 버리는, 그 허망함이 지금 ',
        you.get_colored_name(),
        '의 마음속을 가득 채웠다.',
      ]);
      await era.printAndWait([
        '눈을 크게 뜨고 바라봐도 ',
        child,
        '의 모습은 이미 보이지 않았다.',
      ]);
      await you.say_and_wait([y_call_d, '! 이게, 대체 어떻게 된 거야! 왜……']);
      await digital.say_and_wait(
        '들어 본 적 있어요. 환상이라느니, 병이라느니, 심령 현상이라느니……',
      );
      await digital.say_and_wait([
        '세상에서는 마음의 병이라고들 해요…… 감염 경로는 알 수 없고, 대상은 ',
        digital.uma_sex_title,
        '와 접촉한 사람들뿐이라고……',
      ]);
      await era.printAndWait(
        '그럼…… 왜…… 만들어진 건, 그저 갈라놓기 위해서였단 말이야?',
      );
      await era.printAndWait([
        '멍하니 있던 ',
        you.get_colored_name(),
        '은(는) 문득 깨달았다. ',
        y_call_d,
        '은(는) 트레센 쪽을 바라보며 더는 아무 말도 하지 않고 있었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 퍼뜩 정신이 들었다. ',
        y_call_d,
        '과(와) ',
        you.get_colored_name(),
        '의 마음은 같았다.',
      ]);
      await era.printAndWait([
        '평소 트레이너로서 ',
        y_call_d,
        '을(를) 지탱해 주던 ',
        you.get_colored_name(),
        '. 이번에는 ',
        digital.sex,
        '가 ',
        you.get_colored_name(),
        '을(를) 지탱해 주고 있었다.',
      ]);
      await era.printAndWait([
        digital.sex,
        '는 최대한 차분한 말투로 ',
        you.get_colored_name(),
        '의 쓸쓸함을 덜어 주려 했다. 뒤에서 ',
        y_call_d,
        '을(를) 끌어안자 ',
        y_call_d,
        '이(가) 떨고 있었다.',
      ]);
      await era.printAndWait('원래도 작은 몸이 더욱 여려 보였다.');
      await era.printAndWait(
        '잔잔한 호수에 돌 하나가 떨어져 커다란 물결을 일으켰다.',
      );
      await digital.say_and_wait('……흐으으……');
      await digital.say_and_wait('저…… 진작 알고 있었어요……');
      await digital.say_and_wait('사실은…… 저…… 디지땅은…… 진작……');
      await digital.say_and_wait(
        '어느 시기의 기억이 그렇게 흐릿하다는 걸 깨달았을 때……',
      );
      await digital.say_and_wait(
        '집에 있는 육아용품이 줄어들지 않는다는 걸 알아챘을 때……',
      );
      await digital.say_and_wait('예전에 그렸던 동인지를 펼쳤을 때……');
      await digital.say_and_wait('그때…… 이미 알고 있었어요……');
      await digital.say_and_wait([
        '제가 ',
        callname,
        '을(를) 너무 사랑해서…… 그 이상으로 나아갈 수가 없었어요……',
      ]);
      await digital.say_and_wait(['게다가…… ', callname, '도 영향을 받아서……']);
      await digital.say_and_wait([
        '그래서…… ',
        child,
        '이(가) 태어난 거예요……',
      ]);
      await digital.say_and_wait(['그게 ', digital.sex, '의 전부예요……']);
      await era.printAndWait([
        '그렇게 ',
        y_call_d,
        '의 울먹이는 목소리를 들으며 ',
        you.get_colored_name(),
        '은(는) 비로소 이해했다. ',
        child,
        '은(는) ',
        y_call_d,
        '의 소망이 빚어낸 존재였다.',
      ]);
      await digital.say_and_wait([
        '만약…… 방금 일을 잊어버리면…… 다시 ',
        child,
        '을(를) 만날 수 있어요……',
      ]);
      await digital.say_and_wait([
        '만약…… 기억한다면 ',
        child,
        '은(는)…… 정말로 사라져 버려요……',
      ]);
      await digital.say_and_wait(
        '후후후…… 결국 현실을 마주할지 말지 선택하는 거네요…… 이거야말로 마음의 병 그 자체잖아요……',
      );
      era.printButton('기억한다 (관계를 진전시킨다)', 1);
      era.printButton('잊는다 (아직 진전시키지 않는다)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await you.say_and_wait('아니야!');
        await you.say_and_wait([
          child,
          '…… ',
          digital.sex,
          '는 네 상상이 아니야! ',
          digital.sex,
          '는 우리 사랑의 증거야!',
        ]);
        await era.printAndWait([
          '두 사람이 걸음을 멈췄을 때 ',
          child,
          '이(가) ',
          y_call_d,
          '과(와) ',
          you.get_colored_name(),
          '의 손을 이끌어 줬다.',
        ]);
        await you.say_and_wait([
          child,
          '…… ',
          digital.sex,
          '가 가르쳐 준 거야. 이제 더 가까워질 때라고!',
        ]);
        await era.printAndWait([
          '조심스럽게 ',
          y_call_d,
          '의 몸을 돌려 마주 보자, ',
          y_call_d,
          '의 눈물이 잦아들던 눈가가 다시 젖어 들었다.',
        ]);
        await digital.say_and_wait('그 말은?');
        await you.say_and_wait([y_call_d, ', 결혼하자.']);
        await digital.say_and_wait(
          '하하하…… 이런 걸 걱정했다니, 저 정말 바보네요……',
        );
        await era.printAndWait([
          y_call_d,
          '은(는) 웃었다. 눈가의 눈물은 진주가 되었고, 그것은 ',
          you.get_colored_name(),
          '에게 가장 소중한 것이었다.',
        ]);
        await era.printAndWait([you.get_colored_name(), '은(는) 입을 맞췄다.']);
        await era.printAndWait('짭짤하다.');
        await era.printAndWait('벅찬 감정에서 흘러나온 눈물이겠지.');
        await era.printAndWait('씁쓸하다.');
        await era.printAndWait('분함에서 흘러나온 눈물이겠지.');
        await era.printAndWait('……달콤하다.');
        await era.printAndWait('이제는 눈물이 아니겠지.');
        await era.printAndWait('혀가 얽히고, 몸이 맞닿고, 두 손이 포개진다.');
        await era.printAndWait(['이제 누구도 두 사람을 갈라놓을 수 없다.']);
      } else {
        await era.printAndWait(
          '모든 일은 악몽 같았고, 실제로는 아무 일도 일어나지 않았다.',
        );
        await era.printAndWait([
          '두 사람의 ',
          child,
          '은(는) 평범하게 트레센에 입학했고, ',
          you.get_colored_name(),
          '은(는) ',
          parent,
          '이자 ',
          child,
          '의 트레이너가 되었다.',
        ]);
        await era.printAndWait([
          y_call_d,
          '은(는) ',
          digital.sex_code === 1 ? '아버지' : '어머니',
          '로서 자주 ',
          child,
          '과(와) 함께 훈련한다.',
        ]);
        await era.printAndWait(
          '큰 쪽과 작은 쪽이 (큰 쪽도 작긴 하지만) 나란히 훈련하는 모습은 보기 드문 광경이다.',
        );
        await era.printAndWait([
          '앞으로 ',
          child,
          '의 성장을 생각해 ',
          you.get_colored_name(),
          '은(는) ',
          digital.sex,
          '가 트레센에서 지내기를 바랐다.',
        ]);
        await era.printAndWait([
          '하지만 ',
          digital.sex,
          '는 아직 부모 곁이 좋은 모양이다. 고집을 꺾을 수 없어 당분간 ',
          digital.sex,
          '가 집에서 다니게 하기로 했다.',
        ]);
        await era.printAndWait([
          '모든 것이 평범했다. ',
          child,
          '이(가) 예전의 ',
          y_call_d,
          '처럼 툭하면 존사한다는 것만 빼면. 음…… ',
          y_call_d,
          '도 지금 별반 다르지 않지만.',
        ]);
        await era.delay(1000);
        era.println();
        await digital.say_and_wait('……');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  '89-after': (() => {
    const title = '결국 덧없는 물거품';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {string} child プレイヤーの子どもへの呼び方
     */
    const f = async (digital, you, callname, child) => {
      await you.say_and_wait([
        '주말인데, 바쁜 와중에 잠시라도 ',
        child,
        '을 보러 갈까?',
      ]);
      await you.say_and_wait([
        '학생 기숙사 입구에 도착해서, ',
        child,
        '에게 전화를 걸려던 참에……',
      ]);
      await digital.say_and_wait([
        '……팔코의…… 가장 빛나는 무대?',
        callname,
        ', 여기서 뭐 하세요?',
      ]);
      era.printButton(`무슨 소리야, ${child}을 기다리고 있잖아.`, 1);
      await era.input();
      await era.printAndWait([
        '그 말을 들은 ',
        digital.get_colored_name(),
        '은, 왠지 모르게 고개를 숙였다.',
      ]);
      await digital.say_and_wait(
        [
          '……이, 이제 때가 된 건가…… 다, 다시 한 번 ',
          callname,
          '에게 진실을 말해야 하는 건가……',
        ],
        true,
      );
      await digital.print_and_wait('난 어떻게 해야……');
      era.printButton('말한다', 1);
      era.printButton('말하지 않는다', 2);
      const ret = await era.input();
      if (ret === 1) {
        await digital.say_and_wait(
          '나…… 나는 다시 진실을 알리는 것이 오직…… 눈물만을 가져올 거라 생각했지만——',
          true,
        );
        await digital.say_and_wait(
          [
            '하지만, 이런 기분…… ',
            callname,
            '에게 안겨 청혼받는 이 기분은…… 정말이지 너무나도 좋아……',
          ],
          true,
        );
      } else {
        await digital.say_and_wait([
          '아뇨, 역시 관두죠. ',
          callname,
          '와 ',
          child,
          '과 함께하는 매일매일이, 정말로 행복하니까요.',
        ]);
        await digital.say_and_wait(
          '저는 이런 나날들이 계속 이어지기를 바라요. 부디 저를 용서해 주세요.',
          true,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  99: (() => {
    const title = '편지';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} y_call_d プレイヤーのアグネスデジタルへの呼び方
     * @param {string} child プレイヤーの子どもへの呼び方
     */
    const f = async (digital, you, callname, y_call_d, child) => {
      await you.say_as_unknown_and_wait(
        '디지털 선생님의 신간이 발매된다는 소문 들었어?',
      );
      await you.say_as_unknown_and_wait(
        '에? 정말? 그렇게 오랫동안 소식이 없더니, 드디어 신간을 볼 수 있는 거야?',
      );
      await you.say_as_unknown_and_wait(
        '바로 다음 달 도쿄 전시회에서 나온다나 봐!',
      );
      era.println();
      await era.printAndWait(
        '그러니까…… 대체 누가 이런 헛소문을 퍼뜨린 거야!!',
      );
      await era.printAndWait([
        '며칠 지나지 않아 인터넷에서 화제가 되더니, 이제 모든 디지털 선생님의 팬들은 ',
        y_call_d,
        '이 다음 달에 신간을 낼 거라고 믿고 있다.',
      ]);
      await era.printAndWait([
        y_call_d,
        '이(가) 그 글들을 보고 가장 먼저 느낀 건…… 죄책감이었다.',
      ]);
      await digital.say_and_wait(
        '곰곰이 생각해보니…… 제가 신간을 안 낸 지 꽤 오래됐네요…… 아이고, 정말 면목 없습니다.',
      );
      await era.printAndWait(
        '화면을 향해 고개를 숙이며, 화면 너머의 팬들에게 사과했다.',
      );
      await era.printAndWait([
        '이어서 ',
        y_call_d,
        '은 몸을 돌려 ',
        you.get_colored_name(),
        '의 손을 잡았다. 눈에는 눈물이 그렁그렁 맺힌 채, 금방이라도 울 것 같은 표정을 지었다.',
      ]);
      await era.printAndWait([
        '에휴, 또 시작이군. ',
        you.get_colored_name(),
        '은(는) 생각했다.',
      ]);
      await era.printAndWait([
        '이것은 ',
        digital.sex,
        '가 집필을 위해 은둔을 시작한다는 뜻이며, 앞으로의 집안일이나 식사 준비 등은 전부 ',
        you.get_colored_name(),
        '의 몫이 된다는 것을 의미한다.',
      ]);
      await era.printAndWait(
        '그다지 힘든 일은 아니지만, 다만 이런 날들 동안에는 조금 부족해지는 게 있다……',
      );
      await era.printAndWait([
        y_call_d,
        '로부터 얻는 에너지. ',
        y_call_d,
        '을 보충할 수도 없고, 머리를 쓰다듬거나 귀를 만지작거리거나 꼬리를 깨물 수도 없게 된다……',
      ]);
      await digital.say_and_wait('부탁드려요!');
      await you.say_and_wait('내가 널 하루 이틀 보나.');
      await era.printAndWait(
        '결국 또 허락하고 말았다. 그러고 보니 거절한 적이 있었던가?',
      );
      era.drawLine();
      await era.printAndWait([
        '청소하는 동안 어깨와 등에 느껴지는 뻐근함이 ',
        you.get_colored_name(),
        '에게 운동이 필요함을 일깨워주었다.',
      ]);
      await era.printAndWait(
        '빗자루질하고, 걸레질하고. 로봇 청소기를 하나 살까 생각도 해봤지만, 진열장은 로봇이 닦아주지 않는다는 사실을 깨달았다.',
      );
      await era.printAndWait([
        '그렇다. ',
        you.get_colored_name(),
        '의 집에서 가장 청소하기 까다로운 곳은 진열장이다. 수많은 진열장과 수많은 굿즈들.',
      ]);
      await era.printAndWait('에휴, 먼지털이로 가볍게 먼지만 털어내자.');
      await era.printAndWait([
        '문득 하얀색 사진 한 장이 ',
        you.get_colored_name(),
        '의 시선을 끌었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '에게 따뜻한 감정을 불러일으킨 사진은 ',
        you.get_colored_name(),
        '과 ',
        y_call_d,
        '의 결혼사진이었다.',
      ]);
      await era.printAndWait([
        '새하얀 ',
        digital.sex_code === 1 ? '정장' : '웨딩드레스',
        ' 차림의 분홍빛 ',
        digital.uma_sex_title,
        '. 머리 위 붉은 리본은 존재감을 드러내고, 가녀린 목과 지켜 주고 싶은 손, 그리고 눈물이 고인 회청색 두 눈이 보인다.',
      ]);
      await era.printAndWait([
        '얼마 지나지 않은 것 같은데, ',
        digital.sex_code === 1 ? '정장' : '웨딩드레스',
        ' 차림의 ',
        y_call_d,
        '은(는) 눈앞에 있는 듯하면서도, 어느새 몇 년이 흐른 것만 같다.',
      ]);
      await era.printAndWait([
        '어쨌든 이 결혼사진을 보는 것만으로도 ',
        you.get_colored_name(),
        '은(는) 꽤 많은 에너지를 보충할 수 있었다.',
      ]);
      await era.printAndWait(
        '소중한 추억이 깃든 물건들 위주로만 청소하기로 했다.',
      );
      await era.printAndWait([
        '문을 열고 수집품 보관실에 들어간다. 사방이 투명한 커다란 진열장 여러 개가 온갖 ',
        digital.uma_sex_title,
        '의 갖가지 굿즈로 가득 차 있다.',
      ]);
      await era.printAndWait([
        '이 방은 원래 손님용이었으나, ',
        y_call_d,
        '이 수집하는 물건들이 늘어나면서 거실 진열장만으로는 부족해져 아예 방 하나를 비워 굿즈방으로 만들게 된 것이다.',
      ]);
      await era.printAndWait([
        '참고로 ',
        you.get_colored_name(),
        '이(가) 예전에 모았던 ',
        y_call_d,
        '의 굿즈들은 가장 안쪽 진열장에 보관되어 있다.',
      ]);
      await era.printAndWait([
        '에휴, 예전에 ',
        digital.sex,
        '가 「아와와와! 안 돼요 안 돼, 역시 너무 부끄러워요!」라며 고집을 피우는 바람에 결국 여기까지 밀려나게 된 것이다.',
      ]);
      await era.printAndWait([
        y_call_d,
        '의 굿즈가 놓인 진열장 앞에 서니, 다양한 모습의 ',
        y_call_d,
        '이 예전의 장면들을 떠올리게 해 ',
        you.get_colored_name(),
        '을(를) 미소 짓게 했다.',
      ]);
      await era.printAndWait([
        '펜라이트를 높이 들고 침을 흘리는 ',
        y_call_d,
        '. 다른 ',
        digital.uma_sex_title,
        '에게도 이런 굿즈가 있을 것 같지는 않다.',
      ]);
      await era.printAndWait([
        '구경하며 걷다 보니 어느덧 진열장의 끝에 다다랐고, 그곳에서 ',
        you.get_colored_name(),
        '은(는) 발견했다—— 한 더미의 짐들을.',
      ]);
      await era.printAndWait('이건……');
      await era.printAndWait([
        '기억났다. ',
        child,
        '의 짐이다. ',
        digital.sex,
        '의 짐.',
      ]);
      era.drawLine();
      await digital.print_and_wait(
        '아이고, 드디어 대충 끝났다. 남은 건…… 오오오…… 밥 먹을 시간이다.',
      );
      await digital.print_and_wait('오늘 밥은 뭘까~');
      await digital.print_and_wait('문을 열었더니 식탁 가득 차려진 요리가?!');
      await digital.print_and_wait(
        '오늘 무슨 특별한 날인가? 디지가 바빠서 잊어버린 거야?!',
      );
      await digital.print_and_wait(
        '큰일이다, 큰일이야. 디지야, 디지야, 어떻게 그걸…… 어?',
      );
      await you.say_and_wait([
        y_call_d,
        ', 그 표정은 뭔가 놓쳤다고 생각하는 거지?',
      ]);
      await digital.say_and_wait(
        '에에에?! 제, 제 잘못이에요. 바빠서 깜빡했어요! 디지는 승천해 버릴……',
      );
      await you.say_and_wait(
        '잠깐, 잠깐. 온갖 추억이 담긴 이걸 찾아서 그런 거야——',
      );
      await digital.print_and_wait([
        callname,
        '이(가) 집어 든 건…… 편지 봉투?',
      ]);
      await digital.say_and_wait(
        '요즘 같은 시대에 편지라니 드무네요. 미래에서 온 편지라든가, 유령이 보낸 편지라든가……',
      );
      await you.say_and_wait(
        '맞아. 다만 네가 생각하는 것과는 조금 다를지도 몰라.',
      );
      await digital.print_and_wait([
        callname,
        '이(가) 건넨 편지에는 봉인도 찍혀 있다. 무늬는 예전에 샀던 트레센 굿즈와 똑같다. 보낸 사람은……',
      ]);
      await digital.print_and_wait([
        '오오오오! 깜짝이야. ',
        child,
        '이(가) 보낸 편지다.',
      ]);
      await digital.say_and_wait('저편에서 온 편지?! 그런 게 정말 있어요?!');
      await digital.say_and_wait(
        '열면 공포 게임처럼 악령이 들러붙는 거 아니에요?!',
      );
      await you.say_and_wait('그럼 열어 볼까?');
      await digital.say_and_wait(
        '아뇨, 아뇨. 먼저 정화하는 게 좋겠어요. 핼러윈 승부복에 달린 그 부적을 꺼내서……',
      );
      await digital.print_and_wait(
        '사실 봉투를 든 채 같은 말만 되풀이하고 있지만, 손에는 힘이 빠진 듯 가벼운 편지조차 제대로 들고 있을 수가 없다.',
      );
      await you.say_and_wait('……');
      await digital.print_and_wait([
        callname,
        '을(를) 바라본다. ',
        you.sex,
        '……',
        you.sex,
        '도 같은 마음이겠지.',
      ]);
      await digital.print_and_wait([
        callname,
        '에게 기대어 앉았다. 의자 하나에 두 사람이.',
      ]);
      await digital.print_and_wait([
        you.sex,
        '가 손을 뻗어 나를 끌어안았다…… ',
        you.sex,
        '의 손바닥에 밴 식은땀까지 느껴진다.',
      ]);
      await digital.print_and_wait('열자.');
      await digital.print_and_wait('사락사락…… 안에 든 종이가 스치는 소리.');
      await digital.print_and_wait(
        '봉인을 떼고 봉투를 열어 접힌 편지지를 꺼낸다……',
      );
      await digital.print_and_wait('펼쳐 보자.');
      await digital.print_and_wait('편지지를 펼치자, 거기에는——');
      era.println();
      era.drawLine();
      await era.waitAnyKey();
      era.setOffset(8);
      era.setWidth(8);
      await era.printAndWait('아빠, 엄마께.');
      await era.printAndWait('고마워요.', {
        align: 'center',
        isParagraph: true,
      });
      await era.printAndWait(['——두 분의 ', child], { align: 'right' });
      era.drawLine();
      await era.waitAnyKey();
      era.setWidth(24);
      era.setOffset(0);
      era.println();
      await digital.say_and_wait('우핫, 뭐야, 역시 이렇게 쓰여 있었네!');
      await you.say_and_wait('당연하지!');
      await digital.say_and_wait('우오오오, 자, 자, 밥 먹어요. 푹 쉬자고요!');
      await digital.print_and_wait([
        '따끈하고 맛있는 요리, 피어오르는 옅은 김, 따스한 ',
        callname,
        ', 입안으로 들어오는 부드러운 함박 스테이크.',
      ]);
      await digital.print_and_wait([
        callname,
        '이(가) 반찬을 집어 건네며 짓는 미소를 보니, 제대로 음미해야겠다는 생각이 든다.',
      ]);
      await digital.print_and_wait([
        callname,
        '의 허벅지를 톡톡 두드린다. 음, 요즘 집안일로 단련됐네……',
      ]);
      await you.say_and_wait([y_call_d, '? 지금? 여기서? 밥은 다 안 먹고?']);
      await digital.say_and_wait(
        '먹기 전이든 후든 결과는 같잖아요? 어차피 둘 다 먹을 거잖아요? 구헤헤…… 츄릅——',
      );
      await digital.print_and_wait(
        '앗, 나 지금 엄청 위험한 소리를 낸 것 같은데.',
      );
      await digital.say_and_wait(
        '우오오오오, 맞아요, 지금이에요. 일주일이나 참았단 말이에요! 으으으, 제가 이 일주일을 어떻게 버텼는지 아세요?!',
      );
      await digital.say_and_wait(
        '그야, 그야 디지는 일주일 내내 동인지를 그렸잖아요. 다 그렸으면 축하하는 게 정해진 순서잖아요?!',
      );
      await you.say_and_wait([
        '아니, 아니. 그건 네 사정이지! 그리고 ',
        y_call_d,
        ', 다 그리긴 한 거야?',
      ]);
      await digital.say_and_wait(
        '……아직 조금 남았어요. 그래도 정말 조금이에요! 그리고 그게 중요해요? 제가 더 중요하잖아요?',
      );
      await you.say_and_wait(
        '아아아, 넌 일주일 내내 날 내버려 둬 놓고! 이제 와서 먹겠다는 거야! 나중에 치우는 것도 나라고!',
      );
      await digital.print_and_wait('그…… 그러고 보니 미안하네요…… 그래도……');
      await digital.say_and_wait('정말 미안해요! 뒷정리, 부탁드려요!');
    };
    f.title = title;
    return f;
  })(),
};
