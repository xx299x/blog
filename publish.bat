cd C:\\Users\\xx299\\Documents\\blog\\

REM echo "Deleting old publication"

rm -rf public
mkdir public
REM pause
git worktree prune

rm -rf .git/worktrees/public/

REM pause
REM echo "Checking out gh-pages branch into public"
echo cd C:\\Users\\xx299\\Documents\\blog\\
git worktree add -B gh-pages public origin/gh-pages
REM pause
REM echo "Removing existing files"

REM rm -rf public/*

REM echo "Generating site"

hugo

echo "Updating gh-pages branch"
REM pause
cd public

git add --all

git commit -m "Publishing to gh-pages (publish.sh)"


echo "Pushing to github"

git push --all -f

REM pause