---
layout: post
title: Comments are live and more stuff
tags:
- Python
- Django
- jQuery
- Dillinger
- Markdown
---

I have updated my blog to allow for anonymous comments using the [django comments framework](https://docs.djangoproject.com/en/dev/ref/contrib/comments/)!

I chose to go anonymous because as it says in the [Zen of Python](http://www.python.org/dev/peps/pep-0020/) that `Simple is better than complex.`

The jQuery hack hasn't been implemented yet but will be soon. The only problem I have is that since I am using the django comments my sites navigation styles I am using don't apply when there is an error with the comment form. Other than that I am satisfied with the simple comments that are now live with my blog.

The next update for comments will be to allow for [markdown](http://daringfireball.net/projects/markdown/) because its awesome!

As I mentioned in a [previous post](http://edhedges.com/blog/archives/next-items-my-agenda/) I wanted to implement markdown syntax to create blog posts and I did!

My custom admin form for my blog is just a simple form that reads markdown and converts it to look great once posted but it isn't the best for actually writing the post. That is why I have been using [Dillinger](http://dillinger.io/). The real time markdown and html5 editing is amazing with a great looking interface. In my opinion there isn't a better free online editor.

List view of next items on my agenda:

* Make that quick jquery/style change to keep uniformity (because uniformity rocks)
* Adding markdown to the blog comments
* Hopefully pick up some freelance projects along the way
* Implement the ability to add media to my blog app
* In march I will be overhauling my [django boilerplate](               https://github.com/edhedges/eds-djangoplate)

That wraps it up for me thanks for reading!