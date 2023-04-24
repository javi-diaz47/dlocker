# dlocker
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->
  <p>

  [![contributors][contributors-shield]][contributors-url]
[![license][license-shield]][license-url]
  </p>
  <h1 align="center">DLOCKER</h1>

  <p align="center">
    Door Locker
    <br />
    <a href="https://github.com/javi-diaz47/dlocker"><strong>Explore the docs »</strong></a>
    <br />
    <br />
 </p>
</div>

## About the project

REST API for dlocker


### Build With

Here is a summary of the technologies, libraries or frameworks used for the creation of the application.

[![Express][Express]][Express-url]
[![Docker][Docker]][Docker-url]
[![MongoDB][MongoDb]][MongoDB-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Getting Started

### Prerequisites

* node
[Install node js](https://nodejs.org/en/download/)
* npm
  ```sh
  npm install npm@latest -g
 * docker
 [Install docker](https://docs.docker.com/engine/install/)

### Installation
- **Getting started**

Fork the Project

- **Docker**

create a docker container that serves a mongo database

```bash
docker run --name dlockerDB -p 27017:27017 -d mongo
```

- **Node js**

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [https://localhost:3000](https://localhost:3000) with your browser to see the result.

### The available routes:
- GET: /user -> Return all the users
- PUT: /user -> Logs a user at the current Date **(JSON body with the nfc code is required)**
- DELETE: /user -> Deletes a user **(JSON body with the nfc code is required)**
- POST: /user -> Create a new user **(JSON body with the name and the nfc code is required)**

**Examples**
- JSON body for PUT: /user
```json
{
  "nfc": "02 12 4F 1A"
}
```

- JSON body for POST: /user
```json
{
  "name": "Jane Doe"
  "nfc": "02 12 4F 1A"
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!--Markdown Link & Images-->

<!-- github badges-->
[contributors-shield]: https://img.shields.io/github/contributors/javi-diaz47/dlocker.svg?style=for-the-badge
[contributors-url]: https://github.com/javi-diaz47/dlocker/graphs/contributors

[license-shield]: https://img.shields.io/github/license/javi-diaz47/dlocker.svg?style=for-the-badge
[license-url]: https://github.com/javi-diaz47/dlocker/blob/main/LICENSE

<!-- technologies -->
[Express]: https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express
[Express-url]: http://expressjs.com/

[Docker]: https://img.shields.io/badge/Docker-000000?style=for-the-badge&logo=docker
[Docker-url]: https://www.docker.com/

[MongoDB]: https://img.shields.io/badge/MongoDB-000000?style=for-the-badge&logo=mongodb
[MongoDB-url]: https://www.mongodb.com/
