# @file ナリタタイシン - 日常
# @author 卡特曼
# @author Claude (翻訳)
select_after_recruit:
  sync: true
  lines:
    - color: %COLOR%
      content:
        - fontSize: bold
          content: %CHARA%
        - 「担当契約したからって、それで終わりだと思うなよ。」
    - color: %COLOR%
      content:
        - fontSize: bold
          content: %CHARA%
        - 「だって、言ったでしょ。私を勝たせる方法を見つけるって。」
    - color: %COLOR%
      content:
        - fontSize: bold
          content: %CHARA%
        - 「本気か空言か、これからの三年で証明してもらうから。」

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「『理論もレースの一部だ』って先生は言うけど、歴史の授業がレースの役に立つわけ？……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「成績は悪くないけど、目立ってもない。ハヤヒデのやつなんか、テストも試験もいつも上位……チケット？ %SEX%の成績は私より下かもよ。」

office_prepare:
  - if: era.get('cflag:50:干劲') >= 1
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「まだ始まらないの？ 緊張じゃない。今の調子がいいから、逃したくないだけ。」
  - if: era.get('cflag:50:干劲') <= -1
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「もう始まるのか……調子を整える暇はない。できることは、やり切る！」
  - if: era.get('cflag:50:干劲') === 0
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「調子？ まあ普通。決めた走りで行けばいい。」

talk:
  - if: era.get('base:50:体力') < era.get('maxbase:50:体力') / 3
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「大丈夫だって言ってるでしょ。休む必要ない。」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「このくらいで足を止めてたまるか。」
  - if: era.get('base:50:体力') >= era.get('maxbase:50:体力') / 3
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「調子はまあ悪くない。今日の予定は？」
      - random: true
        if: era.get('love:50') >= 100 && era.get('cflag:50:育成回合计时') >= 144
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「最近の感想を聞けって？」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「んー……この三年、本当にいろんなことがあった。」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「勝ちも負けも、私にとっては大事な思い出。」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「これから先はまだわからない。でも、アンタが傍にいると思うと、安心する……」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「ちょっ、その顔はなに！」
          - 一瞬、タイシンの幸せそうな笑みが、照れた睨みに変わった。
      - random: true
        if: era.get('love:50') >= 90 && era.get('status:0:熬夜') > 0
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「しっかりしなさいよ。昨日も徹夜したんでしょ。」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「まったく、体には気をつけろって何度言わせるの。」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「いつも心配させるなよ……」
      - random: true
        if: era.get('love:50') >= 75
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「ほら、これ、持ってきた。」
          - タイシンは %YOU% に缶をひとつ渡した
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「なに？ 甘い飲み物ばっかりだと太るって？」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「飲みたくないなら返せばいいでしょ。」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「そんな目で見ないで。体重はちゃんと管理してるわよ。」
      - random: true
        if: era.get('love:50') >= 50
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「ソシャゲの新イベント、内容多すぎ。徹夜しないとコンプできないかも。」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「ダメだ、そんなことでトレーニングを疎かにできない。」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「でも今回の限定アイテム、逃すと次まで長いし。」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「くっ、決められない……」
      - random: true
        if: era.get('cflag:50:干劲') === 2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「この調子なら、いける！」
      - random: true
        if: era.get('cflag:50:干劲') === 2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「準備はできてる。早く始めよう、%CALLNAME%！」
      - random: true
        if: era.get('cflag:50:干劲') === 1
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「調子？ まあ悪くない。計画どおりでいい。」
      - random: true
        if: era.get('cflag:50:干劲') === 0 && era.get('cflag:50:育成回合计时') < 144
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「今日のトレーニングはなに、いつもどおり？」
      - random: true
        if: era.get('cflag:50:干劲') === -1
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「体は少し疲れてるけど、もう少しなら持つ。」
      - random: true
        if: era.get('cflag:50:干劲') === -2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「くそっ、なんで足がこんなに重い……」
      - random: true
        if: era.get('cflag:50:干劲') === -2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「いや、大丈夫。トレーニングは続ける。」
      - random: true
        if: era.get('flag:当前月') >= 3 && era.get('flag:当前月') <= 5
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「だんだん暖かくなってきたな。昼はどこかで少し仮眠しよう。」
      - random: true
        if: era.get('flag:当前月') >= 3 && era.get('flag:当前月') <= 5
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「春……桜、咲くかな。時間があったら公園を散歩するか。」
      - random: true
        if: era.get('flag:当前月') >= 6 && era.get('flag:当前月') <= 8
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「あー暑い……トレーニング前から汗だ。場の連中もうるさいし、余計に暑くなる。」
      - random: true
        if: era.get('flag:当前月') >= 6 && era.get('flag:当前月') <= 8
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「夏になると、蝉の声があちこちだな。夏らしいけど、たまにうるさいと思う。」
      - random: true
        if: era.get('flag:当前月') >= 9 && era.get('flag:当前月') <= 11
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「道の両側に落ち葉が積もると、秋だって感じる。防寒しないと。」
      - random: true
        if: era.get('flag:当前月') >= 9 && era.get('flag:当前月') <= 11
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「秋の午後は眠くなるな。今日も授業で先生に怒られた……なに？ 昨夜は徹夜してないわよ！」
      - random: true
        if: era.get('flag:当前月') >= 12 || era.get('flag:当前月') <= 2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「冬になっても、家の花屋は忙しい。一年の雑務を片付けて、来年の準備もある。こたつでみかんばっかり剥いてるわけにはいかない。」
      - random: true
        if: era.get('love:50') >= 50 && (era.get('flag:当前月') >= 12 || era.get('flag:当前月') <= 2)
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「雪だな。雪の日は家にいたくなる。豪華な鍋でも煮て……ん？ アンタも食べたい？ 当然、アンタの分もあるわよ、バカ。」

office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「ふぅ……こういう休みの日も必要だな。アンタもたまには休めよ。%CALLNAME%？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「適度な休みはトレーニングを倍にする。アンタもハヤヒデも、似たようなこと言ってた。」

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「一緒にゲーム？ いいよ。負けても拗ねるなよ。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「対戦より一人用のほうが好き。でもアンタとなら、悪くない。ちょっ、なにニヤニヤしてるの！」

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「次のレース、絶対勝つ！」
  - if: era.get('cflag:50:育成回合计时') >= 48 && era.get('cflag:50:育成回合计时') < 144
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「あいつらに、今の私を見せつけてやる！」
  - if: era.get('love:50') >= 50 && era.get('love:50') < 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「なんで頭の中、あのバカのことばっかなのよ！」

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「今日はどこへ連れてくの？ 私に案は期待しないで。よく行く場所は静かなとこばかりで、デート向きじゃない……一緒にいればいい？ ……好きにすれば。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「ねえ、%CALLNAME%？ あそこにいい花屋があるんだけど、付き合って。」

school_rooftop:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「ん……ここで昼寝してるの、もう隠せないか。まあいい、チケットのやつ、どうせそのうち言いふらすし。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「気持ちいい風。もう少し、ここにいたい。」

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「釣りで大事なのは落ち着き。我慢して機会を待つ。中盤で突破口を探すのと同じ。」
      - %CHARA% は手際よく竿を上げ、魚を一匹引き上げた。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「釣ってると、自然と一体になったみたい。周りに気づかれない。この感じ、好き。」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「なに？ 気づかれないのは、魚が掛からないからだって？」

o_r_walking:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「ふぁ、ここの空気、きれい。気分が良くなった」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「あそこのベンチで座ろう。なに、膝枕してほしいって？」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「また蹴り飛ばされたいの。」

o_s_arcade:
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「音ゲー、一緒にやる？ いいけど、簡単な曲にするわよ……」
  - 結果、簡単な曲でも、こうしたゲームに触れたことのない %YOU% は歯が立たなかった。
  - 一方、タイシンの画面には大きな FULL COMBO が出ている。

o_s_drawing:
  - 会計を済ませると、店主が帰りかけた %YOU% を呼び止めた。
  - 店主「少々お待ちを、お客様。」
  - 店主は傍の机から小さな紙片を抜き、渡してきた。
  - 店主「サービスのおくじです。あちらで引けます。ご幸運を。」
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「くじか。最近ゲームのガチャ運が悪いし、アンタが引け、%CALLNAME%。」
  - くじを渡したあと、%YOU% はゆっくり抽選機のハンドルを回した……
  -
  - if: d.dice === 0
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「い、一等！？ 珍しいわね。」
      - 店主「おめでとうございます。運がいいですね。はい、おふたり様の温泉旅行券です。どうぞ。」
      - %YOU% は店主から旅行券を受け取った。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「ふたりの温泉旅行か。誰と行くか、決めた？」
      - 「……」
      - 「タイシンと一緒に引いたんだから、タイシンと行くに決まってる！」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「え？ ちょ、ちょっと待てって！」
      - 「行きたくないのか？」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「そういうわけじゃないけど……もう、アンタってやつは！」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「先に家の人と相談しないと……」
      - 「じゃあ、一緒に行くってことだな？」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「うるさい！」
      - %YOU% は器用に、%CHARA% の蹴りをかわした。
  - if: d.dice === 1
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「ハンバーグ、でかい。ひとりじゃ食べきれない……一緒に食べよ、%CALLNAME%。」
      - %CHARA% と一緒にハンバーグを味わった。
  - if: d.dice === 2
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「大根こんなに……どうする。帰ったらハヤヒデとチケット%THEY%で分けよう。」
  - if: d.dice === 3
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「ニンジン？ ちょうどお腹空いてた。」
  - if: d.dice === 4
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「チッ……ないよりマシか。」
      - そうは言っても、最下等しか引けないのは、不運としか言いようがない。

o_s_ktv:
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「歌う？ あまり得意じゃない。勝者ステージくらいが限界。次はアンタが歌えよ、%CALLNAME%。」

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「『賑やかな、私たちのレース場』。地方のウマ%UMA%が主役の話。悪くなさそう。これにする。」
      - divider: true
        content: ⏰映画終了後⏰
        position: left
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「映画とはいえ、脚色が多すぎない？……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「『宇宙の果てまで』。久しぶりにSFが見たい。これで。」
      - divider: true
        content: ⏰映画終了後⏰
        position: left
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「……なんで半分以上ラブストーリーなの。チッ、タイトルに騙された。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「『最後の白騎士』。暗い時代に、金髪の%UMA%が立ち上がり、手の槍で闇を貫く……ねえ%CALLNAME%、なんで騎士なの。何にも乗ってないのに……」
      - %YOU% は急にまずいと思い、%CHARA% の手を引いて別の映画に変えた。

# 50 恋慕以上
o_s_restaurant:
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「いただきます。」
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「え？ なんでこれしか頼まないの。」
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「ふたりなら、これで十分でしょ。もう暴飲暴食はしない。」
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「前にアンタがわざわざ言ったんだから、ちゃんと気をつけるわよ。」
