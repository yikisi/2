/**
 * @file ダイイチルビー - 育成 - NTR 結末
 * @author 梦露
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  be_ntr: (() => {
    const title = '「루비는 트레이너를 바꿀지도 모릅니다.」';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     */
    const f = async (ruby, you, callname) => {
      await era.printAndWait(
        '[WARNING]\n!!!!NTR 주의!!!!\n이 결말에는 강한 NTR 요소가 포함되어 있습니다. 계속하시겠습니까?',
        {
          align: 'center',
          color: buff_colors[3],
          fontSize: '2rem',
          fontWeight: 'bold',
          isParagraph: true,
        },
      );
      era.printMultiColumns(
        ['어서 보여줘.', '역시 그만둘래……'].map((e, i) => ({
          accelerator: i * 100,
          config: { width: 12, align: 'center' },
          content: e,
          type: 'button',
        })),
      );
      const ret = await era.input();
      if (ret === 0) {
        await era.printAndWait('(분명히 경고했습니다.)', {
          align: 'center',
          color: buff_colors[3],
          fontSize: '2rem',
          fontWeight: 'bold',
          isParagraph: true,
        });
        await era.printAndWait([
          '그 후 어느 날, ',
          you.get_colored_name(),
          '은(는) ',
          ruby.get_colored_name(),
          '가 집사를 통해 보낸 CD를 받았다.',
        ]);
        era.println();
        await you.say_as_passer_by_and_wait('약혼자', '좋아, 루비. 벗어.');
        await ruby.say_and_wait('……네, 알겠습니다.');
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 각오를 다진 듯이, 약혼자의 속옷에 손을 얹었다.',
        ]);
        await era.printAndWait([
          '숨을 내뱉고, 마음을 진정시킨다. 그러고 나서 과감하게 속옷을 한꺼번에 아래로 내렸을 때, 거대한 남근이 기세 좋게 튀어 올라 ',
          ruby.get_colored_name(),
          '의 눈앞에 나타났다.',
        ]);
        await ruby.say_and_wait('아라……');
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 짧은 비명을 흘렸다.',
        ]);
        await era.printAndWait('그의 거근은 힘차게 우뚝 솟아 있다.');
        await era.printAndWait('그 모습은, 수컷의 상징이라 부르기에 걸맞다.');
        await era.printAndWait([
          '거근은 ',
          ruby.get_colored_name(),
          '를 노려보듯이, 검은 빛을 내뿜고 있었다.',
        ]);
        await era.printAndWait('너무 크다……');
        await era.printAndWait(
          '그의 거근은 이미 발기하여, 잘 익은 바나나처럼 검고 굵다. 그 크기는 페트병 정도도 되며, 비대해진 혈관이 흐르고 생물처럼 도드라져 있다.',
        );
        await ruby.say_and_wait('아아……');
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 음경의 크기에 무심코 감탄했다. 눈동자는 그 거근에서 떨어지지 않고 놀라움에 크게 떠 있다. 믿기 힘든 크기의 육봉을 양눈으로 응시하고 있었다.',
        ]);
        await ruby.say_and_wait('대단해요…… 이런…… 일이 벌어지다니……');
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 그 거근을 찬양하며, 특히 길이에 첫눈에 반한 듯 숨을 가쁘게 내쉬고 있다.',
        ]);
        await era.printAndWait([
          '그녀는 거대한 뿌리 부분을 잡았다.',
          ruby.get_colored_name(),
          '의 손가락은 길고 아름답지만, 상대의 규격 외인 거근에는 전혀 어울리지 않아 그 크기를 새삼 확인한다.',
        ]);
        await era.printAndWait(
          '약혼자 「네 트레이너와 비교해서 어느 쪽 자지가 더 커?」',
        );
        await era.printAndWait([
          '그는 오만한 미소를 지으며 ',
          ruby.get_colored_name(),
          '에게 묻는다. 의도는 명백하다. 하지만 약혼자인 그녀에게 말하게 하는 데 의미가 있다.',
        ]);
        await ruby.say_and_wait('……! 그런 것, 말하지 않겠어요.');
        await era.printAndWait([
          ruby.get_colored_name(),
          '의 표정이 흐려진다. 약혼자는 ',
          ruby.get_colored_name(),
          '의 머리에 손을 얹고 애무했다.',
        ]);
        await era.printAndWait('약혼자 「말해.」');
        await era.printAndWait([
          '날카로운 표정으로 ',
          ruby.get_colored_name(),
          '에게 명령하자, 그녀는 포기한 듯 중얼거렸다.',
        ]);
        await ruby.say_and_wait('당신 쪽이…… 더 커요.');
        await era.printAndWait('약혼자 「누구보다 좋아? 제대로 말해.」');
        await ruby.say_and_wait('당신 쪽이……! 트레이너보다 크고 훌륭해요……!');
        await era.printAndWait('약혼자 「잘 말했다.」');
        await era.printAndWait([
          '조금 전의 표정과는 판이하게 달라져, 그는 부드러운 얼굴로 ',
          ruby.get_colored_name(),
          '의 머리를 쓰다듬었다.',
        ]);
        await ruby.say_and_wait('미안해요……');
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 미안한 듯한 얼굴로 카메라를 바라보았다.',
        ]);
        await era.printAndWait(
          '그 모습을 보고, 당신은 자신이 사랑받고 있었다는 것을 깨달았다.',
        );
        await era.printAndWait([
          '그녀와 눈이 마주쳤을 때, 갑자기 거근이 사이에 끼어들었다. 눈앞은 그의 육봉으로 가득 찼고, ',
          ruby.get_colored_name(),
          '도 카메라에서 시선을 돌려 눈앞의 거대한 물건에 완전히 빼앗겼다.',
        ]);
        await era.printAndWait([
          '그는 마음대로 ',
          ruby.get_colored_name(),
          '의 머리카락을 잡고 자신의 가랑이 사이에 밀어붙였다. 억지로 입을 벌리고 거근을 밀어 넣으며, 머리카락을 난폭하게 잡아당겨 위아래로 움직였다.',
        ]);
        await ruby.say_and_wait('음……음……음윽……!');
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 괴로운 듯 눈썹을 찌푸린다. 검은 거근이 ',
          ruby.get_colored_name(),
          '의 작은 입으로 들락날락할 때마다 침이 입가에서 뚝뚝 떨어졌다.',
        ]);
        await era.printAndWait(
          '작은 입 안에서 갈 곳을 잃은 거근은 마침내 목구멍으로 침입하여 가냘프고 아름다운 목을 부풀게 했다.',
        );
        await ruby.say_and_wait('음윽! 음……!');
        await era.printAndWait(
          '평소에는 늠름하고 아름다운 얼굴이 너무 큰 고통에 눈물과 콧물로 젖어 있다.',
        );
        await era.printAndWait('약혼자 「나온다! 전부 마셔!」');
        await era.printAndWait(
          '약혼자가 그렇게 말한 뒤, 단번에 그녀의 머리를 뿌리까지 밀어붙이며 사정했다. 정액은 놀라운 양으로 코와 입에서 넘쳐흘렀다.',
        );
        await ruby.say_and_wait('음……음……');
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 꿀꺽, 꿀꺽하며 정액을 다 마셨다.',
        ]);
        await ruby.say_and_wait('하앗……! 음……하아……');
        await era.printAndWait([
          '겨우 ',
          ruby.get_colored_name(),
          '의 목구멍에서 빠져나온 거근은, 끈적한 정액과 침을 머금고 있고, 침 실이 풍성한 입술에서 뻗어 나와 있다.',
        ]);
        await era.printAndWait(
          '눈동자의 초점은 맞지 않고 산소 부족인 듯 시선이 흐려져 있다. 입꼬리는 뿌리까지 물었기 때문에 남자의 음모가 붙어 있었고, 입 안쪽까지 들어와 있었다.',
        );
        await era.printAndWait([
          '약혼자는 거근을 ',
          ruby.get_colored_name(),
          '의 얼굴에 얹고 넘쳐흐른 정자를 그대로 아름다운 뺨에 펴 발랐다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '의 얼굴은 정액으로 뒤덮였고, 입에서 침이 흘러 숨도 제대로 쉬지 못한다.',
        ]);
        await era.printAndWait('이제 저항할 의지는 없는 것이리라.');
        await ruby.say_and_wait('음♥앗♥앗♥앗♥');
        await ruby.say_and_wait('오♥♥옷♥♥♥♥');
        await ruby.say_and_wait('응아아♥음음♥');
        await ruby.say_and_wait('윽♥흠♥');
        await ruby.say_and_wait('오~옷♥');
        await era.printAndWait(
          '그것은 짐승의 목소리였다. 강한 수컷에게, 거근에게 아양을 떠는 저속한 목소리.',
        );
        await you.say_and_wait('루비……?', true);
        await era.printAndWait([
          '있을 수 없다.',
          ruby.get_colored_name(),
          '가 이런 더러운 목소리로 처량하게 헐떡이다니.',
        ]);
        await era.printAndWait(
          '거대한 검은빛의 수컷이 하얀 암컷을 범하고 있다.',
        );
        await era.printAndWait(
          '수컷은 위에서 누르고 허리를 강하게 흔들며, 암컷은 저속한 신음을 흘리면서 다리를 수컷의 허리에 감아 매달려 있었다.',
        );
        await era.printAndWait([
          ruby.get_colored_name(),
          '의 비부를 들락날락하는 칠흑 같은 거근은 압도적인 크기로 큰 호를 그리며 움직인다.',
        ]);
        await era.printAndWait(
          '거칠게 허리를 흔들며 거근을 여자의 몸으로 밀어 넣는다. 그것은 거의 강간과도 같았다.',
        );
        await era.printAndWait(
          '서로 바라볼 때마다 몇 번이고 깊은 입맞춤을 나눈다. 친밀도가 높은 체위는 본래 연인 사이에서나 하는 것이다.',
        );
        await ruby.say_and_wait(
          '오♥오♥옷! 대단해요♥ 가장 깊은 곳까지 닿아요♥ 우오오옷!',
        );
        await era.printAndWait(
          '그녀가 저속하게 그렇게 외치자, 약혼자는 기쁜 듯이 물었다.',
        );
        await era.printAndWait(
          '약혼자 「트레이너의 자지와 내 거근 중 어느 쪽이 좋아?」',
        );
        await ruby.say_and_wait(
          '앗! 이쪽이에요! 이쪽의 큰 편♥ 트레이너가 닿지 않는 곳까지 닿아요♥',
        );
        await era.printAndWait('약혼자 「하하, 정말로 거근을 좋아하는구나!」');
        await ruby.say_and_wait(
          '좋아해요!♥ 큰 게 좋아요!♥ 조그만 트레이너와는 생물로서의 격이 달라요♥',
        );
        await era.printAndWait(
          '약혼자 「그렇지. 그런 쓰레기 같은 트레이너는 버려버려!」',
        );
        await ruby.say_and_wait(
          '안 돼요♥ 그분의 험담은 안 돼요♥ 단지 자지가 크지 않을 뿐이에요♥ 포경되지 않은 어린아이 자지예요♥ 다정한 부분이 좋은 것이니까요♥ 안 돼♥',
        );
        await era.printAndWait(
          '약혼자 「다정해도 남자로서는 무가치한 쓰레기다!」',
        );
        await ruby.say_and_wait('안 돼요♥ 사실을 말하는 건 안 돼요♥');
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 헐떡이며 그렇게 외치고, 그것을 들은 그의 허리는 더욱 빠르게 움직이며 스퍼트를 시작했다.',
        ]);
        await ruby.say_and_wait(
          '와아앗♥ 안 돼♥ 안 돼♥ 안 돼♥ 갈 것 같아요~♥♥♥',
        );
        await era.printAndWait('그 후, 약혼자도 몸을 떨며 사정하기 시작했다.');
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 「호홋호홋♥」 하며 헐떡이고, 감은 양다리를 뻗으며 쾌감에 떨었다.',
        ]);
        await era.printAndWait([
          '그가 몸을 떼고 일어서자, ',
          ruby.get_colored_name(),
          '의 비부에서 미끌거리는 거근이 빠져나온다. 물론 피임 기구는 하지 않았기에 정액이 뚝뚝 떨어졌다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 눈을 뒤집고 다리도 몸도 경련하고 있다. 비부에서는 갈 곳을 잃은 정액이 넘쳐흐르고 있었다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 질내사정을 받았다.',
        ]);
        await era.printAndWait([
          '약혼자는 힘이 빠진 ',
          ruby.get_colored_name(),
          '를 가볍게 안아 올리며 귀여운 다리의 관절에 팔을 걸었다.',
        ]);
        await era.printAndWait([
          '검은빛의 육봉이 다시 흠뻑 젖은 ',
          ruby.get_colored_name(),
          '의 비부로 밀려 들어갔다.',
        ]);
        await ruby.say_and_wait('와아!♥');
        await era.printAndWait([
          '단번에 깊숙이 밀려 올라가며, ',
          ruby.get_colored_name(),
          '는 저속한 목소리로 헐떡였다. 격렬하게 들락날락할 때마다, ',
          ruby.get_colored_name(),
          '의 통통한 유방이 흔들린다.',
        ]);
        await ruby.say_and_wait(
          '보지 말아요♥ 보지 말아 주세요♥ 이런 저를♥ 부탁해요♥ 오옷♥♥♥',
        );
        await era.printAndWait(
          '그녀는 보지 말라고 외친다. 평소 유지하는 모습과는 동떨어져, 이런 자신을 보여주고 싶지 않은 것이리라.',
        );
        await era.printAndWait(
          '그때 약혼자가 귓가에서 속삭였다. 그녀는 숨을 내뱉으며 고개를 끄덕인다. 그러고 나서, 당신에게 말했다.',
        );
        await ruby.say_and_wait(
          '보지 말아요♥ 변태♥ 자지 변태, 죽어라♥ 죽어 주세요♥',
        );
        await era.printAndWait(
          '숨도 제대로 쉬지 못하는데도, 여전히 당신에게 멸시의 말을 내뱉는다.',
        );
        await ruby.say_and_wait(
          '포경은 죽어라♥ 애마를 빼앗긴 쓰레기는 죽어라♥ 죽어라♥ 죽어라♥ 죽어라♥',
        );
        await era.printAndWait(
          '그것을 들은 약혼자는 더욱 강하게 삽입했다. 귓가의 속삭임은, 「더 기분 좋게 해줄 테니까 트레이너의 험담을 해라」라는 명령이었으리라.',
        );
        await ruby.say_and_wait(
          '죽어라♥ 열등 유전자는 죽어라♥ 이 세상에 살 가치는 없어요♥',
        );
        await you.say_and_wait('이것이 루비의 본심인가?', true);
        await ruby.say_and_wait('엣♥ 아아~♥');
        await era.printAndWait(
          '다리를 뻗고 경련한다. 침이 입에서 흐르고 눈동자는 위를 향한다. 온몸을 순환하는 쾌감으로부터 도망치려는 듯 몸을 축 늘어뜨렸다.',
        );
        await era.printAndWait([
          '그 광경을 본 약혼자는, ',
          ruby.get_colored_name(),
          '를 침대로 내던졌다.',
        ]);
        await ruby.say_and_wait(['……미안해요, callname……']);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
