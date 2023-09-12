import React, { useState } from 'react';
import SellerNavbar from './sellernavbar';

const ProductUpload = () => {
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    sellingPrice: '',
    productImage: null,
  });

  const [uploadedProducts, setUploadedProducts] = useState([]); // New state for storing uploaded products

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // Handle file input separately
    if (type === 'file') {
      const imageFile = e.target.files[0];
      setFormData({ ...formData, productImage: imageFile });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission (e.g., send data to a server)
    // You can use FormData to send the image file along with other data
    const formDataToSend = new FormData();
    formDataToSend.append('productName', formData.productName);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('sellingPrice', formData.sellingPrice);
    formDataToSend.append('productImage', formData.productImage);

    console.log('Form data to send:', formDataToSend);


    setUploadedProducts([...uploadedProducts, formData]);

    // Clear the form fields
    setFormData({
      productName: '',
      description: '',
      sellingPrice: '',
      productImage: null,
    });
  };

  return (
    <div>
      <SellerNavbar />

      <div className=" flex flex-row container">
        

        <form onSubmit={handleSubmit} className=" bg-slate-300 w-4/6 p-4">
            <h1 className="text-4xl font-extrabold drop-shadow-sm">Product Upload</h1>
          <div className="mb-4">
            <label htmlFor="productName" className="block text-lg font-medium text-gray-700">
              Product Name:
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-lg font-medium text-gray-700">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="sellingPrice" className="block text-lg font-medium text-gray-700">
              Selling Price (USD):
            </label>
            <input
              type="number"
              id="sellingPrice"
              name="sellingPrice"
              value={formData.sellingPrice}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="productImage" className="block text-lg font-medium text-gray-700">
              Product Image:
            </label>
            <input
              type="file"
              id="productImage"
              name="productImage"
              onChange={handleChange}
              accept="image/*"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
            >
              Upload Product
            </button>
          </div>
        </form>
        <div className='p-4 bg-slate-200'>
          <h2 className="text-4xl font-bold drop-shadow-sm mb-8 mt-3 text-center p-3">Uploaded Products:</h2>
          <ul>
            {uploadedProducts.map((product, index) => (
              <li key={index} className='mb-4'>
                <strong>Product Name:</strong> {product.productName}
                
                <strong className='ml-3'>Selling Price:</strong> Rs{product.sellingPrice}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductUpload;

