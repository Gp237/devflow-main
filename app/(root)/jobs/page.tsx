"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";

interface Job {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  payment: string;
  location: string;
  postedDate: string;
}

const FindJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([
    // (Liste des jobs - inchangée)
  ]);

  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("All");
  const [newJob, setNewJob] = useState<Partial<Job>>({});

  const handleAddJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      newJob.title &&
      newJob.description &&
      newJob.category &&
      newJob.payment &&
      newJob.location &&
      newJob.postedDate
    ) {
      setJobs([...jobs, { ...newJob, id: jobs.length + 1 } as Job]);
      setNewJob({});
      alert("Job ajouté avec succès ! Envoyez votre mail à globalassistcameroun@gmail.com");
    } else {
      alert("Veuillez remplir tous les champs avant d'ajouter un job.");
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.description.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || job.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <Head>
        <title>Trouvez des Jobs | Afridevflow</title>
        <meta
          name="description"
          content="Explorez les meilleures opportunités de freelance, remote, et full-time jobs sur Afridevflow."
        />
      </Head>

      <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
        <h1 style={{ textAlign: "center", marginBottom: "2rem", color: "orange" }}>Find Jobs</h1>

        <div style={{ marginBottom: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <input
            type="text"
            placeholder="Rechercher un job..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flex: "1",
              padding: "0.5rem",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{
              padding: "0.5rem",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            <option value="All">Toutes les catégories</option>
            <option value="Freelance">Freelance</option>
            <option value="Remote">Remote</option>
            <option value="Full-time">Full-time</option>
          </select>
        </div>

        <div>
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "5px",
                padding: "1rem",
                marginBottom: "1.5rem",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h2 style={{ marginBottom: "0.5rem" }}>{job.title}</h2>
              <p>{job.description}</p>
              <p>
                <strong>Catégorie :</strong> {job.category}
              </p>
              <p>
                <strong>Tags :</strong> {job.tags.join(", ")}
              </p>
              <p>
                <strong>Payment :</strong> {job.payment}
              </p>
              <p>
                <strong>Location :</strong> {job.location}
              </p>
              <p>
                <strong>Date de publication :</strong> {job.postedDate}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FindJobs;
