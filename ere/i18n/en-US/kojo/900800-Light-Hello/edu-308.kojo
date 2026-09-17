# @file Light Hello - Training
# @author 黑奴队长（临时）
# @author Katze (translator)
report2000:
  title: Grand Live Begins!
  lines:
    - On the final workday of the week, a mature %UMA% appeared at Tracen Academy.
    - Using the name %CHARA_ACTUAL%, %SEX% claimed to be the founder of an initiative called Grand Live.
    - Grand Live aimed to put more racers on the Winners' Stage, giving %UMA% more chances to shine.
    - The initiative had now reached its first milestone. URA approved Grand Live events for five sub-G3 races, rotating yearly.
    - After the introduction, %CHARA% asked for %YOU%'s support of Grand Live.

report2001:
  title: The Grand Live Dream
  lines:
    - %CHARA% happily told %YOU% that Grand Live's year-long trial had earned rave reviews. URA would now add five rotating G2 Grand Live races each year.
    - Fired up by the prospect of bringing Grand Live to the greatest races, %CHARA% was raring to go.

report2002:
  title: Dream Pioneer
  lines:
    - %CHARA% stood frozen before the noticeboard.
    - The newly posted Grand Live schedule for next year now included five G1 races.
    - A %UMA% once powerless on the track had finally claimed a 「victory」 of their own.
    - As the founder of Grand Live, %CHARA%'s 「victory」 was beyond compare.
    - if: (t = era.get('love:308')) >= 75
      lines:
        - %YOU% gently drew %SEX% into an embrace.
        - %CHARA% rested against %YOU%'s shoulder.
        - Few words were needed. Together, they quietly savored this 「victory」.
    - if: t < 75
      lines:
        - %YOU% stood silently beside %CHARA%, sharing the moment with %SEX%.

report:
  title: Grand Live
  lines:
    - It was time for the next Grand Live race announcement.
