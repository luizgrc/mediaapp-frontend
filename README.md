
# Sesion 6
1:42
## Librerias para Angular

primeng  -- https://www.primefaces.org/primeng/

ng bootstrap -- https://ng-bootstrap.github.io/#/home

Angular Material -- https://material.angular.io/

## Instalar Librerias

Instalacion Angular Material cdk(pre dependencia , pre libreria para que angular material funciones) solo una vez al iniciar el proyecto --save lo guarda en package.json

npm install @angular/cdk --save 

Instalacion Angular Material Agregando los componentes necesarios para usarlo y dar inicio al asistente.
HammerJS es para funciones de click presionado por varios segundos (No),
Browser Animations (Yes)

ng add @angular/material

## Comandos Angular

Crear componente ng generate component <component-name>

ng g c <nombre>

Crear componente sin archivo spec

ng g c --spec=false

## Cambiar Version de Angular

npm unistall -g angular -cli

npm cache clean --force

npm install @angular/cli@1.68


------
## Inciar comando cuando no tienes el node_modules

npm install

## Cancelar terminal 

Ctrl + c

## Iniciar Proyecto en puerto diferente

ng serve --port 4500

## Compilar y abrir proyecto en navegador

ng serve --open

# Anotes Git

## Iniciar proyecto Git Local.

git init

git add --A

git status

git commit --m 'Mi Primer commit'

## Agregar un repositorio git remoto al proyecto local.

git remote add origin https://github.com/luizgrc/mediaapp-backend.git

## Obtener el nombre de los repositorios remotos

git remote -v

## Mandar nuestro rama local master al remoto en rama remota origin 

git push origin master

## Mandar nuestro proyecto local al remoto en la rama fork

git push fork 

## Combinar branchs.

git merge origin/master.

## Regresar al commit anterior

git reset --hard

## Obtener ultimas versiones de las ramas remotas

git fetch

## Actualizar tus ramas locales de las remotas

git pull

## Ver Log grafico

git log --graph --oneline --all



---------------------

# Posibles Errores

git push origin master.

! Rejected master -> master (fetch first).

git pull origin master.

! Rejected master -> master(non-fast-forward).

git merge origin/master.

faltal: refusing to merge unrelated histories.

Solucion:

git pull --rebase origin master



---------------------



# AngDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


