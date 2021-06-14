# REST API Service

Code for the REST API Service

## Endpoints

### /api/asset-status GET

Returns Array of AssetStatus Objects from Database

### /api/asset-status POST

Updates Asset Status. Request body must be JSON as follows

`
{
    "title":"My Title",
    "mess" :"New Message",
    "ctrlid" :"Optional ID"
}
`

## Author
- Inderpreet Singh
