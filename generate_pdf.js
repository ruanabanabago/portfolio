const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const filePath = `file://${path.resolve('cv-ats.html')}`;
    
    await page.goto(filePath, { waitUntil: 'networkidle0' });
    
    await page.pdf({
        path: 'Patryk_Setlak_CV_2026.pdf',
        format: 'A4',
        printBackground: true,
        margin: {
            top: '0px',
            bottom: '0px',
            left: '0px',
            right: '0px'
        }
    });

    await browser.close();
    console.log('PDF generated successfully!');
})();
