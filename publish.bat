cd C:\\Users\\xx299\\my_site\\

echo "Deleting old publication"

rm -rf public
mkdir public

git worktree prune

rm -rf .git/worktrees/public/


echo "Checking out gh-pages branch into public"

git worktree add -B gh-pages public origin/gh-pages

echo "Removing existing files"

rm -rf public/*

echo "Generating site"

hugo

echo "Updating gh-pages branch"

cd C:\\Users\\xx299\\my_site\\public\\

git add --all

git commit -m "Publishing to gh-pages (publish.sh)"


echo "Pushing to github"

git push --all -f

pause