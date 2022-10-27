import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CategoryDto = {
  __typename?: "CategoryDto";
  _id?: Maybe<Scalars["String"]>;
  followers?: Maybe<Array<ResponseUserDto>>;
  thumbnail?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type CreateCategoryInput = {
  thumbnail?: InputMaybe<Scalars["String"]>;
  title: Scalars["String"];
};

export type CreateCommentInput = {
  content: Scalars["String"];
  postId: Scalars["String"];
  type?: InputMaybe<Scalars["String"]>;
};

export type CreatePostInputDto = {
  canComment?: InputMaybe<Scalars["Boolean"]>;
  /** Max length 2000 characters */
  content?: InputMaybe<Scalars["String"]>;
  listImage?: InputMaybe<Array<Scalars["String"]>>;
  typeView?: InputMaybe<Scalars["String"]>;
};

export type DeleteCategoryResponseDto = {
  __typename?: "DeleteCategoryResponseDto";
  message: Scalars["String"];
  status: Scalars["Int"];
};

export type Follow = {
  __typename?: "Follow";
  /** Example field (placeholder) */
  exampleField: Scalars["Int"];
};

export type FollowDataDto = {
  __typename?: "FollowDataDto";
  follower: Array<FollowDataDto>;
  following: Array<FollowDataDto>;
};

export type FollowDto = {
  __typename?: "FollowDto";
  listUsers: Array<ResponseUserDto>;
  total: Scalars["Int"];
};

export type InputCreateUserDto = {
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  password: Scalars["String"];
  passwordConfirm: Scalars["String"];
};

export type InputLoginDto = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createCategory: CategoryDto;
  createComment: StatusResponseDto;
  createPost: StatusResponseDto;
  createUser: StatusResponseDto;
  deleteCategory: DeleteCategoryResponseDto;
  deletePost: StatusResponseDto;
  followCategory: ResponseDto;
  login: ResponseLoginDto;
  removeFollow: Follow;
  sendRequestFollow: ResponseDto;
  unfollow: ResponseDto;
  unfollowCategory: ResponseDto;
  updateCategory: StatusResponseDto;
  updateComment: StatusResponseDto;
  updatePost: StatusResponseDto;
  updateUser: StatusResponseDto;
};

export type MutationCreateCategoryArgs = {
  createCategoryInput: CreateCategoryInput;
};

export type MutationCreateCommentArgs = {
  createCommentInput: CreateCommentInput;
};

export type MutationCreatePostArgs = {
  inputCreate: CreatePostInputDto;
};

export type MutationCreateUserArgs = {
  inputCreate: InputCreateUserDto;
};

export type MutationDeleteCategoryArgs = {
  id: Scalars["String"];
};

export type MutationDeletePostArgs = {
  id: Scalars["String"];
};

export type MutationFollowCategoryArgs = {
  categoryId: Scalars["String"];
};

export type MutationLoginArgs = {
  input: InputLoginDto;
};

export type MutationRemoveFollowArgs = {
  id: Scalars["Int"];
};

export type MutationSendRequestFollowArgs = {
  followerId: Scalars["String"];
};

export type MutationUnfollowArgs = {
  followId: Scalars["String"];
};

export type MutationUnfollowCategoryArgs = {
  categoryId: Scalars["String"];
};

export type MutationUpdateCategoryArgs = {
  updateCategoryInput: UpdateCategoryInput;
};

export type MutationUpdateCommentArgs = {
  idComment: Scalars["String"];
  updateCommentInput: UpdateCommentInput;
};

export type MutationUpdatePostArgs = {
  id: Scalars["String"];
  inputUpdate: UpdatePostInputDto;
};

export type MutationUpdateUserArgs = {
  id: Scalars["String"];
  inputUpdate: UpdateUserInputDto;
};

export type Query = {
  __typename?: "Query";
  follow: Array<Follow>;
  getAllCategory: Array<CategoryDto>;
  getAllUser: Array<UserDto>;
  getDetailCategory: CategoryDto;
  getUserById: ResponseUserDetailDto;
  hello: Scalars["String"];
};

export type QueryGetDetailCategoryArgs = {
  id: Scalars["Int"];
};

export type QueryGetUserByIdArgs = {
  id: Scalars["String"];
};

export type ResponseDto = {
  __typename?: "ResponseDto";
  message: Scalars["String"];
  status: Scalars["Int"];
};

export type ResponseLoginDto = {
  __typename?: "ResponseLoginDto";
  accessToken: Scalars["String"];
  tokenType?: Maybe<Scalars["String"]>;
  user: ResponseUserDto;
};

export type ResponseUserDetailDto = {
  __typename?: "ResponseUserDetailDto";
  _id: Scalars["String"];
  avatar?: Maybe<Scalars["String"]>;
  backgroundImage?: Maybe<Scalars["String"]>;
  email: Scalars["String"];
  firstName: Scalars["String"];
  follower: FollowDto;
  following: FollowDto;
  lastName: Scalars["String"];
  role: Scalars["Float"];
};

export type ResponseUserDto = {
  __typename?: "ResponseUserDto";
  avatar?: Maybe<Scalars["String"]>;
  backgroundImage?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
};

export type StatusResponseDto = {
  __typename?: "StatusResponseDto";
  message: Scalars["String"];
  status: Scalars["Int"];
};

export type UpdateCategoryInput = {
  id: Scalars["String"];
  thumbnail?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type UpdateCommentInput = {
  content: Scalars["String"];
  postId: Scalars["String"];
  type?: InputMaybe<Scalars["String"]>;
};

export type UpdatePostInputDto = {
  canComment?: InputMaybe<Scalars["Boolean"]>;
  /** Max length 2000 characters */
  content?: InputMaybe<Scalars["String"]>;
  listImage?: InputMaybe<Array<Scalars["String"]>>;
  typeView?: InputMaybe<Scalars["String"]>;
};

export type UpdateUserInputDto = {
  avatar?: InputMaybe<Scalars["String"]>;
  backgroundImage?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  firstName?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
};

export type UserDto = {
  __typename?: "UserDto";
  _id: Scalars["ID"];
  avatar?: Maybe<Scalars["String"]>;
  backgroundImage?: Maybe<Scalars["String"]>;
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  password: Scalars["String"];
};

export type QueryQueryVariables = Exact<{ [key: string]: never }>;

export type QueryQuery = { __typename?: "Query"; hello: string };
