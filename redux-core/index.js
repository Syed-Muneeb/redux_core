const redux = require("redux");

const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

const ICECREAM_ORDERED = "ICECREAM_ ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

const orderCake = (qty = 1) => {
  return {
    type: CAKE_ORDERED,
    payload: qty,
  };
};

const cakeRestocked = (qty = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
};

const orderIcecream = (qty = 1) => {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
};

const icecreamRestocked = (qty = 1) => {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
};

const inititalCakeState = {
  numOfCakes: 10,
  anotherProperty: 0,
};

const inititalIcecreamState = {
  numberOfIcecreams: 10,
  anotherProperty: 0,
};

const cakeReducer = (state = inititalCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED: {
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    }
    case CAKE_RESTOCKED: {
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
const icecreamReducer = (state = inititalIcecreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED: {
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams - action.payload,
      };
    }

    case ICECREAM_RESTOCKED: {
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams + action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));

const unsubscribe = store.subscribe(() =>
  console.log("update state ... !", store.getState())
);

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(cakeRestocked(3));

const actions = bindActionCreators(
  { orderCake, cakeRestocked, orderIcecream, icecreamRestocked },
  store.dispatch
);

actions.orderCake(2);
actions.cakeRestocked(2);

actions.orderIcecream(2);
actions.icecreamRestocked(2);

unsubscribe();
