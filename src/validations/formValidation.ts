import * as Yup from 'yup';

export const userSchema = Yup.object().shape({
    name: Yup.string().required(),
    age: Yup.number().positive().integer().required(),
    cpf: Yup.string().required(),
    email: Yup.string().email().required(),
    flightDate: Yup.date().required(),
});