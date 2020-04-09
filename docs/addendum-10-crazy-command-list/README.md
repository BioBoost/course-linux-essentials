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
| `chmod [OPTION]... MODE[,MODE]... FILE...` | chmod modifies the permissions of the file specified by file name to the permissions specified by permissions. |
| **Examples** | `See next table` |
| **Common Options** | `-c` like verbose but report only when a change is made <br> `-f`  suppress most error messages <br> `-v` output a diagnostic for every file processed <br> `-R` change files and directories recursively |

Next table:
| Type | Command | Description|
| --- | --- | --- |
| Which user | u | user/owner |
| | g | group |
| | o | other |
| | a | all |
| What to do | + | Adding this permission |
| | - | Removing this permission |
| | = | Setting exactly this permission |
| Which permission | r | read |
| | w | write |
| | x | execute |

```
For example:
chmod ug+rwx, ao-rwx /projects
--> This will take the user en group
--> adding 
--> Write, read en execution
AND
--> All the others
--> Removing
--> Write, read en execution

Only the group and user are able to write, read and execute. All the others have no right to the projects file. 
You will always need to add the sudo in front. Only the sudo user can set the permissions. (sudo chmod ...)
```
