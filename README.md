# Youtube Search API with Redux

#### Setup

```
 git clone https://github.com/tavyandy97/youtube-search-redux.git
 cd youtube-search-redux
```
After cloning the repository to your local system, follow the 2 following steps:

1. In the file ./src/actions/index.js , please enter your Youtube Data v3 API key.
```
const API_KEY = `YOUR_API_KEY_COMES_HERE`;
```
2. The default local port running is 8080. If you want to change it, goto ./node_modules/webpack-dev-server/bin/webpack-dev-server.js , on line 58 and 92.


After you've completed the above steps, execute the following commands to start the server.

```
 npm install
 npm start
```

After this the application shall be successfully hosted. 