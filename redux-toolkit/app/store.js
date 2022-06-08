const { configureStore } = require("@reduxjs/toolkit");
const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/icecreamSlice");
const userSlice = require("../features/user/userSlice");

// const { createLogger } = require("redux-logger");
// const logger = createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecreame: icecreamReducer,
    user: userSlice,
  },
  //   middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
});

module.exports = store;
