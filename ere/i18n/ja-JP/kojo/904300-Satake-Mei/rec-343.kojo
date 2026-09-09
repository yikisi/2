# @file 佐岳メイ - 募集
# @author 黑奴队长（临时）
# @author Claude (翻訳)

# @author 黑奴队长
welcome:
  title: 凱旋門賞計画
  lines:
    # A_NAME = 秋川やよい
    - 今週最初の出勤日、%YOU% は学園で %A_NAME% に出会った。%SEX%の傍らには、黄色い帽子を被った%PHY%が一人ついている。
    - if: d.who_am_i > 0
      lines:
        - %YOU% は、その人が以前からの知り合い、%CHARA% だと気づいた。
        - 知ってのとおり、%CHARA% の仕事の中心は、海外遠征の補佐だ。
    - if: d.who_am_i === 0
      content: %YOU% が挨拶に出ると、%A_NAME% は紹介してくれた。この%PHY%の名は %CHARA_ACTUAL%。長く海外遠征の補佐を務めている、と。
    - %A_NAME% は %YOU% を励ました。日本国内で頂点を争うだけでなく、視野を海外の先端レースへ広げ、日本の競走%UMA%を世界へ連れていけ、と。

# @author 黑奴队长
visit:
  title: 凱旋門賞の夢
  lines:
    - 海外レースでの %YOU% の成績に、%CHARA% は胸を熱くしている。
    - もっと直接、%SEX%の力になりたいなら——応接室へ行って、%SEX%と話してみるといい。
