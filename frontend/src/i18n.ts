import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip: pass these through a translation service or manual translation)
const resources = {
  en: {
    translation: {
      // Header
      appName: "KADA Crop Recommendation AI",
      smartPlatform: "Smart Agricultural Intelligence Platform",
      systemReady: "System Ready",
      loadingDots: "Loading...",
      aiActive: "AI Active",

      // Hero
      empowerFarmers: "Empowering Farmers with",
      smartIntelligence: "Smart Crop Intelligence",
      advancedTech: "Advanced AI technology that analyzes your farm conditions to provide personalized crop recommendations for better yields and increased profitability.",
      smartAgriculture: "Smart Agriculture",
      smartAgricultureDesc: "Data-driven farming solutions",
      aiIntelligence: "AI Intelligence",
      aiIntelligenceDesc: "Advanced machine learning analysis",
      cropAnalytics: "Crop Analytics",
      cropAnalyticsDesc: "Detailed performance insights",

      // Process flow
      farmData: "Farm Data",
      farmDataDesc: "Input your farm details",
      aiAnalysis: "AI Analysis",
      aiAnalysisDesc: "Smart data processing",
      cropSuggestions: "Crop Suggestions",
      cropSuggestionsDesc: "Personalized recommendations",

      // Language
      language: "Language",
      english: "English",
      telugu: "తెలుగు",

      whyRecommended: "Optimum for your farm conditions",

      // Form
      farmDetailsTitle: "Farm Details",
      enterAgriInfo: "Enter your agricultural information",

      // Labels
      soilCompositionAnalysis: "🌍 Soil Composition Analysis",
      selectSoilType: "Select verified soil type",
      phLevelAnalysis: "⚗️ pH Level Analysis",
      optimal: "🟢 Optimal",
      acidic: "🔴 Acidic",
      alkaline: "🔵 Alkaline",
      annualPrecipitation: "🌧️ Annual Precipitation Data",
      enterRainfallMm: "Enter rainfall in mm",
      averageTemperature: "🌡️ Average Temperature",
      temperatureCelsius: "Temperature in °C",
      currentCropAsset: "🌾 Current Crop Asset",
      farmSizeHectares: "🏡 Farm Size (Hectares)",
      areaInHectares: "Farm area in hectares",
      historicalYield: "📈 Historical Yield Data",
      lastYearYield: "Last year yield (tons/hectare)",
      marketPriceRupees: "💰 Market Price (₹/kg)",
      currentMarketRate: "Current market rate (₹/kg)",

      // Buttons
      launchAiAnalysis: "Launch AI Crop Analysis",
      waitingBlockchain: "Waiting for Blockchain Connection...",
      aiProcessingData: "AI Processing Blockchain Data...",
      serviceUnavailable: "AI service temporarily unavailable, using enhanced simulation",

      // Loading
      blockchainProcessing: "Blockchain Processing",
      validatingContractData: "Validating smart contract data...",
      aiAnalysisProgress: "AI Analysis Progress",
      connectingOracle: "⚡ Connecting to decentralized oracle network...",
      verifyingSignatures: "🔒 Verifying cryptographic signatures...",
      optimizingDatasets: "🤖 AI optimizing 8.5M+ agricultural datasets...",

      // Results
      aiCropIntelligence: "🎆 AI Crop Intelligence",
      aiPoweredRecommendations: "AI-powered recommendations using advanced machine learning and intelligent data analysis",

      // Recommendation labels
      profitLabel: "💰 Profit",
      yieldLabel: "🌾 Yield",
      waterLabel: "💧 Water",
      laborLabel: "👥 Labor",
      resourceRequirements: "⚙️ Resource Requirements",
      waterNeeded: "Water Needed",
      maturityTime: "Maturity Time",
      equipmentNeeded: "🔧 Equipment Needed",
      effortDistribution: "📊 Effort Distribution",
      setupLabel: "Setup",
      maintenanceLabel: "Maintenance",
      harvestingLabel: "Harvesting",

      // Status
      aiConfidence: "AI Confidence",
      chainSecure: "Chain Secure",
      aiPoweredStatus: "AI Powered",
      optimallySmart: "Optimally Smort",

      // Footer
      copyright: "© 2025 Kuppam Area Development Authority",

      // Ready state
      readyForAiAnalysis: "Ready for AI Analysis",
      submitForIntelligentRecommendations: "Submit your farm data to receive intelligent crop recommendations powered by advanced artificial intelligence and machine learning algorithms.",

      // Process flow steps
      farmDataStep: "Farm Data",
      farmDataDescStep: "Input your farm details",
      aiAnalysisStep: "AI Analysis",
      aiAnalysisDescStep: "Smart data processing",
      cropSuggestionsStep: "Crop Suggestions",
      cropSuggestionsDescStep: "Personalized recommendations",

      // Feature cards
      smartAgricultureTitle: "Smart Agriculture",
      smartAgricultureDescCard: "Data-driven farming solutions",
      aiIntelligenceTitle: "AI Intelligence",
      aiIntelligenceDescCard: "Advanced machine learning analysis",
      cropAnalyticsTitle: "Crop Analytics",
      cropAnalyticsDescCard: "Detailed performance insights",

      // Risks
      low: "Low",
      lowMedium: "Low-Medium",
      medium: "Medium",
      mediumHigh: "Medium-High"
    }
  },
  te: {
    translation: {
      // Header
      appName: "KADA పంట సిఫార్సు AI",
      smartPlatform: "స్మార్ట్ వ్యవసాయ ఇంటెలిజెన్స్ ప్లాట్‌ఫారమ్",
      systemReady: "సిస్టమ్ రెడీ",
      loadingDots: "లోడ్ అవుతోంది...",
      aiActive: "AI యాక్టివ్",

      // Hero
      empowerFarmers: "రైతులకు శక్తినివ్వడం",
      smartIntelligence: "స్మార్ట్ పంట ఇంటెలిజెన్స్",
      advancedTech: "మీ పొలం పరిస్థితులను విశ్లేషించి, మెరుగైన దిగుబడి మరియు వస్తు వ్యయాను పెంచే వ్యక్తిగత పంట సిఫార్సులను అందించే అధునాతన AI సాంకేతికత.",
      smartAgriculture: "స్మార్ట్ వ్యవసాయం",
      smartAgricultureDesc: "డేటా-నిర్దేశిత వ్యవసాయ పరిష్కారాలు",
      aiIntelligence: "AI ఇంటెలిజెన్స్",
      aiIntelligenceDesc: "అధునాతన మెషిన్ లెర్నింగ్ విశ్లేషణ",
      cropAnalytics: "పంట విశ్లేషణలు",
      cropAnalyticsDesc: "వివరణాత్మక పనితీరు అంచనాలు",

      // Process flow
      farmData: "పొలం డేటా",
      farmDataDesc: "మీ పొలం వివరాలను ఇన్‌పుట్ చేయండి",
      aiAnalysis: "AI విశ్లేషణ",
      aiAnalysisDesc: "స్మార్ట్ డేటా ప్రాసెసింగ్",
      cropSuggestions: "పంట సూచనలు",
      cropSuggestionsDesc: "వ్యక్తిగత సిఫార్సులు",

      // Form
      farmDetails: "పొలం వివరాలు",
      enterInfo: "మీ వ్యవసాయ సమాచారాన్ని నమోదు చేయండి",
      soilAnalysis: "🌍 మట్టి కూర్పు విశ్లేషణ",
      selectSoil: "నిర్ధారిత మట్టి రకాన్ని ఎంచుకోండి",
      sandySoil: "🏖️ ఇసుక మట్టి",
      claySoil: "🧱 కలిమట్టి",
      loamSoil: "🌱 లోమ్ మట్టి (ప్రీమియం)",
      siltSoil: "💧 సిల్ట్ మట్టి",

      phAnalysis: "⚗️ pH స్థాయి విశ్లేషణ",
      optimalPH: "🟢 ఆప్టిమల్",
      acidicPH: "🔴 యాసిడిక్",
      alkalinePH: "🔵 అల్కలైన్",

      rainfallData: "🌧️ సంవత్సరంలో వర్షపాత డేటా",
      enterRainfall: "వర్షపాతాన్ని mm లో నమోదు చేయండి",

      temperature: "🌡️ సగటు ఉష్ణోగ్రత",

      currentCrop: "🌾 ప్రస్తుత పంట ఆస్తి",
      exampleCrops: "ఉదా., వరిగా, గోధుమలు, మొక్కజొన్న",

      farmSize: "🏡 పొలం పరిమాణం (హెక్టార్లు)",
      areaInHectares: "పొలం ప్రాంతం హెక్టార్లలో",

      yieldHistory: "📈 చారిత్రక దిగుబడి డేటా",
      lastYield: "క్రిందటి సంవత్సరం దిగుబడి (టన్/హెక్టార్)",

      marketPrice: "💰 మార్కెట్ ధర (₹/కిలో)",
      currentRate: "ప్రస్తుత మార్కెట్ రేటు (₹/కిలో)",

      launchAI: "AI పంట విశ్లేషణను ప్రారంభించండి",
      waitingBlockchain: "బ్లాక్‌చైన్ కనెక్షన్ కోసం వేచి ఉంది...",
      processingBlockchain: "AI బ్లాక్‌చైన్ డేటాను ప్రాసెస్ చేస్తోంది...",
      unavailable: "AI సేవ తాత్కాలికంగా అందుబాటులో లేదు, మెరుగైన సిమ్యులేషన్ వాడుతోంది",

      // Loading
      blockchainProcessing: "బ్లాక్‌చైన్ ప్రాసెసింగ్",
      validatingData: "స్మార్ట్ కాంట్రాక్ట్ డేటాను నిర్ధారిస్తోంది...",
      progress: "AI విశ్లేషణ ప్రగతి",
      connectingOracle: "⚡ డిసెంట్రలైజ్డ్ ఓరేకల్ నెట్‌వర్క్‌కి కనెక్ట్ అవుతోంది...",
      verifyingSignatures: "🔒 క్రిప్టోగ్రాఫిక్ సిగ్నేచర్లను నిర్థారిస్తోంది...",
      optimizingDatasets: "🤖 AI 8.5M+ వ్యవసాయ డేటాసెట్లను యాప్టిమైజ్ చేస్తోంది...",

      // Results
      aiIntelligenceTitle: "🎆 AI పంట ఇంటెలిజెన్స్",
      aiPowered: "అధునాతన మెషిన్ లెర్నింగ్ మరియు ఇంటెలిజెంట్ డేటా విశ్లేషణను ఉపయోగించి AI-నిర్దేశిత సిఫార్సులు",
      aiConfidence: "AI విశ్వాసం",

      // Recommendation fields
      profit: "💰 లాభం",
      yield: "🌾 దిగుబడి",
      water: "💧 నీరు",
      labor: "👥 కార్మికం",
      resourceReq: "⚙️ వనరుల అవసరాలు",
      waterNeeded: "కావలసిన నీరు",
      maturityTime: "పరిపక్వ సమయం",
      equipmentNeeded: "🔧 కావలసిన యంత్రాలు",
      effortDist: "📊 కృషి పంపకం",
      setup: "సెటప్",
      maintenance: "నిర్వహణ",
      harvesting: "పండించడం",

      // Crop names
      hybridRice: "హైబ్రిడ్ వరిగా",
      organicWheat: "సారా గోధుమలు",
      biotechCorn: "బయోటెక్ మొక్కజొన్న",
      sustainableSoybean: "సస్టైనబుల్ సోయాబీన్",
      precisionTomato: "ప్రెసిషన్ టొమాటో",

      // Status
      chainSecure: "చైన్ సెక్యూర్",
      aiPoweredStatus: "AI పవర్డ్",
      optimallySmart: "ఆప్టిమల్ స్మార్ట్",

      // Footer
      copyright: "© 2025 KADA AI - కృత్రిమ ఇంటెలిజెన్స్ ద్వారా వ్యవసాయాన్ని విప్లవాత్మకంగా మార్చడం",

      // Language
      language: "భాష",
      english: "English",
      telugu: "తెలుగు",

      whyRecommended: "మీ పొలం పరిస్థితులకు సరైనది"
    }
  }
};

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: 'en', // language to use, more info here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already does escaping
    }
  });

export default i18n;
