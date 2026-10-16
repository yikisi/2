/**
 * @file ダイイチルビー - 育成
 * @author 梦露
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  before_begin_race: (() => {
    const title = '데뷔전을 앞두고';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      const ret = [];
      await ruby.say_and_wait('대기실로 가죠.');
      era.drawLine();
      await you.say_as_passer_by_and_wait('의원 A', [
        ruby.get_colored_name(),
        '의 화려한 첫 레이스에 박수를!!',
      ]);
      await era.printAndWait('（짝짝짝……!）');
      era.printButton('（……어라, 이 사람은 누구지?）', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 잠시 기억을 더듬다가, 불쑥 찾아온 중년 남성이 최근 급부상하고 있는 어느 정치인임을 알아보았다.',
      ]);
      await you.say_as_passer_by_and_wait(
        '의원 A',
        '하하, 정말 영광이군요. 그 유명한 『화려한 일족』의 데뷔전을 직접 지켜보게 되다니.',
      );
      await ruby.say_and_wait('축하해 주셔서 감사합니다.');
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 의원으로 보이는 남자를 향해 태연하게 대응하고 있었지만, 지금은 중요한 데뷔전을 앞둔 시점이었기에, ',
        you.get_colored_name(),
        '은(는) 상대가 속히 자리를 비워주기를 바랐다……',
      ]);
      await you.say_as_passer_by_and_wait(
        '의원 A',
        '축하의 의미로 꽃도 좀 챙겨왔는데, 마음에 들었으면 좋겠군요.',
      );
      await ruby.say_and_wait('마음 써주셔서 감사합니다. 그럼 살펴 가십시오.');
      await you.say_as_passer_by_and_wait('의원 A', '어, 잠깐——');
      await ruby.say_and_wait(
        '죄송합니다, 시간이 다 되었군요. 의원님의 응원을 받게 되어 무척 감격스럽습니다.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 가볍게 손을 흔들어 작별을 고하며 ',
        you.get_colored_name(),
        '을(를) 슬쩍 곁눈질했다.',
      ]);
      await ruby.say_and_wait(
        '다음번에는 미리 연락을 주시고, 필히 정문으로 방문해 주시길 바랍니다.',
      );
      await ruby.say_and_wait(
        '의원님께서 제 트레이너처럼, 저희 일족에게 온전히 인정받을 수 있을 만한 자부심을 품고 계신다면 말이죠.',
      );
      await you.say_as_passer_by_and_wait(
        '의원 A',
        '과연 그렇군요. 실례 많았습니다. 방해해서 죄송했습니다.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 떠나가는 남자를 배웅하고 나서, 이내 몸을 돌려 ',
        you.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      await you.say_as_passer_by_and_wait('기자 A', [
        '루비 ',
        ruby.adult_sex_title,
        ', 트레이너 ',
        you.adult_sex_title,
        ', 정말 면목이 없습니다. 스태프분들께 그분의 방문을 정중히 거절해 달라고 미리 전달해 두었습니다만.',
      ]);
      era.printButton('「거절하기 힘든 상대였으니 어쩔 수 없지.」', 1);
      era.printButton('「소문대로 정말 위압감이 넘치는 분이네.」', 2);
      ret.push(await era.input());
      await you.say_and_wait('루비는 저 사람을 알아?');
      await ruby.say_and_wait('네.');
      await ruby.say_and_wait(
        '아마도 저를 상징 삼아 저희 일족과의 연줄을 과시하고 싶었던 것이겠지요.',
      );
      await you.say_and_wait(
        '최근에야 급부상한 인물이니, 든든한 뒷배가 간절했던 거겠지.',
        true,
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 한쪽에 놓인 위문품들로 시선을 돌렸다. 방금 다녀간 의원뿐만 아니라, 각계각층의 유력 인사들이 보내온 화환이 즐비했다.',
      ]);
      await ruby.say_and_wait('입구에 세워진 스탠드 화환 말이군요.');
      await ruby.say_and_wait(
        '저 화환을 보낸 기업은 현재 자금 융통에 꽤나 난항을 겪고 있는 모양이에요. 저희 일족의 지원을 바라고 있는 거겠죠.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '가 다시 다른 쪽을 바라보았다.',
      ]);
      await ruby.say_and_wait(
        '백합을 중심으로 꾸며진 저 꽃은, 현재 정계의 중심에 서 있는 인물이 보내온 것입니다.',
      );
      await ruby.say_and_wait(
        '편지까지 동봉한 의도는 아주 명백하죠. 저를 타깃으로 삼아, 장차 제 아이가 가지게 될 세력의 기반을 탄탄히 다지려는 심산입니다.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 목소리에는 그 어떤 감동의 기색도 없었다. 그녀는 마치 자신과는 전혀 상관없는 타인의 이야기를 늘어놓듯, ',
        you.get_colored_name(),
        '에게 각 화환에 담긴 내막을 덤덤히 설명해 주었다.',
      ]);
      era.printButton(
        '「꽃을 몇 송이 챙겨가서 트레이닝실에 장식해도 될까?」',
        1,
      );
      era.printButton(
        '「내가 너무 눈치 없었나?」',
        2,
      );
      ret.push(await era.input());
      if (ret.at(-1) === 1) {
        await ruby.say_and_wait('……');
        await ruby.say_and_wait(
          '마음대로 하세요. 다 들고 가기 힘드시다면 집사에게 말씀해 두겠습니다.',
        );
      } else {
        await ruby.say_and_wait(
          '당신이 보내준 축하는, 이미 제 마음에 확실하게 와닿았답니다.',
        );
        await ruby.say_and_wait(
          '당신의 손으로 훌륭하게 가꾸어 낸 저의 첫 무대를, 부디 한눈팔지 말고 지켜봐 주세요.',
        );
      }
      await era.printAndWait('시간이 되었으니, 전 경기장으로 가보겠습니다.');
      await you.say_and_wait('역시 내 눈에는 이 꽃이 가장 아름답네.', true);
      await era.printAndWait([
        you.get_colored_name(),
        '과(와) ',
        ruby.get_colored_name(),
        '가 지하 통로를 지날 때에도, 경기장 내부를 가득 채운 뜨거운 열기가 그대로 전해져 왔다.',
      ]);
      await era.printAndWait(
        '관중들의 환호성은 대부분 「화려한 일족」의 등장을 애타게 기대하는 목소리였다.',
      );
      await era.printAndWait([
        '막중한 압박감이 밀려오는 상황 속에서도, ',
        ruby.get_colored_name(),
        '가 너무나도 담담한 태도를 유지하고 있었기에, ',
        you.get_colored_name(),
        '은(는) 도리어 미세한 불안감을 느꼈다.',
      ]);
      era.printButton(
        `「${
          ruby.sex_code === 1 ? '도련님' : '아가씨'
        }답게, 이런 큰 무대에는 이미 익숙한 모양이네.」`,
        1,
      );
      era.printButton('「정말 괜찮은 거야?」', 2);
      ret.push(await era.input());
      if (ret.at(-1) === 2) {
        await ruby.say_and_wait(
          '준비는 아주 충분합니다. 불안해할 만한 요소는 단 하나도 없어요.',
        );
        era.printButton('「응응, 정말 아무 문제도 없어 보여.」', 1);
        era.printButton('「그렇다면, 솔직하게 말해줄 수 있을까?」', 2);
        ret.push(await era.input());
        if (ret.at(-1) === 2) {
          await ruby.say_and_wait('……');
          await ruby.say_and_wait('당신은 정말이지.');
          await ruby.say_and_wait(
            '남들의 기대를 한몸에 받는 이 상황이 무척 감사하면서도, 동시에 무거운 짐으로 다가오는 것은 사실입니다.',
          );
          await ruby.say_and_wait(
            '하지만 그렇다 하더라도, 결코 그런 감정에 휘둘리지는 않을 겁니다.',
          );
          await era.printAndWait([
            '그렇게 단호하게 말하는 ',
            ruby.get_colored_name(),
            '의 눈빛에서, ',
            you.get_colored_name(),
            '은(는) 정말로 그 어떤 동요의 기색도 찾아볼 수 없었다.',
          ]);
        }
      }
      await ruby.say_and_wait('그럼, 다녀오겠습니다.');
      era.printButton('「조심히 다녀와.」', 1);
      await era.input();
      await era.printAndWait([
        '홀로 모든 것을 짊어지는 ',
        ruby.sex,
        '에게 지금 ',
        you.get_colored_name(),
        '이(가) 할 수 있는 말은 그것뿐이었다.',
      ]);
      return ret;
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '때를 기다리며';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} hoch_rev 報知杯クイーンC（色付き名前）
     * @param {CharaTalk} oka_sho 桜花賞（色付き名前）
     * @param {CharaTalk} takz_kin 宝塚記念（色付き名前）
     * @param {CharaTalk} arim_kin 有馬記念（色付き名前）
     */
    const f = async (ruby, you, hoch_rev, oka_sho, takz_kin, arim_kin) => {
      const ret = [];
      await ruby.say_and_wait('다녀왔습니다.');
      era.printButton('「수고했어.」', 1);
      era.printButton('「우와, 스타킹이 엄청 더러워졌네.」', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await ruby.say_and_wait('감사합니다.');
      } else {
        await ruby.say_and_wait('지긋이——', true);
      }
      era.println();
      await era.printAndWait(
        '어쨌든, 화려한 일족의 이름에 부끄럽지 않은 멋진 데뷔전이었다.',
      );
      await ruby.say_and_wait(
        '잠시 후에 기자 회견이 있으니, 옷을 갈아입고 가겠습니다.',
      );
      era.printButton('「알겠어.」', 1);
      era.printButton('「내가 좀 도와줄까?」', 2);
      ret.push(await era.input());
      era.drawLine();
      await you.say_as_passer_by_and_wait('기자 A', [
        '아직 이르긴 합니다만, 트리플 티아라야말로 바로 ',
        ruby.actual_name_with_title,
        '의 본래 목표 노선이라고 생각하는 이들이 많습니다.',
      ]);
      await you.say_as_passer_by_and_wait(
        '기자 B',
        '오늘 경기를 보니 저도 그렇게 느껴지더군요.',
      );
      await you.say_as_passer_by_and_wait(
        '기자 B',
        '어머님과 대등하거나, 혹은 그 이상의 광채를 느꼈습니다.',
      );
      await you.say_as_passer_by_and_wait('기자 C', [
        '그렇고말고요. 그 이후에는 부디 ',
        takz_kin,
        '이나 ',
        arim_kin,
        ' 등의 레이스에도 출전해 주었으면 좋겠군요.',
      ]);
      await era.printAndWait('흥분과 기대감……');
      await ruby.say_and_wait('모두 감사드립니다.');
      await ruby.say_and_wait(
        '여러분께서 기대하시는 만큼의 활약을 반드시 보여드리겠습니다.',
      );
      await era.printAndWait([
        '이때, ',
        you.get_colored_name(),
        '의 머릿속에 번뜩이는 생각이 스쳤다! 데뷔전이 시작되기 전——',
      ]);
      await ruby.used_to_say_and_wait(
        '기대를 받는 상황은 무척 감사하면서도, 한편으로는 부담스럽기도 합니다.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '에게 이것은 평범하고도 당연한 일이다.',
      ]);
      await era.printAndWait('하지만……');
      era.printButton(`「나는 루비의 트레이너야.」`, 1);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        '가 주니어급에서 G1을 따낼 자질을 생각하면, 티아라 삼관조차 여정의 중간 지점에 불과할 것이다.',
      ]);
      await era.printAndWait([
        '기자들의 흥을 깨고 싶지 않았기에, ',
        you.get_colored_name(),
        '은(는) 이 일에 대해 입을 닫기로 했다.',
      ]);
      era.drawLine({ content: '기자회견이 끝난 뒤' });
      await ruby.say_and_wait('올해 안에는 훈련에만 집중하고 싶습니다.');
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 트레이너가 된 이후 ',
        you.get_colored_name(),
        '이(가) 알게 된 사실이 있었다.',
      ]);
      await ruby.say_and_wait(
        '트리플 티아라 전선이야말로 【화려한 일족】이 가장 중시하는 무대입니다.',
      );
      await era.printAndWait(
        '그 무대의 정점에 서기 위해서는 훈련을 거듭해 역량을 쌓을 필요가 있다.',
      );
      await era.printAndWait(
        '훈련을 꾸준히 쌓아 가면 실력도 한 단계 도약하는 법이다. 물론, 레이스에 출전해 실전 경험을 쌓는 선택지도 존재한다.',
      );
      era.printButton(`「루비.」`, 1);
      await era.input();
      await ruby.say_and_wait('당신이 무슨 뜻으로 말씀하시는지 이해합니다.');
      await ruby.say_and_wait('당연히 레이스 출주도 고려하고 있어요.');
      await ruby.say_and_wait(
        '하지만 현재로서는 제 신체의 본격화가 완전히 이루어졌다고 보기는 어렵습니다.',
      );
      await ruby.say_and_wait(
        '그러니 당분간은 훈련을 중심으로 하는 방침을 유지하고 싶습니다.',
      );
      await era.printAndWait('아무래도 더 이상 논쟁할 여지는 없는 듯하다.');
      await era.printAndWait([
        you.get_colored_name(),
        ' 역시 본래는 ',
        ruby.get_colored_name(),
        '의 신체를 좀 더 착실하게 단련시키고 싶었기에, 본인 또한 같은 생각을 하고 있다면 더할 나위 없이 좋은 일이었다——',
      ]);
      era.printButton('「알겠어.」', 1);
      await era.input();
      await ruby.say_and_wait('대단히 감사합니다.');
      await era.printAndWait([
        '그동안의 훈련 성과를 점검하기 위한 시험대로, ',
        you.get_colored_name(),
        '과(와) ',
        ruby.get_colored_name(),
        '는 ',
        hoch_rev,
        '——',
        oka_sho,
        '의 전초전을 새해 첫 중상 레이스로 골랐다.',
      ]);
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_35: (() => {
    const title = '화려한 최고 걸작';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} mother ダイイチルビーの母（劇情 NPC）
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     */
    const f = async (ruby, mother, you, callname) => {
      await era.printAndWait([
        '반복되는 트레이닝 속 어느 날, 【화려한 일족】의 서신을 읽은 ',
        you.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '와 함께 다이이치 가문의 본가를 방문할 준비를 하고 있었다.',
      ]);
      await era.printAndWait([
        ruby.sex,
        '와 신뢰 관계를 구축하기 위해서는, 우선 ',
        ruby.sex,
        '가 소중히 여기는 것들을 이해해야만 한다.',
      ]);
      await era.printAndWait(['그런데 출발 직전에……']);
      await ruby.say_and_wait(
        '죄송합니다만, 일정을 잠시 변경하도록 하겠습니다.',
      );
      await era.printAndWait([
        '이유를 전혀 전달받지 못한 채, ',
        you.get_colored_name(),
        '이(가) 안내받은 곳은 어느 호텔의 객실이었다. ',
        you.get_colored_name(),
        '은(는) 방에 준비되어 있던 정장으로 갈아입었다.',
      ]);
      await ruby.say_and_wait('조금 더 화려한 넥타이를 준비해 주시겠어요?');
      await you.say_as_passer_by_and_wait('집사', [
        '알겠습니다, ',
        ruby.sex_code === 1 ? '도련님' : '아가씨',
        '.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '을(를) 머리끝부터 발끝까지 훑어보더니, 눈을 감고 고개를 돌려버렸다.',
      ]);
      era.printButton(`「루비?」`, 1);
      await era.input();
      await ruby.say_and_wait('실례했습니다, 말씀이 늦었군요.');
      await ruby.say_and_wait(
        '어머님께서 제 트레이너 분이 본가에 오신다는 소식을 들으시고, 일부러 이곳까지 마중을 나와 주셨습니다.',
      );
      await you.say_and_wait('하아!?', true);
      era.drawLine();
      await era.printAndWait([
        ruby.uma_sex_title,
        '계에서 모르는 사람이 없으며 화려한 레이스를 수없이 남긴 ',
        '……',
      ]);
      await mother.say_and_wait([
        '처음 뵙겠군요, ',
        callname,
        '. 제가 다이이치 루비의 ',
        ruby.sex_code === 1 ? '아버지' : '어머니',
        ' 되는 사람입니다.',
      ]);
      await era.printAndWait([
        '눈앞에 있는 ',
        ruby.uma_sex_title,
        '는 경외심마저 자아내는 아름다움뿐만 아니라, ',
        ruby.sex,
        '의 용모, 분위기까지 그 모습이 마치——',
      ]);
      era.printButton('（성장한 듯한 다이이치 루비）', 1);
      await era.input();
      await mother.say_and_wait([
        '공항에서 ',
        callname,
        '이(가) 오신다는 이야기를 듣고 급히 찾아왔습니다. 갑작스럽게 찾아뵙게 되어 죄송합니다.',
      ]);

      era.printButton('「별말씀을요, 괜찮습니다.」', 1);
      await era.input();
      await mother.say_and_wait([
        '그동안 우리 ',
        ruby.sex_code === 1 ? '아들' : '딸',
        '이 신세를 많이 졌더군요.',
      ]);
      era.printButton(`「저야말로 ${ruby.sex}에게 신세를 지고 있습니다.」`, 1);
      await era.input();
      await ruby.say_and_wait([
        ruby.sex_code === 1 ? '아버' : '어머',
        '님, 이후에도 일정이 있으시지요? 저도 동행하겠습니다.',
      ]);
      await mother.say_and_wait('글쎄요~ 그랬던가요……');
      await you.say_and_wait('！', true);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '의 어머님에게 시선을 붙잡혔다. 그것은 화려한 일족의 정점에 선 자로서, ',
        you.get_colored_name(),
        '(이)라는 인간의 본질을 꿰뚫어 보려는 듯한 눈빛이었다.',
      ]);
      await era.printAndWait(
        '그 눈빛에는 사람의 마음을 압도하는 무시무시한 박력이 깃들어 있었다.',
      );
      await era.printAndWait([
        '이때, ',
        you.get_colored_name(),
        '의 머릿속에 테스트를 치르던 그날의 기억이 스쳐 지나갔다.',
      ]);
      await ruby.used_to_say_and_wait(
        '그렇습니다. 부디 그 마음가짐을 잊지 말아 주십시오. 만약 당신에게 목표로 삼은 대상이 있다면, 그에 걸맞은 품격과 행동거지를 갖추어야만 합니다.',
      );
      await ruby.say_and_wait(
        '그래야만 언젠가 자신이 원하는 모습이 될 수 있는 법이니까요.',
        true,
      );
      await era.printAndWait('그리고, 그 당시에 지었던 옅은 미소까지.');
      await era.printAndWait([
        ruby.sex,
        '의 트레이너인 이상, ',
        ruby.sex,
        '와 나란히 설 때는 당당히 가슴을 펴는 것이 마땅하다.',
      ]);
      await mother.say_and_wait('————');
      await mother.say_and_wait('당신도 제 레이스를 알고 있겠지요.');
      era.printButton('고개를 끄덕인다', 1);
      await era.input();
      await mother.say_and_wait('그렇습니까.');
      await ruby.say_and_wait([
        ruby.sex_code === 1 ? '아버' : '어머',
        '님, 아직……',
      ]);
      await mother.say_and_wait('아니요, 이미 끝났습니다.');
      await mother.say_and_wait([
        callname,
        ', 이후의 일은 당신의 판단에 맡기도록 하지요.',
      ]);
      await mother.say_and_wait([
        ruby.sex,
        '가 어떤 아이인지 잊지 말아 주세요.',
      ]);
      await ruby.say_and_wait('————!', true);
      await mother.say_and_wait(
        '대단히 죄송합니다만, 다음 일정이 있어 이만 역으로 가 봐야겠군요.',
      );
      await mother.say_and_wait(
        '우리 가문의 역사는 그 서적들과…… 루비의 입을 통해 천천히 알아 가도록 하십시오.',
      );
      await mother.say_and_wait([
        callname,
        ', 저희 ',
        ruby.sex_code === 1 ? '아들' : '딸',
        '을 부디 잘 부탁드립니다.',
      ]);
      await era.printAndWait([
        '돌아가실 시간이 되어 ',
        ruby.get_colored_name(),
        '의 ',
        ruby.sex_code === 1 ? '아버님' : '어머님',
        '을 배웅해 드린 뒤, ',
        you.get_colored_name(),
        '은(는) 서재의 수많은 소장 도서들을 살펴보고 트레센 학원으로 돌아왔다.',
      ]);
      era.printButton(
        `「${ruby.sex_code === 1 ? '아버' : '어머'}님은 대단한 분이시네.」`,
        1,
      );
      era.printButton(
        `「루비의 ${ruby.sex_code === 1 ? '아빠' : '엄마'}는 루비보다 더 대단하네.」`,
        2,
      );
      const ret = await era.input();
      await ruby.say_and_wait([
        ruby.sex_code === 1 ? '아버' : '어머',
        '님은 화려한 일족의 『결정체』이자, 지금도 일족을 대표하는 상징이십니다.',
      ]);
      await ruby.say_and_wait([
        ruby.sex_code === 1 ? '아버님…… ' : '어머님…… ',
        ruby.sex,
        ', 당신께……',
      ]);
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('아니요, 아무것도 아닙니다.');
      await ruby.say_and_wait([
        '조금 전 물으셨지요. 『당신 눈에 ',
        ruby.sex_code === 1 ? '아버' : '어머',
        '님은 어떤 ',
        ruby.uma_sex_title,
        '인가』 하고요.',
      ]);
      await ruby.say_and_wait('답은 가장 화려한 분이라는 것입니다.');
      await ruby.say_and_wait(
        '현역 시절의 레이스 영상을 보신다면 누구라도 그렇게 생각하실 겁니다.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 눈이 순간 반짝였다.',
      ]);
      await era.printAndWait([
        '그러고 보니, ',
        ruby.sex,
        '는 어머님을 만난다는 걸 알자마자 ',
        you.get_colored_name(),
        '이(가) 옷을 갈아입도록 준비했었다.',
      ]);
      era.printButton(
        `「${ruby.sex_code === 1 ? '아버' : '어머'}님을 무척 존경하는구나.」`,
        1,
      );
      await era.input();
      await ruby.say_and_wait([
        '네, 제가 나아갈 길에서 전문성과 눈부신 업적으로 귀감이 되어 주시는 분이기에, 진심으로 존경하고 있습니다.',
      ]);
      await ruby.say_and_wait([
        ruby.sex_code === 1 ? '아버' : '어머',
        '님께서 남기신 위대한 발자취…… 일족의 번영을 위해 제가 본받아야 할 것입니다.',
      ]);
      await era.printAndWait([
        '어째서 그녀가 트리플 티아라 노선을 고집하려 하는가…… ',
        you.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '에게서 가문의 역사를 뛰어넘고자 하는, 강한 의지를 느꼈다.',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47: (() => {
    const title = '그러므로, 안이해질 수 없다';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     */
    const f = async (ruby, you, callname) => {
      await era.printAndWait('훈련장');
      await ruby.say_and_wait([callname, ', 다시 시작하도록 하죠.']);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '에게서 ',
        ruby.sex,
        '의 다리에 선천적인 문제가 있다는 사실을 들었다.',
      ]);
      await era.printAndWait(
        '정확히는 【다리 형태에 문제가 있으나 당장 레이스에는 지장이 없다】는 내용이었다.',
      );
      await era.printAndWait([
        '그렇기 때문에, 처음에는 굳이 ',
        you.get_colored_name(),
        '에게 따로 보고하지 않았던 모양이다.',
      ]);
      await era.printAndWait([
        '하지만, ',
        you.get_colored_name(),
        '이(가) 조심스럽게 질문했을 때도 딱히 숨기려 들지 않았다.',
      ]);
      await era.printAndWait([
        '달릴 때 가해지는 부하가 매우 큰 부위였기에, ',
        you.get_colored_name(),
        '은(는) 이것이 그리 간단히 넘길 문제가 아니라고 판단했다.',
      ]);
      era.printButton('「정말로, 괜찮은 거야?」', 1);
      await era.input();
      await ruby.say_and_wait('당연히 문제없습니다. 게다가 부모님께서도……');
      await ruby.say_and_wait(
        '부모님뿐만 아니라, 주변의 모든 분께서 수많은 지원과 도움을 아끼지 않으셨으니까요.',
      );
      await era.printAndWait([
        '찰나의 순간, ',
        ruby.get_colored_name(),
        '의 표정에 무척이나…… 고단한 기색이 스쳤다.',
      ]);
      era.printButton('「선천적인 변형인 거야?」', 1);
      await era.input();
      await ruby.say_and_wait(
        '네. 태어났을 때 의사에게 달리지 못할 수도 있다는 말을 들었습니다.',
      );
      await ruby.say_and_wait(
        '하지만 부모님께서는 저를 위해 모든 수단과 방법을 동원하여 헌신적으로 이 문제에 맞서 주셨지요.',
      );
      era.printButton('「그래서 그렇게 간절하게 달리는 거였구나.」', 1);
      await era.input();
      await ruby.say_and_wait('그렇게 하지 않으면 안 되는 것 아닌가요?');
      await ruby.say_and_wait([
        '——저는 『화려한 일족』의 상징이 될 ',
        ruby.uma_sex_title,
        '로 태어나 이 고귀한 삶을 누리고 있으니까요.',
      ]);
      await ruby.say_and_wait(
        '그 노력의 결과로 다리에 가해지는 부하를 최적화하는 주법을 체득했고, 지금은 달리기 자세도 완전히 개선되었습니다.',
      );
      await ruby.say_and_wait(
        '현재는 주치의께서도 격렬한 레이스를 충분히 버텨 낼 수 있는 신체라고 보증해 주셨습니다.',
      );
      await ruby.say_and_wait('만약, 만에 하나라도……');
      era.printButton('「지금은 우선 트레이닝에만 집중하자.」', 1);
      era.printButton('「네 다리를 잠시 확인해 봐도 될까?」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await ruby.say_and_wait(
          '네. 제 스스로 확신이 서기 전까지는 신체를 더욱 단련해 나가겠습니다.',
        );
        await ruby.say_and_wait(
          '제가 완수해야 할 사명은 이미 정해져 있으니까요.',
        );
        await ruby.say_and_wait(
          '사담이 조금 길어졌군요. 저는 코스로 가 보겠습니다.',
        );
        await era.printAndWait('트레이닝은 무사히 마무리되었다.');
      } else {
        await ruby.say_and_wait('불순한 동기——로 보이지는 않는군요.');
        await ruby.say_and_wait(
          '당신은 공공장소에서 이런 행위를 요구하는 것이 무엇을 의미하는지 알고 계십니까?',
        );
        era.printButton('쪼그려 앉는다.', 1);
        await era.input();
        await ruby.say_and_wait('……');
        await ruby.say_and_wait('최소한, 저쪽에 있는 벤치로……');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          ruby.get_colored_name(),
          '의 가냘픈 두 다리를 한 치 한 치 세심하게 살펴보았다.',
        ]);
        await era.printAndWait([
          '무언가에 홀린 듯, ',
          you.get_colored_name(),
          '은(는) 스타킹의 한 자락을 가볍게 잡아당겼다가 「타악」 하고 손을 놓았다.',
        ]);
        await era.printAndWait([
          '당혹감과 수치심에 휩싸인 ',
          ruby.sex_code === 1 ? '어린 도련님' : '아가씨',
          '는 아랫입술을 지그시 깨문 채 ',
          you.get_colored_name(),
          '을(를) 노려봤다. ',
          you.get_colored_name(),
          '이(가) 꾸중을 들을 각오를 했을 때였다.',
        ]);
        await ruby.say_and_wait('신발을 신겨 주십시오.');
        await era.printAndWait(['그 뒤 트레이닝은 차질 없이 끝났다.']);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  oc_47_1: (() => {
    const title = '새해 참배';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     */
    const f = async (ruby, you, callname) => {
      await ruby.say_and_wait('새해 복 많이 받으세요.');
      era.printButton('「새해 복 많이 받아.」', 1);
      await era.input();
      await ruby.say_and_wait(
        '트레이너님 덕분에 무사히 새로운 한 해를 맞이할 수 있었습니다.',
      );
      await ruby.say_and_wait(
        '이제 어머님께서 승리하셨던 레이스와, 미처 승리하지 못하셨던 레이스에서 만족스러운 결과를 남겨야겠지요……',
      );
      await you.say_and_wait('어머님의 한을 풀어드리겠다는 거구나.', true);
      await ruby.say_and_wait(
        '지금은 다리의 불안 요소가 완전히 해소되었다고 단언할 수 있습니다.',
      );
      await ruby.say_and_wait(
        '벚꽃상의 전초전에 출주하여, 당신에게 그것을 증명해 보이고 싶습니다.',
      );
      await era.printAndWait(
        '하고 싶었던 말을 뺏기고 말았다…… 하지만 담당 우마무스메와 목표가 같다는 건 좋은 일이다.',
      );
      await ruby.say_and_wait('올해도 잘 부탁드립니다.');
      era.printButton('「나만 믿으라고.」', 1);
      await era.input();
      await ruby.say_and_wait('네.');
      era.printButton(
        `「그런데 루비는 이따 다른 분들께도 인사드리러 가는 거지?」`,
        1,
      );
      await era.input();
      await era.printAndWait(
        '정재계에 이름을 떨치는 명문가의 후손인 만큼, 연초에는 무척 바쁠 것이다.',
      );
      await ruby.say_and_wait('아닙니다.');
      await ruby.say_and_wait('일족 분들의 일정은 이미 잡혀 있습니다.');
      await ruby.say_and_wait(
        '정말로 필요한 일이 생긴다면, 다시 연락이 오겠지요.',
      );
      await era.printAndWait(
        '그렇다면 지금은 시간이 넉넉하다는 뜻이다.',
      );
      await ruby.say_and_wait('그러면, 저는 자율 연습을 하러 가보겠습니다.');
      await ruby.say_and_wait('인사는 여기까지 드렸으니, 이만 실례하겠습니다.');
      await era.printAndWait('잠깐만——');
      await era.printAndWait([
        '새해 벽두부터 담당 우마무스메가 잠시라도 쉬어 갔으면 하는 마음에, ',
        you.get_colored_name(),
        '이(가) 떠올린 생각은……',
      ]);
      era.printButton('「신춘 휘호 쓰기.」 (스피드 +20)', 1);
      era.printButton('「명절 음식은 좀 먹었어?」 (스태미나 +20)', 2);
      era.printButton(
        '「우리만의 파티 타임을 시작하자!」 (스킬 포인트 +20)',
        3,
      );
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait([
            '갑자기 붓글씨 이야기를 꺼낸 것은, ',
            you.get_colored_name(),
            '이(가) 새해에 신춘 휘호를 붙이는 풍습을 꽤 좋아하기 때문이었다.',
          ]);
          await ruby.say_and_wait('의외군요……');
          await era.printAndWait([
            ruby.get_colored_name(),
            '의 글씨체는 고상하고 정갈하여, 무척 아름답다고 할 수 있었다.',
          ]);
          await era.printAndWait([
            '하지만 서예를 조금 배운 ',
            you.get_colored_name(),
            '의 필체와 비교하면, 아무래도 조금 빛이 바래 보였다.',
          ]);
          await ruby.say_and_wait([callname, ', 저를 지도해 주십시오.']);
          await era.printAndWait([
            ruby.uma_sex_title,
            ' 특유의 승부욕은 정말 어디서나 드러나는구나.',
          ]);
          await era.printAndWait([
            '그렇게 감탄한 ',
            you.get_colored_name(),
            '은(는) 우선 붓을 잡는 자세를 교정해 주기 위해 등 뒤에서 ',
            ruby.get_colored_name(),
            '의 가냘픈 손을 감싸 쥐었다.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '과(와) ',
            ruby.get_colored_name(),
            '는 서예를 함께 익히며 즐거운 오후를 보냈다.',
          ]);
          break;
        case 2:
          await ruby.say_and_wait('……');
          await ruby.say_and_wait(
            '저녁에는 당주 분께서 다이이치 가문의 저택에서 연회를 베푸실 예정입니다.',
          );
          await ruby.say_and_wait(
            '당신께서도 참석해 주신다면 더할 나위 없이 좋겠군요.',
          );
          await ruby.say_and_wait(
            '안심하십시오, 화려한 일족 내부의 만찬회니까요.',
          );
          await ruby.say_and_wait('어머님께도 인사를 드리러 가시겠습니까?');
          await era.printAndWait([
            you.get_colored_name(),
            '의 예상과는 다르게, 아주 편안하고 아늑한 연회 시간을 즐겼다.',
          ]);
          break;
        case 3:
          await ruby.say_and_wait('훗, 후훗.');
          await ruby.say_and_wait('우리 두 사람뿐인데도 파티를 여는 건가요?');
          await era.printAndWait([
            '어째서인지, ',
            ruby.get_colored_name(),
            '가 무척 즐거운 듯 미소를 지었다.',
          ]);
          await ruby.say_and_wait(
            '좋습니다. 아쉽게도 저는 『태양』과 달라서 이 방면에 그리 박식하지 못하답니다.',
          );
          await ruby.say_and_wait(
            '그러니 당신께서 저를 한껏 즐겁게 만들어 주시겠어요?',
          );
          await era.printAndWait([
            you.get_colored_name(),
            '과(와) ',
            ruby.get_colored_name(),
            '는 무척이나 유쾌한 하루를 보냈다.',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  hoch_rev_win: (() => {
    const title = '지금이야말로 화려한 순간';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     * @param {PrintedSpan} oka_sho 桜花賞（色付き名前）
     */
    const f = async (ruby, callname, oka_sho) => {
      await ruby.say_and_wait('마침내 해냈군요……');
      await ruby.say_and_wait('……');
      era.drawLine({ content: '대기실' });
      await ruby.say_and_wait('오늘 레이스에 대한 평가를 부탁드립니다.');
      era.printButton('「우선 스타트 시점부터 짚어 볼까.」', 1);
      await era.input();
      await era.printAndWait('피드백 회의가 한동안 이어졌다……');
      await ruby.say_and_wait([
        callname,
        ', 오늘은 여기까지만 해도 괜찮을까요?',
      ]);
      await ruby.say_and_wait(
        '그럼 방금 짚어 본 보완점을 토대로 훈련 계획을 조정하겠습니다.',
      );
      await era.printAndWait([
        '다음 목표는 ',
        oka_sho,
        '. ',
        ruby.get_colored_name(),
        '의 ',
        ruby.sex_code === 1 ? '아버님' : '어머님',
        '도 우승했던 티아라 삼관의 첫 경기다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  oka_sho_win: (() => {
    const title = '기대, 깊어지다';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {PrintedSpan} yush_him オークス（色付き名前）
     */
    const f = async (ruby, yush_him) => {
      await era.printAndWait([
        '레이스가 끝난 후, ',
        ruby.get_colored_name(),
        '는 뜻깊은 승리를 거두었지만 여전히 차분한 표정이었다.',
      ]);
      era.printButton('「축하해.」', 1);
      await era.input();
      await ruby.say_and_wait('감사합니다. 하지만 아직 멀었습니다.');
      await era.printAndWait([
        yush_him,
        ', 티아라 노선의 두 번째 경기. ',
        ruby.get_colored_name(),
        '의 어머님께서 고배를 마셨던 무대이기도 하다.',
      ]);
      await era.printAndWait([
        '중거리 이상의 레이스에서는 ',
        ruby.get_colored_name(),
        '의 실력은 아직 미지수였다.',
      ]);
      await ruby.say_and_wait('제가 가진 과제는 아마도……');
      await ruby.say_and_wait(
        '아니요. 어떤 문제가 있든 간에, 신속하게 해결하면 그만입니다.',
      );
      await ruby.say_and_wait('부디 철저하게 지도해 주십시오.');
      await era.printAndWait([
        '그렇게 다음 목표 레이스인 ',
        yush_him,
        '를 위해 다시 트레이닝의 나날이 시작되었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_19: (() => {
    const title = '그저 정면만을 응시하며';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     * @param {PrintedSpan} yush_him オークス（色付き名前）
     */
    const f = async (ruby, you, callname, yush_him) => {
      await era.printAndWait([
        '2400m인 ',
        yush_him,
        '를 겨냥하여, ',
        ruby.get_colored_name(),
        '는 가혹한 스태미나 단련에 매진하고 있었다.',
      ]);
      era.printButton('「상태는 좀 어때?」', 1);
      await era.input();
      await ruby.say_and_wait('아무 문제 없습니다.');
      era.printButton('「정말로 무리하는 거 아니야?」', 1);
      await era.input();
      await ruby.say_and_wait('네.');
      await ruby.say_and_wait('단순히 제 체력이 부족한 것뿐입니다.');
      await ruby.say_and_wait(
        '트레이너님께서 스태미나를 보완할 수 있는 훈련 방안을 더 많이 제안해 주셨으면 합니다.',
      );
      await ruby.say_and_wait('그럼, 저는 한 바퀴 더 돌고 오겠습니다.');
      await you.say_and_wait('단순한 체력 부족이라……', true);
      await era.printAndWait('확실히, 그것도 원인 중 하나일 것이다.');
      await era.printAndWait([
        '하지만 그것보다는, 인간의 힘으로는 어찌할 수 없는 거대한 장벽이 ',
        ruby.sex,
        '의 앞을 가로막고 있는 듯한 기분이 들었다. 그것은 바로——',
      ]);
      era.printButton('주법.', 1);
      era.printButton('적성.', 2);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 보기에 「적성」 그 자체에는 우열이 존재하지 않는다.',
      ]);
      await era.printAndWait(
        '……다만, 목표에 따라서는 그것이 넘기 힘든 벽이 되기도 한다.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '가 목표로 삼은 레이스 중에는 중장거리 경기가 다수 포함되어 있었기에, ',
        ruby.sex,
        '가 이 길을 걷는 이상 수많은 고난과 장벽에 부딪힐 것이 자명했다.',
      ]);
      await era.printAndWait(
        '현재 단계에서는 확답을 내릴 수 없으므로, 지금은 그저 묵묵히 지구력 훈련을 반복할 뿐이다.',
      );
      await era.printAndWait(
        '이 훈련이 유의미한 성과를 거둔다면, 그것을 기반으로 완전히 새로운 트레이닝 플랜을 수립해야 하리라.',
      );
      era.drawLine();
      await ruby.print_and_wait(
        '어느덧 방과 후가 되었다.',
      );
      await ruby.say_and_wait(
        '2400m는 제게 조금 가혹할지도 모르겠습니다. 적성 밖이지요.',
        true,
      );
      await ruby.say_and_wait(
        [
          callname,
          '께서도 그렇게 추측하고 계셨겠지. 나 역시 몸으로 실감하고 있고.',
        ],
        true,
      );
      await ruby.say_and_wait('분해……');
      await ruby.say_and_wait(
        [
          '하지만 반드시 ',
          yush_him,
          '에 도전하여, 어머님께서 끝내 이루지 못하셨던 승리를 거머쥐겠습니다.',
        ],
        true,
      );
      await ruby.say_and_wait(
        '일족의 역사란, 그렇게 한 걸음씩 위업을 쌓아 올리는 것이니까요.',
        true,
      );
      await you.say_as_passer_by_and_wait('집사', [
        ruby.sex_code === 1 ? '도련님' : '아가씨',
        ', 모실 시간이 되었습니다.',
      ]);
      await ruby.say_and_wait('죄송하지만 일정을 변경해야겠군요.');
      await ruby.say_and_wait(
        '지금부터 자율 연습을 진행할 테니, 귀가 후에 필요한 조치들은 당신 선에서 처리해 주십시오.',
      );
      await you.say_as_passer_by_and_wait(
        '집사',
        '잘 알겠습니다. 이쪽 일은 전혀 염려치 마시고, 부디 훈련에만 온전히 집중해 주십시오.',
      );
      await ruby.say_and_wait('네.');
      await ruby.say_and_wait('나아가야 합니다.');
    };
    f.title = title;
    return f;
  })(),
  yush_him_win: (() => {
    const title = '피전 블러드';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     */
    const f = async (ruby, you, callname) => {
      await ruby.say_and_wait('위화감.');
      await ruby.say_and_wait(
        '어떤 책략도 쓰지 않았고, 타이밍을 잴 필요조차 없이, 그저 순수한 신체 능력만으로 기어이……',
      );
      await ruby.say_and_wait(
        '제가 저 자신이 아닌 다른 누군가에게 장악당했던 건가요?',
      );
      await ruby.say_and_wait([callname, ', 당신은 대체……']);
      era.printButton('（눈치챘구나）', 1);
      era.printButton('「나쁘지 않았지?」', 2);
      const ret = await era.input();
      await ruby.say_and_wait('제 몸에 무슨 짓을 한 건가요?');
      await ruby.say_and_wait('……');
      await ruby.say_and_wait(
        '아니요, 제가 실언을 했습니다. 앞으로도 계속 당신 뜻대로 해 주세요.',
      );
      await ruby.say_and_wait(
        '일족을 위해서라면, 전 언제든 제 모든 것을 당신에게 바칠 준비가 되어 있으니까요.',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  yush_him_lose: (() => {
    const title = '참나무 잎사귀는 넓다';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     * @param {PrintedSpan} rose_sta ローズステークス（色付き名前）
     * @param {PrintedSpan} shuk_sho 秋華賞（色付き名前）
     */
    const f = async (ruby, you, callname, rose_sta, shuk_sho) => {
      await ruby.say_and_wait('그런가요, 역시, 저는……', true);
      await ruby.say_and_wait(
        '대단히 죄송합니다. 아직 미숙한 모습을 보여 드리고 말았군요.',
      );
      await ruby.say_and_wait([
        callname,
        '께서도 오늘을 위해 훈련 외에도 수많은 도움을 주셨는데 말이죠.',
      ]);
      await ruby.say_and_wait(
        '보답을 해 드리지 못해 무척 송구스러울 따름입니다.',
      );
      era.printButton('「나야말로 미안해……」', 1);
      era.printButton('「사실 다른 방식으로 보답할 방법이 있어.」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await ruby.say_and_wait('……네?');
        await era.printAndWait([
          '속마음을 숨긴 채 겉으로만 평온한 모습이 ',
          you.get_colored_name(),
          '에게는 무척 분하게 느껴졌다.',
        ]);
        era.printButton('「다음번엔…… 반드시 네가……」', 1);
        await era.input();
        await ruby.say_and_wait('……');
        await ruby.say_and_wait('……대단히, 감사합니다.');
        await ruby.say_and_wait([
          '다음 목표는 ',
          shuk_sho,
          '입니다만, 그전에 한 가지 제안하고 싶은 것이 있습니다.',
        ]);
        await ruby.say_and_wait([
          '그 전초전으로서 치러지는 ',
          rose_sta,
          '에 출전하고 싶습니다.',
        ]);
        await ruby.say_and_wait(
          '여름 합숙 또한 고되겠지만, 본 무대인 레이스에서 최상의 컨디션을 유지하기 위해서는 필요한 선택입니다.',
        );
        await era.printAndWait(
          '확실히 중간에 레이스를 한 번 거치면 큰 경기에서 몸이 더 잘 적응할 터였다.',
        );
        era.printButton('「알겠어.」', 1);
        await era.input();
        await ruby.say_and_wait('부탁드리겠습니다.');
        era.printButton('「그럼, 입구에서 기다릴게.」', 1);
        await era.input();
        await ruby.say_and_wait('네.');
      } else {
        await ruby.say_and_wait('그런 농담은 두 번 다시 듣고 싶지 않군요.');
        era.printButton('「레이스는 즐겼어?」', 1);
        await era.input();
        await ruby.say_and_wait('네?');
        era.printButton('「한번 레이스 자체를 즐겨 봐.」', 1);
        await era.input();
        era.printButton(
          '「너를 어떻게 승리로 이끌지는 내가 고민할 몫이니까.」',
          1,
        );
        await era.input();
        await era.printAndWait([
          ruby.get_colored_name(),
          '가 고개를 숙인 채 무언가를 깊이 생각하는 사이, ',
          you.get_colored_name(),
          '은(는) 먼저 자리를 떴다.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '여름 합숙 (클래식 시즌)';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} yush_him オークス（色付き名前）
     * @param {PrintedSpan} shuk_sho 秋華賞（色付き名前）
     */
    const f = async (ruby, you, yush_him, shuk_sho) => {
      await era.printAndWait([
        '가벼운 조깅을 하던 도중, ',
        ruby.get_colored_name(),
        '가 중심을 잃고 엎어졌다.',
      ]);
      era.printButton('「괜찮아!?」', 1);
      await era.input();
      await ruby.say_and_wait(
        '모래사장에 발이 걸렸을 뿐입니다. 아무렇지도 않아요.',
      );
      era.printButton('「어디 다친 데는 없고?」', 1);
      await era.input();
      await ruby.say_and_wait('결단코 그런 일은 없습니다.');
      await era.printAndWait('안색을 보아하니 정말 상처는 없는 듯했으나……');
      await era.printAndWait([
        '여름 합숙이 시작된 이래로, ',
        ruby.get_colored_name(),
        '는 매일같이 자신을 한계까지 몰아붙이고 있었다.',
      ]);
      await era.printAndWait([
        '오직 다가올 ',
        shuk_sho,
        '에서 확실한 성과를 내기 위해서.',
      ]);
      await era.printAndWait([
        '모처럼 아름다운 바다에 찾아왔으니, ',
        you.get_colored_name(),
        '은(는) 기분도 전환할 겸 한 가지 제안을 떠올렸다……',
      ]);
      era.printButton('「나비를 잡으러 가볼까?」 (파워 +10)', 1);
      era.printButton('「그럼 지구력을 단련하자.」 (근성 +10)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await ruby.say_and_wait('……이해할 수 없는 제안이군요.');
        era.printButton(
          '「이 해변에만 서식하는 아주 특이한 종류래. 화려하고 고귀한 게 너랑 참 잘 어울려.」',
          1,
        );
        await era.input();
        await ruby.say_and_wait('……');
        await ruby.say_and_wait(
          '고통스러운 고치를 찢고 나오는 나비라니, 어쩌면 지금의 제게는 과분한 비유일지도 모르겠군요.',
        );
        await era.printAndWait([
          ruby.get_colored_name(),
          '가 호기심 어린 눈으로 나비를 쫓아다니는 동안, 그녀의 화려한 양산은 ',
          you.get_colored_name(),
          '이(가) 대신 받쳐 들었다.',
        ]);
        await era.printAndWait([
          '양산 그늘 아래에서 나비를 바라보며 맑은 미소를 짓는 ',
          ruby.teen_sex_title,
          '에게서, 드디어 이 나이대 ',
          ruby.child_sex_title,
          '다운 천진난만함이 엿보였다.',
        ]);
      } else {
        await ruby.say_and_wait([
          yush_him,
          '에서 보여드린 제 볼품없는 달리기 때문이군요.',
        ]);
        await era.printAndWait([
          '역시 ',
          ruby.get_colored_name(),
          '의 중거리 적성은 단거리나 마일에 비하면 크게 떨어졌다.',
        ]);
        await era.printAndWait([
          '천부적인 속도야말로 최고의 무기이자, 동시에 ',
          ruby.sex,
          '의 거대한 약점이었던 것이다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 철저히 지구력 보완을 중심으로 삼아, ',
          ruby.get_colored_name(),
          '에게 혹독한 연습을 계속하게 했다.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '얻어낸 계시';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     */
    const f = async (ruby, you, callname) => {
      await ruby.say_and_wait([callname, '.']);
      await ruby.say_and_wait('당신은, 제 달리기 속에서 광채를 발견하셨나요?');
      era.printButton('「그래.」', 1);
      await era.input();
      await ruby.say_and_wait(
        '이 무기를 잘 활용한다면, 저 역시 도달할 수 있을지도……',
      );
      await ruby.say_and_wait(
        '이 두 다리로 가장 눈부신 광채를 선보일 수만 있다면……',
      );
      await ruby.say_and_wait(
        '선택한 노선에 왕관이 없더라도, 그 혈통은 분명 이 몸에 흐르고 있습니다.',
      );
      await ruby.say_and_wait(
        '왕도 노선에서만 빛날 수 있다고 믿었던 저도 그 정도의 그릇이었군요.',
      );
      await ruby.say_and_wait(
        '하지만 당신이라면, 제가 다른 길에서도 사명을 다할 수 있게 해 줄 수 있습니다.',
      );
      await ruby.say_and_wait('제게 가장 어울리는 방식으로 말이죠.');
      await ruby.say_and_wait('이번 달도 고생 많으셨습니다.');
      await ruby.say_and_wait(
        '당신 없이는 앞으로 나아갈 수 없다는 사실을 뼈저리게 실감했습니다.',
      );
      await ruby.say_and_wait('우선 가문에 이 결단을 전해야겠군요.');
      await ruby.say_and_wait('그 뒤에도, 부디 앞으로 잘 부탁드립니다.');
    };
    f.title = title;
    return f;
  })(),
  rose_sta_win: (() => {
    const title = '화려한 변화';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     * @param {PrintedSpan} shuk_sho 秋華賞（色付き名前）
     * @param {PrintedSpan} takm_kin 高松宮記念（色付き名前）
     * @param {PrintedSpan} eliz_cup エリザベス女王杯（色付き名前）
     */
    const f = async (ruby, you, callname, shuk_sho, takm_kin, eliz_cup) => {
      const ret = [];
      await ruby.say_and_wait('——음?');
      await ruby.say_and_wait(
        '오른발이…… 방금 아주 잠깐 이상한 느낌이……',
        true,
      );
      await ruby.say_and_wait(
        '조금만 경과를 지켜보도록 하죠. 계속 신경 쓰인다면 그때……',
        true,
      );
      await era.printAndWait([
        '——며칠 후, ',
        you.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '에게서 「다리 쪽에 미세한 위화감이 느껴진다」는 보고를 받았다……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 즉시 ',
        ruby.get_colored_name(),
        '를 데리고 평소 진료를 받던 주치의를 찾아갔다.',
      ]);
      await you.say_as_passer_by_and_wait('의사', [
        ruby.get_colored_name(),
        '의 오른쪽 다리에는 급성 화농성 질환이 있습니다.',
      ]);
      await you.say_as_passer_by_and_wait(
        '의사',
        '이른바 【봉와직염】이라고 하는 것이죠.',
      );
      await you.say_and_wait('!', true);
      await you.say_as_passer_by_and_wait(
        '의사',
        '다행히 그리 심각한 상황은 아니니 안심하십시오.',
      );
      await you.say_as_passer_by_and_wait(
        '의사',
        '위화감이 들기 시작한 초기 단계에 곧바로 진료를 받으러 온 덕분입니다.',
      );
      await you.say_as_passer_by_and_wait('의사', [
        '두 분의 다음 목표인 ',
        shuk_sho,
        '이 시작되기 전까지는 충분히 완치될 수 있습니다.',
      ]);
      await ruby.say_and_wait('……');
      await ruby.say_and_wait(
        '결정했습니다. 올해 예정되어 있던 목표 레이스 출전은 잠정 보류하겠어요.',
      );
      await ruby.say_and_wait(
        '제 다리는 태생적으로 문제가 있으니, 어쩔 수 없는 일입니다.',
      );
      await ruby.say_and_wait(
        '다리 문제에 관해서는 증상의 경중을 막론하고 늘 신중하게 대처해야 합니다.',
      );
      await ruby.say_and_wait('……');
      await ruby.say_and_wait([callname, '.']);
      await ruby.say_and_wait(
        '레이스 출전 여부에 관한 모든 판단은 당신에게 일임하겠습니다.',
      );
      era.printButton('「그래, 그래.」', 1);
      era.printButton('「나만 믿어줘.」', 2);
      ret.push(await era.input());
      await you.say_as_passer_by_and_wait(
        '의사',
        '하지만 정말로 괜찮겠습니까?',
      );
      await you.say_as_passer_by_and_wait('의사', [
        shuk_sho,
        '과 ',
        eliz_cup,
        '는 당신의 오랜 꿈이었을 텐데요.',
      ]);
      await ruby.say_and_wait('……꿈.');
      await ruby.say_and_wait('신경 써 주신 호의에는 감사드립니다만……');
      await ruby.say_and_wait('하지만, 제게는 이미 새로운 사명이 생겼습니다.');
      await you.say_as_passer_by_and_wait(
        '집사',
        '한창 대화 나누시는 중에 실례하겠습니다.',
      );
      await you.say_as_passer_by_and_wait('집사', [
        ruby.sex_code === 1 ? '도련님' : '아가씨',
        ', 곧바로 회견 일정을 잡아 드릴까요?',
      ]);
      await ruby.say_and_wait('네, 그렇게 진행해 주세요.');
      await ruby.say_and_wait(
        '예정보다 조금 앞당겨지긴 했습니다만…… 목표 레이스 변경 건과 함께 오늘 공식 발표를 하도록 하죠.',
      );
      era.drawLine({ content: '기자회견' });
      await you.say_as_passer_by_and_wait('기자 A', [
        '트레이너 ',
        you.adult_sex_title,
        ', 방금 발표하신 내용에 틀림이 없는 건가요?',
      ]);
      era.printButton('「네, 맞습니다. 아무 문제 없습니다.」', 1);
      await era.input();
      await ruby.say_and_wait(
        '그리고 한 가지 더, 여러분께 보고드릴 말씀이 있습니다. 향후 목표 레이스에 관해서입니다.',
      );
      await ruby.say_and_wait([
        '다가오는 봄의 ',
        takm_kin,
        '에 출전하기로 결정했습니다.',
      ]);
      await ruby.say_and_wait(
        '금일 이 자리에서 저 다이이치 루비는 단거리 전선에 전격 합류할 것임을 선언합니다.',
      );
      await you.say_and_wait('에에에에엑?!', true);
      era.drawLine();
      await era.printAndWait(
        '간략하게 준비된 기자 회견은 순조롭게 마무리되었다——',
      );
      await ruby.say_and_wait('오늘 정말 수고 많으셨습니다.');
      era.printButton('「오늘은 정말 파란만장한 하루였네.」', 1);
      era.printButton('「이렇게 고생한 나한테 무슨 포상이라도 없어?」', 2);
      ret.push(await era.input());
      if (ret[1] === 1) {
        await ruby.say_and_wait(
          '염려하실 필요 없습니다. 모두 예상했던 일이니까요.',
        );
        await ruby.say_and_wait(
          '내년에는 아마도 지금까지와는 전혀 다른 노력이 필요하겠지요.',
        );
        await ruby.say_and_wait([
          callname,
          ', 내년에도 부디 정진해 주시길 바랍니다.',
        ]);
        await ruby.say_and_wait('그럼……');
        await ruby.say_and_wait('……');
        era.printButton(`「루비?」`, 1);
        await era.input();
        await ruby.say_and_wait(
          '내년뿐만 아니라, 앞으로도 쭉 잘 부탁드립니다.',
        );
      } else {
        await ruby.say_and_wait('……');
        await ruby.say_and_wait('눈을 감아 주세요.');
        await ruby.say_and_wait('쪽.', true);
        await era.printAndWait([
          '사실 ',
          you.get_colored_name(),
          '은(는) 그저 타이밍 좋게 눈을 감았을 뿐이었고, ',
          ruby.get_colored_name(),
          '가 무엇을 하려는지 물어보려던 참이었다.',
        ]);
        await era.printAndWait([
          '뺨에서 들려온 부드러운 입맞춤 소리에 ',
          you.get_colored_name(),
          '은(는) 순간 말문이 막혀 버렸고, 한동안 감히 눈을 뜰 생각조차 하지 못했다.',
        ]);
        await era.printAndWait([
          '그 부드러운 감촉의 여운을 느끼다 마침내 눈을 떴을 때, ',
          ruby.get_colored_name(),
          '는 이미 그 자리를 떠나고 없었다.',
        ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = '새해 참배';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} helios ダイタクヘリオス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     */
    const f = async (ruby, helios, you, callname) => {
      const ret = [];
      await ruby.say_and_wait(
        '세간의 주목을 받는 것쯤은 아무런 문제도 되지 않습니다.',
      );
      await era.printAndWait([
        '새해 벽두부터, ',
        ruby.get_colored_name(),
        '가 ',
        you.get_colored_name(),
        '의 트레이닝실을 찾아왔다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 내심 ',
        ruby.sex,
        '가 훨씬 바쁠 것이라 생각했었지만, 막상 얼굴을 보니 기쁜 마음이 차올랐다.',
      ]);
      await era.printAndWait([
        '가볍게 새해 인사를 건넨 후, ',
        ruby.sex,
        '가 이어 한 말은 여전히 당당했다.',
      ]);
      await ruby.say_and_wait(
        '이 기간 동안, 우리는 우리가 해야 할 일을 묵묵히 해 나가면 그뿐입니다.',
      );
      await ruby.say_and_wait([callname, '은(는) 어떻게 생각하시나요?']);
      era.printButton('「스피드를 손에 넣어야…… 하겠지.」', 1);
      await era.input();
      await era.printAndWait([
        ruby.sex,
        '에게 스피드는 타고난 재능이었다.',
      ]);
      await era.printAndWait([
        ruby.sex,
        '의 달리기를 한층 더 갈고닦는다면, 틀림없이 눈부신 광채를 뿜어내며 일족에서 가장 빛나는 존재가 될 것이다.',
      ]);
      await ruby.say_and_wait(
        '네. 저는 더 이상 당신의 기대를 저버리지 않을 것입니다.',
      );
      await era.printAndWait([
        '연초부터 지나치게 긴장해 있는 모습을 보고, ',
        you.get_colored_name(),
        '은(는) 어떻게든 ',
        ruby.get_colored_name(),
        '의 긴장을 풀어 주고 싶다는 생각이 들었다……',
      ]);
      era.printButton('「새로운 새해 요리를 찾아보자」 (스태미나 +20)', 1);
      era.printButton('「근처 신사에서 성장을 기원하자」 (전 능력치 +8)', 2);
      era.printButton(
        '「우리만의 파티 타임을 시작하자! Lv2!」 (스킬 포인트 +35)',
        3,
      );
      ret.push(await era.input());
      switch (ret[0]) {
        case 1:
          await ruby.say_and_wait('하아……');
          await ruby.say_and_wait(
            '어느 정도 마음의 준비는 했습니다만, 참 뜻을 알 수 없는 행동이군요.',
          );
          await era.printAndWait([
            you.get_colored_name(),
            '과(와) ',
            ruby.get_colored_name(),
            '는 트레이닝실에서 이런저런 요리를 시도해 보며 알찬 하루를 보냈다.',
          ]);
          break;
        case 2:
          await ruby.say_and_wait([callname, '……']);
          era.printButton('「오해하지 마, 난 아담한 게 취향이니까.」', 1);
          era.printButton('「오해하지 마, 신체 능력의 성장을 말한 거야.」', 2);
          ret.push(await era.input());
          await ruby.say_and_wait('……');
          await ruby.say_and_wait(
            '조금 후에 교문 앞에서 모이도록 하죠. 옷을 갈아입고 오겠습니다.',
          );
          await era.printAndWait(
            '기모노는 가슴이 아담한 사람에게 잘 어울린다는 말이 사실인 모양이다.',
          );
          await era.printAndWait([
            '하지만 ',
            you.get_colored_name(),
            '은(는) 확신했다. ',
            ruby.get_colored_name(),
            '가 이 화려한 의상을 완벽하게 소화해 냈다는 것을.',
          ]);
          await era.printAndWait([
            '머리에 꽂은 동백꽃이 무척이나 아름다웠지만, ',
            ruby.teen_sex_title,
            '자신에게는 미치지 못했다.',
          ]);
          await era.printAndWait('옷에 새겨진 문양은…… 나팔꽃이구나.');
          await you.say_and_wait(
            '사랑, 그리고 당신 곁에 함께한다는 뜻인가.',
            true,
          );
          break;
        case 3:
          await era.printAndWait('어째서 Lv2인 걸까?');
          await era.printAndWait([
            '담당 우마무스메를 실망하게 하지 않기 위해, ',
            you.get_colored_name(),
            '은(는) 특별히 ',
            helios.get_colored_name(),
            '에게 파티의 분위기를 띄우는 요령을 전수받아 왔던 것이다.',
          ]);
          await ruby.say_and_wait('지나치게 시끄럽군요.');
          await era.printAndWait([
            '그것은 ',
            ruby.sex_code === 1 ? '도련님' : '아가씨',
            '가 웃으며 내린 가차 없는 평가였다.',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  takm_kin_win: (() => {
    const title = '삼대 제패';
    /** @param {CharaTalk} ruby ダイイチルビー */
    const f = async (ruby) => {
      await ruby.say_and_wait('승리했군요……');
      await ruby.say_and_wait('헤헤……');
      await era.printAndWait([
        ruby.get_colored_name(),
        '가 고개를 살짝 흔들었다.',
      ]);
      await ruby.say_and_wait(
        '여러분의 성원에 진심으로 감사드립니다. 일족의 오랜 염원을 마침내 이루어 냈습니다.',
      );
      await ruby.say_and_wait(
        '다음 레이스에서도 한층 더 멋진 질주를 선사해 드리겠습니다.',
      );
      era.drawLine({ content: '지하 통로' });
      await ruby.say_and_wait(
        '예전에 당신이 했던 일들은, 전부 옳았던 모양이군요.',
      );
      await ruby.say_and_wait(
        '비록 인간의 몸이지만, 당신은 어떤 면에서는 무척 강인한 생물입니다.',
      );
      await ruby.say_and_wait(
        '앞으로 나아가는 길에 저 또한 다시 벽에 부딪히는 날이 올지도 모릅니다.',
      );
      await ruby.say_and_wait('그러니 부디, 제 손을 놓지 말아 주세요.');
    };
    f.title = title;
    return f;
  })(),
  yasu_kin_win_s: (() => {
    const title = '진홍은 정열의 색';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     * @param {PrintedSpan} sprt_sta スプリンターズステークス（色付き名前）
     */
    const f = async (ruby, you, callname, sprt_sta) => {
      await era.printAndWait([
        '레이스가 끝난 후, ',
        ruby.get_colored_name(),
        '의 표정은 그 어느 때보다 활짝 피어 있었다.',
      ]);
      await era.printAndWait([
        '얼음처럼 날카로운 광채, 그것이 지금까지 ',
        ruby.sex,
        '가 풍기던 고유한 인상이었다.',
      ]);
      await era.printAndWait(
        '하지만 지금은 마치 온몸의 세포 하나하나가 살아 숨 쉬듯, 내면에서부터 눈부신 광채가 뿜어져 나오고 있었다.',
      );
      await ruby.say_and_wait(callname);
      await ruby.say_and_wait('다음 목표에 관해 제안하고 싶은 바가 있습니다.');
      await era.printAndWait([
        '가장 빠른 ',
        ruby.uma_sex_title,
        '를 가리는——',
        sprt_sta,
        '.',
      ]);
      await ruby.say_and_wait('네.');
      await ruby.say_and_wait(
        '그곳이라면 더 높은 정점에 닿을 수 있다고 생각합니다.',
      );
      await ruby.say_and_wait(
        '쟁쟁한 실력자들과 강력한 라이벌들이 저희를 겨냥해 오겠지요.',
      );
      await ruby.say_and_wait(
        '하지만 결코 외면할 수 없는 강력한 의무감이 온몸으로 느껴집니다.',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '여름 합숙 (시니어 시즌)';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} miracle ケイエスミラクル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     * @param {PrintedSpan} call_93 ダイイチルビーがケイエスミラクルを呼ぶ呼称
     * @param {PrintedSpan} m_call_r ケイエスミラクルがダイイチルビーを呼ぶ呼称
     */
    const f = async (ruby, miracle, you, callname, call_93, m_call_r) => {
      await era.printAndWait([
        '대망의 여름 합숙이 시작되었다. 뜨거운 주로를 달리는 ',
        ruby.uma_sex_title,
        '들에게 있어서 이 시기는 실력을 비약적으로 끌어올릴 수 있는 황금 같은 계절이다.',
      ]);
      await era.printAndWait([
        '소중한 시간을 낭비하지 않도록 ',
        you.get_colored_name(),
        '은(는) 이미 완벽에 가까운 사전 준비를 마쳐 두었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 밀도가 매우 높고 부하가 강한 특별 트레이닝 메뉴를 설계했으며, 훈련이 끝난 뒤 피로를 즉시 풀 수 있도록 쿨다운용 도구와 마사지 준비까지 철저히 세팅해 두었다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '에게는 해야 할 일을 미리 알려 두었다. 그래서 과정은 담담해 보였다. 하지만——',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 눈에 띄게 상승하는 트레이닝 효율과 성과를 바라보며 내심 쾌재를 불렀다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 트레이너로서 임무를 제대로 수행했다는 사실이 ',
        you.get_colored_name(),
        '의 자랑이었다.',
      ]);
      await ruby.say_and_wait(
        '오늘도 전 일정 동안 곁에서 헌신적으로 보좌해 주셔서 감사드립니다. 그럼, 저는 옷을 갈아입기 위해 이만 실례하도록 하겠습니다.',
      );
      await era.printAndWait([
        ruby.sex,
        '의, 아직 다 익지 않은 하얀 몸은, 물에 비치는 달 같아서, 청춘의 매력을 뿜어내고 있었다. 이성을 버리고 죄로 타락하게 만드는 위험한 유혹이기도 했다.',
      ]);
      era.printButton('자존심을 버리고, 이 심연에 몸을 던진다.', 1, {
        disabled:
          era.get('love:85') < 75 ||
          era.get('cflag:0:性别') !== 1 ||
          era.get('cflag:85:性别') !== 0,
      });
      era.printButton('트레이닝이 끝나도, 아직 할 수 있는 일이 있다.', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 양팔을 휘둘러, 뒤에서 ',
          ruby.get_colored_name(),
          '의 가느다란 허리를 안았다.',
          ruby.get_colored_name(),
          '는 작게 소리를 내며, 머리를 수치심으로 숙였다.',
        ]);
        await era.printAndWait([
          '그 얼굴의 붉음이 너무 귀여워서 ',
          you.get_colored_name(),
          '은(는) ',
          ruby.sex,
          '의 머리를 이쪽으로 향하게 하고, 작은 입술에 입을 맞췄다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 놀라 ',
          you.get_colored_name(),
          '으로부터 튀어 오르려 했다. 품은 힘이 강했던 덕분에, 아가씨의 도망은 이루어지지 않았다.',
        ]);
        await era.printAndWait([
          '가벼운 입맞춤이 ',
          you.get_colored_name(),
          '이(가) 며칠 참아왔던 욕망에 불을 지폈다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 오른손은 원래 허리에 얹어져 있었다. 지금은 이미 무의식적으로 수영복 안으로 들어가, 약간 부풀어 오른 가슴으로 향하고 있었다.',
        ]);
        await era.printAndWait([
          '곧바로, 청초한 유방에 손이 닿아, 검지와 중지로 끝부분의 유두를 가볍게 끼워 주물렀다.',
        ]);
        await ruby.say_and_wait(['꺅! ', callname, '……']);
        await era.printAndWait([
          '깊은 입맞춤 후 ',
          you.get_colored_name(),
          '의 혀는 연한 벚꽃색 입술에서 천천히 떨어졌다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 숨을 가쁘게 내쉬며, 붉은 얼굴로 ',
          you.get_colored_name(),
          '을(를) 올려다보았다. 투명하게 빛나는 은색 실만이 ',
          you.get_colored_name(),
          '과(와) ',
          ruby.sex,
          '를 이어주고 있었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 손은 멈추지 않았다. ',
          ruby.get_colored_name(),
          '가 알아차리기 전에, 왼손이 수영복 자락으로 미끄러져 들어가 ',
          ruby.sex,
          '의 가랑이를 훑었다.',
        ]);
        await ruby.say_and_wait(
          '지금은 안 돼요! 소리를 내서 누군가에게 들키면, 큰일 난답니다!',
        );
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 팔꿈치로 ',
          you.get_colored_name(),
          '의 하복부를 가볍게 밀었다.',
          ruby.uma_sex_title,
          '의 힘에 ',
          you.get_colored_name(),
          '은(는) 윽 하고 사레들렸다.',
        ]);
        era.printButton('「아아아악! 아파, 죽을 만큼 아파!」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 무고한 피해자를 가장하며, 일부러 몸을 움츠려 ',
          ruby.get_colored_name(),
          '를 품속으로 끌어안았다. 손가락은 더욱 깊숙이 들어가 있었다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '가 몸을 떨며 저항을 멈추는 것을 보고 ',
          you.get_colored_name(),
          '은(는) 옅게 웃으며 ',
          ruby.sex,
          '를 옆에 있는 작은 수풀로 끌어당겼다.',
        ]);
        await era.printAndWait([
          '다시 입맞춤을 나눈 뒤 ',
          ruby.sex,
          '의 수영복을 벗기려 했다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 눈은 반짝였고, 이 매혹적인 어린 몸을 한순간도 놓치고 싶지 않았다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          ruby.get_colored_name(),
          '를 밀어트리고, 설백색 피부 위를 헤엄치듯, 옅은 분홍빛이 비치는 하얀 크림을 한 장씩 미끄러뜨렸다.',
        ]);
        await ruby.say_and_wait('음……앗!');
        await era.printAndWait([
          ruby.get_colored_name(),
          '의, 평소 늠름한 표정은 이제 흔적도 없다. 대신 장미처럼 선명한 유정만이 남아 있었다.',
        ]);
        await era.printAndWait([
          '그 마음을 흔드는 모습에 ',
          you.get_colored_name(),
          '은(는) 당황하며 ',
          ruby.sex,
          '의 가슴 중 청초하고 작은 유방에 입을 맞추고, 치아로 끝부분의 부드러운 실과 같은 것을 가볍게 물었다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 입술을 강하게 깨물며 ',
          you.get_colored_name(),
          '이(가) 주는 자극을 견뎌내고 있었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 작은 유두를 빨며 최종 단계로 나아가려 할 때, 옆에서 ',
          miracle.get_colored_name(),
          '의 목소리가 들렸다.',
        ]);
        await miracle.say_and_wait([m_call_r, '……트레이닝 하는 중이야?']);
        await era.printAndWait([
          '그 순간 ',
          you.get_colored_name(),
          '과(와) ',
          ruby.get_colored_name(),
          '의 영혼은 튀어나갈 뻔했다. ',
          you.get_colored_name(),
          '은(는) ',
          ruby.get_colored_name(),
          '에게, 적당한 이유를 대며 ',
          ruby.sex,
          '를 돌려보내라고 재촉했다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 어쩔 수 없이 그렇게 말했다.',
        ]);
        await ruby.say_and_wait([
          call_93,
          '……쉬고 있어요. 이야기는 내일 하시죠.',
        ]);
        await era.printAndWait([
          '말을 끝내고 가늘게 눈썹을 찌푸리며 ',
          you.get_colored_name(),
          '을(를) 한 번 노려보았다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          ruby.get_colored_name(),
          ' 위에서 쓴웃음을 지으며 ',
          miracle.get_colored_name(),
          '이 가버릴 때까지 조용히 기다렸다.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_95_30: (() => {
    const title = '여름 합숙(시니어 시즌) 도중';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     */
    const f = async (ruby, you, callname) => {
      await era.printAndWait(
        '합숙도 어느덧 반이 지났고, 오늘 이 근처에서 여름 축제가 열릴 예정이다.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '가 아마 합숙소에 남아 있을 것이라 생각하던 차였다.',
      ]);
      await ruby.say_and_wait([callname, '?']);
      era.printButton('「공부할 준비는 해 뒀어.」', 1);
      await era.input();
      await ruby.say_and_wait(
        '합숙소에 이렇게 조용한 곳이 있었군요. 게다가 책상과 조명까지 준비해 두시다니.',
      );
      await ruby.say_and_wait('이렇게 많은 배려해 주셔서 감사드립니다.');
      await era.printAndWait(
        '슈우우우욱—— 콰광! 먼 곳에서 폭죽 터지는 소리가 들려왔다. 축제도 슬슬 막을 내릴 시간인 듯하다.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 공부가 일단락된 듯하자 ',
        you.get_colored_name(),
        '은(는) 미리 준비해 두었던 말을 건넸다.',
      ]);
      era.printButton('「잠시 가볍게 산책이라도 다녀올까?」', 1);
      await era.input();
      await ruby.say_and_wait('……알겠습니다.');
      era.drawLine({ content: '바닷가' });
      await ruby.say_and_wait('고요하네요……');
      await era.printAndWait([
        you.get_colored_name(),
        '과(와) ',
        ruby.get_colored_name(),
        '는 아무도 없는 모래사장에서 어깨를 나란히 한 채 밤하늘을 가득 수놓은 별들을 올려다보았다. 잔잔하게 들려오는 파도 소리가 무척이나 기분 좋게 울려 퍼졌다.',
      ]);
      era.printButton('「이곳의 별빛이 아주 아름답다고 들어서 와 봤어.」', 1);
      await era.input();
      await ruby.say_and_wait(
        '과연, 저 역시 풍경이 무척 빼어나다고 생각합니다. 여름의 별자리들이 밤하늘에서 반짝이고 있군요.',
      );
      await era.printAndWait(
        '독특한 붉은빛을 발산하는 저 별이 바로 전갈의 심장—— 안타레스다.',
      );
      await ruby.say_and_wait('……아아, 역시.');
      await ruby.say_and_wait('전갈의 불꽃.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 곁에서 무언가 중얼거리는 소리를 들은 듯했으나, ',
        ruby.get_colored_name(),
        '는 이미 평소의 표정으로 돌아와 있었다.',
      ]);
      era.printButton('「돌아갈까?」', 1);
      era.printButton(`「낮에 미라클이……」`, 2, {
        disabled:
          era.get('love:85') < 75 ||
          era.get('cflag:0:性别') !== 1 ||
          era.get('cflag:85:性别') !== 0,
      });
      const ret = await era.input();
      if (ret === 1) {
        await ruby.say_and_wait('네.');
        await ruby.say_and_wait(
          '밤바람을 맞으니 머리가 한결 맑아졌습니다. 돌아가서 내일 훈련을 위한 준비를 하도록 하겠어요.',
        );
        await era.printAndWait([
          '말을 마친 뒤, ',
          ruby.get_colored_name(),
          '는 미련 없이 발걸음을 돌려 걸어갔다. 어쩌면 이 산책은 ',
          ruby.sex,
          '에게는 전혀 필요 없는 일이었을지도 모른다.',
        ]);
        await era.printAndWait([
          '괜한 제안으로 ',
          ruby.sex,
          '에게 폐를 끼친 것은 아닌지 ',
          you.get_colored_name(),
          '이(가) 혼자 걱정하던 때였다——',
        ]);
        await ruby.say_and_wait('저도 저런 존재가 되고 싶습니다.');
        await era.printAndWait('작은 등을 보인 채 걷던 그녀가 그렇게 말했다.');
        await era.printAndWait([
          '서로의 마음이 조금은 통했다. ',
          you.get_colored_name(),
          '은(는) 홀로 이 밤에 그 기쁨을 음미했다.',
        ]);
      } else {
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 그것을 듣고 몸을 굽혀, 뒤꿈치에 손가락을 넣어 신발을 벗기고…… 그러고 나서 한 번의 발길질로 ',
          you.get_colored_name(),
          '을(를) 모래 위로 쓰러뜨렸다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 눈썹을 찌푸리며, 그리 유쾌하지 않았다. 하지만 고개를 든다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '의 작은 발목은 매끄럽고 ',
          you.get_colored_name(),
          '의 손바닥과 거의 같은 크기였다.',
        ]);
        await era.printAndWait([
          '화가 난 ',
          you.get_colored_name(),
          '은(는) 선택했다……',
        ]);
        era.printButton('이빨로 가볍게 깨문다.', 1);
        era.printButton('손바닥에 입맞춘다.', 2);
        await era.input();
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 간지러운 듯했다.',
          you.get_colored_name(),
          '이(가) 혀를 ',
          ruby.sex,
          '의 가벼운 허리까지 뻗었을 때 ',
          ruby.sex,
          '는 하마터면 소리를 낼 뻔했다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 심술궂게 손가락으로 『조용히』라는 몸짓을 보였다.',
          ruby.get_colored_name(),
          '는 곧 양손으로 입술을 가렸다.',
        ]);
        await era.printAndWait(
          '밤의 달빛은 밝다고는 할 수 없다. 하지만 그 도원의 비소를 분별하기에는 충분했다.',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          ruby.get_colored_name(),
          '의 양다리를 벌리고 ',
          ruby.get_colored_name(),
          '의 숨결에 맞춰 개폐하는 요염한 입구로 나아갔다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '의 하복부는 ',
          you.get_colored_name(),
          '이(가) 한 치씩 나아갈 때마다 격렬하게 떨렸고, 깊숙이 들어온 후에는 전신으로 퍼지는 떨림으로 변했다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 다정하게 들락날락했다.',
        ]);
        await ruby.say_and_wait('윽——');
        await era.printAndWait([
          '갑자기 ',
          ruby.get_colored_name(),
          '는 입을 가린 채 비명에 가까운 소리를 내며 몸을 아치형으로 굽혔다.',
        ]);
        await era.printAndWait([
          ruby.sex,
          '의 질은 통째로 조여져 고리가 되어 ',
          you.get_colored_name(),
          '의 육봉을 꽉 잡았다.',
        ]);
        era.printButton('사정한다.', 1);
        await era.input();
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 이제 전신이 뜨겁고 땀에 젖어 있었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 사정과 동시에 ',
          ruby.get_colored_name(),
          '의 아래에서도 투명한 파도가 솟구쳤다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '의 몸은 하늘이 사랑해 준 뛰어난 몸이다.',
          ruby.sex,
          '에게 쉽게 교합의 즐거움을 맛보게 한다.',
        ]);
        await era.printAndWait([
          '본인은 기진맥진해 있어도 ',
          ruby.sex,
          '의 암컷의 길은 본능으로 경련하며 꿈틀거리기 시작했다.',
        ]);
        await era.printAndWait([
          '그 감촉은 무수한 가늘고 부드러운 촉수가 동시에 ',
          you.get_colored_name(),
          '의 작은 트레이너를 쓰다듬는 듯했다.',
        ]);
        await era.printAndWait([
          '잠시 희롱당한 후 ',
          you.get_colored_name(),
          '은(는) 다시 기세를 되찾았다.',
        ]);
        era.drawLine();
        await era.printAndWait([
          '마지막 교합이 끝나갈 때 ',
          you.get_colored_name(),
          '은(는) 이제 ',
          ruby.get_colored_name(),
          '의 안에 머무를 용기가 없었다.',
        ]);
        await era.printAndWait(
          '이 부드러운 몸은 영혼까지 빨아들일 때까지 멈추지 않는 모양이다.',
        );
        await era.printAndWait([
          ruby.get_colored_name(),
          '의 하복부가 약간 부풀어 있었다.',
        ]);
        era.printButton('손으로 가볍게 누른다.', 1);
        await era.input();
        await era.printAndWait(
          '배 속의 진한 정액이 넘쳐나 모래사장을 흩뜨리며 더럽혔다.',
        );
        await era.printAndWait([
          ruby.get_colored_name(),
          '가 입을 가리고 있던 손은 이제 머리 위에서 힘없이 늘어져 있었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          ruby.get_colored_name(),
          '를 합숙소로 데려가려 했다. 하지만 양다리가 계속 떨렸다.',
        ]);
        await era.printAndWait('결국, 두 사람은 기어서 방으로 돌아갔다.');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '여름 합숙 종료 (시니어 시즌)';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_93 ダイイチルビーがケイエスミラクルを呼ぶ呼称
     */
    const f = async (ruby, you, call_93) => {
      await ruby.say_and_wait(
        '사명을 위해서라면, 마땅히 제 한 몸을 온전히 헌신할 각오가 되어 있어야 합니다.',
      );
      era.printButton('「헌신……?」', 1);
      await era.input();
      await ruby.say_and_wait([call_93, '의 말이 맞았습니다, 저는……']);
      era.printButton('「그게 정말로 옳은 걸까?」', 1);
      await era.input();
      await ruby.say_and_wait('네?');
      era.printButton(`「루비, 케이에스 미라클은 그래도 괜찮을 것 같아?」`, 1);
      await era.input();
      await ruby.say_and_wait('!');
      await ruby.say_and_wait('……');
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 깊은 고뇌에 빠졌다.',
      ]);
      era.drawLine();
      await era.printAndWait([
        '그날 밤, 룸메이트보다 한발 먼저 기숙사 방으로 돌아온 ',
        ruby.get_colored_name(),
        '는 홀로 무언가를 중얼거리고 있었다.',
      ]);
      await ruby.say_and_wait('우리는, 무척 닮았어……');
      await ruby.say_and_wait(
        '혈통, 그리고 『기적』이 우리에게 사명과 모두가 우러러보는 재능을 부여했습니다.',
      );
      await ruby.say_and_wait(
        '하지만 결정적인 한 가지 차이점이 있어, 그것은 바로……',
      );
      await ruby.say_and_wait([call_93, ', 당신이 나아가려는 그 앞길은……']);
      await ruby.say_and_wait(
        '그런 발걸음으로 계속 전진한다면, 미래에는 결국……',
      );
      await ruby.say_and_wait([
        call_93,
        ' ',
        ruby.sex,
        '당신은 그래도 괜찮다고 생각하시겠지요?',
      ]);
      await you.used_to_say_and_wait('그게 정말로 옳은 걸까?');
      await you.used_to_say_and_wait(
        '너는 케이에스 미라클이 정말 이대로도 괜찮다고 생각해?',
      );
      await ruby.say_and_wait('결코 괜찮을 리가 없습니다.');
      await ruby.say_and_wait('저는, 절대로 용납할 수 없어요……');
      await era.printAndWait(
        '그렇게 여름 합숙은 막연한 불안감 속에서 막을 내렸다.',
      );
    };
    f.title = title;
    return f;
  })(),
  before_sprt_sta_s: (() => {
    const title = '기적';
    /**
     @param {CharaTalk} ruby ダイイチルビー
     @param {CharaTalk} miracle ケイエスミラクル
     @param {CharaTalk} you プレイヤー
     @param {PrintedSpan} call_93 ダイイチルビーがケイエスミラクルを呼ぶ呼称
     @param {PrintedSpan} m_call_r ケイエスミラクルがダイイチルビーを呼ぶ呼称
     */
    const f = async (ruby, miracle, you, call_93, m_call_r) => {
      await miracle.say_and_wait('……——');
      await ruby.say_and_wait([call_93, '.']);
      await miracle.say_and_wait('……');
      await ruby.say_and_wait([miracle.get_colored_name(), ' 씨.']);
      await miracle.say_and_wait('아.');
      await miracle.say_and_wait([m_call_r, '?']);
      await ruby.say_and_wait('시간이 다 되었어요, 이제 출발해야 합니다.');
      await miracle.say_and_wait('아, 벌써 시간이 이렇게 됐네.');
      await ruby.say_and_wait('……');
      await miracle.say_and_wait(
        '미안해, 난 정말 괜찮아. 그냥 이런저런 생각을 좀 하느라.',
      );
      await miracle.say_and_wait('서로 후회 없는 멋진 승부를 겨뤄 보자.');
      await ruby.say_and_wait('……네.');
      era.drawLine({ content: '선수 통로' });
      await miracle.say_and_wait('……이길 거야.');
      await miracle.say_and_wait(
        '그 누구보다도 빠르게…… 오늘은…… 나의 달리기를, 모두에게 바치겠어……',
      );
      await ruby.say_and_wait([call_93, '.']);
      await miracle.say_and_wait([m_call_r, '……']);
      await miracle.say_and_wait(
        '오늘 잘 부탁해. 당연히 조금도 봐줄 필요는 없으니까.',
      );
      await miracle.say_and_wait('서로 양보 없는 치열한 경쟁을……');
      await ruby.say_and_wait('당신의 그 희망을 전부 무너뜨려 드리겠어요.');
      await miracle.say_and_wait('!');
      await ruby.say_and_wait(
        '지금의 당신이 그 누구보다 눈부신 광채를 손에 쥐도록 가만히 내버려 두지 않을 겁니다.',
      );
      await ruby.say_and_wait(
        '당신이 예전에 제게 말해 주었던 그것을, 이번엔 제가 직접 증명해 보이겠어요.',
      );
      await miracle.say_and_wait([m_call_r, '?']);
      await ruby.say_and_wait('……——');
      await ruby.say_and_wait(
        '이 레이스를 이끄는 선두 주자로서, 당신을 훨씬 더 높은 곳으로 이끌어 드리죠.',
      );
      await ruby.say_and_wait(
        '『화려한 일족』의 새로운 상징이 나아가는 길을, 부디 똑똑히 지켜보시길 바랍니다.',
      );
      era.drawLine({ content: '대기실' });
      await ruby.say_and_wait('오늘 레이스는, 반드시 승리하겠어요.');
      await era.printAndWait([
        '레이스를 코앞에 두고, ',
        ruby.get_colored_name(),
        '는 돌연 ',
        you.get_colored_name(),
        '을(를) 향해 당차게 선언했다.',
      ]);
      await era.printAndWait('두 사람의 우정이 참으로 눈부시게 빛나고 있었다.');
    };
    f.title = title;
    return f;
  })(),
  sprt_sta_win_s: (() => {
    const title = '미래는……';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} miracle ケイエスミラクル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     * @param {PrintedSpan} call_93 ダイイチルビーがケイエスミラクルを呼ぶ呼称
     * @param {PrintedSpan} m_call_r ケイエスミラクルがダイイチルビーを呼ぶ呼称
     * @param {PrintedSpan} swan_sta スワンステークス（着色名）
     */
    const f = async (
      ruby,
      miracle,
      you,
      callname,
      call_93,
      m_call_r,
      swan_sta,
    ) => {
      await miracle.say_and_wait(
        '스퍼트…… 그 누구보다 빠르게, 누구보다도 먼저—— 결승선을 통과하겠어!',
      );
      await miracle.say_and_wait(
        '다리가…… 너무 아파, 더는 땅을 박차고 나갈 수가……',
      );
      await miracle.say_and_wait(
        '안 돼! 모두를 위해서라도, 난 어떻게든 승리를……',
      );
      await ruby.say_and_wait(
        '그렇게 두고 보지 않겠습니다. 당신을 기다리는 그 절망이 도래하기 전에……',
      );
      await ruby.say_and_wait('제가 미래를 개척해 보이겠어요!');
      await miracle.say_and_wait(['어, ', m_call_r, '?']);
      era.drawLine({ content: '레이스 전' });
      await ruby.used_to_say_and_wait(
        '모든 것을 걸고 바로 지금 은혜를 갚는 것. 그것도 훌륭한 선택입니다.',
      );
      await ruby.used_to_say_and_wait(
        '하지만 그것이 과연 당신에게 정말 최선의 선택이라고 단언할 수 있습니까?',
      );
      await ruby.used_to_say_and_wait(
        '당신이 모든 것을 불태워 바친다고 한들, 과연 그 사람들이 진정으로 보답받을 수 있을까요?',
      );
      await miracle.used_to_say_and_wait('하필이면 왜 이 타이밍에 그런 얘길……');
      await ruby.used_to_say_and_wait(
        '그저 곧 한계에 도달할 『현재』만을 바라보며 달리는 것, 전 그런 방식은 딱 질색입니다.',
      );
      await ruby.used_to_say_and_wait(['저는…… ', callname, ' 덕분에.']);
      await ruby.used_to_say_and_wait(
        '지금까지와는 다른 새로운 길을 찾았고, 새로운 사명과 한 걸음 더 나아간 미래를 얻었습니다.',
      );
      await ruby.used_to_say_and_wait(
        '그 길을 끝까지 걸어가는 것이야말로, 제가 받은 것들에 대한 보답입니다.',
      );
      await ruby.used_to_say_and_wait('이것이 바로 저의, 정입니다.');
      era.drawLine({ content: '다시 레이스로' });
      await ruby.say_and_wait('하앗——!');
      await miracle.say_and_wait('!');
      await miracle.say_and_wait('어떻게 달려야……');
      await miracle.say_and_wait('나도, 모두를 위해서……');
      await you.say_as_passer_by_and_wait('해설', [
        miracle.get_colored_name(),
        ', 속도가 떨어집니다! 현재 선두로 치고 나오는 선수는 바로——',
      ]);
      await you.say_as_passer_by_and_wait('해설', [
        ruby.get_colored_name(),
        '!',
      ]);
      await you.say_as_passer_by_and_wait('해설', [
        ruby.get_colored_name(),
        ', 이 얼마나 현란하고 강렬한 막판 스퍼트인가요!',
      ]);
      era.printButton(`「가라, 루비.」`, 1);
      await era.input();
      await ruby.say_and_wait('……——');
      await you.say_as_passer_by_and_wait('해설', [
        '우승은 바로 ',
        ruby.get_colored_name(),
        '! 압도적인 스피드를 선보이며, 화려한 일족의 ',
        ruby.get_colored_name(),
        '!',
      ]);
      era.drawLine({ content: '선수 통로' });
      await miracle.say_and_wait(['……', m_call_r, '.']);
      await ruby.say_and_wait([call_93, '.']);
      await miracle.say_and_wait('축하해. 정말 굉장히 멋졌어.');
      await miracle.say_and_wait(
        '나 말이야, 정말이지 오늘을 끝으로 다 끝나 버려도 상관없다고 생각했었거든.',
      );
      await miracle.say_and_wait(
        '앞으로 오랫동안 달릴 수는 없을 테니, 오직 『지금』만을 위해 모든 것을 쏟아붓겠다고 다짐했었는데……',
      );
      await ruby.say_and_wait('……');
      await miracle.say_and_wait('하지만.');
      await miracle.say_and_wait(
        '네 질주가 너무나도 눈부셨어. 어쩌면 나도 앞으로 해낼 수 있는 일이 더 남아 있을지도 모른다는 생각이 들더라.',
      );
      await miracle.say_and_wait(
        '포기하지 않고 계속 달려 나가며 모두에게 미래를 보여주는 것. 그것이 네가 보여준 상냥함에 보답하는 길이겠지.',
      );
      await ruby.say_and_wait('……!');
      await miracle.say_and_wait('정말 분하네.');
      await miracle.say_and_wait('그런데, 신기하게도 마음은 아주 상쾌해.');
      await miracle.say_and_wait(
        '나, 반드시 지금보다 훨씬 더 강해져서 돌아올게.',
      );
      await miracle.say_and_wait(
        '제대로 몸을 단련해서, 기초부터 다시 차근차근 시작하는 거야.',
      );
      await miracle.say_and_wait(
        '두 번 다시 내 몸이 망가질 만큼 무리하지 않을게.',
      );
      await ruby.say_and_wait([call_93, '……']);
      await miracle.say_and_wait([
        '다음 복귀 무대로는 아마도 ',
        swan_sta,
        '를 고르게 될 것 같아.',
      ]);
      await ruby.say_and_wait([
        '……',
        callname,
        '과(와) 함께 논의해 보도록 하겠습니다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_swan_sta_s: (() => {
    const title = '스완 스테이크스를 앞두고';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} miracle ケイエスミラクル
     * @param {PrintedSpan} m_call_r ケイエスミラクルがダイイチルビーを呼ぶ呼称
     * @param {PrintedSpan} swan_sta スワンステークス（着色名）
     */
    const f = async (ruby, miracle, m_call_r, swan_sta) => {
      await miracle.say_and_wait([m_call_r, '……와 줬구나.']);
      await ruby.say_and_wait(
        '당신께서 직접 저를 지명해 주셨기에, 곰곰이 고려해 보았습니다.',
      );
      await era.printAndWait([
        swan_sta,
        '……',
        miracle.get_colored_name(),
        '의 간곡한 초청 덕분에, ',
        ruby.get_colored_name(),
        '는 이번 레이스에 출주하기로 결정을 내렸다.',
      ]);
      await miracle.say_and_wait(
        '고마워. 이렇게나 빨리 너와 다시 함께 달릴 수 있게 될 줄은 몰랐어.',
      );
      await ruby.say_and_wait('……몸 상태는 이제 완전히 괜찮으신 건가요?');
      await miracle.say_and_wait('응, 이제 정말 아무렇지도 않아.');
      await miracle.say_and_wait(
        '전에는 그저 빨라지면 그만이라고만 생각해서, 내 몸을 무리하게 몰아붙이기만 했었지만……',
      );
      await miracle.say_and_wait(
        '지금은 내 몸을 최상의 상태로 만들 수 있도록 훈련 방향을 바꿨어.',
      );
      await miracle.say_and_wait(
        '——그렇다 하더라도, 지금의 나는 이전보다 훨씬 더 빠르게 달릴 수 있다는 자신감이 있어.',
      );
      await miracle.say_and_wait('너보다도 훨씬 더 빠르게 말이지.');
      await ruby.say_and_wait('!');
      await miracle.say_and_wait(
        '나, 말했던 대로 정말 강해져서 돌아왔다구. ——그러니 부디 나와 겨뤄 줘.',
      );
      await era.printAndWait([
        miracle.get_colored_name(),
        '이 미소 지었다. 부드러운 미소였지만, ',
        ruby.sex,
        '의 분위기와 자세에서는 확실한 자신감이 전해졌다.',
      ]);
      await ruby.say_and_wait('컨디션이 아주 좋으신 모양이군요.', true);
      await miracle.say_and_wait('나야말로 잘 부탁해.');
    };
    f.title = title;
    return f;
  })(),
  swan_sta_win_s: (() => {
    const title = '점화';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} miracle ケイエスミラクル
     * @param {PrintedSpan} call_93 ダイイチルビーがケイエスミラクルを呼ぶ呼称
     * @param {PrintedSpan} mile_cha マイルチャンピオンシップ（着色名）
     */
    const f = async (ruby, miracle, call_93, mile_cha) => {
      await ruby.say_and_wait('역시 다들 만만치 않은 상대들이군요, 그리고——');
      await ruby.say_and_wait([
        call_93,
        '…… 확실히 예전보다 한층 더 강해졌습니다.',
      ]);
      await ruby.say_and_wait([
        mile_cha,
        '에서 압도적인 승리를 거두려면 저도 지금보다 강해져야 합니다.',
      ]);
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('후훗~');
      await era.printAndWait([
        '한쪽에서 ',
        miracle.get_colored_name(),
        '을 붙잡고 시끌벅적하게 소란을 피우고 있는 ',
        miracle.get_colored_name(),
        '의 모습을 바라보며, ',
        ruby.get_colored_name(),
        '는 엷은 미소를 지어 보였다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_43: (() => {
    const title = '「화려한 일족」의 트레이너';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      await era.printAndWait([
        '훈련장 한편에서, 휴식을 취하고 있던 ',
        ruby.get_colored_name(),
        '가 갑작스럽게 ',
        you.get_colored_name(),
        '에게 말을 건넸다.',
      ]);
      await ruby.say_and_wait(
        '도대체 어째서 그런 말씀을…… 본래 『트레이너』로서의 본분은…',
      );
      era.printButton('「아니, 이것은 『나 개인』이 짊어진 사명이야.」', 1);
      await era.input();
      await era.printAndWait([
        '고귀하고 「화려한」 일족으로서, 세상에서 가장 눈부신 광채를 증명해 내는 것, 그것이 바로 ',
        ruby.get_colored_name(),
        '의 유일한 염원이다.',
      ]);
      await era.printAndWait([
        ruby.uma_sex_title,
        '의 꿈을 이루는 것…… 어쩌면 그것이 트레이너라는 직업의 본질일 것이다.',
      ]);
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('과연, 잘 알겠습니다.');
      await era.printAndWait(
        '그녀가 입가에 띄운 엷은 미소에는, 무언가…… 묘하게 흥미롭다는 듯한 기색이 담겨 있었다.',
      );
    };
    f.title = title;
    return f;
  })(),
  mile_cha_win_s: (() => {
    const title = '가장 눈부신 광채';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} mother ダイイチルビーのお母様（劇情 NPC）
     */
    const f = async (ruby, mother) => {
      await era.printAndWait(
        '경기장 안에는 여느 때와 같은 소란스러움 대신, 모두가 경외심을 담아 오늘의 승자를 맞이하고 있었다.',
      );
      await era.printAndWait(' (짝짝짝짝짝……!!)');
      await era.printAndWait([
        '관중석의 모든 이들이 일제히 기립하여 ',
        ruby.sex,
        '를 향해 찬사를 보냈다.',
      ]);
      await ruby.say_and_wait('여러분……');
      await era.printAndWait(' (짝짝짝짝짝……!!)');
      await era.printAndWait('……');
      await mother.say_and_wait('——');
      await ruby.say_and_wait('……! 어머님……', true);
      await ruby.say_and_wait(
        '어머님께서도 박수를…… 마침내 저를 인정해 주셨군요.',
      );
      await ruby.say_and_wait('드디어……');
      era.printButton(`「축하해, 루비.」`, 1);
      await era.input();
      await ruby.say_and_wait('……');
      await era.printAndWait([
        '아주 찰나의 순간, 시선이 ',
        ruby.get_colored_name(),
        '와 교차했다. ',
        ruby.sex,
        '는 이내 다시 관중석을 가득 메운 팬들을 향해 몸을 돌렸다.',
      ]);
      await ruby.say_and_wait('여러분, 대단히 감사합니다.');
      await ruby.say_and_wait(
        '방금 전 제가 보여드린 질주와 함께 이 자리에서 선언하겠습니다.',
      );
      await ruby.say_and_wait(
        '앞으로도 이 두 다리로 더욱 눈부신 빛을 찾아 나아갈 것임을.',
      );
      await ruby.say_and_wait('화려한 일족의 새로운 상징으로서……');
      await ruby.say_and_wait('저의 트레이너와 함께 말이죠.');
      await era.printAndWait(
        '훗날 사람들은 이날을 두고 이렇게 기록했다. 화려한 일족의 새로운 상징이 탄생한 날이라고.',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_rose_master: (() => {
    const title = '화려한 역사적 위업';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     */
    const f = async (ruby, you, callname) => {
      await era.printAndWait('다이이치 가문의 대저택');
      await era.printAndWait([
        '「화려한 일족」, 수많은 사람들이 이 고귀한 이름을 들을 때면 자연스레 떠올리는 어떤 ',
        ruby.uma_sex_title,
        '가 있다……',
      ]);
      await era.printAndWait([
        '우마무스메 역사에 길이 남을 찬란한 공적을 새겨 넣었던 당대의 명 ',
        ruby.uma_sex_title,
        '들……',
      ]);
      await era.printAndWait([
        ruby.couple_title,
        '의 혈통을 이어 더 큰 꽃을 피워 낸——',
      ]);
      await era.printAndWait([ruby.get_colored_name(), '.']);
      await era.printAndWait([
        ruby.sex,
        '야말로 지금 「화려한 일족」을 상징하는 ',
        ruby.uma_sex_title,
        '다.',
      ]);
      await ruby.say_and_wait('기다리게 해 드렸군요.');
      await ruby.say_and_wait('본가에 올릴 모든 보고 절차가 마무리되었습니다.');
      era.printButton('「가족분들의 반응은 어떠셨어?」', 1);
      await era.input();
      await ruby.say_and_wait(
        '『부디 그 두 다리로 멈춤 없이 전진하거라』……라고 하셨습니다. 당신이라는 사람과 함께 말이죠.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 삼 년의 레이스 생활을 마쳤다.',
      ]);
      await era.printAndWait([
        '향후의 거취와 비전을 가문에 보고하기 위해, ',
        you.get_colored_name(),
        '과(와) ',
        ruby.get_colored_name(),
        '는 화려한 일족의 본가를 다시금 방문했다.',
      ]);
      await era.printAndWait([
        '「타인의 손을 빌리지 않고 오직 자신의 다리로 가장 눈부신 광채를 피워내겠다」는 ',
        ruby.sex,
        '의 뜻이 마침내 가문의 어른들에게도 온전히 받아들여진 모양이다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 고개를 살짝 갸웃하며 ',
        you.get_colored_name(),
        '을(를) 빤히 바라보았다.',
      ]);
      await ruby.say_and_wait('무엇을 그렇게 넋을 잃고 바라보고 계십니까?');
      era.printButton('「초상화를 보고 있었어.」 (호감 +5)', 1);
      era.printButton('「너를 보고 있었어.」 (연모 +2)', 2, {
        disabled: era.get('love:85') < 75,
      });
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '처음 이 저택을 방문했을 때는 중압감에 ',
          you.get_colored_name(),
          '의 무릎이 꺾일 뻔했다.',
        ]);
        await era.printAndWait('지금은 차를 음미하듯 그림을 감상할 수 있다.');
        await era.printAndWait([
          '무엇보다 ',
          you.get_colored_name(),
          '도 적잖이 공헌한 사람이니까.',
        ]);
        await ruby.say_and_wait([callname, '……']);
        await ruby.say_and_wait(
          '이 자리를 빌려, 제 마음을 다시 한번 명확히 전해 드리고 싶군요.',
        );
        await ruby.say_and_wait([
          '지난 삼 년간 ',
          you.get_colored_name(),
          '께서는 트레이너이자 지도자로서의 책무를 너무나도 훌륭하게 완수해 주셨습니다.',
        ]);
        await ruby.say_and_wait(
          '제 전담 트레이너가 된다는 것은, 필연적으로 매 순간 끊임없이 이어지는 고난과 무거운 중압감을 감내해야만 하는 가혹한 길이었을 테지요.',
        );
        await ruby.say_and_wait(
          '하지만 당신은 결사적으로 노력해 주셨고, 진정 위대하게 성장하셨습니다.',
        );
        await ruby.say_and_wait(
          '참으로 훌륭히 해내 주셨습니다. 저는 당신이 제 트레이너라는 사실이 진심으로 자랑스럽습니다.',
        );
        era.printButton('「나야말로, 믿고 따라와 줘서 고마웠어.」', 1);
        await era.input();
        await ruby.say_and_wait('……');
        await ruby.say_and_wait(
          '앞으로도 저는 『화려한 일족』의 영원한 상징으로서, 언제나 가장 눈부시게 빛나는 존재로 남아 있어야만 합니다.',
        );
        await ruby.say_and_wait(
          '그럼, 이제 본격적으로 저희가 함께 만들어 갈 향후의 계획을 의논해 볼까요?',
        );
        era.printButton('「……」', 1);
        await era.input();
        await ruby.say_and_wait('갑자기 왜 그러세요?');
        era.printButton('「과연 내가 너의 곁에 계속 있어도 괜찮은 걸까?」', 1);
        await era.input();
        await ruby.say_and_wait('!');
        await ruby.say_and_wait(
          '……도무지 납득할 수 없는 나약한 소리를 하시는군요.',
        );
        await ruby.say_and_wait([
          '제 모든 미래와 거취를 결정하는 것, 그것이 바로 ',
          callname,
          '의 영원한 직무가 아니었습니까?',
        ]);
        await ruby.say_and_wait(
          '그러니 지체하지 마시고 어서 비전을 제시해 주십시오. 인간에게 허락된 시간은 유한하니까요.',
        );
        await ruby.say_and_wait('그리고……');
        await ruby.say_and_wait(
          '장차 본가에 걸릴 제 초상화 바로 곁에 당신의 모습이 함께 보이지 않는다면…… 제가 무척 곤란해집니다……',
        );
        await era.printAndWait(
          '앞으로도 저희 앞에는 해결해야 할 무수한 과제들이 산적해 있으니, 부디 단 한 순간도 해이해지지 마시기를.',
        );
      } else {
        await ruby.say_and_wait('……');
        await ruby.say_and_wait('안아 주세요.');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 그녀의 요구에 순응하듯, ',
          ruby.get_colored_name(),
          '의 아담하고 가냘픈 신체를 품에 소중히 안아 올렸다.',
        ]);
        await ruby.say_and_wait('……음.');
        await ruby.say_and_wait(
          '훗날 본가에 남길 기념사진도, 이 자세로 촬영하는 게 좋겠네요.',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_rest_day: (() => {
    const title = '우아한 분위기는 변하지 않는다';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      await era.printAndWait([
        '경기장에 서 있지 않을 때조차, ',
        ruby.get_colored_name(),
        '의 우아한 분위기는 조금도 흐려지지 않는다.',
      ]);
      era.printButton(`「루비, 오늘은 일족과 관련된 용무가 없어?」`, 1);
      await era.input();
      await ruby.say_and_wait('네, 흔치 않은 휴일이니까요.');
      await ruby.say_and_wait(
        '아무것도 하지 않고 시간을 낭비하는 것은 어리석은 짓이기에, 배움에 힘쓰고 있습니다.',
      );
      await era.printAndWait([
        '과연 ',
        ruby.sex,
        '답다…… 하지만, ',
        you.get_colored_name(),
        '은(는) 묘한 위화감을 느꼈다.',
      ]);
      await era.printAndWait(
        '책상 위에 수북이 쌓여 있는 잡지 같은 것들은, 도저히 학습용 서적이라고 보기는 어려웠기 때문이다.',
      );
      await ruby.say_and_wait('꽤 신경 쓰이시는 모양이군요.');
      await era.printAndWait([
        '그러더니, ',
        ruby.get_colored_name(),
        '는 책을 탁 덮고는 표지를 ',
        you.get_colored_name(),
        '에게 보여주었다.',
      ]);
      await era.printAndWait('《임산부 클럽》');
      await era.printAndWait(
        '표지에는 커다란 글씨로 이렇게 적혀 있었다. 「출산 준비를 시작할 때의 필수 지침서!」',
      );
      await ruby.say_and_wait(
        '이것 말고도 《어머니의 벗》, 《맘앤베이비》…… 정보지란 정보지는 모조리 구해 두었습니다.',
      );
      await era.printAndWait([
        ruby.sex,
        '의 표정에 은근한 득의양양함이 스쳤다.',
      ]);
      await era.printAndWait(
        '게다가 여러 권의 책 페이지마다 인덱스 스티커가 빼곡하게 붙어 있었다.',
      );
      await ruby.say_and_wait(
        '머지않아, 당신에게도 이 지식들이 절실히 필요한 날이 찾아오겠지요.',
      );
      await ruby.say_and_wait(
        '그렇다면 조금이라도 일찍 마스터해 두는 것도 나쁘지 않겠지요?',
      );
      await ruby.say_and_wait(
        '제가 생각하기에 중요하다고 판단한 부분을 골라 두었으니, 이것부터 먼저 읽어보시는 게 좋겠네요.',
      );
      era.printButton('……호의를 무시할 순 없겠네.', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  os_wait_station: (() => {
    const title = '만남의 약속';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      await era.printAndWait([
        '역 앞 광장, ',
        you.get_colored_name(),
        '은(는) 사복 차림을 한 ',
        ruby.teen_sex_title,
        '에게 화사한 미소를 지으며 인사를 건넸다.',
      ]);
      await era.printAndWait([
        '약속 시간까지는 아직 십여 분 정도 남았음에도, ',
        ruby.get_colored_name(),
        '는 이미 꽤 오랜 시간 기다린 듯한 기색이었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 그녀의 차림새를 가볍게 훑어보았다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '가 입은 라운드넥 상의는 그녀의 섬세하고 매혹적인 쇄골 라인을 아낌없이 드러내고 있었다.',
      ]);
      await era.printAndWait(
        '하반신에는 롱스커트를 매치하고 스커트 자락을 상의 안으로 집어넣어, 전체적으로 단아하면서도 편안한 기품이 흘러넘쳤다.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '이(가) 자신을 유심히 살펴보는 것을 눈치채고는, 손을 들어 귀가의 머리칼을 부드럽게 쓸어 넘겼다.',
      ]);
      await ruby.say_and_wait('그렇게 이상한가요?');
      era.printButton('「당연히 엄청 귀엽지.」', 1);
      era.printButton('「뭐랄까 청초하고 세련된 느낌이야.」', 2);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        '과(와) ',
        ruby.get_colored_name(),
        '는 주변을 지나가던 행인들의 뜨거운 시선을 한 몸에 받았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 마치 「돈 많은 부자가 미성년자 ',
        ruby.teen_sex_title,
        '를 스폰하는 듯한」 묘한 눈초리를 견디기 힘들었으나, 다행히도 ',
        ruby.get_colored_name(),
        '가 ',
        you.get_colored_name(),
        '의 손을 이끌고 열차 안으로 발걸음을 옮겼다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  os_station: (() => {
    const title = '베이비 본점';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      await you.say_and_wait('그나저나, 여기 대체 무슨 가게야?');
      await ruby.say_and_wait(
        '보시다시피, 영유아 및 임산부 용품 전문점입니다.',
      );
      await era.printAndWait(
        '주변에는 배가 제법 부른 임산부나, 갓난아기를 품에 안고 걷는 부부 등이 가득했다.',
      );
      await era.printAndWait([
        '이 가게에는 그런 사람들이 더 어울리는 손님이다.',
      ]);
      await era.printAndWait([
        '이곳에서 ',
        you.get_colored_name(),
        '과(와) ',
        ruby.get_colored_name(),
        '의 존재는 명백히 이질적이고 튀었다.',
      ]);
      await ruby.say_and_wait(
        '서적을 통해서만 얻을 수 있는 지식에는 한계가 명확하니까요.',
      );
      await ruby.say_and_wait(
        '이렇게 직접 현장을 둘러보며 식견을 넓히고 지식을 공고히 하고 싶었습니다.',
      );
      await you.say_as_passer_by_and_wait('행인 A', [
        '야, 저기 있는 애 설마 ',
        ruby.get_colored_name(),
        '아니야?',
      ]);
      await you.say_as_passer_by_and_wait(
        '행인 B',
        '헐 대박…… 그 화려한 일족의 영애가 대체 왜 저런 곳에 있는 건데?',
      );
      await you.say_as_passer_by_and_wait(
        '행인 C',
        '옆에 있는 사람은 트레이너 같은데, 둘이 같이 저런 임산부 매장에 들어간 거라면 설마 그런 사이인 거야?',
      );
      await era.printAndWait([
        '역시나 너무 눈에 띄었던 탓인지, 말할 것도 없이 ',
        you.get_colored_name(),
        '과(와) 담당 우마무스메의 신분이 고스란히 탄로나 버렸다.',
      ]);
      await ruby.say_and_wait(
        '그저 평범하게 견학하러 온 것뿐인데, 과연 상황이 조금 난처하게 흘러가는군요. 저를 도와주십시오.',
      );
      era.printButton('손을 내민다.', 1);
      await era.input();
      await era.printAndWait([
        '그렇게 내민 손을, ',
        ruby.get_colored_name(),
        '가 망설임 없이 꽉 껴안듯 붙잡았다.',
      ]);
      await era.printAndWait(
        '이렇게 밀착해 있으니, 적어도 이곳에 머무는 사정만큼은 위화감이 사라진 듯했다.',
      );
      await you.say_as_passer_by_and_wait(
        '행인 A',
        '역시 두 사람 이미 깊은 관계였구나……',
      );
      await you.say_as_passer_by_and_wait('행인 B', [
        '진짜야? 그 말은 즉, 설마 ',
        ruby.get_colored_name(),
        '의 배가 벌써부터!?',
      ]);
      await you.say_as_passer_by_and_wait('행인 C', '그거 완전 범죄잖아!');
      await era.printAndWait([
        '그 후로 ',
        you.get_colored_name(),
        '과(와) ',
        ruby.get_colored_name(),
        '는 주변에서 들려오는 온갖 억측과 수군거림을 한 귀로 흘리며, 한동안 유아용품 매장을 꿋꿋이 둘러보았다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  os_shopping_together: (() => {
    const title = '함께 상점가로';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      await era.printAndWait(
        '가게들의 화려한 간판이 지붕 위에 즐비하고, 사람들이 마치 꿀벌처럼 분주하게 그 사이를 오가고 있었다.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '의 손을 꼭 쥔 채 북적이는 거리를 걸으며, 이대로 학원으로 돌아갈지 아니면 호텔로 향할지 깊은 고민에 빠졌다.',
      ]);
      await era.printAndWait(
        '스스로 답을 내리지 못할 때는, 역시 사랑하는 우마무스메의 뜻에 따르는 법이다.',
      );
      if (era.get('relation:85:0') > 150) {
        era.printButton('「안아줄까, 아니면 업어줄까?」', 1);
        await era.input();
        await ruby.say_and_wait('……업어주세요.');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 기꺼이 등을 내주었다.',
        ]);
        await era.printAndWait([
          '아직 성년이 되지 않은, 자그마한 체구의 ',
          ruby.get_colored_name(),
          '는 너무나도 가볍게 들쳐 업혔다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 ',
          you.get_colored_name(),
          '의 등에 가만히 엎드린 채, 고개를 살짝 기울여 ',
          you.get_colored_name(),
          '의 옆모습을 물끄러미 바라보았다.',
        ]);
        await era.printAndWait('아무런 말도 없었다.');
        await era.printAndWait('심지어 표정 하나 변하지 않았다.');
        await era.printAndWait(
          '그저 그 아름다운 눈동자 속에, 한없는 영롱함과 부드러움이 가득 차 있을 뿐이었다.',
        );
      } else {
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 살짝 마음이 동한 듯 보였으나, 결국은 학원으로 돌아가자는 의사를 내비쳤다.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  os_hot_spring_event: (() => {
    const title = '온천 여행';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     * @param {boolean} has_ticket 温泉旅行券を引いたか
     * @param {number} ticket_date 温泉旅行券を引いた時期
     */
    const f = async (ruby, you, callname, has_ticket, ticket_date) => {
      await era.printAndWait([
        '이것은 ',
        you.get_colored_name(),
        '과(와) ',
        ruby.get_colored_name(),
        '가 수많은 가혹한 레이스를 승리로 장식해 낸 어느 날의 이야기——',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 메모장을 열어 일정을 확인하던 와중, 어딘가 낯익은 종이 한 장이 바닥으로 툭 떨어졌다.',
      ]);
      await era.printAndWait(
        '주워 들어 보니, 그것은 다름 아닌 온천 여행권이었다.',
      );
      if (has_ticket) {
        await ruby.say_and_wait([
          '그건 ',
          ticket_date < 2
            ? '막 시니어 시즌에 접어들었을 무렵'
            : ticket_date < 5
              ? '지난해 봄'
              : ticket_date < 9
                ? '지난해 여름'
                : ticket_date < 11
                  ? '지난해 가을'
                  : '지난달',
          ', 상점가 추첨에서 당첨된 것이었지요.',
        ]);
        await era.printAndWait([
          '그 당시에, ',
          you.get_colored_name(),
          '은(는) 「내가 ',
          ruby.get_colored_name(),
          '너처럼 당당하고 훌륭한 트레이너가 된다면, 그때 같이 이 티켓을 쓰자.」라고 말했었다.',
        ]);
        await ruby.say_and_wait(
          '지금, 그것이 다시 우리 앞에 모습을 드러냈다는 것은 즉 때가 되었다는 뜻이겠지요.',
        );
        await ruby.say_and_wait(
          '마침 당분간은 굵직한 큰 레이스도 없으니, 함께 여행을 떠나는 건 어떠신가요?',
        );
        era.printButton(
          '「아직 약속을 완전히 이룬 건 아니라고 생각하는데.」',
          1,
        );
        await era.input();
      } else {
        await ruby.say_and_wait([
          callname,
          ', 아직도 온천 여행권을 보관하고 계셨던 건가요?',
        ]);
        await you.say_and_wait('뭐…… 어쩌다 보니 그렇게 됐네.');
        await you.say_and_wait(
          '마침 당분간은 큰 레이스도 없으니, 같이 여행이나 다녀올까?',
        );
      }
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('잠시 실례하겠습니다.');
      await era.printAndWait([
        ruby.get_colored_name(),
        '가 뒤를 돌아서 스마트폰을 꺼내 들었다.',
      ]);
      await ruby.say_and_wait(
        '네, 저입니다. 지금 당장 학원 앞으로 차를 한 대 대기시켜 주십시오.',
      );
      era.printButton(`「루비???」`, 1);
      await era.input();
      await ruby.say_and_wait('그럼—— 저를 따라오시지요.');
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '을(를) 데리고 그 온천 여행권을 사용할 수 있는 최고급 료칸에 도착했다.',
      ]);
      await ruby.say_and_wait(
        '최근 당신은 쉬지 않고 일만 매진하셨습니다. 제가 전부 지켜보고 있었죠.',
      );
      await ruby.say_and_wait(
        '이번 기회를 빌려 부디 기분 전환을 하시고, 푹 쉬면서 기력을 회복하시길 바랍니다.',
      );
      await ruby.say_and_wait('그럼 저는 먼저 실례하겠습니다.');
      era.printButton(
        '언제나 끈기 있게 노력하는 너야말로 휴식이 꼭 필요해.',
        1,
      );
      era.printButton('내가 보기엔 너한테 휴식이 더 시급해 보여.', 2);
      await era.input();
      await ruby.say_and_wait('후우……');
      await ruby.say_and_wait('이번만큼은 당신의 뜻에 따르도록 하죠.');
      era.drawLine({ content: '온천을 마친 뒤' });
      era.printButton('근데 너는 왜 남기로 해 준 거야?', 1);
      await era.input();
      await ruby.say_and_wait('그저 일시적인 충동이었습니다.');
      era.printButton('진짜로?', 1);
      await era.input();
      await ruby.say_and_wait(
        '제가 순간의 흥미로 결정을 내린 것이, 그렇게나 이상한 일인가요?',
      );
      era.printButton('응, 아주 많이.', 1);
      await era.input();
      await ruby.say_and_wait(
        '그 당시에는 깊게 생각하지 않았습니다. 하지만, 당신의 그 한마디를 듣고 나니……',
      );
      await ruby.say_and_wait(
        '역시 곁에 남아 당신과 함께해 주는 편이 좋겠다고 생각하여 수락했을 뿐입니다…… 그 이상도 그 이하도 아닙니다.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 말을 줄였고, 더 이상 설명할 생각도 없어 보였다.',
      ]);
      await era.printAndWait([
        '하지만 이것만으로도 ',
        you.get_colored_name(),
        '에게는 충분하고도 넘쳤다.',
      ]);
      era.printButton(`「고마워, 루비.」`, 1);
      await era.input();
      await ruby.say_and_wait(
        '제가 딱히 당신께 감사 인사를 받을 만한 행동을 했다고는 생각치는 않는데 말이죠.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '의 방에서 ',
        ruby.get_colored_name(),
        '와 맺은 둘도 없는 유대를 음미하기로 했다……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ...require('#/i18n/ko-KR/kojo/108500-Daiichi-Ruby/edu-85-be-ntr'),
};
