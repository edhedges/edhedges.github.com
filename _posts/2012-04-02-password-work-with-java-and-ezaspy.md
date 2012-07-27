---
layout: post
title: Password work with Java and EzAsPy
tags:
- Java
- Password
- Security
- Django
- Python
- edjmicro
- GitHub
---

#### Java and password resets (work related) ####
If you've read my [previous post](http://edhedges.com/blog/archives/updates-edjmicro-work-and-miscellaneous/) you know that I was working on my second project at work. The project consists of making a password change feature for users of the system. Security is key when it comes to people's data and more specifically people's money. The first phase of this project is to allow for the admin to send a user an email with a link to change their password. The url includes a parameter that has been mangled thoroughly so that it basically looks like gibberish. That parameter is the most important part of the process as we use it as a way allowing or disallowing the user to change their password. This project has been significantly more complex but it's more exciting and I'm enjoying it so far.

#### GitHub, EzAsPy, and more! ####
I have recently started paying a whopping $7 dollars to the wonderful people over at [GitHub](https://github.com/) to be able to have private code repositories. I was using [bitbucket](https://bitbucket.org/) for free private repos but I like everything about GitHub better, plus I'm already using it for my public repositories and I figured I could drop $7 a month for a high quality much deserving service.

In my last post I didn't have [edjmicro](https://github.com/edhedges/edjmicro) completed but I have completed it and used it to start a personal project I am calling EzAsPy. I am still now sure exactly where I want to go with this project but I do know that it is going to be either a static website generator or a CMS type of website. I am very excited about this project because I feel like I'm really getting into some of the core features/standards of websites such as how to do registration, authentication, and main functionality of a product. I plan on open sourcing the project when I push it live.

Once I get registration and authentication and all the little features that go along with it the way I want I plan on creating some sort of boilerplate for getting up and running quickly with the ability to have users. Right now for registration I am using [django-registration](https://bitbucket.org/ubernostrum/django-registration/) but and for authentication I am using the standard Django auth code but am looking at using one of the auth apps that allow for sign in with google, facebook, etc.

Thanks for reading!
