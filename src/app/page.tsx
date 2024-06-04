import Image from "next/image";
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import {useEffect} from "react";
import {gapi} from "gapi-script";

const clientId = "703790624547-2ahroqur2t8273cijcpeft1868f12e2o.apps.googleusercontent.com";

export default function Home() {
  return (
    <main>  
      <div className="flex-center bg-gray-100 h-screen justify-center ">
        <LoginButton />
        <LogoutButton />
      </div>    
    </main>

  );
}
