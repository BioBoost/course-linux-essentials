---
description: Package managers allow packages and their dependencies to be installed.
title: 07 - Package Managers
---

# Chapter 07 - Package Managers

## Debian and it's Packages

Every Linux distribution is different in terms of how software is installed. Linux distributions use different installation file types, package managers, and commands for installation. Even within a single form of Linux, there are different types of package managers.

Debian files are usually downloaded by package managers from a software repository. A repository is a collection of Debian files that typically comes from a server or other location. Package managers access these repositories and download the requested Debian file. Then, the package manager installs the package. A package manager is software used to handle the installation, removal, configuration, and updating of programs and drivers on a computer system. If a Debian file is not downloaded from a repository, then the user downloaded or created a Debian file. The local file can still be installed; Debian files are not required to come from a repository, although most do.

Packages generally contain all of the files necessary to implement a set of related commands or features. There are two types of Debian packages:

* **Binary packages**, which contain executables, configuration files, man/info pages, copyright information, and other documentation. These packages are distributed in a Debian-specific archive format; they are usually distinguished by having a '.deb' file extension. Binary packages can be unpacked using the Debian utility dpkg (possibly via a frontend like aptitude).
* **Source packages**, which consist of a .dsc file describing the source package (including the names of the following files), a .orig.tar.gz file that contains the original unmodified source in gzip-compressed tar format and usually a .diff.gz file that contains the Debian-specific changes to the original source. The utility dpkg-source packs and unpacks Debian source archives. (The program apt-get can be used as a frontend for dpkg-source.)

Installation of software by the package system uses "dependencies" which are carefully designed by the package maintainers. These dependencies are documented in the control file associated with each package.

For example, the package containing the GNU C compiler (gcc) "depends" on the package `binutils` which includes the linker and assembler. If a user attempts to install gcc without having first installed binutils, the package management system (dpkg) will send an error message that it also needs binutils, and stop installing gcc.

There are multiple tools that are used to manage Debian packages, from graphic or text-based interfaces to the low level tools used to install packages. All the available tools rely on the lower level tools to properly work.

It is important to understand that the higher level package management tools such as `aptitude` or `dselect` rely on apt which, itself, relies on dpkg to manage the packages in the system.

## DPKG

`dpkg` is the main package management program. `dpkg` is the software at the base of the package management system in the free operating system Debian and its numerous derivatives. `dpkg` is used to install, remove, and provide information about `.deb` packages. dpkg (Debian Package) itself is a low level tool.

`dpkg` was originally created by Ian Murdock in January 1994 as a Shell script, Matt Welsh, Carl Streeter and Ian Murdock then rewrote it in Perl, and then later the main part was rewritten in C by Ian Jackson in 1994.

<!-- APT (Advanced Package Tool), a higher level tool, is more commonly used than dpkg as it can fetch packages from remote locations and deal with complex package relations, such as dependency resolution. -->

## APT

APT is the Advanced Package Tool and provides the apt-get program. apt-get provides a simple way to retrieve and install packages from multiple sources using the command line. Unlike dpkg, apt-get does not understand .deb files, it works with the packages proper name and can only install .deb archives from a source specified in /etc/apt/sources.list. apt-get will call dpkg directly after downloading the .deb archives from the configured sources.

Some common ways to use apt-get are:

* To update the list of package known by your system, you can run:

```bash
apt-get update
```

(you should execute this regularly to update your package lists)

* To upgrade all the packages on your system (without installing extra packages or removing packages), run:

```bash
apt-get upgrade
```

* To install the foo package and all its dependencies, run:

```bash
apt-get install foo
```

* To remove the foo package from your system, run:

```bash
apt-get remove foo
```

* To remove the foo package and its configuration files from your system, run:

```bash
apt-get purge foo
```

* To upgrade all the packages on your system, and, if needed for a package upgrade, installing extra packages or removing packages, run:

```bash
apt-get dist-upgrade
```

## Aptitude

Aptitude is a package manager for Debian GNU/Linux systems that provides a frontend to the apt package management infrastructure. Aptitude is a text-based interface using the curses library, it can be used to perform management tasks in a fast and easy way.

* aptitude offers easy access to all versions of a package.
* aptitude makes it easy to keep track of obsolete software by listing it under "Obsolete and Locally Created Packages".
* aptitude includes a fairly powerful system for searching particular packages and limiting the package display. Users familiar with mutt will pick up quickly, as mutt was the inspiration for the expression syntax.
* aptitude can be used to install the predefined tasks  available.
* aptitude in full screen mode has su functionality embedded and can be run by a normal user. It will call su (and ask for the root password, if any) when you really need administrative privileges

Aptitude is most commonly used for searching for packages. You can use the following command for this:

```bash
pi@HAL:/$ aptitude search foobar
```

You can launch the 'graphical' frontend by running it from the terminal:

```bash
pi@HAL:/$ aptitude
```

## And then there was apt

The original APT (not the same as the `apt` command), has the problem that is has many low-level commands with many functionalities which are perhaps never used by an average Linux user. On the other hand, the most commonly used package management commands are scattered across `apt-get` and `apt-cache`.

The apt commands have been introduced to solve this problem. apt consists some of the most widely used features from `apt-get` and `apt-cache` leaving aside obscure and seldom used features. It can also manage `apt.conf` file.

With `apt`, you don’t have to fiddle your way from `apt-get` commands to `apt-cache`. `apt` is more structured and provides you with necessary options needed to manage packages.

Bottom line: `apt` = most common used command options from `apt-get` and `apt-cache`.

**Currently the `apt` binary supports the following commands:**

* `list`: which is similar to `dpkg list` and can be used with flags like `--installed` or `--upgradable`.
* `search`: works just like `apt-cache search` but sorted alphabetically.
* `show`: works like `apt-cache show` but hide some details that people are less likely to care about (like the hashes). The full record is still available via `apt-cache show` of course.
* `update`: like the regular `apt-get update `with color output enabled, but `apt update` also shows the number of upgradeable packages (if any).
* `install,remove`: adds progress output during the dpkg run.
* `upgrade`: the same as `apt-get upgrade --with-new-pkgs`.
* `full-upgrade`: a more meaningful name for `dist-upgrade`.
* `edit-sources`: edit `sources.list` using `$EDITOR`.
* `policy`: works just like apt-cache policy
