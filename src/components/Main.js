import React, { useState } from 'react'
import {AppRouter} from '../routes/AppRouter'
import { UserContext } from './userContext'

const Main = () => {

    const [itemCar, setItemCar] = useState({
        countItem:"pepe",
        price:"lucas"
    })

    return (
        <UserContext.Provider value={{itemCar,setItemCar}}>
            <AppRouter/>
        </UserContext.Provider>
      )
}

export default Main