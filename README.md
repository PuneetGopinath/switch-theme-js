# switch-theme-js
> Easily switch themes in your website

<img src="gif/Switch-Theme.gif" alt="gif" width="400" height="200" />

[![GitHub stars](https://img.shields.io/github/stars/PuneetGopinath/switch-theme-js)](https://github.com/PuneetGopinath/switch-theme-js/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/PuneetGopinath/switch-theme-js)](https://github.com/PuneetGopinath/switch-theme-js/network)
[![GitHub issues](https://img.shields.io/github/issues/PuneetGopinath/switch-theme-js)](https://github.com/PuneetGopinath/switch-theme-js/issues)
![GitHub repo size](https://img.shields.io/github/repo-size/PuneetGopinath/switch-theme-js)
![Lines of code](https://img.shields.io/tokei/lines/github/PuneetGopinath/switch-theme-js?label=total%20lines%20of%20code)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](https://github.com/PuneetGopinath/switch-theme-js/blob/main/.github/CODE_OF_CONDUCT.md)

## Features
- Themes switch without page reload
- Many more features coming

## Live demo
See [live demo](https://puneetgopinath.github.io/switch-theme-js/)

Click on "Dark theme" refresh the page, you see the page is default now set to dark theme.

## Contributing
You can find the contributing guidelines [here](https://github.com/PuneetGopinath/switch-theme-js/blob/main/.github/CONTRIBUTING.md)

## FAQs
These are the frequently asked questions:

### 1. What happens actually
This is a basic JS code, that stores the theme name in a cookie that stays for 10 days and adds the theme name to the class list of the body.

### 2. How to design a theme?
You need to know CSS for that.

1. Think of a cool theme name
2. To select the theme in CSS, use `.theme_name` where `theme_name` is your theme name
3. To add a button for user to switch the theme, use the html `a` tag e.g. `<a href="javascript:switchTheme('dark', 'white');">Dark theme</a>`
4. Add `onload="getTheme();"` to your `body` tag
5. Add `<script async defer src="https://cdn.jsdelivr.net/gh/PuneetGopinath/switch-theme-js@main/src/switch.js"></script>` in the head tag.
6. That's all, test it out in your website, or submit a bug report for us to Analyse it.

### 3. Example html file
The [index.html](https://github.com/PuneetGopinath/switch-theme-js/blob/gh-pages/index.html) file shows an example.

## Supporters
👏 A big thank you goes to all the supporters of this project!

You prove that the switch-theme-js Action has some value for you!

### Stargazers
[![Stargazers for @PuneetGopinath/switch-theme-js](https://reporoster.com/stars/PuneetGopinath/switch-theme-js)](https://github.com/PuneetGopinath/switch-theme-js/stargazers)

### Contributors
Thanks to all contributors again!

[![GitHub Contributors Image](https://contrib.rocks/image?repo=PuneetGopinath/switch-theme-js)](https://github.com/PuneetGopinath/switch-theme-js/contributors)
