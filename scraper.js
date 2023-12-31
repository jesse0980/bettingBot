const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());

(async () => {
const browser = await puppeteer.launch({
  headless: false,
  executablePath: 'C:\\Users\\jesse\\Downloads\\chrome-win\\chrome-win\\chrome.exe'
  });

  const page = await browser.newPage();

  await page.goto('https://sportsbook.fanduel.com');

  await page.waitForTimeout(3000);


  // Example: Clicking an <a> element containing the word "Soccer" in its title
  let linkSelector = 'a[aria-label="Search"]'; // Using the attribute selector with the substring match
  await page.waitForSelector(linkSelector);
  await page.click(linkSelector);

  await page.waitForTimeout(3000);

  // Type into a text box
  const inputSelector = 'input[type="text"]'; // Replace with the actual selector of your text box
  let textToType = 'Bengals';
  for(let i = 0; i < textToType.length; i++){
    await page.type(inputSelector, textToType[i]);
    await page.waitForTimeout(100);
  }
  

  await page.waitForTimeout(2000);


  linkSelector = 'div[aria-label*="Bengals,"][aria-label*=","][aria-label*=","]'; // Using the attribute selector with the substring match
  await page.waitForSelector(linkSelector);
  await page.click(linkSelector);

  await page.waitForTimeout(2000);



  const inputHandles = await page.$$('input');

  // Check if there is at least a second input element
  if (inputHandles.length >= 2) {
    textToType = '100';
    // Replace 'your text' with the text you want to input
    for(let i = 0; i < textToType.length; i++){
      // Input text into the second input box (index 1 in the array)
      await inputHandles[1].type(textToType[i]);
      await page.waitForTimeout(100);
    }



    // Wait for a moment or for a specific event if needed
    await page.waitForTimeout(1000);
  } 
  else {
    console.error('Second input element not found on the page.');
  }

  let textToFind = 'Log in or join';
  const [login] = await page.$x(`//span[text()="${textToFind}"]`);

  if (login) {
    // Click the span
    await login.click();

    // Wait for a moment or for a specific event if needed
    await page.waitForTimeout(3000);
  } else {
    console.error('Span element not found on the page.');
  }

  // Keep the browser open until you manually close it
  console.log('Press Ctrl+C to close the browser.');
})();
