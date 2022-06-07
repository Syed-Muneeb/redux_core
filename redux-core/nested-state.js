const redux = require("redux");
const createStore = redux.createStore;

const STREET_UPDATE = "STREET_UPDATE";

const updateStreet = () => {
  return {
    type: STREET_UPDATE,
    payload: "144 Mai Lt",
  };
};

const initialState = {
  name: "Muneeb",
  address: {
    street: "123 Main St",
    city: "Boston",
    state: "MA",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATE: {
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload,
        },
      };
    }

    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

const unsubscribe = store.subscribe(() =>
  console.log("updating...", store.getState())
);

store.dispatch(updateStreet());

unsubscribe();
