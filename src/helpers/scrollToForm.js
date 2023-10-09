export const scrollToForm = () => {
  const form = document.getElementById('form');
  setTimeout(() => {
    if (form) {
        form.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    }
  }, 500); 
};