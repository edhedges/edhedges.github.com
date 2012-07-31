Personal website of Eddie Hedges powered by jekyll and GitHub pages.

These three commands are what I will use to keep my master branch and my dev branch to use jekyll
with plugins and host my site with GitHub Pages.

`echo 'message' | git commit-tree dev^{tree}:_site`

This command will out put a random string which is the commits id then use that id in the next command.

`git update-ref refs/head/master SOME_COMMIT_ID`

This will udpate the master branch to only have the contents of _site.

`git update-ref refs/heads/master $(echo 'Add commit message here!' | git commit-tree dev^{tree}:_site -p $(cat .git/refs/heads/master))`

Then push like this:

`git push -f origin master`