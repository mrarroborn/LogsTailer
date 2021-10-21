This is a log monitoring app that watches a log file on the remote server and post real time updates done to it.

App Walkthrough -:

Client Side -:
 
This is the client interface where user can see real time updates done to the log file. This can be accessed at -:
https://logtailer.azurewebsites.net/log
Client side is implemented by index.html file where it connects the server using web socket. This is responsible of getting updates from server and displaying it on UI.

Server Side API-:
Get all data from Log file -:
Url -: https://logtailer.azurewebsites.net/api/log/get
Method-: GET
This API call is used to get all the data from log file 
 
Add data to Log file -:
Url -: https://logtailer.azurewebsites.net/api/log/add
Method-: POST
This API call is used to append data in the log file
 
Technical Aspects

Deployment Server
App is deployed on Azure App service that is hosted on a windows machine with node js configurations installed.
Client Side (UI/UX)
UI is designed to mimic the Unix feel just as to provide a better user experience.
Client Side (Front End)
Configured web sockets that talk updates from server and pass it to UI where it is displayed in a div.
Server Side (Multi User connection)
It has setup web socket that uniquely identifies a user connected to it.
Server Side (File Monitoring Logic)
This logic use watch function that monitors file and trigger socket to broadcast file updates if there is any change in log file.
Server Side (API Configurations)
API calls are present to cross verify the content of the file and also to add data to file and check in real time the updated communicated to UI.
