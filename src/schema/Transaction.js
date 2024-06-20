// src/schema/Expense.js
import * as Yup from "yup";

export const ExpenseSchema = Yup.object().shape({
  date: Yup.date().required("Date is required"),
  amount: Yup.number()
    .required("Amount is required")
    .positive("Amount must be a positive number"),
  reason: Yup.string().required("Reason is required"),
});

export const IncomeSchema = Yup.object().shape({
  date: Yup.date().required("Date is required"),
  amount: Yup.number()
    .required("Amount is required")
    .positive("Amount must be a positive number"),
  reason: Yup.string().required("Reason is required"),
});

