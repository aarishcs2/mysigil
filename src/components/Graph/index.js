import React from 'react';
import './index.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Icon } from '@iconify/react';

const data = [
	{
		name: 'Nov 10, 2023',
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: 'Nov 10, 2023',
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: 'Nov 10, 2023',
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: 'Nov 10, 2023',
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: 'Nov 10, 2023',
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: 'Nov 10, 2023',
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: 'Nov 10, 2023',
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];

const Graph = () => {
	return (
		<div style={{ background: 'transparent ', padding: '10px', height: "320px" }}>
			<div className='GraphHeader'>
				<div>
					<div className='FlexSettingMethod'>
						<div>
							<img src='/images/Vector.png' />
						</div>
						<div className='ContentHeader'>Total Impressions</div>
					</div>
					<div className='number'>168</div>
				</div>
				<div>
					<div className='FlexSettingMethod'>
						<div>
							<img src='/images/Group.png' />
						</div>
						<div className='ContentHeader'>Total Views</div>
					</div>
					<div className='number'>24</div>
				</div>
				<div>
					<div className='FlexSettingMethod'>
						<div>
							<img src='/images/cURSOR.png' />
						</div>
						<div className='ContentHeader'>Total Clicks</div>
					</div>
					<div className='number'>57</div>
				</div>
				<div>
					<div className='FlexSettingMethod'>
						<div>
							<img src='/images/MeanuewBar.png' />
						</div>
						<div className='ContentHeader'>Click Through Rate</div>
					</div>
					<div className='number'>80</div>
				</div>

			</div>
			<ResponsiveContainer width="100%">
				<LineChart
					width={500}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
					<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Graph;