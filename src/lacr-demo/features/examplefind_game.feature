Feature: Find the League of Legends Website

@javascript 
Scenario: Search for the website        
 Given I am on the Google homepage
 Then I will search for "lol"
 Then I should see "League of Legends"
 Then I will click the news link