import React, { useState, useEffect, useRef } from 'react';

interface ImageInputProps {
  file: File | null;
  onChange: (file: File | null) => void;
  onThumbnailClick?: (file: File) => void;
}

const ImageInput: React.FC<ImageInputProps> = ({ file, onChange, onThumbnailClick }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    onChange(selectedFile || null);
  };
  
  const handleRemoveImage = (e: React.MouseEvent) => {
      e.stopPropagation();
      onChange(null);
      if(fileInputRef.current) {
          fileInputRef.current.value = "";
      }
  }

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handlePreviewClick = () => {
    if (file && onThumbnailClick) {
      onThumbnailClick(file);
    }
  };
  
  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles && droppedFiles.length > 0 && droppedFiles[0].type.startsWith('image/')) {
      onChange(droppedFiles[0]);
    }
  };


  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        ref={fileInputRef}
      />
      {!preview ? (
        <div
          onClick={handleBrowseClick}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          className={`w-full h-32 border-2 border-dashed rounded-md flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 cursor-pointer transition-colors ${
            isDraggingOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          <span>{isDraggingOver ? 'Jatuhkan file di sini' : 'Klik atau seret foto ke sini'}</span>
        </div>
      ) : (
        <div className="relative w-full h-32">
          <img
            src={preview}
            alt="Preview"
            onClick={handlePreviewClick}
            className={`w-full h-full object-cover rounded-md ${onThumbnailClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
          />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 leading-none hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageInput;