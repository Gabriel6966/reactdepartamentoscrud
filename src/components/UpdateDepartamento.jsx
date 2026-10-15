import React, { Component } from 'react'

export default class UpdateDepartamento extends Component {
    
    cajaNumero = React.createRef();
    cajaNombre=React.createRef();
    cajaLocalidad=React.createRef();

    updateDepartamento=(event)=>{
        event.preventDefault();
    }
    
    
    render() {
        return (
            <div>
                <h1> Update departamento</h1>
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
