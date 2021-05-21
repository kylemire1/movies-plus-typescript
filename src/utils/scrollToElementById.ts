export const scrollToElementById = (id: string) => {
  const scrollElement = document.getElementById(id);
  scrollElement?.scrollIntoView({ behavior: 'smooth' });
};
