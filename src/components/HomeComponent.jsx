import React, { Component } from 'react'
import ServiceDepartamentos from "../service/ServiceDepartamentos";
import { NavLink } from "react-router-dom";
import loading from "../assets/images/loading.jpg"

export default class HomeComponent extends Component {


    service = new ServiceDepartamentos();

    state = {
        departamentos: [],
        status: false
    }

    loadDepartamentos = () => {
        this.service.getDepartamentos().then((result) => {
            this.setState({
                departamentos: result
            })
        })
    }

    componentDidMount() {
        this.loadDepartamentos();
    }


    render() {

        if (this.state.status == true) {
            return (
                <div>
                    <h1>Departamentos Page</h1>
                
                    <table className="table table-active">
                        <thead>
                            <tr>
                                <th>Numero: </th>
                                <th>Nombre: </th>
                                <th>Localidad: </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.departamentos.map((departamento,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{departamento.numero}</td>
                                            <td>{departamento.nombre}</td>
                                            <td>{departamento.localidad}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return(
                <img src={loading} style={{width: '1700px', height: 'auto'}} alt="loading..."/>
            )

        }
    }
}
