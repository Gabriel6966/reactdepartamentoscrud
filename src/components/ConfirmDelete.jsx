import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class ConfirmDelete extends Component {


    service = new ServiceDepartamentos();

    state = {
        mensaje: "",
        eliminado: false,
    }

    deleteDepartamento = (numero) => {
        this.service.deleteDepartamento(numero).then((result) => {
            this.setState({
                eliminado:true,
            })
        }).catch((err)=>{
            this.setState({
                mensaje:err.message
            })
        })
    }


    render() {
        if(this.state.eliminado==true){
            <NavLink to = "/">Volver</NavLink>
        }
        return (
            
            <div>
                <h1>¿Estás seguro de que quieres eliminar este departamento?</h1>
                <p>Numero: {this.props.numero}</p>
                <p>Nombre: {this.props.nombre}</p>
                <p>Localidad: {this.props.localidad}</p>
                <button className="btn btn-danger" onClick={()=>this.deleteDepartamento(this.props.numero)}>Eliminar</button>
            </div>
            
        )
        
        
    }
}




