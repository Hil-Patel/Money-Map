import * as yup from "yup"

export const LoginSchema=yup.object({
    username:yup.string().min(2).required("Username is required"),
    password:yup.string().required('Password is required').min(8, 'Password must be at least 8 characters').max(50, 'Password must be at most 50 characters').matches(/[a-z]/, 'Password must contain at least one lowercase letter').matches(/[A-Z]/, 'Password must contain at least one uppercase letter').matches(/[0-9]/, 'Password must contain at least one digit').matches(/[@$!%*?&#]/, 'Password must contain at least one special character')
})