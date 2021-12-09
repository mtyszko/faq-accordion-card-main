function handleClick() {
	const classes = this.classList;
	const hasActive = [...classes].includes('active');
	const activeItems = [...document.querySelectorAll('.active')];

	activeItems.map(item => {
		if ([...item.classList].includes('active')) item.classList.remove('active');
	});

	if (!hasActive) classes.add('active');
}

const items = [...document.querySelectorAll('.content__item')];

items.map(item => item.addEventListener('click', handleClick));
