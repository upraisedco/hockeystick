import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';


const PageNotFound = () =>
  <div style={styles.horizontalCenter}>
    <h2 className='title'>Page Not Found</h2>
    <img src='src/assets/404.png' alt='Page Not Found'/>
    <hr />
    <h3 style={styles.title}>
      <Link to='/'>This Way Home &nbsp;
        <FontAwesome name='home' />
      </Link>
    </h3>
  </div>


const styles = {
  horizontalCenter: {
    textAlign: 'center'
  },
  title: {
    marginTop: '1rem'
  }
}

export default PageNotFound
