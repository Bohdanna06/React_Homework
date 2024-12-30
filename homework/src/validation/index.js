import * as yup from 'yup';
export const TODOLIST_SCHEMA = yup.object({
    task: yup.string().matches(/^.+$/, ' Do not use empty string').required()
})