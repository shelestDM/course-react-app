import CostFilter from "./components/Costs/CostFilter";
import NewCost from "./components/NewCost/NewCost";
import { useState } from "react";
import Costs from "./components/Costs/Costs";

const App = () => {

  const [costs, setCosts] = useState([
    {
      id: 'item_1',
      date: new Date("2022-06-22"),
      title: 'MacBook',
      amount: '1200'
    },
    {
      id: 'item_2',
      date: new Date("2022-05-22"),
      title: 'Marshall Headphones',
      amount: '150'
    },
    {
      id: 'item_3',
      date: new Date("2023-02-22"),
      title: 'Jeans',
      amount: '20'
    }
  ]);

  const [year, setYear] = useState('2023');

  const addCostToCostListHandler = (cost) => {
    setCosts((previousCost)=>{
      return [cost, ...previousCost];
    })
  };

  const sortedCosts = costs.filter(cost => cost.date.getFullYear() === +year) ;
  
  const getYearForSort = (year) => {
    setYear(year);
  }
  return (
    <div>
      <NewCost addCostToCostListHandler={addCostToCostListHandler} />
      <CostFilter year={year} getYear={getYearForSort}/>
      <Costs costs={sortedCosts}/>
    </div>
  );
}

export default App;
