---
layout: post
title: Blog changes including comments
tags:
- jQuery
---

So I said I was going to be adding comments and I decided to just go for anonymous comments because simpler is better.

In my opinion there is no reason for the user to have to sign in to comment on my blog they can just comment and move on or if they really need to speak to me privately and not in the public eye they can get in touch via the contact form.

I need to do a bit more testing and maybe a little bit of jquery hacking to keep things uniform since I am using django's built in comments I don't get to delegate the views without doing extra work that doesn't need to be done. The problem is that when a user presses the `Add Comment` button they are redirected to a django page with my css/html but I can't pass the template a variable so that my site knows where it is at.

By doing some quick jQuery I should be able to add the one style I need to in order to keep my site uniform. Right before I push it live though I will make sure that all my code is valid from the [W3C Validation Service](http://validator.w3.org/).