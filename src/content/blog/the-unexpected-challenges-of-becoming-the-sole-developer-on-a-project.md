---
author: "Antony Nyagah"
title: "The Unexpected Challenges of Becoming the Sole Developer on a Project"
pubDatetime: 2024-04-23T14:00:51
modDatetime: 2024-04-23T14:00:53
slug: "the-unexpected-challenges-of-becoming-the-sole-developer-on-a-project"
featured: false
draft: false
tags: ["Thoughts", "Engineering", "Developer Experience"]
description: "The trials and tribulations seemed never ending"
---

![Confused developer](@assets/images/ConfusedDeveloper.jpeg)

## Introduction

_Have you ever found yourself suddenly becoming the sole developer on a project? I have, and it was a journey filled with unexpected challenges and valuable lessons._

I got hired to a company in the healthcare industry a few years ago, alongside another developer who interviewed with me on the same day. Over time, I focused more on the backend, while my colleague handled the frontend. This inadvertently led to my coworker receiving more praise, as the frontend was more visible, and I was less vocal about my work.

As a result, I began to develop impostor syndrome and an inferiority complex, agreeing to almost all major codebase changes proposed by others. Little did I know, this would be the start of my problems.

## The Merge That Changed Everything

One of the changes I basically ended up having no say in was a huge change to how the backend worked. It involved modifying the flow of how new users got added to the informatics system.  
The changes were merged by my coworker in January 2024. This was about 2 weeks before my coworker left for greener pastures.

This led to a flood of bugs and issues for code that I had almost no input in. You can only imagine my anger and confusion when I got chewed out and threatened with being fired because of my "incompetence".

Due to Python's and JavaScript's dynamically typed nature, large pieces of code became a challenge for me to understand. I mean what does this even mean:

```python
def f(x):
    if x > 0:
        return x * f(x - 1)
    else:
        return 1

def g(lst):
    r = []
    for i in lst:
        if i % 2 == 0:
            r.append(i ** 2)
    return r

def h(s):
    v = 'aeiou'
    c = 0
    for i in s:
        if i.lower() in v:
            c += 1
    return c

a = [1, 2, 3, 4, 5]
b = f(5)
c = g(a)
d = "Hello, World!"
e = h(d)

print(b)
print(c)
print(e)
```

The above is an example of the code I was dealing with. It might not look that frightening but to me, going through lines and lines of single letter variables and functions was a nightmare.  
There was also no documentation or tests for the code so adding or modifying things was basically a game of chance.

## The Burden of Being the Sole Developer

I have no qualms with the non-developer staff I work with but explaining what I was going through was an exercise in futility. All I got from my manager and my direct coworkers was a lack of understanding and at some point the threat of being fired. This is an experience I do not wish on anyone.

Communicating my thoughts and ideas had now become my only option of salvation. I started seeing my coworkers in a light that I hadn't before, it was everyone for themselves and any small issue that came up on the system was immediately reported to my direct manager bypassing me entirely.

I tried my best to get them understanding that a huge change had been made and I had been basically had all this dropped on me. No one listened. I was in the wrong. The system didn't work because I was incompetent. It's Antony's system that isn't working, I heard one of my coworkers say.

As I did my best to work on the things that had broken on the front and backend I felt alone, confused, angry and frustrated because no one wanted to understand and it seemed like it was all because I was a bad communicator.

## Lessons Learned

I learned a few things about myself and my coworkers over the tumultuous first 3 months of 2024.

In terms of my coworkers, I learned that I was naive. They are not the so called family that they keep spouting. It's everyone for themselves. I learned this the hard way after being thrown under the bus more that once in 3 months.

It is also important to set boundaries and just say no to things that in themselves seem impractical to implement.

But the most important thing I learned is that communication or lack thereof can get you into and out of trouble very quickly. My problem was that I was a poor communicator, I talked in technical terms to non-technical staff and more than once was given the polite equivalent of "please shut up we do not understand you" by the higher ups.

## Steps Towards a Better Developer Experience

While dealing with the dread I faced every day whenever I woke up to go to work, I decided to not let anyone else go through what I am going through. I decided to take the project by the reins, read deeply and ensure the developer experience becomes as good as possible.

I started adding [TypeScript](https://www.typescriptlang.org/) or [JSDoc](https://jsdoc.app/), where possible, to the JavaScript parts of the code and implementing [Python's type hints](https://docs.python.org/3/library/typing.html) to the Python backend. At least with these code would end up being more readable.

Installing the codebase locally was a pain so I got to working on making this as smooth as possible by learning how to use a [makefile](https://opensource.com/article/18/8/what-how-makefile) and [Docker](https://www.docker.com/) properly.

On an upcoming work frontend project I will be heavily advocating testing to reduce issues with systems breaking down and no one having a clue on what's going on.  
Lastly, collaboration should be a major part of any team so my goal is to make the codebase be easily understandable by any newbies to the system.

## Conclusion

The first quarter of 2024 has been my trial by fire in regards to my software engineering career. The despair and anger felt over those 3 months, I do not wish on anyone.

As of now, a new developer has been employed and I have been tasked with showing them the ropes. I hope that their experience is better than mine and that when I eventually leave this place, I won't leave them in the same situation I had to deal with.

The challenges that were faced have made me a better person, a less trusting person, but a better person nonetheless. I have come out more empathetic to my fellow developers.

Here's to less frustration in the future and more collaboration.
