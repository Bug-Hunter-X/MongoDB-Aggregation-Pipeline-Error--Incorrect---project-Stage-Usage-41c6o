```javascript
//Incorrect aggregation pipeline
db.collection('myCollection').aggregate([
  {
    $match: { field: 'value' }
  },
  {
    $group: { _id: '$field', count: { $sum: 1 } }
  },
  {
    $project: { _id: 0, field: '$_id', count: 1 }
  }
])
```