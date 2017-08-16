/**
 * Created by tostaky on 11/08/17.
 **/


function toggleFormModify(id, type){
    let content = $('#'+type+'Content'+id);
    let form = $('#'+type+'FormModify'+id);

    content.toggle();
    form.toggle();

    if(type == 'article'){
        $('.articleButton').toggle();
    }
}


