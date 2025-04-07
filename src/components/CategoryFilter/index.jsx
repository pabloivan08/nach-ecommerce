import './CategoryFilter.css'
const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-filter-container">
      <button 
        onClick={() => onSelectCategory('')} 
        className={selectedCategory === '' ? 'selected' : ''}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={selectedCategory === category ? 'selected' : ''}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export { CategoryFilter }