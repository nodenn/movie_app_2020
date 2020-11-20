import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;

        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
        return (
            <div className="detail">
                <img src={location.state.poster} alt={location.state.poster} className="poster"></img>

                <div className="top">
                    <h2 className="year">{location.state.year}</h2>
                    <h3>{location.state.rating}</h3>
                    <h1 className="title">{location.state.title}</h1>

                    <ul className="genre">
                        <p>Genres</p>
                            {location.state.genres.map((genres, index) => {
                                return <li key={index}>{genres}</li>;
                            })}
                    </ul>
                </div>


                <p className="summary">
                    <span>Summary</span>
                    {location.state.summary}
                </p>
            </div>
        );
        } else {
            return null;
        }
    }
}

export default Detail;