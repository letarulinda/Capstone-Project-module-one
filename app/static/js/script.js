const humberger = document.querySelector(".humberger-menu");
const navMenu = document.querySelector(".lower-menu-mobile");
const menuItem = document.querySelectorAll(".menu-link-lower");

// Open the pop up menu
humberger.addEventListener("click", () => {
	humberger.classList.toggle("change");
	navMenu.classList.toggle("show-menu");
});

// Close the pop menu
menuItem.forEach((n) => {
	n.addEventListener("click", () => {
		humberger.classList.remove("change");
		navMenu.classList.remove("show-menu")
	});
});


const speakerCardSection = [
    {
			image: 'app/static/images/speaker_01.png',
			name: 'Manzede Peter Godfrey',
			occupation: 'Google Full Stack Senior Developer',
			bio: 'peter is a software engineer, developer advocate, and speaker known for his work with the different tech companies world-wide, ',
    },
		{
			image: 'app/static/images/speaker_02.png',
			name: 'Ekuki Brian',
			occupation: 'Specialist in Computer Science.',
			bio: 'Brian is an experienced person in computer scienec with proven track of Record with the different tech companies.',
    },
		{
			image: 'app/static/images/speaker_03.png',
			name: 'Anna Tumwrobere',
			occupation: 'Full Stack developer',
			bio: `She started working as a junior developer at Google and within period of 1 year,she was promoted to senior position in the same company.`,
    },
		{
			image: 'app/static/images/speaker_04.png',
			name: 'Racheal Namara',
			occupation: 'Web Development Specialist',
			bio: 'She is a well know web developer world wide.she has developed anumber of websites for the different companies. ',
    },
		{
			image: 'app/static/images/speaker_05.png',
			name: 'Letaru Patricia',
			occupation: 'CEO Letaru Technologies',
			bio: 'Patricia is the CEO at Letaru Technologies.she is also a known advocate for STEM.She is so passionate about tech.',
    },
		{
			image: 'app/static/images/speaker_06.png',
			name: 'Ofoyo Gerald',
			occupation: 'DevOps Engineer',
			bio: 'Gerald is a known DevOps Engineer who has worked for many years with Google. He also has proven track of Record with other tech companies like Twitter.',
    }
]; 

speakerCardSection.forEach((ele, index) => {
	const card = document.querySelector(".speakers-section");
	const cardContainer = document.createElement("div");
	cardContainer.classList = 'card-container';

	const speakerSectionHTML = `
		<div class="speaker-container" id="speaker-container">
			<div class="speaker-image">
				<img class="speaker-img" src="${speakerCardSection[index].image}" alt="${speakerCardSection[index].name} picture">
			</div>
			<div class="speaker-text">
				<h3 class="name">${speakerCardSection[index].name}</h3>
				<p class="para">
					${speakerCardSection[index].occupation}
				</p>
				<div class="line-seperator"></div>
				<p class="bio">
					${speakerCardSection[index].bio}
				</p>
			</div>
		</div>
	`;
	cardContainer.innerHTML += speakerSectionHTML;
	card.appendChild(cardContainer);

});
const speakerSection = document.getElementById("speakers-section");

const seeMoreBtn =  `
		<button class="see-more-btn" id="see-more-btn">
			More <i class="fa-solid fa-chevron-down"></i>
		</button>
		`;
	speakerSection.innerHTML += seeMoreBtn;



