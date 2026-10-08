# [EraUma v3.115 (ryuki)](https://gitgud.io/umaera/erauma/-/releases/3.115)

_2026/10/8_

适配 [EraElectron v4.8.4 (x)](https://gitgud.io/umaera/engine/era-electron/-/releases/4.8.4) 与 [ere.app v1.3.4 (lipiah)](https://gitgud.io/umaera/engine/ere-app/-/releases/1.3.4) 及以上版本

## Fixed

* 修复了目白善信育成事件【新年参拜】在第一红宝石未初始化时的错误
* 修复了醒目飞鹰爱慕事件【一叶代表请求！】无法正确触发的错误
* 修复了秘汤疗养无法正确影响【精于训练】等状态的错误
* 修复了育马者杯赛马日系列赛事可以分开陪同出赛的错误
* 修复了玩家马娘远征时可以离开参赛地转场陪同其他角色参赛的错误
* 修复了自主训练和照看训练在仅剩智力属性可训练且体力充足时无法正常训练的错误
* 修复了成田大进育成事件【去一展拳脚吧！】可能导致成田大进好感度变成 NaN 的错误
    * 已变成 NaN 的存档会自动赋予 350 (喜爱) 的好感度
* 其他 i18n 文本替换错误

## Changed

* 优化了比赛结果页面的显示效果
