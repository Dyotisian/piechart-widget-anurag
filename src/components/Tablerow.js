import React from "react";

function Tablerow(props){
    return (
        <tr>
            <td>{props.device.id}</td>
            <td>{props.device.nodeId}</td>
            <td>{props.device.nodeName}</td>
            <td>{props.device.category}</td>
            <td>{props.device.status ? 'Active' : 'Inactive'}</td>
        </tr>
    )
}

export default Tablerow;