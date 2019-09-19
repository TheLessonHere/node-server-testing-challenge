const request = require('supertest');
const server = require('../index');
const Hobbits = require('./hobbits');
const db = require('../data/dbConfig')

beforeEach(async()=>{
    await db('hobbits').truncate()
    await Hobbits.addHobbit({ name: 'Harold' })
})

describe('GET /api/hobbits', () => {
  it('should return a 200', async ()=>{
      return request(server)
            .get('/')
            .expect(200)
            .then((res)=>{
                expect(res.body.message).toBe('Welcome!')
            })
  })
});

describe('POST /api/hobbits', ()=> {
    it('should insert a hobbit', async ()=>{
        let hobbits
        hobbits = await db('hobbits')
        expect(hobbits).toHaveLength(1)
        await Hobbits.addHobbit({ name: 'Chelsea' })
        hobbits = await db('hobbits')
        expect(hobbits).toHaveLength(2)
    })
});

describe('DELETE /api/hobbits', ()=> {
    it('should delete a hobbit', async ()=>{
        let hobbits
        await Hobbits.removeHobbit({ id: 1 })
        hobbits = await db('hobbits')
        expect(hobbits).toHaveLength(1)
    })
})