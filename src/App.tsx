import { SubmitHandler } from "@unform/core";
import { useState, useMemo, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import MyForm from "./components/Form";
import CountriesTable from "./components/table";
import { LIST_COUNTRIES } from './services/queries';
import { userSchema } from './validations/formValidation';

interface FormData {
    name: string
    age: number
    cpf: string
    email: string
    flightDate: string
    selectedContinent: string
}

function App() {
    const [tableDataArray, setTableDataArray] = useState([]);
    const [continentId, setContinentId] = useState('');
    const [showTable, setShowTable] = useState(false);

    const [loadEntries, { data }] = useLazyQuery(LIST_COUNTRIES, {variables: { id: continentId }});

    useEffect(() => {
        if (data) {
            setTableDataArray(data.continent.countries);
        }
    }, [data])

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
        ], []
    );

    const handleSubmit: SubmitHandler<FormData> = async submitedFormData => {
        const isValid = await userSchema.isValid(submitedFormData)
        if (isValid) {
            setContinentId(submitedFormData.selectedContinent)
            loadEntries();
            setShowTable(true);
        } else {
            alert('Campos inválidos')
        }
    };

    return (
        <div>
            <section className="form-section">
                <h2>Issue 3 - Prática React</h2>
                <MyForm handleSubmit={handleSubmit} />
            </section>
            <section className="table-section">
                {showTable ? <CountriesTable columns={columns} data={tableData} /> : <></>}
            </section>
        </div>
    );
}

export default App;