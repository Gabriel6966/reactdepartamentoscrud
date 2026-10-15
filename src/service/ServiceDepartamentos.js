import axios from "axios";
import Global from "../Global";

export default class ServiceDepartamentos {


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