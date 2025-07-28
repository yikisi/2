end_talk:
  - if: era.get('flag:变态行为') === 0
    lines:
      - if: era.get('cflag:32:育成用变量')?.plan_b === undefined && era.get('love:32') < 75 && era.get('cflag:32:育成次数') === 0
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 爱丽速子
              - 「无趣的豚鼠……不过下次如果还打算做出点什么的话，就来找我吧，看在那双眼睛的份上。」
      - if: era.get('cflag:32:育成用变量')?.plan_b === 0
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 爱丽速子
              - 「诱惑我踏上这条路后，却独自离去吗？极限的彼方终究是独行之路啊。」
      - if: era.get('cflag:32:育成用变量')?.plan_b === 1
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 爱丽速子
              - 「也算给你一个教训吧。下次记得，不要再拘泥于无用之人了……至于%她%的前路，我会连你的份见证下去。」
      - if: era.get('love:32') >= 75
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 爱丽速子
              - 「等到这场实验结束之后，我就去找你。在那之前，就当是我给你的一场长假吧。」
      - if: era.get('cflag:32:育成次数') > 0
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 爱丽速子
              - 「哦呀哦呀，看来这次玩脱了啊，%称呼%……下次，记得小心点哦。」
  - if: era.get('flag:变态行为') > 0
    lines:
      - if: era.get('cflag:32:育成用变量')?.plan_b === undefined && era.get('love:32') < 75 && era.get('cflag:32:育成次数') === 0
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 爱丽速子
              - 「拘泥于下半身吗？可笑的原因……不过下次如果还打算做出点什么的话，就来找我吧，看在那双眼睛的份上。」
      - if: era.get('cflag:32:育成用变量')?.plan_b === 0
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 爱丽速子
              - 「连通往可能性彼方的梦想都无法彻底占满你的视野吗？如果不是蠢人，那么大概就是前所未有的野心家了吧。」
      - if: era.get('cflag:32:育成用变量')?.plan_b === 1
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 爱丽速子
              - 「梦想破灭后的自暴自弃吗？还是，只是用来摆脱前路尽失的马娘的权宜之计？」
      - if: era.get('love:32') >= 75
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 爱丽速子
              - 「抱歉抱歉，%称呼%，看来我们可能稍微玩的有点太过分了……下次再谨慎点吧。」
      - if: era.get('cflag:32:育成次数') > 0
        random: true
        lines:
          - color: %代表色%
            content:
              - fontWeight: bold
                content: 爱丽速子
              - 「哦呀哦呀，看来这次玩脱了啊，%称呼%……下次，记得小心点哦。」