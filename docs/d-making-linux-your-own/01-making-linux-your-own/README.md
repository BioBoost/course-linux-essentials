# Making Linux Your Own

## Dotfiles

Dotfiles are used to customize your system. The *dotfiles* name is derived from the configuration files in Unix-like systems that start with a dot (e.g. `.bashrc` and `.gitconfig`). For normal users, this indicates these are not regular documents, and by default are hidden in directory listings. For power users, however, they are a core tool belt.

There is a large dotfiles community. And with it comes a large number of repositories and registries containing many organized dotfiles, advanced installation scripts, dotfile managers, and mashups of things people collect in their own repositories.

A good place to store your dotfiles is GitHub. It's allows you to easily backup, restore, and sync the preferences and settings for your toolbox. Your dotfiles might be the most important files on your machine. Learn from the community. Discover new tools for your toolbox and new tricks for the ones you already use.

### Bootstrap your Dotfiles with dotbot

A customized set of dotfiles can vastly increase your command-line productivity and happiness. Having your dotfiles in a git repository allows you to take your configuration anywhere.

While it can be tempting for some to script dotfiles configuration and installation yourself, it is a hard route take. You would constantly run into edge-cases leading to constant modification of the scripts. With a framework, most of the use-cases have been thought of, so it is very low friction in comparison.

Some of the features that set dotbot apart from other tools out there are:

* Single configuration file
* Single command to install on a new machine via symbolic links
* Can be added as a git submodule
* Python is the only dependency (standard for almost all distros)

The next sections provide a step-by-step guide on how to setup a basic dotfiles repository with dotbot.

### Repository Setup

Start by setting up a new repository. Typically a directory called `dotfiles` is used. Create one in your home directory.

```bash
pi@red:~ $ mkdir dotfiles
pi@red:~ $ cd dotfiles
```

Now let us initialize it as a git repository and add `dot` as a git submodule.

```bash
pi@red:~/dotfiles $ git init
pi@red:~/dotfiles $ git submodule add https://github.com/anishathalye/dotbot
```

::: tip git submodule
Often a code repository will depend upon external code. This external code can be incorporated in a few different ways. One of these ways is by incorporating it as a git submodule. A git submodule is a record within a host git repository that points to a specific commit in another external repository. Submodules are very static and only track specific commits. Submodules do not track git refs or branches and are not automatically updated when the host repository is updated. When adding a submodule to a repository a new `.gitmodules` file will be created. The `.gitmodules` file contains meta data about the mapping between the submodule project's URL and local directory.
:::

Now we can copy the install script and setup a new configurations file:

```bash
pi@red:~/dotfiles $ cp dotbot/tools/git-submodule/install .
pi@red:~/dotfiles $ touch install.config.yaml
```

### Other Approaches

Want to get some inspiration or use another dotfiles manager than take a look at [dotfiles.github.io](https://dotfiles.github.io/).

## NeoFetch

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
