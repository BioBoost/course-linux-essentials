---
description: Finding commands and files is an important skill of any linux user
title: 07 - Locating Things
---

<!-- This chapter should probable be placed after 06 - the filesystem -->

# Chapter 07 - Locating Things

As a beginning Linux user it is not easy to find your way through the structure of the filesystem. Being able to search for binaries and other files will bring you a long way. Linux has several tools available to make this task less daunting.

## Searching for Indexed Files

The `locate` command is one of the easiest commands to use for finding files on your filesystem. It goes through you whole filesystem to locate the keyword you instruct it to search for. Important to know is that it uses a sort of indexing database to speed up this process. The serious downside of this technique is that recently created files might not have been indexed yet and may not even show up in your search result.

```bash
locate network
```

## Finding Binaries

If you are looking for a binary file on your system, `whereis` can help you it. It attempts to locate the desired program in the standard Linux places, and in the places specified by the environment variables `$PATH` and `$MANPATH`.

::: tip `$PATH`
The `$PATH` environment variable contains a list of the directories where linux should search for commands that are being executed from the command line. You can request the content of the variable by using the `echo` command as follows: `echo $PATH`. If the user for example wants to execute the `touch` command, linux will look in the directories specified in `$PATH` one by one looking for the `touch` binary.
:::

```bash
whereis ls
whereis g++
```

As an extra, `whereis` will also display the location of the source files and the manual pages if there are any.

The easiest way to know what paths `whereis` is looking, just add the `-l` listing option.

```bash
whereis -l g++
```
