# Personal Portfolio

Welcome to my personal portfolio! This project showcases my journey in the technology industry, highlighting my skills, experiences, and projects. Here, you'll find insights into my work, accomplishments, and the technologies I specialize in. Whether you're a recruiter, collaborator, or fellow enthusiast, I hope this portfolio gives you a deeper understanding of my passion for innovation and problem-solving.

## Prerequisites

Before cloning the project, ensure you have the following installed on your system:

- **Angular** version 13.3.11
- **Node** version v18.20.4

## Repository Setup

1. Clone the repository:
   git clone 

2. After cloning, switch to the main branch:
   git checkout main

3. Install the required dependencies:
   npm install

4. Start the development server:
   ng serve and run http://localhost:4200/

## Automatic Build and Deploy

- **Run the script to automatically build and deploy on github** ./deploy.sh
- **Website link** [https://denamielleonardo.github.io/portfolio/]

## Manual Build and Deploy

1. rm -rf docs/
2. ng build --configuration production --output-path docs --base-href "/portfolio/"
3. touch docs/.nojekyll
4. git add --force docs/.nojekyll docs/
5. git commit -m "Test Deploy"
6. git push origin main
7. npx angular-cli-ghpages --dir=docs
