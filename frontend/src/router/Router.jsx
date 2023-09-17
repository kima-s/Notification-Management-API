import React from "react";
import { Routes, Route } from 'react-router-dom';
import { CreateSearchDeleteNotification } from '../pages/CreateSearchDeleteNotification';
import { EditNotification } from '../pages/EditNotification';
import { NotFound } from '../pages/NotFound';

export const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<CreateSearchDeleteNotification />} />
            <Route path="/EditNotification/:id" element={<EditNotification />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};