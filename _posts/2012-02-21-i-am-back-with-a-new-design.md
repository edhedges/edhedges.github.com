---
layout: post
title: Back with a new design
tags:
- Python
- Django
- Fabric
---

Well I have been hard at work in the design department because I wanted
my site to be responsive and look good on any browser size. I have also
been working on my custom blog admin and the thing I am most proud of is
that I have built a wonderful django boilerplate.

My boilerplate is on github and can be found [here][]. I built the
boilerplate because I wanted a standard setup for all my future
projects. The boilerplate will not only help me speed up my development
but will make integrating outside code simple as well as making
deployment a simple task thanks to [fabric][].

Below I will show you a fab function that runs when I deploy to
production.

    def deploy():
        """
        Deploys the django project.
        """
        run('mkproject %s' % PROJECT_ID)
        with cd(env.current_project_dir):
            run('git init')
            run('git pull https://edhedges@bitbucket.org/edhedges/%s.git master' % PROJECT_ID)
            run('pip-2.7 install -r conf/requirements.txt')
            run('python2.7 manage.py new_secret')
            run('python2.7 manage.py syncdb')
            run('python2.7 manage.py migrate')
            run('mv static/* %s' % env.static_dir)
            with cd(env.static_dir):
                run('rm -rf admin')
        replace_httpdconf()

This command I can run by typing ‘fab deploy’ makes a project directory
and a virtual environment, then it initializes a git repo in the project
folder and pulls my project in. After that is done it install all
dependencies using pip and it moves the static folder into my static
url. After all that is done it replaces the default httpd.conf file with
one tailored to my project and restarts apache.

Sta tuned for more django/python awesome!

  [here]: https://github.com/edhedges/eds-djangoplate
  [fabric]: http://docs.fabfile.org/en/1.4.0/index.html