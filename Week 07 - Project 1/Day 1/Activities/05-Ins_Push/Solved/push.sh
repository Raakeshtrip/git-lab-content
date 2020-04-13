# Create a git repository somewhere...
# ...Then, track a remote called origin to your local repo
# Skip if you've cloned a repo!
# git remote add origin <repo_url>

# Switch to master
git checkout master

# Now, push the master branch to GitHub
git push origin master

# Create and checkout a new branch
git checkout -b push_example

# Push new branch to GitHub
git push origin push_example

# Switch to master
git checkout master

# After others have pushed their branches to GitHub...
git pull
