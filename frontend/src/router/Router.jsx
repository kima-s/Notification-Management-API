import React from "react";
import { Routes, Route } from 'react-router-dom';
import { CreateSearchNotification } from '../components/pages/CreateSearchNotification';
import { EditNotification } from '../components/pages/EditNotification';
import { NotFound } from '../components/pages/NotFound';

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<CreateSearchNotification />} />
            <Route path="/EditNotification" element={<EditNotification />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};