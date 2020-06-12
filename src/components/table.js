import React from "react";

// Returns how the table will look
function Table (props) {
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Department</th>
        </tr>
      </thead>
      <tbody>
          {props.employees.map(data => (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.phone}</td>
              <td>{data.department}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}


export default Table;