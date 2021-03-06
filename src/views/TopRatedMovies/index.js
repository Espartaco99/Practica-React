import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Movie from '../../components/Movie'

import * as moviesActions from '../../actions/moviesActions'

class TopRatedMovies extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            movies: [],
            page: 1,
            loadingMovies: false
        }
    }

    componentDidMount(){
        const { movies } = this.state
        const { moviesActions } = this.props

        moviesActions.loadMovies(null,"top_rated")

        window.addEventListener("scroll", e => {
            const { page } = this.state
            const scrollTop = window.scrollY
            const trackLength = document.querySelector('body').scrollHeight - window.innerHeight
            const pctScrolled = Math.floor(scrollTop/trackLength * 100)
            if(pctScrolled > 95 && !this.state.loadingMovies) {
                moviesActions.loadTopRatedMovies(page)
                this.setState({
                    loadingMovies: true
                })
            }
        }, false);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.movies.length > this.state.movies.length) {
            this.setState({
                loadingMovies: false,
                page: this.state.page + 1,
                movies: nextProps.movies
            })
        }
    }

    render() {
        const { movies } = this.state

        return (
            <section className="container main movies">
                <header className="row">
                    <div className="col-12">
                        <h1>{movies.length > 0 ? 'Top Rated Movies' : 'Loading...'}</h1>
                    </div>
                </header>
                <div className="row movie-list-wrapper">
                    {movies.map((movie, i) => {
                        return (
                            <Movie
                                key={i}
                                {...movie}
                            />
                        )
                    })}
                </div>
            </section>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        movies: state.movies
    }
}

function mapDispatchToProps(dispatch){
    return {
        moviesActions: bindActionCreators(moviesActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopRatedMovies)

