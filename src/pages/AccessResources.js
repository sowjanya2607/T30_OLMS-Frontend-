import React, { useEffect, useState } from "react";
import { getDigitalResources } from "../services/api";
import "./AccessResources.css";

const AccessResources = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const res = await getDigitalResources();
        setResources(res.data);
      } catch (err) {
        console.error("Error fetching resources:", err);
      }
    };

    fetchResources();
  }, []);

  return (
    <div>
      <h1>Access Digital Resources</h1>
      <ul>
        {resources.map((resource) => (
          <li key={resource._id}>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccessResources;
