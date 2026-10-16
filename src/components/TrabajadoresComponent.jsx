import React, { Component } from 'react'
import ServiceHospitales from "../service/ServiceHospitales";

export default class TrabajadoresComponent extends Component {

    service = new ServiceHospitales();

    state = {
        trabajadores: [],
    }

    loadTrabajadores = () => {
        let idHospitales = this.props.hospitalesSelect;
        let data = "";

        for (let id of idHospitales) {
            data += "idHospital=" + id + "&";
        }
        data = data.substring(0, data.length - 1);
        this.service.getTrabajadores(data).then((result) => {
            this.setState({
                trabajadores: result,
            })
        })
    }





    componentDidMount() {
        this.loadTrabajadores();
    }

    componentDidUpdate(oldProps) {
        if (oldProps.hospitalesSelect != this.props.hospitalesSelect)
            this.loadTrabajadores();
    }


    render() {
        return (
            <div>
                <h1>Trabajadores Component</h1>
                <table className="table table-success">
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Oficio</th>
                            <th>Salario</th>
                            <th>Hospital</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.trabajadores.map((trabajador, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{trabajador.apellido}</td>
                                        <td>{trabajador.oficio}</td>
                                        <td>{trabajador.salario}</td>
                                        <td>{trabajador.idHospital}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
