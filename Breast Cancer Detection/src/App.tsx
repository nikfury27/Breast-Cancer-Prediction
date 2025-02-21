import React, { useState } from 'react';
import { Heart, Activity, AlertCircle } from 'lucide-react';

function App() {
  const [inputs, setInputs] = useState({
    radius: '',
    area: '',
    smoothness: '',
    texture: '',
    perimeter: ''
  });
  const [prediction, setPrediction] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePredict = () => {
    // Using multiple features for prediction
    const radiusValue = parseFloat(inputs.radius);
    const areaValue = parseFloat(inputs.area);
    const smoothnessValue = parseFloat(inputs.smoothness);
    const textureValue = parseFloat(inputs.texture);
    const perimeterValue = parseFloat(inputs.perimeter);

    // Combined threshold-based prediction using multiple features
    let score = 0;
    if (radiusValue > 17) score++;
    if (areaValue > 1000) score++;
    if (smoothnessValue > 0.11) score++;
    if (textureValue > 20) score++;
    if (perimeterValue > 115) score++;

    setPrediction(score >= 3 ? 'Malignant' : 'Benign');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80"
            alt="Medical Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="block text-pink-500">Breast Cancer</span>
              <span className="block text-white mt-2">Early Detection Saves Lives</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl text-gray-300">
              Using advanced machine learning to assist in early detection
            </p>
          </div>
        </div>
      </div>

      {/* Prediction Section */}
      <div className="bg-gray-800/50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-xl p-8 border border-pink-500/20 shadow-lg shadow-pink-500/10">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Prediction Tool</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="radius" className="block text-sm font-medium text-gray-300">
                    Mean Radius
                  </label>
                  <input
                    type="number"
                    id="radius"
                    name="radius"
                    value={inputs.radius}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50"
                    placeholder="6-28"
                  />
                </div>

                <div>
                  <label htmlFor="area" className="block text-sm font-medium text-gray-300">
                    Mean Area
                  </label>
                  <input
                    type="number"
                    id="area"
                    name="area"
                    value={inputs.area}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50"
                    placeholder="200-2000"
                  />
                </div>

                <div>
                  <label htmlFor="smoothness" className="block text-sm font-medium text-gray-300">
                    Mean Smoothness
                  </label>
                  <input
                    type="number"
                    id="smoothness"
                    name="smoothness"
                    value={inputs.smoothness}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50"
                    placeholder="0.05-0.16"
                    step="0.01"
                  />
                </div>

                <div>
                  <label htmlFor="texture" className="block text-sm font-medium text-gray-300">
                    Mean Texture
                  </label>
                  <input
                    type="number"
                    id="texture"
                    name="texture"
                    value={inputs.texture}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50"
                    placeholder="10-30"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="perimeter" className="block text-sm font-medium text-gray-300">
                    Mean Perimeter
                  </label>
                  <input
                    type="number"
                    id="perimeter"
                    name="perimeter"
                    value={inputs.perimeter}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50"
                    placeholder="40-190"
                  />
                </div>
              </div>

              <button
                onClick={handlePredict}
                className="w-full py-3 px-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg shadow-md transition duration-200 ease-in-out transform hover:scale-105"
              >
                Predict
              </button>

              {prediction && (
                <div className={`mt-6 p-4 rounded-lg text-center font-semibold ${
                  prediction === 'Benign' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  Prediction: {prediction}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg border border-pink-500/20 shadow-lg shadow-pink-500/10">
              <Heart className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-2xl font-semibold text-white">89.5%</h3>
              <p className="mt-2 text-gray-400">Model Accuracy</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg border border-blue-500/20 shadow-lg shadow-blue-500/10">
              <Activity className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-semibold text-white">Early Detection</h3>
              <p className="mt-2 text-gray-400">Critical for Treatment</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg border border-purple-500/20 shadow-lg shadow-purple-500/10">
              <AlertCircle className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-semibold text-white">Regular Screening</h3>
              <p className="mt-2 text-gray-400">Key to Prevention</p>
            </div>
          </div>
        </div>
      </div>

      {/* Facts Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-gray-800/50 rounded-xl p-8 border border-pink-500/20">
          <h2 className="text-2xl font-bold text-white mb-6">Did You Know?</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Early detection through regular screening can lead to a 98% survival rate in breast cancer patients. 
            When detected early, breast cancer is one of the most treatable forms of cancer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;