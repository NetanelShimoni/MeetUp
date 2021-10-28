export interface IUser {
  fullName: string;
  email: string;
  password: string;
  isAdmin: boolean;
  meetUps: Array<number>;
  ownMeetUp: Array<number>;
}

export interface IMeetUp {
  title: string;
  description: string;
  date: string;
  time: string;
  img?: string;
  location?: Tlocation;
  ownerId: number;
  linkFeedback: string;
  intend: "Dev" | "All" | "Product";
}
type Tlocation = {
  zoom?: string;
  location?: string;
};
export enum EUsermode {
  admin = "admin",
  regular = "regular",
  none = "none",
}

export interface Istore {
  users: Array<IUser>;
  userMode: EUsermode;
}

export interface IAction {
  type: string;
  payload?: IUser | EUsermode;
}

export interface Smeetup {
  type: "ADD_MEETUP";
  payload: IMeetUp;
}
export interface Suser {
  type: "ADD_USER";
  payload: IUser;
}
export interface Smode {
  type: "CHANGE_MODE";
  payload: EUsermode;
}

const store: Istore = { users: [], userMode: EUsermode.none };
