# Switch to master
git checkout master

# Set origin/master as the default branch to push to
# when on master
git push origin master -u

# Now, when we're on master, this is the same as:
# 'git push origin master'
git push

# Switch to push_example
git checkout push_example

# Set origin/push_example as the default branch to push to
# when on push_example
git push -u origin push_example

# Now, when we're on push_example, this is the same as:
# git push origin push_example
git push
