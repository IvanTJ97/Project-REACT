import { useContext } from "react";
import {AppContext} from '../../application/provider';
export const useAuth = () => {
    const [state, setState] = useContext(AppContext);
    return {
        isAuthenticated: !!state.user,
    };
}