#!/bin/bash

# Cloudflare Pages Deployment Script for Happy Home Care
# Usage: ./scripts/deploy-to-cloudflare.sh

set -e

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_DIR"

echo "=========================================="
echo "  Cloudflare Pages Deployment Script"
echo "  Happy Home Care Website"
echo "=========================================="
echo ""

# Check if .open-next directory exists
if [ ! -d ".open-next" ]; then
    echo "ERROR: .open-next directory not found"
    echo ""
    echo "Please run the build first:"
    echo "  npm run build:cloudflare"
    echo ""
    exit 1
fi

echo "Step 1: Checking Cloudflare authentication..."
echo ""

# Check if wrangler is authenticated
if ! npx wrangler whoami > /dev/null 2>&1; then
    echo "❌ Not authenticated with Cloudflare"
    echo ""
    echo "Please authenticate using one of these methods:"
    echo ""
    echo "Method 1: Interactive Login"
    echo "  $ npx wrangler login"
    echo ""
    echo "Method 2: Environment Variables"
    echo "  $ export CLOUDFLARE_API_TOKEN=\"your-token\""
    echo "  $ export CLOUDFLARE_ACCOUNT_ID=\"your-account-id\""
    echo ""
    echo "To get credentials:"
    echo "  - API Token: https://dash.cloudflare.com/account/api-tokens"
    echo "  - Account ID: https://dash.cloudflare.com/"
    echo ""
    exit 1
fi

echo "✅ Cloudflare authentication verified"
echo ""

# Check wrangler.toml exists
if [ ! -f "wrangler.toml" ]; then
    echo "ERROR: wrangler.toml not found"
    exit 1
fi

echo "Step 2: Verifying build output..."
echo ""

# Verify critical build files
if [ ! -f ".open-next/worker.js" ]; then
    echo "ERROR: .open-next/worker.js not found"
    echo "Please run: npm run build:cloudflare"
    exit 1
fi

echo "✅ Build output verified"
echo ""
echo "Build contents:"
find .open-next -maxdepth 1 -type d -exec basename {} \; | sort
echo "  worker.js ($(wc -c < .open-next/worker.js) bytes)"
echo ""

# Extract project info from wrangler.toml
PROJECT_NAME=$(grep "^name = " wrangler.toml | cut -d'"' -f2)
COMPAT_DATE=$(grep "compatibility_date = " wrangler.toml | cut -d'"' -f2)

echo "Step 3: Deployment Information"
echo ""
echo "  Project Name: $PROJECT_NAME"
echo "  Build Directory: .open-next"
echo "  Compatibility Date: $COMPAT_DATE"
echo "  Node.js Compatibility: Enabled"
echo ""

echo "Step 4: Starting deployment..."
echo ""

# Run the deployment
if npx wrangler pages deploy .open-next; then
    echo ""
    echo "=========================================="
    echo "✅ DEPLOYMENT SUCCESSFUL"
    echo "=========================================="
    echo ""
    echo "Your website has been deployed to Cloudflare Pages!"
    echo ""
    echo "Next steps:"
    echo "  1. Visit https://dash.cloudflare.com"
    echo "  2. Go to Pages > $PROJECT_NAME"
    echo "  3. View your deployment and live URL"
    echo "  4. Configure custom domain if needed"
    echo ""
    echo "Local preview:"
    echo "  npm run preview"
    echo ""
else
    echo ""
    echo "=========================================="
    echo "❌ DEPLOYMENT FAILED"
    echo "=========================================="
    echo ""
    echo "Please check the error messages above."
    echo ""
    echo "Common solutions:"
    echo "  - Ensure wrangler is authenticated: npx wrangler login"
    echo "  - Rebuild with: npm run build:cloudflare"
    echo "  - Check wrangler.toml configuration"
    echo ""
    exit 1
fi
