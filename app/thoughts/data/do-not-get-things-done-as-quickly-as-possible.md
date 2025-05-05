---
title: "Don't always get things done as quickly as possible!"
date: "2025-05-05"
type: "Article"
summary: "This article discusses the balance between getting things done as quickly as possible vs using learning opportunities that may slow you down."
---

This article discusses the balance between getting things done as quickly as possible vs using learning opportunities that may slow you down

---

The following are two extreme attitudes that you'd need to avoid and you'd need to have a healthy balance between them:

** The Getting Things Done Attitude)**
- Whenever I get assigned a project, I try to get it done as fast as possible.
- I'd trust and apply every piece of guidance I get from more senior folks right away.
- I'd not spend time questioning the usefulness or reasons behind that project.
- I'd not spend time learning something unrelated to the project before delivering it, even if it is something related to my current domain and may be useful in future projects.

**The long-term investor attitude**
- When I get assigned a project, I try to learn every piece of information about it, about its history, about similar done projects.
- When I get assigned a project, I try to think about different ways of approaching it and I reach out to more senior folks to ask about reasons they went with this approach before starting working on it.
- Whenever I am stuck, I will spend as long as it takes to get unblocked by myself.
- Whenever I need to use a project dependency (e.g. third-party library, another team's API), I make sure I spend enough time to fully understand how the dependency works, how it is designed, and how it was developed.

Some general advices:
- In general, the getting things done attitude brings more short-term wins. The long term investor attitude brings more long-term wins. You need both types of wins. The less you'd have the getting things done attitude, the more you are risking project delivery deadlines and performance impressions.
- The more junior you are the more you'd need to be near the getting things done extreme side of the gradient.
-  The more senior you are, the more you'd need to be near the long-term investor extreme side of the gradient
- Whatever your level of seniority is, there's a perfect balance long-term vs short-term opportunity cost you can achieve.

The following are some examples of different tasks. In each, I will give an example of both extremes and a good healthy balance (for a junior engineer) on how to approach them, from my opinion:

Example #1: I need to find the command that can show me X in Linux.
* Extreme getting things done attitude: I remember commands A, B, and C that I can use together to achive this. I'll use that.
* Extreme long-term investor attitude: I know A, B, and C but let me check what would the LLM chat bot recommends. Nice they recommended I can use D and E. Let me check on Stackoverflow. Oh, there's a debate around whether D+E is better because it aligns more with Unix philosophy or using F right away. Let me check whether there are articles debating that on Reddit or other forums. I will also ask my team about their opinion.
* Balanced approach for a junior: I remember commands A, B, and C works but let me quickly double-check if there's something else I don't know. Oh the LLM chat bot mentioned D and E. I never knew about them. I learned something new. I will use D and E for now and the more senior reviewer will let me know if there's an even better approach.


Example #2: My TL mentioned that I need to depend on team T's API to implement that building block of my project.
* Extreme getting things done attitude: Let me check what API endpoints they support. Endpoint E1 won't work, E2 won't work, but E3 will. I will use it and will skip checking what other endpoints they offer.
* Extreme long-term investor attitude: Let me check what other APIs exist that does something similar. Nothing looks promising, I will use team T's API then. Let me see all endpoints they offer. E5 is an interesting endpoint, how did they implement it and which storage engine did they use. For my project, I will use endpoint E4. Let me check which endpoint did others use when they needed to do something similar. Oh someone used endpoint E6 instead. Let me try to analyze which one will provide better performance.
* Balanced approach for a junior: Let me check all related API endpoints they support. The best two are E4 and E6. Their documentation and implementation looks very complicated, let me ask someone with more knowledge about them which one is better to use. My TL mentioned that E6 is better for our case because of reason R. Nice, I learned something new, I will use E6.

Example #3: I got assigned a task to fix the bug in function F.
* Extreme getting things done attitude: Fixes the mentioned bug in the function. Makes sure the tests reflects the fix. Marks the task done.
* Extreme long-term investor attitude: Tries to understand why the buggy use case matters and how does the user ends needing to use the product that way. Reproduces the bug themselves and try to find other bugs in the feature. Spends time understanding the function and the class. Finds a line in another function not following the best practices, so spends time in rewriting it, testing it, and sending a pull request for it. Goes back to the buggy function. Rewrites it. Double-checks if others have written simila rlogic differently soemwhere in the codebase. Writes tests, and marks task done.
* Balanced attitude for a junior: Understands how does the function fits in the class and what does the class do. Skims through the class and finds a standard library function that he never seen before. Checks the documentation of what it does. Goes back to the buggy function,  Debugs and finds the issue with the current code, Fixes the bug, writes the test, and marks the task done

Example #4: I need to debug a problem with a feature.
* Extreme getting things done attitude: I'll try to find the code related to this feature. I'll try to read it quickly may I spot the issue. I found something that doesn't look in its place. I will remove it and try. The issue isn't fixed. May be that other line of code that looks complicated. I'll change it and retry. The bug doesn't show up. Mark fixed.
* Extreme long-term investor approach: It's the first bug I am seeing in this codebase. However, I need to know what's the best debugger people use to debug issues in this codebase. The debugger looks better on IDE X, I'll start learning and using it. Looks like the issue is in the logic of this function. However, I want first to understand how is this class structured and why it is implemented that way, etc..
* Balanced approach: I will check what are the possible ways people debug these issues. Looks like I can just do it by checking the code and adding some logs when needed. Given that I rarely need to work in this codebase, I will not spend time installing and learning how to use its debugger and try to get around with faster methods, but good that I knew about this debugger for the future.

It's definitely not an exact science and the prior examples are just to deliver my opinion. You might find yourself in one of those situations with a different balanced approach based on how much you invested in your last project, how much left until the deadline of this project and many other factors.

The main idea is to keep in mind both attitudes and to not let yourself stick to only one of them in the expense of the other.
