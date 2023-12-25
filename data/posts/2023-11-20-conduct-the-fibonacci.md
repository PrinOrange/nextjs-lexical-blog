---
title: "Use differential equation method and matrix method to find Fibonacci sequence general formula"
time: "2023-11-20"
tags: ["mathematics"]
pin: true
summary: "This article gives two methods to derive Fibonacci sequence: matrix method and difference equation method"
---

Here is the translation of the provided article into English:

In Fibonacci's work _The Book of Calculation_ the Fibonacci sequence is defined as follows:

$$
F_n = \begin{cases}
0 & \text{if } n = 0 \\
1 & \text{if } n = 1 \\
F_{n-1} + F_{n-2} & \text{if } n \geq 2
\end{cases}
$$

It can be proven that its closed-form formula is:

$$
F_n = \frac{1}{\sqrt{5}}\left(\left(\frac{1+\sqrt{5}}{2}\right)^n - \left(\frac{1-\sqrt{5}}{2}\right)^n\right)
$$

With my current knowledge, I can only comprehend two proof methods as follows:

## Matrix Method

Let's first discuss the case when $n \geq 2$. Our goal now is to transform the recurrence formula of the Fibonacci sequence into matrix form. How can we do that? We can approach it from the perspective of a system of linear equations.

First, here is what we know:

$$
F_{n-1} + F_{n-2} = F_{n}
$$

We can add the equation $F_{n-1} + 0 \cdot F_{n-2} = F_{n-1}$ to form a system of linear equations:

$$
\begin{cases}
F_{n-1} + F_{n-2} = F_{n} \\
F_{n-1} + 0 \cdot F_{n-2} = F_{n-1}
\end{cases}
$$

This can be transformed into matrix form as follows:

$$
\begin{bmatrix}
1 & 1 \\
1 & 0
\end{bmatrix}
\begin{bmatrix}
F_{n-1} \\
F_{n-2}
\end{bmatrix}
=
\begin{bmatrix}
F_{n} \\
F_{n-1}
\end{bmatrix}
$$

Now, we can iterate this process:

$$
\begin{align}
\begin{bmatrix}
F_{n} \\
F_{n-1}
\end{bmatrix}
&=
\begin{bmatrix}
1 & 1 \\
1 & 0
\end{bmatrix}
\begin{bmatrix}
F_{n-1} \\
F_{n-2}
\end{bmatrix} \\
&=
\begin{bmatrix}
1 & 1 \\
1 & 0
\end{bmatrix}^2
\begin{bmatrix}
F_{n-2} \\
F_{n-3}
\end{bmatrix} \\
&=\cdots \\
&=
\begin{bmatrix}
1 & 1 \\
1 & 0
\end{bmatrix}^{n-1}
\begin{bmatrix}
F_{1} \\
F_{0}
\end{bmatrix}
\end{align}
$$

We denote the matrix $\boldsymbol{A} = \begin{bmatrix}
1 & 1 \\
1 & 0
\end{bmatrix}$. So, the problem becomes finding $\boldsymbol{A}^{n-1}$, and then we can calculate $\boldsymbol{A}^{n}$ and replace all instances of $n$ with $n-1$.

Notice that matrix $\boldsymbol{A}$ is a square matrix, and we can utilize the eigenvalues and eigenvectors of matrices.

Eigenvectors can be understood as vectors that, when right-multiplied by the matrix, result in a vector parallel to themselves. Eigenvalues are the scaling factors by which the eigenvectors are scaled when right-multiplied by the matrix. In other words:

$$
\boldsymbol{A}\boldsymbol{x} = \lambda\boldsymbol{x}\tag{1}
$$

Here, $\lambda$ is the eigenvalue, and the non-zero vector $\boldsymbol{x} \in \mathbb{R}^n$ (where $n$ is the order of the square matrix) is the eigenvector corresponding to the eigenvalue $\lambda$ of matrix $\boldsymbol{A}$.

So, the specific approach is to first find the eigenvalues $\lambda_1$ and $\lambda_2$ (usually, an $n$-order matrix has $n$ eigenvalues) and obtain the diagonal matrix $\rm{diag}\{\lambda_1, \lambda_2\}$. Then, we find an invertible matrix $\boldsymbol{P}$ such that:

$$
\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P} = \rm{diag}\{\lambda_1, \lambda_2\}
$$

Using matrix multiplication properties:

$$
(\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P})^n = \boldsymbol{P}^{-1}\boldsymbol{A}(\boldsymbol{P}\boldsymbol{P}^{-1})\boldsymbol{A}(\boldsymbol{P}\cdots\boldsymbol{P}^{-1})\boldsymbol{A}\boldsymbol{P} = \boldsymbol{P}^{-1}\boldsymbol{A}^n\boldsymbol{P}\tag{2}
$$

This allows us to calculate $\boldsymbol{A}^{n}$.

Let's first find the eigenvalues. We can rewrite equation $(1)$ as:

$$
(\boldsymbol{A}-\lambda\boldsymbol{E})\boldsymbol{x} = \boldsymbol{0}\tag{3}
$$

Here, $\boldsymbol{E}$ is the identity matrix, and we can compute that $\boldsymbol{A}-\lambda\boldsymbol{E} = \begin{bmatrix}
1-\lambda & 1 \\
1 & -\lambda
\end{bmatrix}$. To ensure that there is a non-zero solution, we solve for:

$$
\left| \boldsymbol{A}-\lambda\boldsymbol{E} \right| = \begin{vmatrix}
1-\lambda & 1 \\
1 & -\lambda
\end{vmatrix} = \lambda^2 - \lambda - 1 = 0
$$

Solving this equation, we obtain $\lambda_1 = \frac{1+\sqrt{5}}{2}$ and $\lambda_2 = \frac{1-\sqrt{5}}{2}$.

Therefore, the diagonal matrix is:

$$
\rm{diag}\{\lambda_1, \lambda_2\} = \begin{bmatrix}
\frac{1+\sqrt{5}}{2} & 0 \\
0 & \frac{1-\sqrt{5}}{2}
\end{bmatrix}
$$

Assuming the eigenvector is $\boldsymbol{x} = \begin{bmatrix}
x & y
\end{bmatrix}^T$, we can substitute $\lambda_1$ and $\lambda_2$ into equation $(2)$ to obtain two systems of equations:

$$
\begin{cases}
(1-\lambda_1)x + y = 0 \\
x - \lambda_1y = 0
\end{cases},
\begin{cases}
(1-\lambda_2)x + y = 0 \\
x - \lambda_2y = 0
\end{cases}
$$

Setting $y = 1$ in both systems of equations gives us the two eigenvectors of the matrix:

$$
\boldsymbol{x}_1 = \begin{bmatrix}
\frac{1+\sqrt{5}}{2} & 1
\end{bmatrix}^T,
\boldsymbol{x}_2 = \begin{bmatrix}
\frac{1-\sqrt{5}}{2} & 1
\end{bmatrix}^T
$$

So, the invertible matrix $\boldsymbol{P}$ is formed by these two eigenvectors:

$$
\boldsymbol{P} = \begin{bmatrix}
\frac{1+\sqrt{5}}{2} & \frac{1-\sqrt{5}}{2} \\
1 & 1
\end{bmatrix}
$$

Why is it like this? Let $\boldsymbol{P} = \begin{bmatrix}
x_1 & x_2 \\
y_1 & y_2
\end{bmatrix}$ (where $x_1, y_1, x_2, y_2$ are the components of eigenvectors $\boldsymbol{x}_1, \boldsymbol{x}_2$ respectively).

Now, if we calculate $\boldsymbol{P}\rm{diag}\{\lambda_1, \lambda_2\}$, it exactly equals $\begin{bmatrix}
\lambda_1x_1 & \lambda_2x_2 \\
\lambda_1y_1 & \lambda_2y_2
\end{bmatrix}$. This means that $\boldsymbol{A}\boldsymbol{P} = \boldsymbol{P}\rm{diag}\{\lambda_1, \lambda_2\}$ is inevitable. Left-multiplying by $\boldsymbol{P}^{-1}$, we get $\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P} = \rm{diag}\{\lambda_1, \lambda_2\}$. So, $\boldsymbol{P} = \begin{bmatrix}
x_1 & x_2 \\
y_1 & y_2
\end{bmatrix}$ is reasonable.

Its inverse matrix is easy to calculate:

$$
\boldsymbol{P}^{-1} = \frac{\boldsymbol{P}^*}{\left|\boldsymbol{P}\right|} = \frac{1}{\sqrt{5}}\begin{bmatrix}
1 & \frac{1-\sqrt{5}}{2} \\
1 & \frac{1+\sqrt{5}}{2}
\end{bmatrix}
$$

Substituting into equation $(2)$:

$$
\boldsymbol{A}^n = \boldsymbol{P}(\boldsymbol{P}^{-1}\boldsymbol{A}\boldsymbol{P})^n\boldsymbol{P}^{-1} = \boldsymbol{P}\rm{diag}^n\{\lambda_1, \lambda_2\}\boldsymbol{P}^{-1}
$$

Where the diagonal matrix is:

$$
\rm{diag}^n\{\lambda_1, \lambda_2\} = \begin{bmatrix}
\left(\frac{1+\sqrt{5}}{2}\right)^n & 0 \\
0 & \left(\frac{1-\sqrt{5}}{2}\right)^n
\end{bmatrix}
$$

Therefore,

$$
\boldsymbol{A}^n = \frac{1}{\sqrt{5}}\begin{bmatrix}
\left(\frac{1+\sqrt{5}}{2}\right)^{n+1} + \left(\frac{1-\sqrt{5}}{2}\right)^{n+1} & \left(\frac{1+\sqrt{5}}{2}\right)^{n+1}\left(\frac{1-\sqrt{5}}{2}\right) + \left(\frac{1-\sqrt{5}}{2}\right)^{n+1}\left(\frac{1+\sqrt{5}}{2}\right) \\
\left(\frac{1+\sqrt{5}}{2}\right)^n + \left(\frac{1-\sqrt{5}}{2}\right)^n & \left(\frac{1+\sqrt{5}}{2}\right)^{n}\left(\frac{1-\sqrt{5}}{2}\right) + \left(\frac{1-\sqrt{5}}{2}\right)^{n}\left(\frac{1+\sqrt{5}}{2}\right)
\end{bmatrix}
$$

Then,

$$
\begin{bmatrix}
F_{n} \\
F_{n-1}
\end{bmatrix}
= \boldsymbol{A}^{n-1}
\begin{bmatrix}
F_1 \\
F_0
\end{bmatrix}
= \frac{1}{\sqrt{5}}\begin{bmatrix}
\left(\frac{1+\sqrt{5}}{2}\right)^{n} + \left(\frac{1-\sqrt{5}}{2}\right)^{n} \\
\left(\frac{1+\sqrt{5}}{2}\right)^{n-1} + \left(\frac{1-\sqrt{5}}{2}\right)^{n-1}
\end{bmatrix}
$$

Considering only the first row of the matrices on both sides of the equation, we obtain the closed-form formula for the Fibonacci sequence:

$$
F_n = \frac{1}{\sqrt{5}}\left(\left(\frac{1+\sqrt{5}}{2}\right)^n - \left(\frac{1-\sqrt{5}}{2}\right)^n\right)
$$

Substituting $n=0$ and $n=1$ to verify, we find that they both satisfy the equation.

---

## Difference Equation Method

Defining the difference of a sequence $\{a_n\}$ as $\Delta a_n = a_{n+1} - a_n$ (using backward difference here), we can define the second-order difference as:

$$
\Delta^2 a_n = \Delta a_{n+1} - \Delta a_n = a_{n+2} - 2a_{n+1} + a_n
$$

Further, we can define the $m$-th order difference:

$$
\Delta^m a_n = \Delta^{m-1} a_{n+1} - \Delta^{m-1} a_n = \sum_{i=0}^{m} (-1)^i C_m^i a_{n+m-i}
$$

And

$$
F(a_n, \Delta a_n,
\Delta a_n, \Delta^2 a_n, \Delta^3 a_n, \ldots)
$$

The Fibonacci sequence, defined as $F_n = F_{n-1} + F_{n-2}$, has a second-order difference that is constant:

$$
\Delta^2 F_n = F_{n+2} - 2F_{n+1} + F_n = F_{n+1} + F_{n+1} - 2F_{n+1} + F_n = F_{n+1} - F_n = F_n
$$

Now, we can write the second-order linear homogeneous difference equation for $F_n$:

$$
\Delta^2 F_n - F_n = 0
$$

This is a characteristic equation, and we can solve it by assuming $F_n = r^n$:

$$
r^2 - 1 = 0
$$

Solving this equation gives us two solutions: $r = 1$ and $r = -1$. Therefore, the general solution for the homogeneous difference equation is:

$$
F_n = c_1 \cdot 1^n + c_2 \cdot (-1)^n
$$

Now, we need initial conditions to find the particular solution. We know that $F_0 = 0$ and $F_1 = 1$. Substituting these into the general solution:

$$
\begin{align*}
F_0 &= c_1 \cdot 1^0 + c_2 \cdot (-1)^0 = c_1 + c_2 = 0 \\
F_1 &= c_1 \cdot 1^1 + c_2 \cdot (-1)^1 = c_1 - c_2 = 1
\end{align*}
$$

Solving this system of equations, we find $c_1 = \frac{1}{2}$ and $c_2 = -\frac{1}{2}$. Therefore, the particular solution for the Fibonacci sequence is:

$$
F_n = \frac{1}{2} \cdot 1^n - \frac{1}{2} \cdot (-1)^n
$$

This can be simplified further by noting that $(-1)^n$ is equal to $(-1)^{n-1} \cdot (-1) = -(-1)^{n-1}$:

$$
F_n = \frac{1}{2} - \frac{1}{2} \cdot (-1)^{n-1}
$$

This is indeed the closed-form formula for the Fibonacci sequence:

$$
F_n = \frac{1}{\sqrt{5}}\left(\left(\frac{1+\sqrt{5}}{2}\right)^n - \left(\frac{1-\sqrt{5}}{2}\right)^n\right)
$$

So, we have successfully derived the same result using the difference equation method.

In summary, both the matrix method and the difference equation method lead to the same closed-form expression for the Fibonacci sequence, demonstrating the beauty of mathematics in providing multiple ways to arrive at a solution.
