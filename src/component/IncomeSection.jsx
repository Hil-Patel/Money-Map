/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { addIncome } from "../feature/TransactionSlice";

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const IncomeSection = () => {
  const dispatch=useDispatch();
  const incomeData = useSelector((state) => state.transaction.income);
  const username=useSelector((state)=>state.user.name);
  const wallet=useSelector((state)=>state.Wallet.balance);
  const transaction=useSelector((state)=>state.transaction)
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleClick = () => {
    document.getElementById("authentication-modal-income").classList.toggle("hidden");
    document.getElementById("authentication-modal-income").classList.toggle("flex");
  };

  const handleReasonChange = (value) => {
    setShowOtherInput(value === "Other");
  };

  const formik = useFormik({
    initialValues: {
      date: "",
      amount: "",
      reason: "",
      otherReason: "",
    },
    onSubmit:(values)=>{
      let payload={}
      if (values.otherReason==="") {
        payload={
          action:"expense",
          date: values.date,
          amount: values.amount,
          reason: values.reason
        }
      }
      else{
        payload={
          action:"expense",
          date: values.date,
          amount: values.amount,
          reason: values.otherReason
        }
      }
      console.log(payload)
      handleClick()
      dispatch(addIncome(payload))
    },
  });

  useEffect(()=>{
    
    localStorage.setItem(`${username}Transaction`,JSON.stringify(transaction))
  },[transaction])
  
  useEffect(()=>{
    localStorage.setItem(`${username}Wallet`,JSON.stringify(wallet))
  },[wallet])

  return (
    <>
      <div className="income bg-blue-50 p-6 rounded-lg shadow-md">
        {incomeData.length > 0 ? (
          <Line
            data={{
              labels: incomeData.map((val) => val),
              datasets: [
                {
                  label: "revenue",
                  data: [1, 2],
                  backgroundColor: "rgba(62, 169, 60, .8)",
                  borderColor: "rgba(62, 169, 60, 1)",
                },
              ],
            }}
          />
        ) : (
          <p >no data</p>
        )}

        <button
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4"
          type="button"
          onClick={handleClick}
        >
          Add Expense
        </button>

        <div
          id="authentication-modal-income"
          tabIndex="-1"
          aria-hidden="true"
          className="hidden fixed inset-0 z-50 overflow-y-auto overflow-x-hidden justify-center items-center bg-gray-900 bg-opacity-50"
        >
          <div className="relative bg-blue-100 p-4 pt-2 w-full max-w-md max-h-full rounded-lg shadow-lg">
            <div className="flex items-center justify-between p-2 md:p-4 border-b rounded-t">
              <h3 className="text-xl font-semibold text-gray-900">
                Expense Form
              </h3>
              <button
                type="button"
                onClick={handleClick}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                data-modal-hide="authentication-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                  onChange={formik.handleChange}
                  value={formik.values.date}
                />
              </div>

              <div>
                <label
                  htmlFor="amount"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Amount
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                  onChange={formik.handleChange}
                  value={formik.values.amount}
                />
              </div>

              <div>
                <label
                  htmlFor="reason"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Reason
                </label>
                <select
                  id="reason"
                  name="reason"
                  className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                  onChange={(e) => {
                    handleReasonChange(e.target.value);
                    formik.handleChange(e);
                  }}
                  value={formik.values.reason}
                >
                  <option value="">Select a reason</option>
                  <option value="Rent">Rent</option>
                  <option value="Utilities">Utilities</option>
                  <option value="Groceries">Groceries</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {showOtherInput && (
                <div>
                  <label
                    htmlFor="otherReason"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Other Reason
                  </label>
                  <input
                    type="text"
                    id="otherReason"
                    name="otherReason"
                    className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                    onChange={formik.handleChange}
                    value={formik.values.otherReason}
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default IncomeSection;
