import React from 'react';
import MessagesStyles from './Messages.module.css';
import Contact from './Contact/Contact';

const Messages = () => {
  return (
    <section className={MessagesStyles.messages}>
      <h2 className="visually-hidden">Мессенджер нашего сайта</h2>
      <div className={MessagesStyles.messages__wrapper}>
        <ul className={MessagesStyles.messages__contacts}>
          <h3 className={MessagesStyles.messages__title}>Список ваших контактов</h3>
          <li className={MessagesStyles.messages__contact}>
            <Contact id="1" name="Кристиан Бейл" />
          </li>
          <li className={MessagesStyles.messages__contact}>
            <Contact id="2" name="Дэви Джонс" />
          </li>
          <li className={MessagesStyles.messages__contact}>
            <Contact id="3" name="Дэвид Финчер" />
          </li>
          <li className={MessagesStyles.messages__contact}>
            <Contact id="4" name="Мисс Грейнджер" />
          </li>
          <li className={MessagesStyles.messages__contact}>
            <Contact id="5" name="Киллиан Мерфи" />
          </li>
        </ul>

        <div className={MessagesStyles.messages__dialog}>
          <h3 className={MessagesStyles.messages__title}>Чат</h3>
          <div className={MessagesStyles.messages__dialog_wrapper}>
            <p className={MessagesStyles.messages__content}>Pasta is a type of food typically made from 
                an unleavened dough of wheat flour mixed with 
                water or eggs, and formed into sheets or other shapes, 
                then cooked by boiling or baking. Rice flour, or legumes 
                such as beans or lentils, are sometimes used in place of 
                wheat flour to yield a different taste and texture, or as 
                a gluten-free alternative.</p>
          </div>       
          
        </div>
      </div>
    </section>
  );
};

export default Messages;
