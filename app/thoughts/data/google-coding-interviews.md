---
title: "Google Coding Interviews | What are they looking for and why?"
date: "2022-08-07"
type: "Article"
summary: "In this article, I will discuss what I think Google interviewers are looking for and why I think they would be looking for those skills."
---

## What is it about?
In this article, I will discuss what I think Google interviewers are looking for and why I think they would be looking for those skills.


## What isn't it about?
I will give some tips about how to demonstrate the skills but the article **is not** mainly about that. That's because **the first step** towards demonstrating these skills is to be aware that they are needed. The second step is practicing them a lot. The last step is to know some tricks of how to demonstrate them when you already have them. I will be focusing here mainly on the first step.

The article is mainly focused on coding interviews and not system design or Googlyness.

*The advice in this article is purely my opinion, from my experience with interviewing in Google, and what I myself would like to see as an interviewer.*

## Skills
I will explain each skill they are looking for as well as why they are looking for it.

### Communication Skills
<u>What are they looking for?</u>

I think that Google interviewers would be looking for candidates with good communication skills. Those are candidates who ...

can be understood during the interview
are good at explaining their thoughts out loud
care to explain their thoughts out loud (it's different from the one above)
comprehend what the interviewer says quickly

Try to practice communicating your thoughts clearly when solving problems. That is hard to maintain when the solution is not straightforward and you need to think deeply about it. Here comes the role of practicing. You need to practice communicating your thinking process even when 1) the solution is not easily explainable and 2) even when you still don't know the solution and still exploring different ideas.

That's also super useful because then the interviewer may give you relevant hints, or explain the problem better, and guide you to the right solution.

Practice it by doing mock interviews with your friends and experienced people.

<u>Why are they looking for it?</u>

That is one important skill that is needed in a company with the scale of Google, in which you will always find yourself dealing with different people and often from different teams daily. In Google, you'd also find that the problems being solved aren't simple. So, it is important to have people who can discuss and communicate different and sometimes complex solutions and their tradeoffs.

In the end, people would want to hire people they'd love working with and wouldn't have trouble communicating with.

## Clean, readable & extensible code
<u>What are they looking for?</u>

I think that Google interviewers would be looking for candidates who can write bug-free, readable, and extensible code.

**By readable** I mean that it is easy for someone other than you to read and understand the code. This can be achieved by the following:

Choose clear and descriptive names for functions and variables used.
Keep the functions small and single-purposed. This means that you'd need to implement more functions, which is good. It is easier to debug and spot the error in small, modularized, and single-purposed functions than debugging larger ones. So extract related functionality into its own function.
Add comments for logic that is not straightforward to be understood.
Balance the trade between readability and efficiency. In such cases, it is best to discuss it with the interviewer after demonstrating to them that you see both options and you see the tradeoff (e.g. "I think that the most efficient way to implement that is X. It will not be the most readable and simple way to implement it. But, we can also implement it in Y which is not significantly less efficient but is significantly more readable and simpler, which one do you prefer?").

**By extensible** I mean how easy it is to extend your implementation to handle different use cases. That's very tricky because to some extent generalizing will cause a waste of your time in solving a harder problem than the one you have. Interestingly, to another extent, narrowing down your solution to only satisfy the given problem may cause a waste of your time while trying to implement the solution for a follow-up question. So how to know? Ask the interviewer about their preferences (e.g. "I know that in this problem we are just handling two car types, so I can just quickly represent that using a boolean, but I can also create an enum so that it is easy to extend the solution, what do you prefer?")

<u>Why are they looking for it?</u>

In Google, people work on a massively huge code base read by thousands of people. Also, people sometimes contribute to code written by other teams and a lot of times would need to read code maintained and written by other teams. People also change teams. So a readable code is not a luxury anymore, otherwise, the development of the products will be much slower with people taking more time to understand and more time to touch the code without introducing bugs and more time to find bugs when reported.

Teams would also be asked to implement more features (sometimes not previously anticipated) in their code after producing it to users to act on their feedback. So it's important to learn the balance of to what extent to write extensible code.

Most of Google's products have many users, so it's rare for a code path to not be regularly exercised by users, so bugs will be triggered and will annoy users quickly. So it's important to have the skill to write bug-free code and to catch bugs quickly both in a code you wrote or a code someone else wrote (i.e. when you are reviewing a teammate's code for example).

## Attention to Detail
<u>What are they looking for?</u>

I think that Google interviewers would be looking for candidates who are attentive to details. By that, I mean the following skills.

**Confirming the problem and its constraints.** Before you start writing code or finding solutions, you need to make sure that you understand the problem correctly. Those are aspects like the following:

* How large is the input? How small can it be?
* In what format and data structure will the input be given?
* Can the special case X be encountered in the input?
* What is the expected way of handling the special case Y?

**Keeping track of ideas and todos.** Try to write down (if it will not waste a lot of time) your ideas in detail. Whenever you are postponing the implementation of some function or postponing thinking about a specific use case, write it down as a to-do comment. Also, when you have an assumption or an expectation about the input or the output, write it down as a comment.

**Validating the solution and its implementation.** After explaining a solution as well as after implementing it. It's better that you find the problem with it before the interviewer points it out. You'd only be able to do that if you are good at validating your ideas. People tend to be biased towards the correctness of their ideas and implementations so they are often not able to spot the problem. After explaining the solution, try to make sure that it will work on a simple test case and thoroughly trace it on the simple test case. Then start to think about the corner cases that will make your solution fail. Do the same thing after implementing to spot bugs with your code before your interviewer does. This skill like all other skills mentioned in this article comes with practice.

**Troubleshooting your implementation.** Let's say the interviewer has spotted a bug in your code and they pointed it out. Figuring the problem out quickly is a plus for you. Try to exercise your code without any bias towards its correctness.

<u>Why are they looking for it?</u>

Interviewers don't want to hire people who would end up wasting time implementing or designing a solution for different problems than the one they were given. They want to hire people who would anticipate and ask for possible use cases that may lead to a drastic change in the design of the solution from the beginning so that they don't waste time rearchitecting their solution after a few new features or corner cases.

As mentioned above, in Google, it is usual to use and depend on code written and maintained by other teams, so being clear about the expected usage of your code and the expected output saves others' times and denies issues earlier.

Interviewers want to hire people who can validate their ideas on their own before wasting others' time validating for them. It's the same for implementation, interviewers want to hire people who would produce a high-quality code without huge assistance from others.

Troubleshooting is a very important skill when working in a huge code base and large-scale products as it is not about debugging a single function, class, or file anymore. It's a huge stack and someone who is not used to catching their bugs on their own may waste others' time to figure out the problems for them. So when you are practicing, and you write a code that is not passing the test cases; invest time in figuring out the problem yourself.

## Data Structures and Algorithms Skills
<u>What are they looking for?</u>

I think that Google interviewers would be looking for candidates who have good data structures knowledge and good algorithmic skills.

By that I mean, the following.

* Choosing a data structure that would efficiently handle the specific use case and type of data presented to them.
* Explaining and implementing efficient algorithms to solve the problem. Start with explaining the easiest and less efficient first and then explain the more efficient ones.
* Analyzing the time and space complexities of the different solutions.

<u>Why are they looking for it?</u>

As said above, in Google, most probably, all of the code paths of your implementation will be exercised by your users and they will be exercised a lot. That's why people who know how to use the right data structure and who know the tradeoffs of different approaches and can analyze and spot them can save a lot of resources for the company and can offer better and more efficient products to customers.

# Feedback Acceptance
<u>What are they looking for?</u>

I think that Google interviewers would be looking for candidates who accept and appreciate feedback. By that, I mean the attitude after receiving feedback or a hint. Also how you will benefit from and put that feedback into action.

<u>Why are they looking for it?</u>

People want to work with others who appreciate their feedback. That makes you comfortable because it will be easy to point the other person to things they can improve or things that bother you. People also don't want to work with others who are very opinionated and hardly consider ideas other than their own or hardly accept someone else spotting their mistakes.