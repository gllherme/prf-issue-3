import { useLazyQuery } from "@apollo/client";
import { observer } from "mobx-react-lite";
import {  useEffect, useMemo, useState } from "react";
import CountriesTable from "../components/Table/table";
import { useStores } from "../hooks/useStores";
import { LIST_COUNTRIES } from "../services/queries";

const TableScreen = observer(() => {
    const { destinationStore } = useStores();
    const [tableData, setTableData] = useState([]);
    const [loadEntries, { data }] = useLazyQuery(LIST_COUNTRIES, {variables: { id: destinationStore.continentCode }});

    useEffect(() => {
        if(data) {
            setTableData(data.continent.countries);
        }
    }, [data]);

    useEffect(() => {
        loadEntries()
    }, []);

    const memoizedData = useMemo(() => tableData, [tableData])
    const columns = useMemo(() => destinationStore.tableColumns, [])

    return (
        <CountriesTable columns={columns} data={memoizedData} />
    );
});

export default TableScreen;