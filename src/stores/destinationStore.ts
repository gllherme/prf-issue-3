import { makeAutoObservable } from 'mobx'

export class DestinationStore {
    constructor() {
        makeAutoObservable(this);
    }

    continentCode?: string = "OC";

    tableColumns = [
        {
            Header: "Codigo",
            accessor: "code",
        },
        {
            Header: "Nome",
            accessor: "name",
        },
        {
            Header: "Moeda",
            accessor: "currency",
        },
    ];

    setContinentCode(value: string) {
        this.continentCode = value;
    }
}