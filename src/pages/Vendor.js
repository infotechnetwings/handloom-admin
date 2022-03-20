import React, { useContext, useEffect,useState } from "react";
import {
  Select,
  Input,
  Button,
  Card,
  CardBody,
} from "@windmill/react-ui";
import DataTable from "../components/table/DataTable";
import { FiPlus } from "react-icons/fi";
import PageTitle from "../components/Typography/PageTitle";
import { SidebarContext } from "../context/SidebarContext";
import MainDrawer from "../components/drawer/MainDrawer";
import VendorDrawer from "../components/drawer/VendorDrawer";
import { useSelector } from "react-redux";

const Vendor = () => {
  const { toggleDrawer } = useContext(SidebarContext);
  const [vendorHeaders,setVendorHeaders] = useState([])
  const {vendors} = useSelector(state => state.vendor)
  useEffect(() => {
    console.log("vendor working");
  }, []);

  useEffect(()=>{
    console.log("vendor list :::",vendors)
    if(vendors.length > 0){
      let temp_arr = Object.keys(vendors[0])
      console.log("Temp arr :::: ",temp_arr)
      setVendorHeaders(temp_arr)
    }
  },[vendors])
  const handleSubmitForVendor = ()=>{
        console.log("form Submitted")
  }
  return (
    <>
      <PageTitle>Vendors Managment</PageTitle>
      <MainDrawer>
        <VendorDrawer />
      </MainDrawer>
      <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
        <CardBody>
          <form
            onSubmit={handleSubmitForVendor}
            className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex"
          >
            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <Input
                
                className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
                type="search"
                name="search"
                placeholder="Search by vendor name"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-5 mr-1"
              ></button>
            </div>  
            <div className="w-full md:w-56 lg:w-56 xl:w-56">
              <Button onClick={toggleDrawer} className="w-full rounded-md h-12">
                <span className="mr-3">
                  <FiPlus />
                </span>
                Add Vendor
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
      { vendors.length > 0? <DataTable cols = {vendorHeaders} rows = {vendors} /> : <></>}      
    </>
  );
};

export default Vendor;
