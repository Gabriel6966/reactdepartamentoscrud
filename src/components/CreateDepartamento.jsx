import React, { Component } from 'react'
import Global from "../Global";
import { Navigate } from "react-router-dom";
import ServiceDepartamentos from "../service/ServiceDepartamentos";


export default class CreateDepartamento extends Component {


    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    url = Global.apiDepartamentos;
    service = new ServiceDepartamentos();

    inserDepartamento = (event) => {
        event.preventDefault();
        let request = "api/Departamentos";
        let departamento = {
            numero: parseInt(this.cajaNumero.current.value),
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLocalidad.current.value,

        }
        this.service.insertDepartamento(departamento).then((result) => {
            this.setState({
                status: true,
                mensaje: "Departamento insertado correctamente"
            })
        }).catch((err) => {
            this.setState({
                status: false,
                mensaje: err.message
            })
        })
    }
    state = {
        status: false,
        mensaje: "",
    }


    render() {
        if (this.state.status == true) {
            return (<Navigate to="/" />)
        } else {
            return (
                <div>
                    {
                        this.state.mensaje &&
                        <h3 style={{color:"fuchsia"}}>
                            {this.state.mensaje}
                        </h3>
                    }
                    <h1>Crear departamentos</h1>
                    <form>
                        <label>Numero:</label>
                        <input type="number" ref={this.cajaNumero} className="form-control" />
                        <label>Nombre:</label>
                        <input type="text" ref={this.cajaNombre} className="form-control" />
                        <label>Localidad:</label>
                        <input type="text" ref={this.cajaLocalidad} className="form-control" />
                        <button onClick={this.inserDepartamento} className="btn btn-primary mt-3">Insertar Departamento</button>
                    </form>
                </div>
            )
        }
    }
}
