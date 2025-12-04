import type { FormEvent } from 'react';
import useLocalStorageHook from '../hooks/useLocalStorageHook';
import '../styles/review.css';

interface review {
  username: string,
  rating: number,
  comment: string,
  timestamp: string
}

const Review = () => {
  const KEY = 'reviews';

  const [userReview, setUserReview] = useLocalStorageHook<review[]>(KEY, []);

  function handleReviewSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const username = String(formData.get('username') || '').trim();
    const rating = Number(formData.get('rating') || 0);
    const comment = String(formData.get('comment') || '').trim();

    if (!username || !rating || !comment) {
      alert('Please fill all fields.');
      return;
    }

    const newReview: review = {
      username,
      rating,
      comment,
      timestamp: new Date().toISOString()
    }

    setUserReview((prevReviews) => [newReview, ...prevReviews]);

    form.reset();
  }

  return (
    <div className='review-container'>
      <form className='review-form' onSubmit={handleReviewSubmit}>
        <header className='review-header'>Add Review Here: </header>
        <div className='review-user-input'>
          <div className='username-wrapper'
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', gap: '1px' }}>
            <label htmlFor='username-input' className='username-label'>Username: </label>
            <input
              type='text'
              name='username'
              id='username-input'
              placeholder='Enter Username'
            />
          </div>
          <div className='rating-wrapping'
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', gap: '1px' }}>
            <label htmlFor='rating-input' className='rating-label'>Rating: </label>
            <select name='rating' id='rating-input' defaultValue=''>
              <option value=''>Select rating</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>
          <div className='comment-wrapper'
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', gap: '1px' }}>
            <label htmlFor='comment-input' className='comment-label'>Comment:</label>
            <textarea
              name='comment'
              id='comment-input'
              placeholder='Enter Comment'
            />
          </div>
          <button className='review-submit-btn'>Submit Review</button>
        </div>
      </form>

      <div className='view-review'>
        <header className='view-review-header'>Reviews: </header>
        <div className='reviews'>
          {userReview.length === 0 ? (<p>No Reviews</p>) : (
            userReview.map((val, index) => (
              <div className='review-content' key={index}
                style={{ marginTop: '10px', marginBottom: '10px' }}>
                <div className='review-username'><b>Username</b>: {val.username}</div>
                <div className='review-rating'><b>Rating</b>: {val.rating}</div>
                <div className='review-comment'><b>Comment</b>: {val.comment}</div>
                <div className='review-timestamp'><b>Time Posted</b>: {new Date(val.timestamp).toLocaleTimeString()}</div>
                <hr />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Review