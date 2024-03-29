import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'
import Tags from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import UserProfile from './Pages/UserProfile/UserProfile'
import SubscriptionForm from './Pages/Subscription/SubscriptionForm'
import PaymentUI from './Pages/Subscription/PaymentUI'
import Success from './Pages/Subscription/Success'



function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Auth' element={<Auth />} />
            <Route path='/AskQuestion' element={<AskQuestion />} />
            <Route path='/Questions' element={<Questions />} />
            <Route path='/Questions/:id' element={<DisplayQuestion />} />
            <Route path='/Tags' element={<Tags />} />
            <Route path='/Users' element={<Users />} />
            <Route path='/Users/:id' element={<UserProfile />} />
            <Route path='/SubscriptionForm' element={<SubscriptionForm />} />
            <Route path='/PaymentUI' element={<PaymentUI />} />
            <Route path='/Success' element={<Success />} />
          
            
            


        </Routes>
    )
}

export default AllRoutes;
