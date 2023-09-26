// export const scrollToForm = () => {
//     const form = document.getElementById('form');

//     if (form) {
//       form.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

export const scrollToForm = () => {
  setTimeout(() => {
    const form = document.getElementById('form');

    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    }
  }, 300); 
};