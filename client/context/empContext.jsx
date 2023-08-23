import axios from 'axios';
import {createContext,useState,useEffect} from 'react'

export const EmpContext=createContext({})

export function EmpContextProvider({childern}){
    const [emp,setEmp]=useState(null);
    useEffect(()=>{
        if(!emp){
            axios.get('/profile').then(({data})=>{
                setEmp(data);
            })
        }
    },[])

    return (                
        <EmpContext.Provider value={{emp,setEmp}}>
            {childern}
         </EmpContext.Provider>
    )
}