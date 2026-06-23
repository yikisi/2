# @file 㭴本理子 - 育成
# @author 黑奴队长（临时）

# 第一个月没去训练员办公室触发的欢迎事件
welcome:
  title: 欢迎
  lines:
    - 这天，%YOU% 在训练室门口看到一个正在等待的女性。
    - %YOU% 认出她是学园的代理理事长 %CHARA%，赶紧问好。
    - %CHARA% 的声音客气而庄重，她表示新训练员可能事务繁忙，但学园的同僚还是应该相互认识一下的。
    - 她告诉 %YOU% 不远处的训练员办公室是所有训练员公用的，%YOU% 也可以使用，当然继续在训练室办公也是可以的。
    - content:
        - 如果 %YOU% 有其他问题需要商量，可以去训练员办公室找她。在
        - isBlank: 1
        - color: '#ffad7e'
          content: 理事长
          fontWeight: bold
        - isBlank: 1
        - 出差而需要她代班的时候，可以找训练员办公室的
        - isBlank: 1
        - color: '#6e7ea2'
          content: 桐生院训练员
          fontWeight: bold
        - isBlank: 1
        - 或者去理事长办公室找她。
    - 告知这些信息后，%CHARA% 离去了。%YOU% 隐隐感觉到这位代理理事长心中的不满。

task_fail:
  title: 失败
  lines:
    - %B_NAME% 和 %L_NAME% 的育成结束了。
    - %CHARA% 并没有大声斥责 %YOU%。
    - 在安抚好两位担当后，她与 %YOU% 静静地穿行在学园内。
    - if: era.get('cflag:202:育成次数') === 1
      lines:
        - 在接近训练员办公室时，她才淡淡地开口，问 %YOU% 是否已经竭尽全力。
        - 不等 %YOU% 作出反应，她径直往办公室而去。
        - %YOU% 站在原地，回想起学园内关于%B_UMA%第二次机会的传闻。
    - if: era.get('cflag:202:育成次数') > 1
      lines:
        - 在接近训练员办公室时，她才淡淡地开口，问 %YOU% 还有没有再来一次的勇气。