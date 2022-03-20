import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    "vendors":[],
    
}

function generateString(length) {
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}



export const vendorSlice = createSlice({
    name:'vendor',
    initialState,
    reducers:{
        addVendor:(state,action)=>{
            try{
                let temp = action.payload
                console.log("this is temp",temp)
                temp.id = generateString(5)
                state.vendors.push(temp)
            }
            catch(err){
                console.log("error in adding vendor :::: ",err)
            }
            
        },
        deleteVendor:(state,action)=>{
            try{
                let temp = action.payload
                let id =  temp.id
                state.vendors = state.vendors.filter(element => element.id !== id);
            }
            catch(err){
                console.log("err in deleting vendor ::::: ",err)
            }
            
        }
    }
})

export const { addVendor,deleteVendor } = vendorSlice.actions


export default vendorSlice.reducer