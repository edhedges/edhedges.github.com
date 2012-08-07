---
layout: post
title: New project idea "FormLegend"
tags:
- FormLegend
- TechStack
- Python
- Ruby
- easyXDM
- porthole
- PostgreSQL
- MySQL
- Redis
- Memcached
---

#### Introduction to FormLegend ####

I recently started using [disqus](http://disqus.com/) to power the comments on my [jekyll](http://jekyllrb.com/) powered static website. This got me thinking "What else could a static website need besides a blog and comments?". So I compared the features I had on my Django powered site and the only difference is that I had a Contact Form. That is when I came up with the idea for FormLegend.

There is a project similar to what I will be working on called [simpleform](http://getsimpleform.com/), but I would like FormLegend to be easier to use, more customizable (validation especially), secure, and highly scalable. I am doing this as a way to learn a lot while also providing a useful web service for anyone and everyone for free!

#### Technology Stack ####

I plan to use many open source technologies to make FormLegend. I haven't completely decided which ones, but I have some options before me.

FormLegend will work in one of two different ways. The first way is how disqus does things which is using cross-domain JavaScript communication and the other way is to use an api token or handle everything on the server side the way simpleform does things. I really like the way that disqus does things and am leaning in that direction.

Below are the open source libraries I am looking at.

#### Front End Application Components ####

* [Haml](http://haml.info/) or [ERB](http://ruby-doc.org/stdlib-1.9.3/libdoc/erb/rdoc/ERB.html) Templating compiling to HTML5
* [Sass](http://sass-lang.com/) compiling to CSS3
* [Coffeescript](http://coffeescript.org/) (maybe) compiling to JavaScript or normal JavaScript

If I do go with cross-domain JavaScript communication I will use one of two libraries:

* [easyXDM](https://github.com/oyvindkinsey/easyXDM) - Disqus uses this one.
* or
* [porthole](https://github.com/ternarylabs/porthole)

#### Back End Application Components ####

* [Python](http://www.python.org/) along with a web framework and other libraries.
* or
* [Ruby](http://www.ruby-lang.org/en/) along with a web framework and other libraries.

#### SQL Databases ####

* [PostgreSQL](http://www.postgresql.org/)
* or
* [MySQL](http://www.mysql.com/)

#### Key Value Storage for Caching ####

* [Redis](http://redis.io/)
* or
* [Memcached](http://memcached.org/)
* Possibly both?

I have never used any of these components before so I don't really know what to expect. I plan on doing quite a bit of research to allow for FormLegend to be highly scalable.