export const scrollToForm = () => {
    const form = document.getElementById('form');

    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };