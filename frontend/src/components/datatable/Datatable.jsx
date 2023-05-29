import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';

import { userColumns, userRows } from '../../datatablesource.js'
import { Link } from 'react-router-dom';

const Datatable = () => {

	const actionColumn = [{
		field: "action", headerName: "Action", width: 200, renderCell: () => {
			return (
				<div className='cellAction'>
					<Link to='test' style={{textDecoration: "none"}}>
						<div className='viewButton'> View </div>
					</Link>
					<div className='deleteButton'> Delete </div>
				</div>
			)
		}
	}]
	return (
		<div className='datatable'>
			<div className="DatatableTitle">
				Add New user
				<Link to='/users/new' className='link'>
					Add New
				</Link>
			</div>
			<DataGrid
				className='datagrid'
				rows={userRows}
				columns={userColumns.concat(actionColumn)}
				pageSize={5}
				pageSizeOptions={[5, 10]}
				checkboxSelection
			/>
		</div>
	)
}

export default Datatable