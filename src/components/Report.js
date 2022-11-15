import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

function Report(props) {
    const columns = [
        { field: 'id', headerName: 'S.No', width: 120 },
        { field: 'nodeId', headerName: 'ID', width: 120 },
        { field: 'nodeName', headerName: 'Name', width: 120 },
        { field: 'category', headerName: 'Category', width: 120 },
        { field: 'status', headerName: 'Status', width: 120 },
    ];

    const rows = props.allDevicesData.map(device => {
        return {
            id: device.id,
            nodeId: device.nodeId,
            nodeName: device.nodeName,
            category: device.category,
            status: device.status ? 'Active' : 'Inactive'
        }
    });
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
}

export default Report;