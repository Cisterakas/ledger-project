export default function CategoryTable({ categories, onDeleteCategory }) {
  if (categories.length === 0) {
    return <p>No income categories registered yet. Add one above!</p>;
  }

  return (
    <table className="table table-primary">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <tr key={category.id}>
            <td>{category.name}</td>
            <td>{category.desc}</td>
            <td>
              <button type="button" onClick={() => onDeleteCategory(category.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
