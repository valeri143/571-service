export const sendEmail = (data) => {

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/procees_form.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log('Success:', xhr.responseText);
      } else {
        console.log('Error');
      }
    };

    xhr.send(JSON.stringify(data));
}