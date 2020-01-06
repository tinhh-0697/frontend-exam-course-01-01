import React from "react";
import styled from "styled-components";
import { Table } from "reactstrap";

function TableC({ columns, data }) {
  function renderHeadingRow() {
    return columns.map((column, index) => {
      return <th key={index}>{column.title}</th>;
    });
  }

  function renderTableData() {
    return data.map((item, index) => {
      let col = Object.keys(item);
      console.log(col);
      return (
        <tr key={item.key}>
          {col.map((val, index) => {
            console.log(columns[index].dataIndex);
            if (index === columns[col[index]]) {
              console.log(col[index]);
            }
            return <td key={index}>{item[col[index]]}</td>;
          })}
        </tr>
      );
    });
  }

  return (
    <Table>
      <thead>
        <tr>{renderHeadingRow()}</tr>
      </thead>
      <tbody>
        {renderTableData()}
        {/* <tr>
          <th>1</th>
          <td>Creating Remarkable Poster...</td>
          <td>2,567</td>
          <td>check</td>
          <td>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </td>
        </tr> */}
      </tbody>
    </Table>
  );
}

export default TableC;
