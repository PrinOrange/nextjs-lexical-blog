---
title: "C/C++ Cross-Platform Compile-Macros"
tags: ["C", "C++"]
time: "2023-11-05"
summary: "When we compile some cross -platform programs, we will inevitably encounter _win32 __linux__ what is the macro of the compiler or the compiler environment.It indicates some information of the current platform environment to the compiler."
---

When we compile some cross -platform programs, we will inevitably encounter \_win32 , **Linux** What are the macroscopic macro of the compiler environment.There are many differences between \_win32 and win32 before.But there is a list here, making a memo.

For example, a code that can only be compiled under the Unix-Like platform in a set.If you compile the wrong error on the non-Unix-Like platform, then my code can add a macro to check whether it is a UNIX environment.If it is normally compiled, the error is thrown directly.

```text
#ifndef __unix__
#error This program should be complied and work in UNIX-LIKE platform.
#endif
```

The complete code is as follows:

```c
#ifndef __unix__
#error This program should be complied and work in UNIX-LIKE platform.
#endif

#include <stdio.h>

int main()
{
    printf("this is unix-like platform");
    return 0;
}
```

This code can be compiled normally in the Mac OS and Linux environments, and an error will be reported under Windows.

---

**Below is a macro list of a detection environment.**

Please send updates/corrections to <u><a href="mailto:predef-contribute@lists.sourceforge.net">predef-contribute</a></u>.

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/AIX_operating_system">AIX</a></u>**

| Type           | Macro       | Description             |
| -------------- | ----------- | ----------------------- |
| Identification | \_AIX       |                         |
| Version        | \_AIX'VR'   | V = VersionR = Revision |
| Identification | **TOS_AIX** | Defined by xlC          |

**Example**  
If `_AIX` is defined, then the following macros can be used to determine the version. Notice that the macros indicates the mentioned version or higher. For example, if `_AIX43` is defined, then `_AIX41` will also be defined.

| AIX Version | Macro        |
| ----------- | ------------ |
| 3.2.x       | \_AIX3_AIX32 |
| 4.1         | \_AIX41      |
| 4.3         | \_AIX43      |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Android_%28operating_system%29">Android</a></u>**

| Type           | Macro           | Format | Description                                                  |
| -------------- | --------------- | ------ | ------------------------------------------------------------ |
| Identification | **ANDROID**     |        |                                                              |
| Version        | **ANDROID_API** | V      | V = API VersionMust be included from \<android/api-level.h\> |

Notice that Android is based on Linux, and that the Linux macros also are defined for Android.  
**Example**

| Android Version | **ANDROID_API** |
| --------------- | --------------- |
| 1.0             | 1               |
| 1.1             | 2               |
| 1.5             | 3               |
| 1.6             | 4               |
| 2.0             | 5               |
| 2.0.1           | 6               |
| 2.1             | 7               |
| 2.2             | 8               |
| 2.3             | 9               |
| 2.3.3           | 10              |
| 3.0             | 11              |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/UTS_%28Mainframe_UNIX%29">Amdahl UTS</a></u>**

| Type           | Macro |
| -------------- | ----- |
| Identification | UTS   |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/AmigaOS">AmigaOS</a></u>**

| Type           | Macro       | Description      |
| -------------- | ----------- | ---------------- |
| Identification | AMIGA       |                  |
| Identification | **amigaos** | Defined by GNU C |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Domain/OS">Apollo AEGIS</a></u>**

| Type           | Macro |
| -------------- | ----- |
| Identification | aegis |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Domain/OS">Apollo Domain/OS</a></u>**

| Type           | Macro  |
| -------------- | ------ |
| Identification | apollo |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Bada_%28operating_system%29">Bada</a></u>**  
Based on Nucleus OS.

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/BeOS">BeOS</a></u>**

| Type           | Macro    |
| -------------- | -------- |
| Identification | **BEOS** |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Bluegene">Blue Gene</a></u>**

| Type           | Macro            | Description                                        |
| -------------- | ---------------- | -------------------------------------------------- |
| Identification | **bg**           | All Blue Gene systemsDefined by XL C/C++ and GNU C |
| Version        | **bgq**          | Blue Gene/QDefined for XL C/C++ and GNU C          |
| Identification | **THW_BLUEGENE** | All Blue Gene systemsDefined by XL C/C++           |
| Version        | **TOS_BGQ**      | Blue Gene/QDefined by XL C/C++                     |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Bsd">BSD Environment</a></u>**

| Type           | Macro                                                         | Format | Description                                                |
| -------------- | ------------------------------------------------------------- | ------ | ---------------------------------------------------------- |
| Identification | **FreeBSD\_\_**NetBSD\_**\_OpenBSD\_\_**bsdi\_**\_DragonFly** |        |                                                            |
| Version        | BSD                                                           | YYYYMM | YYYY = YearMM = MonthMust be included from \<sys/param.h\> |
| Version        | BSD4_2BSD4_3BSD4_4                                            |        | Must be included from \<sys/param.h\>                      |
| Identification | \_SYSTYPE_BSD                                                 |        | Defined by DEC C                                           |

**Example**

| Version      | BSD    | Macro  |
| ------------ | ------ | ------ |
| 4.3 Net2     | 199103 |        |
| 4.4          | 199306 | BSD4_4 |
| 4.4BSD-Lite2 | 199506 |        |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/BSD/OS">BSD/OS</a></u>**

| Type           | Macro    |
| -------------- | -------- |
| Identification | **bsdi** |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Convex_Computer">ConvexOS</a></u>**

| Type           | Macro      |
| -------------- | ---------- |
| Identification | **convex** |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Cygwin">Cygwin Environment</a></u>**

| Type           | Macro      |
| -------------- | ---------- |
| Identification | **CYGWIN** |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Data_General">DG/UX</a></u>**

| Type           | Macro    |
| -------------- | -------- |
| Identification | DGUX     |
| Identification | **DGUX** |
| Identification | **dgux** |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/DragonFly_BSD">DragonFly</a></u>**

| Type           | Macro         |
| -------------- | ------------- |
| Identification | **DragonFly** |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Dynix">DYNIX/ptx</a></u>**

| Type           | Macro     |
| -------------- | --------- |
| Identification | _SEQUENT_ |
| Identification | sequent   |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/ECos">eCos</a></u>**

| Type           | Macro    |
| -------------- | -------- |
| Identification | \_\_ECOS |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/EMX_%28programming_environment%29">EMX Environment</a></u>**

| Type           | Macro   |
| -------------- | ------- |
| Identification | **EMX** |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Freebsd">FreeBSD</a></u>**

| Type           | Macro               | Format | Description                       |
| -------------- | ------------------- | ------ | --------------------------------- |
| Identification | **FreeBSD**         |        |                                   |
| Identification | **FreeBSD_kernel**  |        | From FreeBSD 8.3, 9.1, and 10.0.1 |
| Version        | BSD                 |        |                                   |
| Version        | **FreeBSD**         | V      | V = Version                       |
| Version        | \_\_FreeBSD_version | ?      | Must be included from osreldate.h |

**Example**

| FreeBSD     | **FreeBSD** | \_\_FreeBSD_version |
| ----------- | ----------- | ------------------- |
| 1.x         | 1           |                     |
| 2.0-RELEASE | 2           | 119411              |
| 2.2-RELEASE | 2           | 220000              |
| 3.0-RELEASE | 3           | 300005              |
| 4.0-RELEASE | 4           | 400017              |
| 4.5-RELEASE | 4           | 450000              |

For more information see the <u><a rel="nofollow noreferrer" class="wrap external" href="http://www.freebsd.org/doc/en_US.ISO8859-1/books/porters-handbook/freebsd-versions.html">FreeBSD porters handbook</a></u>.  
**GNU aka <u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/GNU/Hurd">GNU/Hurd</a></u>**  
The official name of this operating system is GNU. Hurd is the kernel in the GNU operating system. It is often listed as GNU/Hurd since there is also GNU/Linux and GNU/kFreeBSD, which are most of the GNU operating system with the Linux and FreeBSD kernels respectively.

| Type           | Macro          |
| -------------- | -------------- |
| Identification | **GNU** 1      |
| Identification | **gnu_hurd** 1 |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/GNU/kFreeBSD">GNU/kFreeBSD</a></u>**  
GNU/kFreeBSD is one of the Debian distros that is based on the FreeBSD kernel rather than the Linux or Hurd kernels.

| Type           | Macro                           |
| -------------- | ------------------------------- |
| Identification | **FreeBSD_kernel** && **GLIBC** |

Notice that FreeBSD also defines `__FreeBSD_kernel__` so the `__GLIBC__` macro must be checked to distinguish it.  
**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/GNU/Linux">GNU/Linux</a></u>**

| Type           | Macro         |
| -------------- | ------------- |
| Identification | **gnu_linux** |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/HI-UX">HI-UX MPP</a></u>**

| Type           | Macro       |
| -------------- | ----------- |
| Identification | \_\_hiuxmpp |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/HP-UX">HP-UX</a></u>**

| Type           | Macro    | Description       |
| -------------- | -------- | ----------------- |
| Identification | \_hpux   | Defined by HP UPC |
| Identification | hpux     |                   |
| Identification | \_\_hpux |                   |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/IBM_i">IBM OS/400</a></u>**

| Type           | Macro     |
| -------------- | --------- |
| Identification | **OS400** |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Integrity_%28operating_system%29">INTEGRITY</a></u>**

| Type           | Macro         |
| -------------- | ------------- |
| Identification | \_\_INTEGRITY |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Interix">Interix Environment</a></u>**

| Type           | Macro       | Description                        |
| -------------- | ----------- | ---------------------------------- |
| Identification | \_\_INTERIX | Defined by GNU C and Visual Studio |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Irix">IRIX</a></u>**

| Type           | Macro   |
| -------------- | ------- |
| Identification | sgi     |
| Identification | \_\_sgi |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Linux_kernel">Linux kernel</a></u>**  
Systems based on the Linux kernel define these macros. There are two major Linux-based operating systems: <u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/GNU/Linux">GNU/Linux</a></u> and<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Android">Android</a></u>, and numerous others like <u><a rel="nofollow noreferrer" class="wrap external" href="http://www.angstrom-distribution.org/">Ångström</a></u> or <u><a rel="nofollow noreferrer" class="wrap external" href="http://www.openembedded.org/">OpenEmbedded</a></u>

| Type           | Macro     | Description                    |
| -------------- | --------- | ------------------------------ |
| Identification | **linux** | 1                              |
| Identification | linux     | Obsolete (not POSIX compliant) |
| Identification | \_\_linux | Obsolete (not POSIX compliant) |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/LynxOS">LynxOS</a></u>**

| Type           | Macro    |
| -------------- | -------- |
| Identification | **Lynx** |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Mac_OS">MacOS</a></u>**

| Type           | Macro                 | Description                            |
| -------------- | --------------------- | -------------------------------------- |
| Identification | macintosh             | Mac OS 9                               |
| Identification | Macintosh             | Mac OS 9                               |
| Identification | **APPLE** && **MACH** | Mac OS XDefined by GNU C and Intel C++ |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/OS-9">Microware OS-9</a></u>**

| Type           | Macro      | Description               |
| -------------- | ---------- | ------------------------- |
| Identification | \_\_OS9000 | Defined by Ultimate C/C++ |
| Identification | \_OSK      | Defined by Ultimate C/C++ |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Minix">MINIX</a></u>**

| Type           | Macro     |
| -------------- | --------- |
| Identification | \_\_minix |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Morphos">MorphOS</a></u>**

| Type           | Macro       |
| -------------- | ----------- |
| Identification | **MORPHOS** |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/MPE">MPE/iX</a></u>**

| Type           | Macro     |
| -------------- | --------- |
| Identification | mpeix     |
| Identification | \_\_mpexl |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/MS-DOS">MSDOS</a></u>**

| Type           | Macro     |
| -------------- | --------- |
| Identification | MSDOS     |
| Identification | **MSDOS** |
| Identification | \_MSDOS   |
| Identification | **DOS**   |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Netbsd">NetBSD</a></u>**

| Type           | Macro              | Format     | Description                                                                                                                |
| -------------- | ------------------ | ---------- | -------------------------------------------------------------------------------------------------------------------------- |
| Identification | **NetBSD**         |            |                                                                                                                            |
| Version        | BSD                |            |                                                                                                                            |
| Version        | NetBSD'V'\_'R'     |            | V = VersionR = RevisionMust be included from \<sys/param.h\>                                                               |
| Version        | **NetBSD_Version** | VVRRAAPP00 | VV = VersionRR = RevisionAA = ReleasePP = PatchFrom NetBSD 1.2D (?) until NetBSD 2.0HMust be included from \<sys/param.h\> |
| Version        | **NetBSD_Version** | VVRR00PP00 | VV = VersionRR = RevisionPP = PatchFrom NetBSD 2.99.9Must be included from \<sys/param.h\>                                 |

**Example**

| NetBSD | **NetBSD_Version** | Macro         |
| ------ | ------------------ | ------------- |
| 0.8    |                    | NetBSD0_8     |
| 0.9    |                    | NetBSD0_9     |
| 1.0    |                    | NetBSD1_0 = 1 |
| 1.0A   |                    | NetBSD1_0 = 2 |
| 1.2D   | 102040000          |               |
| 1.2.1  | 102000100          |               |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/NonStop">NonStop</a></u>**

| Type           | Macro      |
| -------------- | ---------- |
| Identification | \_\_TANDEM |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Nucleus_RTOS">Nucleus RTOS</a></u>**

| Type           | Macro       |
| -------------- | ----------- |
| Identification | **nucleus** |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Openbsd">OpenBSD</a></u>**

| Type           | Macro           | Format | Description                                              |
| -------------- | --------------- | ------ | -------------------------------------------------------- |
| Identification | **OpenBSD**     |        |                                                          |
| Version        | BSD             |        |                                                          |
| Version        | OpenBSD'V'\_'R' |        | V = VersionR = RevisionMust be included from sys/param.h |

**Example**

| OpenBSD | Macro      |
| ------- | ---------- |
| 3.1     | OpenBSD3_1 |
| 3.9     | OpenBSD3_9 |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/OS/2">OS/2</a></u>**

| Type           | Macro       |
| -------------- | ----------- |
| Identification | OS2         |
| Identification | \_OS2       |
| Identification | **OS2**     |
| Identification | **TOS_OS2** |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Palmos">Palm OS</a></u>**

| Type           | Macro      | Description                   |
| -------------- | ---------- | ----------------------------- |
| Identification | **palmos** | Defined by GNU C in PRC-Tools |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Plan_9_from_Bell_Labs">Plan 9</a></u>**

| Type           | Macro  |
| -------------- | ------ |
| Identification | EPLAN9 |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/DC/OSx">Pyramid DC/OSx</a></u>**

| Type           | Macro |
| -------------- | ----- |
| Identification | pyr   |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/QNX">QNX</a></u>**

| Type           | Macro                 | Format     | Description                                                                                                              |
| -------------- | --------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------ |
| Identification | **QNX**               |            | QNX 4.x                                                                                                                  |
| Identification | **QNXNTO**            |            | QNX 6.x                                                                                                                  |
| Version        | \_NTO_VERSION         | VRR        | V = VersionRR = RevisionOnly available when **QNXNTO** is defined.Must be included from sys/neutrino.h/                  |
| Version        | BBNDK_VERSION_CURRENT | VVRRRRPPPP | V = VersionRRRR = RevisionPPPP = PatchOnly available on Blackberry 10From Blackberry 10.1.0Must be included from bbndk.h |

**Example**

| QNX | \_NTO_VERSION |
| --- | ------------- |
| 6.2 | 620           |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Reliant_UNIX">Reliant UNIX</a></u>**

| Type           | Macro |
| -------------- | ----- |
| Identification | sinux |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/SCO_OpenServer">SCO OpenServer</a></u>**

| Type           | Macro    | Description      |
| -------------- | -------- | ---------------- |
| Identification | M_I386   | Defined by GNU C |
| Identification | M_XENIX  | Defined by GNU C |
| Identification | \_SCO_DS |                  |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Solaris_Operating_Environment">Solaris</a></u>**

| Type           | Macro                 | Description                                                                                                 |
| -------------- | --------------------- | ----------------------------------------------------------------------------------------------------------- |
| Identification | sun                   |                                                                                                             |
| Identification | \_\_sun               |                                                                                                             |
| Version        | \__'System'_'Version' | System = uname -sVersion = uname -rAny illegal character is replaced by an underscore.Defined by Sun Studio |

Use the SVR4 macros to distinguish between Solaris and SunOS.  
#if defined(sun) || defined(**sun) # if defined(**SVR4) || defined(**svr4**) /_ Solaris _/ # else /_ SunOS _/ # endif #endif  
**Example**

| Solaris | Macro         |
| ------- | ------------- |
| 2.7     | \_\_SunOS_5_7 |
| 8       | \_\_SunOS_5_8 |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Stratus_VOS">Stratus VOS</a></u>**

| Type           | Macro   | Format | Description |
| -------------- | ------- | ------ | ----------- |
| Identification | **VOS** |        |             |
| Version        | **VOS** | V      | V = Version |

Notice that the `__VOS__` macro is defined by the compiler, but as several compilers can co-exist in the same OS release, the version number is not reliable.  
**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/UNIX_System_V">SVR4 Environment</a></u>**

| Type           | Macro          | Description     |
| -------------- | -------------- | --------------- |
| Identification | **sysv**       |                 |
| Identification | \_\_SVR4       |                 |
| Identification | **svr4**       |                 |
| Identification | \_SYSTYPE_SVR4 | Defined on IRIX |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Syllable_Desktop">Syllable</a></u>**

| Type           | Macro        |
| -------------- | ------------ |
| Identification | **SYLLABLE** |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Symbian_OS">Symbian OS</a></u>**

| Type           | Macro         |
| -------------- | ------------- |
| Identification | **SYMBIAN32** |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Digital_UNIX">Tru64 (OSF/1)</a></u>**

| Type           | Macro   |
| -------------- | ------- |
| Identification | **osf** |
| Identification | \_\_osf |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Ultrix">Ultrix</a></u>**

| Type           | Macro      |
| -------------- | ---------- |
| Identification | ultrix     |
| Identification | \_\_ultrix |
| Identification | **ultrix** |
| Identification | unix & vax |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/UNICOS">UNICOS</a></u>**

| Type           | Macro    | Format | Description |
| -------------- | -------- | ------ | ----------- |
| Identification | \_UNICOS |        |             |
| Version        | \_UNICOS | V      | V = Version |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Unicos">UNICOS/mp</a></u>**

| Type           | Macro            | Description |
| -------------- | ---------------- | ----------- |
| Identification | \_CRAY\_\_crayx1 |             |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Unix">UNIX Environment</a></u>**

| Type           | Macro    |
| -------------- | -------- |
| Identification | **unix** |
| Identification | \_\_unix |

Notice that not all compilers defines these macros, e.g. the xlC or the DEC C/C++ compiler, so it may be better to use the POSIX or X/Open standard macros instead.  
**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/UnixWare">UnixWare</a></u>**

| Type           | Macro       |
| -------------- | ----------- |
| Identification | sco         |
| Identification | \_UNIXWARE7 |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/UWIN">U/Win Environment</a></u>**

| Type           | Macro  |
| -------------- | ------ |
| Identification | \_UWIN |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Vms">VMS</a></u>**

| Type           | Macro       | Format    | Description                                                                                      |
| -------------- | ----------- | --------- | ------------------------------------------------------------------------------------------------ |
| Identification | VMS         |           |                                                                                                  |
| Identification | \_\_VMS     |           |                                                                                                  |
| Version        | \_\_VMS_VER | VVRREPPTT | VV = VersionRR = RevisionE = Edit numberPP = Patch (01 = A, ... 26 = Z)TT = Type (22 = official) |

**Example**

| VMS    | \_\_VMS_VER |
| ------ | ----------- |
| 6.1    | 60100022    |
| 6.2    | 60200022    |
| 6.2-1I | 60210922    |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/VxWorks">VxWorks</a></u>**

| Type           | Macro               | Description                                      |     |
| -------------- | ------------------- | ------------------------------------------------ | --- |
| Identification | **VXWORKS**         | Defined by GNU C and Diab (from ?)               |     |
| Identification | \_\_vxworks         | Defined by GNU C and Diab (from ?)               |     |
| Version        | \_WRS_VXWORKS_MAJOR | VersionMust be included from version.h           |     |
| Version        | \_WRS_VXWORKS_MINOR | RevisionMust be included from version.h          |     |
| Version        | \_WRS_VXWORKS_MAINT | Patch/maintenanceMust be included from version.h |     |
| Mode           | **RTP**             | For real-time mode                               |     |
| Mode           | \_WRS_KERNEL        | For kernel mode                                  |     |

**Example**

| VxWorks | \_WRS_VXWORKS_MAJOR | \_WRS_VXWORKS_MINOR | \_WRS_VXWORKS_MAINT |
| ------- | ------------------- | ------------------- | ------------------- |
| 6.2     | 6                   | 2                   | 0                   |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Category:Microsoft_Windows">Windows</a></u>**

| Type           | Macro       | Description                                       |
| -------------- | ----------- | ------------------------------------------------- |
| Identification | \_WIN16     | Defined for 16-bit environments 1                 |
| Identification | \_WIN32     | Defined for both 32-bit and 64-bit environments 1 |
| Identification | \_WIN64     | Defined for 64-bit environments 1                 |
| Identification | **WIN32**   | Defined by Borland C++                            |
| Identification | **TOS_WIN** | Defined by xlC                                    |
| Identification | **WINDOWS** | Defined by Watcom C/C++                           |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Windows_CE">Windows CE</a></u>**

| Type           | Macro              | Format | Description                           |
| -------------- | ------------------ | ------ | ------------------------------------- |
| Identification | \_WIN32_WCE        |        | Defined by Embedded Visual Studio C++ |
| Version        | \_WIN32_WCE        | VRR    | V = VersionR = Revision               |
| Identification | WIN32*PLATFORM*'P' |        | P = Platform                          |
| Version        | WIN32*PLATFORM*'P' | V      | P = PlatformV = Version               |

**Example**

| Version | \_WIN32_WCE |
| ------- | ----------- |
| 2.01    | 201         |
| 2.11    | 211         |
| 3.0     | 300         |
| 4.0     | 400         |
| 4.1     | 410         |
| 4.2     | 420         |
| 5.0     | 501         |

| Platform            | Macro                  | Value |
| ------------------- | ---------------------- | ----- |
| H/PC 2000           | WIN32_PLATFORM_HPC2000 |       |
| H/PC Pro 2.11       | WIN32_PLATFORM_HPCPRO  | 211   |
| H/PC Pro 3.0        | WIN32_PLATFORM_HPCPRO  | 300   |
| Pocket PC           | WIN32_PLATFORM_PSPC    | 1     |
| Pocket PC 2002      | WIN32_PLATFORM_PSPC    | 310   |
| Windows Mobile 2003 | WIN32_PLATFORM_PSPC    | 400   |
| Smartphone 2002     | WIN32_PLATFORM_WFSP    | 100   |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Bristol_Technology_Inc.">Wind/U Environment</a></u>**

| Type           | Macro          | Format   | Description                         |
| -------------- | -------------- | -------- | ----------------------------------- |
| Identification | \_WINDU_SOURCE |          |                                     |
| Version        | \_WINDU_SOURCE | 0xVVRRPP | VV = VersionRR = RevisionPP = Patch |

**Example**

| Wind/U | \_WINDU_SOURCE |
| ------ | -------------- |
| 3.1.2  | 0x030102       |

**<u><a rel="nofollow noreferrer" class="wrap external" href="http://en.wikipedia.org/wiki/Z/OS">z/OS</a></u>**

| Type           | Macro       | Description |
| -------------- | ----------- | ----------- |
| Identification | **MVS**     | Host        |
| Identification | **HOS_MVS** | Host        |
| Identification | **TOS_MVS** | Target      |
