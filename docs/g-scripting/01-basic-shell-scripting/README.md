---
description: Shell scripts allow us to automate tasks
title: Basic Shell Scripting
---

# Basic Shell Scripting

Shell scripts are very useful to automate repetitive command line tasks.

## Creating a shell script

To create a script file just `touch` it and make it executable using `chmod`.

```bash
[bioboost@linux][~]$ cd /tmp
[bioboost@linux][~]$ touch hello
[bioboost@linux][~]$ chmod u+x hello
[bioboost@linux][~]$ ls -al hello
```

::: output
<pre>
-rwxr--r-- 1 bioboost bioboost 0 Sep 30 11:45 hello
</pre>
:::

Open the file with nano and add `#!/usr/bin/env bash` as a first line:

```bash
[bioboost@linux][~]$ nano hello
```

This is what is called the **shebang**. Under Unix-like operating systems, when a script with a shebang is run as a program, the program loader parses the rest of the script's initial line as an interpreter directive; the specified interpreter program is run instead, passing to it as an argument the path that was initially used when attempting to run the script. In this example the script is run by the `bash` Linux shell.

::: tip The Older Shebang
In the older days the shebang for a bash script was `#!/bin/bash`. However as some Linux systems dare to put the bash shell executable in a different place, these scripts would fail. By using the newer `#!/usr/bin/env bash` this problem is solved.
:::

::: warning sh is not Bash
Please do not be fooled by scripts or examples on the Internet that use `/bin/sh` as the interpreter. *sh* is not *bash*! Bash itself is a "sh-compatible" shell (meaning that it can run most 'sh' scripts and carries much of the same syntax) however, the opposite is not true; some features of Bash will break or cause unexpected behavior in sh. Also, please refrain from giving scripts a `.sh` extension. It serves no purpose, and it's completely misleading (since it's going to be a bash script, not an sh script).
:::

## Outputting text to the console

By using `echo` you can output text to the terminal:

```bash
#!/usr/bin/env bash

echo "Hello World"
```

## Running the script

The script can be run using the following command:

```bash
[bioboost@linux][~]$ ./hello
```

::: output
<pre>
Hello World
</pre>
:::

## Comments

Comments can be placed inside your script by prefixing a line of text with a hashtag `#`.

```bash
#!/usr/bin/env bash

# Output the text "Hello World" to the command line
echo "Hello World"
```

## Variables

Variables are areas of memory that can be used to store information and are referred to by a name.

To create a variable, put a line in your script that contains the name of the variable followed immediately by an equal sign `=`. After the equal sign, assign the information you wish to store. Note that no spaces are allowed on either side of the equal sign.

To use a variable place a dollar sign `$` in front of the name where you want to use it.

```bash
#!/usr/bin/env bash

# Creating a variable
hello="Hello World"

# Using a variable
echo $hello
```

As the name variable suggests, the content of a variable is subject to change. This means that it is expected that during the execution of your script, a variable may have its content modified by something you do.

On the other hand, there may be values that, once set, should never be changed. These are called **constants**. Constants are a very common idea in programming. Most programming languages have special facilities to support values that are not allowed to change. Bash also has these facilities but, to be honest, they are barely used. Instead, if a value is intended to be a constant, it is simply given an **uppercase name**. Environment variables are usually considered constants since they are rarely changed. Like constants, environment variables are given uppercase names by convention.

So the previous script should actually be written as:

```bash
#!/usr/bin/env bash

# Creating a "constant" variable
# Note the UPPERCASE_LETTERS
HELLO="Hello World"

# Using a variable
echo $HELLO
```

If you wish to substitute variables inside of strings, this can be accomplished by specifying the variable, prefixed with a dollar sign `$`, as shown next:

```bash
#!/usr/bin/env bash

MYNAME="Nico De Witte"

echo "My name is $MYNAME"
```

<!-- Need to explain that we can also place {} around the variable. Example $MY_NAME_file.txt would not work -->

### Command Line Arguments

When starting a script, one can pass command line arguments as shown next:

```bash
[bioboost@linux][~]$ ./hello mark
```

These are accessible through variables in the script.

An overview:

| Variable | Description |
| ---- | ---- |
| `$0` | First command line argument (name of script) |
| `$1` - `$...` | One for each command line argument |
| `$@` | All command line arguments (except `$0`) |
| `$#` | Number of command line arguments |

Example script:

```bash
#!/usr/bin/env bash

echo "Number of arguments: $#"
echo "First: $0"
echo "Second: $1"
echo "Third: $2"
echo "Fourth: $3"
echo "Fifth: $4"
echo "Sixth: $5"
echo "All: $@"
```

Execution example:

```bash
[bioboost@linux][~]$ ./hello my name is nico
```

::: output
<pre>
Number of arguments: 4
First: ./hello
Second: my
Third: name
Fourth: is
Fifth: nico
Sixth: 
All: my name is nico
</pre>
:::

If you wish the whole sentence to be treated as a single argument, you need to place quotes around the arguments.

```bash
[bioboost@linux][~]$ ./hello "my name is nico"
```

::: output
<pre>
Number of arguments: 1
First: ./hello
Second: my name is nico
All: my name is nico
</pre>
:::

## Reading Input from User

You can read input from the user using the `read` command.

```bash
#!/usr/bin/env bash

# Request some input from the user
echo "Please enter your full name"
read fullname

echo "Welcome to bash $fullname"
```

Running the script

```bash
[bioboost@linux][~]$ ./demo
```

::: output
<pre>
Please enter your full name
Nico De Witte
Welcome to bash Nico De Witte
</pre>
:::

You can instruct `echo` not to output a newline character using the `-n` option:

```bash
#!/usr/bin/env bash

# Request some input from the user
echo -n "Please enter your full name: "
read fullname

echo "Welcome to bash $fullname"
```

::: output
<pre>
Please enter your full name: Nico De Witte
Welcome to bash Nico De Witte
</pre>
:::

## Command substitution

You can substitute the output of a command into your script by using a dollar sign `$` followed by parentheses with the commands between the parentheses. Let's for example say we want to fetch the current date and display it with a message to the current user.

```bash
#!/usr/bin/env bash

# Determine the current date
# using the date command
currentdate=$(date)

# $USER is an existing environment variable that contains
# the username of the current user
echo "Hello $USER. Today is $currentdate"
```

::: output
<pre>
Hello bioboost. Today is Thu 14 May 2020 10:40:37 AM CEST
</pre>
:::

The characters `$( )` tell the shell, "substitute the results of the enclosed command."

::: tip Environment Variables
You can get a list of all available environment variables using the `env` command.
:::

You can accomplish the same result by substituting the output of the `date` command directly in the string:

```bash
#!/usr/bin/env bash

echo "Hello $USER. Today is $(date)"
```

The same can be accomplished by placing the command between backticks. However, backtick command substitution cannot be nested, while `$()` can.

```bash
#!/usr/bin/env bash

today=`date`
echo "Hello $USER. Today is $today"
```

## Quoting

Quoting is used to accomplish two goals:

* To control (i.e., limit) substitutions and
* To perform grouping of words.

### Single and double quotes

The shell recognizes both single and double quote characters. The following are equivalent:

```bash
var="this is some text"
var='this is some text'
```

However, there is an important difference between single and double quotes. **Single quotes limit substitution.** As we saw in the previous section, you can place variables in double quoted text and the shell still performs substitution. We can see this with the `echo` command:

```bash
[bioboost@linux][~]$ echo "My host name is $HOSTNAME."
```

::: output
<pre>
My host name is biosdeb.
</pre>
:::

If we change to single quotes, the behavior changes:

```bash
[bioboost@linux][~]$ echo 'My host name is $HOSTNAME.'
```

::: output
<pre>
My host name is $HOSTNAME.
</pre>
:::

Double quotes do not suppress the substitution of words that begin with `$` but they do suppress the expansion of wildcard characters used for shell globbing (more on this topic later).

For example, try the following:

```bash
[bioboost@linux][~]$ echo *
```

::: output
<pre>
Desktop Documents Downloads ISE Music Pictures
projects Public snap Templates Videos
</pre>
:::

Now try:

```bash
[bioboost@linux][~]$ echo "*"
```

::: output
<pre>
*
</pre>
:::

### Escaping a character

There is another quoting character you will encounter. It is the backslash `\`. The backslash tells the shell to "ignore the next character." This is typically called escaping a character. Here is an example:

```bash
[bioboost@linux][~]$ echo "My host name is \$HOSTNAME."
```

::: output
<pre>
My host name is $HOSTNAME.
</pre>
:::

By using the backslash, the shell ignored the `$` symbol. Since the shell ignored it, it did not perform the substitution on `$HOSTNAME`.

Here is a more useful example:

```bash
[bioboost@linux][~]$ echo "My host name is \"$HOSTNAME\"."
```

::: output
<pre>
My host name is "biosdeb".
</pre>
:::

As you can see, using the `\"` sequence allows us to embed double quotes into our text.

## Flow control

### Making decision

When writing scripts there will always come a time when it is necessary to define a different path based on a certain condition.

Some examples:

* Only execute some commands if a file exists
* Make a log entry if something fails
* Check user input data for validity
* ...

To add such decisions to our scripts we will require constructs that allow us to test for *conditions*. The if statement is one of those constructs. It's syntax is the following:

```bash
if condition; then
  # Do something
elif condition; then
  # Do another thing
else
  # Do something else
fi
```

The condition is a bit different from the conditions we know from programming languages such as C++ or PHP.

#### Exit status

A first option for the condition can be the exit status of a command. Each command or program that is executed will end with a status code between `0` and `255` (can be negative on windows). By convention, the value `0` means that everything went fine, while an exit status different from `0` means that something went wrong.

You can actually output the return values of Linux system commands such as `ls` and all by echoing `$?` on the command line. Try the following example:

```bash
[bioboost@linux][~]$ ls /usr/bin
[bioboost@linux][~]$ echo $?
```

::: output
<pre>
0
</pre>
:::

The status of `0` indicates all went well.

Now try:

```bash
[bioboost@linux][~]$ ls /does_not_exist
ls: cannot access 'does_not_exist': No such file or directory
[bioboost@linux][~]$ echo $?
```

::: output
<pre>
2
</pre>
:::

The status is not zero, indicating that the `ls` command did not terminate properly or something went wrong.

Putting it all together you can build an if statement based on the output of a command. Let's see an example where we try to create a file in a directory we don't have access too. Next we try to create a file in the `/tmp` dir where everyone has access:

```bash
#!/usr/bin/env bash

if touch /usr/bin/hello; then
  echo "Created hello in bin"
else
  echo "Failed to create hello in bin."
fi

if touch /tmp/hello; then
  echo "Created hello in tmp"
else
  echo "Failed to create hello in tmp."
fi
```

This construct is less used but can sometimes be helpful.

#### Testing

The test condition is most often used for the if statement. While there are two syntactically different forms, both work exactly the same.

```bash
#!/usr/bin/env bash

if test expression; then
    # Do something
else
    # Do another thing
fi
```

The second form, which is used more often is shown below:

```bash
#!/usr/bin/env bash

if [ expression ]; then
    # Do something
else
    # Do another thing
fi
```

Bash features a lot of built-in checks and comparisons, coming in quite handy in many situations.

String comparisons:

| Expression | Description |
| ---------- | ----------- |
| `str1 = str2` | Returns true if the strings are equal |
| `str1 != str2` | Returns true if the strings are NOT equal |
| `-z str` | Returns true if the string is empty |
| `-n str` | Returns true if the string is NOT empty |

Always make sure to add double quotes around the string and string variable.

Numeric comparisons

| Expression | Description |
| ---------- | ----------- |
| `val1 -eq val2` | Returns true if the values are equal |
| `val1 -ne val2` | Returns true if the values are not equal |
| `val1 -gt val2` | Returns true if val1 is greater than val2 |
| `val1 -ge val2` | Returns true if val1 is greater than or equal to val2 |
| `val1 -lt val2` | Returns true if val1 is less than val2 |
| `val1 -le val2` | Returns true if val1 is less than or equal to val2 |
| `! expr1` | Negates the result of the expression |

Some file conditionals:

| Expression | Description |
| ---------- | ----------- |
| `-d <directory>` | Returns true if the directory exists |
| `-f <file>` | Returns true if the file exists |
| `-r <file>` | Returns true if the file is readable by the user running the script |
| `-w <file>` | Returns true if the file is writeable by the user running the script |
| `-x <file>` | Returns true if the file is executable by the user running the script |

Let's rewrite the small script mentioned in the previous section that checks the status of the touch command:

```bash
#!/usr/bin/env bash

touch /usr/bin/hello;

if [ $? -eq 0 ]; then
  echo "Created hello in bin"
else
  echo "Failed to create hello in bin."
fi

touch /tmp/hello;

if [ $? -eq 0 ]; then
  echo "Created hello in tmp"
else
  echo "Failed to create hello in tmp."
fi
```

If something fails in your script or it should be prematurely ended then you can always make use of the exit command. By providing a numeric argument (0 to 255) you can set the exit code of your script.

Example:

```bash
#!/usr/bin/env bash

userid=$(id -u)

if [ "$userid" = "0" ]; then
    echo "Running script as root"
else
    echo "You must be superuser to run this script"
    exit 1
fi
```

## Shell Globbing

Globbing is the process of expandeding wildcards (`*`, `?`, ...) to match filenames **before a command is actually executed**. In other words, the command shell uses globbing for filename completion.

These wildcard patterns do not only match file names. The names being matched by a pattern can be anything: files, directories, symbolic links, etc. The shell will try to expand any tokens on the command line that contain unquoted wildcard characters into **existing** pathnames in the file system. These patterns cannot generate any names that do not exist. The patterns must always match existing names.

### Examples of Globbing

The asterisk `*` matches any combination of characters (even none).

* `echo *` will give a list of all the files in the current directory.
* `echo *.log` will give you a list of the files that end in `.log` in the current directory
* `echo /dev/sd*` will give you a list of all the devices that are available starting with `sd`
* `echo *log*` will expand to a list of files that contain the word `log` (this would for example match `apache.log` and `logdns.txt`)

::: warning When no matches are found
If the shell cannot match the glob to existing files, it will not perform any expansion and run the command with the literal symbols. If you for example enter `echo *sdfduhreiutret`, it will literally print `*sdfduhreiutret`.
:::

To match a single character, one can use the question mark `?`.

* `echo h?llo` would match both `hello` and `hallo` for example

If you do not wish a glob character to be expanded by the shell, you can always enclose it into single quotes:

```bash
echo '*'
```

which will just output `*`.

It is also important to know that the shell will only perform expansion once, before the command is executed. This means that if a wildcard symbol makes it to the executing command, it's up to command to deal with it as needed.

::: warning Hidden files
Shell globs do not match hidden files (files that start with a dot `.`). Matching hidden files can be accomplished by explicitly specifying a pattern with the dot as for example `.*`. This will however also match the current `.` and parrent directory `..`. To exclude these but match other dotfiles, use a pattern as `.[^.]*` (dot followed by anything but a dot).
:::

## Challenges

Solve the challenges by creating small bash scripts. Place the bash scripts here for every challenge. Make sure to add some comments and explain how they work.

Mark challenges using a ✅ once they are finished.

### ❌ Log the Date

*Create a script that output the date every 10 seconds. Use the `sleep` command to wait between calls to the `date` command.*

### ❌ Available Memory

*Output the available system memory together with the current date in the following format:*

```
[Thu 14 May 2020 11:12:55 AM CEST] MemAvailable:   28439572 kB
```

*The available memory can be found in the file `/proc/meminfo`. Use the `grep` tool to filter out the line with MemAvailable.*

### ❌ Fetching Github Keys

*Create a script that fetches the public SSH keys of a user on GitHub and displays them in the terminal. This can be accomplished by using the curl tool to access the endpoint `https://github.com/<username>.keys`, where `<username>` is an existing github username.*

*Take in the username via the command line arguments. If none is provided request it from the user using the read command.*

*Example via command line:*

```bash
./githubkeys bioboost
```

*or via the read command:*

```bash
./githubkeys
Please enter GitHub username: BioBoost
Fetching Keys
...
```

### ❌ DHCP Traffic

*Create a script that filters DHCP network traffic and outputs matching MAC-Addresses, IP-Addresses and Hostnames.*

### ❌ Backups

*Choose a directory on your system (best to choose one in your home-dir). Create a script that archives this directory in a `.tar.gz` tarball file. Add a timestamp in the name of the output file.*
