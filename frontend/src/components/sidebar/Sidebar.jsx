import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
	const{dispatcher} = useContext(DarkModeContext)

  return (
	<div className='sidebar'>
		<div className='top'> 
			<Link to="/" style={{ textDecoration: "none" }}>
				<span className='logo'> Admin Panel </span>
			</Link>
		</div>
		<hr />
		<div className='center'> 
			<ul>
				<p className='title'> MAIN </p>
				<Link to="/" style={{ textDecoration: "none" }}>
					<li>
						<DashboardIcon className='icon' />
						<span> Dashboard </span>
					</li>
				</Link>
				<p className='title'> LISTS </p>
				<Link to="/users" style={{ textDecoration: "none" }}>
					<li>
						<PersonOutlineOutlinedIcon className='icon' />
						<span> Users </span>
					</li>
				</Link>
				<Link to="/products" style={{ textDecoration: "none" }}>
					<li>
						<Inventory2OutlinedIcon className='icon' />
						<span> Products </span>
					</li>
				</Link>
				<li>
					<LocalShippingOutlinedIcon className='icon' />
					<span> Delivery </span>
				</li>
				<p className='title'> USEFUL </p>
				<li>
					<QueryStatsOutlinedIcon className='icon' />
					<span> Stats </span>
				</li>
				<li>
					<NotificationsActiveOutlinedIcon className='icon' />
					<span> Notifications </span>
				</li>
				<p className='title'> SERVICE </p>
				<li>
					<MonitorHeartOutlinedIcon className='icon' />
					<span> System Health </span>
				</li>
				<li>
					<AddToQueueIcon className='icon' />
					<span> Logs </span>
				</li>
				<li>
					<SettingsOutlinedIcon className='icon' />
					<span> Settings </span>
				</li>
				<p className='title'> USER </p>
				<li>
					<AccountCircleOutlinedIcon className='icon' />
					<span> Profile </span>
				</li>
				<li>
					<MeetingRoomOutlinedIcon className='icon' />
					<span> Logout </span>
				</li>
			</ul>
		</div>
		<hr />
		<div className='bottom'>
			<p className='title'> <span> THEMES </span> </p>
			<div className='colors'>
				<div className='colorOptions' onClick={() => dispatcher({type: "LIGHT"})}> </div>
				<div className='colorOptions' onClick={() => dispatcher({type: "DARK"})}> </div>
			</div>
		</div>
	</div>
  )
}

export default Sidebar