import type { LinksFunction } from "@remix-run/node";
import { Link, useSearchParams } from "@remix-run/react";

import stylesUrl from "~/styles/login.css";


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function Login() {
  return (
    <div>
      <h1>Bienvenue dans votre service MSC</h1>
      <form action="/auth/microsoft" method="post">
        <button>Se connecter</button>
      </form>
    </div>
  );
}

 

