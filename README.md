# Home_assignment
An example project of Webdriver.IO using Chromedriver.

### Prerequisites for testing
```git clone``` the project to your machine. 
Make sure to have  [Git](https://git-scm.com) installed.

```npm install``` in the root folder of the cloned project to install dependencies.
Make sure to have [NodeJs](https://nodejs.org/en/) installed.

### Running tests
```npm run test``` - run all tests and open Allure reporter.

```npm run apply``` - run --spec test/specs/ApplyHere.ts.

```npm run maxInstalment``` - run --spec test/specs/MaxSampleInstalment.ts.

```npm run schedule``` - run --spec test/specs/PaymentSchedule.ts.

```npm run instalment``` - run --spec test/specs/SampleInstalment.ts.

### Test results
Test results will be displayed in the terminal after running all tests. 

```npm run report``` - to open Allure reporter. 

### Reasons for choosing TypeScript
I use TypeScript because it is a type version of javascript with some added features.

### Reasons for choosing Webdriver.IO
I use Webdriver.IO because I have previous experience with it.

### Test case introduction
``test/specs/ApplyHere.ts``

TC 1 - Should confirm correct navigation by clicking on "Apply here" button.

TC 2 - Should navigate to maximum monthly instalment and click on "Apply here" button.


``test/specs/MaxSampleInstalment.ts``

TC 1 - Should check for error message when income is < 800. - FAILS on purpose.

``test/specs/PaymentSchedule.ts``

TC 1 - Should confirm correct navigation by clicking on "Payment schedule" button.

``test/specs/SampleInstalment.ts``

TC 1 - Should enter leasing data as a private person & confirm calculator change.

### Chromedriver
Current Cromedriver version 108.0.0.

```npm install chromedriver --save-dev``` to update to lates version if not up to date.

If you have Chrome 106 installed on your machine do
```npm install chromedriver@106 --save-dev```

Chromedriver version 106.0.0 +

After running ```npm install chromedriver --save-dev``` make sure to copy ```"del": "^6.1.1",``` dependencie to package-lock.json "node_modules/chromedriver" and run ```npm install```.
