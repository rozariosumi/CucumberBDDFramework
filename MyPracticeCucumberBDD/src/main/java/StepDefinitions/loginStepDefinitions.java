package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class loginStepDefinitions {
	
	WebDriver driver;
	
	@Given("user is already on login page")
	public void user_is_already_on_login_page() {
	
		System.setProperty("webdriver.chrome.driver", "E:\\Selenium tutorial\\chromedriver.exe");
		//System.setProperty("webdriver.chrome.driver", "E:\\SeleniumBDD\\MyPracticeCucumberBDD\\src\\main\\java\\Webdriver\\chromedriver.exe");
		
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(30,TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		
		driver.get("https://classic.crmpro.com/index.html");
		
	}

	@When("The title of the login page is FREE CRM")
	public void the_title_of_the_login_page_is_FREE_CRM() {
		String title = driver.getTitle();
		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);
	  
	}

	@Then("User enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username, String password) {
	
		driver.findElement(By.name("username")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
		
		;
	}

	@Then("User clicks on login button")
	public void user_clicks_on_login_button() {
		
//		WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
		
//		JavascriptExecutor js = (JavascriptExecutor)driver;
//		js.executeScript("arguements[0].click();",loginBtn);
		
		  WebElement loginbtn = driver.findElement(By.xpath("//input[@type='submit']"));
		  
		    JavascriptExecutor js =(JavascriptExecutor)driver;
		    js.executeScript("arguments[0].click();",loginbtn);
			
	}

	@Then("verify user is on homepage")
	public void verify_user_is_on_homepage() throws InterruptedException {
	
//		driver.switchTo().frame("mainpanel");
//		Thread.sleep(3000);
//		String expectedUser =driver.findElement(By.xpath("//td[contains(text(),'User: sumi rozario')]")).getText();
		
		
//		Assert.assertEquals("  User: sumi rozario",expectedUser);
		String homepagetitle = driver.getTitle();
		Assert.assertEquals("CRMPRO",homepagetitle);
	}

	
	@Then("user closes the browser")
	public void user_closes_the_browser() {
	   		driver.quit();
	}

	
	
	
	
	
	

}
