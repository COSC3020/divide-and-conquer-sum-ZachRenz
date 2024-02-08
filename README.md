[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/E1vcEWuv)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Runtime Analysis Solution

After finishing my code, I can make these conjectures about the how my function will grow over time. <br>
The function calls three of itself inside the function, each function processing a third of the data, and after all is said and done it adds up the three branches consistently (which is a constant amount of work). It only finishes recursion when the size of the list is either 1 or 0. So we can write our recurrence relation like this: <br> 
$T(n) = 3T(n/3) + C$, Where $T(1) = 1$ and $T(0) = 1$<br> 
And to produce the next term in this relation, we need to find $T(n/3)$, how the function divides up n recursively <br>
$T(n/3) = 3T(n/3/3) + C => 3T(n/9) + C$ <br>
 Then, we substitute this for T in the previous equation $3T(n/3) + C$ <br>
$T(n) = 9T(n/9) + 3C + C$ (The constant here can combine and be just C) <br>
We can repeat this until we find our pattern. <br> 
$T(n) = 27(n/27) + 9C + 3C + C$ (or again just C)  And now we have our pattern! <br>
$T(n) = 3^i(n/3^i) + C$ Where $i$ is our number of recursions. <br>
To solve this, we must find $i$ and substitute it into our recurence relation. The only useful $i$ we can find is the one that would get us to when $T(1)$ or $T(0)$, as this will break our recrusion and close the loop. For this we can use properties of logorithms. <br>
For example: $X^{ln_xY} = Y$, so we can manipulate it to fit our case $i=ln_3n$ and plug it into our equation. <br>
$T(n) = 3^{ln_3n}(n/3^{ln_3n}) + C => nT(1) + c => n$ <br>
Therefore, our recurence relation solves to $n$ and our function has a complexity of $\Theta(n)$.
