# Critter Mail Delivery 💌🌿
Join Bunny on a cozy adventure through the forest, delivering letters to their animal friends! Meet cheerful critters, explore maps, and have fun delivering letters. If you love wholesome stories, cute art, and peaceful vibes, this game is for you! 🐇💌

## Why did I make this project?
I am someone who loves to both draw and code games, so this was
the perfect chance for me to do both! Every weekend, my 
grandparents always say hi to their postman, so I was inspired
to create my own game!

## Challenges and What I learned
Through this project, there were many different ups and downs.
I had a hard time relearning how to code using p5play, especially
because the last time I coded with it was in 2024! Through this
experience, I was able to gain more practice writing in Javascript
as well as managing my time efficiently to finish the project.

## How Did I Make This?
I used p5play to create the entire project and I used my iPad
and Procreate to draw all of the assets throughout the game!
I coded on my Macbook using VSCode to test my project.

## Author's Note
Hi! My name is Kayla, and I absolutely love creating heartwarming games filled with soft colors and friendly characters. I drew all of the art in this game—from the silly forest friends to the little envelopes Bunny delivers! Making *Critter Mail Delivery* was such a joy, and I hope it brings a smile to your face too :)

## Extra Information
**Languages:** HTML, CSS, and JavaScript 
**All art and illustrations:** drawn by Kayla (me!)  
**Created for:** Hack Club (Athena Award)
[![Athena Award Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Faward.athena.hackclub.com%2Fapi%2Fbadge)](https://award.athena.hackclub.com?utm_source=readme)



# p5play template

This is a template repo that includes the following libraries:

* [p5 & p5.sound](https://p5js.org/download/)
* [p5play & planck](https://github.com/quinton-ashley/p5play)

See the links for license information.

`sketch.js` has a very simple game to demonstrate a few features of the p5play library. (Since it's hosted via GitHub Pages, you can [play it here](https://fsudigitalmedia.github.io/p5play_template/)). Wipe it out and make your own game! (After you record your high score, of course.)

## Q5.js

The creator of p5play has created an alternative to p5.js called [q5.js](https://q5js.org/). It is smaller, faster, and better at some things than p5. Maybe that matters to you or maybe it doesn't. The p5play vscode extension (which is very useful) uses q5 by default so it's worth knowing something about it.

If you copy and paste the code from this repo's sketch.js file, you'll see that it breaks. I'm not totally sure why, but it seems to require replacing `let canvas = new Canvas("fullscreen")` with `createCanvas("fullscreen")`. Otherwise, it works.

One other detail is that the `textFont()` function in q5 doesn't accept the font size as a second parameter, so you'll want to specify the font and the size separately:

```javascript
    textFont("Courier");
    textSize(24);
```

## Notes

If you want to include sound, be sure to uncomment the line in `index.html` that includes the `p5.sound` library. (It's worth noting that q5.js still uses the p5 sound library)

Finally, if you're using this as a template, change the title in `index.html` and replace the contents of this `README.md` file with information about the game you've created.
