import DiagramBar from "./DiagramBar";

const Diagram = (props) => {

    const dataSetsValue = props.dataSet.map(dataSet => dataSet.value); 

    const maxMonthCost = Math.max(...dataSetsValue);

    return (  
        <div className="m-3 md:w-1/2 md:mx-auto p-4 rounded-xl bg-[#ebc137] text-center flex justify-around h-40">
            { props.dataSet.map(
                dataSet => 
                <DiagramBar key={dataSet.label} data={dataSet} maxValue={maxMonthCost} />)
            }
        </div>
    );
}
 
export default Diagram;