"use client";

import React, { useState } from "react";

interface CollectionItem {
  id: number;
  title: string;
  description: string;
  date: string;
  items: string[];
}

const Collection = () => {
  const [collections, setCollections] = useState<CollectionItem[]>([
    {
      id: 1,
      title: "Frameworks JavaScript",
      description: "Une collection des frameworks les plus populaires comme React, Vue, et Angular.",
      date: "24 Jan 2025",
      items: ["React", "Vue", "Angular", "Svelte", "Next.js"],
    },
    {
      id: 2,
      title: "Langages Backend",
      description: "Explorez les langages populaires pour le développement backend.",
      date: "22 Jan 2025",
      items: ["Node.js", "Python", "Ruby", "Java", "Go"],
    },
    {
      id: 3,
      title: "Bases de données",
      description: "Les bases de données NoSQL et SQL les plus utilisées.",
      date: "20 Jan 2025",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "SQLite"],
    },
  ]);

  const [search, setSearch] = useState<string>("");
  const [newCollection, setNewCollection] = useState<CollectionItem>({
    id: 0,
    title: "",
    description: "",
    date: "",
    items: [],
  });

  // Ajouter une nouvelle collection
  const handleAddCollection = () => {
    if (newCollection.title && newCollection.description) {
      const newId = collections.length + 1;
      setCollections([
        ...collections,
        {
          ...newCollection,
          id: newId,
          date: new Date().toLocaleDateString(),
        },
      ]);
      setNewCollection({ id: 0, title: "", description: "", date: "", items: [] });
    } else {
      alert("Veuillez remplir tous les champs pour ajouter une collection.");
    }
  };

  // Filtrer les collections
  const filteredCollections = collections.filter((collection) =>
    collection.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Collection</h1>

      {/* Barre de recherche */}
      <div style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Rechercher une collection..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "0.5rem",
            width: "100%",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />
      </div>

      {/* Formulaire d'ajout de collection */}
      <div
        style={{
          marginBottom: "2rem",
          padding: "1rem",
          border: "1px solid #ddd",
          borderRadius: "5px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h2>Ajouter une nouvelle collection</h2>
        <input
          type="text"
          placeholder="Titre de la collection"
          value={newCollection.title}
          onChange={(e) => setNewCollection({ ...newCollection, title: e.target.value })}
          style={{
            padding: "0.5rem",
            width: "100%",
            marginBottom: "1rem",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />
        <textarea
          placeholder="Description de la collection"
          value={newCollection.description}
          onChange={(e) => setNewCollection({ ...newCollection, description: e.target.value })}
          style={{
            padding: "0.5rem",
            width: "100%",
            marginBottom: "1rem",
            border: "1px solid #ddd",
            borderRadius: "5px",
            resize: "none",
            height: "80px",
          }}
        />
        <button
          onClick={handleAddCollection}
          style={{
            padding: "0.7rem 1.5rem",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Ajouter
        </button>
      </div>

      {/* Liste des collections */}
      <div>
        {filteredCollections.map((collection) => (
          <div
            key={collection.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "5px",
              padding: "1rem",
              marginBottom: "1.5rem",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2
              style={{
                margin: "0 0 0.5rem",
                color: "#0070f3",
                cursor: "pointer",
              }}
              onClick={() =>
                alert(
                  `Afficher les détails de la collection : ${collection.title}`
                )
              }
            >
              {collection.title}
            </h2>
            <p style={{ margin: "0 0 1rem", color: "#555" }}>
              {collection.description}
            </p>
            <p style={{ fontSize: "0.9rem", color: "#999" }}>
              Dernière mise à jour : {collection.date}
            </p>
            <div
              style={{
                marginTop: "1rem",
                padding: "1rem",
                backgroundColor: "#f9f9f9",
                borderRadius: "5px",
              }}
            >
              <strong>Éléments :</strong>
              <ul style={{ margin: "0.5rem 0 0", paddingLeft: "1.2rem" }}>
                {collection.items.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      marginBottom: "0.5rem",
                      color: "#333",
                      lineHeight: "1.4",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {filteredCollections.length === 0 && (
          <p style={{ color: "#555", textAlign: "center" }}>
            Aucune collection trouvée.
          </p>
        )}
      </div>
    </div>
  );
};

export default Collection;
