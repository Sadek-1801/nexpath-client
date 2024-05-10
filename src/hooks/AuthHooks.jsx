import { useContext } from "react";
import AuthProvider from "../authProvider/AuthProvider";

const AuthHooks = () => {
   const all = useContext(AuthProvider)
   return all;
};

export default AuthHooks;