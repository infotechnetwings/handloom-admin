import React from 'react';
import {
    TableContainer,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
    Badge,
    TableFooter,
    Pagination
  } from "@windmill/react-ui";
const DataTable = ({cols,rows})=>{
    return(<>
        <TableContainer>
        <Table>
          <TableHeader>
            <TableRow>
                {cols.map((item,index)=>{
                    return <TableCell key={index}>{item}</TableCell>
                })}
            </TableRow>
          </TableHeader>
          <TableBody>
                {rows.map((item,index)=>{
                    
                        return <TableRow>
                                {Object.keys(item).map((value,index)=>{
                                    return <TableCell key ={`row_${index}`}>
                                        <div className="flex items-center text-sm">
                                        <span className="font-semibold ml-2">{item[value]}</span>
                                        </div>
                                    </TableCell>
                                } )}
                        </TableRow>
                })
            }
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination totalResults={rows.length} resultsPerPage={4} onChange={() => {}} label="Table navigation" />
        </TableFooter>
      </TableContainer>
    
    </>)

}
export default DataTable;