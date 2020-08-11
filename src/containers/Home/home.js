import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';

import sidebar from '../../components/Sidebar/Sidebar';
import Sidebar from 'react-sidebar';


class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <header >
                <Navbar/>
            </header>
            <body>
            {/* <AppSidebarNav navConfig={sidebar} {...this.props} /> */}
            </body>
            <footer>
                <h1></h1>
            </footer>
          </div>
         );
    }
}
 
export default Home;