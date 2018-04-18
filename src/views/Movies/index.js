import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash';

import Movie from '../../components/Movie'

import * as moviesActions from '../../actions/moviesActions'

class Movies extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            movies: [],
            page: 1,
            loadingMovies: false,
            sortBy: 'title-asc',
            thisYear: false,
            adultsOnly: false,
        }
    }

    componentDidMount(){
        const { movies } = this.state
        const { moviesActions } = this.props
       
        moviesActions.loadMovies(1, document.querySelector('.form-control').value);

       
       /*  document.querySelector('.form-control').addEventListener("change", (e) => {
            moviesActions.loadMovies(1, document.querySelector('.form-control').value);
        }) */

        window.addEventListener("scroll", e => {
            const { page } = this.state
            const scrollTop = window.scrollY
            const trackLength = document.querySelector('body').scrollHeight - window.innerHeight
            const pctScrolled = Math.floor(scrollTop/trackLength * 100)
            if(pctScrolled > 95 && !this.state.loadingMovies) {
                moviesActions.loadMovies(page, document.querySelector('.form-control').value)
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
        else {
            this.setState({
                loadingMovies: false,
                movies: nextProps.movies
            })
        }
        //this.setState( {movies: _.sortBy(movies, ['title'], ['asc'])} ) 
    }
    onViewingChange = e => {
        const nowViewing = e.target.value;
        this.props.moviesActions.loadMovies(1, nowViewing);
    }

    onSortChange = e => {
        const {movies} = this.state
        const value = e.target.value;
        const params = value.split("-")
  
        this.setState( {movies: _.orderBy(movies, params[0], params[1])} ) 
    }

    oncheckboxChange = (e, type) => {

        if (e.target.checked){
            this.setState({[type]: true})
        }
        else{
            this.setState({[type]: false})
        }
        //console.log(this.state[type]);
    }

    filterMovies(movies){
        const { thisYear, adultsOnly } = this.state;
        if (thisYear){
            movies = movies.filter(movie => movie.release_date.split('-')[0] === '2018');
        } 
        if (adultsOnly){
            movies = movies.filter(movie => movie.adult);
        } 
        return movies;
    }

    onAdultsOnlyChange = e => {
        if (e.target.checked){
            this.setState({checked: true})
        }
        else{
            this.setState({checked: false})
        }
    }


    render() {
        const { movies, checked } = this.state
        console.log(movies[0])
        return (
            <section className="container main movies">
                <header className="row">
                    <div className="col-12">
                        <h1>{movies.length > 0 ? 'Movies' : 'Loading...'}</h1>
                    </div>
                </header>
                <aside className="row">
                    <div className="form-group">
                        <label>Now viewing:</label>
                        <select className="form-control" defaultValue={"popular"} onChange={this.onViewingChange}>
                            <option value="popular">Popular</option>
                            <option value="top_rated">Top Rated</option>
                            <option value="upcoming">Upcoming</option>
                        </select>
                    </div>
                
                    <div className="form-group">
                        <label>Sort by:</label>
                        <select className="form-control" defaultValue={"title-asc"} onChange={this.onSortChange}>
                            <option value="title-asc">Title (Asc)</option>
                            <option value="title-desc">Title (Desc)</option>
                            <option value="popularity-asc">Less Popular</option>
                            <option value="popularity-desc">More Popular</option>
                            <option value="vote_average-asc">Worst</option>
                            <option value="vote_average-desc">Best</option>
                            <option value="release_date-asc">Oldest</option>
                            <option value="release_date-desc">Newest</option>
                        </select>
                    </div>
                    <div className="form-check" >
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" onChange={(e) => this.oncheckboxChange(e, 'thisYear')} />
                            View this year only
                        </label>
                    </div>
                    <div className="form-check" >
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" onChange={(e) => this.oncheckboxChange(e, 'adultsOnly')} />
                            Adults Only
                        </label>
                    </div>
                </aside>
                <div className="row movie-list-wrapper">
                    {this.filterMovies(movies).map((movie, i) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Movies)

