// Script to copy all 10 slides code to clipboard in order (UTF-8 compatible)
// Run with: node scripts/copy-slides.js

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const slidesDir = path.join(__dirname, '..', 'components', 'pitch');

const slides = [
    { file: 'VisionSection.tsx', name: 'Slide 1 : Cover (Vision)' },
    { file: 'TeamSlide.tsx', name: 'Slide 2 : La Genèse (Team)' },
    { file: 'ProblemSolution.tsx', name: 'Slide 3 : Le Constat (Problem)' },
    { file: 'WhyNowSlide.tsx', name: 'Slide 4 : L\'Impasse (Why Now)' },
    { file: 'ExecutiveSummary.tsx', name: 'Slide 5 : L\'Urgence (Exec Sum)' },
    { file: 'CybercafeSlide.tsx', name: 'Slide 6 : Le Lieu Social (Cybercafé)' },
    { file: 'ServicesHubSlide.tsx', name: 'Slide 7 : Services (Culture / Création)' },
    { file: 'EconomicHubSlide.tsx', name: 'Slide 8 : Économie (Clubs / Retail)' },
    { file: 'ImpactManifestoSlide.tsx', name: 'Slide 9 : Impact (Manifesto 2x2)' },
    { file: 'PlatformSlide.tsx', name: 'Slide 10 : La Plateforme (Digital)' },
    { file: 'WhatWeAskSlide.tsx', name: 'Slide 11 : La Demande (Request)' },
    { file: 'WhatTheyGainSlide.tsx', name: 'Slide 12 : Le Gain (Benefits)' },
    { file: 'RiskGaurantiesSlide.tsx', name: 'Slide 13 : Risques & Garanties (90-Day Plan)' }
];

let fullContent = '';

console.log('📋 Collecting slides...\n');

let missingCount = 0;

slides.forEach((slide) => {
    const filePath = path.join(slidesDir, slide.file);

    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf-8');

        fullContent += `${'='.repeat(80)}\n`;
        fullContent += `// ${slide.name}\n`;
        fullContent += `// File: ${slide.file}\n`;
        fullContent += `${'='.repeat(80)}\n\n`;
        fullContent += content;
        fullContent += '\n\n\n';

        console.log(`✅ ${slide.name}`);
    } else {
        console.log(`❌ Missing: ${slide.file}`);
        missingCount++;
    }
});

if (missingCount > 0) {
    console.log(`\n⚠️ Warning: ${missingCount} file(s) missing. Copying available slides...`);
}

// Save to temp file first, then copy with PowerShell (preserves UTF-8)
const tempFile = path.join(__dirname, '..', 'all-slides-temp.txt');
fs.writeFileSync(tempFile, fullContent, 'utf-8');

try {
    // Use PowerShell to copy with proper encoding
    execSync(`powershell -command "Get-Content -Path '${tempFile}' -Encoding UTF8 | Set-Clipboard"`, { stdio: 'inherit' });
    console.log('\n✅ All slides copied to clipboard (UTF-8)!');
    console.log(`📊 Total: ${slides.length} slides checked.`);
} catch (error) {
    console.log('\n⚠️ Clipboard failed, check console for details.');
    // Keep file for manual copy
} finally {
    if (fs.existsSync(tempFile)) {
        fs.unlinkSync(tempFile);
    }
}
