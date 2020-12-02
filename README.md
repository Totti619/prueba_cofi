# Cofi Code Challenge Solution

Made with TypeScript and NodeJS

## Contents

- [Download](#Download)
- [Instalation](#Instalation)
- [Usage](#Usage)
    - [Data entities and persistence](#Data-entities-and-persistence)
    - [RESTful-API](#RESTful-API)
- [Testing](#Testing)

## <a name="Download"></a>Download

Clone the repo to a folder executing this below on a terminal:
```bash
git clone https://github.com/Totti619/prueba_cofi.git
```

Also you can download the whole project as a .zip file

## <a name="Instalation"></a>Instalation

You may need Node v14.15.1 for make this project working properly
Once you downloaded/cloned the project execute the following:
```bash
cd prueba_cofi
```
```bash
npm i
```

## <a name="Usage"></a>Usage

When the installation is complete you can start the server with:
```bash
npm start
```

If starts successfully you'll see in the terminal a log saying "Server is running..."

The server will open on this endpoint:
```http
http://localhost:5000
```

### <a name="Data-entities-and-persistence"></a>Data entities and persistence

There are two entities in this project:
- Product
    - id: uuidv4
    - code: string
    - name: string
    - price: number
    - discount: number
- Product checkout
    - id: uuidv4
    - productsScanned: Products collection (empty by default)

Entities are persisted in its JSON file, located at
```
/src/docs/products.json
/src/docs/productsCheckout.json
```

You can manipulate all the stored entities by editing the files or consuming the server's [API](#RESTful-API)

### <a name="RESTful-API"></a>RESTful API

The project has an API based on CRUD to manipulating products and product checkouts. This is the base URL:
```http
http://localhost:5000/api/v1
```
For the products, the API has the following endpoints:

Create products
```http
POST /products
{
    "id": uuidv4,
    "code": string,
	"name": string,
	"price": number
}
```

Read products
```http
GET /products
```

Update products
```http
PUT /products/(product_id)
{
    "code": string,
	"name": string,
	"price": number
}
```

Remove products
```http
DELETE /products/(product_id)
```

Product checkouts API endpoints:

Create product checkouts
```http
POST /products
{
    "id": uuidv4
}
```

Read product checkouts
```http
GET /products
```

Remove product checkouts
```http
DELETE /products/(product_checkout_id)
```

Scan product checkouts
```http
PATCH /products/(product_checkout_id)
{
    "code": string (product code)
}
```

## <a name="Testing"></a>Testing

You can execute unit tests by executing:
```bash
npm test
```