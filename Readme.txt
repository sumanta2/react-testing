vdo 26 Complete

to start test we need to run npm test or yarn test instead of start

following Playlist: https://youtube.com/playlist?list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd

vdo14

here in package.json script section we create a new script name "coverage" here add the following command

to run this new script in cmd we need to run "npm run coverage"

npm test -- --coverage    here --coverage include all file changes after recent commit of the project

npm test -- --coverage --watchAll   here --watchAll test all testing files present in the project

npm test -- --coverage --watchAll  --collectCoverageFrom='src/components/**/*.{ts,tsx}' here --collectCoverageFrom option we provide specific path of folder or file only which content will be tested here we provide a path which indicate inside src folder's components folder's all file with .(any extension).ts/tsx extension file will be included to tested


npm test -- --coverage --watchAll  --collectCoverageFrom='src/components/**/*.{ts,tsx} --collectCoverageFrom='!src/components/**/*.{types,stories,constants,test,space}.{ts,tsx} '   here 2nd --collectCoverageFrom path i add ! which denoted following selected path will be excluded
 
!!!!# in my case test result display in tabular form but data does not present in table

"jest":{
    "coverageThreshold":{
      "global":{
        "branches":80,
        "functions":80,
        "lines":80,
        "statement":-10
      }
    }
  }  in package.json i used this code for set threshold it means if global threshold(testing) coverage in branches line and function is less then 80% and there are more then 10 unCoverage statement 



vod16

What to test...

1.Test component renders
2.Test component renders with props
3.Test component renders in different states
4.Test component reacts to events

What not to test..

1.Implementation Details
2.Third party code like(if use Material UI which is third party and well tested)
3.Code that is not important from a user point of view