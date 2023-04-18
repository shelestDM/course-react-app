import CostList from "./components/CostList";

const costs = [
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
  ]

 function App() {
  return (
      <CostList costs={costs} />
  );
}

export default App;
