package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features ="E:\\SeleniumBDD\\MyPracticeCucumberBDD\\src\\main\\java\\Features\\login.feature",
		glue = {"StepDefinitions"},
		plugin = {"pretty","html:test-output/report.html","json:json-output/cucumber.json","junit:junit_xml/report.xml"},
		dryRun =false,
		monochrome = true,
		strict = true
		
		
		
		
		
		
		)












public class TestRunner {

}
