---
title: "Joseph Circle Problem"
time: "2023-11-21"
tags: ["algorithm"]
summary: "A description, analysis and solution for joseph circle problem."
---

## Problem Description

The Josephus problem is a classic mathematical problem that describes the following scenario:

There are $n$ people standing in a circle. Starting from a certain person, they count off in sequence, and every $m$-th person steps out of the circle. The counting and elimination process continues, looping back to the next person when the end of the circle is reached. This continues until only one person remains. The problem is to determine the initial position of the last person remaining in the circle.

For example, when $n=7$ and $m=3$, the order of elimination is: $3, 6, 2, 7, 5, 1$. The last person remaining is at position $4$.

## Solution

The Josephus problem can be solved using either recursion or mathematical formulas. The recursive solution assumes knowledge of the solution for $n-1$ people, denoted as $f(n-1, m)$, and then calculates the solution for $n$ people using the formula:

$
f(n, m) = (f(n-1, m) + m) \% n
$

Here, $\%$ denotes the modulo operation. The base case is $f(1, m) = 0$, representing the solution when there is only one person.

The mathematical formula solution is derived based on the recurrence relation, resulting in the same formula:

$
f(n, m) = (f(n-1, m) + m) \% n
$

## Programming Implementation

When it comes to solving the Josephus problem, dynamic programming is an effective approach. Here is an example C code implementing dynamic programming to solve the Josephus problem:

```c
#include <stdio.h>

int josephus(int n, int m) {
    int dp[n + 1];
    dp[1] = 0; // Initial position when there is only one person

    for (int i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + m) % i;
    }

    return dp[n];
}

int main() {
    int n = 7; // Total number of people
    int m = 3; // Count off to m for elimination

    int lastPerson = josephus(n, m);
    printf("The last person remaining is: %d\n", lastPerson + 1); // Adding 1 due to 0-based indexing

    return 0;
}
```

In the above code, we use a dynamic programming array `dp` to store the next position after each person is eliminated. Through iteration, we can find the initial position of the last person remaining in the circle. In the `main` function, we set the total number of people `n` and the count to `m` for elimination. Then, we call the `josephus` function to calculate the position of the last person remaining and print the result.

Note that we assume people's positions start from 1, while array indices start from 0. Therefore, when printing the position of the last person remaining, we need to add 1.

Using dynamic programming provides an efficient solution to the Josephus problem, avoiding the repetitive calculations of recursion and improving code performance.
