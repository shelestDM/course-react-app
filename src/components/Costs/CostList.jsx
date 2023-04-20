import CostItem from "./CostItem";

const CostList = (props) => {
    return (
        <div>
            <div key={props.id} className="flex flex-col gap-5 py-5 px-3 bg-[#4caf50] mx-3 md:w-[50%] md:mx-auto rounded-xl mt-5">
                {
                    props.costs.map(item =>
                        <CostItem
                            key={item.id}
                            costs={item} />
                    )
                }
            </div>
        </div>
    );
}

export default CostList;