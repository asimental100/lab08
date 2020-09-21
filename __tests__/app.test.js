const request = require('supertest');
const app = require('../lib/app');

describe('testing routes', () => {
  it('should test / route', async() => {
    const response = await request(app).get('/');

    expect(response.text).toEqual('<html><body><h1>hi</h1></body></html>');
  });

  it('should test /red route', async() => {
    const response = await request(app).get('/red');

    expect(response.text).toEqual('<html><body><h1>red</h1></body></html>');
  });

  it('should test /green route', async() => {
    const response = await request(app).get('/green');

    expect(response.text).toEqual('<html><body><h1>green</h1></body></html>');
  });

  it('should test /blue route', async() => {
    const response = await request(app).get('/blue');

    expect(response.text).toEqual('<html><body><h1>blue</h1></body></html>');
  });

  it('should test /other routes', async() => {
    const response = await request(app)
      .get('/tfgyhj');

    expect(response.text).toEqual('<html><body><h1>Not Found</h1></body></html>');
  });
});
