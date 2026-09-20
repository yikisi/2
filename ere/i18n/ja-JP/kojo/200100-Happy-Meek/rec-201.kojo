# @file ハッピーミーク - 募集
# @author 黒奴隊長（仮）
# @author Claude (翻訳)
rec:
  # CFLAGNAME:49 = 育成回数
  # K_NAME = 桐生院葵
  - if: era.get('cflag:201:49') === 0
    content: %K_NAME% の紹介で、%YOU% と %CHARA% は知り合い、これからの大切な三年を、相棒として歩み始める。
  - if: era.get('cflag:201:49') > 0
    content: %YOU% と %CHARA% は、また肩を並べた。これからの三年、一つひとつの挑戦を受け止めていく。
  - （%CHARA% を率い、G1をできるだけ多く勝とう……）
