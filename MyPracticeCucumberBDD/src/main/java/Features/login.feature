Feature: FREE CRM login feature

#with Examples Keyword
#Scenario: Free CRM login scenario

#Given user is already on login page
#When  The title of the login page is FREE CRM
#Then  User enters "sumi12" and "Nupur1279"
#Then  User clicks on login button
#Then  verify user is on homepage
#Then user closes the browser


Scenario Outline: Free CRM Data Driven testing login scenario

Given user is already on login page
When  The title of the login page is FREE CRM
Then  User enters "<username>" and "<password>"
Then  User clicks on login button
Then  verify user is on homepage
Then user closes the browser

Examples:
		|username |password  |
		|rozz12	  |rozz12@    |	
		|justin12 |justin12@  |	