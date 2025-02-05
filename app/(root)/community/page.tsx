"use client";

import React, { useState } from "react";

const Community = () => {
  const [questions] = useState([
    {
      id: 1,
      title: "Comment configurer MongoDB avec Next.js ?",
      author: "Patrick",
      date: "24 Jan 2025",
      tags: ["MongoDB", "Next.js", "Configuration"],
      replies: [
        "Pour configurer MongoDB, utilisez la bibliothèque Mongoose avec votre application Next.js. Assurez-vous de définir la variable d'environnement MONGODB_URI.",
        "Vous pouvez également utiliser les routes API pour centraliser vos appels à la base de données.",
      ],
    },
    {
      id: 2,
      title: "Quelle est la meilleure pratique pour utiliser les API routes dans Next.js ?",
      author: "Amina",
      date: "23 Jan 2025",
      tags: ["Next.js", "API Routes"],
      replies: [
        "Utilisez les dossiers `/pages/api` ou `/app/api` pour organiser vos routes API.",
        "Pensez à ajouter des middlewares pour la gestion des erreurs et la validation des entrées.",
      ],
    },
    {
      id: 3,
      title: "Comment sécuriser une application Next.js avec OAuth2 ?",
      author: "Samuel",
      date: "22 Jan 2025",
      tags: ["Next.js", "OAuth2", "Sécurité"],
      replies: [
        "Utilisez une bibliothèque comme `next-auth` pour une intégration rapide d'OAuth2.",
        "Configurez vos fournisseurs comme Google, GitHub, ou autres via leur console de développeurs.",
      ],
    },
    {
      id: 4,
      title: "Qu'est-ce qu'une ISR dans Next.js et comment l'utiliser ?",
      author: "Fatou",
      date: "21 Jan 2025",
      tags: ["Next.js", "ISR"],
      replies: [
        "ISR (Incremental Static Regeneration) permet de générer des pages statiques dynamiques.",
        "Ajoutez un paramètre `revalidate` dans `getStaticProps` pour régénérer la page après un certain temps.",
      ],
    },
    {
      id: 5,
      title: "Quels sont les avantages de TypeScript avec Next.js ?",
      author: "Omar",
      date: "20 Jan 2025",
      tags: ["Next.js", "TypeScript"],
      replies: [
        "TypeScript offre un typage statique, ce qui réduit les erreurs à l'exécution.",
        "Il améliore la productivité grâce à l'auto-complétion et à une meilleure documentation.",
      ],
    },
    // Ajoutez d'autres questions ici si nécessaire
  ]);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Community</h1>

      <div>
        {questions.map((question) => (
          <div
            key={question.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "5px",
              padding: "1rem",
              marginBottom: "1rem",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2
              style={{
                margin: "0 0 0.5rem",
                color: "#0070f3",
                cursor: "pointer",
              }}
              onClick={() => alert(`Afficher les détails de : ${question.title}`)}
            >
              {question.title}
            </h2>
            <p style={{ margin: "0 0 0.5rem", fontSize: "0.9rem", color: "#555" }}>
              Posté par <strong>{question.author}</strong> le {question.date}
            </p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {question.tags.map((tag, index) => (
                <span
                  key={index}
                  style={{
                    backgroundColor: "#eef",
                    color: "#0070f3",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "3px",
                    fontSize: "0.8rem",
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div
              style={{
                marginTop: "1rem",
                padding: "1rem",
                backgroundColor: "#f9f9f9",
                borderRadius: "5px",
              }}
            >
              <strong>Réponses :</strong>
              <ul style={{ margin: "0.5rem 0 0", paddingLeft: "1.2rem" }}>
                {question.replies.map((reply, index) => (
                  <li
                    key={index}
                    style={{
                      marginBottom: "0.5rem",
                      color: "#333",
                      lineHeight: "1.4",
                    }}
                  >
                    {reply}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
