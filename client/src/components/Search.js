import React from 'react';
import data from '../data/data';

const Search = () => {
  console.log(data[0].data[0].practices[0]);
  return (
    <div>
      Search
      {data[0].data.map(e => (
        <div key={e.profile.slug}>
          <p>
            {`${e.profile.first_name} ${e.profile.last_name}, ${
              e.profile.title
            }`}
          </p>
          <p>{`${e.practices[0].visit_address.street}, ${
            e.practices[0].visit_address.city
          }, ${e.practices[0].visit_address.state_long} `}</p>

          <h1>Call {e.practices[0].phones[0].number}</h1>

          <a href="google.com">View on map</a>
        </div>
      ))}
    </div>
  );
};

export default Search;
