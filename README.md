
This project contains api that returns random quotes related to stoicism.

I've created to access it via Siri Shortcuts every morning when my alarm goes off.

Currently, it isn't deployed anywhere but if you want to then can use the code or wait for me to deploy it.

#How to run
npm install

npm start 

GET: localhost:1337/v1/stoic-quote
output: "data":{
            "quote": {
                "text": "Remember how long you have been putting off these things, and how often you have received an opportunity from the gods, and yet do not use it.",
                "author": "Marcus Aurelius"
            }
        }   
