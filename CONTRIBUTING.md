# CONTRIBUTING

## Branches

1.0 开始的 EraUma 分支将分为三类：
* master 分支：唯一的主分支/保护分支，负责发布。
* dev 分支：主开发分支，所有新增、改动和修复内容必须先合并到 dev 分支，再由 dev 分支合并到 master 分支进入发布。
* 内容分支：由使用 JavaScript 的口上作者提交内容用，随用随开，不用即废。口上作者需要先将新口上或加笔提交到自己的分支（fork 项目作者需要先提 Merge Request 将内容合并到 [主仓库](https://gitgud.io/umaera/erauma) 相应分支），然后通过 dev 分支在最终合并到 master 中。
    * 例：特别周的 spe 分支，丸善斯基、醒目飞鹰的 lleader 分支，待兼福来的 kitaru 分支，调教地文的 train 分支。
    * 内容分支需要定期 merge 最新版本标签以兼容最新的游戏机制和系统。

## Commits

[Type](https://www.conventionalcommits.org/zh-hans/v1.0.0/)

Scope:
* train: 训练相关的界面、机制和地文，包括自主训练、照看训练和协同训练；
* race: 比赛相关的界面、机制和地文；
* ero: 调教相关的界面、机制和地文；
* inmon: 淫纹相关的界面、机制和地文；
* info: 情报相关的界面和机制，包括情报界面和各种信息检查器等；
* basement: 地下室相关的界面、机制和地文；
* mejiro: 目白城相关的界面、机制和事件；
* page: 其他界面，日常、商店、远征等；
* mechanism: 其他机制，好感、爱慕、生育等；
* event: 随机事件系统、随机小事件、地文、口上；
* chara: 角色数据、图像、调教立绘；
* item：与出行等相关的普通道具；
* data: 其他数据，技能、因子能力、淫纹插件等；
* engine：引擎改动；
* util: value-utils、date-indicator 等工具模块改动；
* tools：tools 文件夹下的生成工具改动；
* b-(分支名): 一般用于 merge，标明这次 merge 的方向；
* i18n：面向多语言翻译的改动。