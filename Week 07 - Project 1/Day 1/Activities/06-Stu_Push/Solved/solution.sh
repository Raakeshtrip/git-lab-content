# Create a new GitHub repo to associate with the local Git repo you've been working on thusfar. Add it as the `origin` remote.
git remote add origin <github_repo_url>

# Next, checkout your `master` branch, and push it to GitHub.
git checkout master
git push origin master
# Or: git push -u origin master

# Create and checkout a new branch
git branch add_gitignore
git checkout add_gitignore
# Or: git checkout -b add_gitignore

# Change something in your project-this adds a .gitignore file
echo ".DS_STORE" > .gitignore
git add .gitignore
git commit -m "Add .gitignore file."

# Push this branch to GitHub
git push -u origin add_gitignore

# Checkout `master`, and merge it with the branch you just created.
git checkout master
git merge add_gitignore

# Push the updated `master` branch to GitHub.
git push
# Or: git push origin master
