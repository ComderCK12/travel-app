import { createContext, useState } from "react";

export const MyContext = createContext({color:'grey'})              // default value

export const ContextWithState = createContext('')

export const UserContext = createContext('')