/**
 * Created by tostaky on 16/08/17.
 */

//DEPENDENCIES
const fs = require('fs');

//FUNCTION PROMISEMAP: https://stackoverflow.com/questions/29292921/how-to-use-promise-all-with-an-object-as-input
async function promiseMapAll(promiseMap) {
    try {
        const promises = await Promise.all(Object.values(promiseMap));
        let objMapped = {};
        Object.keys(promiseMap).forEach((key, i) => {
            objMapped[key] = promises[i];
        });
        return objMapped;
    } catch(err) {
        return { err };
    }
}


//MODULE
function profilPic(file){
    const oldPath = file.path;
    const newPath = __dirname+'/../../public/storage/profil/'+file.name;
    const pathToModel = '/storage/profil/'+file.name;

    return new Promise((resolve, reject)=>{
        fs.rename(oldPath, newPath, (err)=>{
            if(err) reject(err);
            resolve(pathToModel);
        });
    });
}

function coverPic(file){
    const oldPath = file.path;
    const newPath = __dirname+'/../../public/storage/cover/'+file.name;
    const pathToModel = '/storage/cover/'+file.name;

    return new Promise((resolve, reject)=>{
        fs.rename(oldPath, newPath, (err)=>{
            if(err){
                reject(err);
            }else{
                resolve(pathToModel);
            }
        });
    });
}

function main(file){
    let result = {};

    for(let key in file){

        let mimType = file[key].type.split("/").shift();

        switch(mimType){
            case 'image':
                switch(key){
                    case 'profilPic':
                        result[key] = profilPic(file[key]);
                        break;
                    case 'coverPic':
                        result[key] = coverPic(file[key]);
                        break;
                    default:
                        break;
                }
                break;

            case 'video':
                break;

            case 'default':
                break
        }
    }
    return promiseMapAll(result)
}

module.exports = main;