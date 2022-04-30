import React from 'react';
import { Paper, shuffleArray } from '../../components/Info';
import { Search, Tag } from 'carbon-components-react';
import { DATA } from '../../components/Data/PaperData';

const data = shuffleArray(DATA);

class ArchivePage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      search: '',
      data: data,
      filter: {
        xaip: false,
        uisp: false,
        invited: false,
        '2021': false,
        '2020': false,
        '2019': false,
        '2018': false,
        '2017': false,
        lucky: false,
      },
    };
  }

  componentWillMount = () => {
    this.setState(
      {
        search: '',
        data: data,
        filter: {
          xaip: false,
          uisp: false,
          invited: false,
          '2021': false,
          '2020': false,
          '2019': false,
          '2018': false,
          '2017': false,
          lucky: false,
        },
      },
      this.refreshData
    );
  };

  refreshData = e => {
    var tokens = this.state.search.trim().split(/[ ,]+/);
    var currentData = this.state.data;
    var currentState = this.state;
    var cache = [];

    currentData.forEach(function(item, key) {
      item.render = true;

      tokens.forEach(function(token, id) {
        token = token.toLowerCase();
        var flag =
          item.title.toLowerCase().includes(token) ||
          String(item.abstract)
            .toLowerCase()
            .includes(token) ||
          item.authors.toLowerCase().includes(token);
        item.render = flag && item.render;
      });

      ['xaip', 'uisp', 'invited'].forEach(function(tag, i) {
        if (currentState.filter[tag]) item.render = item.render && item[tag];
      });

      ['2017', '2018', '2019', '2020', '2021'].forEach(function(year, i) {
        if (currentState.filter[year])
          item.render = item.render && item.year === year;
      });

      if (item.render) cache.push(key);
    });

    if (currentState.filter.lucky) {
      var randomID = cache[Math.floor(Math.random() * cache.length)];

      currentData.forEach(function(item, key) {
        item.render = key === randomID;
      });
    }

    this.setState({
      ...this.state,
      data: currentData,
    });
  };

  onClickTag = e => {
    this.setState(
      {
        ...this.state,
        filter: {
          ...this.state.filter,
          [e.target.getAttribute('name')]: true,
        },
      },
      this.refreshData
    );
  };

  onCloseTag = e => {
    this.setState(
      {
        ...this.state,
        filter: {
          ...this.state.filter,
          [e]: false,
        },
      },
      this.refreshData
    );
  };

  handleInputChange = e => {
    this.setState(
      {
        ...this.state,
        search: e.target.value,
        filter: {
          ...this.state.filter,
          lucky: false,
        },
      },
      this.refreshData
    );
  };

  render() {
    return (
      <div
        className="bx--grid bx--grid--full-width landing-page landing-page__banner"
        style={{ minHeight: '100vh' }}>
        <div className="bx--col-lg-16">
          <div className="bx--row publications-page__tab-content">
            <Search
              size="xl"
              id="explore"
              placeHolderText="Explore"
              labelText=""
              value={this.state.search}
              onChange={this.handleInputChange.bind(this)}
            />
          </div>
        </div>

        <div style={{ marginBottom: '50px' }}>
          <Tag
            filter={this.state.filter.xaip}
            type="red"
            className="explore-tags"
            onClose={this.onCloseTag.bind(this, 'xaip')}
            onClick={this.onClickTag.bind(this)}
            name="xaip">
            {' '}
            XAIP{' '}
          </Tag>
          <Tag
            filter={this.state.filter.uisp}
            type="purple"
            className="explore-tags"
            onClose={this.onCloseTag.bind(this, 'uisp')}
            onClick={this.onClickTag.bind(this)}
            name="uisp">
            {' '}
            UISP{' '}
          </Tag>
          <Tag
            filter={this.state.filter.invited}
            type="teal"
            className="explore-tags"
            onClose={this.onCloseTag.bind(this, 'invited')}
            onClick={this.onClickTag.bind(this)}
            name="invited">
            {' '}
            Invited{' '}
          </Tag>
          <Tag
            filter={this.state.filter['2021']}
            type="cool-gray"
            className="explore-tags"
            onClose={this.onCloseTag.bind(this, '2021')}
            onClick={this.onClickTag.bind(this)}
            name="2021">
            {' '}
            2021{' '}
          </Tag>
          <Tag
            filter={this.state.filter['2020']}
            type="cool-gray"
            className="explore-tags"
            onClose={this.onCloseTag.bind(this, '2020')}
            onClick={this.onClickTag.bind(this)}
            name="2020">
            {' '}
            2020{' '}
          </Tag>
          <Tag
            filter={this.state.filter['2019']}
            type="cool-gray"
            className="explore-tags"
            onClose={this.onCloseTag.bind(this, '2019')}
            onClick={this.onClickTag.bind(this)}
            name="2019">
            {' '}
            2019{' '}
          </Tag>
          <Tag
            filter={this.state.filter['2018']}
            type="cool-gray"
            className="explore-tags"
            onClose={this.onCloseTag.bind(this, '2018')}
            onClick={this.onClickTag.bind(this)}
            name="2018">
            {' '}
            2018{' '}
          </Tag>
          <Tag
            filter={this.state.filter['2017']}
            type="cool-gray"
            className="explore-tags"
            onClose={this.onCloseTag.bind(this, '2017')}
            onClick={this.onClickTag.bind(this)}
            name="2017">
            {' '}
            2017{' '}
          </Tag>
          <Tag
            filter={this.state.filter.lucky}
            type="blue"
            className="explore-tags"
            onClose={this.onCloseTag.bind(this, 'lucky')}
            onClick={this.onClickTag.bind(this)}
            name="lucky">
            {' '}
            i'm feeling lucky{' '}
          </Tag>
        </div>

        {this.state.data.map((item, key) => (
          <React.Fragment key={key}>
            {item.render && <Paper props={item} />}
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default ArchivePage;
