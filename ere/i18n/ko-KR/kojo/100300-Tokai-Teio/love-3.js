/**
 * @file トウカイテイオー - 恋慕
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  49: (() => {
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トウカイテイオーがプレイヤーを呼ぶ名
     */
    const f = async (teio, you, callname) => {
      await teio.say_and_wait('……모르겠어.');
      await teio.print_and_wait([
        callname,
        '을(를) 만나면 이유도 없이 심장이 빨리 뛰어. 레이스 시작 전처럼…… ',
        you.sex,
        '가 다른 ',
        teio.phy_sex_title,
        '과 이야기하는 걸 보면 마음이 불편하고, 달리고 난 뒤에 ',
        you.sex,
        '가 웃으면서 다가오면 몸이 더 뜨거워져……',
      ]);
      await teio.say_and_wait('으으——대체 왜 이러는 거야!');
      await teio.print_and_wait(
        `친구들에게 물어봐도 ${teio.couple_title}은 얼굴을 붉히며 도망가거나, 말을 돌리거나, 웃기만 하고 제대로 설명해 주지 않아. 반은 장난으로, 반은 진심으로 내 트레이너를 좋아하는 거 아니냐고 묻는 사람도 있고. 크으, 그런 걸……`,
      );
      await teio.print_and_wait('그런 걸 트레이너한테 물어볼 순 없잖아아아!!');
      await era.printAndWait(
        `침대 위에서 한바탕 팔다리를 버둥거린 뒤, 머리를 풀어 헤친 ${teio.uma_sex_title}는 다리를 흔들며 발끝으로 침대 가장자리를 톡톡 두드렸다.`,
      );
      await teio.say_and_wait(
        '됐어, 설령 연애라고 해도 이 테이오 님에게 불가능이란 없으니까.',
      );
      await teio.print_and_wait(
        `${you.name}의 담당은 어느샌가 붉게 달아오른 얼굴을 들고, 두 사람의 앞으로의 관계를 제멋대로 결정해 버렸다……`,
      );
      // TALENTNAME:0 = 感情因子
      if (era.get('talent:3:0') !== 1) {
        era.println();
        era.print([
          teio.get_colored_name(),
          '은(는) [감수성 풍부] 특성을 얻었다!',
        ]);
      }
    };
    f.title = '두근거림';
    return f;
  })(),
  74: (() => {
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トウカイテイオーがプレイヤーを呼ぶ名
     */
    const f = async (teio, you, callname) => {
      const ret = [];
      await era.printAndWait(
        `오늘은 평소와 다름없는 하루다. ${you.name}은(는) 평소처럼 트랙에 서서 담당이 달리는 모습을 지켜보고 있다.`,
      );
      await era.printAndWait(
        `얼마나 시간이 흘렀을까. ${you.name}은(는) 생각하지 않을 수 없었다. 공원에서 ${teio.sex}와 만난 뒤 지금까지, 그리 오래 지나지 않은 것 같으면서도 ${teio.sex}와 수많은 일을 함께 헤쳐 온 것 같았다.`,
      );
      await era.printAndWait(
        `추억이 잇달아 떠올랐다. ${teio.sex}가 땀을 흩뿌리며 필사적으로 훈련하던 모습, ${teio.sex}가 눈을 가늘게 뜨며 웃던 얼굴, ${teio.sex}가 이를 악물고 결승선을 통과하던 순간, ${teio.sex}의 젊고 활력 넘치는 모습……`,
      );
      await era.printAndWait(
        `처음 수많은 사람 앞에서 ${teio.sex}와 가로채듯 계약한 것은 어떤 마음에서였을까. ${teio.sex}가 자신의 경력을 정점으로 이끌어 줄 것 같아서였을까. 아니면 ${teio.sex}의 달리는 모습과 자신감 넘치고 밝은 태도에 이끌려서였을까.`,
      );
      await era.printAndWait(
        `아니면……그저 ${teio.sex}를 만났기 때문일까? 처음 본 순간부터 ${teio.sex}의 담당 트레이너가 되어야겠다는 충동이 일었던 걸까?`,
      );
      era.println();
      await teio.say_and_wait('트레이너?');
      era.println();

      era.printButton('「응?」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name}의 전속 담당인 ${teio.uma_sex_title}는 달리는 동안 흐트러진 머리를 한 손으로 대충 쓸어 올려 머리끈으로 다시 묶었다. 다른 손으로는 ${you.name}이(가) 열어 둔 물통을 받아 조금씩 마시기 시작했다.`,
      );
      await era.printAndWait(
        `땀인지 물인지 모를 물방울이 하얀 피부를 타고 흘렀다. ${you.name}은(는) 황급히 시선을 돌렸지만, ${teio.uma_sex_title}가 머리를 올리며 드러난 목덜미로 눈이 갔다.`,
      );
      await teio.say_and_wait(`트레이너, ${you.name}, 왜 그래?`);
      era.println();
      await era.printAndWait(
        `${you.name}은(는) 미처 말을 고르기도 전에 무심결에 엉뚱한 말을 내뱉었다.`,
      );
      era.printButton(
        '「어? 아! 아무것도 아니야, 그냥 널 어떻게 봐야 할지 생각하고 있었어.」',
        1,
      );
      await era.input();

      await teio.say_and_wait(`……？`);
      era.println();
      await era.printAndWait(
        `자그마한 ${teio.uma_sex_title}는 웃음을 참지 못하고 물통을 내려놓았다. 뺨을 조금 붉히며 돌아서서 ${you.name}의 시선을 마주했다.`,
      );
      era.println();
      await teio.say_and_wait(
        `그럼, ${callname}은(는) 나를 어떻게 보고 있는데?`,
      );
      era.println();
      await era.printAndWait(
        `${teio.sex}는 ${you.name}을(를) 뚫어지게 쳐다보았다. 그 눈빛에는 수줍음과 약간의 기대가 섞여 있었다.`,
      );
      era.println();
      await era.printAndWait(`${you.name}의 대답은——`);
      era.printButton(
        '「……아마 지금 내 입장에서는 말하면 안 되는 것일지도 모르겠네」(관계 진전)',
        1,
      );
      era.printButton(
        `「뛰어나고 활기차고 귀엽지만 장난꾸러기인 ${teio.child_sex_title}…… 아니면 ${teio.younger_sibling_sex_title}, 정도일까」(아직 진전하지 않는다)`,
        2,
      );
      ret.push(await era.input());
      if (ret[0] === 1) {
        await teio.say_and_wait('그럼, 어떤 사이가 되고 싶은데?');
        await era.printAndWait(
          `${teio.teen_sex_title}은(는) 눈동자를 굴리며 킥킥 웃고는 질문을 덧붙였다.`,
        );
        await era.printAndWait('이 장난꾸러기!');
        await era.printAndWait(
          `${you.name}은(는) 머리가 지끈거려 저도 모르게 중얼거렸다.`,
        );
        await you.say_and_wait(
          '아아…… 계속 그런 식이면 앞으로 같이 살 일이 걱정되는데.',
        );
        await teio.say_and_wait('가, 같이?');
        await era.printAndWait(
          `${teio.teen_sex_title}은(는) 황급히 얼굴 아랫부분을 가렸다. ${you.name}도 기세를 몰아 각오를 다졌다.`,
        );
        await you.say_and_wait(
          '나는…… 처음부터 계속 너와 함께 달리고 싶었어. 내 제안을 받아 줄래?',
        );
        await teio.say_and_wait(`/////`);
        await era.printAndWait(
          `${teio.teen_sex_title}은(는) 두 눈을 감고 크게 숨을 내쉬었다. 깊이 숨을 들이쉰 뒤 손을 내리고 ${you.name}을(를) 똑바로 바라보았다.`,
        );
        await teio.say_and_wait(
          '후회하면 안 돼. 무적의 테이오 님도 은근히 뒤끝 있거든!',
        );
        era.println();
      } else {
        await teio.say_and_wait(`그렇구나……`);
        await era.printAndWait(
          `${teio.uma_sex_title}는 저도 모르게 입술을 삐죽 내밀었다. ${you.name}은(는) 황급히 헛기침을 하고 오늘의 트레이닝 내용을 읽기 시작했다.`,
        );
      }
      return ret;
    };
    f.title = '변하지 말아 줘';
    return f;
  })(),
  '89-hurt': (() => {
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      const ret = [];
      await era.printAndWait('트레이너실');
      await era.printAndWait('침묵.');
      await era.printAndWait(
        `${you.name}은(는) 눈앞에서 눈을 감고 얼굴에 물방울을 흘리며 몸을 조금 떨고 있는 ${teio.uma_sex_title} ${teio.teen_sex_title}을(를) 바라보았다.`,
      );
      await era.printAndWait(
        `그러고는 ${you.name}은(는) 늘 하던 대로 따뜻하게 데운 부드러운 목욕 수건을 집어 들고 ${teio.sex}의 몸을 닦은 뒤, 빗과 드라이어로 털을 정돈했다.`,
      );
      await era.printAndWait(
        `그 일이 있고 난 뒤, ${teio.sex}는 자주 ${you.name}의 방에 있는 욕실을 빌리러 왔다. 목욕 후에는 ${you.name}이(가) 몸을 말려 주고 관리도 해 주었다. 이제는 일상이 되었다.`,
      );
      await era.printAndWait(
        `물기를 다 닦은 뒤, ${you.name}은(는) 도구를 옆의 작은 탁자에 놓고 담당의 다리를 마사지하며 ${teio.sex}의 재활을 도왔다.`,
      );
      await era.printAndWait(
        `${you.name}의 굳은살이 박인 조금 거친 손이 ${teio.uma_sex_title} ${teio.teen_sex_title}에게 가장 소중한 발과 종아리를 위아래로 쓸어내리며 이따금 가볍게 눌렀다.`,
      );
      await era.printAndWait(
        `매끄럽고 탄력 있는 피부의 감촉이 ${you.name}의 손끝에 전해졌다. 겉으로는 튼튼하고 아름다운 두 다리였지만 안에는 위태로움이 숨어 있었다. 이 다리들이 ${teio.sex}를 지탱하고, 달리게 하고, 레이스장을 질주하게 했다. 그리고 지금은……`,
      );
      era.println();
      await teio.say_and_wait('저기, 트레이너.');
      era.println();
      await era.printAndWait(
        `${you.name}은(는) 고개를 들었다. ${teio.sex}가 무슨 말을 할지 어렴풋이 알면서도 대답했다.`,
      );
      await you.say_and_wait('왜 그래, 테이오?');
      era.println();
      await teio.say_and_wait('나는…… 너는…… 앞으로 어떻게 해야 할까?');
      era.println();
      await era.printAndWait(
        `${teio.sex}는 턱을 조금 당겨 두 다리를 바라보았다. 한때 ${teio.sex}와 나란히 싸웠지만, 지금은 생기조차 없고 돌아올지도 알 수 없는 동료를. 동시에 ${you.name}도 바라보고 있었다.`,
      );
      era.printButton(`「이게 내 대답이야」(관계를 진전시킨다)`, 1);
      era.printButton(`「……」(아직 진전하지 않는다)`, 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 작은 상자를 꺼내고 ',
          teio.uma_sex_title,
          ' ',
          teio.teen_sex_title,
          '이(가) 반응하기 전에 왼발을 살며시 받쳤다. 포장을 풀어 안에 있던 반지를 ',
          teio.sex,
          '의 넷째 발가락에 끼웠다.',
        ]);
        await era.printAndWait(
          `${you.name}이(가) 직접 고른 발가락 반지는 크기가 딱 맞았다. 잘 고정되면서도 발가락의 움직임을 방해하지 않았다.`,
        );
        await era.printAndWait(
          `두 손의 손가락 끝으로 ${teio.uma_sex_title}의 발에 있는 혈액 순환을 돕는 혈자리를 습관처럼 가볍게 눌렀다.`,
        );
        await era.printAndWait(
          `그러고는 ${you.name}은(는) 고개를 들어 시선을 위로 옮겼다. 담당의 새빨간 얼굴과 눈물이 맺힌 듯한 두 눈을 마주했다.`,
        );
        era.printButton('「괜찮겠어?」', 1);
        await era.input();
        await teio.say_and_wait('……좋아!');
        era.println();
        await era.printAndWait(
          `${teio.teen_sex_title}은(는) 울면서 웃으며 두 팔을 벌렸다. ${you.name}은(는) 일어나 ${teio.sex}를 힘껏 끌어안고 더는 놓지 않았다.`,
        );
        // TALENTNAME:53 = 神の足
        if (!era.get('talent:3:53')) {
          era.println();
          era.print([
            teio.get_colored_name(),
            '은(는) ',
            {
              color: buff_colors[2],
              content: '[신의발]',
            },
            ' 특성을 얻었다!',
          ]);
        }
      } else {
        await era.printAndWait(
          `${you.name}은(는) 무슨 말을 하고 싶었을까. 무슨 말을 해야 할까. 무슨 말을 할 수 있을까. 결국 나온 것은 한숨뿐이었다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 말없이 남은 절차를 마치고, 조용한 ${teio.teen_sex_title}을(를) 안아 내려놓은 뒤 방 밖까지 배웅했다.`,
        );
      }
      return ret;
    };
    f.title = '맺어진 약속';
    return f;
  })(),
  89: (() => {
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      const ret = [];
      await era.printAndWait('트레이너실');

      await teio.say_and_wait(`벌꿀~`);
      era.println();
      await era.printAndWait(
        `${you.name}은 맞장구를 치며 작은 ${teio.uma_sex_title}를 품에 앉히고(${teio.sex}가 꼼지락거리며 장난치지 못하게), 손에 든 수건으로 익숙하게 ${teio.sex}의 머리를 말려 준다.`,
      );
      await era.printAndWait(
        '다른 손도 쉬지 않고 마우스를 움직이며 컴퓨터의 훈련 자료를 살펴본다.',
      );
      era.println();
      await teio.say_and_wait('음……');
      era.println();
      await era.printAndWait(
        `작은 ${teio.uma_sex_title}는 냉장고에서 꺼낸 특제 벌꿀 음료를 마시면서, ${you.name}의 화면에 뜬 자료도 보고 있다.`,
      );
      era.println();
      await you.say_and_wait('……');
      era.println();
      await era.printAndWait('我慢できなくなった。');
      await era.printAndWait(
        `湯上がりの${teio.teen_sex_title}の香り、太ももに触れる肌、ときどき自分の下腹を撫でる${teio.uma_sex_title}の毛並み……`,
      );
      await era.printAndWait(
        `${you.name} は、血の流れが生理的な方向へ傾いたのを感じる。`,
      );
      era.println();
      await teio.say_and_wait('트레이너~ 아까부터 계속 이 페이지야.');
      era.println();
      await you.say_and_wait('……');
      era.println();
      await era.printAndWait(
        `${you.name} の腿のうえに座る${teio.sex}は自然に後ろへ凭れかかり、${you.name} は体が強張る。`,
      );
      await era.printAndWait(
        `続いて${teio.sex}の頭が ${you.name} の胸へ寄り、小さなウマ耳がくるりと回り、${you.name} の胸元へ貼りつく。`,
      );
      era.println();
      await teio.say_and_wait(`心臓、ちょっと速いよ。`);
      await era.printAndWait(`${you.name}——`);
      era.printButton('顔を下げ、担当の耳を含む（関係を進める）', 1);
      era.printButton('억지로 일어난다(아직 진전하지 않는다)', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait(
          `憑かれたように、${you.name} は顔を下げ、テイオーのウマ耳の先端を軽く銜える。口腔越しに、${teio.sex}が不自然に一度震え、すぐに静まり、黙って受け入れ、${you.name} の次を待っているのがわかる。`,
        );
        era.println();
        await you.say_and_wait(
          'テイオー……この先も、もっと遠いところまで、一緒に行ってくれるか。',
        );
        era.println();
        await era.printAndWait(
          `${teio.sex}の顔はすでに真っ赤で、何か小さく言い、はっきりと頷いた。`,
        );
        // TALENTNAME:62 = 淫身
        if (!era.get('talent:3:62')) {
          era.println();
          era.print([
            teio.get_colored_name(),
            ' は ',
            {
              color: buff_colors[2],
              content: '[淫身]',
            },
            ' になった！',
          ]);
        }
      } else {
        await era.printAndWait(
          `${you.name} は胸に浮かんだ、ごく当たり前の衝動を押さえ、${teio.uma_sex_title}를 부축해, ${teio.sex}를 옆에 내려놓고 일어나서는, 헛기침하며 아무 일도 없었던 척한다.${teio.name}는 조금 불만스러운 눈치다.`,
        );
      }
      return ret;
    };
    f.title = '언제까지나, 함께';
    return f;
  })(),
  99: (() => {
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {string} tname 得た特性名
     */
    const f = async (teio, you, tname) => {
      const ret = [];
      await era.printAndWait(
        `${you.name}은 맑은 공기를 마시며 햇살 속을 걷고 있다.`,
      );
      await era.printAndWait(
        `갑자기 뒤에서 사락거리는 소리가 나더니, 허리 뒤로 부드럽고 탄력 있는 감촉이 느껴진다. 새하얀 소매를 두른 두 팔이 ${you.name}의 몸을 꼭 끌어안았다.`,
      );
      era.println();
      await you.say_and_wait(
        `대낮부터 ${teio.uma_sex_title}에게 안겨 있는 연상의 트레이너를 보고, 사람들이 뭐라고 생각하겠어.`,
      );
      era.println();
      await teio.say_and_wait(
        `복 받은 거지! 만약 이런 대우를 받고도 억울해하는 사람이 있다면 내가 바다에 발로 차버릴 거야.`,
      );
      era.println();
      await you.say_and_wait('목숨만은 살려 줘.');
      era.println();
      await teio.say_and_wait('괜찮아. 이제 나는 남도 아니잖아.');
      era.println();
      await era.printAndWait(
        `${you.name}은 곁눈질로 ${teio.sex}의 꼬리가 기쁘게 흔들리는 모습을 본다.`,
      );
      era.println();
      await teio.say_and_wait('게다가…… 지금은 다른 사람도 없잖아.');
      era.println();
      await era.printAndWait('그건 그렇네.');
      await era.printAndWait(
        `어째서인지, ${you.name}과 ${teio.sex}가 연인이 된 뒤 학원 행사에서 묘한 경품에 당첨되었다.`,
      );
      await era.printAndWait(
        '경품은 2인용 크루즈 무료 일일 견학권에 예복 대여까지 포함되어 있었다.',
      );
      await era.printAndWait(
        `${you.name}은 그때 직원들이 계획대로라는 듯 보내던 눈빛과 미묘한 미소를 떠올리며 쓴웃음을 짓는다.`,
      );
      era.println();
      await you.say_and_wait('……そんなに密着されると、問題が起きやすい。');
      era.println();
      await teio.say_and_wait('今は真っ昼間だよ、それに船のうえだよ？');
      era.println();
      await you.say_and_wait('だから困るんだ。どう収めろというんだ。');
      era.println();
      await era.printAndWait([
        teio.get_colored_name(),
        {
          content: `「……トレーナー${you.adult_sex_title}って、担当の生徒に反応する変態なんじゃないの？」`,
          color: teio.color,
        },
        '（笑）',
      ]);
      era.println();
      await you.say_and_wait('違う……いや、なんとも……いや、違うはずだ！');
      era.println();
      await teio.say_and_wait('ふふ……じゃあ、説明して？');
      era.println();
      await era.printAndWait(
        `担当${teio.uma_sex_title}の体がさらに近づき、${you.name} は喉が渇き、心拍がおかしくなり、慌てて言う。`,
      );
      era.println();
      await you.say_and_wait(
        '自分の自制心に、幻想は抱いてない、というだけだ。',
      );
      era.println();
      await teio.say_and_wait(
        'でもボクは……もう、そういうこともわかっちゃったし……',
      );
      era.println();
      await era.printAndWait(
        `顔を赤らめた${teio.uma_sex_title} ${teio.teen_sex_title}はごにょごにょ呟いて ${you.name} から離れる。心地よかった体温が遠ざかる。`,
      );
      await era.printAndWait(
        `ところが${teio.sex}はすぐ戻ってくる。担当は ${you.name} の前へ回り、上着の内側へ潜り込もうとする。`,
      );
      era.println();
      await you.say_and_wait('ますます体裁が悪い。');
      era.println();
      await teio.say_and_wait('かもね。');
      era.println();
      await you.say_and_wait('欲を煽られたら、どうする。');
      era.println();
      await teio.say_and_wait('そのとき考える。');
      era.println();
      await you.say_and_wait('……無責任だな。');
      era.println();
      await teio.say_and_wait('ふふ。');
      era.println();
      await you.say_and_wait('추워?');
      era.println();
      await teio.say_and_wait('응……');
      era.println();
      await era.printAndWait(
        `배의 속도는 빠르지 않았고 바닷바람도 적당했다. 하지만 귓가에 차가운 바람이 스치는 게 기온이 떨어진 걸까? ${you.name}은(는) 무심결에 겉옷의 옷자락을 벌려 ${teio.name}를 품 안에 꼭 안았다. 하얀 웨딩드레스를 입고——`,
      );
      await era.printAndWait(
        `——화동처럼 보이는——작은 ${teio.uma_sex_title}가 ${you.name}의 검은 옷깃 사이로 얼굴을 내밀고 온몸을 ${you.name}에게 기댄다.`,
      );
      await era.printAndWait('아…… 이제 따뜻해졌다.');
      era.println();
      await teio.say_and_wait('……');
      era.println();
      await you.say_and_wait('……');
      era.println();
      await teio.say_and_wait('괜찮아.');
      era.println();
      await you.say_and_wait('……？');
      era.println();
      await era.printAndWait(
        `품 안의 ${teio.teen_sex_title}가 문득 그렇게 말한다.`,
      );
      await era.printAndWait(
        `가만히 바라본다. 눈앞에는 ${you.name}을 격려하는 미소와 의심을 모르는 맑은 눈동자가 있다.`,
      );
      era.println();
      await teio.say_and_wait('눈이 조금 피하고 있는데?');
      era.println();
      await you.say_and_wait('……');
      await era.printAndWait(
        `인정할 수밖에 없다.${you.name}은 지금 조금 막막했다——이제 두 사람의 새로운 삶이 시작되는 것이다.`,
      );
      await era.printAndWait(
        `내 인생의 절반을 ${teio.sex}에게 주고, 마찬가지로 ${teio.sex}도 ${you.name}의 인생의 절반을 갖는다. 내가 과연 이 무게를 짊어질 수 있을까?`,
      );
      era.println();
      await teio.say_and_wait(`꼭 할 수 있을 거야, ${you.actual_name}.`);
      era.println();
      await era.printAndWait(
        `——${teio.child_sex_title}에게 이렇게 위로받으니 오히려 더 쑥스럽고 당황스럽다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 웃으며 ${teio.sex}의 머리에 손을 얹고 마구 쓰다듬었다. ${teio.sex}는 눈을 가늘게 뜨고 기분 좋게 콧노래를 흥얼거렸다.`,
      );
      await era.printAndWait('품 안의 보물, 이토록 아름답다니.');
      await era.printAndWait(
        `この${teio.uma_sex_title}は、汚れのない信念を持ち、そのために体まで捧げた。${teio.sex}의 영혼은 빛나고, 태양처럼 눈부시다.`,
      );
      await era.printAndWait(
        `이 ${teio.teen_sex_title}……야말로, ${you.name}이 한때 포기하려 했던 꿈의 화신이다.`,
      );
      era.printButton(
        `「${teio.sex}를 끌어안고, 함께 나아간다」(관계를 진전시킨다)`,
        1,
      );
      era.printButton('「손을 놓고, 제자리에 멈춰 선다」(관계 진전 중지)', 2);
      ret.push(await era.input());
      if (ret[0] === 1 && tname) {
        era.println();
        era.print([
          teio.get_colored_name(),
          '은 ',
          {
            color: buff_colors[2],
            content: `[${tname}]`,
          },
          '이 되었다!',
        ]);
      }
      return ret;
    };
    f.title = '내일 또 보자';
    return f;
  })(),
};
