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
| `env [OPTION][-][NAME=VALUE][COMMAND [ARG]]` | Output all environment variables |
| **Examples** | `env -i`, `env -o`, `env -u` |
| **Common Options** | `-i` start with empty environment <br> `-o` end each output line with NUL, not newline <br> `-u` remove variable from environment |
| `locate [OPTION] PATTERN` | Find file in index |
| **Examples** | `locate README.md`, `locate "*.txt" -n 20`, `locate -i -e *README.md*` |
| **Common Options** | `-n LIMIT` stops searching after amount of entries <br> `-i` ignore case sensitivity <br> `-e` only prints entries of files that exist at the time locate is run |
| `updatedb [OPTION]` | Update the index database for `locate` |
| **Examples** | `sudo updatedb`, `updatedb -f ...`, `updatedb -n ...` |
| **Common Options** | `-f` add entries in white-space-separated list FS to PRUNEFS<br> `-n` add entries in white-space-separated list NAMES to PRUNENAMES <br> `-e` add entries in white-space-separated list PATHS to PRUNEPATHS |
| `ls` | List information about files |
| `ls [OPTIONS] [PATH]` | List information about files |
| **Examples** | `ls -al`, `ls ~`, `ls /boot` |
| **Common Options** | `-l` long listing <br> `-a` include hidden files <br> `-h` human readable format |
| `cd [OPTIONS] directory` | Change directory |
| **Examples** | `cd ..`, `cd /`, `cd -` |
| **Common Options** | `..` go to the directory one level higher than your current location <br> `/` switch to the previous directory <br> `-` go to the root directory |
| `pwd [OPTION] directory` | Print working directory |
| **Examples** | `pwd -L`, `pwd -P`, `pwd` |
| **Common Options** | `-L` use PWD from environment even if it contains symlinks <br> `-P` avoid all symlinks |
| `g++ [OPTION] file name` | The C++ compiler |
| **Examples** | `g++ -S hello.cpp`, `g++ -c hello.cpp`, `g++ -o main.exe hello.cpp` |
| **Common Options** | `-S` only compiles the file name and not assembling or linking.will generate a file_name.s (assembly source file) <br> `-c` only compile and assemble the file name and not link the object code to produce executable file. will generate a file_name.o (object code file) <br> `-o` Compiles and links file name and generates executable target file with target_name (or a.out by default). |
| `chmod [OPTIONS] [PERMISSIONS] [FILENAMES]` | Change permissions of files |
| **Examples** | `chmod g+w /tmp/file`, `chmod g-x /tmp/file`, `chmod u+rwx,g-x,o-rwx /tmp/file` |
| **Common Options** | `-R` change files and directories recursively <br> `-v` output diagnostic for every file processed <br> `-c` like '-v' but report only when a change is made |
| `chown [OPTION][OWNER][:[GROUP]] FILE` | Change ownership of files |
| **Examples** | `chown mark /tmp/test.txt`, `chown :teachers /tmp/test.txt`, `chown mark:teachers /tmp/test.txt` |
| **Common Options** | `-R` change files and directories recursively <br> `-v` output diagnostic for every file processed <br> `-c` like '-v' but report only when a change is made |
| `ssh-keygen [OPTION] FILE` | SSH key generator |
| **Examples** | `ssh-keygen -t rsa -b 4096 -f ~/.ssh/vps-cloud.web-server.key -C "My web-server key"`, `ssh-keygen -t rsa`, `ssh-keygen`|
| **Common Options** | `-t` specifies the type of key to create <br> `-b` specifies the number of bits in the key to create <br> `-f` specifies the filename of the key file <br> `-C` set a new comment |
| `ssh [user_name@host][IP/Domain_name]` | Connect to remote host using SSH |
| **Examples** | `ssh -V 192.168.56.101`, `ssh testuser@10.0.0.55`, `ssh test.server.com -p 3322` |
| **Common Options** | `-V` displays the version of ssh tool and exits <br> `-6` Permits only IPv6 addresses <br> `-2` Instructs ssh to use protocol version 2 |
| `scp [OPTION] [user@]SRC_HOST:]file1 [user@]DEST_HOST:]file2
` | Securely copy (over SSH) files from one host to another |
| **Examples** | `scp file.txt remote_username@10.10.0.2:/remote/directory`, `scp -P 2322 file.txt remote_username@10.10.0.2:/remote/directory`, `scp -r /local/directory remote_username@10.10.0.2:/remote/directory` |
| **Common Options** | `-P` specifies the remote host ssh port <br> `-r` tells scp to copy directories recursively <br> `-C` will force scp to compresses the data sent to the destination machine. |
| `man [OPTION] [SECTION] PAGE` | Open man(ual) page |
| **Examples** | `man ls`, `man -K ls`, `man -a ls`|
| **Common Options** | `-K` search for text in all pages <br> `-a` find all matching manual pages <br> `-f` specifies the filename of the key file <br> `-D` reset all options to their default values |
| `mkdir [OPTION] DIRECTORY` | Create directory |
| **Examples** | `mkdir directory`, `mkdir -p directory`, `mkdir -v projects`|
| **Common Options** | `-p` no error if existing, make parent directories as needed <br> `-v` print a message for each created directory <br> `-m` set file mode (as in chmod), not a=rwx - umask|
| `touch [OPTION] FILE` | Update/create file |
| **Examples** | `touch -a hello`, `touch -c hello`, `touch -m hello`|
| **Common Options** | `-a` change only the access time <br> `-c` do not create any files <br> `-d` specifies the filename of the key file <br> `-m` change modification time only |
| `adduser [options] user group` | Add user to the system |
| **Examples** | `adduser --conf FILE timon timon`, `adduser --disabled-login timon timon`, `adduser timon`|
| **Common Options** | `--conf FILE` Use FILE instead of /etc/adduser.conf <br> `--disabled-login` Don't run passwd to set the password, user won't be able to use her account until the password is set. <br> `--gid ID` When creating a group will the new groupid be the given number. When creating a user then will be in that group. |
| `cat [OPTION] [FILE]` | Concatenate file |
| **Examples** | `cat -n hello`, `cat hello > helloCopy`, `cat -s geeks.txt`|
| **Common Options** | `-n` number all output lines <br> `-c` do not create any files <br> `>` The content (at the left) will be copied in destination file (right)<br> `-s` suppress repeated empty output lines |
| `rm [OPTION] [FILE]` | Remove file |
| **Examples** | `rm hello`, `rm -i hello`, `rm -r hello`|
| **Common Options** | `-f` ignore nonexistent files and arguments, never prompt <br> `-i` prompt before every removal <br> `-r` remove directories and their contents recursively |
| `tree [OPTION] [FILE / DIRECTORY]` | List file tree |
| **Examples** | `tree -a ./Projects`, `tree -P sample*`, `tree -p ./Projects`|
| **Common Options** | `-a` all files are printed (except hidden files)<br> `-P` List files with entered pattern <br> `-p` List files with their permissions |
| `nmap [Scan Type(s)] [Options] {target specification}` | Network scan |
| **Examples** | `nmap -iL hello.txt`, `nmap 192.168.0.*`, `nmap -v www.google.be`|
| **Common Options** | `-v`  gives more detailed information about the remote machine <br> `*` scan a whole subnet or IP range <br> `-iL` scan all listed IP address in the file |
| `wc[OPTION] [FILE]` | Word count |
| **Examples** | `wc -l hello`, `wc -w hello`, `wc -m hello`|
| **Common Options** | `-l` prints the amount of lines present in a file <br> `-w` prints the amount of words present in a file <br> `-m`  prints amount of characters from a file |
| `more [options] file` | Pager for output |
| **Examples** | `more -d hello.txt`, `more -f hello.txt`, `more -p more.txt`|
| **Common Options** | `-d` displays “[Press space to continue, ‘q’ to quit.]”  and display "[Press 'h' for instructions.]" when wrong key is pressed <br> `-f` it does not wrap the long lines and displays them as such <br> `-p` clears the screen and then displays the text |
| `less [OPTION] [FILE]` | Pager for output |
| **Examples** | `less -p "failure"`, `less -F hello`, `less -n hello`|
| **Common Options** | `-p` start at the first occurrence of pattern in the file <br> `-F` exit if entire file can be displayed on first screen <br> `-n` suppresses line numbers |
| `apt [OPTION]` | Package manager |
| **Examples** | `sudo apt -update`, `sudo apt -upgrade`, `sudo apt install tree`|
| **Common Options** | `-update` downloads package information from all configured sources <br> `-upgrade` downloads package information from all configured sources <br> `install` Installing packages |
| `snap [OPTIONS]` | Package manager |
| **Examples** | `snap list`, `sudo snap refresh <package>`, `sudo snap remove <package>`|
| **Common Options** | `list` list of all the installed snaps with info<br> `refresh` manually updates the snaps <br> `remove` removes a Snap package |
| `find[start searching][expression determines what to find][-options][what to find]` | Search for files |
| **Examples** | `find ./Projects -name hello.txt`, `find ./Projects -name *.txt`, `find ./Projects -perm 664`|
| **Common Options** | `-name` searchs for file with specified name<br> `-name *` search for files with the same specified text <br> `-perm` searchs for files with entered permission |
| `id [OPTION] [USER]` | id info of user |
| **Examples** | `id -u timon`, `id -g timon`, `id -ng master`|
| **Common Options** | `-u` gives specific users id <br> `-g` gives specific users GID (Group ID) <br> `-ng` displays a name instead of numbers|
| `whereis [options] [-BMS directory... -f] name` | Find binary |
| **Examples** | `whereis -b hello`, `whereis -m hello`, `whereis -s hello`|
| **Common Options** | `-b` searches for binaries <br> `-m` searches for manuals <br> `-s` searches for sources |
| `which [-a] filename` | Locate command |
| **Examples** | `which -a cpp`, `which java` |
| **Common Options** | `-a` prints all matching pathnames of each argument|
| `file [option] [filename]` | Details of file type |
| **Examples** | `file -b hello`, `file Projects/*`, `file [a-e]*`|
| **Common Options** | `-b` displays just brief mode (that are just file types) <br> `/*` displays all files filetypes in particular directory <br> `[range]*` displays the file type of files in specific range |

