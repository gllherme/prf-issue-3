import { SubmitHandler } from "@unform/core";
import { useState, useMemo } from "react";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import MyForm from "./components/Form";
import CountriesTable from "./components/table";

interface FormData {
    name: string
    age: number
    flightDate: string
    selectOption: string
}

function App() {
    const [tableDataArray, setTableDataArray] = useState([]);
    const [continentId, setContinentId] = useState('OC');

    const LIST_COUNTRIES = gql`
    {
        continent(code: "${continentId}") {
            countries {
                name
                code
                currency
            }
        }
    }`;

    const { data, loading } = useQuery(LIST_COUNTRIES);

    let formattedData: [];

    const tableData = useMemo(() => tableDataArray, [tableDataArray]);

    const columns = useMemo(
        () => [
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
                accessor: "currency"
            }
        ],
        []
    );

    if (!loading) {
        formattedData = JSON.parse(JSON.stringify(data.continent.countries));
    }

    const handleSubmit: SubmitHandler<FormData> = submitedFormData => {
        setContinentId(submitedFormData.selectOption)
        setTableDataArray(formattedData)
    };

    return (
        <div>
            <h2>Issue 3 - Prática React</h2>
            <MyForm handleSubmit={handleSubmit} />

            {loading && <h1>Carregando... </h1>}
            <CountriesTable columns={columns} data={tableData} />
        </div>
    );
}

export default App;