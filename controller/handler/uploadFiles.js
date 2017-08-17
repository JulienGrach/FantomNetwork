/**
 * Created by tostaky on 16/08/17.
 */

//DEPENDENCIES
const fs = require('fs');


//MODULE
function profilPic(file){
    const oldPath = file.imgProfil.path;
    const newPath = __dirname+'/../../public/storage/profil/'+file.imgProfil.name;
    const pathToModel = '/storage/profil/'+file.imgProfil.name;

    return new Promise((resolve, reject)=>{
        fs.rename(oldPath, newPath, (err)=>{
            if(err) reject(err);
            resolve(pathToModel);
        });
    });
}

function main(file, type, destination){
    let result;

    switch(type){
        case 'image':
            switch(destination){
                case 'profilPic':
                     result = profilPic(file);
                    break;
                case 'coverPic':
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

    return result
}

module.exports = main;