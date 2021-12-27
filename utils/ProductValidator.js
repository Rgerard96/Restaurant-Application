export const UpdateProductValidator = (
  name,
  image,
  brand,
  category,
  description,
  price,
  countInStock
) => {
  const errors = {};
  if (name.trim() === '') {
    errors.name = 'Name must not be empty';
  }
  if (image.trim() === '') {
    errors.image = 'Image url must not be empty';
  }
  if (brand.trim() === '') {
    errors.brand = 'Brand must not be empty';
  }
  if (category.trim() === '') {
    errors.category = 'Category must not be empty';
  }
  if (description.trim() === '') {
    errors.description = 'Description must not be empty';
  }
  if (price === '' || price === 0) {
    errors.price = 'Price must not be empty or null';
  }
  if (countInStock === '') {
    errors.countInStock = 'Count in stock must not be empty';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
