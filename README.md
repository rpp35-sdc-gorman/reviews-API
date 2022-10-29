# Re-engineered Reviews API for project Atelier

This is the API for project Atelier which is an E-commerce application. My team was tasked with rewriting and optimizing the API and I was tasked with handling the reviews component. The goal of this application was to replace the existing API with an optimized version that provided the same functionality. The performance constraints were to optimize the maximum RPS while maintaining less than 2000 ms latencty and less than 1% error rate. For reference, with a AWS T2 medium ubuntu instance, the API was able to process 1700 RPS while maintaining the performance constraint. 

<img width="1440" alt="Screen Shot 2022-08-22 at 9 29 51 PM" src="https://user-images.githubusercontent.com/93630511/198855334-6b81f0df-38b9-4ffc-89fc-2e4aa320bd63.png">


## Authored by:
  [Josh Waalkes](https://github.com/WaalkesJoshua)
  
## To Use: 
 1. Use `git clone` to clone the repo onto an instance.
 2. Set up your PostgreSQL.
  - Change the `host` in queries.js to the appropriate ip address.
  - Run `npm run db-connect`
  - Change users and passwords as appropriate
 3. Run `npm start` to start the server
 4. Run `npm test` to test the service. 
  
