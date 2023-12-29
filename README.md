# NEXTJS 14 with NEXT-AUTH template

This is a NEXTJS version 14 with authentication by next-auth template write on TypeScript by <a href="https://www.linkedin.com/in/kiratipat/">Kirato();</a> [ Kiratipat ]

On this template use auth provider GoogleProvider and LineProvider if you want more please checkout Next auth doccument : https://authjs.dev/getting-started/providers

## How to start dev

```bash
Install package
$ pnpm install

Start dev
$ pnpm dev

Start dev useing turbo pack (optional)
$ pnpm dev --turbo

Build project
$ pnpm build

Start server from builded project
$ pnpm start
```

ps. I use pnpm as node package management, you can use what you prefer (such as yarn, npm, bun, etc...)

### Don't forget to config .env file !

```.env
NEXTAUTH_URL=
LINE_CLIENT_ID=
LINE_CLIENT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_SECRET=
```

## Tech Stack

- NEXTJS version 14.0.4
- Tailwind CSS + Daisy UI
- NextAuth.js
