import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

import "react-circular-progressbar/dist/styles.css"
import './featured.scss'

const Featured = () => {
  return (
    <div className='featured'>
      <div className='top'> 
        <h1 className='title'> Total Revenue </h1>
        <MoreVertOutlinedIcon fontSize='small'/>
      </div>
      <div className='bottom'> 
        <div className="featuredChart">
          <CircularProgressbar text='70%' value={70} strokeWidth={5} />
        </div>
        <p className='title'> Total sales made today</p>
        <p className='amount'> $420 </p>
        <p className='desc'> All transactions shown here </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle"> Target </div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon fontSize='small' />
              <div className="resultAmount"> $12.4k </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle"> Last Week </div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize='small' />
              <div className="resultAmount"> $12.4k </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle"> Last Month </div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon fontSize='small' />
              <div className="resultAmount"> $12.4k </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Featured