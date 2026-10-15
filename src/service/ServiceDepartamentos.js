import axios from "axios";
import Global from "../Global";

export default class ServiceDepartamentos {

    insertDepartamento(departamento) {
        return new Promise(function (resolve, reject) {
            let url = Global.apiDepartamentos;
            let request = "api/Departamentos";
            axios.post(url + request, departamento).then(response => {
                console.log("insertando departamento");
                resolve(response.data);
            }).catch((err) => {
                console.log(err);
                reject(err);
            })
        })
    }

    updateDepartamento(departamento) {
        return new Promise(function (resolve, reject) {
            let url = Global.apiDepartamentos;
            let request = "api/Departamentos";
            axios.put(url + request, departamento).then(response => {
                console.log("actualizando departamento");
                resolve(response.data);

            }).catch((err) => {
                console.log(err);
                reject(err);
            })
        })
    }




    getDepartamentos() {
        return new Promise(function (resolve) {
            let url = Global.apiDepartamentos;
            let request = "api/Departamentos";
            axios.get(url + request).then((response) => {
                console.log(response.data);
                resolve(response.data);
            }).catch((err) => {
                console.log(err);
                throw err;
            })
        })

    }
}