import React from 'react';
import {useNavigate} from "react-router-dom";

export default function ViewError() {
    const navigate = useNavigate();

    return (
        <div className="error-page">
            <h2>404</h2>
            <p>This page doesn't exist.</p>
            <button
                className="btn btn-primary"
                type="button"
                onClick={() => navigate('/')}
            >
                Go home
            </button>
        </div>
    );
}
