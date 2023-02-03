// Constants
import { categories } from 'constants/categories';

// Components
import CategoryItem from 'components/category-item/category-item';

const Category = () => {
  return (
    <div className="categories-container">
      {categories.map(({ id, title, imageUrl }) => (
        <CategoryItem id={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Category;
