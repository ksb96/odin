# //to change from 'master' to 'main'
git config --global init.defaultBranch main

# // **
 git branch -m OLD-BRANCH-NAME NEW-BRANCH-NAME
 git fetch origin
 git branch -u origin/NEW-BRANCH-NAME NEW-BRANCH-NAME
 git remote set-head origin -a
#  // **

#  // OPTIONAL
 git remote prune origin

#  // to exit from current line(in CLI)
 press 'q' 
 OR
 Ctrl + C

#  // git clone
 git clone git@github.com:USER-NAME/REPOSITORY-NAME.git

#  // create a new file
 touch hello_world.txt

#  // to see status of current file
 git status

# // staging to commit
git add hello_world.txt //file NAME

# // commit
git commit -m "committed"

# // log
git log

# // upload/push your code(github) 
git push 
OR 
# // for specific branch 
git push orgin master

