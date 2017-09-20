
# JOSH.ai CODE CHALLENGE

## Running the Application
```
yarn

node challenge.js
```

Environment Variables:
```
API_URL
API_USERNAME
TIMER_IN_SECONDS
```

Example:
```
API_URL='http://54.197.187.61' API_USERNAME='newdeveloper' TIMER_IN_SECONDS=3 node challenge.js
```

## Running the Application via Docker

Run the container and the application
```
docker run -it --rm r2integration/node-hue-josh-challenge:latest sh

node challenge.js
```

## Building the Application on Docker

Build the container
```
docker build -t r2integration/node-hue-josh-challenge:latest .
```

(Optional) Run the container on dev mode (so you can modify locally but run the challenge app on docker)
```
docker run -it --rm $(pwd):/usr/src/app r2integration/node-hue-josh-challenge:latest sh

node challenge.js
```