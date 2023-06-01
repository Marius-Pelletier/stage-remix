// app/services/auth.server.ts
import { MicrosoftStrategy } from "remix-auth-microsoft";
import { Authenticator } from "remix-auth";
import { sessionStorage } from "./session.server";
import { User } from "../routes/user";

export let authenticator = new Authenticator<User>(sessionStorage); //User is a custom user types you can define as you want

let microsoftStrategy = new MicrosoftStrategy(
  {
    clientId: "4cb00666-ff9f-4146-9aca-b6a61ab5907e",
    clientSecret: "LQ~8Q~RTSO2wMVJtYJs38Mgo8E2-ljaiu.CRHbs_",
    redirectUri: "https://localhost:3000/auth/microsoft/callback",
    tenantId: "475fd1d1-212f-472f-9c02-635526f47568", // optional - necessary for organization without multitenant (see below)
    scope: "openid profile email", // optional
    prompt: "login", // optional
  },
  async ({ accessToken, extraParams, profile }) => {
    // Here you can fetch the user from database or return a user object based on profile
    // return {profile}
    // The returned object is stored in the session storage you are using by the authenticator
    return {name :profile.name.givenName, id : profile.id, email: profile.emails[0]}
  }
);

authenticator.use(microsoftStrategy);
