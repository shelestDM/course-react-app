import { useState } from "react";

const CostForm = (props) => {

    const [costData, setCostData] = useState({
        title: '',
        amount: '',
        date: ''
    });

    function getTitleHandler (event){
        setCostData((previousState)=>{
            return {
                ...previousState,
                title: event.target.value
            }
        })  
    }
    function getCostHandler (event){
        setCostData((previousState)=>{
            return {
                ...previousState,
                amount: event.target.value
            }
        })
    }
    function getDateHandler (event){
        setCostData((previousState)=>{
            return {
                ...previousState,
                date: event.target.value
            }
        })
    }

    const submitCostFormHandler = (event) =>{
        event.preventDefault();
        const generatedCostData = {
            id: new Date().toISOString(),
            date: new Date(costData.date),
            title: costData.title,
            amount: costData.amount
        }
        props.onGetFormData(generatedCostData);
        props.onInverseFlagHandler();
        setCostData(()=>{
           return{
            title: '',
            amount: '',
            date: ''
           }
        })
    }

    return (
        <form 
        onSubmit={submitCostFormHandler}
        className="py-5 px-3 space-y-3">
            <div className="flex flex-col text-white w-fit gap-2">
                <label htmlFor="name">Name</label>
                <input 
                name="name"
                value={costData.title} 
                onInput={getTitleHandler} 
                type="text" 
                className="text-black rounded-lg px-2 py-1"/>
            </div>
            <div className="flex flex-col text-white w-fit gap-2">
                <label htmlFor="amount">Sum</label>
                <input 
                name="amount"
                value={costData.amount} 
                onInput={getCostHandler} 
                className="text-black rounded-lg px-2 py-1" 
                type="number" 
                min='0.01' 
                step='0.01' />
            </div>
            <div className="flex flex-col text-white w-fit gap-2">
                <label htmlFor="date">Date</label>
                <input 
                name="date"
                value={costData.date} 
                onInput={getDateHandler} 
                className="text-black rounded-lg px-2 py-1" 
                type="date" 
                min='2021-01-01'
                />
            </div>
            <div className="flex gap-5">
                <button 
                type="submit"
                className="text-white bg-[#4caf50] py-2 px-3 rounded-lg hover:bg-[#198754] active:scale-[0.9]"
                >Add cost</button>
                <button 
                onClick={props.onInverseFlagHandler}
                type="button"
                className="text-white bg-[#f44336] py-2 px-3 rounded-lg hover:bg-[#ff1744] active:scale-[0.9]"
                >Cancel</button>
            </div>
        </form>
    );
}

export default CostForm;