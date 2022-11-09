import { ResponseUserDto } from "src/graphql/types/graphql";
import create, { StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

type TAuth = {
  accessToken?: string | null;
  tokenType?: string | null;
  user?: ResponseUserDto | null;
};
type State = {
  auth: TAuth;
};

type Action = {
  update: (payload: Partial<TAuth>) => void;
  reset: () => void;
  updateUser: (payload: Partial<ResponseUserDto>) => void;
};

type Store = State & Action;

const initialState: State = {
  auth: {
    accessToken: null,
    user: null,
    tokenType: null,
  },
};
type MyPersist = (
  config: StateCreator<Store>,
  options: PersistOptions<Store>
) => StateCreator<Store>;
// define the store

export const useAppStore = create<State & Action>(
  (persist as MyPersist)(
    (set) => ({
      auth: {
        accessToken: null,
        user: null,
        tokenType: null,
      },
      update: (payload: Partial<TAuth>) =>
        set((state) => ({ ...state, auth: { ...state.auth, ...payload } })),
      reset: () =>
        set((state) => ({ ...state, auth: { ...initialState } }), true),
      updateUser: (payload) =>
        set((state) => ({
          ...state,
          auth: {
            ...state.auth,
            user: {
              ...state.auth.user,
              ...payload,
            },
          },
        })),
    }),
    {
      name: "auth-store",
    }
  )
);
