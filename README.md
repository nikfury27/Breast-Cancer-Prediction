
# 📌 Breast Cancer Prediction using Machine Learning  

## 📖 Introduction  
Breast cancer is one of the most common types of cancer affecting women worldwide. Early detection plays a crucial role in improving survival rates. This project utilizes machine learning techniques to predict breast cancer based on diagnostic data.  

⚠ **Disclaimer:** This model achieves 90% accuracy but should not be used as a replacement for professional medical diagnosis. **Always consult a qualified doctor for confirmation and treatment.**  

---

## 📂 Project Structure
```
project/
│-- index.html                # Main HTML file
│-- Breast_Cancer_Prediction.ipynb               # Model Training
│-- package.json              # Node.js dependencies
│-- tsconfig.json             # TypeScript configuration
│-- tailwind.config.js        # Tailwind CSS configuration
│-- vite.config.ts            # Vite configuration
│-- src/                      # Source code directory
│   │-- components/           # UI components
│   │-- models/               # Machine learning model integration
│   │-- utils/                # Utility functions
│-- public/                   # Static assets
│-- .gitignore                # Git ignored files
```

---

## 🚀 How to Run the Project

### Prerequisites
- Node.js (>= 16)
- npm or yarn

### Steps
1. **Clone the repository**
   ```sh
   git clone https://github.com/nikfury27/Breast-Cancer-Prediction.git
   cd Breast-Cancer-Prediction
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Run the development server**
   ```sh
   npm run dev
   ```
   The project should now be accessible at `http://localhost:3000/`.

4. **Build for production**
   ```sh
   npm run build
   ```

---

## 📊 Dataset  
The model is trained on the <a href="https://www.kaggle.com/datasets/uciml/breast-cancer-wisconsin-data"> **Breast Cancer Wisconsin (Diagnostic) Data Set** </a>, which contains features such as:  
✔️ Mean radius, texture, and perimeter  
✔️ Mean smoothness and compactness  
✔️ Mean symmetry and fractal dimension  

The target variable classifies cases as **Malignant (cancerous) or Benign (non-cancerous).**  

---


## 🎯 Live Demo  
🔗 <a href="https://quiet-trifle-2aeec0.netlify.app/">**Breast Cancer Prediction**</a>

---

## 🎯 Results & Accuracy  
- The model achieves **89% accuracy** on the test dataset.  
- Feature importance and confusion matrix can be visualized in `model_training.ipynb`.  

---

## 🛠️ Future Improvements  
- Improve accuracy with feature engineering  
- Add deep learning models (CNNs)  
- Deploy on cloud services like AWS/GCP  

---

## 🤝 Contributing  
Feel free to open an issue or pull request if you’d like to improve the model!  

---
