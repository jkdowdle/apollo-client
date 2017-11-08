import { UsersQuery } from './UsersListQuery'

it('should be the correct query', () => {
  expect(UsersQuery).toMatchSnapshot()
})