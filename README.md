# Mini Message Board

A full-stack message board application built with Node.js, Express, and PostgreSQL as part of The Odin Project curriculum.

## Features

- 📝 View all messages on the homepage with username, text, and timestamp
- ✍️ Create new messages with form validation
- 👁️ View individual message details
- 🗄️ PostgreSQL database integration
- ✅ Server-side validation with express-validator
- 🏗️ Clean MVC architecture with controllers and routes
- 🔄 Form state preservation on validation errors
- 🌍 Environment variable support for database configuration

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **EJS** - Templating engine for rendering views
- **PostgreSQL** - Relational database
- **express-validator** - Server-side form validation
- **dotenv** - Environment variable management
- **pg** - PostgreSQL client for Node.js

## Project Structure

```
MessageBoard/
├── app.js                      # Main application entry point
├── controllers/                # Controller logic (business logic)
│   ├── messageController.js    # Message CRUD operations
│   └── newMessageController.js # New message form controller
├── routes/                     # Route definitions
│   ├── indexRouter.js          # Main routes (/, /message/:id)
│   └── newRouter.js            # New message routes (/new)
├── db/                         # Database configuration
│   ├── pool.js                 # PostgreSQL connection pool
│   ├── queries.js              # Database query functions
│   └── populatedb.js           # Database seeding script
├── views/                      # EJS templates
│   ├── index.ejs               # Homepage (all messages)
│   ├── message.ejs             # Single message view
│   ├── form.ejs                # New message form
│   └── partials/
│       └── error.ejs           # Error display partial
├── errors/                     # Custom error classes
│   └── MessageNotFoundError.js
├── public/                     # Static assets
├── .env                        # Environment variables (not tracked)
├── .gitignore                  # Git ignore rules
└── package.json                # Project dependencies
```

## Installation

1. **Clone the repository:**
```bash
git clone https://github.com/abhishekp-0/MessageBoard.git
cd MessageBoard
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up PostgreSQL database:**
   - Create a PostgreSQL database named `message_board`
   - Update credentials in `.env` file (see Configuration section)

4. **Create `.env` file in project root:**
```env
DATABASE_URL="postgresql://username:password@localhost:5432/message_board"
PORT=3000
```

5. **Seed the database:**
```bash
# Using local database URL from .env
npm run db:seed

# Or provide URL directly
node db/populatedb.js "postgresql://username:password@localhost:5432/message_board"
```

## Usage

**Development mode** (with auto-reload):
```bash
npm run dev
```

**Production mode:**
```bash
# Seed production database and start server
npm run prod

# Or manually
npm run db:seed:prod "postgresql://prod-url"
node app.js
```

The application will be available at `http://localhost:3000`

## Database Schema

```sql
CREATE TABLE messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR(280) NOT NULL,
    username VARCHAR(50) NOT NULL,
    added TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Display all messages |
| GET | `/new` | Show new message form |
| POST | `/new` | Create a new message (with validation) |
| GET | `/message/:id` | View individual message details |

## Form Validation

The application validates:
- **Message text**: Required, 1-280 characters
- **Username**: Required, 1-50 characters, alphanumeric only
- Form data is preserved on validation errors for better UX

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with auto-reload |
| `npm run db:seed` | Seed local database using .env URL |
| `npm run db:seed:prod` | Seed production database (requires URL argument) |
| `npm run prod` | Seed production DB and start server |

## Environment Variables

Create a `.env` file with:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
PORT=3000
```

**Note:** The `.env` file is gitignored and should never be committed to version control.

## Database Setup

### Local Development
```bash
# Create database
createdb message_board

# Seed with sample data
npm run db:seed
```

### Production
```bash
# Seed production database (run once after deployment)
node db/populatedb.js "your-production-database-url"
```

## Contributing

This is a learning project from The Odin Project. Feel free to fork and experiment!

## License

Open source - feel free to use for learning purposes.

## Acknowledgments

- [The Odin Project](https://www.theodinproject.com/) - For the excellent curriculum and project guidance
- PostgreSQL community for excellent documentation
