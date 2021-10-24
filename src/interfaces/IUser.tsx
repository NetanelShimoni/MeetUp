interface IUser {
  fullName: string;
  email: string;
  password: string;
  isAdmin: boolean;
  meetUps: Array<number>;
  ownMeetUp: Array<number>;
}

export default IUser;
