# Accessibility Component
The React Accessibility Enhancer is a powerful tool designed to improve the visual representation and accessibility of React applications. With this component, you can effortlessly enhance the user experience for individuals with diverse needs, ensuring your application is inclusive and usable for everyone.

![Example Image](https://github.com/nahid1991/accessibility-component/blob/main/example.gif?raw=true)

## [Repository](https://github.com/nahid1991/accessibility-component/)

## Requirements

- ```"@mui/material": "^5.0.0" or "bootstrap": "^5.0.0" and "react-bootstrap": "^2.8.0"```
- ```"react": "^17.0.0"```

## Getting Started
### Installation
- Either add ```"react-accessibility-package": "^0.0.44"``` in ```package.json``` and in terminal run ```npm install```
- Or in the terminal run ```npm install react-accessibility-package```
- Or if you are using yarn run ```yarn add react-accessibility-package```
### Usage
- Import the package by adding ```import { Accessibility } from 'react-accessibility-package'```
- Wrap the entry point component like in the example below:
```
    <Accessibility lang="de" excludedFeatures={[]}>
      <AppHeader />
        <main/>
      <AppFooter />
    </Accessibility>
```
### Props
- ```lang```: This prop determines which language should be used in the component. We currently support setting "en" for English (default) and "de" for German
- ```theme```: Set "bootstrap" for Bootstrap themed component and "mui" for Mui (default) based component. Unless ```react-bootstrap``` is being used do not set the theme as "bootstrap".
- ```excludedFeatures```: This is an array and any string corresponding to the features those will not be rendered in the component. Example: ```excludedFeatures={['BIG_CURSOR']}```. Here the big cursor feature will be excluded from the component. The list of strings we can use to exclude desired features are given below:
  - 'BIG_CURSOR'
  - 'READING_MASK'
  - 'HIGHLIGHT_LINK'
  - 'HIDE_IMAGE'
  - 'INCREASE_LETTER_SPACE'
  - 'INCREASE_LINE_HEIGHT'
  - 'DARK_CONTRAST'
  - 'LIGHT_CONTRAST'
  - 'INVERT_COLOR'
  - 'PAGE_STRUCTURE'
  - 'LEFT_ALIGN'
  - 'RIGHT_ALIGN'
  - 'LOW_SATURATION'
  - 'HIGH_SATURATION'
  - 'DESATURATE',
  - 'MAGNIFY'
- ```maxFontSize```: set a number for which you want to set the max fontsize for the application after the ```Magnify Text``` is applied. Default ```24px```.

## Authors and acknowledgment

- [Nahid Islam](https://github.com/nahid1991)
- [Adeline Silva Schäfer](https://github.com/adelinerd)

### Acknowledgment

This project is inspired by the work done in https://www.unimed.coop.br/site/

## Contact us
Your feedback is very valuable to us. Please email us in one of the emails. Looking forward to hearing your concerns and new ideas.
- <a href="mailto:nahidshaiket10300@gmail.com">nahidshaiket10300@gmail.com</a>
- <a href="mailto:adeline.schaefer@iese.fraunhofer.de">adeline.schaefer@iese.fraunhofer.de </a>

## Evaluation
Please take a little bit time to do an evaluation [here](https://forms.gle/ZcpioePf8WTXysif6).

## License

Copyright (C) 2023 Nahid Islam

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

## Project Status
This project is currently under development and has been not released yet
