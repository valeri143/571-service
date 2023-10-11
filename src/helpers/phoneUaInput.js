  import IMask from 'imask';
  export const phoneInputHandler = () => {
    const phoneInput = document.querySelector('#number');
         new IMask(phoneInput, {
    mask: "+{38} 000 000 00 00",
  });
  }