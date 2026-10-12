/**
 * @file エイシンフラッシュ - 恋慕
 * @author 爱放箭的袁本初
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  74: (() => {
    const title = '뽕나무 아래에서';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     * @param {boolean} is_first 初回か
     */
    const f = async (flash, you, callname, is_first) => {
      const ret = [];
      if (is_first) {
        await era.printAndWait(
          `${you.name}과(와) 에이신 플래시의 공동 노력 끝에, 가을 텐노상에서 ${flash.sex}는 염원하던 자신의 꿈을 실현했다.`,
        );
        await era.printAndWait(
          '그 덕분에 본래 빡빡했던 레이스 일정도 한결 여유로워졌다.',
        );
        await flash.say_and_wait(
          `${callname}, 이번 주 일요일에 혹시 선약이 있으신가요?`,
        );
        await era.printAndWait(
          `그리고 바로 이 휴식 기간 중에 에이신 플래시가 갑작스럽게 ${you.name}에게 초대장을 건넸다.`,
        );
        await flash.say_and_wait(
          '전에 외출해서 쇼핑하던 중에 직원분께 이벤트 입장권을 받았거든요. 마침 두 장이라서, 당신과 함께 즐거운 시간을 보내고 싶어요.',
        );
      } else {
        await flash.say_and_wait(
          `${callname}, 이번 주 일요일에 혹시 선약이 있으신가요?`,
        );
        await era.printAndWait(
          `에이신 플래시가 다시 한번 ${you.name}에게 초대를 보냈다.`,
        );
        await flash.say_and_wait(
          '전에 받았던 이벤트 입장권 말이에요, 이번 주에 저와 함께 가주실 수 있나요?',
        );
      }
      era.printButton('「당연히 괜찮지.」', 1);
      era.printButton('「미안해, 그날은 처리해야 할 다른 일이 있어.」', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait(
          `${you.name}은(는) 에이신 플래시의 말에서 희미한 기대를 느꼈다.`,
        );
        await era.printAndWait('그렇다면 거절할 이유는 없다.');
        await era.printAndWait(`그래서 ${you.name}은(는) 흔쾌히 수락했다.`);
        await flash.say_and_wait('네!');
        await era.printAndWait(
          `${you.name}의 대답을 들은 ${flash.sex}의 얼굴에 찬란한 미소가 번졌다.`,
        );
        await flash.say_and_wait(
          '그럼, 일요일의 시간을 기대하고 있을게요, 후훗~',
        );
        await era.printAndWait(
          `다만 기분 탓일지도 모르지만, ${you.name}의 착각인지 모르겠지만, 지금의 에이신 플래시는 평소보다 감정의 동요가 조금 과해 보였다.`,
        );
        era.drawLine({ content: '일요일' });
        await era.printAndWait(
          `${you.name}은(는) 에이신 플래시와 약속한 만남의 장소로 향했다.`,
        );
        await flash.say_and_wait(`안녕하세요, ${callname}。`);
        era.printButton('「안녕, 플래시.」', 1);
        await era.input();
        await era.printAndWait(
          `이미 그곳에서 기다리고 있던 에이신 플래시가 미소 지으며 ${you.name}에게 인사를 건넸다.`,
        );
        era.printButton('「공들여 꾸미고 왔네.」', 1);
        await era.input();
        await era.printAndWait(
          `${you.name}은(는) 오늘의 ${flash.sex}가 평소와는 다르다는 것을 예민하게 알아챘다.`,
        );
        await era.printAndWait(
          '입술에는 립스틱을 바르고, 눈썹에는 옅은 화장을 더했다.',
        );
        await era.printAndWait(
          `${you.name}이(가) 익숙했던 민낯은 아니었지만, 인위적인 느낌 없이 본래의 고운 외모에 매력을 한층 더해주고 있었다.`,
        );
        await era.printAndWait('그야말로 금상첨화라는 말이 딱 어울렸다.');
        era.printButton('「정말 예뻐.」', 1);
        await era.input();
        await era.printAndWait(`${you.name}은(는) 아낌없이 찬사를 보냈다.`);
        await flash.say_and_wait('칭찬 감사합니다.');
        await era.printAndWait(
          `자신의 작은 노력을 알아봐 주었다고 느낀 에이신 플래시는 입가를 가리고 작게 웃었다.`,
        );
        await flash.say_and_wait(
          '예약한 시간이 다 되었네요, 지체하지 말고 출발하죠.',
        );
        await era.printAndWait(
          `하지만 ${flash.sex}는 왜 굳이 이렇게 꾸몄는지에 대해서는 설명하지 않았다. 그저 ${you.name}을(를) 깊이 바라본 뒤 손을 잡고 놀이공원으로 가자고 이끌었다.`,
        );
        era.drawLine();
        await era.printAndWait(
          `분명 에이신 플래시는 오늘 외출을 위해 아주 상세하고 정확하며 완벽한 계획을 준비해 두었다.`,
        );
        await era.printAndWait(
          '유동 인구에 따른 대기 시간을 계산해 놀이기구의 순서를 정하는 것부터, 돌발 상황에 대비한 예비 방안까지.',
        );
        await era.printAndWait(
          `${flash.sex}는 거의 모든 것을 세세하게 고려했고, 그 결과는 ${you.name}에게 선사하는 즐거운 시간이었다.`,
        );
        await era.printAndWait(
          `회전목마, 롤러코스터, 자이로드롭…… ${flash.sex}와 함께 즐긴 모든 항목이 ${you.name}의 머릿속에 깊은 인상을 남겼다.`,
        );
        await flash.say_and_wait('마지막 순서는 관람차 탑승입니다.');
        await era.printAndWait('어느덧 시간은 황혼에 접어들었다.');
        await era.printAndWait(
          '저녁 해가 서쪽으로 지고, 하늘의 노을이 서서히 옅어지며 오렌지색 태양빛이 어두운 붉은빛으로 변해갔다.',
        );
        await era.printAndWait(
          `${you.name}과(와) 에이신 플래시는 놀이공원의 가장 높은 상징물인 관람차 앞에 도착했다.`,
        );
        era.printButton('「장관이네.」', 1);
        await era.input();
        await era.printAndWait(
          `차가운 강철로 지어진 이 거대한 구조물을 보며 ${you.name}은(는) 감상을 남겼다.`,
        );
        await flash.say_and_wait(
          '그렇네요. 저 관람차 안에 앉아서 최고점에 도달했을 때 아래를 내려다보는 건 정말 잊지 못할 경험이 될 거예요.',
        );
        await era.printAndWait(
          `말을 마친 에이신 플래시는 ${you.name}을(를) 빤히 쳐다보았다.`,
        );
        era.printButton('「？」', 1);
        await era.input();
        await era.printAndWait(`${you.name}은(는) 약간의 의구심이 생겼다.`);
        await era.printAndWait(
          `직감이 말해주고 있었다. ${flash.sex}가 오늘 이런 눈빛을 보낸 것이 결코 처음이나 두 번째가 아니라는 것을.`,
        );
        era.printButton('「플래시?」', 1);
        await era.input();
        await era.printAndWait(
          `그 시선에 마음이 담겼다는 것은 알겠다. 하지만 ${you.name}은(는) 그 마음의 정체까지는 알아낼 수 없었다.`,
        );
        await era.printAndWait(
          `그래서 ${you.name}은(는) ${flash.sex}에게 그 이유를 물어보고 싶어졌다.`,
        );
        await flash.say_and_wait(`다음 차례가 저희인 것 같네요, ${callname}。`);
        await era.printAndWait(
          `하지만 ${flash.sex}는 아무 말 없이 고개를 저으며 조용히 미소만 지었다.`,
        );
        await flash.say_and_wait('준비해야겠어요.');
        era.printButton('「……응.」', 1);
        await era.input();
        era.drawLine();
        await era.printAndWait('관람차 위에서 보는 풍경은 아름다웠다.');
        await era.printAndWait('날씨가 맑아 시야가 탁 트여 있었다.');
        await era.printAndWait(
          `${you.name}은(는) 관람차 안에 앉아 유리창 너머를 바라보며, 고도가 높아짐에 따라 지상의 북적이는 인파가 점점 작아지는 것을 지켜보았다.`,
        );
        await era.printAndWait(
          '문득 세상 만물을 내려다보는 듯한 기분이 들었다.',
        );
        await flash.say_and_wait(
          '……전해지는 이야기에 따르면, 관람차가 한 바퀴 돌 때마다 세상에는 입을 맞추는 연인이 한 쌍씩 생긴다고 해요.',
        );
        await era.printAndWait(
          '관람차의 위치가 서서히 가장 높은 곳을 향해 가던 그때, 탑승 이후 줄곧 침묵을 지키던 에이신 플래시가 갑자기 입을 열었다.',
        );
        era.printButton('「뭐라고?」', 1);
        await era.input();
        await era.printAndWait(
          `솔직히 이런 상황에서 갑자기 그런 화제를 꺼내는 것이 너무 민감한 게 아닐까 생각하며, ${you.name}은(는) 의아한 듯 창밖에서 시선을 거두어 눈앞의 상대를 보았다.`,
        );
        era.printButton('「！」', 1);
        await era.input();
        await era.printAndWait(
          `그러자 ${you.name}은(는) 깜짝 놀라고 말았다. 지금의 에이신 플래시가 아주 뜨거운 눈빛으로 ${you.name}을(를) 바라보고 있었기 때문이다.`,
        );
        await era.printAndWait(
          `그 마음은 조금 전의 시선에서 느꼈던 감정과 같았다. 다만 그 깊이는 비교할 수 없었다.`,
        );
        await era.printAndWait(
          `그렇기에 ${you.name}은(는) ${flash.sex}의 눈동자 속에서 끊임없이 일렁이는 그 빛의 구체적인 의미를 읽어낼 수 있었다.`,
        );
        await era.printAndWait('그것은…… 사랑이었다.');
        era.printButton('「플래시……」', 1);
        await era.input();
        await era.printAndWait(
          `자연스럽게 ${you.name}은(는) ${flash.sex}가 오늘 자신을 초대한 진짜 목적을 간파했다.`,
        );
        await flash.say_and_wait('쉿.');
        await era.printAndWait(
          `이것이 이심전심인 걸까. ${you.name}이(가) 깨달음을 얻은 바로 그 순간, 에이신 플래시는 검지 손가락을 입술에 갖다 대며 ${you.name}이(가) 하려던 말을 막았다.`,
        );
        await flash.say_and_wait(
          '……실은 시니어급 가을 텐노상이 끝난 뒤로, 당신과 저 사이의 관계를 어떻게 정의해야 할지 계속 고민해 왔어요.',
        );
        await era.printAndWait(
          `${flash.sex}는 잠시 침묵하며 감정을 추스른 뒤 말을 이어갔다.`,
        );
        await flash.say_and_wait(
          '한 가지 측면에서는 당신의 말씀대로, 제가 처음 당신을 찾아온 목적은 그저 당신이 제 꿈을 이루도록 도와주길 바란 것뿐이었죠. 당신은 그것을 해내셨고, 그러니 우린 이대로 헤어져도 마땅할지 모릅니다.',
        );
        await flash.say_and_wait(
          '하지만 또 다른 측면에서는, 정말로 당신과 헤어지게 될 거라는 사실을 깨달았을 때…… 저는 갑자기 주저하게 되었어요. 아니, 이건……',
        );
        await era.printAndWait(
          `에이신 플래시는 손을 가슴에 얹고 다정한 미소를 띤 채 ${you.name}을(를) 바라보았다.`,
        );
        await flash.say_and_wait('헤어지기 싫은 기분이에요.');
        era.printButton('「헤어지기 싫다……라……」', 1);
        await era.input();
        await era.printAndWait(
          `눈앞의 상대가 쏟아내는 진심 어린 고백에 ${you.name}은(는) 멍해졌다.`,
        );
        await era.printAndWait('（너의 달리는 모습을 계속 지켜보고 싶어.）');
        await era.printAndWait(
          `${you.name}은(는) 문득 가을 텐노상 레이스가 끝난 뒤 자신이 했던 말을 떠올렸다.`,
        );
        await era.printAndWait(
          `어쩌면 서로를 대하는 감정에 있어서 ${you.name}과(와) ${flash.sex}는 같았을지도 모른다.`,
        );
        await flash.say_and_wait(
          '처음에는 이 감정의 정체를 이해하지 못했어요. 저와 당신은 결국 학생과 스승의 관계였으니까요.',
        );
        await era.printAndWait(
          `${flash.sex}는 고개를 저은 뒤 가볍게 숨을 내뱉었다.`,
        );
        await flash.say_and_wait(
          '우리가 처음 만난 날부터 지금까지 겪어온 일들을 하나하나 되짚어보고 나서야, 제 마음속에 왜 이런 감정이 피어올랐는지 이해하게 됐어요.',
        );
        await flash.say_and_wait(
          `그건 바로 『사랑』이기 때문이에요, ${callname}。`,
        );
        era.printButton('「！！！」', 1);
        await era.input();
        await era.printAndWait(
          '단순하고 직설적인 말이었지만, 그만큼 마음 깊이 파고들었다.',
        );
        await flash.say_and_wait(
          '당신을 사랑해요. 그렇기에 당신과 헤어지고 싶지 않고, 언제까지나 당신의 곁에 있고 싶어요.',
        );
        era.printButton('「……그게 나에게 하고 싶었던 말이야?」', 1);
        await era.input();
        await era.printAndWait(
          `${you.name}은(는) 심호흡을 하며 ${flash.sex}의 고백으로 격렬하게 동요하는 내면을 억지로 다독였다.`,
        );
        await era.printAndWait(`잠시 후, ${you.name}은(는) 나직하게 물었다.`);
        await flash.say_and_wait('네.');
        await era.printAndWait(
          `${flash.sex}는 고개를 끄덕이며 솔직하게 인정했다.`,
        );
        await flash.say_and_wait(
          '기억하시나요? 클래식급 여름 합숙이 시작되던 날, 당신은 제가 어떤 선택을 하든 저와 함께 짊어지겠다고 말씀하셨죠.',
        );
        await era.printAndWait(
          `이윽고 ${you.name}은(는) ${flash.sex}가 앞을 향해, 즉 ${you.name}에게 천천히 왼손을 내미는 것을 보았다.`,
        );
        await flash.say_and_wait('저도 마찬가지예요.');
        await era.printAndWait(`${flash.sex}가 한 자 한 자 힘주어 말했다.`);
        await flash.say_and_wait(
          '미래의 매년 매일, 매 분 매 초를 당신의 곁에서 함께하고 싶어요.',
        );
        await flash.say_and_wait('당신과 함께 이 미래를 짊어지고 싶습니다.');
        await era.printAndWait(
          `에이신 플래시는 ${you.name}을(를) 바라보았다. 그 눈빛은 그 어느 때보다 확고했다.`,
        );
        era.printButton('「………」', 1);
        await era.input();
        await era.printAndWait(
          `${you.name} 역시 ${flash.sex}가 자신에게 품고 있는 깊은 감정을 온전히 이해했다.`,
        );
        await era.printAndWait(
          `어느 쪽이든 ${you.name}은(는) ${flash.sex}에게 명확한 답을 해야 한다.`,
        );
        await era.printAndWait('신중하게 결정한 뒤에야 내놓을 수 있는 답을.');
        era.printButton(`${flash.sex}의 손을 잡는다. (관계를 진전한다)`, 1);
        era.printButton(
          `${flash.sex}의 시선을 피한다. (아직 진전하지 않는다)`,
          2,
        );
        ret.push(await era.input());
        if (ret.at(-1) === 1) {
          await era.printAndWait(
            `${you.name}은(는) ${flash.sex}를 사랑하는가?`,
          );
          await era.printAndWait('그것은 매우 흥미로운 질문이었다.');
          await era.printAndWait(
            `아마 처음에는 에이신 플래시가 말한 것처럼 ${you.name} 역시 ${flash.sex}와의 관계를 제자와 스승으로만 여겼을지도 모른다.`,
          );
          await era.printAndWait(
            '하지만 지금에 이르러, 수백 일을 함께 지내며 호감은 싹을 틔우고 거대한 나무로 자라나 마침내 굴레를 부쉈다.',
          );
          await era.printAndWait(
            `${you.name}은(는) 이제 ${flash.sex}와 더욱 평등한 관계가 되어야 한다고 느끼기 시작했다.`,
          );
          await era.printAndWait(
            `그렇다, ${you.name}은(는) ${flash.sex}를 사랑한다. 의심의 여지 없이.`,
          );
          await flash.say_and_wait('！！');
          await era.printAndWait(
            `차가운 관람차 안에서 첫사랑을 경험하는 ${flash.teen_sex_title}은(는) 눈을 크게 떴다.`,
          );
          await era.printAndWait(
            '따스한 감촉이 앞에서 전해져 왔고, 허공에 떠 있던 손은 안락한 의지할 곳을 찾았다.',
          );
          await flash.say_and_wait('그렇군요.');
          await era.printAndWait(
            '미묘한 분위기가 관람차 안에 천천히 퍼져 나갔고, 에이신 플래시의 얼굴에는 선명한 홍조가 떠올랐다.',
          );
          await flash.say_and_wait('이것이…… 당신의 대답인가요?');
          era.printButton('「사랑해, 에이신 플래시.」', 1);
          await era.input();
          await era.printAndWait(
            `${you.name}은(는) ${flash.sex}를 응시하며, 자신의 감정을 그대로 ${flash.sex}의 내면에 새기듯 깊은 목소리로 말했다.`,
          );
          await flash.say_and_wait('네!!');
          await era.printAndWait(
            `${flash.sex}는 ${you.name}의 확답을 듣자 힘차게 고개를 끄덕이며 지금까지 중 가장 달콤한 미소를 지었다.`,
          );
          await flash.say_and_wait('그럼, 저는 에이신 플래시예요. 앞으로……');
          await era.printAndWait(
            '말을 이어가던 에이신 플래시가 마치 영원한 맹세를 하듯 잠시 말을 멈췄다.',
          );
          await flash.say_and_wait('부디 잘 부탁드립니다.');
        } else {
          await era.printAndWait(
            `${you.name}은(는) ${flash.sex}를 사랑하는가?`,
          );
          await era.printAndWait('그것은 매우 흥미로운 질문이었다.');
          await era.printAndWait(
            `곰곰이 생각해보면 처음부터 지금까지 ${you.name}은(는) ${flash.sex}와의 관계를 제자와 스승으로만 여겨 왔다.`,
          );
          await era.printAndWait(
            `물론 ${you.name}은(는) ${flash.sex}에게 호감을 느끼고 있었고, 그 마음은 수백 일의 시간 동안 계속 커져 왔다.`,
          );
          await era.printAndWait(
            `하지만 그것이 ${you.name}이(가) ${flash.sex}를 사랑한다거나, 혹은 『연애 대상』으로 본다는 뜻은 아니었다.`,
          );
          await era.printAndWait('사랑의 형태는 한 가지가 아니지 않은가?');
          await era.printAndWait(
            '우정도 사랑이고, 가족애도 사랑이며, 사제 간의 정 또한 사랑이다.',
          );
          await era.printAndWait(
            `${you.name}은(는) 에이신 플래시에 대한 자신의 감정이 이 세 가지 범주 안에서 모두 찾아볼 수 있다고 생각했다.`,
          );
          await era.printAndWait('다만 유독, 더 평등한 연애만큼은 아니었다.');
          await flash.say_and_wait('………');
          await era.printAndWait(
            `차가운 관람차 안에서 첫사랑을 경험하는 ${flash.teen_sex_title}이(가) 천천히 눈꺼풀을 내렸다.`,
          );
          await era.printAndWait(
            '서로 맞닿아야 할 시선이 이 순간 엇갈리며, 결코 만날 수 없는 평행선처럼 멀어졌다.',
          );
          await flash.say_and_wait('그렇군요……');
          await era.printAndWait(
            `${flash.sex}는 허공에 내밀었던 손을 거두어 무력하게 무릎 위로 떨어뜨렸다.`,
          );
          await flash.say_and_wait('이것이…… 당신의 대답인가요?');
          era.printButton('「……미안해.」', 1);
          await era.input();
          await era.printAndWait(
            `${you.name}은(는) 입을 달싹이며 무언가 말하려 했다.`,
          );
          await era.printAndWait(
            `하지만 결국 가벼운 한숨과 함께 ${flash.sex}의 진심에 보답하지 못한 것에 대한 사과만을 건넸다.`,
          );
          await flash.say_and_wait('아니요, 사과하실 필요 없어요.');
          await era.printAndWait(
            `에이신 플래시는 고개를 저었다. 얼굴에 쓸쓸함이 뚜렷하게 드러났지만 ${flash.sex}는 입꼬리를 올려 ${you.name}에게 부드러운 미소를 지어 보였다.`,
          );
          await flash.say_and_wait(
            '……당신은 잘못이 없어요. 오히려 제가 우리 사이의 관계를 제대로 파악하지 못한 채 경솔하게 행동해서 당신을 곤란하게 만들었네요.',
          );
          await era.printAndWait(
            `말은 그렇게 했지만 ${you.name}은(는) 그 말을 하는 에이신 플래시의 목소리가 떨리고 있다는 것을 느낄 수 있었다.`,
          );
          era.printButton('「플래시……」', 1);
          await era.input();
          await era.printAndWait(
            `그 모습에 ${you.name}은(는) 손을 뻗어 ${flash.sex}를 달래주려 했다.`,
          );
          await flash.say_and_wait('………');
          await era.printAndWait(
            `그러나 그녀는 ${you.name}의 손을 살며시 밀어내고는 고개를 돌려 창밖을 바라보았다.`,
          );
          era.printButton('「………」', 1);
          await era.input();
          await era.printAndWait(
            '어색한 기류가 관람차 안에 감돌았고, 숨이 막힐 듯한 침묵 속으로 빠져들었다.',
          );
          await era.printAndWait(
            `그렇게 관람차 여행의 후반부 동안, 기계가 돌아가는 소음 외에 ${you.name}은(는) 그 어떤 소리도 듣지 못했다.`,
          );
          await flash.say_and_wait('……뭐, 어찌 됐든.');
          era.printButton('「！」', 1);
          await era.input();
          await era.printAndWait(
            '목적지에 다다라서야 이 압도적인 분위기가 조금 나아졌다.',
          );
          await flash.say_and_wait(
            '당신과 만난 것을 후회하지 않아요. 비록 지금은 제자나 친구로서 당신 곁에 있을 수밖에 없더라도, 저는 여전히 만족하고 있으니까요.',
          );
          await era.printAndWait(
            `짧은 평정 속에서 마음을 정리했는지 에이신 플래시는 ${you.name}을(를) 돌아보았고, 그 얼굴에는 다시 평소와 같은 온화함이 떠올라 있었다.`,
          );
          era.printButton('「나도 널 알게 되어서 정말 기뻐.」', 1);
          await era.input();
          await era.printAndWait(`${you.name}은(는) 고개를 끄덕이며 화답했다.`);
          await era.printAndWait('「띠링.」');
          await era.printAndWait(
            `이윽고 캐빈이 지상에 도착했다는 알림음이 ${you.name}의 귀에 들렸고, 다음 순간 잠겨 있던 문이 자동으로 열렸다.`,
          );
          await flash.say_and_wait('후훗.');
          await era.printAndWait(
            '에이신 플래시가 일어나며 달콤한 미소를 지었다.',
          );
          await flash.say_and_wait([
            '그럼, 돌아가요. 트레이너 ',
            you.adult_sex_title,
            '。',
          ]);
        }
      } else {
        await era.printAndWait(
          `${you.name}은(는) 에이신 플래시의 말에서 희미한 기대를 느꼈다.`,
        );
        await era.printAndWait(
          `하지만 아쉽게도 ${flash.sex}와의 외출에 앞서 그날의 ${you.name}에게는 먼저 처리해야 할 일이 있었다.`,
        );
        await era.printAndWait(`그래서 ${you.name}은(는) 거절했다.`);
        await flash.say_and_wait('………');
        await era.printAndWait(
          `예상하지 못한 전개였던 모양이다. ${you.name}의 말을 듣고 에이신 플래시는 잠시 움직임을 멈췄다.`,
        );
        await flash.say_and_wait('……알겠습니다.');
        await era.printAndWait(
          `정신을 차린 ${flash.sex}는 고개를 저으며 ${you.name}에게 미소를 지었다.`,
        );
        await flash.say_and_wait('그럼 다음 기회를 기다리죠.');
        await era.printAndWait(
          `말은 그렇게 했지만 ${you.name}에게는 ${flash.sex}의 표정에서 한 줄기 쓸쓸함이 보이는 듯했다……`,
        );
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
};
