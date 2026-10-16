import React, { Component } from 'react'
import ServiceHospitales from "../service/ServiceHospitales";
import TrabajadoresComponent from './TrabajadoresComponent';


export default class HospitalesMultiples extends Component {

    service = new ServiceHospitales();
    selectHospital = React.createRef();

    state = {
        hospitales: [],
        hospitalesSelect:[],

    }

    loadHospitales = () => {
        this.service.getHospitales().then((result) => {
            this.setState({
                hospitales: result
            })
        })
    }

    componentDidMount() {
        this.loadHospitales();
    }


    getHospitalesSelect = (event) => {
        event.preventDefault();
        let aux= []
        let options= this.selectHospital.current.options;
        for(let i =0;i<options.length;i++){
            if(options[i].selected){
                aux.push(options[i].value);
            }
        }
        console.log(aux);
        this.setState({
            hospitalesSelect:aux
        })
    }




    render() {
        return (
            <div>
                <h1> Hospitales Multiples</h1>
                <form>
                    <label></label>
                    <select ref={this.selectHospital} className='form-select' size="6" multiple>
                        {
                            this.state.hospitales.map((hospital, index) => {
                                return (
                                    <option key={index} value={hospital.idHospital}>
                                        {hospital.nombre}
                                    </option>
                                )
                            })
                        }
                    </select>

                    <button onClick={this.getHospitalesSelect} className="btn btn-info">
                        Mostrar trabajadores
                    </button>
                </form>
                {
                    this.state.hospitalesSelect.length !=0 &&
                    (<TrabajadoresComponent hospitalesSelect={this.state.hospitalesSelect}/>)
                }
            </div>
        )
    }
}