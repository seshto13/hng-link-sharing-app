"use client";
import { useState } from "react";
import Image from "next/image";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setUploading(true); // Set uploading state to true

      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result as string);
        setUploading(false); // Set uploading state to false after image is loaded
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center justify-between border-1 h-60 p-4 bg-gray-50">
      <p className="w-1/3">Profile Image</p>
      <div className="flex flex-col justify-center items-center w-1/3">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-4 mb-2"
        />

        {uploading && <p className="text-gray-500">Uploading image...</p>}

        {imageUrl && (
          <div className="mt-4">
            <Image
              src={imageUrl}
              width={600}
              height={600}
              alt=""
              className="w-[50%] h-auto rounded-md shadow-lg"
            />
          </div>
        )}
      </div>
      <p className="w-1/3 text-xs">
        Image must be below 1024x1024px. Use PNG or JPG format.
      </p>
    </div>
  );
};

export default ImageUpload;
