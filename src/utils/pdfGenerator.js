// PDF Generation Utility for Fraud Prevention Guide
export const generateFraudPreventionPDF = () => {
  // Create a new window with the HTML content
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fraud Prevention Guide - Government of India</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            color: #333;
            background: white;
        }
        .header {
            text-align: center;
            border-bottom: 3px solid #1e40af;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .header h1 {
            color: #1e40af;
            font-size: 2.5em;
            margin: 0;
        }
        .header .hindi {
            color: #ea580c;
            font-size: 1.8em;
            margin: 10px 0;
        }
        .header .subtitle {
            color: #666;
            font-size: 1.2em;
        }
        .section {
            margin: 30px 0;
            page-break-inside: avoid;
        }
        .section h2 {
            color: #1e40af;
            border-left: 5px solid #ea580c;
            padding-left: 15px;
            font-size: 1.8em;
        }
        .section h3 {
            color: #059669;
            font-size: 1.4em;
            margin-top: 25px;
        }
        .warning-box {
            background: #fef2f2;
            border: 2px solid #dc2626;
            border-radius: 8px;
            padding: 15px;
            margin: 20px 0;
        }
        .warning-box h4 {
            color: #dc2626;
            margin-top: 0;
        }
        .info-box {
            background: #eff6ff;
            border: 2px solid #2563eb;
            border-radius: 8px;
            padding: 15px;
            margin: 20px 0;
        }
        .info-box h4 {
            color: #2563eb;
            margin-top: 0;
        }
        .tips-list {
            background: #f0fdf4;
            border-left: 5px solid #16a34a;
            padding: 15px;
            margin: 20px 0;
        }
        .contact-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin: 20px 0;
        }
        .contact-item {
            background: #f8fafc;
            padding: 15px;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
        }
        .contact-item h4 {
            color: #1e40af;
            margin-top: 0;
        }
        .footer {
            text-align: center;
            margin-top: 50px;
            padding-top: 20px;
            border-top: 2px solid #1e40af;
            color: #666;
        }
        ul, ol {
            padding-left: 25px;
        }
        li {
            margin: 8px 0;
        }
        @media print {
            body { font-size: 12pt; }
            .section { page-break-inside: avoid; }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1 class="hindi">धोखाधड़ी रोकथाम गाइड</h1>
        <h1>Fraud Prevention Guide</h1>
        <p class="subtitle">भारत सरकार | Government of India<br>
        साइबर सुरक्षा विभाग | Cyber Security Department</p>
        <p><strong>Version 2024 | संस्करण 2024</strong></p>
    </div>

    <div class="section">
        <h2>परिचय | Introduction</h2>
        <p>डिजिटल युग में धोखाधड़ी एक बढ़ती हुई समस्या है। यह गाइड नागरिकों, व्यवसायों और संस्थानों को धोखाधड़ी से बचने के लिए व्यापक जानकारी प्रदान करती है।</p>
        <p>In the digital age, fraud is a growing problem. This guide provides comprehensive information to help citizens, businesses, and institutions protect themselves from fraud.</p>
    </div>

    <div class="section">
        <h2>वर्तमान स्थिति | Current Scenario</h2>
        <div class="info-box">
            <h4>महत्वपूर्ण आंकड़े | Key Statistics</h4>
            <ul>
                <li><strong>₹1.38 लाख करोड़</strong> - वार्षिक धोखाधड़ी नुकसान</li>
                <li><strong>16.9 लाख</strong> - पंजीकृत शिकायतें</li>
                <li><strong>85%</strong> - डिजिटल भुगतान धोखाधड़ी</li>
                <li><strong>24x7</strong> - साइबर हेल्पलाइन: 1930</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <h2>सामान्य धोखाधड़ी के प्रकार | Common Fraud Types</h2>
        
        <h3>1. फिशिंग कॉल्स | Phishing Calls</h3>
        <p>बैंक या सरकारी अधिकारी होने का दावा करके OTP या PIN मांगना।</p>
        <div class="warning-box">
            <h4>चेतावनी:</h4>
            <p>बैंक कभी भी फोन पर OTP नहीं मांगता!</p>
        </div>

        <h3>2. फर्जी ईमेल | Fake Emails</h3>
        <p>दुर्भावनापूर्ण लिंक या अटैचमेंट के साथ धोखाधड़ी ईमेल।</p>

        <h3>3. SMS धोखाधड़ी | SMS Fraud</h3>
        <p>खाता ब्लॉक या पुरस्कार जीतने के बारे में फर्जी SMS।</p>

        <h3>4. कार्ड स्किमिंग | Card Skimming</h3>
        <p>फर्जी कार्ड रीडर के माध्यम से कार्ड डेटा चोरी करना।</p>

        <h3>5. फर्जी वेबसाइट | Fake Websites</h3>
        <p>लॉगिन क्रेडेंशियल चुराने के लिए डिज़ाइन की गई क्लोन वेबसाइटें।</p>
    </div>

    <div class="section">
        <h2>रोकथाम दिशानिर्देश | Prevention Guidelines</h2>
        
        <h3>व्यक्तिगत सुरक्षा | Personal Security</h3>
        <div class="tips-list">
            <ul>
                <li>मजबूत पासवर्ड और 2FA का उपयोग करें</li>
                <li>व्यक्तिगत जानकारी को सुरक्षित रखें</li>
                <li>संदिग्ध कॉल/ईमेल की पहचान करें</li>
                <li>नियमित खाता निगरानी करें</li>
            </ul>
        </div>

        <h3>वित्तीय सुरक्षा | Financial Security</h3>
        <div class="tips-list">
            <ul>
                <li>बैंकिंग विवरण कभी साझा न करें</li>
                <li>OTP किसी को न बताएं</li>
                <li>सुरक्षित नेटवर्क का ही उपयोग करें</li>
                <li>लेनदेन अलर्ट सक्षम करें</li>
            </ul>
        </div>

        <h3>डिजिटल सुरक्षा | Digital Security</h3>
        <div class="tips-list">
            <ul>
                <li>ऐप्स को आधिकारिक स्टोर से डाउनलोड करें</li>
                <li>डिवाइस सिक्यूरिटी अपडेट करते रहें</li>
                <li>पब्लिक WiFi से बैंकिंग न करें</li>
                <li>एंटीवायरस सॉफ्टवेयर का उपयोग करें</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <h2>धोखाधड़ी की रिपोर्ट कैसे करें | How to Report Fraud</h2>
        
        <h3>तत्काल कार्रवाई | Immediate Action</h3>
        <div class="warning-box">
            <h4>तुरंत करें:</h4>
            <ul>
                <li>अपने बैंक को तुरंत सूचित करें</li>
                <li>साइबर क्राइम हेल्पलाइन: 1930 पर कॉल करें</li>
                <li>खाते को तुरंत ब्लॉक करवाएं</li>
                <li>लेनदेन विवरण सेव करें</li>
                <li>स्क्रीनशॉट और सबूत इकट्ठा करें</li>
            </ul>
        </div>

        <h3>ऑनलाइन रिपोर्टिंग | Online Reporting</h3>
        <div class="info-box">
            <h4>ऑनलाइन शिकायत दर्ज करें:</h4>
            <ul>
                <li>cybercrime.gov.in पर शिकायत दर्ज करें</li>
                <li>RBI की वेबसाइट पर रिपोर्ट करें</li>
                <li>स्थानीय पुलिस स्टेशन में FIR दर्ज करें</li>
                <li>बैंक के फ्रॉड डिपार्टमेंट को सूचित करें</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <h2>आपातकालीन संपर्क | Emergency Contacts</h2>
        <div class="contact-grid">
            <div class="contact-item">
                <h4>साइबर क्राइम हेल्पलाइन</h4>
                <p><strong>1930</strong><br>24x7 राष्ट्रीय हेल्पलाइन</p>
            </div>
            <div class="contact-item">
                <h4>बैंकिंग लोकपाल</h4>
                <p><strong>14448</strong><br>बैंकिंग शिकायतें</p>
            </div>
            <div class="contact-item">
                <h4>उपभोक्ता हेल्पलाइन</h4>
                <p><strong>1915</strong><br>उपभोक्ता शिकायतें</p>
            </div>
            <div class="contact-item">
                <h4>पुलिस आपातकाल</h4>
                <p><strong>100</strong><br>स्थानीय पुलिस सहायता</p>
            </div>
        </div>
    </div>

    <div class="footer">
        <p><strong>© 2024 भारत सरकार | Government of India</strong></p>
        <p>साइबर सुरक्षा विभाग | Cyber Security Department</p>
        <p>डिजिटल इंडिया पहल के तहत विकसित | Developed under Digital India Initiative</p>
    </div>
</body>
</html>
  `;

  // Create a new window and trigger print
  const printWindow = window.open('', '_blank');
  printWindow.document.write(htmlContent);
  printWindow.document.close();
  
  // Wait for content to load then trigger print dialog
  printWindow.onload = () => {
    setTimeout(() => {
      printWindow.print();
    }, 500);
  };
};

// Alternative function to download as HTML file
export const downloadFraudGuideHTML = () => {
  const htmlContent = document.querySelector('#fraud-guide-html').innerHTML;
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Fraud_Prevention_Guide_2024.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Function to open HTML guide in new tab for printing
export const openFraudGuideForPrint = () => {
  window.open('/assets/fraud-prevention-guide.html', '_blank');
};
