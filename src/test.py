import time
import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import StaleElementReferenceException
from selenium.webdriver.common.keys import Keys

URL = 'https://sportsbook.fanduel.com'
driver = uc.Chrome()
driver.implicitly_wait(5)
driver.get(URL)
time.sleep(5.0)
print(driver.find_element(By.XPATH, "//a[contains(@href,'/live')]").click())
time.sleep(2.0)

driver.find_element(By.XPATH, "//a[contains(@href,'/live')]//span[text()='" + "Tennis" + "']").click()

time.sleep(3.0)










input("Press Enter to close the browser...")



# Close the browser window
driver.quit()

