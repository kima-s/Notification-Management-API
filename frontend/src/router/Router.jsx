import React from "react";
import { Routes, Route } from 'react-router-dom';
import { CreateSearchDeleteNotification } from '../pages/CreateSearchDeleteNotification';
import { EditNotification } from '../pages/EditNotification';
import { NotFound } from '../pages/NotFound';
import { HeaderLayout } from '../components/HeaderLayout';

export const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HeaderLayout><CreateSearchDeleteNotification /></HeaderLayout>} />
            <Route path="/EditNotification/:id" element={<HeaderLayout><EditNotification /></HeaderLayout>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
