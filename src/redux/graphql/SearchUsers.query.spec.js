// import { print } from 'graphql-tag/printer'
// import { print } from "graphql-tag/printer";
// import { bundledPrinter } from 'graphql-tag/printer'

import { print }from 'graphql/language'



import SEACH_USERS_QUERY from './SearchUsers.query.graphql'

describe("SEACH_USERS_QUERY", () => {
  it('should match the snapshot', () => {
    expect(print(SEACH_USERS_QUERY)).toMatchSnapshot()
  })
})