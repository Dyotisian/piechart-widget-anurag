import React from "react";
import Table from 'react-bootstrap/Table';
import Tablerow from "./Tablerow";

function Report(props){
    
    // console.log(props.allDevicesData)
    const allRows = props.allDevicesData.map(device => <Tablerow key={device.id} 
                                                                device={device} />)
    return (
        <Table striped>
            <thead>
                <tr>
                    <th onClick={() => props.sortHandle('id')}>S.No.</th>
                    <th onClick={() => props.sortHandle('nodeId')}>ID</th>
                    <th onClick={() => props.sortHandle('nodeName',true)}>Name</th>
                    <th onClick={() => props.sortHandle('category',true)}>Category</th>
                    <th onClick={() => props.sortHandle('status')}>Status</th>
                </tr>
            </thead>
            <tbody>
                {allRows}
            </tbody>
        </Table>
    )
}

export default Report;