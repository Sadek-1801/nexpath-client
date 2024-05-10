import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";

const AuthHooks = () => {
   const all = useContext(AuthContext)
   return all;
};

export default AuthHooks;