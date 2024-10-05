# EraUma

EraUma将保持内源，ERE引擎将保持开源；请各位开发者以internal或private方式fork本项目，不要以public方式fork本项目，以避免不必要的麻烦！

[Release Notes](RELEASE.md)

[Changelogs](CHANGELOG.md)

## Road Map

EraUma将在2024/10/24发布第一个正式版本v1.0（Kuuga），感谢各位玩家一直以来的支持与鼓励

## Tutorial

EraUma发布采取分包制，即游戏本体包+游戏资源包拆分打包方式，使用时需要解压到同一个文件夹，才能通过[ERE引擎](https://gitgud.io/umaera/era-electron/-/releases/permalink/latest)启动

从ERE引擎顶部下拉菜单中【打开游戏文件夹】启动时，请确认打开的文件夹至少有以下结构：

* erauma文件夹
    * csv文件夹
        * Chara文件夹
        * _config.json
        * _fixed.json
        * 其他各种以csv为后缀名的文件
    * ere文件夹
        * data文件夹
        * event文件夹
        * page文件夹
        * system文件夹
        * utils文件夹
        * era-electron.js
        * main.js
    * （可选）res文件夹

如果文件夹不是以上结构，则无法顺利在ere引擎中打开运行

## Notes

* 决胜服后缀的含义：
  * 01：首套决胜服
  * 02：第二套决胜服
  * 10：新春和服
  * 13：女仆服/执事服
  * 16：游戏Cosplay
  * 20：舞蹈服、礼服
  * 23：夏季私服
  * 26：婚纱
  * 30：泳装
  * 40：万圣节整蛊装
  * 43：江户风
  * 46：圣诞装
  * 50：应援服