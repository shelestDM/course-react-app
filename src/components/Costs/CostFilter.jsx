const CostFilter = (props) => {

    const selectYearHandler = (event) => {
        props.getYear(event.target.value);
    }

    return (
        <div className="bg-[#ec407a] text-right p-3 mx-3 my-5 md:w-[50%] md:mx-auto rounded-xl flex justify-evenly items-center">
            <label htmlFor="year" className="text-[25px] text-white">Sort by year:</label>
            <select 
            value={props.year}
            name="year"
            onChange={selectYearHandler} 
            className="w-24">
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
            </select>
        </div>
     );
}
 
export default CostFilter;