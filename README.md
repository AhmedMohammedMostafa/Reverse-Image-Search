<!DOCTYPE html>
<html>

<body>
  <h1>📸 Image Search App</h1>
  <p>Welcome to the Image Search App! This project allows you to upload images, search for similar images, and view a collection of images stored in the database.</p>

  <h2>🚀 Quick Start</h2>
  <ol>
    <li>Clone the repository.</li>
    <li>Install the required dependencies using <code>npm install</code>.</li>
    <li>Start the development server with <code>npm start</code>.</li>
  </ol>

  <h2>📁 Project Structure</h2>
  <pre>
- 📁 client
  - 📁 components
    - 📄 Images.jsx
    - 📄 UploadTab.jsx
    - 📄 SearchTab.jsx
  - 📁 pages
    - 📁 api
        - 📄 hello.js
    - 📄 _app.js
    - 📄 _document.js
    - 📄 index.js
- 📁 api
  - 📁 routes
    - 📄 upload.js
    - 📄 search.js
    - 📄 stored-images.js
  - 📄 index.js
- 📄 package.json
  </pre>

  <h2>📦 Dependencies</h2>
  <ul>
    <li>React</li>
    <li>Ant Design</li>
    <li>Axios</li>
    <li>Express</li>
    <li>Weaviate</li>
  </ul>

  <h2>📸 Images</h2>
  <p>View a collection of images stored in the database by visiting the "Image Wall" tab.</p>

  <h2>📤 Upload</h2>
  <p>Upload an image to store it in the database by visiting the "Upload Image" tab. You can also remove the uploaded image.</p>

  <h2>🔍 Search</h2>
  <p>Upload an image to search for similar images in the database by visiting the "Search Image" tab. The app will display a collection of similar images.</p>

  <h2>🌐 Backend</h2>
  <p>The backend API server is built with Express and Weaviate. It handles image uploads and searches for similar images.</p>

  <h2>🤖 Contributing</h2>
  <p>Contributions are welcome! Feel free to open an issue or submit a pull request.</p>

  <h2>📝 License</h2>
  <p>This project is licensed under the MIT License. See the <a href="./LICENSE">LICENSE</a> file for details.</p>
</body>

</html>
