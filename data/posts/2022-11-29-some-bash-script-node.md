---
title: "Some basic bash-script code block"
time: "2022-11-29"
tags: ["linux"]
summary: "Some basic bash-script code example. It might be help if writing some temporary work-scripts."
---

### Assignment and Substitution

```bash
a=375
hello=$a
```

### Variables

1. Built-in Variables  
   For example `$HOME $PWD ...`, for more info, see [environ(7)](https://man7.org/linux/man-pages/man7/environ.7.html)
2. Positional Parameters  
   **echo** $para1 $para2 $para3 $para4 $0 $1 $2 $3 $4 $@
3. Special Parameters  
   $? # exit status of a command, function, or the script itself

### Branches

```bash
if [ condition1 ];then
    command_series1
elif [ condition2 ];then
    command_series2
else
    default_command_series3
fi
```

### Loops

### range for

```bash
for arg in `seq 10`; do
  echo $arg
done
```

### for in C-like syntax

```bash
LIMIT=10
for ((a=1; a<=LIMIT; a++)); do
  echo "$a "
done
```

### **while**

```bash
LIMIT=10
a=1
while ((a<=LIMIT)); do
    echo "$a "
    ((a += 1))
done
```

### IO

```bash
command < input-file > output-file    # rewrite
command >> output-file             # appending
```

### Function

```bash
# define a function
function fun_name(){
    command...
}
## or
fun_name(){ # arg1 arg2 arg3
    command...
}


# apply a function
fun_name $arg1 $arg2 $arg3


# dereference
fun_name(){ # arg1
    eval "$1=hello"
}
fun_name arg1
## the above code block is equivalent to
arg1=hello
```

### Debugging

1. take good use of sh(1)  
   for example:  
   sh -n script: checks for syntax  
   sh -v script: echo each command before executing it  
   sh -x script: echo the result of each command in an abbreviated manner
2. use echo
3. use trap

### Parallel

use GNU parallel

### Script with Style

1. Comment your code
2. Avoid using magic number
3. Use exit codes in a systematic and meaningful way
4. Use standardized parameter flags for script invocation
