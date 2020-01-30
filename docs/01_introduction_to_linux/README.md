---
description: ....
title: 01 - Introduction to Linux
---

# Chapter 01 - Introduction to Linux

Most youngsters these days have heard of Linux and many of them may know it as an operating system for a computer. But Linux is so much more than that.

Basically Linux is not the operating system itself but rather the heart (kernel) of it. Linux-based operating systems such as Android, Ubuntu, Debian, Fedora, Red Hat ... are bundles of system tools, package managers, libraries, a window manager and so on and the Linux kernel.

## A Brief History

Linux has come a far way since 1991 where it came to life by the hands by Linus Torvalds. To get an idea about the history, the following sections will introduce the most important milestones in its history.

### 1965 - Multics

Multics (Multiplexed Information and Computing Service) was a **mainframe timesharing operating system** that began at MIT (Massachusetts Institute of Technology) as a research project in 1965. It was a cooperation between MIT, Bell Labs and GE (General Electric). While it was a monstrous system, it also was an important influence on operating system development.

Since it was designed to be a utility, such as electricity and telephone services, it had numerous features to provide high availability and security. Both the hardware and software were highly modular so that the system could grow in size by adding more of the appropriate resource even while the service was running.

The **GE 645 mainframe** was the first computer to run the new Multics operating system.

![GE 645 mainframe](./img/ge_654.jpg)

Multics was partly developed by **Ken Thompson** (UTF-8 character encoding and Google GO language) and **Dennis Ritchie** (invented C programming language).

![Ken Thompson and Dennis Ritchie](./img/ken_thompson_dennis_ritchie.png)

### 1969 - DEC PDP-7

The PDP-7 was a **minicomputer** produced by Digital Equipment Corporation (DEC) as part of the PDP series. With a cost of US$72,000, it was cheap but powerful by the standards of the time. The PDP-7 is the third of Digital's 18-bit machines. The computer I/O includes a keyboard, printer, paper-tape and dual transport DECtape drives. The standard memory capacity is 4K words (9 KB) but expandable up to 64K words (144 KB). The PDP-7 weighed about 500 kg.

![DEC PDP-7](./img/decpdp7.jpg)

**DECsys**, the first operating system for DEC's 18-bit computer family (and DEC’s first operating system for a computer smaller than its 36-bit timesharing systems), was introduced in 1965. It provided an interactive, single user, program development environment for Fortran and assembly language programs.

In 1969, **Ken Thompson and Dennis Ritchie** wrote **Unics** (Uniplexed Information & Computing Service) in assembly language on a PDP-7 as the operating system for **Space Travel**, a game which requires graphics to depict the motion of the planets.

::: tip Unics
The name actually came from **Brian Kernighan**, the co-author of the book "The C Programming Language" with Richie, also knows as the "K" in *awk*. It was meant as a pun on Multics. Its like Multics, but only simpler as it should of been. It also sounds like a eunuch, which he taught was funny because its like Multics but castrated.
:::

<iframe width="560" height="315" src="https://www.youtube.com/embed/de2Hsvxaf8M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Unics was later renamed to **Unix**, only nobody seems to remember when that happened.

### September 27, 1983 - net.unix-wizards

On *Tue, 27-Sep-83 12:35:59 EST*, **Richard Stallman** wrote the following post on the news group `net.unix-wizards`:

```text
Free Unix!

Starting this Thanksgiving I am going to write a complete
Unix-compatible software system called GNU (for Gnu's Not Unix), and
give it away free(1) to everyone who can use it.
Contributions of time, money, programs and equipment are greatly
needed.

To begin with, GNU will be a kernel plus all the utilities needed to
write and run C programs: editor, shell, C compiler, linker,
assembler, and a few other things.  After this we will add a text
formatter, a YACC, an Empire game, a spreadsheet, and hundreds of
other things.  We hope to supply, eventually, everything useful that
normally comes with a Unix system, and anything else useful, including
on-line and hardcopy documentation.

GNU will be able to run Unix programs, but will not be identical
to Unix.  We will make all improvements that are convenient, based
on our experience with other operating systems.  In particular,
we plan to have longer filenames, file version numbers, a crashproof
file system, filename completion perhaps, ...
  
Who Am I?
  
I am Richard Stallman, inventor of the original much-imitated EMACS
editor, now at the Artificial Intelligence Lab at MIT.  I have worked
extensively on compilers, editors, debuggers, command interpreters, ...

Why I Must Write GNU

I consider that the golden rule requires that if I like a program I
must share it with other people who like it.  I cannot in good
conscience sign a nondisclosure agreement or a software license
agreement.

So that I can continue to use computers without violating my principles,
I have decided to put together a sufficient body of free software so that
I will be able to get along without any software that is not free.

...
```

[Full Post](./free_unix.md)

This first post by Richard started the free software revolution. Historically, most software has been issued under a closed-source license, meaning that you get the right to use the machine code, but cannot see the source code. The open source philosophy is that you have a right to obtain the software, and to modify it for your own use.

**Richard Stallman** (creator of GPL) was looking to create a truly free and open source alternative to the proprietary Unix system. He was working on the utilities and programs under the name **GNU**, a recursive acronym meaning "GNU's not Unix!".

![Richard Stallman](./img/richard_stallman.jpg)













### UNIX

UNIX was originally an operating system developed at AT&T Bell Labs in the 1970's by **Ken Thompson** (UTF-8 character encoding and Google GO language) and **Dennis Ritchie** (invented C programming language).

![Ken Thompson and Dennis Ritchie](./img/ken_thompson_dennis_ritchie.png)

AT&T Bell Labs licensed the source code of UNIX.

At 1980 *Unix System V* was being sold as commercial version by AT&T and BSD (Berkeley Software Distribution) was being developed based on the original licensed sources

### HURD

Historically, most software has been issued under a closed-source license, meaning that you get the right to use the machine code, but cannot see the source code. The open source philosophy is that you have a right to obtain the software, and to modify it for your own use.

**Richard Stallman** (creator of GPL) was looking to create a truly free and open source alternative to the proprietary Unix system. He was working on the utilities and programs under the name **GNU**, a recursive acronym meaning "GNU's not Unix!".

![Richard Stallman](./img/richard_stallman.jpg)

Although there was a kernel project underway, it turned out to be difficult going, and without a kernel, the free and open source operating system (HURD) dream could not be realized.

### Linux Kernel

It was in 1991 that a Finnish computer science student called **Linus Torvalds** started creating the **Linux kernel**.

![Linus Torvalds](./img/linus_torvalds.png)

It was **based on the Minix operating system** (by Andrew S. Tanenbaum). **Minix** is an open source operating system developed by Andrew S. Tanenbaum, professor emeritus of computer science at the Vrije Universiteit Amsterdam in the Netherlands, which he created as an example for his book "Operating Systems: Design and Implementation".

Minix is ​​partly based on Unix, but with a microkernel instead of the traditional monolithic kernel. The intention of Minix was that students could understand it in three months of study.

When Linus Torvalds wanted to make an operating system himself in 1991, he was inspired by Minix, but wrote the code of the operating system itself. With additions from others via the internet, this resulted in the Linux kernel, which is a monolithic kernel and not a microkernel.

::: tip Microkernel vs Monolithic kernel
Basically a **monolithic kernel** is a single large process running entirely in a single address space. It is a single static binary file. All kernel services exist and execute in the kernel address space. The kernel can invoke functions directly. Examples of monolithic kernel based OSs: Unix, Linux.

With a microkernel, the kernel is broken down into separate processes, known as servers. Some of the servers run in kernel space and some run in user-space. All servers are kept separate and run in different address spaces. Servers invoke "services" from each other by sending messages via IPC (Interprocess Communication). This separation has the advantage that if one server fails, other servers can still work efficiently. Examples of microkernel based OSs: Mac OS X and Windows NT.
:::

Linus made the project open source and allowed people to freely use and contribute to the Linux kernel.

Currently the official kernel received contributions from over 12000 programmers.

It was Linus Torvald's work - producing a working and viable kernel that he called Linux - that brought the complete operating system to life.

Given that Linus was using several GNU tools (e.g., the GNU Compiler Collection, or GCC), the marriage of the GNU tools and the Linux kernel was a perfect match.

![Linus and Stallman](./img/linus_stallman.jpg)

### Timeline

![Timeline, Christoph S.](./img/timeline.png)

## Linux

Linux was originally developed as a free operating system for personal computers based on the Intel x86 architecture but has since been ported to more computer hardware platforms than any other operating system. This includes desktop PCs, servers, mainframes, supercomputers, smartphones, tablets, TVs, embedded systems, ...

The definition of the word Linux depends on the context in which it is used.

Linux means the kernel of the system, which is the central controller of everything that happens on the computer. People that say their computer "runs Linux" usually refer to the kernel and suite of tools that come with it, called the **distribution**.

### Popular Linux Distributions

A Linux distribution is usually built around a package management system, which puts together the Linux kernel, free and open-source software, and often some proprietary software.

Some popular distributions are listed below.

Red Hat

Suse

Debian

Raspbian

OpenWRT

Fedora

OpenSuse

Ubuntu

Kali

CentOS

Linux Mint







#### Ubuntu

![Ubuntu](./img/ubuntu.png)

Ubuntu is probable the most popular Linux distribution at the moment. It's both attractive for a beginning Linux user as well as a hardened Linux guru. While popular as a desktop edition for developers it's also often used as a server OS because of it's LTS (Long Time Support) editions.

Like Debian, Ubuntu uses the DEB package manager, while later versions of Ubuntu also include Snap packages so that installing new software is a simple, straightforward process.

Ubuntu also has a massive user base, which means its has a highly active community on which new and advanced users can fall back for support. There are also plenty of derivatives like **Lubuntu** and **Xubuntu**.

#### Red Hat

Red Hat started out as a simple distribution that introduced the Red Hat Package Manager (RPM). The developer eventually formed a company around it, which tried to commercialize a Linux desktop for business. Over time, Red Hat started to focus more on the server applications such as web and file serving, and released Red Hat Enterprise Linux, which was a paid service on a long release cycle.

#### CentOS

![CentOS](./img/CentOS-7.jpg)

Because everything in Red Hat Enterprise Linux is open source, a project called CentOS came to be, that recompiled all the RHEL packages and gave them away for free. CentOS and others like it (such as Scientific Linux) are largely compatible with RHEL and integrate some newer software, but do not offer the paid support that Red Hat does.

**Scientific Linux** is an example of a specific use distribution based on Red Hat. The project is a Fermilab sponsored distribution designed to enable scientific computing. Among its many applications, Scientific Linux is used with particle accelerators including the Large Hadron Collider at CERN.

**Open SUSE** was originally derived from Slackware, yet incorporates many aspects of Red Hat. While Open SUSE is desktop based and available to the general public, SUSE Linux Enterprise contains proprietary code and is sold as a server product.

**Debian** is more of a community effort (promotes the use of open source software and adherence to standards). Debian came up with its own package management system, based on the .deb file format. Red Hat leaves non Intel and AMD platform support to derivative projects, while Debian supports many of these platforms directly.

**Ubuntu** is the most popular Debian derived distribution.

**Linux Mint** was started as a fork of Ubuntu Linux, while still relying upon the Ubuntu repositories. There are various versions, all free of cost, but some include proprietary codecs, which can not be distributed without license restrictions in certain countries. Linux Mint is quickly supplanting Ubuntu as the world's most popular desktop Linux solution.

[Checkout this interactive Timeline](https://futurist.se/gldt/wp-content/uploads/12.10/gldt1210.svg)

## Some Good Videos

<iframe width="560" height="315" src="https://www.youtube.com/embed/aurDHyL7bTA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/jowCUo_UGts" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>





<!-- Ideas: Maybe we should give an overview here of all the things this course is going to cover. -->
<!-- Short introduction into each and how they are tight together. -->


<!-- This chapter needs a serious refactor. Maybe we should speak about the difference between graphics and non-graphics mode. Then difference between linux for a developer and linux as a server os. Best practices? -->

Linux can be used in one of two ways: Graphically and non-graphically.

<!-- Screenshots here -->

Most servers will be running in non-graphically mode, since people don't log into them directly, which makes a graphical interface a waste of resources.

If you log in through non-graphical mode, you're immediately at the console. If you log in graphically, then you'll need to launch a graphical shell which is just a text console with a window around it so that you can resize and move it around.

Linux doesn't care if you are on the keyboard of a computer or connecting over the Internet, so you'll want to take some basic precautions to make sure your data is safe and secure.

* Use strong passwords or passphrases
* Check for updates on a daily basis
* Use a firewall to block undesired connections
* Use an antivirus tool
* Use SSH (Secure Shell) for remote management



However, UNIX is now both a trademark and a specification, owned by an industry consortium called the Open Group. Only software that has been certified by the Open Group may call itself UNIX. Despite adopting all the requirements of the UNIX specification, Linux has not been certified, so Linux really isn’t UNIX! It’s just… UNIX-like.






<!-- https://www.youtube.com/watch?v=UjDQtNYxtbU -->
<!-- https://www.oreilly.com/library/view/running-linux-third/156592469X/ch01s02.html -->
<!-- https://www.digitalocean.com/community/tutorials/brief-history-of-linux -->