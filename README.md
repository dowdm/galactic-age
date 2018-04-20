# **Super Galactic Age Calculator**

#### By Matt Dowdney

## Description
This program reports a user input age in Earth seconds and determines their interplanetary age and life expectancy on Mercury-Jupiter. Note: annual age expressions are always truncated and significant figures on interplanetary year conversions may also be limited, so accuracy may vary.  

## Specifications

| Specification | Input | Output |
| --- | --- | --- |
| Program should report time difference (in seconds) of two dates  | 4/19/2018, 4/20/2018 | 86,400 seconds |
| Program should report age (in seconds) of a given birthdate(today is 4/20/2018) | 01/31/1983, 4/20/2018 | 1,111,359,600 seconds |
| Program should report age in Mercury years | 1/31/1983, 4/20/2018 | 1,111,359,600 seconds, 146 Mercury Years |
| Program should report age in Venus years | 1/31/1983, 4/20/2018 | 1,111,359,600 seconds, 146 Mercury Years, 56 Venus Years  |
| Program should report age in Mars years | 1/31/1983, 4/20/2018| 1,111,359,600 seconds, 145 Mercury Years, 56 Venus Years, 18 Mars Years  |
| Program should report age in Jupiter years | 1/31/1983, 4/20/2018 | 1,111,359,600 seconds, 145 Mercury Years, 56 Venus Years, 18 Mars Years, 2 Jupiter Years |
| Program should report remaining age left on each planet using a life expectancy constant of 80 Earth years   | 1/31/1983, 4/20/2018 | 1,111,359,600 seconds, 145 Mercury Years, 186 Mercury Years left; 56 Venus Years, 72 Venus years left; 18 Mars Years, 23 Mars Years left; 2 Jupiter Years, 3 Jupiter Years left|
| Program should report current exceeded life expectancy on each planet using a life expectancy constant of 80 Earth years, if person is over 80 Earth years | 1/31/1933, 4/20/2018 | --- |

## Setup/Installation Requirements

* To view project code, _clone repository from_ https://github.com/dowdm/galactic-age.git


## Known Bugs

## Technologies Used

* HTML
* CSS _(Bootstrap 4.1)_
* JavaScript _(jQuery 3.2.1)_
* Node.js
* Webpack
* ESLint
* Jasmine
* Karma
* Babel

## License

* GPL

 Copyright Matt Dowdney © 2018
