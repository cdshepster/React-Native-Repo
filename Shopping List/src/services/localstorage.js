import { AsyncStorage } from 'react-native';

class LocalStorage {
	constructor() {
    }
    
    add(key, value) {
        return AsyncStorage.setItem(key, JSON.stringify(value));
    }

    get(key) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(key)
            .then(result => {
                if(result !== null) {
                    resolve(JSON.parse(result))
                } else {
                    reject(result)
                }
            })
            .catch(error => reject(error));
        })
    }

    getItem(key) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(key).then((keyValue) => {
                resolve(keyValue)
                }, (error) => {
                console.log(error) //Display error
              });
        })

    }

    getAllKeys(){
        return new Promise((resolve, reject) => {
            AsyncStorage.getAllKeys()
            .then(result => {
                if(result !== null) {
                    resolve(result.map(k => AsyncStorage.getItem(k)))
                } else {
                    reject(result)
                }
            })
            .catch(error => reject(error));
        })
    }

    merge(key, value) {
        return AsyncStorage.mergeItem(key, JSON.stringify(value));
    }
};

const localStorage = new LocalStorage();
export default localStorage;
