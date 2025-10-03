//  export default function Logout() {
   export  const logout=()=>{
        localStorage.removeItem("token data");
         window.location.href="/loginData"
      };
//  }