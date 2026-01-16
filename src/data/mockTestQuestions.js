export const QUESTION_BANK = {
  easy: [
    { 
      q: "What does a red traffic light mean?", 
      q_hi: "लाल ट्रैफिक लाइट का क्या मतलब है?",
      options: ["Go", "Stop", "Slow down", "Caution"], 
      options_hi: ["जाओ", "रुको", "धीमे चलो", "सावधान"],
      correct: 1 
    },
    { 
      q: "What is the minimum age for a learner's license (car)?", 
      q_hi: "लर्नर लाइसेंस (कार) के लिए न्यूनतम आयु क्या है?",
      options: ["16", "18", "21", "25"], 
      options_hi: ["16", "18", "21", "25"],
      correct: 1 
    },
    { 
      q: "When should you use the horn?", 
      q_hi: "आपको हॉर्न का प्रयोग कब करना चाहिए?",
      options: ["To greet friends", "In silence zones", "To alert of danger", "Always"], 
      options_hi: ["दोस्तों का स्वागत करने के लिए", "शांत क्षेत्रों में", "खतरे की चेतावनी देने के लिए", "हमेशा"],
      correct: 2 
    },
    { 
      q: "What is the shape of a mandatory sign?", 
      q_hi: "अनिवार्य संकेत का आकार कैसा होता है?",
      options: ["Circle", "Triangle", "Square", "Rectangle"], 
      options_hi: ["वृत्त (गोल)", "त्रिकोण", "वर्ग", "आयत"],
      correct: 0 
    },
    { 
      q: "What does a yellow traffic light mean?", 
      q_hi: "पीली ट्रैफिक लाइट का क्या मतलब है?",
      options: ["Stop if safe", "Speed up", "Go", "Turn left"], 
      options_hi: ["रुकें अगर सुरक्षित हो", "गति बढ़ाएं", "जाओ", "बाएं मुड़ें"],
      correct: 0 
    },
    { 
      q: "Which side of the road must you drive on in India?", 
      q_hi: "भारत में आपको सड़क के किस तरफ गाड़ी चलानी चाहिए?",
      options: ["Left", "Right", "Middle", "Any"], 
      options_hi: ["बाईं ओर", "दाईं ओर", "बीच में", "कोई भी"],
      correct: 0 
    },
    { 
      q: "What do zebra crossings indicate?", 
      q_hi: "जेबरा क्रॉसिंग क्या दर्शाता है?",
      options: ["Parking zone", "Pedestrian crossing", "No stopping", "Speed breaker"], 
      options_hi: ["पार्किंग क्षेत्र", "पैदल यात्री क्रॉसिंग", "रुकना मना है", "गति अवरोधक"],
      correct: 1 
    },
    { 
      q: "When approaching a roundabout, who has right of way?", 
      q_hi: "गोल चक्कर (Roundabout) पर, किसका अधिकार पहले है?",
      options: ["Traffic entering", "Traffic already in roundabout", "Bigger vehicles", "Motorcycles"], 
      options_hi: ["प्रवेश करने वाला ट्रैफिक", "गोल चक्कर में पहले से मौजूद ट्रैफिक", "बड़े वाहन", "मोटरसाइकिल"],
      correct: 1 
    },
    { 
      q: "You should overtake a vehicle from which side?", 
      q_hi: "आपको किसी वाहन को किस तरफ से ओवरटेक करना चाहिए?",
      options: ["Left", "Right", "Any safe side", "Never overtake"], 
      options_hi: ["बाईं ओर", "दाईं ओर", "किसी भी सुरक्षित तरफ", "कभी ओवरटेक न करें"],
      correct: 1 
    },
    { 
      q: "What does a continuous yellow line mean?", 
      q_hi: "निरंतर पीली रेखा का क्या अर्थ है?",
      options: ["Overtaking allowed", "No overtaking", "Parking allowed", "End of road"], 
      options_hi: ["ओवरटेकिंग की अनुमति है", "ओवरटेकिंग मना है", "पार्किंग की अनुमति है", "सड़क का अंत"],
      correct: 1 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/1.webp", 
      options: ["No Entry", "One Way", "Stop", "No Parking"], 
      options_hi: ["प्रवेश निषेध (No Entry)", "एक तरफा रास्ता", "रुको", "पार्किंग मना है"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/31.webp", 
      options: ["Stop", "Give Way", "No Entry", "Speed Limit"], 
      options_hi: ["रुको", "रास्ता दें (Give Way)", "प्रवेश निषेध", "गति सीमा"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/15.webp", 
      options: [
        { text: "School Ahead", image: "/symbols/cautionary/school-ahead.webp" },
        { text: "Men at Work", image: "/symbols/cautionary/men-at-work.webp" },
        { text: "Pedestrian Crossing", image: "/symbols/cautionary/pedestrian-crossing.webp" },
        { text: "Park", image: "/symbols/cautionary/park.webp" }
      ],
      options_hi: [
        { text: "आगे स्कूल है", image: "/symbols/cautionary/school-ahead.webp" },
        { text: "काम चालू है", image: "/symbols/cautionary/men-at-work.webp" },
        { text: "पैदल यात्री क्रॉसिंग", image: "/symbols/cautionary/pedestrian-crossing.webp" },
        { text: "पार्क", image: "/symbols/cautionary/park.webp" }
      ],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/19.webp", 
      options: ["Speed Limit 50", "Route 50", "Distance 50km", "Weight 50 tons"], 
      options_hi: ["गति सीमा 50", "रूट 50", "दूरी 50 किमी", "वजन 50 टन"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/17.webp", 
      options: ["No Horn", "Sound Horn", "Music Prohibited", "Silence Zone End"], 
      options_hi: ["हॉर्न बजाना मना है", "हॉर्न बजाएं", "संगीत निषिद्ध", "शांति क्षेत्र समाप्त"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/36.webp", 
      options: ["Speed Breaker", "Hump", "Rough Road", "Bridge"], 
      options_hi: ["स्पीड ब्रेकर", "कूबड़ (Hump)", "खराब सड़क", "पुल"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/informatory/2.webp", 
      options: ["Petrol Pump", "Parking", "Hospital", "Garage"], 
      options_hi: ["पेट्रोल पंप", "पार्किंग", "अस्पताल", "गैरेज"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/16.webp", 
      options: ["Overtaking Prohibited", "No Entry", "Two Way Traffic", "U-Turn Prohibited"], 
      options_hi: ["ओवरटेकिंग निषिद्ध", "प्रवेश निषेध", "दो तरफा यातायात", "यू-टर्न निषिद्ध"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/18.webp", 
      options: ["No Parking", "No Stopping", "No Entry", "Speed Limit"], 
      options_hi: ["नो पार्किंग", "रुकना मना है", "प्रवेश निषेध", "गति सीमा"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/1.webp", 
      options: ["Right Hand Curve", "Left Hand Curve", "U-Turn", "Roundabout"], 
      options_hi: ["दाहिना मोड़ (Curve)", "बायां मोड़ (Curve)", "यू-टर्न", "गोल चक्कर"],
      correct: 0 
    },
    { 
      q: "What is the validity of a learner's license?", 
      q_hi: "लर्नर लाइसेंस की वैधता कितनी होती है?",
      options: ["3 months", "6 months", "1 year", "Permanent"], 
      options_hi: ["3 महीने", "6 महीने", "1 साल", "स्थायी"],
      correct: 1 
    },
    { 
      q: "Can you reverse on a one-way street?", 
      q_hi: "क्या आप वन-वे (एक तरफा) सड़क पर गाड़ी बैक कर सकते हैं?",
      options: ["Yes", "No", "Only if empty", "At night"], 
      options_hi: ["हाँ", "नहीं", "सिर्फ अगर खाली हो", "रात में"],
      correct: 1 
    },
    { 
      q: "What document must be in the car?", 
      q_hi: "कार में कौन सा दस्तावेज होना अनिवार्य है?",
      options: ["RC & Insurance", "Passport", "Voter ID", "Electricity Bill"], 
      options_hi: ["आरसी और बीमा", "पासपोर्ट", "वोटर आईडी", "बिजली का बिल"],
      correct: 0 
    },
    { 
      q: "What is 'Tailgating'?", 
      q_hi: "'टेलगेटिंग' (Tailgating) क्या है?",
      options: ["Driving too close behind", "Driving continuously", "Overtaking", "Parking backward"], 
      options_hi: ["पीछे बहुत करीब गाड़ी चलाना", "लगातार गाड़ी चलाना", "ओवरटेकिंग", "पीछे की ओर पार्क करना"],
      correct: 0 
    },
    { 
      q: "When can you use high beam?", 
      q_hi: "आप हाई बीम का उपयोग कब कर सकते हैं?",
      options: ["Always at night", "When no oncoming traffic", "In city", "During rain"], 
      options_hi: ["रात में हमेशा", "जब सामने से कोई ट्रैफिक न हो", "शहर में", "बारिश के दौरान"],
      correct: 1 
    },
    { 
      q: "What does 'ABS' stand for?", 
      q_hi: "'ABS' का मतलब क्या है?",
      options: ["Anti-lock Braking System", "Auto Brake Setup", "All Brake System", "Active Brake Safety"], 
      options_hi: ["एंटी-लॉक ब्रेकिंग सिस्टम", "ऑटो ब्रेक सेटअप", "ऑल ब्रेक सिस्टम", "एक्टिव ब्रेक सेफ्टी"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/23.jpg", 
      options: ["Compulsory Left Turn", "No Left Turn", "One Way", "Left Curve"], 
      options_hi: ["बाएं मुड़ना अनिवार्य", "बाएं मुड़ना मना है", "एक तरफा", "बायां वक्र"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/20.jpg", 
      options: ["Cross Road", "Hospital", "First Aid", "Church"], 
      options_hi: ["चौराहा (Cross Road)", "अस्पताल", "प्राथमिक चिकित्सा", "चर्च"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/12.jpg", 
      options: ["Pedestrians Prohibited", "School Ahead", "Men at Work", "Crossing"], 
      options_hi: ["पैदल यात्री निषिद्ध", "आगे स्कूल है", "काम चालू है", "क्रॉसिंग"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/11.jpg", 
      options: ["Narrow Bridge", "Narrow Road", "Road Widens", "Gap in Median"], 
      options_hi: ["संकरा पुल", "संकरी सड़क", "सड़क चौड़ी है", "मध्य में अंतर"],
      correct: 0 
    },
    { 
      q: "A flashing yellow signal means:", 
      q_hi: "चमकता हुआ पीला सिग्नल क्या दर्शाता है?",
      options: ["Stop immediately", "Proceed with caution", "Go faster", "Turn left only"], 
      options_hi: ["तुरंत रुकें", "सावधानी से आगे बढ़ें", "तेजी से जाएं", "केवल बाएं मुड़ें"],
      correct: 1 
    },
    { 
      q: "A green arrow signal indicates:", 
      q_hi: "हरा तीर संकेत क्या दर्शाता है?",
      options: ["Stop", "Go only in direction of arrow", "U-turn only", "Parking allowed"], 
      options_hi: ["रुको", "केवल तीर की दिशा में जाएं", "केवल यू-टर्न", "पार्किंग की अनुमति है"],
      correct: 1 
    },
    { 
      q: "When a police officer raises hand palm front:", 
      q_hi: "जब पुलिस अधिकारी हथेली सामने करके हाथ उठाता है:",
      options: ["Stop coming from front", "Stop coming from behind", "Go", "Turn left"], 
      options_hi: ["सामने से आने वाले रुकें", "पीछे से आने वाले रुकें", "जाओ", "बाएं मुड़ें"],
      correct: 0 
    },
    { 
      q: "Before starting the engine, you should check:", 
      q_hi: "इंजन शुरू करने से पहले, आपको क्या जांचना चाहिए?",
      options: ["Radio", "Mirrors and Seat", "AC", "Phone"], 
      options_hi: ["रेडियो", "शीशे और सीट", "एसी", "फोन"],
      correct: 1 
    },
    { 
      q: "While driving, you wish to turn left:", 
      q_hi: "गाड़ी चलाते समय, आप बाएं मुड़ना चाहते हैं:",
      options: ["Turn immediately", "Signal, check mirror, turn", "Blow horn and turn", "Stop then turn"], 
      options_hi: ["तुरंत मुड़ें", "संकेत दें, शीशा देखें, मुड़ें", "हॉर्न बजाएं और मुड़ें", "रुकें फिर मुड़ें"],
      correct: 1 
    },
    { 
      q: "Parking in front of a hospital entrance is:", 
      q_hi: "अस्पताल के प्रवेश द्वार के सामने पार्किंग करना:",
      options: ["Allowed", "Prohibited", "Allowed for 5 mins", "Allowed at night"], 
      options_hi: ["अनुमति है", "निषिद्ध है", "5 मिनट के लिए अनुमति है", "रात में अनुमति है"],
      correct: 1 
    },
    { 
      q: "Driving on the footpath is:", 
      q_hi: "फुटपाथ पर गाड़ी चलाना:",
      options: ["Allowed for 2-wheelers", "Prohibited", "Allowed in traffic", "Allowed at night"], 
      options_hi: ["दोपहिया वाहनों के लिए अनुमति है", "निषिद्ध है", "ट्रैफिक में अनुमति है", "रात में अनुमति है"],
      correct: 1 
    },
    { 
      q: "You can board a moving bus:", 
      q_hi: "आप चलती बस में चढ़ सकते हैं:",
      options: ["Never", "If slow", "If conductor helps", "If late"], 
      options_hi: ["कभी नहीं", "अगर धीमी हो", "अगर कंडक्टर मदद करे", "अगर देर हो रही हो"],
      correct: 0 
    },
    { 
      q: "Driving a vehicle without valid insurance is:", 
      q_hi: "वैध बीमा के बिना वाहन चलाना:",
      options: ["Allowed", "Illegal", "Allowed for new cars", "Allowed for personal cars"], 
      options_hi: ["अनुमति है", "गैरकानूनी है", "नई कारों के लिए अनुमति है", "निजी कारों के लिए अनुमति है"],
      correct: 1 
    },
    { 
      q: "You should check your rear-view mirror:", 
      q_hi: "आपको अपने रियर-व्यू मिरर (पीछे देखने वाला शीशा) की जांच करनी चाहिए:",
      options: ["Only when turning", "Frequently", "Only when stopping", "Never"], 
      options_hi: ["केवल मुड़ते समय", "बार-बार", "केवल रुकते समय", "कभी नहीं"],
      correct: 1 
    },
    { 
      q: "Hazard warning lights should be used:", 
      q_hi: "खतरे की चेतावनी वाली लाइटों (Hazard lights) का उपयोग किया जाना चाहिए:",
      options: ["When parking", "When vehicle breaks down/causing obstruction", "In rain", "While driving fast"], 
      options_hi: ["पार्किंग करते समय", "जब वाहन खराब हो जाए/रुकावट पैदा करे", "बारिश में", "तेज गाड़ी चलाते समय"],
      correct: 1 
    },
    { 
      q: "When driving in fog, use:", 
      q_hi: "कोहरे में गाड़ी चलाते समय, उपयोग करें:",
      options: ["High beam", "Low beam", "Parking lights only", "No lights"], 
      options_hi: ["हाई बीम", "लो बीम", "केवल पार्किंग लाइट्स", "कोई लाइट नहीं"],
      correct: 1 
    },
    { 
      q: "Overtaking on a curve is:", 
      q_hi: "मोड़ (Curve) पर ओवरटेकिंग करना:",
      options: ["Allowed", "Prohibited", "Allowed if no police", "Allowed if slow"], 
      options_hi: ["अनुमति है", "निषिद्ध है", "अगर पुलिस नहीं है तो अनुमति है", "अगर धीमा है तो अनुमति है"],
      correct: 1 
    },
    { 
      q: "A driver must carry the license:", 
      q_hi: "चालक को लाइसेंस अपने पास रखना चाहिए:",
      options: ["Original always", "Xerox copy", "Photo in phone", "At home"], 
      options_hi: ["हमेशा मूल (Original)", "जेरोक्स कॉपी", "फोन में फोटो", "घर पर"],
      correct: 0 
    },
    { 
      q: "Smoking while driving public transport is:", 
      q_hi: "सार्वजनिक परिवहन चलाते समय धूम्रपान करना:",
      options: ["Allowed", "Prohibited", "Allowed with window open", "Drivers choice"], 
      options_hi: ["अनुमति है", "निषिद्ध है", "खिड़की खुली होने पर अनुमति है", "चालक की पसंद"],
      correct: 1 
    },
    { 
      q: "Triple riding on a two-wheeler is:", 
      q_hi: "दोपहिया वाहन पर तीन सवारी (Triple riding) करना:",
      options: ["Allowed", "Prohibited", "Allowed for kids", "Allowed in village"], 
      options_hi: ["अनुमति है", "निषिद्ध है", "बच्चों के लिए अनुमति है", "गाँव में अनुमति है"],
      correct: 1 
    },
    { 
      q: "Using a mobile phone while driving is:", 
      q_hi: "गाड़ी चलाते समय मोबाइल फोन का उपयोग करना:",
      options: ["Allowed", "Prohibited", "Allowed with hands-free", "Allowed for maps only"], 
      options_hi: ["अनुमति है", "निषिद्ध है", "हैंड्स-फ्री के साथ अनुमति है", "केवल नक्शे के लिए अनुमति है"],
      correct: 1 
    },
    { 
      q: "Maximum speed of a motorcycle in city:", 
      q_hi: "शहर में मोटरसाइकिल की अधिकतम गति:",
      options: ["50 km/h", "80 km/h", "No limit", "30 km/h"], 
      options_hi: ["50 किमी/घंटा", "80 किमी/घंटा", "कोई सीमा नहीं", "30 किमी/घंटा"],
      correct: 0 
    },
    { 
      q: "When school bus is stopping with red lights:", 
      q_hi: "जब स्कूल बस लाल बत्ती के साथ रुक रही हो:",
      options: ["Overtake quickly", "Stop and wait", "Honk and pass", "Go around"], 
      options_hi: ["जल्दी से ओवरटेक करें", "रुकें और प्रतीक्षा करें", "हॉर्न बजाएं और गुजरें", "घूम कर जाएं"],
      correct: 1 
    },
    { 
      q: "Valid insurance covers:", 
      q_hi: "वैध बीमा कवर करता है:",
      options: ["Driver only", "Vehicle only", "Third party liability", "Fuel cost"], 
      options_hi: ["केवल चालक", "केवल वाहन", "तृतीय पक्ष दायित्व (Third party)", "ईंधन लागत"],
      correct: 2 
    },
    { 
      q: "Free left turn is allowed:", 
      q_hi: "फ्री लेफ्ट टर्न (Free left turn) की अनुमति है:",
      options: ["Always", "If sign permits/signal green", "Never", "At night"], 
      options_hi: ["हमेशा", "यदि संकेत अनुमति देता है/सिग्नल हरा है", "कभी नहीं", "रात में"],
      correct: 1 
    },
    { 
      q: "While parking your car, you must apply:", 
      q_hi: "अपनी कार पार्क करते समय, आपको लगाना चाहिए:",
      options: ["First gear", "Hand brake", "Clutch", "Accelerator"], 
      options_hi: ["पहला गियर", "हैंड ब्रेक", "क्लच", "एक्सेलेरेटर"],
      correct: 1 
    },
    { 
      q: "To save fuel:", 
      q_hi: "ईंधन बचाने के लिए:",
      options: ["Accelerate harshly", "Keep constant moderate speed", "Use clutch often", "Stop engine at signals"], 
      options_hi: ["तेजी से एक्सीलरेट करें", "निरंतर मध्यम गति रखें", "अक्सर क्लच का प्रयोग करें", "सिग्नल पर इंजन बंद करें"],
      correct: 1 
    },
    { 
      q: "Carrying goods in a private car is:", 
      q_hi: "निजी कार में सामान ढोना:",
      options: ["Allowed", "Prohibited", "Allowed for personal use", "Allowed on roof"], 
      options_hi: ["अनुमति है", "निषिद्ध है", "व्यक्तिगत उपयोग के लिए अनुमति है", "छत पर अनुमति है"],
      correct: 2 
    },
    { 
      q: "If you see a blind person with white cane:", 
      q_hi: "यदि आप सफेद छड़ी के साथ किसी अंधे व्यक्ति को देखते हैं:",
      options: ["Honk loudly", "Stop and let them cross", "Drive around", "Speed up"], 
      options_hi: ["जोर से हॉर्न बजाएं", "रुकें और उन्हें पार करने दें", "घूम कर जाएं", "गति बढ़ाएं"],
      correct: 1 
    },
    { 
      q: "Function of the silencer:", 
      q_hi: "साइलेंसर का कार्य:",
      options: ["Make noise", "Reduce noise", "Increase power", "Cool engine"], 
      options_hi: ["शोर मचाना", "शोर कम करना", "शक्ति बढ़ाना", "इंजन ठंडा करना"],
      correct: 1 
    },
    { 
      q: "Pedestrians have right of way at:", 
      q_hi: "पैदल चलने वालों का पहला अधिकार कहाँ है:",
      options: ["Zebra crossing", "Anywhere", "Traffic signals", "Flyovers"], 
      options_hi: ["जेबरा क्रॉसिंग", "कहीं भी", "ट्रैफिक सिग्नल", "फ्लाईओवर"],
      correct: 0 
    },
    { 
      q: "Use of horn is prohibited near:", 
      q_hi: "हॉर्न का प्रयोग कहाँ प्रतिबंधित है?",
      options: ["Markets", "Courts & Hospitals", "Bus stands", "Police stations"], 
      options_hi: ["बाजार", "कोर्ट और अस्पताल", "बस स्टैंड", "पुलिस स्टेशन"],
      correct: 1 
    },
    { 
      q: "Minimum tread depth for tires:", 
      q_hi: "टायरों के लिए न्यूनतम ट्रेड (Tread) गहराई:",
      options: ["0.5mm", "1.6mm", "3mm", "5mm"], 
      options_hi: ["0.5 मिमी", "1.6 मिमी", "3 मिमी", "5 मिमी"],
      correct: 1 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/3.webp", 
      options: ["One Way", "Straight Prohibited", "No Entry", "Keep Right"], 
      options_hi: ["एक तरफा", "सीधे जाना मना है", "प्रवेश निषेध", "दाएं रहें"],
      correct: 2 
    }
  ],
  medium: [
    { 
      q: "What is the legal blood alcohol limit?", 
      q_hi: "कानूनी रूप से रक्त में अल्कोहल की सीमा क्या है?",
      options: ["30mg/100ml", "0mg", "50mg/100ml", "100mg/100ml"], 
      options_hi: ["30mg/100ml", "0mg", "50mg/100ml", "100mg/100ml"],
      correct: 0 
    },
    { 
      q: "When parking uphill with a curb, wheels should face:", 
      q_hi: "कर्ब (किनारे) के साथ ऊपर की ओर (Uphill) पार्क करते समय, पहियों का मुख होना चाहिए:",
      options: ["Away from curb", "Towards curb", "Straight", "Any direction"], 
      options_hi: ["कर्ब से दूर", "कर्ब की ओर", "सीधे", "किसी भी दिशा में"],
      correct: 0 
    },
    { 
      q: "What is the maximum speed in residential areas (if not marked)?", 
      q_hi: "रिहायशी इलाकों में अधिकतम गति क्या है (यदि चिह्नित न हो)?",
      options: ["30 km/h", "50 km/h", "80 km/h", "No limit"], 
      options_hi: ["30 किमी/घंटा", "50 किमी/घंटा", "80 किमी/घंटा", "कोई सीमा नहीं"],
      correct: 1 
    },
    { 
      q: "When causing an accident, you must report to police within:", 
      q_hi: "दुर्घटना होने पर, आपको पुलिस को कितने समय में रिपोर्ट करनी चाहिए?",
      options: ["12 hours", "24 hours", "48 hours", "7 days"], 
      options_hi: ["12 घंटे", "24 घंटे", "48 घंटे", "7 दिन"],
      correct: 1 
    },
    { 
      q: "What does a flashing red light mean?", 
      q_hi: "चमकती लाल बत्ती का क्या मतलब है?",
      options: ["Stop, look, proceed", "Go fast", "Wait for green", "Do not enter"], 
      options_hi: ["रुकें, देखें, आगे बढ़ें", "तेजी से जाएं", "हरे रंग का इंतजार करें", "प्रवेश न करें"],
      correct: 0 
    },
    { 
      q: "The '3-second rule' applies to:", 
      q_hi: "'3-सेकंड नियम' किस पर लागू होता है?",
      options: ["Following distance", "Parking time", "Traffic light waiting", "Engine warmup"], 
      options_hi: ["गाड़ी के बीच की दूरी (Following distance)", "पार्किंग समय", "ट्रैफिक लाइट प्रतीक्षा", "इंजन वार्मअप"],
      correct: 0 
    },
    { 
      q: "Blue road signs usually indicate:", 
      q_hi: "नीले सड़क संकेत आमतौर पर क्या दर्शाते हैं?",
      options: ["Information/Service", "Ordering/Mandatory", "Warning", "Prohibition"], 
      options_hi: ["जानकारी/सेवा", "आदेश/अनिवार्य", "चेतावनी", "निषेध"],
      correct: 0 
    },
    { 
      q: "Triangular signs with red borders are:", 
      q_hi: "लाल बॉर्डर वाले त्रिकोणीय संकेत होते हैं:",
      options: ["Cautionary", "Mandatory", "Informatory", "Tourist"], 
      options_hi: ["चेतावनी (Cautionary)", "अनिवार्य", "सूचनात्मक", "पर्यटक"],
      correct: 0 
    },
    { 
      q: "Circular signs with Blue background are:", 
      q_hi: "नीले रंग की पृष्ठभूमि वाले गोलाकार संकेत हैं:",
      options: ["Compulsory/Mandatory", "Cautionary", "Informatory", "Destinations"], 
      options_hi: ["अनिवार्य/आदेशात्मक", "चेतावनी", "सूचनात्मक", "गंतव्य"],
      correct: 0 
    },
    { 
      q: "What does a broken white line mean?", 
      q_hi: "टूटी हुई सफेद रेखा का क्या अर्थ है?",
      options: ["Overtaking allowed with care", "No Overtaking", "Stop line", "Parking zone"], 
      options_hi: ["सावधानी के साथ ओवरटेकिंग की अनुमति है", "ओवरटेकिंग नहीं", "स्टॉप लाइन", "पार्किंग क्षेत्र"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/22.jpg", 
      options: ["Restriction Ends", "No Entry", "No Parking", "End of Road"], 
      options_hi: ["प्रतिबंध समाप्त", "प्रवेश निषेध", "नो पार्किंग", "सड़क का अंत"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/2.jpg", 
      options: ["One Way", "Keep Left", "Go Straight", "No Entry"], 
      options_hi: ["एक तरफा", "बाएं रहें", "सीधे जाओ", "प्रवेश निषेध"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/4.jpg", 
      options: ["Left Hairpin Bend", "Left Reverse Bend", "Left Curve", "Narrow Road"], 
      options_hi: ["बायां हेयरपिन बेंड", "बायां रिवर्स बेंड", "बायां वक्र", "संकरी सड़क"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/7.jpg", 
      options: ["Steep Ascent", "Steep Descent", "Falling Rocks", "Hump"], 
      options_hi: ["खड़ी चढ़ाई (Steep Ascent)", "खड़ी ढलान", "गिरती चट्टानें", "कूबड़"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/35.jpg", 
      options: ["Loose Gravel", "Slippery Road", "Falling Rocks", "Men at Work"], 
      options_hi: ["बिखरी बजरी (Loose Gravel)", "फिसलन वाली सड़क", "गिरती चट्टानें", "काम चालू है"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/informatory/3.jpg", 
      options: ["Hospital", "First Aid", "Doctor", "Pharmacy"], 
      options_hi: ["अस्पताल", "प्राथमिक चिकित्सा", "डॉक्टर", "फार्मेसी"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/21.jpg", 
      options: ["Load Limit (Axle)", "Height Limit", "Width Limit", "Speed Limit"], 
      options_hi: ["भार सीमा (एक्सल)", "ऊंचाई सीमा", "चौड़ाई सीमा", "गति सीमा"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/6.jpg", 
      options: ["Trucks Prohibited", "Cars Prohibited", "All Vehicles Prohibited", "Heavy Vehicles Only"], 
      options_hi: ["ट्रक निषिद्ध", "कारें निषिद्ध", "सभी वाहन निषिद्ध", "केवल भारी वाहन"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/18.jpg", 
      options: ["Falling Rocks", "Landslide", "Hill Area", "Quarry"], 
      options_hi: ["गिरती चट्टानें", "भूस्खलन", "पहाड़ी क्षेत्र", "खदान"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/22.jpg", 
      options: ["Side Road Right", "Turn Right", "Y Intersection", "Merge"], 
      options_hi: ["दाईं ओर साइड रोड", "दाएं मुड़ें", "Y चौराहा", "विलय (Merge)"],
      correct: 0 
    },
    { 
      q: "Seat belts are mandatory for:", 
      q_hi: "सीट बेल्ट किसके लिए अनिवार्य है?",
      options: ["Driver only", "Front passengers", "All passengers", "Front & Rear passengers"], 
      options_hi: ["केवल ड्राइवर", "सामने के यात्री", "सभी यात्री", "आगे और पीछे के यात्री"],
      correct: 3 
    },
    { 
      q: "Using mobile while driving attracts:", 
      q_hi: "गाड़ी चलाते समय मोबाइल का उपयोग करने पर क्या होता है?",
      options: ["Fine & License Suspension", "Warning only", "No penalty", "Small fine"], 
      options_hi: ["जुर्माना और लाइसेंस निलंबन", "केवल चेतावनी", "कोई दंड नहीं", "छोटा जुर्माना"],
      correct: 0 
    },
    { 
      q: "What to do if brakes fail?", 
      q_hi: "अगर ब्रेक फेल हो जाएं तो क्या करें?",
      options: ["Pump brakes & downshift", "Pull handbrake hard", "Switch off engine", "Jump out"], 
      options_hi: ["ब्रेक पंप करें और गियर कम करें", "हैंडब्रेक जोर से खींचे", "इंजन बंद करें", "कूद जाएं"],
      correct: 0 
    },
    { 
      q: "Where is parking prohibited?", 
      q_hi: "पार्किंग कहाँ प्रतिबंधित है?",
      options: ["Near road corners", "In parking lots", "On one-way streets", "In front of shops"], 
      options_hi: ["सड़क के कोनों के पास", "पार्किंग स्थल में", "वन-वे सड़कों पर", "दुकानों के सामने"],
      correct: 0 
    },
    { 
      q: "Meaning of 'Give Way' sign:", 
      q_hi: "'रास्ता दें' (Give Way) संकेत का अर्थ:",
      options: ["Yield to other traffic", "Stop completely", "Go fast", "Parking allowed"], 
      options_hi: ["अन्य यातायात को रास्ता दें", "पूरी तरह रुकें", "तेजी से जाएं", "पार्किंग की अनुमति है"],
      correct: 0 
    },
    { 
      q: "Minimum tread depth for tires:", 
      q_hi: "टायरों के लिए न्यूनतम ट्रेड (Tread) गहराई:",
      options: ["1.6mm", "0.5mm", "3mm", "5mm"], 
      options_hi: ["1.6 मिमी", "0.5 मिमी", "3 मिमी", "5 मिमी"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/27.jpg", 
      options: ["Compulsory Ahead or Left", "Left Turn Only", "No Right Turn", "Keep Left"], 
      options_hi: ["अनिवार्य रूप से आगे या बाएं", "केवल बाएं मुड़ें", "दाएं मुड़ना मना है", "बाएं रहें"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/32.jpg", 
      options: ["Dangerous Dip", "Hump", "Rough Road", "River"], 
      options_hi: ["खतरनाक ढलान (Dip)", "कूबड़", "खराब सड़क", "नदी"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/19.jpg", 
      options: ["Ferry", "Boat House", "Swimming", "Port"], 
      options_hi: ["नौका (Ferry)", "बोट हाउस", "तैराकी", "बंदरगाह"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/informatory/8.jpg", 
      options: ["No Through Road", "Dead End", "T-Point", "Red Light"], 
      options_hi: ["आगे रास्ता नहीं है", "डेड एंड", "टी-पॉइंट", "लाल बत्ती"],
      correct: 0 
    },
    { 
      q: "Which gear involves maximum fuel consumption?", 
      q_hi: "किस गियर में सबसे अधिक ईंधन की खपत होती है?",
      options: ["1st gear", "Top gear", "Reverse gear", "Neutral"], 
      options_hi: ["पहला गियर", "टॉप गियर", "रिवर्स गियर", "न्यूट्रल"],
      correct: 0 
    },
    { 
      q: "Before overtaking, ensure:", 
      q_hi: "ओवरटेकिंग से पहले सुनिश्चित करें:",
      options: ["Road ahead is clear", "Horn is working", "AC is on", "Music is off"], 
      options_hi: ["आगे की सड़क साफ है", "हॉर्न काम कर रहा है", "एसी चालू है", "संगीत बंद है"],
      correct: 0 
    },
    { 
      q: "While turning left at a junction:", 
      q_hi: "जंक्शन पर बाएं मुड़ते समय:",
      options: ["Stay close to the left", "Swing wide", "Stay in middle", "Close to right"], 
      options_hi: ["बाईं ओर के करीब रहें", "चौड़ा घुमाएं", "बीच में रहें", "दाईं ओर के करीब"],
      correct: 0 
    },
    { 
      q: "While turning right at a junction:", 
      q_hi: "जंक्शन पर दाएं मुड़ते समय:",
      options: ["Move to center/right lane", "Stay left", "Use shoulder", "Cross median"], 
      options_hi: ["केंद्र/दाईं लेन में जाएं", "बाएं रहें", "शोल्डर का उपयोग करें", "मेडियन पार करें"],
      correct: 0 
    },
    { 
      q: "Reaction time increases with:", 
      q_hi: "प्रतिक्रिया समय (Reaction time) किसके साथ बढ़ता है?",
      options: ["Alcohol/Fatigue", "Experience", "Good weather", "Daylight"], 
      options_hi: ["शराब/थकान", "अनुभव", "अच्छा मौसम", "दिन का प्रकाश"],
      correct: 0 
    },
    { 
      q: "Stopping distance = Reaction distance + ?", 
      q_hi: "रुकने की दूरी = प्रतिक्रिया दूरी + ?",
      options: ["Braking distance", "Skid distance", "Thinking distance", "Rolling distance"], 
      options_hi: ["ब्रेकिंग दूरी", "स्किड दूरी", "सोचने की दूरी", "रोलिंग दूरी"],
      correct: 0 
    },
    { 
      q: "Double solid yellow lines mean:", 
      q_hi: "दोहरी ठोस पीली रेखाओं का मतलब है:",
      options: ["No overtaking from either side", "Overtaking allowed", "Parking allowed", "One way"], 
      options_hi: ["दोनों तरफ से ओवरटेकिंग मना है", "ओवरटेकिंग की अनुमति है", "पार्किंग की अनुमति है", "एक तरफा"],
      correct: 0 
    },
    { 
      q: "When following a large truck, increase distance to:", 
      q_hi: "बड़े ट्रक का पीछा करते समय, दूरी बढ़ाएं ताकि:",
      options: ["Check blind spots", "Avoid wind", "Save fuel", "Hear horn"], 
      options_hi: ["ब्लाइंड स्पॉट चेक कर सकें", "हवा से बचें", "ईंधन बचाएं", "हॉर्न सुन सकें"],
      correct: 0 
    },
    { 
      q: "In case of tire blowout:", 
      q_hi: "टायर फटने की स्थिति में:",
      options: ["Hold steering firm, no sudden brake", "Brake hard", "Accelerate", "Turn steering"], 
      options_hi: ["स्टियरिंग मजबूत पकड़ें, अचानक ब्रेक न लगाएं", "जोर से ब्रेक लगाएं", "एक्सीलरेट करें", "स्टियरिंग घुमाएं"],
      correct: 0 
    },
    { 
      q: "If accelerator gets stuck:", 
      q_hi: "यदि एक्सीलरेट अटक जाए:",
      options: ["Shift to Neutral", "Turn off key", "Pull handbrake", "Jump out"], 
      options_hi: ["न्यूट्रल में शिफ्ट करें", "चाबी बंद करें", "हैंडब्रेक खींचे", "कूद जाएं"],
      correct: 0 
    },
    { 
      q: "Meaning of warning sign 'Slippery Road':", 
      q_hi: "चेतावनी संकेत 'फिसलन वाली सड़क' का अर्थ:",
      options: ["Reduce speed", "Increase speed", "Apply brakes", "Stop"], 
      options_hi: ["गति कम करें", "गति बढ़ाएं", "ब्रेक लगाएं", "रुकें"],
      correct: 0 
    },
    { 
      q: "Parking near a fire station entrance:", 
      q_hi: "फायर स्टेशन के प्रवेश द्वार के पास पार्किंग:",
      options: ["Prohibited", "Allowed", "Allowed on weekends", "Allowed for 5 mins"], 
      options_hi: ["निषिद्ध है", "अनुमति है", "सप्ताहांत पर अनुमति है", "5 मिनट के लिए अनुमति है"],
      correct: 0 
    },
    { 
      q: "Color of number plate for private vehicles:", 
      q_hi: "निजी वाहनों के लिए नंबर प्लेट का रंग:",
      options: ["White with Black letters", "Yellow with Black letters", "Black with Yellow letters", "Green"], 
      options_hi: ["काले अक्षरों के साथ सफेद", "काले अक्षरों के साथ पीला", "पीले अक्षरों के साथ काला", "हरा"],
      correct: 0 
    },
    { 
      q: "Color of number plate for commercial vehicles:", 
      q_hi: "वाणिज्यिक (Commercial) वाहनों के लिए नंबर प्लेट का रंग:",
      options: ["Yellow with Black letters", "White", "Black", "Green"], 
      options_hi: ["काले अक्षरों के साथ पीला", "सफेद", "काला", "हरा"],
      correct: 0 
    },
    { 
      q: "Electric vehicle number plate color:", 
      q_hi: "इलेक्ट्रिक वाहन नंबर प्लेट का रंग:",
      options: ["Green", "White", "Yellow", "Red"], 
      options_hi: ["हरा", "सफेद", "पीला", "लाल"],
      correct: 0 
    },
    { 
      q: "What is 'Engine Braking'?", 
      q_hi: "'इंजन ब्रेकिंग' क्या है?",
      options: ["Slowing down by downshifting", "Using brake pedal", "Switching off engine", "Using handbrake"], 
      options_hi: ["गियर कम करके धीमा करना", "ब्रेक पेडल का उपयोग करना", "इंजन बंद करना", "हैंडब्रेक का उपयोग करना"],
      correct: 0 
    },
    { 
      q: "Clutch riding leads to:", 
      q_hi: "क्लच राइडिंग (Clutch riding) से होता है:",
      options: ["Clutch plate wear/damage", "Fuel saving", "Better control", "Speed increase"], 
      options_hi: ["क्लच प्लेट खराब/क्षतिग्रस्त", "ईंधन की बचत", "बेहतर नियंत्रण", "गति में वृद्धि"],
      correct: 0 
    },
    { 
      q: "When overtaking a cyclist, leave gap of:", 
      q_hi: "साइकिल चालक को ओवरटेक करते समय, कितना अंतर छोड़ें:",
      options: ["At least 1 meter", "10 cm", "5 meters", "Touch them"], 
      options_hi: ["कम से कम 1 मीटर", "10 सेमी", "5 मीटर", "उन्हें छूते हुए"],
      correct: 0 
    },
    { 
      q: "Most common cause of skidding:", 
      q_hi: "स्किडिंग (Skidding) का सबसे सामान्य कारण:",
      options: ["Driver error/Speed", "Road fault", "Tires", "Brakes"], 
      options_hi: ["ड्राइवर की गलती/गति", "सड़क की खराबी", "टायर", "ब्रेक"],
      correct: 0 
    },
    { 
      q: "Use of rear fog lights:", 
      q_hi: "रियर फॉग लाइट्स का उपयोग:",
      options: ["Visibility < 100m", "In rain", "At night always", "In tunnel"], 
      options_hi: ["दृश्यता < 100 मीटर", "बारिश में", "रात में हमेशा", "सुरंग में"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/29.jpg", 
      options: ["Compulsory Ahead or Right", "Right Turn Only", "No Left Turn", "Keep Right"], 
      options_hi: ["अनिवार्य रूप से आगे या दाएं", "केवल दाएं मुड़ें", "बाएं मुड़ना मना है", "दाएं रहें"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/29.jpg", 
      options: ["Side Road Right", "Merging Traffic", "Y-Junction", "Turn Right"], 
      options_hi: ["दाईं ओर साइड रोड", "विलय यातायात", "वाई-जंक्शन", "दाएं मुड़ें"],
      correct: 2 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/5.jpg", 
      options: ["Left Turn Prohibited", "Right Turn Prohibited", "One Way", "No Entry"], 
      options_hi: ["बाएं मुड़ना निषिद्ध", "दाएं मुड़ना निषिद्ध", "एक तरफा", "प्रवेश निषेध"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/38.jpg", 
      options: ["Barrier Ahead", "Railway Crossing", "Toll Booth", "Checkpost"], 
      options_hi: ["आगे बैरियर है", "रेलवे क्रॉसिंग", "टोल बूथ", "चेकपोस्ट"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/informatory/1.jpg", 
      options: ["Public Telephone", "Mobile Zone", "Wifi", "Office"], 
      options_hi: ["सार्वजनिक टेलीफोन", "मोबाइल क्षेत्र", "वाईफाई", "कार्यालय"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/14.jpg", 
      options: ["Height Limit", "Width Limit", "Axle Load Limit", "Length Limit"], 
      options_hi: ["ऊंचाई सीमा", "चौड़ाई सीमा", "एक्सल लोड सीमा", "लंबाई सीमा"],
      correct: 2 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/39.jpg", 
      options: ["Gap in Median", "Road Widens", "Narrow Bridge", "Start of Dual Carriageway"], 
      options_hi: ["मध्य में अंतर", "सड़क चौड़ी है", "संकरा पुल", "दोहरे मार्ग की शुरुआत"],
      correct: 3 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/26.jpg", 
      options: ["Keep Left", "Keep Right", "Pass Either Side", "One Way"], 
      options_hi: ["बाएं रहें", "दाएं रहें", "किसी भी तरफ से गुजरें", "एक तरफा"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/10.jpg", 
      options: ["Cycle Crossing", "Cycle prohibited", "Cycle Lane", "Park"], 
      options_hi: ["साइकिल क्रॉसिंग", "साइकिल निषिद्ध", "साइकिल लेन", "पार्क"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/informatory/4.jpg", 
      options: ["First Aid Post", "Hospital", "Bed", "Hotel"], 
      options_hi: ["प्राथमिक चिकित्सा पोस्ट", "अस्पताल", "बिस्तर", "होटल"],
      correct: 0 
    }
  ],
  hard: [
    { 
      q: "When skidding on a wet road, you should:", 
      q_hi: "गीली सड़क पर फिसलते समय, आपको चाहिए:",
      options: ["Steer in direction of skid", "Brake hard", "Accelerate", "Turn opposite to skid"], 
      options_hi: ["फिसलने की दिशा में स्टियरिंग घुमाएं", "जोर से ब्रेक लगाएं", "एक्सीलरेट करें", "फिसलने के विपरीत मुड़ें"],
      correct: 0 
    },
    { 
      q: "What is 'Defensive Driving'?", 
      q_hi: "'डिफेंसिव ड्राइविंग' क्या है?",
      options: ["Anticipating hazards", "Driving slowly", "Driving aggressively", "Obeying signals only"], 
      options_hi: ["खतरों का पूर्वानुमान लगाना", "धीरे चलाना", "आक्रामक रूप से चलाना", "केवल संकेतों का पालन करना"],
      correct: 0 
    },
    { 
      q: "What is the penalty for driving without insurance?", 
      q_hi: "बीमा के बिना गाड़ी चलाने पर क्या दंड है?",
      options: ["Fine and/or Imprisonment", "Warning", "Community Service", "License Cancel"], 
      options_hi: ["जुर्माना और/या कारावास", "चेतावनी", "सामुदायिक सेवा", "लाइसेंस रद्द"],
      correct: 0 
    },
    { 
      q: "In a manual car, 'riding the clutch' means:", 
      q_hi: "मैनुअल कार में, 'राइडिंग द क्लच' का अर्थ है:",
      options: ["Resting foot on clutch pedal", "Pressing clutch fully", "Releasing clutch fast", "Ignoring clutch"], 
      options_hi: ["क्लच पेडल पर पैर रखना", "क्लच को पूरी तरह दबाना", "क्लच को तेजी से छोड़ना", "क्लच को अनदेखा करना"],
      correct: 0 
    },
    { 
      q: "What is 'engine braking'?", 
      q_hi: "'इंजन ब्रेकिंग' क्या है?",
      options: ["Slowing using gears", "Switching off engine", "Using handbrake", "Jamming brakes"], 
      options_hi: ["गियर का उपयोग करके धीमा करना", "इंजन बंद करना", "हैंडब्रेक का उपयोग करना", "ब्रेक जाम करना"],
      correct: 0 
    },
    { 
      q: "At an uncontrolled intersection, right of way belongs to:", 
      q_hi: "अनियंत्रित चौराहे पर, रास्ता देने का अधिकार किसका है:",
      options: ["Vehicle on the right", "Vehicle on the left", "Faster vehicle", "Larger vehicle"], 
      options_hi: ["दाईं ओर का वाहन", "बाईं ओर का वाहन", "तेज़ वाहन", "बड़ा वाहन"],
      correct: 0 
    },
    { 
      q: "When towing a vehicle, the tow rope max length is:", 
      q_hi: "वाहन टो (Tow) करते समय, टो रस्सी की अधिकतम लंबाई होती है:",
      options: ["5 meters", "10 meters", "2 meters", "15 meters"], 
      options_hi: ["5 मीटर", "10 मीटर", "2 मीटर", "15 मीटर"],
      correct: 0 
    },
    { 
      q: "A PUC certificate is valid for (new car):", 
      q_hi: "PUC प्रमाण पत्र (नई कार) के लिए वैध है:",
      options: ["1 year", "6 months", "3 months", "2 years"], 
      options_hi: ["1 साल", "6 महीने", "3 महीने", "2 साल"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/10.jpg", 
      options: ["Handcart Prohibited", "Bullock Cart Prohibited", "Cycle Prohibited", "Pedestrian Prohibited"], 
      options_hi: ["हाथगाड़ी निषिद्ध", "बैलगाड़ी निषिद्ध", "साइकिल निषिद्ध", "पैदल यात्री निषिद्ध"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/25.jpg", 
      options: ["Compulsory Ahead Only", "One Way", "No Turns", "Airport"], 
      options_hi: ["अनिवार्य रूप से केवल आगे", "एक तरफा", "कोई मोड़ नहीं", "हवाई अड्डा"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/26.jpg", 
      options: ["Staggered Intersection", "Cross Road", "Z-Bend", "Zig Zag"], 
      options_hi: ["स्टैगर्ड इंटरसेक्शन", "चौराहा", "जेड-बेंड", "ज़िग ज़ैग"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/8.jpg", 
      options: ["Steep Descent", "Steep Ascent", "Low Gear Area", "Slope"], 
      options_hi: ["खड़ी ढलान (Steep Descent)", "खड़ी चढ़ाई", "लो गियर एरिया", "ढलान"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/17.jpg", 
      options: ["Cattle", "Wild Animals", "Zoo", "Farm"], 
      options_hi: ["मवेशी (Cattle)", "जंगली जानवर", "चिड़ियाघर", "खेत"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/informatory/19.jpg", 
      options: ["Direction Sign", "Destination Sign", "Highway", "Toll Plaza"], 
      options_hi: ["दिशा संकेत", "गंतव्य संकेत", "राजमार्ग", "टोल प्लाजा"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/28.jpg", 
      options: ["Compulsory Keep Left", "Turn Left", "Overtake from Left", "Lane Merge"], 
      options_hi: ["अनिवार्य रूप से बाएं रहें", "बाएं मुड़ें", "बाएं से ओवरटेक करें", "लेन मर्ज"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/33.jpg", 
      options: ["Hump or Rough Road", "Speed Breaker", "Gravel", "Construction"], 
      options_hi: ["कूबड़ या खराब सड़क", "स्पीड ब्रेकर", "बजरी", "निर्माण"],
      correct: 0 
    },
    { 
      q: "Identifying a 'Blind Spot':", 
      q_hi: "'ब्लाइंड स्पॉट' (Blind Spot) की पहचान:",
      options: ["Area not seen in mirrors", "Dark tunnel", "Foggy area", "Night time driving"], 
      options_hi: ["वह क्षेत्र जो शीशों में नहीं दिखता", "अंधेरी सुरंग", "कोहरे वाला क्षेत्र", "रात में ड्राइविंग"],
      correct: 0 
    },
    { 
      q: "Aquaplaning occurs when:", 
      q_hi: "एक्वाप्लानिंग (Aquaplaning) तब होती है जब:",
      options: ["Tires lose contact with road due to water", "Driving in snow", "Brakes overhead", "Engine floods"], 
      options_hi: ["पानी के कारण टायर सड़क से संपर्क खो देते हैं", "बर्फ में ड्राइविंग", "ब्रेक ओवरहेड", "इंजन में पानी भर जाना"],
      correct: 0 
    },
    { 
      q: "Hand signal for slowing down:", 
      q_hi: "धीमा करने के लिए हाथ का संकेत:",
      options: ["Arm extended, palm down, moving up/down", "Arm straight out", "Arm rotating", "Palm facing forward"], 
      options_hi: ["हाथ फैलाकर, हथेली नीचे, ऊपर/नीचे करना", "हाथ सीधा बाहर", "हाथ घुमाना", "हथेली सामने की ओर"],
      correct: 0 
    },
    { 
      q: "What does 'MSM' routine stand for?", 
      q_hi: "'MSM' रूटीन का क्या अर्थ है?",
      options: ["Mirror - Signal - Maneuver", "Make - Signal - Move", "Mirror - Speed - Move", "Motor - Start - Move"], 
      options_hi: ["मिरर - सिग्नल - मैन्यूवर", "मेक - सिग्नल - मूव", "मिरर - स्पीड - मूव", "मोटर - स्टार्ट - मूव"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/32.jpg", 
      options: ["Give Way", "Stop", "Merge", "No Entry"], 
      options_hi: ["रास्ता दें", "रुको", "विलय", "प्रवेश निषेध"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/28.jpg", 
      options: ["Side Road Left", "Turn Left", "Merge Left", "Junction"], 
      options_hi: ["बाईं ओर साइड रोड", "बाएं मुड़ें", "बाएं विलय", "जंक्शन"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/15.jpg", 
      options: ["U-Turn Prohibited", "Right Turn Prohibited", "No Return", "End of Road"], 
      options_hi: ["यू-टर्न निषिद्ध", "दाएं मुड़ना निषिद्ध", "वापसी नहीं", "सड़क का अंत"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/31.jpg", 
      options: ["Roundabout", "Circle", "U-Turn", "Recycle"], 
      options_hi: ["गोल चक्कर", "सर्कल", "यू-टर्न", "रीसायकल"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/14.jpg", 
      options: ["Pedestrian Crossing", "School", "Park", "Walkway"], 
      options_hi: ["पैदल यात्री क्रॉसिंग", "स्कूल", "पार्क", "वॉकवे"],
      correct: 0 
    },
    { 
      q: "Ideally, tire pressure should be checked when:", 
      q_hi: "आदर्श रूप से, टायर के दबाव की जांच कब की जानी चाहिए:",
      options: ["Tires are cold", "After long drive", "While refueling", "Monthly"], 
      options_hi: ["टायर ठंडे हों", "लंबी ड्राइव के बाद", "ईंधन भरते समय", "मासिक"],
      correct: 0 
    },
    { 
      q: "Driving with clutch depressed (Coasting) refers to:", 
      q_hi: "क्लच दबाकर गाड़ी चलाना (कोस्टिंग) का अर्थ है:",
      options: ["Disconnecting engine from wheels", "Reversing", "Parking", "Braking"], 
      options_hi: ["पहियों से इंजन को अलग करना", "रिवर्स करना", "पार्किंग", "ब्रेक लगाना"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/30.jpg", 
      options: ["Compulsory Sound Horn", "No Horn", "Music Allowed", "Speaker"], 
      options_hi: ["अनिवार्य रूप से हॉर्न बजाएं", "हॉर्न नहीं", "संगीत की अनुमति", "स्पीकर"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/24.jpg", 
      options: ["Y-Intersection", "Fork", "Merge", "Split"], 
      options_hi: ["Y-चौराहा", "फॉर्क", "विलय", "विभाजन"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/4.jpg", 
      options: ["Vehicles Prohibited Both Directions", "No Car", "Empty Road", "Private Road"], 
      options_hi: ["दोनों दिशाओं में वाहन निषिद्ध", "कोई कार नहीं", "खाली सड़क", "निजी सड़क"],
      correct: 0 
    },
    { 
      q: "ABS allows you to:", 
      q_hi: "ABS आपको अनुमति देता है:",
      options: ["Steer while braking hard", "Drive faster", "Stop instantly", "Save fuel"], 
      options_hi: ["जोर से ब्रेक लगाते समय स्टियरिंग करना", "तेजी से चलाना", "तुरंत रुकना", "ईंधन बचाना"],
      correct: 0 
    },
    { 
      q: "Registration mark for diplomat vehicles is:", 
      q_hi: "राजनयिक (Diplomat) वाहनों के लिए पंजीकरण चिह्न है:",
      options: ["Blue with White letters", "Red with White letters", "Yellow", "White"], 
      options_hi: ["सफेद अक्षरों के साथ नीला", "सफेद अक्षरों के साथ लाल", "पीला", "सफेद"],
      correct: 0 
    },
    { 
      q: "Section 185 of MV Act refers to:", 
      q_hi: "एमवी (MV) अधिनियम की धारा 185 संबंधित है:",
      options: ["Drunk Driving", "Speeding", "Red light jump", "Parking"], 
      options_hi: ["शराब पीकर गाड़ी चलाना", "तेज़ गति", "लाल बत्ती कूदना", "पार्किंग"],
      correct: 0 
    },
    { 
      q: "Driving without a valid license (Section 181):", 
      q_hi: "वैध लाइसेंस के बिना गाड़ी चलाना (धारा 181):",
      options: ["Fine up to 5000 / Jail", "Warning", "Fine 100", "No penalty"], 
      options_hi: ["5000 तक जुर्माना / जेल", "चेतावनी", "जुर्माना 100", "कोई दंड नहीं"],
      correct: 0 
    },
    { 
      q: "Good Samaritan guidelines protect:", 
      q_hi: "गुड समैरिटन (Good Samaritan) दिशानिर्देश रक्षा करते हैं:",
      options: ["Helpers of accident victims", "Police", "Drivers", "Hospitals"], 
      options_hi: ["दुर्घटना पीड़ितों के मददगार", "पुलिस", "चालक", "अस्पताल"],
      correct: 0 
    },
    { 
      q: "The 'Golden Hour' in accidents refers to:", 
      q_hi: "दुर्घटनाओं में 'गोल्डन ऑवर' (Golden Hour) का अर्थ है:",
      options: ["First hour after trauma", "Sunset", "Sunrise", "Lunch break"], 
      options_hi: ["आघात के बाद का पहला घंटा", "सूर्यास्त", "सूर्योदय", "दोपहर का भोजन"],
      correct: 0 
    },
    { 
      q: "BS-VI refers to:", 
      q_hi: "BS-VI संबंधित है:",
      options: ["Emission Standards", "Engine Power", "Fuel Type", "Tire size"], 
      options_hi: ["उत्सर्जन मानक (Emission Standards)", "इंजन की शक्ति", "ईंधन का प्रकार", "टायर का आकार"],
      correct: 0 
    },
    { 
      q: "FASTag is used for:", 
      q_hi: "फास्टैग (FASTag) का उपयोग किया जाता है:",
      options: ["Electronic Toll Collection", "Speed monitoring", "Tracking", "Parking"], 
      options_hi: ["इलेक्ट्रॉनिक टोल संग्रह", "गति की निगरानी", "ट्रैकिंग", "पार्किंग"],
      correct: 0 
    },
    { 
      q: "Mandatory third-party insurance covers:", 
      q_hi: "अनिवार्य तृतीय-पक्ष बीमा (Third-party insurance) कवर करता है:",
      options: ["Death/Injury to others", "Own car damage", "Driver injury", "Theft"], 
      options_hi: ["दूसरों की मृत्यु/चोट", "अपनी कार का नुकसान", "चालक की चोट", "चोरी"],
      correct: 0 
    },
    { 
      q: "What is 'Tail Swing' in large vehicles?", 
      q_hi: "बड़े वाहनों में 'टेल स्विंग' (Tail Swing) क्या है?",
      options: ["Rear end swinging opposite to turn", "Exhaust movement", "Door opening", "Speed wobble"], 
      options_hi: ["पिछला सिरा मुड़ने के विपरीत झूलना", "निकास आंदोलन", "दरवाजा खोलना", "गति डगमगाना"],
      correct: 0 
    },
    { 
      q: "While driving downhill:", 
      q_hi: "ढलान पर गाड़ी चलाते समय:",
      options: ["Use lower gear", "Neutral", "Switch off", "Brake continuously"], 
      options_hi: ["निचले गियर का उपयोग करें", "न्यूट्रल", "बंद करें", "लगातार ब्रेक लगाएं"],
      correct: 0 
    },
    { 
      q: "Correct hand position on steering wheel:", 
      q_hi: "स्टियरिंग व्हील पर हाथ की सही स्थिति:",
      options: ["10 and 2", "9 and 3", "12 and 6", "One hand"], 
      options_hi: ["10 और 2", "9 और 3", "12 और 6", "एक हाथ"],
      correct: 1 
    },
    { 
      q: "What is 'Hypnosis' on highways?", 
      q_hi: "राजमार्गों पर 'सम्मोहन' (Hypnosis) क्या है?",
      options: ["Drowsiness due to monotony", "Magic", "Sleep", "Speeding"], 
      options_hi: ["एकरसता के कारण उनींदापन", "जादू", "नींद", "तेज़ गति"],
      correct: 0 
    },
    { 
      q: "To jump-start a car, connect Positive to:", 
      q_hi: "कार को जंप-स्टार्ट करने के लिए, पॉजिटिव को कनेक्ट करें:",
      options: ["Positive", "Negative", "Body", "Ground"], 
      options_hi: ["पॉजिटिव (Positive)", "नेगेटिव", "बॉडी", "ग्राउंड"],
      correct: 0 
    },
    { 
      q: "If fire breaks out in engine:", 
      q_hi: "यदि इंजन में आग लग जाए:",
      options: ["Do not open bonnet immediately", "Pour water", "Drive fast", "Open bonnet"], 
      options_hi: ["बोनट तुरंत न खोलें", "पानी डालें", "तेज़ चलाएं", "बोनट खोलें"],
      correct: 0 
    },
    { 
      q: "Safe gap to leave when stopping behind a car:", 
      q_hi: "कार के पीछे रुकते समय छोड़ने के लिए सुरक्षित अंतर:",
      options: ["See their rear tires touching road", "Touch bumper", "5 meters", "1 car length"], 
      options_hi: ["उनके पिछले टायर सड़क को छूते हुए देखें", "बंपर स्पर्श करें", "5 मीटर", "1 कार की लंबाई"],
      correct: 0 
    },
    { 
      q: "Sign 'Restriction Ends' looks like:", 
      q_hi: "'प्रतिबंध समाप्त' (Restriction Ends) संकेत कैसा दिखता है:",
      options: ["White circle with black diagonal band", "Red circle", "Blue rectangle", "Triangle"], 
      options_hi: ["काले विकर्ण बैंड के साथ सफेद वृत्त", "लाल वृत्त", "नीला आयत", "त्रिकोण"],
      correct: 0 
    },
    { 
      q: "Difference between 'Stop' and 'Give Way':", 
      q_hi: "'रुको' (Stop) और 'रास्ता दें' (Give Way) के बीच अंतर:",
      options: ["Stop requires full halt", "Give way needs full halt", "Same", "No difference"], 
      options_hi: ["रुको के लिए पूर्ण विराम की आवश्यकता है", "रास्ता दें के लिए पूर्ण विराम की आवश्यकता है", "वही", "कोई अंतर नहीं"],
      correct: 0 
    },
    { 
      q: "Validity of International Driving Permit:", 
      q_hi: "अंतर्राष्ट्रीय ड्राइविंग परमिट की वैधता:",
      options: ["1 Year", "2 Years", "5 Years", "6 Months"], 
      options_hi: ["1 साल", "2 साल", "5 साल", "6 महीने"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/8.jpg", 
      options: ["Right Turn Prohibited", "U Turn Prohibited", "Overtaking Prohibited", "Parking Prohibited"], 
      options_hi: ["दाएं मुड़ना निषिद्ध", "यू टर्न निषिद्ध", "ओवरटेकिंग निषिद्ध", "पार्किंग निषिद्ध"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/3.jpg", 
      options: ["Right Hairpin Bend", "Right Turn", "Curve", "Loop"], 
      options_hi: ["दाहिना हेयरपिन बेंड", "दाएं मुड़ें", "वक्र", "लूप"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/12.jpg", 
      options: ["Narrow Bridge", "Narrow Road", "Road Ends", "Tunnel"], 
      options_hi: ["संकरा पुल", "संकरी सड़क", "सड़क समाप्त", "सुरंग"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/informatory/5.jpg", 
      options: ["Eating Place", "Restaurant", "Hotel", "Picnic"], 
      options_hi: ["खाने की जगह", "रेस्तरां", "होटल", "पिकनिक"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/13.jpg", 
      options: ["Axle Weight Limit", "Width Limit", "Height Limit", "Speed Limit"], 
      options_hi: ["एक्सल वजन सीमा", "चौड़ाई सीमा", "ऊंचाई सीमा", "गति सीमा"],
      correct: 1 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/23.jpg", 
      options: ["Staggered Intersection", "Split Road", "Farm", "Junction"], 
      options_hi: ["स्टैगर्ड इंटरसेक्शन", "विभाजित सड़क", "खेत", "जंक्शन"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/9.jpg", 
      options: ["U-Turn Prohibited", "Right Turn Prohibited", "Overtaking Prohibited", "Stop"], 
      options_hi: ["यू-टर्न निषिद्ध", "दाएं मुड़ना निषिद्ध", "ओवरटेकिंग निषिद्ध", "रुको"],
      correct: 2 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/2.jpg", 
      options: ["Right Hand Curve", "Left Hand Curve", "Winding Road", "Roundabout"], 
      options_hi: ["दाहिना हाथ वक्र", "बायां हाथ वक्र", "घुमावदार सड़क", "गोल चक्कर"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/mandatory/24.jpg", 
      options: ["Compulsory Ahead or Right", "Right Turn Only", "No Right Turn", "Go Straight"], 
      options_hi: ["अनिवार्य रूप से आगे या दाएं", "केवल दाएं मुड़ें", "दाएं मुड़ना मना है", "सीधे जाओ"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/cautionary/16.jpg", 
      options: ["Men at Work", "School", "Pedestrian", "Playing"], 
      options_hi: ["काम चालू है", "स्कूल", "पैदल यात्री", "खेल रहे हैं"],
      correct: 0 
    },
    { 
      q: "Identify this sign:", 
      q_hi: "इस संकेत को पहचानें:",
      image: "/symbols/informatory/10.jpg", 
      options: ["Parking Both Sides", "Parking Right", "Parking Left", "Taxi Stand"], 
      options_hi: ["दोनों तरफ पार्किंग", "दाएं पार्किंग", "बाएं पार्किंग", "टैक्सी स्टैंड"],
      correct: 0 
    }
  ]
};