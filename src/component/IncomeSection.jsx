/* eslint-disable no-unused-vars */
import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const IncomeSection = () => {
  const incomeData = useSelector((state) => state.transaction.income);
  return (
    <>
      <div className="income">
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

        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Income</button>
      
      </div>
    </>
  );
};

export default IncomeSection;
