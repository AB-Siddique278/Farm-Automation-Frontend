import React from 'react';

const Banner = () => {
    return (
        <div className='mt-5 '>
            <div className="hero min-h-screen " style={{ backgroundImage: `url("https://live.staticflickr.com/5497/9038087312_586fd97cf1_b.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="md:px-60">
                        <h1 className="mb-5 text-5xl font-bold">শ্যামল বাংলার অর্থনীতির <br /> প্রধান উৎস কৃষি </h1>
                        <p className="mb-5">দেশের জাতীয় আয় ও অর্থনীতিতে কৃষি যে ভূমিকা পালন করে এর সাথে প্রত্যক্ষভাবে জড়িত এদেশের কৃষক। প্রয়ােজনীয় খাদ্যের জোগান দিয়ে কৃষকরা আমাদের অস্তিত্ব টিকিয়ে রেখেছে। শস্য উৎপাদনে বাংলাদেশের কৃষককুল যদি সক্রিয় ভূমিকা পালন না করত তাহলে নিত্য দুর্ভিক্ষের মধ্য দিয়ে বিপন্ন হতাে দেশের মানবঅস্তিত্ব। </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;