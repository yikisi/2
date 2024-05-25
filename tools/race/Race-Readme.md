# 比赛流程
---
## 第一步：解析马娘

#/data/system/racing/sys-parse-race-uma.js
> @param {Number[]} team_chara 玩家队伍在比赛中出场的马的id
> @param {RaceInfo} race_info 比赛信息object

> return {PseudoUma[]} 本场比赛使用的马娘Object数组

解析逻辑：
1.通过玩家出赛id数组读取当前激活的对应马娘数据
2.通过比赛信息Object读取对应比赛中会出现的史实胜者，数据位于比赛信息关联的json中
3.若史实胜者不足以补足比赛信息中设定的传奇对手数量，则从上一级目录的legends-default.json中抽取，再以其适龄数据填补
4.填补比赛信息中设定好的随机生成路人马数量（未完成，建议先把比赛信息js里的传奇人数先设定为与最大人数相等）
---
## 第二步：赛前运算

#/data/system/racing/sys-prepare-race.js
> @param {PseudoUma[]} list_chara 马娘Object数组
> @param {RaceInfo} race_info 比赛信息Object

> return null 仅用于继续加工马娘数组

加工目的：计算一些静态的赛道影响及被动技能
虽然技能部分尚未最终定型 但应该不影响测试
---
## 第三步：模拟比赛

#data/system/racing/sys-simulate-race.js

> @param {PseudoUma[]} list_chara 马娘Object数组
> @param {RaceInfo} race_info 比赛信息Object

> (debug)return {Number[]} 以id数组输出比赛结果排名 仅为暴力计算五维之和比拼
> (simulation) return {RaceReport} 包含每秒信息的详细战报（未完成）


