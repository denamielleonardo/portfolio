#!/bin/bash

# Exit on any error
set -e

echo "🚀 Starting Angular GitHub Pages Deployment..."

# Ensure we are in the Angular project root
if [ ! -f "angular.json" ]; then
    echo "❌ Error: This script must be run from the Angular project root."
    exit 1
fi

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf docs/

# Build Angular project into docs/
echo "🛠️ Building Angular app..."
ng build --configuration production --output-path docs --base-href "/portfolio/"

# Ensure build was successful
if [ ! -d "docs" ]; then
    echo "❌ Error: Build failed! 'docs/' folder not found."
    exit 1
fi

# Disable Jekyll
echo "📌 Disabling Jekyll..."
touch docs/.nojekyll

# Get commit message from argument or use default
COMMIT_MSG=${1:-"Deploy Angular to GitHub Pages"}

# Commit and push changes
echo "📦 Committing and pushing changes..."
git add --force docs/.nojekyll
git add docs/
git commit -m "$COMMIT_MSG"
git push origin main

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npx angular-cli-ghpages --dir=docs

echo "✅ Deployment successful! 🚀"
