# Event Scheduler Portal

A modern web application for managing and scheduling events, built with React, TypeScript, and Node.js.

## Prerequisites

- Node.js 18.0.0 or later
- npm or yarn
- PostgreSQL database
- Git

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/bhanuvelamuri/es.git
cd es
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL=your_database_connection_string

# Server
PORT=3000
NODE_ENV=development

# Session Secret (generate a secure secret)
SESSION_SECRET=your_session_secret
```

### 4. Database Setup

1. Create a new PostgreSQL database
2. Update the `DATABASE_URL` in your `.env` file with your database connection string
3. Run database migrations:

```bash
npm run db:push
```

### 5. Start the Development Server

```bash
# Start both frontend and backend in development mode
npm run dev

# Or start them separately
# Frontend
npm run dev:client

# Backend
npm run dev:server
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes

## Project Structure

```
├── client/              # Frontend React application
├── server/              # Backend server code
├── shared/              # Shared code between frontend and backend
├── public/              # Static files
├── package.json         # Project dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## Technologies Used

- **Frontend**: React, TypeScript, Vite, Radix UI, Tailwind CSS
- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Session-based
- **State Management**: React Query

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the GitHub repository.
