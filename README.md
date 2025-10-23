# Mini Message Board

A simple message board application built with Node.js and Express as part of The Odin Project curriculum.

## Features

- View all messages on the homepage
- Create new messages with username and text
- View individual message details
- Clean MVC architecture with controllers and routes

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **EJS** - Templating engine for rendering views

## Project Structure

```
MessageBoard/
├── app.js                 # Main application entry point
├── controllers/           # Controller logic
│   ├── messageController.js
│   └── newMessageController.js
├── routes/               # Route definitions
│   ├── indexRouter.js
│   └── newRouter.js
├── views/                # EJS templates
│   ├── index.ejs
│   ├── message.ejs
│   └── form.ejs
├── public/               # Static assets
├── errors/               # Custom error classes
└── package.json          # Project dependencies
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/abhishekp-0/MessageBoard.git
cd MessageBoard
```

2. Install dependencies:
```bash
npm install
```

## Usage

Start the development server:
```bash
npm start
```

Or with auto-reload during development:
```bash
node --watch app.js
```

The application will be available at `http://localhost:3000`

## Routes

- `GET /` - Display all messages
- `GET /new` - Show new message form
- `POST /new` - Create a new message
- `GET /message/:id` - View individual message details

## Contributing

This is a learning project from The Odin Project. Feel free to fork and experiment!

## License

Open source - feel free to use for learning purposes.

## Acknowledgments

- [The Odin Project](https://www.theodinproject.com/) - For the excellent curriculum
