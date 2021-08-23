---
description: This chapter introduces the basics of ownership and permissions on a Linux system.
title: Users and Groups
---

# User and Groups

<!-- Linux is a multi-user OS ...... -->
<!-- TODO - Good Intro -->

## Linux Users

**Linux is a multi-user system**. A basic understanding of users and groups is required before ownership and permissions can be discussed, because they are the entities that the ownership and permissions apply to.

In Linux, there are two types of users: **system users** and **regular users**. Traditionally, system users are used to run non-interactive or background processes on a system, while regular users are used for logging in and running processes interactively.

An easy way to view all of the users on a system is to look at the contents of the `/etc/passwd` file. Each line in this file contains information about a single user.

Print the `passwd` file with the command:

```bash
cat /etc/passwd
```

Rendering an output equivalent to:

```bash
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
...
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
libuuid:x:100:101::/var/lib/libuuid:
...
syslog:x:101:104::/home/syslog:/bin/false
kernoops:x:106:65534:Kernel Oops Tracking
bioboost:x:1000:1000:BioBoost,,,:/home/bioboost:/bin/bash
vboxadd:x:999:1::/var/run/vboxadd:/bin/false
```

![passwd entries](./img/passwd_entries.png)

Although, most commands will usually show the user owner as a name, the operating system is actually associating the user ownership with the `UID` (user id) for that user name. This is also reflected in the `/etc/passwd` file.

### Super user

In addition to the two user types, there is the **root user** (also called the *superuser*), who has the ability to override any file ownership and permission restrictions. In practice, this means that the superuser has the rights to access anything on his/her own server. This user is used to make system-wide changes, and must be kept secure.

Opening a shell prompt as the superuser can be achieved by executing the command `su` (substitute user), after which you are required to provide the password of the root user. Once logged in as the root user, notice how the prompt changes from `$` to `#`.

Be careful because the root user has the **ability to do anything on the system**. When executing commands as the root user there are some disadvantages that need to be kept in mind:

* no record of system altering commands
* no record of the user that performed the system altering commands
* no access to your user shell environment (that is the environment variables from the user as which you were originally logged in)
* you have to enter the root password, meaning that everyone that requires this type of access, needs to know the password.

It is also possible to configure other user accounts with the ability to assume "superuser rights". Using the `sudo` prefix before the command, the user stays logged in with his/her own user account, but can apply system wide changes. In fact, creating a normal user that has `sudo` (superuser do) privileges for system administration tasks is considered to be best practice, as it counters the previously mentioned disadvantages of switching to the superuser account.

::: warning Switching to root with sudo
Note that in many cases the super user account is disabled for login. In this case, a regular user with `sudo` rights can switch still to the root user using the `sudo su` command. However, one cannot directly login via a login prompt as the root user.
:::

## Linux Groups

Groups are collections of zero or more users. A user belongs to a default group (primary group), and can also be a member of any of the other groups on a server (secondary groups).

An easy way to view all the groups is to look in the `/etc/group` file.

```bash
cat /etc/group
```

Which should output something like:

::: output
<pre>
root:x:0:
daemon:x:1:
bin:x:2:
sys:x:3:
adm:x:4:
tty:x:5:
...
bluetooth:x:116:
colord:x:117:
pulse:x:118:
pulse-access:x:119:
mdm:x:120:
nopasswdlogin:x:121:
rtkit:x:122:
saned:x:123:
bioboost:x:1000:
...
</pre>
:::

By executing the `id` command a user can also see to which groups his/her account belongs.

For example `id` would output:

::: output
<pre>
uid=1000(bioboost) gid=1000(bioboost) groups=1000(bioboost),4(adm),
24(cdrom),27(sudo),30(dip),46(plugdev),108(lpadmin),110(sambashare)
</pre>
:::

To checkout which groups another user belongs too, one can add the username as an argument after the `id` command. For example `id mark`.

Similar to user ownership, the association of a file with a group is not actually done internally by the operating system by name, but by the `GID` (group id) of the group.

## Adding Users to the System

<!-- Needs some refactoring later on -->

Adding users to the system can be achieved using the command line tools `useradd` or `adduser`.

`useradd` is native binary compiled with the system. `adduser` is a perl script which uses `useradd` binary in the back-end. `adduser` is more user friendly and interactive than its back-end `useradd`. There's no difference in features provided.

To create a new user account named `mark` using the `adduser` command one would run:

```bash
[bioboost@linux][~]$ sudo adduser mark
```

::: output
<pre>
[sudo] password for bioboost:               
Adding user `mark' ...
Adding new group `mark' (1001) ...
Adding new user `mark' (1001) with group `mark' ...
Creating home directory `/home/mark' ...
Copying files from `/etc/skel' ...
Enter new UNIX password: 
Retype new UNIX password: 
passwd: password updated successfully
Changing the user information for mark
Enter the new value, or press ENTER for the default
	Full Name []: Mark Jenkins
	Room Number []: 101
	Work Phone []: 0
	Home Phone []: 0
	Other []: 
Is the information correct? [Y/n] Y
</pre>
:::

From this point on `mark` can log in to the system.

::: tip Switching Users
To switch to another user account, use the `su` command. However if not logged in as root, one will need to provide the password of the user account that is being switched to. When logged in as root, or when prefixing the `su` command with `sudo`, the switch can be made without having to enter the user account password. Example: `sudo su mark`
:::

<!-- TODO - Now add a user using useradd. Show that there is no homedir and no password is requested. What flags and options are needed: -m for homedir for example -->
















<!-- TODO - Also discuss:  -->
<!-- userdel	Deletes a user account and related files.
usermod	Modifies a user account.
addgroup	Adds a group to the system. =>
delgroup	Removes a group from the system.
passwd	Changes user password.
Locking an account
Create group for example for 'students'
Add multiple accounts to the group users -->