import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/home/HomePg';
import AddReview from '../pages/addReview/AddReview';
import NewReview from '../pages/newReview/NewReviewPg';
import BestReview from '../pages/bestReview/BestReviewPg';
import Mypage from '../pages/mypage/Mypage';
import SignUp from '../pages/logIn/SignUp';
import LogIn from '../pages/logIn/LogIn';
import Detail from '../pages/detailReview/DetailPg';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/add-review" element={<AddReview />} />
          <Route path="/new-review" element={<NewReview />} />
          <Route path="/best-review" element={<BestReview />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
