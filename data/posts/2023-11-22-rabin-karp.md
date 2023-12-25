---
title: "Rabin-Karp Algorithm"
time: "2023-11-22"
tags: ["algorithm"]
summary: "It is designed to address the multiple pattern string matching problem."
---

The Rabin-Karp algorithm, also known as the Karp-Rabin algorithm, was introduced by _Richard M. Karp_ and _Michael O. Rabin_ in 1987. It is designed to address the multiple pattern string matching problem.

Its implementation is somewhat unconventional. It begins by computing the hash values of two strings and then determines whether there is a match by comparing these hash values.

## Algorithm Analysis and Implementation

Choosing an appropriate hash function is crucial. Assuming the text string is $t[0, n)$, and the pattern string is $p[0, m)$, where $0<m<n$, let $Hash(t[i,j])$ represent the hash value of the substring $t[i, j]$.

When $Hash(t[0, m-1])!=Hash(p[0,m-1])$, it is natural to compare $Hash(t[1, m])$. In this process, if we recalculate the hash value for the substring $t[1, m]$, it would require $O(n)$ time complexity, which is not cost-effective. Observing that there are m-1 overlapping characters between the substrings $t[0, m-1]$ and $t[1, m]$, we can use a rolling hash function. This reduces the time complexity of recalculation to $O(1)$.

The rolling hash function used in the Rabin-Karp algorithm primarily leverages the concept of [Rabin fingerprint](https://en.wikipedia.org/wiki/Rabin_fingerprint). For example, the formula to calculate the hash value of the substring $t[0, m-1]$ is as follows:

$$
Hash(t[0, m-1])=t[0]*b^{m-1}+t[1]*b^{m-2}+...+t[m-1]*b^0
\\
\tag{t[0] represents the ASCII code of the character}
$$

Here, $b$ is a constant. In Rabin-Karp, it is generally set to 256 because the maximum value of a character does not exceed 255. The formula above has an issue - hash values could overflow. To address this, we take the modulus, and the value should be as large as possible and preferably a prime number. Here, we take 101.

The formula to calculate the hash value of the substring $t[1, m]$ is then:

$$
Hash(t[1,m])=(Hash(t[0,m-1])-t[0]*b^{m-1})*b+t[m]*b^0\\\tag{Please compare with the previous formula}
$$

The complete code is as follows:

```cpp
#include <iostream>
#include <string.h>

using namespace std;

#define BASE 256
#define MODULUS 101

void RabinKarp(char t[], char p[])
{
    int t_len = strlen(t);
    int p_len = strlen(p);

    // For rolling hash
    int h = 1;
    for (int i = 0; i < p_len - 1; i++)
        h = (h * BASE) % MODULUS;

    int t_hash = 0;
    int p_hash = 0;
    for (int i = 0; i < p_len; i++)
    {
        t_hash = (BASE * t_hash + t[i]) % MODULUS;
        p_hash = (BASE * p_hash + p[i]) % MODULUS;
    }

    int i = 0;
    while (i <= t_len - p_len)
    {
        // Considering the possibility of hash collisions, we use memcmp for additional verification
        if (t_hash == p_hash && memcmp(p, t + i, p_len) == 0)
            cout << p << " is found at index " << i << endl;

        // Rolling hash
        t_hash = (BASE * (t_hash - t[i] * h) + t[i + p_len]) % MODULUS;

        // Avoiding negative values
        if (t_hash < 0)
            t_hash = t_hash + MODULUS;

        i++;
    }
}

int main()
{
    char t[100] = "It is a test, but not just a test";
    char p[10] = "test";

    RabinKarp(t, p);

    return 0;
}
```

The output is as follows:

```text
test is found at index 8
test is found at index 29
```

## Complexity Analysis

Let's examine the space complexity first, which is easily determined: $S(n)=O(1)$.

Now, consider the time complexity. Let the length of the text string be n and the pattern string be m. Preprocessing requires $O(m)$, and during matching, in the best case where there are no hash collisions, $T_{best}(n)=O(n-m)$. In the worst case, where there is a collision every time, $T_{worst}(n)=O((n-m)*m)$. In practical scenarios, n is often much larger than m, so the final complexity table is:

| $S_{n}$        | $O(1)$  |
| -------------- | ------- |
| $T_{best}(n)$  | $O(n)$  |
| $T_{worst}(n)$ | $O(mn)$ |

## Application Analysis

The primary application of the Rabin-Karp algorithm is in plagiarism detection for articles, such as the detection system used by [Semantic Scholar](https://www.semanticscholar.org/).

However, from the complexity data above, the Rabin-Karp algorithm does not seem to have a significant advantage. Is it practical for detecting text plagiarism? Feedback from actual usage results indicates that the time complexity for plagiarism detection is only $O(n)$. I believe this is mainly due to the following two points:

1. In real-life articles, the text data does not often exhibit as many hash collisions as we might imagine.
2. The original content in a submitted article is likely to be much larger than the plagiarized content. In other words, successful matches do not occur as frequently as we might imagine.

## References

- [Rabin–Karp algorithm](https://en.wikipedia.org/wiki/Rabin–Karp_algorithm)
- [Searching for Patterns | Set 3 (Rabin-Karp Algorithm)](https://www.geeksforgeeks.org/searching-for-patterns-set-3-rabin-karp-algorithm/)
- [Computer Algorithms: Rabin-Karp String Searching](http://www.stoimen.com/blog/2012/04/02/computer-algorithms-rabin-karp-string-searching/)
