import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateInput } from '../redux/actions';

const AutoCompleteText = ({ updateInput }) => {
  const [items, setItems] = useState([
    `Alabama, AL`,
    `Alaska, AK`,
    `Arizona, AZ`,
    `Arkansas, AR`,
    `California, CA`,
    `Colorado, CO`,
    `Connecticut, CT`,
    `Delaware, DE`,
    `District of Columbia, DC`,
    `Florida, FL`,
    `Georgia, GA`,
    `Hawaii, HI`,
    `Idaho, ID`,
    `Illinois, IL`,
    `Indiana, IN`,
    `Iowa, IA`,
    `Kansas, KS`,
    `Kentucky, KY`,
    `Louisiana, LA`,
    `Maine, ME`,
    `Montana, MT`,
    `Nebraska, NE`,
    `Nevada, NV`,
    `New Hampshire, NH`,
    `New Jersey, NJ`,
    `New Mexico, NM`,
    `New York, NY`,
    `North Carolina, NC`,
    `North Dakota, ND`,
    `Ohio, OH`,
    `Oklahoma, OK`,
    `Oregon, OR`,
    `Maryland, MD`,
    `Massachusetts, MA`,
    `Michigan, MI`,
    `Minnesota, MN`,
    `Mississippi, MS`,
    `Missouri, MO`,
    `Pennsylvania, PA`,
    `Rhode Island, RI`,
    `South Carolina, SC`,
    `South Dakota, SD`,
    `Tennessee, TN`,
    `Texas, TX`,
    `Utah, UT`,
    `Vermont, VT`,
    `Virginia, VA`,
    `Washington, WA`,
    `West Virginia, WV`,
    `Wisconsin, WI`,
    `Wyoming, WY`,
  ]);
  const [suggest, setSuggest] = useState([]);
  const [text, setText] = useState('');

  const handleChange = e => {
    const value = e.target.value;

    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = items.sort().filter(v => regex.test(v));
    }
    setSuggest(suggestions, setText(value));
  };

  const renderSuggestions = () => {
    if (suggest.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggest.map(item => (
          <li onClick={() => selectSuggestion(item)} key={item}>
            {item}
          </li>
        ))}
      </ul>
    );
  };

  const selectSuggestion = value => {
    setSuggest([]);
    setText(value);
    updateInput({location: value.slice(-2)});
  };

  return (
    <div className="suggest-container">
      <div className="AutoCompleteText">
        <input
          value={text}
          onChange={handleChange}
          type="text"
          name=""
          id=""
          placeholder="New York, NY"
        />
        {renderSuggestions()}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.search.query,
});

const mapDispatchToProps = {
  updateInput,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AutoCompleteText);
