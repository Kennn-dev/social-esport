import { ResponseUserDto } from "src/graphql/types/graphql";
import create, { StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

type TAuth = {
  accessToken: string | null;
  tokenType?: string | null;
  user: ResponseUserDto | null;
};
type State = {
  auth: TAuth;
};

type Action = {
  update: (payload: any) => void;
  reset: () => void;
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
      update: (payload) =>
        set((state) => ({ ...state, auth: { ...state.auth, ...payload } })),
      reset: () => set(() => initialState),
    }),
    {
      name: "auth-store",
    }
  )
);
