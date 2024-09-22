import React, { useState } from "react";
import styles from "./StackSelector.module.css";

export const StackSelector = () => {
  const [selectedStack, setSelectedStack] = useState([]);

  const handleStackSelect = (stack) => {
    if (selectedStack.includes(stack)) {
      setSelectedStack(selectedStack.filter((item) => item !== stack));
    } else {
      setSelectedStack([...selectedStack, stack]);
    }
  };

  const techStacks = [
    {
      name: "Express",
    },
    {
      name: "Node.js",
    },
    {
      name: "Prisma ORM",
    },
    {
      name: "Nest.js",
    },
    {
      name: "PostgreSQL",
    },
    {
      name: "Otro",
    },
  ];

  return (
    <div className={styles.stacks}>
      <h2>Select Your Tech Stack:</h2>
      <form>
        {techStacks.map((tech, index) => (
          <label key={index} className="stack-card">
            <input
              type="checkbox"
              value={tech.name}
              checked={selectedStack.includes(tech.name)}
              onChange={() => handleStackSelect(tech.name)}
            />
            {tech.name}
          </label>
        ))}
      </form>
    </div>
  );
};
