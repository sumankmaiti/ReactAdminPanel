import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const Navbar = () => {
  return (
	<div className='navbar'>
		<div className='wrapper'>
			<div className='search'>
				<input type='text' placeholder='Search...' />
				<SearchIcon />
			</div>
			<div className='items'>
				<div className='item'>
					<LanguageOutlinedIcon className='icon' />
					English
				</div>
				<div className='item'>
					<DarkModeOutlinedIcon className='icon' />
				</div>
				<div className='item'>
					<FullscreenExitOutlinedIcon className='icon' />
				</div>
				<div className='item'>
					<NotificationsNoneOutlinedIcon className='icon' />
					<span className='counter'> 10 </span>
				</div>
				<div className='item'>
					<ChatBubbleOutlineOutlinedIcon className='icon' />
					<span className='counter'> 1 </span>
				</div>
				<div className='item'>
					<FormatListBulletedIcon className='icon' />
				</div>
				<div className='item'>
					<img src='http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSqKuVvlbxGMi9XNOucHAgBFfpmzDGPVVl8_uxIMndHB08AZpWrPvLS9p60YtYNKwPUUuvYi6hA9D8k_fs' 
						alt='suman' 
						className='avatar' 
					/>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Navbar