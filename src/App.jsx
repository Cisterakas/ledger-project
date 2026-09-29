import { useState } from "react";
import CategoryForm from "./components/CategoryForm";
import CategoryTable from "./components/CategoryTable";

export default function App() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Freelance Web Dev", desc: "Client project milestone" },
  ]);
  const [catName, setCatName] = useState("");
  const [catDesc, setCatDesc] = useState("");

  function handleAddCategory(event) {
    event.preventDefault();
    if (!catName.trim() || !catDesc.trim()) return;

    const newEntry = {
      id: Date.now(),
      name: catName.trim(),
      desc: catDesc.trim(),
    };

    setCategories((currentCategories) => [...currentCategories, newEntry]);
    setCatName("");
    setCatDesc("");
  }

  function handleDeleteCategory(idToRemove) {
    setCategories((currentCategories) =>
      currentCategories.filter((item) => item.id !== idToRemove),
    );
  }

  return (
    <main className="container py-4">
      <h1>Income Category Manager (React + Vite)</h1>
      <p>
        Total Active Categories: <strong className="counter-badge">{categories.length}</strong>
      </p>

      <CategoryForm
        categoryName={catName}
        categoryDescription={catDesc}
        onCategoryNameChange={setCatName}
        onCategoryDescriptionChange={setCatDesc}
        onSubmit={handleAddCategory}
      />

      <hr />
      <h2>List of Income Categories</h2>
      <CategoryTable
        categories={categories}
        onDeleteCategory={handleDeleteCategory}
      />
    </main>
  );
}
