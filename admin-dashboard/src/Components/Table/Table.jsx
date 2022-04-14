import './Table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import HP from '../Image/hp.jpg'
import Apple from '../Image/Apple.jpg'
import Asus from '../Image/asus.jpg'
import Lenovo from '../Image/Lenovo.jpg'
import Toshiba from '../Image/toshiba.jpg'
import Dell from '../Image/dell.jpg'
const rows = [
    {
        id: 1143455,
        product: "Hp Laptop",
        Img: <img src={HP} className="Image" />,
        customer: "Getasew Amsalu",
        date: "14 April",
        amount: 925.41,
        method: " Cash on Delivery",
        status: "Approved",
    },
    {
        id: 1143456,
        product: "Toshiba Laptop",
        Img: <img src={Toshiba} className="Image" />,
        customer: "Getasew Amsalu",
        date: "14 April",
        amount: 271.41,
        method: " Online Delivery",
        status: "Pending",
    },
    {
        id: 1143457,
        product: "Apple Laptop",
        Img: <img src={Apple} className="Image" />,
        customer: "Getasew Amsalu",
        date: "14 April",
        amount: 2474.29,
        method: " Online Delivery",
        status: "Approved",
    },
    {
        id: 1143458,
        product: "Asus Laptop",
        Img: <img src={Asus} className="Image" />,
        customer: "Getasew Amsalu",
        date: "14 April",
        amount: 870.91,
        method: " Cash on Delivery",
        status: "Pending",
    },
    {
        id: 1143459,
        product: "Lenovo Laptop",
        Img: <img src={Lenovo} className="Image" />,
        customer: "Getasew Amsalu",
        date: "14 April",
        amount: 2081.13,
        method: " Cash on Delivery",
        status: "Approved",
    },
    {
        id: 1143460,
        product: "Dell Laptop",
        Img: <img src={Dell} className="Image" />,
        customer: "Getasew Amsalu",
        date: "14 April",
        amount: 925.40,
        method: " Cash on Delivery",
        status: "Pending",
    },
    
  ];
  
const ListTable = () => {
  return (
      <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="header">
            <TableCell className="tableCells">Product ID</TableCell>
            <TableCell className="tableCells">Product</TableCell>
            <TableCell className="tableCells">Image</TableCell>
            <TableCell className="tableCells">Customer</TableCell>
            <TableCell className="tableCells">Date</TableCell>
            <TableCell className="tableCells">Amount</TableCell>
            <TableCell className="tableCells">Method</TableCell>
            <TableCell className="tableCells">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.product}</TableCell>
              <div className="cellWrapper">
                  <TableCell className="tableCell">{row.Img}</TableCell>
                  </div>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">${row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
              <span className={'status'} id={row.status}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ListTable
