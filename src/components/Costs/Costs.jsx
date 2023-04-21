import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";
import ZeroCosts from "./ZeroCosts";

const Costs = (props) => {
    return ( 
        <div>
            <CostsDiagram costs={props.costs}/>
            { props.costs.length ? <CostList costs={props.costs} /> : <ZeroCosts/>}
        </div>
     );
}
 
export default Costs;