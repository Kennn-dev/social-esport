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

type TInputRegisterDto = TInputLoginDto & {
  lastName: string;
  firstName: string;
  password: string;
  passwordConfirm: string;
};

type TResponseLoginDto = {
  accessToken: string;
  tokenType: string;
  user: TUser;
};

type TStaticAlert = {
  type: ALERT_TYPE;
  content: string;
};

type TStatusResponseDto = {
  createUser: {
    status: number;
    message: string;
  };
};
