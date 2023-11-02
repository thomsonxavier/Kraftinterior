import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../Const";
import ImageSlider from "./ImageSlider";

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  const [isImageSliderOpen, setImageSliderOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImageSlider = (index) => {
    setImageSliderOpen(true);
    setCurrentImageIndex(index);
  };

  const closeImageSlider = () => {
    setImageSliderOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
      <p>{project.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {project.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Project Image ${index + 1}`}
            onClick={() => openImageSlider(index)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>

      {isImageSliderOpen && (
        <ImageSlider
          images={project.images}
          currentImageIndex={currentImageIndex}
          closeImageSlider={closeImageSlider}
        />
      )}
    </div>
  );
}

export default ProjectDetail;
