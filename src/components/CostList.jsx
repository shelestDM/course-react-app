import CostItem from "./CostItem";

function CostList(props) {
    return (
        <div className="flex flex-col gap-5 py-5 px-3 bg-[#4caf50] rounded-xl mt-10">
            {
                props.costs.map(item =>
                    <CostItem costs={item} />
                )
            }
        </div>
    );
}

export default CostList;