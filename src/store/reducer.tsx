import { EUsermode, IAction, Istore, IUser } from "./interfacses";
import * as Actions from "./actionsType";

const initState = {
  users: [],
  userMode: EUsermode.none,
};

const reducer = (state: Istore = initState, action: IAction): Istore => {
  switch (action.type) {
    case Actions.ADD_USER:
      return { ...state, users: [...state.users, action.payload] } as Istore;
    case Actions.UPDATE_MODE:
      return { ...state, userMode: action.payload } as Istore;
    default:
      return state;
  }
};
export default reducer;
