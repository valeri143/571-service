export const sendEmail = ({ name, number, form = 'feedback' }) => {

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '../../send.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log('Success:', xhr.responseText);
      } else {
        console.log('Error');
      }
    };

    xhr.send(JSON.stringify({ name, number, form }));
}