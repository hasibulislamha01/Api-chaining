# API CHAINING DASHBOARD

### Setup Instruction
- First, copy the repo url and clone it in a directory. The project will be available in that directory of your pc
- Run: npm install (your pc must have node installed if not please install it to continue [install now](https://nodejs.org/en/download/package-manager) )
- Run: npm run dev ( the project should start at your local host )
- setup complete

## My approach for the project
- Setup a basic react web app
- Created components that does different different http requests ( get, post )
- Created Context api for state management efficiently throughout the app.
- using the http request and the states defined in Context api. I have changed the state value when needed and accessed the value when needed
- For api chaining I have used the necessary data in an api request that was found in the previous api request

### Assumtions or decisions
- since the api is used taken from jsonPlaceholder which is not operatable, posting is possible but it does not create any data that is persistant. The posted data is only found temporarily when a post request is sent. For that reason finding any comment with the postId that is just created returns an empty array always.
- For this reason, I have added a search comment by id button that allows user to search for comments using any id that is truely available in the data.




