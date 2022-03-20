import React from "react";
import { Link } from "react-router-dom";
import * as dayjs from "dayjs";
import { TableCell, TableBody, TableRow } from "@windmill/react-ui";

import Status from "../table/Status";
import { FiEye } from "react-icons/fi";
import Tooltip from "../tooltip/Tooltip";
import SelectStatus from "../form/SelectStatus";

const OrderTable = ({ orders }) => {
  return (
    <>
      <TableBody>
        {orders?.map((order, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              <span className="font-semibold uppercase text-xs">{i + 1}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">
                {dayjs(order.createdAt).format("MMM D, YYYY")}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm">{order.shippingInfo.state}</span>
            </TableCell>

            <TableCell>
              {" "}
              <span className="text-sm">{"nn"}</span>{" "}
            </TableCell>
            <TableCell>
              <span className="text-sm font-semibold">
                {order.paymentMethod}
              </span>
            </TableCell>
            <TableCell>
              {" "}
              <span className="text-sm font-semibold">
                ₹{Math.round(order.paymentInfo.status)}.00
              </span>{" "}
            </TableCell>
            <TableCell className="text-center text-xs">
              <Status status={order.orderStatus} />
            </TableCell>
            <TableCell className="text-center">
              <SelectStatus id={order._id} />
            </TableCell>
            <TableCell className="text-right flex justify-end">
              <div className="p-2 cursor-pointer text-gray-400 hover:text-green-600">
                {" "}
                <Link to={`/order/${order._id}`}>
                  <Tooltip
                    id="view"
                    Icon={FiEye}
                    title="View Invoice"
                    bgColor="#34D399"
                  />
                </Link>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default OrderTable;
