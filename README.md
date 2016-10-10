# jQM

## Introduction
This is a PhoneGap Android platform based application.
The application will provide basic navigation through various pages which are dynamically created.

## Frameworks
1. BackboneJS
2. HandlebarJS
3. jQuery Mobile
4. jQuery

## Build Process
The application uses grunt to build the application files (Javascript, CSS, HTML templates)
1. grunt - Build the JS, CSS and HTML files and dump under phonegap environment
2. grunt concat - will concat the CSS and JS files
3. grunt copy - will copy the images required by jQM
4. grunt watch - used for continuous development
5. grunt run - will run the application on an android phone or VD (use adb devices to check list of devices on your machine)
6. grunt eslint - will run linting application on the code

## Flow
1. Home Page - Will be the landing page for the application
2. Panel/Menu - Will be used as a TOC to create pages dynamically and navigate through them

