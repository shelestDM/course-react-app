import CostList from "./components/Costs/CostList";
import YearFilter from "./components/Costs/YearFilter";
import NewCost from "./components/NewCost/NewCost";
import { useState } from "react";

const App = () => {

  const [costs, setCosts] = useState([
    {
      date: new Date("2021-05-22"),
      title: 'MacBook',
      amount: '1200'
    },
    {
      date: new Date("2022-05-22"),
      title: 'Marshall Headphones',
      amount: '150'
    },
    {
      date: new Date("2023-05-22"),
      title: 'Jeans',
      amount: '20'
    }
  ]);

  const addCostToCostListHandler = (cost) => {
    console.log('in App Component', cost);
    setCosts((previousCost)=>{
      return [...previousCost, cost];
    })
  }

  const filterCostsHandler = () => {
    const sortedCosts = costs.filter(obj=>obj.date.getFullYear() === '2021');
    console.log(sortedCosts);
  }

  return (
    <div>
      <NewCost addCostToCostListHandler={addCostToCostListHandler} />
      <YearFilter/>
      <button type="button" className="bg-green-500" onClick={filterCostsHandler} >filter</button>
      <CostList costs={costs} />
    </div>
  );
}

export default App;
