# Merlin Starter Pack

> Create apps with MERN stack

## Quick Start

```bash
# Install dependencies for back-end
npm install

# Install dependencies for front-end
cd client
npm run install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
# Use npx kill-port 3000 to kill a port if you already using it
```

## Potential problem
If CRA won't start just create .env file with
```bash
SKIP_PREFLIGHT_CHECK=true
```

## App Info

### Author
[Zeha Irawan](http://www.zehairawan.com)

### What's in it
#### Server
* express ==> main web framework for backend
* express-validator ==>data validation, check missing field for post
* bcryptjs  => password encryption
* config  ==> global variable
* gravatar ==> avatar profile image
* jsonwebtoken => token for auth
* mongoose => layer on top database so we can interact
* request => make http request to another API : for reading github repo

#### Client

* axios  ==> to make http request, you could use the fetch api but axios for global header

* react-router-dom
* redux
* react-redux
* redux-thunk => middle ware that allow us to to asynchronous request in our action
* redux-devtools-extension
* moment ==> date time format library
* react-moment

### Dev
* nodemon  => auto reload server when there is changes
* concurrently => allow us to run backend & front end at the same time

### License

This project is licensed under the MIT License
