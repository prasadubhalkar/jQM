# jQM

## Introduction
This is a PhoneGap Android platform based application.
The application will provide basic navigation through various pages which are dynamically created.

## Frameworks<br />
1. BackboneJS<br />
2. HandlebarJS<br />
3. jQuery Mobile<br />
4. jQuery<br />

## Build Process
The application uses grunt to build the application files (Javascript, CSS, HTML templates)<br />
1. grunt - Build the JS, CSS and HTML files and dump under phonegap environment<br />
2. grunt concat - will concat the CSS and JS files<br />
3. grunt copy - will copy the images required by jQM<br />
4. grunt watch - used for continuous development<br />
5. grunt run - will run the application on an android phone or VD (use adb devices to check list of devices on your machine)<br />
6. grunt eslint - will run linting application on the code<br />

## Flow
1. Home Page - Will be the landing page for the application<br />
2. Panel/Menu - Will be used as a TOC to create pages dynamically and navigate through them<br />

