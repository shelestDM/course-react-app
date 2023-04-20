import CostList from "./CostList";
import ZeroCosts from "./ZeroCosts";

const Costs = (props) => {
    return ( 
        <div>
            { props.costs.length ? <CostList costs={props.costs} /> : <ZeroCosts/>}
        </div>
     );
}
 
export default Costs;