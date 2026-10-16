import axios from "axios";
import Global from "../Global";

export default class ServiceHospitales{
    
    getHospitales(){
        return new Promise(function(resolve,reject){
            let url = Global.apiTrabajadores;
            let request= "api/Hospitales";
            axios.get(url+request).then((response)=>{
                console.log("obteniendo hospitales");
                resolve(response.data);
            }).catch((err)=>{
                console.log("error obteniendo hospitales" + err);
                reject(err);
            })
        })
    }

    getTrabajadores(data){
        return new Promise(function(resolve,reject){
            let url=Global.apiTrabajadores;
            let request= "api/trabajadores/trabajadoreshospitales?" + data;
            
            axios.get(url+request).then((response)=>{
                console.log("obteniendo trabajadores");
                resolve(response.data);
            }).catch((err)=>{
                console.log("error al obtener trabajadores" + err);
                reject(err);
            })
        })
    }

}