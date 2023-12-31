import time
import undetected_chromedriver as uc

if __name__ == '__main__':
    driver = uc.Chrome(headless=True, use_subprocess=False)


    driver.get('https://nowsecure.nl')
    print("Passed driver get")
    time.sleep(5.0)

    driver.save_screenshot('nowsecure.png')
