/**
 * Company Stats Data
 * Extracted from Career Launch 2025 HTML artifact
 * Contains performance metrics for all 27 company sessions
 */

export interface BoardData {
  name: string;
  count: number;
}

export interface GradeDistribution {
  grade7?: number;
  grade8?: number;
  grade9?: number;
  grade10?: number;
  grade11?: number;
  grade12?: number;
  mixed?: number;
}

export interface BoothMetrics {
  pageViews?: number;
  uniqueVisitors?: number;
  videoViews?: number;
  quizStarts?: number;
  quizCompletions?: number;
  completionRate?: string;
  badgesDownloaded?: number;
  ctaClicks?: number;
  resourcesClicked?: number;
}

export interface CompanyData {
  id: string;
  title: string;
  presenter: string;
  views: number;
  reach: number;
  gradeDistribution: GradeDistribution;
  boothMetrics: BoothMetrics;
  boardsViews: BoardData[];
  boardsReach: BoardData[];
  totalBoards: number;
}

export const companiesData: CompanyData[] = 
[
  {
    "id": "Cansbridge_Scholars",
    "title": "How to Figure Out What to Do with Your Life",
    "presenter": "Cansbridge Scholars",
    "views": 521,
    "reach": 6169,
    "gradeDistribution": {
      "grade7": 11,
      "grade8": 8,
      "grade9": 23,
      "grade10": 25,
      "grade11": 11,
      "grade12": 11,
      "mixed": 12
    },
    "boothMetrics": {
      "pageViews": 495,
      "uniqueVisitors": 317,
      "videoViews": 156,
      "quizStarts": 92,
      "quizCompletions": 46,
      "completionRate": "50%",
      "badgesDownloaded": 129,
      "ctaClicks": 2,
      "resourcesClicked": 6
    },
    "boardsViews": [
      {
        "name": "Ottawa Catholic",
        "count": 178
      },
      {
        "name": "Peel DSB",
        "count": 108
      },
      {
        "name": "Upper Canada",
        "count": 86
      },
      {
        "name": "Bluewater",
        "count": 28
      },
      {
        "name": "Waterloo Region",
        "count": 17
      },
      {
        "name": "Toronto Catholic",
        "count": 16
      },
      {
        "name": "Lambton Kent",
        "count": 12
      },
      {
        "name": "DSBONE",
        "count": 10
      }
    ],
    "boardsReach": [
      {
        "name": "Ottawa Catholic",
        "count": 2086
      },
      {
        "name": "Peel DSB",
        "count": 1281
      },
      {
        "name": "Upper Canada",
        "count": 1023
      },
      {
        "name": "Bluewater",
        "count": 334
      },
      {
        "name": "Waterloo Region",
        "count": 205
      },
      {
        "name": "Toronto Catholic",
        "count": 194
      },
      {
        "name": "Lambton Kent",
        "count": 140
      },
      {
        "name": "DSBONE",
        "count": 118
      }
    ],
    "totalBoards": 23
  },
  {
    "id": "TKS_(The_Knowledge_Society)",
    "title": "How AI is Impacting the Future of Jobs",
    "presenter": "TKS (The Knowledge Society)",
    "views": 468,
    "reach": 5244,
    "gradeDistribution": {
      "grade7": 12,
      "grade8": 13,
      "grade9": 16,
      "grade10": 22,
      "grade11": 13,
      "grade12": 12,
      "mixed": 11
    },
    "boothMetrics": {},
    "boardsViews": [
      {
        "name": "Peel DSB",
        "count": 120
      },
      {
        "name": "Ottawa Catholic",
        "count": 97
      },
      {
        "name": "Upper Canada",
        "count": 62
      },
      {
        "name": "Dufferin-Peel",
        "count": 28
      },
      {
        "name": "Toronto Catholic",
        "count": 25
      },
      {
        "name": "Hamilton-Wentworth",
        "count": 20
      },
      {
        "name": "Bluewater",
        "count": 17
      },
      {
        "name": "Lambton Kent",
        "count": 16
      }
    ],
    "boardsReach": [
      {
        "name": "Peel DSB",
        "count": 1357
      },
      {
        "name": "Ottawa Catholic",
        "count": 1081
      },
      {
        "name": "Upper Canada",
        "count": 694
      },
      {
        "name": "Dufferin-Peel",
        "count": 316
      },
      {
        "name": "Toronto Catholic",
        "count": 286
      },
      {
        "name": "Hamilton-Wentworth",
        "count": 224
      },
      {
        "name": "Bluewater",
        "count": 194
      },
      {
        "name": "Lambton Kent",
        "count": 184
      }
    ],
    "totalBoards": 24
  },
  {
    "id": "Toronto_Police_Services",
    "title": "Careers at the Toronto Police Service",
    "presenter": "Toronto Police Services",
    "views": 410,
    "reach": 4263,
    "gradeDistribution": {
      "grade7": 13,
      "grade8": 10,
      "grade9": 14,
      "grade10": 31,
      "grade11": 14,
      "grade12": 10,
      "mixed": 8
    },
    "boothMetrics": {
      "pageViews": 655,
      "uniqueVisitors": 414,
      "videoViews": 76,
      "quizStarts": 52,
      "quizCompletions": 23,
      "completionRate": "44%",
      "badgesDownloaded": 11,
      "ctaClicks": 3,
      "resourcesClicked": 2
    },
    "boardsViews": [
      {
        "name": "Ottawa Catholic",
        "count": 113
      },
      {
        "name": "Peel DSB",
        "count": 95
      },
      {
        "name": "Upper Canada",
        "count": 44
      },
      {
        "name": "Bluewater",
        "count": 23
      },
      {
        "name": "Simcoe County",
        "count": 21
      },
      {
        "name": "Toronto Catholic",
        "count": 16
      },
      {
        "name": "DSBONE",
        "count": 15
      },
      {
        "name": "Lambton Kent",
        "count": 13
      }
    ],
    "boardsReach": [
      {
        "name": "Ottawa Catholic",
        "count": 1184
      },
      {
        "name": "Peel DSB",
        "count": 992
      },
      {
        "name": "Upper Canada",
        "count": 454
      },
      {
        "name": "Bluewater",
        "count": 236
      },
      {
        "name": "Simcoe County",
        "count": 217
      },
      {
        "name": "Toronto Catholic",
        "count": 170
      },
      {
        "name": "DSBONE",
        "count": 151
      },
      {
        "name": "Lambton Kent",
        "count": 132
      }
    ],
    "totalBoards": 24
  },
  {
    "id": "Encore_Canada",
    "title": "Behind the Magic: Exploring the World of Events, Concerts & Experiences",
    "presenter": "Encore Canada",
    "views": 305,
    "reach": 4211,
    "gradeDistribution": {
      "grade7": 8,
      "grade8": 10,
      "grade9": 25,
      "grade10": 21,
      "grade11": 13,
      "grade12": 9,
      "mixed": 14
    },
    "boothMetrics": {
      "pageViews": 370,
      "uniqueVisitors": 243,
      "videoViews": 110,
      "quizStarts": 51,
      "quizCompletions": 38,
      "completionRate": "75%",
      "badgesDownloaded": 39,
      "ctaClicks": 2,
      "resourcesClicked": 3
    },
    "boardsViews": [
      {
        "name": "Peel DSB",
        "count": 82
      },
      {
        "name": "Ottawa Catholic",
        "count": 67
      },
      {
        "name": "Upper Canada",
        "count": 63
      },
      {
        "name": "Simcoe County",
        "count": 10
      },
      {
        "name": "Dufferin-Peel",
        "count": 8
      },
      {
        "name": "DSBONE",
        "count": 8
      },
      {
        "name": "Lambton Kent",
        "count": 7
      },
      {
        "name": "Hamilton-Wentworth",
        "count": 7
      }
    ],
    "boardsReach": [
      {
        "name": "Peel DSB",
        "count": 1155
      },
      {
        "name": "Ottawa Catholic",
        "count": 930
      },
      {
        "name": "Upper Canada",
        "count": 867
      },
      {
        "name": "Simcoe County",
        "count": 138
      },
      {
        "name": "Dufferin-Peel",
        "count": 113
      },
      {
        "name": "DSBONE",
        "count": 113
      },
      {
        "name": "Lambton Kent",
        "count": 101
      },
      {
        "name": "Hamilton-Wentworth",
        "count": 101
      }
    ],
    "totalBoards": 24
  },
  {
    "id": "Mydoh",
    "title": "Making Bank \u2013 Money Skills for Real Life",
    "presenter": "Mydoh",
    "views": 348,
    "reach": 4201,
    "gradeDistribution": {
      "grade7": 8,
      "grade8": 7,
      "grade9": 22,
      "grade10": 23,
      "grade11": 17,
      "grade12": 13,
      "mixed": 10
    },
    "boothMetrics": {
      "pageViews": 302,
      "uniqueVisitors": 199,
      "videoViews": 78,
      "quizStarts": 49,
      "quizCompletions": 21,
      "completionRate": "43%",
      "badgesDownloaded": 7,
      "ctaClicks": 3,
      "resourcesClicked": 1
    },
    "boardsViews": [
      {
        "name": "Ottawa Catholic",
        "count": 104
      },
      {
        "name": "Peel DSB",
        "count": 72
      },
      {
        "name": "Upper Canada",
        "count": 62
      },
      {
        "name": "Toronto Catholic",
        "count": 23
      },
      {
        "name": "DSBONE",
        "count": 14
      },
      {
        "name": "Bluewater",
        "count": 12
      },
      {
        "name": "Keewatin-Patricia",
        "count": 9
      },
      {
        "name": "Lambton Kent",
        "count": 8
      }
    ],
    "boardsReach": [
      {
        "name": "Ottawa Catholic",
        "count": 1264
      },
      {
        "name": "Peel DSB",
        "count": 869
      },
      {
        "name": "Upper Canada",
        "count": 748
      },
      {
        "name": "Toronto Catholic",
        "count": 275
      },
      {
        "name": "DSBONE",
        "count": 165
      },
      {
        "name": "Bluewater",
        "count": 143
      },
      {
        "name": "Keewatin-Patricia",
        "count": 110
      },
      {
        "name": "Lambton Kent",
        "count": 99
      }
    ],
    "totalBoards": 21
  },
  {
    "id": "AgRobotics_Working_Group",
    "title": "AgRobotics \u2013 Not Just for Farm Kids!",
    "presenter": "AgRobotics Working Group",
    "views": 338,
    "reach": 4191,
    "gradeDistribution": {
      "grade7": 12,
      "grade8": 14,
      "grade9": 22,
      "grade10": 21,
      "grade11": 12,
      "grade12": 8,
      "mixed": 8
    },
    "boothMetrics": {
      "pageViews": 704,
      "uniqueVisitors": 478,
      "videoViews": 115,
      "quizStarts": 54,
      "quizCompletions": 39,
      "completionRate": "72%",
      "badgesDownloaded": 65,
      "ctaClicks": 13,
      "resourcesClicked": 7
    },
    "boardsViews": [
      {
        "name": "Peel DSB",
        "count": 96
      },
      {
        "name": "Ottawa Catholic",
        "count": 56
      },
      {
        "name": "Upper Canada",
        "count": 39
      },
      {
        "name": "Simcoe County",
        "count": 18
      },
      {
        "name": "Lambton Kent",
        "count": 16
      },
      {
        "name": "DSBONE",
        "count": 16
      },
      {
        "name": "Toronto Catholic",
        "count": 13
      },
      {
        "name": "Bluewater",
        "count": 11
      }
    ],
    "boardsReach": [
      {
        "name": "Peel DSB",
        "count": 1210
      },
      {
        "name": "Ottawa Catholic",
        "count": 689
      },
      {
        "name": "Upper Canada",
        "count": 486
      },
      {
        "name": "Simcoe County",
        "count": 226
      },
      {
        "name": "Lambton Kent",
        "count": 203
      },
      {
        "name": "DSBONE",
        "count": 203
      },
      {
        "name": "Toronto Catholic",
        "count": 158
      },
      {
        "name": "Bluewater",
        "count": 136
      }
    ],
    "totalBoards": 24
  },
  {
    "id": "Hydro_One",
    "title": "A Better and Brighter Future for All: Hydro One",
    "presenter": "Hydro One",
    "views": 531,
    "reach": 3989,
    "gradeDistribution": {
      "grade7": 11,
      "grade8": 8,
      "grade9": 27,
      "grade10": 22,
      "grade11": 14,
      "grade12": 9,
      "mixed": 8
    },
    "boothMetrics": {
      "pageViews": 495,
      "uniqueVisitors": 354,
      "videoViews": 92,
      "quizStarts": 57,
      "quizCompletions": 41,
      "completionRate": "72%",
      "badgesDownloaded": 61,
      "ctaClicks": 8,
      "resourcesClicked": 32
    },
    "boardsViews": [
      {
        "name": "Peel DSB",
        "count": 279
      },
      {
        "name": "Ottawa Catholic",
        "count": 66
      },
      {
        "name": "Upper Canada",
        "count": 27
      },
      {
        "name": "Bluewater",
        "count": 27
      },
      {
        "name": "Lambton Kent",
        "count": 15
      },
      {
        "name": "Simcoe County",
        "count": 14
      },
      {
        "name": "Toronto Catholic",
        "count": 14
      },
      {
        "name": "Northeastern CDSB",
        "count": 13
      }
    ],
    "boardsReach": [
      {
        "name": "Peel DSB",
        "count": 2103
      },
      {
        "name": "Ottawa Catholic",
        "count": 499
      },
      {
        "name": "Upper Canada",
        "count": 205
      },
      {
        "name": "Bluewater",
        "count": 205
      },
      {
        "name": "Lambton Kent",
        "count": 116
      },
      {
        "name": "Simcoe County",
        "count": 102
      },
      {
        "name": "Toronto Catholic",
        "count": 102
      },
      {
        "name": "Northeastern CDSB",
        "count": 96
      }
    ],
    "totalBoards": 25
  },
  {
    "id": "Royal_Canadian_Air_Force",
    "title": "Careers in the Royal Canadian Air Force (RCAF)",
    "presenter": "Royal Canadian Air Force",
    "views": 313,
    "reach": 3322,
    "gradeDistribution": {
      "grade7": 13,
      "grade8": 11,
      "grade9": 20,
      "grade10": 29,
      "grade11": 11,
      "grade12": 7,
      "mixed": 8
    },
    "boothMetrics": {
      "pageViews": 675,
      "uniqueVisitors": 424,
      "videoViews": 102,
      "quizStarts": 67,
      "quizCompletions": 32,
      "completionRate": "48%",
      "badgesDownloaded": 13,
      "ctaClicks": 4,
      "resourcesClicked": 10
    },
    "boardsViews": [
      {
        "name": "Peel DSB",
        "count": 87
      },
      {
        "name": "Ottawa Catholic",
        "count": 54
      },
      {
        "name": "Upper Canada",
        "count": 53
      },
      {
        "name": "Simcoe County",
        "count": 13
      },
      {
        "name": "Lambton Kent",
        "count": 13
      },
      {
        "name": "DSBONE",
        "count": 12
      },
      {
        "name": "Keewatin-Patricia",
        "count": 12
      },
      {
        "name": "Thames Valley",
        "count": 9
      }
    ],
    "boardsReach": [
      {
        "name": "Peel DSB",
        "count": 944
      },
      {
        "name": "Ottawa Catholic",
        "count": 570
      },
      {
        "name": "Upper Canada",
        "count": 560
      },
      {
        "name": "Simcoe County",
        "count": 135
      },
      {
        "name": "Lambton Kent",
        "count": 135
      },
      {
        "name": "DSBONE",
        "count": 126
      },
      {
        "name": "Keewatin-Patricia",
        "count": 126
      },
      {
        "name": "Thames Valley",
        "count": 97
      }
    ],
    "totalBoards": 25
  },
  {
    "id": "Seeking_Scholarships",
    "title": "Funding Postsecondary Education: Scholarships, Bursaries & OSAP",
    "presenter": "Seeking Scholarships",
    "views": 235,
    "reach": 3111,
    "gradeDistribution": {
      "grade7": 3,
      "grade8": 1,
      "grade9": 9,
      "grade10": 27,
      "grade11": 23,
      "grade12": 29,
      "mixed": 7
    },
    "boothMetrics": {
      "pageViews": 444,
      "uniqueVisitors": 303,
      "videoViews": 124,
      "quizStarts": 81,
      "quizCompletions": 65,
      "completionRate": "80%",
      "badgesDownloaded": 79,
      "ctaClicks": 1,
      "resourcesClicked": 8
    },
    "boardsViews": [
      {
        "name": "Ottawa Catholic",
        "count": 72
      },
      {
        "name": "Peel DSB",
        "count": 63
      },
      {
        "name": "Upper Canada",
        "count": 32
      },
      {
        "name": "Toronto Catholic",
        "count": 29
      },
      {
        "name": "DSBONE",
        "count": 9
      },
      {
        "name": "Simcoe County",
        "count": 5
      },
      {
        "name": "Dufferin-Peel",
        "count": 4
      },
      {
        "name": "Bluewater",
        "count": 4
      }
    ],
    "boardsReach": [
      {
        "name": "Ottawa Catholic",
        "count": 978
      },
      {
        "name": "Peel DSB",
        "count": 832
      },
      {
        "name": "Upper Canada",
        "count": 422
      },
      {
        "name": "Toronto Catholic",
        "count": 386
      },
      {
        "name": "DSBONE",
        "count": 121
      },
      {
        "name": "Simcoe County",
        "count": 72
      },
      {
        "name": "Dufferin-Peel",
        "count": 48
      },
      {
        "name": "Bluewater",
        "count": 48
      }
    ],
    "totalBoards": 16
  },
  {
    "id": "Tourism_Industry_Association_of_Ontario",
    "title": "Careers in Tourism: See What's Possible with Skills that Travel",
    "presenter": "Tourism Industry Association of Ontario",
    "views": 204,
    "reach": 2764,
    "gradeDistribution": {
      "grade7": 8,
      "grade8": 8,
      "grade9": 19,
      "grade10": 26,
      "grade11": 15,
      "grade12": 7,
      "mixed": 16
    },
    "boothMetrics": {
      "pageViews": 279,
      "uniqueVisitors": 201,
      "videoViews": 68,
      "quizStarts": 52,
      "quizCompletions": 39,
      "completionRate": "75%",
      "badgesDownloaded": 30,
      "ctaClicks": 2,
      "resourcesClicked": 2
    },
    "boardsViews": [
      {
        "name": "Ottawa Catholic",
        "count": 57
      },
      {
        "name": "Peel DSB",
        "count": 45
      },
      {
        "name": "Upper Canada",
        "count": 44
      },
      {
        "name": "Toronto Catholic",
        "count": 7
      },
      {
        "name": "DSBONE",
        "count": 7
      },
      {
        "name": "Simcoe County",
        "count": 6
      },
      {
        "name": "Dufferin-Peel",
        "count": 6
      },
      {
        "name": "Lambton Kent",
        "count": 5
      }
    ],
    "boardsReach": [
      {
        "name": "Ottawa Catholic",
        "count": 778
      },
      {
        "name": "Peel DSB",
        "count": 605
      },
      {
        "name": "Upper Canada",
        "count": 592
      },
      {
        "name": "Toronto Catholic",
        "count": 99
      },
      {
        "name": "DSBONE",
        "count": 99
      },
      {
        "name": "Simcoe County",
        "count": 86
      },
      {
        "name": "Dufferin-Peel",
        "count": 86
      },
      {
        "name": "Lambton Kent",
        "count": 74
      }
    ],
    "totalBoards": 22
  },
  {
    "id": "Support_Ontario_Youth",
    "title": "From High School to High Demand: Start Your Skilled Trades Journey",
    "presenter": "Support Ontario Youth",
    "views": 193,
    "reach": 2462,
    "gradeDistribution": {
      "grade7": 5,
      "grade8": 6,
      "grade9": 11,
      "grade10": 28,
      "grade11": 21,
      "grade12": 14,
      "mixed": 15
    },
    "boothMetrics": {
      "pageViews": 349,
      "uniqueVisitors": 230,
      "videoViews": 81,
      "quizStarts": 46,
      "quizCompletions": 23,
      "completionRate": "50%",
      "badgesDownloaded": 7,
      "ctaClicks": 3,
      "resourcesClicked": 7
    },
    "boardsViews": [
      {
        "name": "Peel DSB",
        "count": 50
      },
      {
        "name": "Ottawa Catholic",
        "count": 44
      },
      {
        "name": "Upper Canada",
        "count": 35
      },
      {
        "name": "DSBONE",
        "count": 22
      },
      {
        "name": "Waterloo Region",
        "count": 6
      },
      {
        "name": "Lambton Kent",
        "count": 5
      },
      {
        "name": "Simcoe County",
        "count": 5
      },
      {
        "name": "Northeastern CDSB",
        "count": 4
      }
    ],
    "boardsReach": [
      {
        "name": "Peel DSB",
        "count": 675
      },
      {
        "name": "Ottawa Catholic",
        "count": 557
      },
      {
        "name": "Upper Canada",
        "count": 441
      },
      {
        "name": "DSBONE",
        "count": 279
      },
      {
        "name": "Waterloo Region",
        "count": 81
      },
      {
        "name": "Lambton Kent",
        "count": 70
      },
      {
        "name": "Simcoe County",
        "count": 58
      },
      {
        "name": "Northeastern CDSB",
        "count": 46
      }
    ],
    "totalBoards": 17
  },
  {
    "id": "Discover_Year",
    "title": "Benefits of a Purposeful Gap Year: Inspiring Stories from Discover Year Graduates",
    "presenter": "Discover Year",
    "views": 296,
    "reach": 2460,
    "gradeDistribution": {
      "grade7": 4,
      "grade8": 3,
      "grade9": 21,
      "grade10": 26,
      "grade11": 21,
      "grade12": 17,
      "mixed": 8
    },
    "boothMetrics": {
      "pageViews": 314,
      "uniqueVisitors": 234,
      "videoViews": 55,
      "quizStarts": 47,
      "quizCompletions": 39,
      "completionRate": "83%",
      "badgesDownloaded": 29,
      "ctaClicks": 1,
      "resourcesClicked": 2
    },
    "boardsViews": [
      {
        "name": "Peel DSB",
        "count": 162
      },
      {
        "name": "Ottawa Catholic",
        "count": 61
      },
      {
        "name": "Upper Canada",
        "count": 26
      },
      {
        "name": "Toronto Catholic",
        "count": 9
      },
      {
        "name": "DSBONE",
        "count": 7
      },
      {
        "name": "Bluewater",
        "count": 7
      },
      {
        "name": "Lambton Kent",
        "count": 5
      },
      {
        "name": "Waterloo Region",
        "count": 5
      }
    ],
    "boardsReach": [
      {
        "name": "Peel DSB",
        "count": 1344
      },
      {
        "name": "Ottawa Catholic",
        "count": 507
      },
      {
        "name": "Upper Canada",
        "count": 220
      },
      {
        "name": "Toronto Catholic",
        "count": 76
      },
      {
        "name": "DSBONE",
        "count": 61
      },
      {
        "name": "Bluewater",
        "count": 61
      },
      {
        "name": "Lambton Kent",
        "count": 45
      },
      {
        "name": "Waterloo Region",
        "count": 38
      }
    ],
    "totalBoards": 16
  },
  {
    "id": "Humber_Polytechnic",
    "title": "Engineer Your Dream Career: Your Path in Engineering Starts at Humber",
    "presenter": "Humber Polytechnic",
    "views": 272,
    "reach": 2199,
    "gradeDistribution": {
      "grade7": 11,
      "grade8": 9,
      "grade9": 20,
      "grade10": 27,
      "grade11": 14,
      "grade12": 11,
      "mixed": 7
    },
    "boothMetrics": {
      "pageViews": 312,
      "uniqueVisitors": 226,
      "videoViews": 37,
      "quizStarts": 16,
      "quizCompletions": 8,
      "completionRate": "50%",
      "badgesDownloaded": 5,
      "ctaClicks": 2,
      "resourcesClicked": 1
    },
    "boardsViews": [
      {
        "name": "Peel DSB",
        "count": 106
      },
      {
        "name": "Ottawa Catholic",
        "count": 51
      },
      {
        "name": "Upper Canada",
        "count": 25
      },
      {
        "name": "Bluewater",
        "count": 17
      },
      {
        "name": "Lambton Kent",
        "count": 15
      },
      {
        "name": "DSBONE",
        "count": 13
      },
      {
        "name": "Toronto Catholic",
        "count": 8
      },
      {
        "name": "Waterloo Region",
        "count": 7
      }
    ],
    "boardsReach": [
      {
        "name": "Peel DSB",
        "count": 868
      },
      {
        "name": "Ottawa Catholic",
        "count": 412
      },
      {
        "name": "Upper Canada",
        "count": 199
      },
      {
        "name": "Bluewater",
        "count": 140
      },
      {
        "name": "Lambton Kent",
        "count": 118
      },
      {
        "name": "DSBONE",
        "count": 103
      },
      {
        "name": "Toronto Catholic",
        "count": 66
      },
      {
        "name": "Waterloo Region",
        "count": 59
      }
    ],
    "totalBoards": 19
  },
  {
    "id": "AITC-C_and_CAHRC",
    "title": "Agriculture & Agri-Food Careers: Perceptions and Projections",
    "presenter": "AITC-C & CAHRC",
    "views": 195,
    "reach": 2148,
    "gradeDistribution": {
      "grade7": 13,
      "grade8": 10,
      "grade9": 30,
      "grade10": 24,
      "grade11": 6,
      "grade12": 7,
      "mixed": 10
    },
    "boothMetrics": {
      "pageViews": 315,
      "uniqueVisitors": 222,
      "videoViews": 25,
      "quizStarts": 4,
      "quizCompletions": 3,
      "completionRate": "75%",
      "badgesDownloaded": 2,
      "ctaClicks": 1,
      "resourcesClicked": 0
    },
    "boardsViews": [
      {
        "name": "Peel DSB",
        "count": 74
      },
      {
        "name": "Upper Canada",
        "count": 25
      },
      {
        "name": "Ottawa Catholic",
        "count": 23
      },
      {
        "name": "Bluewater",
        "count": 11
      },
      {
        "name": "Lambton Kent",
        "count": 10
      },
      {
        "name": "DSBONE",
        "count": 6
      },
      {
        "name": "Waterloo Region",
        "count": 5
      },
      {
        "name": "Renfrew County",
        "count": 5
      }
    ],
    "boardsReach": [
      {
        "name": "Peel DSB",
        "count": 846
      },
      {
        "name": "Upper Canada",
        "count": 271
      },
      {
        "name": "Ottawa Catholic",
        "count": 251
      },
      {
        "name": "Bluewater",
        "count": 120
      },
      {
        "name": "Lambton Kent",
        "count": 110
      },
      {
        "name": "DSBONE",
        "count": 70
      },
      {
        "name": "Waterloo Region",
        "count": 60
      },
      {
        "name": "Renfrew County",
        "count": 60
      }
    ],
    "totalBoards": 25
  },
  {
    "id": "CWB_Welding_Foundation",
    "title": "The World of Welding and Materials Joining",
    "presenter": "CWB Welding Foundation",
    "views": 187,
    "reach": 2140,
    "gradeDistribution": {
      "grade7": 11,
      "grade8": 16,
      "grade9": 12,
      "grade10": 26,
      "grade11": 15,
      "grade12": 6,
      "mixed": 9
    },
    "boothMetrics": {
      "pageViews": 389,
      "uniqueVisitors": 278,
      "videoViews": 103,
      "quizStarts": 43,
      "quizCompletions": 34,
      "completionRate": "79%",
      "badgesDownloaded": 48,
      "ctaClicks": 2,
      "resourcesClicked": 1
    },
    "boardsViews": [
      {
        "name": "Peel DSB",
        "count": 71
      },
      {
        "name": "Upper Canada",
        "count": 18
      },
      {
        "name": "Bluewater",
        "count": 14
      },
      {
        "name": "Lambton Kent",
        "count": 11
      },
      {
        "name": "Waterloo Region",
        "count": 10
      },
      {
        "name": "Keewatin-Patricia",
        "count": 10
      },
      {
        "name": "DSBONE",
        "count": 8
      },
      {
        "name": "Ottawa Catholic",
        "count": 7
      }
    ],
    "boardsReach": [
      {
        "name": "Peel DSB",
        "count": 843
      },
      {
        "name": "Upper Canada",
        "count": 208
      },
      {
        "name": "Bluewater",
        "count": 156
      },
      {
        "name": "Lambton Kent",
        "count": 125
      },
      {
        "name": "Waterloo Region",
        "count": 114
      },
      {
        "name": "Keewatin-Patricia",
        "count": 114
      },
      {
        "name": "DSBONE",
        "count": 93
      },
      {
        "name": "Ottawa Catholic",
        "count": 83
      }
    ],
    "totalBoards": 22
  },
  {
    "id": "Diversity_Institute",
    "title": "Decode the Job Market: How to Use Data to Choose Your Career",
    "presenter": "Diversity Institute",
    "views": 186,
    "reach": 1901,
    "gradeDistribution": {
      "grade7": 2,
      "grade8": 2,
      "grade9": 19,
      "grade10": 46,
      "grade11": 12,
      "grade12": 11,
      "mixed": 8
    },
    "boothMetrics": {
      "pageViews": 294,
      "uniqueVisitors": 202,
      "videoViews": 53,
      "quizStarts": 42,
      "quizCompletions": 26,
      "completionRate": "62%",
      "badgesDownloaded": 13,
      "ctaClicks": 0,
      "resourcesClicked": 9
    },
    "boardsViews": [
      {
        "name": "Peel DSB",
        "count": 56
      },
      {
        "name": "Algoma DSB",
        "count": 45
      },
      {
        "name": "Ottawa Catholic",
        "count": 36
      },
      {
        "name": "Upper Canada",
        "count": 18
      },
      {
        "name": "Toronto Catholic",
        "count": 8
      },
      {
        "name": "Simcoe County",
        "count": 5
      },
      {
        "name": "Smithville Christian",
        "count": 4
      },
      {
        "name": "Lambton Kent",
        "count": 2
      }
    ],
    "boardsReach": [
      {
        "name": "Peel DSB",
        "count": 596
      },
      {
        "name": "Algoma DSB",
        "count": 457
      },
      {
        "name": "Ottawa Catholic",
        "count": 363
      },
      {
        "name": "Upper Canada",
        "count": 186
      },
      {
        "name": "Toronto Catholic",
        "count": 84
      },
      {
        "name": "Simcoe County",
        "count": 47
      },
      {
        "name": "Smithville Christian",
        "count": 37
      },
      {
        "name": "Lambton Kent",
        "count": 19
      }
    ],
    "totalBoards": 16
  },
  {
    "id": "HSMC",
    "title": "Fire Alarm Technician: A Career that Helps Keep People Safe",
    "presenter": "HSMC",
    "views": 225,
    "reach": 1887,
    "gradeDistribution": {
      "grade7": 14,
      "grade8": 10,
      "grade9": 27,
      "grade10": 23,
      "grade11": 11,
      "grade12": 10,
      "mixed": 6
    },
    "boothMetrics": {
      "pageViews": 282,
      "uniqueVisitors": 217,
      "videoViews": 28,
      "quizStarts": 26,
      "quizCompletions": 20,
      "completionRate": "77%",
      "badgesDownloaded": 11,
      "ctaClicks": 0,
      "resourcesClicked": 5
    },
    "boardsViews": [
      {
        "name": "Ottawa Catholic",
        "count": 63
      },
      {
        "name": "Peel DSB",
        "count": 51
      },
      {
        "name": "Upper Canada",
        "count": 21
      },
      {
        "name": "Lambton Kent",
        "count": 14
      },
      {
        "name": "DSBONE",
        "count": 14
      },
      {
        "name": "Hamilton-Wentworth",
        "count": 9
      },
      {
        "name": "Toronto Catholic",
        "count": 7
      },
      {
        "name": "Thames Valley",
        "count": 6
      }
    ],
    "boardsReach": [
      {
        "name": "Ottawa Catholic",
        "count": 541
      },
      {
        "name": "Peel DSB",
        "count": 428
      },
      {
        "name": "Upper Canada",
        "count": 176
      },
      {
        "name": "Lambton Kent",
        "count": 115
      },
      {
        "name": "DSBONE",
        "count": 115
      },
      {
        "name": "Hamilton-Wentworth",
        "count": 76
      },
      {
        "name": "Toronto Catholic",
        "count": 61
      },
      {
        "name": "Thames Valley",
        "count": 53
      }
    ],
    "totalBoards": 18
  },
  {
    "id": "Kids_Help_Phone",
    "title": "Building Your Future Through Leadership and Volunteerism",
    "presenter": "Kids Help Phone",
    "views": 226,
    "reach": 1862,
    "gradeDistribution": {
      "grade7": 8,
      "grade8": 6,
      "grade9": 29,
      "grade10": 31,
      "grade11": 13,
      "grade12": 6,
      "mixed": 6
    },
    "boothMetrics": {
      "pageViews": 596,
      "uniqueVisitors": 417,
      "videoViews": 142,
      "quizStarts": 72,
      "quizCompletions": 51,
      "completionRate": "71%",
      "badgesDownloaded": 70,
      "ctaClicks": 9,
      "resourcesClicked": 24
    },
    "boardsViews": [
      {
        "name": "Peel DSB",
        "count": 77
      },
      {
        "name": "Ottawa Catholic",
        "count": 53
      },
      {
        "name": "Simcoe County",
        "count": 17
      },
      {
        "name": "Upper Canada",
        "count": 15
      },
      {
        "name": "Toronto Catholic",
        "count": 14
      },
      {
        "name": "Lambton Kent",
        "count": 10
      },
      {
        "name": "DSBONE",
        "count": 7
      },
      {
        "name": "Dufferin-Peel",
        "count": 5
      }
    ],
    "boardsReach": [
      {
        "name": "Peel DSB",
        "count": 649
      },
      {
        "name": "Ottawa Catholic",
        "count": 435
      },
      {
        "name": "Simcoe County",
        "count": 143
      },
      {
        "name": "Upper Canada",
        "count": 120
      },
      {
        "name": "Toronto Catholic",
        "count": 113
      },
      {
        "name": "Lambton Kent",
        "count": 83
      },
      {
        "name": "DSBONE",
        "count": 60
      },
      {
        "name": "Dufferin-Peel",
        "count": 45
      }
    ],
    "totalBoards": 20
  },
  {
    "id": "Conservation_Authorities",
    "title": "Careers in Conservation: Shaping the Future of Our Environment",
    "presenter": "Conservation Authorities",
    "views": 137,
    "reach": 1825,
    "gradeDistribution": {
      "grade7": 7,
      "grade8": 3,
      "grade9": 27,
      "grade10": 27,
      "grade11": 12,
      "grade12": 12,
      "mixed": 11
    },
    "boothMetrics": {
      "pageViews": 276,
      "uniqueVisitors": 200,
      "videoViews": 32,
      "quizStarts": 12,
      "quizCompletions": 5,
      "completionRate": "42%",
      "badgesDownloaded": 6,
      "ctaClicks": 0,
      "resourcesClicked": 2
    },
    "boardsViews": [
      {
        "name": "Ottawa Catholic",
        "count": 39
      },
      {
        "name": "Upper Canada",
        "count": 26
      },
      {
        "name": "Peel DSB",
        "count": 26
      },
      {
        "name": "Toronto Catholic",
        "count": 11
      },
      {
        "name": "Bluewater",
        "count": 6
      },
      {
        "name": "Keewatin-Patricia",
        "count": 5
      },
      {
        "name": "Simcoe County",
        "count": 5
      },
      {
        "name": "DSBONE",
        "count": 3
      }
    ],
    "boardsReach": [
      {
        "name": "Ottawa Catholic",
        "count": 562
      },
      {
        "name": "Upper Canada",
        "count": 341
      },
      {
        "name": "Peel DSB",
        "count": 341
      },
      {
        "name": "Toronto Catholic",
        "count": 146
      },
      {
        "name": "Bluewater",
        "count": 85
      },
      {
        "name": "Keewatin-Patricia",
        "count": 61
      },
      {
        "name": "Simcoe County",
        "count": 61
      },
      {
        "name": "DSBONE",
        "count": 36
      }
    ],
    "totalBoards": 19
  },
  {
    "id": "Canadian_Nuclear_Laboratories",
    "title": "From Science to Trades: Explore the Power of Possibility at Canadian Nuclear Laboratories!",
    "presenter": "Canadian Nuclear Laboratories",
    "views": 143,
    "reach": 1779,
    "gradeDistribution": {
      "grade7": 7,
      "grade8": 10,
      "grade9": 20,
      "grade10": 26,
      "grade11": 15,
      "grade12": 9,
      "mixed": 13
    },
    "boothMetrics": {
      "pageViews": 451,
      "uniqueVisitors": 321,
      "videoViews": 57,
      "quizStarts": 17,
      "quizCompletions": 10,
      "completionRate": "59%",
      "badgesDownloaded": 5,
      "ctaClicks": 3,
      "resourcesClicked": 4
    },
    "boardsViews": [
      {
        "name": "Upper Canada",
        "count": 37
      },
      {
        "name": "Peel DSB",
        "count": 34
      },
      {
        "name": "Ottawa Catholic",
        "count": 28
      },
      {
        "name": "Bluewater",
        "count": 8
      },
      {
        "name": "Thames Valley",
        "count": 5
      },
      {
        "name": "DSBONE",
        "count": 5
      },
      {
        "name": "Dufferin-Peel",
        "count": 4
      },
      {
        "name": "Lambton Kent",
        "count": 4
      }
    ],
    "boardsReach": [
      {
        "name": "Upper Canada",
        "count": 499
      },
      {
        "name": "Peel DSB",
        "count": 419
      },
      {
        "name": "Ottawa Catholic",
        "count": 351
      },
      {
        "name": "Bluewater",
        "count": 102
      },
      {
        "name": "Thames Valley",
        "count": 57
      },
      {
        "name": "DSBONE",
        "count": 57
      },
      {
        "name": "Dufferin-Peel",
        "count": 45
      },
      {
        "name": "Lambton Kent",
        "count": 45
      }
    ],
    "totalBoards": 18
  },
  {
    "id": "Ontario_Water_Careers",
    "title": "Build Big Things, Make Big Money \u2013 Water Careers You Can Start Now!",
    "presenter": "Ontario Water Careers",
    "views": 177,
    "reach": 1603,
    "gradeDistribution": {
      "grade7": 11,
      "grade8": 8,
      "grade9": 25,
      "grade10": 21,
      "grade11": 18,
      "grade12": 7,
      "mixed": 8
    },
    "boothMetrics": {
      "pageViews": 236,
      "uniqueVisitors": 179,
      "videoViews": 19,
      "quizStarts": 8,
      "quizCompletions": 5,
      "completionRate": "62%",
      "badgesDownloaded": 2,
      "ctaClicks": 2,
      "resourcesClicked": 1
    },
    "boardsViews": [
      {
        "name": "Peel DSB",
        "count": 75
      },
      {
        "name": "Upper Canada",
        "count": 24
      },
      {
        "name": "Ottawa Catholic",
        "count": 20
      },
      {
        "name": "Lambton Kent",
        "count": 11
      },
      {
        "name": "Bluewater",
        "count": 10
      },
      {
        "name": "DSBONE",
        "count": 5
      },
      {
        "name": "PVNC DSB",
        "count": 5
      },
      {
        "name": "Keewatin-Patricia",
        "count": 5
      }
    ],
    "boardsReach": [
      {
        "name": "Peel DSB",
        "count": 703
      },
      {
        "name": "Upper Canada",
        "count": 214
      },
      {
        "name": "Ottawa Catholic",
        "count": 181
      },
      {
        "name": "Lambton Kent",
        "count": 99
      },
      {
        "name": "Bluewater",
        "count": 90
      },
      {
        "name": "DSBONE",
        "count": 49
      },
      {
        "name": "PVNC DSB",
        "count": 49
      },
      {
        "name": "Keewatin-Patricia",
        "count": 41
      }
    ],
    "totalBoards": 22
  },
  {
    "id": "Life_Sciences_Ontario",
    "title": "Panel Interview \u2013 Careers in the Life Sciences Sector",
    "presenter": "Life Sciences Ontario",
    "views": 202,
    "reach": 1601,
    "gradeDistribution": {
      "grade7": 3,
      "grade8": 5,
      "grade9": 21,
      "grade10": 36,
      "grade11": 20,
      "grade12": 10,
      "mixed": 5
    },
    "boothMetrics": {},
    "boardsViews": [
      {
        "name": "Peel DSB",
        "count": 101
      },
      {
        "name": "Ottawa Catholic",
        "count": 38
      },
      {
        "name": "Toronto Catholic",
        "count": 14
      },
      {
        "name": "Upper Canada",
        "count": 9
      },
      {
        "name": "Lambton Kent",
        "count": 5
      },
      {
        "name": "Waterloo Region",
        "count": 5
      },
      {
        "name": "Simcoe County",
        "count": 3
      },
      {
        "name": "Thames Valley",
        "count": 3
      }
    ],
    "boardsReach": [
      {
        "name": "Peel DSB",
        "count": 823
      },
      {
        "name": "Ottawa Catholic",
        "count": 303
      },
      {
        "name": "Toronto Catholic",
        "count": 108
      },
      {
        "name": "Upper Canada",
        "count": 72
      },
      {
        "name": "Lambton Kent",
        "count": 43
      },
      {
        "name": "Waterloo Region",
        "count": 36
      },
      {
        "name": "Simcoe County",
        "count": 22
      },
      {
        "name": "Thames Valley",
        "count": 22
      }
    ],
    "totalBoards": 21
  },
  {
    "id": "Studenthaus",
    "title": "From Student to Industry Leader: Building Your Career Through Entrepreneurship",
    "presenter": "Studenthaus",
    "views": 192,
    "reach": 1485,
    "gradeDistribution": {
      "grade7": 11,
      "grade8": 10,
      "grade9": 22,
      "grade10": 20,
      "grade11": 15,
      "grade12": 18,
      "mixed": 4
    },
    "boothMetrics": {
      "pageViews": 231,
      "uniqueVisitors": 151,
      "videoViews": 104,
      "quizStarts": 44,
      "quizCompletions": 37,
      "completionRate": "84%",
      "badgesDownloaded": 35,
      "ctaClicks": 1,
      "resourcesClicked": 7
    },
    "boardsViews": [
      {
        "name": "Peel DSB",
        "count": 72
      },
      {
        "name": "Ottawa Catholic",
        "count": 46
      },
      {
        "name": "Upper Canada",
        "count": 15
      },
      {
        "name": "Bluewater",
        "count": 14
      },
      {
        "name": "Lambton Kent",
        "count": 8
      },
      {
        "name": "Toronto Catholic",
        "count": 5
      },
      {
        "name": "Keewatin-Patricia",
        "count": 5
      },
      {
        "name": "Dufferin-Peel",
        "count": 5
      }
    ],
    "boardsReach": [
      {
        "name": "Peel DSB",
        "count": 578
      },
      {
        "name": "Ottawa Catholic",
        "count": 359
      },
      {
        "name": "Upper Canada",
        "count": 113
      },
      {
        "name": "Bluewater",
        "count": 106
      },
      {
        "name": "Lambton Kent",
        "count": 63
      },
      {
        "name": "Toronto Catholic",
        "count": 42
      },
      {
        "name": "Keewatin-Patricia",
        "count": 35
      },
      {
        "name": "Dufferin-Peel",
        "count": 35
      }
    ],
    "totalBoards": 17
  },
  {
    "id": "Ernst_and_Young",
    "title": "Consulting, Accounting, Digital Transformation and More",
    "presenter": "Ernst & Young",
    "views": 201,
    "reach": 1468,
    "gradeDistribution": {
      "grade7": 9,
      "grade8": 2,
      "grade9": 24,
      "grade10": 29,
      "grade11": 14,
      "grade12": 19,
      "mixed": 3
    },
    "boothMetrics": {
      "pageViews": 246,
      "uniqueVisitors": 190,
      "videoViews": 38,
      "quizStarts": 30,
      "quizCompletions": 24,
      "completionRate": "80%",
      "badgesDownloaded": 5,
      "ctaClicks": 1,
      "resourcesClicked": 0
    },
    "boardsViews": [
      {
        "name": "Peel DSB",
        "count": 99
      },
      {
        "name": "Ottawa Catholic",
        "count": 40
      },
      {
        "name": "Upper Canada",
        "count": 15
      },
      {
        "name": "Bluewater",
        "count": 12
      },
      {
        "name": "Toronto Catholic",
        "count": 10
      },
      {
        "name": "DSBONE",
        "count": 5
      },
      {
        "name": "Lambton Kent",
        "count": 4
      },
      {
        "name": "Waterloo Region",
        "count": 4
      }
    ],
    "boardsReach": [
      {
        "name": "Peel DSB",
        "count": 730
      },
      {
        "name": "Ottawa Catholic",
        "count": 292
      },
      {
        "name": "Upper Canada",
        "count": 113
      },
      {
        "name": "Bluewater",
        "count": 86
      },
      {
        "name": "Toronto Catholic",
        "count": 73
      },
      {
        "name": "DSBONE",
        "count": 40
      },
      {
        "name": "Lambton Kent",
        "count": 27
      },
      {
        "name": "Waterloo Region",
        "count": 27
      }
    ],
    "totalBoards": 15
  },
  {
    "id": "Jackorg",
    "title": "Mental Health Skills for Life: A Youth-Led Mental Health Conversation with Jack.org",
    "presenter": "Jack.org",
    "views": 96,
    "reach": 1072,
    "gradeDistribution": {
      "grade7": 10,
      "grade8": 10,
      "grade9": 24,
      "grade10": 16,
      "grade11": 13,
      "grade12": 10,
      "mixed": 15
    },
    "boothMetrics": {
      "pageViews": 283,
      "uniqueVisitors": 212,
      "videoViews": 27,
      "quizStarts": 15,
      "quizCompletions": 9,
      "completionRate": "60%",
      "badgesDownloaded": 8,
      "ctaClicks": 2,
      "resourcesClicked": 3
    },
    "boardsViews": [
      {
        "name": "Peel DSB",
        "count": 18
      },
      {
        "name": "Ottawa Catholic",
        "count": 16
      },
      {
        "name": "Upper Canada",
        "count": 16
      },
      {
        "name": "Lambton Kent",
        "count": 9
      },
      {
        "name": "Toronto Catholic",
        "count": 5
      },
      {
        "name": "Bruce-Grey Catholic",
        "count": 4
      },
      {
        "name": "Bluewater",
        "count": 4
      },
      {
        "name": "DSBONE",
        "count": 3
      }
    ],
    "boardsReach": [
      {
        "name": "Peel DSB",
        "count": 225
      },
      {
        "name": "Ottawa Catholic",
        "count": 184
      },
      {
        "name": "Upper Canada",
        "count": 174
      },
      {
        "name": "Lambton Kent",
        "count": 102
      },
      {
        "name": "Toronto Catholic",
        "count": 61
      },
      {
        "name": "Bruce-Grey Catholic",
        "count": 41
      },
      {
        "name": "Bluewater",
        "count": 41
      },
      {
        "name": "DSBONE",
        "count": 31
      }
    ],
    "totalBoards": 18
  },
  {
    "id": "Vox_Pop_Labs",
    "title": "Built to Make You Think: The People Behind Vote Compass Youth & DegreeHub",
    "presenter": "Vox Pop Labs",
    "views": 169,
    "reach": 1067,
    "gradeDistribution": {
      "grade7": 7,
      "grade8": 11,
      "grade9": 28,
      "grade10": 26,
      "grade11": 11,
      "grade12": 12,
      "mixed": 3
    },
    "boothMetrics": {
      "pageViews": 229,
      "uniqueVisitors": 163,
      "videoViews": 43,
      "quizStarts": 27,
      "quizCompletions": 21,
      "completionRate": "78%",
      "badgesDownloaded": 18,
      "ctaClicks": 0,
      "resourcesClicked": 0
    },
    "boardsViews": [
      {
        "name": "Peel DSB",
        "count": 88
      },
      {
        "name": "Ottawa Catholic",
        "count": 26
      },
      {
        "name": "Simcoe County",
        "count": 8
      },
      {
        "name": "Keewatin-Patricia",
        "count": 7
      },
      {
        "name": "Hamilton-Wentworth",
        "count": 5
      },
      {
        "name": "Upper Canada",
        "count": 5
      },
      {
        "name": "Waterloo Region",
        "count": 4
      },
      {
        "name": "York Catholic",
        "count": 4
      }
    ],
    "boardsReach": [
      {
        "name": "Peel DSB",
        "count": 568
      },
      {
        "name": "Ottawa Catholic",
        "count": 166
      },
      {
        "name": "Simcoe County",
        "count": 52
      },
      {
        "name": "Keewatin-Patricia",
        "count": 46
      },
      {
        "name": "Hamilton-Wentworth",
        "count": 34
      },
      {
        "name": "Upper Canada",
        "count": 29
      },
      {
        "name": "Waterloo Region",
        "count": 23
      },
      {
        "name": "York Catholic",
        "count": 23
      }
    ],
    "totalBoards": 17
  },
  {
    "id": "CPKC",
    "title": "Big Moves Start Here and Take You Anywhere! Connecting North America Across Three Nations",
    "presenter": "CPKC",
    "views": 73,
    "reach": 653,
    "gradeDistribution": {
      "grade7": 5,
      "grade8": 10,
      "grade9": 29,
      "grade10": 21,
      "grade11": 8,
      "grade12": 18,
      "mixed": 8
    },
    "boothMetrics": {
      "pageViews": 245,
      "uniqueVisitors": 174,
      "videoViews": 46,
      "quizStarts": 35,
      "quizCompletions": 19,
      "completionRate": "54%",
      "badgesDownloaded": 47,
      "ctaClicks": 1,
      "resourcesClicked": 0
    },
    "boardsViews": [
      {
        "name": "Peel DSB",
        "count": 27
      },
      {
        "name": "Ottawa Catholic",
        "count": 23
      },
      {
        "name": "Upper Canada",
        "count": 5
      },
      {
        "name": "Lambton Kent",
        "count": 3
      },
      {
        "name": "DSBONE",
        "count": 3
      },
      {
        "name": "Simcoe County",
        "count": 2
      },
      {
        "name": "PVNC DSB",
        "count": 2
      },
      {
        "name": "Bluewater",
        "count": 2
      }
    ],
    "boardsReach": [
      {
        "name": "Peel DSB",
        "count": 256
      },
      {
        "name": "Ottawa Catholic",
        "count": 204
      },
      {
        "name": "Upper Canada",
        "count": 49
      },
      {
        "name": "Lambton Kent",
        "count": 24
      },
      {
        "name": "DSBONE",
        "count": 24
      },
      {
        "name": "Simcoe County",
        "count": 16
      },
      {
        "name": "PVNC DSB",
        "count": 16
      },
      {
        "name": "Bluewater",
        "count": 16
      }
    ],
    "totalBoards": 13
  }
]
;
