import React from "react";
import styles from "./TestComponent.module.scss";

const TestComponent: React.FC = () => {
  return (
    <div className = {styles.TestComponent}>
      <h2>TestComponent</h2>
    </div>
  );
};

export default TestComponent;
