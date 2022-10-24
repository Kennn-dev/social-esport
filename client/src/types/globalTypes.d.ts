type TUser = {
  avatar: string;
  backgroundImage: string;
  email: string;
  firstName: string;
  lastName: string;
};
type TInputLoginDto = {
  email: string;
  password: string;
};

type TResponseLoginDto = {
  accessToken: string;
  tokenType: string;
  user: TUser;
};
