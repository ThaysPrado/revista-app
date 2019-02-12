import { Injectable } from '@angular/core';

@Injectable()
export class MagazineService {
	
	magazines = [
		{
			id: 0,
			cover: '../assets/covers/cover-1.jpg',
			edition: 'ed 2618',
			date: '06/12/2018',
			value: '14,90',
			bought: false
		},
		{
			id: 1,
			cover: '../assets/covers/cover-2.jpg',
			edition: 'ed 2618',
			date: '06/12/2018',
			value: '14,90',
			bought: false
		},
		{
			id: 2,
			cover: '../assets/covers/cover-3.jpg',
			edition: 'ed 2618',
			date: '06/12/2018',
			value: '14,90',
			bought: false
		},
		{
			id: 3,
			cover: '../assets/covers/cover-4.jpg',
			edition: 'ed 2618',
			date: '06/12/2018',
			value: '14,90',
			bought: false
		},
		{
			id: 4,
			cover: '../assets/covers/cover-5.jpg',
			edition: 'ed 2618',
			date: '06/12/2018',
			value: '14,90',
			bought: false
		},
		{
			id: 5,
			cover: '../assets/covers/cover-6.jpg',
			edition: 'ed 2618',
			date: '06/12/2018',
			value: '14,90',
			bought: false
		},
		{
			id: 6,
			cover: '../assets/covers/cover-7.jpg',
			edition: 'ed 2618',
			date: '06/12/2018',
			value: '14,90',
			bought: false
		},
		{
			id: 7,
			cover: '../assets/covers/cover-8.jpg',
			edition: 'ed 2618',
			date: '06/12/2018',
			value: '14,90',
			bought: false
		}
	];

	listMagazine() {
		return this.magazines;
	}

}