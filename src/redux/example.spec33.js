// heroQuery tests
import 'react-native';
import React from 'react';
import { addTypenameToDocument } from 'apollo-client';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// Note: We need to access this file directly from node_modules or things break
import { MockedProvider } from '../../node_modules/react-apollo/test-utils';
import { HERO_QUERY, heroQuery } from './hero.component';


test('heroQuery correctly delivers props to child component', (done) => {
  const variables = { episode: "JEDI" };
  const mockedData = {
    "hero": {
      "__typename": "Droid",
      "id": "2001",
      "name": "R2-D2",
      "friends": [
        {
          "__typename": "Human",
          "id": "1000",
          "name": "Luke Skywalker"
        },
        {
          "__typename": "Human",
          "id": "1002",
          "name": "Han Solo"
        },
        {
          "__typename": "Human",
          "id": "1003",
          "name": "Leia Organa"
        }
      ]
    }
  };
  // use this component to make sure the right props are returned
  class DummyComponent extends React.Component {
    componentWillReceiveProps({ loading, hero }) {
      if (!loading) {
        expect(hero).toEqual(mockedData.hero);
        expect(hero).toMatchSnapshot();
        done();
      } else {
        expect(loading).toBe(true);
      }
    }
    render() {
      // doesn't need to actually render anything
      return null;
    }
  }
  // wrap the dummy with our query
  const WrappedDummyComponent = heroQuery(DummyComponent);
  // apollo-client includes __typename in queries/results by default
  // so we need to make sure our test query looks that way as well
  const query = addTypenameToDocument(HERO_QUERY);
  const mock = (
    <MockedProvider mocks={[
      { 
        request: { query, variables }, 
        result: { data: mockedData },
      },
    ]}>
      <WrappedDummyComponent
        episode="JEDI"
      />
    </MockedProvider>
  );
  renderer.create(mock);
});