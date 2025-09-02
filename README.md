**Steps to deploy on Git:**
1. Go inside your project folder
_**cd path/to/your/website-folder**_

2. Initialize Git (if not already done)
_**git init**_

3. Add your remote GitHub repository
_** git remote add origin https://github.com/jeevankumarshetty18991/indoortec**_

4. Check if it’s linked correctly:
_**git remote -v**_


5. Stage all files
_**git add .**_

6. Commit your changes
_**git commit -m "Initial commit"**_


7. Push to GitHub
If your repo is empty (newly created):
_**git branch -M main
git push -u origin master**_

8. If your repo already has code and you want to overwrite it:
_**git push -u origin master --force**_
