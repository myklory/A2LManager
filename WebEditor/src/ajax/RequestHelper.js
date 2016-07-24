


export  function getAsap2A2L() {
  return new Promise( function (resolve, reject) {
    $.get("http://localhost:8080/api/asap2/a2l", function (result, status) {
      console.log(status);
      if ( status === 'success'){
        resolve(result);
      }
      else {
        reject('bad request');
      }
    });
  })

}

export function getAsap2Template() {
  return new Promise( function (resolve, reject) {
    $.get("http://localhost:8080/api/asap2/template", function (result, status) {
      if ( status === 'success'){
        console.log(result);
        resolve(result);
      }
      else {
        reject('bad request');
      }
    });
  })
}
