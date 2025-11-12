# 📖 CropAI API Documentation

## Overview

The CropAI API provides AI-powered crop recommendation services through a RESTful interface. The API analyzes comprehensive farmer data and returns intelligent crop recommendations based on soil conditions, climate data, historical performance, and government MSP (Minimum Support Price) information.

## Base URL
```
http://localhost:5000/api
```

## Authentication
Currently, no authentication is required. For production deployment, implement API key authentication.

## Content Type
All requests and responses use JSON format:
```
Content-Type: application/json
```

---

## Endpoints

### POST `/recommendations`

Generates AI-powered crop recommendations based on comprehensive farmer profile data.

#### Request

**Method:** `POST`  
**Endpoint:** `/api/recommendations`  
**Content-Type:** `application/json`

#### Request Body Parameters

##### Required Parameters

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `soilType` | string | Soil classification | `"loam"`, `"clay"`, `"sandy"`, `"silt"` |
| `phLevel` | number | Soil pH level | `7.2` |
| `rainfall` | number | Annual rainfall in mm | `1200` |
| `temperature` | number | Average temperature in °C | `28` |
| `currentCrop` | string | Currently grown crop | `"Rice"`, `"Wheat"`, `"Cotton"` |
| `yieldHistory` | number | Previous year's yield in tons/ha | `3.5` |
| `marketPrice` | number | Current market price per kg | `25` |

##### Optional Parameters

| Parameter | Type | Description | Default | Example |
|-----------|------|-------------|---------|---------|
| `aiProvider` | string | AI service to use | `"together"` | `"openai"`, `"together"` |
| `language` | string | Response language | `"en"` | `"en"`, `"hi"`, `"te"` |

#### Detailed Request Body Structure

```json
{
  // Required Basic Parameters
  "soilType": "loam",
  "phLevel": 7.2,
  "rainfall": 1200,
  "temperature": 28,
  "currentCrop": "Rice",
  "yieldHistory": 3.5,
  "marketPrice": 25,

  // Optional Configuration
  "aiProvider": "together",
  "language": "en",

  // Land Details (Optional but Recommended)
  "landDetails": {
    "state": "Andhra Pradesh",
    "district": "Chittoor",
    "subDistrict": "Kuppam",
    "village": "Kuppam Village",
    "surveyNumber": "789/B",
    "subSurveyNumber": "23",
    "totalArea": 3.2,
    "extentAssignedArea": 2.8,
    "landSource": "Own Land"
  },

  // Ownership Information (Optional)
  "ownershipDetails": [{
    "ownerNumber": "001",
    "mainOwnerNumber": "001",
    "identifierName": "Farmer Name",
    "ownerType": "Individual",
    "ownerShareType": "Full Owner",
    "extent": 2.8
  }],

  // Soil Health Parameters (Optional but Recommended)
  "soilDetails": {
    "centreName": "Agricultural Research Center",
    "centreAddress": "Vijayawada Rural",
    "testId": "VB-2024-001",
    "testingDate": "2024-03-15",
    "validity": "2025-03-15",
    "surveyNo": "123/A",
    "plotAddress": "Peda Vurpa Village",
    "plotSize": 2.3,
    "samplingDate": "2024-03-10",
    "geoPosition": "16.5184°N, 80.6278°E",
    "soilHealthParameters": {
      "soilType": "Loam",
      "nitrogen": 280,
      "phosphorus": 25,
      "potassium": 180,
      "ph": 7.2,
      "ec": 0.35,
      "organicCarbon": 0.8,
      "sulphur": 15,
      "zinc": 1.2,
      "boron": 0.8,
      "iron": 8.5,
      "manganese": 4.2,
      "copper": 0.9
    }
  },

  // Government E-Panta Registration Details (Optional)
  "cropDetailsEPanta": {
    "farmerName": "Ramanujan Rao",
    "aadhaarNumber": "123456789012",
    "fatherName": "Venkata Rao",
    "mobileNumber": "9876543210",
    "kycName": "Ramanujan Rao",
    "pattadarCultivator": "Pattadar",
    "village": "Peda Vurpa",
    "variety": "MTU 1010",
    "areaSown": 2.3,
    "dateOfSowing": "2024-07-15",
    "cropNature": "Kharif",
    "waterSource": "Canal",
    "methodOfIrrigation": "Drip Irrigation",
    "seedProduction": "Government",
    "farmingType": "Organic",
    "khathaNumber": "KHA001234",
    "surveyNumber": "SV123"
  },

  // Farmer's Own Crop Observations (Optional)
  "cropDetailsFarmer": {
    "stages": {
      "preSowing": "Fertilizer application, soil preparation",
      "sowing": "Manual sowing with proper spacing",
      "germination": "70% germination rate observed",
      "vegetative": "Good growth with adequate water",
      "flowering": "Dense flowering observed",
      "fruitingMaturity": "Grain filling phase",
      "harvesting": "Manual harvesting planned",
      "postHarvest": "Threshing and storage"
    },
    "investmentKharif": "₹85000",
    "cropYield": "4.2 tons/ha",
    "cropSoldTo": "Local Mandi",
    "costResidue": "₹5000",
    "incomeYield": "₹95000",
    "incomeResidue": "₹4000",
    "incomeByproducts": "₹2000",
    "farmerAssets": ["Tractor", "Irrigation Pump", "Harvester", "Storage Silos"]
  },

  // Crop Insurance Details (Optional)
  "cropInsurance": {
    "insured": true,
    "sumInsured": "₹50000",
    "premiumPaid": "₹750",
    "coverageArea": 2.3,
    "riskCoverage": "Flood, Drought, Pest Attack"
  },

  // Land Encumbrance Information (Optional)
  "encumbrance": {
    "status": "Clear",
    "mortgageDetails": "Nil",
    "encumbranceIfAny": "No encumbrance on this land"
  }
}
```

#### Response

##### Success Response (200 OK)

```json
{
  "success": true,
  "recommendation": {
    "recommendedCrop": "Tur (Arhar)",
    "reason": "High MSP rates and suitable for loam soil conditions with current market trends",
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
      "analysis": "Tur is suitable for loam soil with pH 7.2 and adequate nutrient levels"
    },
    "marketAnalysis": {
      "profitMargin": "25%",
      "marketDemand": "Medium"
    },
    "alternativeCrops": [
      {
        "crop": "Groundnut",
        "score": 75,
        "reason": "Alternative oilseed crop with stable market demand and complementary farming practices",
        "expectedProfit": 70000,
        "expectedYield": 1.8,
        "waterRequirement": 1800,
        "laborRequirement": 90,
        "maturityTime": 105,
        "riskLevel": "Medium",
        "equipmentNeeded": ["Tractor"],
        "effortDistribution": {
          "setup": 15,
          "maintenance": 45,
          "harvesting": 30
        },
        "resourceRequirements": {
          "waterNeeded": "1800 L/ha",
          "fertilizers": ["DAP"],
          "pesticides": ["Cypermethrin"]
        }
      },
      {
        "crop": "Moong",
        "score": 70,
        "reason": "Short duration pulse crop suitable for risk diversification",
        "expectedProfit": 65000,
        "expectedYield": 1.5,
        "waterRequirement": 1600,
        "laborRequirement": 85,
        "maturityTime": 65,
        "riskLevel": "Low",
        "equipmentNeeded": ["Tractor"],
        "effortDistribution": {
          "setup": 10,
          "maintenance": 40,
          "harvesting": 35
        },
        "resourceRequirements": {
          "waterNeeded": "1600 L/ha",
          "fertilizers": ["Urea"],
          "pesticides": ["Imidacloprid"]
        }
      }
    ]
  }
}
```

##### Response Field Descriptions

| Field | Type | Description |
|-------|------|-------------|
| `recommendedCrop` | string | Primary crop recommendation |
| `reason` | string | Explanation for the recommendation |
| `confidenceScore` | number | AI confidence percentage (0-100) |
| `expectedProfit` | number | Estimated profit in INR |
| `expectedYield` | number | Expected yield in tons/hectare |
| `waterRequirement` | number | Water needed in liters |
| `laborRequirement` | number | Labor required in hours |
| `maturityTime` | number | Days to maturity |
| `riskLevel` | string | Risk assessment: "Low", "Medium", "High" |
| `equipmentNeeded` | array | Required farming equipment |
| `effortDistribution` | object | Time distribution across farming stages |
| `resourceRequirements` | object | Fertilizers, pesticides, and water needs |
| `soilConditions` | object | Soil suitability analysis |
| `marketAnalysis` | object | Market demand and profit margin |
| `alternativeCrops` | array | Alternative crop options (2-3 typically) |

#### Error Responses

##### 400 Bad Request - Missing Required Fields
```json
{
  "error": "All crop data fields are required",
  "details": "Missing required field: soilType"
}
```

##### 400 Bad Request - Invalid Data
```json
{
  "error": "Invalid input data",
  "details": "pH level must be between 0 and 14"
}
```

##### 500 Internal Server Error - AI Processing Failed
```json
{
  "error": "Failed to generate crop recommendation",
  "details": "AI service temporarily unavailable"
}
```

##### 500 Internal Server Error - AI Response Parsing Error
```json
{
  "error": "Failed to process AI response",
  "details": "Invalid JSON response from AI service"
}
```

---

## Data Validation Rules

### Required Field Validation
- All basic crop parameters must be provided
- Numeric fields must be within realistic ranges
- String fields cannot be empty

### Data Type Validation
- `soilType`: Must be one of ["sandy", "clay", "loam", "silt"]
- `phLevel`: Number between 0 and 14
- `rainfall`: Positive number (0-10000 mm)
- `temperature`: Number between -20 and 60 °C
- `yieldHistory`: Positive number
- `marketPrice`: Positive number

### AI Provider Validation
- `aiProvider`: Must be either "openai" or "together"
- Corresponding API keys must be configured in environment

---

## Rate Limiting

- **Current**: No rate limiting implemented
- **Recommended**: Implement rate limiting for production (e.g., 100 requests/hour per IP)

---

## Error Handling

The API implements comprehensive error handling:

1. **Input Validation**: Checks all required fields and data types
2. **AI Service Errors**: Handles API failures and retries
3. **Response Parsing**: Validates AI response format
4. **Fallback Responses**: Provides default recommendations if AI fails
5. **Logging**: Comprehensive error logging for debugging

---

## MSP Data Integration

The API integrates with Government of India MSP data:

### Data Coverage
- **Years**: 2021-22 to 2025-26
- **Crops**: 25+ major crops including:
  - Kharif: Paddy, Tur, Moong, Urad, Cotton, Groundnut, Soybean
  - Rabi: Wheat, Gram, Masur, Rapeseed, Mustard, Barley
  - Commercial: Jute

### MSP Data Structure
```javascript
{
  "Paddy (Common)": {
    "2021-22": 1940,
    "2022-23": 2040,
    "2023-24": 2183,
    "2024-25": 2300,
    "2025-26": 2369
  }
}
```

### High-Value Crop Selection
Crops with MSP > ₹5000/quintal are prioritized for recommendations.

---

## Usage Examples

### Basic Request with Minimal Data
```javascript
const response = await fetch('http://localhost:5000/api/recommendations', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    soilType: "loam",
    phLevel: 7.0,
    rainfall: 1000,
    temperature: 25,
    currentCrop: "Rice",
    yieldHistory: 3.0,
    marketPrice: 20
  })
});
```

### Full Request with Complete Farmer Profile
```javascript
const farmerProfile = {
  // ... complete farmer data as shown above
};

const response = await fetch('http://localhost:5000/api/recommendations', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(farmerProfile)
});
```

### Handling Responses
```javascript
try {
  const data = await response.json();
  if (data.success) {
    console.log('Recommended Crop:', data.recommendation.recommendedCrop);
    console.log('Expected Profit:', data.recommendation.expectedProfit);
    console.log('Alternatives:', data.recommendation.alternativeCrops);
  } else {
    console.error('API Error:', data.error);
  }
} catch (error) {
  console.error('Network Error:', error);
}
```

---

## Testing

### Sample Test Data

The API includes pre-configured test data for different farmer profiles:

1. **Kuppam Mandal Farmer**: Rice cultivation in Andhra Pradesh
2. **Gudupalle Mandal Farmer**: Rice with clay soil
3. **Ramakuppam Mandal Farmer**: Cotton cultivation
4. **Shanthipuram Mandal Farmer**: Maize farming

### Test Endpoints

Use the frontend application to test with sample data or make direct API calls with the provided examples.

---

## Future Enhancements

### Planned Features
- **User Authentication**: API key and JWT-based authentication
- **Rate Limiting**: Request throttling and quota management
- **Caching**: Response caching for improved performance
- **Webhooks**: Real-time recommendation notifications
- **Analytics**: Usage statistics and performance metrics
- **Multi-language Support**: Extended language options
- **Database Integration**: Persistent storage for recommendations

### API Versioning
Future API versions will be indicated by URL path versioning:
```
/api/v1/recommendations
/api/v2/recommendations
```

---

## Support

For API support and questions:
- **Documentation**: This document
- **Issues**: GitHub Issues
- **Discussions**: GitHub Discussions
- **Email**: api-support@cropai.com

---

*Last updated: November 2025*  
*API Version: 1.0.0*
