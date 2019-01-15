import React, {Component} from 'react';
import { VictoryChart } from 'victory';
import { VictoryLine } from 'victory';
import { VictoryAxis } from 'victory';
import { VictoryBar } from 'victory';

class BarGraph extends Component {
	render(){
		return(
			<VictoryChart 
				domainPadding={{x: 40}}>
				    <VictoryBar
				      barRatio={0.4}
				      cornerRadius={10}
				      height={200}
				      animate={{
						  duration: 2000,
						  onLoad: { duration: 1000 }
					  }}
				      data={[
				        { experiment: "Shanghai", expected: 3.75, actual: 3.21 },
				        { experiment: "London", expected: 3.75, actual: 3.38 },
				        { experiment: "Mumbai", expected: 3.75, actual: 2.05 },
				        { experiment: "California", expected: 3.75, actual: 3.71 },
				        { experiment: "Kathmandu", expected: 3.75, actual: 3.71 }
				      ]}
				      x="experiment"
				      y={(d) => (d.actual / d.expected) * 100}
				    />
				    <VictoryAxis
				      label="Cities"
				      style={{
				        axisLabel: { padding: 30 }
				      }}
				    />

				    <VictoryAxis dependentAxis
				      label="percent yield"
				      height={400}
				      style={{
				        axisLabel: { padding: 40 }
				      }}

				    />
			</VictoryChart>

		);
	}
}

export default BarGraph;


