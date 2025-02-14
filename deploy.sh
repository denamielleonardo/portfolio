#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting Angular GitHub Pages Deployment..."

# Ensure we are in the Angular project root
if [ ! -f "angular.json" ]; then
    echo "❌ Error: This script must be run from the Angular project root."
    exit 1
fi

# Build Angular project
echo "🛠️ Building Angular app..."
ng build --configuration production

# Ensure docs/ exists
if [ ! -d "docs" ]; then
    echo "❌ Error: Build failed! 'docs/' folder not found."
    exit 1
fi

# Disable Jekyll
echo "📌 Disabling Jekyll..."
touch docs/.nojekyll

# Commit and push changes
echo "📦 Committing and pushing changes..."
git add docs/.nojekyll
git add docs/
git commit -m "Deploy Angular to GitHub Pages"
git push origin main

echo "✅ Deployment successful!"
