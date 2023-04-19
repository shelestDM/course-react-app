import CostItem from "./CostItem";

const CostList = (props) => {
    return (
        <div className="flex flex-col gap-5 py-5 px-3 bg-[#4caf50] mx-3 md:w-[50%] md:mx-auto rounded-xl mt-5">
            {
                props.costs.map(item =>
                    <CostItem costs={item} />
                )
            }
        </div>
    );
}

export default CostList;