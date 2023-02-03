import { lazy } from 'react';

export const Homepage = lazy(() => import("./Homepage/Homepage"));
export const Contact = lazy(() => import("./Contact/Contact"));
export const Login = lazy(() => import("./Login/Login"));
export const Places = lazy(() => import("./Places/Places"));
export const Signup = lazy(() => import("./Signup/Signup"));
export const Items = lazy(() => import("./Items/Items"));