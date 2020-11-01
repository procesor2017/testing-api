# Testing-api - How to test api

## [Docker](https://hub.docker.com/repository/docker/procesor/apiapp) | [Tesena](https://www.tesena.com/)


## Basic Info
Repository shows how to buid own api, with build, test and deploy on web.

## Folder structure
Basic folder structure for quick orientation (There are no files that have a clear function like dockerfile)

```
Api-App
└── api                     # There is complete api
│    └── json               # File with saved jokes
│    └── src                # Source code for api-call
│    └── main.py            # Source file for api
│    └── test_main.py       # Pytest for api
└── save_folder             # Folder for uploading file
│    └── hello.csv          # Example file
└── test                    # Folder for covering test
│    └── fastApi.json       # Postman test
└── gitlab-ci.yml           # SetUp Ci
└── ProFile                 # Settings file for heroku
```

## Install
### Docker
- You can using fastApi just in docker
    ```
    $ docker pull procesor/apiapp
    $ docker run procesor/apiapp
    ```
- Insert your browser adress:
    ```
    http://localhost:8000/
    ```
### Local without docker
- Download repository
- Install requirement from requirements.txt
    ```
    pip install -r requirements.txt
    ```
- Go to folder and start uvicorn
    ```
    uvicorn api.main:app
    ```

### How to works on heroku?
- Api-app is host on heroku.com, where it is 550 - 1000 hours / month so sometimes can be unavailable.
- You can find on this [link](https://app-from-api.herokuapp.com/)

## Gitlab-CI
My pipeline is very specific in that I wanted to show different ways how to start test against app.

### Build
Build stage create docker by dockerfile and push it to Container registry
 - For better speed i use: 
    ```
    --cache-from $DOCKER_REGISTRY_IMAGE:latest
    ```
### Test
Under test stage i try to use docker compose for testing aplication in docker with another docker.
- Bcs uvicorn is ASGI server, which means, that it never turn off, you muset use:
    ```
    - docker-compose -f docker-compose.yml up --abort-on-container-exit --exit-code-from postman
   ```
  - Command ```--abort-on-container-exit``` arranges that the docker compose shuts down after one of them shuts down.
  - Command ```--exit-code-from postman``` arranges that the postman docker return exit code so Pipeline knows how test turned out
 
### Deploy
The most boring part in gitlab-ci. Just deploy app to docker and heroku.
