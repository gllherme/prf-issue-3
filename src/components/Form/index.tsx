import { useEffect, useRef, useState } from "react";
import { SubmitHandler, FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import Input from "./input";
import Select from "./select";
import { useQuery } from "@apollo/client";
import { LIST_CONTINENTS } from '../../services/queries'
import './form.css'
import InputMask from "react-input-mask";

interface formProps {
    handleSubmit: SubmitHandler
}

interface SelectOptions {
    value: string
    label: string
}

export default function MyForm({ handleSubmit }: formProps) {
    const [continents, setContinents] = useState<SelectOptions[]>([]);
    const { data } = useQuery(LIST_CONTINENTS);

    useEffect(() => {
        if (!data) return
        setContinents(data.continents.map((element: any)=> ({
            value: element.code,
            label: element.name
        })))
    }, [data])
    
    const formRef = useRef<FormHandles>(null);
    
    return (
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome" />

                <Input name="age" type="number" placeholder="Idade"  />
                
                <InputMask mask="999.999.999-99">
                    <Input name="cpf" placeholder="CPF" />
                </InputMask>

                <Input name="email" type="email" placeholder="Email" />

                <label htmlFor="flightDate">Data do voo: </label>
                <Input name="flightDate" type="date" />

                <Select name="selectedContinent" label="Escolha seu continente: ">
                    {continents.map(option => (
                        <option key={option.value} value={option.value} >
                            {option.label}
                        </option>
                    ))}
                </Select>

                <button type="submit">Enviar</button>
            </Form>
    );
}