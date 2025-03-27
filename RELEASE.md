# [EraUma v1.331 (kuuga)](https://gitgud.io/umaera/erauma/-/releases/1.331)
_incoming_

适配 [EraElectron v4.0.1 (x)](https://gitgud.io/umaera/engine/era-electron/-/releases/4.0.1) 与 [ere.app v1.0.9 (lipiah)](https://gitgud.io/umaera/engine/ere-app/-/releases/1.0.9) 及以上版本

## Added

* 新增好感护盾机制
  * 当好感提升后超出 600 上限时，超出部分会为该角色对玩家的好感增加护盾
  * 在好感降低时，好感护盾会先于好感被消耗
  * 好感护盾的数值提升遵循以下规则：
    * 提升一点好感护盾所需的溢出好感数量随好感护盾值的增加而线性增加
      * 不足部分仍然会提高一定的好感护盾
    * 当爱慕值高于 50 时，溢出好感提升好感护盾的数值随爱慕值的增加线性增加

## Changed

* 现在角色扮演模式下将禁用【黑暗交易】选项
  * 已被惩戒的角色扮演存档不受影响

## Fixed
