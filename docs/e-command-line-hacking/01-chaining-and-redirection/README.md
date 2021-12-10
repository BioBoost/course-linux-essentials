# Command Chaining, Redirection and Pipelines

Very Early Draft

<!-- Also read this: https://www.gnu.org/software/bash/manual/html_node/Redirections.html -->

## Redirection

Redirection in Linux is a feature that allows us to change the standard input source and output target when executing a command. Most linux commands will take some sort of input and generate an output.

By default, the standard input (stdin) is the keyboard and the standard output (stdout) is the display. With redirection, these standard input and output device can be changed.

### Standard Output Redirection

Standard output can be easily redirected by using the bigger than symbol `>` and redirecting it for example to a file:

```bash
echo "Hello World" >hello.txt
```

This will not print anything the screen anymore but will instead generate a file called `hello.txt` with the content "Hello World".

Each time this command is executed, the file `hello.txt` is completely overwritten with the output of the command. To have the new results appended to the file instead, the append operator `>>` can be used:

```bash
echo "Welcome to the pleasurable world of Linux ..." >>hello.txt
```

Generating the following result if we we're to execute the first command once and the second twice:

::: output
<pre>
Hello World
Welcome to the pleasurable world of Linux ...
Welcome to the pleasurable world of Linux ...
</pre>
:::

### Standard Input Redirection

Take for example the utility `wc`, which counts the number of lines, words and characters in text.

If you were to execute the command without any further arguments, it would expect its input to come from the terminal.

```bash
wc
```

Feel free to type a couple of words or sentences. `ENTER` will take you to a new line. Once finished press `CTRL-D` to indicate you are finished by sending an `EOF` marker.

::: output
<pre>
Hello World
from
the Terminal in
Linux ...[CTRL-D]
      4       8      43
</pre>
:::

Now to redirect the standard input to a file, one can use the smaller than `<` symbol and specify the path to a file. Building on the example of *Standard Output Redirection* we would get the following result:

```bash
cat hello.txt
```

::: output
<pre>
Hello World
Welcome to the pleasurable world of Linux ...
Welcome to the pleasurable world of Linux ...
</pre>
:::

```bash
wc <hello.txt
```

Resulting in the output:

::: output
<pre>
  3  18 104
</pre>
:::

### Combining Input and Output Redirection

Both the input as the output of a command can be redirected. Let's use the `sort` tool to sort a list of words alphabetically.

Use nano to create a file called `words.txt` with the following content:

```txt
monster
drink
red
bull
cool
wings
```

Now let's sort these words and put the result in `sorted.txt`:

```bash
sort <words.txt >sorted.txt
cat sorted.txt
```

::: output
<pre>
bull
cool
drink
monster
red
wings
</pre>
:::

As we can see, a command can have both its input and output redirected. The order of the redirection does not matter. The only requirement is that the redirection operators `<` and `>` must appear after the other options and arguments of the command.

::: warning Files as Input
While the sort example used the input redirection to get it's input from a file, that is often not necessary for tools like that. These type of tools often allow the user to specify a file as input argument. If none is provided, standard input is used. So basically to sort the lines in the file, the same could have been achieved using `sort words.txt >sorted.txt`. This info can be found in the man-pages of the command in question.
:::

### Standard Error Redirection

When an application generates error messages it often uses the standard error (stderr) output for this. This allows us to distinguish between normal output and error messages. When running an application in the terminal without any redirection, error messages are by default send to the display.

Try reading the file `/etc/shadow` using `cat` without using `sudo`. This will generate some error message on `stderr`.

```bash
cat /etc/shadow
```

::: output
<pre>
cat: /etc/shadow: Permission denied
</pre>
:::

Error messages can be redirected separately, which is really handy for logging errors. This can be achieved by placing the number two before the output redirection operator:

```bash
cat /etc/shadow 2>errors.log
```

Which will result in a file called `errors.log` which contains the error message "cat: /etc/shadow: Permission denied".

Note that the same can be done with the append operator `>>`, so for example `cat /etc/shadow 2>>errors.log`.

Sometimes it's useful to combine all output, both standard and error, into a single target. This can be achieved by redirecting standard error to standard output, which if required can then be redirected to a file:

```bash
cat /etc/passwd /etc/shadow >output.log 2>&1
```

Note that the order in which the redirection is specified is of importance. It will not work when switching these.

Because this is done so often when running scripts in the background or as a service, a shorter form exists which combines both and allows the redirection of both standard error and output to the same target:

```bash
cat /etc/passwd /etc/shadow &>output.log
```

::: warning Bash 4
Do note that the operators `&>` and `&>>` are only available since bash 4. Older versions have no such operator.
:::

Again both approaches can also be used with the append operator `>>`. So for example:

```bash
date &>>output.log
```

Take a look at another example where we redirect the error messages to `/dev/null` so they are not displayed. This is typically done with the `find` tool:

```bash
find / -name shadow 2>/dev/null
```

## Pipelines

The most useful and powerful thing we can do with I/O redirection is to connect multiple commands together to form what are called **pipelines**. With pipelines, the **standard output of one command is fed into the standard input of another**.

Count the number of files and directories in a certain directory:

```bash
ls -al | wc
```

::: output
<pre>
     68     613    4317
</pre>
:::

`grep` is a very popular tool that can filter lines provided via standard input matching certain criteria (based on regex and such) and only output the lines that match the given criteria. Therefore it is often used in a pipeline to only filter out the useful information.

```bash
ls -al / | grep lib
```

::: output
<pre>
lrwxrwxrwx   1 root root          7 Jun  8 18:43 lib -> usr/lib
lrwxrwxrwx   1 root root          9 Jun  8 18:43 lib32 -> usr/lib32
lrwxrwxrwx   1 root root          9 Jun  8 18:43 lib64 -> usr/lib64
lrwxrwxrwx   1 root root         10 Jun  8 18:43 libx32 -> usr/libx32
</pre>
:::

Let take a look at a more complex example where we use the `/usr/share/dict/words` file, which contains a large amount of words. The next command accomplishes the following steps in a pipeline:

* It filters out all the words that contain the substring `home` using `grep`
* then it sorts the resulting output alphabetically but in reverse order using `sort -r`,
* after which `tail` only displays the last item
* which is then converted to all uppercase using `tr` (translate),
* where `sed` is then used to replace the `DA` substring part of the string with `JOW `.

```bash
grep ".*home.*" /usr/share/dict/words | sort -r | tail -n 1 | tr a-z A-Z | sed 's/DA/JOW /'
```

Resulting in the output

::: output
<pre>
JOW HOMEY
</pre>
:::

<!-- Use `ip address` and `grep` to display the line containing the ip and mac address of the interface ... -->
<!-- TODO: &&, ; | > >> 2>&1 2>/dev/nul helle.txt < -->