# Testing-api - How to test api

![Test-api](https://github.com/procesor2017/testing-api/workflows/Test-api/badge.svg)

## [API Documentation](https://testfortesena.docs.apiary.io/) | [Tesena](https://www.tesena.com/)


## Basic Info
Repository shows how to tests api documentation with [dredd](https://dredd.org/en/latest/). Api documentation was created on apiari.com. There is [link](https://testfortesena.docs.apiary.io/)

## Folder structure
```
Testing-api
└── .github/workflows           # Folder with CI for github actions
│    └── test_apidocu.yml       # Config for CI
└── apifortest                  # Folder with blueprint which you can test
│    └── apifortest.apib        # Blueprint generete from apiari
└── dredd                       # Folder with config for dredd
│    └── dredd_apiari.yml       # Dredd config file for connect to apiari.com
│    └── dredd_hooks.yml        # Dredd config file for use hooks.js
│    └── dredd.yml              # Dredd config file for local starting app
└── hooks                       # Folder with config for dredd
│    └── hooks.js               # Example how to use dredds hooks
└── README.MD                   # Here you are :-)
└── package.json                # Repair some err in cmd, files just for npm (Doesnt have any use)
```

## Install
- Make sure you have [Node](https://nodejs.org/en/) or [NPM](https://www.npmjs.com/) installed
    ``` $ npm install -g dredd ```

- If you want have just local starts
    - Go to dredd folder with cd ```<path_to_repository>/dredd```
    - Use command ```dredd```
    - If you want have yourself dredd.yml you can install with ``` dredd wizard```

- If you want use apiari test report
    - Go to dredd folder with cd ```<path_to_repository>/dredd```
    - In file dredd_apiari change two value:
        - apiaryApiKey = Your key for apiari. You can find it udenr Tests/Tutorial after you create your own APi Project
        - apiaryApiName = Your key for apiari. You can find it udenr Tests/Tutorial after you create your own APi Project
    - Use command ```dredd --config dredd_apiari.yml```

- If you want use hooks
    - Go to dredd folder with cd ```<path_to_repository>/dredd```
    - Use command ```dredd -config dredd_hooks.yml```
    - If you want have yourself dredd.yml you can install with ``` dredd wizard```

## Report
Report is set in the dredd/dredd.yml under
```
reporter: [html]
output: [./report/output.html]
``` 



## Link
- [Api documentation](https://testfortesena.docs.apiary.io/)
- [Dredd](https://dredd.org/en/latest/)
- [Examples for hooks](https://github.com/apiaryio/dredd/blob/master/docs/how-to-guides.rst)
- [dredd-hooks-template](https://github.com/apiaryio/dredd-hooks-template)
