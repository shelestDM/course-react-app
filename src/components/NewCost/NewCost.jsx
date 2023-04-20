import { useState } from "react";
import AddCostButton from "./AddCostButton";
import CostForm from "./CostForm";

const NewCost = (props) => {

    const [showForm, setShowForm] = useState('');

    const getFormData = (costData) =>{
        props.addCostToCostListHandler(costData);
    }

    const inverseFlag = () => {
        setShowForm(!showForm);
    }

    return (
        <div className="bg-[#2979ff] min-h-[100px] flex justify-center items-center rounded-xl mx-3 md:w-[50%] md:mx-auto mt-5">
            {
                showForm 
                ? <CostForm onInverseFlagHandler={inverseFlag} onGetFormData={getFormData} />
                :<AddCostButton onInverseFlagHandler={inverseFlag}/>
                
            }
        </div>
     );
}
 
export default NewCost;