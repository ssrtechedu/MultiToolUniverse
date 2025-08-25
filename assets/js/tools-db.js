/**
 * Creates a URL-friendly "slug" from a given string.
 * This is used to generate the folder names for tool categories automatically.
 * Example: "📄 PDF & Document Tools" becomes "pdf-document-tools"
 * @param {string} text The input string (category name).
 * @returns {string} The URL-friendly slug.
 */
const createSlug = (text) => {
    return text
        .toString()
        .toLowerCase()
        .replace(/📄|✍️|🎨|👨‍💻|📈|🎓|📊|📏|🛡️|👥|🏠/g, '') // Remove emojis
        .trim()
        .replace(/[^\w\s-]/g, '')    // Remove non-word chars except spaces and hyphens
        .replace(/\s+/g, '-')       // Replace spaces with hyphens
        .replace(/-+/g, '-');      // Replace multiple hyphens with a single one
};

const toolsData = {
    "📄 PDF & Document Tools": {
        icon: "bi-file-earmark-pdf-fill",
        tools: [
            { name: "PDF Merger", icon: "bi-files", url: `tools/${createSlug("📄 PDF & Document Tools")}/pdf-merger.html` },
            { name: "PDF Splitter", icon: "bi-scissors", url: `tools/${createSlug("📄 PDF & Document Tools")}/pdf-splitter.html` },
            { name: "PDF Compressor", icon: "bi-file-earmark-zip-fill", url: `tools/${createSlug("📄 PDF & Document Tools")}/pdf-compressor.html` },
            { name: "PDF to Word", icon: "bi-file-earmark-word-fill", url: `tools/${createSlug("📄 PDF & Document Tools")}/pdf-to-word.html` },
            { name: "Word to PDF", icon: "bi-file-earmark-font-fill", url: `tools/${createSlug("📄 PDF & Document Tools")}/word-to-pdf.html` },
            { name: "PDF to Excel", icon: "bi-file-earmark-excel-fill", url: `tools/${createSlug("📄 PDF & Document Tools")}/pdf-to-excel.html` },
            { name: "Excel to PDF", icon: "bi-table", url: `tools/${createSlug("📄 PDF & Document Tools")}/excel-to-pdf.html` },
            { name: "PDF to JPG/PNG", icon: "bi-file-earmark-image-fill", url: `tools/${createSlug("📄 PDF & Document Tools")}/pdf-to-jpg-png.html` },
            { name: "JPG/PNG to PDF", icon: "bi-image-fill", url: `tools/${createSlug("📄 PDF & Document Tools")}/jpg-png-to-pdf.html` },
            { name: "HTML to PDF", icon: "bi-filetype-html", url: `tools/${createSlug("📄 PDF & Document Tools")}/html-to-pdf.html` },
            { name: "Screenshot to PDF", icon: "bi-camera-reels-fill", url: `tools/${createSlug("📄 PDF & Document Tools")}/screenshot-to-pdf.html` },
            { name: "eSign PDF", icon: "bi-pen-fill", url: `tools/${createSlug("📄 PDF & Document Tools")}/esign-pdf.html` },
            { name: "PDF Unlocker", icon: "bi-unlock-fill", url: `tools/${createSlug("📄 PDF & Document Tools")}/pdf-unlocker.html` },
            { name: "PDF Protector", icon: "bi-lock-fill", url: `tools/${createSlug("📄 PDF & Document Tools")}/pdf-protector.html` },
            { name: "PDF Page Organizer", icon: "bi-view-stacked", url: `tools/${createSlug("📄 PDF & Document Tools")}/pdf-page-organizer.html` },
            { name: "PDF Page Number Adder", icon: "bi-123", url: `tools/${createSlug("📄 PDF & Document Tools")}/pdf-page-number-adder.html` },
            { name: "PDF Watermark", icon: "bi-droplet-half", url: `tools/${createSlug("📄 PDF & Document Tools")}/pdf-watermark.html` },
            { name: "PDF Notes Highlighter", icon: "bi-highlighter", url: `tools/${createSlug("📄 PDF & Document Tools")}/pdf-notes-highlighter.html` },
            { name: "Resume Builder", icon: "bi-person-vcard-fill", url: `tools/${createSlug("📄 PDF & Document Tools")}/resume-builder.html` },
            { name: "Invoice Generator", icon: "bi-receipt-cutoff", url: `tools/${createSlug("📄 PDF & Document Tools")}/invoice-generator.html` },
            { name: "E-book Creator", icon: "bi-book-half", url: `tools/${createSlug("📄 PDF & Document Tools")}/ebook-creator.html` },
            { name: "PDF Redaction Tool", icon: "bi-eraser-fill", url: `tools/${createSlug("📄 PDF & Document Tools")}/pdf-redaction.html` },
            { name: "PDF Repair Tool", icon: "bi-wrench-adjustable", url: `tools/${createSlug("📄 PDF & Document Tools")}/pdf-repair.html` },
            { name: "PDF to PDF/A Converter", icon: "bi-archive-fill", url: `tools/${createSlug("📄 PDF & Document Tools")}/pdf-to-pdfa.html` },
            { name: "Extract Images from PDF", icon: "bi-images", url: `tools/${createSlug("📄 PDF & Document Tools")}/extract-images-from-pdf.html` },
            { name: "PDF Metadata Editor", icon: "bi-info-circle-fill", url: `tools/${createSlug("📄 PDF & Document Tools")}/pdf-metadata-editor.html` },
            { name: "Scan to PDF with Deskew", icon: "bi-aspect-ratio-fill", url: `tools/${createSlug("📄 PDF & Document Tools")}/scan-to-pdf-deskew.html` },
            { name: "PDF Comparison Tool", icon: "bi-distribute-vertical", url: `tools/${createSlug("📄 PDF & Document Tools")}/pdf-comparison.html` },
            { name: "PDF Flattener", icon: "bi-layers-half", url: `tools/${createSlug("📄 PDF & Document Tools")}/pdf-flattener.html` },
        ]
    },
    "✍️ Text & Content Tools": {
        icon: "bi-fonts",
        tools: [
            { name: "OCR (Image to Text)", icon: "bi-camera-fill", url: `tools/${createSlug("✍️ Text & Content Tools")}/ocr-image-to-text.html` },
            { name: "Handwriting to Text", icon: "bi-pencil-square", url: `tools/${createSlug("✍️ Text & Content Tools")}/handwriting-to-text.html` },
            { name: "Word Counter", icon: "bi-card-text", url: `tools/${createSlug("✍️ Text & Content Tools")}/word-counter.html` },
            { name: "Character Counter", icon: "bi-input-cursor-text", url: `tools/${createSlug("✍️ Text & Content Tools")}/character-counter.html` },
            { name: "Text Diff Checker", icon: "bi-subtract", url: `tools/${createSlug("✍️ Text & Content Tools")}/text-diff-checker.html` },
            { name: "Plagiarism Checker", icon: "bi-search-heart-fill", url: `tools/${createSlug("✍️ Text & Content Tools")}/plagiarism-checker.html` },
            { name: "Grammar Checker", icon: "bi-spellcheck", url: `tools/${createSlug("✍️ Text & Content Tools")}/grammar-checker.html` },
            { name: "Essay Rephraser", icon: "bi-arrow-repeat", url: `tools/${createSlug("✍️ Text & Content Tools")}/essay-rephraser.html` },
            { name: "Text Summarizer", icon: "bi-text-wrap", url: `tools/${createSlug("✍️ Text & Content Tools")}/text-summarizer.html` },
            { name: "Case Converter", icon: "bi-type", url: `tools/${createSlug("✍️ Text & Content Tools")}/case-converter.html` },
            { name: "Lorem Ipsum Generator", icon: "bi-blockquote-left", url: `tools/${createSlug("✍️ Text & Content Tools")}/lorem-ipsum-generator.html` },
            { name: "Random Text Generator", icon: "bi-shuffle", url: `tools/${createSlug("✍️ Text & Content Tools")}/random-text-generator.html` },
            { name: "Fancy Text Generator", icon: "bi-magic", url: `tools/${createSlug("✍️ Text & Content Tools")}/fancy-text-generator.html` },
            { name: "Text-to-Speech", icon: "bi-volume-up-fill", url: `tools/${createSlug("✍️ Text & Content Tools")}/text-to-speech.html` },
            { name: "Speech-to-Text", icon: "bi-mic-fill", url: `tools/${createSlug("✍️ Text & Content Tools")}/speech-to-text.html` },
            { name: "Story Plot Generator", icon: "bi-lightbulb-fill", url: `tools/${createSlug("✍️ Text & Content Tools")}/story-plot-generator.html` },
            { name: "Privacy Policy Generator", icon: "bi-shield-lock-fill", url: `tools/${createSlug("✍️ Text & Content Tools")}/privacy-policy-generator.html` },
        ]
    },
    "🎨 Image, Video & Audio Tools": {
        icon: "bi-image-alt",
        tools: [
            { name: "Image Resizer", icon: "bi-aspect-ratio", url: `tools/${createSlug("🎨 Image, Video & Audio Tools")}/image-resizer.html` },
            { name: "Image Compressor", icon: "bi-arrows-angle-contract", url: `tools/${createSlug("🎨 Image, Video & Audio Tools")}/image-compressor.html` },
            { name: "Image Cropper", icon: "bi-crop", url: `tools/${createSlug("🎨 Image, Video & Audio Tools")}/image-cropper.html` },
            { name: "Image to PNG", icon: "bi-filetype-png", url: `tools/${createSlug("🎨 Image, Video & Audio Tools")}/image-to-png.html` },
            { name: "Image to JPG", icon: "bi-filetype-jpg", url: `tools/${createSlug("🎨 Image, Video & Audio Tools")}/image-to-jpg.html` },
            { name: "WebP Converter", icon: "bi-filetype-webp", url: `tools/${createSlug("🎨 Image, Video & Audio Tools")}/webp-converter.html` },
            { name: "Image Batch Converter", icon: "bi-collection-fill", url: `tools/${createSlug("🎨 Image, Video & Audio Tools")}/image-batch-converter.html` },
            { name: "BG Remover", icon: "bi-person-bounding-box", url: `tools/${createSlug("🎨 Image, Video & Audio Tools")}/image-background-remover.html` },
            { name: "Passport Photo Maker", icon: "bi-person-badge-fill", url: `tools/${createSlug("🎨 Image, Video & Audio Tools")}/passport-photo-maker.html` },
            { name: "Photo to Sketch", icon: "bi-pencil-fill", url: `tools/${createSlug("🎨 Image, Video & Audio Tools")}/photo-to-sketch.html` },
            { name: "Photo Collage Maker", icon: "bi-grid-1x2-fill", url: `tools/${createSlug("🎨 Image, Video & Audio Tools")}/photo-collage-maker.html` },
            { name: "Image Watermark", icon: "bi-water", url: `tools/${createSlug("🎨 Image, Video & Audio Tools")}/image-watermark.html` },
            { name: "Image Color Extractor", icon: "bi-eyedropper", url: `tools/${createSlug("🎨 Image, Video & Audio Tools")}/image-color-extractor.html` },
            { name: "Meme Generator", icon: "bi-emoji-laughing-fill", url: `tools/${createSlug("🎨 Image, Video & Audio Tools")}/meme-generator.html` },
            { name: "GIF Maker", icon: "bi-filetype-gif", url: `tools/${createSlug("🎨 Image, Video & Audio Tools")}/gif-maker.html` },
            { name: "Video Compressor", icon: "bi-camera-video-fill", url: `tools/${createSlug("🎨 Image, Video & Audio Tools")}/video-compressor.html` },
            { name: "Video to Audio", icon: "bi-file-earmark-music-fill", url: `tools/${createSlug("🎨 Image, Video & Audio Tools")}/video-to-audio.html` },
            { name: "Slideshow Maker", icon: "bi-easel-fill", url: `tools/${createSlug("🎨 Image, Video & Audio Tools")}/slideshow-maker.html` },
            { name: "Audio Joiner", icon: "bi-union", url: `tools/${createSlug("🎨 Image, Video & Audio Tools")}/audio-joiner.html` },
            { name: "Audio Noise Remover", icon: "bi-earbuds", url: `tools/${createSlug("🎨 Image, Video & Audio Tools")}/audio-noise-remover.html` },
            { name: "Audio Speed Changer", icon: "bi-speedometer2", url: `tools/${createSlug("🎨 Image, Video & Audio Tools")}/audio-speed-changer.html` },
            { name: "Audio Pitch Changer", icon: "bi-soundwave", url: `tools/${createSlug("🎨 Image, Video & Audio Tools")}/audio-pitch-changer.html` },
            { name: "Screen Recorder", icon: "bi-record-circle-fill", url: `tools/${createSlug("🎨 Image, Video & Audio Tools")}/screen-recorder.html` },
            { name: "Webcam Photo Capture", icon: "bi-webcam-fill", url: `tools/${createSlug("🎨 Image, Video & Audio Tools")}/webcam-photo-capture.html` },
        ]
    },
    "👨‍💻 Developer & Tech Tools": {
        icon: "bi-code-slash",
        tools: [
            { name: "Code Formatter", icon: "bi-braces", url: `tools/${createSlug("👨‍💻 Developer & Tech Tools")}/code-formatter.html` },
            { name: "CSS Minifier", icon: "bi-filetype-css", url: `tools/${createSlug("👨‍💻 Developer & Tech Tools")}/css-minifier.html` },
            { name: "JS Minifier", icon: "bi-filetype-js", url: `tools/${createSlug("👨‍💻 Developer & Tech Tools")}/javascript-minifier.html` },
            { name: "JSON Formatter", icon: "bi-filetype-json", url: `tools/${createSlug("👨‍💻 Developer & Tech Tools")}/json-formatter-validator.html` },
            { name: "JSON to CSV", icon: "bi-arrow-right-square-fill", url: `tools/${createSlug("👨‍💻 Developer & Tech Tools")}/json-to-csv.html` },
            { name: "CSV to JSON", icon: "bi-arrow-left-square-fill", url: `tools/${createSlug("👨‍💻 Developer & Tech Tools")}/csv-to-json.html` },
            { name: "CSV Viewer", icon: "bi-grid-3x3", url: `tools/${createSlug("👨‍💻 Developer & Tech Tools")}/csv-viewer.html` },
            { name: "Regex Tester", icon: "bi-regex", url: `tools/${createSlug("👨‍💻 Developer & Tech Tools")}/regex-tester.html` },
            { name: "Markdown Editor", icon: "bi-markdown-fill", url: `tools/${createSlug("👨‍💻 Developer & Tech Tools")}/markdown-editor.html` },
            { name: "Markdown to HTML", icon: "bi-filetype-md", url: `tools/${createSlug("👨‍💻 Developer & Tech Tools")}/markdown-to-html.html` },
            { name: "HTML to Markdown", icon: "bi-file-earmark-richtext-fill", url: `tools/${createSlug("👨‍💻 Developer & Tech Tools")}/html-to-markdown.html` },
            { name: "URL Encoder/Decoder", icon: "bi-link-45deg", url: `tools/${createSlug("👨‍💻 Developer & Tech Tools")}/url-encoder-decoder.html` },
            { name: "HTML Encoder/Decoder", icon: "bi-file-code-fill", url: `tools/${createSlug("👨‍💻 Developer & Tech Tools")}/html-encoder-decoder.html` },
            { name: "Base64 Encoder/Decoder", icon: "bi-journal-code", url: `tools/${createSlug("👨‍💻 Developer & Tech Tools")}/base64-encoder-decoder.html` },
            { name: "Image to Base64", icon: "bi-card-image", url: `tools/${createSlug("👨‍💻 Developer & Tech Tools")}/image-to-base64.html` },
            { name: "Color Code Picker", icon: "bi-palette2", url: `tools/${createSlug("👨‍💻 Developer & Tech Tools")}/color-code-picker.html` },
            { name: "HTML Table Generator", icon: "bi-table", url: `tools/${createSlug("👨‍💻 Developer & Tech Tools")}/html-table-generator.html` },
            { name: "HTACCESS Redirect Gen", icon: "bi-arrow-left-right", url: `tools/${createSlug("👨‍💻 Developer & Tech Tools")}/htaccess-redirect-generator.html` },
            { name: "Fake Data Generator", icon: "bi-person-lines-fill", url: `tools/${createSlug("👨‍💻 Developer & Tech Tools")}/fake-data-generator.html` },
            { name: "API Request Tester", icon: "bi-hdd-network-fill", url: `tools/${createSlug("👨‍💻 Developer & Tech Tools")}/api-request-tester.html` },
            { name: "AI Chatbot Demo", icon: "bi-robot", url: `tools/${createSlug("👨‍💻 Developer & Tech Tools")}/ai-chatbot-demo.html` },
        ]
    },
    "📈 SEO & Webmaster Tools": {
        icon: "bi-graph-up-arrow",
        tools: [
            { name: "Meta Tag Generator", icon: "bi-tags-fill", url: `tools/${createSlug("📈 SEO & Webmaster Tools")}/meta-tag-generator.html` },
            { name: "Keyword Density", icon: "bi-body-text", url: `tools/${createSlug("📈 SEO & Webmaster Tools")}/keyword-density-checker.html` },
            { name: "Sitemap Generator", icon: "bi-diagram-3-fill", url: `tools/${createSlug("📈 SEO & Webmaster Tools")}/sitemap-generator.html` },
            { name: "Sitemap Validator", icon: "bi-check-circle-fill", url: `tools/${createSlug("📈 SEO & Webmaster Tools")}/sitemap-validator.html` },
            { name: "Robots.txt Generator", icon: "bi-file-text-fill", url: `tools/${createSlug("📈 SEO & Webmaster Tools")}/robots-txt-generator.html` },
            { name: "Google Index Checker", icon: "bi-google", url: `tools/${createSlug("📈 SEO & Webmaster Tools")}/google-index-checker.html` },
            { name: "Domain Authority", icon: "bi-bar-chart-line-fill", url: `tools/${createSlug("📈 SEO & Webmaster Tools")}/domain-authority-checker.html` },
            { name: "Backlink Checker", icon: "bi-link", url: `tools/${createSlug("📈 SEO & Webmaster Tools")}/backlink-checker.html` },
            { name: "Page Speed Checker", icon: "bi-speedometer", url: `tools/${createSlug("📈 SEO & Webmaster Tools")}/page-speed-checker.html` },
            { name: "Mobile-Friendly Test", icon: "bi-phone-fill", url: `tools/${createSlug("📈 SEO & Webmaster Tools")}/mobile-friendly-test.html` },
        ]
    },
    "🎓 Student & Academic Tools": {
        icon: "bi-mortarboard-fill",
        tools: [
            { name: "GPA / CGPA Calculator", icon: "bi-calculator-fill", url: `tools/${createSlug("🎓 Student & Academic Tools")}/gpa-calculator.html` },
            { name: "Flashcard Maker", icon: "bi-card-checklist", url: `tools/${createSlug("🎓 Student & Academic Tools")}/flashcard-maker.html` },
            { name: "MCQ Quiz Generator", icon: "bi-patch-question-fill", url: `tools/${createSlug("🎓 Student & Academic Tools")}/mcq-quiz-generator.html` },
            { name: "Exam Timer", icon: "bi-stopwatch-fill", url: `tools/${createSlug("🎓 Student & Academic Tools")}/exam-timer.html` },
            { name: "ID Card Generator", icon: "bi-person-badge", url: `tools/${createSlug("🎓 Student & Academic Tools")}/id-card-generator.html` },
            { name: "Certificate Generator", icon: "bi-award-fill", url: `tools/${createSlug("🎓 Student & Academic Tools")}/certificate-generator.html` },
            { name: "Equation Editor", icon: "bi-function", url: `tools/${createSlug("🎓 Student & Academic Tools")}/equation-editor.html` },
            { name: "Periodic Table", icon: "bi-border-all", url: `tools/${createSlug("🎓 Student & Academic Tools")}/periodic-table.html` },
            { name: "Equation Balancer", icon: "bi-symmetry-horizontal", url: `tools/${createSlug("🎓 Student & Academic Tools")}/chemistry-equation-balancer.html` },
            { name: "Physics Calculator", icon: "bi-boxes", url: `tools/${createSlug("🎓 Student & Academic Tools")}/physics-formula-calculator.html` },
            { name: "Typing Speed Test", icon: "bi-keyboard-fill", url: `tools/${createSlug("🎓 Student & Academic Tools")}/typing-speed-test.html` },
            { name: "Reading Speed Test", icon: "bi-book-fill", url: `tools/${createSlug("🎓 Student & Academic Tools")}/reading-speed-test.html` },
        ]
    },
    "📊 Calculators & Financial Tools": {
        icon: "bi-calculator",
        tools: [
            { name: "Scientific Calculator", icon: "bi-superscript", url: `tools/${createSlug("📊 Calculators & Financial Tools")}/scientific-calculator.html` },
            { name: "Percentage Calculator", icon: "bi-percent", url: `tools/${createSlug("📊 Calculators & Financial Tools")}/percentage-calculator.html` },
            { name: "Discount Calculator", icon: "bi-tag-fill", url: `tools/${createSlug("📊 Calculators & Financial Tools")}/discount-calculator.html` },
            { name: "Age Calculator", icon: "bi-cake2-fill", url: `tools/${createSlug("📊 Calculators & Financial Tools")}/age-calculator.html` },
            { name: "Date Calculator", icon: "bi-calendar-date-fill", url: `tools/${createSlug("📊 Calculators & Financial Tools")}/date-calculator.html` },
            { name: "Loan / EMI Calculator", icon: "bi-bank", url: `tools/${createSlug("📊 Calculators & Financial Tools")}/loan-emi-calculator.html` },
            { name: "Interest Calculator", icon: "bi-graph-up", url: `tools/${createSlug("📊 Calculators & Financial Tools")}/interest-calculator.html` },
            { name: "Retirement Calculator", icon: "bi-piggy-bank-fill", url: `tools/${createSlug("📊 Calculators & Financial Tools")}/retirement-calculator.html` },
            { name: "Currency Converter", icon: "bi-currency-exchange", url: `tools/${createSlug("📊 Calculators & Financial Tools")}/currency-converter.html` },
            { name: "Fuel Cost Calculator", icon: "bi-fuel-pump-fill", url: `tools/${createSlug("📊 Calculators & Financial Tools")}/fuel-cost-calculator.html` },
            { name: "Unit Price Calculator", icon: "bi-cart-fill", url: `tools/${createSlug("📊 Calculators & Financial Tools")}/unit-price-calculator.html` },
            { name: "Bill Splitter", icon: "bi-people-fill", url: `tools/${createSlug("📊 Calculators & Financial Tools")}/bill-splitter.html` },
            { name: "Tip Calculator", icon: "bi-cash", url: `tools/${createSlug("📊 Calculators & Financial Tools")}/tip-calculator.html` },
            { name: "Budget Planner", icon: "bi-wallet2", url: `tools/${createSlug("📊 Calculators & Financial Tools")}/budget-planner.html` },
            { name: "Shopping List Price Estimator", icon: "bi-basket-fill", url: `tools/${createSlug("📊 Calculators & Financial Tools")}/shopping-list-price-estimator.html` },
            { name: "Electricity Bill Calculator", icon: "bi-lightning-charge-fill", url: `tools/${createSlug("📊 Calculators & Financial Tools")}/electricity-bill-calculator.html` },
        ]
    },
    "📏 Unit Converter Tools": {
        icon: "bi-rulers",
        tools: [
            { name: "Length Converter", icon: "bi-arrows-fullscreen", url: `tools/${createSlug("📏 Unit Converter Tools")}/length-converter.html` },
            { name: "Weight Converter", icon: "bi-box-fill", url: `tools/${createSlug("📏 Unit Converter Tools")}/weight-converter.html` },
            { name: "Temperature Converter", icon: "bi-thermometer-half", url: `tools/${createSlug("📏 Unit Converter Tools")}/temperature-converter.html` },
            { name: "Volume Converter", icon: "bi-funnel-fill", url: `tools/${createSlug("📏 Unit Converter Tools")}/volume-converter.html` },
            { name: "Speed Converter", icon: "bi-sign-turn-right-fill", url: `tools/${createSlug("📏 Unit Converter Tools")}/speed-converter.html` },
            { name: "Area Converter", icon: "bi-textarea-resize", url: `tools/${createSlug("📏 Unit Converter Tools")}/area-converter.html` },
            { name: "Pressure Converter", icon: "bi-speedometer", url: `tools/${createSlug("📏 Unit Converter Tools")}/pressure-converter.html` },
            { name: "Energy Converter", icon: "bi-fire", url: `tools/${createSlug("📏 Unit Converter Tools")}/energy-converter.html` },
            { name: "Data Storage Converter", icon: "bi-device-hdd-fill", url: `tools/${createSlug("📏 Unit Converter Tools")}/data-storage-converter.html` },
            { name: "Fuel Efficiency Converter", icon: "bi-ev-station-fill", url: `tools/${createSlug("📏 Unit Converter Tools")}/fuel-efficiency-converter.html` },
            { name: "Angle Converter", icon: "bi-triangle-half", url: `tools/${createSlug("📏 Unit Converter Tools")}/angle-converter.html` },
            { name: "Time Zone Converter", icon: "bi-globe-americas", url: `tools/${createSlug("📏 Unit Converter Tools")}/time-zone-converter.html` },
            { name: "Recipe Converter", icon: "bi-egg-fried", url: `tools/${createSlug("📏 Unit Converter Tools")}/recipe-converter.html` },
            { name: "Roman Numeral Converter", icon: "bi-bank2", url: `tools/${createSlug("📏 Unit Converter Tools")}/roman-numeral-converter.html` },
            { name: "Number Base Converter", icon: "bi-hash", url: `tools/${createSlug("📏 Unit Converter Tools")}/number-base-converter.html` },
            { name: "Unit Prefix Converter", icon: "bi-infinity", url: `tools/${createSlug("📏 Unit Converter Tools")}/scientific-unit-prefix-converter.html` },
        ]
    },
    "🛡️ Security & Network Tools": {
        icon: "bi-shield-shaded",
        tools: [
            { name: "Password Generator", icon: "bi-key-fill", url: `tools/${createSlug("🛡️ Security & Network Tools")}/password-generator.html` },
            { name: "MD5 Hash Generator", icon: "bi-hash", url: `tools/${createSlug("🛡️ Security & Network Tools")}/md5-hash-generator.html` },
            { name: "SHA256 Hash Generator", icon: "bi-hash", url: `tools/${createSlug("🛡️ Security & Network Tools")}/sha256-hash-generator.html` },
            { name: "UUID Generator", icon: "bi-node-plus-fill", url: `tools/${createSlug("🛡️ Security & Network Tools")}/uuid-generator.html` },
            { name: "IP Address Lookup", icon: "bi-geo-alt-fill", url: `tools/${createSlug("🛡️ Security & Network Tools")}/ip-address-lookup.html` },
            { name: "IP Geolocation", icon: "bi-map-fill", url: `tools/${createSlug("🛡️ Security & Network Tools")}/ip-geolocation-finder.html` },
            { name: "Whois Lookup", icon: "bi-question-circle-fill", url: `tools/${createSlug("🛡️ Security & Network Tools")}/whois-lookup.html` },
            { name: "SSL Certificate Checker", icon: "bi-file-lock2-fill", url: `tools/${createSlug("🛡️ Security & Network Tools")}/ssl-certificate-checker.html` },
            { name: "HTTP Headers Checker", icon: "bi-file-binary-fill", url: `tools/${createSlug("🛡️ Security & Network Tools")}/http-headers-checker.html` },
            { name: "URL Shortener", icon: "bi-link-45deg", url: `tools/${createSlug("🛡️ Security & Network Tools")}/url-shortener.html` },
            { name: "Internet Speed Test", icon: "bi-wifi", url: `tools/${createSlug("🛡️ Security & Network Tools")}/internet-speed-test.html` },
        ]
    },
    "👥 Social Media Tools": {
        icon: "bi-share-fill",
        tools: [
            { name: "YT Thumbnail Downloader", icon: "bi-youtube", url: `tools/${createSlug("👥 Social Media Tools")}/youtube-thumbnail-downloader.html` },
            { name: "YT Tags Extractor", icon: "bi-tags-fill", url: `tools/${createSlug("👥 Social Media Tools")}/youtube-tags-extractor.html` },
            { name: "Instagram Photo DL", icon: "bi-instagram", url: `tools/${createSlug("👥 Social Media Tools")}/instagram-photo-downloader.html` },
            { name: "Social Video DL", icon: "bi-camera-video-off-fill", url: `tools/${createSlug("👥 Social Media Tools")}/social-media-video-downloader.html` },
            { name: "Hashtag Generator", icon: "bi-hash", url: `tools/${createSlug("👥 Social Media Tools")}/hashtag-generator.html` },
            { name: "Social Post Generator", icon: "bi-megaphone-fill", url: `tools/${createSlug("👥 Social Media Tools")}/social-media-post-generator.html` },
            { name: "Twitter Char Counter", icon: "bi-twitter-x", url: `tools/${createSlug("👥 Social Media Tools")}/twitter-character-counter.html` },
            { name: "Emoji Keyboard", icon: "bi-emoji-smile-fill", url: `tools/${createSlug("👥 Social Media Tools")}/emoji-keyboard.html` },
        ]
    },
    "🏠 Everyday Life & Miscellaneous Tools": {
        icon: "bi-house-heart-fill",
        tools: [
            { name: "QR Code Generator", icon: "bi-qr-code", url: `tools/${createSlug("🏠 Everyday Life & Miscellaneous Tools")}/qr-code-generator.html` },
            { name: "Barcode Generator", icon: "bi-upc-scan", url: `tools/${createSlug("🏠 Everyday Life & Miscellaneous Tools")}/barcode-generator.html` },
            { name: "To-Do List", icon: "bi-list-check", url: `tools/${createSlug("🏠 Everyday Life & Miscellaneous Tools")}/todo-list.html` },
            { name: "Grocery List Maker", icon: "bi-cart4", url: `tools/${createSlug("🏠 Everyday Life & Miscellaneous Tools")}/grocery-list-maker.html` },
            { name: "Health Tracker", icon: "bi-heart-pulse-fill", url: `tools/${createSlug("🏠 Everyday Life & Miscellaneous Tools")}/health-tracker.html` },
            { name: "BMI Calculator", icon: "bi-person-fill", url: `tools/${createSlug("🏠 Everyday Life & Miscellaneous Tools")}/bmi-calculator.html` },
            { name: "Calorie Calculator", icon: "bi-fire", url: `tools/${createSlug("🏠 Everyday Life & Miscellaneous Tools")}/calorie-calculator.html` },
            { name: "Ovulation Calculator", icon: "bi-calendar-heart-fill", url: `tools/${createSlug("🏠 Everyday Life & Miscellaneous Tools")}/ovulation-pregnancy-calculator.html` },
            { name: "Baby Growth Chart", icon: "bi-graph-up", url: `tools/${createSlug("🏠 Everyday Life & Miscellaneous Tools")}/baby-growth-chart.html` },
            { name: "Birthday Reminder", icon: "bi-gift-fill", url: `tools/${createSlug("🏠 Everyday Life & Miscellaneous Tools")}/birthday-reminder.html` },
            { name: "Decision Maker", icon: "bi-bullseye", url: `tools/${createSlug("🏠 Everyday Life & Miscellaneous Tools")}/random-decision-maker.html` },
            { name: "Flip a Coin", icon: "bi-coin", url: `tools/${createSlug("🏠 Everyday Life & Miscellaneous Tools")}/coin-flip-simulator.html` },
            { name: "Dice Roller", icon: "bi-dice-5-fill", url: `tools/${createSlug("🏠 Everyday Life & Miscellaneous Tools")}/dice-roller.html` },
            { name: "Random Number Gen", icon: "bi-dice-3-fill", url: `tools/${createSlug("🏠 Everyday Life & Miscellaneous Tools")}/random-number-generator.html` },
            { name: "Lottery Number Gen", icon: "bi-ticket-perforated-fill", url: `tools/${createSlug("🏠 Everyday Life & Miscellaneous Tools")}/lottery-number-generator.html` },
            { name: "Business Name Gen", icon: "bi-lightbulb", url: `tools/${createSlug("🏠 Everyday Life & Miscellaneous Tools")}/business-name-generator.html` },
            { name: "Language Translator", icon: "bi-translate", url: `tools/${createSlug("🏠 Everyday Life & Miscellaneous Tools")}/language-translator.html` },
            { name: "Wedding Invitation Gen", icon: "bi-envelope-heart-fill", url: `tools/${createSlug("🏠 Everyday Life & Miscellaneous Tools")}/wedding-invitation-generator.html` },
            { name: "Horoscope Tool", icon: "bi-stars", url: `tools/${createSlug("🏠 Everyday Life & Miscellaneous Tools")}/horoscope-tool.html` },
            { name: "Leap Year Checker", icon: "bi-calendar3-fill", url: `tools/${createSlug("🏠 Everyday Life & Miscellaneous Tools")}/leap-year-checker.html` },
            { name: "Numerology Calculator", icon: "bi-calculator", url: `tools/${createSlug("🏠 Everyday Life & Miscellaneous Tools")}/name-numerology-calculator.html` },
        ]
    }
};