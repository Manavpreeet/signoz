import { PANEL_TYPES } from 'constants/queryBuilder';

import { GetSeriesProps } from '../../getSeriesData';

export const seriesBarChartData = {
	apiResponse: {
		data: {
			result: [
				{
					metric: {},
					values: [
						[1708683840, '6260'],
						[1708683240, '6251'],
						[1708683780, '6237'],
						[1708683660, '6188'],
						[1708683720, '6176'],
						[1708683360, '6169'],
						[1708683480, '6068'],
						[1708683540, '6025'],
						[1708683300, '6042'],
						[1708683420, '6001'],
						[1708683600, '5969'],
						[1708683900, '5955'],
						[1708683180, '4301'],
					],
					queryName: 'F1',
					legend: 'firstLegend',
				},
				{
					metric: {},
					values: [
						[1708683240, '3378'],
						[1708683300, '3269'],
						[1708683360, '3341'],
						[1708683420, '3269'],
						[1708683480, '3296'],
						[1708683540, '3280'],
						[1708683600, '3260'],
						[1708683660, '3351'],
						[1708683720, '3345'],
						[1708683780, '3370'],
						[1708683840, '3382'],
						[1708683900, '3249'],
						[1708683960, '212'],
					],
					queryName: 'A',
					legend: 'secondLegend',
				},
				{
					metric: {},
					values: [
						[1708683840, '2878'],
						[1708683240, '2873'],
						[1708683780, '2867'],
						[1708683660, '2837'],
						[1708683720, '2831'],
						[1708683360, '2828'],
						[1708683300, '2773'],
						[1708683480, '2772'],
						[1708683540, '2745'],
						[1708683420, '2732'],
						[1708683180, '2729'],
						[1708683600, '2709'],
						[1708683900, '2706'],
					],
					queryName: 'B',
					legend: 'thirdLegend',
				},
				{
					metric: {
						F2: 'F2',
					},
					values: [
						[1708683840, '504'],
						[1708683240, '505'],
						[1708683780, '503'],
						[1708683660, '514'],
						[1708683720, '514'],
						[1708683360, '513'],
						[1708683480, '524'],
						[1708683540, '535'],
						[1708683300, '496'],
						[1708683420, '537'],
						[1708683600, '551'],
						[1708683900, '543'],
						[1708683180, '-1157'],
					],
					queryName: 'F2',
					legend: 'forthLength',
				},
			],
			resultType: '',
			newResult: {
				status: 'success',
				data: {
					resultType: '',
					result: [
						{
							queryName: 'A',
							series: [
								{
									labels: {},
									labelsArray: null,
									values: [
										{
											timestamp: 1708683240000,
											value: '3378',
										},
										{
											timestamp: 1708683300000,
											value: '3269',
										},
										{
											timestamp: 1708683360000,
											value: '3341',
										},
										{
											timestamp: 1708683420000,
											value: '3269',
										},
										{
											timestamp: 1708683480000,
											value: '3296',
										},
										{
											timestamp: 1708683540000,
											value: '3280',
										},
										{
											timestamp: 1708683600000,
											value: '3260',
										},
										{
											timestamp: 1708683660000,
											value: '3351',
										},
										{
											timestamp: 1708683720000,
											value: '3345',
										},
										{
											timestamp: 1708683780000,
											value: '3370',
										},
										{
											timestamp: 1708683840000,
											value: '3382',
										},
										{
											timestamp: 1708683900000,
											value: '3249',
										},
										{
											timestamp: 1708683960000,
											value: '212',
										},
									],
								},
							],
							list: null,
						},
						{
							queryName: 'B',
							series: [
								{
									labels: {},
									labelsArray: null,
									values: [
										{
											timestamp: 1708683840000,
											value: '2878',
										},
										{
											timestamp: 1708683240000,
											value: '2873',
										},
										{
											timestamp: 1708683780000,
											value: '2867',
										},
										{
											timestamp: 1708683660000,
											value: '2837',
										},
										{
											timestamp: 1708683720000,
											value: '2831',
										},
										{
											timestamp: 1708683360000,
											value: '2828',
										},
										{
											timestamp: 1708683300000,
											value: '2773',
										},
										{
											timestamp: 1708683480000,
											value: '2772',
										},
										{
											timestamp: 1708683540000,
											value: '2745',
										},
										{
											timestamp: 1708683420000,
											value: '2732',
										},
										{
											timestamp: 1708683180000,
											value: '2729',
										},
										{
											timestamp: 1708683600000,
											value: '2709',
										},
										{
											timestamp: 1708683900000,
											value: '2706',
										},
									],
								},
							],
							list: null,
						},
						{
							queryName: 'F2',
							series: [
								{
									labels: {
										F2: 'F2',
									},
									values: [
										{
											timestamp: 1708683840000,
											value: '504',
										},
										{
											timestamp: 1708683240000,
											value: '505',
										},
										{
											timestamp: 1708683780000,
											value: '503',
										},
										{
											timestamp: 1708683660000,
											value: '514',
										},
										{
											timestamp: 1708683720000,
											value: '514',
										},
										{
											timestamp: 1708683360000,
											value: '513',
										},
										{
											timestamp: 1708683480000,
											value: '524',
										},
										{
											timestamp: 1708683540000,
											value: '535',
										},
										{
											timestamp: 1708683300000,
											value: '496',
										},
										{
											timestamp: 1708683420000,
											value: '537',
										},
										{
											timestamp: 1708683600000,
											value: '551',
										},
										{
											timestamp: 1708683900000,
											value: '543',
										},
										{
											timestamp: 1708683180000,
											value: '-1157',
										},
									],
								},
							],
							list: null,
						},
						{
							queryName: 'F1',
							series: [
								{
									labels: {},
									labelsArray: null,
									values: [
										{
											timestamp: 1708683840000,
											value: '6260',
										},
										{
											timestamp: 1708683240000,
											value: '6251',
										},
										{
											timestamp: 1708683780000,
											value: '6237',
										},
										{
											timestamp: 1708683660000,
											value: '6188',
										},
										{
											timestamp: 1708683720000,
											value: '6176',
										},
										{
											timestamp: 1708683360000,
											value: '6169',
										},
										{
											timestamp: 1708683480000,
											value: '6068',
										},
										{
											timestamp: 1708683540000,
											value: '6025',
										},
										{
											timestamp: 1708683300000,
											value: '6042',
										},
										{
											timestamp: 1708683420000,
											value: '6001',
										},
										{
											timestamp: 1708683600000,
											value: '5969',
										},
										{
											timestamp: 1708683900000,
											value: '5955',
										},
										{
											timestamp: 1708683180000,
											value: '4301',
										},
									],
								},
							],
							list: null,
						},
					],
				},
			},
		},
	},
	widgetMetaData: [
		{
			metric: {},
			values: [
				[1708683840, '6260'],
				[1708683240, '6251'],
				[1708683780, '6237'],
				[1708683660, '6188'],
				[1708683720, '6176'],
				[1708683360, '6169'],
				[1708683480, '6068'],
				[1708683540, '6025'],
				[1708683300, '6042'],
				[1708683420, '6001'],
				[1708683600, '5969'],
				[1708683900, '5955'],
				[1708683180, '4301'],
			],
			queryName: 'F1',
			legend: 'firstLegend',
		},
		{
			metric: {},
			values: [
				[1708683240, '3378'],
				[1708683300, '3269'],
				[1708683360, '3341'],
				[1708683420, '3269'],
				[1708683480, '3296'],
				[1708683540, '3280'],
				[1708683600, '3260'],
				[1708683660, '3351'],
				[1708683720, '3345'],
				[1708683780, '3370'],
				[1708683840, '3382'],
				[1708683900, '3249'],
				[1708683960, '212'],
			],
			queryName: 'A',
			legend: 'A-A',
		},
		{
			metric: {},
			values: [
				[1708683840, '2878'],
				[1708683240, '2873'],
				[1708683780, '2867'],
				[1708683660, '2837'],
				[1708683720, '2831'],
				[1708683360, '2828'],
				[1708683300, '2773'],
				[1708683480, '2772'],
				[1708683540, '2745'],
				[1708683420, '2732'],
				[1708683180, '2729'],
				[1708683600, '2709'],
				[1708683900, '2706'],
			],
			queryName: 'B',
			legend: 'B-B',
		},
		{
			metric: {
				F2: 'F2',
			},
			values: [
				[1708683840, '504'],
				[1708683240, '505'],
				[1708683780, '503'],
				[1708683660, '514'],
				[1708683720, '514'],
				[1708683360, '513'],
				[1708683480, '524'],
				[1708683540, '535'],
				[1708683300, '496'],
				[1708683420, '537'],
				[1708683600, '551'],
				[1708683900, '543'],
				[1708683180, '-1157'],
			],
			queryName: 'F2',
			legend: 'F2',
		},
	],
	graphsVisibilityStates: [true, true, true, true, true],
	panelType: PANEL_TYPES.BAR,
} as GetSeriesProps;

export const seriesLineChartData = {
	apiResponse: {
		data: {
			result: [
				{
					metric: {},
					values: [
						[1708683840, '6260'],
						[1708683240, '6251'],
						[1708683780, '6237'],
						[1708683660, '6188'],
						[1708683720, '6176'],
						[1708683360, '6169'],
						[1708683480, '6068'],
						[1708683540, '6025'],
						[1708683300, '6042'],
						[1708683420, '6001'],
						[1708683600, '5969'],
						[1708683900, '5955'],
						[1708683180, '4301'],
					],
					queryName: 'F1',
					legend: 'firstLegend',
				},
				{
					metric: {},
					values: [
						[1708683240, '3378'],
						[1708683300, '3269'],
						[1708683360, '3341'],
						[1708683420, '3269'],
						[1708683480, '3296'],
						[1708683540, '3280'],
						[1708683600, '3260'],
						[1708683660, '3351'],
						[1708683720, '3345'],
						[1708683780, '3370'],
						[1708683840, '3382'],
						[1708683900, '3249'],
						[1708683960, '212'],
					],
					queryName: 'A',
					legend: 'secondLegend',
				},
				{
					metric: {},
					values: [
						[1708683840, '2878'],
						[1708683240, '2873'],
						[1708683780, '2867'],
						[1708683660, '2837'],
						[1708683720, '2831'],
						[1708683360, '2828'],
						[1708683300, '2773'],
						[1708683480, '2772'],
						[1708683540, '2745'],
						[1708683420, '2732'],
						[1708683180, '2729'],
						[1708683600, '2709'],
						[1708683900, '2706'],
					],
					queryName: 'B',
					legend: 'thirdLegend',
				},
				{
					metric: {
						F2: 'F2',
					},
					values: [
						[1708683840, '504'],
						[1708683240, '505'],
						[1708683780, '503'],
						[1708683660, '514'],
						[1708683720, '514'],
						[1708683360, '513'],
						[1708683480, '524'],
						[1708683540, '535'],
						[1708683300, '496'],
						[1708683420, '537'],
						[1708683600, '551'],
						[1708683900, '543'],
						[1708683180, '-1157'],
					],
					queryName: 'F2',
					legend: 'forthLength',
				},
			],
			resultType: '',
			newResult: {
				status: 'success',
				data: {
					resultType: '',
					result: [
						{
							queryName: 'A',
							series: [
								{
									labels: {},
									labelsArray: null,
									values: [
										{
											timestamp: 1708683240000,
											value: '3378',
										},
										{
											timestamp: 1708683300000,
											value: '3269',
										},
										{
											timestamp: 1708683360000,
											value: '3341',
										},
										{
											timestamp: 1708683420000,
											value: '3269',
										},
										{
											timestamp: 1708683480000,
											value: '3296',
										},
										{
											timestamp: 1708683540000,
											value: '3280',
										},
										{
											timestamp: 1708683600000,
											value: '3260',
										},
										{
											timestamp: 1708683660000,
											value: '3351',
										},
										{
											timestamp: 1708683720000,
											value: '3345',
										},
										{
											timestamp: 1708683780000,
											value: '3370',
										},
										{
											timestamp: 1708683840000,
											value: '3382',
										},
										{
											timestamp: 1708683900000,
											value: '3249',
										},
										{
											timestamp: 1708683960000,
											value: '212',
										},
									],
								},
							],
							list: null,
						},
						{
							queryName: 'B',
							series: [
								{
									labels: {},
									labelsArray: null,
									values: [
										{
											timestamp: 1708683840000,
											value: '2878',
										},
										{
											timestamp: 1708683240000,
											value: '2873',
										},
										{
											timestamp: 1708683780000,
											value: '2867',
										},
										{
											timestamp: 1708683660000,
											value: '2837',
										},
										{
											timestamp: 1708683720000,
											value: '2831',
										},
										{
											timestamp: 1708683360000,
											value: '2828',
										},
										{
											timestamp: 1708683300000,
											value: '2773',
										},
										{
											timestamp: 1708683480000,
											value: '2772',
										},
										{
											timestamp: 1708683540000,
											value: '2745',
										},
										{
											timestamp: 1708683420000,
											value: '2732',
										},
										{
											timestamp: 1708683180000,
											value: '2729',
										},
										{
											timestamp: 1708683600000,
											value: '2709',
										},
										{
											timestamp: 1708683900000,
											value: '2706',
										},
									],
								},
							],
							list: null,
						},
						{
							queryName: 'F2',
							series: [
								{
									labels: {
										F2: 'F2',
									},
									values: [
										{
											timestamp: 1708683840000,
											value: '504',
										},
										{
											timestamp: 1708683240000,
											value: '505',
										},
										{
											timestamp: 1708683780000,
											value: '503',
										},
										{
											timestamp: 1708683660000,
											value: '514',
										},
										{
											timestamp: 1708683720000,
											value: '514',
										},
										{
											timestamp: 1708683360000,
											value: '513',
										},
										{
											timestamp: 1708683480000,
											value: '524',
										},
										{
											timestamp: 1708683540000,
											value: '535',
										},
										{
											timestamp: 1708683300000,
											value: '496',
										},
										{
											timestamp: 1708683420000,
											value: '537',
										},
										{
											timestamp: 1708683600000,
											value: '551',
										},
										{
											timestamp: 1708683900000,
											value: '543',
										},
										{
											timestamp: 1708683180000,
											value: '-1157',
										},
									],
								},
							],
							list: null,
						},
						{
							queryName: 'F1',
							series: [
								{
									labels: {},
									labelsArray: null,
									values: [
										{
											timestamp: 1708683840000,
											value: '6260',
										},
										{
											timestamp: 1708683240000,
											value: '6251',
										},
										{
											timestamp: 1708683780000,
											value: '6237',
										},
										{
											timestamp: 1708683660000,
											value: '6188',
										},
										{
											timestamp: 1708683720000,
											value: '6176',
										},
										{
											timestamp: 1708683360000,
											value: '6169',
										},
										{
											timestamp: 1708683480000,
											value: '6068',
										},
										{
											timestamp: 1708683540000,
											value: '6025',
										},
										{
											timestamp: 1708683300000,
											value: '6042',
										},
										{
											timestamp: 1708683420000,
											value: '6001',
										},
										{
											timestamp: 1708683600000,
											value: '5969',
										},
										{
											timestamp: 1708683900000,
											value: '5955',
										},
										{
											timestamp: 1708683180000,
											value: '4301',
										},
									],
								},
							],
							list: null,
						},
					],
				},
			},
		},
	},
	widgetMetaData: [
		{
			metric: {},
			values: [
				[1708683840, '6260'],
				[1708683240, '6251'],
				[1708683780, '6237'],
				[1708683660, '6188'],
				[1708683720, '6176'],
				[1708683360, '6169'],
				[1708683480, '6068'],
				[1708683540, '6025'],
				[1708683300, '6042'],
				[1708683420, '6001'],
				[1708683600, '5969'],
				[1708683900, '5955'],
				[1708683180, '4301'],
			],
			queryName: 'F1',
			legend: 'firstLegend',
		},
		{
			metric: {},
			values: [
				[1708683240, '3378'],
				[1708683300, '3269'],
				[1708683360, '3341'],
				[1708683420, '3269'],
				[1708683480, '3296'],
				[1708683540, '3280'],
				[1708683600, '3260'],
				[1708683660, '3351'],
				[1708683720, '3345'],
				[1708683780, '3370'],
				[1708683840, '3382'],
				[1708683900, '3249'],
				[1708683960, '212'],
			],
			queryName: 'A',
			legend: 'A-A',
		},
		{
			metric: {},
			values: [
				[1708683840, '2878'],
				[1708683240, '2873'],
				[1708683780, '2867'],
				[1708683660, '2837'],
				[1708683720, '2831'],
				[1708683360, '2828'],
				[1708683300, '2773'],
				[1708683480, '2772'],
				[1708683540, '2745'],
				[1708683420, '2732'],
				[1708683180, '2729'],
				[1708683600, '2709'],
				[1708683900, '2706'],
			],
			queryName: 'B',
			legend: 'B-B',
		},
		{
			metric: {
				F2: 'F2',
			},
			values: [
				[1708683840, '504'],
				[1708683240, '505'],
				[1708683780, '503'],
				[1708683660, '514'],
				[1708683720, '514'],
				[1708683360, '513'],
				[1708683480, '524'],
				[1708683540, '535'],
				[1708683300, '496'],
				[1708683420, '537'],
				[1708683600, '551'],
				[1708683900, '543'],
				[1708683180, '-1157'],
			],
			queryName: 'F2',
			legend: 'F2',
		},
	],
	graphsVisibilityStates: [true, true, true, true, true],
	panelType: PANEL_TYPES.TIME_SERIES,
} as GetSeriesProps;