#!/bin/bash

# Production deployment script for mkat website
# This script builds the project and prepares it for Cloudflare Pages deployment

set -e

echo "🚀 Starting production build for mkat website..."

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Run type checking
echo "🔍 Running type checks..."
npm run type-check

# Run linting
echo "✨ Running linter..."
npm run lint

# Build the project
echo "🏗️  Building for production..."
npm run build:cloudflare

echo "✅ Build completed successfully!"
echo ""
echo "📁 Build output is in the 'out' directory"
echo "🌐 Ready for Cloudflare Pages deployment"
echo ""
echo "Next steps:"
echo "1. Push your code to your Git repository"
echo "2. Connect your repository to Cloudflare Pages"
echo "3. Set build command: npm run build:cloudflare"
echo "4. Set build output directory: out"
echo "5. Deploy! 🎉"
echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions"
