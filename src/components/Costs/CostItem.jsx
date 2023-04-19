import CostDate from "./CostDate";

const CostItem = (props) => {

    return (
        <div className="flex flex-col-reverse gap-y-3 xs:flex-row items-start justify-between xs:items-center rounded-xl bg-[#2196f3] px-2 py-3 text-white">
            <CostDate date={props.costs.date}/>
            <div className="flex justify-between items-center w-full xs:flex-row xs:ml-5 text-center">
                <h2 className="font-bold bg-[#9c27b0] text-sm p-3 rounded-xl">
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