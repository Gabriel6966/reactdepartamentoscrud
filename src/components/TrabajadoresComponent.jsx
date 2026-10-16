import React, { Component } from 'react'
import ServiceHospitales from "../service/ServiceHospitales";

export default class TrabajadoresComponent extends Component {
  
    service =  new ServiceHospitales();
    
    
  
    render() {
    return (
      <div>
        <h1>Trabajadores Component</h1>
      </div>
    )
  }
}
