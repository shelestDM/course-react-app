import CostDate from "./CostDate";

function CostItem(props) {

    return (
        <div className="flex justify-between items-center rounded-xl bg-[#2196f3] px-2 py-3 lg:max-w-[50%] text-white">
            <CostDate date={props.costs.date}/>
            <div className="flex justify-between w-full ml-5">
                <h2 className="font-bold bg-[#9c27b0] p-3 rounded-xl">
                    {props.costs.title}
                </h2>
                <p className="bg-[#ff9800] p-3 rounded-xl">
                    ${props.costs.amount}
                </p>
            </div>
        </div>
    );
}
export default CostItem;