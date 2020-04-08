---
description: Searching for and finding files is an important skill of any linux user
title: 07 - Locating Things
---

<!-- This chapter should probable be placed after 06 - the filesystem -->

# Chapter 07 - Locating Things

As a beginning Linux user it is not easy to find your way through the structure of the filesystem. Being able to search for binaries and other files will bring you a long way. Linux has several tools available to make this task less daunting.

## Searching for Indexed Files

The `locate` command is one of the easiest commands to use for finding files on your filesystem. The locate command is **lightning fast** because there is a background process that runs on your system that continuously finds new files and stores them in a database (the index). When you use the `locate` command, it then searches that database for the filename instead of searching your filesystem while you wait.

::: tip Install locate
If you get the error `command not found` you may need to install the `locate` package using `sudo apt install locate`. Note that the index will also need time to build. On top of that, the index is only generated on a periodic base (which may be once a week). The indexing process can be forced to update using the command `sudo updatedb`.
:::

The serious downside of this technique is that recently created files might not have been indexed yet and may not even show up in your search result. It may also may list files that have already been removed from the system.

```bash
locate dhcp
```

::: codeoutput
<pre>
...
/usr/share/doc/dhcpdump
/usr/share/doc/dhcpdump/changelog.Debian.gz
/usr/share/doc/dhcpdump/copyright
/usr/share/doc/isc-dhcp-client
/usr/share/doc/isc-dhcp-client/NEWS.Debian.gz
/usr/share/doc/isc-dhcp-client/README.gz
/usr/share/nmap/nselib/dhcp6.lua
...
</pre>
:::

## Finding Binaries and Man-pages

If you are looking for a binary file on your system, `whereis` can help you it. It attempts to locate the desired program in the standard Linux places, and in the places specified by the environment variables `$PATH` and `$MANPATH`.

::: tip `$PATH`
The `$PATH` environment variable contains a list of the directories where linux should search for commands that are being executed from the command line. You can request the content of the variable by using the `echo` command as follows: `echo $PATH` or using the `env` command that will output all environment variables. If the user for example wants to execute the `touch` command, linux will look in the directories specified in `$PATH` one by one looking for the `touch` binary.
:::

```bash
whereis g++
```

::: codeoutput
<pre>
g++: /usr/bin/g++ /usr/share/man/man1/g++.1.gz
</pre>
:::

As an extra, `whereis` will also display the location of the source files and the manual pages if there are any.

The easiest way to know what paths `whereis` is looking, just add the `-l` listing option.

```bash
whereis -l g++
```

::: codeoutput
<pre>
bin: /usr/bin
bin: /usr/sbin
...
bin: /snap/bin
...
man: /usr/share/info
src: /usr/src/system76-io-1.0.1~1559663713~19.10~ea5f61a
...
src: /usr/src/linux-headers-5.3.0-7625
g++: /usr/bin/g++ /usr/share/man/man1/g++.1.gz

</pre>
:::

## Locating a Command

The `which` command only shows the path to a binary that can be found in the `$PATH` environment variable. This means that it can only be used to find commands that can be executed from the terminal by the current user.

```bash
which g++
```

::: codeoutput
<pre>
/usr/bin/g++
</pre>
:::

## All around Searching

The most versatile command to search for files on the the filesystem is `find`. It allows the user to search for any type of file in a specified location and has quite a lot of options available to tweak the search criteria.

`find` is capable of looking for files based on:

* the filename
* the type of file
* the creation and modification timestamp
* the owner
* the group
* the permissions
* the file size
* and more ...

A lot of documentation about the `find` command can of course be found in the man-pages.

The basic syntax for using the `find` command is: `find [starting-point...] [expression]`.

* The `starting-point` is the place where to start searching for the file. All subdirectories will be included in the search by-default. A option would be to always look from the top of the filesystem, namely root `/`. However this would be a slow search. The search operation is a lot faster if you have a general idea of where the file can be found and start searching from there.
* The `expression` part is a bit more complicated. In its essence it contains the search criteria. But `find` is a lot more versatile. It can even execute commands for each file found. One could for example set the `read` permissions for every directory that has a certain group set and is created after a certain data. The wildest things are possible.

### Example of find
