# Koibanx Code Challenge

This repository is created by Santiago Prieto Ramírez to solve the challenge sent by **Koibanx**

## Preparations to run the API

- You must have an updated version of NodeJS installed.
- You must have prepared a MongDB DataBase (It doesn't matter if it's empty).
- Create a `.env` file just like the `.env.example` file and fill it with your database info.
- The Database will have 2 Collections `users` and `stores` if you have your `stores` collection empty I recommend you, not needed. Use the seeder from the next step.
- Run in your console `npm install`.
- Run in your console `npm run start`.
- Congratulations your Api should be running already.

## Seeder for the Stores Collection

You can populate your Stores Collection with the data in `data.json` following the Next Steps:

- You must have an updated version of NodeJS installed.
- You must have prepared a MongDB DataBase (It doesn't matter if it's empty).
- Create a `.env` file just like the `.env.example` file and fill it with your database info.
- Run in your console `npm run import:stores`.

**Note:** If you already run the seeder and you want to **_delete all the Documents_** in your `stores` collection:

- Run in your console `npm run clear:stores`

## Usage of the API

### Authentication

All the endpoints are protected with the `basicAuth` method so you must provide `Username` and `Password`, but as this is only a Challenge it doesn't have a way to subscribe or create any other User but the one that is being created in the `utils/initializer.js` file feel free to go to that file and grab the `Username` and `Password` hardcoded there, and make sure you use them for all the endpoints described bellow.

### **POST** `{{API URL}}/api/stores`:

This endpoint is used to create one `store` in the `stores` collection, make sure you add a body just like the next example:

```JSON
{
    "Comercio": "La gran tienda", //  Required.
    "CUIT":" 33-52652082-9", //  Required.
    "Concepto 1":"Juegos", //  Must at least have one 'Concepto' in the body.
    "Concepto 2":"Viajes",
    "Concepto 3":"Panaderia",
    "Concepto 4":"Transporte",
    "Concepto 5":"Turismo",
    "Concepto 6":"Ferreteria",
    "Balance actual":"$300", // Must have the '$' before a ***number*** and should not have any other special character.
    "Activo":"Si", // It only accepts 'Si' or 'No', it doesn't accept something like 'SI', 'si' or any other different.
    "Ultima venta":"2022-4-20" // Must be formated in this way 'YYYY-MM-DD'.
}
```

### **GET** `{{API URL}}/api/stores`:

This endpoint is used to get the paginated list of `stores` in the collection, make sure you add parameters in the url just like this:

Suppose that your api url is `localhost:3000`

- `localhost:3000/api/stores?q={"page":2,"limit":2}`

There will be always the `q` parameter and the value will be a JSON object containing only two items `page` and `limit` these values will be used to paginate the answer of the endpoint.

The only consideration you must have in mind is the number of documents in the Collection because you can't ask for `page 3` and `limit 2` if there are only `4 items` in the collection. so make sure you know how many pages will be for the `limit you are choosing.


## Final considerations

If you have any questions or want to make any clarifcation reach to me by email: `santi.prieto1212@gmail.com`