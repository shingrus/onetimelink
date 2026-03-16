import React, {lazy, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import NewMessage from "./containers/NewMessage";

// Lazy-loaded routes — their JS and CSS only load when visited
const ShowNewLink      = lazy(() => import('./containers/ShowNewLink'));
const ViewSecretMessage = lazy(() => import('./containers/ViewSecretMessage'));
const ViewError        = lazy(() => import('./containers/ErrorComponent'));
const About            = lazy(() => import('./containers/About'));
const PasswordGenerator = lazy(() => import('./containers/PasswordGenerator'));

export default function AppRoutes() {
    return (
        <Suspense fallback={null}>
            <Routes>
                <Route path="/" element={<NewMessage />} />
                <Route path="/index.html" element={<NewMessage />} />
                <Route path="/new" element={<ShowNewLink />} />
                <Route path="/password-generator" element={<PasswordGenerator />} />
                <Route path="/strong-password-generator" element={<PasswordGenerator />} />
                <Route path="/create-password-14-symbols" element={<PasswordGenerator />} />
                <Route path="/random-password-generator" element={<PasswordGenerator />} />
                <Route path="/passphrase-generator" element={<PasswordGenerator />} />
                <Route path="/about" element={<About />} />
                <Route path="/v/*" element={<ViewSecretMessage />} />
                <Route path="*" element={<ViewError />} />
            </Routes>
        </Suspense>
    );
}
