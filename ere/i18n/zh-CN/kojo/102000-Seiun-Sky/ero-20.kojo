# @file 青云天空 - 调教
# @author Wolke

# 邀请过夜后回合结束时概率触发
with_you:
  title: 在你身边
  lines:
    - 清晨的阳光透过纱帘柔和的洒向屋里。
    - 耳畔匀净的呼吸起落轻柔，在温暖的晨光里缓缓起伏，将%YOU%朦胧的意识慢慢变得清晰。
    - 昨夜与%YOU%共度春宵的伴侣正慵懒的枕在%YOU%怀里，与%YOU%贴合相拥。
    - 看着毫无防备的青云天空，%YOU%萌生了一个调皮的想法。
    - acc: 1
      key: sex
      content: 亲上去
    - acc: 2
      content: 还是算了
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗯～～早上好啊～～训练员～～」
        - 然后又撒娇地蛄蛹进%YOU%怀里