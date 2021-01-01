import React from 'react';
import { Dropdown } from 'carbon-components-react';
import { Stub } from '../../components/Info';
import { DATA } from '../../components/Data/PaperData';

var items = [];
var shuffledData = DATA;

shuffledData.forEach(function(item, key) {
  if (item.year === '2020') {
    if (item.invited) {
      items.push({
        id: item.id,
        label: 'Invited Talk | ' + item.title,
      });
    } else if (item.xaip) {
      items.push({
        id: item.id,
        label: 'XAIP 2020 Accepted Paper | ' + item.title,
      });
    } else if (item.xai) {
      items.push({
        id: item.id,
        label: 'XAI 2020 Highlight | ' + item.title,
      });
    }
  }
});

class Page2020 extends React.Component {
  constructor(props) {
    super();
    this.state = {
      current: null,
    };
  }

  RenderPoster = e => {
    var itemNow = null;

    shuffledData.forEach(function(item, key) {
      if (item.id === e.id) {
        itemNow = item;
        return false;
      }
    });

    this.setState({
      ...this.state,
      current: itemNow,
    });
  };

  render() {
    return (
      <div
        className="bx--grid bx--grid--full-width landing-page landing-page__banner"
        style={{ minHeight: '100vh' }}>
        <Dropdown
          light
          ariaLabel="Dropdown"
          id="carbon-dropdown-example"
          items={items}
          label="Select a paper"
          titleText="XAIP 2020 Program"
          style={{ marginBottom: '30px' }}
          itemToString={item => (item ? item.label : '')}
          onChange={({ selectedItem }) => this.RenderPoster(selectedItem)}
        />
        {this.state.current && <Stub props={this.state.current} />}
      </div>
    );
  }
}

export default Page2020;
