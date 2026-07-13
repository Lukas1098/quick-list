# Advisor Availability

Frontend technical challenge built with Next.js, TypeScript and Tailwind CSS.

## Features

- Advisor listings with pricing information
- Call and chat availability states
- Disabled actions when an advisor is unavailable
- Availability updates every 30 seconds
- Responsive layout
- Server-side initial data loading
- Client-side availability polling

## API availability

The APIs provided in the original challenge were unavailable during development.

To keep the application functional, I used local mock data and implemented a local API route that simulates availability changes every 30 seconds. The data-access logic is separated so the original endpoints can be connected without modifying the UI.

## Running locally

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Base UI

## Time spent

Approximately 45 minutes, including implementation and testing.
