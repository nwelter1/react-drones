import React, {useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import {
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';
import { DroneForm } from '../../components/DroneForm';
import { string } from 'yargs';




const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 170 },
    { field: 'name', headerName: 'Drone name', width: 130 },
    { field: 'description', headerName: 'Description', width: 130 },
    {
    field: 'price',
    headerName: 'Price',
    type: 'string',
    width: 90,
    }
];

export const DataTable = () => {
    let {droneData, getData} = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState({ });

    let handleOpen = () => {
        setOpen(true)
    };
    let handleClose = () => {
        setOpen(false)
    };

    const rows = [
        { id: 1, name: 'Snow', description: 'Jon', price: 35 },
      ];

    return (
        <div style={{ height: 475, width: '100%'}}>
            <h2>Drones in Inventory</h2>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection  onSelectionModelChange = {id => setData(id[0])}/>
            {console.log(gridData)}
        </div>
    )
}