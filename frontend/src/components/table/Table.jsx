import './table.scss'

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Table = () => {
    const data = [
        {
            id: 1,
            product: "Asus",
            img: "link/of/the/product",
            customer: "Suman",
            date: "1 march",
            amount: 2000,
            method: "Online",
            status: "Pending",
        },
        {
            id: 2,
            product: "Asus 2",
            img: "link/of/the/product",
            customer: "Suman 2",
            date: "1 march 2",
            amount: 20002,
            method: "Online",
            status: "Done",
        },
        {
            id: 3,
            product: "Asus 3",
            img: "link/of/the/product",
            customer: "Suman 3",
            date: "1 march 3",
            amount: 2000,
            method: "Cash",
            status: "Done",
        }
    ]
  return (
        <TableContainer component={Paper} className='table'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Table