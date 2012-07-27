---
layout: post
title: Java and Django Development
tags:
- Python
- Django
- Java
- JSF
- RichFaces
- ACEware
---

Last week I found [this post](http://softwaremaniacs.org/blog/2011/01/07/django-micro-framework/en/) while browsing the [Python subreddit](http://www.reddit.com/r/python). I was intrigued by the idea of making my django projects super light weight and so I have been working on a boilerplate for django as a "micro framework". My progress as well as the source can be found [here](https://github.com/edhedges/edjmicro). After this project I plan on building a lightweight Content Management System and hope it doesn't need to be backed by a database.

#### Work related ventures ####
The first task I was assigned at my job was to write some java code that allows an admin user of the system to find duplicate users and then be able to merge those users. This task allowed me to hit the ground running and really learn a lot about the [JSF Framework](http://www.javaserverfaces.org/) and the [RichFaces Project](http://www.jboss.org/richfaces). I also learned more about MySQL and actually writing SQL. Having to do this has really made me thankful that django has an Object Relational Mapper with a rich [API](https://docs.djangoproject.com/en/dev/topics/db/queries/), because this makes all the database work stupidly simple.

Throughout the project I wrote xml, jQuery, .jsp, SQL, and of course Java. All of my code is contained within 5 files. One thing I hope to improve while working on the web system is what the urls look like. Coming from django I am disappointed there isn't a simple way to make urls look a little more elegant. For example all the urls have a .jsf extension but with django you can write your patterns and make pretty urls that are readable, dynamic, and don't contain file extensions (unless for some sick reason you actually write a regular expression to match something like afile.php, but seriously who would do that?).

Overall I am really enjoying the job and can't wait to get my hands on my next project.

Thanks for reading!