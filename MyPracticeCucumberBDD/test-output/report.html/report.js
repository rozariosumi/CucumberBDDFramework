$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/E:/SeleniumBDD/MyPracticeCucumberBDD/src/main/java/Features/login.feature");
formatter.feature({
  "name": "FREE CRM login feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Free CRM Data Driven testing login scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "name": "The title of the login page is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "name": "verify user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "rozz12",
        "rozz12@"
      ]
    },
    {
      "cells": [
        "justin12",
        "justin12@"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Free CRM Data Driven testing login scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStepDefinitions.user_is_already_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The title of the login page is FREE CRM",
  "keyword": "When "
});
formatter.match({
  "location": "loginStepDefinitions.the_title_of_the_login_page_is_FREE_CRM()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"rozz12\" and \"rozz12@\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinitions.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify user is on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinitions.verify_user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinitions.user_closes_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Free CRM Data Driven testing login scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStepDefinitions.user_is_already_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The title of the login page is FREE CRM",
  "keyword": "When "
});
formatter.match({
  "location": "loginStepDefinitions.the_title_of_the_login_page_is_FREE_CRM()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"justin12\" and \"justin12@\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinitions.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify user is on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinitions.verify_user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinitions.user_closes_the_browser()"
});
formatter.result({
  "status": "passed"
});
});