const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./features/icecream/icecreamSlice").icecreamActions;

const unsubscribe = store.subscribe(() =>
  console.log("Update state ... ! ", store.getState())
);

const { fetchUsers } = require("./features/user/userSlice");

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));
// store.dispatch(icecreamActions.restockedIcecream(3));
store.dispatch(fetchUsers())

// store.dispatch(icecreamActions.orderIcecream())
// store.dispatch(icecreamActions.orderIcecream())
// store.dispatch(icecreamActions.orderIcecream())
// store.dispatch(icecreamActions.restockedIcecream(3))

// unsubscribe();
