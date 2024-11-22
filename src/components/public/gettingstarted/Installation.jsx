import React, { useState, useRef } from "react";
import { LuAlertCircle } from "react-icons/lu";

const Installation = () => {
  return (
    
        <div className="m-8 text-black dark:text-white">
          <div className="mb-6">
            <p className="text-5xl font-bold mb-2">Installation</p>
            <p className="text-lg">
             For the most part you need to just copy paste it.
            </p>
            <br />
           
            <p>
              <a href="https://github.com/yourusername/yourrepository" target="_blank"
              rel="noopener noreferrer">
                <LuAlertCircle className="inline-block mr-2 text-yellow-500" size={24} />
                <a> Requirement for each components will look like this.
                </a>
              </a>
            </p>
            
          </div>
        </div>
  );
}

export default Installation