import type { AppThunk } from "../../../shared/redux";
import { usersSlice, type UserId } from "../users.slice";
import { fetchUsers } from "./fetch-users";

export const deleteUser = 
    (userId: UserId): AppThunk<Promise<void>> => 
    async (dispatch, _, { api }) => {

        dispatch(usersSlice.actions.deleteUserPending());
        try {
            await api.deleteUser(userId);
            dispatch(usersSlice.actions.deleteUserSuccess({ userId }));

            dispatch(fetchUsers({refetch: true}));

        } catch(e) {
            dispatch(usersSlice.actions.deleteUserFailed());
        }  
    };