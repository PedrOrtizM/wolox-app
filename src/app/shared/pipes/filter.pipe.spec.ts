import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
    let list = [{ name: 'a' }, { name: 'b' }]

    expect(pipe.transform(list, 'name', 'a').length).toBe(1);
    expect(pipe.transform(list, 'name', '').length).toBe(2);
  });

});
