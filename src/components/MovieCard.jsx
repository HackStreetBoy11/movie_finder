import React from 'react'

function MovieCard({ movie: { Title, Type, Poster, Year, imdbID } }) {
    // Handle missing posters gracefully
    const posterSrc = Poster && Poster !== "N/A" ? Poster : "/no-movie.jpg"; // Make sure this path exists in /public folder

    return (
        <div className='movie-card'>
            <a href={`https://www.imdb.com/title/${imdbID}`} target="_blank" rel="noopener noreferrer">
                <img
                    src={posterSrc}
                    alt={Title}
                    onError={(e) => (e.target.src = "/no-movie.jpg")} // fallback if image fails to load
                />
            </a>

            <div className='mt-4'>
                <h3>{Title}</h3>

                <div className='content'>
                    <div className="rating">
                        <img src="star.svg" alt="Star Icon" />
                        <p>{Type || 'N/A'}</p>
                    </div>

                    <span>•</span>
                    <p className='year'>{Year || 'N/A'}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
