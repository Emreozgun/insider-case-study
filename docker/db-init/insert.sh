#!/bin/sh
set -e

curl -XDELETE "http://localhost:9200/_all"

curl -XPUT "http://localhost:9200/products"

curl -XPUT "http://localhost:9200/products/_mapping" -H 'Content-Type: application/json' -d'
{
  "properties": {
    "name": {
      "type": "text",
      "analyzer": "standard",
      "fields": {
        "full_text": {
          "type": "text",
          "analyzer": "fulltext_analyzer"
        }
      }
    },
    "item_id": {
      "type": "keyword"
    },
    "locale": {
      "type": "keyword"
    },
    "click": {
      "type": "integer"
    },
    "purchase": {
      "type": "integer"
    }
  }
}
'
curl -XPOST -H "Content-Type: application/json"  http://localhost:9200/_bulk --data-binary  @bulk.json
