import React from 'react';
import ReviewsStyles from './Reviews.module.css';
import Post from './Post/Post';

const Reviews = () => {
  return (
    <section className={ReviewsStyles.reviews}>
      <ul className={ReviewsStyles.reviews__posts}>
        <li className={ReviewsStyles.reviews__post}>
          <Post
            avatarSrc="https://cdn2.scratch.mit.edu/get_image/gallery/1771035_200x130.png"
            authorName="Василий"
            message="Проекты отличные, а главное бесплатные!"
          />
        </li>
        <li className={ReviewsStyles.reviews__post}>
          <Post
            avatarSrc="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/96/96449cb711f8da14e4a96ac0ad57ed89f4c8c1c2_medium.jpg"
            authorId="2"
            authorName="Гена"
            message="Ребят я куда-то нажал и все пропало"
          />
        </li>
        <li className={ReviewsStyles.reviews__post}>
          <Post
            avatarSrc="https://uploads.voprosnik.ru/uploads/avatar_big_2324845.gif"
            authorId="3"
            authorName="Ксюша"
            message="сдам квартиру в Москве недорого, близко к мкаду"
          />
        </li>
      </ul>

      <div className={ReviewsStyles.reviews__message}>
        <p className={ReviewsStyles.reviews__mini_ttitle}>
          Оставьте Ваш отзыв!
        </p>
        <textarea
          className={ReviewsStyles.reviews__textarea}
          name="area-message"
          id="area-message"
        />
        <button className={ReviewsStyles.reviews__button}>Отправить</button>
      </div>

    </section>
  );
};

export default Reviews;
