# Cloudflare Pages Deployment Guide - Happy Home Care

## Current Status

### Build Status: ✅ COMPLETE
- Build completed successfully with `npm run build:cloudflare`
- Output directory: `.open-next/`
- Build configuration: `open-next.config.ts`
- Wrangler configuration: `wrangler.toml`

### Build Output Structure
```
.open-next/
├── worker.js                    # Cloudflare Worker entry point
├── assets/                      # Static assets (_next, images)
├── cloudflare/                  # Cloudflare-specific configuration
├── cloudflare-templates/        # Edge runtime templates
├── middleware/                  # Middleware handlers
├── server-functions/            # Server-side functions
├── cache/                       # Cache configuration
└── dynamodb-provider/          # Database provider stubs
```

## Deployment Requirements

### Authentication Status: ⚠️ NOT AUTHENTICATED

Before deployment, you need Cloudflare authentication. You have TWO options:

### Option 1: Interactive Login (Recommended for Development)
```bash
cd /root/github-repos/medical-service-company
npx wrangler login
```

This will:
1. Open a browser window to authenticate with Cloudflare
2. Grant wrangler permission to manage your Pages projects
3. Store authentication token locally at `~/.wrangler/config.json`
4. Allow you to deploy without environment variables

Then deploy:
```bash
npm run deploy
# OR
npx wrangler pages deploy .open-next
```

### Option 2: API Token Authentication (Recommended for CI/CD)

Set these environment variables before deployment:

```bash
export CLOUDFLARE_API_TOKEN="your-api-token-here"
export CLOUDFLARE_ACCOUNT_ID="your-account-id-here"
```

Then deploy:
```bash
npm run deploy
```

**To get your credentials:**
1. Go to https://dash.cloudflare.com/account/api-tokens
2. Create a token with "Pages" permission
3. Get your Account ID from https://dash.cloudflare.com/

## Configuration Files

### wrangler.toml (Current Configuration)
```toml
name = "medical-service-company"
compatibility_date = "2024-12-30"
compatibility_flags = ["nodejs_compat"]
pages_build_output_dir = ".open-next"

[vars]
NODE_ENV = "production"
```

**Key Settings:**
- `compatibility_date`: Node.js compatibility runtime version
- `nodejs_compat`: Enables Node.js compatibility in Cloudflare Workers
- `pages_build_output_dir`: Points to OpenNext build output

### open-next.config.ts (Build Configuration)
```typescript
const config: OpenNextConfig = {
  default: {
    override: {
      wrapper: "cloudflare-node",      // Use Cloudflare Node.js runtime
      converter: "edge",                // Convert to Edge runtime
      proxyExternalRequest: "fetch",    // Use fetch for external requests
      incrementalCache: "dummy",        // ISR not supported on Pages
      tagCache: "dummy",                // Tag-based revalidation not supported
      queue: "dummy",                   # Background jobs not supported
    },
  },
  edgeExternals: ["node:crypto"],
  middleware: {
    external: true,
    override: {
      wrapper: "cloudflare-edge",
      converter: "edge",
      proxyExternalRequest: "fetch",
    },
  },
};
```

**Configuration Explanation:**
- **cloudflare-node wrapper**: Runs on Cloudflare's Node.js-compatible worker runtime
- **edge converter**: Converts Next.js code to Cloudflare Edge format
- **dummy caches**: Cloudflare Pages doesn't support incremental static regeneration (ISR) or tag-based revalidation
- **fetch for external requests**: Uses Cloudflare's fetch to proxy external API calls

## Deployment Commands

### Build
```bash
npm run build:cloudflare
```
Creates optimized build in `.open-next/` directory.

### Deploy
```bash
npm run deploy
```
Equivalent to:
```bash
npx wrangler pages deploy .open-next
```

### Preview Locally
```bash
npm run preview
```
Equivalent to:
```bash
wrangler pages dev
```
Starts local development server mimicking Cloudflare Pages environment.

## Deployment Checklist

- [ ] Authenticate with Cloudflare
  - [ ] Option 1: Run `npx wrangler login` for interactive auth
  - [ ] Option 2: Set `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` env vars
- [ ] Run `npm run build:cloudflare` (if not already done)
- [ ] Run `npm run deploy`
- [ ] Verify deployment in Cloudflare dashboard
- [ ] Test deployed site functionality
- [ ] Set up custom domain (if needed)
- [ ] Configure environment variables in Cloudflare dashboard (if needed)

## Post-Deployment Steps

### Access Your Deployment
1. Log into Cloudflare Dashboard: https://dash.cloudflare.com
2. Navigate to Pages
3. Select "medical-service-company" project
4. View deployments and access live URL

### Configure Custom Domain
1. In Cloudflare Pages project settings
2. Go to "Custom Domain"
3. Add your domain (e.g., happyhomecare.com)
4. Follow DNS setup instructions

### Environment Variables (if needed)
1. In project settings, go to "Settings"
2. Navigate to "Environment variables"
3. Add any required variables for production

### Monitoring & Analytics
- View deployment logs in Cloudflare dashboard
- Monitor traffic and analytics
- Set up alerts for build/deployment failures

## Troubleshooting

### Issue: "Not authenticated" error
**Solution:** Run `npx wrangler login` or set `CLOUDFLARE_API_TOKEN` environment variable

### Issue: Project not found
**Solution:**
1. Create project in Cloudflare dashboard first
2. Verify project name in `wrangler.toml` matches Cloudflare dashboard

### Issue: Build fails during deployment
**Solution:**
1. Check build logs: `npm run build:cloudflare`
2. Verify `.open-next/` directory exists
3. Check `pages_build_output_dir` in `wrangler.toml`

### Issue: Runtime errors after deployment
**Solution:**
1. Check Cloudflare Pages logs in dashboard
2. Verify `compatibility_flags = ["nodejs_compat"]` is set
3. Check for unsupported Node.js APIs (use fetch instead of http module)

## Supported/Unsupported Features

### ✅ Supported on Cloudflare Pages
- Static file serving
- Server-side rendering (SSR) with Node.js
- API routes and server functions
- Middleware
- Dynamic routes
- Image optimization
- CSS/JS bundling and minification

### ❌ Not Supported (Fallback to dummy cache)
- Incremental Static Regeneration (ISR)
- Background jobs
- Tag-based revalidation
- Long-running processes

## Performance Optimization

### Build Size
The `.open-next/` build includes:
- Static assets: ~2-5MB (depends on images)
- Server functions: ~1-3MB
- Worker code: ~500KB

### Cold Start
- Worker startup: <100ms (Cloudflare Workers are typically fast)
- First request: May include function initialization

### Caching Strategy
- Static assets cached via `.cloudflare_json` rules
- Set cache headers in API routes for better performance

## Next Steps

1. **Authenticate**: Run `npx wrangler login`
2. **Deploy**: Run `npm run deploy`
3. **Verify**: Check Cloudflare dashboard for successful deployment
4. **Monitor**: Set up alerts and monitoring in Cloudflare dashboard

## Resources

- OpenNext Cloudflare Documentation: https://github.com/opennextjs/opennextjs-cloudflare
- Cloudflare Pages Docs: https://developers.cloudflare.com/pages/
- Wrangler CLI Docs: https://developers.cloudflare.com/workers/wrangler/
- Next.js on Cloudflare: https://developers.cloudflare.com/pages/framework-guides/nextjs/

## Support

For issues with:
- **Build process**: Check `.open-next/` output and `open-next.config.ts`
- **Deployment**: Check wrangler logs and Cloudflare Pages dashboard
- **Runtime**: Check Cloudflare Pages logs in dashboard
