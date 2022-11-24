# Express App

## Create Folder for the application

## Create package.json

```shell
npm init -y
```

or 

```shell
npm init
```

and answer questions.
You can edit the package.json later with editor

The package.json can also be created manually. At least name and version are needed

## install libraries

```shell
npm install express
```

adds all dependencies into the package.json file. Intalled libraries will be in mode_modules folder

```shell
npm install
```

installs all dependencies that are listed in package.json

## Check Licenses

```shell
npx license-checker --summary
```

## Check vulnerabilities

```shell
npm audit
```