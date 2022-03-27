import MyForm from "../components/Form";
import { SubmitHandler } from "@unform/core";
import { userSchema } from "../validations/formValidation";
import { useStores } from "../hooks/useStores";
import { useNavigate } from 'react-router-dom'
import { observer } from "mobx-react-lite";

interface FormData {
    name: string
    age: number
    cpf: string
    email: string
    flightDate: string
    selectedContinent: string
}

const FormScreen = observer(() => {

    const { destinationStore, userStore } = useStores();
    const navigate = useNavigate();

    const handleSubmit: SubmitHandler<FormData> = async submitedFormData => {
        const isValid = await userSchema.isValid(submitedFormData);

        if (isValid) {
            destinationStore.setContinentCode(submitedFormData.selectedContinent);
            userStore.setUserData(submitedFormData);
            navigate('/destinos');
        } else {
            alert('Campos inválidos')
        } 
    };

    return (
        <section className="form-section">
                <h2>Issue 3 - Prática React</h2>
                <MyForm handleSubmit={handleSubmit} />
        </section>
    );
});

export default FormScreen;