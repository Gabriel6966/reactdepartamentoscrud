import React, { Component } from 'react'
import MenuComponent from './MenuComponent'
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import HomeComponent from './HomeComponent'

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <MenuComponent />
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                </Routes>
            </BrowserRouter> 
    )
    }
}
