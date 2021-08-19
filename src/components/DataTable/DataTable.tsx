import React, {useState} from 'react';
import { DataGrid, GridColDef, GridRowId, GridRowModel, GridValueGetterParams } from '@material-ui/data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import {
    Button,
    Dialog,
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
interface gridData{
      id?:string;
  }

export const DataTable = () => {
    let {droneData, getData} = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({id:''});

    let handleOpen = () => {
        setOpen(true)
    };
    let handleClose = () => {
        setOpen(false)
    };
    let deleteData = () => {
        server_calls.delete(gridData.id!)
        getData()
    };
    
    let handleCheckbox = (id:GridRowModel) =>{
        if(id[0] === undefined){
            setData({id:''})
        }else{
            setData({id:id[0].toString()})
        }
        
    }

    return (
        <div style={{ height: 475, width: '100%'}}>
            <h2>Drones in Inventory</h2>
            <DataGrid rows={droneData} columns={columns} pageSize={5} checkboxSelection  onSelectionModelChange = {handleCheckbox}/>
            {console.log(gridData)}
            <Button onClick={handleOpen}>Update</Button>
            <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update Drone Drone</DialogTitle>
                <DialogContent>
                    <DialogContentText>Update Drone</DialogContentText>
                    <DroneForm id={gridData.id}/>
                    {console.log(gridData)}
                </DialogContent>
                <DialogActions>
                <Button onClick = {handleClose} color="primary">Cancel</Button>
                <Button onClick={handleClose} color = "primary">Done</Button> 
          </DialogActions>
        </Dialog>
        </div>
    )
}