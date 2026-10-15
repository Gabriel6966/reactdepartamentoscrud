import React, { Component } from 'react'
import Global from "../Global";
import {Navigate} from "react-router-dom";
import ServiceDepartamentos from "../service/ServiceDepartamentos";


export default class UpdateDepartamento extends Component {
    service = new ServiceDepartamentos();

    cajaNumero = React.createRef();
    cajaNombre=React.createRef();
    cajaLocalidad=React.createRef();


    state={
        status:false,
    }



    updateDepartamento=(event)=>{
        event.preventDefault();
        let departamento={
            numero:parseInt(this.cajaNumero.current.value),
            nombre:this.cajaNombre.current.value,
            localidad:this.cajaLocalidad.current.value,


        }
        this.service.updateDepartamento(departamento).then((result)=>{
            this.setState({
                status:true,
            })
        })
    }
    
    
    render() {
        return (
            <div>
                <h1> Update departamento</h1>
                {
                    this.state.status==true &&
                    <Navigate to ="/" />
                }
                <form>
                    <label>Numero: </label>
                    <input type="number" ref={this.cajaNumero} className="form-control" defaultValue={this.props.numero} disabled/>
                    <label>Nombre:</label>
                    <input type="text" ref={this.cajaNombre} className="form-control" defaultValue={this.props.nombre}/>
                    <label>Localidad: </label>
                    <input type="text" ref={this.cajaLocalidad} className="form-control" defaultValue={this.props.localidad}/>
                    <button className="btn btn-success" onClick={this.updateDepartamento}>Update</button>
                </form>
            </div>
        )
    }
}
