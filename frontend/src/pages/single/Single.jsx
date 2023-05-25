import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'

import './single.scss'

const Single = () => {
	return (
		<div className='single'>
			<Sidebar />
			<div className='singleContainer'>
				<Navbar />
				<div className="top">
					<div className="left">
						<div className="editButton">Edit</div>
						<h1 className="title">Information</h1>
						<div className="item">
							<img src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSqKuVvlbxGMi9XNOucHAgBFfpmzDGPVVl8_uxIMndHB08AZpWrPvLS9p60YtYNKwPUUuvYi6hA9D8k_fs" className='itemImg' alt='' />
							<div className="details">
								<h1 className='itemTitle'> Suman Maiti </h1>
								<div className="detailItem">
									<span className='itemKey'>Email:</span>
									<span className='itemValue'>skm@gmail.com</span>
								</div>
								<div className="detailItem">
									<span className='itemKey'>Phone:</span>
									<span className='itemValue'>1234657890</span>
								</div>
								<div className="detailItem">
									<span className='itemKey'>Address:</span>
									<span className='itemValue'>Kolkata, West Bengal</span>
								</div>
								<div className="detailItem">
									<span className='itemKey'>Country:</span>
									<span className='itemValue'>India</span>
								</div>
							</div>
						</div>
					</div>
					<div className="right">
						<Chart aspect={4 / 1} title='User Spending (Last 6 month)'/>
					</div>
				</div>
				<div className="bottom">
					<h1 className="title">Latest Transaction</h1>
					<List/>
				</div>
			</div>
		</div>
	)
}

export default Single