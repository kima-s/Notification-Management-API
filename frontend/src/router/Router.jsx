import React from "react";
import { Routes, Route } from 'react-router-dom';
import { CreateSearchNotification } from '../pages/CreateSearchDeleteNotification';
import { EditNotification } from '../pages/EditNotification';
import { NotFound } from '../pages/NotFound';

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<CreateSearchNotification />} />
            <Route path="/EditNotification" element={<EditNotification />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};