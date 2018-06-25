export const html =
`<!DOCTYPE html>
  <html lang="en">
    <body>
      <h1>{{data.company}}</h1>
      <div class="container"></div>
    </body>
  </html>
`

export const css =
`.container {
    width: 100%;
    height: 100%;
    background-color: black;
  }
`

export const json =
`{
  "company": "hailbusters",
  "estimate_type": "basic",
  "country": "canada",
  "metric": true,
  "business_id": "b88e830f-d12d-4e66-9349-6226e15b180c",
  "estimator_id": "3FE4D",
  "vin": "S8F7CCH5DDS4L0L00",
  "mileage": 100345,
  "customer": {
    "firstname": "ryker",
    "lastname": "rumsey",
    "phone": "4037047103",
    "title": "mr.",
    "address": {
      "street1": "380 Rockyspring GR NW",
      "street2": "",
      "city": "calgary",
      "province": "ab",
      "postalcode": "T0C 2J0",
      "country": "canada",
      "state": "",
      "zipcode": ""
    }
  },
  "notes": [
    "The roof panel has previous stains.",
    "Left rear tail light is broken."
  ],
  "damage": [
    {
      "x": 50,
      "y": 214,
      "note": "Large indent from another car door."
    },
    {
      "x": 44,
      "y": 333,
      "note": "Puncture damage not caused by hail."
    }
  ],
  "randi": [
    "r_head_light",
    "roof",
    "hood"
  ],
  "estimateData": [
    {
      "part": "hood",
      "severity": "vlight",
      "size": "toonie",
      "addon": ["O", "D"],
      "oversized": 5
    },
    {
      "part": "r_quarter",
      "severity": "med",
      "size": "qtr",
      "addon": ["A"],
      "oversized": null
    },
    {
      "part": "rf_door",
      "severity": "mod",
      "size": "dime",
      "addon": null,
      "oversized": null
    },
    {
      "part": "hood",
      "severity": "severe",
      "size": "dime",
      "addon": ["O"],
      "oversized": 5
    }
  ]
}
`
export const page =
`{
  "template": {
    "company": "hailbusters",
    "name": "YZFMN7DB90"
  },
  "width": 2200,
  "height": 1700,
  "page": {
    "format": "Letter",
    "printBackground": true,
    "landscape": true,
    "margin": {
     "top": "20px",
     "bottom": "20px",
     "left": "20px",
     "right": "20px"
    }
  }
}
`
