import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';

const Sidebar = () => {
  return (
	<div className='sidebar'>
		<div className='top'> 
			<span className='logo'> Admin Panel </span>
		</div>
		<hr />
		<div className='center'> 
			<ul>
				<p className='title'> MAIN </p>
				<li>
					<DashboardIcon className='icon' />
					<span> Dashboard </span>
				</li>
				<p className='title'> LISTS </p>
				<li>
					<PersonOutlineOutlinedIcon className='icon' />
					<span> Users </span>
				</li>
				<li>
					<Inventory2OutlinedIcon className='icon' />
					<span> Products </span>
				</li>
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
					<NotificationsOutlinedIcon className='icon' />
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
				<div className='colorOptions'> </div>
				<div className='colorOptions'> </div>
				<div className='colorOptions'> </div>
			</div>
		</div>
	</div>
  )
}

export default Sidebar