import React, { Component } from 'react'
import MenuComponent from './MenuComponent'
import { Routes,Route,BrowserRouter, useParams } from 'react-router-dom'
import HomeComponent from './HomeComponent'
import CreateDepartamento from './CreateDepartamento'
import UpdateDepartamento from './UpdateDepartamento'
//import DeleteComponent from './DeleteComponent'
import ConfirmDelete from './ConfirmDelete'

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

        //function DeleteDepartamentoElement(){
        //    let {numero} = useParams();
        //    return(
        //        <DeleteComponent
        //        numero={numero}/>
        //    )
        //}
        function ConfirmDeleteElement(){
            let{numero,nombre,localidad}= useParams();
            return(
                <ConfirmDelete
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
                    {/*<Route path="/delete/:numero" element={<DeleteDepartamentoElement/>}/>*/}
                    <Route path="/confirmdelete/:numero/:nombre/:localidad" element={<ConfirmDeleteElement/>}/>
                </Routes>
            </BrowserRouter> 
    )
    }
}
