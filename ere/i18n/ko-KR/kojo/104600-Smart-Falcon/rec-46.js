/**
 * @file スマートファルコン - 募集
 * @author 黑奴一号
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {CharaTalk} you プレイヤー
   * @param {CharaTalk} minoru 駿川たづな / ハーベストタイム
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  async rec_start(falcon, you, minoru, callname) {
    await falcon.say_as_passer_by_and_wait(
      falcon.uma_sex_title,
      `먼저 말을 걸어 주셔서 정말 감사합니다, 트레이너님. 하지만 팔코 실력은 아직 조금 부족한 것 같아.`,
    );
    await falcon.say_as_passer_by_and_wait(
      falcon.uma_sex_title,
      `──아, 트레이너님은 정말 대단하다고 생각해. 앞으로 더 멋진 ${falcon.uma_sex_title}를 만날 수 있을 거야.`,
    );
    era.printButton(
      `다음에는 ${callname}에게 맞는 트레이너를 찾을 수 있기를.`,
      1,
    );
    await era.input();
    await era.printAndWait(
      `말을 걸었던 ${falcon.uma_sex_title}와 엇갈린다. 쌓아 온 노력이 바라던 결실로 이어지지 않아 가슴이 술렁인다.`,
    );
    await era.printAndWait(`${you.actual_name}은(는) 그만 한숨을 내쉬었다.`);
    await era.printAndWait(
      `오늘은 여기까지 하자.${you.actual_name}은(는) 낙담한 마음을 추스르고, ${callname}은(는) 꺼냈던 계약서를 서류철에 도로 밀어 넣었다. 무리 지어 걷는 ${falcon.uma_sex_title}들 곁을 빠르게 지나 트레이너실로 돌아갔다.`,
    );
    era.drawLine();
    await era.printAndWait(
      `트레이너실 문을 잠그고 돌아가려던 ${callname}의 눈에 반짝이는 빛이 들어왔다.`,
    );
    await era.printAndWait(
      `빛이 어디서 오는지 궁금해진 ${callname}은(는) 별다른 할 일도 없어 창가로 다가갔다. 눈에 들어온 것은 안뜰의 삼여신상이었다.`,
    );
    await era.printAndWait(
      `여신상은 석양을 받아 그 빛을 ${callname}에게 건네고 있었다.`,
    );
    await you.say_and_wait(
      `아름답고 지혜로운 삼여신이여. 부디 용기를 주세요. 저에게 맞는 ${falcon.uma_sex_title}를 찾을 수 있도록.`,
    );
    await era.printAndWait(
      `자포자기한 푸념일까, 자조 섞인 기분 전환일까. 어쩌면 둘 다일지도 모른다.${you.actual_name}스스로에게 물어도 정확한 답은 나오지 않을 듯했다.`,
    );
    era.println();
    await you.say_as_passer_by_and_wait(
      `분노한 인간 교사`,
      `${falcon.name}! 이번 주에만 무허가 공연이 벌써 세 번째야!`,
    );
    await era.printAndWait(`고함이 ${callname}의 생각을 끊었다.`);
    await you.say_and_wait(`무슨 일이지?`);
    await era.printAndWait(`${callname}이(가) 상황을 파악하려던 그때.`);
    await falcon.say_and_wait(`미안, 지나갈게──`);
    era.printButton(`잠깐──`, 1);
    await era.input();
    await era.printAndWait(
      `${callname}은(는) 곁을 스쳐 가는 돌풍을 느끼며 하마터면 넘어질 뻔했다.`,
    );
    await falcon.say_and_wait(`어, 어떡하지?`);
    await era.printAndWait(`도망치려다 엉뚱한 사람까지 휘말리게 했다.`);
    await era.printAndWait(
      `${falcon.teen_sex_title}에게는 이것도 이도 저도 못 하는 상황일 것이다.`,
    );
    await you.say_as_passer_by_and_wait('분노한 인간 교사', `${falcon.name}！`);
    await falcon.say_and_wait(`히익──`);
    await era.printAndWait(
      `한쪽은 죄 없는 피해자, 다른 한쪽은 집요하게 쫓아오는 적.`,
    );
    await era.printAndWait(
      `한순간도 망설일 틈이 없다. 쫓아오는 교사가 벌써 코앞이다.`,
    );
    await falcon.say_and_wait(`……팔코, 이런 데서 질 순 없어!`);
    await era.printAndWait(
      `${falcon.uma_sex_title}라면 인간의 손에서 벗어나는 것──아니, 오히려 제압하는 것조차 어렵지 않다.`,
    );
    await era.printAndWait(
      `인간은 ${falcon.uma_sex_title}를 이길 수 없으니까.`,
    );
    await falcon.say_and_wait(`팔코의 아이돌 꿈을 위해서는 이럴 수밖에 없어!`);
    await era.printAndWait(
      `벽을 짚고 일어선 ${callname}은(는) 혼란을 정리하다 창문을 열려는 ${falcon.teen_sex_title}를 보았다.`,
    );
    await you.say_as_passer_by_and_wait(`인간 교사`, `！${falcon.name}！`);
    await era.printAndWait(
      `가느다란 그림자가 진짜 매처럼 창문을 통해 하늘로 날아올라 지상의 범인들을 멀리 뒤에 남겨 두었다.`,
    );
    await era.printAndWait(`하지만
`);
    await era.printAndWait(
      `──진짜 매는 아니다. 중력은 가차 없이 ${falcon.sex}를 붙잡아 그대로 땅에 세게 내리눌렀다.`,
    );
    await era.printAndWait(
      `${falcon.sex}는 나뭇가지 두 개를 부러뜨리고 흙투성이로 일어나더니 순식간에 모습을 감췄다.`,
    );
    await you.say_as_passer_by_and_wait(
      `인간 교사`,
      `설마 그런 짓까지 할 줄이야.`,
    );
    await era.printAndWait(`${callname}도 깊이 고개를 끄덕이고 말았다.`);
    await era.printAndWait(
      `어째서인지 그 뛰어오르는 모습이 ${callname}의 가슴속에 깊이 남았다.`,
    );
    era.printButton(`실례지만, 방금 그 ${falcon.uma_sex_title}는 누구죠?`, 1);
    await era.input();
    await you.say_as_passer_by_and_wait(
      `인간 교사`,
      `응? ${callname}이(가) 말하는 건 ${falcon.name} 말인가?`,
    );
    await you.say_and_wait(
      `네. 담당할 ${falcon.uma_sex_title}를 찾고 있거든요.`,
    );
    await era.printAndWait(
      `방금 행동은 조금 무모해 보였다. 하지만 저렇게 개성적이라면 벌써 트레이너에게 제안을 받았어도 이상하지 않다.`,
    );
    await era.printAndWait(
      `의문을 눈치챘는지 교사는 쓴웃음을 지으며 고개를 저었다.`,
    );
    await you.say_as_passer_by_and_wait(
      `인간 교사`,
      `${falcon.name}는 잔디 레이스를 고집하는 모양이야. 생각보다 완고하더군.`,
    );
    await you.say_as_passer_by_and_wait(
      `인간 교사`,
      `게다가 레이스에서 이기는 것보다 자신에게 시선이 쏠리는 느낌을 즐기는 것 같아.`,
    );
    await you.say_and_wait(`자신에게 시선이 쏠리는……꼭 아이돌 같네요.`);
    await era.printAndWait(
      `팬들이 바라는 이상 그 자체가 되어 모두가 바라보는 무대에서 가장 아름다운 자신을 보여 주는 존재. 아이돌.`,
    );
    await you.say_and_wait(
      `……하지만 ${falcon.uma_sex_title}로 달리는 것부터 시작하는 편이 다른 길보다 성공할 가능성도 높고 시간도 덜 걸린다.`,
    );
    await you.say_and_wait(`현실적인 방안이다.`);
    await era.printAndWait(
      `제자에게 거는 기대 때문인지, 아니면 ${falcon.name}가 진정하기를 바라는 건지. 교사는 다시 고개를 저었다.`,
    );
    await you.say_as_passer_by_and_wait(
      `인간 교사`,
      `하지만 ${falcon.sex}가 아무리 애써도 발목에 무거운 쇠공을 달아 놓은 것 같아서 말이야.`,
    );
    await you.say_as_passer_by_and_wait(
      `인간 교사`,
      `선발 레이스에서 세 번 연속 하위권으로 끝났으니 잔디에서 불리하다는 것쯤은 ${falcon.sex} 자신도 알겠지.`,
    );
    await you.say_and_wait(
      `이상을 쫓는 ${falcon.teen_sex_title}에게 이보다 괴로운 일은 없겠네요. ……더트를 시도해 보면 어떨까요?`,
    );
    await era.printAndWait(
      `생각에 잠겼던 ${callname}은(는) 실언을 깨닫고 자조하며 고개를 저었다. 민망한 기억은 뒤로 밀어 두고 싶었다.`,
    );
    await you.say_as_passer_by_and_wait(
      `인간 교사`,
      `그건 직접 ${falcon.sex}에게 물어봐야겠지.`,
    );
    await era.printAndWait(
      `교사는 손을 비볐다. 내쉰 숨은 입김이 되어 찬바람에 흩어졌다.`,
    );
    await you.say_and_wait(`${falcon.name}는 이제 어디로 가나요?`);
    await era.printAndWait(
      `${callname}이(가) ${falcon.name}에 관해 더 물으려던 순간, 요란한 종소리가 대화를 끊었다.`,
    );
    await you.say_as_passer_by_and_wait(
      `인간 교사`,
      `이후에도 자기 꿈을 쫓고 있겠지.`,
    );
    await era.printAndWait(
      `교사는 ${callname}에게 손을 흔들고 교무실로 향했다.${callname}은(는) 대화에서 얻은 정보를 정리하며 복도로 불어오는 찬바람에 목을 움츠렸다.`,
    );
    era.drawLine({ content: '翌日' });
    await era.printAndWait(
      `${callname}은(는) 평소처럼 트레이너실 앞에 왔다가 문에 무언가 붙어 있는 것을 발견했다.`,
    );
    await falcon.say_and_wait(
      `신인 아이돌 ${falcon.name}! 16:00, 강변에서 게릴라 라이브 예정! 꼭 보러 와 줘♪`,
    );
    await era.printAndWait(`잠시 망설이다 포스터를 조심스레 떼었다.`);
    await era.printAndWait(`멀리서 제법 소란스러운 소리가 들린다.`);
    era.printButton(`가서 보자.`, 1);
    await era.input();
    await era.printAndWait(
      `${callname}은(는) 소란이 나는 쪽으로 걸음을 옮겼다.`,
    );
    era.println();
    await falcon.say_and_wait(`죄송해요……`);
    await minoru.say_and_wait(
      `${falcon.actual_name_with_title}. 정식으로 아이돌 활동을 하고 싶다면 선발 레이스에서 성과를 내고 맞는 트레이너와 계약해 주세요.`,
    );
    await minoru.say_and_wait(
      `트레센 학원은 뛰어난 ${falcon.uma_sex_title}를 육성하기 위해 설립된 학교입니다. 그 목표를 함께 이루려는 트레이너도 적지 않을 거예요.`,
    );
    await minoru.say_and_wait(
      `노력의 방향을 바로잡고 자신에게 맞는 트레이너와 함께 나아가 주세요.`,
    );
    await era.printAndWait(
      `타즈나는 ${falcon.name}의 손에 남아 있던 포스터를 압수하며 정중하지만 단호하게 타일렀다.`,
    );
    await falcon.say_and_wait(`……`);
    await era.printAndWait(
      `축 처진 귀를 보니 ${falcon.name}는 이러지도 저러지도 못하는 모양이다.`,
    );
    await minoru.say_and_wait(
      `……${you.actual_name_with_title}, 무슨 용무이신가요?`,
    );
    await era.printAndWait(`타즈나는 바로 업무 모드로 전환했다.`);
    era.printButton(
      `죄송합니다. 나중에 ${falcon.name}와 제대로 이야기하겠습니다.`,
      1,
    );
    await era.input();
    await era.printAndWait(
      `어째서인지 ${you.name}은(는) 창가에서 빛나던 ${falcon.teen_sex_title}를 떠올리고 있었다.`,
    );
    await minoru.say_and_wait(
      `……그렇다면 계약서 사본을 이사장실에 한 부 제출해 주세요. 다만 그 전에, `,
    );
    await minoru.say_and_wait(
      `${falcon.actual_name_with_title}와 정식으로 계약하시는 편이 좋겠네요.`,
    );
    await era.printAndWait(
      `${callname}은(는) 타즈나의 시선을 따라 복도를 가득 메운 포스터를 보았다.`,
    );
    await minoru.say_and_wait(
      `${falcon.uma_sex_title}들의 수업이 시작되기 전에 복도를 원래대로 돌려놓아 주세요.`,
    );
    await era.printAndWait(
      `웃고 있는데도 타즈나에게서 강한 압박이 느껴진다.


`,
    );
    await era.printAndWait(
      `필사적으로 움직인 덕분에 수업 시작 종이 울리기 직전 포스터를 모두 떼어 냈다.`,
    );
    await falcon.say_and_wait(
      `……고마워, ${callname}! 팔코 팬클럽 1호팬인 ${you.adult_sex_title}！`,
    );
    await era.printAndWait(`1호팬?`);
    await falcon.say_and_wait(
      `팔코, 강변에서 라이브 할 거야. 꼭 보러 와 줄래?`,
    );
    await era.printAndWait(`아이돌을 빛내 주는 존재──그게 팬이라는 건가.`);
    await era.printAndWait(
      `${callname}은(는) 가방에 넣어 둔 포스터를 떠올렸다.`,
    );
    era.printButton(`갈게.`, 1);
    await era.input();
    await era.printAndWait(
      `눈앞의 ${falcon.teen_sex_title}는 꽃이 천천히 피어나듯 미소 짓고 ${callname}에게 인사했다.`,
    );
    await era.printAndWait(`${callname}은(는) 다음 무대를 기대하기 시작했다.`);
  },
  /**
   * @param {CharaTalk} falcon
   * @param {CharaTalk} you
   * @param {string} callname
   */
  async rec_final(falcon, you, callname) {
    // 1は前向き、2は後ろ向き
    // 拍 1
    await era.printAndWait(
      `${callname}은(는) 포스터에 적힌 대로 강변에 도착했다.`,
    );
    // 場面は前向きであるべき
    await era.printAndWait(
      `해가 서쪽으로 기울자 하늘은 밝은 군청색에서 주황색으로 서서히 번졌고, 구름도 석양에 붉은 금빛으로 물들었다.`,
    );
    await falcon.say_and_wait(`～～～♪`);
    // 歩くことで午後から黄昏への時間経過を示す
    await era.printAndWait(
      `고가교의 그림자가 다리 아래를 덮어 넓은 어둠을 만들었다. 황혼 무렵에만 약간의 빛이 다리 아래 잔디에 닿는다.`,
    );
    await era.printAndWait(
      `주황빛 하늘에 물든 ${falcon.teen_sex_title}가 강변의 잔디──${falcon.sex}의 무대에서 공연을 이어 가고 있었다.`,
    );
    // 拍 1
    await falcon.say_and_wait(`~~~♪ 여러분, 고마워요!`);
    // 対比：誰もいない芝
    await era.printAndWait(
      `${falcon.teen_sex_title}는 익숙한 몸짓으로 빈터를 향해 인사했다.`,
    );
    await era.printAndWait(
      `──그런데도 ${falcon.teen_sex_title}의 얼굴에는 미소가 남아 있었다.`,
    );
    // 拍 2
    await era.printAndWait(`짝짝짝짝.`);
    await era.printAndWait(`${falcon.teen_sex_title}는 동요하는 기색이 없다.`);
    await era.printAndWait(
      `──하지만 ${callname}는 어딘가에서 시선이 느껴졌다.`,
    );
    await era.printAndWait(
      `그래도 귀만 살짝 떨 뿐 ${falcon.teen_sex_title}는 자신의 공연을 이어 간다.`,
    );
    era.drawLine();
    await falcon.say_and_wait(`──후우⭐ 오늘 팔코는 절호조야!`);
    await era.printAndWait(
      `${falcon.teen_sex_title}는 양쪽 가로등 불빛이 겹치는 경계에 서서 스포트라이트를 받는 무대를 흉내 내는 듯했다.`,
    );
    await era.printAndWait(`아마 이것이 ${falcon.sex}의 무대일 것이다.`);
    await era.printAndWait(`외로운 아이돌인가.`);
    await falcon.say_and_wait(`팔코 팬클럽 1호팬인 ${you.adult_sex_title}⭐`);
    await era.printAndWait(`돌아가려던 ${callname}이(가) 부름에 멈춰 섰다.`);
    era.printButton(`……1호팬?`, 1);
    await era.input();
    await era.printAndWait(
      `빛을 받은 ${falcon.teen_sex_title}는 너무 들떠 흥분에 가까운 목소리로 ${callname}에게 선언했다.`,
    );
    await falcon.say_and_wait(
      `그야 1호팬인 ${you.adult_sex_title}은(는) 팔코 라이브를 처음부터 끝까지 봐 준 첫 번째 사람이니까⭐`,
    );
    era.println();
    await era.printAndWait(
      `……${callname}은(는) 잠시 떠올렸다. 도중에 두세 명이 걸음을 멈췄지만 모두 마지막 곡 전에 떠났다.`,
    );
    await era.printAndWait(
      `그러니까 처음부터 끝까지 지켜본 관객은 자신뿐이었다.`,
    );
    await era.printAndWait(
      `1월의 찬바람 속에서 두 시간을 버텼다면 팬이라고 불려도 이상하지 않다.`,
    );
    await falcon.say_and_wait(
      `1호팬인 ${you.adult_sex_title}, 원하는 거 있어? 팔코가 할 수 있는 거라면 뭐든 들어줄게⭐`,
    );
    await era.printAndWait(`${callname}은(는) 잠시 생각했다.`);
    era.printButton(`더트 선발 레이스에서 팔코를 볼 수 있을까?`, 1);
    await era.input();
    await era.printAndWait(
      `예상 밖의 대답이었는지 ${falcon.name}는 난처한 표정을 지었다.`,
    );
    await falcon.say_and_wait(`……팔코, 지금 마침 맞는 트레이너를 찾고 있는데?`);
    era.printButton(`그럼 나와 계약하지 않을래?`, 1);
    await era.input();
    await falcon.say_and_wait(`응?`);
    await falcon.say_and_wait(`야호!`);
    await era.printAndWait(`${falcon.name}는 자기 나름대로 기뻐하는 모양이다.`);
    await falcon.say_and_wait(`팔코의 1호팬이 트레이너이기도 한 거네!`);
    await falcon.say_and_wait(
      `그럼 트레이너인 ${you.adult_sex_title}에게 잔디에서 팔코가 가진 가능성을 보여 줄게!`,
    );
    await era.printAndWait(
      `말할수록 열이 올라 ${falcon.name}는 무심코 ${callname}의 손을 잡았다.`,
    );
    era.printButton(`더트에서 ${callname}의 모습을 보고 싶어.`, 1);
    await era.input();
    await falcon.say_and_wait(`어……`);
    await era.printAndWait(`${falcon.name}는 그 자리에서 굳었다.`);
    era.printButton(`더트에서 ${falcon.name}의 모습을 보고 싶어.`, 1);
    await era.input();
    await era.printAndWait(
      `시간이 멈춘 것처럼 ${callname}은(는) 피하려는 ${falcon.name}의 눈을 가만히 바라보았다.`,
    );
    era.println();
    await falcon.say_and_wait(`……팔코의 첫 팬이 부탁하는 거니까.`);
    await era.printAndWait(
      `한 세기는 지난 듯한 긴 침묵 끝에 ${falcon.name}는 마침내 대답했다.`,
    );
    await era.printAndWait(
      `${callname}의 시선을 피하지 않고 정면으로 ${callname}을(를) 바라보는 ${falcon.name}。`,
    );
    await falcon.say_and_wait(
      `팔코는 잔디를 달려야 가장 크고 가장 빛나는 무대에 설 수 있다고 생각해!`,
    );
    await falcon.say_and_wait(
      `게다가 더트랑 잔디는 인기가 서너 배나 차이 나는걸!`,
    );
    await falcon.say_and_wait(`잔디는 서툴지만 노력하면 결과가 나올 거야.`);
    era.printButton(
      `팔코는 더트의 아이돌로서 우리만의 ${falcon.teen_sex_title} 아이돌 시대를 연다는 생각은 해 본 적 없어?`,
      1,
    );
    await era.input();
    await falcon.say_and_wait(`에에에──`);
    await you.say_and_wait(
      `더트 팬들도 자신들을 이끌어 줄 ${falcon.teen_sex_title}가 나타나기를 기다려. 아니, 더트의 모두가 바라는 일이야.`,
    );
    await you.say_and_wait(
      `──더트의 모두가 숨죽이며 스타 ${falcon.teen_sex_title}가 탄생하기를 기다리고 있다고!`,
    );
    await era.printAndWait(
      `크게 숨을 들이마신다.${falcon.name}를 설득하기까지 이제 한 걸음 남았다.`,
    );
    era.printButton(`${falcon.name}는 가장 빛나는 무대에 서고 싶지 않아?`, 1);
    await era.input();
    await falcon.say_and_wait(`……팔코의……가장 빛나는 무대?`);
    await you.say_and_wait(
      `아이돌은 팬들의 기대에 응해 불가능을 가능으로 만드는 내일의 별이잖아?`,
    );
    await era.printAndWait(
      `튀어 오른 쌀알을 칼로 정확히 둘로 가르듯 ${callname}은(는) 적절한 거리를 두고 ${falcon.name}에게 손을 내밀었다.`,
    );
    await you.say_and_wait(`같은 이상을 향해 출발하자.`);
    await falcon.say_and_wait(
      `앞으로 잘 부탁해, 트레이너님……아니! 팔코 팬클럽 1호팬인 ${you.adult_sex_title}⭐`,
    );
    await era.printAndWait(`두 사람은 서로의 손을 굳게 잡았다.
`);
    await era.printAndWait(`${falcon.name} 영입에 성공했다!`);
  },
};
