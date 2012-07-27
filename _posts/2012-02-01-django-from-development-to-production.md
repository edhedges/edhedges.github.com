---
layout: post
title: Django from development to production
tags:
- Python
- Django
- Development
- Production
---

In this blog I will briefly describe my process of taking my local development work and putting it into production which is what I did with this site and its features.

For my development process I am using the simple local server that django/python provides you by running:

`python manage.py runserver`

If you are a more experienced dev then there are things such as [virtualenv](http://pypi.python.org/pypi/virtualenv) and [fabric](http://docs.fabfile.org/en/1.3.4/index.html) but I kept it simple for this first large project.

I use [webfaction](http://www.webfaction.com/) as my hosting service and love them. The admin side allows for easy installation of django and MySQL database creation from the browser! If you are looking into doing development I would definitely check out webfaction.

Now getting back on track below will be a list of things that will be different for production in the settings.py file from your local project.

- Set DEBUG and TEMPLATE_DEBUG = False
- Make sure to change your DATABASES if you plan on not using sqlite3
- Lastly make sure your static, media, and template settings are changed to match your production file layout.

I think the first two are pretty self explanatory and well documented in the django docs but the third gave me a bit of a headache. During development django will get static files from within your project but when DEBUG = False ([which it should be when its in production](https://docs.djangoproject.com/en/dev/ref/settings/#std:setting-DEBUG)) django will not serve those static files. In webfaction I have made a static application which lives at a specific URL and that will serve all my css, js, and other static files.
For a more in depth look at deploying django check out the [django book chapter 12](http://www.djangobook.com/en/2.0/chapter12/). It is a bit old but got me through.

That sums it up thanks for reading!