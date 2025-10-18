import * as yup from "yup";

export const todoSchema = yup.object({
    todo: yup.string().required(),
    completed: yup.boolean().default(false)
});