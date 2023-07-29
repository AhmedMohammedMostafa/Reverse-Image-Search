import React, { useState } from 'react';
import { Button, Upload, message, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const UploadTab = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const customUploadAction = async ({ file, onSuccess, onError }) => {
    try {
      const base64Data = await getBase64(file); // Change the base of the file to base64
      const response = await axios.post('http://localhost:3001/api/upload', {
        image: base64Data,
      });
      // You can handle the successful response here if needed
      console.log('Upload response:', response);
      onSuccess(); // Notify Ant Design that the upload is successful
    } catch (error) {
      console.error('Upload error:', error);
      onError(); // Notify Ant Design that the upload failed
      message.error('Failed to upload the image.');
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined style={{ color: 'white' }} /> {/* Set the icon color to white */}
      <div
        style={{
          marginTop: 8,
          color: 'white', // Set the text color to white
        }}
      >
        Upload Image
      </div> {/* Change the text to "Upload Image" */}
    </div>
  );

  return (
    <>
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: '50px',
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
          }}
        >
          Upload Image
        </h2>
        <p
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: '20px',
            fontFamily: 'sans-serif',
            fontWeight: 'medium',
          }}
        >
          Upload an image to store it in the database.
        </p>
      </div>

      <div
        style={{
          marginTop: 24,
          display: 'flex',
          justifyContent: 'center', // Center the element horizontally
          alignItems: 'center', // Center the element vertically
        }}
      >
        <center>
          <Upload
            customRequest={customUploadAction} // Use the custom upload action
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
          <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
            <img alt="Preview Image" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </center>
      </div>
    </>
  );
};

export default UploadTab;
