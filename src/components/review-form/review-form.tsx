﻿import {Review} from '../../types/review.ts';
import React from 'react';

type ReviewFormProps = {
  onSubmit: (review: Review) => void;
}

export function ReviewForm({onSubmit}: ReviewFormProps) {
  const [comment, setComment] = React.useState<string>('');
  const [rating, setRating] = React.useState<number>(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newReview: Review = {
      id: '123',
      date: new Date().toISOString(),
      user: {
        'name': 'Oliver Conner',
        'avatarUrl': 'img/avatar-max.jpg',
        'isPro': false,
      },
      comment,
      rating,
    };

    onSubmit(newReview);
    setComment('');
    setRating(0);
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
              Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={5}
          id="5-stars"
          type="radio"
          checked={rating === 5}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRating(Number(event.target.value))}
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={4}
          id="4-stars"
          checked={rating === 4}
          type="radio"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRating(Number(event.target.value))}
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={3}
          id="3-stars"
          checked={rating === 3}
          type="radio"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRating(Number(event.target.value))}
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={2}
          id="2-stars"
          checked={rating === 3}
          type="radio"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRating(Number(event.target.value))}
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={1}
          id="1-star"
          checked={rating === 1}
          type="radio"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRating(Number(event.target.value))}
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setComment(event.target.value)}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
                with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={comment.length < 50 || comment.length > 300 || rating === 0}
          onClick={(event) => handleSubmit(event)}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
