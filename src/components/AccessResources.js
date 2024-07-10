// src/components/AccessResources.js

import React, { useState, useEffect } from "react";
import {
  getDigitalResources,
  createDigitalResource,
  updateDigitalResource,
  deleteDigitalResource,
} from "../services/api";
import "./AccessResources.css";

const AccessResources = () => {
  const [resources, setResources] = useState([]);
  const [newResource, setNewResource] = useState({
    title: "",
    description: "",
    url: "",
  });

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const res = await getDigitalResources();
      setResources(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e) => {
    setNewResource({ ...newResource, [e.target.name]: e.target.value });
  };

  const handleCreateResource = async () => {
    try {
      await createDigitalResource(newResource);
      fetchResources();
      setNewResource({ title: "", description: "", url: "" });
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateResource = async (id) => {
    try {
      await updateDigitalResource(id, newResource);
      fetchResources();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteResource = async (id) => {
    try {
      await deleteDigitalResource(id);
      fetchResources();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="access-resources">
      <h1>Access Digital Resources</h1>
      <div className="resource-form">
        <input
          type="text"
          name="title"
          value={newResource.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="description"
          value={newResource.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <input
          type="text"
          name="url"
          value={newResource.url}
          onChange={handleInputChange}
          placeholder="URL"
        />
        <button onClick={handleCreateResource}>Add Resource</button>
      </div>
      <div className="resource-list">
        {resources.map((resource) => (
          <div key={resource._id} className="resource-item">
            <h2>{resource.title}</h2>
            <p>{resource.description}</p>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              Access Resource
            </a>
            <button onClick={() => handleUpdateResource(resource._id)}>
              Update
            </button>
            <button onClick={() => handleDeleteResource(resource._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccessResources;
