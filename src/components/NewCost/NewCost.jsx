import CostForm from "./CostForm";

const NewCost = (props) => {

    const getFormData = (costData) =>{
        props.addCostToCostListHandler(costData);
        console.log(costData);
    }

    return (
        <div className="bg-[#2979ff] rounded-xl mx-3 md:w-[50%] md:mx-auto mt-5">
            <CostForm onGetFormData={getFormData} />
        </div>
     );
}
 
export default NewCost;