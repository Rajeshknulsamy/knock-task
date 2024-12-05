import React from 'react';
import img1 from '../assets/image.png';
import img2 from '../assets/image copy.png';
import marriage from '../assets/marriage.png';

const DigitalProducts = () => {
  const products = [
    {
      id: 1,
      image: img1, 
      price: '$293.26',
      title: 'Urban Classics vintage flared jeans in midstone washed',
    },
    {
      id: 2,
      image: img2, 
      price: '$293.26',
      title: 'Urban Classics vintage flared jeans in midstone washed',
    },
  ];

  return (
    <>
    <div className="bg-white min-h-screen p-4 ">
       <div className="  space-x-2 pb-6   flex justify-center">
        <button className="text-gray-700">
          <span>&larr;</span>
        </button>
        <h1 className="text-xl font-semibold">Digital Products</h1>
        <hr />
      </div>
        
      <div className='flex  items-center justify-center h-auto'>
        
      <div className="space-y-6">
        {products.map((product) => (
          <div key={product.id} className="relative bg-gray-100 rounded-lg overflow-hidden">
           
            <img src={product.image} alt={product.title} className="w-96 h-96 object-fit" />

          
            <span className="absolute bottom-20 right-8 bg-white text-gray-800 font-semibold text-sm px-2 py-1 rounded">
              {product.price}
            </span>

            
            <div className="p-4">
              <h2 className="text-sm font-medium text-gray-800">{product.title}</h2>
            </div>
          </div>
        ))}
      </div>
      </div>
      
    </div>
    <div className=" bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center">
     <div className='w-[400px]'>
         {/* Image */}
      <img
        src={marriage}
        alt="Wedding"
        className="w-full  object-cover"
      />
      
      <div className="p-4">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Amos Burton"
            className="w-10 h-10 rounded-full"
          />
          <h2 className="ml-3 text-lg font-semibold text-gray-800">Amos Burton</h2>
        </div>
        
        <div className="mt-4 p-5 border-2">
          <h3 className="text-gray-700 text-xl font-medium pb-4">
            Wedding photographer in London
          </h3>
          <span className='bg-slate-700 w-auto px-5 py-1 rounded-lg text-white'>$1495.00</span>
          <p className="text-gray-600 text-md my-1 mb-3">
            I have worked with several lovely couples getting married in the
            past, and I always put my heart...
          </p>
          <hr />
          <div className="my-4 flex justify-between text-sm text-gray-600">
            
              <strong>Aerial drone footage:</strong> <span className="text-black font-bold">YES</span>
            
              </div>
              <hr />
              <div className='flex justify-between mt-4'>
              <p>Express turnaround:</p> 14 days
              </div>
            
          
        </div>
      </div>
     
      <div className="border-t p-4">
        <h4 className="text-slate-800 font-semibold">Benefits</h4>
        <ul className="list-none border py-3 px-5 list-inside text-gray-600 text-md mt-2 space-y-2">
          <li>Actionable tips: I give you actionable tips & teach you how to do SEO.</li>
          <li>
            Learn WHY: Most SEO resources teach you how to do things. I cover both HOW and WHY.
          </li>
          <li>
            From Beginner to Advanced SEO: I cover SEO activities both for beginners and advanced SEO.
          </li>
        </ul>
      </div>
      
      <div className="p-4 bg-white">
        
        <button className="bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-600 transition">
          Buy for $199
        </button>
      </div>
     </div>
    </div>
    </>
  );
};

export default DigitalProducts;
