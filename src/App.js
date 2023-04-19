import CostList from "./components/Costs/CostList";
import NewCost from "./components/NewCost/NewCost";
import { useState } from "react";

const App = () => {

  const [costs, setCosts] = useState([
    {
      date: new Date(),
      title: 'MacBook',
      amount: '1200'
    },
    {
      date: new Date(),
      title: 'Marshall Headphones',
      amount: '150'
    },
    {
      date: new Date(),
      title: 'Jeans',
      amount: '20'
    }
  ]);
  console.log(costs);

  const addCostToCostListHandler = (cost) => {
    console.log('in App Component', cost);
    setCosts((previousCost)=>{
      return [...previousCost, cost];
    })
  }

  return (
    <div>
      <NewCost addCostToCostListHandler={addCostToCostListHandler} />
      <CostList costs={costs} />
    </div>
  );
}

export default App;
