---
title: "Taylor formula, taylor theorem, taylor series, taylor expansion"
subtitle: ""
summary: "This article mainly introduces the content and connection between the four concepts of Taylor's formula, Taylor's theorem, Taylor series and Taylor's expansion."
coverURL: ""
time: "2024-03-06"
tags: ["mathematics"]
noPrompt: false
pin: false
allowShare: true
---

## Taylor Formula

If the function $f(x)$ is differentiable at point $x_{0}$, i.e.,

$$
\lim_{x \rightarrow x_{0}}{\frac{f(x)-f(x_{0})}{x-x_{0}}}=f'(x_{0})
$$

which is also expressed as

$$
\lim_{x \rightarrow x_{0}}{\frac{f(x)-f(x_{0})}{x-x_{0}}}-f'(x_{0})=0
$$

Rearranging gives

$$
\lim_{x \rightarrow x_{0}}{\frac{f(x)-f(x_{0})-f'(x_{0})(x-x_{0})}{x-x_{0}}}=0
$$

Thus,

$$
f(x)-f(x_{0})-f'(x_{0})(x-x_{0})=o(x-x_{0})(x\rightarrow x_{0})
$$

Rearranging terms yields

$$
f(x)=f(x_{0})+f'(x_{0})(x-x_{0})+o(x-x_{0})(x\rightarrow x_{0})
$$

This implies that near the point $x*{0}$, we can approximate the function $f(x)$ with a first-degree polynomial $f(x*{0})+f'(x*{0})(x-x*{0})$, with an error of $(x-x*{0})$ as a higher-order infinitesimal. Sometimes, such an approximation may be crude, indicating a relatively large error. Thus, naturally, we wonder if we can approximate $f(x)$ using a higher-degree $n$ polynomial to make the error $o((x-x*{0})^{n})$.

For a polynomial function

$$
f_{n}(x)=a_{0}+a_{1}(x-x_{0})+a_{2}((x-x_{0})^{2})+...+a_{n}((x-x_{0})^{n})
$$

By successively taking its derivatives at $x_{0}$, we obtain

$$
f_{n}(x_{0})=a_{0}    \\
f_{n}'(x_{0})=a_{1}   \\
f_{n}''(x_{0})=2!a_{2}  \\
... \\
f_{n}^{(n)}(x_{0})=n!a_{n}
$$

Therefore,

$$
a_{0}=f_{n}(x_{0})  \\
a_{1}=\frac{f_{n}'(x_{0})}{1!} \\
a_{2}=\frac{f_{n}''(x_{0})}{2!} \\
a_{n}=\frac{f_{n}^{(n)}(x_{0})}{n!}
$$

Thus, the coefficients of the polynomial function $f*{n}(x)$ are uniquely determined by its derivatives at point $x*{0}$. This insight inspires us that for a general function $f(x)$, if $f(x)$ has derivatives up to $n$th order at point $x_{0}$, then these derivatives uniquely determine an $n$th degree polynomial

$$
T_{n}(x)=f(x_{0})+\frac{f'(x_{0})}{1!}(x-x_{0})+\frac{f''(x_{0})}{2!}(x-x_{0})^{2} \\ +...+\frac{f^{(n)}(x_{0})}{n!}(x-x_{0})^{n}
$$

This polynomial is called the **Taylor polynomial** of function $f(x)$ at point $x*{0}$, and the coefficients of $T*{n}(x)$

$$
\frac{f^{(k)}(x_{0})}{k!}(k=1,2,...,n)
$$

are termed as **Taylor coefficients**.

It is evident that the function $f(x)$ and its Taylor polynomial $T*{n}(x)$ have the same function values and derivatives up to the $n$th order at point $x*{0}$, i.e.,

$$
f^{(k)}(x_{0})=T_{n}^{(k)}(x_{0}),\ k=0,1,2,...,n.
$$

Returning to our conjecture, can we prove $f(x)=T*{n}(x)+o((x-x*{0})^{n})$? If this holds, then when approximating function $f(x)$ with the Taylor polynomial $T*{n}(x)$, the error will be as desired, i.e., an error term higher order than $(x-x*{0})^{n}$.

**Theorem:** If the function $f(x)$ has derivatives up to $n$th order at point $x_{0}$, then

$$
f(x)=T_{n}(x)+ o((x-x_{0})^{n})
$$

i.e.,

$$
f(x)=f(x_{0})+\frac{f'(x_{0})}{1!}(x-x_{0})+\frac{f''(x_{0})}{2!}(x-x_{0})^{2} +\\...+\frac{f^{(n)}(x_{0})}{n!}(x-x_{0})^{n}+o((x-x_{0})^{n})
$$

**Proof:** Let

$$
R_{n}(x)=f(x)-T_{n}(x)\\
Q_{n}(x)=(x-x_{0})^{n}
$$

It is to be proven that

$$
\lim_{x \rightarrow x_{0}}{\frac{R_{n}(x)}{Q_{n}(x)}}=0
$$

Since

$$
f^{(k)}(x_{0})=T_{n}^{(k)}(x_{0}),\ k=0,1,2,...,n.
$$

Thus,

$$
R_{n}(x_{0})=R'_{n}(x_{0})=...=R^{(n)}_{n}(x_{0})=0
$$

and

$$
Q_{n}(x_{0})=Q'_{n}(x_{0})=...=Q^{(n-1)}_{n}(x_{0})=0 \\ Q^{(n)}_{n}(x_{0})=n!
$$

Because $f^{(n)}(x*{0})$ exists, \
Therefore, in a neighborhood $U(x*{0})$ of $x*{0}$, $f(x)$ has a $(n-1)$th order derivative $f^{(n-1)}(x)$. \
Thus, when $x\in U^{o}(x*{0})$ and $x\rightarrow x_{0}$, by repeatedly applying L'Hôpital's rule $n-1$ times, we have

$$
\lim_{x \rightarrow x_{0}}{\frac{R_{n}(x)}{Q_{n}(x)}}\\=\lim_{x \rightarrow x_{0}}{\frac{R'_{n}(x)}{Q'_{n}(x)}}\\=...\\=\lim_{x \rightarrow x_{0}}{\frac{R^{(n-1)}_{n}(x)}{Q^{(n-1)}_{n}(x)}}\\=\lim_{x \rightarrow x_{0}}{\frac{f^{(n-1)}(x)-f^{(n-1)}(x_{0})-f^{(n)}(x_{0})(x-x_{0})}{n(n-1)\cdot \cdot \cdot2(x-x_{0})}}\\=\frac{1}{n!}\lim_{x \rightarrow x_{0}}{\left[ \frac{f^{(n-1)}(x)-f^{(n-1)}(x_{0})}{x-x_{0}}-f^{(n)}(x_{0}) \right]}=0
$$

The expression proved by this theorem is termed as the **Taylor formula** for function $f(x)$ at $x_{0}$. Since its corresponding remainder term

$$
R_{n}(x)=f(x)-T_{n}(x)=o((x-x_{0})^{n})
$$

it is also called the **Taylor formula with Peano remainder**. Hence, this expression is also referred to as the **Taylor formula with Peano remainder**.

**Note:** The Taylor formula (with Peano remainder) is a qualitative expression. Although this expression holds for the entire domain of $f(x)$, its remainder term is meaningful only near the point $x_{0}$. Thus, this expression has strong limitations.

## Taylor's Theorem

In order to overcome the drawback of the Taylor formula above, which only allows for a qualitative analysis of functions, we need a more precise quantitative expression to characterize the function $f(x)$. A quantitative expression can more accurately delineate the range of errors when approximating the function $f(x)$ with a polynomial function.

**Theorem (Taylor's Theorem):** If the function $f(x)$ has continuous derivatives up to $n$th order on $[a, b]$ and has $(n+1)$ st order derivatives on $(a, b)$, then for any given $x, x_{0} \in [a, b]$, there exists at least one point $\xi \in (a, b)$ such that

$$
f(x)=f(x_{0})+f'(x_{0})(x-x_{0})+\frac{f''(x_{0})}{2!}(x-x_{0})^{2}+\dots+\frac{f^{(n)}(x_{0})}{n!}(x-x_{0})^{n}+\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_{0})^{n+1}
$$

**Analysis:** From the conditions of the theorem, we can see that the functions $f(x)$ and $(x-x_{0})^{n+1}$ can be "arbitrarily" used on $[a, b]$ using the Mean Value Theorem, hence the proof approach utilizes the Mean Value Theorem.

**Proof:** Let

$$
F(x)=f(x)-[f(x_{0})+f'(x_{0})(x-x_{0})+\dots+\frac{f^{(n)}(x_{0})}{n!}(x-x_{0})^{n}]  \\
G(x)=(x-x_{0})^{(n+1)}  \\
x,x_{0}\in[a,b]
$$

To prove

$$
\frac{F(x)}{G(x)}=\frac{f^{(n+1)}(\xi)}{(n+1)!},\xi\in(a,b)
$$

Clearly, $F(x)$ and $G(x)$ both have continuous derivatives up to $n$th order on $[a, b]$ and have $(n+1)$ st order derivatives on $(a, b)$. Also, $F(x_{0})=F'(x_{0})=\dots=F^{(n)}(x_{0})=0$, $G(x_{0})=G'(x_{0})=\dots=G^{(n)}(x_{0})=0$, and $G^{(n+1)}(x)=(n+1)!$. Hence,

$$
\frac{F(x)}{G(x)}=\frac{F(x)-F(x_{0})}{G(x)-G(x_{0})}=\frac{F'(\xi_{1})}{G'(\xi_{1})}=\frac{F'(\xi_{1})-F'(x_{0})}{G'(\xi_{1})-G'(x_{0})}=\frac{F''(\xi_{2})}{G''(\xi_{2})}=\dots \\=\frac{F^{(n)}(\xi_{n})}{G^{(n)}(\xi_{n})}=\frac{F^{(n)}(\xi_{n})-F^{(n)}(x_{0})}{G^{(n)}(\xi_{n})-G^{(n)}(x_{0})}=\frac{F^{(n+1)}(\xi)}{G^{(n+1)}(\xi)}=\frac{f^{(n+1)}(\xi)}{(n+1)!},\xi\in(a,b)
$$

Proof complete.

**Note:** Taylor's Theorem can be alternatively stated as follows: if $f(x)$ has \((n+1)\)st order derivatives in a neighborhood $U(x_{0})$ of $x_{0}$, then for any point $x$ in this neighborhood, we have

$$
f(x)=f(x_{0})+f'(x_{0})(x-x_{0})+\frac{f''(x_{0})}{2!}(x-x_{0})^{2} \\+ \dots+\frac{f^{(n)}(x_{0})}{n!}(x-x_{0})^{n}+\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_{0})^{n+1},\xi\in(a,b)
$$

This alternative description may be easier to remember.

The remainder term

$$
R_{n}(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_{0})^{n+1}
$$

is called the **Lagrange remainder**, hence Taylor's Theorem can also be called the **Taylor formula with Lagrange remainder**.

Furthermore, from the conditions of Taylor's Theorem, it can be seen that the conditions for its use are much stricter compared to the Taylor formula (which only requires $n$th order derivatives to exist at a point $x_{0}$), hence the conclusion obtained is stronger. Taylor's Theorem can be utilized to quantitatively approximate the function $f(x)$ using polynomial functions.

## Taylor Series

The Taylor series, compared to the two mathematical concepts mentioned earlier, appeared later in mathematical analysis because it requires a foundation in knowledge of series, power series, and function series. Since the knowledge of series and function series is not the focus of this article, interested readers can refer to any textbook on mathematical analysis for further study. Here, we only provide information closely related to the Taylor series, focusing on power series.

A power series is a type of function series with the simplest form, generated by the sequence of functions $\left\{ a_{n}(x-x_{0})^{n} \right\}$:

$$
\sum_{n=0}^{\infty}{a_{n}(x-x_{0})^{n}}=a_{0}+a_{1}(x-x_{0})+a_{2}(x-x_{0})^{2}+\dots+a_{n}(x-x_{0})^{n}+\dots
$$

To simplify the form, we only discuss the power series when $x_{0}=0$:

$$
\sum_{n=0}^{\infty}{a_{n}x^{n}}=a_{0}+a_{1}x+a_{2}x^{2}+\dots+a_{n}x^{n}+\dots
$$

Correspondingly, by replacing $x$ with $x-x_{0}$, we obtain the general case mentioned above. Hence, the power series mentioned below all refer to the power series:

$$
\sum_{n=0}^{\infty}{a_{n}x^{n}}
$$

When discussing a function series, the first thing we need to know is its domain of convergence. For a power series, its domain of convergence has a special characteristic, as illustrated in the following theorem:

**Abel's Theorem:** If the power series

$$
\sum_{n=0}^{\infty}{a_{n}x^{n}}
$$

converges at $x=\bar{x}\ne0$, then for any $x$ satisfying the inequality $\left| x \right|<\left| \bar{x} \right|$, the power series converges and converges absolutely. If the power series diverges at $x=\bar{x}\ne0$, then for any $x$ satisfying the inequality $\left| x \right|>\left| \bar{x} \right|$, the power series diverges.

**Proof:** Assume the series

$$
\sum_{n=0}^{\infty}{a_{n}\bar{x}^{n}}
$$

converges. By the necessary condition for the convergence of series, the sequence $\left\{ a_{n}\bar{x}^{n} \right\}$ converges to zero and is bounded. Hence, there exists a positive number $M$ such that

$$
\left| a_{n}\bar{x}^{n} \right|<M \quad (n=0,1,2,\dots)
$$

Furthermore, for any $x$ satisfying the inequality $\left| x \right|<\left| \bar{x} \right|$, $\left| \frac{x}{\bar{x}} \right|<1$. Thus,

$$
\left| a_{n}x^{n} \right|=\left| a_{n}\bar{x}^{n}\cdot\frac{x^{n}}{\bar{x}^{n}} \right|=\left| a_{n}\bar{x}^{n} \right|\left| \frac{x}{\bar{x}} \right|^{n}<Mr^{n}
$$

where $r=\left| \frac{x}{\bar{x}} \right|<1$. Since the series $\sum_{n=0}^{\infty}{Mr^{n}}$ converges, the power series $\sum_{n=0}^{\infty}{a_{n}x^{n}}$ converges absolutely when $\left| x \right|<\left| \bar{x} \right|$.

Conversely, if the power series diverges at $x=\bar{x}\ne0$, and if there exists $x_{0}$ such that $\left| x_{0} \right|>\left| \bar{x} \right|$ and the series $\sum_{n=0}^{\infty}{a_{n}x_{0}^{n}}$ converges, then according to the previous conclusion, the power series should converge absolutely at $x=\bar{x}$, which contradicts the assumption. Thus, for all $x$ satisfying the inequality $\left| x \right|>\left| \bar{x} \right|$, the power series $\sum_{n=0}^{\infty}{a_{n}\bar{x}^{n}}$ diverges.

In fact, Abel's theorem tells us about the convergence characteristics of power series, that is, the domain of convergence of a power series must be an interval centered at the origin. If we denote the length of this interval as $2R$, then $R$ is called the **radius of convergence** of the power series. We refer to $(-R,R)$ as the **interval of convergence** of the power series $\sum_{n=0}^{\infty}{a_{n}x^{n}}$.

**Theorem:** For the power series

$$
\sum_{n=0}^{\infty}{a_{n}x^{n}}
$$

If $\lim_{n \to \infty}{\sqrt[n]{\left| a_{n} \right|}} = \rho$, then when

- $(i)$ $0 < \rho < +\infty$, the radius of convergence $R = \frac{1}{\rho}$;
- $(ii)$ $\rho = 0$, the radius of convergence $R = +\infty$;
- $(iii)$ $p = +\infty$, the radius of convergence $R = 0$.

**Proof:** For the power series

$$
\sum_{n=0}^{\infty}{\left| a_{n}x^{n} \right|}
$$

Since

$$
\lim_{n \to \infty}{\sqrt[n]{\left| a_{n}x^{n} \right|}} = \lim_{n \to \infty}{\sqrt[n]{\left| a_{n} \right|}\left| x \right|} = \rho\left| x \right|
$$

According to the root test for positive series, when $\rho\left| x \right| < 1$, $\sum_{n=0}^{\infty}{\left| a_{n}x^{n} \right|}$ converges; when $\rho\left| x \right| > 1$ the power series diverges. Therefore, when $0 < \rho < +\infty$, from $\rho\left| x \right| < 1$, we obtain the radius of convergence $R = \frac{1}{\rho}$. When $\rho = 0$, $\rho\left| x \right| < 1$ holds for any $x$, so $R = +\infty$. When $\rho = +\infty$, $\rho\left| x \right| > 1$ holds for any $x$ except $x = 0$, so $R = 0$.

**Note:** If

$$
\lim_{n \to \infty}{\frac{\left| a_{n+1} \right|}{\left| a_{n} \right|}} = \rho
$$

then necessarily

$$
\lim_{n \to \infty}{\sqrt[n]{\left| a_{n} \right|}} = \rho
$$

Therefore, in finding the convergence radius, the ratio test can also be utilized. Additionally, in the above proof, we took the absolute value of each term of the original power series $\sum_{n=0}^{\infty}{a_{n}x^{n}}$ to obtain the power series $\sum_{n=0}^{\infty}{\left| a_{n}x^{n} \right|}$ for demonstration. Since the power series is absolutely convergent within its convergence interval, these two power series have exactly the same convergence radius. Thus, this proof method is effective.

Certainly, the method mentioned above for finding the convergence radius has limitations. If the limit $\lim_{n \to \infty}{\sqrt[n]{\left| a_{n} \right|}}$ does not exist (and is not positive infinity), then this method will fail. Therefore, in general mathematical analysis textbooks, a more general method for finding the convergence radius of a power series $\sum_{n=0}^{\infty}{a_{n}x^{n}}$ is given using the method of upper limits. Below is the theorem:

**(Extended) Theorem:** For the power series

$$
\sum_{n=0}^{\infty}{a_{n}x^{n}}
$$

If

$$
\varlimsup _{n \rightarrow \infty}{\sqrt[n]{\left| a_{n} \right|}}=\rho
$$

then when

- $(i)$ $0 < \rho < +\infty$, the radius of convergence $R = \frac{1}{\rho}$;
- $(ii)$ $\rho = 0$, the radius of convergence $R = +\infty$;
- $(iii)$ $p = +\infty$, the radius of convergence $R = 0$.

Since this upper limit always exists, any power series can be used to find the convergence radius using this theorem.

In practical problems of finding the convergence radius of power series, we may encounter "missing term" power series, such as the power series

$$
\sum_{n=1}^{\infty}{\frac{x^{2n}}{n-3^{2n}}}
$$

Such power series can certainly be found using the method of upper limits mentioned above, but a more effective method is to use the root test to deduce the convergence radius of the power series:

Consider

$$
\lim_{n \rightarrow \infty}{\sqrt[n]{\frac{x^{2n}}{\left| n-3^{2n} \right|}}}=\frac{1}{9}\lim_{n \rightarrow \infty}{\sqrt[n]{\frac{x^{2n}}{1-\frac{n}{3^{2n}}}}}=\frac{x^{2}}{9}
$$

According to the root test for positive series, when $\frac{x^{2}}{9} < 1$, i.e., $\left| x \right| < 3$, the power series converges, and when $\frac{x^{2}}{9} > 1$, i.e., $\left| x \right| > 3$, the power series diverges. When $x = \pm3$, the corresponding series are:

$$
\sum_{n=1}^{\infty}{\frac{3^{2n}}{n-3^{2n}}}
$$

Since

$$
\lim_{n \rightarrow \infty}{\frac{3^{2n}}{n-3^{2n}}}=-1 \neq 0
$$

the series

$$
\sum_{n=1}^{\infty}{\frac{3^{2n}}{n-3^{2n}}}
$$

diverges, indicating that the original series has a convergence interval of $(-3,3)$.

Power series, compared to general series of functions, exhibit two properties regarding uniform convergence:

**Property 1:** If the power series

$$
\sum_{n=0}^{\infty}{a_{n}x^{n}}
$$

has a convergence radius $R (> 0)$, then the power series uniformly converges on its convergence interval \((-R,R)\).

**Proof:** Let $[a,b]$ be any closed interval within $(-R,R)$, and denote

$$
\bar{x} = \max\left\{ \left| a \right|, \left| b \right| \right\} \in (-R,R)
$$

Then for any point $x$ in $[a,b]$, we have

$$
\left| a_{n}x^{n} \right| \leq \left| a_{n}\bar{x}^{n} \right|
$$

Since the power series converges absolutely at the point $\bar{x}$, by the M-test, the power series

$$
\sum_{n=0}^{\infty}{a_{n}x^{n}}
$$

uniformly converges on $[a,b]$. Since $[a,b]$ was chosen arbitrarily, the power series uniformly converges on the convergence interval $(-R,R)$ .

**Property 2:** If the power series $\sum_{n=0}^{\infty}{a_{n}x^{n}}$ has a convergence radius $R (> 0)$, and converges at $x = R$ (or $x = -R$), then the power series $\sum_{n=0}^{\infty}{a_{n}x^{n}}$ uniformly converges on $[0,R]$ (or $[-R,0]$).

**Proof:** Suppose the power series converges at $x = R$. For $x \in [0,R]$, we have $\sum_{n=0}^{\infty}{a_{n}x^{n}} = \sum_{n=0}^{\infty}{a_{n}R^{n}(\frac{x}{R})^{n}}$.

Since the series

$$
\sum_{n=0}^{\infty}{a_{n}R^{n}}
$$

converges, and the function sequence

$$
\left\{ (\frac{x}{R})^{n} \right\}
$$

is decreasing and uniformly bounded on $[0,R]$, i.e.,

$$
1 \geq \frac{x}{R} \geq (\frac{x}{R})^{n} \geq ... \geq (\frac{x}{R})^{n} \geq ... \geq 0
$$

by Abel's test, the series

$$
\sum_{n=0}^{\infty}{a_{n}x^{n}}
$$

uniformly converges on $[0,R]$.

**Note:** In fact, since the power series $\sum_{n=0}^{\infty}{a_{n}x^{n}}$ is uniformly convergent on $(-R,0]$ , the conclusion can also be drawn: when the power series $\sum_{n=0}^{\infty}{a_{n}x^{n}}$ converges at $x = R$, the power series uniformly converges on $(-R,R]$.

From the two properties regarding uniform convergence of power series, we can deduce other properties that power series possess:

$(i)$ The sum function of the power series $\sum_{n=0}^{\infty}{a_{n}x^{n}}$ is continuous on \((-R,R)\).

$(ii)$ If the power series $\sum_{n=0}^{\infty}{a_{n}x^{n}}$ converges at the left (right) endpoint of its convergence interval, then its sum function is also continuous at this endpoint from the right (left).

**Note:** Since each term of the power series $\sum_{n=0}^{\infty}{a_{n}x^{n}}$ is continuous on \((-R,R)\), and $\sum_{n=0}^{\infty}{a_{n}x^{n}}$ uniformly converges on \((-R,R)\), we can deduce property $(i)$ from the properties of uniform convergence of series of functions. If the power series $\sum_{n=0}^{\infty}{a_{n}x^{n}}$ converges at $x = R$ (or $x = -R$), then the power series $\sum_{n=0}^{\infty}{a_{n}x^{n}}$ uniformly converges on $[0,R]$ (or $[-R,0]$) by the same reasoning, thus property $(ii)$ holds.

In the study of series of functions, there are theorems concerning term-by-term integration and differentiation:

**(Term-by-term Integration Theorem):** If the series of functions

$$
\sum_{n=0}^{\infty}{u_{n}(x)}
$$

uniformly converges on $[a,b]$, and each term $u_{n}(x)$ is continuous, then

$$
\sum_{n=0}^{\infty}{\int_{a}^{b}u_{n}(x)dx}=\int_{a}^{b}\sum_{n=0}^{\infty}{u_{n}(x)dx}
$$

**(Term-by-term Differentiation Theorem):** If the series of functions

$$
\sum_{n=0}^{\infty}{u_{n}(x)}
$$

has continuous derivative for each term on $[a,b]$, $x_{0}\in[a,b]$ is a point of convergence for

$$
\sum_{n=0}^{\infty}{u_{n}(x)}
$$

, and

$$
\sum_{n=0}^{\infty}{u'_{n}(x)}
$$

uniformly converges on $[a,b]$, then

$$
\sum_{n=0}^{\infty}({\frac{d}{dx}u_{n}(x)})=\frac{d}{dx}(\sum_{n=0}^{\infty}{u_{n}(x)})
$$

**Note:** The requirement that $x_{0}\in[a,b]$ is a point of convergence for

$$
\sum_{n=0}^{\infty}{u_{n}(x)}
$$

in the term-by-term differentiation theorem is for the convenience of application. Its equivalent condition is that

$$
\sum_{n=0}^{\infty}{u_{n}(x)}
$$

converges on $[a,b]$. Furthermore, the interval $[a,b]$ in the conditions can be replaced with a general open interval, and the conclusion still holds.

For the power series

$$
\sum_{n=0}^{\infty}{a_{n}x^{n}}
$$

its power series obtained by differentiating each term is

$$
\sum_{n=1}^{\infty}{na_{n}x^{n-1}}
$$

and the power series obtained by integrating each term is

$$
\sum_{n=0}^{\infty}{\frac{a_{n}x^{n+1}}{n+1}}
$$

For convenience, let's denote the three power series as $(1)$, $(2)$, and $(3)$, respectively.

To discuss term-by-term differentiation and integration of power series, we first introduce the following lemma:

**Lemma:** Power series $(1)$ and $(2)$, $(3)$ have the same interval of convergence.

**Proof:** We only need to prove that $(1)$ and $(2)$ have the same interval of convergence because differentiating each term of $(3)$ results in $(2)$.

Suppose $(1)$ converges only at $x=0$. Assuming $(2)$ converges at $x'>0$, then for $\bar{x}\in(0,x')$, by the Abel's theorem,

$$
\sum_{n=1}^{\infty}{\left| na_{n}\bar{x}^{n-1} \right|}
$$

converges. Thus,

$$
\left| a_{n}\bar{x}^{n}\right|=\left| na_{n}\bar{x}^{n-1} \right|\left| \frac{\bar{x}}{n} \right|=\left| na_{n}\bar{x}^{n-1} \right|\frac{\bar{x}}{n}
$$

Since it is given that

$$
\sum_{n=1}^{\infty}{\left| na_{n}\bar{x}^{n-1} \right|}
$$

converges,

$$
\left\{ \frac{\bar{x}}{n} \right\}
$$

is monotonically bounded. Thus, by the Abel's test, we know that

$$
\sum_{n=1}^{\infty}{\left| a_{n}\bar{x}^{n} \right|}
$$

converges. This contradicts the assumption. Therefore, $(2)$ also converges only at $x=0$, and the proposition holds.

Now let the convergence interval of power series $(1)$ be $(-R,R)$, where $R\neq 0$. Let $x_{0}$ be any nonzero point in $(-R,R)$. As shown in the proof of the Abel's theorem, there exist positive numbers $M$ and $r(0<r<1)$ such that for all positive integers $n$,

$$
\left| a_{n}x_{0}^{n} \right|<Mr^{n}
$$

So,

$$
\left| na_{n}x_{0}^{n-1} \right|=\left| \frac{n}{x_{0}} \right|\left| a_{n}x_{0}^{n} \right|<\frac{M}{\left| x_{0} \right|}nr^{n}
$$

By the ratio test, the series

$$
\sum_{n=0}^{\infty}{nr^{n}}
$$

converges. Therefore, by the comparison test, the series

$$
\sum_{n=0}^{\infty}{\left| na_{n}x_{0}^{n-1} \right|}
$$

converges. This implies that power series $(2)$ is absolutely convergent (and hence convergent) at point $x_{0}$, as it converges absolutely. Since $x_{0}$ is an arbitrary point in $(-R,R)$, power series $(2)$ converges on the interval $(-R,R)$.

Next, we need to prove that power series $(2)$ does not converge for all $x$ satisfying $\left| x \right|>R$. Suppose $(2)$ converges at a point $x_{0} (\left| x_{0} \right|>R)$, then there exists a number $\bar{x}$ such that $\left| x_{0} \right|>\left| \bar{x} \right|>R$. By the Abel's theorem, power series $(2)$ converges absolutely at $x=\bar{x}$. However, when $n\geq\left| \bar{x} \right|$, we have

$$
\left| na_{n}\bar{x}^{n-1} \right|=\frac{n}{\left| \bar{x} \right|}\left| a_{n}\bar{x}^{n} \right|\geq \left| a_{n}\bar{x}^{n} \right|
$$

By the comparison test, power series $(1)$ converges absolutely at $x=\bar{x}$. This contradicts the fact that the convergence interval of power series $(1)$ is $(-R,R)$. Thus, power series $(2)$ does not converge for all $x$ satisfying $\left| x \right|>R$. In summary, power series $(1)$ and $(2)$ have the same interval of convergence.

Regarding term-by-term differentiation and integration of power series, we have the following theorem:

**Theorem:** Suppose the convergence interval of series $(1)$ is $(-R, R)$, and its sum function on this interval is denoted by $f(x)$. If $x$ is any point in $(-R, R)$, then:

- $(i)$ $f(x)$ is differentiable at point $x$, and
  $$
  f'(x)=\sum_{n=1}^{\infty}{na_{n}x^{n-1}}
  $$
- $(ii)$ $f(x)$ is integrable over the interval between $0$ and $x$ on $(-R, R)$, and
  $$
  \int_{0}^{x}f(t)dt=\sum_{n=0}^{\infty}{\frac{a_{n}}{n+1}x^{n+1}}
  $$

**Proof:** Since series $(1)$, $(2)$, and $(3)$ have the same convergence radius $R$, and each term of series $(1)$ has a continuous derivative, and all three power series converge uniformly on the closed interval $(-R, R)$, they satisfy the theorem of term-by-term differentiation and integration of function series. Therefore, the above theorem holds.

From the above theorem, we can derive the following corollaries:

**Corollary 1:** Let $f(x)$ be the sum function of series $(1)$ on the convergence interval $(-R, R)$. Then, $f(x)$ has derivatives of any order on $(-R, R)$, and can be differentiated term by term any number of times, i.e.,

$$
f'(x)=a_{1}+2a_{2}x+3a_{3}x^{2}+...+na_{n}x^{n-1}+...
$$

$$
f''(x)=2a_{2}+3\cdot2a_{3}x+...+n(n-1)a_{n}x^{n-2}+...
$$

$$
f^{(n)}(x)=n!a_{n}+(n+1)n(n-1)...2a_{n+1}x+...
$$

**Corollary 2:** Let $f(x)$ be the sum function of series $(1)$ on the convergence interval $(-R, R)$. Then the coefficients of series $(1)$ are determined by the various derivatives of $f(x)$ at $x=0$:

$$
a_{0}=f(0) \\ a_{n}=\frac{f^{(n)}(0)}{n!} \quad (n=1,2,...)
$$

**Equality of Power Series:** If the power series $\sum_{n=0}^{\infty}{a_{n}x^{n}}$ and $\sum_{n=0}^{\infty}{b_{n}x^{n}}$ have the same sum function in a neighborhood of $x=0$, then these two power series are considered equal in that neighborhood.

Since the coefficients of power series are determined by the sum function and its derivatives at $x=0$, it follows from the definition of equality of power series that two power series are equal in a neighborhood if and only if their coefficients are equal.

**Arithmetic Operations on Power Series:** Suppose the power series $\sum_{n=0}^{\infty}{a_{n}x^{n}}$ and $\sum_{n=0}^{\infty}{b_{n}x^{n}}$ have convergence radii $R_{a}$ and $R_{b}$, respectively. Then:

- $(i)$ $\lambda\sum_{n=0}^{\infty}{a_{n}x^{n}}=\sum_{n=0}^{\infty}{\lambda a_{n}x^{n}},\left| x \right|<R$ ;
- $(ii)$ $\sum_{n=0}^{\infty}{a_{n}x^{n}}\pm\sum_{n=0}^{\infty}{b_{n}x^{n}}=\sum_{n=0}^{\infty}{(a_{n}\pm b_{n})x^{n}},\left| x \right|<R$ ;
- $(iii)$ $(\sum_{n=0}^{\infty}{a_{n}x^{n}})(\sum_{n=0}^{\infty}{b_{n}x^{n}})=\sum_{n=0}^{\infty}{c_{n}x^{n}},\left| x \right|<R$ .

where $\lambda$ is a constant, and $R=\min\{ R_{a}, R_{b} \}$, $c_{n}=\sum_{k=0}^{n}{a_{k}b_{n-k}}$.

These properties can be derived from the corresponding properties of numerical series.

The above discussion regarding power series actually serves as a preliminary study for Taylor series. Although it might seem extensive, it's essential for understanding Taylor series thoroughly.

In the section on Taylor's theorem, we previously mentioned that if a function $f(x)$ has derivatives up to order $n + 1$ in a neighborhood of $x_{0}$, then the Taylor series expansion is given by:

$$
f(x) = f(x_{0}) + f'(x_{0})(x-x_{0}) + \frac{f''(x_{0})}{2!}(x-x_{0})^{2} + \ldots + \frac{f^{(n)}(x_{0})}{n!}(x-x_{0})^{n} + R_{n}(x)
$$

Here, $R_{n}(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_{0})^{n+1}$, where $\xi$ lies between $x$ and $x_{0}$.

Inspired by the form of Taylor's theorem, if a function $f(x)$ has derivatives of all orders at $x = x_{0}$, then we can construct a power series:

$$
f(x_{0}) + f'(x_{0})(x-x_{0}) + \frac{f''(x_{0})}{2!}(x-x_{0})^{2} + \ldots + \frac{f^{(n)}(x-x_{0})^{n}}{n!} + \ldots
$$

This series is called the **Taylor series** of the function $f(x)$ at the point $x_{0}$. Now, we face the question: What is the relationship between the function $f(x)$ and its Taylor series expansion at $x_{0}$? If the function $f(x)$ is defined in a neighborhood $U(x_{0},\delta)$ and its Taylor series converges in the interval $U(x_{0},R)$, does the function $f(x)$ equal the sum function of its Taylor series in $U(x_{0},\delta)\cap U(x_{0},R)$?

**Theorem:** Suppose $f(x)$ has derivatives of all orders at the point $x_{0}$. Then, $f(x)$ equals the sum function of its Taylor series on the interval $(x_{0}-r,x_{0}+r)$ if and only if, for all $x$ satisfying $|x-x_{0}|<r$, we have

$$
\lim_{n \rightarrow \infty}{R_{n}(x)} = 0
$$

Here, $R_{n}(x)$ represents the Lagrange remainder term of $f(x)$ at $x_{0}$.

**Proof:** Given that $f(x)$ has derivatives of all orders at $x_{0}$, by Taylor's theorem, for any $x \in U(x_{0},r)$, where $r \leq R$, we have $f(x) = T_{n}(x) + R_{n}(x)$.

**[Necessity]:** If $f(x) = \lim_{n \rightarrow \infty}{T_{n}(x)}$, then as $n \rightarrow \infty$, we have $\lim_{n \rightarrow \infty}{R_{n}(x)} = 0$.

**[Sufficiency]:** If $\lim_{n \rightarrow \infty}{R_{n}(x)} = 0$, then $f(x) = \lim_{n \rightarrow \infty}{T_{n}(x)}$.

## Taylor Expansion

If function $f(x)$ can be expressed as the sum function of its Taylor series in a neighborhood of point $x*{0}$, then function $f(x)$ can be expanded into a Taylor series in the neighborhood of point $x*{0}$. The right side of the equation

$$
f(x)=f(x_{0})+f'(x_{0})(x-x_{0})+\frac{f''(x_{0})}{2!}(x-x_{0})^{2}+...+\frac{f^{(n)}(x_{0})^{n}}{n!}+...
$$

is called the **Taylor expansion** of $f(x)$ at point $x_{0}$.

According to the previous theorem, if function $f(x)$ is the sum function of a power series

$$
\sum_{n=0}^{\infty}{a_{n}x^{n}}
$$

in the convergence interval $(-R, R)$, then the coefficients of $\sum*{n=0}^{\infty}{a*{n}x^{n}}$ are determined by the sum function $f(x)$ and the values of its various order derivatives at $x=0$, that is,

$$
a_{0}=f(0) \\ a_{n}=\frac{f^{(n)}(0)}{n!} \\ n=1,2,...
$$

That is, $\sum*{n=0}^{\infty}{a*{n}x^{n}}$ is the Taylor expansion of function $f(x)$ on $(-R, R)$.

The above is the process of analyzing these four mathematical concepts. In the part of Taylor series, the relevant concepts of power series are elaborated in detail. Here we summarize these four concepts:

**Summary:** From the chronological point of view, we usually encounter the Taylor formula for the first time in the part of the mean value theorem of differentiation in the first volume of mathematical analysis, that is, the Taylor formula with the Peano remainder term, which is introduced by the finite increment formula in the derivative:

$$
f(x)=f(x_{0})+f'(x_{0})(x-x_{0})+o(x-x_{0})
$$

When using the finite increment formula for estimation, the error is $o(x-x*{0})$, and its estimation effect is quite rough. If the function is known to have an $n$-th order derivative at the point $x*{0}$, we can generalize the finite increment formula, that is, to obtain the Taylor formula with the Peano remainder term. Its estimation error is $o((x-x*{0})^{n})$. In order to further improve the estimation effect and quantitatively analyze the range of errors, the Taylor formula with the Lagrange remainder term is introduced. The use condition of Taylor formula with the Lagrange remainder term is further strict, which requires that the function $f(x)$ has derivatives up to $(n+1)$-th order at the point $x*{0}$. Its corresponding error is

$$
\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_{0})^{n+1}
$$

The Lagrange remainder term can quantitatively analyze the error, and its estimation effect is much better than that of the Peano remainder term.

Following the learning order of the textbook, after learning related knowledge such as series, functional series, and power series in the second volume of mathematical analysis, we can introduce the concept of Taylor series. If the function $f(x)$ has derivatives of any order at some point $x_{0}$, then we can write

$$
f(x_{0})+f'(x_{0})(x-x_{0})+\frac{f''(x_{0})}{2!}(x-x_{0})^{2}+...+\frac{f^{(n)}(x_{0})^{n}}{n!}+...
$$

This expression is called the Taylor series of function $f(x)$ at point $x*{0}$. As a special power series, the Taylor series has a convergence range, namely the convergence domain of the Taylor series, and we give the necessary and sufficient conditions for the Taylor series of function $f(x)$ at point $x*{0}$ in a certain neighborhood $U(x*{0},r)$ to be equal to its sum function: $\lim*{n \rightarrow \infty}{R_{n}(x)}=0$.

This leads to the concept of Taylor expansion. The so-called Taylor expansion refers to the power series expression that function $f(x)$ can be expanded into in a certain neighborhood. In this neighborhood, function $f(x)$ is completely characterized by the power series. This is different from the approximation by polynomial functions above, but is equal in a real sense. However, the application of power series has certain limitations, namely, because the convergence domain of power series is often a finite interval, it can only characterize function $f(x)$ in a small segment interval. In order to solve this drawback of power series, research on Fourier series has emerged.
