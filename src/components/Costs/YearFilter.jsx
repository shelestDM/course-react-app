import { useState } from "react";

const YearFilter = () => {

    const [selectedYear, setSelectedYear] = useState('2023');

    const selectYearHandler = (event) => {
        setSelectedYear(event.target.value)
        console.log(selectedYear);
    }

    return (
        <div className="bg-[#ec407a] text-right py-5 px-3 mx-3 my-5 md:w-[50%] md:mx-auto rounded-xl">
            <select onChange={selectYearHandler} className="w-24 inline-block">
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023" selected>2023</option>
            </select>
        </div>
     );
}
 
export default YearFilter;