---
description: ....
title: Introduction to Linux
---

# Introduction to Linux

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

<!-- TODO - 1972, The C Programming Language -->
<!-- C is a general-purpose programming language developed by Dennis Ritchie at Bell Laboratories in 1972. -->

### August 12, 1981 - MSDOS

MS-DOS (Microsoft Disk Operating System) is an operating system for x86-based personal computers mostly developed by Microsoft. Collectively, MS-DOS, its rebranding as IBM PC DOS, and some operating systems attempting to be compatible with MS-DOS, are sometimes referred to as "DOS" (which is also the generic acronym for disk operating system). MS-DOS was the main operating system for IBM PC compatible personal computers during the 1980s.

![MSDOS Disks](./img/msdos_disks.jpg)

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

So that I can continue to use computers
without violating my principles,
I have decided to put together a sufficient body of
free software so that I will be able to get along
without any software that is not free.

...

One computer manufacturer has already offered to provide a machine.
But we could use more. One consequence you can expect if you donate
machines is that GNU will run on them at an early date.
The machine had better be able to operate in a residential area,
and not require sophisticated cooling or power.

...
```

[Full Post](./free_unix.md)

This first post by Richard started the free software revolution. Historically, most software has been issued under a closed-source license, meaning that you get the right to use the machine code, but cannot see the source code. The open source philosophy is that you have a right to obtain the software, and to modify it for your own use.

**Richard Stallman** (creator of GPL) was looking to create a truly free and open source alternative to the proprietary Unix system. He was working on the utilities and programs under the name **GNU**, a recursive acronym meaning "GNU's not Unix!".

![Richard Stallman](./img/richard_stallman.jpg)

### 1984 - GNU Project

It was when AT&T started to sell copies of Unix without source code that Richard Stallman and one of many students at MIT who had helped to code it, decided that enough was enough. He was convinced that free software was what the world needed and so he **left the MIT Artificial Intelligence Lab in 1984** and founded the **GNU project**, with the intention to create a completely open source version of Unix.

Although a GNU kernel project was underway, it turned out to be difficult going, and without a kernel, named **HURD**, the free and open source operating system dream could not be realized.

### March 1985, Dr. Dobbs Journal

[Dr. Dobb's Journal](https://www.drdobbs.com/) (DDJ) was a monthly magazine published in the United States by UBM Technology Group, part of UBM. It covered topics aimed at computer programmers. When launched in 1976, DDJ was the first regular periodical focused on microcomputer software, rather than hardware.

![Dr. Dobb's Journal](./img/drdobbs_first.png)

Dr. Dobb's Journal entire purpose was to **distribute Tiny Basic**, a dialect of the BASIC programming language that can fit into as little as 2 or 3 KB of memory. This small size made it invaluable in the early days of microcomputers in the mid-1970s, when typical memory size was only 4 to 8 KB. Tiny BASIC is an example of a free software project that existed before the free software movement.

In 1985 the [GNU Manifesto](https://www.drdobbs.com/open-source/the-gnu-manifesto/222200498) was published in Dr Dobb's Journal and this set out the philosophy:

```text
I consider that the Golden Rule requires that
if I like a program I must share it
with other people who like it.
Software sellers want to divide the users and conquer them,
making each user agree not to share with others.
I refuse to break solidarity with other users in this way.
I cannot in good conscience sign a nondisclosure
agreement or a software license agreement.

by Richard Stallman
```

In the same year Stallman set up the **Free Software Foundation**.

### 1987 - First Release of Minix

**Minix** (mini-Unix) is an open source operating system developed by **Andrew S. Tanenbaum**, professor emeritus of computer science at the Vrije Universiteit Amsterdam in the Netherlands, which he created as an example for his book "Operating Systems: Design and Implementation".

![Minix 2.0.0](./img/minix.jpg)

Minix is ​​partly based on Unix, but with a microkernel instead of the traditional monolithic kernel. The intention of Minix was that students could understand it in three months of study.

::: tip Microkernel vs Monolithic kernel
Basically a **monolithic kernel** is a single large process running entirely in a single address space. It is a single static binary file. All kernel services exist and execute in the kernel address space. The kernel can invoke functions directly. Examples of monolithic kernel based OSs: Unix, Linux.

With a microkernel, the kernel is broken down into separate processes, known as servers. Some of the servers run in kernel space and some run in user-space. All servers are kept separate and run in different address spaces. Servers invoke "services" from each other by sending messages via IPC (Interprocess Communication). This separation has the advantage that if one server fails, other servers can still work efficiently. Examples of microkernel based OSs: Mac OS X and Windows NT.
:::

Tanenbaum originally developed Minix for compatibility with the IBM PC and IBM PC/AT microcomputers (6 MHz Intel 80286 microprocessor) available at the time.

![IBM PC/AT](./img/ibm_pc_at.jpg)

<!-- Apparently some version of Minix is running on modern Intel CPU's as a management system (https://www.networkworld.com/article/3236064/minix-the-most-popular-os-in-the-world-thanks-to-intel.html -->

### Autumn 1990 - Linus Torvalds

In 1988, a young Finnish man entered the **Helsinki University** to study Computer Science. His name was **Linus Torvalds**. It would have been impossible to imagine that the operating system he would create would be eventually used by tens of millions of users across the globe.

![Linus Torvalds](./img/young_linus_torvalds.jpg)

Linus Torvalds was at the beginning of his third year of studies, in the autumn of 1990, when he first came in contact with Unix. The university had a short Unix course, which could only take 16 students because the university's MicroVAX hardware couldn't support more users.

![MicroVAX](./img/microvax.jpg)

::: tip MicroVAX
The MicroVAX was a family of low-cost minicomputers developed and manufactured by Digital Equipment Corporation (DEC). At introduction, the starting price of the MicroVAX 3800 was US$81,000 and that of the MicroVAX 3900 was US$120,200.
:::

Linus was particularly fond of the 80386, regarding it as "a lot better than any of the previous chips". Wanting to work with Minix, he decided to buy his first IBM compatible PC.

The Finnish university system allowed Linus to get a student loan. Since he was living with his mother at the time, Linus didn't have a high cost of living, so he invested part of his student loan for the PC. He also got Christmas money, and on January 5th, 1991, he bought the first PC.

![Linus' first PC minus the i387 co-processor](./img/linus_pc.png)

In the time that follows Linus wrote the basic components required for the operating system he wished to build just for fun:

* a simple 386-assembly task-switcher ("it switched between two processes that printed AAAA... and BBBB... respectively by using the timer-interrupt")
* a keyboard driver in assembler
* serial drivers
* a simple terminal program ("the same two processes... read and wrote to the console/serial lines")
* started using C
* harddisk driver ("seriously buggy")
* a small filesystem

So, he now had task-switching, a file system, and device drivers. This is an operating system in its simplest form. This was the birth of Linux. But it wasn't yet named so.

One subject that interested Linus on the newsgroups was the POSIX. POSIX stands for Portable Operating System Interface, and it is a set of standards to ensure compatibility between different Unix-like operating systems.

**Ari Lemmke**, a member of the Helsinki University staff, informed Linus that the POSIX wasn't free online, and Linus wasn't in the position to pay for it. However, Lemmke was also interested in kernels and operating systems. So, he decided to create a directory on the `ftp.funet.fi` server for Linus which he called `/pub/os/linux`.

Linux was Linus's working name. He didn't want to use it for the operating system because he didn't want people to think he was so egomaniac to name it after himself.

Unfortunately, the name he chose was awful. He wanted to call it **Freax** which was a portmanteau of **Free**, **Freak** and **x** (as an allusion to Unix). Fortunately, Ari Lemmke ignored the "Freax" nonsense and used the working name instead.

### August 25, 1991 - Linux goes Public

It was on the 25th of August in 1991 that **Linus Torvalds** posted the following message on the newsgroup `comp.os.minix`:

```text
Hello everybody out there using minix -

I'm doing a (free) operating system (just a hobby, won't be
big and professional like gnu) for 386(486) AT clones.
This has been brewing since april, and is starting to get ready.
I'd like any feedback on things people like/dislike in minix,
as my OS resembles it somewhat (same physical layout of
the file-system (due to practical reasons) among other things).

I've currently ported bash(1.08) and gcc(1.40),
and things seem to work. This implies that I'll get something
practical within a few months,
and I'd like to know what features most people would want.
Any suggestions are welcome,
but I won't promise I'll implement them :-)

Linus (torvalds@kruuna.helsinki.fi)

PS. Yes - it's free of any minix code, and it has a multi-threaded fs.
It is NOT portable (uses 386 task switching etc),
and it probably never will support anything other than AT-harddisks,
as that's all I have :-(.

- Linus Torvalds
```

::: tip bash
GNU Bash or simply Bash is a Unix shell and command language written by **Brian Fox** for the GNU Project as a free software replacement for the Bourne shell. First released in 1989, it has been used widely as the default login shell for most Linux distributions .[11]
:::

::: tip gcc
When it was first released in 1987, GCC 1.0 was named the **GNU C Compiler** since it only handled the C programming language. It was extended to compile C++ in December of that year. Later it was renamed to the **GNU Compiler Collection** as a compiler system produced by the GNU Project supporting various programming languages. GCC is a key component of the GNU toolchain and the standard compiler for most projects related to GNU and Linux, including the Linux kernel. The Free Software Foundation (FSF) distributes GCC under the GNU General Public License (GNU GPL). GCC has played an important role in the growth of free software, as both a tool and an example.
:::

When Linus Torvalds wanted to make an operating system himself in 1991, he was inspired by Minix, but wrote the code of the operating system itself. With additions from others via the internet, this resulted in the Linux kernel, which is a monolithic kernel and not a microkernel.

Originally, linux came with it's own custom license:

```text
This kernel is (C) 1991 Linus Torvalds, but all or part of it may be
redistributed provided you do the following:

- Full source must be available (and free), if not with the
  distribution then at least on asking for it.

- Copyright notices must be intact. (In fact, if you distribute
  only parts of it you may have to add copyrights, as there aren't
  (C)'s in all files.) Small partial excerpts may be copied
  without bothering with copyrights.

- You may not distibute this for a fee, not even "handling"
  costs.

Mail me at "torvalds@kruuna.helsinki.fi" if you have any questions.

Sadly, a kernel by itself gets you nowhere.
To get a working system you need a shell, compilers, a library etc.
These are separate parts and may be under
a stricter (or even looser) copyright. Most of the tools used
with linux are GNU software and are under the GNU copyleft.
These tools aren't in the distribution - ask me (or GNU)
for more info.
```

Which came with the [original release notes](./original_release_notes_linux.md).

You can download the original source of the first release at [https://mirrors.edge.kernel.org/pub/linux/kernel/Historic/](https://mirrors.edge.kernel.org/pub/linux/kernel/Historic/).

So Linus made the project open source and allowed people to freely use and contribute to the Linux kernel.

### Spring 1991 - X Window System

**Orest Zborowski** writes a patch **adding Unix sockets to Linux**. This allows Linux to run **Xfree86**. XFree86 is an implementation of the **X Window System** (`X11`, or simply `X`). It was originally written for Unix-like operating systems on IBM PC compatibles and was available for many other operating systems and platforms. It is free and open source software under the XFree86 License version 1.1.

X provides the basic framework for a GUI environment: drawing and moving windows on the display device and interacting with a mouse and keyboard. X does not mandate the user interface - this is handled by individual programs. As such, the visual styling of X-based environments varies greatly; different programs may present radically different interfaces.

X originated at the Project Athena at Massachusetts Institute of Technology (MIT) in 1984. The X protocol has been at version 11 (hence "X11") since September 1987.

![X Window System](./img/x-window-system.png)

In other words it allowed linux to have a graphical user interface instead of the terminal.

### Around 1991 / 1992 - The First Linux Distribution

Back in late 1991, when Linux first hit the Net, there were no distributions per se. The closest thing was **HJ Lu's Boot/Root** floppies. They were 5.25" diskettes that could be used to get a Linux system running. You booted from the boot disk and then, when prompted, inserted the root disk. After a while you got a command prompt.

![HJ Lu's Boot/Root](./img/boot_root.jpg)

### January 13, 1992 - Linux 0.12

In 1992, Linus suggested releasing the kernel under the GNU General Public License (GPL). He first announced this decision in the release notes of version 0.12. In the middle of December 1992 he published version 0.99 using the GNU GPL. Linux and GNU developers worked to integrate GNU components with Linux to make a fully functional and free operating system.

> "Best decision I ever made" -- Linus

In 1992, the GNU project also adapted GNU utilities for use with Linux, while they waited for the HURD kernel (original kernel for the GNU System).

Basically this translated into the system called "GNU/Linux" - a version of the GNU system which also contained Linux. The GNU/Linux system, in other words. Given that Linus was using several GNU tools (e.g., the GNU Compiler Collection, or GCC), the marriage of GNU and the Linux kernel was a perfect match. It was Linus Torvald's work - producing a working and viable kernel that he called Linux - that brought the complete operating system to life.

::: warning GNU/Linux vs Linux
Linux is the kernel: the program in the system that allocates the machine's resources to the other programs that you run. The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system. Linux is normally used in combination with the GNU operating system: the whole system is basically GNU with Linux added, or GNU/Linux.
:::

![Linus and Stallman](./img/linus_stallman.jpg)

### January 29 1992 - Tanenbaum flames Linus

Andrew Tanenbaum is a well-respected researcher who has made a very good living thinking about operating systems and OS design. In early 1992, noticing the way that the Linux discussion had taken over the discussion in `comp.os.minix`, he decided it was time to comment on Linux. This starts the whole debate known to the community as **the Tanenbaum/Linus "Linux is obsolete" debates**.

![Andrew Tanenbaum and Linus Torvalds](./img/tanenbaum_linus.png)

```text
From: ast@cs.vu.nl (Andy Tanenbaum)
Newsgroups: comp.os.minix
Subject: LINUX is obsolete
Date: 29 Jan 92 12:12:50 GMT

I was in the U.S. for a couple of weeks, so I haven't commented much on
LINUX (not that I would have said much had I been around), but for what
it is worth, I have a couple of comments now.

As most of you know, for me MINIX is a hobby, something that I do in the
evening when I get bored writing books and there are no major wars,
revolutions, or senate hearings being televised live on CNN. My real
job is a professor and researcher in the area of operating systems.

As a result of my occupation, I think I know a bit about where operating
are going in the next decade or so. Two aspects stand out:

1. MICROKERNEL VS MONOLITHIC SYSTEM
  Most older operating systems are monolithic, that is, the whole operating
  system is a single a.out file that runs in 'kernel mode.'  This binary
  contains the process management, memory management, file system and the
  rest. Examples of such systems are UNIX, MS-DOS, VMS, MVS, OS/360,
  MULTICS, and many more.

  The alternative is a microkernel-based system, in which most of the OS
  runs as separate processes, mostly outside the kernel.  They communicate
  by message passing.  The kernel's job is to handle the message passing,
  interrupt handling, low-level process management, and possibly the I/O.
  Examples of this design are the RC4000, Amoeba, Chorus, Mach, and the
  not-yet-released Windows/NT.

  While I could go into a long story here about the relative merits of the
  two designs, suffice it to say that among the people who actually design
  operating systems, the debate is essentially over.  Microkernels have won.
  The only real argument for monolithic systems was performance, and there
  is now enough evidence showing that microkernel systems can be just as
  fast as monolithic systems (e.g., Rick Rashid has published papers comparing
  Mach 3.0 to monolithic systems) that it is now all over but the shoutin'.

  MINIX is a microkernel-based system.  The file system and memory management
  are separate processes, running outside the kernel.  The I/O drivers are
  also separate processes (in the kernel, but only because the brain-dead
  nature of the Intel CPUs makes that difficult to do otherwise).  LINUX is
  a monolithic style system.  This is a giant step back into the 1970s.
  That is like taking an existing, working C program and rewriting it in
  BASIC.  To me, writing a monolithic system in 1991 is a truly poor idea.

2. PORTABILITY
  Once upon a time there was the 4004 CPU.  When it grew up it became an
  8008.  Then it underwent plastic surgery and became the 8080.  It begat
  the 8086, which begat the 8088, which begat the 80286, which begat the
  80386, which begat the 80486, and so on unto the N-th generation.  In
  the meantime, RISC chips happened, and some of them are running at over
  100 MIPS.  Speeds of 200 MIPS and more are likely in the coming years.
  These things are not going to suddenly vanish.  What is going to happen
  is that they will gradually take over from the 80x86 line.  They will
  run old MS-DOS programs by interpreting the 80386 in software.  (I even
  wrote my own IBM PC simulator in C, which you can get by FTP from
  ftp.cs.vu.nl =  192.31.231.42 in dir minix/simulator.)  I think it is a
  gross error to design an OS for any specific architecture, since that is
  not going to be around all that long.

  MINIX was designed to be reasonably portable, and has been ported from the
  Intel line to the 680x0 (Atari, Amiga, Macintosh), SPARC, and NS32016.
  LINUX is tied fairly closely to the 80x86.  Not the way to go.

Don't get me wrong, I am not unhappy with LINUX.  It will get all the people
who want to turn MINIX in BSD UNIX off my back.  But in all honesty, I would
suggest that people who want a **MODERN** "free" OS look around for a
microkernel-based, portable OS, like maybe GNU or something like that.

Andy Tanenbaum (ast@cs.vu.nl)

P.S. Just as a random aside, Amoeba has a UNIX emulator (running in user
space), but it is far from complete.  If there are any people who would
like to work on that, please let me know.  To run Amoeba you need a few 386s,
one of which needs 16M, and all of which need the WD Ethernet card.
```

You can read a summary of the whole discussing at [https://www.oreilly.com/openbook/opensources/book/appa.html](https://www.oreilly.com/openbook/opensources/book/appa.html).

### February 1992 - The First Real Linux Distro

The first real distribution was from the Manchester Computing Centre (MCC). Known as **MCC Interim Linux**, it was a collection of diskettes that, once installed on your system, let you have a basic Linux environment. It was console only, no X. Compared to Boot-Root it also contained all sorts of utilities that were pre-compiled and ready to go.

### April 1992 - Windows 3.1

Windows 3.1x is a series of 16-bit operating environments produced by Microsoft for use on personal computers, released on April 6, 1992. The series began with Windows 3.1, which was first sold during April 1992 as a successor to Windows 3.0. Subsequent versions were released between 1992 and 1993 until the series was superseded by the Windows 9x series starting in 1995 with Windows 95. During its lifespan, Windows 3.1 introduced several enhancements to the still MS-DOS-based platform, including improved system stability, expanded support for multimedia, TrueType fonts, and workgroup networking.

![Windows 3.1](./img/windows31.png)

### December 1992 - Yggdrasil

The **first commercial**, in the sense that it was developed for public consumption rather than in-house use only, Linux distribution was **Yggdrasil**. This also had the distinction of being the first "Live" Linux CD. You could boot from a diskette and run everything off the CD. This was back in days of 1x and 2x CD-ROM drive speeds so it wasn't exactly setting the world on fire. You could start X then literally go get a cup of coffee before it finished coming up. Yggdrasil had some nice features dealing with configuration, though, especially for the time. It was actually the first Linux distribution that came with a pre-configured X Window System.

![Yggdrasil](./img/yggdrasil.png)

### September 15 1993 - Debian 0.01

Debian, also known as Debian GNU/Linux, is a Linux distribution composed of free and open-source software, developed by the community-supported Debian Project, which was established by Ian Murdock on August 16, 1993. The first version, Debian 0.01, was released on September 15, 1993. The Debian Stable branch is the most popular edition for personal computers and servers, and is the basis for many other distributions.

Debian is one of the oldest operating systems based on the Linux kernel. Since its founding, Debian has been developed openly and distributed freely according to the principles of the GNU Project. Because of this, the Free Software Foundation sponsored the project from November 1994 to November 1995. When the sponsorship ended, the Debian Project formed the nonprofit organization Software in the Public Interest to continue financially supporting development.

### March 14 1994 - Linux kernel 1.0

Up until this point all Linux distributions were build around a kernel that didn't even hit the 1.0 version yet. Before 1.0 the kernel was still really buggy and unstable. It was very promising and highly functional but it was still buggy.

It was not only a technological milestone but more so a psychological point in time the moment the kernel was released as 1.0 with its stagering 176,250 lines of code.

### August 15 1994 - Some Jerk

On august 15, 1994, William R. Della Croce, Jr. (also known as Some Jerk) trademarked Linux and demanded 10% royalties from every company selling Linux or having Linux in its name. This was a serious problem at the moment because most of these companies did not have huge profit margins and therefore did not have the money to fight this.

The case got settled in 1997.

<!-- ### November 3 1994 - Red Hat -->

### Timeline

![Timeline, Christoph S.](./img/timeline.png)

## Why Linux is so Popular

Linux was originally developed as a free operating system for personal computers based on the Intel x86 architecture but has since been ported to more computer hardware platforms than any other operating system. This includes desktop PCs, servers, mainframes, supercomputers, smartphones, tablets, TVs, embedded systems, ...

Linux is often considered more secure than other operating systems. While it also has its flaws and has had many kernel vulnerabilities in the past, it becomes more secure by the day. This is mainly because of the community and its open nature. Linux is also less prone to malware than operating system's such as Microsoft Windows.

Linux does not have the beginner friendly reputation, but it is generally more performant, stable and personalizabel than most other operating systems.

## The meaning of Linux

The definition of the word Linux depends on the context in which it is used.

**Linux means the kernel of the system**, which is the central controller of everything that happens on the computer. People that say their computer "runs Linux" usually refer to the kernel and suite of tools that come with it, called the **distribution**.

Today there are many different variants of the GNU/Linux system (often called "distros"). Most of them include nonfree programs—their developers follow the "open source" philosophy associated with Linux rather than the "free software" philosophy of GNU. But there are also completely free GNU/Linux distros. The FSF supports computer facilities for a few of them.

Making a free GNU/Linux distribution is not just a matter of eliminating various nonfree programs. Nowadays, the usual version of Linux contains nonfree programs too. These programs are intended to be loaded into I/O devices when the system starts, and they are included, as long series of numbers, in the "source code" of Linux. Thus, maintaining free GNU/Linux distributions now entails maintaining a free version of Linux too.

Whether you use GNU/Linux or not, please don't confuse the public by using the name "Linux" ambiguously. Linux is the kernel, one of the essential major components of the system. The system as a whole is basically the GNU system, with Linux added. When you're talking about this combination, please call it "GNU/Linux".

## Common Linux Distributions

<!-- TODO - Expand this section -->

A Linux distribution is usually built around a package management system, which puts together the Linux kernel, free and open-source software, and often some proprietary software.

Linux is available in over 600 distributions (or an operating system based on the Linux kernel and supporting software and libraries). Some of the most popular and well-known distributions are listed below.

### Ubuntu

![Ubuntu](./img/ubuntu.png)

Ubuntu is probable the most popular Linux distribution at the moment. It's both attractive for a beginning Linux user as well as a hardened Linux guru. While popular as a desktop edition for developers it's also often used as a server OS because of it's LTS (Long Time Support) editions.

Like Debian, Ubuntu uses the DEB package manager, while later versions of Ubuntu also include Snap packages so that installing new software is a simple, straightforward process.

Ubuntu also has a massive user base, which means its has a highly active community on which new and advanced users can fall back for support. There are also plenty of derivatives like **Lubuntu** and **Xubuntu**.

### Red Hat

Red Hat started out as a simple distribution that introduced the Red Hat Package Manager (RPM). The developer eventually formed a company around it, which tried to commercialize a Linux desktop for business. Over time, Red Hat started to focus more on the server applications such as web and file serving, and released Red Hat Enterprise Linux, which was a paid service on a long release cycle.

<!-- #### CentOS -->

<!-- ![CentOS](./img/CentOS-7.jpg) -->

<!-- Because everything in Red Hat Enterprise Linux is open source, a project called CentOS came to be, that recompiled all the RHEL packages and gave them away for free. CentOS and others like it (such as Scientific Linux) are largely compatible with RHEL and integrate some newer software, but do not offer the paid support that Red Hat does. -->

<!-- **Scientific Linux** is an example of a specific use distribution based on Red Hat. The project is a Fermilab sponsored distribution designed to enable scientific computing. Among its many applications, Scientific Linux is used with particle accelerators including the Large Hadron Collider at CERN. -->

<!-- **Open SUSE** was originally derived from Slackware, yet incorporates many aspects of Red Hat. While Open SUSE is desktop based and available to the general public, SUSE Linux Enterprise contains proprietary code and is sold as a server product. -->

<!-- **Debian** is more of a community effort (promotes the use of open source software and adherence to standards). Debian came up with its own package management system, based on the .deb file format. Red Hat leaves non Intel and AMD platform support to derivative projects, while Debian supports many of these platforms directly. -->

<!-- **Ubuntu** is the most popular Debian derived distribution. -->

<!-- **Linux Mint** was started as a fork of Ubuntu Linux, while still relying upon the Ubuntu repositories. There are various versions, all free of cost, but some include proprietary codecs, which can not be distributed without license restrictions in certain countries. Linux Mint is quickly supplanting Ubuntu as the world's most popular desktop Linux solution. -->

<!-- [Checkout this interactive Timeline](https://futurist.se/gldt/wp-content/uploads/12.10/gldt1210.svg) -->

<!-- Red Hat -->
<!-- Suse -->
<!-- Debian -->
<!-- Raspbian -->
<!-- OpenWRT -->
<!-- Fedora -->
<!-- OpenSuse -->
<!-- Ubuntu -->
<!-- Kali -->
<!-- CentOS -->
<!-- Linux Mint -->
<!-- Elementary -->
<!-- Manjaro -->
<!-- Gentoo Linux -->
<!-- Parrot OS -->
<!-- Arch Linux -->

## Some Good Videos

<iframe width="560" height="315" src="https://www.youtube.com/embed/aurDHyL7bTA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/jowCUo_UGts" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- https://www.youtube.com/watch?v=UjDQtNYxtbU -->
<!-- https://www.oreilly.com/library/view/running-linux-third/156592469X/ch01s02.html -->
<!-- https://www.digitalocean.com/community/tutorials/brief-history-of-linux -->
<!-- https://www.cs.cmu.edu/~awb/linux.history.html -->
