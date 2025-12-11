import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {

    const urlMovies = 'http://localhost:3000/';

    return (
        <>
            <div className="container">
                <div class="card mb-3">

                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;