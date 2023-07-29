import React, { useState } from 'react';
import { Button, Upload, message, Image } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

const SearchTab = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [resultImages, setResultImages] = useState([]);
  const [error, setError] = useState(null);

  const handleImageUpload = (file) => {
    setSelectedFile(file);
    setError(null);
  };

  const handleImageRemove = () => {
    setSelectedFile(null);
    setResultImages([]);
    setError(null);
  };

  const handleFormSubmit = () => {
    if (!selectedFile) {
      setError('Please select an image to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('b64', selectedFile);
    formData.append('name', selectedFile.name);

    // Make the axios POST request here
    axios
      .post('http://localhost:3001/api/search', formData)
      .then((response) => {
        // Handle the response here
        setResultImages(response.data.b64);
      })
      .catch((error) => {
        // Handle errors here
        setError('Failed to search for similar images.');
        console.error(error);
      });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white', // Set text color to white
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '50px', fontFamily: 'sans-serif', fontWeight: 'bold' }}>
        Search Image
      </h2>
      <p style={{ fontSize: '20px', fontFamily: 'sans-serif', fontWeight: 'medium' }}>
        Upload an image to search for similar images.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '24px' }}>
        <Upload
          accept="image/*"
          showUploadList={false}
          beforeUpload={handleImageUpload}
          style={{
            border: '1px solid #1890ff',
            borderRadius: '4px',
            overflow: 'hidden',
            marginTop: '10px',
          }}
        >
          {selectedFile ? (
            <div>
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Selected"
                style={{ width: '200px', height: '200px', marginBottom: '8px' }}
              />
              <Button onClick={handleImageRemove} style={{ color: '#1890ff', borderColor: '#1890ff', margin: '10px' }}>
                Remove Image
              </Button>
            </div>
          ) : (
            <Button
              icon={<UploadOutlined />}
              style={{ color: '#1890ff', borderColor: '#1890ff', margin: '10px' }}
            >
              Upload Image
            </Button>
          )}
        </Upload>

        <Button type="primary" onClick={handleFormSubmit} style={{ margin: '10px' }}>
          Search
        </Button>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        {resultImages.length > 0 && (
          <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image.PreviewGroup>
              {resultImages.map((image, index) => (
                <Image key={index} width={200} src={image} style={{ padding: '10px' }} />
              ))}
            </Image.PreviewGroup>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchTab;
