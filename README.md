# Introduction

This is a simple api task for recruitment.

I have done this using node.js, express, mongodb. The task was a simple api for placing order and
retriving orders.

```http
GET /api/order
```
## Responses

API endpoints return the JSON representation of the order created.

```sample GET response
{
    "orders": [
        {
            "phone": "01699324343",
            "orderItems": [
                {
                    "_id": "6102fd20e69fe231346400bd",
                    "id": "1627585824643",
                    "product": "Orange",
                    "quantity": 3
                },
                {
                    "_id": "6102fd21e69fe231346400be",
                    "id": "1627585825038",
                    "product": "Banana",
                    "quantity": 2
                }
            ]
        }
    ]
}
```
## Error Responses
However, if an invalid request is submitted, or some other error occurs, returns a JSON response in the following format:

```javascript
{ 
    "error": true, 
    "message": 'error retrieving orders'
}
```

```http
POST /api/order
```

| Body Parameter | Type | Description |
| :--- | :--- | :--- |
| `phone` | `string` | **Required** |
| `orderitems` | `array` | **Required** |

## Responses

API endpoints return the JSON representation of the resources created or edited. However, if an invalid request is submitted, or some other error occurs, returns a JSON response in the following format:

```javascript
{ 
    "error": true, 
    "message": 'error creating new order'
}
```
