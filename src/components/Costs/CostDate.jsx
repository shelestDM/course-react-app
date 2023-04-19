const CostDate = (props) => {

    const date = [
        props.date.toLocaleString("ru-RU",{day: '2-digit'}),
        props.date.toLocaleString("ru-RU",{month: 'short'}),
        props.date.getFullYear()
    ];

    return (
        <div className="bg-[#d84315] border border-white-900 p-3 rounded-xl flex flex-wrap sm:w-[100px] justify-center gap-x-1">
            {date.map(item=> <div>{item}</div>)}
        </div>
    );
}

export default CostDate;