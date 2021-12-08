Project: NordH Task
Technologies : Django, React, MySQL and REST API

This project contain two parts:

1.  Client
2.  Server

# Client:

This part contains project's frontend code


# Server:

This part of project contains django - REST API

## To run both part:

Download / clone repositor

Open two terminal/command prompt/ powershell

### To run front-end

In first terminal

cd client\nordhtask

npm i <= it will install necessary dependencies given in package.json

npm start

in browser open:

localhost:3000  !! or given port id 



### To run back-end

In second terminal

cd server

python -m venv nhvenv

pip install -r requirements.txt

python manage.py runserver

in browser open - http://127.0.0.1:8000/




## To run API documentation - swagger

First run the server

http://127.0.0.1:8000/swagger/


