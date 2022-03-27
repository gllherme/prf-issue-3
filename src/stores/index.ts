import { createContext } from "react";
import { DestinationStore } from "./destinationStore";
import { ModalStore } from "./modalStore";
import { UserStore } from "./userStore";

export const storesContext = createContext({
    destinationStore: new DestinationStore(),
    modalStore: new ModalStore(),
    userStore: new UserStore(),
})
