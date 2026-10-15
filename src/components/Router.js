import React, { Component } from 'react'
import MenuComponent from './MenuComponent'
import { Routes,Route,BrowserRouter, useParams } from 'react-router-dom'
import HomeComponent from './HomeComponent'
import CreateDepartamento from './CreateDepartamento'
import UpdateDepartamento from './UpdateDepartamento'

export default class Router extends Component {
    render() {
        function UpdateDepartamentoElement(){
            let {numero,nombre,localidad} = useParams();
            return(
                <UpdateDepartamento 
                numero={numero}
                nombre={nombre}
                localidad={localidad}/>
            )
        }
        return (
            <BrowserRouter>
                <MenuComponent />
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/create" element={<CreateDepartamento/>}/>
                    <Route path="/update/:numero/:nombre/:localidad" element={<UpdateDepartamentoElement/>}/>
                </Routes>
            </BrowserRouter> 
    )
    }
}
