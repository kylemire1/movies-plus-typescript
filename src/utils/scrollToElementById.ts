export const scrollToElementById = (
  id: string,
  behavior: 'auto' | 'smooth' = 'smooth',
) => {
  const scrollElement = document.getElementById(id);
  scrollElement?.scrollIntoView({ behavior });
};
