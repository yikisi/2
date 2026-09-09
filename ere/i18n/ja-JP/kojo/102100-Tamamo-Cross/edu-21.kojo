# @file タマモクロス - 育成
# @author 雞雞
begin_race:
  title: 火の穴に売られた！
  lines:
    - タマモクロスの緊張はメイクデビューの勝利のあと、大きな弛緩に変わった。空気の抜けた風船のように、控室のソファへぐったり沈む。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「手、まだ震えてる……これがレースなんか……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「しかも、わし、勝ったんか？」
    -
    - acc: 1
      content: 「お疲れ。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なあ、これからずっとこんなん続けるんか？」
    - タマモクロスはソファに寝そべり、まだ微かに震える手が、ひどく目立つ。
    -
    - acc: 1
      content: 「ああ。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「火の穴に売られたみたいや……いや。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「自分で自分を売ったんやな……」
    -
    - %SEX%の疲れた目は%YOU%から離れ、頭上の偽天井を見て嘲るように笑う。
    - 一年。%SEX%にはまだ一年いる。
    - %SEX%の体は一般の%UMA%より痩せている。しっかり鍛えずに上のクラスへ無理に挑めば、理想の結果が出ないどころか、怪我を残す可能性が高い。
    - それに、%SEX%がこの競技に触れてからまだ日が浅く、幼い頃からウマ娘を目指してきた者たちより、土台が薄い……
    - それは%YOU%が%SEX%と方針を立てたときから挙げていた、二つの致命的な弱点だ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「谷底から跳ね返す道は、そう甘ないで……」

misfortune:
  title: 青天の霹靂
  lines:
    #ジュニア級 8月第1週 トレーナー室
    - トレーニング室の扉が乱暴に開き、轟音に、書類を処理していた%YOU%はびくりと肩を跳ねさせる。
    - 振り返ると、息を切らしたタマモクロスだ。%SEX%の蒼い顔と目には狼狽が満ち、何かあったのは明らかだ……
    -
    - acc: 1
      content: 「タマ？何があった？」
    -
    - %YOU%は席から立ち上がり、今にも倒れそうな%UMA%を支えようとする。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わし……おかんが入院した……」
    -
    - %SEX%は吃りながら、母が家で突然倒れ、病院へ運ばれた経緯を%YOU%に話す。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ちびどもに通報させたけど……でも……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わし、わし怖い……！なんでそんなとき、そばにおらへんねん！」
    - acc: 1
      content: 「……分かった。トレーニングは一旦置こう。お母さんのお見舞いに行く。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ごめん……トレーナー。手間かけさせた……」
    -
    - タマモクロスはいつも家族を何より大切にしている。家族のことだけが、普段は明るく活発なこの子を、こんなにうなだれた顔にさせる。
    -
    - acc: 1
      content: 「そんなことない。家族はいつでも一番だ。……それに、タマも家族のためにここに来て鍛えてるんだろ？」
    -
    - このときに家族を放っておけば、本末転倒だ。
    -
    - %SEX%の固く結んだ眉がいくらか緩み、眼前の人へ浅く、無理をした微笑を見せる。
    - そのあと%YOU%は急いでタクシーを呼び、焦る気持ちのままタマモの母がいる病院へ向かった。そこで%YOU%は初めて、タマモクロスの両親に会う。
    - まず目に入るのは、病室の奥で沈んでいるちびどもの姿だ。
    - タマモの父の顔も張りつめ、病室の空気は息が詰まるほど重い。
    - 母本人はベッドで穏やかに横たわり、まだ昏睡から覚めていない。
    - 父はベッド脇の椅子から立ち上がり、%SEX%のトレーナーを迎える。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おとん、こっちがわしのトレーナー……」
    - 中年男の髪はいくらか白く、眉間には深い皺が詰まっている。
    # CFLAGNAME:0 = 性別
    - if: era.get('cflag:21:0') === 1
      content:
        - fontWeight: bold
          content: タマモ父
        - 「はじめまして。息子が日頃お世話になっております。」
    - if: era.get('cflag:21:0') !== 1
      content:
        - fontWeight: bold
          content: タマモ父
        - 「はじめまして。娘が日頃お世話になっております。」
    - acc: 1
      content: 「奥様のご無事を願っています。」
    -
    - %YOU%は患者を妨げない声量で言う。中年男は小さく頷き、心配で眉間の皺はさらに深くなる。
    - 幸い、タマモの母の病状は過労だけで、数日休めば退院できる。
    - 一人と一頭の%UMA%は数時間看病したあと、車でトレセン学園へ戻る。
    -
    - acc: 1
      content: 「今日はもう遅い。寮で休め。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - acc: 1
      content: 「どうした？」
    - if: era.get('relation:21:0') > 225
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「わし……眠れへん。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「さっき車の中でも寝よう思たけど……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「おかんのこと考えると……」
        - acc: 1
          key: select
          content: 「じゃあ……今夜は俺が付き合う。」（恋慕+2、疲労1段階）
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「そんな、誤解される言い方せんといて……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「まあ、添い寝か……あかんこともないか……」
            - if: era.get('love:21') >= 50
              content:
                - 二人はベッドで寄り添って眠る。相手から発する温かい気配が、肌に触れたい本能を満たした。
        - acc: 2
          content: 「睡眠薬がある……少し分けよう。」（好感+10）
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「うわ——ロリコンの本領発揮——」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「なんで睡眠薬なん？メラトニンちゃうの？」
            - acc: 1
              content: 「トレーナーも楽じゃないんだよ。」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……」
    - if: era.get('relation:21:0') <= 225
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「なんでもない……」
        - タマモクロスを寮まで送ったあと、%YOU%たちは別れを告げた。
#（獲得状態【雷撃】：電流が衰える。※帝王の【脚部不安】に準拠）

cloudy1:
  title: 陰雲密布・その一
  lines:
    #ジュニア級 9月 第1週 トレーナー室
    - タマモの母が入院してから、すでに一ヶ月が過ぎた。
    - 深刻な健康問題ではなかったが、慎重のため、退院後も当分の静養を強制されている。
    - 家の経済的支柱は、タマモの父だけになった。
    - 家を傾けて自分をトレセンの最良の教育へ送り出した……このままクラシック級で結果を出せなければ、家族に顔向けできない。
    - いずれにせよ、自分の担当%UMA%が厳しい状況にいるなら、タマモクロスを正道へ戻す手を考えねば！
    - acc: 1
      content: 「正攻法で、トレーニング量を増やす！」（3ターンのあいだトレーニング効果+20%、体力消費+5%）
      lines:
        - content: 「スパルタ並みの量で、タマモクロスの思考を麻痺させてみる……」
    - acc: 2
      content: 「タマを元気づけて、気持ちから手を打つ！」（3ターンのあいだやる気が継続上昇、体力消費-10%）
      lines:
        - content: 「生活はレースより大きい。タマにもっと甘えさせよう……」

cloudy2:
  title: 陰雲密布・その二
  lines:
    #ジュニア級 10月 第1週 トレーナー室
    - %YOU%は一ヶ月の鍛錬のまとめとして、タマモクロスにダートの模擬レースを組んだ。経験も積ませる。
    - 発走委員が空へ号砲を撃つとゲートが開き、%UMA%たちが次々と飛び出す。
    - だが、発走直前まで余裕に見えたタマモクロスは、珍しく出遅れのミスを犯した。
    - 偶然か？%YOU%は目を細めてそう思う。
    - タマモクロスは%UMA%の群れの後ろに食い下がるが、位置が取れず、焦って何度も首を振る。
    - acc: 1
      content: 「焦るな……ゆっくり動け……」
    - 模擬レースが最後のカーブに入ったとき、異変が起きた。
    - 前方の%UMA%が理由もなく突然滑って倒れ、後ろの一部が避けきれず、次々と巻き込まれていく。
    - 砂塵の中、目を見開いたタマも、その人だかりに呑まれそうになる……
    - acc: 1
      key: select
      content: 「タマ——！！」（疲労2段階）
      lines:
        - 人の意識は、体の反応より0.5秒遅いと言われる。
        - 前方の事故に気づかなかったタマモクロスは、それでも極めて歪んだ姿勢で直撃は避けたが、勢いでバランスを失い、ダートの上を穴に落ちたボウリングの球のように転がり続けて止まった。
        - 同時に%YOU%は、事故が起きた瞬間に柵を越え、タマモクロスの方へ全力で走る。
        - %YOU%は焦って、栗毛になったタマモクロスを確かめる。幸い、擦り傷以外に怪我は残っていなかった。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「いててて……ごめんやで、トレーナー……」
    # FLAGNAME:15 = 現在名声
    - if: era.get('flag:15') >= 1000
      acc: 2
      content: 「跳べ——！！」（疲労1段階）
      lines:
        - ……
        - タマモクロスは勢いを借りて走路から跳び上がり、地面を転がる数頭のウマ娘を真っ直ぐ越えた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「舐めるなよ！五点着地や——！！」
        - 両脚を揃え、着地の瞬間に両足、脛、膝、尻、腰の五点で衝撃を分散する。
        - 同時に%YOU%は、事故が起きた瞬間に柵を越え、タマモクロスの方へ全力で走る。
        - acc: 1
          content: 「タマ——！！」
        - %YOU%は焦って、栗毛になったタマモクロスを確かめる。全身埃だらけだが、%SEX%はほとんど無傷だった。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ああ——触るな触るな！みんな見てるやろ！」
    - その日の模擬レースは、結局大混乱のまま打ち切られた。

cloudy3:
  title: 陰雲密布・その三
  lines:
    #ジュニア級 10月 第2週 トレーナー室
    - カチリという音とともに、%YOU%はタマモクロスがトレーナー室の扉を開けるのを見る。
    - 先週の事故は%SEX%にさまざまな表皮傷を残した。表皮傷だからこそ、ちまきのように包帯で包まれる必要はなかった。
    - だが、%UMA%の恐ろしい速度での衝突による痣と打撲は、決して軽く見られない。%YOU%も強度を下げ、体作りに集中せざるを得なかった。
    -
    - acc: 1
      content: 「うん、回復は良さそうだな。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「よう、トレーナー。」
    -
    - タマモクロスは笑って頷き、今日のトレーニングの準備はできていると言う。
    - 二人は賑やかなトレーニング走路へ来る。ここで走っている、あるいは準備している生徒たちに、先週の大規模落馬の余波はほとんど感じられない。
    - 悲劇は自分の身に起きないし、起きない、と思っているからだ。
    -
    - acc: 1
      content: 「今日は一週間ぶりの本格的な周回だ。無理するな。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おう！」
    -
    - タマモクロスは脇で準備運動とストレッチを始める。%YOU%はトレーナーとして、%SEX%の歩様と姿勢を丁寧に観察する。
    - 熱い視線に気づいたタマモクロスの口角が、微笑みを作る。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最近、ますます露骨やな、ロリコン。」
    -
    - acc: 1
      key: select
      content: 「ち、違う！正規の手順だ、手順！」（好感+10）
    - acc: 2
      content: 「肉が減るわけじゃない。」（恋慕+5）
    -
    - %SEX%はははと笑い、走路に立つ。%YOU%の号令とともに、今日のトレーニングが始まった。

classical_new_year:
  title: 新年の抱負
  lines:
    #1月 第1週 トレーナー室内 新年（クラシック級）
    #イベント名：新年の抱負
    - 新年が来て、年末年始とともに、タマモクロスもクラシック級へ上がった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、明けましておめでとうや。」
    - トレーナー室へ来た%SEX%は笑って%YOU%に挨拶する。
    - acc: 1
      content: 「あけましておめでとう、タマ。」
    - タマモクロスはどっかりとソファに座り、その日のトレーニング計画を繰る。
    - acc: 1
      content: 「せっかくの新年だ。少し休まないか。帰省とか。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「せやな。けど《白い稲妻》になるまで、休んどられへん……」
    - %SEX%は顔を上げ、%YOU%へ熱い視線を投げる。自信のない表情の下に、夢を叶える志が埋まっている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今のわしには……故郷に持って帰れるもんが、まだない。」
    - acc: 1
      content: 「そうか。」
    - %YOU%は無理に仕事へ戻る。だが部屋の空気が死んだようにならないよう、つい口を滑らせる。
    - acc: 1
      content: 「ところで、タマは今年、レース以外にやりたいことはあるか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん……強いて言うなら……」
    - %SEX%は丸い青い目を転がし、考える。
    - acc: 1
      key: select
      content: 「突っ込み力を鍛えるのはどうだ？」（スタミナ+10）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「関西人は突っ込みせなあかんのか——！あ、引っかかった！」
        - 二人は大笑いし、重いはずの部屋に楽しい空気が降りる。
        - だが%YOU%は気づかない。%SEX%はそのあと本当に学園中の%UMA%を探し、毎日突っ込みに行った。
    - acc: 2
      content: 「たこ焼きパーティーを開こう！」（体力+10%）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ほな、この『タマ特製・タコなし焼き』食べや！」
        - たこ焼きにタコはないが、ソースと出汁は絶品だ。
        - タマは将来、いい妻になるだろう。
    - acc: 3
      content: 「東京の風情を学ぼう！」（スキルPt+20）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ほな東京観光やな！」
        - 多くの観光地の中で、タマモクロスは美術館にとりわけ熱を入れた。
        - 意外なことに、ヴァンサン・マゴーからウジェーヌ・マクロワまで、諳んじている……

seems:
  title: いける、気がする？
  lines:
    #3月 第1週 競馬場控室内
    - 焦らず、まず下級戦で実力を探る——それが%YOU%がタマモクロスに定めた短期方針だ。
    - そして%SEX%は、託された仕事を見事に果たした。
    - acc: 1
      content: 「よくやったな、タマ。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おおきに、おおきに。」
    -
    - %SEX%は%YOU%の向かいに正座し、激しい運動のあと、タオルで顔の汗を拭く。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これで、わしも……ちょっとしたものやな。」
    -
    - acc: 1
      content: 「タマは将来、必ず輝く。俺は信じてる。」
    -
    - タマモクロスは目を閉じる。%SEX%は勝負服を着て、G1という最高の舞台に立つ自分を想像しようとする。
    - %SEX%は懸命に幻想するが、出走%UMA%も走路の輪郭も、ぼやけて見えない。
    - というより、自分はどのレースに出られるのか。
    - ジャパンカップ？天皇賞？有馬記念？
    - 場にいる二人とも分かっている。タマモクロスはまだ自分を疑っている。そんなウマ娘は、上へは行けない。
    -
    - acc: 1
      content: 「タマ、OPを勝てるウマ娘は、もうエリートと呼ばれるんだぞ。」
    -
    - URAでは、毎年芝に身を投じる数千の新人ウマ娘のうち、最終的にOPのウマ娘になれるのはおよそ一割だ。
    -
    - acc: 1
      content: 「お前と同じ夢を抱いたウマ娘を踏みつけながら自分を卑下する。それ、少し傲慢だと思わないか？」
    -
    - タマモクロスの胸が沈む。事実は抗えないと分かっている。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そうか。いける、気がするな……」
    - 最後には、頭の中の自分さえ消えそうになる。
    - だから、本心ではない嘘を言うしかなかった。


#初回育成：
#（喪失状態：【雷撃】：電流が衰える。※帝王の【脚部不安】に準拠）
#（獲得状態：【先導】：雷光、成り始め。いまはOP〜G3級のレースにしか出走できない。）
#
#周回育成：
#（喪失状態：【雷撃】：電流が衰える。※帝王の【脚部不安】に準拠）
#（獲得状態：【閃光】：白い稲妻。すべてのレースに出走できる。）

lightning_heart1:
  title: 稲妻の心・その一
  lines:
    #（隠し）4月 第3週 皐月賞前 トレーナー室
    #トリガー：周回育成で【閃光】を得て、皐月賞出走を選択
    - 特別でもない一日、%YOU%は袋を提げてトレーナー室へ入り、先に来てソファに寝ていたタマモクロスへ手を振る。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん？なんや？」
    -
    - タマモクロスは一目で%YOU%の手の袋を見て、紺碧の双眸で、にこにこする%YOU%の顔を疑わしげに値踏みする。
    -
    - acc: 1
      content: 「タマへの贈り物だ。」
    -
    - %YOU%は袋をタマモクロスに渡し、%SEX%に開けて確かめてもらう。
    - 袋の大きさはほどほどで、中身は扁平で柔らかい……
    - タマモクロスは豊富な家事経験で、手で触っただけで中身が分かった。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「服か？……エロいやつ？」
    -
    - タマモクロスの鋭い目が、ひどく刺さる！
    -
    - acc: 1
      key: select
      content: 「そういうのは次に買う。」（恋慕+2）
      lines:
        - タマモクロスの目は鋭さから心配へ変わり、左右の眉が上下して坂を作る。
        - %SEX%はまず口を結び、何かを決めたように、また%YOU%へ小さな手を伸ばす。
        - 警戒にも懇願にも見える指先で、%SEX%は%YOU%の袖を摘まむ。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「病気やったら病院行けや？な？」
        - acc: 1
          content: 「病気じゃない——こんなんでトレーナーができるか？」
    - acc: 2
      content: 「違う——！」（好感+10）
      lines:
        - ぱしり。焦った%YOU%は手刀でタマモクロスの胸を軽く叩く。
        - acc: 1
          content: 「違う——誰がエロい服だと思うんだ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ああ——？ロリコンがよく言うわ。」
        - acc: 1
          content: 「お前がロリコンだ。お前の一家全員ロリコンだ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「それおかしいやろ。ロリのわしがロリをどうコンすんねん？」
        - タマモクロスは薄笑いして両腕を組み、指には服の入った袋を引っかけ、ぶらぶら揺らしている。
        - acc: 1
          content: 「お前こそロリコンだ。なんでイナリワンとばかりつるんでる？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「それはクラスメイトの誼や。勘定に入れん。」
        - acc: 1
          content: 「いつもあいつの胸を見てる。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「無いもんを補うんや——ひっかけんな！」
        - 今度は%YOU%が手刀を食らう。錯覚か、胸への力は少し荒い。（プレイヤー体力-10%）
    - 茶番のあと、%YOU%とタマモクロスは袋を開けた……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「え？」
    - 中に入っていたのは——

lightning_heart2:
  title: 稲妻の心・その二
  lines:
    #（隠し）4月 第3週 （G1）皐月賞 1着 中山 芝 2000m（中距離）右・内
    #イベント名：稲妻の心・その二
    - 全身の戦慄はまだ収まらず、極度に緊張した体はまだ固い。
    - 顔の汗を拭くことすら、隣の%YOU%に頼らねばならない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はぁ——ふぁ——はぁ——」
    - acc: 1
      content: 「……大丈夫か？」
    - %YOU%は濡れたタオルで、雨のようなタマモクロスの汗をそっと拭く。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はぁ——ふぁ——はぁ——」
    - いまタマモクロスはやっと息を整え、信じられない顔で%YOU%に問う。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんで……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんで……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんでわし、皐月賞出てんねんあああああ——！！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「体が出来上がるまでG1は走らんでええ言うてなかったか？！」
    - acc: 1
      content: 「それは……」
    - 確かに、G1禁止令を出したのは%YOU%だ。
    - だが禁を公に破ったのも%YOU%だ。
    - そしてタマモクロスは全力を尽くし、クラシック初冠——皐月賞を取った。
    - タマモクロスは頬を摘まみ、夢でないことを確かめる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「けど、勝ってもうた……クラシックG1。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やから……なんでや？」
    - acc: 1
      content: 「タマが、もう器になったからだよ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「器……に？」
    - 当初のタマモクロスは、風で倒れそうな、骨と皮の姿だった。
    - だが%YOU%との特訓の中で、G1の日程に耐えられる体へ、少しずつ育った。
    - その進歩の速さには、顎が外れる。
    - acc: 1
      content: 「そういうことだ。タマの天賦は、俺の想像以上だった。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そうか……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おおきに……わしも自信出てきたわ！」
    - タマモクロスは歯を見せて笑い、拳で胸の稲妻の紋を叩く。
    - 青いベストに、上質の帆布の白いジーンズ、上半身には青と白を主題にした外套。
    - それがタマモクロスが下絵を描き、%YOU%が監修し、URAが職人を雇って縫った勝負服だ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ほなこの天賦の白い稲妻、無駄にせんとくわ！」
    - 勝負服を着た初戦で一冠。二人とも奮い立つ。
    - このまま三冠王も、もはや夢ではない！

uma_girl1:
  title: 優駿%TEEN%・その一
  lines:
    #（隠し）クラシック級 5月 第4週 日本ダービー レース前 控室内
    #イベント名：優駿少女・その一
    #トリガー：周回育成で【閃光】を得て、日本ダービー出走を選択
    - 皐月賞のあと、%YOU%はタマモクロスにクラシック三冠の第二冠——日本ダービーを組んだ。
    - 皐月賞のときより、タマモクロスは一段上へ来ている。だが……
    - ウマ娘の世界では広くこう言われる。「最も速い%UMA%が皐月賞を取り、最も幸運な%UMA%がダービーを取り、最も強い%UMA%が菊花賞を取る。」
    - 《ダービーの呪い》と呼ばれる伝説は、理由もなく不安を誘う——ダービー%UMA%には、そのあと続かず、凡庸に沈む者が少なくない。
    - 百家の言を採れば、「三冠挑戦で消耗しすぎた」という説がいちばん信じられる。
    # CFLAGNAME:57 = 拡張変数
    - if: era.get('cflag:301:57').who_am_i > 0
      lines:
        - たとえば……ハーベストタイム——
        - 東京優駿のあと怪我で引退を強いられた、伝説のウマ娘……
    - だが、タマモクロスは違う。
    - この子なら、三冠にすら手が届く。
    - そう思うと、%YOU%がタマモクロスを見る目は、さらに熱を帯びる。
    - acc: 1
      content: 「どうだ？二度目なら慣れただろ？」（恋慕+2、やる気+1）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「わざと下ネタ言っとるやろ？」
        - タマモクロスは呆れたように%YOU%の前腕を叩き、%YOU%の後ろについてパドックへ向かう。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%UMA%経の評論家は、わしを『遅れてきた大物』言うてるらしい。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ほな、この小さな巨人の凄さ、見せたるわ！」
    - acc: 2
      content: 「どうだ？緊張してるか？」（好感+10、体力気力+20%）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「一生に一度のダービーや。緊張せんやつおるか……」
        - タマモクロスは深く息を吸い、%YOU%の後ろについてパドックへ向かう。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%UMA%経の評論家は、わしを『関西の秘密兵器』言うてるらしい。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ほなら……東京、征服しよか！」

uma_girl2:
  title: 優駿少女・その二
  lines:
    #（隠し）クラシック級 5月 第4週 （G1）日本ダービー 1着 東京 芝 2400m（中距離）左・内
    #イベント名：優駿少女・その二
    - 東京は、関西から来たウマ娘に征服された。
    - 誇り高い小柄な体が、比類ない走りで場を熱くする。
    - 芝を稲妻のように掠めたタマモクロスが、また一冠を斬った。
    - あとは京都へ戻り、菊花賞を取って、王座に就くだけだ。
    - acc: 1
      content: 「よくやった、タマ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ああ！」
    - 二人は拳を合わせ、%YOU%は微かに痺れる指節から、タマモクロスの昂ぶりを感じる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「家族に言うとくわ——次は菊花賞か？」
    - %YOU%は頷く。
    - いまさら、すでに双冠のタマモクロスに菊花賞へ挑まない理由はない。
    - 菊花賞をもう一つ取れば、%SEX%はあの強い%UMA%たちと肩を並べ、殿堂入りだ！

classical_summer:
  title: 夏季合宿（クラシック級）
  lines:
    #8月 第1週 海辺 夏季合宿
    #イベント名：夏季合宿
    - 地球温暖化が人為か自然の変遷かなど、卵が焼けるほど熱いアスファルトを踏むとき、室内の冷房の涼しさが恋しくなる。
    - いま寸衣でも、烈日の下では向かいの海風すら温度を帯びている。
    - %YOU%は目を細め、日傘の下に縮こまり、この歳で受けるべきでない高温に耐える——誰も受けるべきではないが。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「暑死ぬ——なんでこんな暑いねん——」
    - %YOU%の隣で体育座りをしているのがタマモクロスだ。滝のような銀の長髪の下から、滝のような汗が溢れている。
    - %UMA%の体温はもともと常人より高い。高温の下では当然、より辛い。
    - %YOU%は気を利かせて、氷で冷やした濡れタオルをタマモクロスの首にかける。冷気に刺激されたタマモクロスは、思わず嬌声を上げる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あっ❤️！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「何しとんねん！」
    - %YOU%はははと笑い、腕で隣からの桃色パンチを軽く受け止める。
    - acc: 1
      content: 「汗だくだからだよ——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いきなり冷たいもん貼るな言うてんねん！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「まったく……」
    - タマモクロスは仕方なく首の濡れタオルを巻き上げて顔を拭き、すぐに眉を寄せる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ちょっと、このタオル、匂い変や……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「先に使ったんか？」
    - acc: 1
      content: 「あ……」
    - %YOU%は思い出す。渡す前、無意識に顔を拭き、冷たい水気まで欲張って吸っていた。
    - だが%YOU%が%SEX%を見ると、予想した嫌悪はない。両頬を赤らめ、顔を半分タオルに埋めたタマモクロスだけがいた。

become_legend1:
  title: 伝説になる・その一
  lines:
    #（隠し）クラシック級 10月 第4週 （G1）菊花賞 レース前 控室内
    #イベント名：伝説になる・その一
    #トリガー：周回育成で【閃光】を得て、菊花賞出走を選択
    - クラシック三冠の最後の一冠、菊花賞。
    - 皇室の紋で名づけられたこのレースは、天皇賞とその地位を競えるかもしれない。
    - もちろん二人にとってより重要なのは、タマモクロスが菊花賞を取れば、クラシック三冠をすべて手にすることだ。
    - 誰にも見向きされなかった痩せた%UMA%から『遅れてきた大物』『関西の秘密兵器』と呼ばれるまで、その辛苦を知っているのはお前たちだけだ。
    - acc: 1
      content: 「タマ、余計なことはいい……全力で勝ってこい！」
    - %YOU%はタマモクロスの背を軽く叩き、%SEX%の目には烈火が燃えている——この菊花賞は、必ず取る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おう！！」
    - %YOU%は胸をざわつかせながら、両拳を高く上げて選手通路を出ていくタマモクロスを見送る。観客の声が迎える。
    - 三冠王は、今日生まれるのか？

become_legend2:
  title: 伝説になる・その二
  lines:
    #（隠し）クラシック級 10月 第4週 （G1）菊花賞 1着 京都 芝 3000ｍ(長距離) 右・外
    #イベント名：伝説になる・その二
    - 中山から京都へ。千の難を破り、クラシック三冠を制した最強のウマ娘が生まれた。
    - この歴史の瞬間を見た%YOU%は信じられず、新王へ歓声と喝采を連ねるしかない。
    - だが勝者の応対は退屈で煩わしい。レース後、%YOU%とタマモクロスはまた取材の記者の群れに呑まれた。
    - いくつものインタビューを受け、ようやく脱身した二人は選手控室へ戻り、今日の出来事を消化する。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「クラシック三冠……」
    - acc: 1
      content: 「クラシック三冠……」
    - 唇の震えがまだ収まらないタマモクロスは、そのまま%YOU%に飛びつき、きつく抱きしめる。
    - タマモクロスは力を抑えているが、%UMA%の力は%YOU%にわずかな息苦しさを残す。（プレイヤー体力-10%）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「クラシック三冠！」
    - acc: 1
      content: 「クラシック三冠！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「クラシック三冠！！！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「見くびられて、退学寸前の哀れな虫やったわしが……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「クラシック三冠王に……なったんか？！」
    - %SEX%は興奮して叫び、壁の向こうに耳がないか心配になる。
    - だが今は、%YOU%もタマモクロスの意に沿い、感情を吐き出させるしかない。
    - これは%SEX%が受けていいものだ。
    - acc: 1
      content: 「ああ。今すぐ引退しても、殿堂入りは保証される。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「へへ……殿堂入りウマ娘タマモクロス、またの名を白い稲妻……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「けどまだ足りん。次はあんたを殿堂入りトレーナーにしたる。」
    - タマモクロスはやっと手を放し、鼻を撫でて意気高く宣言する。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「三冠一つじゃ足りへんなら、わしがあんたのために、もういくつか取る！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「優勝トロフィーで、わしらの履歴書埋めたるわ！」
    - そうだ。タマモクロスはこうでなくては。
    - 稲妻は一度形になると、轟く雷とともに目標へ走り、電力が尽きて大地に消えるまで……
    - %YOU%の責任は、この電光を正しい目標へ導くことだ。
    - acc: 1
      content: 「殿堂入りウマ娘と殿堂入りトレーナー……よし！あとはお前に任せた！」
    - クラシック三冠はまだ始まりにすぎない。二人の旅は、句点を打つにはまだ遠い……

spring_thunder:
  title: 一声の春雷
  lines:
    #シニア級 1月 第1週 トレーナー室内 一声の春雷
    - タマモクロスは重賞を何度も綺麗に取った。一年前には想像もできなかった。いまの彼女は、さらに上の舞台へ挑む力を完全に備えている！
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……わしの体は……」
    - 一年の成果をまとめるとき、%SEX%は深く息を吸い、興奮して言う。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もうシニア級の……G1に挑めるやろ！」
    - acc: 1
      content: 「ああ、十分だ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ほな、天皇賞（春）も射程やな？」
    - タマモクロスが投げた名詞は、春のシニア%UMA%三冠の第二冠だ。歴史が長く、名前からしてその重要性は分かる。
    - acc: 1
      content: 「お父上の願いだと言ってたな。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わし……天皇賞（春）に出たい。親孝行として……ええか？」
    - %SEX%は緊張して言う。%YOU%に否決されるのを恐れているようだ。
    - acc: 1
      content: 「もちろんいい！」
    - だが天皇賞（春）は楽ではない。八大競走のうち最長で、過酷な3200メートルだ。
    - 幸いタマモクロスは体が小さくても驚くスタミナを持ち、耐えられる。しかし……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そんな長い距離、まだ挑んだことないで……」
    - acc: 1
      content: 「距離適性は問題ない。足りないのは経験だ。」
    - 長距離はウマ娘の体力配分を特に試す。トレーナーは方法を頭に詰め込めるが、臨場でどう実現するかは、ウマ娘自身の判断力と運に頼るしかない。
    - acc: 1
      content: 「その前に、まずG2の阪神大賞典に出よう。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん。わし……勝つ。」
    - 出会った当初に比べ、タマモクロスの目はますます熱い。
    - %YOU%は思わず、かすかな笑みを浮かべた。

#獲得状態：【閃光】：白い稲妻。すべてのレースに出走できる。

hans_dai:
  title: 前哨戦
  lines:
    #シニア級 3月 4週 （G2）阪神大賞典 3着以内 阪神 芝 3000m（長距離）右・内
    #イベント名：前哨戦
    #効果：（全能力+3 スキルPt+45）
    - 阪神大賞典。3000メートルの緑の走路。
    - 天皇賞（春）の前哨戦として本番を温め、勝者には優先出走権が与えられる。
    - いま、観客の歓声を浴びているのは、%YOU%の愛しく誇らしい担当ウマ娘——タマモクロスだ。
    - 控室に戻ると、顔に笑みを絶やさず、湯気の立つ芦毛の少女が耳を揺らし、自ら%YOU%へ寄ってくる。
    - acc: 1
      content: 「おめでとう、タマ！天皇賞にまた一歩近づいた！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おお！次は本番やな！」
    - 言い終えるとタマモクロスは静かになり、%SEX%は桃色の拳を握り、期待の目を%YOU%へ投げる。
    - そうだ。口だけの賞では足りない。
    - acc: 1
      key: select
      content: 頭を撫でるご褒美（好感+10）
      lines:
        - %YOU%は笑って掌をタマモクロスの頭頂に置き、軽く揉む。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「へへ……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「これからも一緒に頑張ろな。」
    - acc: 2
      content: そのまま抱きしめる（恋慕+2）
      lines:
        - タマモクロスの予想に反し、%YOU%は両腕を開いて自分を抱きしめた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「へへ……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「これからも一緒に頑張ろな。」

threaten:
  title: 牙を見せる連中
  lines:
    #シニア級 4月 2週 トレーナー室内
    #イベント名：牙を見せる連中
    - 今日、タマモクロスはトレーナー室へ来ると、わざと謎めかして%YOU%に近づいた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なあ、トレーナー……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「銀行口座の賞金、前倒しで下ろせへんか？」
    - その話か。
    - 諺に「金の話は関係を壊す」と言う。
    - まだ生徒なのに賞金で一夜にして裕福になったタマモクロスにとって、これは誤魔化せる小事ではない。
    - acc: 1
      content: 「できなくはないが、なぜだ？」
    - 聞いた瞬間、%YOU%はほぼ見当がついていた——親族か友人からの圧力だ。
    - ウマ娘競技は極めて盛んで、賞金額も大きい。メイクデビューの勝利だけでも、少なくないウマコインが手に入る。
    - ましてタマモクロスのように重賞を連勝するOP級のウマ娘なら。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「昔世話になったおばはんが、息子を留学させたいけど金が足りん言うて……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それから小学のときの仲良かった友達が、ゲーム機買いたい言うて——」
    - 幸い、未成年の生徒の収入を守るため、トレセンは銀行に、成年まで賞金を勝手に引き出せない貯蓄口座を強制で設ける。
    - どうしても必要なときは、%UMA%本人とトレーナー双方の同意があって初めて前借りできる。
    - いまタマモクロスは、その相談に%YOU%のところへ来たのだ。
    - だが親族の留学とゲーム機購入が「どうしても」に入らないのは、火を見るより明らかだ。
    - acc: 1
      content: 「だめだ。許可しない。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっぱりな——」
    - タマモクロス自身も、これらの頼みの馬鹿さは分かっているらしい。なら、なぜ運試しのつもりで聞きに来たのか。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うちが有名になってから、親戚やら友達やらがしょっちゅう訪ねてくるんや。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「訪ねてきては、金の話を持ち出す……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「断るほど、もっと来る。」
    - あまりに古典的な、一人が道を得て、周りが鶏犬まで昇天しようとする話だ。
    - いまタマモクロスはOPで頭角を現し、身価が跳ね上がった。
    - あの人たちの気持ちが分からないわけではない。だがタマモクロスは自分の愛馬だ。
    - acc: 1
      content: 「聞け。今は昔と違う。」
    - 「いまのタマモクロスはOPのウマ娘だ。人中の鳳凰だ。」
    - 「昔の人情で考えていたら、必ず大損する。」
    - %YOU%は目の前のブラウザを開き、検索エンジンに、若くして成功した選手の名前をいくつか入れる。
    - 世のスポーツ選手のおよそ八割は、引退から三年で破産している。
    - その選手たちの多くは、タマモクロスと同じく貧しい街から来ている。
    - 天から巨額を得たとき、彼らは資産の扱いを知らず、親族友人の道徳的拘束にも弱い。
    - 金が尽きると、傍に群れていた食客は自動で消える。
    - 人情の冷暖は、これに極まる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「その道理は分かっとるわ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「けど毎日電話かかってくるんが、ほんまにしんどい……」
    - タマモクロスは両耳をうなだれ、弱く言う。
    - acc: 1
      content: 「番号を変えろ。いちばん近い人間にだけ教えればいい。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「番、番号まで変えるんか？」
    - %YOU%は頷く。六根清浄とまではいかなくても、少なくとも耳は静かにできる。
    - 知らせずに番号を変えるのは人情に欠ける。だが同時に、タマモクロスに「寄生虫を駆除する」という概念を強める機会でもある。
    - こういうときは、心を鬼にしなければならない。
    - 相手は親情や友情を旗に、自分の愛馬へ手を出す「敵」なのだから。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……分かった。」
    - タマモクロスの顔には明らかに難色がある。確かに易しくはない。
    - トレーナーとして、難題を全部タマモクロスに投げてはいけない……
    - acc: 1
      content: 「よし。トレーニングが終わったら、一緒に考えよう。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お、トレーナーも一緒か？！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おおきに。ひとりやったら、ほんまに見当つかんで！」
    - %YOU%も一緒に困難に向かうと聞いて、タマモクロスの耳がびんと立ち、顔にもいつもの笑みが戻る。
    - その日のトレーニングのあと、二人は通信会社の実店舗へ向かった。
    - if: era.get('love:21') >= 75
      content: 私服のタマモクロスは事情を知らない店員に%YOU%の恋人だと勘違いされ、この小さな挿話に軽快な和音が乗った。
    - if: era.get('love:21') < 75 && era.get('cflag:21:0') === 1
      content: 私服のタマモクロスは事情を知らない店員に%YOU%の弟だと勘違いされ、この小さな挿話に軽快な和音が乗った。
    - if: era.get('love:21') < 75 && era.get('cflag:21:0') !== 1
      content: 私服のタマモクロスは事情を知らない店員に%YOU%の妹だと勘違いされ、この小さな挿話に軽快な和音が乗った。

tenn_spr:
  title: 春三冠の鬼門
  lines:
    #シニア級 5月 第1週 （G1）天皇賞（春） 1着 京都 芝 3200m（長距離）右・外
    #イベント名：春三冠の鬼門
    - やった。
    - かつては見くびられていたちびが、やった。
    - 春三冠の鬼門、3200メートルの天皇賞（春）は、ついにタマモクロスの勝利で幕を閉じた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やった……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わし、勝った！」
    - タマモクロスが腕を振り上げると、雷のような拍手と歓声が熱と烈風になってタマモクロスへ押し寄せる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おとん！見えたか！」
    - if: era.get('cflag:21:性别') === 1
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あんたの息子が勝ったあああ！」
    - if: era.get('cflag:21:性别') !== 1
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あんたの娘が勝ったあああ！」
    - タマモクロスは顔に突きつけられた中継カメラへ跳ねるように叫び、担当記者も少し気まずい。
    - acc: 1
      content: 「はいはい、どいてくれ……」
    - %YOU%は急いで押し引きして%SEX%を引き離し、びしょ濡れのタオルで今日の英雄の頭を冷ます。
    - acc: 1
      content: 「タマ……よくやった！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お、おう！」
    - 興奮で頬を赤らめたタマモクロスは、%YOU%の助けでいくらか落ち着いた。
    - 二人は儀礼的なインタビューのあと控室へ戻り、つかの間の閑を味わう。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「けど、ほんまに勝った。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「信じられへん……けどあんたのおかげで、そこまで不思議でもない気がする。」
    - acc: 1
      content: 「過賞だ。走ったのは結局お前だ——」
    - その言葉が終わる前に、タマモクロスは人差し指を伸ばし、%YOU%の唇を押さえた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あんたがなかったら、わしは出走資格すら……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いや、絶対になかった。」
    - タマモクロスと%YOU%の出会いは、まったくの偶然だ。
    - だがその偶然が二人を合わせ、ここまで共に走らせた。
    - ついには天皇賞（春）まで手中に収めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーの恩に、どう返したらええんか分からん。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「けど、白い稲妻——」
    - %SEX%は見たことのない真剣な顔で、矢のような視線を%YOU%の心へ直に打ち込む。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あんたが作った白い稲妻は、ちゃんと走り続ける！」
    - acc: 1
      content: 「そうか……じゃあ次の目標は宝塚記念でいいか？」
    - 大阪杯、天皇賞（春）、宝塚記念。この三つの大きなG1を合わせて《春の三冠》と呼ぶ。
    - 《クラシック三冠》《秋の三冠》に比べ、《春の三冠》にはまだ破られていない記録がある——春の三冠を独占した%UMA%は、かつて一人もいない！
    - if: d.sank_hai === 1
      content:
        - いま、大阪杯を取り天皇賞（春）を越えたタマモクロスにとって、鯉が竜門を跳んで記録の第一人者になるまで、あと一歩だ……
    - if: d.sank_hai === 0
      content:
        - 大阪杯は取れなかったが、天皇賞（春）を越えたタマモクロスにとって、宝塚へ挑むのは当然の次の一歩だ……
    - タマモクロスはまず呆け、%YOU%の自分への信頼に驚いたようで、すぐ歯を見せてにやりとする。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「宝塚でも有馬でも、%UMA%よこしてくれや！」

white_lightning1:
  title: 白い稲妻・その一
  lines:
    #シニア級 6月 第4週 宝塚記念前 控室
    #イベント：白い稲妻・その一
    - 勝負服を着け、控室のベンチに座るタマモクロスが、最後の作戦準備をしている。
    - 百戦を経たタマモクロスは、もはや当初の未熟で自信のない少女ではない。だが大勝負の前では、緊張を隠しきれない。
    - しかも……今回の宝塚記念には、%SEX%が見たことのない強敵——秋津帝王がいる。
    - 一発勝負の競馬に、絶対などない。
    - だが秋津帝王……このウマ娘は十四戦連続で三着以内を外していない。
    - マイルの帝王は帝王の名に恥じず、ここ二年のマイル戦を制し、より長い中距離でも好走が多い。
    - 2200メートルの宝塚記念走路は、%SEX%にとって難事ではないだろう。
    - 加えて今回の宝塚記念は%SEX%の最後の舞いだ。生涯に完璧な句点を打つ執念は、秋津帝王に実力以上を発揮させるはずだ。
    - だが、あの浪速の白い稲妻なら——いや、%YOU%が信頼し、慈しむタマモクロスなら……
    - ここで、あの手を使う。%YOU%はそう思う。
    - acc: 1
      content: 「タマ、メディアはお前を見限ってるぞ。」
    - %YOU%はわざと、メディア評の載ったスマホをタマモクロスの眼前で揺らす。
    - 『タマモクロス、食うや食わず！秋津帝王必勝疑いなし？！』といった文句が%SEX%の目に入り、%SEX%は不機嫌に眉を寄せる。
    #（本レースは強制で二番人気に固定。）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……ふん。」
    - acc: 1
      content: 「どうだ？腹が立つか？」
    - タマモクロスはぺっと床に唾を吐き、胸を叩き、自信に満ちた爽やかな笑みを口角に作る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「秋津帝王はもう負けとる！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あんたが後ろにおるわしは、無敵や！」
    - 一目で、%YOU%は%SEX%の表情から読む。タマモクロスの調子は絶好調だ。
    - 戦うほど勇み、強い相手ほど強い。谷底から跳ね返す執念だけが、今日のタマモクロスを作った。
    - では、あとは正々堂々と勝負するだけだ！

white_lightning2:
  title: 白い稲妻・その二
  lines:
    #シニア級 6月 第4週 （G1）宝塚記念 1着 阪神 芝 2200m（中距離） 右・内
    #イベント：白い稲妻・その二
    - 実況「タマモクロス、外から追い上げる！」
    - 実況「タマモクロスと秋津帝王！」
    - 実況「タマモクロス、秋津帝王を完全に交わした！」
    - 実況「これが天皇賞（春）ウマ娘の強さだ！！！」
    - 勝った。
    - 全力を出したあのマイルの帝王すら、心から服した。
    - 互いに認め合う二頭のウマ娘が握手し抱き合うのを見て、%YOU%は思わず目が熱くなる。
    - たった一年で、ウマ娘タマモクロスは何度奇跡を起こしたのか。
    - 観客「おおおおおおおおおお！！！」
    - 観客「タマ・モ！」「タマ・モ！」「タマ・モ！」
    - 山のような歓声がスタンドから起きる。だが今の%YOU%は祝宴に加わる気はなく、ただ前へ衝き、自分を無比に誇らしくさせる——可愛くて格好よく、小気味よくて意地悪なタマモクロスを、しっかりと抱きしめたかった。

senior_summer:
  title: 夏季合宿（シニア級）
  lines:
    #8月 第1週 海辺 夏季合宿（シニア級）
    #効果：（ランダム3種能力+5）
    - 風も日も穏やかな浜に、一人と一頭の%UMA%が潰れている。
    - 青春の熱を放ち、海で水遊びする他の%UMA%たちに比べ、%YOU%とタマモクロスは陸に上がった死んだ魚のように、日傘の下で力なく横たわっている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あー、暑い。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんで合宿は海なん——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「雪山とかあかんのか？」
    - acc: 1
      content: 「学園の決まりだ……真夏に雪山合宿もおかしいだろ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんでや？夏こそ涼みに行くやろ？」
    - %SEX%はサングラスを上げ、仕方なさそうに%YOU%を横目で見る。
    - acc: 1
      content: 「……冬に海で泳ぐか？」
    - 真冬に水着で海へ来て、冷たい風に骨まで刺される自分を想像し、タマモクロスは即座に何度も首を振る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ほなええわ。けどほんま暑いな。冷たいもん飲みたい……」
    - タマモクロスは目で示唆する。%YOU%が仕える番だ、と。
    - %YOU%は大げさに溜息をつく。どうせ自分も何か飲みたい。
    - acc: 1
      content: 「分かった、行ってくる……」
    - %YOU%は肘で体を起こし、近くの海の家へ向かう。
    - 天気予報は今日38度だと言っていた——嘘に決まっている……
    - 炎天下を歩き、たまに顔を撫でる柔らかい海風に慰めを求め、%YOU%はようやく海の家の冷凍庫から無糖コーラを二缶すくい上げる。
    - 理屈では、これが虚構のロマンチックな恋物語なら、戻る途中でタマモクロスがならず者に絡まれているか、いなくなっているはずだ。
    - %YOU%はそう思い、無意識に足を速める。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おお、おかえり。」
    - 安心したことに、タマモクロスの身に不安なことは起きていなかった。
    - %SEX%は笑い、砂除け布の上から%YOU%へ手を振る。
    - acc: 1
      content: 「ああ、ただいま。」
    - タマモクロスはへへと笑い、冷たいコーラを受け取る。二酸化炭素が缶口からプシュッと溢れ、中の液体は欲張りな小さな口にごくごく呑まれる。
    - そのあと二人は、日傘の下でとぎれとぎれに雑談して時間を潰し、自由時間の終わりまでそうしていた。

tenn_sho:
  title: 天皇賞（秋）前
  lines:
    #シニア級 10月 第5週 天皇賞（秋）前 控室
    - 秋は冬と夏のあいだにあり、蒸す熱もなく、骨を刺す寒さもない。
    - だが少なくとも、一つだけ常に灼熱の場所がある。
    - それが%YOU%のいる府中競馬場だ。
    - 十万人を超える観客が肩をすり合わせ、当日の掉尾——タマモクロスが出走する天皇賞（秋）を待っている。
    - 控室で、%YOU%とタマモクロスは最後の鼓舞をしている。
    - acc: 1
      content: 「タマ、記録を破るか？」
    - 近頃絶好調のタマモクロスは、すでに天皇賞（春）を取っている。天皇賞（秋）まで収めれば……
    - %SEX%は同年の春秋天皇賞を制した第一人者になる。
    - %YOU%たち二人だけが歴史の転換点に立っているのではない。
    - 会場の観客のほとんどが、歴史の瞬間をこの目で見るために切符を買ったのだ。
    - acc: 1
      content: 「答えがないな。観客を失望させるつもりか？」
    - 睨みつけられても%YOU%は慌てず、かえって少し狡い微笑を見せる。
    - このレースは重要だ。タマモクロスもそれは分かっている。
    - ウマ娘の本能は走ること、勝つこと——この舞台に来た以上、勝たねばならない！
    - 小さな胸が上下し、深い呼吸で平静を得ようとする。
    - つい%SEX%は息を吐き、猛然と叫ぶ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天皇賞ごとき、稲妻の速さで碾き潰したるわ！」
    - やはり、いまになっても想像しにくい。天下に名を轟かせたこのウマ娘が、かつてはトレセンで壁にぶつかり続けた落ちこぼれだったとは……

tenn_sho_win:
  title: 天皇賞（秋）勝利
  lines:
    #シニア級 10月 第5週 （G1）天皇賞（秋） 1着 東京 芝 2000m（中距離） 左
    #効果：（全能力+3 スキルPt+45）
    - 満天の歓声の中、タマモクロスは両腕を開き、熱の爆撃を欲しいままに味わう。
    - いま、史上初めて同年の春秋天皇賞を制したウマ娘が生まれた。
    - レース後、二人はいつものようにメディアの取材を受ける。
    - 演壇の後ろで、口々に話す記者群に向き合うのは、いつまでも慣れない。
    - この記者たちは先を争い、礼儀などない。
    - 取材対象の金の口をこじ開けなければ、肉を削ぎ取られたも同然、という顔だ。
    - 職業の性質からすれば、それは虚辞ではないだろう……
    - この喧騒の中では、まず乙名史記者に顔を立てよう。
    - acc: 1
      content: 「ああ——一人ずつ……乙名史記者からどうぞ。」（乙名史記者+10）
    - color: %COLOR_303%
      content:
        - fontWeight: bold
          content: %ETSUKO%
        - 「ありがとうございます、トレーナーさん。」
    - color: %COLOR_303%
      content:
        - fontWeight: bold
          content: %ETSUKO%
        - 「お二人は、どのようにして春秋天皇賞の同時制覇を成し遂げたのですか？」
    - acc: 1
      content: 「チームの協力と、皆さんの支援のおかげです。」
    - acc: 2
      content: 「タマモクロスが、素晴らしいウマ娘だからです。」
    - %YOU%が言い終える前に、タマモクロスはマイクを奪い取り、掌で%YOU%を軽く押しやる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うわっ——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「全部この人の手柄や。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%YOURSEX%の謙遜の決まり文句、聞くんやない。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%YOU%はわしを発掘してくれた大恩人や。%YOURSEX%がおらへんかったら、今日のわしはおらへん。」
    - %YOU%は口を開いて抗弁しようとするが、肩をすくめてやめる。
    - 稲妻は一度出たら戻れない。%SEX%に任せるしかない。
    - タマモクロスは目尻で%YOU%の仕方ない顔を盗み見て、さらに得意になる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「強いて言うなら、わしは%YOURSEX%を信じられる家族と思ってる。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一家やねんから、誰の手柄かなんて気にせんでええ！ほほほ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「次の方〜」
    - %SEX%は気を利かせてこの問答を終え、マイクを%YOU%に返す。
    - この自信に満ち、陽の当たる可愛いタマモクロスが、自分を家族だと思っている。
    - なら、%SEX%の信頼を裏切れない。
    - そう思いながら、%YOU%は上の空で記者の連射する質問に応じ続ける。
    - 案の定、話題はタマモクロスの脱線で、春秋連覇から芸能ゴシップへ急速に変わっていった……

arim_kin:
  title: 有馬記念
  lines:
    #シニア級 12月 第4週 （G1）有馬記念 1着 中山 芝 2500m（長距離） 右・内
    #効果：（全能力+3 スキルPt+45）
    - 年末いちばんの盛事、有馬記念も、%YOU%の愛馬タマモクロスが頭を取った。
    - 長い三年を、%YOU%とタマモクロスは一つの勝利で句点にした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「危なかったな。あの子に負けそうやった……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「有馬記念、さすがオールスター級の大レースや……」
    - タマモクロスは控室のソファに潰れ、両腕を開いて%YOU%を誘うようにしている。
    - %YOU%はそのまま%SEX%の隣に座り、%SEX%が懐へ飛び込むのを許す。
    - 明るい光の下、タマモクロスの頬の赤みはあまりにはっきりしていて、%YOU%が頭を揉んでいるあいだにも、かすかに見える。
    - acc: 1
      content: 「お疲れ、タマ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「んむ、もっと言え。」
    - acc: 1
      content: 「タマはすごいよ。昔とは別人だ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「同感や。ちびどもとおかんもそう言うてた。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「せやけど……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっぱりあんたのおかげやな、トレーナー。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おおきに。」
    - acc: 1
      key: sex
      content: 「全部タマが頑張った成果だ。俺なんて、せいぜい半分だ。」（恋慕+2、好感+10）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「は！そんなん聞きたかったんや！」
        - 胸の生地越しに、%YOU%はタマモクロスがより激しく擦り、さらに深く潜りたい意志を感じる。
        - 惜しいことに、人は生まれながら、骨肉でできたこの体——脳という寄生虫に操られる檻——に閉じ込められている。
        - %YOU%は苦笑し、座り方を変えて、タマモクロスがより登りやすいようにする。
        - こうして、骨を刺す大雨の中で出会った二人の物語は、暖かく陽の当たる一日に一段落した。
    - if: era.get('love:21') >= 50
      acc: 2
      content: 「じゃあ、タマはどう返してくれる？」（性交開始）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「臭ロリコン、やっぱり性は直らんか……」
        - 胸の生地越しに、%YOU%はタマモクロスがより激しく擦り、さらに深く潜りたい意志を感じる。
        - 惜しいことに、人は生まれながら、骨肉でできたこの体——脳という寄生虫に操られる檻——に閉じ込められている。
        - %YOU%は苦笑し、座り方を変えて、タマモクロスがより登りやすいようにする。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「これから、楽はさせへんで……」
        - %YOU%はタマモクロスが自分の顔を見る目を見る。いくらか戯れ、いくらか情欲もある。
        - %SEX%は舌で唇を舐め、帯を解き始める……
        - こうして、骨を刺す大雨の中で出会った二人の物語は、暖かく、ぬるぬるした一日に一段落した。

#お出かけイベント
whats_adult:
  title: 大人って、いったい何や？
  lines:
    #トレーナー室内
    #イベント名：大人って、いったい何や？
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「聞くけどな、大人って何や？」
    - ある日、タマモクロスが突然尋ねる。
    - 脈絡のない問いを受けた%YOU%も、脈絡なく、タマモクロスが何を脈絡なく聞いているのか問い返すしかない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わしや、わし……イナリのやつとシャチのショー見に行ったとき……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「受付に……」
    - %YOU%は血走った目で歯を食いしばるタマモクロスを見て、そっと回転椅子を少し後ろへずらす。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「受付に言われた……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『お子様券二枚で五ウマコインですよ〜』！！！」
    - acc: 1
      content: 「声を少し下げて……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わし、子ども扱いされたんやぞ、子ども、分かるか？！」
    - if: era.get('cflag:21:0') === 1
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええわ。どうせわし、背が低いんや……」
    - if: era.get('cflag:21:0') !== 1
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええわ。どうせわし、背が低いんや……」
    - タマモクロスの五味雑陳は瞬く間に変わり、暴怒から気抜けまでの表情は見事で、%YOU%は金を払ってこの変顔劇を見る客がいてもおかしくないと思う。
    - acc: 1
      content: 「だからタマは、大人に見られる方法を知りたい……のか？」
    - タマモクロスは頷き、力なくソファに潰れる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、なんか方法あるか？」
    - そうだ。いったい何が、一人前の大人なのか。
    - acc: 1
      content: 「自律できることだ！」（スピード+5 パワー+10）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「自律、つまり一人で生きられることか。一理あるな。」
        - そのあとタマモクロスは、早寝早起き、適度な運動、均衡の取れた食事の一日を過ごした……
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「これ、普段と一緒やんけ！！！」
    - acc: 2
      content: 「貯金があることだ！」（スキルPt+20）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「貯金……銅臭い答えやな。」
        - そのあとタマモクロスは、節約と質素な食事の一日を過ごした……
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「これ、普段と一緒やんけ！！！」
    - if: era.get('cflag:21:0') !== 1
      acc: 3
      content: 「色気？」（恋慕+5）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「また臭ロリコンが出てきた……」
        - タマモクロスはソファから立ち上がり、首を傾げて%YOU%へ歩き、どかりと%YOU%の太ももに座る。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……こんな感じか？」
        - %YOU%は少女の後頸の汗の香りを嗅ぎ、思わず両腕で抱きしめた……

gymnastics:
  title: 背が伸びる体操
  lines:
    #トレーナー室内
    #イベント名：背が伸びる体操
    - ある日差しのいい午後、タマモクロスはソファでだらだらスマホを滑らせている。
    - このスマホは、タマが社会や級友から取り残されないよう、%YOU%が痛んで買ったものだ。（ウマコイン-100）
    - 失えば得るものもある。いまタマモクロスが贈り物を受け取ったときの嬉しそうな顔を思い出すと、%YOU%の胸は温かくなる。（やる気+1）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おお、これ『背が伸びる体操』？！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一日30秒で背が伸びる？！」
    - タマモクロスは興奮して、怪しいUMATokの短い動画を%YOU%に見せる。
    - acc: 1
      content: 「あまり現実的じゃない気がする……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「何も試さんわけにはいかへんやろ！」
    - そこで%SEX%は動画の動きを真似して、懸命に伸び始める。
    - 貧しい体でも、伸びる体操を通して、衝動を誘う美しい姿が自然に現れる。
    - acc: 1
      content: 「姿勢が違う。」
      lines:
        - %YOU%は自ら近づき、両手でタマモクロスの肢を導き、わざとらしく胸や太腿のあいだに触れる。
        - タマモクロスの両頬は薄く赤らむが、それ以上の「指導」を拒まない。
        - そのあと%SEX%は、毎日トレーニング室に着くと、%YOU%の前で伸展体操をするようになった。

my_clothe:
  title: わしに似合う服
  lines:
    #トレーナー室内
    #イベント名：わしに似合う服
    - ある午後も、日向ぼっこにいい天気だった。
    - トレーナー室へ来たタマモクロスは、頭を%YOU%の椅子の背に預ける。%SEX%の息が耳に微かに当たり、%YOU%はすぐ顔が熱くなる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、トレーナー。ちょっと聞くで。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あんた、ロリコンやろ？」
    - acc: 1
      key: select1
      content: 「それは中傷だ。」（好感+10）
    - acc: 2
      content: 「Then?」（恋慕+2）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どっちでもええわ……ロリの着こなし、あんたの好み聞きたいて。」
    - acc: 1
      content: 「なんでだ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「実はな……」
    - タマモクロスがクラスで聞いたのは——
    - color: %COLOR_24%
      content:
        - fontWeight: bold
          content: ？？？
        - 「マヤなら知ってるよ。大人は落ち着いた格好が好きなんだから！」
    - color: %COLOR_3%
      content:
        - fontWeight: bold
          content: ？？？
        - 「確かにね。会長みたいな余裕のある感じ、羨ましい……」
    - color: %COLOR_302%
      content:
        - fontWeight: bold
          content: ？？？
        - 「誠！然！気持ちは分かるわ。でも……」
    - color: %COLOR_302%
      content:
        - fontWeight: bold
          content: ？？？
        - 「武！器！服は自分の性格と体型に合わせて、自分の強みを活かすのよ！」
    - そんな会話は、青春の匂いそのものだ。
    - ただ、タマの巧みな物真似から、%YOU%は聞き覚えのある口調を拾った。
    - acc: 1
      content: 「理事長、何してるんですか——！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「要するに、あんたは大人派か、幼い派か？」
    - タマモクロスは狡い顔で上唇を軽く舐め、じりじり近づき、指先で%YOU%の胸を軽く突いて答えを待つ。
    - ああ、詰められた。
    - acc: 1
      key: select2
      content: 「大人派だ。」（スピード+20）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「なるほど……ほなカフェとかドリームジャーニーみたいな着こなしが好きなんやな？」
        - そうは言っても、タマが全身黒で、笑いとも言えない危険な顔をするのは想像しにくい。
        - タマモクロスも%YOU%の困った気持ちを察したのか、掌で%YOU%の胸を軽く叩く。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「冗談や。あんたは見た目で人を選ぶタイプやないって分かっとる。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……やなかったら、あんなに必死で『身売り契約』説得せんやろ？」
        - タマモクロスは薄笑いするが、%YOU%はそのあと、彼女がスマホで「格好いい」「大人」「洋装」といった語を検索し始めたのを、たまたま目にした。
    #以降G1ではデフォルトで雷神タマ勝負服
    - acc: 2
      content: 「幼い派……」（パワー＆根性+10）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「なるほど……ほな帝王とかマヤノみたいな着こなしが好きなんやな？」
        - そうは言っても、タマの普段も十分可愛い。
        - タマモクロスも%YOU%の困った気持ちを察したのか、掌で%YOU%の胸を軽く叩く。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「つまり、わしの普段の格好で十分やってことやな。」
        - あまりに正しい結論に、%YOU%は頷くしかない。
        - 満足した答えを得た%SEX%は薄笑いし、颯爽と自分の席へ戻った。
  #以降G1ではデフォルトでセーラー服タマ勝負服

