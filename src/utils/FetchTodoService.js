import config from '../config/config.json'

export const fetchTodos = () => {
    return new Promise( (resolve, reject) => {
        let url = config["DATA_URL"];
        fetch(url)
        .then( response => {
            resolve(response.json());
        })
        .catch( err => {
            console.error(err);
            reject(null);
        })
    });
}