import * as React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import sha256 from 'js-sha256';
import sha256 from 'crypto-js/sha256';


export default function Algosha256() {

  const [file, setFile] = useState();
  const [fileHash, setFileHash] = useState("");
  const [string, setString] = useState("");


  const [stringHash, setStringHash] = useState("");


  const handleFileChange = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onload = function () {
      const fileContents = reader.result;
      const fileHash = sha256(fileContents).toString();
      setFileHash(fileHash);
    };
    reader.readAsText(file);

    setFile(file);
  };


  // decrypt the string 


  const handleStringChange = (event) => {
    const inputString = event.target.value;
    setString(inputString);
    setStringHash(sha256(inputString).toString());
  };

 
  

  return (
    <div className="bg-[rgb(22,28,36)]  w-full justify-center min-h-screen items-center mx-auto  pt-16 px-2 ">
       <h1 className=" text-center items-center text-4xl mx-auto font-medium text-yellow-500 ">
         Hello Mr  : <a className='font-bold  text-green-500'> Zellou</a>
        </h1>
      <div className="flex flex-col items-center py-4 mt-4 border border-yellow-500 bg-[rgb(33,43,54)]  mx-auto rounded-lg  sm:w-3/4 ">
        <label className=" text-center  font-medium text-yellow-500 ">
          Please choose a  : <a className='font-bold text-yellow-500'> File</a>
        </label>
        <input onChange={handleFileChange} className='bg-gray-500' type="file" />

        
        {fileHash && <label className=" text-center font-medium text-yellow-500">
          File Hash:  <a className='font-bold'>{fileHash} </a>
        </label>}

        <label className="text-center font-medium text-yellow-500 mt-4">
          Enter a string to hash with SHA256 : 
        </label>
        <input onChange={handleStringChange} placeholder="Enter a string" className="bg-gray-500 mt-2 px-2" type="text" />

       
        {stringHash && <label className="text-center font-medium text-yellow-500 mt-4">
          String hash: <a className="font-bold">{stringHash}</a>
        </label>}




      </div>
    </div>
  );
};
