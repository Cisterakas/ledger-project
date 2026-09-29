export default function CategoryForm({
  categoryName,
  categoryDescription,
  onCategoryNameChange,
  onCategoryDescriptionChange,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit} className="mb-3">
      <div>
        <label htmlFor="category-name">Name of Category</label>
        <input
          id="category-name"
          type="text"
          value={categoryName}
          onChange={(event) => onCategoryNameChange(event.target.value)}
          placeholder="e.g., Salary"
        />
      </div>
      <div>
        <label htmlFor="category-description">Description</label>
        <input
          id="category-description"
          type="text"
          value={categoryDescription}
          onChange={(event) => onCategoryDescriptionChange(event.target.value)}
          placeholder="e.g., Monthly payroll"
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        Add
      </button>
    </form>
  );
}
