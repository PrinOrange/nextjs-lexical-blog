---
title: "The Liskov Substitution Principle"
subtitle: ""
summary: "A detailed explanation of the Liskov Substitution Principle, What it is, How to use it and why it benefits the architecture of our code."
coverURL: null
time: "2023-11-28"
tags: ["project-practice"]
noPrompt: false
pin: false
---

## Introduction

From all the SOLID principles the [Liskov substitution](https://en.wikipedia.org/wiki/Liskov_substitution_principle) principle is the one where the consequences of its violation will become apparent much later in the project. With the violation of any of the other SOLID principles, we can see the problems that can be created almost immediately. A violation of the LSP, will create problems in the future and actually is a late violation of the [Open Closed Principle](https://giannisakritidis.com/blog/The-Open-Closed-Principle/).

Barbara Liskov in 1988 wrote:

> What is wanted here is something like the following substitution property: If for each object O1 of type S there is an object O2 of type T such that for all programs P defined in terms of T, the behavior of P is unchanged when O1 is substituted for O2 then S is a subtype of T.`

The best way to understand the above, is to see examples that violate the LSP and the consequences that this violation will have, but before that, let's see what is a type, what is a subtype, how a subtype is connected to its base type and how those are represented in OOP and more specifically in C#.

## Types and Subtypes

Let's say that I have two numbers: `3` and `2`.

If I say that these numbers are of type `int` then we know that the operation `3/2` will result in `1` and the operation `3+2` wil have a result of `5`.

If I say that these numbers are of type `float` then the operation `3/2` will have a result of `1.5` and if I say that they are of type `string` then the operation `3+2` will give a result of `32`.

From the above, we can understand that a type for an outside observer is actually defined by its behaviours. The data it has, is irrelevant for its definition.

The LSP describes when a type `S` is actually a subtype of `T`, but it is much easier to find out when the `S` is not a subtype of `T` by looking if the LSP is violated.

## IS A and HAS A Relationships

In OOP and in C# in particular, we create types and their subtypes with the mechanism of inheritance. Usually we describe inheritance like an `IS A` relationship and composition like a `HAS A` relationship.

This is not always correct. Although many times an `IS A` relationship can be represented with inheritance, there are times that this will violate the LSP. An `IS A` relationship does not always mean that we should create a base and a child class.

Before we get to the code examples, let's see why this is true with a real world example.

When we create a class, for example the class airplane, is this class actually an airplane? The answer is of course no. The class airplane is a piece of code that represents an airplane.

The problem with real world objects and their representations in code is that the relationships between two objects don't always transfer as relationships between their representatives.

If I am angry with my neighbor because I think he is making too much noise and he is angry with me because he says that I complain without any real reason and we hire lawyers, our lawyers represent us, their behaviour in court will reflect our opinions and beliefs, but our lawyers are not angry at each other. The angry relationship between myself and my neighbor does not transfer as a relationship between our representatives.

The same is true for any code we write. For example, a rectangular is a two dimensional shape in the real world and for that reason has width and height. The same is true for a square. As a two dimensional object it has width and height. There is also a relationship between those two shapes. A square `IS A` rectangle that its height equals its width.

When we create their representations in code, the classes square and rectangle, we might be tempted to make the square class a child of the Rectangle class. After all, in the real world the `IS A` relationship is true, but this will create problems because it is an LSP violation.

In code, we can represent a square with only one piece of data. A variable called side. This can happen, because square as a type has a condition that is always true, regardless of its state: Its height equals its width. This condition is called invariant and allows us to calculate both the width and the height of the square if we know its side. Although a real world square has width and height, its representation in code doesn't need to.

If we make the square class, a child of the rectangle class, it will inherit the behaviours of the rectangle class. Specifically the methods that set the width and the height and this will create big problems in the long run. Let's see why.

## The Square and Rectangle example

Let's create a rectangle class that has width and height and methods that set and get those values. I don't use properties here, to make the example more clear as properties are actually syntactic sugar in C# for getters and setters.

```java
public class Rectangle
{
   protected float Height;
   protected float Width;

   public virtual void SetHeight(float height) => Height = height;

   public virtual void SetWidth(float width) => Width = width;

   public float GetHeight() => Height;

   public float GetWidth() => Width;
}
```

Let's also create the Square class as a child of the rectangle class. To avoid the problem of the square having different height and width, I will set both of those whenever one of them is set.

```java
public class Square : Rectangle
{
   public override void SetHeight(float height)
   {
      base.SetHeight(height);
      Width = height;
   }

   public override void SetWidth(float width)
   {
      base.SetWidth(width);
      Height = width;
   }
}
```

This might seem that solves any problem we might have. Now our square will always have its width equal to its height. Let's suppose that these classes represent boards that the player character has in a game and is using them to build a fence. So the following code behaves as expected:

```java
Rectangle board = new Rectangle();
board.SetWidth(2);
board.SetHeight(6);

Square board2 = new Square();
board2.SetWidth(2);
board2.SetHeight(6);
```

Our first board will have a width of 2 units and a height of 6 units. Our second board will have both width and height at 6 units, so it will remain a square.

After some time, let's say six months or so, we get a new requirement: We need a way to show the player how much area his fence will cover.

That's easy, we create a class that calculates the areas of different shapes. Among the methods of this class, there is a method that calculates the rectangle area that represents the board area, then we can multiply that number with the number of boards the player will use to calculate the fence area.

Here is the method that will calculate the board area:

```java
public class AreaMethods
{
   public float BoardArea(Rectangle rectangle) => rectangle.GetWidth() * rectangle.GetHeight();
}
```

This also works fine. The method will calculate the area correctly for both rectangular and square boards.

After some more time, a new requirement is created. It would be nice to let the player know, how much area his fence would cover if he could lower its height. That's also easy, if for example the player would like his fence to be half the height it was then we, or the programmer responsible for this task can do:

```java
board.SetHeight(board.GetHeight()/2);
areaCalculator.BoardArea(board)
```

But this is a bug. What would actually happen is that if the board is a rectangle, then the calculation would be correct, each board would be the same width and half the height, but if the board is of type square, by decreasing its height we also decrease its width. This would calculate the area of a fence that not only is half the height of the previous fence, but also is half the width.

Will we remember how we have coded the rectangle and square classes after a year or so? Even worse, what if the programmer responsible for that calculation is not us but someone else, what will he do? He would have to go find and check the square implementation so that he can understand why the area calculated, sometimes is half of what the correct result should be.

The reason we found ourselves in this situation, is because the child class (the square) has a different behaviour from the base class (the rectangle) in the same methods (the setters).

The square class cannot be used in the same method (the boardArea method) as the rectangle class and our program keep having the same behaviour( by halving the height, the area is half for the rectangle but 1/4th for the square). That's an LSP violation.

The only way to fix this problem now, would be to create an if statement that checks in the code the type of the instance that is the board. If it would be a rectangle everything is calculated the same way, but if it is a square, after the calculation we have to multiply by the amount that we divided the height.

Whoever sees this piece of code, will have to wonder, why there is a multiplication in there and when someone wants to extend the rectangle class, by creating another child class that for example has 2:1 ratio rectangles, he better remember that he also has to go to that piece of code and add another if statement that calculates the area correctly.

## The INPC Interface example

Although an interface, doesn't contain any behaviours because the behaviours are defined in the classes that implement the interface, we can still violate the LSP. This can happen when two different classes that implement the interface, change the behaviour of how our program reacts, in their implementations.

That doesn't mean that all classes that implement a method from an interface should have the same code obviously. There is a difference of what a method does with how it does it. A violation of the LSP occurs, when the classes do different things with the same method, not when they do the same thing in a different way.

Here's an example. Suppose we have NPCs in a game and those NPCs can talk to the player character or attack him. Each NPC, when is using the `Talk` method can do different things, for example he can give a quest to the player or open the inventory to buy and sell items. The same is true for the `Attack` method: one NPC might get offended when the player says something and attack in melee, another NPC might start using ranged attacks when the player character tries to steal from him.

That's easy, we create an interface that all NPCs must implement:

```java
public interface INpc
{
   void Talk(Character target);
   void Attack(Character target);
}
```

After a while, we get to create a new NPC. A magical tree that can only give quests to the player, it can never attack him. So we decide to derive from the `INpc` interface and keep the `Attack` method empty. After all, that is the requirement, the magical tree doesn't do attacks.

Time passes and after a couple of years, we are near the completion of our game. The player has finally found the cursed book that he was looking for and he is supposed to return it to the temple. He is warned of course that he must never open the book or he is doomed.

Well, we know that there is a big chance that the player will try to open the book, so we decide that if he does this, we will freeze the player controls and all NPCs around him will start hacking till he is dead. He shouldn't have done that, so it would be time to reload from the last save.

Did you notice the bug?

If the player opens the cursed book in front of the magical tree, when there is no other NPC around, the player controls freeze and the system that is responsible for the attacks will keep calling the `INpc.Attack` method, but this method is empty for the tree. Our game will freeze. The player won't be able to move and won't die because the `Attack` method has a different behaviour from what is expected. It doesn't attack the player, it does nothing.

The solution here, is still a mess. Even if we find the bug and not our players ( which would be difficult, as we would have to remember after a couple of years that there is an NPC that his attack is not actually an attack, but it does nothing ) we would still have to create dependencies from the system that is responsible for controlling the attacks to a particular implementation, the magical tree.

Suddenly, a system that was decoupled from the rest of our program and was only dependant on an abstraction the `INpc` interface, will have if statements that check for the type of each instance of INpc and if this is of type MagicalTree do something else, for example ignore the attack. Our system now has a dependency on the MagicalTree class. Any changes to this class will have the potential to affect an unrelated system, the system that is responsible for attacking using the `INpc` interface.

By keeping, the `INpc.Attack` empty, we violated the LSP. A better way would have been to create two interfaces, for example an `INpcTalk` interface that has all the methods responsible for talking and an `INpcAttack` interface that has all the methods responsible for attacking. That way, when we were creating the MagicalTree class, we would have made it implement only the `INpcTalk` interface and the system responsible for the attacking would use only the `INpcAttack` interface. That actually is part of the next principle, the interface segregation principle, in the next post.

## Late Violation of the OCP

By looking both of the above examples, we can see that a violation of the LSP, is actually a violation of [the open closed principle](https://giannisakritidis.com/blog/The-Open-Closed-Principle/) waiting to happen.

The consequences of violating the LSP, only manifest themselves far into the future, maybe even months or years after the violation occurred. At that point, any fix will be a messy one. We would have to check code that was written long ago and create checks for specific types.

By not following the LSP, our subtypes have a different behaviour that might not affect us the moment we write them, but eventually we will have to create code that tries to eliminate that behaviour. This can only happen by creating dependencies to pieces of code, unrelated to the one we are writing now, or even worse create dependencies to implementations, in systems that up to that point were dependant only on abstractions.

## Conclusion

The LSP tells us, that the behaviour of a program should not be different if we use a subtype in place of the base type. This happens when a subtype has a different behaviour from his base type. The mechanism of creating subtypes in C# is inheritance, so a method in a child class should not do a different thing when it is called, from the one that is expected from the base class.

In the previous examples, the square setters didn't only change the relevant dimension as was happening in the rectangle class and the MagicalTree could not attack, as was expected from any other class that implemented the `INpc` interface.

This doesn't mean that child classes or classes that implement interfaces should have the same code. There is a difference on what a method does with how it does it. If we want to conform to the LSP, our methods in our subtypes should do the same thing, but in a different way.

Empty inherited methods, are usually a sign of LSP violation. Inherited methods that throw unconditional exceptions are always a LSP violation, unless the base class also throws an unconditional exception ( but why have a method in a class that only throws an exception? ).

By being careful to write code that does not violate the LSP, we can save our future self a lot of headaches and that is the point of code architecture. Investing our time now so that we save more time far into the future.
