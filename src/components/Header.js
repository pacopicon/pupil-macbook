import React from 'react';
import PropTypes from 'prop-types';


const Header = (props) => {
  return(
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
        </span>
        Day
      </h1>
      <h3 className="tagline"><span>{props.tagline}</span></h3>
    </header>
  )
}

Header.propTypes = {
  // tagline: 'React.PropTypes.string' is the old syntax.  As of React v15.5, propTypes has become a library that should be imported ('import PropTypes from 'prop-types';').  Syntax has dropped 'React'.
  tagline: PropTypes.string.isRequired
}

export default Header;
