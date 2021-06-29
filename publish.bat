cd C:\\Users\\xx299\\Documents\\blog\\

REM echo "Deleting old publication"

REM rm -rf public
REM mkdir public
REM pause
REM git worktree prune

REM rm -rf .git/worktrees/public/

REM pause
REM echo "Checking out gh-pages branch into public"

REM git worktree add -B gh-pages public origin/gh-pages

REM echo "Removing existing files"

rm -rf public/*

REM echo "Generating site"

hugo

echo "Updating gh-pages branch"
REM pause
cd C:\\Users\\xx299\\Documents\\blog\\public\\

git add --all

git commit -m "Publishing to gh-pages (publish.sh)"


echo "Pushing to github"

git push --all -f

REM pause