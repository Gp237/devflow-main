"use client";

import React, { useState, useEffect } from "react";

// Simuler des données utilisateur (à remplacer par une API réelle)
interface User {
  username: string;
  email: string;
  bio: string;
  image: string;
}

const mockUserData: User = {
  username: "Patrick",
  email: "contact@AfridevFlow.com",
  bio: "Web developer passionate about React and Node.js.",
  image: "/images/profile.jpg", // Lien de l'image de profil
};

const Profile: React.FC = () => {
  const [user, setUser] = useState<User>(mockUserData); // Utilisation du type User
  const [isEditing, setIsEditing] = useState<boolean>(false); // Mode édition
  const [editedData, setEditedData] = useState<User>(mockUserData); // Données modifiées

  // Fonction pour gérer l'édition des informations de profil
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };

  const handleSave = () => {
    setUser(editedData); // Sauvegarder les modifications
    setIsEditing(false);  // Quitter le mode édition
  };

  useEffect(() => {
    // Remplacer par un appel API réel pour récupérer les données utilisateur
    console.log("Component mounted, fetch user data here!");
  }, []); // Le tableau vide [] indique que useEffect s'exécute une seule fois, au montage du composant

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold text-gray-800">Profile</h1>
      
      {/* Affichage de l'image de profil */}
      <div className="mt-4 flex justify-center">
        <img
          src={user.image}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover"
        />
      </div>

      {/* Affichage des informations de l'utilisateur */}
      <div className="mt-6 space-y-4">
        <div>
          <span className="font-medium text-gray-600">Username:</span>
          {isEditing ? (
            <input
              type="text"
              name="username"
              value={editedData.username}
              onChange={handleChange}
              className="mt-2 p-2 border border-gray-300 rounded-md w-full"
            />
          ) : (
            <p className="text-lg">{user.username}</p>
          )}
        </div>

        <div>
          <span className="font-medium text-gray-600">Email:</span>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={editedData.email}
              onChange={handleChange}
              className="mt-2 p-2 border border-gray-300 rounded-md w-full"
            />
          ) : (
            <p className="text-lg">{user.email}</p>
          )}
        </div>

        <div>
          <span className="font-medium text-gray-600">Bio:</span>
          {isEditing ? (
            <textarea
              name="bio"
              value={editedData.bio}
              onChange={handleChange}
              className="mt-2 p-2 border border-gray-300 rounded-md w-full"
            />
          ) : (
            <p className="text-lg">{user.bio}</p>
          )}
        </div>
      </div>

      {/* Boutons d'édition ou de sauvegarde */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={handleEditToggle}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>

        {isEditing && (
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
