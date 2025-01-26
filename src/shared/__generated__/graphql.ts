import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
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
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  Upload: { input: any; output: any };
};

export type CreateProjectInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
};

export type Mutation = {
  __typename?: "Mutation";
  addParticiantToProject: Scalars["Boolean"]["output"];
  createProject: ProjectModel;
  deleteAccountAvatar: Scalars["Boolean"]["output"];
  deleteAllSessionExceptCurrent: Scalars["Boolean"]["output"];
  deleteExceptCurrentSession: Scalars["Boolean"]["output"];
  deleteProjectPreview: Scalars["Boolean"]["output"];
  removeParticiantFromProject: Scalars["Boolean"]["output"];
  signIn: Scalars["Boolean"]["output"];
  signOut: Scalars["Boolean"]["output"];
  signUp: Scalars["Boolean"]["output"];
  toggleIsArchivedProject: Scalars["Boolean"]["output"];
  updateAccount: UserModel;
  updateAccountAvatar: Scalars["Boolean"]["output"];
  updateProject: ProjectModel;
  uploadProjectPreview: Scalars["Boolean"]["output"];
  verifyAccountByEmail: Scalars["Boolean"]["output"];
};

export type MutationAddParticiantToProjectArgs = {
  input: ParticipantInput;
  projectId: Scalars["String"]["input"];
};

export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};

export type MutationDeleteExceptCurrentSessionArgs = {
  id: Scalars["String"]["input"];
};

export type MutationDeleteProjectPreviewArgs = {
  projectId: Scalars["String"]["input"];
};

export type MutationRemoveParticiantFromProjectArgs = {
  input: ParticipantInput;
  projectId: Scalars["String"]["input"];
};

export type MutationSignInArgs = {
  input: SignInInput;
};

export type MutationSignUpArgs = {
  input: SignUpInput;
};

export type MutationToggleIsArchivedProjectArgs = {
  projectId: Scalars["String"]["input"];
};

export type MutationUpdateAccountArgs = {
  input: UpdateAccountInput;
};

export type MutationUpdateAccountAvatarArgs = {
  uploud: Scalars["Upload"]["input"];
};

export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
  projectId: Scalars["String"]["input"];
};

export type MutationUploadProjectPreviewArgs = {
  projectId: Scalars["String"]["input"];
  uploud: Scalars["Upload"]["input"];
};

export type MutationVerifyAccountByEmailArgs = {
  input: VerificationEmailInput;
};

export type ParticipantInput = {
  participantIds: Array<Scalars["String"]["input"]>;
};

export type ProjectModel = {
  __typename?: "ProjectModel";
  createdAt: Scalars["DateTime"]["output"];
  creatorId: Scalars["String"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  isArchived: Scalars["Boolean"]["output"];
  previewUrl?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

export type Query = {
  __typename?: "Query";
  findAllSessionExceptCurrent: Array<SessionModel>;
  findAllUsers: UserModel;
  findCurrentSession: SessionModel;
  findMe: UserModel;
  findParticipantByProjectId: Array<UserModel>;
  findProjectById: ProjectModel;
  findProjectsByUserId: Array<ProjectModel>;
};

export type QueryFindParticipantByProjectIdArgs = {
  projectId: Scalars["String"]["input"];
};

export type QueryFindProjectByIdArgs = {
  projectId: Scalars["String"]["input"];
};

export type SessionDeviceDataModel = {
  __typename?: "SessionDeviceDataModel";
  browser: Scalars["String"]["output"];
  os: Scalars["String"]["output"];
  platform: Scalars["String"]["output"];
};

export type SessionLocationDataModel = {
  __typename?: "SessionLocationDataModel";
  city: Scalars["String"]["output"];
  country: Scalars["String"]["output"];
  latitude: Scalars["Float"]["output"];
  longitude: Scalars["Float"]["output"];
  timezone: Scalars["String"]["output"];
};

export type SessionMetadataModel = {
  __typename?: "SessionMetadataModel";
  deviceData: SessionDeviceDataModel;
  ip: Scalars["String"]["output"];
  locationData: SessionLocationDataModel;
};

export type SessionModel = {
  __typename?: "SessionModel";
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  metadata: SessionMetadataModel;
  userId: Scalars["String"]["output"];
};

export type SignInInput = {
  login: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type SignUpInput = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  passwordMatched: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type UpdateAccountInput = {
  bio?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateProjectInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserModel = {
  __typename?: "UserModel";
  avatarUrl?: Maybe<Scalars["String"]["output"]>;
  bio?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  email: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  isVerifiedByEmail: Scalars["Boolean"]["output"];
  passwordHash: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  username: Scalars["String"]["output"];
};

export type VerificationEmailInput = {
  tokenId: Scalars["String"]["input"];
};

export type FindMeQueryVariables = Exact<{ [key: string]: never }>;

export type FindMeQuery = {
  __typename?: "Query";
  findMe: { __typename?: "UserModel"; id: string; username: string };
};

export const FindMeDocument = gql`
  query FindMe {
    findMe {
      id
      username
    }
  }
`;

/**
 * __useFindMeQuery__
 *
 * To run a query within a React component, call `useFindMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindMeQuery(
  baseOptions?: Apollo.QueryHookOptions<FindMeQuery, FindMeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FindMeQuery, FindMeQueryVariables>(
    FindMeDocument,
    options,
  );
}
export function useFindMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FindMeQuery, FindMeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FindMeQuery, FindMeQueryVariables>(
    FindMeDocument,
    options,
  );
}
export function useFindMeSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<FindMeQuery, FindMeQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<FindMeQuery, FindMeQueryVariables>(
    FindMeDocument,
    options,
  );
}
export type FindMeQueryHookResult = ReturnType<typeof useFindMeQuery>;
export type FindMeLazyQueryHookResult = ReturnType<typeof useFindMeLazyQuery>;
export type FindMeSuspenseQueryHookResult = ReturnType<
  typeof useFindMeSuspenseQuery
>;
export type FindMeQueryResult = Apollo.QueryResult<
  FindMeQuery,
  FindMeQueryVariables
>;
