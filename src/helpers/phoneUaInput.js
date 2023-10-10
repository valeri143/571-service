  export const formatPhoneNumber = (input) => {
    // const numbersOnly = input.replace(/\D/g, '');
    // const formattedNumber = '+380 ' + numbersOnly.trim();

    if (input.split(' ')[0] === '+380') {
      const numbersOnly = input.split(' ').slice(1).join('').replace(/\D/g, '');

      if (numbersOnly.length <= 12) {
        let formattedPhoneNumber = '+380 ';

        if (numbersOnly.length <= 3) {
          formattedPhoneNumber += numbersOnly;
        }

        if (numbersOnly.length > 3 && numbersOnly.length < 6) {
          formattedPhoneNumber +=
            numbersOnly.slice(0, 3) + ' ' + numbersOnly.slice(3, 6);
        }

        if (numbersOnly.length >= 6 && numbersOnly.length < 8) {
          formattedPhoneNumber +=
            numbersOnly.slice(0, 3) +
            ' ' +
            numbersOnly.slice(3, 5) +
            ' ' +
            numbersOnly.slice(5, 7);
        }
        if (numbersOnly.length >= 8) {
          formattedPhoneNumber +=
            numbersOnly.slice(0, 3) +
            ' ' +
            numbersOnly.slice(3, 5) +
            ' ' +
            numbersOnly.slice(5, 7) +
            ' ' +
            numbersOnly.slice(7, 9);
        }

        return formattedPhoneNumber;
      }
    }

    // return formattedNumber
  };
