#!/bin/sh
set -e

sleep 2
yarn db:migrate
yarn db:seed

curl -XDELETE "http://elasticsearch:9200/_all"

curl -XPUT "http://elasticsearch:9200/products"

curl -XPUT "http://elasticsearch:9200/products/_mapping" -H 'Content-Type: application/json' -d'
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
curl -XPOST -H "Content-Type: application/json"  "http://elasticsearch:9200/_bulk" --data-binary  @/app/bulk.json
