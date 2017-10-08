// EXAMPLE
let config = {
  onUploadProgress: progressEvent => {
    let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
    // do whatever you like with the percentage complete
    // maybe dispatch an action that will update a progress bar or something
  }
}

axios.post('/path/to/post/', data, config)
        .then(response => console.log(response));
