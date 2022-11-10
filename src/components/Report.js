import React from "react";
import Table from 'react-bootstrap/Table';

function Report(props){
    // console.log(props.allDevicesData);

    const allRows = props.allDevicesData
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </Table>
    )
}

export default Report;