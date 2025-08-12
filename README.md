# StreakFlow - Personal Habit Tracker & Productivity Dashboard

*"Flow into your streak"*

A modern web application built with Next.js, React, and TypeScript to help users build better habits and boost productivity through visual streak tracking and flow state optimization.

## 🚀 Features

- **Habit Tracking**: Visual chain tracking for daily habits (similar to GitHub contributions)
- **Daily Focus**: Set and track 1-3 priority tasks for each day
- **Journal**: Quick daily reflection and gratitude entries
- **Pomodoro Timer**: Integrated focus timer for productivity sessions
- **Analytics**: Progress visualization and habit streaks
- **Authentication**: Secure user accounts and data protection

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** with App Router
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Zustand** for state management
- **React Query** for data fetching and caching
- **Lucide React** for icons
- **Date-fns** for date manipulation

### Backend & Database
- **Next.js API Routes**
- **Prisma ORM**
- **NextAuth.js** for authentication
- **SQLite** (development) / **PostgreSQL** (production)

### Testing & Development
- **Jest** and **React Testing Library**
- **ESLint** for code linting
- **TypeScript** for type safety

## 📦 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Main dashboard
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
├── lib/                  # Utilities and configurations
├── store/                # Zustand store definitions
├── types/                # TypeScript type definitions
└── __tests__/            # Test files
```

## 🚦 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 🧪 Testing

Run tests with:
```bash
npm run test
npm run test:watch  # Watch mode
```

## 📈 Key Technical Implementations

### SSR & Authentication
- Dashboard pages use `getServerSideProps` for secure data fetching
- Protected routes with NextAuth.js middleware
- User-specific habit and journal data rendering

### State Management
- **Global State (Zustand)**: Habit status, timer state, journal inputs
- **Local State**: Component-specific interactions and UI states
- **Server State (React Query)**: API data with optimistic updates

### Performance Optimizations
- Code splitting with dynamic imports
- Image optimization with `next/image`
- Lazy loading for non-critical components
- React Query caching for reduced API calls

### API Design
- RESTful API routes for CRUD operations
- Error handling and validation
- Rate limiting and security headers

## 📱 Responsive Design
- Mobile-first approach with Tailwind CSS
- Accessible components following WCAG guidelines
- Cross-browser compatibility

## 🚀 Deployment

The application is configured for easy deployment on Vercel:

```bash
npm run build
npm run start
```

## 🤝 Development Workflow

- **Git Flow**: Feature branches, pull requests, code reviews
- **CI/CD**: Automated testing and deployment
- **Code Quality**: ESLint, Prettier, TypeScript strict mode

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
