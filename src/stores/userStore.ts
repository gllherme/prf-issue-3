import { makeAutoObservable } from "mobx";

export class UserStore {
    constructor() {
        makeAutoObservable(this)
    }

    userData: any;

    setUserData(value: any) {
        this.userData = value;
    }
}