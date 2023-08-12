import { useContext } from "react";
import AuthContext from "../AuthRoute/AuthProvider";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;