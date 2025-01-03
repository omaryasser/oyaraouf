---
title: "The Stupidity of Insisting on the Wrong Questions"
date: "2024-01-07"
type: "Post"
---

Imagine the following scenario: The billing alerts of a software system start firing because of the unusually high money burn rate. That happened directly after a bad configuration was rolled out. That configuration changes the number of instances of the system from 10 to 100 needlessly.

Now imagine two people are debugging the issue. The first one (Person A) found the bad configuration change and the second one (Person S) found that there are 90 new instances that were started recently. The conversation goes like this:

A: I think I know the root cause.

S: No, wait! I think I also found it. Look, these 90 instances were started shortly before the alert. We should just kill them.

A: No, I think that will not actually fix the issue, that's just a symptom of the root cause. Even if we kill them now, another 90 will automatically run again because...

S: Wait wait! Can I just ask you a simple question?

A: Go ahead

S: Are these 90 instances expected to be there?

A: No, but...

S: Then it's simple, let's just kill them.

A: But that will not solve the problem because...

S: Wait! It's a very simple yes or no question that we can simply base decisions on. Do we expect these instances to be there?!! Yes or No!

A: Well, I know where your question is going and I want to explain to you before answering because it's going on the wrong dire...

S: I can't believe how hard it is to answer such a very simple yes/no question, come on!!

A: Well, it's not hard at all but you are asking the wrong question that will mislead you and your team and you also keep interrupting me before I explain to you the complete picture. I need first to explain to you the pipeline that starts these instances and tell you that...

S: I asked 100 other people before you and they all agree that these instances shouldn't be up, why is it so hard for you to acknowledge that too?

A: Do you want to solve the root cause or do you want us to spend our lives killing instances?

S: These instances are the root cause. I am the one who's not really sure that you want to solve the problem because, for some reason, you keep running away from a super simple question.
