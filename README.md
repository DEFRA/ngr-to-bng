[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=DEFRA_ngr-to-bng&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=DEFRA_ngr-to-bng)

# NGR-to-BNG

Script to convert Grid reference (NGR) to Easting and Northing (BNG)

## Installation

```
npm install --save @defra/ngr-to-bng
```
## Usage

```
import ngrToBng from 'ngr-to-bng'

...

const point = ngrToBng('SP3683367955')
```

# License

THIS INFORMATION IS LICENSED UNDER THE CONDITIONS OF THE OPEN GOVERNMENT LICENCE found at:

http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3

The following attribution statement MUST be cited in your products and applications when using this information.

>Contains public sector information licensed under the Open Government license v3

### About the license

The Open Government Licence (OGL) was developed by the Controller of Her Majesty's Stationery Office (HMSO) to enable information providers in the public sector to license the use and re-use of their information under a common open licence.

It is designed to encourage use and re-use of information freely and flexibly, with only a few conditions.
