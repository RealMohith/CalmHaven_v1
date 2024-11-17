# CalmHaven_v1

## Backend

### API’s

- Users :
    
    
    - http://localhost:8000/api/Users/Login
        
        POST:
        
        ```json
        {
          "name": "mohith",
          "password": "123"
        }
        ```
        
        Response :
        
        ```json
        { 
        	"msg" : "Logged in Successfully" ,
        	"token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibW9oaXRoIn0.BA-741VBIYXE6pMxd-xsEcSK8GA91Ol1mXFv0BnID1c"
        }
        ```
        
    - http://localhost:8000/api/Users/Signup
        
        POST:
        
        ```json
        {
          "name": "mohith",
          "password": "123"
        }
        ```
        
        Response :
        
        ```json
        {
        	"msg" : "User created successfully at ${Date}"
        	"token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibW9oaXRoIn0.BA-741VBIYXE6pMxd-xsEcSK8GA91Ol1mXFv0BnID1c"
        }
        ```
        
    
    > store the JWT token in Local Storage  with JavaScript
    > 

- Auth Middleware :
    
    
    > add Authorization in header with Bearer before the token
    > 
    
    ```json
    Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWFuaXNoYSIsImlhdCI6MTczMTgxMDUyMSwiZXhwIjoxNzMxODE0MTIxfQ.oOp9cDPKB8pl5UeRG3AExPPM0lm9Axq5LKnj9RTRcIw
    ```
    
    Response : 
    
    ```json
    it adds the username into “req.Bearing_User” which can be accessed by the next routes
    ```
    

- Todo :
    - http://localhost:8000/api/Todo/DietData
        
        GET:
        
        > Users must be logged in. The data array, dynamically generated for each week, should be used to display the diet plan in the frontend.
        > 
        
        ```json
        {
          "msg": "displaying Diet Plan 1",
          "data": [
            {
              "day": "Day 1",
              "breakfast": "Oatmeal with banana",
              "lunch": "Grilled chicken with brown rice",
              "dinner": "Baked salmon with quinoa"
            },
            {
              "day": "Day 2",
              "breakfast": "Greek yogurt with berries",
              "lunch": "Turkey and avocado wrap",
              "dinner": "Shrimp and vegetable stir-fry"
            },
            {
              "day": "Day 3",
              "breakfast": "Scrambled eggs with whole wheat toast",
              "lunch": "Chicken Caesar salad",
              "dinner": "Grilled steak with roasted vegetables"
            },
            {
              "day": "Day 4",
              "breakfast": "Avocado toast with poached eggs",
              "lunch": "Chicken and quinoa bowl",
              "dinner": "Baked chicken with sweet potato"
            },
            {
              "day": "Day 5",
              "breakfast": "Smoothie bowl with banana and almond milk",
              "lunch": "Grilled chicken with mixed greens salad",
              "dinner": "Shrimp and pasta with marinara sauce"
            },
            {
              "day": "Day 6",
              "breakfast": "Omelette with vegetables",
              "lunch": "Turkey and cheese sandwich",
              "dinner": "Grilled chicken with roasted broccoli"
            },
            {
              "day": "Day 7",
              "breakfast": "Breakfast burrito with scrambled eggs and sausage",
              "lunch": "Chicken quesadilla",
              "dinner": "Baked chicken with mashed potatoes"
            }
          ]
        }
        ```
        
    - http://localhost:8000/api/Todo/DietProgress
        
        PUT:
        
        > make a call to this endpoint whenever a checkbox is ticked with the following body
        > 
        
        ```json
        {
        	"progressBar" : 2  //value between 0,1,2
        }
        ```
        
        Response :
        
        > The database updates the progressBar for the current week.
        > 
        
        ```json
        {
            "msg": "updated successfully"
        }
        ```
        

## Steps to access the codebase :

1. run the following in terminal
    
    **`git clone [https://github.com/RealMohith/CalmHaven_v1](https://github.com/RealMohith/CalmHaven_v1)`**
    
    `cd Backend`
    
    `npm install`
    
2. add the following files
    
    .env  
    
    ```
    MONGODB_URL = <your mongoose url>/CalmHavenDB
    PORT = <url desired port preferably 8000 >
    JWT_SECRET_KEY = <some string>
    
    //replace <> with your values
    ```
    

1. run the following in terminal
    
    `node server.js`