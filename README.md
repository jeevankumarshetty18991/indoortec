**Steps to deploy on Git:**
1. Go inside your project folder
cd path/to/your/website-folder

2. Initialize Git (if not already done)
git init

3. Add your remote GitHub repository
 git remote add origin https://github.com/jeevankumarshetty18991/indoortec

4. Check if it’s linked correctly:
git remote -v


5. Stage all files
git add .

6. Commit your changes
git commit -m "Initial commit"


7. Push to GitHub
If your repo is empty (newly created):
git branch -M main
git push -u origin main

8. If your repo already has code and you want to overwrite it:
git push -u origin main --force
