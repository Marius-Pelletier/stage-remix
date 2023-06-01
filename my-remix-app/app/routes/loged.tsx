import { Outlet } from "@remix-run/react";
import stylesUrl from "~/styles/loged.css";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesUrl },
  ];

export default function LogedRoute() {
  return (
    <div>
      <h1>Vous êtes connecté !</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
