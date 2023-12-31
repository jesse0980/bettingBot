from selenium import webdriver


# Specify the path to your ChromeDriver executable
chrome_driver_path = r'C:\path\to\chromedriver.exe'  # Update with your path

# Set up Chrome options
chrome_options = webdriver.ChromeOptions()
chrome_options.binary_location =  r"C:\Users\jesse\Downloads\chrome-win\chrome-win\chrome.exe"  # Replace with the path to your Chromium executable
  # Update with your Chromium path
chrome_options.headless = False  # Set to True for headless mode

# Launch the Chromium browser using ChromeDriver
driver = webdriver.Chrome(executable_path=chrome_driver_path, options=chrome_options)

try:
    # Navigate to a webpage
    driver.get('https://example.com')

    # Extract data (you can customize this based on your needs)
    element = driver.find_element_by_tag_name('h1')
    element_text = element.text
    print('Extracted Text:', element_text)

    # Keep the browser open until the user decides to close it manually
    input('Press Enter to close the browser...')

finally:
    # Close the browser
    driver.quit()
