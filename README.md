# 🌾 CropAI - AI-Powered Crop Recommendation System

<div align="center">

![CropAI Logo](https://img.shields.io/badge/CropAI-Agriculture--AI-blue?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat-square&logo=node.js)
![React](https://img.shields.io/badge/React-19+-blue?style=flat-square&logo=react)
![Express](https://img.shields.io/badge/Express-5.1+-black?style=flat-square&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Ready-green?style=flat-square&logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)

**Revolutionizing Agriculture with AI-Powered Crop Recommendations**

[🚀 Live Demo](#) | [📖 Documentation](#api-documentation) | [🔧 Installation](#installation)

</div>

---

## 🌟 Overview

CropAI is an intelligent agricultural platform that leverages artificial intelligence to provide personalized crop recommendations for farmers. By analyzing comprehensive farming data including soil health, climate conditions, historical yields, and government MSP (Minimum Support Price) data, CropAI helps farmers make data-driven decisions to maximize profitability and sustainability.

### ✨ Key Features

- 🤖 **AI-Powered Recommendations**: Uses advanced AI models (OpenAI GPT-4 or Together AI Mistral-7B)
- 📊 **MSP Integration**: Real-time integration with Government of India MSP data (2015-2026)
- 🌱 **Comprehensive Analysis**: Considers soil health, climate, land details, and farmer profiles
- 💰 **Profit Optimization**: Calculates expected profits, yields, and resource requirements
- 🔄 **Alternative Options**: Provides multiple crop alternatives with detailed comparisons
- 📱 **Modern UI**: Responsive React interface with intuitive farmer data collection
- 🛡️ **Risk Assessment**: Evaluates crop risks and provides mitigation strategies

---

## 🏗️ Architecture

```
CropAI/
├── backend/                 # Node.js/Express API Server
│   ├── server.js           # Main server file
│   ├── routers/
│   │   └── recommendation.js # AI recommendation endpoint
│   ├── mspData.js         # Government MSP data
│   └── package.json
├── frontend/               # React Application
│   ├── src/
│   │   ├── App.jsx        # Main application component
│   │   ├── main.jsx       # React entry point
│   │   └── index.css      # Global styles
│   └── package.json
└── README.md              # Project documentation
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ and npm
- **Git** for version control
- **API Keys** for AI services (OpenAI or Together AI)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/CropAI.git
   cd CropAI
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env  # Configure your API keys
   npm run dev
   ```

3. **Frontend Setup** (in a new terminal)
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

---

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the backend directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# AI Service Configuration (choose one)
OPENAI_API_KEY=your_openai_api_key_here
TOGETHER_API_KEY=your_together_api_key_here

# Database (future use)
MONGODB_URI=mongodb://localhost:27017/cropai
```

### AI Provider Selection

CropAI supports two AI providers:
- **OpenAI GPT-4**: Higher accuracy, requires API key
- **Together AI Mistral-7B**: Cost-effective, good performance

Configure the provider in the frontend or API request.

---

## 📖 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication
Currently, no authentication required. Add API keys for production use.

### Endpoints

#### POST `/recommendations`

Get AI-powered crop recommendations based on comprehensive farmer data.

**Request Body:**
```json
{
  "soilType": "loam",
  "phLevel": 7.2,
  "rainfall": 1200,
  "temperature": 28,
  "currentCrop": "Rice",
  "yieldHistory": 3.5,
  "marketPrice": 25,
  "aiProvider": "together",
  "language": "en",
  "landDetails": {
    "state": "Andhra Pradesh",
    "district": "Chittoor",
    "subDistrict": "Kuppam",
    "village": "Kuppam Village",
    "surveyNumber": "789/B",
    "totalArea": 3.2,
    "extentAssignedArea": 2.8,
    "landSource": "Own Land"
  },
  "ownershipDetails": [{
    "ownerNumber": "001",
    "mainOwnerNumber": "001",
    "identifierName": "Farmer Name",
    "ownerType": "Individual",
    "ownerShareType": "Full Owner",
    "extent": 2.8
  }],
  "soilDetails": {
    "centreName": "Agricultural Research Center",
    "testId": "TEST-001",
    "testingDate": "2024-03-15",
    "validity": "2025-03-15",
    "surveyNo": "123/A",
    "plotSize": 2.3,
    "soilHealthParameters": {
      "nitrogen": 280,
      "phosphorus": 25,
      "potassium": 180,
      "ph": 7.2,
      "organicCarbon": 0.8,
      "sulphur": 15,
      "zinc": 1.2
    }
  },
  "cropDetailsEPanta": {
    "farmerName": "Farmer Name",
    "aadhaarNumber": "123456789012",
    "mobileNumber": "9876543210",
    "variety": "MTU 1010",
    "areaSown": 2.3,
    "dateOfSowing": "2024-07-15",
    "cropNature": "Kharif",
    "waterSource": "Canal",
    "methodOfIrrigation": "Drip Irrigation",
    "farmingType": "Organic"
  },
  "cropDetailsFarmer": {
    "investmentKharif": "₹85000",
    "cropYield": "4.2 tons/ha",
    "farmerAssets": ["Tractor", "Irrigation Pump"],
    "stages": {
      "preSowing": "Fertilizer application",
      "sowing": "Manual sowing",
      "germination": "70% germination",
      "vegetative": "Good growth",
      "flowering": "Dense flowering",
      "fruitingMaturity": "Grain filling",
      "harvesting": "Manual harvesting",
      "postHarvest": "Threshing and storage"
    }
  },
  "cropInsurance": {
    "insured": true,
    "sumInsured": "₹50000",
    "premiumPaid": "₹750",
    "coverageArea": 2.3,
    "riskCoverage": "Flood, Drought, Pest Attack"
  },
  "encumbrance": {
    "status": "Clear",
    "mortgageDetails": "Nil",
    "encumbranceIfAny": "No encumbrance"
  }
}
```

**Response:**
```json
{
  "success": true,
  "recommendation": {
    "recommendedCrop": "Tur (Arhar)",
    "reason": "High MSP rates and suitable for loam soil conditions",
    "confidenceScore": 85,
    "expectedProfit": 80000,
    "expectedYield": 2.0,
    "waterRequirement": 2000,
    "laborRequirement": 100,
    "maturityTime": 110,
    "riskLevel": "Medium",
    "equipmentNeeded": ["Tractor", "Plough"],
    "effortDistribution": {
      "setup": 20,
      "maintenance": 50,
      "harvesting": 30
    },
    "resourceRequirements": {
      "waterNeeded": "2000 L/ha",
      "fertilizers": ["Urea", "DAP"],
      "pesticides": ["Generic Pesticide"]
    },
    "soilConditions": {
      "suitability": "Good",
      "analysis": "Tur is suitable for loam soil with pH 7.2"
    },
    "marketAnalysis": {
      "profitMargin": "25%",
      "marketDemand": "Medium"
    },
    "alternativeCrops": [
      {
        "crop": "Groundnut",
        "score": 75,
        "reason": "Alternative oilseed crop with stable market demand",
        "expectedProfit": 70000,
        "expectedYield": 1.8,
        "waterRequirement": 1800,
        "laborRequirement": 90,
        "maturityTime": 105,
        "riskLevel": "Medium",
        "equipmentNeeded": ["Tractor"],
        "resourceRequirements": {
          "waterNeeded": "1800 L/ha",
          "fertilizers": ["DAP"],
          "pesticides": ["Cypermethrin"]
        }
      }
    ]
  }
}
```

**Error Response:**
```json
{
  "error": "All crop data fields are required",
  "details": "Missing required field: soilType"
}
```

---

## 🎯 Usage Examples

### Basic Recommendation Request

```javascript
const farmerData = {
  soilType: "loam",
  phLevel: 7.0,
  rainfall: 1000,
  temperature: 25,
  currentCrop: "Rice",
  yieldHistory: 3.0,
  marketPrice: 20,
  aiProvider: "together"
};

fetch('http://localhost:5000/api/recommendations', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(farmerData),
})
.then(response => response.json())
.then(data => console.log(data.recommendation));
```

### Using with React Frontend

The frontend provides a comprehensive form interface for data collection. Sample farmer data is pre-loaded for testing.

---

## 📊 Data Sources

### MSP (Minimum Support Price) Data
- **Source**: Government of India, Ministry of Agriculture
- **Coverage**: 2015-2026 for major crops
- **Update Frequency**: Annual (Kharif & Rabi seasons)
- **Crops Covered**: Paddy, Wheat, Tur, Moong, Urad, Cotton, and more

### AI Models
- **OpenAI GPT-4**: Advanced reasoning and analysis
- **Together AI Mistral-7B**: Efficient and cost-effective

---

## 🔒 Security & Privacy

- **Data Privacy**: Farmer data is processed locally (no external storage)
- **API Security**: Implement authentication for production use
- **Input Validation**: Comprehensive validation of all input parameters
- **Error Handling**: Secure error responses without data leakage

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Government of India** for MSP data and agricultural support
- **OpenAI** and **Together AI** for AI model access
- **React & Node.js communities** for excellent frameworks
- **KADA (Kuppam Area Development Authority)** for domain expertise

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/your-username/CropAI/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/CropAI/discussions)
- **Email**: support@cropai.com

---

<div align="center">

**Made with ❤️ for farmers worldwide**

[⬆️ Back to Top](#-cropai---ai-powered-crop-recommendation-system)

</div>
