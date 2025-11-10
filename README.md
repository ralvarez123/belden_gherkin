# belden_gherkin
# for executing just on test case npx cypress run --spec "cypress/e2e/features/home.feature" 



Regression feature - navigation main pages
npx cypress run -e TAGS='@regression1' --browser chrome

Rgerssion home. search 
npx cypress run -e TAGS='@regression' --browser chrome

  command to run headless on chrome 
  npx cypress run --headless --browser chrome

  run find distributor alone or by testrunner
npx cypress run -e TAGS='@regression2' --browser chrome


   When The user choose A-Z
    Then The user should see results sorted by A-Z