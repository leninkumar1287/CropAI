import { useState } from 'react'


// Mock data for farmers from Chittoor District, Andhra Pradesh - KADA operational area
const mockFarmers = {
  farmer_kuppam: {
    // Basic Crop Details
    soilType: 'loam',
    phLevel: 7.2,
    rainfall: 1200,
    temperature: 28,
    currentCrop: 'Rice',
    yieldHistory: 3.5,
    marketPrice: 25,

    // Land Details
    landDetails: {
      state: 'Andhra Pradesh',
      district: 'Chittoor',
      subDistrict: 'Kuppam',
      village: 'Kuppam Village',
      surveyNumber: '789/B',
      subSurveyNumber: '23',
      totalArea: 3.2,
      extentAssignedArea: 2.8,
      landSource: 'Own Land'
    },


    // Ownership Details
    ownershipDetails: [{
      ownerNumber: '001',
      mainOwnerNumber: '001',
      identifierName: 'Suresh Prasad',
      ownerType: 'Individual',
      ownerShareType: 'Full Owner',
      extent: 2.8
    }],

    // Soil Details
    soilDetails: {
      centreName: 'Agricultural Research Center',
      centreAddress: 'Vijayawada Rural',
      testId: 'VB-2024-001',
      testingDate: '2024-03-15',
      validity: '2025-03-15',
      surveyNo: '123/A',
      plotAddress: 'Peda Vurpa Village',
      plotSize: 2.3,
      samplingDate: '2024-03-10',
      geoPosition: '16.5184°N, 80.6278°E',
      soilHealthParameters: {
        soilType: 'Loam',
        nitrogen: 280, phosphorus: 25, potassium: 180,
        ph: 7.2, ec: 0.35, organicCarbon: 0.8,
        sulphur: 15, zinc: 1.2, boron: 0.8,
        iron: 8.5, manganese: 4.2, copper: 0.9
      }
    },

    // E-Panta Crop Details
    cropDetailsEPanta: {
      farmerName: 'Ramanujan Rao',
      aadhaarNumber: '123456789012',
      fatherName: 'Venkata Rao',
      mobileNumber: '9876543210',
      kycName: 'Ramanujan Rao',
      pattadarCultivator: 'Pattadar',
      village: 'Peda Vurpa',
      variety: 'MTU 1010', areaSown: 2.3,
      dateOfSowing: '2024-07-15',
      cropNature: 'Kharif', waterSource: 'Canal',
      methodOfIrrigation: 'Drip Irrigation',
      seedProduction: 'Government',
      farmingType: 'Organic',
      khathaNumber: 'KHA001234', surveyNumber: 'SV123'
    },

    // Farmer Stated Crop Details
    cropDetailsFarmer: {
      stages: {
        preSowing: 'Fertilizer application, soil preparation',
        sowing: 'Manual sowing with proper spacing',
        germination: '70% germination rate observed',
        vegetative: 'Good growth with adequate water',
        flowering: 'Dense flowering observed',
        fruitingMaturity: 'Grain filling phase',
        harvesting: 'Manual harvesting planned',
        postHarvest: 'Threshing and storage'
      },
      investmentKharif: '₹85000', cropYield: '4.2 tons/ha',
      cropSoldTo: 'Local Mandi', costResidue: '₹5000',
      incomeYield: '₹95000', incomeResidue: '₹4000',
      incomeByproducts: '₹2000',
      farmerAssets: ['Tractor', 'Irrigation Pump', 'Harvester', 'Storage Silos']
    },

    // PMFBY Insurance
    cropInsurance: {
      insured: true,
      sumInsured: '₹50000', premiumPaid: '₹750',
      coverageArea: 2.3, riskCoverage: 'Flood, Drought, Pest Attack'
    },

    // Encumbrance
    encumbrance: {
      status: 'Clear', mortgageDetails: 'Nil',
      encumbranceIfAny: 'No encumbrance on this land'
    }
  },

  farmer_gudupalle: {
    soilType: 'clay', phLevel: 7.1, rainfall: 950, temperature: 30,
    currentCrop: 'Rice', yieldHistory: 4.0, marketPrice: 22,

    landDetails: {
      state: 'Andhra Pradesh', district: 'Chittoor', subDistrict: 'Gudupalle',
      village: 'Gudupalle', surveyNumber: '786/D', subSurveyNumber: '15',
      totalArea: 2.8, extentAssignedArea: 2.6, landSource: 'Own Land'
    },

    ownershipDetails: [{
      ownerNumber: '002', mainOwnerNumber: '002',
      identifierName: 'Karan Singh', ownerType: 'Individual',
      ownerShareType: 'Full Owner', extent: 3.0
    }],

    soilDetails: {
      centreName: 'Soil Testing Laboratory',
      centreAddress: 'Rajkot Agricultural University',
      testId: 'GJ-2024-156', testingDate: '2024-06-20', validity: '2025-06-20',
      surveyNo: '456/C', plotAddress: 'Jetpur Village', plotSize: 3.0,
      samplingDate: '2024-06-15', geoPosition: '21.3315°N, 70.7328°E',
      soilHealthParameters: {
        soilType: 'Sandy', nitrogen: 220, phosphorus: 18, potassium: 95,
        ph: 6.8, ec: 0.45, organicCarbon: 0.4, sulphur: 12,
        zinc: 1.8, boron: 1.1, iron: 6.8, manganese: 5.5, copper: 0.4
      }
    },

    cropDetailsEPanta: {
      farmerName: 'Karan Singh', aadhaarNumber: '234567890123',
      fatherName: 'Prakash Singh', mobileNumber: '8765432109',
      kycName: 'Karan Singh', pattadarCultivator: 'Cultivator',
      village: 'Jetpur', variety: 'GG7', areaSown: 3.0,
      dateOfSowing: '2024-06-25', cropNature: 'Kharif',
      waterSource: 'Well', methodOfIrrigation: 'Sprinkler',
      seedProduction: 'Private Seed Company', farmingType: 'Chemical',
      khathaNumber: 'KHA009876', surveyNumber: 'SV456'
    },

    cropDetailsFarmer: {
      stages: {
        preSowing: 'Deep tilling, weed removal',
        sowing: 'Machine sowing with proper depth',
        germination: '85% germination achieved',
        vegetative: 'Healthy growth with pest control',
        flowering: 'Timely flowering',
        fruitingMaturity: 'Pod development phase',
        harvesting: 'Mechanical harvesting',
        postHarvest: 'Pod threshing and sorting'
      },
      investmentKharif: '₹125000', cropYield: '3.8 tons/ha',
      cropSoldTo: 'Cooperative Society', costResidue: '₹7000',
      incomeYield: '₹138400', incomeResidue: '₹8000',
      incomeByproducts: '₹15000',
      farmerAssets: ['Tractor', 'Harvester', 'Irrigation Pump', 'Storage Facility']
    },

    cropInsurance: {
      insured: true, sumInsured: '₹75000', premiumPaid: '₹1125',
      coverageArea: 3.0, riskCoverage: 'Drought, Flood, Cyclone'
    },

    encumbrance: {
      status: 'Mortgaged', mortgageDetails: '₹200000 loan from bank',
      encumbranceIfAny: 'Mortgage with SBI Bank'
    }
  },
  farmer_ramakuppam: {
    soilType: 'sandy',
    phLevel: 6.2,
    rainfall: 750,
    temperature: 31,
    currentCrop: 'Cotton',
    yieldHistory: 2.1,
    marketPrice: 110,

    landDetails: {
      state: 'Andhra Pradesh',
      district: 'Chittoor',
      subDistrict: 'Ramakuppam',
      village: 'Ramakuppam Village',
      surveyNumber: '923/C',
      subSurveyNumber: '45',
      totalArea: 1.9,
      extentAssignedArea: 1.7,
      landSource: 'Own Land'
    },

    ownershipDetails: [{
      ownerNumber: '003',
      mainOwnerNumber: '003',
      identifierName: 'Venkatesh Prasad',
      ownerType: 'Individual',
      ownerShareType: 'Full Owner',
      extent: 1.7
    }],

    soilDetails: {
      centreName: 'Chittoor Agricultural Research Center',
      centreAddress: 'Ramakuppam Subdivision',
      testId: 'CTR-2024-082',
      testingDate: '2024-04-12',
      validity: '2025-04-12',
      surveyNo: '923/C',
      plotAddress: 'Ramakuppam Village',
      plotSize: 1.7,
      samplingDate: '2024-04-08',
      geoPosition: '13.2897°N, 79.5522°E',
      soilHealthParameters: {
        soilType: 'Sandy',
        nitrogen: 195, phosphorus: 22, potassium: 145,
        ph: 6.2, ec: 0.42, organicCarbon: 0.5,
        sulphur: 10, zinc: 1.4, boron: 0.9,
        iron: 8.2, manganese: 4.8, copper: 0.6
      }
    },

    cropDetailsEPanta: {
      farmerName: 'Venkatesh Prasad',
      aadhaarNumber: '345678901234',
      fatherName: 'Ram Prasad',
      mobileNumber: '8901234567',
      kycName: 'Venkatesh Prasad',
      pattadarCultivator: 'Cultivator',
      village: 'Ramakuppam Village',
      variety: 'RLC 776BT',
      areaSown: 1.7,
      dateOfSowing: '2024-06-15',
      cropNature: 'Kharif',
      waterSource: 'Well',
      methodOfIrrigation: 'Drip Irrigation',
      seedProduction: 'Private Seed Company',
      farmingType: 'Integrated',
      khathaNumber: 'KHA006789',
      surveyNumber: 'SV923'
    },

    cropDetailsFarmer: {
      stages: {
        preSowing: 'Cotton seed treatment and soil preparation',
        sowing: 'Dibbling method with proper spacing',
        germination: '65% germination rate observed',
        vegetative: 'Cotton bolls development phase',
        flowering: 'Pink bollworm management critical',
        fruitingMaturity: 'Cotton ready for harvesting',
        harvesting: 'Manual picking method',
        postHarvest: 'Cotton ginning and seed extraction'
      },
      investmentKharif: '₹85000',
      cropYield: '2.1 tons/ha',
      cropSoldTo: 'Cooperative Society',
      costResidue: '₹3500',
      incomeYield: '₹86100',
      incomeResidue: '₹2000',
      incomeByproducts: '₹5000',
      farmerAssets: ['Cotton Gin', 'Irrigation Pump', 'Sprayer', 'Weather Station']
    },

    cropInsurance: {
      insured: true,
      sumInsured: '₹75000',
      premiumPaid: '₹1125',
      coverageArea: 1.7,
      riskCoverage: 'Drought, Pest Attack, Price Risk'
    },

    encumbrance: {
      status: 'Clear',
      mortgageDetails: 'Nil',
      encumbranceIfAny: 'No encumbrance on this land'
    }
  },
  farmer_shanthipuram: {
    soilType: 'loam',
    phLevel: 6.8,
    rainfall: 900,
    temperature: 29,
    currentCrop: 'Maize',
    yieldHistory: 4.5,
    marketPrice: 18,

    landDetails: {
      state: 'Andhra Pradesh',
      district: 'Chittoor',
      subDistrict: 'Shanthipuram',
      village: 'Shanthipuram Village',
      surveyNumber: '654/D',
      subSurveyNumber: '21',
      totalArea: 2.4,
      extentAssignedArea: 2.2,
      landSource: 'Patta Land'
    },

    ownershipDetails: [{
      ownerNumber: '004',
      mainOwnerNumber: '004',
      identifierName: 'Lakshmi Narayana',
      ownerType: 'Individual',
      ownerShareType: 'Full Owner',
      extent: 2.2
    }],

    soilDetails: {
      centreName: 'Chittoor District Soil Testing Lab',
      centreAddress: 'Shanthipuram Block',
      testId: 'CTR-2024-156',
      testingDate: '2024-05-20',
      validity: '2025-05-20',
      surveyNo: '654/D',
      plotAddress: 'Shanthipuram Village',
      plotSize: 2.2,
      samplingDate: '2024-05-15',
      geoPosition: '13.5488°N, 79.4421°E',
      soilHealthParameters: {
        soilType: 'Loam',
        nitrogen: 245, phosphorus: 28, potassium: 175,
        ph: 6.8, ec: 0.38, organicCarbon: 0.7,
        sulphur: 14, zinc: 1.8, boron: 0.7,
        iron: 7.8, manganese: 5.2, copper: 0.8
      }
    },

    cropDetailsEPanta: {
      farmerName: 'Lakshmi Narayana',
      aadhaarNumber: '456789012345',
      fatherName: 'Raghava Narayana',
      mobileNumber: '9012345678',
      kycName: 'Lakshmi Narayana',
      pattadarCultivator: 'Pattadar',
      village: 'Shanthipuram Village',
      variety: 'DHM 117',
      areaSown: 2.2,
      dateOfSowing: '2024-08-01',
      cropNature: 'Rabi',
      waterSource: 'Canal',
      methodOfIrrigation: 'Sprinkler',
      seedProduction: 'Government',
      farmingType: 'Organic',
      khathaNumber: 'KHA007890',
      surveyNumber: 'SV654'
    },

    cropDetailsFarmer: {
      stages: {
        preSowing: 'Maize seed treatment and soil testing',
        sowing: 'Ridges and furrows method',
        germination: '90% successful germination',
        vegetative: 'Tasseling and silking phase',
        flowering: 'Corn borer management essential',
        fruitingMaturity: 'Cobs ready for harvest',
        harvesting: 'Mechanical harvester used',
        postHarvest: 'Drying and storage in silos'
      },
      investmentKharif: '₹60000',
      cropYield: '4.5 tons/ha',
      cropSoldTo: 'Direct Buyers',
      costResidue: '₹7000',
      incomeYield: '₹15400',
      incomeResidue: '₹3500',
      incomeByproducts: '₹4500',
      farmerAssets: ['Tractor', 'Seeder', 'Harvester', 'Grain Storage']
    },

    cropInsurance: {
      insured: true,
      sumInsured: '₹50000',
      premiumPaid: '₹750',
      coverageArea: 2.2,
      riskCoverage: 'Flood Damage, Hailstones'
    },

    encumbrance: {
      status: 'Clear',
      mortgageDetails: 'Nil',
      encumbranceIfAny: 'Clean title to land'
    }
  }
}

function App() {
  const [formData, setFormData] = useState({
    soilType: '', phLevel: 7.0, rainfall: 0, temperature: 25,
    currentCrop: '', yieldHistory: 0, marketPrice: 0,

    landDetails: {
      state: '', district: '', subDistrict: '',
      village: '', surveyNumber: '', subSurveyNumber: '',
      totalArea: 0, extentAssignedArea: 0, landSource: ''
    },

    ownershipDetails: [{
      ownerNumber: '', mainOwnerNumber: '', identifierName: '',
      ownerType: '', ownerShareType: '', extent: 0
    }],

    soilDetails: {
      centreName: '', centreAddress: '', testId: '',
      testingDate: '', validity: '', surveyNo: '',
      plotAddress: '', plotSize: 0, samplingDate: '', geoPosition: '',
      soilHealthParameters: {
        soilType: '', nitrogen: 0, phosphorus: 0, potassium: 0,
        ph: 0, ec: 0, organicCarbon: 0, sulphur: 0,
        zinc: 0, boron: 0, iron: 0, manganese: 0, copper: 0
      }
    },

    cropDetailsEPanta: {
      farmerName: '', aadhaarNumber: '', fatherName: '', mobileNumber: '',
      kycName: '', pattadarCultivator: '', village: '', variety: '',
      areaSown: 0, dateOfSowing: '', cropNature: '', waterSource: '',
      methodOfIrrigation: '', seedProduction: '', farmingType: '',
      khathaNumber: '', surveyNumber: ''
    },

    cropDetailsFarmer: {
      stages: {
        preSowing: '', sowing: '', germination: '', vegetative: '',
        flowering: '', fruitingMaturity: '', harvesting: '', postHarvest: ''
      },
      investmentKharif: '', cropYield: '', cropSoldTo: '', costResidue: '',
      incomeYield: '', incomeResidue: '', incomeByproducts: '',
      farmerAssets: []
    },

    cropInsurance: {
      insured: false, sumInsured: '', premiumPaid: '',
      coverageArea: 0, riskCoverage: ''
    },

    encumbrance: {
      status: '', mortgageDetails: '', encumbranceIfAny: ''
    }
  })

  const [recommendation, setRecommendation] = useState(null)
  const [loading, setLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState('')
  const [error, setError] = useState('')
  const [aiProvider, setAiProvider] = useState('together')



  const prepopulateMockData = (farmerKey) => {
    const mockData = mockFarmers[farmerKey]
    if (mockData) { setFormData(mockData) }
  }

  const handleInputChange = (e) => {
    const { name, value, type } = e.target
    const keys = name.split('.')
    setFormData(prev => {
      let newData = { ...prev }
      let currentLevel = newData
      for (let i = 0; i < keys.length - 1; i++) {
        currentLevel = currentLevel[keys[i]]
      }
      currentLevel[keys[keys.length - 1]] = type === 'number' || type === 'range' ? parseFloat(value) || 0 : value
      return newData
    })
  }



  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setRecommendation(null)

    // Progressive loading messages
    setTimeout(() => setLoadingMessage('AI client created'), 500)
    setTimeout(() => setLoadingMessage('Getting MSP data...'), 1000)
    setTimeout(() => setLoadingMessage('MSP data prepared'), 1500)

    try {
      const submitData = { ...formData, aiProvider }

      const response = await fetch('http://localhost:5000/api/recommendations', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || errorData.message || `Server error: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      if (data.success && data.recommendation) {
        setRecommendation(data.recommendation)
      } else {
        throw new Error('No recommendation received')
      }
      setLoading(false)
    } catch (apiError) {
      setError(apiError instanceof Error ? apiError.message : 'Failed to get AI recommendations.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-kada-gradient">
      <header className="bg-white border-b border-gray-200 shadow-kada">
        <div className="container mx-auto px-6 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center shadow-kada bg-kada-primary">
                <img src="/kada_logo.png" alt="KADA Logo" className="w-12 h-12 object-contain" />
              </div>
              <div>
                <h1 className="text-2xl font-bold font-unna text-kada-primary">AI Crop Recommendation - KADA</h1>
                <p className="text-gray-600 font-medium">Kuppam Area Development Authority</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-kada-green"></div>
                <span className="text-sm font-medium text-kada-green">AI Active</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-kada-blue"></div>
                <span className="text-sm font-medium text-kada-blue">MSP Data Integrated</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-kada-hero py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 shadow-xl">
              <span className="text-4xl">🌾</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold font-unna text-white mb-6 leading-tight">
              Smart Crop Recommendations
              <span className="block text-kada-light text-3xl md:text-4xl mt-2 font-normal">Powered by AI & Government MSP Data</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed font-inter">
              This AI helps farmers make informed decisions by analyzing comprehensive agricultural data
              and recommending the most profitable crops. It integrates India's MSP (Minimum Support Price) data,
              historical market trends, and AI analysis to predict the best crop choices for maximum farmer income.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div className="w-3 h-3 rounded-full bg-kada-green"></div>
                <span className="text-white font-medium">MSP Trends Analysis</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div className="w-3 h-3 rounded-full bg-kada-blue"></div>
                <span className="text-white font-medium">Comprehensive Farmer Profiling</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div className="w-3 h-3 rounded-full bg-kada-orange"></div>
                <span className="text-white font-medium">AI-Powered Profit Optimization</span>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold text-white text-center mb-8 font-unna">How the AI Agricultural Intelligence Works</h3>
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
              <div className="flex flex-col items-center text-center max-w-sm">
                <div className="w-16 h-16 rounded-full bg-kada-primary flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2 font-unna">Data Integration</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Integrates comprehensive farmer profiles with 5-year MSP trends and government agricultural data for accurate analysis.
                </p>
              </div>
              <div className="flex flex-col items-center text-center max-w-sm">
                <div className="w-16 h-16 rounded-full bg-kada-secondary flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl">🧠</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2 font-unna">AI Analysis</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Power AI algorithms process complex factors like soil health, climate, market trends, and farming economics.
                </p>
              </div>
              <div className="flex flex-col items-center text-center max-w-sm">
                <div className="w-16 h-16 rounded-full bg-kada-green flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl">🌾</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2 font-unna">Profit-Maximizing Recommendations</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Generates personalized crop recommendations that maximize farmer income through informed, data-driven decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    <main className="container mx-auto px-6 py-8 max-w-6xl">
      {/* Mock Data Buttons */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-semibold font-unna text-kada-primary">🎯 Sample Farmer Data</span>
          <span className="text-sm text-kada-blue">Click to populate form</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <button onClick={() => prepopulateMockData('farmer_kuppam')} className="bg-kada-green text-white px-3 py-2 rounded-lg hover:bg-kada-primary shadow-kada text-sm font-medium">🌾 Kuppam Mandal Farmer</button>
          <button onClick={() => prepopulateMockData('farmer_gudupalle')} className="bg-kada-blue text-white px-3 py-2 rounded-lg hover:bg-kada-primary shadow-kada text-sm font-medium">🥜 Gudupalle Mandal Farmer</button>
          <button onClick={() => prepopulateMockData('farmer_ramakuppam')} className="bg-kada-orange text-white px-3 py-2 rounded-lg hover:bg-kada-primary shadow-kada text-sm font-medium">🌻 Ramakuppam Mandal Farmer</button>
          <button onClick={() => prepopulateMockData('farmer_shanthipuram')} className="bg-kada-purple text-white px-3 py-2 rounded-lg hover:bg-kada-primary shadow-kada text-sm font-medium">🫛 Shanthipuram Mandal Farmer</button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Crop Info */}
        <div className="bg-gradient-to-br from-kada-light/40 to-white p-8 rounded-xl shadow-kada-lg border-2 border-gray-200 hover:border-kada-primary/40 transition-colors">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-kada-primary to-kada-secondary rounded-xl flex items-center justify-center shadow-kada">
              <span className="text-2xl">🌱</span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold font-unna text-kada-primary">Basic Crop Information</h3>
              <p className="text-gray-600 text-sm mt-1">Essential details about your current farming situation</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-kada-orange">🌱</span> Soil Type *
              </label>
              <div className="relative">
                <select name="soilType" value={formData.soilType} onChange={handleInputChange} required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors appearance-none pr-10">
                  <option value="" className="text-gray-500">Select soil type...</option>
                  <option value="sandy">🌵 Sandy</option>
                  <option value="clay">🏔️ Clay</option>
                  <option value="loam">🌱 Loam</option>
                  <option value="silt">🏞️ Silt</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-kada-primary">⚗️</span> pH Level *
              </label>
              <input type="number" step="0.1" name="phLevel" value={formData.phLevel} onChange={handleInputChange} required
                placeholder="e.g., 7.0" min="0" max="14"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-kada-blue">🌧️</span> Rainfall (mm) *
              </label>
              <input type="number" name="rainfall" value={formData.rainfall} onChange={handleInputChange} required
                placeholder="e.g., 1200" min="0"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-kada-orange">🌡️</span> Temperature (°C) *
              </label>
              <input type="number" name="temperature" value={formData.temperature} onChange={handleInputChange} required
                placeholder="e.g., 28" min="-20" max="60"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-kada-green">🌾</span> Current Crop *
              </label>
              <input type="text" name="currentCrop" value={formData.currentCrop} onChange={handleInputChange} required
                placeholder="e.g., Rice, Wheat, Cotton"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-kada-purple">📊</span> Yield History *
              </label>
              <input type="number" step="0.1" name="yieldHistory" value={formData.yieldHistory} onChange={handleInputChange} required
                placeholder="e.g., 3.5 tons/ha" min="0"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-kada-primary">💰</span> Market Price *
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">₹</span>
                <input type="number" step="0.01" name="marketPrice" value={formData.marketPrice} onChange={handleInputChange} required
                  placeholder="e.g., 25 per kg" min="0"
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* Land Details */}
        <div className="bg-gradient-to-br from-kada-light/40 to-white p-8 rounded-xl shadow-kada-lg border-2 border-gray-200 hover:border-kada-primary/40 transition-colors">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-kada-blue to-kada-primary rounded-xl flex items-center justify-center shadow-kada">
              <span className="text-2xl">🏠</span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold font-unna text-kada-primary">Land Details</h3>
              <p className="text-gray-600 text-sm mt-1">Location and land ownership information</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">State</label>
              <input type="text" name="landDetails.state" value={formData.landDetails.state} onChange={handleInputChange}
                placeholder="e.g., Andhra Pradesh"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">District</label>
              <input type="text" name="landDetails.district" value={formData.landDetails.district} onChange={handleInputChange}
                placeholder="e.g., Chittoor"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Sub-District</label>
              <input type="text" name="landDetails.subDistrict" value={formData.landDetails.subDistrict} onChange={handleInputChange}
                placeholder="e.g., Kuppam"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Village</label>
              <input type="text" name="landDetails.village" value={formData.landDetails.village} onChange={handleInputChange}
                placeholder="e.g., Kuppam Village"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Survey Number</label>
              <input type="text" name="landDetails.surveyNumber" value={formData.landDetails.surveyNumber} onChange={handleInputChange}
                placeholder="e.g., 789/B"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Sub Survey Number</label>
              <input type="text" name="landDetails.subSurveyNumber" value={formData.landDetails.subSurveyNumber} onChange={handleInputChange}
                placeholder="e.g., 23"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Total Area (acres)</label>
              <input type="number" step="0.01" name="landDetails.totalArea" value={formData.landDetails.totalArea} onChange={handleInputChange}
                placeholder="e.g., 3.2"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Extent Assigned Area (acres)</label>
              <input type="number" step="0.01" name="landDetails.extentAssignedArea" value={formData.landDetails.extentAssignedArea} onChange={handleInputChange}
                placeholder="e.g., 2.8"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Land Source</label>
              <input type="text" name="landDetails.landSource" value={formData.landDetails.landSource} onChange={handleInputChange}
                placeholder="e.g., Own Land"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>
          </div>
        </div>

        {/* Ownership Details */}
        <div className="bg-gradient-to-br from-kada-light/40 to-white p-8 rounded-xl shadow-kada-lg border-2 border-gray-200 hover:border-kada-primary/40 transition-colors">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-kada-purple to-kada-primary rounded-xl flex items-center justify-center shadow-kada">
              <span className="text-2xl">👤</span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold font-unna text-kada-primary">Ownership Details</h3>
              <p className="text-gray-600 text-sm mt-1">Land ownership and legal information</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Owner Number</label>
              <input type="text" name="ownershipDetails.0.ownerNumber" value={formData.ownershipDetails[0].ownerNumber} onChange={handleInputChange}
                placeholder="e.g., 001"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Main Owner Number</label>
              <input type="text" name="ownershipDetails.0.mainOwnerNumber" value={formData.ownershipDetails[0].mainOwnerNumber} onChange={handleInputChange}
                placeholder="e.g., 001"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Identifier Name</label>
              <input type="text" name="ownershipDetails.0.identifierName" value={formData.ownershipDetails[0].identifierName} onChange={handleInputChange}
                placeholder="e.g., Suresh Prasad"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Owner Type</label>
              <input type="text" name="ownershipDetails.0.ownerType" value={formData.ownershipDetails[0].ownerType} onChange={handleInputChange}
                placeholder="e.g., Individual"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Owner Share Type</label>
              <input type="text" name="ownershipDetails.0.ownerShareType" value={formData.ownershipDetails[0].ownerShareType} onChange={handleInputChange}
                placeholder="e.g., Full Owner"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Extent (acres)</label>
              <input type="number" step="0.01" name="ownershipDetails.0.extent" value={formData.ownershipDetails[0].extent} onChange={handleInputChange}
                placeholder="e.g., 2.8"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>
          </div>
        </div>

        {/* Soil Details */}
        <div className="bg-gradient-to-br from-kada-light/40 to-white p-8 rounded-xl shadow-kada-lg border-2 border-gray-200 hover:border-kada-primary/40 transition-colors">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-kada-green to-kada-primary rounded-xl flex items-center justify-center shadow-kada">
              <span className="text-2xl">🧪</span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold font-unna text-kada-primary">Soil Health Details</h3>
              <p className="text-gray-600 text-sm mt-1">Laboratory test results and soil analysis</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Centre Name</label>
              <input type="text" name="soilDetails.centreName" value={formData.soilDetails.centreName} onChange={handleInputChange}
                placeholder="e.g., Agricultural Research Center"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Centre Address</label>
              <input type="text" name="soilDetails.centreAddress" value={formData.soilDetails.centreAddress} onChange={handleInputChange}
                placeholder="e.g., Vijayawada Rural"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Test ID</label>
              <input type="text" name="soilDetails.testId" value={formData.soilDetails.testId} onChange={handleInputChange}
                placeholder="e.g., VB-2024-001"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Testing Date</label>
              <input type="date" name="soilDetails.testingDate" value={formData.soilDetails.testingDate} onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Validity</label>
              <input type="date" name="soilDetails.validity" value={formData.soilDetails.validity} onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Survey Number</label>
              <input type="text" name="soilDetails.surveyNo" value={formData.soilDetails.surveyNo} onChange={handleInputChange}
                placeholder="e.g., 123/A"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Plot Address</label>
              <input type="text" name="soilDetails.plotAddress" value={formData.soilDetails.plotAddress} onChange={handleInputChange}
                placeholder="e.g., Peda Vurpa Village"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Plot Size (acres)</label>
              <input type="number" step="0.01" name="soilDetails.plotSize" value={formData.soilDetails.plotSize} onChange={handleInputChange}
                placeholder="e.g., 2.3"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Sampling Date</label>
              <input type="date" name="soilDetails.samplingDate" value={formData.soilDetails.samplingDate} onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Geo Position</label>
              <input type="text" name="soilDetails.geoPosition" value={formData.soilDetails.geoPosition} onChange={handleInputChange}
                placeholder="e.g., 16.5184°N, 80.6278°E"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold text-kada-primary mb-4">Soil Health Parameters</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 mb-2">Nitrogen (kg/ha)</label>
                <input type="number" name="soilDetails.soilHealthParameters.nitrogen" value={formData.soilDetails.soilHealthParameters.nitrogen} onChange={handleInputChange}
                  placeholder="e.g., 280"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 mb-2">Phosphorus (kg/ha)</label>
                <input type="number" name="soilDetails.soilHealthParameters.phosphorus" value={formData.soilDetails.soilHealthParameters.phosphorus} onChange={handleInputChange}
                  placeholder="e.g., 25"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 mb-2">Potassium (kg/ha)</label>
                <input type="number" name="soilDetails.soilHealthParameters.potassium" value={formData.soilDetails.soilHealthParameters.potassium} onChange={handleInputChange}
                  placeholder="e.g., 180"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 mb-2">pH</label>
                <input type="number" step="0.1" name="soilDetails.soilHealthParameters.ph" value={formData.soilDetails.soilHealthParameters.ph} onChange={handleInputChange}
                  placeholder="e.g., 7.2"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 mb-2">EC (dS/m)</label>
                <input type="number" step="0.01" name="soilDetails.soilHealthParameters.ec" value={formData.soilDetails.soilHealthParameters.ec} onChange={handleInputChange}
                  placeholder="e.g., 0.35"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 mb-2">Organic Carbon (%)</label>
                <input type="number" step="0.1" name="soilDetails.soilHealthParameters.organicCarbon" value={formData.soilDetails.soilHealthParameters.organicCarbon} onChange={handleInputChange}
                  placeholder="e.g., 0.8"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 mb-2">Sulphur (ppm)</label>
                <input type="number" name="soilDetails.soilHealthParameters.sulphur" value={formData.soilDetails.soilHealthParameters.sulphur} onChange={handleInputChange}
                  placeholder="e.g., 15"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 mb-2">Zinc (ppm)</label>
                <input type="number" step="0.1" name="soilDetails.soilHealthParameters.zinc" value={formData.soilDetails.soilHealthParameters.zinc} onChange={handleInputChange}
                  placeholder="e.g., 1.2"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 mb-2">Boron (ppm)</label>
                <input type="number" step="0.1" name="soilDetails.soilHealthParameters.boron" value={formData.soilDetails.soilHealthParameters.boron} onChange={handleInputChange}
                  placeholder="e.g., 0.8"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 mb-2">Iron (ppm)</label>
                <input type="number" name="soilDetails.soilHealthParameters.iron" value={formData.soilDetails.soilHealthParameters.iron} onChange={handleInputChange}
                  placeholder="e.g., 8.5"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 mb-2">Manganese (ppm)</label>
                <input type="number" step="0.1" name="soilDetails.soilHealthParameters.manganese" value={formData.soilDetails.soilHealthParameters.manganese} onChange={handleInputChange}
                  placeholder="e.g., 4.2"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 mb-2">Copper (ppm)</label>
                <input type="number" step="0.1" name="soilDetails.soilHealthParameters.copper" value={formData.soilDetails.soilHealthParameters.copper} onChange={handleInputChange}
                  placeholder="e.g., 0.9"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* E-Panta Crop Details */}
        <div className="bg-gradient-to-br from-kada-light/40 to-white p-8 rounded-xl shadow-kada-lg border-2 border-gray-200 hover:border-kada-primary/40 transition-colors">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-kada-orange to-kada-primary rounded-xl flex items-center justify-center shadow-kada">
              <span className="text-2xl">📋</span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold font-unna text-kada-primary">E-Panta Crop Details</h3>
              <p className="text-gray-600 text-sm mt-1">Government crop registration and farming details</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Farmer Name</label>
              <input type="text" name="cropDetailsEPanta.farmerName" value={formData.cropDetailsEPanta.farmerName} onChange={handleInputChange}
                placeholder="e.g., Ramanujan Rao"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Aadhaar Number</label>
              <input type="text" name="cropDetailsEPanta.aadhaarNumber" value={formData.cropDetailsEPanta.aadhaarNumber} onChange={handleInputChange}
                placeholder="e.g., 123456789012"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Father Name</label>
              <input type="text" name="cropDetailsEPanta.fatherName" value={formData.cropDetailsEPanta.fatherName} onChange={handleInputChange}
                placeholder="e.g., Venkata Rao"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Mobile Number</label>
              <input type="text" name="cropDetailsEPanta.mobileNumber" value={formData.cropDetailsEPanta.mobileNumber} onChange={handleInputChange}
                placeholder="e.g., 9876543210"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">KYC Name</label>
              <input type="text" name="cropDetailsEPanta.kycName" value={formData.cropDetailsEPanta.kycName} onChange={handleInputChange}
                placeholder="e.g., Ramanujan Rao"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Pattadar/Cultivator</label>
              <input type="text" name="cropDetailsEPanta.pattadarCultivator" value={formData.cropDetailsEPanta.pattadarCultivator} onChange={handleInputChange}
                placeholder="e.g., Pattadar"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Village</label>
              <input type="text" name="cropDetailsEPanta.village" value={formData.cropDetailsEPanta.village} onChange={handleInputChange}
                placeholder="e.g., Peda Vurpa"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Variety</label>
              <input type="text" name="cropDetailsEPanta.variety" value={formData.cropDetailsEPanta.variety} onChange={handleInputChange}
                placeholder="e.g., MTU 1010"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Area Sown (acres)</label>
              <input type="number" step="0.01" name="cropDetailsEPanta.areaSown" value={formData.cropDetailsEPanta.areaSown} onChange={handleInputChange}
                placeholder="e.g., 2.3"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Date of Sowing</label>
              <input type="date" name="cropDetailsEPanta.dateOfSowing" value={formData.cropDetailsEPanta.dateOfSowing} onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Crop Nature</label>
              <input type="text" name="cropDetailsEPanta.cropNature" value={formData.cropDetailsEPanta.cropNature} onChange={handleInputChange}
                placeholder="e.g., Kharif"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Water Source</label>
              <input type="text" name="cropDetailsEPanta.waterSource" value={formData.cropDetailsEPanta.waterSource} onChange={handleInputChange}
                placeholder="e.g., Canal"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Method of Irrigation</label>
              <input type="text" name="cropDetailsEPanta.methodOfIrrigation" value={formData.cropDetailsEPanta.methodOfIrrigation} onChange={handleInputChange}
                placeholder="e.g., Drip Irrigation"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Seed Production</label>
              <input type="text" name="cropDetailsEPanta.seedProduction" value={formData.cropDetailsEPanta.seedProduction} onChange={handleInputChange}
                placeholder="e.g., Government"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Farming Type</label>
              <input type="text" name="cropDetailsEPanta.farmingType" value={formData.cropDetailsEPanta.farmingType} onChange={handleInputChange}
                placeholder="e.g., Organic"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Khatha Number</label>
              <input type="text" name="cropDetailsEPanta.khathaNumber" value={formData.cropDetailsEPanta.khathaNumber} onChange={handleInputChange}
                placeholder="e.g., KHA001234"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Survey Number</label>
              <input type="text" name="cropDetailsEPanta.surveyNumber" value={formData.cropDetailsEPanta.surveyNumber} onChange={handleInputChange}
                placeholder="e.g., SV123"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>
          </div>
        </div>

        {/* Farmer Stated Crop Details */}
        <div className="bg-gradient-to-br from-kada-light/40 to-white p-8 rounded-xl shadow-kada-lg border-2 border-gray-200 hover:border-kada-primary/40 transition-colors">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-kada-red to-kada-primary rounded-xl flex items-center justify-center shadow-kada">
              <span className="text-2xl">🌾</span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold font-unna text-kada-primary">Farmer Stated Crop Details</h3>
              <p className="text-gray-600 text-sm mt-1">Farmer's own crop growth observations and economic details</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-kada-primary mb-4">Crop Growth Stages</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Pre-Sowing</label>
                  <textarea name="cropDetailsFarmer.stages.preSowing" value={formData.cropDetailsFarmer.stages.preSowing} onChange={handleInputChange}
                    placeholder="e.g., Fertilizer application, soil preparation"
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors"></textarea>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Sowing</label>
                  <textarea name="cropDetailsFarmer.stages.sowing" value={formData.cropDetailsFarmer.stages.sowing} onChange={handleInputChange}
                    placeholder="e.g., Manual sowing with proper spacing"
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors"></textarea>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Germination</label>
                  <textarea name="cropDetailsFarmer.stages.germination" value={formData.cropDetailsFarmer.stages.germination} onChange={handleInputChange}
                    placeholder="e.g., 70% germination rate observed"
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors"></textarea>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Vegetative</label>
                  <textarea name="cropDetailsFarmer.stages.vegetative" value={formData.cropDetailsFarmer.stages.vegetative} onChange={handleInputChange}
                    placeholder="e.g., Good growth with adequate water"
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors"></textarea>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Flowering</label>
                  <textarea name="cropDetailsFarmer.stages.flowering" value={formData.cropDetailsFarmer.stages.flowering} onChange={handleInputChange}
                    placeholder="e.g., Dense flowering observed"
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors"></textarea>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Fruiting/Maturity</label>
                  <textarea name="cropDetailsFarmer.stages.fruitingMaturity" value={formData.cropDetailsFarmer.stages.fruitingMaturity} onChange={handleInputChange}
                    placeholder="e.g., Grain filling phase"
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors"></textarea>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Harvesting</label>
                  <textarea name="cropDetailsFarmer.stages.harvesting" value={formData.cropDetailsFarmer.stages.harvesting} onChange={handleInputChange}
                    placeholder="e.g., Manual harvesting planned"
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors"></textarea>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Post-Harvest</label>
                  <textarea name="cropDetailsFarmer.stages.postHarvest" value={formData.cropDetailsFarmer.stages.postHarvest} onChange={handleInputChange}
                    placeholder="e.g., Threshing and storage"
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors"></textarea>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-kada-primary mb-4">Economic Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Investment (Kharif)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">₹</span>
                    <input type="text" name="cropDetailsFarmer.investmentKharif" value={formData.cropDetailsFarmer.investmentKharif} onChange={handleInputChange}
                      placeholder="e.g., 85000"
                      className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Crop Yield</label>
                  <input type="text" name="cropDetailsFarmer.cropYield" value={formData.cropDetailsFarmer.cropYield} onChange={handleInputChange}
                    placeholder="e.g., 4.2 tons/ha"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Crop Sold To</label>
                  <input type="text" name="cropDetailsFarmer.cropSoldTo" value={formData.cropDetailsFarmer.cropSoldTo} onChange={handleInputChange}
                    placeholder="e.g., Local Mandi"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Cost of Residue</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">₹</span>
                    <input type="text" name="cropDetailsFarmer.costResidue" value={formData.cropDetailsFarmer.costResidue} onChange={handleInputChange}
                      placeholder="e.g., 5000"
                      className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Income from Yield</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">₹</span>
                    <input type="text" name="cropDetailsFarmer.incomeYield" value={formData.cropDetailsFarmer.incomeYield} onChange={handleInputChange}
                      placeholder="e.g., 95000"
                      className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Income from Residue</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">₹</span>
                    <input type="text" name="cropDetailsFarmer.incomeResidue" value={formData.cropDetailsFarmer.incomeResidue} onChange={handleInputChange}
                      placeholder="e.g., 4000"
                      className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Income from Byproducts</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">₹</span>
                    <input type="text" name="cropDetailsFarmer.incomeByproducts" value={formData.cropDetailsFarmer.incomeByproducts} onChange={handleInputChange}
                      placeholder="e.g., 2000"
                      className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-kada-primary mb-4">Farmer Assets</h4>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 mb-2">List of Assets (comma separated)</label>
                <input type="text" name="cropDetailsFarmer.farmerAssets" value={formData.cropDetailsFarmer.farmerAssets.join(', ')} onChange={(e) => {
                  const assets = e.target.value.split(',').map(asset => asset.trim()).filter(asset => asset);
                  setFormData(prev => ({
                    ...prev,
                    cropDetailsFarmer: {
                      ...prev.cropDetailsFarmer,
                      farmerAssets: assets
                    }
                  }));
                }}
                  placeholder="e.g., Tractor, Irrigation Pump, Harvester, Storage Silos"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* Crop Insurance */}
        <div className="bg-gradient-to-br from-kada-light/40 to-white p-8 rounded-xl shadow-kada-lg border-2 border-gray-200 hover:border-kada-primary/40 transition-colors">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-kada-yellow to-kada-primary rounded-xl flex items-center justify-center shadow-kada">
              <span className="text-2xl">🛡️</span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold font-unna text-kada-primary">PMFBY Crop Insurance</h3>
              <p className="text-gray-600 text-sm mt-1">Pradhan Mantri Fasal Bima Yojana insurance details</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Insured</label>
              <select name="cropInsurance.insured" value={formData.cropInsurance.insured} onChange={(e) => {
                const value = e.target.value === 'true';
                setFormData(prev => ({
                  ...prev,
                  cropInsurance: {
                    ...prev.cropInsurance,
                    insured: value
                  }
                }));
              }}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors">
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </select>
            </div>

            {formData.cropInsurance.insured && (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Sum Insured</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">₹</span>
                    <input type="text" name="cropInsurance.sumInsured" value={formData.cropInsurance.sumInsured} onChange={handleInputChange}
                      placeholder="e.g., 50000"
                      className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Premium Paid</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">₹</span>
                    <input type="text" name="cropInsurance.premiumPaid" value={formData.cropInsurance.premiumPaid} onChange={handleInputChange}
                      placeholder="e.g., 750"
                      className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Coverage Area (acres)</label>
                  <input type="number" step="0.01" name="cropInsurance.coverageArea" value={formData.cropInsurance.coverageArea} onChange={handleInputChange}
                    placeholder="e.g., 2.3"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Risk Coverage</label>
                  <input type="text" name="cropInsurance.riskCoverage" value={formData.cropInsurance.riskCoverage} onChange={handleInputChange}
                    placeholder="e.g., Flood, Drought, Pest Attack"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Encumbrance */}
        <div className="bg-gradient-to-br from-kada-light/40 to-white p-8 rounded-xl shadow-kada-lg border-2 border-gray-200 hover:border-kada-primary/40 transition-colors">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-kada-gray to-kada-primary rounded-xl flex items-center justify-center shadow-kada">
              <span className="text-2xl">⚖️</span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold font-unna text-kada-primary">Encumbrance Details</h3>
              <p className="text-gray-600 text-sm mt-1">Legal encumbrances and mortgage information</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Status</label>
              <input type="text" name="encumbrance.status" value={formData.encumbrance.status} onChange={handleInputChange}
                placeholder="e.g., Clear"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Mortgage Details</label>
              <input type="text" name="encumbrance.mortgageDetails" value={formData.encumbrance.mortgageDetails} onChange={handleInputChange}
                placeholder="e.g., Nil"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors" />
            </div>

            <div className="space-y-2 md:col-span-2 lg:col-span-1">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Encumbrance Details</label>
              <textarea name="encumbrance.encumbranceIfAny" value={formData.encumbrance.encumbranceIfAny} onChange={handleInputChange}
                placeholder="e.g., No encumbrance on this land"
                rows="3"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors"></textarea>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="bg-gradient-to-br from-kada-light/40 to-white p-8 rounded-xl shadow-kada-lg border-2 border-gray-200 hover:border-kada-primary/40 transition-colors">
          <div className="flex items-center justify-between">
            {/* AI Provider Selection */}
            <div className="flex-1 max-w-md">
              <label className="block text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-purple-500">🤖</span> Choose AI Provider
              </label>
              <div className="relative">
                <select
                  value={aiProvider}
                  onChange={(e) => setAiProvider(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-kada-primary/20 focus:border-kada-primary hover:border-kada-primary/70 transition-colors appearance-none pr-10"
                >
                  <option value="together">🤖 Together AI - Mistral-7B</option>
                  <option value="openai">🧠 OpenAI GPT-4</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end space-y-4">
              <button type="submit" disabled={loading} className="bg-gradient-to-r from-kada-primary to-kada-secondary text-white font-bold py-4 px-8 rounded-lg hover:from-kada-dark hover:to-kada-primary disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-kada font-unna">
                {loading ? (
                  <div className="flex items-center space-x-4">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    <span>{loadingMessage}</span>
                  </div>
                ) : (
                  `Get AI Crop Recommendations 🚀`
                )}
              </button>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-kada-red text-sm">❌ {error}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>

      {/* Recommendation Results */}
      {recommendation && (
        <div className="space-y-8">
          {/* Main Recommendation */}
          <div className="bg-gradient-to-br from-kada-light/40 to-white p-8 rounded-xl shadow-kada-lg border-2 border-gray-200 hover:border-kada-primary/40 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-kada-green to-kada-secondary rounded-xl flex items-center justify-center shadow-kada">
                <span className="text-2xl">🌾</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold font-unna text-kada-primary">Recommended Crop: {recommendation.recommendedCrop}</h3>
                <p className="text-gray-600 text-sm mt-1">{recommendation.reason}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-kada-primary">₹{recommendation.expectedProfit?.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Expected Profit</div>
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div className="bg-kada-light/20 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-kada-primary">{recommendation.expectedYield}</div>
                <div className="text-sm text-gray-600">Expected Yield (tons/ha)</div>
              </div>
              <div className="bg-kada-light/20 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-kada-primary">{recommendation.maturityTime}</div>
                <div className="text-sm text-gray-600">Maturity Time (days)</div>
              </div>
              <div className="bg-kada-light/20 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-kada-primary">{recommendation.confidenceScore}%</div>
                <div className="text-sm text-gray-600">Confidence Score</div>
              </div>
              <div className="bg-kada-light/20 p-4 rounded-lg text-center">
                <div className={`text-2xl font-bold ${recommendation.riskLevel === 'Low' ? 'text-green-600' : recommendation.riskLevel === 'Medium' ? 'text-yellow-600' : 'text-red-600'}`}>
                  {recommendation.riskLevel}
                </div>
                <div className="text-sm text-gray-600">Risk Level</div>
              </div>
            </div>

            {/* Detailed Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Resource Requirements */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-kada-primary">Resource Requirements</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Water Needed:</span>
                    <span className="text-kada-primary font-semibold">{recommendation.resourceRequirements?.waterNeeded} L/ha</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Labor Required:</span>
                    <span className="text-kada-primary font-semibold">{recommendation.laborRequirement} hours</span>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium block mb-2">Fertilizers:</span>
                    <div className="flex flex-wrap gap-2">
                      {recommendation.resourceRequirements?.fertilizers?.map((fert, idx) => (
                        <span key={idx} className="bg-kada-primary/10 text-kada-primary px-2 py-1 rounded text-sm">
                          {fert}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium block mb-2">Pesticides:</span>
                    <div className="flex flex-wrap gap-2">
                      {recommendation.resourceRequirements?.pesticides?.map((pest, idx) => (
                        <span key={idx} className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">
                          {pest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Effort Distribution & Equipment */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-kada-primary">Effort Distribution & Equipment</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium block mb-2">Setup:</span>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-kada-primary h-2 rounded-full" style={{width: `${(recommendation.effortDistribution?.setup / 100) * 100}%`}}></div>
                    </div>
                    <span className="text-sm text-gray-600">{recommendation.effortDistribution?.setup} hours</span>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium block mb-2">Maintenance:</span>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-kada-secondary h-2 rounded-full" style={{width: `${(recommendation.effortDistribution?.maintenance / 100) * 100}%`}}></div>
                    </div>
                    <span className="text-sm text-gray-600">{recommendation.effortDistribution?.maintenance} hours</span>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium block mb-2">Harvesting:</span>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-kada-green h-2 rounded-full" style={{width: `${(recommendation.effortDistribution?.harvesting / 100) * 100}%`}}></div>
                    </div>
                    <span className="text-sm text-gray-600">{recommendation.effortDistribution?.harvesting} hours</span>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium block mb-2">Equipment Needed:</span>
                    <div className="flex flex-wrap gap-2">
                      {recommendation.equipmentNeeded?.map((equip, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                          {equip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Soil & Market Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <div className="p-4 bg-green-50 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">Soil Conditions</h5>
                <p className="text-green-700 text-sm">
                  <strong>Suitability:</strong> {recommendation.soilConditions?.suitability}<br/>
                  <strong>Analysis:</strong> {recommendation.soilConditions?.analysis}
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">Market Analysis</h5>
                <p className="text-blue-700 text-sm">
                  <strong>Profit Margin:</strong> {recommendation.marketAnalysis?.profitMargin}<br/>
                  <strong>Market Demand:</strong> {recommendation.marketAnalysis?.marketDemand}
                </p>
              </div>
            </div>
          </div>

          {/* Alternative Crops */}
          {recommendation.alternativeCrops && recommendation.alternativeCrops.length > 0 && (
            <div className="bg-gradient-to-br from-kada-light/40 to-white p-8 rounded-xl shadow-kada-lg border-2 border-gray-200 hover:border-kada-primary/40 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-kada-orange to-kada-secondary rounded-xl flex items-center justify-center shadow-kada">
                  <span className="text-2xl">🔄</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-unna text-kada-primary">Alternative Crop Options</h3>
                  <p className="text-gray-600 text-sm mt-1">Other viable crops based on your farming conditions</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {recommendation.alternativeCrops.map((crop, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-kada-primary">{crop.crop}</h4>
                        <p className="text-gray-600 text-sm mt-1">{crop.reason}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-kada-primary">₹{crop.expectedProfit?.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Profit</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <div className="font-semibold text-kada-primary">{crop.expectedYield}</div>
                        <div className="text-xs text-gray-600">Yield (tons/ha)</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <div className="font-semibold text-kada-primary">{crop.maturityTime}</div>
                        <div className="text-xs text-gray-600">Days to Maturity</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <div className="font-semibold text-kada-primary">{crop.score}%</div>
                        <div className="text-xs text-gray-600">Suitability Score</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <div className={`font-semibold ${crop.riskLevel === 'Low' ? 'text-green-600' : crop.riskLevel === 'Medium' ? 'text-yellow-600' : 'text-red-600'}`}>
                          {crop.riskLevel}
                        </div>
                        <div className="text-xs text-gray-600">Risk Level</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm">
                        <span className="font-medium">Water:</span> {crop.resourceRequirements?.waterNeeded} L/ha |
                        <span className="font-medium ml-2">Labor:</span> {crop.laborRequirement} hours
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Fertilizers:</span> {crop.resourceRequirements?.fertilizers?.join(', ')}
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Equipment:</span> {crop.equipmentNeeded?.join(', ')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  </div>
  )
}

export default App
