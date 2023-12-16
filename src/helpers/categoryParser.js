export const categoryToUrl = (categoryName) => {
  return categoryName.toLowerCase().replace(" ", "-");
};

export const urlToCategory = (url) => {
  return url.replace("-", " ");
};
