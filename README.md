# Project

This is a small static site prepared for deployment on Vercel.

What I added:

- Basic repo files (.gitignore, package.json, vercel.json)
- Existing source files: `index.html`, `script.js`, `style.css`

How to push to GitHub and deploy on Vercel

1. Initialize git (if not already):

   git init
   git add .
   git commit -m "chore: initial commit"

2. Create a GitHub repo (option A, using GitHub CLI):

   gh repo create <owner>/<repo> --public --source=. --remote=origin --push

   OR create the repo on github.com and add a remote:

   git remote add origin https://github.com/<owner>/<repo>.git
   git branch -M main
   git push -u origin main

3. Deploy on Vercel:

   - Go to https://vercel.com/new
   - Import the GitHub repository and follow the prompts
   - For this static project, the default settings are fine (Framework: Other)

Enjoy!