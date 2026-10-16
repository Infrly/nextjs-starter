# Next.js starter for Infrly

A minimal [Next.js](https://nextjs.org/) app (App Router), rendered on the server, with a health check. It deploys on [Infrly](https://getinfrly.com/?utm_source=github&utm_medium=listing&utm_campaign=template_nextjs_starter) the first time, with no Dockerfile and no configuration.

## Deploy on Infrly

**Quickest:** sign in at [app.getinfrly.com](https://app.getinfrly.com) and choose **Deploy a template → Next.js**. Infrly creates the project and service and deploys this repository. Infrly is free during its public beta.

**From your own copy:** click **Use this template** on GitHub to copy the repository into your account, then in Infrly choose **New service → Web Service** and pick your copy. Infrly fills in these settings for you:

| Setting | Value |
|---|---|
| Runtime | Node.js |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Start command | `npm start` |
| Health check path | `/api/health` |

Every push to your branch deploys the new version.

## Run it locally

```bash
npm install
npm run dev
```

Then edit `app/page.js`.

## Learn more

- [Infrly documentation](https://docs.getinfrly.com/getting-started.html)
- [Infrly](https://getinfrly.com/?utm_source=github&utm_medium=listing&utm_campaign=template_nextjs_starter): deploy web apps, static sites, cron jobs and databases from GitHub

MIT licensed.
