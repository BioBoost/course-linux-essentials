---
description: An insane overview of all the commands used in this course
title: X - Crazy Command List
---

# Addendum X - Crazy Command List

| Command / Binary | Description |
| --- | --- |
| `env` | Output all environment variables |
| `locate` | Find file in index |
| `updatedb` | Update the index database for `locate` |
| `ls` | List information about files |
| `cd` | Change directory |
| `pwd` | Print working directory |
| `g++` | The C++ compiler |
| `chmod` | Change permissions of files |
| `chown` | Change ownership of files |
| `ssh-keygen` | SSH key generator |
| `ssh` | Connect to remote host using SSH |
| `scp` | Securely copy (over SSH) files from one host to another |
| `man` | Open man(ual) page |
| `mkdir` | Create directory |
| `touch` | Update/create file |
| `adduser` | Add user to the system |
| `cat` | Concatenate file |
| `rm` | Remove file |
| `tree` | List file tree |
| `nmap` | Network scan |
| `wc` | Word count |
| `more` | Pager for output |
| `less` | Pager for output |
| `apt` | Package manager |
| `snap` | Package manager |
| `find` | Search for files |
| `id` | id info of user |
| `whereis` | Find binary |
| `which` | Locate command |
| `file` | Details of file type |

## More Detailed Overview

| Command | Description |
| --- | --- |
| `ls [OPTIONS] [PATH]` | List information about files |
| **Examples** | `ls -al`, `ls ~`, `ls /boot` |
| **Common Options** | `-l` long listing <br> `-a` include hidden files <br> `-h` human readable format |



| Command | Description |
| --- | --- |
| `cd [OPTIONS] [DIRECTORY]` | to change the current directory, the directory wherein the user is currently working |
| **Examples** | `cd Downloads`, `cd ..`, `cd /` |
| **Options** | `-L` (default) Follow symbolic links <br> `-P` Don’t follow symbolic links. When  you try to navigate to a symbolic link that points to a directory, cd will change into the directory. |
| **Common Descriptions** | `/` goes to the root, the first directory in the filesystem hierarchy <br> `.` stays in current directory <br> `..` goes to the parent directory of the current directory <br> `../[name]` goes to the directory with that name, which has the same parent directory <br> ` ` goes to home directory <br> `[name]` (relative path), goes to the directory inside the current directory with that name <br> `/[dir1]/[dir2]` (absolute path), to go to the directory "dir2", even if you are in a totally different directory than "dir1"<br> `~` also goes to home directory <br> `[dir1]/[dir2]` goes to a directory(dir2) inside a directory(dir1) <br> `"[name dir]"` for directory names with black spaces <br> `[name]\[dir]` also for directory names with black spaces, but here the space is replaced with "\" <br> `-` goes to the previous directory the user used|
