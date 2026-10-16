/**
 * @file サンデーサイレンス - 募集
 * @author 黑衣剑士-星爆气流斩准备就绪
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} ss
   * @param {CharaTalk} coffee
   * @param {CharaTalk} you
   * @param {PrintedSpan} call_coffee
   * @param {string} title
   */
  async rec(ss, coffee, you, call_coffee, title) {
    await era.printAndWait([
      '조금 쌀쌀한 이른 아침, ',
      you.get_colored_name(),
      '은(는) 일어난 뒤 시간이 아직 이른 것을 확인하고, 가볍게 씻은 후 평소 일할 때 입는 옷으로 갈아입고 학원 안을 산책하기로 했다.',
    ]);
    await era.printAndWait([
      title,
      '인 ',
      you.get_colored_name(),
      '은(는) 지금 트레센에서 그럭저럭 잘 지내고 있었다. 그래도 담당을 찾으려면 아직 노력이 필요했다.',
    ]);
    await era.printAndWait([
      '트레이너 기숙사를 나와 근처의 작은 숲으로 들어갔다. 가끔 이상한 소리가 들린다는 이 숲은 주변의 어린 ',
      ss.uma_sex_title,
      '들 사이에서 원혼이 숨어 있는 괴담 속 숲으로 통했다. 하지만 ',
      you.get_colored_name(),
      '은(는) 진상이 어린 ',
      ss.uma_sex_title,
      '들의 소문보다 훨씬 시시하다는 걸 알고 있었다.',
    ]);
    era.println();
    await era.printAndWait([
      '갑자기 ',
      you.get_colored_name(),
      '의 귓가에 나뭇잎이 스치는 소리가 들려왔다. 이어서 운동화가 땅을 밟는 소리와 함께 일정한 숨소리가 점점 가까워져 오자, ',
      you.get_colored_name(),
      '은(는) 누군가가 이쪽으로 달려오고 있음을 깨달았다.',
    ]);
    era.printButton('（이 시간에…… 대체 누구지?）', 1);
    await era.input();
    await era.printAndWait([
      '눈앞을 가로막은 나뭇가지를 헤치고, ',
      you.get_colored_name(),
      '은(는) 다시 숲속 오솔길로 나와 그 검은 실루엣을 보게 되었다.',
    ]);
    era.println();
    await era.printAndWait([
      '길고 매끄러운 검은 머리카락과 헐렁한 운동복에 싸인 가느다란 모습이 ',
      you.get_colored_name(),
      '의 눈에 새겨졌다. 이런 시간에 ',
      ss.uma_sex_title,
      '가 여기서 아침 훈련을 하는 이유는 알 수 없었다. 훈련이라면 트레센에서 하는 편이 훨씬 편할 텐데.',
    ]);
    era.println();
    await era.printAndWait([
      '말없는 검은 머리의 ',
      ss.uma_sex_title,
      '도 ',
      you.get_colored_name(),
      '의 존재를 알아챘다. 하지만 ',
      ss.sex,
      '는 붉은 눈으로 ',
      you.get_colored_name(),
      '을(를) 힐끗 보고는 다시 호흡을 가다듬었다. 마치 ',
      you.get_colored_name(),
      '이(가) 색깔 있는 공기에 지나지 않는 것 같았다.',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 머릿속을 필사적으로 뒤져 이 ',
      ss.uma_sex_title,
      '를 본 기억을 찾았다. 기억을 더듬으며 길가에 멈춰 섰다.',
    ]);
    era.println();
    await ss.say_as_unknown_and_wait('안녕……');
    await era.printAndWait([
      '조용한 검은 머리의 ',
      ss.uma_sex_title,
      '가 감정이 실리지 않은 차가운 목소리로 ',
      you.get_colored_name(),
      '을(를) 회상에서 끌어냈다.',
    ]);
    era.println();
    await you.say_and_wait([
      era.get('cflag:25:招募状态') === 1 ? '' : '너는…… ',
      call_coffee,
      '?',
    ]);
    era.println();
    await era.printAndWait([
      '그 이름을 들은 검은 머리의 ',
      ss.uma_sex_title,
      '는 미간을 찌푸렸다. ',
      you.get_colored_name(),
      '의 말이 마음에 들지 않는 모양이었다.',
    ]);
    await era.printAndWait([
      '그제야 ',
      you.get_colored_name(),
      '은(는) 헐렁한 체육복 아래의 가냘픈 실루엣이 사실은 꽤나 글래머러스하다는 것을 깨달았다.',
    ]);
    ss.sex_code !== 1 &&
      (await era.printAndWait(
        '부드럽고 풍만한 가슴은 스포츠 브라로 강하게 고정된 탓인지 다소 불만스러운 듯 호흡과 함께 흔들리고 있었다.',
      ));
    await era.printAndWait([
      '살집과 힘이 어우러진 아름다운 다리는 ',
      you.get_colored_name(),
      '의 눈에 레이스 ',
      ss.uma_sex_title,
      ' 아이돌이라는 직업에 가장 어울리는 다리로 보였다.',
    ]);
    era.println();
    await era.printAndWait([
      '분명 ',
      you.get_colored_name(),
      '의 첫마디는 ',
      ss.sex,
      '의 심기를 건드렸다. 그래도 눈앞의 ',
      ss.uma_sex_title,
      '는 화를 내지 않았고, ',
      ss.sex,
      '는 귀를 눕히고 말했다.',
    ]);
    await ss.say_and_wait(ss.name);
    await you.say_and_wait('어?');
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 영문을 모르겠다는 표정을 지었다.',
    ]);
    await ss.say_and_wait([
      '내 이름은 ',
      ss.actual_name,
      '야. 잘 기억해 둬. 안 그러면 다음번엔 널 보건실로 보내버릴지도 모르니까.',
    ]);
    era.println();
    await era.printAndWait([
      '눈앞의 ',
      ss.get_colored_name(),
      '가 무표정하게 건넨 위협은 ',
      you.get_colored_name(),
      '에게 조금 귀엽게 느껴졌다. 하지만 이 자리에서 그걸 드러낼 용기는 이미 없었다.',
    ]);
    await era.printAndWait([
      '왜냐하면 ',
      you.get_colored_name(),
      '은(는) ',
      ss.sex,
      '가 정말로 ',
      you.get_colored_name(),
      '을(를) 보건실로 보내버릴지도 모른다는 걸 알고 있었으니까.',
    ]);
    era.printButton(
      `「그래, ${ss.name}…… 예쁜 이름이네, 너랑 잘 어울려. 기억해 둘게.」`,
      1,
    );
    await era.input();
    await era.printAndWait([
      ss.get_colored_name(),
      '의 기분이 조금 나아진 것 같았지만, ',
      you.get_colored_name(),
      '이(가) 계속해서 ',
      ss.sex,
      '에게 말을 걸려고 하자 어느새 말없이 떠나버렸다는 걸 깨달았다.',
    ]);
    await era.printAndWait([
      '나중에야 ',
      you.get_colored_name(),
      '은(는) 알아차렸다. ',
      ss.get_colored_name(),
      '의 눈동자는 적안이고, ',
      coffee.get_colored_name(),
      '의 눈동자는 금안이라는 걸.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 멋쩍게 머리를 긁적였다. 두 ',
      ss.uma_sex_title,
      '의 얼굴이 거의 판박이였으니까.',
    ]);
    era.drawLine({ content: '선발 레이스가 끝난 뒤' });
    await era.printAndWait([
      ss.get_colored_name(),
      '는 반박할 여지 없는 실력으로 1착을 차지했고, 주변의 트레이너들이 술렁이기 시작하는 것 같았다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      ss.sex,
      '는 여전히 과묵한 태도를 유지하며, 마치 어떤 트레이너와도 접촉할 생각이 아예 없는 듯했다.',
    ]);
    era.println();
    await era.printAndWait('이런 상황에서……');
    era.println();
    era.printButton(`용기 내어 ${ss.sex}에게 말을 걸어본다.`, 1);
    era.printButton(
      `(방금 달리기를 마치고 쉬고 싶은 ${ss.uma_sex_title}를 방해하지 않는 편이 낫겠다.)`,
      2,
    );
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 아직 고민하고 있을 때, ',
      ss.get_colored_name(),
      '가 ',
      you.get_colored_name(),
      '보다 한발 먼저 결정을 내린 것 같았다.',
    ]);
    await era.printAndWait([
      ss.sex,
      '는 소리 없는 유령처럼 ',
      you.get_colored_name(),
      '의 앞에 섰다. 아름다운 얼굴에 맺힌 땀이 햇빛 아래 도드라졌고, 매끄러운 검은 머리카락은 최고급 비단처럼 ',
      you.get_colored_name(),
      '의 눈앞에 펼쳐졌다. 눈이 마주친 순간, 붉은 눈동자에 드물게 미소가 어렸다.',
    ]);
    era.println();
    await ss.say_and_wait('어때? 이제 내 이름 기억했어?');
    era.printButton(`「${ss.actual_name}, 정말 예쁜 이름이야」`, 1);
    era.printButton(`「너는 ${coffee.actual_name} 아니야?」(추천하지 않음)`, 2);
    if ((await era.input()) === 1) {
      await ss.say_and_wait(
        '그럼, 내 트레이너가 되어 줄래? 내 이름이 네 머릿속에 영원히 남도록.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        ss.get_colored_name(),
        '의 미소가 정말 눈부시게 아름답다는 걸 깨달으면서 ',
        ss.sex,
        '가 내민 손을 잡았다.',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        '의 가느다란 손가락이 ',
        you.get_colored_name(),
        '의 손바닥을 장난스럽게 간질였다. 동의해 준 것이 무척 기쁜 모양이었다.',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 엄청난 힘에 속이 뒤집혔다. 눈앞이 새까매지기 직전, ',
        ss.get_colored_name(),
        '의 화난 얼굴이 보였다.',
      ]);
      era.drawLine({ content: '보건실' });
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 보건실에서 눈을 뜨자 ',
        ss.get_colored_name(),
        '가 무표정하게 옆 의자에 앉아 ',
        you.get_colored_name(),
        '을(를) 보고 있었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 겨우 눈을 비비며 몸을 일으키자 ',
        ss.sex,
        '가 안도의 한숨을 쉬는 것이 분명히 보였다.',
      ]);
      await ss.say_and_wait([
        '이제 내 이름 기억했어? 난 ',
        ss.get_colored_name(),
        '야. ',
        coffee.get_colored_name(),
        '는 그냥 먼 친척일 뿐이라고!',
      ]);
      await ss.say_and_wait(
        '그리고…… 사과의 의미로 네 담당이 되어 줄게. 안심해, 네가 원하는 모든 성공을 거머쥐게 해 줄 테니까.',
      );
    }
  },
};
