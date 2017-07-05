import { Circle } from '../model/Circle';
/*Test for Movies model
Update test code to instansiate new Movies in beforEach() block*/
describe('Circles', () => {
  it('has circleName', () => {
const circles = new Circle('Stackroute', '01');
  expect(circles.circleName).toBe('Stackroute');
});
it('has circleId', () => {
const circles = new Circle('Stackroute', '01');
  expect(circles.circleId).toBe('01');
});
// it('can clone itself', () => {
// const movies = new Movies('tt0120338', 'Titanic', '1997',
// 'https://images-na.ssl-images-amazon.com/images/M/MV5B.jpg');
// const clone = movies.clone();
//   expect(movies).toEqual(clone);
// });
});