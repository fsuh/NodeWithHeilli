# JSON (JavaScript Object Notation)

## Documentation  
https://json.org/json-en.html

## file extension  
.json

## Values
-   string
-   number
-   array
-   object
-   true
-   false
-   null


### examples

#### String

Must be doublequoted

empty string:""

```json
"this is a string"
"Here is a  \"quote\" in the 'middle'"
"hearts symbol is \u266" 
```

#### Number
-   no leading +
-   only one leading 0
-   the decimal delimiter is .

These are allowed:

```json
0, 0.5, 345.567, 1200, 1.5E10, 2E-2, 2E+2, -1, -11.5, -0.567
```

These are not allowed:

```json
000.34, +20, 00030
```

### Arrays

Array begins with [ and ends with ]. Values in area are separated with comma.

#### examples

```json
[1, 2, 3, 4, 6]
["textA", "textB"],
[true, null, false]
[
    {"name":"Liela"},
    {"name":"Matt"}
]
[
    [1,2,4],
    [5,7,8]
]
```
### object

An object begin with { and ends with }. The object consists of comma separated key-value pairs.
The key and value are separated by colon :

### Example

```json
{
    "firstName": "Matt",
    "lastName": "River"
}
```

```json
{
    "firstName": "Leila",
    "Children": [
        {"firstName":"Vera", "age":5},
        {
            "firstName":"Jesse", 
            "age":7,
            "toys":"Iron man"
        }
    ]
}
```

```json
{
    "Key1":"value1",
    "key2":"value2",
    "key3":[1,2,3],
    "key":{
        "a":1,
        "b":"text",
        "c":[7,8,9],
        "d":{
            "X":true,
            "Y":false,
            "Z":null,
            "w":2
        }
    }
}
```

