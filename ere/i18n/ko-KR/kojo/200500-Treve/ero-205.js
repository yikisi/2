/**
 * @file トレヴ - 調教
 * @author 梦露
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} treve
   * @param {CharaTalk} you
   */
  async ero_start(treve, you) {
    await era.printAndWait([
      treve.get_colored_name(),
      '같은 상대라면, 그 인생 자체에 큰 영향을 미치고, 나중에 몇 번이고 나를 떠올리게 하며, 계속 생각하게 만들 수 있다. 그것은 ',
      treve.get_colored_name(),
      '의 인생 그 자체를 「범한」듯한 충족감으로, 그 쾌감은 형언할 수 없다',
    ]);
    await era.printAndWait(
      '마음의 충족감은 충분히 취하게 한다. 하지만 육체의 충족을 원한다면, 실제 접촉을 거쳐야만 한다.',
    );
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      treve.get_colored_name(),
      '을(를) 땅에 내려놓고 옷을 ',
      treve.sex,
      '의 부드러운 등 아래에 깔아주었다. 자세를 바로잡자 ',
      treve.uma_sex_title,
      '의 젊은 몸매—— 특히 싱그러운 분홍빛 가슴이, 완전히 ',
      you.get_colored_name(),
      '의 눈앞에 드러났다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      treve.get_colored_name(),
      '의 의식이 몽롱한 틈을 타, 혀를 꽃봉오리처럼 부풀어 오른 우아한 곡선을 따라 가볍게 핥아주었다. 혀끝은 부드럽고 세심하게 ',
      treve.sex,
      '의 한 치 한 치 분홍빛으로 촉촉한 피부를 바깥에서 안으로, 아래에서 위로, 가슴을 마음대로 침범하며, 봉우리 꼭대기의 한 점 붉은 빛으로 향했다.',
    ]);
    await treve.say_and_wait('안 돼…… 그런 짓 하지 말아요, 놓아줘요……');
    await treve.say_and_wait('간신히 잊었는데, 또 당신 때문에……');
    await treve.say_and_wait('읏……');
    await era.printAndWait(
      `${treve.name}의 미약한 거절 따위는 아랑곳하지 않고 ${you.name}은(는) 침식을 계속한다. 몇 번 핥고, 빨고, 이빨로 ${treve.teen_sex_title}의 벚꽃처럼 가련한 꽃봉오리를 가볍게 물고, 혀끝으로 앞뒤로 움직이며 유혹한다. 뜨거운 욕망은 즉시 전류가 되어, 솟구치는 피 속에 녹아들며 ${treve.name}에게 남아 있던 미약한 정신을 갉아먹는다`,
    );
    await era.printAndWait(
      `${treve.sex}의 의지가 어떻든, ${you.name}의 교묘한 도발 아래, 복숭아빛 끝부분은 핥히며 솟아오르고 부풀어 올라, 붉은 구슬처럼 변한다. ${you.name}은(는) 과감하게 둥근 오른쪽 유방을 움켜쥐고 반구형 꼭지를 감싸며, 눈처럼 하얀 가슴의 탄력과 팽팽함을 느끼고 몇 번이나 세게 주무른다.`,
    );
    await era.printAndWait(
      `미끄러지듯 부드러운 감촉과, ${treve.teen_sex_title}이(가) 억누를 수 없는 낮은 신음 소리가 어우러지며 ${you.name}은(는) 다른 쪽 둥근 언덕에서도 힘을 더해 주무른다. ${treve.teen_sex_title}의 아랫배가 짧게 파도치며, 하얀 피부의 한 치 한 치가 흥분의 충격에 파도처럼 흔들린다.`,
    );
    era.printButton('「네 몸이 얼마나 음탕한지, 이제 알겠지?」', 1);
    era.printButton('「를 만나지 않았더라도, 네가 저항할 수 있었을 거라고 생각하니?」', 2);
    if ((await era.input()) === 1) {
      await treve.say_and_wait('당신……말도 안 돼요. 굴복하지 않아요.');
    } else {
      await treve.say_and_wait('당신에게는, 절대 지지 않아요.');
    }
    await era.printAndWait(
      `부정해 봐도 ${treve.name}은(는) 정욕에 불타오른 자신의 육체를 거스를 수 없다. ${treve.uma_sex_title}의 피가 가져오는 발정은 이제 모두 욕망의 불꽃이 되어, 목덜미를 가볍게 핥고 깨무는 것부터 가슴이나 배를 꼬집고 유혹하는 것까지 ${treve.sex}의 애욕을 넘치게 하며, 구름 속을 날아다니는 듯한 쾌락에 몸을 맡기게 한다.`,
    );
    era.printButton('좀 더 매도한다', 1);
    await era.input();
    await you.say_and_wait(
      '지지 않는다고? 그럼 내 손가락에 묻어 있는, 이 젖고 끈적거리는 건 뭐지? 냄새나 맡아볼까? 뭘 저항하는 거야? 네 몸을 나보다 더 잘 아는 사람은 없어. 이 변태 같은 작은 노출광, 그냥 쳐다보기만 해도 벌써……',
    );
    await era.printAndWait(
      `${you.name}은(는) 가볍게 비웃으며, ${treve.name}의 수치심과 분노로 죽을 것 같은 표정을 보고 눈빛에 자만심이 번쩍였다. 다시 몸을 숙여  ${treve.teen_sex_title}의 우아한 목덜미를 어루만진다. 왼손 다섯 손가락으로 느긋하게 ${treve.sex}의 팽팽하고 섬세한 등을 쓰다듬으며, 곡선이 자연스러운 척추와 꼬리 뿌리를 가볍게 어루만지며 마치 춤을 추는 듯했다. 오른손은 ${treve.sex}의 뜨거운 하반신에서 나선형을 그리며 위로 올라가, 손가락에 반짝반짝 젖은 한 방울을 묻힌 채 ${treve.sex}의 눈앞에서 흔들어 보이며 과시했다.`,
    );
    await era.printAndWait(
      `일련의 애무는 ${treve.name}에게 냉정하게 저항할 여지를 전혀 남기지 않는다. 민감한 살결에서 끊임없이 밀려오는 강렬한 쾌감이 ${treve.sex}의 의지와 마음을 침식한다.`,
    );
    await treve.say_and_wait('읏.');
    await era.printAndWait(
      `${treve.sex}의 점점 더 가빠지는 숨소리와 함께, ${treve.teen_sex_title}은 마침내 견디지 못하고 신음을 터뜨린다.`,
    );
  },
  /**
   * @param {CharaTalk} treve
   * @param {CharaTalk} you
   */
  async ero_end(treve, you) {
    era.printButton('「나한테 굴복하지 않겠다고 맹세했지?」', 1);
    era.printButton('「그때, 고개는 어디까지 숙여져 있었지?」', 2);
    era.printButton('「아까 고개를 어디에 뒀는지, 잊어버렸나.」', 3);
    await era.input();
    await era.printAndWait(
      `${treve.name}의 아름다운 눈에서 은은하게 맑은 눈물이 흘러내려 ${treve.sex}의 윤기 나는 속눈썹을 적시며, 자신감 넘치는 외모 아래 숨겨진 연약하고 무력한 마음을 드러낸다.`,
    );
    await era.printAndWait(
      `그 수줍은 표정조차 ${you.name}의 침착함을 흐트러뜨리지는 않는다. ${you.name}은(는) 그저 혀를 내밀어 ${treve.name}의 하얀 뺨을 따라 흐른 두 줄기의 눈물 자국을 천천히 핥아내고, ${treve.sex}의 얼굴에 남은 축축한 차가움이 사라지기 전에 귀에 입을 대고 낮은 목소리로 속삭였다.`,
    );
    era.printButton('「하룻밤의 인연은 백 일 동안 남는 법이야, 허니.」', 1);
    era.printButton('「이렇게 밤을 보냈는데, 나도 좀 즐기게 해 줘?」', 2);
    await era.input();
    await era.printAndWait(
      `${you.name}은(는) 낮은 목소리로 말하며, 오른손으로 가슴을 주무르는 힘을 살짝 더 세게 주어, ${treve.name}이(가) 참을 수 없는 신음을 터뜨리게 했다.`,
    );
    await era.printAndWait(
      `${you.name}의 말을 듣고, ${treve.name}은(는) 굳게 감은 눈꺼풀을 참지 못하고 몇 번이나 떨었다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 차갑게 웃으며, 양손으로 ${treve.name}의 고운 살결 같은 가느다란 허리를 감싸고 전신을 반쯤 ${treve.sex} 위에 올려놓으며, 말의 위협을 더욱 가중시킨다.`,
    );
    await era.printAndWait(
      `${treve.name}은(는) 몇 번이나 흐느낌을 터뜨렸지만 ${you.name}이(가) 무릎을 찔러 ${treve.sex}의 우아하고 긴 다리를 좌우로 벌리자, ${treve.sex}은(는) 거의 저항하지 못하고 ${you.name}에게 양다리를 벌려져 반쯤 ${you.name} 위에 앉혀진 모양이 되었다. `,
    );
    await era.printAndWait(
      `${treve.name}의 눈물 자국이 남은 얼굴에 체념의 각오가 스치며, 활을 당기듯 ${you.name}에게 달려들어 껴안는다. 하얀 두 다리도 ${you.name}의 허리 뒤쪽에 감기며, 아래에서 ${you.name}을(를) 꽉 껴안았다.`,
    );
    await era.printAndWait(
      `이렇게 ${you.name}은(는) 멈추지 않고, ${treve.sex}가 눈을 뒤집으며 기절할 뻔한 순간에야 비로소 ${treve.sex}을(를) 내려놓았다.`,
    );
    await era.printAndWait(
      `한숨 돌린 뒤, ${you.name}은(는) 재빨리 뒷정리를 했다.`,
    );
  },
};
