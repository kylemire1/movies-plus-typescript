import slugify from 'slugify';

export const getSlugFromTitle = (title: string) => {
  if (!title) {
    return '';
  }
  return slugify(title.replace('.', ''), {
    lower: true,
  });
};
