
const Contacts = () => {

	return (
		<div className="contacts content__item">
			<h1 className="contacts__title title">О себе</h1>
			<div className="contacts__img-box">
				<img className="contacts__img" src="developer.jpg" alt="Разработчик" />
			</div>
			<div className="contacts__item">
				<h2 className="contacts__sub-title">Август 2015</h2>
				<p className="contacts__text">В этом году я закончил школу и решил связать свою жизнь с программированием и поступил в колледж на специальность 09.02.03 — Программирование в компьютерных системах.</p>
			</div>
			<div className="contacts__item">
				<h2 className="contacts__sub-title">2015 - 2019</h2>
				<p className="contacts__text">За эти годы я понял, что не ошиблся с выбором специальности и после окончания колледжа я решил поступать в ВУЗ.</p>
			</div>
			<div className="contacts__item">
				<h2 className="contacts__sub-title">Июль 2019</h2>
				<p className="contacts__text">Я подал документы в 2 ВУЗа в Самарский железнодорожный институт, и в Московский политехнический университет (МПУ). Меня брали на бюджет в МПУ и поэтому я не долго думая подписал документы и стал студентом московского ВУЗа :).</p>
			</div>
			<div className="contacts__item">
				<h2 className="contacts__sub-title">2019 - 2023</h2>
				<p className="contacts__text">За время обучения получилось попробовать огромное количество технологий, в том числе и разработку нейронных сетей, но для себя я пока решил, что хочу двигать в сторону Front-end разработки.</p>
			</div>
		</div>
	);
}

export default Contacts;
