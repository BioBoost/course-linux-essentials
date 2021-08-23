# Making Linux Your Own

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


## Alias

An alias can be used to map longer commands to shorter key sequences. When the shell sees an alias being executed, it substitutes the longer sequence before proceeding to interpret commands.

### Existing Aliases

You can determine what aliases are set on your shell with the alias command.

```bash
[bioboost@linux][~]$ alias
```

::: output
<pre>
...
alias ls='ls --color=auto'
alias ll='ls -lh'
...
</pre>
:::

### Creating an Alias

New aliases can be created by typing `alias name=command` where `name` is the name you want to give the alias and `command` is the command you want to have executed when you run the alias.

<!-- TODO - Maybe good idea to check if you are not overriding existing command/alias. -->

### Alias Example

```bash
[bioboost@linux][~]$ alias shell='echo "You are using the $0 shell"'
```

Now you can use the alias `shell` to check which shell you are running.

```bash
[bioboost@linux][~]$ shell
```

::: output
<pre>
You are using the zsh shell
</pre>
:::

The cool thing about aliasses is, is that they can also take arguments and options (depending on the commands used in the alias). For example the alias `ll='ls -lh' will list files and directories in long format and human readable sizes. When using this alias, we can actually still pass arguments and options, for example:

```bash
[bioboost@linux][~]$ ll -aS /
```

Where `-a` requests to show all files and directories and `-S` request them be ordered by size.

::: output
<pre>
total 92K
drwx------   2 root root  16K Jan 26 23:09 lost+found
drwxr-xr-x 138 root root  12K Feb  7 10:24 etc
drwxrwxrwt  23 root root  12K Feb  9 12:59 tmp
drwxr-xr-x  19 root root 4.8K Feb  9 10:35 dev
drwxr-xr-x  20 root root 4.0K Jan 27 13:52 .
drwxr-xr-x  20 root root 4.0K Jan 27 13:52 ..
drwxr-xr-x   3 root root 4.0K Jan 26 23:22 boot
drwxrwxrwx   1 root root 4.0K Feb  3 12:03 data
drwxr-xr-x   3 root root 4.0K Jan 26 23:17 home
drwxr-xr-x   2 root root 4.0K Dec 20 17:09 media
drwxr-xr-x   2 root root 4.0K Dec 20 17:09 mnt
drwxr-xr-x   3 root root 4.0K Jan 28 08:39 opt
drwx------   3 root root 4.0K Dec 20 17:27 root
drwxr-xr-x  14 root root 4.0K Jan 31 09:10 snap
...
</pre>
:::

### Making Aliasses Permanent

If you use the `alias` command at the shell, your alias will not be permanent. Once the terminal is closed, the alias is "forgotten".

To make it stick, we need to place it inside one of the startup scripts such as `.bashrc` or `.zshrc`, depending on the shell you are using.

::: tip .bashrc
`.bashrc` is a shell script that Bash runs whenever it is started interactively. It initializes an interactive shell session. You can put any command in that file that you could type at the command prompt. You put commands here to set up the shell for use in your particular environment, or to customize things to your preferences. A common thing to put in `.bashrc` are aliases that you want to always be available.
:::

To add your alias permanently, use nano to edit your `.bashrc` file and place the alias as you typed in the shell at the bottom of the script. You can also add a comment to the alias as shown in the next example.

```bash
[bioboost@linux][~]$ nano ~/.bashrc
```

Place this at the bottom of the script to make the `shell` alias available when opening a shell:

```bash
# Add alias to show me current shell
alias shell='echo "You are using the $0 shell"'
```

Save the file using `CTRL-o` and exit using `CTRL-x`.

Launch a new terminal and check if the alias is available.

## Dotfiles
