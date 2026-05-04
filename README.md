## Download Node packages
CD to `(...)/ADForMERecruitment/Frontend`, then run:
```bash
npm install
```

You may need to explicitly allow scripts to run on Windows, e.g. using:
```bash
Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned
```

## Running solution

### Running using Visual Studio
Open the solution, press `Ctrl+Q` (Quick Launch) and search for "Configure startup projects" in Feature Search.
In the Solution Property Pages, select the Common Properties tab, and then select Configure Startup Projects.
In the Configure Startup Projects section, choose the Multiple startup projects radio button.
Select "AD Default Profile" profile. 
Select the OK or Apply button to save the profile.
The created launch profile appears in the toolbar dropdown list, allowing you to select the profile you want to debug.

Click the green "Start" button on the toolbar 
or press `F5` to start debugging, or press `Ctrl+F5` to run without debugging.


### Running using CLI

#### Backend
CD to `(...)/ADForMERecruitment/Backend.Api`, then run:
```bash
dotnet run --launch-profile https
```

#### Frontend
CD to `(...)/ADForMERecruitment/Frontend`, then run:

```bash
ng serve
```

You may need to explicitly allow scripts to run on Windows, e.g. using:
```bash
Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned
```


Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Info

### Main URLs

#### Frontend
`http://localhost:4200/`

#### WebAPI
`https://localhost:7259/`
`http://localhost:5016/`

##### Swagger
`https://localhost:7259/swagger/index.html`
`http://localhost:5016/swagger/index.html`

