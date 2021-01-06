import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

class Navbar extends Component {
    nav = null
    onNavToggle = () => {
        console.log(this.nav)
        // eslint-disable-next-line
        if (this.nav) this.nav.style.display = this.nav.style.display == 'grid' ? 'none' : 'grid'
    }

    render() {
        return(
            <nav className="nav-wrapper red darken-3">
                <div className="container row">
                
                    <a className="brand-logo" href="/">Poke'Times</a>
    
                    <a href="#/" className="waves-effect waves-teal btn-flat nav-toggler" onClick={ this.onNavToggle }><i class="material-icons left">menu</i></a>
                    
                    <ul className="right red darken-3 nav-list-big">                                    
                        <li><NavLink to={ process.env.PUBLIC_URL + "/" }>Home</NavLink></li>
                        <li><NavLink to={ process.env.PUBLIC_URL + "/about" }>About</NavLink></li>
                        <li><NavLink to={ process.env.PUBLIC_URL + "/contact" }>Contact</NavLink></li>
                    </ul>

                    <ul className="right red darken-3 nav-list" ref={ref => this.nav = ref}>
                        
                        <a href="#/" class="waves-effect waves-teal btn-flat nav-close" onClick={ this.onNavToggle }><i class="material-icons left">close</i></a>

                        <li><NavLink to={ process.env.PUBLIC_URL + "/" } onClick={ this.onNavToggle }>Home</NavLink></li>
                        <li><NavLink to={ process.env.PUBLIC_URL + "/about" } onClick={ this.onNavToggle }>About</NavLink></li>
                        <li><NavLink to={ process.env.PUBLIC_URL + "/contact" } onClick={ this.onNavToggle }>Contact</NavLink></li>
                    </ul>
    
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)