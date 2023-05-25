import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';

import {userColumns, userRows} from '../../datatablesource.js'

const Datatable = () => {

	const actionColumn = [{field: "action", headerName: "Action", width: 200, renderCell: () => {
		return (
			<div className='cellAction'>
				<div className='viewButton'> View </div>
				<div className='deleteButton'> Delete </div>
			</div>
		)
	}}]
	return (
		<div className='datatable'>
			<DataGrid
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