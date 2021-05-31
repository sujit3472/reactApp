import cakes from './data';
import Cake from './cake';

function Cakelist() {
	return (

		<div className="row">
			{cakes.map((each, index) =>  {
						//console.log(index);
						//console.log(each.name);
				return (<Cake data={each} key={index} />)
			})}
		</div>
	)
	
}

export default Cakelist;