import { useState } from "react";
import AuthHooks from "../hooks/AuthHooks";
import axios from "axios";
import toast from "react-hot-toast";

const PostReview = () => {
    const {user} = AuthHooks()
    const [rating, setRating] = useState(0); 
    const [reviewText, setReviewText] = useState(''); 
    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };
    const handleReviewChange = (event) => {
        setReviewText(event.target.value);
    };

    const handleSubmit = async(event) => {
        event.preventDefault(); 
        const review = {
            name: user?.displayName,
            rating,
            details: reviewText
        }
        try {
            const {data} = await axios.post(`${import.meta.env.VITE_API_LINK}/review`, review)
            toast.success('Thank you for your feedback.')

        }catch(err) {
            toast.error(err?.message)
        }
        
        setRating(0);
        setReviewText('');
    };
    return (
        <div className="review-form">
            <h2 className="text-4xl font-medium mb-4 text-center">Write a Review</h2>
            <p className="sm:w-1/2 text-center mx-auto mb-4">We would love to hear from you. Your Opinion matters. Tell us how you find our services? What can be improved?</p>
            <form onSubmit={handleSubmit}>
                {/* Rating stars */}
                <div className="flex items-center mb-4 justify-center">
                    <label htmlFor="rating" className="mr-2 text-3xl">Rating:</label>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            type="button"
                            className={`mr-1 h-8 w-8 rounded-full text-xl focus:outline-none ${rating >= star ? 'text-yellow-500' : 'text-gray-300'
                                }`}
                            onClick={() => handleRatingChange(star)}
                        >
                            ★
                        </button>
                    ))}
                </div>

                {/* Review text area */}
                <div className="mb-4">
                    <label htmlFor="reviewText" className="block mb-2 text-sm">
                        Review Text:
                    </label>
                    <textarea
                        id="reviewText"
                        name="reviewText"
                        rows={5}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500 resize-none"
                        value={reviewText}
                        onChange={handleReviewChange}
                    />
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 bg-first text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                    disabled={rating === 0 || reviewText.trim() === '' || !user}
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default PostReview;