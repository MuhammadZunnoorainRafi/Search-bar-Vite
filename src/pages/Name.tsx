import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Name() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize state for filter options
  const [color, setColor] = useState(searchParams?.get('color' || '') || '');
  const [category, setCategory] = useState(
    searchParams.get('category' || '') || ''
  );
  const [size, setSize] = useState(searchParams.get('size' || '') || '');

  // Function to update query parameters when filters change
  useEffect(() => {
    setSearchParams({
      color: color,
      category: category,
      size: size,
    });
  }, [color, category, size]);

  return (
    <div>
      <h1>Product Filter</h1>
      <label>
        Color:
        <input
          type="checkbox"
          value="color"
          onChange={(e) => setColor(e.target.value)}
        />
      </label>
      <br />
      <label>
        Category:
        <input
          type="checkbox"
          value="category"
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <br />
      <label>
        Size:
        <input
          type="checkbox"
          value="size"
          onChange={(e) => setSize(e.target.value)}
        />
      </label>
    </div>
  );
}

export default Name;
