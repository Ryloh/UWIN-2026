const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

// Define slides with titles
const SLIDES = [
    { file: 'VisionSection.tsx', name: 'Slide 1 : Vision & Mission' },
    { file: 'ExecutiveSummary.tsx', name: 'Slide 2 : Executive Summary' },
    { file: 'ProblemSolution.tsx', name: 'Slide 3 : Problème & Solution' },
    { file: 'WhyNowSlide.tsx', name: 'Slide 4 : Pourquoi maintenant' },
    { file: 'TrajectorySlide.tsx', name: 'Slide 5 : Trajectoire' },
    { file: 'CybercafeSlide.tsx', name: 'Slide 6 : Cybercafé' },
    { file: 'LeagueSlide.tsx', name: 'Slide 7 : Brique 2 - Ligue' },
    { file: 'PlatformSlide.tsx', name: 'Slide 8 : Brique 3 - Plateforme' },
    { file: 'ProductionSlide.tsx', name: 'Slide 9 : Brique 4 - Production' },
    { file: 'BusinessModelSlide.tsx', name: 'Slide 10 : Modèle économique' },
    { file: 'TeamSlide.tsx', name: 'Slide 11 : Équipe' },
    { file: 'TractionSlide.tsx', name: 'Slide 12 : Traction' },
    { file: 'PartnersRoleSlide.tsx', name: 'Slide 13 : Rôle des partenaires' },
    { file: 'RoadmapSlide.tsx', name: 'Slide 14 : Roadmap' },
    { file: 'NextStepSlide.tsx', name: 'Slide 15 : Prochaine Étape' },
];

const COMPONENT_DIR = path.join(__dirname, '../components/pitch');
const TEMP_FILE_NAME = '_temp_slides.txt';
const TEMP_FILE_PATH = path.join(__dirname, TEMP_FILE_NAME);

function extractContent(filename) {
    const filePath = path.join(COMPONENT_DIR, filename);
    if (!fs.existsSync(filePath)) return `[Fichier non trouvé: ${filename}]`;

    const content = fs.readFileSync(filePath, 'utf8');
    const lines = new Set();
    const orderedLines = [];

    // 1. Extract text between tags: >TEXT<
    const tagRegex = />([^<]+)</g;
    let match;
    while ((match = tagRegex.exec(content)) !== null) {
        let text = match[1].trim();
        // Filtering heuristics to avoid code artifacts
        if (text.length > 2 && !text.includes('var(') && !text.match(/^[0-9]+$/) && !text.includes('=')) {
            if (!lines.has(text)) {
                lines.add(text);
                orderedLines.push(text);
            }
        }
    }

    // 2. Extract string literals in specific props
    const propRegex = /\b(text|label|description|content|title|headline|quote|period|status|name|role|background|experience|category)\s*[:=]\s*["']([^"']+)["']/g;
    while ((match = propRegex.exec(content)) !== null) {
        let text = match[2].trim();
        if (text.length > 2) {
            if (!lines.has(text)) {
                lines.add(text);
                orderedLines.push(text);
            }
        }
    }

    return orderedLines.join('\n');
}

let fullOutput = '';

console.log('Extraction du texte des slides...');

SLIDES.forEach(slide => {
    fullOutput += `${slide.name}\n`;
    fullOutput += `-`.repeat(slide.name.length) + '\n';
    fullOutput += extractContent(slide.file);
    fullOutput += '\n\n' + '='.repeat(40) + '\n\n';
});

// Write to clean temp file
fs.writeFileSync(TEMP_FILE_PATH, fullOutput, { encoding: 'utf8' });

// Use PowerShell to read relative file content as UTF-8 and set clipboard
// We execute from __dirname so we can use relative path causing no quoting issues
try {
    const relativePath = '.\\_temp_slides.txt';
    const result = spawnSync('powershell', ['-Command', `Get-Content -Path "${relativePath}" -Encoding UTF8 | Set-Clipboard`], {
        cwd: __dirname, // Important: context is script dir
        stdio: 'inherit'
    });

    if (result.error) throw result.error;
    console.log('✅ Tout le contenu textuel a été copié dans le presse-papiers (UTF-8) !');
} catch (error) {
    console.error('❌ Erreur lors de la copie dans le presse-papiers :', error.message);
} finally {
    // Cleanup
    if (fs.existsSync(TEMP_FILE_PATH)) {
        fs.unlinkSync(TEMP_FILE_PATH);
    }
}

console.log('📊 Slides traitées : ' + SLIDES.length);
