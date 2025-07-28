import React, { useState, useRef } from 'react';
import { Upload, X, ZoomIn } from 'lucide-react';

interface Photo {
  id: number;
  url: string;
  title: string;
}

const GallerySection: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([
    {
      id: 1,
      url: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20photography%2C%20mountain%20sunset%2C%20golden%20hour&image_size=square_hd',
      title: '山景日落'
    },
    {
      id: 2,
      url: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=urban%20street%20photography%2C%20city%20lights%2C%20night%20scene&image_size=square_hd',
      title: '城市夜景'
    },
    {
      id: 3,
      url: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=nature%20photography%2C%20forest%20path%2C%20green%20trees&image_size=square_hd',
      title: '森林小径'
    },
    {
      id: 4,
      url: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=ocean%20waves%2C%20beach%20photography%2C%20blue%20water&image_size=square_hd',
      title: '海浪拍岸'
    }
  ]);
  
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const newPhoto: Photo = {
            id: Date.now() + Math.random(),
            url: e.target?.result as string,
            title: file.name.split('.')[0]
          };
          setPhotos(prev => [...prev, newPhoto]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removePhoto = (photoId: number) => {
    setPhotos(prev => prev.filter(photo => photo.id !== photoId));
  };

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <section id="gallery" className="min-h-screen bg-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            照片墙
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            记录生活中的美好瞬间，分享我的摄影作品和旅行回忆
          </p>
          <div className="w-24 h-1 bg-orange-400 mx-auto mt-8"></div>
        </div>

        {/* Upload Button */}
        <div className="text-center mb-12">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-3 px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors duration-200 font-medium"
          >
            <Upload size={20} />
            上传照片
          </button>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative group bg-slate-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-64 object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex gap-2">
                  <button
                    onClick={() => openModal(photo)}
                    className="p-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors duration-200"
                  >
                    <ZoomIn size={20} />
                  </button>
                  <button
                    onClick={() => removePhoto(photo.id)}
                    className="p-2 bg-red-500/80 text-white rounded-full hover:bg-red-500 transition-colors duration-200"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-medium">{photo.title}</h3>
              </div>
            </div>
          ))}
          
          {/* Upload Placeholder */}
          <div
            onClick={() => fileInputRef.current?.click()}
            className="h-64 border-2 border-dashed border-gray-500 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-orange-400 hover:bg-slate-700/50 transition-all duration-300"
          >
            <Upload size={48} className="text-gray-500 mb-4" />
            <p className="text-gray-400 text-center">
              点击上传更多照片
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200 z-10"
            >
              <X size={24} />
            </button>
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
              <h3 className="text-xl font-bold">{selectedPhoto.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;