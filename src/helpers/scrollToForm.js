// export const scrollToForm = () => {
//     const form = document.getElementById('form');

//     if (form) {
//       form.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

export const scrollToForm = () => {
  const form = document.getElementById('form');
  setTimeout(() => {
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    }
  }, 300); 
};