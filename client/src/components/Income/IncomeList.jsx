import moment from "moment";
import React from "react";
import TransactionInfoCard from "../Cards/TransactionInfoCard";

const IncomeList = ({ transactions, onDelete }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Income Sources</h5>
      </div>

      <div className="grid grid-cols-1">
        {transactions.map((income) => (
          <TransactionInfoCard
            key={income._id}
            title={income.source}
            icon={income.icon}
            date={moment(income.date).format("DD MMM YYYY")}
            amount={income.amount}
            onDelete={() => onDelete(income._id)}
          />
        ))}
      </div>
    </div>
    );
};

export default IncomeList;