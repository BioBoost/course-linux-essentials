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
| `pwd` | print name of current directory |
| `shutdown` | power-off the machine |

## More Detailed Overview

| Command | Description |
| --- | --- |
| `ls [OPTIONS] [PATH]` | List information about files |
| **Examples** | `ls -al`, `ls ~`, `ls /boot` |
| **Common Options** | `-l` long listing <br> `-a` include hidden files <br> `-h` human readable format |
| --- | --- |
| `env [OPTION] [NAME=VALUE] [COMMAND [ARG]]` | Output all environment variables |
| **Examples** | `env -i /bin`, `env -u XDG_VTNR`, `ls --null` |
| **Common Options** | `-i` start with empty environment <br> `--null` end ech output line with null, not new line <br> `-u` remove veriable from the environment |
| --- | --- |
| ` locate [OPTION] PATTERN` | Find file in index |
| **Examples** | `locate voorbeeldbestand.txt`, `ls -c [.html]*`, `locate -i *voorbeeldbestand.txt*` |
| **Common Options** | `-c` write the number of matching entries <br> `-i` ignore case distinctions when matching patterns <br> `-h` human readable format |
| --- | --- |
| `cd [OPTIONS]` | Change directory |
| **Examples** | `cd -l`, `cd ./documents`, `cd ..` |
| **Common Options** | `-l` Make that he can change to a symbolic link directory |
| --- | --- |
| `pwd [OPTION]` | Print working directory |
| **Examples** | `pwd -L`, `pwd -P` |
| **Common Options** | `-L` print symbolic path <br> `-P` print the actual path |
| --- | --- |
| `chmod [OPTION][OPERAToR][MODE] file` | change file mode bits |
| **Examples** | ``chmod 700 /tmp/davys_secrets.txt `, `chmod u=rw NOACCESDIRECOTY` |
| **Common Options** | `-c` like verbose but report onlu when a change is made <br> `-v` output a diagnostic for every file processed <br> `-r` change files and directories recursively |
| --- | --- |
| `chown [OPTION] [OWNER][:[GROUP]] FILE` <br> `chown [OPTION]… –reference=RFILE FILE…` | List information about files |
| **Examples** | `sudo chown root voorbeeldfile.txt`, `chown master:group1 voorbeeldfile` |
| **Common Options** | `-c` like verbose but report onlu when a change is made <br> `-v` output a diagnostic for every file processed <br> |
| --- | --- |
| `ssh-keygen [-q] [-b bits] [-t dsa | ecdsa | ed25519 | rsa] [-N new_passphrase] [-C comment] [-f output_keyfile]` | List information about files |
| **Examples** | `ssh-keygen -t rsa`, `ssh-keygen -f ~/opslagplaatssshkey -t ecdsa` |
| **Common Options** | `-l` type ssh key like rsa, dsa or ecdsa <br> `-f` name of the file in which to store the created key |
| --- | --- |
| `ssh [-46AaCfGgKkMNnqsTtVvXxYy] [-b bind_address] [-c cipher_spec] [-D [bind_address:]port] [-E log_file][-e escape_char] [-F configfile] [-I pkcs11] [-i identity_file] [-J [user@]host[:port]] [-L address][-l login_name] [-m mac_spec] [-O ctl_cmd] [-o option] [-p port] [-Q query_option] [-R address][-S ctl_path] [-W host:port] [-w local_tun[:remote_tun]] [user@]hostname [command]` | Connect to remote host using SSH |
| **Examples** | `ssh pirobin@host(ipadress ofwel domainnaam) -4`, `ssh 192.168.101.10` |
| **Common Options** | `-4` forced to use ipv4 <br> `-p` port to connect to |
| --- | --- |
| `scp [-346BCpqrTv] [-c cipher] [-F ssh_config] [-i identity_file] [-l limit] [-o ssh_option] [-P port] [-S program] [[user@]host1:]file1 ... [[user@]host2:]file2` | List information about files |
| **Examples** | `scp -P 2249 testje.pdf pirobin@156.10.99.1`, `scp -l 2249 testje.pdf pirobin@156.10.99.1` |
| **Common Options** | `-l` limiting bandwidth usage <br> `-P` port to use with scp (default port 22) |
| --- | --- |
| `man  [-C  file]  [-d] [-D] [--warnings[=warnings]] [-R encoding] [-L locale] [-m system[,...]] [-M path] [-S list] [-e extension] [-i|-I] [--regex|--wildcard] [--names-only] [-a] [-u] [--no-subpages]  [-P  pager]  [-r prompt]   [-7]   [-E   encoding]  [--no-hyphenation]  [--no-justification]  [-p  string]  [-t]  [-T[device]] [-H[browser]] [-X[dpi]] [-Z] [[section] page[.section] ...] ...` | Open man(ual) page |
| **Examples** | `man ls`, `man 2 intro`, `man -f ls` , `man -a intro`|
| **Common Options** | `[NUMBER]` display specific section of a manual <br> `-f` show info of wat the command do in the terminal <br> `-a` display all available man pages from the command you search |
| --- | --- |
| `mkdir [OPTION] DIRECTORY` | Create directory |
| **Examples** | `mkdir -v dir1 dir2 dir3`, `mkdir directory` |
| **Common Options** | `-v` displays a message for every directory created <br> `-p` flag which enables the command to create parent directories as necessary  |
| --- | --- |
| `touch [OPTION] FILE` | Update/create file |
| **Examples** | `touch voorbeeldfile`, `touch -a timeupdatefile`, `touch -c voorbeeldfile` |
| **Common Options** | `-a` change accestime from file <br> `-c` if file don't excist make it <br> `-m` change the modification time only from a file |
| --- | --- |
| `adduser  [options] [--home DIR] [--shell SHELL] [--no-create-home] [--uid ID] [--firstuid ID] [--lastuid ID] [--ingroup GROUP | --gid ID] [--disabled-password] [--disabled-login] [--gecos  GECOS]  [--add_extra_groups] [--encrypt-home] user` | Add user to the system |
| **Examples** | ` adduser davy`, `adduser -d /data/test davy`, `adduser -u 999 davy` |
| **Common Options** | `-u` add unique user ID <br> `-d` location of the new home directory |
| --- | --- |
| `cat [OPTIONS] [PATH]` | Concatenate file |
| **Examples** | `cat bestand1 bestand2`, `cat -n bestand`, `cat -A` |
| **Common Options** | `-n` this will do a normal cat but just will show some line numbers <br> `-A` this is show-all wat wil zeggen dat dit -v -R en -T doet in 1 commando |
| --- | --- |
| `rm [OPTIONS] [PATH]` | Remove file |
| **Examples** | `rm bestand.txt file.txt`, `rm -f bestand.txt`, `rm -r *` |
| **Common Options** | `-f` this will force to delete the file <br> `-r` this work recursive, so delete directories an their content |
| --- | --- |
| `tree [-adfgilnopqrstuxACDFNS] [-L level [-R]] [-H baseHREF] [-T title] [-o filename] [–nolinks] [-P pattern] [-I pattern] [–inodes] [–device] [–noreport] [–dirsfirst] [–version] [–help] [directory …]` | List file tree |
| **Examples** | `tree -p ./configuratiebestanden`, `tree -t `, `tree --filelimit 5` |
| **Common Options** | `-p` long listing <br> `-t` sort by time instead of alphabetical <br> `--filelimit` this limit the amount of files/diectory's |
| --- | --- |
| `wc [OPTIONS] [FILE]` | Word count |
| **Examples** | `wc voorbeeld.txt`, `wc -l voorbeeld.txt`, `wc -w voorbeeld.txt` |
| **Common Options** | `-l` print the number of lines from the file <br> `-w` numbers of words in the file |
| --- | --- |
| `more [-options] [-num] [+/pattern] [+linenum] [file_name]` | Pager for output |
| **Examples** | `more -d voorbeeld.txt`, `more -f voorbeeld.txt`, `more -p voorbeeld.txt` |
| **Common Options** | `-d` make that you can use q to quit, like in the manpages <br> `-f` makes some whitespace so it's not all text <br> `-p` this clear the screen and after that it display the text |
| --- | --- |
| `less [-[+]aABcCdeEfFgGiIJKLmMnNqQrRsSuUVwWX~] [-b space] [-h lines] [-j line] [-k keyfile] [-{oO} logfile] [-p pattern] [-P prompt] [-t tag] [-T tagsfile] [-x tab,...] [-y lines] [-[z] lines] [-# shift] [+[+]cmd] [--] [filename]... ` | Pager for output |
| **Examples** | `less voorbeeldfile`, `less -f voorbeeldfile`, `less -N voorbeeldfile` |
| **Common Options** | `-f` force to open irregular files <br> `-N` set numbers for every new line |
| --- | --- |
| `apt [COMMANDS] [PACKAGES]` | Package manager |
| **Examples** | `apt update vscode`, `apt install hiernaamwatjewilt`, `apt remove watjewegwilt` |
| --- | --- |
| `find [where to start searching from] [expression determines what to find] [-options] [what to find]]` | Search for files |
| **Examples** | `find / -name voorbeeld.txt`, `find /var -perm 664`, `find / - type f -name voorbeeld.txt` |
| **Common Options** | `-type` type of what you're searching for <br> `-perm` which permission is you're file <br> `-name` what is the search keyword that you're looking for |
| --- | --- |
| `id [OPTIONS] [USER]` | id info of user |
| **Examples** | `id -u robin`, `id -g robin`, `id -G robin` |
| **Common Options** | `-u` find id from specific user <br> `-g` find id from specific group <br> `-G` in which groups is following user |
| --- | --- |
| `whereis [options] [-BMS directory -f] name` | Find binary |
| **Examples** | `whereis -m python`, `whereis -b find` |
| **Common Options** | `-m` search for manpage <br> `-b` search for binary |
| --- | --- |
| `which [-a] filename` | Locate command |
| **Examples** | `which python`, `which -a python g++ cpp`|
| **Common Options** | `-a` show all matching pathnames for each argument |
| --- | --- |
| `file [OPTIONS] [FILENAME]` | Details of file type |
| **Examples** | `file -b naamvanfile`, `file cursus.pdf`, `file *` |
| **Common Options** | `-b` display filetype in a briefmode |
| --- | --- |
| `pwd [OPTIONS]` | print name of current directory |
| **Examples** | `pwd -L`, `pwd -P` |
| **Common Options** | `-L` show symbolic path <br> `-P` show actual path <br> `-h` human readable format |
| --- | --- |
| `shutdown [OPTIONS] [TIME] [MESSAGE]` | power-off the machine |
| **Examples** | `sudo shutdown`, `sudo shutdown 08:15`, `sudo shutdown now "System update"` |

| --- | --- |
| `ls [OPTIONS] [PATH]` | List information about files |
| **Examples** | `ls -al`, `ls ~`, `ls /boot` |
| **Common Options** | `-l` long listing <br> `-a` include hidden files <br> `-h` human readable format |


