import React                from 'react';
import { connect }          from 'react-redux';

import { setDocumentTitle } from '../../utils';

class HomeIndexView extends React.Component {
  componentDidMount() {
    setDocumentTitle('Boards');
  }


  render() {}
}

const mapStateToProps = (state) => (
  state.boards
);

export default connect(mapStateToProps)(HomeIndexView);
