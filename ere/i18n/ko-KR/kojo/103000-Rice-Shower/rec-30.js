/**
 * @file ライスシャワー - 募集
 * @author 梦露
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} rice
   * @param {CharaTalk} you
   */
  async rec_start(rice, you) {
    era.print([
      '어? 저 ',
      rice.sex_code === 1 ? '소년' : '소녀',
      '는 귀가 엄청 크네? 평균보다 훨씬 크지 않아?',
    ]);
    era.print(
      `보통 이 나이대에는, 특히 ${rice.uma_sex_title}라면 좀 더 활기차게 돌아다니기 마련이다.`,
    );
    era.print(
      `하지만 검은 머리의 ${rice.teen_sex_title}는 다른 사람과 부딪히지 않도록 꼬리까지 조심스럽게 신경 쓰는 듯했다.`,
    );
    era.print(`중앙 트레센에서 이렇게 기가 약한 아이도 드물다.`);
    era.print(
      `아니나 다를까, ${rice.sex}는 친구와 나란히 달리지도 않고 혼자 운동복 차림으로 교문 밖을 향해 달려갔다.`,
    );
    await era.printAndWait('방향은…… 역인가.');
  },
  /**
   * @param {CharaTalk} rice
   * @param {CharaTalk} you
   * @param {string} chara_self_name
   */
  async rec_station(rice, you, chara_self_name) {
    // 駅イベント。ひとりでいるときのみ表示
    era.print([
      '조금 떨어진 역 앞에서 장을 보고 학원으로 돌아오던 길에, 한 ',
      rice.uma_sex_title,
      '와 마주쳤다.',
    ]);
    era.print([
      '휴식을 마친 ',
      rice.sex,
      '는 다음 훈련을 하러 서둘러 가고 있었다.',
    ]);
    you.say('달리는 자세가 참 반듯하네');
    era.print([
      rice.sex,
      '가 달려가는 뒷모습을 보며 ',
      you.get_colored_name(),
      '은(는) 저도 모르게 감탄했다.',
    ]);
    await era.printAndWait([
      '작은 체구인데도 ',
      rice.sex,
      '의 주위를 감도는 기백에 자연스럽게 눈길이 갔다.',
    ]);
    era.drawLine();
    era.print(
      '결국 자꾸 빨간불에 걸리는 바람에, 트레센 학원에 도착했을 때는 이미 완전히 어두워져 있었다.',
    );
    rice.say('저기, 죄, 죄송해요!');
    you.say(`응? 나한테 하는 말이야?`);
    rice.say('네, 네에. 저기, 죄송해요!');
    you.say(`응?`);
    rice.say(
      `오늘 ${chara_self_name}가 옆에서 달린 탓에 이렇게 늦게 돌아오시게 됐어요.`,
    );
    rice.say('정말로, 정말로 죄송해요!');
    you.say(`네 탓이 아니야.`);
    rice.say(
      `아니요, ${chara_self_name} 탓이에요. 왜냐하면 ${chara_self_name}는 다른 사람을 불행하게 만드는 못난 아이니까요……`,
    );
    era.print([rice.teen_sex_title, '의 커다란 귀가 힘없이 축 처졌다.']);
    rice.say(
      `죄송해요. 그, 그래도 ${chara_self_name}가 곁에 없으면 괜찮을 거예요! 안녕히 계세요!`,
    );
    era.print([
      rice.get_colored_name(),
      '를 불러 세울 틈도 없이, ',
      rice.sex,
      '는 달려가 버렸다. 그냥 내버려 두기에는 너무 안쓰러웠다.',
    ]);

    era.printButton(`${rice.sex}의 지나친 걱정일 뿐이라고 말해 주자`, 1);
    await era.input();
    era.print([rice.sex, '에게 말을 걸려던 바로 그때.']);
    rice.say(
      '다음 선발 레이스에 나가기로 했어요. 제대로 나가서, 착실하게 달리면……',
    );
    rice.say(
      `제대로 데뷔하고 활약해서, 도움이 되는 ${chara_self_name}가 될 수 있어!`,
    );
    era.print([
      rice.sex,
      '가 의욕에 차서 훈련을 시작하려는 모습을 보니 방해하고 싶지 않았다. 결국 인사는 하지 못했다.',
    ]);
    await era.printAndWait([
      rice.get_colored_name(),
      '……다음 선발 레이스에서 ',
      rice.sex,
      '의 진짜 실력을 보고 싶다.',
    ]);
  },
  /** @param {CharaTalk} rice */
  async rec_race(rice) {
    era.print([
      '「오늘은 ',
      rice.get_colored_name(),
      '의 선발 레이스가 있을 텐데……」',
    ]);
    era.print(
      `？？？「${rice.name}!${rice.name} 씨, ${rice.name} 씨, ${rice.name} 씨! 어디 있나요, ${rice.name} 씨!」`,
    );
    era.print([
      rice.get_colored_name(),
      '의 차례일 텐데 ',
      rice.sex,
      '의 모습은 보이지 않았다.',
    ]);
    era.print([
      rice.get_colored_name(),
      '를 부르던 ',
      rice.uma_sex_title,
      '는 곧 다른 곳의 호출을 받고 떠났다.',
    ]);
    era.print(
      `？？？「${rice.name}, 이제는 선발 레이스까지 거부하는 거야? 그렇게 재능 있는 아이가.」`,
    );
    era.print(
      '???「애초에 재능 이전에, 출주할 의지가 없다는 것만으로도 큰 문제야.」',
    );
    await era.printAndWait([
      '결국 ',
      rice.get_colored_name(),
      '는 그날 선발 레이스장에 끝까지 모습을 드러내지 않았다.',
    ]);
  },
  /**
   * @param {CharaTalk} rice
   * @param {CharaTalk} you
   * @param {string} chara_self_name
   */
  async rec_final(rice, you, chara_self_name) {
    era.print(`다음으로 ${rice.name}를 본 것은 선발 레이스가 끝난 뒤였다.`);
    era.print('나무 그루터기 옆');
    rice.say(
      `바보, 바보 바보, ${chara_self_name}는 정말 바보야! 모처럼…… 모처럼 힘내기로 했는데……`,
    );
    rice.say(`흑흑…… 왜…… 왜 ${chara_self_name}는 이렇게 못난 걸까?`);
    era.print(
      `혼자 울고 있는 ${rice.name}를 그냥 지나칠 수 없었다. 정신을 차려 보니 ${rice.sex}의 곁에 서 있었다.`,
    );
    rice.say('당신은…… 저번에 만난 분?');
    rice.say('죄송해요! 저기, 더는 가까이 오지 마세요……');
    rice.say(
      `${chara_self_name} 곁에 있으면 불행해져요. ${chara_self_name}는 못난 아이라서 또 폐를 끼칠 거예요.`,
    );
    rice.say(
      `${chara_self_name}도 도움이 되고 싶어서 선발 레이스에 나가려고 열심히 노력했어요. 그런데……`,
    );
    era.println();
    era.print(
      `눈앞에서 우는 ${rice.name}를 보자 며칠 전의 그 모습이 떠올랐다——`,
    );
    era.print([
      '무슨 일이 있었는지는 모른다. 하지만 ',
      rice.sex,
      '는 분명 달라지려고 노력하고 있었다.',
    ]);
    era.print([
      you.get_colored_name(),
      '도 알 수 있었다. ',
      rice.sex,
      '가 그 한 걸음을 내딛기 위해 온 힘을 다해 훈련해 왔다는 것을.',
    ]);
    rice.say(`흑흑…… 역시, 역시 ${chara_self_name} 같은 아이는……`);

    era.printButton(`이대로 ${rice.sex}를 내버려 둘 수는 없어!`, 1);
    await era.input();
    era.print(`「${rice.name}, 내게 와 줄래?」`);
    era.print(`${rice.name}의 귀가 「쫑긋」 섰다.`);
    rice.say('네?');
    rice.say(
      `그러니까…… ${chara_self_name}의 트레이너가 되어 주신다는 뜻인가요?`,
    );
    rice.say(`와아…… ${chara_self_name}, 정말 정말 기뻐요. 하지만……!`);
    rice.say(
      `하지만 ${chara_self_name}는…… 정말 못난 아이예요. 폐도 많이 끼치고, 레이스에도 나가지 못해요.`,
    );
    rice.say('그래도 제 트레이너가 되어 주실 건가요?');

    era.printButton('「그렇다 해도 너를 지지하고 싶어」', 1);
    await era.input();
    rice.say(['굉장해…… ', you.elder_sibling_sex_title, ' 같아……']);
    you.say([you.elder_sibling_sex_title, '？']);
    rice.say('앗! 죄, 죄송해요. 못 들은 걸로 해 주세요!');
    rice.say('저기…… 자, 잘 부탁드려요, 트레이너님!');
    rice.say(`${chara_self_name}, 열심히 할게요!`);
    await era.printAndWait([
      '표정은 여전히 굳어 있었다. 그래도 ',
      rice.sex,
      '는 힘껏 미소를 지어 보였다.',
    ]);
  },
};
