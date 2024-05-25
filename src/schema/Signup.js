import * as yup from "yup"

export const SignUpSchema=yup.object({
    username:yup.string().min(2).required("Username is required"),
    email:yup.string().email().required("Email is required"),
    password:yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
    // .max(50, 'Password must be at most 50 characters').matches(/[a-z]/, 'Password must contain one lowercase letter').matches(/[A-Z]/, 'Password must contain one uppercase letter').matches(/[0-9]/, 'Password must contain one digit').matches(/[@$!%*?&#]/, 'Password must contain one special character'),
    confirmPassword:yup.string().oneOf([yup.ref('password'),null],'Passwords must match').required("Confirm Password is required")
})