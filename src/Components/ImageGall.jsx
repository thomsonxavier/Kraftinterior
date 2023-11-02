import {imageGalleryData} from "../Const";

function ImageGall() {
  return (
    <div className="flex justify-between items-center mx-2 py-2 mt-7">
        {imageGalleryData.map((image) => (
          <div key={image.id} className="group w-1/4 relative overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-96 object-cover transform transition-transform group-hover:scale-105 filter grayscale hover:filter-none"
            />
          </div>
        ))}
      </div>
  )
}

export default ImageGall