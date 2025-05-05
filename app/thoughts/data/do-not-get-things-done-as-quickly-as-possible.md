---
title: "Don't Always Get Things Done as Quickly as Possible!"
date: "2025-05-05"
type: "Article"
summary: "This article looks at balancing getting things done quickly with investing in learning opportunities, even if it slows you down."
---

This article looks at balancing getting things done quickly with investing in learning opportunities, even if it slows you down.

---

Below are two extreme attitudes to avoid and the healthy balance you should aim for:

**Extreme Getting Things Done Attitude**
- When you’re assigned a project, you try to finish it as quickly as possible.  
- You don’t question anything, and you immediately apply every piece of guidance you get from more‑senior colleagues.  
- You don’t spend time questioning the usefulness or purpose of your assigned projects.  
- You don’t learn anything unrelated to the project before delivering it, even if it’s in your domain and could help in the future.

**Extreme Long‑Term Investor Attitude**
- When you’re assigned a project, you deeply research its background, history, and similar completed projects.  
- You consider different approaches and ask senior colleagues why they recommended a particular method before starting.  
- Whenever you’re stuck, you spend as long as necessary to unblock yourself by yourself.  
- Before using any dependency (e.g., a third‑party library or another team’s API), you dig deep into it to fully understand its design and implementation.

**Some General Advice**
- The “Extreme Getting Things Done” attitude yields more short‑term wins, while the “Extreme Long‑Term Investor” attitude yields more long‑term gains. You need both.  
- If you lean too much toward the “Extreme Getting Things Done” attitude, you risk **not** investing in long‑term growth opportunities and will be steered mostly by your assigned projects.  
- If you lean too much toward the “Extreme Long‑Term Investor” attitude, you risk missing deadlines and damaging your performance reputation.  
- The more junior you are, the closer you should stay to the “Extreme Getting Things Done” end of the spectrum—though you still shouldn’t be at the extreme end.  
- The more senior you are, the more you’ll have to lean toward the “Extreme Long‑Term Investor” end.  
- At any level, try finding the right balance between short‑term delivery and long‑term learning.

---

## Examples
The following are some examples of different tasks. In each, I give an example of both extremes and a healthy balance (for a junior engineer) on how to approach them, in my opinion:

**Example #1: You need to find the command that can do X in Linux.**  
* **Extreme getting‑things‑done attitude:** You remember commands A, B, and C that you can use together to achieve this. You’ll use those.  
* **Extreme long‑term‑investor attitude:** You know A, B, and C, but let me check what the LLM chatbot recommends. Nice—they suggest you can use D and E. Let me check Stack Overflow. Oh, there’s a debate about whether D+E is better because it aligns more with the Unix philosophy, or whether you should use F right away. Let me see if there are articles debating that on Reddit or other forums. You’ll also ask your team for their opinion.  
* **Balanced approach for a junior:** You remember that A, B, and C work, but you’ll quickly double‑check if there’s something else you don’t know. Oh—the chatbot mentioned D and E, which you’d never heard of. You’ve learned something new anyway. You’ll use D and E for now, and your senior reviewer can let you know if there’s an even better approach.

**Example #2: Your TL mentioned that you need to depend on team T’s API to implement a building block of your project.**  
* **Extreme getting‑things‑done attitude:** Let me check which API endpoints they support. E1 won’t work, E2 won’t work, but E3 will. You decide to use E3 and skip checking the others.  
* **Extreme long‑term‑investor attitude:** Let me check what other APIs exist that do something similar. Nothing looks promising, so you’ll use team T’s API. Now let me review all their endpoints. E5 is interesting—how did they implement it, and which storage engine do they use? For your project, you’ll use E4. Let me see which endpoints others used for similar tasks. Oh—someone used E6 instead. Let me analyze which one will provide better performance.  
* **Balanced approach for a junior:** Let me review all relevant endpoints. The best two are E4 and E6. Their documentation and implementations look complex, so you’ll ask someone more knowledgeable which one to use. Your TL says E6 is better for your case because of reason R. You’ve learned something new—you’ll use E6.

**Example #3: You got assigned a task to fix the bug in function F.**  
* **Extreme getting‑things‑done attitude:** Rewrite the function, update the tests to reflect the fix, and mark the task done.  
* **Extreme long‑term‑investor attitude:** Try to understand why the buggy use case matters and how users end up needing to use the product that way. Reproduce the bug yourself and look for other bugs in the feature. Spend time understanding the function and its class. Find a line in another function that doesn’t follow best practices, rewrite it, test it, and send a pull request. Return to the buggy function, rewrite it, double‑check if similar logic exists elsewhere, write tests, and finally mark the task done.  
* **Balanced approach for a junior:** You know another similar API exists. You ask your TL why they chose that API. You learn something new. Then you spend time understanding how the function fits in the class and what the class does. You skim through the class and notice a standard‑library function you’ve never seen before. You check its documentation—another new lesson. You go back to the buggy function, debug and identify the issue, fix the bug, write the test, and mark the task done.

**Example #4: You need to debug a problem with a feature.**  
* **Extreme getting‑things‑done attitude:** You find the code related to this feature and skim it to spot the issue. You see something out of place—remove it and try again. The issue isn’t fixed, so maybe another line of code is the culprit. You change that and retry. The bug is gone—mark it fixed.  
* **Extreme long‑term‑investor attitude:** It’s the first bug you’ve seen in this codebase. You need to know which debugger people use here. The debugger works best in IDE X; let me learn and start using it. The issue seems to be in this function’s logic, but first you want to understand how the class is structured and why it’s implemented this way.  
* **Balanced approach:** You review how people typically debug these issues. It looks like you can just inspect the code and add logs as needed. Since you rarely work in this codebase, you won’t spend time installing a new debugger now—you’ll use faster methods, but you’re glad to know about the debugger for future use.

**Example #5: Your project’s deadline is in 3 months. You can deliver the rest in a couple of days.**  
* **Extreme getting‑things‑done attitude:** You attempt to deliver the project as quickly as possible, encounter an unanticipated problem, fix it, and deliver the project 2 months early.  
* **Extreme long‑term‑investor attitude:** You decide to deliver the project on time and use the remaining time to learn a few skills you wanted to acquire, as well as read a book on your reading list. A couple of days before the deadline, you restart work on the project, run into the blocker, and deliver it one month after the deadline.  
* **Balanced approach:** You align with your manager on delivering it early but taking a couple of weeks to learn a skill that’s relevant to your job yet not to this project. If that’s not the type of relationship you have with your manager, you aleternate between progressing on the project and learning something relevant to your team and job description for a couple of days, and then you focus solely on delivering the project early.

It’s not an exact science, of course, and these examples reflect just my opinion. You might face similar situations but choose a different perfectly balanced approach depending on how much you invested in your last project, how much time remains before the deadline, and other factors.

The main idea is to keep both attitudes in mind and avoid committing solely to one at the expense of the other.
