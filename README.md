# parking-rating

An application to retrieve parking lot information using Yelp's API.

# Installation Instructions

- Fork and Clone this Repository
- CD to your local copy of the repo
- In terminal type EITHER `npm install` or `yarn install`
  <br>
  <br>

- Parking is a category we can filter by
- Need to pass in a location as a string

## Approach

- [x] - Create a container component to retrieve and store Yelp API data
- [x] - Create a card component to render the results
- [x] - Apply basic styling
- [ ] - Double check everything

### Sample API response

```javascript

0:
alias: "the-parking-spot-century-los-angeles-3"
categories: (2) [{…}, {…}]
coordinates: {latitude: 33.945968, longitude: -118.380454}
display_phone: "(310) 642-0947"
distance: 13962.18210489447
id: "QLauuwEbbCn4M8Ag0gSjjw"
image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/SCIU-wSg2B8mBcpPMJAReg/o.jpg"
is_closed: false
location: {address1: "5701 W. Century Blvd", address2: "", address3: "", city: "Los Angeles", zip_code: "90045", …}
name: "The Parking Spot - Century"
phone: "+13106420947"
rating: 3.5
review_count: 478
transactions: []
url: "https://www.yelp.com/biz/the-parking-spot-century-los-angeles-3?adjust_creative=Y1CLR3ACRUpMX-5l7FKuAQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Y1CLR3ACRUpMX-5l7FKuAQ"
```