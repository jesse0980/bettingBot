const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());

  async function launchFanduel(){
  const fanDuel_browser = await puppeteer.launch({
    headless: false,
    executablePath: 'C:\\Users\\jesse\\Downloads\\chrome-win\\chrome-win\\chrome.exe'
    });
    
    const page = await fanDuel_browser.newPage();

    //set page view port which allows the bot to work like it is in full screen mode
    page.setViewport({ width: 1900, height: 1080 });

    await page.goto('https://sportsbook.fanduel.com');

    await page.waitForTimeout(3000);


    // Click search bar
    let linkSelector = 'a[aria-label="Search"]'; // Using the attribute selector with the substring match
    await page.waitForSelector(linkSelector);
    await page.click(linkSelector);

    await page.waitForTimeout(3000);

    // Type into a text box
    const inputSelector = 'input[type="text"]'; // Replace with the actual selector of your text box
    let textToType = 'Los Angeles Lakers';
    for(let i = 0; i < textToType.length; i++){
      await page.type(inputSelector, textToType[i]);
      await page.waitForTimeout(100);
    }
    

    await page.waitForTimeout(2000);

    //Select Bet 
    linkSelector = 'div[aria-label*="Lakers,"][aria-label*=","][aria-label*=","]'; // Using the attribute selector with the substring match
    await page.waitForSelector(linkSelector);
    await page.click(linkSelector);

    await page.waitForTimeout(2000);



    const inputHandles = await page.$$('input');

    //Input bet
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


    //Click Login
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
  }
  async function launchESPN(){
    //start browser
    const espn_browser = await puppeteer.launch({
      headless: false,
      executablePath: 'C:\\Users\\jesse\\Downloads\\chrome-win\\chrome-win\\chrome.exe'
      });
  
      const espn_page = await espn_browser.newPage();
      
      //Go to page 
      await espn_page.goto('https://espnbet.com/');
  
      await espn_page.waitForTimeout(5000);
  
  
      // Click the search bar 
      let espnLinkSelector = 'input[aria-invalid="false"][aria-label="Search Sportsbook"]'; // Using the attribute selector with the substring match
      await espn_page.waitForSelector(espnLinkSelector);
      await espn_page.click(espnLinkSelector);
      await espn_page.waitForTimeout(3000);

      //Type in desired search
      let textToType = 'Los Angeles Lakers';
      for(let i = 0; i < textToType.length; i++){
        await espn_page.type(espnLinkSelector, textToType[i]);
        await espn_page.waitForTimeout(100);
      }
      
  
      await espn_page.waitForTimeout(3000);

  }

  launchFanduel()
  launchESPN()
  // Keep the browser open until you manually close it
  console.log('Press Ctrl+C to close the browser.');
