import { categories } from './constants';

import './categories.styles.scss';

function App() {
  return (
    <div className="categories-container">
      {categories.map(({ id, title, imageUrl }) => (
        <div key={id} className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
