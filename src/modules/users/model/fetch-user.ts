import type { AppThunk } from "../../../shared/redux";
import { usersSlice, type UserId } from "../users.slice";

export const fetchUser = 
    (userId: UserId): AppThunk => 
    (dispatch, getState, { api }) => {
        const isPending = usersSlice.selectors.selectIsFetchUsersPending(
            getState()
        );

        if(!isPending) {
            return;
        }

        dispatch(usersSlice.actions.fetchUserPending());
        api
            .getUser(userId)
            .then((user) => {
                dispatch(usersSlice.actions.fetchUserSuccess({ user }));
            })
            .catch(() => {
                dispatch(usersSlice.actions.fetchUserFailed());
            })
    };