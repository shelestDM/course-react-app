const DiagramBar = (props) => {

    let barFillHeight = '0%';

    if(props.data.value){
        barFillHeight = Math.round((props.data.value / props.maxValue) * 100) + '%';
    }

    return (  
        <div className="h-full w-[22px] flex flex-col items-center">
            <div className="h-full w-full border border-[#313131] rounded-xl bg-[#fefae1] overflow-hidden flex flex-col justify-end">
                <div
                style={{ height: barFillHeight}}
                 className="bg-[#bd8025] w-full transition-all duration-300 ease-linear"></div>
            </div>
            <div className="font-bold text-xs text-center">
                {props.data.label}
            </div>
        </div>
    );
}
 
export default DiagramBar;