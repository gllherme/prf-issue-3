import { makeAutoObservable } from "mobx";

export class ModalStore {
    constructor() {
        makeAutoObservable(this)
    }

    isActive: string = '';

    modalData?: any;

    setModalVisibility(value: 'active' | '')  {
        this.isActive = value;
    }

    setModalData(value: any) {
        this.modalData = value
    }
}