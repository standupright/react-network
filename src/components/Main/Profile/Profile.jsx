import React from 'react';
import ProfileStyles from './Profile.module.css';

const Profile = () => {
	return (
		<section className={ProfileStyles.profile}>
			<div className={ProfileStyles.profile__wrapper}>
				<div className={ProfileStyles.profile__personality}>
					<h2 className={ProfileStyles.profile__title}>Макконахи</h2>
					<img className={ProfileStyles.profile__avatar} width="300" height="400" src="https://mfiles.alphacoders.com/505/505950.jpg" alt="Ваш аватар"/>
					<ul className={ProfileStyles.profile__socials_list}>
						<li className={ProfileStyles.profile__socials_item}>
							<a href="#">
								<img width="50" height="50" src="https://cs6.pikabu.ru/avatars/676/v676330-1178905911.jpg" alt=""/>
							</a>
						</li>
						<li className={ProfileStyles.profile__socials_item}>
							<a href="#">
								<img width="50" height="50" src="https://sun9-72.userapi.com/c845221/v845221125/45a0c/mfTjBpJnb4I.jpg" alt=""/>
							</a>
						</li>
						<li className={ProfileStyles.profile__socials_item}>
							<a href="#">
								<img width="50" height="50" src="https://pbs.twimg.com/media/Ef3oCHWXkAEQ2QC.jpg" alt=""/>
							</a>
						</li>
						<li className={ProfileStyles.profile__socials_item}>
							<a href="#">
								<img width="50" height="50" src="https://c7.hotpng.com/preview/555/573/119/github-commonjs-source-code-node-js-github.jpg" alt=""/>
							</a>
						</li>
					</ul>
				</div>
				<div className={ProfileStyles.profile__statistic}>
					<h2 className={ProfileStyles.profile__title}>Проекты</h2>
					<img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/de8a0d87271963.5db2b8404aaaa.jpg" alt="Жепка"/>
				</div>
			</div>
		</section>
	);
}

export default Profile;