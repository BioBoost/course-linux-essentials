# Chapter 06 - Making Linux Your Own

https://www.youtube.com/watch?v=QAaT6BTUnPg

<!-- These are some ideas -->

Neofetch is a command-line system information tool written in bash 3.2+. Neofetch displays information about your operating system, software and hardware in an aesthetic and visually pleasing way.

Instructions

```bash
sudo apt install neofetch
```

Next edit `~/.zshrc` (or `~/.bashrc` if you haven't installed zsh):

```bash
nano ~/.zshrc
```

And launch neofetch every time you open a terminal by adding this to the botton of the script:

```bash
# Run neofetch every time we launch a terminal
neofetch
```

https://github.com/dylanaraps/neofetch


## Zsh and OhMyZsh

Some fun themes

```bash
# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="random"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in ~/.oh-my-zsh/themes/
# If set to an empty array, this variable will have no effect.
ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" "bira" "xiong-chiamiov-plus")
```


## Personal Prompt

http://bashrcgenerator.com/