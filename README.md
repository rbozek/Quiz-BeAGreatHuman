# BE A GREAT HUMAN - THE QUIZZENING
## “Get through life without looking dumb (or dying)”

![HumanQuizScreenshot](https://github.com/rbozek/Quiz-BeAGreatHuman/assets/152832616/d905db61-01da-4e76-a194-17f4368af168)

What kind of footprint do you leave on the world? What impact do you have on the people around you? Do you know how to deal with emergency situations? Being a good person doesn't have to be like wearing a neon yellow sweater you show off to the world - all it takes is paying attention to the little details in life.<br>
The goal is simple - choose a category and answer questions. Each question will have multiple choice answers, and after selecting your answer you will receive points - or not! At the end of a category you will see your total score and learn how close you are to being a "perfect person". (FYI - no such thing.)

# [PLAY GAME!](https://quiz-beagreathuman.netlify.app/)

## :desktop_computer:	Technologies used 

- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

## :handshake:	Credits

- [Sitepoint](https://www.sitepoint.com/simple-javascript-quiz/) - helped me decide how to store data
- [Flaticon](https://www.flaticon.com/) - favicon
- [Wallpapers.com](https://wallpapers.com/background/abstract-and-artistic-tile-background-idgwxxk9z0oyx967.html) - background image
- [ColorsExplained.com](https://www.colorsexplained.com/) - meditation image
- [Freesound](https://freesound.org/) - miscellaneous sound effects
- [Justin Abene](https://github.com/jmca) - 2 pieces of music for game succeed or fail
- [Google Fonts](https://fonts.google.com/specimen/Marmelad) - Marmelad font
- [ChatGPT](https://chat.openai.com) - in app.js: syntax assistance for line 119, & nested conditionals assistance for lines 148-160

## :brain:	Planning Materials
- [Google Document](https://docs.google.com/document/d/113u75inesnjXXG_PjuJ-9mHIlA8qXYocUYC1vlsqJ4E/edit?usp=drive_link)

## :wrench:	Basic Improvements (a.k.a. not quite Ice Box)

- Change timer to display mins:seconds, rather than seconds only
- Add more questions & more categories
- Improve Flexbox layout

## :ice_cube::boxing_glove: Ice Box Features 

- Add option to turn sounds off
- Answer handling -> after player selects incorrect answer, pause on question, indicate which answer is correct (possibly with additional trivia/info), then click to move to next question
- Score handling complexity -> instead of simply correct/incorrect, allow each question a "points maximum" for choosing correctly on first attempt, and subtract points for each incorrect guess
- Category handling -> after finishing 1st category, player can maintain score and proceed on to other categories
- Secret top-dawg page -> if player achieves perfect score, show a unique "super winner" page