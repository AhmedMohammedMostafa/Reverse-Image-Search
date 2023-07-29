import weaviate from 'weaviate-client';

const client = weaviate.client({
  scheme: 'http',
  host: 'localhost:8080',
});

const schemaConfig = {
  'class': 'Images',
  'vectorizer': 'img2vec-neural',
  'vectorIndexType': 'hnsw',
  'moduleConfig': {
      'img2vec-neural': {
          'imageFields': [
              'image'
          ]
      }
  },
  'properties': [
      {
          'name': 'image',
          'dataType': ['blob']
      },
      {
          'name': 'text',
          'dataType': ['string']
      }
  ]
}

await client.schema
  .classCreator()
  .withClass(schemaConfig)
  .do();

export default client;
