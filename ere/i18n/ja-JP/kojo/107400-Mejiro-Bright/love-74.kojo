# @file メジロブライト - 恋慕
# @author KUN
# 49恋慕、ターン終了時
49:
  title: ふたりのカカオの木
  lines:
    - 平凡な休日、%CHARA%は突然、することがなかった%YOU%をメジロ家の荘園へ招いた。
    - ふたりが初めて会ったときと同じように、彼女は木陰で静かに待っている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「急にお呼び立てして、ご迷惑ではございませんでしたか？」
    - 相変わらずのんびりした声は少し怯えているが、目の前の茶杯にはもう自然に紅茶が注がれている。
    - 招待を受けた%YOU%にとって、%CHARA%の問いは挨拶にすぎない。
    - 自然に座り、茶杯を取り上げて小さく一口飲んだあと、目の前に少し粗いチョコレートの箱が現れた。
    - acc: 1
      content: 「これは？」
    - メジロ家なら、こんなチョコレートは出さないはずだ。
    - なら、別の意味があるのだろう。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「私が作ったのですわ～」
    - 少し困惑した%YOU%を見て、%CHARA%は気づかないうちに笑う。
    - 目の前の箱をそっと前へ押し、次の動きを少し期待して見つめている。
    - 形のいいかげんなチョコレートを前に、%YOU%は少し迷って一塊を取り上げる。
    - そっと一口噛んで、ようやく粗い見た目の理由がわかった。
    - acc: 1
      content: 「作るときも、のんびりだったんだろ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「正解ですわ～ %CALLNAME%は、理由を当てるのがお上手ですわね～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「では…… %CALLNAME%は、材料がなにか、ご存知ですの？」
    - チョコレートから材料を当てるのは、少し難しい。
    - acc: 1
      content: 「高級店のチョコレートを溶かしたのか？」
    - acc: 2
      content: 「カカオ豆を、わざわざ買いに行ったのか？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふふ…… 違いますわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「答えは——この荘園のカカオの木、ですわよ～」
    - 頬杖をついていた両手を下ろし、そっと脇を指さす——
    -
    - 年季の入ったカカオの木で、この荘園にずいぶん前からあるらしい。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ、%CALLNAME%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あなたと一緒に、ここにもカカオの木を一本、植えたいのです。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そうすれば、実がなるたびに、%CALLNAME%へ、私たちだけのチョコレートを作れますわ～」
    - acc: 1
      key: update
      content: 「いいよ、一緒にやろう！」（関係を深める）
      lines:
        - %YOU%の返事を聞いて、%CHARA%の笑顔はさらに明るくなる。
        - ほどなく、荘園の職員が倉庫から小さなカカオの苗を見つけてきた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「さあ、一緒に植えましょう～」
        - 目の前のカカオの木を見て、%YOU%も袖をまくる。
        -
        - divider: true
          position: left
          content: 意気込んで働いたあと
        -
        - どれだけ忙しかったかわからないが、頭上の陽を浴びてカカオの木を植え終えた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「できましたわ～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「いつか、ここで一緒に涼めるでしょうね。」
        - 明るい笑顔のまま、そっと%YOU%の胸に寄りかかる。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「そうですわよね？ %CALLNAME%～」
    - acc: 2
      content: 「その日が来たら……」（まだ深めない）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ええ～」
        - 声には少し寂しさがあるが、顔にはまったく出さない。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「待っていますわ。その日まで～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「だって、私はそういうのんびり屋ですもの～」

# 74恋慕、ターン開始時
74:
  title: 自然と寄り添って
  lines:
    - ある日、ふたりで過ごす。
    - またある日、ふたりで過ごす。
    - 何日かわからないほど、ふたりはやはり一緒に過ごしている。
    - 最初は、トレーニングの時間だけ一緒にいた。
    - やがて休息の時間も、気づかないうちに隣に座るようになった。
    - いまは、一緒にいられるときなら、%CHARA%は%YOU%のそばに現れる。
    - 約束も契約もなく、ただ自然に、一緒にいる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふわぁ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、そろそろトレーナーのお休みの時間ですわね～」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「……え？」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「今日も行くの？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええ～」
    - %D_NAME%の妙な顔とは違い、%CHARA%の顔は少し困惑しているだけだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%と一緒に、のんびり～と」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「とても自然ですわ～」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「自然…… それがどういう意味か、わかってるの？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ほかに、どんな意味が？」
    - 教室に座る%CHARA%は妹を見て、少しぼんやり首を傾げる。
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「もう、あなたって……」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「まるで、まるで……」
    - 少し強気だった%D_NAME%は顔を赤らめ、残りの言葉を出すか迷っている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ドーベル？」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「……恋人、みたいじゃない」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「こ、恋人？」
    - 意外な答えを聞いて、%CHARA%も呆けた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （恋人……？）
    - ほどなく、顔に薄い紅を浮かべた%CHARA%が立ち上がる。
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「ねえ、ねえ？ ブライト？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……%CALLNAME%のところへ行かなくては。」
    - ふわりとした口調に少し芯が入り、立ち上がると迷わず扉を出る。
    -
    - いつものように、自然に扉を入り、自然に%YOU%のそばにいる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%～」
    - いまの%CHARA%の顔はまだ薄い紅だが、異常はない。
    - そっと%YOU%の腕を抱き、ざわつき始めた心をまた沈める。
    - 好きなことは、そっと～ 胸の奥に置いておく。
    - のんびりと、ゆっくりと、その日を待つ……

# 89恋慕、一緒に小憩で発火
89:
  title: 気づかないうちに、もう深く
  lines:
    - 仕事をいったん置き、少し疲れた%YOU%と%CHARA%は、そろって休息を選んだ。
    - 事務所の気温は心地よく、すぐに昼寝にふさわしい空気になる。
    - いつものように時間を忘れ、のんびりとそのひとときを味わった。
    - ただ今日は、少し違う。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふわぁ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、%CALLNAME%は、まだ起きていらっしゃいませんの？」
    - 少し寝ぼけた%CHARA%は、そっと%YOU%の体を抱く。
    - 目をまた細め、全身を馴染みの気配に沈める。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%の匂い～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「安心しますわね～」
    - 体をぴったり寄せ、ふにゃりとした頬が%YOU%の髪に軽く擦れる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふわり～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふふ～」
    - 両腕が無意識に強くなり、自分を溶かし込むように抱きしめる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%…… はぁ」
    - 想像どおり%YOU%と一緒に目覚めることはなく、ひとりで目を開けた。
    - 無意識に力を込めていた手をゆっくり緩め、密着した体を離す。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あら、私、これは……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ほかほか……」
    - 少しぼんやりしたまま、まだ眠っている%YOU%のそばで立ち上がる。
    - 指を喉に当て、ゆっくり下へ滑らせる。
    - 深い青の制服に沿い、蝶ネクタイを越え、スカートを越え……
    - 白い布に触れたとき、やっと理由に気づく。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これは……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうして、ですの？」
    - 小さく首を傾げた%CHARA%は、少し湿った指先を見る。
    - まだ熱を帯びていく体が、運動で得た眠気を少しずつ洗い流していく。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「この感じ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんだか……」
    - 動き始めた腰が、少しずつ%YOU%のそばへ寄っていく……
    - 瞳に眠る%YOU%が映り、太ももを擦る動きが止まらない。
    - 黙って椅子の後ろまで寄り、指を下へ伸ばす。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうして…… こんなに、いいのですか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「感じ、感じが……」
    - 静かな部屋に、普段とは違う音が響く。
    - 目の前の出来事を見て、のんびりな%CHARA%も珍しく慌てる。
    - どうにか片付けたころ、普段なら目覚める時間になっていた。
    - acc: 1
      content: 「あ、ブライト？」
    - 顔に薄い紅の残る%CHARA%を見て、目覚めたばかりの%YOU%は、それも寝起きのせいだと思うだけだった。
    -
    - 帰る時間になり、%CHARA%と%YOU%は校門で分かれる。
    - 疲れで何も気づかない%YOU%は気ままに挨拶し、欠伸をしながら離れた。
    - 遠く%YOU%を見る%CHARA%は、自分がしたことを思い出す。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%！」
    - のんびり屋の%CHARA%が、少し焦って走り、%YOU%の腰を抱く。
    - acc: 1
      content: 「ど、どうした、ブライト？」
    - 動きは速いが、すぐには口にしない。
    - 落日の光が降りてから、%CHARA%はようやくゆっくり口を開く。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ずっと、一緒にいられますわよね……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あのカカオの木の下で、一緒に涼んで……」
    - acc: 1
      content: 「……もう約束しただろ」
    - acc: 2
      content: 「……当たり前だろ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ…… そう、ですわね～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ありがとうございます、%CALLNAME%～」
    - きつく抱きしめていた両手が力を失い、ゆっくり緩む。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そういえば、明日は%CALLNAME%も私も休み、ですわよね？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……せっかくですもの、私たちのカカオの木を見に行きません？」
    - acc: 1
      key: update
      content: 「いいよ。」（関係を深める）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ええ～～」
        - 満面の笑顔の%CHARA%は%YOU%の手を取り、電話で運転手へ知らせる。
        - ただ、車の行き先が、少しおかしい……
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「カカオの木の前に……」
        - 同じく後部座席の%CHARA%が、%YOU%の耳元へ寄りかかる。
        - 静かに、耳たぶを噛む。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%に…… 別のものを見ていただきたいのです」
        # 馬跳び
    - acc: 2
      content: 「今日は少し疲れて……」（まだ深めない）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「それでは、仕方ありませんわね……」
        - 薄い紅の顔に、ほんの少し名残惜しさが浮かび、小さく笑うだけだった。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「明日、また一緒に見ましょう、%CALLNAME%～」

89_sex:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ごめんなさい、%CALLNAME%……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「今日は、少し衝動的でしたわ……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「でも、%CALLNAME%も気持ちよかったでしょう？ ふふ～」

99_1:
  title: あなたも私も、もう抜けられない
  lines:
    # 99恋慕、ターン終了
    - color: %COLOR%
      content: 休日の%CHARA%は自室にぼんやり座り、窓の外の夜空を見ている。
    - color: %COLOR%
      content: 少女らしい部屋には、対になった人形が並んでいる。
    - color: %COLOR%
      content: いつのころからか、散らばっていた人形にも、それぞれ連れができた。
    - color: %COLOR%
      content: 小さな人形のそばには、どれも対になるもう一体が座っている。
    - color: %COLOR%
      content: いまこの部屋でひとりなのは、%CHARA%自身だけ……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%が、ここにいてくださったら……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%が、ここにいてくださったら、よかったのに……」
    - color: %COLOR%
      content: いちばん好きな二つのぬいぐるみを抱き、床に届かない小さな脚をそっと揺らす。
    - color: %COLOR%
      content: 上半身を揺らしながら脇を見る——隣に空けた、もう一つの場所を。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - color: %COLOR%
      content: ゆっくり身を屈め、懐の人形を抱きしめて、顔の半分を隠す。
    - color: %COLOR%
      content: 瞳に映る部屋のなかに、%YOU%の姿がある。
    - if: era.get('cflag:0:0') === 1
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「私…… 会いたくて…… 愛しい、旦那さま……」
    - if: era.get('cflag:0:0') !== 1
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「私…… 会いたくて…… 愛しい、トレーナーさま……」

# 99恋慕、【あなたも私も、もう抜けられない】の次ターン
99_2:
  title: あなたは私の光
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「親愛なる方～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっと、またお会いできましたわ～」
    - 事務所で再会したとき、%CHARA%は周囲に誤解されそうな言葉を残して%YOU%に飛びつき、丸い顔を胸に強く擦りつける。
    - かわいい大きな犬のように、ずっとそこに顔を埋めている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふん～ふん～」
    - %YOU%を抱いた%CHARA%は、そっと鼻歌を口ずさむ。
    - acc: 1
      content: 「あの、%CHARA_FULL%？」
    - 抱かれて汗ばみ始めた%YOU%は、少し困って名前を呼ぶ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふわぁ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ……」
    - 気づいたらしい%CHARA%は、やっと手を離す。
    - 羞恥で赤い顔のまま二歩下がり、%YOU%と少し距離を取る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「大変申し訳ございません、%CALLNAME%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「数日お会いできず、少し恋しすぎてしまいましたわ～」
    - %YOU%の前で珍しく耳を伏せた%CHARA%は、不安そうに自分の頬を掻く。
    - 本人は言葉を控えているのに、尻尾だけが興奮して揺れている。
    - 馴染みの匂いのせいか、%CHARA%は少しもじもじしている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だって、%CALLNAME%の匂いが、本当に好きなのですもの！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「本当に、申し訳ございません……」
    - 謝ったあと、静かにまた一歩下がる。
    - 目の前の%CHARA%の、いつもの様子と違う振る舞いを見て、%YOU%も戸惑う。
    - acc: 1
      key: sex
      content: 「親愛なる、って？」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ええ～」
        - %YOU%の問いを聞いても、%CHARA%の顔に困惑も羞恥もなく、微笑みを保っているだけだ。
        - 体を少し前へ傾け、前に垂れた三つ編みの香りが%YOU%の鼻先をそっと撫でる。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ、もしかして%CALLNAME%、お好きですの？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふふ、これからも、こうお呼びしてもよろしいですわよ～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「それとも、%CALLNAME%は、もっと～深い呼び方がよろしいですの？」
        - 想像をくすぐる言葉を言いながら、ゆっくり%YOU%の胸へ寄りかかる。
        - 両手を服にそっとかけ、指が肌の上で軽く跳ねる。
        - 少しぼんやりした目が%YOU%を見るうち、だんだん恍惚になっていく。
        - acc: 1
          content: 「ブライトなら、構わない」
        - 瞳の色がさらにおかしくなる前に、%CHARA%は目を閉じる。
        - %YOU%の前から離れ、姿勢を正す。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今日は……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「カカオの木のところを、見に行きません？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「私たちの一生の、証人……」
    - acc: 2
      content: 「匂い？」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「匂い、ですの？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふふ～ %CALLNAME%は、変わっていますわね～」
        - %YOU%の前に立つ%CHARA%はすぐ前へ出て、両手で腰を回してまた抱きしめる。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「好きなものは、好きなのですわ～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「親愛なる%CALLNAME%には、離れられなくなる匂いがしますの」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うんふん～」
        - 先ほどは少し寝ぼけていたのに、いまの%CHARA%ははっきりした意識で抱きついてくる。
        - 押しのけようとしても、%CHARA%のウマ娘としての力はまったく通用しない。
        - acc: 1
          content: 「ブライト、それは変だ……」
        - 言葉を選んだ%YOU%は柔らかい言い方にしたのに、%CHARA%はなお強く抱いている。
        - そのあと両手をさらに強くし、腕を抱きしめる。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「変ではありませんわ～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「夫婦は、だん～だん相手の匂いが好きになるそうですわ……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ、そうでした！」
        - はっとした%CHARA%は顔を上げ、困惑した%YOU%の顔を見上げる。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「いまは、%CALLNAME%とは呼べませんわね……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「親愛なる方～」
        - 甘い呼び方を口にしながら、%CHARA%はそっと%YOU%の腰を摘む。
        - %YOU%の腰が緩んだ隙に、楽々と前へ押し倒す。
        - 自分が床へ押し倒した想い人を見て、%CHARA%の瞳に少し影が差す。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「数日、親愛なる方にお会いできず、何か足りない気がしますの。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「きっと、この匂いでしょうね～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「だって私、スタートの加速は苦手ですけれど……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「仕掛けるタイミングは、親愛なる方が、ちゃんと～教えてくださいましたもの～」
        - 深い青の制服が床へ落ち、姉妹にも劣らない体が現れる。
        - 指が、抱かれて乱れた%YOU%の服を開き、下の肌を出す。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ねえ、親愛なる方……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「もう、よろしいでしょう？」

99_sex:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「やっぱり、%CALLNAME%が…… 親愛なる方がいないと、我慢できませんわ。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「気づかないうちに、ずっとあなたのことばかり……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「これから先…… どこへでも、私を連れていってくださいね～」

# week_end
# 愛欲以上、ドーベルときめき、5月1週、男T
small_party:
  title: 小さな集まり
  lines:
    - トレーニング予定のない日、することがない %YOU% は街を穏やかに歩いている。
    - 仕事のない静かな時間、もともと気分よく息抜きしていた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、%CALLNAME%ですわ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%～ 紅茶、いかがです～」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「ま、待って、ブライト！？」
    - ふにゃりとした声が %YOU% の注意を引き、振り返った瞬間、走ってきた %CHARA% に腕を掴まれる。
    - 同じく予定のないふたりが、ちょうどここにいた。
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「う…… ブライト、こういうの嫌いなの、知ってるでしょ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「担当%UMA%は、トレーナーと仲よくしなくては～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ドーベル？ いらっしゃらないの？」
    - %YOU% の腕に抱きつき、%CHARA% は振り返って、その場で腕を組んだままの%D_NAME%に声をかける。
    - 金色の瞳にしばらく見つめられ、%D_NAME% はやっと気落ちしたように %YOU% のほうへ歩いてくる。
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「き、聞いてよ。私はブライトのせいであっちへ行ったのよ！」
    - acc: 1
      content: 「え？ ああ……」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「もう……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もう～ ドーベルも、もう少し素直になったら～」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「どこが素直よ！？」
    - 顔は不満だらけなのに、去る気配はない。
    - %YOU% から三歩離れた%D_NAME%は、%CHARA% と小さな拗ね合いをしている。
    - acc: 1
      content: 「おふたりとも、ちょっと……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%の仰るとおりですわ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日、予定がなければ…… お茶会、いたしません？」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「ブライト…… 本当にお茶会が好きね。」
    - 隠す気のない%CHARA%は %YOU% を引き、向こうへ向かう。
    - %D_NAME%の文句だらけの視線を無視して、ふたりはテーブルの片側に座る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、どうぞ～」
    - 卓上の三杯目の紅茶を %YOU% の前へ押し、小さく笑う。
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「一杯多かったの、そういうことだったの？」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「ブライトったら……」
    - acc: 1
      content: 「一杯多い？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だって、%CALLNAME%は、必ずいらっしゃいますもの。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「用意しておかなければ、少し失礼ですわ～」
    - 卓上の茶杯を見て、%YOU% は少し迷っただけで、ほかの考えを置いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、今日はお休み、ですわよね？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふふ…… あなたも、こうしてお散歩がお好きなのですね～」
    - acc: 1
      content: 「ブライトと似てる気がする」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふふ、仰るとおりですわ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「いつから…… そんなに仲よくなったの？」
    - %YOU% と %CHARA% が同じ側に座って談笑するのを見て、%D_NAME%の顔に少し不快が浮かぶ。
    - 頬杖をつき、少し怒ったように膨らんだ頬で、目の前のふたりを睨む。
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「仲がいい…… それでも、こんなふうにはしないでしょ？」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「トレーナーと%UMA%が、こんなに密着するなんて……」
    - 小さな呟きなのに、%CHARA% はそっと耳を震わせる。
    - ふにゃりとした両手がそっと %YOU% の腕を抱き、肩に寄りかかる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも見て、%CALLNAME%も反対してはいらっしゃいませんわよ？」
    - acc: 1
      content: 「あ、えっと…… まあな」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「ぐ……」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「私は絶対にしないわ、ふん！」
    - %YOU% と %CHARA% を見ていた目が一気に逸れ、顔を背けて怒ったふりをする。
    - だがよく見ると、%D_NAME%は細い隙間からこっそり見ている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……うんふん～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ドーベル、紅茶が零れていますわよ～」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「あ！」
    - %CHARA% の一言に驚き、慌てて卓面を見る。
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「ど、どこが零れてるのよ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ほら、ちゃんと零れていますわ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それにドーベル、さっきは何を見ていらっしゃいましたの？」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「な、何よ、何も見てない……」
    - まだ何か言いたそうだが、%CHARA% に聞かせれば意味はわかる。
    - 強気だった声はだんだん小さくなり、最後は自分の席に縮こまるだけだった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ドーベルも、見ていましたわよね？」
    - acc: 1
      content: （微妙だな……）
    - ふたりの視線に席へ釘付けにされた%D_NAME%は、不安そうにもじもじする。
    - もじもじした目がふたりのあいだを何度か行き来し、自暴自棄のように口を開く。
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「ああ……！」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「わかったわ、私も仲よくしたいの、いいでしょ！」
    - acc: 1
      content: 「ド、ドーベル！？」
    - 突然の声に思考を中断された %YOU% は、思わず後ろへ凭れる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふふ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「実は、%CALLNAME%がいらっしゃる前……」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「ブライト！ 言わないで！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……ドーベルが、%CALLNAME%と仲よくしたいと仰っていましたのよ～」
    - acc: 1
      content: 「は？」
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - 「う……」
    - 片側に座る%D_NAME%は帽子の鍔を下げ、真っ赤な顔を隠す。
    - %CHARA% のふわりとした主導のもと、少し微妙なまま、温かいお茶会を過ごした。
    # 好感+50、ドーベル好感+50

# office_rest
# 良縁以上
all_along:
  title: あなたの気配は、いつもそばに
  lines:
    - 昼の陽を避け、ふたりは事務所にいる。
    - 静かな部屋には、時おり響くキーボードと紙とペンの擦れだけが、眠気を誘う旋律になる。
    - %CHARA% は脇のソファに座り、視線がだんだん鈍くなり、今にも倒れそうだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん…… 眠い……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「しぃゃ～」
    - 静かな部屋に、%CHARA% のふわりとした寝息が加わる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん…… んん……？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いい匂い……」
    - 呟きが部屋全体に際立ち、仕事中の %YOU% を中断させる。
    - そっと脇で眠る %CHARA% を一目見て、%SEX%に倣って鼻を鳴らす。
    - acc: 1
      content: 「まったく、どこに匂いが……」
    - acc: 2
      content: 「部屋のどこに匂いが……」
    - 突然の中断で、疲労が %YOU% の肩へ登ってくる。
    - もう疲れたなら、少し休もう。
    - そう思った %YOU% は立ち上がり、ソファのそばに座って身を預ける。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふ～わぁ～」
    - 隣に座った人を感じ取ったのか、眠っているはずの %CHARA% は、それでも少し脇へ寄る。
    - エアコンが部屋を吹き、%YOU% の肩の熱をほどく。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふあぁ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「むむ……？」
    - 匂いを辿って、%CHARA%はまた少し隣へ寄る。
    - 丸い小さな顔が %YOU% の腕に擦れ、耳が腰に軽く当たる。
    - 涼しかった部屋に、妙な熱が現れる。
    - 隣の奇妙な熱では、%YOU% もすぐには眠れない。
    - acc: 1
      content: 「場所を変えよう……」
      lines:
        - %CHARA% の顔のそばから手を引き、立ち上がってデスクへ座り直す。
        - ソファほど快適ではないが、背もたれを倒せば休めないこともない。
        - ただ先ほど、なぜ急に熱くなったのだろう？
    - acc: 2
      content: 「少し熱いくらい、構わないか」
      lines:
        - 少し熱いくらい構わない。エアコンもある。
        - そう思いながら、%YOU% はソファに寝たまま、疲れた目を閉じて少し休むつもりだった。
        - 本来ならこの昼寝は午後まで続き、目覚ましか、誰かに起こされるはずだった。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: ？？？
            - 「ん、んん」
        - 体感温度が上がり続け、%YOU% の忍耐がいくら強くても、目を開けずにはいられない。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ…… こんにちは、%CALLNAME%❤️」
        - 寝ぼけた様子の %CHARA% が %YOU% の太ももに伏せ、顔を上げて見上げている。
        - 寝ぼけていても、体のほうはきちんと反応している。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ、%CALLNAME%…… こうされるの、お好きですの？」
        - %YOU% の視線のなか、%CHARA% はゆっくり口を開けてファスナーを咥え、下へ下ろす。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%の熱…… ふふ～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「この匂い、私、好きですわ❤️」
        - 薄い布がめくられ、肌が現れる。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「さあ、%CALLNAME%～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「私たちの時間は、たくさんありますわよ～」
        - acc: 1
          key: sex
          content: （%SEX%を押さえる！）
        - acc: 2
          content: （%SEX%に続けさせる）

all_along_sex:
  - 終わったころ、昼休みはとうに過ぎていた。
  - %CHARA% はそっと体の体液を整え、淡い笑顔を浮かべている。

# out_station
# 良縁以上、パーマー熱恋、非処女、ウマ娘
miss_tram:
  title: 乗り過ごした電車
  lines:
    - 休暇の午後なのに、%CHARA% から一本の電話がかかってきた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、%CALLNAME%、今日はお邪魔して申し訳ございません。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「電車で遊びに出ようと思ったのですが、乗り過ごしてしまったようで……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、助けていただけますか？」
    - ほとんど考えず、すぐ駅へ向かった。
    - 急いで駅に立ったとき、携帯を開き、%CHARA% が送ってきた経路を確認する。
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「どれどれ…… こっちかな？」
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「おっ？ %CALLNAME_64%！ あんたもいたの！」
    - %CHARA% の連絡のせいか、ちょうど %P_NAME% も電車で出かけようとしていたのか、ここで出会った。
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「もしかして、ブライトも%CALLNAME_64%を呼んだの？」
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「そっか……」
    - %YOU% に少し考えたあと、%P_NAME% は軽く頷き、携帯を開いて %CHARA% のいる駅を一緒に探す。
    - ふたりの努力でやっと電車の経路が決まり、迷わず一緒に乗って %CHARA% の位置へ向かう。
    - 窓の外が街から田園へ変わるのを見て、%YOU% も %CHARA% のすごさに感嘆せずにいられない。
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「ブライト%SEX%、すごいよね？」
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「気づいたらあんな遠くまで行っちゃうんだから。ぼんやりしてて超かわいい～」
    - acc: 1
      content: 「いいのか？ 陰口だぞ？」
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「そんなことないよ。私はそう思ってないもん。」
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「ブライト%SEX%は私の自慢の%YOUNGER_SISTER%だよ。超好きだし！」
    - 大げさに手を振りながら後ろへ下がると、しっかりした背もたれにぶつかり、がらんとした車内に乾いた音が響く。
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「あ、いてて……」
    - acc: 1
      content: 「冗談だ、そんなに」
    - ふたりは軽い笑い声のまま、窓の外の景色を楽しむ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、いらっしゃいましたわ～」
    - 駅のベンチに座っていた%CHARA%が立ち上がり、目の前に着いた電車を見る。
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「ブライト！」
    - 扉から飛び降り、一気に%CHARA%へ飛びつく。
    - %P_NAME% に続いて電車を降りた %YOU% は、目の前の光景を見て、口角が自然に少し上がる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALL_64%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「くすぐったいですわ、そんなふうでは～」
    - 温かかった無人の駅が、突然静まる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALL_64%、匂いがしますわよ？」
    - 興奮して乱れていた尻尾が、一瞬ぴんと伸びる。
    - %YOU% から見えない角度で、%CHARA%の顔に淡い笑みが浮かぶ。
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「匂い？ 何の匂い……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALL_64%の体に、たくさん～%CALLNAME%の匂いがしますわよ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もしかして %CALL_64%、あなたも、そういうことを考えていらっしゃいますの？」
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「！」
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「もしかして、ブライト、わざと？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「その場の思いつきですわ～」
    - %YOU% の困惑した目の前で、%P_NAME%は両手を離し、%CHARA% のそばで呆けて自分の頬を掻く。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「せっかくいらしたのですもの、ここで一緒に遊びましょう～」
    - 脇で少し照れている %P_NAME% とは違い、%CHARA% は半ば強引に %YOU% の腕を取る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「少し遅く帰っても、まったく構いませんわよ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そうですわよね？ %CALL_64%～」
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「そ、そうだね、あはは……」
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「じゃあ…… 一緒に遊ぼうか？」
    - 無人の駅前で、ふたりの%UMA%が揃って軽く上着を開き、瑕のない肌を見せる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いたしましょう、%CALLNAME%～」
    - acc: 1
      key: sex
      content: 「ちょ、俺の意見は！？」
    - acc: 2
      content: 「お前たちふたりには勝てないな～」

miss_tram_sex:
  - color: %P_COLOR%
    content:
      - fontWeight: bold
        content: %P_NAME%
      - 「結局こんな時間か…… 怒られるよ。」
  - color: %P_COLOR%
    content:
      - fontWeight: bold
        content: %P_NAME%
      - 「もう、これじゃ明日、腰が痛くなるよ～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALL_64%、そんなこと仰らないで～」
  - 電車に座る姉妹は互いにからかいつつ、ふたりに挟まれた %YOU% をつつく。
  - ただ、もう眠そうな %YOU% は、%THEY%のじゃれ合いに答えない。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%も、お疲れですわね～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「帰りましょう、%CALL_64%～」

# week_end
# 良縁以上、ドーベル熱恋、ともに非処女、ウマ娘
dear_sister:
  title: 私の大切な妹ですわ～
  lines:
    - 【ドーベルともっと仲よくしたいなら、休日にメジロ家へいらっしゃい～】
    - 携帯の、脈絡のないその一文を見て、%YOU% はそれでも真剣に考える。
    - acc: 1
      key: sex
      content: 返信して招待を受ける
      lines:
        - %CHARA% からの連絡を見て、%YOU% は少し訳がわからないが、休日が来ると素直にメジロ荘園の門前へ来た。
        - %YOU% が門前で電話しようとしたとき、%CHARA% が小走りで現れ、軽やかに扉を開ける。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%、お待ちしておりましたわ～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「もちろんドーベルも、ずいぶん前から待っていますのよ～」
        - 扉を開けに来たのはひとりなのに、ふたりとも準備できていると言うのか？
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あら？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%、あなたも、楽しみにしていらっしゃいましたの？」
        - 小さく二歩跳ねて %YOU% のそばへ寄り、両腕で腕を挟み、胸に寄せる。
        - acc: 1
          content: 「あの、%CHARA_FULL%？」
        - acc: 2
          content: 「柔らかいな……」
        - %YOU% の声を聞いて、%CHARA% の両手はさらに力を込め、胸へ挟む。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「つまり、%CALLNAME%も気持ちよい、と～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ、%CALL_59%を待たせすぎてはいけませんわ。行きましょう。」
        - 前庭を抜けてメジロ家へ入り、%YOU% の視界に入るのは広いホールと、床に光る一道の水跡。
        - %YOU% がその水跡の由来を考えているあいだに、%CHARA% に半ば強引に腕を引かれて前へ進む。
        - 神秘を保った空気のなか、ふたりは少し奥まった部屋の外に立つ。
        - 昼なのにカーテンをずっと閉めてあり、部屋のなかに光がほとんどない。
        - よく見ると、部屋のなかで何かが蠕動しているようだ。
        - color: %D_COLOR%
          content:
            - fontWeight: bold
              content: ？？？
            - 「う…… ん……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あら、%CALL_59%、いけませんわよ？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%がせっかくいらしたのですもの、きちんとご挨拶を～」
        - %YOU% を引いていた手を放し、%CHARA% は軽やかに部屋へ入り、電灯を点ける。
        - 淡黄の光が部屋を照らし、中央の大きなベッドも照らす。
        - 真ん中に全裸で横たわるかわいい%UMA%は、ほかならぬ %D_NAME% 本人だった。
        - color: %D_COLOR%
          content:
            - fontWeight: bold
              content: %D_NAME%
            - 「ん…… ん❤️」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%、%CALL_59%も、あなたを歓迎していますわ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「それでは、よいしょ～」
        - %D_NAME% の口を塞いでいた口枷を外し、動きと視界を縛っていたベルトを解く。
        - %D_NAME% の声は少し掠れているが、それでも喜びを見せ、小さな声で %YOU% の名を呼ぶ。
        - color: %D_COLOR%
          content:
            - fontWeight: bold
              content: %D_NAME%
            - 「ご、ごめんなさい。みっともないところを見せて……」
        - color: %D_COLOR%
          content:
            - fontWeight: bold
              content: %D_NAME%
            - 「これ全部、全部ブライトのせいよ。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あら？ %CALL_59%は、まだ素直ではありませんわね～」
        - %YOU% の驚愕の目のなか、%CHARA% は手を伸ばして %D_NAME% の長い脚をそっと開き、すでに溢れた入り口を見せる。
        - そう扱われても、%D_NAME% の瞳に抵抗はなく、むしろとろんとした目だ。
        - 目の前の人へ、続けてほしいと言っているようだ。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「どうぞ、%CALLNAME%～」
        - ふわりと着地の音がし、脇に立つ%CHARA%も衣を解く。
        - 意外なことに、下には布がなく、健康な体が何ひとつ纏わず %YOU% の前に現れる。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALL_59%はもう長く待っていますもの。先に%SEX%を慰めてあげてくださいまし～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「もちろん、私も忘れないでくださいね～」
        - 背後の扉が風で閉じ、%CHARA% の招待が成功したことを告げるようだった。
        - ふたりの名門%UMA%が何ひとつ纏わず、上下に重なって抱き合い、すっかり濡れた下を見せて、期待している。
      # 馬跳び
    - acc: 2
      content: 時間がない。断ろう

# week_start
# 良縁以上、バレンタイン
the_fruit:
  title: ふたりの努力の結晶ですわ～
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「少し、手伝っていただけませんかしら～」
    - %YOU% の仕事が少ない空き時間に、%CHARA% が突然現れた。
    - %CHARA% は自ら %YOU% の手を握り、甘えるように何度か引く。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ひとりでしますと、少し効果が劣りますの～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、少し手伝ってくださいまし～」
    - 耳元を巡る声には魔力があり、%YOU% は今日の行き先を決めた。
    - acc: 1
      content: 「じゃあ、邪魔するよ」
    - 軽く %CHARA% の小さな手を取り、丸い顔に笑みが浮かぶまで待つ。
    - メジロ家の台所は相変わらず清潔で、卓上には工程に使う材料がすでに並んでいる。
    - acc: 1
      content: 「さすが%CHARA%だ……」
    - %CHARA% の大げさな行動力に感嘆し、%YOU% は腕まくりして作り始める準備をする。
    - 材料の脇に置かれた手順を出し、%CHARA% と一緒に一歩ずつ進める。
    - %YOU% が目の前のふにゃりとしたチョコレートを考えているとき、ちょうど%CHARA%がのんびり型を拭いているのが見えた。
    - この速度なら、%CHARA% のチョコレートが見栄えしないのも納得だ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あれ、%CALLNAME%、どうしてずっと私を見ていらっしゃいますの？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「私、どこか間違えましたか？」
    - %CHARA% の困惑した目に合い、%YOU% はなぜか声を出して笑う。
    - 両手でそっと %CHARA% の手の甲を掴み、黙って%SEX%の動きを速め、やっとチョコレートが溶ける時間に間に合わせる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、そういうことでしたの～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「以前ひとりで作っていたとき、なぜかチョコレートが、ぱっ～と固まってしまいましたの。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ありがとうございます、%CALLNAME%～」
    - %CHARA% の小さな笑い声のなか、溶けたチョコレートを満たした容器が卓上に置かれる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「え？ 私が、ですの？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも、私……」
    - %CHARA% の沈んだ顔を見て、%YOU% はすぐチョコレートを%SEX%の手に押しつける。
    - acc: 1
      content: 「大丈夫、心配するな」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「失敗しても…… 大丈夫、ですの？」
    - acc: 1
      content: 「出来がどうであれ、ブライトの作品は喜んで味わう」
    - %CHARA% の呆けた目のなか、微笑む %YOU% はそっと肩を叩く。
    - のんびりした瞳に元気が宿り、真剣に目の前の型と向き合う。
    - acc: 1
      content: 「がんばれ、ブライト。今度こそうまくいく！」
    - ナッツをまぶしたチョコレートが %CHARA% の手からゆっくり型へ入り、形になる……
    - そして予想どおり、動きが遅すぎて、チョコレートは固まった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あら……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「申し訳ございません、%CALLNAME%。手伝いにいらしていただいたのに……」
    - %CHARA% の失敗を惜しむ暇もなく、すぐ作業を続ける。
    - %CHARA% の前で形の少し奇妙なチョコレートを仕上げたとき、%CHARA% は不思議そうに %YOU% を見る。
    - acc: 1
      content: 「とにかく、これでできたよ、ブライト」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「この様子で、本当によろしいのですか？」
    - 問いのなか、%YOU% は手を伸ばして %CHARA% の丸い頭を撫でる。
    - acc: 1
      content: 「ブライトが作ってくれたものなら、どんなでも嫌わないよ」
    - acc: 2
      content: 「ブライトも、ちゃんと頑張っただろ」
    - %YOU% を見る%CHARA%は目を見開き、予想外の喜びを味わっている。
    - やっと落ち着いたあと、軽く一塊のチョコレートを取り上げ、%YOU% の口元へ運ぶ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、あ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これは私たちが一緒に、頑張って作ったチョコレートですわよ～」
    - チョコレートの甘さが唇と歯のあいだを巡り、いまの気持ちと同じく、甘い。
  # 好感+30

# out_start
# 良縁以上、同チームにメジロが少なくとも3人熱恋かつ性経験あり
know_us:
  title: もう、私たちをよくご存知ですわね
  lines:
    - 三年が終わったいま、トレーナーと%UMA%にこれ以上の交わりはないはずだった…… だが %YOU% は明らかに違う。
    - %CHARA% と一緒に道をのんびり歩くと、脇を朝練中の%UMA%が駆け抜けていく。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……%CALLNAME%、お時間はございますか？」
    - 突然の問い。
    - %YOU% の返事を待たず、%CHARA% はもう足を止め、少し困惑した %YOU% の顔を見ている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「よろしければ、メジロ家へいらしていただきたいのです。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これは、大切なことですの。」
    - acc: 1
      content: 「ブライトがそう言うなら、行かないわけにはいかない」
    - 丸い顔に優しい微笑みが浮かび、%YOU% の手のひらを抱く。
    - いつの間にか用意されていた車が、後ろから来る。
    - メジロ家の荘園は %YOU% の記憶どおりだが、いつものように待っている皆の姿はない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日は、少し静かですわね……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「本当は、もう少し賑やかに %CALLNAME% をお迎えしたかったのですけれど。」
    - 金色の瞳に少し沈んだ光が映り、不安そうに %YOU% を見る。
    - acc: 1
      content: 「構わないよ。たまに静かなのも悪くない」
    - acc: 2
      content: 「静かでもいい。ブライトと一緒なら」
    - %YOU% の手が%CHARA%の丸い頭を何度か撫で、沈んでいた耳がやっと立つ。
    - ふたりは静かな庭を緩歩し、いつもの午後茶の円卓のそばで止まる。
    - 阿吽の呼吸で目が合い、揃って茶器を取りに行く。
    - 温かい紅茶のあと、ふたりは向かい合って座るが、どちらも杯を取り上げる気配がない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……うんふん～」
    - acc: 1
      content: （珍しく、ブライトが何も用意せず招いたな）
    - acc: 2
      content: （でも、%SEX%が好きなら、これでもいい）
    - %YOU% は%CHARA%の澄んだ金色の瞳を見て、気づかないうちに笑う。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%は、いつもこうして一緒にいてくださいますわね。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「私のような者が、よくあなたの時間を溶かしてしまうのに…… それでも、ずっと見ていてくださる。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「実は%ELDER_SISTER%%THEY%と一緒にいるときも、私は……」
    - acc: 1
      content: 「いや」
    - %CHARA%の少し沈んだ言葉を遮り、笑顔はそのまま。
    - acc: 1
      content: 「ブライトが好きだから、一度も辛くなかった」
    -
    - acc: 1
      content: 「ブライトが毎回、先に計画していることも、好きだ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「毎回…… え？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、それはどういう……？」
    - acc: 1
      content: 「文字どおりだよ」
    -
    - acc: 1
      content: 「私たちのあいだに他人を巻き込むのは好きじゃないが…… ブライトなら構わない」
    -
    - acc: 1
      content: 「みんな、気にしてないだろ～」
    - 他人を巻き込む、とは、いまここにいるはずのほかの者たちのことだ。
    - 静かだった庭に、新しい声が現れる。
    - %YOU% は背後の慌てた足音を聞き、顔に安堵の笑みが浮かぶ。
    - acc: 1
      content: 「ほら、みんな聞こえてる」
    - %CHARA% が気づく前に、植栽の向こうから馴染みの姿が現れる。
    - 実は皆、%CHARA% が気づかない様子を、ずっと見ていたのだ。

# week_end
# 良縁以上、ライアンが良縁または熱恋（know_us後）、男Tウマ娘
dear_elder_sister:
  title: いちばん好きなお姉さま
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、こんにちは、%CALLNAME%～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お忙しいところ、申し訳ございません……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも、ジムまで付き合っていただけませんかしら？」
    - 突然扉を開けた%CHARA%は、脈絡なく %YOU% にわからないことを言う。
    - ジムなら、パワートレーニングか？
    - acc: 1
      content: 「休みも取れよ。無理するな」
    - %YOU% の婉曲な断りを聞いても、%CHARA%は気づかないように、続けて %YOU% の腕を引く。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーニングではありませんわ。見るだけですの。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「少し見るくらい、構いませんわよね～」
    - 腕を軽く揺らす動きに、%YOU% は折れた。
    - だが、トレーニングしないのに、なぜジムへ？
    - divider: true
    - いつものように、あちこちで%UMA%がトレーニングしている。
    - ただ、トレーニング区画の端に、とても見覚えのある人がいる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、こちらですわよ～」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「え、ブライト？」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「もしかして%CALLNAME_27%も…… わぁ！」
    - ちょうどこちらを見たようで、%R_NAME%の顔に慌てた色が浮かぶ。
    - 両手で胸を隠し、無意識に後ろへ少し下がる。
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「あ！ ……いててて……」
    - 席から落ちた%R_NAME%が悲鳴を上げ、自然に手を伸ばして打った尻を押さえる。
    - 代償として、胸が露出した。
    - 上半身の大きなU字の開きが、胸の部分をすべて見せている。
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「み、見ないで、%CALLNAME_27%！」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「ブライトも！ 先に慣れさせてって言ったでしょ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも%CALL_27%、%CALLNAME%に見ていただかなければ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「効果がありませんわよ～」
    - 小さく跳ねて%R_NAME%の後ろに立ち、彼女を立たせる。
    - %YOU% の眼前に現れたのは、%R_NAME%が普段気づかれない豊かな胸だった。
    - %R_NAME%が真っ先に隠しても、見られてしまった事実は変わらない。
    - 後ろから真っ赤な耳の根を見て、%CHARA%は当然あまり空間を残さない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「よいしょ～」
    - 胸を隠していた両手を突然上げ、もともと隠しきれなかった谷間を出す。
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「わぁあああ！」
    - %R_NAME%の慌てた声が周囲の視線を集める前に、%YOU% は反射で前へ出て彼女の前に立つ。
    - この眺めは、ほかの者に気づかれてはいけない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、見てくださいまし～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あちらは・休・憩・室・ですわよ～」
    - acc: 1
      content: 「とにかく先に入ろう！」
    - 周囲の妙な視線のなか、%YOU% は二頭の%UMA%を連れて休憩室へ入る。
    - 普段は人が多い部屋なのに、今日は意外と誰もいない。
    - （今日はどうしてこんなに静かだ？）
    - %YOU% が理由を考えているとき、%CHARA%が後ろから来てそっと摘む。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ご遠慮…… もう少し、ご覧になりません？」
    - 視線を辿ると、見え隠れする筋肉の線と、あの大きな胸。
    - きれいだ、とてもきれいだ！
    - 体はもう疼いている！
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「……」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - （変だな、体が熱い…… 違う、今トレーニングしたばかりのせいだ！）
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - （こんな服で%CALLNAME_27%に発情してたら、うわぁ……）
    - 真っ赤な小さな顔を見て、欲に頭が上がっていた %YOU% も、トレーナーとしての自覚を少し取り戻す。
    - acc: 1
      key: sex
      content: 「ブライト、先にライアンを手伝ってくれ」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「え～ 私に、なにをさせますの？」
        - %CHARA% に先に %R_NAME% へ服を着せてもらうつもりだったが、%CHARA%の目はずっと %YOU% に固定され、知りつつとぼけている。
        - %YOU% が理由を考えているあいだに、%CHARA%はゆっくり歩み寄る。
        - 身を屈め、%YOU% の前に寄りつく。
        - わざと大きな呼吸のあと、%YOU% の顔はすぐ赤くなる。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ん～ %CALLNAME%の匂い～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「この匂いですと、%CALL_27%より先に助けが要りそうですわね～」
        - acc: 1
          content: 「え？ 何が？」
        - ふにゃりとした小さな顔が %YOU% のズボンに寄り、双眸がゆっくり上を覗く。
        - color: %R_COLOR%
          content:
            - fontWeight: bold
              content: %R_NAME%
            - 「ブライト……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALL_27%…… あなたも、したくなりましたわよね？」
        - 同じく体から熱を放つ%R_NAME%は、いつの間にか%CHARA%の後ろに立っていた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%…… ご抵抗なさらないほうがよろしいですわよ～」
        - 強く力のある両手が、%YOU% をソファへ押し倒す。
    - acc: 2
      content: 「%YOU_CALL_27%、先に落ち着いて、水を飲め」
      lines:
        - color: %R_COLOR%
          content:
            - fontWeight: bold
              content: %R_NAME%
            - 「え？ は、はい！」
        - 呆けていた%R_NAME%が我に返り、%YOU% の目を見た瞬間また逸らす。
        - その一目のおかげで、顔の紅は先ほどより明るく、額から湯気が立っているようにさえ見える。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALL_27%～ お水～」
        - color: %R_COLOR%
          content:
            - fontWeight: bold
              content: %R_NAME%
            - 「ありがとう……」
        - ぼんやりと%CHARA%が渡した紙コップを受け、温かい水を口へ送る。
        - 少し、落ち着いたらしい。
        - %YOU% も%R_NAME%のそばへ行き、わざと後ろ斜めに立って正面を見ない。
        - acc: 1
          content: 「ライアン、鞄は？ タオルを取ってくる」
        - 普通なら、これは普通の気遣いだ。
        - だが今は普通ではない。
        - color: %R_COLOR%
          content:
            - fontWeight: bold
              content: %R_NAME%
            - （今日は…… 今日だけは%CALLNAME_27%に見られちゃダメ！）
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「入り口から四つ目ですわよ～」
        - color: %R_COLOR%
          content:
            - fontWeight: bold
              content: %R_NAME%
            - 「ブライト！ なんでそんなに詳しいの！」
        - %R_NAME%が止める前に、%YOU% はすでに機敏に鞄を中へ持ち込んでいた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「さあ、%CALL_27%、お水をたくさん補いましょう～」
        - %R_NAME% が %YOU% の鞄を開く手を遮ろうとしたちょうどそのとき、%CHARA% が水を差し出した。
        - 間違いなく、ぶつかった。
        - 水がたった一枚のスポーツブラに零れ、ちょうど肝心な部分を濡らす。
        - 同じくタオルを探していた %YOU% も、肝心な部分を見つけた。
        - かなり大胆なスポーツショーツ。
        - 太ももの付け根の位置が、もうスタート地点と揃っている。
        - color: %R_COLOR%
          content:
            - fontWeight: bold
              content: %R_NAME%
            - 「わ、わわ……」
        - acc: 1
          content: 「%YOU_CALL_27%、この丈はどういうつもりか、少し説明してくれ」
        - color: %R_COLOR%
          content:
            - fontWeight: bold
              content: %R_NAME%
            - 「そ、それは……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALL_27%が、わざわざお買いになったのですわ～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「以前、帰宅したときに見ましたの～」
        - 羞恥か、怒りか。
        - 濡れたスポーツブラの下、動きとともに二点が突き出す。
        - （この状況で興奮している。）
        - （何かせずにはいられない。）
        - （%YOU_CALL_27%の詰問？ 後回しだ。）
        - acc: 1
          content: 「ブライト、手伝ってくれ～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「はい～」
        - ふたりは同じ笑顔を浮かべ、%R_NAME%へ魔の手を伸ばす。

dear_elder_sister_sex:
  - 結局最後まで、神秘めかして取っておいたショーツも使わなかった。
  - 三人で休憩室を出るころ、トレーニングしている人はもうほとんどいなかった。
  - その隙に、誰にも見つからないうちに抜け出した。
  - 濡れた下着は鞄にしまい、もちろんそれも %YOU% が自分で入れた。
  - color: %R_COLOR%
    content:
      - fontWeight: bold
        content: %R_NAME%
      - 「はぁ…… 先に少し慣れようと思ってたのに。」
  - color: %R_COLOR%
    content:
      - fontWeight: bold
        content: %R_NAME%
      - 「結局すぐ%CALLNAME_27%に全部見られちゃった……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「でも、%CALLNAME%は、そちらのほうがお好きでしょう？」
  - acc: 1
    content: 「まあな」
  - acc: 2
    content: 「どっちも好きだよ」
  - %R_NAME%の頭上でポンと音がしたようで、顔がまたかなり赤くなる。
  - color: %R_COLOR%
    content:
      - fontWeight: bold
        content: %R_NAME%
      - 「もう…… 二人とも、私をいじめないでよ。」
