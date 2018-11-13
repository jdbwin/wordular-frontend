import React from 'react'

import Results from '../../components/Results'

import './styles.css'

const MyWordsList = ({ myWords, results, visibleItem, showWord }) => (
  <div className="column is-half">
    {myWords && myWords.map((word, index) => {
      return (
        <div className="card" key={index}>
          <header className="card-header">
            <p className="card-header-title">
              {word.word}
            </p>
            <a href="#" className="card-header-icon" aria-label="more options" onClick={() => { showWord(word.word, index) }}>
              <span className="icon">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div className={`${visibleItem === index ? '' : 'is-hidden'}`}>
            <div className="card-content">
              <div className="content">
                {results && <Results results={results} word={word.word} />}
              </div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">Edit</a>
              <a href="#" className="card-footer-item">Delete</a>
            </footer>
          </div>
        </div>
      )
    })}
  </div>
)

export default MyWordsList


