# SH_Todos
Simple Todo App build by React, Redux, Redux-persist

## Features
1. Add/Delete/Clear Completed item to the list
1. Filter item by status
1. Fetch list of todo item from sample api for the first load https://jsonplaceholder.typicode.com/todos
1. User can edited list back after refresh/reopen the app

## How to start
```
npm install
npm start
```

## Folder Structure

    .
    ├── public                  # index.html
    ├── node_modules            # node_modules
    ├── src                     # source codes 
       ├── components           # all UI components
       ├── config               # a config js file to store the configs like urls
       ├── store                # redux store related files eg. actions, reducers, store
       ├── utils                # utils / service files like fetching data from apis
       └─                       # index.js & App.js
