const AddCostButton = (props) => {
    return (  
        <div>
             <button 
                onClick={props.onInverseFlagHandler}
                type="submit"
                className="text-white bg-[#9c27b0] py-2 px-3 rounded-lg hover:bg-[#673ab7] active:scale-[0.9]">
                    Add a new cost
            </button>
        </div>
    );
}
 
export default AddCostButton;