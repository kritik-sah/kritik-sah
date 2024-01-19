import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import React, { useState } from "react";
import styles from "../styles/HomePage.module.css";

const Resume = () => {
  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer fileUrl="/kritiksah-sde.pdf" />
      </Worker>
      <h1 className="my-4">
        Liked my work. Reach out to me I would love to work with you!
      </h1>
      <a href="/kritiksah-sde.pdf" download target="_blank">
        <button className={styles.button}>Download CV</button>
      </a>
    </div>
  );
};

export default Resume;
