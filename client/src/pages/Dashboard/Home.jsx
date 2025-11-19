import React, {useState, useEffect} from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { useUserAuth } from './../../hooks/useUserAuth';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import InfoCard from '../../components/Cards/InfoCard';
import { LuHandCoins, LuWalletMinimal } from 'react-icons/lu';
import { IoMdCard } from "react-icons/io";
import { addThousandsSeperator } from '../../utils/helper';
import RecentTransactions from '../../components/Dashboard/RecentTransactions';
import FinanceOverview from '../../components/Dashboard/FinanceOverview';
import ExpenseTransactions from '../../components/Dashboard/ExpenseTransactions';

const Home = () => {
  useUserAuth();

  const navigate = useNavigate();

  const [dashBoardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = async () => {
    if(loading) return;
    setLoading(true);

    try {
      const response = await axiosInstance.get(`${API_PATHS.DASHBOARD.GET_DATA}`);
      if(response.data) {
        setDashboardData(response.data);
      }
    } catch (error) {
      console.error("Something went wrong.", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
    return () => {};
  }, []);

  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className='my-5 mx-auto'>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
          <InfoCard icon={<IoMdCard />} label="Total Balance" value={addThousandsSeperator(dashBoardData?.totalBalance || 0)} color="bg-primary" />
          <InfoCard icon={<IoMdCard />} label="Total Income" value={addThousandsSeperator(dashBoardData?.totalIncome || 0)} color="bg-orange-500" />
          <InfoCard icon={<IoMdCard />} label="Total Expense" value={addThousandsSeperator(dashBoardData?.totalExpense || 0)} color="bg-red-500" />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
          <RecentTransactions transactions={dashBoardData?.recentTransactions} onSeeMore={() => navigate("/expense")} />
          <FinanceOverview totalBalance={dashBoardData?.totalBalance || 0} totalIncome={dashBoardData?.totalIncome || 0} totalExpense={dashBoardData?.totalExpense} />
          <ExpenseTransactions transactions={dashBoardData?.last30DaysExpenses.transactions || []} onSeeMore={() => navigate("/expense")} />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Home
